import Vue from 'vue'
import App from './App'
import i18nMixin from './commons/i18nMixin'
import pageMixin from './commons/pageMixin'
import page from 'page'

new Vue({
  el: 'body',

  mixins : [i18nMixin, pageMixin],

  components: {
	  App
  },

  created : () => {
	page("/valid", (context, next) => {
		console.debug(context);
	});
	page.start();
  }

})
