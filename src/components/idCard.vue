<template>
  <div>
    <ul>
      <li @click="onClick(iid)" v-for="iid in ids">{{ iid }}</li>
      <li @click="onDeleteNum" style="width: 48px">回退</li>
      <li @click="onSubmit" style="width: 48px">确定</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'id-card',
    data () {
      return {
        ids: [],
        arr: [ , , , , , , , , , ]
      }
    },
    mounted () {
      this.ids = this.genIds()
    },
    methods: {
      genIds () {
        let ids = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        let res = []
        for (let i=0, len=10; i<len; i++) {
          let index = Math.floor(Math.random() * (ids.length))
          res.push(ids[index])
          ids.splice(index, 1)
        }
        return res;
      },
      onDeleteNum () {
        this.$emit('deleteNum')
      },
      onSubmit () {
        this.$emit('onSubmit')
      },
      onClick (id) {
        this.$emit('selectNum', id)
      }
    }
  }
</script>

<style scoped>
  ul {
    margin: auto;
    padding: 8px;
    background: #5da7af;
    overflow: hidden;
    position: absolute;
    width: 360px;
    z-index: 111111111;
  }
  ul li {
    float: left;
    width: 24px;
    height: 24px;
    line-height: 24px;
    background: #c74c7f;
    color: white;
    border: 1px solid #ccc
  }
</style>