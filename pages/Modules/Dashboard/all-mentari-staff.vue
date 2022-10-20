<template>
    <div id="layoutSidenav">
        <CommonSidebar />
        <div id="layoutSidenav_content">
            <CommonHeader />
            <main>
                <div class="container-fluid px-4 dashboard">
                    <div class="page-title dashboard-title">
                        <h1>All Mentari Staff</h1>
                        <div class="input-group dashboard-search">
                            <span class="input-group-text" id="basic-addon1"><i type="button" v-on:click="SearchPatient" class="far fa-search"></i></span>
                            <input type="text" class="form-control" v-model="search"  placeholder="Search By Name/NRIC/Passport/MRN"/>
                        </div>
                    </div>
                     <div class="row">
                        <div class="col-sm-6 mb-3">
                            <div class="card">
                                <div class="card-details">
                                    <img src="~/assets/images/schedule.png">
                                    <div class="text">
                                        <h1>{{ todays_appointments }}</h1>
                                        <p>TODAY'S APPOINTMENT</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 mb-3">
                            <div class="card">    
                                <div class="card-details">
                                    <img src="~/assets/images/man.png">
                                    <div class="text">
                                        <h1>{{ personal_task }}</h1>
                                        <p>PERSONAL TASK</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 mb-3">
                            <div class="card">
                                <div class="card-details">
                                    <img src="~/assets/images/team.png">
                                    <div class="text">
                                        <h1>{{ team_task }}</h1>
                                        <p>TEAM TASK</p>
                                    </div>
                                </div>
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
                                        <tr  v-for="(ann,index) in list" :key="index">
                                            <td><span class="number">{{ index+1 }}</span></td>
                                            <td><a v-bind:href="'/Modules/Admin/view-event?id='+ ann.id">{{ ann.title }} ({{ getFormattedDate(ann.start_date) }})</a></td>
                                        </tr>
                                        <!-- <tr>
                                            <td><span class="number">02</span></td>
                                            <td>Hari Kesihatan Mental</td>
                                        </tr> -->
                                    </tbody>
                                </table>
                                <a href="#/" class="btn btn-primary btn-text btn-seeall">SEE ALL</a>
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
            todays_appointments: "0",
            personal_task: "0",
            team_task: "0",
            list: [],
            search:'',
        };
    },
    beforeMount() {
        this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
        if(this.userdetails){
      this.id=this.userdetails.user.id;
      this.email=this.userdetails.user.email; 
      this.branch=this.userdetails.branch.branch_id;
      
    }
    },
    mounted(){
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
                    { headers, params: {branch: this.branch, email: this.email}}
                );
                // console.log('my res', response.data);
                if (response.data.code == 200 || response.data.code == "200") {
                    this.todays_appointments = response.data.today_appointment;
                    this.personal_task = response.data.personal_task;
                    this.team_task = response.data.team_task;
                    this.list = response.data.list;
                    // this.personal_task = response.data.list1[0].PersonalTask;
                    
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
            this.$router.push("/Modules/Patient/patient-list" );
        },
    },
};
</script>
