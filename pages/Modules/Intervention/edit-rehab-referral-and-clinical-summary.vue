<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>REHAB REFERRAL AND CLINICAL SUMMARY</h1>
            <!-- <a href="#"><i class="fal fa-plus"></i> Add</a> -->
          </div>
          <div class="card mb-4">
            <div class="card-body">
              <table class="notes notes-sub" v-if="patientdetails">
                <thead>
                  <tr>
                    <th colspan="2">PATIENT DETAILS</th>
                  </tr>
                </thead>
                <tbody>
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
                    <th>Referred For:</th>
                    <td>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios1"
                          v-model="patient_referred_for"
                          value="Consultation/Screening"
                        />
                        <label class="form-check-label" for="exampleRadios1">
                          Consultation/Screening
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios2"
                          v-model="patient_referred_for"
                          value="Counselling"
                        />
                        <label class="form-check-label" for="exampleRadios2">
                          Counselling
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios3"
                          v-model="patient_referred_for"
                          value="Supported Employment"
                        />
                        <label class="form-check-label" for="exampleRadios3">
                          Supported Employment*
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios4"
                          v-model="patient_referred_for"
                          value="Job Club"
                        />
                        <label class="form-check-label" for="exampleRadios4">
                          Job Club*
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios5"
                          v-model="patient_referred_for"
                          value="ETP"
                        />
                        <label class="form-check-label" for="exampleRadios5">
                          ETP*
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th colspan="2">
                      *Only applicable for those who has been reviewed by hospital
                      psychiatry team.
                    </th>
                  </tr>
                </tbody>
              </table>
              <table class="notes notes-sub">
                <thead>
                  <tr>
                    <th colspan="2">CLINICAL SUMMARY</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Diagnosis:</th>
                    <td>
                      <select class="form-select" v-model="diagnosis" :disabled = "isDisabled">
                        <option value="">Please Select</option>
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
                    <th>Date Onset:</th>
                    <td>
                      <input
                        type="date"
                        class="form-control"
                        name=""
                        v-model="date_onset"
                        :disabled = "isDisabled"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Date Of Referral:</th>
                    <td>
                      <input
                        type="date"
                        class="form-control"
                        name=""
                        v-model="date_of_referral"
                        :disabled = "isDisabled"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>No. Of Admission :</th>
                    <td>
                      <input
                        type="text"
                        class="form-control"
                        name=""
                        v-model="no_of_admission"
                        :disabled = "isDisabled"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Latest Admission Date:</th>
                    <td>
                      <input
                        type="date"
                        class="form-control"
                        name=""
                        v-model="latest_admission_date"
                        :disabled = "isDisabled"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Current Medication:</th>
                    <td>
                      <textarea
                        class="form-control textarea"
                        v-model="current_medication"
                      ></textarea>
                    </td>
                  </tr>
                  <tr>
                    <th>Alerts:</th>
                    <td v-if="!pid">
                      <div class="form-check form-check-inline">
                        <input
                        :disabled = "isDisabled"
                          class="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          value="NMS"
                          @click="OnAlert('NMS')"
                        />
                        <label class="form-check-label" for="inlineCheckbox1"
                          >NMS</label
                        >
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                        :disabled = "isDisabled"
                          class="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox2"
                          value="SUICIDE"
                          @click="OnAlert('SUICIDE')"
                        />
                        <label class="form-check-label" for="inlineCheckbox2"
                          >SUICIDE</label
                        >
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                        :disabled = "isDisabled"
                          class="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox3"
                          value="FORENSIC"
                          @click="OnAlert('FORENSIC')"
                        />
                        <label class="form-check-label" for="inlineCheckbox3"
                          >FORENSIC</label
                        >
                      </div>
                    </td>
                     <td v-if="pid">
                      <div class="form-check form-check-inline" v-for="(alert,index) in alertlist" :key="index">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          value="NMS"
                          checked
                        />
                        <label class="form-check-label" for="inlineCheckbox1"
                          > {{alert}} </label
                        >
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>Education Level:</th>
                    <td>
                      <select class="form-select" v-model="education_level" :disabled = "isDisabled">
                        <option value="">Please Select</option>
                        <option
                          v-for="edu in settinglist"
                          v-bind:key="edu.id"
                          v-bind:value="edu.id"
                        >
                          {{ edu.section_value }}
                        </option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2" class="black">Potential Risk:</td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <table class="sub-table-form td-width">
                        <tbody>
                          <tr>
                            <th>Aggresion</th>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="Aggresion"
                                  id="aggresion-none" value="None" v-model="aggresion"
                                />
                                <label
                                  class="form-check-label"
                                  for="aggresion-none"
                                >
                                  None
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="Aggresion"
                                  id="aggresion-low" value="Low" v-model="aggresion"
                                />
                                <label
                                  class="form-check-label"
                                  for="aggresion-low"
                                >
                                  Low
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="Aggresion"
                                  id="aggresion-medium" value="Medium" v-model="aggresion"
                                />
                                <label
                                  class="form-check-label"
                                  for="aggresion-medium"
                                >
                                  Medium
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="Aggresion"
                                  id="aggresion-high" value="High" v-model="aggresion"
                                />
                                <label
                                  class="form-check-label"
                                  for="aggresion-high"
                                >
                                  High
                                </label>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <table class="sub-table-form td-width">
                        <tbody>
                          <tr>
                            <th>Suicidality</th>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="suicidality"
                                  id="suicidality-none" value="None" v-model="suicidality"
                                />
                                <label
                                  class="form-check-label"
                                  for="suicidality-none"
                                >
                                  None
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="suicidality"
                                  id="suicidality-low" value="Low" v-model="suicidality"
                                />
                                <label
                                  class="form-check-label"
                                  for="suicidality-low"
                                >
                                  Low
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="suicidality"
                                  id="suicidality-medium" value="Medium" v-model="suicidality"
                                />
                                <label
                                  class="form-check-label"
                                  for="suicidality-medium"
                                >
                                  Medium
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="suicidality"
                                  id="suicidality-high" value="High" v-model="suicidality"
                                />
                                <label
                                  class="form-check-label"
                                  for="suicidality-high"
                                >
                                  High
                                </label>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <table class="sub-table-form td-width">
                        <tbody>
                          <tr>
                            <th>Criminality</th>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="criminality"
                                  id="criminality-none" value="None" v-model="criminality"
                                />
                                <label
                                  class="form-check-label"
                                  for="criminality-none"
                                >
                                  None
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="criminality"
                                  id="criminality-low" value="Low" v-model="criminality"
                                />
                                <label
                                  class="form-check-label"
                                  for="criminality-low"
                                >
                                  Low
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="criminality"
                                  id="criminality-medium" value="Medium" v-model="criminality"
                                />
                                <label
                                  class="form-check-label"
                                  for="criminality-medium"
                                >
                                  Medium
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="criminality"
                                  id="criminality-high" value="High" v-model="criminality"
                                />
                                <label
                                  class="form-check-label"
                                  for="criminality-high"
                                >
                                  High
                                </label>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2" class="black">Substance History:</td>
                  </tr>
                  <tr>
                    <th>Age First Started:</th>
                    <td>
                      <input type="text" class="form-control" name="" v-model="age_first_started" :disabled = "isDisabled"/>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <table class="sub-table-form td-width">
                        <tbody>
                          <tr>
                            <th>Heroin/Opiate</th>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="heroin-opiate"
                                  id="heroin-opiate-none" value="None" v-model="heroin"
                                />
                                <label
                                  class="form-check-label"
                                  for="heroin-opiate-none"
                                >
                                  None
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="heroin-opiate"
                                  id="heroin-opiate-previous-history" value="Previous History" v-model="heroin"
                                />
                                <label
                                  class="form-check-label"
                                  for="heroin-opiate-previous-history"
                                >
                                  Previous History
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="heroin-opiate"
                                  id="heroin-opiate-current-use" value="Current Use" v-model="heroin"
                                />
                                <label
                                  class="form-check-label"
                                  for="heroin-opiate-current-use"
                                >
                                  Current Use
                                </label>
                              </div>
                            </td>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <table class="sub-table-form td-width">
                        <tbody>
                          <tr>
                            <th>Cannabis</th>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="cannabis"
                                  id="cannabis-none" value="None" v-model="cannabis"
                                />
                                <label
                                  class="form-check-label"
                                  for="cannabis-none"
                                >
                                  None
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="cannabis"
                                  id="cannabis-previous-history" value="Previous History" v-model="cannabis"
                                />
                                <label
                                  class="form-check-label"
                                  for="cannabis-previous-history"
                                >
                                  Previous History
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="cannabis"
                                  id="cannabis-current-use" value="Current Use" v-model="cannabis"
                                />
                                <label
                                  class="form-check-label"
                                  for="cannabis-current-use"
                                >
                                  Current Use
                                </label>
                              </div>
                            </td>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <table class="sub-table-form td-width">
                        <tbody>
                          <tr>
                            <th>ATS</th>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="ats"
                                  id="ats-none" value="None" v-model="ats"
                                />
                                <label class="form-check-label" for="ats-none">
                                  None
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="ats"
                                  id="ats-previous-history" value="Previous History" v-model="ats"
                                />
                                <label
                                  class="form-check-label"
                                  for="ats-previous-history"
                                >
                                  Previous History
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="ats"
                                  id="ats-current-use" value="Current Use" v-model="ats"
                                />
                                <label
                                  class="form-check-label"
                                  for="ats-current-use"
                                >
                                  Current Use
                                </label>
                              </div>
                            </td>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <table class="sub-table-form td-width">
                        <tbody>
                          <tr>
                            <th>Inhalant</th>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="inhalant"
                                  id="inhalant-none" value="None" v-model="inhalant"
                                />
                                <label
                                  class="form-check-label"
                                  for="inhalant-none"
                                >
                                  None
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="inhalant"
                                  id="inhalant-previous-history" value="Previous History" v-model="inhalant"
                                />
                                <label
                                  class="form-check-label"
                                  for="inhalant-previous-history"
                                >
                                  Previous History
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="inhalant"
                                  id="inhalant-current-use" value="Current Use" v-model="inhalant"
                                />
                                <label
                                  class="form-check-label"
                                  for="inhalant-current-use"
                                >
                                  Current Use
                                </label>
                              </div>
                            </td>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <table class="sub-table-form td-width">
                        <tbody>
                          <tr>
                            <th>Alcohol</th>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="alcohol"
                                  id="alcohol-none" value="None" v-model="alcohol"
                                />
                                <label
                                  class="form-check-label"
                                  for="alcohol-none"
                                >
                                  None
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="alcohol"
                                  id="alcohol-previous-history" value="Previous History" v-model="alcohol"
                                />
                                <label
                                  class="form-check-label"
                                  for="alcohol-previous-history"
                                >
                                  Previous History
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="alcohol"
                                  id="alcohol-current-use" value="Current Use" v-model="alcohol"
                                />
                                <label
                                  class="form-check-label"
                                  for="alcohol-current-use"
                                >
                                  Current Use
                                </label>
                              </div>
                            </td>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <table class="sub-table-form td-width">
                        <tbody>
                          <tr>
                            <th>Tobacco</th>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="tobacco"
                                  id="tobacco-none" value="None" v-model="tobacco"
                                />
                                <label
                                  class="form-check-label"
                                  for="tobacco-none"
                                >
                                  None
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="tobacco"
                                  id="tobacco-previous-history" value="Previous History" v-model="tobacco"
                                />
                                <label
                                  class="form-check-label"
                                  for="tobacco-previous-history"
                                >
                                  Previous History
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="tobacco"
                                  id="tobacco-current-use" value="Current Use" v-model="tobacco"
                                />
                                <label
                                  class="form-check-label"
                                  for="tobacco-current-use"
                                >
                                  Current Use
                                </label>
                              </div>
                            </td>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <table class="sub-table-form td-width">
                        <tbody>
                          <tr>
                            <th>Others</th>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="others"
                                  id="others-none" value="None" v-model="others"
                                />
                                <label
                                  class="form-check-label"
                                  for="others-none"
                                >
                                  None
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="others"
                                  id="others-previous-history" value="Previous History" v-model="others"
                                />
                                <label
                                  class="form-check-label"
                                  for="others-previous-history"
                                >
                                  Previous History
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="others"
                                  id="others-current-use" value="Current Use" v-model="others"
                                />
                                <label
                                  class="form-check-label"
                                  for="others-current-use"
                                >
                                  Current Use
                                </label>
                              </div>
                            </td>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      Other Information:<br />
                      <em
                        ><i
                          ><small
                            >That you feel will help this person reach his
                            employment goal, if any</small
                          ></i
                        ></em
                      >
                    </th>
                    <td>
                      <textarea
                        class="form-control textarea"
                        placeholder="Please type here.." v-model="other_information"
                      ></textarea>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div
                class="accordion form-accordion mt-3 form-custum-labal"
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
                              :disabled = "isDisabled"
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
                            <select class="form-select" v-model="type_diagnosis_id" :disabled = "isDisabled">
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
                              <select class="form-select" v-model="services_id" :disabled = "isDisabled">
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
                              <select class="form-select" v-model="code_id"  @change="onCategorycodebind($event)" :disabled = "isDisabled">
                                <option value="0">Select code</option>
                                <option v-for="type in codelist"  v-bind:key="type.id" v-bind:value="type.id">
             {{ type.icd_category_code }} {{type.icd_category_name}}
            </option>
                              </select>
                            </div>
                            <div class="col-md-6 mb-3">
                              <label class="form-label">ICD 9 SUB CODE</label>
                              <select class="form-select" v-model="sub_code_id" :disabled = "isDisabled">
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
                              <select class="form-select" v-model="services_id" :disabled = "isDisabled">
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
                              :disabled = "isDisabled"
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
                            <select class="form-select" v-model="outcome_id" :disabled = "isDisabled">
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
                        <textarea v-model="medication_prescription"
                          class="form-control textarea"
                          placeholder="Please Type Prescription Here"
                          :disabled = "isDisabled"
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
                    <td><input type="text" class="form-control" name="" v-model="referral_name" :disabled = "isDisabled"/></td>
                  </tr>
                  <tr>
                    <th>Designation:</th>
                    <td><input type="text" class="form-control" name="" v-model="designation" :disabled = "isDisabled"/></td>
                  </tr>
                </tbody>
              </table>
               <p v-if="errorList.length">
