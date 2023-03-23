import re
import json
import os
import csv
import unicodedata
from pokemonUtils import get_ability_string, get_pokemon_name, get_form_name, get_item_string, get_pokemon_name_dictionary, get_pokemon_info, get_nature_name

def load_json_from_file(filepath):
    with open(filepath, mode="r", encoding="utf-8") as f:
        return json.load(f)

# Get the repo file path for cleaner path generating
repo_file_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
input_file_path = os.path.join(repo_file_path, 'input')
honeywork_cpp_filepath = os.path.join(repo_file_path, "src", "tasks", "Resources", "UPDATE_THIS", "honeywork.cpp")
honeyroutes_filepath = os.path.join(repo_file_path, "src", "tasks", "Resources", "honeyroutes.json")
POKEMON_NAMES = get_pokemon_name_dictionary()
bad_encounters = []

def get_lumi_data(raw_data, callback):
    data = {}
    for (idx, _) in enumerate(raw_data["labelDataArray"]):
        data[str(idx)] = callback(idx)
    return data

def slugify(value):
    """
    Converts to lowercase, removes non-word characters (alphanumerics and
    underscores) and converts spaces to hyphens. Also strips leading and
    trailing whitespace.
    """
    value = unicodedata.normalize('NFKD', value).encode('ascii', 'ignore').decode('ascii')
    value = re.sub('[^\w\s-]', '', value).strip().lower()
    return re.sub('[-\s]+', '-', value)

def isSpecialPokemon(current_pokemon_name):
    """
    Returns true if the name of the Pokemon is Perrserker, Obstagoon, Indeedee, Meowstic or Sneasler.
    This is to retain intended behaviour the app depends on
    """
    return current_pokemon_name == "Perrserker" or current_pokemon_name == "Obstagoon" or current_pokemon_name == "Indeedee" or current_pokemon_name == "Meowstic" or current_pokemon_name == "Sneasler"

def create_diff_forms_dictionary(form_dict):
    """
    Each monsno will have an array of all the Pokemon names and forms.
    Add the current index to the name of the first object in the list as the key
    Find out why the number is what it is
    Add the current value as the second value in the array
    Add the slugged current value as the third value in the array
    """
    diff_forms = {}
    for mons_no in form_dict.keys():
        mons_array = form_dict[mons_no]
        current_pokemon_name = get_pokemon_name(int(mons_no))

        for (idx, mon) in enumerate(mons_array):
            if(idx != 0 or isSpecialPokemon(current_pokemon_name)):
                tracker_monsno = -(int(mons_no) + idx)
                if isSpecialPokemon(current_pokemon_name):
                    tracker_monsno = int(mons_no)
                
                diff_forms[current_pokemon_name + (str(idx or 1)) ] = [tracker_monsno, mon, slugify(mon)]
    return diff_forms

def getTrainerIdsFromDocumentation():
    doc_filepath = os.path.join(input_file_path, "docs.csv")
    trainer_IDs = []
    with open(doc_filepath, "r")as doc_csv:
        csvreader = csv.reader(doc_csv)
        for row in csvreader:
            if row[0].isdigit():
                trainer_IDs.append(int(row[0]))
        return trainer_IDs
        
def load_data():
    data = {}
    files = {
        "raw_encounters": os.path.join(input_file_path, "FieldEncountTable_d.json"),
        "raw_trainer_data": os.path.join(input_file_path, "TrainerTable.json"),
        "raw_abilities": os.path.join(input_file_path, "english_ss_tokusei.json"),
        "raw_pokedex": os.path.join(input_file_path, "english_ss_monsname.json"),
        "raw_items": os.path.join(input_file_path, "english_ss_itemname.json"),
        "routes": "Resources/Routes.json",
        "gym_leaders": "Resources/NewGymLeaders.json",
        "honey_routes": "Resources/honeyroutes.json"
    }
    for name, filepath in files.items():
        data[name] = load_json_from_file(filepath)

    data["abilities"] = get_lumi_data(data["raw_abilities"], get_ability_string)
    data["pokedex"] = get_lumi_data(data["raw_pokedex"], get_pokemon_name)
    data["items"] = get_lumi_data(data["raw_items"], get_item_string)
    data["diff_forms"] = create_diff_forms_dictionary(POKEMON_NAMES)
    data["trainer_ids"] = getTrainerIdsFromDocumentation()

    return data

