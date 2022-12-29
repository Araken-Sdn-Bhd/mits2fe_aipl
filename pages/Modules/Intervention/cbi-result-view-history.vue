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
                <a href="/app/modules/Patient/cbi" class="nav-link"
                  ><i class="fa fa-file-contract"></i> <span>CBI</span></a
                >
              </li>
              <li>
                <a href="/app/modules/Patient/dass" class="nav-link"
                  ><i class="fa fa-file-contract"></i> <span>DASS</span></a
                >
              </li>
              <li>
                <a href="/app/modules/Patient/phq-9" class="nav-link"
                  ><i class="fa fa-file-contract"></i> <span>PHQ 9</span></a
                >
              </li>
              <li>
                <a href="/app/modules/Patient/whodas" class="nav-link"
                  ><i class="fa fa-file-contract"></i> <span>WHODAS</span></a
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
                            <h5 v-if="cbiresult_history">
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
                          <h3 class="bg-color3" v-if="personallevel == 'High Depression'">
                            {{ personallevel }}
                          </h3>
                          <h3
                            class="bg-color4"
                            v-if="personallevel == 'Severe'"
                          >
                            {{ personallevel }}
                          </h3>
                          <div
                            class="arrow"
                            style="left: 33%; border-bottom-color: #8bdf25"
                          ></div>
                          <div class="progress">
                            <div
                              class="progress-bar bg-color bg-color1"
                              role="progressbar"
                              style="width: 49%"
                              aria-valuenow="37"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                            <div
                              class="progress-bar bg-color bg-color2"
                              role="progressbar"
                              style="width: 24%"
                              aria-valuenow="24"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                            <div
                              class="progress-bar bg-color bg-color3"
                              role="progressbar"
                              style="width: 24%"
                              aria-valuenow="24"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                            <div
                              class="progress-bar bg-color bg-color4"
                              role="progressbar"
                              style="width: 3%"
                              aria-valuenow="3"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <div class="indicator">
                            <div class="dot normal">
                              <span class="bg-color1"></span>
                              <h5>Normal</h5>
                            </div>
                            <div class="dot moderate">
                              <span class="bg-color2"></span>
                              <h5>Moderate</h5>
                            </div>
                            <div class="dot high">
                              <span class="bg-color3"></span>
                              <h5>High</h5>
                            </div>
                            <div class="dot severe">
                              <span class="bg-color4"></span>
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
                            <h5 v-if="cbiresult_history">
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
                          <h3 class="bg-color3" v-if="worklevel == 'High Depression'">
                            {{ worklevel }}
                          </h3>
                          <h3 class="bg-color4" v-if="worklevel == 'Severe'">
                            {{ worklevel }}
                          </h3>
                          <div
                            class="arrow"
                            style="left: 29%; border-bottom-color: #8bdf25"
                          ></div>
                          <div class="progress">
                            <div
                              class="progress-bar bg-color bg-color1"
                              role="progressbar"
                              style="width: 49%"
                              aria-valuenow="37"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                            <div
                              class="progress-bar bg-color bg-color2"
                              role="progressbar"
                              style="width: 24%"
                              aria-valuenow="24"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                            <div
                              class="progress-bar bg-color bg-color3"
                              role="progressbar"
                              style="width: 24%"
                              aria-valuenow="24"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                            <div
                              class="progress-bar bg-color bg-color4"
                              role="progressbar"
                              style="width: 3%"
                              aria-valuenow="3"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <div class="indicator">
                            <div class="dot normal">
                              <span class="bg-color1"></span>
                              <h5>Normal</h5>
                            </div>
                            <div class="dot moderate">
                              <span class="bg-color2"></span>
                              <h5>Moderate</h5>
                            </div>
                            <div class="dot high">
                              <span class="bg-color3"></span>
                              <h5>High</h5>
                            </div>
                            <div class="dot severe">
                              <span class="bg-color4"></span>
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
                            <h5 v-if="cbiresult_history">
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
                          <h3 class="bg-color3" v-if="clientlevel == 'High Depression'">
                            {{ clientlevel }}
                          </h3>
                          <h3 class="bg-color4" v-if="clientlevel == 'Severe'">
                            {{ clientlevel }}
                          </h3>
                          <div
                            class="arrow"
                            style="left: 44%; border-bottom-color: #8bdf25"
                          ></div>
                          <div class="progress">
                            <div
                              class="progress-bar bg-color bg-color1"
                              role="progressbar"
                              style="width: 49%"
                              aria-valuenow="37"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                            <div
                              class="progress-bar bg-color bg-color2"
                              role="progressbar"
                              style="width: 24%"
                              aria-valuenow="24"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                            <div
                              class="progress-bar bg-color bg-color3"
                              role="progressbar"
                              style="width: 24%"
                              aria-valuenow="24"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                            <div
                              class="progress-bar bg-color bg-color4"
                              role="progressbar"
                              style="width: 3%"
                              aria-valuenow="3"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <div class="indicator">
                            <div class="dot normal">
                              <span class="bg-color1"></span>
                              <h5>Normal</h5>
                            </div>
                            <div class="dot moderate">
                              <span class="bg-color2"></span>
                              <h5>Moderate</h5>
                            </div>
                            <div class="dot high">
                              <span class="bg-color3"></span>
                              <h5>High</h5>
                            </div>
                            <div class="dot severe">
                              <span class="bg-color4"></span>
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
                  <a
                      @click="GoBack"
                      class="btn btn-primary btn-text"
                      ><i class="fa fa-arrow-alt-to-left"></i> Back</a
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
  name: "cbi-result",
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
      cbiresult_history:null,
      appId: 0,
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.cbiresult = JSON.parse(localStorage.getItem("cbiresult"));
    this.cbiresult_history = JSON.parse(localStorage.getItem("cbiresult_history"));
    console.log("cbi result", this.cbiresult_history);

     if (this.cbiresult_history) {
      const Array=this.cbiresult_history.test_section_name.split(',');
      console.log("cbi namesre", Array);
      const Results=this.cbiresult_history.results.split(',');
      const Levels=this.cbiresult_history.levels.split(',');
      if(Array[0] =="PERSONAL BURNOUT" || Array[0] =="PERSONAL_BURNOUT"){
        this.personalScore = Results[0];
        console.log("cbi namesre", this.personalScore);
        this.personallevel = Levels[0];
      } if(Array[1] =="WORK BURNOUT"||Array[1] =="WORK_BURNOUT"){
        this.workScore = Results[1];
        console.log("WORK BURNOUT", this.workScore);
        this.worklevel = Levels[1];
      }
       if(Array[2] =="CLIENT RELATED BURNOUT" ||Array[2] =="CLIENT_RELATED_BURNOUT"){
        this.clientScore = Results[2];
        console.log("WORK BURNOUT", this.clientScore);
        this.clientlevel = Levels[2];
      }

    }
    let urlParams = new URLSearchParams(window.location.search);
    this.Id = urlParams.get("id");
    let urlParams1 = new URLSearchParams(window.location.search);
    this.appId = urlParams1.get("appId");
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
        path: "/modules/Intervention/request-appointment-form",
        query: { id: this.Id },
      });
    },
    GoBack(){
      if(this.appId){
        this.$router.push({
              path: "/modules/Intervention/patient-summary",
              query: { id: this.Id, appId: this.appId },
            });
      }else{
        this.$router.push({
              path: "/modules/Intervention/patient-summary",
              query: { id: this.Id},
            });
      };
    }

  },
};
</script>
