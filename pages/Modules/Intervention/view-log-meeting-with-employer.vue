<template>
    <div id="layoutSidenav">
        <CommonSidebar />
        <div id="layoutSidenav_content">
            <CommonHeader />
            <main>
                <div class="container-fluid px-4">
                    <div class="page-title">
                        <h1>LOG MEETING WITH EMPLOYER</h1>
                    </div>
                    <div class="card mb-4">
                        <div class="card-body">
                            <div>
                              <div class="row">
                                  <div class="col-sm-6">
                                      <div class="mb-3">
                                          <label class="form-label">Date<small style="color:red">*</small> </label>
                                          <input type="date" class="form-control" v-model="date" disabled />
                                      </div>
                                  </div>
                                  <div class="col-sm-6">
                                      <div class="mb-3">
                                          <label class="form-label">Employer Name<small style="color:red">*</small> </label>
                                          <input type="text" class="form-control" v-model="employee_name" disabled />
                                      </div>
                                  </div>
                              </div>
                              <!-- close-row -->
  
                              <div class="row">
                                  <div class="col-sm-6">
                                      <div class="mb-3">
                                          <label class="form-label">Company name<small style="color:red">*</small> </label>
                                          <input type="text" class="form-control" v-model="company_name" disabled />
                                      </div>
                                  </div>
                                  <div class="col-sm-12">
                                      <div class="mb-3">
                                          <label class="form-label">Purpose of Meeting<small style="color:red">*</small> </label>
                                          <textarea class="form-control textarea" rows="5" v-model="purpose_of_meeting" disabled></textarea>
                                      </div>
                                  </div>
                              </div>
                              <!-- close-row -->
  
                              <div class="row">
                                  <div class="col-sm-6">
                                      <div class="mb-3">
                                          <label class="form-label">Start Time of Discussion<small style="color:red">*</small> </label>
                                          <input type="time" class="form-control" v-model="discussion_start_time" disabled/>
                                      </div>
                                  </div>
                                  <div class="col-sm-6">
                                      <div class="mb-3">
                                          <label class="form-label">End Time of Discussion<small style="color:red">*</small> </label>
                                          <input type="time" class="form-control" v-model="discussion_end_time" disabled/>
                                      </div>
                                  </div>
                              </div>
                              <!-- close-row -->
  
                              <div class="row">
                                  <div class="col-sm-6">
                                      <div class="mb-3">
                                          <label class="form-label">Staff Name<small style="color:red">*</small> </label>
                                          <input type="text" class="form-control" v-model="staff_name" disabled />
                                      </div>
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
                                                        <select class="form-select" v-model="location_services_id" disabled>
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
                                                        <select class="form-select" v-model="type_diagnosis_id" @change="BindDiagnosis()" disabled>
                                                            <option value="0">Select Diagnosis</option>
                                                            <option v-for="catcode in diagonisislist" v-bind:key="catcode.id" v-bind:value="catcode.id">
                                                                {{ catcode.icd_code }} {{catcode.icd_name}}
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <!-- close-row -->
                                                <div class="row mb-3 align-items-flex-start">
                                                      <label class="col-sm-4 col-form-label">Additional Type Of Diagnosis</label>
                                                      <div class="col-sm-8 align-items-flex-start" >
                                                          <select
                                                          id="additionalbox" v-model="additional_diagnosis"
                                                          class="form-select multiselect" multiple="multiple" disabled>
                                                              <option value="0">Please Select</option><option
                                                              v-for="catcode in diagonisislist"
                                                              v-bind:key="catcode.id"
                                                              v-bind:value="catcode.id">
                                                              {{ catcode.icd_code }} {{catcode.icd_name}}
                                                              </option>
                                                          </select>
                                                      </div>
                                                          </div>
                                                <!-- close row -->
                                                <div class="row mb-3">
                                                    <label class="col-lg-4 col-sm-12 col-form-label">Category Of Services<small style="color:red">*</small>
                                                    </label>
                                                    <div class="col-lg-8 col-sm-12">
                                                        <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                                                            value="assisstance" v-model="category_services" disabled />
                                                        <label class="form-check-label" for="inlineRadio1">Assisstance / Supervision</label>
                                                        </div>
                                                        <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio2"
                                                            value="clinical-work" v-model="category_services" disabled />
                                                        <label class="form-check-label" for="inlineRadio2">Clinical Work / Procedure
                                                        </label>
                                                        </div>
                                                        <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="radio" name="inlineRadioOptions3" id="inlineRadio3"
                                                            value="external" v-model="category_services" disabled />
                                                        <label class="form-check-label" for="inlineRadio3">External</label>
                                                        </div>
                                                    </div>
                                                    </div>
                                                <!-- close-row -->
                                                <!-- hide-div -->
                                                <div class="assisstance services hide mb-3">
                                                    <div class="row">
                                                        <div class="col-md-6 mb-3">
                                                            <label class="form-label">Services<small style="color:red">*</small></label>
                                                            <select class="form-select" v-model="services_id" disabled>
                                                                <option value="0">Select Service</option>
                                                                <option v-for="slt in assistancelist" v-bind:key="slt.id" v-bind:value="slt.id">
                                                                    {{ slt.section_value }}
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- 01 -->
                                                <div class="clinical-work services hide mb-3">
                                                        <div class="row mb-6 align-items-flex-start">
                                                        <div class="col-md-4 mb-3">
                                                            <label class="form-label">ICD 9 CODE<small style="color:red">*</small> </label>
                                                            <select
                                                            class="form-select"
                                                            v-model="code_id"
                                                            @change="onCategorycodebind($event)" disabled >
                                                            <option value="0">Select code</option>
                                                            <option
                                                                v-for="type in codelist"
                                                                v-bind:key="type.id"
                                                                v-bind:value="type.id">
                                                            {{ type.icd_category_code }} {{type.icd_category_name}}
                                                            </option>
                                                            </select>
                                                        </div>

                                                        <div class="col-md-8 mb-3">
                                                        <div><label class="form-label">ICD 9 SUB CODE<small style="color:red">*</small> </label></div>
                                                        <div>
                                                        <div class="mt-2 align-items-flex-start">
                                                            <select
                                                            class="form-select multiselect" multiple="multiple"
                                                            id="sub_code_id" v-model="additional_sub_code_id" style="width:100%" disabled>

                                                            <option value="0">Select code</option>
                                                            <option
                                                                v-for="catcode in icdcatcodelist"
                                                                v-bind:key="catcode.id"
                                                                v-bind:value="catcode.id">
                                                                {{ catcode.icd_code }}{{catcode.icd_name}}
                                                            </option>
                                                            </select>
                                                        </div>
                                                        </div>
                                                        </div>

                                                        
                                                        
                                                        </div>

                                                        <!--additional code-->
                                                        <div class="row mb-6 align-items-flex-start">
                                                        <div class="col-md-4 mb-3">
                                                            <label class="form-label">Additional ICD 9 CODE</label>
                                                            <select
                                                            class="form-select"
                                                            v-model="add_code_id"
                                                            @change="onCategoryaddcodebind($event)" disabled
                                                            >
                                                            <option value="0">Select code</option>
                                                            <option
                                                                v-for="type in codelist"
                                                                v-bind:key="type.id"
                                                                v-bind:value="type.id">
                                                            {{ type.icd_category_code }} {{type.icd_category_name}}
                                                            </option>
                                                            </select>
                                                        </div>

                                                        <div class="col-md-8 mb-3">
                                                        <div><label class="form-label">Additional ICD 9 SUB CODE</label></div>
                                                        <div>
                                                        <div class="mt-2 align-items-flex-start">
                                                            <select
                                                            class="form-select multiselect" multiple="multiple"
                                                            id="add_sub_code_id" v-model="additional_sub_code_id2" style="width:100%" disabled>

                                                            <option value="0">Select code</option>
                                                            <option
                                                                v-for="catcode in addicdcatcodelist"
                                                                v-bind:key="catcode.id"
                                                                v-bind:value="catcode.id">
                                                                {{ catcode.icd_code }}{{catcode.icd_name}}
                                                            </option>
                                                            </select>
                                                        </div>
                                                        </div>
                                                        </div>

                                                        </div>
                                                    </div>
                                                <!-- 02 -->
                                                <!--servicesid-->
                                                <div class="external services hide mb-3">
                                                    <div class="row">
                                                        <div class="col-md-6 mb-3">
                                                            <label class="form-label">Services<small style="color:red">*</small></label>
                                                            <select class="form-select" v-model="serviceid" disabled>
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
                                                        <select class="form-select" v-model="complexity_services_id" disabled>
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
                                                        <select class="form-select" v-model="outcome_id" disabled>
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
                                                    <textarea class="form-control textarea" placeholder="Please Type Prescription Here" v-model="medication_des" disabled></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--  -->
                                </div>
                                <p v-if="errorList.length">
                                    <ul>
                                        <li style="color:red" v-for='err in errorList' :key='err'>
                                            {{ err }}
                                        </li>
                                    </ul>
                                </p>
                                <br>
                                <br>
                                <div class="d-flex">
  
                                  <button @click="GoBack" class="btn btn-primary btn-text"><i class="fa fa-arrow-alt-to-left"></i> Back
                                  </button>
  
                                  
                                  </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
    </template>
  
    <script>
    import Interventionphysectristdetails from "../../../components/Intervention/Interventionphysectristdetails.vue";
    import CommonHeader from "../../../components/CommonHeader.vue";
    import CommonSidebar from "../../../components/CommonSidebar.vue";
  
    export default {
        components: {
            CommonHeader,
            CommonSidebar,
        },
        name: "progress-note",
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
                additionalcodelist: [],
                add_icdcatcodelist: [],
                Id: 0,
              
                location_services_id: 0,
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
                currentdate: "",
                currenttime: "",
                patientdetails: null,
                assistancelist: [],
                externallist: [],
                pid: 0,
                type: "",
                appId: 0,
  
              date:"",
              employee_name:"",
              company_name:"",
              purpose_of_meeting:'',
              discussion_start_time:"",
              discussion_end_time:"",
              staff_name:"",
  
  
              addicdcatcodelist: [],
              type_diagnosis_id: 0,
              add_code_id:0,
              additional_diagnosis: [],
              additional_sub_code_id:[],
              additional_sub_code_id2:[],
            };
        },
        beforeMount() {
            this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
            //alert(JSON.stringify(this.userdetails));
            this.staff_name=this.userdetails.user.name;
            this.SidebarAccess = JSON.parse(localStorage.getItem("SidebarAccess"));
            $(document).ready(function () {
                $('.form-accordion input[type="radio"]').click(function () {
                    var inputValue = $(this).attr("value");
                    var targetBox = $("." + inputValue);
                    $(".services").not(targetBox).hide();
                    $(targetBox).show();
                });
            });
            this.GetList();
            this.GetPatientdetails();
            let urlParams = new URLSearchParams(window.location.search);
            this.appId = urlParams.get("appId");
            this.Id = urlParams.get("id");
  
            let urlParams1 = new URLSearchParams(window.location.search);
            this.pid = urlParams1.get("pid");
            this.type = urlParams1.get("type");
        
            this.getdetails();
            
            const current = new Date();
            this.currentdate =
                current.getDate() +
                "-" +
                (current.getMonth() + 1) +
                "-" +
                current.getFullYear();
  
            this.currenttime = current.getHours() + ":" + current.getMinutes();
        },
        mounted(){
              $(document).ready(function () {
              $(".multiselect").select2({
                  placeholder: "Please Select",
              });
              });
          },
        methods: {
            async onCreateEvent() {
            var additionalbox = 0;
            $("#additionalbox :selected").each(function () {
                if (additionalbox) {
                additionalbox = additionalbox + "," + this.value;
                } else {
                additionalbox = this.value;
                }
            });
            var sub_code_id = 0;
            $("#sub_code_id :selected").each(function () {
                if (sub_code_id) {
                sub_code_id = sub_code_id + "," + this.value;
                } else {
                sub_code_id = this.value;
                }
            });
            var add_sub_code_id = 0;
            $("#add_sub_code_id :selected").each(function () {
                if (add_sub_code_id) {
                add_sub_code_id = add_sub_code_id + "," + this.value;
                } else {
                add_sub_code_id = this.value;
                }
            });
              this.$swal.fire({
                  title: 'Do you want to save as draft?',
                  showCancelButton: true,
                  confirmButtonText: 'Save',
              }).then(async (result) => {
                  /* Read more about isConfirmed, isDenied below */
                  if (result.isConfirmed) {
                 
                      try {
                          this.loader = true;
                          if (this.serviceid) {
                              this.services_id = this.serviceid
                          }
                          const headers = {
                              Authorization: "Bearer " + this.userdetails.access_token,
                              Accept: "application/json",
                              "Content-Type": "application/json",
                          };
                          const response = await this.$axios.post(
                              "log-employer-meeting/add", {
                                  added_by: this.userdetails.user.id,
                                  date: this.date,
                                  employee_name:this.employee_name,
                                  company_name:this.company_name,
                                  purpose_of_meeting:this.purpose_of_meeting,
                                  discussion_start_time:this.discussion_start_time,
                                  discussion_end_time:this.discussion_end_time,
                                  staff_name:this.staff_name,

                                  location_services: this.location_services_id,
                                  type_diagnosis_id: this.type_diagnosis_id,
                                  category_services: this.category_services,
                                  services_id:this.services_id,// for assistance
                                  serviceid: this.serviceid, // for external services


                                  add_diagnosis_type: JSON.stringify(additionalbox),
                                  code_id: this.code_id,
                                  sub_code_id: JSON.stringify(sub_code_id),
                                  add_code_id: this.add_code_id,
                                  add_sub_code_id: JSON.stringify(add_sub_code_id),
                                  complexity_services: this.complexity_services_id,
                                  outcome: this.outcome_id,
                                  medication_des: this.medication_des,
                                  patient_id: this.Id,
                                  
                                  appId: this.appId,
                                  status: "0",
                              }, {
                                  headers
                              }
                          );
                          console.log("response", response.data);
                          if (response.data.code == 200) {
                              this.loader = false;
                              this.resetmodel();
                              this.$swal.fire('Succesfully save as draft', '', 'success')
                              this.GoBack();
                          } else {
                              this.loader = false;
                              this.resetmodel();
                              this.$swal.fire({
                                  icon: 'error',
                                  title: 'Oops... Something Went Wrong!',
                                  text: 'the error is: ' + JSON.stringify(response.data.message),
                              })
                              this.GoBack();
                          }
                      } catch (e) {
                          this.$swal.fire({
                              icon: 'error',
                              title: 'Oops... Something Went Wrong!',
                              text: 'the error is: ' + e,
                          })
                      }
                  } else if (result.isDismissed) {
                      this.$swal.fire('Changes are not saved', '', 'info')
                  }
              })
          },
          async onPublishEvent() {
            var additionalbox = 0;
            $("#additionalbox :selected").each(function () {
                if (additionalbox) {
                additionalbox = additionalbox + "," + this.value;
                } else {
                additionalbox = this.value;
                }
            });
            var sub_code_id = 0;
            $("#sub_code_id :selected").each(function () {
                if (sub_code_id) {
                sub_code_id = sub_code_id + "," + this.value;
                } else {
                sub_code_id = this.value;
                }
            });
            var add_sub_code_id = 0;
            $("#add_sub_code_id :selected").each(function () {
                if (add_sub_code_id) {
                add_sub_code_id = add_sub_code_id + "," + this.value;
                } else {
                add_sub_code_id = this.value;
                }
            });
              this.$swal.fire({
                  title: 'Do you want to save this record?',
                  showCancelButton: true,
                  confirmButtonText: 'Save',
              }).then(async (result) => {
                  if (result.isConfirmed) {
                
                      this.validate = true;
                      console.log("services", this.category_services);
                      this.errorList = [];
                      try {
                          if (!this.date) {
                              this.errorList.push("Date is required");
                          }
                          if (!this.employee_name) {
                              this.errorList.push("Employer Name is required");
                          }
                          if (!this.company_name) {
                              this.errorList.push("Company name is required");
                          }
                          if (!this.purpose_of_meeting) {
                              this.errorList.push("Purpose of Meeting is required");
                          }
                          if (!this.discussion_start_time) {
                              this.errorList.push("Start Time of Discussion is required");
                          }
                          if (!this.discussion_end_time) {
                              this.errorList.push("End Time of Discussion is required");
                          }
                          if (!this.staff_name) {
                              this.errorList.push("Staff Name is required");
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
                          if (
                              this.date &&
                              this.employee_name &&
                              this.company_name &&
                              this.purpose_of_meeting &&
                              this.discussion_start_time &&
                              this.discussion_end_time &&
                              this.staff_name &&
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
                                  "log-employer-meeting/add", {
                                    added_by: this.userdetails.user.id,
                                  date: this.date,
                                  employee_name:this.employee_name,
                                  company_name:this.company_name,
                                  purpose_of_meeting:this.purpose_of_meeting,
                                  discussion_start_time:this.discussion_start_time,
                                  discussion_end_time:this.discussion_end_time,
                                  staff_name:this.staff_name,

                                  location_services: this.location_services_id,
                                  type_diagnosis_id: this.type_diagnosis_id,
                                  category_services: this.category_services,
                                  services_id:this.services_id,// for assistance
                                  serviceid: this.serviceid, // for external services


                                  add_diagnosis_type: JSON.stringify(additionalbox),
                                  code_id: this.code_id,
                                  sub_code_id: JSON.stringify(sub_code_id),
                                  add_code_id: this.add_code_id,
                                  add_sub_code_id: JSON.stringify(add_sub_code_id),
                                  complexity_services: this.complexity_services_id,
                                  outcome: this.outcome_id,
                                  medication_des: this.medication_des,
                                  patient_id: this.Id,
                                  
                                  appId: this.appId,
                                      status: "1",
                                  }, {
                                      headers
                                  }
                              );
                              console.log("response", response.data);
                              if (response.data.code == 200) {
                                  this.loader = false;
                                  this.resetmodel();
                                  this.$swal.fire(
                                      'Successfully Saved.',
                                      'Data is inserted.',
                                      'success',
                                  );

                                  this.GoBack();
                              } else {
                                  this.loader = false;
                                  this.resetmodel();
                                  this.$swal.fire({
                                      icon: 'error',
                                      title: 'Oops... Something Went Wrong!',
                                      text: 'the error is: ' + JSON.stringify(response.data.message),
                                  })
                                  this.GoBack();
                              }
                          }
                      } catch (e) {
                          this.loader = false;
                          this.resetmodel();
                          this.$swal.fire({
                              icon: 'error',
                              title: 'Oops... Something Went Wrong!',
                              text: 'the error is: ' + e,
                          })

                          this.GoBack();
                      }
                  } else if (result.isDismissed) {
                      this.$swal.fire('Changes are not saved', '', 'info')
                  }
              })
          },
            BindDiagnosis() {
                this.diagnosis = this.type_diagnosis_id.text;
            },
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
  
                const response6 = await this.$axios.get("diagnosis/getIcd9codeList", {
                        headers,
                    });
                    if (response6.data.code == 200 || response6.data.code == "200") {
                        this.additionalcodelist = response6.data.list;
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
          async onCategoryaddcodebind(event) {
        const headers = {
          Authorization: "Bearer " + this.userdetails.access_token,
          Accept: "application/json",
          "Content-Type": "application/json",
        };
        const response = await this.$axios.post(
          "diagnosis/getIcd9subcodeList",
          { icd_category_code: event.target.value },
          { headers }
        );
        if (response.data.code == 200 || response.data.code == "200") {
          this.addicdcatcodelist = response.data.list;
        } else {
          this.addicdcatcodelist = [];
        }
      },
            resetmodel() {
         
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
                    this.patientdetails = response.data.list[0];
                } else {
                    this.$swal.fire({
                        icon: 'error',
                        title: 'Oops... Something Went Wrong!',
                        text: 'the error is: ' + this.error,
                        footer: ''
                    });
                }
                console.log("my details", this.patientdetails);
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
                        type: "LogMeetingWithEmployer",
                    }, {
                        headers
                    }
                );
                if (response.data.code == 200) {
                 
                    this.date=response.data.Data[0].date,
                    this.employee_name=response.data.Data[0].employee_name,
                    this.company_name=response.data.Data[0].company_name,
                    this.purpose_of_meeting=response.data.Data[0].purpose_of_meeting,
                    this.discussion_start_time=response.data.Data[0].discussion_start_time,
                    this.discussion_end_time=response.data.Data[0].discussion_end_time,
                    this.staff_name=response.data.Data[0].staff_name,
                    this.location_services_id=response.data.Data[0].location_services,
                    this.type_diagnosis_id=response.data.Data[0].type_diagnosis_id,
                    this.category_services=response.data.Data[0].category_services,
                    this.services_id=response.data.Data[0].services_id,// for assistance
                    this.complexity_services_id=response.data.Data[0].complexity_services,
                    this.outcome_id=response.data.Data[0].outcome,
                    this.medication_des=response.data.Data[0].medication_des,

                    this.additional_diagnosis = response.data.Data[0].add_type_of_diagnosis.split(",");
                    $("#additionalbox")
                    .val(this.additional_diagnosis)
                    .trigger("change");

                    this.code_id=response.data.Data[0].code_id,
                    this.add_code_id = response.data.Data[0].add_code_id,

                    this.additional_sub_code_id = response.data.Data[0].sub_code_id.split(",");
                                $("#sub_code_id")
                                .val( this.additional_sub_code_id)
                                .trigger("change");
                                   
                    this.additional_sub_code_id2 = response.data.Data[0].add_sub_code_id.split(",");
                            $("#add_sub_code_id")
                            .val( this.additional_sub_code_id2)
                            .trigger("change");
            
                    this.GetPatientdetails();
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
                            icd_category_code: this.add_code_id
                        }, {
                            headers
                        }
                    );
                    if (response3.data.code == 200 || response3.data.code == "200") {
                        this.addicdcatcodelist = response3.data.list;
                    } else {
                        this.addicdcatcodelist = [];
                    }
                } else {
                    this.$swal.fire({
                        icon: 'error',
                        title: 'Oops... Something Went Wrong!',
                        text: 'the error is: ' + this.error,
                        footer: ''
                    });
                }
                if(this.category_services=='clinical-work'){
                    $(document).ready(function () {
                        $('input[name="inlineRadioOptions2"]').trigger('click');
                    });
                }else if(this.category_services=='external'){
                    $(document).ready(function () {
                        $('input[name="inlineRadioOptions3"]').trigger('click');
                    });
                }else{
                    $(document).ready(function () {
                        $('input[name="inlineRadioOptions"]').trigger('click');
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
            }
        },
    };
    </script>
  
    <style scoped>
    .hide {
        display: none;
    }
    </style>
  