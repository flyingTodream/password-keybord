<template>
  <div id="app">
    hello
    <button @click="showHandler">show</button>
    <password-keybord @complet="completHandler" :mask="false" :show="show" :tradeAmount="20"></password-keybord>
  </div>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      show: false
    }
  },
  methods: {
    showHandler() {
      this.show = true
    },
    completHandler(pass) {
      this.show = false
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
