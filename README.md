# app

> A Vue.js project

## 制作过程

1. 初始化 vue 项目并安装需要的包和第三方插件
2. 制作首页 App，拆分为 头部，内容区域，和底部
   + 头部部分用的是 Mint-UI 中的 Header 组件
   + 底部用的是MUI，用 router-link 替换 a 标签。这里注意额外的图标还有图标点亮的实现（./router/index.js），还有动画效果的实现
3. 分别制作4个路由组件
   + Home组件：
     1. 轮播图，用mint-ui里的swipe组件，数据用现成的'http://www.liulongbin.top:3005/api/getlunbo'
     2. 图标列表，用 MUI 里的 grid-default.html

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
