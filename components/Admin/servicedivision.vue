<template>
  <div class="content-subtab border-top-left">
    <form class="g-3 mt-3" method="post" @submit.prevent="onAddservicedivision">
      <div class="row">
        <div class="col-md-4 mb-4">
          <label for="" class="form-label">Service Name</label>
          <select
            v-model="serviceName"
            class="form-select"
            aria-label="Default select example"
          >
          <option value="">Please Select</option>
            <option
              v-for="srvc in servicelist"
              v-bind:key="srvc.id"
              v-bind:value="srvc.id"
            >
              {{ srvc.service_name }}
            </option>
          </select>
        </div>

        <div class="col-md-4 mb-4">
          <label for="" class="form-label">Hospital</label>
          <select
            v-model="hospitalName"
            class="form-select"
            aria-label="Default select example"
            @change="onHospitalCodechange($event)"
          >
          <option value="">Please Select</option>
            <option
              v-for="hst in hospitallist"
              v-bind:key="hst.id"
              v-bind:value="hst.id"
            >
              {{ hst.hospital_code }}
            </option>
          </select>
        </div>

        <div class="col-md-3 mb-4">
          <label for="" class="form-label">Branch</label>
          <select
            v-model="branceName"
            class="form-select"
            aria-label="Default select example"
          >
          <option value="">Please Select</option>
            <option
              v-for="bnch in branchlist"
              v-bind:key="bnch.id"
              v-bind:value="bnch.id"
            >
              {{ bnch.hospital_branch_name }}
            </option>
          </select>
        </div>

        <div class="col-md-1 mb-4">
          <label class="form-label">Index</label>
          <input
            type="text"
            class="form-control"
            placeholder="0"
            v-model="servicedindex"
          />
        </div>
      </div>
      <!-- close-row -->
       <p v-if="errors.length">
