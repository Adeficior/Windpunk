// @ts-check
import { defineConfig } from "astro/config";
import graph from "./src/plugin/graph";

// https://astro.build/config
export default defineConfig({
  integrations: [graph],
});
