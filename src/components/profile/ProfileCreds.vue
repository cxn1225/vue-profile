<template>
    <!-- Profile -->
    <div class="row">
        <div v-if="experience.length>0" class="col-md-6">
            <h3 class="text-center text-info">经验</h3>
            <ul class="list-group">
                <li v-for="(item, index) in experience" :key="index" class="list-group-item">
                    <h4>{{item.company}}</h4>
                    <p>{{item.from}} - {{item.to?item.to:"至今"}}</p>
                    <p>
                        <strong>职位:</strong> {{item.title}}
                    </p>
                    <p>
                        <strong>描述:</strong> {{item.descriping}}
                    </p>
                </li>
            </ul>
        </div>
        <div v-if="education.length>0" class="col-md-6">
            <h3 class="text-center text-info">教育</h3>
            <ul class="list-group">
                <li v-for="(item, index) in education" :key="index" class="list-group-item">
                    <h4>{{item.school}}</h4>
                    <p>{{item.from}} - {{item.to?item.to:"在校"}}</p>
                    <p>
                        <strong>学历: </strong>{{item.degree}}</p>
                    <p>
                        <strong>专业: </strong>{{item.fieldofstudy}}</p>

                    <p>
                        <strong>描述:</strong> {{item.descriping}}
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'profilecreds',
        props: {
            experience: Array,
            education: Array
        }
    }
</script>


<style scoped>

</style>