<template>
  <div id="layoutSidenav">
    <PatientLoginSidebar />
    <div id="layoutSidenav_content">
      <PatientLoginHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>Psychiatry Clerking Notes</h1>
            <!-- <a href="#"><i class="fal fa-plus"></i> Add</a> -->
          </div>
          <div class="card mb-4">
            <div class="card-body">
              <form method="post" @submit.prevent="Onphychiatryclerkingnote">
                <Physectristdetails />

                <table class="notes">
                  <thead>
                    <tr>
                      <th colspan="2">Consultation Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Chief Complaint:</th>
                      <td>
                        <textarea
                          class="form-control textarea mt-3"
                          rows="2"
                          placeholder="Enter Description"
                          v-model="chief_complain"
                        ></textarea>
                      </td>
                    </tr>
                    <tr>
                      <th>History Of Presenting Illness:</th>
                      <td>
                        <textarea
                          class="form-control textarea"
                          rows="2"
                          placeholder="Enter Description"
                          v-model="presenting_illness"
                        ></textarea>
                      </td>
                    </tr>
                    <tr>
                      <th>Background History:</th>
                      <td>
                        <textarea
                          class="form-control textarea"
                          rows="2"
                          placeholder="Enter Description"
                          v-model="background_history"
                        ></textarea>
                      </td>
                    </tr>
                    <tr>
                      <th>General Examination:</th>
                      <td>
                        <textarea
                          class="form-control textarea"
                          rows="2"
                          placeholder="Enter Description"
                          v-model="general_examination"
                        ></textarea>
                      </td>
                    </tr>
                    <tr>
                      <th>Mental State Examination:</th>
                      <td>
                        <textarea
                          class="form-control textarea"
                          rows="2"
                          placeholder="Enter Description"
                          v-model="mental_state_examination"
                        ></textarea>
                      </td>
                    </tr>
                    <tr>
                      <th>Diagnosis:</th>
                      <td>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          v-model="diagnosis_id"
                        >
                          <option selected>Select Diagnosis</option>
                          <option value="1">..</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <th>Management:</th>
                      <td>
                        <input
                          type="text"
                          class="form-control max-width"
                          placeholder="Enter Management Details"
                          v-model="management"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Discussed With:</th>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter Psychiatrist Name"
                          v-model="discuss_psychiatrist_name"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Date:</th>
                      <td>
                        <input
                          type="date"
                          class="form-control"
                          placeholder="Enter Date"
                          v-model="date"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Time:</th>
                      <td>
                        <input
                          type="time"
                          class="form-control"
                          placeholder="Enter Time"
                          v-model="time"
                        />
                      </td>
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
                              v-model="location_services_id"
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
                              v-model="complexity_services_id"
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
                            <select class="form-select" v-model="outcome_id">
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
  name: "psychiatry-clerking-note",
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
      chief_complain: "",
      presenting_illness: "",
      background_history: "",
      general_examination: "",
      mental_state_examination: "",
      diagnosis_id: "",
      management: "",
      discuss_psychiatrist_name: "",
      date: "",
      time: "",
      location_services_id: "",
      type_diagnosis_id: 0,
      category_services: "",
      code_id: 0,
      sub_code_id: 0,
      complexity_services_id: 0,
      outcome_id: 0,
      medication_des: "",
      patient_mrn_id: "",
      services_id: 0,
      serviceid: 0,
      validate: true,
    };
  },
  methods: {
    async Onphychiatryclerkingnote() {
      console.log("services", this.category_services);
      this.errorList = [];
      try {
        if (!this.chief_complain) {
          this.errorList.push("Chief Complaint is required");
        }
        if (!this.presenting_illness) {
          this.errorList.push("History Of Presenting Illness is required");
        }
        if (!this.background_history) {
          this.errorList.push("Background History is required");
        }
        if (!this.general_examination) {
          this.errorList.push("General Examination is required");
        }
        if (!this.mental_state_examination) {
          this.errorList.push("Mental State Examination is required");
        }
        if (!this.diagnosis_id) {
          this.errorList.push("Diagnosis is required");
        }
        if (!this.management) {
          this.errorList.push("Management is required");
        }
        if (!this.discuss_psychiatrist_name) {
          this.errorList.push("Discussed With is required");
        }
        if (!this.date) {
          this.errorList.push("Date is required");
        }
        if (!this.time) {
          this.errorList.push("Time is required");
        }
        if (!this.location_services_id) {
          this.errorList.push("Location Of Services is required");
        }
        if (!this.type_diagnosis_id) {
          this.errorList.push("Type Of Diagnosis is required");
        }
        if (!this.category_services) {
          this.errorList.push("Category Of Services is required");
        }
        if (!this.complexity_services_id) {
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
        if (!this.outcome_id) {
          this.errorList.push("Outcome is required");
        }
        if (!this.medication_des) {
          this.errorList.push("Medication is required");
        }
        if (
          this.chief_complain &&
          this.presenting_illness &&
          this.background_history &&
          this.general_examination &&
          this.mental_state_examination &&
          this.diagnosis_id &&
          this.management &&
          this.discuss_psychiatrist_name &&
          this.date &&
          this.time &&
          this.location_services_id &&
          this.type_diagnosis_id &&
          this.category_services &&
          this.complexity_services_id &&
          this.outcome_id &&
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
            "patient-psychiatry-clerkingnote/add",
            {
              added_by: this.userdetails.user.id.toString(),
              chief_complain: this.chief_complain,
              presenting_illness: this.presenting_illness,
              background_history: this.background_history,
              general_examination: this.general_examination,
              mental_state_examination: this.mental_state_examination,
              diagnosis_id: this.diagnosis_id,
              management: this.management,
              discuss_psychiatrist_name: this.discuss_psychiatrist_name,
              date: this.date,
              time: this.time,
              location_services_id: this.location_services_id,
              type_diagnosis_id: this.type_diagnosis_id,
              category_services: this.category_services,
              code_id: this.code_id,
              sub_code_id: this.sub_code_id,
              complexity_services_id: this.complexity_services_id,
              outcome_id: this.outcome_id,
              medication_des: this.medication_des,
              patient_mrn_id: this.Id,
              services_id: this.services_id,
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
      this.chief_complain = "";
      this.presenting_illness = "";
      this.background_history = "";
      this.general_examination = "";
      this.mental_state_examination = "";
      this.diagnosis_id = 0;
      this.management = "";
      this.discuss_psychiatrist_name = "";
      this.date = "";
      this.time = "";
      this.location_services_id = 0;
      this.type_diagnosis_id = 0;
      this.category_services = "";
      this.code_id = 0;
      this.sub_code_id = 0;
      this.complexity_services_id = 0;
      this.outcome_id = 0;
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