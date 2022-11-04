<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <Loader v-if="loader" />
        <div class="container-fluid px-4" v-if="patientdetails">
          <div class="page-title">
            <h1>PHOTOGRAPHY CONSENT FORM</h1>
            <!-- <a href="#"><i class="fal fa-plus"></i> Add</a> -->
          </div>

          <div class="card mb-4">
            <div class="form-header">
              <img src="~/assets/images/form-logo.png" />
              <h2>[{{ this.hospitalName }}]</h2>
              <p>Photography Consent Form</p>
            </div>

            <div class="card-body new-form">
              <table class="notes table-padding">
                <tbody>
                  <tr>
                    <td colspan="2">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="1"
                          id="flexCheckDefault"
                          v-model="photography_consent_form_agree"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          I, *parent/guardian/spouse/relative of the above
                          named, consent to the *photography/multimedia
                          recording, as indicated above, of *myself/the said
                          patient, to be used only for diagnostic, treatment,
                          teaching, academic and research purposes. The record
                          is not for commercial or personal publication.
                          However, I agree and give my consent for this record
                          to be used for health promotion or teaching.
                        </label>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <table class="mt-3">
                        <tbody>
                          <tr>
                            <th>Patient's Name:</th>
                            <td>{{ patientdetails.patient_name }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <th>Guardian:</th>
                            <td>{{ patientdetails.guardian }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <th>NRIC No:</th>
                            <td>{{ patientdetails.nric_no }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <th>NRIC No:</th>
                            <td>{{ patientdetails.nric_guardian }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <th>Date:</th>
                            <td>{{ patientdetails.date }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <th>Date:</th>
                            <td>{{ patientdetails.date_guardian }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table class="notes table-padding mt-3">
                <tbody>
                  <tr>
                    <th>Applicant:</th>
                    <th>Witness:</th>
                  </tr>

                  <tr>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <th>Doctor's Name/case Manager:</th>
                            <td>{{ patientdetails.user_name }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <th>Witness Name:</th>
                            <td> <input
                              type="text"
                              class="form-control"
                              name=""
                              v-model="witness_name"
                            /></td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <th>Designation:</th>
                            <td>{{ patientdetails.designation }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <th>Designation:</th>
                            <!-- <td>{{ patientdetails.designation_guardian }}</td> -->
                             <td> <input
                              type="text"
                              class="form-control"
                              name=""
                              v-model="designation_guardian"
                            /></td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <th>Date:</th>
                            <td>{{ patientdetails.date }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <th>Date:</th>
                            <td>{{ patientdetails.date_guardian }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="container-fluid px-4 reslt" style="display: none" v-if="patientdetails">
          <div class="page-title">
            <h1>PHOTOGRAPHY CONSENT FORM</h1>
            <!-- <a href="#"><i class="fal fa-plus"></i> Add</a> -->
          </div>

          <div class="card mb-4">
            <div class="form-header">
              <img src="~/assets/images/form-logo.png" />
              <h2> [{{ this.hospitalName }}]</h2>
              <p>Photography Consent Form</p>
            </div>

            <div class="card-body new-form">
              <table class="notes table-padding">
                <tbody>
                  <tr>
                    <td colspan="2">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="1"
                          id="flexCheckDefault"
                          checked
                          v-model="photography_consent_form_agree"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          I, *parent/guardian/spouse/relative of the above
                          named, consent to the *photography/multimedia
                          recording, as indicated above, of *myself/the said
                          patient, to be used only for diagnostic, treatment,
                          teaching, academic and research purposes. The record
                          is not for commercial or personal publication.
                          However, I agree and give my consent for this record
                          to be used for health promotion or teaching.
                        </label>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <table class="mt-3">
                        <tbody>
                          <tr>
                            <th>Patient's Name:</th>
                            <td>{{ patientdetails.patient_name }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <th>Guardian:</th>
                            <td>{{ patientdetails.guardian }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <th>NRIC No:</th>
                            <td>{{ patientdetails.nric_no }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <th>NRIC No:</th>
                            <td>{{ patientdetails.nric_guardian }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <th>Date:</th>
                            <td>{{ patientdetails.date }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <th>Date:</th>
                            <td>{{ patientdetails.date_guardian }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table class="notes table-padding mt-3">
                <tbody>
                  <tr>
                    <th>Applicant:</th>
                    <th>Witness:</th>
                  </tr>
                  <tr>
                    <td>
                      <textarea class="signature"></textarea>
                      <p class="text-align-center">Signature Patient/Guardian</p>
                    </td>
                    <td>
                     <textarea class="signature"></textarea>
                      <p class="text-align-center">Signature Witness</p>
                      </td>
                  </tr>
                  <tr>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <th>Doctor's Name/case Manager:</th>
                            <td>{{ patientdetails.user_name }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <th>Witness Name:</th>
                            <td><span style="max-width: 350px;     min-width: 230px; border: 1px solid #d7dce3; padding: 10px 25px; display: block; width: 100%; border-radius: 4px; ">{{ witness_name }}</span></td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <th>Designation:</th>
                            <td>{{ patientdetails.designation }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <th>Designation:</th>
                            <td><span style="max-width: 350px;     min-width: 230px; border: 1px solid #d7dce3; padding: 10px 25px; display: block; width: 100%; border-radius: 4px; ">{{ designation_guardian }}</span></td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <th>Date:</th>
                            <td>{{ patientdetails.date }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <th>Date:</th>
                            <td>{{ patientdetails.date_guardian }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
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
      loader: false,
      photography_consent_form_agree: "0",
      pid:0,
      designation_guardian:"",
      witness_name:"",
      hospitalName: "",
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    let urlParams = new URLSearchParams(window.location.search);
    this.hospitalName = this.userdetails.branch.hospital_name;
    this.Id = urlParams.get("id");
    if (this.Id) {
      this.GetPatientdetails();
    }
    let urlParams1 = new URLSearchParams(window.location.search);
    this.pid = urlParams1.get("pid");
    this.type = urlParams1.get("type");
    if (this.pid) {
      this.getdetails();
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
        "intervention/get-photography-consent-form",
        {
          added_by: this.userdetails.user.id,
          patient_id: this.Id,
        },
        { headers }
      );
      if (response.data.code == 200) {
        this.patientdetails = response.data.list;
        this.designation_guardian= this.patientdetails.designation_guardian;
        this.witness_name= this.patientdetails.witness_name;
        console.log("my details photography", this.patientdetails);
      } else {
        window.alert("Something went wrong");
      }
    },
    async OnSubmit() {
      this.errorList = [];
      try {
        if (!this.photography_consent_form_agree) {
          this.errorList.push("Please agree term & condition");
        }
        if (this.photography_consent_form_agree) {
          this.loader = true;
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          const response = await this.$axios.post(
            "intervention/photography-form",
            {
              added_by: this.userdetails.user.id,
              patient_id: this.Id,
              photography_consent_form_agree:
                this.photography_consent_form_agree,
            },
            { headers }
          );
          console.log("result", response.data);
          if (response.data.code == 200) {
            this.loader = false;
            this.$nextTick(() => {
              $("#updatepopup").modal("show");
            });
            this.resetmodel();
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
          type: "PhotographyConsentForm",
        },
        { headers }
      );
      if (response.data.code == 200) {
        // window.alert(response.data.Data[0].patient_mrn_id);

        this.Id = response.data.Data[0].patient_id;

        // this.name = response.data.Data[0].name;

        // this.GetList();
        this.GetPatientdetails();
      } else {
        window.alert("Something went wrong");
      }
    },
  },
};
</script>
