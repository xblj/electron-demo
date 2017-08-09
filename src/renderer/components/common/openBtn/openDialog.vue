<template>
    <el-button type="default" @click="open">
        {{msg}}</el-button>
</template>
<script>
export default {
    data() {
        return {
            msg: '打开系统对话框'
        }
    },
    methods: {
        open() {
            let remote = this.$electron.remote;
            let dialog = remote.dialog;
            dialog.showMessageBox({
                type: 'info',
                button: ['ok', 'no'],
                title: '提示',
                detail: '这是一个单独的组件封装'
            });
        }
    }
}
</script>
<style scoped>

</style>
