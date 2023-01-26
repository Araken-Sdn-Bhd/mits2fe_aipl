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
              <div class="col-sm-12">
                <div class="card mb-4">
                  <div class="card-header">
                    <h4>Patient Details</h4>
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
                          <td>{{ patientdetails.gender }}</td>
                        </tr>

                        <tr>
                          <td>Date Of Birth:</td>
                          <td>{{ patientdetails.birth_date }}</td>
                        </tr>

                        <tr>
                          <td>Marital Status:</td>
                          <td>
                            {{ patientdetails.maritialstatus }}
                          </td>
                        </tr>

                        <tr>
                          <td>Nationality:</td>
                          <td>
                            {{
                              patientdetails.citizenships
                            }}
                          </td>
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
                          <td v-if="!patientdetails.drug_allergy_description">
                            -
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <Loader v-if="loader" />
            </div>
          </div>
          <!-- card -->
          <div class="card mb-4">
            <div class="card-header icon-title">
              <a href="#"><i class="fad fa-poll"></i></a>
              <h4>L.A.S.E.R Assessment Result</h4>
            </div>

            <div class="card-body">
              <table class="info-result">
                <thead>
                  <tr>
                    <th>Pre Contemplation</th>
                    <th>Contemplation</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="laserresult">
                    <td>{{ precontemplationScore }}</td>
                    <td>{{ contemplationScore }}</td>
                    <td>{{ actionScore }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <br><br>
            <div class="d-flex">
                <button @click="GoBack" class="btn btn-primary btn-text">
                  <i class="fa fa-arrow-alt-to-left"></i> Back
                    </button></div>
          </div>
          <!-- card -->
        </div>
      </main>
    </div>
  </div>
</template>
<style scoped>
.info-result {
  margin-top: 15px;
}
.info-result td,
.info-result th {
  border: 1px solid #999;
  padding: 5px 20px;
  font-size: 13px;
  font-weight: 600;
}
</style>
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
      precontemplationScore: 0,
      contemplationScore: 0,
      actionScore: 0,
      laserresult: null,
      appId:0,
    };
  },
  beforeMount() {
      this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.laserresult = JSON.parse(localStorage.getItem("laserresult"));
    console.log("laser result", this.laserresult);
    if (this.laserresult) {
      this.precontemplationScore = this.laserresult.PRE_CONTEMPLATION.score;
      this.contemplationScore = this.laserresult.CONTEMPLATION.score;
      this.actionScore = this.laserresult.ACTION.score;
    }
    let urlParams = new URLSearchParams(window.location.search);
    this.Id = urlParams.get("id");
    this.appId = urlParams.get("appId");
    this.GetPatientdetails();


  },
  mounted() {},
  methods: {
    async GetPatientdetails() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "patient-registration/getPatientRegistrationByIdShortDetails",
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
    GoBack(){
      if (this.type == 'view') {
                this.$router.go(-1);
            } else {
                this.$router.push({
                    path: "/modules/Intervention/patient-summary",
                    query: {
                        id: this.Id,
                        appId: this.appId
                    },
                });
            }
    },
  },
};
</script>

