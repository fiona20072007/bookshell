<template>
  <div>
    <router-link :to="{ name: 'BookDetail', params: { bookId: book.id }}" v-for="book in bookList" :key="book.id">
      <div>
        <img :src="book.image" :alt="book.name"/>
      </div>
      <div>{{ book.name }}</div>
    </router-link>
    <router-view/>
  </div>
</template>

<script>
import { getData } from "../../util"
import {getBooksDetailUrl} from "../../constants"

export default {
  data() {
    return {
      bookList: ''
    }
  },
  mounted() {
    getData(getBooksDetailUrl).then(response => (this.bookList = response.data))
        .catch(function (error) {
          console.log(error)
        });
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
