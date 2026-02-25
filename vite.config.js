import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/remepy_static_content/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        pacing: resolve(__dirname, "articles/pacing.html"),
        mindfulness: resolve(__dirname, "articles/mindfulness.html"),
        relaxation: resolve(__dirname, "articles/relaxation.html"),
        "healthy-eating": resolve(__dirname, "articles/healthy-eating.html"),
        "hcp-question-guide": resolve(__dirname, "articles/hcp-question-guide.html"),
        starter: resolve(__dirname, "articles/starter.html"),
      },
    },
  },
});
