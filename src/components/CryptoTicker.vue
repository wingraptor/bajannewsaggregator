<template>
	<div class="crypto-ticker-div">
		<transition name="transition">
			<div
				class="crypto-ticker-col pr-2"
				v-show="isActive"
				v-bind:title="
					cryptoTickerData[cryptoIndex].name +
					'/USD' +
					': ' +
					cryptoTickerData[cryptoIndex].quote.USD.percent_change_24h.toFixed(0) +
					'% in the last 24hr.'
				"
			>
				<!-- <img src="@/assets/bitcoin-sign.svg" alt="" height="15" />: -->
				<cryptoicon :symbol="cryptoTickerData[cryptoIndex].symbol" size="24" />
				&nbsp;
				<span
					:style="
						cryptoTickerData[cryptoIndex].quote.USD.percent_change_24h > 0
							? 'color:rgba(154, 205, 51, 0.9)'
							: 'color:rgba(247, 109, 110, 0.9)'
					"
				>
					${{ cryptoTickerData[cryptoIndex].quote.USD.price.toFixed(2) }}</span
				>
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
			cryptoIndex: 0,
		};
	},
	methods: {
		async getCryptoTickerData() {
			try {
				const response = await axios.get(this.ApiURLs.prod.cryptoTickerData);
				this.cryptoTickerData = response.data.data;
				// Start cryptoticker
				this.incrementCryptoIndex();
			} catch (error) {
				console.log(error);
			}
		},
		incrementCryptoIndex() {
			setTimeout(
				setInterval(() => {
					if (this.cryptoIndex >= this.cryptoTickerData.length - 1) {
						this.cryptoIndex = 0;
					} else {
						this.cryptoIndex += 1;
					}
				}, 2000),
				2000
			);
		},
	},
	mounted() {
		this.$root.$on("textComplete", () => {
			this.isActive = true;
			this.getCryptoTickerData();
		});
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
