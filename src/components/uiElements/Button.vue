<template>
  <a href="#" v-bind:class="btn.btnClasses">
    <font-awesome-icon v-bind:icon="btn.icon" v-bind:class='btn.iconClasses'/>
    <span v-if="caption==!''" class="text">{{ caption }}</span>
  </a>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck, faInfoCircle, faExclamationTriangle,
         faTrash, faFlag, faArrowRight } from '@fortawesome/free-solid-svg-icons'

library.add(faCheck, faInfoCircle, faExclamationTriangle);
library.add(faTrash, faFlag, faArrowRight);

export default {
  props: ['caption', 'type', 'color', 'icon', 'prefix', 'size', 'classes'],
  data: function(){
    return {
      'btn': {
        'btnClasses':{
          'btn': true,
          'btn-circle': false,
          'btn-icon-split': false,
          'btn-user':false,
          'btn-block':false,
          'btn-primary': false,
          'btn-secondary': false,
          'btn-success': false,
          'btn-info': false,
          'btn-warning': false,
          'btn-danger': false,
          'btn-light': false,
          'btn-sm': false,
          'btn-lg': false,
        },
        'hasIcon': true,
        'icon': [],
        'iconClasses': {
          'text-gray-600': false,
          'text-white-50': false,
        },
      }
    }
  },
  created() {
    if (this.type==="circle"){
      this.btn.btnClasses['btn-circle'] = true;
    } else if (this.type==="icon-split") {
      this.btn.btnClasses['btn-icon-split'] = true;
    } else {
      this.btn.btnClasses['btn-user'] = true;
      this.btn.btnClasses['btn-block'] = true;
    }
    if (this.color==="primary"){
      this.btn.btnClasses['btn-primary'] = true;
    } else if (this.color==="secondary"){
      this.btn.btnClasses['btn-secondary'] = true;
    } else if (this.color==="success"){
      this.btn.btnClasses['btn-success'] = true;
    } else if (this.color==="info"){
      this.btn.btnClasses['btn-info'] = true;
    } else if (this.color==="warning"){
      this.btn.btnClasses['btn-warning'] = true;
    } else if (this.color==="danger"){
      this.btn.btnClasses['btn-danger'] = true;
    } else if (this.color==="light"){
      this.btn.btnClasses['btn-light'] = true;
    }
    if (this.icon){
      this.btn.hasIcon = true;
      if (this.prefix) {
        this.btn.icon = [this.prefix, this.icon];
      } else {
        this.btn.icon= ['fas', this.icon];
      }
    }
    if (this.size==="sm"){
      this.btn.btnClasses['btn-sm'] = true;
    } else if (this.size==="lg") {
      this.btn.btnClasses['btn-lg'] = true;
    }
    if (this.classes==="transparent"){
      this.btn.iconClasses['text-white-50'] = true;
    } else if (this.classes==="gray") {
      this.btn.iconClasses['text-gray-600'] = true;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
