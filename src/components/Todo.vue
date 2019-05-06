<template>
<div class='todo'>
        <div class="todoItem" v-for="(todos, index) in TodoArray">
            <div class="status" :style="{ background: todos.status }"></div>
            <div class="todoContent">
            <p class="todoTitle"><button ref="input"  @click="check(todos.title, todos.status, todos.description, index, todos.bool)"  type="checkbox"/> {{todos.title}}</p>
            <p class="todoDescription">
                {{todos.description}}        
            </p>
            </div>
            <button @click="deleteItem(index)"/>  
        </div>
</div>
</template>

<script>
export default {
    computed: {
    TodoArray: function () {
        return this.$store.getters.Todo
    },
  },
  methods: {
      check(title, status, description, id) {
          let dataCheck = {title,  status, description, id};
          this.$store.dispatch('Check', dataCheck)    
      },
      deleteItem(id) {
          console.log(id)
          this.$store.dispatch('deleteItem', id)    
      }
  }
}
</script>

<style lang="scss">
.todoItem {
  display: flex;
  border: 1px solid #d1d1d1;
  padding-right: 10px;
  
  .todoDescription {
    width: 450px;
  }
  .todoContent {
    padding-left: 12px;

    button {
      background: none;

      &:after {
        content: "";
        display: block;

        position: absolute;
        background: white;
        width: 16px;
        height: 16px;
        border: 1px solid;
        top: 7px;
      }
      &:focus {
        outline: 0;
      }
    }
  }
  .status {
    width: 10px;
  }
  button {
    background-color: transparent;
    background-image: url('https://cdn4.iconfinder.com/data/icons/email-2-2/32/Trash-Email-Bin-512.png');
    background-size: contain;
    background-repeat: no-repeat;
    width: 23px;
    height: 23px;
    border: none;
    cursor: pointer;
    position: relative;
    margin-top: 13px;
  }
}
</style>
