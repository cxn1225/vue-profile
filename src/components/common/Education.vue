<template>
    <!-- 个人经验 -->
    <div>
        <h4 class="mb-2">教育</h4>
        <table class="table">
            <thead>
                <tr>
                    <th>学校</th>
                    <th>学历</th>
                    <th>时间</th>
                    <th />
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in education" :key="item._id">
                    <td>{{item.school}}</td>
                    <td>{{item.degree}}</td>
                    <td>
                        {{item.from}} ~ {{item.to?item.to:"至今"}}
                    </td>
                    <td>
                        <button class="btn btn-danger" @click="handleExpDelete(item._id)">
                            删除
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            education: Array
        },
        methods: {
            handleExpDelete(id) {
                this.$emit("handleDashDelete", id)
            }
        },
    }
</script>


<style scoped>

</style>