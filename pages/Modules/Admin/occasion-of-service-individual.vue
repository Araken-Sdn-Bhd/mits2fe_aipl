<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>Occasion of Service</h1>
          </div>
          <div class="card mb-4" v-if="staffdetails">
            <div class="card-body">
              <div class="card-header icon-title">
                <a href="#"><i class="fa fa-user-tie"></i></a>
                <h4>Staff Detail</h4>
              </div>

              <form class="g-3 mt-3">
                <div class="row">
                  <div class="col-lg-3 col-md-4 mb-4">
                    <label for="" class="form-label"
                      >Profession Registrtion No.</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      v-model="staffdetails.registration_no"
                    />
                  </div>

                  <div class="col-lg-6 col-md-8 mb-4">
                    <label for="" class="form-label">Staff Name</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="staffdetails.name"
                    />
                  </div>

                  <div class="col-lg-3 col-md-4 mb-4">
                    <label for="" class="form-label">Mentari Branch</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="staffdetails.hospital_branch_name"
                    />
                  </div>
                </div>
                <!-- close-row -->

                <div class="row">
                  <div class="col-md-4 mb-4">
                    <label for="" class="form-label">Start Date</label>
                    <input
                      type="date"
                      class="form-control"
                      v-model="staffdetails.start_date"
                    />
                  </div>

                  <div class="col-md-4 mb-4">
                    <label for="" class="form-label">End Date</label>
                    <input
                      type="date"
                      class="form-control"
                      v-model="staffdetails.end_date"
                    />
                  </div>
                </div>
                <!-- close-row -->
              </form>

              <table
                class="table table-striped data-table font-13 display nowrap"
                style="width: 100%"
              >
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Patient Category</th>
                    <th>From Time</th>
                    <th>Duration</th>
                    <th>Category Of Service</th>
                    <th>Complexity Of Service</th>
                    <th>Outcome</th>
                    <th>Location Of Service</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(staff, index) in list" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ staff.appointment_category_name }}</td>
                    <td>
                      {{ (staff.booking_date+' '+staff.booking_time) }}
                      <!-- {{ staff.booking_time }} -->
                    </td>
                    <td>{{ staff.duration }}</td>
                    <td>{{ staff.category_services_id }}</td>
                    <td>{{ staff.csr_ }}</td>
                    <td>{{ staff.oc_ }}</td>
                    <td>{{ staff.ls_ }}</td>
                    <td>
                      <a
                        @click="edit(staff)" v-if="SidebarAccess==1"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        class="edit"
                        ><i class="fa fa-edit"></i
                      ></a>
                      <a
                        @click="delRow(staff)" v-if="SidebarAccess==1"
                        class="action-icon icon-danger"><i class="fa fa-trash-alt"></i></a>

                    </td>
                  </tr>
                </tbody>
              </table>
              <p
                v-show="!list.length"
                style=" padding: 0px;
                  margin: 10px;
                  color: red;
                  display: flex;
                  justify-content: center;
                "
              >
                No Record Found
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
    <!-- Modal -->
    <div
      class="modal modal-edit fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Edit</h5>
            <button
              type="button"
              class="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <!-- modal -->
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label class="form-label">Category Of Services</label>
                <div class="">
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="assisstance-supervision"
                      value="assisstance"
                      v-model="category_services"
                    />
                    <label
                      class="form-check-label"
                      for="assisstance-supervision"
                      >Assisstance / Supervision</label
                    >
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="clinical"
                      value="clinical-work"
                      v-model="category_services"
                    />
                    <label class="form-check-label" for="clinical"
                      >Clinical Work / Procedure</label
                    >
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="external"
                      value="external"
                      v-model="category_services"
                    />
                    <label class="form-check-label" for="external"
                      >External</label
                    >
                  </div>
                </div>
              </div>

              <div class="mb-3">
                <div class="row">
                  <div class="col-lg-6 col-sm-6">
                    <label class="form-label">Location Of Services</label>
                    <select class="form-select" v-model="location_services_id">
                      <option value="0">Select location of services</option>
                      <option
                        v-for="loc in locationlist"
                        v-bind:key="loc.id"
                        v-bind:value="loc.id"
                      >
                        {{ loc.section_value }}
                      </option>
                    </select>
                  </div>
                  <div class="col-lg-6 col-sm-6">
                    <label class="form-label">Complexity Of Service</label>
                    <select
                      class="form-select"
                      v-model="complexity_services_id"
                    >
                      <option value="0">Select Complexity Of Service</option>
                      <option
                        v-for="cm in comlexcitylist"
                        v-bind:key="cm.id"
                        v-bind:value="cm.id"
                      >
                        {{ cm.section_value }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="mb-3">
                <div class="row">
                  <div class="col-lg-6 col-sm-6">
                    <label class="form-label">Outcome</label>
                    <select class="form-select" v-model="outcome_id">
                      <option value="0">Select Outcome</option>
                      <option
                        v-for="out in outcomelist"
                        v-bind:key="out.id"
                        v-bind:value="out.id"
                      >
                        {{ out.section_value }}
                      </option>
                    </select>
                  </div>
                  <div class="col-lg-6 col-sm-6">
                    <label class="form-label">PATIENT CATEGORY</label>
                    <select class="form-select" v-model="patient_category">
                      <option value="0">Please Select</option>
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
              </div>

              <div class="mb-3">
                <div class="row">
                  <div class="col-lg-6 col-sm-6">
                    <label class="form-label">From Date</label>
                    <input
                      type="date"
                      class="form-control"
                      v-model="booking_date"
                    />
                  </div>
                  <div class="col-lg-6 col-sm-6">
                    <label class="form-label">From Time</label>
                    <input
                      type="time"
                      class="form-control"
                      v-model="booking_time"
                    />
                  </div>
                </div>
              </div>

              <div class="mb-3">
                <div class="row">
                  <div class="col-lg-6 col-sm-6">
                    <label class="form-label">End Date</label>
                    <input
                      type="date"
                      class="form-control"
                      v-model="booking_enddate"
                    />
                  </div>
                  <div class="col-lg-6 col-sm-6">
                    <label class="form-label">End Time</label>
                    <input
                      type="time"
                      class="form-control"
                      v-model="booking_endtime"
                    />
                  </div>
                </div>
              </div>

              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                @click="updatestaffpatient" v-if="SidebarAccess==1"
              >
                Save changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CommonHeader from "../../../components/CommonHeader.vue";
import CommonSidebar from "../../../components/CommonSidebar.vue";
import * as moment from "moment/moment";
export default {
  components: { CommonSidebar, CommonHeader },
  name: "new-staff",
  data() {
    return {
      Id: 0,
      userdetails: null,
      staffdetails: null,
      staffpatientlist: null,
      list: [],
      servicelist: [],
      outcomelist: [],
      comlexcitylist: [],
      codelist: [],
      icdcatcodelist: [],
      diagonisislist: [],
      locationlist: [],
      assistancelist: [],
      externallist: [],
      categorylist: [],
      patient_category: 0,
      outcome_id: 0,
      complexity_services_id: 0,
      location_services_id: 0,
      booking_date: "",
      booking_time: "",
      booking_enddate: "",
      booking_endtime: "",
      category_services: "",
      enddate: "",
      endtime: "",
      apid:0,
      tbid:0,
      type:"",
      users_id:0,
      SidebarAccess:null
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.SidebarAccess = JSON.parse(localStorage.getItem("SidebarAccess"));
    this.Id = this.userdetails.user.id;
    this.users_id = this.userdetails.user.id
    this.GetList();
    this.Getdetails();
    this.Getstaffpatientlist();
  },
  methods: {
    async GetList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const responsecat = await this.$axios.get(
        "patient-appointment-category/list",
        { headers }
      );
      if (responsecat.data.code == 200 || responsecat.data.code == "200") {
        this.categorylist = responsecat.data.list;
      } else {
        this.categorylist = [];
      }
      const response = await this.$axios.get(
        "general-setting/list?section=" + "complexity-of-service",
        { headers }
      );
      if (response.data.code == 200 || response.data.code == "200") {
        this.comlexcitylist = response.data.list;
      } else {
        this.comlexcitylist = [];
      }
      const response1 = await this.$axios.get("service/list", { headers });
      if (response1.data.code == 200 || response1.data.code == "200") {
        this.servicelist = response1.data.list;
      } else {
        this.servicelist = [];
      }
      const response2 = await this.$axios.get(
        "general-setting/list?section=" + "outcome",
        { headers }
      );
      if (response2.data.code == 200 || response2.data.code == "200") {
        this.outcomelist = response2.data.list;
      } else {
        this.outcomelist = [];
      }
      const response3 = await this.$axios.get("diagnosis/getIcd9codeList", {
        headers,
      });
      if (response3.data.code == 200 || response3.data.code == "200") {
        this.codelist = response3.data.list;
      } else {
        this.codelist = [];
      }
      const response4 = await this.$axios.get("diagnosis/getIcd10codeList", {
        headers,
      });
      if (response4.data.code == 200 || response4.data.code == "200") {
        console.log("list", response4.data.list);
        this.diagonisislist = response4.data.list;
      } else {
        this.diagonisislist = [];
      }
      const response5 = await this.$axios.get(
        "general-setting/list?section=" + "location-of-services",
        {
          headers,
        }
      );
      if (response5.data.code == 200 || response5.data.code == "200") {
        this.locationlist = response5.data.list;
      } else {
        this.locationlist = [];
      }
      const respons = await this.$axios.get(
        "general-setting/list?section=" + "assistance-or-supervision",
        { headers }
      );
      if (respons.data.code == 200 || respons.data.code == "200") {
        this.assistancelist = respons.data.list;
      } else {
        this.assistancelist = [];
      }
      const respon = await this.$axios.get(
        "general-setting/list?section=" + "external",
        { headers }
      );
      if (respon.data.code == 200 || respon.data.code == "200") {
        this.externallist = respon.data.list;
      } else {
        this.externallist = [];
      }
    },
    async Getdetails() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "staff-management/editDetailsById",
        { id: this.Id },
        { headers }
      );
      if (response.data.code == 200 || response.data.code == "200") {
        this.staffdetails = response.data.list[0];
      }
    },
    async Getstaffpatientlist() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const axios = require("axios").default;
      axios
        .post(
          `${this.$axios.defaults.baseURL}` +
            "patient-appointment-details/fetchPatientStaffById",
          { patient_id: this.users_id }, //patient_id is treated as usersid
          { headers }
        )
        .then((resp) => {
          this.list = resp.data.Data;
          console.log("my staff", resp.data);
          setTimeout(() => {
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
                emptyTable: "No Record Found"
              },
            });
          });
        }, 2000);
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
    },
    async edit(data) {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "patient-appointment-details/fetchPatientListByStaffId",
        { apid: data.patient_appointment_id, type: data.type, tbid: data.id_ },
        { headers }
      );
      if (response.data.code == 200 || response.data.code == "200") {
        if(this.staffpatientlist = response.data.Data[0]){
        this.outcome_id = response.data.Data[0].outcome;
        this.complexity_services_id =
          response.data.Data[0].complexity_services_id;
        this.location_services_id = response.data.Data[0].location_services_id;
        this.category_services = response.data.Data[0].category_services;
        this.booking_date = response.data.Data[0].booking_date;
        this.booking_time = response.data.Data[0].booking_time;
        this.patient_category = response.data.Data[0].patient_category;
        this.booking_enddate = this.formatedateend(response.data.Data[0].end_appoitment_date);
        this.booking_endtime = this.formatetimeend(response.data.Data[0].end_appoitment_date);
        this.apid = response.data.Data[0].patient_appointment_id;
        this.type = response.data.Data[0].type;
        this.tbid = response.data.Data[0].id;
        }

      }
    },
    async delRow(data) {
      if (confirm("Are you sure you want to delete this record ? ")) {
        const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "patient-appointment-details/deletePatientListByStaffId",
        {
          type: data.type,
          tbid: data.id_,
        },
        { headers }
      );
      if (response.data.code == 200 || response.data.code == "200") {
        this.$swal.fire('Successfully Update', '', 'success');
        this.Getstaffpatientlist1();
      }
      }
    },
    formatedate(date) {
      const local = moment.utc(date).local().format("YYYY-MM-DD h:mm");
      return local;
    },
    formatetime(time) {
      const local = moment.utc(time).local().format("h:mm A");
      return local;
    },
    formatedateend(date) {
      if(date){
      const local = moment.utc(date).local().format("YYYY-MM-DD");
      return local;
      }return "";

    },
    formatetimeend(date) {
      if(date){
      const local = moment.utc(date).local().format("hh:mm");
      return local;
      }return "";

    },
    formatedatetimeappoint(date) {
      if(date){
      const local = moment.utc(date).local().format("YYYY-MM-DD hh:mm");
      return local;
      }return "";

    },
    async updatestaffpatient() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "patient-appointment-details/updatePatientListByStaffId",
        {
          apid: this.apid,
          type: this.type,
          tbid: this.tbid,
          category_services:this.category_services,
          complexity_services_id: this.complexity_services_id,
          location_services_id: this.location_services_id,
          outcome_id: this.outcome_id,
          patient_category: this.patient_category,
          booking_date: this.booking_date,
          booking_time: this.booking_time,
          end_appoitment_date: this.formatedatetimeappoint(this.booking_enddate + ' ' + this.booking_endtime),
        },
        { headers }
      );
      if (response.data.code == 200 || response.data.code == "200") {
        $("#exampleModal").hide();
          this.$swal.fire('Successfully Update', '', 'success').then((result) => {
          if (result.isConfirmed) {
            this.$router.go();
          } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
          }
        });
        this.Getstaffpatientlist1();
      }
    },
     async Getstaffpatientlist1() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const axios = require("axios").default;
      axios
        .post(
          `${this.$axios.defaults.baseURL}` +
            "patient-appointment-details/fetchPatientStaffById",
          { patient_id: this.users_id }, //patient_id is treated as usersid
          { headers }
        )
        .then((resp) => {
          this.list = resp.data.Data;
          console.log("my staff", resp.data);
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
    },
  },
};
</script>
