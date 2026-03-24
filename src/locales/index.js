import VueI18n from 'vue-i18n'
import Vue from 'vue'
let zh = require('./zh_cn.js')

Vue.use(VueI18n)

export default new VueI18n({
	locale: 'zh',
	messages: {
		zh 
	}
})
