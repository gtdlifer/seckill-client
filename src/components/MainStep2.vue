<template>
  <div>
    <h3>监护人信息</h3>
    <el-row style="width: 80%; margin: auto; border: 1px solid #ccc;padding: 20px">
      <el-col>
        <el-form ref="form" :model="form" :rules="rules" label-width="120px">
          <el-row>
            <el-col>父亲基本信息</el-col>
          </el-row>
          <el-row> 
            <el-col :span="11">
              <el-form-item label="姓名: " prop="name1">
                <el-input v-model="form.name1"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="11" :offset="2">
              <el-form-item label="证件类型: " prop="idType1">
                <el-select v-model="form.idType1">
                  <el-option value="身份证"></el-option>
                  <el-option value="军人证"></el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :span="11">
              <el-form-item label="身份证号码: " prop="idCard1">
                <el-input @focus="onIdCardShow1" :readonly="true" v-model="form.idCard1"></el-input>
                <id-card v-if="isIdCardShow1" @deleteNum="onDeleteNum1" @onSubmit="onIdCardSubmit1" @selectNum="onSelectNum1"></id-card>
              </el-form-item>
            </el-col>

            <el-col :span="24">
              <el-form-item label="工作单位: " prop="address1">
                <el-input class="address" v-model="form.address1"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col>母亲基本信息</el-col>
          </el-row>
          <el-row> 
            <el-col :span="11">
              <el-form-item label="姓名: " prop="name2">
                <el-input v-model="form.name2"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="11" :offset="2">
              <el-form-item label="证件类型: " prop="idType2">
                <el-select v-model="form.idType2">
                  <el-option value="身份证"></el-option>
                  <el-option value="军人证"></el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :span="11">
              <el-form-item label="身份证号码: " prop="idCard2">
                <el-input @focus="onIdCardShow2" :readonly="true" v-model="form.idCard2"></el-input>
                <id-card v-if="isIdCardShow2" @deleteNum="onDeleteNum2" @onSubmit="onIdCardSubmit2" @selectNum="onSelectNum2"></id-card>
              </el-form-item>
            </el-col>

            <el-col :span="24">
              <el-form-item label="工作单位: " prop="address2">
                <el-input class="address" v-model="form.address2"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <router-link :to="{ path: '/main/step3' }">下一步</router-link>
        </el-form>
      </el-col>
    </el-row>
  </div>
  
</template>

<script>
  import idCard from './idCard'

  export default {
    name: 'main-step2',
    data () {
      return {
        form: {
          name1: '',
          name2: '',
          idType1: '',
          idType2: '',
          idCard1: '',
          idCard2: '',
          address1: '',
          address2: ''
        },
        rules: {
          name1: [
            { required: true, message: '请输入父亲姓名', trigger: 'blur' },
          ],
          name2: [
            { required: true, message: '请输入母亲姓名', trigger: 'blur' },
          ],
          idType1: [
            { required: true, message: '请输入父亲证件类型', trigger: 'blur' },
          ],
          idType2: [
            { required: true, message: '请输入母亲证件类型', trigger: 'blur' },
          ],
          idCard1: [
            { required: true, message: '请输入父亲证件号码', trigger: 'change' },
          ],
          idCard2: [
            { required: true, message: '请输入母亲证件号码', trigger: 'change' },
          ]
        },
        isIdCardShow1: false,
        isIdCardShow2: false
      }
    },
    mounted () {
      if (this.$bus.$addon['step2']) {
        delete this.$bus.$addon['step2']
        this.$refs['form'].validate(valid => {})
      }
      this.$bus.$subscribe('validate', function validate2() {
        return new Promise(resolve => {
          this.$refs['form'].validate(valid => {
            resolve({
              target: 'step2',
              valid
            })
          })
        })
      }.bind(this))
    },
    methods: {
      onIdCardShow1 () {
        this.isIdCardShow1 = true;
      },
      onIdCardShow2 () {
        this.isIdCardShow2 = true;
      },
      onDeleteNum1 () {
        if (!this.form.idCard1.length) {
          return
        }
        this.form.idCard1 = this.form.idCard1.slice(0, this.form.idCard1.length - 1)
      },
      onDeleteNum2 () {
        if (!this.form.idCard2.length) {
          return
        }
        this.form.idCard2 = this.form.idCard2.slice(0, this.form.idCard2.length - 1)
      },
      onIdCardSubmit1 () {
        this.isIdCardShow1 = false;
      },
      onIdCardSubmit2 () {
        this.isIdCardShow2 = false;
      },
      onSelectNum1 (id) {
        this.form.idCard1 += id
      },
      onSelectNum2 (id) {
        this.form.idCard2 += id
      }
    },
    components: {
      idCard
    }
  }
</script>

<style>
  .full_text input {
    width: 100%
  },
  .address .el-input__inner{
    width: 85% !important
  }
</style>