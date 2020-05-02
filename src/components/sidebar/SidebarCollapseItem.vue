<template>
  <li v-bind:class="{'nav-item': true, 'active':sidebarItem.active}">
    <a class="nav-link collapsed" v-on:click="handleClick" href="#" data-toggle="collapse" v-bind:data-target="'toggle'+sidebarItem.title" aria-expanded="true" v-bind:aria-controls="'toggle'+sidebarItem.title">
      <font-awesome-icon v-bind:icon="sidebarItem.icon"/>
      <span>{{ sidebarItem.title }}</span>
      <font-awesome-icon v-if="toggled==false" class="collapseAngle" v-bind:icon="angleC"/>
    </a>
    <div v-bind:id="'toggle'+sidebarItem.title" v-bind:class="classes" v-show="style" v-bind:aria-labelledby="'heading'+sidebarItem.title" data-parent="#accordionSidebar">
      <div class="bg-white py-2 collapse-inner rounded"
           v-for="group in sidebarItem.collapse"
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
import { library } from '@fortawesome/fontawesome-svg-core'
import { faWrench, faCog, faTable, faChartArea, faTachometerAlt,
         faLaughWink, faFileAlt
       } from '@fortawesome/free-solid-svg-icons'

library.add(faWrench, faCog, faTable, faChartArea, faTachometerAlt,);
library.add(faLaughWink, faFileAlt);

export default {
  props: {
    /**
    *  The sidebar item is a object is not common use edit by hand.
    *  @values title, active, icon, collapse
    *
    *  icon-> wrench, cog, table, chart-area, tachometer-alt, laugh-wink, file-alt
    *
    *  collapse-> key, header, items
    *  collapse items-> title, url
    */
    'sidebarItem': {
      type: Object,
      default: null,
    },
    /**
    *  A boolean value tracs the sidebar is toggled state.
    *  When toggled the collapse angle must be omitted.
    *  The accordion like collapse turn in "dropleft" panel.
    */
    'toggled': {
      type: Boolean,
    }
  },
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
<style scoped>
  a span {
    padding: 5px;
  }
  a .collapseAngle {
    float: right;
  }
</style>
