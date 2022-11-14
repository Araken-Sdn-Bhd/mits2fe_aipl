<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <Loader v-if="loader" />
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>Patient Screening and Appointment</h1>
            <!-- <a href="demographic.html"><i class="fal fa-plus"></i> Add</a> -->
          </div>

          <div class="card mb-4">
            <div class="card-header bg-transparent">
              <h4>Depression Anxiety Stress Test (DASS)</h4>
            </div>

            <div class="card-body">
              <div class="form-title mt-2">
                 <p class="center-text-p">
                  Please read each statement and select a number 0, 1, 2, or 3 that indicates how much the statement applied to you over the past week.
                  <span>There are no right or wrong answers. Do not spend too much time on any statement.</span>
                  <small>Sila baca setiap kenyataan di bawah dan pilih jawapan 0, 1, 2, or 3 bagi menggambarkan keadaan anda sepanjang minggu yang</small>
                  <span>lalu Tiada jawapan yang betul atau salah. Jangan mengambil masa yang terlalu lama untuk mana-mana kenyataan</span>
                </p>
                 <ul class="instruction">
                  <li>
                    <span class="no">0</span>
                    <span class="text">
                      Did not apply to me at all
                      <i> Tidak langsung menggambarkan keadaan saya</i>
                    </span>
                  </li>
                  <li>
                    <span class="no">1</span>
                    <span class="text">
                      Applied to me to some
                  degree, or some of the time
                      <i> Sedikit atau jarang-jarang menggambarkan keadaan saya</i>
                    </span>
                  </li>
                  <li>
                    <span class="no">2</span>
                    <span class="text">
                      Applied to me to a considerable
                  degree, good part of time
                      <i>Banyak atau kerapkali menggambarkan keadaan saya</i>
                    </span>
                  </li>
                  <li>
                    <span class="no">3</span>
                    <span class="text">
                      Applied to me very much, or most
                  of the time
                      <i>Sangat banyak atau sangat kerap menggambarkan keadaan saya</i>
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
                          @change="onchange(pb.question_order, 0)"
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
                          @change="onchange(pb.question_order, 1)"
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
                          @change="onchange(pb.question_order, 2)"
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
                          @change="onchange(pb.question_order, 3)"
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
import CommonHeader from '../../../components/CommonHeader.vue';
import CommonSidebar from '../../../components/CommonSidebar.vue';
export default {
  components: { CommonSidebar, CommonHeader },
  name: "dass",
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
        { Type: "DASS" },
        { headers }
      );
      if (response.data.code == 200 || response.data.code == "200") {
        this.list = response.data.list;
      } else {
        this.list = [];
      }
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
    onchange(ind, val) {
      this.checkedList[ind] = val;
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
              test_name: "dass",
              test_section_name: "DASS",
              result: JSON.stringify([{ DASS: this.checkedList }]),
              user_ip_address: this.Ipaddress,
            },
            { headers }
          );
          console.log("result", response.data);
          if (response.data.code == 200 || response.data.code == "200") {
            this.loader = false;
            localStorage.setItem(
              "dassresult",
              JSON.stringify(response.data.result)
            );
            this.$router.push({
              path: "/app/modules/Intervention/dass-result",
              query: { id: this.Id },
            });
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
