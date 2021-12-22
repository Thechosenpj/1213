<template>
  <div class="watch">
    <h1>watch选项</h1>
    <!-- <h2>{{ msg }}</h2>
    <h2>{{ msg.msg2.msg3 }}</h2>
    <h2>{{ msg.msg2.msg4 }}</h2>
    <el-button @click="msgWatch">摸msg</el-button> -->
    <!-- <h2>{{ $data }}</h2> -->
    <!-- <el-button @click="a1">修改a的值</el-button> -->
    <!-- <h2>{{ msg.a }}</h2>
    <el-button @click="msgA">修改msg.a</el-button> -->
    <div>
      {{ name }}
      <div>name1: <el-input v-model="name1"></el-input></div>
      <div>name2: <el-input v-model="name2"></el-input></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // msg: {
      //   msg2: {
      //     msg3: 3,
      //     msg4: 4
      //   }
      // }
      // a: 1,
      // b: { c: 2, d: 3 },
      // e: {
      //   f: {
      //     g: 4
      //   }
      // },
      // h: [],
      // x: 13
      // msg: {
      //   a: 1
      // }
      name: 'watch写防抖',
      name1: 'watch没问题啊',
      name2: 'watch也没毛病',
      name1Out: '',
      name2Out: ''
    }
  },
  watch: {
    // msg3 () {
    //   console.log('有人摸msg')
    // }
    // 'msg.msg2': {
    //   deep: true,
    //   immediate: true,
    //   handler (newVal, oldVal) {
    //     console.log(newVal, oldVal)
    //     console.log('有人摸msg3')
    //   }
    // }
    // ------------
    // a (newVal, oldVal) {
    //   console.log('a', newVal, oldVal)
    //   this.b.c = this.b.c + 1
    // },
    // 'b.c' () {
    //   this.b.d = this.b.d + 1
    // },
    // 'b.d': function (newVal, oldVal) {
    //   console.log('b.c', newVal, oldVal)
    //   this.e.f.g += 1
    // },
    // e: {
    //   deep: true,
    //   handler () {
    //     this.h.push('摸一摸，大几百')
    //     console.log('e的子字段被修改')
    //   }
    // },
    // msg变化时,触发3个句柄.这3个句柄都是Vue实例的方法.
    // x: ['fn1', 'fn2', 'fn3']
    // ----------------
    // msg: {
    //   deep: true,
    //   handler (newVal, oldVal) {
    //     console.log(newVal, oldVal)
    //     console.log(newVal === oldVal)
    //     console.log(newVal === this.msg)
    //     console.log(oldVal === this.msg)
    //   }
    // }
    name1 (newVal, oldVal) {
      clearTimeout(this.name1Out)
      this.name1Out = setTimeout(() => {
        this.name = newVal + '' + this.name2
      }, 3000)
    },
    name2 (newVal, oldVal) {
      clearTimeout(this.name2Out)
      this.name2Out = setTimeout(() => {
        this.name = this.name1 + '' + newVal
      }, 3000)
    }
  },
  methods: {
    // msgWatch () {
    //   this.msg.msg2.msg4 = 66
    // }
    // ----------------
    // a1 () {
    //   this.a += 1
    //   this.x += 1
    // },
    // fn1 (newVal, oldVal) {
    //   console.log('触发fn1', newVal, oldVal)
    // },
    // fn2 (newVal, oldVal) {
    //   console.log('触发fn2', newVal, oldVal)
    // },
    // fn3 (newVal, oldVal) {
    //   console.log('触发fn3', newVal, oldVal)
    // }
    // ------------
    // msgA () {
    //   this.msg.a += 1
    // }
  }
}
</script>

<style>

</style>
