const FILTERS: { [key in string]: string[] } = {
  'lmpt-0': ['Turtwig', 'Chimchar', 'Piplup'],
  'lmpt-1': [
    'Poliwag',
    'Poliwhirl',
    'Magikarp',
    'Golduck',
    'Qwilfish1',
    'Gyarados',
    'Psyduck',
    'Eevee',
  ],
  'lmpt-2': [
    'Pidgey',
    'Nidoran♂',
    'Starly',
    'Doduo',
    'Bidoof',
    'Nidoran♀',
    'Hoothoot',
    'Kricketot',
    'Rattata1',
  ],
  'lmpt-3': [
    'Meowth1',
    'Surskit',
    'Slowpoke1',
    'Masquerain',
    'Meowstic1',
    'Indeedee1',
    'Magikarp',
    'Starly',
    'Eevee',
    'Wynaut',
    'Azurill',
    'Bidoof',
    'Meowstic',
    'Indeedee',
    'Wingull',
    'Gyarados',
    'Psyduck',
  ],
  'lmpt-4': [],
  'lmpt-5': ['Turtwig', 'Chimchar', 'Piplup'],
  'lmpt-6': [
    'Burmy',
    'Houndour',
    'Zigzagoon',
    'Shinx',
    'Sentret',
    'Poochyena',
    'Rattata',
    'Growlithe',
    'Hoothoot',
    'Growlithe1',
  ],
  'lmpt-7': ['Bulbasaur', 'Charmander', 'Squirtle'],
  'lmpt-8': [
    'Slowpoke1',
    'Magikarp',
    'Starly',
    'Golduck',
    'Lotad',
    'Crawdaunt',
    'Seedot',
    'Spearow',
    'Bidoof',
    'Cubone',
    'Zigzagoon1',
    'Corphish',
    'Gyarados',
    'Abra',
    'Pineco',
    'Psyduck',
  ],
  'lmpt-9': [
    'Slowpoke1',
    'Geodude',
    'Magikarp',
    'Whiscash',
    'Diglett1',
    'Riolu',
    'Zubat',
    'Golbat',
    'Gyarados',
    'Barboach',
    'Diglett',
  ],
  'lmpt-10': ['Treeko', 'Torchic', 'Mudkip'],
  'lmpt-11': [
    'Omanyte',
    'Kabuto',
    'Lileep',
    'Anorith',
    'Shieldon',
    'Cranidos',
    'Aerodactyl',
  ],
  'lmpt-12': [
    'Weedle',
    'Golduck',
    'Goldeen',
    'Ponyta1',
    'Caterpie',
    'Pikachu',
    'Ralts',
    'Roselia',
    'Ledyba',
    'Corsola1',
    'Magikarp',
    'Marill',
    'Spinarak',
    'Budew',
    'Wurmple',
    'Seaking',
    'Sunkern',
    'Crawdaunt',
    'Bellsprout',
    'Corphish',
    'Starly',
    'Azumarill',
    'Gyarados',
    'Psyduck',
    'Oddish',
  ],
  'lmpt-13': [
    'Quagsire',
    'Geodude',
    'Magikarp',
    'Wooper',
    'Geodude1',
    'Sandshrew',
    'Whiscash',
    'Zubat',
    'Qwilfish1',
    'Gyarados',
    'Barboach',
    'Psyduck',
    'Makuhita',
  ],
  'lmpt-14': ['Chikorita', 'Cyndaquil', 'Totodile'],
  'lmpt-15': [
    'Cherubi',
    'Shroomish',
    'Exeggcute',
    'Seedot',
    'Tangela',
  ],
  'lmpt-16': [
    'Elekid',
    'Magnemite',
    'Chinchou',
    'Tentacruel',
    'Corsola1',
    'Magikarp',
    'Electrike',
    'Lanturn',
    'Drifloon',
    'Shellos',
    'Gastrodon',
    'Plusle',
    'Shellder',
    'Voltorb',
    'Minun',
    'Tentacool',
    'Cloyster',
    'Voltorb1',
    'Pachirisu',
    'Gyarados',
    'Aipom',
    'Slakoth',
    'Caterpie',
    'Weedle',
    'Munchlax',
  ],
  'lmpt-17': [
    'Hoppip',
    'Chinchou',
    'Gastrodon',
    'Slowpoke',
    'Buizel',
    'Exeggcute',
    'Lanturn',
    'Tentacool',
    'Mareep',
    'Corsola1',
    'Tentacruel',
    'Volbeat',
    'Pachirisu',
    'Marill',
    'Venonat',
    'Qwilfish1',
    'Gyarados',
    'Yanma',
    'Corphish',
    'Mime Jr.',
    'Plusle',
    'Cloyster',
    'Minun',
    'Bidoof',
    'Azumarill',
    'Shellos',
    'Crawdaunt',
    'Illumise',
    'Magikarp',
    'Shellder',
    'Croagunk',
    'Growlithe1',
    'Combee',
    'Burmy',
    'Pineco',
    'Wurmple',
    'Heracross',
    'Starly',
    'Pidgey',
    'Hoothoot',
    'Tailow',
    "Farfetch'd",
  ],
  'lmpt-18': [
    'Buneary',
    'Murkrow',
    'Shroomish',
    'Dustox',
    'Misdreavus',
    'Beautifly',
    'Stantler',
    'Paras',
    'Nincada',
    'Slakoth',
    'Taillow',
    'Beedrill',
  ],
  'lmpt-19': [
    'Dratini',
    'Poliwag',
    'Poliwhirl',
    'Magikarp',
    'Golduck',
    'Qwilfish1',
    'Dragonair',
    'Gyarados',
    'Psyduck',
    'Porygon',
  ],
  'lmpt-20': [
    'Rotom',
    'Raticate',
    'Gastly',
    'Haunter',
    'Koffing',
    'Duskull',
    'Shuppet',
    'Rattata',
  ],
  'lmpt-21': [
    'Magby',
    'Numel',
    'Gligar',
    'Torkoal',
    'Stunky',
    'Geodude1',
    'Slugma',
    'Spoink',
    'Mankey',
    'Combee',
    'Burmy',
    'Pineco',
    'Silcoon',
    'Cascoon',
    'Heracross',
  ],
  'lmpt-22': [
    'Onix',
    'Sableye',
    'Baltoy',
    'Sandshrew',
    'Zubat',
    'Mawile',
    'Gible',
    'Geodude',
  ],
  'lmpt-23': [
    'Rhyhorn',
    'Machop',
    'Ponyta',
    'Stantler',
    'Larvitar',
    'Phanpy',
    'Meowth2',
    'Aipom',
    'Slakoth',
    'Metapod',
    'Kakuna',
    'Munchlax',
  ],
  'lmpt-24': [
    'Dratini',
    'Clefairy',
    'Solrock',
    'Feebas',
    'Snorlax1',
    'Dragonair',
    'Geodude',
    'Bronzor',
    'Metang',
    'Bronzong',
    'Ninetales1',
    'Medicham',
    'Magikarp',
    'Sandshrew1',
    'Slowking1',
    'Whiscash',
    'Chingling',
    'Loudred',
    'Lunatone',
    'Graveler',
    'Seadra',
    'Grimer1',
    'Nosepass',
    'Spheal',
    'Absol',
    'Ursaring',
    'Horsea',
    'Abomasnow',
    'Seel',
    'Sneasler1',
    'Zubat',
    'Golbat',
    'Beldum',
    'Donphan',
    'Slowpoke1',
    'Chimecho',
    'Geodude1',
    'Clefable',
    'Sandslash1',
    'Gyarados',
    'Barboach',
    'Sealeo',
    'Cleffa',
  ],
  'lmpt-26': [
    'Kirlia',
    'Jigglypuff',
    'Remoraid',
    'Golduck',
    'Goldeen',
    'Bibarel',
    'Roselia',
    'Zangoose',
    'Magikarp',
    'Seviper',
    'Dunsparce',
    'Smeargle',
    'Seaking',
    'Octillery',
    'Skitty',
    'Slowpoke1',
    'Gyarados',
    'Psyduck',
    "Farfetch'd1",
    'Cherubi',
    'Shroomish',
    'Exeggcute',
    'Seedot',
    'Tangela',
  ],
  'lmpt-27': [],
  'lmpt-28': [
    'Vulpix',
    'Mime Jr.',
    'Scyther',
    'Corsola1',
    'Seaking',
    'Magikarp',
    'Gyarados',
    'Staravia',
    'Golduck',
    'Goldeen',
    'Glameow',
    'Chansey',
    'Meowth',
    'Purugly',
    'Snubbull',
    'Bonsly',
    'Psyduck',
    'Staravia',
    'Pidgeotto',
    'Noctowl',
    'Swellow',
    "Farfetch'd",
  ],
  'lmpt-29': ['Ditto'],
  'lmpt-30': ['Unown'],
  'lmpt-31': [
    'Murkrow',
    'Haunter',
    'Misdreavus',
    'Banette',
    'Duskull',
    'Koffing',
    'Shuppet',
    'Golbat',
    'Dusclops',
  ],
  'lmpt-32': [
    'Absol',
    'Exeggutor',
    'Marill',
    'Drowzee',
    'Mightyena',
    'Lickitung',
    'Hypno',
    'Exeggcute',
    'Linoone',
    'Kadabra',
    'Aipom',
    'Vigoroth',
    'Metapod',
    'Kakuna',
    'Munchlax',
  ],
  'lmpt-34': [
    'Rhyhorn',
    'Houndour',
    'Numel',
    'Slowpoke1',
    'Cacnea',
    'Spinda',
    'Seaking',
    'Magikarp',
    'Golduck',
    'Goldeen',
    'Spoink',
    'Gyarados',
    'Psyduck',
    'Graveler',
    "Farfetch'd1",
    'Aipom',
    'Vigoroth',
    'Butterfree',
    'Beedrill',
    'Munchlax',
  ],
  'lmpt-35': [
    'Diglett1',
    'Loudred',
    'Hippopotas',
    'Ditto',
    'Dugtrio1',
    'Whismur',
    'Dugtrio',
    'Trapinch',
    'Diglett',
  ],
  'lmpt-36': [
    'Nidoking',
    'Exeggutor1',
    'Kricketune',
    'Nidorina',
    'Girafarig',
    'Bibarel',
    'Nidorino',
    'Venomoth'
  ],
  'lmpt-37': [
    'Absol',
    'Floatzel',
    'Remoraid',
    'Linoone1',
    'Gastrodon1',
    'Corsola1',
    'Magikarp',
    'Wailmer',
    'Octillery',
    'Chatot',
    'Tentacool',
    'Wailord',
    'Wingull',
    'Gyarados',
    'Shuckle',
    'Swellow',
    'Pelipper',
    'Tentacruel',
    'Staravia',
    'Pidgeotto',
    'Noctowl',
    "Farfetch'd",
  ],
  'lmpt-38': [
    'Toxicroak',
    'Skorupi',
    'Bibarel',
    'Carvanha',
    'Yanmega',
    'Yanma',
    'Magikarp',
    'Wooper',
    'Sneasel1',
    'Whiscash',
    'Marill',
    'Swalot',
    'Gulpin',
    'Parasect',
    'Carnivine',
    'Shroomish',
    'Quagsire',
    'Ursaring',
    'Sharpedo',
    'Drapion',
    'Croagunk',
    'Kangaskhan',
    'Tropius',
    'Breloom',
    'Exeggcute',
    'Qwilfish1',
    'Tangela',
    'Gyarados',
    'Barboach',
  ],
  'lmpt-39': [
    'Cyndaquil',
    'Happiny',
    'Teddiursa',
    'Eevee',
    'Pichu',
    'Igglybuff',
    'Porygon',
    'Togepi',
    'Castform',
    'Pikachu',
    'Cleffa',
  ],
  'lmpt-40': [
    'Dratini',
    'Rapidash',
    'Golduck',
    'Drifblim',
    'Shelgon',
    'Dragonair',
    'Weezing1',
    'Noctowl',
    'Scyther',
    'Fearow',
    'Zangoose',
    'Magikarp',
    'Skarmory',
    'Nuzleaf',
    'Kecleon',
    'Seviper',
    'Grimer1',
    'Seadra',
    'Pinsir',
    'Swablu',
    'Horsea',
    'Kricketune',
    'Pidgeotto',
    'Machoke',
    'Slowpoke1',
    'Tauros',
    'Miltank',
    'Gyarados',
    'Psyduck',
    'Combee',
    'Pineco',
    'Silcoon',
    'Cascoon',
    'Mothim',
    'Heracross',
    'Staravia',
    'Pidgeotto',
    'Noctowl',
    'Swellow',
    "Farfetch'd",
  ],
  'lmpt-41': [
    'Relicanth',
    'Corsola1',
    'Magikarp',
    'Golduck',
    'Gyarados',
    'Psyduck',
  ],
  'lmpt-42': [
    'Manectric',
    'Shellos',
    'Gastrodon',
    'Forretress',
    'Magneton',
    'Corsola1',
    'Magikarp',
    'Shellder',
    'Magmar',
    'Weezing',
    'Muk1',
    'Magnemite',
    'Tentacool',
    'Finneon',
    'Lumineon',
    'Gyarados',
    'Tentacruel',
    'Combee',
    'Forretress',
    'Wormadam',
    'Mothim',
    'Beautifly',
    'Dustox',
  ],
  'lmpt-43': [
    'Huntail',
    'Kingler',
    'Horsea',
    'Clamperl',
    'Slowbro1',
    'Krabby',
    'Pelipper',
    'Tentacool',
    'Wingull',
    'Gorebyss',
    'Seadra',
    'Tentacruel',
  ],
  'lmpt-44': [
    'Horsea',
    'Floatzel',
    'Mantyke',
    'Pelipper',
    'Luvdisc',
    'Mantine',
    'Corsola',
    'Wingull',
    'Slowbro1',
    'Seadra',
    'Obstagoon',
  ],
  'lmpt-45': [
    'Skuntank',
    'Tentacruel',
    'Huntail',
    'Krabby',
    'Corsola1',
    'Wingull',
    'Gorebyss',
    'Nidorino',
    'Seadra',
    'Kingler',
    'Horsea',
    'Clamperl',
    'Tentacool',
    'Perrserker',
    'Nidorina',
    'Girafarig',
    'Sudowoodo',
    'Pelipper',
    'Dodrio',
    "Farfetch'd",
    'Cherrim',
    'Shroomish',
    'Exeggcute',
    'Nuzleaf',
    'Tangela',
  ],
  'lmpt-46': [
    'Chatot',
    'Finneon',
    'Tentacruel',
    'Magikarp',
    'Starmie',
    'Electrode',
    'Dugtrio1',
    'Shellos',
    'Gastrodon',
    'Mr. Mime',
    'Tentacool',
    'Purugly',
    'Ditto',
    'Electabuzz',
    'Staryu',
    'Slowpoke1',
    'Floatzel',
    'Lumineon',
    'Gyarados',
    'Combee',
    'Forretress',
    'Wormadam',
    'Mothim',
    'Beautifly',
    'Dustox',
  ],
  'lmpt-47': [
    'Shellos',
    'Staryu',
    'Gastrodon',
    'Overqwil',
    'Magikarp',
    'Starmie',
    'Finneon',
    'Tentacool',
    'Lumineon',
    'Gyarados',
    'Tentacruel',
  ],
  'lmpt-48': [
    'Lairon',
    'Qwilfish',
    'Finneon',
    'Rhydon',
    'Tentacruel',
    'Magikarp',
    'Sableye',
    'Cursola',
    'Wingull',
    'Graveler',
    'Nosepass',
    'Steelix',
    'Tentacool',
    'Mawile',
    'Golbat',
    'Pelipper',
    'Lumineon',
    'Graveler1',
    'Gyarados',
  ],
  'lmpt-49': ['Azelf'],
  'lmpt-50': [
    'Tyrogue',
    'Swablu',
    'Machop',
    'Meditite',
    'Teddiursa',
    'Chingling',
    'Koffing',
    'Cubone',
    'Bagon',
    'Natu',
    'Aipom',
    'Slakoth',
    'Metapod',
    'Kakuna',
    'Munchlax',
  ],
  'lmpt-51': [
    'Vulpix1',
    'Sandshrew1',
    'Snorunt',
    'Swinub',
    'Delibird',
    'Sneasel',
    'Snover',
    'Smoochum',
  ],
  'lmpt-52': [
    'Abomasnow',
    'Ninetales1',
    'Snorunt',
    'Delibird',
    'Mr. Mime1',
    'Sneasel',
    'Glalie',
    'Froslass',
    'Jynx',
    'Piloswine',
  ],
  'lmpt-53': [
    'Sneasler',
    'Abomasnow',
    'Snorunt',
    'Delibird',
    'Sneasel',
    'Glalie',
    'Froslass',
    'Jynx',
    'Piloswine',
  ],
  'lmpt-54': [
    'Steelix',
    'Weavile',
    'Ninetales1',
    'Sneasel',
    'Glalie',
    'Froslass',
    'Jynx',
    'Golbat',
    'Graveler',
  ],
  'lmpt-55': ['Uxie'],
  'lmpt-56': ['Dialga', 'Palkia'],
  'lmpt-57': [
    'Solrock',
    'Chimecho',
    'Gyarados',
    'Magikarp',
    'Slowking1',
    'Staravia',
    'Golduck',
    'Lunatone',
    'Wobbuffet',
    'Cursola',
    'Bibarel',
    'Dusclops',
  ],
  'lmpt-58': [
    'Remoraid',
    'Chatot',
    'Tentacruel',
    'Delcatty',
    'Flaaffy',
    'Shinx',
    'Magikarp',
    'Wailmer',
    'Wailord',
    'Cursola',
    'Wingull',
    'Luxio',
    'Mr. Mime',
    'Raichu1',
    'Octillery',
    'Tentacool',
    'Purugly',
    'Electabuzz',
    'Pelipper',
    'Floatzel',
    'Gyarados',
    'Tangela',
    'Heracross',
    "Farfetch'd",
    'Snorlax',
  ],
  'lmpt-59': [
    'Staryu',
    'Kingler',
    'Krabby',
    'Gyarados',
    'Magikarp',
    'Starmie',
    'Cursola',
    'Mantine',
    'Pelipper',
    'Tentacruel',
  ],
  'lmpt-60': [
    'Remoraid',
    'Gyarados',
    'Octillery',
    'Wailmer',
    'Magikarp',
    'Wailord',
    'Cursola',
    'Mantine',
    'Pelipper',
    'Tentacruel',
  ],
  'lmpt-61': [
    'Gyarados',
    'Magikarp',
    'Slowking1',
    'Luvdisc',
    'Corsola',
    'Mantine',
    'Pelipper',
    'Tentacruel',
  ],
  'lmpt-62': [
    'Poliwag',
    'Gastrodon',
    'Poliwhirl',
    'Shellos1',
    'Sharpedo',
    'Magikarp',
    'Carvanha',
    'Tentacool',
    'Qwilfish1',
    'Gyarados',
    'Tentacruel',
  ],
  'lmpt-63': [
    'Zubat',
    'Psyduck',
    'Machop',
    'Geodude',
    'Murkrow',
    'Bidoof',
    'Kricketot',
    'Shinx',
    'Budew',
    'Pachirisu',
    'Buneary',
    'Lickitung',
    'Magnemite',
    'Rhyhorn',
    'Houndoom',
    'Swablu',
    'Absol',
    'Golbat',
    'Hoothoot',
    'Bibarel',
    'Chingling',
    'Stunky',
    'Skuntank',
    'Machoke',
    'Graveler',
    'Aipom',
    'Wingull',
    'Munchlax',
    'Purugly',
    'Pelipper',
    'Luxio',
    'Glameow',
    'Mantyke',
    'Wurmple',
    'Silcoon',
    'Roselia',
    'Combee',
    'Cherubi',
    'Scyther',
    'Pinsir',
    'Buizel',
    'Shellos',
    'Gastrodon',
    'Togepi',
    'Ralts',
    'Barboach',
    'Wooper',
    'Quagsire',
    'Tentacool',
    'Tentracruel',
    'Gible',
    'Octillery',
    'Whiscash',
    'Gabite',
    'Onix',
    'Skorupi',
    'Gligar',
    'Teddiursa',
    'Bronzor',
    'Hippopotas',
    'Magby',
    'Ponyta',
    'Croagunk',
    'Swinub',
    'Gastly',
    'Misdreavus',
    'Smoochum',
    'Elekid',
    'Duskull',
    'Meditie',
    'Kadabra',
    'Girafarig',
    'Mr. Mime',
    'Snorunt',
    'Glalie',
    'Sneasel',
    'Snover',
  ],
  'lmpt-64': [
    'Kirlia',
    'Toxicroak',
    'Shellos1',
    'Remoraid',
    'Teddiursa',
    'Goldeen',
    'Roselia',
    'Scyther',
    'Arbok',
    'Magikarp',
    'Marill',
    'Gloom',
    'Wooper',
    'Whiscash',
    'Ekans',
    'Muk',
    'Gastrodon',
    'Quagsire',
    'Smeargle',
    'Seaking',
    'Octillery',
    'Staravia',
    'Croagunk',
    'Lombre',
    'Grimer',
    'Koffing',
    'Weezing',
    'Qwilfish1',
    'Azumarill',
    'Weepinbell',
    'Gyarados',
    'Barboach',
    "Farfetch'd",
    'Cherrim',
    'Cherubi',
    'Shroomish',
    'Exeggcute',
    'Nuzleaf',
    'Tangela',
    
  ],
  'lmpt-65': ['Manaphy'],
  'lmpt-66': [
    'Surskit',
    "Sirfetch'"',
    'Masquerain',
    'Gyarados',
    'Bibarel',
    'Magikarp',
    'Staravia',
    'Golduck',
    'Lickitung',
    'Wobbuffet',
    'Slowbro1',
  ],
  'lmpt-67': [
    'Mr. Rime',
    'Abomasnow',
    'Lapras',
    'Magikarp',
    'Piloswine',
    'Sneasel',
    'Glalie',
    'Wobbuffet',
    'Cursola',
    'Jynx',
    'Dewgong',
    'Gyarados',
    'Sealeo',
  ],
  'lmpt-68': [],
  'lmpt-69': [
    'Onix',
    'Aron',
    'Diglett1',
    'Zubat',
    'Dugtrio1',
    'Whismur',
    'Trapinch',
    'Geodude',
  ],
  'lmpt-70': [
    'Golem1',
    'Hariyama',
    'Lickitung',
    'Golem',
    'Rhydon',
    'Kadabra',
    'Medicham',
    'Magikarp',
    'Sableye',
    'Marowak',
    'Graveler',
    'Steelix',
    'Gyarados',
    'Gabite',
    'Mawile',
    'Golbat',
    'Machoke',
    'Floatzel',
    'Magneton',
    'Dewgong',
    'Azumarill',
    'Slowbro1',
  ],
  'lmpt-71': [
    'Weedle',
    'Roselia',
    'Dustox',
    'Xatu',
    'Gastrodon1',
    'Gyarados',
    'Beautifly',
    'Magikarp',
    'Gloom',
    'Chatot',
    'Luvdisc',
    'Electrode1',
    'Corsola',
    'Weepinbell',
    'Slowbro1',
    'Shuckle',
    'Pelipper',
    'Tentacruel',
  ],
  'lmpt-72': [
    'Raticate',
    'Machoke',
    'Poliwhirl',
    'Fearow',
    'Hariyama',
    'Magikarp',
    'Persian1',
    'Golduck',
    'Whiscash',
    'Grumpig',
    'Cursola',
    'Gyarados',
    'Barboach',
    'Graveler',
    'Primeape',
  ],
  'lmpt-73': [
    'Raticate',
    'Kingler',
    'Relicanth',
    'Overqwil',
    'Horsea',
    'Fearow',
    'Rapidash',
    'Arbok',
    'Sandslash',
    'Magikarp',
    'Dodrio',
    'Rapidash1',
    'Pelipper',
    'Wingull',
    'Gyarados',
    'Seadra',
    'Tentacruel',
  ],
  'lmpt-74': [
    'Poliwhirl',
    'Gligar',
    'Torkoal',
    'Camerupt',
    'Spinda',
    'Magikarp',
    'Skarmory',
    'Slowking1',
    'Whiscash',
    'Weezing',
    'Perrserker',
    'Gyarados',
    'Rhydon',
    'Barboach',
  ],
  'lmpt-75': [
    'Houndour',
    'Poliwhirl',
    'Claydol',
    'Metang',
    'Magikarp',
    'Gabite',
    'Whiscash',
    'Cursola',
    'Vibrava',
    'Cacturne',
    'Gyarados',
    'Hippowdon',
    'Dugtrio1',
    'Dugtrio',
    'Barboach',
  ],
  'lmpt-76': [
    'Ledian',
    'Volbeat',
    'Exeggutor1',
    'Roselia',
    'Scyther',
    'Masquerain',
    'Gyarados',
    'Seaking',
    'Magikarp',
    'Pinsir',
    'Sunkern',
    'Ariados',
    'Goldeen',
    'Illumise',
    'Weepinbell',
    'Slowbro1',
    'Venomoth',
  ],
  'lmpt-77': [
    'Golduck',
    'Tentacruel',
    'Zangoose',
    'Gastrodon1',
    'Magikarp',
    'Slowking1',
    'Wailmer',
    'Wailord',
    'Corsola',
    'Seviper',
    'Smeargle',
    'Pelipper',
    'Floatzel',
    'Tropius',
    'Obstagoon1',
    'Togetic',
    'Gyarados',
    'Sealeo',
    'Perrserker1',
  ],
  'lmpt-78': [],
  'lmpt-79': [],
  'lmpt-80': ['Magikarp', 'Overqwil'],
  'lmpt-81': [
    'Machoke',
    'Marowak1',
    'Gligar',
    'Torkoal',
    'Fearow',
    'Camerupt',
    'Skarmory',
    'Magmar',
    'Weezing',
    'Golbat',
    'Muk',
    'Magcargo',
    'Rhydon',
    'Weezing1',
    'Graveler',
  ],
};

export default FILTERS;
