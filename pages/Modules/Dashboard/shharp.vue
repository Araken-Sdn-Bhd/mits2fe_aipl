<template>
    <div id="layoutSidenav">
      <CommonSidebar />
      <div id="layoutSidenav_content">
        <CommonHeader />
        <main>
          <div class="container-fluid px-4 dashboard">
            <div class="page-title dashboard-title">
              <h1>SHHARP</h1>
              <div class="input-group dashboard-search">
                <span class="input-group-text" id="basic-addon1" type="button" v-on:click="SearchPatient"
                  ><i class="fa fa-search"></i
                ></span>
                <input
                  type="text"
                  v-model="search"
                  class="form-control"
                  placeholder="Search By Name/NRIC/Passport"
                />
              </div>
            </div>

            <div class="row">
                <div class="card mt-4 mb-3">
                  <div class="row fliter-box">
                    <div class="col-sm-3">
                      <select
                        class="form-select"
                        v-model="sharpyear"
                        @change="Getrecord"
                      >
                        <option value="0">Select Year</option>
                        <option
                          v-for="fee in yearslist"
                          v-bind:key="fee.years"
                          v-bind:value="fee.years"
                        >
                          {{ fee.years }}
                        </option>
                      </select>
                    </div>
                    <div class="col-sm-3">
                      <select
                        class="form-select"
                        v-model="sharpmonth"
                        @change="Getrecord"
                      >
                        <option value="0">Select Month</option>
                        <option
                          v-for="fee in monthlist"
                          v-bind:key="fee.id"
                          v-bind:value="fee.id"
                        >
                          {{ fee.months }}
                        </option>
                      </select>
                    </div>
                    <div class="col-sm-3">
                      <select
                        class="form-select"
                        v-model="sharpmentari"
                        @change="Getrecord"
                      >
                        <option value="0">Select MENTARI</option>
                        <option
                          v-for="fee in branchincludinghospitallist"
                          v-bind:key="fee.id"
                          v-bind:value="fee.id"
                        >
                          {{ fee.hospital_branch_name }}
                        </option>
                      </select>
                    </div>
                    <div class="col-sm-3">
                      <select
                        class="form-select"
                        v-model="sharprace"
                        @change="Getrecord"
                      >
                        <option value="0">Select Type</option>
                        <option>Race</option>
                        <option>Range of Age</option>
                        <option>Gender</option>
                        <!-- <option>Method of Self harm</option> -->
                        <option>Religion</option>
                        <option>Marital Status</option>
                        <option>Education</option>
                        <option>Employment Status</option>
                      </select>
                    </div>
                  </div>
                  <div class="row mt-1 align-items-center">
                    <div class="col-sm-4">
                      <div class="text-box">
                        <h4>TOTAL CASELOAD</h4>
                        <h1>{{ sharp_total_caseload }}</h1>
                      </div>
                    </div>
                    <div class="col-sm-8">
                      <div class="chart-box">
                        <canvas
                          id="myChartsharp"
                          style="width: 100%; max-width: 600px"
                        ></canvas>
                        <div id="bar-chart"></div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
  
            <div class="row">
                <div class="card mt-4 mb-3">
                  <div class="card-header dashboard-header">
                    <h4>ANNOUNCEMENT:</h4>
                  </div>
                  <table class="announcement-table">
                    <tbody>
                      <tr>
                        <div
                          v-if="index < list.length"
                          v-for="(ann, index) in AnnouncmentToShow"
                          :key="index"
                        >
                          <td>
                            <span class="number">{{ index + 1 }}</span>
                          </td>
                          <td>
                            <a
                              v-bind:href="
                                '/Modules/Admin/view-event?id=' + list[ann - 1].id
                              "
                              >{{ list[ann - 1].title }} ({{
                                getFormattedDate(list[ann - 1].start_date)
                              }})</a
                            >
                          </td>
                        </div>
                        <div
                          v-if="
                            AnnouncmentToShow < list.length ||
                            list.length > AnnouncmentToShow
                          "
                        >
                          <button
                            class="btn btn-primary btn-text btn-seeall"
                            @click="AnnouncmentToShow += 5"
                          >
                            Show More
                          </button>
                        </div>
                      </tr>
                    </tbody>
                  </table>
                </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </template>
  <script>
  import moment from 'moment';
  import CommonHeader from "../../../components/CommonHeader.vue";
  import CommonSidebar from "../../../components/CommonSidebar.vue";
  
  export default {
    components: { CommonSidebar, CommonHeader },
    name: "high-level-management",
    head: {
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js",
          body: true,
          crossorigin: "anonymous",
        },
      ],
    },
    data() {
      return {
        userdetails: null,
        tmpyear: 0,
        tmpmonth: 0,
  
        taryear: 0,
        tarmonth: 0,
        tarmentari: 0,
        branch_stateid: 0,
  
        scryear: 0,
        scrmonth: 0,
        scrmentari: 0,
  
        kpiyear: 0,
        kpimonth: 0,
        kpimentari: 0,
  
        sharpyear: 0,
        sharpmonth: 0,
        sharpmentari: 0,
  
        total_appointment_request: 0,
        total_mentari: 0,
        state_name: 0,
        state_name: 0,
        total_case: 0,
        report_year: 0,
        report_month: 0,
        totalpatient: "",
        totalmentarilocation: "",
        sharp_total_caseload: "",
        kpi_total_caseload: "",
        sharprace: "",
        yearslist: [],
        monthlist: [
          {
            id: 1,
            months: "January",
          },
          {
            id: 2,
            months: "February",
          },
          {
            id: 3,
            months: "March",
          },
          {
            id: 4,
            months: "April",
          },
          {
            id: 5,
            months: "May",
          },
          {
            id: 6,
            months: "June",
          },
          {
            id: 7,
            months: "July",
          },
          {
            id: 8,
            months: "August",
          },
          {
            id: 9,
            months: "September",
          },
          {
            id: 10,
            months: "October",
          },
          {
            id: 11,
            months: "November",
          },
          {
            id: 12,
            months: "December",
          },
        ],
        hospitallist: [],
        branchlist: [],
        branchincludinghospitallist: [],
        list: [],
        kpiEmployement: "",
        kpiUnemployement: "",
        kpiTerminated: "",
        summaryActivity: "",
        diagnosisf0: "",
        diagnosisf1: "",
        diagnosisf2: "",
        diagnosisf3: "",
        diagnosisf4: "",
        diagnosisf5: "",
        diagnosisf6: "",
        diagnosisf7: "",
        diagnosisf8: "",
        diagnosisf9: "",
        diagnosisf10: "",
        diagnosisf11: "",
        service_name_list: [],
        service_color_list: [],
        service_patient_list: [],
        StateList: [],
        sharp_total_caseloadfemale: 0,
        sharp_total_caseloadmale: 0,
        sharpracetotal: "",
        shharpRaces: [],
        rangeOfAge: [],
        shharpGender: [],
        shharpReligions: [],
        shharpMaritals: [],
        shharpEducation: [],
        shharpEmployment: [],
        sharp_name_list: [],
        sharp_color_list: [],
        sharp_count_list: [],
        race_name_list: [],
        religion_name_list: [],
        marital_name_list: [],
        education_name_list: [],
        employment_name_list: [],
        sharp_gender_list: [],
        sharp_total_by_race: [],
        sharp_total_by_religion: [],
        sharp_total_by_marital: [],
        sharp_total_by_education: [],
        sharp_total_by_employment: [],
        sharp_total_by_gender: [],
        by_age_list: [],
        sharp_total_by_age: [],
        AnnouncmentToShow: 3,
        myChart: "",
        kpiChart: "",
        shharpChart: "",
        diagnosisChart:"",
        search:"",
        dataReady: false,
        branch_id: 0,
      };
    },
  
    beforeMount() {
      this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
      if(this.userdetails){
        this.sharpmentari = this.userdetails.branch.branch_id;
        this.sharprace = "Range of Age";
      };
      this.GetYears();
      this.GetMentariList();
      this.GetMentariIncludingHospitalList();
      this.Getannouncement();
      this.GetStateList();
      this.GetCurrentYears();
      this.GetCurrentMonths();
      this.Getrecord();
    },
    mounted() {
      this.Getrecord();
    },
  
    methods: {
      async Getrecord() {
        try {
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          const response = await this.$axios.post(
            "high-level-mgt/get",
            {
              tmpyear: this.tmpyear,
              tmpmonth: this.tmpmonth,
  
              taryear: this.taryear,
              tarmonth: this.tarmonth,
              tarmentari: this.tarmentari,
              tarmentari: this.tarmentari,
              branch_stateid: this.branch_stateid,
  
              scryear: this.scryear,
              scrmonth: this.scrmonth,
              scrmentari: this.scrmentari,
  
              kpiyear: this.kpiyear,
              kpimonth: this.kpimonth,
              kpimentari: this.kpimentari,
  
              sharpyear: this.sharpyear,
              sharpmonth: this.sharpmonth,
              sharpmentari: this.sharpmentari,
              sharprace: this.sharprace,
            },
            {
              headers,
            }
          );
  
          console.log("my res", response.data);
          if (response.data.code == 200) {
            this.total_mentari = response.data.TotalMintari[0].TotalMentari;
            this.total_appointment_request =
              response.data.TotalAppoitment[0].total_appointments_request;
            this.totalpatient = response.data.totalpatient[0].TotalPatient;
            this.totalmentarilocation =
              response.data.totalmentarilocation[0].TotalMentariLocation;
            this.sharp_total_caseload = 0;
            this.sharp_total_caseload = response.data.totalsharp.length;
  
            this.kpi_total_caseload = response.data.kpi[0].kpiTotalCaseLoad;
  
            this.kpiEmployement = 0;
            this.kpiUnemployement = 0;
            this.kpiTerminated = 0;
            this.kpiEmployement = response.data.kpiEmployement[0].employed;
            this.kpiUnemployement = response.data.kpiUnemployement[0].unemployed;
            this.kpiTerminated = response.data.kpiTerminated[0].terminate;
  
            this.shharpRaces = response.data.shharpRaces;
            this.rangeOfAge = response.data.rangeOfAge;
            this.shharpReligions = response.data.shharpReligions;
            this.shharpMaritals = response.data.shharpMaritals;
            this.shharpEducation = response.data.shharpEducation;
            this.shharpEmployment = response.data.shharpEmployment;
            this.shharpGender = response.data.shharpGender;
            this.summaryActivity = response.data.summaryActivity;
            this.sharpracetotal = response.data.race;
            console.log("my sharpracetotal", this.sharpracetotal);
            console.log("my summaryActivity", this.summaryActivity);
            this.service_name_list = [];
            this.service_patient_list = [];
            this.service_color_list = [];
            this.sharp_name_list = [];
            this.sharp_count_list = [];
            this.sharp_color_list = [];
  
            this.race_name_list = [];
            this.sharp_total_by_race = [];
            this.by_age_list = [];
            this.sharp_total_by_age = [];
            this.religion_name_list = [];
            this.sharp_total_by_religion = [];
            this.sharp_gender_list = [];
            this.sharp_total_by_marital = [];
            this.education_name_list = [];
            this.sharp_total_by_education = [];
            this.employment_name_list = [];
            this.marital_name_list = [];
            this.sharp_total_by_employment = [];
            this.sharp_total_by_gender = [];
  
            this.shharpRaces.forEach((element) => {
              if (element.section_value) {
                this.race_name_list.push(element.section_value);
              }
            });
  
            this.shharpRaces.forEach((element) => {
              if (element.Sharptotal) {
                this.sharp_total_by_race.push(element.Sharptotal);
              }
            });
  
            this.shharpReligions.forEach((element) => {
              if (element.section_value) {
                this.religion_name_list.push(element.section_value);
              }
            });
  
            this.shharpReligions.forEach((element) => {
              if (element.Sharptotal) {
                this.sharp_total_by_religion.push(element.Sharptotal);
              }
            });
  
            this.shharpGender.forEach((element) => {
              if (element.section_value) {
                this.sharp_gender_list.push(element.section_value);
              }
            });
  
            this.shharpGender.forEach((element) => {
              if (element.Sharptotal) {
                this.sharp_total_by_gender.push(element.Sharptotal);
              }
            });
  
            this.shharpMaritals.forEach((element) => {
              if (element.section_value) {
                this.marital_name_list.push(element.section_value);
              }
            });
  
            this.shharpMaritals.forEach((element) => {
              if (element.Sharptotal) {
                this.sharp_total_by_marital.push(element.Sharptotal);
              }
            });
  
            this.shharpEducation.forEach((element) => {
              if (element.section_value) {
                this.education_name_list.push(element.section_value);
              }
            });
  
            this.shharpEducation.forEach((element) => {
              if (element.Sharptotal) {
                this.sharp_total_by_education.push(element.Sharptotal);
              }
            });
  
            this.shharpEmployment.forEach((element) => {
              if (element.section_value) {
                this.employment_name_list.push(element.section_value);
              }
            });
  
            this.shharpEmployment.forEach((element) => {
              if (element.Sharptotal) {
                this.sharp_total_by_employment.push(element.Sharptotal);
              }
            });
  
            this.rangeOfAge.forEach((element) => {
              if (element.section_value) {
                this.by_age_list.push(element.section_value);
              }
            });
  
            this.rangeOfAge.forEach((element) => {
              if (element.COUNT) {
                this.sharp_total_by_age.push(element.COUNT);
              }
            });
  
            this.summaryActivity.forEach((element) => {
              if (element.service_name) {
                this.service_name_list.push(element.service_name);
              }
            });
            this.summaryActivity.forEach((element) => {
              if (element.service_name) {
                this.service_patient_list.push(element.TotalPatient);
              }
            });
            this.summaryActivity.forEach((element) => {
              this.service_color_list.push(element.color);
            });
  
            if (this.sharpracetotal) {
              this.sharpracetotal.forEach((element) => {
                this.sharp_name_list.push(element.service_name);
              });
              this.sharpracetotal.forEach((element) => {
                this.sharp_count_list.push(element.cn);
              });
              this.sharpracetotal.forEach((element) => {
                this.sharp_color_list.push(element.color);
              });
            }
            console.log("my service_name_list", this.sharp_name_list);
            console.log("my service_patient_list", this.sharp_count_list);
            console.log("my service_color_list", this.sharp_color_list);
            
  
            if (this.shharpChart) {
              this.shharpChart.destroy();
              if (this.shharpGender != 0) {
                var xValues = this.sharp_gender_list;
                var yValues1 = this.sharp_total_by_gender;
                if(this.sharp_gender_list[0] == "Male"){
                  var barColors = ["#00BEFF", "pink"];
                }else{
                  var barColors = ["pink", "#00BEFF"];
                }
                
              } else if (this.shharpRaces != 0) {
                var xValues = this.race_name_list;
                var yValues1 = this.sharp_total_by_race;
                var barColors = [
                  "green",
                  "red",
                  "blue",
                  "gray",
                  "orange",
                  "brown",
                  "yellow",
                  "magenta",
                  "turquoise",
                  "purple",
                ];
              } else if (this.rangeOfAge != 0) {
                var xValues = this.by_age_list;
                var yValues1 = this.sharp_total_by_age;
                var barColors = [
                  "green",
                  "red",
                  "blue",
                  "gray",
                  "orange",
                  "brown",
                  "yellow",
                  "magenta",
                  "turquoise",
                  "purple",
                ];
              } else if (this.shharpReligions != 0) {
                var xValues = this.religion_name_list;
                var yValues1 = this.sharp_total_by_religion;
                var barColors = [
                  "green",
                  "red",
                  "blue",
                  "gray",
                  "orange",
                  "brown",
                  "yellow",
                  "magenta",
                  "turquoise",
                  "purple",
                ];
              } else if (this.shharpMaritals != 0) {
                var xValues = this.marital_name_list;
                var yValues1 = this.sharp_total_by_marital;
                var barColors = [
                  "green",
                  "red",
                  "blue",
                  "gray",
                  "orange",
                  "brown",
                  "yellow",
                  "magenta",
                  "turquoise",
                  "purple",
                ];
              } else if (this.shharpEducation != 0) {
                var xValues = this.education_name_list;
                var yValues1 = this.sharp_total_by_education;
                var barColors = [
                  "green",
                  "red",
                  "blue",
                  "gray",
                  "orange",
                  "brown",
                  "yellow",
                  "magenta",
                  "turquoise",
                  "purple",
                ];
              } else if (this.shharpEmployment != 0) {
                var xValues = this.employment_name_list;
                var yValues1 = this.sharp_total_by_employment;
                var barColors = [
                  "green",
                  "red",
                  "blue",
                  "gray",
                  "orange",
                  "brown",
                  "yellow",
                  "magenta",
                  "turquoise",
                  "purple",
                ];
              } else {
                var xValues = this.sharp_name_list;
                var yValues1 = this.sharp_count_list;
                var barColors = this.sharp_color_list;
              }
            } else {
              if (this.shharpGender != 0) {
                var xValues = this.sharp_gender_list;
                var yValues1 = this.sharp_total_by_gender;
                if(this.sharp_gender_list[0] == "Male"){
                  var barColors = ["#00BEFF", "pink"];
                }else{
                  var barColors = ["pink", "#00BEFF"];
                }
              } else if (this.shharpRaces != 0) {
                var xValues = this.race_name_list;
                var yValues1 = this.sharp_total_by_race;
                var barColors = [
                  "green",
                  "red",
                  "blue",
                  "gray",
                  "orange",
                  "brown",
                  "yellow",
                  "magenta",
                  "turquoise",
                  "purple",
                ];
              } else if (this.rangeOfAge != 0) {
                var xValues = this.by_age_list;
                var yValues1 = this.sharp_total_by_race;
                var barColors = [
                  "green",
                  "red",
                  "blue",
                  "gray",
                  "orange",
                  "brown",
                  "yellow",
                  "magenta",
                  "turquoise",
                  "purple",
                ];
              } else {
                var xValues = this.sharp_name_list;
                var yValues1 = this.sharp_count_list;
                var barColors = this.sharp_color_list;
              }
            }
            this.shharpChart = new Chart("myChartsharp", {
              type: "bar",
              data: {
                labels: xValues,
                datasets: [
                  {
                    label: "Total",
                    backgroundColor: barColors,
                    data: yValues1,
                  },
                ],
              },
              options: {
                scales: {
                  yAxes: [
                    {
                      display: true,
                      stacked: true,
                      ticks: {
                        min: 0,
                      },
                    },
                  ],
                },
              },
            });
          } else {
            this.$swal.fire({
                    icon: 'error',
                    title: 'Oops... Something Went Wrong!',
                    text: 'the error is: ' + this.error,
                    footer: ''
                  });
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
      async GetCurrentYears() {
        function getCurrentYear(){
          return new Date().getFullYear();
        }
        const currentYear = getCurrentYear();
        this.sharpyear = currentYear;
      },
      async GetCurrentMonths() {
        function getCurrentMonth(){
          return new Date().getMonth();
        }
        const currentMonth = getCurrentMonth();
        this.sharpmonth = currentMonth + 1;
      },
      async GetYears() {
        const headers = {
          Authorization: "Bearer " + this.userdetails.access_token,
          Accept: "application/json",
          "Content-Type": "application/json",
        };
        const response = await this.$axios.get("years/get", { headers });
        if (response.data.code == 200 || response.data.code == "200") {
          this.yearslist = response.data.list;
        } else {
          this.yearslist = [];
        }
      },
      async GetMentariList() {
        const headers = {
          Authorization: "Bearer " + this.userdetails.access_token,
          Accept: "application/json",
          "Content-Type": "application/json",
        };
  
        const response = await this.$axios.get("hospital/branch-excluded-hospital-list", {
          headers,
        });
        if (response.data.code == 200 || response.data.code == "200") {
          this.branchlist = response.data.list;
        } else {
          this.branchlist = [];
        }
      },
  
      async GetMentariIncludingHospitalList() {
        const headers = {
          Authorization: "Bearer " + this.userdetails.access_token,
          Accept: "application/json",
          "Content-Type": "application/json",
        };
  
        const response = await this.$axios.get("hospital/branch-list", {
          headers,
        });
        if (response.data.code == 200 || response.data.code == "200") {
          this.branchincludinghospitallist = response.data.list;
        } else {
          this.branchincludinghospitallist = [];
        }
      },
  
      async Getannouncement() {
        try {
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          const response = await this.$axios.post("announcement/publish-list", {
            headers,
          });
          console.log("my announcement", response.data);
          if (response.data.code == 200) {
            this.list = response.data.list;
            console.log("my announcement1", this.list);
          } else {
            // this.$swal.fire({
            //         icon: 'error',
            //         title: 'Oops... Something Went Wrong!',
            //         text: 'the error is: ' + this.error,
            //         footer: ''
            //       });
          }
        } catch (e) {
          this.loader = false;
          // this.$swal.fire({
          //           icon: 'error',
          //           title: 'Oops... Something Went Wrong!',
          //           text: 'the error is: ' + e,
          //           footer: ''
          //         });
        }
      },
      async GetStateList() {
        const headers = {
          Authorization: "Bearer " + this.userdetails.access_token,
          Accept: "application/json",
          "Content-Type": "application/json",
        };
        const response = await this.$axios.get("address/list", {
          headers,
        });
        if (response.data.code == 200 || response.data.code == "200") {
          this.StateList = response.data.list;
        } else {
          this.StateList = [];
        }
      },
      SearchPatient() {
      localStorage.setItem('keyword',(this.search));
      this.$router.push("/modules/Shharp/patients-list" );
      },
      getFormattedDate(date) {
            return moment(date).format("DD-MM-YYYY")
        },
    },
  };
  </script>
  