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
              <h4>SUICIDE RISK ASSESSMENT</h4>
            </div>
            <div class="card-body">
              <table class="data-info mt-3">
                <thead>
                  <tr>
                    <th>RISK LEVEL</th>
                    <th width="50%">RISK/PROTECTIVE FACTOR</th>
                    <th>SUICIDAL INTENT</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="risk-level"
                          id="High"
                          value="High"
                          v-model="result"
                        />
                        <label class="form-check-label" for="High">
                          High
                        </label>
                      </div>
                    </td>
                    <td>
                      <p>
                        Psychiatric diagnoses with severe symptoms or acute
                        precipitating events; protective factors not relevant
                      </p>
                    </td>
                    <td>High</td>
                  </tr>

                  <tr>
                    <td>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="risk-level"
                          id="moderate"
                          value="Moderate"
                          v-model="result"
                        />
                        <label class="form-check-label" for="moderate">
                          Moderate
                        </label>
                      </div>
                    </td>
                    <td>
                      <p>Multiple risk factors, few protective factors</p>
                    </td>
                    <td>Moderate</td>
                  </tr>

                  <tr>
                    <td>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="risk-level"
                          id="Low"
                          value="Low"
                          v-model="result"
                        />
                        <label class="form-check-label" for="Low"> Low </label>
                      </div>
                    </td>
                    <td>
                      <p>Modifiable risk factors, strong protective factors</p>
                    </td>
                    <td>Low</td>
                  </tr>
                </tbody>
              </table>
              <Error :message="error" v-if="error" />
              <div class="d-flex align-items-center mt-2">
                <button
                  type="submit"
                  class="btn btn-success ml-auto"
                  @click="Onsuciderisk"
                >
                  <i class="fad fa-paper-plane"></i> Submit
                </button>
              </div>
            </div>
          </div>
        </div>
           <div class="modal fade" id="resultmodal" tabindex="-1">
          <div class="modal-dialog modal-dialog-centered modal-table-body">
            <div class="modal-content">
              <div id="results" style="background:#fff;">
                <div class="modal-header">
                  <h5 class="modal-title">Suicide Alert!</h5>
                 <p>
                    Your Test is successfully Submitted!
                  </p>
                </div>
                <!-- <div class="modal-body">
                  <table class="modal-table">
                    <thead>
                      <tr>
                        <th scope="col">Diagnosis</th>
                        <th scope="col">Total Scrore</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Minimal Depression</th>
                        <td>0-4</td>
                      </tr>
                      <tr>
                        <th scope="row">Mild Depression</th>
                        <td>5-9</td>
                      </tr>
                      <tr class="active">
                        <th scope="row">Moderate Depression</th>
                        <td>10-14</td>
                      </tr>
                      <tr>
                        <th scope="row">Moderately Severe Depression</th>
                        <td>15-19</td>
                      </tr>
                      <tr>
                        <th scope="row">Severe Depression</th>
                        <td>20-27</td>
                      </tr>
                    </tbody>
                  </table>
                </div> -->
              </div>
              <!-- <div class="modal-footer">
                <button
                  @click="downloadresult"
                  type="button"
                  class="btn btn-secondary mr-auto"
                >
                  <i class="fad fa-download"></i> Download Result
                </button>
                <a
                   @click="Gotorequestappointment"
                  class="btn btn-primary ml-auto"
                >
                  <i class="fad fa-calendar-day"></i> Request Appointment
                </a>
              </div> -->
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
  name: "suicide-risk",
  data() {
    return {
      userdetails: null,
      Id: 0,
      result: "",
      loader:false,
      error:null,
      user_ip_address:""
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    let urlParams = new URLSearchParams(window.location.search);
    this.Id = urlParams.get("id");
    this.GetUserIpAddress();
  },
  methods: {
    async Onsuciderisk() {
      this.error = null;
      try {
        if (!this.result) {
          this.error="Please select RISK LEVEL.";
        }
        if (this.result) {
          this.loader = true;
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          const response = await this.$axios.post(
            "test-result-suicidal-risk/add",
            {
              added_by: this.userdetails.user.id,
              patient_id: this.Id,
              result: this.result,
              user_ip_address: this.user_ip_address,
            },
            { headers }
          );
          console.log('mt resp',response.data);
          if (response.data.code == 200 || response.data.code == "200") {
            this.loader = false;
            this.$nextTick(() => {
              $("#resultmodal").modal("show");
            });
            this.$router.push({
              path: "/app/modules/Intervention/patient-summary",
              query: { id: this.Id },
            });
          } else {
            this.loader = false;
            this.$nextTick(() => {
              $("#errorpopup").modal("show");
            });
          }
        }
      } catch (e) {
        this.loader = false;
        this.$nextTick(() => {
          $("#errorpopup").modal("show");
        });
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
      this.user_ip_address = ip;
    },
    async Gotorequestappointment() {
      this.$router.push({
        path: "/app/modules/Patient/request-appointment-form",
        query: { id: this.Id },
      });
    }
  },
};
</script>
