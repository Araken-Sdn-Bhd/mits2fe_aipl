<template>
  <div id="layoutSidenav">
    <CommonSidebar  />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>CPS Referral Form</h1>
          </div>

          <div class="card mb-4">
            <div class="card-body">
              <table class="notes" v-if="details">
                <thead>
                  <tr>
                    <th colspan="2">Patient Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>MRN:</th>
                    <td>{{ details.patient_mrn }}</td>
                  </tr>
                  <tr>
                    <th>Patient Name:</th>
                    <td>{{ details.patient_name }}</td>
                  </tr>
                  <tr>
                    <th>NRIC NO:</th>
                    <td>{{ details.nric }}</td>
                  </tr>
                  <tr>
                    <th>Age:</th>
                    <td>{{ details.age }}</td>
                  </tr>
                  <tr>
                    <th>Contact No:</th>
                    <td>{{ details.contact_no }}</td>
                  </tr>
                  <tr>
                    <th>Gender:</th>
                    <td>{{ details.gender }}</td>
                  </tr>
                  <tr>
                    <th>DOB:</th>
                    <td>{{ details.birth_date }}</td>
                  </tr>
                </tbody>
              </table>

              <table class="notes">
                <thead>
                  <tr>
                    <th colspan="2">Treatment Needs</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="!pid">
                    <th>Individual:</th>
                    <td>
                      <div class="form-check" >
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="frequent-relapse"
                          @change="checkIndividual('Frequent Relapse', $event)"
                        />
                        <label class="form-check-label" for="frequent-relapse">
                          Frequent Relapse
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="risk"
                          @change="checkIndividual('Risk (V/SU/SX/N)', $event)"
                        />
                        <label class="form-check-label" for="risk">
                          Risk (V/SU/SX/N)
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="functionality"
                          @change="checkIndividual('Functionality', $event)"
                        />
                        <label class="form-check-label" for="functionality">
                          Functionality
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr v-if="!pid">
                    <th>Medication:</th>
                    <td>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="adherence"
                          @change="checkMedication('Adherence', $event)"
                        />
                        <label class="form-check-label" for="adherence">
                          Adherence
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="side-effects"
                          @change="checkMedication('Side Effects', $event)"
                        />
                        <label class="form-check-label" for="side-effects">
                          Side Effects
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="depot-monitoring"
                          @change="checkMedication('Depot Monitoring', $event)"
                        />
                        <label class="form-check-label" for="depot-monitoring ">
                          Depot Monitoring
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr v-if="!pid">
                    <th>Support:</th>
                    <td>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="identification" @change="checkSupport('Identification',$event)"
                        />
                        <label class="form-check-label" for="identification">
                          Identification
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="practice" @change="checkSupport('Psychoeducation',$event)"
                        />
                        <label class="form-check-label" for="practice">
                          Psychoeducation
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="psychoeducation" @change="checkSupport('Practise',$event)"
                        />
                        <label class="form-check-label" for="psychoeducation">
                          Practise
                        </label>
                      </div>
                    </td>
                  </tr>

                    <tr v-if="pid">
                    <th>Individual:</th>
                    <td >
                      <div class="form-check" v-for="(indi,index) in indivisuallist" :key="index">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="frequent-relapse"
                          checked
                        />
                        <label class="form-check-label" for="frequent-relapse">
                          {{indi}}
                        </label>
                      </div>

                    </td>
                  </tr>
                  <tr v-if="pid">
                    <th>Medication:</th>
                    <td >
                      <div class="form-check" v-for="(medi,index) in medicationlist" :key="index">
                        <input
                          class="form-check-input"
                          type="checkbox" checked
                          value=""
                          id="adherence"

                        />
                        <label class="form-check-label" for="adherence">
                          {{medi}}
                        </label>
                      </div>

                    </td>
                  </tr>
                  <tr v-if="pid">
                    <th>Support:</th>
                    <td >
                      <div class="form-check" v-for="(supp,index) in supportlist" :key="index">
                        <input
                          class="form-check-input"
                          type="checkbox" checked
                          value=""
                          id="identification"
                        />
                        <label class="form-check-label" for="identification">
                          {{supp}}
                        </label>
                      </div>

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
                              v-model="location_services_id"
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
              {{ catcode.icd_category_code }} {{catcode.icd_category_name}}
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
                              v-model="complexity_services_id"
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
                            <select class="form-select" v-model="outcome_id">
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

              <table class="notes">
                <tbody>
                  <tr>
                    <th>Referrer Name:</th>
                    <td>
                      <input
                        type="text"
                        class="form-control"
                        name=""
                        v-model="referalname"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Designation:</th>
                    <td>
                      <input
                        type="text"
                        class="form-control"
                        name=""
                        v-model="designation"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
