<template>
  <div id="layoutSidenav">
    <PatientLoginSidebar />
    <div id="layoutSidenav_content">
      <PatientLoginHeader />
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
                    <td>{{ index+1 }}</td>
                    <td>{{ patint.Date }}</td>
                    <td>{{ patint.Time }}</td>
                    <td>{{ patint.status }}</td>
                    <td>{{ patint.hospital_name }}</td>
                    <td>{{ patint.name_registering_officer }}</td>
                    <td>
                      <a href="#" class="view"><i class="far fa-eye"></i></a>
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
import PatientLoginSidebar from "../../../components/Patient/PatientLoginSidebar.vue";
import PatientLoginHeader from "../../../components/Patient/PatientLogin_Header.vue";
export default {
  components: { PatientLoginSidebar, PatientLoginHeader, PatientDetails },
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
        `${this.$axios.defaults.baseURL}`+"sharp-mgmt/list",
        {
          patient_id: this.Id,
        },
        { headers }
      )
      .then((resp) => {
        this.list = resp.data.Data;
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
};
</script>