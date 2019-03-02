<template lang="pug">
	base-button.button-outline(
	:tag="tag"
	)
		template(v-slot:icon)
			slot(name="icon")

		slot
</template>

<script>
	import BaseButton from './BaseButton';

	export default {
		name: 'ButtonOutline',
		props: {
			...BaseButton.props
		}
	};
</script>

<style lang="scss" scoped>
	.button-outline {
		border: 1px solid currentColor;
		padding: 5px 20px;
		width: 230px;
		height: 45px;
		color: #232428;
		font-size: rem(14);
		font-weight: var(--base-content-headings_-_font-weight);
		text-transform: uppercase;
		letter-spacing: rem(1.05);

		&.theme-invert {
			border-color: #fafafa;
			color: #fefefe;
		}

		&:not(:disabled) {
			&:hover {
				border-color: var(--color-primary);
				color: #ffffff;
				background-color: var(--color-primary);
			}
		}
	}
</style>
