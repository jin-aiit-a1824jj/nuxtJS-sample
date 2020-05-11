<template>
  <section>
    <h1>{{ message }}</h1>
    <h1>id: {{ this.$route.params.id }}</h1>
  </section>
</template>

<script>
export default {
  data: function() {
    return {
      message: '/users/_id.vueを表示中'
    }
  },
  validate({ params }){
    return /^\d+$/.test(params.id)
  }
}
</script>