const EVENT_HIDE = 'hide'
const EVENT_SHOW = 'show'
// mixins[] 混合代码
// 抽象出弹窗类的通用属性
export default {
  data() {
    return {
      visible: false
    }
  },
  methods: {
    show() {
      this.visible = true
      this.$emit(EVENT_SHOW)
    },
    hide() {
      this.visible = false
      this.$emit(EVENT_HIDE)
    }
  }
}
