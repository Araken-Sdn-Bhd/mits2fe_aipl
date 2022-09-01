<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>System Setting</h1>
          </div>
          <div class="card mb-4">
            <div class="card-header icon-title">
              <a href="#"><i class="far fa-map-marker-alt"></i></a>
              <h4>Address Management</h4>
            </div>
            <div class="card-body">
              <nav>
                <ul class="nav nav-tab">
                  <li class="nav-item">
                    <a class="nav-link active" href="#">
                      <i class="far fa-hospital-user"></i> Country, State &
                      Postcode</a
                    >
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div class="card mb-4">
            <div class="card-header bg-transparent">
              <h4>Address Setting</h4>
            </div>
            <div class="card-body">
              <nav>
                <ul class="nav sub-tab" id="nav-tab" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      data-bs-toggle="tab"
                      href="#nav-home1"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                      >Country</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="nav-profile-tab3"
                      data-bs-toggle="tab"
                      href="#nav-profile2"
                      role="tab"
                      aria-controls="nav-profile2"
                      aria-selected="false"
                      >State</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="nav-contact-tab3"
                      data-bs-toggle="tab"
                      href="#nav-contact3"
                      role="tab"
                      aria-controls="nav-contact3"
                      aria-selected="false"
                      >Postcode</a
                    >
                  </li>
                </ul>
              </nav>

              <div class="tab-content" id="nav-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="nav-home1"
                  role="tabpanel"
                >
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
        <button type="submit" class="btn btn-warning btn-text ml-auto" v-if="mycountryId">
        <i class="far fa-save"></i> Save
        </button>
         <button type="submit" class="btn btn-warning btn-text" v-if="!mycountryId">
          <i class="far fa-plus"></i> Add Parameter
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
                            ><i class="far fa-edit"></i
                          ></a>
                          <a class="action-icon icon-danger" @click="deletecountry(country)"
                            ><i class="far fa-trash-alt"></i
                          ></a>
                        </td>
        </tr>
      </tbody>
    </table>
  </div>
                </div>

                <div class="tab-pane fade" id="nav-profile2" role="tabpanel">
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
            <option v-for="cntry in CountryList"  v-bind:key="cntry.id" v-bind:value="cntry.id">
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
        <button type="submit" class="btn btn-warning btn-text ml-auto" v-if="mystateId">
        <i class="far fa-save"></i> Save
        </button>
         <button type="submit" class="btn btn-warning btn-text" v-if="!mystateId">
          <i class="far fa-plus"></i> Add Parameter
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
                            ><i class="far fa-edit"></i
                          ></a>
                          <a class="action-icon icon-danger" @click="deletestate(state)"
                            ><i class="far fa-trash-alt"></i
                          ></a>
                        </td>
        </tr>
      </tbody>
    </table>
  </div>
                </div>

                <div class="tab-pane fade" id="nav-contact3" role="tabpanel">
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
            <option   v-for="cntry in CountryList" v-bind:key="cntry.id" v-bind:value="cntry.id">
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
            <option v-for="stste in StateListforcity" v-bind:key="stste.id" v-bind:value="stste.id">
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
        <i class="far fa-save"></i> Save
        </button>
         <button type="submit" class="btn btn-warning btn-text" v-if="!cityId">
          <i class="far fa-plus"></i> Add Parameter
        </button>
      </div>
    </form>

   

    <div class="table-title">
      <h3>List of Postcode</h3>
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
                            ><i class="far fa-edit"></i
                          ></a>
                          <a class="action-icon icon-danger" @click="deletecity(cty)"
                            ><i class="far fa-trash-alt"></i
                          ></a>
                        </td>
        </tr>
      </tbody>
    </table>
  </div>
                </div>
              </div>
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
import City from "../../../components/Admin/city.vue";
import Country from "../../../components/Admin/country.vue";
import State from "../../../components/Admin/state.vue";
// window.$ = window.jQuery = require('jquery');
// import {DataTable} from "datatables.net";
export default {
  components: { CommonSidebar, CommonHeader, Country, State, City },
  name: "address-management",
  head: {
    script: [
      {
        src: "/js/bootstrap.bundle.min.js",
        body: true,
        crossorigin: "anonymous",
      },
      {
        src: "/js/scripts.js",
        body: true,
        crossorigin: "anonymous",
      },
      {
        src: "/js/jquery.dataTables.min.js",
        body: true,
        crossorigin: "anonymous",
      },
    ],
  },
  data() {
    return {
      //Country
      errors: [],
      Country: "",
      code: "",
      index: 0,
      userdetails: null,
      CountryList: [],
      mycountryId: 0,
      loader: false,
      //State
      CountryId: 0,
      State: "",
      Stateindex: 0,
      StateList: [],
      mystateId: 0,
      loader: false,
      //City
      StateId: 0,
      City: "",
      Postcode: "",
      CityIndex: 0,
      CountyList: [],
      CityList: [],
      StateListforcity:[],
      cityId: 0,
    };
  },
  mounted() {
    this.BindCountryList();
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
      .catch((err) => {
        console.error(err);
      });
    this.BindCityList();
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.GetCountryList();
  },
  methods: {
    //Country
    BindCountryList(){
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
      .catch((err) => {
        console.error(err);
      });
    },
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
          if (this.mycountryId > 0) {
            const response = await this.$axios.post(
              "address/" + this.mycountryId + "/updateCountry",
              {
                added_by: this.userdetails.user.id,
                id: this.mycountryId,
                country_name: this.Country,
                country_code: this.code,
                country_order: this.index,
              },
              { headers }
            );
            if (response.data.code == 200 || response.data.code == "200") {
              this.$nextTick(() => {
                this.loader = false;
                $("#updatepopup").modal("show");
              });
              this.Countryresetmodel();
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
              this.$nextTick(() => {
                $("#insertpopup").modal("show");
              });
              this.Countryresetmodel();
            } else {
              this.loader = false;
              this.errors.push(response.data.message.country_name[0]);
            }
          }
        }
      } catch (e) {
        console.log('errror',e);
        this.loader = false;
        this.$nextTick(() => {
          $("#errorpopup").modal("show");
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
        this.mycountryId = data.id;
      } else {
        window.alert("Something went wrong");
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
          this.$nextTick(() => {
            $("#deletepopup").modal("show");
          });
          this.GetCountryList();
        } else {
          this.$nextTick(() => {
            $("#errorpopup").modal("show");
          });
        }
      } catch (e) {
        this.$nextTick(() => {
          $("#errorpopup").modal("show");
        });
      }
    },
    async Countryresetmodel() {
      this.Country = "";
      this.code = "";
      this.index = 0;
      this.errors = [];
      this.mycountryId = 0;
      this.GetCountryList();
    },
    //State
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
          if (this.mystateId > 0) {
            const response = await this.$axios.post(
              "address/" + this.mystateId + "/updateState",
              {
                id:this.mystateId,
                added_by: this.userdetails.user.id,
                state_name: this.State,
                country_id: this.CountryId,
                state_order: this.Stateindex,
                state_status: 1,
              },
              { headers }
            );
            console.log('my state resp',response.data);
            if (response.data.code == 200 || response.data.code == "200") {
              this.loader = false;
              this.$nextTick(() => {
                $("#updatepopup").modal("show");
              });
              this.resetmodel();
            } else {
              this.loader = false;
              this.errors.push(response.message.country_id[0]);
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
             console.log('my state resp',response.data);
            if (response.data.code == 200 || response.data.code == "200") {
              this.loader = false;
              this.$nextTick(() => {
                $("#insertpopup").modal("show");
              });
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
        this.mystateId = data.id;
      } else {
        window.alert("Something went wrong");
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
          this.$nextTick(() => {
            $("#deletepopup").modal("show");
          });
          this.GetStateList();
        } else {
          this.$nextTick(() => {
            $("#errorpopup").modal("show");
          });
        }
      } catch (e) {
        this.$nextTick(() => {
          $("#errorpopup").modal("show");
        });
      }
    },
    async resetmodel() {
      this.CountryId = "";
      this.State = "";
      this.Stateindex = 0;
      this.errors = [];
       this.StateListforcity = [];
      this.mystateId = 0;
      this.GetStateList();
     
    },
    //EndState
    //City
    BindCityList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const axios = require("axios").default;
      axios
        .get(`${this.$axios.defaults.baseURL}` + "address/postcodelist", {
          headers,
        })
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
        .catch((err) => {
          console.error(err);
        });
    },
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
        this.StateListforcity = response.data.list;
      } else {
        this.StateListforcity = [];
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
              this.$nextTick(() => {
                $("#updatepopup").modal("show");
              });

              this.cityresetmodel();
            } else {
              this.loader = false;
              this.$nextTick(() => {
                $("#errorpopup").modal("show");
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
              this.$nextTick(() => {
                $("#insertpopup").modal("show");
              });
              this.cityresetmodel();
            } else {
              this.loader = false;
              this.$nextTick(() => {
                $("#errorpopup").modal("show");
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
          this.StateListforcity = response1.data.list;
        } else {
          this.StateListforcity = [];
        }
      } else {
        window.alert("Something went wrong");
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
          this.$nextTick(() => {
            $("#deletepopup").modal("show");
          });
          this.PostcodeList();
        } else {
          this.$nextTick(() => {
            $("#errorpopup").modal("show");
          });
        }
      } catch (e) {
        this.$nextTick(() => {
          $("#errorpopup").modal("show");
        });
      }
    },
    async cityresetmodel() {
      this.CountryId = 0;
      this.StateId = 0;
      this.City = "";
      this.Postcode = "";
      this.CityIndex = 0;
      this.errors = [];
      this.StateListforcity = [];
      this.cityId = 0;
      this.PostcodeList();
    },
  },
};
</script>