import os
import json
import re

repo_file_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
parent_file_path = os.path.abspath(os.path.dirname(__file__))
input_file_path = os.path.join(repo_file_path, 'input')
output_file_path =os.path.join(parent_file_path, "output")
resources_file_path = os.path.join(parent_file_path, "Resources")
name_routes_file_path = os.path.join(resources_file_path, "NameRoutes.json")

trainers_file_path = os.path.join(input_file_path, 'english_dp_trainers_name.json')
map_info_file_path = os.path.join(input_file_path, 'MapInfo.json')
area_name_file_path = os.path.join(input_file_path, 'english_dp_fld_areaname.json')
area_display_file_path = os.path.join(input_file_path, 'english_dp_fld_areaname_display.json')
trainer_labels_file_path = os.path.join(input_file_path, 'english_dp_trainers_type.json')
trainer_table_file_path = os.path.join(input_file_path, "TrainerTable.json")

areas_file_path = os.path.join(input_file_path, 'areas.csv')

scripts_file_path = os.path.join(repo_file_path, 'scripts')
bdsp_location_files_path = os.path.join(repo_file_path, 'placedatas')
bdsp_location_files = os.listdir(bdsp_location_files_path)

trainer_labels = 0
trainer_names = 0
areas = 0

ldval_pattern = r"_LDVAL\(@(.*),\s?([1-9][0-9]*)\)"
trainer_pattern = r"_TRAINER_BTL_SET\s*\(\s*('?[^']+'?|@\w+|\d+)\s*(?:,\s*('?[^']+'?|@\w+|\d+)\s*)?\)"
multi_trainer_pattern = r"_TRAINER_MULTI_BTL_SET\s*\(\s*((?:'[^']*'|@\w+|\d+)\s*(?:,\s*(?:'[^']*'|@\w+|\d+)\s*)*)\)"

TRAINER_BATTLE = '_TRAINER_BTL_SET'
MULTI_TRAINER_BATTLE = '_TRAINER_MULTI_BTL_SET'
GYM_AREA_NAME = "GYM"
E4_AREA_NAME = "C10"
ROOM_AREA_NAME = "R0101"
SINGLE_FORMAT = "Single"
DOUBLE_FORMAT = "Double"
GALACTIC_HQ = "Galactic HQ"
GALACTIC_HQ_TRACKER_VAR = "lmpt-33"
STARTERS = ["piplup", "turtwig" ,"chimchar"]
MASTER_TRAINER_TYPES = ["fire", "water", "electric", "grass", "ice", "fighting", "poison", "ground", "flying", "psychic", "bug", "rock", "ghost", "dragon", "dark", "steel", "fairy"]
CELEBI = "Celebi"
PLACE_DATA_METHOD = "Place Data"
SCRIPTED_METHOD = "Scripted"
MULTI_FORMAT = "Multi"
EVIL_TYPE = "Evil"
MALE = "male"
FEMALE = "female"
MASTER_TRAINER = "Master"
BAD_SUPPORT_LOOKUP1 = "ev_r207_func_17" ### These bad lookups are for Lucas and Dawn on Route 207
BAD_SUPPORT_LOOKUP2 = "ev_r207_func_20"
SUPPORT_LINK = "Support"

class UnsupportedTrainer(Exception):
    pass

class InvalidArg(Exception):
    pass

class MissingData(Exception):
    pass

class MultiTrainerError(Exception):
    pass

with open(areas_file_path, encoding="utf-8") as f:
    areas = [line.strip().split(',') for line in f.readlines()]

with open(trainer_table_file_path, mode='r', encoding="utf-8") as f:
    TRAINER_TABLE = json.load(f)

with open(name_routes_file_path, mode='r', encoding="utf-8") as f:
    name_routes = json.load(f)

with open(trainer_labels_file_path, mode='r', encoding="utf-8") as f:
    trainer_labels = json.load(f)

with open(trainers_file_path, mode='r', encoding="utf-8") as f:
    trainer_names = json.load(f)

with open(map_info_file_path, mode='r', encoding="utf-8") as f:
    map_info = json.load(f)

