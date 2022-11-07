<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>Job Start Report</h1>
            <!-- <a href="#"><i class="fal fa-plus"></i> Add</a> -->
          </div>

          <div class="card mb-4">
            <div class="card-body">
              <form method="post" @submit.prevent="OnSubmit">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Client</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="client"
                      />
                    </div>
                  </div>
                </div>
                <!-- close-row -->

                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Employment Specialist </label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="employment_specialist"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Case Manager</label>
                      <select
                        class="form-select"
                        v-model="case_manager"
                      >
                        <option value="0">
                          Select Case Manager
                        </option>
                        <option
                          v-for="cm in casemanagerlist"
                          v-bind:key="cm.id"
                          v-bind:value="cm.id"
                        >
                          {{ cm.name }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <!-- close-row -->

                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">First Date Of Work </label>
                      <input
                        type="date"
                        class="form-control"
                        v-model="first_date_of_work"
                      />
                    </div>
                  </div>
                </div>
                <!-- close-row -->

                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Job Title</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="job_title"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Duties Field </label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="duties_field"
                      />
                    </div>
                  </div>
                </div>
                <!-- close-row -->

                <div class="row">
                  <div class="col-sm-4">
                    <div class="mb-3">
                      <label class="form-label">Rate Of Pay </label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="rate_of_pay"
                      />
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="mb-3">
                      <label class="form-label">Benefits Field</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="benefits_field"
                      />
                    </div>
                  </div>

                  <div class="col-sm-4">
                    <div class="mb-3">
                      <label class="form-label">Work Schedule</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="work_schedule"
                      />
                    </div>
                  </div>
                </div>
                <!-- close-row -->
                <div v-if=" this.type == 'view' ">
                <div class="row mb-3">
                  <label class="form-label">Disclosure</label>
                  <div class="col-sm-6">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio11"
                        value="Yes"
                        v-model="disclosure"
                        checked
                      />
                      <label class="form-check-label" for="inlineRadio11"
                        >Yes - worker has agreed to employer contact and has
                        signed a release</label
                      >
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio22"
                        value="No"
                        v-model="disclosure"
                      />
                      <label class="form-check-label" for="inlineRadio22"
                        >No - worker does not want employer contact
                      </label>
                    </div>
                  </div>
                </div>
                </div>
                <div class="row mb-3" v-if="this.type != 'view'">
                  <label class="form-label">Disclosure</label>
                  <div class="col-sm-6">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio11"
                        value="Yes"
                        v-model="disclosure"
                      />
                      <label class="form-check-label" for="inlineRadio11"
                        >Yes - worker has agreed to employer contact and has
                        signed a release</label
                      >
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio22"
                        value="No"
                        v-model="disclosure"
                      />
                      <label class="form-check-label" for="inlineRadio22"
                        >No - worker does not want employer contact
                      </label>
                    </div>
                  </div>
                </div>
                <!-- close-row -->

                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Name of Employer </label>
                      <select
                        class="form-select"
                        v-model="name_of_employer"
                        @change="getAddress($event)"
                      >
                        <option value="0">
                          Select Case Manager
                        </option>
                        <option
                          v-for="emp in employerlist"
                          v-bind:key="emp.id"
                          v-bind:value="emp.id"
                        >
                          {{ emp.contact_name }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Name of Supervisor </label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="name_of_superviser"
                      />
                    </div>
                  </div>
                </div>
                <!-- close-row -->
                <div class="row">
                  <div class="col-sm-12">
                    <div class="mb-3">
                      <label class="form-label">Address </label>
                      <textarea
                        class="form-control textarea"
                        v-model="address"
                        disabled
                      ></textarea>
                    </div>
                  </div>
                </div>
                <!-- close-row -->

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
                            <select
                              class="form-select"
                              v-model="type_diagnosis_id"
                            >
                              <option value="0">Select Diagnosis</option>
                              <option
                                v-for="catcode in diagonisislist"
                                v-bind:key="catcode.id"
                                v-bind:value="catcode.id"
                              >
                              {{ catcode.icd_code }} {{catcode.icd_name}}
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
                              <select
                                class="form-select"
                                v-model="code_id"
                                @change="onCategorycodebind($event)"
                              >
                                <option value="0">Select code</option>
                                <option
                                  v-for="type in codelist"
                                  v-bind:key="type.id"
                                  v-bind:value="type.id"
                                >
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
                <div class="d-flex" v-if="!pid">
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
import CommonHeader from "../../../components/CommonHeader.vue";
import CommonSidebar from "../../../components/CommonSidebar.vue";
export default {
  components: { CommonSidebar, CommonHeader },
  name: "job-start-report",
  data() {
    return {
      userdetails: null,
      errorList: [],
      servicelist: [],
      outcomelist: [],
      comlexcitylist: [],
      codelist: [],
      icdcatcodelist: [],
      diagonisislist: [],
      locationlist: [],
      titlelist: [],
      casemanagerlist: [],
      employerlist:[],
      Id: 0,
      client: "",
      employment_specialist: "",
      case_manager: "",
      first_date_of_work: "",
      job_title: "",
      duties_field: "",
      rate_of_pay: "",
      benefits_field: "",
      work_schedule: "",
      disclosure: "",
      name_of_employer: "",
      name_of_superviser: "",
      address: "-",
      location_services_id: 0,
      type_diagnosis_id: 0,
      category_services: "",
      code_id: 0,
      sub_code_id: 0,
      complexity_services_id: 0,
      outcome_id: 0,
      medication_des: "",
      services_id: 0,
      serviceid: 0,
      validate: true,
      assistancelist: [],
      externallist: [],
    };
  },
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
    if(this.Id){
this.GetPatientdetails();
    }

    this.GetList();
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
        "patient-registration/getPatientRegistrationById",
        {
          id: this.Id,
        },
        { headers }
      );
      if (response.data.code == 200) {
        this.client = response.data.list[0].name_asin_nric;
      } else {
        window.alert("Something went wrong");
      }
    },
    async getAddress(event){
        const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get(
        "job-companies/getListById?id="+this.name_of_employer,
        { headers }
      );
      if (response.data.code == 200 || response.data.code == "200") {
        this.address = JSON.stringify(response.data.list[0].company_address_1+response.data.list[0].company_address_2+response.data.list[0].company_address_3+","+response.data.list[0].postcode);
      } else {
        window.alert("Something went wrong");
      }
    },
    async OnSubmit() {
      this.validate = true;
      this.errorList = [];
      try {
        if (!this.client) {
          this.errorList.push("Client is required");
        }
        if (!this.employment_specialist) {
          this.errorList.push("Employment Specialist is required");
        }
        if (!this.case_manager) {
          this.errorList.push("Case Manager is required");
        }
        if (!this.first_date_of_work) {
          this.errorList.push("First Date Of Work is required");
        }
        if (!this.job_title) {
          this.errorList.push("Job Title is required");
        }
        if (!this.duties_field) {
          this.errorList.push("Duties Field is required");
        }
        if (!this.rate_of_pay) {
          this.errorList.push("Rate Of Pay is required");
        }
        if (!this.benefits_field) {
          this.errorList.push("Benefits Field is required");
        }
        if (!this.work_schedule) {
          this.errorList.push("Work Schedule is required");
        }
        if (!this.disclosure) {
          this.errorList.push("Disclosure is required");
        }
        if (!this.name_of_employer) {
          this.errorList.push("Name of Employer is required");
        }
        if (!this.name_of_superviser) {
          this.errorList.push("Name of Superviser is required");
        }
        if (!this.address) {
          this.errorList.push("Address is required");
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
        // if (!this.medication_des) {
        //   this.errorList.push("Medication is required");
        // }
        if (
          this.client &&
          this.employment_specialist &&
          this.case_manager &&
          this.first_date_of_work &&
          this.job_title &&
          this.duties_field &&
          this.rate_of_pay &&
          this.benefits_field &&
          this.work_schedule &&
          this.disclosure &&
          this.name_of_employer &&
          this.name_of_superviser &&
          this.address &&
          this.location_services_id &&
          this.type_diagnosis_id &&
          this.category_services &&
          this.complexity_services_id &&
          this.outcome_id &&
          // this.medication_des &&
          this.validate
        ) {
          this.loader = true;
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          const response = await this.$axios.post(
            "intervention/job-start-form",
            {
              added_by: this.userdetails.user.id,
              patient_id: this.Id,
              client: this.client,
              employment_specialist: this.employment_specialist,
              case_manager: this.case_manager,
              first_date_of_work: this.first_date_of_work,
              job_title: this.job_title,
              duties_field: this.duties_field,
              rate_of_pay: this.rate_of_pay,
              benefits_field: this.benefits_field,
              work_schedule: this.work_schedule,
              disclosure: this.disclosure,
              name_of_employer: this.name_of_employer,
              name_of_superviser: this.name_of_superviser,
              address: this.address,
              location_of_service: this.location_services_id,
              type_of_diagnosis: this.type_diagnosis_id,
              category_of_services: this.category_services,
              services: this.services_id,
              icd_9_code: this.code_id,
              icd_9_subcode: this.sub_code_id,
              complexity_of_services: this.complexity_services_id,
              outcome: this.outcome_id,
              medication_prescription: this.medication_des,
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
      const response6 = await this.$axios.get(
        "intervention/job-start-form-list",
        {
          headers,
        }
      );
      if (response6.data.code == 200 || response6.data.code == "200") {
        this.titlelist = response6.data.list;
      } else {
        this.titlelist = [];
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
      const response7 = await this.$axios.get(
        "staff-management/getListByBranchId/"+ this.userdetails.branch.branch_id, {
        headers,
      });
      this.casemanagerlist = response7.data.list;
      const response8 = await this.$axios.get(
        "job-companies/list", {
        headers,
      });
      this.employerlist = response8.data.list;
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
    resetmodel() {
      this.added_by = "";
      this.patient_id = "";
      this.client = "";
      this.employment_specialist = "";
      this.case_manager = "";
      this.first_date_of_work = "";
      this.job_title = "";
      this.duties_field = "";
      this.rate_of_pay = "";
      this.benefits_field = "";
      this.work_schedule = "";
      this.disclosure = "";
      this.name_of_employer = "";
      this.name_of_superviser = "";
      this.address = "";
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
          type: "JobStartReport",
        },
        { headers }
      );
      if (response.data.code == 200) {
        // window.alert(response.data.Data[0].patient_mrn_id);

        this.Id = response.data.Data[0].patient_mrn_id;

        this.client = response.data.Data[0].client;
        this.employment_specialist =
          response.data.Data[0].employment_specialist;
        this.case_manager = response.data.Data[0].case_manager;
        this.first_date_of_work = response.data.Data[0].first_date_of_work;
        this.job_title = response.data.Data[0].job_title;
        this.duties_field = response.data.Data[0].duties_field;
        this.rate_of_pay = response.data.Data[0].rate_of_pay;
        this.benefits_field = response.data.Data[0].benefits_field;
        this.work_schedule = response.data.Data[0].work_schedule;
        this.disclosure = response.data.Data[0].disclosure;
        this.name_of_employer = response.data.Data[0].name_of_employer;
        this.name_of_superviser = response.data.Data[0].name_of_superviser;
        this.address = response.data.Data[0].address;
        this.location_services_id = response.data.Data[0].location_of_service;
        this.type_diagnosis_id = response.data.Data[0].type_of_diagnosis;
        this.category_services = response.data.Data[0].category_of_services;
        this.services_id = response.data.Data[0].services;
        this.code_id = response.data.Data[0].icd_9_code;
        this.sub_code_id = response.data.Data[0].icd_9_subcode;
        this.complexity_services_id =
          response.data.Data[0].complexity_of_services;
        this.outcome_id = response.data.Data[0].outcome;
        this.medication_des = response.data.Data[0].medication_prescription;
        this.GetList();
        this.GetPatientdetails();
        const response2 = await this.$axios.post(
          "diagnosis/getIcd9subcodeList",
          { icd_category_code: this.code_id },
          { headers }
        );
        if (response2.data.code == 200 || response2.data.code == "200") {
          this.icdcatcodelist = response2.data.list;
        } else {
          this.icdcatcodelist = [];
        }
      } else {
        window.alert("Something went wrong");
      }
    },
  },
};
</script>
