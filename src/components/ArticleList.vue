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
						<img src="@/assets/arrow.svg" alt="" height="30" class="ml-3" />
						<a
							:href="getSiteInfo(parseInt(newsSite)).URL"
							target="_blank"
							class="site-name ml-1"
							>{{ getSiteInfo(parseInt(newsSite)).name }}</a
						>
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
	mounted() {},
	methods: {
		getSiteInfo(siteID) {
			let siteInfo = {
				name: "",
				URL: "",
				icon: "",
			};
			switch (siteID) {
				case 0:
					siteInfo.name = "Barbados Today";
					siteInfo.URL = "https://barbadostoday.bb/";
					break;
				case 1:
					siteInfo.name = "Nation News";
					siteInfo.URL = "http://www.nationnews.com/";
					break;
				case 2:
					siteInfo.name = "Loop News";
					siteInfo.URL = "http://www.loopnewsbarbados.com/";
					break;
				case 3:
					siteInfo.name = "Barbados Advocate";
					siteInfo.URL = "https://www.barbadosadvocate.com/";
					break;
				case 4:
					siteInfo.name = "Barbados Intl Business Assoc";
					siteInfo.URL = "http://biba.bb/";
					break;
				case 5:
					siteInfo.name = "Barbados ICT";
					siteInfo.URL = "http://barbadosict.org/";
					break;
				case 6:
					siteInfo.name = "Business Barbados";
					siteInfo.URL = "http://businessbarbados.com/";
					break;
				case 7:
					siteInfo.name = "Government Info Service";
					siteInfo.URL = "http://gisbarbados.gov.bb/gis-news/";
					break;
				case 8:
					siteInfo.name = "CBC News";
					siteInfo.URL = "https://www.cbc.bb/index.php/news/barbados-news";
					break;
				case 9:
					siteInfo.name = "Barbados Reporter";
					siteInfo.URL = "https://www.bajanreporter.com/category/new/";
					break;
				case 10:
					siteInfo.name = "The Broad Street Journal";
					siteInfo.URL = "https://www.broadstjournal.com/";
					break;
			}
			return siteInfo;
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
	background-color: rgba(26, 28, 32, 0.89);
	/* border: none; */
	border: 1px dotted #f76d6e;
}

.card-header {
	padding: 0.1em 0;
	font-size: 1.3em;
	background-color: #1a1c20;
	color: white;
	font-family: "DejaVuSansMono", monospace;
	border-bottom: 1px dotted #9acd33;
	/* border-bottom: 1px dotted rgba(100, 100, 110, 1); */

}

.list-group-item {
	background-color: rgba(26, 28, 32, 0.89);
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
}
</style>
