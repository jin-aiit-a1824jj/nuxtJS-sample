<template>
  <section class="container">
    <p>Hello World! = hot reloading!</p>
    <p>{{ message }}</p>
    <hr>
    <router-link to="/price">Price Page</router-link>
  </section>
</template>

<script>

export default {
  data: function(){
    return {
      message: 'マスタッシュ構文を使う!'
    }
  }
}
</script>

<style>

</style>
