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
                            <span class="input-group-text" id="basic-addon1"><i type="button" v-on:click="SearchPatient" class="fa fa-search"></i></span>
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
                        <div class="col-sm-6 mb-3">
                            <div class="card">
                                <div class="card-header dashboard-header">
                                    <h4>Upcoming Review for Patient Care Plan :</h4>
                                </div>
                                <table class="announcement-table" >
                                    <tbody>
                                        <tr>
                                            <div v-if="index < review_patient.length" v-for="(ann,index) in AnnouncmentToShow" :key="index">
                                                    <td><span class="number">{{ index+1 }}</span></td>
                                                    <td><a v-bind:href="review_route+ review_patient[ann-1].id+'&type=view'">{{ review_patient[ann-1].name_asin_nric }} ({{ getFormattedDate(review_patient[ann-1].next_review_date) }})</a></td>
                                            </div>
                                            <div v-if="AnnouncmentToShow< review_patient.length || review_patient.length > AnnouncmentToShow">
                                                    <button class="btn btn-primary btn-text btn-seeall" @click="AnnouncmentToShow += 5">Show More</button>
                                            </div>
                                        </tr>
                                        <!-- <tr>
                                            <td><span class="number">02</span></td>
                                            <td>Hari Kesihatan Mental</td>
                                        </tr> -->
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="col-sm-6 mb-3">
                            <div class="card">
                                <div class="card-header dashboard-header">
                                    <h4>Patient Clinical Documentation in Draft Status  :</h4>
                                </div>
                                <table class="announcement-table" >
                                    <tbody>
                                        <tr>
                                            <div v-if="index < cd_draft.length" v-for="(ann,index) in AnnouncmentToShow" :key="index">
                                                    <td><span class="number">{{ index+1 }}</span></td>
                                                    <td><a v-bind:href="cd_draft[ann-1].route">{{ cd_draft[ann-1].name }} ({{ getFormattedDate(cd_draft[ann-1].updated_at) }})</a></td>
                                            </div>
                                            <div v-if="AnnouncmentToShow< cd_draft.length || cd_draft.length > AnnouncmentToShow">
                                                    <button class="btn btn-primary btn-text btn-seeall" @click="AnnouncmentToShow += 5">Show More</button>
                                            </div>
                                        </tr>
                                        <!-- <tr>
                                            <td><span class="number">02</span></td>
                                            <td>Hari Kesihatan Mental</td>
                                        </tr> -->
                                    </tbody>
                                </table>
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
                                                    <td><a v-bind:href="announcement_route+ list[ann-1].id">{{ list[ann-1].title }} ({{ getFormattedDate(list[ann-1].start_date) }})</a></td>
                                            </div>
                                            <div v-if="AnnouncmentToShow< list.length || list.length > AnnouncmentToShow">
                                                    <button class="btn btn-primary btn-text btn-seeall" @click="AnnouncmentToShow += 5">Show More</button>
                                            </div>
                                        </tr>
                                        <!-- <tr>
                                            <td><span class="number">02</span></td>
                                            <td>Hari Kesihatan Mental</td>
                                        </tr> -->
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
            todays_appointments: "0",
            personal_task: "0",
            team_task: "0",
            list: [],
            cd_draft:[],
            review_patient:[],
            AnnouncmentToShow:3,
            totalAnouncement:0,
            search:'',
            announcement_route:'',
            review_route:'',
        };
    },
    beforeMount() {
        this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
        if(this.userdetails){
      this.id=this.userdetails.user.id;
      this.email=this.userdetails.user.email;
      this.branch=this.userdetails.branch.branch_id;
      this.name=this.userdetails.user.name;
      this.branch_name=this.userdetails.branch.hospital_branch_name;

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
                    { headers, params: {branch: this.branch, email: this.email, name: this.name, branch_name:this.branch_name}}
                );
                if (response.data.code == 200 || response.data.code == "200") {
                    this.todays_appointments = response.data.today_appointment;
                    this.personal_task = response.data.personal_task;
                    this.team_task = response.data.team_task;
                    this.list = response.data.list;
                    this.announcement_route= response.data.announcement_route;
                    this.review_patient = response.data.review_patient;
                    this.cd_draft = response.data.cd_draft;
                    this.review_route=response.data.review_route;

                } else {
                    this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + this.error,
                  footer: ''
                });
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
    },
};
</script>
