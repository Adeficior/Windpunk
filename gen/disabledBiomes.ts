const tags = loader.tags.scoped("minecraft:worldgen/biome");

tags.empty("#has_structure/mineshaft_mesa");
tags.empty("#has_structure/village_desert");
tags.empty("#has_structure/village_plains");
tags.empty("#has_structure/village_savanna");
tags.empty("#has_structure/village_snowy");
tags.empty("#has_structure/village_tiaga");
tags.empty("#has_structure/woodland_mansion");

tags.replace("#has_structure/mineshaft", ["#c:is_cave"]);
tags.replace("#has_structure/stronghold", ["#c:is_cave"]);
tags.replace("#has_structure/trial_chamber", ["#c:is_cave"]);
