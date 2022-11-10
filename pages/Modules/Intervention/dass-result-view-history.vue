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
                <h4>DEPRESSION, ANXIETY and STRESS Scale (DASS)</h4>
                <p>Thank you for reaching out to MENTARI Self Test</p>
              </div>
              <div class="row justify-content-center">
                <div class="col-sm-8">
                  <div class="result-box">
                    <h4>Stress</h4>

                    <div class="result-body">
                      <div class="d-flex">
                        <div class="score">
                          <div class="text">
                            <h5>{{ StressScore }}</h5>
                            <span>SCORE</span>
                          </div>
                        </div>
                        <div class="result-info">
                          <h3 class="bg-color1" v-if="Stress == 'Normal'">
                            {{ Stress }}
                          </h3>
                          <h3 class="bg-color2" v-if="Stress == 'Mild'">
                            {{ Stress }}
                          </h3>
                          <h3 class="bg-color3" v-if="Stress == 'Moderate'">
                            {{ Stress }}
                          </h3>
                          <h3 class="bg-color4" v-if="Stress == 'Severe'">
                            {{ Stress }}
                          </h3>
                          <h3 class="bg-color5" v-if="Stress == 'Extreme'">
                            {{ Stress }}
                          </h3>
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
                        <p>
                          Based on your responses, you are currently
                          experiencing low level of stress. Recommended for you,
                          If you would like more information regarding mental
                          health issue, please go to MENTARI Portal or reaching
                          out to the nearest MENTARI in our directory.
                        </p>
                      </div>
                    </div>
                  </div>
                  <!-- result-box -->

                  <div class="result-box">
                    <h4>Anxiety</h4>

                    <div class="result-body">
                      <div class="d-flex">
                        <div class="score">
                          <div class="text">
                            <h5>{{ AnxietyScore }}</h5>
                            <span>SCORE</span>
                          </div>
                        </div>
                        <div class="result-info">
                          <h3 class="bg-color1" v-if="Anxiety == 'Normal'">
                            {{ Anxiety }}
                          </h3>
                          <h3 class="bg-color2" v-if="Anxiety == 'Mild'">
                            {{ Anxiety }}
                          </h3>
                          <h3 class="bg-color3" v-if="Anxiety == 'Moderate'">
                            {{ Anxiety }}
                          </h3>
                          <h3 class="bg-color4" v-if="Anxiety == 'Severe'">
                            {{ Anxiety }}
                          </h3>
                          <h3 class="bg-color5" v-if="Anxiety == 'Extreme'">
                            {{ Anxiety }}
                          </h3>
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
                        <p>
                          Based on your responses, you are currently
                          experiencing low level of anxiety. Recommended for
                          you, If you would like more information regarding
                          mental health issue, please go to MENTARI Portal or
                          reaching out to the nearest MENTARI in our directory.
                        </p>
                      </div>
                    </div>
                  </div>
                  <!-- result-box -->

                  <div class="result-box">
                    <h4>Depression</h4>

                    <div class="result-body">
                      <div class="d-flex">
                        <div class="score">
                          <div class="text">
                            <h5>{{ DepressionScore }}</h5>
                            <span>SCORE</span>
                          </div>
                        </div>
                        <div class="result-info">
                          <h3 class="bg-color1" v-if="Depression == 'Normal'">
                            {{ Depression }}
                          </h3>
                          <h3 class="bg-color2" v-if="Depression == 'Mild'">
                            {{ Depression }}
                          </h3>
                          <h3 class="bg-color3" v-if="Depression == 'Moderate'">
                            {{ Depression }}
                          </h3>
                          <h3 class="bg-color4" v-if="Depression == 'Severe'">
                            {{ Depression }}
                          </h3>
                          <h3 class="bg-color5" v-if="Depression == 'Extreme'">
                            {{ Depression }}
                          </h3>
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
                        <p>
                          Based on your responses, you are currently
                          experiencing low level of depression. Recommended for
                          you, If you would like more information regarding
                          mental health issue, please go to MENTARI Portal or
                          reaching out to the nearest MENTARI in our directory.
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
                  <a
                      @click="GoBack"
                      class="btn btn-primary btn-text"
                      ><i class="far fa-arrow-alt-to-left"></i> Back</a
                    >
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
      dassresult: null,
      StressScore: 0,
      AnxietyScore: 0,
      DepressionScore: 0,
      Stress: "",
      Anxiety: "",
      Depression: "",
      Id: 0,
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.dassresult = JSON.parse(localStorage.getItem("dassresult"));
    this.cbiresult_history = JSON.parse(localStorage.getItem("cbiresult_history"));
    console.log("cbi result", this.cbiresult_history);

    const Array=this.cbiresult_history.test_section_name.split(',');
    console.log("cbi namesre", Array);
    const Results=this.cbiresult_history.results.split(',');
    const Levels=this.cbiresult_history.levels.split(',');
    console.log("my res", this.dassresult);
     if(Array[0] =="Stress"){
        this.StressScore = Results[0];
        this.Stress = Levels[0];
      } if(Array[1] =="Anxiety"){
        this.AnxietyScore = Results[1];
        this.Anxiety = Levels[1];
      }
       if(Array[2] =="Depression"){
        this.DepressionScore = Results[2];
        this.Depression = Levels[2];
      }
    // if (this.dassresult) {
    //   this.Stress = this.dassresult.Stress;
    //   this.Anxiety = this.dassresult.Anxiety;
    //   this.Depression = this.dassresult.Depression;
    //   this.StressScore = this.dassresult.Stress_Value;
    //   this.AnxietyScore = this.dassresult.Anxiety_Value;
    //   this.DepressionScore = this.dassresult.Depression_Value;
    // }
    let urlParams = new URLSearchParams(window.location.search);
    this.Id = urlParams.get("id");
  },
  beforeDestroy() {
    localStorage.removeItem("dassresult");
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
        path: "/Modules/Intervention/request-appointment-form",
        query: { id: this.Id },
      });
    },
    GoBack(){
      this.$router.push({
              path: "/Modules/Intervention/patient-summary",
              query: { id: this.Id },
            });
    }
  },
};
</script>
