export default {
    containerWidth: { // 宽度
        type: String,
        default: "100%",
    },
    containerHeight: { // 高度
        type: String,
        default: "100%",
    },
    duration: { // 轮播延迟时间
        type: Number,
        default: 3000,
    },
    initIndex: { // 初始化 展示轮播的 index
        type: Number,
        default: 0,
    },
    autoplay: { // 是否自动播放
        type: Boolean,
        default: true,
    },
    direction: { // 是否展示 切换按钮
        type: Boolean,
        default: true,
    },
    directionMode: { // 切换按钮 展示方式
        type: String,
        default: "always", // always || hover
    },
    indicator: { // 是否展示 底部选中圆圈
        type: Boolean,
        default: true,
    },
    indicatorMode: { // 底部选中圆圈 展示方式
        type: String,
        default: "always", // always || hover
    },
    type: {
        type: String,
        validator: (value) => {
            return ['', 'card'].includes(value);
        },
        default: ""
    },
    loop: {
        type: Boolean,
        default: true
    },
    delay: {
        type: Number,
        default: 0.3
    }
}
