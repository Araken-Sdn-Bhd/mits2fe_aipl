<template>

  <div id="layoutSidenav">
    <div>
      <CommonSidebar />
    </div>
    <div id="layoutSidenav_content">
      <div>
        <CommonHeader />
      </div>
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>List of Appointment</h1>
            <a href="/app/modules/Patient/book-appointment" class="add-btn"
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
                        <i class="fa fa-search"></i>
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search By Name/NRIC/Passport/MRN"
                        v-model="search"
                        @keyup="OnSearch"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <!-- search-table -->
              <div class="table-responsive-ui">
                <table class="table table-striped data-table font-13 display nowrap" style="width: 100%" id="datatable">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>MRN</th>
                    <th>Salutation</th>
                    <th>Name</th>
                    <th>NRIC/Passport</th>
                    <th>Status</th>
                    <th>Appo. Date</th>
                    <th>Appo. Time</th>
                    <th>Assigned Dr.</th>
                    <th>Services</th>
                    <th style="width:15%">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(app, index) in list" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ app.patient_mrn }}</td>
                    <td>{{ app.salutation }}</td>
                    <td>
                      <a
                        style="color: #18846f; cursor: pointer"
                        @click="oneditPatient(app.id,app.appointment_id)"
                        >{{ app.name_asin_nric }}</a
                      >
                    </td>
                    <td>{{ app.nric_no }}  {{ app.passport_no }}</td>
                    <td>
                      <span
                        v-if="app.appointment_status == 3"
                        class="badge bg-primary"
                        >Completed</span
                      >
                      <span
                        v-if="app.appointment_status == 4"
                        class="badge bg-success"
                        >Ready</span
                      >
                      <span
                        v-if="app.appointment_status == 1"
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
                    <td>{{ app.staffname }}</td>
                    <td>{{ app.service }}</td>
                    <td>
                      <a
                        @click="oneditAppointment(app.appointment_id)"
                        class="edit"
                        ><i class="fad fa-edit"></i
                      ></a>
                      <a
                        @click="OnAssignStaffPop(app.team_id,app.appointment_id,app.serviceid)"
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
                          OnUpdateAppointmentStatus(3, app.appointment_id)
                        "
                        class="edit"
                        ><i class="fa fa-power-off"></i
                      ></a>
                    </td>
                  </tr>
                </tbody>
              </table>
              </div>
              <p
                v-show="!list.length"
                style="
                  padding: 0px;
                  margin: 10px;
                  color: red;
                  display: flex;
                  justify-content: center;
                "
              >
                No Record Found
              </p>
            </div>
          </div>
        </div>
      </main>
      <div
        class="modal fade"
        id="Assignstaffpopup"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-dialog-centered modal-sm test-connection"
        >
          <div class="modal-content">
            <div class="modal-body">
              <select
                v-model="assign_team"
                class="form-select"
                aria-label="Default select example"
              >
                <option value="0">Please choose assigned staff</option>
                <option
                  v-for="team in teamlist"
                  v-bind:key="team.id"
                  v-bind:value="team.id"
                >
                  {{ team.name }}
                </option>
              </select>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary btn-ok"
                @click="OnAssignStaffSave()"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CommonHeader from '../../../components/CommonHeader.vue';
