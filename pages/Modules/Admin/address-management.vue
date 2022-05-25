<template>
  <div id="layoutSidenav">
    <Adminsidebar />
    <div id="layoutSidenav_content">
      <AdminHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>System Setting</h1>
          </div>
            <div class="card mb-4">
              <div class="card-header icon-title">
                <a href="#"><i class="far fa-map-marker-alt"></i></a>
                <h4>Address Management</h4>
              </div>
              <div class="card-body">
                <nav>
                <ul class="nav nav-tab">
                  <li class="nav-item">
                    <a class="nav-link active" href="#">
                      <i class="far fa-hospital-user"></i> Country, State &
                      Postcode</a>
                  </li>
                </ul>
                </nav>
              </div>
            </div>

            <div class="card mb-4">
              <div class="card-header bg-transparent">
                <h4>Address Setting</h4>
              </div>
              <div class="card-body">
                <nav>
                  <ul class="nav sub-tab" id="nav-tab" role="tablist">
                    <li class="nav-item"><a
                      class="nav-link active"
                      data-bs-toggle="tab"
                      href="#nav-home1"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                      >Country</a
                    ></li>
                    <li class="nav-item"><a
                      class="nav-link"
                      id="nav-profile-tab3"
                      data-bs-toggle="tab"
                      href="#nav-profile2"
                      role="tab"
                      aria-controls="nav-profile2"
                      aria-selected="false"
                      >State</a
                    ></li>
                    <li class="nav-item"><a
                      class="nav-link"
                      id="nav-contact-tab3"
                      data-bs-toggle="tab"
                      href="#nav-contact3"
                      role="tab"
                      aria-controls="nav-contact3"
                      aria-selected="false"
                      >Postcode</a
                    ></li>
                  </ul>
                </nav>

                <div class="tab-content" id="nav-tabContent">
                  <div
                    class="tab-pane fade show active"
                    id="nav-home1"
                    role="tabpanel"
                  >
                    <Country/>
                  </div>

                  <div class="tab-pane fade" id="nav-profile2" role="tabpanel">
                     <State/>
                  </div>

                  <div class="tab-pane fade" id="nav-contact3" role="tabpanel">
                   <City/>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import Adminsidebar from "../../../components/Admin/Adminsidebar.vue";
import AdminHeader from "../../../components/Admin/Admin_ToHeader.vue";
import City from '../../../components/Admin/city.vue';
import Country from '../../../components/Admin/country.vue';
import State from '../../../components/Admin/state.vue';
// window.$ = window.jQuery = require('jquery');
// import {DataTable} from "datatables.net";
export default {
  components: { Adminsidebar, AdminHeader, Country, State, City },
  name: "address-management",
  head: {
    script: [
      {
        src: "/js/bootstrap.bundle.min.js",
        body: true,
        crossorigin: "anonymous",
      },
      {
        src: "/js/scripts.js",
        body: true,
        crossorigin: "anonymous",
      },
       {
        src: "/js/jquery.dataTables.min.js",
        body: true,
        crossorigin: "anonymous",
      },
    ],
  },
  // mounted(){
  //    $(document).ready(function() {
  //               $('.data-table').DataTable({
  //                   "searching": false,
  //                   "bLengthChange": false,
  //                   "responsive": true
  //               });
  //           } );
  // },
};
</script>