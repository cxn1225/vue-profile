<template>
    <div class="login">
        <div class="container">
            <div class="row">
                <div class="col-md-8 m-auto">
                    <h1 class="display-4 text-center">登录</h1>
                    <p class="lead text-center">用正确的账号登录</p>
                    <form @submit.prevent="handleSubmit" autocomplete="off" method="post">
                        <TextFieldGroup type="email" placeholder="Email Address" name="email" info="This site uses Gravatar so if you want a profile
                            image, use a
                            Gravatar email" :error="errors.email" v-model="user.email" />

                        <TextFieldGroup type="password" placeholder="password" name="password" info=""
                            :error="errors.password" v-model="user.password" />

                        <input type="submit" class="btn btn-info btn-block mt-4" value="提交" />
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import jwt_decode from "jwt-decode"
    import TextFieldGroup from "../components/common/TextFieldGroup"
    export default {
        name: 'login',
        data() {
            return {
                user: {
                    email: "",
                    password: ""
                },
                errors: {}
            }
        },
        methods: {
            handleSubmit() {
                this.$axios.post("api/users/login", this.user).then(result => {
                    //将token存在本地储存
                    const { token } = result.data
                    localStorage.setItem("jwtToken", token)

                    //解析token
                    const decoded = jwt_decode(token)

                    //将解析完的token存在vuex中
                    this.$store.dispatch("setUserAsync", decoded)

                    //将登陆状态isLogin存在vuex中
                    this.$store.dispatch("setIsLoginAsync", !this.isEmpty(decoded))

                    //页面跳转
                    this.$router.push("/dashboard")
                }).catch(err => {
                    if (err.response.data) {
                        this.errors = err.response.data
                    }

                })
            },
            isEmpty(value) {      //判断元素是否为空(true)
                return value === undefined ||
                    value === null ||
                    (typeof value === "object" && Object.keys(value).length === 0 ||
                        (typeof value === "string" && value.trim().length === 0))
            }
        },
        components: {
            TextFieldGroup
        }
    }
</script>


<style scoped>

</style>