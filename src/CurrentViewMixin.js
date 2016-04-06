/**
 * Created by ganhuan on 2016/4/5.
 */

export default {

  /**
   * 当前视图
   */
  data   () {
    return {
      currentView : "defaultView",
      id           : null,
      query        : null,
      params       : null
    }
  },

  created () {
    this.$on("view.changed", this.setView);
  },

  methods : {

    setView (view = 'defaultView', params, query) {
      this.currentView = view;
      this.id           = params.id;
      this.params      = params;
      this.query       = query;
    }

  }

};
