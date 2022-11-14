<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <div class="container-fluid px-4">
          <PatientDetails />
          <div class="row">
            <div class="col-sm-8">
              <div class="accordion mb-4 accordion-box" id="accordion2">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading1">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse1"
                      aria-expanded="true"
                      aria-controls="collapse1"
                    >
                      Visit History
                    </button>
                  </h2>
                  <div
                    id="collapse1"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading1"
                    data-bs-parent="#accordion2"
                  >
                    <div class="accordion-body">
                      <table
                        class="table table-striped data-table1"
                        style="width: 100%"
                      >
                        <thead>
                          <tr>
                            <th>No</th>
                            <th width="150">Clinical Activity</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Created By</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(hst, index) in historylist" :key="index">
                            <td>{{index+1}}</td>
                            <td>{{hst.section_name}}</td>
                            <td>
                              <p v-if="hst.status">Completed</p>
                                <p v-if="!hst.status">Pending</p>
                              </td>
                            <td>{{hst.date}}</td>
                            <td>{{formatetime(hst.created_at)}}</td>
                            <td>{{hst.name}}</td>
                            <td>
                              <a style="cursor:pointer;" @click="OnHistoryview(hst)"  class="view"
                                ><i class="fas fa-eye"></i
                              ></a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <!-- accordion-item -->
                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading2">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse2"
                      aria-expanded="false"
                      aria-controls="collapse2"
                    >
                      Appointment
                    </button>
                  </h2>
                  <div
                    id="collapse2"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading2"
                    data-bs-parent="#accordion2"
                  >
                    <div class="accordion-body">
                      <table class="info-table" width="100%">
                        <thead>
                          <tr>
                            <th width="40%"></th>
                            <th width="60%"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Next Appointment:</td>
                            <td v-if="nextappointmentdetails">{{nextappointmentdetails.next}}</td>
                          </tr>
                          <tr>
                            <td>Recent Visit:</td>
                            <td v-if="nextappointmentdetails">{{nextappointmentdetails.prev}}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <!-- accordion-item -->
                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading3">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse3"
                      aria-expanded="false"
                      aria-controls="collapse3"
                    >
                      Clinical Information
                    </button>
                  </h2>
                  <div
                    id="collapse3"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading3"
                    data-bs-parent="#accordion2"
                  >
                    <div class="accordion-body">
                      <div class="row">
                        <div class="col-sm-6">
                          <table
                            class="info-table clinical-information"
                            width="100%"
                          >
                            <tbody>
                              <tr>
                                <td>Date/Time :</td>
                                <td v-if="clinicalinfo">
                                   {{ clinicalinfo.date_time }}
                                </td>
                              </tr>
                              <tr>
                                <td><br /></td>
                              </tr>
                              <tr>
                                <td>Temperature :</td>
                                <td v-if="clinicalinfo">
                                   {{ clinicalinfo.temperature }}
                                </td>
                              </tr>

                              <tr>
                                <td>Blood Pressure :</td>
                                <td v-if="clinicalinfo">
                                   {{ clinicalinfo.blood_pressure }}
                                </td>
                              </tr>

                              <tr>
                                <td>Pulse Rate :</td>
                                <td v-if="clinicalinfo">
                                   {{ clinicalinfo.pulse_rate }}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <!-- col-sm-6 -->
                        <div class="col-sm-6">
                          <table
                            class="info-table clinical-information"
                            width="100%"
                          >
                            <tbody>
                              <tr>
                                <td><br /></td>
                              </tr>
                              <tr>
                                <td><br /></td>
                              </tr>
                              <tr>
                                <td>Weight :</td>
                                <td v-if="clinicalinfo">
                                   {{ clinicalinfo.weight }}
                                </td>
                              </tr>

                              <tr>
                                <td>Height :</td>
                                <td v-if="clinicalinfo">
                                   {{ clinicalinfo.height }}
                                </td>
                              </tr>

                              <tr>
                                <td>BMI :</td>
                                <td v-if="clinicalinfo">
                                   {{ clinicalinfo.bmi }}
                                </td>
                              </tr>
                              <tr>
                                <td>Waist Circumference :</td>
                                <td v-if="clinicalinfo">
                                   {{ clinicalinfo.waist_circumference }}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <!-- col-sm-6 -->
                      </div>
                      <!-- row -->
                    </div>
                  </div>
                </div>
                <!-- accordion-item -->
                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading-attachments">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#attachments"
                      aria-expanded="false"
                      aria-controls="attachments"
                    >
                      Attachments
                    </button>
                  </h2>
                  <div
                    id="attachments"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading-attachments"
                    data-bs-parent="#accordion2"
                  >
                    <div class="accordion-body">
                      <table
                        class="table table-striped data-table"
                        style="width: 100%"
                      >
                        <thead>
                          <tr>
                            <th>No</th>
                            <th>File Name</th>
                            <th>Date</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(atch, index) in attachList" :key="index">
                        <td>{{index+1}}</td>
                            <td>
                              <i class="fas fa-file-pdf pdf"></i> {{atch.file_name}}
                            </td>
                            <td>{{atch.date}}</td>
                            <td>
                              <a v-bind:href="atch.uploaded_path" target="_blank" class="view"
                                ><i class="fas fa-eye"></i
                              ></a>
                            </td>
                          </tr>
                          <tr style="display:none;">
                            <td>2</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <!-- accordion-item -->
              </div>
              <!-- accordion -->

              <a class="common-btn" style="cursor:pointer;" @click="Ontransactionlog"
                >Transaction Log</a
              >
            </div>

            <div class="col-sm-4 general-action">
              <div class="card mb-4">
                <div class="card-header">
                  <h4>General Action</h4>
                </div>
                <div class="card-body">
                  <ul class="accordion" id="accordionExample">
                    <li class="accordion-item sub-nav">
                      <a
                        href="#"
                        class="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        Clinical Information
                      </a>
                      <ul
                        id="collapseOne"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <li>
                          <a style="cursor: pointer" @click="onclinicalhistory"
                            >View History</a
                          >
                        </li>
                        <li>
                          <a
                            style="cursor: pointer"
                            @click="onAddPatientClinicalinfo"
                            >Add New Reading</a
                          >
                        </li>
                      </ul>
                    </li>
                    <li class="accordion-item sub-nav">
                      <a
                        class="accordion-button collapsed"
                        href="#"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Psychometric Test
                      </a>
                      <ul
                        id="collapseTwo"
                        class="accordion-collapse collapse"
                        aria-labelledby="heading2"
                        data-bs-parent="#accordionExample"
                      >
                        <li>
                          <a
                            style="cursor: pointer"
                            @click="Onpsychometrichistory"
                            >View History</a
                          >
                        </li>
                        <li>
                          <a
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne"
                            >Take New Test</a
                          >
                          <ul
                            id="flush-collapseOne"
                            class="sub-sub-menu accordion-collapse collapse"
                            aria-labelledby="flush-headingOne"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <li>
                              <a style="cursor: pointer" @click="Ondasstest"
                                >DASS</a
                              >
                            </li>
                            <li>
                              <a style="cursor: pointer" @click="Onphqtest"
                                >PHQ-9</a
                              >
                            </li>
                            <li>
                              <a style="cursor: pointer" @click="Oncbitest"
                                >CBI</a
                              >
                            </li>
                            <li>
                              <a style="cursor: pointer" @click="Onwhodasstest"
                                >WHO DAS</a
                              >
                            </li>
                            <li><a style="cursor: pointer" @click="Onbditest">BDI</a></li>
                            <li><a style="cursor: pointer" @click="Onbaitest">BAI</a></li>
                            <li><a style="cursor: pointer" @click="Onatqtest">ATQ</a></li>
                            <li><a style="cursor: pointer" @click="Onpsptest">PSP</a></li>
                            <li>
                              <a style="cursor: pointer" @click="Onsuicidescaletest"
                                >Self Harm Act & Suicidal Scale</a
                              >
                            </li>
                            <li>
                              <a style="cursor: pointer" @click="Onsuiciderisktest">Suicidal Risk</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li class="accordion-item sub-nav">
                      <a
                        class="accordion-button collapsed"
                        href="#"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Clinical Documentation
                      </a>
                      <div class="accordion" id="accordionExample">
                        <ul
                          id="collapseThree"
                          class="accordion-collapse collapse"
                          aria-labelledby="heading3"
                          data-bs-parent="#accordionExample"
                        >
                          <li class="accordion-item">
                            <a
                              class="accordion-button collapsed"
                              href="#"
                              data-bs-toggle="collapse"
                              data-bs-target="#sub-men-1"
                              aria-expanded="true"
                              aria-controls="sub-men-1"
                            >
                              Clinical And Intervention Notes
                            </a>
                            <ul
                              id="sub-men-1"
                              class="sub-sub-menu accordion-collapse collapse"
                              aria-labelledby="headingOne"
                              data-bs-parent="#collapseThree"
                            >
                              <li>
                                <a
                                  href="#"
                                  class="accordion-button collapsed"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#clerking-notes"
                                  aria-expanded="true"
                                  aria-controls="clerking-notes"
                                  >Clerking Notes</a
                                >
                                <ul
                                  id="clerking-notes"
                                  class="accordion-collapse collapse"
                                  aria-labelledby=""
                                  data-bs-parent="#sub-men-1"
                                >
                                  <!-- <li><a href="notes-form.html">Clerking Notes</a></li> -->
                                  <li>
                                    <a style="cursor:pointer;" @click="OnPsychiatryclerkingnote"
                                      >Psychiatry Clerking Note</a
                                    >
                                  </li>
                                  <li>
                                    <a style="cursor:pointer;" @click="Oncounsellorclerkingnote"
                                      >Counselling Clerking Note</a
                                    >
                                  </li>
                                  <li><a href="#">Patient Index Form </a></li>
                                </ul>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  class="accordion-button collapsed"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#progress-notes"
                                  aria-expanded="true"
                                  aria-controls="progress-notes"
                                  >Progress Notes</a
                                >
                                <ul
                                  id="progress-notes"
                                  class="accordion-collapse collapse"
                                  aria-labelledby=""
                                  data-bs-parent="#sub-men-1"
                                >
                                  <li>
                                    <a style="cursor:pointer;" @click="Oncprogressnote"
                                      >Psychiatric Progress Note</a
                                    >
                                  </li>
                                  <li><a href="#">CPS Progress Note</a></li>
                                  <li><a href="#">SE Progress Note</a></li>
                                  <li>
                                    <a style="cursor:pointer;" @click="Oncounselingprogressnote"
                                      >Counselling Progress Note</a
                                    >
                                  </li>
                                  <li><a href="#">ETP Progress Note</a></li>
                                  <li>
                                    <a href="#">Job Club Progress Note</a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  class="accordion-button collapsed"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#discharge-notes"
                                  aria-expanded="true"
                                  aria-controls="discharge-notes"
                                  >Discharge Notes
                                </a>
                                <ul
                                  id="discharge-notes"
                                  class="accordion-collapse collapse"
                                  aria-labelledby=""
                                  data-bs-parent="#sub-men-1"
                                >
                                  <li>
                                    <a style="cursor:pointer;" @click="Oncounsaltationdischargenote"
                                      >Consultation Discharge Note</a
                                    >
                                  </li>
                                  <li><a href="#">Rehab Discharge Note</a></li>
                                  <li><a href="#">CPS Discharge Note</a></li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li class="accordion-item">
                            <a
                              class="accordion-button collapsed"
                              href="#"
                              data-bs-toggle="collapse"
                              data-bs-target="#sub-men-2"
                              aria-expanded="false"
                              aria-controls="sub-men-2"
                            >
                              Consent Forms And Information Sheets
                            </a>
                            <ul
                              id="sub-men-2"
                              class="sub-sub-menu accordion-collapse collapse"
                              aria-labelledby="headingTwo"
                              data-bs-parent="#collapseThree"
                            >
                              <li class="accordion-item">
                                <a
                                  class="accordion-button collapsed"
                                  href="#"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#sub-men-2-1"
                                  aria-expanded="true"
                                  aria-controls="sub-men-2-1"
                                >
                                  Consent Form
                                </a>
                                <ul
                                  id="sub-men-2-1"
                                  class="accordion-collapse collapse"
                                  aria-labelledby="headingOne"
                                  data-bs-parent="#sub-men-2"
                                >
                                  <li>
                                    <a href="#">CPS Homevisit Consent Form</a>
                                  </li>
                                  <li>
                                    <a href="#"
                                      >CPS Homevisit Withdrawal Form</a
                                    >
                                  </li>
                                  <li>
                                    <a href="#">CPS Police Referral Form</a>
                                  </li>
                                  <li>
                                    <a href="#">Photography Consent Form</a>
                                  </li>
                                  <li><a style="cursor:pointer;" @click="Onseconsentreferral">SE Consent Form</a></li>
                                  <li><a href="#">ETP Consent Form</a></li>
                                  <li>
                                    <a href="#">Job Club Consent Form </a>
                                  </li>
                                </ul>
                              </li>
                              <li class="accordion-item">
                                <a
                                  class="accordion-button collapsed"
                                  href="#"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#sub-men-2-2"
                                  aria-expanded="false"
                                  aria-controls="sub-men-2-2"
                                >
                                  Information Sheet
                                </a>
                                <ul
                                  id="sub-men-2-2"
                                  class="accordion-collapse collapse"
                                  aria-labelledby="headingTwo"
                                  data-bs-parent="#sub-men-2"
                                >
                                  <li><a href="#">Information On CPS</a></li>
                                  <li><a href="#">Information On SE</a></li>
                                  <li>
                                    <a href="#">Information On ETP/Job Club </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li class="accordion-item">
                            <a
                              class="accordion-button collapsed"
                              href="#"
                              data-bs-toggle="collapse"
                              data-bs-target="#sub-men-3"
                              aria-expanded="false"
                              aria-controls="sub-men-3"
                            >
                              Assessment Forms And Checklist
                            </a>
                            <ul
                              id="sub-men-3"
                              class="sub-sub-menu accordion-collapse collapse"
                              aria-labelledby="headingThree"
                              data-bs-parent="#collapseThree"
                            >
                              <li class="accordion-item">
                                <a
                                  class="accordion-button collapsed"
                                  href="#"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#sub-sub-men-1"
                                  aria-expanded="true"
                                  aria-controls="sub-sub-men-1"
                                >
                                  Assessment Form
                                </a>
                                <ul
                                  id="sub-sub-men-1"
                                  class="accordion-collapse collapse"
                                  aria-labelledby="headingOne"
                                  data-bs-parent="#sub-men-3"
                                >
                                  <li>
                                    <a style="cursor:pointer;" @click="Onpatientcareplan"
                                      >Patient Care Plan And Case Review Form</a
                                    >
                                  </li>
                                  <li><a href="#">Job Start Report</a></li>
                                  <li><a href="#">Job End Report</a></li>
                                  <!-- <li>
                                    <a href="#">Job Commencement Report</a>
                                  </li>
                                  <li><a href="#">Job Cessation Report</a></li> -->
                                  <li><a href="#">Job Transition Report</a></li>
                                  <li>
                                    <a style="cursor:pointer;" @click="Onlaserform">LA.S.E.R Form (Motivation) </a>
                                  </li>
                                  <li>
                                    <a style="cursor:pointer;" @click="OnTriageform">Triage Form </a>
                                  </li>
                                </ul>
                              </li>
                              <li class="accordion-item">
                                <a
                                  class="accordion-button collapsed"
                                  href="#"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#sub-sub-men-2"
                                  aria-expanded="false"
                                  aria-controls="sub-sub-men-2"
                                >
                                  Checklist
                                </a>
                                <ul
                                  id="sub-sub-men-2"
                                  class="accordion-collapse collapse"
                                  aria-labelledby="headingTwo"
                                  data-bs-parent="#sub-men-3"
                                >
                                  <li>
                                    <a href="#">Job Interest Checklist</a>
                                  </li>
                                  <li><a href="#">Work Analysis Form</a></li>
                                  <li><a href="#">List for Job Club</a></li>
                                  <li><a href="#">List of ETP</a></li>
                                  <li><a href="#">List Of Job Search</a></li>
                                  <li>
                                    <a href="#">Log Meeting With Employer</a>
                                  </li>
                                  <li>
                                    <a href="#"
                                      >List Of Previous Or Current Job
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li class="accordion-item">
                            <a
                              class="accordion-button collapsed"
                              href="#"
                              data-bs-toggle="collapse"
                              data-bs-target="#sub-men-4"
                              aria-expanded="false"
                              aria-controls="sub-men-4"
                            >
                              Referral Letters
                            </a>
                            <ul
                              id="sub-men-4"
                              class="sub-sub-menu accordion-collapse collapse"
                              aria-labelledby="headingThree"
                              data-bs-parent="#collapseThree"
                            >
                              <li>
                                <a style="cursor:pointer;" @click="Oninternalreferralform"
                                  >Internal Referral (To Hospital/Mentari)</a
                                >
                              </li>
                              <li><a href="#">External Referral Form</a></li>
                              <li><a style="cursor:pointer;" @click="Oncpsreferal">CPS Referral Form</a></li>
                              <li>
                                <a style="cursor:pointer;" @click="Onocctreferralform"
                                  >OCCT Referral Form</a
                                >
                              </li>
                              <li>
                                <a style="cursor:pointer;" @click="Onpsychologyreferral"
                                  >Psychology Referral Form</a
                                >
                              </li>
                              <li>
                                <a href="#"
                                  >Rehab Referral Form And Clinical Summary
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="accordion-item sub-nav">
                      <a
                        class="accordion-button collapsed"
                        href="#"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse4"
                        aria-expanded="false"
                        aria-controls="collapse4"
                      >
                        Appointment
                      </a>
                      <ul
                        id="collapse4"
                        class="accordion-collapse collapse"
                        aria-labelledby="heading4"
                        data-bs-parent="#accordionExample"
                      >
                        <li>
                          <a
                            style="cursor: pointer"
                            @click="OnAppointmenthistory"
                            >View History</a
                          >
                        </li>
                        <li>
                          <a style="cursor:pointer;" @click="OnBookAppointment"
                            >Book Appointment</a
                          >
                        </li>
                      </ul>
                    </li>
                    <li class="accordion-item sub-nav">
                      <a
                        class="accordion-button collapsed"
                        style="cursor: pointer"
                        @click="OpenAttachPopUp"
                      >
                        Attachment
                      </a>
                    </li>
                    <li class="accordion-item sub-nav">
                      <a
                        class="accordion-button collapsed"
                        href="#"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse6"
                        aria-expanded="false"
                        aria-controls="collapse6"
                      >
                        Shharp
                      </a>
                      <ul
                        id="collapse6"
                        class="accordion-collapse collapse"
                        aria-labelledby="heading6"
                        data-bs-parent="#accordionExample"
                      >
                        <li>
                          <a @click="OnSharphistory" style="cursor: pointer"
                            >View History</a
                          >
                        </li>
                        <li>
                          <a @click="OnAddSharphistory" style="cursor: pointer"
                            >Add New Registry</a
                          >
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
                <div class="d-flex">
                                    <a @click="endVisit" class="btn btn-danger btn-text ml-auto"><i class="far fa-power-off"></i> End Visit</a>
                                </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="attachpopup"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            class="modal-dialog modal-dialog-centered modal-sm test-connection"
          >
            <div class="modal-content">
              <div class="modal-body">
                <input
                  type="file"
                  class="form-control"
                  id="inputPassword3"
                  @change="selectFile"
                />
              </div>
               <p v-if="errorList.length">
