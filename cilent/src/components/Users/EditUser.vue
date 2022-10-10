<template>
<div class="push_right">
    <h1>Edit</h1>
    <form v-on:submit.prevent = "editUser">
        <p class="fs-4 text">Name : <input type="text" v-model="user.name"></p>
        <p class="fs-4 text">Lastname : <input type="text" v-model="user.lastname"></p>
        <p class="fs-4 text">Email : <input type="text" v-model="user.email"></p>
        <p class="fs-4 text">Password : <input type="text" v-model="user.password"></p>
        <p class="fs-4 text"><button type="submit" class="btn btn-dark">OK</button>
        <button v-on:click="navigateTo('/users')" class="btn btn-dark"> BACK</button> </p>
    </form>
    <hr>
    <div>
        <p class="fs-4 text">Name : {{user.name}}</p>
        <p class="fs-4 text">Lastname : {{user.lastname}}</p>
        <p class="fs-4 text">Email : {{user.email}}</p>
        <p class="fs-4 text">Password : {{user.password}}</p>
    </div>
</div>
</template>

<script>
import UsersService from '@/services/UsersService'

export default {
    data() {
        return {
            user: {
                name: '',
                lastname: '',
                email: '',
                password: '',
                status: 'active'
            }
        }
    },

    methods: {
        async editUser() {
            try {
                await UsersService.put(this.user)
                this.$router.push({
                    name: 'users'
                })
            }catch (error) {
                console.log(error)
            }
        }
    },

    async created() {
        try {
           let userId = this.$route.params.userId
           this.user = (await UsersService.show(userId)).data 
        }catch (error) {
            console.log (error)
        }
    }
}
</script>

<style scoped>
.push_right{
    margin-top: 100px;
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
.btn-default {
      box-shadow: 1px 2px 5px #000000;   
  }
</style>