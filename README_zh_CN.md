# Ember-cli-fullpagejs

![intro.png](./tests/dummy/public/imgs/intro.png)
[![npm version](https://badge.fury.io/js/ember-cli-fullpagejs.svg)](https://badge.fury.io/js/ember-cli-fullpagejs)
[![Build Status](https://travis-ci.org/imfly/ember-cli-fullpagejs.png?branch=master)](https://travis-ci.org/imfly/ember-cli-fullpagejs)
[![Dependencies Status](https://david-dm.org/imfly/ember-cli-fullpagejs.svg)](https://david-dm.org/imfly/ember-cli-fullpagejs)
[![License](http://img.shields.io/badge/License-MIT-blue.svg)](http://opensource.org/licenses/MIT)

这是对 [fullPage.js](https://github.com/alvarotrigo/fullPage.js) 的封装，实现非常酷炫的翻页效果。

* [demo](http://ebookchain.org)
* [开发文档（Document)]()
* [使用文档](./README_zh_CN.md)

## 安装

如果使用 Ember CLI 0.2.3 或更高版本，只要在工程目录运行下面的命令：

```bash
ember install ember-cli-fullpagejs --save-dev
```

如果ember版本在 0.1.5 与 0.2.3之间，在工程目录运行下面的命令:

```bash
ember install:addon ember-cli-fullpagejs
```

版本低于 0.1.5，请在工程目录运行下面的命令:

```bash
npm install --save-dev ember-cli-fullpagejs
ember generate ember-cli-fullpagejs
```

## 使用

只要在模板文件里，使用标签 `{{#full-page}}{{/full-page}}` 代替 `<div id="fullpage"></div>`即可， 其他与使用 fullPage.js 一样。

#### （1）**必须的 HTML 结构**

```
{{#full-page}}
    <div class="section">Some section</div>
    <div class="section">Some section</div>
    <div class="section">Some section</div>
    <div class="section">Some section</div>
{{/full-page}}
```

为了在一个区域里创建滑块，每个滑块默认使用包含 slide 类的元素：

```
<div class="section">
    <div class="slide"> Slide 1 </div>
    <div class="slide"> Slide 2 </div>
    <div class="slide"> Slide 3 </div>
    <div class="slide"> Slide 4 </div>
</div>
```

#### （2）**选项**

可以给标签直接添加选项，如:

```html
{{#full-page autoScrolling='true' navigation='true' anchors='["firstPage", "secondPage"]' }}

{{/full-page}}
```

**注意**: 选项值必须使用单引号，而不是双引号。所有选项如下, [更多请参考](https://github.com/alvarotrigo/fullPage.js#options):

```
//Navigation
menu: '#menu',
lockAnchors: false,
anchors:['firstPage', 'secondPage'],
navigation: false,
navigationPosition: 'right',
navigationTooltips: ['firstSlide', 'secondSlide'],
showActiveTooltip: false,
slidesNavigation: true,
slidesNavPosition: 'bottom',

//Scrolling
css3: true,
scrollingSpeed: 700,
autoScrolling: true,
fitToSection: true,
fitToSectionDelay: 1000,
scrollBar: false,
easing: 'easeInOutCubic',
easingcss3: 'ease',
loopBottom: false,
loopTop: false,
loopHorizontal: true,
continuousVertical: false,
continuousHorizontal: false,
scrollHorizontally: false,
interlockedSlides: false,
resetSliders: false,
fadingEffect: false,
normalScrollElements: '#element1, .element2',
scrollOverflow: false,
scrollOverflowOptions: null,
touchSensitivity: 15,
normalScrollElementTouchThreshold: 5,
bigSectionsDestination: null,

//Accessibility
keyboardScrolling: true,
animateAnchor: true,
recordHistory: true,

//Design
controlArrows: true,
verticalCentered: true,
sectionsColor : ['#ccc', '#fff'],
paddingTop: '3em',
paddingBottom: '10px',
fixedElements: '#header, .footer',
responsiveWidth: 0,
responsiveHeight: 0,
responsiveSlides: false,

//Custom selectors
sectionSelector: '.section',
slideSelector: '.slide',

//events
onLeave: function(index, nextIndex, direction){},
afterLoad: function(anchorLink, index){},
afterRender: function(){},
afterResize: function(){},
afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
```

## 开发

* `git clone` this repository
* `npm install`
* `bower install`

## 运行

* `ember server`
* Visit your app at http://localhost:4200.

## 测试

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## 构建

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
