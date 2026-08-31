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
modifier.structures.modify(voidFix, { id: "nomansland:small_dungeon" });
modifier.structures.modify(voidFix, { id: "nomansland:meeting_point" });
modifier.structures.modify(voidFix, { id: "nomansland:sniffer_monument" });
modifier.structures.modify(voidFix, { id: "nomansland:alchemist_ruins" });
modifier.structures.modify(voidFix, { id: "nomansland:bell_sanctuary" });
modifier.structures.modify(voidFix, { id: "nomansland:creeper_monument" });
modifier.structures.modify(voidFix, { id: "nomansland:desert_ruin" });
modifier.structures.modify(voidFix, { id: "nomansland:forest_temple" });

modifier.structures.modify(voidFix, { id: "spawn:ant_mount" });

modifier.structures.modify(voidFix, { id: "supplementaries:road_sign" });
modifier.structures.modify(voidFix, { id: "supplementaries:galleon" });
