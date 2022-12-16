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
              <h4>View Announcement Details</h4>
            </div>
            <div class="card-body">
              <form class="mt-3">
                <div class="row mb-5 col-sm-12">
                  <label class="col-sm-3 col-form-label">Title</label>
                  <div class="col-sm-9">
                    <input type="text" class="form-control" v-model="title" disabled="true" />
                  </div>
                </div>
                <div class="row mb-5 col-sm-12">

                  <label col-sm-3 class="col-sm-3 col-form-label"
                    >Content</label
                  >
                  <div class="col-sm-9">
                    <textarea rows="20"
                    class="form-control"
                      v-model="content"
                      disabled="true"
                    ></textarea>
                  </div>
                </div>

                <div class="row mb-5 col-sm-12">
                  <label  class="col-sm-3 col-form-label">Document</label>
                  <div class="col-sm-9">
                    <a target="_blank" @click="onDownloadFile" class="btn btn-warning btn-text btn-green"
                        ><i class="fa fa-download"></i> Download File</a
                      >
                  </div>

                </div>

                <div class="row mb-5 col-sm-12">
                  <label class="col-sm-3 col-form-label">Start Date</label>
                  <div class="col-sm-4">
                    <input
                      type="date"
                      class="form-control"
                      disabled="true"
                      v-model="startdate"
                    />
                  </div>
                </div>

                <div class="row mb-5 col-sm-12">
                  <label  class="col-sm-3 col-form-label">End Date</label>
                  <div class="col-sm-4">
                    <input
                    disabled="true"
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
                    disabled="true"
                      v-model="branchId"
                      class="form-select"
                      aria-label="Default select example"
                    >
                    <option value="0">Please Select</option>
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
                  <label  class="col-sm-3 col-form-label"
                    >Set Audience Category</label
                  >
                  <div class="col-sm-9">
                    <div class="row">
                      <div class="col-sm-6">
                        <div class="form-check mb-3">
                          <input
                          disabled="true"
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
                          disabled="true"
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
                          disabled="true"
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
                          disabled="true"
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
                          disabled="true"
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
                          disabled="true"
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
                <div class="form-foter">
                  <a
                    href="/app/modules/Admin/announcement-management"
                    class="btn btn-primary btn-text"
                    ><i class="fa fa-arrow-alt-to-left"></i> Back</a
                  >
                </div>
              </form>
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
        src: "/app/js/jquery.richtext.js",
        body: true,
        crossorigin: "anonymous",
      },
    ],
  },
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
    let urlParams = new URLSearchParams(window.location.search);
    this.Id = urlParams.get("id");
    $(document).ready(function () {
      $(".content").richText();
    });
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
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
  },
};
</script>
