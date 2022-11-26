<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>Staff Management</h1>
            <!-- <a href="#"><i class="fal fa-plus"></i> Add</a> -->
          </div>
          <div class="row">
            <div class="card mb-4">
              <div class="card-body">
                <ul class="sub-tab">
                  <li class="active"><a href="#">New Mentari User</a></li>
                </ul>
                <div class="content-subtab">
                  <form
                    class="g-3 mt-3"
                    method="post"
                    @submit.prevent="onCreateStaff"
                  >
                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <label for="" class="form-label">Name<span style="color:red">*</span></label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter Name"
                          v-model="name"
                        />
                      </div>

                      <div class="col-md-4 mb-4">
                        <label for="" class="form-label">NRIC No.<span style="color:red">*</span></label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter NRIC NO"
                          v-model="nricno" @change="CheckNric($event)"
                        />
                         <Error :message="nricerror" v-if="nricerror" />
                      </div>

                    </div>
                    <!-- close-row -->

                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <label for="" class="form-label"
                          >Profession Registration No.</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter Profession Reg No."
                          v-model="professionregno"
                        />
                      </div>

                      <div class="col-md-4 mb-4">
                        <label for="" class="form-label">Role<span style="color:red">*</span></label>
                        <select
                          v-model="roleId"
                          class="form-select"
                          aria-label="Default select example"
                        >
                        <option value="0">Please Select</option>
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
                        <label for="" class="form-label">Email Address<span style="color:red">*</span></label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter Email Address"
                          v-model="email"
                        />
                      </div>
                      <div class="col-md-4 mb-4">
                        <label for="" class="form-label">Contact No.<span style="color:red">*</span></label>
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
                        <label for="" class="form-label">Designation<span style="color:red">*</span></label>
                        <select
                          v-model="designationId"
                          class="form-select"
                          aria-label="Default select example"
                        >
                        <option value="0">Please Select</option>
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
                          >Designation Period(Start Date)<span style="color:red">*</span></label
                        >
                        <input
                          type="date"
                          class="form-control"
                          v-model="designationstartdate"
                        />
                      </div>

                      <div class="col-md-4 mb-4">
                        <label for="" class="form-label"
                          >Designation Period(End Date)<span style="color:red">*</span></label
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
                        <label for="" class="form-label"
                          >Location<span style="color:red">*</span></label
                        >
                        <select
                          v-model="branchId"
                          class="form-select"
                          aria-label="Default select example"
                          @change="onSelectBranch($event)"
                        >
                        <option value="0">Please Select</option>
                          <option
                            v-for="brnch in branchlist"
                            v-bind:key="brnch.id"
                            v-bind:value="brnch.id"

                          >
                            {{ brnch.hospital_branch_name }}
                          </option>
                        </select>
                      </div>
                      <div class="col-md-4 mb-4">
                        <label for="" class="form-label">Team<span style="color:red">*</span></label>
                        <select
                          v-model="teamId"
                          class="form-select"
                          aria-label="Default select example"
                        >
                        <option value="0">Please Select</option>
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
                      <div class="col-md-4 mb-4">
                        <label for="" class="form-label">Start Date<span style="color:red">*</span></label>
                        <input
                          type="date"
                          class="form-control"
                          v-model="startdate"
                        />
                      </div>

                      <div class="col-md-4 mb-4">
                        <label for="" class="form-label">End Date<span style="color:red">*</span></label>
                        <input
                          type="date"
                          class="form-control"
                          v-model="enddate"
                        />
                      </div>

                      <div class="col-md-4 mb-4">
                        <label for="formFile" class="form-label"
                          >Supported Document<span style="color:red">*</span></label
                        >
                        <input
                          class="form-control"
                          type="file"
                          id="formFile"
                          style="line-height: 32px"
                            @change="selectFile"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-4">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                            v-model="personincharge"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            Set As Person In Charge Mentari
                          </label>
                        </div>
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
        <br>
        <br>
                    <div class="form-foter mt-3">
                      <a
                        href="/app/modules/Admin/staff-management"
                        class="btn btn-primary btn-text"
                        ><i class="fa fa-arrow-alt-to-left"></i> Back</a
                      >
                      <div class="btn-right" id="hidebutton" ref="hidebutton">
                        <button type="submit" class="btn btn-warning btn-text">
                          <i class="fa fa-save"></i> Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
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
      file: null,
      userdetails: null,
      rolelist: [],
      teamlist: [],
      designationlist: [],
      branchlist: [],
      errors: [],
      nricerror: null,
      SidebarAccess:null,
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.SidebarAccess = JSON.parse(localStorage.getItem("SidebarAccess"));
    this.GetroleList();
    this.GetbranchList();
    this.GetdesignationList();
  },
  mounted(){
     if(this.SidebarAccess!=1){
          this.$refs.hidebutton.classList.add("hide");
    }
  },
  methods: {
    async GetroleList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get("roles/list", { headers });
      this.rolelist = response.data.list;
    },
    async GetteamList(branchId) {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get("service/getServiceListByBranch?branchId=" + branchId, {
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
    selectFile(event) {
      this.file = event.target.files[0];
    },
    onSelectBranch(event) {
      this.GetteamList(this.branchId);
    },
    async onCreateStaff() {
      if (confirm("Are you sure you want to save this record ? ")) {
      this.errors = [];
      if (!this.name) {
        this.errors.push("Name is required.");
      }
      if (!this.nricno) {
        this.errors.push("NRIC NO is required.");
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
      if (!this.startdate) {
        this.errors.push("Start Date   is required.");
      }
      if (!this.enddate) {
        this.errors.push("End Date is required.");
      }
  
      console.log('this.name && this.nricno &&  this.Role && this.email &&this.teamId && this.contactno && this.designationId && this.designationstartdate && this.designationenddate &&this.branchId && this.startdate && this.enddate && !this.nricerror',this.name , this.nricno , this.Role , this.email ,
      this.teamId , this.contactno , this.designationId , this.designationstartdate , this.designationenddate ,
      this.branchId , this.startdate , this.enddate , !this.nricerror)
      if(this.name , this.nricno , this.roleId , this.email ,
      this.teamId , this.contactno , this.designationId , this.designationstartdate , this.designationenddate ,
      this.branchId , this.startdate , this.enddate , !this.nricerror) {
        if (this.personincharge > 0) {
          this.personincharge = 1;
        }
        const headers = {
          Authorization: "Bearer " + this.userdetails.access_token,
          Accept: "application/json",
          "Content-Type": "application/json",
        };
        let body = new FormData();
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
        body.append("document", this.file);
        const response = await this.$axios.post(
          "staff-management/addstaff",
          body,
          {
            headers,
          }
        );
        if (response.data.code == 200 || response.data.code == "200") {
          this.$nextTick(() => {
            $("#insertpopup").modal("show");
          });
        } else {
          this.$nextTick(() => {
            $("#errorpopup").modal("show");
          });
        }
      }
      }
    },
    async CheckNric(event) {
       console.log('my body',event.target.value);
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "staff-management/checknricno",{ nric_no: event.target.value },
        { headers }

      );
      console.log('response',response.data);
      if (response.data.code == 200) {
        this.nricerror = "NRIC No already exists";
      } else {
        this.nricerror = null;
      }
    },
  },
};
</script>
<style scoped>
.hide{
  display: none !important;
}
</style>
