import type { StructureDefinition } from "@/shared/structures";
import type { Modifier } from "@adeficior/data-modifier";

const voidFix: Modifier<StructureDefinition> = (delegate) => ({
  type: "lithostitched:delegating",
  delegate,
  spawn_condition: {
    type: "lithostitched:height_filter",
    range_type: "absolute",
    permitted_range: {
      min_inclusive: -48,
      max_inclusive: 256,
    },
  },
});

modifier.structures.modify(voidFix, { id: "nomansland:grand_menhir" });
modifier.structures.modify(voidFix, { id: "nomansland:lone_menhir" });
modifier.structures.modify(voidFix, { id: "nomansland:menhir" });
modifier.structures.modify(voidFix, { id: "nomansland:notexisting" });
