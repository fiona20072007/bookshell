<template>
  <div class="nav">
    <router-link to="/bookshell/books">Welcome To Bookshelf</router-link>
  </div>
  <router-view />
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="scss">
@import "/assets/scss/app";
#app {
  background-image: url("../src/assets/background.jpg");
}
</style>