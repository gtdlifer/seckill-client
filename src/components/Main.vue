<template>
  <div>
    <main-header></main-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import MainHeader from './MainHeader'
  
  export default {
    name: 'main',
    data () {
      return {
        form: {
          vcode: '',
          username: ''
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
    },
    components: {
      MainHeader
    }
  }
</script>