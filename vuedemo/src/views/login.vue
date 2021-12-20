<template>
  <div id="login">
    <h1>学习</h1>
    <el-button type="primary" @click="computed">computed</el-button>
    <el-button type="primary" @click="watch">watch</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    computed () {
      this.$router.push('/computed')
    },
    watch () {
      this.$router.push('/watch')
    }
  }
}
</script>

<style>

</style>
