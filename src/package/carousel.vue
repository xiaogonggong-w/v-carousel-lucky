<template>
  <div class="Carousel" ref="carouselRoot" @mouseenter="mouseEnterEvent" @mouseleave="mouseLeaveEvent"
    :style="{ width: containerWidth, height: containerHeight }">
    <slot></slot>

    <div class="direction-container">
      <Transition name="left-arrow" v-show="isDirection && state.showDirection">
        <div class="prev" @click="prevHandleClick">
          <i class="iconfont icon-anniu_jiantouxiangzuo_o"></i>
        </div>
      </Transition>
      <Transition name="right-arrow" v-show="isDirection && state.showDirection">

        <div class="next" @click="nextHandleClick">
          <i class="iconfont icon-anniu-jiantouxiangyou_o"></i>
        </div>
      </Transition>

    </div>

    <Indicator v-show="state.showIndicator" @before-moving="beforeEmit" @after-moving="afterEmit"
      @DicatorClick="DicatorClick" />
  </div>
</template>

<script setup>
import "./icon/iconfont.css"
import {
  reactive,
  toRefs,
  onMounted,
  onBeforeUnmount,
  provide,
  defineEmits,
  defineProps,
  useSlots,
  nextTick,
  ref,
  watch
} from "vue";

// 导入防抖函数
import { debounce } from "./utils";
import Indicator from "./indicator.vue";
// 获取prop
import allProps from './props'
defineOptions({
  name: "carousel"
})
const carouselRoot = ref(null)
const slots = useSlots();
const emit = defineEmits(["before-moving", "after-moving"])
const props = defineProps(allProps)
const { containerWidth,
  containerHeight,
  duration,
  directionMode,
  indicatorMode,
} = toRefs(props)

// const activeItem = ref(0)
const state = reactive({
  CAROUSEL_ITEM_LEN: slots.default()[0].children.length,
  propsStaging: props, // 暂存 props 对象，供子组件使用
  currentIndex: props.initIndex, // 当前展示的索引
  showDirection: true, // 是否展示 切换按钮
  showIndicator: true, // 是否展示 底部选中圆圈
  loop: props.loop,//是否循环
  type: props.type,//是卡片模式还是不是，
  delay: props.duration > props.delay ? props.delay / 1000 : 0.3,//滚动的时间
});
const items = ref([])



let timer = null;
const isDirection = props.direction;
// watch
watch(() => state.currentIndex, (current, prev) => {
  resetItemsPosition(prev)
})
// 自动执行的函数
const autoplayFunc = () => {
  timer = setInterval(() => {
    start("next");
  }, duration.value);
};

const addItems = (item) => {
  items.value.push(item)
}



const beforeEmit = (data) => {
  emit("before-moving", data);
};
const afterEmit = (data) => {
  emit("after-moving", data);
};
// 防抖执行
const startDebounce = (direction) => {
  beforeEmit({ index: state.currentIndex, direction });
  switch (direction) {
    case "prev":
      // changeLeftTranslate();
      if (state.currentIndex > 0 || props.loop) {
        state.currentIndex -= 1;
      }

      if (state.currentIndex <= -1) {
        state.currentIndex = state.CAROUSEL_ITEM_LEN - 1;
      }
      break;
    case "next":
      if (state.currentIndex < (state.CAROUSEL_ITEM_LEN - 1) || props.loop) {
        state.currentIndex += 1;
      }
      if (state.currentIndex >= state.CAROUSEL_ITEM_LEN) {
        state.currentIndex = 0;
      }
      break;
  }
  afterEmit({ index: state.currentIndex, direction });
};
// 
const start = (direction) => debounce(() => startDebounce(direction), props.delay, true)



// 指示灯
const DicatorClick = (idx) => {
  // 如果是从 右 换到 左
  if (idx < state.currentIndex) {
    changeLeftTranslate();
  }
  state.currentIndex = idx;
  resetItemsPosition();
};
// hover进时显示箭头同时暂停
const mouseEnterEvent = () => {
  clearTimer();
  // 如果 hover 模式，鼠标移入后，展示 切换按钮
  if (directionMode.value === 'hover') {
    state.showDirection = true;
  }
  // 如果 hover 模式，鼠标移入后，展示 底部选中圆圈
  if (indicatorMode.value === 'hover') {
    state.showIndicator = true;
  }
};

// 离开时开始
const mouseLeaveEvent = () => {
  autoplayFunc();
  // 如果 hover 模式，鼠标移出后，隐藏 切换按钮
  if (directionMode.value === 'hover') {
    state.showDirection = false;
  }
  // 如果 hover 模式，鼠标移出后，隐藏 底部选中圆圈
  if (indicatorMode.value === 'hover') {
    state.showIndicator = false;
  }
};

// 向左滑动
const prevHandleClick = () => {
  start("prev");
};
// 向右滑动
const nextHandleClick = () => {
  start("next");
};

function clearTimer() {
  clearInterval(timer);
  timer = null;
}

const resetItemsPosition = (prev) => {
  items.value.forEach((item, index) => {
    item.setItemStyle(index, state.currentIndex, prev)
  })
}
// 其实子组件只需要 currentIndex 字段，但单独 provide 一个字段是非响应式的
// 所以，将整个响应式对象传下去，在子组件内 inject 时是响应式的，配合 watch 食用即可
provide('carouselCtxState', state);
provide('instance', {
  items,
  addItems,
  carouselRoot
})
//#region 声明周期
onMounted(async () => {
  await nextTick();
  resetItemsPosition();
  // 如果 autoplay 为真，自动轮播
  if (props.autoplay) {
    autoplayFunc();
  }
  // 如果 hover 模式，默认隐藏 切换按钮
  if (directionMode.value === 'hover') {
    state.showDirection = false;
  }
  // 如果 hover 模式，默认隐藏 底部选中圆圈
  if (indicatorMode.value === 'hover') {
    state.showIndicator = false;
  }
});

onBeforeUnmount(() => {
  clearTimer();
});


</script>

<style scoped>
.Carousel {
  position: relative;
  overflow: hidden;
}

.direction-container {
  z-index: 99;
}

/*
  进入和离开动画可以使用不同
  持续时间和速度曲线。
*/
.left-arrow-enter-active,
.right-arrow-enter-active {
  transition: all 0.3s ease-in;

}

.left-arrow-leave-active,
.right-arrow-leave-active {
  transition: all 0.3s ease-out;
}

.left-arrow-enter-from,
.left-arrow-leave-to,
.right-arrow-enter-from,
.right-arrow-leave-to {
  opacity: 0;
}


.direction {
  z-index: inherit;
}

.prev,
.next {
  position: absolute;
  color: white;
  cursor: pointer;
  transform: translateY(-50%);
  top: 50%;
  text-align: center;
  z-index: inherit;
  color: rgb(155, 151, 151);
  font-size: 16px;
}

i {
  font-weight: bold;
  font-size: 40px;
  line-height: 40px;
}

.next {
  right: 20px;
}

.prev {
  left: 20px;
}
</style>