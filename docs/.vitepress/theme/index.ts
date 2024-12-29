// .vitepress/theme/index.ts
import DefaultTheme from "vitepress/theme";

import Confetti from "./components/Confetti.vue";

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router }) {
    app.component("Confetti", Confetti); //注册全局组件
  },
};