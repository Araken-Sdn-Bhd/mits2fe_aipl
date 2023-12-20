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
                        <div>
                            <table class="notes">
                                <thead>
                                    <tr>
                                        <th colspan="2">STAFF DETAILS </th>
                                    </tr>
                                </thead>
                                <tbody v-if="this.staff_name">
                                    <tr>
                                        <th>Staff Name / Seen By:</th>
                                        <td>{{ staff_name }}</td>
                                    </tr>
                                    <tr>
                                        <th>Designation:</th>
                                        <td>{{ this.designation }}</td>
                                    </tr>
                                    <tr>
                                        <th>Date:</th>
                                        <td>{{ this.sdate }}</td>
                                    </tr>
                                    <tr>
                                        <th>Time: </th>
                                        <td>{{ this.stime }}</td>
                                    </tr>
                                </tbody>
                            </table>
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
                                        <td>{{ patientdetails.name_asin_nric }}</td>
                                    </tr>
                                    <tr>
                                        <th>NRIC NO:</th>
                                        <td>{{ patientdetails.nric_no }}</td>
                                    </tr>
                                    <tr>
                                        <th>Age:</th>
                                        <td>{{ patientdetails.dob }}</td>
                                    </tr>
                                    <tr>
                                        <th>Contact No:</th>
                                        <td>{{ patientdetails.mobile_no }}</td>
                                    </tr>
                                    <tr>
                                        <th>Gender:</th>
                                        <td>{{ patientdetails.gender[0].section_value }}</td>
                                    </tr>
                                </tbody>
                            </table>

                            <table class="notes">
                                <thead>
                                    <tr>
                                        <th colspan="2">Consultation Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Chief Complaint<small style="color:red">*</small> :</th>
                                        <td>
                                            <textarea disabled class="form-control" placeholder="Enter Description" v-model="chief_complain"></textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>History Of Presenting Illness<small style="color:red">*</small> :</th>
                                        <td>
                                            <textarea disabled class="form-control" rows="15" placeholder="Enter Description" v-model="presenting_illness"></textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Background History<small style="color:red">*</small> :</th>
                                        <td>
                                            <textarea disabled class="form-control" rows="15" placeholder="Enter Description" v-model="background_history"></textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>General Examination<small style="color:red">*</small> :</th>
                                        <td>
                                            <textarea disabled class="form-control" placeholder="Enter Description" v-model="general_examination"></textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Mental State Examination<small style="color:red">*</small> :</th>
                                        <td>
                                            <textarea disabled class="form-control" placeholder="Enter Description" v-model="mental_state_examination"></textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Diagnosis<small style="color:red">*</small> :</th>
                                        <td>
                                            <select disabled class="form-select" v-model="type_diagnosis_id">
                                                <option value="0">Select Diagnosis</option>
                                                <option v-for="catcode in diagonisislist" v-bind:key="catcode.id" v-bind:value="catcode.id">
                                                    {{ catcode.icd_code }} {{catcode.icd_name}}
                                                </option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Management<small style="color:red">*</small> :</th>
                                        <td>
                                            <!-- <input type="text" class="form-control max-width" placeholder="Enter Management Details" v-model="management" /> -->
                                            <textarea disabled class="form-control" rows="15" placeholder="Enter Description" v-model="management"></textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Discussed With<small style="color:red">*</small> :</th>
                                        <td>
                                            <input disabled type="text" class="form-control" placeholder="Enter Psychiatrist Name" v-model="discuss_psychiatrist_name" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Date<small style="color:red">*</small> :</th>
                                        <td>
                                            <input disabled type="date" class="form-control" placeholder="Enter Date" v-model="date" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Time<small style="color:red">*</small> :</th>
                                        <td>
                                            <input disabled type="time" class="form-control" placeholder="Enter Time" v-model="time" />
                                        </td>
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
                                                <label class="col-sm-4 col-form-label">Location Of Services<small style="color:red">*</small></label>
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
                                                <label class="col-sm-4 col-form-label">Type Of Diagnosis<small style="color:red">*</small></label>
                                                <div class="col-sm-8">
                                                    <select disabled class="form-select" v-model="type_diagnosis_id">
                                                        <option value="0">Select Diagnosis</option>
                                                        <option v-for="catcode in diagonisislist" v-bind:key="catcode.id" v-bind:value="catcode.id">
                                                            {{ catcode.icd_code }} {{catcode.icd_name}}
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <!-- close row -->
                                            <div class="row mb-3"><label class="col-sm-4 col-form-label">Additional Diagnosis</label>
                                                <div class="col-sm-8">
                                                    <select disabled id="additionalbox" v-model="additional_diagnosis" class="form-select multiselect" multiple="multiple">
                                                        <option v-for="catcode in diagonisislist" v-bind:key="catcode.id" v-bind:value="catcode.id">
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
                                                        <input disabled class="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio2" value="clinical-work" v-model="category_services" />
                                                        <label class="form-check-label" for="inlineRadio2">Clinical Work / Procedure
                                                        </label>
                                                    </div>
                                                    <div class="form-check form-check-inline">
                                                        <input disabled class="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio3" value="external" v-model="category_services" />
                                                        <label class="form-check-label" for="inlineRadio3">External</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- close-row -->
                                            <!-- hide-div -->
                                            <div class="assisstance services hide mb-3">
                                                <div class="row">
                                                    <div class="col-md-6 mb-3">
                                                        <label class="form-label">Services<small style="color:red">*</small></label>
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
                                                        <label class="form-label">ICD 9 CODE<small style="color:red">*</small></label>
                                                        <select disabled class="form-select" v-model="code_id" @change="onCategorycodebind($event)">
                                                            <option value="0">Select code</option>
                                                            <option v-for="type in codelist" v-bind:key="type.id" v-bind:value="type.id">
                                                                {{ type.icd_category_code }} {{type.icd_category_name}}
                                                            </option>
                                                        </select>
                                                    </div>
                                                    <div class="col-md-6 mb-3">
                                                        <div><label class="form-label">ICD 9 SUB CODE</label></div>
                                                        <div>
                                                            <div class="mt-2 align-items-flex-start">
                                                                <select disabled id='subcode' v-model="sub_code_id" class="form-select multiselect" multiple="multiple" style="width:100%">
                                                                    <option v-for="catcode in icdcatcodelist" v-bind:key="catcode.id" v-bind:value="catcode.id">
                                                                        {{ catcode.icd_code }}
                                                                        {{catcode.icd_name}}
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6 mb-3">
                                                        <label class="form-label">Additional ICD 9 CODE</label>
                                                        <select disabled class="form-select" v-model="additional_code_id" @change="onCategorycodebind2($event)">
                                                            <option value="0">Select code</option>
                                                            <option v-for="type in additionalcodelist" v-bind:key="type.id" v-bind:value="type.id">
                                                                {{ type.icd_category_code }} {{type.icd_category_name}}
                                                            </option>
                                                        </select>
                                                    </div>
                                                    <div class="col-md-6 mb-3">
                                                        <div><label class="form-label">Additional ICD 9 SUB CODE</label></div>
                                                        <div>
                                                            <div class="mt-2 align-items-flex-start">
                                                                <select disabled id='addsubcode' v-model="additional_subcode" class="form-select multiselect" multiple="multiple" style="width:100%">
                                                                    <option v-for="catcode in add_icdcatcodelist" v-bind:key="catcode.id" v-bind:value="catcode.id">
                                                                        {{ catcode.icd_code }}
                                                                        {{catcode.icd_name}}
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
                                                        <label class="form-label">Services<small style="color:red">*</small></label>
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
                                                    <label class="form-label">Complexity Of Service<small style="color:red">*</small></label>
                                                    <select disabled class="form-select" v-model="complexity_services_id">
                                                        <option value="0">
                                                            Select Complexity Of Service<small style="color:red">*</small>
                                                        </option>
                                                        <option v-for="cm in comlexcitylist" v-bind:key="cm.id" v-bind:value="cm.id">
                                                            {{ cm.section_value }}
                                                        </option>
                                                    </select>
                                                </div>
                                                <div class="col-md-6 mb-3">
                                                    <label class="form-label">Outcome</label>
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
                            <br>
                            <br>
                            <div class="d-flex">
                                <button @click="GoBack" class="btn btn-primary btn-text"><i class="fa fa-arrow-alt-to-left"></i> Back
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
import Interventionphysectristdetails from "../../../components/Intervention/Interventionphysectristdetails.vue";
import CommonHeader from '../../../components/CommonHeader.vue';
import CommonSidebar from '../../../components/CommonSidebar.vue';
import * as moment from "moment/moment";

