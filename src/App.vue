<template>
  <div id="app">
    <div id="nav">
      <transition :name="transitionName">
      <router-view class="child-view"/>
    </transition>
    </div>
    <cube-tab-bar v-model="selectLabel" :data="tabs" @change="changeHandler">
      <cube-tab v-for="(item,index) in tabs" :key="index" :icon="item.icon" :label="item.value">
        <span class="badge" v-if="item.label=='Cart'">{{cartTotal}}</span>
        <div>{{item.label}}</div>
      </cube-tab>
    </cube-tab-bar>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters(['cartTotal'])
  },
  data() {
    return {
      selectLabel: "/", //默认标签页
      tabs: [
        { label: "Home", value: "/", icon: "cubeic-home" },
        { label: "Cart", value: "/cart", icon: "cubeic-mall" },
        { label: "Me", value: "/about", icon: "cubeic-person" }
      ],
      transitionName: 'route-forward'
    }
  },
  watch: {
    $route(route) {
      this.selectLabel = route.path
    }
  },
  created() {
    this.selectLabel = this.$route.path
  },
  methods: {
    changeHandler(val) {
      this.$router.push(val)
    }
  }
}
</script>

<style lang="stylus">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.cube-tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #edf0f4;
}
.cube-tab-bar-slider {
  top: 0;
}
/* 页面滑动动画 */
/* 入场前 */
.route-forward-enter {
  transform: translate3d(-100%, 0, 0);
}
.route-back-enter {
  transform: translate3d(100%, 0, 0);
}
/* 出场后 */
.route-forward-leave-to {
  transform: translate3d(100%, 0, 0);
}
.route-back-leave-to {
  transform: translate3d(-100%, 0, 0);
}
.route-forward-enter-active,
.route-forward-leave-active,
.route-back-enter-active,
.route-back-leave-active {
  transition: transform 0.3s;
}

.child-view {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  padding-bottom: 36px;
}

span.badge {
  display: inline-block;
  background: #de3529;
  color: white;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
}
</style>
