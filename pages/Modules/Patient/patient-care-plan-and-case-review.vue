<template>
  <div id="layoutSidenav">
    <CommonHeader />
    <div id="layoutSidenav_content">
      <CommonSidebar />
       <!-- <Loader v-if="loader"/> -->
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>Patient Care Plan And Case Review</h1>
          </div>
          <div class="card mb-4">
            <div class="form-heading mb-2">Patient Care Plan</div>
            <div class="card-body">
              <form method="post" @submit.prevent="OnSubmit">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Name</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="details.patient_name"
                        readonly
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">NRIC</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="details.nric"
                        readonly
                      />
                    </div>
                  </div>
                </div>
                <!-- close-row -->

                <div class="row">
                  <div class="col-sm-4">
                    <div class="mb-3">
                      <label class="form-label">Age</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="details.age"
                        readonly
                      />
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="mb-3">
                      <label class="form-label">Date Of Birth</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="details.birth_date"
                        readonly
                      />
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="mb-3">
                      <label class="form-label">Gender</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="details.gender"
                        readonly
                      />
                    </div>
                  </div>
                </div>
                <!-- close-row -->

                <hr />

                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Date</label>
                      <input
                        type="date"
                        class="form-control"
                        v-model="plan_date"
                      />
                    </div>
                  </div>
                </div>
                <!-- close-row -->

                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Reason for Review </label>
                      <textarea
                        class="form-control textarea"
                        v-model="reason_of_review"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Diagnosis </label>
                      <textarea
                        class="form-control textarea"
                        v-model="diagnosis"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <!-- close-row -->

                <div class="row">
                  <label class="form-label">Medication </label>
                  <div class="col-sm-4">
                    <div class="mb-4">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="Oral" v-model="oral"
                      />
                      <label class="form-label" for="Oral">Oral</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Please specify"
                        v-model="medication_oral"
                      />
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="mb-3">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="Depot" v-model="depot"
                      />
                      <label class="form-label" for="Depot">Depot</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Please specify"
                        v-model="medication_depot"
                      />
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="mb-3">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="IM" v-model="im"
                      />
                      <label class="form-label" for="IM">IM</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Please specify"
                        v-model="medication_im"
                      />
                    </div>
                  </div>
                </div>
                <!-- close-row -->

                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Background History </label>
                      <textarea
                        class="form-control textarea"
                        v-model="background_history"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Doctor of Staff Incharge</label>
                      <textarea
                        class="form-control textarea"
                        v-model="staff_incharge_dr"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <!-- close-row -->

                <div class="form-heading mt-3">Treatment Plan</div>

                <table class="job-search-table">
                  <thead>
                    <tr>
                      <!-- <th>No</th> -->
                      <th>Issues/Current Status</th>
                      <th>Goal(s)</th>
                      <th>Management Strategies</th>
                      <th>Who,By When</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <!-- <td>-</td> -->
                      <td><input type="text" v-model="Issues" placeholder="Issues/Current Status"/></td>
                      <td><input type="text" v-model="Goal" placeholder="Goal(s)"/></td>
                      <td><input type="text" v-model="Management" placeholder="Management Strategies"/></td>
                      <td><input type="text" v-model="Who" placeholder="Who,By When"/></td>
                      <td>
                        <a href="#" class="add-row"
                          ><i class="far fa-plus"></i
                        ></a>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Date of next Review</label>
                      <input
                        type="date"
                        class="form-control"
                        name=""
                        v-model="next_review_date"
                      />
                    </div>
                  </div>
                </div>
                <!-- close-row -->

                <div class="row mt-3">
                  <div class="col-sm-6">
                    <label class="form-label">Case Manager</label>
                    <div class="mb-3">
                      <label class="form-label">Name</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="case_manager_name"
                      />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Designation</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="case_manager_designation"
                      />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Date</label>
                      <input
                        type="date"
                        class="form-control"
                        v-model="case_manager_date"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <label class="form-label">Specialist Incharge</label>
                    <div class="mb-3">
                      <label class="form-label">Name</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="specialist_incharge_name"
                      />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Designation</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="specialist_incharge_designation"
                      />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Date</label>
                      <input
                        type="date"
                        class="form-control"
                        v-model="specialist_incharge_date"
                      />
                    </div>
                  </div>
                </div>
                <!-- close-row -->

                <div
                  class="accordion form-accordion form-custum-labal"
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
                             <option
              v-for="loc in locationlist"
              v-bind:key="loc.id"
              v-bind:value="loc.id"
            >
              {{ loc.section_value }}
            </option>
                            </select>
                          </div>
                        </div>
                        <!-- close-row -->
                        <div class="row mb-3">
                          <label class="col-sm-4 col-form-label"
                            >Type Of Diagnosis</label
                          >
                          <div class="col-sm-8">
                            <select class="form-select" v-model="type_diagnosis_id">
                                <option value="0">Select Diagnosis</option>
                                <option
              v-for="catcode in diagonisislist"
              v-bind:key="catcode.id"
              v-bind:value="catcode.id"
            >
              {{ catcode.icd_category_code }} {{catcode.icd_category_name}}
            </option>
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
                        v-for="slt in assistancelist"
                        v-bind:key="slt.id"
                        v-bind:value="slt.id"
                      >
                        {{ slt.section_value }}
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
             {{ type.icd_category_code }} {{type.icd_category_name}}
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
               {{ catcode.icd_code }}
 {{catcode.icd_name}}
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
                        v-for="slt in externallist"
                        v-bind:key="slt.id"
                        v-bind:value="slt.id"
                      >
                        {{ slt.section_value }}
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
                            v-model="medication_prescription"
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
                  <a
                      @click="GoBack"
                      class="btn btn-primary btn-text"
                      ><i class="far fa-arrow-alt-to-left"></i> Back</a
                    >
                  <button class="btn btn-warning btn-text ml-auto">
                    <i class="far fa-save"></i> Save
                  </button>
                </div>
              </form>
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
import CommonHeader from '../../../components/CommonHeader.vue';
import CommonSidebar from '../../../components/CommonSidebar.vue';
export default {
  components: { CommonSidebar, CommonHeader },
  name: "cps-referral-form",
  data() {
    return {
      loader: false,
      userdetails: null,
      Id: 0,
      errorList: [],
      servicelist: [],
      outcomelist: [],
      comlexcitylist: [],
      codelist: [],
      icdcatcodelist: [],
      diagonisislist: [],
      locationlist: [],
      details: {},
      plan_date: "",
      reason_of_review: "",
      diagnosis: "",
      medication_oral: "",
      medication_depot: "",
      medication_im: "",
      background_history: "",
      staff_incharge_dr: "",
      treatment_plan: "",
      next_review_date: "",
      case_manager_date: "",
      case_manager_name: "",
      case_manager_designation: "",
      specialist_incharge_date: "",
      specialist_incharge_name: "",
      specialist_incharge_designation: "",
      location_services_id: 0,
      type_diagnosis_id: 0,
      category_services: 0,
      code_id: 0,
      sub_code_id: 0,
      complexity_services_id: 0,
      outcome_id: 0,
      medication_prescription: "",
      patient_mrn_id: "",
      services_id: 0,
      serviceid: 0,
      validate: true,
      Issues: "",
      Goal: "",
      Management: "",
      Who: "",
      oral: false,
      depot: false,
      im: false,
      assistancelist: [],
      externallist: [],
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    let urlParams = new URLSearchParams(window.location.search);
    this.Id = urlParams.get("id");
    if (this.Id) {
      this.GetPatientdetails();
      this.GetList();
    }
    $(document).ready(function () {
      $('.form-accordion input[type="radio"]').click(function () {
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $(".services").not(targetBox).hide();
        $(targetBox).show();
      });
    });
  },
  methods: {
    async GetPatientdetails() {
      this.loader = true;
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "patient/detail",
        {
          patient_id: this.Id,
        },
        { headers }
      );
      console.log("my log", response.data);
      if (response.data.code == 200) {
        this.loader = false;
        this.details = response.data.details;
        console.log("my profile", this.details);
      } else {
        this.loader = false;
        window.alert("Something went wrong");
      }
    },
    async onCategorycodebind(event) {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      console.log("my id", event);
      const response = await this.$axios.post(
        "diagnosis/getIcd9subcodeList",
        { icd_category_code: event.target.value },
        { headers }
      );
      if (response.data.code == 200 || response.data.code == "200") {
        this.icdcatcodelist = response.data.list;
      } else {
        this.icdcatcodelist = [];
      }
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
      const response3 = await this.$axios.get("diagnosis/getIcd9codeList", {
        headers,
      });
      if (response3.data.code == 200 || response3.data.code == "200") {
        this.codelist = response3.data.list;
      } else {
        this.codelist = [];
      }
      const response4 = await this.$axios.get("diagnosis/getIcd10codeList", {
        headers,
      });
      if (response4.data.code == 200 || response4.data.code == "200") {
        this.diagonisislist = response4.data.list;
      } else {
        this.diagonisislist = [];
      }
      const response5 = await this.$axios.get(
        "general-setting/list?section=" + "location-of-services",
        {
          headers,
        }
      );
      if (response5.data.code == 200 || response5.data.code == "200") {
        this.locationlist = response5.data.list;
      } else {
        this.locationlist = [];
      }
      const respons = await this.$axios.get(
        "general-setting/list?section=" + "assistance-or-supervision",
        { headers }
      );
      if (respons.data.code == 200 || respons.data.code == "200") {
        this.assistancelist = respons.data.list;
      } else {
        this.assistancelist = [];
      }
      const respon = await this.$axios.get(
        "general-setting/list?section=" + "external",
        { headers }
      );
      if (respon.data.code == 200 || respon.data.code == "200") {
        this.externallist = respon.data.list;
      } else {
        this.externallist = [];
      }
    },
    async OnSubmit() {
      this.errorList = [];
      this.validate = true;
      try {
        if (!this.plan_date) {
          this.errorList.push("Date is required");
          this.validate = false;
        }
        if (!this.reason_of_review) {
          this.errorList.push("Reason for Review is required");
          this.validate = false;
        }
        if (!this.diagnosis) {
          this.errorList.push("Diagnosis is required");
          this.validate = false;
        }
        if (!this.oral) {
          this.errorList.push("Please check Oral");
          this.validate = false;
        }
        if (!this.medication_oral) {
          this.errorList.push("Oral Description is required");
          this.validate = false;
        }
        if (!this.depot) {
          this.errorList.push("Please check Depot");
          this.validate = false;
        }
        if (!this.medication_depot) {
          this.errorList.push("Depot Description is required");
          this.validate = false;
        }
        if (!this.im) {
          this.errorList.push("Please check IM");
          this.validate = false;
        }
        if (!this.medication_im) {
          this.errorList.push("IM Description is required");
          this.validate = false;
        }

        if (!this.background_history) {
          this.errorList.push("Background History is required");
          this.validate = false;
        }
        if (!this.staff_incharge_dr) {
          this.errorList.push("Doctor of Staff Incharge is required");
          this.validate = false;
        }

        if (!this.next_review_date) {
          this.errorList.push("Date of next Review is required");
          this.validate = false;
        }
        if (!this.case_manager_name) {
          this.errorList.push("Case Manager Name is required");
          this.validate = false;
        }
        if (!this.case_manager_designation) {
          this.errorList.push("Case Manager Designation is required");
          this.validate = false;
        }
        if (!this.case_manager_date) {
          this.errorList.push("Case Manager Date is required");
          this.validate = false;
        }
        if (!this.specialist_incharge_name) {
          this.errorList.push("Specialist Incharge Name is required");
          this.validate = false;
        }
        if (!this.specialist_incharge_designation) {
          this.errorList.push("Specialist Incharge Designation is required");
          this.validate = false;
        }
        if (!this.specialist_incharge_date) {
          this.errorList.push("Specialist Incharge Date is required");
          this.validate = false;
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
        if (!this.medication_prescription) {
          this.errorList.push("Medication is required");
          this.validate = false;
        }
        if (
          this.location_services_id &&
          this.type_diagnosis_id &&
          this.category_services &&
          this.complexity_services_id &&
          this.outcome_id &&
          this.validate
        ) {
          this.loader = true;
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          const response = await this.$axios.post(
            "intervention/patient-care-plan",
            {
              added_by: this.userdetails.user.id,
              patient_id: this.Id,
              plan_date: this.plan_date,
              reason_of_review: this.reason_of_review,
              diagnosis: this.diagnosis,
              medication_oral: this.medication_oral,
              medication_depot: this.medication_depot,
              medication_im: this.medication_im,
              background_history: this.background_history,
              staff_incharge_dr: this.staff_incharge_dr,
              treatment_plan: this.treatment_plan,
              next_review_date: this.next_review_date,
              case_manager_date: this.case_manager_date,
              case_manager_name: this.case_manager_name,
              case_manager_designation: this.case_manager_designation,
              specialist_incharge_date: this.specialist_incharge_date,
              specialist_incharge_name: this.specialist_incharge_name,
              specialist_incharge_designation:
                this.specialist_incharge_designation,
              location_of_service: this.location_services_id,
              type_of_diagnosis: this.type_diagnosis_id,
              category_of_services: this.category_services,
              services: this.services_id,
              complexity_of_services: this.complexity_services_id,
              outcome: this.outcome_id,
              icd_9_code: this.code_id,
              icd_9_subcode: this.sub_code_id,
              medication_prescription: this.medication_prescription,
              treatment_plan: JSON.stringify([
                {
                  Issues: this.Issues,
                  Goal: this.Goal,
                  Management: this.Management,
                  Who: this.Who,
                },
              ]),
            },
            { headers }
          );
          console.log("response", response.data);
          if (response.data.code == 200) {
            this.loader = false;
            this.ResetModel();
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
    ResetModel() {
      this.plan_date = "";
      this.reason_of_review = "";
      this.diagnosis = "";
      this.medication_oral = "";
      this.medication_depot = "";
      this.medication_im = "";
      this.background_history = "";
      this.staff_incharge_dr = "";
      this.treatment_plan = "";
      this.next_review_date = "";
      this.case_manager_date = "";
      this.case_manager_name = "";
      this.case_manager_designation = "";
      this.specialist_incharge_date = "";
      this.specialist_incharge_name = "";
      this.specialist_incharge_designation = "";
      this.location_services_id = 0;
      this.type_diagnosis_id = 0;
      this.category_services = 0;
      this.code_id = 0;
      this.sub_code_id = 0;
      this.complexity_services_id = 0;
      this.outcome_id = 0;
      this.medication_prescription = "";
      this.patient_mrn_id = "";
      this.services_id = 0;
      this.serviceid = 0;
      this.validate = true;
      this.Issues = "";
      this.Goal = "";
      this.Management = "";
      this.Who = "";
      this.oral = false;
      this.depot = false;
      this.im = false;
    },
    GoBack(){
      this.$router.push({
              path: "/Modules/Intervention/patient-summary",
              query: { id: this.Id },
            });
    }
  },
};
</script>
<style scoped>
.hide {
  display: none;
}
</style>
