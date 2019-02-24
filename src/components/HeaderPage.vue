<template lang="pug">
</template>

<script>
	import IconPiCapitalUnion from './IconPiCapitalUnion';
	import ChooseLanguage from './ChooseLanguage';

	export default {
		name: 'HeaderPage',
		components: {
			IconPiCapitalUnion,
			ChooseLanguage
		}
	};
</script>

<style lang="scss">
	:root {
		--header-page_-_color: #181716;
		--header-page_-_padding-top: #{xxl-to-xs(60, 15)};
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
		min-width: env(--vw-xs);

		.base-container {
			display: flex;
			align-items: center;
		}

		.choose-language {
			margin-left: auto;
			flex-shrink: 0;
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
			height: xxl-to-xs(58, 40);
		}
	}
</style>
