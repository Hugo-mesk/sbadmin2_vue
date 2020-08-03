<template>
  <li class="nav-item dropdown no-arrow mx-1">
    <a class="nav-link dropdown-toggle" v-on:click='handleClick' href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <font-awesome-icon icon="sign-in-alt"/>
      <span>Log In</span>
    </a>
    <!-- Dropdown - Alerts -->
    <div v-bind:class="classes" aria-labelledby="alertsDropdown">
      <h6 class="dropdown-header">
        Log In
      </h6>
      <form class="user">
        <div class="form-group">
          <input type="email" v-model='userName' class="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address...">
        </div>
        <div class="form-group">
          <input type="password" class="form-control form-control-user" id="exampleInputPassword" placeholder="Password">
        </div>
        <div class="form-group">
          <div class="custom-control custom-checkbox small">
            <input type="checkbox" class="custom-control-input" id="customCheck">
            <label class="custom-control-label" for="customCheck">Remember Me</label>
          </div>
        </div>
        <a href="#" v-on:click="handleLogin" class="btn btn-primary btn-user btn-block">
          Login
        </a>
        <hr>
        <sb-button type="block" icon="facebook">Login with Facebook</sb-button>
        <sb-button type="block" icon="google">Login with Google</sb-button>
      </form>
    </div>
  </li>
</template>

<script>
import SbButton from "../uiElements/Button"

export default {
  props: {
    /**
    * Section is a Object supply some infomrmation about the current user.
    *
    * loged-> boolean
    * source-> Url of user image for show in topbar
    * userName-> String to show in topbar.
    */
    'section': {
      type: Object,
    }
    },
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
      'userName': this.section.userName,
    }
  },
  components: {
    'sb-button': SbButton,
  },
  methods:{
    handleClick: function(){
      if (this.classes.show == false){
        this.classes.show = true;
      }
      else {
        this.classes.show= false;
      }
    },
    handleLogin: function(){
      this.section.loged = true;
      this.section.userName = this.userName;
      this.$emit('login');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a span {
  padding: 8px;
}
form {
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
}
</style>
