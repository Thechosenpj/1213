<template>
  <div class="computed">
    <el-form :inline='true'>
      <el-form-item label="品种" prop="breed">
        <el-select v-model='breed' placeholder="请选择品种" @change="breedChange">
          <el-option
            v-for="(item,index) in list"
            :key="index"
            :value="item.value"
            :label="item.label"
          >{{item.label}}</el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="数量" prop="count">
        <el-input v-model="count"></el-input>
      </el-form-item>
      <el-form-item label="单价" prop="price">
        <el-input v-model="price"></el-input>
      </el-form-item>
      <el-form-item label="总价" prop="total">
        <el-input v-model="total"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  data () {
    return {
      count: '',
      price: '',
      breed: '',
      list: [
        { label: '阿拉斯猪', value: 12 },
        { label: '爬耳朵', value: 22 },
        { label: '吃的多拉得多', value: 28 }
      ]
    }
  },
  computed: {
    total: {
      get () {
        return this.price * this.count
      },
      set (newVal) {
        if (newVal) {
          this.count = ''
          this.price = ''
          this.breed = ''
        }
        this.count = newVal / this.price
        this.price = newVal / this.count
      }
    }
  },
  methods: {
    breedChange () {
      this.price = this.breed
    }
  }
}
</script>
