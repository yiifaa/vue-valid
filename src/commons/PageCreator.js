import page from 'page'
export default {

  /**
   * 安装导航器
   * @param Vue
   * @param options
   */
  install   : function(Vue, options) {
    this.initPage(Vue, options);
    this.installMethods(Vue);
  },

  initPage     : function(Vue, options) {
    /**
    page({
      //激活页面点击
      click                       : true,
      //激活历史状态
      popstate                   : true,
      dispatch                   : true,
      hashbang                   : false,
      decodeURLComponents       : true
    });

    page("*", function(ctx, next) {
      console.debug(ctx);
      next();
    });
     **/
  },


  /**
   *
   * @param Vue
   * @param options
   */
  installMethods : function(Vue) {
    Vue.prototype.$register = function(url, callback) {
      page(url, callback)
    };

    Vue.prototype.$back   = function() {

    };

    Vue.prototype.$page  = page;

    Vue.prototype.$redirect = function(url) {
      page.redirect(url);
    };

    Vue.prototype.$forward = function(url) {
      page(url);
    };

    Vue.prototype.$start = function() {
      page.start();
    }
  }


}
