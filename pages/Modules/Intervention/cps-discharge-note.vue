<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>CPS DISCHARGE NOTE</h1>
            <!-- <a href="#"><i class="fal fa-plus"></i> Add</a> -->
          </div>

          <div class="card mb-4">
            <div class="card-body">
              <table class="notes notes-sub">
                <tbody>
                  <tr>
                    <th>Name:</th>
                    <td><input type="text" class="form-control" name="" v-model="name"/></td>
                  </tr>
                  <tr>
                    <th>MRN:</th>
                    <td><input type="text" class="form-control" name="" v-model="mrn"/></td>
                  </tr>
                  <tr>
                    <th>Date:</th>
                    <td><input type="date" class="form-control" name="" v-model="cps_discharge_date"/></td>
                  </tr>
                  <tr>
                    <th>Time:</th>
                    <td><input type="time" class="form-control" name="" v-model="time" /></td>
                  </tr>
                  <tr>
                    <th>Staff Name:</th>
                    <td><input type="text" class="form-control" name="" v-model="staff_name" /></td>
                  </tr>
                  <tr>
                    <th>Diagnosis:</th>
                    <td>
                      <select class="form-select" v-model="diagnosis_id">
                        <option value="">Select Diagnosis</option>
                        <option
                          v-for="catcode in diagonisislist"
                          v-bind:key="catcode.id"
                          v-bind:value="catcode.id"
                        >
                        {{ catcode.icd_code }} {{catcode.icd_name}}
                        </option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <th>Post Intervention:</th>
                    <td>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio11"
                          value="Good" v-model="post_intervention"
                        />
                        <label class="form-check-label" for="inlineRadio11"
                          >Good
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio21"
                          value="Satisfactory" v-model="post_intervention"
                        />
                        <label class="form-check-label" for="inlineRadio21"
                          >Satisfactory
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio31"
                          value="NOT SATISFACTORY" v-model="post_intervention"
                        />
                        <label class="form-check-label" for="inlineRadio31"
                          >NOT SATISFACTORY</label
                        >
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio32" v-model="post_intervention"
                          value="POOR"
                        />
                        <label class="form-check-label" for="inlineRadio32"
                          >POOR
                        </label>
                      </div>
                    </td>
                  </tr>




                     <tr v-if="!pid">
                    <th class="vertical-align-top">Psychopathology</th>
                    <td>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name=""
                          id="1"  @click="OnPsychopathology('Symptoms (Delusion/hallucinnation) Controlled',$event)"
                        />
                        <label class="form-check-label" for="1">
                          Symptoms (Delusion/hallucinnation) Controlled
                        </label>
                      </div>

                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name=""
                          id="2" @click="OnPsychopathology('No Persistent Aggressive/risk To Self Or Others',$event)"
                        />
                        <label class="form-check-label" for="2">
                          No Persistent Aggressive/risk To Self Or Others
                        </label>
                      </div>

                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name=""
                          id="3" @click="OnPsychopathology('No Frequent Relapse Episode (>2 Admission Per Year)',$event)"
                        />
                        <label class="form-check-label" for="3">
                          No Frequent Relapse Episode (>2 Admission Per Year)
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name=""
                          id="4" @click="OnPsychopathology('Compliance To Medication',$event)"
                        />
                        <label class="form-check-label" for="4">
                          Compliance To Medication
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name=""
                          id="5" @click="OnPsychopathology('No Or Tolerable Side Effect Or Treatment',$event)"
                        />
                        <label class="form-check-label" for="5">
                          No Or Tolerable Side Effect Or Treatment
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name=""
                          id="6" @click="OnPsychopathology('Insight Towards Illness And Treatment',$event)"
                        />
                        <label class="form-check-label" for="6">
                          Insight Towards Illness And Treatment
                        </label>
                      </div>
                    </td>
                  </tr>

                  <tr v-if="!pid">
                    <th class="vertical-align-top">Psychosocial:</th>
                    <td>
                      <table class="sub-table">
                        <tbody>
                          <tr>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  name=""
                                  id="11" @click="OnPsychosocial('Accommodation',$event)"
                                />
                                <label class="form-check-label" for="11">
                                  Accommodation
                                </label>
                              </div>

                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  name=""
                                  id="21" @click="OnPsychosocial('Financial Support',$event)"
                                />
                                <label class="form-check-label" for="21">
                                  Financial Support
                                </label>
                              </div>

                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  name=""
                                  id="31" @click="OnPsychosocial('Occupational Functioning',$event)"
                                />
                                <label class="form-check-label" for="31">
                                  Occupational Functioning
                                </label>
                              </div>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  name=""
                                  id="41" @click="OnPsychosocial('Living Skill',$event)"
                                />
                                <label class="form-check-label" for="41">
                                  Living Skill
                                </label>
                              </div>
                            </td>

                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  name="mode-Of-therapy"
                                  id="66" @click="OnPsychosocial('Social Activities',$event)"
                                />
                                <label class="form-check-label" for="66">
                                  Social Activities
                                </label>
                              </div>

                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  name="mode-Of-therapy"
                                  id="77" @click="OnPsychosocial('Family Cooperation/involvement/support',$event)"
                                />
                                <label class="form-check-label" for="77">
                                  Family Cooperation/involvement/support
                                </label>
                              </div>

                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  name="mode-Of-therapy"
                                  id="8" @click="OnPsychosocial('Regular Appointment With Doctor',$event)"
                                />
                                <label class="form-check-label" for="8">
                                  Regular Appointment With Doctor
                                </label>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>

                  <tr v-if="!pid">
                    <th class="vertical-align-top">Potential Risk:</th>
                    <td>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name=""
                          id="3.1" @click="Onpotentialrisk('Aggression',$event)"
                        />
                        <label class="form-check-label" for="3.1">
                          Aggression
                        </label>
                      </div>

                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name=""
                          id="3.2" @click="Onpotentialrisk('Suicidality',$event)"
                        />
                        <label class="form-check-label" for="3.2">
                          Suicidality
                        </label>
                      </div>

                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name=""
                          id="3.3" @click="Onpotentialrisk('Criminality',$event)"
                        />
                        <label class="form-check-label" for="3.3">
                          Criminality
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name=""
                          id="3.4" @click="Onpotentialrisk('Comorbid Substance Abuse',$event)"
                        />
                        <label class="form-check-label" for="3.4">
                          Comorbid Substance Abuse
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name=""
                          id="3.5" @click="Onpotentialrisk('Abuse Or Neglect',$event)"
                        />
                        <label class="form-check-label" for="3.5">
                          Abuse Or Neglect
                        </label>
                      </div>
                    </td>
                  </tr>

                     <tr v-if="pid">
                    <th class="vertical-align-top">Psychopathology</th>
                    <td v-for="(phys,index) in phylist" :key="index">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name=""
                          id="1"  checked
                        />
                        <label class="form-check-label" for="1">
                         {{phys}}
                        </label>
                      </div>
                    </td>
                  </tr>

                   <tr v-if="pid">
                    <th class="vertical-align-top">Psychosocial:</th>
                    <td>
                      <table class="sub-table">
                        <tbody>
                          <tr>
                            <td v-for="(psycho,index) in psycholist" :key="index">
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  name=""
                                  id="11" checked
                                />
                                <label class="form-check-label" for="11">
                                  {{psycho}}
                                </label>
                              </div>

                            </td>

                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>

                  <tr v-if="pid">
                    <th class="vertical-align-top">Potential Risk:</th>
                    <td v-for="(potential,index) in potentiallist" :key="index">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name=""
                          id="3.1" checked
                        />
                        <label class="form-check-label" for="3.1">
                          {{potential}}
                        </label>
                      </div>

                    </td>
                  </tr>

                  <tr >
                    <th>Category Of Discharge:</th>
                    <td>
                      <select class="form-select" v-model="category_of_discharge">
                      <option value="">Please Select</option>
                                                <option
              v-for="dis in dischargelist"
              v-bind:key="dis.id"
              v-bind:value="dis.id"
            >
              {{ dis.name }}
            </option>
                      </select>
                    </td>
                  </tr>

                  <tr>
                    <td colspan="2" class="form-heading">Outcome</td>
                  </tr>

                  <tr>
                    <th>Discharge Diagnosis:</th>
                    <td>
                      <select class="form-select" v-model="discharge_diagnosis">
                       <option value="">Select Diagnosis</option>
                                <option
              v-for="catcode in diagonisislist"
              v-bind:key="catcode.id"
              v-bind:value="catcode.id"
            >
            {{ catcode.icd_code }} {{catcode.icd_name}}
            </option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <th>Medication:</th>
                    <td>
                      <textarea class="form-control textarea" v-model="outcome_medication"></textarea>
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

              <table class="notes notes-sub">
                <tbody>
                  <tr>
                    <td colspan="2" class="form-heading">Verification</td>
                  </tr>

                  <tr>
                    <th>Specialist Name :</th>
                    <td>
                      <input type="text" class="form-control" name="" v-model="specialist_name"/>
                    </td>
                  </tr>

                  <tr>
                    <th>Date :</th>
                    <td>
                      <input type="date" class="form-control" v-model="verification_date" />
                    </td>
                  </tr>

                  <tr>
                    <th>Case Manager/Staff Name:</th>
                    <td>
                      <input type="text" class="form-control" v-model="case_manager" />
                    </td>
                  </tr>

                  <tr>
                    <th>Date:</th>
                    <td>
                      <input type="date" class="form-control" v-model="date" />
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
                       <div class="d-flex" v-if="this.type!='view'">
                    <button
                      @click="GoBack"
                      class="btn btn-primary btn-text"
                      ><i class="fa fa-arrow-alt-to-left"></i> Back
                    </button>
                    <div  class="btn-right">
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
    this.appId = urlParams.get("appId");

    if (this.Id) {
      this.staff_name = this.userdetails.user.name;
      this.GetList();
      this.GetPatientdetails();
    }
    let urlParams1 = new URLSearchParams(window.location.search);
    this.pid = urlParams1.get("pid");
    this.type = urlParams1.get("type");
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
      Psychopathologyselected: [],
      Psychosocialselected: [],
      potentialriskselected: [],
      assistancelist: [],
      externallist: [],
      Id: 0,
      name: "",
      mrn: "",
      cps_discharge_date: "",
      time: "",
      staff_name: "",
      diagnosis_id: "",
      post_intervention: "",
      psychopathology: "",
      potential_risk: "",
      category_of_discharge: "",
      discharge_diagnosis: "",
      outcome_medication: "",
      psychosocial: "",
      location_service: "",
      verification_date: "",
      specialist_name: "",
      case_manager: "",
      date: "",
      location_services: 0,
      type_diagnosis_id: 0,
      category_services: "",
      code_id: 0,
      sub_code_id: 0,
      complexity_services: 0,
      outcome: 0,
      medication_des: "None.",
      patient_mrn_id: "",
      services_id: 0,
      serviceid: 0,
      validate: true,
      pid: 0,
      type: "",
      phylist: [],
      psycholist: [],
      potentiallist: [],
      appId:0,
    };
  },
  methods: {
    async onCreateEvent() {
      if (confirm("Are you sure you want to save this as draft ? ")) {
      try {
        this.loader = true;
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          const response = await this.$axios.post(
            "cps-discharge-note/add",
            {
              added_by: this.userdetails.user.id,
              patient_mrn_id: this.Id,
              name: this.name,
              mrn: this.mrn,
              cps_discharge_date: this.cps_discharge_date,
              time: this.time,
              staff_name: this.staff_name,
              diagnosis: this.diagnosis_id,
              post_intervention: this.post_intervention,
              psychopathology: this.psychopathology,
              potential_risk: this.potential_risk,
              category_of_discharge: this.category_of_discharge,
              discharge_diagnosis: this.discharge_diagnosis,
              outcome_medication: this.outcome_medication,
              psychosocial: this.psychosocial,
              location_service: this.location_services,
              service_category: this.category_services,
              diagnosis_type: this.type_diagnosis_id,
              services_id: this.services_id,
              code_id: this.code_id,
              sub_code_id: this.sub_code_id,
              complexity_services: this.complexity_services,
              verification_date: this.verification_date,
              specialist_name: this.specialist_name,
              outcome: this.outcome,
              medication: this.medication_des,
              case_manager: this.case_manager,
              date: this.date,
              status: "0",
              id:this.pid,
              appId: this.appId,
            },
            { headers }
          );
          console.log("response", response.data);
          if (response.data.code == 200) {
            this.loader = false;
            window.alert("Data are saved successfully!");
            //this.resetmodel();
            this.GoBack();
            // this.$nextTick(() => {
            //   $("#insertpopup").modal("show");
            // });
          } else {
            window.alert("Something went wrong!");
            this.loader = false;
            // this.$nextTick(() => {
            //   $("#errorpopup").modal("show");
            // });
          }
      } catch (e) {}
      }
    },
    async onPublishEvent() {
      if (confirm("Are you sure you want to save this entry ? ")) {
      this.validate = true;
      this.errorList = [];
      if (this.Psychopathologyselected.length > 0) {
        this.Psychopathologyselected.forEach((element) => {
          if (this.psychopathology) {
            this.psychopathology = this.psychopathology + "," + element;
          } else {
            this.psychopathology = element;
          }
        });
      }
      if (this.Psychosocialselected.length > 0) {
        this.Psychosocialselected.forEach((element) => {
          if (this.psychosocial) {
            this.psychosocial = this.psychosocial + "," + element;
          } else {
            this.psychosocial = element;
          }
        });
      }
      if (this.potentialriskselected.length > 0) {
        this.potentialriskselected.forEach((element) => {
          if (this.potential_risk) {
            this.potential_risk = this.potential_risk + "," + element;
          } else {
            this.potential_risk = element;
          }
        });
      }
      try {
        if (!this.name) {
          this.errorList.push("Name is required");
        }
        if (!this.mrn) {
          this.errorList.push("MRN Of Discharge is required");
        }
        if (!this.cps_discharge_date) {
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
        if (!this.post_intervention) {
          this.errorList.push("Post Intervention is required");
        }
        if (!this.psychopathology) {
          this.errorList.push("Psychopathology is required");
        }
        if (!this.psychosocial) {
          this.errorList.push("Psychosocial is required");
        }
        if (!this.potential_risk) {
          this.errorList.push("Potential Risk is required");
        }
        if (!this.category_of_discharge) {
          this.errorList.push("Category Of Discharge is required");
        }
        if (!this.discharge_diagnosis) {
          this.errorList.push("Discharge Diagnosis is required");
        }
        if (!this.outcome_medication) {
          this.errorList.push("Outcome Medication is required");
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
        if (!this.verification_date) {
          this.errorList.push("Date is required");
        }
        if (!this.case_manager) {
          this.errorList.push("Case Manager/Staff Name is required");
        }
        if (!this.date) {
          this.errorList.push("Date is required");
        }
        if (
          this.name &&
          this.mrn &&
          this.cps_discharge_date &&
          this.time &&
          this.staff_name &&
          this.diagnosis_id &&
          this.post_intervention &&
          this.psychopathology &&
          this.potential_risk &&
          this.psychosocial &&
          this.category_of_discharge &&
          this.discharge_diagnosis &&
          this.outcome_medication &&
          this.location_services &&
          this.type_diagnosis_id &&
          this.category_services &&
          this.complexity_services &&
          this.outcome &&
          this.validate &&
          this.specialist_name &&
          this.verification_date &&
          this.case_manager &&
          this.date
        ) {
          this.loader = true;
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          const response = await this.$axios.post(
            "cps-discharge-note/add",
            {
              added_by: this.userdetails.user.id,
              patient_mrn_id: this.Id,
              name: this.name,
              mrn: this.mrn,
              cps_discharge_date: this.cps_discharge_date,
              time: this.time,
              staff_name: this.staff_name,
              diagnosis: this.diagnosis_id,
              post_intervention: this.post_intervention,
              psychopathology: this.psychopathology,
              potential_risk: this.potential_risk,
              category_of_discharge: this.category_of_discharge,
              discharge_diagnosis: this.discharge_diagnosis,
              outcome_medication: this.outcome_medication,
              psychosocial: this.psychosocial,
              location_service: this.location_services,
              service_category: this.category_services,
              diagnosis_type: this.type_diagnosis_id,
              services_id: this.services_id,
              code_id: this.code_id,
              sub_code_id: this.sub_code_id,
              complexity_services: this.complexity_services,
              verification_date: this.verification_date,
              specialist_name: this.specialist_name,
              outcome: this.outcome,
              medication: this.medication_des,
              case_manager: this.case_manager,
              date: this.date,
              status: "1",
              id:this.pid,
              appId: this.appId,
            },
            { headers }
          );
          console.log("response", response.data);
          if (response.data.code == 200 || response.data.code == "200" ) {
            window.alert("Data are saved successfully!");
            // this.loader = false;
            this.GoBack();
            //this.resetmodel();
            // this.$nextTick(() => {
            //   $("#insertpopup").modal("show");
            // });
          } else {
            window.alert("Something went wrong!");
            this.resetmodel();
            // this.loader = false;
            // this.$nextTick(() => {
            //   $("#errorpopup").modal("show");
            // });
          }
        }
      } catch (e) {}
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
      if (response.data.code == 200) {
        console.log("my details", this.patientdetails);
        this.mrn = response.data.list[0].patient_mrn;
        this.name = response.data.list[0].name_asin_nric;
        // console.log("my details", this.patientdetails);
      } else {
        window.alert("Something went wrong");
      }
    },
     async GetPatientdetails1(id) {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "patient-registration/getPatientRegistrationById",
        {
          id: id,
        },
        { headers }
      );
      if (response.data.code == 200) {
        console.log("my details", this.patientdetails);
        this.mrn = response.data.list[0].patient_mrn;
        this.name = response.data.list[0].name_asin_nric;
        // console.log("my details", this.patientdetails);
      } else {
        window.alert("Something went wrong");
      }
    },
    resetmodel() {
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
      this.medication_des = "None.";
    },
    OnPsychopathology(val, event) {
      if (event.target.checked) {
        this.Psychopathologyselected.push(val);
      } else {
        if (this.Psychopathologyselected.indexOf(val) != -1)
          this.Psychopathologyselected.splice(
            this.Psychopathologyselected.indexOf(val),
            1
          );
      }
    },
    OnPsychosocial(val, event) {
      if (event.target.checked) {
        this.Psychosocialselected.push(val);
      } else {
        if (this.Psychosocialselected.indexOf(val) != -1)
          this.Psychosocialselected.splice(
            this.Psychosocialselected.indexOf(val),
            1
          );
      }
    },
    Onpotentialrisk(val, event) {
      if (event.target.checked) {
        this.potentialriskselected.push(val);
      } else {
        if (this.potentialriskselected.indexOf(val) != -1)
          this.potentialriskselected.splice(
            this.potentialriskselected.indexOf(val),
            1
          );
      }
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
          type: "CpsDischargeNote",
        },
        { headers }
      );
      if (response.data.code == 200) {
        // window.alert(response.data.Data[0].patient_mrn_id);

        this.Id = response.data.Data[0].patient_mrn_id;
        this.GetPatientdetails1(response.data.Data[0].patient_mrn_id);
        this.name = response.data.Data[0].name;
        this.time = response.data.Data[0].time;
        this.comment = response.data.Data[0].comment;
        this.mrn = response.data.Data[0].mrn;
        this.cps_discharge_date = response.data.Data[0].cps_discharge_date;
        this.staff_name = response.data.Data[0].staff_name;
        this.diagnosis_id = parseInt(response.data.Data[0].diagnosis);
        this.post_intervention = response.data.Data[0].post_intervention;
        this.psychopathology = response.data.Data[0].psychopathology;
        this.phylist = this.psychopathology.split(",");
        this.psychosocial = response.data.Data[0].psychosocial;
        this.psycholist = this.psychosocial.split(",");
        this.potential_risk = response.data.Data[0].potential_risk;
        this.potentiallist = this.potential_risk.split(",");

        this.category_of_discharge =
          response.data.Data[0].category_of_discharge;
        this.discharge_diagnosis = response.data.Data[0].discharge_diagnosis;
        this.outcome_medication = response.data.Data[0].outcome_medication;

        this.location_services = response.data.Data[0].location_service;
        this.type_diagnosis_id = response.data.Data[0].diagnosis_type;
        this.category_services = response.data.Data[0].service_category;
        this.code_id = response.data.Data[0].code_id;
        this.sub_code_id = response.data.Data[0].sub_code_id;
        this.complexity_services = response.data.Data[0].complexity_services;
        this.outcome = response.data.Data[0].outcome;
        this.medication_des = response.data.Data[0].medication;
        this.services_id = response.data.Data[0].services_id;
        this.specialist_name = response.data.Data[0].specialist_name;
        this.verification_date = response.data.Data[0].verification_date;
        this.date = response.data.Data[0].date;
        this.case_manager = response.data.Data[0].case_manager;
        this.GetList();


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
    GoBack(){
      this.$router.push({
              path: "/modules/Intervention/patient-summary",
              query: { id: this.Id,appId: this.appId },
            });
    }
  },
};
</script>
