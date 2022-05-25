<template>
  <div id="layoutSidenav">
    <PatientLoginSidebar />
    <div id="layoutSidenav_content">
      <PatientLoginHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>Transaction Log</h1>
          </div>

          <div class="card mb-4">
            <div class="card-body">
              <table class="table table-striped data-table" style="width: 100%">
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
                  <tr>
                    <td>1</td>
                    <td>19/8/2021</td>
                    <td>Register Patient</td>
                    <td>Dr.Zahidah</td>
                    <td>16:00PM</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>20/9/2021</td>
                    <td>Update Patient Demographic</td>
                    <td>Dr.Ali</td>
                    <td>09:00AM</td>
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
import PatientLoginSidebar from "../../../components/Patient/PatientLoginSidebar.vue";
import PatientLoginHeader from "../../../components/Patient/PatientLogin_Header.vue";
export default {
  components: { PatientLoginSidebar, PatientLoginHeader },
  name: "transaction-log",
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
  },
  data() {
    return {
      userdetails: null,
      list: [],
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
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
  },
};
</script>