with open(area_display_file_path, mode='r', encoding="utf-8") as f:
    area_display_names = json.load(f)

with open(area_name_file_path, mode='r', encoding="utf-8") as f:
    area_names = json.load(f)

def get_trainer_name(label_name):
    label_data_array = trainer_names['labelDataArray']
    match = next((e for e in label_data_array if e['labelName'] == label_name), None)
    return match['wordDataArray'][0]['str'] if match else None

def get_trainer_id_from_partial(label_name):
    label_data_array = trainer_names['labelDataArray']
    for e in label_data_array:
        if e['labelName'].endswith(str(label_name.strip("'"))):
            return e['labelIndex']
    return None

def get_trainer_label(label_name):
    label_data_array = trainer_labels['labelDataArray']
    match = next((e for e in label_data_array if e['labelName'] == label_name), None)
    return match['wordDataArray'][0]['str'] if match else None
    
def get_area_name(label_name):
    label_data_array = area_names['labelDataArray']
    match = next((e for e in label_data_array if e['labelName'] == label_name), None)
    return match['wordDataArray'][0]['str'] if match else None

def get_area_display_name(label_name):
    label_data_array = area_display_names['labelDataArray']
    match = next((e for e in label_data_array if e['labelName'] == label_name), None)
    return match['wordDataArray'][0]['str'] if match else None

def get_map_info(label_name):
    zone_data = map_info['ZoneData']
    match = next((e for e in zone_data if e['ZoneID'] == label_name), None)
    return get_area_display_name(match['MSLabel']) if match and len(match['MSLabel']) > 0 else get_area_name(match['PokePlaceName'])


def get_trainer_data_from_place_datas():
    trainers = []
    for bdsp_location_file in bdsp_location_files:
        with open(os.path.join(repo_file_path, 'placedatas', bdsp_location_file), 'r') as f:
            data = json.load(f)
        for event in data['Data']:
            trainerID = event['TrainerID']
            zoneID = event['zoneID']
            if trainerID > 0 and trainerID < 10000 and zoneID != -1:
                trainer = diff_trainer_data(event, None, None)
                trainers.append(trainer)
    return trainers

def generate_trainer_name(raw_trainer_name, pokemon1_level):
    level = int(pokemon1_level)
    if level is None:
        return None

    i1 = raw_trainer_name.find('[')
    i2 = raw_trainer_name.find(']')

    bad_section = raw_trainer_name[i1:i2+1]
    is_boss_trainer = ('City' in bad_section or 'League' in bad_section)
    if not is_boss_trainer or 'Master' in raw_trainer_name:
        return raw_trainer_name

    trainer_substring = raw_trainer_name[:i1-1] + raw_trainer_name[i2+1:]
    if level == 100:
        return trainer_substring + ' Rematch'
    return trainer_substring

def process_files(folder_path, callback):
    """
    Calls the provided callback function on every file in the specified folder.
    
    :param folder_path: The path to the folder containing the files to be processed.
    :param callback: A function that takes a file path as its only argument and performs some action on it.
    """
    trainers_list = []
    trainers = []
    for filename in os.listdir(folder_path):
        file_path = os.path.join(folder_path, filename)
        try:
            trainers = callback(file_path)
        except (FileNotFoundError, IsADirectoryError):
            print(f"{file_path} is not a valid file path or does not exist")
            return
        except (UnsupportedTrainer, MissingData):
            continue
        trainers_set = set(frozenset(d.items()) for d in trainers)
        trainer_list = [dict(s) for s in trainers_set]

    data = get_trainer_data_from_place_datas()
    data.extend(trainers_list)
    sorted_data = sorted(data, key=lambda x: x['zoneId'])
    with open(os.path.join(output_file_path, 'trainer_info.json'), 'w', encoding='utf-8') as f:
        json.dump(sorted_data, f)
    return data


