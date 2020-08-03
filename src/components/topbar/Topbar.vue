<template>
  <!-- Topbar -->
  <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

    <!-- Sidebar Toggle (Topbar) -->
    <button v-on:click="sidebarToggleClick" id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
      <font-awesome-icon icon="bars"/>
    </button>

    <!-- Topbar Search -->
    <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
      <div class="input-group">
        <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2">
        <div class="input-group-append">
          <button class="btn btn-primary" type="button">
            <font-awesome-icon icon="search"/>
          </button>
        </div>
      </div>
    </form>

    <!-- Topbar Navbar -->
    <ul class="navbar-nav ml-auto">

      <!-- Nav Item - Search Dropdown (Visible Only XS) -->
      <li class="nav-item dropdown no-arrow d-sm-none">
        <a v-on:click="searchClick" class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <font-awesome-icon icon="search"/>
        </a>
        <!-- Dropdown - Messages -->
        <div v-bind:class="'dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in' + show" aria-labelledby="searchDropdown">
          <form class="form-inline mr-auto w-100 navbar-search">
            <div class="input-group">
              <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2">
              <div class="input-group-append">
                <button class="btn btn-primary" type="button">
                  <font-awesome-icon icon="search" class='fa-sm' size="sm" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </li>

      <!-- Nav Item - Alerts -->
      <dropdown v-bind:items='alerts'></dropdown>

      <!-- Nav Item - Messages -->
      <dropdown v-bind:items='messages'></dropdown>

      <div class="topbar-divider d-none d-sm-block"></div>

      <!-- Nav Item - User Information -->
      <userDropdown v-bind:section='section'></userDropdown>

    </ul>

  </nav>
  <!-- End of Topbar -->

</template>

<script>
import Dropdown from './TopbarDropdown.vue'
import UserDropdown from './UserDropdown.vue'

export default {
  props:['sidebarClass', 'alerts', 'messages', 'section'],
  data: function(){
    return {
      'show': '',
    }
  },
  components: {
    'dropdown': Dropdown,
    'userDropdown': UserDropdown,
  },
  methods:{
    sidebarToggleClick: function(){
      if (this.sidebarClass.toggled == false){
        this.sidebarClass.toggled = true;
      }
      else {
        this.sidebarClass.toggled = false;
      }
    },
    searchClick: function(){
      if (this.show == ''){
        this.show = ' show';
      }
      else {
        this.show= '';
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a span {
    padding: 5px;
  }
</style>
