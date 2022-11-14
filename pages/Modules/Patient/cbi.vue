<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
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
                      <!-- <p>
                        [1 : Always/Vey High Degree] [2 : Often/To a High
                        Degree] [3: Sometimes/Somewhat] [4: Seldom/Low Degree]
                        [5: Never/Almost Never/Very Low Degree]
                      </p> -->
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
                            {{ wr.Question }}<span class="red-span">*</span>
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
                      <button id="hidebutton" ref="hidebutton"
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
      </main>
    </div>
  </div>
</template>
<script>
import CommonHeader from '../../../components/CommonHeader.vue';
import CommonSidebar from '../../../components/CommonSidebar.vue';
export default {
  components: { CommonSidebar, CommonHeader },
  name: "cbi",
  head: {
    script: [
      {
        src: "/app/js/bootstrap.bundle.min.js",
        body: true,
        crossorigin: "anonymous",
      },
      {
        src: "/js/jquery-3.5.1.js",
        body: true,
        crossorigin: "anonymous",
      },
      {
        src: "/js/scripts.js",
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
      SidebarAccess:null
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.SidebarAccess = JSON.parse(localStorage.getItem("SidebarAccess"));
    if (this.userdetails) {
      this.userId = this.userdetails.user.id;
      this.token = this.userdetails.access_token;
    }
    //localStorage.removeItem("cbiresult");
    this.GetPersonalList();
    this.GetWorkList();
    this.GetClientList();
    this.GetUserIpAddress();
    let urlParams = new URLSearchParams(window.location.search);
    this.Id = urlParams.get("id");
    if (!this.Id) {
      this.Id = 0;
    }
  },
  mounted(){
     if(this.SidebarAccess!=1){
         console.log('this.$refs.hidebutton1',this.$refs.hidebutton);
          this.$refs.hidebutton.classList.add("hide");
    }
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
        window.alert("Please attempt all question");
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
        window.alert("Please attempt all question");
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
            this.$router.push({
              path: "/app/modules/Patient/cbi-result",
              query: { id: this.Id },
            });
          } else {
            this.loader = false;
            this.$nextTick(() => {
              $("#errorpopup").modal("show");
            });
          }
        } else {
          window.alert("Please check All Module and attempt all question");
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
      // console.log(Object.values(this.checkedList).toString());
    },
    onworkchange(ind, val) {
      this.checkedworkList[ind + 1] = val;
    },
    onclientchange(ind, val) {
      this.checkedclientList[ind + 1] = val;
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
<style scoped>
.hide{
  display: none !important;
}
</style>
