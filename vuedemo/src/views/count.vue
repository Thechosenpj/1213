<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h3>当前求和放大10倍为：{{ pCount }}</h3>
    <p>我在{{imss}}，练习{{proge}}</p>
    <el-select v-model="num">
      <el-option
      v-for="(item,index) in list"
      :key="index"
      :label="item.label"
      :value="item.value"
    >
      </el-option>
    </el-select>
    <el-button @click="add">+</el-button>
    <el-button @click="reduce">-</el-button>
    <el-button @click="odd">为奇数时在+</el-button>
    <el-button @click="stopCount">等一等在+</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        { label: 1, value: 1 },
        { label: 2, value: 2 },
        { label: 3, value: 3 }
      ],
      num: ''
    }
  },
  computed: {
    sum () {
      return this.$store.state.sum
    },
    pCount () {
      return this.$store.getters.pCount
    },
    imss () {
      return this.$store.state.imss
    },
    proge () {
      return this.$store.state.proge
    }
  },
  methods: {
    add () {
      this.$store.commit('jia', this.num)
    },
    reduce () {
      this.$store.commit('jian', this.num)
    },
    odd () {
      this.$store.dispatch('odd', this.num)
    },
    stopCount () {
      console.log('$', this.$store)
      this.$store.dispatch('stop', this.num)
    }
  }
}
</script>

<style>

</style>
