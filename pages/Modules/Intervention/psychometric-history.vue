<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <div class="container-fluid px-4">
          <PatientDetails />
          <!-- card -->
          <div class="card mb-4">
            <div class="card-header">
              <h4>Psychometric Test History</h4>
            </div>
            <div class="card-body">
              <table class="table table-striped data-table" style="width: 100%">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Test Name</th>
                    <th>Taken Date</th>
                    <th>Result</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(test, index) in list" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td style="text-transform: uppercase">
                      {{ test.test_name }}
                    </td>
                    <td>{{ test.date }}</td>
                    <td>{{ test.result }}</td>
                    <td>
                      <a
                        v-if="
                          test.test_name == 'atq' || test.test_name == 'psp'
                        "
                        @click="OnTestView(test.id, test.test_name)"
                        class="edit"
                        ><i class="fad fa-eye"></i
                      ></a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <div class="modal fade" id="resultmodal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered modal-table-body">
          <div class="modal-content">
            <div id="results" style="background: #fff">
              <div class="modal-header">
                <h5 class="modal-title" style="text-transform: uppercase">
                  {{ TestName }} Alert
                </h5>
                <!-- <p>Your Test is successfully Submitted!</p> -->
              </div>
              <div class="modal-body">
                <table class="modal-table">
                  <thead>
                    <tr>
                      <th scope="col">Level</th>
                      <th scope="col">Total Scrore</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="active" v-if="result">
                      <th scope="row">{{ result.message }}</th>
                      <td>{{ result.result }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="modal-footer">
              <button
                @click="downloadresult"
                type="button"
                class="btn btn-secondary mr-auto"
              >
                <i class="fad fa-download"></i> Download Result
              </button>
              <a
                @click="Gotorequestappointment"
                class="btn btn-primary ml-auto"
              >
                <i class="fad fa-calendar-day"></i> Request Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PatientDetails from "../../../components/Patient/PatientDetails.vue";
import categoryOfServiceVue from "../Admin/category-of-service.vue";
import CommonHeader from '../../../components/CommonHeader.vue';
import CommonSidebar from '../../../components/CommonSidebar.vue';
export default {
  components: { CommonSidebar, CommonHeader, PatientDetails },
  name: "patient-summary",
  data() {
    return {
      userdetails: null,
      list: [],
      Id: 0,
      TestName: "",
      result: null,
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
        `${this.$axios.defaults.baseURL}` +
          "patient/test-history?patient_id=" +
          this.Id,
        { headers }
      )
      .then((resp) => {
        this.list = resp.data.list;
        console.log("liast", this.list);
        $(document).ready(function () {
          $(".data-table").DataTable({
            searching: false,
            bLengthChange: false,
            bInfo: false,
            autoWidth: false,
            responsive: true,
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
    async OnTestView(id, name) {
        this.$router.push({
        path: "/Modules/Intervention/patient-summary",
        query: { id: this.Id },
      });
    },
    downloadresult() {
      var pdf = new jsPDF("p", "pt", "a4");
      pdf.addHTML($("#results")[0], function () {
        pdf.save("Result.pdf");
      });
    },
    async Gotorequestappointment() {
      this.$router.push({
        path: "/Modules/Patient/request-appointment-form",
        query: { id: this.Id },
      });
    },
  },
};
</script>