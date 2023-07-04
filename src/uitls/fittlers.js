import Vue from 'vue';

Vue.filter("FormatDate",value=>{
    return value && new Date(value).toLocaleDateString().replaceAll("/","-")
})