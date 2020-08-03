<template>
  <div>
    <a class="dropdown-item d-flex align-items-center"
       v-for="item in items"
       v-bind:key="'Message' + item.key"
       href="#">
      <div class="dropdown-list-image mr-3">
        <img class="rounded-circle" v-bind:src="item.source" alt="">
        <div v-bind:class="'status-indicator ' + item.color"></div>
      </div>
      <div v-bind:class="{'font-weight-bold':!item.readed}">
        <div class="text-truncate">{{ item.text }}</div>
        <div class="small text-gray-500">{{ item.from }}</div>
      </div>
    </a>
  </div>
</template>
 
<script>
export default {
  props: ['items'],
  data: function(){
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
