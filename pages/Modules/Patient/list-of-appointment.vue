<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>List of Appointment Request</h1>
          </div>

          <div class="card mb-4">
            <div class="card-body">
              <div class="search-table">
                <div class="row">
                  <div class="col-sm-5 mt-2 mb-3 search-box">
                    <div class="input-group">
                      <span class="input-group-text" id="basic-addon1">
                        <i class="fa fa-search"></i>
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search by Name/NRIC"
                        v-model="search"
                        @keydown="searchText2"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <!-- search-table -->
              <table class="table table-striped data-table  display nowrap" style="width: 100%">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>NRIC/Passport</th>
                    <th>Contact NO.</th>
                    <th>Email</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(app, index) in list" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ app.name }}</td>
                    <td>{{ app.nric_or_passportno }}</td>
                    <td>{{ app.contact_no }}</td>
                    <td>{{ app.email }}</td>
                    <td>{{ app.created }}</td>
                    <td>
                      <a
                      @click="OnPatientRegistration(app)"
                        class="view" title="Register patient"
                        ><i class="fas fa-edit"></i
                      ></a>
                      <a @click="deleteappointment(app)" title="Delete record" class="action-icon icon-danger">
                        <i class="fa fa-trash-alt"></i></a>
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
import CommonHeader from '../../../components/CommonHeader.vue';
import CommonSidebar from '../../../components/CommonSidebar.vue';
export default {
  components: { CommonSidebar, CommonHeader },
  name: "list-of-appointment",
  data() {
    return {
      userdetails: null,
      list: [],
      alllist: [],
      token: "",
      search: "",
      rid: 0,
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    if (this.userdetails) {
      this.token = this.userdetails.access_token;
    }
  },
  mounted() {
    const headers = {
      Authorization: "Bearer " + this.token,
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    const axios = require("axios").default;
    axios
      .post(`${this.$axios.defaults.baseURL}` + "appointment-request/get",
      {email:this.userdetails.user.email,branch_id:this.userdetails.branch.branch_id },
       {headers}
       )
      .then((resp) => {
        this.list = resp.data.list;
        this.alllist = resp.data.list;
        $(document).ready(function () {
          $(".data-table").DataTable({
            searching: false,
            bLengthChange: false,
            bInfo: false,
            // autoWidth: false,
            // responsive: true,
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
  methods: {
    searchText2() {
      if (this.search) {
        this.list = this.alllist.filter((notChunk) => {
          return (
            notChunk.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
            notChunk.nric_or_passportno?.toString().toLowerCase().indexOf(this.search.toLowerCase()) > -1
          );
        });
      } else {
        this.list = this.alllist;
      }
    },
    OnPatientRegistration(data){
    this.$router.push({
        path: "/modules/Intervention/patient-registration",
        query: { rid: data.id },
      });
  },
  deleteappointment(data){
    this.$swal.fire({
      title: 'Are you sure you want to delete this record? Please fill in the remarks before delete record',
                            input: 'text',
                            showCancelButton: true,
                            confirmButtonText: 'Delete Record',
                            cancelButtonText: 'Cancel!',
                            reverseButtons: true,
                            preConfirm: (result) => {
                                return fetch(this.SaveRemark(result, data.id))
                            },
            })
  },
  async SaveRemark(data,rid) {
            const headers = {
                Authorization: "Bearer " + this.userdetails.access_token,
                Accept: "application/json",
                "Content-Type": "application/json",
            };

            const response = await this.$axios.post(
                "appointment-request/remove", {
                  added_by: this.userdetails.user.id,
                  remarks: data,
                  id: rid
                }, {
                    headers
                }
            );
            if (response.data.code == 200) {
              this.$swal.fire('Deleted Successfully', '', 'success');
              location.reload();
            } else {
              this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + JSON.stringify(response.data.message),
                  footer: ''
                });
            }

        },
  }
};
</script>
