<template>
	<div class="home mb-4">
		<div>
			<template v-if="isLoaded">
				<ArticleList :articleListData="articleListData" />
			</template>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import ArticleList from "@/components/ArticleList.vue";
import _ from "lodash";

import axios from "axios";

export default {
	name: "Home",
	components: {
		ArticleList,
	},
	data() {
		return {
			articleListData: {},
			cryptoTickerData: [],
			ApiURLs: {
				dev: {
					articleList: "http://localhost:3000/api/articles.js",
				},
				prod: {
					articleList: "https://bajan-news-aggregator.vercel.app/api/articles.js",
				},
			},
			isLoaded: false,
		};
	},
	methods: {
		async getArticleData() {
			try {
				const response = await axios.get(this.ApiURLs.prod.articleList);
				this.articleListData = _.groupBy(response.data.articles, "siteID");
				this.isLoaded = true;
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
