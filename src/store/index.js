import Vue from 'vue'
import Vuex from 'vuex'
import User from "./modules/user"
import isLogin from "./modules/isLogin"
import proFile from "./modules/proFile"
import proFiles from "./modules/profiles"
import Loading from "./modules/loading"
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        User,
        isLogin,
        proFile,
        Loading,
        proFiles
    }
})
