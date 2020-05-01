<template>
  <div>
    <a class="dropdown-item d-flex align-items-center"
       v-for="item in items"
       v-bind:key="'Alert' + item.title"
       v-bind:href="item.url">
      <div class="mr-3">
        <div v-bind:class="'icon-circle ' +  item.color">
          <font-awesome-icon v-bind:icon="item.icon" v-bind:style="{ color: '#fff' }"/>
        </div>
      </div>
      <div>
        <div class="small text-gray-500">{{ item.title }}</div>
        <span v-bind:class="{'font-weight-bold':!item.readed}">{{ item.text }}</span>
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
