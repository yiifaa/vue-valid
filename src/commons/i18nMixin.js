import Vue from "vue"
import VueI18n from "vue-i18n"
import zh      from "./message_zh_CN"

export default {

  /**
   * 注册i18n
   */
	created : () => {
		Vue.use(VueI18n, {
			lang    : "zh_CN",
			locales : {
				"zh_CN" : zh
			}
		})
	}
}
