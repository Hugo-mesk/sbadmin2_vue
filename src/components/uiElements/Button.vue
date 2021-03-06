<template>
  <a href="#" v-bind:class="btn.btnClasses">
    <font-awesome-icon v-if="this.type=='circle' || this.type=='block'" v-bind:icon="btn.icon" v-bind:class='btn.iconClasses'/>
    <span v-if="this.type=='icon'" class="icon text-white-50">
      <font-awesome-icon v-bind:icon="btn.icon" v-bind:class='btn.iconClasses'/>
    </span>
    <span class="text"><slot></slot></span>
  </a>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck, faInfoCircle, faExclamationTriangle,
  faAngleRight,
         faTrash, faFlag, faArrowRight, faAngleLeft, faAngleUp,faAngleDown
       } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'

library.add(faCheck, faInfoCircle, faExclamationTriangle, faAngleRight);
library.add(faTrash, faFlag, faArrowRight, faAngleLeft, faAngleUp,faAngleDown);
library.add(faFacebookF, faGoogle);

export default {
  props: {
    /**
    * The type of the button optional
    * @values circle, icon, block, null
    */
    'type': {
      type: String,
      default: null,
    },
    /**
    * The color of button default primary
    * @values primary, secondary, success, info, warning, danger, light
    */
    'color': {
      type: String,
      default: 'primary',
    },
    /**
    * The Font Awesome Icon of the button optional the  vue-fontawesome package
    * doesn't use the fa-<icon> just the <icon> for reduce the final project size
    * we restring the available icons, it's the vue way.
    * Only solid icons are imported and prefix defaults to fas
    * if facebook or google are used the prefix will the set to fab.
    * @values check, info-circle, exclamation-triangle, trash, flag, arrow-right, facebook-f, google, angle-right, angle-left
    */
    'icon': {
      type: String,
      default: null,
    },
    /**
    * The type of the button optional default null
    * @values transparent, gray
    */
    'classes': {
      type: String,
      default: null,
    },
    /**
    * The type of the button optional default null
    * @values small, large
    */
    'size': {
      type: String,
      default: null,
    }
  },
  data: function(){
    return {
      'btn': {
        'btnClasses':{
          'btn': true,
          'btn-circle': false,
          'btn-icon-split': false,
          'btn-user':false,
          'btn-block':false,
          'btn-primary': true,
          'btn-secondary': false,
          'btn-success': false,
          'btn-info': false,
          'btn-warning': false,
          'btn-danger': false,
          'btn-light': false,
          'btn-google': false,
          'btn-facebook': false,
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
    } else if (this.type==="icon") {
      this.btn.btnClasses['btn-icon-split'] = true;
    } else if (this.type==="block")  {
      this.btn.btnClasses['btn-user'] = true;
      this.btn.btnClasses['btn-block'] = true;
    }
    if (this.icon){
      this.btn.hasIcon = true;
      if (this.icon === "facebook") {
        this.btn.btnClasses['btn-facebook'] = true;
        this.btn.icon = ['fab', 'facebook-f'];
      } else if (this.icon === "google") {
        this.btn.btnClasses['btn-google'] = true;
        this.btn.icon= ['fab', this.icon];
      }
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
    if (this.size==="small"){
      this.btn.btnClasses['btn-sm'] = true;
    } else if (this.size==="large") {
      this.btn.btnClasses['btn-lg'] = true;
    }
    if (this.classes==="transparent"){
      this.btn.iconClasses['text-white-50'] = true;
    } else if (this.classes==="gray") {
      this.btn.iconClasses['text-gray-600'] = true;
    }
    if (this.$slots.default) {
      if (this.caption) {
        console.log("You fill Caption and Slot the caption will be discarted.")
      }
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
