<template>
  <div>
    <h3>其他信息</h3>
    <el-row style="width: 80%; margin: auto; border: 1px solid #ccc;padding: 20px">
      <el-col>
        <el-form ref="form" :rules="rules" :model="form" label-width="200px">
          <el-row>
            <el-col :span="24">
              <el-form-item label="幼儿接种卡片的编号 " prop="card">
                <el-input v-model="form.card"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item label="幼儿的兴趣爱好 " prop="habbit">
                <el-input v-model="form.habbit"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item label="幼儿感兴趣的食物 " prop="food">
                <el-input v-model="form.food"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item label="幼儿的作息时间 " prop="time">
                <el-input v-model="form.time"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-button @click="onSubmit">完成</el-button>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  
  export default {
    name: 'main-step3',
    data () {
      return {
        form: {
          card: '',
          habbit: '',
          time: '',
          food: ''
        },
        rules: {
          card: [
            { required: true, message: '请输入接种卡片的编号', trigger: 'blur' },
          ],
          habbit: [
            { required: true, message: '请输入兴趣爱好', trigger: 'blur' },
          ],
          time: [
            { required: true, message: '请输入作息时间', trigger: 'blur' },
          ],
          food: [
            { required: true, message: '请输入感兴趣的食物', trigger: 'blur' },
          ]
        }
      }
    },
    methods: {
      onSubmit () {
        let unMountTargets = ['step1', 'step2']
        let mountedTargets = {}
        let invalidTargets = []
        let validTargets = []
        this.$refs['form'].validate(valid => {
          this.$bus.$trigger('validate', null, (err, args) => {
            args && args.map(({ target, valid }) => {
              mountedTargets[target] = valid
              unMountTargets = unMountTargets.filter(t => t != target)
              if (!valid) {
                return invalidTargets.push(target)
              }
              validTargets.push(target)
            })
            if (unMountTargets.length) {
              unMountTargets.forEach(t => {
                this.$bus.$addon[t] = true
              })
              return
            }
            if (invalidTargets.length) {
              return
            }
            // success
            this.$router.push({ path: '/result' });
          })
        })
      }
    }
  }
</script>