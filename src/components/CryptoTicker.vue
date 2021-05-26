<template>
	<div class="crypto-ticker-div">
		<transition name="transition">
			<div
				v-for="crypto in cryptoTickerData"
				:key="crypto.id"
				class="crypto-ticker-col pr-2"
				v-show="isActive"
			>
				<img src="@/assets/bitcoin-sign.svg" alt="" height="15" />:
				<!-- <span> {{ crypto.symbol }}/USD</span> -->
				<span
					:style="
						crypto.quote.USD.percent_change_1h > 0
							? 'color:rgba(154, 205, 51, 0.9)'
							: 'color:rgba(247, 109, 110, 0.9)'
					"
				>
					${{ crypto.quote.USD.price.toFixed(0) }}</span
				>
				<!-- <span class="percent-change-data">
					<span v-if="crypto.quote.USD.percent_change_24h > 0"
						><b-icon-arrow-up style="color: #9acd33"></b-icon-arrow-up
					></span>
					<span v-else
						><b-icon-arrow-down style="color: #f76d6e"></b-icon-arrow-down
					></span>
					<span> {{ crypto.quote.USD.percent_change_24h.toFixed(2) }}% 24h </span>
				</span> -->
			</div>
		</transition>
	</div>
</template>


<script>
import axios from "axios";

export default {
	name: "CryptoTicker",
	// props: ["isActive"],
	data() {
		return {
			ApiURLs: {
				dev: {
					cryptoTickerData: "http://localhost:3000/api/cryptoTicker.js",
				},
				prod: {
					cryptoTickerData:
						"https://bajan-news-aggregator.vercel.app/api/cryptoTicker.js",
				},
			},
			cryptoTickerData: [],
			isActive: false,
		};
	},
	methods: {
		async getCryptoTickerData() {
			try {
				const response = await axios.get(this.ApiURLs.prod.cryptoTickerData);
				this.cryptoTickerData = response.data.data;
			} catch (error) {
				console.log(error);
			}
		},
	},
	mounted() {
		this.$root.$on("textComplete", () => {
			this.isActive = true;
		});
		this.getCryptoTickerData();
	},
	// watch: {
	// 	isActive() {
	// 		if (this.isActive) {
	// 			this.isActive = true
	// 		}
	// 	},
	// },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}

.crypto-ticker-col {
	max-width: 100%;
	color: white;
	font-family: "Hack", monospace;
	font-size: 0.85em;
	display: flex;
	align-items: center;
}

/* .percent-change-data{

} */
</style>
