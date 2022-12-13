<template>
  <div id="layoutSidenav">
    <div id="layoutSidenav_content" class="ml-0">
      <main>
        <div class="container-fluid px-4">
          <Loader v-if="loader" />
          <div class="page-title">
            <h1>Patient Screening and Appointment</h1>
          </div>
          <div class="card mb-4">
            <div class="card-header bg-transparent">
              <h4>COPENHAGEN BURNOUT INVENTORY(CBI)</h4>
            </div>
            <div class="card-body">
              <p class="center-text-p">
                Choose the appropriate answer for each question based on the
                level defined.
                <small
                  >Pilih jawapan bagi setiap soalan berdasarkan tahap yang
                  dinyatakan.</small
                >
              </p>
              <nav>
                <ul class="nav nav-tabs" id="nav-tab" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      href="#nav-home"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                      ref="personalburnout"
                    >
                      1: Personal Burnout
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      href="#nav-profile"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                      ref="workburnout"
                    >
                      2: Work Burnout
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="nav-contact-tab"
                      data-bs-toggle="tab"
                      href="#nav-contact"
                      role="tab"
                      aria-controls="nav-contact"
                      aria-selected="false"
                      ref="clientburnout"
                    >
                      3: Client/Customer Burnout
                    </a>
                  </li>
                </ul>
              </nav>
              <div class="tab-content" id="nav-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                  ref="navhome"
                >
                  <div class="content-subtab">
                    <div class="form-title">
                      <h5>Part 1- Personal Burnout</h5>
                      <!-- <p class="mb-5px">[0: Did not apply to me at all 1: Applied to me to some degree, or some of the time 2: Applied to me to a considerable degree, good part of time 3: Applied to me very much, or most of the time]</p>
                      <p class="p-text">[0: Did not apply to me at all 1: Applied to me to some degree, or some of the time 2: Applied to me to a considerable degree, good part of time 3: Applied to me very much, or most of the time]</p> -->
                      <ul class="instruction">
                        <li>
                          <span class="no">1</span>
                          <span class="text">
                            Always / Very High Degree
                            <i> Sentiasa / Tahap yang Sangat Tinggi</i>
                          </span>
                        </li>
                        <li>
                          <span class="no">2</span>
                          <span class="text">
                            Often / High Degree
                            <i>Kerap kali / Tahap tinggi</i>
                          </span>
                        </li>
                        <li>
                          <span class="no">3</span>
                          <span class="text">
                            Sometimes / Somewhat High
                            <i> Kadang / Tahap Agak Tinggi</i>
                          </span>
                        </li>
                        <li>
                          <span class="no">4</span>
                          <span class="text">
                            Seldom / Low Degree
                            <i> Jarang / Tahap Rendah</i>
                          </span>
                        </li>
                        <li>
                          <span class="no">5</span>
                          <span class="text">
                            Never / Almost Never / Very Low Degree
                            <i>
                              Tidak Pernah / Hampir Tidak Pernah / Tahap Sangat
                              Rendah</i
                            >
                          </span>
                        </li>
                      </ul>
                    </div>

                    <table class="form-table" id="personaltable">
                      <thead>
                        <tr>
                          <th width="50%"></th>
                          <th width="50%"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(pb, index) in peronallist" :key="index">
                          <td>
                            {{ pb.Question }}<span class="red-span">*</span>
                            <i>{{ pb.question_ml }}</i>
                          </td>
                          <td>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                v-bind:name="'pb' + index"
                                value="1"
                                @change="onpersonalchange(pb.id, 1)"
                              />
                              <label class="form-check-label" for="1">{{
                                pb.Answer1
                              }}</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                value="2"
                                v-bind:name="'pb' + index"
                                @change="onpersonalchange(pb.id, 2)"
                              />
                              <label class="form-check-label" for="2">{{
                                pb.Answer2
                              }}</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                value="3"
                                v-bind:name="'pb' + index"
                                @change="onpersonalchange(pb.id, 3)"
                              />
                              <label class="form-check-label" for="3">{{
                                pb.Answer3
                              }}</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                value="4"
                                v-bind:name="'pb' + index"
                                @change="onpersonalchange(pb.id, 4)"
                              />
                              <label class="form-check-label" for="4">{{
                                pb.Answer4
                              }}</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                value="5"
                                v-bind:name="'pb' + index"
                                @change="onpersonalchange(pb.id, 5)"
                              />
                              <label class="form-check-label" for="5">{{
                                pb.Answer5
                              }}</label>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <div class="d-flex align-items-center mt-2">
                      <button
                        @click="onburnout"
                        class="btn btn-success next-btn ml-auto"
                      >
                        Next <i class="fad fa-arrow-to-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                  ref="navprofile"
                >
                  <div class="content-subtab border-top-left">
                    <div class="form-title">
                      <h5>PART 2 - WORK-RELATED BURNOUT</h5>
                      <ul class="instruction">
                        <li>
                          <span class="no">1</span>
                          <span class="text">
                            Always / Very High Degree
                            <i> Sentiasa / Tahap yang Sangat Tinggi</i>
                          </span>
                        </li>
                        <li>
                          <span class="no">2</span>
                          <span class="text">
                            Often / High Degree
                            <i>Kerap kali / Tahap tinggi</i>
                          </span>
                        </li>
                        <li>
                          <span class="no">3</span>
                          <span class="text">
                            Sometimes / Somewhat High
                            <i> Kadang / Tahap Agak Tinggi</i>
                          </span>
                        </li>
                        <li>
                          <span class="no">4</span>
                          <span class="text">
                            Seldom / Low Degree
                            <i> Jarang / Tahap Rendah</i>
                          </span>
                        </li>
                        <li>
                          <span class="no">5</span>
                          <span class="text">
                            Never / Almost Never / Very Low Degree
                            <i>
                              Tidak Pernah / Hampir Tidak Pernah / Tahap Sangat
                              Rendah</i
                            >
                          </span>
                        </li>
                      </ul>
                    </div>

                    <table class="form-table">
                      <thead>
                        <tr>
                          <th width="50%"></th>
                          <th width="50%"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(wr, index) in worklist" :key="index">
                          <td>
                            {{ wr.Question }} <span class="red-span">*</span>
                            <i>{{ wr.question_ml }}</i>
                          </td>
                          <td>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                value="1"
                                v-bind:name="'wr' + index"
                                @change="onworkchange(wr.id, 1)"
                              />
                              <label class="form-check-label" for="1">{{
                                wr.Answer1
                              }}</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                value="2"
                                v-bind:name="'wr' + index"
                                @change="onworkchange(wr.id, 2)"
                              />
                              <label class="form-check-label" for="2">{{
                                wr.Answer2
                              }}</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                value="3"
                                v-bind:name="'wr' + index"
                                @change="onworkchange(wr.id, 3)"
                              />
                              <label class="form-check-label" for="3">{{
                                wr.Answer3
                              }}</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                value="4"
                                v-bind:name="'wr' + index"
                                @change="onworkchange(wr.id, 4)"
                              />
                              <label class="form-check-label" for="4">{{
                                wr.Answer4
                              }}</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                value="5"
                                v-bind:name="'wr' + index"
                                @change="onworkchange(wr.id, 5)"
                              />
                              <label class="form-check-label" for="5">{{
                                wr.Answer5
                              }}</label>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <div class="d-flex align-items-center mt-2">
                      <button
                        class="prev-1 btn btn-success mr-auto"
                        @click="backpersonal"
                      >
                        <i class="fad fa-arrow-to-left"></i> Previous
                      </button>

                      <button
                        @click="nextclient"
                        class="btn btn-success next-btn ml-auto"
                      >
                        Next <i class="fad fa-arrow-to-right"></i>
                      </button>
                    </div>
                    <!-- content-subtab -->
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-contact"
                  role="tabpanel"
                  aria-labelledby="nav-contact-tab"
                  ref="navcontact"
                >
                  <!-- <Clientburnout /> -->
                  <div class="content-subtab border-top-left">
                    <div class="form-title">
                      <h5>PART 3 - CLIENT RELATED BURNOUT</h5>
                      <ul class="instruction">
                        <li>
                          <span class="no">1</span>
                          <span class="text">
                            Always / Very High Degree
                            <i> Sentiasa / Tahap yang Sangat Tinggi</i>
                          </span>
                        </li>
                        <li>
                          <span class="no">2</span>
                          <span class="text">
                            Often / High Degree
                            <i>Kerap kali / Tahap tinggi</i>
                          </span>
                        </li>
                        <li>
                          <span class="no">3</span>
                          <span class="text">
                            Sometimes / Somewhat High
                            <i> Kadang / Tahap Agak Tinggi</i>
                          </span>
                        </li>
                        <li>
                          <span class="no">4</span>
                          <span class="text">
                            Seldom / Low Degree
                            <i> Jarang / Tahap Rendah</i>
                          </span>
                        </li>
                        <li>
                          <span class="no">5</span>
                          <span class="text">
                            Never / Almost Never / Very Low Degree
                            <i>
                              Tidak Pernah / Hampir Tidak Pernah / Tahap Sangat
                              Rendah</i
                            >
                          </span>
                        </li>
                      </ul>
                    </div>

                    <table class="form-table">
                      <thead>
                        <tr>
                          <th width="50%"></th>
                          <th width="50%"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(cl, index) in clientlist" :key="index">
                          <td>
                            {{ cl.Question }}<span class="red-span">*</span>
                            <i>{{ cl.question_ml }}</i>
                          </td>
                          <td>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                value="1"
                                v-bind:name="'cl' + index"
                                @change="onclientchange(cl.id, 1)"
                              />
                              <label class="form-check-label" for="1">{{
                                cl.Answer1
                              }}</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                value="2"
                                v-bind:name="'cl' + index"
                                @change="onclientchange(cl.id, 2)"
                              />
                              <label class="form-check-label" for="2">{{
                                cl.Answer2
                              }}</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                value="3"
                                v-bind:name="'cl' + index"
                                @change="onclientchange(cl.id, 3)"
                              />
                              <label class="form-check-label" for="3">{{
                                cl.Answer3
                              }}</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                value="4"
                                v-bind:name="'cl' + index"
                                @change="onclientchange(cl.id, 4)"
                              />
                              <label class="form-check-label" for="4">{{
                                cl.Answer4
                              }}</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                value="5"
                                v-bind:name="'cl' + index"
                                @change="onclientchange(cl.id, 5)"
                              />
                              <label class="form-check-label" for="5">{{
                                cl.Answer5
                              }}</label>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <div class="d-flex align-items-center mt-2">
                      <button
                        @click="backworkburnout"
                        class="prev-1 btn btn-success mr-auto"
                      >
                        <i class="fad fa-arrow-to-left"></i> Previous
                      </button>
                      <button
                        type="submit"
                        class="btn btn-success ml-auto"
                        @click="OnsubmitTest"
                      >
                        <i class="fad fa-paper-plane"></i> Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="requiredpopup"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            class="modal-dialog modal-dialog-centered modal-sm test-connection"
          >
            <div class="modal-content">
              <div class="modal-body">
                <p>Please fill in all required fields</p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary btn-ok"
                  data-bs-dismiss="modal"
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
#layoutSidenav #layoutSidenav_content{
  margin-left: 0px;
}
@media (max-width: 768px) {
  .form-table tr {
    display: flex;
    flex-direction: column;
}
.nav-tabs .nav-link {
    white-space: nowrap;
}
.nav-tabs{
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
}
}

