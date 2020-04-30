<template>
  <div id="app">
    <div class="headerWrap">
    <div class="header">
      <router-link class="logo" tag="div" :to="'/'">
        <h1>TODO</h1>
      </router-link>
    </div>
    </div>
    <router-view class="main"></router-view>
  </div>
</template>

<script>
export default {
  created () {
    if (localStorage.notes) {
      const str = localStorage.notes
      console.log(localStorage)
      this.$store.dispatch('addNotes', JSON.parse(str))
    }
  }
}
</script>

<style lang="scss">
  @import "scss/varibles";
  @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
body {
  margin: 0;
  padding: 0;
  background: #2e2c2c;
  color: $color;
  font-family: $fontFamily;
}
h4, h1 {
  margin: 0;
}
.headerWrap {
  margin: 120px;
}
.header {
  z-index: 1000;
  opacity: 0.8;
  position: fixed;
  top: 20px;
  right: 20px;
  left: 20px;
  height: 60px;
  padding: 20px 20px 5px 20px;
  background-color: #006c6c;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}
.logo {
  font-family: 'Anton', sans-serif;
  letter-spacing: 5px;
  text-align: center;
}
.main {
  margin: 90px;
}
.headerNav {
  display: flex;
  justify-content: space-between;
}
</style>
