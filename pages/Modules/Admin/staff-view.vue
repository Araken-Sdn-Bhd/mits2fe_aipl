<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>Staff Management</h1>
          </div>
          <div class="card mb-4">
            <div class="card-header">
              <h4>Mentari Staff Detail</h4>
              <div class="icon-set">
                <a  @click="gotoedit" title="edit record"
                  ><i class="fa fa-edit"></i
                ></a>
                <a @click="gototransfer" title="transfer staff"
                  ><i class="fa fa-share-square"></i
                ></a>
              </div>
            </div>
            <div class="card-body">
              <table
                class="info-table event-info mt-3"
                width="100%"
                v-if="staffdetail"
              >
                <thead>
                  <tr>
                    <th width="40%"></th>
                    <th width="60%"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>{{ staffdetail.name }}</td>
                  </tr>

                  <tr>
                    <td>NRIC NO</td>
                    <td>{{ staffdetail.nric_no }}</td>
                  </tr>

                  <tr>
                    <td>Designation</td>
                    <td>{{ staffdetail.designation_name }}</td>
                  </tr>

                  <tr>
                    <td>Designation Period(Start Date)</td>
                    <td>{{ staffdetail.designation_period_start_date }}</td>
                  </tr>

                  <tr>
                    <td>Designation Period(End Date)</td>
                    <td>{{ staffdetail.designation_period_end_date }}</td>
                  </tr>

                  <tr>
                    <td>Profession Registration NO.</td>
                    <td>{{ staffdetail.registration_no }}</td>
                  </tr>

                  <tr>
                    <td>Role</td>
                    <td>{{ staffdetail.role_name }}</td>
                  </tr>

                  <tr>
                    <td>Team</td>
                    <td>{{ staffdetail.service_name }}</td>
                  </tr>

                  <tr>
                    <td>Location</td>
                    <td>{{ staffdetail.hospital_branch_name }}</td>
                  </tr>

                  <tr>
                    <td>Person In Charge</td>
                    <td v-if="staffdetail.is_incharge==1">Yes</td>
                    <td v-if="staffdetail.is_incharge==0">No</td>
                  </tr>

                  <tr>
                    <td>Contact No</td>
                    <td>{{ staffdetail.contact_no }}</td>
                  </tr>

                  <tr>
                    <td>Email Address</td>
                    <td>{{ staffdetail.email }}</td>
                  </tr>

                  <tr>
                    <td>Account Active</td>
                    <td v-if="staffdetail.status==1">Active</td>
                    <td v-if="staffdetail.status==0">Non-active account</td>
                  </tr>

                  <tr>
                    <td>Start Date</td>
                    <td>{{ staffdetail.start_date }}</td>
                  </tr>

                  <tr>
                    <td>End Date</td>
                    <td>{{ staffdetail.end_date }}</td>
                  </tr>
                </tbody>
              </table>

              <div class="form-foter mt-3">
                <button @click="back" type="button" class="btn btn-primary btn-fill btn-md">
                    <i class="fa fa-step-backward"/> &nbsp; Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import CommonHeader from '../../../components/CommonHeader.vue';
import CommonSidebar from '../../../components/CommonSidebar.vue';
export default {
  components: { CommonSidebar, CommonHeader },
  name: "staff-transfer",
  setup() {},
  data() {
    return {
      Id: 0,
      url:"",
      userdetails: null,
      staffdetail: null,
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    let urlParams = new URLSearchParams(window.location.search);
    this.Id = urlParams.get("id");
    this.getDetails();
  },
  methods: {
    async getDetails() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "staff-management/getDetailsById",
        { id: this.Id },
        {
          headers,
        }
      );
      console.log("list", response.data);
      if (response.data.code == 200 || response.data.code == "200") {
        this.staffdetail = response.data.list[0];
      } else {
        this.staffdetail = [];
      }
    },
    async gotoedit(){
     this.$router.push({
        path: "/modules/Admin/edit-staff",
        query: { id: this.Id },
      });
    },
    async gototransfer(){
     this.$router.push({
        path: "/modules/Admin/mentari-staff-transfer",
        query: { id: this.Id },
      });
    },
     async deletestaff() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "staff-management/remove",
        {
          added_by: this.userdetails.user.id,
          id: this.Id,
        },
        { headers }
      );
      if (response.data.code == 200) {
        this.$router.push("/modules/Admin/staff-management");
      } else {this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + JSON.stringify(response.data.message),
                  footer: ''
                });
      }
    },
    back() {
      this.$router.go(-1);
    },
  },
};
</script>
