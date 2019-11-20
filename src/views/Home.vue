<template>
  <div class="home">
    <cube-slide :data="slider" :interval="5000">
      <cube-slide-item v-for="item in slider" :key="item.id">
        <router-link :to="`/detail/${item.id}`">
          <img :src="item.img" class="slider">
        </router-link>
      </cube-slide-item>
    </cube-slide>
    <goods-list :data="goods" @cartanim="startCatrAnim"></goods-list>
    <!-- 动画组件 -->
    <!-- <cart-anim ref="ca"></cart-anim> -->
  </div>
</template>

<script>
import GoodsList from "@/components/GoodsList.vue";
import CartAnim from '@/components/CartAnim'
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
  },
  methods: {
    startCatrAnim(el) {
      /* const anim = this.$createCartAnim({
        onTransitionend(){
          anim.remove();
        }
      })
      anim.start(el) */
      const anim = this.$create(CartAnim)
      anim.start(el);
      anim.$on('transitionend', anim.remove)
    }
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