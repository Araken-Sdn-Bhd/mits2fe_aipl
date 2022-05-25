<template>
  <div id="layoutSidenav">
    <VonSidebar />
    <div id="layoutSidenav_content">
      <VonHeader />
      <main>
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
                    <select class="form-select">
                      <option selected="">Select Type of Application</option>
                      <option value="1">...</option>
                    </select>
                  </div>

                  <div class="col-sm-3 mb-2">
                    <select class="form-select">
                      <option selected="">Select Areas of Involvement</option>
                      <option value="1">...</option>
                    </select>
                  </div>

                  <div class="col-sm-3 mb-2">
                    <select class="form-select">
                      <option selected="">Select Services</option>
                      <option value="1">...</option>
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
                  <tr>
                    <td>1</td>
                    <td>Lee San Wei</td>
                    <td>Group</td>
                    <td>Outreach - Project Collaboration</td>
                    <td>Awareness Or Psychoeducation</td>
                    <td>013.7165780</td>
                    <td>leesanwei@gmail.com</td>
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
import VonFooter from "../../../components/Von/VonFooter.vue";
import VonHeader from "../../../components/Von/VonHeader.vue";
import VonSidebar from "../../../components/Von/VonSidebar.vue";
export default {
  components: { VonSidebar, VonHeader, VonFooter },
  name: "collaboratiob-record",
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