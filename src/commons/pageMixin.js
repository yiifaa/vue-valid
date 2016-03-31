/**
 * 页面导航注册组件
 */
import page from "page"
import Vue  from "vue"

export default {

  /**
   * 注册页面访问路径
   */
  created  : () => {
    //为vm对象添加page方法
    Vue.prototype.$page = page;
    page("/valid",  (context, next) => {
      console.debug(context);
    });
  }
}
