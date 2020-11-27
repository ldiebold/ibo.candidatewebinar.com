import Vue from 'vue'
import dayjs from 'dayjs'

var customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)

Vue.prototype.$dayjs = dayjs
