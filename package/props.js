export const CARD_SCALE = 0.8
export default {
    width: { // 宽度
        type: String,
        default: "400px", // 宽度
    },
    height: { // 高度
        type: String,
        default: "300px",//默认300像素
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
    indicatorPosition: { // 底部指示灯位置
        type: String,
        default: "inside"//inside or outside

    },
    indicatorTrigger: {
        type: String,
        default: "hover"
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
        default: 300
    },
    scale: {
        type: Number,
        default: CARD_SCALE
    },
    cardWidth: {
        type: String,
        default: "50%"
    }
}
