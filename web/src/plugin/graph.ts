import type { AstroIntegration } from "astro";
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

const graphsDir = join(import.meta.dirname, "..", "graph");

const graphsTypes = await readdir(graphsDir);

async function readGraph(name: string) {
  const files = ["nodes.json", "edges.json"].map((it) =>
    join(graphsDir, name, it),
  );

  const [nodes, edges] = await Promise.all(
    files.map((it) => readFile(it).then((it) => JSON.parse(it.toString()))),
  );

  return { data: { nodes, edges }, files };
}

const entries = await Promise.all(
  graphsTypes.map(async (name) => {
    return [name, await readGraph(name)] as const;
  }),
);

const graphs = Object.fromEntries(entries.map(([k, v]) => [k, v.data]));
const files = entries.flatMap(([, v]) => v.files);

const script = /* javascript */ `
  window.graph = ${JSON.stringify(graphs)}
`;

export default <AstroIntegration>{
  name: "graph",
  hooks: {
    "astro:config:setup": (astro) => {
      astro.injectScript("page", script);
      files.forEach((it) => astro.addWatchFile(it));
    },
  },
};
