# v-carousel-lucky
`vue3`版本的走马灯
# 在线demo
[v-carousel-lucky](https://xiaogonggong-w.github.io/v-carousel-lucky/)
# 安装
```
npm install v-carousel-lucky --save

```
# 全局引入
在`main.js`中：
```
import { createApp } from 'vue'
import App from './App.vue'
//引入css文件
import "v-carousel-lucky/dist/style.css"
// 引入组件
import vCarouselLucky from 'v-carousel-lucky'
const app = createApp(App);
app.use(vCarouselLucky)
app.mount("#app")

```

# 局部引入
在你需要使用的组件里面引入：
```
import { Carousel, CarouselItem } from 'v-carousel-lucky'
import "v-carousel-lucky/dist/style.css"
```
# 使用案例：
```
<script setup>
import { Carousel, CarouselItem } from 'v-carousel-lucky'
import "v-carousel-lucky/dist/style.css"

function beforeMoving(before) {
  console.log("before", before);
}
function afterMoving(after) {
  console.log("after", after);
}
</script>

<template>
  <div class="app">
    <carousel 
    :autoplay="true" 
    :duration="5000" 
    :initIndex="0" 
    :direction="true" 
    directionMode="hover" 
    :indicator="true"
    indicatorMode="always" 
    :loop="true" 
    type="card"  
    :delay="500"
    @before-move="beforeMoving" 
    @change-move="afterMoving">
      <carousel-item v-for="item in 3" :key="item" class="item">
        <div class="h">{{ item }}</div>
      </carousel-item>
    </carousel>
  </div>
</template>

<style scoped>
.app {
  width: 500px;
  height: 300px;
}

.h,
.item {
  width: 100%;
  height: 100%;
}

.item:nth-child(1) .h {
  background-color: rgb(198, 121, 22);
}

.item:nth-child(2) .h {
  background-color: rgb(74, 56, 33);
}

.item:nth-child(3) .h {
  background-color: rgb(39, 199, 68);
}
</style>

```

# Attribute

|       名称        |               介绍               |     可选值     |   默认值    |
| :---------------: | :------------------------------: | :------------: | :---------: |
|       width       |            轮播的宽度            |       -        |    400px    |
|      height       | 轮播的高度（不包含指示灯的高度） |       -        |    300px    |
|     duration      |          轮播延迟的时间          |       -        |   3000ms    |
|     autoplay      |           是否自动轮播           |   true/false   |    true     |
|     initIndex     |         初始化展示的item         |       -        | 0（第一个） |
|     direction     |         是否展示切换按钮         |   true/false   |    true     |
|   directionMode   |        切换按钮展示的方式        |  always/hover  |   always    |
|     indicator     |          指示灯是否展示          |   true/false   |    true     |
|   indicatorMode   |          指示灯展示方式          |  always/hover  |   always    |
| indicatorPosition |       指示灯在外部还是内部       | inside/outside |   inside    |
| indicatorTrigger  |          指示灯触发方式          |  hover/click   |    hover    |
|       type        |          carousel的类型          |      card      |      -      |
|       loop        |           是否循环轮播           |   true/false   |    true     |
|       delay       |         切换过渡时的事件         |       -        |     300     |
|       scale       |         幻灯片缩小的比例         |     小于1      |     0.8     |
|     cardWidth     |         激活幻灯片的宽度         |  小于整体宽度  |     50%     |

# Event

|    名称     |          介绍          |           参数            |
| :---------: | :--------------------: | :-----------------------: |
| before-move | 目前激活幻灯片的前一个 | Object=>(index,direction) |
| change-move |    目前激活的幻灯片    | Object=>(index,direction) |