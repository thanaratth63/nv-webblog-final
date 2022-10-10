<template>
    <center><div class="push_right">
        <h1> User Login </h1>
        <form v-on:submit.prevent="onLogin" >
            <p class="fs-4 text">Username: <input type="text" v-model="email"  /></p>
            <p class="fs-4 text">Password: <input type="password" v-model="password" /></p>
            <p class="fs-4 text"><button type="submit" class=" btn btn-success">Login </button></p>
            <dev class = "error" v-if="error">{{error}}</dev>
        </form>
    </div></center>
</template>

<script>
import AuthenService from '@/services/AuthenService'

export default {
    data () {
        return {
            email: '',
            password: ''
        };
    },
    
    methods:{
        async onLogin () {
            try {
                const response = await AuthenService.login({
                    email: this.email,
                    password: this.password,
                    error: null
                });
                this.$store.dispatch('setToken',response.data.token)
                this.$store.dispatch('setUser',response.data.user)
                this.$router.push({
                   name: 'blogs'
                })
                console.log(response)
            }catch (error) {
                console.log(error)
                this.error = error.response.data.error
                this.email = ''
                this.password = ''
            }
        },
    },
}
</script>

<style scoped>
.push_right{
    margin-top: 80px;

}

.clearfix {
  clear: left;
}
.error{
    color: red;
}
</style>
