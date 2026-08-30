import type {
  IdInput,
  Modifier,
  Registry,
  Rule,
} from "@adeficior/data-modifier";
import type { CommonFilter } from "@adeficior/data-modifier-core/serializer";
import type { WorldgenStructureId } from "@adeficior/data-modifier/generated";

export type StructureDefinition = {};

export type StructureLoader = Registry<StructureDefinition>;

export type StructureRules = {
  resolve(filter?: StructureFilter): Rule<StructureDefinition>;
};

export type StructureFilter = {
  id?: CommonFilter<WorldgenStructureId>;
};

export type StructureEmitter = {
  add(id: IdInput, structure: StructureDefinition): void;
  modify(
    modifier: Modifier<StructureDefinition>,
    filter?: StructureFilter,
  ): void;
};
