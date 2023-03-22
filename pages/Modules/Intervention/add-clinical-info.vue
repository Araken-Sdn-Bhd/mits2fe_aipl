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
                                        <label class="form-label">Name</label>
                                        <input type="text" class="form-control" placeholder="Enter Name" v-model="name" />
                                    </div>
                                </div>

                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label class="form-label">NRIC/Passport No.</label>
                                        <input type="text" class="form-control" placeholder="Enter NRIC/Passport No." v-model="nric_or_passportno" />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label class="form-label">Temperature(In ℃ Unit)</label>
                                        <input type="text" class="form-control" placeholder="Enter Temperature" v-model="temperature" />
                                    </div>
                                </div>

                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label class="form-label">Blood Pressure (In mm/hg Unit)</label>
                                        <input type="text" class="form-control" placeholder="Enter Blood Pressure" v-model="blood_pressure" />
                                    </div>
                                </div>
                            </div>
                            <!-- row -->

                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label class="form-label">Pulse Rate (In bpm Unit)</label>
                                        <input type="text" class="form-control" placeholder="Enter Pulse Rate" v-model="pulse_rate" />
                                    </div>
                                </div>

                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label class="form-label">Weight (In kg Unit)</label>
                                        <input type="text" class="form-control" placeholder="Enter Weight" v-model="weight" @change="calculateBMI" />
                                    </div>
                                </div>
                            </div>
                            <!-- row -->

                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label class="form-label">Height (In cm Unit)</label>
                                        <input type="text" class="form-control" placeholder="Enter Height " v-model="height" @change="calculateBMI" />
                                    </div>
                                </div>

                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label class="form-label">BMI (In kg/m Unit)</label>
                                        <input type="text" class="form-control" placeholder="Enter BMI" v-model="bmi" />
                                    </div>
                                </div>
                            </div>
                            <!-- row -->

                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label class="form-label">Waist Circumference (In cm Unit)</label>
                                        <input type="text" class="form-control" placeholder="Enter Waist Crcumference " v-model="waist_circumference" />
                                    </div>
                                </div>
                            </div>
                            <!-- row -->
                            <p v-if="errorList.length">
                                <ul>
                                    <li style="color:red" v-for='err in errorList' :key='err'>
                                        {{ err }}
                                    </li>
                                </ul>
                            </p>
                            <!-- <div class="d-flex">
                  <button
                    type="submit"
                    class="btn btn-warning btn-text ml-auto"
                  >
                    <i class="fa fa-save"></i> Save
                  </button>
                </div> -->
                            <br><br>
                            <div class="d-flex">
                                <button @click="GoBack" type="button" class="btn btn-primary btn-fill btn-md" title="Back">
                                    <i class="fa fa-step-backward" /> &nbsp; Back
                                </button>
                                <button type="submit" class="btn btn-warning btn-text ml-auto btn-fill btn-md" title="Save">
                                    <i class="fa fa-save"></i> Save
                                </button>
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
    components: {
        CommonSidebar,
        CommonHeader
    },
    name: "add-clinical-info",
    data() {
        return {
            userdetails: null,
            Id: 0,
            name: "",
            nric_or_passportno: "",
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
            appId: 0,
        };
    },

    beforeMount() {
        this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
        this.appointmentid = (localStorage.getItem("appointmentId"));
        console.log('appointmentid', this.appointmentid);
        let urlParams = new URLSearchParams(window.location.search);
        this.Id = urlParams.get("id");
        let urlParams2 = new URLSearchParams(window.location.search);
        this.appId = urlParams2.get("appId");
        this.GetPatientdetails();
    },
    methods: {
        async OnAddClinicalInfo() {
            this.$swal.fire({
                title: 'Do you want to save the changes?',
                showCancelButton: true,
                confirmButtonText: 'Save',
            }).then(async (result) => {
                if (result.isConfirmed) {
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
                                "patient-clinicalinfo/add", {
                                    added_by: this.userdetails.user.id,
                                    branch_id: this.userdetails.branch.branch_id,
                                    patient_id: this.Id,
                                    temperature: this.temperature,
                                    blood_pressure: this.blood_pressure,
                                    pulse_rate: this.pulse_rate,
                                    weight: this.weight,
                                    height: this.height,
                                    bmi: this.bmi,
                                    waist_circumference: this.waist_circumference,
                                    appointmentid: this.appointmentid,
                                }, {
                                    headers
                                }
                            );
                            if (response.data.code == 200) {
                                this.loader = false;
                                this.resetform();
                                this.loader = false;
                                this.$swal.fire(
                                    'Successfully Submitted.',
                                    'Data is saved.',
                                    'success',
                                );
                                this.GoBack();
                            } else {
                                this.loader = false;
                                this.$swal.fire({
                                    icon: 'error',
                                    title: 'Oops... Something Went Wrong!',
                                    text: 'the error is: ' + JSON.stringify(response.data.message),
                                    footer: ''
                                });
                            }
                        }
                    } catch (e) {
                        this.loader = false;
                        this.$swal.fire({
                            icon: 'error',
                            title: 'Oops... Something Went Wrong!',
                            text: 'the error is: ' + e,
                            footer: ''
                        });
                    }
                } else if (result.isDismissed) {
                    this.$swal.fire('Changes are not saved', '', 'info')
                }
            })
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
    },
    async GetPatientdetails() {
            const headers = {
                Authorization: "Bearer " + this.userdetails.access_token,
                Accept: "application/json",
                "Content-Type": "application/json",
            };
            const response = await this.$axios.post(
                "patient-registration/getPatientRegistrationById", {
                    id: this.Id,
                }, {
                    headers
                }
            );
            if (response.data.code == 200) {
                this.name = response.data.list[0].name_asin_nric;
                this.nric_or_passportno = response.data.list[0].nric_no;
                console.log("my details", this.patientdetails);
            } else {
                this.$swal.fire({
                    icon: 'error',
                    title: 'Oops... Something Went Wrong!',
                    text: 'the error is: ' + this.error,
                    footer: ''
                });
            }
        },
        calculateBMI() {
            var heightInMeter = this.height / 100;
            var val = this.weight / (heightInMeter * heightInMeter);
            this.bmi = val.toFixed(2);
            console.log('Bmivalue', this.bmi);
        }
    },
};
</script>
