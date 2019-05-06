<template>
<div class="addItem">
Добавление задачи
<input placeholder="Название" ref="title" type="text"/>
<textarea placeholder="Описание"  ref="description" name="" id="" cols="10" rows="5"></textarea>
<div class="status">
<button  @click='getStatus' class='green color' type="submit" placeholder="123" value="#aee8ae"> Неважно </button>
<button  @click='getStatus' class='yellow  color' type="submit" value="#fafa96">  Срочно </button>
<button  @click='getStatus' class='red  color' type="submit" value="#ffafaf"> Оч.срочно </button>
</div> 
<button @click="getText()">Добавить задачу</button>

</div>

</template>

<script>
import { prototype } from 'events';
export default {

  computed: {
    Status: function () {
     return this.$store.getters.Status 
    },
    TodoArrays: function () {
    return this.$store.getters.Todo
    },
  },
  methods: {
    getStatus(event) {
       this.$store.dispatch('setStatus', event.target.value)
    },
    getText() {
      let data = {
        title: this.$refs.title.value,
        status: this.Status,
        description: this.$refs.description.value,
      }
      if(data.title == '') {   
         alert('введите название')
      }
      else if (data.description == '') {
        alert('введите описание')
      }
      else if (this.Status == '') {
        alert('выберете статус')
      }
      else {
        this.$store.dispatch('setText', data)
        this.$refs.title.value = ''
        this.$refs.description.value = ''
      }
    }
  }
}
</script>

<style lang="scss">

.addItem {
    display: flex;
    flex-direction: column;
    border: 1px solid #d9d9d9;
    border-radius: 3px;
    text-align: center;
    padding: 13px 0;
    height: 284px;
    textarea {
    margin: 10px;
}
input {
    margin: 10px;
    height: 26px;

}
button {
    margin: 10px;
    background: none;
    border: 1px solid #dbdbdb;
    height: 34px;
    border-radius: 3px;
    
    cursor: pointer;

    &.red {
  background: #ffafaf;
}
&.yellow {
  background: #fafa96;
}
&.green {
  background: #aee8ae;
}
}
    .status {
      display: flex;
      button  {
         width: 75px;
         height: 34px;
         margin: 14px;
         border: none;
         border-radius: 6px;
             border: 1px solid #aeaeae;
         cursor: pointer;
         &:focus {
           border: 2px solid rgb(94, 255, 0);
           outline:0;
         }
         }
    }
}


</style>
