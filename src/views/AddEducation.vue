<template>
    <div class="section add-experience">
        <div class="container">
            <div class="row">
                <div class="col-md-8 m-auto">
                    <a class="btn btn-light" @click.prevent="$router.go(-1)">返回</a>
                    <h1 class="display-4 text-center">添加教育经历</h1>
                    <p class="lead text-center">有关于教育的任何经验</p>
                    <small class="d-block pb-3">* 为必填项</small>
                    <form @submit.prevent="handleSubmit">
                        <TextFieldGroup v-model="msgInfo.school" placeholder="* 学校" name="school"
                            :error="errors.school" />
                        <TextFieldGroup v-model="msgInfo.degree" placeholder="* 学历" name="degree"
                            :error="errors.degree" />
                        <TextFieldGroup v-model="msgInfo.fieldofstudy" placeholder="* 专业" name="fieldofstudy"
                            :error="errors.fieldofstudy" />
                        <h6>开始时间</h6>
                        <TextFieldGroup v-model="msgInfo.from" type="date" name="from" :error="errors.from" />
                        <h6>结束时间</h6>
                        <TextFieldGroup v-model="msgInfo.to" type="date" name="to" :error="errors.to"
                            :disabled="msgInfo.current" />
                        <div class="form-check mb-4">
                            <input class="form-check-input" type="checkbox" name="current" value=""
                                v-model="msgInfo.current" id="current" />
                            <label class="form-check-label" for="current">
                                在校
                            </label>
                        </div>
                        <TextFieldGroup v-model="msgInfo.description" placeholder="描述" name="description"
                            :error="errors.description" info="更多关于教育经历的内容" />

                        <input type="submit" class="btn btn-info btn-block mt-4" />
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import TextFieldGroup from "../components/common/TextFieldGroup";
    import TextAreaGroup from "../components/common/TextAreaGroup";

    export default {
        data() {
            return {
                msgInfo: {
                    school: "",
                    degree: "",
                    fieldofstudy: "",
                    from: "",
                    to: "",
                    current: false,
                    description: ""
                },
                errors: {}
            };
        },
        components: {
            TextFieldGroup, TextAreaGroup
        },
        methods: {
            handleSubmit() {
                this.$axios.post("/api/profile/education", this.msgInfo).then(res => {
                    this.errors = {}
                    this.$router.push("/dashboard")

                }).catch(err => {
                    if (err.response.data) {
                        this.errors = err.response.data
                    }
                })
            }
        },
    }
</script>