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
              <h4>General Report</h4>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-sm-6">
                  <div class="mb-3">
                    <label class="form-label">Year<small style="color:red">*</small>:</label>
                      <select class="form-select" v-model="year">
                        <option v-for="year in getCurrentYear()" v-if="year>=1970" :value="year">{{ year }}</option>
                      </select>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="mb-3">
                    <label class="form-label">Month<small style="color:red">*</small> :</label>
                    <select class="form-select" v-model="month">
                    <option value="" selected="selected">Please Select</option>
                    <option v-for="m in months.month">{{ m }}</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- row -->
              <div class="row">
                <div class="col-sm-6">
                  <div class="mb-3">
                    <label class="form-label">Categories Of Patient:</label>
                    <select class="form-select" v-model="patient_category">
                      <option value="">Please Select</option>
                      <option
                        v-for="cat in patientcategorylist"
                        v-bind:key="cat.id"
                        v-bind:value="cat.id"
                      >
                        {{ cat.section_value }}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="mb-3">
                    <label class="form-label">Type of Referral:</label>
                    <select class="form-select" v-model="REFERRAL_TYPE">
                      <option value="">Please Select</option>
                      <option
                        v-for="rfl in referallist"
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
                    <label class="form-label">Type Of Visit:</label>
                    <select class="form-select" v-model="type_visit">
                      <option value="">Please Select</option>
                      <option
                        v-for="vst in visitlist"
                        v-bind:key="vst.id"
                        v-bind:value="vst.id"
                      >
                        {{ vst.section_value }}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="mb-3">
                    <label class="form-label">Appointment Type:</label>
                    <select class="form-select" v-model="appointment_type">
                      <option value="">Please Select</option>
                      <option
                        v-for="serv in servicelist"
                        v-bind:key="serv.id"
                        v-bind:value="serv.id"
                      >
                        {{ serv.service_name }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- row -->

              <div class="row">
                <div class="col-sm-6">
                  <div class="mb-3">
                    <label class="form-label">Diagnosis:</label>
                    <select class="form-select" v-model="diagnosis_id">
                      <option value="">Please Select</option>
                      <option
                        v-for="catcode in diagonisislist"
                        v-bind:key="catcode.id"
                        v-bind:value="catcode.id"
                      >
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
                    <input
                      type="text"
                      class="form-control"
                      name=""
                      v-model="Name"
                      v-on:keypress="isLetter($event)"
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="mb-3">
                    <label class="form-label">Age:</label>
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
              </div>
              <!-- row -->

              <div class="row">
                <div class="col-sm-6">
                  <div class="mb-3">
                    <label class="form-label">Citizenship:</label>
                    <select class="form-select" v-model="citizenship">
                      <option value="">Please Select</option>
                      <option
                        v-for="rfl in citizenshiplist"
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

              <div class="form-title">
                <h4>Sociodemographic</h4>
              </div>

              <div class="row">
                <div class="col-sm-6">
                  <div class="mb-3">
                    <label class="form-label">Race:</label>
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
                <div class="col-sm-6">
                  <div class="mb-3">
                    <label class="form-label">Religion:</label>
                    <select class="form-select" v-model="religion_id">
                      <option value="">Please Select</option>
                      <option
                        v-for="rfl in religionlist"
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
                    <label class="form-label">Marital Status:</label>
                    <select class="form-select" v-model="marital_id">
                      <option value="">Please Select</option>
                      <option
                        v-for="rfl in meritalstatuslist"
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
                    <label class="form-label">Accommodation:</label>
                    <select class="form-select" v-model="accommodation_id">
                      <option value="">Please Select</option>
                      <option
                        v-for="rfl in accomodationlist"
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
                    <label class="form-label">Education Level:</label>
                    <select class="form-select" v-model="education_level">
                      <option value="">Please Select</option>
                      <option
                        v-for="rfl in educationlevellist"
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
                    <label class="form-label">Occupation Status:</label>
                    <select class="form-select" v-model="occupation_status">
                      <option value="">Please Select</option>
                      <option
                        v-for="rfl in occupationstatuslist"
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
                    <label class="form-label">Fee Exemption Status:</label>
                    <select class="form-select" v-model="fee_exemption_status">
                      <option value="">Please Select</option>
                      <option
                        v-for="rfl in feeexemtionlist"
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
                    <label class="form-label">Occupation Sector:</label>
                    <select class="form-select" v-model="occupation_sector">
                      <option value="">Please Select</option>
                      <option
                        v-for="rfl in occupationsectorlist"
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
                       <br><br>
              <div class="btn-width d-flex">
                <div class="ml-auto" :class="SidebarAccess!=1?'hide1':''">
                  <button
                    @click="Ongeneratepdf"
                    class="btn btn-danger btn-text"
                  >
                    <i class="fa fa-file-pdf"></i> Generate PDF
                  </button>
                  <!-- <a @click="Ongenerateexel" class="btn btn-success btn-text"
                    ><i class="fa fa-file-excel"></i> Generate Excel</a
                  > -->
                  <downloadexcel
                       class="btn btn-success btn-text"
                       :header="header"
                       :json_data="ReportList"
                       :fetch = "Ongenerateexel"
                       :fields ="json_fields"
                       :excelname="excelname"
                       :sheetname="sheetname"
                        worksheet="General Report"
                       :name=excelname
                      >
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
   <div
                id="result"
                class="hide"
                ref="result"
                style="background: #fff"
              >
                <table  class="table"  >
                  <thead>
                    <tr>
                      <th class="thhead">No</th>
                      <th class="thhead">Reg Date</th>
                      <th class="thhead">Reg Time</th>
                      <th class="thhead">NRIC/ID</th>
                      <th class="thhead">Name</th>
                      <th class="thhead">Address</th>
                      <th class="thhead">City</th>
                      <th class="thhead">State</th>
                      <th class="thhead">PostCode</th>
                      <th class="thhead">Citizenship</th>
                      <th class="thhead">Phone Number</th>
                      <th class="thhead">DOB</th>
                      <th class="thhead">Age</th>
                      <th class="thhead">SEX</th>
                      <th class="thhead">Race</th>
                      <th class="thhead">Religion</th>
                      <th class="thhead">MARITAL STATUS</th>
                      <th class="thhead-occu-sector">Occu Status</th>
                      <th class="thhead">Occu Sector</th>
                      <th class="thhead">ACCOM</th>
                      <th class="thhead">Education</th>
                      <th class="thhead">Fee Exemption Status</th>
                      <th class="thhead">Referral Category</th>
                      <th class="thhead">Patient Category</th>
                      <th class="thhead">visit Category</th>
                      <th class="thhead">Appointment</th>
                      <th class="thhead">Outcome</th>
                      <th class="thhead">Diagnosis Code</th>
                      <th class="thhead">Diagnosis</th>
                      <th class="thhead">Service</th>
                      <th class="thhead">Staff</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(rp, index) in list" :key="index">
                      <td class="tdrow">{{ index + 1 }}</td>
                      <td class="tdrow">{{ rp.Registration_date }}</td>
                      <td class="tdrow-limit">{{ rp.Registration_Time }}</td>
                      <td class="tdrow-num">{{ rp.nric_no }}</td>
                      <td class="tdrow-limit">{{ rp.Name }}</td>
                      <td class="tdrow-num">{{ rp.ADDRESS }}</td>
                      <td class="tdrow">{{ rp.CITY }}</td>
                      <td class="tdrow">{{ rp.STATE }}</td>
                      <td class="tdrow">{{ rp.POSTCODE }}</td>
                      <td class="tdrow">{{ rp.citizenship }}</td>
                      <td class="tdrow-num">{{ rp.PHONE_NUMBER }}</td>
                      <td class="tdrow-num">{{ rp.DATE_OF_BIRTH }}</td>
                      <td class="tdrow-num">{{ rp.AGE }}</td>
                      <td class="tdrow">{{ rp.GENDER | short}}</td>
                      <td class="tdrow">{{ rp.race }}</td>
                      <td class="tdrow">{{ rp.religion }}</td>
                      <td class="tdrow">{{ rp.marital }}</td>
                      <td class="tdrow">{{ rp.occupation_status }}</td>
                      <td class="tdrow-occu-sector">{{ rp.occupation_sector }}</td>
                      <td class="tdrow">{{ rp.accomodation }}</td>
                      <td class="tdrow">{{ rp.education_level }}</td>
                      <td class="tdrow">{{ rp.fee_exemption_status }}</td>
                      <td class="tdrow">{{ rp.TYPE_OF_Refferal }}</td>
                      <td class="tdrow">{{ rp.CATEGORY_OF_PATIENTS }}</td>
                      <td class="tdrow">{{ rp.TYPE_OF_Visit }}</td>
                      <td class="tdrow">{{ rp.APPOINTMENT_TYPE }}</td>
                      <td class="tdrow">{{ rp.outcome }}</td>
                      <td class="tdrow">{{ rp.DIAGNOSIS_CODE }}</td>
                      <td class="tdrow">{{ rp.DIAGNOSIS }}</td>
                      <td class="tdrow">{{ rp.category_of_services }}</td>
                      <td class="tdrow-limit">{{ rp.Attending_staff }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
</div>
</template>
<script>
import CommonHeader from '../../../components/CommonHeader.vue';
import CommonSidebar from '../../../components/CommonSidebar.vue';
import Vue from "vue";
import downloadexcel from "vue-json-excel";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import JsonExcel from "vue-json-excel";
export default {
  components: { CommonSidebar, CommonHeader },
  name: "App",
  components: {
    downloadexcel,
  },
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

      json_fields: {
        "No":'No',
        "Reg Date":'Registration_date',
        "Reg Time":'Registration_Time',
        "NRIC/ID":'nric_no',
        "Name":'Name',
        "Address":'ADDRESS',
        "City":'CITY',
        "State":'STATE',
        "PostCode":'POSTCODE',
        "Citizenship":'citizenship',
        "Phone Number":'PHONE_NUMBER',
        "DOB":'DATE_OF_BIRTH',
        "Age":'AGE',
        "SEX":'GENDER',
        "Race":'race',
        "Religion":'religion',
        "MARITAL STATUS":'marital',
        "Occu Status":'occupation_status',
        "Occu Sector":'occupation_sector',
        "ACCOM":'accomodation',
        "Education":'education_level',
        "Fee Exemption Status":'fee_exemption_status',
        "Referral Category":'TYPE_OF_Refferal',
        "Patient Category":'CATEGORY_OF_PATIENTS',
        "visit Category":'TYPE_OF_Visit',
        "Appointment":'APPOINTMENT_TYPE',
        "Outcome":'outcome',
        "Diagnosis Code":'DIAGNOSIS_CODE',
        "Diagnosis":'DIAGNOSIS',
        "Additional Diagnosis 1": 'additional_diagnosis1',
        "Additional Diagnosis 2": 'additional_diagnosis2',
        "Additional Diagnosis 3": 'additional_diagnosis3',
        "Additional Diagnosis 4": 'additional_diagnosis4',
        "Additional Diagnosis 5": 'additional_diagnosis5',
        "ICD-9 Code":'code_id',
        "ICD-9 Sub Code 1": 'sub_code1',
        "ICD-9 Sub Code 2": 'sub_code2',
        "ICD-9 Sub Code 3": 'sub_code3',
        "ICD-9 Sub Code 4": 'sub_code4',
        "ICD-9 Sub Code 5": 'sub_code5',
        "Additional ICD-9 Code":'add_code_id',
        "ICD-9 Additional Sub Code 1": 'add_sub_code1',
        "ICD-9 Additional Sub Code 2": 'add_sub_code2',
        "ICD-9 Additional Sub Code 3": 'add_sub_code3',
        "ICD-9 Additional Sub Code 4": 'add_sub_code4',
        "ICD-9 Additional Sub Code 5": 'add_sub_code5',
        "Service":'category_of_services',
        "Staff":'Attending_staff',
      },
      excelname: "",
      sheetname: "General Report",
      header:"",
      ReportList:[],
      No:0,
      filename:'',

      userdetails: null,
      error: null,
      loader: false,
      errorList: [],
      list: [],
      patientcategorylist: [],
      referallist: [],
      visitlist: [],
      servicelist: [],
      diagonisislist: [],
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
      fromDate: "",
      toDate: "",
      Name: "",
      REFERRAL_TYPE: "",
      appointment_type: "",
      type_visit: "",
      patient_category: "",
      Diagnosis: "",
      Gender: "",
      Age: "",
      race_id: "",
      religion_id: "",
      diagnosis_id:"",
      marital_id: "",
      accommodation_id: "",
      education_level: "",
      occupation_status: "",
      fee_exemption_status: "",
      occupation_sector: "",
      citizenship: "",
      SidebarAccess:null,
      year: new Date().getFullYear(),
      months: {
                month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            },
      month:"",
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.SidebarAccess = JSON.parse(localStorage.getItem("SidebarAccess"));
    this.GetList();
  },
  filters: {
  short: function (value) {
    return value.substr(0, 1); // just an example
  }
},

  methods: {
    currentDate() {
            const current = new Date();
            const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
            return date;
        },

        getCurrentYear() {
            return new Date().getFullYear();
        },

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
        const response1 = await this.$axios.get(
          "general-setting/list?section=" + "citizenship",
          {
            headers,
          }
        );
        if (response1.data.code == 200 || response1.data.code == "200") {
          this.citizenshiplist = response1.data.list;
          console.log("citizen", this.citizenshiplist);
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
        const response5 = await this.$axios.get(
          "general-setting/list?section=" + "religion",
          { headers }
        );
        if (response5.data.code == 200 || response5.data.code == "200") {
          this.religionlist = response5.data.list;
        }
        const response6 = await this.$axios.get(
          "general-setting/list?section=" + "marital-status",
          { headers }
        );
        if (response6.data.code == 200 || response6.data.code == "200") {
          this.meritalstatuslist = response6.data.list;
        }
        const response7 = await this.$axios.get(
          "general-setting/list?section=" + "accommodation",
          { headers }
        );
        if (response7.data.code == 200 || response7.data.code == "200") {
          this.accomodationlist = response7.data.list;
        }
        const response8 = await this.$axios.get(
          "general-setting/list?section=" + "education-level",
          { headers }
        );
        if (response8.data.code == 200 || response8.data.code == "200") {
          this.educationlevellist = response8.data.list;
        }
        const response9 = await this.$axios.get(
          "general-setting/list?section=" + "occupation-status",
          { headers }
        );
        if (response9.data.code == 200 || response9.data.code == "200") {
          this.occupationstatuslist = response9.data.list;
        }
        const response10 = await this.$axios.get(
          "general-setting/list?section=" + "fee-exemption-status",
          { headers }
        );
        if (response10.data.code == 200 || response10.data.code == "200") {
          this.feeexemtionlist = response10.data.list;
        }
        const response11 = await this.$axios.get(
          "general-setting/list?section=" + "occupation-sector",
          { headers }
        );
        if (response11.data.code == 200 || response11.data.code == "200") {
          this.occupationsectorlist = response11.data.list;
        }
        const response12 = await this.$axios.get(
          "general-setting/list?section=" + "patient-category",
          { headers }
        );
        if (response12.data.code == 200 || response12.data.code == "200") {
          this.patientcategorylist = response12.data.list;
        } else {
          this.patientcategorylist = [];
        }
        const response13 = await this.$axios.get(
          "general-setting/list?section=" + "type-of-referral",
          {
            headers,
          }
        );
        if (response13.data.code == 200 || response13.data.code == "200") {
          this.referallist = response13.data.list;
        } else {
          this.referallist = [];
        }
        const response14 = await this.$axios.get(
          "general-setting/list?section=" +"type-of-visit",
          { headers }
        );

        if (response14.data.code == 200 || response14.data.code == "200") {
          this.visitlist = response14.data.list;
        } else {
          this.visitlist = [];
        }
        const response15 = await this.$axios.get("service/list", { headers });
        if (response15.data.code == 200 || response15.data.code == "200") {
          this.servicelist = response15.data.list;
        } else {
          this.servicelist = [];
        }
        const response16 = await this.$axios.get("diagnosis/getIcd10codeList", {
          headers,
        });
        if (response16.data.code == 200 || response16.data.code == "200") {
          this.diagonisislist = response16.data.list;
        } else {
          this.diagonisislist = [];
        }
        this.loader = false;

        this.$swal.fire({
                icon : 'warning',
                title: 'Attention',
                html: 'Please generate the report during <b>non-peak hours</b> to avoid potential disruptions, as the process is time-consuming!',
                showConfirmButton: true,
                })

      } catch (e) {
        console.log("my error", e);
      }


    },

    async isLetter(e){
        let char = String.fromCharCode(e.keyCode);
        if(/^[A-Za-z\'@ ]+$/.test(char)) return true;
        else e.preventDefault();
    },

    async Ongeneratepdf() {
      this.errorList = [];
      this.error = null;
      if (!this.year) {
        this.errorList.push("Year is Required!");
      }
      if (!this.month) {
        this.errorList.push("Month is Required!");
      }
      if (this.year && this.month) {
        try {
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          const response = await this.$axios.post(
            "report/general",
            {
              email: this.userdetails.user.email,
              branch_id: this.userdetails.branch.branch_id,
              added_by: this.userdetails.user.id,
              year: this.year,
              month: this.month,
              patient_category: this.patient_category,
              type_visit: this.type_visit,
              appointment_type: this.appointment_type,
              diagnosis_id: this.diagnosis_id,
              referral_type: this.REFERRAL_TYPE,
              name: this.Name,
              accommodation_id: this.accommodation_id,
              Age: this.Age,
              citizenship: this.citizenship,
              gender: this.Gender,
              race: this.race_id,
              religion: this.religion_id,
              marital_status: this.marital_id,
              education_level: this.education_level,
              occupation_status: this.occupation_status,
              fee_exemption_status: this.fee_exemption_status,
              occupation_sector: this.occupation_sector,
              report_type: "pdf",
            },
            { headers }
          );
          console.log("my report", response.data);
          if (response.data.code == 200) {
            this.list = response.data.result;
            this.header = response.data.header;
            console.log("my report", response.data);
            if (this.list.length > 0) {

                let rows = [
  [{text:'NO', bold: true },
  {text:'REG DATE',bold: true },
  {text:'REG TIME',bold: true },
{text:'NRIC/ID',bold: true },
{text:'NAME',bold: true },
{text:'ADDRESS',bold: true },
{text:'CITY',bold: true },
{text:'STATE',bold: true },
{text:'POSTCODE',bold: true },
{text:'CITIZENSHIP',bold: true },
{text:'PHONE NUMBER',bold: true },
{text:'DOB',bold: true },
{text:'AGE',bold: true },
{text:'SEX',bold: true },
{text:'RACE',bold: true },
{text:'RELIGION',bold: true },
{text:'MARITAL STATUS',bold: true },
{text:'OCCU STATUS',bold: true },
{text:'OCCU SECTOR',bold: true },
{text:'ACCOM',bold: true },
{text:'EDUCATION',bold: true },
{text:'FEE EXEMPTION STATUS',bold: true },
{text:'REFERRAL CATEGORY',bold: true },
{text:'PATIENT CATEGORY',bold: true },
{text:'VISIT CATEGORY',bold: true },
{text:'APPOINTMENT',bold: true },
{text:'OUTCOME',bold: true },
{text:'DIAGNOSIS CODE',bold: true },
{text:'DIAGNOSIS',bold: true },
{text:'SERVICE',bold: true },
{text:'STAFF',bold: true },
]
]

for (let i = 0; i < this.list.length; i++) { // i suggest a for-loop since you need both arrays at a time 
  rows.push([this.list[i].No,
this.list[i].Registration_date, 
this.list[i].Registration_Time ,
this.list[i].nric_no ,
this.list[i].Name ,
this.list[i].ADDRESS ,
this.list[i].CITY, 
this.list[i].STATE ,
this.list[i].POSTCODE ,
this.list[i].citizenship ,
this.list[i].PHONE_NUMBER ,
this.list[i].DATE_OF_BIRTH ,
this.list[i].AGE ,
this.list[i].GENDER,
this.list[i].race ,
this.list[i].religion ,
this.list[i].marital ,
this.list[i].occupation_status ,
this.list[i].occupation_sector ,
this.list[i].accomodation ,
this.list[i].education_level,
this.list[i].fee_exemption_status ,
this.list[i].TYPE_OF_Refferal ,
this.list[i].CATEGORY_OF_PATIENTS ,
this.list[i].TYPE_OF_Visit ,
this.list[i].APPOINTMENT_TYPE, 
this.list[i].outcome ,
this.list[i].DIAGNOSIS_CODE ,
this.list[i].DIAGNOSIS ,
this.list[i].category_of_services ,
this.list[i].Attending_staff
]);
}

        var dd = {
          style: 'tableExample',
          pageSize: 'A3',
          pageOrientation: 'landscape',
          defaultStyle: {
                        fontSize: 4.7, //2.90(potrait) untuk A3 //maybe 4.5 untuk A2
                      },
        content: [
        {text: response.data.header,
			      style: 'header',fontSize:6,bold:true,},
          {
            table: {
                  body: rows,
                  headerRows:1,
            }
          },
        ],
	
};
//pdfMake.createPdf(dd).open('GeneralReport.pdf');
 pdfMake.createPdf(dd).download('GeneralReport.pdf');


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
    startDownload(){
        alert('show loading');
    },
    finishDownload(){
        alert('hide loading');
    },
    async Ongenerateexel() {
      this.errorList = [];
      this.error = null;
      if (!this.year) {
        this.errorList.push("Year is Required!");
      }
      if (!this.month) {
        this.errorList.push("Month is Required!");
      }
      if (this.year && this.month) {
        try {
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          const response = await this.$axios.post(
            "report/general",
            {
              email: this.userdetails.user.email,
              branch_id: this.userdetails.branch.branch_id,
              added_by: this.userdetails.user.id,
              year: this.year,
              month: this.month,
              patient_category: this.patient_category,
              type_visit: this.type_visit,
              appointment_type: this.appointment_type,
              diagnosis_id: this.diagnosis_id,
              referral_type: this.REFERRAL_TYPE,
              name: this.Name,
              accommodation_id: this.accommodation_id,
              Age: this.Age,
              citizenship: this.citizenship,
              gender: this.Gender,
              race: this.race_id,
              religion: this.religion_id,
              marital_status: this.marital_id,
              education_level: this.education_level,
              occupation_status: this.occupation_status,
              fee_exemption_status: this.fee_exemption_status,
              occupation_sector: this.occupation_sector,
              report_type: "excel",
            },
            { headers }
          );
          console.log("my report", response.data);
          if (response.data.code == 200) {
            this.list = response.data.result;
            if (this.list.length > 0) {

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
        }
    },
  },
};
</script>
<style scoped>
.tdrow {
  padding: 5px 5px;
  border: 1px solid #000;
  font-size: 7.0px;
  font-weight: 600;
  }
.tdrow-num{
  padding: 5px 5px;
  border: 1px solid #000;
  font-size: 9.0px;
  font-weight: 600;
}
  .tdrow-limit {
  padding: 5px 5px;
  border: 1px solid #000;
  font-size: 8.0px;
  font-weight: 600;
  word-wrap:break-word;
  max-width:70px;

  }
  .tdrow-limit-diagnosis{
    padding: 5px 5px;
  border: 1px solid #000;
  font-size: 8.0px;
  font-weight: 600;
  word-wrap:break-word;
  max-width:80px;

  }
  .tdrow-occu-sector {
  padding: 5px 5px;
  border: 1px solid #000;
  font-size: 8.0px;
  font-weight: 600;
  word-wrap:break-word;
  max-width:80px;

  }
.thhead {
  background: #bbf2eb;
  padding: 5px 5px;
  border: 1px solid #000;
  text-transform: uppercase;
  font-size: 8.0px;
  line-height: normal;
}
.thhead-occu-sector{
  background: #bbf2eb;
  padding: 5px 5px;
  border: 1px solid #000;
  text-transform: uppercase;
  font-size: 8.0px;
  max-width:80px;
  line-height: normal;

}
.table {
  border: 1px solid rgb(0, 0, 0);
  width:fit-content;
  margin-top: 50px;
  margin-left: 50px;
  margin-right: 50px;

}
.tabhead {
  background: #ddd;
  padding: 5px 5px;
  border: 1px solid #000;
  text-transform: uppercase;
  font-size: 6.5px;
}
.tabtd {
  padding: 5px 5px;
  border: 1px solid #000;
  font-size: 6.5px;
  font-weight: 600;
}
.hide1 {
  background: #fff;
  display: none;
}
div#result {
  padding: 55px;
  width: 1920px;

}
</style>
