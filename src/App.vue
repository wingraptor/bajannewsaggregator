<template>
	<div id="app">
		<div id="nav">
			<NavBar />
		</div>
		<router-view />
	</div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
	components: {
		NavBar,
	},
};
</script>

<style>
body {
	/* background-image: url("./assets/background.jpg"); */
	background-color: #1a1c20;
	min-height: 100vh;
}
#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	@font-face {
		font-family: "DejaVuSansMono";
		src: url("./assets/fonts/DejaVuSansMono.ttf");
	}
}

/* #nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
