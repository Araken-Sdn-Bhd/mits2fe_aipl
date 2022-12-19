<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>Job Approval Request</h1>
          </div>

          <div class="card mb-4">
            <div class="card-body">
              <table
                class="table table-striped data-table font-13 display nowrap"
                style="width: 100%"
              >
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Company</th>
                    <th>Job Posted</th>
                    <th>New Job</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(job, index) in list" :key="index">
                    <td style="width:5%">#{{ index+1 }}</td>
                    <td style="width:40%">{{ job.company_name }}</td>
                    <td >{{ job.job_posted }}</td>
                    <td >{{ job.NewJobs }}</td>
                    <td style="width:5%">
                      <a style="cursor:pointer;" @click="OnviewClick(job.company_id,job.company_name)" class="view"
                        ><i class="fa fa-eye"></i
                      ></a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p
                v-show="!list.length" style=" padding: 0px;
                margin: 10px;
                color: red;
                display: flex;
                justify-content: center;">
                No Record Found
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
export default {
  components: { CommonSidebar, CommonHeader },
  name: "job-offer",

  data() {
    return {
      userdetails: null,
      list: [],
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
  },
  mounted() {
    this.getList();

  },
  methods: {
    async getList(){
      const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
    };
    const response = await this.$axios.post(
            "intervention-company/approval-list",
            { branch_id: this.userdetails.branch.branch_id,email:this.userdetails.user.email},
            { headers }
          )
      .then((resp) => {
        this.list = resp.data;
        this.alllist = resp.data;
        //$(document).ready(function () {
        //  $(".data-table").DataTable({
        //    searching: false,
        //    bLengthChange: false,
        //    bInfo: false,
        //    scrollX: true,
        //    language: {
        //      paginate: {
        //        next: '<i class="fad fa-arrow-to-right"></i>', // or '→'
        //        previous: '<i class="fad fa-arrow-to-left"></i>', // or '←'
        //      },
        //    },
        //  });
        //});
      })
      .catch((err) => {
        console.error(err);
      });
    },

    OnviewClick(id,company) {
      this.$router.push({
        path: "/modules/Intervention/company-job-approval-request",
        query: { id: id ,company:company},
      });
    },
  },
};
</script>
