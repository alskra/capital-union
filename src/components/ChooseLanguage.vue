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
						label: 'en'
					};
				}
			}
		},
		methods: {
			onDocumentClick(evt) {
				if (evt.target !== this.$refs['choose-language']
					&& !this.$refs['choose-language'].contains(evt.target)) {
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
					text-shadow: 0 -1px #000000,
					1px 0 #000000,
					0 1px #000000,
					-1px 0 #000000;
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
			font-size: rem(14);
			line-height: 1.25;
			overflow: hidden;
			white-space: nowrap;

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

	.dropdown {
		position: absolute;
		top: 100%;
		left: 0;
		will-change: transform, opacity;

		&-item {
			@include reset;

			display: flex;
			align-items: center;
			margin-top: 5px;
			padding-right: 13px;
			cursor: pointer;
			transition: transform 0.15s ease;

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
				font-size: rem(14);
				line-height: 1.25;
				overflow: hidden;
				white-space: nowrap;
			}
		}

		&.scaleY-fade {
			@keyframes dropdown_-_scaleY-fade {
				0% {
					transform: scaleY(0);
					opacity: 0;
				}
			}

			&-enter-active {
				transform-origin: 50% 0;
				animation: dropdown_-_scaleY-fade 0.15s ease backwards;
			}

			&-leave-active {
				transform-origin: 50% 0;
				animation: dropdown_-_scaleY-fade 0.15s ease reverse forwards;
			}
		}
	}
</style>
