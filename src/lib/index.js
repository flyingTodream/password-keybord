// /**
//  * Created by Administrator on 2017/10/10.
//  */

// import vuepasswordKeybord from './passwordKeybord.vue';
// import Vue from 'vue'
// // const passwordKeybord = {
// //     install(Vue, options) {
// //         Vue.component(vuepasswordKeybord.name, vuepasswordKeybord)
// //     }
// // }
// // Vue.use(passwordKeybord);
// Vue.component(vuepasswordKeybord.name, vuepasswordKeybord)
// // Vue.component('my-component-name', { /* ... */ })
// export default vuepasswordKeybord;

/**
 * 
 */
import vuepasswordKeybord from './passwordKeybord.vue';

const passwordKeybord = {
    install(Vue, options) {
        Vue.component(vuepasswordKeybord.name, vuepasswordKeybord)
    }
}
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(passwordKeybord);
}

export default passwordKeybord;