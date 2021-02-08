import Vue from 'vue'
import {
  BDatetimeInput, BVideoUrlInput
} from '@agripath/quasar-ui-base-components/src'

Vue.prototype.$schemaFormConfig = {
  fieldComponents: {
    datetime: BDatetimeInput,
    video_url: BVideoUrlInput
  }
}
