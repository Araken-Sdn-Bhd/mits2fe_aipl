<template>
  <div id="layoutSidenav">
    <div id="layoutSidenav_content">
      <main>
        <Loader v-if="loader" />
        <div class="container-fluid px-4">
            <div class="card mb-4">
              <div class="card-header icon-title">
                <a href="#"><i class="fa fa-shield-alt"></i></a>
                <h4>Frequently Asked Questions</h4>
              </div>
              <div class="card-body">
                <div class="content-subtab">
                  <div class="row">
                        <div class="col-md-4 mb-3">
                          <label for="" class="form-label">Select Category</label>
                          <select
                            v-model="categoryId"
                            class="form-select"
                            aria-label="Default select example"
                            @change="onCatbind($event)"
                          >
                            <option value="">All Category</option>
                            <option v-for="cat in categoryList"  v-bind:key="cat.faq_category_id" v-bind:value="cat.faq_category_id">
                              {{ cat.faq_category }}
                            </option>
                          </select>
                        </div>
                        </div>
                        <br>
                  <table class="table table-striped data-table" style="width: 100%">
                    
                    <tbody>
                       <tr v-for="(setting, index) in settinglist" :key="index">
                     
                        <td>
                          <p><b>{{index+1}} : {{setting.question}}</b></p>
                          <p style="color:grey,">&nbsp;&nbsp;&nbsp;&nbsp; {{setting.answer}}</p>
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
export default {
  name: "faq",
  data() {
    return {
      userdetails: null,
      settinglist: [],
      loader: false,
      SidebarAccess:null,
      status: 1,
      categoryList:[],
      categoryId:"",
    };
  },
  mounted() {
    this.GetCategoryList();
    this.GetSettingList();

  },
  beforeMount() {
   
  },
  methods: {

    async onCatbind(event) {
      
            const response = await this.$axios.post(
                "faqList/listbyId",
                {category_id: event.target.value}
            );
            if (response.data.code == 200 || response.data.code == "200") {
                this.settinglist = response.data.list;
            } else {
                this.settinglist = [];
            }
    },

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

  async GetSettingList() {
          
            const response = await this.$axios.post(
                "faqList/list"
            );
            if (response.data.code == 200 || response.data.code == "200") {
                this.settinglist = response.data.list;
            } else {
                this.settinglist = [];
            }
        },
       
  }
};

</script>
<style scoped>
.hide {
  display: none !important;
}
</style>