def parse_ev_script_file(file_path):
    """
    The purpose of this function is to parse a text file and find every instance of the substring _TRAINER_BTL_SET or _TRAINER_MULTI_BTL_SET.
    """
    trainers = []

    with open(file_path, 'r', encoding="utf8") as f:
        for line in f:
            substrings = line.split('\n')
            for substring in substrings:
                areaName = file_path.split("/")[-1].split(".")[0].upper()
                zoneID = get_zoneID(areaName)
                gym_leader_lookup = f"ev_{areaName.lower()}_randomteam"
                
                if TRAINER_BATTLE in substring or MULTI_TRAINER_BATTLE in substring:
                    args = parse_trainer_btl_set(substring.strip())
                else:
                    continue

                if zoneID == -1:
                    print("The trainers in this area are currently not supported:", areaName, args[0])
                    raise UnsupportedTrainer

                if -1 in args:
                    print("There is something wrong with the args from this area", areaName, args[0])
                    raise InvalidArg

                trainerID1 = args[0].strip()
                trainerID2, trainerID3 = "", ""
                if len(args) >= 2:
                    trainerID2 = args[1].strip()
                if len(args) > 2:
                    trainerID3 = args[2].strip()

                ### Multi trainer data here
                if len(trainerID3) > 0:
                    multi_trainers = get_multi_trainer_data(file_path, areaName, zoneID, trainerID1, trainerID2, trainerID3)
                    trainers.extend(multi_trainers)

                # This second section is for if the trainerID is bog standard just calling a number from the TTable
                elif trainerID1.isnumeric() and int(trainerID2) == 0:
                    trainer = diff_trainer_data(None, zoneID, int(trainerID1))
                    trainer["format"] = SINGLE_FORMAT
                    trainer["link"] = ""
                    trainers.append(trainer)
                elif trainerID1.isnumeric() and int(trainerID2) != 0:
                    trainer1, trainer2 = get_multi_trainers(trainerID1, trainerID2, zoneID, DOUBLE_FORMAT)
                    trainers.append(trainer1)
                    trainers.append(trainer2)

                # This next section is for the temp variables that are called like @SCWK_TEMP3
                elif trainerID1[0] == "@" and len(trainerID2) == 1:
                    if GYM_AREA_NAME in areaName:
                        gym_leaders = get_random_team_data(file_path, areaName, zoneID, trainerID1, trainerID2, gym_leader_lookup, 4)
                        trainers.extend(gym_leaders)
                    elif E4_AREA_NAME in areaName and ROOM_AREA_NAME not in areaName:
                        e4_trainers = get_random_team_data(file_path, areaName, zoneID, trainerID1, trainerID2, gym_leader_lookup, 4)
                        trainers.extend(e4_trainers)
                    else:
                        assorted_trainers = get_assorted_trainer_data(file_path, areaName, zoneID, trainerID1, trainerID2, args)
                        trainers.extend(assorted_trainers)

                # This last section is for the trainers that are called by name in the scripts like TR_BATTLEG_01 or something like that.
                elif len(trainerID1) > 0 and trainerID1[0] != "@":
                    temp_trainerID1 = get_trainer_id_from_partial(trainerID1)
                    trainer = diff_trainer_data(None, zoneID, int(temp_trainerID1))
                    trainer["format"] = SINGLE_FORMAT
                    trainer["link"] = ""
                    trainers.append(trainer)
                elif len(trainerID1) > 0 and len(trainerID2) > 1 and trainerID1[0] != "@":
                    temp_trainerID1 = get_trainer_id_from_partial(trainerID1)
                    temp_trainerID2 = get_trainer_id_from_partial(trainerID2)
                    trainer1, trainer2 = get_multi_trainers(temp_trainerID1, temp_trainerID2, zoneID, DOUBLE_FORMAT)
                    trainers.append(trainer1)
                    trainers.append(trainer2)
                else:
                    print("There is Missing Data here:", areaName, trainerID1, trainerID2)
                    raise MissingData
        return trainers

