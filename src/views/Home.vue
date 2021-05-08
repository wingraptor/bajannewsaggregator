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
				const response = await axios.get("http://150.136.63.35:1337/articles?_sort=created_at:DESC")
				this.articleListData = _.groupBy(response.data, "siteID")
				// console.log(_.groupBy(response.data, "siteID"))
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
