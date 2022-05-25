<template>
  <div id="layoutSidenav">
    <div>
      <PatientLoginSidebar />
    </div>
    <div id="layoutSidenav_content">
      <div>
        <PatientLoginHeader />
      </div>
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>Calendar</h1>
            <a href="/Modules/Patient/book-appointment" class="add-btn"
              ><i class="fal fa-plus"></i
            ></a>
          </div>
          <div class="card mb-4">
            <div class="card-body">
              <div class="search-table mt-3">
                <div class="row">
                  <div class="col-sm-5 mb-4">
                    <select class="form-select">
                      <option selected="">Select Assigned Doctor</option>
                      <option value="1">...</option>
                    </select>
                  </div>

                  <div class="col-sm-5 ml-auto mb-4 search-box">
                    <div class="input-group">
                      <span class="input-group-text" id="basic-addon1">
                        <i class="far fa-search"></i>
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search By Name/NRIC/Passport/MRN"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="calendar" id="calendar"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import PatientLoginSidebar from "../../../components/Patient/PatientLoginSidebar.vue";
import PatientLoginHeader from "../../../components/Patient/PatientLogin_Header.vue";
import "@/assets/css/fullcalendar.css";
export default {
  components: { PatientLoginSidebar, PatientLoginHeader },
  name: "calendar-view",
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
      userdetails: null,
      list: [],
      token: "",
      service: 0,
      name: "",
      date: "",
      eventslist: []
    };
  },
  mounted() {},
  beforeMount() {
    this.Calender();
    const headers = {
      Authorization: "Bearer " + this.token,
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    const axios = require("axios").default;
    axios
      .get(
        `${this.$axios.defaults.baseURL}`+"patient-appointment-details/list",
        { headers }
      )
      .then((resp) => {
        this.list = resp.data.list;
        this.Calender();
      })
      .catch((err) => {
        console.error(err);
      });
  },
  methods: {
    async Calender() {
      this.list.forEach((value, index) => {
        var obj={};
        obj.start = value.appointment_date;
        obj.end = value.appointment_date;
        obj.overlap = false;
        //obj.display = "background";
        obj.color = "#46bdc6";
        obj.title= value.appointment_time+" #"+value.nric_no;
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
  },
};
</script>