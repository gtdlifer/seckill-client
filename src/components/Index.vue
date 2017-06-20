<template>
  <div>
    <div style="position:absolute;left:5px;top:255px">如需联系，请扫码加微信：<br /><img width="300" src="/static/timg.jpeg" /></div>
    <div class="main">
      <div class="wraper">
        <table width="100%" align="center" class="index_table" border="0" cellspacing="0" cellpadding="0">
          <tbody>
            <tr>
              <td>
                <div align="center" id="notstart" style="margin-top: 40px;" >
                  <h3 style="text-align: center;">
                    <span style="color: rgb(255, 0, 0);">注意事项</span>
                  </h3>
                  <h2 style="margin-bottom: 15px;">此系统根据2017年南开区幼儿园报名系统创建，</h2>
                  
                  <div align="center" id="start">
                    <h3 style="text-align: center;">
                      <span style="color: rgb(255, 0, 0);">填写报名信息时，请您如实填写、诚信报名，如信息与实际不符，自行担责。</span>
                    </h3>
                    <h3 style="margin-top: 30px;">验证码填写完成后，请点击“我要报名”按钮</h3>
                    <el-button type="primary">
                      <router-link :to="{ path: '/vcode' }">开始报名</router-link>
                    </el-button>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index'
  }
</script>
