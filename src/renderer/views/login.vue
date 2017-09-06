<template>
  <div>
    <!-- <el-form :label-position="labelPosition" label-width="80px" :model="formData">
        <el-form-item label="用户名">
          <el-input v-model="formData.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="formData.pwd"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login('ruleForm')">登录</el-button>
        </el-form-item>
      </el-form> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        pwd: ''
      }
    }
  },
  methods: {
    login() {
      // this.$http
    }
  }
}
</script>
<style scoped>

</style>
