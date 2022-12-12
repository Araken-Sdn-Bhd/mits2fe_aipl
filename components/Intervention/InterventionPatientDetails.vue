<template>
  <div>
    <div class="page-title">
      <h1 v-if="patientdetails">{{ patientdetails.name_asin_nric }}</h1>
    </div>
    <div class="row">
      <div class="col-lg-8 col-sm-12">
        <div class="card mb-4">
          <div class="card-header">
            <h4>Demographic</h4>
            <a @click="oneditPatient" style="cursor: pointer"><i class="fal fa-edit"></i></a>
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
                  <td>{{ patientdetails.maritialstatus }}</td>
                </tr>

                <tr>
                  <td>Nationality:</td>
                  <td>{{ patientdetails.citizenships }}</td>
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
            <a><i class="fal fa-edit" style="cursor:pointer;" @click="AlertList"></i></a>
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
                  <i class="far fa-pen"></i> Update ALERT
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
</template>
<script>
export default {
  name: "InterventionPatientDetails",
  data() {
    return {
      userdetails: null,
      errorList: [],
      Id: 0,
      patientdetails: null,
      alert: "",
      loader: false,
      alert_id: 0,
      alertMessage: null,
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    let urlParams = new URLSearchParams(window.location.search);
    this.Id = urlParams.get("id");
    let urlParams1 = new URLSearchParams(window.location.search);
    this.alert_id = urlParams1.get("alert_id");
  },
  mounted() {
    this.GetPatientdetails();
    this.GetLastupdatedAlert();
  },
  methods: {
    oneditPatient() {
      this.$router.push({
        path: "/modules/Patient/patient-registration-update",
        // path:"/modules/Shharp/demographic",
        query: { id: this.Id },
      });
    },
    AlertList() {
      this.$router.push({
        path: "/modules/Intervention/list-of-alert",
        query: { id: this.Id },
      });
    },
    async GetPatientdetails() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "patient-registration/getPatientRegistrationByIdShortDetails",  //getPatientRegistrationById
        {
          id: this.Id,
        },
        { headers }
      );
      console.log("my data intervention", response.data);
      if (response.data.code == 200) {
        this.patientdetails = response.data.list[0];
      } else {
        window.alert("Something went wrong");
      }
      const response1 = await this.$axios.post(
        "patient-alert/alertListbyPatientId",
        {
          alert_id: this.alert_id,
        },
        { headers }
      );

      this.alert = response1.data[0].message;
      console.log('my data66', this.alert);
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
            },
            { headers }
          );
          console.log("esponse", response.data);
          if (response.data.code == 200) {
            this.loader = false;
            this.$nextTick(() => {
              $("#insertpopup").modal("show");
            });
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
    FocusAlert() {
      document.getElementById("alert").focus();
    },
    async GetLastupdatedAlert() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "patient-alert/alertLastbyPatientId",
        {
          patient_id: this.Id,
          added_by: this.userdetails.user.id,
        },
        { headers }
      );
      console.log("my data intervention", response.data);
      if (response.data.code == 200) {
        this.alert = response.data.list[0].message;
      } else {
        window.alert("Something went wrong");
      }
    },
  },
};
</script>
