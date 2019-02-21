<template lang="pug">
	.service-list
		slot
</template>

<script>
	export default {
		name: 'ServiceList'
	};
</script>

<style lang="scss" scoped>
	.service-list {
		@include reset;

		display: flex;
		flex-flow: column;
		align-items: center;
		padding: responsive-size(70, 30) 10px;

		.service-item {
			margin-top: 25px;
			margin-bottom: 25px;
		}
	}
</style>
