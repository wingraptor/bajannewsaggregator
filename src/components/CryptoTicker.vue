<template>
	<div class="crypto-ticker-div mt-3 ml-3">
		<div class="row mx-2">
			<div
				v-for="crypto in cryptoTickerData"
				:key="crypto.id"
				class="col text-center d-flex flex-column crypto-ticker-col"
			>
				<span class=""> {{ crypto.symbol }}/USD </span>
				<span> ${{ crypto.quote.USD.price.toFixed(2) }} </span>
			</div>
		</div>
	</div>
</template>


<script>
export default {
	name: "CryptoTicker",
	props: {
		cryptoTickerData: Array,
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.crypto-ticker-div {
	max-width: 100%;
	color: white;
	font-family: "Hack", monospace;
}

</style>
