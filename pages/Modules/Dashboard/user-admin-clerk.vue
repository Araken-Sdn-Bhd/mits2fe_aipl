<template>
    <div id="layoutSidenav">
        <CommonSidebar />
        <div id="layoutSidenav_content">
            <CommonHeader />
            <main>
                <div class="container-fluid px-4 dashboard">
                    <div class="page-title dashboard-title">
                        <h1>User Admin Clerk</h1>
                        <div class="input-group dashboard-search">
                            <span class="input-group-text" id="basic-addon1"><i class="fa fa-search"></i></span>
                            <input type="text" class="form-control" placeholder="Search By Name/NRIC/Passport/MRN">
                        </div>
                    </div>
                     <div class="row">
                        <div class="col-sm-6 mb-3">
                            <div class="card">
                                <div class="card-details">
                                    <img src="~/assets/images/schedule.png">
                                    <div class="text">
                                        <h1>{{ todays_appointment }}</h1>
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
                        <div class="col-sm-6 mb-3">
                            <div class="card">
                                <div class="card-details">
                                    <img src="~/assets/images/notepad.png">
                                    <div class="text">
                                        <h1>{{ request_appointment }}</h1>
                                        <p>REQUEST APPOINTMENT</p>
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
                                        <tr>
                                            <td><span class="number">01</span></td>
                                            <td>Pekeliling</td>
                                        </tr>
                                        <tr>
                                            <td><span class="number">02</span></td>
                                            <td>Hari Kesihatan Mental</td>
                                        </tr>
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
import CommonHeader from "../../../components/CommonHeader.vue";
import CommonSidebar from "../../../components/CommonSidebar.vue";
export default {
    components: { CommonSidebar, CommonHeader },
    name: "admin-dashboard",
    data() {
        return {
            userdetails: null,
            todays_appointment: 0,
            personal_task: 0,
            team_task: 0,
            request_appointment: 0,
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
                    "/api/user-admin-clerk/get",
                    { headers }
                );
                console.log('my res', response.data);
                if (response.data.code == 200) {
                    this.todays_appointment = response.data.list[0].todays_appointment;
                    this.personal_task = response.data.list[0].personal_task;
                    this.team_task = response.data.list[0].team_task;
                    this.request_appointment = response.data.list[0].request_appointment;
                } else {
                    window.alert("Something went wrong");
                }
            } catch (e) {

            }
        },
    },
};
</script>
