<template>
  <div id="layoutSidenav">
    <Adminsidebar />
    <div id="layoutSidenav_content">
      <AdminHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>Occasion of Service</h1>
          </div>
          <div class="card mb-4" v-if="staffdetails">
            <div class="card-body">
              <div class="card-header icon-title">
                <a href="#"><i class="far fa-user-tie"></i></a>
                <h4>Staff Detail</h4>
              </div>

              <form class="g-3 mt-3">
                <div class="row">
                  <div class="col-md-3 mb-4">
                    <label for="" class="form-label"
                      >Profession Registrtion No.</label
                    >
                    <input type="text" class="form-control" v-model="staffdetails.registration_no" />
                  </div>

                  <div class="col-md-6 mb-4">
                    <label for="" class="form-label">Staff Name</label>
                    <input
                      type="text"
                      class="form-control"
                     v-model="staffdetails.name"
                    />
                  </div>

                  <div class="col-md-3 mb-4">
                    <label for="" class="form-label">Mentari Branch</label>
                    <input type="text" class="form-control" v-model="staffdetails.hospital_branch_name" />
                  </div>
                </div>
                <!-- close-row -->

                <div class="row">
                  <div class="col-md-4 mb-4">
                    <label for="" class="form-label">Start Date</label>
                    <input type="date" class="form-control" v-model="staffdetails.start_date" />
                  </div>

                  <div class="col-md-4 mb-4">
                    <label for="" class="form-label">End Date</label>
                    <input type="date" class="form-control" v-model="staffdetails.end_date" />
                  </div>
                </div>
                <!-- close-row -->
              </form>

              <table
                class="table table-striped data-table font-13"
                style="width: 100%"
              >
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Patient Category</th>
                    <th>From Time</th>
                    <th>HRS</th>
                    <th>Category Of Service</th>
                    <th>Complexity Of Service</th>
                    <th>Outcome</th>
                    <th>Location Of Service</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Outpatient</td>
                    <td>12/10/2021 12:00:00</td>
                    <td>2</td>
                    <td>Clinical Work/Procedure</td>
                    <td>Crisis Contact</td>
                    <td>Other</td>
                    <td>Selayang</td>
                    <td>
                      <a
                        href="occasion-of-service-editing-row.html"
                        class="edit"
                        ><i class="far fa-edit"></i
                      ></a>
                    </td>
                  </tr>
                </tbody>
              </table>
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
  name: "new-staff",
  data() {
    return {
      Id: 0,
      userdetails: null,
      staffdetails: null,
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    let urlParams = new URLSearchParams(window.location.search);
    this.Id = urlParams.get("id");
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
      if (response.data.code == 200 || response.data.code == "200") {
        this.staffdetails = response.data.list[0];
      }
    },
  },
};
</script>