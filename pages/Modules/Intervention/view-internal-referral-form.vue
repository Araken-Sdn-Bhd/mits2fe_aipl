<template>
    <div id="layoutSidenav">
        <CommonSidebar />
        <div id="layoutSidenav_content">
            <CommonHeader />
            <main>
                <div class="container-fluid px-4">
                    <div class="page-title">
                        <h1>INTERNAL REFERRAL</h1>
                        <!-- <a href="#"><i class="fal fa-plus"></i> Add</a> -->
                    </div>
                    <div class="card mb-4">
                        <div class="card-body">
                            <table class="notes">
                                <thead>
                                    <tr>
                                        <th colspan="2">Patient Details</th>
                                    </tr>
                                </thead>
                                <tbody v-if="patientdetails">
                                    <tr>
                                        <th>Patient Name:</th>
                                        <td>{{ patientdetails.name_asin_nric }}</td>
                                    </tr>
                                    <tr>
                                        <th>NRIC NO:</th>
                                        <td>{{ patientdetails.nric_no }}</td>
                                    </tr>
                                    <tr>
                                        <th>Age:</th>
                                        <td>{{ patientdetails.age }}</td>
                                    </tr>
                                    <tr>
                                        <th>Contact No:</th>
                                        <td>{{ patientdetails.mobile_no }}</td>
                                    </tr>
                                    <tr>
                                        <th>Gender:</th>
                                        <td>{{ patientdetails.gender[0].section_value }}</td>
                                    </tr>
                                    <tr>
                                        <th>Address:</th>
                                        <td>{{ patientdetails.address1 }}</td>
                                    </tr>
                                    <tr>
                                        <th>From:</th>
                                        <td>Mentari Address</td>
                                    </tr>
                                    <tr>
                                        <th colspan="2">
                                            Dear Dr,<br> Thank you for seeing this patient. </th>
                                    </tr>
                                    <tr>
                                        <th>Diagnosis<small style="color:red">*</small> : </th>
                                        <td><input disabled type="text" v-model="diagnosis" class="form-control max-width" name=""></td>
                                    </tr>
                                    <tr>
                                      <th>Reason For Referral<small style="color:red">*</small> : </th>
                                      <td><textarea disabled v-model="reason_for_referral" class="form-control" placeholder="Enter Description"></textarea></td>
                                  </tr>
                                  <tr>
                                      <th>Summary<small style="color:red">*</small> : </th>
                                      <td><textarea disabled v-model="summary" class="form-control" placeholder="Enter Description" rows="15"></textarea></td>
                                  </tr>
                                  <tr>
                                      <th>Management<small style="color:red">*</small> : </th>
                                      <td><textarea disabled v-model="management" type="text" class="form-control" placeholder="Enter Description" rows="15" name=""></textarea></td>
                                  </tr>
                                  <tr>
                                      <th>Medication<small style="color:red">*</small> : </th>
                                      <td><textarea disabled v-model="medication" type="text" class="form-control" placeholder="Enter Description" rows="15" name=""></textarea></td>
                                  </tr>
                                    <tr>
                                        <th colspan="2">Thank You,</th>
                                    </tr>
                                    <tr>
                                        <th>Name<small style="color:red">*</small> : </th>
                                        <td><input disabled v-model="name" type="text" class="form-control" name=""></td>
                                    </tr>
                                    <tr>
                                        <th>Designation<small style="color:red">*</small> : </th>
                                        <td><input disabled v-model="designation" type="text" class="form-control" name=""></td>
                                    </tr>
                                    <tr>
                                        <th>Hospital<small style="color:red">*</small> : </th>
                                        <td><input disabled v-model="hospital" type="text" class="form-control" name=""></td>
                                    </tr>
                                </tbody>
                            </table>

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
                                                <label class="col-sm-4 col-form-label">Location Of Services<small style="color:red">*</small> </label>
                                                <div class="col-sm-8">
                                                    <select class="form-select" disabled v-model="location_services">
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
                                                    <select disabled class="form-select" v-model="type_diagnosis_id" @change="BindDiagnosis()">
                                                        <option value="0">Select Diagnosis</option>
                                                        <option v-for="catcode in diagonisislist" v-bind:key="catcode.id" v-bind:value="{id:catcode.id,text:catcode.icd_code+' '+catcode.icd_name}">
                                                            {{ catcode.icd_code }} {{catcode.icd_name}}
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="row mb-3 align-items-flex-start">
                                                  <label class="col-sm-4 col-form-label"
                                                      >Additional Diagnosis</label
                                                  >
                                                  <div class="col-sm-8">
                                                      <select
                                                      disabled
                                                          id="additionalboxdiagnosis" v-model="additional_diagnosis"
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
                                            <!-- close-row -->
                                            <div class="row mb-3">
                                                <label class="col-sm-4 col-form-label">Category Of Services<small style="color:red">*</small>
                                                </label>
                                                <div class="col-sm-8">
                                                    <div class="form-check form-check-inline">
                                                        <input disabled class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="assisstance" v-model="category_services" />
                                                        <label class="form-check-label" for="inlineRadio1">Assisstance / Supervision</label>
                                                    </div>
                                                    <div class="form-check form-check-inline">
                                                        <input disabled class="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio2" value="clinical-work" v-model="category_services" />
                                                        <label class="form-check-label" for="inlineRadio2">Clinical Work / Procedure
                                                        </label>
                                                    </div>
                                                    <div class="form-check form-check-inline">
                                                        <input disabled class="form-check-input" type="radio" name="inlineRadioOptions3" id="inlineRadio3" value="external" v-model="category_services" />
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
                                                        <label class="form-label">ICD 9 CODE<small style="color:red">*</small> </label>
                                                        <select disabled class="form-select" v-model="code_id" @change="onCategorycodebind($event)">
                                                            <option value="0">Select code</option>
                                                            <option v-for="type in codelist" v-bind:key="type.id" v-bind:value="type.id">
                                                                {{ type.icd_category_code }} {{type.icd_category_name}}
                                                            </option>
                                                        </select>
                                                    </div>
                                                    <div class="col-md-6 mb-3">
                                                        <label class="form-label">ICD 9 SUB CODE<small style="color:red">*</small> </label>
                                                        <select disabled
                                                              id="subcodeicd"
                                                              style="width:100%"
                                                              class="form-select multiselectadditional"
                                                              v-model="sub_code_id"
                                                              multiple="multiple">
                                                            <option value="0">Select sub code</option>
                                                            <option v-for="catcode in icdcatcodelist" v-bind:key="catcode.id" v-bind:value="catcode.id">
                                                                {{ catcode.icd_code }}
                                                                {{catcode.icd_name}}
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                      <div class="col-md-6 mb-">
                                                          <label class="form-label">Additional ICD 9 CODE</label>
                                                          <select disabled class="form-select" v-model="additional_code_id"  @change="onCategorycodebindAdditional($event)">
                                                              <option value="0">Select additional code</option>
                                                              <option v-for="type in codelist" v-bind:key="type.id" v-bind:value="type.id">
                                                                  {{ type.icd_category_code }} {{type.icd_category_name}}
                                                              </option>
                                                          </select>
                                                      </div>
                                                      <div class="col-md-6 mb-3">
                                                              <label  class="form-label">Additional ICD 9 SUB CODE</label>
                                                              <div class="mt-2 align-items-flex-start">
                                                              <select disabled id="additionalsubcodeicd" v-model="additional_sub_code_id" style="width:100%" class="form-select multiselectadditionalsubcode"  multiple="multiple">
                                                                  <option value="0">Select additional sub code</option>
                                                                  <option v-for="catcode in icdcatcodelistadditional" v-bind:key="catcode.id" v-bind:value="catcode.id">
                                                                      {{ catcode.icd_code }}
                                                                      {{catcode.icd_name}}
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
                                                    <label class="form-label">Complexity Of Service<small style="color:red">*</small> </label>
                                                    <select disabled class="form-select" v-model="complexity_services">
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
                                                    <select disabled class="form-select" v-model="outcome">
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
                            <p v-if="errorList.length">
                                <ul>
                                    <li style="color:red" v-for='err in errorList' :key='err'>
                                        {{ err }}
                                    </li>
                                </ul>
                            </p>
                            <br><br>
                            <div class="d-flex">
                                <a @click="GoBack" class="btn btn-primary btn-text"><i class="fa fa-arrow-alt-to-left"></i> Back</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card mb-4 result" style="display:none;">
                  <h1>INTERNAL REFERRAL</h1>
                    <div class="card-body">
                        <table class="notes">
                            <thead>
                                <tr>
                                    <th colspan="2">Patient Details</th>
                                </tr>
                            </thead>
                            <tbody v-if="patientdetails">
                                <tr>
                                    <th>Patient Name:</th>
                                    <td>{{ patientdetails.name_asin_nric }}</td>
                                </tr>
                                <tr>
                                    <th>NRIC NO:</th>
                                    <td>{{ patientdetails.nric_no }}</td>
                                </tr>
                                <tr>
                                    <th>Age:</th>
                                    <td>{{ patientdetails.age }}</td>
                                </tr>
                                <tr>
                                    <th>Contact No:</th>
                                    <td>{{ patientdetails.mobile_no }}</td>
                                </tr>
                                <tr>
                                    <th>Gender:</th>
                                    <td>{{ patientdetails.gender[0].section_value }}</td>
                                </tr>
                                <tr>
                                    <th>Address:</th>
                                    <td>{{ patientdetails.address1 }}</td>
                                </tr>
                                <tr>
                                    <th>From:</th>
                                    <td>Mentari Address</td>
                                </tr>
                                <tr>
                                    <th colspan="2">
                                        Dear Dr,<br> Thank you for seeing this patient. </th>
                                </tr>
                                <tr>
                                    <th>Diagnosis: </th>
                                    <td>{{ this.diagnosis }}</td>
                                </tr>
                                <tr>
                                    <th>Reason For Referral: </th>
                                    <td>{{ this.reason_for_referral }}</td>
                                </tr>
                                <tr>
                                    <th>Summary: </th>
                                    <td>{{ this.summary }}</td>
                                </tr>
                                <tr>
                                    <th>Management: </th>
                                    <td>{{ this.management }}</td>
                                </tr>
                                <tr>
                                    <th>Medication: </th>
                                    <td>{{ this.medication }}</td>
                                </tr>
                                <tr>
                                    <th colspan="2">Thank You,</th>
                                </tr>
                                <tr>
                                    <th>Name: </th>
                                    <td>{{ this.name }}</td>
                                </tr>
                                <tr>
                                    <th>Designation: </th>
                                    <td>{{ this.designation }}</td>
                                </tr>
                                <tr>
                                    <th>Hospital: </th>
                                    <td>{{ this.hospital }}</td>
                                </tr>
                            </tbody>
                        </table>

                        <p v-if="errorList.length">
                            <ul>
                                <li style="color:red" v-for='err in errorList' :key='err'>
                                    {{ err }}
                                </li>
                            </ul>
                        </p>
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
        data() {
            return {
                userdetails: null,
                patientdetails: null,
                errorList: [],
                servicelist: [],
                outcomelist: [],
                comlexcitylist: [],
                codelist: [],
                icdcatcodelist: [],
                diagonisislist: [],
                locationlist: [],
                Id: 0,
                diagnosis: "",
                reason_for_referral: "",
                summary: "",
                management: "",
                medication: "",
                name: "",
                designation: "",
                hospital: "",
                location_services: 0,
                type_diagnosis_id: 0,
                category_services: "",
                code_id: 0,
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
                appId: null,
                showStatus:0,
                icdcatcodelistadditional:[],
                additional_code_id: 0,
                additional_diagnosis: 0,
                sub_code_id:0,
                additional_sub_code_id:0,
            };
        },
        name: "progress-note",
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
            this.GetList();
            this.GetPatientdetails();
            let urlParams1 = new URLSearchParams(window.location.search);
            this.pid = urlParams1.get("pid");
            this.type = urlParams1.get("type");
            this.appId = urlParams.get("appId");
            this.getdetails();

          this.name = this.userdetails.user.name;
          this.designation = this.userdetails.designation.section_value;
          this.hospital = this.userdetails.branch.hospital_branch_name;
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
            async onCreateEvent() {
                this.$swal.fire({
                    title: 'Do you want to save as draft?',
                    showCancelButton: true,
                    confirmButtonText: 'Save',
                }).then(async (result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                      var Boxvalue1=[];
                      var Boxvalue2=[];
                      var Boxvalue3=[];
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
                          Boxvalue1.push({ additionalboxdiagnosis });

                          $("#subcodeicd :selected").each(function () {
                              if (subcodeicd) {
                                  subcodeicd = subcodeicd + "," + this.value;
                              } else {
                                  subcodeicd = this.value;
                              }
                          });
                          Boxvalue2.push({ subcodeicd });

                          $("#additionalsubcodeicd :selected").each(function () {
                              if (additionalsubcodeicd) {
                              additionalsubcodeicd = additionalsubcodeicd + "," + this.value;
                              } else {
                              additionalsubcodeicd = this.value;
                              }
                          });
                          Boxvalue3.push({ additionalsubcodeicd });
                        try {
                            this.loader = true;
                            const headers = {
                                Authorization: "Bearer " + this.userdetails.access_token,
                                Accept: "application/json",
                                "Content-Type": "application/json",
                            };
                            const response = await this.$axios.post(
                                "internal-referral/add", {
                                    added_by: this.userdetails.user.id.toString(),
                                    patient_mrn_id: this.Id,
                                    diagnosis: this.diagnosis,
                                    reason_for_referral: this.reason_for_referral,
                                    summary: this.summary,
                                    management: this.management,
                                    medication: this.medication,
                                    name: this.name,
                                    designation: this.designation,
                                    hospital: this.hospital,
                                    location_services: this.location_services,
                                    services_id: this.services_id,
                                    code_id: this.code_id,
                                    type_diagnosis_id: this.type_diagnosis_id.id,
                                    category_services: this.category_services,
                                    complexity_services: this.complexity_services,
                                    outcome: this.outcome,
                                    medication_des: this.medication_des,
                                    appId: this.appId,

                                   additional_diagnosis: JSON.stringify(additionalboxdiagnosis),
                                   additional_code_id: this.additional_code_id,
                                   sub_code_id: JSON.stringify(subcodeicd),
                                   additional_sub_code_id: JSON.stringify(additionalsubcodeicd),

                                    pid:this.pid,
                                    status: "0",
                                }, {
                                    headers
                                }
                            );
                            console.log("response", response.data);
                            if (response.data.code == 200) {
                                this.loader = false;
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
            async onPublishEvent() {
                this.$swal.fire({
                    title: 'Do you want to save the changes?',
                    showCancelButton: true,
                    confirmButtonText: 'Save',
                }).then(async (result) => {
                  var Boxvalue1=[];
                      var Boxvalue2=[];
                      var Boxvalue3=[];
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
                          Boxvalue1.push({ additionalboxdiagnosis });

                          $("#subcodeicd :selected").each(function () {
                              if (subcodeicd) {
                                  subcodeicd = subcodeicd + "," + this.value;
                              } else {
                                  subcodeicd = this.value;
                              }
                          });
                          Boxvalue2.push({ subcodeicd });

                          $("#additionalsubcodeicd :selected").each(function () {
                              if (additionalsubcodeicd) {
                              additionalsubcodeicd = additionalsubcodeicd + "," + this.value;
                              } else {
                              additionalsubcodeicd = this.value;
                              }
                          });
                          Boxvalue3.push({ additionalsubcodeicd });
                    if (result.isConfirmed) {
                        this.errorList = [];
                        this.validate = true;
                        try {
                            if (!this.diagnosis) {
                                this.errorList.push("Diagnosis is required");
                            }
                            if (!this.reason_for_referral) {
                                this.errorList.push("Reason For Referral is required");
                            }
                            if (!this.summary) {
                                this.errorList.push("Summary is required");
                            }
                            if (!this.management) {
                                this.errorList.push("Management is required");
                            }
                            if (!this.medication) {
                                this.errorList.push("Medication is required");
                            }
                            if (!this.name) {
                                this.errorList.push("Name is required");
                            }
                            if (!this.designation) {
                                this.errorList.push("Designation is required");
                            }
                            if (!this.hospital) {
                                this.errorList.push("Hospital is required");
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
                                    if (!JSON.stringify(subcodeicd)) {
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
                            if (
                                this.diagnosis &&
                                this.reason_for_referral &&
                                this.summary &&
                                this.management &&
                                this.medication &&
                                this.name &&
                                this.designation &&
                                this.hospital &&
                                this.location_services &&
                                this.type_diagnosis_id &&
                                this.category_services &&
                                this.complexity_services &&
                                this.outcome &&
                                this.validate
                            ) {
                                this.loader = true;
                                const headers = {
                                    Authorization: "Bearer " + this.userdetails.access_token,
                                    Accept: "application/json",
                                    "Content-Type": "application/json",
                                };
                                const response = await this.$axios.post(
                                    "internal-referral/add", {
                                        added_by: this.userdetails.user.id.toString(),
                                        patient_mrn_id: this.Id,
                                        diagnosis: this.diagnosis,
                                        reason_for_referral: this.reason_for_referral,
                                        summary: this.summary,
                                        management: this.management,
                                        medication: this.medication,
                                        name: this.name,
                                        designation: this.designation,
                                        hospital: this.hospital,
                                        location_services: this.location_services,
                                        services_id: this.services_id,
                                        code_id: this.code_id,
                                        type_diagnosis_id: this.type_diagnosis_id.id,
                                        category_services: this.category_services,
                                        complexity_services: this.complexity_services,
                                        outcome: this.outcome,
                                        medication_des: this.medication_des,
                                        appId: this.appId,

                                        additional_diagnosis: JSON.stringify(additionalboxdiagnosis),
                                        additional_code_id: this.additional_code_id,
                                        sub_code_id: JSON.stringify(subcodeicd),
                                        additional_sub_code_id: JSON.stringify(additionalsubcodeicd),
                                        pid:this.pid,
                                        status: "1",
                                    }, {
                                        headers
                                    }
                                );
                                console.log("response", response.data);
                                if (response.data.code == 200) {
                                    this.loader = false;
                                    this.$swal.fire(
                                        'Successfully Submitted.',
                                        'Data is inserted.',
                                        'success',
                                    );
                                    this.showStatus = 1;
                                } else {
                                    this.loader = false;
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
              alert('supbro');
              const headers = {
                  Authorization: "Bearer " + this.userdetails.access_token,
                  Accept: "application/json",
                  "Content-Type": "application/json",
              };
              console.log("my id", event);
              const response = await this.$axios.post(
                  "diagnosis/getIcd9subcodeList", {
                      icd_category_code: event.target.value,

                  }, {
                      headers
                  }
              );
              if (response.data.code == 200 || response.data.code == "200") {
                  this.icdcatcodelistadditional = response.data.list;

              } else {
                  this.icdcatcodelistadditional  = [];
              }
          },
          resetmodel() {
                this.diagnosis = "";
                this.reason_for_referral = "";
                this.summary = "";
                this.management = "";
                this.medication = "";
                this.name = "";
                this.designation = "";
                this.hospital = "";
                this.location_services = 0;
                this.type_diagnosis_id = 0;
                this.category_services = "";
                this.code_id = 0;
                this.sub_code_id = 0;
                this.complexity_services = 0;
                this.outcome = 0;
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
                        type: "InternalRefferalForm",
                    }, {
                        headers
                    }
                );
                if (response.data.code == 200) {

                    this.Id = response.data.Data[0].patient_mrn_id;
                    this.reason_for_referral = response.data.Data[0].reason_for_referral;
                    this.summary = response.data.Data[0].summary;
                    this.management = response.data.Data[0].management;
                    this.medication = response.data.Data[0].medication;
                    this.name = response.data.Data[0].name;
                    this.designation = response.data.Data[0].designation;
                    this.hospital = response.data.Data[0].hospital;
                    this.location_services = response.data.Data[0].location_services;
                    this.services_id = response.data.Data[0].services_id;
                    this.code_id = response.data.Data[0].code_id;
                    this.category_services = response.data.Data[0].category_services;
                    this.complexity_services = response.data.Data[0].complexity_services;
                    this.outcome = response.data.Data[0].outcome;
                    this.medication_des = response.data.Data[0].medication_des;

                    this.additional_code_id= response.data.Data[0].add_code_id;

                      this.additional_diagnosis = response.data.Data[0].add_type_diagnosis_id.split(",");
                      $("#additionalboxdiagnosis")
                      .val(this.additional_diagnosis)
                      .trigger("change");

                      this.sub_code_id = response.data.Data[0].sub_code_id.split(",");
                      $("#subcodeicd")
                      .val(this.sub_code_id)
                      .trigger("change");


                      this.additional_sub_code_id = response.data.Data[0].add_sub_code_id.split(",");
                      $("#additionalsubcodeicd")
                      .val(this.additional_sub_code_id)
                      .trigger("change");

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

                    const response4 = await this.$axios.get("diagnosis/getIcd10codeList", {
                        headers,
                    });
                    if (response4.data.code == 200 || response4.data.code == "200") {
                        this.diagonisislist = response4.data.list;
                    } else {
                        this.diagonisislist = [];
                    }

                    const response5 = await this.$axios.post(
                        "diagnosis/getIcd9subcodeList", {
                            icd_category_code: this.additional_code_id
                        }, {
                            headers
                        }
                    );
                    if (response5.data.code == 200 || response5.data.code == "200") {
                        this.icdcatcodelistadditional = response5.data.list;
                    } else {
                        this.icdcatcodelistadditional = [];
                    }

                    this.diagonisislist.forEach(element => {
                        if (element.id == response.data.Data[0].type_diagnosis_id) {
                            this.type_diagnosis_id = {
                                id: element.id,
                                text: element.icd_code + ' ' + element.icd_name
                            };
                            this.diagnosis = element.icd_code + ' ' + element.icd_name;
                        }
                    });
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

                } else {
                    this.$swal.fire({
                        icon: 'error',
                        title: 'Oops... Something Went Wrong!',
                        text: 'the error is: ' + this.error,
                        footer: ''
                    });
                }
            },
            OnPrint() {
                var newstr = document.getElementsByClassName("result")[0].innerHTML;
                document.body.innerHTML = newstr;
                window.print();
                // Reload the page to refresh the data
                this.$router.go(-2);
            },
            GoBack() {
                this.$router.push({
                    path: "/modules/Intervention/patient-summary",
                    query: {
                        id: this.Id,
                        appId: this.appId
                    },
                });
            },
            BindDiagnosis() {
                this.diagnosis = this.type_diagnosis_id.text;
            },
        },
    };
    </script>

    <style scoped>
    .hide {
        display: none;
    }
    </style>
