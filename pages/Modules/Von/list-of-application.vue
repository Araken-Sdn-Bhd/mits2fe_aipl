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
                        v-model="search"
                        @keyup="OnSearch"
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
                  <tr v-for="(app, index) in list" :key="index">
                    <td>
                      <input
                        type="checkbox"
                        name=""
                        v-on:click="Checkuser(app.id, $event)"
                      />
                    </td>
                    <td>{{ index + 1 }}</td>
                    <td>{{ app.name }}</td>
                    <td>{{ app.app_type }}</td>
                    <td>{{ app.area_of_involvment }}</td>
                    <td>{{ app.services }}</td>
                    <td>{{ app.phone_number }}</td>
                    <td>{{ app.email }}</td>
                    <td>{{ app.screening }}</td>
                    <td>
                      <a style="pointer:cursor;" @click="OnEdit(app)" class="edit">
                        <i class="far fa-edit"></i>
                      </a>

                      <a style="pointer:cursor;" @click="OnView(app)" class="view">
                        <i class="far fa-eye"></i>
                      </a>

                      <a @click="OnBook(app)" class="add">
                        <i class="far fa-plus"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div class="d-flex">
                <div class="ml-auto">
                  <a
                    v-on:click="OnApproverejectRequest(2)"
                    class="btn btn-danger btn-text"
                    ><i class="fad fa-vote-nay"></i> Reject</a
                  >
                  <a
                    v-on:click="OnApproverejectRequest(1)"
                    class="btn btn-warning btn-green btn-text"
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
      list: [],
      alllist: [],
      selected: [],
      companyId: 0,
      search: "",
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
      .get(
        `${this.$axios.defaults.baseURL}` + "von/list",

        { headers }
      )
      .then((resp) => {
        this.list = resp.data.list;
        this.alllist = resp.data.list;
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
    OnSearch() {
      if (this.search) {
        this.list = this.alllist.filter((notChunk) => {
          return (
            notChunk.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
          );
        });
      } else {
        this.list = this.alllist;
      }
    },
    GetList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const axios = require("axios").default;
      axios
        .get(
          `${this.$axios.defaults.baseURL}` + "von/list",

          { headers }
        )
        .then((resp) => {
          this.list = resp.data.list;
          this.alllist = resp.data.list;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    Checkuser(value, event) {
      if (event.target.checked) {
        this.selected.push(value);
      } else {
        if (this.selected.indexOf(value) != -1)
          this.selected.splice(this.selected.indexOf(value), 1);
      }
    },
    async OnApproverejectRequest(status) {
      try {
        this.loader = true;
        const headers = {
          Authorization: "Bearer " + this.userdetails.access_token,
          Accept: "application/json",
          "Content-Type": "application/json",
        };
        this.selected.forEach((value, index) => {
          const axios = require("axios").default;
          axios
            .post(
              `${this.$axios.defaults.baseURL}` + "von/set-status",
              { id: value, status: status.toString() },
              { headers }
            )

            .then((resp) => {
              console.log("reuslt", resp);
            });
        });
        this.loader = false;
        this.GetList();
        this.$nextTick(() => {
          $("#updatepopup").modal("show");
        });
      } catch (e) {
        this.loader = false;
        this.$nextTick(() => {
          $("#errorpopup").modal("show");
        });
      }
    },
    OnEdit(data) {
      if (data.app_type == "Individual") {
        this.$router.push({
          path: "/Modules/Von/edit-individual",
          query: { id: data.id },
        });
      } else if (data.app_type == "Group") {
         this.$router.push({
          path: "/Modules/Von/edit-group",
          query: { id: data.id },
        });
      } else {
         this.$router.push({
          path: "/Modules/Von/edit-organization",
          query: { id: data.id },
        });
      }
    },
    OnView(data) {
      if (data.app_type == "Individual") {
        this.$router.push({
          path: "/Modules/Von/view-individual",
          query: { id: data.id },
        });
      } else if (data.app_type == "Group") {
         this.$router.push({
          path: "/Modules/Von/view-group",
          query: { id: data.id },
        });
      } else {
         this.$router.push({
          path: "/Modules/Von/view-organization",
          query: { id: data.id },
        });
      }
    },
    OnBook(data){
      this.$router.push({
          path: "/Modules/Von/book-appointment",
          query: { section: data.id },
        });
    },
  },
};
</script>
