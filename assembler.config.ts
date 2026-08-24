import { defineAssemblerConfig } from "@adeficior/assembler";

export default defineAssemblerConfig({
  modules: ["@adeficior/data-modifier-create"],
  codegen: {
    registryTypes: "stubs",
  },
});
