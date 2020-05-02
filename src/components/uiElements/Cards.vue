<template>
  <div v-bind:class="card.cardClasses">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    /**
    * The type of the card default to null [no shadow]
    * @values small, basic
    */
    'type': {
      type: String,
      default: null,
    },
    /**
    * The color of card left border
    * @values primary, secondary, success, info, warning, danger, light
    */
    'borderColor': {
      type: String,
      default: 'primary',
    }
  },
  data: function(){
    return {
      'card': {
        'cardClasses':{
          'card': true,
          'mb-4': true,
          'shadow': false,
          'border-left-primary':false,
          'border-left-secondary':false,
          'border-left-success':false,
          'border-left-info':false,
          'border-left-warning':false,
          'border-left-danger':false,
          'border-left-light':false,
          'h-100':false,
          'py-2': false,
        },
      }
    }
  },
  created() {
    if (this.type==="small"){
      this.card.cardClasses['shadow'] = true;
      this.card.cardClasses['h-100'] = true;
      this.card.cardClasses['py-2'] = true;
    } else if (this.type==="basic") {
      this.card.cardClasses['shadow'] = true;
    }
    if (this.borderColor==="primary"){
      this.card.cardClasses['border-left-primary'] = true;
    } else if (this.borderColor==="secondary"){
      this.card.cardClasses['border-left-secondary'] = true;
    } else if (this.borderColor==="success"){
      this.card.cardClasses['border-left-success'] = true;
    } else if (this.borderColor==="info"){
      this.card.cardClasses['border-left-info'] = true;
    } else if (this.borderColor==="warning"){
      this.card.cardClasses['border-left-warning'] = true;
    } else if (this.borderColor==="danger"){
      this.card.cardClasses['border-left-danger'] = true;
    } else if (this.borderColor==="danger"){
      this.card.cardClasses['border-left-danger'] = true;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
