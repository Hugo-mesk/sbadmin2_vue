<template>
    <!-- Nav Item - Dashboard -->
    <li v-bind:class="{'nav-item': true, 'active':sidebarItem.active}">
      <a class="nav-link" v-on:click="handleClick" v-bind:href="sidebarItem.url">
        <font-awesome-icon v-bind:icon="sidebarItem.icon"/>
        <span>{{ sidebarItem.title }}</span>
      </a>
    </li>
</template>

<script>
export default {
  props: ['sidebarItem'],
  data(){
    return {

    }
  },
  methods:{
    handleClick: function(){
      if (this.sidebarItem.active == false){
        this.sidebarItem.active = true;
      }
      else {
        this.sidebarItem.active= false;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a span {
    padding: 5px;
  }
</style>
