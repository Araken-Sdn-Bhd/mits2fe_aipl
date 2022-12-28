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
                        <label class="form-label">Year:</label>
                        <select class="form-select" v-model="year">
                        <option v-for="year in getCurrentYear()" v-if="year>=1970" :value="year">{{ year }}</option>
                      </select>
                      </div>
                    </div>
                  </div>
                  <!--- row -->
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="mb-3">
                        <label class="form-label">Period Of Services<small style="color:red">*</small>:</label>
                        <select class="form-select" v-model="fromMonth">
                          <option value="" selected="selected">Please Select</option>
                        <option v-for="m in months.month">{{ m }}</option>
                      </select>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="mb-3">
                        <label class="form-label">To<small style="color:red">*</small>:</label>
                        <select class="form-select" v-model="toMonth">
                          <option value="" selected="selected">Please Select</option>
                        <option v-for="m in months.month">{{ m }}</option>
                      </select>
                      </div>
                    </div>
                  </div>
                  <!-- row -->
                  <div class="row">

                    <!-- <div v-if="(user_role=='superadmin')" class="col-sm-6"> comment out for testing and developing purposes -->
                      <div  class="col-sm-6">
                      <div class="mb-3">
                        <label class="form-label">Level of Report:</label>
                        <select class="form-select" v-model="level_report" @change="OnchangeLeveofReport($event)">
                          <option value="" selected="selected">Please Select</option>
                          <option value="National">National</option>
                          <option value="State">State</option>
                          <option value="Hospital">Hospital</option>
                        </select>
                      </div>


                    </div>

                    

                  <div class="col-sm-6">
                    <div class="mb-3 mentari selected-box">
                      <div v-if="this.level_report == 'Hospital'" style = "position:relative; top:30px;">
                        <select 
                          class="form-select select-others"
                          v-model="hospital"
                        >
                          <option value="" selected="selected">Please Select Hospital</option>
                          <option
                            v-for="brn in BranchList"
                            v-bind:key="brn.id"
                            v-bind:value="brn.id"
                          >
                            {{ brn.hospital_branch_name }}
                          </option>
                        </select>
                      </div>

                      <div v-if="this.level_report == 'State'" style = "position:relative; top:30px;">
                        <select
                          class="form-select select-others"
                          v-model="state"
                        >
                          <option value="" selected="selected">Please Select State</option>
                          <option
                          v-for="state in StateList"
                          v-bind:key="state.id"
                          v-bind:value="state.id">
                          
                          {{ state.state_name }}
                          </option>
                        </select>
                      </div>
                      </div>   
                    </div>
                  </div>
                  <!-- row -->
                  <Error :message="error" v-if="error" />
               <p v-if="errorList.length">
                          <ul>
                           <li style="color:red"  v-for='err in errorList' :key='err' >
                           {{ err }}
                             </li>
                        </ul>
                       </p>

                  <div class="btn-width d-flex">
                    <div class="ml-auto">
                      <a @click="Ongeneratepdf" class="btn btn-danger btn-text"
                        ><i class="fa fa-file-pdf"></i> Generate PDF</a
                      >
                      <a
                        @click="Ongenerateexel"
                        class="btn btn-success btn-text"
                        ><i class="fa fa-file-excel"></i> Generate Excel</a
                      >

                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div id="result" class="hide" ref="result" style="background: #fff">
            <h4>NATIONAL KPI REPORT</h4>
            <div class="legend">
              <div class="legend1">
                <ul id="legend-order">
                  <li>(c) = Total Caseload</li>
                  <li>(d) = Total Dismissed</li>
                </ul>
              </div>

            <div class="legend2">
                <ul id="legend-order">
                  <li>(a) = Newly Job Placed</li>
                  <li>(b) = Ongoing Job Placement</li>
                </ul>
            </div>
            </div>


      <table>
        <tbody>
          <tr>
            <td rowspan="4">BIL</td>
            <td rowspan="4" colspan="3">MENTARI</td>
          
          <tr>
            <td colspan="60" > YEAR {{ yearResult }} </td>
            
          </tr>
          <tr v-for="(rp, index) in averageResult" 
              v-bind:key="index"           
          >
  
            <td v-if="rp[1]!=NULL" colspan="5">January</td>
            <td v-if="rp[2]!=NULL" colspan="5">February</td>
            <td v-if="rp[3]!=NULL" colspan="5">March</td>
            <td v-if="rp[4]!=NULL" colspan="5">April</td>
            <td v-if="rp[5]!=NULL" colspan="5">May</td>
            <td v-if="rp[6]!=NULL" colspan="5">June</td>
            <td v-if="rp[7]!=NULL" colspan="5">July</td>
            <td v-if="rp[8]!=NULL" colspan="5">August</td>
            <td v-if="rp[9]!=NULL" colspan="5">September</td>
            <td v-if="rp[10]!=NULL" colspan="5">October</td>
            <td v-if="rp[11]!=NULL" colspan="5">November</td>
            <td v-if="rp[12]!=NULL" colspan="5">December</td>
          </tr>
          <tr
          v-for="(rp, index) in averageResult" 
          v-bind:key="index" >
            <td v-if="rp[1]!=NULL">(a)</td><!--JAN-->
            <td v-if="rp[1]!=NULL">(b)</td>
            <td v-if="rp[1]!=NULL">(c)</td>
            <td v-if="rp[1]!=NULL">(d)</td>
            <td v-if="rp[1]!=NULL">KPI (%)</td>     

            <td v-if="rp[2]!=NULL">(a)</td><!--FEB-->
            <td v-if="rp[2]!=NULL">(b)</td>
            <td v-if="rp[2]!=NULL">(c)</td>
            <td v-if="rp[2]!=NULL">(d)</td>
            <td v-if="rp[2]!=NULL">KPI (%)</td>       

            <td v-if="rp[3]!=NULL">(a)</td><!--MAC-->
            <td v-if="rp[3]!=NULL">(b)</td>
            <td v-if="rp[3]!=NULL">(c)</td>
            <td v-if="rp[3]!=NULL">(d)</td>
            <td v-if="rp[3]!=NULL">KPI (%)</td>            

            <td v-if="rp[4]!=NULL">(a)</td><!--APR-->
            <td v-if="rp[4]!=NULL">(b)</td>
            <td v-if="rp[4]!=NULL">(c)</td>
            <td v-if="rp[4]!=NULL">(d)</td>
            <td v-if="rp[4]!=NULL">KPI (%)</td>            

            <td v-if="rp[5]!=NULL">(a)</td><!--MAY-->
            <td v-if="rp[5]!=NULL">(b)</td>
            <td v-if="rp[5]!=NULL">(c)</td>
            <td v-if="rp[5]!=NULL">(d)</td>
            <td v-if="rp[5]!=NULL">KPI (%)</td> 

            <td v-if="rp[6]!=NULL">(a)</td><!--JUN-->
            <td v-if="rp[6]!=NULL">(b)</td>
            <td v-if="rp[6]!=NULL">(c)</td>
            <td v-if="rp[6]!=NULL">(d)</td>
            <td v-if="rp[6]!=NULL">KPI (%)</td>  

            <td v-if="rp[7]!=NULL">(a)</td><!--JUL-->
            <td v-if="rp[7]!=NULL">(b)</td>
            <td v-if="rp[7]!=NULL">(c)</td>
            <td v-if="rp[7]!=NULL">(d)</td>
            <td v-if="rp[7]!=NULL">KPI (%)</td> 

            <td v-if="rp[8]!=NULL">(a)</td><!--AUG-->
            <td v-if="rp[8]!=NULL">(b)</td>
            <td v-if="rp[8]!=NULL">(c)</td>
            <td v-if="rp[8]!=NULL">(d)</td>
            <td v-if="rp[8]!=NULL">KPI (%)</td>

            <td v-if="rp[9]!=NULL">(a)</td><!--SEP-->
            <td v-if="rp[9]!=NULL">(b)</td>
            <td v-if="rp[9]!=NULL">(c)</td>
            <td v-if="rp[9]!=NULL">(d)</td>
            <td v-if="rp[9]!=NULL">KPI (%)</td>         

            <td v-if="rp[10]!=NULL">(a)</td><!--OCT-->
            <td v-if="rp[10]!=NULL">(b)</td>
            <td v-if="rp[10]!=NULL">(c)</td>
            <td v-if="rp[10]!=NULL">(d)</td>
            <td v-if="rp[10]!=NULL">KPI (%)</td>     

            <td v-if="rp[11]!=NULL">(a)</td><!--NOV-->
            <td v-if="rp[11]!=NULL">(b)</td>
            <td v-if="rp[11]!=NULL">(c)</td>
            <td v-if="rp[11]!=NULL">(d)</td>
            <td v-if="rp[11]!=NULL">KPI (%)</td>

            <td v-if="rp[12]!=NULL">(a)</td><!--DEC-->
            <td v-if="rp[12]!=NULL">(b)</td>
            <td v-if="rp[12]!=NULL">(c)</td>
            <td v-if="rp[12]!=NULL">(d)</td>
            <td v-if="rp[12]!=NULL">KPI (%)</td>         
          </tr>  
      
