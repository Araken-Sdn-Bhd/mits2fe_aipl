<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
         <Loader v-if="loader" />
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>General Setting</h1>
            <!-- <a href="#"><i class="fal fa-plus"></i> Add</a> -->
          </div>
            <div class="card mb-4">
              <div class="card-header icon-title">
                <a href="#"><i class="fa fa-shield-alt"></i></a>
                <h4>Household Income Status</h4>
              </div>
              <div class="card-body">
                <ul class="sub-tab">
                  <li>
                    <a href="#" class="active">Household Income Status</a>
                  </li>
                </ul>

                <div class="content-subtab">
                  <form class="g-3 mt-3" method="post" @submit.prevent="insertincomestatus">
                    <div class="row mb-4 align-items-center">
                      <div class="col-md-7">
                        <label for="" class="form-label"
                          >Household Income Status</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter Household Income Status"
                          v-model="status"
                        />
                      </div>

                      <div class="col-md-1">
                        <label class="form-label">Index</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="0"
                          v-model="index"
                        />
                      </div>
                    </div>
                    <!-- close-row -->
                     <p v-if="errorList.length">
                          <ul>
                           <li style="color:red"  v-for='err in errorList' :key='err' >
                           {{ err }}
                             </li>
                        </ul>
                       </p>
                       <div class="d-flex justify-content-center" id="sidebar" ref="sidebar">
        <button type="submit" class="btn btn-warning btn-text ml-auto" v-if="settingId">
        <i class="fa fa-save"></i> Save
        </button>
         <button type="submit" class="btn btn-warning btn-text" v-if="!settingId">
          <i class="fa fa-plus"></i> Add Parameter
        </button>
      </div>
                  </form>



                  <div class="table-title">
                    <h3>List of Household Income Status</h3>
                  </div>
                  <table
                    class="table table-striped data-table"
                    style="width: 100%"
                  >
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Household Income Status</th>
                        <th>Index</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                      <tbody>
                        <tr v-for="(setting, index) in settinglist" :key="index">
                         <td>{{index+1}}</td>
                        <td>{{setting.section_value}}</td>
                        <td>{{setting.section_order}}</td>
                        <td class="td"  :class="SidebarAccess!=1?'hide':''">
                          <a  class="edit" @click="editsetting(setting)"
                            ><i class="fa fa-edit"></i
                          ></a>
                          <a class="action-icon icon-danger" @click="deletesetting(setting)"
                            ><i class="fa fa-trash-alt"></i
                          ></a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
  name: "household-income-status",
  data() {
    return {
      status: "",
      index: 0,
      errorList: [],
      userdetails: null,
      settinglist: [],
      settingId: 0,
      requesttype: "insert",
      loader: false,
      SidebarAccess:null,
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
          "general-setting/list?section=" +
          "household-income-status",
        { headers }
      )
      .then((resp) => {
        this.settinglist = resp.data.list;
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
       if (this.SidebarAccess != 1) {
      this.$refs.sidebar.classList.add("hide");
    }
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.SidebarAccess = JSON.parse(localStorage.getItem("SidebarAccess"));
  },
  methods: {
    async insertincomestatus() {
      this.errorList = [];
      try {
        if (!this.status) {
          this.errorList.push("Household-income-status is required");
        }
        if (!this.index) {
          this.errorList.push("Index is required");
        } else {
          this.loader = true;
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          const response = await this.$axios.post(
            "/general-setting/add",
            {
              added_by: this.userdetails.user.id,
              section: "household-income-status",
              section_value: this.status,
              section_order: this.index,
              setting_id: this.settingId,
              request_type: this.requesttype,
            },
            { headers }
          );
          if (response.data.code == 200) {
            this.loader = false;
            if (this.settingId > 0) {
              this.$nextTick(() => {
                $("#updatepopup").modal("show");
              });
            } else {
              this.$nextTick(() => {
                $("#insertpopup").modal("show");
              });
            }
            this.GetSettingList();
            this.index = 0;
            this.status = "";
            this.settingId = 0;
            this.requesttype = "insert";
          } else {
            this.loader = false;
            this.$nextTick(() => {
              $("#errorpopup").modal("show");
            });
          }
        }
      } catch (e) {
        this.loader = false;
      }
    },
    async GetSettingList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get(
        "general-setting/list?section=" + "household-income-status",
        { headers }
      );
      if (response.data.code == 200 || response.data.code == "200") {
        this.settinglist = response.data.list;
      } else {
        this.settinglist = [];
      }
    },
    async deletesetting(data) {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "/general-setting/remove",
        {
          added_by: this.userdetails.user.id,
          setting_id: data.id,
        },
        { headers }
      );
      if (response.data.code == 200) {
        this.$nextTick(() => {
          $("#deletepopup").modal("show");
        });
        this.GetSettingList();
      } else {
        this.$nextTick(() => {
          $("#errorpopup").modal("show");
        });
      }
    },
    async editsetting(data) {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "/general-setting/fetch",
        {
          setting_id: data.id,
        },
        { headers }
      );
      if (response.data.code == 200) {
        this.settingId = response.data.setting[0].id;
        this.status = response.data.setting[0].section_value;
        this.index = response.data.setting[0].section_order;
        this.requesttype = "update";
      } else {
        window.alert("Something went wrong");
      }
    },
  },
};
</script>