def get_trainer_data(zoneID, trainerID):
    trainer_data = TRAINER_TABLE['TrainerData'][trainerID]
    trainer_type = TRAINER_TABLE['TrainerType'][trainer_data['TypeID']]
    trainer_label = get_trainer_label(trainer_type['LabelTrType'])
    if not trainer_label:
        print("This trainer doesn't have a label in game:", trainer_type['LabelTrType'], trainerID)        
    trainer_name = get_trainer_name(trainer_data['NameLabel'])
    if not trainer_name:
        trainer_name = trainer_data['NameLabel'].split("_")[-1].capitalize()
        print("This trainer doesn't have a name in game:", trainer_data['NameLabel'], trainerID)
    
    areaName = get_map_info(zoneID)
    zones = areas[zoneID + 1]
    zoneName = zones[3] if zones[3] != '' else zones[4]
    if zoneName == '':
        zoneName = areaName
    for name, route in name_routes.items():
        if areaName in route:
            areaName = name
    if areaName == GALACTIC_HQ:
        areaName = GALACTIC_HQ_TRACKER_VAR
    trainer = {
        'areaName': areaName,
        'zoneName': zoneName,
        'zoneId': int(zoneID),
        'trainerId': trainerID,
        'rematch': 0,
        'name': trainer_name,
        'type': trainer_label,
        'method': "",
        'format': "",
        'link': ""
    }
    return trainer

def diff_trainer_data(event, zoneID, trainerID):
    '''
    The event variable is for the place_datas function
    The zoneID and trainerID is for the ev_script function
    Make sure that when you call one or the other that the opposite variable(s) is(are) None
    i.e: diff_trainer_data(event, None, None) or diff_trainer_data(None, zoneID, trainerID)
    '''
    trainer = {}
    if event is not None:
        zoneID = int(event['zoneID'])
        trainerID = int(event['TrainerID'])
        trainer = get_trainer_data(zoneID, trainerID)
        trainer['method'] = PLACE_DATA_METHOD
        trainer['format'] = SINGLE_FORMAT
        return trainer
    else:
        trainer = get_trainer_data(zoneID, trainerID)
        trainer['method'] = SCRIPTED_METHOD
        return trainer

def get_zoneID(areaName):
    for places in areas:
        if areaName in places:
            zoneID = int(areas.index(places) - 1)
            return zoneID
        else:
            continue

def get_support_trainers(file_path, areaName, zoneID):
    return [
        *get_support_trainers_data(file_path, areaName, MALE, zoneID),
        *get_support_trainers_data(file_path, areaName, FEMALE, zoneID),
    ]

def get_multi_trainer_data(file_path, areaName, zoneID, trainerID1, trainerID2, trainerID3):
    trainers = []
    if trainerID3.isnumeric():
        
        trainer2, trainer3 = get_multi_trainers(trainerID2, trainerID3, zoneID, MULTI_FORMAT)
        trainers.extend([
            trainer2,
            trainer3,
            *get_support_trainers(file_path, areaName, zoneID),
        ])
    elif trainerID3[0] == "@":

        trainers.extend(get_support_trainers(file_path, areaName, zoneID))
        team_galactic_lookup = f"pos_{areaName.lower()}_gingakanbu"

        temp_enemy_IDs = parse_random_teams(file_path, team_galactic_lookup, 2, EVIL_TYPE)
        if temp_enemy_IDs:
            trainerID2 = temp_enemy_IDs[0]
            trainerID3 = temp_enemy_IDs[1]
            trainer2, trainer3 = get_multi_trainers(trainerID2, trainerID3, zoneID, MULTI_FORMAT)
            trainers.append(trainer2)
            trainers.append(trainer3)
        else:
            print("Unable to find Multi Trainer (variable) opponent teams", areaName, substring)
            raise MultiTrainerError
    else:
        print("Unable to get enough trainers for Multi Trainers here:", areaName, substring)
        raise MultiTrainerError

    return trainers

