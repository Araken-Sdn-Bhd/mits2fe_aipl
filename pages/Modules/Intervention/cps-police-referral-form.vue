<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <!-- <Loader v-if="loader"/> -->
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>CPS POLICE REFERRAL FORM</h1>
            <!-- <a href="#"><i class="fal fa-plus"></i> Add</a> -->
          </div>
          <div class="card mb-4 hide reslt">
            <div class="form-header">
              <img src="~/assets/images/form-logo.png" />
              <h2 v-if="consentdetails">{{consentdetails.hospital_name}}</h2>
              <p>COMMUNITY PSYCHIATRY POLICE REFFERAL FORM</p>
            </div>
            <div class="card-body new-form">
              <table class="notes">
                <tbody v-if="patientdetails">
                  <tr>
                    <td colspan="2">
                      Psychiatry Department,
                      <div v-if="consentdetails">
                      <br /><span v-if="consentdetails.hospital_name != null">{{ consentdetails.hospital_name }}</span>
                      <br /><span v-if="consentdetails.hospital_adrress_1 != null">{{ consentdetails.hospital_adrress_1 }}</span>
                      <br /><span v-if="consentdetails.hospital_adrress_2 != null || consentdetails.hospital_adrress_2 != ''">{{ consentdetails.hospital_adrress_2 }}</span>
                      <br /><span v-if="consentdetails.hospital_adrress_3 != null || consentdetails.hospital_adrress_2 != ''">{{ consentdetails.hospital_adrress_3 }}</span>
                      <br /><span v-if="consentdetails.postcode != null">{{ consentdetails.postcode }}</span>
                      <br /><span v-if="consentdetails.city_name != null">{{ consentdetails.city_name }}</span>
                      <br /><span v-if="consentdetails.state_name != null">{{ consentdetails.state_name }}</span>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>To:</th>
                    <td>
                      <input type="text" class="form-control  d-print-none" v-model="to" />
                      <span class="d-none d-print-block">{{ this.to }}</span>
                    </td>
                  </tr>

                  <tr>
                    <th>Officer in charge:</th>
                    <td>
                      <input
                        type="text"
                        class="form-control d-print-none"
                        v-model="officer_in_charge"
                      />
                      <span class="d-none d-print-block">{{ this.officer_in_charge }}</span>
                    </td>
                  </tr>

                  <tr>
                    <td colspan="2">Sir/Madam,</td>
                  </tr>

                  <tr>
                    <th colspan="2">PATIENT DETAILS</th>
                  </tr>
                  <tr>
                    <th>Patient Name:</th>
                    <td>{{ patientdetails.name_asin_nric }}</td>
                  </tr>

                  <tr>
                    <th>NRIC No:</th>
                    <td>{{ patientdetails.nric_no }}</td>
                  </tr>

                  <tr>
                    <th>Age:</th>
                    <td>{{ patientdetails.age }}</td>
                  </tr>

                  <tr>
                    <th>Contact No:</th>
                    <td>{{ patientdetails.mobile_no }}</td>
                  </tr>

                  <tr>
                    <th>Address:</th>
                    <td>
                      {{ patientdetails.address1 }}
                      {{ patientdetails.address2 }}
                    </td>
                  </tr>

                  <tr>
                    <td colspan="2">
                      <label class="form-label"
                        >The above patient ongoing/history of treatment at our
                        department.</label
                      >
                      <textarea
                        class="form-control textarea d-print-none"
                        v-model="the_above_patient_ongoing"
                      ></textarea>

                      <span class="d-none d-print-block">{{ this.the_above_patient_ongoing }}</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table class="notes">
                <tbody>
                  <tr>
                    <th colspan="2">
                      The patient has potential to harm him/herself or public
                      therefore we request help to facilitate family to bring
                      this patient to nearest hospital for further treatment.
                    </th>
                  </tr>

                  <tr>
                    <td colspan="2">Thank you,</td>
                  </tr>

                  <tr>
                    <td colspan="2">Regards,</td>
                  </tr>

                  <tr>
                    <th>Name:</th>
                    <td>
                      <input type="text" class="form-control d-print-none" v-model="name" />
                      <span class="d-none d-print-block">{{ this.name }}</span>
                    </td>
                  </tr>
                  <tr>
                    <th>Designation:</th>
                    <td>
                      <input
                        type="text"
                        class="form-control d-print-none"
                        v-model="designation"
                      />
                      <span class="d-none d-print-block">{{ this.designation }}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
                      <p v-if="errorList.length">
                          <ul>
                           <li style="color:red"  v-for='err in errorList' :key='err' >
                           {{ err }}
                             </li>
                        </ul>
                       </p>

            </div>
          </div>
           <div class="d-flex" v-if="!pid">
                <div class="ml-auto">
                  <a @click="OnSubmit" class="btn btn-warning btn-text"
                    ><i class="far fa-save"></i> Save</a
                  >
                  <a @click="OnPrint" class="btn btn-success btn-text"
                    ><i class="fad fa-print"></i>Print</a
                  >
                </div>
              </div>
        </div>
      </main>
      <footer>
        <p>© MENTARI MALAYSIA MOH</p>
      </footer>
    </div>
  </div>
