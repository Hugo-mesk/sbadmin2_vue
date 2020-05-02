<template>
  <div v-bind:class="header.headerClasses">
    <h6 v-bind:class="capitionClasses">{{ caption }}</h6>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    /**
    * The type of the card default to null [no shadow]
    * @values dropdown
    */
    'type': {
      type: String,
      default: null,
    },
    /**
    * The capition of the card optional
    */
    'caption':{
      type: String,
      default: null,
    },
    /**
    * The color of the header text.
    * It defaults to gray.
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
      this.header.color['text-primary'] = true;
    } else if (this.color==="secondary"){
      this.header.color['text-secondary'] = true;
    } else if (this.color==="success"){
      this.header.color['text-success'] = true;
    } else if (this.color==="info"){
      this.header.color['text-info'] = true;
    } else if (this.color==="warning"){
      this.header.color['text-warning'] = true;
    } else if (this.color==="danger"){
      this.header.color['text-danger'] = true;
    } else if (this.color==="danger"){
      this.header.color['text-danger'] = true;
    } else {
      this.header.color['text-light'] = true;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
