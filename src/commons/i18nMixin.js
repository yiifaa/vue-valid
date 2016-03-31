import Vue from "vue"
import VueI18n from "vue-i18n"
import zh      from "./message_zh_CN"

export default {
	created : () => {
		console.debug(zh);
		Vue.use(VueI18n, {
			lang    : "zh_CN",
			locales : {
				"zh_CN" : zh
			} 
		})
	}
}