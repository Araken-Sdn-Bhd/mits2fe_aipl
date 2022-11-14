<template>
  <div id="layoutSidenav">
    <div>
      <CommonSidebar />
    </div>
    <div id="layoutSidenav_content">
      <div>
        <CommonHeader />
      </div>
      <main>
        <Loader v-if="loader" />
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>Clinical Information</h1>
          </div>

          <div class="card mb-4">
            <div class="card-body">
              <form class="mt-3" method="post" @submit.prevent="OnAddClinicalInfo">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Temperature(In ℃ Unit)</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Temperature"
                        v-model="temperature"
                      />
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label"
                        >Blood Pressure (In mm/hg Unit)</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Blood Pressure"
                        v-model="blood_pressure"
                      />
                    </div>
                  </div>
                </div>
                <!-- row -->

                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Pulse Rate (In bpm Unit)</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Pulse Rate"
                        v-model="pulse_rate"
                      />
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Weight (In kg Unit)</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Weight"
                        v-model="weight"
                      />
                    </div>
                  </div>
                </div>
                <!-- row -->

                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Height (In cm Unit)</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Height "
                        v-model="height"
                        @change="calculateBMI"
                      />
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">BMI (In kg/m Unit)</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter BMI"
                        v-model="bmi"
                      />
                    </div>
                  </div>
                </div>
                <!-- row -->

                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label"
                        >Waist Circumference (In cm Unit)</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Waist Crcumference "
                        v-model="waist_circumference"
                      />
                    </div>
                  </div>
                </div>
                <!-- row -->
 <p v-if="errorList.length">
                          <ul>
                           <li style="color:red"  v-for='err in errorList' :key='err' >
                           {{ err }}
                             </li>
                        </ul>
                       </p>
                <!-- <div class="d-flex">
                  <button
                    type="submit"
                    class="btn btn-warning btn-text ml-auto"
                  >
                    <i class="far fa-save"></i> Save
                  </button>
                </div> -->
                 <div class="form-foter mt-3">
                    <a
                      @click="OnBack"
                      class="btn btn-primary btn-text"
                      ><i class="far fa-arrow-alt-to-left"></i> Back</a
                    >
                    <div class="btn-right">
                      <button
                    type="submit"
                    class="btn btn-warning btn-text ml-auto"
                  >
                    <i class="far fa-save"></i> Save
                  </button>
                    </div>
                  </div>
              </form>
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
  name: "add-clinical-info",
  data() {
    return {
      userdetails: null,
      Id: 0,
      temperature: "",
      blood_pressure: "",
      pulse_rate: "",
      weight: "",
      height: "",
      bmi: "",
      waist_circumference: "",
      loader: false,
      errorList: [],
      appointmentid: null,
    };
  },

  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.appointmentid = (localStorage.getItem("appointmentId"));
    console.log('appointmentid',this.appointmentid);
    let urlParams = new URLSearchParams(window.location.search);
    this.Id = urlParams.get("id");
  },
  methods: {
    async OnAddClinicalInfo() {
      this.errorList = [];
      try {
        if (!this.temperature) {
          this.errorList.push("Temperature is required");
        }
        if (!this.blood_pressure) {
          this.errorList.push("Blood Pressure is required");
        }
        if (!this.pulse_rate) {
          this.errorList.push("Pulse Rate is required");
        }
        if (!this.weight) {
          this.errorList.push("Weight  is required");
        }
        if (!this.height) {
          this.errorList.push("Height  is required");
        }
        if (!this.bmi) {
          this.errorList.push("BMI is required");
        }
        if (!this.waist_circumference) {
          this.errorList.push("Waist Circumference is required");
        }
        if (
          this.temperature &&
          this.blood_pressure &&
          this.pulse_rate &&
          this.weight &&
          this.height &&
          this.bmi &&
          this.waist_circumference
        ) {
          this.loader = true;
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          const response = await this.$axios.post(
            "patient-clinicalinfo/add",
            {
              added_by: this.userdetails.user.id,
              patient_id: this.Id,
              temperature: this.temperature,
              blood_pressure: this.blood_pressure,
              pulse_rate: this.pulse_rate,
              weight: this.weight,
              height: this.height,
              bmi: this.bmi,
              waist_circumference: this.waist_circumference,
              patient_mrn_id: 0,
              appointmentid:this.appointmentid,
            },
            { headers }
          );
          if (response.data.code == 200) {
            this.loader = false;
            this.resetform();
            this.$nextTick(() => {
              $("#insertpopup").modal("show");
            });
            this.$router.push({
              path: "/modules/Patient/clinical-history",
              query: { id: this.Id },
            });
            setTimeout(() => {
              window.location.reload();
            }, 100);
          } else {
            this.loader = false;
            this.errorList.push(response.data.message);
            this.$nextTick(() => {
              $("#errorpopup").modal("show");
            });
          }
        }
      } catch (e) {
        this.loader = false;
      }
    },
    resetform() {
      this.temperature = "";
      this.blood_pressure = "";
      this.pulse_rate = "";
      this.weight = "";
      this.height = "";
      this.bmi = "";
      this.waist_circumference = "";
    },
    OnBack(){
      this.$router.push({
              path: "/modules/Intervention/patient-summary",
              query: { id: this.Id },
            });
    },
    calculateBMI(){
      var heightInMeter = this.height/100;
      var val = this.weight/(heightInMeter*heightInMeter);
      this.bmi = val.toFixed(2);
      console.log('Bmivalue',this.bmi);
    }
  },
};
</script>
