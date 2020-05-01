<template>
  <!-- Sidebar -->
  <ul v-bind:class="sidebarClass" id="accordionSidebar">

    <!-- Sidebar - Brand -->
    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
      <div class="sidebar-brand-icon rotate-n-15">
        <font-awesome-icon icon="laugh-wink"/>
      </div>
      <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
    </a>

    <div v-for="group in sidebarItems" v-bind:key="'group' + group.title">
      <!-- Divider -->
      <hr class="sidebar-divider my-0">

      <!-- Heading -->
      <div v-if="group.title !== ''" class="sidebar-heading">
        {{ group.title }}
      </div>

      <!-- Nav Item - Dashboard -->
      <div v-for='sidebarItem in group.items' v-bind:key="'Item' + sidebarItem.title">
        <sidebarItems v-bind:sidebarItem='sidebarItem'
                      v-bind:toggled='sidebarClass.toggled'></sidebarItems>
      </div>
    </div>
    <!-- Divider -->
    <hr class="sidebar-divider d-none d-md-block">

    <!-- Sidebar Toggler (Sidebar) -->
    <div class="text-center d-none d-md-inline">
      <button v-on:click="toggleSideBar" class="rounded-circle border-0" id="sidebarToggle">
        <font-awesome-icon class="collapseAngle" v-bind:icon="angleC"/>
      </button>
    </div>
  </ul>
  <!-- End of Sidebar -->
</template>

<script>
import sidebarItems from './SidebarItems.vue';

export default {
  props: ['sidebarItems', 'sidebarClass'],
  data(){
    return {
      'angleC': 'angle-left',
    }
  },
  components: {
    'sidebarItems': sidebarItems,
  },
  methods:{
    toggleSideBar: function(){
      if (this.angleC == 'angle-left'){
        this.sidebarClass.toggled = true;
        this.angleC = 'angle-right';
      }
      else {
        this.sidebarClass.toggled = false;
        this.angleC = 'angle-left';
      }
    },

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
