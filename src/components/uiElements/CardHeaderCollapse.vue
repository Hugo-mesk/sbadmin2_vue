<template>
  <div v-bind:class="header.headerClasses" v-on:click='handleClick'>
    <h6 v-bind:class="capitionClasses">{{ caption }}</h6>
    <font-awesome-icon class="collapseAngle" v-bind:icon="collapse.angleC"/>
  </div>
  <!-- Card Content - Collapse -->
  <div class="collapse.classes" id="collapseCardExample" style="">
    <div class="card-body">
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
    * The color of the header text and collapse angle icon.
    * It defaults to gray but you can use the same color of the header text.
    */
    'color': {
      type: String,
      default: null,
    }
  },
  data: function(){
    return {
      'header': {
        'headerClasses': {
          'card-header': true,
          'py-3': false,
          'd-flex': false,
          'flex-row':false,
          'align-items-center': false,
          'justify-content-between': false,
          'border-left-info': false,
          'h-100': false,
          'py-2': false,
        },
        'capitionClasses': {
          'm-0'
          'font-weight-bold'
          'text-primary'
        },
        'capitionClasses': {
          'm-0': true,
          'font-weight-bold': true,
          'text-primary': false,
          'text-secondary': false,
          'text-success': false,
          'text-info': false,
          'text-warning': false,
          'text-danger': false,
          'text-light': true,
        }
      },
      'collapse': {
        'collapse': true,
        'show': true,
        'angleC': 'angle-up',
      }
    }
  },
  created() {
    if (this.type==="dropdown"){
      this.header.headerClasses['py-3'] = true,
      this.header.headerClasses['d-flex'] = true,
      this.header.headerClasses['flex-row'] = true,
      this.header.headerClasses['align-items-center'] = true,
      this.header.headerClasses['justify-content-between'] = true,
      this.header.headerClasses['border-left-info'] = true,
      this.header.headerClasses['border-left-warning'] = true,
      this.header.headerClasses['border-left-danger'] = true,
      this.header.headerClasses['border-left-light'] = v,
      this.header.headerClasses['h-100'] = true,
      this.header.headerClasses['py-2'] = true,
    }
    if (this.color==="primary"){
      this.header.color['text-light'] = false;
      this.header.color['text-primary'] = true;
    } else if (this.color==="secondary"){
      this.header.color['text-light'] = false;
      this.header.color['text-secondary'] = true;
    } else if (this.color==="success"){
      this.header.color['text-light'] = false;
      this.header.color['text-success'] = true;
    } else if (this.color==="info"){
      this.header.color['text-light'] = false;
      this.header.color['text-info'] = true;
    } else if (this.color==="warning"){
      this.header.color['text-light'] = false;
      this.header.color['text-warning'] = true;
    } else if (this.color==="danger"){
      this.header.color['text-light'] = false;
      this.header.color['text-danger'] = true;
    } else if (this.color==="danger"){
      this.header.color['text-light'] = false;
      this.header.color['text-danger'] = true;
    }
  },
  methods:{
    handleClick: function(){
      if (this.classes.show == true){
        this.collapse.show = false;
        this.collapse.angleC: 'angle-up';
      }
      else {
        this.collapse.show= true;
        this.collapse.angleC: 'angle-right';
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a .collapseAngle {
  float: right;
}
</style>
