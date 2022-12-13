<template>
<div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
        <CommonHeader />
        <main>
            <div class="container-fluid px-4">
                <div class="page-title">
                    <h1>JOB END REPORT</h1>
                    <!-- <a href="#"><i class="fal fa-plus"></i> Add</a> -->
                </div>

                <div class="card mb-4">
                    <div class="card-body">
                        <!--<form method="post" @submit.prevent="OnSubmit">-->
                        <div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label class="form-label">Name</label>
                                        <input type="text" class="form-control" v-model="name" />
                                    </div>
                                </div>
                            </div>
                            <!-- close-row -->

                            <h4 class="sub-title">Information About The Job:</h4>

                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label class="form-label">Job Title</label>
                                        <input type="text" class="form-control" v-model="job_title" />
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label class="form-label">Employer Name</label>
                                        <input type="text" class="form-control" v-model="employer_name" />
                                    </div>
                                </div>
                            </div>
                            <!-- close-row -->

                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label class="form-label">Job Start Date</label>
                                        <input type="date" class="form-control" v-model="job_start_date" />
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label class="form-label">Job End Date</label>
                                        <input type="date" class="form-control" v-model="job_end_date" />
                                    </div>
                                </div>
                            </div>
                            <!-- close-row -->

                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="mb-3">
                                        <label class="form-label">Changes in a job duties, work shedule, supervision, or
                                            other changes since job start:
                                        </label>
                                        <textarea class="form-control textarea" v-model="changes_in_job_duties"></textarea>
                                    </div>
                                </div>
                            </div>
                            <!-- close-row -->

                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label class="form-label">Reason for Job End</label>
                                        <select class="form-select" v-model="reason_for_job_end">
                                            <option value="">Please Select</option>
                                            <option value="Quit for a better job">Quit for a better job</option>
                                            <option value="Quit illness-related">Quit illness-related</option>
                                            <option value="Quit for another reason">Quit for another reason</option>
                                            <option value="Terminated">Terminated</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <!-- close-row -->

                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="mb-3">
                                        <label class="form-label">Client's perspective regarding job end:</label>
                                        <textarea class="form-control textarea" v-model="clients_perspective"></textarea>
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="mb-3">
                                        <label class="form-label">Staff comments regarding job end:</label>
                                        <textarea class="form-control textarea" v-model="staff_comments_regarding_job"></textarea>
                                    </div>
                                </div>
                            </div>
                            <!-- close-row -->

                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="mb-3">
                                        <label class="form-label">Employer comments:</label>
                                        <textarea class="form-control textarea" v-model="employer_comments"></textarea>
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="mb-3">
                                        <label class="form-label">Type of support provided:</label>
                                        <textarea class="form-control textarea" v-model="type_of_support"></textarea>
                                    </div>
                                </div>
                            </div>
                            <!-- close-row -->

                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="mb-3">
                                        <label class="form-label">Does person wish to look for another job/what
                                            kind?</label>
                                        <textarea class="form-control textarea" v-model="person_wish_for_another_job"></textarea>
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="mb-3">
                                        <label class="form-label">Client's preferences regarding disclosure on next
                                            job:</label>
                                        <textarea class="form-control textarea" v-model="clients_preferences"></textarea>
                                    </div>
                                </div>
                            </div>
                            <!-- close-row -->

                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label class="form-label">Staff Name</label>
                                        <input type="text" class="form-control" v-model="staff_name" />
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label class="form-label">Date</label>
                                        <input type="date" class="form-control" v-model="date" />
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
                                <button @click="GoBack" class="btn btn-primary btn-text">
                                    <i class="fa fa-arrow-alt-to-left"></i> Back
                                </button>

                                <div class="btn-right" :class="SidebarAccess!=1?'hide':''">
                                    <button type="submit" @click="onCreateEvent()" class="btn btn-warning btn-text">
                                        <i class="fa fa-save"></i> Save as draft
                                    </button>

                                    <button type="submit" @click="onPublishEvent()" class="btn btn-success btn-text">
                                        <i class="fa fa-paper-plane"></i> Submit
                                    </button>
                                </div>
                                <!-- <button
                    type="submit"
                    class="btn btn-warning btn-text ml-auto"
                  >
                    <i class="fa fa-save"></i> Save
                  </button> -->
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
    name: "job-end-report",
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
            titlelist: [],
            Id: 0,
            appId: 0,
            name: "",
            job_title: "",
            employer_name: "",
            job_start_date: "",
            job_end_date: "",
            changes_in_job_duties: "",
            reason_for_job_end: "",
            clients_perspective: "",
            staff_comments_regarding_job: "",
            employer_comments: "",
            type_of_support: "",
            person_wish_for_another_job: "",
            clients_preferences: "",
            staff_name: "",
            date: "",
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
            assistancelist: [],
            externallist: [],
            pid: 0,
            type: "",
            status: 1,
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
            this.staff_name = this.userdetails.user.name;
            this.GetList();
        }
        let urlParams1 = new URLSearchParams(window.location.search);
        this.pid = urlParams1.get("pid");
        this.type = urlParams1.get("type");
        if (this.pid) {
            this.getdetails();
        }
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
                            "intervention/job-report-end", {
                                added_by: this.userdetails.user.id,
                                patient_id: this.Id,
                                name: this.name,
                                job_title: this.job_title,
                                employer_name: this.employer_name,
                                job_start_date: this.job_start_date,
                                job_end_date: this.job_end_date,
                                changes_in_job_duties: this.changes_in_job_duties,
                                reason_for_job_end: this.reason_for_job_end,
                                clients_perspective: this.clients_perspective,
                                staff_comments_regarding_job: this.staff_comments_regarding_job,
                                employer_comments: this.employer_comments,
                                type_of_support: this.type_of_support,
                                person_wish_for_another_job: this.person_wish_for_another_job,
                                clients_preferences: this.clients_preferences,
                                staff_name: this.staff_name,
                                date: this.date,
                                type_of_diagnosis: this.type_diagnosis_id,
                                category_of_services: this.category_services,
                                location_services_id: this.location_services_id,
                                services: this.services_id,
                                icd_9_code: this.code_id,
                                icd_9_subcode: this.sub_code_id,
                                complexity_of_services: this.complexity_services_id,
                                outcome: this.outcome_id,
                                medication_prescription: this.medication_des,
                                appId: this.appId,
                                status: "0",
                                id: this.pid,
                            }, {
                                headers
                            }
                        );
                        console.log("response", response.data);
                        if (response.data.code == 200 || reponse.data.code == "200") {
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
            this.$swal.fire({
                title: 'Do you want to save the changes?',
                showCancelButton: true,
                confirmButtonText: 'Save',
            }).then(async (result) => {
                if (result.isConfirmed) {
                    this.validate = true;
                    this.errorList = [];
                    try {
                        if (!this.name) {
                            this.errorList.push("Name is required");
                        }
                        if (!this.job_title) {
                            this.errorList.push("Job Title is required");
                        }
                        if (!this.employer_name) {
                            this.errorList.push("Employer Name is required");
                        }
                        if (!this.job_start_date) {
                            this.errorList.push("Job Start Date is required");
                        }
                        if (!this.job_end_date) {
                            this.errorList.push("Job End Date is required");
                        }
                        if (!this.changes_in_job_duties) {
                            this.errorList.push(
                                "Changes in a job duties, work shedule, supervision, or other changes since job start is required"
                            );
                        }
                        if (!this.reason_for_job_end) {
                            this.errorList.push("Reason for Job End is required");
                        }
                        if (!this.clients_perspective) {
                            this.errorList.push(
                                "Client's perspective regarding job end is required"
                            );
                        }
                        if (!this.staff_comments_regarding_job) {
                            this.errorList.push("Staff comments regarding job end is required");
                        }
                        if (!this.employer_comments) {
                            this.errorList.push("Employer comments is required");
                        }
                        if (!this.type_of_support) {
                            this.errorList.push("Type of support provided is required");
                        }
                        if (!this.person_wish_for_another_job) {
                            this.errorList.push(
                                "Does person wish to look for another job/what kind? is required"
                            );
                        }
                        if (!this.clients_preferences) {
                            this.errorList.push(
                                "Client's preferences regarding disclosure on next job is required"
                            );
                        }
                        if (!this.staff_name) {
                            this.errorList.push("Staff Name is required");
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
                            this.name &&
                            this.job_title &&
                            this.employer_name &&
                            this.job_start_date &&
                            this.job_end_date &&
                            this.changes_in_job_duties &&
                            this.reason_for_job_end &&
                            this.clients_perspective &&
                            this.staff_comments_regarding_job &&
                            this.employer_comments &&
                            this.type_of_support &&
                            this.person_wish_for_another_job &&
                            this.clients_preferences &&
                            this.staff_name &&
                            this.date &&
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
                                "intervention/job-report-end", {
                                    added_by: this.userdetails.user.id,
                                    patient_id: this.Id,
                                    name: this.name,
                                    job_title: this.job_title,
                                    employer_name: this.employer_name,
                                    job_start_date: this.job_start_date,
                                    job_end_date: this.job_end_date,
                                    changes_in_job_duties: this.changes_in_job_duties,
                                    reason_for_job_end: this.reason_for_job_end,
                                    clients_perspective: this.clients_perspective,
                                    staff_comments_regarding_job: this.staff_comments_regarding_job,
                                    employer_comments: this.employer_comments,
                                    type_of_support: this.type_of_support,
                                    person_wish_for_another_job: this.person_wish_for_another_job,
                                    clients_preferences: this.clients_preferences,
                                    staff_name: this.staff_name,
                                    date: this.date,
                                    type_of_diagnosis: this.type_diagnosis_id,
                                    category_of_services: this.category_services,
                                    location_services_id: this.location_services_id,
                                    services: this.services_id,
                                    icd_9_code: this.code_id,
                                    icd_9_subcode: this.sub_code_id,
                                    complexity_of_services: this.complexity_services_id,
                                    outcome: this.outcome_id,
                                    medication_prescription: this.medication_des,
                                    appId: this.appId,
                                    status: "1",
                                    id: this.pid,
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
                this.name = response.data.list[0].name_asin_nric;
                console.log("my details", this.patientdetails);
            } else {
                window.alert("Something went wrong");
            }
        },
        resetmodel() {
            this.name = "";
            this.job_title = "";
            this.employer_name = "";
            this.job_start_date = "";
            this.job_end_date = "";
            this.changes_in_job_duties = "";
            this.reason_for_job_end = "";
            this.clients_perspective = "";
            this.staff_comments_regarding_job = "";
            this.employer_comments = "";
            this.type_of_support = "";
            this.person_wish_for_another_job = "";
            this.clients_preferences = "";
            this.staff_name = "";
            this.date = "";
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
                    type: "JobEndReport",
                }, {
                    headers
                }
            );
            if (response.data.code == 200) {

                this.Id = response.data.Data[0].patient_id;

                this.name = response.data.Data[0].name;
                this.job_title = response.data.Data[0].job_title;
                this.employer_name = response.data.Data[0].employer_name;
                this.job_start_date = response.data.Data[0].job_start_date;
                this.job_end_date = response.data.Data[0].job_end_date;
                this.changes_in_job_duties =
                    response.data.Data[0].changes_in_job_duties;
                this.reason_for_job_end = response.data.Data[0].reason_for_job_end;
                this.clients_perspective = response.data.Data[0].clients_perspective;
                this.staff_comments_regarding_job =
                    response.data.Data[0].staff_comments_regarding_job;
                this.employer_comments = response.data.Data[0].employer_comments;
                this.type_of_support = response.data.Data[0].type_of_support;
                this.person_wish_for_another_job =
                    response.data.Data[0].person_wish_for_another_job;
                this.clients_preferences = response.data.Data[0].clients_preferences;
                this.staff_name = response.data.Data[0].staff_name;
                this.date = response.data.Data[0].date;
                this.type_diagnosis_id = response.data.Data[0].type_of_diagnosis;
                this.category_services = response.data.Data[0].category_of_services;
                this.location_services_id = response.data.Data[0].location_of_service;
                this.services_id = response.data.Data[0].services;
                this.code_id = response.data.Data[0].icd_9_code;
                this.sub_code_id = response.data.Data[0].icd_9_subcode;
                this.complexity_services_id =
                    response.data.Data[0].complexity_of_services;
                this.outcome_id = response.data.Data[0].outcome;
                this.medication_des = response.data.Data[0].medication_prescription;
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
