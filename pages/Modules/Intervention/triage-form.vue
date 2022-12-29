<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>TRIAGE FORM</h1>
          </div>
          <div class="card mb-4">
            <div class="card-body">
              <div>
                <section class="section-border">

                  <div class="form-title mt-0">
                    <h5>Part A: Risk Evaluation</h5>
                  </div>

                  <table class="form-table">
                    <thead>
                      <tr>
                        <th class="black">Risk Assessment Descriptions</th>
                        <th class="black" width="40%">Yes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>History of aggressive and impulsive behavior<small style="color:red">*</small> </td>
                        <td>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="Yes" v-model="risk_history_assressive">
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>History of criminal case<small style="color:red">*</small> </td>
                        <td>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="Yes" v-model="risk_history_criminal" >
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>Deterioration of clinical condition<small style="color:red">*</small> </td>
                        <td>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="Yes"
                              v-model="risk_history_detereotation">
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>Neglect of self care<small style="color:red">*</small> </td>
                        <td>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="Yes" v-model="risk_history_neglect">
                          </div>
                        </td>
                      </tr>

                    </tbody>
                  </table>

                  <table class="form-table">
                    <thead>
                      <tr>
                        <th class="black">Criteria</th>
                        <th class="black" width="20%">Idea(Yes)</th>
                        <th class="black" width="20%">Attempt(Yes)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Suicidal Behaviour<small style="color:red">*</small> </td>
                        <td>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="Yes"
                              v-model="risk_history_suicidal_idea">
                          </div>
                        </td>
                        <td>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="Yes"
                              v-model="risk_history_suicidal_attempt">
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>Homicidal<small style="color:red">*</small>  </td>
                        <td>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="Yes"
                              v-model="risk_history_homicidal_idea">
                          </div>
                        </td>
                        <td>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="Yes"
                              v-model="risk_history_homicidal_attempt">
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>Aggressive<small style="color:red">*</small> </td>
                        <td>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="Yes"
                              v-model="risk_history_aggressive_idea">
                          </div>
                        </td>
                        <td>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="Yes"
                              v-model="risk_history_aggressive_attempt">
                          </div>
                        </td>
                      </tr>

                    </tbody>
                  </table>

                  <div class="form-title mt-0">
                    <h5>Part B: Social Support</h5>
                  </div>

                  <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" value="Yes" v-model="risk_social_has_no_family"
                      id="1">
                    <label class="form-check-label" for="1">
                      Has no family, friends or guardian
                    </label>
                  </div>
                  <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" value="Yes" v-model="risk_homeless" id="2">
                    <label class="form-check-label" for="2">
                      Homeless
                    </label>
                  </div>


                  <div class="form-title mt-0">
                    <h5>Part C: Capacity to work together</h5>
                  </div>

                  <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" v-model="capacity_cannot_give_commitment"
                      value="Yes" id="3">
                    <label class="form-check-label" for="3">
                      Cannot give commitment to work together
                    </label>
                  </div>
                  <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" v-model="capacity_showed_no_interest" value="Yes"
                      id="4">
                    <label class="form-check-label" for="4">
                      Showed no interest in treatment
                    </label>
                  </div>

                  <div class="form-title mt-0">
                    <h5>Outcome</h5>
                  </div>

                  <div class="row">
                    <div class="col-sm-6">
                      <h6 class="mb-3 black">Treatment<small style="color:red">*</small> </h6>
                      <div class="form-check mb-3">
                        <input class="form-check-input" value="Checked Immediately" v-model="treatment_checked"
                          type="radio" name="exampleRadios" id="exampleRadios1" checked>
                        <label class="form-check-label" for="exampleRadios1">
                          Checked Immediately
                        </label>
                      </div>
                      <div class="form-check mb-3">
                        <input class="form-check-input" value="Given an appointment(within 2 weeks)"
                          v-model="treatment_checked" type="radio" name="exampleRadios" id="exampleRadios2">
                        <label class="form-check-label" for="exampleRadios2">
                          Given an appointment(within 2 weeks)
                        </label>
                      </div>
                      <div class="form-check mb-3">
                        <input class="form-check-input" value="Given a regular appointment (within 2-6 weeks)"
                          v-model="treatment_checked" type="radio" name="exampleRadios" id="exampleRadios3">
                        <label class="form-check-label" for="exampleRadios3">
                          Given a regular appointment (within 2-6 weeks)
                        </label>
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <h6 class="mb-3 black">Placement<small style="color:red">*</small> </h6>
                      <div class="form-check mb-3">
                        <input class="form-check-input" value="Referred to the main hospital"
                          v-model="placement_referred" type="radio" name="exampleRadios1" id="exampleRadios4" checked>
                        <label class="form-check-label" for="exampleRadios4">
                          Referred to the main hospital
                        </label>
                      </div>
                      <div class="form-check mb-3">
                        <input class="form-check-input" value="Discharge with treatment" v-model="placement_referred"
                          type="radio" name="exampleRadios1" id="exampleRadios5">
                        <label class="form-check-label" for="exampleRadios5">
                          Discharge with treatment
                        </label>
                      </div>
                    </div>

                  </div>

                </section>

                <section class="section-border">
                  <div class="form-title mt-0">
                    <h5>Screening</h5>
                  </div>

                  <div class="new-form mb-3">
                    <table class="notes th-auto" id="screentable">
                      <thead>
                        <tr>
                          <th>Type of Screening<small style="color:red">*</small> </th>
                          <th>Score<small style="color:red">*</small> </th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody class="optionBox" id="replicatedList">
                        <tr class="block blocks">
                          <td id="cpyThis">
                            <select class="form-select selects" v-model="screening_id">
                              <option value="0">Please Select</option>
                              <option v-for="spec in screenlist" v-bind:key="spec.id" v-bind:value="spec.id">
                                {{ spec.name }}
                              </option>
                            </select>
                          </td>
                          <td>
                            <input type="text" class="form-control scores" placeholder="" v-model="score">
                          </td>

                          <td @click="test">
                            <span class="add-td"><i class="fa fa-plus"></i></span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <!-- <div class="row">
                                        <div class="col-sm-7">
                                            <div class="mb-3">
                                                <label for="" class="form-label">Type of Screening</label>
                                                <select class="form-select" v-model="screening_id">
                                                    <option value="0">Please Select</option>
                                                    <option
              v-for="spec in screenlist"
              v-bind:key="spec.id"
              v-bind:value="spec.id"
            >
              {{ spec.name }}
            </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-sm-3">
                                            <div class="mb-3">
                                                <label for="" class="form-label">Score</label>
                                                <div class="add-box">
                                                    <input type="text" class="form-control" placeholder=""
                                                        v-model="score">
                                                    <td> -->
                  <!-- <span class="add-td"
                                                      ><i class="fa fa-plus"></i
                                                    ></span> -->
                  <!-- </td> -->
                  <!-- </div>
                                            </div>
                                        </div> -->
                  <!-- </div> -->
                </section>


                <section class="section-border mb-2">
                  <div class="form-title mt-0">
                    <h5>Book Appointment</h5>
                  </div>

                  <div class="row">
                    <div class="col-sm-4">
                      <div class="mb-3">
                        <label for="" class="form-label">Date<small style="color:red">*</small> </label>
                        <input type="date" class="form-control" v-model="appointment_date">
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="mb-3">
                        <label for="" class="form-label">Time<small style="color:red">*</small> </label>
                        <input type="time" class="form-control" v-model="appointment_time">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-4">
                      <div class="mb-3">
                        <label for="" class="form-label">Duration<small style="color:red">*</small> </label>
                        <select class="form-select" aria-label="Default select example" v-model="appointment_duration">
                          <option value="0">Select Duration</option>
                          <option value="15">15 Minutes</option>
                          <option value="30">30 Minutes</option>
                          <option value="60">60 Minutes</option>
                          <option value="120">120 Minutes</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="mb-3">
                        <label for="" class="form-label">Appointment Type<small style="color:red">*</small> </label>
                        <select class="form-select" aria-label="Default select example" v-model="appointment_type">
                          <option value="0">Select Appointment Type</option>
                          <option v-for="serv in teamlist" v-bind:key="serv.id" v-bind:value="serv.id">
                            {{ serv.service_name }}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-4">
                      <div class="mb-3">
                        <label for="" class="form-label">Category of Patient<small style="color:red">*</small> </label>
                        <select class="form-select" aria-label="Default select example"
                          v-model="appointment_patient_category">
                          <option value="0">Select Category of Patient</option>
                          <option v-for="cat in categorylist" v-bind:key="cat.id" v-bind:value="cat.id">
                            {{ cat.section_value }}
                          </option>
                        </select>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="mb-3">
                        <label for="" class="form-label">Type of visit<small style="color:red">*</small> </label>
                        <select class="form-select" aria-label="Default select example"
                          v-model="appointment_type_visit">
                          <option value="0">Select Type of Visit</option>
                          <option v-for="vst in visitlist" v-bind:key="vst.id" v-bind:value="vst.id">
                            {{ vst.section_value }}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-4">
                      <div class="mb-3">
                        <label for="" class="form-label">Assigned team<small style="color:red">*</small> </label>
                        <select class="form-select" aria-label="Default select example" v-model="appointment_type"
                          disabled>
                          <option value="0">Select Assigned Team</option>
                          <option v-for="team in teamlist" v-bind:key="team.id" v-bind:value="team.id">
                            {{ team.service_name }}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </section>



                <div class="accordion form-accordion mt-3" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        OCCASION OF SERVICES
                      </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <div class="row mb-3">
                          <label class="col-sm-4 col-form-label">Location Of Services<small style="color:red">*</small> </label>
                          <div class="col-sm-8">
                            <select class="form-select" v-model="location_services_id">
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
                          <label class="col-sm-4 col-form-label">Type Of Diagnosis<small style="color:red">*</small> </label>
                          <div class="col-sm-8">
                            <select class="form-select" v-model="type_diagnosis_id">
                              <option value="0">Select Diagnosis</option>
                              <option v-for="catcode in diagonisislist" v-bind:key="catcode.id"
                                v-bind:value="catcode.id">
                                {{ catcode.icd_code }} {{ catcode.icd_name }}
                              </option>
                            </select>
                          </div>
                        </div>
                        <!-- close-row -->
                        <div class="row mb-3">
                          <label class="col-sm-4 col-form-label">Category Of Services<small style="color:red">*</small>
                          </label>
                          <div class="col-sm-8">
                            <div class="form-check form-check-inline">
                              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                                value="assisstance" v-model="category_services" />
                              <label class="form-check-label" for="inlineRadio1">Assisstance / Supervision</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                                value="clinical-work" v-model="category_services" />
                              <label class="form-check-label" for="inlineRadio2">Clinical Work / Procedure
                              </label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3"
                                value="external" v-model="category_services" />
                              <label class="form-check-label" for="inlineRadio3">External</label>
                            </div>
                          </div>
                        </div>
                        <!-- close-row -->
                        <!-- hide-div -->
                        <div v-if="category_services == 'assisstance'" >
                          <div class="row">
                            <div class="col-md-6 mb-3">
                              <label class="form-label">Services<small style="color:red">*</small> </label>
                              <select class="form-select" v-model="services_id">
                                <option value="0">Select Service</option>
                                <option v-for="slt in assistancelist" v-bind:key="slt.id" v-bind:value="slt.id">
                                  {{ slt.section_value }}
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <!-- 01 -->
                        <div v-if="category_services == 'clinical-work'">
                          <div class="row">
                            <div class="col-md-6 mb-3">
                              <label class="form-label">ICD 9 CODE<small style="color:red">*</small> </label>
                              <select class="form-select" v-model="code_id" @change="onCategorycodebind($event)">
                                <option value="0">Select code</option>
                                <option v-for="type in codelist" v-bind:key="type.id" v-bind:value="type.id">
                                  {{ type.icd_category_code }} {{ type.icd_category_name }}
                                </option>
                              </select>
                            </div>
                            <div class="col-md-6 mb-3">
                              <label class="form-label">ICD 9 SUB CODE<small style="color:red">*</small> </label>
                              <select class="form-select" v-model="sub_code_id">
                                <option value="0">Select sub code</option>
                                <option v-for="catcode in icdcatcodelist" v-bind:key="catcode.id"
                                  v-bind:value="catcode.id">
                                  {{ catcode.icd_code }}
                                  {{ catcode.icd_name }}
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <!-- 02 -->
                        <div  v-if="category_services == 'external'" >
                          <div class="row">
                            <div class="col-md-6 mb-3">
                              <label class="form-label">Services<small style="color:red">*</small> </label>
                              <select class="form-select" v-model="serviceid">
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
                            <label class="form-label">Complexity Of Service<small style="color:red">*</small> </label>
                            <select class="form-select" v-model="complexity_services_id">
                              <option value="0">
                                Select Complexity Of Service
                              </option>
                              <option v-for="cm in comlexcitylist" v-bind:key="cm.id" v-bind:value="cm.id">
                                {{ cm.section_value }}
                              </option>
                            </select>
                          </div>
                          <div class="col-md-6 mb-3">
                            <label class="form-label">Outcome<small style="color:red">*</small> </label>
                            <select class="form-select" v-model="outcome_id">
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
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        MEDICATION
                      </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <div class="col-md-12 mb-3">
                          <label class="form-label">Medication</label>
                          <textarea class="form-control textarea" placeholder="Please Type Prescription Here"
                            v-model="medication_des"></textarea>
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
                  <a @click="GoBack"
                      class="btn btn-primary btn-text"
                      ><i class="fa fa-arrow-alt-to-left"></i> Back</a>
                  <div  class="btn-right" :class="SidebarAccess!=1?'hide':''">
                    <!-- <button type="submit" @click="onCreateEvent()" class="btn btn-warning btn-text">
                      <i class="fa fa-save"></i> Save as draft
                    </button> -->

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
    </div>
  </div>
