<template>
  <div>
    <div class="good" v-for="(item,index) in cart" :key="index">
      {{item.title}} {{item.price}}
      <div class="right">
        <i class="cubeic-remove" @click="removeCart(index)"></i>
        <span>{{item.cartCount}}</span>
        <i class="cubeic-add" @click="addCart(index)"></i>
      </div>
    </div>
    <div>总价{{total}} </div>
    <cube-button :disabled="true">还差{{minTotal-total}}可以购买</cube-button>
    <cube-button>
      下单
      <span v-if="!isLogin">(需要登录后购买)</span>
    </cube-button>
  </div>
</template>

<script>
import { mapState, mapGetters} from 'vuex'
export default {
  data() {
    return {
      minTotal: 1000
    };
  },
  computed: {
    ...mapState({
      cart: state => state.cart.list,
      isLogin: state => state.user.isLogin
    }),
    ...mapGetters(['total'])
  },
  methods: {
    removeCart(index) {
      this.$store.commit("cartremove", index);
    },
    addCart(index) {
      this.$store.commit("cartadd", index);
    }
  }
}
</script>

<style lang="stylus" scoped>
.good {
  padding: 10px;
  text-align: left;

  .right {
    float: right;
  }

  i {
    font-size: 18px;
  }
}
</style>