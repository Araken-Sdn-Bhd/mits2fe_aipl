<template>
  <div id="layoutSidenav">
      <CommonSidebar />
      <div id="layoutSidenav_content">
        <CommonHeader/>
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>Staff Management</h1>
          </div>
          <div class="card mb-4">
            <div class="card-header">
              <h4>Edit Mentari Staff</h4>
              <div class="icon-set">
                <a @click="gototransfer"
                  ><i class="far fa-share-square"></i
                ></a>
                <!-- <a href="#"><i class="far fa-trash-alt"></i></a> -->
              </div>
            </div>
            <div class="card-body">
              <form
                class="g-3 mt-3"
                method="post"
                @submit.prevent="onCreateStaff"
              >
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <label for="" class="form-label">Name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Name"
                      v-model="name"
                    />
                  </div>

                  <div class="col-md-4 mb-4">
                    <label for="" class="form-label">NRIC NO</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter NRIC NO"
                      v-model="nricno"
                    />
                  </div>
                </div>
                <!-- close-row -->

                <div class="row">
                  <div class="col-md-6 mb-4">
                    <label for="" class="form-label"
                      >Profession Registration NO.</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Profession Reg No."
                      v-model="professionregno"
                    />
                  </div>

                  <div class="col-md-4 mb-4">
                    <label for="" class="form-label">Role</label>
                    <select
                      v-model="roleId"
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option
                        v-for="role in rolelist"
                        v-bind:key="role.id"
                        v-bind:value="role.id"
                      >
                        {{ role.role_name }}
                      </option>
                    </select>
                  </div>
                </div>
                <!-- close-row -->

                <div class="row">
                  <div class="col-md-6 mb-4">
                    <label for="" class="form-label">Email Address</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Email Address"
                      v-model="email"
                    />
                  </div>

                  <div class="col-md-4 mb-4">
                    <label for="" class="form-label">Team</label>
                    <select
                      v-model="teamId"
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option
                        v-for="team in teamlist"
                        v-bind:key="team.id"
                        v-bind:value="team.id"
                      >
                        {{ team.service_name }}
                      </option>
                    </select>
                  </div>
                </div>
                <!-- close-row -->

                <div class="row">
                  <div class="col-md-6 mb-4">
                    <label for="" class="form-label">Contact NO.</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Contact No."
                      v-model="contactno"
                    />
                  </div>
                </div>
                <!-- close-row -->

                <div class="row">
                  <div class="col-md-4 mb-4">
                    <label for="" class="form-label">Designation</label>
                    <select
                      v-model="designationId"
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option
                        v-for="des in designationlist"
                        v-bind:key="des.id"
                        v-bind:value="des.id"
                      >
                        {{ des.section_value }}
                      </option>
                    </select>
                  </div>

                  <div class="col-md-4 mb-4">
                    <label for="" class="form-label"
                      >Designation Period(Start Date)</label
                    >
                    <input
                      type="date"
                      class="form-control"
                      v-model="designationstartdate"
                    />
                  </div>

                  <div class="col-md-4 mb-4">
                    <label for="" class="form-label"
                      >Designation Period(End Date)</label
                    >
                    <input
                      type="date"
                      class="form-control"
                      v-model="designationenddate"
                    />
                  </div>
                </div>
                <!-- close-row -->

                <div class="row">
                  <div class="col-md-4 mb-4">
                    <label for="" class="form-label">Mentari Location</label>
                    <select
                      v-model="branchId"
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option
                        v-for="brnch in branchlist"
                        v-bind:key="brnch.id"
                        v-bind:value="brnch.id"
                      >
                        {{ brnch.hospital_branch_name }}
                      </option>
                    </select>
                  </div>

                  <div class="col-md-4 mt-5">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                        v-model="personincharge"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Set As Person In Charge Mentari
                      </label>
                    </div>
                  </div>
                </div>
                <!-- close-row -->

                <div class="row">
                  <div class="col-md-4 mb-4">
                    <label for="" class="form-label">Start Date</label>
                    <input
                      type="date"
                      class="form-control"
                      v-model="startdate"
                    />
                  </div>

                  <div class="col-md-4 mb-4">
                    <label for="" class="form-label">End Date</label>
                    <input type="date" class="form-control" v-model="enddate" />
                  </div>
                </div>
                <!-- close-row -->
  <p v-if="errors.length">
