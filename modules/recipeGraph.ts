import {
  RecipeGraphEmitter,
  type RecipeGraphAccessor,
} from "@/shared/recipeGraph";
import { defineLocalModule } from "@adeficior/assembler";

export default defineLocalModule<{
  emitters: {
    graph: RecipeGraphAccessor;
  };
}>({
  name: "graph",
  importModule: "@/shared/recipeGraph",
  dependencies: {
    "@adeficior/data-modifier-recipes": "required",
    "@adeficior/data-modifier-ingredients": "required",
  },
  types: {
    emitters: {
      graph: "RecipeGraphAccessor",
    },
  },
  promote: [{ key: "graph", service: "emitter:graph" }],
  setup: (instance) => {
    // TODO remove again
    instance.emitter(
      "graph",
      (container) =>
        new RecipeGraphEmitter(
          container.get("loader:recipes"),
          container.get("loader:tags"),
          container.get("predicates"),
        ),
    );
  },
});
