<template>
  <div>
    关于我们
    <button v-if="$store.state.user.isLogin" @click="logout">注销</button>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$ajax.get('/api/userinfo')
  },
  methods: {
    logout() {
      console.log('logout')
      this.$store.dispatch('logout')
      this.$router.push('/login')
    },
  }
}
</script>

<style lang="scss" scoped>
</style>
