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
                <h4>Patient By Age/gender & Ethnic Group</h4>
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
                        <label class="form-label">Range of Age:</label>
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
                        <label class="form-label">Gender:</label>
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

                  <div class="row">
                    <div class="col-sm-6">
                      <div class="mb-3">
                        <label class="form-label">Ethnic Group:</label>
                        <select class="form-select" v-model="race_id">
                          <option value="">Please Select</option>
                          <option
                            v-for="rfl in racelist"
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
                  <Error :message="error" v-if="error" />
               <p v-if="errorList.length">
                          <ul>
                           <li style="color:red"  v-for='err in errorList' :key='err' >
                           {{ err }}
                             </li>
                        </ul>
                       </p>

                  <div class="btn-width d-flex">
                    <div class="ml-auto" :class="SidebarAccess!=1?'hide1':''">
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
        </main>
      </div>
    </div>
    <div id="result" class="hide" ref="result" style="background: #fff">
      <table>
        <tbody>
          <tr>
            <td rowspan="3">Ethnic Group</td>
            <td colspan="11">TOTAL ATTENDANCE</td>
          </tr>
          <tr>
            <td colspan="2">&lt; 10 years</td>
            <td colspan="2">10-19 years</td>
            <td colspan="2">20-59 years</td>
            <td colspan="2">&gt;=60 years</td>
            <td colspan="2">Total by Gender</td>
            <td rowspan="2">Total by Race</td>
          </tr>
          <tr class="male-female">
            <td>Male</td>
            <td>Female</td>
            <td>Male</td>
            <td>Female</td>
            <td>Male</td>
            <td>Female</td>
            <td>Male</td>
            <td>Female</td>
            <td>Male</td>
            <td>Female</td>
          </tr>


          <tr class="tr-box" v-for="(rp, index) in listKey" :key="index">
            <td>{{rp}}</td>
            <td class="tdrow">{{list[rp]['below_10']['male']}}</td>
            <td class="tdrow">{{list[rp]['below_10']['female']}}</td>
            <td class="tdrow">{{list[rp]["10-19"]['male']}}</td>
            <td class="tdrow">{{list[rp]["10-19"]['female']}}</td>
            <td class="tdrow">{{list[rp]["20-59"]['male']}}</td>
            <td class="tdrow">{{list[rp]["20-59"]['female']}}</td>
            <td class="tdrow">{{list[rp]["greater_60"]['male']}}</td>
            <td class="tdrow">{{list[rp]["greater_60"]['female']}}</td>
            <td class="tdrow">{{list[rp]["total"]['male']}}</td>
            <td class="tdrow">{{list[rp]["total"]['female']}}</td>
             <td class="tdrow">{{list[rp]["jumlah_besar"]}}</td>

          </tr>
          <tr>
            <td colspan="11">Total</td>
            <td>{{ this.totalReport }}</td>
          </tr>

        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import CommonHeader from "../../../components/CommonHeader.vue";
import CommonSidebar from "../../../components/CommonSidebar.vue";
import Vue from "vue";
import downloadexcel from "vue-json-excel";
import JsonExcel from "vue-json-excel";

export default {
  components: { CommonSidebar, CommonHeader },

  name: "sharp",
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
      userdetails: null,
      fromDate: "",
      toDate: "",
      error: null,
      listKey:[],
      errorList: [],
      list: {},
      agelist: [],
      genderlist: [],
      racelist: [],
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
            "report/getPatientByAgeReport",
            {
              added_by: this.userdetails.user.id,
              fromDate: this.fromDate,
              toDate: this.toDate,
              gender: this.Gender,
              race: this.race_id,
              age: this.Age,
              report_type: "pdf",
            },
            { headers }
          );
          console.log("my report", response.data);
          if (response.data.code == 200) {

            if (response.data.result.length>0) {
            this.list = response.data.result[0]['group_name'];
            this.totalReport= response.data.totalReport;
            this.listKey = Object.keys(this.list);
            console.log("my list", this.list);
            console.log("my listKey", this.listKey);


              setTimeout(() => {
                this.$refs.result.classList.remove("hide");
                var pdf = new jsPDF("p", "pt", "a4");
                pdf.addHTML($("#result")[0], function () {
                  pdf.save("Patient_Age.pdf");
                });
              }, 100);
              setTimeout(() => {
                this.$refs.result.classList.add("hide");
              }, 100);
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
            "report/getPatientByAgeReport",
            {
              added_by: this.userdetails.user.id,
              fromDate: this.fromDate,
              toDate: this.toDate,
              gender: this.Gender,
              race: this.race_id,
              age: this.Age,
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
<style scoped>
.tdrow {
  padding: 5px 10px;
  border: 1px solid #000;
  font-size: 13px;
  font-weight: 600;
}
.thhead {
  background: #ddd;
  padding: 5px 10px;
  border: 1px solid #000;
  text-transform: uppercase;
  font-size: 13px;
}
.table {
  border: 1px solid rgb(0, 0, 0);
  width: 100%;
  margin-top: 50px;
}
.tabhead {
  background: #ddd;
  padding: 5px 10px;
  border: 1px solid #000;
  text-transform: uppercase;
  font-size: 13px;
}
.tabtd {
  padding: 5px 10px;
  border: 1px solid #000;
  font-size: 13px;
  font-weight: 600;
}
  table td{
    border: 1px solid #000;
    padding: 5px;
    opacity: 0.8;
    font-weight: 500;
  }
  table{
    width: 100%;
    border-spacing: 0;
    border: 1px solid #000;
    text-align: center;
  }
.tr-box td:first-child {
    text-align: left;
}
.last-tr td{
  font-weight: 600;
  opacity: 1
}
.hide1 {
  background: #fff;
  display: none;
}
div#result {
  padding: 35px;
}
</style>
