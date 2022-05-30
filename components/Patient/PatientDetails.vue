<template>
  <div>
    <div class="page-title">
      <h1 v-if="patientdetails">{{ patientdetails.name_asin_nric }}</h1>
    </div>
    <div class="row">
      <div class="col-sm-8">
        <div class="card mb-4">
          <div class="card-header">
            <h4>Demographic</h4>
            <a @click="oneditPatient" style="cursor: pointer"
              ><i class="fal fa-edit"></i
            ></a>
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
                  <td>{{ patientdetails.citizenships[0].citizenship_name }}</td>
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
      <div class="col-sm-4">
        <div class="card mb-4">
          <div class="card-header">
            <h4>Alert</h4>
            <a href="#"><i class="fal fa-edit"></i></a>
          </div>
          <div class="card-body">
            <form class="alert-box" method="post"  @submit.prevent="AddAlert">
              <textarea class="form-control" v-model="alert"></textarea>
<p v-if="errorList.length">
                          <ul>
                           <li style="color:red"  v-for='err in errorList' :key='err' >
                           {{ err }}
                             </li>
                        </ul>
                       </p>
              <div class="d-flex mt-2">
                <button type="submit" class="btn btn-success ml-auto">
                  <i class="far fa-plus"></i> Add ALERT
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
  name: "PatientDetails",
  data() {
    return {
      userdetails: null,
      errorList: [],
      Id: 0,
      patientdetails: null,
      alert: "",
      loader: false,
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    let urlParams = new URLSearchParams(window.location.search);
    this.Id = urlParams.get("id");
    this.GetPatientdetails();
  },
  methods: {
    oneditPatient() {
      this.$router.push({
        path: "/Modules/Patient/patient-registration",
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
        "patient-registration/getPatientRegistrationById",
        {
          id: this.Id,
        },
        { headers }
      );
      if (response.data.code == 200) {
        this.patientdetails = response.data.list[0];
      } else {
        window.alert("Something went wrong");
      }
      const response1 = await this.$axios.post(
        "patient-alert/alertListbyPatientId",
        {
          patient_id: this.Id,
          added_by: this.userdetails.user.id,
        },
        { headers }
      );
      this.alert = response1.data[0].message;
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
  },
};
</script>