/**
 * 页面导航注册组件
 */
import Vue        from 'vue'
import page from 'page'
import PageCreator from './PageCreator'

export default {

  /**
   * 当前视图
   * @returns {{currentView: string}}
   */
  data () {
    return {
      currentView : ""
    };
  },

  /**
   * 注册页面访问路径
   */
  created  : function() {
    Vue.use(PageCreator, {});
  },


  methods  : {

    /**
     * 初始化路由器
     */
    initPage  : function() {
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
     * 注册导航路径
     */
    register  : function() {

    },



  }
}
