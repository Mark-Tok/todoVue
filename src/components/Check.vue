<template>
    <div class='check'>
        <div class="checkItem" v-for="(checks, index) in check">
        <div class="status" :style="{ background: checks.status }" > </div>
        <div class="checkContent">         
            <p class="checkTitle"><button @click="UnCheck(checks.title, checks.status, checks.description, index, checks.bool)" checked='true' type="checkbox"/>{{checks.title}} </p>
            <p class="checkDescription">
                {{checks.description}}
            </p>
        </div>
        </div>  
</div>
</template>

<script>
export default {
    computed: {
    check: function () {
    return this.$store.getters.Check 
    },
  },
  methods: {
       UnCheck(title, status, description, id) {
          let dataUnCheck = {title,  status, description, id};
          this.$store.dispatch('UnCheck', dataUnCheck)    
      }
  }
}
</script>

<style lang="scss">
.checkItem {
  display: flex;
  border: 1px solid #d1d1d1;
  padding-right: 10px;
  
  .checkDescription {
    width: 450px;
  }
  .checkContent {
    padding-left: 12px;
    button {
        background-image: url('https://spng.pngfly.com/20180601/elo/kisspng-check-mark-clip-art-true-sign-5b115b4133e421.2059374415278641292126.jpg');
            width: 18px;
    height: 19px;
    background-size: contain;
    border: navajowhite;
    margin-right: 11px;
    }
  }
  .status {
    width: 10px;
  }
}
</style>

