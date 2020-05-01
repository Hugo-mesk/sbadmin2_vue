<template>
  <li v-bind:class="{'nav-item': true, 'active':sidebarItem.active}">
    <a class="nav-link collapsed" v-on:click="handleClick" href="#" data-toggle="collapse" v-bind:data-target="'toggle'+sidebarItem.title" aria-expanded="true" v-bind:aria-controls="'toggle'+sidebarItem.title">
      <font-awesome-icon v-bind:icon="sidebarItem.icon"/>
      <span>{{ sidebarItem.title }}</span>
      <font-awesome-icon v-if="toggled==false" class="collapseAngle" v-bind:icon="angleC"/>
    </a>
    <div v-bind:id="'toggle'+sidebarItem.title" v-bind:class="classes" v-show="style" v-bind:aria-labelledby="'heading'+sidebarItem.title" data-parent="#accordionSidebar">
      <div class="bg-white py-2 collapse-inner rounded"
           v-for="group in sidebarItem.collaps"
           v-bind:key="'CollapsGroup' + group.key">
        <h6 class="collapse-header">{{ group.title }}</h6>
        <a v-for="item in group.items"
           class="collapse-item"
           v-bind:href="item.url"
           v-bind:key="'CollapsItem' + item.title">{{ item.title }}</a >
      </div>
    </div>
  </li>
</template>

<script>

export default {
  props: ['sidebarItem', 'toggled'],
  data: function(){
    return {
      classes: {
        'collapse': true,
        'show': false
      },
      style: false,
      angleC: 'angle-right'
    }
  },
  methods:{
    handleClick: function(){
      if (this.angleC == 'angle-right'){
        this.angleC = 'angle-up';
        this.classes.show = true;
        this.style= true;
        this.sidebarItem.active = true;
      }
      else {
        this.angleC = 'angle-right';
        this.classes.show = false;
        this.style= false;
        this.sidebarItem.active= false;
      }
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
