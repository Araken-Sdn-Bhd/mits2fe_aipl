<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <div class="container-fluid px-4">
          <nav class="offline-form" v-if="!userdetails">
            <ul>
              <li>
                <a href="/Modules/Patient/cbi" class="nav-link"
                  ><i class="far fa-file-contract"></i> <span>CBI</span></a
                >
              </li>
              <li>
                <a href="/Modules/Patient/dass" class="nav-link"
                  ><i class="far fa-file-contract"></i> <span>DASS</span></a
                >
              </li>
              <li>
                <a href="/Modules/Patient/phq-9" class="nav-link"
                  ><i class="far fa-file-contract"></i> <span>PHQ 9</span></a
                >
              </li>
              <li>
                <a href="/Modules/Patient/whodas" class="nav-link"
                  ><i class="far fa-file-contract"></i> <span>WHODAS</span></a
                >
              </li>
            </ul>
          </nav>
          <div :class="userdetails ? 'page-title' : 'offline-title'">
            <h1>Patient Screening and Appointment</h1>
          </div>
          <div class="card mb-4">
            <div
              class="result"
              id="results"
              style="background: #fff !important"
            >
              <div class="result-header">
                <h4>COPENHAGEN BURNOUT INVENTORY(CBI)</h4>
                <p>Thank you for reaching out to MENTARI Self Test</p>
              </div>
              <div class="row justify-content-center">
                <div class="col-sm-8">
                  <div class="result-box">
                    <h4>PERSONAL BURNOUT</h4>

                    <div class="result-body">
                      <div class="d-flex">
                        <div class="score">
                          <div class="text">
                            <h5 v-if="cbiresult">
                              {{ personalScore }}
                            </h5>
                            <span>SCORE</span>
                          </div>
                        </div>
                        <div class="result-info">
                          <h3
                            class="bg-color1"
                            v-if="personallevel == 'Normal'"
                          >
                            {{ personallevel }}
                          </h3>
                          <h3
                            class="bg-color2"
                            v-if="personallevel == 'Moderate'"
                          >
                            {{ personallevel }}
                          </h3>
                          <h3
                            class="bg-color3"
                            v-if="personallevel == 'High Depression'"
                          >
                            {{ personallevel }}
                          </h3>
                          <h3
                            class="bg-color5"
                            v-if="personallevel == 'Severe'"
                          >
                            {{ personallevel }}
                          </h3>
                           <div class="arrow" style="left: 25%; border-bottom-color: #8bdf25" v-if="personallevel == 'Normal'"></div>
                          <div class="progress" v-if="personallevel == 'Normal'">
                             <div
                              class="progress-bar bg-color bg-color1"
                              role="progressbar"
                              style="width: 40%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                            <div
                              class="progress-bar bg-color bg-color2"
                              role="progressbar"
                              style="width: 20%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color3"
                              role="progressbar"
                              style="width: 24%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color5"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>

                          <div class="arrow" style="left: 45%; border-bottom-color: #e8e800" v-if="personallevel == 'Moderate'"></div>
                          <div class="progress" v-if="personallevel == 'Moderate'">
                             <div
                              class="progress-bar bg-color bg-color1"
                              role="progressbar"
                              style="width: 40%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                            <div
                              class="progress-bar bg-color bg-color2"
                              role="progressbar"
                              style="width: 20%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color3"
                              role="progressbar"
                              style="width: 24%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color5"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>

                          <div class="arrow" style="left: 55%; border-bottom-color: #ffc000"  v-if="personallevel == 'High Depression'"></div>
                          <div class="progress"  v-if="personallevel == 'High Depression'">
                            <div
                              class="progress-bar bg-color bg-color1"
                              role="progressbar"
                              style="width: 40%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                            <div
                              class="progress-bar bg-color bg-color2"
                              role="progressbar"
                              style="width: 20%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color3"
                              role="progressbar"
                              style="width: 24%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color5"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>

                          <div class="arrow" style="left: 90%; border-bottom-color: #ff0000" v-if="personallevel == 'Severe'"></div>
                          <div class="progress" v-if="personallevel == 'Severe'">
                            <div
                              class="progress-bar bg-color bg-color1"
                              role="progressbar"
                              style="width: 40%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                            <div
                              class="progress-bar bg-color bg-color2"
                              role="progressbar"
                              style="width: 20%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color3"
                              role="progressbar"
                              style="width: 24%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color5"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <div class="indicator">
                            <div class="dot normal">
                              <span></span>
                              <h5>Normal</h5>
                            </div>
                            <div class="dot moderate">
                              <span></span>
                              <h5>Moderate</h5>
                            </div>
                            <div class="dot high">
                              <span></span>
                              <h5>High</h5>
                            </div>
                            <div class="dot severe">
                              <span></span>
                              <h5>Severe</h5>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="result-footer">
                        <h6>
                          Your score suggests a {{ personallevel }} level of
                          Personal Burnout
                        </h6>
                        <p>
                          Note: Personal burnout is a state of prolonged
                          physical and psychological exhaustion. Lets find out
                          more about self care. For your information, self-care
                          is taking steps to tend to your physical and emotional
                          health needs to the best of your ability.
                        </p>
                      </div>
                    </div>
                  </div>
                  <!-- result-box -->

                  <div class="result-box">
                    <h4>WORK BURNOUT</h4>

                    <div class="result-body">
                      <div class="d-flex">
                        <div class="score">
                          <div class="text">
                            <h5 v-if="cbiresult">
                              {{ workScore }}
                            </h5>
                            <span>SCORE</span>
                          </div>
                        </div>
                        <div class="result-info">
                          <h3 class="bg-color1" v-if="worklevel == 'Normal'">
                            {{ worklevel }}
                          </h3>
                          <h3 class="bg-color2" v-if="worklevel == 'Moderate'">
                            {{ worklevel }}
                          </h3>
                          <h3
                            class="bg-color3"
                            v-if="worklevel == 'High Depression'"
                          >
                            {{ worklevel }}
                          </h3>
                          <h3 class="bg-color5" v-if="worklevel == 'Severe'">
                            {{ worklevel }}
                          </h3>
                           <div class="arrow" style="left: 25%; border-bottom-color: #8bdf25" v-if="worklevel == 'Normal'"></div>
                          <div class="progress" v-if="worklevel == 'Normal'">
                             <div
                              class="progress-bar bg-color bg-color1"
                              role="progressbar"
                              style="width: 40%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                            <div
                              class="progress-bar bg-color bg-color2"
                              role="progressbar"
                              style="width: 20%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color3"
                              role="progressbar"
                              style="width: 24%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color5"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>

                          <div class="arrow" style="left: 45%; border-bottom-color: #e8e800" v-if="worklevel == 'Moderate'"></div>
                          <div class="progress" v-if="worklevel == 'Moderate'">
                             <div
                              class="progress-bar bg-color bg-color1"
                              role="progressbar"
                              style="width: 40%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                            <div
                              class="progress-bar bg-color bg-color2"
                              role="progressbar"
                              style="width: 20%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color3"
                              role="progressbar"
                              style="width: 24%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color5"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>

                          <div class="arrow" style="left: 55%; border-bottom-color: #ffc000"  v-if="worklevel == 'High Depression'"></div>
                          <div class="progress"  v-if="worklevel == 'High Depression'">
                            <div
                              class="progress-bar bg-color bg-color1"
                              role="progressbar"
                              style="width: 40%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                            <div
                              class="progress-bar bg-color bg-color2"
                              role="progressbar"
                              style="width: 20%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color3"
                              role="progressbar"
                              style="width: 24%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color5"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>

                          <div class="arrow" style="left: 90%; border-bottom-color: #ff0000" v-if="worklevel == 'Severe'"></div>
                          <div class="progress" v-if="worklevel == 'Severe'">
                            <div
                              class="progress-bar bg-color bg-color1"
                              role="progressbar"
                              style="width: 40%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                            <div
                              class="progress-bar bg-color bg-color2"
                              role="progressbar"
                              style="width: 20%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color3"
                              role="progressbar"
                              style="width: 24%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color5"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <div class="indicator">
                            <div class="dot normal">
                              <span></span>
                              <h5>Normal</h5>
                            </div>
                            <div class="dot moderate">
                              <span></span>
                              <h5>Moderate</h5>
                            </div>
                            <div class="dot high">
                              <span></span>
                              <h5>High</h5>
                            </div>
                            <div class="dot severe">
                              <span></span>
                              <h5>Severe</h5>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="result-footer">
                        <h6>
                          Your score suggests a {{ worklevel }} level of Work
                          Related Burnout
                        </h6>
                        <p>
                          Notes: Work-related burnout is a state of prolonged
                          physical and psychological exhaustion, which is
                          perceived as related to the persons' work.
                        </p>
                      </div>
                    </div>
                  </div>
                  <!-- result-box -->

                  <div class="result-box">
                    <h4>CLIENT BURNOUT</h4>

                    <div class="result-body">
                      <div class="d-flex">
                        <div class="score">
                          <div class="text">
                            <h5 v-if="cbiresult">
                              {{ clientScore }}
                            </h5>
                            <span>SCORE</span>
                          </div>
                        </div>
                        <div class="result-info">
                          <h3 class="bg-color1" v-if="clientlevel == 'Normal'">
                            {{ clientlevel }}
                          </h3>
                          <h3
                            class="bg-color2"
                            v-if="clientlevel == 'Moderate'"
                          >
                            {{ clientlevel }}
                          </h3>
                          <h3
                            class="bg-color3"
                            v-if="clientlevel == 'High Depression'"
                          >
                            {{ clientlevel }}
                          </h3>
                          <h3 class="bg-color5" v-if="clientlevel == 'Severe'">
                            {{ clientlevel }}
                          </h3>
                          <div class="arrow" style="left: 25%; border-bottom-color: #8bdf25" v-if="clientlevel == 'Normal'"></div>
                          <div class="progress" v-if="clientlevel == 'Normal'">
                            <div
                              class="progress-bar bg-color bg-color1"
                              role="progressbar"
                              style="width: 40%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                            <div
                              class="progress-bar bg-color bg-color2"
                              role="progressbar"
                              style="width: 20%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color3"
                              role="progressbar"
                              style="width: 24%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color5"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>

                          <div class="arrow" style="left: 45%; border-bottom-color: #e8e800" v-if="clientlevel == 'Moderate'"></div>
                          <div class="progress" v-if="clientlevel == 'Moderate'">
                            <div
                              class="progress-bar bg-color bg-color1"
                              role="progressbar"
                              style="width: 40%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                            <div
                              class="progress-bar bg-color bg-color2"
                              role="progressbar"
                              style="width: 20%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color3"
                              role="progressbar"
                              style="width: 24%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color5"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>

                          <div class="arrow" style="left: 55%; border-bottom-color: #ffc000"  v-if="clientlevel == 'High Depression'"></div>
                          <div class="progress"  v-if="clientlevel == 'High Depression'">
                           <div
                              class="progress-bar bg-color bg-color1"
                              role="progressbar"
                              style="width: 40%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                            <div
                              class="progress-bar bg-color bg-color2"
                              role="progressbar"
                              style="width: 20%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color3"
                              role="progressbar"
                              style="width: 24%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color5"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                          </div>

                          <div class="arrow" style="left: 90%; border-bottom-color: #ff0000" v-if="clientlevel == 'Severe'"></div>
                          <div class="progress" v-if="clientlevel == 'Severe'">
                            <div
                              class="progress-bar bg-color bg-color1"
                              role="progressbar"
                              style="width: 40%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                            <div
                              class="progress-bar bg-color bg-color2"
                              role="progressbar"
                              style="width: 20%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color3"
                              role="progressbar"
                              style="width: 24%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color5"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                          </div>
                          <div class="indicator">
                            <div class="dot normal">
                              <span></span>
                              <h5>Normal</h5>
                            </div>
                            <div class="dot moderate">
                              <span></span>
                              <h5>Moderate</h5>
                            </div>
                            <div class="dot high">
                              <span></span>
                              <h5>High</h5>
                            </div>
                            <div class="dot severe">
                              <span></span>
                              <h5>Severe</h5>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="result-footer">
                        <h6>
                          Your score suggests a {{ clientlevel }} level of
                          Client Related Burnout
                        </h6>
                        <p>
                          Note: Client related burnout is a state of prolonged
                          physical and psychological exhaustion, which is
                          perceived as related to the persons' work with clients
                          (clients, patients, social service recipients, elderly
                          citizens, or inmates)
                        </p>
                      </div>
                    </div>
                  </div>
                  <!-- result-box -->
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-sm-8">
                <div class="d-flex mt-3">
                  <button
                    type="button"
                    class="btn btn-secondary btn-text mr-auto"
                    @click="demoFromHTML"
                  >
                    <i class="fad fa-download"></i> Download Result
                  </button>
                  <a
                    @click="Gotorequestappointment"
                    class="btn btn-success btn-text ml-auto"
                    ><i class="fad fa-calendar-day"></i> Request Appointment</a
                  >
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
import CommonHeader from "../../../components/CommonHeader.vue";
import CommonSidebar from "../../../components/CommonSidebar.vue";
export default {
  components: { CommonSidebar, CommonHeader },
  name: "cbi-result",
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
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.min.js",
        async: true,
        crossorigin: "anonymous",
      },
    ],
  },
  data() {
    return {
      userdetails: null,
      cbiresult: null,
      personalScore: 0,
      workScore: 0,
      clientScore: 0,
      personallevel: "",
      worklevel: "",
      clientlevel: "",
      Id: 0,
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.cbiresult = JSON.parse(localStorage.getItem("cbiresult"));
    console.log("cbi result", this.cbiresult);
    if (this.cbiresult) {
      this.personalScore = this.cbiresult.PERSONAL_BURNOUT.score;
      this.workScore = this.cbiresult.WORK_BURNOUT.score;
      this.clientScore = this.cbiresult.CLIENT_RELATED_BURNOUT.score;
      this.personallevel = this.cbiresult.PERSONAL_BURNOUT.level;
      this.worklevel = this.cbiresult.WORK_BURNOUT.level;
      this.clientlevel = this.cbiresult.CLIENT_RELATED_BURNOUT.level;
    }
    let urlParams = new URLSearchParams(window.location.search);
    this.Id = urlParams.get("id");
  },
  beforeDestroy() {
    localStorage.removeItem("cbiresult");
  },
  methods: {
    demoFromHTML() {
      var pdf = new jsPDF("p", "pt", "a4");
      pdf.addHTML($("#results")[0], function () {
        pdf.save("Result.pdf");
      });
    },
    async Gotorequestappointment() {
      this.$router.push({
        path: "/Modules/Patient/request-appointment-form",
        query: { id: this.Id },
      });
    },
  },
};
</script>