</tr>                   

          <tr class="tr-box" v-for="(rp, index) in result" :key="index">
            <td colspan="1" class="tdrow"> </td>
            <td colspan="3" class="tdrow" >{{ rp.group_name}} </td> <!-- Nama Mentari -->
            <!-- <td class="tdrow">list[rp]['below_10']['male']</td>
            <td class="tdrow">list[rp]['below_10']['female']</td>
            <td class="tdrow">list[rp]["10-19"]['male']</td>
            <td class="tdrow">list[rp]["10-19"]['female']</td>
            <td class="tdrow">list[rp]["10-19"]['female']</td> -->
<!-- 
            <td class="tdrow">list[rp]['below_10']['male']</td>
            <td class="tdrow">list[rp]['below_10']['female']</td>
            <td class="tdrow">list[rp]["10-19"]['male']</td>
            <td class="tdrow">list[rp]["10-19"]['female']</td>
            <td class="tdrow">list[rp]["10-19"]['female']</td>

            <td class="tdrow">list[rp]['below_10']['male']</td>
            <td class="tdrow">list[rp]['below_10']['female']</td>
            <td class="tdrow">list[rp]["10-19"]['male']</td>
            <td class="tdrow">list[rp]["10-19"]['female']</td>
            <td class="tdrow">list[rp]["10-19"]['female']</td>

            <td class="tdrow">list[rp]['below_10']['male']</td>
            <td class="tdrow">list[rp]['below_10']['female']</td>
            <td class="tdrow">list[rp]["10-19"]['male']</td>
            <td class="tdrow">list[rp]["10-19"]['female']</td>
            <td class="tdrow">list[rp]["10-19"]['female']</td>

            <td class="tdrow">list[rp]['below_10']['male']</td>
            <td class="tdrow">list[rp]['below_10']['female']</td>
            <td class="tdrow">list[rp]["10-19"]['male']</td>
            <td class="tdrow">list[rp]["10-19"]['female']</td>
            <td class="tdrow">list[rp]["10-19"]['female']</td>

            <td class="tdrow">list[rp]['below_10']['male']</td>
            <td class="tdrow">list[rp]['below_10']['female']</td>
            <td class="tdrow">list[rp]["10-19"]['male']</td>
            <td class="tdrow">list[rp]["10-19"]['female']</td>
            <td class="tdrow">list[rp]["10-19"]['female']</td>

            <td class="tdrow">list[rp]['below_10']['male']</td>
            <td class="tdrow">list[rp]['below_10']['female']</td>
            <td class="tdrow">list[rp]["10-19"]['male']</td>
            <td class="tdrow">list[rp]["10-19"]['female']</td>
            <td class="tdrow">list[rp]["10-19"]['female']</td>

            <td class="tdrow">list[rp]['below_10']['male']</td>
            <td class="tdrow">list[rp]['below_10']['female']</td>
            <td class="tdrow">list[rp]["10-19"]['male']</td>
            <td class="tdrow">list[rp]["10-19"]['female']</td>
            <td class="tdrow">list[rp]["10-19"]['female']</td>

            <td class="tdrow">list[rp]['below_10']['male']</td>
            <td class="tdrow">list[rp]['below_10']['female']</td>
            <td class="tdrow">list[rp]["10-19"]['male']</td>
            <td class="tdrow">list[rp]["10-19"]['female']</td>
            <td class="tdrow">list[rp]["10-19"]['female']</td>

            <td class="tdrow">list[rp]['below_10']['male']</td>
            <td class="tdrow">list[rp]['below_10']['female']</td>
            <td class="tdrow">list[rp]["10-19"]['male']</td>
            <td class="tdrow">list[rp]["10-19"]['female']</td>
            <td class="tdrow">list[rp]["10-19"]['female']</td>

            <td class="tdrow">list[rp]['below_10']['male']</td>
            <td class="tdrow">list[rp]['below_10']['female']</td>
            <td class="tdrow">list[rp]["10-19"]['male']</td>
            <td class="tdrow">list[rp]["10-19"]['female']</td>
            <td class="tdrow">list[rp]["10-19"]['female']</td>

            <td class="tdrow">list[rp]['below_10']['male']</td>
            <td class="tdrow">list[rp]['below_10']['female']</td>
            <td class="tdrow">list[rp]["10-19"]['male']</td>
            <td class="tdrow">list[rp]["10-19"]['female']</td>
            <td class="tdrow">list[rp]["10-19"]['female']</td> -->
          </tr>
          
          

           <!-- <tr>
            <td colspan="8">Average(%)</td>
            <td class="tdrow">{{ this.totalReport }}</td>

            <td colspan="4">Average(%)</td>
            <td class="tdrow">{{ this.totalReport }}</td>

            <td colspan="4">Average(%)</td>
            <td class="tdrow">{{ this.totalReport }}</td>

            <td colspan="4">Average(%)</td>
            <td class="tdrow">{{ this.totalReport }}</td>

            <td colspan="4">Average(%)</td>
            <td class="tdrow">{{ this.totalReport }}</td>

            <td colspan="4">Average(%)</td>
            <td class="tdrow">{{ this.totalReport }}</td>

            <td colspan="4">Average(%)</td>
            <td class="tdrow">{{ this.totalReport }}</td>

            <td colspan="4">Average(%)</td>
            <td class="tdrow">{{ this.totalReport }}</td>

            <td colspan="4">Average(%)</td>
            <td class="tdrow">{{ this.totalReport }}</td>

            <td colspan="4">Average(%)</td>
            <td class="tdrow">{{ this.totalReport }}</td>

            <td colspan="4">Average(%)</td>
            <td class="tdrow">{{ this.totalReport }}</td>

            <td colspan="4">Average(%)</td>
            <td class="tdrow">{{ this.totalReport }}</td>

          </tr>   -->
        </tbody>
      </table>
      <label>Date Generated: {{ this.dateGenerated }}</label>
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
.legend{
  width:fit-content;
  float: right;
  border:1px solid #000;
  text-align: left;
  margin-bottom: 10px;
  padding-left:10px;
  padding-right:10px;
  padding-top: 10px;
}
.legend1{
  width:fit-content;
  float: right;
  border:0px solid #000;
  text-align: left;
  padding-left:10px;
}

