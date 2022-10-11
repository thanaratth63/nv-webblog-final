<template>
  <div>
    <head>
      <title>Bootstrap Example</title>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
          <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js">
    </head>

  <nav class="navbar navbar-inverse navbar-fixed-top">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="">
        <img src="@/assets/logo.png" alt="" width="24" height="24" class="d-inline-block align-text-top">
        GUCCI</a>
    </div>
    <div class="col">
      <router-link :to="{ name: 'blogs' }" class="btn btn-dark" > Home </router-link>
    </div>
    <div class="col">
      <router-link :to="{ name: 'comments' }" class="btn btn-dark"> Add Product</router-link>
    </div>
    <div class="col">
      <router-link :to="{ name: 'users' }" class="btn btn-dark"> Users </router-link>
    </div>
    <div class="col">
      <router-link :to="{ name: 'login' }" class="btn btn-dark"> Login </router-link>
    </div>
    <div class="col">
      <a v-on:click.prevent="logout" href="blogs" class="btn btn-dark"> Logout </a>
    </div>
  </div>
</nav>
</div>

</template>

<script>

export default {
  methods:{
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
         name: 'login'
      })
    }
  }
}
</script>

<style scoped>


.clearfix {
  clear: left;
}

</style>