def GetTrainerData():
    full_data = load_data()
    diff_forms = create_diff_forms_dictionary(POKEMON_NAMES)
    data, abilityList, pokedex, itemList, gymLeaderList = (
        full_data["raw_trainer_data"],
        full_data["abilities"],
        full_data["pokedex"],
        full_data["items"],
        full_data["gym_leaders"]
    )
    gender = {"0": "MALE", "1": "FEMALE", "2": "NEUTRAL"}

    dic = {}
    full_list = []
    for battle_type, battles in gymLeaderList.items():
        for gym_leaders in battles:
            for gym_leader, trainer_ids in gym_leaders.items():
                trainers_list = []
                for trainer_id in trainer_ids:
                    fights = {}
                    trainer = next((t for t in data["TrainerPoke"] if t["ID"] == trainer_id), None)
                    if trainer:
                        for poke_num in range(1,7):
                            level = trainer[f"P{poke_num}Level"]
                            if level > 0:
                                form = trainer[f"P{poke_num}FormNo"]
                                pokemon = {
                                    "ability": abilityList[str(trainer[f"P{poke_num}Tokusei"])],
                                    "gender": gender[str(trainer[f"P{poke_num}Sex"])] if trainer[f"P{poke_num}Sex"] != 3 else 'FEMALE',
                                    "id": diff_forms[pokedex[str(trainer[f"P{poke_num}MonsNo"])] + str(form)][0] if form > 0 else trainer[f"P{poke_num}MonsNo"],
                                    "item": itemList[str(trainer[f"P{poke_num}Item"])] if trainer[f"P{poke_num}Item"] != 0 else None,
                                    "level": level,
                                    "moves": [trainer[f"P{poke_num}Waza{j+1}"] for j in range(4)],
                                    "nature": get_nature_name(trainer[f"P{poke_num}Seikaku"]),
                                    "ivatk": trainer[f"P{poke_num}TalentAtk"],
                                    "ivdef": trainer[f"P{poke_num}TalentDef"],
                                    "ivhp": trainer[f"P{poke_num}TalentHp"],
                                    "ivspatk": trainer[f"P{poke_num}TalentSpAtk"],
                                    "ivspdef": trainer[f"P{poke_num}TalentSpDef"],
                                    "ivspeed": trainer[f"P{poke_num}TalentAgi"],
                                    "evhp": trainer[f"P{poke_num}EffortHp"],
                                    "evatk": trainer[f"P{poke_num}EffortAtk"],
                                    "evdef": trainer[f"P{poke_num}EffortDef"],
                                    "evspatk": trainer[f"P{poke_num}EffortSpAtk"],
                                    "evspdef": trainer[f"P{poke_num}EffortSpDef"],
                                    "evspeed": trainer[f"P{poke_num}EffortAgi"]
                                }
                                if 'content' not in fights:
                                    fights['content'] = [pokemon]
                                    fights["game"] = gym_leader + " Team " + str(trainer_ids.index(trainer_id) + 1)
                                    fights["name"] = gym_leader
                                    fights["type"] = battle_type
                                else:
                                    fights['content'].append(pokemon)
                    trainers_list.append(fights)
                full_list.append(trainers_list)
        dic['1'] = full_list

    with open("output/Trainer_output.json", "w") as output:
        output.write(json.dumps(dic))

