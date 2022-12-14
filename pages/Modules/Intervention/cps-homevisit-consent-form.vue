<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>CPS Homevisit Consent Form</h1>
          </div>
          <div class="card mb-4" v-if="consentdetails">
            <div class="card-body new-form">
              <div class="form-header">
                <img src="~/assets/images/form-logo.png" />
                <h2>{{ this.hospitalName }}</h2>
                <p>
                  CONSENT FOR HOME VISIT BY COMMUNITY PSYCHIATRY SERVICES,
                  {{ this.hospitalName }}
                </p>
              </div>
              <table class="notes table-padding">
                <tbody>
                  <tr>
                    <td colspan="2">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="flexCheckDefault"
                          v-model="consent_for_homevisit"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          I hereby agree and consent to receive treatment at
                          home for me/as a guardian for psychiatry problem which
                          have been explained to me by doctor. I understand
                          regarding the treatment will be given by <span style="color:#a6b1b7;">Community
                          Psychiatry Services (cps).</span>
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
                            <td>{{ consentdetails.patient_name }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <th>Guardian:</th>
                            <td>{{ consentdetails.user_name }}</td>
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
                            <td>{{ consentdetails.nric_no }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <th>NRIC No:</th>
                            <td>{{ consentdetails.guardian_nric }}</td>
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
                            <th>Date :</th>
                            <td>{{ consentdetails.date }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <th>Date:</th>
                            <td>{{ consentdetails.date }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table class="notes" v-if="consentdetails">
                <tbody>
                  <tr>
                    <td colspan="2">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="flexCheckDefault1"
                          v-model="consent_for_hereby_already_give_explanation"
                        />
                        <label class="form-check-label" for="flexCheckDefault1">
                          I hereby already give explanation regarding community
                          psychiatry services to the patient/guardian as above.
                        </label>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td style="width:16%">Doctor's Name/Case Manager:</td>
                    <td>{{ consentdetails.designation }}</td>
                  </tr>
                  <tr>
                    <td>Date:</td>
                    <td>{{ consentdetails.date }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div
            class="card mb-4 reslt"
            v-if="consentdetails"
            style="display: none"
          >
            <div class="card-body new-form">
              <div class="form-header">
                <img src="~/assets/images/form-logo.png" />
                <h2>{{ this.hospitalName }}</h2>
                <p>
                  CONSENT FOR HOME VISIT BY COMMUNITY PSYCHIATRY SERVICES,
                </p>
              </div>
              <table class="notes table-padding">
                <tbody>
                  <tr>
                    <td colspan="2">
                      <div class="form-check">
                        <input
                        v-if="consent_for_homevisit == true"
                          class="form-check-input"
                          type="checkbox"
                          id="flexCheckDefault"
                          checked
                        />
                        <input
                        v-else
                          class="form-check-input"
                          type="checkbox"
                          id="flexCheckDefault"
                          value="false"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          I hereby agree and consent to receive treatment at
                          home for me/as a guardian for psychiatry problem which
                          have been explained to me by doctor. I understand
                          regarding the treatment will be given by <span style="color:#a6b1b7;">Community
                          Psychiatry Services (cps).</span>
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <textarea class="signature"></textarea>
                      <p class="text-align-center">
                        Signature Patient/Guardian
                      </p>
                    </td>
                    <!-- <td>
                     <textarea class="signature"></textarea>
                      <p class="text-align-center">Signature Witness</p>
                      </td> -->
                  </tr>
                  <tr>
                    <td>
                      <table class="mt-3">
                        <tbody>
                          <tr>
                            <th>Patient's Name:</th>
                            <td>{{ consentdetails.patient_name }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <th>Guardian:</th>
                            <td>{{ consentdetails.user_name }}</td>
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
                            <td>{{ consentdetails.nric_no }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <th>NRIC No:</th>
                            <td>{{ consentdetails.guardian_nric }}</td>
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
                            <th>Date :</th>
                            <td>{{ consentdetails.date }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <th>Date:</th>
                            <td>{{ consentdetails.date }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table class="notes" v-if="consentdetails">
                <tbody>
                  <tr>
                    <td colspan="2">
                      <div class="form-check">
                        <input
                        v-if="consent_for_hereby_already_give_explanation == true"
                          class="form-check-input"
                          type="checkbox"
                          id="flexCheckDefault1"
                          checked
                        />
                        <input
                        v-else
                          class="form-check-input"
                          type="checkbox"
                          id="flexCheckDefault1"
                          value="false"
                        />
                        <label class="form-check-label" for="flexCheckDefault1">
                          I hereby already give explanation regarding community
                          psychiatry services to the patient/guardian as above.
                        </label>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="notes" style="width:47%" v-if="consentdetails">
                <tbody>
                  <tr>
                    <td colspan="2">
                      <textarea class="signature" style="width: 100%;"></textarea>
                      <p class="text-align-center">Doctor</p>
                    </td>
                  </tr>
                  <tr>
                    <th style=" width: 50%; ">Doctor's Name/Case Manager:</th>
                    <td style=" width: 50%; ">{{ consentdetails.designation }}</td>
                  </tr>

                  <tr>
                    <th style=" width: 50%; ">Date:</th>
                    <td style=" width: 50%; ">{{ consentdetails.date }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="d-flex" v-if="!pid">
            <div class="ml-auto">
              <button
                type="button"
                class="btn btn-warning btn-text"
                @click="OnSubmit"
              >
                <i class="fa fa-save"></i> Save
              </button>
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
  name: "cps-discharge-note",
  data() {
    return {
      userdetails: null,
      Id: 0,
      errorList: [],
      consentdetails: null,
      hospitalName: "",
      branchName: "",
      loader: false,
      consent_for_homevisit: false,
      consent_for_hereby_already_give_explanation: false,
      consent_for_homevisit1: false,
      consent_for_hereby_already_give_explanation1: false,
      pid: 0,
      type: "",
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    let urlParams = new URLSearchParams(window.location.search);
    this.hospitalName = this.userdetails.branch.hospital_name;
    this.Id = urlParams.get("id");
    if (this.Id) {
      this.GetPatientConnsentdetails();
    }

    let urlParams1 = new URLSearchParams(window.location.search);
    this.pid = urlParams1.get("pid");
    this.type = urlParams1.get("type");
    if (this.pid) {
      this.getdetails();
    }
  },
  methods: {
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
        this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + this.error,
                  footer: ''
                });
      }
    },
    async OnSubmit() {
      this.errorList = [];
      try {
        if (this.consent_for_homevisit) {
          this.consent_for_homevisit = "1";
        }
        if (this.consent_for_hereby_already_give_explanation) {
          this.consent_for_hereby_already_give_explanation = "1";
        }
        this.loader = true;
        const headers = {
          Authorization: "Bearer " + this.userdetails.access_token,
          Accept: "application/json",
          "Content-Type": "application/json",
        };
        const response = await this.$axios.post(
          "intervention/homevisit-form",
          {
            added_by: this.userdetails.user.id,
            patient_id: this.Id,
            consent_for_homevisit: this.consent_for_homevisit,
            consent_for_hereby_already_give_explanation:
              this.consent_for_hereby_already_give_explanation,
          },
          { headers }
        );
        console.log("result", response.data);
        if (response.data.code == 200) {
          this.loader = false;
          this.$nextTick(() => {
            $("#updatepopup").modal("show");
          });
        } else {
          this.loader = false;
          this.$nextTick(() => {
            $("#errorpopup").modal("show");
          });
        }
      } catch (e) {
        this.loader = false;
        console.log("error", e);
      }
    },
    OnPrint() {

      this.consent_for_hereby_already_give_explanation1 = this.consent_for_hereby_already_give_explanation1;
      this.consent_for_homevisit = this.consent_for_homevisit1;
      var newstr = document.getElementsByClassName("reslt")[0].innerHTML;
      document.body.innerHTML = newstr;
      window.print();
      window.location.reload();
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
          type: "CpsHomeVisitConsentForm",
        },
        { headers }
      );
      if (response.data.code == 200) {
        this.Id = response.data.Data[0].patient_id;

        this.consent_for_homevisit =
          response.data.Data[0].consent_for_homevisit;
        this.consent_for_hereby_already_give_explanation =
          response.data.Data[0].consent_for_hereby_already_give_explanation;

        this.GetPatientConnsentdetails();

      } else {
        this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + this.error,
                  footer: ''
                });
      }
    },
  },
};
</script>
<style scoped>
.hide {
  display: none;
}

.signature {
  width: 90%;
  resize: none;
  height: 95px;
  margin-top: 30px;
}
.text-align-center {
  text-align: center;
}
</style>
