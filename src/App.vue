<template>
  <div id="app">
    <iheader></iheader>
    <router-view></router-view>
  </div>
</template>

<script>

import IHeader from './components/Iheader'
export default {
  name: 'app',
  components: {
    iheader: IHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.ddiv {
	display: inline-block;
	width: 50px;
	height: 50px;
	border-radius: 50px;
	background: #00a2ca;
	color: #fff;
	vertical-align: middle;
	text-align: center;
	font-size: 22px;
	line-height: 50px
}
.aa {
	width: 70px
}
.aa, .aa1 {
	display: inline-block;
	text-align: center;
	font-size: 1pc
}
.aa1 {
	width: 40px
}
</style>
 
