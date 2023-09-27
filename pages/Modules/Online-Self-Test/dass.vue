<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <Loader v-if="loader" />
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>List of Online Self-Test</h1>
          </div>

          <div class="card mb-4">
            <div class="card-body">
              <div class="search-table mt-2">
                <div class="row">
                  <div class="col-sm-3 mb-2">
                    <select
                      v-model="branch_id"
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option value="0">Select Branch</option>
                      <option
                        v-for="slt in branchlist"
                        v-bind:key="slt.id"
                        v-bind:value="slt.id"
                      >
                        {{ slt.hospital_branch_name }}
                      </option>
                    </select>
                   
                  </div>

                  <div class="col-sm-3 mb-2">
                    <select
                      v-model="test_name"
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected >Select Self Test</option>
                      <option
                        v-for="ot in onlinetest"
                        v-bind:key="ot.id"
                        v-bind:value="ot.test_name"
                      >
                        {{ capitalized(ot.test_name) }}
                      </option>
                    </select>
                  </div>

                  <div class="col-sm-5 ml-auto mb-2 search-box">
                    <div class="input-group">
                      <span class="input-group-text" id="basic-addon1">
                        <i class="fa fa-search"></i>
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search By Name/NRIC/Passport/MRN"
                        v-model="search"
                        @keyup="OnSearch"
                      />
                    </div>
                  </div>
                </div>
              </div>
             
              <div v-if="test_name=='dass'">
                <table
                class="table table-striped data-table font-13 display nowrap"
                style="width: 100%"
              >
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Test Name</th>
                    <th>Section</th>
                    <th>Stress Score</th>
                    <th>Anxiety Score</th>
                    <th>Depression Score</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                     <tr v-for="(result, index) in list" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>
                    <a
                        style="color: #18846f; cursor: pointer"
                        @click="viewResultTest(result.id, result.ip, result.DATE)"
                        >{{ result.NAME }}</a
                      >
                    </td>
                    <td>{{ capitalized(result.TEST_NAME)}}</td>
                    <td>{{ result.DEPRESSION }}</td>
                    <td>{{ result.ANXIETY }}</td>
                    <td>{{ result.STRESS }}</td>
                    <td>{{ getFormattedDate(result.DATE) }}</td>
                  </tr>
                </tbody>
              </table>
              </div>
              <p
                style="
                  padding: 0px;
                  margin: 10px;
                  color: red;
                  display: flex;
                  justify-content: center;
                "
              >
                Please Select Test Name and Search Patient's Name
              </p>
            </div>
          </div>
        </div>
      </main>
      <intervention-footer></intervention-footer>
    </div>
  </div>
</template>
<script>
import CommonHeader from '../../../components/CommonHeader.vue';
import CommonSidebar from '../../../components/CommonSidebar.vue';
import moment from 'moment';
export default {
  components: { CommonSidebar, CommonHeader },
  name: "test-list",

  data() {
    return {
      userdetails: null,
      list: [],
      branchlist: [],
      onlinetest: [],
      keyword: "",
      search: "",
      branch_id: 0,
      test_name: "",
      loader: false,
      assistancelist: [],
      SidebarAccess:null,
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.SidebarAccess = JSON.parse(localStorage.getItem("SidebarAccess"));
    this.getRole();

  },
  mounted() {
    this.GetBranchList();
    this.GetOnlineTest();

  },
  methods: {
    async GetBranchList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response2 = await this.$axios.get("hospital/branch-list", {
        headers,
      });
      if (response2.data.code == 200 || response2.data.code == "200") {
        this.branchlist = response2.data.list;
      } else {
        this.branchlist = [];
      }
     
    },

    getFormattedDate(date) {
            return moment(date).format("DD-MM-YYYY HH:mm:ss")
        },

    async getRole() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "staff-management/getRoleCode",
        { email: this.userdetails.user.email },
        {
          headers,
        }
      );
      this.branch_id=this.userdetails.branch.branch_id;
          

    },

    async GetOnlineTest() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response1 = await this.$axios.get(
        "patient/list-online-test", { headers });
      if (response1.data.code == 200 || response1.data.code == "200") {
        this.onlinetest = response1.data.onlinetest;
      } else {
        this.onlinetest = [];
      }
      this.loader=false;
    },

    capitalized(name) {
      const capitalizedFirst = name.toUpperCase();

      return capitalizedFirst;
    },

    async viewResultTest(pid, user_ip_address, DATE){
      if(this.SidebarAccess==1){
        this.$router.push({
        path: "/modules/Online-Self-Test/view-dass-result",
        query: { id: pid, ip: user_ip_address, date:DATE },
      });
      }else{

      }
    },

    async OnSearch() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      if (!this.search) {
        this.keyword = "no-keyword";
      } else {
        this.keyword = this.search;
      }
      const response = await this.$axios.post(
        "/patient/answered-test",
        {
          keyword: this.keyword,
          branch_id: this.branch_id,
          test_name: this.test_name,
        },
        { headers }
      );
      console.log("my list", response.data);
      if (response.data.code == 200) {
        this.list = response.data.resulttest;
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
