<template>
  <div class="content-subtab border-top-left">
    <Loader v-if="loader" />
    <form class="g-3 mt-3" method="post" @submit.prevent="addstate">
      <div class="row">
        <div class="col-md-4 mb-3">
          <label for="" class="form-label">Country</label>
          <select
            v-model="CountryId"
            class="form-select"
            aria-label="Default select example"
          >
            <option value="0">Please Select</option>
            <option v-for="cntry in CountrysList"  v-bind:key="cntry.id" v-bind:value="cntry.id">
              {{ cntry.country_name }}
            </option>
          </select>
        </div>

        <div class="col-md-5 mb-3">
          <label class="form-label">State Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter State Name"
            v-model="State"
          />
        </div>

        <div class="col-md-1 mb-3">
          <label for="" class="form-label">Index</label>
          <input type="number" class="form-control" placeholder="0" v-model="Stateindex" />
        </div>
      </div>
      <p v-if="errors.length">
<ul>
        <li style="color:red"  v-for='err in errors'
    :key='err' >
          {{ err }}
        </li>
      </ul>
        </p>
      <!-- close-row -->
       <div class="d-flex justify-content-center" >
        <button type="submit" class="btn btn-warning btn-text ml-auto" v-if="stateId">
        <i class="fa fa-save"></i> Save
        </button>
         <button type="submit" class="btn btn-warning btn-text" v-if="!stateId">
          <i class="fa fa-plus"></i> Add Parameter
        </button>
      </div>
    </form>



    <div class="table-title">
      <h3>List of State</h3>
    </div>
    <table class="table table-striped data-table1" style="width: 100%">
      <thead>
        <tr>
          <th>No</th>
          <th>Country Name</th>
          <th>State Name</th>
          <th>Index</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
 <tr  v-for="(state, index) in StateList" :key="index">
          <td>{{index+1}}</td>
          <td>{{state.country_name}}</td>
          <td>{{state.state_name}}</td>
          <td>{{state.state_order}}</td>
            <td>
                          <a  class="action-icon icon-success" @click="editstate(state)"
                            ><i class="fa fa-edit"></i
                          ></a>
                          <a class="action-icon icon-danger" @click="deletestate(state)"
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
  name: "state",
  data() {
    return {
      CountryId: 0,
      State: "",
      Stateindex: 0,
      CountrysList: [],
      StateList: [],
      errors: [],
      userdetails: null,
      stateId: 0,
      loader: false,
    };
  },
   created: function() {
       console.log('my list call');
    },

  mounted() {
    const headers = {
      Authorization: "Bearer " + this.userdetails.access_token,
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    const axios = require("axios").default;
    axios
      .get(`${this.$axios.defaults.baseURL}` + "address/list", { headers })
      .then((resp) => {
        this.StateList = resp.data.list;
        $(document).ready(function () {
          $(".data-table1").DataTable({
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
    this.GetCountryList();
  },
  methods: {
    async GetCountryList() {
      const response = await this.$axios.get("address/country/list");
      if (response.data.code == 200 || response.data.code == "200") {
        this.CountrysList = response.data.list;
      } else {
        this.CountrysList = [];
      }
    },
    async addstate() {
      this.errors = [];
      try {
        if (!this.CountryId) {
          this.errors.push("Country is required.");
        }
        if (!this.State) {
          this.errors.push("State is required.");
        }
        if (this.Stateindex <= 0) {
          this.errors.push("Index is required.");
        }
        if (this.CountryId && this.State && this.Stateindex) {
          this.loader = true;
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          if (this.stateId > 0) {
            const response = await this.$axios.post(
              "address/" + this.stateId + "/updateState",
              {
                added_by: this.userdetails.user.id,
                state_name: this.State,
                country_id: this.CountryId,
                state_order: this.Stateindex,
                state_status: 1,
              },
              { headers }
            );
            if (response.data.code == 200 || response.data.code == "200") {
              this.loader = false;
              this.$swal.fire(
                  'Successfully Update',
                );
              this.resetmodel();
            } else {
              this.loader = false;
              this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + response.message.country_id[0],
                  footer: ''
                })
            }
          } else {
            const response = await this.$axios.post(
              "address/state/add",
              {
                added_by: this.userdetails.user.id,
                country_id: this.CountryId,
                state_name: this.State,
                state_order: this.Stateindex,
              },
              { headers }
            );
            if (response.data.code == 200 || response.data.code == "200") {
              this.loader = false;
              this.$swal.fire('Successfully Update', '', 'success');
              this.resetmodel();
            } else {
              this.loader = false;
              this.errors.push(response.message.country_id[0]);
            }
          }
        }
      } catch (e) {
        this.loader = false;
        this.errors.push = e;
      }
    },
    async GetStateList() {
      const response = await this.$axios.get("address/list");
      if (response.data.code == 200 || response.data.code == "200") {
        this.StateList = response.data.list;
      } else {
        this.StateList = [];
      }
    },
    async editstate(data) {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "address/" + data.id + "/editState",
        { headers }
      );
      if (response.data.code == 200) {
        this.CountryId = response.data.list[0].country_id;
        this.State = response.data.list[0].state_name;
        this.Stateindex = response.data.list[0].state_order;
        this.stateId = data.id;
      } else {
        this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + this.error,
                  footer: ''
                });
      }
    },
    async deletestate(data) {
      try {
        const headers = {
          Authorization: "Bearer " + this.userdetails.access_token,
          Accept: "application/json",
          "Content-Type": "application/json",
        };
        const response = await this.$axios.post(
          "address/" + data.id + "/removeState",
          { added_by: this.userdetails.user.id, id: data.id },
          { headers }
        );
        if (response.data.code == 200) {
          this.$swal.fire('Deleted Successfully', '', 'success');
          this.GetStateList();
        } else {
          this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + JSON.stringify(response.data.message),
                  footer: ''
                });
        }
      } catch (e) {this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + JSON.stringify(response.data.message),
                  footer: ''
                });
      }
    },
    async resetmodel() {
      this.CountryId = "";
      this.State = "";
      this.Stateindex = 0;
      this.errors = [];
      this.stateId = 0;
      this.GetStateList();
    },

  },
};
</script>
