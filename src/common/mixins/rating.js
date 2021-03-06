const ALL = 2

export default {
    data() {
      return {
        onlyContent: true,
        selectType: ALL
      }
    },
    computed: {
      selectRatings() {
        let data = []
        this.ratings.forEach((rating) => {
          if (this.onlyContent && !rating.text) {
            return
          }
          if (this.selectType === ALL || this.selectType === rating.rateType) {
            data.push(rating)
          }
        })
        return data
      }
    },
    methods: {
      onSelect(type) {
        this.selectType = type
      },
      onToggle() {
        this.onlyContent = !this.onlyContent
      }
    }

}
