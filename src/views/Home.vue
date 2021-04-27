<template>
	<div class="home">
		<div>
			<ArticleList :articleListData="articleListData"/>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import ArticleList from "@/components/ArticleList.vue";

import axios from "axios"

export default {
	name: "Home",
	components: {
		ArticleList,
	},
	data(){
		return {
			articleListData:{}
		}
	},
  methods:{
    async getArticleData(){
      try {
        const response = await axios.get("http://localhost:3000/db")
				this.articleListData = response.data
      } catch (error) {
        console.log(error)
      }
    }
  },
	mounted(){
		this.getArticleData()
	}
};
</script>
