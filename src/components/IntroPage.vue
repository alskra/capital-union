<template lang="pug">
</template>

<script>
	import ButtonOutline from './ButtonOutline';

	export default {
		name: 'IntroPage',
		components: {
			ButtonOutline
		},
		data() {
			return {
				location: location
			};
		},
		methods: {
			handleScroll(evt, el) {
				const clientRect = el.parentElement.getBoundingClientRect();
				const vh = window.innerHeight;

				if (
					(clientRect.top >= 0 && clientRect.top < vh) ||
					(clientRect.bottom > 0 && clientRect.bottom <= vh) ||
					(clientRect.top < 0 && clientRect.bottom > vh)
				) {
					el.style.animationPlayState = 'running';
				} else {
					el.style.animationPlayState = 'paused';
				}

				return false;
			}
		}
	};
</script>

<style lang="scss" scoped>
	.intro-page {
		@include reset;

		display: flex;
		flex-flow: column;
		justify-content: center;
		position: relative;
		padding: responsive-size(60 + 58 + 30, 15 + 40 + 20) 0 responsive-size(60 + 80 + 30, 15 + 40 + 20);
		min-height: 100vh;
		overflow: hidden;
		background-color: #020202;

		.base-container {
			position: relative;
			padding-left: responsive-size(70, 30);
			max-width: 800px;
			transform: translate3d(0, 0, 0);
		}

		.base-content {
			margin-bottom: responsive-size(70, 40);
		}
	}

	.bg-1 {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: url("../img/intro-bg-1.jpg") no-repeat 50% 50% / cover;
		transform-origin: 50% 50%;

		@keyframes intro-page-bg-1_-_background {
			100% {
				transform: scale(1.15);
			}
		}

		will-change: transform;
		animation: intro-page-bg-1_-_background 40s ease-in-out alternate infinite;

		&.variant-2 {
			@keyframes intro-page-bg-1-variant-2_-_background {
				100% {
					transform: scale(1.5);
				}
			}

			animation-name: intro-page-bg-1-variant-2_-_background;
		}
	}

	.bg-2 {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: url("../img/intro-bg-2.jpg") no-repeat 50% 50% / cover;
		opacity: 0.35;
		transform-origin: 30% 75%;

		@keyframes intro-page-bg-2_-_background {
			100% {
				transform: scale(1.5);
				opacity: 0.55;
			}
		}

		will-change: transform, opacity;
		animation: intro-page-bg-2_-_background 40s ease-in-out alternate infinite;
	}

	.bg-3 {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: url("../img/intro-bg-3.jpg") no-repeat 50% 50% / cover;
		opacity: 0.1;

		@keyframes intro-page-bg-3_-_background {
			100% {
				opacity: 0.01;
			}
		}

		will-change: opacity;
		animation: intro-page-bg-3_-_background 40s ease-in-out alternate infinite;
	}

	.title {
		margin-left: responsive-size(-60, -20);
		letter-spacing: em(2.7, 36);
	}

	.actions {
		@media (width < env(--vw-md)) {
			display: flex;
			justify-content: center;
			margin-left: responsive-size(-60, -20);
		}
	}

	.sliding-line {
		position: absolute;
		bottom: responsive-size(60, 10);
		left: 50%;
		width: 1px;
		height: responsive-size(80, 40);
		overflow: hidden;

		&-inner {
			height: 100%;
			background-color: #807e89;

			@keyframes intro-page-sliding-line_-_slide {
				0% {
					height: 0;
				}

				50% {
					height: 100%;
				}

				100% {
					transform: translateY(100%);
				}
			}

			will-change: height, transform;
			animation: intro-page-sliding-line_-_slide 1.5s ease-in backwards infinite;
		}
	}
</style>
