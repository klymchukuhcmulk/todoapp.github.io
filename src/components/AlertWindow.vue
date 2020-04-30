<template>
    <div id="alert-window">
      <div class="back"></div>
      <div class="window-wrap">
      <div class="window">
        <h1>{{ message }}</h1>
        <div class="window-btn">
          <div class="yes cancel" @click="$emit('yes')">
            <h3>Yes</h3>
          </div>
          <div class="no edit" @click="$emit('no')">
            <h3>No</h3>
        </div>
        </div>
      </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'AlertWindow',
  props: ['message']
}
</script>

<style lang="scss">
@import "../scss/varibles";
#alert-window {
}
.back {
  z-index: 1001;
  position: fixed;
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;
  background: black;
  opacity: 0.7;
}
.window-wrap {
  position: fixed;
  bottom: 0;
  top: 25%;
  right: 0;
  left: 0;
  z-index: 1002;
  .window {
    width: 50%;
    min-height: 200px;
    margin: auto;
    text-align: center;
    background: $backColor;
    opacity: 1;
    padding: 30px;
    box-sizing: border-box;
    border-radius: $borderRadius;
    .window-btn {
      width: 100%;
      position: static;
      display: flex;
      justify-content: space-around;
      flex-direction: row;
      margin-top: 50px;
      .yes, .no {
        padding: 0;
        width: 40%;
        h3 {
          margin: 10px;
        }
      }
    }
  }
}
@media only screen and (max-width: 600px) {
  .window-wrap {
    .window {
      width: 80%;
    }
  }
}
</style>