<ul>
        <li style="color:red"  v-for='err in errors'
    :key='err' >
          {{ err }}
        </li>
      </ul>
        </p>
                <div class="form-foter mt-3">
                  <a
                    href="/Modules/Admin/staff-management"
                    class="btn btn-primary btn-text"
                    ><i class="far fa-arrow-alt-to-left"></i> Back</a
                  >
                  <div class="btn-right">
                    <button type="submit" class="btn btn-warning btn-text">
                      <i class="far fa-save"></i> Save
                    </button>
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
export default {
  components: { CommonSidebar, CommonHeader },
  name: "new-staff",
  data() {
    return {
      Id: 0,
      name: "",
      nricno: "",
      professionregno: "",
      roleId: 0,
      email: "",
      teamId: 0,
      contactno: "",
      designationId: 0,
      designationstartdate: "",
      designationenddate: "",
      branchId: 0,
      personincharge: 0,
      startdate: "",
      enddate: "",
      userdetails: null,
      rolelist: [],
      teamlist: [],
      designationlist: [],
      branchlist: [],
      errors: [],
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    let urlParams = new URLSearchParams(window.location.search);
    this.Id = urlParams.get("id");
    this.GetroleList();
    this.GetteamList();
    this.GetbranchList();
    this.GetdesignationList();
    this.Getdetails();
  },
  methods: {
    async Getdetails() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "staff-management/editDetailsById",
        { id: this.Id },
        { headers }
      );
      console.log("all resp", response.data);
      console.log("my details", response.data.list[0].name);
      if (response.data.code == 200 || response.data.code == "200") {
        // this.name = response.data.list[0].Staff_managementId;

        this.name = response.data.list[0].name;
        this.nricno = response.data.list[0].nric_no;
        this.branchId = response.data.list[0].branch_id;
        this.designationId = response.data.list[0].designation_id;
        this.designationstartdate =
          response.data.list[0].designation_period_start_date;
        this.designationenddate =
          response.data.list[0].designation_period_end_date;
        this.professionregno = response.data.list[0].registration_no;
        this.roleId = response.data.list[0].role_id;
        this.teamId = response.data.list[0].team_id;
        this.personincharge = response.data.list[0].is_incharge;
        this.contactno = response.data.list[0].contact_no;
        this.email = response.data.list[0].email;
        //    this.name = response.data.list[0].status;
        this.startdate = response.data.list[0].start_date;
        this.enddate = response.data.list[0].end_date;
      }
    },
    async GetroleList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get("roles/list", { headers });
      this.rolelist = response.data;
    },
    async GetteamList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get("service/list", {
        headers,
      });
      if (response.data.code == 200 || response.data.code == "200") {
        this.teamlist = response.data.list;
      } else {
        this.teamlist = [];
      }
    },
    async GetbranchList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get("hospital/branch-list", {
        headers,
      });
      if (response.data.code == 200 || response.data.code == "200") {
        this.branchlist = response.data.list;
      } else {
        this.branchlist = [];
      }
    },
    async GetdesignationList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get(
        "general-setting/list?section=" + "designation",
        {
          headers,
        }
      );
      if (response.data.code == 200 || response.data.code == "200") {
        this.designationlist = response.data.list;
      } else {
        this.designationlist = [];
      }
    },

    async onCreateStaff() {
      this.errors = [];
      if (!this.name) {
        this.errors.push("Name is required.");
      }
      if (!this.nricno) {
        this.errors.push("NRIC NO is required.");
      }
      if (!this.professionregno) {
        this.errors.push("Profession Registration NO is required.");
      }
      if (this.Role <= 0) {
        this.errors.push("Role  is required.");
      }
      if (!this.email) {
        this.errors.push("Email is required.");
      }
      if (this.teamId <= 0) {
        this.errors.push("Team  is required.");
      }
      if (!this.contactno) {
        this.errors.push("Contact NO is required.");
      }
      if (this.designationId <= 0) {
        this.errors.push("Designation  is required.");
      }
      if (!this.designationstartdate) {
        this.errors.push("Designation Period(Start Date) is required.");
      }
      if (!this.designationenddate) {
        this.errors.push("Designation Period(End Date) is required.");
      }
      if (this.branchId <= 0) {
        this.errors.push("Mentari Location is required.");
      }
      if (!this.contactno) {
        this.errors.push("Contact NO is required.");
      }
      if (!this.startdate) {
        this.errors.push("Start Date   is required.");
      }
      if (!this.enddate) {
        this.errors.push("End Date is required.");
      } else {
        if (this.personincharge > 0) {
          this.personincharge = 1;
        }
        const headers = {
          Authorization: "Bearer " + this.userdetails.access_token,
          Accept: "application/json",
          "Content-Type": "application/json",
        };
        let body = new FormData();
        body.append("id", this.Id);
        body.append("added_by", this.userdetails.user.id);
        body.append("name", this.name);
        body.append("nric_no", this.nricno);
        body.append("registration_no", this.professionregno);
        body.append("role_id", this.roleId);
        body.append("email", this.email);
        body.append("team_id", this.teamId);
        body.append("branch_id", this.branchId);
        body.append("contact_no", this.contactno);
        body.append("designation_id", this.designationId);
        body.append("is_incharge", this.personincharge);
        body.append("designation_period_start_date", this.designationstartdate);
        body.append("designation_period_end_date", this.designationenddate);
        body.append("start_date", this.startdate);
        body.append("end_date", this.enddate);
        const response = await this.$axios.post(
          "staff-management/update",
          body,
          {
            headers,
          }
        );
        if (response.data.code == 200 || response.data.code == "200") {
          this.$router.push("/Modules/Admin/staff-management");
        } else {
          this.$nextTick(() => {
            $("#errorpopup").modal("show");
          });
        }
      }
    },
    async gototransfer() {
      this.$router.push({
        path: "/Modules/Admin/mentari-staff-transfer",
        query: { id: this.Id },
      });
    },
  },
};
</script>
