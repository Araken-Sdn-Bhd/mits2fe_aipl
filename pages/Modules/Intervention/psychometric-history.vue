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
                    <!-- <th>Result</th> -->
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
                    <!-- <td>{{ test.result }}</td> -->
                    <td>
                      <a

                        @click="OnTestView(test.id, test.test_name,test)"
                        class="edit"
                        ><i class="fad fa-eye"></i
                      ></a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <a
                      @click="GoBack"
                      class="btn btn-primary btn-text"
                      ><i class="fa fa-arrow-alt-to-left"></i> Back</a
                    >
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
            <!--<div class="modal-footer">
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
            </div>-->
          </div>
        </div>
      </div>
      <div class="modal fade" id="resultmodalbdi" tabindex="-1">
          <div class="modal-dialog modal-dialog-centered modal-table-body">
            <div class="modal-content">
              <div id="resultsbdi" style="background-color:White">
                <div class="modal-header">
                  <h5 class="modal-title">{{TitleName}}</h5>
                  <p>
                    The system will sum up the score for every question in each
                    category. The scale are as follows:
                  </p>
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
                      <tr class="active" >
                        <th scope="row">{{this.bdilevel}}</th>
                        <td>{{this.bdiscore}}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <!--<div class="modal-footer">
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
              </div>-->
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
      bdilevel:"",
      bdiscore:"",
      TitleName:"",
      appId: 0,
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    let urlParams = new URLSearchParams(window.location.search);
    this.Id = urlParams.get("id");
    let urlParams2 = new URLSearchParams(window.location.search);
    this.appId = urlParams2.get("appId");
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
    async OnTestView(id, name,test) {
      console.log('my test name',name);
      if(name=="cbi"){
        localStorage.setItem("cbiresult_history",JSON.stringify(test));
        this.$router.push({
        path: "/modules/Intervention/cbi-result-view-history",
        query: { id: this.Id },
      });
      }else if(name=="dass"){
        localStorage.setItem("cbiresult_history",JSON.stringify(test));
        this.$router.push({
        path: "/modules/Intervention/dass-result-view-history",
        query: { id: this.Id },
      });
      }else if(name=="phq9"){
        localStorage.setItem("phq9result_history",JSON.stringify(test));
        this.$router.push({
        path: "/modules/Intervention/phq9-result-view-history",
        query: { id: this.Id },
      });
      }else if(name=="whodas"){
        localStorage.setItem("whodasresult_history",JSON.stringify(test));
        this.$router.push({
        path: "/modules/Intervention/whodas-result-view-history",
        query: { id: this.Id },
      });
      }
      else if(name=="bdi"){
        this.TitleName="BDI Scores";
        $('#resultmodalbdi').modal('show');
        console.log('my bdi respo',test);
        this.bdilevel=test.levels[0];
        this.bdiscore=test.levels[1];
      }else if(name=="bai"){
        this.TitleName="BAI Scores";
        $('#resultmodalbdi').modal('show');
        console.log('my bai respo',test);
        this.bdilevel=test.levels[0];
        this.bdiscore=test.levels[1];
      }else if(name=="si"){
        this.TitleName="Suicidal Intent";
        $('#resultmodalbdi').modal('show');
        console.log('suicidal intent respo',test);
        this.bdilevel=test.levels[0];
        this.bdiscore=test.levels[1];
      }else if(name=="atq"){
        localStorage.setItem("atqresult_history",JSON.stringify(test));
        this.$router.push({
        path: "/modules/Intervention/atq-view-history",
        query: { id: this.Id },
      });
      }
      else if(name=="psp"){
        localStorage.setItem("pspresult_history",JSON.stringify(test));
        this.$router.push({
        path: "/modules/Intervention/psp-view-history",
        query: { id: this.Id },
      });
      }
      else if(name=="SR"){
        localStorage.setItem("suicidalresult_history",JSON.stringify(test));
        this.$router.push({
        path: "/modules/Intervention/suicide-risk-view-history",
        query: { id: this.Id },
      });
      }
    },
    downloadresult() {
      var pdf = new jsPDF("p", "pt", "a4");
      pdf.addHTML($("#resultsbdi")[0], function () {
        pdf.save("Result.pdf");
      });
    },
    async Gotorequestappointment() {
      this.$router.push({
        path: "/modules/Patient/request-appointment-form",
        query: { id: this.Id },
      });
    },
    GoBack(){
      this.$router.push({
              path: "/modules/Intervention/patient-summary",
              query: { id: this.Id, appId: this.appId },
            });
    }
  },
};
</script>
