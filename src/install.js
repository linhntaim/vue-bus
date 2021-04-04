import {EventBus} from './event-bus'

export const install = Vue => {
    Vue.prototype.$bus = new EventBus()
}
