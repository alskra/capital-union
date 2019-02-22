// Styles
import 'normalize.css';
import '../scss/base.scss';

// Polyfills
import cssVars from 'css-vars-ponyfill';
import 'focus-visible';
import focusWithin from 'focus-within';

import Vue from 'vue';

cssVars();

focusWithin(document, {
	attr: false,
	className: 'focus-within',
	force: true,
});

Vue.config.productionTip = false;

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
Vue.directive('scroll', {
	bind(el, binding) {
		if (binding.arg === 'animate') {
			el.style.visibility = 'hidden';
		}

		el.onWindowScroll = (evt) => {
			if (binding.value(evt, el, binding)) {
				window.removeEventListener('scroll', el.onWindowScroll);
			}
		};

		window.addEventListener('scroll', el.onWindowScroll);
	},
	unbind(el) {
		window.removeEventListener('scroll', el.onWindowScroll);
	}
	// inserted(el, binding) {
	//
	// }
});

export default Vue;
