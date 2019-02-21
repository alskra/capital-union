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
		padding: responsive-size(70, 20) responsive-size(180, 15);

		@media (width < env(--vw-md)) {
			flex-flow: column;
		}
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
		margin-top: responsive-size(40, 30);
		margin-left: responsive-size(80, 20);
		width: percentage(357 / 1054);
		flex-shrink: 0;

		@media (width < env(--vw-md)) {
			margin-left: 0;
			width: auto;
		}
	}

	.figure {
		@include reset;

		width: 357px;
		max-width: 100%;

		@media (width < env(--vw-md)) {
			margin: 0 auto;
		}

		&-img {
			position: relative;
			box-shadow: responsive-size(23, 23 / 2) responsive-size(27, 27 / 2) responsive-size(50, 50 / 2)
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

		&-caption {
			margin-top: responsive-size(65, 20);
			text-align: center;

			&-link {
				@include reset;

				display: inline;
				color: #41454e;
				font-size: responsive-size(18, 16);
				font-weight: 700;
				line-height: 1.25;
				cursor: pointer;
				transition: color 0.15s ease-in-out;

				&:hover {
					color: var(--color-primary);
				}
			}
		}
	}
</style>
