<template lang="pug">
</template>

<script>
	import IconPiCapitalUnion from './IconPiCapitalUnion';

	export default {
		name: 'HeaderPage',
		components: {
			IconPiCapitalUnion
		}
	};
</script>

<style>
	:root {
		--header-page_-_color: #181716;
		--header-page_-_padding-top: 60px;
	}
</style>

<style lang="scss" scoped>
	.header-page {
		@include reset;

		padding-top: var(--header-page_-_padding-top);
		position: absolute;
		z-index: 999;
		top: 0;
		left: 0;
		width: 100%;

		.base-container {
			display: flex;
		}

		&.theme-light {
			--header-page_-_color: #ffffff;
		}
	}

	.logo {
		@include reset;

		flex-shrink: 0;
		color: var(--header-page_-_color);
		cursor: pointer;

		&-img {
			display: block;
		}
	}
</style>