</template>
<script>
import CommonHeader from "../../../components/CommonHeader.vue";
import CommonSidebar from "../../../components/CommonSidebar.vue";
export default {
  components: { CommonSidebar, CommonHeader },
  name: "triage-form",
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
      teamlist: [],
      visitlist: [],
      categorylist: [],
      screenlist: [],
      Id: 0,
      // appId:0,
      risk_history_assressive: "",
      risk_history_criminal: "",
      risk_history_detereotation: "",
      risk_history_neglect: "",
      risk_history_suicidal_idea: "",
      risk_history_suicidal_attempt: "",
      risk_history_homicidal_idea: "",
      risk_history_homicidal_attempt: "",
      risk_history_aggressive_idea: "",
      risk_history_aggressive_attempt: "",
      risk_social_has_no_family: "",
      risk_homeless: "",
      capacity_cannot_give_commitment: "",
      capacity_showed_no_interest: "",
      treatment_checked: "",
      treatment_given_appointment: "",
      treatment_given_regular: "",
      placement_referred: "",
      placement_discharge: "",
      screening_id: 0,
      score: "",
      appointment_date: "",
      appointment_time: "",
      appointment_duration: 0,
      appointment_type: 0,
      appointment_type_visit: 0,
      appointment_patient_category: 0,
      appointment_assign_team: 1,
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
      assistancelist: [],
      externallist: [],
      pid: 0,
      type: "",
      added_by:"",
      booking_date:"",
      booking_time:"",
      duration:"",
      type_visit:"",
      patient_category:"",
      assign_team:"",
      SidebarAccess:null,
    };
  },

  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.SidebarAccess = JSON.parse(localStorage.getItem("SidebarAccess"));
    if (this.userdetails) {
      this.token = this.userdetails.access_token;
      this.branch = this.userdetails.branch.branch_id;
    }
    let urlParams = new URLSearchParams(window.location.search);
    this.Id = urlParams.get("id");
    this.appId = urlParams.get("appId");
    this.GetList();
    let urlParams1 = new URLSearchParams(window.location.search);
    this.pid = urlParams1.get("pid");
    this.type = urlParams1.get("type");
    if (this.pid) {
      this.getdetails();
    }
  },

  methods: {
    test() {

      if (this.screenlist.length == 0) return
      var aa = "<select class='form-select selects' v-model='' id='myNewDrp'>";
      aa += "<option value='0'>Please Select</option>";
      this.screenlist.forEach(element => {
        aa += "<option value=" + element.id + ">" + element.name + "</option>";
      });
      aa += "</select>";
      $("#replicatedList").append('<tr class="block blocks"> <td> ' + aa + '</td> <td> <input type="text" class="form-control scores" placeholder=""> </td> <td> <span class="remove"><i class="fal fa-times"></i></span> </td> </tr>'
      )

    },
    // async onCreateEvent() {
    //   this.OnTriageDraft();
    // },
    async onPublishEvent(){
      this.Ontriageform();
      this.OnBookAppointment();
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

      const response4 = await this.$axios.get("hospital/assigned-team",

        {
          headers, params: { branch: this.branch }
        });
      if (response4.data.code == 200 || response4.data.code == "200") {
        this.teamlist = response4.data.list;
      } else {
        this.teamlist = [];
      }
      const response6 = await this.$axios.get(
        "general-setting/list?section=" + "type-of-visit",
        { headers }
      );

      if (response6.data.code == 200 || response6.data.code == "200") {
        this.visitlist = response6.data.list;
      } else {
        this.visitlist = [];
      }
      const response7 = await this.$axios.get(
        "general-setting/list?section=" + "patient-category",
        { headers }
      );
      if (response7.data.code == 200 || response7.data.code == "200") {
        this.categorylist = response7.data.list;
      } else {
        this.categorylist = [];
      }
      const response8 = await this.$axios.get("diagnosis/getIcd10codeList", {
        headers,
      });
      if (response8.data.code == 200 || response8.data.code == "200") {
        this.diagonisislist = response8.data.list;
      } else {
        this.diagonisislist = [];
      }
      const response9 = await this.$axios.get(
        "general-setting/list?section=" + "location-of-services",
        {
          headers,
        }
      );
      if (response9.data.code == 200 || response9.data.code == "200") {
        this.locationlist = response9.data.list;
      } else {
        this.locationlist = [];
      }
      const response10 = await this.$axios.get("intervention/screening-types", {
        headers,
      });
      if (response10.data.code == 200 || response10.data.code == "200") {
        this.screenlist = response10.data.list;
        console.log('my screen', this.screenlist);

        $(".optionBox").on("click", ".remove", function () {
          $(this).closest(".block").remove();
        });
      } else {
        this.screenlist = [];
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
    async OnBookAppointment() {
      this.errorList = [];
      try {
        if (!this.appointment_date) {
          this.errorList.push("Date is required");
        }
        if (!this.appointment_time) {
          this.errorList.push("Time is required");
        }
        if (!this.appointment_duration) {
          this.errorList.push("Duration is required");
        }
        if (!this.appointment_type) {
          this.errorList.push("Appointment Type is required");
        }
        if (!this.appointment_type_visit) {
          this.errorList.push("Type of Visit is required");
        }
        if (!this.appointment_patient_category) {
          this.errorList.push("Category of Patient is required");
        }
        if (
          this.appointment_date &&
          this.appointment_time &&
          this.appointment_duration &&
          this.appointment_type &&
          this.appointment_type_visit &&
          this.appointment_patient_category
        ) {
          this.loader = true;
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          const response = await this.$axios.post(
              "patient-appointment-details/addByPID",
              {
                added_by: this.userdetails.user.id,
                booking_date: this.appointment_date,
                booking_time: this.appointment_time,
                patient_mrn_id: this.Id,
                duration: this.appointment_duration,
                appointment_type: this.appointment_type,
                type_visit: this.appointment_type_visit,
                patient_category: this.appointment_patient_category,
                assign_team: this.appointment_type,
                // appId: this.appId,
                status: "1",
              },
              { headers }
            );
            console.log('my rs',response.data);
            if (response.data.code == 200) {
              this.loader = false;
            } else {
              this.loader = false;
              this.errorList.push(response.data.message);
              this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + this.error,
                  footer: ''
                });
            }
        }
      } catch (e) {
        this.loader = false;
        this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + e,
                  footer: ''
                });
      }
    },
    async Ontriageform() {

      if (confirm("Are you sure you want to save this entry ? ")) {
      var screening_type = [];
      $("table#screentable > tbody > tr").each(function () {
        var obj = {};
        obj.duration = $('td select.selects', this).val();
        obj.scores = $('td input[type="text"].scores', this).val();
        screening_type.push(obj);
      });
      this.errorList = [];
      try {
        if (!this.screening_id) {
          this.errorList.push("Type of Screening is required");
        }
        if (!this.score) {
          this.errorList.push("Score is required");
        }
        if (!this.appointment_date) {
          this.errorList.push("Date is required");
        }
        if (!this.appointment_time) {
          this.errorList.push("Time is required");
        }
        if (!this.appointment_duration) {
          this.errorList.push("Duration is required");
        }
        if (!this.appointment_type) {
          this.errorList.push("Appointment Type is required");
        }
        if (!this.appointment_patient_category) {
          this.errorList.push("Category of Patient is required");
        }
        if (!this.appointment_type_visit) {
          this.errorList.push("Type of visit is required");
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
        if (
          this.screening_id &&
          this.score &&
          this.appointment_date &&
          this.appointment_time &&
          this.appointment_duration &&
          this.appointment_type &&
          this.appointment_type_visit &&
          this.appointment_patient_category &&
          this.appointment_assign_team &&
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
            "triage-form/add",
            {
              added_by: this.userdetails.user.id.toString(),
              risk_history_assressive: this.risk_history_assressive,
              risk_history_criminal: this.risk_history_criminal,
              risk_history_detereotation: this.risk_history_detereotation,
              risk_history_neglect: this.risk_history_neglect,
              risk_history_suicidal_idea: this.risk_history_suicidal_idea,
              risk_history_suicidal_attempt: this.risk_history_suicidal_attempt,
              risk_history_homicidal_idea: this.risk_history_homicidal_idea,
              risk_history_homicidal_attempt:
                this.risk_history_homicidal_attempt,
              risk_history_aggressive_idea: this.risk_history_aggressive_idea,
              risk_history_aggressive_attempt:
                this.risk_history_aggressive_attempt,
              risk_social_has_no_family: this.risk_social_has_no_family,
              risk_homeless: this.risk_homeless,
              capacity_cannot_give_commitment:
                this.capacity_cannot_give_commitment,
              capacity_showed_no_interest: this.capacity_showed_no_interest,
              treatment_checked: this.treatment_checked,
              treatment_given_appointment: this.treatment_given_appointment,
              treatment_given_regular: this.treatment_given_regular,
              placement_referred: this.placement_referred,
              placement_discharge: this.placement_discharge,
              screening_id: this.screening_id,
              score: this.score,
              appointment_date: this.appointment_date,
              appointment_time: this.appointment_time,
              appointment_duration: this.appointment_duration,
              appointment_type: this.appointment_type,
              appointment_type_visit: this.appointment_type_visit,
              appointment_patient_category: this.appointment_patient_category,
              appointment_assign_team: this.appointment_type,
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
              screening_type: this.screening_type,
              // appId: this.appId,
              status: "1",
            },
            { headers }
          );
          console.log("response", response.data);
          if (response.data.code == 200) {
            this.loader = false;
            this.$swal.fire(
                  'Data are saved successfully!',
                );
            this.GoBack();
            this.resetmodel();
          } else {
            this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + this.error,
                  footer: ''
                });
            this.loader = false;
          }
        }
      } catch (e) {
        this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + e,
                  footer: ''
                });
      }
    }},
    async OnBookAppDraft() {
      try{
          this.loader = true;
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          const response = await this.$axios.post(
              "patient-appointment-details/addByPID",
              {
                added_by: this.userdetails.user.id,
                booking_date: this.appointment_date,
                booking_time: this.appointment_time,
                patient_mrn_id: this.Id,
                duration: this.appointment_duration,
                appointment_type: this.appointment_type,
                type_visit: this.appointment_type_visit,
                patient_category: this.appointment_patient_category,
                assign_team: this.appointment_type,
              },
              { headers }
            );
            console.log('my rs',response.data);
            if (response.data.code == 200) {
              this.loader = false;
              alert("Successfully created");
              this.GoBack();

            } else {
              this.loader = false;
              this.errorList.push(response.data.message);
            }
        } catch (e) {
        this.loader = false;
        this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + e,
                  footer: ''
                });
      }
    },
    async OnTriageDraft() {
      if (confirm("Are you sure you want to save this as draft ? ")) {
        alert("Fuction is Running");
        try {
          this.loader = true;
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          const response = await this.$axios.post(
             "triage-form/add",
            {
              added_by: this.userdetails.user.id,
              risk_history_assressive: this.risk_history_assressive,
              risk_history_criminal: this.risk_history_criminal,
              risk_history_detereotation: this.risk_history_detereotation,
              risk_history_neglect: this.risk_history_neglect,
              risk_history_suicidal_idea: this.risk_history_suicidal_idea,
              risk_history_suicidal_attempt: this.risk_history_suicidal_attempt,
              risk_history_homicidal_idea: this.risk_history_homicidal_idea,
              risk_history_homicidal_attempt:
                this.risk_history_homicidal_attempt,
              risk_history_aggressive_idea: this.risk_history_aggressive_idea,
              risk_history_aggressive_attempt:
                this.risk_history_aggressive_attempt,
              risk_social_has_no_family: this.risk_social_has_no_family,
              risk_homeless: this.risk_homeless,
              capacity_cannot_give_commitment:
                this.capacity_cannot_give_commitment,
              capacity_showed_no_interest: this.capacity_showed_no_interest,
              treatment_checked: this.treatment_checked,
              treatment_given_appointment: this.treatment_given_appointment,
              treatment_given_regular: this.treatment_given_regular,
              placement_referred: this.placement_referred,
              placement_discharge: this.placement_discharge,
              screening_id: this.screening_id,
              score: this.score,
              appointment_date: this.appointment_date,
              appointment_time: this.appointment_time,
              appointment_duration: this.appointment_duration,
              appointment_type: this.appointment_type,
              appointment_type_visit: this.appointment_type_visit,
              appointment_patient_category: this.appointment_patient_category,
              appointment_assign_team: this.appointment_type,
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
              screening_type: this.screening_type,
              appId: this.appId,
              status: "0",
            },
            { headers }
          );
          console.log("response", response.data);
          if (response.data.code == 200) {
            alert("Data are saved successfully! ");
            this.OnBookAppDraft();
          } else {
            this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + this.error,
                  footer: ''
                })
            this.loader = false;
          }
        } catch (e) {
          this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + e,
                  footer: ''
                });
        }
      }
    },

    resetmodel() {
      this.risk_history_assressive = "";
      this.risk_history_criminal = "";
      this.risk_history_detereotation = "";
      this.risk_history_neglect = "";
      this.risk_history_suicidal_idea = "";
      this.risk_history_suicidal_attempt = "";
      this.risk_history_homicidal_idea = "";
      this.risk_history_homicidal_attempt = "";
      this.risk_history_aggressive_idea = "";
      this.risk_history_aggressive_attempt = "";
      this.risk_social_has_no_family = "";
      this.risk_homeless = "";
      this.capacity_cannot_give_commitment = "";
      this.capacity_showed_no_interest = "";
      this.treatment_checked = "";
      this.treatment_given_appointment = "";
      this.treatment_given_regular = "";
      this.placement_referred = "";
      this.placement_discharge = "";
      this.screening_id = 0;
      this.score = "";
      this.appointment_date = "";
      this.appointment_time = "";
      this.appointment_duration = 0;
      this.appointment_type = 0;
      this.appointment_type_visit = 0;
      this.appointment_patient_category = 0;
      this.appointment_assign_team = 0;
      this.location_services_id = "";
      this.type_diagnosis_id = 0;
      this.category_services = "";
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
        "/patient-appointment-details/fetchViewHistoryListDetails",
        {
          id: this.pid,
          type: "TriageForm",
        },
        { headers }
      );

      if (response.data.code == 200) {
        this.Id = response.data.Data[0].patient_mrn_id;

        this.risk_history_assressive =
          response.data.Data[0].risk_history_assressive;
        this.risk_history_criminal =
          response.data.Data[0].risk_history_criminal;
        this.risk_history_detereotation =
          response.data.Data[0].risk_history_detereotation;
        this.risk_history_neglect = response.data.Data[0].risk_history_neglect;
        this.risk_history_suicidal_idea =
          response.data.Data[0].risk_history_suicidal_idea;
        this.risk_history_suicidal_attempt =
          response.data.Data[0].risk_history_suicidal_attempt;
        this.risk_history_homicidal_idea =
          response.data.Data[0].risk_history_homicidal_idea;
        this.risk_history_homicidal_attempt =
          response.data.Data[0].risk_history_homicidal_attempt;
        this.risk_history_aggressive_idea =
          response.data.Data[0].risk_history_aggressive_idea;
        this.risk_history_aggressive_attempt =
          response.data.Data[0].risk_history_aggressive_attempt;
        this.risk_social_has_no_family =
          response.data.Data[0].risk_social_has_no_family;
        this.risk_homeless = response.data.Data[0].risk_homeless;
        this.capacity_cannot_give_commitment =
          response.data.Data[0].capacity_cannot_give_commitment;

        this.capacity_showed_no_interest =
          response.data.Data[0].capacity_showed_no_interest;
        this.treatment_checked = response.data.Data[0].treatment_checked;
        this.treatment_given_appointment =
          response.data.Data[0].treatment_given_appointment;
        this.treatment_given_regular =
          response.data.Data[0].treatment_given_regular;
        this.placement_referred = response.data.Data[0].placement_referred;
        this.placement_discharge = response.data.Data[0].placement_discharge;
        this.screening_id = response.data.Data[0].screening_id;
        this.score = response.data.Data[0].score;
        this.appointment_date = response.data.Data[0].appointment_date;
        this.appointment_time = response.data.Data[0].appointment_time;
        this.appointment_duration = response.data.Data[0].appointment_duration;
        this.appointment_type = response.data.Data[0].appointment_type;
        this.appointment_type_visit =
          response.data.Data[0].appointment_type_visit;
        this.appointment_patient_category =
          response.data.Data[0].appointment_patient_category;
        this.appointment_assign_team =
          response.data.Data[0].appointment_type;
        this.location_services_id = response.data.Data[0].location_services_id;
        this.type_diagnosis_id = response.data.Data[0].type_diagnosis_id;
        this.category_services = response.data.Data[0].category_services;
        this.code_id = response.data.Data[0].code_id;
        this.sub_code_id = response.data.Data[0].sub_code_id;
        this.complexity_services_id =
          response.data.Data[0].complexity_services_id;
        this.outcome_id = response.data.Data[0].outcome_id;
        this.medication_des = response.data.Data[0].medication_des;
        this.services_id = response.data.Data[0].services_id;
        this.serviceid = response.data.Data[0].services_id;
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
        this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + this.error,
                  footer: ''
                });
      }
    },
    GoBack(){
      this.$router.push({
              path: "/modules/Intervention/patient-summary",
              query: { id: this.Id, appId: this.appId },
            });
    },
  },
};
</script>
<style scoped>
.hide {
  display: none;
}
</style>
