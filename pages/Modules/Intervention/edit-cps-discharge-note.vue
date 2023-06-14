<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>CPS DISCHARGE NOTE</h1>
            <!-- <a href="#"><i class="fal fa-plus"></i> Add</a> -->
          </div>

          <div class="card mb-4">
            <div class="card-body">
              <table class="notes notes-sub">
                <tbody>
                  <tr>
                    <th>Name<small style="color:red">*</small> :</th>
                    <td><input type="text" class="form-control" name="" v-model="name" disabled/></td>
                  </tr>
                  <tr>
                    <th>MRN<small style="color:red">*</small> :</th>
                    <td><input type="text" class="form-control" name="" v-model="mrn" disabled/></td>
                  </tr>
                  <tr>
                    <th>Date<small style="color:red">*</small> :</th>
                    <td><input type="date" class="form-control" name="" v-model="cps_discharge_date"/></td>
                  </tr>
                  <tr>
                    <th>Time<small style="color:red">*</small> :</th>
                    <td><input type="time" class="form-control" name="" v-model="time" /></td>
                  </tr>
                  <tr>
                    <th>Staff Name<small style="color:red">*</small> :</th>
                    <td><input type="text" class="form-control" name="" v-model="staff_name" disabled /></td>
                  </tr>
                  <tr>
                    <th>Diagnosis<small style="color:red">*</small> :</th>
                    <td>
                      <select class="form-select" v-model="type_diagnosis_id">
                        <option value="">Select Diagnosis</option>
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
                    <th>Post Intervention<small style="color:red">*</small> :</th>
                    <td>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio11"
                          value="Good" v-model="post_intervention"
                        />
                        <label class="form-check-label" for="inlineRadio11"
                          >Good
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio21"
                          value="Satisfactory" v-model="post_intervention"
                        />
                        <label class="form-check-label" for="inlineRadio21"
                          >Satisfactory
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio31"
                          value="NOT SATISFACTORY" v-model="post_intervention"
                        />
                        <label class="form-check-label" for="inlineRadio31"
                          >NOT SATISFACTORY</label
                        >
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio32" v-model="post_intervention"
                          value="POOR"
                        />
                        <label class="form-check-label" for="inlineRadio32"
                          >POOR
                        </label>
                      </div>
                    </td>
                  </tr>




                     <tr>
                    <th class="vertical-align-top">Psychopathology<small style="color:red">*</small> :</th>
                    <td>
                      <div class="pp-box">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Symptoms (Delusion/hallucinnation) Controlled"
                          v-model="symptoms"
                          name=""
                          id="pp-1"
                        />
                        <label class="form-check-label" for="1">
                          Symptoms (Delusion/hallucinnation) Controlled
                        </label>
                      </div>

                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="No Persistent Aggressive/risk To Self Or Others"
                          v-model="aggressive"
                          name=""
                          id="pp-2"
                        />
                        <label class="form-check-label" for="2">
                          No Persistent Aggressive/risk To Self Or Others
                        </label>
                      </div>

                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="No Frequent Relapse Episode (>2 Admission Per Year)"
                          v-model="relapse"
                          name=""
                          id="pp-3"
                        />
                        <label class="form-check-label" for="3">
                          No Frequent Relapse Episode (>2 Admission Per Year)
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Compliance To Medication"
                          v-model="compliance"
                          name=""
                          id="pp-4"
                        />
                        <label class="form-check-label" for="4">
                          Compliance To Medication
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="No Or Tolerable Side Effect Or Treatment"
                          v-model="tolerable"
                          name=""
                          id="pp-5"
                        />
                        <label class="form-check-label" for="5">
                          No Or Tolerable Side Effect Or Treatment
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="Insight Towards Illness And Treatment"
                          v-model="insight"
                          name=""
                          id="pp-6"
                        />
                        <label class="form-check-label" for="6">
                          Insight Towards Illness And Treatment
                        </label>
                      </div>
                    </div>
                    </td>
                  </tr>

                  <tr>
                    <th class="vertical-align-top">Psychosocial<small style="color:red">*</small> :</th>
                    <td class="ps-box">
                      <div class="ps-box">
                      <table class="sub-table">
                        <tbody>
                          <tr>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  value="Accommodation"
                                  v-model="accommodation"
                                  name=""
                                  id="ps-1"
                                />
                                <label class="form-check-label" for="11">
                                  Accommodation
                                </label>
                              </div>

                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  value="Financial Support"
                                  v-model="financial"
                                  name=""
                                  id="ps-2"
                                />
                                <label class="form-check-label" for="21">
                                  Financial Support
                                </label>
                              </div>

                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  value="Occupational Functioning"
                                  v-model="occupational"
                                  name=""
                                  id="ps-3"
                                />
                                <label class="form-check-label" for="31">
                                  Occupational Functioning
                                </label>
                              </div>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  value="Living Skill"
                                  v-model="skill"
                                  name=""
                                  id="ps-4"
                                />
                                <label class="form-check-label" for="41">
                                  Living Skill
                                </label>
                              </div>
                            </td>

                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  name="mode-Of-therapy"
                                  value="Social Activities"
                                  v-model="social"
                                  id="ps-5"
                                />
                                <label class="form-check-label" for="66">
                                  Social Activities
                                </label>
                              </div>

                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  name="mode-Of-therapy"
                                  value="Family Cooperation/involvement/support"
                                  v-model="family"
                                  id="ps-6"
                                />
                                <label class="form-check-label" for="77">
                                  Family Cooperation/involvement/support
                                </label>
                              </div>

                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  name="mode-Of-therapy"
                                  value="Regular Appointment With Doctor"
                                  v-model="regular"
                                  id="ps-7"
                                />
                                <label class="form-check-label" for="8">
                                  Regular Appointment With Doctor
                                </label>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    </td>
                  </tr>

                  <tr>
                    <th class="vertical-align-top">Potential Risk<small style="color:red">*</small> :</th>
                    <td>
                      <div class="pr-box">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name=""
                          value="Aggression"
                          v-model="aggression"
                          id="pr-1"
                        />
                        <label class="form-check-label" for="3.1">
                          Aggression
                        </label>
                      </div>

                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name=""
                          value="Suicidality"
                          v-model="suicidality"
                          id="pr-2"
                        />
                        <label class="form-check-label" for="3.2">
                          Suicidality
                        </label>
                      </div>

                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name=""
                          value="Criminality"
                          v-model="criminality"
                          id="pr-3"
                        />
                        <label class="form-check-label" for="3.3">
                          Criminality
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name=""
                          value="Comorbid Substance Abuse"
                          v-model="comorbid"
                          id="pr-4"
                        />
                        <label class="form-check-label" for="3.4">
                          Comorbid Substance Abuse
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name=""
                          value="Abuse Or Neglect"
                          v-model="abuse"
                          id="pr-5"
                        />
                        <label class="form-check-label" for="3.5">
                          Abuse Or Neglect
                        </label>
                      </div>
                    </div>
                    </td>
                  </tr>

                  <tr >
                    <th>Category Of Discharge<small style="color:red">*</small> :</th>
                    <td>
                      <select class="form-select" v-model="category_of_discharge">
                      <option value="">Please Select</option>
                                                <option
              v-for="dis in dischargelist"
              v-bind:key="dis.id"
              v-bind:value="dis.id"
            >
              {{ dis.name }}
            </option>
                      </select>
                    </td>
                  </tr>

                  <tr>
                    <td colspan="2" class="form-heading">Outcome</td>
                  </tr>

                  <tr>
                    <th>Discharge Diagnosis<small style="color:red">*</small> :</th>
                    <td>
                      <select class="form-select" v-model="discharge_diagnosis">
                       <option value="">Select Diagnosis</option>
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
                    <th>Medication<small style="color:red">*</small> :</th>
                    <td>
                      <textarea class="form-control textarea" v-model="outcome_medication"></textarea>
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
                            >Location Of Services<small style="color:red">*</small> </label
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
                                                        >Type Of Diagnosis<small style="color:red">*</small> </label
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
                                                        <div class="row mb-3 align-items-flex-start">
                                                    <label class="col-sm-4 col-form-label">Additional Type Of Diagnosis</label>
                                                    <div class="col-sm-8 align-items-flex-start" >
                                                        <select
                                                        id="additionalbox" v-model="additional_diagnosis"
                                                        class="form-select multiselect" multiple="multiple">
                                                            <option value="0">Please Select</option><option
                                                            v-for="catcode in diagonisislist"
                                                            v-bind:key="catcode.id"
                                                            v-bind:value="catcode.id">
                                                            {{ catcode.icd_code }} {{catcode.icd_name}}
                                                            </option>
                                                        </select>
                                                    </div>
                                                        </div>
                        <!-- close-row -->
                        <div class="row mb-3">
                                                <label class="col-sm-4 col-form-label">Category Of Services<small style="color:red">*</small>
                                                </label>
                                                <div class="col-sm-8">
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="radio" name="inlineRadioOptions13" id="inlineRadio1" value="assisstance" v-model="category_services" />
                                                        <label class="form-check-label" for="inlineRadio1">Assisstance / Supervision</label>
                                                    </div>
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="radio" name="inlineRadioOptions12" id="inlineRadio2" value="clinical-work" v-model="category_services" />
                                                        <label class="form-check-label" for="inlineRadio2">Clinical Work / Procedure
                                                        </label>
                                                    </div>
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="radio" name="inlineRadioOptions11" id="inlineRadio3" value="external" v-model="category_services" />
                                                        <label class="form-check-label" for="inlineRadio3">External</label>
                                                    </div>
                                                </div>
                                            </div>
                        <!-- close-row -->
                        <!-- hide-div -->
                        <div class="assisstance services hide mb-3">
                          <div class="row">
                            <div class="col-md-6 mb-3">
                              <label class="form-label">Services<small style="color:red">*</small> </label>
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
                                        <div class="row mb-6 align-items-flex-start">
                                        <div class="col-md-4 mb-3">
                                            <label class="form-label">ICD 9 CODE<small style="color:red">*</small> </label>
                                            <select
                                            class="form-select"
                                            v-model="code_id"
                                            @change="onCategorycodebind($event)"
                                            >
                                            <option value="0">Select code</option>
                                            <option
                                                v-for="type in codelist"
                                                v-bind:key="type.id"
                                                v-bind:value="type.id">
                                            {{ type.icd_category_code }} {{type.icd_category_name}}
                                            </option>
                                            </select>
                                        </div>

                                        <div class="col-md-8 mb-3">
                                        <div><label class="form-label">ICD 9 SUB CODE<small style="color:red">*</small> </label></div>
                                        <div>
                                        <div class="mt-2 align-items-flex-start">
                                            <select
                                            class="form-select multiselect" multiple="multiple"
                                            id="sub_code_id" v-model="additional_sub_code_id" style="width:100%">

                                            <option value="0">Select code</option>
                                            <option
                                                v-for="catcode in icdcatcodelist"
                                                v-bind:key="catcode.id"
                                                v-bind:value="catcode.id">
                                                {{ catcode.icd_code }}{{catcode.icd_name}}
                                            </option>
                                            </select>
                                        </div>
                                        </div>
                                        </div>
                                        
                                        </div>

                                            <!--additional code-->
                                            <div class="row mb-6 align-items-flex-start">
                                            <div class="col-md-4 mb-3">
                                                <label class="form-label">Additional ICD 9 CODE</label>
                                                <select
                                                class="form-select"
                                                v-model="add_code_id"
                                                @change="onCategoryaddcodebind($event)"
                                                >
                                                <option value="0">Select code</option>
                                                <option
                                                    v-for="type in codelist"
                                                    v-bind:key="type.id"
                                                    v-bind:value="type.id">
                                                {{ type.icd_category_code }} {{type.icd_category_name}}
                                                </option>
                                                </select>
                                            </div>

                                            <div class="col-md-8 mb-3">
                                            <div><label class="form-label">Additional ICD 9 SUB CODE</label></div>
                                            <div>
                                            <div class="mt-2 align-items-flex-start">
                                                <select
                                                class="form-select multiselect" multiple="multiple"
                                                id="add_sub_code_id" v-model="additional_sub_code_id2" style="width:100%">

                                                <option value="0">Select code</option>
                                                <option
                                                    v-for="catcode in addicdcatcodelist"
                                                    v-bind:key="catcode.id"
                                                    v-bind:value="catcode.id">
                                                    {{ catcode.icd_code }}{{catcode.icd_name}}
                                                </option>
                                                </select>
                                            </div>
                                            </div>
                                            </div>

                                            
                                            
                                            </div>
                                        </div>
                        <!-- 02 -->
                        <div class="external services hide mb-3">
                          <div class="row">
                            <div class="col-md-6 mb-3">
                              <label class="form-label">Services<small style="color:red">*</small> </label>
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
                              >Complexity Of Service<small style="color:red">*</small> </label
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
                            <label class="form-label">Outcome<small style="color:red">*</small> </label>
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

              <table class="notes notes-sub">
                <tbody>
                  <tr>
                    <td colspan="2" class="form-heading">Verification</td>
                  </tr>

                  <tr>
                    <th>Specialist Name<small style="color:red">*</small> :</th>
                    <td>
                      <input type="text" class="form-control" name="" v-model="specialist_name"/>
                    </td>
                  </tr>

                  <tr>
                    <th>Date<small style="color:red">*</small> :</th>
                    <td>
                      <input type="date" class="form-control" v-model="verification_date" />
                    </td>
                  </tr>

                  <tr>
                    <th>Case Manager/Staff Name<small style="color:red">*</small> :</th>
                    <td>
                      <input type="text" class="form-control" v-model="case_manager" />
                    </td>
                  </tr>

                  <tr>
                    <th>Date<small style="color:red">*</small> :</th>
                    <td>
                      <input type="date" class="form-control" v-model="date" />
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
                       <br>
                       <br>
                       <div class="d-flex">
                    <button
                      @click="GoBack"
                      class="btn btn-primary btn-text"
                      ><i class="fa fa-arrow-alt-to-left"></i> Back
                    </button>
                    <div  class="btn-right">
                    <button type="submit" @click="onCreateEvent()" class="btn btn-warning btn-text">
                      <i class="fa fa-save"></i> Save as draft
                    </button>

                    <button type="submit" @click="onPublishEvent()" class="btn btn-success btn-text">
                      <i class="fa fa-paper-plane"></i> Submit
                    </button>
                  </div>
                </div>
            </div>
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
  name: "cps-discharge-note",
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
    this.appId = urlParams.get("appId");

    if (this.Id) {
      this.staff_name = this.userdetails.user.name;
      this.GetList();
      this.GetPatientdetails();
    }
    let urlParams1 = new URLSearchParams(window.location.search);
    this.pid = urlParams1.get("pid");
    this.type = urlParams1.get("type");
    if (this.pid) {
      this.getdetails();
    }

    $(".pre-1").click(function (e) {
        e.preventDefault();
        $('#nav-tab a[href="#nav-cb"]').tab("show");
      });
      $('.pp-box input[type="checkbox"]').click(function () {
        var inputValue = $(this).attr("value");
        $("." + inputValue).toggle();
      });
      $('.ps-box input[type="checkbox"]').click(function () {
        var inputValue = $(this).attr("value");
        $("." + inputValue).toggle();
      });
      $('.pr-box input[type="checkbox"]').click(function () {
        var inputValue = $(this).attr("value");
        $("." + inputValue).toggle();
      });

  },
  mounted(){
    $(document).ready(function () {
      $(".multiselect").select2({
        placeholder: "Please Select",
      });
    });
  },
  data() {
    return {
      patientdetails: null,
      userdetails: null,
      errorList: [],
      servicelist: [],
      outcomelist: [],
      comlexcitylist: [],
      codelist: [],
      icdcatcodelist: [],
      addicdcatcodelist: [],
      diagonisislist: [],
      locationlist: [],
      dischargelist: [],
      Psychopathologyselected: [],
      Psychosocialselected: [],
      potentialriskselected: [],
      assistancelist: [],
      externallist: [],
      Id: 0,
      name: "",
      mrn: "",
      cps_discharge_date: "",
      time: "",
      staff_name: "",
      diagnosis_id: "",
      post_intervention: "",
      psychopathology: "",
      potential_risk: "",
      category_of_discharge: "",
      discharge_diagnosis: "",
      outcome_medication: "",
      psychosocial: "",
      location_service: "",
      verification_date: "",
      specialist_name: "",
      case_manager: "",
      date: "",
      symptoms: "",
      aggressive: "",
      relapse: "",
      compliance: "",
      tolerable: "",
      insight: "",
      accommodation: "",
      financial: "",
      occupational: "",
      skill: "",
      social: "",
      family: "",
      regular:"",
      aggression: "",
      suicidality: "",
      criminality: "",
      comorbid: "",
      abuse: "",
      location_services: 0,
      type_diagnosis_id: 0,
      category_services: "",
      code_id: 0,
      add_code_id:0,
      complexity_services: 0,
      outcome: 0,
      medication_des: "None.",
      patient_mrn_id: "",
      services_id: 0,
      serviceid: 0,
      validate: true,
      pid: 0,
      type: "",
      phylist: [],
      psycholist: [],
      potentiallist: [],
      appId:0,

      addicdcatcodelist: [],
      type_diagnosis_id: 0,
      add_code_id:0,
      additional_diagnosis: [],
      additional_sub_code_id:[],
      additional_sub_code_id2:[],
    };
  },
  methods: {
    async onCreateEvent() {
      var additionalbox = 0;
      $("#additionalbox :selected").each(function () {
        if (additionalbox) {
          additionalbox = additionalbox + "," + this.value;
        } else {
          additionalbox = this.value;
        }
      });
      var sub_code_id = 0;
      $("#sub_code_id :selected").each(function () {
        if (sub_code_id) {
          sub_code_id = sub_code_id + "," + this.value;
        } else {
          sub_code_id = this.value;
        }
      });
      var add_sub_code_id = 0;
      $("#add_sub_code_id :selected").each(function () {
        if (add_sub_code_id) {
          add_sub_code_id = add_sub_code_id + "," + this.value;
        } else {
          add_sub_code_id = this.value;
        }
      });
      this.$swal.fire({
                title: 'Do you want to save as draft?',
                showCancelButton: true,
                confirmButtonText: 'Save',
            }).then(async(result) => {
              if (result.isConfirmed) {
                try {
                    const headers = {
                      Authorization: "Bearer " + this.userdetails.access_token,
                      Accept: "application/json",
                      "Content-Type": "application/json",
                    };
                    const response = await this.$axios.post(
                      "cps-discharge-note/add",
                      {
                        added_by: this.userdetails.user.id,
                        patient_mrn_id: this.Id,
                        name: this.name,
                        mrn: this.mrn,
                        cps_discharge_date: this.cps_discharge_date,
                        time: this.time,
                        staff_name: this.staff_name,
                        diagnosis: this.type_diagnosis_id,
                        post_intervention: this.post_intervention,
                        psychopathology: JSON.stringify([
                          {
                            "Symptoms (Delusion/hallucinnation) Controlled": this.symptoms,
                            "No Persistent Aggressive/risk To Self Or Others": this.aggressive,
                            "No Frequent Relapse Episode (>2 Admission Per Year)": this.relapse,
                            "Compliance To Medication": this.compliance,
                            "No Or Tolerable Side Effect Or Treatment": this.tolerable,
                            "Insight Towards Illness And Treatment": this.insight,
                          }
                        ]),
                        potential_risk: JSON.stringify([
                          {
                            "Aggression": this.aggression,
                            "Suicidality": this.suicidality,
                            "Criminality": this.criminality,
                            "Comorbid Substance Abuse": this.comorbid,
                            "Abuse Or Neglect": this.abuse,
                          }
                        ]),
                        category_of_discharge: this.category_of_discharge,
                        discharge_diagnosis: this.discharge_diagnosis,
                        outcome_medication: this.outcome_medication,
                        psychosocial: JSON.stringify([
                          {
                            "Accommodation":this.accommodation,
                            "Financial Support": this.financial,
                            "Occupational Functioning": this.occupational,
                            "Living Skill": this.skill,
                            "Social Activities": this.social,
                            "Family Cooperation/involvement/support": this.family,
                            "Regular Appointment With Doctor": this.regular,
                          }
                        ]),
                        location_service: this.location_services,
                        service_category: this.category_services,
                        diagnosis_type: this.type_diagnosis_id,
                                add_diagnosis_type: JSON.stringify(additionalbox),
                        services_id: this.services_id,
                        code_id: this.code_id,
                                sub_code_id: JSON.stringify(sub_code_id),
                                add_code_id: this.add_code_id,
                                add_sub_code_id: JSON.stringify(add_sub_code_id),
                        complexity_services: this.complexity_services,
                        verification_date: this.verification_date,
                        specialist_name: this.specialist_name,
                        outcome: this.outcome,
                        medication: this.medication_des,
                        case_manager: this.case_manager,
                        date: this.date,
                        status: "0",
                        id:this.pid,
                        appId: this.appId,
                      },
                      { headers }
                    );
                    console.log("response", response.data);
                    if (response.data.code == 200) {
                      this.loader = false;
                      this.resetmodel();
                      this.$swal.fire('Succesfully save as draft!', '', 'success')
                      this.GoBack();

                    } else {
                      this.loader = false;
                      this.resetmodel();
                      this.$swal.fire({
                          icon: 'error',
                          title: 'Oops... Something Went Wrong!',
                          text: 'the error is: ' + JSON.stringify(response.data.message),
                      })
                      this.GoBack();
                    }
                } catch (e) {
                  this.$swal.fire({
                            icon: 'error',
                            title: 'Oops... Something Went Wrong!',
                            text: 'the error is: ' + e,
                  })
                }
              } else if (result.isDismissed) {
                    this.$swal.fire('Changes are not saved', '', 'info')
              }
            })
    },
    async onPublishEvent() {
      var additionalbox = 0;
      $("#additionalbox :selected").each(function () {
        if (additionalbox) {
          additionalbox = additionalbox + "," + this.value;
        } else {
          additionalbox = this.value;
        }
      });
      var sub_code_id = 0;
      $("#sub_code_id :selected").each(function () {
        if (sub_code_id) {
          sub_code_id = sub_code_id + "," + this.value;
        } else {
          sub_code_id = this.value;
        }
      });
      var add_sub_code_id = 0;
      $("#add_sub_code_id :selected").each(function () {
        if (add_sub_code_id) {
          add_sub_code_id = add_sub_code_id + "," + this.value;
        } else {
          add_sub_code_id = this.value;
        }
      });
      this.$swal.fire({
                title: 'Do you want to save this record?',
                showCancelButton: true,
                confirmButtonText: 'Save',
            }).then(async(result) => {
              if (result.isConfirmed) {
              this.validate = true;
              this.errorList = [];

                try {
                  
                if (!this.name) {
                  this.errorList.push("Name is required");
                }
                if (!this.mrn) {
                  this.errorList.push("MRN Of Discharge is required");
                }
                if (!this.cps_discharge_date) {
                  this.errorList.push("Date is required");
                }
                if (!this.time) {
                  this.errorList.push("Time is required");
                }
                if (!this.staff_name) {
                  this.errorList.push("Staff Name is required");
                }
              
                if (!this.post_intervention) {
                  this.errorList.push("Post Intervention is required");
                }
                if (!this.category_of_discharge) {
                  this.errorList.push("Category Of Discharge is required");
                }
                if (!this.discharge_diagnosis) {
                  this.errorList.push("Discharge Diagnosis is required");
                }
                if (!this.outcome_medication) {
                  this.errorList.push("Outcome Medication is required");
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
                    if (!sub_code_id) {
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

                if (!this.specialist_name) {
                  this.errorList.push("Specialist Name is required");
                }
                if (!this.verification_date) {
                  this.errorList.push("Date is required");
                }
                if (!this.case_manager) {
                  this.errorList.push("Case Manager/Staff Name is required");
                }
                if (!this.date) {
                  this.errorList.push("Date is required");
                }
                if (
                  this.name &&
                  this.mrn &&
                  this.cps_discharge_date &&
                  this.time &&
                  this.staff_name &&
                  this.post_intervention &&
                  this.category_of_discharge &&
                  this.discharge_diagnosis &&
                  this.outcome_medication &&
                  this.location_services &&
                  this.category_services &&
                  this.complexity_services &&
                  this.outcome &&
                  this.validate &&
                  this.specialist_name &&
                  this.verification_date &&
                  this.case_manager &&
                  this.date
                ) {
                  this.loader = true;

                    const headers = {
                      Authorization: "Bearer " + this.userdetails.access_token,
                      Accept: "application/json",
                      "Content-Type": "application/json",
                    };
                    const response = await this.$axios.post(
                      "cps-discharge-note/add",
                      {
                        added_by: this.userdetails.user.id,
                        patient_mrn_id: this.Id,
                        name: this.name,
                        mrn: this.mrn,
                        cps_discharge_date: this.cps_discharge_date,
                        time: this.time,
                        staff_name: this.staff_name,
                        diagnosis: this.type_diagnosis_id,
                        post_intervention: this.post_intervention,
                        psychopathology: JSON.stringify([
                          {
                            "Symptoms (Delusion/hallucinnation) Controlled": this.symptoms,
                            "No Persistent Aggressive/risk To Self Or Others": this.aggressive,
                            "No Frequent Relapse Episode (>2 Admission Per Year)": this.relapse,
                            "Compliance To Medication": this.compliance,
                            "No Or Tolerable Side Effect Or Treatment": this.tolerable,
                            "Insight Towards Illness And Treatment": this.insight,
                          }
                        ]),
                        potential_risk: JSON.stringify([
                          {
                            "Aggression": this.aggression,
                            "Suicidality": this.suicidality,
                            "Criminality": this.criminality,
                            "Comorbid Substance Abuse": this.comorbid,
                            "Abuse Or Neglect": this.abuse,
                          }
                        ]),
                        category_of_discharge: this.category_of_discharge,
                        discharge_diagnosis: this.discharge_diagnosis,
                        outcome_medication: this.outcome_medication,
                        psychosocial: JSON.stringify([
                          {
                            "Accommodation":this.accommodation,
                            "Financial Support": this.financial,
                            "Occupational Functioning": this.occupational,
                            "Living Skill": this.skill,
                            "Social Activities": this.social,
                            "Family Cooperation/involvement/support": this.family,
                            "Regular Appointment With Doctor": this.regular,
                          }
                        ]),
                        location_service: this.location_services,
                        service_category: this.category_services,
                        diagnosis_type: this.type_diagnosis_id,
                        add_diagnosis_type: JSON.stringify(additionalbox),
                        services_id: this.services_id,
                        code_id: this.code_id,
                        sub_code_id: JSON.stringify(sub_code_id),
                        add_code_id: this.add_code_id,
                        add_sub_code_id: JSON.stringify(add_sub_code_id),
                        complexity_services: this.complexity_services,
                        verification_date: this.verification_date,
                        specialist_name: this.specialist_name,
                        outcome: this.outcome,
                        medication: this.medication_des,
                        case_manager: this.case_manager,
                        date: this.date,
                        status: "1",
                        id:this.pid,
                        appId: this.appId,
                      },
                      { headers }
                    );
                    console.log("response", response.data);
                    if (response.data.code == 200) {
                      this.loader = false;
                      this.resetmodel();
                      this.$swal.fire('Succesfully save this record!', '', 'success')
                      this.GoBack();

                    } else {
                      this.loader = false;
                      this.resetmodel();
                      this.$swal.fire({
                          icon: 'error',
                          title: 'Oops... Something Went Wrong!',
                          text: 'the error is: ' + JSON.stringify(response.data.message),
                      })
                      this.GoBack();
                    }
                  }
                } catch (e) {
                  this.$swal.fire({
                            icon: 'error',
                            title: 'Oops... Something Went Wrong!',
                            text: 'the error is: ' + e,
                  })
                }
              } else if (result.isDismissed) {
                    this.$swal.fire('Changes are not saved', '', 'info')
              }
            })
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
      const response6 = await this.$axios.get(
        "intervention/category-discharge",
        {
          headers,
        }
      );
      if (response6.data.code == 200 || response6.data.code == "200") {
        this.dischargelist = response6.data.list;
      } else {
        this.dischargelist = [];
      }
      const response7 = await this.$axios.get("staff-management/getList", {
        headers,
      });
      if (response7.data.code == 200 || response7.data.code == "200") {
        this.specialistlist = response7.data.list;
      } else {
        this.specialistlist = [];
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

    async onCategoryaddcodebind(event) {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "diagnosis/getIcd9subcodeList",
        { icd_category_code: event.target.value },
        { headers }
      );
      if (response.data.code == 200 || response.data.code == "200") {
        this.addicdcatcodelist = response.data.list;
      } else {
        this.addicdcatcodelist = [];
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
        console.log("my details", this.patientdetails);
        this.mrn = response.data.list[0].patient_mrn;
        this.name = response.data.list[0].name_asin_nric;
      } else {
        this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + this.error,
                  footer: ''
                });
      }
    },
     async GetPatientdetails1(id) {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "patient-registration/getPatientRegistrationById",
        {
          id: id,
        },
        { headers }
      );
      if (response.data.code == 200) {
        console.log("my details", this.patientdetails);
        this.mrn = response.data.list[0].patient_mrn;
        this.name = response.data.list[0].name_asin_nric;
      } else {
        this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + this.error,
                  footer: ''
                });
      }
    },
    resetmodel() {
      this.name = "";
      this.mrn = "";
      this.date = "";
      this.time = "";
      this.staff_name = "";
      this.diagnosis_id = "";
      this.intervention = "";
      this.discharge_category = "";
      this.comment = "";
      this.specialist_name = "";
      this.case_manager = "";
      this.verification_date_1 = "";
      this.verification_date_2 = "";
      this.location_services = 0;
      this.services_id = 0;
      this.category_services = 0;
      this.complexity_services = 0;
      this.outcome = 0;
      this.medication_des = "None.";
    },
    OnPsychopathology(val, event) {
      if (event.target.checked) {
        this.Psychopathologyselected.push(val);
      } else {
        if (this.Psychopathologyselected.indexOf(val) != -1)
          this.Psychopathologyselected.splice(
            this.Psychopathologyselected.indexOf(val),
            1
          );
      }
    },
    OnPsychosocial(val, event) {
      if (event.target.checked) {
        this.Psychosocialselected.push(val);
      } else {
        if (this.Psychosocialselected.indexOf(val) != -1)
          this.Psychosocialselected.splice(
            this.Psychosocialselected.indexOf(val),
            1
          );
      }
    },
    Onpotentialrisk(val, event) {
      if (event.target.checked) {
        this.potentialriskselected.push(val);
      } else {
        if (this.potentialriskselected.indexOf(val) != -1)
          this.potentialriskselected.splice(
            this.potentialriskselected.indexOf(val),
            1
          );
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
          type: "CpsDischargeNote",
        },
        { headers }
      );
      if (response.data.code == 200) {

        this.Id = response.data.Data[0].patient_mrn_id;
        this.GetPatientdetails1(response.data.Data[0].patient_mrn_id);
        this.name = response.data.Data[0].name;
        this.time = response.data.Data[0].time;
        this.comment = response.data.Data[0].comment;
        this.mrn = response.data.Data[0].mrn;
        this.cps_discharge_date = response.data.Data[0].cps_discharge_date;
        this.staff_name = response.data.Data[0].staff_name;
        this.diagnosis_id = response.data.Data[0].diagnosis_type;
        this.post_intervention = response.data.Data[0].post_intervention;
        this.category_of_discharge = response.data.Data[0].category_of_discharge;
        this.discharge_diagnosis = response.data.Data[0].discharge_diagnosis;
        this.outcome_medication = response.data.Data[0].outcome_medication;

        this.location_services = response.data.Data[0].location_service;
        this.type_diagnosis_id = response.data.Data[0].diagnosis_type;
        this.additional_diagnosis = response.data.Data[0].add_diagnosis_type.split(",");
                    
                    $("#additionalbox")
                    .val(this.additional_diagnosis)
                    .trigger("change");
        this.category_services = response.data.Data[0].service_category;
        this.code_id = response.data.Data[0].icd_9_code;
                    this.additional_sub_code_id = response.data.Data[0].icd_9_subcode.split(",");
                     $("#sub_code_id")
                    .val( this.additional_sub_code_id)
                    .trigger("change");
                   

                    this.add_code_id = response.data.Data[0].add_code_id;
                    this.additional_sub_code_id2 = response.data.Data[0].add_sub_code_id.split(",");
                                $("#add_sub_code_id")
                                .val( this.additional_sub_code_id2)
                                .trigger("change");
        this.complexity_services = response.data.Data[0].complexity_services;
        this.outcome = response.data.Data[0].outcome;
        this.medication_des = response.data.Data[0].medication;
        this.services_id = response.data.Data[0].services_id;
        this.specialist_name = response.data.Data[0].specialist_name;
        this.verification_date = response.data.Data[0].verification_date;
        this.date = response.data.Data[0].date;
        this.case_manager = response.data.Data[0].case_manager;
        this.GetList();

        var jdata1 = JSON.parse(response.data.Data[0].psychopathology);
        jdata1.forEach((ele) => {
          this.psychopathology ="val";
          if(ele["Symptoms (Delusion/hallucinnation) Controlled"]==true){
            this.symptoms = "Symptoms (Delusion/hallucinnation) Controlled";
          }
          if(ele["No Persistent Aggressive/risk To Self Or Others"]==true){
            this.aggressive = "No Persistent Aggressive/risk To Self Or Others";
          }
          if(ele["Compliance To Medication"]==true){
            this.compliance = "Compliance To Medication";
          }
          if(ele["No Or Tolerable Side Effect Or Treatment"]==true){
            this.tolerable = "No Or Tolerable Side Effect Or Treatment";
          }
          if(ele["Insight Towards Illness And Treatment"]==true){
            this.insight = "Insight Towards Illness And Treatment";
          }
        });

        var jdata2 = JSON.parse(response.data.Data[0].psychosocial);
        jdata2.forEach((ele) => {
          this.psychosocial ="val";
          if(ele["Accommodation"]==true){
            this.accommodation = "Accommodation";
          }
          if(ele["Financial Support"]==true){
            this.financial = "Financial Support";
          }
          if(ele["Occupational Functioning"]==true){
            this.occupational = "Occupational Functioning";
          }
          if(ele["Living Skill"]==true){
            this.skill = "Living Skill";
          }
          if(ele["Social Activities"]==true){
            this.social = "Social Activities";
          }
          if(ele["Family Cooperation/involvement/support"]==true){
            this.family = "Family Cooperation/involvement/support";
          }
          if(ele["Regular Appointment With Doctor"]==true){
            this.regular = "Regular Appointment With Doctor";
          }
        });

        var jdata3 = JSON.parse(response.data.Data[0].potential_risk);
        jdata3.forEach((ele) => {
          this.potential_risk ="val";
          if(ele["Aggression"]==true){
            this.aggression = "Aggression";
          }
          if(ele["Suicidality"]==true){
            this.suicidality = "Suicidality";
          }
          if(ele["Criminality"]==true){
            this.criminality = "Criminality";
          }
          if(ele["Comorbid Substance Abuse"]==true){
            this.comorbid = "Comorbid Substance Abuse";
          }
          if(ele["Abuse Or Neglect"]==true){
            this.abuse = "Abuse Or Neglect";
          }
        });

        this.GetList();
                    const response2 = await this.$axios.post(
                        "diagnosis/getIcd9subcodeList", {
                            icd_category_code: this.code_id
                        }, {
                            headers
                        }
                    );
                    if (response2.data.code == 200 || response2.data.code == "200") {
                        this.icdcatcodelist = response2.data.list;
                    } else {
                        this.icdcatcodelist = [];
                    }
                    const response3 = await this.$axios.post(
                        "diagnosis/getIcd9subcodeList", {
                            icd_category_code: this.add_code_id
                        }, {
                            headers
                        }
                    );
                    if (response3.data.code == 200 || response3.data.code == "200") {
                        this.addicdcatcodelist = response3.data.list;
                    } else {
                        this.addicdcatcodelist = [];
                    }

      } else {
        this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + this.error,
                  footer: ''
                });
      }
      if(this.service_category=='clinical-work'){
                    $(document).ready(function () {
                        $('input[name="inlineRadioOptions12"]').trigger('click');
                    });
                }else if(this.service_category=='external'){
                    $(document).ready(function () {
                        $('input[name="inlineRadioOptions13"]').trigger('click');
                    });
                }else{
                    $(document).ready(function () {
                        $('input[name="inlineRadioOptions11"]').trigger('click');
                    });
                }
    },
    GoBack(){
      if (this.type == 'view'){
        this.$router.go(-1);
      } else {
        this.$router.push({
              path: "/modules/Intervention/patient-summary",
              query: { id: this.Id, appId: this.appId },
            });
      }
    }
  },
};
</script>
