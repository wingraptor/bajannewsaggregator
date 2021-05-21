<template>
	<div class="home mb-4">
		<div>
			<CryptoTicker :cryptoTickerData="cryptoTickerData" />
			<template v-if="isLoaded">
				<ArticleList :articleListData="articleListData" />
			</template>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import ArticleList from "@/components/ArticleList.vue";
import CryptoTicker from "@/components/CryptoTicker.vue";
import _ from "lodash";
import dotenv from "dotenv";

dotenv.config();

import axios from "axios";

export default {
	name: "Home",
	components: {
		ArticleList,
		CryptoTicker,
	},
	data() {
		return {
			articleListData: {},
			cryptoTickerData: [],
			ApiURLs: {
				dev: {
					articleList: "http://localhost:3000/api/articles.js",
					cryptoTickerData: "http://localhost:3000/api/cryptoTicker.js",
				},
				prod: {
					articleList: "https://bajan-news-aggregator.vercel.app/api/articles.js",
					cryptoTickerData:
						"https://bajan-news-aggregator.vercel.app/api/cryptoTicker.js",
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
		async getCryptoTickerData() {
			try {
				const response = await axios.get(this.ApiURLs.prod.cryptoTickerData);
				this.cryptoTickerData = response.data.data;
			} catch (error) {
				console.log(error);
			}
		},
	},
	mounted() {
		this.getArticleData();
		this.getCryptoTickerData();
	},
};
</script>

<style scoped>
</style>
