<template>
<div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
        <CommonHeader />
        <main>
            <div class="container-fluid px-4">
                <div class="page-title">
                    <h1>Job Start Report</h1>
                </div>

                <div class="card mb-4">
                    <div class="card-body">
                        <div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label class="form-label">Client<small style="color:red">*</small> </label>
                                        <input type="text" class="form-control" v-model="client" />
                                    </div>
                                </div>
                            </div>
                            <!-- close-row -->

                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label class="form-label">Employment Specialist<small style="color:red">*</small> </label>
                                        <input type="text" class="form-control" v-model="employment_specialist" />
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label class="form-label">Case Manager<small style="color:red">*</small> </label>
                                        <select class="form-select" v-model="case_manager">
                                            <option value="0">
                                                Select Case Manager
                                            </option>
                                            <option v-for="cm in casemanagerlist" v-bind:key="cm.id" v-bind:value="cm.id">
                                                {{ cm.name }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <!-- close-row -->

                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label class="form-label">First Date Of Work<small style="color:red">*</small> </label>
                                        <input type="date" class="form-control" v-model="first_date_of_work" />
                                    </div>
                                </div>
                            </div>
                            <!-- close-row -->

                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label class="form-label">Job Title<small style="color:red">*</small> </label>
                                        <input type="text" class="form-control" v-model="job_title" />
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label class="form-label">Duties Field<small style="color:red">*</small> </label>
                                        <input type="text" class="form-control" v-model="duties_field" />
                                    </div>
                                </div>
                            </div>
                            <!-- close-row -->

                            <div class="row">
                                <div class="col-sm-4">
                                    <div class="mb-3">
                                        <label class="form-label">Rate Of Pay<small style="color:red">*</small> </label>
                                        <input type="text" class="form-control" v-model="rate_of_pay" />
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="mb-3">
                                        <label class="form-label">Benefits Field<small style="color:red">*</small> </label>
                                        <input type="text" class="form-control" v-model="benefits_field" />
                                    </div>
                                </div>

                                <div class="col-sm-4">
                                    <div class="mb-3">
                                        <label class="form-label">Work Schedule<small style="color:red">*</small> </label>
                                        <input type="text" class="form-control" v-model="work_schedule" />
                                    </div>
                                </div>
                            </div>
                            <!-- close-row -->
                            <div>
                                <div class="row mb-3">
                                    <label class="form-label">Disclosure<small style="color:red">*</small> </label>
                                    <div class="col-sm-6">
                                        <div class="form-check form-check-inline">
                                            <b-form-group v-slot="{ ariaDescribedby }">
                                                <b-form-radio v-model="disclosure" :aria-describedby="ariaDescribedby" name="some-radios" value="Yes"><span class="form-check-label" for="inlineRadio11">Yes - worker has agreed to employer contact and has
                                                        signed a release</span></b-form-radio>
                                            </b-form-group>
                                            <b-form-group v-slot="{ ariaDescribedby }">
                                                <b-form-radio v-model="disclosure" :aria-describedby="ariaDescribedby" name="some-radios" value="No"><span class="form-check-label" for="inlineRadio12">No - worker does not want employer contact</span></b-form-radio>
                                            </b-form-group>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="row mb-3" v-if="this.type != 'view'">
                  <label class="form-label">Disclosure</label>
                  <div class="col-sm-6">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio11"
                        value="Yes"
                        v-model="disclosure"
                      />
                      <label class="form-check-label" for="inlineRadio11"
                        >Yes - worker has agreed to employer contact and has
                        signed a release</label
                      >
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio22"
                        value="No"
                        v-model="disclosure"
                      />
                      <label class="form-check-label" for="inlineRadio22"
                        >No - worker does not want employer contact
                      </label>
                    </div>
                  </div>
                </div> -->
                            <!-- close-row -->

                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label class="form-label">Name of Employer<small style="color:red">*</small> </label>
                                        <input type="text" class="form-control" v-model="name_of_employer" />
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label class="form-label">Name of Supervisor<small style="color:red">*</small> </label>
                                        <input type="text" class="form-control" v-model="name_of_superviser" />
                                    </div>
                                </div>
                            </div>
                            <!-- close-row -->
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="mb-3">
                                        <label class="form-label">Address<small style="color:red">*</small> </label>
                                        <textarea class="form-control textarea" v-model="address"></textarea>
                                    </div>
                                </div>
                            </div>
                            <!-- close-row -->

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
                                            <div class="row mb-3 align-items-flex-start">
                                                <label class="col-sm-4 col-form-label">Type Of Diagnosis<small style="color:red">*</small></label>
                                                <div class="col-sm-8">
                                                    <select
                                                    id="type_diagnosis_id"
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
                                                <label class="col-sm-4 col-form-label">Category Of Services<small style="color:red">*</small>
                                                </label>
                                                <div class="col-sm-8">
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="assisstance" v-model="category_services" />
                                                        <label class="form-check-label" for="inlineRadio1">Assisstance / Supervision</label>
                                                    </div>
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="clinical-work" v-model="category_services" />
                                                        <label class="form-check-label" for="inlineRadio2">Clinical Work / Procedure
                                                        </label>
                                                    </div>
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="external" v-model="category_services" />
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
                            <br>
                            <br>
                            <div class="d-flex">

                                <button @click="GoBack" class="btn btn-primary btn-text"><i class="fa fa-arrow-alt-to-left"></i> Back
                                </button>

                                <div class="btn-right" :class="SidebarAccess!=1?'hide':''" v-if="!pid">
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
    name: "job-start-report",
    data() {
        return {
            userdetails: null,
            errorList: [],
            servicelist: [],
            outcomelist: [],
            comlexcitylist: [],
            codelist: [],
            icdcatcodelist: [],
            addicdcatcodelist: [],
            diagonisislist: [],
            locationlist: [],
            titlelist: [],
            casemanagerlist: [],
            employerlist: [],
            Id: 0,
            appId: 0,
            pid: 0,
            client: "",
            employment_specialist: "",
            case_manager: "",
            first_date_of_work: "",
            job_title: "",
            duties_field: "",
            rate_of_pay: "",
            benefits_field: "",
            work_schedule: "",
            disclosure: "",
            name_of_employer: "",
            name_of_superviser: "",
            address: "",
            location_services_id: 0,
            category_services: "",
            code_id: 0,
            add_code_id:0,
            complexity_services_id: 0,
            outcome_id: 0,
            medication_des: "",
            services_id: 0,
            serviceid: 0,
            validate: true,
            assistancelist: [],
            externallist: [],
            SidebarAccess: null,
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
        });
        let urlParams = new URLSearchParams(window.location.search);
        this.Id = urlParams.get("id");
        this.appId = urlParams.get("appId");
        this.GetPatientdetails();
        if (this.Id) {

            this.GetList();
        }


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
                this.client = response.data.list[0].name_asin_nric;
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
        async getAddress(event) {
            const headers = {
                Authorization: "Bearer " + this.userdetails.access_token,
                Accept: "application/json",
                "Content-Type": "application/json",
            };
            const response = await this.$axios.get(
                "job-companies/getListById?id=" + this.name_of_employer, {
                    headers
                }
            );
            if (response.data.code == 200 || response.data.code == "200") {
                this.address = JSON.stringify(response.data.list[0].company_address_1 + response.data.list[0].company_address_2 + response.data.list[0].company_address_3 + "," + response.data.list[0].postcode);
            } else {
                this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + this.error,
                  footer: ''
                });
            }
        },
        async onCreateEvent() {
            var type_diagnosis_id = 0;
      $("#type_diagnosis_id :selected").each(function () {
        if (type_diagnosis_id) {
          type_diagnosis_id = type_diagnosis_id + "," + this.value;
        } else {
          type_diagnosis_id = this.value;
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
                            "intervention/job-start-form", {
                                added_by: this.userdetails.user.id,
                                patient_id: this.Id,
                                client: this.client,
                                employment_specialist: this.employment_specialist,
                                case_manager: this.case_manager,
                                first_date_of_work: this.first_date_of_work,
                                job_title: this.job_title,
                                duties_field: this.duties_field,
                                rate_of_pay: this.rate_of_pay,
                                benefits_field: this.benefits_field,
                                work_schedule: this.work_schedule,
                                disclosure: this.disclosure,
                                name_of_employer: this.name_of_employer,
                                name_of_superviser: this.name_of_superviser,
                                address: this.address,
                                location_of_service: this.location_services_id,
                                type_of_diagnosis: JSON.stringify(type_diagnosis_id),
                                category_of_services: this.category_services,
                                services: this.services_id,
                                icd_9_code: this.code_id,
                                icd_9_subcode: JSON.stringify(sub_code_id),
                                add_code_id: this.add_code_id,
                                add_sub_code_id: JSON.stringify(add_sub_code_id),
                                complexity_of_services: this.complexity_services_id,
                                outcome: this.outcome_id,
                                medication_prescription: this.medication_des,
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
                                title: 'Oops... Something Went Wrong!',
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
            var type_diagnosis_id = 0;
      $("#type_diagnosis_id :selected").each(function () {
        if (type_diagnosis_id) {
          type_diagnosis_id = type_diagnosis_id + "," + this.value;
        } else {
          type_diagnosis_id = this.value;
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
                title: 'Do you want to save the changes?',
                showCancelButton: true,
                confirmButtonText: 'Save',
            }).then(async (result) => {
                if (result.isConfirmed) {
                    this.validate = true;
                    this.errorList = [];
                    try {
                        if (!this.client) {
                            this.errorList.push("Client is required");
                        }
                        if (!this.employment_specialist) {
                            this.errorList.push("Employment Specialist is required");
                        }
                        if (!this.case_manager) {
                            this.errorList.push("Case Manager is required");
                        }
                        if (!this.first_date_of_work) {
                            this.errorList.push("First Date Of Work is required");
                        }
                        if (!this.job_title) {
                            this.errorList.push("Job Title is required");
                        }
                        if (!this.duties_field) {
                            this.errorList.push("Duties Field is required");
                        }
                        if (!this.rate_of_pay) {
                            this.errorList.push("Rate Of Pay is required");
                        }
                        if (!this.benefits_field) {
                            this.errorList.push("Benefits Field is required");
                        }
                        if (!this.work_schedule) {
                            this.errorList.push("Work Schedule is required");
                        }
                        if (!this.disclosure) {
                            this.errorList.push("Disclosure is required");
                        }
                        if (!this.name_of_employer) {
                            this.errorList.push("Name of Employer is required");
                        }
                        if (!this.name_of_superviser) {
                            this.errorList.push("Name of Superviser is required");
                        }
                        if (!this.address) {
                            this.errorList.push("Address is required");
                        }
                        if (!this.location_services_id) {
                            this.errorList.push("Location Of Services is required");
                        }
                        if (!type_diagnosis_id) {
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
                                if (!sub_code_id) {
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
                            this.client &&
                            this.employment_specialist &&
                            this.case_manager &&
                            this.first_date_of_work &&
                            this.job_title &&
                            this.duties_field &&
                            this.rate_of_pay &&
                            this.benefits_field &&
                            this.work_schedule &&
                            this.disclosure &&
                            this.name_of_employer &&
                            this.name_of_superviser &&
                            this.address &&
                            this.location_services_id &&
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
                                "intervention/job-start-form", {
                                    added_by: this.userdetails.user.id,
                                    patient_id: this.Id,
                                    client: this.client,
                                    employment_specialist: this.employment_specialist,
                                    case_manager: this.case_manager,
                                    first_date_of_work: this.first_date_of_work,
                                    job_title: this.job_title,
                                    duties_field: this.duties_field,
                                    rate_of_pay: this.rate_of_pay,
                                    benefits_field: this.benefits_field,
                                    work_schedule: this.work_schedule,
                                    disclosure: this.disclosure,
                                    name_of_employer: this.name_of_employer,
                                    name_of_superviser: this.name_of_superviser,
                                    address: this.address,
                                    location_of_service: this.location_services_id,
                                    type_of_diagnosis: JSON.stringify(type_diagnosis_id),
                                    category_of_services: this.category_services,
                                    services: this.services_id,
                                    icd_9_code: this.code_id,
                                    icd_9_subcode: JSON.stringify(sub_code_id),
                                    add_code_id: this.add_code_id,
                                    add_sub_code_id: JSON.stringify(add_sub_code_id),
                                    complexity_of_services: this.complexity_services_id,
                                    outcome: this.outcome_id,
                                    medication_prescription: this.medication_des,
                                    appId: this.appId,
                                    status: "1",
                                }, {
                                    headers
                                }
                            );
                            console.log("response", response.data);
                            if (response.data.code == 200) {
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
            const response7 = await this.$axios.get(
                "staff-management/getListByBranchId/" + this.userdetails.branch.branch_id, {
                    headers,
                });
            this.casemanagerlist = response7.data.list;
            const response8 = await this.$axios.get(
                "job-companies/list", {
                    headers,
                });
            this.employerlist = response8.data.list;
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
        resetmodel() {
            this.added_by = "";
            this.patient_id = "";
            this.client = "";
            this.employment_specialist = "";
            this.case_manager = "";
            this.first_date_of_work = "";
            this.job_title = "";
            this.duties_field = "";
            this.rate_of_pay = "";
            this.benefits_field = "";
            this.work_schedule = "";
            this.disclosure = "";
            this.name_of_employer = "";
            this.name_of_superviser = "";
            this.address = "";
            this.location_services_id = 0;
            this.category_services = "";
            this.code_id = 0;
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
                "/patient-appointment-details/fetchViewHistoryListDetails", {
                    id: this.pid,
                    type: "JobStartReport",
                }, {
                    headers
                }
            );
            if (response.data.code == 200) {

                this.Id = response.data.Data[0].patient_id;

                this.client = response.data.Data[0].client;
                this.employment_specialist =
                    response.data.Data[0].employment_specialist;
                this.case_manager = response.data.Data[0].case_manager;
                this.first_date_of_work = response.data.Data[0].first_date_of_work;
                this.job_title = response.data.Data[0].job_title;
                this.duties_field = response.data.Data[0].duties_field;
                this.rate_of_pay = response.data.Data[0].rate_of_pay;
                this.benefits_field = response.data.Data[0].benefits_field;
                this.work_schedule = response.data.Data[0].work_schedule;
                this.disclosure = response.data.Data[0].disclosure;
                this.name_of_employer = response.data.Data[0].name_of_employer;
                this.name_of_superviser = response.data.Data[0].name_of_superviser;
                this.address = response.data.Data[0].address;
                this.location_services_id = response.data.Data[0].location_of_service;
                this.type_diagnosis_id = response.data.Data[0].type_of_diagnosis;
                this.category_services = response.data.Data[0].category_of_services;
                this.services_id = response.data.Data[0].services;
                this.code_id = response.data.Data[0].icd_9_code;
                this.sub_code_id = response.data.Data[0].icd_9_subcode;
                this.complexity_services_id =
                    response.data.Data[0].complexity_of_services;
                this.outcome_id = response.data.Data[0].outcome;
                this.medication_des = response.data.Data[0].medication_prescription;
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
        }
    },
};
</script>

<style scoped>
.hide {
    display: none;
}
</style>
