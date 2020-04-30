<template>
    <div id="list">
      <div class="notesDiv">
        <div class="noteDiv" :class="{ odd : notes.length % 2}" v-for="(note, i) in notes" :key="i">
          <h1> {{ note.title }} </h1>
          <div>
            <div class="taskDiv" v-for="(item, j) in note.tasks" :key="j">
              <svg v-if="item.done" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z"/>
              </svg>
              <svg v-if="!item.done" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"/>
              </svg>
              <p>{{ item.task }}</p>
            </div>
          </div>
          <div class="navDiv">
            <router-link class="editBtn" tag="div" :to="'/edit/' + i">
              <h3>Edit</h3>
            </router-link>
            <div class="deleteBtn" @click="deleteIndex = i">
              <h3>Delete</h3>
            </div>
          </div>
        </div>
      </div>
      <router-link class="create" tag="div" :to="'/create/new'">
        <h1>Create new</h1>
      </router-link>
      <alert-window v-if="deleteIndex !== null" :message="'Delete note?'" @yes="deleteNote" @no="deleteIndex = null"/>
    </div>
</template>

<script>
import AlertWindow from '../components/AlertWindow'
export default {
  data () {
    return {
      deleteIndex: null
    }
  },
  computed: {
    notes () {
      return this.$store.getters.notes
    }
  },
  components: {
    AlertWindow
  },
  methods: {
    deleteNote () {
      this.$store.dispatch('deleteNote', this.deleteIndex)
      this.deleteIndex = null
    }
  }
}
</script>

<style lang="scss">
@import "../scss/varibles";
@function randomNum($min, $max) {
  $rand: random();
  $randomNum: $min + floor($rand * (($max - $min) + 1));
  @return $randomNum;
}
#list {
  width: 70%;
  margin: 50px auto;
}
.notesDiv {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  .odd:last-child {
    width: 100%;
    margin: 10px 0;
  }
}
.noteDiv, .create {
  width: 49%;
  /*min-width: 400px;*/
  min-height: 100px;
  margin: 10px 0px;
  background: $backColor;
  padding: 10px;
  box-sizing: border-box;
  border-radius: $borderRadius;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  /*transition: 0.5s ease-in-out;*/
  transition: ease all .5s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    text-align: center;
    margin: 0;
  }
  .taskDiv {
    background-color: $taskBackground;
    padding: 9px 5px 5px 10px;
    border-radius: $borderRadius / 2;
    margin: 10px 20px;
    display: flex;
    p {
      font-size: 18px;
      font-weight: bold;
      margin: 2px auto 4px 10px;
    }
    svg {
      fill: $color;
    }
  }
}
.create {
  width: 100%;
  background-color: $createColor;
  color: #383737;
  max-height: 100px;
  margin: 10px auto !important;
  h1 {
    margin: 20px 0;
    text-align: center;
  }
}
.noteDiv:hover {
  background-color: #009a9c;
}
.create:hover {
  background-color: #c2ff3c;
}
.noteDiv:hover, .create:hover {
  transform: scale(1.05,1.05);
  /*transform: perspective(2000px) translateZ(20px);*/
}
.navDiv {
  display: flex;
  justify-content: space-between;
  margin: 10px 20px;
  .editBtn, .deleteBtn {
    color: #383737;
    opacity: 1;
    border-radius: $borderRadius / 2;
    &:hover {
      opacity: 0.8;
    }
    h3 {
      margin: 10px;
    }
    text-align: center;
    width: 48%;
  }
  .editBtn {
    background-color: $createColor;
  }
  .deleteBtn {
    background-color: $errorColor;
  }
}

@media only screen and ( max-width: 1050px ) {
#list {
  width: 75%;
}
.notesDiv {
  display: flex;
  flex-direction: column;
  align-items: center;
  .noteDiv {
    width: 100%;
  }
}
.create {
  width: 100%;
}
}
</style>
