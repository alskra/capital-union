<template lang="pug">
	base-button.button-primary(
	:tag="tag"
	v-on="$listeners"
	)
		template(v-slot:icon)
			slot(name="icon")

		slot
</template>

<script>
	import BaseButton from './BaseButton';

	export default {
		name: 'ButtonPrimary',
		props: {
			...BaseButton.props
		}
	};
</script>

<style lang="scss" scoped>
	.button-primary {
		border: 1px solid var(--color-primary);
		padding: 5px 20px;
		width: 230px;
		height: 45px;
		color: #ffffff;
		font-size: rem(14);
		font-weight: var(--base-content-headings_-_font-weight);
		text-transform: uppercase;
		letter-spacing: rem(1.05);
		background-color: var(--color-primary);

		&:not(:disabled) {
			&:hover {
				border-color: #fafafa;
				color: #fefefe;
				background-color: transparent;
			}
		}
	}
</style>
