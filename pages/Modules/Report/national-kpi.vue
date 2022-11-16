<template>
  <div>
    <div id="layoutSidenav">
      <CommonSidebar />
      <div id="layoutSidenav_content">
        <CommonHeader />
        <main>
          <div class="container-fluid px-4">
            <div class="page-title">
              <h1>Report</h1>
               <img src="~/assets/images/tab1.jpg" style="display: none">
               <img src="~/assets/images/tab2.jpg" style="display: none">
               <img src="~/assets/images/tab3.jpg" style="display: none">
               <img src="~/assets/images/tab4.jpg" style="display: none">
               <img src="~/assets/images/tab5.jpg" style="display: none">
            </div>

            <div class="card mb-4">
              <div class="card-header icon-title">
                <a href="#"><i class="fa fa-file-chart-line"></i></a>
                <h4>NATIONAL KPI</h4>
              </div>
              <div class="card-body">
                <form>
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="mb-3">
                        <label class="form-label">Period Of Services:</label>
                        <input
                          type="date"
                          class="form-control"
                          v-model="fromDate"
                        />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="mb-3">
                        <label class="form-label">To:</label>
                        <input
                          type="date"
                          class="form-control"
                          v-model="toDate"
                        />
                      </div>
                    </div>
                  </div>
                  <!-- row -->
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="mb-3">
                        <label class="form-label">Level of Report:</label>
                        <select class="form-select" v-model="Age">
                          <option value="">Please Select</option>
                          <option
                            v-for="rfl in agelist"
                            v-bind:key="rfl.id"
                            v-bind:value="rfl.id"
                          >
                            {{ rfl.section_value }}
                          </option>
                        </select>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="mb-3">
                        <label class="form-label">Status Of Job:</label>
                        <select class="form-select" v-model="Gender">
                          <option value="">Please Select</option>
                          <option
                            v-for="rfl in genderlist"
                            v-bind:key="rfl.id"
                            v-bind:value="rfl.id"
                          >
                            {{ rfl.section_value }}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <!-- row -->
                  <!-- row -->

                  <div class="d-flex">
                    <div class="ml-auto" :class="SidebarAccess!=1?'hide1':''">
                      <a @click="Ongeneratepdf" class="btn btn-danger btn-text"
                        ><i class="fa fa-file-pdf"></i> Generate PDF</a
                      >
                      <a
                        @click="Ongenerateexel"
                        class="btn btn-success btn-text"
                        ><i class="fa fa-file-excel"></i> Generate Excel</a
                      >
                      <!-- <downloadexcel
                       class="btn btn-success btn-text"
                       :header="header"
                       :before-generate = "startDownload"
                       :before-finish   = "finishDownload"
                       :json_data="ReportList"
                       :fetch = "Ongenerateexel"
                       :fields ="json_fields"
                       :excelname="excelname"
                       :sheetname="sheetname"
                        worksheet="National KPI"
                       :name=excelname
                      >
                      <i class="fa fa-file-excel"></i> Generate Excel
                      </downloadexcel> -->
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div id="result" class="hide" ref="result" style="background: #fff">
            <table id="datatable">
              <thead>
                <tr class="bg">
                  <td rowspan="3" style="border-right: 0.1em solid #000;">Bil</td>
                  <td rowspan="3" style="border-left: 1px solid #000;">Mentari</td>
                  <td colspan="45">2022</td>
                </tr>

                <tr class="bg" id="tableMonths"></tr>

                <tr class="vertical bg text-justify" id="tableHeadKeys"></tr>
              </thead>
              <tbody id="tablebody_"></tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>
<style scoped>
@media print {
  body {
    background: #000 !important;
  }
  table th {
    background: #000 !important;
  }
}

.hide1 {
  background: #fff;
  display: none;
}
#result {
  padding: 35px;
}

table td {
  border: 1px solid #000;
  padding: 5px;
  font-weight: 500;
}

table {
  width: auto;
  border-spacing: 0;
  border: 1px solid #000;
  text-align: center;
}

.tr-box td:first-child {
  text-align: left;
}

.last-tr td {
  font-weight: 600;
  opacity: 1;
}

.vertical td {
  transform: rotate(-180deg);

  text-orientation: mixed;
}
.bg {
  background: #b8cce4;
}
.vertical td {
  transform: rotate(-180deg);

  text-orientation: mixed;
}
.vertical-text {
	transform: rotate(90deg);
	transform-origin: left top 0;
}
</style>
<script>
import { max } from "moment";
import CommonHeader from "../../../components/CommonHeader.vue";
import CommonSidebar from "../../../components/CommonSidebar.vue";
import Vue from "vue";
import downloadexcel from "vue-json-excel";
import JsonExcel from "vue-json-excel";

Vue.component("downloadExcel", JsonExcel);

