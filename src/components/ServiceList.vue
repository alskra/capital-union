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
			margin: 25px 130px 25px 0;
			width: calc(100% - 130px);

			@media (width < env(--vw-md)) {
				margin-right: 0;
				width: 100%;
			}

			&:nth-child(even) {
				margin-right: 0;
				margin-left: 130px;

				@media (width < env(--vw-md)) {
					margin-left: 0;
				}
			}
		}

	}
</style>
