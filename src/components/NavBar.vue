<template>
	<div>
		<!-- As a link -->
		<b-navbar type="dark">
			<b-navbar-brand href="/">
				<!-- <img src="@/assets/trident.svg" alt="" height="28" class="ml-3" /> -->
				<b-icon icon="diamond" font-scale="1" class="ml-3"></b-icon>
				<span class="ml-2">News Aggregator</span>
			</b-navbar-brand>
			<CryptoTicker />
		</b-navbar>
	</div>
</template>


<script>
import CryptoTicker from "@/components/CryptoTicker.vue"

export default {
	name: "NavBar",
	components:{
		CryptoTicker
	}

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-group-item {
	flex: 1;
}

nav {
	/* background-color: #141414; */
	background-color: black;
	padding: 0;
	font-family: "DejaVuSansMono", monospace;
	justify-content: space-between;
}
</style>
