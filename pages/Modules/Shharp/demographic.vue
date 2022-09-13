<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>Demographic</h1>
            <!-- <a href="#"><i class="fal fa-plus"></i> Add</a> -->
          </div>

          <div class="card mb-4">
            <div class="card-body">
              <form class="pd-15">
                <div class="row mb-3">
                  <label class="col-sm-4 col-form-label"
                    >Patient's Name (As in NRIC)<small>*</small></label
                  >
                  <div class="col-sm-8">
                    <input type="text" class="form-control" v-model="name_asin_nric"/>
                  </div>
                </div>
                <!-- row-close -->

                <div class="row mb-3">
                  <label class="col-sm-4 col-form-label"
                    >Citizenship<small>*</small></label
                  >
                  <div class="col-sm-8">
                    <div class="radio">
                      <div
                        class="form-check form-check-inline"
                        v-for="(ct, i) in citizenshiplist"
                        :key="i"
                      >
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          v-bind:id="'ct' + i"
                          v-bind:value="ct.id"
                          v-model="citizenship"
                          @change="OnchangeCitizenship(ct.section_value, ct.id)"
                        />
                        <label class="form-check-label" v-bind:for="'ct' + i">{{
                          ct.section_value
                        }}</label>
                      </div>
                    </div>

                    <!-- DIV-SHOW -->
                    <div
                      class="malaysian box"
                      v-if="citizentype == 'Malaysian'"
                    >
                      <div class="row mb-3">
                        <div class="col-sm-6">
                          <label class="form-label"
                            >NRIC Type<small>*</small></label
                          >
                          <select class="form-select" v-model="nric_type">
                            <option value="">Please Select NRIC Type</option>
                            <option
                              v-for="mar in nrictypelist"
                              v-bind:key="mar.id"
                              v-bind:value="mar.id"
                            >
                              {{ mar.section_value }}
                            </option>
                          </select>
                        </div>

                        <div class="col-sm-6">
                          <label class="form-label"
                            >NRIC No<small>*</small></label
                          >
                          <input
                            type="number"
                            class="form-control"
                            @keyup="OnnricNo"
                            placeholder="Enter NRIC No"  v-model="nric_no"
                          />
                          
                        </div>
                      </div>
                    </div>
                    <!-- malaysian -->

                    <div
                      class="permanent-resident box"
                      v-if="citizentype == 'Permanent Resident'"
                    >
                      <div class="row mb-3">
                        <div class="col-sm-6">
                          <label class="form-label"
                            >NRIC No<small>*</small></label
                          >
                          <input
                            type="number"
                            class="form-control"
                            placeholder="xxxxxx-xx-xxxx"
                            @keyup="OnnricNo1"
                            v-model="nric_no1"
                          />
                          <Error :message="error" v-if="error" />
                        </div>
                      </div>
                    </div>
                    <!-- permanent -->

                    <div
                      class="foreigner box"
                      v-if="citizentype == 'Foreigner'"
                    >
                      <div class="row mb-3">
                        <div class="col-sm-4">
                          <label class="form-label"
                            >Passport No<small>*</small></label
                          >
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Enter Passport No"
                            v-model="passport_no"
                          />
                        </div>
                        <div class="col-sm-4">
                          <label class="form-label"
                            >Expiry Date<small>*</small></label
                          >
                          <input type="date" class="form-control"  v-model="expiry_date"/>
                        </div>
                        <div class="col-sm-4">
                          <label class="form-label"
                            >Specify Country of Origin<small>*</small></label
                          >
                          <select class="form-select" v-model="country_id">
                            <option value="">Please Select Country</option>
                            <option
                              v-for="cnt in countrylist"
                              v-bind:key="cnt.id"
                              v-bind:value="cnt.id"
                              
                            >
                              {{ cnt.country_name }}
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <!-- foreigner -->
                  </div>
                </div>
                <!-- row-close -->

                <div class="row mb-3">
                  <label class="col-sm-4 col-form-label"
                    >Hospital’s MRN<small>*</small></label
                  >
                  <div class="col-sm-4">
                    <input type="text" class="form-control" v-model="hospital_mrn_no"/>
                  </div>
                </div>
                <!-- row-close -->

                <div class="row mb-3">
                  <label class="col-sm-4 col-form-label">Date of Birth</label>
                  <div class="col-sm-4">
                    <input type="date" @change="OnAgeCalculation" class="form-control" v-model="birth_date"/>
                    <Error :message="yearError" v-if="yearError" />
                  </div>
                </div>
                <!-- row-close -->

                <div class="row mb-3">
                  <label class="col-sm-4 col-form-label">Age</label>
                  <div class="col-sm-4">
                    <input type="text" class="form-control" v-model="age" disabled/>
                  </div>
                </div>
                <!-- row-close -->

                <div class="row mb-3">
                  <label class="col-sm-4 col-form-label"
                    >Employment Status</label
                  >
                  <div class="col-sm-4">
                    <select class="form-select" aria-label="" v-model="employment_id">
                      <option value="">Please Select</option>
                      <option
                        v-for="rce in employstatuslist"
                        v-bind:key="rce.id"
                        v-bind:value="rce.id"
                      >
                        {{ rce.section_value }}
                      </option>
                    </select>
                  </div>
                </div>
                <!-- row-close -->

                <div class="row mb-3">
                  <label class="col-sm-4 col-form-label">Sex</label>
                  <div class="col-sm-4">
                    <div class="radio">
                      <div
                        class="form-check form-check-inline"
                        v-for="(gn, i) in genderlist"
                        :key="i"
                      >
                        <input
                          class="form-check-input"
                          type="radio"
                          name="Sex"
                          v-bind:id="'gn' + i"
                          v-bind:value="gn.id"
                          v-model="sex"
                        />
                        <label class="form-check-label" v-bind:for="'gn' + i">{{
                          gn.section_value
                        }}</label>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- row-close -->

                <div class="row mb-3">
                  <label class="col-sm-4 col-form-label">Ethnic Group</label>
                  <div class="col-sm-4">
                    <select class="form-select select-others" aria-label="" v-model="race_id">
                      <option value="">Please Select</option>
                      <option
                        v-for="rce in racelist"
                        v-bind:key="rce.id"
                        v-bind:value="rce.id"
                      >
                        {{ rce.section_value }}
                      </option>
                    </select>
                  </div>
                  <!-- SHOW_DIV -->
                  <div class="col-sm-4 others selected-box">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Please Specify"
                    />
                  </div>
                </div>
                <!-- row-close -->

                <div class="row mb-3">
                  <label class="col-sm-4 col-form-label"
                    >Household Income Status(monthly)</label
                  >
                  <div class="col-sm-4">
                    <select class="form-select ethnic-group" aria-label="" v-model="household_income">
                      <option value="">Please Select</option>
                      <option
                        v-for="rce in householdlist"
                        v-bind:key="rce.id"
                        v-bind:value="rce.id"
                      >
                        {{ rce.section_value }}
                      </option>
                    </select>
                  </div>
                </div>
                <!-- row-close -->

                <div class="row mb-3">
                  <label class="col-sm-4 col-form-label">Religion</label>
                  <div class="col-sm-4">
                    <select class="form-select select-others" v-model="religion_id">
                      <option value="">Please Select</option>
                      <option
                        v-for="rce in religionlist"
                        v-bind:key="rce.id"
                        v-bind:value="rce.id"
                      >
                        {{ rce.section_value }}
                      </option>
                    </select>
                  </div>
                  <!-- SHOW_DIV -->
                  <div class="col-sm-4 religion-Others selected-box">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Please Specify"
                    />
                  </div>
                </div>
                <!-- row-close -->

                <div class="row mb-3">
                  <label class="col-sm-4 col-form-label">Marital Status</label>
                  <div class="col-sm-4">
                    <select class="form-select select-others" v-model="marital_id">
                      <option value="">Please Select</option>
                      <option
                        v-for="rce in meritallist"
                        v-bind:key="rce.id"
                        v-bind:value="rce.id"
                      >
                        {{ rce.section_value }}
                      </option>
                    </select>
                  </div>
                  <!-- SHOW_DIV -->
                  <div class="col-sm-4 marital-Others selected-box">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Please Specify"
                    />
                  </div>
                </div>
                <!-- row-close -->

                <div class="row mb-3">
                  <label class="col-sm-4 col-form-label"
                    >Highest Education</label
                  >
                  <div class="col-sm-4">
                    <select class="form-select select-others" v-model="education_level">
                      <option value="">Please Select</option>
                      <option
                        v-for="rce in educationlist"
                        v-bind:key="rce.id"
                        v-bind:value="rce.id"
                      >
                        {{ rce.section_value }}
                      </option>
                    </select>
                  </div>
                  <!-- SHOW_DIV -->
                  <div class="col-sm-4 education-Others selected-box">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Please Specify"
                    />
                  </div>
                </div>
                <!-- row-close -->
  <p v-if="errorList.length">
