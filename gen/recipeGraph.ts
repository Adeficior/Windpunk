import type {
  ItemId,
  RecipeSerializerId,
} from "@adeficior/data-modifier/generated";

// TODO define as defaults
loader.recipeGraph.represent(
  "minecraft:crafting_shaped",
  "minecraft:crafting_table",
);

loader.recipeGraph.represent(
  "create:crushing" satisfies RecipeSerializerId,
  "create:crushing_wheel" satisfies ItemId,
);

loader.recipeGraph.represent(
  "create:milling" satisfies RecipeSerializerId,
  "create:crushing_wheel" satisfies ItemId,
);

loader.recipeGraph.represent(
  "create:mixing" satisfies RecipeSerializerId,
  "create:mechanical_mixer" satisfies ItemId,
);

loader.recipeGraph.represent(
  "create:splashing" satisfies RecipeSerializerId,
  "create:encased_fan" satisfies ItemId,
);

loader.recipeGraph.represent(
  "create:compacting" satisfies RecipeSerializerId,
  "create:mechanical_press" satisfies ItemId,
);

loader.recipeGraph.show("create:milling/cobblestone");
loader.recipeGraph.show("create:splashing/gravel");
loader.recipeGraph.show("create:milling/gravel");
loader.recipeGraph.show("create:splashing/sand");
loader.recipeGraph.show("create:mixing/lava_from_cobble");
loader.recipeGraph.show("create:mixing/andesite_alloy");
loader.recipeGraph.show("create:compacting/andesite_from_flint");
