<template lang="pug">
</template>

<script>
	export default {
		name: 'FooterPage',
		mounted() {
			document.documentElement.style.WebkitMaskClip !== undefined ? this.$refs.mask.classList.add('mask') : null;
		}
	};
</script>

<style lang="scss" scoped>
	.footer-page {
		@include reset;
	}

	.capital-union {
		margin-bottom: responsive-size(200, 100);
		height: vw(384);

		&:not(.mask) {
			background: url("../img/pi-capital-union-no-mask.png") no-repeat 50% 50% / contain;
		}

		&.mask {
			mask: url("../img/pi-capital-union-mask.svg") no-repeat 50% 50% / contain;

			&::before {
				content: '';
				position: fixed;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
				background: url("../img/footer-bg.jpg") no-repeat 50% 50% / cover;
			}
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
