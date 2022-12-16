<template>
  <div id="layoutSidenav">
    <CommonSidebar  />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>Patient Index Form</h1>
            <!-- <a href="#"><i class="fal fa-plus"></i> Add</a> -->
          </div>
          <div class="card mb-4">
            <div class="card-body">
              <table class="notes notes-sub" v-if="patientdetails">
                <thead>
                  <tr>
                    <th colspan="2">Patient Details</th>
                  </tr>
                </thead>
                <tbody >
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
                   <td>{{ patientdetails.gender }}</td>
                  </tr>
                </tbody>
              </table>
              <table class="notes notes-sub" v-if="patientdetails">
                <thead>
                  <tr>
                    <th colspan="2">Next Of Kin</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Name:</th>
                             <td>{{ patientdetails.kin_name_asin_nric }}</td>
                  </tr>
                  <tr>
                    <th>NRIC NO:</th>
                          <td>{{ patientdetails.kin_nric_no }}</td>
                  </tr>
                  <tr>
                    <th>Relationship:</th>
                             <td>{{ patientdetails.maritialstatus }}</td>
                  </tr>
                  <tr>
                    <th>Contact No:</th>
                            <td>{{ patientdetails.kin_mobile_no }}</td>
                  </tr>
                </tbody>
              </table>

              <table class="notes notes-sub">
                <thead>
                  <tr>
                    <th colspan="2">Clinical Summary</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Diagnosis:</th>
                    <td>
                     <select class="form-select" v-model="diagnosis">
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
                    <td colspan="2">
                      <table class="sub-table-form">
                        <tbody>
                          <tr>
                            <th>Date Onset:</th>
                            <td>
                              <input type="date" class="form-control" name="" v-model="date_onset"/>
                            </td>
                            <th class="thl-10">Date of Diagnosis:</th>
                            <td>
                              <input type="date" class="form-control" name="" v-model="date_of_diagnosis" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <table class="sub-table-form">
                        <tbody>
                          <tr>
                            <th>Date Of Referral:</th>
                            <td>
                              <input type="date" class="form-control" name="" v-model="date_of_referral" />
                            </td>
                            <th class="thl-10">
                              Date of First Assessment/Visit:
                            </th>
                            <td>
                              <input type="date" class="form-control" name="" v-model="date_of_first_assessment" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2" class="black">
                      Psychiatric Admission History
                    </td>
                  </tr>
                  <tr>
                    <th>Hospital :</th>
                    <td>
                      <input type="text" class="form-control" name="" v-model="hospital" />
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <table class="sub-table-form">
                        <tbody>
                          <tr>
                            <th>Latest Admission Date:</th>
                            <td>
                              <input type="date" class="form-control" name="" v-model="latest_admission_date"/>
                            </td>
                            <th class="thl-10">Date of Discharge:</th>
                            <td>
                              <input type="date" class="form-control" name="" v-model="date_of_discharge" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <th class="vertical-align-top">Reason:</th>
                    <td>
                      <table class="sub-table">
                        <tbody>
                          <tr>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  name=""
                                  id="1" @click="OnReasonchange('Risk To Self')"
                                />
                                <label class="form-check-label" for="1">
                                  Risk To Self
                                </label>
                              </div>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  name=""
                                  id="2" @click="OnReasonchange('Risk To Others')"
                                />
                                <label class="form-check-label" for="2">
                                  Risk To Others
                                </label>
                              </div>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  name=""
                                  id="3" @click="OnReasonchange('Reinstatement Of Medications')"
                                />
                                <label class="form-check-label" for="3">
                                  Reinstatement Of Medications
                                </label>
                              </div>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  name=""
                                  id="4" @click="OnReasonchange('Assessment')"
                                />
                                <label class="form-check-label" for="4">
                                  Assessment
                                </label>
                              </div>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  name=""
                                  id="5" @click="OnReasonchange('Observation')"
                                />
                                <label class="form-check-label" for="5">
                                  Observation
                                </label>
                              </div>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  name=""
                                  id="6" @click="OnReasonchange('Medical Treatment')"
                                />
                                <label class="form-check-label" for="6">
                                  Medical Treatment
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  name="mode-Of-therapy"
                                  id="66" @click="OnReasonchange('Functional Psychosis')"
                                />
                                <label class="form-check-label" for="66">
                                  Functional Psychosis
                                </label>
                              </div>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  name="mode-Of-therapy"
                                  id="77" @click="OnReasonchange('Severe Mental Disorder')"
                                />
                                <label class="form-check-label" for="77">
                                  Severe Mental Disorder
                                </label>
                              </div>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  name="mode-Of-therapy"
                                  id="8" @click="OnReasonchange('Social Deprivation')"
                                />
                                <label class="form-check-label" for="8">
                                  Social Deprivation
                                </label>
                              </div>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  name="mode-Of-therapy"
                                  id="9" @click="OnReasonchange('Self Care Deficits')"
                                />
                                <label class="form-check-label" for="9">
                                  Self Care Deficits
                                </label>
                              </div>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  name="mode-Of-therapy"
                                  id="10" @click="OnReasonchange('Respite For Relatives')"
                                />
                                <label class="form-check-label" for="10">
                                  Respite For Relatives
                                </label>
                              </div>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  name="mode-Of-therapy"
                                  id="11" @click="OnReasonchange('Respite For Patient')"
                                />
                                <label class="form-check-label" for="11">
                                  Respite For Patient
                                </label>
                              </div>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  name="mode-Of-therapy"
                                  id="12" @click="OnReasonchange('Others, Please Specify')"
                                />
                                <label class="form-check-label" for="12">
                                  Others, Please Specify
                                </label>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <th>Adherence To Medication:</th>
                    <td>
                      <table class="sub-table-form td-width">
                        <tbody>
                          <tr>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="Poor" value="Poor" v-model="adherence_to_medication"
                                />
                                <label class="form-check-label" for="Poor">
                                  Poor
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="Partial" value="Partial" v-model="adherence_to_medication"
                                />
                                <label class="form-check-label" for="Partial">
                                  Partial
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="Good" value="Good" v-model="adherence_to_medication"
                                />
                                <label class="form-check-label" for="Good">
                                  Good
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
                      <input type="text" class="form-control" name="" v-model="age_first_started" />
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
                    <th>Past Medical/Surgical History:</th>
                    <td>
                      <textarea
                        class="form-control textarea"
                        placeholder="Please type here.." v-model="past_Medical"
                      ></textarea>
                    </td>
                  </tr>
                  <tr>
                    <th>Background History (Family/Personal):</th>
                    <td>
                      <textarea
                        class="form-control textarea"
                        placeholder="Please type here.." v-model="background_history"
                      ></textarea>
                    </td>
                  </tr>
                  <tr>
                    <th>WHO DAS Assessment:</th>
                    <td>
                      <table class="sub-table-form">
                        <tbody>
                          <tr>
                            <td>
                              <input type="text" class="form-control" name="" v-model="who_das_assessment"/>
                            </td>
                            <td>
                              <button type="button" class="assessment-btn" @click="OnWhodassTest">
                                Assessment Test
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <th>Mental State Examination:</th>
                    <td>
                      <textarea
                        class="form-control textarea"
                        placeholder="Please type here.." v-model="mental_state_examination"
                      ></textarea>
                    </td>
                  </tr>
                  <tr>
                    <th>Summary Of Issues:</th>
                    <td>
                      <textarea
                        class="form-control textarea"
                        placeholder="Please type here.." v-model="summary_of_issues"
                      ></textarea>
                    </td>
                  </tr>
                  <tr>
                    <th>Management Plan:</th>
                    <td>
                      <textarea
                        class="form-control textarea"
                        placeholder="Please type here.." v-model="management_plan"
                      ></textarea>
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
              <table class="notes notes-sub">
                <thead>
                  <tr>
                    <th colspan="2">Administration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Zone:</th>
                    <td><input type="text" class="form-control" name="" v-model="zone" /></td>
                  </tr>
                  <tr>
                    <th>Case Manager:</th>
                    <td><input type="text" class="form-control" name="" v-model="case_manager" /></td>
                  </tr>
                  <tr>
                    <th>Specialist:</th>
                    <td><input type="text" class="form-control" name="" v-model="specialist" /></td>
                  </tr>
                  <tr>
                    <th>Date:</th>
                    <td><input type="date" class="form-control" name="" v-model="date" /></td>
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
                <a @click="GoBack"
                      class="btn btn-primary btn-text"
                      ><i class="fa fa-arrow-alt-to-left"></i> Back
                  </a >
                <div class="ml-auto">

                  <button v-if="!pid" class="btn btn-warning btn-text" @click="OnSubmit('0')"
                    ><i class="fa fa-save"></i> Save as Draft</button
                  >
                  <button v-if="!pid" @click="OnSubmit('1')" class="btn btn-success btn-text"
                    ><i class="fad fa-paper-plane"></i> Submit</button
                  >
                  <button v-if="type=='edit'" @click="OnSubmit('1')" class="btn btn-success btn-text"
                    ><i class="fad fa-paper-plane"></i> Update</button
                  >
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
  name: "se-progress-notes",
  data() {
    return {
      userdetails: null,
      Id: 0,
      pid: 0,
      patientdetails: null,
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
      diagnosis: "",
      date_onset: "",
      date_of_diagnosis: "",
      date_of_referral: "",
      date_of_first_assessment: "",
      hospital: "",
      latest_admission_date: "",
      date_of_discharge: "",
      reason: "",
      adherence_to_medication: "",
      aggresion: "",
      suicidality: 1,
      criminality: "",
      age_first_started: "",
      heroin: "",
      cannabis: "",
      ats: "",
      inhalant: "",
      alcohol: "",
      tobacco: "",
      others: "",
      past_Medical: "",
      background_history: "",
      who_das_assessment: "",
      mental_state_examination: "",
      summary_of_issues: "",
      past_medical: "",
      management_plan: "",
      zone: "",
      case_manager: "",
      specialist: "",
      date: "",
      location_services_id: 0,
      type_diagnosis_id: 0,
      category_services: 0,
      code_id: 0,
      sub_code_id: 0,
      complexity_services_id: 0,
      outcome_id: 0,
      medication_des: "",
      services_id: 0,
      serviceid: 0,
      validate: true,
      assistancelist: [],
      externallist: [],
      type: "",
      appId:0,
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    let urlParams = new URLSearchParams(window.location.search);
    this.Id = urlParams.get("id");
    this.appId = urlParams.get("appId");
    console.log("my index", this.Id);
    if (this.Id) {
    }
    this.GetList();
    this.GetPatientdetails();
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
    GoBack(){
      this.$router.push({
              path: "/modules/Intervention/patient-summary",
              query: { id: this.Id, appId: this.appId  },
            });
    },
    async GetPatientdetails() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "patient-registration/getPatientRegistrationByIdShortDetails",
        {
          id: this.Id,
        },
        { headers }
      );
      console.log("my data", response.data);
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
    async OnSubmit(status) {
      if (confirm("Are you sure you want to proceed this action? ")) {
      this.validate = true;
      this.errorList = [];
      try {
        if (status == 0) {
          this.loader = true;
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          const response = await this.$axios.post(
            "patient-index/add",
            {
              patient_mrn_id: this.Id,
              diagnosis: this.diagnosis,
              date_onset: this.date_onset,
              date_of_diagnosis: this.date_of_diagnosis,
              date_of_referral: this.date_of_referral,
              date_of_first_assessment: this.date_of_first_assessment,
              hospital: this.hospital,
              latest_admission_date: this.latest_admission_date,
              date_of_discharge: this.date_of_discharge,
              reason: this.reason,
              adherence_to_medication: this.adherence_to_medication,
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
              past_Medical: this.past_Medical,
              background_history: this.background_history,
              who_das_assessment: this.who_das_assessment,
              mental_state_examination: this.mental_state_examination,
              summary_of_issues: this.summary_of_issues,
              management_plan: this.management_plan,
              location_of_services: this.location_services_id,
              type_of_diagnosis: this.type_diagnosis_id,
              category_of_services: this.category_services,
              services_id: this.services_id,
              added_by: this.userdetails.user.id,
              code_id: this.code_id,
              sub_code_id: this.sub_code_id,
              complexity_of_service: this.complexity_services_id,
              outcome: this.outcome_id,
              medication: this.medication_des,
              zone: this.zone,
              case_manager: this.case_manager,
              specialist: this.specialist,
              date: this.date,
              status: status,
              id: this.pid,
              appId: this.appId,
            },
            { headers }
          );
          console.log("response", response.data);
          if (response.data.code == 200) {
            this.loader = false;
            this.resetmodel();
            if (this.pid) {
              this.$swal.fire(
                  'Successfully Update',
                )
            }else if(status == "0" || status== 0) {
              this.$swal.fire(
                  'Successfully Update',
                )
                this.$router.push({
              path: "/modules/Intervention/patient-summary",
              query: { id: this.Id },
            });
              } else {
                this.$swal.fire(
                  'Successfully Insert',
                )
            }
          } else {
            this.loader = false;
            this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + this.error,
                  footer: ''
                })
          }
        } else {
          if (!this.diagnosis) {
            this.errorList.push("Diagnosis is required");
          }
          if (!this.date_onset) {
            this.errorList.push("Date Onset is required");
          }
          if (!this.date_of_diagnosis) {
            this.errorList.push("Date of Diagnosis is required");
          }
          if (!this.date_of_referral) {
            this.errorList.push("Date Of Referral is required");
          }
          if (!this.date_of_first_assessment) {
            this.errorList.push("Date of First Assessment/Visit is required");
          }
          if (!this.hospital) {
            this.errorList.push("Hospital  is required");
          }
          if (!this.latest_admission_date) {
            this.errorList.push("Latest Admission Date  is required");
          }
          if (!this.date_of_discharge) {
            this.errorList.push("Date of Discharge is required");
          }
          if (!this.reason) {
            this.errorList.push("Reason is required");
          }
          if (!this.adherence_to_medication) {
            this.errorList.push("Adherence To Medication is required");
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
          if (!this.past_Medical) {
            this.errorList.push("Past Medical/Surgical History is required");
          }
          if (!this.background_history) {
            this.errorList.push(
              "Background History (Family/Personal) is required"
            );
          }
          if (!this.who_das_assessment) {
            this.errorList.push("WHO DAS Assessment is required");
          }
          if (!this.mental_state_examination) {
            this.errorList.push("Mental State Examination is required");
          }
          if (!this.summary_of_issues) {
            this.errorList.push("Summary Of Issues is required");
          }
          if (!this.management_plan) {
            this.errorList.push("Management Plan is required");
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
          if (!this.zone) {
            this.errorList.push("Zone is required");
          }
          if (!this.case_manager) {
            this.errorList.push("Case Manager is required");
          }
          if (!this.specialist) {
            this.errorList.push("Specialist is required");
          }
          if (!this.date) {
            this.errorList.push("Date is required");
          }
          if (
            this.diagnosis &&
            this.date_onset &&
            this.date_of_diagnosis &&
            this.date_of_referral &&
            this.date_of_first_assessment &&
            this.hospital &&
            this.latest_admission_date &&
            this.date_of_discharge &&
            this.reason &&
            this.adherence_to_medication &&
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
            this.past_Medical &&
            this.background_history &&
            this.who_das_assessment &&
            this.mental_state_examination &&
            this.summary_of_issues &&
            this.management_plan &&
            this.location_services_id &&
            this.type_diagnosis_id &&
            this.category_services &&
            this.complexity_services_id &&
            this.outcome_id &&
            this.zone &&
            this.case_manager &&
            this.specialist &&
            this.date &&
            this.validate
          ) {
            this.loader = true;
            const headers = {
              Authorization: "Bearer " + this.userdetails.access_token,
              Accept: "application/json",
              "Content-Type": "application/json",
            };
            const response = await this.$axios.post(
              "patient-index/add",
              {
                patient_mrn_id: this.Id,
                diagnosis: this.diagnosis,
                date_onset: this.date_onset,
                date_of_diagnosis: this.date_of_diagnosis,
                date_of_referral: this.date_of_referral,
                date_of_first_assessment: this.date_of_first_assessment,
                hospital: this.hospital,
                latest_admission_date: this.latest_admission_date,
                date_of_discharge: this.date_of_discharge,
                reason: this.reason,
                adherence_to_medication: this.adherence_to_medication,
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
                past_Medical: this.past_Medical,
                background_history: this.background_history,
                who_das_assessment: this.who_das_assessment,
                mental_state_examination: this.mental_state_examination,
                summary_of_issues: this.summary_of_issues,
                management_plan: this.management_plan,
                location_of_services: this.location_services_id,
                type_of_diagnosis: this.type_diagnosis_id,
                category_of_services: this.category_services,
                services_id: this.services_id,
                added_by: this.userdetails.user.id,
                code_id: this.code_id,
                sub_code_id: this.sub_code_id,
                complexity_of_service: this.complexity_services_id,
                outcome: this.outcome_id,
                medication: this.medication_des,
                zone: this.zone,
                case_manager: this.case_manager,
                specialist: this.specialist,
                date: this.date,
                status: status,
                id: this.pid,
                appId: this.appId,
              },
              { headers }
            );
            console.log("response", response.data);
            if (response.data.code == 200) {
              this.loader = false;
              this.resetmodel();
              if (this.pid) {
                this.$swal.fire(
                  'Successfully Update',
                )
              } else {
                this.$swal.fire(
                  'Successfully Insert',
                )
              }
            } else {
              this.loader = false;
              this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + this.error,
                  footer: ''
                })
            }
          }
        }
      } catch (e) {}
    }
    },
    async onCategorycodebind(event) {
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
        this.icdcatcodelist = response.data.list;
      } else {
        this.icdcatcodelist = [];
      }
    },
    resetmodel() {
      this.diagnosis = "";
      this.date_onset = "";
      this.date_of_diagnosis = "";
      this.date_of_referral = "";
      this.date_of_first_assessment = "";
      this.hospital = "";
      this.latest_admission_date = "";
      this.date_of_discharge = "";
      this.reason = "";
      this.adherence_to_medication = "";
      this.aggresion = "";
      this.suicidality = 1;
      this.criminality = "";
      this.age_first_started = "";
      this.heroin = "";
      this.cannabis = "";
      this.ats = "";
      this.inhalant = "";
      this.alcohol = "";
      this.tobacco = "";
      this.others = "";
      this.past_Medical = "";
      this.background_history = "";
      this.who_das_assessment = "";
      this.mental_state_examination = "";
      this.summary_of_issues = "";
      this.past_medical = "";
      this.management_plan = "";
      this.location_services_id = 0;
      this.type_diagnosis_id = 0;
      this.category_services = 0;
      this.code_id = 0;
      this.sub_code_id = 0;
      this.complexity_services_id = 0;
      this.outcome_id = 0;
      this.medication_des = "";
      this.services_id = 0;
      this.serviceid = 0;
      this.zone = "";
      this.case_manager = "";
      this.specialist = "";
      this.date = "";
    },
    OnWhodassTest() {
      let route = this.$router.resolve({
        path: "/modules/Intervention/whodas?id=" + this.Id,
      });
      window.open(route.href);
    },
    OnReasonchange(val) {
      if (this.reason) {
        this.reason = this.reason + "," + val;
      } else {
        this.reason = val;
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
          type: "PatientIndexForm",
        },
        { headers }
      );
      if (response.data.code == 200) {
        console.log("my resp data", response.data);
        this.Id = response.data.Data[0].patient_mrn_id;
        this.diagnosis = response.data.Data[0].diagnosis;
        this.date_onset = response.data.Data[0].date_onset;
        this.date_of_diagnosis = response.data.Data[0].date_of_diagnosis;
        this.date_of_referral = response.data.Data[0].date_of_referral;
        this.date_of_first_assessment =
          response.data.Data[0].date_of_first_assessment;
        this.hospital = response.data.Data[0].hospital;
        this.latest_admission_date =
          response.data.Data[0].latest_admission_date;
        this.date_of_discharge = response.data.Data[0].date_of_discharge;
        this.reason = response.data.Data[0].reason;
        this.adherence_to_medication =
          response.data.Data[0].adherence_to_medication;
        this.aggresion = response.data.Data[0].aggresion;
        this.suicidality = response.data.Data[0].suicidality;
        this.criminality = response.data.Data[0].criminality;
        this.age_first_started = response.data.Data[0].age_First_Started;
        this.heroin = response.data.Data[0].heroin;
        this.cannabis = response.data.Data[0].cannabis;
        this.ats = response.data.Data[0].ats;
        this.inhalant = response.data.Data[0].inhalant;
        this.alcohol = response.data.Data[0].alcohol;
        this.tobacco = response.data.Data[0].tobacco;
        this.others = response.data.Data[0].others;
        this.past_Medical = response.data.Data[0].past_Medical;
        this.background_history = response.data.Data[0].background_history;
        this.who_das_assessment = response.data.Data[0].who_das_assessment;
        this.mental_state_examination =
          response.data.Data[0].mental_state_examination;
        this.summary_of_issues = response.data.Data[0].summary_of_issues;
        this.management_plan = response.data.Data[0].management_plan;
        this.location_services_id = response.data.Data[0].location_of_services;
        this.type_diagnosis_id = response.data.Data[0].type_of_diagnosis;
        this.category_services = response.data.Data[0].category_of_services;
        this.services_id = response.data.Data[0].services_id;
        this.code_id = response.data.Data[0].code_id;
        this.sub_code_id = response.data.Data[0].sub_code_id;
        this.complexity_services_id =
          response.data.Data[0].complexity_of_service;
        this.outcome_id = response.data.Data[0].outcome;
        this.medication_des = response.data.Data[0].medication;
        this.zone = response.data.Data[0].zone;
        this.case_manager = response.data.Data[0].case_manager;
        this.specialist = response.data.Data[0].specialist;
        this.date = response.data.Data[0].date;

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
<style scoped>
.hide {
  display: none;
}
</style>
