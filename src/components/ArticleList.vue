<template>
	<div class="main-content">
		<b-row class="m-1">
			<b-col
				cols="12"
				md="4"
				class="my-3"
				v-for="(articleArray, newsSite) in articleListData"
				:key="newsSite"
			>
				<b-card no-body>
					<!-- https://stackoverflow.com/questions/45834730/how-to-place-an-icon-next-to-tab-title-bootstrap-vue -->
					<template v-slot:header>
						<!-- <img src="@/assets/arrow.svg" alt="" height="30" class="ml-3" /> -->
						<b-icon icon="hexagon" font-scale="1" class="ml-3"></b-icon>
						<a
							:href="siteInfo[parseInt(newsSite)].URL"
							target="_blank"
							class="site-name ml-2"
							>{{ siteInfo[parseInt(newsSite)].name }}</a
						>
						<p class="updated-time-text ml-3 mb-0">
							{{ lastUpdated(articleArray[0].created_at) }}
						</p>
					</template>
					<b-list-group flush>
						<b-list-group-item
							v-for="article in articleArray.slice(0, 8)"
							:key="article.link"
							:href="article.link"
							target="_blank"
							class="p-2"
							>{{ article.headline }}
						</b-list-group-item>
					</b-list-group>
				</b-card>
			</b-col>
		</b-row>
	</div>
</template>


<script>
export default {
	name: "ArticleList",
	props: {
		articleListData: Object,
	},
	data() {
		return {
			siteInfo: {
				0: {
					name: "Barbados Today",
					URL: "https://barbadostoday.bb/",
					active: true,
				},
				1: {
					name: "Nation News",
					URL: "http://www.nationnews.com/",
					active: true,
				},
				2: {
					name: "Loop News",
					URL: "http://www.loopnewsbarbados.com/",
					active: true,
				},
				3: {
					name: "Barbados Advocate",
					URL: "https://www.barbadosadvocate.com/",
					active: true,
				},
				4: {
					name: "Barbados Intl Business Assoc",
					URL: "http://biba.bb/",
					active: true,
				},
				5: {
					name: "Barbados ICT",
					URL: "http://barbadosict.org/",
					active: true,
				},
				6: {
					name: "Business Barbados",
					URL: "http://businessbarbados.com/",
					active: true,
				},
				7: {
					name: "Government Info Service",
					URL: "http://gisbarbados.gov.bb/gis-news/",
					active: true,
				},
				8: {
					name: "CBC News",
					URL: "https://www.cbc.bb/index.php/news/barbados-news",
					active: true,
				},
				9: {
					name: "Barbados Reporter",
					URL: "https://www.bajanreporter.com/category/new/",
					active: true,
				},
			},
		};
	},
	methods: {
		lastUpdated(createdTime) {
			// created_at property is already formatted in UTC timezone
			const createdTimeDateObject = new Date(createdTime);
			const currentTimeDateObject = new Date();
			// (new Date()).getTime() returns milliseconds since 01 January, 1970 UTC, and is therefore UTC formatted
			const millisecondsSinceArticleCreated =
				currentTimeDateObject.getTime() - createdTimeDateObject.getTime();

			if (millisecondsSinceArticleCreated < 60000) {
				return `last updated < 1 minute ago`;
			} else if (
				millisecondsSinceArticleCreated > 60000 &&
				millisecondsSinceArticleCreated < 3600000
			) {
				return `last updated ${Math.round(
					millisecondsSinceArticleCreated / 60000
				)} minutes ago`;
			} else if (
				millisecondsSinceArticleCreated >= 3600000 &&
				millisecondsSinceArticleCreated < 86400000
			) {
				return `last updated ${Math.round(
					millisecondsSinceArticleCreated / 3600000
				)} hours ago`;
			} else if (millisecondsSinceArticleCreated >= 86400000) {
				return `last updated ${Math.round(
					millisecondsSinceArticleCreated / 86400000
				)} days ago`;
			}
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
	/* background-color: rgba(26, 28, 32, 0.89); */
	background-color: black;
	/* border: none; */
	border: 1px dotted #f76d6e;
}

.card-header {
	padding: 0.1em 0;
	font-size: 1.3em;
	/* background-color: #1a1c20; */
	background-color: black;
	color: white;
	font-family: "DejaVuSansMono", monospace;
	border-bottom: 1px dotted #9acd33;
	/* border-bottom: 1px dotted rgba(100, 100, 110, 1); */
}

.updated-time-text {
	font-size: 0.5em;
}

.list-group-item {
	/* background-color: rgba(26, 28, 32, 0.89); */
	background-color: black;
	/* color: #b2b6b9; */
	color: white;
	border-bottom: 1px dotted rgba(61, 61, 70, 1);
	border-bottom: 1px dotted #f76d6e;
	font-family: "Hack", monospace;
	font-size: 0.9em;
}

.site-name {
	text-decoration: none;
	color: white;
	font-size: 1.1em;
}
</style>
