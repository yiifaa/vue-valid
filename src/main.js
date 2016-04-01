import Vue from 'vue'
import App from './App'
import i18nMixin from './commons/i18nMixin'
import pageMixin from './commons/pageMixin'
import page from 'page'



new Vue({
  el: 'body',

  mixins : [i18nMixin, pageMixin],

  data      : function() {
    return {
      counter : 0
    };
  },

  components: {
	  App
  },

  created : function() {
    this.$register("/valid", (context, next) => {
      console.debug(context);
    });

    //let fn = (x, y = 2) => x + y;
    var g = ({x, y = 13}) => x + y;
    function fn({x, y = 17}) {
      return x + y;
    }
    function gn(x, {y = 3, z = 1} = {}) {
      return x + y + z;
    }

    function add(...values) {
      let sum = 0;
      for(var val of values) {
        sum += val;
      }
      return sum;
    }
    //this.counter = fn(5);
    this.counter = add(1, 2, 3);
  }


})
