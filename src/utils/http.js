import axios from "axios"
import store from "../store/index"
import router from "../router"
//请求拦截(发起请求前的操作)

axios.interceptors.request.use((config) => {
    //请求成功
    store.dispatch("setLoadingAsync", true)
    if (localStorage.getItem("jwtToken")) {
        config.headers.Authorization = localStorage.jwtToken
    }
    return config;
}, (error) => {
    //请求失败
    return Promise.reject(error);
});


//相应拦截（返回响应前的操作）

axios.interceptors.response.use((response) => {
    // 响应成功
    store.dispatch("setLoadingAsync", false)
    return response;
}, (error) => {
    // 响应失败
    store.dispatch("setLoadingAsync", false)
    const { status } = error.response
    if (status == 401) {
        alert("token失效，请重新登陆")
        localStorage.removeItem("jwtToken")
        store.dispatch("setIsLoginAsync", false)
        store.dispatch("setProfileAsync", null)
        store.dispatch("setUserAsync", null)

        router.push("/login")
    }
    return Promise.reject(error);
});

export default axios
