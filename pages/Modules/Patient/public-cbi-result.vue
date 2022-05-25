<template>
  <div id="layoutSidenav">
    <div id="layoutSidenav_content">
      <main>
        <div class="container-fluid px-4">
          <publicnav></publicnav>
          <div class="offline-title">
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
                <p class="text-center">
                  Thank you for reaching out to MENTARI Self Test
                  <br />
                  <small class="mt-1"
                    ><i
                      >Terima kasih kerana melayari ujian kendiri MENTARI.</i
                    ></small
                  >
                </p>
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
                          <h3 class="bg-color1">{{ personalText }}</h3>

                          <div
                            class="arrow"
                            style="left: 33%; border-bottom-color: #8bdf25"
                          ></div>
                          <div class="progress">
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
                              style="width: 9%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color3"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color4"
                              role="progressbar"
                              style="width: 17%"
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
                            <div class="dot">
                              <span class="bg-color1"></span>
                              <h5>Normal</h5>
                            </div>
                            <div class="dot">
                              <span class="bg-color2"></span>
                              <h5>Mild</h5>
                            </div>
                            <div class="dot">
                              <span class="bg-color3"></span>
                              <h5>Moderate</h5>
                            </div>
                            <div class="dot">
                              <span class="bg-color4"></span>
                              <h5>Severe</h5>
                            </div>
                            <div class="dot">
                              <span class="bg-color5"></span>
                              <h5>Extremely Severe</h5>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="result-footer">
                        <h6>
                          Your score suggests a Normal level of Personal Burnout
                        </h6>
                        <p>
                          Note: Personal burnout is a state of prolonged
                          physical and psychological exhaustion. Let's find out
                          more about self-care. For your information, self-care
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
                          <h3 class="bg-color3">{{workText}}</h3>

                          <div
                            class="arrow"
                            style="left: 52%; border-bottom-color: #ffc000"
                          ></div>
                          <div class="progress">
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
                              style="width: 9%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color3"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color4"
                              role="progressbar"
                              style="width: 17%"
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
                            <div class="dot">
                              <span class="bg-color1"></span>
                              <h5>Normal</h5>
                            </div>
                            <div class="dot">
                              <span class="bg-color2"></span>
                              <h5>Mild</h5>
                            </div>
                            <div class="dot">
                              <span class="bg-color3"></span>
                              <h5>Moderate</h5>
                            </div>
                            <div class="dot">
                              <span class="bg-color4"></span>
                              <h5>Severe</h5>
                            </div>
                            <div class="dot">
                              <span class="bg-color5"></span>
                              <h5>Extremely Severe</h5>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="result-footer">
                        <h6>
                          Your score suggests a Normal level of Work Related
                          Burnout
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
                          <h3 class="bg-color2">{{ clientText }}</h3>

                          <div
                            class="arrow"
                            style="left: 42%; border-bottom-color: #e8e800"
                          ></div>
                          <div class="progress">
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
                              style="width: 9%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color3"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color4"
                              role="progressbar"
                              style="width: 17%"
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
                            <div class="dot">
                              <span class="bg-color1"></span>
                              <h5>Normal</h5>
                            </div>
                            <div class="dot">
                              <span class="bg-color2"></span>
                              <h5>Mild</h5>
                            </div>
                            <div class="dot">
                              <span class="bg-color3"></span>
                              <h5>Moderate</h5>
                            </div>
                            <div class="dot">
                              <span class="bg-color4"></span>
                              <h5>Severe</h5>
                            </div>
                            <div class="dot">
                              <span class="bg-color5"></span>
                              <h5>Extremely Severe</h5>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="result-footer">
                        <h6>
                          Your score suggests a Normal level of Client Related
                          Burnout
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
                    href="/Modules/Patient/public-request-appointment-form"
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
import PatientLoginSidebar from "../../../components/Patient/PatientLoginSidebar.vue";
import PatientLoginHeader from "../../../components/Patient/PatientLogin_Header.vue";
import Publicnav from '../../../components/Patient/publicnav.vue';
export default {
  components: { PatientLoginSidebar, PatientLoginHeader, Publicnav },
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
      personalText: "",
      workText: "",
      clientText: "",
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.cbiresult = JSON.parse(localStorage.getItem("cbiresult"));
    if (this.cbiresult) {
      this.personalScore = this.cbiresult.PERSONAL_BURNOUT;
      this.workScore = this.cbiresult.WORK_BURNOUT;
      this.clientScore = this.cbiresult.CLIENT_RELATED_BURNOUT;
    }
    console.log("my cbi result", this.cbiresult);
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
  },
};
</script>