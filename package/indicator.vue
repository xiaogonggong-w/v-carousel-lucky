<template>
  <div class="indicator" v-if="state.indicator" :class="state.indicatorPosition === 'inside' ? 'absolute' : 'static'">
    <span v-for="item in state.len" :key="item" :style="{
      width: state.globalIndex === item - 1 ? '20px' : '',
    }" @click="indicatorClick(item - 1)" @mouseenter="indictorTrigger(item - 1)"
      :class="state.globalIndex === item - 1 ? 'active' : 'normal'"></span>
  </div>
</template>

<script setup>
import { reactive, watch, inject, defineEmits } from "vue";
defineOptions({
  name: "indicator"
})
const emit = defineEmits(["indicatorClick", "before-move", "change-move"])
const carouselCtxState = inject("carouselCtxState");
const carouselCtxProps = carouselCtxState.propsStaging;
const state = reactive({
  len: carouselCtxState.CAROUSEL_ITEM_LEN,
  globalIndex: 0,
  indicator: carouselCtxProps.indicator,
  indicatorColor: carouselCtxProps.indicatorColor,
  indicatorActiveColor: carouselCtxProps.indicatorActiveColor,
  indicatorPosition: carouselCtxProps.indicatorPosition,
  indicatorTrigger: carouselCtxState.indicatorTrigger
});
watch(
  () => carouselCtxState.currentIndex,
  (v) => {
    state.globalIndex = v;
  }
);
const indicatorClick = (idx) => {
  if (idx !== state.globalIndex) {
    // 当点击的不是同一个所以我就
    let direction = "next";
    idx > state.globalIndex ? (direction = "next") : (direction = "prev");
    emit("before-move", { index: state.globalIndex, direction }); // 滚动前
    emit("indicatorClick", idx); // 开始滚动
    emit("change-move", { index: idx, direction }); // 滚动后
  }
};
const indictorTrigger = (idx) => {
  if (state.indicatorTrigger === 'hover') {
    indicatorClick(idx)
  }
}
</script>

<style scoped lang="scss">
.indicator {

  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  /* 不会遮挡住 切换按钮 */
  height: 10px;
  z-index: 100;

  &.absolute {
    position: absolute;
    bottom: 10px;
  }

  &.static {
    position: static;
  }

}

.indicator span {
  width: 15px;
  height: 3px;
  cursor: pointer;
  transition: all 0.5s;
}

.indicator span+span {
  margin-left: 10px;
}

.indicator span.active {
  background-color: #F5F5F5;
}

.indicator span.normal {
  background-color: #BDBDBD;
}
</style>