<template>
    <div id="layoutSidenav">
        <CommonSidebar />
        <div id="layoutSidenav_content">
            <CommonHeader />
            <main>
                <loader v-if="loader" />
                <div class="container-fluid px-4">
                    <div class="page-title">
                        <h1>System Setting</h1>
                    </div>
                    <div class="row">
                        <div class="card mb-4">
                            <div class="card-body">
                                <div class="ml-2 col-md-12">
                                    Add New Exception (Public Holiday/Events)
                                    <button v-if="visibleProfile == true" v-b-toggle.collapse-1 type="button"
                                        class="float-right btn-fill btn-md">
                                        <i class="fa fa-minus"></i>
                                    </button>
                                    <button v-if="visibleProfile == false" v-b-toggle.collapse-1 type="button"
                                        class="float-right btn-fill btn-md">
                                        <i class="fa fa-plus"></i>
                                    </button>
                                    <hr />
                                    <b-collapse id="collapse-1" class="mt-2" v-model="visibleProfile">

                                        <form class="mt-3" method="post" @submit.prevent="onexception">
                                            <div class="row"><label style="color:red">Option 1 : Add
                                                    individually</label></div>
                                            <div class="row">
                                                <div class="col-sm-3">
                                                    <div class="mb-3">
                                                        <label class="form-label">Date</label>
                                                        <input type="date" class="form-control" v-model="startdate" />
                                                    </div>
                                                </div>
                                                <div class="col-sm-3">
                                                    <div class="mb-3">
                                                        <label class="form-label">End Date</label>
                                                        <input type="date" class="form-control" v-model="enddate" />
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="mb-3">
                                                        <label class="form-label">Public holiday/Events</label>
                                                        <input type="text" class="form-control" v-model="name" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <div class="mb-3">
                                                        <label for="" class="form-label">Branch</label>
                                                        <select v-model="branch_id" class="form-select"
                                                            aria-label="Default select example">
                                                            <option value="0">0 : All Branch</option>
                                                            <option v-for="bnch in branchlist" v-bind:key="bnch.id"
                                                                v-bind:value="bnch.id">
                                                                {{ bnch.id }} : {{ bnch.hospital_branch_name }}
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="mb-3">
                                                        <label class="form-label">Description</label>
                                                        <input type="textarea" class="form-control"
                                                            v-model="description" />

                                                    </div>
                                                </div>
                                            </div>
                                            <!-- row -->
                                            <p v-if="errorList.length">
                                            <ul>
                                                <li style="color:red" v-for='err in errorList' :key='err'>{{ err }}</li>
                                            </ul>
                                            </p>
                                            <div class="d-flex">
                                                <div class="ml-auto">
                                                    <button type="submit" class="btn btn-success btn-text">
                                                        <i class="fad fa-save"></i> Save
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                        <br>
                                        <br>
                                        <div class="row"><label style="color:red">Option 2 : Bulk Upload</label></div>
                                        <label class="form-label"><a @click="DownloadExcel" download
                                                class="btn-fill btn-md" title="click to download excel template"><i
                                                    class="fa fa-download"></i>Click to download Excel
                                                Template</a></label>

                                        <input type="file" class="form-control" id="inputPassword3"
                                            @change="selectFile" />
                                        <br>
                                        <div class="d-flex">
                                            <div class="ml-auto">
                                                <button type="submit" class="btn btn-success btn-text"
                                                    @click="onAttachdoc">
                                                    <i class="fad fa-upload"></i> Upload
                                                </button>
                                            </div>
                                        </div>

                                    </b-collapse>
                                </div>


                            </div>
                            <br>
                            <div class="card-header icon-title">
                                <a href="#"><i class="fa fa-calendar-alt"></i></a>
                                <h4>Calendar Management</h4>
                            </div>
                            <div class="card-body">
                                <div class="calendar" id="calendar"></div>
                                <div class="table-title d-flex align-items-center">
                                    <h3>List of Event</h3>
                                </div>
                                <table class="table table-striped data-table font-13 display nowrap"
                                    style="width: 100%">
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Branch</th>
                                            <th>Public Holiday/Event</th>
                                            <th>From</th>
                                            <th>Until</th>
                                            <th>Description</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(cla, index) in list" :key="index">
                                            <td>#{{ index + 1 }}</td>
                                            <td>{{ cla.branch_id }}</td>
                                            <td>{{ cla.name }}</td>
                                            <td>{{ getFormattedDate(cla.start_date) }}</td>
                                            <td>{{ getFormattedDate(cla.until_date) }}</td>
                                            <td>{{ cla.description }}</td>

                                            <td>
                                                <a @click="editexception(cla)" class="action-icon icon-success"><i
                                                        class="fa fa-edit"></i></a>
                                                <a style="cursor:pointer;" @click="Onremoveexception(cla)"
                                                    class="action-icon icon-danger"><i class="fa fa-trash-alt"></i></a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p v-show="!list.length" style=" padding: 0px; margin: 10px;
                                color: red;
                                display: flex;
                                justify-content: center;">
                                    No Record Found
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
import CommonHeader from "../../../components/CommonHeader.vue";
import CommonSidebar from "../../../components/CommonSidebar.vue";
import "@/assets/css/fullcalendar.css";
import moment from 'moment';
export default {
    components: {
        CommonSidebar,
        CommonHeader
    },
    name: "calendar-management",
    head: {
        script: [{
            src: "/app/js/fullcalendar.js",
            body: true,
            crossorigin: "anonymous",
        },],
    },
    data() {
        return {
            list: [],
            userdetails: null,
            eventslist: [],
            errorList: [],
            file: null,
            loader: false,
            visibleProfile: false,
            userdetails: null,
            errorList: [],
            StateList: [],
            branchlist: [],
            startdate: "",
            enddate: "",
            description: "",
            name: "",
            Id: 0,
            branch_id: 0,
        };
    },
    mounted() {
        this.getList();

    },
    beforeMount() {

        this.GetBranchList();
    },
    methods: {
        getFormattedDate(date) {
            return moment(date).format("DD-MM-YYYY")
        },
        async getList() {
            this.loader = true;
            this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
            const headers = {
                Authorization: "Bearer " + this.userdetails.access_token,
                Accept: "application/json",
                "Content-Type": "application/json",
            };
            const axios = require("axios").default;
            axios
                .get(
                    `${this.$axios.defaults.baseURL}` +
                    "calendar-management/getAnnouncementList", {
                    headers
                }
                )
                .then((resp) => {
                    this.list = resp.data.list;
                    this.loader = false;

                    this.Calender();
                })
                .catch((err) => {
                    this.loader = false;
                    this.$swal.fire({
                        icon: 'error',
                        title: 'Oops... Something Went Wrong!',
                        text: 'the error is: ' + err,
                        footer: ''
                    });

                    console.error(err);
                    this.$swal.fire({
                        icon: 'error',
                        title: 'Oops... Something Went Wrong!',
                        text: 'the error is: ' + err,
                        footer: ''
                    });
                });
            setTimeout(() => {
                this.Calender();
            }, 1000);
        },
        async GetBranchList() {
            this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
            const headers = {
                Authorization: "Bearer " + this.userdetails.access_token,
                Accept: "application/json",
                "Content-Type": "application/json",
            };

            const response = await this.$axios.get("hospital/branch-excluded-hospital-list", {
                headers,
            });
            if (response.data.code == 200 || response.data.code == "200") {
                this.branchlist = response.data.list;
            } else {
                this.branchlist = [];
            }
        },
        async onexception() {
            this.errorList = [];
            try {
                if (!this.startdate) {
                    this.errorList.push("Date is required");
                }
                if (!this.enddate) {
                    this.errorList.push("End Date is required");
                }
                if (!this.name) {
                    this.errorList.push("Name is required");
                }
                if (!this.description) {
                    this.errorList.push("Description is required");
                } else {
                    const headers = {
                        Authorization: "Bearer " + this.userdetails.access_token,
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    };
                    if (this.Id) {
                        const response = await this.$axios.post(
                            "calendar-management/add",
                            {
                                added_by: this.userdetails.user.id,
                                name: this.name,
                                start_date: this.startdate,
                                end_date: this.enddate,
                                description: this.description,
                                branch_id: this.branch_id,
                                type: "update",
                                id: this.Id,
                            },
                            { headers }
                        );
                        if (response.data.code == 200) {
                            this.$swal.fire(
                                'Successfully Update',
                            );
                            this.getList();
                            this.visibleProfile = false;
                        } else {
                            this.$swal.fire({
                                icon: 'error',
                                title: 'Oops... Something Went Wrong!',
                                text: 'the error is: ' + this.error,
                                footer: ''
                            });
                        }
                    } else {
                        const response = await this.$axios.post(
                            "calendar-management/add",
                            {
                                added_by: this.userdetails.user.id,
                                name: this.name,
                                start_date: this.startdate,
                                end_date: this.enddate,
                                description: this.description,
                                branch_id: this.branch_id,
                                type: "add",
                            },
                            { headers }
                        );
                        if (response.data.code == 200) {
                            this.$swal.fire(
                                'Successfully Insert',
                            );
                            this.getList();
                            this.visibleProfile = false;
                        } else {
                            this.$swal.fire({
                                icon: 'error',
                                title: 'Oops... Something Went Wrong!',
                                text: 'the error is: ' + this.error,
                                footer: ''
                            });
                        }
                    }
                }
            } catch (e) {
                this.loader = false;
                this.$swal.fire({
                    icon: 'error',
                    title: 'Oops... Something Went Wrong!',
                    text: 'the error is: ' + e,
                    footer: ''
                });
            }
        },
        async Calender() {
            this.eventslist = [];
            this.list.forEach((value, index) => {
                var obj = {};
                obj.start = value.start_date;
                obj.end = value.end_date;
                obj.overlap = false;
                obj.color = "#46bdc6";
                obj.title = value.name;
                this.eventslist.push(obj);
            });
            var calendarEl = document.getElementById("calendar");
            var calendar = new FullCalendar.Calendar(calendarEl, {
                height: "550px",
                headerToolbar: {
                    left: "title",
                    center: "",
                    right: "today prev,next",
                },

                navLinks: true, // can click day/week names to navigate views
                businessHours: true, // display business hours
                editable: true,
                selectable: true,
                events: this.eventslist,
            });
            calendar.render(this.eventslist, true);
        },

        selectFile(event) {
            this.file = event.target.files[0];
        },
        async onAttachdoc() {
            this.errorList = [];
            try {
                if (!this.file) {
                    this.errorList.push("please select a file");
                } else {
                    const headers = {
                        Authorization: "Bearer " + this.userdetails.access_token,
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    };
                    let body = new FormData();

                    body.append("added_by", this.userdetails.user.id);
                    body.append("exceptions", this.file);

                    const response = await this.$axios.post(
                        "calendar-management/upload-exception",
                        body, {
                        headers,
                    }
                    );
                    console.log("result", response);
                    if (response.data.code == 200 || response.data.code == "200") {
                        this.$swal.fire(
                            'Successfully Upload',
                        );
                        this.getList();
                        this.visibleProfile = false;
                        this.file = null;
                    }
                }
            } catch (e) {
                console.log("my exception", e);
                this.$swal.fire({
                    icon: 'error',
                    title: 'Oops... Something Went Wrong!',
                    text: 'the error is: ' + e,
                    footer: ''
                });
            }
        },
        async Onremoveexception(data) {
            this.$swal.fire({
                title: 'Are you sure to delete this?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, cancel!',
                reverseButtons: true
            }
            ).then(async (result) => {
                if (result.isConfirmed) {
                    const headers = {
                        Authorization: "Bearer " + this.userdetails.access_token,
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    };
                    const response = await this.$axios.post(
                        "calendar-management/remove", {
                        added_by: this.userdetails.user.id,
                        id: data.id,
                    }, {
                        headers
                    }
                    );
                    if (response.data.code == 200) {
                        this.$swal.fire('Deleted Successfully', '', 'success');
                        this.getList();
                    }
                }
            })
        },
        OnEditexception(data) {
            this.$router.push({
                path: "/modules/Admin/exception",
                query: {
                    id: data.id
                },
            });
        },

        startDownload() {
            this.loader = true;
        },
        finishDownload() {
            this.loader = false;
        },
        async DownloadExcel() {
            this.errorList = [];
            this.error = null;
            try {
                const headers = {
                    Authorization: "Bearer " + this.userdetails.access_token,
                    Accept: "application/json",
                    "Content-Type": "application/json",
                };
                const response = await this.$axios.post(
                    "calendar-management/download-excel", {
                    user_role: this.userdetails.user.id,
                }, {
                    headers
                }
                );
                console.log("my excel", response.data);
                if (response.data.code == 200) {
                    window.open(response.data.filepath, "_blank");
                } else {
                    this.error = "No Record Found";
                }
            } catch (e) {
                this.$swal.fire({
                    icon: 'error',
                    title: 'Oops... Something Went Wrong!',
                    text: 'the error is: ' + e,
                    footer: ''
                });
            }

        },

        async editexception(cla) {

            this.visibleProfile = true;
            this.Id = cla.id;
            const headers = {
                Authorization: "Bearer " + this.userdetails.access_token,
                Accept: "application/json",
                "Content-Type": "application/json",
            };
            const response = await this.$axios.post(
                "calendar-management/getAnnouncementListById",
                {
                    id: cla.id,
                },
                { headers }
            );
            console.log("response", response.data);
            if (response.data.code == 200) {

                this.startdate = response.data.list[0].start_date;
                this.enddate = response.data.list[0].end_date;
                this.description = response.data.list[0].description;
                this.name = response.data.list[0].name;
                this.branch_id = response.data.list[0].branch_id;
            } else {
                this.$swal.fire({
                    icon: 'error',
                    title: 'Oops... Something Went Wrong!',
                    text: 'the error is: ' + this.error,
                    footer: ''
                });
            }
        },
    },
};
</script>
