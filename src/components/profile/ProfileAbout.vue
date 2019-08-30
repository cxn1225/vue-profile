<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card card-body bg-light mb-3">
                <h3 class="text-center text-info">米斯特吴个人简介</h3>
                <p class="lead">
                    <span v-if="profile.bio">{{profile.bio}}</span>
                    <span v-else>???</span>
                </p>
                <hr />
                <h3 class="text-center text-info">技能</h3>
                <div class="row">
                    <div class="d-flex flex-wrap justify-content-center align-items-center">
                        <div v-for="(item, index) in profile.skills" :key="index" class="p-3">
                            <i class="fa fa-check"></i> {{item}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'profileabout',
        props: {
            profile: {

            }
        }
    }
</script>


<style scoped>

</style>