</style>
<script>
import PatientLoginSidebar from "../../../components/Patient/PatientLoginSidebar.vue";
import PatientLoginHeader from "../../../components/Patient/PatientLogin_Header.vue";
export default {
  components: { PatientLoginSidebar, PatientLoginHeader },
  name: "cbi",
  head: {
    script: [
      {
        src: "/app/js/bootstrap.bundle.min.js",
        body: true,
        crossorigin: "anonymous",
      },
      {
        src: "/app/js/jquery-3.5.1.js",
        body: true,
        crossorigin: "anonymous",
      },
      {
        src: "/app/js/scripts.js",
        body: true,
        crossorigin: "anonymous",
      },
    ],
  },
  data() {
    return {
      userdetails: null,
      peronallist: [],
      worklist: [],
      clientlist: [],
      selectedpersonal: [],
      personal: null,
      checkedpersonalList: {},
      checkedworkList: {},
      checkedclientList: {},
      Personalcount: 0,
      Personalcheckcount: 0,
      workcount: 0,
      workcheckcount: 0,
      clientcount: 0,
      clientcheckcount: 0,
      loader: false,
      Ipaddress: "",
      userId: 0,
      token: "",
      Id: 0,
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    if (this.userdetails) {
      this.userId = this.userdetails.user.id;
      this.token = this.userdetails.access_token;
    }
    this.GetPersonalList();
    this.GetWorkList();
    this.GetClientList();
    this.GetUserIpAddress();
  },
  methods: {
    async GetPersonalList() {
      const headers = {
        Authorization: "Bearer " + this.token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "patient-online-self-test/list-type",
        { Type: "Personal Burnout" },
        { headers }
      );
      console.log("my list", response.data);
      if (response.data.code == 200 || response.data.code == "200") {
        this.peronallist = response.data.list;
        this.Personalcount = this.peronallist.length;
      } else {
        this.peronallist = [];
      }
    },
    async GetWorkList() {
      const headers = {
        Authorization: "Bearer " + this.token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "patient-online-self-test/list-type",
        { Type: "Work Burnout" },
        { headers }
      );
      if (response.data.code == 200 || response.data.code == "200") {
        this.worklist = response.data.list;
        this.workcount = this.worklist.length;
      } else {
        this.worklist = [];
      }
    },
    async GetClientList() {
      const headers = {
        Authorization: "Bearer " + this.token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "patient-online-self-test/list-type",
        { Type: "Client/Customer Burnout" },
        { headers }
      );
      if (response.data.code == 200 || response.data.code == "200") {
        this.clientlist = response.data.list;
        this.clientcount = this.clientlist.length;
      } else {
        this.clientlist = [];
      }
    },
    async onburnout(event) {
      if (
        this.Personalcount == Object.values(this.checkedpersonalList).length
      ) {
        this.$refs.workburnout.classList.add("active");
        this.$refs.personalburnout.classList.remove("active");
        this.$refs.navhome.classList.remove("active");
        this.$refs.navhome.classList.remove("show");
        this.$refs.navprofile.classList.add("active");
        this.$refs.navprofile.classList.add("show");
      } else {
        this.$nextTick(() => {
          $("#requiredpopup").modal("show");
        });
      }
    },
    async backpersonal() {
      this.$refs.personalburnout.classList.add("active");
      this.$refs.workburnout.classList.remove("active");
      this.$refs.navprofile.classList.remove("active");
      this.$refs.navprofile.classList.remove("show");
      this.$refs.navhome.classList.add("active");
      this.$refs.navhome.classList.add("show");
    },
    async nextclient() {
      if (this.workcount == Object.values(this.checkedworkList).length) {
        this.$refs.clientburnout.classList.add("active");
        this.$refs.workburnout.classList.remove("active");
        this.$refs.navhome.classList.remove("active");
        this.$refs.navhome.classList.remove("show");
        this.$refs.navprofile.classList.remove("active");
        this.$refs.navprofile.classList.remove("show");
        this.$refs.navcontact.classList.add("active");
        this.$refs.navcontact.classList.add("show");
      } else {
        this.$nextTick(() => {
          $("#requiredpopup").modal("show");
        });
      }
    },
    async backworkburnout() {
      this.$refs.workburnout.classList.add("active");
      this.$refs.clientburnout.classList.remove("active");
      this.$refs.navcontact.classList.remove("active");
      this.$refs.navcontact.classList.remove("show");
      this.$refs.navprofile.classList.add("active");
      this.$refs.navprofile.classList.add("show");
    },
    async OnsubmitTest() {
      try {
        if (
          this.peronallist.length ==
            Object.values(this.checkedpersonalList).length &&
          this.worklist.length == Object.values(this.checkedworkList).length &&
          this.clientlist.length == Object.values(this.checkedclientList).length
        ) {
          this.loader = true;
          const headers = {
            Authorization: "Bearer " + this.token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          const response = await this.$axios.post(
            "patient/online-test",
            {
              added_by: this.userId,
              patient_id: this.Id,
              test_name: "cbi",
              test_section_name: "PERSONAL BURNOUT",
              result: JSON.stringify([
                { PERSONAL_BURNOUT: this.checkedpersonalList },
                { WORK_BURNOUT: this.checkedworkList },
                { CLIENT_RELATED_BURNOUT: this.checkedclientList },
              ]),
              user_ip_address: this.Ipaddress,
            },
            { headers }
          );
          if (response.data.code == 200 || response.data.code == "200") {
            this.loader = false;
            localStorage.setItem(
              "cbiresult",
              JSON.stringify(response.data.result)
            );
            this.$router.push("/modules/Patient/public-cbi-result");
          } else {
            this.loader = false;
            this.$nextTick(() => {
              $("#errorpopup").modal("show");
            });
          }
        } else {
          this.$nextTick(() => {
            $("#requiredpopup").modal("show");
          });
        }
      } catch (e) {
        this.loader = false;
        this.$nextTick(() => {
          $("#errorpopup").modal("show");
        });
      }
    },
    onpersonalchange(ind, val) {
      this.checkedpersonalList[ind] = val;
    },
    onworkchange(ind, val) {
      this.checkedworkList[ind] = val;
    },
    onclientchange(ind, val) {
      this.checkedclientList[ind] = val;
    },
   async GetUserIpAddress() {
      const {
        data: { ip },
      } = await this.$axios.get("https://www.cloudflare.com/cdn-cgi/trace", {
        responseType: "text",
        transformResponse: (data) =>
          Object.fromEntries(
            data
              .trim()
              .split("\n")
              .map((line) => line.split("="))
          ),
      });
      this.Ipaddress = ip;
    },
  },
};
</script>
