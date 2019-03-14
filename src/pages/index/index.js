import Vue from '../../js/base';
import Vuex from 'vuex';
import 'fullpage.js/dist/fullpage.min.css';
import '../../js/fullpage.js/vendors/scrolloverflow';
import VueFullPage from 'vue-fullpage.js';
import PageIndex from '../../components/PageIndex';

Vue.use(Vuex);
Vue.use(VueFullPage);

const store = new Vuex.Store({
	state: {
		feedbackFormShow: false,
		fullpageApi: null
	},
	mutations: {
		toggleFeedbackFormShow(state, show = false) {
			state.feedbackFormShow = show ? true : !state.feedbackFormShow;
		},
		setFullpageApi(state, fullpageApi) {
			state.fullpageApi = fullpageApi;
		}
	}
});

new Vue({
	store,
	...PageIndex
}).$mount('base-page');
