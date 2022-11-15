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
              <a><i class="far fa-calendar-alt"></i></a>
              <h4>Add New Announcement</h4>
            </div>
            <div class="card-body">
              <form class="mt-3">
                <div class="row mb-5">
                  <label class="col-sm-3 col-form-label">Title</label>
                  <div class="col-sm-9">
                    <input type="text" class="form-control" v-model="title" />
                  </div>
                </div>
                <div class="row mb-5">
                  <label for="inputPassword3" class="col-sm-3 col-form-label"
                    >Content</label
                  >
                  <div class="col-sm-9">
                    <textarea
                      class="content"
                      name="example"
                      v-model="content"
                    ></textarea>
                  </div>
                </div>

                <div class="row mb-5">
                  <label for="inputPassword3" class="col-sm-3 col-form-label"
                    >Document</label
                  >
                  <div class="col-sm-9">
                    <input
                      type="file"
                      class="form-control"
                      id="inputPassword3"
                      @change="selectFile"
                    />
                  </div>
                </div>

                <div class="row mb-5">
                  <label for="inputPassword3" class="col-sm-3 col-form-label"
                    >Start Date</label
                  >
                  <div class="col-sm-4">
                    <input
                      type="date"
                      class="form-control"
                      id="inputPassword3"
                      v-model="startdate"
                    />
                  </div>
                </div>

                <div class="row mb-5">
                  <label for="inputPassword3" class="col-sm-3 col-form-label"
                    >End Date</label
                  >
                  <div class="col-sm-4">
                    <input
                      type="date"
                      class="form-control"
                      id="inputPassword3"
                      v-model="enddate"
                    />
                  </div>
                </div>

                <div class="row mb-5">
                  <label for="inputPassword3" class="col-sm-3 col-form-label"
                    >Mentari Branch</label
                  >
                  <div class="col-sm-9">
                    <select
                      v-model="branchId"
                      class="form-select"
                      aria-label="Default select example"
                    >
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

                <div class="row mb-5">
                  <label for="inputPassword3" class="col-sm-3 col-form-label"
                    >Set Audience Category</label
                  >
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
                <div class="form-foter">
                  <a
                    href="/app/modules/Admin/announcement-management"
                    class="btn btn-primary btn-text"
                    ><i class="far fa-arrow-alt-to-left"></i> Back</a
                  >
                  <div class="btn-right">
                    <button v-on:click="onCreateEvent('0')" class="btn btn-warning btn-text">
                      <i class="far fa-save"></i> Save as draft
                    </button>
                    <button v-on:click="onCreateEvent('1')" class="btn btn-success btn-text">
                      <i class="fad fa-paper-plane"></i> Publish
                    </button>
                  </div>
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
    async onCreateEvent(status) {
      var value = status;
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
      //   if (!this.file) {
      //     this.errors.push("Document is required.");
      //   }
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
        body.append("added_by", this.userdetails.user.id);
        body.append("title", this.title);
        body.append("content", this.content);
        body.append("document", this.file);
        body.append("start_date", this.startdate);
        body.append("end_date", this.enddate);
        body.append("branch_id", this.branchId);
        body.append("id", this.Id);
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
        body.append("status", value);
        const response = await this.$axios.post("announcement/update", body, {
          headers,
        });
        console.log('my response',response.data);
        if (response.data.code == 200 || response.data.code == "200") {
          this.$router.push("/modules/Admin/announcement-management");
        } else {
          this.$nextTick(() => {
            $("#errorpopup").modal("show");
          });
        }
      }
    },
  },
};
</script>
