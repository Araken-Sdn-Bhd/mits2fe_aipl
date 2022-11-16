<template>

    <div id="layoutSidenav">
      <CommonSidebar />
      <div id="layoutSidenav_content">
        <CommonHeader/>
        <main>
        <div class="container-fluid px-4 dashboard">
          <div class="page-title dashboard-title">
            <h1>Admin and Specialist in Charge Dashboard</h1>
            <div class="input-group dashboard-search">
              <span class="input-group-text" id="basic-addon1"><i type="button" v-on:click="SearchPatient" class="fa fa-search"></i></span>
                <input type="text" class="form-control" v-model="search"  placeholder="Search By Name/NRIC/Passport/MRN"/>
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
                  <h1> {{ personal_task }} </h1>
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

            <div class="col-sm-3">
              <div class="card card-bg card-bg-4">
                <div class="card-info">
                  <i class="fad fa-clock"></i>
                 <h1>{{ request_appointment }}</h1>
                </div>

                <h4>Request Appointment</h4>
              </div>
            </div>
          </div>


          <!-- row -->

          <div class="row">
            <div class="col-sm-12">
              <div class="card mt-4 mb-3">
                <div class="card-header dashboard-header">
                  <h4>ANNOUNCEMENT:</h4>
                </div>
                <table class="announcement-table">
                  <tbody>
                    <tr>
                      <div v-if="index < list.length" v-for="(ann,index) in AnnouncmentToShow" :key="index">
                            <td><span class="number">{{ index+1 }}</span></td>
                            <td><a v-bind:href="'/Modules/Admin/view-event?id='+ list[ann-1].id">{{ list[ann-1].title }} ({{ getFormattedDate(list[ann-1].start_date) }})</a></td>
                      </div>
                      <div v-if="AnnouncmentToShow< list.length || list.length > AnnouncmentToShow">
                            <button class="btn btn-primary btn-text btn-seeall" @click="AnnouncmentToShow += 5">Show More</button>
                      </div>
                    </tr>
                  </tbody>
                </table>
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
import moment from 'moment';
import CommonHeader from '../../../components/CommonHeader.vue';
import CommonSidebar from '../../../components/CommonSidebar.vue';
export default {
  components: { CommonSidebar, CommonHeader },
  name: "admin-dashboard",
  data() {
        return {
            userdetails: null,
            request_appointment: "0",
            todays_appointments: "0",
            personal_task: "0",
            team_task: "0",
            AnnouncmentToShow:3,
            totalAnouncement:0,
            search:'',

            list: [],
        };
    },
      beforeMount() {
        this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
        if(this.userdetails){
          this.id=this.userdetails.user.id;
          this.email=this.userdetails.user.email;
          this.branch=this.userdetails.branch.branch_id;
        }
        this.GetTodayAppointment();

    },

    methods: {
        // async Getrecord() {
        //     try {
        //         const headers = {
        //             Authorization: "Bearer " + this.userdetails.access_token,
        //             Accept: "application/json",
        //             "Content-Type": "application/json",
        //         };
        //         const response = await this.$axios.get(
        //             "all-mentari-staff/get",
        //             { headers, params: {branch: this.branch}}
        //         );
        //         // console.log('my res', response.data);
        //         if (response.data.code == 200 || response.data.code == "200") {
        //             //this.team_task = response.data.team_task[0].team_task;

        //             this.todays_appointments = response.data.today_appointment[0].todays_appointment;

        //             console.log('my teamtask',this.team_task);
        //             // this.personal_task = response.data.list1[0].PersonalTask;

        //         } else {
        //             window.alert("Something went wrong");
        //         }
        //     } catch (e) {

        //     }
        // },

        async GetTodayAppointment() {
            try {
                const headers = {
                    Authorization: "Bearer " + this.userdetails.access_token,
                    Accept: "application/json",
                    "Content-Type": "application/json",
                };
                const response = await this.$axios.get(
                    "user-admin-clerk/get_data",
                    { headers, params: {branch: this.branch, email: this.email}}
                );

                if (response.data.code == 200 || response.data.code == "200") {
                    this.todays_appointments = response.data.today_appointment;
                    this.personal_task = response.data.personal_task;
                    this.team_task = response.data.team_task;
                    this.request_appointment = response.data.request_appointment;
                    this.list = response.data.list;


                } else {
                    window.alert("Something went wrong");
                }
            } catch (e) {

            }
        },

        getFormattedDate(date) {
            return moment(date).format("DD-MM-YYYY")
        },

        SearchPatient() {

            localStorage.setItem('keyword',(this.search));
            this.$router.push("/modules/Patient/patient-list" );
        },

    }

};
</script>
