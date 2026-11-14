import {
  createId,
  CustomEmitter,
  encodeId,
  JsonLoader,
  type Id,
  type IdInput,
  type TagInput,
} from "@adeficior/data-modifier";
import type {
  WorldgenPlacedFeatureId,
  WorldgenStructureId,
} from "@adeficior/data-modifier/generated";

const tags = loader.tags.scoped("minecraft:worldgen/biome");

tags.empty("#has_structure/village_desert");
tags.empty("#has_structure/village_plains");
tags.empty("#has_structure/village_savanna");
tags.empty("#has_structure/village_snowy");
tags.empty("#has_structure/village_tiaga");
tags.empty("#has_structure/woodland_mansion");
tags.empty("#has_structure/mineshaft");
tags.empty("#has_structure/mineshaft_mesa");
tags.empty("#has_structure/stronghold");
tags.empty("#has_structure/trial_chamber");
tags.empty("#has_structure/trial_chambers");
tags.empty("#nomansland:valid_sanctuary_biomes");

// tags.replace("#has_structure/mineshaft", ["#c:is_cave"]);
// tags.replace("#has_structure/stronghold", ["#c:is_cave"]);
// tags.replace("#has_structure/trial_chamber", ["#c:is_cave"]);

// monster_room

type RemoveFeatures = {
  type: "neoforge:remove_features";
  biomes: TagInput;
  features: WorldgenPlacedFeatureId;
};

type BiomeModifier = RemoveFeatures;

const biomeModifiers = loader.registerEmitter(
  new CustomEmitter<BiomeModifier>(
    (id) => `data/${id.namespace}/neoforge/biome_modifier/${id.path}.json`,
  ),
);

function removeFeature(feature: IdInput<WorldgenPlacedFeatureId>) {
  const { path, namespace } = createId(feature);
  biomeModifiers.add(
    { namespace: "windpunk", path: `${namespace}/${path}` },
    {
      type: "neoforge:remove_features",
      biomes: "#c:is_overworld",
      features: encodeId(feature),
    },
  );
}

removeFeature("minecraft:monster_room");
removeFeature("minecraft:monster_room_deep");
removeFeature("minecraft:ore_emerald");
removeFeature("nomansland:pots/pots_cave");
removeFeature("nomansland:pots/pots_cave_depths");
removeFeature("nomansland:seashells");
// removeFeature("nomansland:underground/ancestral_carving");

const structures = loader.registerEmitter(
  new CustomEmitter(
    (id) => `data/${id.namespace}/worldgen/structure/${id.path}.json`,
  ),
);

function removeStructure(id: IdInput<WorldgenStructureId>) {
  // structures.add(id, {
  //   "neoforge:conditions": [
  //     { type: "neoforge:false" satisfies ConditionCodecsId },
  //   ],
  // });
  structures.add(id, {
    type: "minecraft:igloo",
    biomes: "#c:is_ocean",
    spawn_overrides: {},
    step: "surface_structures",
  });
}

class StructureLoader extends JsonLoader<unknown> {
  protected override parse(json: unknown, id: Id) {
    console.log(id);
    return json;
  }
}

const structureLoader = loader.registerLoader(
  "data/*/worldgen/structure/**/*.json",
  new StructureLoader(),
);

removeStructure("nomansland:bell_sanctuary");
removeStructure("nomansland:deep_well");
removeStructure("nomansland:small_dungeon");
