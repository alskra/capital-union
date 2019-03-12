// Styles
import 'normalize.css';
import '../scss/base.scss';

// Polyfills
import cssVars from 'css-vars-ponyfill';
import 'focus-visible';
import focusWithin from 'focus-within';

// Vue
import Vue from 'vue';
import 'fullpage.js/dist/fullpage.min.css';
import 'fullpage.js/vendors/scrolloverflow';
import VueFullPage from 'vue-fullpage.js';

cssVars();

focusWithin(document, {
	attr: false,
	className: 'focus-within',
	force: true,
});

Vue.config.productionTip = false;
Vue.use(VueFullPage);

// Import base components
const requireComponent = require.context('../components', true, /Base[A-Z]\w+\.(vue|js)$/);

requireComponent.keys().forEach(fileName => {
	const componentConfig = requireComponent(fileName).default || requireComponent(fileName);

	const componentName = componentConfig.name || (
		fileName
			.replace(/^.+\//, '')
			.replace(/\.\w+$/, '')
	);

	Vue.component(componentName, componentConfig);
});

// Directives
const animateOnScroll = (evt, el, binding) => {
	const clientRect = el.getBoundingClientRect();
	const vh = window.innerHeight;

	if (
		clientRect.top >= 0 &&
		clientRect.top <= vh * 2 / 3
	) {
		el.style.opacity = '';
		el.style.visibility = '';
		el.classList.add('animated', binding.value);

		return true;
	}

	return false;
};

const loadOnScroll = (evt, el, binding) => {
	const clientRect = el.getBoundingClientRect();
	const vh = window.innerHeight;

	if (
		clientRect.top >= 0 &&
		clientRect.top <= vh * 3 / 4
	) {
		el.addEventListener('load', function onImageLoad() {
			el.removeEventListener('load', onImageLoad);

			el.style.opacity = '';
			el.style.visibility = '';
			el.classList.add('animated', binding.value);
		});

		el.setAttribute('src', el.lazySrc);
		el.setAttribute('srcset', el.lazySrcset);

		return true;
	}

	return false;
};

Vue.directive('scroll', {
	bind(el, binding) {
		if (binding.arg === 'animate') {
			el.style.opacity = '0';
			el.style.visibility = 'hidden';
		} else if (binding.arg === 'load') {
			el.style.opacity = '0';
			el.style.visibility = 'hidden';

			el.lazySrc = el.getAttribute('src');
			el.lazySrcset = el.getAttribute('srcset');

			el.setAttribute('src', '');
			el.setAttribute('srcset', '');
		}

		el.onWindowScroll = (evt) => {
			let condition = false;

			if (binding.arg === 'animate' && typeof binding.value === 'string') {
				condition = animateOnScroll(evt, el, binding);
			} else if (binding.arg === 'load' && typeof binding.value === 'string') {
				condition = loadOnScroll(evt, el, binding);
			}

			if (typeof binding.value === 'function') {
				condition = binding.value(evt, el, binding);
			}

			if (condition) {
				window.removeEventListener('scroll', el.onWindowScroll);
			}
		};

		window.addEventListener('scroll', el.onWindowScroll);
	},
	inserted(el) {
		el.onWindowScroll();
	},
	unbind(el) {
		delete el.onWindowScroll;
		window.removeEventListener('scroll', el.onWindowScroll);
	}
});

export default Vue;
