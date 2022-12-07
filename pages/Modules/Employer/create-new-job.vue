<template>
  <div id="layoutSidenav">
    <CommonSidebarEmployer  />
    <div id="layoutSidenav_content">
      <CommonHeaderEmployer />
      <main>
        <Loader v-if="loader"/>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>Job Offer Form</h1>
          </div>
          <div class="card mb-4">
            <div class="card-header icon-title">
              <a href="#"><i class="fa fa-shield-alt"></i></a>
              <h4>Create New Job</h4>
            </div>
            <div class="card-body">

                <div class="row">
                        <div class="col-sm-10">
                          <div class="mb-3">
                            <label class="form-label">Position Offered<small>*</small></label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Enter Position Name"
                              v-model="position_offered"
                            />
                          </div>
                        </div>

                </div>
                <div class="row">
                  <div class="col-sm-10">
                    <div class="mb-3">
                      <label class="form-label">Location of Position Offered<small>*</small></label>
                      <input
                        type="text"
                        class="form-control mb-2"
                        placeholder="Enter Street Address"
                        name="" v-model="location_address_1"
                      />
                      <input
                        type="text"
                        class="form-control mb-2"
                        placeholder="Enter Street Address"
                        name="" v-model="location_address_2"
                      />
                      <input
                        type="text"
                        class="form-control mb-2"
                        placeholder="Enter Street Address"
                        name="" v-model="location_address_3"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-4">
                    <div class="mb-3">
                      <label class="form-label">State<small>*</small></label>
                      <select
                        v-model="state_id"
                        class="form-select"
                        aria-label="Default select example"
                        @change="onSelectedState($event)"
                      >
                        <option value="0">Select</option>
                        <option
                          v-for="st in StateList"
                          v-bind:key="st.id"
                          v-bind:value="st.id"
                        >
                          {{ st.state_name }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="mb-3">
                      <label class="form-label">City<small>*</small></label>
                      <select
                        v-model="city_id"
                        @change="getPostcodeList($event)"
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option value="0">Select</option>
                        <option
                          v-for="ct in CityList"
                          v-bind:key="ct.city_name"
                          v-bind:value="ct.city_name"
                        >
                          {{ ct.city_name }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="mb-3">
                      <label class="form-label">Postcode<small>*</small></label>
                      <select
                        v-model="postcode"
                        class="form-select"
                        aria-label="Default Select example"
                      >
                        <option value="0">Select</option>
                        <option
                          v-for="ct in postcodelist"
                          v-bind:key="ct.id"
                          v-bind:value="ct.id"
                        >
                          {{ ct.postcode }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>


                <!-- row -->
                <div class="row mb-3">
                  <label  class="col-sm-4 form-label"
                    >Minimum Education<small>*</small></label
                  >
                  <div class="col-sm-6">
                    <select class="form-select" v-model="education_id">
                      <option value="0">Select Minimum Education</option>
                      <option
                        v-for="edu in educationlist"
                        v-bind:key="edu.id"
                        v-bind:value="edu.id"
                      >
                        {{ edu.section_value }}
                      </option>
                    </select>
                  </div>
                </div>
                <!-- row -->
                <div class="row mb-3 align-items-center">
                  <label class="col-sm-4 form-label">Duration of Employment<small>*</small></label
                  >
                  <div class="col-sm-5">
                    <input
                      type="text"
                      class="form-control"
                      id="inputEmail3"
                      v-model="duration_of_employment"
                    />
                  </div>
                  <div class="col-sm-3">month(s)</div>
                </div>
                <!-- row -->
                <div class="row mb-3 align-items-center">
                  <label class="col-sm-4 form-label">Average salary offered<small>*</small></label>
                  <div class="col-sm-1">RM</div>
                  <div class="col-sm-4">
                    <input
                      type="text"
                      class="form-control"
                      id="inputEmail3"
                      v-model="salary_offered"
                    />
                  </div>
                  <div class="col-sm-3">per month</div>
                </div>
                <!-- row -->
                <div class="row mb-3">
                  <label class="col-sm-4 form-label">Work Schedule<small>*</small></label
                  >
                  <div class="col-sm-8">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="Part time"
                        id="flexCheckDefault"
                        @change="changeschedule('Part time')"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Part time
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="Full-time"
                        id="flexCheckChecked"
                        @change="changeschedule('Full-time')"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        Full-time
                      </label>
                    </div>
                  </div>
                </div>
                <!-- row -->
                <div class="row mb-3">
                  <label class="col-sm-4 form-label"
                    >Does your company provide transport?<small>*</small></label
                  >
                  <div class="col-sm-8">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="1"
                        v-model="is_transport"
                      />
                      <label class="form-check-label" for="inlineRadio1"
                        >Yes</label
                      >
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="0"
                        v-model="is_transport"
                      />
                      <label class="form-check-label" for="inlineRadio2"
                        >No</label
                      >
                    </div>
                  </div>
                </div>
                <!-- row -->
                <div class="row mb-3">
                  <label  class="col-sm-4 form-label"
                    >Does your company provide accommodation?<small>*</small></label
                  >
                  <div class="col-sm-8">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOption"
                        id="inlineRadio11"
                        value="1"
                        v-model="is_accommodation"
                      />
                      <label class="form-check-label" for="inlineRadio11"
                        >Yes</label
                      >
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOption"
                        id="inlineRadio22"
                        value="0"
                        v-model="is_accommodation"
                      />
                      <label class="form-check-label" for="inlineRadio22"
                        >No</label
                      >
                    </div>
                  </div>
                </div>
                <!-- row -->
                <div class="row mb-3">
                  <label  class="col-sm-4 form-label"
                    >Work Requirement<small>*</small></label
                  >
                  <div class="col-sm-8 box-wr">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        v-model="labour" value="Labour (Heavy Lifting)"
                        @change="
                          changeworkrequirement('Labour (Heavy Lifting)')
                        "
                        id="flexCheck1"
                      />
                      <label class="form-check-label" for="flexCheck1">
                        Labour (Heavy Lifting)
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox" v-model="goodfocus" value="Good Focus/Concentration"
                        @change="
                          changeworkrequirement('Good Focus/Concentration')
                        "
                        id="flexCheck2"
                      />
                      <label class="form-check-label" for="flexCheck2">
                        Good Focus/Concentration
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox" v-model="communication" value="Communication Skills"
                        @change="changeworkrequirement('Communication Skills')"
                        id="flexCheck3"
                      />
                      <label class="form-check-label" for="flexCheck3">
                        Communication Skills
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox" v-model="reading" value="Reading"
                        @change="changeworkrequirement('Reading')"
                        id="flexCheck4"
                      />
                      <label class="form-check-label" for="flexCheck4">
                        Reading
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox" v-model="calculation" value="Calculation"
                        @change="changeworkrequirement('Calculation')"
                        id="flexCheck5"
                      />
                      <label class="form-check-label" for="flexCheck5">
                        Calculation
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="other-wr" v-model="other"
                        id="flexCheck6"
                        @change="changeworkrequirement('Other')"
                      />
                      <label class="form-check-label" for="flexCheck6">
                        Other
                      </label>
                    </div>

                    <div class="other-wr hide">
                      <input
                        type="text"
                        placeholder="Please specify"
                        class="form-control"
                        v-model="workrequirementother"
                        name=""
                      />
                    </div>
                  </div>
                </div>
                <!-- row -->
                <div class="row mb-3">
                  <label class="col-sm-4 form-label">MENTARI <small>*</small></label>
                  <div class="col-sm-6">
                    <select class="form-select" v-model="branch_id">
                      <option value="0">Please Select</option>
                      <option
                        v-for="brnch in list"
                        v-bind:key="brnch.id"
                        v-bind:value="brnch.id"
                      >
                        {{ brnch.hospital_branch_name }}
                      </option>
                    </select>
                  </div>
                </div>
                   <div class="row mb-3">
                  <!--<label for="inputEmail3" class="col-sm-4 col-form-label"
                    >Job Availability</label
                  >
                  <div class="col-sm-8">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio111"
                        value="1"
                        v-model="job_availability"
                      />
                      <label class="form-check-label" for="inlineRadio111"
                        >Available</label
                      >
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio222"
                        value="0"
                        v-model="job_availability"
                      />
                      <label class="form-check-label" for="inlineRadio222"
                        >Not Available</label
                      >
                    </div>
                  </div>-->
                </div>
                 <p v-if="errorList.length">
                          <ul>
                           <li style="color:red"  v-for='err in errorList' :key='err' >
                           {{ err }}
                             </li>
                        </ul>
                       </p>
                <!-- row -->
                <br>
                <br>

                <div class="d-flex">
                  <button @click="back" type="button" class="btn btn-primary btn-fill btn-md">
                    <i class="fa fa-step-backward"/> &nbsp; Back
                </button>
                  <button type="submit" class="btn btn-warning btn-text ml-auto btn-fill btn-md" v-on:click="OnCreateJob">
                    <i class="fa fa-save"></i> Save
                  </button>
                </div>

            </div>
          </div>
        </div>
      </main>
      <intervention-footer></intervention-footer>
    </div>
  </div>
</template>
<script>
import CommonSidebarEmployer from '../../../components/CommonSidebarEmployer.vue';
import CommonHeaderEmployer from '../../../components/CommonHeaderEmployer.vue';
export default {
  components: {CommonSidebarEmployer, CommonHeaderEmployer },
  name: "create-new-job",
  data() {
    return {
      userdetails: null,
      list: [],
      errorList: [],
      educationlist: [],
      CityList:[],
      StateList:[],
      postcodelist:[],
      state_id: 0,
      city_id: 0,
      postcode: "",
      type: "add",
      company_id: "",
      position_offered: "",
      location_address_1 : "",
      location_address_2: "",
      location_address_3: "",
      education_id: 0,
      duration_of_employment: 0,
      salary_offered: "",
      work_schedule: "",
      is_transport: 0,
      is_accommodation: 0,
      work_requirement: "",
      branch_id: 0,
      job_availability: 1,
      workrequirementother: "",
      loader: false,
      labour: "",
      goodfocus: "",
      communication: "",
      reading: "",
      calculation: "",
      other: "",
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.GetStateList();

    $('.box-wr input[type="checkbox"]').click(function () {
      var inputValue = $(this).attr("value");
      $("." + inputValue).toggle();
    });
    this.GetList();
  },
  methods: {
    async GetList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get("hospital/branch-list", {
        headers,
      });
      if (response.data.code == 200 || response.data.code == "200") {
        this.list = response.data.list;
      } else {
        this.list = [];
      }
      const response1 = await this.$axios.get(
        "general-setting/list?section=" + "education-level",
        { headers }
      );
      if (response1.data.code == 200 || response1.data.code == "200") {
        this.educationlist = response1.data.list;
      } else {
        this.educationlist = [];
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
        this.CityList =[];
        this.postcodelist = [];
      } else {
        this.StateList = [];
        this.CityList =[];
        this.postcodelist = [];
      }
    },
    async onSelectedState(event){
      const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "address/" + event.target.value + "/getCityList",
        { headers }
      );
      if (response.data.code == 200 || response.data.code == "200") {
        this.CityList = response.data.list;
        this.postcodelist = [];
      } else {
        this.CityList = [];
        this.postcodelist = [];
      }
    },
    async getPostcodeList(event) {

      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "address/" + event.target.value + "/getPostcodeListById",
        { headers }
      );
      if (response.data.code == 200 || response.data.code == "200") {
        this.postcodelist = response.data.list;
      } else {
        this.postcodelist = [];
      }

    },
    async getCity(){
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "address/" + this.state_id + "/getCityList",
        { headers }
      );
      if (response.data.code == 200 || response.data.code == "200") {

        this.CityList = response.data.list;
        this.postcodelist = [];
      } else {
        this.CityList = [];
        this.postcodelist = [];
      }
    },

    async getPostcode() {
      const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "address/" + this.city_id + "/getPostcodeListById",
        { headers }
      );
      if (response.data.code == 200 || response.data.code == "200") {
        this.postcodelist = response.data.list;
      } else {
        this.postcodelist = [];
      }

    },
    async OnCreateJob() {
      if (confirm("Are you sure you want to submit this entry")) {
      this.errorList = [];
      try {
        if (!this.position_offered) {
          this.errorList.push("Position Offered is required");
        }
        if (!this.location_address_1) {
          this.errorList.push("Location of Position Offered is required");
        }
        if (!this.education_id) {
          this.errorList.push("Minimum Education is required");
        }
        if (!this.duration_of_employment) {
          this.errorList.push("Duration of Employment is required");
        }
        if (!this.salary_offered) {
          this.errorList.push("Average salary offered is required");
        }
        if (!this.work_schedule) {
          this.errorList.push("Work Schedule is required");
        }
        if (!this.work_requirement) {
          this.errorList.push("Work Requirement is required");
        }
        if (!this.branch_id) {
          this.errorList.push("MENTARI is required");
        }
        if (!this.state_id) {
          this.errorList.push("State is required");
        }
        if (!this.postcode) {
          this.errorList.push("Postcode is required");
        }
        if (
          this.position_offered &&
          this.location_address_1 &&
          this.education_id &&
          this.duration_of_employment &&
          this.salary_offered &&
          this.work_schedule &&
          this.work_requirement &&
          this.branch_id &&
          this.state_id &&
          this.postcode
        )
        {
          this.loader = true;
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          const response = await this.$axios.post(
            "employer-job/add",
            {
              user_id: this.userdetails.user.id,
              position_offered: this.position_offered,
              location_address_1: this.location_address_1,
              location_address_2: this.location_address_2,
              location_address_3: this.location_address_3,
              education_id: this.education_id,
              duration_of_employment: this.duration_of_employment,
              salary_offered: this.salary_offered,
              work_schedule: this.work_schedule,
              is_transport: this.is_transport,
              is_accommodation: this.is_accommodation,
              branch_id: this.branch_id,
              state_id: this.state_id,
              city_id: this.postcode, // city share same id with postcode
              postcode: this.postcode,

              job_availability: this.job_availability,
              work_requirement: JSON.stringify([
                {
                    "Labour (Heavy Lifting)": this.labour,
                    "Good Focus/Concentration": this.goodfocus,
                    "Communication Skills": this.communication,
                    "Reading": this.reading,
                    "Calculation": this.calculation,
                    "Other": this.workrequirementother,
                },
              ]),

            },
            { headers }
          );
          console.log('my result',response.data);
          if (response.data.code == 200) {
            this.Id=response.data.id;
            this.loader = false;
            this.$nextTick(() => {
                $("#insertpopup").modal("show");
              });
              this.reset();
              this.$router.push("/modules/Employer/list-of-job-offer");
          } else {
            this.loader = false;
            this.$nextTick(() => {
              $("#errorpopup").modal("show");
            });
          }
        }
      } catch (e) {
        this.$nextTick(() => {
              $("#errorpopup").modal("show");
            });}
          }
    },

    reset(){
      this.position_offered="";
      this.location_address_1="";
      this.location_address_2="";
      this.location_address_3="";
      this.education_id="";
      this.duration_of_employment="";
      this.salary_offered="";
      this.work_schedule="";
      this.is_transport="";
      this.is_accommodation="";
      this.branch_id="";
      this.state_id="";
      this.city_id=""; // city share same id with postcode
      this.postcode="";
      this.labour="";
      this.goodfocus="";
      this.communication="";
      this.reading="";
      this.calculation="";
      this.workrequirementother="";

    },

    changeschedule(val) {
      this.work_schedule = val;
    },
    changeworkrequirement(val) {
      this.work_requirement = val;
    },

    back() {
      this.$router.go(-1);
    }
  },
};
</script>
</script>
<style scoped>
.hide {
  display: none;
}
</style>
