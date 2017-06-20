<template>
  <el-row>
    <el-col>
      <ul class="main_header_container">
        <li><router-link :to="{ path: '/main/step1' }">Step 1</router-link></li>
        <li><router-link :to="{ path: '/main/step2' }">Step 2</router-link></li>
        <li><router-link :to="{ path: '/main/step3' }">Step 3</router-link></li>
      </ul>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: 'main-header',
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
            this.$router.push({ path: '/' })
          } else {
            alert('验证码错误')
            return false;
          }
        })
      }
    }
  }
</script>

<style>
  .main_header_container {
    margin: 0;
    padding: 0;
  }
  .main_header_container li {
    width: 33.333333333%;
    height: 120px;
    line-height: 120px;
    margin: 0;
    list-style-type:none;
    float: left;
    font-size: 50px;
    color: white;
  }
  .main_header_container li a {
    text-decoration: none;
    color: white;
  }
  .main_header_container li:nth-child(1){
    background: #b36d6d;
  }
  .main_header_container li:nth-child(2){
    background: #5f87b9;
  }
  .main_header_container li:nth-child(3){
    background: #7ac1a7;
  }
</style>