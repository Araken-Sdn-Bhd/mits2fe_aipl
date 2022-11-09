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
                <h4>PATIENT HEALTH QUESTIONNAIRE (PHQ-9)</h4>
                <p>Thank you for reaching out to MENTARI Self Test</p>
              </div>
              <div class="row justify-content-center">
                <div class="col-sm-8">
                  <div class="result-box">
                    <div class="result-body">
                      <div class="d-flex">
                        <div class="score">
                          <div class="text">
                            <h5>{{ PHQ9Score }}</h5>
                            <span>SCORE</span>
                          </div>
                        </div>
                        <div class="result-info">
                          <h3 class="bg-color1" v-if="PHQ9 == 'Minimal Depression'">
                            {{ PHQ9 }}
                          </h3>
                          <h3 class="bg-color2" v-if="PHQ9 == 'Mild Depression'">
                            {{ PHQ9 }}
                          </h3>
                          <h3 class="bg-color3" v-if="PHQ9 == 'Moderate Depression'">
                            {{ PHQ9 }}
                          </h3>
                          <h3 class="bg-color4" v-if="PHQ9 == 'Moderately severe depression'">
                            {{ PHQ9 }}
                          </h3>
                          <h3 class="bg-color5" v-if="PHQ9 == 'Severe Depression'">
                            {{ PHQ9 }}
                          </h3>

                          <div
                            v-if="PHQ9 == 'Minimal Depression'"
                            class="arrow bg-color1"
                            style="left: 5%; "
                          ></div>
                          <div
                            v-if="PHQ9 == 'Mild Depression'"
                            class="arrow bg-color2"
                            style="left: 25%; "
                          ></div>
                          <div
                            v-if="PHQ9 == 'Moderate Depression'"
                            class="arrow bg-color3"
                            style="left: 46%; "
                          ></div>
                          <div
                            v-if="PHQ9 == 'Moderately severe depression'"
                            class="arrow bg-color4"
                            style="left: 57%; "
                          ></div>
                          <div
                            v-if="PHQ9 == 'Severe Depression'"
                            class="arrow bg-color5"
                            style="left: 80%; "
                          ></div>
                          <div class="progress">
                            <div
                              class="progress-bar bg-color bg-color1"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                            <div
                              class="progress-bar bg-color bg-color2"
                              role="progressbar"
                              style="width: 17%"
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
                              style="width: 32%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <div class="indicator">
                            <div class="dot">
                              <span class="bg-color1"></span>
                              <h5>Minimal</h5>
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
                              <h5>Moderately Severe</h5>
                            </div>
                            <div class="dot">
                              <span class="bg-color5"></span>
                              <h5>Severe</h5>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="result-footer" v-if="PHQ9 == 'Minimal Depression'||PHQ9 == 'Mild Depression'">
                        <p>
                          Good news. Your current symptom levels suggest that 
                          it is unlikely you are suffering from depressive disorder.

                        </p>

                        <p>
                          If you feel you need additional support, consider to print 
                          out this report and to book an appointment with the nearest 
                          MENTARI to discuss this and any other concerns you may have.
                        </p>
                      </div>
                      <div class="result-footer" v-if="PHQ9 == 'Moderate Depression'||PHQ9 == 'Moderately severe depression' ||PHQ9 == 'Severe Depression'">
                        <p>
                          Your results show some symptoms, so let’s look a
                          little closer & see what to do next. As you can see
                          from your result, you appear to be experiencing quite
                          a few symptoms of depression at present.
                        </p>

                        <p>
                          This is not a diagnosis of depressive disorder. We
                          suggest that you print out this report and book an
                          appointment with the nearest MENTARI to discuss this
                          and any other concerns you may have.
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
import CommonHeader from '../../../components/CommonHeader.vue';
import CommonSidebar from '../../../components/CommonSidebar.vue';
export default {
  components: { CommonSidebar, CommonHeader },
  name: "dass-result",
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
      phq9result: null,
      PHQ9Score: 0,
      PHQ9: "",
      Id: 0,
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.phq9result = JSON.parse(localStorage.getItem("phq9result"));
    console.log("my res", this.phq9result);
    if (this.phq9result) {
      this.PHQ9Score = 10;
      this.PHQ9 = this.phq9result.PHQ9;
      this.PHQ9Score = this.phq9result.PHQ9Score;
    }
    let urlParams = new URLSearchParams(window.location.search);
    this.Id = urlParams.get("id");
  },
  beforeDestroy() {
    localStorage.removeItem("phq9result");
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
