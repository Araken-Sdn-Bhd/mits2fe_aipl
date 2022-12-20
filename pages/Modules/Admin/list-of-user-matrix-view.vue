<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <Loader v-if="loader" />
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>User Matrix Detail</h1>
          </div>

          <div class="card mb-4">
            <div class="card-body">
              <div class="user-detail">
                <div class="row" v-if="details">
                  <div class="col-sm-4">
                    <h5>Staff Name</h5>
                    <p>{{ details.name }}</p>
                  </div>
                  <div class="col-sm-4">
                    <h5>Team</h5>
                    <p>{{ this.Id }}</p>
                  </div>
                  <div class="col-sm-4">
                    <h5>Status</h5>
                    <p>{{ details.status }}</p>
                  </div>
                </div>
              </div>

              <div class="search-table mb-3">
                <div class="row mt-3">
                  <div class="col-sm-4">
                    <select
                      v-model="ModuleId"
                      class="form-select"
                      aria-label="Default select example"
                      @change="onsubmodelbind($event)"
                    >
                      <option value="0">Please Select</option>
                      <option
                        v-for="mod in modulelist"
                        v-bind:key="mod.id"
                        v-bind:value="mod.id"
                      >
                        {{ mod.module_name }}
                      </option>
                    </select>
                  </div>

                  <div class="col-sm-4">
                    <select
                      v-model="SubmoduleId"
                      class="form-select"
                      aria-label="Default select example"
                      @change="OnSearch()"
                    >
                      <option value="0">Please Select</option>
                      <option
                        v-for="submod in submodulelist"
                        v-bind:key="submod.id"
                        v-bind:value="submod.id"
                      >
                        {{ submod.sub_module_name }}
                      </option>
                    </select>
                  </div>

                  <div class="col-sm-4">
                    <div class="input-group">
                      <span class="input-group-text bg-transparent br-0"
                        ><i class="fa fa-search"></i
                      ></span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search"
                        v-model="search"
                        @keyup="OnSearch"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <!-- search-table -->
              <table
                class="table table-striped data-table"
                id="screenlist"
                style="width: 100%"
              >
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Screen Name</th>
                    <th>Description</th>
                    <th>Access Screen</th>
                    <th>Read Only</th>
                    <th>Read/Write</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(roles, index) in list" :key="index">
                    <td>
                      {{ index + 1 }}
                      <input
                        type="text"
                        hidden
                        class="id"
                        v-model="roles.screen_id"
                      />
                    </td>
                    <td>{{ roles.screen_name }}</td>
                    <td>{{ roles.screen_description }}</td>
                    <td>
                      <input
                        class="td-check access_screen"
                        type="checkbox"
                        v-bind:id="'access_screen_' + roles.screen_id"
                        v-model="roles.access_screen"
                      />
                    </td>
                    <td>
                      <input
                        class="td-check read_only"
                        type="checkbox"
                        name=""
                        v-bind:id="'read_only_' + roles.screen_id"
                        v-model="roles.read_only"
                      />
                    </td>
                    <td>
                      <input
                        class="td-check read_writes"
                        type="checkbox"
                        name=""
                        v-bind:id="'read_writes_' + roles.screen_id"
                        v-model="roles.read_writes"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <br>
            <br>
            <div class="d-flex">
                  <button @click="back" type="button" class="btn btn-primary btn-fill btn-md">
                    <em class="fa fa-step-backward"/> &nbsp; Back
                  </button>
                  <button type="submit" class="btn btn-warning btn-text ml-auto btn-fill btn-md" v-on:click="OnSubmit">
                    <em class="fa fa-save"></em> Save
                  </button>
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
export default {
  components: { CommonSidebar, CommonHeader },
  name: "list-of-user-matrix-view",
  data() {
    return {
      loader: false,
      Id: 0,
      userdetails: null,
      list: [],
      alllist: [],
      modulelist: [],
      submodulelist: [],
      search: "",
      details: null,
      ModuleId: 0,
      SubmoduleId: 0,
      UsersId:0,
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));

    let urlParams = new URLSearchParams(window.location.search);
    this.Id = urlParams.get("id");
    this.UsersId = urlParams.get("usersid");
    this.GetList();
    this.GetModuleList();
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    GetList() {
      this.loader = true;
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const axios1 = require("axios").default;
      axios1
        .post(
          `${this.$axios.defaults.baseURL}` +
            "screen-module/getUserMatrixListById",
          { staff_id:this.UsersId },
          { headers }
        )
        .then((resp) => {
          this.list = resp.data.user_details;
          this.alllist = resp.data.user_details;
          this.details = resp.data.list;
          this.loader = false;
          console.log("my list", resp.data);
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
        .catch ((err) => {
        this.loader = false;
        this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + err,
                  footer: ''
                });

          this.loader = false;
          console.error(err);
        });
    },
    async GetModuleList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get("screen-module/list", { headers });
      console.log("my module", response.data);
      if (response.data.code == 200 || response.data.code == "200") {
        this.modulelist = response.data.list;
      } else {
        this.modulelist = [];
      }
    },
    async onsubmodelbind(event) {
      this.selected = [];
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "screen-module/sub-module-list-by-module-id",
        { module_id: event.target.value },
        { headers }
      );
      console.log("my submod list", response.data);
      if (response.data.code == 200 || response.data.code == "200") {
        this.submodulelist = response.data.list;
      } else {
        this.submodulelist = [];
      }
      this.OnSearch();

      if (this.ModuleId == 0) {
        this.GetList();
      }
    },
    OnSearch() {
      if (this.ModuleId && !this.SubmoduleId && !this.search) {
        this.list = this.alllist.filter((notChunk) => {
          return (
            notChunk.module_id
              .toString()
              .toLowerCase()
              .indexOf(this.ModuleId.toString().toLowerCase()) > -1
          );
        });
      } else if (this.ModuleId && this.SubmoduleId && !this.search) {
        this.list = this.alllist.filter((notChunk) => {
          return (
            notChunk.module_id
              .toString()
              .toLowerCase()
              .indexOf(this.ModuleId.toString().toLowerCase()) > -1 &&
            notChunk.sub_module_id
              .toString()
              .toLowerCase()
              .indexOf(this.SubmoduleId.toString().toLowerCase()) > -1
          );
        });
      } else if (this.ModuleId && this.SubmoduleId && this.search) {
        this.list = this.alllist.filter((notChunk) => {
          return (
            (notChunk.module_id
              .toString()
              .toLowerCase()
              .indexOf(this.ModuleId.toString().toLowerCase()) > -1 &&
              notChunk.sub_module_id
                .toString()
                .toLowerCase()
                .indexOf(this.SubmoduleId.toString().toLowerCase()) > -1 &&
              notChunk.screen_name
                .toLowerCase()
                .indexOf(this.search.toLowerCase()) > -1) ||
            notChunk.screen_description
              .toLowerCase()
              .indexOf(this.search.toLowerCase()) > -1
          );
        });
      } else if (!this.ModuleId && !this.SubmoduleId && this.search) {
        this.list = this.alllist.filter((notChunk) => {
          return (
            notChunk.screen_name
              .toLowerCase()
              .indexOf(this.search.toLowerCase()) > -1 ||
            notChunk.screen_description
              .toLowerCase()
              .indexOf(this.search.toLowerCase()) > -1
          );
        });
      }
    },
    async OnSubmit() {
      var screen_idss = [];
      try {
        const headers = {
          Authorization: "Bearer " + this.userdetails.access_token,
          Accept: "application/json",
          "Content-Type": "application/json",
        };
        $("table#screenlist > tbody > tr").each(function () {
          var obj = {};
          obj.screen_ids = $('td input[type="text"].id', this).val();
          obj.access_screen = $('td input[type="checkbox"]#access_screen_' + obj.screen_ids).is(":checked");
          obj.read_writes = $('td input[type="checkbox"]#read_writes_' + obj.screen_ids).is(":checked");
          obj.read_only = $('td input[type="checkbox"]#read_only_' + obj.screen_ids).is(":checked");
          screen_idss.push(obj);
        });
        const response = await this.$axios.post(
          "screen-module/updatescreenRole",
          {
            screen_idss: screen_idss,
            userid:this.UsersId
          },
          { headers }
        );
        if (response.data.code == 200 || response.data.code == "200") {
          this.$swal.fire(
                  'Successfully Update',
                )
        } else {
          this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + JSON.stringify(response.data.message),
                  footer: ''
                });
        }
      } catch (e) {
        console.log(e);
        this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + this.error,
                  footer: ''
                })
      }
    },
  },
};
</script>
