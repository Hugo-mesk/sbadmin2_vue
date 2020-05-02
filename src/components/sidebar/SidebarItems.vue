<template>
  <component v-bind:is="component"
             v-bind:sidebarItem="sidebarItem"
             v-bind:toggled='toggled'>
  </component>
</template>

<script>
import sidebarSingleItem from './SidebarSingleItem.vue'
import sidebarCollapseItem from './SidebarCollapseItem.vue'

export default {
  props: ['sidebarItem', 'toggled'],
  data: function(){
    return {
      'component': '',
    }
  },
  components: {
    'sidebarSingleItem': sidebarSingleItem,
    'sidebarCollapseItem': sidebarCollapseItem
  },
  created() {
    if("undefined" === typeof(this.sidebarItem["collapse"])){
      this.component = sidebarSingleItem
    }else{
      this.component = sidebarCollapseItem
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