<ul>
        <li style="color:red"  v-for='err in errors'
    :key='err' >
          {{ err }}
        </li>
      </ul>
        </p>
      <div class="d-flex justify-content-center" >
        <button type="submit" class="btn btn-warning btn-text ml-auto" v-if="Id">
        <i class="fa fa-save"></i> Save
        </button>
         <button type="submit" class="btn btn-warning btn-text" v-if="!Id">
          <i class="fa fa-plus"></i> Add Parameter
        </button>
      </div>
    </form>



    <div class="table-title">
      <h3>List of Service</h3>
    </div>
    <table class="table table-striped data-table" style="width: 100%">
      <thead>
        <tr>
          <th>No</th>
          <th>Hospital</th>
          <th>Branch</th>
          <th>Service Name</th>
          <th>Index</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(srvcdvsv, index) in list" :key="index">
          <td>{{ index}}</td>
          <td>{{ srvcdvsv.hospitals.hospital_name }}</td>
          <td>{{ srvcdvsv.branchs.hospital_branch_name }}</td>
          <td>{{ srvcdvsv.services.service_name }}</td>
          <td>{{ srvcdvsv.division_order }}</td>
          <td>
            <a class="edit" @click="editdivison(srvcdvsv)"
              ><i class="fa fa-edit"></i
            ></a>
            <a @click="deletedivison(srvcdvsv)" class="action-icon icon-danger"
              ><i class="fa fa-trash-alt"></i
            ></a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "servicedivision",
  data() {
    return {
      serviceName: "",
      hospitalName: "",
      branceName: "",
      servicedindex: 0,
      servicelist: [],
      hospitallist: [],
      branchlist: [],
      list: [],
      errors: [],
      userdetails: null,
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
      .get(`${this.$axios.defaults.baseURL}` + "service/division-list", {
        headers,
      })
      .then((resp) => {
        this.list = resp.data.list;
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
    this.GetserviceList();
    this.GethospitalList();
  },
  methods: {
    async GetList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get("service/division-list", {
        headers,
      });
      if (response.data.code == 200 || response.data.code == "200") {
        this.list = response.data.list;
      } else {
        this.list = [];
      }
    },
    async GetserviceList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get("service/list", { headers });
      if (response.data.code == 200 || response.data.code == "200") {
        this.servicelist = response.data.list;
      } else {
        this.servicelist = [];
      }
    },
    async GethospitalList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get("hospital/list", {
        headers,
      });
      if (response.data.code == 200 || response.data.code == "200") {
        this.hospitallist = response.data.list;
      } else {
        this.hospitallist = [];
      }
    },
    async onHospitalCodechange(event) {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "hospital/get-branch-by-hospital-code",
        {
          hospital_code: event.target.value,
        },
        { headers }
      );
      if (response.data.code == 200 || response.data.code == "200") {
        this.branchlist = response.data.branches;
      } else {
        this.branchlist = [];
      }
    },
    async editdivison(data) {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "service/get-division",
        {
          division_id: data.id,
        },
        { headers }
      );
      if (response.data.code == 200) {
        this.serviceName = response.data.list[0].service_id;
        this.hospitalName = response.data.list[0].hospital_id;
        this.branceName = response.data.list[0].branch_id;
        this.servicedindex = response.data.list[0].division_order;
        this.Id = data.id;
        const response1 = await this.$axios.post(
          "hospital/get-branch-by-hospital-code",
          {
            hospital_code: response.data.list[0].hospital_code,
          },
          { headers }
        );
        if (response1.data.code == 200 || response1.data.code == "200") {
          this.branchlist = response1.data.branches;
        } else {
          this.branchlist = [];
        }
      } else {
        this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + this.error,
                  footer: ''
                });
      }
    },
    async deletedivison(data) {
      try {
        const headers = {
          Authorization: "Bearer " + this.userdetails.access_token,
          Accept: "application/json",
          "Content-Type": "application/json",
        };
        const response = await this.$axios.post(
          "service/remove-division",
          { added_by: this.userdetails.user.id, division_id: data.id },
          { headers }
        );
        if (response.data.code == 200) {
          this.$swal.fire('Deleted Successfully', '', 'success');
          this.GetList();
        } else {
          this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + JSON.stringify(response.data.message),
                  footer: ''
                });
        }
      } catch (e) {
        this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + e,
                  footer: ''
                });
      }
    },
    async onAddservicedivision() {
      this.errors = [];
      try {
        if (!this.serviceName) {
          this.errors.push("Service Name is required.");
        }
        if (!this.hospitalName) {
          this.errors.push("Hospital Name is required.");
        }
        if (!this.branceName) {
          this.errors.push("Branch Description is required.");
        }
        if (this.servicedindex <= 0) {
          this.errors.push("Index is required.");
        } else {
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          if (this.Id <= 0) {
            const response = await this.$axios.post(
              "service/insertOrupdate-division",
              {
                added_by: this.userdetails.user.id,
                service_id: this.serviceName,
                hospital_id: this.hospitalName,
                branch_id: this.branceName,
                division_order: this.servicedindex,
              },
              { headers }
            );
            if (response.data.code == 200 || response.data.code == "200") {
              this.$swal.fire(
                  'Successfully Insert',
                );
              this.resetmodel();
            } else {
              this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + this.error,
                  footer: ''
                });
            }
          } else {
            const response = await this.$axios.post(
              "service/update-division",
              {
                added_by: this.userdetails.user.id,
                division_id: this.Id,
                service_id: this.serviceName,
                hospital_id: this.hospitalName,
                branch_id: this.branceName,
                division_order: this.servicedindex,
              },
              { headers }
            );
            if (response.data.code == 200 || response.data.code == "200") {
this.$swal.fire(
                  'Successfully Update',
                );
              this.resetmodel();
            } else {
              this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + this.error,
                  footer: ''
                });
            }
          }
        }
      } catch (e) {
        this.errors.push = e;
      }
    },
    async resetmodel() {
      this.serviceName = "";
      this.hospitalName = "";
      this.branceName = "";
      this.servicedindex = 0;
      this.errors = [];
      this.GetList();
      this.Id = 0;
    },
  },
};
</script>
