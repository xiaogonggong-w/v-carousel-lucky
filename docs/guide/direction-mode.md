<style>
.h,
.item {
  width: 100%;
  height: 100%;
  text-align:center;
  color:#fff;
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
**是否展示切换按钮**
 <div class="app">
    <carousel 
    :width="width" 
    :height='height' 
    :duration="duration" 
    :autoplay="autoplay"
    :initIndex="initIndex"
    :direction="direction"
    :directionMode='directionMode'
    >
      <carousel-item v-for="item in 3" :key="item" class="item">
        <div class="h">{{ item }}</div>
      </carousel-item>
    </carousel>
  </div>

  <script>
     export default{
        data(){
            return {
               width:"600px",
               height:"600px",
               duration:1000,
               autoplay:true,
               initIndex:2,
               direction:true,
               directionMode:"hover"
            }
        }
     }
    </script>

  ```vue
<template>
    <carousel  
    :width="width" 
    :height='height' 
    :duration="duration" 
    :autoplay="autoplay"
    :initIndex="initIndex"
    :direction="direction"
    :directionMode="directionMode"
    >
      <carousel-item v-for="item in 3" :key="item" class="item">
        <div class="h">{{ item }}</div>
      </carousel-item>
    </carousel>
</template>
 <script>
     export default{
        data(){
            return {
                width:"600px",
                height:"600px",
                duration:1000,
                autoplay:true,
                initIndex:2,
                direction:true,
                directionMode:"hover"

            }
        }
     }
    </script>
<style scoped>

.h,
.item {
  width: 100%;
  height: 100%;
  text-align:center;
  color:#fff;
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
  ```

  