def HoneyTreeData():
    const_regex = r"const\s+int32_t\s+HONEY_TREES\[\s*NUM_ZONE_ID\s*\]\[\s*10\s*\]\s*=\s*\{\s*([\s\S]*?)\};"
    array_regex = r"\[(.*?)\]\s*=\s*\{(.*?)\}"

    with open(honeywork_cpp_filepath, "r") as file, open(honeyroutes_filepath, "r") as honey:
        data = file.read()
        honey_routes = json.load(honey)

    # Extract honey trees data
    match = re.search(const_regex, data)
    if match:
        values_str = match.group(1)
        honey_trees = {}
        for line in values_str.split("\n"):
            line = line.strip()
            if not line:
                continue
            submatch = re.search(array_regex, line)
            if submatch:
                key = submatch.group(1)
                values = [v.strip() for v in submatch.group(2).split(",")]
                if "AMPHAROS" not in values:
                    honey_trees[honey_routes[key]] = values
    return(honey_trees)

def bad_encounter_data(pkmn_name, route):
    bad_encounters.append({pkmn_name, route})
    return

def getEncounterData():
    full_data = load_data()
    diff_forms = create_diff_forms_dictionary(POKEMON_NAMES)
    data, pokedex, routeNames = (
        full_data["raw_encounters"],
        full_data["pokedex"],
        full_data["routes"]
    )

    routes = {}
    for area in data['table']:
        for key in area.keys():
            if type(area[key]) != int:
                if type(area[key][0]) == dict:
                    for mon in area[key]:
                        if mon['monsNo'] < 2000:
                            if mon['monsNo'] != 0:
                                for key1 in routeNames.keys():
                                    for route in routeNames[key1]:
                                        if str(area['zoneID']) == route:
                                            if str(key1) not in routes.keys():
                                                routes[key1] = [pokedex[str(mon['monsNo'])]]
                                            else:
                                                routes[key1].append(pokedex[str(mon['monsNo'])])
                                                routes[key1] = list(set(routes[key1]))
                        elif mon['monsNo'] > 0:
                            for dexNum in pokedex.keys():
                                formNo = int(mon['monsNo'])//(2**16)
                                if (int(mon['monsNo']) - (formNo * (2**16))) == int(dexNum):
                                    for key1 in routeNames.keys():
                                        for route in routeNames[key1]:
                                            if str(area['zoneID']) == route:
                                                if str(key1) not in routes.keys():
                                                    '''
                                                    Here's what this variable does:
                                                    Takes the Pokedex Number from the pokedex dictionary's keys ("19")
                                                    Returns the Pokemon Name associated with that key ("Rattta")
                                                    Adds the formNo ("1")
                                                    Uses the Pokemon Name + the formNo ("Rattata1")
                                                    Looks this key up in the diff_forms dictionary 
                                                    Returns that value ("Alolan Rattata")
                                                    '''
                                                    routes[key1] = [diff_forms[pokedex[str(dexNum)]+str(formNo)][1]]
                                                else:
                                                    pkmn_key = pokedex[str(dexNum)] + str(formNo)
                                                    if pkmn_key not in diff_forms.keys():
                                                        bad_encounter_data(pokedex[str(dexNum)], key1)
                                                    else:
                                                        routes[key1].append(diff_forms[pkmn_key][1])
                                                        routes[key1] = list(set(routes[key1]))
                                else:
                                    continue            
    ##This is for adding the Trophy Garden daily mons
    for mon in data['urayama']:
        routes['lmpt-39'].append(pokedex[str(mon['monsNo'])])

    ##This is for adding all of the Honey Tree encounters to the list
    honey_data = HoneyTreeData()

    for key in honey_data.keys():
        for mon in honey_data[key]:
            if str(key) not in routes.keys():
                routes[key] = [mon.capitalize()]
            if mon.capitalize() not in routes[key]:
                if mon == "FARFETCHD":
                    routes[key].append("Farfetch'd")
                else:
                    routes[key].append(mon.capitalize())

    my_keys = list(routes.keys())
    my_keys.sort(key = lambda x: int(x.split('-')[1]))
    sorted_routes = {i: routes[i] for i in my_keys}

    with open('output/Encounter_output.json', 'w') as output:
        output.write(json.dumps(sorted_routes))
        
getEncounterData()
GetTrainerData()
