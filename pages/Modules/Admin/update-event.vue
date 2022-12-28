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
              <a><i class="fa fa-calendar-alt"></i></a>
              <h4>Add New Announcement</h4>
            </div>
            <div class="card-body">
                <div class="row mb-5 col-sm-12">
                  <label class="col-sm-3 col-form-label">Title</label>
                  <div class="col-sm-9">
                    <input type="text" class="form-control" v-model="title" />
                  </div>
                </div>
                <div class="row mb-5 col-sm-12">
                  <label class="col-sm-3 col-form-label"
                    >Content</label
                  >
                  <div class="col-sm-9">
                    <textarea  class="form-control" v-model="content" rows="20"></textarea>
                  </div>
                </div>

                <div class="row mb-5 col-sm-12">
                  <label class="col-sm-3 col-form-label">Document</label
                  >
                  <div class="col-sm-9">
                    <input
                      type="file"
                      class="form-control"
                      @change="selectFile"
                    />
                    <br>
                    <a target="_blank" @click="onDownloadFile" class="btn btn-warning btn-text btn-green"
                        ><i class="fa fa-download"></i> Download File</a
                      >
                  </div>
                </div>

                <div class="row mb-5 col-sm-12">
                  <label  class="col-sm-3 col-form-label">Start Date</label>
                  <div class="col-sm-4">
                    <input
                      type="date"
                      class="form-control"
                      v-model="startdate"
                    />
                  </div>
                </div>

                <div class="row mb-5 col-sm-12">
                  <label  class="col-sm-3 col-form-label">End Date</label>
                  <div class="col-sm-4">
                    <input
                      type="date"
                      class="form-control"
                      v-model="enddate"
                    />
                  </div>
                </div>

                <div class="row mb-5 col-sm-12">
                  <label  class="col-sm-3 col-form-label">Mentari Branch</label>
                  <div class="col-sm-9">
                    <select
                      v-model="branchId"
                      class="form-select"
                      aria-label="Default select example"
                    >
                    <option value="0">Please Select</option>
                    <option></option>
                      <option
                        v-for="brnch in list"
                        v-bind:key="brnch.id"
                        v-bind:value="brnch.id"
                      >
                        {{ brnch.hospital_branch_name }}
                      </option>
                    </select>
                  </div>
                </div>

                <div class="row mb-5 col-sm-12">
                  <label  class="col-sm-3 col-form-label">Set Audience Category</label>
                  <div class="col-sm-9">
                    <div class="row">
                      <div class="col-sm-6">
                        <div class="form-check mb-3">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="Psychiatrist"
                            v-model="cat1"
                          />
                          <label class="form-check-label" for="Psychiatrist">
                            Psychiatrist
                          </label>
                        </div>

                        <div class="form-check mb-3">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="medical-officer"
                             v-model="cat2"
                          />
                          <label class="form-check-label" for="medical-officer">
                            Medical Officer(MO)
                          </label>
                        </div>

                        <div class="form-check mb-3">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="Counsellor"
                             v-model="cat3"
                          />
                          <label class="form-check-label" for="Counsellor">
                            Counsellor
                          </label>
                        </div>
                      </div>

                      <div class="col-sm-6">
                        <div class="form-check mb-3">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="Occupational-Therapist"
                             v-model="cat4"
                          />
                          <label
                            class="form-check-label"
                            for="Occupational-Therapist"
                          >
                            Occupational Therapist
                          </label>
                        </div>

                        <div class="form-check mb-3">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="Staff-Nurse"
                             v-model="cat5"
                          />
                          <label class="form-check-label" for="Staff-Nurse">
                            Staff Nurse
                          </label>
                        </div>

                        <div class="form-check mb-3">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="Healthcare-Assistant"
                             v-model="cat6"
                          />
                          <label
                            class="form-check-label"
                            for="Healthcare-Assistant"
                          >
                            Healthcare Assistant
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  <p v-if="errors.length">
<ul>
        <li style="color:red"  v-for='err in errors'
    :key='err' >
          {{ err }}
        </li>
      </ul>
        </p>
        <br>
      <br>
                <div class="form-foter">
                  <button @click="back" type="button" class="btn btn-primary btn-fill btn-md">
                    <i class="fa fa-step-backward"/> &nbsp; Back
                </button>
                  <div class="btn-right" :class="SidebarAccess!=1?'hide':''">
                    <button type="submit" @click="onCreateEvent()" class="btn btn-warning btn-text">
                      <i class="fa fa-save"></i> Save as draft
                    </button>

                    <button type="submit" @click="onPublishEvent()" class="btn btn-success btn-text">
                      <i class="fa fa-paper-plane"></i> Publish
                    </button>
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
import CommonHeader from '../../../components/CommonHeader.vue';
import CommonSidebar from '../../../components/CommonSidebar.vue';
export default {
  components: { CommonHeader, CommonSidebar },
  name: "create-event",
  head: {
    script: [
      {
        src: "/app/js/bootstrap.bundle.min.js",
        body: true,
        crossorigin: "anonymous",
      },
      {
        src: "/app/js/scripts.js",
        body: true,
        crossorigin: "anonymous",
      },
      {
        src: "/app/js/jquery-3.5.1.js",
        body: true,
        crossorigin: "anonymous",
      },
      {
        src: "/app/js/jquery.richtext.js",
        body: true,
        crossorigin: "anonymous",
      },
    ],
  },
  setup() {},
  data() {
    return {
      Id: null,
      title: "",
      content: "",
      startdate: "",
      enddate: "",
      branchId: 0,
      status: 0,
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
      SidebarAccess:null,
    };
  },
  mounted() {
    $(document).ready(function () {
      $(".content").richText();
    });
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.SidebarAccess = JSON.parse(localStorage.getItem("SidebarAccess"));
    let urlParams = new URLSearchParams(window.location.search);
    this.Id = urlParams.get("id");
    this.GetbranchList();
    this.getdetails();
  },
  methods: {
    async onDownloadFile() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "announcement/downloadFile",
        { document: this.document },
        {
          headers,
        }
      );
      if (response.data.code == 200) {
            if (response.data.filepath) {
              const link = document.createElement('a');
              window.open(response.data.filepath, "_blank");
            } else {
              this.error = "No Record Found";
            }
          } else {
            this.error = "No Record Found";
          }
    },


    back() {
      this.$router.go(-1);
    },

    async getdetails() {
      let urlParams = new URLSearchParams(window.location.search);
    this.Id = urlParams.get("id");
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
        if (ctsplt[0] == 1){
          this.cat1 = 'Psychiatrist';
        }
        if (ctsplt[1] == 1){
          this.cat2 = 'medical-officer';
        }
        if (ctsplt[2] == 1){
          this.cat3 = 'Counsellor';
        }
        if (ctsplt[3] == 1){
          this.cat4 = 'Occupational-Therapist';
        }
        if (ctsplt[4] == 1){
          this.cat5 = 'Staff-Nurse';
        }
        if (ctsplt[5] == 1){
          this.cat6 = 'Healthcare-Assistant';
        }

      } else {
        this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + this.error,
                  footer: ''
                });
      }
    },

    async GetbranchList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get("hospital/branch-list", {
        headers,
      });
      if (response.data.code == 200 || response.data.code == "200") {
        this.list = response.data.list;
      } else {
        this.list = [];
      }
    },
    selectFile(event) {
      this.file = event.target.files[0];
    },
    async onCreateEvent() {
      if (confirm("Are you sure you want to save this as draft ? ")) {
        try {
        this.errors = [];
        if (!this.title) {
          this.errors.push("Title is required.");
        }
        if (!this.content) {
          this.errors.push("Content is required.");
        }
        if (!this.startdate) {
          this.errors.push("Start Date is required.");
        }
        if (!this.enddate) {
          this.errors.push("End Date is required.");
        }
        if (this.branchId <= 0) {
          this.errors.push("Branch  is required.");
        }
         else {
          if (this.cat1 > 0) {
            this.cat1 = 1;
          }
          if (this.cat2 > 0) {
            this.cat2 = 1;
          }
          if (this.cat3 > 0) {
            this.cat3 = 1;
          }
          if (this.cat4 > 0) {
            this.cat4 = 1;
          }
          if (this.cat5 > 0) {
            this.cat5 = 1;
          }
          if (this.cat6 > 0) {
            this.cat6 = 1;
          }
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          let body = new FormData();
          if (this.Id != null)
          body.append("id",this.Id);
          body.append("added_by", this.userdetails.user.id);
          body.append("title", this.title);
          body.append("content", this.content);
          body.append("document", this.file);
          body.append("start_date", this.startdate);
          body.append("end_date", this.enddate);
          body.append("branch_id", this.branchId);
          body.append(
            "audience_ids",
            this.cat1 +
              "," +
              this.cat2 +
              "," +
              this.cat3 +
              "," +
              this.cat4 +
              "," +
              this.cat5 +
              "," +
              this.cat6
          );
          body.append("status", 0);
          const response = await this.$axios.post("announcement/update", body, {
            headers,
          });
          if (response.data.code == 200 || response.data.code == "200") {
            this.$swal.fire('created successfully', '', 'success');
            this.$router.push("/modules/Admin/announcement-management");
          } else {
            this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + JSON.stringify(response.data.message),
                  footer: ''
                });
          }
        }

      } catch (e) {this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + JSON.stringify(response.data.message),
                  footer: ''
                });
      }
    }
    },
    async onPublishEvent() {
      if (confirm("Are you sure you want to publish this entry? ")) {
      try {
        this.errors = [];
        if (!this.title) {
          this.errors.push("Title is required.");
        }
        if (!this.content) {
          this.errors.push("Content is required.");
        }
        if (!this.startdate) {
          this.errors.push("Start Date is required.");
        }
        if (!this.enddate) {
          this.errors.push("End Date is required.");
        }
        if (this.branchId <= 0) {
          this.errors.push("Branch  is required.");
        }
         else {
          if (this.cat1 > 0) {
            this.cat1 = 1;
          }
          if (this.cat2 > 0) {
            this.cat2 = 1;
          }
          if (this.cat3 > 0) {
            this.cat3 = 1;
          }
          if (this.cat4 > 0) {
            this.cat4 = 1;
          }
          if (this.cat5 > 0) {
            this.cat5 = 1;
          }
          if (this.cat6 > 0) {
            this.cat6 = 1;
          }
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          let body = new FormData();
          if (this.Id != null)
          body.append("id",this.Id);
          body.append("added_by", this.userdetails.user.id);
          body.append("title", this.title);
          body.append("content", this.content);

          body.append("document", this.file);
          body.append("start_date", this.startdate);
          body.append("end_date", this.enddate);
          body.append("branch_id", this.branchId);
          body.append(
            "audience_ids",
            this.cat1 +
              "," +
              this.cat2 +
              "," +
              this.cat3 +
              "," +
              this.cat4 +
              "," +
              this.cat5 +
              "," +
              this.cat6
          );
          body.append("status", 1);
          const response = await this.$axios.post("announcement/update", body, {
            headers,
          });
          if (response.data.code == 200 || response.data.code == "200") {
            this.$swal.fire('created successfully', '', 'success');

            this.$router.push("/modules/Admin/announcement-management");
          } else {
            this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + JSON.stringify(response.data.message),
                  footer: ''
                });
          }
        }

      } catch (e) {this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + JSON.stringify(response.data.message),
                  footer: ''
                });
      }
    }
    },
  },
};
</script>
