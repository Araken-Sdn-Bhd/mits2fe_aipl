<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>Book Appointment</h1>
          </div>
          <div class="row">
            <div class="card mb-4">
              <div class="card-body">
                <form
                  class="mt-3"
                  method="post"
                  @submit.prevent="OnBookAppointment"
                >
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="mb-3">
                        <label class="form-label">Name<small style="color:red">*</small> </label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter Name"
                          v-model="name"
                        />
                      </div>
                    </div>
                  </div>
                  <!-- row -->

                  <div class="row">
                    <div class="col-sm-4">
                      <div class="mb-3">
                        <label class="form-label">Date<small style="color:red">*</small> </label>
                        <input
                          type="date"
                          class="form-control"
                          v-model="booking_date"
                        />
                      </div>
                    </div>

                    <div class="col-sm-4">
                      <div class="mb-3">
                        <label class="form-label">Time<small style="color:red">*</small> </label>
                        <input
                          type="time"
                          class="form-control"
                          v-model="booking_time"
                        />
                      </div>
                    </div>

                    <div class="col-sm-4">
                      <div class="mb-3">
                        <label class="form-label">Duration<small style="color:red">*</small> </label>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          v-model="duration"
                        >
                          <option value="0">Select Duration</option>
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
                        <label class="form-label">Assigned Interviewer<small style="color:red">*</small> </label>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          v-model="interviewer_id"
                        >
                          <option value="0">Select Assigned Interviewer</option>
                          <option
                            v-for="team in teamlist"
                            v-bind:key="team.id"
                            v-bind:value="team.id"
                          >
                            {{ team.name }}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <!-- row -->

                  <div class="row">
                    <div class="col-sm-6">
                      <div class="mb-3">
                        <label class="form-label">Areas Of Involvement<small style="color:red">*</small> </label>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          v-model="area_of_involvement"
                        >
                          <option value="0">Select Areas Of Involvement</option>
                          <option
                            v-for="area in areaslist"
                            v-bind:key="area.name"
                            v-bind:value="area.name"
                          >
                            {{ area.name }}
                          </option>
                        </select>
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <div class="mb-3">
                        <label class="form-label">Type of Services<small style="color:red">*</small> </label>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          v-model="services_type"
                        >
                          <option value="">Select Type of Services</option>
                          <option value="Consultation/Counselling">
                            Consultation/Counselling
                          </option>
                          <option value="Work-based Rehabilitation">
                            Work-based Rehabilitation
                          </option>
                          <option value="Awareness or Psychoeducation">
                            Awareness or Psychoeducation
                          </option>
                          <option value="Recreational Theraphy">
                            Recreational Theraphy
                          </option>
                          <option value="Others">Others</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <!-- row -->

                  <div class="d-flex">
                    <div class="ml-auto">
                      <a
                      v-on:click="OnApproverejectRequest(2)"
                        class="btn btn-danger btn-text"
                        ><i class="fad fa-times"></i> Cancel</a
                      >
                      <button type="submit" class="btn btn-success btn-text">
                        <i class="fad fa-paper-plane"></i> Submit
                      </button>
                    </div>
                  </div>
                </form>
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
import VonFooter from "../../../components/Von/VonFooter.vue";
import CommonHeader from "../../../components/CommonHeader.vue";
import CommonSidebar from "../../../components/CommonSidebar.vue";
export default {
  components: { VonFooter, CommonHeader, CommonSidebar },
  name: "book-appointment",
  data() {
    return {
      userdetails: null,
      teamlist: [],
      servicelist: [],
      areaslist: [],
      categorylist: [],
      errorList: [],
      Id: 0,
      name: "",
      booking_date: "",
      booking_time: "",
      duration: 0,
      appointment_type: 0,
      interviewer_id: 0,
      area_of_involvement: 0,
      services_type: "",
      section: "",
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.GetList();
    let urlParams = new URLSearchParams(window.location.search);
    this.Id = urlParams.get("id");
    let urlParams1 = new URLSearchParams(window.location.search);
    this.section = urlParams1.get("section");
    let urlParams2 = new URLSearchParams(window.location.search);
    this.name = urlParams2.get("name");
    if (this.Id) {
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
      const response = await this.$axios.get("staff-management/getListByBranchId/"+ this.userdetails.branch.branch_id, {
        headers,
      });
      this.teamlist = response.data.list;
      const response2 = await this.$axios.get("areas-of-involvement/list", {
        headers,
      });
      this.areaslist = response2.data.list;
    },
    async OnBookAppointment() {
      this.errorList = [];
      try {
        if (!this.name) {
          this.errorList.push("Name is required");
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
        if (!this.interviewer_id) {
          this.errorList.push("Assigned Interviewer is required");
        }
        if (!this.area_of_involvement) {
          this.errorList.push("Areas Of On Involvement is required");
        }
        if (!this.services_type) {
          this.errorList.push("Type of Servies is required");
        }
        if (
          this.name &&
          this.booking_date &&
          this.booking_time &&
          this.duration &&
          this.interviewer_id &&
          this.area_of_involvement &&
          this.services_type
        ) {
          this.loader = true;
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          if (this.Id > 0) {
            const response = await this.$axios.post(
              "von-appointment/update",
              {
                added_by: this.userdetails.user.id,
                parent_section_id: this.section,
                name: this.name,
                booking_date: this.booking_date,
                booking_time: this.booking_time,
                duration: this.duration,
                interviewer_id: this.interviewer_id,
                area_of_involvement: this.area_of_involvement,
                services_type: this.services_type,
                id: this.Id,
              },
              { headers }
            );
            console.log("my rs", response.data);
            if (response.data.code == 200) {
              this.loader = false;
              this.$router.push("/modules/Von/von-list-of-appointment");
            } else {
              this.loader = false;
              this.errorList.push(response.data.message);
              this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + this.error,
                  footer: ''
                });
            }
          } else {
            const response = await this.$axios.post(
              "von-appointment/add",
              {
                added_by: this.userdetails.user.id,
                parent_section_id: this.section,
                name: this.name,
                booking_date: this.booking_date,
                booking_time: this.booking_time,
                duration: this.duration,
                interviewer_id: this.interviewer_id,
                area_of_involvement: this.area_of_involvement,
                services_type: this.services_type,
              },
              { headers }
            );
            if (response.data.code == 200) {
              this.loader = false;
              this.$swal.fire('Successfully Insert', '', 'success');
              this.$router.push("/modules/Von/von-list-of-appointment");
            } else {
              this.loader = false;
              this.errorList.push(response.data.message);
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
    async GetAppointmentdetails() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "von-appointment/getVonAppointmentById",
        {
          id: this.Id,
          added_by: this.userdetails.user.id,
        },
        { headers }
      );
      console.log("my app details", response.data);
      this.Id = response.data[0].id;
      this.name = response.data[0].name;
      this.booking_date = response.data[0].booking_date;
      this.booking_time = response.data[0].booking_time;
      this.duration = response.data[0].duration;
      this.interviewer_id = response.data[0].interviewer_id;
      this.area_of_involvement = response.data[0].area_of_involvement;
      this.services_type = response.data[0].services_type;
      this.section = response.data[0].parent_section_id;
    },
    async OnApproverejectRequest(status) {
      try {
        this.loader = true;
        const headers = {
          Authorization: "Bearer " + this.userdetails.access_token,
          Accept: "application/json",
          "Content-Type": "application/json",
        };
          const axios = require("axios").default;
          axios
            .post(
              `${this.$axios.defaults.baseURL}` + "von-appointment/set-status",
              { id: this.Id, status: status.toString() },
              { headers }
            )

            .then((resp) => {
              console.log("reuslt", resp);
            });
        this.loader = false;
        this.$nextTick(() => {
          this.$router.push({
          path: "/modules/Von/von-list-of-appointment",
        });
        });
      } catch (e) {
        this.loader = false;this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + JSON.stringify(response.data.message),
                  footer: ''
                });
      }
    },
  },
};
</script>

<style scoped>
.hide1 {
  display: none;
}
</style>
