<template>
  <div id="layoutSidenav">
    <PatientLoginSidebar />
    <div id="layoutSidenav_content">
      <PatientLoginHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1> Counseling Progress Note </h1>
            <!-- <a href="#"><i class="fal fa-plus"></i> Add</a> -->
          </div>
          <div class="card mb-4">
            <div class="card-body">
              <form method="post" @submit.prevent="Oncounsellingprogressnote">
                  <table class="notes">
                                          <thead>
                                            <tr>
                                              <th colspan="2">Patient Details</th>
                                              
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr>
                                              <th>MRN:</th>
                                              <td>MS10001</td>
                                            </tr>
                                            <tr>
                                              <th>Patient Name:</th>
                                              <td>Mr. Muhammad</td>
                                            </tr>
                                            <tr>
                                              <th>NRIC NO:</th>
                                              <td>810109-12-5873</td>
                                            </tr>
                                            <tr>
                                              <th>Age:</th>
                                              <td>40</td>
                                            </tr>
                                            <tr>
                                              <th>Contact No:</th>
                                              <td> 012-3456789</td>
                                            </tr>
                                            <tr>
                                              <th>Gender:</th>
                                              <td>Male </td>
                                            </tr>
                                            <tr>
                                              <th>DOB:</th>
                                              <td>09/01/1981</td>
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
                                              <th>Date Performed: </th>
                                              <td>
                                                <input type="date" class="form-control mt-3" v-model="therapy_date">
                                              </td>
                                            </tr>
                                            <tr>
                                              <th>Time Performed: </th>
                                              <td>
                                                <input type="time" class="form-control" v-model="therapy_time">
                                              </td>
                                            </tr>
                                            <tr>
                                              <th>Diagnosis: </th>
                                              <td>
                                                <select class="form-select" v-model="diagnosis_id" aria-label="Default select example">
                                                  <option selected>Select Diagnosis</option>
                                                  <option value="1">..</option>
                                                </select>
                                              </td>
                                            </tr>
                                            <tr>
                                              <th>Therapy Session:</th>
                                              <td>
                                                  <table class="sub-table">
                                                      <thead>
                                                          <tr>
                                                            <th>Frequency Of Session: </th>
                                                            <th>Mode Of Therapy:  </th>
                                                            <th>Mode Of Therapy:</th>
                                                        </tr>
                                                      </thead>
                                                      <tbody>
                                                        <tr>
                                                            <td class="other-input1">
                                                                    <div class="form-check">
                                                                      <input class="form-check-input" value="Twice A Week" v-model="frequency_session" type="radio" name="frequency-of-session" id="1">
                                                                      <label class="form-check-label" for="1">
                                                                        Twice A Week
                                                                      </label>
                                                                    </div>

                                                                    <div class="form-check">
                                                                      <input class="form-check-input" value="Once A Week" v-model="frequency_session" type="radio" name="frequency-of-session" id="2">
                                                                      <label class="form-check-label" for="2">
                                                                        Once A Week
                                                                      </label>
                                                                    </div>

                                                                    <div class="form-check">
                                                                      <input class="form-check-input" value="Once In Two  Week" v-model="frequency_session" type="radio" name="frequency-of-session" id="3">
                                                                      <label class="form-check-label" for="3">
                                                                        Once In Two Weeks 
                                                                      </label>
                                                                    </div>
                                                                    <div class="form-check">
                                                                      <input class="form-check-input" value="Once A Month" v-model="frequency_session" type="radio" name="frequency-of-session" id="4">
                                                                      <label class="form-check-label" for="4">
                                                                        Once A Month
                                                                      </label>
                                                                    </div>
                                                                    <div class="form-check">
                                                                      <input class="form-check-input" v-model="frequency_session" type="radio" name="frequency-of-session" id="5" value="therapy-1">
                                                                      <label class="form-check-label" for="5">
                                                                        Others 
                                                                      </label>
                                                                    </div>
                                                                    <div class="therapy-1 hide others1">
                                                                    <input type="text" v-model="frequency_session_other" class="form-control" name="" placeholder="Please Specify">
                                                                    </div>
                                                            </td>

                                                            <td class="other-input2">
                                                                  <div class="form-check">
                                                                  <input class="form-check-input"  value="Psychodynamic" v-model="model_therapy" type="radio" name="mode-Of-therapy" id="6">
                                                                  <label class="form-check-label" for="6">
                                                                    Psychodynamic
                                                                  </label>
                                                                </div>

                                                                <div class="form-check">
                                                                  <input class="form-check-input"  value="Cognitive" v-model="model_therapy" type="radio" name="mode-Of-therapy" id="7">
                                                                  <label class="form-check-label" for="7">
                                                                    Cognitive
                                                                  </label>
                                                                </div>

                                                                <div class="form-check">
                                                                  <input class="form-check-input" value="Behavioral" v-model="model_therapy" type="radio" name="mode-Of-therapy" id="8">
                                                                  <label class="form-check-label" for="8">
                                                                   Behavioral
                                                                  </label>
                                                                </div>
                                                                <div class="form-check">
                                                                  <input class="form-check-input" value="Systemic" v-model="model_therapy" type="radio" name="mode-Of-therapy" id="9">
                                                                  <label class="form-check-label" for="9">
                                                                    Systemic
                                                                  </label>
                                                                </div>
                                                                <div class="form-check">
                                                                  <input class="form-check-input" value="Supportive" v-model="model_therapy" type="radio" name="mode-Of-therapy" id="10">
                                                                  <label class="form-check-label" for="10">
                                                                    Supportive
                                                                  </label>
                                                                </div>

                                                                <div class="form-check">
                                                                  <input class="form-check-input" value="Eclectic" v-model="model_therapy" type="radio" name="mode-Of-therapy" id="11">
                                                                  <label class="form-check-label" for="11">
                                                                    Eclectic 
                                                                  </label>
                                                                </div>

                                                                <div class="form-check">
                                                                  <input class="form-check-input"  v-model="model_therapy" type="radio" name="mode-Of-therapy" id="12" value="therapy-2">
                                                                  <label class="form-check-label" for="12">
                                                                    Others
                                                                  </label>
                                                                </div>
                                                                <div class="therapy-2 hide others2">
                                                                    <input type="text" v-model="model_therapy_other" class="form-control" name="" placeholder="Please Specify">
                                                                </div>
                                                            </td>
                                                            <td class="other-input3">
                                                                  <div class="form-check">
                                                                  <input class="form-check-input" value="Individual" v-model="mode_therapy" type="radio" name="mode-Of-therapy1" id="1.1">
                                                                  <label class="form-check-label" for="1.1">
                                                                    Individual
                                                                  </label>
                                                                </div>

                                                                <div class="form-check">
                                                                  <input class="form-check-input" value="Group" v-model="mode_therapy" type="radio" name="mode-Of-therapy1" id="1.2">
                                                                  <label class="form-check-label" for="1.2">
                                                                    Group 
                                                                  </label>
                                                                </div>

                                                                <div class="form-check">
                                                                  <input class="form-check-input" value="Couple/Marital" v-model="mode_therapy" type="radio" name="mode-Of-therapy1" id="1.3">
                                                                  <label class="form-check-label" for="1.3">
                                                                    Couple/Marital
                                                                  </label>
                                                                </div>
                                                                <div class="form-check">
                                                                  <input class="form-check-input" value="Family" v-model="mode_therapy" type="radio" name="mode-Of-therapy1" id="1.4">
                                                                  <label class="form-check-label" for="1.4">
                                                                    Family 
                                                                  </label>
                                                                </div>
                                                                <div class="form-check">
                                                                  <input class="form-check-input"  v-model="mode_therapy" type="radio" name="mode-Of-therapy1" id="1.5" value="therapy-3">
                                                                  <label class="form-check-label" for="1.5">
                                                                    Others 
                                                                  </label>
                                                                </div>
                                                                <div class="therapy-3 hide others3">
                                                                    <input type="text" class="form-control" v-model="mode_therapy_other" name="" placeholder="Please Specify">
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
                                                     
                                                      <tbody>
                                                          <tr>
                                                            <td>
                                                                 <label class="form-label">Comments On Therapy Sessions:</label>
                                                                  <textarea class="form-control textarea" v-model="comment_therapy_session" placeholder="Enter Comments"></textarea>
                                                              </td>
                                                          </tr>
                                                      </tbody>
                                                  </table>
                                              </td>
                                            </tr>
                                            <tr>
                                              <th>Patent's Condition: </th>
                                              <td>
                                                  <table class="sub-table">
                                                      <thead>
                                                          <tr>
                                                            <th>Condition (Since Last Session): </th>
                                                        </tr>
                                                      </thead>
                                                      <tbody>
                                                        <tr>
                                                            <td class=" other-input">
                                                                    <div class="form-check">
                                                                      <input class="form-check-input" value="Improved" v-model="patent_condition" type="radio" name="condition" id="4.1">
                                                                      <label class="form-check-label" for="4.1">
                                                                        Improved
                                                                      </label>
                                                                    </div>

                                                                    <div class="form-check">
                                                                      <input class="form-check-input" value="Unchanged" v-model="patent_condition" type="radio" name="condition" id="4.2">
                                                                      <label class="form-check-label" for="4.2">
                                                                        Unchanged
                                                                      </label>
                                                                    </div>

                                                                    <div class="form-check">
                                                                      <input class="form-check-input" value="Worsened" v-model="patent_condition" type="radio" name="condition" id="4.3">
                                                                      <label class="form-check-label" for="4.3">
                                                                        Worsened
                                                                      </label>
                                                                    </div>
                                                                    <div class="form-check">
                                                                      <input class="form-check-input"  v-model="patent_condition" type="radio" name="condition" id="4.5" value="condition-others">
                                                                      <label class="form-check-label" for="4.5">
                                                                        Others 
                                                                      </label>
                                                                    </div>
                                                                    <div class="condition-others hide others">
                                                                        <input type="text" v-model="patent_condition_other" class="form-control" name="" placeholder="Please Specify">
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
                                                     
                                                      <tbody>
                                                          <tr>
                                                            <td>
                                                                 <label class="form-label">Comments On Patent's Condition:</label>
                                                                  <textarea class="form-control textarea" v-model="comment_patent_condition" placeholder="Enter Comments"></textarea>
                                                              </td>
                                                          </tr>
                                                      </tbody>
                                                  </table>
                                              </td>
                                            </tr>
                                            

                                          </tbody>
                                        </table>

                                        <table class="notes">
                                          <thead>
                                            <tr>
                                              <th colspan="2">Session Details </th>
                                              
                                            </tr>
                                          </thead>
                                          <tbody>
                                            
                                            <tr>
                                              <th>Session Details :</th>
                                              <td><input type="text" class="form-control mt-3" v-model="session_details"></td>
                                            </tr>
                                            <tr>
                                              <th>Issues/Problems Dealt With Today:</th>
                                              <td><input type="text" class="form-control" v-model="session_issues"></td>
                                            </tr>
                                            <tr>
                                              <th>Conduct Of Session:</th>
                                              <td><input type="text" class="form-control" v-model="conduct_session"></td>
                                            </tr>
                                            <tr>
                                              <th>Outcome Of Session:</th>
                                              <td><input type="text" class="form-control" v-model="outcome_session"></td>
                                            </tr>
                                            <tr>
                                              <th>Transference/countertransference:</th>
                                              <td><input type="text" class="form-control" v-model="transference_session"></td>
                                            </tr>
                                            <tr>
                                              <th>Duration Of Session:</th>
                                              <td><input type="text" class="form-control" v-model="duration_session"></td>
                                            </tr>
                                            <tr>
                                              <th>Other Comments:</th>
                                              <td><input type="text" class="form-control" v-model="other_comment_session"></td>
                                            </tr>

                                            <tr>
                                              <th>Name:</th>
                                              <td><input type="text" class="form-control" v-model="name"></td>
                                            </tr>
                                            <tr>
                                              <th>Designation:</th>
                                              <td><input type="text" class="form-control" v-model="designation"></td>
                                            </tr>
                                            <tr>
                                              <th>Date:</th>
                                              <td><input type="date" class="form-control" v-model="date_session"></td>
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
                              <option value="1">On-site (Mentari)</option>
                              <option value="2">Home Visit</option>
                              <option value="3">Workplace Visit</option>
                              <option value="4">Telephone Or Virtual</option>
                              <option value="5">Main Hospital</option>
                              <option value="6">
                                Correspondence (Memo , Online Platform)
                              </option>
                              <option value="7">External (Others)</option>
                            </select>
                          </div>
                        </div>
                        <!-- close-row -->
                        <div class="row mb-3">
                          <label class="col-sm-4 col-form-label"
                            >Type Of Diagnosis</label
                          >
                          <div class="col-sm-8">
                            <select
                              class="form-select"
                              v-model="type_diagnosis_id"
                            >
                              <option selected>
                                Select ICD 10/ICD 11 CODE
                              </option>
                              <option value="1">...</option>
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
                        v-for="slt in servicelist"
                        v-bind:key="slt.id"
                        v-bind:value="slt.id"
                      >
                        {{ slt.service_name }}
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
              {{ type.icd_type_name }}
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
              {{ catcode.icd_category_code }}
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
                        v-for="slt in servicelist"
                        v-bind:key="slt.id"
                        v-bind:value="slt.id"
                      >
                        {{ slt.service_name }}
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
 <p v-if="errorList.length">
                          <ul>
                           <li style="color:red"  v-for='err in errorList' :key='err' >
                           {{ err }}
                             </li>
                        </ul>
                       </p>
                <div class="d-flex">
                  <button
                    type="submit"
                    class="btn btn-warning btn-text ml-auto"
                  >
                    <i class="far fa-save"></i> Save
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
import PatientLoginSidebar from "../../../components/Patient/PatientLoginSidebar.vue";
import PatientLoginHeader from "../../../components/Patient/PatientLogin_Header.vue";
import Physectristdetails from "../../../components/Patient/physectristdetails.vue";
export default {
  components: { PatientLoginSidebar, PatientLoginHeader, Physectristdetails },
  name: "counseling-progress-note",
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    $(document).ready(function () {
      $('.other-input input[type="radio"]').click(function () {
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $(".others").not(targetBox).hide();
        $(targetBox).show();
      });

      $('.other-input1 input[type="radio"]').click(function () {
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $(".others1").not(targetBox).hide();
        $(targetBox).show();
      });

      $('.other-input2 input[type="radio"]').click(function () {
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $(".others2").not(targetBox).hide();
        $(targetBox).show();
      });

      $('.other-input3 input[type="radio"]').click(function () {
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $(".others3").not(targetBox).hide();
        $(targetBox).show();
      });

      $('.form-accordion input[type="radio"]').click(function () {
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $(".services").not(targetBox).hide();
        $(targetBox).show();
      });
    });
    let urlParams = new URLSearchParams(window.location.search);
    this.Id = urlParams.get("id");
    this.GetList();
  },
  data() {
    return {
      userdetails: null,
      errorList: [],
      servicelist: [],
      outcomelist: [],
      comlexcitylist: [],
      codelist: [],
      icdcatcodelist: [],
      Id: 0,
      therapy_date: "",
      therapy_time: "",
      diagnosis_id: 0,
      frequency_session: "",
      frequency_session_other: "",
      model_therapy: "",
      model_therapy_other: "",
      mode_therapy: "",
      mode_therapy_other: "",
      comment_therapy_session: "",
      patent_condition: "",
      patent_condition_other: "",
      comment_patent_condition: "",
      session_details: "",
      session_issues: "",
      conduct_session: "",
      outcome_session: "",
      transference_session: "",
      duration_session: "",
      other_comment_session: "",
      name: "",
      designation: "",
      date_session: "",
      location_services_id: "",
      type_diagnosis_id: 0,
      category_services: "",
      code_id: 0,
      sub_code_id: 0,
      complexity_services_id: 0,
      outcome_id: 0,
      medication_des: "",
      patient_mrn_id: "",
      services_id: 0,
      serviceid: 0,
      validate: true,
    };
  },
  methods: {
    async Oncounsellingprogressnote() {
      this.errorList = [];
      try {
        if (!this.therapy_date) {
          this.errorList.push("Date Performed is required");
        }
        if (!this.therapy_time) {
          this.errorList.push("Time Performed is required");
        }
        if (!this.diagnosis_id) {
          this.errorList.push("Diagnosis is required");
        }
        if (!this.frequency_session) {
          this.errorList.push("FREQUENCY OF SESSION is required");
        }
        if (!this.model_therapy) {
          this.errorList.push("	MODE OF THERAPY is required");
        }
        if (!this.mode_therapy) {
          this.errorList.push("MODE OF THERAPY is required");
        }
        if (!this.comment_therapy_session) {
          this.errorList.push("Comments On Therapy Sessions is required");
        }
        if (!this.patent_condition) {
          this.errorList.push("Patent's Condition is required");
        }
        if (!this.comment_patent_condition) {
          this.errorList.push("Comments On Patent's Condition is required");
        }
        if (!this.session_details) {
          this.errorList.push("Session Details is required");
        }
        if (!this.session_issues) {
          this.errorList.push("Issues/Problems  is required");
        }
        if (!this.conduct_session) {
          this.errorList.push("Conduct Of Session is required");
        }
        if (!this.outcome_session) {
          this.errorList.push("Outcome Of Session is required");
        }
        if (!this.transference_session) {
          this.errorList.push("Transference/countertransference is required");
        }
        if (!this.duration_session) {
          this.errorList.push("Duration Of Session is required");
        }
        if (!this.other_comment_session) {
          this.errorList.push("Other Comments is required");
        }
        if (!this.name) {
          this.errorList.push("Name is required");
        }
        if (!this.designation) {
          this.errorList.push("Designation is required");
        }
        if (!this.date_session) {
          this.errorList.push("Date is required");
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
        if (!this.medication_des) {
          this.errorList.push("Medication is required");
        }
        if (
          this.therapy_date &&
          this.therapy_time &&
          this.diagnosis_id &&
          this.frequency_session &&
          this.model_therapy &&
          this.comment_therapy_session &&
          this.patent_condition &&
          this.comment_patent_condition &&
          this.session_details &&
          this.session_issues &&
          this.conduct_session &&
          this.outcome_session &&
          this.transference_session &&
          this.duration_session &&
          this.other_comment_session &&
          this.name &&
          this.designation &&
          this.date_session &&
          this.location_services_id &&
          this.type_diagnosis_id &&
          this.category_services &&
          this.complexity_services_id &&
          this.outcome_id &&
          this.medication_des &&
          this.validate
        ) {
          this.loader = true;
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          const response = await this.$axios.post(
            "counselling-progress-note/add",
            {
              added_by: this.userdetails.user.id.toString(),
              therapy_date: this.therapy_date,
              therapy_time: this.therapy_time,
              diagnosis_id: this.diagnosis_id,
              frequency_session: this.frequency_session,
              frequency_session_other: this.frequency_session_other,
              model_therapy: this.model_therapy,
              model_therapy_other: this.model_therapy_other,
              mode_therapy: this.mode_therapy,
              mode_therapy_other: this.mode_therapy_other,
              comment_therapy_session: this.comment_therapy_session,
              patent_condition: this.patent_condition,
              patent_condition_other: this.patent_condition_other,
              comment_patent_condition: this.comment_patent_condition,
              session_details: this.session_details,
              session_issues: this.session_issues,
              conduct_session: this.conduct_session,
              outcome_session: this.outcome_session,
              transference_session: this.transference_session,
              duration_session: this.duration_session,
              other_comment_session: this.other_comment_session,
              name: this.name,
              designation: this.designation,
              date_session: this.date_session,
              location_services_id: this.location_services_id,
              type_diagnosis_id: this.type_diagnosis_id,
              category_services: this.category_services,
              code_id: this.code_id,
              sub_code_id: this.sub_code_id,
              complexity_services_id: this.complexity_services_id,
              outcome_id: this.outcome_id,
              medication_des: this.medication_des,
              patient_mrn_id: this.Id,
              services_id: this.services_id,
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
      const response3 = await this.$axios.get(
        "icd-setting/icdtype/getIcdTypeCodeList",
        {
          headers,
        }
      );
      if (response3.data.code == 200 || response3.data.code == "200") {
        this.codelist = response3.data.list;
      } else {
        this.codelist = [];
      }
    },
    async onCategorycodebind(event) {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "icd-setting/getIcdTypeWiseCategoryCodeList/" + event.target.value,
        { headers }
      );
      if (response.data.code == 200 || response.data.code == "200") {
        this.icdcatcodelist = response.data.list;
      } else {
        this.icdcatcodelist = [];
      }
    },
    resetmodel() {
      this.therapy_date = "";
      this.therapy_time = "";
      this.diagnosis_id = 0;
      this.frequency_session = "";
      this.frequency_session_other = "";
      this.model_therapy = "";
      this.model_therapy_other = "";
      this.mode_therapy = "";
      this.mode_therapy_other = "";
      this.comment_therapy_session = "";
      this.patent_condition = "";
      this.patent_condition_other = "";
      this.comment_patent_condition = "";
      this.session_details = "";
      this.session_issues = "";
      this.conduct_session = "";
      this.outcome_session = "";
      this.transference_session = "";
      this.duration_session = "";
      this.other_comment_session = "";
      this.name = "";
      this.designation = "";
      this.date_session = "";
      this.location_services_id = 0;
      this.type_diagnosis_id = 0;
      this.category_services = "";
      this.code_id = 0;
      this.sub_code_id = 0;
      this.complexity_services_id = 0;
      this.outcome_id = 0;
      this.medication_des = "";
      this.services_id = 0;
    },
  },
};
</script>
<style scoped>
.hide {
  display: none;
}
</style>