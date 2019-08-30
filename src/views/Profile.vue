<template>
    <div class="profile">
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <a class="btn btn-light mb-3 float-left" @click.prevent="$router.go(-1)">返回个人信息</a>

                </div>
                <div>
                    <ProfileHeader v-if="profile != null" :profile="profile" />
                    <ProfileAbout v-if="profile != null" :profile="profile" />
                    <ProfileCreds v-if="profile != null && (profile.experience || profile.education)"
                        :experience="profile.experience" :education="profile.education" />
                    <ProfileGithub v-if="profile && profile.githubusername" :username="profile.githubusername" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ProfileHeader from "../components/profile/ProfileHeader"
    import ProfileAbout from "../components/profile/ProfileAbout"
    import ProfileCreds from "../components/profile/ProfileCreds"
    import ProfileGithub from "../components/profile/ProfileGithub"
    export default {
        data() {
            return {
                profile: null
            }
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.getProfileByHandle(to.params.handle)
            })
        },
        components: {
            ProfileHeader,
            ProfileAbout,
            ProfileCreds,
            ProfileGithub
        },

        methods: {
            getProfileByHandle(handle) {
                //console.log(handle)
                this.$axios.get(`/api/profile/handle/${handle}`).then(result => {
                    this.profile = result.data
                })
            }
        },
    }
</script>


<style scoped>

</style>