<template>
  <div id="edit">
    <div class="taskEdit">
      <input class="title" maxlength="30" type="text" v-model="noteCopy.title">
      <div class="task" v-for="(item, i) in noteCopy.tasks" :key="i">
        <label class="checkbox">
          <svg v-if="item.done" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z"/>
          </svg>
          <svg v-if="!item.done" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"/>
          </svg>
          <input type="checkbox" v-model="item.done">
        </label>
        <input class="taskText" type="text" maxlength="30" v-model="item.task" :placeholder="item.task">
      </div>
      <button class="addTask" @click="addTask">Add task</button>
    </div>
    <div class="navButtons">
      <button class="cancel" @click="alertWindow = true">Cancel</button>
      <button class="edit" @click="updateList">{{ action === 'create' ? 'Add to list' : 'Update'}}</button>
    </div>
    <alert-window v-if="alertWindow" :message="'Continue?'" @yes="cancel" @no="alertWindow = false"/>
  </div>
</template>

<script>
import AlertWindow from '../components/AlertWindow'
export default {
  name: 'Edit',
  props: ['action', 'index'],
  components: {
    AlertWindow
  },
  data () {
    return {
      noteCopy: null,
      alertWindow: false
    }
  },
  computed: {
    note: {
      get () {
        let note
        if (this.action === 'create') {
          note = {
            title: 'Title',
            tasks: []
          }
        } else if (this.action === 'edit') {
          note = this.$store.getters.noteByIndex(Number(this.index))
        }
        return note
      },
      set (note) {
        if (this.action === 'create') {
          this.$store.dispatch('addNote', note)
            .then(() => this.$router.push('/'))
            .catch(console.log)
        } else if (this.action === 'edit') {
          this.$store.dispatch('updateNote', { note: note, index: this.index })
            .then(() => this.$router.push('/'))
            .catch(console.log)
        }
      }
    }
  },
  created () {
    if (!this.note) {
      this.$router.push('/')
    } else {
      this.noteCopy = {}
      this.noteCopy.title = this.note.title
      this.noteCopy.tasks = []
      this.note.tasks.forEach((item, i) => {
        this.noteCopy.tasks[i] = Object.assign({}, item)
      })
    }
  },
  methods: {
    updateList () {
      this.note = this.noteCopy
      this.note.tasks = this.noteCopy.tasks.filter(item => {
        if (item.task.trim() !== '') {
          return item
        }
      })
    },
    addTask () {
      this.noteCopy.tasks.push({
        task: '',
        done: false
      })
    },
    cancel () {
      this.alertWindow = false
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss">
  @import "../scss/varibles";
input {
  outline: none;
  color: $color;
}
#edit {
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 50px auto;
  transition: ease all .5s;
}
.taskEdit {
  box-sizing: border-box;
  background-color: $backColor;
  min-height: 200px;
  width: 100%;
  position: relative;
  border-radius: $borderRadius;
  color: $color;
  box-shadow: $boxShadow;
  padding: 20px 40px 80px 40px;
  margin: 0px auto 20px auto;
}
.title {
  display: block;
  width: 100%;
  border: none;
  //border-bottom: 1px solid $color;
  margin: 0px auto 60px auto;
  font-size: 25px;
  font-family: $fontFamily;
  font-weight: 700;
  text-align: center;
  background-color: $backColor;
  color: $color;
}
button {
  border: none;
  outline: none;
  font-weight: 700;
  transition: 0.5s ease-in-out;
  font-family: $fontFamily;
}
.navButtons {
  display: flex;
  justify-content: space-between;
  bottom: 20px;
  right: 10px;
  left: 10px;
}
.addTask {
  position: absolute;
  bottom: 20px;
  right: 0;
  left: 0;
  width: 50%;
  margin: 10px 25%;
  padding: 15px 20px;
  border-radius: $borderRadius / 2;
  color: $color;
  background-color: $taskBackground;
}
.addTask:hover {
  background-color: #006a6a;
}
.edit {
  background-color: $createColor;
}
.cancel {
  background: $errorColor;
}
.edit, .cancel {
  font-size: 25px;
  padding: 30px 20px;
  border-radius: $borderRadius;
  margin: 0;
  width: 49%;
  box-shadow: $boxShadow;
}
.edit:hover, .cancel:hover {
  transform: scale(1.05,1.05);
}
.checkbox {
  svg {
    fill: $color;
  }
  input {
    display: none;
  }
}
.task {
  display: flex;
  background-color: $taskBackground;
  padding: 1px 7px;
  border-radius: $borderRadius + 5px;
  margin-bottom: 15px;
  /*box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);*/
  label {
    position: relative;
    width: 5%;
    min-width: 30px;
    svg {
      position: absolute;
      bottom: 10px;
      fill: $color;
    }
  }
  input {
    margin: 10px 0;
    height: 20px;
    font-size: large;
    border-radius: 0;
  }
}
.taskText {
  background: transparent;
  border: none;
  border-bottom: 1px solid $color;
  width: 100%;
  outline: none;
}
@media only screen and (max-width: 800px) {
  #edit {
    width: 90%;
  }
}
@media only screen and ( max-width: 500px ) {
  .title {
    width: 100%;
    font-size: 17px;
  }
  .taskEdit {
    padding: 20px 20px 80px 20px;
  }
}
</style>
