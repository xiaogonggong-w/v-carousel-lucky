<script setup>
import { reactive } from 'vue';
// import CarouselItem from './package/carouselItem.vue';
// import Carousel from './package/carousel.vue';
const state = reactive({
  data: [
    "https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00693-2745.jpg",
    "https://b.zol-img.com.cn/desk/bizhi/image/10/960x600/1604539876877.jpg",
    "https://www.haoy99.com/FileUpload/2019-02/Shui1Zhu11i1Pao1pptB-173234_109.jpg",
  ],
});
function beforeMoving(dire) {
  // console.log("before", dire);
}
function afterMoving(obj) {
  // console.log("after", obj);
}
</script>

<template>
  <div class="app">
    <carousel :autoplay="true" :duration="5000" :initIndex="0" :direction="true" directionMode="hover" :indicator="true"
      indicatorMode="always" indicatorColor="white" :loop="true" type="card" indicatorActiveColor="skyblue" :delay="500"
      @before-moving="beforeMoving" @after-moving="afterMoving">
      <carousel-item v-for="(item, index) in state.data" :key="index" class="item">
        <div class="h">{{ index }}</div>
      </carousel-item>
    </carousel>
  </div>

</template>

<style scoped>
.app {
  width: 500px;
  height: 300px;
  /* background-color: #000; */
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
