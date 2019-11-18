<template>
  <div class="home">
    <cube-slide :data="slider" :interval="5000">
      <cube-slide-item v-for="item in slider" :key="item.id">
        <router-link :to="`/detail/${item.id}`">
          <img :src="item.img" class="slider">
        </router-link>
      </cube-slide-item>
    </cube-slide>
    <goods-list :data="goods"></goods-list>
  </div>
</template>

<script>
import GoodsList from "@/components/GoodsList.vue";
import shop from '@/serves/goods'
// @ is an alias to /src

export default {
  name: 'home',
  components: {
    GoodsList
  },
  computed: {
    goods() {
      return this.keys.flatMap(key => this.goodsInfo[key])
    }
  },
  data() {
    return {
      goodsInfo: {},
      slider: [],
      keys: []
    }
  },
  created() {
    shop.getGoodsInfo().then(data => {
      if(data) {
        const {goodsInfo, slider, keys} = data
        this.goodsInfo = goodsInfo
        this.slider = slider
        this.keys = keys
      }
    })
  }
}
</script>
<style scoped lang="stylus">
.cube-slide {
  height: auto;
}

.cube-slide-item > a > img {
  width: 100%;
}


</style>