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

		&::before {
			content: '';
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background: url("../img/intro-bg.jpg") no-repeat 50% 50% / cover;
			transform-origin: 30% 75%;

			@keyframes intro-page_-_background {
				100% {
					transform: scale(1.15);
				}
			}

			animation: intro-page_-_background 40s ease-in-out alternate infinite;
		}

		&::after {
			content: '';
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background: url("../img/intro-bg-1.jpg") no-repeat 50% 50% / cover;
			opacity: 0.35;
			transform-origin: 30% 75%;

			@keyframes intro-page_-_background-1 {
				100% {
					transform: scale(1.5);
					opacity: 0.55;
				}
			}

			animation: intro-page_-_background-1 40s ease-in-out alternate infinite;
		}
	}

	.bg-2 {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: url("../img/intro-bg-2.jpg") no-repeat 50% 50% / cover;
		opacity: 0.1;
		transform-origin: 30% 50%;

		@keyframes intro-page_-_background-2 {
			100% {
				transform: scale(1.5);
			}
		}

		//animation: intro-page_-_background-2 30s ease-in-out alternate infinite;
	}
</style>