export default {
  components: { CommonSidebar, CommonHeader },

  name: "national-kpi-report",
  components: {
    downloadexcel,
  },
  head: {
    script: [
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.min.js",
        async: true,
        crossorigin: "anonymous",
      },
    ],
  },
  data() {
    return {
      json_fields: {
        "NO":'No',
        "NAME" : 'Name',
        "APPOINTMENT_TYPE" :"APPOINTMENT_TYPE",
        "TYPE OF VISIT": "TYPE_OF_Visit",
        "TYPE OF REFERRAL" :"TYPE_OF_Refferal",
        "IC NO": "IC_NO",
        "GENDER": "GENDER",
        "AGE": "AGE",
        "DIAGNOSIS" : "DIAGNOSIS",
        "MEDICATIONS" : "MEDICATIONS",
        "APPOINTMENT NO" :"app_no",
        "PROCEDURE":"Procedure",
        "NEXT VISIT":"Next_visit",
        "TIME REGISTERED" :"time_registered",
        "TIME SEEN":"time_seen",
        "ATTENDANCE STATUS":"Attendance_status",
        "ATTENDING DOCTOR/STAFF":"Attending_staff",
      },
      excelname: "",
      sheetname: "NATIONAL KPI",
      header:"",
      userdetails: null,
      fromDate: "", //2022-04-12
      toDate: "", //2022-08-30
      error: null,
      listKey: [],
      list: {},
      agelist: [],
      genderlist: [],
      racelist: [],
      ReportList:[],
      Gender: "",
      Age: "",
      race_id: "",
      SidebarAccess:null,
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
        const response = await this.$axios.get(
          "general-setting/list?section=" + "range-of-age",
          { headers }
        );
        if (response.data.code == 200 || response.data.code == "200") {
          this.agelist = response.data.list;
        }
        const response2 = await this.$axios.get(
          "general-setting/list?section=" + "gender",
          { headers }
        );
        if (response2.data.code == 200 || response2.data.code == "200") {
          this.genderlist = response2.data.list;
        }
        const response3 = await this.$axios.get(
          "general-setting/list?section=" + "race",
          { headers }
        );
        if (response3.data.code == 200 || response3.data.code == "200") {
          this.racelist = response3.data.list;
        }
        // this.Ongeneratepdf();
        this.loader = false;
      } catch (e) {
        console.log("my error", e);
      }
    },

    async Ongeneratepdf() {
      // console.log('my date');
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
            "report/kpi",
            {
              added_by: this.userdetails.user.id,
              fromDate: this.fromDate,
              toDate: this.toDate,
              job_status: this.job_status,
              report_type: "pdf",
            },
            { headers }
          );
          // debugger;
          console.table();
          // Object.keys(response.data.result)

          var tblbody = document.getElementById("tablebody_");
          // debugger;

          // if (response.code == 200) {
          var months = [
            "Januari",
            "Februari",
            "Mac",
            "April",
            "Mei",
            "Jun",
            "Julai",
            "Ogos",
            "September",
            "Oktober",
            "November",
            "Disember",
          ];
          var tableHeads = [
            "KPI(%)","KPI(%)","KPI(%)","KPI(%)","KPI(%)",
          ]

          var tab1 = document.getElementById("tableHeadKeys");
          var tab2 = document.getElementById("tableMonths");
          // var maxYears = 0;

          tab1.innerHTML = "";
          tab2.innerHTML = "";

          tblbody.innerHTML = "";

          var maxUser = 0;
          var maxMonth = 0;
          var n = 1;

          Object.keys(response.data.result).forEach((user, i) => {
            var tblrow = "";
            var tmp1 = Object.keys(response.data.result[user]);
            tmp1.forEach((year) => {
              var tmp2 = Object.keys(response.data.result[user][year]);
              if (tmp2.length > maxMonth) {
                maxUser = user;
                maxMonth = year;
              }
              tmp2.forEach((month, i) => {
                // debugger;
                // if (response.data.result[user][year][month]["month_name"]) {
                if (i == 0) {
                  tblrow +=
                    "<td style='border: 1px solid #000; padding: 5px; font-weight: 500;'>" +
                    n++ +
                    "</td>";
                  tblrow +=
                    "<td style='border: 1px solid #000; padding: 5px; font-weight: 500;'>" +
                    user +
                    "</td>";
                }

                tblrow +=
                  "<td style='    border-bottom: 1px solid #000; border-right: 1px solid #000; padding: 5px; font-weight: 500; width: 40px;'>" +
                  response.data.result[user][year][month]["new_job"] +
                  "</td>";
                tblrow +=
                  "<td style='    border-bottom: 1px solid #000; border-right: 1px solid #000; padding: 5px; font-weight: 500; width: 40px;'>" +
                  response.data.result[user][year][month]["ongoing_job"] +
                  "</td>";
                tblrow +=
                  "<td style='    border-bottom: 1px solid #000; border-right: 1px solid #000; padding: 5px; font-weight: 500; width: 40px;'>" +
                  response.data.result[user][year][month]["total_caseload"] +
                  "</td>";
                tblrow +=
                  "<td style='    border-bottom: 1px solid #000; border-right: 1px solid #000; padding: 5px; font-weight: 500; width: 40px;'>" +
                  response.data.result[user][year][month]["total_dismissed"] +
                  "</td>";
                tblrow +=
                  "<td style='    border-bottom: 1px solid #000; border-right: 1px solid #000; padding: 5px; font-weight: 500; width: 40px;'>" +
                  response.data.result[user][year][month]["kpi"] +
                  "</td>";

                // }
              });
            });
            tblbody.innerHTML += "<tr class='tr-box'>" + tblrow + "</tr>";
          });

          var tmp2 = Object.keys(response.data.result[maxUser][maxMonth]);
          console.log('result22',response.data.result[maxUser]);
          // tmp2 = tmp2.map(e=>int.parse(e));
          for (let ii = 0; ii < tmp2.length; ii++) {
            for (let jj = 0; jj < tmp2.length; jj++) {
              if(parseInt(tmp2[ii])<parseInt(tmp2[jj])){
                var tmp = tmp2[ii];
                tmp2[ii]=tmp2[jj];
                tmp2[jj]=tmp;
              }
            }
          }

          tmp2.forEach((month) => {
            tab2.innerHTML += `<td colspan='5' style='border-right: 1px solid #000; border-left: 1px solid #000; border-bottom: 1px solid #000; width: 200px;'>${
              months[parseInt(month) - 1]
            }</td>`;
            tab1.innerHTML += `<td style='border: 0;padding: 0; width: 40px;height: 459px;'> <a style='transform: rotate(270deg);transform-origin: left top 0;float: right; position:absolute;'>Newly Job Placed (a)</a></td>
                              <td style='border: 0;padding: 0; width: 40px;height: 459px;'><a style='transform: rotate(270deg);transform-origin: left top 0;float: right; position:absolute;'>Ongoing Job Placement (b)</a></td>
                              <td style='border: 0;padding: 0; width: 40px;height: 459px;'><a style='transform: rotate(270deg);transform-origin: left top 0;float: right; position:absolute;'>Total Caseload (c)</a></td>
                              <td style='border: 0;padding: 0; width: 40px;height: 459px;'><a style='transform: rotate(270deg);transform-origin: left top 0;float: right; position:absolute;'>Total Dismissed (d)</a></td>
                              <td style='border: 0;padding: 0; width: 40px;height: 459px;'class='fifth-td'><a style='transform: rotate(270deg);transform-origin: left top 0;float: right; position:absolute;'>KPI (%)</a></td>`;
          });

          if (response.data.code == 200) {
            setTimeout(() => {
              this.$refs.result.classList.remove("hide");
              var pdf = new jsPDF();

              var HTML_Width = $("#result").width();
              var HTML_Height = $("#result").height();
              var top_left_margin = 15;
              var PDF_Width = HTML_Width + top_left_margin * 2;
              var PDF_Height = PDF_Width * 1.5 + top_left_margin * 2;
              var canvas_image_width = HTML_Width;
              var canvas_image_height = HTML_Height;

              var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;

              html2canvas($("#result")[0], { allowTaint: true }).then(function (
                canvas
              ) {
                canvas.getContext("2d");

                console.log(canvas.height + "  " + canvas.width);

                var imgData = canvas.toDataURL("image/jpeg", 1.0);
                var pdf = new jsPDF("p", "pt", [PDF_Width, PDF_Height]);
                pdf.addImage(
                  imgData,
                  "JPG",
                  top_left_margin,
                  top_left_margin,
                  canvas_image_width,
                  canvas_image_height
                );

                for (var i = 1; i <= totalPDFPages; i++) {
                  pdf.addPage(PDF_Width, PDF_Height);
                  pdf.addImage(
                    imgData,
                    "JPG",
                    top_left_margin,
                    -(PDF_Height * i) + top_left_margin * 4,
                    canvas_image_width,
                    canvas_image_height
                  );
                }

                pdf.save("Nation_Kpi.pdf");
              });
              // pdf.addHTML($("#result")[0], function () {
              //   pdf.save("Nation_Kpi.pdf");
              // });
            }, 100);
            setTimeout(() => {
              this.$refs.result.classList.add("hide");
            }, 1000);
          } else {
            this.error = "No Record Found";
          }
        } catch (e) {}
      }
    },
    startDownload(){
        this.loader = true;
    },
    finishDownload(){
        this.loader = false;
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
            "report/kpi",
            {
              added_by: this.userdetails.user.id,
              fromDate: this.fromDate,
              toDate: this.toDate,
              job_status: this.job_status,
              report_type: "excel",
            },
            { headers }
          );
          console.log("my report", response.data);
          if (response.data.code == 200) {
            if (response.data.filepath) {
              window.open(response.data.filepath, "_blank");
            } else {
              this.error = "No Record Found";
            }
          } else {
            this.error = "No Record Found";
          }
        } catch (e) {}
      }
    },
  },
};
</script>
