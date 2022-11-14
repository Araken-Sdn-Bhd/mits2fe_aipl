<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <div class="container-fluid px-4">
          <InterventionPatientDetails />
          <!-- card -->
          <div class="card mb-4">
            <div class="card-header">
              <h4>Clinical History Record </h4>
            </div>
            <div class="card-body">
              <table
                class="table table-striped data-table font-13"
                style="width: 100%"
              >
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Date/Time</th>
                    <th>Temperature(℃)</th>
                    <th>Blood Pressure(mm/Hg)</th>
                    <th>Pulse Rate(bpm)</th>
                    <th>Weight(Kg)</th>
                    <th>Height(cm)</th>
                    <th>BMI(kg/m)</th>
                    <th>Waist Circumference</th>
                    <th>Take By</th>
                    <th width="50px">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(clinic, index) in list" :key="index">
                    <td>{{ index+1 }}</td>
                    <td>{{ clinic.date_time }}</td>
                    <td>{{ clinic.temperature }}</td>
                    <td>{{ clinic.blood_pressure }}</td>
                    <td>{{ clinic.pulse_rate }}</td>
                    <td>{{ clinic.weight }}</td>
                    <td>{{ clinic.height }}</td>
                    <td>{{ clinic.bmi }}</td>
                    <td>{{ clinic.waist_circumference }}</td>
                    <td>{{ clinic.name }}</td>
                    <td>
                      <a
                        @click="deleteinfo(clinic)"
                        class="action-icon icon-danger"
                        ><i class="far fa-trash-alt"></i
                      ></a>
                    </td>
                  </tr>

                </tbody>
              </table>
              <a
                      @click="GoBack"
                      class="btn btn-primary btn-text"
                      ><i class="far fa-arrow-alt-to-left"></i> Back</a
                    >
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
import CommonHeader from '../../../components/CommonHeader.vue';
import CommonSidebar from '../../../components/CommonSidebar.vue';
export default {
  components: { CommonSidebar, CommonHeader, InterventionPatientDetails },
  name: "patient-summary",
  data() {
    return {
      userdetails: null,
      errorList: [],
      list: [],
      Id: 0,
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    let urlParams = new URLSearchParams(window.location.search);
    this.Id = urlParams.get("id");
  },
   mounted() {
    const headers = {
      Authorization: "Bearer " + this.userdetails.access_token,
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    const axios = require("axios").default;
    axios
      .get(
        `${this.$axios.defaults.baseURL}`+"patient-clinicalinfo/list?patient_id=" + this.Id,
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
            responsive: true,
            scrollX:true,
            language: {
              paginate: {
                next: '<i class="fad fa-arrow-to-right"></i>', // or '→'
                previous: '<i class="fad fa-arrow-to-left"></i>', // or '←'
              },
            },
          });
        });
      })
      .catch((err) => {
        console.error(err);
      });
  },
  methods: {
    async deleteinfo(data) {
      if (confirm("Are you sure you want to delete")) {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "patient-clinicalinfo/remove",
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
        this.GetList();
      } else {
        this.$nextTick(() => {
          $("#errorpopup").modal("show");
        });
      }
    }
    },
     async GetList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response1 = await this.$axios.get("patient-clinicalinfo/list?patient_id="+ this.Id, { headers });
      if (response1.data.code == 200 || response1.data.code == "200") {
        this.list = response1.data.list;
      } else {
        this.list = [];
      }
    },
    GoBack(){
      this.$router.push({
              path: "/app/modules/Intervention/patient-summary",
              query: { id: this.Id },
            });
    }
  },
};
</script>
