<template>
    <div class="form-group">
        <select class="form-control form-control-lg" :class="{'is-invalid':error}" :name="name" :value="value"
            @input="$emit('input',$event.target.value)">
            <option v-for="(item, index) in options" :key="index" :value="item.value">{{item.value}}</option>

        </select>
        <div class="invalid-feedback" v-if="error">{{error}}</div>
        <small v-if="info" className="form-text text-muted">{{info}}</small>
    </div>
</template>

<script>
    export default {
        name: 'selectlistgroup',
        props: {
            name: "",
            value: String,
            error: String,
            info: String,
            options: Array
        },

    }
</script>


<style scoped>

</style>