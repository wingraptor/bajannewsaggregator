<template>
	<div>
		<!-- As a link -->
		<b-navbar type="dark">
			<b-navbar-brand href="/">
				<img src="@/assets/logo.svg" alt="" height="30" class="ml-3"/>
				<span class="ml-2">News Aggregator</span>
			</b-navbar-brand>
		</b-navbar>
	</div>
</template>


<script>
export default {
	name: "NavBar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-group-item {
	flex: 1;
}

nav{
	background-color: #141414;
	padding:0;
}
</style>
