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
            <h1>Online Test Result</h1>
          </div>
          <div class="card mb-4" style="width:80% ; margin-left: auto;
    margin-right: auto">
            <div
              class="result"
              id="results"
              style="background: #fff !important"
            >
              <div class="result-header">
                <h4>DEPRESSION, ANXIETY and STRESS Scale (DASS)</h4>
                <p>Thank you for reaching out to MENTARI Self Test</p>
              </div>
            </div>

            <!--Result-->
            <table class="form-table">
                <thead>
                  <tr>
                    <th width="70%"></th>
                    <th width="70%"></th>
                  </tr>
                </thead>
                <tbody>
                  <label>DEPRESSION</label>
                  <div class="form-check form-check-inline">
                        <label class="form-check-label">{{
                         totalDepression.result
                        }}</label>
                      </div>
                  <tr>
                  <td>
                      {{ answer3.Question }}
                      <i>{{ answer3.question_ml }}</i>
                    </td>
                    <td>
                      <div class="form-check form-check-inline">
                        <label class="form-check-label">{{
                          answer3.answer_id
                        }}</label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                  <td>
                      {{ answer5.Question }}
                      <i>{{ answer5.question_ml }}</i>
                    </td>
                    <td>
                      <div class="form-check form-check-inline">
                        <label class="form-check-label">{{
                          answer5.answer_id
                        }}</label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                  <td>
                      {{ answer10.Question }}
                      <i>{{ answer10.question_ml }}</i>
                    </td>
                    <td>
                      <div class="form-check form-check-inline">
                        <label class="form-check-label">{{
                          answer10.answer_id
                        }}</label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                  <td>
                      {{ answer13.Question }}
                      <i>{{ answer13.question_ml }}</i>
                    </td>
                    <td>
                      <div class="form-check form-check-inline">
                        <label class="form-check-label">{{
                          answer13.answer_id
                        }}</label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                  <td>
                      {{ answer16.Question }}
                      <i>{{ answer16.question_ml }}</i>
                    </td>
                    <td>
                      <div class="form-check form-check-inline">
                        <label class="form-check-label">{{
                          answer16.answer_id
                        }}</label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                  <td>
                      {{ answer17.Question }}
                      <i>{{ answer17.question_ml }}</i>
                    </td>
                    <td>
                      <div class="form-check form-check-inline">
                        <label class="form-check-label">{{
                          answer17.answer_id
                        }}</label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                  <td>
                      {{ answer21.Question }}
                      <i>{{ answer21.question_ml }}</i>
                    </td>
                    <td>
                      <div class="form-check form-check-inline">
                        <label class="form-check-label">{{
                          answer21.answer_id
                        }}</label>
                      </div>
                    </td>
                  </tr>
                  <br>
                  <label>ANXIETY</label>
                  <div class="form-check form-check-inline">
                        <label class="form-check-label">{{
                         totalAnxiety.result
                        }}</label>
                      </div>
                  <tr>
                  <td>
                      {{ answer2.Question }}
                      <i>{{ answer2.question_ml }}</i>
                    </td>
                    <td>
                      <div class="form-check form-check-inline">
                        <label class="form-check-label">{{
                          answer2.answer_id
                        }}</label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                  <td>
                      {{ answer4.Question }}
                      <i>{{ answer4.question_ml }}</i>
                    </td>
                    <td>
                      <div class="form-check form-check-inline">
                        <label class="form-check-label">{{
                          answer4.answer_id
                        }}</label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                  <td>
                      {{ answer7.Question }}
                      <i>{{ answer7.question_ml }}</i>
                    </td>
                    <td>
                      <div class="form-check form-check-inline">
                        <label class="form-check-label">{{
                          answer7.answer_id
                        }}</label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                  <td>
                      {{ answer9.Question }}
                      <i>{{ answer9.question_ml }}</i>
                    </td>
                    <td>
                      <div class="form-check form-check-inline">
                        <label class="form-check-label">{{
                          answer9.answer_id
                        }}</label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                  <td>
                      {{ answer15.Question }}
                      <i>{{ answer15.question_ml }}</i>
                    </td>
                    <td>
                      <div class="form-check form-check-inline">
                        <label class="form-check-label">{{
                          answer15.answer_id
                        }}</label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                  <td>
                      {{ answer19.Question }}
                      <i>{{ answer19.question_ml }}</i>
                    </td>
                    <td>
                      <div class="form-check form-check-inline">
                        <label class="form-check-label">{{
                          answer19.answer_id
                        }}</label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                  <td>
                      {{ answer20.Question }}
                      <i>{{ answer20.question_ml }}</i>
                    </td>
                    <td>
                      <div class="form-check form-check-inline">
                        <label class="form-check-label">{{
                          answer20.answer_id
                        }}</label>
                      </div>
                    </td>
                  </tr>
                  <br>
                  <label>STRESS</label>
                  <div class="form-check form-check-inline">
                        <label class="form-check-label">{{
                         totalStress.result
                        }}</label>
                      </div>
                  <tr>
                  <td>
                      {{ answer1.Question }}
                      <i>{{ answer1.question_ml }}</i>
                    </td>
                    <td>
                      <div class="form-check form-check-inline">
                        <label class="form-check-label">{{
                          answer1.answer_id
                        }}</label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                  <td>
                      {{ answer6.Question }}
                      <i>{{ answer6.question_ml }}</i>
                    </td>
                    <td>
                      <div class="form-check form-check-inline">
                        <label class="form-check-label">{{
                          answer6.answer_id
                        }}</label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                  <td>
                      {{ answer8.Question }}
                      <i>{{ answer8.question_ml }}</i>
                    </td>
                    <td>
                      <div class="form-check form-check-inline">
                        <label class="form-check-label">{{
                          answer8.answer_id
                        }}</label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                  <td>
                      {{ answer11.Question }}
                      <i>{{ answer11.question_ml }}</i>
                    </td>
                    <td>
                      <div class="form-check form-check-inline">
                        <label class="form-check-label">{{
                          answer11.answer_id
                        }}</label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                  <td>
                      {{ answer12.Question }}
                      <i>{{ answer12.question_ml }}</i>
                    </td>
                    <td>
                      <div class="form-check form-check-inline">
                        <label class="form-check-label">{{
                          answer12.answer_id
                        }}</label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                  <td>
                      {{ answer14.Question }}
                      <i>{{ answer14.question_ml }}</i>
                    </td>
                    <td>
                      <div class="form-check form-check-inline">
                        <label class="form-check-label">{{
                          answer14.answer_id
                        }}</label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                  <td>
                      {{ answer18.Question }}
                      <i>{{ answer18.question_ml }}</i>
                    </td>
                    <td>
                      <div class="form-check form-check-inline">
                        <label class="form-check-label">{{
                          answer18.answer_id
                        }}</label>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            <!--Result-->

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
  name: "view-dass-result",
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
      pid: 0,
      user_ip_address: "",
      appId: 0,
      list:[],
      totalDepression:0,
      totalAnxiety:0,
      totalStress:0,
      answer1:[],
      answer2:[],
      answer3:[],
      answer4:[],
      answer5:[],
      answer6:[],
      answer7:[],
      answer8:[],
      answer9:[],
      answer10:[],
      answer11:[],
      answer12:[],
      answer13:[],
      answer14:[],
      answer15:[],
      answer16:[],
      answer17:[],
      answer18:[],
      answer19:[],
      answer20:[],
      answer21:[],
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    let urlParams = new URLSearchParams(window.location.search);
    this.pid = urlParams.get("id");
    let urlParams1 = new URLSearchParams(window.location.search);
    this.user_ip_address = urlParams1.get("ip");

    let urlParams2 = new URLSearchParams(window.location.search);
    this.date=urlParams2.get("date");
    this.ViewAnsweredTest();
  },

  methods: {

    async ViewAnsweredTest(){
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "patient/view-dass",
        {  id:this.pid, ip: this.user_ip_address, date:this.date },
        {
          headers,
        }
      );
      console.log("my list", response.data);
      if (response.data.code == 200) {
        this.list = response.data.result;
        this.totalDepression = response.data.totalDepression;
        this.totalAnxiety = response.data.totalAnxiety;
        this.totalStress = response.data.totalStress;
        this.answer1=response.data.result[0];
        this.answer2=response.data.result[1];
        this.answer3=response.data.result[2];
        this.answer4=response.data.result[3];
        this.answer5=response.data.result[4];
        this.answer6=response.data.result[5];
        this.answer7=response.data.result[6];
        this.answer8=response.data.result[7];
        this.answer9=response.data.result[8];
        this.answer10=response.data.result[9];
        this.answer11=response.data.result[10];
        this.answer12=response.data.result[11];
        this.answer13=response.data.result[12];
        this.answer14=response.data.result[13];
        this.answer15=response.data.result[14];
        this.answer16=response.data.result[15];
        this.answer17=response.data.result[16];
        this.answer18=response.data.result[17];
        this.answer19=response.data.result[18];
        this.answer20=response.data.result[19];
        this.answer21=response.data.result[20];
      } else {
        this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + this.error,
                  footer: ''
                });
      }
    },

    GoBack(){
        this.$router.push({
              path: "/modules/Online-Self-Test/dass",
            });
    }
  },
};
</script>
