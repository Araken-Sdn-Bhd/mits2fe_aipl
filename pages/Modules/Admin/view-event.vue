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
            
              <a href="#"><i class="far fa-calendar-edit"></i></a>
              <h4>Announcement Details</h4>
            </div>
            <div class="card-body">
              <table class="info-table event-info mt-3" width="100%">
                <thead>
                  <tr>
                    <th width="30%"></th>
                    <th width="70%"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Title</td>
                    <td>{{ title }}</td>
                  </tr>

                  <tr>
                    <td>Content</td>
                    <td>
                      <p>
                        {{ content }}
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <td>Document</td>
                    <td>
                      <a target="_blank" v-bind:href="document" class="btn btn-warning btn-text btn-green"
                        ><i class="fad fa-download"></i> Download File</a
                      >
                    </td>
                  </tr>

                  <tr>
                    <td>Start Date</td>
                    <td>{{ startdate }}</td>
                  </tr>

                  <tr>
                    <td>End Date</td>
                    <td>{{ enddate }}</td>
                  </tr>

                  <tr>
                    <td>Mantari Branch</td>
                    <td>{{ hospital_branch_id }}</td>
                  </tr>

                  <tr>
                    <td>Set Audience Category</td>
                    <td>
                      <ul>
                        <li v-if="cat1 == 1">Psychiatrist</li>
                        <li v-if="cat2 == 1">Medical Officer(MO)</li>
                        <li v-if="cat3 == 1">Counsellor</li>
                        <li v-if="cat4 == 1">Occupational Therapist</li>
                        <li v-if="cat5 == 1">Staff Nurse</li>
                        <li v-if="cat6 == 1">Healthcare Assistant</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
             <a href="/Modules/Admin/announcement-management" class="pre-1 btn btn-success mr-auto"><i class="fad fa-arrow-to-left"></i> Back</a>
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
  name: "announcement-management",
  setup() {},
  data() {
    return {
      Id: 0,
      title: "",
      content: "",
      startdate: "",
      enddate: "",
      branchId: 0,
      status: 0,
      document: "",
      userdetails: null,
      list: [],
      errors: [],
      file: null,
      cat1: 0,
      cat2: 0,
      cat3: 0,
      cat4: 0,
      cat5: 0,
      cat6: 0,
      catIds: "",
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    let urlParams = new URLSearchParams(window.location.search);
    this.Id = urlParams.get("id");
    this.getdetails();
  },
  methods: {
    async getdetails() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "announcement/getAnnouncementDetails",
        { id: this.Id },
        {
          headers,
        }
      );
      if (response.data.code == 200) {
        this.title = response.data.list[0].title;
        this.content = response.data.list[0].content;
        this.startdate = response.data.list[0].start_date;
        this.enddate = response.data.list[0].end_date;
        this.catIds = response.data.list[0].audience_ids;
        this.branchId = response.data.list[0].hospital_branch_id;
        this.document = response.data.list[0].document;
        var ctsplt = this.catIds.split(",");
        this.cat1 = ctsplt[0];
        this.cat2 = ctsplt[1];
        this.cat3 = ctsplt[2];
        this.cat4 = ctsplt[3];
        this.cat5 = ctsplt[4];
        this.cat6 = ctsplt[5];
      } else {
        window.alert("Something went wrong");
      }
    },
  },
};
</script>