<ul>
        <li style="color:red"  v-for='err in errorList'
    :key='err' >
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
                    <div class="btn-right" :class="SidebarAccess!=1?'hide':''">
                    <button type="submit" class="btn btn-green btn-text" title="Download Form" @click="OnPrint">
                    <i class="fa fa-download"></i> Download
                  </button>
                    <button type="submit" title="Draft" @click="onCreateEvent()" class="btn btn-warning btn-text">
                      <i class="fa fa-save"></i> Save as draft
                    </button>
                    <button type="submit" title="Publish" @click="onPublishEvent()" class="btn btn-success btn-text">
                      <i class="fa fa-paper-plane"></i> Update
                    </button>
                  </div>
                </div>
            </div>
          </div>
            <div class="card mb-4 reslt" style="display:none;">
            <h1>Rehab Referral and Clinical Summary</h1>
            <div class="card-body">
              <table class="notes notes-sub" v-if="patientdetails">
                <thead>
                  <tr>
                    <th colspan="2">PATIENT DETAILS</th>
                  </tr>
                </thead>
                <tbody>
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
                    <th>Referred For:</th>
                    <td>
                      {{ this.patient_referred_for }}
                    </td>
                  </tr>
                  <tr>
                  </tr>
                </tbody>
              </table>
              <table class="notes notes-sub">
                <thead>
                  <tr>
                    <th colspan="2">CLINICAL SUMMARY</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Diagnosis:</th>
                    <td>
                        {{ this.diagnosis }}
                    </td>
                  </tr>
                  <tr>
                    <th>Date Onset:</th>
                    <td>
                      {{ this.date_onset }}
                    </td>
                  </tr>
                  <tr>
                    <th>Date Of Referral:</th>
                    <td>
                      {{ this.date_of_referral }}
                    </td>
                  </tr>
                  <tr>
                    <th>NO. of Admission :</th>
                    <td>
                      {{ this.no_of_admission }}
                    </td>
                  </tr>
                  <tr>
                    <th>Latest Admission Date:</th>
                    <td>
                      {{ this.latest_admission_date }}
                    </td>
                  </tr>
                  <tr>
                    <th>Current Medication:</th>
                    <td>
                      {{ this.current_medication }}
                    </td>
                  </tr>
                  <tr>
                    <th>Alerts:</th>
                    <td>
                      {{this.alerts}}
                    </td>
                  </tr>
                  <tr>
                    <th>Education Level:</th>
                    <td>
                      {{ this.education_level }}
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2" class="black">Potential Risk:</td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <table class="sub-table-form td-width">
                        <tbody>
                          <tr>
                            <th>Aggresion</th>
                            <td>
                              {{ this.aggresion }}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <table class="sub-table-form td-width">
                        <tbody>
                          <tr>
                            <th>Suicidality</th>
                            <td>
                              {{ this.suicidality }}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <table class="sub-table-form td-width">
                        <tbody>
                          <tr>
                            <th>Criminality</th>
                            <td>
                              {{ this.criminality }}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2" class="black">Substance History:</td>
                  </tr>
                  <tr>
                    <th>Age First Started:</th>
                    <td>
                      {{ this.age_first_started }}
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <table class="sub-table-form td-width">
                        <tbody>
                          <tr>
                            <th>Heroin/Opiate</th>
                            <td>
                              {{ this.heroin }}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <table class="sub-table-form td-width">
                        <tbody>
                          <tr>
                            <th>Cannabis</th>
                            <td>
                              {{ this.cannabis }}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <table class="sub-table-form td-width">
                        <tbody>
                          <tr>
                            <th>ATS</th>
                            <td>
                              {{ this.ats }}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <table class="sub-table-form td-width">
                        <tbody>
                          <tr>
                            <th>Inhalant</th>
                            <td>
                              {{ this.inhalant }}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <table class="sub-table-form td-width">
                        <tbody>
                          <tr>
                            <th>Alcohol</th>
                            <td>
                              {{ this.alcohol }}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <table class="sub-table-form td-width">
                        <tbody>
                          <tr>
                            <th>Tobacco</th>
                            <td>
                              {{ this.tobacco }}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <table class="sub-table-form td-width">
                        <tbody>
                          <tr>
                            <th>Others</th>
                            <td>
                              {{ this.others }}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      Other Information:<br />
                    </th>
                    <td>
                      {{ this.other_information }}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div
                class="accordion form-accordion mt-3 form-custum-labal"
                id="accordionExample"
              >
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                      OCCASION OF SERVICES
                  </h2>
                   <div>
                      <div class="accordion-body">
                        <div class="row mb-3">
                          <label class="col-sm-4 col-form-label"
                            >Location Of Services</label
                          >
                          {{ this.location_services_id }}
                        </div>
                        <!-- close-row -->
                        <div class="row mb-3">
                          <label class="col-sm-4 col-form-label"
                            >Type Of Diagnosis</label
                          >
                          {{ this.type_diagnosis_id }}
                        </div>
                        <!-- close-row -->
                        <div class="row mb-3">
                          <label class="col-sm-4 col-form-label"
                            >Category Of Services
                          </label>
                          {{ this.category_services }}
                        </div>
                        <!-- close-row -->
                        <!-- hide-div -->
                        <div class="assisstance services hide mb-3">
                          <div class="row">
                            <div class="col-md-6 mb-3">
                              <label class="form-label">Services:</label>
                              {{ this.services_id }}
                            </div>
                          </div>
                        </div>
                        <!-- 01 -->
                        <div class="clinical-work services hide mb-3">
                          <div class="row">
                            <div class="col-md-6 mb-3">
                              <label class="form-label">ICD 9 CODE:</label>
                              {{ this.code_id }}
                            </div>
                            <div class="col-md-6 mb-3">
                              <label class="form-label">ICD 9 SUB CODE:</label>
                              {{ this.sub_code_id }}
                            </div>
                          </div>
                        </div>
                        <!-- 02 -->
                        <div class="external services hide mb-3">
                          <div class="row">
                            <div class="col-md-6 mb-3">
                              <label class="form-label">Services</label>
                              {{ this.services_id }}
                            </div>
                          </div>
                        </div>
                        <!-- 03 -->
                        <!-- hide-div -->
                        <div class="row">
                          <div class="col-md-6 mb-3">
                            <label class="form-label"
                              >Complexity Of Service: </label
                            >
                            {{ this.complexity_services }}
                          </div>
                          <div class="col-md-6 mb-3">
                            <label class="form-label">Outcome: </label>
                            {{ this.outcome_id }}
                          </div>
                        </div>
                        <!-- close-row -->
                      </div>
                    </div>
                </div>
                <!--  -->
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                      MEDICATION
                  </h2>
                  <div>
                    <div class="accordion-body">
                      <div class="col-md-12 mb-3">
                        <label class="form-label">Medication: </label>
                        {{ this.medication_prescription }}
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
                    <td>{{ this.referral_name }}</td>
                  </tr>
                  <tr>
                    <th>Designation:</th>
                    <td>{{ this.designation }}</td>
                  </tr>
                </tbody>
              </table>
               <p v-if="errorList.length">
