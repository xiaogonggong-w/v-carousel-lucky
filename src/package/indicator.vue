<template>
  <div class="indicator" v-if="state.indicator">
    <span v-for="item in state.len" :key="item" :style="{
      backgroundColor:
      state.globalIndex === item - 1 ? state.indicatorActiveColor : state.indicatorColor,
      width: state.globalIndex === item - 1 ? '20px' : '',
    }" @click="DicatorClick(item - 1)"></span>
  </div>
</template>

<script setup>
import { reactive, watch, inject, defineEmits } from "vue";
defineOptions({
  name:"indicator"
})
const emit = defineEmits(["DicatorClick", "before-moving", "after-moving"])
const carouselCtxState = inject("carouselCtxState");
const carouselCtxProps = carouselCtxState.propsStaging;
const state = reactive({
  len: carouselCtxState.CAROUSEL_ITEM_LEN,
  globalIndex: 0,
  indicator: carouselCtxProps.indicator,
  indicatorColor: carouselCtxProps.indicatorColor,
  indicatorActiveColor: carouselCtxProps.indicatorActiveColor,
});
watch(
  () => carouselCtxState.currentIndex,
  (v) => {
    state.globalIndex = v;
  }
);
const DicatorClick = (idx) => {
  if (idx !== state.globalIndex) {
    // 当点击的不是同一个所以我就
    let direction = "next";
    idx > state.globalIndex ? (direction = "next") : (direction = "prev");
    emit("before-moving", { index: state.globalIndex, direction }); // 滚动前
    emit("DicatorClick", idx); // 开始滚动
    emit("after-moving", { index: idx, direction }); // 滚动后
  }
};

</script>

<style scoped>
.indicator {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  /* 不会遮挡住 切换按钮 */
  height: 1px;
  bottom: 10px;
  z-index: 100;
}

.indicator span {
  width: 10px;
  height: 3px;
  cursor: pointer;
  transition: all 0.5s;
}

.indicator span+span {
  margin-left: 10px;
}
</style>