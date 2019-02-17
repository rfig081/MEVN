<template>
  <div id="app">
    <div v-for= "post in posts" :key="post.username">
      <h1>Posts de {{post.username}}</h1>

      <hr>

      <p>{{post.post}}</p>

    </div>    
  </div>
</template>

<script>


export default {
  name: 'app',

  data() {
    return {
      posts: []
    }
  },

  mounted() {
    this.getpost()
  },

  methods: {
    getpost() {
      this.$http.get('http://localhost:3000/')

      .then(res => {
        this.posts = res.data
        console.log(res.data)
      })
    }
  }
}
</script>

<style>

</style>

