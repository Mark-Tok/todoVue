<template>
  <div class="page">
    <Form />
    <div class="tabs">
      <div class="tabsTitle">
        <div ref="tabsTodoTitle" @click="tabsTodo()" class="tabsTodoTitle">Текущие задачи</div>
        <div ref="tabsChecksTitle" @click="tabsCheck()" class="tabsChecksTitle">Выполненые задачи</div>
      </div>
      <div class="tabsWrapper">
      <div ref="todo" class="todoTab">  
        <Todo />
      </div>
      <div ref="check" class="checkTab">
        <Check />
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from './components/Form.vue'
import Todo from './components/Todo.vue'
import Check from './components/Check.vue'
import { METHODS } from 'http';

export default {
  components: {
    Form,
    Todo,
    Check
  },
  methods:{
    tabsCheck() {
      this.$refs.check.style.display = 'block'
      this.$refs.todo.style.display = 'none'
      event.target.style.background = '#c5c5c5'
      this.$refs.tabsTodoTitle.style.background = 'none'

    },
     tabsTodo() {
      this.$refs.check.style.display = 'none'
      this.$refs.todo.style.display = 'block'
       event.target.style.background = '#c5c5c5'
      this.$refs.tabsChecksTitle.style.background = 'none'
    }
  },
}
</script>

<style lang="scss">
.tabsTitle {
  display: flex;

  div {
    margin: 5px;
    padding: 16px;
  }
}

.tabsTodoTitle {
  background: #c5c5c5;
  cursor: pointer;
}

.tabsChecksTitle {
  background: #c5c5c5;
  cursor: pointer;
}

.checkTab {
  display: none;
}

.tabsWrapper {
  position: relative;
  display: flex;
}

.todoTab {
  position: absolute;
}

@import url('https://fonts.googleapis.com/css?family=Roboto:400,900');

body {
margin: 0;
padding: 0;
overflow-x: hidden;
font-family: 'Roboto', sans-serif;

 .page {
   display: flex;
width: 819px;
    margin: 0 auto;
    padding-top: 50px;
    height: 100vh;
 }
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: inherit;
}
</style>
