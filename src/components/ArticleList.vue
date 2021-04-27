<template>
	<div class="main-content">
		<b-card v-for="(articleArray, newsSite) in articleListData" :key="newsSite" no-body :header="newsSite" header-tag="header">
			<b-list-group flush>
				<b-list-group-item variant="dark" v-for= "article in articleArray" :key="article.link" :href="article.link" target="_blank">{{article.headline}}</b-list-group-item>
			</b-list-group>
		</b-card>
	</div>
</template>


<script>
export default {
	name: "ArticleList",
	props:{
		articleListData: Object
	},
	mounted(){
		console.log(this.articleListData)
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  header{
    font-size: 1.5rem;
  }

.main-content {
  /* Arrange lists of articles in a flexible grid */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 2rem;
}

</style>