.legend2{
  width:fit-content;
  float: right;
  border:0px solid #000;
  text-align: left;
  padding-left:10px;
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

      header:"",
      userdetails: null,
      fromMonth: "", //2022-04-12
      toMonth: "", //2022-08-30
      error: null,
      listKey: [],
      list: {},
      errorList: [],
      BranchList: [],
      agelist: [],
      genderlist: [],
      racelist: [],
      ReportList:[],
      StateList: [],
      state:'',
      user_role:'',
      Gender: "",
      Age: "",
      result:[], 
      averageResult:[],
      yearResult:"", 
      race_id: "",
      level_report:"",
      hospital:"",
      SidebarAccess:null,
      year:new Date().getFullYear(),
       months:{
        month:["January","February","March","April","May","June","July","August","September","October","November","December"],
              },
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.SidebarAccess = JSON.parse(localStorage.getItem("SidebarAccess"));
    this.GetList();
    this.getRole();
  },
  methods: {

    getCurrentYear() {
      return new Date().getFullYear();
    },

    async getRole() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "staff-management/getRoleCode",
        { email: this.userdetails.user.email },
        {
          headers,
        }
      );
      if(response.data.code == 200 || response.data.code == "200"){

      this.user_role=response.data.list.code; 

      }

    },
    async GetList() {
      try {
        this.loader = true;
        const headers = {
          Authorization: "Bearer " + this.token,
          Accept: "application/json",
          "Content-Type": "application/json",
        };
        const response2 = await this.$axios.get("hospital/branch-list", {
          headers,
        });
        if (response2.data.code == 200 || response2.data.code == "200") {
          this.BranchList = response2.data.list;
        } else {
          this.BranchList = [];
        }
        const response = await this.$axios.get("address/list", {
        headers,
      });
      if (response.data.code == 200 || response.data.code == "200") {
        this.StateList = response.data.list;
      } else {
        this.StateList = [];
      }
        this.loader = false;
      } catch (e) {
        console.log("my error", e);
      }
    },

    async Ongeneratepdf() {
      this.errorList = [];
      this.error = null;
      if (!this.fromMonth) {
        this.errorList.push("From date is Required!");
      }
      if (!this.toMonth) {
        this.errorList.push("To date is Required!");
      }
      if (this.fromMonth && this.toMonth) {
        try {
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          const response = await this.$axios.post(
            "report/kpi",
            {
              user_role: this.userdetails.user.id,
              email: this.userdetails.user.email,
              branch_id: this.userdetails.branch.branch_id,
              year: this.year,
              fromMonth: this.fromMonth,
              toMonth: this.toMonth,
              hospital: this.hospital,
              state: this.state,
              level_report: this.level_report,
              report_type: "pdf",
            },
            { headers }
          );

          if (response.data.code == 200) {
            this.result = response.data.result;
            this.averageResult= response.data.averageResult;
            this.yearResult = response.data.year;
            // this.listKey = Object.keys(this.averageResult);
            
              setTimeout(() => {
                this.$refs.result.classList.remove("hide");
                var pdf = new jsPDF("l", "pt", "a4");
                pdf.addHTML($("#result")[0], function () {
                  pdf.save("NationalKPI_Report.pdf");
                });
              }, 100);
              setTimeout(() => {
                this.$refs.result.classList.add("hide");
              }, 100);
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

    OnchangeLeveofReport(event) {
      if (event.target.options[event.target.options.selectedIndex].text == "National"){
        this.hospital = '';
        this.state = '';

      }else if(event.target.options[event.target.options.selectedIndex].text == "State"){
        this.hospital = '';
      }
      else if(event.target.options[event.target.options.selectedIndex].text == "Hospital"){
        this.state = '';
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
      if (!this.fromMonth) {
        this.errorList.push("From date is Required!");
      }
      if (!this.toMonth) {
        this.errorList.push("To date is Required!");
      }
      if (this.fromMonth && this.toMonth) {
        try {
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          const response = await this.$axios.post(
            "report/kpi",
            {
              user_role: this.userdetails.user.id,
              email: this.userdetails.user.email,
              branch_id: this.userdetails.branch.branch_id,
              year: this.year,
              fromMonth: this.fromMonth,
              toMonth: this.toMonth,
              hospital: this.hospital,
              state: this.state,
              level_report: this.level_report,
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
  },
};
</script>
