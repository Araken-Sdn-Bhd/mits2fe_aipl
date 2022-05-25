<template>
  <div id="layoutSidenav">
    <PatientLoginSidebar />
    <div id="layoutSidenav_content">
      <PatientLoginHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>Progress Notes</h1>
            <!-- <a href="#"><i class="fal fa-plus"></i> Add</a> -->
          </div>
          <div class="card mb-4">
            <div class="card-body">
              <form method="post" @submit.prevent="Onphychiatryclerkingnote">
                 <table class="notes">
                                <thead>
                                    <tr>
                                        <th colspan="2">Patient Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Patient Name:</th>
                                        <td>Mr. Muhammad</td>
                                    </tr>
                                    <tr>
                                        <th>NRIC NO:</th>
                                        <td>810109-12-5873</td>
                                    </tr>
                                    <tr>
                                        <th>Age:</th>
                                        <td>40</td>
                                    </tr>
                                    <tr>
                                        <th>Contact No:</th>
                                        <td> 012-3456789</td>
                                    </tr>
                                    <tr>
                                        <th>Gender:</th>
                                        <td>Male </td>
                                    </tr>
                                    <tr>
                                        <th>Address:</th>
                                        <td>40, Jalan Pinang Sebatang.34782, Kepong,selangor Darul Ehsan. </td>
                                    </tr>
                                    <tr>
                                        <th>From:</th>
                                        <td>Mentari Address</td>
                                    </tr>
                                    <tr>
                                        <th colspan="2">
                                            Dear Dr,<br> Thank you for seeing this patient. </th>
                                    </tr>
                                    <tr>
                                        <th>Diagnosis: </th>
                                        <td><input type="text" v-model="diagnosis" class="form-control max-width" name=""></td>
                                    </tr>
                                    <tr>
                                        <th>Reason For Referral: </th>
                                        <td><textarea v-model="reason_for_referral" class="form-control textarea"></textarea></td>
                                    </tr>
                                    <tr>
                                        <th>Summary: </th>
                                        <td><textarea v-model="summary" class="form-control textarea"></textarea></td>
                                    </tr>
                                    <tr>
                                        <th>Management: </th>
                                        <td><input v-model="management" type="text" class="form-control max-width" name=""></td>
                                    </tr>
                                    <tr>
                                        <th>Medication: </th>
                                        <td><input v-model="medication" type="text" class="form-control max-width" name=""></td>
                                    </tr>
                                    <tr>
                                        <th colspan="2">Thank You,</th>
                                    </tr>
                                    <tr>
                                        <th>Name: </th>
                                        <td><input v-model="name" type="text" class="form-control" name=""></td>
                                    </tr>
                                    <tr>
                                        <th>Designation: </th>
                                        <td><input v-model="designation" type="text" class="form-control" name=""></td>
                                    </tr>
                                    <tr>
                                        <th>Hospital: </th>
                                        <td><input v-model="hospital" type="text" class="form-control" name=""></td>
                                    </tr>
                                </tbody>
                            </table>

                <div
                  class="accordion form-accordion mt-3"
                  id="accordionExample"
                >
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        OCCASION OF SERVICES
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      class="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <div class="row mb-3">
                          <label class="col-sm-4 col-form-label"
                            >Location Of Services</label
                          >
                          <div class="col-sm-8">
                            <select
                              class="form-select"
                              v-model="location_services"
                            >
                              <option value="0">
                                Select location of services
                              </option>
                              <option value="1">On-site (Mentari)</option>
                              <option value="2">Home Visit</option>
                              <option value="3">Workplace Visit</option>
                              <option value="4">Telephone Or Virtual</option>
                              <option value="5">Main Hospital</option>
                              <option value="6">
                                Correspondence (Memo , Online Platform)
                              </option>
                              <option value="7">External (Others)</option>
                            </select>
                          </div>
                        </div>
                        <!-- close-row -->
                        <div class="row mb-3">
                          <label class="col-sm-4 col-form-label"
                            >Type Of Diagnosis</label
                          >
                          <div class="col-sm-8">
                            <select
                              class="form-select"
                              v-model="type_diagnosis_id"
                            >
                              <option selected>
                                Select ICD 10/ICD 11 CODE
                              </option>
                              <option value="1">...</option>
                            </select>
                          </div>
                        </div>
                        <!-- close-row -->
                        <div class="row mb-3">
                          <label class="col-sm-4 col-form-label"
                            >Category Of Services
                          </label>
                          <div class="col-sm-8">
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio1"
                                value="assisstance"
                                v-model="category_services"
                              />
                              <label class="form-check-label" for="inlineRadio1"
                                >Assisstance / Supervision</label
                              >
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio2"
                                value="clinical-work"
                                v-model="category_services"
                              />
                              <label class="form-check-label" for="inlineRadio2"
                                >Clinical Work / Procedure
                              </label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio3"
                                value="external"
                                v-model="category_services"
                              />
                              <label class="form-check-label" for="inlineRadio3"
                                >External</label
                              >
                            </div>
                          </div>
                        </div>
                        <!-- close-row -->
                        <!-- hide-div -->
                        <div class="assisstance services hide mb-3">
                          <div class="row">
                            <div class="col-md-6 mb-3">
                              <label class="form-label">Services</label>
                              <select class="form-select" v-model="services_id">
                                 <option value="0">Select Service</option>
                      <option
                        v-for="slt in servicelist"
                        v-bind:key="slt.id"
                        v-bind:value="slt.id"
                      >
                        {{ slt.service_name }}
                      </option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <!-- 01 -->
                        <div class="clinical-work services hide mb-3">
                          <div class="row">
                            <div class="col-md-6 mb-3">
                              <label class="form-label">ICD 9 CODE</label>
                              <select class="form-select" v-model="code_id"  @change="onCategorycodebind($event)">
                                <option value="0">Select code</option>
                                <option v-for="type in codelist"  v-bind:key="type.id" v-bind:value="type.id">
              {{ type.icd_type_name }}
            </option>
                              </select>
                            </div>
                            <div class="col-md-6 mb-3">
                              <label class="form-label">ICD 9 SUB CODE</label>
                              <select class="form-select" v-model="sub_code_id">
                                <option value="0">Select sub code</option>
                                <option
              v-for="catcode in icdcatcodelist"
              v-bind:key="catcode.id"
              v-bind:value="catcode.id"
            >
              {{ catcode.icd_category_code }}
            </option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <!-- 02 -->
                        <div class="external services hide mb-3">
                          <div class="row">
                            <div class="col-md-6 mb-3">
                              <label class="form-label">Services</label>
                              <select class="form-select" v-model="serviceid">
                                <option value="0">Select Service</option>
                      <option
                        v-for="slt in servicelist"
                        v-bind:key="slt.id"
                        v-bind:value="slt.id"
                      >
                        {{ slt.service_name }}
                      </option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <!-- 03 -->
                        <!-- hide-div -->
                        <div class="row">
                          <div class="col-md-6 mb-3">
                            <label class="form-label"
                              >Complexity Of Service</label
                            >
                            <select
                              class="form-select"
                              v-model="complexity_services"
                            >
                              <option value="0">
                                Select Complexity Of Service
                              </option>
                      <option
                        v-for="cm in comlexcitylist"
                        v-bind:key="cm.id"
                        v-bind:value="cm.id"
                      >
                        {{ cm.section_value }}
                      </option>
                            </select>
                          </div>
                          <div class="col-md-6 mb-3">
                            <label class="form-label">Outcome</label>
                            <select class="form-select" v-model="outcome">
                              <option value="0">Select outcome</option>
                      <option
                        v-for="out in outcomelist"
                        v-bind:key="out.id"
                        v-bind:value="out.id"
                      >
                        {{ out.section_value }}
                      </option>
                            </select>
                          </div>
                        </div>
                        <!-- close-row -->
                      </div>
                    </div>
                  </div>
                  <!--  -->
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        MEDICATION
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <div class="col-md-12 mb-3">
                          <label class="form-label">Medication</label>
                          <textarea
                            class="form-control textarea"
                            placeholder="Please Type Prescription Here"
                            v-model="medication_des"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--  -->
                </div>
 <p v-if="errorList.length">
                          <ul>
                           <li style="color:red"  v-for='err in errorList' :key='err' >
                           {{ err }}
                             </li>
                        </ul>
                       </p>
                <div class="d-flex">
                  <button
                    type="submit"
                    class="btn btn-warning btn-text ml-auto"
                  >
                    <i class="far fa-save"></i> Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import PatientLoginSidebar from "../../../components/Patient/PatientLoginSidebar.vue";