def get_random_team_data(file_path, areaName, zoneID, trainerID1, trainerID2, lookup, team_num):
    trainers = []
    if MASTER_TRAINER not in lookup and CELEBI not in lookup:
        temp_trainer_IDs = parse_random_teams(file_path, lookup, team_num, None)
        types = lookup.split("_")[-1].strip('"')
        if "barry" in lookup:
            for ID in temp_trainer_IDs:
                trainer = get_single_trainer(zoneID, ID, temp_trainer_IDs, types)
                trainers.append(trainer)
            return trainers
        for ID in temp_trainer_IDs:
            trainer = get_single_trainer(zoneID, ID, temp_trainer_IDs, None)
            trainers.append(trainer)
        return trainers
    if "Master" in lookup:
        print(team_num)
        temp_trainer_IDs = parse_random_teams(file_path, "", len(team_num), "Master")
        print("Is is here?")
        for ID in temp_trainer_IDs:
            master_trainer_name = team_num[temp_trainer_IDs.index(ID)]
            trainer = get_single_trainer(zoneID, ID, temp_trainer_IDs, master_trainer_name)
            print("Or there?")
            trainers.append(trainer)
        return trainers
    if CELEBI in lookup:
        temp_trainer_IDs = parse_random_teams(file_path, "", team_num, lookup)
        for ID in temp_trainer_IDs:
            trainers.append(get_single_trainer(zoneID, ID, temp_trainer_IDs, lookup))
        return trainers

def get_assorted_trainer_data(file_path, areaName, zoneID, trainerID1, trainerID2, args):
    trainer = []
    trainers = []
    cyrus_lookup = f"ev_{areaName.lower()}_randomteam_cyrus"
    for starter in STARTERS:
        rival_lookup = f"ev_{areaName.lower()}_randomteam_barry_{starter}"
        rival_teams = get_random_team_data(file_path, areaName, zoneID, trainerID1, trainerID2, rival_lookup, 4)
        trainers.extend(rival_teams)
        print(len(rival_teams), args)
    if trainer == []:
        cyrus_teams = get_random_team_data(file_path, areaName, zoneID, trainerID1, trainerID2, cyrus_lookup, 4)
        trainers.extend(cyrus_teams)
    if trainer == []:
        print("The problem starts here")
        master_teams = get_random_team_data(file_path, areaName, zoneID, trainerID1, trainerID2, "Master", MASTER_TRAINER_TYPES)
        trainers.extend(master_teams)
    if trainer == []:
        celebi_teams = get_random_team_data(file_path, areaName, zoneID, trainerID1, trainerID2, CELEBI, 7)
        for celebi_team in celebi_teams:
            trainer = celebi_team
            trainers.append(trainer)
    if trainer == []:
        print("Lucas and Dawn's Single Battles are not yet supported:", areaName, args[0])
        '''
        ### This section is currently in the progress of being improved and finalized in ev_script.

        for support in ["lucas", "dawn"]:
            temp_support_IDs = parse_random_teams(file_path, f"ev_{areaName.lower()}_support_{support}", 3, None)
            for ID in temp_support_IDs:
                trainer = diff_trainer_data(None, zoneID, int(ID))
                trainer["name"] = f"{trainer['name']} {mon} Team {str(temp_rival_IDs.index(ID) + 1)}"
                trainer["format"] = "Single"
                trainer["link"] = ""
                trainers.append(trainer)
        '''
    return trainers

def get_support_trainers_data(file_path, area_name, support_name, zoneID):
    """
    The purpose of this function is to get the support trainers data
    """
    temp_support_IDs = []
    rival_multi_lookup = f"{area_name.lower()}_rival_support"

    for support in [support_name]:
        current_support_lookup = f"{area_name.lower()}_{support}_100" ### This is for Lucas and Dawn in C01 and C07. Is this the most optimal? Maybe?
        temp_support_IDs = parse_random_teams(file_path, current_support_lookup, 3, None)
    if temp_support_IDs == []:
        temp_support_IDs = parse_random_teams(file_path, rival_multi_lookup, 3, None)
    if temp_support_IDs == [] and support_name != None:
        for support in [support_name]:
            if support == MALE:
                temp_support_IDs = parse_random_teams(file_path, BAD_SUPPORT_LOOKUP1, 3, None)
                break
            elif support == FEMALE:
                temp_support_IDs = parse_random_teams(file_path, BAD_SUPPORT_LOOKUP2, 3, None)
                break
    if temp_support_IDs == []:
        print("Support Trainers still needs more work", area_name, zoneID)
    trainers = []
    for ID in temp_support_IDs:
        trainer = diff_trainer_data(None, zoneID, int(ID))
        trainer["format"] = MULTI_FORMAT
        trainer["link"] = SUPPORT_LINK
        trainers.append(trainer)
    return trainers

