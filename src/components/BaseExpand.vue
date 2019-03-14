<template lang="pug">
	.base-expand
		transition(
		name="fade"
		mode="out-in"
		)
</template>

<script>
	export default {
		name: 'BaseExpand'
	};
</script>

<style lang="scss" scoped>
	.base-expand {
		@include reset;
	}
</style>
