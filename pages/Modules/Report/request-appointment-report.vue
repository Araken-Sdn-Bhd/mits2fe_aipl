<template>
<div>
    <div id="layoutSidenav">
        <CommonSidebar />
        <div id="layoutSidenav_content">
            <CommonHeader />
            <main>
                <div class="container-fluid px-4">
                    <div class="page-title">
                        <h1>Workload Report</h1>
                    </div>

                    <div class="card mb-4">
                        <div class="card-header icon-title">
                            <a href="#"><i class="fad fa-file-chart-line"></i></a>
                            <h4>Request Appointment Report</h4>
                        </div>
                        <div class="card-body">
                            <form>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="mb-3">
                                            <label class="form-label">Period Of Services<small style="color:red">*</small> :</label>
                                            <input type="date" class="form-control" v-model="fromDate" />
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="mb-3">
                                            <label class="form-label">To<small style="color:red">*</small> :</label>
                                            <input type="date" class="form-control" v-model="toDate" />
                                        </div>
                                    </div>
                                </div>
                                <Error :message="error" v-if="error" />
                                <br><br>
                                <div class="btn-width d-flex" :class="SidebarAccess!=1?'hide1':''">
                                    <div class="ml-auto">
                                        <a @click="Ongeneratepdf" class="btn btn-danger btn-text"><i class="fa fa-file-pdf"></i> Generate PDF</a>
                                        <downloadexcel class="btn btn-success btn-text" :header="header" :before-generate="startDownload" :before-finish="finishDownload" :json_data="ReportList" :fetch="Ongenerateexel" :fields="json_fields" :excelname="excelname" :sheetname="sheetname" worksheet="Request Appointment Report" :name=excelname>
                                            <i class="fa fa-file-excel"></i> Generate Excel
                                        </downloadexcel>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
    <div id="result" class="hide" ref="result" style="background: #fff">
        <div class="topnav">
            <div>PERIOD OF SERVICES: {{ fromDate }}</div>
            <p class='to'>TO</p>
            <div>{{ toDate }}</div>
        </div>

        <div>TOTAL REQUEST: {{ total }}</div>

        <table class="table" id="datatable">
            <thead>
                <tr>
                    <th class="thhead">No</th>
                    <th class="thheadadd">Name</th>
                    <th class="thhead">NRIC/Passport</th>
                    <th class="thheadadd">Address</th>
                    <th class="thhead">Phone Number</th>
                    <th class="thhead">Email</th>
                    <th class="thhead">Request Date</th>
                    <th class="thhead">Status</th>
                    <th class="thheadadd">Remark</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(rp, index) in list" :key="index">
                    <td class="tdrow">{{ index + 1 }}</td>
                    <td class="tdrowadd">{{ rp.name }}</td>
                    <td class="tdrow">{{ rp.nric_or_passportno  }}</td>
                    <td class="tdrowadd ">{{ rp.address }}</td>
                    <td class="tdrow">{{ rp.contact_no }}</td>
                    <td class="tdrow">{{ rp.email  }}</td>
                    <td class="tdrow">{{ getFormattedDate(rp.created_at) }}</td>
                    <td class="tdrow">{{ rp.status  }}</td>
                    <td class="tdrowremark">{{ rp.remark  }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<script>
import moment from 'moment';

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
    head: {
        script: [{
            src: "https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.min.js",
            async: true,
            crossorigin: "anonymous",
        }, ],
    },
    data() {
        return {

            json_fields: {
                'No': 'No',
                'Name': 'name',
                'NRIC/Passport': 'nric_or_passportno',
                'Address': 'address',
                'Phone Number': 'contact_number',
                'Email': 'email',
                'Request Date': 'created_at',
                'Status' : 'status',
                'Remark': 'remark'
            },
            excelname: "",
            sheetname: "Request Appointment Report",
            header: "",
            ReportList: [],
            No: 0,
            filename: '',

            userdetails: null,
            fromDate: "",
            toDate: "",
            error: null,
            list: [],
            total: '',
            SidebarAccess: null,

        };
    },
    beforeMount() {
        this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
        this.SidebarAccess = JSON.parse(localStorage.getItem("SidebarAccess"));
        if (this.userdetails) {
            this.id = this.userdetails.user.id;
            this.branch_id = this.userdetails.branch.branch_id;
        }
    },
    methods: {
        async Ongeneratepdf() {
            this.error = null;
            const headers = {
                Authorization: "Bearer " + this.userdetails.access_token,
                Accept: "application/json",
                "Content-Type": "application/json",
            };
            const response = await this.$axios.post(
                "request-appointment-report/get", {
                    fromDate: this.fromDate,
                    toDate: this.toDate,
                    email: this.userdetails.user.email,
                    branch_id: this.userdetails.branch.branch_id,
                    report_type: "pdf"
                }, {
                    headers,
                    params: {
                        branch_id: this.branch_id
                    }
                }
            );
            console.log("my report", response.data);
            if (response.data.code == 200) {
                this.list = response.data.result;
                this.total = this.list.length;
                console.log("my report", response.data);
                if (this.total != 0) {
            
                    let rows = [
                        [{text:'No', bold: true },
                    {text:'Name', bold: true },
                    {text:'NRIC/Passport', bold: true },
                    {text:'Address', bold: true },
                    {text:'Phone Number', bold: true },
                    {text:'Email', bold: true },
                    {text:'Request Date', bold: true },
                    {text:'', bold: true },
                    {text:'Remark', bold: true },
                        ]
                        ]

                        for (let i = 0; i < this.list.length; i++) { // i suggest a for-loop since you need both arrays at a time 
                        rows.push([this.list[i].No,
                        this.list[i].name,
                        this.list[i].nric_or_passportno ,
                        this.list[i].address,
                        this.list[i].contact_no,
                        this.list[i].email,
                        this.list[i].created_at,
                        this.list[i].status,
                        this.list[i].remark,
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
                                {text: 'PERIOD OF SERVICES = ' + this.fromDate + ' TO ' + this.toDate ,
                                        style: 'header',fontSize:7.5,bold:true,},
                                {text: 'TOTAL REQUEST = ' + this.total,
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
                        pdfMake.createPdf(dd).download('RequestAppointmentReport.pdf');

                } else {
                    this.error = "No Record Found";
                }
            } else {
                this.error = "No Record Found";
            }
        },
        async Ongenerateexel() {
            this.error = null;
            try {
                const headers = {
                    Authorization: "Bearer " + this.userdetails.access_token,
                    Accept: "application/json",
                    "Content-Type": "application/json",
                };
                const response = await this.$axios.post(
                    "request-appointment-report/get", {
                        email: this.userdetails.user.email,
                        branch_id: this.userdetails.branch.branch_id,
                        fromDate: this.fromDate,
                        toDate: this.toDate,
                        report_type: "excel"
                    }, {
                        headers,
                        params: {
                            branch_id: this.branch_id
                        }
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
        },
        startDownload() {
            alert('show loading');
        },
        finishDownload() {
            alert('hide loading');
        },
        getFormattedDate(date) {
            return moment(date).format("YYYY-MM-DD hh:mm:ss A")
        },

        formatDate(dateString) {
            const date = dayjs(dateString);
            // Then specify how you want your dates to be formatted
            return date.format('dddd MMMM D, YYYY');
        }

    },
};
</script>

<style scoped>
.tdrow {
    padding: 5px 10px;
    border: 2px solid #000;
    font-size: 13px;
    font-weight: 600;
}

.thhead {
    background: #bbf2eb;
    padding: 5px 10px;
    border: 2px solid #000;
    text-transform: uppercase;
    font-size: 13px;
}
.thheadadd {
    background: #bbf2eb;
    padding: 5px 10px;
    border: 2px solid #000;
    text-transform: uppercase;
    font-size: 13px;
    max-width:300px;
}

.tdrowadd {
    padding: 5px 10px;
    border: 2px solid #000;
    font-size: 13px;
    font-weight: 600;
    word-wrap:break-word;
    max-width:300px;
}
.tdrowremark {
    padding: 5px 10px;
    border: 2px solid #000;
    font-size: 13px;
    font-weight: 600;
    word-wrap:break-word;
}

.table {
    border: 1.5px solid rgb(0, 0, 0);
    width: 100%;
    margin-top: 50px;
}

.tabhead {
    background: #ddd;
    padding: 5px 10px;
    border: 2px solid #000;
    text-transform: uppercase;
    font-size: 13px;
}

.tabtd {
    padding: 5px 10px;
    border: 2px solid #000;
    font-size: 13px;
    font-weight: 600;
}

.hide1 {
    background: #fff;
    display: none;
}

.topnav .to {
    padding-right: 10px;
    padding-left: 10px;
}

.topnav {
    display: flex;
}

div#result {
    padding: 35px;
    width: 1920px;
}
</style>
