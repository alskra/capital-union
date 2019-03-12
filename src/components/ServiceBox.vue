<template lang="pug">
	.service-box
		slot
</template>

<script>
	export default {
		name: 'ServiceBox'
	};
</script>

<style lang="scss" scoped>
	.service-box {
		@include reset;

		display: flex;
		flex-flow: column;
		align-items: center;
		padding: responsive-size(70, 30) 10px;
	}
</style>
