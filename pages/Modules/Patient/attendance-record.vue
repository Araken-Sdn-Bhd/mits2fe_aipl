<template>
  <div id="layoutSidenav">
    <div>
      <PatientLoginSidebar />
    </div>
    <div id="layoutSidenav_content">
      <div>
        <PatientLoginHeader />
      </div>
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>List of Appointment</h1>
            <a href="/Modules/Patient/book-appointment" class="add-btn"
              ><i class="fal fa-plus"></i
            ></a>
          </div>

          <div class="card mb-4">
            <div class="card-body">
              <div class="search-table mt-3">
                <div class="row">
                  <div class="col-sm-3 mb-2">
                    <input
                      type="date"
                      name=""
                      class="form-control"
                      v-model="date"
                      @change="OnSearch"
                    />
                  </div>

                  <div class="col-sm-3 mb-2">
                    <select
                      v-model="service_id"
                      class="form-select"
                      aria-label="Default select example"
                      @change="OnSearch"
                    >
                      <option v-bind:value="0">Select Services</option>
                      <option
                        v-for="serv in servicelist"
                        v-bind:key="serv.id"
                        v-bind:value="serv.id"
                      >
                        {{ serv.service_name }}
                      </option>
                    </select>
                  </div>

                  <div class="col-sm-5 ml-auto mb-2 search-box">
                    <div class="input-group">
                      <span class="input-group-text" id="basic-addon1">
                        <i class="far fa-search"></i>
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search By Name/NRIC/Passport/MRN"
                        v-model="keyword"
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
                id="datatable"
              >
                <thead>
                  <tr>
                    <th>No</th>
                    <th>MRN</th>
                    <th>Salutation</th>
                    <th style="min-width: 100px">Name</th>
                    <th>NRIC/Passport</th>
                    <th>Status</th>
                    <th>Appo. Date</th>
                    <th>Appo. Time</th>
                    <th>Assigned Dr.</th>
                    <th>Services</th>
                    <th style="min-width: 100px">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(app, index) in list" :key="index">
                    <td>{{ index+1 }}</td>
                    <td>{{ app.patient_mrn }}</td>
                    <td>{{ app.salutation }}</td>
                    <td>
                      <a
                        style="color: #18846f; cursor: pointer"
                        @click="oneditPatient(app.patient_id)"
                        >{{ app.name_asin_nric }}</a
                      >
                    </td>
                    <td>{{ app.passport_no }} / {{ app.nric_no }}</td>
                    <td>
                      <span
                        v-if="app.appointment_status == 3"
                        class="badge bg-primary"
                        >Completed</span
                      >
                      <span
                        v-if="app.appointment_status == 1"
                        class="badge bg-success"
                        >Ready</span
                      >
                      <span
                        v-if="app.appointment_status == 0"
                        class="badge bg-warning text-dark"
                        >Processing</span
                      >
                      <span
                        v-if="app.appointment_status == 2"
                        class="badge bg-danger"
                        >No Show</span
                      >
                    </td>
                    <td>{{ app.appointment_date }}</td>
                    <td>{{ app.appointment_time }}</td>
                    <td>{{ app.team_name }}</td>
                    <td>{{ app.service }}</td>
                    <td>
                      <a
                        @click="oneditAppointment(app.appointment_id)"
                        class="edit"
                        ><i class="fad fa-edit"></i
                      ></a>
                      <a
                        @click="
                          OnUpdateAppointmentStatus(1, app.appointment_id)
                        "
                        class="action-icon icon-info"
                        ><i class="fad fa-check"></i
                      ></a>
                      <a
                        @click="
                          OnUpdateAppointmentStatus(2, app.appointment_id)
                        "
                        class="action-icon icon-danger"
                        ><i class="fad fa-times"></i
                      ></a>
                      <a
                        @click="
                          OnUpdateAppointmentStatus(0, app.appointment_id)
                        "
                        class="edit"
                        ><i class="far fa-power-off"></i
                      ></a>
                    </td>
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
  name: "attendance-record",
  data() {
    return {
      userdetails: null,
      list: [],
      servicelist: [],
      token: "",
      date: "",
      keyword: "",
      service_id: 0,
    };
  },

  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    if (this.userdetails) {
      this.token = this.userdetails.access_token;
    }
    this.GetList();
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
        `${this.$axios.defaults.baseURL}`+"patient-appointment-details/list",
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
    async GetList() {
      const headers = {
        Authorization: "Bearer " + this.token,
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
    oneditAppointment(Id) {
      this.$router.push({
        path: "/Modules/Patient/book-appointment",
        query: { id: Id },
      });
    },
    async OnUpdateAppointmentStatus(status, id) {
      try {
        const headers = {
          Authorization: "Bearer " + this.userdetails.access_token,
          Accept: "application/json",
          "Content-Type": "application/json",
        };
        const response = await this.$axios.post(
          "patient-appointment-details/updateappointmentstatus",
          {
            appointment_id: id,
            appointment_status: status,
          },
          { headers }
        );
        console.log("my status", response.data);
        if (response.data.code == 200) {
          this.$nextTick(() => {
            $("#updatepopup").modal("show");
          });
          this.GetList();
        } else {
          this.loader = false;
          this.$nextTick(() => {
            $("#errorpopup").modal("show");
          });
        }
      } catch (e) {
        this.error = e;
      }
    },
    oneditPatient(Id) {
      this.$router.push({
        path: "/Modules/Patient/patient-summary",
        query: { id: Id },
      });
    },
    async OnSearch() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      if (!this.keyword) {
        this.keyword = "no-keyword";
      }
      const response = await this.$axios.post(
        "/patient-appointment-details/search",
        {
          keyword: this.keyword,
          date: this.date,
          service_id: this.service_id,
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
  },
};
</script>