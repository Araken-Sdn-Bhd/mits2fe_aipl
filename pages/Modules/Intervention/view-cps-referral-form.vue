<template>
    <div id="layoutSidenav">
        <CommonSidebar />
        <div id="layoutSidenav_content">
            <CommonHeader />
            <main>
                <div class="container-fluid px-4">
                    <div class="page-title">
                        <h1>CPS Referral Form</h1>
                    </div>
    
                    <div class="card mb-4">
                        <div class="card-body">
                            <table class="notes" v-if="details">
                                <thead>
                                    <tr>
                                        <th colspan="2">Patient Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>MRN:</th>
                                        <td>{{ details.patient_mrn }}</td>
                                    </tr>
                                    <tr>
                                        <th>Patient Name:</th>
                                        <td>{{ details.patient_name }}</td>
                                    </tr>
                                    <tr>
                                        <th>NRIC NO:</th>
                                        <td>{{ details.nric }}</td>
                                    </tr>
                                    <tr>
                                        <th>Age:</th>
                                        <td>{{ details.age }}</td>
                                    </tr>
                                    <tr>
                                        <th>Contact No:</th>
                                        <td>{{ details.contact_no }}</td>
                                    </tr>
                                    <tr>
                                        <th>Gender:</th>
                                        <td>{{ details.gender }}</td>
                                    </tr>
                                    <tr>
                                        <th>DOB:</th>
                                        <td>{{ details.birth_date }}</td>
                                    </tr>
                                </tbody>
                            </table>
    
                            <table class="notes">
                                <thead>
                                    <tr>
                                        <th colspan="2">Treatment Needs</th>
                                    </tr>
                                </thead>
                                <div class="row mb-3">
                                    <label class="col-sm-4 col-form-label">Individual</label>
                                    <div class="col-sm-8 ind-box">
                                        <div class="form-check">
                                            <input disabled class="form-check-input" type="checkbox" name="individual1" value="Frequent Relapse" v-model="frequentrelapse" id="ind-1" />
                                            <label class="form-check-label" for="ind-1">
                                               Frequent Relapse
                                            </label>
                                        </div>
    
                                        <div class="form-check">
                                            <input disabled class="form-check-input" type="checkbox" name="individual2" value="Risk(V/SU/SX/N)" v-model="risk" id="ind-2" />
                                            <label class="form-check-label" for="ind-2">
                                                Risk(V/SU/SX/N)
                                            </label>
                                        </div>
    
                                        <div class="form-check">
                                            <input disabled class="form-check-input" type="checkbox" name="individual3" value="Functionality" v-model="functionality" id="ind-3" />
                                            <label class="form-check-label" for="ind-3">
                                                Functionality
                                            </label>
                                        </div>
                                    </div>
                                </div>
    
                                <div class="row mb-3">
                                    <label class="col-sm-4 col-form-label">Medication</label>
                                    <div class="col-sm-8 med-box">
                                        <div class="form-check">
                                            <input disabled class="form-check-input"  type="checkbox" name="medication1" value="Adherence" v-model="adherence" id="med-4"/>
                                            <label class="form-check-label" for="med-4">
                                                Adherence
                                            </label>
                                        </div>
    
                                        <div class="form-check">
                                            <input disabled class="form-check-input" type="checkbox" name="medication2" value="Side Effects" v-model="sideeffect" id="med-5" />
                                            <label class="form-check-label" for="med-5">
                                                Side Effects
                                            </label>
                                        </div>
    
                                        <div class="form-check">
                                            <input disabled class="form-check-input" type="checkbox" name="medication3" value="Depot Monitoring" v-model="depotmonitoring" id="med-6" />
                                            <label class="form-check-label" for="med-6">
                                                Depot Monitoring
                                            </label>
                                        </div>
                                    </div>
                                </div>
    
                                <div class="row mb-3">
                                    <label class="col-sm-4 col-form-label">Support</label>
                                    <div class="col-sm-8 spt-box">
                                        <div class="form-check">
                                            <input disabled class="form-check-input" type="checkbox" name="support1" value="Identification" v-model="identification" id="spt-7" />
                                            <label class="form-check-label" for="spt-7">
                                                Identification
                                            </label>
                                        </div>
    
                                        <div class="form-check">
                                            <input disabled class="form-check-input" type="checkbox" name="support2" value="Psychoeducation" v-model="psychoeducation" id="spt-8" />
                                            <label class="form-check-label" for="spt-8">
                                                Psychoeducation
                                            </label>
                                        </div>
    
                                          <div class="form-check">
                                              <input disabled class="form-check-input" type="checkbox" name="support3" value="Practice" v-model="practice" id="spt-9" />
                                              <label class="form-check-label" for="spt-9">
                                                  Practice
                                              </label>
                                          </div>
                                      </div>
                                  </div>
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
                                                  <label class="col-sm-4 col-form-label">Type Of Diagnosis<small style="color:red">*</small> </label>
                                                  <div class="col-sm-8">
                                                      <select disabled class="form-select" v-model="type_diagnosis_id">
                                                          <option value="0">Select Diagnosis</option>
                                                          <option v-for="catcode in diagonisislist" v-bind:key="catcode.id" v-bind:value="catcode.id">
                                                              {{ catcode.icd_code }} {{ catcode.icd_name }}
                                                          </option>
                                                      </select>
                                                  </div>
                                              </div>
                                              <div class="row mb-3 align-items-flex-start">
                                                    <label class="col-sm-4 col-form-label"
                                                        >Additional Diagnosis</label
                                                    >
                                                    <div class="col-sm-8">
                                                        <select disabled
                                                            id="additionalboxdiagnosis"
                                                            v-model="additional_diagnosis" 
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
                                                  <label class="col-lg-4 col-md-12 col-form-label">Category Of Services<small style="color:red">*</small>
                                                  </label>
                                                  <div class="col-lg-8 col-md-12">
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
                                              <div class="assisstance services hide mb-3">
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
                                              <div class="clinical-work services hide mb-3">
                                                  <div class="row">
                                                      <div class="col-md-6 mb-3">
                                                          <label class="form-label">ICD 9 CODE<small style="color:red">*</small> </label>
                                                          <select disabled class="form-select" v-model="code_id" @change="onCategorycodebind($event)">
                                                              <option value="0">Select code</option>
                                                              <option v-for="type in codelist" v-bind:key="type.id" v-bind:value="type.id">
                                                                  {{ type.icd_category_code }} {{ type.icd_category_name }}
                                                              </option>
                                                          </select>
                                                      </div>
                                                      <div class="col-md-6 mb-3">
                                                          <label class="form-label">ICD 9 SUB CODE<small style="color:red">*</small> </label>
                                                          <select disabled id="subcodeicd" 
                                                                style="width:100%" 
                                                                class="form-select multiselectadditional" 
                                                                v-model="sub_code_id" 
                                                                multiple="multiple">
                                                              <option value="0">Select sub code</option>
                                                              <option v-for="catcode in icdcatcodelist" v-bind:key="catcode.id" v-bind:value="catcode.id">
                                                                  {{ catcode.icd_code }}
                                                                  {{ catcode.icd_name }}
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
                                              <div class="external services hide mb-3">
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
                                                      <label class="form-label">Outcome<small style="color:red">*</small> </label>
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
                                                  <textarea disabled class="form-control textarea" placeholder="" v-model="medication_des"></textarea>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <!--  -->
                              </div>
    
                              <table class="notes mobile-table">
                                  <tbody>
                                      <tr>
                                          <th>Referrer Name:</th>
                                          <td>
                                              <input disabled type="text" class="form-control" name="" v-model="referalname" />
                                          </td>
                                      </tr>
                                      <tr>
                                          <th>Designation:</th>
                                          <td>
                                              <input disabled type="text" class="form-control" name="" v-model="designation" />
                                          </td>
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
                              <br>
                              <br>
                              <div class="d-flex">
                                  <button @click="GoBack" class="btn btn-primary btn-text"><i class="fa fa-arrow-alt-to-left"></i> Back
                                  </button>    
                            </div>
                        </div>
                    </div>
                </div>
    
                <div class="container-fluid px-4 reslt" style="display:none;">
                    <div class="page-title">
                        <h1>CPS Referral Form</h1>
                    </div>
    
                    <div class="card mb-4">
                        <div class="card-body">
                            <table class="notes" v-if="details">
                                <thead>
                                    <tr>
                                        <th colspan="2">Patient Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>MRN:</th>
                                        <td>{{ details.patient_mrn }}</td>
                                    </tr>
                                    <tr>
                                        <th>Patient Name:</th>
                                        <td>{{ details.patient_name }}</td>
                                    </tr>
                                    <tr>
                                        <th>NRIC NO:</th>
                                        <td>{{ details.nric }}</td>
                                    </tr>
                                    <tr>
                                        <th>Age:</th>
                                        <td>{{ details.age }}</td>
                                    </tr>
                                    <tr>
                                        <th>Contact No:</th>
                                        <td>{{ details.contact_no }}</td>
                                    </tr>
                                    <tr>
                                        <th>Gender:</th>
                                        <td>{{ details.gender }}</td>
                                    </tr>
                                    <tr>
                                        <th>DOB:</th>
                                        <td>{{ details.birth_date }}</td>
                                    </tr>
                                </tbody>
                            </table>
    
                            
                            <table class="notes">
                                <tbody>
                                    <tr>
                                        <th>Medication:</th>
                                        <td>
                                            {{ this.medication_des }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
    
                            <table class="notes">
                                <tbody>
                                    <tr>
                                        <th>Referrer Name:</th>
                                        <td>
                                            {{ this.referalname }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Designation:</th>
                                        <td>
                                            {{ this.designation }}
                                        </td>
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
        name: "cps-referral-form",
        data() {
            return {
                userdetails: null,
                Id: 0,
                errorList: [],
                servicelist: [],
                outcomelist: [],
                comlexcitylist: [],
                codelist: [],
                icdcatcodelist: [],
                selectedindividaul: [],
                selectedmedication: [],
                selectedsupport: [],
                diagonisislist: [],
                locationlist: [],
                details: {},
                Individual: "",
                Medication: "",
                Support: "",
                location_services_id: 0,
                type_diagnosis_id: 0,
                category_services: 0,
                code_id: 0,
                sub_code_id: 0,
                complexity_services_id: 0,
                outcome_id: 0,
                medication_des: "",
                patient_mrn_id: "",
                services_id: 0,
                serviceid: 0,
                referalname: "",
                designation: "",
                validate: true,
                assistancelist: [],
                externallist: [],
                indivisuallist: [],
                medicationlist: [],
                supportlist: [],
                pid: 0,
                type: "",
                frequentrelapse: "",
                risk: "",
                functionality: "",
                adherence: "",
                sideeffect: "",
                depotmonitoring: "",
                identification: "",
                psychoeducation: "",
                practice: "",
                SidebarAccess: null,
                appId: 0,
                showStatus: 0,
                icdcatcodelistadditional:[],
                additional_code_id: 0,
                additional_diagnosis: 0,
                additional_sub_code_id:0,
            };
        },
        beforeMount() {
            this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
            this.SidebarAccess = JSON.parse(localStorage.getItem("SidebarAccess"));
            let urlParams = new URLSearchParams(window.location.search);
            this.Id = urlParams.get("id");
            this.appId = urlParams.get("appId");
            this.GetPatientdetails();
            this.GetList();
            let urlParams1 = new URLSearchParams(window.location.search);
            this.pid = urlParams1.get("pid");
            this.type = urlParams1.get("type");
            this.getdetails();
            this.referalname = this.userdetails.user.name;
            this.designation = this.userdetails.designation.section_value;
            this.hospital = this.userdetails.branch.hospital_branch_name;
    
            $(document).ready(function () {
                $('.form-accordion input[type="radio"]').click(function () {
                    var inputValue = $(this).attr("value");
                    var targetBox = $("." + inputValue);
                    $(".services").not(targetBox).hide();
                    $(targetBox).show();
                });
                $('.ind-box input[type="checkbox"]').click(function () {
                    var inputValue = $(this).attr("value");
                    $("." + inputValue).toggle();
                });
                $('.med-box input[type="checkbox"]').click(function () {
                    var inputValue = $(this).attr("value");
                    $("." + inputValue).toggle();
                });
                $('.spt-box input[type="checkbox"]').click(function () {
                    var inputValue = $(this).attr("value");
                    $("." + inputValue).toggle();
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
            async GetPatientdetails() {
                this.loader = true;
                const headers = {
                    Authorization: "Bearer " + this.userdetails.access_token,
                    Accept: "application/json",
                    "Content-Type": "application/json",
                };
                const response = await this.$axios.post(
                    "patient/detail", {
                        patient_id: this.Id,
                    }, {
                        headers
                    }
                );
                console.log("my log", response.data);
                if (response.data.code == 200) {
                    this.loader = false;
                    this.details = response.data.details;
                    console.log("my profile", this.details);
                } else {
                    this.loader = false;
                    this.$swal.fire({
                        icon: 'error',
                        title: 'Oops... Something Went Wrong!',
                        text: 'the error is: ' + this.error,
                        footer: ''
                    });
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
            OnPrint() {
                var newstr = document.getElementsByClassName("reslt")[0].innerHTML;
                document.body.innerHTML = newstr;
                window.print();
                window.location.reload();
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
            GoBack() {
                this.$router.push({
                    path: "/modules/Intervention/patient-summary",
                    query: {
                        id: this.Id,
                        appId: this.appId
                    },
                });
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
                        type: "CpsRefferalForm",
                    }, {
                        headers
                    }
                );
                if (response.data.code == 200) {
                    if (response.data) {
                        this.Id = response.data.Data[0].patient_id;
                        this.location_services_id = response.data.Data[0].location_of_service;
                        this.type_diagnosis_id = response.data.Data[0].type_of_diagnosis;
                        this.category_services = response.data.Data[0].category_of_services;
                        this.services_id = response.data.Data[0].services;
                        this.complexity_services_id = response.data.Data[0].complexity_of_services;
                        this.outcome_id = response.data.Data[0].outcome;
                        this.code_id = response.data.Data[0].icd_9_code;
                        this.medication_des = response.data.Data[0].medication_des;
                        this.referalname = response.data.Data[0].medication_referrer_name;
                        this.designation = response.data.Data[0].medication_referrer_designation;
                        this.additional_code_id= response.data.Data[0].add_code_id;
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
    
                        var jdata1 = JSON.parse(response.data.Data[0].treatment_needs_individual);
                        jdata1.forEach((ele) => {
                            this.treatment_needs_individual = "val";
                            if (ele["Frequent Relapse"] == true) {
                                this.frequentrelapse = true;
                            }
                            if (ele["Risk(V/SU/SX/N)"] == true) {
                                this.risk = true;
                            }
                            if (ele["Functionality"] == true) {
                                this.functionality = true;
                            }
                        });
                        var jdata2 = JSON.parse(response.data.Data[0].treatment_needs_medication);
                        jdata2.forEach((ele) => {
                            this.treatment_needs_medication = "val";
                             //alert(ele["Adherence"]); 
                            if (ele["Adherence"] == true) {
                                // kena pakai condition lain. system bypass condition ni
                                this.adherence = true;
                            }
                            if (ele["Side Effects"] == true) {
                                this.sideeffect = true;
                            }
                            if (ele["Depot Monitoring"] == true) {
                                this.depotmonitoring = true;
                            }
                        });
                        var jdata3 = JSON.parse(response.data.Data[0].treatment_needs_support);
                        jdata3.forEach((ele) => {
                            this.treatment_needs_support = "val";
                            if (ele["Identification"] == true) {
                                this.identification = true;
                            }
                            if (ele["Psychoeducation"] == true) {
                                this.psychoeducation = true;
                            }
                            if (ele["Practice"] == true) {
                                this.practice = true;
                            }
                        });
                        this.additional_diagnosis = response.data.Data[0].add_type_diagnosis_id.split(",");
                        $("#additionalboxdiagnosis")
                        .val(this.additional_diagnosis)
                        .trigger("change");
        
                        this.sub_code_id = response.data.Data[0].icd_9_subcode.split(",");
                        $("#subcodeicd")
                        .val(this.sub_code_id)
                        .trigger("change");
    
                        
                        this.additional_sub_code_id = response.data.Data[0].add_sub_code_id.split(",");
                        $("#additionalsubcodeicd")
                        .val(this.additional_sub_code_id)
                        .trigger("change");
    
                        
    
                        this.GetList();
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
                    } else {
                        this.$swal.fire({
                            icon: 'error',
                            title: 'Oops... Something Went Wrong!',
                            text: 'the error is: ' + this.error,
                            footer: ''
                        });
                    }
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
    