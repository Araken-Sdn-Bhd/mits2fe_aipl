<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <div class="container-fluid px-10">
          <div class="page-title">
            <h1>Demographic</h1>
            <!-- <a href="#"><i class="fal fa-plus"></i> Add</a> -->
          </div>

          <div class="card">
            <div class="card-body">
              <form class="mt-2">
                <div class="col-lg-10 offset-lg-1 col-sm-12 pd-0">
                <div class="row">
                  <div class="col-sm-12">
                    <div class="mb-3">
                      <label class="form-label">Name (As In NRIC)<small>*</small></label>
                      <input type="text" class="form-control" placeholder="Enter Name (As In NRIC)" name=""
                        v-model="name_asin_nric" />
                    </div>
                  </div>
                </div>
                <!-- close-row -->
                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Hospital's MRN No.</label>
                      <input type="text" class="form-control" name="" placeholder="Enter Hospital's MRN No."
                        v-model="hospital_mrn_no" />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Employment Status</label>
                      <select class="form-select" aria-label="" v-model="employment_id">
                        <option value="">Please Select</option>
                        <option v-for="emp in employstatuslist" v-bind:key="emp.id" v-bind:value="emp.id">
                          {{ emp.section_value }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="row mt-3 align-items-center">
                  <div class="col-lg-2 col-sm-12">
                    <label class="form-label">Citizenship<small>*</small></label>
                  </div>
                  <div class="col-lg-10 col-sm-12">
                    <div class="radio radio-show">
                      <div class="form-check form-check-inline mobile-check col-lg-3 col-sm-4" v-for="(ct, i) in citizenshiplist" :key="i">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" v-bind:id="'ct' + i"
                          v-bind:value="ct.id" v-model="citizenship"
                          @change="OnchangeCitizenship(ct.section_value, ct.id)" />
                        <label class="form-check-label" v-bind:for="'ct' + i">{{ ct.section_value }}</label>
                      </div>
                    </div>
                  </div>

                  <!-- DIV-SHOW -->
                  <div class="malaysian box mb-0" v-if="citizentype == 'Malaysian'">
                    <div class="row">
                      <div class="col-sm-6 mb-3">
                        <label class="form-label">NRIC Type<small>*</small></label>
                        <select v-model="nric_type" class="form-select" aria-label="Default select example"
                          v-on:change="resetModelValue">
                          <option value="">Please Select</option>
                          <option v-for="mar in nrictypelist" v-bind:key="mar.id" v-bind:value="mar.id">
                            {{ mar.section_value }}
                          </option>
                        </select>
                      </div>

                      <div class="col-sm-6 mb-3" v-if="this.nric_type_code == 'OIC'">
                        <label class="form-label">Old NRIC No<small>*</small></label>
                        <input type="tel" class="form-control toCapitalFirst" placeholder="xxxxxxxx" @keyup="OnnricNo4"
                          v-model="nric_no" />
                        <Error :message="error" v-if="error" />
                      </div>
                      <div class="col-sm-6 mb-3" v-if="this.nric_type_code == 'NIC'">
                        <label class="form-label toCapitalFirst">New NRIC No<small>*</small></label>
                        <input type="tel" class="form-control" placeholder="xxxxxx-xx-xxxx" @keyup="OnnricNo"
                          v-model="nric_no" @change="validateIC" v-on:keypress="NumbersOnly" />
                        <Error :message="error" v-if="error" />
                      </div>
                      <div class="col-sm-6 mb-3" v-if="nric_type_code == 'POL'">
                        <label class="form-label">Police ID<small>*</small></label>
                        <input type="tel" class="form-control toCapitalFirst" placeholder="xxxxxxxxx" @keyup="OnnricNo3"
                          v-model="nric_no" />
                        <Error :message="error" v-if="error" />
                      </div>
                      <div class="col-sm-6 mb-3" v-if="nric_type_code == 'ARM'">
                        <label class="form-label">Army ID<small>*</small></label>
                        <input type="tel" class="form-control toCapitalFirst" placeholder="xxxxxxxx"
                          v-model="nric_no" />
                        <Error :message="error" v-if="error" />
                      </div>
                    </div>
                  </div>

                  <div class="permanent-resident box mb-0" v-if="citizentype == 'Permanent Resident'">
                    <div class="row">
                      <div class="col-sm-6 mb-3">
                        <label class="form-label">NRIC No<small>*</small></label>
                        <input type="number" class="form-control" placeholder="xxxxxx-xx-xxxx" @keyup="OnnricNo1"
                          v-model="nric_no1" @change="validateIC" v-on:keypress="NumbersOnly" />
                        <Error :message="error" v-if="error" />
                      </div>
                    </div>
                  </div>

                  <div class="foreigner box mb-0" v-if="citizentype == 'Foreigner'">
                    <div class="row">
                      <div class="col-lg-4 col-sm-12 mb-3">
                        <label class="form-label">Passport No<small>*</small></label>
                        <input type="text" class="form-control" placeholder="Enter Passport No" v-model="passport_no" />
                      </div>
                      <div class="col-lg-4 col-sm-6 mb-3">
                        <label class="form-label">Expiry Date<small>*</small></label>
                        <input type="date" class="form-control" v-model="expiry_date" />
                      </div>
                      <div class="col-lg-4 col-sm-6 mb-3">
                        <label class="form-label">Issuing Country<small>*</small></label>
                        <select v-model="country_id" class="form-select" aria-label="Default select example">
                          <option value="0">Select</option>
                          <option v-for="cnt in countrylist" v-bind:key="cnt.id" v-bind:value="cnt.id">
                            {{ cnt.country_name }}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- close-row -->

                <div class="row mt-2  mb-3">
                  <div class="col-sm-2">
                    <label class="form-label">Sex<small>*</small></label>
                  </div>
                  <div class="col-sm-10">
                    <div class="radio">
                      <div class="form-check form-check-inline col-sm-2" v-for="(gn, i) in genderlist" :key="i">
                        <input class="form-check-input" type="radio" name="Sex" v-bind:id="'gn' + i"
                          v-bind:value="gn.id" v-model="sex" />
                        <label class="form-check-label" v-bind:for="'gn' + i">{{ gn.section_value }}</label>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- close-row -->

                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Date of Birth</label>
                      <input type="date" @change="OnAgeCalculation" class="form-control" name="" v-model="birth_date" />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Age</label>
                      <input type="text" class="form-control" placeholder="Age" name="" v-model="age" />
                    </div>
                  </div>
                </div>
                <!-- close-row -->

                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Religion</label>
                      <select v-model="religion_id" class="form-select" aria-label="Default select example">
                        <option value="0">Select</option>
                        <option v-for="rel in religionlist" v-bind:key="rel.id" v-bind:value="rel.id">
                          {{ rel.section_value }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Ethnic Group/Race</label>
                      <select v-model="race_id" class="form-select" aria-label="Default select example">
                        <option value="0">Select</option>
                        <option v-for="rce in racelist" v-bind:key="rce.id" v-bind:value="rce.id">
                          {{ rce.section_value }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Marital Status</label>
                      <select v-model="marital_id" class="form-select" aria-label="Default select example"
                        @change="OnchangeMarital($event)">
                        <option value="0">Select</option>
                        <option v-for="mar in meritallist" v-bind:key="mar.id" v-bind:value="mar.id">
                          {{ mar.section_value }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-sm-6" v-if="otherMarital">
                    <div class="mb-3">
                      <label class="form-label">Please Specify</label>
                      <input type="text" class="form-control" v-model="other_maritalList"
                        placeholder="please specify other marital status" />
                    </div>
                  </div>

                </div>

                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Highest Education</label>
                      <select v-model="education_level" class="form-select" aria-label="Default select example">
                        <option value="0">Select</option>
                        <option v-for="edu in educationlist" v-bind:key="edu.id" v-bind:value="edu.id">
                          {{ edu.section_value }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Household Income Status(monthly)</label>
                      <select class="form-select ethnic-group" aria-label="" v-model="household_income">
                        <option value="">Please Select</option>
                        <option v-for="rce in householdlist" v-bind:key="rce.id" v-bind:value="rce.id">
                          {{ rce.section_value }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <!-- close-row -->

                <p v-if="errorList.length">
                <ul>
                  <li style="color:red" v-for='err in errorList' :key='err'>
                    {{ err }}
                  </li>
                </ul>
                </p>
                <br><br>
                <div class="d-flex align-items-center mt-3">
                  <button @click="back" type="button" class="btn btn-primary btn-fill btn-md">
                    <em class="fa fa-step-backward"/> &nbsp; Back
                  </button>

                  <a v-if="!Id" @click="submitRegistration" class="btn btn-warning btn-text ml-auto"><i
                      class="fa fa-save"></i> Save</a>
                  <a v-if="Id" @click="submitRegistration" class="btn btn-warning btn-text ml-auto"><i
                      class="fa fa-save"></i> Update</a>
                </div>
              </div>
              </form>
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
import moment from 'moment'
export default {
  components: { CommonSidebar, CommonHeader },
  data() {
    return {
      userdetails: null,
      countrylist: [],
      nrictypelist: [],
      racelist: [],
      householdlist: [],
      nrictypelist: [],
      religionlist: [],
      meritallist: [],
      educationlist: [],
      errorList: [],
      citizenshiplist: [],
      genderlist: [],
      employstatuslist: [],

      race_id: 0,
      religion_id: 0,
      marital_id: 0,
      education_level: 0,
      country_id: 0,
      Id: 0,
      branch_id: 0,

      userdetails: null,
      Isvalidate: true,
      otherMarital: false,

      name_asin_nric: "",
      citizenship: "",
      sex: "",
      birth_date: "",
      age: "",
      hospital_mrn_no: "",
      household_income: "",
      employment_id: "",
      passport_no: "",
      expiry_date: "",
      error: "",
      citizentype: "",
      yearError: "",
      nric_type: "",
      nric_no: "",
      nric_no1: "",
      race_type: "",
      nric_type_code: "",
      other_maritalList: "",

    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    $(document).ready(function () {
      $(".data-table").DataTable({
        searching: false,
        bLengthChange: false,
      });

      $('.radio input[type="radio"]').click(function () {
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $(".box").not(targetBox).hide();
        $(targetBox).show();
      });

      $(".select-others")
        .change(function () {
          $(this)
            .find("option:selected")
            .each(function () {
              var optionValue = $(this).attr("value");
              if (optionValue) {
                $("." + optionValue).show();
              } else {
              }
            });
        })
        .change();
    });
    this.GetList();
    let urlParams = new URLSearchParams(window.location.search);
    this.Id = urlParams.get("id");
    if (this.Id) {
      this.GetPatientdetails();
    }
    this.GetStaffBranchId();
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    async GetList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };

      const response1 = await this.$axios.get(
        "general-setting/list?section=" + "citizenship",
        { headers }
      );
      if (response1.data.code == 200 || response1.data.code == "200") {
        this.citizenshiplist = response1.data.list;
      } else {
        this.citizenshiplist = [];
      }
      const response2 = await this.$axios.get(
        "general-setting/list?section=" + "gender",
        { headers }
      );
      if (response2.data.code == 200 || response2.data.code == "200") {
        this.genderlist = response2.data.list;
      } else {
        this.genderlist = [];
      }
      const response3 = await this.$axios.get(
        "general-setting/list?section=" + "type-of-nric",
        { headers }
      );
      if (response3.data.code == 200 || response3.data.code == "200") {
        this.nrictypelist = response3.data.list;
      } else {
        this.nrictypelist = [];
      }

      const response4 = await this.$axios.get(
        "general-setting/list?section=" + "race",
        { headers }
      );
      if (response4.data.code == 200 || response4.data.code == "200") {
        this.racelist = response4.data.list;
      } else {
        this.racelist = [];
      }
      const response5 = await this.$axios.get(
        "general-setting/list?section=" + "household-income-status",
        { headers }
      );
      if (response5.data.code == 200 || response5.data.code == "200") {
        this.householdlist = response5.data.list;
      } else {
        this.householdlist = [];
      }
      const response6 = await this.$axios.get(
        "general-setting/list?section=" + "religion",
        { headers }
      );
      if (response6.data.code == 200 || response6.data.code == "200") {
        this.religionlist = response6.data.list;
      } else {
        this.religionlist = [];
      }
      const response7 = await this.$axios.get(
        "general-setting/list?section=" + "education-level",
        { headers }
      );
      if (response7.data.code == 200 || response7.data.code == "200") {

        this.educationlist = response7.data.list;
      } else {
        this.educationlist = [];
      }

      const response8 = await this.$axios.get(
        "general-setting/list?section=" + "marital-status",
        { headers }
      );
      if (response8.data.code == 200 || response8.data.code == "200") {
        this.meritallist = response8.data.list;
      } else {
        this.meritallist = [];
      }

      const response9 = await this.$axios.get(
        "general-setting/list?section=" + "occupation-status",
        { headers }
      );
      if (response9.data.code == 200 || response9.data.code == "200") {
        this.employstatuslist = response9.data.list;
      } else {
        this.employstatuslist = [];
      }
      const response10 = await this.$axios.get("address/country/list", {
        headers,
      });
      if (response10.data.code == 200 || response10.data.code == "200") {
        this.countrylist = response10.data.list;
      } else {
        this.countrylist = [];
      }

    },
    NumbersOnly(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();;
      } else {
        return true;
      }
    },
    async resetModelValue() {
      if (this.nric_no != "") {
        this.error = null;
      } else {
        this.nric_no = "";
        this.error = null;
      }

      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "/general-setting/fetch",
        {
          setting_id: this.nric_type,
        },
        { headers }
      );
      if (response.data.code == 200) {
        this.nric_type_code = response.data.setting[0].code;
      } else {
        this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + this.error,
                  footer: ''
                });
      }


    },
    OnchangeCitizenship(value, id) {
      this.citizenship = id;
      this.citizentype = value;
      console.log("my val", this.citizentype);
    },

    async submitRegistration() {

      this.Isvalidate = true;
      try {
        if (!this.name_asin_nric) {
          this.errorList.push("Name (As In NRIC) is required.");
        }
        if (!this.citizenship) {
          this.errorList.push("Citizenship is required.");
        }
        if (this.citizenship) {
          if (this.citizentype == "Malaysian") {
            if (!this.nric_type) {
              this.errorList.push("NRIC Type is required.");
              this.Isvalidate = false;
            }
            if (!this.nric_no) {
              this.errorList.push("NRIC No is required.");
              this.Isvalidate = false;
            }
          } else if (this.citizentype == "Permanent Resident") {
            if (!this.nric_no1) {
              this.errorList.push("NRIC No is required.");
              this.Isvalidate = false;
            }
          } else {
            if (!this.passport_no) {
              this.errorList.push("Passport No is required.");
              this.Isvalidate = false;
            }
            if (!this.expiry_date) {
              this.errorList.push("Expiry Date is required.");
              this.Isvalidate = false;
            }
            if (!this.country_id) {
              this.errorList.push("Issuing Country is required.");
              this.Isvalidate = false;
            }
          }
        }
        if (!this.sex) {
          this.errorList.push("Gender is required.");
        }
        if (
          this.citizenship &&
          this.name_asin_nric &&
          this.sex &&
          this.Isvalidate
        )
          this.loader = true;
        const headers = {
          Authorization: "Bearer " + this.userdetails.access_token,
          Accept: "application/json",
          "Content-Type": "application/json",
        };
        let body = new FormData();
        body.append("added_by", this.userdetails.user.id);
        body.append("citizenship", this.citizenship);

        body.append("name_asin_nric", this.name_asin_nric);
        body.append("sex", this.sex);
        body.append("birth_date", this.birth_date);
        body.append("age", this.age);

        body.append("employment_status", this.employment_id);

        body.append("hospital_mrn_no", this.hospital_mrn_no);

        body.append("race_id", this.race_id);
        body.append("household_income", this.household_income);
        body.append("religion_id", this.religion_id);
        body.append("marital_id", this.marital_id);
        body.append("education_level", this.education_level);

        body.append("citizentype", this.citizentype);
        body.append("nric_type", this.nric_type);
        body.append("nric_no", this.nric_no);
        body.append("nric_no1", this.nric_no1);

        body.append("passport_no", this.passport_no);
        body.append("expiry_date", this.expiry_date);
        body.append("country_id", this.country_id);
        body.append("id", this.Id);
        body.append("Sharp", "1");
        body.append("branch_id", this.branch_id);
        body.append("update_at", moment().format("YYYY-MM-DD HH:mm:ss"))
        body.append("patient_need_triage_screening", "0");

        body.append("other_maritalList", this.other_maritalList);
        if (this.Id > 0) {
          const response = await this.$axios.post(
            "patient-registration/update",
            body,
            {
              headers,
            }
          );
          if (response.data.code == 200 || response.data.code == "200") {
            this.$swal.fire(
                  'Successfully Update',
                )
            setTimeout(() => {
              $("#updatepopup").modal("hide");
              this.$router.push({
                path: "/modules/Shharp/patient-summary",
                query: { id: this.Id },
              });
            }, 1000);

          } else {
            this.loader = false;
            this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + this.error,
                  footer: ''
                })
          }
        } else {
          const response = await this.$axios.post(
            "patient-registration/add",
            body,
            {
              headers,
            }
          );
          console.log("my data result", response.data);
          if (response.data.code == 200 || response.data.code == "200") {
            this.$swal.fire(
                  'Successfully Insert',
                )
            this.$router.push("/modules/Shharp/patients-list");
          } else {
            this.loader = false;
            this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + this.error,
                  footer: ''
                })
          }
        }
      }

      catch (e) {
        this.loader = false;
        this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + this.error,
                  footer: ''
                })
      }
    },
    OnnricNo() {
      if (this.nric_no.length == 12) {
        this.firstDob = String(this.nric_no).slice(0, 4);
        this.secondDob = String(this.nric_no).slice(4, 6);
        this.thirdDob = String(this.nric_no).slice(6, 8);
        this.birth_date = this.getDate(this.nric_no);
        this.error = null;

        var today = new Date();
        var birthDate = new Date(this.birth_date);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        this.age = age;
      } else {
        this.error = "Please Enter 12 Digit NRIC No";
      }
    },
    getDate(d) {
      return (
        (parseInt(d[0] + d[1]) < 30 ? "20" : "19") +
        d[0] +
        d[1] +
        "-" +
        d[2] +
        d[3] +
        "-" +
        d[4] +
        d[5]
      );
    },
    OnnricNo1() {
      if (this.nric_no1.length == 12) {
        this.birth_date = this.getDate(this.nric_no1);
        this.error = null;
      } else {
        this.error = "Please Enter 12 Digit NRIC No";
      }
    },
    OnnricNo3() {
      if (this.nric_no.length == 9 || this.nric_no.length == 8) {
        this.error = null;
      } else {
        this.error = "Please Enter a Valid Police ID";
      }
    },
    OnnricNo4() {
      if (this.nric_no.length < 8) {
        this.error = null;
      } else {
        this.error = "Please Enter a Valid Old NRIC No";
      }
    },
    OnAgeCalculation() {
      var today = new Date();
      var birthDate = new Date(this.birth_date);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      this.age = age;
    },
    async validateIC(data) {
      try {
        var no = this.nric_no1.slice(0, 6);
        var no1 = this.nric_no1.slice(6, 8);
        var no2 = this.nric_no1.slice(8, 12);
        var validate = no + "-" + no1 + "-" + no2;
        const headers = {
          Authorization: "Bearer " + this.userdetails.access_token,
          Accept: "application/json",
          "Content-Type": "application/json",
        };
        const response = await this.$axios.get(
          "patient-registration/validatePatientNric?ic=" + validate,
          { headers }
        );
        if (response.data.code == 200) {
          this.OnAgeCalculation();
        } else {
          this.error = "Patient with this NRIC is already registered.";
        }
      } catch (e) { }
    },
    async GetPatientdetails() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "patient-registration/getPatientRegistrationById",
        {
          id: this.Id,
        },
        { headers }
      );
      console.log("my pt details", response.data);

      if (response.data.code == 200) {

        this.citizentype = response.data.list[0].citizenships[0].section_value;
        this.passport_no = response.data.list[0].passport_no;
        this.age = response.data.list[0].age;
        this.birth_date = response.data.list[0].birth_date;
        this.citizenship = response.data.list[0].citizenship;

        this.education_level = response.data.list[0].education_level;
        this.household_income = response.data.list[0].household_income;
        this.expiry_date = response.data.list[0].expiry_date;
        this.hospital_mrn_no = response.data.list[0].hospital_mrn_no;
        this.employment_id = response.data.list[0].employment_status;
        this.Id = response.data.list[0].id;
        this.country_id = response.data.list[0].country_id;
        this.marital_id = response.data.list[0].marital_id;

        this.other_maritalList = response.data.list[0].other_maritalList;
        if (response.data.list[0].maritialstatus[0].section_value == "OTHERS") {
          this.otherMarital = true;
        } else {
          this.otherMarital = false;
        }

        this.sex = response.data.list[0].sex;
        this.race_id = response.data.list[0].race_id;
        this.religion_id = response.data.list[0].religion_id;



        this.name_asin_nric = response.data.list[0].name_asin_nric;
        this.nric_no = response.data.list[0].nric_no;
        if (this.nric_no) {
          this.nric_no = this.nric_no.replace("-", "");
          this.nric_no = this.nric_no.replace("-", "");
          this.nric_no1 = this.nric_no.replace("-", "");
          this.nric_no1 = this.nric_no.replace("-", "");
        }
        this.nric_type = response.data.list[0].nric_type;
        this.nric_type_code = response.data.list[0].typeic[0].code;


      } else {
        this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + this.error,
                  footer: ''
                });
      }
    },
    async GetStaffBranchId() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "staffDesignatioDetail/staffInchargeDetail",
        {
          added_by: this.userdetails.user.id,
        },
        { headers }
      );
      if (response.data.code == 200) {
        if (response.data.branch[0].branch_id) {
          this.branch_id = response.data.branch[0].branch_id;
        } else {
          this.branch_id = response.data.branch;
          console.log('my branchid333', this.branch_id);
        }

      } else {
        this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + this.error,
                  footer: ''
                });
      }
    },
    OnchangeMarital(event) {
      if (event.target.options[event.target.options.selectedIndex].text == "OTHERS") {
        this.otherMarital = true;
      } else {
        this.otherMarital = false;
      }
    },
  },
};
</script>
<style scoped>
/* .box {
  display: none;
} */
.selected-box {
  display: none;
}
</style>
