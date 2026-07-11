import type { AstroIntegration } from "astro";

const script = `

`;

export default <AstroIntegration>{
  name: "htmx",
  hooks: {
    "astro:config:setup": ({ injectScript }) => {
      injectScript("page", script);
    },
  },
};
