<template>
    <el-button type="default" @click="open">{{msg}}</el-button>
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
                options: {
                    type: 'warning',
                    button: ['ok', 'no'],
                    title: '提示',
                    detail: '这是个测试信息'
                },
            });
        }
    }
}
</script>
<style scoped>

</style>
