<template>
  <div id="layoutSidenav">
    <PatientLoginSidebar />
    <div id="layoutSidenav_content">
      <PatientLoginHeader />
      <main>
           <Loader v-if="loader" />
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>Book Appointment</h1>
          </div>

          <div class="card mb-4">
            <div class="card-body">
              <form class="mt-3" method="post" @submit.prevent="OnBookAppointment">
                <div class="row">
                  <div class="col-sm-12">
                    <div class="mb-3">
                      <label class="form-label">NRIC/Passport NO.</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter NRIC/Passport NO."
                        v-model="nric_or_passportno"
                      />
                    </div>
                  </div>
                </div>
                <!-- row -->

                <div class="row">
                  <div class="col-sm-4">
                    <div class="mb-3">
                      <label class="form-label">Date</label>
                      <input
                        type="date"
                        class="form-control"
                        v-model="booking_date"
                      />
                    </div>
                  </div>

                  <div class="col-sm-4">
                    <div class="mb-3">
                      <label class="form-label">Time</label>
                      <input
                        type="time"
                        class="form-control"
                        v-model="booking_time"
                      />
                    </div>
                  </div>

                  <div class="col-sm-4">
                    <div class="mb-3">
                      <label class="form-label">Duration</label>
                      <select
                        class="form-select"
                        aria-label="Default select example" v-model="duration"
                      >
                        <option selected>Select Duration</option>
                        <option value="15">15 Minutes</option>
                        <option value="30">30 Minutes</option>
                        <option value="60">60 Minutes</option>
                        <option value="120">120 Minutes</option>
                      </select>
                    </div>
                  </div>
                </div>
                <!-- row -->

                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Appointment Type</label>
                      <select
                        v-model="appointment_type"
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option
                          v-for="serv in servicelist"
                          v-bind:key="serv.id"
                          v-bind:value="serv.id"
                        >
                          {{ serv.service_name }}
                        </option>
                      </select>
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Type of Visit</label>
                      <select
                        v-model="type_visit"
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option
                          v-for="vst in visitlist"
                          v-bind:key="vst.id"
                          v-bind:value="vst.id"
                        >
                          {{ vst.appointment_visit_name }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <!-- row -->

                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Category of Patient</label>
                      <select
                        v-model="patient_category"
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option
                          v-for="cat in categorylist"
                          v-bind:key="cat.id"
                          v-bind:value="cat.id"
                        >
                          {{ cat.appointment_category_name }}
                        </option>
                      </select>
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Assigned Team</label>
                      <select
                        v-model="assign_team"
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option
                          v-for="team in teamlist"
                          v-bind:key="team.id"
                          v-bind:value="team.id"
                        >
                          {{ team.team_name }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <!-- row -->
<p v-if="errorList.length">
                          <ul>
                           <li style="color:red"  v-for='err in errorList' :key='err' >
                           {{ err }}
                             </li>
                        </ul>
                       </p>
                <div class="d-flex">
                  <div class="ml-auto">
                    <a
                      href="/Modules/Patient/attendance-record"
                      class="btn btn-danger btn-text"
                      ><i class="fad fa-times"></i> Cancel</a
                    >
                    <button class="btn btn-success btn-text">
                      <i class="fad fa-paper-plane"></i> Submit
                    </button>
                  </div>
                </div>
              </form>
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
export default {
  components: { PatientLoginSidebar, PatientLoginHeader },
  name: "book-appointment",
  data() {
    return {
      userdetails: null,
      teamlist: [],
      servicelist: [],
      visitlist: [],
      categorylist: [],
      nric_or_passportno: "",
      booking_date: "",
      booking_time: "",
      duration: 0,
      appointment_type: 0,
      type_visit: 0,
      patient_category: 0,
      assign_team: 0,
      loader: false,
      errorList: [],
      Id: 0,
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.GetList();
    let urlParams = new URLSearchParams(window.location.search);
    this.Id = urlParams.get("id");
    if (this.Id > 0) {
      this.GetAppointmentdetails();
    }
  },
  methods: {
    async GetList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get("hospital/branch-team-list", {
        headers,
      });
      if (response.data.code == 200 || response.data.code == "200") {
        this.teamlist = response.data.list;
      } else {
        this.teamlist = [];
      }
      const response1 = await this.$axios.get("service/list", { headers });
      if (response1.data.code == 200 || response1.data.code == "200") {
        this.servicelist = response1.data.list;
      } else {
        this.servicelist = [];
      }
      const response2 = await this.$axios.get(
        "patient-appointment-visit/list",
        { headers }
      );

      if (response2.data.code == 200 || response2.data.code == "200") {
        this.visitlist = response2.data.list;
      } else {
        this.visitlist = [];
      }
      const response3 = await this.$axios.get(
        "patient-appointment-category/list",
        { headers }
      );
      if (response3.data.code == 200 || response3.data.code == "200") {
        this.categorylist = response3.data.list;
      } else {
        this.categorylist = [];
      }
    },
    async OnBookAppointment() {
      this.errorList = [];
      try {
        if (!this.nric_or_passportno) {
          this.errorList.push("NRIC/Passport NO. is required");
        }
        if (!this.booking_date) {
          this.errorList.push("Date is required");
        }
        if (!this.booking_time) {
          this.errorList.push("Time is required");
        }
        if (!this.duration) {
          this.errorList.push("Duration is required");
        }
        if (!this.appointment_type) {
          this.errorList.push("Appointment Type is required");
        }
        if (!this.type_visit) {
          this.errorList.push("Type of Visit is required");
        }
        if (!this.patient_category) {
          this.errorList.push("Category of Patient is required");
        }
        if (!this.assign_team) {
          this.errorList.push("Assigned Team is required");
        }
        if (
          this.nric_or_passportno &&
          this.booking_date &&
          this.booking_time &&
          this.duration &&
          this.appointment_type &&
          this.type_visit &&
          this.patient_category &&
          this.assign_team
        ) {
          this.loader = true;
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          if (this.Id > 0) {
            const response = await this.$axios.post(
              "patient-appointment-details/update",
              {
                added_by: this.userdetails.user.id,
                id: this.Id,
                nric_or_passportno: this.nric_or_passportno,
                booking_date: this.booking_date,
                booking_time: this.booking_time,
                patient_mrn_id: this.userdetails.user.id,
                duration: this.duration,
                appointment_type: this.appointment_type,
                type_visit: this.type_visit,
                patient_category: this.patient_category,
                assign_team: this.assign_team,
              },
              { headers }
            );
            if (response.data.code == 200) {
              this.loader = false;
              this.$router.push("/Modules/Patient/attendance-record");
            } else {
              this.loader = false;
              this.errorList.push(response.data.message);
              this.$nextTick(() => {
                $("#errorpopup").modal("show");
              });
            }
          } else {
            const response = await this.$axios.post(
              "patient-appointment-details/add",
              {
                added_by: this.userdetails.user.id,
                nric_or_passportno: this.nric_or_passportno,
                booking_date: this.booking_date,
                booking_time: this.booking_time,
                patient_mrn_id: this.userdetails.user.id,
                duration: this.duration,
                appointment_type: this.appointment_type,
                type_visit: this.type_visit,
                patient_category: this.patient_category,
                assign_team: this.assign_team,
              },
              { headers }
            );
            console.log('my rs',response.data);
            if (response.data.code == 200) {
              this.loader = false;
              this.$router.push("/Modules/Patient/attendance-record");
            } else {
              this.loader = false;
              this.errorList.push(response.data.message);
              this.$nextTick(() => {
                $("#errorpopup").modal("show");
              });
            }
          }
        }
      } catch (e) {}
    },
    async GetAppointmentdetails() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "patient-appointment-details/getPatientAppointmentDetailsListById",
        {
          appointment_id: this.Id,
        },
        { headers }
      );
     if (response.data.code == 200) {
        this.Id = response.data.list[0].id;
        this.nric_or_passportno = response.data.list[0].nric_or_passportno;
        this.booking_date = response.data.list[0].booking_date;
        this.booking_time = response.data.list[0].booking_time;
        this.duration = response.data.list[0].duration;
        this.appointment_type = response.data.list[0].appointment_type;
        this.type_visit = response.data.list[0].type_visit;
        this.patient_category = response.data.list[0].patient_category;
        this.assign_team = response.data.list[0].assign_team;
      } else {
        window.alert("Something went wrong");
      }
    },
  },
};
</script>