import Vue from 'vue'
import {
  Button,
  Icon,
  Form,
  FormItem,
  Input,
  Select,
  Option,
  DatePicker
} from 'element-ui'
const element = {
  install: () => {
    Vue.use(Button)
    Vue.use(Icon)
    Vue.use(Form)
    Vue.use(FormItem)
    Vue.use(Input)
    Vue.use(Select)
    Vue.use(Option)
    Vue.use(DatePicker)
  }
}

export default element
