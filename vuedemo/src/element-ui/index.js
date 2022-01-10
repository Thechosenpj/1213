import Vue from 'vue'
import {
  Button,
  Icon,
  Form,
  FormItem,
  Input,
  Select,
  Option,
  DatePicker,
  Table,
  TableColumn,
  Popover
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
    Vue.use(Table)
    Vue.use(TableColumn)
    Vue.use(Popover)
  }
}

export default element
