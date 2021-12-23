<template>
  <div id="login">
    <h1>学习---{{ pageLogin }}</h1>
    <div>可以去那些页面？---{{pageComputed}}---{{pageWatch}}--页面</div>
    <el-button type="primary" @click="computed">computed</el-button>
    <el-button type="primary" @click="watch">watch</el-button>
    <el-button type="primary" @click="datePicker">datePicker</el-button>
    <el-button type="primary" @click="goPage">获取页面</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
    pageLogin () {
      return this.$store.state.page.login
    },
    pageComputed () {
      return this.$store.state.page.computeds
    },
    pageWatch () {
      return this.$store.state.page.watchs
    }
  },
  methods: {
    computed () {
      console.log('this', this.$store)
      this.$router.push('/computed')
    },
    watch () {
      this.$router.push('/watch')
    },
    datePicker () {
      this.$router.push('/datePicker')
    },
    goPage () {
      this.$store.commit('login', '首页')
      this.$store.commit('computeds', '计算属性computed')
      this.$store.commit('watchs', '侦听属性watch')
    }
  }
}
</script>

<style>

</style>