import PatientLoginHeader from "../../../components/Patient/PatientLogin_Header.vue";
import Physectristdetails from "../../../components/Patient/physectristdetails.vue";
export default {
  components: { PatientLoginSidebar, PatientLoginHeader, Physectristdetails },
  name: "progress-note",
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    $(document).ready(function () {
      $('.form-accordion input[type="radio"]').click(function () {
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $(".services").not(targetBox).hide();
        $(targetBox).show();
      });
    });
    let urlParams = new URLSearchParams(window.location.search);
    this.Id = urlParams.get("id");
    this.GetList();
  },
  data() {
    return {
      userdetails: null,
      errorList: [],
      servicelist: [],
      outcomelist: [],
      comlexcitylist: [],
      codelist: [],
      icdcatcodelist: [],
      Id: 0,
      diagnosis: "",
      reason_for_referral: "",
      summary: "",
      management: "",
      medication: "",
      name: "",
      designation: "",
      hospital: "",
      location_services: "",
      type_diagnosis_id: 0,
      category_services: "",
      code_id: 0,
      sub_code_id: 0,
      complexity_services: 0,
      outcome: 0,
      medication_des: "",
      patient_mrn_id: "",
      services_id: 0,
      serviceid: 0,
      validate: true,
    };
  },
  methods: {
    async Onphychiatryclerkingnote() {
      this.errorList = [];
      try {
        if (!this.diagnosis) {
          this.errorList.push("Diagnosis is required");
        }
        if (!this.reason_for_referral) {
          this.errorList.push("Reason For Referral is required");
        }
        if (!this.summary) {
          this.errorList.push("Summary is required");
        }
        if (!this.management) {
          this.errorList.push("Management is required");
        }
        if (!this.medication) {
          this.errorList.push("Medication is required");
        }
        if (!this.name) {
          this.errorList.push("Name is required");
        }
        if (!this.designation) {
          this.errorList.push("Designation is required");
        }
        if (!this.hospital) {
          this.errorList.push("Hospital is required");
        }
        if (!this.location_services) {
          this.errorList.push("Location Of Services is required");
        }
        if (!this.type_diagnosis_id) {
          this.errorList.push("Type Of Diagnosis is required");
        }
        if (!this.category_services) {
          this.errorList.push("Category Of Services is required");
        }
        if (!this.complexity_services) {
          this.errorList.push("Complexity Of Service is required");
        }
        if (this.category_services) {
          if (this.category_services == "assisstance") {
            if (!this.services_id) {
              this.errorList.push("Service is required");
              this.validate = false;
            }
          } else if (this.category_services == "clinical-work") {
            if (!this.code_id) {
              this.errorList.push("ICD 9 CODE is required");
              this.validate = false;
            }
            if (!this.sub_code_id) {
              this.errorList.push("ICD 9 SUB CODE is required");
              this.validate = false;
            }
          } else {
            if (!this.serviceid) {
              this.errorList.push("Services is required");
              this.validate = false;
            } else {
              this.services_id = this.serviceid;
            }
          }
        }
        if (!this.outcome) {
          this.errorList.push("Outcome is required");
        }
        if (!this.medication_des) {
          this.errorList.push("Medication is required");
        }
        if (
          this.diagnosis &&
          this.reason_for_referral &&
          this.summary &&
          this.management &&
          this.medication &&
          this.name &&
          this.designation &&
          this.hospital &&
          this.location_services &&
          this.type_diagnosis_id &&
          this.category_services &&
          this.complexity_services &&
          this.outcome &&
          this.medication_des &&
          this.validate
        ) {
          this.loader = true;
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          const response = await this.$axios.post(
            "internal-referral/add",
            {
              added_by: this.userdetails.user.id.toString(),
              patient_mrn_id: this.Id,
              diagnosis: this.diagnosis,
              reason_for_referral: this.reason_for_referral,
              summary: this.summary,
              management: this.management,
              medication: this.medication,
              name: this.name,
              designation: this.designation,
              hospital: this.hospital,
              location_services: this.location_services,
              services_id: this.services_id,
              code_id: this.code_id,
              sub_code_id: this.sub_code_id,
              type_diagnosis_id: this.type_diagnosis_id,
              category_services: this.category_services,
              complexity_services: this.complexity_services,
              outcome: this.outcome,
              medication_des: this.medication_des,
            },
            { headers }
          );
          console.log("response", response.data);
          if (response.data.code == 200) {
            this.loader = false;
            this.resetmodel();
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
      } catch (e) {}
    },
    async GetList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get(
        "general-setting/list?section=" + "complexity-of-service",
        { headers }
      );
      if (response.data.code == 200 || response.data.code == "200") {
        this.comlexcitylist = response.data.list;
      } else {
        this.comlexcitylist = [];
      }
      const response1 = await this.$axios.get("service/list", { headers });
      if (response1.data.code == 200 || response1.data.code == "200") {
        this.servicelist = response1.data.list;
      } else {
        this.servicelist = [];
      }
      const response2 = await this.$axios.get(
        "general-setting/list?section=" + "outcome",
        { headers }
      );
      if (response2.data.code == 200 || response2.data.code == "200") {
        this.outcomelist = response2.data.list;
      } else {
        this.outcomelist = [];
      }
      const response3 = await this.$axios.get(
        "icd-setting/icdtype/getIcdTypeCodeList",
        {
          headers,
        }
      );
      if (response3.data.code == 200 || response3.data.code == "200") {
        this.codelist = response3.data.list;
      } else {
        this.codelist = [];
      }
    },
    async onCategorycodebind(event) {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "icd-setting/getIcdTypeWiseCategoryCodeList/" + event.target.value,
        { headers }
      );
      if (response.data.code == 200 || response.data.code == "200") {
        this.icdcatcodelist = response.data.list;
      } else {
        this.icdcatcodelist = [];
      }
    },
    resetmodel() {
      this.diagnosis = "";
      this.diagnosis = "";
      this.reason_for_referral = "";
      this.summary = "";
      this.management = "";
      this.medication = "";
      this.name = "";
      this.designation = "";
      this.hospital = "";
      this.location_services = 0;
      this.type_diagnosis_id = 0;
      this.category_services = "";
      this.code_id = 0;
      this.sub_code_id = 0;
      this.complexity_services = 0;
      this.outcome = 0;
      this.medication_des = "";
      this.services_id = 0;
    },
  },
};
</script>
<style scoped>
.hide {
  display: none;
}
</style>