<ul>
        <li style="color:red"  v-for='err in errorList'
    :key='err' >
          {{ err }}
        </li>
      </ul>
        </p>
                <div class="d-flex align-items-center mt-3">
                  <!--<div class="form-check mr-auto">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="gridCheck" v-model="IAgree"
                    />
                    <label class="form-check-label" for="gridCheck">
                      I agree to the terms and condition<span>*</span>
                    </label>
                  </div>-->
                
                  <a v-if="!Id"
                  @click="submitRegistration"
                 class="btn btn-warning btn-text ml-auto"
                    ><i class="far fa-save"></i> Save</a
                  >
                  <a v-if="Id"
                  @click="submitRegistration"
                 class="btn btn-warning btn-text ml-auto"
                    ><i class="far fa-save"></i> Update</a
                  >
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
      racelist: [],
      religionlist: [],
      meritallist: [],
      educationlist: [],
      genderlist: [],
      citizenship: "",
      name_asin_nric: "",
      sex: "",
      birth_date: "",
      age: "",
      mobile_no: "",
      house_no: "",
      hospital_mrn_no: "",
      services_type: "",
      race_id: "",
      religion_id: "",
      marital_id: "",
      education_level: "",
      household_income: "",
      employment_id: "",
      nric_type: "",
      nric_no: "",
      passport_no: "",
      expiry_date: "",
      errorList: [],
      userdetails: null,
      citizentype: "",
      citizenshiplist: [],
      employstatuslist: [],
      Isvalidate: true,
      Id: 0,
      //IAgree: false,
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
                // $(".selected-box").not("." + optionValue).hide();
                $("." + optionValue).show();
              } else {
                // $(".selected-box").hide();
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
  },
  methods: {
    async GetList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const counry = await this.$axios.get("address/country/list", {
        headers,
      });
      if (counry.data.code == 200 || counry.data.code == "200") {
        this.countrylist = counry.data.list;
      } else {
        this.countrylist = [];
      }
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
      const nricty = await this.$axios.get(
        "general-setting/list?section=" + "type-of-nric",
        { headers }
      );
      if (nricty.data.code == 200 || nricty.data.code == "200") {
        this.nrictypelist = nricty.data.list;
      } else {
        this.nrictypelist = [];
      }

      const race = await this.$axios.get(
        "general-setting/list?section=" + "race",
        { headers }
      );
      if (race.data.code == 200 || race.data.code == "200") {
        this.racelist = race.data.list;
      } else {
        this.racelist = [];
      }
      const household = await this.$axios.get(
        "general-setting/list?section=" + "household-income-status",
        { headers }
      );
      if (household.data.code == 200 || household.data.code == "200") {
        this.householdlist = household.data.list;
      } else {
        this.householdlist = [];
      }
      const religion = await this.$axios.get(
        "general-setting/list?section=" + "religion",
        { headers }
      );
      if (religion.data.code == 200 || religion.data.code == "200") {
        this.religionlist = religion.data.list;
      } else {
        this.religionlist = [];
      }
      const martial = await this.$axios.get(
        "general-setting/list?section=" + "marital-status",
        { headers }
      );
      if (martial.data.code == 200 || martial.data.code == "200") {
        this.meritallist = martial.data.list;
      } else {
        this.meritallist = [];
      }

      const higedu = await this.$axios.get(
        "general-setting/list?section=" + "education-level",
        { headers }
      );
      if (higedu.data.code == 200 || higedu.data.code == "200") {
        this.educationlist = higedu.data.list;
      } else {
        this.educationlist = [];
      }
      const employstatus = await this.$axios.get(
        "general-setting/list?section=" + "employment-status",
        { headers }
      );
      if (employstatus.data.code == 200 || employstatus.data.code == "200") {
        this.employstatuslist = employstatus.data.list;
      } else {
        this.employstatuslist = [];
      }
      // employment-status
    },
    OnchangeCitizenship(value, id) {
      this.citizenship = id;
      this.citizentype = value;
      console.log("my val", this.citizentype);
    },
    async submitRegistration() {
      this.Isvalidate = true;
      try {
        //if (this.IAgree) {
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
              } else {
                if (this.nric_no.length != 12) {
                  this.errorList.push("Please Enter 12 Digit NRIC No.");
                  this.Isvalidate = false;
                }
              }
            } else if (this.citizentype == "Permanent Resident") {
              if (!this.nric_no1) {
                this.errorList.push("NRIC No is required.");
                this.Isvalidate = false;
              } else {
                this.nric_no = this.nric_no1;
                if (this.nric_no.length != 12) {
                  this.errorList.push("Please Enter 12 Digit NRIC No.");
                  this.Isvalidate = false;
                }
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
          if (!this.birth_date) {
            this.errorList.push("Birth date is required.");
          }
          // if (!this.hospital_mrn_no) {
          //   this.errorList.push("Hospital MRN is required.");
          // }
          if(this.birth_date.length > 10){
            this.errorList.push("Year is Invalid.");
          }
          if (!this.age) {
            this.errorList.push("Age is required.");
          }
          if (!this.employment_id) {
            this.errorList.push("Employment is required.");
          }
          if (!this.race_id) {
            this.errorList.push("Ethnic is required.");
          }
          if (!this.household_income) {
            this.errorList.push("Household Income is required.");
          }
          if (!this.religion_id) {
            this.errorList.push("Religion is required.");
          }
          if (!this.marital_id) {
            this.errorList.push("Maritial is required.");
          }
          if (!this.education_level) {
            this.errorList.push("Education is required.");
          }
          if (
            this.citizenship &&
            this.name_asin_nric &&
            this.sex &&
            this.birth_date &&
            // this.hospital_mrn_no &&
            this.age &&
            this.race_id &&
            this.household_income &&
            this.religion_id &&
            this.marital_id &&
            this.education_level &&
            this.employment_id &&
            this.Isvalidate
          ) {
            var no = this.nric_no.slice(0, 6);
            var no1 = this.nric_no.slice(6, 8);
            var no2 = this.nric_no.slice(8, 12);
            this.nric_no = no + "-" + no1 + "-" + no2;
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

            body.append("nric_type", this.nric_type);
            body.append("nric_no", this.nric_no);

            body.append("passport_no", this.passport_no);
            body.append("expiry_date", this.expiry_date);
            body.append("country_id", this.country_id);
            body.append("id", this.Id);
            body.append("patient_need_triage_screening" ,"0");
            body.append("Sharp" ,"1");
            if (this.Id > 0) {
              const response = await this.$axios.post(
                "patient-registration/update",
                body,
                {
                  headers,
                }
              );
              if (response.data.code == 200 || response.data.code == "200") {
                 this.$nextTick(() => {
                  $("#updatepopup").modal("show");
                });
                setTimeout(() => {
                   $("#updatepopup").modal("hide");
                 this.$router.push({
                  path: "/Modules/Shharp/patient-summary",
                  query: { id: this.Id },
                }); 
                }, 1000);
                
              } else {
                this.loader = false;
                this.$nextTick(() => {
                  $("#errorpopup").modal("show");
                });
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
                window.alert("Patient is successfully registered");
                this.$router.push("/Modules/Shharp/patients-list");
              } else {
                this.loader = false;
                this.$nextTick(() => {
                  $("#errorpopup").modal("show");
                });
              }
            }
          }
        //}else{
        //   this.errorList.push("Please agree with term & condition");
        //}
      } catch (e) {
        this.loader = false;
        this.$nextTick(() => {
          $("#errorpopup").modal("show");
        });
      }
    },
    OnnricNo() {
      if (this.nric_no.length == 12) { 
        this.errorNric = null;
      } else{
        this.errorNric = "Please Enter 12 Digit NRIC No";
      }
    },
    OnnricNo1() {
      if (this.nric_no1.length == 12) {
        this.error = null;
      } else {
        this.error = "Please Enter 12 Digit NRIC No";
      }
    },
    OnAgeCalculation() {
     
      var today = new Date();
      var birthDate = new Date(this.birth_date);
      var age = today.getFullYear() - birthDate.getFullYear();
      if(this.birth_date.length > 10){
        this.yearError = "Please Enter Valid Year";
      }else if(this.birth_date.length <= 10){
        this.yearError = null;
        var m = today.getMonth() - birthDate.getMonth();
          if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
          }
      this.age = age;
      }
    

      
      
      //window.alert(age);
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
        this.mintari_mrn_no = response.data.list[0].mintari_mrn_no;

        this.name_asin_nric = response.data.list[0].name_asin_nric;
        this.nric_no = response.data.list[0].nric_no;
        if (this.nric_no) {
          this.nric_no = this.nric_no.replace("-", "");
          this.nric_no = this.nric_no.replace("-", "");
          this.nric_no1 = this.nric_no.replace("-", "");
          this.nric_no1 = this.nric_no.replace("-", "");
        }
        this.nric_type = response.data.list[0].nric_type;

        this.passport_no = response.data.list[0].passport_no;
        this.patient_mrn = response.data.list[0].patient_mrn;
        this.postcode = response.data.list[0].postcode;
        this.race_id = response.data.list[0].race_id;

        this.religion_id = response.data.list[0].religion_id;
        this.salutation_id = response.data.list[0].salutation_id;

        this.sex = response.data.list[0].sex;

        if (response.data.list[0].citizenship == 1) {
          this.citizentype = "Malaysian";
        } else if (response.data.list[0].citizenship == 2) {
          this.citizentype = "Permanent Resident";
        } else {
          this.citizentype = "Foreigner";
        }
      } else {
        window.alert("Something went wrong");
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