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

		margin-right: xxl-to-xs(308, 10);
		margin-left: xxl-to-xs(177, 10);
		border: 2px solid rgba(#030303, 0.1);
		padding: xxl-to-xs(70, 20) xxl-to-xs(185, 20) xxl-to-xs(120, 20) xxl-to-xs(190, 20);
	}

	.header {
		margin-bottom: xxl-to-xs(50, 30);
		padding-right: xxl-to-xs(80, 0);
	}

	.title {
		@include reset;

		color: var(--base-content-headings_-_color);
		font-size: xxl-to-xs(34, 24);
		font-weight: var(--base-content-headings_-_font-weight);
		letter-spacing: em(2.55, 34);

		@media (width < env(--vw-md)) {
			//font-size: rem(34 - 4);
		}
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
		margin-bottom: xxl-to-xs(50, 30);
		padding-left: xxl-to-xs(80, 0);
	}

	.footer {
		display: flex;
		padding-left: xxl-to-xs(80, 0);

		@media (width < env(--vw-md)) {
			justify-content: center;
			padding-left: 0;
		}
	}
</style>
