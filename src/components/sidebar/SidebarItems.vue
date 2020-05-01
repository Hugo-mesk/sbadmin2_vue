<template>
  <component v-bind:is="component"
             v-bind:sidebarItem="sidebarItem"
             v-bind:toggled='toggled'>
  </component>
</template>

<script>
import sidebarSingleItem from './SidebarSingleItem.vue'
import sidebarCollapsItem from './SidebarCollapsItem.vue'

export default {
  props: ['sidebarItem', 'toggled'],
  data: function(){
    return {
      'component': '',
    }
  },
  components: {
    'sidebarSingleItem': sidebarSingleItem,
    'sidebarCollapsItem': sidebarCollapsItem
  },
  created() {
    if("undefined" === typeof(this.sidebarItem["collaps"])){
      this.component = sidebarSingleItem
    }else{
      this.component = sidebarCollapsItem
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  a span {
    padding: 5px;
  }
  a .collapseAngle {
    float: right;
  }
</style>
