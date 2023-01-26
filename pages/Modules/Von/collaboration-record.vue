<template>
<div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
        <CommonHeader />
        <main>
            <Loader v-if="loader" />
            <div class="container-fluid px-4">
                <div class="page-title">
                    <h1>List of Collaboration Record</h1>
                </div>

                <div class="card mb-4">
                    <div class="card-body">
                        <div class="search-table mt-2">
                            <div class="row">
                                <div class="col-sm-3 mb-2">
                                    <select class="form-select" v-model="section" @change="Onseacrh">
                                        <option value="">Select Type of Application</option>
                                        <option value="individual">Individual</option>
                                        <option value="group">Group</option>
                                        <option value="org">Organization</option>
                                    </select>
                                </div>

                                <div class="col-sm-3 mb-2">
                                    <select class="form-select" v-model="area_of_involvement" @change="Onseacrh">
                                        <option value="">Select Areas of Involvement</option>
                                        <option value="Volunteerism">Volunteerism</option>
                                        <option value="Outreach - Project Collaboration">
                                            Outreach - Project Collaboration
                                        </option>
                                        <option value="Networking - Make a Contribution">
                                            Networking - Make a Contribution
                                        </option>
                                    </select>
                                </div>

                                <div class="col-sm-3 mb-2">
                                    <select class="form-select" v-model="service" @change="Onseacrh">

                                        <option value="">Select Services</option>
                                        <option value="Consultation/Counselling">
                                            Consultation/Counselling
                                        </option>
                                        <option value="Work-based Rehabilitation">
                                            Work-based Rehabilitation
                                        </option>
                                        <option value="Awareness Or Psychoeducation">
                                            Awareness Or Psychoeducation
                                        </option>
                                        <option value="Recreational Therapy">
                                            Recreational Therapy
                                        </option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>

                                <div class="col-sm-3 mb-2 search-box">
                                    <div class="input-group">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="fa fa-search"></i>
                                        </span>
                                        <input type="text" class="form-control" placeholder="Search Name/Company Name" v-model="name" @keyup="Onseacrh" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- search-table -->
                        <div style="overflow-x:auto;">
                            <table class="table table-striped data-table font-13 display nowrap" style="width: 100%">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th style="min-width: 200px">Name/Company Name</th>
                                    <th style="min-width: 200px">Type Of Application</th>
                                    <th style="min-width: 200px">Areas Of Involvement</th>
                                    <th style="min-width: 200px">Services</th>
                                    <th style="min-width: 100px">Contact NO</th>
                                    <th style="min-width: 200px">Email</th>
                                    <th style="min-width: 50px">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(app, index) in list" :key="index">
                                    <td>{{ index + 1 }}</td>
                                    <td>{{ app.name }}</td>
                                    <td>{{ app.section }}</td>
                                    <td>{{ app.aoi }}</td>
                                    <td>{{ app.services_type }}</td>
                                    <td>{{ app.phone_number }}</td>
                                    <td>{{ app.email }}</td>
                                    <td>
                                        <a style="pointer:cursor;" @click="OnView(app)" class="view" title="view record">
                                            <i class="fa fa-eye"></i>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <von-footer></von-footer>
    </div>
</div>
</template>

<script>
import Loader from "../../../components/loader.vue";
import VonFooter from "../../../components/Von/VonFooter.vue";
import CommonHeader from "../../../components/CommonHeader.vue";
import CommonSidebar from "../../../components/CommonSidebar.vue";
export default {
    components: {
        CommonHeader,
        CommonSidebar,
        VonFooter,
        Loader
    },
    name: "list-of-application",
    data() {
        return {
            userdetails: null,
            list: [],
            name: "",
            section: "",
            area_of_involvement: "",
            service: "",
            loader: false,
        };
    },
    beforeMount() {
        this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    },
    mounted() {

        this.loader = true;
        const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
        };
        const axios = require("axios").default;
        axios
            .post(
                `${this.$axios.defaults.baseURL}` + "von/collaboration-list", {
                    email: this.userdetails.user.email,
                    branch_id: this.userdetails.branch.branch_id
                },

                {
                    headers
                }
            )
            .then((resp) => {
                this.list = resp.data.list;
                console.log("my lst", resp.data);
                $(document).ready(function () {
                });
                this.loader = false;
            })
            .catch ((err) => {
        this.loader = false;
        this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + err,
                  footer: ''
                });

                this.loader = false;
                this.$swal.fire({
                    icon: 'error',
                    title: 'Oops... Something Went Wrong!',
                    text: 'the error is: ' + err,
                    footer: ''
                });
            });
    },
    methods: {
        async Onseacrh() {
            this.loader = true;
            const headers = {
                Authorization: "Bearer " + this.userdetails.access_token,
                Accept: "application/json",
                "Content-Type": "application/json",
            };
            const response = await this.$axios.post(
                "von/collaboration-list", {
                    name: this.name,
                    section: this.section,
                    aoi: this.area_of_involvement,
                    service: this.service,
                    email: this.userdetails.user.email,
                    branch_id: this.userdetails.branch.branch_id
                }, {
                    headers
                }
            );
            console.log("search response", response.data);
            if (response.data.code == 200) {
                this.list = [];
                this.loader = false;
                this.list = response.data.list;
            } else {
                this.loader = false;
                this.list = response.data.list;
            }
        },
        OneditClick(id) {
            this.$router.push({
                path: "/modules/Intervention/update-new-job",
                query: {
                    id: id
                },
            });
        },
        OnView(data) {

            if (data.section == "individual") {
                this.$router.push({
                    path: "/modules/Von/view-individual",
                    query: {
                        id: data.id,
                        type: data.section
                    },
                });
            } else if (data.section == "group") {
                this.$router.push({
                    path: "/modules/Von/view-group",
                    query: {
                        id: data.id,
                        type: data.section
                    },
                });
            } else {
                this.$router.push({
                    path: "/modules/Von/view-organization",
                    query: {
                        id: data.id,
                        type: data.section
                    },
                });
            }
        },
    },
};
</script>
