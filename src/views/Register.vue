<template>
    <!-- Register -->
    <div class="register">
        <div class="container">
            <div class="row">
                <div class="col-md-8 m-auto">
                    <h1 class="display-4 text-center">注册</h1>
                    <p class="lead text-center">创建一个新的账号</p>
                    <form @submit.prevent="handleSubmit" autocomplete="off" method="post">


                        <TextFieldGroup type="text" placeholder="Name" name="name" info="" :error="errors.name"
                            v-model="newUser.name" />


                        <TextFieldGroup type="email" placeholder="Email Address" name="email" info="This site uses Gravatar so if you want a profile
                        image, use a
                        Gravatar email" :error="errors.email" v-model="newUser.email" />

                        <TextFieldGroup type="password" placeholder="password" name="password" info=""
                            :error="errors.password" v-model="newUser.password" />

                        <TextFieldGroup type="password" placeholder="password2" name="password2" info=""
                            :error="errors.password2" v-model="newUser.password2" />

                        <input type="submit" class="btn btn-info btn-block mt-4" />
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TextFieldGroup from "../components/common/TextFieldGroup"
    export default {
        name: 'register',
        data() {
            return {
                newUser: {
                    name: "",
                    email: "",
                    password: "",
                    password2: ""
                },
                errors: {}
            }
        },
        methods: {
            handleSubmit() {
                this.$axios.post("api/users/register", this.newUser).then(result => {
                    //页面跳转(四种方法)
                    this.$router.push("/login")
                    //this.$router.push({ name: "login", params: { param: "helloWorld" } })
                    //this.$router.replace("/login")
                    //this.$router.replace({ name: "login", params: { param: "helloWorld" } })
                }).catch(err => {
                    console.log(err.response.data)
                })
            }
        },
        components: {
            TextFieldGroup
        }
    }
</script>


<style scoped>

</style>
<!-- 

    同源策略：
    http://localhost:8080/
        1.请求头：
            http://
            https://
            file://
        2.域名(ip):
            localhost
            127.0.0.1
            taobao.com
        3.端口号
            :8080
            :5000

    三者一样则同源
    三者不一样则跨域

    解决跨域：
        服务器代理
        前段代理
        服务器处理
        jsonP
 -->