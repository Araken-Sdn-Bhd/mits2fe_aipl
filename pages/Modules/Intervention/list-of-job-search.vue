<template>
<div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
        <CommonHeader />
        <main>
            <div class="container-fluid px-4">
                <div class="page-title">
                    <h1>LIST OF JOB SEARCH</h1>
                </div>
                <div class="card mb-4">
                    <div class="card-body new-form">
                        <div class="row" v-if="patientdetails">
                            <div class="col-sm-6">
                                <div class="mb-3">
                                    <label class="form-label">Name</label>
                                    <input type="text" class="form-control" v-model="patientdetails.name_asin_nric" readonly />
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="mb-3">
                                    <label class="form-label">NRIC</label>
                                    <input type="text" class="form-control" v-model="patientdetails.nric_no" readonly />
                                </div>
                            </div>
                        </div>
                        <!-- close-row -->

                        <div class="row" v-if="patientdetails">
                            <div class="col-sm-4">
                                <div class="mb-3">
                                    <label class="form-label">Age</label>
                                    <input type="text" class="form-control" v-model="patientdetails.age" readonly />
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="mb-3">
                                    <label class="form-label">Date Of Birth</label>
                                    <input type="text" class="form-control" v-model="patientdetails.birth_date" readonly />
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="mb-3">
                                    <label class="form-label">Gender</label>
                                    <input type="text" class="form-control" v-model="patientdetails.gender[0].section_value" readonly />
                                </div>
                            </div>
                        </div>
                        <form method="post" @submit.prevent="OnSubmit">
                            <div class="table-responsive">
                                <table class="job-search-table" id="companydetail" v-if="!pid">
                                    <thead>
                                        <tr>
                                            <th>Company Name <small style="color:red">*</small> </th>
                                            <th>Job Applied <small style="color:red">*</small> </th>
                                            <th>Application Date <small style="color:red">*</small> </th>
                                            <th>Interview Date <small style="color:red">*</small> </th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody class="optionBox">
                                        <tr class="block">
                                            <td><input type="text" required class="form-control name" /></td>
                                            <td><input type="text" required class="form-control job" /></td>
                                            <td>
                                                <input type="date" required class="form-control appdate" />
                                            </td>
                                            <td><input type="date" required class="form-control intdate" /></td>
                                            <td>
                                                <a class="add-row"><i class="fa fa-plus"></i></a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
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
                                                        <option v-for="catcode in diagonisislist" v-bind:key="catcode.id" v-bind:value="catcode.id">
                                                            {{ catcode.icd_code }} {{ catcode.icd_name }}
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="row mb-3 align-items-flex-start">
                                                <label class="col-sm-4 col-form-label">Additional Type Of Diagnosis</label>
                                                <div class="col-sm-8 align-items-flex-start" >
                                                    <select
                                                    id="additionalbox" 
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
                                                <label class="col-lg-4 col-sm-12 col-form-label">Category Of Services<small style="color:red">*</small>
                                                </label>
                                                <div class="col-lg-8 col-sm-12">
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
                                            <div class="assisstance services hide mb-3">
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
                                            <div class="clinical-work services hide mb-3">
                        <div class="row mb-6 align-items-flex-start">
                          <div class="col-md-4 mb-3">
                            <label class="form-label">ICD 9 CODE<small style="color:red">*</small> </label>
                            <select
                              class="form-select"
                              v-model="code_id"
                              @change="onCategorycodebind($event)"
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
                              id="sub_code_id" style="width:100%">

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
                                    @change="onCategoryaddcodebind($event)"
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
                                    id="add_sub_code_id" style="width:100%">

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
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            MEDICATION
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <div class="col-md-12 mb-3">
                                                <label class="form-label">Medication</label>
                                                <textarea class="form-control textarea" placeholder="Please Type Prescription Here" v-model="medication_des"></textarea>
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
                                <button @click="GoBack" class="btn btn-primary btn-text">
                                    <i class="fa fa-arrow-alt-to-left"></i> Back
                                </button>
                                <div class="btn-right" v-if="!pid">
                                  <button type="submit" class="btn btn-warning btn-text ml-auto">
                                    <i class="fa fa-save"></i> Save
                                </button>
                                  </div>
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
import CommonHeader from "../../../components/CommonHeader.vue";
import CommonSidebar from "../../../components/CommonSidebar.vue";
export default {
    components: {
        CommonSidebar,
        CommonHeader
    },
    name: "list-of-previous-or-current-job",
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
            titlelist: [],

            codelistadditional: [],
            icdcatcodelistadditional: [],
            Id: 0,
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
            loader: false,
            assistancelist: [],
            externallist: [],
            pid: 0,
            type: "",
            jobSDESCRIPTION: [],
            appId: 0,

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
        this.SidebarAccess = JSON.parse(localStorage.getItem("SidebarAccess"));

        $(document).ready(function () {
            $('.form-accordion input[type="radio"]').click(function () {
                var inputValue = $(this).attr("value");
                var targetBox = $("." + inputValue);
                $(".services").not(targetBox).hide();
                $(targetBox).show();
            });

            $(".add-row").click(function (i) {
                $(".block:last").after(
                    '<tr class="block"> <td><input type="text" class="form-control name" /></td><td><input type="text" class="form-control job" /></td><td><input type="date" class="form-control appdate" /></td><td><input type="date" class="form-control intdate" /></td> <td> <span class="remove"><i class="fal fa-times"></i></span></td></tr>'
                );
            });
            $(".optionBox").on("click", ".remove", function () {
                $(this).closest(".block").remove();
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
      
    },
    mounted() {
        $(document).ready(function () {
            $(".multiselect").select2({
                placeholder: "Please Select",
            });
        });
    },
    methods: {
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
        async OnSubmit() {
            var jobSDESCRIPTION = [];
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
            }).then(async(result) => {
              if (result.isConfirmed) {
        this.errorList = [];
        this.validate = true;
            try {
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
                    this.location_services_id &&
                    this.type_diagnosis_id &&
                    this.category_services &&
                    this.complexity_services_id &&
                    this.outcome_id &&
                    this.validate
                ) {
                    this.loader = true;
                    $("table#companydetail > tbody > tr").each(function () {
                        var obj = {};
                        obj.company_name = $('td input[type="text"].name', this).val();
                        obj.job_applied = $('td input[type="text"].job', this).val();
                        obj.application_date = $('td input[type="date"].appdate', this).val();
                        obj.interview_date = $('td input[type="date"].intdate', this).val();
                        jobSDESCRIPTION.push(obj);

                    });
                    console.log("description array", jobSDESCRIPTION);
                    const headers = {
                        Authorization: "Bearer " + this.userdetails.access_token,
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    };
                    const response = await this.$axios.post(
                        "job-search-list/add", {
                            added_by: this.userdetails.user.id,
                            patient_id: this.Id,
                            job_listed: jobSDESCRIPTION,
                            location_services: this.location_services_id,
                            type_diagnosis_id: this.type_diagnosis_id,
                            add_type_of_diagnosis: JSON.stringify(additionalbox),
                            category_services: this.category_services,
                            services_id: this.services_id,
                            code_id: this.code_id,
                            complexity_services: this.complexity_services_id,
                            outcome: this.outcome_id,
                            medication_des: this.medication_des,
                            appId: this.appId,
                            status:1,
                            code_id: this.code_id ?? null,
                            sub_code_id: JSON.stringify(sub_code_id),
                            add_code_id: this.add_code_id,
                            add_sub_code_id: JSON.stringify(add_sub_code_id),
                        }, {
                            headers
                        }
                    );
                    console.log("response", response.data);
                    if (response.data.code == 200) {
                        this.loader = false;
                        this.GoBack();
                        this.$swal.fire('Successfully Saved', '', 'success');
                    } else {
                        this.loader = false;
                        this.$swal.fire({
                            icon: 'error',
                            title: 'Oops... Something Went Wrong!',
                            text: 'the error is: ' + JSON.stringify(response.data.message),
                            footer: ''
                        });
                    }
                }
            } catch (e) {
                this.loader = false;
                this.$swal.fire({
                    icon: 'error',
                    title: 'Oops... Something Went Wrong!',
                    text: 'the error is: ' + JSON.stringify(response.data.message),
                    footer: ''
                });
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
            const response6 = await this.$axios.get(
                "intervention/job-start-form-list", {
                    headers,
                }
            );
            if (response6.data.code == 200 || response6.data.code == "200") {
                this.titlelist = response6.data.list;
            } else {
                this.titlelist = [];
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
        //async getdetails() {
        //    const headers = {
        //        Authorization: "Bearer " + this.userdetails.access_token,
        //        Accept: "application/json",
        //        "Content-Type": "application/json",
        //    };
        //    const response = await this.$axios.post(
        //        "/patient-appointment-details/fetchViewHistoryListDetails", {
        //            id: this.pid,
        //            type: "ListofJobSearch",
        //        }, {
        //            headers
        //        }
        //    );
        //    if (response.data.code == 200) {

        //        this.Id = response.data.Data[0].patient_id;
        //        this.location_services_id = response.data.Data[0].location_services;
        //        this.type_diagnosis_id = response.data.Data[0].type_diagnosis_id;
        //        this.category_services = response.data.Data[0].category_services;
        //        this.services_id = response.data.Data[0].services_id;
        //        this.code_id = response.data.Data[0].code_id;
        //        this.sub_code_id = response.data.Data[0].sub_code_id;
        //        this.complexity_services_id = response.data.Data[0].complexity_services;
        //        this.outcome_id = response.data.Data[0].outcome;
        //        this.medication_des = response.data.Data[0].medication_des;
        //        this.jobSDESCRIPTION = response.data.Data[0].jobs;
        //        this.sub_code_id = response.data.Data[0].sub_code_id.split(",");
        //            $("#subcode")
        //            .val(this.sub_code_id)
        //            .trigger("change");
        //        this.additional_diagnosis = response.data.Data[0].additional_diagnosis.split(",");
        //                    $("#additionalbox")
        //                    .val(this.additional_diagnosis)
        //                    .trigger("change");

        //        this.additional_subcode = response.data.Data[0].additional_subcode.split(",");
        //                    $("#addsubcode")
        //                    .val(this.additional_subcode)
        //                    .trigger("change");
        //        this.GetList();
        //        this.GetPatientdetails();
        //        const response2 = await this.$axios.post(
        //            "diagnosis/getIcd9subcodeList", {
        //                icd_category_code: this.code_id
        //            }, {
        //                headers
        //            }
        //        );
        //        if (response2.data.code == 200 || response2.data.code == "200") {
        //            this.icdcatcodelist = response2.data.list;

        //        } else {
        //            this.icdcatcodelist = [];
        //        }

        //    } else {
        //        this.$swal.fire({
        //            icon: 'error',
        //            title: 'Oops... Something Went Wrong!',
        //            text: 'the error is: ' + this.error,
        //            footer: ''
        //        });
        //    }
        //},
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

<style scoped>
.hide {
    display: none;
}
</style>
