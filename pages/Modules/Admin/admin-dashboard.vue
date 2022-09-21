<template>
 
    <div id="layoutSidenav">
      <CommonSidebar />
      <div id="layoutSidenav_content">
        <CommonHeader/>
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
                  <h1>{{ todays_appointments }}</h1>
                </div>

                <h4>Today's Appointment</h4>
              </div>
            </div>

            <div class="col-sm-3">
              <div class="card card-bg card-bg-2">
                <div class="card-info">
                  <i class="fad fa-user"></i>
                  <h1>02</h1>
                </div>

                <h4>Personal Task</h4>
              </div>
            </div>

            <div class="col-sm-3">
              <div class="card card-bg card-bg-3">
                <div class="card-info">
                  <i class="fad fa-users"></i>
                 <h1>{{ team_task }}</h1>
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
import CommonHeader from '../../../components/CommonHeader.vue';
import CommonSidebar from '../../../components/CommonSidebar.vue';
export default {
  components: { CommonSidebar, CommonHeader },
  name: "admin-dashboard",
  data() {
        return {
            userdetails: null,
            todays_appointments: "0",
            personal_task: "0",
            team_task: "0",
            list: [],
        };
    },
      beforeMount() {
        this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
        this.Getrecord();
    },
    methods: {
        async Getrecord() {
            try {
                const headers = {
                    Authorization: "Bearer " + this.userdetails.access_token,
                    Accept: "application/json",
                    "Content-Type": "application/json",
                };
                const response = await this.$axios.get(
                    "all-mentari-staff/get",
                    { headers }
                );
                // console.log('my res', response.data);
                if (response.data.code == 200 || response.data.code == "200") {
                    this.team_task = response.data.team_task[0].team_task;
                    this.todays_appointments = response.data.today_appointment[0].todays_appointment;
                    console.log('my teamtask',this.team_task);
                    // this.personal_task = response.data.list1[0].PersonalTask;
                    
                } else {
                    window.alert("Something went wrong");
                }
            } catch (e) {

            }
        },
    }

};
</script>