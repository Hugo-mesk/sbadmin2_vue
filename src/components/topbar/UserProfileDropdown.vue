<template>
  <div>
    <li class="nav-item dropdown no-arrow">
      <a class="nav-link dropdown-toggle" v-on:click="handleDropdownClick" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="mr-2 d-none d-lg-inline text-gray-600 small">{{section.userName}}</span>
        <img class="img-profile rounded-circle" v-bind:src="section.source">
      </a>
      <!-- Dropdown - User Information -->
      <div v-bind:class="classes" aria-labelledby="userDropdown">
        <a class="dropdown-item" href="#">
          <font-awesome-icon icon="user" class='fa-fw mr-2 text-gray-400'/>
          <span>Profile</span>
        </a>
        <a class="dropdown-item" href="#">
          <font-awesome-icon icon="user-cog" class='fa-fw mr-2 text-gray-400'/>
          <span>Settings</span>
        </a>
        <a class="dropdown-item" href="#">
          <font-awesome-icon icon="list" class='fa-fw mr-2 text-gray-400'/>
          <span>Activity Log</span>
        </a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" v-on:click='handleLogoutClick' href="#" data-toggle="modal" data-target="#logoutModal">
          <font-awesome-icon icon="sign-out-alt" class='fa-fw mr-2 text-gray-400'/>
          <span>Logout</span>
        </a>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  props: ['section'],
  data: function(){
    return {
      'classes':{
        'dropdown-menu': true,
        'dropdown-menu-right': true,
        'shadow': true,
        'animated--grow-in': true,
        'show': false,
      },
      'component': '',
    }
  },
  methods:{
    handleDropdownClick: function(){
      if (this.classes.show == false){
        this.classes.show = true;
      }
      else {
        this.classes.show= false;
      }
    },
    handleLogoutClick: function(){
      this.section.loged = false;
      this.$emit('logout');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a span {
  padding: 8px;
}
</style>