</template>
<script>
import CommonHeader from "../../../components/CommonHeader.vue";
import CommonSidebar from "../../../components/CommonSidebar.vue";
export default {
  components: { CommonSidebar, CommonHeader },
  name: "cps-police-referral-form",
  data() {
    return {
      userdetails: null,
      Id: 0,
      errorList: [],
      patientdetails: null,
      consentdetails: null,
      loader: false,
      to: "",
      officer_in_charge: "",
      the_above_patient_ongoing: "",
      name: "",
      designation: "",
      pid: 0,
      type: "",
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    let urlParams = new URLSearchParams(window.location.search);
    this.Id = urlParams.get("id");
    this.name = this.userdetails.user.name;
    this.designation = this.userdetails.user.role;
     let urlParams1 = new URLSearchParams(window.location.search);
    this.pid = urlParams1.get("pid");
    this.type = urlParams1.get("type");
    if (this.pid) {
      this.getdetails();
    }
    if (this.Id) {
      this.GetPatientdetails();
      this.GetPatientConnsentdetails();
    }

  },
  methods: {
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
        console.log("my details", this.patientdetails);
      } else {
        window.alert("Something went wrong");
      }
    },
    async GetPatientConnsentdetails() {
      this.loader = true;
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "intervention/get-homevisit-consent-form",
        {
          added_by: this.userdetails.user.id,
          patient_id: this.Id,
        },
        { headers }
      );
      console.log("my log", response.data);
      if (response.data.code == 200) {
        this.loader = false;
        this.consentdetails = response.data.list;
      } else {
        this.loader = false;
        window.alert("Something went wrong");
      }
    },
    async OnSubmit() {
      this.errorList = [];
      try {
        if (!this.to) {
          this.errorList.push("To is required!");
        }
        if (!this.officer_in_charge) {
          this.errorList.push("Officer in charge is required!");
        }
        if (!this.the_above_patient_ongoing) {
          this.errorList.push(
            "The above patient ongoing/history of treatment at our department is required!"
          );
        }
        if (!this.name) {
          this.errorList.push("Name is required!");
        }
        if (!this.designation) {
          this.errorList.push("Designation is required!");
        }
        if (
          this.to &&
          this.officer_in_charge &&
          this.the_above_patient_ongoing &&
          this.name &&
          this.designation
        ) {
          this.loader = true;
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          const response = await this.$axios.post(
            "cps-police-referral-form/add",
            {
              added_by: this.userdetails.user.id,
              patient_id: this.Id,
              to: this.to,
              officer_in_charge: this.officer_in_charge,
              the_above_patient_ongoing: this.the_above_patient_ongoing,
              regards: "",
              name: this.name,
              designation: this.designation,
            },
            { headers }
          );
          console.log("result", response.data);
          if (response.data.code == 200) {
            this.loader = false;
            this.$nextTick(() => {
              $("#updatepopup").modal("show");
            });
            // this.resetmodel();
          } else {
            this.loader = false;
            this.$nextTick(() => {
              $("#errorpopup").modal("show");
            });
          }
        }
      } catch (e) {
        this.loader = false;
        console.log("error", e);
      }
    },
    OnPrint() {
      var newstr = document.getElementsByClassName("reslt")[0].innerHTML;
      document.body.innerHTML = newstr;
      window.print();
      // Reload the page to refresh the data
      window.location.reload();
    },
    resetmodel() {
      this.to = "";
      this.officer_in_charge = "";
      this.the_above_patient_ongoing = "";
      this.name = "";
      this.designation = "";
    },
    async getdetails() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "/patient-appointment-details/fetchViewHistoryListDetails",
        {
          id: this.pid,
          type: "CpsPoliceReferralForm",
        },
        { headers }
      );
      if (response.data.code == 200) {
        // window.alert(response.data.Data[0].patient_mrn_id);

        this.Id = response.data.Data[0].patient_id;

        this.to = response.data.Data[0].to;
        this.officer_in_charge = response.data.Data[0].officer_in_charge;
         this.the_above_patient_ongoing = response.data.Data[0].the_above_patient_ongoing;

        this.GetPatientdetails();
        this.GetPatientConnsentdetails();
      } else {
        window.alert("Something went wrong");
      }
    },
  },
};
</script>
