<template>
  <div>
    <router-link :to="{ name: 'BookDetail', params: { bookId: book.id }}" v-for="book in bookList" :key="book.id">
      <div :class="{ activeBook: bookId === book.id }">
        <div>
          <img :src="book.image" :alt="book.name"/>
        </div>
        <div>{{ book.name }}{{book.id}}</div>
      </div>
    </router-link>
    <router-view/>
  </div>
</template>

<script>
import {getData} from "../../util"
import {getBooksDetailUrl} from "../../constants"

export default {
  data() {
    return {
      bookList: '',
      bookId: ''
    }
  },
  created() {
    this.getBookId()
  },
  watch: {
    '$route': 'getBookId'
  },
  mounted() {
    getData(getBooksDetailUrl).then(response => (this.bookList = response.data))
        .catch(function (error) {
          console.log(error)
        });
  },
  methods: {
    getBookId() {
      return this.bookId = parseInt(this.$route.params.bookId)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../.././assets/scss/booklist";
</style>
