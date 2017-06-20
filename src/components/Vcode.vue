<template>
  <el-row>
    <el-col>
      <h3 style="margin-top: 30px;">验证码填写完成后，请点击“我要报名”按钮</h3>
      <div style="margin-top: 30px; line-height: 36px;height: 36px;">
        <el-form :model="form" ref="form" :inline="true" :rules="rules">
          <el-form-item prop="vcode">
            <el-input style="height: 36px;" v-model="form.vcode" placeholder="输入验证码"></el-input>
          </el-form-item>
          <img style="height: 36px" src="/static/vcode.jpg" alt="">
        </el-form>
      </div>
      <div style="margin-top: 30px;">
        <el-button @click="onSubmit">我要报名</el-button>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: 'vcode',
    data () {
      return {
        form: {
          vcode: ''
        },
        rules: {
          vcode: [
            { required: true, message: '请输入活动名称', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      onSubmit () {
        this.$refs['form'].validate(valid => {
          if (valid && this.form.vcode === '金蝉脱壳') {
            this.$router.push({ path: '/main/step1' })
          } else {
            alert('验证码错误')
            return false;
          }
        })
      }
    }
  }
</script>