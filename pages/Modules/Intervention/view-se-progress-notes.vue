<template>
  <div id="layoutSidenav">
      <CommonSidebar />
      <div id="layoutSidenav_content">
          <CommonHeader />
          <main>
              <div class="container-fluid px-4">
                  <div class="page-title">
                      <h1>SE PROGRESS NOTES</h1>
                      <!-- <a href="#"><i class="fal fa-plus"></i> Add</a> -->
                  </div>
                  <div class="card mb-4">
                      <div class="card-body">
                          <div>
                              <div class="row mb-3">
                                  <label class="col-sm-4 col-form-label">Name<small style="color:red">*</small></label>
                                  <div class="col-sm-8">
                                      <input disabled type="text" class="form-control" v-model="name" />
                                  </div>
                              </div>
                              <!-- close-row -->
                              <div class="row mb-3">
                                  <label class="col-sm-4 col-form-label">MRN<small style="color:red">*</small></label>
                                  <div class="col-sm-8">
                                      <input disabled type="text" class="form-control" v-model="patient_mrn_id" />
                                  </div>
                              </div>
                              <!-- close-row -->
                              <div class="row mb-3">
                                  <label class="col-sm-4 col-form-label">Date<small style="color:red">*</small></label>
                                  <div class="col-sm-8">
                                      <input disabled type="date" class="form-control" v-model="date" />
                                  </div>
                              </div>
                              <!-- close-row -->
                              <div class="row mb-3">
                                  <label class="col-sm-4 col-form-label">Time<small style="color:red">*</small></label>
                                  <div class="col-sm-8">
                                      <input disabled type="time" class="form-control" v-model="time" />
                                  </div>
                              </div>
                              <!-- close-row -->
                              <div class="row mb-3">
                                  <label class="col-sm-4 col-form-label">Staff Name<small style="color:red">*</small></label>
                                  <div class="col-sm-8">
                                      <input disabled type="text" class="form-control" v-model="staff_name" />
                                  </div>
                              </div>
                              <!-- close-row -->
                              <div class="row mb-3">
                                  <label class="col-sm-4 col-form-label">Type of Activities<small style="color:red">*</small></label>
                                  <div class="col-sm-8">
                                      <select disabled class="form-select" v-model="activity_type">
                                          <option value="">Please Select</option>
                                          <option v-for="act in activitylist" v-bind:key="act.id" v-bind:value="act.id">
                                              {{ act.section_value }}
                                          </option>
                                      </select>
                                  </div>
                              </div>
                              <!-- close-row -->
                              <div class="row mb-3">
                                  <label class="col-sm-4 col-form-label">Employment Status<small style="color:red">*</small></label>
                                  <div class="col-sm-8">
                                      <select disabled class="form-select" v-model="employment_status">
                                          <option value="">Please Select</option>
                                          <option v-for="act in employmentlist" v-bind:key="act.id" v-bind:value="act.id">
                                              {{ act.section_value }}
                                          </option>

                                      </select>
                                  </div>
                              </div>
                              <!-- close row -->
                              <div class="row mb-3">
                                  <label class="col-sm-4 col-form-label">Restart Program<small style="color:red">*</small></label>
                                  <div class="col-sm-8">
                                    <div class="form-check form-check-inline">
                                          <input disabled class="form-check-input" type="radio" id="inlineCheckbox1" value="Yes" name="inlineRadioOptions1" v-model="restart_program" />
                                          <label class="form-check-label" for="inlineCheckbox1">Yes</label>
                                      </div>
                                      <div class="form-check form-check-inline">
                                          <input disabled class="form-check-input" type="radio" id="inlineCheckbox2" value="No" name="inlineRadioOptions2" v-model="restart_program" />
                                          <label class="form-check-label" for="inlineCheckbox2">No</label>
                                      </div>
                                  </div>
                              </div>
                              <!-- close-row -->
                              <div class="row mb-3">
                                  <label class="col-sm-4 col-form-label">Progress Note<small style="color:red">*</small></label>
                                  <div class="col-sm-8">
                                      <textarea disabled class="form-control" placeholder="Enter Description" rows="15" v-model="progress_note"></textarea>
                                  </div>
                              </div>
                              <!-- close-row -->
                              <div class="row mb-3">
                                  <label class="col-sm-4 col-form-label">Management Plan<small style="color:red">*</small></label>
                                  <div class="col-sm-8">
                                      <textarea disabled class="form-control" placeholder="Enter Description" rows="15" v-model="management_plan"></textarea>
                                  </div>
                              </div>
                              <!-- close-row -->
                              <div class="accordion form-accordion mt-3" id="accordionExample">
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingOne">
                                          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                              OCCASION OF SERVICES
                                          </button>
                                      </h2>
                                      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                          <div class="accordion-body">
                                              <div class="row mb-3">
                                                  <label class="col-sm-4 col-form-label">Location Of Services<small style="color:red">*</small></label>
                                                  <div class="col-sm-8">
                                                      <select disabled class="form-select" v-model="location_services_id">
                                                          <option value="0">
                                                              Select location of services
                                                          </option>
                                                          <option v-for="loc in locationlist" v-bind:key="loc.id" v-bind:value="loc.id">
                                                              {{ loc.section_value }}
                                                          </option>
                                                      </select>
                                                  </div>
                                              </div>
                                              <!-- close-row -->
                                              <div class="row mb-3">
                                                  <label class="col-sm-4 col-form-label">Type Of Diagnosis<small style="color:red">*</small></label>
                                                  <div class="col-sm-8">
                                                      <select disabled class="form-select" v-model="type_diagnosis_id">
                                                          <option value="0">Select Diagnosis</option>
                                                          <option v-for="catcode in diagonisislist" v-bind:key="catcode.id" v-bind:value="catcode.id">
                                                              {{ catcode.icd_code }} {{catcode.icd_name}}
                                                          </option>
                                                      </select>
                                                  </div>
                                              </div>
                                              <!-- close-row -->
                                              <div class="row mb-3"><label class="col-sm-4 col-form-label">Additional Diagnosis</label>
                                                      <div class="col-sm-8">
                                                      <select disabled
                                                      id="additionalbox" v-model="additional_diagnosis"
                                                      class="form-select multiselect" multiple="multiple"
                                                    >
                                                    <option value="0">Please Select</option>
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
                                              <!-- close row -->
                                              <div class="row mb-3">
                                                  <label class="col-sm-4 col-form-label">Category Of Services<small style="color:red">*</small>
                                                  </label>
                                                  <div class="col-sm-8">
                                                      <div class="form-check form-check-inline">
                                                          <input disabled class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="assisstance" v-model="category_services" />
                                                          <label class="form-check-label" for="inlineRadio1">Assisstance / Supervision</label>
                                                      </div>
                                                      <div class="form-check form-check-inline">
                                                          <input disabled class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="clinical-work" v-model="category_services" />
                                                          <label class="form-check-label" for="inlineRadio2">Clinical Work / Procedure
                                                          </label>
                                                      </div>
                                                      <div class="form-check form-check-inline">
                                                          <input disabled class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="external" v-model="category_services" />
                                                          <label class="form-check-label" for="inlineRadio3">External</label>
                                                      </div>
                                                  </div>
                                              </div>
                                              <!-- close-row -->
                                              <!-- hide-div -->
                                              <div id="assistance" class="assisstance services hide mb-3">
                                                  <div class="row">
                                                      <div class="col-md-6 mb-3">
                                                          <label class="form-label">Services<small style="color:red">*</small></label>
                                                          <select disabled class="form-select" v-model="services_id">
                                                              <option value="0">Select Service</option>
                                                              <option v-for="slt in assistancelist" v-bind:key="slt.id" v-bind:value="slt.id">
                                                                  {{ slt.section_value }}
                                                              </option>
                                                          </select>
                                                      </div>
                                                  </div>
                                              </div>
                                              <!-- 01 -->
                                              <div id="clinical-work" class="clinical-work services hide mb-3">
                                                  <div class="row">
                                                      <div class="col-md-6 mb-3">
                                                          <label class="form-label">ICD 9 CODE<small style="color:red">*</small></label>
                                                          <select disabled class="form-select" v-model="code_id" @change="onCategorycodebind($event)">
                                                              <option value="0">Select code</option>
                                                              <option v-for="type in codelist" v-bind:key="type.id" v-bind:value="type.id">
                                                                  {{ type.icd_category_code }} {{type.icd_category_name}}
                                                              </option>
                                                          </select>
                                                      </div>
                                                      <div class="col-md-6 mb-3">
                                                              <div><label class="form-label">ICD 9 SUB CODE</label></div>
                                                              <div>
                                                                <div class="mt-2 align-items-flex-start">
                                                                  <select disabled id='subcode' v-model="sub_code_id" class="form-select multiselect" multiple="multiple" style="width:100%">
                                                                  <option value="0">Select sub code</option>
                                                                  <option v-for="catcode in icdcatcodelist" v-bind:key="catcode.id" v-bind:value="catcode.id">
                                                                      {{ catcode.icd_code }}
                                                                      {{catcode.icd_name}}
                                                                  </option>
                                                              </select>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                  </div>
                                                  <div class="row">
                                                        <div class="col-md-6 mb-3">
                                                              <label class="form-label">Additional ICD 9 CODE</label>
                                                              <select disabled class="form-select" v-model="additional_code_id" @change="onCategorycodebind2($event)">
                                                                  <option value="0">Select code</option>
                                                                  <option v-for="type in additionalcodelist" v-bind:key="type.id" v-bind:value="type.id">
                                                                      {{ type.icd_category_code }} {{type.icd_category_name}}
                                                                  </option>
                                                              </select>
                                                          </div>
                                                          <div class="col-md-6 mb-3">
                                                              <div><label class="form-label">Additional ICD 9 SUB CODE</label></div>
                                                              <div>
                                                                <div class="mt-2 align-items-flex-start">
                                                                  <select disabled id='addsubcode' v-model="additional_subcode" class="form-select multiselect" multiple="multiple" style="width:100%">
                                                                  <option value="0">Select sub code</option>
                                                                  <option v-for="catcode in add_icdcatcodelist" v-bind:key="catcode.id" v-bind:value="catcode.id">
                                                                      {{ catcode.icd_code }}
                                                                      {{catcode.icd_name}}
                                                                  </option>
                                                              </select>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                              </div>
                                              <!-- 02 -->
                                              <div id="external" class="external services hide mb-3">
                                                  <div class="row">
                                                      <div class="col-md-6 mb-3">
                                                          <label class="form-label">Services<small style="color:red">*</small></label>
                                                          <select disabled class="form-select" v-model="serviceid">
                                                              <option value="0">Select Service</option>
                                                              <option v-for="slt in externallist" v-bind:key="slt.id" v-bind:value="slt.id">
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
                                                      <label class="form-label">Complexity Of Service<small style="color:red">*</small></label>
                                                      <select disabled class="form-select" v-model="complexity_services_id">
                                                          <option value="0">
                                                              Select Complexity Of Service
                                                          </option>
                                                          <option v-for="cm in comlexcitylist" v-bind:key="cm.id" v-bind:value="cm.id">
                                                              {{ cm.section_value }}
                                                          </option>
                                                      </select>
                                                  </div>
                                                  <div class="col-md-6 mb-3">
                                                      <label class="form-label">Outcome<small style="color:red">*</small></label>
                                                      <select disabled class="form-select" v-model="outcome_id">
                                                          <option value="0">Select outcome</option>
                                                          <option v-for="out in outcomelist" v-bind:key="out.id" v-bind:value="out.id">
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
                                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                              MEDICATION
                                          </button>
                                      </h2>
                                      <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                          <div class="accordion-body">
                                              <div class="col-md-12 mb-3">
                                                  <label class="form-label">Medication</label>
                                                  <textarea disabled class="form-control textarea" placeholder="Please Type Prescription Here" v-model="medication_des"></textarea>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <!--  -->
                              </div>
                              <br>
                              <br>
                              <p v-if="errorList.length">
                                  <ul>
                                      <li style="color:red" v-for='err in errorList' :key='err'>
                                          {{ err }}
                                      </li>
                                  </ul>
                              </p>
                              <div class="d-flex">
                                  <button @click="GoBack" class="btn btn-primary btn-text"><i class="fa fa-arrow-alt-to-left"></i> Back
                                  </button>
                              </div>
                          </div>
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
      components: {
          CommonSidebar,
          CommonHeader
      },
      name: "se-progress-notes",
      data() {
          return {
              userdetails: null,
              Id: 0,
              patientdetails: null,
              errorList: [],
              servicelist: [],
              outcomelist: [],
              comlexcitylist: [],
              codelist: [],
              icdcatcodelist: [],
              additionalcodelist: [],
              add_icdcatcodelist: [],
              selectedindividaul: [],
              selectedmedication: [],
              selectedsupport: [],
              diagonisislist: [],
              locationlist: [],
              activitylist: [],
              employmentlist: [],
              details: {},
              patient_mrn_id: "",
              name: "",
              patient_mrn: "",
              activity_type: "",
              employment_status: "",
              date: "",
              time: "",
              staff_name: "",
              restart_program: "",
              progress_note: "",
              management_plan: "",
              location_services_id: 0,
              type_diagnosis_id: 0,
              category_services: 0,
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
              pid: 0,
              type: "",
              appId: 0,
              SidebarAccess: null,
              additional_diagnosis: 0,
              additional_subcode: 0,
              additional_code_id: 0,
          };
      },
      beforeMount() {
          this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
          this.SidebarAccess = JSON.parse(localStorage.getItem("SidebarAccess"));
          let urlParams = new URLSearchParams(window.location.search);
          this.Id = urlParams.get("id");
          this.appId = urlParams.get("appId");
          this.GetPatientdetails();
          if (this.Id) {
              this.staff_name = this.userdetails.user.name;
              this.GetList();
          }
          let urlParams1 = new URLSearchParams(window.location.search);
          this.pid = urlParams1.get("pid");
          this.type = urlParams1.get("type");
          this.GetPatientdetails();
          if (this.pid) {
              this.getdetails();
          }
          $(document).ready(function () {
              $('.form-accordion input[type="radio"]').click(function () {
                  var inputValue = $(this).attr("value");
                  var targetBox = $("." + inputValue);
                  $(".services").not(targetBox).hide();
                  $(targetBox).show();
              });
              $(".multiselect").select2({
                  placeholder: "Please Select",
                });
          });
      },
      methods: {
          async GetList() {
              const headers = {
                  Authorization: "Bearer " + this.userdetails.access_token,
                  Accept: "application/json",
                  "Content-Type": "application/json",
              };
              const response = await this.$axios.get(
                  "general-setting/list?section=" + "complexity-of-service", {
                      headers
                  }
              );
              if (response.data.code == 200 || response.data.code == "200") {
                  this.comlexcitylist = response.data.list;
              } else {
                  this.comlexcitylist = [];
              }
              const response1 = await this.$axios.get("service/list", {
                  headers
              });
              if (response1.data.code == 200 || response1.data.code == "200") {
                  this.servicelist = response1.data.list;
              } else {
                  this.servicelist = [];
              }
              const response2 = await this.$axios.get(
                  "general-setting/list?section=" + "outcome", {
                      headers
                  }
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
                  "general-setting/list?section=" + "location-of-services", {
                      headers,
                  }
              );
              if (response5.data.code == 200 || response5.data.code == "200") {
                  this.locationlist = response5.data.list;
              } else {
                  this.locationlist = [];
              }
              const response6 = await this.$axios.get(
                  "general-setting/list?section=" + "type-of-activities", {
                      headers,
                  }
              );
              if (response6.data.code == 200 || response6.data.code == "200") {
                  this.activitylist = response6.data.list;
              } else {
                  this.activitylist = [];
              }
              const response7 = await this.$axios.get(
                  "general-setting/list?section=" + "employment-status", {
                      headers,
                  }
              );
              if (response7.data.code == 200 || response7.data.code == "200") {
                  this.employmentlist = response7.data.list;
              } else {
                  this.employmentlist = [];
              }
              const respons = await this.$axios.get(
                  "general-setting/list?section=" + "assistance-or-supervision", {
                      headers
                  }
              );
              if (respons.data.code == 200 || respons.data.code == "200") {
                  this.assistancelist = respons.data.list;
              } else {
                  this.assistancelist = [];
              }
              const respon = await this.$axios.get(
                  "general-setting/list?section=" + "external", {
                      headers
                  }
              );
              if (respon.data.code == 200 || respon.data.code == "200") {
                  this.externallist = respon.data.list;
              } else {
                  this.externallist = [];
              }
              const response8 = await this.$axios.get("diagnosis/getIcd9codeList", {
                      headers,
                  });
                  if (response8.data.code == 200 || response8.data.code == "200") {
                      this.additionalcodelist = response8.data.list;
                  } else {
                      this.additionalcodelist = [];
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
                  "diagnosis/getIcd9subcodeList", {
                      icd_category_code: event.target.value
                  }, {
                      headers
                  }
              );
              if (response.data.code == 200 || response.data.code == "200") {
                  this.icdcatcodelist = response.data.list;
              } else {
                  this.icdcatcodelist = [];
              }
          },
          async onCategorycodebind2(event) {
                  const headers = {
                      Authorization: "Bearer " + this.userdetails.access_token,
                      Accept: "application/json",
                      "Content-Type": "application/json",
                  };
                  console.log("my id", event);
                  const response = await this.$axios.post(
                      "diagnosis/getIcd9subcodeList", {
                          icd_category_code: event.target.value
                      }, {
                          headers
                      }
                  );
                  if (response.data.code == 200 || response.data.code == "200") {
                      this.add_icdcatcodelist = response.data.list;
                  } else {
                      this.add_icdcatcodelist = [];
                  }
              },
          async GetPatientdetails() {
              const headers = {
                  Authorization: "Bearer " + this.userdetails.access_token,
                  Accept: "application/json",
                  "Content-Type": "application/json",
              };
              const response = await this.$axios.post(
                  "patient-registration/getPatientRegistrationById", {
                      id: this.Id,
                  }, {
                      headers
                  }
              );
              if (response.data.code == 200) {
                  this.patient_mrn_id = response.data.list[0].patient_mrn;
                  this.name = response.data.list[0].name_asin_nric;
                  console.log("my details", this.patientdetails);
              } else {
                  this.$swal.fire({
                      icon: 'error',
                      title: 'Oops... Something Went Wrong!',
                      text: 'the error is: ' + this.error,
                      footer: ''
                  });
              }
          },
          resetmodel() {
              this.patient_mrn_id = "";
              this.name = "";
              this.activity_type = "";
              this.employment_status = "";
              this.date = "";
              this.time = "";
              this.staff_name = "";
              this.restart_program = "",
              this.progress_note = "";
              this.management_plan = "";
              this.location_services_id = 0;
              this.type_diagnosis_id = 0;
              this.category_services = 0;
              this.code_id = 0;
              this.sub_code_id = 0;
              this.complexity_services_id = 0;
              this.outcome_id = 0;
              this.medication_des = "";
              this.services_id = 0;
              this.serviceid = 0;
          },
          async getdetails() {
              const headers = {
                  Authorization: "Bearer " + this.userdetails.access_token,
                  Accept: "application/json",
                  "Content-Type": "application/json",
              };
              const response = await this.$axios.post(
                  "/patient-appointment-details/fetchViewHistoryListDetails", {
                      id: this.pid,
                      type: "SEProgressNote",
                  }, {
                      headers
                  }
              );
              if (response.data.code == 200) {

                  this.Id = response.data.Data[0].patient_mrn_id;
                  this.name = response.data.Data[0].name;
                  this.patient_mrn = response.data.Data[0].mrn;
                  this.activity_type = response.data.Data[0].activity_type;
                  this.employment_status = response.data.Data[0].employment_status;
                  this.patient_mrn_id = response.data.Data[0].patient_mrn_id;
                  this.date = response.data.Data[0].date;
                  this.time = response.data.Data[0].time;
                  this.staff_name = response.data.Data[0].staff_name;
                  this.restart_program = response.data.Data[0].restart;
                  this.progress_note = response.data.Data[0].progress_note;
                  this.management_plan = response.data.Data[0].management_plan;
                  this.location_services_id = response.data.Data[0].location_service;
                  this.type_diagnosis_id = response.data.Data[0].diagnosis_type;
                  this.category_services = response.data.Data[0].service_category;
                  this.complexity_services_id = response.data.Data[0].complexity_service;
                  this.outcome_id = response.data.Data[0].outcome;
                  this.medication_des = response.data.Data[0].medication;
                  this.code_id = response.data.Data[0].code_id;
                  this.sub_code_id = response.data.Data[0].sub_code_id.split(",");
                      $("#subcode")
                      .val(this.sub_code_id)
                      .trigger("change");
                  this.services_id = response.data.Data[0].services_id;
                  this.additional_diagnosis = response.data.Data[0].additional_diagnosis.split(",");
                      $("#additionalbox")
                      .val(this.additional_diagnosis)
                      .trigger("change");

                  this.additional_subcode = response.data.Data[0].additional_subcode.split(",");
                      $("#addsubcode")
                      .val(this.additional_subcode)
                      .trigger("change");

                  this.additional_code_id = response.data.Data[0].additional_code_id;

                  if(this.category_services=='assisstance'){
                        $(document).ready(function(){
                            $("#assisstance").removeClass("hide");
                        });
                    }else if(this.category_services=='clinical-work'){
                        $(document).ready(function(){
                            $("#clinical-work").removeClass("hide");
                        });
                    }else if(this.category_services=='external'){
                        $(document).ready(function(){
                            $("#external").removeClass("hide");
                        });
                    }

                  this.GetList();

                  const response2 = await this.$axios.post(
                      "diagnosis/getIcd9subcodeList", {
                          icd_category_code: this.code_id
                      }, {
                          headers
                      }
                  );
                  if (response2.data.code == 200 || response2.data.code == "200") {
                      this.icdcatcodelist = response2.data.list;
                  } else {
                      this.icdcatcodelist = [];
                  }

                  const response3 = await this.$axios.post(
                      "diagnosis/getIcd9subcodeList", {
                          icd_category_code: this.additional_code_id
                      }, {
                          headers
                      }
                  );
                  if (response3.data.code == 200 || response3.data.code == "200") {
                      this.add_icdcatcodelist = response3.data.list;
                  } else {
                      this.add_icdcatcodelist = [];
                  }

              } else {
                  this.$swal.fire({
                      icon: 'error',
                      title: 'Oops... Something Went Wrong!',
                      text: 'the error is: ' + this.error,
                      footer: ''
                  });
              }
          },
          GoBack() {
              if (this.type == 'view') {
                  this.$router.go(-1);
              } else {
                  this.$router.push({
                      path: "/modules/Intervention/patient-summary",
                      query: {
                          id: this.Id,
                          appId: this.appId
                      },
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
  </style>
