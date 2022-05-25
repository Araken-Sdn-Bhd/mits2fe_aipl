<template>
  <div id="layoutSidenav">
    <Adminsidebar />
    <div id="layoutSidenav_content">
      <AdminHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>System Setting</h1>
            <!-- <a href="#"><i class="fal fa-plus"></i> Add</a> -->
          </div>
          <div class="row">
            <div class="card mb-4">
              <div class="card-header icon-title">
                <a href="#"><i class="far fa-calendar-alt"></i></a>
                <h4>Calendar Management</h4>
              </div>
              <div class="card-body">
                <div class="calendar" id="calendar"></div>
                <div class="table-title d-flex align-items-center">
                  <h3>List of Event</h3>
                  <div class="btn-box ml-auto">
                    <button type="submit" class="btn btn-primary mt-0">
                      <i class="far fa-download"></i> Excel Template
                    </button>
                    <button type="submit" @click="OpenAttachPopUp" class="btn btn-primary mt-0">
                      <i class="far fa-file-excel"></i> Upload Excel
                    </button>
                    <a
                      href="/Modules/Admin/exception"
                      class="btn btn-primary mt-0"
                    >
                      <i class="far fa-plus"></i> Add Exception
                    </a>
                  </div>
                </div>
                <table
                  class="table table-striped data-table font-13"
                  style="width: 100%"
                >
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
                    <tr v-for="cla in list" :key="cla.id">
                      <td>{{ cla.id }}</td>
                      <td>{{ cla.name }}</td>
                      <td>{{ cla.start_date }}</td>
                      <td>{{ cla.end_date }}</td>
                      <td>
                        <a href="#" class="action-icon icon-success"
                          ><i class="far fa-edit"></i
                        ></a>
                        <a style="cursor:pointer;" @click="Onremoveexception(cla)" class="action-icon icon-danger"
                          ><i class="far fa-trash-alt"></i
                        ></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
         <div
          class="modal fade"
          id="attachpopup"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            class="modal-dialog modal-dialog-centered modal-sm test-connection"
          >
            <div class="modal-content">
              <div class="modal-body">
                <input
                  type="file"
                  class="form-control"
                  id="inputPassword3"
                  @change="selectFile"
                />
              </div>
               <p v-if="errorList.length">
<ul>
        <li style="color:red"  v-for='err in errorList'
    :key='err' >
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
import Adminsidebar from "../../../components/Admin/Adminsidebar.vue";
import AdminHeader from "../../../components/Admin/Admin_ToHeader.vue";
import "@/assets/css/fullcalendar.css";
export default {
  components: { Adminsidebar, AdminHeader },
  name: "calendar-management",
  head: {
    script: [
      {
        src: "/js/fullcalendar.js",
        body: true,
        crossorigin: "anonymous",
      },
    ],
  },
  data() {
    return {
      list: [],
      userdetails: null,
      eventslist: [],
      errorList: [],
      file: null,
    };
  },
  mounted() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    const headers = {
      Authorization: "Bearer " + this.userdetails.access_token,
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    const axios = require("axios").default;
    axios
      .get(
        `${this.$axios.defaults.baseURL}`+"calendar-management/getAnnouncementList",
        { headers }
      )
      .then((resp) => {
        this.list = resp.data.list;
        this.Calender();
      })
      .catch((err) => {
        console.error(err);
      });
    setTimeout(() => {
      this.Calender();
    }, 500);
  },
  methods: {
    async Calender() {
      this.eventslist=[];
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
          body.append("login-user-ID", this.userdetails.user.id);
          body.append("file", this.file);
          const response = await this.$axios.post(
            "calendar-management/upload-exception",
            body,
            {
              headers,
            }
          );
          console.log("result", response);
          if (response.data.code == 200 || response.data.code == "200") {
            this.$nextTick(() => {
              $("#attachpopup").modal("hide");
              $("#insertpopup").modal("show");
            });
          } else {
            this.$nextTick(() => {
              //   this.errorList.push(response.data.message.uploaded_path[0]);
              $("#attachpopup").modal("hide");
              $("#errorpopup").modal("show");
            });
          }
        }
      } catch (e) {
        console.log("my exception", e);
      }
    },
    async Onremoveexception(data) {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "calendar-management/remove",
        {
          added_by: this.userdetails.user.id,
          id: data.id,
        },
        { headers }
      );
      if (response.data.code == 200) {
        this.$nextTick(() => {
          $("#deletepopup").modal("show");
        });
        const axios = require("axios").default;
        axios
          .get(
           `${this.$axios.defaults.baseURL}`+"calendar-management/getAnnouncementList",
            { headers }
          )
          .then((resp) => {
            this.list = resp.data.list;
            this.Calender();
          })
          .catch((err) => {
            console.error(err);
          });
      } else {
        this.$nextTick(() => {
          $("#errorpopup").modal("show");
        });
      }
    },
  },
};
</script>