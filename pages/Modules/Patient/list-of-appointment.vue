<template>
  <div id="layoutSidenav">
    <PatientLoginSidebar />
    <div id="layoutSidenav_content">
      <PatientLoginHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>List of Appointment Request</h1>
          </div>

          <div class="card mb-4">
            <div class="card-body">
              <div class="search-table">
                <div class="row">
                  <div class="col-sm-5 mt-2 mb-3 search-box">
                    <div class="input-group">
                      <span class="input-group-text" id="basic-addon1">
                        <i class="far fa-search"></i>
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search by Name/NRIC"
                        v-model="search"
                        @keydown="searchText2"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <!-- search-table -->
              <table class="table table-striped data-table" style="width: 100%">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>NRIC/Passport</th>
                    <th>Contact NO.</th>
                    <th>Email</th>
                    <th>Date</th>
                    <!-- <th>Action</th> -->
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(app, index) in list" :key="index">
                    <td>{{ index+1 }}</td>
                    <td>{{ app.name }}</td>
                    <td>{{ app.nric_or_passportno }}</td>
                    <td>{{ app.contact_no }}</td>
                    <td>{{ app.email }}</td>
                    <td>{{ app.created_at }}</td>
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
import PatientHeader from "../../../components/Patient/Patient_Header.vue";
import PatientSidebar from "../../../components/Patient/Patient_Sidebar.vue";
export default {
  components: {
    PatientSidebar,
    PatientHeader,
  },
  name: "list-of-appointment",
  data() {
    return {
      userdetails: null,
      list: [],
      alllist: [],
      token: "",
      search: "",
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    if (this.userdetails) {
      this.token = this.userdetails.access_token;
    }
  },
  mounted() {
    const headers = {
      Authorization: "Bearer " + this.token,
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    const axios = require("axios").default;
    axios
      .get(
        `${this.$axios.defaults.baseURL}`+"appointment-request/get",
        { headers }
      )
      .then((resp) => {
        this.list = resp.data.list;
        this.alllist = resp.data.list;
        $(document).ready(function () {
          $(".data-table").DataTable({
            searching: false,
            bLengthChange: false,
            bInfo: false,
            autoWidth: false,
            responsive: true,
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
    searchText2() {
      this.list = this.alllist.filter((notChunk) => {
        return (
          notChunk.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
          notChunk.nric_or_passportno
            .toLowerCase()
            .indexOf(this.search.toLowerCase()) > -1
        );
      });
    },
  },
};
</script>