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
                    <input
                      type="date"
                      class="form-control"
                      v-model="date"
                      @change="OnSearch"
                    />
                  </div>

                  <div class="col-sm-4 mb-2">
                    <select
                      class="form-select"
                      @change="OnSearch"
                      v-model="service"
                    >
                      <option value="">Select Service</option>
                      <option
                        v-for="slt in servicelist"
                        v-bind:key="slt.id"
                        v-bind:value="slt.id"
                      >
                        {{ slt.service_name }}
                      </option>
                    </select>
                  </div>

                  <div class="col-sm-4 ml-auto mb-2">
                    <input
                      type="text"
                      class="form-control"
                      v-model="name"
                      @keyup="OnSearch"
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
                    <th></th>
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
                    <td>{{ app.app_date }}</td>
                    <td>{{ app.app_time }}</td>
                    <td>{{ app.dr_name }}</td>
                    <td>{{ app.aoi }}</td>
                    <td>{{ app.service }}</td>
                    <td>
                      <a
                        style="cursor: pointer"
                        @click="Onedit(app)"
                        class="edit"
                      >
                        <i class="far fa-edit"></i>
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
  name: "von-list-of-appointment",
  data() {
    return {
      userdetails: null,
      errors: [],
      loader: false,
      list: [],
      servicelist: [],
      selected: [],
      service: "",
      name: "",
      date: "",
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.GetServicelist();
    const headers = {
      Authorization: "Bearer " + this.userdetails.access_token,
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    const axios = require("axios").default;
    axios
      .post(
        `${this.$axios.defaults.baseURL}` + "von-appointment/list",
        {
          name: "",
          date: "",
          service: "",
        },
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
    GetList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const axios = require("axios").default;
      axios
        .post(
          `${this.$axios.defaults.baseURL}` + "von-appointment/list",
          {
            name: "",
            date: "",
            service: "",
          },
          { headers }
        )
        .then((resp) => {
          this.list = resp.data.list;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    Onedit(data) {
      this.$router.push({
        path: "/Modules/Von/book-appointment",
        query: { id: data.id },
      });
    },
    async GetServicelist() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response1 = await this.$axios.get("service/list", { headers });
      if (response1.data.code == 200 || response1.data.code == "200") {
        this.servicelist = response1.data.list;
      } else {
        this.servicelist = [];
      }
    },
    async OnSearch() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "von-appointment/list",
        {
          name: this.name,
          date: this.date,
          service: this.service,
        },
        { headers }
      );
      console.log("my list", response.data);
      if (response.data.code == 200) {
        this.list = response.data.list;
      } else {
        window.alert("Something went wrong");
      }
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
              `${this.$axios.defaults.baseURL}` + "von-appointment/set-status",
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
  },
};
</script>

<style scoped>
.hide {
  display: none;
}
</style>