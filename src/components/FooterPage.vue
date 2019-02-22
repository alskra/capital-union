<template lang="pug">
</template>

<script>
	export default {
		name: 'FooterPage'
	};
</script>

<style lang="scss" scoped>
	.footer-page {
		@include reset;
	}

	.capital-union {
		height: vw(384);
		background: url("../img/footer-bg.jpg") no-repeat 50% 50% / cover fixed;
		mask: url("../img/pi-capital-union-mask.png") no-repeat 50% 50% / cover;
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
