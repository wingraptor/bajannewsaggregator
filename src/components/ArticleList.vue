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
					<template v-slot:header>
						<b-icon-newspaper variant="info"></b-icon-newspaper>
						{{ newsSite }}
					</template>
					<b-list-group flush>
						<b-list-group-item
							variant="dark"
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
	mounted() {
		console.log(this.articleListData);
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
	font-size: 1.5rem;
}

.card-header {
	padding-top: 0.1em;
	padding-bottom: 0.1em;
	font-size: 1.5em;
}
</style>
