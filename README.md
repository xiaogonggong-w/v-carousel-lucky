# v-carousel-lucky
`vue3`版本的跑马灯

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


```