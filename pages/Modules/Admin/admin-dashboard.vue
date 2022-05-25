<template>
 
    <div id="layoutSidenav">
      <Adminsidebar />
      <div id="layoutSidenav_content">
        <AdminHeader/>
        <main>
        <div class="container-fluid px-4 dashboard">
          <div class="page-title dashboard-title">
            <h1>Mentari Staff Dashboard</h1>
            <div class="input-group dashboard-search">
              <span class="input-group-text" id="basic-addon1"
                ><i class="far fa-search"></i
              ></span>
              <input type="text" class="form-control" placeholder="Search" />
            </div>
          </div>

          <div class="row">
            <div class="col-sm-3">
              <div class="card card-bg card-bg-1">
                <div class="card-info">
                  <i class="fad fa-calendar-day"></i>
                  <h1>03</h1>
                </div>

                <h4>Today's Appointment</h4>
              </div>
            </div>

            <div class="col-sm-3">
              <div class="card card-bg card-bg-2">
                <div class="card-info">
                  <i class="fad fa-user"></i>
                  <h1>01</h1>
                </div>

                <h4>Personal Task</h4>
              </div>
            </div>

            <div class="col-sm-3">
              <div class="card card-bg card-bg-3">
                <div class="card-info">
                  <i class="fad fa-users"></i>
                  <h1>02</h1>
                </div>

                <h4>Team Task</h4>
              </div>
            </div>
          </div>
          <!-- row -->
        </div>
        </main>
      </div>
    </div>
  
</template>

<script>
import Adminsidebar from "../../../components/Admin/Adminsidebar.vue";
import AdminHeader from '../../../components/Admin/Admin_ToHeader.vue';
export default {
  components: { Adminsidebar, AdminHeader },
  name: "admin-dashboard",

};
</script>