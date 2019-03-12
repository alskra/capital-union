<template lang="pug">
</template>

<script>
	export default {
		name: 'FooterPage',
		mounted() {
			if (
				!(navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1) &&
				document.documentElement.style.WebkitMaskClip !== undefined
			) {
				this.$refs.mask.classList.add('mask');
			}
		}
	};
</script>

<style lang="scss" scoped>
	.footer-page {
		@include reset;

		padding-top: responsive-size(70, 30);
	}

	.capital-union {
		margin-bottom: responsive-size(200, 100);
		height: vw(384);

		&:not(.mask) {
			background: url("../img/pi-capital-union-no-mask.png") no-repeat 50% 50% / contain;
		}

		&.mask {
			background: url("../img/footer-bg.jpg") no-repeat 50% 50% / cover;
			mask: url("../img/pi-capital-union-mask.svg") no-repeat 50% 50% / contain;
		}
	}

	.info {
		@include reset;

		padding: responsive-size(70, 30) 0;
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
