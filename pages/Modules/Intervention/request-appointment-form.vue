<template>
  <div id="layoutSidenav">
      <CommonSidebar />

    <div id="layoutSidenav_content">
        <CommonHeader />
      <main>
        <Loader v-if="loader" />

        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>Book Appointment</h1>
            <!-- <a href="#"><i class="fal fa-plus"></i> Add</a> -->
          </div>

          <div class="card mb-4">
            <div class="card-body">
              <form class="mt-3" method="post" @submit.prevent="OnBookApointment">
                <div class="row mb-3">
                  <label class="col-sm-3 col-form-label">MENTARI</label>
                  <div class="col-sm-9">
                    <select
                      v-model="branch"
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option
                        v-for="brnch in BranchList"
                        v-bind:key="brnch.id"
                        v-bind:value="brnch.id"
                      >
                        {{ brnch.hospital_branch_name }}
                      </option>
                    </select>
                  </div>
                </div>
                <!-- row -->

                <div class="row mb-3">
                  <label class="col-sm-3 col-form-label"
                    >Name<span>*</span></label
                  >
                  <div class="col-sm-9">
                    <input type="text" class="form-control" v-model="name" />
                  </div>
                </div>
                <!-- row -->

                <div class="row mb-3">
                  <label class="col-sm-3 col-form-label">NRIC</label>
                  <div class="col-sm-9">
                    <input type="text" class="form-control" v-model="nric" />
                  </div>
                </div>
                <!-- row -->

                <div class="row mb-3">
                  <label class="col-sm-3 col-form-label"
                    >Contact No.<span>*</span></label
                  >
                  <div class="col-sm-9">
                    <input
                      type="text"
                      class="form-control"
                      v-model="contactno"
                    />
                  </div>
                </div>
                <!-- row -->

                <div class="row mb-3">
                  <label class="col-sm-3 col-form-label">Address</label>
                  <div class="col-sm-9">
                    <input
                      type="text"
                      class="form-control"
                      v-model="address1"
                    />
                    <input
                      type="text"
                      class="form-control mt-3"
                      v-model="address2"
                    />
                  </div>
                </div>
                <!-- row -->

                <div class="row mb-3">
                  <label class="col-sm-3 col-form-label"
                    >Email<span>*</span></label
                  >
                  <div class="col-sm-9">
                    <input type="email" class="form-control" v-model="email" />
                  </div>
                </div>
                <!-- row -->
<p v-if="errorList.length">
                          <ul>
                           <li style="color:red"  v-for='err in errorList' :key='err' >
                           {{ err }}
                             </li>
                        </ul>
                       </p>
                <div class="d-flex">
                  <div class="ml-auto">
                    <button type="submit" class="btn btn-success btn-text"
                      ><i class="fad fa-paper-plane"></i> Send</button
                    >
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
import CommonHeader from '../../../components/CommonHeader.vue';
import CommonSidebar from '../../../components/CommonSidebar.vue';
export default {
  components: { CommonSidebar, CommonHeader },
  name: "request-appointment-form",
  head: {
    script: [
      {
        src: "/app/js/bootstrap.bundle.min.js",
        body: true,
        crossorigin: "anonymous",
      },
      {
        src: "/app/js/jquery-3.5.1.js",
        body: true,
        crossorigin: "anonymous",
      },
      {
        src: "/app/js/scripts.js",
        body: true,
        crossorigin: "anonymous",
      },
    ],
  },
  data() {
    return {
      userdetails: null,
      errorList: [],
      loader: false,
      branch: "",
      name: "",
      nric: "",
      contactno: "",
      address1: "",
      address2: "",
      email: "",
      BranchList: [],
      userId: 0,
      token: "",
      Id: 0,
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.GetBranchList();
    if (this.userdetails) {
      this.userId = this.userdetails.user.id;
      this.token = this.userdetails.access_token;
    }
    let urlParams = new URLSearchParams(window.location.search);
    this.Id = urlParams.get("id");
    if (this.Id) {
      this.GetPatientdetails();
    }
  },
  methods: {
    async GetBranchList() {
      const headers = {
        Authorization: "Bearer " + this.token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get("hospital/branch-list", {
        headers,
      });
      if (response.data.code == 200 || response.data.code == "200") {
        this.BranchList = response.data.list;
      } else {
        this.BranchList = [];
      }
    },
    async OnBookApointment() {
      this.errorList = [];
      try {
        if (!this.branch) {
          this.errorList.push("Branch is required");
        }
        if (!this.name) {
          this.errorList.push("Name is required");
        }
        if (!this.nric) {
          this.errorList.push("NRIC is required");
        }
        if (!this.contactno) {
          this.errorList.push("Contact No is required");
        }
        if (!this.address1) {
          this.errorList.push("Address 1 No is required");
        }
        if (!this.address2) {
          this.errorList.push("Address 2 No is required");
        }
        if (!this.email) {
          this.errorList.push("Email is required");
        }
        if (
          this.branch &&
          this.name &&
          this.nric &&
          this.contactno &&
          this.address1 &&
          this.address2 &&
          this.email
        ) {
          this.loader = true;
          const headers = {
            Authorization: "Bearer " + this.token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          const response = await this.$axios.post(
            "/appointment-request/add",
            {
              patient_mrn_id: this.userId,
              branch_id: this.branch,
              name: this.name,
              nric_or_passportno: this.nric,
              contact_no: this.contactno,
              address: this.address1,
              address1: this.address2,
              email: this.email,
            },
            { headers }
          );
          if (response.data.code == 200) {
            this.loader = false;
            this.$router.push("/modules/Intervention/list-of-appointment");
          } else {
            this.loader = false;
            this.$nextTick(() => {
              $("#errorpopup").modal("show");
            });
          }
        }
      } catch (e) {}
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
      if (response.data.code == 200) {
        this.name = response.data.list[0].name_asin_nric;
         this.nric = response.data.list[0].nric_no;
      } else {
        window.alert("Something went wrong");
      }
    },
  },
};
</script>
