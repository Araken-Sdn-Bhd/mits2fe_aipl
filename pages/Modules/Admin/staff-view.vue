<template>
  <div id="layoutSidenav">
    <Adminsidebar />
    <div id="layoutSidenav_content">
      <AdminHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>Staff Management</h1>
          </div>
          <div class="card mb-4">
            <div class="card-header">
              <h4>Mentari Staff Detail</h4>
              <div class="icon-set">
                <a  @click="gotoedit"
                  ><i class="far fa-edit"></i
                ></a>
                <a @click="gototransfer"
                  ><i class="far fa-share-square"></i
                ></a>
                <a @click="deletestaff"><i class="far fa-trash-alt"></i></a>
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
                    <td>{{ staffdetail.team_name }}</td>
                  </tr>

                  <tr>
                    <td>Location</td>
                    <td>{{ staffdetail.hospital_branch_name }}</td>
                  </tr>

                  <tr>
                    <td>Person In Charge</td>
                    <td>{{ staffdetail.is_incharge }}</td>
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
                    <td>{{ staffdetail.status }}</td>
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
                <a
                  href="/Modules/Admin/staff-management"
                  class="btn btn-primary btn-text"
                  ><i class="far fa-arrow-alt-to-left"></i> Back</a
                >
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import Adminsidebar from "../../../components/Admin/Adminsidebar.vue";
import AdminHeader from "../../../components/Admin/Admin_ToHeader.vue";
export default {
  components: { Adminsidebar, AdminHeader },
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
        path: "/Modules/Admin/edit-staff",
        query: { id: this.Id },
      });
    },
    async gototransfer(){
     this.$router.push({
        path: "/Modules/Admin/mentari-staff-transfer",
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
        this.$router.push('/Modules/Admin/staff-management');
      } else {
        this.$nextTick(() => {
          $("#errorpopup").modal("show");
        });
      }
    },
  },
};
</script>