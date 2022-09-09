<template>
  <div id="layoutSidenav">
    <CommonSidebar  />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <!-- <Loader v-if="loader" /> -->
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>ETP CONSENT FORM</h1>
          </div>
          <div class="card mb-4" v-if="consentdetails">
            <div class="form-header">
              <img src="~/assets/images/form-logo.png" />
              <h2> [{{ consentdetails.hospital_name }}]</h2>
              <p>
           CONSENT FOR EMPLOYMENT TRANSITION PROGRAM
              </p>
            </div>
            <div class="card-body new-form" >
              <div class="form-title">
                <h5>1. CONSENT FOR PARTICIPATION</h5>
              </div>
              <table class="notes table-padding">
                <tbody>
                  <tr>
                    <td colspan="2">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault" v-model="participant"
                        />
                        <label
                          class="form-check-label label-balck"
                          for="flexCheckDefault"
                        >
                       <span style="color:#000;"> I hereby agree to participate in </span><span style="color:#000;">Employment Transition Program (ETP)</span>  [{{ consentdetails.hospital_branch_name }}]. <span style="color:#000;">I also agree to follow the rules and give my full commitment. I fully understand if any rules was not follow, I deemed to be terminated from this program.</span>
                          
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <table class="mt-3">
                        <tbody>
                          <tr>
                            <th>Patient/Guardian:</th>
                            <td>{{ consentdetails.patient_name }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <th>Witness:</th>
                            <!-- <td>{{ consentdetails.user_name }}</td> -->
                             <td> <input
                              type="text"
                              class="form-control"
                              name=""
                              v-model="consentdetails.user_name"
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
                            <th>Designation:</th>
                            <!-- <td>{{ consentdetails.designation }}</td> -->
                             <td> <input
                              type="text"
                              class="form-control"
                              name=""
                              v-model="consentdetails.designation"
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
              <div class="form-title">
                <h5>2. CONSENT FOR DISCLOSURE</h5>
              </div>
              <table class="notes table-padding">
                <tbody>
                  <tr>
                    <td colspan="2">
                      I agree and consent for  [{{ consentdetails.hospital_branch_name }}] to
                      disclose my medical record to employee and will not
                      subjected to any act related uder the law.
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <div class="form-check form-check-inline mt-2">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          value="1" v-model="discloser"
                        />
                        <label class="form-check-label" for="inlineRadio1"
                          >Yes
                        </label>
                      </div>
                      <div class="form-check form-check-inline mt-2">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio2"
                          value="0" v-model="discloser"
                        />
                        <label class="form-check-label" for="inlineRadio2"
                          >No
                        </label>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <th>Patient/Guardian:</th>
                            <td>{{ consentdetails.patient_name }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <th>Witness:</th>
                            <!-- <td>{{ consentdetails.user_name }}</td> -->
                             <td> <input
                              type="text"
                              class="form-control"
                              name=""
                              v-model="user_name"
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
                            <th>Designation:</th>
                            <!-- <td>{{ consentdetails.designation }}</td> -->
                             <td> <input
                              type="text"
                              class="form-control"
                              name=""
                              v-model="designation"
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
<p v-if="errorList.length">
                          <ul>
                           <li style="color:red"  v-for='err in errorList' :key='err' >
                           {{ err }}
                             </li>
                        </ul>
                       </p>
             
            </div>
          </div>
           <div class="card mb-4 reslt" v-if="consentdetails" style="display:none;">
            <div class="form-header">
              <img src="~/assets/images/form-logo.png" />
              <h2>[{{ consentdetails.hospital_name }}]</h2>
              <p>
           CONSENT FOR EMPLOYMENT TRANSITION PROGRAM
              </p>
            </div>
            <div class="card-body new-form" >
              <div class="form-title">
                <h5>1. CONSENT FOR PARTICIPATION</h5>
              </div>
              <table class="notes table-padding">
                <tbody>
                  <tr>
                    <td colspan="2">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault" v-model="participant"
                        />
                        <label
                          class="form-check-label label-balck"
                          for="flexCheckDefault"
                        >
                        I hereby agree to participate in supported <span style="color:#000;">Employment Transition Program (ETP)</span>  [{{ consentdetails.hospital_branch_name }}]. I also agree to follow the rules and give my full commitment. I fully understand if any rules was not follow, I deemed to be terminated from this program.
                          
                        </label>
                      </div>
                    </td>
                  </tr>
                   <tr>
                    <td>
                      <textarea class="signature"></textarea>
                      <!-- <p class="text-align-center">Signature Patient/Guardian</p> -->
                    </td>
                    <td>
                     <textarea class="signature"></textarea>
                      <!-- <p class="text-align-center">Signature Witness</p> -->
                      </td>
                  </tr>
                  <tr>
                    <td>
                      <table class="mt-3">
                        <tbody>
                          <tr>
                            <th>Patient/Guardian:</th>
                            <td>{{ consentdetails.patient_name }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <th>Witness:</th>
                            <!-- <td>{{ consentdetails.user_name }}</td> -->
                             <td>
                               <input
                              type="text"
                              class="form-control"
                              name=""
                              v-model="consentdetails.user_name"
                            />
                            </td>
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
                            <th>Designation:</th>
                            <!-- <td>{{ consentdetails.designation }}</td> -->
                             <td> <input
                              type="text"
                              class="form-control"
                              name=""
                              v-model="consentdetails.designation"
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
              <div class="form-title">
                <h5>2. CONSENT FOR DISCLOSURE</h5>
              </div>
              <table class="notes table-padding">
                <tbody>
                  <tr>
                    <td colspan="2">
                      I agree and consent for  [{{ consentdetails.hospital_branch_name }}] to
                      disclose my medical record to employee and will not
                      subjected to any act related uder the law.
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <div class="form-check form-check-inline mt-2">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          value="1" v-model="discloser"
                        />
                        <label class="form-check-label" for="inlineRadio1"
                          >Yes
                        </label>
                      </div>
                      <div class="form-check form-check-inline mt-2">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio2"
                          value="0" v-model="discloser"
                        />
                        <label class="form-check-label" for="inlineRadio2"
                          >No
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <textarea class="signature"></textarea>
                      <!-- <p class="text-align-center">Signature Patient/Guardian</p> -->
                    </td>
                    <td>
                     <textarea class="signature"></textarea>
                      <!-- <p class="text-align-center">Signature Witness</p> -->
                      </td>
                  </tr>
                  <tr>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <th>Patient/Guardian:</th>
                            <td>{{ consentdetails.patient_name }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <th>Witness:</th>
                            <td><span style="max-width: 350px;     min-width: 230px; border: 1px solid #d7dce3; padding: 10px 25px; display: block; width: 100%; border-radius: 4px; ">{{ user_name }}</span></td>
                             <!-- <td> <input
                              type="text"
                              class="form-control"
                              name=""
                              v-model="consentdetails.user_name"
                            /></td> -->
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
                            <th>Designation:</th>
                            <td><span style="max-width: 350px;     min-width: 230px; border: 1px solid #d7dce3; padding: 10px 25px; display: block; width: 100%; border-radius: 4px; ">{{ designation }}</span></td>
                             <!-- <td> <input
                              type="text"
                              class="form-control"
                              name=""
                              v-model="consentdetails.designation"
                            /></td> -->
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
                  <button type="button" class="btn btn-warning btn-text" @click="OnSubmit"
                    ><i class="far fa-save"></i> Save</button
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
  name: "patient-summary",
  data() {
    return {
      userdetails: null,
      Id: 0,
      errorList: [],
      consentdetails: null,
      hospitalName: "HOSPITAL TUANKU FAUZIAH",
      branchName: "Mentari Kangar",
      loader: false,
      participant: 0,
      discloser: 0,
      designation: "",
      user_name: "",
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    let urlParams = new URLSearchParams(window.location.search);
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
        "intervention/get-se-form",
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
        this.designation = this.consentdetails.designation;
        this.user_name = this.consentdetails.user_name;
      } else {
        this.loader = false;
        window.alert("Something went wrong");
      }
    },
    async OnSubmit() {
      this.errorList = [];
      try {
        if (!this.participant) {
          this.errorList.push(
            "Please agree to participate in supported employment program"
          );
        } else {
          this.participant = "1";
        }
        if (this.participant) {
          this.loader = true;
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          const response = await this.$axios.post(
            "intervention/Etp-form",
            {
              added_by: this.userdetails.user.id,
              patient_id: this.Id,
              consent_for_participation: this.participant,
              consent_for_disclosure: this.discloser,
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
          type: "CpsHomeVisitWithdrawalForm",
        },
        { headers }
      );
      if (response.data.code == 200) {
        // window.alert(response.data.Data[0].patient_mrn_id);

        this.Id = response.data.Data[0].patient_id;

        // this.name = response.data.Data[0].name;

        // this.GetList();
        this.GetPatientConnsentdetails();
      } else {
        window.alert("Something went wrong");
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
</style>