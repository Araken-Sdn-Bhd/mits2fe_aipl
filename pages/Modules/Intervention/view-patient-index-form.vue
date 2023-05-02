<template>
  <div id="layoutSidenav">
      <CommonSidebar />
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
                                      <th>Diagnosis<small style="color:red">*</small> :</th>
                                      <td>
                                          <select disabled class="form-select" v-model="diagnosis">
                                              <option value="">Select Diagnosis</option>
                                              <option v-for="catcode in diagonisislist" v-bind:key="catcode.id" v-bind:value="catcode.id">
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
                                                      <th>Date Onset<small style="color:red">*</small> :</th>
                                                      <td>
                                                          <input disabled type="date" class="form-control" name="" v-model="date_onset" />
                                                      </td>
                                                      <th class="thl-10">Date of Diagnosis<small style="color:red">*</small> :</th>
                                                      <td>
                                                          <input disabled type="date" class="form-control" name="" v-model="date_of_diagnosis" />
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
                                                      <th>Date Of Referral<small style="color:red">*</small> :</th>
                                                      <td>
                                                          <input disabled type="date" class="form-control" name="" v-model="date_of_referral" />
                                                      </td>
                                                      <th class="thl-10">
                                                          Date of First Assessment/Visit<small style="color:red">*</small> :
                                                      </th>
                                                      <td>
                                                          <input disabled type="date" class="form-control" name="" v-model="date_of_first_assessment" />
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
                                      <th>Hospital<small style="color:red">*</small> :</th>
                                      <td>
                                          <input disabled type="text" class="form-control" name="" v-model="hospital" />
                                      </td>
                                  </tr>
                                  <tr>
                                      <td colspan="2">
                                          <table class="sub-table-form">
                                              <tbody>
                                                  <tr>
                                                      <th>Latest Admission Date<small style="color:red">*</small> :</th>
                                                      <td>
                                                          <input disabled type="date" class="form-control" name="" v-model="latest_admission_date" />
                                                      </td>
                                                      <th class="thl-10">Date of Discharge<small style="color:red">*</small> :</th>
                                                      <td>
                                                          <input disabled type="date" class="form-control" name="" v-model="date_of_discharge" />
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                                  <tr>
                                      <th class="vertical-align-top">Reason<small style="color:red">*</small> :</th>
                                      <td>
                                          <table class="sub-table">
                                              <tbody>
                                                  <tr>
                                                      <td>
                                                          <div class="form-check">
                                                              <input disabled class="form-check-input" type="checkbox" name="" id="1" @click="OnReasonchange('Risk To Self')" />
                                                              <label class="form-check-label" for="1">
                                                                  Risk To Self
                                                              </label>
                                                          </div>
                                                          <div class="form-check">
                                                              <input disabled class="form-check-input" type="checkbox" name="" id="2" @click="OnReasonchange('Risk To Others')" />
                                                              <label class="form-check-label" for="2">
                                                                  Risk To Others
                                                              </label>
                                                          </div>
                                                          <div class="form-check">
                                                              <input disabled class="form-check-input" type="checkbox" name="" id="3" @click="OnReasonchange('Reinstatement Of Medications')" />
                                                              <label class="form-check-label" for="3">
                                                                  Reinstatement Of Medications
                                                              </label>
                                                          </div>
                                                          <div class="form-check">
                                                              <input disabled class="form-check-input" type="checkbox" name="" id="4" @click="OnReasonchange('Assessment')" />
                                                              <label class="form-check-label" for="4">
                                                                  Assessment
                                                              </label>
                                                          </div>
                                                          <div class="form-check">
                                                              <input disabled class="form-check-input" type="checkbox" name="" id="5" @click="OnReasonchange('Observation')" />
                                                              <label class="form-check-label" for="5">
                                                                  Observation
                                                              </label>
                                                          </div>
                                                          <div class="form-check">
                                                              <input disabled class="form-check-input" type="checkbox" name="" id="6" @click="OnReasonchange('Medical Treatment')" />
                                                              <label class="form-check-label" for="6">
                                                                  Medical Treatment
                                                              </label>
                                                          </div>
                                                      </td>
                                                      <td>
                                                          <div class="form-check">
                                                              <input disabled class="form-check-input" type="checkbox" name="mode-Of-therapy" id="66" @click="OnReasonchange('Functional Psychosis')" />
                                                              <label class="form-check-label" for="66">
                                                                  Functional Psychosis
                                                              </label>
                                                          </div>
                                                          <div class="form-check">
                                                              <input disabled class="form-check-input" type="checkbox" name="mode-Of-therapy" id="77" @click="OnReasonchange('Severe Mental Disorder')" />
                                                              <label class="form-check-label" for="77">
                                                                  Severe Mental Disorder
                                                              </label>
                                                          </div>
                                                          <div class="form-check">
                                                              <input disabled class="form-check-input" type="checkbox" name="mode-Of-therapy" id="8" @click="OnReasonchange('Social Deprivation')" />
                                                              <label class="form-check-label" for="8">
                                                                  Social Deprivation
                                                              </label>
                                                          </div>
                                                          <div class="form-check">
                                                              <input disabled class="form-check-input" type="checkbox" name="mode-Of-therapy" id="9" @click="OnReasonchange('Self Care Deficits')" />
                                                              <label class="form-check-label" for="9">
                                                                  Self Care Deficits
                                                              </label>
                                                          </div>
                                                          <div class="form-check">
                                                              <input disabled class="form-check-input" type="checkbox" name="mode-Of-therapy" id="10" @click="OnReasonchange('Respite For Relatives')" />
                                                              <label class="form-check-label" for="10">
                                                                  Respite For Relatives
                                                              </label>
                                                          </div>
                                                          <div class="form-check">
                                                              <input disabled class="form-check-input" type="checkbox" name="mode-Of-therapy" id="11" @click="OnReasonchange('Respite For Patient')" />
                                                              <label class="form-check-label" for="11">
                                                                  Respite For Patient
                                                              </label>
                                                          </div>
                                                          <div class="form-check">
                                                              <input disabled class="form-check-input" type="checkbox" name="mode-Of-therapy" id="12" @click="OnReasonchange('Others, Please Specify')" />
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
                                      <th>Adherence To Medication<small style="color:red">*</small> :</th>
                                      <td>
                                          <table class="sub-table-form td-width">
                                              <tbody>
                                                  <tr>
                                                      <td>
                                                          <div class="form-check">
                                                              <input disabled class="form-check-input" type="radio" name="flexRadioDefault" id="Poor" value="Poor" v-model="adherence_to_medication" />
                                                              <label class="form-check-label" for="Poor">
                                                                  Poor
                                                              </label>
                                                          </div>
                                                      </td>
                                                      <td>
                                                          <div class="form-check">
                                                              <input disabled class="form-check-input" type="radio" name="flexRadioDefault" id="Partial" value="Partial" v-model="adherence_to_medication" />
                                                              <label class="form-check-label" for="Partial">
                                                                  Partial
                                                              </label>
                                                          </div>
                                                      </td>
                                                      <td>
                                                          <div class="form-check">
                                                              <input disabled class="form-check-input" type="radio" name="flexRadioDefault" id="Good" value="Good" v-model="adherence_to_medication" />
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
                                                      <th>Aggresion<small style="color:red">*</small></th>
                                                      <td>
                                                          <div class="form-check">
                                                              <input disabled class="form-check-input" type="radio" name="Aggresion" id="aggresion-none" value="None" v-model="aggresion" />
                                                              <label class="form-check-label" for="aggresion-none">
                                                                  None
                                                              </label>
                                                          </div>
                                                      </td>
                                                      <td>
                                                          <div class="form-check">
                                                              <input disabled class="form-check-input" type="radio" name="Aggresion" id="aggresion-low" value="Low" v-model="aggresion" />
                                                              <label class="form-check-label" for="aggresion-low">
                                                                  Low
                                                              </label>
                                                          </div>
                                                      </td>
                                                      <td>
                                                          <div class="form-check">
                                                              <input disabled class="form-check-input" type="radio" name="Aggresion" id="aggresion-medium" value="Medium" v-model="aggresion" />
                                                              <label class="form-check-label" for="aggresion-medium">
                                                                  Medium
                                                              </label>
                                                          </div>
                                                      </td>
                                                      <td>
                                                          <div class="form-check">
                                                              <input disabled class="form-check-input" type="radio" name="Aggresion" id="aggresion-high" value="High" v-model="aggresion" />
                                                              <label class="form-check-label" for="aggresion-high">
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
                                                      <th>Suicidality<small style="color:red">*</small></th>
                                                      <td>
                                                          <div class="form-check">
                                                              <input disabled class="form-check-input" type="radio" name="suicidality" id="suicidality-none" value="None" v-model="suicidality" />
                                                              <label class="form-check-label" for="suicidality-none">
                                                                  None
                                                              </label>
                                                          </div>
                                                      </td>
                                                      <td>
                                                          <div class="form-check">
                                                              <input disabled class="form-check-input" type="radio" name="suicidality" id="suicidality-low" value="Low" v-model="suicidality" />
                                                              <label class="form-check-label" for="suicidality-low">
                                                                  Low
                                                              </label>
                                                          </div>
                                                      </td>
                                                      <td>
                                                          <div class="form-check">
                                                              <input disabled class="form-check-input" type="radio" name="suicidality" id="suicidality-medium" value="Medium" v-model="suicidality" />
                                                              <label class="form-check-label" for="suicidality-medium">
                                                                  Medium
                                                              </label>
                                                          </div>
                                                      </td>
                                                      <td>
                                                          <div class="form-check">
                                                              <input disabled class="form-check-input" type="radio" name="suicidality" id="suicidality-high" value="High" v-model="suicidality" />
                                                              <label class="form-check-label" for="suicidality-high">
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
                                                      <th>Criminality<small style="color:red">*</small></th>
                                                      <td>
                                                          <div class="form-check">
                                                              <input disabled class="form-check-input" type="radio" name="criminality" id="criminality-none" value="None" v-model="criminality" />
                                                              <label class="form-check-label" for="criminality-none">
                                                                  None
                                                              </label>
                                                          </div>
                                                      </td>
                                                      <td>
                                                          <div class="form-check">
                                                              <input disabled class="form-check-input" type="radio" name="criminality" id="criminality-low" value="Low" v-model="criminality" />
                                                              <label class="form-check-label" for="criminality-low">
                                                                  Low
                                                              </label>
                                                          </div>
                                                      </td>
                                                      <td>
                                                          <div class="form-check">
                                                              <input disabled class="form-check-input" type="radio" name="criminality" id="criminality-medium" value="Medium" v-model="criminality" />
                                                              <label class="form-check-label" for="criminality-medium">
                                                                  Medium
                                                              </label>
                                                          </div>
                                                      </td>
                                                      <td>
                                                          <div class="form-check">
                                                              <input disabled class="form-check-input" type="radio" name="criminality" id="criminality-high" value="High" v-model="criminality" />
                                                              <label class="form-check-label" for="criminality-high">
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
                                      <th>Age First Started<small style="color:red">*</small> :</th>
                                      <td>
                                          <input disabled type="text" class="form-control" name="" v-model="age_first_started" />
                                      </td>
                                  </tr>
                                  <tr>
                                      <td colspan="2">
                                          <table class="sub-table-form td-width">
                                              <tbody>
                                                  <tr>
                                                      <th>Heroin/Opiate<small style="color:red">*</small></th>
                                                      <td>
                                                          <div class="form-check">
                                                              <input disabled class="form-check-input" type="radio" name="heroin-opiate" id="heroin-opiate-none" value="None" v-model="heroin" />
                                                              <label class="form-check-label" for="heroin-opiate-none">
                                                                  None
                                                              </label>
                                                          </div>
                                                      </td>
                                                      <td>
                                                          <div class="form-check">
                                                              <input disabled class="form-check-input" type="radio" name="heroin-opiate" id="heroin-opiate-previous-history" value="Previous History" v-model="heroin" />
                                                              <label class="form-check-label" for="heroin-opiate-previous-history">
                                                                  Previous History
                                                              </label>
                                                          </div>
                                                      </td>
                                                      <td>
                                                          <div class="form-check">
                                                              <input disabled class="form-check-input" type="radio" name="heroin-opiate" id="heroin-opiate-current-use" value="Current Use" v-model="heroin" />
                                                              <label class="form-check-label" for="heroin-opiate-current-use">
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
                                                      <th>Cannabis<small style="color:red">*</small></th>
                                                      <td>
                                                          <div class="form-check">
                                                              <input disabled class="form-check-input" type="radio" name="cannabis" id="cannabis-none" value="None" v-model="cannabis" />
                                                              <label class="form-check-label" for="cannabis-none">
                                                                  None
                                                              </label>
                                                          </div>
                                                      </td>
                                                      <td>
                                                          <div class="form-check">
                                                              <input disabled class="form-check-input" type="radio" name="cannabis" id="cannabis-previous-history" value="Previous History" v-model="cannabis" />
                                                              <label class="form-check-label" for="cannabis-previous-history">
                                                                  Previous History
                                                              </label>
                                                          </div>
                                                      </td>
                                                      <td>
                                                          <div class="form-check">
                                                              <input disabled class="form-check-input" type="radio" name="cannabis" id="cannabis-current-use" value="Current Use" v-model="cannabis" />
                                                              <label class="form-check-label" for="cannabis-current-use">
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
                                                      <th>ATS<small style="color:red">*</small></th>
                                                      <td>
                                                          <div class="form-check">
                                                              <input disabled class="form-check-input" type="radio" name="ats" id="ats-none" value="None" v-model="ats" />
                                                              <label class="form-check-label" for="ats-none">
                                                                  None
                                                              </label>
                                                          </div>
                                                      </td>
                                                      <td>
                                                          <div class="form-check">
                                                              <input disabled class="form-check-input" type="radio" name="ats" id="ats-previous-history" value="Previous History" v-model="ats" />
                                                              <label class="form-check-label" for="ats-previous-history">
                                                                  Previous History
                                                              </label>
                                                          </div>
                                                      </td>
                                                      <td>
                                                          <div class="form-check">
                                                              <input disabled class="form-check-input" type="radio" name="ats" id="ats-current-use" value="Current Use" v-model="ats" />
                                                              <label class="form-check-label" for="ats-current-use">
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
                                                      <th>Inhalant<small style="color:red">*</small></th>
                                                      <td>
                                                          <div class="form-check">
                                                              <input disabled class="form-check-input" type="radio" name="inhalant" id="inhalant-none" value="None" v-model="inhalant" />
                                                              <label class="form-check-label" for="inhalant-none">
                                                                  None
                                                              </label>
                                                          </div>
                                                      </td>
                                                      <td>
                                                          <div class="form-check">
                                                              <input disabled class="form-check-input" type="radio" name="inhalant" id="inhalant-previous-history" value="Previous History" v-model="inhalant" />
                                                              <label class="form-check-label" for="inhalant-previous-history">
                                                                  Previous History
                                                              </label>
                                                          </div>
                                                      </td>
                                                      <td>
                                                          <div class="form-check">
                                                              <input disabled class="form-check-input" type="radio" name="inhalant" id="inhalant-current-use" value="Current Use" v-model="inhalant" />
                                                              <label class="form-check-label" for="inhalant-current-use">
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
                                                      <th>Alcohol<small style="color:red">*</small></th>
                                                      <td>
                                                          <div class="form-check">
                                                              <input disabled class="form-check-input" type="radio" name="alcohol" id="alcohol-none" value="None" v-model="alcohol" />
                                                              <label class="form-check-label" for="alcohol-none">
                                                                  None
                                                              </label>
                                                          </div>
                                                      </td>
                                                      <td>
                                                          <div class="form-check">
                                                              <input disabled class="form-check-input" type="radio" name="alcohol" id="alcohol-previous-history" value="Previous History" v-model="alcohol" />
                                                              <label class="form-check-label" for="alcohol-previous-history">
                                                                  Previous History
                                                              </label>
                                                          </div>
                                                      </td>
                                                      <td>
                                                          <div class="form-check">
                                                              <input disabled class="form-check-input" type="radio" name="alcohol" id="alcohol-current-use" value="Current Use" v-model="alcohol" />
                                                              <label class="form-check-label" for="alcohol-current-use">
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
                                                      <th>Tobacco<small style="color:red">*</small></th>
                                                      <td>
                                                          <div class="form-check">
                                                              <input disabled class="form-check-input" type="radio" name="tobacco" id="tobacco-none" value="None" v-model="tobacco" />
                                                              <label class="form-check-label" for="tobacco-none">
                                                                  None
                                                              </label>
                                                          </div>
                                                      </td>
                                                      <td>
                                                          <div class="form-check">
                                                              <input disabled class="form-check-input" type="radio" name="tobacco" id="tobacco-previous-history" value="Previous History" v-model="tobacco" />
                                                              <label class="form-check-label" for="tobacco-previous-history">
                                                                  Previous History
                                                              </label>
                                                          </div>
                                                      </td>
                                                      <td>
                                                          <div class="form-check">
                                                              <input disabled class="form-check-input" type="radio" name="tobacco" id="tobacco-current-use" value="Current Use" v-model="tobacco" />
                                                              <label class="form-check-label" for="tobacco-current-use">
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
                                                      <th>Others<small style="color:red">*</small></th>
                                                      <td>
                                                          <div class="form-check">
                                                              <input disabled class="form-check-input" type="radio" name="others" id="others-none" value="None" v-model="others" />
                                                              <label class="form-check-label" for="others-none">
                                                                  None
                                                              </label>
                                                          </div>
                                                      </td>
                                                      <td>
                                                          <div class="form-check">
                                                              <input disabled class="form-check-input" type="radio" name="others" id="others-previous-history" value="Previous History" v-model="others" />
                                                              <label class="form-check-label" for="others-previous-history">
                                                                  Previous History
                                                              </label>
                                                          </div>
                                                      </td>
                                                      <td>
                                                          <div class="form-check">
                                                              <input disabled class="form-check-input" type="radio" name="others" id="others-current-use" value="Current Use" v-model="others" />
                                                              <label class="form-check-label" for="others-current-use">
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
                                      <th>Past Medical/Surgical History<small style="color:red">*</small> :</th>
                                      <td>
                                          <textarea disabled class="form-control" placeholder="Please type here.." v-model="past_Medical"></textarea>
                                      </td>
                                  </tr>
                                  <tr>
                                      <th>Background History (Family/Personal)<small style="color:red">*</small> :</th>
                                      <td>
                                          <textarea disabled class="form-control" rows="15" placeholder="Please type here.." v-model="background_history"></textarea>
                                      </td>
                                  </tr>
                                  <tr>
                                      <th>WHO DAS Assessment<small style="color:red">*</small> :</th>
                                      <td>
                                          <table class="sub-table-form">
                                              <tbody>
                                                  <tr>
                                                      <td>
                                                          <input disabled type="text" class="form-control" name="" v-model="who_das_assessment" />
                                                      </td>
                                                      <!-- <td>
                                                          <button type="button" class="assessment-btn" @click="OnWhodassTest">
                                                              Assessment Test
                                                          </button>
                                                      </td> -->
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                                  <tr>
                                      <th>Mental State Examination<small style="color:red">*</small> :</th>
                                      <td>
                                          <textarea disabled class="form-control" rows="15" placeholder="Please type here.." v-model="mental_state_examination"></textarea>
                                      </td>
                                  </tr>
                                  <tr>
                                      <th>Summary Of Issues<small style="color:red">*</small> :</th>
                                      <td>
                                          <textarea disabled class="form-control" placeholder="Please type here.." v-model="summary_of_issues"></textarea>
                                      </td>
                                  </tr>
                                  <tr>
                                      <th>Management Plan<small style="color:red">*</small> :</th>
                                      <td>
                                          <textarea disabled class="form-control" rows="15" placeholder="Please type here.." v-model="management_plan"></textarea>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                          <div class="accordion form-accordion mt-3" id="accordionExample">
                              <div class="accordion-item">
                                  <h2 class="accordion-header" id="headingOne">
                                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                          OCCASION OF SERVICES
                                      </button>
                                  </h2>
                                  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                      <div class="accordion-body">
                                          <div class="row mb-3">
                                              <label class="col-sm-4 col-form-label">Location Of Services<small style="color:red">*</small></label>
                                              <div class="col-sm-8">
                                                  <select disabled class="form-select" v-model="location_services_id">
                                                      <option value="0">
                                                          Select location of services
                                                      </option>
                                                      <option v-for="loc in locationlist" v-bind:key="loc.id" v-bind:value="loc.id">
                                                          {{ loc.section_value }}
                                                      </option>
                                                  </select>
                                              </div>
                                          </div>
                                          <!-- close-row -->
                                          <div class="row mb-3">
                                              <label class="col-sm-4 col-form-label">Type Of Diagnosis<small style="color:red">*</small></label>
                                              <div class="col-sm-8">
                                                  <select disabled class="form-select" v-model="type_diagnosis_id">
                                                      <option value="0">Select Diagnosis</option>
                                                      <option v-for="catcode in diagonisislist" v-bind:key="catcode.id" v-bind:value="catcode.id">
                                                          {{ catcode.icd_code }} {{catcode.icd_name}}
                                                      </option>
                                                  </select>
                                              </div>
                                          </div>
                                          <!-- close row -->
                                          <div class="row mb-3"><label class="col-sm-4 col-form-label">Additional Diagnosis</label>
                                              <div class="col-sm-8">
                                                  <select disabled id="additionalbox" v-model="additional_diagnosis" class="form-select multiselect" multiple="multiple">
                                                      <option value="0">Please Select</option>
                                                      <option v-for="catcode in diagonisislist" v-bind:key="catcode.id" v-bind:value="catcode.id">
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
                                                      <input disabled class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="assisstance" v-model="category_services" />
                                                      <label class="form-check-label" for="inlineRadio1">Assisstance / Supervision</label>
                                                  </div>
                                                  <div class="form-check form-check-inline">
                                                      <input disabled class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="clinical-work" v-model="category_services" />
                                                      <label class="form-check-label" for="inlineRadio2">Clinical Work / Procedure
                                                      </label>
                                                  </div>
                                                  <div class="form-check form-check-inline">
                                                      <input disabled class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="external" v-model="category_services" />
                                                      <label class="form-check-label" for="inlineRadio3">External</label>
                                                  </div>
                                              </div>
                                          </div>
                                          <!-- close-row -->
                                          <!-- hide-div -->
                                          <div id="assisstance" class="assisstance services hide mb-3">
                                              <div class="row">
                                                  <div class="col-md-6 mb-3">
                                                      <label class="form-label">Services<small style="color:red">*</small></label>
                                                      <select disabled class="form-select" v-model="services_id">
                                                          <option value="0">Select Service</option>
                                                          <option v-for="slt in assistancelist" v-bind:key="slt.id" v-bind:value="slt.id">
                                                              {{ slt.section_value }}
                                                          </option>
                                                      </select>
                                                  </div>
                                              </div>
                                          </div>
                                          <!-- 01 -->
                                          <div id="clinical-work" class="clinical-work services hide mb-3">
                                              <div class="row">
                                                  <div class="col-md-6 mb-3">
                                                      <label class="form-label">ICD 9 CODE<small style="color:red">*</small></label>
                                                      <select disabled class="form-select" v-model="code_id" @change="onCategorycodebind($event)">
                                                          <option value="0">Select code</option>
                                                          <option v-for="type in codelist" v-bind:key="type.id" v-bind:value="type.id">
                                                              {{ type.icd_category_code }} {{type.icd_category_name}}
                                                          </option>
                                                      </select>
                                                  </div>
                                                  <div class="col-md-6 mb-3">
                                                      <div><label class="form-label">ICD 9 SUB CODE</label></div>
                                                      <div>
                                                          <div class="mt-2 align-items-flex-start">
                                                              <select disabled id='subcode' v-model="sub_code_id" class="form-select multiselect" multiple="multiple" style="width:100%">
                                                                  <option value="0">Select sub code</option>
                                                                  <option v-for="catcode in icdcatcodelist" v-bind:key="catcode.id" v-bind:value="catcode.id">
                                                                      {{ catcode.icd_code }}
                                                                      {{catcode.icd_name}}
                                                                  </option>
                                                              </select>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div class="row">
                                                  <div class="col-md-6 mb-3">
                                                      <label class="form-label">Additional ICD 9 CODE</label>
                                                      <select disabled class="form-select" v-model="additional_code_id" @change="onCategorycodebind2($event)">
                                                          <option value="0">Select code</option>
                                                          <option v-for="type in additionalcodelist" v-bind:key="type.id" v-bind:value="type.id">
                                                              {{ type.icd_category_code }} {{type.icd_category_name}}
                                                          </option>
                                                      </select>
                                                  </div>
                                                  <div class="col-md-6 mb-3">
                                                      <div><label class="form-label">Additional ICD 9 SUB CODE</label></div>
                                                      <div>
                                                          <div class="mt-2 align-items-flex-start">
                                                              <select disabled id='addsubcode' v-model="additional_subcode" class="form-select multiselect" multiple="multiple" style="width:100%">
                                                                  <option value="0">Select sub code</option>
                                                                  <option v-for="catcode in add_icdcatcodelist" v-bind:key="catcode.id" v-bind:value="catcode.id">
                                                                      {{ catcode.icd_code }}
                                                                      {{catcode.icd_name}}
                                                                  </option>
                                                              </select>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <!-- 02 -->
                                          <div id="external" class="external services hide mb-3">
                                              <div class="row">
                                                  <div class="col-md-6 mb-3">
                                                      <label class="form-label">Services<small style="color:red">*</small></label>
                                                      <select disabled class="form-select" v-model="serviceid">
                                                          <option value="0">Select Service</option>
                                                          <option v-for="slt in externallist" v-bind:key="slt.id" v-bind:value="slt.id">
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
                                                  <label class="form-label">Complexity Of Service<small style="color:red">*</small></label>
                                                  <select disabled class="form-select" v-model="complexity_services_id">
                                                      <option value="0">
                                                          Select Complexity Of Service
                                                      </option>
                                                      <option v-for="cm in comlexcitylist" v-bind:key="cm.id" v-bind:value="cm.id">
                                                          {{ cm.section_value }}
                                                      </option>
                                                  </select>
                                              </div>
                                              <div class="col-md-6 mb-3">
                                                  <label class="form-label">Outcome<small style="color:red">*</small></label>
                                                  <select disabled class="form-select" v-model="outcome_id">
                                                      <option value="0">Select outcome</option>
                                                      <option v-for="out in outcomelist" v-bind:key="out.id" v-bind:value="out.id">
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
                                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                          MEDICATION
                                      </button>
                                  </h2>
                                  <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                      <div class="accordion-body">
                                          <div class="col-md-12 mb-3">
                                              <label class="form-label">Medication</label>
                                              <textarea disabled class="form-control textarea" placeholder="Please Type Prescription Here" v-model="medication_des"></textarea>
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
                                      <th>Zone<small style="color:red">*</small> :</th>
                                      <td><input disabled type="text" class="form-control" name="" v-model="zone" /></td>
                                  </tr>
                                  <tr>
                                      <th>Case Manager<small style="color:red">*</small> :</th>
                                      <td><input disabled type="text" class="form-control" name="" v-model="case_manager" /></td>
                                  </tr>
                                  <tr>
                                      <th>Specialist<small style="color:red">*</small> :</th>
                                      <td><input disabled type="text" class="form-control" name="" v-model="specialist" /></td>
                                  </tr>
                                  <tr>
                                      <th>Date<small style="color:red">*</small> :</th>
                                      <td><input disabled type="date" class="form-control" name="" v-model="date" /></td>
                                  </tr>
                              </tbody>
                          </table>
                          <p v-if="errorList.length">
                              <ul>
                                  <li style="color:red" v-for='err in errorList' :key='err'>
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
      components: {
          CommonSidebar,
          CommonHeader
      },
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
              additionalcodelist: [],
              add_icdcatcodelist: [],
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
              appId: 0,
              additional_code_id: 0,
              additional_diagnosis: 0,
              additional_subcode: 0,
          };
      },
      beforeMount() {
          this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
          let urlParams = new URLSearchParams(window.location.search);
          this.Id = urlParams.get("id");
          this.appId = urlParams.get("appId");
          console.log("my index", this.Id);
          if (this.Id) {}
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

              $(".multiselect").select2({
                  placeholder: "Please Select",
              });
          });
      },
      methods: {
          GoBack() {
              if (this.type == 'view') {
                  this.$router.go(-1);
              } else {
                  this.$router.push({
                      path: "/modules/Intervention/patient-summary",
                      query: {
                          id: this.Id,
                          appId: this.appId
                      },
                  });
              }
          },
          async GetPatientdetails() {
              const headers = {
                  Authorization: "Bearer " + this.userdetails.access_token,
                  Accept: "application/json",
                  "Content-Type": "application/json",
              };
              const response = await this.$axios.post(
                  "patient-registration/getPatientRegistrationByIdShortDetails", {
                      id: this.Id,
                  }, {
                      headers
                  }
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
                  "general-setting/list?section=" + "complexity-of-service", {
                      headers
                  }
              );
              if (response.data.code == 200 || response.data.code == "200") {
                  this.comlexcitylist = response.data.list;
              } else {
                  this.comlexcitylist = [];
              }
              const response1 = await this.$axios.get("service/list", {
                  headers
              });
              if (response1.data.code == 200 || response1.data.code == "200") {
                  this.servicelist = response1.data.list;
              } else {
                  this.servicelist = [];
              }
              const response2 = await this.$axios.get(
                  "general-setting/list?section=" + "outcome", {
                      headers
                  }
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
                  "general-setting/list?section=" + "location-of-services", {
                      headers,
                  }
              );
              if (response5.data.code == 200 || response5.data.code == "200") {
                  this.locationlist = response5.data.list;
              } else {
                  this.locationlist = [];
              }
              const respons = await this.$axios.get(
                  "general-setting/list?section=" + "assistance-or-supervision", {
                      headers
                  }
              );
              if (respons.data.code == 200 || respons.data.code == "200") {
                  this.assistancelist = respons.data.list;
              } else {
                  this.assistancelist = [];
              }
              const respon = await this.$axios.get(
                  "general-setting/list?section=" + "external", {
                      headers
                  }
              );
              if (respon.data.code == 200 || respon.data.code == "200") {
                  this.externallist = respon.data.list;
              } else {
                  this.externallist = [];
              }
              const response6 = await this.$axios.get("diagnosis/getIcd9codeList", {
                  headers,
              });
              if (response6.data.code == 200 || response6.data.code == "200") {
                  this.additionalcodelist = response6.data.list;
              } else {
                  this.additionalcodelist = [];
              }
          },
          async onCategorycodebind(event) {
              const headers = {
                  Authorization: "Bearer " + this.userdetails.access_token,
                  Accept: "application/json",
                  "Content-Type": "application/json",
              };
              const response = await this.$axios.post(
                  "diagnosis/getIcd9subcodeList", {
                      icd_category_code: event.target.value
                  }, {
                      headers
                  }
              );
              if (response.data.code == 200 || response.data.code == "200") {
                  this.icdcatcodelist = response.data.list;
              } else {
                  this.icdcatcodelist = [];
              }
          },
          async onCategorycodebind2(event) {
              const headers = {
                  Authorization: "Bearer " + this.userdetails.access_token,
                  Accept: "application/json",
                  "Content-Type": "application/json",
              };
              console.log("my id", event);
              const response = await this.$axios.post(
                  "diagnosis/getIcd9subcodeList", {
                      icd_category_code: event.target.value
                  }, {
                      headers
                  }
              );
              if (response.data.code == 200 || response.data.code == "200") {
                  this.add_icdcatcodelist = response.data.list;
              } else {
                  this.add_icdcatcodelist = [];
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
                  "/patient-appointment-details/fetchViewHistoryListDetails", {
                      id: this.pid,
                      type: "PatientIndexForm",
                  }, {
                      headers
                  }
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
                  this.sub_code_id = response.data.Data[0].sub_code_id.split(",");
                  $("#subcode")
                      .val(this.sub_code_id)
                      .trigger("change");
                  this.complexity_services_id =
                      response.data.Data[0].complexity_of_service;
                  this.outcome_id = response.data.Data[0].outcome;
                  this.medication_des = response.data.Data[0].medication;
                  this.zone = response.data.Data[0].zone;
                  this.case_manager = response.data.Data[0].case_manager;
                  this.specialist = response.data.Data[0].specialist;
                  this.date = response.data.Data[0].date;
                  this.additional_diagnosis = response.data.Data[0].additional_diagnosis.split(",");
                  $("#additionalbox")
                      .val(this.additional_diagnosis)
                      .trigger("change");

                  this.additional_subcode = response.data.Data[0].additional_subcode.split(",");
                  $("#addsubcode")
                      .val(this.additional_subcode)
                      .trigger("change");
                  this.additional_code_id = response.data.Data[0].additional_code_id;

                  if(this.category_services=='assisstance'){
                        $(document).ready(function(){
                            $("#assisstance").removeClass("hide");
                        });
                    }else if(this.category_services=='clinical-work'){
                        $(document).ready(function(){
                            $("#clinical-work").removeClass("hide");
                        });
                    }else if(this.category_services=='external'){
                        $(document).ready(function(){
                            $("#external").removeClass("hide");
                        });
                    }

                  this.GetList();
                  this.GetPatientdetails();
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
                          icd_category_code: this.additional_code_id
                      }, {
                          headers
                      }
                  );
                  if (response3.data.code == 200 || response3.data.code == "200") {
                      this.add_icdcatcodelist = response3.data.list;
                  } else {
                      this.add_icdcatcodelist = [];
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
