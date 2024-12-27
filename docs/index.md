---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Plum programming language"
  tagline: 简单、多元化、高效率的编程语言
  image:
      src: /Kinich.png
      alt: logo
  actions:
    - theme: brand
      text: 下载Plum
      link: /下载Plum
    - theme: alt
      text: 开始学习
      link: /api-examples
    - theme: alt
      text: 加入交流群
      link: /api-examples
    

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
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
