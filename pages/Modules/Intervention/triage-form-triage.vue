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

          <div>
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
                          <td>History of aggressive and impulsive behavior</td>
                          <td>
                            <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="Yes"
                                v-model="risk_history_assressive">
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>History of criminal case</td>
                          <td>
                            <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="Yes" v-model="risk_history_criminal">
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>Deterioration of clinical condition</td>
                          <td>
                            <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="Yes"
                                v-model="risk_history_detereotation">
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>Neglect of self care</td>
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
                          <td>Suicidal Behaviour</td>
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
                          <td>Homicidal</td>
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
                          <td>Aggressive</td>
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
                        <h6 class="mb-3 black">Placement</h6>
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
                            <label class="col-sm-4 col-form-label">Location Of Services<small style="color:red">*</small>
                            </label>
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
                            <label class="col-sm-4 col-form-label">Type Of Diagnosis<small style="color:red">*</small>
                            </label>
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
                          <div class="row mb-3 align-items-flex-start">
                            <label class="col-sm-4 col-form-label">Additional Diagnosis</label>
                            <div class="col-sm-8">
                              <select id="additionalboxdiagnosis" class="form-select multiselect" multiple="multiple">
                                <option value="0">Please Select</option>
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
                          <div id="assisstance" class="assisstance services hide mb-3">
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
                          <div id="clinical-work" class="clinical-work services hide mb-3">
                            <div class="row">
                              <div class="col-md-6 mb-3">
                                <label class="form-label">ICD 9 CODE<small style="color:red">*</small></label>
                                <select class="form-select" v-model="code_id" @change="onCategorycodebind($event)">
                                  <option value="0">Select code</option>
                                  <option v-for="type in codelist" v-bind:key="type.id" v-bind:value="type.id">
                                    {{ type.icd_category_code }} {{ type.icd_category_name }}
                                  </option>
                                </select>
                              </div>
                              <div class="col-md-6 mb-3">
                                <label class="form-label">ICD 9 SUB CODE<small style="color:red">*</small> </label>
                                <div class="mt-2 align-items-flex-start">
                                  <select id="subcodeicd" style="width:100%" class="form-select multiselectadditional"
                                    multiple="multiple">
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
                            <div class="row">
                              <div class="col-md-6 mb-">
                                <label class="form-label">Additional ICD 9 CODE</label>
                                <select class="form-select" v-model="additional_code_id"
                                  @change="onCategorycodebindAdditional($event)">
                                  <option value="0">Select additional code</option>
                                  <option v-for="type in codelistadditional" v-bind:key="type.id" v-bind:value="type.id">
                                    {{ type.icd_category_code }} {{ type.icd_category_name }}
                                  </option>
                                </select>
                              </div>
                              <div class="col-md-6 mb-3">
                                <label class="form-label">Additional ICD 9 SUB CODE</label>
                                <div class="mt-2 align-items-flex-start">
                                  <select id="additionalsubcodeicd" style="width:100%"
                                    class="form-select multiselectadditionalsubcode" multiple="multiple">
                                    <option value="0">Select additional sub code</option>
                                    <option v-for="catcode in icdcatcodelistadditional" v-bind:key="catcode.id"
                                      v-bind:value="catcode.id">
                                      {{ catcode.icd_code }}
                                      {{ catcode.icd_name }}
                                    </option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!-- 02 -->
                          <div id="external" class="external services hide mb-3">
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
                    <a @click="GoBack" class="btn btn-primary btn-text"><i class="fa fa-arrow-alt-to-left"></i> Back</a>
                    <div class="btn-right" :class="SidebarAccess != 1 ? 'hide' : ''" v-if="!pid">
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
        </div>
      </main>
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
  name: "triage-form",
  data() {
    return {
      userdetails: null,
      errorList: [],
      servicelist: [],
      outcomelist: [],
      comlexcitylist: [],
      codelist: [],
      codelistadditional: [],
      icdcatcodelistadditional: [],
      icdcatcodelist: [],
      diagonisislist: [],
      locationlist: [],
      teamlist: [],
      visitlist: [],
      categorylist: [],
      screenlist: [],
      Id: 0,
      appId: 0,
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
      added_by: "",
      booking_date: "",
      booking_time: "",
      duration: "",
      type_visit: "",
      patient_category: "",
      assign_team: "",
      SidebarAccess: null,
      additional_diagnosis: 0,
      additional_subcode: 0,
      additional_code_id: 0,
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
    $(document).ready(function () {
      $('.form-accordion input[type="radio"]').click(function () {
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $(".services").not(targetBox).hide();
        $(targetBox).show();
      });
    });
  },
  mounted() {
    $(document).ready(function () {
      $(".multiselect").select2({
        placeholder: "Select Additional Diagnosis",
      });
    });

    $(document).ready(function () {
      $(".multiselectadditional").select2({
        placeholder: "Select Sub Code",
      });
    });
    $(document).ready(function () {
      $(".multiselectadditionalsubcode").select2({
        placeholder: "Select Additional Sub Code",
      });
    });
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
      $("#replicatedList").append('<tr class="block blocks"> <td> ' + aa + '</td> <td> <input type="text" class="form-control scores" placeholder=""> </td> <td> <span class="remove"><i class="fal fa-times"></i></span> </td> </tr>')

    },
    async onCreateEvent() {
      this.OnTriageDraft();
    },
    async onPublishEvent() {
      this.Ontriageform();
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
        this.codelistadditional = response3.data.list;
      } else {
        this.codelist = [];
        this.codelistadditional = [];
      }

      const response4 = await this.$axios.get("hospital/assigned-team",

        {
          headers,
          params: {
            branch: this.branch
          }
        });
      if (response4.data.code == 200 || response4.data.code == "200") {
        this.teamlist = response4.data.list;
      } else {
        this.teamlist = [];
      }
      const response6 = await this.$axios.get(
        "patient-appointment-visit/list", {
        headers
      }
      );

      if (response6.data.code == 200 || response6.data.code == "200") {
        this.visitlist = response6.data.list;
      } else {
        this.visitlist = [];
      }
      const response7 = await this.$axios.get(
        "patient-appointment-category/list", {
        headers
      }
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
        "general-setting/list?section=" + "location-of-services", {
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

    async onCategorycodebindAdditional(event) {
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
        this.codelistadditional = response.data.list;
      } else {
        this.codelistadditional = [];
      }
    },

    async Ontriageform() {
      var jobSDESCRIPTION = [];
      var Boxvalue1 = [];
      var Boxvalue2 = [];
      var Boxvalue3 = [];
      var additionalboxdiagnosis = 0;
      var subcodeicd = 0;
      var additionalsubcodeicd = 0;
      $("#additionalboxdiagnosis :selected").each(function () {
        if (additionalboxdiagnosis) {
          additionalboxdiagnosis = additionalboxdiagnosis + "," + this.value;
        } else {
          additionalboxdiagnosis = this.value;
        }
      });
      Boxvalue1.push({
        additionalboxdiagnosis
      });

      $("#subcodeicd :selected").each(function () {
        if (subcodeicd) {
          subcodeicd = subcodeicd + "," + this.value;
        } else {
          subcodeicd = this.value;
        }
      });
      Boxvalue2.push({
        subcodeicd
      });

      $("#additionalsubcodeicd :selected").each(function () {
        if (additionalsubcodeicd) {
          additionalsubcodeicd = additionalsubcodeicd + "," + this.value;
        } else {
          additionalsubcodeicd = this.value;
        }
      });
      Boxvalue3.push({
        additionalsubcodeicd
      });

      this.$swal.fire({
        title: 'Do you want to save the changes?',
        showCancelButton: true,
        confirmButtonText: 'Save',
      }).then(async (result) => {
        if (result.isConfirmed) {
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
                "triage-form/add-without-appt", {
                added_by: this.userdetails.user.id.toString(),
                risk_history_assressive: this.risk_history_assressive,
                risk_history_criminal: this.risk_history_criminal,
                risk_history_detereotation: this.risk_history_detereotation,
                risk_history_neglect: this.risk_history_neglect,
                risk_history_suicidal_idea: this.risk_history_suicidal_idea,
                risk_history_suicidal_attempt: this.risk_history_suicidal_attempt,
                risk_history_homicidal_idea: this.risk_history_homicidal_idea,
                risk_history_homicidal_attempt: this.risk_history_homicidal_attempt,
                risk_history_aggressive_idea: this.risk_history_aggressive_idea,
                risk_history_aggressive_attempt: this.risk_history_aggressive_attempt,
                risk_social_has_no_family: this.risk_social_has_no_family,
                risk_homeless: this.risk_homeless,
                capacity_cannot_give_commitment: this.capacity_cannot_give_commitment,
                capacity_showed_no_interest: this.capacity_showed_no_interest,
                treatment_checked: this.treatment_checked,
                treatment_given_appointment: this.treatment_given_appointment,
                treatment_given_regular: this.treatment_given_regular,
                placement_referred: this.placement_referred,
                placement_discharge: this.placement_discharge,
                screening_id: this.screening_id,
                score: this.score,
                location_services_id: this.location_services_id,
                type_diagnosis_id: this.type_diagnosis_id,
                additional_diagnosis: JSON.stringify(additionalboxdiagnosis),
                category_services: this.category_services,
                code_id: this.code_id,
                sub_code_id: JSON.stringify(subcodeicd),
                additional_code_id: this.additional_code_id,
                additional_sub_code_id: JSON.stringify(additionalsubcodeicd),
                complexity_services_id: this.complexity_services_id,
                outcome_id: this.outcome_id,
                medication_des: this.medication_des,
                patient_mrn_id: this.Id,
                services_id: this.services_id,
                screening_type: this.screening_type,
                appId: this.appId,
                status: "1",
              }, {
                headers
              }
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
    async OnTriageDraft() {
      this.$swal.fire({
        title: 'Do you want to save as draft?',
        showCancelButton: true,
        confirmButtonText: 'Save',
      }).then(async (result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          try {
            this.loader = true;
            const headers = {
              Authorization: "Bearer " + this.userdetails.access_token,
              Accept: "application/json",
              "Content-Type": "application/json",
            };
            const response = await this.$axios.post(
              "triage-form/add-without-appt", {
              added_by: this.userdetails.user.id,
              risk_history_assressive: this.risk_history_assressive,
              risk_history_criminal: this.risk_history_criminal,
              risk_history_detereotation: this.risk_history_detereotation,
              risk_history_neglect: this.risk_history_neglect,
              risk_history_suicidal_idea: this.risk_history_suicidal_idea,
              risk_history_suicidal_attempt: this.risk_history_suicidal_attempt,
              risk_history_homicidal_idea: this.risk_history_homicidal_idea,
              risk_history_homicidal_attempt: this.risk_history_homicidal_attempt,
              risk_history_aggressive_idea: this.risk_history_aggressive_idea,
              risk_history_aggressive_attempt: this.risk_history_aggressive_attempt,
              risk_social_has_no_family: this.risk_social_has_no_family,
              risk_homeless: this.risk_homeless,
              capacity_cannot_give_commitment: this.capacity_cannot_give_commitment,
              capacity_showed_no_interest: this.capacity_showed_no_interest,
              treatment_checked: this.treatment_checked,
              treatment_given_appointment: this.treatment_given_appointment,
              treatment_given_regular: this.treatment_given_regular,
              placement_referred: this.placement_referred,
              placement_discharge: this.placement_discharge,
              screening_id: this.screening_id,
              score: this.score,
              location_services_id: this.location_services_id,
              type_diagnosis_id: this.type_diagnosis_id,
              additional_diagnosis: JSON.stringify(additionalboxdiagnosis),
              category_services: this.category_services,
              code_id: this.code_id,
              sub_code_id: JSON.stringify(subcodeicd),
              additional_sub_code_id: JSON.stringify(additionalsubcodeicd),
              complexity_services_id: this.complexity_services_id,
              outcome_id: this.outcome_id,
              medication_des: this.medication_des,
              patient_mrn_id: this.Id,
              services_id: this.services_id,
              screening_type: this.screening_type,
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
              this.$swal.fire('Succesfully save as draft!', '', 'success')
              this.GoBack();
            } else {
              this.loader = false;
              this.resetmodel();
              this.$swal.fire({
                icon: 'error',
                title: 'Oops... Something Went Wrong! dalam function api',
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
        "/patient-appointment-details/fetchViewHistoryListDetails", {
        id: this.pid,
        type: "TriageForm",
      }, {
        headers
      }
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
        this.sub_code_id = response.data.Data[0].sub_code_id.split(",");
                    $("#subcode")
                    .val(this.sub_code_id)
                    .trigger("change");
        this.additional_diagnosis = response.data.Data[0].additional_diagnosis.split(",");
                    $("#additionalbox")
                    .val(this.additional_diagnosis)
                    .trigger("change");

        this.additional_subcode = response.data.Data[0].additional_subcode.split(",");
                    $("#addsubcode")
                    .val(this.additional_subcode)
                    .trigger("change");
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

<style scoped>.hide {
  display: none;
}</style>
