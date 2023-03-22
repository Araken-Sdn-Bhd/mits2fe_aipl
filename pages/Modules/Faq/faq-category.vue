<template>
    <div id="layoutSidenav">
      <CommonSidebar />
      <div id="layoutSidenav_content">
        <CommonHeader />
        <main>
          <div class="container-fluid px-4">
            <div class="page-title">
              <h1>General Setting</h1>
            </div>
            <div class="card mb-4">
              <div class="card-body">
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      class="nav-link active"
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-home"
                      type="button"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      Category
                    </button>
                    <button
                      class="nav-link"
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-profile"
                      type="button"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      Questions & Answers
                    </button>
                  </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                  <div
                    class="tab-pane fade show active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab">
                    <div class="content-subtab">
                        <form class="g-3 mt-3" method="post" @submit.prevent="insertcat">
                    <div class="row align-items-center">
                      <div class="col-md-7 mb-4">
                        <label for="" class="form-label">Category</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter Category"
                          v-model="category"
                        />
                      </div>

                      <div class="col-lg-1 col-sm-2 mb-4">
                        <label class="form-label">Index</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="0"
                          v-model="index"
                        />
                      </div>
                      
                      <div class="col-sm-3 mb-4">
                                    <label for="" class="form-label">Status</label>
                                    <select class="form-select" v-model="status">
                                    <option value="0">Enable</option>
                                    <option value="1">Disable</option>
                                    </select>
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
                      <h3>List of Category</h3>
                    </div>
                    <table
                    class="table table-striped data-table display nowrap"
                    style="width: 100%"
                  >
                    <thead>
                      <tr>
                        <th style="width:3%">No</th>
                        <th>Category</th>
                        <th>Index</th>
                        <th>Status</th>
                        <th style="width:3%">Action</th>
                      </tr>
                    </thead>
                <tbody>
                         <tr v-for="(setting, index) in settinglist" :key="index">
                          <td>#{{index+1}}</td>
                        <td>{{setting.faq_category}}</td>
                        <td>{{setting.index}}</td>
                        <td>
                                            <p v-if="setting.isactive == 1" style="color:red">Disabled</p>
                                            <p v-if="setting.isactive == 0">Enabled</p>
                                        </td>
                        <td class="td"  :class="SidebarAccess!=1?'hide':''">
                          <a  class="edit" @click="editsetting(setting)"><i class="fa fa-edit"></i></a>
                        </td>
                      </tr>
                    </tbody>
                    </table>
                  </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                  <div class="content-subtab border-top-left">
                    <Faq />
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
  import CommonHeader from "../../../components/CommonHeader.vue";
  import CommonSidebar from "../../../components/CommonSidebar.vue";
  import Faq from "../../../components/Admin/faq.vue";
  
  export default {
    components: {
      CommonSidebar,
      CommonHeader,
      Faq,
    },
    name: "faq-category",
    data() {
      return {
        category: "",
      index: 0,
      errorList: [],
      userdetails: null,
      settinglist: [],
      settingId: 0,
      requesttype: "insert",
      loader: false,
      SidebarAccess:null,
      status: 0,
      };
    },
    beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.SidebarAccess = JSON.parse(localStorage.getItem("SidebarAccess"));
  },
  mounted() {
    this.GetSettingList();
  },
    methods: {
        async insertcat() {
      this.errorList = [];
      try {
        if (!this.category) {
          this.errorList.push("Category is required");
        }
        else {
          this.loader = true;
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          const response = await this.$axios.post(
            "/faqCategory/add",
            {
              faq_category: this.category,
              index: this.index,
              request_type: this.requesttype,
              status: this.status,
              settingId: this.settingId,
            },
            { headers }
          );
          if (response.data.code == 200) {
            this.loader = false;
            if (this.settingId > 0) {
              this.$swal.fire(
                  'Successfully Update',
                );
            } else {
              this.$swal.fire('Successfully Update', '', 'success');
            }
            this.GetSettingList();
            this.index = 0;
            this.category = "";
            this.status= 1;
            this.settingId = 0;
            this.requesttype = "insert";
          } else {
            this.loader = false;
            this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + JSON.stringify(response.data.message),
                  footer: ''
                });
          }
        }
      } catch (e) {
        this.loader = false;
        this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + e,
                  footer: ''
                });
      }
    },
    async GetSettingList() {
      const response = await this.$axios.post(
                "faqCategory/faqCategoryAll"
            );
            if (response.data.code == 200 || response.data.code == "200") {
                this.settinglist = response.data.list;
            } else {
                this.settinglist = [];
            }
    },
 
    async editsetting(data) {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "/faqCategory/fetch",
        {
          settingId: data.faq_category_id,
        },
        { headers }
      );
      if (response.data.code == 200) {
        this.settingId = data.faq_category_id;
        this.category = response.data.list[0].faq_category;
        this.index = response.data.list[0].index;
        this.status=response.data.list[0].isactive;
        this.requesttype = "update";
        
        this.GetSettingList();
        
      } else {
        this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + this.error,
                  footer: ''
                });
      }
    },
  
  
    },
  };
  </script>
  <style scoped>
  .hide{
    display: none !important;
  }
  </style>
  