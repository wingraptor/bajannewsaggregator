<template>
	<div class="footer-div ml-3">
		<footer v-show="isActive">
			<span class="d-flex align-content-center"
				>Made with
				<!-- <b-icon icon="heart" font-scale="1.1" animation="throb"></b-icon> by -->
				<img src="https://media.giphy.com/media/kEcZjhjFJ5XqFJXgtP/giphy.gif" height="25px" class="mx-1"> by&nbsp;
				<a
					href="https://akonobrathwaite.com/"
					target="_blank"
					rel="noopener noreferrer"
					>Akono</a
				></span
			>
		</footer>
		<!-- As a link
		<b-navbar type="dark">
			<b-navbar-brand href="/">

			</b-navbar-brand>
		</b-navbar> -->
	</div>
</template>


<script>
export default {
	name: "Footer",
  data(){
    return {
      isActive: false
    }
  },
	mounted() {
		this.$root.$on("textComplete", () => {
			this.isActive = true;
		});
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
	color: gold;
}

a:hover {
	color: #9acd33;
	text-decoration: none;
}

.footer-div {
	color: white;
	position: absolute;
	bottom: 3px;
	font-family: "Hack", monospace;
}

.bi-heart {
	color: #f76d6e;
}
</style>
