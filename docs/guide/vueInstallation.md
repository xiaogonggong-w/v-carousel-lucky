<style>
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

# 在Vue中使用
## 基础用法
**使用carousel和carousel-item就能得到一个基础的走马灯**
 <div class="app">
    <carousel >
      <carousel-item v-for="item in 3" :key="item" class="item">
        <div class="h">{{ item }}</div>
      </carousel-item>
    </carousel>
  </div>
