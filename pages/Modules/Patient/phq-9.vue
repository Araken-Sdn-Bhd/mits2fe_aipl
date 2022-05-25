<template>
  <div id="layoutSidenav">
    <PatientLoginSidebar />
    <div id="layoutSidenav_content">
      <PatientLoginHeader />
      <main>
        <Loader v-if="loader" />
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>Patient Screening and Appointment</h1>
            <!-- <a href="demographic.html"><i class="fal fa-plus"></i> Add</a> -->
          </div>

          <div class="card mb-4">
            <div class="card-header bg-transparent">
              <h4>PATIENT HEALTH QUESTIONNAIRE (PHQ-9)</h4>
            </div>
            <div class="card-body">
              <div class="form-title mt-2">
                <p class="center-text-p">
                  Over the last 2 weeks, how often have you been bothered by any
                  of the following problems?
                  <small
                    >Sepanjang 2 minggu yang lalu, berapa kerapkah anda diganggu
                    oleh mana-mana masalah berikut?
                  </small>
                </p>
                <ul class="instruction">
                  <li>
                    <span class="no">0</span>
                    <span class="text">
                      Not at all
                      <i> Tidak sama sekali</i>
                    </span>
                  </li>
                  <li>
                    <span class="no">1</span>
                    <span class="text">
                      Several days
                      <i> Beberapa hari</i>
                    </span>
                  </li>
                  <li>
                    <span class="no">2</span>
                    <span class="text">
                      More than half the days
                      <i>Lebih separuh hari </i>
                    </span>
                  </li>
                  <li>
                    <span class="no">3</span>
                    <span class="text">
                      Nearly everyday
                      <i>Hampir setiap hari </i>
                    </span>
                  </li>
                </ul>
                <!-- <p>
                  [ 0: Not at all 1: Several days 2: More than half the days 3:
                  Nearly everyday ]
                </p> -->
              </div>

              <table class="form-table">
                <thead>
                  <tr>
                    <th width="50%"></th>
                    <th width="50%"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(pb, index) in list" :key="index">
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
                          @change="onchange(index, 0)"
                        />
                        <label class="form-check-label" for="1">{{
                          pb.Answer0
                        }}</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          value="2"
                          v-bind:name="'pb' + index"
                          @change="onchange(index, 1)"
                        />
                        <label class="form-check-label" for="2">{{
                          pb.Answer1
                        }}</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          value="3"
                          v-bind:name="'pb' + index"
                          @change="onchange(index, 2)"
                        />
                        <label class="form-check-label" for="3">{{
                          pb.Answer2
                        }}</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          value="4"
                          v-bind:name="'pb' + index"
                          @change="onchange(index, 3)"
                        />
                        <label class="form-check-label" for="4">{{
                          pb.Answer3
                        }}</label>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>

              <Error :message="error" v-if="error" />
              <div class="d-flex align-items-center mt-2">
                <button
                  @click="OnsubmitTest"
                  type="submit"
                  class="btn btn-success ml-auto"
                >
                  <i class="fad fa-paper-plane"></i> Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import PatientLoginSidebar from "../../../components/Patient/PatientLoginSidebar.vue";
import PatientLoginHeader from "../../../components/Patient/PatientLogin_Header.vue";
export default {
  components: { PatientLoginSidebar, PatientLoginHeader },
  name: "phq-9",
  head: {
    script: [
      {
        src: "/js/bootstrap.bundle.min.js",
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
      list: [],
      Ipaddress: "",
      checkedList: {},
      error: null,
      loader: false,
      userId: 0,
      token: "",
      Id: 0,
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.GetList();
    this.GetUserIpAddress();
    if (this.userdetails) {
      this.userId = this.userdetails.user.id;
      this.token = this.userdetails.access_token;
    }
    let urlParams = new URLSearchParams(window.location.search);
    this.Id = urlParams.get("id");
    if (!this.Id) {
      this.Id = 0;
    }
  },
  methods: {
    async GetList() {
      const headers = {
        Authorization: "Bearer " + this.token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "patient-online-self-test/list-type",
        { Type: "PHQ-9" },
        { headers }
      );
      console.log("my test", response.data.list);
      if (response.data.code == 200 || response.data.code == "200") {
        this.list = response.data.list;
      } else {
        this.list = [];
      }
    },
    GetUserIpAddress() {
      fetch("https://api.ipify.org?format=json")
        .then((x) => x.json())
        .then(({ ip }) => {
          this.Ipaddress = ip;
        });
    },
    onchange(ind, val) {
      this.checkedList[ind + 1] = val;
    },
    async OnsubmitTest() {
      this.error = null;
      if (this.list.length == Object.values(this.checkedList).length) {
        try {
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
              test_name: "phq9",
              test_section_name: "PHQ9",
              result: JSON.stringify([{ PHQ9: this.checkedList }]),
              user_ip_address: this.Ipaddress,
            },
            { headers }
          );
          if (response.data.code == 200 || response.data.code == "200") {
            this.loader = false;
            localStorage.setItem(
              "phq9result",
              JSON.stringify(response.data.result)
            );
            this.$router.push("/Modules/Patient/phq9-result");
          } else {
            this.loader = false;
            this.$nextTick(() => {
              $("#errorpopup").modal("show");
            });
          }
        } catch (e) {
          this.loader = false;
          this.errors = e;
        }
      } else {
        this.error = "Please attempt all question";
      }
    },
  },
};
</script>