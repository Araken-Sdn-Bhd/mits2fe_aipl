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
                        <h1>Workload Report</h1>
                    </div>

                    <div class="card mb-4">
                        <div class="card-header icon-title">
                            <a href="#"><i class="fad fa-file-chart-line"></i></a>
                            <h4>Total Patient & Type of Referral</h4>
                        </div>
                        <div class="card-body">
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
                            <!-- row -->
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label class="form-label">Categories Of Patient:</label>
                                        <select class="form-select" v-model="patient_category">
                                            <option value="0">Please Select</option>
                                            <option v-for="cat in patientcategorylist" v-bind:key="cat.id" v-bind:value="cat.id">
                                                {{ cat.section_value }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label class="form-label">Type of Referral:</label>
                                        <select class="form-select" v-model="referral_type">
                                            <option value="0">Please Select</option>
                                            <option v-for="rfl in referallist" v-bind:key="rfl.id" v-bind:value="rfl.id">
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
                                        <label class="form-label">Type Of Visit:</label>
                                        <select class="form-select" v-model="type_visit">
                                            <option value="0">Please Select</option>
                                            <option v-for="vst in visitlist" v-bind:key="vst.id" v-bind:value="vst.id">
                                                {{ vst.section_value }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <!-- row -->
                            </div>
                            <Error :message="error" v-if="error" />
                            <p v-if="errorList.length">
                                <ul>
                                    <li style="color:red" v-for='err in errorList' :key='err'>
                                        {{ err }}
                                    </li>
                                </ul>
                            </p>
                            <br><br>
                            <div class="btn-width d-flex" :class="SidebarAccess!=1?'hide':''">
                                <div class="ml-auto">
                                    <a @click="Ongeneratepdf" class="btn btn-danger btn-text"><i class="fa fa-file-pdf"></i> Generate PDF</a>
                                    <downloadexcel class="btn btn-success btn-text" :header="header" :before-generate="startDownload" :before-finish="finishDownload" :json_data="ReportList" :fetch="Ongenerateexel" :fields="json_fields" :excelname="excelname" :sheetname="sheetname" worksheet="TOTAL PATIENT AND TYPE OF REFERRAL" :name=excelname>
                                        <i class="fa fa-file-excel"></i> Generate Excel
                                    </downloadexcel>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
    <div id="result" class="hide" ref="result" style="background: #fff">
        <div>Total Days:{{ Total_Days }}</div>
        <div>Total Patient:{{ Total_Patient }}</div>

        <table class="total-patient-table">
            <tbody>
                <tr>
                    <td>1</td>
                    <td>CATEGORY OF PATIENTS</td>
                    <td class="td-table">
                        <table class="patient-inner-table">
                            <thead>
                                <tr>
                                    <th>OUTPATIENT</th>
                                    <th>DAYCARE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-if="Category_Patient">
                                    <td class="bottom-border-0"> {{ Category_Patient.Outpatient }}</td>
                                    <td class="bottom-border-0">{{ Category_Patient.Daycare }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Type of Visit</td>
                    <td class="td-table">
                        <table class="patient-inner-table">
                            <thead>
                                <tr>
                                    <th>NEW</th>
                                    <th>FOLLOWUP</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-if="Visit_Type">
                                    <td class="bottom-border-0">{{ Visit_Type.New }}</td>
                                    <td class="bottom-border-0">{{ Visit_Type.Follow_Up }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Type of Referral</td>
                    <td class="td-table">
                        <table class="patient-inner-table">
                            <thead>
                                <tr>
                                    <th>WALK-IN</th>
                                    <th>REFERRAL</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-if="Referal_walk">
                                    <td>0</td>
                                    <td>{{ Referal_walk.Refferal }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
        <table class="table main-data-table" id="datatable">
            <thead>
                <tr>
                    <th class="thhead">No</th>
                    <th class="thhead">Date</th>
                    <th class="thhead">Time</th>
                    <th class="thhead">NRIC/Passport</th>
                    <th class="thhead">Name</th>
                    <th class="thhead">Address</th>
                    <th class="thhead">City</th>
                    <th class="thhead">State</th>
                    <th class="thhead">PostCode</th>
                    <th class="thhead">Phone Number</th>
                    <th class="thhead">Date of Birth</th>
                    <th class="thhead">Categories of Patient</th>
                    <th class="thhead">Type of Referral</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(rp, index) in list" :key="index">
                    <td class="tdrow">{{ index + 1 }}</td>
                    <td class="tdrow">{{ rp.DATE }}</td>
                    <td class="tdrow">{{ rp.TIME }}</td>
                    <td class="tdrow">{{ rp.NRIC_NO_PASSPORT_NO }}</td>
                    <td class="tdrow">{{ rp.Name }}</td>
                    <td class="tdrow">{{ rp.ADDRESS }}</td>
                    <td class="tdrow">{{ rp.CITY }}</td>
                    <td class="tdrow">{{ rp.STATE }}</td>
                    <td class="tdrow">{{ rp.POSTCODE }}</td>
                    <td class="tdrow">{{ rp.PHONE_NUMBER }}</td>
                    <td class="tdrow">{{ rp.DATE_OF_BIRTH }}</td>
                    <td class="tdrow">{{ rp.CATEGORY_OF_PATIENTS }}</td>
                    <td class="tdrow">{{ rp.TYPE_OF_Refferal }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<script>
import CommonHeader from '../../../components/CommonHeader.vue';
import CommonSidebar from '../../../components/CommonSidebar.vue';
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
                "NO": 'No',
                "DATE": 'DATE',
                "TIME": "TIME",
                "NRIC NO/PASSPORT NO": "NRIC_NO_PASSPORT_NO",
                "NAME": "Name",
                "ADDRESS": "ADDRESS",
                "CITY": "CITY",
                "STATE": "STATE",
                "POSTCODE": "POSTCODE",
                "TELEPHONE NUMBER": "PHONE_NUMBER",
                "DATE OF BIRTH": "DATE_OF_BIRTH",
                "CATEGORIES OF PATIENT": "CATEGORY_OF_PATIENTS",
                "TYPE OF VISIT": "TYPE_OF_Visit",
                "TYPE OF REFERAL": "TYPE_OF_Refferal",
            },
            excelname: "",
            sheetname: "TOTAL PATIENT AND TYPE OF REFERRAL",
            header: "",

            userdetails: null,
            loader: false,
            error: null,
            Referal_walk: null,
            Visit_Type: null,
            Category_Patient: null,
            errorList: [],
            list: [],
            patientcategorylist: [],
            referallist: [],
            visitlist: [],
            fromDate: "",
            toDate: "",
            patient_category: 0,
            type_visit: 0,
            referral_type: 0,
            Total_Patient: 0,
            Total_Days: 0,
            SidebarAccess: null,
        };
    },
    beforeMount() {
        this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
        this.SidebarAccess = JSON.parse(localStorage.getItem("SidebarAccess"));
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
                const response12 = await this.$axios.get(
                    "general-setting/list?section=" + "patient-category", {
                        headers
                    }
                );
                if (response12.data.code == 200 || response12.data.code == "200") {
                    this.patientcategorylist = response12.data.list;
                    console.log("my patientcategorylist", this.patientcategorylist);
                } else {
                    this.patientcategorylist = [];
                }

                const response13 = await this.$axios.get(
                    "general-setting/list?section=" + "type-of-referral", {
                        headers,
                    }
                );
                if (response13.data.code == 200 || response13.data.code == "200") {
                    this.referallist = response13.data.list;
                    console.log("my referallist", this.referallist);
                } else {
                    this.referallist = [];
                }

                const response14 = await this.$axios.get(
                    "general-setting/list?section=" + "type-of-visit", {
                        headers
                    }
                );

                if (response14.data.code == 200 || response14.data.code == "200") {
                    this.visitlist = response14.data.list;
                    console.log("my visitlist", this.visitlist);
                } else {
                    this.visitlist = [];
                }
                this.loader = false;
            } catch (e) {
                console.log("my error", e);
            }
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
                try {
                    const headers = {
                        Authorization: "Bearer " + this.userdetails.access_token,
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    };
                    const response = await this.$axios.post(
                        "report/total-patient-type-refferal", {
                            fromDate: this.fromDate,
                            email: this.userdetails.user.email,
                            branch_id: this.userdetails.branch.branch_id,
                            toDate: this.toDate,
                            patient_category: this.patient_category,
                            type_visit: this.type_visit,
                            referral_type: this.referral_type,
                            report_type: "pdf",
                        }, {
                            headers
                        }
                    );
                    console.log("my report", response.data);
                    if (response.data.code == 200) {
                        this.list = response.data.result;
                        if (this.list.length > 0) {
                            this.Referal_walk = response.data.Referal_walk;
                            this.Visit_Type = response.data.Visit_Type;
                            this.Category_Patient = response.data.Category_Patient;
                            this.Total_Days = response.data.Total_Days;
                            this.Total_Patient = response.data.Total_Patient;
                            
                        let rows = [
                        [{text:'No', bold: true },
                    {text:'Date', bold: true },
                    {text:'Time', bold: true },
                    {text:'NRIC/Passport', bold: true },
                    {text:'Name', bold: true },
                    {text:'Address', bold: true },
                    {text:'City', bold: true },
                    {text:'State', bold: true },
                    {text:'PostCode', bold: true },
                    {text:'Phone Number', bold: true },
                    {text:'Date of Birth', bold: true },
                    {text:'Categories of Patient', bold: true },
                    {text:'Type of Referral', bold: true },
                        ]
                        ]

                        for (let i = 0; i < this.list.length; i++) { // i suggest a for-loop since you need both arrays at a time 
                        rows.push([this.list[i].No,
                        this.list[i].DATE,
                        this.list[i].TIME,
                        this.list[i].NRIC_NO_PASSPORT_NO,
                        this.list[i].Name,
                        this.list[i].ADDRESS,
                        this.list[i].CITY,
                        this.list[i].STATE,
                        this.list[i].POSTCODE,
                        this.list[i].PHONE_NUMBER,
                        this.list[i].DATE_OF_BIRTH,
                        this.list[i].CATEGORY_OF_PATIENTS,
                        this.list[i].TYPE_OF_Refferal,
                        ]);
                        }                       

                                var dd = {
                                style: 'tableExample',
                                pageSize: 'A4',
                                pageOrientation: 'landscape',
                                defaultStyle: {
                                                fontSize: 7.5, //2.90(potrait) untuk A3 //maybe 4.5 untuk A2
                                            },
                                content: [
                                {text: 'NEW =' + this.Visit_Type.New,
                                        style: 'header',fontSize:7.5,bold:true,},
                                {text: 'FOLLOW UP =' + this.Visit_Type.Follow_Up,
                                        style: 'header',fontSize:7.5,bold:true,},

                                {text: 'WALK-IN =' + this.Referal_walk.Walk_In,
                                        style: 'header',fontSize:7.5,bold:true,},

                                {text: 'REFERRAL =' + this.Referal_walk.Referral,
                                        style: 'header',fontSize:7.5,bold:true,},

                                {text: 'DAYCARE =' + this.Category_Patient.Daycare,
                                        style: 'header',fontSize:7.5,bold:true,},

                                {text: 'OUTPATIENT =' + this.Category_Patient.Outpatient,
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
                        pdfMake.createPdf(dd).download('ReferralReport.pdf');








                        } else {
                            this.error = "No Record Found";
                        }
                    } else {
                        this.error = "No Record Found";
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
        async Ongenerateexel() {
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
                        "report/total-patient-type-refferal", {
                            email: this.userdetails.user.email,
                            branch_id: this.userdetails.branch.branch_id,
                            fromDate: this.fromDate,
                            toDate: this.toDate,
                            patient_category: this.patient_category,
                            type_visit: this.type_visit,
                            referral_type: this.referral_type,
                            report_type: "excel",
                        }, {
                            headers
                        }
                    );
                    console.log("my report", response.data);
                    if (response.data.code == 200) {
                        if (response.data) {
                            this.ReportList = response.data.result;
                            this.excelname = response.data.filename;
                            this.header = response.data.header;
                            return response.data.result;

                        } else {
                            this.error = "No Record Found";
                        }
                    } else {
                        this.error = "No Record Found";
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
.hide1 {
    background: #fff;
    display: none;
}

.total-patient-table {
    width: 50%;

    margin-bottom: 10px;
}

.total-patient-table td[data-v-1b54f771] {
    border: 1px solid #000;
    padding: 0px 20px;
    font-size: 13px;
    font-weight: 600;
}

.patient-inner-table {
    width: 100%;
}

.td-table {
    padding: 0px !important;
}

.patient-inner-table th {
    background: #bbf2eb;
    border-left: 1px solid #000;
    padding: 4px 10px;
    width: 50%;
    text-align: center;
}

.patient-inner-table th:last-child {
    border-right: 0;
}

.patient-inner-table td {
    text-align: center;
    border-bottom: 0px !important;
    border-left: 0px !important;
}

.patient-inner-table td:last-child {
    border-right: 0;
}

div#result {
    padding: 35px;
    width: 1920px;
}
</style>
