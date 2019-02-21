<template lang="pug">
</template>

<script>
	export default {
		name: 'IntroPage'
	};
</script>

<style lang="scss" scoped>
	.intro-page {
		@include reset;

		position: relative;
		min-height: 100vh;
		background-color: #020202;
	}

	.bg-1 {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: url("../img/intro-bg-1.jpg") no-repeat 50% 50% / cover;
		transform-origin: 30% 75%;

		@keyframes intro-page-bg-1_-_background {
			100% {
				transform: scale(1.15);
			}
		}

		animation: intro-page-bg-1_-_background 40s ease-in-out alternate infinite;
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
				filter: blur(5px);
			}
		}

		animation: intro-page-bg-3_-_background 40s ease-in-out alternate infinite;
	}

	.sliding-line {
		position: absolute;
		z-index: 1;
		bottom: xl-to-xs(60, 10);
		left: 50%;
		width: 1px;
		height: xl-to-xs(80, 40);
		overflow: hidden;

		&::before {
			content: '';
			display: block;
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

			animation: intro-page-sliding-line_-_slide 1.5s ease-in backwards infinite;
		}
	}
</style>