<p v-if="errorList.length">
                          <ul>
                           <li style="color:red"  v-for='err in errorList' :key='err' >
                           {{ err }}
                             </li>
                        </ul>
                       </p>

            </div>
          </div>
        </div>

          <div class="container-fluid px-4 reslt" style="display:none;">
          <div class="page-title">
            <h1>CPS Referral Form</h1>
          </div>

          <div class="card mb-4">
            <div class="card-body">
              <table class="notes" v-if="details">
                <thead>
                  <tr>
                    <th colspan="2">Patient Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>MRN:</th>
                    <td>{{ details.patient_mrn }}</td>
                  </tr>
                  <tr>
                    <th>Patient Name:</th>
                    <td>{{ details.patient_name }}</td>
                  </tr>
                  <tr>
                    <th>NRIC NO:</th>
                    <td>{{ details.nric }}</td>
                  </tr>
                  <tr>
                    <th>Age:</th>
                    <td>{{ details.age }}</td>
                  </tr>
                  <tr>
                    <th>Contact No:</th>
                    <td>{{ details.contact_no }}</td>
                  </tr>
                  <tr>
                    <th>Gender:</th>
                    <td>{{ details.gender }}</td>
                  </tr>
                  <tr>
                    <th>DOB:</th>
                    <td>{{ details.birth_date }}</td>
                  </tr>
                </tbody>
              </table>

              <table class="notes">
                <thead>
                  <tr>
                    <th colspan="2">Treatment Needs</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="!pid">
                    <th>Individual:</th>
                    <td>
                      {{ this.selectedindividaul.join(', ').toString() }}
                    </td>
                  </tr>
                  <tr v-if="!pid">
                    <th>Medication:</th>
                    <td>
                      {{ this.selectedmedication.join(', ').toString() }}
                    </td>
                  </tr>
                  <tr v-if="!pid">
                    <th>Support:</th>
                    <td>
                      {{ this.selectedsupport.join(', ').toString() }}
                    </td>
                  </tr>
                </tbody>
              </table>

           <div class="card mb-4">
                  <div class="card-body">
                    <table class="notes" v-if="details">
                    <thead>
                      <tr>
                        <th colspan="2">OCCASION OF SERVICES</th>
                      </tr>
                    </thead>
                    </table>

                    <div
                      id="collapseOne"
                      class="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <div class="row mb-3">
                          <label class="col-sm-4 col-form-label"
                            >Location Of Services:</label
                          >
                          <div class="col-sm-8">
                            <select
                              class="form-select"
                              v-model="location_services_id"
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
                                  {{ catcode.icd_category_code }} {{catcode.icd_category_name}}
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
                              <label class="form-check-label" v-if="this.category_services == 'assisstance'"
                                >Assisstance / Supervision</label>
                                <label class="form-check-label" v-if="this.category_services == 'clinical-work'"
                                >Clinical Work / Procedure
                              </label>
                              <label class="form-check-label" v-if="this.category_services == 'external'">
                                External</label>
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
                              v-model="complexity_services_id"
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
                            <select class="form-select" v-model="outcome_id">
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
                  <div class="card mb-4">
                  <div class="card-body">
                    <table class="notes">
                      <thead>
                        <tr>
                          <th colspan="2">MEDICATION</th>
                        </tr>
                      </thead>
                      <tbody>

                      </tbody>
                    </table>
                    <div
                    >
                      <div class="">
                        <div class="col-md-12 mb-3">
                         <p>
                          {{ this.medication_des }}
                         </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                  <!--  -->
                </div>

              <table class="notes">
                <tbody>
                  <tr>
                    <th>Referrer Name:</th>
                    <td>
                      {{this.referalname}}
                    </td>
                  </tr>
                  <tr>
                    <th>Designation:</th>
                    <td>
                      {{this.designation}}
                    </td>
                  </tr>
                </tbody>
              </table>
