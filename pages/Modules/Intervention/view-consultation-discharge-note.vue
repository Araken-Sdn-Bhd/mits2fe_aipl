<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>Consultation Discharge Notes</h1>
          </div>
          <div class="card mb-4">
            <div class="card-body">
              <div>
                <table class="notes">
                                          <thead>
                                            <tr>
                                              <th colspan="2">Patient Details</th>
                                            </tr>
                                          </thead>
                                          <tbody v-if="patientdetails">
                                            <tr>
                                              <th>MRN:</th>
                                            <td>{{ patientdetails.patient_mrn }}</td>
                                            </tr>
                                            <tr>
                                              <th>Patient Name:</th>
                                              <td>{{ patientdetails.patient_name }}</td>
                                            </tr>
                                            <tr>
                                              <th>NRIC NO:</th>
                                               <td>{{ patientdetails.nric }}</td>
                                            </tr>
                                            <tr>
                                              <th>Age:</th>
                                              <td>{{ patientdetails.age }}</td>
                                            </tr>
                                            <tr>
                                              <th>Contact No:</th>
                                               <td>{{ patientdetails.contact_no }}</td>
                                            </tr>
                                            <tr>
                                              <th>Gender:</th>
                                           <td>{{ patientdetails.gender }}</td>
                                            </tr>
                                            <tr>
                                              <th>DOB:</th>
                                            <td>{{ patientdetails.birth_date }}</td>
                                            </tr>
                                          </tbody>
                                        </table>

                                        <table class="notes">
                                          <thead>
                                            <tr>
                                              <th colspan="2">Discharge Details</th>
                                            </tr>
                                          </thead>
                                          <tbody>

                                            <tr>
                                              <th>Diagnosis<small style="color:red">*</small> :</th>
                                              <td>
                                                <select class="form-select" v-model="type_diagnosis_id" disabled>
                                                 <option value="0">Select Diagnosis</option>
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
                                              <th>Category Of Discharge<small style="color:red">*</small> :</th>
                                              <td>
                                                 <select class="form-select" v-model="category_discharge "  disabled>
                                                  <option value="0">Please Select</option>
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
                                              <th>Comment<small style="color:red">*</small> :</th>
                                              <td><textarea v-model="comment" placeholder="Enter Comment" rows="15" class="form-control"  disabled></textarea></td>
                                            </tr>
                                          </tbody>
                                        </table>

                                        <table class="notes">
                                          <thead>
                                            <tr>
                                              <th colspan="2">Verification </th>
                                            </tr>
                                          </thead>
                                          <tbody>

                                            <tr>
                                              <th>Specialist Name<small style="color:red">*</small> :</th>
                                              <td>
                                                <select class="form-select" v-model="specialist_name_id"  disabled>
                                                  <option value="0">Please Select</option>
                                              <option
                                                    v-for="spec in specialistlist"
                                                    v-bind:key="spec.id"
                                                    v-bind:value="spec.id"
                                                  >
                                                    {{ spec.name }}
                                                  </option>
                                                </select>
                                              </td>
                                            </tr>
                                            <tr>
                                              <th>Date<small style="color:red">*</small> :</th>
                                              <td>
                                                <input type="date" v-model="date" class="form-control" name=""  disabled>
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
                            >Location Of Services<small style="color:red">*</small> </label
                          >
                          <div class="col-sm-8">
                            <select
                              class="form-select"
                              v-model="location_services"  disabled
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
                            <select class="form-select" v-model="type_diagnosis_id"  disabled>
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
                        <div class="row mb-3 align-items-flex-start">
                      <label class="col-sm-4 col-form-label">Additional Type Of Diagnosis</label>
                      <div class="col-sm-8 align-items-flex-start" >
                          <select
                          id="additionalbox" v-model="additional_diagnosis"  disabled
                          class="form-select multiselect" multiple="multiple">
                              <option value="0">Please Select</option><option
                              v-for="catcode in diagonisislist"
                              v-bind:key="catcode.id"
                              v-bind:value="catcode.id">
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
                                name="inlineRadioOptions"
                                id="inlineRadio1"
                                value="assisstance"
                                v-model="category_services"  disabled
                              />
                              <label class="form-check-label" for="inlineRadio1"
                                >Assisstance / Supervision</label
                              >
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="inlineRadioOptions2"
                                id="inlineRadio2"
                                value="clinical-work"
                                v-model="category_services"  disabled
                              />
                              <label class="form-check-label" for="inlineRadio2"
                                >Clinical Work / Procedure
                              </label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="inlineRadioOptions3"
                                id="inlineRadio3"
                                value="external"
                                v-model="category_services"  disabled
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
                              <select class="form-select" v-model="services_id"  disabled>
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
                        <div class="row mb-6 align-items-flex-start">
                          <div class="col-md-4 mb-3">
                            <label class="form-label">ICD 9 CODE<small style="color:red">*</small> </label>
                            <select
                              class="form-select"
                              v-model="code_id"
                              disabled
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
                          <div><label class="form-label">ICD 9 SUB CODE<small style="color:red">*</small> </label></div>
                          <div>
                          <div class="mt-2 align-items-flex-start">
                            <select
                              class="form-select multiselect" multiple="multiple"
                              id="sub_code_id" v-model="additional_sub_code_id" style="width:100%"  disabled>

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
                              disabled
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
                              id="add_sub_code_id" v-model="additional_sub_code_id2" style="width:100%"  disabled>

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
                        <div class="external services hide mb-3">
                          <div class="row">
                            <div class="col-md-6 mb-3">
                              <label class="form-label">Services<small style="color:red">*</small> </label>
                              <select class="form-select" v-model="serviceid"  disabled>
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
                              v-model="complexity_services"  disabled
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
                            <select class="form-select" v-model="outcome"  disabled>
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
                            v-model="medication_des"  disabled
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
                       <br><br>
                <div class="d-flex">
                    <button
                      @click="GoBack"
                      class="btn btn-primary btn-text"
                      ><i class="fa fa-arrow-alt-to-left"></i> Back
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
import CommonHeader from "../../../components/CommonHeader.vue";
import CommonSidebar from "../../../components/CommonSidebar.vue";
export default {
  components: { CommonSidebar, CommonHeader },
  name: "consultation-discharge-note",
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
    this.GetList();
    this.GetPatientdetails();
    let urlParams1 = new URLSearchParams(window.location.search);
    this.pid = urlParams1.get("pid");
    this.type = urlParams1.get("type");
    if (this.pid) {
      this.getdetails();
    }
  },
  mounted(){
    $(document).ready(function () {
      $(".multiselect").select2({
        placeholder: "Please Select",
      });
    });
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
      specialistlist: [],

      Id: 0,
      diagnosis_id: 0,
      category_discharge: 0,
      comment: "",
      specialist_name_id: 0,
      date: "",
      location_services: 0,
      type_diagnosis_id: 0,
      category_services: "",
      code_id: 0,
      sub_code_id: 0,
      complexity_services: 0,
      outcome: 0,
      medication_des: "",
      patient_mrn_id: "",
      services_id: 0,
      serviceid: 0,
      validate: true,
      assistancelist: [],
      externallist: [],
      pid: 0,
      type: "",
      appId: 0,

      addicdcatcodelist: [],
      add_code_id:0,
      additional_diagnosis: [],
      additional_sub_code_id:[],
      additional_sub_code_id2:[],
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
      const response7 = await this.$axios.post(
        "staff-management/getStaffDetailByBranch",
        { branch_id: this.userdetails.branch.branch_id },
        { headers }
      );
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
  
    async GetPatientdetails() {
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
      if (response.data.code == 200) {
        this.patientdetails = response.data.details;
      } else {
        this.$swal.fire({
          icon: "error",
          title: "Oops... Something Went Wrong!",
          text: "the error is: " + this.error,
          footer: "",
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
        "/patient-appointment-details/fetchViewHistoryListDetails",
        {
          id: this.pid,
          type: "ConsultationDischargeNote",
        },
        { headers }
      );
      if (response.data.code == 200) {
        this.Id = response.data.Data[0].patient_id;

        this.diagnosis_id = response.data.Data[0].diagnosis_id;
        this.category_discharge = response.data.Data[0].category_discharge;
        this.comment = response.data.Data[0].comment;
        this.specialist_name_id = response.data.Data[0].specialist_name_id;
        this.date = response.data.Data[0].date;

        this.location_services = response.data.Data[0].location_services;
        this.type_diagnosis_id = response.data.Data[0].type_diagnosis_id;
        this.additional_diagnosis = response.data.Data[0].add_type_diagnosis_id.split(",");
                    $("#additionalbox")
                    .val(this.additional_diagnosis)
                    .trigger("change");

        this.category_services = response.data.Data[0].category_services;
        this.code_id = response.data.Data[0].code_id;
        this.additional_sub_code_id = response.data.Data[0].sub_code_id.split(",");
                     $("#sub_code_id")
                    .val( this.additional_sub_code_id)
                    .trigger("change");

        this.add_code_id = response.data.Data[0].add_code_id;
        this.additional_sub_code_id2 = response.data.Data[0].add_sub_code_id.split(",");
                    $("#add_sub_code_id")
                    .val( this.additional_sub_code_id2)
                    .trigger("change");
        this.complexity_services = response.data.Data[0].complexity_services;
        this.outcome = response.data.Data[0].outcome;
        this.medication_des = response.data.Data[0].medication_des;
        this.services_id = response.data.Data[0].services_id;
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
        const response3 = await this.$axios.post(
          "diagnosis/getIcd9subcodeList",
          { icd_category_code: this.add_code_id },
          { headers }
        );
        if (response3.data.code == 200 || response3.data.code == "200") {
          this.addicdcatcodelist = response3.data.list;

        } else {
          this.addicdcatcodelist = [];
        }
      } else {
        this.$swal.fire({
          icon: "error",
          title: "Oops... Something Went Wrong!",
          text: "the error is: " + this.error,
          footer: "",
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
      if (this.type == "view") {
        this.$router.go(-1);
      } else {
        this.$router.push({
          path: "/modules/Intervention/patient-summary",
          query: { id: this.Id, appId: this.appId },
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
