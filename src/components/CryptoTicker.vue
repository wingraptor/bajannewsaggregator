<template>
	<div class="crypto-ticker-div mt-3 ml-3">
		<div class="row mx-2">
			<div
				v-for="crypto in cryptoTickerData"
				:key="crypto.id"
				class="col text-center d-flex flex-column crypto-ticker-col justify-content-center"
			>
				<span> {{ crypto.symbol }}/USD</span>
				<span> ${{ crypto.quote.USD.price.toFixed(2) }}</span>
        <span class="percent-change-data">
          <span v-if="crypto.quote.USD.percent_change_24h > 0"><b-icon-arrow-up style="color: #9acd33;"></b-icon-arrow-up></span>
          <span v-else><b-icon-arrow-down style="color: #f76d6e;"></b-icon-arrow-down></span>
          <span>
            {{crypto.quote.USD.percent_change_24h.toFixed(2)}}% 24h
          </span>
          </span>
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

.percent-change-data{
  font-size: 0.8em;
}

</style>
