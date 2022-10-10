<template>
    <div class="push_right">
        <h1>Information</h1>
        <p class="fs-4 text">ID : {{ user.id }} </p>
        <p class="fs-4 text">Name : {{user.name}} </p>
        <p class="fs-4 text">Lastname : {{user.lastname}}</p>
        <p class="fs-4 text">Email : {{user.email}}</p>
        <p class="fs-4 text">Password : {{user.password}}</p>
        <p class="fs-4 text"> 
            <button v-on:click="navigateTo('/user/edit/'+user.id)" class="btn btn-dark">EDIT</button>
            <button v-on:click="navigateTo('/users')" class="btn btn-dark"> BACK </button> 
        </p>
    </div>
</template>

<script>
import UsersService from '@/services/UsersService'

export default {
    data() {
        return {
            user: null,
        };
    },

    async created() {
        try {
            let userId = this.$route.params.userId;
            this.user = (await UsersService.show(userId)).data
        }catch (error) {
            console.log(error);
        }
    },
    
    methods: {
       navigateTo (route) {
           this.$router.push(route)
       },
    }
};
</script>

<style scoped>
.push_right{
    margin-top: 80px;
    margin-left: 20px;
}
.nv-navbar {
  background-color: #DCDCDC;
  width: 100%;
  padding: 10px 0px 10px 0px;
}
.nv-navbar .nav {
  list-style: none;
  margin: 0;
  padding: 0;
  float: left;
}
.nv-navbar .nav li {
  float: left;
}
.nv-navbar .nav li a {
  padding: 10px;
  text-decoration: none;
  color: #778890;
  font-weight: bold;
}
.nv-navbar .nav li a:hover {
  padding: 10px;
  text-decoration: none;
  color: black;
}
.nv-navbar .nav li a.router-link-active {
  background-color: #708090;
  color: black;
}
.clearfix {
  clear: left;
}

</style>