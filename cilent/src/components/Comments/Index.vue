<template>
    <center><div v-if="users.length">
        <div  class = "push_right">
            <h1> Add Product</h1>
            <br>
            <h4><p><button v-on:click="navigateTo('/blog/create')" class="btn btn-dark"> Add </button></p></h4>
            <div v-for="blog in blogs" v-bind:key="blog.id"></div>       
        </div>
    </div></center>
</template>

<script>
import BlogsService from '@/services/BlogsService'
import UsersService from '@/services/UsersService'
import CommentsService from '@/services/CommentsService'

export default {
    data () {
        return { 
            blogs: []
        }
    },

    data () {
        return{
            users: []
        }      
    },

    async created () {
        this.blogs = (await BlogsService.index()).data
    },

    async created() {
        try {
            this.users = (await UsersService.index()).data;
        }catch (error) {
            console.log(error);
        }
    },

    methods: {
        logout () {
            this.$store.dispatch('setToken', null)
            this.$store.dispatch('setBlog', null)
            this.$router.push({
                name: 'login'
            })
        },

        navigateTo (route) {
            this.$router.push(route)
        },

        async deleteUser(user){
            let result = confirm("Want to delete")
            if(result){
                try{
                    await UsersService.delete(user)
                    this.refreshData()
                }catch(error){
                    console.log(error)
                }
            }
        },

        async deleteBlog (blog) {
            let result = confirm("Want to delete?")
            if (result) {
                try {
                    await BlogsService.delete(blog)
                    this.refreshData()
                }catch (err) {
                    console.log(err)
                }
            }
        },

        async refreshData () {
            this.users = (await UsersService.index()).data
        },

        async refreshData() {
            this.blogs = (await BlogsService.index()).data
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