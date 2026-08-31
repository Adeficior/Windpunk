import {
  type StructureDefinition,
  type StructureEmitter,
  type StructureFilter,
  type StructureLoader,
  type StructureRules,
} from "@/shared/structures";
import { defineLocalModule } from "@adeficior/assembler";
import {
  jsonFilePath,
  jsonFilePattern,
  JsonLoader,
  SimpleEmitter,
  type Id,
  type IdInput,
  type Modifier,
  type Registry,
  type ResourceFolder,
  type Rule,
} from "@adeficior/data-modifier";
import {
  always,
  type Predicate,
} from "@adeficior/data-modifier-core/serializer";
import type { Predicates } from "@adeficior/data-modifier/ingredients";
import { type ContextLike, type Logger } from "@adeficior/pack-resolver";

const folder: ResourceFolder = {
  packType: "data",
  folder: "worldgen/structure",
};

class StructureLoaderImpl
  extends JsonLoader<StructureDefinition>
  implements StructureLoader
{
  protected override parse(json: unknown, id: Id) {
    return json as StructureDefinition;
  }
}

class StructureRule implements Rule<StructureDefinition> {
  constructor(private readonly id: Predicate<Id>) {}

  matches(id: Id, value: StructureDefinition) {
    return this.id(id);
  }
}

const DISABLED_STUCTURE: StructureDefinition = {};

class StructureRulesImpl implements StructureRules {
  constructor(private readonly predicates: Predicates) {}

  resolve(filter: StructureFilter) {
    return new StructureRule(
      filter.id
        ? this.predicates.id(filter.id, "minecraft:worldgen/structure")
        : always(),
    );
  }
}

class StructureEmitterImpl
  extends SimpleEmitter<StructureDefinition, StructureDefinition>
  implements StructureEmitter
{
  constructor(
    private readonly rules: StructureRulesImpl,
    registry: Registry<StructureDefinition>,
    logger: Logger,
  ) {
    super(
      "structures",
      registry,
      logger,
      (id) => jsonFilePath(folder, id),
      DISABLED_STUCTURE,
    );
  }

  add(id: IdInput, structure: StructureDefinition) {
    return this.addCustom(id, structure);
  }

  modify(
    modifier: Modifier<StructureDefinition>,
    filter: StructureFilter = {},
    context: ContextLike = {},
  ) {
    this.ruled.addRule(this.rules.resolve(filter), modifier, {
      filter,
      ...context,
    });
  }
}

export default defineLocalModule<{
  services: {
    "rules:structures": StructureRules;
  };
  emitters: {
    structures: StructureEmitter;
  };
  loaders: {
    structures: StructureLoader;
  };
}>({
  name: "structures",
  importModule: "@/shared/structures",
  dependencies: {
    "@adeficior/data-modifier-ingredients": "required",
  },
  types: {
    services: {
      "rules:structures": "StructureRules",
    },
    emitters: {
      structures: "StructureEmitter",
    },
    loaders: {
      structures: "StructureLoader",
    },
    registries: ["minecraft:worldgen/structure"],
  },
  promote: [{ key: "structures", service: "emitter:structures" }],
  setup: (instance) => {
    const loader = instance.loader(
      "structures",
      () => new StructureLoaderImpl(folder),
      jsonFilePattern(folder),
    );

    const predicates = instance.service(
      "rules:structures",
      (container) => new StructureRulesImpl(container.get("predicates")),
    );

    instance.emitter(
      "structures",
      (container) =>
        new StructureEmitterImpl(
          predicates(),
          loader(),
          container.get("logger"),
        ),
    );
  },
});
