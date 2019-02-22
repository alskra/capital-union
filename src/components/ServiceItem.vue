<template lang="pug">
</template>

<script>
	import ButtonOutline from './ButtonOutline';
	import IconFacebook from './IconFacebook';
	import IconLinkedin from './IconLinkedin';
	import IconExPi from './IconExPi';
	import IconCryptoPi from './IconCryptoPi';
	import IconCapitalPi from './IconCapitalPi';

	export default {
		name: 'ServiceItem',
		components: {
			ButtonOutline,
			IconFacebook,
			IconLinkedin,
			IconExPi,
			IconCryptoPi,
			IconCapitalPi
		}
	};
</script>

<style src="animate.css"></style>

<style lang="scss">
	:root {
		--color-ex-pi: #ff9a00;
		--color-crypto-pi: #f49901;
		--color-capital-pi: #c61030;
	}
</style>

<style lang="scss" scoped>
	.service-item {
		@include reset;

		display: flex;
		position: relative;
		margin-right: responsive-size(130, 0);
		border: 2px solid rgba(#030303, 0.1);
		padding: responsive-size(70, 70) responsive-size(180, 15) responsive-size(120, 20);
		width: calc(100% - #{responsive-size(130, 0)});
		max-width: 1435px;

		@media (width < env(--vw-md)) {
			flex-flow: column;
			margin-right: 0;
			width: 100%;
		}

		&:nth-child(even) {
			@media (width >= env(--vw-md)) {
				margin-right: 0;
				margin-left: responsive-size(130, 0);
			}

			.main {
				&::before {
					@media (width >= env(--vw-md)) {
						right: responsive-size(-180, -15);
						left: auto;
						margin-right: -2px;
						margin-left: 0;
					}
				}
			}

			.col-aside {
				@media (width >= env(--vw-md)) {
					order: -1;
					margin-right: responsive-size(100, 20);
					margin-left: 0;
				}
			}

			.logo {
				@media (width >= env(--vw-md)) {
					right: auto;
					left: 15px;
				}
			}

			.map {
				@media (width >= env(--vw-md)) {
					right: auto;
					left: responsive-size(-160, 50);
				}
			}
		}

		&.ex-pi {
			--color-primary: var(--color-ex-pi);
		}

		&.crypto-pi {
			--color-primary: var(--color-crypto-pi);
		}

		&.capital-pi {
			--color-primary: var(--color-capital-pi);
		}
	}

	.col-main {
		flex-grow: 1;
	}

	.header {
		margin-bottom: responsive-size(50, 30);
		padding-right: responsive-size(80, 0);

		@media (width < env(--vw-md)) {
			padding-right: 0;
		}
	}

	.title {
		@include reset;

		color: var(--base-content-headings_-_color);
		font-size: responsive-size(rem(34), rem(24));
		font-weight: var(--base-content-headings_-_font-weight);
		letter-spacing: em(2.55, 34);
	}

	.description {
		@include reset;

		margin-top: 1em;
		color: var(--base-content-headings_-_color);
		font-size: var(--base-content_-_font-size);
		font-weight: var(--base-content-headings_-_font-weight);
		letter-spacing: em(1.27, 17);
	}

	.main {
		position: relative;
		margin-bottom: responsive-size(50, 30);
		padding-left: responsive-size(80, 0);

		@media (width < env(--vw-md)) {
			padding-left: 0;
		}

		&::before {
			content: '';
			position: absolute;
			top: 13px;
			bottom: 36px;
			left: responsive-size(-180, -15);
			margin-left: -2px;
			width: 4px;
			background-color: var(--color-primary);
		}
	}

	.footer {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		margin: -10px -25px;
		padding-left: responsive-size(80, 0);

		@media (width < env(--vw-md)) {
			justify-content: center;
			padding-left: 0;
		}

		&-col {
			padding: 10px 25px;
			min-width: 0;
		}
	}

	.network-list {
		display: flex;
		margin: -5px;
	}

	.network-item {
		@include reset;

		margin: 5px;
		width: 36px;
		height: 36px;
		flex-shrink: 0;
		color: #61605f;
		cursor: pointer;
		transition: color var(--base-button_-_transition-duration);

		&:hover,
		&:focus {
			color: var(--color-primary);
		}

		&-icon {
			display: block;
		}
	}

	.col-aside {
		margin-top: responsive-size(40, 30);
		margin-left: responsive-size(100, 20);
		width: percentage(357 / 1071);
		max-width: 357px;
		flex-shrink: 0;

		@media (width < env(--vw-md)) {
			margin-left: 0;
			width: 100%;
			max-width: none;
		}
	}

	.logo {
		@include reset;

		position: absolute;
		top: 15px;
		right: 15px;
		height: 40px;
		cursor: pointer;

		&-img {
			display: block;
			height: 100%;
		}
	}

	.figure {
		@include reset;

		position: relative;
		z-index: 1;
		width: 357px;
		max-width: 100%;

		@media (width < env(--vw-md)) {
			margin: 0 auto;
		}

		&-img {
			@include reset;

			position: relative;
			cursor: pointer;

			&::before {
				content: '';
				display: block;
				padding-top: percentage(202 / 357);
			}

			&-element {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				object-fit: cover;
				box-shadow: responsive-size(23, 23 / 2) responsive-size(27, 27 / 2) responsive-size(50, 50 / 2)
				#41444d;
				background-color: #3e3d3d;
			}
		}

		&-caption {
			margin-top: responsive-size(65, 20);
			text-align: center;
			overflow: hidden;
			text-overflow: ellipsis;

			&-link {
				@include reset;

				display: inline;
				color: #41454e;
				font-size: responsive-size(rem(18), rem(16));
				font-weight: 700;
				line-height: 1.25;
				cursor: pointer;
				transition: color var(--base-button_-_transition-duration);

				&:hover {
					color: var(--color-primary);
				}
			}
		}
	}

	.map {
		/*310 - 15*/
		position: absolute;
		right: responsive-size(-160, 50);
		bottom: responsive-size(65, 20);
		width: responsive-size(300, 150);

		@media (width < env(--vw-md)) {
			display: none;
		}

		&-img {
			display: block;
		}

		&-label {
			@include reset;

			position: absolute;
			font-size: rem(12);
			line-height: 1.25;
			overflow: hidden;
			white-space: nowrap;
			cursor: default;
			transform: translateX(-50%);

			&.estonia {
				top: 48%;
				left: 54%;
			}

			&.singapore {
				top: auto;
				bottom: 7%;
				left: 90%;
			}

			&.netherlands {
				top: 67%;
				left: 27%;
			}
		}
	}
</style>
