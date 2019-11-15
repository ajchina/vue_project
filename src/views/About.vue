<template>
  <div>
    关于我们
  </div>
</template>

<script>
  export default {
    mounted() {
      this.$ajax.get('/api/userinfo').then(res=>console.log(res.data))
    }
  }
</script>

<style lang="scss" scoped>

</style>
