<template>
  <el-row>
    <el-col>
      <h3 style="margin-top: 30px;">成功提交，您的报名用时为{{ spendTime }}</h3>
      <div v-if="!rankList">
        <h4>输入用户名，查看排名情况</h4>
        <el-form :model="form" ref="form" :inline="true" :rules="rules">
          <el-form-item prop="username">
            <el-input v-model="form.username"></el-input>
            <el-button @click="onSubmit">查看排名</el-button>
          </el-form-item>
        </el-form>
      </div>

      <el-table
        v-if="rankList"
        :data="rankList"
        style="width: 100%">
        <el-table-column
          prop="username"
          label="用户名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="spendTime"
          label="耗时"
          width="180">
        </el-table-column>
      </el-table>

      <h3 v-if="myRank">您的排名为： <span style="color: red">{{ myRank }}</span> 再接再厉 ~</h3>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: 'result',
    data () {
      return {
        rankList: null,
        myRank: null,
        spendTime: null,
        form: {
          username: '匿名'
        },
        rules: {
          username: [
            { required: true, message: '请输入昵称', trigger: 'blur' }
          ]
        }
      }
    },
    mounted () {
      this.spendTime = Math.ceil((Date.now() - this.$bus.$addon.startTime) / 1000)
    },
    methods: {
      onSubmit () {
        this.$refs['form'].validate(valid => {
          if (valid) {
            let rankId = null
            this.$api.post('/api/rank', { username: this.form.username, spendTime: this.spendTime })
              .then(res => {
                rankId = res.data._id
                return this.$api.get('/api/rank')
              })
              .then(res => {
                this.rankList = res.data
                return this.$api.get(`/api/rank/${rankId}`)
              })
              .then(res => {
                this.myRank = res.data
              })
          }
        })
      }
    }
  }
</script>