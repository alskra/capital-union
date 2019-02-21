<template lang="pug">
</template>

<script>
	import ButtonOutline from './ButtonOutline';

	export default {
		name: 'ServiceItem',
		components: {
			ButtonOutline
		}
	};
</script>

<style lang="scss" scoped>
	.service-item {
		@include reset;

		display: flex;
		margin-right: responsive-size(308, 10);
		margin-left: responsive-size(177, 10);
		border: 2px solid rgba(#030303, 0.1);
		padding: responsive-size(70, 20) responsive-size(185, 15);
	}

	.col-main {
		flex-grow: 1;
	}

	.header {
		margin-bottom: responsive-size(50, 30);
		padding-right: responsive-size(80, 0);
	}

	.title {
		@include reset;

		color: var(--base-content-headings_-_color);
		font-size: responsive-size(34, 24);
		font-weight: var(--base-content-headings_-_font-weight);
		letter-spacing: em(2.55, 34);
	}

	.description {
		@include reset;

		margin-top: 1em;
		color: var(--base-content-headings_-_color);
		font-size: var(--base-content_-_font-size);
		font-weight: var(--base-content-headings_-_font-weight);
		letter-spacing: em(1.27, 17);
	}

	.main {
		margin-bottom: responsive-size(50, 30);
		padding-left: responsive-size(80, 0);
	}

	.footer {
		display: flex;
		padding-left: responsive-size(80, 0);

		@media (width < env(--vw-md)) {
			justify-content: center;
			padding-left: 0;
		}
	}

	.col-aside {
		flex-shrink: 0;
		margin-left: responsive-size(100, 20);
	}

	.figure {
		@include reset;

		&-img {
			position: relative;
			width: responsive-size(357, 357 / 1.5);
			max-width: 100%;
			box-shadow: responsive-size(23, 23 / 1.5) responsive-size(27, 27 / 1.5) responsive-size(50, 50 / 1.5)
			#41444d;
			background-color: #3e3d3d;

			&::before {
				content: '';
				display: block;
				padding-top: percentage(202 / 357);
			}

			&-element {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
	}
</style>
