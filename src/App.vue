<template>
  <div>
    <!-- Page Wrapper -->
    <div id="wrapper">

      <!-- Sidebar -->
      <sidebar v-bind:sidebarItems='data.sidebarItems'
               v-bind:sidebarClass='data.sidebarClass'></sidebar>
      <!-- End of Sidebar -->

      <!-- Content Wrapper -->
      <div id="content-wrapper" class="d-flex flex-column">

        <!-- Main Content -->
        <div id="content">

          <!-- Topbar -->
          <topbar v-bind:sidebarClass='data.sidebarClass'
                  v-bind:alerts='data.alerts'
                  v-bind:messages='data.messages'
                  v-bind:section='data.section'></topbar>
          <!-- End of Topbar -->

          <!-- Begin Page Content -->
          <div class="container-fluid">

            <!-- Page Heading -->
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 class="h3 mb-0 text-gray-800"></h1>
              <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                <font-awesome-icon icon="download"/>
                Generate Report
              </a>
            </div>

            <!-- Content -->
            <div class="row">
              <sb-button type='circle' color='primary' icon='facebook-f'
                         prefix='fab' size='lg' classes='transparent' ></sb-button>
            </div>
            <!-- End of Content -->

          </div>
          <!-- /.container-fluid -->

        </div>
        <!-- End of Main Content -->

        <!-- Footer -->
        <!-- End of Footer -->

      </div>
      <!-- End of Content Wrapper -->

    </div>
    <!-- End of Page Wrapper -->

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
      <i class="fas fa-angle-up"></i>
    </a>
  </div>
</template>

<script>
import Sidebar from './components/sidebar/Sidebar.vue'
import Topbar from './components/topbar/Topbar.vue'
import InicialData from './fixture'
import Button from './components/uiElements/Button.vue'

export default {
  name: 'App',
  data(){
    return {
      'data':InicialData,
    }
  },
  components: {
    'sidebar': Sidebar,
    'topbar': Topbar,
    'sb-button': Button,
  }
}
</script>

<style>

</style>
