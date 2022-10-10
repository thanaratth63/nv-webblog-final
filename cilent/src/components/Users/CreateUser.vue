<template>
<div class="push_right">
    <h1>Create Account Admin</h1>
    <form v-on:submit.prevent = "createUser">
        <p class="fs-4 text">Name : <input type="text" v-model="user.name"></p>
        <p class="fs-4 text">Lastname : <input type="text" v-model="user.lastname"></p>
        <p class="fs-4 text">Email : <input type="text" v-model="user.email"></p>
        <p class="fs-4 text">Password : <input type="text" v-model="user.password"></p>
        <p class="fs-4 text">
           <button type="submit" class="btn btn-dark">OK</button>
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
         navigateTo (route) {
           this.$router.push(route)
       },

        async createUser() {
            try {
                await UsersService.post(this.user)
                this.$router.push({
                    name: 'users'
                })
            }catch (error) {
                console.log(error)
            }
        }
    }
}
</script>

<style scoped>
.push_right{
    margin-top: 100px;
    margin-left: 20px;
}
.clearfix {
  clear: left;
}

</style>