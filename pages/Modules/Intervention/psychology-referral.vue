<template>
<div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
        <CommonHeader />
        <main>
            <div class="container-fluid px-4">
                <div class="page-title">
                    <h1>PSYCHOLOGY REFERRAL</h1>
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
                                    <th>NRIC No:</th>
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
                                    <th>Address:</th>
                                    <td>{{ patientdetails.address1 }}</td>
                                </tr>
                            </tbody>
                        </table>

                        <table class="notes">
                            <tbody>
                                <tr>
                                    <th>Have patient acknowledged with the referral?<small style="color:red">*</small> </th>
                                    <td>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" v-model="patient_acknowledged" value="Yes">
                                            <label class="form-check-label" for="inlineRadio1">Yes</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" v-model="patient_acknowledged" value="No">
                                            <label class="form-check-label" for="inlineRadio2">No</label>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Diagnosis: </th>
                                    <td>
                                        <select class="form-select" v-model="diagnosis_id">
                                            <option value="0">Select Diagnosis</option>
                                            <option v-for="catcode in diagonisislist" v-bind:key="catcode.id" v-bind:value="catcode.id">
                                                {{ catcode.icd_code }} {{catcode.icd_name}}
                                            </option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Reason For Referral<small style="color:red">*</small> :</th>
                                    <td>
                                        <table class="sub-table td-check-width">
                                            <thead>
                                                <tr>
                                                    <th colspan="2">A) ASSESSMENT</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div class="col-sm-8 asm-box">
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" value="IQ Test" v-model="iqtest" id="asm-1">
                                                                <label class="form-check-label" for="asm-1">
                                                                    IQ Test
                                                                </label>
                                                            </div>

                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" value="Psychosocial" v-model="psychosocial" id="asm-2">
                                                                <label class="form-check-label" for="asm-2">
                                                                    Psychosocial
                                                                </label>
                                                            </div>
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" value="Neuropsychology" v-model="neuropsychology" id="asm-3">
                                                                <label class="form-check-label" for="asm-3">
                                                                    Neuropsychology
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="col-sm-8 asm-box">
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" value="Coping Mechanism and Skill" v-model="coping" id="asm-4">
                                                                <label class="form-check-label" for="asm-4">
                                                                    Coping Mechanism and Skill
                                                                </label>
                                                            </div>
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" value="Personality Test" v-model="personaltest" id="asm-5">
                                                                <label class="form-check-label" for="asm-5">
                                                                    Personality Test
                                                                </label>
                                                            </div>
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" value="Others" v-model="others" id="asm-6" data-bs-toggle="collapse" data-bs-target="#Others-1">
                                                                <label class="form-check-label" for="12">
                                                                    Others
                                                                </label>
                                                            </div>
                                                            <div class="collapse" id="Others-1">
                                                                <input type="text" class="form-control" v-model="reason_referral_assessment_other" name="" placeholder="Please Specify">
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td>
                                        <table class="sub-table td-check-width">
                                            <thead>
                                                <tr>
                                                    <th colspan="2">B) INTERVENTION</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div class="col-sm-8 int-box">
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" value="Psychoterapy" v-model="psychoterapy" id="int-1">
                                                                <label class="form-check-label" for="1">
                                                                    Psychotherapy
                                                                </label>
                                                            </div>
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" value="Pain Management" v-model="painmgt" id="int-2">
                                                                <label class="form-check-label" for="2">
                                                                    Pain Management
                                                                </label>
                                                            </div>
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" value="Insomnia/Eating Disorder" v-model="insomniaeating" id="int-3">
                                                                <label class="form-check-label" for="3">
                                                                    Insomnia/Eating Disorder
                                                                </label>
                                                            </div>
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" value="Learning/Development" v-model="learndevelop" id="int-4">
                                                                <label class="form-check-label" for="4">
                                                                    Learning/Development
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="col-sm-8 asm-box">
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" value="Marital and Family Therapy" v-model="maritalfamily" id="int-5">
                                                                <label class="form-check-label" for="5">
                                                                    Marital and Family Therapy
                                                                </label>
                                                            </div>
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" value="Stress and Anger Management" v-model="stressanger" id="int-6">
                                                                <label class="form-check-label" for="6">
                                                                    Stress and Anger Management
                                                                </label>
                                                            </div>
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" value="Addiction" v-model="addict" id="int-7">
                                                                <label class="form-check-label" for="7">
                                                                    Addiction
                                                                </label>
                                                            </div>
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" value="Others" v-model="others2" id="int-8" data-bs-toggle="collapse" data-bs-target="#Others-2">
                                                                <label class="form-check-label" for="8">
                                                                    Others
                                                                </label>
                                                            </div>
                                                            <div class="collapse" id="Others-2">
                                                                <input type="text" class="form-control" name="" placeholder="Please Specify" v-model="reason_referral_intervention_other">
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Case Formulation<small style="color:red">*</small> : </th>
                                    <td>
                                        <textarea class="form-control textarea" v-model="case_formulation"></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Referring Doctor<small style="color:red">*</small> :</th>
                                    <td>
                                        <input type="text" class="form-control" v-model="referring_doctor">
                                    </td>
                                </tr>
                                <tr>
                                    <th>Designation<small style="color:red">*</small> : </th>
                                    <td>
                                        <input type="text" class="form-control" v-model="designation">
                                    </td>
                                </tr>
                                <tr>
                                    <th>Date<small style="color:red">*</small> : </th>
                                    <td>
                                        <input type="date" class="form-control" v-model="date">
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
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio1" value="assisstance" v-model="category_services" />
                                                    <label class="form-check-label" for="inlineRadio1">Assisstance / Supervision</label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio2" value="clinical-work" v-model="category_services" />
                                                    <label class="form-check-label" for="inlineRadio2">Clinical Work / Procedure
                                                    </label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio3" value="external" v-model="category_services" />
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
                                            <div class="row">
                                                <div class="col-md-6 mb-3">
                                                    <label class="form-label">ICD 9 CODE<small style="color:red">*</small> </label>
                                                    <select class="form-select" v-model="code_id" @change="onCategorycodebind($event)">
                                                        <option value="0">Select code</option>
                                                        <option v-for="type in codelist" v-bind:key="type.id" v-bind:value="type.id">
                                                            {{ type.icd_category_code }} {{type.icd_category_name}}
                                                        </option>
                                                    </select>
                                                </div>
                                                <div class="col-md-6 mb-3">
                                                    <label class="form-label">ICD 9 SUB CODE<small style="color:red">*</small> </label>
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
                                                <label class="form-label">Outcome<small style="color:red">*</small> </label>
                                                <select class="form-select" v-model="outcome">
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
                            <button @click="GoBack" class="btn btn-primary btn-text"><i class="fa fa-arrow-alt-to-left"></i> Back
                            </button>
                            <div class="btn-right" :class="SidebarAccess != 1 ? 'hide' : ''" v-if="!pid">
                                <button @click="OnPrint()" type="submit" class="btn btn-green btn-text">
                                    <i class="fa fa-download"></i> Download
                                </button>
                                <button type="submit" title="Draft" @click="onCreateEvent()" class="btn btn-warning btn-text">
                                    <i class="fa fa-save"></i> Save as draft
                                </button>
                                <button type="submit" title="Publish" @click="onPublishEvent()" class="btn btn-success btn-text">
                                    <i class="fa fa-paper-plane"></i> Submit
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
    components: {
        CommonSidebar,
        CommonHeader
    },
    name: "psychology-referral",
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
            $('.asm-box input[type="checkbox"]').click(function () {
                var inputValue = $(this).attr("value");
                $("." + inputValue).toggle();
            });
            $('.int-box input[type="checkbox"]').click(function () {
                var inputValue = $(this).attr("value");
                $("." + inputValue).toggle();
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
            diagnosis_id: 0,
            patient_acknowledged: "",
            reason_referral_assessment: "",
            reason_referral_assessment_other: "",
            reason_referral_intervention: "",
            reason_referral_intervention_other: "",
            case_formulation: "",
            referring_doctor: "",
            date: "",
            designation: "",
            location_services_id: 0,
            type_diagnosis_id: 0,
            category_services: "",
            code_id: 0,
            sub_code_id: 0,
            complexity_services: 0,
            outcome: 0,
            medication_des: "",
            patient_id: "",
            services_id: 0,
            serviceid: 0,
            validate: true,
            assistancelist: [],
            externallist: [],
            pid: 0,
            type: "",
            assessmentlist: [],
            interventionlist: [],
            iqtest: "",
            psychosocial: "",
            neuropsychology: "",
            coping: "",
            personaltest: "",
            others: "",
            psychoterapy: "",
            painmgt: "",
            insomniaeating: "",
            learndevelop: "",
            maritalfamily: "",
            stressanger: "",
            addict: "",
            others2: "",
            appId: 0,
            SidebarAccess: null,
        };
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
                            "psychology-referral/add", {
                                type: "add",
                                added_by: this.userdetails.user.id,
                                patient_id: this.Id,
                                diagnosis_id: this.diagnosis_id,
                                patient_acknowledged: this.patient_acknowledged,
                                reason_referral_assessment: JSON.stringify([{
                                    "IQ Test": this.iqtest,
                                    "Psychosocial": this.psychosocial,
                                    "Neuropsychology": this.neuropsychology,
                                    "Coping Mechanism and Skill": this.coping,
                                    "Personality Test": this.personaltest,
                                    "Others": this.others,
                                }, ]),
                                reason_referral_assessment_other: this.reason_referral_assessment_other,
                                reason_referral_intervention: JSON.stringify([{
                                    "Psychoterapy": this.psychoterapy,
                                    "Pain Management": this.painmgt,
                                    "Insomnia/Eating Disorder": this.insomniaeating,
                                    "Learning/Development": this.learndevelop,
                                    "Marital and Family Therapy": this.maritalfamily,
                                    "Stress and Anger Management": this.stressanger,
                                    "Addiction": this.addict,
                                    "Others": this.others2,
                                }, ]),
                                reason_referral_intervention_other: this.reason_referral_intervention_other,
                                case_formulation: this.case_formulation,
                                referring_doctor: this.referring_doctor,
                                designation: this.designation,
                                date: this.date,
                                location_services: this.location_services_id,
                                type_diagnosis_id: this.type_diagnosis_id,
                                category_services: this.category_services,
                                code_id: this.code_id,
                                sub_code_id: this.sub_code_id,
                                complexity_services: this.complexity_services,
                                outcome: this.outcome,
                                medication_des: this.medication_des,
                                patient_id: this.Id,
                                services_id: this.services_id,
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
                        if (!this.patient_acknowledged) {
                            this.errorList.push("acknowledged with the referral is required");
                        }
                        if (!this.case_formulation) {
                            this.errorList.push("Case Formulation is required");
                        }
                        if (!this.referring_doctor) {
                            this.errorList.push("Referring Doctor is required");
                        }
                        if (!this.designation) {
                            this.errorList.push("Designation is required");
                        }
                        if (!this.date) {
                            this.errorList.push("Date is required");
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
                            this.location_services_id &&
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
                                "psychology-referral/add", {
                                    added_by: this.userdetails.user.id,
                                    patient_id: this.Id,
                                    diagnosis_id: this.diagnosis_id,
                                    patient_acknowledged: this.patient_acknowledged,
                                    reason_referral_assessment: JSON.stringify([{
                                        "IQ Test": this.iqtest,
                                        "Psychosocial": this.psychosocial,
                                        "Neuropsychology": this.neuropsychology,
                                        "Coping Mechanism and Skill": this.coping,
                                        "Personality Test": this.personaltest,
                                        "Others": this.others,
                                    }, ]),
                                    reason_referral_assessment_other: this.reason_referral_assessment_other,
                                    reason_referral_intervention: JSON.stringify([{
                                        "Psychoterapy": this.psychoterapy,
                                        "Pain Management": this.painmgt,
                                        "Insomnia/Eating Disorder": this.insomniaeating,
                                        "Learning/Development": this.learndevelop,
                                        "Marital and Family Therapy": this.maritalfamily,
                                        "Stress and Anger Management": this.stressanger,
                                        "Addiction": this.addict,
                                        "Others": this.others2,
                                    }, ]),
                                    reason_referral_intervention_other: this.reason_referral_intervention_other,
                                    case_formulation: this.case_formulation,
                                    referring_doctor: this.referring_doctor,
                                    designation: this.designation,
                                    date: this.date,
                                    location_services: this.location_services_id,
                                    type_diagnosis_id: this.type_diagnosis_id,
                                    category_services: this.category_services,
                                    code_id: this.code_id,
                                    sub_code_id: this.sub_code_id,
                                    complexity_services: this.complexity_services,
                                    outcome: this.outcome,
                                    medication_des: this.medication_des,
                                    patient_id: this.Id,
                                    services_id: this.services_id,
                                    id: this.pid,
                                    appId: 0,
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
        OnPrint() {
            var newstr = document.getElementsByClassName("reslt")[0].innerHTML;
            document.body.innerHTML = newstr;
            window.print();
            // Reload the page to refresh the data
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
        resetmodel() {
            // this.diagnosis = "";
            // this.clinical_notes = "";
            // this.management = "";
            this.location_services_id = 0;
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
                    type: "PsychologyRefferalForm",
                }, {
                    headers
                }
            );
            if (response.data.code == 200) {
                if (response.data) {
                    this.Id = response.data.Data[0].patient_id;
                    this.diagnosis_id = response.data.Data[0].diagnosis_id;
                    this.patient_acknowledged = response.data.Data[0].patient_acknowledged;
                    this.date = response.data.Data[0].date;

                    var jdata1 = JSON.parse(response.data.Data[0].reason_referral_assessment);
                    jdata1.forEach((ele) => {
                        this.reason_referral_assessment = "val";
                        if (ele["IQ Test"] == true) {
                            this.iqtest = "IQ Test";
                        }
                        if (ele["Psychosocial"] == true) {
                            this.psychosocial = "Psychosocial";
                        }
                        if (ele["Neuropsychology"] == true) {
                            this.neuropsychology = "Neuropsychology";
                        }
                        if (ele["Coping Mechanism and Skill"] == true) {
                            this.coping = "Coping Mechanism and Skill";
                        }
                        if (ele["Personality Test"] == true) {
                            this.personaltest = "Personality Test";
                        }
                        if (ele["Others"] == true) {
                            this.others = "Others";
                        }
                    });
                    this.reason_referral_assessment_other = response.data.Data[0].reason_referral_assessment_other;
                    var jdata1 = JSON.parse(response.data.Data[0].reason_referral_intervention);
                    jdata1.forEach((ele) => {
                        this.reason_referral_intervention = "val";
                        if (ele["Psychoterapy"] == true) {
                            this.psychoterapy = "Psychoterapy";
                        }
                        if (ele["Pain Management"] == true) {
                            this.painmgt = "Pain Management";
                        }
                        if (ele["Insomnia/Eating Disorder"] == true) {
                            this.insomniaeating = "Insomnia/Eating Disorder";
                        }
                        if (ele["Learning/Development"] == true) {
                            this.learndevelop = "Learning/Development";
                        }
                        if (ele["Marital and Family Therapy"] == true) {
                            this.maritalfamily = "Marital and Family Therapy";
                        }
                        if (ele["Stress and Anger Management"] == true) {
                            this.stressanger = "Stress and Anger Management";
                        }
                        if (ele["Addiction"] == true) {
                            this.addict = "Addiction";
                        }
                        if (ele["Others"] == true) {
                            this.others2 = "Others";
                        }
                    });
                    this.reason_referral_intervention_other = response.data.Data[0].reason_referral_intervention_other;
                    this.case_formulation = response.data.Data[0].case_formulation;
                    this.referring_doctor = response.data.Data[0].referring_doctor;
                    this.designation = response.data.Data[0].designation;
                    this.location_services_id = response.data.Data[0].location_services;
                    this.type_diagnosis_id = response.data.Data[0].type_diagnosis_id;
                    this.category_services = response.data.Data[0].category_services;
                    this.code_id = response.data.Data[0].code_id;
                    this.sub_code_id = response.data.Data[0].sub_code_id;
                    this.complexity_services = response.data.Data[0].complexity_services;
                    this.outcome = response.data.Data[0].outcome;
                    this.medication_des = response.data.Data[0].medication_des;

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

<style scoped>
.hide {
    display: none;
}
</style>
