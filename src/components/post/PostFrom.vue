<template>
    <!-- post-from -->
    <div class="post-form mb-3">
        <div class="card card-info">
            <div class="card-header bg-info text-white">
                Say Somthing...
            </div>
            <div class="card-body">
                <form @submit.prevent="handleSubmit">
                    <TextAreaGroup name="text" placeholder="留言" v-model="text" :error="errors.text" />
                    <button type="submit" class="btn btn-dark">提交</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import TextAreaGroup from "../common/TextAreaGroup";
    export default {
        name: 'postrom',
        components: {
            TextAreaGroup
        },
        data() {
            return {
                text: "",
                errors: {}
            }
        },
        methods: {
            handleSubmit() {
                const user = this.$store.getters.user
                const newPost = {
                    text: this.text,
                    name: user.name,
                    avatar: user.avatar
                }

                this.$axios.post("/api/posts", newPost).then(result => {
                    this.errors = {}
                    this.text = ""
                    /* 事件公车 */
                    this.$emit("update")
                }).catch(err => {
                    if (err.response.data) {
                        this.errors = err.response.data
                    }
                })
            }
        },
    }
</script>


<style scoped>

</style>