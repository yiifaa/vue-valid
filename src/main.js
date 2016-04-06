import Vue from 'vue'
import App from './App'
import i18nMixin from './commons/i18nMixin'
import pageMixin from './commons/pageMixin'
import page from 'page'
//import qs        from 'qs'
import qs from './QueryString'

/**
 * 提供基础性服务
 */
new Vue({

  el: 'body',

  mixins : [i18nMixin, pageMixin],

  /**
   * 只注册唯一的组件
   */
  components: {
	  App
  },

  created : function() {
    'use strict'
    this.route();

  },

  methods : {

    route () {

      let viewFn = (context, next) => {
        let params = context.params,
          view   = params.view;
        alert(1000)
        //context.query = qs.parse(context.querystring);
        this.$broadcast("view.changed", view, params, query, context);
      };
      /**
      this.$register('*', (ctx, next) => {
        ctx.query = qs.parse(ctx.querystring);
        alert(2000)
        //next();
      })
       */
      //this.$register("/", viewFn);
      //this.$register("/:view", viewFn);
      this.$register("/:view/:id", viewFn);
      this.$start();
    }

  }


})