import CommonSidebar from '../../../components/CommonSidebar.vue';
export default {
  components: { CommonSidebar, CommonHeader },
  name: "attendance-record",
  data() {
    return {
      userdetails: null,
      list: [],
      servicelist: [],
      teamlist: [],
      token: "",
      date: "",
      search: "",
      keyword: "",
      service_id: 0,
      appId: 0,
      assign_team: 0,
      staff_id:0,
      serviceType: "",
      appointmentstatus: "",

    };
  },

  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    if (this.userdetails) {
      this.token = this.userdetails.access_token;
      this.email=this.userdetails.user.email;
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
      .post(
        `${this.$axios.defaults.baseURL}` +
          "patient-appointment-details/todaylist",
          {email:this.userdetails.user.email,branch_id:this.userdetails.branch.branch_id },
        { headers }
      )
      .then((resp) => {
        this.list = resp.data.list;
        console.log("my list", this.list);
        $(document).ready(function () {
          $(".data-table").DataTable({
            searching: false,
            bLengthChange: false,
            bInfo: false,
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
    GetAppointmentlist() {
      const headers = {
        Authorization: "Bearer " + this.token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const axios = require("axios").default;
      axios
        .get(
          `${this.$axios.defaults.baseURL}` +
            "patient-appointment-details/list",
          { headers }
        )
        .then((resp) => {
          this.list = resp.data.list;
          console.log("my list", this.list);
          $(document).ready(function () {
            $(".data-table").DataTable({
              searching: false,
              bLengthChange: false,
              bInfo: false,
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
    },

    oneditAppointment(Id) {
      this.$router.push({
        path: "/modules/Patient/book-appointment",
        query: { id: Id },
      });
    },
    async OnUpdateAppointmentStatus(status, id) {
      if(status == 2){
        this.appointmentstatus = "no show";
      }
      else{
        this.appointmentstatus = "completed";
      }
      this.$swal.fire({
                title: 'Do you want to update the appointment status to ' + this.appointmentstatus + '?',
                showCancelButton: true,
                confirmButtonText: 'Save',
            }).then(async (result) => {
              if (result.isConfirmed) {
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
                    this.$swal.fire(
                                    'Successfully Updated.',
                                    'Data is inserted.',
                                    'success',
                                );
                    location.reload();
                    this.GetAppointmentlist();
                  } else {
                    this.loader = false;
                    this.$swal.fire({
                                    icon: 'error',
                                    title: 'Oops... Something Went Wrong!',
                                    text: 'the error is: ' + JSON.stringify(response.data.message),
                                })
                  }
                } catch (e) {
                  this.$swal.fire({
                            icon: 'error',
                            title: 'Oops... Something Went Wrong!',
                            text: 'the error is: ' + e,
                  })
                }
    }
    })
    },
    oneditPatient(Id,aptId) {
      localStorage.setItem(
        "appointmentId",aptId
      );
      this.$router.push({
        path: "/modules/Intervention/patient-summary",
        query: { id: Id , appId: aptId},
      });
    },
    async OnSearch() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      if (!this.search) {
        this.keyword = "no-keyword";
      } else {
        this.keyword = this.search;
      }
      const response = await this.$axios.post(
        "/patient-appointment-details/search",
        {
          keyword: this.keyword,
          date: this.date,
          service_id: this.service_id,
          email:this.userdetails.user.email,
          branch_id:this.userdetails.branch.branch_id
        },
        { headers }
      );
      console.log("my list", response.data);
      if (response.data.code == 200) {
        if (response.data.list.length > 0) {
          this.list = response.data.list;
        } else {
          this.list = [];
        }
      } else {
        this.list = [];
      }
    },
    OnAssignStaffPop(appid,aptId,serviceType) {
      this.appId = aptId;
      this.serviceType = serviceType;
       const headers = {
        Authorization: "Bearer " + this.token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const axios = require("axios").default;
      axios
        .get(
          `${this.$axios.defaults.baseURL}` +
            "hospital/getStaffNamebyPatientTeamBranch",

          { headers, params: {team_id: this.serviceType, email: this.email}   }
        )
        .then((resp) => {
          this.teamlist = resp.data.list;
          console.log("my applist", this.list);
        });
      $("#Assignstaffpopup").modal("show");
    },

    async OnAssignStaffSave() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "patient-appointment-details/updateTeam",
        {
          added_by: this.userdetails.user.id,
          branch_id: this.userdetails.branch.branch_id,
          appointment_id: this.appId,
          assign_team: this.assign_team,
          service: this.serviceType,
        },
        { headers }
      );
      if (response.data.code == 200) {
        this.assign_team = 0;
        $("#Assignstaffpopup").modal("hide");
        this.GetAppointmentlist();
      }
    },
  },
};
</script>
