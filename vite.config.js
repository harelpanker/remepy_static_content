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
        "rosted-chicken": resolve(__dirname, "recipes/rosted-chicken.html"),
        "veggie-egg-scramble": resolve(__dirname, "recipes/veggie-egg-scramble.html"),
        "strawberry-banana-smoothie": resolve(__dirname, "recipes/strawberry-banana-smoothie.html"),
        "salmon-zucchini-asparagus": resolve(__dirname, "recipes/salmon-zucchini-asparagus.html"),
        "tax-max-wrap": resolve(__dirname, "recipes/tax-max-wrap.html"),
        "veggie-burger": resolve(__dirname, "recipes/veggie-burger.html"),
        "sweet-potato-bowl": resolve(__dirname, "recipes/sweet-potato-bowl.html"),
        "banana-nice-cream": resolve(__dirname, "recipes/banana-nice-cream.html"),
      },
    },
  },
});
