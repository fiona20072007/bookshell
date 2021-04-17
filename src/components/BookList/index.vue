<template>
  <div>
    <ul>

      <router-link :to="{ name: 'BookDetail', params: { bookId: book.id }}" v-for="book in bookList" :key="book.id">
        <div>
          <img :src="book.image" :alt="book.name" />
        </div>
        {{ book.name }}
      </router-link>
      <router-view />
    </ul>
  </div>
</template>

<script>

import axios from "axios"

export default {
  // name: 'BookList',
  data() {
    return {
      bookList: ''
    }
  },

  mounted () {
    axios.get('https://fe-interview-api.unnotech.com/books')
        .then(response => (this.bookList = response.data))
        .then(() => {
          console.log('booklist',this.bookList)
        })
        .catch(function (error) {
          console.log(error)
        })
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
