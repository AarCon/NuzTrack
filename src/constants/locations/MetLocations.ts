const METLOCATIONS: string[] = [
  "Jubilife City",
  "Jubilife City",
  "Jubilife City",
  "Jubilife City",
  "Jubilife City",
  "Jubilife City",
  "Jubilife City",
  "Jubilife City",
  "Jubilife City",
  "Jubilife City",
  "Jubilife City",
  "Jubilife City",
  "Jubilife City",
  "Jubilife City",
  "Jubilife City",
  "Jubilife City",
  "Jubilife City",
  "Jubilife City",
  "Jubilife City",
  "Jubilife City",
  "Jubilife City",
  "Jubilife City",
  "Jubilife City",
  "Jubilife City",
  "Canalave City",
  "Canalave City",
  "Canalave Gym",
  "Canalave City",
  "Canalave City",
  "Canalave City",
  "Canalave City",
  "Canalave City",
  "Canalave City",
  "Canalave City",
  "Canalave City",
  "Canalave City",
  "Canalave City",
  "Canalave City",
  "Oreburgh City",
  "Oreburgh City",
  "Oreburgh Gym",
  "Oreburgh City",
  "Oreburgh City",
  "Oreburgh City",
  "Oreburgh City",
  "Oreburgh City",
  "Oreburgh City",
  "Oreburgh City",
  "Oreburgh City",
  "Oreburgh City",
  "Oreburgh City",
  "Oreburgh City",
  "Oreburgh City",
  "Oreburgh City",
  "Eterna City",
  "Eterna City",
  "Eterna Gym",
  "Eterna Gym",
  "Eterna City",
  "Eterna City",
  "Eterna City",
  "Eterna City",
  "Eterna City",
  "Eterna City",
  "Eterna City",
  "Eterna City",
  "Eterna City",
  "Eterna City",
  "Eterna City",
  "Eterna City",
  "Eterna City",
  "Eterna City",
  "Eterna City",
  "Eterna City",
  "Hearthome City",
  "Hearthome City",
  "Hearthome Gym",
  "Hearthome Gym",
  "Hearthome Gym",
  "Hearthome Gym",
  "Hearthome Gym",
  "Hearthome Gym",
  "Hearthome Gym",
  "Hearthome Gym",
  "Hearthome Gym",
  "Hearthome Gym",
  "Hearthome Gym",
  "Hearthome Gym",
  "Hearthome Gym",
  "Hearthome City",
  "Hearthome City",
  "Hearthome City",
  "Hearthome City",
  "Hearthome City",
  "Hearthome City",
  "Hearthome City",
  "Hearthome City",
  "Hearthome City",
  "Hearthome City",
  "Hearthome City",
  "Hearthome City",
  "Hearthome City",
  "Hearthome City",
  "Hearthome City",
  "Hearthome City",
  "Hearthome City",
  "Hearthome City",
  "Hearthome City",
  "Hearthome City",
  "Hearthome City",
  "Pastoria City",
  "Pastoria City",
  "Pastoria Gym",
  "Pastoria City",
  "Pastoria City",
  "Pastoria City",
  "Pastoria City",
  "Pastoria City",
  "Pastoria City",
  "Pastoria City",
  "Pastoria City",
  "Pastoria City",
  "Pastoria City",
  "Veilstone City",
  "Veilstone Gym",
  "Veilstone City",
  "Veilstone City",
  "Veilstone City",
  "Veilstone City",
  "Veilstone City",
  "Veilstone City",
  "Veilstone City",
  "Veilstone City",
  "Veilstone City",
  "Veilstone City",
  "Veilstone City",
  "Veilstone City",
  "Veilstone City",
  "Veilstone City",
  "Veilstone City",
  "Veilstone City",
  "Veilstone City",
  "Sunyshore City",
  "Sunyshore City",
  "Sunyshore Gym",
  "Sunyshore Gym",
  "Sunyshore Gym",
  "Sunyshore City",
  "Sunyshore City",
  "Sunyshore City",
  "Sunyshore City",
  "Sunyshore City",
  "Sunyshore City",
  "Sunyshore City",
  "Sunyshore City",
  "Sunyshore City",
  "Sunyshore City",
  "Sunyshore City",
  "Sunyshore City",
  "Snowpoint City",
  "Snowpoint City",
  "Snowpoint Gym",
  "Snowpoint City",
  "Snowpoint City",
  "Snowpoint City",
  "Snowpoint City",
  "Snowpoint City",
  "Pokémon League",
  "Pokémon League",
  "Pokémon League",
  "Pokémon League",
  "Pokémon League",
  "Pokémon League",
  "Pokémon League",
  "Pokémon League",
  "Pokémon League",
  "Pokémon League",
  "Pokémon League",
  "Pokémon League",
  "Pokémon League",
  "Pokémon League",
  "Pokémon League",
  "Pokémon League",
  "Pokémon League",
  "Pokémon League",
  "Pokémon League",
  "Fight Area",
  "Fight Area",
  "Fight Area",
  "Fight Area",
  "Fight Area",
  "Fight Area",
  "Fight Area",
  "Fight Area",
  "Fight Area",
  "Oreburgh Mine",
  "Oreburgh Mine",
  "Valley Windworks",
  "Valley Windworks",
  "Eterna Forest",
  "Eterna Forest",
  "Fuego Ironworks",
  "Fuego Ironworks",
  "Mount Coronet",
  "Mount Coronet",
  "Mount Coronet",
  "Mount Coronet",
  "Mount Coronet",
  "Mount Coronet",
  "Mount Coronet",
  "Mount Coronet",
  "Mount Coronet",
  "Mount Coronet",
  "Mount Coronet",
  "Mount Coronet",
  "Mount Coronet",
  "Spear Pillar",
  "Spear Pillar",
  "Hall of Origin",
  "Great Marsh",
  "Great Marsh",
  "Great Marsh",
  "Great Marsh",
  "Great Marsh",
  "Great Marsh",
  "Solaceon Ruins",
  "Solaceon Ruins",
  "Solaceon Ruins",
  "Solaceon Ruins",
  "Solaceon Ruins",
  "Solaceon Ruins",
  "Solaceon Ruins",
  "Solaceon Ruins",
  "Solaceon Ruins",
  "Solaceon Ruins",
  "Solaceon Ruins",
  "Solaceon Ruins",
  "Solaceon Ruins",
  "Solaceon Ruins",
  "Solaceon Ruins",
  "Solaceon Ruins",
  "Solaceon Ruins",
  "Solaceon Ruins",
  "Solaceon Ruins",
  "Victory Road",
  "Victory Road",
  "Victory Road",
  "Victory Road",
  "Victory Road",
  "Victory Road",
  "Ramanas Park",
  "Amity Square",
  "Ravaged Path",
  "Floaroma Meadow",
  "Floaroma Meadow",
  "Oreburgh Gate",
  "Oreburgh Gate",
  "Fullmoon Island",
  "Fullmoon Island",
  "Stark Mountain",
  "Stark Mountain",
  "Stark Mountain",
  "Stark Mountain",
  "Sendoff Spring",
  "Turnback Cave",
  "Turnback Cave",
  "Turnback Cave",
  "Turnback Cave",
  "Turnback Cave",
  "Turnback Cave",
  "Turnback Cave",
  "Turnback Cave",
  "Turnback Cave",
  "Turnback Cave",
  "Turnback Cave",
  "Turnback Cave",
  "Turnback Cave",
  "Turnback Cave",
  "Turnback Cave",
  "Turnback Cave",
  "Turnback Cave",
  "Turnback Cave",
  "Turnback Cave",
  "Turnback Cave",
  "Turnback Cave",
  "Flower Paradise",
  "Snowpoint Temple",
  "Snowpoint Temple",
  "Snowpoint Temple",
  "Snowpoint Temple",
  "Snowpoint Temple",
  "Snowpoint Temple",
  "Wayward Cave",
  "Wayward Cave",
  "Ruin Maniac Cave",
  "Ruin Maniac Cave",
  "Maniac Tunnel",
  "Trophy Garden",
  "Iron Island",
  "Iron Island",
  "Iron Island",
  "Iron Island",
  "Iron Island",
  "Iron Island",
  "Iron Island",
  "Iron Island",
  "Old Chateau",
  "Old Chateau",
  "Old Chateau",
  "Old Chateau",
  "Old Chateau",
  "Old Chateau",
  "Old Chateau",
  "Old Chateau",
  "Old Chateau",
  "Galactic HQ",
  "Galactic HQ",
  "Galactic HQ",
  "Galactic HQ",
  "Galactic HQ",
  "Galactic HQ",
  "Galactic HQ",
  "Galactic HQ",
  "Lake Verity",
  "Lake Verity",
  "Lake Verity (Verity Cavern)",
  "Lake Valor",
  "Lake Valor",
  "Lake Valor (Valor Cavern)",
  "Lake Acuity",
  "Lake Acuity",
  "Lake Acuity (Acuity Cavern)",
  "Newmoon Island",
  "Newmoon Island",
  "Battle Park",
  "Battle Park",
  "Battle Park",
  "Battle Park",
  "Battle Park",
  "Battle Tower",
  "Battle Tower",
  "Battle Tower",
  "Battle Tower",
  "Battle Tower",
  "Battle Tower",
  "Mystery Zone",
  "Verity Lakefront",
  "Valor Lakefront",
  "Valor Lakefront",
  "Valor Lakefront",
  "Valor Lakefront",
  "Acuity Lakefront",
  "Spring Path",
  "Mystery Zone",
  "Route 201",
  "Route 202",
  "Route 203",
  "Route 204",
  "Route 204",
  "Route 205",
  "Route 205",
  "Route 205",
  "Route 206",
  "Route 206",
  "Route 207",
  "Route 208",
  "Route 208",
  "Route 209",
  "Route 209",
  "Route 209",
  "Route 209",
  "Route 209",
  "Route 209",
  "Route 210",
  "Route 210",
  "Route 210",
  "Route 210",
  "Route 211",
  "Route 211",
  "Route 212",
  "Route 212",
  "Route 212",
  "Route 212",
  "Route 212",
  "Route 212",
  "Route 213",
  "Route 213",
  "Route 213",
  "Route 213",
  "Route 213",
  "Route 213",
  "Route 213",
  "Route 214",
  "Route 214",
  "Route 215",
  "Route 216",
  "Route 216",
  "Route 217",
  "Route 217",
  "Route 217",
  "Route 218",
  "Route 218",
  "Route 218",
  "Route 219",
  "Route 221",
  "Route 221",
  "Route 221",
  "Route 222",
  "Route 222",
  "Route 222",
  "Route 222",
  "Route 224",
  "Route 225",
  "Route 225",
  "Route 227",
  "Route 227",
  "Route 228",
  "Route 228",
  "Route 228",
  "Route 228",
  "Route 229",
  "Mystery Zone",
  "Twinleaf Town",
  "Twinleaf Town",
  "Twinleaf Town",
  "Twinleaf Town",
  "Twinleaf Town",
  "Twinleaf Town",
  "Twinleaf Town",
  "Sandgem Town",
  "Sandgem Town",
  "Sandgem Town",
  "Sandgem Town",
  "Sandgem Town",
  "Sandgem Town",
  "Sandgem Town",
  "Sandgem Town",
  "Sandgem Town",
  "Floaroma Town",
  "Floaroma Town",
  "Floaroma Town",
  "Floaroma Town",
  "Floaroma Town",
  "Floaroma Town",
  "Floaroma Town",
  "Floaroma Town",
  "Solaceon Town",
  "Solaceon Town",
  "Solaceon Town",
  "Solaceon Town",
  "Solaceon Town",
  "Solaceon Town",
  "Solaceon Town",
  "Solaceon Town",
  "Solaceon Town",
  "Solaceon Town",
  "Celestic Town",
  "Celestic Town",
  "Celestic Town",
  "Celestic Town",
  "Celestic Town",
  "Celestic Town",
  "Celestic Town",
  "Celestic Town",
  "Celestic Town",
  "Survival Area",
  "Survival Area",
  "Survival Area",
  "Survival Area",
  "Survival Area",
  "Survival Area",
  "Survival Area",
  "Survival Area",
  "Resort Area",
  "Resort Area",
  "Resort Area",
  "Resort Area",
  "Resort Area",
  "Resort Area",
  "Resort Area",
  "Resort Area",
  "Resort Area",
  "Resort Area",
  "Mystery Zone",
  "Mystery Zone",
  "Route 220",
  "Route 223",
  "Route 226",
  "Route 226",
  "Route 230",
  "Seabreak Path",
  "Mystery Zone",
  "Mystery Zone",
  "Mystery Zone",
  "Eterna City",
  "Ramanas Park",
  "Ramanas Park (Discovery Room)",
  "Ramanas Park (Kanto Room)",
  "Ramanas Park (Johto Room)",
  "Ramanas Park (Soul Room)",
  "Ramanas Park (Tectonic Room)",
  "Ramanas Park (Oceanic Room)",
  "Ramanas Park (Stratospheric Room)",
  "Ramanas Park (Rainbow Room)",
  "Ramanas Park (Squall Room)",
  "Ramanas Park (Genome Room)",
  "Ramanas Park (Pure Space)",
  "Ramanas Park (Strange Space)",
  "Grand Underground",
  "Grand Underground",
  "Grand Underground",
  "Grand Underground",
  "Grand Underground",
  "Grand Underground",
  "Grand Underground",
  "Grand Underground",
  "Grand Underground",
  "Grand Underground",
  "Grand Underground",
  "Grand Underground",
  "Grand Underground",
  "Grand Underground",
  "Grand Underground",
  "Grand Underground",
  "Grand Underground",
  "Grand Underground",
  "Grand Underground",
  "Grand Underground",
  "Grand Underground",
  "Grand Underground",
  "Grand Underground",
  "Grand Underground",
  "Grand Underground",
  "Grand Underground",
  "Grand Underground",
  "Grand Underground",
  "Grand Underground",
  "Grand Underground",
  "Grand Underground",
  "Grand Underground",
  "Grand Underground",
  "Grand Underground",
  "Grand Underground",
  "Grand Underground (Spacious Cave)",
  "Grand Underground (Grassland Cave)",
  "Grand Underground (Riverbank Cave)",
  "Grand Underground (Spacious Cave)",
  "Grand Underground (Spacious Cave)",
  "Grand Underground (Swampy Cave)",
  "Grand Underground (Grassland Cave)",
  "Grand Underground (Fountainspring Cave)",
  "Grand Underground (Spacious Cave)",
  "Grand Underground (Fountainspring Cave)",
  "Grand Underground (Fountainspring Cave)",
  "Grand Underground (Spacious Cave)",
  "Grand Underground (Spacious Cave)",
  "Grand Underground (Rocky Cave)",
  "Grand Underground (Volcanic Cave)",
  "Grand Underground (Spacious Cave)",
  "Grand Underground (Rocky Cave)",
  "Grand Underground (Volcanic Cave)",
  "Grand Underground (Dazzling Cave)",
  "Grand Underground (Sandsear Cave)",
  "Grand Underground (Spacious Cave)",
  "Grand Underground (Spacious Cave)",
  "Grand Underground (Rocky Cave)",
  "Grand Underground (Spacious Cave)",
  "Grand Underground (Grassland Cave)",
  "Grand Underground (Riverbank Cave)",
  "Grand Underground (Spacious Cave)",
  "Grand Underground (Grassland Cave)",
  "Grand Underground (Fountainspring Cave)",
  "Grand Underground (Swampy Cave)",
  "Grand Underground (Spacious Cave)",
  "Grand Underground (Spacious Cave)",
  "Grand Underground (Spacious Cave)",
  "Grand Underground (Swampy Cave)",
  "Grand Underground (Riverbank Cave)",
  "Grand Underground (Icy Cave)",
  "Grand Underground (Dazzling Cave)",
  "Grand Underground (Dazzling Cave)",
  "Grand Underground (Icy Cave)",
  "Grand Underground (Icy Cave)",
  "Grand Underground (Icy Cave)",
  "Grand Underground (Spacious Cave)",
  "Grand Underground (Spacious Cave)",
  "Grand Underground (Whiteout Cave)",
  "Grand Underground (Whiteout Cave)",
  "Grand Underground (Whiteout Cave)",
  "Grand Underground (Whiteout Cave)",
  "Grand Underground (Swampy Cave)",
  "Grand Underground (Fountainspring Cave)",
  "Grand Underground (Spacious Cave)",
  "Grand Underground (Swampy Cave)",
  "Grand Underground (Spacious Cave)",
  "Grand Underground (Fountainspring Cave)",
  "Grand Underground (Rocky Cave)",
  "Grand Underground (Swampy Cave)",
  "Grand Underground (Spacious Cave)",
  "Grand Underground (Sandsear Cave)",
  "Grand Underground (Volcanic Cave)",
  "Grand Underground (Dazzling Cave)",
  "Grand Underground (Volcanic Cave)",
  "Grand Underground (Rocky Cave)",
  "Grand Underground (Fountainspring Cave)",
  "Grand Underground (Grassland Cave)",
  "Grand Underground (Spacious Cave)",
  "Grand Underground (Swampy Cave)",
  "Grand Underground (Rocky Cave)",
  "Grand Underground (Sandsear Cave)",
  "Grand Underground (Volcanic Cave)",
  "Grand Underground (Still-Water Cavern)",
  "Grand Underground (Big Bluff Cavern)",
  "Grand Underground (Sunlit Cavern)",
  "Grand Underground (Stargleam Cavern)",
  "Grand Underground (Glacial Cavern)",
  "Grand Underground (Bogsunk Cavern)",
  "Grand Underground (Typhlo Cavern)",
  "Hall of Origin",
  "Ramanas Park (Distortion Room)",
  "Grand Underground (Secret Base)",
  "Grand Underground (Secret Base)",
  "Grand Underground (Secret Base)",
  "Grand Underground (Secret Base)",
  "Ramanas Park (Distortion Room)",
  "Ramanas Park",
  "Jubilife City",
  "Grand Underground (Secret Base)",
  "Grand Underground (Secret Base)",
  "Grand Underground (Secret Base)",
  "Grand Underground (Secret Base)",
  "Grand Underground (Secret Base)",
  "Grand Underground (Secret Base)",
  "Grand Underground (Secret Base)",
  "Grand Underground (Secret Base)",
  "Grand Underground (Secret Base)",
  "Grand Underground (Secret Base)",
  "Grand Underground (Secret Base)",
  "Grand Underground (Secret Base)",
  "Grand Underground (Secret Base)",
  "Grand Underground (Secret Base)",
  "Grand Underground (Secret Base)",
  "Grand Underground (Secret Base)",
  "Grand Underground (Secret Base)",
  "Grand Underground (Secret Base)",
  "Grand Underground (Secret Base)",
  "Grand Underground (Secret Base)",
  "Grand Underground (Secret Base)",
  "Ramanas Park (Discovery Room)",
  "Ramanas Park (Kanto Room)",
  "Ramanas Park (Johto Room)",
  "Ramanas Park (Soul Room)",
  "Ramanas Park (Tectonic Room)",
  "Ramanas Park (Oceanic Room)",
  "Ramanas Park (Stratospheric Room)",
  "Ramanas Park (Rainbow Room)",
  "Ramanas Park (Squall Room)",
  "Ramanas Park (Genome Room)"
]

export default METLOCATIONS