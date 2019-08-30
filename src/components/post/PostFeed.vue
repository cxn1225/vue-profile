<template>
    <!-- post-display -->
    <div class="posts">
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-2">
                    <a>
                        <img class="rounded-circle d-none d-md-block" :src="post.avatar" width="150px" alt="" />
                    </a>
                    <br />
                    <p class="text-center">{{post.name}}</p>
                </div>
                <div class="col-md-10">
                    <p class="lead">{{post.text}}</p>
                    <button @click="handleLike(post._id)" type="button" class="btn btn-light mr-1">
                        <i class="text-info fa fa-thumbs-up"></i>
                        <span class="badge badge-light">{{post.likes.length}}</span>
                    </button>
                    <button @click="handleunLike(post._id)" type="button" class="btn btn-light mr-1">
                        <i class="text-secondary fa fa-thumbs-down"></i>
                    </button>
                    <a href="post.html" class="btn btn-info mr-1">
                        留言
                    </a>
                    <!-- 删除 -->
                    <button @click="handleDelete(post._id)" v-if="user != null && user.id == post.user" type="button"
                        class="btn btn-danger mr-1">
                        <i class="fa fa-times" />
                    </button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'postfeed',
        props: {
            post: Object
        },
        computed: {
            user() {
                return this.$store.getters.user
            }
        },
        methods: {
            handleDelete(id) {
                //console.log(id)
                this.$axios.delete(`/api/posts/${id}`).then(result => {
                    this.$emit("update")
                })
            },
            handleLike(id) {       //点赞
                this.$axios.post(`/api/posts/like/${id}`).then(result => {
                    this.$emit("update")
                }).catch(err => {       //已点过
                    alert(err.response.data.alreadyliked)
                })
            },
            handleunLike(id) {     //取消点赞
                this.$axios.post(`/api/posts/unlike/${id}`).then(result => {
                    this.$emit("update")
                }).catch(err => {       //未过点赞
                    alert(err.response.data.notliked)
                })
            }
        },
    }
</script>


<style scoped>

</style>