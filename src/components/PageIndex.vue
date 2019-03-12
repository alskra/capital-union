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
					afterLoad: this.afterLoad
				}
			};
		},
		methods: {
			afterLoad() {
				window.dispatchEvent(new Event('scroll'));
			}
		}
	};
</script>

<style lang="scss" scoped>
	.section {
		&.end {
			background: url("../img/footer-bg.jpg") no-repeat 50% 50% / cover fixed;
		}
	}
</style>
