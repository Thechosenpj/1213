<template>
  <div id="datePicker">
    <el-date-picker
      v-model="value"
      type="datetimerange"
      :default-value="data.time"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
    ></el-date-picker>
    <el-button @click="clear">重 置</el-button>
    <el-date-picker
      v-model="value"
      type="datetime"
      :default-value="data.time"
      placeholder="开始日期"
    ></el-date-picker>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      startTime: '',
      endTime: '',
      data: { time: new Date() },
      data2: { time2: new Date() },
      arr: []
    }
  },
  created () {
    // const date = new Date()
    // this.startTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    // this.endTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    // console.log('date', this.startTime)
    // this.arr.push(this.startTime)
    // this.arr.push(this.endTime)/*  */
    // this.data = new Date()
  },
  methods: {
    clear () {
      this.value = ''
      const date = new Date()
      this.startTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
      this.endTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
      this.arr = []
      this.arr.push(this.startTime)
      this.arr.push(this.endTime)
    }
  }
}
</script>

<style>

</style>
