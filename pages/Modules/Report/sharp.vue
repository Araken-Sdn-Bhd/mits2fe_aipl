<template>
<div>

    <div id="layoutSidenav">
        <CommonSidebar />
        <div id="layoutSidenav_content">
            <CommonHeader />
            <main>
                <Loader v-show="loader" />
                <div class="container-fluid px-4">
                    <div class="page-title">
                        <h1>Report</h1>
                    </div>

                    <div class="card mb-4">
                        <div class="card-header icon-title">
                            <a href="#"><i class="fad fa-file-chart-line"></i></a>
                            <h4>SHHARP Report</h4>
                        </div>
                        <div class="card-body">
                            <!-- <form> -->
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label class="form-label">Period Of Services<small style="color:red">*</small> :</label>
                                        <input type="date" v-model="fromDate" class="form-control" />
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label class="form-label">To<small style="color:red">*</small> :</label>
                                        <input type="date" v-model="toDate" class="form-control" />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label class="form-label">Diagnosis:</label>
                                        <select class="form-select" v-model="diagnosis">
                                            <option value="">Select Diagnosis</option>
                                            <option v-for="catcode in diagonisislist" v-bind:key="catcode.id" v-bind:value="catcode.id">
                                                {{ catcode.icd_code }} {{catcode.icd_name}}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <!-- row -->

                            <div class="form-title">
                                <h4>Demographic</h4>
                            </div>

                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label class="form-label">Name (As In NRIC):</label>
                                        <input type="text" class="form-control" name="" v-model="name" v-on:keypress="isLetter($event)" />
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label class="form-label">Age:</label>
                                        <select class="form-select" v-model="Age">
                                            <option v-for="rfl in agelist" v-bind:key="rfl.id" v-bind:value="rfl.id">
                                                {{ rfl.section_value }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <!-- row -->

                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label class="form-label">Citizenship:</label>
                                        <select class="form-select" v-model="citizenship">
                                            <option value="">Please Select</option>
                                            <option v-for="rfl in citizenshiplist" v-bind:key="rfl.id" v-bind:value="rfl.id">
                                                {{ rfl.section_value }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label class="form-label">Gender:</label>
                                        <select class="form-select" v-model="gender">
                                            <option value="">Please Select</option>
                                            <option v-for="rfl in genderlist" v-bind:key="rfl.id" v-bind:value="rfl.id">
                                                {{ rfl.section_value }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <!-- row -->

                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label class="form-label">Race:</label>
                                        <select class="form-select" v-model="race">
                                            <option value="">Please Select</option>
                                            <option v-for="rfl in racelist" v-bind:key="rfl.id" v-bind:value="rfl.id">
                                                {{ rfl.section_value }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label class="form-label">Religion:</label>
                                        <select class="form-select" v-model="religion">
                                            <option value="">Please Select</option>
                                            <option v-for="rfl in religionlist" v-bind:key="rfl.id" v-bind:value="rfl.id">
                                                {{ rfl.section_value }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <!-- row -->

                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label class="form-label">Marital Status:</label>
                                        <select class="form-select" v-model="marital_status">
                                            <option value="">Please Select</option>
                                            <option v-for="rfl in meritalstatuslist" v-bind:key="rfl.id" v-bind:value="rfl.id">
                                                {{ rfl.section_value }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label class="form-label">Accommodation:</label>
                                        <select class="form-select" v-model="accomodation">
                                            <option value="">Please Select</option>
                                            <option v-for="rfl in accomodationlist" v-bind:key="rfl.id" v-bind:value="rfl.id">
                                                {{ rfl.section_value }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <!-- row -->

                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label class="form-label">Education Level:</label>
                                        <select class="form-select" v-model="education_level">
                                            <option value="">Please Select</option>
                                            <option v-for="rfl in educationlevellist" v-bind:key="rfl.id" v-bind:value="rfl.id">
                                                {{ rfl.section_value }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label class="form-label">Occupation Status:</label>
                                        <select class="form-select" v-model="occupation_status">
                                            <option value="">Please Select</option>
                                            <option v-for="rfl in occupationstatuslist" v-bind:key="rfl.id" v-bind:value="rfl.id">
                                                {{ rfl.section_value }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <!-- row -->

                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label class="form-label">Fee Exemption Status:</label>
                                        <select class="form-select" v-model="fee_exemption_status">
                                            <option value="">Please Select</option>
                                            <option v-for="rfl in feeexemtionlist" v-bind:key="rfl.id" v-bind:value="rfl.id">
                                                {{ rfl.section_value }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label class="form-label">Occupation Sector:</label>
                                        <select class="form-select" v-model="occupation_sector">
                                            <option value="">Please Select</option>
                                            <option v-for="rfl in occupationsectorlist" v-bind:key="rfl.id" v-bind:value="rfl.id">
                                                {{ rfl.section_value }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <!-- row -->

                            <div class="form-title">
                                <h4>Risk Factor</h4>
                            </div>

                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <select class="form-select" v-model="risk_factor">
                                            <option value="">Please Select</option>
                                            <option v-for="rfl in riskfactorlist" v-bind:key="rfl.id" v-bind:value="rfl.id">
                                                {{ rfl.Question }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <!-- row -->

                            <div class="form-title">
                                <h4>Protective Factors</h4>
                            </div>

                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <select class="form-select" v-model="protective_factor">
                                            <option value="">Please Select</option>
                                            <option v-for="rfl in protectivelist" v-bind:key="rfl.id" v-bind:value="rfl.id">
                                                {{ rfl.Question }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <!-- row -->

                            <div class="form-title">
                                <h4>Self Harm</h4>
                            </div>

                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label class="form-label">Method of Self Harm:</label>
                                        <select class="form-select" v-model="self_harm">
                                            <option value="">Please Select</option>
                                            <option>Overdose/Poisoning</option>
                                            <option>Hanging/Suffocation</option>
                                            <option>Drowning</option>
                                            <option>Firearms or explosives</option>
                                            <option>Fire/flames</option>
                                            <option>Cutting or Piercing</option>
                                            <option>Jumping from height</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label class="form-label">Suicidal Intent:</label>
                                        <select class="form-select" v-model="suicidal_intent">
                                            <option value="">Please Select</option>
                                            <option>No</option>
                                            <option>Yes</option>
                                            <option>Undetermined</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <!-- row -->

                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label class="form-label">How did Patient get idea about method:</label>
                                        <select class="form-select" v-model="idea_about_method">
                                            <option value="">Please Select</option>
                                            <option>Family, friends, peer group</option>
                                            <option>Internet (website, social media platform, app, blogs, forum, video/photosharing)</option>
                                            <option>Printed media (newspaper, books, magazine, etc)</option>
                                            <option>Broadcast media (television, radio)</option>
                                            <option>Specify patient actual words</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <!-- row -->
                            <Error :message="error" v-if="error" />
                            <p v-if="errorList.length">
                                <ul>
                                    <li style="color:red" v-for='err in errorList' :key='err'>
                                        {{ err }}
                                    </li>
                                </ul>
                            </p>
                            <br><br>
                            <div class="btn-width d-flex">
                                <div class="ml-auto" :class="SidebarAccess!=1?'hide':''">
                                    <button @click="Ongeneratepdf" class="btn btn-danger btn-text">
                                        <i class="fa fa-file-pdf"></i> Generate PDF
                                    </button>
                                    <downloadexcel class="btn btn-success btn-text" :header="header" :before-generate="startDownload" :before-finish="finishDownload" :json_data="ReportList" :fetch="Ongenerateexel" :fields="json_fields" :excelname="excelname" :sheetname="sheetname" worksheet="Sharp Report" :name=excelname>
                                        <i class="fa fa-file-excel"></i> Generate Excel
                                    </downloadexcel>
                                </div>
                            </div>
                            <!-- </form> -->

                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
    <div id="result" class="hide" ref="result" style="background: #fff;">
        <table style="border: 1px solid #000">
            <thead>
                <tr>
                    <th class="tabhead">Period of Services</th>
                    <td class="tabtd">{{periodofservices}}</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th class="tabhead">Total Report</th>
                    <td class="tabtd">{{ totalResultlist }}</td>
                </tr>
            </tbody>
        </table>

        <table class="table " id="datatable">
            <thead>
                <tr>
                    <th class="thhead">No</th>
                    <th class="thhead">Hospital Name</th>
                    <th class="thhead">Harm Date</th>
                    <th class="thhead">Harm Time</th>
                    <th class="thhead">Hospital MRN No</th>
                    <th class="thhead">NRIC/Passport</th>
                    <th class="thhead">Age</th>
                    <th class="thhead">Name</th>
                    <th class="thhead">Gender</th>
                    <th class="thhead">Citizenship</th>
                    <th class="thhead">Race</th>
                    <th class="thhead">Employment Status</th>
                    <th class="thhead">Religion</th>
                    <th class="thhead">Marital Status</th>
                    <th class="thhead">Accomondation</th>
                    <th class="thhead">Education Level</th>
                    <th class="thhead">Occupation Status</th>
                    <th class="thhead">Occupation Sector</th>
                    <th class="thhead">Fee Exemption Status</th>
                    <th class="thhead">Address</th>
                    <th class="thhead">City</th>
                    <th class="thhead">State</th>
                    <th class="thhead">PostCode</th>
                    <th class="thhead">Phone Number</th>
                    <th class="thhead">Date of Birth</th>
                    <th class="thhead">Main Diagnosis</th>
                    <th class="thhead">Additional Diagnosis</th>
                    <th class="thhead">Risk Factor</th>
                    <th class="thhead">Protective Factor</th>
                    <th class="thhead">Method of Self Harm</th>
                    <th class="thhead">Idea Of Method</th>
                    <th class="thhead">Suicidal Intent</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(rp, index) in list" :key="index">
                    <td class="tdrow">{{ index + 1 }}</td>
                    <td class="tdrow">{{ rp.HOSPITAL }}</td>
                    <td class="tdrow">{{ rp.DATE }}</td>
                    <td class="tdrow">{{ rp.TIME }}</td>
                    <td class="tdrow">{{ rp.HOSPITAL_MRN_NO }}</td>
                    <td class="tdrow">{{ rp.NRIC_NO_PASSPORT_NO }}</td>
                    <td class="tdrow">{{ rp.AGE }}</td>
                    <td class="tdrow">{{ rp.NAME }}</td>
                    <td class="tdrow">{{ rp.GENDER }}</td>
                    <td class="tdrow">{{ rp.CITIZENSHIP }}</td>
                    <td class="tdrow">{{ rp.RACE }}</td>
                    <td class="tdrow">{{ rp.EMPLOYMENT_STATUS }}</td>
                    <td class="tdrow">{{ rp.RELIGION }}</td>
                    <td class="tdrow">{{ rp.MARITAL }}</td>
                    <td class="tdrow">{{ rp.ACCOMONDATION }}</td>
                    <td class="tdrow">{{ rp.EDUCATION }}</td>
                    <td class="tdrow">{{ rp.OCUPATION_STATUS }}</td>
                    <td class="tdrow">{{ rp.OCCUPATION_SECTOR }}</td>
                    <td class="tdrow">{{ rp.FEE_EXEMPTION }}</td>
                    <td class="tdrow">{{ rp.ADDRESS }}</td>
                    <td class="tdrow">{{ rp.CITY }}</td>
                    <td class="tdrow">{{ rp.STATE }}</td>
                    <td class="tdrow">{{ rp.POSTCODE }}</td>
                    <td class="tdrow">{{ rp.PHONE_NUMBER }}</td>
                    <td class="tdrow">{{ rp.DATE_OF_BIRTH }}</td>
                    <td class="tdrow">{{ rp.MAIN_DIAGNOSIS }}</td>
                    <td class="tdrow"> {{ rp.ADDITIONAL_DIAGNOSIS }}</td>

                    <td class="tdrow">
                        <p v-if=rp.RISK_FACTOR1>{{ rp.RISK_FACTOR1 }} <br></p>
                        <p v-if=rp.RISK_FACTOR2>{{ rp.RISK_FACTOR2 }} <br></p>
                        <p v-if=rp.RISK_FACTOR3>{{ rp.RISK_FACTOR3 }} <br></p>
                        <p v-if=rp.RISK_FACTOR4>{{ rp.RISK_FACTOR4 }} <br></p>
                        <p v-if=rp.RISK_FACTOR5>{{ rp.RISK_FACTOR5 }} <br></p>
                        <p v-if=rp.RISK_FACTOR6>{{ rp.RISK_FACTOR6 }} <br></p>
                        <p v-if=rp.RISK_FACTOR7>{{ rp.RISK_FACTOR7 }} <br></p>
                        <p v-if=rp.RISK_FACTOR8>{{ rp.RISK_FACTOR8 }} <br></p>
                        <p v-if=rp.RISK_FACTOR9>{{ rp.RISK_FACTOR9 }} <br></p>
                        <p v-if=rp.RISK_FACTOR10>{{ rp.RISK_FACTOR10 }} <br></p>
                        <p v-if=rp.RISK_FACTOR11>{{ rp.RISK_FACTOR11 }} <br></p>
                        <p v-if=rp.RISK_FACTOR12>{{ rp.RISK_FACTOR12 }} <br></p>
                    </td>
                    <td class="tdrow">
                        <p v-if=rp.PROTECTIVE_FACTOR13>{{ rp.PROTECTIVE_FACTOR13 }} <br></p>
                        <p v-if=rp.PROTECTIVE_FACTOR14>{{ rp.PROTECTIVE_FACTOR14 }} <br></p>
                        <p v-if=rp.PROTECTIVE_FACTOR15>{{ rp.PROTECTIVE_FACTOR15 }} <br></p>
                        <p v-if=rp.PROTECTIVE_FACTOR16>{{ rp.PROTECTIVE_FACTOR16 }} <br></p>
                        <p v-if=rp.PROTECTIVE_FACTOR17>{{ rp.PROTECTIVE_FACTOR17 }} <br></p>
                        <p v-if=rp.PROTECTIVE_FACTOR18>{{ rp.PROTECTIVE_FACTOR18 }} <br></p>
                    </td>
                    <td class="tdrow">
                        <p v-if=rp.METHOD_OF_SELF_HARM1>{{ rp.METHOD_OF_SELF_HARM1 }} <br></p>
                        <p v-if=rp.METHOD_OF_SELF_HARM2>{{ rp.METHOD_OF_SELF_HARM2 }} <br></p>
                        <p v-if=rp.METHOD_OF_SELF_HARM3>{{ rp.METHOD_OF_SELF_HARM3 }} <br></p>
                        <p v-if=rp.METHOD_OF_SELF_HARM4>{{ rp.METHOD_OF_SELF_HARM4 }} <br></p>
                        <p v-if=rp.METHOD_OF_SELF_HARM5>{{ rp.METHOD_OF_SELF_HARM5 }} <br></p>
                        <p v-if=rp.METHOD_OF_SELF_HARM6>{{ rp.METHOD_OF_SELF_HARM6 }} <br></p>
                        <p v-if=rp.METHOD_OF_SELF_HARM7>{{ rp.METHOD_OF_SELF_HARM7 }} <br></p>
                        <p v-if=rp.METHOD_OF_SELF_HARM8>{{ rp.METHOD_OF_SELF_HARM8 }} <br></p>
                    </td>
                    <td class="tdrow">
                        <p v-if=rp.IDEA_OF_METHOD1>{{ rp.IDEA_OF_METHOD1 }} <br></p>
                        <p v-if=rp.IDEA_OF_METHOD2>{{ rp.IDEA_OF_METHOD2 }} <br></p>
                        <p v-if=rp.IDEA_OF_METHOD3>{{ rp.IDEA_OF_METHOD3 }} <br></p>
                        <p v-if=rp.IDEA_OF_METHOD4>{{ rp.IDEA_OF_METHOD4 }} <br></p>
                        <p v-if=rp.IDEA_OF_METHOD5>{{ rp.IDEA_OF_METHOD5 }} <br></p>
                    </td>
                    <td class="tdrow">
                        <p v-if=rp.SUCIDAL_INTENT1>{{ rp.SUCIDAL_INTENT1 }} <br></p>
                        <p v-if=rp.SUCIDAL_INTENT2>{{ rp.SUCIDAL_INTENT2 }} <br></p>
                        <p v-if=rp.SUCIDAL_INTENT3>{{ rp.SUCIDAL_INTENT3 }} <br></p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<script>
import CommonHeader from "../../../components/CommonHeader.vue";
import CommonSidebar from "../../../components/CommonSidebar.vue";

import downloadexcel from "vue-json-excel";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
export default {
    components: {
        CommonSidebar,
        CommonHeader
    },
    name: "App",
    components: {
        downloadexcel,
    },
    name: "sharp",
    data() {
        return {
            json_fields: {
                "No": 'NO',
                "Hospital Name": 'HOSPITAL',
                "Harm Date": 'DATE',
                "Harm Time": 'TIME',
                "Hospital Mrn No": 'HOSPITAL_MRN_NO',
                "NRIC No/PASSPORT No": 'NRIC_NO_PASSPORT_NO',
                "AGE":'AGE',
                "Name": 'NAME',
                "Gender": 'GENDER',
                "Citizenship": 'CITIZENSHIP',
                "Race": 'RACE',
                "Employment Status": 'EMPLOYMENT_STATUS',
                "Religion": 'RELIGION',
                "Marital": 'MARITAL',
                "Accomondation": 'ACCOMONDATION',
                "Education":'EDUCATION',
                "Occupation Status":'OCCUPATION_STATUS',
                "Occupation Sector":'OCCUPATION_SECTOR',
                "Fee Exemption":'FEE_EXEMPTION',
                "Address": 'ADDRESS',
                "City": 'CITY',
                "State": 'STATE',
                "PostCode": 'POSTCODE',
                "Telephone Number": 'PHONE_NUMBER',
                "Date of Birth": 'DATE_OF_BIRTH',
                "Main Diagnosis": 'MAIN_DIAGNOSIS',
                "Additional Diagnosis": 'ADDITIONAL_DIAGNOSIS',
                "Risk Factor": 'RISK_FACTOR',
                "Protective Factors": 'PROTECTIVE_FACTOR',
                "Method of Self Harm": 'METHOD_OF_SELF_HARM',
                "Idea of Method": 'IDEA_OF_METHOD',
                "Suicidal Intent": 'SUCIDAL_INTENT',
            },
            excelname: "",
            sheetname: "Sharp Report",
            header: "",
            ReportList: [],
            No: 0,
            filename: '',
            TotalReport: 0,
            periodofservices: '',

            userdetails: null,
            errorList: [],
            list: [],
            agelist: [],
            citizenshiplist: [],
            genderlist: [],
            racelist: [],
            religionlist: [],
            meritalstatuslist: [],
            accomodationlist: [],
            educationlevellist: [],
            occupationstatuslist: [],
            feeexemtionlist: [],
            occupationsectorlist: [],
            riskfactorlist: [],
            protectivelist: [],
            selfharmmethodlist: [],
            suicidalintantlist: [],
            patientideamethodlist: [],
            diagonisislist: [],
            loader: false,
            error: null,
            fromDate: "",
            toDate: "",
            diagnosis: "",
            risk_factor: "",
            protective_factor: "",
            self_harm: "",
            suicidal_intent: "",
            idea_about_method: "",
            name: "",
            citizenship: "",
            gender: "",
            race: "",
            religion: "",
            marital_status: "",
            accomodation: "",
            education_level: "",
            occupation_status: "",
            fee_exemption_status: "",
            occupation_sector: "",
            Age: "",
            count: 0,
            SidebarAccess: null,
            totalResultlist: 0,

          
         };
    },
    beforeMount() {
        this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
        this.SidebarAccess = JSON.parse(localStorage.getItem("SidebarAccess"));
        this.branch_id = this.userdetails.branch.branch_id;
      
    },
    mounted() {
        
        this.GetList();
    },
    methods: {
        async GetList() {
            try {
                this.loader = true;
                const headers = {
                    Authorization: "Bearer " + this.token,
                    Accept: "application/json",
                    "Content-Type": "application/json",
                };
                const response = await this.$axios.get(
                    "general-setting/list?section=" + "range-of-age", {
                        headers
                    }
                );
                if (response.data.code == 200 || response.data.code == "200") {
                    this.agelist = response.data.list;
                }
                const response1 = await this.$axios.get(
                    "general-setting/list?section=" + "citizenship", {
                        headers,
                    }
                );
                if (response1.data.code == 200 || response1.data.code == "200") {
                    this.citizenshiplist = response1.data.list;
                    console.log("citizen", this.citizenshiplist);
                }
                const response2 = await this.$axios.get(
                    "general-setting/list?section=" + "gender", {
                        headers
                    }
                );
                if (response2.data.code == 200 || response2.data.code == "200") {
                    this.genderlist = response2.data.list;
                }
                const response3 = await this.$axios.get(
                    "general-setting/list?section=" + "race", {
                        headers
                    }
                );
                if (response3.data.code == 200 || response3.data.code == "200") {
                    this.racelist = response3.data.list;
                }

                const response5 = await this.$axios.get(
                    "general-setting/list?section=" + "religion", {
                        headers
                    }
                );
                if (response5.data.code == 200 || response5.data.code == "200") {
                    this.religionlist = response5.data.list;
                }
                const response6 = await this.$axios.get(
                    "general-setting/list?section=" + "marital-status", {
                        headers
                    }
                );
                if (response6.data.code == 200 || response6.data.code == "200") {
                    this.meritalstatuslist = response6.data.list;
                }
                const response7 = await this.$axios.get(
                    "general-setting/list?section=" + "accommodation", {
                        headers
                    }
                );
                if (response7.data.code == 200 || response7.data.code == "200") {
                    this.accomodationlist = response7.data.list;
                }
                const response8 = await this.$axios.get(
                    "general-setting/list?section=" + "education-level", {
                        headers
                    }
                );
                if (response8.data.code == 200 || response8.data.code == "200") {
                    this.educationlevellist = response8.data.list;
                }
                const response9 = await this.$axios.get(
                    "general-setting/list?section=" + "occupation-status", {
                        headers
                    }
                );
                if (response9.data.code == 200 || response9.data.code == "200") {
                    this.occupationstatuslist = response9.data.list;
                }
                const response10 = await this.$axios.get(
                    "general-setting/list?section=" + "fee-exemption-status", {
                        headers
                    }
                );
                if (response10.data.code == 200 || response10.data.code == "200") {
                    this.feeexemtionlist = response10.data.list;
                }
                const response11 = await this.$axios.get(
                    "general-setting/list?section=" + "occupation-sector", {
                        headers
                    }
                );
                if (response11.data.code == 200 || response11.data.code == "200") {
                    this.occupationsectorlist = response11.data.list;
                }
                const response12 = await this.$axios.post(
                    "shharp-registration-risk-protective-questions/list", {
                        Type: "Risk Factors"
                    }, {
                        headers
                    }
                );
                if (response12.data.code == 200 || response12.data.code == "200") {
                    this.riskfactorlist = response12.data.list;
                }
                const response13 = await this.$axios.post(
                    "shharp-registration-risk-protective-questions/list", {
                        Type: "Protective Factors"
                    }, {
                        headers
                    }
                );

                if (response13.data.code == 200 || response13.data.code == "200") {
                    this.protectivelist = response13.data.list;
                }
                const response14 = await this.$axios.get("self-harm/list", {
                    headers
                });
                if (response14.data.code == 200 || response14.data.code == "200") {
                    this.selfharmmethodlist = response14.data.list;
                }
                const response15 = await this.$axios.get("suicidal-intent/list", {
                    headers,
                });
                if (response15.data.code == 200 || response15.data.code == "200") {
                    this.suicidalintantlist = response15.data.list;
                }
                const response16 = await this.$axios.get("patient-get-idea/list", {
                    headers,
                });
                if (response16.data.code == 200 || response16.data.code == "200") {
                    this.patientideamethodlist = response16.data.list;
                }
                const response17 = await this.$axios.get("diagnosis/getIcd10codeList", {
                    headers,
                });
                if (response17.data.code == 200 || response17.data.code == "200") {
                    this.diagonisislist = response17.data.list;
                } else {
                    this.diagonisislist = [];
                }
                this.loader = false;
            } catch (e) {
                console.log("my error", e);
            }
        },
        async isLetter(e) {
            let char = String.fromCharCode(e.keyCode);
            if (/^[A-Za-z\'@ ]+$/.test(char)) return true;
            else e.preventDefault();
        },

        async Ongeneratepdf() {
            this.errorList = [];
            this.error = null;
            if (!this.fromDate) {
                this.errorList.push("From date is Required!");
            }
            if (!this.toDate) {
                this.errorList.push("To date is Required!");
            }
            if (this.fromDate && this.toDate) {
                const headers = {
                    Authorization: "Bearer " + this.userdetails.access_token,
                    Accept: "application/json",
                    "Content-Type": "application/json",
                };
                const response = await this.$axios.post(
                    "report/shharp", {
                        added_by: this.userdetails.user.id,
                        email: this.userdetails.user.email,
                        branch_id: this.branch_id,
                        fromDate: this.fromDate,
                        toDate: this.toDate,
                        diagnosis: this.diagnosis,
                        risk_factor: this.risk_factor,
                        protective_factor: this.protective_factor,
                        self_harm: this.self_harm,
                        suicidal_intent: this.suicidal_intent,
                        idea_about_method: this.idea_about_method,
                        name: this.name,
                        citizenship: this.citizenship,
                        gender: this.gender,
                        race: this.race,
                        Age: this.Age,
                        religion: this.religion,
                        marital_status: this.marital_status,
                        accomodation: this.accomodation,
                        education_level: this.education_level,
                        occupation_status: this.occupation_status,
                        fee_exemption_status: this.fee_exemption_status,
                        occupation_sector: this.occupation_sector,
                        report_type: "pdf",
                    }, {
                        headers
                    }
                );
                console.log("my report", response.data);
                if (response.data.code == 200) {
                    this.list = response.data.result;
                    this.totalResultlist = response.data.TotalReport;
                    this.periodofservices = response.data.periodofservices;
                    if (this.list.length > 0) {

                        let rows = [
                        [{text:'No', bold: true },
                        {text:'Hospital Name', bold: true },
                        {text:'Harm Date', bold: true },
                        {text:'Harm Time', bold: true },
                        {text:'NRIC/Passport', bold: true },
                        {text:'Name', bold: true },
                        {text:'Address', bold: true },
                        {text:'City', bold: true },
                        {text:'State', bold: true },
                        {text:'PostCode', bold: true },
                        {text:'Phone Number', bold: true },
                        {text:'Date of Birth', bold: true },
                        {text:'Main Diagnosis', bold: true },
                        {text:'Additional Diagnosis', bold: true },
                        {text:'Risk Factor', bold: true },
                        {text:'Protective Factor', bold: true },
                        {text:'Method of Self Harm', bold: true },
                        {text:'Idea Of Method', bold: true },
                        {text:'Suicidal Intent', bold: true },
                        ]
                        ]

                        for (let i = 0; i < this.list.length; i++) { // i suggest a for-loop since you need both arrays at a time 
                        rows.push([this.list[i].NO,
                        this.list[i].HOSPITAL,
                        this.list[i].DATE,
                        this.list[i].TIME,
                        this.list[i].HOSPITAL_MRN_NO,
                        this.list[i].NRIC_NO_PASSPORT_NO,
                        this.list[i].AGE,
                        this.list[i].NAME,
                        this.list[i].GENDER,
                        this.list[i].CITIZENSHIP,
                        this.list[i].RACE,
                        this.list[i].EMPLOYMENT_STATUS,
                        this.list[i].RELIGION,
                        this.list[i].MARITAL,
                        this.list[i].ACCOMONDATION,
                        this.list[i].EDUCATION,
                        this.list[i].ADDRESS,
                        this.list[i].CITY,
                        this.list[i].STATE,
                        this.list[i].POSTCODE,
                        this.list[i].PHONE_NUMBER,
                        this.list[i].DATE_OF_BIRTH,
                        this.list[i].MAIN_DIAGNOSIS,
                        this.list[i].ADDITIONAL_DIAGNOSIS,
                        this.list[i].RISK_FACTORpdf,
                        this.list[i].PROTECTIVE_FACTORpdf,
                        this.list[i].METHOD_OF_SELF_HARMpdf,
                        this.list[i].IDEA_OF_METHODpdf,
                        this.list[i].SUCIDAL_INTENTpdf,
                        ]);
                        }                       

                                var dd = {
                                style: 'tableExample',
                                pageSize: 'A3',
                                pageOrientation: 'landscape',
                                defaultStyle: {
                                                fontSize: 7.5, //2.90(potrait) untuk A3 //maybe 4.5 untuk A2
                                            },
                                content: [
                                {text: 'PERIOD OF SERVICES =' + this.periodofservices,
                                        style: 'header',fontSize:7.5,bold:true,},
                                {text: 'TOTAL REPORT =' + this.totalResultlist,
                                        style: 'header',fontSize:7.5,bold:true,},



                                {                                   
                                    
                                    table: {
                                        body: rows,
                                        headerRows:1,
                                    }
                                },
                                ],
                            
                        };
                        //pdfMake.createPdf(dd).open('GeneralReport.pdf');
                        pdfMake.createPdf(dd).download('SHHARPReport.pdf');


                    } else {
                        this.error = "No Record Found";
                    }
                } else {
                    this.error = "No Record Found";
                }
            }
        },

        async Ongenerateexel() {
            this.loader=true;
            this.errorList = [];
            this.error = null;
            if (!this.fromDate) {
                this.errorList.push("From date is Required!");
            }
            if (!this.toDate) {
                this.errorList.push("To date is Required!");
            }
            if (this.fromDate && this.toDate) {
                try {
                    const headers = {
                        Authorization: "Bearer " + this.userdetails.access_token,
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    };
                    const response = await this.$axios.post(
                        "report/shharp", {
                            branch_id: this.branch_id,
                            fromDate: this.fromDate,
                            email: this.userdetails.user.email,
                            toDate: this.toDate,
                            diagnosis: this.diagnosis,
                            risk_factor: this.risk_factor,
                            protective_factor: this.protective_factor,
                            self_harm: this.self_harm,
                            suicidal_intent: this.suicidal_intent,
                            idea_about_method: this.idea_about_method,
                            name: this.name,
                            citizenship: this.citizenship,
                            gender: this.gender,
                            Age: this.Age,
                            race: this.race,
                            religion: this.religion,
                            marital_status: this.marital_status,
                            accomodation: this.accomodation,
                            education_level: this.education_level,
                            occupation_status: this.occupation_status,
                            fee_exemption_status: this.fee_exemption_status,
                            occupation_sector: this.occupation_sector,
                            report_type: "excel",
                        }, {
                            headers
                        }
                    );
                    console.log("my report", response.data);
                    if (response.data.code == 200) {
                        if (response.data) {
                            this.loader=false;
                            this.ReportList = response.data.result;
                            this.excelname = response.data.filename;
                            this.header = response.data.header;
                            return response.data.result;

                        } else {
                            this.loader=false;
                            this.error = "No Record Found";
                        }
                    }
                } catch (e) {
                    this.loader = false;
                    this.$swal.fire({
                        icon: 'error',
                        title: 'Oops... Something Went Wrong!',
                        text: 'the error is: ' + e,
                        footer: ''
                    });
                }
            }
        },
        currentDate() {
            const current = new Date();
            const date = `${current.getDate()}/${
        current.getMonth() + 1
      }/${current.getFullYear()}`;
            return date;
        },
    },
};
</script>

<style scoped>
.tdrow {
    padding: 5px 5px;
    border: 2.0px solid #000;
    font-size: 12px;
    font-weight: 600;
    text-align: center;
    max-width:80px;
    
}

.thhead {
    background: #bbf2eb;
    padding: 5px;
    border:2.0px solid #000;
    text-transform: uppercase;
    font-size: 12px;
    line-height: normal;
    text-align: center;
    max-width:80px;
}

.table {
    border: 2.0px solid rgb(0, 0, 0);
    width: fit-content;
    margin-top: 20px;
    margin-right: 20px;
    margin-left: 20px;
    line-height: normal;
}

.tabhead {
    background: #ddd;
    padding: 5px;
    border: 2.0px solid #000;
    text-transform: uppercase;
    font-size: 11px;
}

.tabtd {
    padding: 5px;
    border: 2.0px solid #000;
    font-size: 12px;
    font-weight: 600;
}

.hide {
    background: #fff;
    display: none;
}

div#result {
    padding: 15px;
    width: 1920px;
}
</style>
