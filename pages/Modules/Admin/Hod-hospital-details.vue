<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>System Setting</h1>
          </div>
          <div class="card mb-4">
            <div class="card-header icon-title">
              <a href="#"><i class="fa fa-info"></i></a>
              <h4>HOD PSYCHIATRIST & HOSPITAL DETAILS</h4>
            </div>
            <div class="card-body">
              <nav>
                <ul class="nav nav-tab" id="nav-tab" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      data-bs-toggle="tab"
                      href="#nav-home"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                      ><i class="fa fa-user-lock"></i> Hospital Details</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      href="#nav-profile"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                      ><i class="fa fa-ban"></i> HOD Psychiatrist Details</a
                    >
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div class="tab-content border-0" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
            >
              <div class="card mb-4">
                <div class="card-header bg-transparent">
                  <h4>Hospital Details </h4>
                </div>
                <div class="card-body">
                  <table class="info-table" width="100%" v-if="HospitalDetails">
                    <thead>
                      <tr>
                        <th width="40%"></th>
                        <th width="60%"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Hospital Name</td>
                        <td>{{ HospitalDetails.name }}</td>
                      </tr>

                      <tr>
                        <td>Hospital Code</td>
                        <td>{{ HospitalDetails.code }}</td>
                      </tr>

                      <tr>
                        <td>Hospital Prefix</td>
                        <td>{{ HospitalDetails.prefix }}</td>
                      </tr>

                      <tr>
                        <td>Hospital Address</td>
                        <td>
                          <p v-if="HospitalDetails.address1">{{ HospitalDetails.address1 }}</p>
                          <p v-if="HospitalDetails.address2">{{ HospitalDetails.address2 }}</p>
                          <p v-if="HospitalDetails.address3">{{ HospitalDetails.address3 }}</p>
                        </td>
                      </tr>

                      <tr>
                        <td>PostCode</td>
                        <td>{{ HospitalDetails.postcode }}</td>
                      </tr>

                      <tr>
                        <td>City</td>
                        <td>{{ HospitalDetails.city }}</td>
                      </tr>

                      <tr>
                        <td>State</td>
                        <td>{{ HospitalDetails.state }}</td>
                      </tr>
                      <tr>
                        <td>Contact No. (Mobile)</td>
                        <td>{{ HospitalDetails.contact }}</td>
                      </tr>

                      <tr>
                        <td>Contact No. (Office)</td>
                        <td>{{ HospitalDetails.contact }}</td>
                      </tr>
                      <tr>
                        <td>Email</td>
                        <td>{{ HospitalDetails.email }}</td>
                      </tr>
                    </tbody>
                  </table>
                  <br><br>
                  <div class="form-foter mt-3">
                <button @click="back" type="button" class="btn btn-primary btn-fill btn-md">
                    <i class="fa fa-step-backward"/> &nbsp; Back
                </button>
              </div>
                </div>
              </div>
            </div>

            <div class="tab-pane fade" id="nav-profile" role="tabpanel">
              <div class="card mb-4">
                <div class="card-header bg-transparent">
                  <h4>HOD Psychiatrist Details</h4>
                </div>
                <div class="card-body">
                  <table class="info-table" width="100%" v-if="Hoddetails">
                    <thead>
                      <tr>
                        <th width="40%"></th>
                        <th width="60%"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>HOD Name</td>
                        <td>{{ Hoddetails.name }}</td>
                      </tr>

                      <tr>
                        <td>Gender</td>
                        <td>{{ Hoddetails.gender }}</td>
                      </tr>

                      <tr>
                        <td>Citizenship</td>
                        <td>{{ Hoddetails.citizenship_name }}</td>
                      </tr>

                      <tr>
                        <td>NRIC NO. / Passport</td>
                        <td>{{ Hoddetails.nric }}</td>
                      </tr>

                      <tr>
                        <td>Religion</td>
                        <td>{{ Hoddetails.religion }}</td>
                      </tr>

                      <tr>
                        <td>Designation</td>
                        <td>{{ Hoddetails.designation_name }}</td>
                      </tr>

                      <tr>
                        <td>Email</td>
                        <td>{{ Hoddetails.email }}</td>
                      </tr>
                      <tr>
                        <td>Contact No. (Mobile)</td>
                        <td>{{ Hoddetails.contact_mobile }}</td>
                      </tr>

                      <tr>
                        <td>Contact No. (Office)</td>
                        <td>{{ Hoddetails.contact_office }}</td>
                      </tr>
                    </tbody>
                  </table>
                  <br><br>
                  <div class="form-foter mt-3">
                <button @click="back" type="button" class="btn btn-primary btn-fill btn-md">
                    <i class="fa fa-step-backward"/> &nbsp; Back
                </button>
              </div>
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
import CommonHeader from '../../../components/CommonHeader.vue';
import CommonSidebar from '../../../components/CommonSidebar.vue';
export default {
  components: { CommonSidebar, CommonHeader },
  name: "Hod-hospital-details",
  data() {
    return {
      Hoddetails: null,
      HospitalDetails: null,
      userdetails: null,
      id: 0,
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    let urlParams = new URLSearchParams(window.location.search);
    this.id = urlParams.get("id");
    this.getdetails();
  },
  methods: {
    back() {
            this.$router.go(-1);
        },
    async getdetails() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get("/hospital/list/" + this.id, {
        headers,
      });
      console.log("my data", response.data);
      if (response.data.code == 200 || response.data.code == "200") {
        this.HospitalDetails = response.data.list.hospital;
        this.Hoddetails = response.data.list.psychiatrist;
      } else {
        this.HospitalDetails = {};
        this.psychiatrist = {};
      }
    },
  },
};
</script>
