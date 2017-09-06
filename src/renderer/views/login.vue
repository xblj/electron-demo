<template>
  <div>
    <el-form label-position="right" label-width="80px" :model="formData">
      <el-form-item label="用户名">
        <el-input v-model="formData.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formData.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login('ruleForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      this.$http.post('/login', { username: this.formData.username, password: this.formData.password }).then(res=>{
        this.$router.push('/logined')
      })
    }
  }
}
</script>
<style scoped>

</style>
