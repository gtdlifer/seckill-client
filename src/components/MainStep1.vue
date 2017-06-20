<template>
  <div>
    <h3>幼儿基本信息</h3>
    <el-row style="width: 80%; margin: auto; border: 1px solid #ccc;padding: 20px">
      <el-col>
        <el-form ref="form" :model="form" :rules="rules" label-width="120px">
          <el-row> 
            <el-col :span="11">
              <el-form-item label="幼儿姓名: " prop="name">
                <el-input v-model="form.name" max></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="11" :offset="2">
              <el-form-item label="性别: " prop="sex">
                <el-select v-model="form.sex">
                  <el-option value="男"></el-option>
                  <el-option value="女"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          
          <el-row> 
            <el-col :span="11">
              <el-form-item label="民族: " prop="nation">
                <el-input v-model="form.nation" max></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="11" :offset="2">
              <el-form-item label="户口所在地: " prop="registeredAddr">
                <el-input v-model="form.registeredAddr"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row> 
            <el-col :span="11">
              <el-form-item label="户口性质: " prop="registeredType">
                <el-select v-model="form.registeredType">
                  <el-option value="农业"></el-option>
                  <el-option value="非农业"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="11" :offset="2">
              <el-form-item label="乳名: " prop="petname">
                <el-input v-model="form.petname"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row> 
            <el-col :span="11">
              <el-form-item label="是否留守儿童: " prop="isStay">
                <el-select v-model="form.isStay">
                  <el-option value="是"></el-option>
                  <el-option value="否"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="11" :offset="2">
              <el-form-item label="是否低保: " prop="isDifficult">
                <el-select v-model="form.isDifficult">
                  <el-option value="是"></el-option>
                  <el-option value="否"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row> 
            <el-col :span="11">
              <el-form-item label="体重: " prop="weight">
                <el-input v-model="form.weight"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="11" :offset="2">
              <el-form-item label="身高: " prop="height">
                <el-input v-model="form.height"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row> 
            <el-col :span="11">
              <el-form-item label="房产证地址: " prop="propertyAddr">
                <el-input v-model="form.propertyAddr"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="11" :offset="2">
              <el-form-item label="国籍: " prop="nationality">
                <el-select v-model="form.nationality">
                  <el-option value="中国"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row> 
            <el-col :span="11">
              <el-form-item label="身份证号: " prop="idCard">
                <el-input :readonly="true" @focus="onIdCardShow" v-model="form.idCard"></el-input>
                <id-card v-if="isIdCardShow" @deleteNum="onDeleteNum" @onSubmit="onIdCardSubmit" @selectNum="onSelectNum"></id-card>
              </el-form-item>
            </el-col>
          </el-row>
          <router-link :to="{ path: '/main/step2' }">下一步</router-link>
          
        </el-form>
      </el-col>
    </el-row>
  </div>
  
</template>

<script>
  import idCard from './idCard'
  
  export default {
    name: 'main-step1',
    data () {
      return {
        form: {
          name: '',
          sex: '',
          nation: '',
          registeredAddr: '',
          registeredType: '',
          petname: '',
          isStay: '',
          isDifficult: '',
          weight: '',
          height: '',
          propertyAddr: '',
          nationality: '',
          idCard: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入幼儿姓名', trigger: 'blur' },
          ],
          sex: [
            { required: true, message: '请输入幼儿性别', trigger: 'blur' },
          ],
          nation: [
            { required: true, message: '请输入幼儿民族', trigger: 'blur' },
          ],
          registeredAddr: [
            { required: true, message: '请输入幼儿户口所在地', trigger: 'blur' },
          ],
          registeredType: [
            { required: true, message: '请输入幼儿户口性质', trigger: 'blur' },
          ],
          petname: [
            { required: true, message: '请输入幼儿户口乳名', trigger: 'blur' },
          ],
          isStay: [
            { required: true, message: '请输入幼儿是否留守', trigger: 'blur' },
          ],
          isDifficult: [
            { required: true, message: '请输入幼儿是否低保', trigger: 'blur' },
          ],
          weight: [
            { required: true, message: '请输入幼儿体重', trigger: 'blur' },
          ],
          height: [
            { required: true, message: '请输入幼儿身高', trigger: 'blur' },
          ],
          propertyAddr: [
            { required: true, message: '请输入房产证地址', trigger: 'blur' },
          ],
          nationality: [
            { required: true, message: '请输入幼儿国籍', trigger: 'blur' },
          ],
          idCard: [
            { required: true, message: '请输入幼儿身份证号', trigger: 'change' },
          ]
        },
        isIdCardShow: false
      }
    },
    mounted () {
      if (this.$bus.$addon['step1']) {
        delete this.$bus.$addon['step1']
        this.$refs['form'].validate(valid => {})
      }
      this.$bus.$subscribe('validate', function validate1() {
        return new Promise(resolve => {
          this.$refs['form'].validate(valid => {
            resolve({
              target: 'step1',
              valid
            })
          })
        })
      }.bind(this))
    },
    methods: {
      onSelectNum (id) {
        this.form.idCard += id
      },
      onDeleteNum () {
        if (!this.form.idCard.length) {
          return
        }
        this.form.idCard = this.form.idCard.slice(0, this.form.idCard.length - 1)
      },
      onIdCardSubmit () {
        this.isIdCardShow = false;
      },
      onIdCardShow () {
        this.isIdCardShow = true;
      }
    },
    components: {
      idCard
    }
  }
</script>