<template>
  <div id="layoutSidenav">
    <VonSidebar />
    <div id="layoutSidenav_content">
      <VonHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>List of Appointment</h1>
            <!-- <a href="demographic.html"><i class="fal fa-plus"></i> Add</a> -->
          </div>

          <div class="card mb-4">
            <div class="card-body">
              <div class="search-table mt-3">
                <div class="row">
                  <div class="col-sm-4 mb-2">
                    <input type="date" class="form-control" />
                  </div>

                  <div class="col-sm-4 mb-2">
                    <select class="form-select">
                      <option selected="">Select Services</option>
                      <option value="1">...</option>
                    </select>
                  </div>

                  <div class="col-sm-4 ml-auto mb-2">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search By Name"
                    />
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
                    <th>Name</th>
                    <th>Appointment Date</th>
                    <th>Appo. Time</th>
                    <th>Assigned Doctor</th>
                    <th>Areas Of Involvement</th>
                    <th>Services</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Azmi Bin Saad</td>
                    <td>23/10/2021</td>
                    <td>8:30</td>
                    <td>Dr. Zahidah</td>
                    <td>Volunteer</td>
                    <td>Consultation/Counseling</td>
                    <td>
                      <a href="book-appointmen.html" class="edit">
                        <i class="far fa-edit"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div class="d-flex">
                <div class="ml-auto">
                  <a href="#" class="btn btn-danger btn-text"
                    ><i class="fad fa-vote-nay"></i> Reject</a
                  >
                  <a href="#" class="btn btn-warning btn-green btn-text"
                    ><i class="fad fa-check"></i> Approve</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <von-footer></von-footer>
    </div>
  </div>
</template>
<script>
import VonFooter from "../../../components/Von/VonFooter.vue";
import VonHeader from "../../../components/Von/VonHeader.vue";
import VonSidebar from "../../../components/Von/VonSidebar.vue";
export default {
  components: { VonSidebar, VonHeader, VonFooter },
  name: "von-list-of-appointment",
  data() {
    return {
      userdetails: null,
      errors: [],
      loader: false,
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
        scrollX: true,
        language: {
          paginate: {
            next: '<i class="fad fa-arrow-to-right"></i>', // or '→'
            previous: '<i class="fad fa-arrow-to-left"></i>', // or '←'
          },
        },
      });
    });
  },
  methods: {},
};
</script>

<style scoped>
.hide {
  display: none;
}
</style>