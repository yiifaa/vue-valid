/**
 * 页面导航注册组件
 */
import Vue        from 'vue'
import PageCreator from './PageCreator'

export default {

  /**
   * 注册页面访问路径
   */
  created  : function() {
    Vue.use(PageCreator, {});
  }
}
