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

<Confetti />

### 🙇‍鸣谢

- 感谢 **FoxScript开发者[FoxObject](https://space.bilibili.com/1775553323)** 给我提的诸多优化方案，使plum得以改进!

- 感谢 **[Kimi](https://kimi.moonshot.cn/)** 为我解决了许多有关网站部署的问题

---

### 🤔plum到底是什么？

plum其实就是一个类似编程语言的代码解析器，只不过有一套专属的语法和特性，可以被当作编程语言； **它提高了开发JavaScritp效率** 。

---

### 更新日志

# 更新日志

## Beta 3

### 描述

Beta3版本，用户将不用再调用底层模块了，修改了导入模块的逻辑：

**例子-新旧版本的导入io操作**:

**Beta_2**
```javascript
using io
```

**Beta_3**
```javascript
import plum::io
```

### 添加

- 添加`import`语句。
- 添加`object`关键字，用于创建对象。
- 添加`class`关键字，用于创建类。
- 添加`stc`关键字，用于创建类中方法。

### 热修复

- 修复了`stc`相关功能出现的有关`No match found.`的错误。

---
### 投喂基地!

尊敬的 **资助者** ：

您好！

在这个充满挑战和机遇的时代，我们每个人都可能面临不同的困难和挑战。在我人生旅途中的某个时刻，我遇到了一个难题，它考验着我的意志和决心。幸运的是，在这个关键时刻，我得到了您的慷慨资助，这不仅帮助我渡过了难关，也为我带来了希望和力量。在此，我想向您表达我最深切的感激之情。

首先，我想说的是，您的资助对我来说意义重大。它不仅仅是金钱上的援助，更是精神上的支持和鼓励。在我感到迷茫和无助的时候，您的慷慨解囊让我看到了社会的温暖和人性的光辉。您的行动证明了，即使在最艰难的时刻，也有人愿意伸出援手，给予他人帮助和支持。

您的资助使我能够继续我的教育和职业发展。在现代社会，知识和技能是个人发展的关键。您的资助让我有机会继续学习，提升自己的能力，为未来的职业生涯打下坚实的基础。这种投资不仅仅是对我的帮助，也是对社会的贡献，因为一个受过良好教育、有能力的人更有可能为社会做出积极的贡献。

此外，您的资助也让我学会了感恩和回报。我深知，没有您的帮助，我可能无法实现我的梦想和目标。因此，我承诺将这份恩情铭记在心，并在未来的日子里，将这份爱心传递下去。无论是通过志愿服务、慈善捐赠，还是其他形式的帮助，我都将尽我所能，帮助那些需要帮助的人，让他们也能感受到这份温暖和希望。

我还想说的是，您的资助让我更加坚信，每个人都有能力去影响和改变他人的生活。您的一个决定，一个行动，就足以改变一个人的命运。这让我意识到，我们每个人都拥有这样的力量，我们都可以成为他人生命中的一束光。

在未来的日子里，我将不懈努力，以实际行动来回报您的慷慨和信任。我会将您的资助转化为动力，激励我不断前进，追求卓越。我相信，通过我的努力，我能够实现我的梦想，并为社会做出我的贡献。

最后，我想再次对您说一声谢谢。感谢您的慷慨，感谢您的支持，感谢您给予我的一切。请相信，您的善举将永远铭记在我的心中，我也会将这份感激之情转化为行动，去帮助更多的人。

衷心感谢您的资助和支持。

此致
敬礼！

PlumScript开发者

2025.1.1

---

# 投喂!

:::tip
资助即代表您已经仔细阅读[自助者须知](/投喂基地/须知.md)，若有不明白之处请通过右上角加入交流群询问
:::
