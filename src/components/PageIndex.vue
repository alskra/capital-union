<script>
	import HeaderPage from './HeaderPage';
	import IntroPage from './IntroPage';
	import ServiceList from './ServiceList';
	import ServiceBox from './ServiceBox';
	import ServiceItem from './ServiceItem';
	import SectionContacts from './SectionContacts';
	import FooterPage from './FooterPage';

	export default {
		name: 'PageIndex',
		components: {
			HeaderPage,
			IntroPage,
			ServiceList,
			ServiceBox,
			ServiceItem,
			SectionContacts,
			FooterPage
		},
		data() {
			return {
				fullpageOptions: {
					licenseKey: '00000000-00000000-00000000-00000000',
					scrollOverflow: true,
					// afterLoad: this.afterLoad
				}
			};
		},
		methods: {
			afterLoad() {
				// window.dispatchEvent(new Event('scroll'));
			},
			reBuild() {
				this.$refs.fullpage.api.reBuild();
			}
		},
		mounted() {
			const event = document.createEvent('Event');

			event.initEvent('scroll', true, true);

			requestAnimationFrame(function updateScroll() {
				window.dispatchEvent(event);

				requestAnimationFrame(updateScroll);
			});

			this.$store.commit('setFullpageApi', this.$refs.fullpage.api);
		}
	};
</script>

<style lang="scss" scoped>
</style>
