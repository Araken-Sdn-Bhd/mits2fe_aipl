<template>
  <div id="layoutSidenav">
    <Adminsidebar />
    <div id="layoutSidenav_content">
      <AdminHeader />
      <main>
        <Loader v-if="loader" />
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>General Setting</h1>
            <!-- <a href="#"><i class="fal fa-plus"></i> Add</a> -->
          </div>
            <div class="card mb-4">
              <div class="card-header icon-title">
                <a href="#"><i class="far fa-shield-alt"></i></a>
                <h4>Accommodation</h4>
              </div>
              <div class="card-body">
                <ul class="sub-tab">
                  <li>
                    <a href="#" class="active">Accommodation</a>
                  </li>
                </ul>

                <div class="content-subtab">
                  <form class="g-3 mt-3" method="post" @submit.prevent="insertaccommodation">
                    <div class="row mb-4 align-items-center">
                      <div class="col-md-7">
                        <label for="" class="form-label">Accommodation</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter Accommodation"
                          v-model="accommodation"
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
                    <p v-if="errorList.length">
                          <ul>
                           <li style="color:red"  v-for='err in errorList' :key='err' >
                           {{ err }}
                             </li>
                        </ul>
                       </p>
                    <!-- close-row -->
                      <div class="d-flex justify-content-center" >
        <button type="submit" class="btn btn-warning btn-text ml-auto" v-if="settingId">
        <i class="far fa-save"></i> Save
        </button>
         <button type="submit" class="btn btn-warning btn-text" v-if="!settingId">
          <i class="far fa-plus"></i> Add Parameter
        </button>
      </div>
                  </form>

                 

                  <div class="table-title">
                    <h3>List of Accommodation</h3>
                  </div>
                  <table
                    class="table table-striped data-table"
                    style="width: 100%"
                  >
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Accommodation</th>
                        <th>Index</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                       <tr v-for="(setting, index) in settinglist" :key="index">
                        <td>{{index+1}}</td>
                        <td>{{setting.section_value}}</td>
                        <td>{{setting.section_order}}</td>
                        <td>
                          <a  class="edit" @click="editsetting(setting)"
                            ><i class="far fa-edit"></i
                          ></a>
                          <a class="action-icon icon-danger" @click="deletesetting(setting)"
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
      </main>
    </div>
  </div>
</template>
  <script>
import Adminsidebar from "../../../components/Admin/Adminsidebar.vue";
import AdminHeader from "../../../components/Admin/Admin_ToHeader.vue";
export default {
  components: { Adminsidebar, AdminHeader },
  name: "accommodation",
  data() {
    return {
      accommodation: "",
      index: 0,
      errorList: [],
      userdetails: null,
      settinglist: [],
      settingId: 0,
      requesttype: "insert",
       loader: false,
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.GetSettingList();
  },
  methods: {
    async insertaccommodation() {
      this.errorList = [];
      try {
        if (!this.accommodation) {
          this.errorList.push("Accommodation is required");
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
              section: "accommodation",
              section_value: this.accommodation,
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
            this.accommodation = "";
            this.settingId = 0;
            this.requesttype = "insert";
          } else {
            this.loader = false;
            this.$nextTick(() => {
              $("#errorpopup").modal("show");
            });
          }
        }
      } catch (e) {}
    },
    async GetSettingList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get(
        "general-setting/list?section=" + "accommodation",
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
        this.accommodation = response.data.setting[0].section_value;
        this.index = response.data.setting[0].section_order;
        this.requesttype = "update";
      } else {
        window.alert("Something went wrong");
      }
    },
  },
};
</script>