<p v-if="errorList.length">
                          <ul>
                           <li style="color:red"  v-for='err in errorList' :key='err' >
                           {{ err }}
                             </li>
                        </ul>
                       </p>

            </div>
          </div>
        </div>
          <div class="d-flex" v-if="!pid">
                <div class="ml-auto">
                  <button type="submit" class="btn btn-green btn-text" @click="OnPrint">
                    <i class="far fa-download"></i> Download
                  </button>
                  <button type="submit" class="btn btn-success btn-text" @click="OnSubmit">
                    <i class="far fa-paper-plane"></i> Submit
                  </button>
                </div>
              </div>
      </main>
      <footer>
        <p>© MENTARI MALAYSIA MOH</p>
      </footer>
    </div>
  </div>
</template>
<script>
import CommonHeader from "../../../components/CommonHeader.vue";
import CommonSidebar from "../../../components/CommonSidebar.vue";
export default {
  components: { CommonSidebar, CommonHeader },
  name: "cps-referral-form",
  data() {
    return {
      userdetails: null,
      Id: 0,
      errorList: [],
      servicelist: [],
      outcomelist: [],
      comlexcitylist: [],
      codelist: [],
      icdcatcodelist: [],
      selectedindividaul: [],
      selectedmedication: [],
      selectedsupport: [],
      diagonisislist: [],
      locationlist: [],
      details: {},
      Individual: "",
      Medication: "",
      Support: "",
      location_services_id: 0,
      type_diagnosis_id: 0,
      category_services: 0,
      code_id: 0,
      sub_code_id: 0,
      complexity_services_id: 0,
      outcome_id: 0,
      medication_des: "",
      patient_mrn_id: "",
      services_id: 0,
      serviceid: 0,
      referalname: "",
      designation: "",
      validate: true,
      assistancelist: [],
      externallist: [],
      indivisuallist: [],
      medicationlist: [],
      supportlist: [],
      pid: 0,
      type: "",
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    let urlParams = new URLSearchParams(window.location.search);
    this.Id = urlParams.get("id");
    if (this.Id) {
      this.GetPatientdetails();
      this.GetList();
    }
    let urlParams1 = new URLSearchParams(window.location.search);
    this.pid = urlParams1.get("pid");
    this.type = urlParams1.get("type");
    if (this.pid) {
      this.getdetails();
    }
    $(document).ready(function () {
      $('.form-accordion input[type="radio"]').click(function () {
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $(".services").not(targetBox).hide();
        $(targetBox).show();
      });
    });
  },
  methods: {
    async GetPatientdetails() {
      this.loader = true;
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "patient/detail",
        {
          patient_id: this.Id,
        },
        { headers }
      );
      console.log("my log", response.data);
      if (response.data.code == 200) {
        this.loader = false;
        this.details = response.data.details;
        console.log("my profile", this.details);
      } else {
        this.loader = false;
        window.alert("Something went wrong");
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
    OnPrint() {
      var newstr = document.getElementsByClassName("reslt")[0].innerHTML;
      document.body.innerHTML = newstr;
      window.print();
      // Reload the page to refresh the data
      window.location.reload();
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
    async checkIndividual(value, event) {
      if (event.target.checked) {
        this.selectedindividaul.push(value);
      } else {
        if (this.selectedindividaul.indexOf(value) != -1)
          this.selectedindividaul.splice(
            this.selectedindividaul.indexOf(value),
            1
          );
      }
    },
    async checkMedication(value, event) {
      if (event.target.checked) {
        this.selectedmedication.push(value);
      } else {
        if (this.selectedmedication.indexOf(value) != -1)
          this.selectedmedication.splice(
            this.selectedmedication.indexOf(value),
            1
          );
      }
    },
    async checkSupport(value, event) {
      if (event.target.checked) {
        this.selectedsupport.push(value);
      } else {
        if (this.selectedsupport.indexOf(value) != -1)
          this.selectedsupport.splice(this.selectedsupport.indexOf(value), 1);
      }
    },
    async OnSubmit() {
      this.errorList = [];
      this.validate = true;
      try {
        if (!this.selectedindividaul.length) {
          this.errorList.push("Individual is required");
          this.validate = false;
        }
        if (!this.selectedmedication.length) {
          this.errorList.push("Medication is required");
          this.validate = false;
        }
        if (!this.selectedsupport.length) {
          this.errorList.push("Support is required");
          this.validate = false;
        }
        if (!this.location_services_id) {
          this.errorList.push("Location Of Services is required");
        }
        if (!this.type_diagnosis_id) {
          this.errorList.push("Type Of Diagnosis is required");
        }
        if (!this.category_services) {
          this.errorList.push("Category Of Services is required");
        }
        if (!this.complexity_services_id) {
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
        if (!this.outcome_id) {
          this.errorList.push("Outcome is required");
        }
        // if (!this.medication_des) {
        //   this.errorList.push("Medication is required");
        // }
        if (!this.referalname) {
          this.errorList.push("Referrer Name is required");
        }
        if (!this.designation) {
          this.errorList.push("Designation is required");
        }
        if (
          this.location_services_id &&
          this.type_diagnosis_id &&
          this.category_services &&
          this.complexity_services_id &&
          this.outcome_id &&
          // this.medication_des &&
          this.validate &&
          this.referalname &&
          this.designation
        ) {
          this.selectedindividaul.forEach((value, index) => {
            if (!this.Individual) {
              this.Individual = value;
            } else {
              this.Individual = this.Individual + "," + value;
            }
          });
          this.selectedmedication.forEach((value, index) => {
            if (!this.Medication) {
              this.Medication = value;
            } else {
              this.Medication = this.Medication + "," + value;
            }
          });
          this.selectedsupport.forEach((value, index) => {
            if (!this.Support) {
              this.Support = value;
            } else {
              this.Support = this.Support + "," + value;
            }
          });
          this.loader = true;
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          const response = await this.$axios.post(
            "intervention/cps-form",
            {
              added_by: this.userdetails.user.id,
              patient_id: this.Id,
              treatment_needs_individual: this.Individual,
              treatment_needs_medication: this.Medication,
              treatment_needs_support: this.Support,
              location_of_service: this.location_services_id,
              type_of_diagnosis: this.type_diagnosis_id,
              category_of_services: this.category_services,
              services: this.services_id,
              complexity_of_services: this.complexity_services_id,
              outcome: this.outcome_id,
              icd_9_code: this.code_id,
              icd_9_subcode: this.sub_code_id,
              medication_des: this.medication_des,
              medication_referrer_name: this.referalname,
              medication_referrer_designation: this.designation,
            },
            { headers }
          );
          console.log("response", response.data);
          if (response.data.code == 200) {
            this.loader = false;
            this.$nextTick(() => {
              $("#insertpopup").modal("show");
            });
          } else {
            this.loader = false;
            this.$nextTick(() => {
              $("#errorpopup").modal("show");
            });
          }
        }
      } catch (e) {}
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
          type: "CpsRefferalForm",
        },
        { headers }
      );
      if (response.data.code == 200) {
        // window.alert(response.data.Data[0].patient_mrn_id);

        this.Id = response.data.Data[0].patient_id;
        this.Individual = response.data.Data[0].treatment_needs_individual;
        this.indivisuallist = this.Individual.split(",");
        this.Medication = response.data.Data[0].treatment_needs_medication;
        this.medicationlist = this.Medication.split(",");
        this.Support = response.data.Data[0].treatment_needs_support;
        this.supportlist = this.Support.split(",");
        this.location_service_id = response.data.Data[0].location_of_service;
        this.type_diagnosis_id = response.data.Data[0].type_of_diagnosis;
        this.category_services = response.data.Data[0].category_of_services;
        this.services_id = response.data.Data[0].services;
        this.complexity_services_id =
          response.data.Data[0].complexity_of_services;
        this.outcome_id = response.data.Data[0].outcome;
        this.code_id = response.data.Data[0].icd_9_code;
        this.sub_code_id = response.data.Data[0].icd_9_subcode;
        this.medication_des = response.data.Data[0].medication_des;
        this.referalname = response.data.Data[0].medication_referrer_name;
        this.designation =
          response.data.Data[0].medication_referrer_designation;

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
        window.alert("Something went wrong");
      }
    },
  },
};
</script>
<style scoped>
.hide {
  display: none;
}
</style>
