<template>
    <div class="dashboard">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="display-4">仪表盘</h1>

                    <p v-if="user != null && profile != null" class="lead text-muted">
                        <router-link :to="{name:'profile',params:{handle:profile.handle}}">Hello {{user.name}}
                        </router-link>
                    </p>
                    <div v-if="profile != null">
                        <ProfilrActived />

                        <!-- 展示工作经验和教育经历 -->
                        <Experience :experience="profile.experience" @handleDashDelete="handleExpDelete" />
                        <Education :education="profile.education" @handleDashDelete="handleEduDelete" />

                        <!--  删除账户 -->
                        <div style="margin-bottom: 60px;">
                            <button class="btn btn-danger" @click="deleteClick">
                                删除当前账户
                            </button>
                        </div>
                    </div>
                    <div v-else>
                        <p>请添加个人信息</p>
                        <router-link to="/createprofile" class="btn btn-lg btn-info">添加个人信息</router-link>
                    </div>



                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ProfilrActived from "../components/common/ProfilrActived"
    import Experience from "../components/common/Experience"
    import Education from "../components/common/Education"
    import { mapGetters } from "vuex"
    export default {
        name: 'dashboard',
        computed: mapGetters(["user"]),
        data() {
            return {
                profile: null
            }
        },
        created() {
            this.getProfileData()
        },
        methods: {
            getProfileData() {
                this.$axios.get("/api/profile").then(result => {
                    this.profile = result.data
                    this.$store.dispatch("setProfileAsync", result.data)
                }).catch(err => {
                    this.profile = null
                    this.$store.dispatch("setProfileAsync", null)
                })
            },
            deleteClick() {
                this.$axios.delete("/api/profile").then(result => {
                    this.profile = null
                    //vuex状态初始化
                    this.$store.dispatch("setIsLoginAsync", false)
                    this.$store.dispatch("setProfileAsync", null)
                    this.$store.dispatch("setUserAsync", null)

                    this.$router.push("/login")
                }).catch(error => {
                    alert(error.response.data)
                })
            },
            handleExpDelete(id) {
                this.$axios.delete("/api/profile/experience/" + id).then(result => {
                    this.profile = result.data
                })
            },
            handleEduDelete(id) {
                this.$axios.delete("/api/profile/education/" + id).then(result => {
                    this.profile = result.data
                })
            }
        },
        components: {
            ProfilrActived,
            Experience,
            Education
        }
    }
</script>


<style scoped>

</style>