<template>
    <div class = "push_right">
        <h1> All Product </h1>
        <!-- <p class="fs-4 text"><button v-on:click="logout"> Logout </button></p> -->
        <h3> Has {{blogs.length}} product  </h3>
        <div v-if="blogs.length === 0" class="empty-blog" >
         No have product
        </div>
        <br>
        <div v-for="blog in blogs" v-bind:key="blog.id">
            <p class="fs-4 text"> Name: {{ blog.title }} </p>
            <p class="fs-4 text">Detail: {{ blog.category }} </p>
            <p class="fs-4 text">Price: {{ blog.status }}</p>
            <div class="blog-list">
                <div class="push_right1">
				<div class="blog-pic">
					<transition name="fade"> 
        				<div class="thumbnail-pic"  v-if="blog.thumbnail != 'null'">
        				  <img :src="BASE_URL+blog.thumbnail" alt="thumbnail" width="200">
        				</div>
      				</transition>
                </div>
				</div>
			</div>
            <p class="fs-4 text">
              <button v-on:click="navigateTo('/blog/'+ blog.id)" class="btn btn-dark" > See more </button> 
            </p>
            <hr>
        </div>
    </div>
</template>

<script>
import BlogsService from '@/services/BlogsService'
import UsersService from '@/services/UsersService'
import CommentsService from '@/services/CommentsService'

export default {
    data () {
        return { 
            blogs: [],
            BASE_URL: "http://localhost:8081/assets/uploads/"
        }
        return{
            comments: []
        }
         return{
            users: []
        }
    },
    
    async created () {
        this.blogs = (await BlogsService.index()).data
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
.push_right1{
    margin-top: -100px;
    margin-left: 600px;
}
.clearfix {
  clear: left;
}
.empty-blog {
 width: 100%;
 height: 200%;
 text-align: center;
 padding:10px;
 background:rgb(246, 238, 251);
 color:rgb(0, 0, 0);
}
</style>