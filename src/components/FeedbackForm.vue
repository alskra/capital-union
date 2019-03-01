<template lang="pug">
</template>

<script>
	import ButtonPrimary from './ButtonPrimary';
	import ButtonOutline from './ButtonOutline';

	export default {
		name: 'FeedbackForm',
		components: {
			ButtonPrimary,
			ButtonOutline
		}
	};
</script>

<style lang="scss" scoped>
	.feedback-form {
		@include reset;
	}

	.row {
		display: flex;
		align-items: flex-start;
		flex-wrap: wrap;
		margin: -10px;

		& + & {
			margin-top: 10px;
		}

		&.actions {
			justify-content: center;

			.base-button {
				width: 100%;
			}
		}
	}

	.col {
		margin: 10px;
		flex-shrink: 0;

		&.size-50 {
			width: calc(50% - 20px);

			@media (env(--vw-md) <= width < env(--vw-xl)), (width < env(--vw-sm)) {
				width: calc(100% - 20px);
			}
		}

		&.size-100 {
			width: calc(100% - 20px);
		}

		&.captcha {
			margin-left: auto;

			&-field {
				width: 145px;
			}
		}
	}

	.field,
	.select,
	.textarea {
		@include reset;

		border: 1px solid #b7b7b7;
		padding: 5px 10px;
		width: 100%;
		height: 45px;
		color: var(--base-content-headings_-_color);
		font-size: var(--base-content_-_font-size);
		line-height: 1.25;
		background-color: var(--base-page_-_background-color);
		transition-property: var(--base-button_-_transition-property);
		transition-duration: var(--base-button_-_transition-duration);
		transition-timing-function: var(--base-button_-_transition-timing-function);

		&:placeholder {
			color: #999999;
		}

		&:focus {
			border-color: var(--color-primary);
		}

		&:invalid {
			//border-color: red;
		}

		&:focus-visible {
			outline: none;
		}
	}

	.select {
		appearance: none;
		padding-right: 10px + 10px + 5px;
		background: url("../img/icons/svg/arrow-down.svg") no-repeat right 10px center var(--base-page_-_background-color);

		&:-moz-focusring {
			color: transparent;
			text-shadow: 0 0 0 #000;
		}

		&::-ms-expand {
			display: none;
		}
	}

	.textarea {
		resize: vertical;
		overflow-y: auto;
		min-height: 120px;
	}
</style>
