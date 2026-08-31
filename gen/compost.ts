import type { LootEntry } from "@adeficior/data-modifier/loot";

modifier.loot.add("compost:composters/compost", {
  pools: [
    {
      rolls: 1,
      entries: [
        {
          type: "minecraft:item",
          name: "minecraft:dirt",
        } satisfies LootEntry,
      ],
    },
  ],
});
