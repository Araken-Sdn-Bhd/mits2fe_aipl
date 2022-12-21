<template>
<div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
        <CommonHeader />
        <main>
            <div class="container-fluid px-4">
                <div class="page-title">
                    <h1>EXTERNAL REFERRAL LETTER</h1>
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
                                    <th>Date:</th>
                                    <td>{{ this.todaydate}}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>From:</th>
                                    <td>Mentari Address</td>
                                </tr>
                                <tr>
                                    <th>History:</th>
                                    <td><textarea v-model="history" class="form-control textarea"></textarea></td>
                                </tr>
                                <tr>
                                    <th>Examination:</th>
                                    <td><textarea v-model="examination" class="form-control textarea"></textarea></td>
                                </tr>
                                <tr>
                                    <th>Diagnosis:</th>
                                    <td><input v-model="diagnosis" type="text" class="form-control" name="" /></td>
                                </tr>
                                <tr>
                                    <th>Result of investigation:</th>
                                    <td><textarea v-model="result_of_investigation" class="form-control textarea"></textarea></td>
                                </tr>
                                <tr>
                                    <th>Treatment:</th>
                                    <td><input v-model="treatment" type="text" class="form-control" name="" /></td>
                                </tr>
                                <tr>
                                    <th>Purpose of referral:</th>
                                    <td><input v-model="purpose_of_referral" type="text" class="form-control" name="" /></td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="accordion form-accordion mt-3 form-custum-labal" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        OCCASION OF SERVICES
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <div class="row mb-3">
                                            <label class="col-sm-4 col-form-label">Location Of Services</label>
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
                                            <label class="col-sm-4 col-form-label">Type Of Diagnosis</label>
                                            <div class="col-sm-8">
                                                <select class="form-select" v-model="type_diagnosis_id">
                                                    <option value="0">Select Diagnosis</option>
                                                    <option v-for="catcode in diagonisislist" v-bind:key="catcode.id" v-bind:value="catcode.id">
                                                        {{ catcode.icd_code }} {{catcode.icd_name}}
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <!-- close-row -->
                                        <div class="row mb-3">
                                            <label class="col-sm-4 col-form-label">Category Of Services
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
                                                    <label class="form-label">Services</label>
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
                                            <div class="row">
                                                <div class="col-md-6 mb-3">
                                                    <label class="form-label">ICD 9 CODE</label>
                                                    <select class="form-select" v-model="code_id" @change="onCategorycodebind($event)">
                                                        <option value="0">Select code</option>
                                                        <option v-for="type in codelist" v-bind:key="type.id" v-bind:value="type.id">
                                                            {{ type.icd_category_code }} {{type.icd_category_name}}
                                                        </option>
                                                    </select>
                                                </div>
                                                <div class="col-md-6 mb-3">
                                                    <label class="form-label">ICD 9 SUB CODE</label>
                                                    <select class="form-select" v-model="sub_code_id">
                                                        <option value="0">Select sub code</option>
                                                        <option v-for="catcode in icdcatcodelist" v-bind:key="catcode.id" v-bind:value="catcode.id">
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
                                                <label class="form-label">Complexity Of Service</label>
                                                <select class="form-select" v-model="complexity_services">
                                                    <option value="0">
                                                        Select Complexity Of Service
                                                    </option>
                                                    <option v-for="cm in comlexcitylist" v-bind:key="cm.id" v-bind:value="cm.id">
                                                        {{ cm.section_value }}
                                                    </option>
                                                </select>
                                            </div>
                                            <div class="col-md-6 mb-3">
                                                <label class="form-label">Outcome</label>
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
                                            <textarea v-model="medication_prescription" class="form-control textarea" placeholder="Please Type Prescription Here"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--  -->
                        </div>
                        <table class="notes">
                            <tbody>
                                <tr>
                                    <th colspan="2">Thank You,</th>
                                </tr>
                                <tr>
                                    <th>Name:</th>
                                    <td><input type="text" class="form-control" name="" v-model="name" /></td>
                                </tr>
                                <tr>
                                    <th>Designation:</th>
                                    <td><input type="text" class="form-control" name="" v-model="designation" /></td>
                                </tr>
                                <tr>
                                    <th>Hospital:</th>
                                    <td><input type="text" class="form-control" name="" v-model="hospital" /></td>
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
                        <div class="d-flex" v-if="!pid">
                            <button @click="GoBack" class="btn btn-primary btn-text" title="Back"><i class="fa fa-arrow-alt-to-left"></i> Back
                            </button>
                            <div class="btn-right" :class="SidebarAccess!=1?'hide':''">
                                <button type="submit" @click="onCreateEvent()" class="btn btn-warning btn-text" title="Draft">
                                    <i class="fa fa-save"></i> Save as draft
                                </button>
                                <button @click="OnPrint" type="submit" class="btn btn-green btn-text">
                                    <i class="fa fa-download"></i> Download
                                </button>
                                <button type="submit" @click="onPublishEvent()" class="btn btn-success btn-text" title="Publish">
                                    <i class="fa fa-paper-plane"></i> Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card mb-4 result" style="display:none;">
                    <h1>EXTERNAL REFERRAL FORM</h1>
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
                                    <th>Date:</th>
                                    <td>{{ this.todaydate}}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>From:</th>
                                    <td>Mentari Address</td>
                                </tr>
                                <tr>
                                    <th>History:</th>
                                    <td>{{this.history}}</td>
                                </tr>
                                <tr>
                                    <th>Examination:</th>
                                    <td>{{this.examination}}</td>
                                </tr>
                                <tr>
                                    <th>Diagnosis:</th>
                                    <td>{{this.diagnosis}}</td>
                                </tr>
                                <tr>
                                    <th>Result of investigation:</th>
                                    <td>{{this.result_of_investigation}}</td>
                                </tr>
                                <tr>
                                    <th>Treatment:</th>
                                    <td>{{this.treatment}}</td>
                                </tr>
                                <tr>
                                    <th>Purpose of referral:</th>
                                    <td>{{this.purpose_of_referral}}</td>
                                </tr>
                            </tbody>
                        </table>

                        <table class="notes">
                            <tbody>
                                <tr>
                                    <th colspan="2">Thank You,</th>
                                </tr>
                                <tr>
                                    <th>Name:</th>
                                    <td>{{ this.name }}</td>
                                </tr>
                                <tr>
                                    <th>Designation:</th>
                                    <td>{{ this.designation }}</td>
                                </tr>
                                <tr>
                                    <th>Hospital:</th>
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
    name: "external-referral-form",
    data() {
        return {
            userdetails: null,
            patientdetails: null,
            todaydate: "",
            errorList: [],
            servicelist: [],
            outcomelist: [],
            comlexcitylist: [],
            codelist: [],
            icdcatcodelist: [],
            diagonisislist: [],
            locationlist: [],
            titlelist: [],
            Id: 0,
            appId: 0,
            history: "",
            examination: "",
            diagnosis: "",
            result_of_investigation: "",
            treatment: "",
            purpose_of_referral: "",
            location_services_id: 0,
            type_diagnosis_id: 0,
            category_services: "",
            code_id: 0,
            sub_code_id: 0,
            complexity_services: 0,
            outcome_id: 0,
            medication_prescription: "",
            services_id: 0,
            serviceid: 0,
            validate: true,
            name: "",
            designation: "",
            hospital: "",
            assistancelist: [],
            externallist: [],
            pid: 0,
            type: "",
            SidebarAccess: null,

            location_servicesIdSectionValue: "",
            type_diagnosisIdSectionValue: [],
            services_idSectionValue: "",
            code_idSectionValue: "",
            sub_codeIdSectionValue: "",
            serviceid_sectionValue: "",
            complexity_servicesIdSectionValue: "",
            outcome_idSectionValue: "",
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
        this.GetList();
        this.GetPatientdetails();
        let urlParams1 = new URLSearchParams(window.location.search);
        this.pid = urlParams1.get("pid");
        this.type = urlParams1.get("type");
        if (this.pid) {
            this.getdetails();
        }
        this.name = this.userdetails.user.name;
        this.designation = this.userdetails.user.role;
        const current = new Date();
        this.todaydate =
            current.getDate() +
            "-" +
            (current.getMonth() + 1) +
            "-" +
            current.getFullYear();
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
                    try {
                        this.loader = true;
                        const headers = {
                            Authorization: "Bearer " + this.userdetails.access_token,
                            Accept: "application/json",
                            "Content-Type": "application/json",
                        };
                        const response = await this.$axios.post(
                            "external-referral/add", {
                                added_by: this.userdetails.user.id,
                                patient_mrn_id: this.Id,
                                history: this.history,
                                examination: this.examination,
                                diagnosis: this.diagnosis,
                                result_of_investigation: this.result_of_investigation,
                                treatment: this.treatment,
                                purpose_of_referral: this.purpose_of_referral,
                                location_services: this.location_services_id,
                                type_diagnosis_id: this.type_diagnosis_id,
                                category_services: this.category_services,
                                services_id: this.services_id,
                                code_id: this.code_id,
                                sub_code_id: this.sub_code_id,
                                complexity_of_services: this.complexity_services,
                                outcome: this.outcome_id,
                                medication_prescription: this.medication_prescription,
                                name: this.name,
                                designation: this.designation,
                                hospital: this.hospital,
                                id: this.pid,
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
        async onPublishEvent() {
            this.$swal.fire({
                title: 'Do you want to save the changes?',
                showCancelButton: true,
                confirmButtonText: 'Save',
            }).then(async (result) => {
                if (result.isConfirmed) {
                    this.errorList = [];
                    this.validate = true;
                    try {
                        if (!this.history) {
                            this.errorList.push("History Field is required");
                        }
                        if (!this.examination) {
                            this.errorList.push("Examination is required");
                        }
                        if (!this.diagnosis) {
                            this.errorList.push("Diagnosis is required");
                        }
                        if (!this.result_of_investigation) {
                            this.errorList.push("Result od Investigation is required");
                        }
                        if (!this.treatment) {
                            this.errorList.push("Treatment is required");
                        }
                        if (!this.purpose_of_referral) {
                            this.errorList.push("Purpose Of Referral is required");
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
                                if (!this.services_id) {
                                    this.errorList.push("Services is required");
                                    this.validate = false;
                                } else {
                                    this.services_id = this.services_id;
                                }
                            }
                        }
                        if (!this.outcome_id) {
                            this.errorList.push("Outcome is required");
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
                        if (
                            this.history &&
                            this.examination &&
                            this.diagnosis &&
                            this.result_of_investigation &&
                            this.treatment &&
                            this.purpose_of_referral &&
                            this.location_services_id &&
                            this.type_diagnosis_id &&
                            this.category_services &&
                            this.complexity_services &&
                            this.outcome_id &&

                            this.name &&
                            this.designation &&
                            this.hospital &&
                            this.validate
                        ) {
                            this.loader = true;
                            const headers = {
                                Authorization: "Bearer " + this.userdetails.access_token,
                                Accept: "application/json",
                                "Content-Type": "application/json",
                            };
                            const response = await this.$axios.post(
                                "external-referral/add", {
                                    added_by: this.userdetails.user.id,
                                    patient_mrn_id: this.Id,
                                    history: this.history,
                                    examination: this.examination,
                                    diagnosis: this.diagnosis,
                                    result_of_investigation: this.result_of_investigation,
                                    treatment: this.treatment,
                                    purpose_of_referral: this.purpose_of_referral,
                                    location_services: this.location_services_id,
                                    type_diagnosis_id: this.type_diagnosis_id,
                                    category_services: this.category_services,
                                    services_id: this.services_id,
                                    code_id: this.code_id,
                                    sub_code_id: this.sub_code_id,
                                    complexity_of_services: this.complexity_services,
                                    outcome: this.outcome_id,
                                    medication_prescription: this.medication_prescription,
                                    name: this.name,
                                    designation: this.designation,
                                    hospital: this.hospital,
                                    id: this.pid,
                                    appId: this.appId,
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
                window.alert("Something went wrong");
            }
            console.log("my details", this.patientdetails);
        },
        OnPrint() {
            var newstr = document.getElementsByClassName("result")[0].innerHTML;
            document.body.innerHTML = newstr;
            window.print();
            // Reload the page to refresh the data
            window.location.reload();
        },

        async setData() {
            const response8 = await this.$axios.post(
                "general-setting/fetch", {
                    setting_id: this.location_services_id
                }, {
                    headers,
                }
            );
            if (response8.data.code == 200 || response8.data.code == "200") {
                this.location_servicesIdSectionValue = response8.data.setting[0].section_value;
            } else {
                this.location_servicesIdSectionValue = "";
            };

            const response9 = await this.$axios.get(
                "diagnosis/getIcd10codeById?id=" + this.type_diagnosis_id, {
                    headers,
                }
            );
            if (response9.data.code == 200 || response9.data.code == "200") {
                this.type_diagnosisIdSectionValue = response9.data.list[0];
            } else {
                this.type_diagnosisIdSectionValue = [];
            };

            const response10 = await this.$axios.post(
                "general-setting/fetch", {
                    setting_id: this.services_id
                }, {
                    headers,
                }
            );
            if (response10.data.code == 200 || response10.data.code == "200") {
                this.services_idSectionValue = response10.data.setting[0].setting_value;
            } else {
                this.services_idSectionValue = "";
            };

            const response11 = await this.$axios.get(
                "diagnosis/getIcd9codeById?id=" + this.code_id, {
                    headers,
                }
            );
            if (response11.data.code == 200 || response11.data.code == "200") {
                this.code_idSectionValue = response11.data.list[0];
            } else {
                this.code_idSectionValue = "";
            };

            const response12 = await this.$axios.get(
                "diagnosis/getIcd9subcodeById?id=" + this.sub_code_id, {
                    headers,
                }
            );
            if (response12.data.code == 200 || response12.data.code == "200") {
                this.sub_codeIdSectionValue = response12.data.list.name;
            } else {
                this.sub_codeIdSectionValue = "";
            };

            const response13 = await this.$axios.post(
                "general-setting/fetch", {
                    setting_id: this.serviceid
                }, {
                    headers,
                }
            );
            if (response13.data.code == 200 || response13.data.code == "200") {
                this.serviceid_sectionValue = response13.data.setting[0].setting_value;
            } else {
                this.serviceid_sectionValue = "";
            };

            const response14 = await this.$axios.post(
                "general-setting/fetch", {
                    setting_id: this.complexity_services_id
                }, {
                    headers,
                }
            );
            if (response14.data.code == 200 || response14.data.code == "200") {
                this.complexity_servicesIdSectionValue = response14.data.setting[0].setting_value;
            } else {
                this.complexity_servicesIdSectionValue = "";
            };

            const response15 = await this.$axios.post(
                "general-setting/fetch", {
                    setting_id: this.outcome_id
                }, {
                    headers,
                }
            );
            if (response15.data.code == 200 || response15.data.code == "200") {
                this.outcome_idSectionValue = response15.data.setting[0].setting_value;
            } else {
                this.outcome_idSectionValue = "";
            };
            this.onPrint();
        },
        resetmodel() {
            this.history = "";
            this.examination = "";
            this.diagnosis = "";
            this.result_of_investigation = "";
            this.treatment = "";
            this.purpose_of_referral = "";
            this.location_services_id = 0;
            this.type_diagnosis_id = 0;
            this.category_services = "";
            this.serviceid = "";
            this.code_id = 0;
            this.sub_code_id = 0;
            this.complexity_services = 0;
            this.outcome = 0;
            this.medication_prescription = "";
            this.services_id = 0;
            this.name = "";
            this.designation = "";
            this.hospital = "";
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
                    type: "ExternalRefferalForm",
                }, {
                    headers
                }
            );
            if (response.data.code == 200) {

                this.Id = response.data.Data[0].patient_mrn_id;
                this.history = response.data.Data[0].history;
                this.examination = response.data.Data[0].examination;
                this.diagnosis = response.data.Data[0].diagnosis;
                this.result_of_investigation =
                    response.data.Data[0].result_of_investigation;
                this.treatment = response.data.Data[0].treatment;
                this.purpose_of_referral = response.data.Data[0].purpose_of_referral;
                this.location_services_id = response.data.Data[0].location_services;
                this.type_diagnosis_id = response.data.Data[0].type_diagnosis_id;
                this.category_services = response.data.Data[0].category_services;
                this.services_id = response.data.Data[0].services_id;
                this.code_id = response.data.Data[0].code_id;
                this.sub_code_id = response.data.Data[0].sub_code_id;
                this.complexity_services = response.data.Data[0].complexity_services;
                this.outcome_id = response.data.Data[0].outcome;
                this.medication_prescription = response.data.Data[0].medication_des;
                this.name = response.data.Data[0].name;
                this.designation = response.data.Data[0].designation;
                this.hospital = response.data.Data[0].hospital;

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
                window.alert("Something went wrong");
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
    },
};
</script>
