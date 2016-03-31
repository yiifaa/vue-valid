import Vue from 'vue'
import App from './App'
import i18nMixin from './commons/i18nMixin'

new Vue({
  el: 'body',

  mixins : [i18nMixin],

  components: {
	  App
	}
})
