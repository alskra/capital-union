<template lang="pug">
</template>

<script>
	export default {
		name: 'FooterPage',
		mounted() {
			document.documentElement.style.mask !== undefined ? this.$refs.mask.classList.add('mask') : null;
		}
	};
</script>

<style lang="scss" scoped>
	.footer-page {
		@include reset;
	}

	.capital-union {
		height: vw(384);

		&:not(.mask) {
			background: url("../img/pi-capital-union-no-mask.jpg") no-repeat 50% 50%;
			background-size: cover;
		}

		&.mask {
			background: url("../img/footer-bg.jpg") no-repeat 50% 50%;
			background-attachment: fixed;
			background-size: cover;
			mask: url("../img/pi-capital-union-mask.png") no-repeat 50% 50% / cover;
		}
	}

	.info {
		@include reset;

		padding: responsive-size(100, 30) 0;
		color: #908d8d;
		font-family: var(--base-content_-_font-family);
		font-size: responsive-size(rem(18), rem(16));
		font-weight: var(--base-content_-_font-weight);
		text-transform: uppercase;
		letter-spacing: em(1.35, 18);
		text-align: center;

		p {
			margin: 0;

			&:not(:last-child) {
				margin-bottom: 1em;
			}
		}
	}
</style>
