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
    page({
      //激活页面点击
      click                       : true,
      //激活历史状态
      popstate                   : true,
      dispatch                   : true,
      hashbang                   : false,
      decodeURLComponents       : true
    });
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

    Vue.prototype.$pathTo = function(url) {
      path(url);
    };
  }


}
