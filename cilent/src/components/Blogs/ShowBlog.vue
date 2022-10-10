<template>
	<div class="push_right">
		<h1>Detail  {{ blog.title }} </h1>
		<form v-on:submit.prevent="editBlog">
		    <p>Name: {{ blog.title }}</p>
		    <p>Detail: {{ blog.category }}</p>
		    <p>Price: {{ blog.status }} </p>
            <p>Image: </p>
	
				<div class="blog-pic">
					<transition name="fade"> 
        				<div class="thumbnail-pic" v-if="blog.thumbnail != 'null'">
        				  <img :src="BASE_URL+blog.thumbnail" alt="thumbnail">
        				</div>
      				</transition>
				</div>
				<br>
			  	<br>
				  <br>
			  	<br>
				  <br>
			  	<br>
				  <br>
			  	<br>
		    <p>
			  <button v-on:click="navigateTo('/blog/edit/' + blog.id)" class="btn btn-dark">Edit</button>
			  <button v-on:click="deleteBlog(blog)" class="btn btn-dark"> Delete </button>
			  <button v-on:click="navigateTo('/blogs')" class="btn btn-dark">Back</button>
		    </p>
        </form>
	</div>
</template>

<script>
import BlogsService from "@/services/BlogsService";
import VueCkeditor from 'vue-ckeditor2'

export default {
	data() {
		return {
			BASE_URL: "http://localhost:8081/assets/uploads/",
			blog: {
				title: "",
				thumbnail: "null",
				pictures: "null",
				content: "",
				category: "",
				comment: "",
				status: "",
			},

		    config:{
			    toolbar: [
				    {
				        name: "document",
				        items: [
						    "Source",
						    "-",
						    "Save",
						    "NewPage",
						    "Preview",
						    "Print",
						    "-",
						    "Templates",
					    ],
				    },

				    {
					    name: "clipboard",
					    items: [
						    "Cut",
						    "Copy",
						    "Paste",
					     	"PasteText",
					    	"PasteFromWord",
					    	"-",
						    "Undo",
						    "Redo",
					    ],
				    },

				    {
					    name: "editing",
					    items: ["Find", "Replace", "-", "SelectAll", "-", "Scayt"],
				    },

					{
						name: "forms",
						items: [
							"Form",
							"Checkbox",
							"Radio",
							"TextField",
							"Textarea",
							"Select",
							"Button",
							"ImageButton",
							"HiddenField",
						],
					},
					"/",

					{
						name: "basicstyles",
						items: [
							"Bold",
							"Italic",
							"Underline",
							"Strike",
							"Subscript",
							"Superscript",
							"-",
							"CopyFormatting",
							"RemoveFormat",
						],
					},

					{
						name: "paragraph",
						items: [
							"NumberedList",
							"BulletedList",
							"-",
							"Outdent",
							"Indent",
							"-",
							"Blockquote",
							"CreateDiv",
							"-",
							"JustifyLeft",
							"JustifyCenter",
							"JustifyRight",
							"JustifyBlock",
							"-",
							"BidiLtr",
							"BidiRtl",
							"Language",
						],
					},
					{ name: "links", items: ["Link", "Unlink", "Anchor"] },

					{
						name: "insert",
						items: [
							"Image",
							"Flash",
							"Table",
							"HorizontalRule",
							"Smiley",
							"SpecialChar",
							"PageBreak",
							"Iframe",
							"InsertPre",
						],
					},
					"/",
					{ name: "styles", items: ["Styles", "Format", "Font", "FontSize"] },
					{ name: "colors", items: ["TextColor", "BGColor"] },
					{ name: "tools", items: ["Maximize", "ShowBlocks"] },
					{ name: "about", items: ["About"] },
				],
				height: 500
			}
		};
	},

	async created() {
		try {
			let blogId = this.$route.params.blogId;
			this.blog = (await BlogsService.show(blogId)).data;
		}catch (error) {
			console.log(error);
		}
	},

	methods: {
		navigateTo(route) {
			this.$router.push(route);
		},

        async editBlog() {
			try {
				await BlogsService.put(this.blog);
				this.$router.push({
					name: "blogs",
				});
			}catch (err) {
				console.log(err);
			}
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
	},

	components:{
		VueCkeditor
	}	
};
</script>

<style scoped>

.push_right{
    margin-top: -270px;
    margin-left: 470px;
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
  .thumbnail-pic img{
 width: 200px;
 padding: 5px 10px 0px 0px;
}
.blog-info {
 float: left;
}
.blog-pic {
 float: left;
}
.clearfix {
 clear: both;
}
.blog-list {
 border:solid 1px #dfdfdf;
 margin-bottom: 10px;
 max-width: 900px;
 margin-left: auto;
 margin-right: auto;
 padding: 5px;
 ;
}
.blog-header {
 max-width: 900px;
 margin-left: auto;
 margin-right: auto;
}
</style>
