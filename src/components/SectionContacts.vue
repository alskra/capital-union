<template lang="pug">
</template>

<script>
	import ButtonPrimary from './ButtonPrimary';
	import ButtonOutline from './ButtonOutline';
	import FeedbackForm from './FeedbackForm';

	export default {
		name: 'SectionContacts',
		components: {
			ButtonPrimary,
			ButtonOutline,
			FeedbackForm
		},
		data() {
			return {
				feedbackShow: false
			};
		},
		methods: {
			feedbackEnter(el) {
				el.style.height = el.scrollHeight + 'px';
			},
			feedbackAfterEnter(el) {
				el.style.height = '';
				this.$store.state.fullpageApi.reBuild();
			},
			feedbackLeave(el) {
				this.feedbackEnter(el);
			},
			feedbackAfterLeave(el) {
				this.feedbackAfterEnter(el);
			}
		}
	};
</script>

<style lang="scss" scoped>
	.section-contacts {
		@include reset;

		padding-top: responsive-size(188 + 70, 80 + 30);

		@media (width < env(--vw-md)) {
			padding-top: 80px + 30px;
		}

		.feedback-form {
			margin-top: 30px;
		}
	}

	.body {
		position: relative;
		padding: responsive-size(100, 50) vw(240) responsive-size(100, 30) vw(450);
		width: vw(1190);
		background: url("../img/contacts-bg.jpg") no-repeat 50% 50% / cover #252831;

		@media (width < env(--vw-md)) {
			padding: 50px 10px 30px;
			width: 100%;
		}

		.base-content {
			margin-bottom: responsive-size(50, 30);
			color: #908d8d;
		}
	}

	.logo-pi {
		position: absolute;
		top: responsive-size(-188, -80);
		right: responsive-size(-235, -80);
		width: responsive-size(337, 100);
		height: responsive-size(337, 100);

		@media (width < env(--vw-md)) {
			top: -80px;
			right: 50%;
			transform: translateX(50%);
			width: 100px;
			height: 100px;
		}
	}

	.feedback {
		overflow: hidden;

		&.slide-enter-active {
			animation: feedback_-_slide-in 0.3s linear;
		}

		&.slide-leave-active {
			animation: feedback_-_slide-in 0.3s linear reverse;
		}

		@keyframes feedback_-_slide-in {
			0% {
				opacity: 0;
				height: 0;
			}
		}
	}

	.actions {
		@media (width < env(--vw-md)) {
			display: flex;
			justify-content: center;
		}
	}

	.info {
		@include reset;

		margin-left: auto;
		padding: responsive-size(70, 30) 0 responsive-size(70, 30) percentage(1 / 12);
		width: 50%;
		color: #0a0a0a;
		font-weight: var(--base-content-headings_-_font-weight);
		line-height: 1.25;
		letter-spacing: em(1.27, 17);

		@media (width < env(--vw-md)) {
			width: auto;
			padding-left: 0;
			text-align: center;
		}

		p {
			margin: 0;

			&:not(:last-child) {
				margin-bottom: 1em;
			}
		}
	}
</style>
