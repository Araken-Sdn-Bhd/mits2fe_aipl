<template>
  <div id="layoutSidenav">
      <CommonSidebar />
      <div id="layoutSidenav_content">
          <CommonHeader />
          <main id="reslt" ref="reslt">
              <div class="container-fluid px-4" >
                  <div class="page-title">
                      <h1>OCCT REFERRAL FORM</h1>
                      <!-- <a href="#"><i class="fal fa-plus"></i> Add</a> -->
                  </div>
                  <div class="card mb-4">
                      <div class="card-body">
                              <table class="notes">
                                  <thead>
                                      <tr>
                                          <th colspan="2">Patient Details</th>

                                      </tr>
                                  </thead>
                                  <tbody v-if="patientdetails">
                                      <tr>
                                          <th>MRN:</th>
                                       <td>{{ patientdetails.patient_mrn }}</td>
                                      </tr>
                                      <tr>
                                          <th>Patient Name:</th>
                                       <td>{{ patientdetails.name_asin_nric }}</td>
                                      </tr>
                                      <tr>
                                          <th>NRIC NO:</th>
                                          <td>{{ patientdetails.nric_no }}</td>
                                      </tr>
                                      <tr>
                                          <th>Age:</th>
                                        <td>{{ patientdetails.age }}</td>
                                      </tr>
                                      <tr>
                                          <th>Contact No:</th>
                                          <td>{{ patientdetails.mobile_no }}</td>
                                      </tr>
                                      <tr>
                                          <th>Gender:</th>
                                       <td>{{ patientdetails.gender[0].section_value }}</td>
                                      </tr>
                                      <tr>
                                          <th>DOB:</th>
                                          <td>{{ patientdetails.birth_date }}</td>
                                      </tr>
                                  </tbody>
                              </table>
                              <table class="notes">
                                  <thead>
                                      <tr>
                                          <th colspan="2">Psychotherapy Progress Note </th>

                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr>
                                          <th>Referral Location: </th>
                                          <td>
                                              <input type="text" class="form-control mt-3" v-model="referral_location">
                                          </td>
                                      </tr>
                                      <tr>
                                          <th>Referral Date: </th>
                                          <td>
                                              <input type="date" class="form-control" v-model="date">
                                          </td>
                                      </tr>
                                      <tr>
                                          <th>Diagnosis: </th>
                                          <td>
                                              <select v-model="type_diagnosis_id" class="form-select" aria-label="Default select example">
                                                  <option value="0">Select Diagnosis</option>
                              <option
            v-for="catcode in diagonisislist"
            v-bind:key="catcode.id"
            v-bind:value="catcode.id"
          >
          {{ catcode.icd_code }} {{catcode.icd_name}}
          </option>
                                              </select>
                                          </td>
                                      </tr>
                                      <tr>
                                          <th>Referral Purpose:</th>
                                          <td>
                                              <table class="sub-table">
                                                  <thead>
                                                      <tr>
                                                          <th colspan="2">Clinical Assessment: </th>
                                                      </tr>
                                                  </thead>
                                                  <tbody>
                                                      <tr v-if="!pid">
                                                          <td>
                                                              <div class="form-check">
                                                                  <input class="form-check-input" type="checkbox"  @click="OnclinicalAssesment('Activities Living Assessment')"
                                                                       id="1">
                                                                  <label class="form-check-label" for="1">
                                                                      Activities Living Assessment
                                                                  </label>
                                                              </div>

                                                              <div class="form-check">
                                                                  <input class="form-check-input" type="checkbox"  @click="OnclinicalAssesment('Behavior Assessment')"
                                                                       id="2">
                                                                  <label class="form-check-label" for="2">
                                                                      Behavior Assessment
                                                                  </label>
                                                              </div>

                                                              <div class="form-check">
                                                                  <input class="form-check-input" type="checkbox"  @click="OnclinicalAssesment('Cognitive And Perceptual Assessment')"
                                                                       id="3">
                                                                  <label class="form-check-label" for="3">
                                                                      Cognitive And Perceptual Assessment
                                                                  </label>
                                                              </div>
                                                              <div class="form-check">
                                                                  <input class="form-check-input" type="checkbox"  @click="OnclinicalAssesment('Child Development')"
                                                                      name="fah" id="4">
                                                                  <label class="form-check-label" for="4">
                                                                      Child Development
                                                                  </label>
                                                              </div>
                                                              <div class="form-check">
                                                                  <input class="form-check-input" type="checkbox"  @click="OnclinicalAssesment('Psychological Assessment')"
                                                                      name="fah" id="5">
                                                                  <label class="form-check-label" for="5">
                                                                      Psychological Assessment
                                                                  </label>
                                                              </div>
                                                              <div class="form-check">
                                                                  <input class="form-check-input" type="checkbox"  @click="OnclinicalAssesment('Seating and Wheelchair Assessment')"
                                                                      name="fah" id="6">
                                                                  <label class="form-check-label" for="6">
                                                                      Seating and Wheelchair Assessment
                                                                  </label>
                                                              </div>
                                                              <div class="form-check">
                                                                  <input class="form-check-input" type="checkbox"  @click="OnclinicalAssesment('Domestic Assessment')"
                                                                      name="fah" id="7">
                                                                  <label class="form-check-label" for="7">
                                                                      Domestic Assessment
                                                                  </label>
                                                              </div>

                                                              <div class="form-check">
                                                                  <input class="form-check-input" type="checkbox"  @click="OnclinicalAssesment('Driving Assessment')"
                                                                      name="fah" id="7">
                                                                  <label class="form-check-label" for="7">
                                                                      Driving Assessment
                                                                  </label>
                                                              </div>
                                                          </td>

                                                          <td>
                                                              <div class="form-check">
                                                                  <input class="form-check-input" type="checkbox"  @click="OnclinicalAssesment('Hand Function And Upper Limb Assessment')"
                                                                      name="mode-Of-therapy" id="66">
                                                                  <label class="form-check-label" for="66">
                                                                      Hand Function And Upper Limb Assessment
                                                                  </label>
                                                              </div>

                                                              <div class="form-check">
                                                                  <input class="form-check-input" type="checkbox"  @click="OnclinicalAssesment('Work/home/school Assessment')"
                                                                      name="mode-Of-therapy" id="77">
                                                                  <label class="form-check-label" for="77">
                                                                      Work/home/school Assessment
                                                                  </label>
                                                              </div>

                                                              <div class="form-check">
                                                                  <input class="form-check-input" type="checkbox"  @click="OnclinicalAssesment('Sensory Motor Assessment')"
                                                                      name="mode-Of-therapy" id="8">
                                                                  <label class="form-check-label" for="8">
                                                                      Sensory Motor Assessment
                                                                  </label>
                                                              </div>
                                                              <div class="form-check">
                                                                  <input class="form-check-input" type="checkbox"  @click="OnclinicalAssesment('Pre School/school Skill Assessment')"
                                                                      name="mode-Of-therapy" id="9">
                                                                  <label class="form-check-label" for="9">
                                                                      Pre School/school Skill Assessment
                                                                  </label>
                                                              </div>
                                                              <div class="form-check">
                                                                  <input class="form-check-input" type="checkbox"  @click="OnclinicalAssesment('Play Leisure Assessment')"
                                                                      name="mode-Of-therapy" id="10">
                                                                  <label class="form-check-label" for="10">
                                                                      Play Leisure Assessment
                                                                  </label>
                                                              </div>

                                                              <div class="form-check">
                                                                  <input class="form-check-input" type="checkbox"  @click="OnclinicalAssesment('Work Assessment')"
                                                                      name="mode-Of-therapy" id="11">
                                                                  <label class="form-check-label" for="11">
                                                                      Work Assessment
                                                                  </label>
                                                              </div>

                                                              <div class="form-check">
                                                                  <input class="form-check-input" type="checkbox"  @click="OnclinicalAssesment('Others')"
                                                                      name="mode-Of-therapy" id="12"
                                                                      data-bs-toggle="collapse"
                                                                      data-bs-target="#Others-1">
                                                                  <label class="form-check-label" for="12">
                                                                      Others
                                                                  </label>
                                                              </div>

                                                              <div class="collapse" id="Others-1">
                                                                  <input type="text" class="form-control" name="" v-model="referral_clinical_assessment_other"
                                                                      placeholder="Please Specify">
                                                              </div>
                                                          </td>

                                                      </tr>
                                                       <tr v-if="pid">
                                                          <td>
                                                              <div class="form-check" v-for="(clinical,index) in clinicallist" :key="index">
                                                                  <input class="form-check-input" type="checkbox" checked
                                                                       id="1">
                                                                  <label class="form-check-label" for="1">
                                                                      {{clinical}}
                                                                  </label>
                                                              </div>
                                                          </td>

                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </td>
                                      </tr>

                                      <tr>
                                          <th></th>
                                          <td>
                                              <table class="sub-table">
                                                  <thead>
                                                      <tr>
                                                          <th colspan="2">Intervention: </th>
                                                      </tr>
                                                  </thead>
                                                  <tbody>
                                                      <tr v-if="!pid">
                                                          <td>
                                                              <div class="form-check">
                                                                  <input class="form-check-input" type="checkbox" @click="Onchangeintervention('Activity Of Daily Living Training')"
                                                                      name="" id="1.11">
                                                                  <label class="form-check-label" for="1.11">
                                                                      Activity Of Daily Living Training
                                                                  </label>
                                                              </div>

                                                              <div class="form-check">
                                                                  <input class="form-check-input" type="checkbox" @click="Onchangeintervention('AIDS Adaptation/Assistive Devices')"
                                                                      name="" id="1.11">
                                                                  <label class="form-check-label" for="1.11">
                                                                      AIDS Adaptation/Assistive Devices
                                                                  </label>
                                                              </div>

                                                              <div class="form-check">
                                                                  <input class="form-check-input" type="checkbox" @click="Onchangeintervention('Behavioural Therapy')"
                                                                      name="" id="1.12">
                                                                  <label class="form-check-label" for="1.12">
                                                                      Behavioural Therapy
                                                                  </label>
                                                              </div>

                                                              <div class="form-check">
                                                                  <input class="form-check-input" type="checkbox" @click="Onchangeintervention('Cognitive And Perceptual Training')"
                                                                      name="" id="1.13">
                                                                  <label class="form-check-label" for="1.13">
                                                                      Cognitive And Perceptual Training
                                                                  </label>
                                                              </div>
                                                              <div class="form-check">
                                                                  <input class="form-check-input" type="checkbox" @click="Onchangeintervention('Compression Therapy')"
                                                                      name="" id="1.14">
                                                                  <label class="form-check-label" for="1.14">
                                                                      Compression Therapy
                                                                  </label>
                                                              </div>

                                                               <div class="form-check">
                                                                  <input class="form-check-input" type="checkbox" @click="Onchangeintervention('Creative Therapy')"
                                                                      name="" id="1.14">
                                                                  <label class="form-check-label" for="1.14">
                                                                      Creative Therapy
                                                                  </label>
                                                              </div>

                                                              <div class="form-check">
                                                                  <input class="form-check-input" type="checkbox" @click="Onchangeintervention('Social Skill Training')"
                                                                      name="" id="1.15">
                                                                  <label class="form-check-label" for="1.15">
                                                                      Social Skill Training
                                                                  </label>
                                                              </div>
                                                              <div class="form-check">
                                                                  <input class="form-check-input" type="checkbox" @click="Onchangeintervention('Relaxation Therapy/Stress Management')"
                                                                      name="" id="1.16">
                                                                  <label class="form-check-label" for="1.16">
                                                                      Relaxation Therapy/Stress Management
                                                                  </label>
                                                              </div>
                                                              <div class="form-check">
                                                                  <input class="form-check-input" type="checkbox" @click="Onchangeintervention('Low Vision Rehabilitation')"
                                                                      name="" id="1.17">
                                                                  <label class="form-check-label" for="1.17">
                                                                      Low Vision Rehabilitation
                                                                  </label>
                                                              </div>

                                                              <div class="form-check">
                                                                  <input class="form-check-input" type="checkbox" @click="Onchangeintervention('Domestic Rehabilitation')"
                                                                      name="" id="1.17">
                                                                  <label class="form-check-label" for="1.17">
                                                                      Domestic Rehabilitation
                                                                  </label>
                                                              </div>
                                                          </td>

                                                          <td>
                                                              <div class="form-check">
                                                                  <input class="form-check-input" type="checkbox" @click="Onchangeintervention('Fine Motor/Hand Function Training')"
                                                                      name="fah" id="1.166">
                                                                  <label class="form-check-label" for="1.166">
                                                                      Fine Motor/Hand Function Training
                                                                  </label>
                                                              </div>

                                                              <div class="form-check">
                                                                  <input class="form-check-input" type="checkbox" @click="Onchangeintervention('Gross Motor/Functional Mobility')"
                                                                      name="fah" id="1.177">
                                                                  <label class="form-check-label" for="1.177">
                                                                      Gross Motor/Functional Mobility
                                                                  </label>
                                                              </div>

                                                              <div class="form-check">
                                                                  <input class="form-check-input" type="checkbox" @click="Onchangeintervention('Patient'+'s And Carer'+'s Education')"
                                                                      name="fah" id="1.18">
                                                                  <label class="form-check-label" for="1.18">
                                                                      Patient's And Carer's Education
                                                                  </label>
                                                              </div>
                                                              <div class="form-check">
                                                                  <input class="form-check-input" type="checkbox" @click="Onchangeintervention('Play And Leisure(Explanation And Training)')"
                                                                      name="fah" id="1.19">
                                                                  <label class="form-check-label" for="1.19">
                                                                      Play And Leisure(Explanation And Training)
                                                                  </label>
                                                              </div>
                                                              <div class="form-check">
                                                                  <input class="form-check-input" type="checkbox" @click="Onchangeintervention('Sensory Integration Training')"
                                                                      name="fah" id="1.110">
                                                                  <label class="form-check-label" for="1.110">
                                                                      Sensory Integration Training
                                                                  </label>
                                                              </div>

                                                              <div class="form-check">
                                                                  <input class="form-check-input" type="checkbox" @click="Onchangeintervention('Wheelchair Training')"
                                                                      name="fah" id="1.111">
                                                                  <label class="form-check-label" for="1.111">
                                                                      Wheelchair Training
                                                                  </label>
                                                              </div>

                                                              <div class="form-check">
                                                                  <input class="form-check-input" type="checkbox" @click="Onchangeintervention('Work Rehabilitation')"
                                                                      name="fah" id="1.111">
                                                                  <label class="form-check-label" for="1.111">
                                                                      Work Rehabilitation
                                                                  </label>
                                                              </div>

                                                              <div class="form-check">
                                                                  <input class="form-check-input" type="checkbox" @click="Onchangeintervention('Splint')"
                                                                      name="fah" id="1.111">
                                                                  <label class="form-check-label" for="1.111">
                                                                      Splint
                                                                  </label>
                                                              </div>

                                                              <div class="form-check">
                                                                  <input class="form-check-input" type="checkbox" @click="Onchangeintervention('Others')"
                                                                      name="fah" id="1.112"
                                                                      data-bs-toggle="collapse"
                                                                      data-bs-target="#Others-2">
                                                                  <label class="form-check-label" for="1.112">
                                                                      Others
                                                                  </label>
                                                              </div>

                                                              <div class="collapse" id="Others-2">
                                                                  <input type="text" class="form-control" name="" v-model="referral_clinical_intervention_other"
                                                                      placeholder="Please Specify">
                                                              </div>
                                                          </td>

                                                      </tr>
                                                       <tr v-if="pid">
                                                          <td>
                                                              <div class="form-check" v-for="(interven,index) in interventionlist" :key="index">
                                                                  <input class="form-check-input" type="checkbox" checked
                                                                      name="" id="1.11">
                                                                  <label class="form-check-label" for="1.11">
                                                                      {{interven}}
                                                                  </label>
                                                              </div>

                                                          </td>

                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </td>
                                      </tr>

                                      <tr>
                                          <th></th>
                                          <td>
                                              <table class="sub-table">
                                                  <thead>
                                                      <tr>
                                                          <th colspan="2">Promotive Program: </th>
                                                      </tr>
                                                  </thead>
                                                  <tbody>
                                                      <tr v-if="!pid">
                                                          <td>
                                                              <div class="form-check">
                                                                  <input class="form-check-input" type="checkbox" @click="Onchangepromativeprogram('Special Needs Children Program')"
                                                                      name="" id="1.21">
                                                                  <label class="form-check-label" for="1.21">
                                                                      Special Needs Children Program
                                                                  </label>
                                                              </div>

                                                              <div class="form-check">
                                                                  <input class="form-check-input" type="checkbox" @click="Onchangepromativeprogram('Mental Health Program')"
                                                                      name="" id="2.21">
                                                                  <label class="form-check-label" for="2.21">
                                                                      Mental Health Program
                                                                  </label>
                                                              </div>

                                                              <div class="form-check">
                                                                  <input class="form-check-input" type="checkbox" @click="Onchangepromativeprogram('Senior Citizen Program')"
                                                                      name="" id="3.21">
                                                                  <label class="form-check-label" for="3.21">
                                                                      Senior Citizen Program
                                                                  </label>
                                                              </div>
                                                              <div class="form-check">
                                                                  <input class="form-check-input" type="checkbox" @click="Onchangepromativeprogram('Community Program')"
                                                                      name="" id="4.21">
                                                                  <label class="form-check-label" for="4.21">
                                                                      Community Program
                                                                  </label>
                                                              </div>
                                                              <div class="form-check">
                                                                  <input class="form-check-input" type="checkbox" @click="Onchangepromativeprogram('Out Patient Program')"
                                                                      name="" id="5.21">
                                                                  <label class="form-check-label" for="5.21">
                                                                      Out Patient Program
                                                                  </label>
                                                              </div>
                                                              <div class="form-check">
                                                                  <input class="form-check-input" type="checkbox" @click="Onchangepromativeprogram('Teenagers And School Program')"
                                                                      name="" id="6.21">
                                                                  <label class="form-check-label" for="6.21">
                                                                      Teenagers And School Program
                                                                  </label>
                                                              </div>
                                                              <div class="form-check">
                                                                  <input class="form-check-input" type="checkbox" @click="Onchangepromativeprogram('Diabetes Program')"
                                                                      name="" id="7.21">
                                                                  <label class="form-check-label" for="7.21">
                                                                      Diabetes Program
                                                                  </label>
                                                              </div>
                                                              <div class="form-check">
                                                                  <input class="form-check-input" type="checkbox" @click="Onchangepromativeprogram('Hypertension Program')"
                                                                      name="" id="7.21">
                                                                  <label class="form-check-label" for="7.21">
                                                                      Hypertension Program
                                                                  </label>
                                                              </div>
                                                               <div class="form-check">
                                                                  <input class="form-check-input" type="checkbox" @click="Onchangepromativeprogram('Antenatal/Mother And Child Program')"
                                                                      name="" id="7.21">
                                                                  <label class="form-check-label" for="7.21">
                                                                      Antenatal/Mother And Child Program
                                                                  </label>
                                                              </div>
                                                              <div class="form-check">
                                                                  <input class="form-check-input" type="checkbox" @click="Onchangepromativeprogram('Healthy Lifestyle Program')"
                                                                      name="" id="7.21">
                                                                  <label class="form-check-label" for="7.21">
                                                                      Healthy Lifestyle Program
                                                                  </label>
                                                              </div>
                                                          </td>
                                                      </tr>
                                                       <tr v-if="pid">
                                                          <td>
                                                              <div class="form-check" v-for="(promo,index) in promotivelist" :key="index">
                                                                  <input class="form-check-input" type="checkbox" checked
                                                                      name="" id="1.21">
                                                                  <label class="form-check-label" for="1.21">
                                                                      {{promo}}
                                                                  </label>
                                                              </div>

                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </td>
                                      </tr>

                                      <tr>
                                          <th>Referral Name: </th>
                                          <td>
                                              <input type="text" class="form-control" v-model="referral_name">
                                          </td>
                                      </tr>

                                      <tr>
                                          <th>Designation: </th>
                                          <td>
                                              <input type="text" class="form-control" v-model="referral_designation">
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>




                              <div
                class="accordion form-accordion mt-3"
                id="accordionExample"
              >
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      OCCASION OF SERVICES
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <div class="row mb-3">
                        <label class="col-sm-4 col-form-label"
                          >Location Of Services</label
                        >
                        <div class="col-sm-8">
                          <select
                            class="form-select"
                            v-model="location_services"
                          >
                            <option value="0">
                              Select location of services
                            </option>
                           <option
            v-for="loc in locationlist"
            v-bind:key="loc.id"
            v-bind:value="loc.id"
          >
            {{ loc.section_value }}
          </option>
                          </select>
                        </div>
                      </div>
                      <!-- close-row -->
                      <div class="row mb-3">
                        <label class="col-sm-4 col-form-label"
                          >Type Of Diagnosis</label
                        >
                        <div class="col-sm-8">
                          <select class="form-select" v-model="type_diagnosis_id">
                              <option value="0">Select Diagnosis</option>
                              <option
            v-for="catcode in diagonisislist"
            v-bind:key="catcode.id"
            v-bind:value="catcode.id"
          >
          {{ catcode.icd_code }} {{catcode.icd_name}}
          </option>
                            </select>
                        </div>
                      </div>
                      <!-- close-row -->
                      <div class="row mb-3">
                        <label class="col-sm-4 col-form-label"
                          >Category Of Services
                        </label>
                        <div class="col-sm-8">
                          <div class="form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="inlineRadio1"
                              value="assisstance"
                              v-model="category_services"
                            />
                            <label class="form-check-label" for="inlineRadio1"
                              >Assisstance / Supervision</label
                            >
                          </div>
                          <div class="form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="inlineRadio2"
                              value="clinical-work"
                              v-model="category_services"
                            />
                            <label class="form-check-label" for="inlineRadio2"
                              >Clinical Work / Procedure
                            </label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="inlineRadio3"
                              value="external"
                              v-model="category_services"
                            />
                            <label class="form-check-label" for="inlineRadio3"
                              >External</label
                            >
                          </div>
                        </div>
                      </div>
                      <!-- close-row -->
                      <!-- hide-div -->
                      <div class="assisstance services hide mb-3">
                        <div class="row">
                          <div class="col-md-6 mb-3">
                            <label class="form-label">Services</label>
                            <select class="form-select" v-model="services_id">
                               <option value="0">Select Service</option>
                    <option
                      v-for="slt in assistancelist"
                      v-bind:key="slt.id"
                      v-bind:value="slt.id"
                    >
                      {{ slt.section_value }}
                    </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <!-- 01 -->
                      <div class="clinical-work services hide mb-3">
                        <div class="row">
                          <div class="col-md-6 mb-3">
                            <label class="form-label">ICD 9 CODE</label>
                            <select class="form-select" v-model="code_id"  @change="onCategorycodebind($event)">
                              <option value="0">Select code</option>
                              <option v-for="type in codelist"  v-bind:key="type.id" v-bind:value="type.id">
           {{ type.icd_category_code }} {{type.icd_category_name}}
          </option>
                            </select>
                          </div>
                          <div class="col-md-6 mb-3">
                            <label class="form-label">ICD 9 SUB CODE</label>
                            <select class="form-select" v-model="sub_code_id">
                              <option value="0">Select sub code</option>
                              <option
            v-for="catcode in icdcatcodelist"
            v-bind:key="catcode.id"
            v-bind:value="catcode.id"
          >
             {{ catcode.icd_code }}
{{catcode.icd_name}}
          </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <!-- 02 -->
                      <div class="external services hide mb-3">
                        <div class="row">
                          <div class="col-md-6 mb-3">
                            <label class="form-label">Services</label>
                            <select class="form-select" v-model="serviceid">
                              <option value="0">Select Service</option>
                    <option
                      v-for="slt in externallist"
                      v-bind:key="slt.id"
                      v-bind:value="slt.id"
                    >
                      {{ slt.section_value }}
                    </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <!-- 03 -->
                      <!-- hide-div -->
                      <div class="row">
                        <div class="col-md-6 mb-3">
                          <label class="form-label"
                            >Complexity Of Service</label
                          >
                          <select
                            class="form-select"
                            v-model="complexity_services"
                          >
                            <option value="0">
                              Select Complexity Of Service
                            </option>
                    <option
                      v-for="cm in comlexcitylist"
                      v-bind:key="cm.id"
                      v-bind:value="cm.id"
                    >
                      {{ cm.section_value }}
                    </option>
                          </select>
                        </div>
                        <div class="col-md-6 mb-3">
                          <label class="form-label">Outcome</label>
                          <select class="form-select" v-model="outcome">
                            <option value="0">Select outcome</option>
                    <option
                      v-for="out in outcomelist"
                      v-bind:key="out.id"
                      v-bind:value="out.id"
                    >
                      {{ out.section_value }}
                    </option>
                          </select>
                        </div>
                      </div>
                      <!-- close-row -->
                    </div>
                  </div>
                </div>
                <!--  -->
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      MEDICATION
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <div class="col-md-12 mb-3">
                        <label class="form-label">Medication</label>
                        <textarea
                          class="form-control textarea"
                          placeholder="Please Type Prescription Here"
                          v-model="medication_des"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <!--  -->
              </div>
                              <p v-if="errorList.length">
                              <ul>
                                  <li style="color:red" v-for='err in errorList' :key='err'>
                                      {{ err }}
                                  </li>
                              </ul>
                              </p>
                              <div class="d-flex" v-if="!pid">
                                <a
                    @click="GoBack"
                    class="btn btn-primary btn-text"
                    ><i class="fa fa-arrow-alt-to-left"></i> Back</a
                  >
              <div class="ml-auto btn-boxs">
                <button type="submit" class="btn btn-green btn-text" @click="OnPrint">
                  <i class="fa fa-download"></i> Download
                </button>
                <button type="submit" class="btn btn-success btn-text" @click="Onoctreferalform">
                  <i class="fa fa-paper-plane"></i> Save
                </button>
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
name: "occt-referral-form",
head: {
  script: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.min.js",
      async: true,
      crossorigin: "anonymous",
    },
  ],
},
beforeMount() {
  this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
  $(document).ready(function () {
    $('.form-accordion input[type="radio"]').click(function () {
      var inputValue = $(this).attr("value");
      var targetBox = $("." + inputValue);
      $(".services").not(targetBox).hide();
      $(targetBox).show();
    });
  });
  let urlParams = new URLSearchParams(window.location.search);
  this.Id = urlParams.get("id");
  if (this.Id) {
    this.GetList();
    this.GetPatientdetails();
  }

  let urlParams1 = new URLSearchParams(window.location.search);
  this.pid = urlParams1.get("pid");
  this.type = urlParams1.get("type");
  if (this.pid) {
    this.getdetails();
  }
},
data() {
  return {
    userdetails: null,
    patientdetails: null,
    errorList: [],
    servicelist: [],
    outcomelist: [],
    comlexcitylist: [],
    codelist: [],
    icdcatcodelist: [],
    diagonisislist: [],
    locationlist: [],
    Id: 0,
    referral_location: "",
    date: "",
    diagnosis_id: 0,
    referral_clinical_assessment: "",
    referral_clinical_assessment_other: "",
    referral_clinical_intervention: "",
    referral_clinical_intervention_other: "",
    referral_clinical_promotive_program: "",
    referral_name: "",
    referral_designation: "",
    location_services: 0,
    type_diagnosis_id: 0,
    category_services: "",
    code_id: 0,
    sub_code_id: 0,
    complexity_services: 0,
    outcome: 0,
    medication_des: "",
    patient_mrn_id: "",
    services_id: 0,
    serviceid: 0,
    validate: true,
    assistancelist: [],
    externallist: [],
    pid: 0,
    type: "",
    clinicallist: [],
    interventionlist: [],
    promotivelist: [],
  };
},
methods: {
  async Onoctreferalform() {
    this.validate = true;
    this.errorList = [];
    try {
      if (!this.referral_location) {
        this.errorList.push("Referral Location is required");
      }
      if (!this.date) {
        this.errorList.push("Referral Date is required");
      }
      // if (!this.diagnosis_id) {
      //   this.errorList.push("Diagnosis is required");
      // }
      if (!this.referral_clinical_assessment) {
        this.errorList.push("CLINICAL ASSESSMENT is required");
      }
      if (!this.referral_clinical_intervention) {
        this.errorList.push("INTERVENTION is required");
      }
      if (!this.referral_clinical_promotive_program) {
        this.errorList.push("PROMOTIVE PROGRAM is required");
      }
      if (!this.referral_name) {
        this.errorList.push("Referral Name is required");
      }
      if (!this.referral_designation) {
        this.errorList.push("Designation is required");
      }
      if (!this.location_services) {
        this.errorList.push("Location Of Services is required");
      }
      if (!this.type_diagnosis_id) {
        this.errorList.push("Type Of Diagnosis is required");
      }
      if (!this.category_services) {
        this.errorList.push("Category Of Services is required");
      }
      if (!this.complexity_services) {
        this.errorList.push("Complexity Of Service is required");
      }
      if (this.category_services) {
        if (this.category_services == "assisstance") {
          if (!this.services_id) {
            this.errorList.push("Service is required");
            this.validate = false;
          }
        } else if (this.category_services == "clinical-work") {
          if (!this.code_id) {
            this.errorList.push("ICD 9 CODE is required");
            this.validate = false;
          }
          if (!this.sub_code_id) {
            this.errorList.push("ICD 9 SUB CODE is required");
            this.validate = false;
          }
        } else {
          if (!this.serviceid) {
            this.errorList.push("Services is required");
            this.validate = false;
          } else {
            this.services_id = this.serviceid;
          }
        }
      }
      if (!this.outcome) {
        this.errorList.push("Outcome is required");
      }
      // if (!this.medication_des) {
      //   this.errorList.push("Medication is required");
      // }
      if (
        this.referral_location &&
        this.date &&
        // this.diagnosis_id &&
        this.referral_clinical_assessment &&
        this.referral_clinical_intervention &&
        this.referral_clinical_promotive_program &&
        this.referral_name &&
        this.referral_designation &&
        this.location_services &&
        this.type_diagnosis_id &&
        this.category_services &&
        this.complexity_services &&
        this.outcome &&
        // this.medication_des &&
        this.validate
      ) {
        this.loader = true;
        const headers = {
          Authorization: "Bearer " + this.userdetails.access_token,
          Accept: "application/json",
          "Content-Type": "application/json",
        };
        const response = await this.$axios.post(
          "occt-referral/add",
          {
            added_by: this.userdetails.user.id.toString(),
            patient_mrn_id: this.Id,
            referral_location: this.referral_location,
            date: this.date,
            diagnosis_id: this.type_diagnosis_id, //diagnosis_id
            referral_clinical_assessment: this.referral_clinical_assessment,
            referral_clinical_assessment_other:
              this.referral_clinical_assessment_other,
            referral_clinical_intervention:
              this.referral_clinical_intervention,
            referral_clinical_intervention_other:
              this.referral_clinical_intervention_other,
            referral_clinical_promotive_program:
              this.referral_clinical_promotive_program,
            referral_name: this.referral_name,
            referral_designation: this.referral_designation,
            location_services: this.location_services,
            services_id: this.services_id,
            code_id: this.code_id,
            sub_code_id: this.sub_code_id,
            type_diagnosis_id: this.type_diagnosis_id,
            category_services: this.category_services,
            complexity_services: this.complexity_services,
            outcome: this.outcome,
            medication_des: this.medication_des,
          },
          { headers }
        );
        console.log("response", response.data);
        if (response.data.code == 200) {
          this.loader = false;
          // this.resetmodel();
          this.$swal.fire('created successfully', '', 'success');
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
  },
  async GetList() {
    const headers = {
      Authorization: "Bearer " + this.userdetails.access_token,
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    const response = await this.$axios.get(
      "general-setting/list?section=" + "complexity-of-service",
      { headers }
    );
    if (response.data.code == 200 || response.data.code == "200") {
      this.comlexcitylist = response.data.list;
    } else {
      this.comlexcitylist = [];
    }
    const response1 = await this.$axios.get("service/list", { headers });
    if (response1.data.code == 200 || response1.data.code == "200") {
      this.servicelist = response1.data.list;
    } else {
      this.servicelist = [];
    }
    const response2 = await this.$axios.get(
      "general-setting/list?section=" + "outcome",
      { headers }
    );
    if (response2.data.code == 200 || response2.data.code == "200") {
      this.outcomelist = response2.data.list;
    } else {
      this.outcomelist = [];
    }
    const response3 = await this.$axios.get("diagnosis/getIcd9codeList", {
      headers,
    });
    if (response3.data.code == 200 || response3.data.code == "200") {
      this.codelist = response3.data.list;
    } else {
      this.codelist = [];
    }
    const response4 = await this.$axios.get("diagnosis/getIcd10codeList", {
      headers,
    });
    if (response4.data.code == 200 || response4.data.code == "200") {
      this.diagonisislist = response4.data.list;
    } else {
      this.diagonisislist = [];
    }
    const response5 = await this.$axios.get(
      "general-setting/list?section=" + "location-of-services",
      {
        headers,
      }
    );
    if (response5.data.code == 200 || response5.data.code == "200") {
      this.locationlist = response5.data.list;
    } else {
      this.locationlist = [];
    }
    const respons = await this.$axios.get(
      "general-setting/list?section=" + "assistance-or-supervision",
      { headers }
    );
    if (respons.data.code == 200 || respons.data.code == "200") {
      this.assistancelist = respons.data.list;
    } else {
      this.assistancelist = [];
    }
    const respon = await this.$axios.get(
      "general-setting/list?section=" + "external",
      { headers }
    );
    if (respon.data.code == 200 || respon.data.code == "200") {
      this.externallist = respon.data.list;
    } else {
      this.externallist = [];
    }
  },
  async onCategorycodebind(event) {
    const headers = {
      Authorization: "Bearer " + this.userdetails.access_token,
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    console.log("my id", event);
    const response = await this.$axios.post(
      "diagnosis/getIcd9subcodeList",
      { icd_category_code: event.target.value },
      { headers }
    );
    if (response.data.code == 200 || response.data.code == "200") {
      this.icdcatcodelist = response.data.list;
    } else {
      this.icdcatcodelist = [];
    }
  },
  resetmodel() {
    this.referral_location = "";
    this.date = "";
    this.diagnosis_id = 0;
    this.referral_clinical_assessment = "";
    this.referral_clinical_assessment_other = "";
    this.referral_clinical_intervention = "";
    this.referral_clinical_intervention_other = "";
    this.referral_clinical_promotive_program = "";
    this.referral_name = "";
    this.referral_designation = "";
    this.location_services = 0;
    this.type_diagnosis_id = 0;
    this.category_services = "";
    this.code_id = 0;
    this.sub_code_id = 0;
    this.complexity_services = 0;
    this.outcome = 0;
    this.medication_des = "";
    this.services_id = 0;
  },
  OnclinicalAssesment(val) {
    console.log("my val", val);
    if (this.referral_clinical_assessment) {
      this.referral_clinical_assessment =
        this.referral_clinical_assessment + "," + val;
    } else {
      this.referral_clinical_assessment = val;
    }
  },
  Onchangeintervention(val) {
    if (this.referral_clinical_intervention) {
      this.referral_clinical_intervention =
        this.referral_clinical_intervention + "," + val;
    } else {
      this.referral_clinical_intervention = val;
    }
  },
  Onchangepromativeprogram(val) {
    if (this.referral_clinical_promotive_program) {
      this.referral_clinical_promotive_program =
        this.referral_clinical_promotive_program + "," + val;
    } else {
      this.referral_clinical_promotive_program = val;
    }
  },
  async GetPatientdetails() {
    const headers = {
      Authorization: "Bearer " + this.userdetails.access_token,
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    const response = await this.$axios.post(
      "patient-registration/getPatientRegistrationById",
      {
        id: this.Id,
      },
      { headers }
    );
    if (response.data.code == 200) {
      this.patientdetails = response.data.list[0];
    } else {
      this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + this.error,
                  footer: ''
                });
    }
  },
  async getdetails() {
    const headers = {
      Authorization: "Bearer " + this.userdetails.access_token,
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    const response = await this.$axios.post(
      "/patient-appointment-details/fetchViewHistoryListDetails",
      {
        id: this.pid,
        type: "OcctRefferalForm",
      },
      { headers }
    );
    if (response.data.code == 200) {
      // window.alert(response.data.Data[0].patient_mrn_id);

      this.Id = response.data.Data[0].patient_mrn_id;
      this.referral_location = response.data.Data[0].referral_location;
      this.date = response.data.Data[0].date;
      this.diagnosis_id = response.data.Data[0].diagnosis_id;
      this.referral_clinical_assessment =
        response.data.Data[0].referral_clinical_assessment;
      this.clinicallist = this.referral_clinical_assessment.split(",");
      this.referral_clinical_assessment_other =
        response.data.Data[0].referral_clinical_assessment_other;
      this.referral_clinical_intervention =
        response.data.Data[0].referral_clinical_intervention;
      this.interventionlist = this.referral_clinical_intervention.split(",");

      this.referral_clinical_intervention_other =
        response.data.Data[0].referral_clinical_intervention_other;
      this.referral_clinical_promotive_program =
        response.data.Data[0].referral_clinical_promotive_program;
      this.promotivelist =
        this.referral_clinical_promotive_program.split(",");

      this.referral_name = response.data.Data[0].referral_name;
      this.referral_designation = response.data.Data[0].referral_designation;
      this.location_services = response.data.Data[0].location_services;
      this.services_id = response.data.Data[0].services_id;
      this.code_id = response.data.Data[0].code_id;
      this.sub_code_id = response.data.Data[0].sub_code_id;
      this.type_diagnosis_id = response.data.Data[0].type_diagnosis_id;
      this.category_services = response.data.Data[0].category_services;
      this.complexity_services = response.data.Data[0].complexity_services;
      this.outcome = response.data.Data[0].outcome;
      this.medication_des = response.data.Data[0].medication_des;

      this.GetList();
      this.GetPatientdetails();
      const response2 = await this.$axios.post(
        "diagnosis/getIcd9subcodeList",
        { icd_category_code: this.code_id },
        { headers }
      );
      if (response2.data.code == 200 || response2.data.code == "200") {
        this.icdcatcodelist = response2.data.list;
      } else {
        this.icdcatcodelist = [];
      }
    } else {
      this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + this.error,
                  footer: ''
                });
    }
  },
  OnPrint() {
    $('.btn-boxs').hide();
    $('.btn-boxs').click(function(){
      $('.form-accordion .collapse').show();
    });
  setTimeout(() => {
    var pdf = new jsPDF("p", "px", [800, 1800]);
    var options = {
      format: "JPEG",
      pagesplit: true,
      background: "#FFF",
    };
    pdf.addHTML($("#reslt"), options, function () {
      pdf.save("Occt_Referral.pdf");
      $('.btn-boxs').show();
    });
  }, 1000);
  },
  GoBack(){
    this.$router.push({
            path: "/modules/Intervention/patient-summary",
            query: { id: this.Id },
          });
  }
},
};
</script>
<style scoped>
.hide {
display: none;
}
</style>
