<template>
  <div class="dropdown no-arrow">
    <a class="dropdown-toggle" v-on:click='handleClick' href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <font-awesome-icon icon="ellipsis-v" v-bind:class='dropdown.icon'/>
    </a>
    <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink" x-placement="bottom-end" style="position: absolute; transform: translate3d(-156px, 19px, 0px); top: 0px; left: 0px; will-change: transform;">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'

library.add(faEllipsisV);

export default {
  props: {
    /**
    * The color of ellipsis icon for the dropdown.
    * It defaults to gray but you can use the same color of the header text.
    */
    'color': {
      type: String,
      default: null,
    }
  },
  data: function(){
    return {
      'dropdown': {
        'icon':{
          'fa-sm': true,
          'fa-fw': true,
          'text-gray-400': false,
          'text-primary': false,
          'text-secondary':false,
          'text-success':false,
          'text-info':false,
          'text-warning':false,
          'text-danger':false,
          'text-light':false,
        },
      }
    }
  },
  created() {
    if (this.color==="primary"){
      this.dropdown.icon'text-primary'] = true;
    } else if (this.color==="secondary"){
      this.dropdown.icon['text-secondary'] = true;
    } else if (this.color==="success"){
      this.dropdown.icon['text-success'] = true;
    } else if (this.color==="info"){
      this.dropdown.icon['text-info'] = true;
    } else if (this.color==="warning"){
      this.dropdown.icon['text-warning'] = true;
    } else if (this.color==="danger"){
      this.dropdown.icon['text-danger'] = true;
    } else if (this.color==="danger"){
      this.dropdown.icon['text-danger'] = true;
    } else {
      this.dropdown.icon['text-gray-400'] = true;
    }
  },
  methods:{
    handleClick: function(){
      this.$emit('click');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
