<template>
  <div class="card mb-4">
    <div class="card-body">
      <form class="g-3 mt-3" method="post" @submit.prevent="insertcat">
                    <div class="row align-items-center">
                      <div class="col-md-3 mb-4">
                        <label for="" class="form-label">Category</label>
                        <select
                            v-model="categoryId"
                            class="form-select"
                            aria-label="Default select example">
                            <option value="">Select</option>
                            <option v-for="cat in categoryList"  v-bind:key="cat.faq_category_id" v-bind:value="cat.faq_category_id">
                              {{ cat.faq_category }}
                            </option>
                          </select>
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
                    <div class="row align-items-center">
                     

                      <div class="col-sm-6 mb-4 mb-4">
                        <label class="form-label">Question</label>
                        <textarea class="form-control textarea" v-model="question" rows="5"></textarea>
                      </div>
                      
                      <div class="col-sm-6 mb-4 mb-4">
                        <label class="form-label">Answer</label>
                        <textarea class="form-control textarea" v-model="answer" rows="5"></textarea>
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
                        <th>Question</th>
                        <th>Answer</th>
                        <th>Index</th>
                        <th>Status</th>
                        <th style="width:3%">Action</th>
                      </tr>
                    </thead>
                <tbody>
                         <tr v-for="(setting, index) in settinglist" :key="index">
                          <td>#{{index+1}}</td>
                        <td>{{setting.question}}</td>
                        <td>{{setting.answer}}</td>
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
</template>
<script>
export default {
  setup() {},
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
      categoryList:[],
      categoryId:"",
      question:"",
      answer:"",
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.SidebarAccess = JSON.parse(localStorage.getItem("SidebarAccess"));
  },
  mounted() {
    this.GetCategoryList();
    this.GetSettingList();
  },
  methods: {
    
    async GetCategoryList() {
           
           const response = await this.$axios.post(
               "faqCategory/faqCategoryList"
           );
           if (response.data.code == 200 || response.data.code == "200") {
               this.categoryList = response.data.list;
           } else {
               this.categoryList = [];
           }
       },
    async insertcat() {
      this.errorList = [];
      try {
        if (!this.categoryId) {
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
            "/faqList/add",
            {
              faq_category_id: this.categoryId,
              question: this.question,
              answer:this.answer,
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
            this.categoryId ="",
            this.question="",
            this.answer="",
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
                "faqList/listAll"
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
        "/faqList/fetch",
        {
          settingId: data.faq_list_id,
        },
        { headers }
      );
      if (response.data.code == 200) {
        this.settingId = data.faq_list_id;
        this.categoryId = response.data.list[0].faq_category_id;
        this.question = response.data.list[0].question;
        this.answer = response.data.list[0].answer;
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
