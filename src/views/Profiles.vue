<template>
    <div class="profiles">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="display-4 text-center">开发者们</h1>
                    <p class="lead text-center">让世界丰富多彩的你们!</p>
                    <template v-if="profiles.length > 0">
                        <ProfileTtem v-for="(item, index) in profiles" :key="item._id" :profileItem="item" />
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import ProfileTtem from "../components/profile/ProfileItem"
    export default {
        data() {
            return {
                profiles: []
            }
        },
        created() {
            this.getProfiles()
        },
        methods: {
            getProfiles() {
                this.$axios.get("/api/profile/all").then(result => {
                    this.profiles = result.data
                    this.$store.dispatch("setProfilesAsync", result.data)
                })
            }
        },
        components: {
            ProfileTtem
        }
    }
</script>