<template>
  <div id="layoutSidenav">
    <VonSidebar />
    <div id="layoutSidenav_content">
      <VonHeader />
      <main>
        <Loader v-if="loader" />
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>List of Collaboration Record</h1>
            <!-- <a href="demographic.html"><i class="fal fa-plus"></i> Add</a> -->
          </div>

          <div class="card mb-4">
            <div class="card-body">
              <div class="search-table mt-2">
                <div class="row">
                  <div class="col-sm-3 mb-2">
                    <select
                      class="form-select"
                      v-model="section"
                      @change="Onseacrh"
                    >
                      <option value="">Select Type of Application</option>
                      <option value="individual">Individual</option>
                      <option value="group">Group</option>
                      <option value="organization">Organization</option>
                    </select>
                  </div>

                  <div class="col-sm-3 mb-2">
                    <select
                      class="form-select"
                      v-model="area_of_involvement"
                      @change="Onseacrh"
                    >
                      <option value="">Select Areas of Involvement</option>
                      <option value="Volunteerism">Volunteerism</option>
                      <option value="Outreach Project Collaboration">
                        Outreach Project Collaboration
                      </option>
                      <option value="Networking Make a Contribution">
                        Networking Make a Contribution
                      </option>
                    </select>
                  </div>

                  <div class="col-sm-3 mb-2">
                    <select
                      class="form-select"
                      v-model="service"
                      @change="Onseacrh"
                    >
                      <option value="">Select Services</option>
                      <option value="Work-based Rehabilitation">
                        Work-based Rehabilitation
                      </option>
                      <option value="Awareness Or Psychoeducation">
                        Awareness Or Psychoeducation
                      </option>
                      <option value="Recreational Therapy">
                        Recreational Therapy
                      </option>
                      <option value="Others">Others</option>
                    </select>
                  </div>

                  <div class="col-sm-3 mb-2 search-box">
                    <div class="input-group">
                      <span class="input-group-text" id="basic-addon1">
                        <i class="far fa-search"></i>
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search Name/Company Name"
                        v-model="name"
                        @keyup="Onseacrh"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <!-- search-table -->
              <table
                class="table table-striped data-table font-13"
                style="width: 100%"
              >
                <thead>
                  <tr>
                    <th>No</th>
                    <th style="min-width: 200px">Name/Company Name</th>
                    <th style="min-width: 200px">Type Of Application</th>
                    <th style="min-width: 200px">Areas Of Involvement</th>
                    <th style="min-width: 200px">Services</th>
                    <th style="min-width: 100px">Contact NO</th>
                    <th style="min-width: 200px">Email</th>
                    <th style="min-width: 50px">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(app, index) in list" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ app.name }}</td>
                    <td>{{ app.app_type }}</td>
                    <td>{{ app.area_of_involvment }}</td>
                    <td>{{ app.services }}</td>
                    <td>{{ app.phone_number }}</td>
                    <td>{{ app.email }}</td>
                    <td>
                      <a href="von-management-view.html" class="view">
                        <i class="far fa-eye"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <von-footer></von-footer>
    </div>
  </div>
</template>
<script>
import Loader from "../../../components/loader.vue";
import VonFooter from "../../../components/Von/VonFooter.vue";
import VonHeader from "../../../components/Von/VonHeader.vue";
import VonSidebar from "../../../components/Von/VonSidebar.vue";
export default {
  components: { VonSidebar, VonHeader, VonFooter, Loader },
  name: "list-of-application",
  data() {
    return {
      userdetails: null,
      list: [],
      name: "",
      section: "",
      area_of_involvement: "",
      service: "",
      loader: false,
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
  },
  mounted() {
    const headers = {
      Authorization: "Bearer " + this.userdetails.access_token,
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    const axios = require("axios").default;
    axios
      .post(
        `${this.$axios.defaults.baseURL}` + "von/search-collaboration-list",

        { headers }
      )
      .then((resp) => {
        this.list = resp.data.list;
        console.log("my lst", resp.data);
        $(document).ready(function () {
          $(".data-table").DataTable({
            searching: false,
            bLengthChange: false,
            bInfo: false,
            autoWidth: false,
            responsive: true,
            scrollX: true,
            language: {
              paginate: {
                next: '<i class="fad fa-arrow-to-right"></i>', // or '→'
                previous: '<i class="fad fa-arrow-to-left"></i>', // or '←'
              },
            },
          });
        });
      })
      .catch((err) => {
        console.error(err);
      });
  },
  methods: {
    async Onseacrh() {
      this.loader = true;
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "von/search-collaboration-list",
        {
          name: this.name,
          section: this.section,
          area_of_involvement: this.area_of_involvement,
          service: this.service,
        },
        { headers }
      );
      console.log("search response", response.data);
      if (response.data.code == 200) {
        this.loader = false;
        this.list = response.data.list;
      } else {
        this.loader = false;
        this.list = response.data.list;
      }
    },
    OneditClick(id) {
      this.$router.push({
        path: "/Modules/Intervention/update-new-job",
        query: { id: id },
      });
    },
  },
};
</script>