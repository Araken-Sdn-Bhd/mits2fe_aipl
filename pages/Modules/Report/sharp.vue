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
                    <label class="form-label">Period Of Services:</label>
                    <input
                      type="date"
                      v-model="fromDate"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="mb-3">
                    <label class="form-label">To:</label>
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
                      <option
                        v-for="catcode in diagonisislist"
                        v-bind:key="catcode.id"
                        v-bind:value="catcode.id"
                      >
                        {{ catcode.icd_category_code }} {{catcode.icd_category_name}}
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
                      v-model="name"
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="mb-3">
                    <label class="form-label">Age:</label>
                    <select class="form-select" v-model="age">
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
                    <select class="form-select" v-model="gender">
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
                    <label class="form-label">Race:</label>
                    <select class="form-select" v-model="race">
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
                    <select class="form-select" v-model="religion">
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
                    <select class="form-select" v-model="marital_status">
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
                    <select class="form-select" v-model="accomodation">
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

              <div class="form-title">
                <h4>Risk Factor</h4>
              </div>

              <div class="row">
                <div class="col-sm-6">
                  <div class="mb-3">
                    <select class="form-select" v-model="risk_factor">
                      <option value="">Please Select</option>
                      <option
                        v-for="rfl in riskfactorlist"
                        v-bind:key="rfl.id"
                        v-bind:value="rfl.id"
                      >
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
                      <option
                        v-for="rfl in protectivelist"
                        v-bind:key="rfl.id"
                        v-bind:value="rfl.id"
                      >
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
                      <option
                        v-for="rfl in selfharmmethodlist"
                        v-bind:key="rfl.name"
                        v-bind:value="rfl.name"
                      >
                        {{ rfl.name }}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="mb-3">
                    <label class="form-label">Suicidal Intent:</label>
                    <select class="form-select" v-model="suicidal_intent">
                      <option value="">Please Select</option>
                      <option
                        v-for="rfl in suicidalintantlist"
                        v-bind:key="rfl.name"
                        v-bind:value="rfl.name"
                      >
                        {{ rfl.name }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- row -->

              <div class="row">
                <div class="col-sm-6">
                  <div class="mb-3">
                    <label class="form-label"
                      >How did Patient get idea about method:</label
                    >
                    <select class="form-select" v-model="idea_about_method">
                      <option value="">Please Select</option>
                      <option
                        v-for="rfl in patientideamethodlist"
                        v-bind:key="rfl.name"
                        v-bind:value="rfl.name"
                      >
                        {{ rfl.name }}
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
              <div class="d-flex">
                <div class="ml-auto" :class="SidebarAccess!=1?'hide':''">
                  <button
                    @click="Ongeneratepdf"
                    class="btn btn-danger btn-text"
                  >
                    <i class="fa fa-file-pdf"></i> Generate PDF
                  </button>
                  <button
                    @click="Ongenerateexel"
                    class="btn btn-success btn-text"
                  >
                    <i class="fa fa-file-excel"></i> Generate Excel
                  </button>
                </div>
              </div>
              <!-- </form> -->

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
                style="background: #fff;"
              >
                <table style="border: 1px solid #000; width: 50%">
                  <thead>
                    <tr>
                      <th class="tabhead">Month</th>
                      <th class="tabhead">No of shharp report generated</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(tr, index) in totalResultlist" :key="index">
                      <td class="tabtd">{{ tr.month }}</td>
                      <td class="tabtd">{{ tr.total }}</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td class="tabtd">
                        <b>Total</b>
                      </td>
                      <td class="tabtd">{{ count }}</td>
                    </tr>
                  </tfoot>
                </table>

                <table class="table" id="datatable">
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
                      <td class="tdrow">{{ rp.RISK_FACTOR }}</td>
                      <td class="tdrow">{{ rp.PROTECTIVE_FACTOR }}</td>
                      <td class="tdrow">{{ rp.METHOD_OF_SELF_HARM }}</td>
                      <td class="tdrow">{{ rp.IDEA_OF_METHOD }}</td>
                      <td class="tdrow">{{ rp.SUCIDAL_INTENT }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
</div>

</template>
<script>
import CommonHeader from "../../../components/CommonHeader.vue";
import CommonSidebar from "../../../components/CommonSidebar.vue";
export default {
  components: { CommonSidebar, CommonHeader },

  name: "sharp",
  data() {
    return {
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
      age: "",
      count: 0,
      SidebarAccess:null,
      totalResultlist: [],
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
        const response12 = await this.$axios.post(
          "shharp-registration-risk-protective-questions/list",
          { Type: "Risk Factors" },
          { headers }
        );
        if (response12.data.code == 200 || response12.data.code == "200") {
          this.riskfactorlist = response12.data.list;
        }
        const response13 = await this.$axios.post(
          "shharp-registration-risk-protective-questions/list",
          { Type: "Protective Factors" },
          { headers }
        );

        if (response13.data.code == 200 || response13.data.code == "200") {
          this.protectivelist = response13.data.list;
        }
        const response14 = await this.$axios.get("self-harm/list", { headers });
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
          "report/shharp",
          {
            added_by: this.userdetails.user.id,
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
            religion: this.religion,
            marital_status: this.marital_status,
            accomodation: this.accomodation,
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
          this.totalResultlist=response.data.Totalreport;
          // this.count = response.data.result.length;
          if (this.list.length > 0) {
            this.totalResultlist.forEach(element => {
              this.count=this.count+element.total;
            });
            setTimeout(() => {
              this.$refs.result.classList.remove("hide");
               this.$refs.result.classList.remove("hide");
                var pdf = new jsPDF("l", "pt", "A3");
                 //pdf.internal.scaleFactor = 2.25;  // = 2.0; (working great with yellow page result before insert dummy data)
                  pdf.internal.scaleFactor =1.30; //A3 or use 1.41
                //pdf.internal.scaleFactor =30;
                var options = {
                pagesplit: true

            };

                pdf.addHTML($("#result")[0],options, function () {
                  pdf.save("Sharp_Report.pdf");
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
            "report/shharp",
            {
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
              religion: this.religion,
              marital_status: this.marital_status,
              accomodation: this.accomodation,
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
  padding: 5px;
  border: 1px solid #000;
  font-size: 12px;
  font-weight: 600;
}
.thhead {
  background: #ddd;
  padding: 5px;
  border: 1px solid #000;
  text-transform: uppercase;
  font-size: 12px;
  line-height: normal;
}
.table {
  border: 1px solid rgb(0, 0, 0);
  width: 100%;
  margin-top: 50px;
      line-height: normal;
}
.tabhead {
  background: #ddd;
  padding: 5px;
  border: 1px solid #000;
  text-transform: uppercase;
  font-size: 12px;
}
.tabtd {
  padding: 5px;
  border: 1px solid #000;
  font-size: 12px;
  font-weight: 600;
}
.hide {
  background: #fff;
  display: none;
}
div#result {
  padding: 35px 15px;
}
</style>
