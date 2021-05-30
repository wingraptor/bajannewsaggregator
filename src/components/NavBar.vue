<template>
	<div>
		<!-- As a link -->
		<b-navbar type="dark">
			<b-navbar-brand href="/">
				<!-- <img src="@/assets/trident.svg" alt="" height="28" class="ml-3" /> -->
				<b-icon icon="diamond" font-scale="1" class="ml-3"></b-icon>
				<!-- <span class="ml-2">News Aggregator</span> -->
				<vue-typer
					:text="['>__', 'News Aggregator']"
					:repeat="0"
					@completed="onComplete"
					class="ml-2"
				></vue-typer>
			</b-navbar-brand>
			<CryptoTicker :isActive="isActive" />
		</b-navbar>
	</div>
</template>


<script>
import CryptoTicker from "@/components/CryptoTicker.vue";

export default {
	name: "NavBar",
	components: {
		CryptoTicker,
	},
	data() {
		return {
			isActive: false,
		};
	},
	methods: {
		onComplete() {
			this.isActive = true;
			this.$root.$emit("textComplete");
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.b-icon{
	color: gold;
}

.list-group-item {
	flex: 1;
}

.vue-typer .custom.char.typed {
	color: white;
}

.vue-typer .custom.char.selected {
	background-color: gold;
}

.vue-typer .custom.caret {
	background-color: gold;
	width: 8px;
}

.navbar-expand {
	/* background-color: #141414; */
	background-color: black;
	padding: 0;
	font-family: "DejaVuSansMono", monospace;
	justify-content: space-between;
	border-bottom: 1px dotted gold;
}
</style>
