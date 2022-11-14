<template>
  <div id="layoutSidenav">
    <CommonSidebar  />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <Loader v-if="loader"/>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>Job Offer Form</h1>
          </div>
          <div class="card mb-4">
            <div class="card-header icon-title">
              <a href="#"><i class="far fa-shield-alt"></i></a>
              <h4>View Job Details</h4>
            </div>
            <div class="card-body">
              <form class="mt-3" method="post" @submit.prevent="OnCreateJob">
                <div class="row mb-3">
                  <label for="inputEmail3" class="col-sm-4 col-form-label"
                    >Position Offered</label
                  >
                  <div class="col-sm-8">
                    <input
                      type="text"
                      class="form-control"
                      id="inputEmail3"
                      v-model="position_offered"
                      disabled="true"
                    />
                  </div>
                </div>
                <!-- row -->
                <div class="row mb-3">
                  <label for="inputEmail3" class="col-sm-4 col-form-label"
                    >Location of Position Offered</label
                  >
                  <div class="col-sm-8">
                    <input
                      type="text"
                      class="form-control mb-2"
                      v-model="position_location_1"
                      disabled="true"
                    />
                    <input
                      type="text"
                      class="form-control mb-2"
                      v-model="position_location_2"
                      disabled="true"
                    />
                    <input
                      type="text"
                      class="form-control mb-2"
                      v-model="position_location_3"
                      disabled="true"
                    />
                  </div>
                </div>
                <!-- row -->
                <div class="row mb-3">
                  <label for="inputEmail3" class="col-sm-4 col-form-label"
                    >Minimum Education</label
                  >
                  <div class="col-sm-8">
                    <select class="form-select" v-model="education_id" disabled="true">
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
                  <label for="inputEmail3" class="col-sm-4 col-form-label"
                    >Duration of Employment</label
                  >
                  <div class="col-sm-5">
                    <input
                      type="text"
                      class="form-control"
                      id="inputEmail3"
                      v-model="duration_of_employment"
                      disabled="true"
                    />
                  </div>
                  <div class="col-sm-3">month(s)</div>
                </div>
                <!-- row -->
                <div class="row mb-3 align-items-center">
                  <label for="inputEmail3" class="col-sm-4 col-form-label"
                    >Average salary offered</label
                  >
                  <div class="col-sm-1">RM</div>
                  <div class="col-sm-4">
                    <input
                      type="text"
                      class="form-control"
                      id="inputEmail3"
                      disabled="true"
                      v-model="salary_offered"
                    />
                  </div>
                  <div class="col-sm-3">per month</div>
                </div>
                <!-- row -->
                <div class="row mb-3">
                  <label for="inputEmail3" class="col-sm-4 col-form-label"
                    >Work Schedule</label
                  >
                  <div class="col-sm-8">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="Part time"
                        id="flexCheckDefault"
                        v-model="parttime"
                        @change="changeschedule('Part time')"
                        disabled="true"
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
                        v-model="fulltime"
                        @change="changeschedule('Full-time')"
                        disabled="true"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        Full-time
                      </label>
                    </div>
                  </div>
                </div>
                <!-- row -->
                <div class="row mb-3">
                  <label for="inputEmail3" class="col-sm-4 col-form-label"
                    >Does your company provide transport?</label
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
                        disabled="true"
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
                        disabled="true"
                      />
                      <label class="form-check-label" for="inlineRadio2"
                        >No</label
                      >
                    </div>
                  </div>
                </div>
                <!-- row -->
                <div class="row mb-3">
                  <label for="inputEmail3" class="col-sm-4 col-form-label"
                    >Does your company provide accommodation?</label
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
                        disabled="true"
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
                        disabled="true"
                      />
                      <label class="form-check-label" for="inlineRadio22"
                        >No</label
                      >
                    </div>
                  </div>
                </div>
                <!-- row -->
                <div class="row mb-3">
                  <label for="inputEmail3" class="col-sm-4 col-form-label"
                    >Work Requirement</label
                  >
                  <div class="col-sm-8 box-wr">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        disabled="true"
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
                        disabled="true"
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
                        disabled="true"
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
                        disabled="true"
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
                        disabled="true"
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
                        disabled="true"
                        value="other-wr" v-model="other"
                        id="flexCheck6"
                        @change="changeworkrequirement('Other')"
                      />
                      <label class="form-check-label" for="flexCheck6">
                        Other
                      </label>
                    </div>

                    <div class="other-wr" v-if="other">
                      <input
                        type="text"
                        disabled="true"
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
                  <label for="inputEmail3" class="col-sm-4 col-form-label"
                    >MENTARI</label
                  >
                  <div class="col-sm-8">
                    <select class="form-select" v-model="branch_id" disabled="true">
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
                  <label for="inputEmail33" class="col-sm-4 col-form-label"
                    >JOB AVAILABILITY</label
                  >
                  <div class="col-sm-8">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions1"
                        id="jobRadio1"
                        value="1"
                        v-model="job_availability"
                        disabled="true"
                      />
                      <label class="form-check-label" for="jobRadio1"
                        >AVAILABLE</label
                      >
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions1"
                        id="jobRadio2"
                        value="0"
                        v-model="job_availability"
                        disabled="true"
                      />
                      <label class="form-check-label" for="jobRadio2"
                        >NOT AVAILABLE</label
                      >
                    </div>
                  </div>
                </div>
                <br>
                <br>
                <div class="d-flex">
                  <button @click="back" type="button" class="btn btn-primary btn-fill btn-md">
                    <i class="fa fa-step-backward"/> &nbsp; Back
                </button>

                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <intervention-footer></intervention-footer>
    </div>
  </div>
