<template>
  <!-- 个人经验 -->
  <div>
    <h4 class="mb-2">个人经验</h4>
    <table class="table">
      <thead>
        <tr>
          <th>公司</th>
          <th>工作内容</th>
          <th>工作时间</th>
          <th />
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in experience" :key="item._id">
          <td>{{item.company}}</td>
          <td>{{item.title}}</td>
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
      experience: Array
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