<ul>
        <li style="color:red"  v-for='err in errorList'
    :key='err' >
          {{ err }}
        </li>
      </ul>
        </p>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary btn-ok" @click="onAttachdoc">
                  Submit
                </button>
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
import PatientDetails from "../../../components/Patient/PatientDetails.vue";
import CommonHeader from '../../../components/CommonHeader.vue';
import CommonSidebar from '../../../components/CommonSidebar.vue';
import * as moment from "moment/moment";
export default {
  components: { CommonSidebar, CommonHeader, PatientDetails },
  name: "patient-summary",
  data() {
    return {
      userdetails: null,
      errorList: [],
      attachList: [],
      historylist: [],
      clinicalinfo: null,
      Id: 0,
      file: "",
      nextappointmentdetails: {},
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    let urlParams = new URLSearchParams(window.location.search);
    this.Id = urlParams.get("id");
    this.GetPatientClinicinfodetails();
    this.Getnextpreviousappointment();
    $(document).ready(function () {
      $('.radio input[type="radio"]').click(function () {
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $(".box").not(targetBox).hide();
        $(targetBox).show();
      });

      $(".select-others")
        .change(function () {
          $(this)
            .find("option:selected")
            .each(function () {
              var optionValue = $(this).attr("value");
              if (optionValue) {
                // $(".selected-box").not("." + optionValue).hide();
                $("." + optionValue).show();
              } else {
                // $(".selected-box").hide();
              }
            });
        })
        .change();
    });
  },
  mounted() {
    const headers = {
      Authorization: "Bearer " + this.userdetails.access_token,
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    const axios = require("axios").default;
    axios
      .get(
        `${this.$axios.defaults.baseURL}` +
          "patient-attachment/list?patient_id=" +
          this.Id,
        { headers }
      )
      .then((resp) => {
        this.attachList = resp.data.list;
        $(document).ready(function () {
          $(".data-table").DataTable({
            searching: false,
            bLengthChange: false,
            bInfo: false,
            autoWidth: false,
            responsive: true,
            language: {
              paginate: {
                next: '<i class="fad fa-arrow-to-right"></i>', // or '→'
                previous: '<i class="fad fa-arrow-to-left"></i>', // or '←'
              },
            },
          });
        });
      })
      .catch((err) => {
        console.error(err);
      });
    this.GethistoryList();
  },
  methods: {
     formatetime(time) {
      const local = moment.utc(time).local().format('h:mm A');
      return local;
    },
    GethistoryList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const axios1 = require("axios").default;
      axios1
        .post(
          `${this.$axios.defaults.baseURL}` +
            "patient-appointment-details/fetchViewHistoryList",
          { patient_id: this.Id },
          { headers }
        )
        .then((resp) => {
          this.historylist = resp.data.Data;
          console.log("my list", resp.data);
          $(document).ready(function () {
            $(".data-table1").DataTable({
              searching: false,
              bLengthChange: false,
              bInfo: false,
              autoWidth: false,
              responsive: true,
              scrollX: true,
              language: {
                paginate: {
                  next: '<i class="fad fa-arrow-to-right"></i>', // or '→'
                  previous: '<i class="fad fa-arrow-to-left"></i>', // or '←'
                },
              },
            });
          });
        })
        .catch((err) => {
          console.error(err);
        });
    },
    onAddPatientClinicalinfo() {
      this.$router.push({
        path: "/app/modules/Patient/add-clinical-info",
        query: { id: this.Id },
      });
    },
    onclinicalhistory() {
      this.$router.push({
        path: "/app/modules/Patient/clinical-history",
        query: { id: this.Id },
      });
    },
    OnAppointmenthistory() {
      this.$router.push({
        path: "/app/modules/Patient/appointment-history",
        query: { id: this.Id },
      });
    },
    OnSharphistory() {
      this.$router.push({
        path: "/app/modules/Patient/patient-history",
        query: { id: this.Id },
      });
    },
    OnAddSharphistory() {
      this.$router.push({
        path: "/app/modules/Patient/add-new-registry",
        query: { id: this.Id },
      });
    },
    Onpsychometrichistory() {
      this.$router.push({
        path: "/app/modules/Patient/psychometric-history",
        query: { id: this.Id },
      });
    },
    Oncbitest() {
      this.$router.push({
        path: "/app/modules/Patient/cbi",
        query: { id: this.Id },
      });
    },
    Ondasstest() {
      this.$router.push({
        path: "/app/modules/Patient/dass",
        query: { id: this.Id },
      });
    },
    Onphqtest() {
      this.$router.push({
        path: "/app/modules/Patient/phq-9",
        query: { id: this.Id },
      });
    },
    Onwhodasstest() {
      this.$router.push({
        path: "/app/modules/Patient/whodas",
        query: { id: this.Id },
      });
    },
    Onbditest() {
      this.$router.push({
        path: "/app/modules/Patient/bdi",
        query: { id: this.Id },
      });
    },
    Onpsptest() {
      this.$router.push({
        path: "/app/modules/Patient/psp",
        query: { id: this.Id },
      });
    },
    Onbaitest() {
      this.$router.push({
        path: "/app/modules/Patient/bai",
        query: { id: this.Id },
      });
    },
    Onatqtest() {
      this.$router.push({
        path: "/app/modules/Patient/atq",
        query: { id: this.Id },
      });
    },
    Onsuiciderisktest() {
      this.$router.push({
        path: "/app/modules/Patient/suicide-risk",
        query: { id: this.Id },
      });
    },
    Onatqtest() {
      this.$router.push({
        path: "/app/modules/Patient/atq",
        query: { id: this.Id },
      });
    },
    Onsuicidescaletest() {
      this.$router.push({
        path: "/app/modules/Patient/level-of-suicidal-intent",
        query: { id: this.Id },
      });
    },
    Ontransactionlog() {
      this.$router.push({
        path: "/app/modules/Patient/transaction-log",
        query: { id: this.Id },
      });
    },
    OnPsychiatryclerkingnote() {
      this.$router.push({
        path: "/app/modules/Patient/psychiatry-clerking-note",
        query: { id: this.Id },
      });
    },
    Oncounsellorclerkingnote() {
      this.$router.push({
        path: "/app/modules/Patient/counsellor-clerking-note",
        query: { id: this.Id },
      });
    },
    Oncprogressnote() {
      this.$router.push({
        path: "/app/modules/Patient/progress-note",
        query: { id: this.Id },
      });
    },
    Oncounselingprogressnote() {
      this.$router.push({
        path: "/app/modules/Patient/counseling-progress-note",
        query: { id: this.Id },
      });
    },
    Oncounsaltationdischargenote() {
      this.$router.push({
        path: "/app/modules/Patient/consultation-discharge-note",
        query: { id: this.Id },
      });
    },
    OnTriageform() {
      this.$router.push({
        path: "/app/modules/Patient/triage-form",
        query: { id: this.Id },
      });
    },
    Oninternalreferralform() {
      this.$router.push({
        path: "/app/modules/Patient/internal-referral-form",
        query: { id: this.Id },
      });
    },
    Onocctreferralform() {
      this.$router.push({
        path: "/app/modules/Patient/occt-referral-form",
        query: { id: this.Id },
      });
    },
    Onpsychologyreferral() {
      this.$router.push({
        path: "/app/modules/Patient/psychology-referral",
        query: { id: this.Id },
      });
    },
    Onseconsentreferral() {
      this.$router.push({
        path: "/app/modules/Patient/se-consent-form",
        query: { id: this.Id },
      });
    },
    Onlaserform() {
      this.$router.push({
        path: "/app/modules/Patient/laser-form",
        query: { id: this.Id },
      });
    },
    Oncpsreferal() {
      this.$router.push({
        path: "/app/modules/Patient/cps-referral-form",
        query: { id: this.Id },
      });
    },
    Onpatientcareplan() {
      this.$router.push({
        path: "/app/modules/Patient/patient-care-plan-and-case-review",
        query: { id: this.Id },
      });
    },
    OnBookAppointment(){
       this.$router.push({
        path: "/app/modules/Patient/book-appointment",
        query: { pid: this.Id },
      });
    },
    async GetPatientClinicinfodetails() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get(
        "/patient-clinicalinfo/getPatientClinicalListOfPatient?patient_id=" +
          this.Id,
        { headers }
      );
      if (response.data.code == 200) {
        this.clinicalinfo = response.data.list;
      } else {
        window.alert("Something went wrong");
      }
    },
    OpenAttachPopUp() {
      this.$nextTick(() => {
        $("#attachpopup").modal("show");
      });
    },
    selectFile(event) {
      this.file = event.target.files[0];
    },
    async onAttachdoc() {
      this.errorList = [];
      if (!this.file) {
        this.errorList.push("please select a file");
      } else {
        const headers = {
          Authorization: "Bearer " + this.userdetails.access_token,
          Accept: "application/json",
          "Content-Type": "application/json",
        };
        let body = new FormData();
        body.append("added_by", this.userdetails.user.id);
        body.append("uploaded_path", this.file);
        body.append("patient_id", this.Id);
        const response = await this.$axios.post(
          "patient-attachment/add",
          body,
          {
            headers,
          }
        );
        if (response.data.code == 200 || response.data.code == "200") {
          this.$nextTick(() => {
            $("#attachpopup").modal("hide");
            $("#insertpopup").modal("show");
          });
        } else {
          this.$nextTick(() => {
            this.errorList.push(response.data.message.uploaded_path[0]);
            //  $("#attachpopup").modal("hide");
            $("#errorpopup").modal("show");
          });
        }
      }
    },
    async Getnextpreviousappointment() {
      try {
        const headers = {
          Authorization: "Bearer " + this.userdetails.access_token,
          Accept: "application/json",
          "Content-Type": "application/json",
        };
        const response = await this.$axios.post(
          "patient-appointment-details/get-next-prev",
          { patient_id: this.Id },
          { headers }
        );
        console.log("ff", response.data);
        if (response.data.code == 200) {
          this.nextappointmentdetails = response.data.result;
        } else {
          window.alert("Something went wrong");
        }
      } catch (e) {}
    },
     async endVisit() {
      try {
        const headers = {
          Authorization: "Bearer " + this.userdetails.access_token,
          Accept: "application/json",
          "Content-Type": "application/json",
        };
        const response = await this.$axios.post(
          "patient-appointment-details/endappointmentDate",
          { patient_id: this.Id },
          { headers }
        );
        console.log("ff", response.data);
        if (response.data.code == 200) {
           $("#insertpopup").modal("show");
        } else {
          window.alert("Something went wrong");
        }
      } catch (e) {}
    },
    OnHistoryview(data) {
      this.$router.push({
        path: "/app/modules/patient/history-view",
        query: { id: data.id, type: data.type },
      });
    },
  },
};
</script>
<style scoped>
.hide {
  display: none;
}
</style>
