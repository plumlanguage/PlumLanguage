---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Plum Script"
  image:
    src: /logo.png
    alt: logo
  tagline: 高效、简单和朴实无华的JavaScript😊
  actions:
    - theme: brand
      text: 快速开始
      link: /快速开始

features:
  - title: 🚀 高效
    details: 这是一个高效的JavaScript,plum使用了许多方法来提升开发效率，比如说「代码生成器」可以减少多次手写大量的样板代码。
  - title: 🔨 从HTML中构建
    details: plum代码可以嵌入到HTML文件当中，使用「plum build-html <fileName>」可以构建这个HTML文件。
  - title: 🔐 回到JavaScript
    details: 使用「plum build <fileName>」生成的JS可以直接在加入到项目当中，利用plum高效的完成Javascript的编写。
---


<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>

### 鸣谢

感谢 **FoxScript开发者[FoxObject](https://space.bilibili.com/1775553323)** 给我提的诸多优化方案，使plum得以改进!

