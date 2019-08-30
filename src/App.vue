<template>
  <div id="app">
    <app-Nav />
    <keep-alive>
      <router-view />
    </keep-alive>
    <app-Footer />
    <Loading v-show="loading" />
  </div>
</template>
<script>
  import Nav from "./components/Nav.vue"
  import Footer from "./components/Footer.vue"
  import Landing from "./views/Landing.vue"
  import jwt_decode from "jwt-decode"
  import Loading from "./components/common/Loading.vue"
  import { mapGetters } from "vuex"
  export default {
    name: "app",
    created() {
      if (localStorage.jwtToken) {
        const decoded = jwt_decode(localStorage.jwtToken)
        //token验证

        //获取当前时间
        const cuttentTime = Date.now() / 1000
        //判断是否过期
        if (decoded.exp < cuttentTime) {
          //已经过期
          this.$store.dispatch("setUserAsync", {})
          this.$store.dispatch("setIsLoginAsync", false)
          this.$router.push("/login")
        } else {
          //未过期
          this.$store.dispatch("setUserAsync", decoded)
          this.$store.dispatch("setIsLoginAsync", !this.isEmpty(decoded))
        }

      }
    },
    components: {
      "app-Nav": Nav,
      "app-Footer": Footer,
      Loading
    },
    methods: {
      isEmpty(value) {      //判断元素是否为空(true)
        return value === undefined ||
          value === null ||
          (typeof value === "object" && Object.keys(value).length === 0 ||
            (typeof value === "string" && value.trim().length === 0))
      }
    },
    computed: mapGetters(["loading"])
  }
</script>
<style>

</style>