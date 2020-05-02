<template>
  <div>
    <component v-bind:is="component"
               v-bind:section="section"
               v-on:login='handleLogin'
               v-on:logout='handleLogout'>
    </component>
  </div>
</template>

<script>
import login from './LoginFormDropdown.vue'
import userProfile from './UserProfileDropdown.vue'

export default {
  props: ['section'],
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
    'login': login,
    'userProfile': userProfile
  },
  created() {
    if(this.section.loged==true){
      this.component = userProfile
    }else{
      this.component = login
    }
  },
  methods:{
    handleLogin: function(){
      this.component = userProfile
    },
    handleLogout: function(){
      this.component = login
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
