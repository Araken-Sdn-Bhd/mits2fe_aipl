<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <div class="container-fluid px-4">
          <div>
            <div class="page-title">
              <h1 v-if="patientdetails">{{ patientdetails.name_asin_nric }}</h1>
            </div>
            <div class="row">
              <div class="col-lg-8 col-sm-12">
                <div class="card mb-4">
                  <div class="card-header">
                    <h4>Demographic</h4>
                    <a style="cursor: pointer"><i class="fal fa-edit"></i></a>
                  </div>
                  <div class="card-body">
                    <table class="info-table" width="100%">
                      <thead>
                        <tr>
                          <th width="40%"></th>
                          <th width="60%"></th>
                        </tr>
                      </thead>
                      <tbody v-if="patientdetails">
                        <tr>
                          <td>MRN:</td>
                          <td>{{ patientdetails.patient_mrn }}</td>
                        </tr>

                        <tr>
                          <td>Gender:</td>
                          <td>{{ patientdetails.gender[0].section_value }}</td>
                        </tr>

                        <tr>
                          <td>Date Of Birth:</td>
                          <td>{{ patientdetails.birth_date }}</td>
                        </tr>

                        <tr>
                          <td>Marital Status:</td>
                          <td>{{ patientdetails.maritialstatus[0].section_value }}</td>
                        </tr>

                        <tr>
                          <td>Nationality:</td>
                          <td v-if="patientdetails.citizenships[0]">{{ patientdetails.citizenships[0].citizenship_name
                          }}</td>
                        </tr>

                        <tr>
                          <td>Contact No:</td>
                          <td>{{ patientdetails.mobile_no }}</td>
                        </tr>
                        <tr>
                          <td>Allergies:</td>
                          <td v-if="patientdetails.drug_allergy_description">
                            {{ patientdetails.drug_allergy_description }}
                          </td>
                          <td v-if="!patientdetails.drug_allergy_description">-</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <Loader v-if="loader" />
              <div class="col-lg-4 col-sm-12">
                <div class="card mb-4">
                  <div class="card-header">
                    <h4>Alert</h4>
                    <a><i class="fal fa-edit" style="cursor:pointer;"></i></a>
                  </div>
                  <div class="card-body">
                    <form class="alert-box" method="post" @submit.prevent="AddAlert">
                      <textarea class="form-control" v-model="alert"></textarea>
                      <p v-if="errorList.length">
                      <ul>
                        <li style="color:red" v-for='err in errorList' :key='err'>
                          {{ err }}
                        </li>
                      </ul>
                      </p>
                      <div class="d-flex mt-2">
                        <button type="submit" class="btn btn-success ml-auto" v-if="alert">
                          Update ALERT
                        </button>
                        <button type="submit" class="btn btn-success ml-auto" v-if="!alert">
                          <i class="fa fa-plus"></i> Add ALERT
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- card -->
          <div class="card mb-4">
            <div class="card-header">
              <h4>List Of Alert</h4>
            </div>
            <div class="card-body">
              <table class="table table-striped data-table font-13 display nowrap" style="width: 100%">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>ALERT</th>
                    <th>ONSET DATE</th>
                    <th>RESOLVED DATE</th>
                    <th>CREATED By</th>
                    <th width="150px">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(clinic, index) in list" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ clinic.message }}</td>
                    <td>{{ clinic.created }}</td>
                    <td>{{ clinic.updated }}</td>
                    <td>{{ clinic.name }}</td>
                    <td>
                      <a @click="editalert(clinic)" class="action-icon icon-success"><i class="fad fa-edit"></i></a>
                      <a class="btn btn-danger btn-deactivate" @click="deactivate(clinic)">Deactivate</a>
                      <!-- <a
                        @click="deactivate(clinic)"
                        class="action-icon icon-danger"
                        >Deactivate
                      </a> -->
                      <!-- <a  style="cursor:pointer;" @click="editalert(clinic)"  class="edit"
                                ><i class="fas fa-edit"></i
                              ></a> -->
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
          <!-- card -->
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import InterventionPatientDetails from "../../../components/Intervention/InterventionPatientDetails.vue";
import CommonHeader from "../../../components/CommonHeader.vue";
import CommonSidebar from "../../../components/CommonSidebar.vue";
export default {
  components: { CommonSidebar, CommonHeader, InterventionPatientDetails },
  name: "patient-summary",
  data() {
    return {
      userdetails: null,
      errorList: [],
      list: [],
      Id: 0,
      alert: "",
      patientdetails: null,
      loader: false,
      alert_id: 0,
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    let urlParams = new URLSearchParams(window.location.search);
    this.Id = urlParams.get("id");
    this.GetPatientdetails();

  },
  mounted() {
    const headers = {
      Authorization: "Bearer " + this.userdetails.access_token,
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    const axios = require("axios").default;
    axios
      .post(
        `${this.$axios.defaults.baseURL}` +
        "patient-alert/alertListbyPatientId?patient_id=" +
        this.Id,
        { headers }
      )
      .then((resp) => {
        this.list = resp.data.list;
        $(document).ready(function () {
          $(".data-table").DataTable({
            searching: false,
            bLengthChange: false,
            bInfo: false,
            autoWidth: false,
            // responsive: true,
            // scrollX: true,
            scrollX: true,
            language: {
              paginate: {
                next: '<i class="fad fa-arrow-to-right"></i>', // or '→'
                previous: '<i class="fad fa-arrow-to-left"></i>', // or '←'
              },
            },
          });
        });
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
  methods: {
    async deactivate(data) {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "patient-alert/resolved",
        {
          added_by: this.userdetails.user.id,
          alert_id: data.id,
        },
        { headers }
      );
      if (response.data.code == 200) {
        this.$nextTick(() => {
          $("#updatepopup").modal("show");
        });
        this.GetAlertList();
      } else {
        this.$nextTick(() => {
          $("#errorpopup").modal("show");
        });
      }
    },
    async editalert(data) {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response1 = await this.$axios.post(
        "patient-alert/getAlertbyAlertId",
        {
          alert_id: data.id,
        },
        { headers }
      );

      this.alert = response1.data[0].message;
      this.alert_id = data.id;
      console.log("myalertid1", this.alert);
      this.$router.push({
        query: { alert_id: data.id },
      });
    },
    async GetList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response1 = await this.$axios.get(
        "patient-clinicalinfo/list?patient_id=" + this.Id,
        { headers }
      );
      if (response1.data.code == 200 || response1.data.code == "200") {
        this.list = response1.data.list;
      } else {
        this.list = [];
      }
    },
    async GetPatientdetails() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "patient-registration/getPatientRegistrationById",
        {
          id: this.Id,
        },
        { headers }
      );
      console.log("my data intervention", response.data);
      if (response.data.code == 200) {
        this.patientdetails = response.data.list[0];
      } else {
        this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + this.error,
                  footer: ''
                });
      }
      const response1 = await this.$axios.post(
        "patient-alert/alertListbyPatientId",
        {
          alert_id: this.alert_id,
        },
        { headers }
      );

      this.alert = response1.data[0].message;
      console.log("my data66", this.alert);
    },
    async AddAlert() {
      this.errorList = [];
      try {
        if (!this.alert) {
          this.errorList.push("Alert Message is required");
        } else {
          this.loader = true;
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          const response = await this.$axios.post(
            "patient-alert/add",
            {
              added_by: this.userdetails.user.id,
              patient_id: this.Id,
              message: this.alert,
              alert_id: this.alert_id,
            },
            { headers }
          );
          console.log("esponse", response.data);
          if (response.data.code == 200) {
            this.loader = false;
            if (this.alert_id == 0) {
              this.$nextTick(() => {
                $("#insertpopup").modal("show");
                this.GetAlertList();
              });
            } else {
              this.$nextTick(() => {
                $("#updatepopup").modal("show");
                this.GetAlertList();
              });
            }
          } else {
            this.loader = false;
            this.$nextTick(() => {
              $("#errorpopup").modal("show");
            });
          }
        }
      } catch (e) {
        this.loader = false;
      }
    },
    async GetAlertList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response1 = await this.$axios.post(
        "patient-alert/alertListbyPatientId?patient_id=" + this.Id,
        { headers }
      );
      if (response1.data.code == 200 || response1.data.code == "200") {
        this.list = response1.data.list;
      } else {
        this.list = [];
      }
    },
  },
};
</script>