def get_single_trainer(zoneID, ID, temp_IDs, name):
    trainer = diff_trainer_data(None, zoneID, int(ID))
    if name in STARTERS:
        trainer["name"] = f"{trainer['name']} {name.capitalize()} Team {str(temp_IDs.index(ID) + 1)}"
    elif name in MASTER_TRAINER_TYPES:
        trainer["name"] = f"{name.capitalize()} Master Trainer {trainer['name']}"
    elif name == CELEBI:
        trainer["name"] = f"{trainer['name']}"
    elif len(temp_IDs) > 1:
        trainer["name"] = f"{trainer['name']} Team {str(temp_IDs.index(ID) + 1)}"
    else:
        trainer["name"] = f"{trainer['name']}"
    
    trainer["format"] = SINGLE_FORMAT
    trainer["link"] = ""
    
    return trainer

def get_multi_trainers(trainerID1, trainerID2, zoneID, format):
    '''
    format can either be "Multi" or "Double" depending on which you choose
    '''
    trainers = []
    trainerID2_used = False
    
    for trainerID in [trainerID1, trainerID2]:
        trainer = diff_trainer_data(None, zoneID, int(trainerID))
        trainer["format"] = format
        if trainerID2_used == False or not trainerID2:
            trainer["link"] = trainerID2
            trainerID2_used = True
        else:
            trainer["link"] = trainerID1
        trainers.append(trainer)
    return trainers

def parse_trainer_btl_set(substring):
    match = re.search(trainer_pattern, substring)
    match2 = re.split(multi_trainer_pattern, substring)
    if match:
        arg1 = match.group(1).split(',')[0].strip("'")
        args = [arg1]
        if len(match.group(1).split(',')) > 1:
            arg2 = match.group(1).split(',')[1].strip("'")
            args = [arg1, arg2]
        return(args)
    elif match2:
        arg1 = match2[1].split(",")[0].strip("'")
        arg2 = match2[1].split(",")[1].strip("'")
        arg3 = match2[1].split(",")[2].strip("'")
        args = [arg1, arg2, arg3]
        return(args)
    else:
        return -1, substring

def parse_random_teams(file_path, lookup, count, type):
    '''
    count will be how many trainers are expected to be found
    lookup will be the randomteam that you are trying to find.
    it will always be in this format: ev_{LOCATION}_randomteam_{NAME of trainer} with optional _{STARTER Name} then _rematch
    i.e.:
    ev_c03gym0101_randomteam_roark
    ev_c03gym0101_randomteam_roark_rematch
    ev_c02_randomteam_barry_turtwig
    ev_c02_randomteam_barry_turtwig_rematch
    '''
    with open(file_path, 'r', encoding="utf8") as f:
        match_count = 0
        found_lookup = False
        trainers = []
        for line in f:
            if match_count == count:
                break
            substrings = line.split('\n')
            for substring in substrings:
                if match_count == count:
                    break
                if not found_lookup:
                    if substring.startswith(lookup) and "rematch" not in substring:
                        found_lookup = True
                else:
                    regex_lookup = "LDVAL"
                    if type == "Masters":
                        print("Does it get here?")
                        regex_lookup = "_LDVAL(@SCWK_PARAM1"
                    elif type == "Celebi":
                        regex_lookup = "_LDVAL(@CON_TEMP05"
                    elif type == "Evil":
                        regex_lookup = "LDVAL(@SCWK_TEMP"
                    
                    if regex_lookup in substring:
                        match = re.split(ldval_pattern, substring)[2]
                        if match:
                            trainer_id = match.strip("'")
                            trainers.append(trainer_id)
                            match_count += 1
    return trainers
        

process_files(os.path.join(repo_file_path, "scripts"), parse_ev_script_file)