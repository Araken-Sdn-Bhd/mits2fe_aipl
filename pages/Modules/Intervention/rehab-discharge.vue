<template>
  <div id="layoutSidenav">
    <CommonSidebar  />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>REHAB DISCHARGE NOTE</h1>
            <!-- <a href="#"><i class="fal fa-plus"></i> Add</a> -->
          </div>
          <div class="card mb-4">
            <div class="card-body">
              <div>
                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Name<small style="color:red">*</small> </label>
                      <input type="text" class="form-control" v-model="name" />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">MRN<small style="color:red">*</small> </label>
                      <input type="text" class="form-control" v-model="mrn" />
                    </div>
                  </div>
                </div>
                <!-- close-row -->
                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Date<small style="color:red">*</small> </label>
                      <input type="date" class="form-control" v-model="date" />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Time<small style="color:red">*</small> </label>
                      <input type="time" class="form-control" v-model="time" />
                    </div>
                  </div>
                </div>
                <!-- close-row -->
                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Staff Name<small style="color:red">*</small> </label>
                      <input type="text" class="form-control" v-model="staff_name" />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Diagnosis<small style="color:red">*</small> </label>
                      <select class="form-select" v-model="diagnosis_id">
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
                </div>
                <!-- close-row -->
                <div class="row">
                  <div class="col-sm-12">
                    <label class="form-label">Intervention<small style="color:red">*</small> </label>
                    <div class="mb-3">
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="inlineCheckbox1"
                          value="supportedEmployment"
                          name="inlineRadioOptions" v-model="intervention"
                        />
                        <label class="form-check-label" for="inlineCheckbox1"
                          >Supported Employment<small style="color:red">*</small> </label
                        >
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="inlineCheckbox2"
                          value="ETP"
                          name="inlineRadioOptions" v-model="intervention"
                        />
                        <label class="form-check-label" for="inlineCheckbox2"
                          >ETP</label
                        >
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="inlineCheckbox3"
                          value="jobClub"
                          name="inlineRadioOptions" v-model="intervention"
                        />
                        <label class="form-check-label" for="inlineCheckbox3"
                          >Job Club</label
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <!-- close-row -->
                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Category of Discharge<small style="color:red">*</small> </label>
                      <select class="form-select" v-model="discharge_category">
                        <option value="0">Please Select</option>
                                                <option
              v-for="dis in dischargelist"
              v-bind:key="dis.id"
              v-bind:value="dis.id"
            >
              {{ dis.name }}
            </option>
                      </select>
                    </div>
                  </div>
                </div>
                <!-- close-row -->
                <div class="row">
                  <div class="col-sm-12">
                    <div class="mb-3">
                      <label class="form-label">Comment<small style="color:red">*</small> </label>
                      <textarea class="form-control" placeholder="Enter Description" rows="15" v-model="comment"></textarea>
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
                            >Location Of Services<small style="color:red">*</small> </label
                          >
                          <div class="col-sm-8">
                            <select
                              class="form-select"
                              v-model="location_services"
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
                            >Type Of Diagnosis<small style="color:red">*</small> </label
                          >
                          <div class="col-sm-8">
                            <select class="form-select" v-model="type_diagnosis_id">
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
                            >Category Of Services<small style="color:red">*</small>
                          </label>
                          <div class="col-sm-8">
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="inlineRadioOptions1"
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
                                name="inlineRadioOptions1"
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
                                name="inlineRadioOptions1"
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
                              <label class="form-label">Services<small style="color:red">*</small> </label>
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
                              <label class="form-label">ICD 9 CODE<small style="color:red">*</small> </label>
                              <select class="form-select" v-model="code_id"  @change="onCategorycodebind($event)">
                                <option value="0">Select code</option>
                                <option v-for="type in codelist"  v-bind:key="type.id" v-bind:value="type.id">
             {{ type.icd_category_code }} {{type.icd_category_name}}
            </option>
                              </select>
                            </div>
                            <div class="col-md-6 mb-3">
                              <label class="form-label">ICD 9 SUB CODE<small style="color:red">*</small> </label>
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
                              <label class="form-label">Services<small style="color:red">*</small> </label>
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
                              >Complexity Of Service<small style="color:red">*</small> </label
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
                            <label class="form-label">Outcome<small style="color:red">*</small> </label>
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

                <h4 class="sub-title form-heading">Verification</h4>
                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Specialist Name<small style="color:red">*</small> </label>
                      <input type="text" class="form-control" v-model="specialist_name" />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Case Manager/Staff Name<small style="color:red">*</small> </label>
                      <input type="text" class="form-control" v-model="case_manager" />
                    </div>
                  </div>
                </div>
                <!-- close-row -->
                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Date<small style="color:red">*</small> </label>
                      <input type="date" class="form-control" v-model="verification_date_1" />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Date<small style="color:red">*</small> </label>
                      <input type="date" class="form-control" v-model="verification_date_2" />
                    </div>
                  </div>
                </div>
                <p v-if="errorList.length">
                          <ul>
                           <li style="color:red"  v-for='err in errorList' :key='err' >
                           {{ err }}
                             </li>
                        </ul>
                       </p>
                <!-- close-row -->
                <br>
                <br>
                <div class="d-flex">
                    <button
                      @click="GoBack"
                      class="btn btn-primary btn-text"
                      ><i class="fa fa-arrow-alt-to-left"></i> Back
                    </button>
                    <div  class="btn-right" :class="SidebarAccess!=1?'hide':''" v-if="!pid">
                    <button type="submit" @click="onCreateEvent()" class="btn btn-warning btn-text">
                      <i class="fa fa-save"></i> Save as draft
                    </button>

                    <button type="submit" @click="onPublishEvent()" class="btn btn-success btn-text">
                      <i class="fa fa-paper-plane"></i> Submit
                    </button>
                  </div>
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
import CommonHeader from '../../../components/CommonHeader.vue';
import CommonSidebar from '../../../components/CommonSidebar.vue';
export default {
  components: { CommonSidebar, CommonHeader },
  name: "rehab-discharge",
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.SidebarAccess = JSON.parse(localStorage.getItem("SidebarAccess"));
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
    this.appId = urlParams.get("appId");
    this.GetPatientdetails();

    let urlParams1 = new URLSearchParams(window.location.search);
    this.pid = urlParams1.get("pid");
    this.type = urlParams1.get("type");

    this.GetList();
    if (this.Id) {
      this.staff_name=this.userdetails.user.name;
    }

    if (this.pid) {
      this.getdetails();
    }
  },
  data() {
    return {
      patientdetails: null,
      userdetails: null,
      errorList: [],
      servicelist: [],
      outcomelist: [],
      comlexcitylist: [],
      codelist: [],
      icdcatcodelist: [],
      diagonisislist: [],
      locationlist: [],
      dischargelist: [],
      Id: 0,
      name: null,
      mrn: null,
      date: null,
      time: null,
      staff_name: null,
      diagnosis_id: null,
      intervention: null,
      discharge_category: null,
      comment: null,
      location_services: 0,
      type_diagnosis_id: 0,
      category_services: null,
      code_id: 0,
      sub_code_id: 0,
      complexity_services: 0,
      outcome: 0,
      medication_des: "None.",
      patient_mrn_id: null,
      services_id: 0,
      serviceid: 0,
      validate: true,
      specialist_name: null,
      case_manager: null,
      verification_date_1: null,
      verification_date_2: null,
      assistancelist: [],
      externallist: [],
      pid:0,
      type:"",
      appId: 0,
      SidebarAccess:null,
    };
  },
  methods: {
    async onCreateEvent() {
      this.$swal.fire({
                title: 'Do you want to save as draft?',
                showCancelButton: true,
                confirmButtonText: 'Save',
            }).then(async(result) => {
              if (result.isConfirmed) {
                try {
                        this.loader = true;
                          const headers = {
                            Authorization: "Bearer " + this.userdetails.access_token,
                            Accept: "application/json",
                            "Content-Type": "application/json",
                          };
                          const response = await this.$axios.post(
                            "rehab-discharge-note/add",
                            {
                              added_by: this.userdetails.user.id,
                              name: this.name,
                              mrn: this.mrn,
                              patient_mrn_id: this.Id,
                              date: this.date,
                              time: this.time,
                              staff_name: this.staff_name,
                              diagnosis_id: this.diagnosis_id,
                              intervention: this.intervention,
                              discharge_category: this.discharge_category,
                              comment: this.comment,
                              location_services: this.location_services,
                              diagnosis_type: this.type_diagnosis_id,
                              service_category: this.category_services,
                              services_id: this.services_id,
                              code_id: this.code_id,
                              sub_code_id: this.sub_code_id,
                              complexity_services: this.complexity_services,
                              outcome: this.outcome,
                              medication: this.medication_des,
                              specialist_name: this.specialist_name,
                              case_manager: this.case_manager,
                              verification_date_1: this.verification_date_1,
                              verification_date_2: this.verification_date_2,
                              status: "0",
                              id:this.pid,
                              appId:this.appId,
                            },
                            { headers }
                          );
                          if (response.data.code == 200) {
                            this.loader = false;
                            this.resetmodel();
                            this.$swal.fire('Succesfully save as draft!', '', 'success')
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
                  }catch (e) {
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
      this.$swal.fire({
                title: 'Do you want to save the changes?',
                showCancelButton: true,
                confirmButtonText: 'Save',
            }).then(async (result) => {
              if (result.isConfirmed) {
                  this.errorList = [];
                  this.validate = true;
                  try {
                    if (!this.name) {
                      this.errorList.push("Name is required");
                    }
                    if (!this.mrn) {
                      this.errorList.push("MRN Of Discharge is required");
                    }
                    if (!this.date) {
                      this.errorList.push("Date is required");
                    }
                    if (!this.time) {
                      this.errorList.push("Time is required");
                    }
                    if (!this.staff_name) {
                      this.errorList.push("Staff Name is required");
                    }
                    if (!this.diagnosis_id) {
                      this.errorList.push("Diagnosis is required");
                    }
                    if (!this.intervention) {
                      this.errorList.push("Intervention is required");
                    }
                    if (!this.discharge_category) {
                      this.errorList.push("Category of Discharge is required");
                    }
                    if (!this.comment) {
                      this.errorList.push("Comment is required");
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
                    if (!this.specialist_name) {
                      this.errorList.push("Specialist Name is required");
                    }
                    if (!this.case_manager) {
                      this.errorList.push("Case Manager/Staff Name is required");
                    }
                    if (!this.verification_date_1) {
                      this.errorList.push("Date is required");
                    }
                    if (!this.verification_date_2) {
                      this.errorList.push("Date 2 is required");
                    }
                    if (
                      this.name &&
                      this.mrn &&
                      this.date &&
                      this.time &&
                      this.staff_name &&
                      this.diagnosis_id &&
                      this.intervention &&
                      this.discharge_category &&
                      this.comment &&
                      this.location_services &&
                      this.type_diagnosis_id &&
                      this.category_services &&
                      this.complexity_services &&
                      this.outcome &&
                      this.validate &&
                      this.specialist_name &&
                      this.case_manager &&
                      this.verification_date_1 &&
                      this.verification_date_2
                    ) {
                      this.loader = true;
                      const headers = {
                        Authorization: "Bearer " + this.userdetails.access_token,
                        Accept: "application/json",
                        "Content-Type": "application/json",
                      };
                      const response = await this.$axios.post(
                        "rehab-discharge-note/add",
                        {
                          added_by: this.userdetails.user.id,
                          name: this.name ?? null,
                          mrn: this.mrn ?? null,
                          patient_mrn_id: this.Id ?? null,
                          date: this.date ?? null,
                          time: this.time ?? null,
                          staff_name: this.staff_name ?? null,
                          diagnosis_id: this.diagnosis_id ?? null,
                          intervention: this.intervention ?? null,
                          discharge_category: this.discharge_category ?? null,
                          comment: this.comment ?? null,
                          location_services: this.location_services ?? null,
                          diagnosis_type: this.type_diagnosis_id ?? null,
                          service_category: this.category_services ?? null,
                          services_id: this.services_id ?? null,
                          code_id: this.code_id ?? null,
                          sub_code_id: this.sub_code_id ?? null,
                          complexity_services: this.complexity_services ?? null,
                          outcome: this.outcome ?? null,
                          medication: this.medication_des ?? null,
                          specialist_name: this.specialist_name  ?? null,
                          case_manager: this.case_manager  ?? null,
                          verification_date_1: this.verification_date_1  ?? null,
                          verification_date_2: this.verification_date_2 ?? null,
                          status: "1",
                          id:this.pid,
                          appId:this.appId,
                        },
                        { headers }
                      );
                      console.log("response", response.data);
                      if (response.data.code == 200 || response.data.code == "200") {
                        this.loader = false;
                        this.resetmodel();
                        this.$swal.fire(
                            'Successfully Submitted.',
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
        "intervention/category-discharge",
        {
          headers,
        }
      );
      if (response6.data.code == 200 || response6.data.code == "200") {
        this.dischargelist = response6.data.list;
      } else {
        this.dischargelist = [];
      }
      const response7 = await this.$axios.get("staff-management/getList", {
        headers,
      });
      if (response7.data.code == 200 || response7.data.code == "200") {
        this.specialistlist = response7.data.list;
      } else {
        this.specialistlist = [];
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
      if (response.data.code == 200 || response.data.code == "200") {
        this.mrn= response.data.list[0].patient_mrn;
        this.name= response.data.list[0].name_asin_nric;
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
    async resetmodel() {
      this.name = "";
      this.mrn = "";
      this.date = "";
      this.time = "";
      this.staff_name = "";
      this.diagnosis_id = "";
      this.intervention = "";
      this.discharge_category = "";
      this.comment = "";
      this.specialist_name = "";
      this.case_manager = "";
      this.verification_date_1 = "";
      this.verification_date_2 = "";
      this.location_services = 0;
      this.services_id = 0;
      this.code_id = 0;
      this.sub_code_id = 0;
      this.type_diagnosis_id = 0;
      this.category_services = 0;
      this.complexity_services = 0;
      this.outcome = 0;
      this.medication_des = "";
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
          type: "RehabDischargeNote",
        },
        { headers }
      );
      if (response.data.code == 200 || response.data.code == "200") {
        // window.alert(response.data.Data[0].patient_mrn_id);


        this.name = response.data.Data[0].name;
        this.time = response.data.Data[0].time;
        this.comment = response.data.Data[0].comment;
        this.mrn = response.data.Data[0].mrn;
        this.date = response.data.Data[0].date;
        this.staff_name = response.data.Data[0].staff_name;
        this.diagnosis_id = response.data.Data[0].diagnosis_id;
        if (response.data.Data[0].intervention == "supportedEmployment"){
          this.intervention = "supportedEmployment"
        }else if (response.data.Data[0].intervention == "ETP"){
          this.intervention = "ETP"
        }else if (response.data.Data[0].intervention == "jobClub"){
          this.intervention = "jobClub"
        }
        this.discharge_category = response.data.Data[0].discharge_category;
        this.location_services = response.data.Data[0].location_services;
        this.type_diagnosis_id = response.data.Data[0].diagnosis_type;
        this.category_services = response.data.Data[0].service_category;
        this.code_id = response.data.Data[0].code_id;
        this.sub_code_id = response.data.Data[0].sub_code_id;
        this.complexity_services =
          response.data.Data[0].complexity_services;
        this.outcome = response.data.Data[0].outcome;
        this.medication_des = response.data.Data[0].medication;
        this.services_id = response.data.Data[0].services_id;
        this.specialist_name = response.data.Data[0].specialist_name;
        this.verification_date_1 = response.data.Data[0].verification_date_1;
        this.verification_date_2 = response.data.Data[0].verification_date_2;
        this.case_manager = response.data.Data[0].case_manager;
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
        this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + this.error,
                  footer: ''
                });
      }
    },

    async GoBack(){
      if (this.type == 'view'){
        this.$router.go(-1);
      } else {
        this.$router.push({
              path: "/modules/Intervention/patient-summary",
              query: { id: this.Id, appId: this.appId },
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
