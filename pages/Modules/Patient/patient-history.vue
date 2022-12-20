<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <div class="container-fluid px-4">
          <PatientDetails />
          <!-- card -->
          <div class="card mb-4">
            <div class="card-header">
              <h4>Shharp Registry History</h4>
            </div>
            <div class="card-body">
              <table class="table table-striped data-table" style="width: 100%">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Status</th>
                    <th>Hospital</th>
                    <th>Created By</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(patint, index) in list" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ patint.Date }}</td>
                    <td>{{ patint.Time }}</td>
                    <td>
                      <p v-if="patint.status">Completed</p>
                      <p v-if="!patint.status">Draft</p>
                    </td>
                    <td>{{ patint.hospital_name }}</td>
                    <td>{{ patint.name_registering_officer }}</td>
                    <td>
                      <a
                        style="cursor: pointer"
                        @click="onViewSharp(patint.id)"
                        class="view"
                        ><i class="fa fa-eye"></i
                      ></a>
                      <a
                        v-if="!patint.status"
                        style="cursor: pointer"
                        @click="onEditSharp(patint.id)"
                        class="edit"
                        ><i class="fa fa-edit"></i
                      ></a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- card -->
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import PatientDetails from "../../../components/Patient/PatientDetails.vue";
import CommonHeader from "../../../components/CommonHeader.vue";
import CommonSidebar from "../../../components/CommonSidebar.vue";
export default {
  components: { CommonSidebar, CommonHeader, PatientDetails },
  name: "patient-summary",
  data() {
    return {
      userdetails: null,
      errorList: [],
      list: [],
      Id: 0,
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    let urlParams = new URLSearchParams(window.location.search);
    this.Id = urlParams.get("id");
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
        `${this.$axios.defaults.baseURL}` + "sharp-mgmt/list",
        {
          patient_id: this.Id,
        },
        { headers }
      )
      .then((resp) => {
        this.list = resp.data.Data;
        console.log("list", this.list);
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
      .catch ((err) => {
        this.loader = false;
        this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + err,
                  footer: ''
                });

        console.error(err);
      });
  },
  methods: {
    onViewSharp(Id) {
      this.$router.push({
        path: "/modules/Patient/view-registry",
        query: { id: Id },
      });
    },
    onEditSharp(Id) {
      this.$router.push({
        path: "/modules/Intervention/update-registry",
        query: { id: Id },
      });
    },
  },
};
</script>
