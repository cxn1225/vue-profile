<template>
    <div class="feed">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <PostFrom @update="updatePost" />
                    <PostFeed @update="updatePost" v-for="(item, index) in posts" :key="item.id" :post="item" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PostFrom from "../components/post/PostFrom"
    import PostFeed from "../components/post/PostFeed"
    export default {
        name: '',
        beforeRouteEnter(to, from, next) {
            next(vm => vm.getPosts())
        },
        methods: {
            getPosts() {
                this.$axios.get("/api/posts").then(result => {
                    this.posts = result.data
                })
            },
            updatePost() {
                this.getPosts()
            }
        },
        components: {
            PostFrom,
            PostFeed
        },
        data() {
            return {
                posts: []
            }
        }
    }
</script>


<style scoped>

</style>