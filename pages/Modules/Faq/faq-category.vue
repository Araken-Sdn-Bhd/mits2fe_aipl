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
          </div>
            <div class="card mb-4">
              <div class="card-header icon-title">
                <a href="#"><i class="fa fa-shield-alt"></i></a>
                <h4>Frequently Asked Questions</h4>
              </div>
              <div class="card-body">
                <ul class="sub-tab">
                  <li><a href="#" class="active">Category</a></li>
                  <li><a href="#" class="active">Questions & Answers</a></li>
                </ul>

                
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
                                            <p v-if="setting.isactive == 0" style="color:red">Disabled</p>
                                            <p v-if="setting.isactive == 1">Enabled</p>
                                        </td>
                        <td class="td"  :class="SidebarAccess!=1?'hide':''">
                          <a  class="edit" @click="editsetting(setting)"
                            ><i class="fa fa-edit"></i
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
  name: "gender",
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
      status: 1,
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
        if (!this.gender) {
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
            "/faq-category/add",
            {
              faq_category: this.category,
              index: this.index,
              request_type: this.requesttype,
              status: this.status,
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
                "faqCategory/faqCategoryList"
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
        "/general-setting/fetch",
        {
          setting_id: data.id,
        },
        { headers }
      );
      if (response.data.code == 200) {
        this.settingId = response.data.list[0].faq_category_id;
        this.gender = response.data.setting[0].faq_category;
        this.index = response.data.setting[0].faq_;
        this.status=response.data.setting[0].status;
        this.requesttype = "update";
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
