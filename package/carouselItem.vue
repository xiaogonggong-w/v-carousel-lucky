<script setup>
import {
  watch,
  reactive,
  inject,
  ref,
  onMounted,
  computed
} from "vue";
import { CARD_SCALE } from './props'
defineOptions({
  name: "CarouselItem"
})
const state = reactive({
  globalIndex: 0,
});

// 伸缩
let scale = ref(1);
let translate = ref(0);
let vertical = ref('X')
// 获取当前展示图片的索引
const carouselCtxState = inject('carouselCtxState');
let isActive = ref(false);
let isStage = ref(false)
const instance = inject('instance')
watch(
  () => carouselCtxState.currentIndex,
  (v) => {
    state.globalIndex = v;
  }
);
const returnClass = (className, is) => {
  if (is) {
    return className
  } else {
    return ''
  }
}
const itemStyle = computed(() => {
  const translateType = `translate${vertical.value === 'Y' ? 'Y' : 'X'}`
  const _scale = `scale(${scale.value})`;
  const _translate = `${translateType}(${translate.value}px)`;
  const transform = [_translate, _scale].join(' ');
  // console.log(transform);
  return {
    transform,
  }
})

const parentsWidth = computed(() => {
  return instance.carouselRoot.value?.offsetWidth || 0;
})
// const itemsLen = computed(() => instance.items.value.length)
const resetIndex = (index, activeItem, length) => {
  const lastItemIndex = length - 1
  const prevItemIndex = activeItem - 1
  const nextItemIndex = activeItem + 1
  const halfItemIndex = length / 2
  if (activeItem === 0 && index === lastItemIndex) {
    return -1
  } else if (activeItem === lastItemIndex && index === 0) {
    return length
  } else if (index < prevItemIndex && activeItem - index >= halfItemIndex) {
    return length + 1
  } else if (index > nextItemIndex && index - activeItem >= halfItemIndex) {
    return -2
  }
  return index
}
// 设置位移
const setTranslate = (index, activeItem) => {
  const rootEL = instance.carouselRoot.value;
  if (!rootEL) return 0;

  const distance = rootEL.offsetWidth;
  // console.log(distance);
  return distance * (index - activeItem)
}
// 卡片模式下
const calculateTranslate = (index, activeIndex, parentWidth) => {
  if (isStage.value) { //左右两个和当前的
    if (index === activeIndex && carouselCtxState.type === 'card' && carouselCtxState.cardWidth && carouselCtxState.cardWidth !== '50%') {
      //  激活的幻灯片和在卡片模式下
      return (parentWidth - parseInt(carouselCtxState.cardWidth.replace("px", ""))) / 2;
    } else {
      return parentWidth * ((2 - CARD_SCALE) * (index - activeIndex) + 1) / 4;
    }

  } else if (index < activeIndex) {
    return -(1 + CARD_SCALE) * parentWidth / 4;
  } else {
    console.log(index, activeIndex);
    return (3 + CARD_SCALE) * parentWidth / 4;
  }
}
// 设置样式
const setItemStyle = (index, activeItem, prev) => {
  const len = instance.items.value.length || 0;
  const active = isActive.value = index === activeItem;
  if (!isActive.value && len > 2 && carouselCtxState.loop) {
    index = resetIndex(index, activeItem, len)
  }
  if (carouselCtxState.type === 'card') {
    // 左右两个和目前激活的
    isStage.value = Math.round(Math.abs(index - activeItem)) <= 1;
    translate.value = calculateTranslate(index, activeItem, parentsWidth.value);
    console.log(translate.value);
    scale.value = active ? 1 : carouselCtxState.scale > 1 ? CARD_SCALE : carouselCtxState.scale;
  } else {
    translate.value = setTranslate(index, activeItem);
  }
}

onMounted(() => {
  instance.addItems({
    setItemStyle
  })
})
</script>
  
<template>
  <div class="carousel-item"
    :style="[itemStyle, { '--delay': carouselCtxState.delay + 's' }, { '--width': carouselCtxState.cardWidth }]"
    :class="[returnClass('is-active', isActive), returnClass('is-stage', isStage), returnClass('is-card', carouselCtxState.type === 'card')]">
    <slot></slot>
  </div>
</template>


<style scoped lang="scss">
.carousel-item {
  position: absolute;
  height: 100%;
  width: 100%;
  display: inline-block;
  top: 0;
  left: 0;
  transition: all var(--delay);
  z-index: 1;

  &.is-card {
    width: 50%;
  }

  &.is-stage {
    z-index: 2;
  }

  &.is-active {
    z-index: 3;
  }

  &.is-card.is-active {
    width: var(--width);
  }
}
</style>