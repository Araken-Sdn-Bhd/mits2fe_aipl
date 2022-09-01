<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>Psychiatry Clerking Notes</h1>
            <!-- <a href="#"><i class="fal fa-plus"></i> Add</a> -->
          </div>
          <div class="card mb-4">
            <div class="card-body">
              <form>
                <Physectristdetails />

                <table class="notes" v-if="type == 'PsychiatryClerkingNote'">
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
                        <select class="form-select" v-model="diagnosis_id">
                          <option value="0">Select Diagnosis</option>
                          <option
                            v-for="catcode in diagonisislist"
                            v-bind:key="catcode.id"
                            v-bind:value="catcode.id"
                          >
                            {{ catcode.icd_category_code }} {{catcode.icd_category_name}}
                          </option>
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

                <table class="notes" v-if="type == 'CounsellorClerkingNote'">
                  <thead>
                    <tr>
                      <th colspan="2">Consultation Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Diagnosis:</th>
                      <td>
                        <select class="form-select" v-model="diagnosis_id">
                          <option value="0">Select Diagnosis</option>
                          <option
                            v-for="catcode in diagonisislist"
                            v-bind:key="catcode.id"
                            v-bind:value="catcode.id"
                          >
                            {{ catcode.icd_category_code }} {{catcode.icd_category_name}}
                          </option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <th>Clinical Summary:</th>
                      <td>
                        <textarea
                          v-model="clinical_summary"
                          class="form-control textarea"
                          rows="2"
                          placeholder="Enter Description"
                        ></textarea>
                      </td>
                    </tr>
                    <tr>
                      <th>Background History:</th>
                      <td>
                        <textarea
                          v-model="background_history"
                          class="form-control textarea"
                          rows="2"
                          placeholder="Enter Description"
                        ></textarea>
                      </td>
                    </tr>
                    <tr>
                      <th>Clinical Notes:</th>
                      <td>
                        <textarea
                          v-model="clinical_notes"
                          class="form-control textarea"
                          rows="2"
                          placeholder="Enter Description"
                        ></textarea>
                      </td>
                    </tr>
                    <tr>
                      <th>Management:</th>
                      <td>
                        <textarea
                          v-model="management"
                          class="form-control textarea"
                          rows="2"
                          placeholder="Enter Description"
                        ></textarea>
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
                        <div
                          class="assisstance services mb-3"
                          v-if="category_services == 'assisstance'"
                        >
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
                        <div
                          class="clinical-work services mb-3"
                          v-if="category_services == 'clinical-work'"
                        >
                          <div class="row">
                            <div class="col-md-6 mb-3">
                              <label class="form-label">ICD 9 CODE</label>
                              <select class="form-select" v-model="code_id">
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
                        <div
                          class="external services mb-3"
                          v-if="category_services == 'external'"
                        >
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
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
<script>

import Physectristdetails from "../../../components/Patient/physectristdetails.vue";
import CommonHeader from '../../../components/CommonHeader.vue';
import CommonSidebar from '../../../components/CommonSidebar.vue';
export default {
  components: { CommonSidebar, CommonHeader, Physectristdetails },
  name: "history-view",
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
    this.type = urlParams.get("type");
    this.GetList();
    this.GetRecord();
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
      diagonisislist: [],
      locationlist: [],
      Id: 0,
      type: "",
      chief_complain: "",
      presenting_illness: "",
      background_history: "",
      general_examination: "",
      mental_state_examination: "",
      diagnosis_id: 0,
      management: "",
      discuss_psychiatrist_name: "",
      date: "",
      time: "",
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
      clinical_summary: "",
      background_history: "",
      clinical_notes: "",
      management: "",
        assistancelist:[],
      externallist:[],
    };
  },
  methods: {
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
      const response5 = await this.$axios.get("general-setting/list?section=" + "location-of-services", {
        headers,
      });
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
    async GetRecord() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "patient-appointment-details/fetchViewHistoryListDetails",
        {
          id: this.Id,
          type: this.type,
        },
        { headers }
      );
      console.log("my result", response.data);
      if (response.data.code == 200) {
        this.chief_complain = response.data.Data[0].chief_complain;
        this.presenting_illness = response.data.Data[0].presenting_illness;
        this.background_history = response.data.Data[0].background_history;
        this.general_examination = response.data.Data[0].general_examination;
        this.mental_state_examination =
          response.data.Data[0].mental_state_examination;
        this.diagnosis_id = response.data.Data[0].diagnosis_id;
        this.management = response.data.Data[0].management;
        this.discuss_psychiatrist_name =
          response.data.Data[0].discuss_psychiatrist_name;
        this.date = response.data.Data[0].date;
        this.time = response.data.Data[0].time;
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
        if (this.code_id) {
          console.log("my id", this.code_id);
          const response6 = await this.$axios.post(
            "diagnosis/getIcd9subcodeList",
            { icd_category_code: this.code_id },
            { headers }
          );
          console.log("my rsp", response6.data);
          if (response6.data.code == 200 || response6.data.code == "200") {
            this.icdcatcodelist = response6.data.list;
          } else {
            this.icdcatcodelist = [];
          }
        }
        this.clinical_summary = response.data.Data[0].clinical_summary;
        this.background_history = response.data.Data[0].background_history;
        this.clinical_notes = response.data.Data[0].clinical_notes;
        this.management = response.data.Data[0].management;
      } else {
        window.alert("Something went wrong");
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