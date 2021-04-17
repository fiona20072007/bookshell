<template>
  <div>
    <div>
      <span>價格</span>
      <button @click="minusNumber('bookPrice', bookPrice)">-</button>
      <input v-model="bookPrice">
      <button @click="plusNumber('bookPrice', bookPrice)">+</button>
    </div>
    <div>
      <span>數量</span>
      <button @click="minusNumber('bookCount', bookCount)">-</button>
      <input v-model="bookCount">
      <button @click="plusNumber('bookCount', bookCount)">+</button>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  // name: 'BookList',
  data() {
    return {
      bookDetail: '',
      bookCount: null,
      bookPrice: null
    }
  },
  created() {
    this.fetchData()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData',
  },
  methods: {
    fetchData() {
      const fetchedId = this.$route.params.id
      if (this.$route.params.id !== fetchedId) return
      axios.get('https://fe-interview-api.unnotech.com/profile/' + this.$route.params.bookId)
          .then(response => {
            this.bookDetail = response.data;
            this.bookPrice = this.bookDetail.price;
            this.bookCount = this.bookDetail.count;
          })
          .catch(function (error) {
            console.log(error)
          })
    },
    plusNumber(type, num) {
      return type === 'bookPrice' ? this.bookPrice = num+1 : this.bookCount = num+1
    },
    minusNumber(type, num) {
      return num >0 ? type === 'bookPrice' ? this.bookPrice = num-1 : this.bookCount = num-1 : null
    }
  }
}
</script>