<ul>
        <li style="color:red"  v-for='err in errorList'
    :key='err' >
          {{ err }}
        </li>
      </ul>
        </p>
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
  name: "rehab-referral-and-clinical-summary",
  data() {
    return {
      userdetails: null,
      patientdetails: null,
      todaydate: "",
      errorList: [],
      servicelist: [],
      outcomelist: [],
      comlexcitylist: [],
      codelist: [],
      icdcatcodelist: [],
      diagonisislist: [],
      locationlist: [],
      settinglist: [],
      Id: 0,
      patient_referred_for: "",
      diagnosis: "",
      date_onset: "",
      date_of_referral: "",
      no_of_admission: "",
      latest_admission_date: "",
      current_medication: "",
      alerts: "",
      education_level: "",
      aggresion: "",
      suicidality: "",
      criminality: "",
      age_first_started: "",
      heroin: "",
      cannabis: "",
      ats: "",
      inhalant: "",
      alcohol: "",
      tobacco: "",
      others: "",
      other_information: "",
      referral_name: "",
      designation: "",
      location_services_id: 0,
      type_diagnosis_id: 0,
      category_services: "",
      code_id: 0,
      sub_code_id: 0,
      complexity_services: 0,
      outcome_id: 0,
      medication_prescription: "",
      services_id: 0,
      serviceid: 0,
      icd_category_code: "",
      icd_category_name: "",
      loc_service: "",
      validate: true,
      name: "",
      designation: "",
      hospital: "",
      icd_code: "",
      icd_name: "",
      assistancelist: [],
      externallist: [],
      pid: 0,
      type: "",
      alertlist: [],
      isDisabled: false,
      SidebarAccess:null,
      appId:0,
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.SidebarAccess = JSON.parse(localStorage.getItem("SidebarAccess"));
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
      this.GetList();
    }
    this.GetPatientdetails();
    let urlParams1 = new URLSearchParams(window.location.search);
    this.pid = urlParams1.get("pid");
    this.type = urlParams1.get("type");
    if (this.pid) {
      this.getdetails();
    }
    if (this.type == "view") {
      this.isDisabled = true;
    }
    const current = new Date();
    this.todaydate =
      current.getDate() +
      "-" +
      (current.getMonth() + 1) +
      "-" +
      current.getFullYear();
  },
  methods: {
    async onCreateEvent() {
      if (confirm("Are you sure you want to save as draft?")) {
      try {
          this.loader = true;
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          const response = await this.$axios.post(
            "rehab-referral/add",
            {
              added_by: this.userdetails.user.id,
              patient_mrn_id: this.Id,
              patient_referred_for: this.patient_referred_for,
              diagnosis: this.diagnosis,
              date_onset: this.date_onset,
              date_of_referral: this.date_of_referral,
              no_of_admission: this.no_of_admission,
              latest_admission_date: this.latest_admission_date,
              current_medication: this.current_medication,
              alerts: this.alerts,
              education_level: this.education_level,
              aggresion: this.aggresion,
              suicidality: this.suicidality,
              criminality: this.criminality,
              age_first_started: this.age_first_started,
              heroin: this.heroin,
              cannabis: this.cannabis,
              ats: this.ats,
              inhalant: this.inhalant,
              alcohol: this.alcohol,
              tobacco: this.tobacco,
              others: this.others,
              other_information: this.other_information,
              location_services: this.location_services_id,
              type_diagnosis_id: this.type_diagnosis_id,
              category_services: this.category_services,
              services_id: this.services_id,
              code_id: this.code_id,
              sub_code_id: this.sub_code_id,
              complexity_services: this.complexity_services,
              outcome: this.outcome_id,
              medication_des: this.medication_prescription,
              referral_name: this.referral_name,
              designation: this.designation,
              id:this.pid,
              appId: this.appId,
              status:"0",
            },
            { headers }
          );
          console.log("response", response.data);
          if (response.data.code == 200) {
            this.loader = false;
            this.resetmodel();
            this.$nextTick(() => {
              $("#insertpopup").modal("show");
            });
          } else {
            this.loader = false;
            this.$nextTick(() => {
              $("#errorpopup").modal("show");
            });
          }
        } catch (e) {}
      }
    },
    async onPublishEvent() {
      if (confirm("Are you sure you want to submit this entry")) {
      this.validate = true;
      this.errorList = [];
      try {
        if (!this.patient_referred_for) {
          this.errorList.push("Referred For is required");
        }
        if (!this.diagnosis) {
          this.errorList.push("Diagnosis is required");
        }
        if (!this.date_onset) {
          this.errorList.push("Date Onset is required");
        }
        if (!this.date_of_referral) {
          this.errorList.push("Date Of Referral is required");
        }
        if (!this.no_of_admission) {
          this.errorList.push("NO. of Admission is required");
        }
        if (!this.latest_admission_date) {
          this.errorList.push("Latest Admission Date is required");
        }
        if (!this.current_medication) {
          this.errorList.push("Current Medication is required");
        }
        if (!this.alerts) {
          this.errorList.push("Alerts is required");
        }
        if (!this.education_level) {
          this.errorList.push("Education Level is required");
        }
        if (!this.aggresion) {
          this.errorList.push("Aggresion is required");
        }
        if (!this.suicidality) {
          this.errorList.push("Suicidality is required");
        }
        if (!this.criminality) {
          this.errorList.push("Criminality is required");
        }
        if (!this.age_first_started) {
          this.errorList.push("Age First Started is required");
        }
        if (!this.heroin) {
          this.errorList.push("Heroin/Opiate is required");
        }
        if (!this.cannabis) {
          this.errorList.push("Cannabis is required");
        }
        if (!this.ats) {
          this.errorList.push("ATS is required");
        }
        if (!this.inhalant) {
          this.errorList.push("Inhalant is required");
        }
        if (!this.alcohol) {
          this.errorList.push("Alcohol is required");
        }
        if (!this.tobacco) {
          this.errorList.push("Tobacco is required");
        }
        if (!this.others) {
          this.errorList.push("Others is required");
        }
        if (!this.other_information) {
          this.errorList.push("Other Information is required");
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
          } else if (this.category_services == "external") {
            if (!this.services_id) {
              this.errorList.push("Services is required");
              this.validate = false;
            } else {
              this.services_id = this.services_id;
            }
          }
        }
        if (!this.outcome_id) {
          this.errorList.push("Outcome is required");
        }
        if (!this.referral_name) {
          this.errorList.push("Referrer Name is required");
        }
        if (!this.designation) {
          this.errorList.push("Designation is required");
        }
        if (
          this.patient_referred_for &&
          this.diagnosis &&
          this.date_onset &&
          this.date_of_referral &&
          this.no_of_admission &&
          this.latest_admission_date &&
          this.current_medication &&
          this.alerts &&
          this.education_level &&
          this.aggresion &&
          this.suicidality &&
          this.criminality &&
          this.age_first_started &&
          this.heroin &&
          this.cannabis &&
          this.ats &&
          this.inhalant &&
          this.alcohol &&
          this.tobacco &&
          this.others &&
          this.other_information &&
          this.location_services_id &&
          this.type_diagnosis_id &&
          this.category_services &&
          this.complexity_services &&
          this.outcome_id &&
          this.referral_name &&
          this.designation &&
          this.validate
        ) {
          this.loader = true;
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          const response = await this.$axios.post(
            "rehab-referral/add",
            {
              added_by: this.userdetails.user.id,
              patient_mrn_id: this.Id,
              patient_referred_for: this.patient_referred_for,
              diagnosis: this.diagnosis,
              date_onset: this.date_onset,
              date_of_referral: this.date_of_referral,
              no_of_admission: this.no_of_admission,
              latest_admission_date: this.latest_admission_date,
              current_medication: this.current_medication,
              alerts: this.alerts,
              education_level: this.education_level,
              aggresion: this.aggresion,
              suicidality: this.suicidality,
              criminality: this.criminality,
              age_first_started: this.age_first_started,
              heroin: this.heroin,
              cannabis: this.cannabis,
              ats: this.ats,
              inhalant: this.inhalant,
              alcohol: this.alcohol,
              tobacco: this.tobacco,
              others: this.others,
              other_information: this.other_information,
              location_services: this.location_services_id,
              type_diagnosis_id: this.type_diagnosis_id,
              category_services: this.category_services,
              services_id: this.services_id,
              code_id: this.code_id,
              sub_code_id: this.sub_code_id,
              complexity_services: this.complexity_services,
              outcome: this.outcome_id,
              medication_des: this.medication_prescription,
              referral_name: this.referral_name,
              designation: this.designation,
              id:this.pid,
              appId: this.appId,
              status:"1",
            },
            { headers }
          );
          console.log("response", response.data);
          if (response.data.code == 200) {
            this.loader = false;
            this.resetmodel();
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
    }
  },
    GoBack(){
      this.$router.push({
              path: "/modules/Intervention/patient-summary",
              query: { id: this.Id, appId: this.appId },
            });
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
        "general-setting/list?section=" + "education-level",
        { headers }
      );
      if (response6.data.code == 200 || response6.data.code == "200") {
        this.settinglist = response6.data.list;
      } else {
        this.settinglist = [];
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
      console.log("my details", this.patientdetails);
    },
    OnPrint() {
      var newstr = document.getElementsByClassName("reslt")[0].innerHTML;
      document.body.innerHTML = newstr;
      window.print();

      window.location.reload();
    },
    resetmodel() {
      this.patient_referred_for = "";
      this.diagnosis = "";
      this.date_onset = "";
      this.date_of_referral = "";
      this.no_of_admission = "";
      this.latest_admission_date = "";
      this.current_medication = "";
      this.alerts = "";
      this.education_level = "";
      this.aggresion = "";
      this.suicidality = "";
      this.criminality = "";
      this.age_first_started = "";
      this.heroin = "";
      this.cannabis = "";
      this.ats = "";
      this.inhalant = "";
      this.alcohol = "";
      this.tobacco = "";
      this.others = "";
      this.other_information = "";
      this.referral_name = "";
      this.designation = "";
      this.location_services_id = 0;
      this.type_diagnosis_id = 0;
      this.category_services = "";
      this.serviceid = "";
      this.code_id = 0;
      this.sub_code_id = 0;
      this.complexity_services = 0;
      this.outcome = 0;
      this.medication_prescription = "";
      this.services_id = 0;
    },
    OnAlert(val) {
      if (this.alerts) {
        this.alerts = this.alerts + "," + val;
      } else {
        this.alerts = val;
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
          type: "RehabRefferalAndClinicalForm",
        },
        { headers }
      );
      if (response.data.code == 200) {


        this.Id = response.data.Data[0].patient_mrn_id;

        this.patient_referred_for = response.data.Data[0].patient_referred_for;
        this.category_services = response.data.Data[0].category_services;
        this.diagnosis = response.data.Data[0].diagnosis;
        this.date_onset = response.data.Data[0].date_onset;
        this.date_of_referral = response.data.Data[0].date_of_referral;
        this.no_of_admission = response.data.Data[0].no_of_admission;
        this.latest_admission_date =
          response.data.Data[0].latest_admission_date;
        this.current_medication = response.data.Data[0].current_medication;
        this.alerts = response.data.Data[0].alerts;
        this.alertlist = this.alerts.split(",");
        this.education_level = response.data.Data[0].education_level;
        this.aggresion = response.data.Data[0].aggresion;
        this.suicidality = response.data.Data[0].suicidality;
        this.criminality = response.data.Data[0].criminality;
        this.age_first_started = response.data.Data[0].age_first_started;
        this.heroin = response.data.Data[0].heroin;
        this.cannabis = response.data.Data[0].cannabis;
        this.ats = response.data.Data[0].ats;
        this.inhalant = response.data.Data[0].inhalant;
        this.alcohol = response.data.Data[0].alcohol;
        this.tobacco = response.data.Data[0].tobacco;
        this.others = response.data.Data[0].others;
        this.other_information = response.data.Data[0].other_information;
        this.location_services = response.data.Data[0].location_services_id;
        this.type_diagnosis_id = response.data.Data[0].type_diagnosis_id;
        this.services_id = response.data.Data[0].services_id;
        this.code_id = response.data.Data[0].code_id;
        this.sub_code_id = response.data.Data[0].sub_code_id;
        this.complexity_of_services = response.data.Data[0].complexity_services;
        this.outcome_id = response.data.Data[0].outcome;
        this.medication_prescription = response.data.Data[0].medication_des;
        this.referral_name = response.data.Data[0].referral_name;
        this.designation = response.data.Data[0].designation;

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
  },
};
</script>
