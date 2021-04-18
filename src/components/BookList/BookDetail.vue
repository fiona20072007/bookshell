<template>
  <div class="detailBlockAll">
    <div class="detailBlock">
      <div class="detail">
        <span>價格</span>
        <button @click="minusNumber('bookPrice', bookPrice)">-</button>
        <input v-model="bookPrice" :change="check_num('bookPrice')">
        <button @click="plusNumber('bookPrice', bookPrice)">+</button>
      </div>
      <div class="detail">
        <span>數量</span>
        <button @click="minusNumber('bookCount', bookCount)">-</button>
        <input v-model="bookCount" :change="check_num('bookCount')">
        <button @click="plusNumber('bookCount', bookCount)">+</button>
      </div>
    </div>
    <BookModify :bookNewPrice="bookPrice !== parseInt(bookDetail.price,10) ? bookPrice : null"
                :bookNewCount="bookCount !== parseInt(bookDetail.count,10) ? bookCount : null" class="bookModify"/>
  </div>
</template>

<script>
import BookModify from "../BookList/BookModify"
import {getData} from "../../util"
import {getBookProfileUrl} from "../../constants"

export default {
  data() {
    return {
      bookDetail: '',
      bookPrice: null,
      bookCount: null,
    }
  },
  components: {
    BookModify
  },
  created() {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData',
  },
  methods: {
    fetchData() {
      const fetchedId = this.$route.params.bookId
      if (this.$route.params.bookId !== fetchedId || this.$route.params.bookId === undefined) return
      getData(getBookProfileUrl + fetchedId)
          .then(response => {
            this.bookDetail = response.data;
            this.bookPrice = parseInt(this.bookDetail.price, 10);
            this.bookCount = parseInt(this.bookDetail.count, 10);
          })
          .catch(function (error) {
            console.log(error)
          })
    },
    plusNumber(type, bookNum) {
      const num = parseInt(bookNum, 10)
      return type === 'bookPrice' ? this.bookPrice = num + 1 : this.bookCount = num + 1
    },
    minusNumber(type, bookNum) {
      const num = parseInt(bookNum, 10)
      return num > 0 ? type === 'bookPrice' ? this.bookPrice = num - 1 : this.bookCount = num - 1 : null
    },
    check_num(type) {
      const num = type === 'bookPrice' ? this.bookPrice : this.bookCount;
      if (num === null) {
        return
      }
      let checkNum = num.toString();
      checkNum = checkNum.replace(/[^\d]/g, '');
      if (checkNum.indexOf('.') < 1 && checkNum !== '') {
        checkNum = parseInt(checkNum);
      }
      type === 'bookPrice' ? this.bookPrice = checkNum : this.bookCount = checkNum;
    }
  }
}
</script>

<style scoped lang="scss">
@import "../.././assets/scss/bookdetail";
</style>