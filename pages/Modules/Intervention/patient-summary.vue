<template>
  <div id="layoutSidenav">
    <CommonSidebar  />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <div class="container-fluid px-4">
          <InterventionPatientDetails />
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
                              <p v-if="hst.status==1">Completed</p>
                                <p v-if="hst.status==0">Save as Draft</p>
                              </td>
                            <td>{{hst.date}}</td>
                            <td>{{formatetime(hst.created_at)}}</td>
                            <td>{{hst.name}}</td>
                            <td>
                              <a  style="cursor:pointer;" @click="OnHistoryview(hst,view)"  class="view"
                                ><i class="fas fa-eye"></i
                              ></a>
                                <a v-if="hst.editstatus==1" style="cursor:pointer;" @click="OnHistoryview(hst,edit)"  class="edit"
                                ><i class="fas fa-edit"></i
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
                                  <li><a style="cursor:pointer;" @click="Onpatientindexform">Patient Index Form </a></li>
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
                                  <li><a style="cursor:pointer;" @click="Oncpsprogressnote">CPS Progress Note</a></li>
                                  <li><a style="cursor:pointer;" @click="OnSeprogressnotes">SE Progress Note</a></li>
                                  <li>
                                    <a style="cursor:pointer;" @click="Oncounselingprogressnote"
                                      >Counselling Progress Note</a
                                    >
                                  </li>
                                  <li><a style="cursor:pointer;" @click="Onetpprogressnote">ETP Progress Note</a></li>
                                  <li>
                                    <a style="cursor:pointer;" @click="Onjobclubprogressnote">Job Club Progress Note</a>
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
                                  <li><a style="cursor:pointer;" @click="OnRehabDischargeNote">Rehab Discharge Note</a></li>
                                  <li><a style="cursor:pointer;" @click="Oncpsdischargenote">CPS Discharge Note</a></li>
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
                                    <a style="cursor:pointer;" @click="Oncpshomevisitconsentform">CPS Homevisit Consent Form</a>
                                  </li>
                                  <li>
                                    <a style="cursor:pointer;" @click="Oncpshomevisitwithdrawalform"
                                      >CPS Homevisit Withdrawal Form</a
                                    >
                                  </li>
                                  <li>
                                    <a style="cursor:pointer;" @click="Oncpspolicereferralform">CPS Police Referral Form</a>
                                  </li>
                                  <li>
                                    <a style="cursor:pointer;" @click="Onphotographyconsentform">Photography Consent Form</a>
                                  </li>
                                  <li><a style="cursor:pointer;" @click="Onseconsentreferral">SE Consent Form</a></li>
                                  <li><a style="cursor:pointer;" @click="Onetpconsentform">ETP Consent Form</a></li>
                                  <li>
                                    <a style="cursor:pointer;" @click="Onjobclubconsentform">Job Club Consent Form </a>
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
                                  <li><a >Information On CPS</a></li>
                                  <li><a target="_blank"  href="/InformationOnSE2020.pdf">  Information On SE</a></li>
                                  <li>
                                    <a target="_blank" href="/InformationOnETPJobClub2020.pdf">Information On ETP/Job Club </a>
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
                                  <li><a style="cursor:pointer;" @click="Onjobstartreport">Job Start Report</a></li>
                                  <li><a style="cursor:pointer;" @click="Onjobendreport">Job End Report</a></li>
                                  <!-- <li>
                                    <a href="#">Job Commencement Report</a>
                                  </li>
                                  <li><a href="#">Job Cessation Report</a></li> -->
                                  <li><a style="cursor:pointer;" @click="Onjobtransitionreport">Job Transition Report</a></li>
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
                                    <a style="cursor:pointer" @click="Onjobinterestchecklist">Job Interest Checklist</a>
                                  </li>
                                  <li><a style="cursor:pointer" @click="Onworkanalysisform">Work Analysis Form</a></li>
                                  <li><a style="cursor:pointer" @click="OnListforJobClub">List for Job Club</a></li>
                                  <li><a style="cursor:pointer" @click="Onlistofetp">List of ETP</a></li>
                                  <li><a style="cursor:pointer" @click="Onlistofjobsearch">List Of Job Search</a></li>
                                  <li>
                                    <a style="cursor:pointer" @click="Onlogmeetingwithemployer">Log Meeting With Employer</a>
                                  </li>
                                  <li>
                                    <a style="cursor:pointer" @click="Onlistofpreviousorcurrentjob"
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
                                <li><a style="cursor:pointer;" @click="Onexternalreferralform">External Referral Form</a></li>
                              <li><a style="cursor:pointer;" @click="Oncpsreferal" >CPS Referral Form</a></li>
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
                                <a style="cursor:pointer" @click="Onrehabreferralandclinicalsummary"
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
                          <a
                            style="cursor: pointer"
                            @click="OnBookAppointment"
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
import CommonHeader from "../../../components/CommonHeader.vue";
import CommonSidebar from "../../../components/CommonSidebar.vue";
import InterventionPatientDetails from "../../../components/Intervention/InterventionPatientDetails.vue";
import * as moment from "moment/moment";
export default {
  components: {
    CommonHeader,
    CommonSidebar,
    InterventionPatientDetails,
  },
  name: "patient-summary",
  data() {
    return {
      userdetails: null,
      errorList: [],
      attachList: [],
      clinicalinfo: null,
      Id: 0,
      file: "",
      view: "view",
      edit: "edit",
      nextappointmentdetails: {},
      historylist: [],
      date: "2022-08-01T09:40:32Z",
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    console.log("my details", this.userdetails);
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
    getFile(file) {
      // window.open("../../../static/InformationOnETPJobClub2020.pdf", "_blank");
    },
    formatetime(time) {
      const local = moment.utc(time).local().format("h:mm A");
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
          console.log("my list22", resp.data);
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
    OnHistoryview(data, val) {
      if (data.type == "PsychiatryClerkingNote") {
        this.$router.push({
          path: "/Modules/Intervention/psychiatry-clerking-note",
          query: { pid: data.id, type: val },
        });
      } else if (data.type == "CounsellorClerkingNote") {
        this.$router.push({
          path: "/Modules/Intervention/counsellor-clerking-note",
          query: { pid: data.id, type: val },
        });
      } else if (data.type == "PatientIndexForm") {
        this.$router.push({
          path: "/Modules/Intervention/patient-index-form",
          query: { pid: data.id, type: val },
        });
      } else if (data.type == "PsychiatricProgressNote") {
        this.$router.push({
          path: "/Modules/Intervention/progress-note",
          query: { pid: data.id, type: val },
        });
      } else if (data.type == "CPSProgressNote") {
        this.$router.push({
          path: "/Modules/Intervention/cps-progress-note",
          query: { pid: data.id, type: val },
        });
      } else if (data.type == "SEProgressNote") {
        this.$router.push({
          path: "/Modules/Intervention/se-progress-notes",
          query: { pid: data.id, type: val },
        });
      } else if (data.type == "CounsellingProgressNote") {
        this.$router.push({
          path: "/Modules/Intervention/counseling-progress-note",
          query: { pid: data.id, type: val },
        });
      } else if (data.type == "EtpProgressNote") {
        this.$router.push({
          path: "/Modules/Intervention/etp-progress-note",
          query: { pid: data.id, type: val },
        });
      } else if (data.type == "JobClubProgressNote") {
        this.$router.push({
          path: "/Modules/Intervention/job-club-progress-note",
          query: { pid: data.id, type: val },
        });
      } else if (data.type == "ConsultationDischargeNote") {
        this.$router.push({
          path: "/Modules/Intervention/consultation-discharge-note",
          query: { pid: data.id, type: val },
        });
      } else if (data.type == "RehabDischargeNote") {
        this.$router.push({
          path: "/Modules/Intervention/rehab-discharge",
          query: { pid: data.id, type: val },
        });
      } else if (data.type == "CpsDischargeNote") {
        this.$router.push({
          path: "/Modules/Intervention/cps-discharge-note",
          query: { pid: data.id, type: val },
        });
      } else if (data.type == "CpsHomeVisitConsentForm") {
        this.$router.push({
          path: "/Modules/Intervention/cps-homevisit-consent-form",
          query: { pid: data.id, type: val },
        });
      } else if (data.type == "CpsHomeVisitWithdrawalForm") {
        this.$router.push({
          path: "/Modules/Intervention/cps-homevisit-withdrawal-form",
          query: { pid: data.id, type: val },
        });
      } else if (data.type == "CpsPoliceReferralForm") {
        this.$router.push({
          path: "/Modules/Intervention/cps-police-referral-form",
          query: { pid: data.id, type: val },
        });
      } else if (data.type == "PhotographyConsentForm") {
        this.$router.push({
          path: "/Modules/Intervention/photography-consent-form",
          query: { pid: data.id, type: val },
        });
      } else if (data.type == "SEConsentForm") {
        this.$router.push({
          path: "/Modules/Intervention/se-consent-form",
          query: { pid: data.id, type: val },
        });
      } else if (data.type == "ETPConsentForm") {
        this.$router.push({
          path: "/Modules/Intervention/etp-consent-form",
          query: { pid: data.id, type: val },
        });
      } else if (data.type == "JobClubConsentForm") {
        this.$router.push({
          path: "/Modules/Intervention/job-club-consent-form",
          query: { pid: data.id, type: val },
        });
      } else if (data.type == "PatientCarePlanAndCaseReviewForm") {
        this.$router.push({
          path: "/Modules/Intervention/patient-care-plan-and-case-review",
          query: { pid: data.id, type: val },
        });
      } else if (data.type == "JobStartReport") {
        this.$router.push({
          path: "/Modules/Intervention/job-start-report",
          query: { pid: data.id, type: val },
        });
      } else if (data.type == "JobEndReport") {
        this.$router.push({
          path: "/Modules/Intervention/job-end-report",
          query: { pid: data.id, type: val },
        });
      } else if (data.type == "JobTransitionReport") {
        this.$router.push({
          path: "/Modules/Intervention/job-transition-report",
          query: { pid: data.id, type: val },
        });
      } else if (data.type == "LaserAssessment") {
        this.$router.push({
          path: "/Modules/Intervention/laser-form",
          query: { pid: data.id, type: val },
        });
      } else if (data.type == "TriageForm") {
        this.$router.push({
          path: "/Modules/Intervention/triage-form",
          query: { pid: data.id, type: val },
        });
      } else if (data.type == "JobInterestCheckList") {
        this.$router.push({
          path: "/Modules/Intervention/job-interest-checklist",
          query: { pid: data.id, type: val },
        });
      } else if (data.type == "WorkAnalysisForm") {
        this.$router.push({
          path: "/Modules/Intervention/work-analysis-form",
          query: { pid: data.id, type: val },
        });
      } else if (data.type == "ListofJobClub") {
        this.$router.push({
          path: "/Modules/Intervention/list-for-job-club",
          query: { pid: data.id, type: val },
        });
      } else if (data.type == "ListofEtp") {
        this.$router.push({
          path: "/Modules/Intervention/list-of-etp",
          query: { pid: data.id, type: val },
        });
      } else if (data.type == "ListofJobSearch" && val != "edit") {
        this.$router.push({
          path: "/Modules/Intervention/list-of-job-search",
          query: { pid: data.id, type: val },
        });
      } else if (data.type == "ListofJobSearch" && val == "edit") {
        this.$router.push({
          path: "/Modules/Intervention/update-list-of-job-search",
          query: { pid: data.id, type: val },
        });
      } else if (data.type == "LogMeetingWithEmployer") {
        this.$router.push({
          path: "/Modules/Intervention/log-meeting-with-employer",
          query: { pid: data.id, type: val },
        });
      } else if (data.type == "ListofPreviousCurrentJob") {
        this.$router.push({
          path: "/Modules/Intervention/list-of-previous-or-current-job",
          query: { pid: data.id, type: val },
        });
      } else if (data.type == "InternalRefferalForm") {
        this.$router.push({
          path: "/Modules/Intervention/internal-referral-form",
          query: { pid: data.id, type: val },
        });
      } else if (data.type == "ExternalRefferalForm") {
        this.$router.push({
          path: "/Modules/Intervention/external-referral-form",
          query: { pid: data.id, type: val },
        });
      } else if (data.type == "CpsRefferalForm") {
        this.$router.push({
          path: "/Modules/Intervention/cps-referral-form",
          query: { pid: data.id, type: val },
        });
      } else if (data.type == "OcctRefferalForm") {
        this.$router.push({
          path: "/Modules/Intervention/occt-referral-form",
          query: { pid: data.id, type: val },
        });
      } else if (data.type == "PsychologyRefferalForm") {
        this.$router.push({
          path: "/Modules/Intervention/psychology-referral",
          query: { pid: data.id, type: val },
        });
      } else if (data.type == "RehabRefferalAndClinicalForm") {
        this.$router.push({
          path: "/Modules/Intervention/rehab-referral-and-clinical-summary",
          query: { pid: data.id, type: val },
        });
      }
    },
    OnBookAppointment(){
      this.$router.push({
        path: "/Modules/Patient/book-appointment",
        query: { pid: this.Id},
      });
    },
    onAddPatientClinicalinfo() {
      this.$router.push({
        path: "/Modules/Intervention/add-clinical-info",
        query: { id: this.Id },
      });
    },
    onclinicalhistory() {
      this.$router.push({
        path: "/Modules/Intervention/clinical-history",
        query: { id: this.Id },
      });
    },
    OnAppointmenthistory() {
      this.$router.push({
        path: "/Modules/Intervention/appointment-history",
        query: { id: this.Id },
      });
    },
    OnSharphistory() {
      this.$router.push({
        path: "/Modules/Intervention/patient-history",
        query: { id: this.Id },
      });
    },
    OnAddSharphistory() {
      this.$router.push({
        path: "/Modules/Intervention/add-new-registry",
        query: { id: this.Id },
      });
    },
    Onpsychometrichistory() {
      this.$router.push({
        path: "/Modules/Intervention/psychometric-history",
        query: { id: this.Id },
      });
    },
    Oncbitest() {
      this.$router.push({
        path: "/Modules/Intervention/cbi",
        query: { id: this.Id },
      });
    },
    Ondasstest() {
      this.$router.push({
        path: "/Modules/Intervention/dass",
        query: { id: this.Id },
      });
    },
    Onphqtest() {
      this.$router.push({
        path: "/Modules/Intervention/phq-9",
        query: { id: this.Id },
      });
    },
    Onwhodasstest() {
      this.$router.push({
        path: "/Modules/Intervention/whodas",
        query: { id: this.Id },
      });
    },
    Onbditest() {
      this.$router.push({
        path: "/Modules/Intervention/bdi",
        query: { id: this.Id },
      });
    },
    Onpsptest() {
      this.$router.push({
        path: "/Modules/Intervention/psp",
        query: { id: this.Id },
      });
    },
    Onbaitest() {
      this.$router.push({
        path: "/Modules/Intervention/bai",
        query: { id: this.Id },
      });
    },
    Onatqtest() {
      this.$router.push({
        path: "/Modules/Intervention/atq",
        query: { id: this.Id },
      });
    },
    Onsuiciderisktest() {
      this.$router.push({
        path: "/Modules/Intervention/suicide-risk",
        query: { id: this.Id },
      });
    },
    Onatqtest() {
      this.$router.push({
        path: "/Modules/Intervention/atq",
        query: { id: this.Id },
      });
    },
    Onsuicidescaletest() {
      this.$router.push({
        path: "/Modules/Intervention/level-of-suicidal-intent",
        query: { id: this.Id },
      });
    },
    Ontransactionlog() {
      this.$router.push({
        path: "/Modules/Intervention/transaction-log",
        query: { id: this.Id },
      });
    },
    OnPsychiatryclerkingnote() {
      this.$router.push({
        path: "/Modules/Intervention/psychiatry-clerking-note",
        query: { id: this.Id },
      });
    },
    Oncounsellorclerkingnote() {
      this.$router.push({
        path: "/Modules/Intervention/counsellor-clerking-note",
        query: { id: this.Id },
      });
    },
    Oncprogressnote() {
      this.$router.push({
        path: "/Modules/Intervention/progress-note",
        query: { id: this.Id },
      });
    },
    Oncounselingprogressnote() {
      this.$router.push({
        path: "/Modules/Intervention/counseling-progress-note",
        query: { id: this.Id },
      });
    },
    Oncounsaltationdischargenote() {
      if (this.userdetails.user.role != "Counsellor") {
        this.$router.push({
          path: "/Modules/Intervention/consultation-discharge-note",
          query: { id: this.Id },
        });
      }
    },
    OnTriageform() {
      this.$router.push({
        path: "/Modules/Intervention/triage-form",
        query: { id: this.Id },
      });
    },
    Oninternalreferralform() {
      if (this.userdetails.user.role != "Counsellor") {
        this.$router.push({
          path: "/Modules/Intervention/internal-referral-form",
          query: { id: this.Id },
        });
      }
    },
    Onocctreferralform() {
      this.$router.push({
        path: "/Modules/Intervention/occt-referral-form",
        query: { id: this.Id },
      });
    },
    Onpsychologyreferral() {
      this.$router.push({
        path: "/Modules/Intervention/psychology-referral",
        query: { id: this.Id },
      });
    },
    Onrehabreferralandclinicalsummary() {
      if (this.userdetails.user.role != "Counsellor") {
        this.$router.push({
          path: "/Modules/Intervention/rehab-referral-and-clinical-summary",
          query: { id: this.Id },
        });
      }
    },
    Onseconsentreferral() {
      this.$router.push({
        path: "/Modules/Intervention/se-consent-form",
        query: { id: this.Id },
      });
    },
    Onlaserform() {
      if (this.userdetails.user.role != "Counsellor") {
        this.$router.push({
          path: "/Modules/Intervention/laser-form",
          query: { id: this.Id },
        });
      }
    },
    Onexternalreferralform() {
      if (this.userdetails.user.role != "Counsellor") {
        this.$router.push({
          path: "/Modules/Intervention/external-referral-form",
          query: { id: this.Id },
        });
      }
    },
    Oncpsreferal() {
      if (this.userdetails.user.role != "Counsellor") {
        this.$router.push({
          path: "/Modules/Intervention/cps-referral-form",
          query: { id: this.Id },
        });
      }
    },

    Onpatientcareplan() {
      if (this.userdetails.user.role != "Counsellor") {
        this.$router.push({
          path: "/Modules/Intervention/patient-care-plan-and-case-review",
          query: { id: this.Id },
        });
      }
    },
    OnSeprogressnotes() {
      if (this.userdetails.user.role != "Counsellor") {
        this.$router.push({
          path: "/Modules/Intervention/se-progress-notes",
          query: { id: this.Id },
        });
      }
    },
    Onpatientindexform() {
      if (this.userdetails.user.role != "Counsellor") {
        this.$router.push({
          path: "/Modules/Intervention/patient-index-form",
          query: { id: this.Id },
        });
      }
    },
    Oncpsprogressnote() {
      if (this.userdetails.user.role != "Counsellor") {
        this.$router.push({
          path: "/Modules/Intervention/cps-progress-note",
          query: { id: this.Id },
        });
      }
    },
    Onetpprogressnote() {
      if (this.userdetails.user.role != "Counsellor") {
        this.$router.push({
          path: "/Modules/Intervention/etp-progress-note",
          query: { id: this.Id },
        });
      }
    },
    Onjobclubprogressnote() {
      if (this.userdetails.user.role != "Counsellor") {
        this.$router.push({
          path: "/Modules/Intervention/job-club-progress-note",
          query: { id: this.Id },
        });
      }
    },
    OnRehabDischargeNote() {
      if (this.userdetails.user.role != "Counsellor") {
        this.$router.push({
          path: "/Modules/Intervention/rehab-discharge",
          query: { id: this.Id },
        });
      }
    },
    Oncpsdischargenote() {
      if (this.userdetails.user.role != "Counsellor") {
        this.$router.push({
          path: "/Modules/Intervention/cps-discharge-note",
          query: { id: this.Id },
        });
      }
    },
    Oncpshomevisitconsentform() {
      if (this.userdetails.user.role != "Counsellor") {
        this.$router.push({
          path: "/Modules/Intervention/cps-homevisit-consent-form",
          query: { id: this.Id },
        });
      }
    },
    Oncpshomevisitwithdrawalform() {
      if (this.userdetails.user.role != "Counsellor") {
        this.$router.push({
          path: "/Modules/Intervention/cps-homevisit-withdrawal-form",
          query: { id: this.Id },
        });
      }
    },
    Oncpspolicereferralform() {
      if (this.userdetails.user.role != "Counsellor") {
        this.$router.push({
          path: "/Modules/Intervention/cps-police-referral-form",
          query: { id: this.Id },
        });
      }
    },
    Onphotographyconsentform() {
      if (this.userdetails.user.role != "Counsellor") {
        this.$router.push({
          path: "/Modules/Intervention/photography-consent-form",
          query: { id: this.Id },
        });
      }
    },
    Onetpconsentform() {
      if (this.userdetails.user.role != "Counsellor") {
        this.$router.push({
          path: "/Modules/Intervention/etp-consent-form",
          query: { id: this.Id },
        });
      }
    },
    Onjobclubconsentform() {
      if (this.userdetails.user.role != "Counsellor") {
        this.$router.push({
          path: "/Modules/Intervention/job-club-consent-form",
          query: { id: this.Id },
        });
      }
    },

    Onjobstartreport() {
      if (this.userdetails.user.role != "Counsellor") {
        this.$router.push({
          path: "/Modules/Intervention/job-start-report",
          query: { id: this.Id },
        });
      }
    },
    Onjobendreport() {
      if (this.userdetails.user.role != "Counsellor") {
        this.$router.push({
          path: "/Modules/Intervention/job-end-report",
          query: { id: this.Id },
        });
      }
    },
    Onjobtransitionreport() {
      if (this.userdetails.user.role != "Counsellor") {
        this.$router.push({
          path: "/Modules/Intervention/job-transition-report",
          query: { id: this.Id },
        });
      }
    },
    OnListforJobClub() {
      this.$router.push({
        path: "/Modules/Intervention/list-for-job-club",
        query: { id: this.Id },
      });
    },
    Onlistofetp() {
      if (this.userdetails.user.role != "Counsellor") {
        this.$router.push({
          path: "/Modules/Intervention/list-of-etp",
          query: { id: this.Id },
        });
      }
    },
    Onlogmeetingwithemployer() {
      if (this.userdetails.user.role != "Counsellor") {
        this.$router.push({
          path: "/Modules/Intervention/log-meeting-with-employer",
          query: { id: this.Id },
        });
      }
    },
    Onjobinterestchecklist() {
      if (this.userdetails.user.role != "Counsellor") {
        this.$router.push({
          path: "/Modules/Intervention/job-interest-checklist",
          query: { id: this.Id },
        });
      }
    },
    Onworkanalysisform() {
      if (this.userdetails.user.role != "Counsellor") {
        this.$router.push({
          path: "/Modules/Intervention/work-analysis-form",
          query: { id: this.Id },
        });
      }
    },
    Onlistofjobsearch() {
      if (this.userdetails.user.role != "Counsellor") {
        this.$router.push({
          path: "/Modules/Intervention/list-of-job-search",
          query: { id: this.Id },
        });
      }
    },
    Onlistofpreviousorcurrentjob() {
      if (this.userdetails.user.role != "Counsellor") {
        this.$router.push({
          path: "/Modules/Intervention/list-of-previous-or-current-job",
          query: { id: this.Id },
        });
      }
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
           $("#updatepopup").modal("show");
        } else {
          window.alert("Something went wrong");
        }
      } catch (e) {}
    },
  },
};
</script>
<style scoped>
.hide {
  display: none;
}
</style>
