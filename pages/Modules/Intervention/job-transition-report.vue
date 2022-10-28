<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>JOB TRANSITION REPORT</h1>
            <!-- <a href="#"><i class="fal fa-plus"></i> Add</a> -->
          </div>

          <div class="card mb-4">
            <div class="card-body">
              <form method="post" @submit.prevent="OnSubmit"> 
                <div class="row">
                  <div class="col-sm-12">
                    <div class="mb-3">
                      <label class="form-label"
                        >What are your future plan?</label
                      >
                      <textarea class="form-control textarea" v-model="future_plan"></textarea>
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="mb-3">
                      <label class="form-label"
                        >What is your short-term goal?</label
                      >
                      <textarea class="form-control textarea" v-model="short_term_goal"></textarea>
                    </div>
                  </div>
                </div>
                <!-- close-row -->
                <div class="row">
                  <div class="col-sm-12">
                    <div class="mb-3">
                      <label class="form-label"
                        >What is your long-term goal?</label
                      >
                      <textarea class="form-control textarea" v-model="long_term_goal"></textarea>
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="mb-3">
                      <label class="form-label"
                        >If you had to make a big decision today who you call?
                        Who have you called in the past?</label
                      >
                      <textarea class="form-control textarea" v-model="who_have_you_called_past"></textarea>
                    </div>
                  </div>
                </div>
                <!-- close-row -->

                <div class="row">
                  <div class="col-sm-12">
                    <label class="form-label"
                      >Who can help with your career goals?</label
                    >
                    <table class="with-full goals mb-3">
                      <thead>
                        <tr>
                          <th></th>
                          <th>Yes or No</th>
                          <th>Name Of Supports(s) Preferred</th>
                          <th>Contact Information</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>My Case Manager</td>
                          <td>
                            <div class="form-check form-switch">
                              <input class="form-check-input" type="checkbox" v-model="my_case_manager_yes_no" />
                            </div>
                          </td>
                          <td>
                            <input type="text" class="form-control" name="" v-model="my_case_manager_name"/>
                          </td>
                          <td>
                            <input type="text" class="form-control" name="" v-model="my_case_manager_contact"/>
                          </td>
                        </tr>
                        <tr>
                          <td>My Therapist</td>
                          <td>
                            <div class="form-check form-switch">
                              <input class="form-check-input" type="checkbox" v-model="my_therapist_yes_no" />
                            </div>
                          </td>
                          <td>
                            <input type="text" class="form-control" name="" v-model="my_therapist_name" />
                          </td>
                          <td>
                            <input type="text" class="form-control" name="" v-model="my_therapist_contact"/>
                          </td>
                        </tr>
                        <tr>
                          <td>My Family</td>
                          <td>
                            <div class="form-check form-switch">
                              <input class="form-check-input" type="checkbox" v-model="my_family_yes_no"/>
                            </div>
                          </td>
                          <td>
                            <input type="text" class="form-control" name="" v-model="my_family_name"/>
                          </td>
                          <td>
                            <input type="text" class="form-control" name="" v-model="my_family_contact" />
                          </td>
                        </tr>
                        <tr>
                          <td>My Friend</td>
                          <td>
                            <div class="form-check form-switch">
                              <input class="form-check-input" type="checkbox" v-model="my_friend_yes_no" />
                            </div>
                          </td>
                          <td>
                            <input type="text" class="form-control" name="" v-model="my_friend_name"/>
                          </td>
                          <td>
                            <input type="text" class="form-control" name="" v-model="my_friend_contact"/>
                          </td>
                        </tr>
                        <tr>
                          <td>My Significant Other</td>
                          <td>
                            <div class="form-check form-switch">
                              <input class="form-check-input" type="checkbox" v-model="my_significant_other_yes_no" />
                            </div>
                          </td>
                          <td>
                            <input type="text" class="form-control" name="" v-model="my_significant_other_name"/>
                          </td>
                          <td>
                            <input type="text" class="form-control" name="" v-model="my_significant_other_contact"/>
                          </td>
                        </tr>
                        <tr>
                          <td>Clergy</td>
                          <td>
                            <div class="form-check form-switch">
                              <input class="form-check-input" type="checkbox" v-model="clergy_yes_no" />
                            </div>
                          </td>
                          <td>
                            <input type="text" class="form-control" name="" v-model="clergy_name"/>
                          </td>
                          <td>
                            <input type="text" class="form-control" name="" v-model="clergy_contact"/>
                          </td>
                        </tr>
                        <tr>
                          <td>Benefit Planner</td>
                          <td>
                            <div class="form-check form-switch">
                              <input class="form-check-input" type="checkbox" v-model="benefit_planner_yes_no" />
                            </div>
                          </td>
                          <td>
                            <input type="text" class="form-control" name="" v-model="benefit_planner_name"/>
                          </td>
                          <td>
                            <input type="text" class="form-control" name="" v-model="benefit_planner_contact"/>
                          </td>
                        </tr>
                        <tr>
                          <td>Other</td>
                          <td>
                            <div class="form-check form-switch">
                              <input class="form-check-input" type="checkbox" v-model="other_yes_no" />
                            </div>
                          </td>
                          <td>
                            <input type="text" class="form-control" name="" v-model="other_name"/>
                          </td>
                          <td>
                            <input type="text" class="form-control" name="" v-model="other_contact"/>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <!-- close-row -->

                <div class="row">
                  <div class="col-sm-12">
                    <div class="mb-3">
                      <label class="form-label"
                        >Should we schedule a meeting with any of your supports
                        to discuss the transition?</label
                      >
                      <textarea class="form-control textarea" v-model="schedule_meeting_discuss_for_transition"></textarea>
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="mb-3">
                      <label class="form-label"
                        >If you are employed, how often do you want someone to
                        check in with you about your job? Who should check in
                        with you?
                      </label>
                      <textarea class="form-control textarea" v-model="who_check_in_with_you"></textarea>
                    </div>
                  </div>
                </div>
                <!-- close-row -->

                <div class="row">
                  <div class="col-sm-12">
                    <div class="mb-3">
                      <label class="form-label"
                        >If you are leaving IPS unemployed when would be a good
                        time to ask you about returning to IPS for Repeated IPS
                        for help with employment or education? Who should
                        contact you?</label
                      >
                      <textarea class="form-control textarea" v-model="who_contact_you"></textarea>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label"
                        >How would you like to be contacted?</label
                      >
                      <select class="form-select" v-model="how_would_like_to_contacted">
                        <option value="">Please Select</option>
                        <option value="Call">Call</option>
                        <option value="Email">Email</option>
                        <option value="Letter">Letter</option>
                      </select>
                    </div>
                  </div>
                </div>
                <!-- close-row -->

                <div class="row">
                  <div class="col-sm-12">
                    <div class="mb-3">
                      <label class="form-label"
                        >What are some tools/coping strategies you use or have
                        used in the past on the job to manage stress?
                      </label>
                      <textarea class="form-control textarea" v-model="coping_strategies"></textarea>
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="mb-3">
                      <label class="form-label"
                        >How would you know if you started to feel dissatisfied
                        with your job or that you were having other problems?
                      </label>
                      <textarea class="form-control textarea" v-model="dissatisfied_with_your_job"></textarea>
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="mb-3">
                      <label class="form-label"
                        >What are the reasons to re-connect to IPS in the
                        future? (Help leaving current job, help to find a new
                        job, help advocating for a promotion or raise,
                        assistance with training or education, benefits
                        planning, etc).
                      </label>
                      <textarea class="form-control textarea" v-model="reasons_to_re_connect_to_ips"></textarea>
                    </div>
                  </div>
                </div>
                <!-- close-row -->

                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Patient Name</label>
                      <input type="text" class="form-control" v-model="patient_name" />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Doctor Name</label>
                      <input type="text" class="form-control" v-model="doctor_name" />
                    </div>
                  </div>
                </div>
                <!-- close-row -->

                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Date</label>
                      <input type="date" class="form-control" v-model="transition_report_date" />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Date</label>
                      <input type="date" class="form-control" v-model="date" />
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
import CommonHeader from '../../../components/CommonHeader.vue';
import CommonSidebar from '../../../components/CommonSidebar.vue';
export default {
  components: { CommonSidebar, CommonHeader },
  name: "job-transition-report",
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
      Id: 0,
      future_plan: "",
      short_term_goal: "",
      long_term_goal: "",
      who_have_you_called_past: "",
      my_case_manager_yes_no: "0",
      my_therapist_yes_no: "0",
      my_family_yes_no: "0",
      my_friend_yes_no: "0",
      my_significant_other_yes_no: "0",
      clergy_yes_no: "0",
      benefit_planner_yes_no: "0",
      other_yes_no: "0",
      schedule_meeting_discuss_for_transition: "",
      who_check_in_with_you: "",
      who_contact_you: "",
      how_would_like_to_contacted: "",
      coping_strategies: "",
      dissatisfied_with_your_job: "",
      reasons_to_re_connect_to_ips: "",
      patient_name: "",
      doctor_name: "",
      transition_report_date: "",
      date: "",
      my_case_manager_name: "",
      my_case_manager_contact: "",
      my_therapist_name: "",
      my_therapist_contact: "",
      my_family_name: "",
      my_family_contact: "",
      my_friend_name: "",
      my_friend_contact: "",
      my_significant_other_name: "",
      my_significant_other_contact: "",
      clergy_name: "",
      clergy_contact: "",
      benefit_planner_name: "",
      benefit_planner_contact: "",
      other_name: "",
      other_contact: "",
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
      pid:0,
      type:""
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
    this.GetList();
    let urlParams1 = new URLSearchParams(window.location.search);
    this.pid = urlParams1.get("pid");
    this.type = urlParams1.get("type");
    if (this.pid) {
      this.getdetails();
    }
  },
  methods: {
    async OnSubmit() {
      this.validate = true;
      this.errorList = [];
      try {
        if (!this.future_plan) {
          this.errorList.push("What are your future plan? is required");
        }
        if (!this.short_term_goal) {
          this.errorList.push("What is your short-term goal? is required");
        }
        if (!this.long_term_goal) {
          this.errorList.push("What is your long-term goal? is required");
        }
        if (!this.who_have_you_called_past) {
          this.errorList.push(
            "If you had to make a big decision today who you call? Who have you called in the past? is required"
          );
        }
        if (!this.schedule_meeting_discuss_for_transition) {
          this.errorList.push(
            "Should we schedule a meeting with any of your supports to discuss the transition? is required"
          );
        }
        if (!this.who_check_in_with_you) {
          this.errorList.push(
            "If you are employed, how often do you want someone to check in with you about your job? Who should check in with you? is required"
          );
        }
        if (!this.who_contact_you) {
          this.errorList.push(
            "If you are leaving IPS unemployed when would be a good time to ask you about returning to IPS for Repeated IPS for help with employment or education? Who should contact you? is required"
          );
        }
        if (!this.how_would_like_to_contacted) {
          this.errorList.push(
            "How would you like to be contacted? is required"
          );
        }
        if (!this.coping_strategies) {
          this.errorList.push(
            "What are some tools/coping strategies you use or have used in the past on the job to manage stress? is required"
          );
        }
        if (!this.dissatisfied_with_your_job) {
          this.errorList.push(
            "How would you know if you started to feel dissatisfied with your job or that you were having other problems? is required"
          );
        }
        if (!this.reasons_to_re_connect_to_ips) {
          this.errorList.push(
            "What are the reasons to re-connect to IPS in the future? (Help leaving current job, help to find a new job, help advocating for a promotion or raise, assistance with training or education, benefits planning, etc). is required"
          );
        }
        if (!this.patient_name) {
          this.errorList.push("Patient Name is required");
        }
        if (!this.doctor_name) {
          this.errorList.push("Doctor Name is required");
        }
        if (!this.transition_report_date) {
          this.errorList.push("Date is required");
        }
        if (!this.date) {
          this.errorList.push("Date is required");
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
          this.future_plan &&
          this.short_term_goal &&
          this.long_term_goal &&
          this.who_have_you_called_past &&
          //  this.my_case_manager_yes_no &&
          //  this.my_therapist_yes_no &&
          //  this.my_family_yes_no &&
          //   this.my_friend_yes_no &&
          //   this.my_significant_other_yes_no &&
          //   this.clergy_yes_no &&
          //   this.benefit_planner_yes_no &&
          //   this.other_yes_no &&
          //   this.my_case_manager_name &&
          //   this.my_case_manager_contact &&
          //   this.my_therapist_name &&
          //    this.my_therapist_contact &&
          //   this.my_family_name &&
          //    this.my_family_contact &&
          //   this.my_friend_name &&
          //  this.my_friend_contact &&
          //  this.my_significant_other_name &&
          //   this.my_significant_other_contact &&
          //   this.clergy_name &&
          //   this.clergy_contact &&
          //   this.benefit_planner_name &&
          //   this.benefit_planner_contact &&
          //    this.other_name &&
          //    this.other_contact &&
          this.schedule_meeting_discuss_for_transition &&
          this.who_check_in_with_you &&
          this.who_contact_you &&
          this.how_would_like_to_contacted &&
          this.coping_strategies &&
          this.dissatisfied_with_your_job &&
          this.reasons_to_re_connect_to_ips &&
          this.patient_name &&
          this.doctor_name &&
          this.transition_report_date &&
          this.date &&
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
            "intervention/job-transition-report",
            {
              added_by: this.userdetails.user.id,
              patient_id: this.Id,
              future_plan: this.future_plan,
              short_term_goal: this.short_term_goal,
              long_term_goal: this.long_term_goal,
              who_have_you_called_past: this.who_have_you_called_past,
              my_case_manager_yes_no: this.my_case_manager_yes_no,
              my_therapist_yes_no: this.my_therapist_yes_no,
              my_family_yes_no: this.my_family_yes_no,
              my_friend_yes_no: this.my_friend_yes_no,
              my_significant_other_yes_no: this.my_significant_other_yes_no,
              clergy_yes_no: this.clergy_yes_no,
              benefit_planner_yes_no: this.benefit_planner_yes_no,
              other_yes_no: this.other_yes_no,
              my_case_manager_name: this.my_case_manager_name,
              my_case_manager_contact: this.my_case_manager_contact,
              my_therapist_name: this.my_therapist_name,
              my_therapist_contact: this.my_therapist_contact,
              my_family_name: this.my_family_name,
              my_family_contact: this.my_family_contact,
              my_friend_name: this.my_friend_name,
              my_friend_contact: this.my_friend_contact,
              my_significant_other_name: this.my_significant_other_name,
              my_significant_other_contact: this.my_significant_other_contact,
              clergy_name: this.clergy_name,
              clergy_contact: this.clergy_contact,
              benefit_planner_name: this.benefit_planner_name,
              benefit_planner_contact: this.benefit_planner_contact,
              other_name: this.other_name,
              other_contact: this.other_contact,
              schedule_meeting_discuss_for_transition:
                this.schedule_meeting_discuss_for_transition,
              who_check_in_with_you: this.who_check_in_with_you,
              who_contact_you: this.who_contact_you,
              how_would_like_to_contacted: this.how_would_like_to_contacted,
              coping_strategies: this.coping_strategies,
              dissatisfied_with_your_job: this.dissatisfied_with_your_job,
              reasons_to_re_connect_to_ips: this.reasons_to_re_connect_to_ips,
              patient_name: this.patient_name,
              doctor_name: this.doctor_name,
              transition_report_date: this.transition_report_date,
              date: this.date,
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
    resetmodel() {
      this.future_plan = "";
      this.short_term_goal = "";
      this.long_term_goal = "";
      this.who_have_you_called_past = "";
      this.my_case_manager_yes_no = "";
      this.my_therapist_yes_no = "";
      this.my_family_yes_no = "";
      this.my_friend_yes_no = "";
      this.my_significant_other_yes_no = "";
      this.clergy_yes_no = "";
      this.benefit_planner_yes_no = "";
      this.other_yes_no = "";
      this.schedule_meeting_discuss_for_transition = "";
      this.who_check_in_with_you = "";
      this.who_contact_you = "";
      this.how_would_like_to_contacted = "";
      this.coping_strategies = "";
      this.dissatisfied_with_your_job = "";
      this.reasons_to_re_connect_to_ips = "";
      this.patient_name = "";
      this.doctor_name = "";
      this.transition_report_date = "";
      this.date = "";
      this.my_case_manager_name = "";
      this.my_case_manager_contact = "";
      this.my_therapist_name = "";
      this.my_therapist_contact = "";
      this.my_family_name = "";
      this.my_family_contact = "";
      this.my_friend_name = "";
      this.my_friend_contact = "";
      this.my_significant_other_name = "";
      this.my_significant_other_contact = "";
      this.clergy_name = "";
      this.clergy_contact = "";
      this.benefit_planner_name = "";
      this.benefit_planner_contact = "";
      this.other_name = "";
      this.other_contact = "";
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
          type: "JobTransitionReport",
        },
        { headers }
      );
      if (response.data.code == 200) {
        // window.alert(response.data.Data[0].patient_mrn_id);

        this.Id = response.data.Data[0].patient_id;

              this.future_plan= response.data.Data[0].future_plan;
              this.short_term_goal= response.data.Data[0].short_term_goal;
              this.long_term_goal= response.data.Data[0].long_term_goal;
              this.who_have_you_called_past= response.data.Data[0].who_have_you_called_past;
             this.my_case_manager_yes_no= response.data.Data[0].my_case_manager_yes_no;
              this.my_therapist_yes_no= response.data.Data[0].my_therapist_yes_no;
              this.my_family_yes_no= response.data.Data[0].my_family_yes_no;
              this.my_friend_yes_no= response.data.Data[0].my_friend_yes_no;
              this.my_significant_other_yes_no= response.data.Data[0].my_significant_other_yes_no;
              this.clergy_yes_no= response.data.Data[0].clergy_yes_no;
              this.benefit_planner_yes_no= response.data.Data[0].benefit_planner_yes_no;
              this.other_yes_no= response.data.Data[0].other_yes_no;
              this.my_case_manager_name= response.data.Data[0].my_case_manager_name;
              this.my_case_manager_contact= response.data.Data[0].my_case_manager_contact;
              this.my_therapist_name= response.data.Data[0].my_therapist_name;
              this.my_therapist_contact= response.data.Data[0].my_therapist_contact;
              this.my_family_name= response.data.Data[0].my_family_name;
              this.my_family_contact= response.data.Data[0].my_family_contact;
              this.my_friend_name= response.data.Data[0].my_friend_name;
              this.my_friend_contact= response.data.Data[0].my_friend_contact;
              this.my_significant_other_name= response.data.Data[0].my_significant_other_name;
              this.my_significant_other_contact= response.data.Data[0].my_significant_other_contact;
              this.clergy_name= response.data.Data[0].clergy_name;
              this.clergy_contact= response.data.Data[0].clergy_contact;
              this.benefit_planner_name= response.data.Data[0].benefit_planner_name;
              this.benefit_planner_contact= response.data.Data[0].benefit_planner_contact;
              this.other_name= response.data.Data[0].other_name;
              this.other_contact= response.data.Data[0].other_contact;
              this.schedule_meeting_discuss_for_transition=
                response.data.Data[0].schedule_meeting_discuss_for_transition;
              this.who_check_in_with_you= response.data.Data[0].who_check_in_with_you;
              this.who_contact_you= response.data.Data[0].who_contact_you;
              this.how_would_like_to_contacted= response.data.Data[0].how_would_like_to_contacted;
              this.coping_strategies= response.data.Data[0].coping_strategies;
              this.dissatisfied_with_your_job= response.data.Data[0].dissatisfied_with_your_job;
              this.reasons_to_re_connect_to_ips= response.data.Data[0].reasons_to_re_connect_to_ips;
              this.patient_name= response.data.Data[0].patient_name;
              this.doctor_name= response.data.Data[0].doctor_name;
              this.transition_report_date= response.data.Data[0].transition_report_date;
              this.date= response.data.Data[0].date;
              this.location_services_id= response.data.Data[0].location_of_service;
              this.type_diagnosis_id= response.data.Data[0].type_of_diagnosis;
              this.category_services= response.data.Data[0].category_of_services;
              this.services_id= response.data.Data[0].services;
              this.code_id= response.data.Data[0].icd_9_code;
              this.sub_code_id = response.data.Data[0].icd_9_subcode;
              this.complexity_services_id= response.data.Data[0].complexity_of_services;
              this.outcome_id= response.data.Data[0].outcome;
              this.medication_des= response.data.Data[0].medication_prescription;
        this.GetList();
        this.GetPatientdetails();
      } else {
        window.alert("Something went wrong");
      }
    },
  },
};
</script>