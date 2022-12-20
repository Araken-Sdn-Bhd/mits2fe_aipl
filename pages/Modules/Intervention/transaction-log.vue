<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>Transaction Log</h1>
          </div>

          <div class="card mb-4">
            <div class="card-body">
              <table class="table table-striped data-table display nowrap" style="width: 100%">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Date</th>
                    <th>Activities</th>
                    <th>Done By</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(log, index) in list" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ log.date }}</td>
                    <td>{{ log.activity }}</td>
                    <td>{{ log.name }}</td>
                    <td>{{ log.time }}</td>
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
import CommonHeader from '../../../components/CommonHeader.vue';
import CommonSidebar from '../../../components/CommonSidebar.vue';
import * as moment from "moment/moment";
export default {
  components: { CommonSidebar, CommonHeader },
  name: "transaction-log",
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
  },
  data() {
    return {
      userdetails: null,
      list: [],
      Id: 0,
    };
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
        `${this.$axios.defaults.baseURL}` +
          "patient-registration/getTransactionlog",{patient_id:this.Id},
        { headers }
      )
      .then((resp) => {
        this.list = resp.data.list;
        $(document).ready(function () {
          $(".data-table").DataTable({
            searching: false,
            bLengthChange: false,
            bInfo: false,
            autoWidth: false,
            // responsive: true,
            // scrollX: true,
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
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    let urlParams = new URLSearchParams(window.location.search);
    this.Id = urlParams.get("id");
  },
  methods:{
    formatetime(time) {
       const local = moment(time).format("hh:mm a");
      return local;
    },
  }
};
</script>
