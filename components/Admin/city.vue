<template>
  <div class="content-subtab border-top-left">
    <Loader v-if="loader" />
    <form class="g-3 mt-3" method="post" @submit.prevent="addcity">
      <div class="row">
        <div class="col-md-4 mb-3">
          <label for="" class="form-label">Country</label>
          <select
            v-model="CountryId"
            class="form-select"
            aria-label="Default select example" @change="onstatebind($event)"
          >
           <option value="0">Please Select</option>
            <option   v-for="cntry in CountyList" v-bind:key="cntry.id" v-bind:value="cntry.id">
              {{ cntry.country_name }}
            </option>
          </select>
        </div>

        <div class="col-md-4 mb-3">
          <label class="form-label">State</label>
         <select
            v-model="StateId"
            class="form-select"
            aria-label="Default select example"
          >
           <option value="0">Please Select</option>
            <option v-for="stste in StateList" v-bind:key="stste.id" v-bind:value="stste.id">
              {{ stste.state_name }}
            </option>
          </select>
        </div>
      </div>
      <!-- close-row -->

      <div class="row">
        <div class="col-md-4 mb-3">
          <label class="form-label">City</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter City Name"
            v-model="City"
          />
        </div>

        <div class="col-md-4 mb-3">
          <label class="form-label">Postcode</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Postcode"
            v-model="Postcode"
          />
        </div>

        <div class="col-md-1 mb-3">
          <label for="" class="form-label">Index</label>
          <input type="text" class="form-control" placeholder="0" v-model="CityIndex"/>
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
        <button type="submit" class="btn btn-warning btn-text ml-auto" v-if="cityId">
        <i class="fa fa-save"></i> Save
        </button>
         <button type="submit" class="btn btn-warning btn-text" v-if="!cityId">
          <i class="fa fa-plus"></i> Add Parameter
        </button>
      </div>
    </form>



    <div class="table-title">
      <h3>List of State</h3>
    </div>
    <table class="table table-striped data-table3" style="width: 100%">
      <thead>
        <tr>
          <th>No</th>
          <th>Country Name</th>
          <th>State Name</th>
          <th>City</th>
          <th>Postcode</th>
          <th>Index</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr  v-for="(cty, index) in CityList" :key="index">
          <td>{{index+1}}</td>
          <td>{{cty.country_name}}</td>
          <td>{{cty.state_name}}</td>
          <td>{{cty.city_name}}</td>
          <td>{{cty.postcode}}</td>
          <td>{{cty.postcode_order}}</td>
            <td>
                          <a  class="action-icon icon-success" @click="editcity(cty)"
                            ><i class="fa fa-edit"></i
                          ></a>
                          <a class="action-icon icon-danger" @click="deletecity(cty)"
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
  name: "city",
  data() {
    return {
      CountryId: 0,
      StateId: 0,
      City: "",
      Postcode: "",
      CityIndex: 0,
      CountyList: [],
      StateList: [],
      CityList: [],
      errors: [],
      userdetails: null,
      cityId: 0,
      loader: false,
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
      .get(
        `${this.$axios.defaults.baseURL}` +
          "address/postcodelist",
        { headers }
      )
      .then((resp) => {
        this.CityList = resp.data.list;
        $(document).ready(function () {
          $(".data-table3").DataTable({
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
    async onstatebind(event) {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "address/" + event.target.value + "/countryWiseStateList",
        { headers }
      );
      if (response.data.code == 200 || response.data.code == "200") {
        this.StateList = response.data.list;
      } else {
        this.StateList = [];
      }
    },
    async GetCountryList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get("address/country/list", {
        headers,
      });
      if (response.data.code == 200 || response.data.code == "200") {
        this.CountyList = response.data.list;
      } else {
        this.CountyList = [];
      }
    },
    async PostcodeList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get("address/postcodelist", {
        headers,
      });
      if (response.data.code == 200 || response.data.code == "200") {
        this.CityList = response.data.list;
      } else {
        this.CityList = [];
      }
    },
    async addcity() {
      this.errors = [];
      try {
        if (!this.CountryId) {
          this.errors.push("Country is required.");
        }
        if (!this.StateId) {
          this.errors.push("State is required.");
        }
        if (!this.City) {
          this.errors.push("City is required.");
        }
        if (!this.Postcode) {
          this.errors.push("Postcode is required.");
        }
        if (this.CityIndex <= 0) {
          this.errors.push("Index is required.");
        } else {
          this.loader = true;
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          if (this.cityId > 0) {
            const response = await this.$axios.post(
              "address/" + this.cityId + "/updatePostcode",
              {
                added_by: this.userdetails.user.id,
                state_id: this.StateId,
                country_id: this.CountryId,
                city_name: this.City,
                postcode: this.Postcode,
                postcode_order: this.CityIndex,
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
                  text: 'the error is: ' + this.error,
                  footer: ''
                });
            }
          } else {
            const response = await this.$axios.post(
              "address/postcode/add",
              {
                added_by: this.userdetails.user.id,
                country_id: this.CountryId,
                state_id: this.StateId,
                city_name: this.City,
                postcode: this.Postcode,
                postcode_order: this.CityIndex,
              },
              { headers }
            );
            console.log("my data", response.data);
            if (response.data.code == 200 || response.data.code == "200") {
              this.loader = false;
              this.$swal.fire('Successfully Update', '', 'success');
              this.resetmodel();
            } else {
              this.loader = false;
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
        this.loader = false;
        this.errors.push = e;
      }
    },
    async editcity(data) {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "address/" + data.id + "/editPostcode",
        { headers }
      );
      if (response.data.code == 200) {
        this.CountryId = response.data.list[0].country_id;
        this.StateId = response.data.list[0].state_id;
        this.City = response.data.list[0].city_name;
        this.Postcode = response.data.list[0].postcode;
        this.CityIndex = response.data.list[0].postcode_order;
        this.cityId = data.id;
        const response1 = await this.$axios.post(
          "address/" + this.CountryId + "/countryWiseStateList",
          { headers }
        );
        if (response1.data.code == 200 || response1.data.code == "200") {
          this.StateList = response1.data.list;
        } else {
          this.StateList = [];
        }
      } else {
        this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + this.error,
                  footer: ''
                })
      }
    },
    async deletecity(data) {
      try {
        const headers = {
          Authorization: "Bearer " + this.userdetails.access_token,
          Accept: "application/json",
          "Content-Type": "application/json",
        };
        const response = await this.$axios.post(
          "address/" + data.id + "/removePostcode",
          { added_by: this.userdetails.user.id, id: data.id },
          { headers }
        );
        if (response.data.code == 200) {
          this.$swal.fire('Deleted Successfully', '', 'success');
          this.PostcodeList();
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
    async resetmodel() {
      this.CountryId = "";
      this.StateId = "";
      this.City = "";
      this.Postcode = "";
      this.CityIndex = 0;
      this.errors = [];
      this.cityId = 0;
      this.PostcodeList();
    },
  },
};
</script>
