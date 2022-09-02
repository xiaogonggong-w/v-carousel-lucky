<template>
    <div>
      <transition name="fade">
        <div @touchend='end' @touchstart='start' @touchmove='move' class="swiper">
          <div @click="chooseItem(item,index)" v-for="(item, index) in imgs" :style="config5[index]" :key="item.cover">
            <img :src="item.cover" style="width: 100%; height: 100%;">
          </div>
        </div>
      </transition>
      <h1 @click="prev">上一个</h1>
        <h1 @click="next">下一个</h1>
        <h1>当前：{{ centerInfo.id }}</h1>
      </div>
    </template>
    <script>
    export default {
        name: 'zt',
        data() {
            return {
                loading: true,
                currentIndex: 3, //当前中间imgs数组中index
                centerInfo: '', // 当前中间信息
                startX: '',
                endX: '',
                imgs: [
                    {
                        id: '莱因哈特1',
                        index: 0,
                        cover:
                            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572888260036&di=875bc88905bf4b6923784df1589edb0b&imgtype=0&src=http%3A%2F%2Fi-1.itobike.com%2F2017%2F5%2F26%2Ff6038942-393f-441e-9380-a2f1607c3385.jpg'
                    },
                    {
                        id: '安娜2',
                        index: 1,
                        cover:
                            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572888297322&di=9d5d97f952329ccf2277b2033b129d5d&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201803%2F28%2F20180328101238_VHiji.jpeg'
                    },
                    {
                        id: '卢西奥3',
                        index: 2,
                        cover:
                            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573483062&di=9d6983ba28c123896b27148e313ada65&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201608%2F15%2F20160815133037_4YAfh.jpeg'
                    },
                    {
                        id: 'DVA4',
                        index: 3,
                        cover:
                            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572888405708&di=3381891cd042db432083ed2446ddf446&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201805%2F06%2F20180506201144_JPTd3.thumb.700_0.jpeg'
                    },
                    {
                        id: '莫伊拉5',
                        index: 4,
                        cover:
                            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572888441984&di=47544529365104e11276d639838741c3&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201801%2F06%2F20180106221938_58EGv.thumb.224_0.jpeg'
                    },
                    {
                        id: '裂空6',
                        index: 5,
                        cover:
                            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572888482891&di=5416c6abf187547cd329377dc1092fff&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F20%2F20161020175323_auiK8.thumb.700_0.jpeg'
                    },
                    {
                        id: '麦克雷7',
                        index: 6,
                        cover:
                            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572888500984&di=f415feaef2c02b497e9d3801743b8e49&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201711%2F26%2F20171126191812_4x8RV.thumb.700_0.jpeg'
                    },
                    {
                        id: '士兵76  8',
                        index: 7,
                        cover:
                            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573056788040&di=dbf1954ad8ba1bee16afd9f47d763512&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201704%2F24%2F20170424202013_hveir.jpeg'
                    },
                    {
                        id: '狂鼠9',
                        index: 8,
                        cover:
                            'http://ztd00.photos.bdimg.com/ztd/w=700;q=50/sign=ea29fa95c13d70cf4cfaa80dc8e7a03d/42166d224f4a20a4d334946b98529822720ed070.jpg'
                    },
                    {
                        id: '死神 10',
                        index: 9,
                        cover:
                            'http://www.agri35.com/UploadFiles/img_2_4163694432_214245738_26.jpg'
                    },
                    {
                        id: '禅雅塔 11',
                        index: 10,
                        cover:
                            'http://pic2.zhimg.com/v2-1c9b73f260ea2652dcdedfc782fde90d_b.jpg'
                    },
                    {
                        id: '黑百合 12',
                        index: 11,
                        cover:
                            'http://b-ssl.duitang.com/uploads/item/201710/14/20171014134122_KmPQy.jpeg'
                    }
                ],
                previous: 0,
                config5: [
                    {
                        id: '-A',
                        position: 'absolute',
                        width: '22%',
                        height: '72%',
                        top: '19.2%',
                        left: '-22%',
                        opacity: 0,
                        zIndex: 0,
                        transition: '.4s'
                    },
                    {
                        id: 'A',
                        position: 'absolute',
                        width: '22%',
                        height: '72%',
                        top: '19.2%',
                        left: '0%',
                        opacity: 1,
                        zIndex: 1,
                        transition: '.4s'
                    },
                    {
                        id: 'B',
                        position: 'absolute',
                        width: '28%',
                        height: '82%',
                        top: '14%',
                        left: '13%',
                        opacity: 1,
                        zIndex: 2,
                        transition: '.4s'
                    },
                    {
                        id: 'center',
                        position: 'absolute',
                        width: '45%',
                        height: '100%',
                        top: '0px',
                        left: '50%',
                        marginLeft: '-22.5%',
                        opacity: 1,
                        zIndex: 4,
                        transition: '.4s'
                    },
                    {
                        id: 'D',
                        position: 'absolute',
                        width: '28%',
                        height: '82%',
                        top: '14%',
                        left: '61.8%',
                        opacity: 1,
                        zIndex: 2,
                        transition: '.4s'
                    },
                    {
                        id: 'E',
                        position: 'absolute',
                        width: '22%',
                        height: '72%',
                        top: '19.2%',
                        left: '78%',
                        opacity: 1,
                        zIndex: 1,
                        transition: '.4s'
                    },
                    {
                        id: 'E+',
                        position: 'absolute',
                        width: '22%',
                        height: '72%',
                        top: '19.2%',
                        left: '100%',
                        opacity: 0,
                        zIndex: 0,
                        transition: '.4s'
                    }
                ]
            };
        },
        methods: {
            // 获取数据
            async getData() {
                this.$nextTick(() => {
                    this.loading = false;
                });
            },
            // 滑动上一个
            prev(index) {
                // this.imgs.unshift(this.imgs.pop());
                this.config5.push(this.config5.shift());
                this.currentIndex = this.currentIndex - 1;
                if (this.currentIndex < 0) {
                    this.currentIndex = this.imgs.length - 1;
                }
                this.centerCard();
                this.centerIndex('prev');
            },
            // 滑动下一个
            next() {
                // this.imgs.push(this.imgs.shift());
                this.config5.unshift(this.config5.pop());
                this.currentIndex = this.currentIndex + 1;
                if (this.currentIndex > this.imgs.length - 1) {
                    this.currentIndex = 0;
                }
                this.centerCard();
                this.centerIndex('next');
                // console.log(this.currentIndex);
            },
            // 开始移动端滑动屏幕
            start(event) {
                this.startX = event.changedTouches[0].clientX;
                this.startY = event.changedTouches[0].clientY;
            },
            // 连续滑动
            move(event) {
                this.endY = event.changedTouches[0].clientY;
                this.endX = event.changedTouches[0].clientX;
                this.stopDefault(event);
    // 如果是滑动，注解（223行到231行）这段。如果是连续滑动，放开（223行到231行）注解
                this.interval = this.endX - this.startX;
                if (this.interval > 40) {
                    this.startX = this.endX;
                    this.prev();
                }
                if (this.interval < -40) {
                    this.startX = this.endX;
                    this.next();
                }
            },
            // 滑动
            end(event) {
    // 如果是滑动，放开（236行到238行）的注解。如果是连续滑动，注解（236行到238行）
                // this.endY = event.changedTouches[0].clientY;
                // this.endX = event.changedTouches[0].clientX;
                // this.formatSwiper();
            },
            formatSwiper() {
                if (this.startX > this.endX) {
                    console.log('左边滑动');
                    if (this.startX > this.endX + 40) {
                        this.next();
                    }
                } else {
                    console.log('右边滑动');
                    if (this.endX > this.startX + 40) {
                        this.prev();
                    }
                }
            },
            // 阻止touchmove的横向默认事件（ios快捷操作会关闭页面）
            stopDefault(event) {
                let differenceY = this.endY - this.startY;
                let differenceX = this.endX - this.startX;
                if (Math.abs(differenceX) > Math.abs(differenceY)) {
                    event.preventDefault();
                }
            },
            // 当前imgs在位置上的index（并非img数组的index）
            centerIndex(val) {
                if (val == 'prev') {
                    for (let val of this.imgs) {
                        if (val.index == this.imgs.length - 1) {
                            val.index = 0;
                        } else {
                            val.index = val.index + 1;
                        }
                    }
                } else {
                    for (let val of this.imgs) {
                        if (val.index == 0) {
                            val.index = this.imgs.length - 1;
                        } else {
                            val.index = val.index - 1;
                        }
                    }
                }
            },
            // 点击
            chooseItem(item, index) {
                let cycles = item.index;
                if (item.index < 3) {
                    for (let i = 0; i < 3 - cycles; i++) {
                        console.log(item.index);
                        this.prev();
                    }
                } else if (item.index > 3) {
                    for (let i = -1; i < item.index - 3; i++) {
                        this.next();
                    }
                } else if (item.index == 3) {
                    console.log('投票');
                }
            },
            // 计算中间卡片信息
            centerCard() {
                this.centerInfo = this.imgs[this.currentIndex];
                this.$emit('centerInfo', this.centerInfo);
                // this.$emit('centerInfo', this.centerInfo);
                // console.log(this.imgs[2].id);
            },
    
            addCardStyle() {
                if (this.imgs.length > 7) {
                    let addtime = this.imgs.length - 7;
                    for (let i = 0; i < addtime; i++) {
                        console.log('add');
                        this.config5.push({
                            id: 'center',
                            position: 'absolute',
                            width: '45%',
                            height: '100%',
                            top: '0px',
                            left: '50%',
                            marginLeft: '-22.5%',
                            opacity: 0,
                            transition: '.1s'
                        });
                    }
                }
            }
        },
        created() {
            this.getData();
            this.centerCard(); // 获取中间卡片信息
            this.addCardStyle();// 加入样式位置的index
        }
    };
    </script>
    
    <style lang="less" scoped>
    .swiper {
        width: 100%;
        border: 1px red solid;
        height: 400px;
        position: relative;
        overflow: hidden;
       
    }
    div {
            opacity: 0;
        }
    </style>
    