export default {
    components: {
        CommonHeader,
        CommonSidebar,
        Interventionphysectristdetails,
    },
    name: "psychiatry-clerking-note",
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
            $(".multiselect").select2({
                placeholder: "None",
            });
        });
        let urlParams = new URLSearchParams(window.location.search);
        this.Id = urlParams.get("id");
        this.appId = urlParams.get("appId");

        let urlParams1 = new URLSearchParams(window.location.search);
        this.pid = urlParams1.get("pid");
        this.type = urlParams1.get("type");

        console.log("this.type", this.type);

        this.GetList();
        if (this.pid) {
            this.getdetails();
        }
        this.GetPatientdetails();
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
            additionalcodelist: [],
            add_icdcatcodelist: [],
            Id: 0,
            appId: 0,
            pid: 0,
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
            assistancelist: [],
            externallist: [],
            SidebarAccess: null,
            additional_code_id: 0,
            additional_diagnosis: 0,
            additional_subcode: 0,
            staff_name: "",
            designation: "",
        };
    },
    methods: {
        formatedate(date) {
            const local = moment.utc(date).local().format("DD-MM-YYYY");
            return local;
        },
        formatetime(time) {
            const local = moment.utc(time).local().format("HH:mm");
            return local;
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
                console.log("list", response4.data.list);
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
            const response6 = await this.$axios.get("diagnosis/getIcd9codeList", {
                headers,
            });
            if (response6.data.code == 200 || response6.data.code == "200") {
                this.additionalcodelist = response6.data.list;
            } else {
                this.additionalcodelist = [];
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
        async onCategorycodebind2(event) {
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
                this.add_icdcatcodelist = response.data.list;
            } else {
                this.add_icdcatcodelist = [];
            }
        },

        //     formatedate(date) {
        //   const local = moment.utc(date).local().format("DD-MM-YYYY");
        //   return local;
        // },
        // formatetime(time) {
        //   const local = moment.utc(time).local().format("HH:mm");
        //   return local;
        // },

        resetmodel() {
            this.chief_complain = "";
            this.presenting_illness = "";
            this.background_history = "";
            this.general_examination = "";
            this.mental_state_examination = "";
            this.diagnosis_id = 0;
            this.management = "";
            this.discuss_psychiatrist_name = "";
            this.date = "";
            this.time = "";
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
                "/patient-appointment-details/fetchViewHistoryListDetails", {
                    id: this.pid,
                    type: 'PsychiatryClerkingNote'
                }, {
                    headers
                }
            );
            if (response.data.code == 200) {
                this.sdate = this.formatedate(response.data.Data[0].updated_at);
                this.stime = this.formatetime(response.data.Data[0].updated_at);
                this.staff_name = response.data.Data[0].name;
                this.designation = response.data.Data[0].designation;
                this.patient_mrn_id = response.data.Data[0].patient_mrn_id,
                    this.chief_complain = response.data.Data[0].chief_complain;
                this.presenting_illness = response.data.Data[0].presenting_illness;
                this.background_history = response.data.Data[0].background_history;
                this.general_examination = response.data.Data[0].general_examination;
                this.mental_state_examination = response.data.Data[0].mental_state_examination;
                this.diagnosis_id = response.data.Data[0].diagnosis_id;
                this.management = response.data.Data[0].management;
                this.discuss_psychiatrist_name = response.data.Data[0].discuss_psychiatrist_name;
                this.date = response.data.Data[0].date;
                this.time = response.data.Data[0].time;
                this.location_services_id = response.data.Data[0].location_services_id;
                this.type_diagnosis_id = response.data.Data[0].type_diagnosis_id;
                this.category_services = response.data.Data[0].category_services;
                this.code_id = response.data.Data[0].code_id;
                this.sub_code_id = response.data.Data[0].sub_code_id.split(",");
                $("#subcode")
                    .val(this.sub_code_id)
                    .trigger("change");
                this.complexity_services_id = response.data.Data[0].complexity_services_id;
                this.outcome_id = response.data.Data[0].outcome_id;
                this.medication_des = response.data.Data[0].medication_des;
                this.services_id = response.data.Data[0].services_id;
                this.serviceid = response.data.Data[0].serviceid;
                this.additional_diagnosis = response.data.Data[0].additional_diagnosis.split(",");
                $("#additionalbox")
                    .val(this.additional_diagnosis)
                    .trigger("change");

                this.additional_subcode = response.data.Data[0].additional_subcode.split(",");
                $("#addsubcode")
                    .val(this.additional_subcode)
                    .trigger("change");
                this.additional_code_id = response.data.Data[0].additional_code_id;
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

                const response3 = await this.$axios.post(
                    "diagnosis/getIcd9subcodeList", {
                        icd_category_code: this.additional_code_id
                    }, {
                        headers
                    }
                );
                if (response3.data.code == 200 || response3.data.code == "200") {
                    this.add_icdcatcodelist = response3.data.list;

                } else {
                    this.add_icdcatcodelist = [];
                }

                if (this.category_services == 'clinical-work') {
                    $(document).ready(function () {
                        $('input[name="inlineRadioOptions1"]').trigger('click');
                    });
                } else if (this.category_services == 'external') {
                    $(document).ready(function () {
                        $('input[name="inlineRadioOptions2"]').trigger('click');
                    });
                } else {
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
        GoBack() {
            this.$router.push({
                path: "/modules/Intervention/patient-summary",
                query: {
                    id: this.Id,
                    appId: this.appId
                },
            });
        }
    },
};
</script>

<style scoped>
.hide {
    display: none;
}
</style>
