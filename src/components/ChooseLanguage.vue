<template lang="pug">
</template>

<script>
	import IconLangEnUk from './IconLangEnUk';
	import IconLangIt from './IconLangIt';
	import IconLangSr from './IconLangSr';
	import IconLangZh from './IconLangZh';
	import IconLangKo from './IconLangKo';
	import IconLangRu from './IconLangRu';

	export default {
		name: 'ChooseLanguage',
		components: {
			IconLangEnUk,
			IconLangIt,
			IconLangSr,
			IconLangZh,
			IconLangKo,
			IconLangRu
		},
		data() {
			return {
				opened: false
			};
		},
		props: {
			language: {
				type: Object,
				default() {
					return {
						code: 'en-UK',
						label: 'EN'
					};
				}
			}
		},
		methods: {
			onDocumentClick(evt) {
				if (
					evt.target !== this.$refs['choose-language'] &&
					!this.$refs['choose-language'].contains(evt.target)
				) {
					this.opened = false;
				}
			}
		},
		created() {
			document.addEventListener('click', this.onDocumentClick);
		},
		destroyed() {
			document.removeEventListener('click', this.onDocumentClick);
		}
	};
</script>

<style lang="scss" scoped>
	.choose-language {
		@include reset;

		position: relative;

		&.theme-header {
			.button {
				color: var(--header-page_-_color);
			}

			.dropdown-item {
				color: var(--header-page_-_color);

				&-label {
					text-shadow: var(--header-page-text-shadow);
				}
			}
		}

		&.right {
			.dropdown {
				right: 0;
				left: auto;
			}
		}
	}

	.button {
		@include reset;

		display: flex;
		align-items: center;
		cursor: pointer;

		&-icon {
			display: flex;
			align-items: center;
			margin-right: 8px;
			flex-shrink: 0;
			width: 30px;
			height: 20px;
			overflow: hidden;
		}

		&-label {
			min-width: 40px;
			font-size: rem(14);
			line-height: 1.25;
			overflow: hidden;
			white-space: nowrap;

			&:first-child {
				margin-right: 10px;

				@media (width < env(--vw-md)) {
					display: none;
				}
			}

			&:last-child {
				&::after {
					content: '';
					display: inline-block;
					vertical-align: middle;
					margin-left: 5px;
					border-top: 5px solid;
					border-right: 4px solid transparent;
					border-left: 4px solid transparent;
				}
			}
		}
	}

	.dropdown {
		position: absolute;
		z-index: 1000;
		top: 100%;
		left: 0;
		margin-top: 2px;
		will-change: transform, opacity;

		&.scaleY-fade {
			@keyframes dropdown_-_scaleY-fade {
				0% {
					transform: scaleY(0);
					opacity: 0;
				}
			}

			&-enter-active {
				transform-origin: 50% 0;
				animation: dropdown_-_scaleY-fade 0.2s backwards;
			}

			&-leave-active {
				transform-origin: 50% 0;
				animation: dropdown_-_scaleY-fade 0.2s reverse forwards;
			}
		}

		&-item {
			@include reset;

			display: flex;
			align-items: center;
			padding: 2px 0;
			cursor: pointer;
			//transition: transform 0.15s;

			&:hover {
				//transform: translateX(-5px);
			}

			&-icon {
				display: flex;
				align-items: center;
				margin-right: 8px;
				flex-shrink: 0;
				width: 30px;
				height: 20px;
				overflow: hidden;
			}

			&-label {
				min-width: 40px;
				font-size: rem(14);
				line-height: 1.25;
				overflow: hidden;
				white-space: nowrap;
			}
		}
	}
</style>
