<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <Loader v-if="loader" />
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>Patient Screening and Appointment</h1>
            <!-- <a href="demographic.html"><i class="fal fa-plus"></i> Add</a> -->
          </div>

          <div class="card mb-4">
            <div class="card-header bg-transparent">
              <h4>PERSONAL AND SOCIAL PERFORMANCE SCALE (PSP)</h4>
            </div>
            <div class="card-body">
              <table class="data-info mt-3 mb-3">
                <thead>
                  <tr>
                    <th colspan="2"></th>
                    <th class="text-center">Absent</th>
                    <th class="text-center">Mild</th>
                    <th class="text-center">Manifest</th>
                    <th class="text-center">Marked</th>
                    <th class="text-center">Severe</th>
                    <th class="text-center">Very Severe</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(psp, index) in list" :key="index">
                    <th colspan="2">
                      {{ psp.Question }}
                    </th>
                    <td class="text-center">
                      <input
                        class="form-check-input"
                        type="radio"
                        value="true"
                        v-model="psp.Answer0.value"
                      />
                    </td>
                    <td class="text-center">
                      <input
                        class="form-check-input"
                        type="radio"
                        value="true"
                        v-model="psp.Answer1.value"
                      />
                    </td>
                    <td class="text-center">
                      <input
                        class="form-check-input"
                        type="radio"
                        value="true"
                        v-model="psp.Answer2.value"
                      />
                    </td>
                    <td class="text-center">
                      <input
                        class="form-check-input"
                        type="radio"
                        value="true"
                        v-model="psp.Answer3.value"
                      />
                    </td>
                    <td class="text-center">
                      <input
                        class="form-check-input"
                        type="radio"
                        value="true"
                        v-model="psp.Answer4.value"
                      />
                    </td>
                    <td class="text-center">
                      <input
                        class="form-check-input"
                        type="radio"
                        value="true"
                        v-model="psp.Answer5.value"

                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <Error :message="error" v-if="error" />
              <!-- <div class="d-flex align-items-center mt-2">
                <button
                  type="submit"
                  class="btn btn-success ml-auto"
                  @click="OnsubmitTest"
                >
                  <i class="fad fa-paper-plane"></i> Submit
                </button>
              </div> -->
            </div>
            <div class="row justify-content">
              <div class="col-sm-8">
                <a
                      @click="GoBack"
                      class="btn btn-primary btn-text"
                      ><i class="fa fa-arrow-alt-to-left"></i> Back</a>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="resultmodal" tabindex="-1">
          <div class="modal-dialog modal-dialog-centered modal-table-body">
            <div class="modal-content">
              <div id="results" style="background: #fff">
                <div class="modal-header">
                   <h5 class="modal-title">PSP Alert</h5>
                  <p>
                    Your Test Successfully Submitted!
                  </p>
                </div>
                <!-- <div class="modal-body">
                  <table class="modal-table">
                    <thead>
                      <tr>
                        <th scope="col">Level</th>
                        <th scope="col">Total Scrore</th>
                      </tr>
                    </thead>
                  <tbody>
                      <tr class="active" v-if="result">
                        <th scope="row">{{result.PSP}}</th>
                        <td>{{result.pspScore}}</td>
                      </tr>
                    </tbody>
                  </table>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import CommonHeader from '../../../components/CommonHeader.vue';
import CommonSidebar from '../../../components/CommonSidebar.vue';
export default {
  components: { CommonSidebar, CommonHeader },
  name: "psp",
  data() {
    return {
      userdetails: null,
      list: [],
      Ipaddress: "",
      checkedList: {},
      error: null,
      loader: false,
      userId: 0,
      token: "",
      Id: 0,
      appId: 0,
      result: null,
      pspresult_history:null,
      test_name:"",
      datetime:"",
      patient_id:""
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));

    this.pspresult_history = JSON.parse(localStorage.getItem("pspresult_history"));
    console.log("atq namesre", this.pspresult_history);
    if (this.pspresult_history) {
      this.test_name=this.pspresult_history.test_name;
      this.datetime=this.pspresult_history.datetime;
      this.patient_id=this.pspresult_history.patient_id;
      console.log("cbi namesre", this.patient_id);
    }
    this.GetAnswerList();
    if (this.userdetails) {
      this.userId = this.userdetails.user.id;
      this.token = this.userdetails.access_token;
    }
    let urlParams = new URLSearchParams(window.location.search);
    this.Id = urlParams.get("id");
    let urlParams1 = new URLSearchParams(window.location.search);
    this.appId = urlParams1.get("appId");
  },
  methods: {
     async GetAnswerList() {
      const headers = {
        Authorization: "Bearer " + this.token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "patient/test-history-show",
        { type: "psp",patient_id: this.patient_id,datetime: this.datetime },
        { headers }
      );
      if (response.data.code == 200 || response.data.code == "200") {
        this.list = response.data.list;
        console.log('psptestresult',this.list);
      } else {
        this.list = [];
      }
    },
    async GetList() {
      const headers = {
        Authorization: "Bearer " + this.token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "patient-online-self-test/list-type",
        { Type: "psp" },
        { headers }
      );
      console.log("psp", response.data);
      if (response.data.code == 200 || response.data.code == "200") {
        this.list = response.data.list;
      } else {
        this.list = [];
      }
    },
   async GetUserIpAddress() {
      const {
        data: { ip },
      } = await this.$axios.get("https://www.cloudflare.com/cdn-cgi/trace", {
        responseType: "text",
        transformResponse: (data) =>
          Object.fromEntries(
            data
              .trim()
              .split("\n")
              .map((line) => line.split("="))
          ),
      });
      this.Ipaddress = ip;
    },
    onchange(ind, val) {
      this.checkedList[ind] = val;
    },
    async OnsubmitTest() {
      this.error = null;
      try {
        if (this.list.length == Object.values(this.checkedList).length) {
          this.loader = true;
          const headers = {
            Authorization: "Bearer " + this.token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          const response = await this.$axios.post(
            "patient/online-test",
            {
              added_by: this.userId,
              patient_id: this.Id,
              test_name: "psp",
              test_section_name: "PSP",
              result: JSON.stringify([{ PSP: this.checkedList }]),
              user_ip_address: this.Ipaddress,
            },
            { headers }
          );
          console.log("my reslut", response.data);
          if (response.data.code == 200 || response.data.code == "200") {
            this.loader = false;
            this.result = response.data.result;
            this.$nextTick(() => {
              $("#resultmodal").modal("show");
            });
          } else {
            this.loader = false;
            this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + JSON.stringify(response.data.message),
                  footer: ''
                });
          }
        } else {
          this.error = "Please attempt all question";
        }
      } catch (e) {
        this.loader = false;
        this.errors = e;
      }
    },
    downloadresult() {
      var pdf = new jsPDF("p", "pt", "a4");
      pdf.addHTML($("#results")[0], function () {
        pdf.save("Result.pdf");
      });
    },
      async Gotorequestappointment() {
      this.$router.push({
        path: "/modules/Intervention/request-appointment-form",
        query: { id: this.Id },
      });
    },
    GoBack(){
      if(this.appId){
        this.$router.push({
              path: "/modules/Intervention/patient-summary",
              query: { id: this.Id, appId: this.appId },
            });
      }else{
        this.$router.push({
              path: "/modules/Intervention/patient-summary",
              query: { id: this.Id},
            });
      };
    }

  },
};
</script>
