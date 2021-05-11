<template>
	<div class="home mb-4">
		<div>
			<ArticleList :articleListData="articleListData" />
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import ArticleList from "@/components/ArticleList.vue";
import _ from "lodash";
import dotenv from "dotenv"

dotenv.config();

import axios from "axios";

export default {
	name: "Home",
	components: {
		ArticleList,
	},
	data() {
		return {
			articleListData: {},
		};
	},
	methods: {
		async getArticleData() {
			try {
				const response = await axios.get("http://localhost:3000/api/articles.js")
				this.articleListData = _.groupBy(response.data.articles, "siteID")
			} catch (error) {
				console.log(error);
			}
		},
	},
	mounted() {
		this.getArticleData();
	},
};
</script>

<style scoped>
</style>