</template>
<script>
import CommonHeader from '../../../components/CommonHeader.vue';
import CommonSidebar from '../../../components/CommonSidebar.vue';
export default {
  components: { CommonSidebar, CommonHeader },
  name: "view-job-detail",
  data() {
    return {
      userdetails: null,
      list: [],
      errorList: [],
      educationlist: [],
      type: "update",
      company_id: 1,
      position_offered: "",
      position_location_1: "",
      position_location_2: "",
      position_location_3: "",
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
      Id: 0,
      fulltime: "",
      parttime: "",
      SidebarAccess:null,
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.SidebarAccess = JSON.parse(localStorage.getItem("SidebarAccess"));
    $('.box-wr input[type="checkbox"]').click(function () {
      var inputValue = $(this).attr("value");
      $("." + inputValue).toggle();
    });
    this.GetList();
    let urlParams = new URLSearchParams(window.location.search);
    this.Id = urlParams.get("id");
    if (this.Id) {
      this.GetDetailsforEdit();
    } else {
      this.Id = 0;
    }
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    async GetDetailsforEdit() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "employer-job/view-detail",
        { id: this.Id },
        { headers }
      );
      console.log("my result", response.data);
      if (response.data) {
        this.position_offered = response.data[0].position;
        this.position_location_1 = response.data[0].location_address_1;
        this.position_location_2 = response.data[0].location_address_2;
        this.position_location_3 = response.data[0].location_address_3;
        this.education_id = response.data[0].education_id;
        this.duration_of_employment = response.data[0].duration_of_employment;
        this.salary_offered = response.data[0].salary_offered;
        this.work_schedule = response.data[0].work_schedule;
        this.is_transport = response.data[0].is_transport;
        this.is_accommodation = response.data[0].is_accommodation;
        this.branch_id = response.data[0].branch_id;
        if (this.work_schedule == "Part time") {
          this.parttime = this.work_schedule;
        } else {
          this.fulltime = this.work_schedule;
        }
        var jdata = JSON.parse(response.data[0].work_requirement);
        jdata.forEach((ele) => {
         this.work_requirement="val";
         if (ele["Labour (Heavy Lifting)"]==true) {
            this.labour = "Labour (Heavy Lifting)";
          }
          if (ele["Good Focus/Concentration"]==true) {
            this.goodfocus = "Good Focus/Concentration";
          }
          if (ele["Communication Skills"]==true) {
            this.communication = "Communication Skills";
          }
          if (ele["Reading"]==true) {
            this.reading = "Reading";
          }
          if (ele["Calculation"]==true) {
            this.calculation = "Calculation";
          }
          if (ele["Other"]) {
            this.other = "Other";
            this.workrequirementother=ele["WorkRequirement"]["Other"]
          }
        });
      } else {
        window.alert("Something went wrong");
      }
    },
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
    async OnCreateJob() {
      this.errorList = [];
      try {
        if (!this.position_offered) {
          this.errorList.push("Position Offered is required");
        }
        if (!this.position_location_1) {
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
        if (
          this.position_offered &&
          this.position_location_1 &&
          this.education_id &&
          this.duration_of_employment &&
          this.salary_offered &&
          this.work_schedule &&
          this.work_requirement &&
          this.branch_id
        ) {
          this.loader = true;
          console.log("work requirement", this.work_requirement);
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          const response = await this.$axios.post(
            "intervention-job/add",
            {
              added_by: this.userdetails.user.id,
              company_id: this.company_id,
              position_offered: this.position_offered,
              position_location_1: this.position_location_1,
              position_location_2: this.position_location_2,
              position_location_3: this.position_location_3,
              education_id: this.education_id,
              duration_of_employment: this.duration_of_employment,
              salary_offered: this.salary_offered,
              work_schedule: this.work_schedule,
              is_transport: this.is_transport,
              is_accommodation: this.is_accommodation,
              work_requirement: JSON.stringify([
                {
                  WorkRequirement: {
                    "Labour (Heavy Lifting)": this.labour,
                    "Good Focus/Concentration": this.goodfocus,
                    "Communication Skills": this.communication,
                    "Reading": this.reading,
                    "Calculation": this.calculation,
                    "Other": this.workrequirementother,
                  },
                },
              ]),
              branch_id: this.branch_id,
              job_availability: this.job_availability,
              type: this.type,
              job_id: this.Id,
            },
            { headers }
          );
          console.log("result", response.data);
          if (response.data.code == 200) {
            this.loader = false;
            this.$nextTick(() => {
              $("#updatepopup").modal("show");
            });
            this.$router.push("/modules/Intervention/list-of-job-offer");
          } else {
            this.loader = false;
            this.$nextTick(() => {
              $("#errorpopup").modal("show");
            });
          }
        }
      } catch (e) {
        this.loader = false;
      }
    },
    changeschedule(val) {
      this.work_schedule = val;
    },
    changeworkrequirement(val) {
      this.work_requirement = val;
    },
  },
};
</script>
