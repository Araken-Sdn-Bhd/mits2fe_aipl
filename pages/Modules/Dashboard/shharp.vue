<template>
    <div id="layoutSidenav">
        <CommonSidebar />
        <div id="layoutSidenav_content">
            <CommonHeader />
            <main>
                <div class="container-fluid px-4 dashboard">
                    <div class="page-title dashboard-title">
                        <h1>SHHARP</h1>
                        <div class="input-group dashboard-search">
                            <span class="input-group-text" id="basic-addon1"><i class="far fa-search"></i></span>
                            <input type="text" class="form-control" placeholder="Search By Name/NRIC/Passport/MRN">
                        </div>
                    </div>
                     <div class="row">
                        <div class="col-sm-4 mb-3">
                            <div class="card">
                              
                                <div class="card-details">
                                    <img src="~/assets/images/notepad.png">
                                    <div class="text">
                                        <h1>{{ today_case }}</h1>
                                        <p>TODAY'S CASE</p>
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
                                    <h4>SHHARP</h4>
                                </div>
                                <div class="row fliter-box">
                                    <div class="col-sm-4">
                                        <select class="form-select">
                                            <option>Select Year</option>
                                            <option>{{ report_year }}</option>
                                        </select>
                                    </div>
                                    <div class="col-sm-4">
                                        <select class="form-select">
                                            <option>Select Month</option>
                                            <option>{{ report_month }}</option>
                                        </select>
                                    </div>
                                    <div class="col-sm-4">
                                        <select class="form-select">
                                            <option>Race</option>
                                            <option>Range of Age</option>
                                            <option>Gender</option>
                                            <option>Method of Self harm</option>
                                            <option>Religion</option>
                                            <option>Marital Status</option>
                                            <option>Education</option>
                                            <option>Employment Status</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row mt-1 align-items-center">
                                    <div class="col-sm-4">
                                        <div class="text-box">
                                            <h4>TOTAL CASELOAD</h4>
                                            <h1>{{ total_case }}</h1>
                                        </div>
                                    </div>
                                    <div class="col-sm-8">
                                        <div class="chart-box">
                                            <!-- <h4>Employment Status</h4> -->
                                            <div id="bar-chart"></div>
                                        </div>
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
            today_case: 0,
            report_year: 0,
            report_month: 0,
            total_case: 0,
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
                    "/api/shharp/get",
                    { headers }
                );
                console.log('my res', response.data);
                if (response.data.code == 200) {
                    this.today_case = response.data.list[0].today_case;
                    this.report_year = response.data.list[0].report_year;
                    this.report_month = response.data.list[0].report_month;
                    this.total_case = response.data.list[0].total_case;
                } else {
                    window.alert("Something went wrong");
                }
            } catch (e) {

            }
        },
    },
};
</script>

