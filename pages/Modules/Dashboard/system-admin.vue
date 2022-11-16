<template>
    <div id="layoutSidenav">
        <CommonSidebar />
        <div id="layoutSidenav_content">
            <CommonHeader />
            <main>
                <div class="container-fluid px-4 dashboard">
                    <div class="page-title dashboard-title">
                        <h1>System Admin</h1>
                        <!--
                        <div class="input-group dashboard-search">
                            <span class="input-group-text" id="basic-addon1"><i class="fa fa-search"></i></span>
                            <input type="text" class="form-control" placeholder="Search By Name/NRIC/Passport/MRN">
                        </div>
                        -->
                    </div>
                     <div class="row">
                        <div class="col-sm-6 mb-3">
                            <div class="card">
                                <div class="card-details">
                                    <img src="~/assets/images/group.png">
                                    <div class="text">
                                        <h1>{{ TotalMITS2User }}</h1>
                                        <p>TOTAL MITS2 USER</p>
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
                                    <img src="~/assets/images/hospital.png">
                                    <div class="text">
                                        <h1>{{ total_mentari }}</h1>
                                        <p>TOTAL MENTARI</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 mb-3">
                            <div class="card">
                                <div class="card-details">
                                    <img src="~/assets/images/location.png">
                                    <div class="text">
                                        <p>LOCATION OF MENTARI</p>
                                        <p>{{ state_name }}</p>
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
            TotalMITS2User: 0,
            personal_task: 0,
            total_mentari: 0,
            state_name: 0,
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
                    "/api/systemadmin/get",
                    { headers }
                );
                console.log('my res', response.data);
                if (response.data.code == 200) {
                    this.TotalMITS2User = response.data.list[0].TotalMITS2User;
                    this.PersonalTask = response.data.list[0].PersonalTask;
                    this.total_mentari = response.data.list[0].total_mentari;
                    this.state_name = response.data.list[0].state_name;
                } else {
                    window.alert("Something went wrong");
                }
            } catch (e) {

            }
        },
    },
};
</script>
