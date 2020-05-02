<template>
  <li class="nav-item dropdown no-arrow mx-1">
    <a class="nav-link dropdown-toggle" v-on:click='handleClick' href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <font-awesome-icon v-bind:icon="items.icon"/>
      <span class="badge badge-danger badge-counter">{{ items.counter }}+</span>
    </a>
    <div v-bind:class="classes" aria-labelledby="alertsDropdown">
      <h6 class="dropdown-header">
        {{ items.title }}
      </h6>
      <slot></slot>
      <a class="dropdown-item text-center small text-gray-500" href="#">{{ items.link_title }}</a>
    </div>
  </li>
</template>

<script>
import alerts from './Alerts.vue'
import messages from './Messages.vue'

export default {
  props: ['items'],
  data: function(){
    return {
      'classes':{
        'dropdown-list': true,
        'dropdown-menu': true,
        'dropdown-menu-right': true,
        'shadow': true,
        'animated--grow-in': true,
        'show': false,
      },
      'component': '',
    }
  },
  components: {
    'alerts': alerts,
    'messages': messages
  },
  created() {
    if(this.items["icon"]==='envelope'){
      this.component = messages
    }else{
      this.component = alerts
    }
  },
  methods:{
    handleClick: function(){
      if (this.classes.show == false){
        this.classes.show = true;
      }
      else {
        this.classes.show= false;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
