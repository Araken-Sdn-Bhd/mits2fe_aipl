<template>
  <div id="layoutSidenav">
    <VonSidebar />
    <div id="layoutSidenav_content">
      <VonHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>List of VON Application</h1>
            <!-- <a href="demographic.html"><i class="fal fa-plus"></i> Add</a> -->
          </div>

          <div class="card mb-4">
            <div class="card-body">
              <div class="search-table mt-2">
                <div class="row">
                  <div class="col-sm-4 mb-3 search-box">
                    <div class="input-group">
                      <span class="input-group-text" id="basic-addon1">
                        <i class="far fa-search"></i>
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search By Name/Company Name"
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
                    <th></th>
                    <th>No</th>
                    <th style="min-width: 200px">Name/Company Name</th>
                    <th style="min-width: 200px">Type Of Application</th>
                    <th style="min-width: 200px">Areas Of Involvement</th>
                    <th style="min-width: 200px">Services</th>
                    <th style="min-width: 200px">Contact NO</th>
                    <th style="min-width: 200px">Email</th>
                    <th style="min-width: 200px">Screening Done</th>
                    <th style="min-width: 100px">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><input type="checkbox" name="" /></td>
                    <td>1</td>
                    <td>Lee San Wei</td>
                    <td>Group</td>
                    <td>Outreach - Project Collaboration</td>
                    <td>Awareness Or Psychoeducation</td>
                    <td>013.7165780</td>
                    <td>leesanwei@gmail.com</td>
                    <td>Yes</td>
                    <td>
                      <a href="von-management-edit.html" class="edit">
                        <i class="far fa-edit"></i>
                      </a>

                      <a href="von-management-view.html" class="view">
                        <i class="far fa-eye"></i>
                      </a>

                      <a href="book-appointmen.html" class="add">
                        <i class="far fa-plus"></i>
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
  name: "list-of-application",
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