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
                <h4>Who Disabilty Assessment schedule (WHO DAS)</h4>
                <p>Thank you for reaching out to MENTARI Self Test</p>
              </div>
              <div class="row justify-content-center">
                <div class="col-sm-8">
                  <div class="whodas-result">
                    <p>Your general disability score</p>
                    <h4>{{ UserTotal }} <span>/ 180</span></h4>
                  </div>

                  <div class="row">
                    <div class="col-sm-6">
                      <div class="whodas-box">
                        <h5>UNDERSTANDING & COMMUNICATING</h5>
                        <div class="score-box">
                          <h4>{{ UC }}</h4>
                          <span>Domain Score</span>
                        </div>
                      </div>
                    </div>
                    <!-- col-sm-6 -->

                    <div class="col-sm-6">
                      <div class="whodas-box">
                        <h5>GETTING AROUND</h5>
                        <div class="score-box">
                          <h4>{{ GA }}</h4>
                          <span>Domain Score</span>
                        </div>
                      </div>
                    </div>
                    <!-- col-sm-6 -->

                    <div class="col-sm-6">
                      <div class="whodas-box">
                        <h5>SELF CARE</h5>
                        <div class="score-box">
                          <h4>{{ SC }}</h4>
                          <span>Domain Score</span>
                        </div>
                      </div>
                    </div>
                    <!-- col-sm-6 -->

                    <div class="col-sm-6">
                      <div class="whodas-box">
                        <h5>GETTING ALONG WITH PEOPLE</h5>
                        <div class="score-box">
                          <h4>{{ GAWP }}</h4>
                          <span>Domain Score</span>
                        </div>
                      </div>
                    </div>
                    <!-- col-sm-6 -->

                    <div class="col-sm-6">
                      <div class="whodas-box">
                        <h5>LIFE ACTIVITIES - HOUSEHOLD</h5>
                        <div class="score-box">
                          <h4>{{ LAH }}</h4>
                          <span>Domain Score</span>
                        </div>
                      </div>
                    </div>
                    <!-- col-sm-6 -->

                    <div class="col-sm-6">
                      <div class="whodas-box">
                        <h5>LIFE ACTIVMES - SCHOOL/WORK</h5>
                        <div class="score-box">
                          <h4>{{ LASW }}</h4>
                          <span>Domain Score</span>
                        </div>
                      </div>
                    </div>
                    <!-- col-sm-6 -->

                    <div class="col-sm-6">
                      <div class="whodas-box">
                        <h5>PARTICIPATION IN SOCIETY</h5>
                        <div class="score-box">
                          <h4>{{ PIS }}</h4>
                          <span>Domain Score</span>
                        </div>
                      </div>
                    </div>
                    <!-- col-sm-6 -->
                  </div>
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
                    href="/app/modules/Patient/public-request-appointment-form"
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
export default {
  components: { PatientLoginSidebar, PatientLoginHeader },
  name: "dass-result",
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
      whodasresult: null,
      GA: 0,
      GAWP: 0,
      LAH: 0,
      LASW: 0,
      PIS: 0,
      SC: 0,
      UC: 0,
      UserTotal: 0,
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.whodasresult = JSON.parse(localStorage.getItem("whodasresult"));
    console.log("my res", this.whodasresult);
    if (this.whodasresult) {
      this.GA = this.whodasresult.GA;
      this.GAWP = this.whodasresult.GAWP;
      this.LAH = this.whodasresult.LAH;
      this.LASW = this.whodasresult.LASW;
      this.PIS = this.whodasresult.PIS;
      this.SC = this.whodasresult.SC;
      this.UC = this.whodasresult.UC;
      this.UserTotal = this.whodasresult.UserTotal;
    }
  },
  beforeDestroy() {
    localStorage.removeItem("whodasresult");
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
