<template>

  <div class="content-subtab">
    <Loader v-if="loader" />
    <form class="g-3 mt-3" method="post" @submit.prevent="addcountry">


      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="" class="form-label">Country Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Country Name"
            v-model="Country"
          />
          <div class="form-text text-muted">
            <i>e.g Malaysia</i>
          </div>
        </div>

        <div class="col-md-3 mb-3">
          <label class="form-label">Country Code</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Country Code"
            v-model="code"
          />
          <div class="form-text text-muted">
            <i>e.g MY</i>
          </div>
        </div>

        <div class="col-md-1 mb-3">
          <label for="" class="form-label">Index</label>
          <input
            type="number"
            class="form-control"
            placeholder="0"
            v-model="index"
          />
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
        <button type="submit" class="btn btn-warning btn-text ml-auto" v-if="countryId">
        <i class="fa fa-save"></i> Save
        </button>
         <button type="submit" class="btn btn-warning btn-text" v-if="!countryId">
          <i class="fa fa-plus"></i> Add Parameter
        </button>
      </div>
    </form>



    <div class="table-title">
      <h3>List of Country</h3>
    </div>
    <table class="table table-striped data-table font-13" style="width: 100%">
      <thead>
        <tr>
          <th>No</th>
          <th>Country Name</th>
          <th>Country Code</th>
          <th>Index</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
          <tr  v-for="(country, index) in CountryList" :key="index">
     <td>{{index+1}}</td>
          <td>{{country.country_name}}</td>
          <td>{{country.country_code}}</td>
          <td>{{country.country_order}}</td>
          <td>
                          <a  class="edit" @click="editcountry(country)"
                            ><i class="fa fa-edit"></i
                          ></a>
                          <a class="action-icon icon-danger" @click="deletecountry(country)"
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
  name: "country",
  data() {
    return {
      errors: [],
      Country: "",
      code: "",
      index: 0,
      userdetails: null,
      CountryList: [],
      countryId: 0,
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
          "address/country/list",
        { headers }
      )
      .then((resp) => {
        this.CountryList = resp.data.list;
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
  },
  methods: {
    async addcountry() {
      this.errors = [];
      try {
        if (!this.Country) {
          this.errors.push("Country is required.");
        }
        if (!this.code) {
          this.errors.push("Country code is required.");
        }
        if (this.index <= 0) {
          this.errors.push("Index is required.");
        } else {
          this.loader = true;
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          if (this.countryId > 0) {
            const response = await this.$axios.post(
              "address/" + this.countryId + "/updateCountry",
              {
                added_by: this.userdetails.user.id,
                id: this.countryId,
                country_name: this.Country,
                country_code: this.code,
                country_order: this.index,
              },
              { headers }
            );
            if (response.data.code == 200 || response.data.code == "200") {
              this.$swal.fire('Successfully Update', '', 'success');
              this.resetmodel();
            } else {
              this.loader = false;
              this.errors.push(response.data.message.country_name[0]);
            }
          } else {
            const response = await this.$axios.post(
              "address/country/add",
              {
                added_by: this.userdetails.user.id,
                country_name: this.Country,
                country_code: this.code,
                country_order: this.index,
              },
              { headers }
            );
            if (response.data.code == 200 || response.data.code == "200") {
              this.loader = false;
              this.$swal.fire('Successfully Update', '', 'success');
              this.resetmodel();
            } else {
              this.loader = false;
              this.errors.push(response.data.message.country_name[0]);
            }
          }
        }
      } catch (e) {
        console.log('errror',e);
        this.loader = false;
        this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + e,
                  footer: ''
                });
      }
    },
    async GetCountryList() {
      const response = await this.$axios.get("address/country/list");
      console.log("coutry lsit", response.data);
      if (response.data.code == 200 || response.data.code == "200") {
        this.CountryList = response.data.list;
      } else {
        this.CountryList = [];
      }
    },
    async editcountry(data) {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "address/" + data.id + "/editCountry",
        { headers }
      );
      if (response.data.code == 200) {
        this.Country = response.data.list[0].country_name;
        this.code = response.data.list[0].country_code;
        this.index = response.data.list[0].country_order;
        this.countryId = data.id;
      } else {
        this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + this.error,
                  footer: ''
                })
      }
    },
    async deletecountry(data) {
      try {
        const headers = {
          Authorization: "Bearer " + this.userdetails.access_token,
          Accept: "application/json",
          "Content-Type": "application/json",
        };
        const response = await this.$axios.post(
          "address/" + data.id + "/removeCountry",
          { added_by: this.userdetails.user.id, id: data.id },
          { headers }
        );
        console.log("my delete response", response.data);
        if (response.data.code == 200) {
          this.$swal.fire('Deleted Successfully', '', 'success');
          this.GetCountryList();
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
      this.Country = "";
      this.code = "";
      this.index = 0;
      this.errors = [];
      this.countryId = 0;
      this.GetCountryList();
    },
  },
};
</script>
