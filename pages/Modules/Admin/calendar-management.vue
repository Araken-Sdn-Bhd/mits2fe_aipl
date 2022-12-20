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
                        <div class="card-header icon-title">
                            <a href="#"><i class="fa fa-calendar-alt"></i></a>
                            <h4>Calendar Management</h4>
                        </div>
                        <div class="card-body">
                            <div class="calendar" id="calendar"></div>
                            <div class="table-title d-flex align-items-center">
                                <h3>List of Event</h3>
                                <div class="btn-box ml-auto">
                                    <a @click="DownloadExcel" download class="btn btn-primary mt-0 text-white">

                                        <i class="fa fa-download"></i> Excel Template
                                    </a>
                                    <button type="submit" @click="OpenAttachPopUp" class="btn btn-primary text-white mt-0">
                                        <i class="fa fa-file-excel"></i> Upload Excel
                                    </button>
                                    <a href="/app/modules/Admin/exception" class="btn btn-primary mt-0 text-white">
                                        <i class="fa fa-plus"></i> Add Exception
                                    </a>
                                </div>
                            </div>
                            <table class="table table-striped data-table font-13 display nowrap" style="width: 100%">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Name</th>
                                        <th>Start Date</th>
                                        <th>End Date</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(cla, index) in list" :key="index">
                                        <td>{{ index+1 }}</td>
                                        <td>{{ cla.name }}</td>
                                        <td>{{ cla.start_date }}</td>
                                        <td>{{ cla.end_date }}</td>
                                        <td>
                                            <a @click="OnEditexception(cla)" class="action-icon icon-success"><i class="fa fa-edit"></i></a>
                                            <a style="cursor:pointer;" @click="Onremoveexception(cla)" class="action-icon icon-danger"><i class="fa fa-trash-alt"></i></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="attachpopup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-sm test-connection">
                    <div class="modal-content">
                        <div class="modal-body">
                            <input type="file" class="form-control" id="inputPassword3" @change="selectFile" />
                        </div>
                        <p v-if="errorList.length">
                            <ul>
                                <li style="color:red" v-for='err in errorList' :key='err'>
                                    {{ err }}
                                </li>
                            </ul>
                        </p>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary btn-ok" @click="onAttachdoc">
                                Submit
                            </button>
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
        }, ],
    },
    data() {
        return {
            list: [],
            userdetails: null,
            eventslist: [],
            errorList: [],
            file: null,
            loader: false,
        };
    },
    mounted() {
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
                $(document).ready(function () {
                    $(".data-table").DataTable({
                        searching: false,
                        bLengthChange: false,
                        bInfo: false,
                        // autoWidth: false,
                        // responsive: true,
                        scrollX: true,
                        language: {
                            paginate: {
                                next: '<i class="fad fa-arrow-to-right"></i>', // or '→'
                                previous: '<i class="fad fa-arrow-to-left"></i>', // or '←'
                            },
                        },
                    });
                    $('a[data-bs-toggle="tab"]').on("shown.bs.tab", function (e) {
                        $($.fn.dataTable.tables(true))
                            .DataTable()
                            .columns.adjust()
                            .responsive.recalc();
                    });
                });
                this.Calender();
            })
            .catch ((err) => {
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
    methods: {
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
        OpenAttachPopUp() {
            this.$nextTick(() => {
                $("#attachpopup").modal("show");
            });
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
                                this.Calender();
                            })
                            .catch ((err) => {
        this.loader = false;
        this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + err,
                  footer: ''
                });

                                console.error(err);
                            });
                        this.$nextTick(() => {
                            $("#attachpopup").modal("hide");
                            $("#insertpopup").modal("show");
                        });
                    } else {
                        this.$nextTick(() => {
                            $("#attachpopup").modal("hide");
                            $("#errorpopup").modal("show");
                        });
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
                this.$nextTick(() => {
                    $("#deletepopup").modal("show");
                });
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
                        this.Calender();
                    })
                    .catch ((err) => {
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
            } else {
                this.$swal.fire({
                    icon: 'error',
                    title: 'Oops... Something Went Wrong!',
                    text: 'the error is: ' + JSON.stringify(response.data.message),
                    footer: ''
                });
            }
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
    },
};
</script>
