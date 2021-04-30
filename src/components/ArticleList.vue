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
						{{ newsSite }}
					</template>
					<b-list-group flush>
						<b-list-group-item
							v-for="article in articleArray"
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
	border: none;
	border-radius:50%;
}

.card-header {
	padding: 0.1em 0;
	font-size: 1.3em;
	background-color: #1a1c20;
	color: white;
	font-family: "DejaVuSansMono", monospace;
}

.list-group-item {
	background-color: #1a1c20;
	color: #b2b6b9;
	border-bottom: 1px dotted rgba(46, 46, 55, 0.8);
	font-family: "Hack", monospace;
}
</style>
