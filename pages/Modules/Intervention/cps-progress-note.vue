<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>CPS PROGRESS NOTE</h1>
            <!-- <a href="#"><i class="fal fa-plus"></i> Add</a> -->
          </div>

          <div class="card mb-4">
            <div class="card-body new-form">
              <div>
              <table class="notes width-eq">
                <tbody>
                  <tr>
                    <th>Date & Time Seen By :</th>
                    <td class="tdl-5">
                      <input
                        type="date"
                        class="form-control"
                        name=""
                        v-model="cps_date"
                      />
                    </td>
                    <td class="tdl-5">
                      <input
                        type="time"
                        class="form-control"
                        name=""
                        v-model="cps_time"
                      />
                    </td>
                    <td class="tdl-5">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        v-model="cps_seen_by"
                      >
                        <option value="">Please Select</option>
                        <option
                          v-for="team in teamlist"
                          v-bind:key="team.id"
                          v-bind:value="team.id"
                        >
                          {{ team.name }}
                        </option>
                      </select>
                    </td>
                  </tr>

                  <tr>
                    <th>Date & Time Discussed with:</th>
                    <td class="tdl-5">
                      <input
                        type="date"
                        class="form-control"
                        name=""
                        v-model="cps_date_discussed"
                      />
                    </td>
                    <td class="tdl-5">
                      <input
                        type="time"
                        class="form-control"
                        name=""
                        v-model="cps_time_discussed"
                      />
                    </td>
                    <td class="tdl-5">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        v-model="cps_discussed_with"
                      >
                        <option value="">Please Select</option>
                        <option
                          v-for="role in rolelist"
                          v-bind:key="role.id"
                          v-bind:value="role.id"
                        >
                          {{ role.name }}
                        </option>
                      </select>
                    </td>
                  </tr>

                  <tr>
                    <th>Visit Date & time</th>
                    <td class="tdl-5">
                      <input
                        type="date"
                        class="form-control"
                        name=""
                        v-model="visit_date"
                      />
                    </td>
                    <td class="tdl-5">
                      <input
                        type="time"
                        class="form-control"
                        name=""
                        v-model="visit_time"
                      />
                    </td>
                  </tr>

                  <tr>
                    <th>Informants</th>
                    <td colspan="3">
                      <table>
                        <thead>
                          <tr>
                            <th class="th-bg">Name</th>
                            <th class="th-bg">Relationship</th>
                            <th class="th-bg">Contact No</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="tdl-5">
                              <input
                                type="text"
                                class="form-control"
                                v-model="informants_name"
                              />
                            </td>
                            <td class="tdl-5">
                              <input
                                type="text"
                                class="form-control"
                                v-model="informants_relationship"
                              />
                            </td>
                            <td class="tdl-5">
                              <input
                                type="text"
                                class="form-control"
                                v-model="informants_contact"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td colspan="3" style="padding: 0">
                              <!-- <a href="#" class="add"
                                ><i class="far fa-plus"></i
                              ></a> -->
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>

                  <tr>
                    <th>Case Manager</th>
                    <td colspan="3">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        v-model="case_manager"
                      >
                        <option value="">Please Select</option>
                        <option
                          v-for="stf in stafflist"
                          v-bind:key="stf.id"
                          v-bind:value="stf.id"
                        >
                          {{ stf.name }}
                        </option>
                      </select>
                    </td>
                  </tr>

                  <tr>
                    <th>Visited By</th>
                    <td colspan="2">
                      <input
                        type="text"
                        class="form-control"
                        v-model="visited_by"
                      />
                    </td>
                    <td>
                      <!-- <a href="#" class="add"><i class="far fa-plus"></i></a> -->
                    </td>
                  </tr>

                  <tr>
                    <th>Visit Outcome</th>
                    <td colspan="3">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        v-model="visit_outcome"
                      >
                        <option value="">Please Select</option>
                        <option
                          v-for="out in outcomelist"
                          v-bind:key="out.id"
                          v-bind:value="out.id"
                        >
                          {{ out.section_value }}
                        </option>
                      </select>
                    </td>
                  </tr>

                  <tr>
                    <th>Current Intervention</th>
                    <td colspan="3">
                      <select
                        class="form-select"
                        v-model="current_intervention"
                      >
                        <option value="">Please Select</option>
                        <option
                          v-for="crt in currentinterventionlist"
                          v-bind:key="crt.id"
                          v-bind:value="crt.id"
                        >
                          {{ crt.section_value }}
                        </option>
                      </select>
                    </td>
                  </tr>

                  <tr>
                    <th>Compliance To Treatment</th>
                    <td colspan="3">
                      <select
                        class="form-select"
                        v-model="compliance_treatment"
                      >
                        <option value="">Please Select</option>
                        <option
                          v-for="com in compliancetotreatment"
                          v-bind:key="com.id"
                          v-bind:value="com.id"
                        >
                          {{ com.section_value }}
                        </option>
                      </select>
                    </td>
                  </tr>

                  <tr>
                    <th>Medication Supervised By</th>
                    <td colspan="3">
                      <select
                        class="form-select"
                        v-model="medication_supervised_by"
                      >
                        <option value="">Please Select</option>
                        <option
                          v-for="med in medicationsupervised"
                          v-bind:key="med.id"
                          v-bind:value="med.id"
                        >
                          {{ med.section_value }}
                        </option>
                      </select>
                    </td>
                  </tr>

                  <tr>
                    <td colspan="4">
                      <table class="sub-table-form td-width">
                        <tbody>
                          <tr>
                            <th colspan="5" class="black">
                              psychopathology/Mental State
                            </th>
                          </tr>
                          <tr>
                            <th>Delusions</th>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="heroin-opiate"
                                  id="heroin-opiate-Nil"
                                  value="Nil"
                                  v-model="delusions"
                                />
                                <label
                                  class="form-check-label"
                                  for="heroin-opiate-Nil"
                                >
                                  Nil
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="heroin-opiate"
                                  id="heroin-opiate-previous-history"
                                  value="Mild"
                                  v-model="delusions"
                                />
                                <label
                                  class="form-check-label"
                                  for="heroin-opiate-previous-history"
                                >
                                  Mild
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="heroin-opiate"
                                  id="heroin-opiate-current-use"
                                  value="Moderate"
                                  v-model="delusions"
                                />
                                <label
                                  class="form-check-label"
                                  for="heroin-opiate-current-use"
                                >
                                  Moderate
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="heroin-opiate"
                                  id="heroin-opiate-current-use serve"
                                  value="Severe"
                                  v-model="delusions"
                                />
                                <label
                                  class="form-check-label"
                                  for="heroin-opiate-current-use serve"
                                >
                                  Severe
                                </label>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <th>Hallucination</th>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="heroin-opiate1"
                                  id="heroin-opiate-Nil1"
                                  value="Nil"
                                  v-model="hallucination"
                                />
                                <label
                                  class="form-check-label"
                                  for="heroin-opiate-Nil1"
                                >
                                  Nil
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="heroin-opiate1"
                                  id="heroin-opiate-previous-history1"
                                  value="Mild"
                                  v-model="hallucination"
                                />
                                <label
                                  class="form-check-label"
                                  for="heroin-opiate-previous-history1"
                                >
                                  Mild
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="heroin-opiate1"
                                  id="heroin-opiate-current-use1"
                                  value="Moderate"
                                  v-model="hallucination"
                                />
                                <label
                                  class="form-check-label"
                                  for="heroin-opiate-current-use1"
                                >
                                  Moderate
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="heroin-opiate1"
                                  id="heroin-opiate-current-use s1"
                                  value="Severe"
                                  v-model="hallucination"
                                />
                                <label
                                  class="form-check-label"
                                  for="heroin-opiate-current-use s1"
                                >
                                  Severe
                                </label>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <th>Disorganized Speech /Behavior</th>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="heroin-opiate2"
                                  id="heroin-opiate-Nil2"
                                  value="Nil"
                                  v-model="behavior"
                                />
                                <label
                                  class="form-check-label"
                                  for="heroin-opiate-Nil2"
                                >
                                  Nil
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="heroin-opiate2"
                                  id="heroin-opiate-previous-history2"
                                  value="Mild"
                                  v-model="behavior"
                                />
                                <label
                                  class="form-check-label"
                                  for="heroin-opiate-previous-history2"
                                >
                                  Mild
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="heroin-opiate2"
                                  id="heroin-opiate-current-use2"
                                  value="Moderate"
                                  v-model="behavior"
                                />
                                <label
                                  class="form-check-label"
                                  for="heroin-opiate-current-use2"
                                >
                                  Moderate
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="heroin-opiate2"
                                  id="heroin-opiate-current-use s2"
                                  value="Severe"
                                  v-model="behavior"
                                />
                                <label
                                  class="form-check-label"
                                  for="heroin-opiate-current-use s2"
                                >
                                  Severe
                                </label>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <th>Blunted Affect</th>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="heroin-opiate3"
                                  id="heroin-opiate-Nil3"
                                  value="Nil"
                                  v-model="blunted_affect"
                                />
                                <label
                                  class="form-check-label"
                                  for="heroin-opiate-Nil3"
                                >
                                  Nil
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="heroin-opiate3"
                                  id="heroin-opiate-previous-history3"
                                  value="Mild"
                                  v-model="blunted_affect"
                                />
                                <label
                                  class="form-check-label"
                                  for="heroin-opiate-previous-history3"
                                >
                                  Mild
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="heroin-opiate3"
                                  id="heroin-opiate-current-use3"
                                  value="Moderate"
                                  v-model="blunted_affect"
                                />
                                <label
                                  class="form-check-label"
                                  for="heroin-opiate-current-use3"
                                >
                                  Moderate
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="heroin-opiate3"
                                  id="heroin-opiate-current-use s3"
                                  value="Severe"
                                  v-model="blunted_affect"
                                />
                                <label
                                  class="form-check-label"
                                  for="heroin-opiate-current-use s3"
                                >
                                  Severe
                                </label>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <th>Depression</th>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="heroin-opiate4"
                                  id="heroin-opiate-Nil4"
                                  value="Nil"
                                  v-model="depression"
                                />
                                <label
                                  class="form-check-label"
                                  for="heroin-opiate-Nil4"
                                >
                                  Nil
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="heroin-opiate4"
                                  id="heroin-opiate-previous-history4"
                                  value="Mild"
                                  v-model="depression"
                                />
                                <label
                                  class="form-check-label"
                                  for="heroin-opiate-previous-history4"
                                >
                                  Mild
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="heroin-opiate4"
                                  id="heroin-opiate-current-use4"
                                  value="Moderate"
                                  v-model="depression"
                                />
                                <label
                                  class="form-check-label"
                                  for="heroin-opiate-current-use4"
                                >
                                  Moderate
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="heroin-opiate4"
                                  id="heroin-opiate-current-use s4"
                                  value="Severe"
                                  v-model="depression"
                                />
                                <label
                                  class="form-check-label"
                                  for="heroin-opiate-current-use s4"
                                >
                                  Severe
                                </label>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <th>Anxiety</th>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="heroin-opiate5"
                                  id="heroin-opiate-Nil5"
                                  value="Nil"
                                  v-model="anxiety"
                                />
                                <label
                                  class="form-check-label"
                                  for="heroin-opiate-Nil5"
                                >
                                  Nil
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="heroin-opiate5"
                                  id="heroin-opiate-previous-history5"
                                  value="Mild"
                                  v-model="anxiety"
                                />
                                <label
                                  class="form-check-label"
                                  for="heroin-opiate-previous-history5"
                                >
                                  Mild
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="heroin-opiate5"
                                  id="heroin-opiate-current-use5"
                                  value="Moderate"
                                  v-model="anxiety"
                                />
                                <label
                                  class="form-check-label"
                                  for="heroin-opiate-current-use5"
                                >
                                  Moderate
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="heroin-opiate5"
                                  id="heroin-opiate-current-use s5"
                                  value="Severe"
                                  v-model="anxiety"
                                />
                                <label
                                  class="form-check-label"
                                  for="heroin-opiate-current-use s5"
                                >
                                  Severe
                                </label>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <th>Disorientation</th>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="heroin-opiate6"
                                  id="heroin-opiate-Nil6"
                                  value="Nil"
                                  v-model="disorientation"
                                />
                                <label
                                  class="form-check-label"
                                  for="heroin-opiate-Nil6"
                                >
                                  Nil
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="heroin-opiate6"
                                  id="heroin-opiate-previous-history6"
                                  value="Mild"
                                  v-model="disorientation"
                                />
                                <label
                                  class="form-check-label"
                                  for="heroin-opiate-previous-history6"
                                >
                                  Mild
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="heroin-opiate6"
                                  id="heroin-opiate-current-use6"
                                  value="Moderate"
                                  v-model="disorientation"
                                />
                                <label
                                  class="form-check-label"
                                  for="heroin-opiate-current-use6"
                                >
                                  Moderate
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="heroin-opiate6"
                                  id="heroin-opiate-current-use s6"
                                  value="Severe"
                                  v-model="disorientation"
                                />
                                <label
                                  class="form-check-label"
                                  for="heroin-opiate-current-use s6"
                                >
                                  Severe
                                </label>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <th>Uncooperativeness</th>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="heroin-opiate7"
                                  id="heroin-opiate-Nil7"
                                  value="Nil"
                                  v-model="uncooperativeness"
                                />
                                <label
                                  class="form-check-label"
                                  for="heroin-opiate-Nil7"
                                >
                                  Nil
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="heroin-opiate7"
                                  id="heroin-opiate-previous-history7"
                                  value="Mild"
                                  v-model="uncooperativeness"
                                />
                                <label
                                  class="form-check-label"
                                  for="heroin-opiate-previous-history7"
                                >
                                  Mild
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="heroin-opiate7"
                                  id="heroin-opiate-current-use7"
                                  value="Moderate"
                                  v-model="uncooperativeness"
                                />
                                <label
                                  class="form-check-label"
                                  for="heroin-opiate-current-use7"
                                >
                                  Moderate
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="heroin-opiate7"
                                  id="heroin-opiate-current-use s7"
                                  value="Severe"
                                  v-model="uncooperativeness"
                                />
                                <label
                                  class="form-check-label"
                                  for="heroin-opiate-current-use s7"
                                >
                                  Severe
                                </label>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <th>Poor Impulse Control</th>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="heroin-opiate8"
                                  id="heroin-opiate-Nil8"
                                  value="Nil"
                                  v-model="poor_impulse_control"
                                />
                                <label
                                  class="form-check-label"
                                  for="heroin-opiate-Nil8"
                                >
                                  Nil
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="heroin-opiate8"
                                  id="heroin-opiate-previous-history8"
                                  value="Mild"
                                  v-model="poor_impulse_control"
                                />
                                <label
                                  class="form-check-label"
                                  for="heroin-opiate-previous-history8"
                                >
                                  Mild
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="heroin-opiate8"
                                  id="heroin-opiate-current-use8"
                                  value="Moderate"
                                  v-model="poor_impulse_control"
                                />
                                <label
                                  class="form-check-label"
                                  for="heroin-opiate-current-use8"
                                >
                                  Moderate
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="heroin-opiate8"
                                  id="heroin-opiate-current-use s8"
                                  value="Severe"
                                  v-model="poor_impulse_control"
                                />
                                <label
                                  class="form-check-label"
                                  for="heroin-opiate-current-use s8"
                                >
                                  Severe
                                </label>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <th>Others, Please specify</th>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="heroin-opiate9"
                                  id="heroin-opiate-Nil9"
                                  value="Nil"
                                  v-model="others"
                                />
                                <label
                                  class="form-check-label"
                                  for="heroin-opiate-Nil9"
                                >
                                  Nil
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="heroin-opiate9"
                                  id="heroin-opiate-previous-history9"
                                  value="Mild"
                                  v-model="others"
                                />
                                <label
                                  class="form-check-label"
                                  for="heroin-opiate-previous-history9"
                                >
                                  Mild
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="heroin-opiate9"
                                  id="heroin-opiate-current-use9"
                                  value="Moderate"
                                  v-model="others"
                                />
                                <label
                                  class="form-check-label"
                                  for="heroin-opiate-current-use9"
                                >
                                  Moderate
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="heroin-opiate9"
                                  id="heroin-opiate-current-use s9"
                                  value="Severe"
                                  v-model="others"
                                />
                                <label
                                  class="form-check-label"
                                  for="heroin-opiate-current-use s9"
                                >
                                  Severe
                                </label>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>

                  <tr>
                    <th>Remarks</th>
                    <td colspan="3">
                      <textarea
                        class="form-control textarea"
                        v-model="ipsychopathology_remarks"
                      ></textarea>
                    </td>
                  </tr>

                  <tr>
                    <td colspan="4">
                      <table class="sub-table-form td-width">
                        <tbody>
                          <tr>
                            <td colspan="5" class="black">Risk Assessment:</td>
                          </tr>
                          <tr>
                            <th>Risk of violence/harm to others</th>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="Aggresion"
                                  id="aggresion-none"
                                  value="No"
                                  v-model="risk_of_violence"
                                />
                                <label
                                  class="form-check-label"
                                  for="aggresion-none"
                                >
                                  No
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="Aggresion"
                                  id="aggresion-low"
                                  value="Low"
                                  v-model="risk_of_violence"
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
                                  id="aggresion-medium"
                                  value="Moderate"
                                  v-model="risk_of_violence"
                                />
                                <label
                                  class="form-check-label"
                                  for="aggresion-medium"
                                >
                                  Moderate
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="Aggresion"
                                  id="aggresion-high"
                                  value="High"
                                  v-model="risk_of_violence"
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

                          <tr>
                            <th>Risk Of Suicide</th>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="Aggresion1"
                                  id="aggresion-none1"
                                  value="No"
                                  v-model="risk_of_suicide"
                                />
                                <label
                                  class="form-check-label"
                                  for="aggresion-none1"
                                >
                                  No
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="Aggresion1"
                                  id="aggresion-low1"
                                  value="Low"
                                  v-model="risk_of_suicide"
                                />
                                <label
                                  class="form-check-label"
                                  for="aggresion-low1"
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
                                  name="Aggresion1"
                                  id="aggresion-medium1"
                                  value="Moderate"
                                  v-model="risk_of_suicide"
                                />
                                <label
                                  class="form-check-label"
                                  for="aggresion-medium1"
                                >
                                  Moderate
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="Aggresion1"
                                  id="aggresion-high1"
                                  value="High"
                                  v-model="risk_of_suicide"
                                />
                                <label
                                  class="form-check-label"
                                  for="aggresion-high1"
                                >
                                  High
                                </label>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <th>Risk Of Other Deliberate Self Harm</th>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="Aggresion2"
                                  id="aggresion-none2"
                                  value="No"
                                  v-model="risk_of_other_deliberate"
                                />
                                <label
                                  class="form-check-label"
                                  for="aggresion-none2"
                                >
                                  No
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="Aggresion2"
                                  id="aggresion-low2"
                                  value="Low"
                                  v-model="risk_of_other_deliberate"
                                />
                                <label
                                  class="form-check-label"
                                  for="aggresion-low2"
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
                                  name="Aggresion2"
                                  id="aggresion-medium2"
                                  value="Moderate"
                                  v-model="risk_of_other_deliberate"
                                />
                                <label
                                  class="form-check-label"
                                  for="aggresion-medium2"
                                >
                                  Moderate
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="Aggresion2"
                                  id="aggresion-high2"
                                  value="High"
                                  v-model="risk_of_other_deliberate"
                                />
                                <label
                                  class="form-check-label"
                                  for="aggresion-high2"
                                >
                                  High
                                </label>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <th>
                              Risk Of Severe Self-neglect / Serious Accidental
                              Self-harm
                            </th>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="Aggresion3"
                                  id="aggresion-none3"
                                  value="No"
                                  v-model="risk_of_severe"
                                />
                                <label
                                  class="form-check-label"
                                  for="aggresion-none3"
                                >
                                  No
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="Aggresion3"
                                  id="aggresion-low3"
                                  value="Low"
                                  v-model="risk_of_severe"
                                />
                                <label
                                  class="form-check-label"
                                  for="aggresion-low3"
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
                                  name="Aggresion3"
                                  id="aggresion-medium3"
                                  value="Moderate"
                                  v-model="risk_of_severe"
                                />
                                <label
                                  class="form-check-label"
                                  for="aggresion-medium3"
                                >
                                  Moderate
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="Aggresion3"
                                  id="aggresion-high3"
                                  value="High"
                                  v-model="risk_of_severe"
                                />
                                <label
                                  class="form-check-label"
                                  for="aggresion-high3"
                                >
                                  High
                                </label>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <th>Risk Of Harm From Others / Vulnerability</th>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="Aggresion4"
                                  id="aggresion-none4"
                                  value="No"
                                  v-model="risk_of_harm"
                                />
                                <label
                                  class="form-check-label"
                                  for="aggresion-none4"
                                >
                                  No
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="Aggresion4"
                                  id="aggresion-low4"
                                  value="Low"
                                  v-model="risk_of_harm"
                                />
                                <label
                                  class="form-check-label"
                                  for="aggresion-low4"
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
                                  name="Aggresion4"
                                  id="aggresion-medium4"
                                  value="Moderate"
                                  v-model="risk_of_harm"
                                />
                                <label
                                  class="form-check-label"
                                  for="aggresion-medium4"
                                >
                                  Moderate
                                </label>
                              </div>
                            </td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="Aggresion4"
                                  id="aggresion-high4"
                                  value="High"
                                  v-model="risk_of_harm"
                                />
                                <label
                                  class="form-check-label"
                                  for="aggresion-high4"
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
                    <th>Changes in treatment at Current Visit:</th>
                    <td colspan="3">
                      <textarea
                        class="form-control textarea"
                        v-model="changes_in_teratment"
                      ></textarea>
                    </td>
                  </tr>

                  <tr>
                    <td colspan="2" class="black">Side Effects:</td>
                  </tr>
                  <tr>
                    <th>Akathisia</th>
                    <td>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="Akathisia"
                          id="Akathisia-none"
                          value="Absent"
                          v-model="akathisia"
                        />
                        <label class="form-check-label" for="Akathisia-none">
                          Absent
                        </label>
                      </div>

                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="Akathisia"
                          id="Akathisia-low"
                          value="Present"
                          v-model="akathisia"
                        />
                        <label class="form-check-label" for="Akathisia-low">
                          Present
                        </label>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>Acute Dystonia</th>
                    <td>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="Acute"
                          id="Acute-none"
                          value="Absent"
                          v-model="acute_dystonia"
                        />
                        <label class="form-check-label" for="Acute-none">
                          Absent
                        </label>
                      </div>

                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="Acute"
                          id="Acute-low"
                          value="Present"
                          v-model="acute_dystonia"
                        />
                        <label class="form-check-label" for="Acute-low">
                          Present
                        </label>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>Parkinsonism</th>
                    <td>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="Parkinsonism"
                          id="Parkinsonism-none"
                          value="Absent"
                          v-model="parkinsonism"
                        />
                        <label class="form-check-label" for="Parkinsonism-none">
                          Absent
                        </label>
                      </div>

                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="Parkinsonism"
                          id="Parkinsonism-low"
                          value="Present"
                          v-model="parkinsonism"
                        />
                        <label class="form-check-label" for="Parkinsonism-low">
                          Present
                        </label>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>Tardive Dyskinesia</th>
                    <td>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="Tardive"
                          id="Tardive-none"
                          value="Absent"
                          v-model="tardive_dyskinesia"
                        />
                        <label class="form-check-label" for="Tardive-none">
                          Absent
                        </label>
                      </div>

                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="Tardive"
                          id="Tardive-low"
                          value="Present"
                          v-model="tardive_dyskinesia"
                        />
                        <label class="form-check-label" for="Tardive-low">
                          Present
                        </label>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>Tardive Dystonia</th>
                    <td>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="Dystonia"
                          id="Dystonia-none"
                          value="Absent"
                          v-model="tardive_dystonia"
                        />
                        <label class="form-check-label" for="Dystonia-none">
                          Absent
                        </label>
                      </div>

                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="Dystonia"
                          id="Dystonia-low"
                          value="Present"
                          v-model="tardive_dystonia"
                        />
                        <label class="form-check-label" for="Dystonia-low">
                          Present
                        </label>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>Others, specify</th>
                    <td colspan="3">
                      <input
                        type="text"
                        class="form-control"
                        name=""
                        v-model="others_specify"
                      />
                    </td>
                  </tr>

                  <tr>
                    <th>Remarks:</th>
                    <td colspan="3">
                      <textarea
                        class="form-control textarea"
                        v-model="side_effects_remarks"
                      ></textarea>
                    </td>
                  </tr>

                  <tr>
                    <td colspan="4" class="black">
                      Personal And Social Performance (PSP) Scale
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <input
                        type="text"
                        class="form-control"
                        name=""
                        v-model="social_performance"
                      />
                    </td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-warning btn-text ml-10"
                        @click="Openpsptest"
                      >
                        <i class="far fa-file-alt"></i> Assessment Test
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td colspan="4" class="black">Intervention</td>
                  </tr>

                  <tr>
                    <th>Psychoeducation/Counseling</th>
                    <td>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="Psychoeducation"
                          id="Psychoeducation-none"
                          value="Yes"
                          v-model="psychoeducation"
                        />
                        <label
                          class="form-check-label"
                          for="Psychoeducation-none"
                        >
                          Yes
                        </label>
                      </div>

                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="Psychoeducation"
                          id="Psychoeducation-low"
                          value="No"
                          v-model="psychoeducation"
                        />
                        <label
                          class="form-check-label"
                          for="Psychoeducation-low"
                        >
                          No
                        </label>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>Coping Skills Training</th>
                    <td>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="Coping"
                          id="Coping-none"
                          value="Yes"
                          v-model="coping_skills"
                        />
                        <label class="form-check-label" for="Coping-none">
                          Yes
                        </label>
                      </div>

                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="Coping"
                          id="Coping-low"
                          value="No"
                          v-model="coping_skills"
                        />
                        <label class="form-check-label" for="Coping-low">
                          No
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>ADL Training</th>
                    <td>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="ADL"
                          id="ADL-none"
                          value="Yes"
                          v-model="adl_training"
                        />
                        <label class="form-check-label" for="ADL-none">
                          Yes
                        </label>
                      </div>

                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="ADL"
                          id="ADL-low"
                          value="No"
                          v-model="adl_training"
                        />
                        <label class="form-check-label" for="ADL-low">
                          No
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>Supported Employment</th>
                    <td>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="Supported"
                          id="Supported-none"
                          value="Yes"
                          v-model="supported_employment"
                        />
                        <label class="form-check-label" for="Supported-none">
                          Yes
                        </label>
                      </div>

                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="Supported"
                          id="Supported-low"
                          value="No"
                          v-model="supported_employment"
                        />
                        <label class="form-check-label" for="Supported-low">
                          No
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>Family Intervention</th>
                    <td>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="Family"
                          id="Family-none"
                          value="Yes"
                          v-model="family_intervention"
                        />
                        <label class="form-check-label" for="Family-none">
                          Yes
                        </label>
                      </div>

                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="Family"
                          id="Family-low"
                          value="No"
                          v-model="family_intervention"
                        />
                        <label class="form-check-label" for="Family-low">
                          No
                        </label>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>Others, specify</th>
                    <td colspan="3">
                      <input
                        type="text"
                        class="form-control"
                        name=""
                        v-model="intervention_others"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Remarks:</th>
                    <td colspan="3">
                      <textarea
                        class="form-control textarea"
                        v-model="remarks"
                      ></textarea>
                    </td>
                  </tr>

                  <tr>
                    <th>Employment the past 6 month:</th>
                    <td colspan="3">
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="Employment"
                          id="Employment-none"
                          value="Yes"
                          v-model="employment_past_months"
                        />
                        <label class="form-check-label" for="Employment-none">
                          Yes
                        </label>
                      </div>

                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="Employment"
                          id="Employment-low"
                          value="No"
                          v-model="employment_past_months"
                        />
                        <label class="form-check-label" for="Employment-low">
                          No
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr v-if="this.employment_past_months == 'Yes'">
                    <th>*If Yes,</th>
                    <td colspan="3">
                      <select class="form-select" v-model="if_employment_yes">
                        <option value="">Please Select</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Un-paid-family worker">
                          Un-paid-family worker
                        </option>
                      </select>
                    </td>
                  </tr>

                  <tr>
                    <td colspan="4" class="black">Follow Up</td>
                  </tr>

                  <tr>
                    <th>Psychiatric clinic</th>
                    <td colspan="3">
                      <input
                        type="date"
                        class="form-control"
                        v-model="psychiatric_clinic"
                      />
                    </td>
                  </tr>

                  <tr>
                    <th>IM depot in clinic</th>
                    <td colspan="3">
                      <input
                        type="date"
                        class="form-control"
                        v-model="im_depot_clinic"
                      />
                    </td>
                  </tr>

                  <tr>
                    <th>Next community visit</th>
                    <td colspan="3">
                      <input
                        type="date"
                        class="form-control"
                        v-model="next_community_visit"
                      />
                    </td>
                  </tr>

                  <tr>
                    <th>Comments</th>
                    <td colspan="3">
                      <textarea
                        class="form-control textarea"
                        v-model="comments"
                      ></textarea>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div class="accordion form-accordion mt-3" id="accordionExample">
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

              <table class="notes width-eq">
                <tbody>
                  <tr>
                    <td colspan="4" class="black">Signature</td>
                  </tr>
                  <tr>
                    <th>Staff Name</th>
                    <td colspan="3">
                      <input
                        type="text"
                        class="form-control"
                        v-model="staff_name"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Designation</th>
                    <td colspan="3">
                      <input
                        type="text"
                        class="form-control"
                        v-model="designation"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              </div>
              <div class="reslt d-none d-print-block">
              <table class="notes width-eq">
                <tbody>
                  <tr>
                    <th>Date & Time Seen By : </th>
                    <td class="tdl-5">
                      {{ this.cps_date }} /
                      {{ this.cps_time }} /
                      {{ this.cps_seenByName }}
                    </td>
                  </tr>

                  <tr>
                    <th>Date & Time Discussed with : </th>
                    <td class="tdl-5">
                      {{ this.cps_date_discussed }} /
                      {{ this.cps_time_discussed }} /
                      {{ this.cps_discussedWithName}}
                    </td>
                  </tr>

                  <tr>
                    <th>Visit Date & time : </th>
                    <td class="tdl-5">
                      {{ this.visit_date }} /
                      {{ this.visit_time }}
                    </td>
                  </tr>

                  <tr>
                    <th>Informants : </th>
                    <td colspan="3">
                      <table>
                        <thead>
                          <tr>
                            <th class="th-bg">Name</th>
                            <th class="th-bg">Relationship</th>
                            <th class="th-bg">Contact No</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="tdl-5">
                              {{ this.informants_name }}
                            </td>
                            <td class="tdl-5">
                              {{ this.informants_relationship }}
                            </td>
                            <td class="tdl-5">
                              {{ this.informants_contact }}
                            </td>
                          </tr>
                          <tr>
                            <td colspan="3" style="padding: 0">
                              <!-- <a href="#" class="add"
                                ><i class="far fa-plus"></i
                              ></a> -->
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>

                  <tr>
                    <th>Case Manager : </th>
                    <td colspan="3">
                      {{ this.case_managerName }}
                    </td>
                  </tr>

                  <tr>
                    <th>Visited By : </th>
                    <td colspan="2">
                      {{ this.visited_by }}
                    </td>
                    <td>
                      <!-- <a href="#" class="add"><i class="far fa-plus"></i></a> -->
                    </td>
                  </tr>

                  <tr>
                    <th>Visit Outcome : </th>
                    <td colspan="3">
                      {{ this.visit_outcomeSectionValue }}
                    </td>
                  </tr>

                  <tr>
                    <th>Current Intervention : </th>
                    <td colspan="3">
                      {{ this.current_interventionSectionValue }}
                    </td>
                  </tr>

                  <tr>
                    <th>Compliance To Treatment : </th>
                    <td colspan="3">
                      {{ this.compliance_treatmentSectionValue }}
                    </td>
                  </tr>

                  <tr>
                    <th>Medication Supervised By : </th>
                    <td colspan="3">
                      {{ this.medication_supervisedBySectionValue }}
                    </td>
                  </tr>

                  <tr>
                    <td colspan="4">
                      <table class="sub-table-form td-width">
                        <tbody>
                          <tr>
                            <th colspan="5" class="black">
                              psychopathology/Mental State
                            </th>
                          </tr>
                          <tr>
                            <th>Delusions : </th>
                            <td>
                              <div class="form-check">
                                {{ this.delusions }}
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <th>Hallucination : </th>
                            <td>
                              <div class="form-check">
                                {{ this.hallucination }}
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <th>Disorganized Speech /Behavior : </th>
                            <td>
                              <div class="form-check">
                                {{ this.behavior }}
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <th>Blunted Affect : </th>
                            <td>
                              <div class="form-check">
                                {{this.blunted_affect}}
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <th>Depression : </th>
                            <td>
                              <div class="form-check">
                                {{this.depression}}
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <th>Anxiety : </th>
                            <td>
                              <div class="form-check">
                                {{this.anxiety}}
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <th>Disorientation : </th>
                            <td>
                              <div class="form-check">
                                {{this.disorientation}}
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <th>Uncooperativeness : </th>
                            <td>
                              <div class="form-check">
                                {{ this.uncooperativeness }}
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <th>Poor Impulse Control : </th>
                            <td>
                              <div class="form-check">
                                {{this.poor_impulse_control}}
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <th>Others, Please specify : </th>
                            <td>
                              <div class="form-check">
                                {{ this.others }}
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>

                  <tr>
                    <th>Remarks : </th>
                    <td colspan="3">
                      <span>{{ this.ipsychopathology_remarks }}</span>
                    </td>
                  </tr>

                  <tr>
                    <td colspan="4">
                      <table class="sub-table-form td-width">
                        <tbody>
                          <tr>
                            <td colspan="5" class="black">Risk Assessment:</td>
                          </tr>
                          <tr>
                            <th>Risk of violence/harm to others : </th>
                            <td>
                              <div class="form-check">
                                {{this.risk_of_violence}}
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <th>Risk Of Suicide : </th>
                            <td>
                              <div class="form-check">
                                {{this.risk_of_suicide}}
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <th>Risk Of Other Deliberate Self Harm : </th>
                            <td>
                              <div class="form-check">
                                {{this.risk_of_other_deliberate }}
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <th>
                              Risk Of Severe Self-neglect / Serious Accidental
                              Self-harm :
                            </th>
                            <td>
                              <div class="form-check">
                                {{ this.risk_of_severe }}
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <th>Risk Of Harm From Others / Vulnerability : </th>
                            <td>
                              <div class="form-check">
                                {{ this.risk_of_harm }}
                              </div>
                            </td>

                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>

                  <tr>
                    <th>Changes in treatment at Current Visit : </th>
                    <td colspan="3">
                      <span>{{this.changes_in_teratment}}</span>
                    </td>
                  </tr>

                  <tr>
                    <td colspan="2" class="black">Side Effects :</td>
                  </tr>
                  <tr>
                    <th>Akathisia : </th>
                    <td>
                      <div class="form-check form-check-inline">
                        {{ this.akathisia }}
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>Acute Dystonia : </th>
                    <td>
                      <div class="form-check form-check-inline">
                        {{this.acute_dystonia}}

                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>Parkinsonism : </th>
                    <td>
                      <div class="form-check form-check-inline">
                        {{ this.parkinsonism }}
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>Tardive Dyskinesia : </th>
                    <td>
                      <div class="form-check form-check-inline">
                        {{ this.tardive_dyskinesia }}
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>Tardive Dystonia : </th>
                    <td>
                      <div class="form-check form-check-inline">
                        {{ this.tardive_dystonia }}
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>Others, specify : </th>
                    <td colspan="3">
                      <span>{{this.others_specify}}</span>
                    </td>
                  </tr>

                  <tr>
                    <th>Remarks : </th>
                    <td colspan="3">
                      <span>{{ this.side_effects_remarks }}</span>
                    </td>
                  </tr>

                  <tr>
                    <td colspan="4" class="black">
                      Personal And Social Performance (PSP) Scale
                    </td>
                  </tr>

                  <tr>
                    <td>
                      {{ this.social_performance }}
                    </td>
                    <!-- <td>
                      <button
                        type="button"
                        class="btn btn-warning btn-text ml-10"
                        @click="Openpsptest"
                      >
                        <i class="far fa-file-alt"></i> Assessment Test
                      </button>
                    </td> -->
                  </tr>

                  <tr>
                    <td colspan="4" class="black">Intervention</td>
                  </tr>

                  <tr>
                    <th>Psychoeducation/Counseling : </th>
                    <td>
                      <div class="form-check form-check-inline">
                        {{ this.psychoeducation}}
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>Coping Skills Training : </th>
                    <td>
                      <div class="form-check form-check-inline">
                        {{ this.coping_skills }}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>ADL Training : </th>
                    <td>
                      <div class="form-check form-check-inline">
                        {{ this.adl_training }}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>Supported Employment : </th>
                    <td>
                      <div class="form-check form-check-inline">
                        {{ this.supported_employment }}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>Family Intervention : </th>
                    <td>
                      <div class="form-check form-check-inline">
                        {{ this.family_intervention }}
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>Others, specify : </th>
                    <td colspan="3">
                      {{ this.intervention_others }}
                    </td>
                  </tr>
                  <tr>
                    <th>Remarks : </th>
                    <td colspan="3">
                      {{ this.remarks }}
                    </td>
                  </tr>

                  <tr>
                    <th>Employment the past 6 month : </th>
                    <td colspan="3">
                      <div class="form-check form-check-inline">
                        {{ this.employment_past_months }}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>*If Yes, : </th>
                    <td colspan="3">
                      {{ this.if_employment_yes }}
                    </td>
                  </tr>

                  <tr>
                    <td colspan="4" class="black">Follow Up</td>
                  </tr>

                  <tr>
                    <th>Psychiatric clinic : </th>
                    <td colspan="3">

                      <div class="">
                      {{ this.psychiatric_clinic}}
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>IM depot in clinic : </th>
                    <td colspan="3">

                      <div class="">
                      {{ this.im_depot_clinic }}
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>Next community visit : </th>
                    <td colspan="3">
                      <div class="">
                      {{ this.next_community_visit }}
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>Comments : </th>
                    <td colspan="3">
                      <div class="">
                      {{ this.comments }}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div class="accordion form-accordion mt-3" id="accordionExample">
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
                          >Location Of Services : </label
                        >
                        <div class="col-sm-8">
                          {{ this.location_servicesIdSectionValue }}
                        </div>
                      </div>
                      <!-- close-row -->
                      <div class="row mb-3">
                        <label class="col-sm-4 col-form-label"
                          >Type Of Diagnosis : </label
                        >
                        <div class="col-sm-8">
                          {{ this.type_diagnosisIdSectionValue.icd_category_code }} {{this.type_diagnosisIdSectionValue.icd_category_name}}
                        </div>
                      </div>
                      <!-- close-row -->
                      <div class="row mb-3">
                        <label class="col-sm-4 col-form-label"
                          >Category Of Services :
                        </label>
                        <div class="col-sm-8">
                          {{ this.category_services }}
                        </div>
                      </div>
                      <!-- close-row -->
                      <!-- hide-div -->
                      <div class="assisstance services hide mb-3">
                        <div class="row">
                          <div class="col-md-6 mb-3">
                            <label class="form-label">Services : </label>
                            <div>{{ this.services_idSectionValue }}</div>
                          </div>
                        </div>
                      </div>
                      <!-- 01 -->
                      <div class="clinical-work services hide mb-3">
                        <div class="row">
                          <div class="col-md-6 mb-3">
                            <label class="form-label">ICD 9 CODE : </label>
                            {{ this.code_idSectionValue.icd_category_code }} {{this.code_idSectionValue.icd_category_name}}
                          </div>
                          <div class="col-md-6 mb-3">
                            <label class="form-label">ICD 9 SUB CODE : </label>
                            {{ this.sub_codeIdSectionValue.icd_code }} {{this.sub_codeIdSectionValue.icd_name}}
                          </div>
                        </div>
                      </div>
                      <!-- 02 -->
                      <div class="external services hide mb-3">
                        <div class="row">
                          <div class="col-md-6 mb-3">
                            <label class="form-label">Services : </label>
                            {{ this.serviceid_sectionValue }}
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
                          {{ this.complexity_servicesIdSectionValue }}
                        </div>
                        <div class="col-md-6 mb-3">
                          <label class="form-label">Outcome : </label>
                          {{ this.outcome_idSectionValue }}
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
                  >
                    <div class="accordion-body">
                      <div class="col-md-12 mb-3">
                        <label class="form-label">Medication : </label>
                        {{this.medication_des}}
                      </div>
                    </div>
                  </div>
                </div>
                <!--  -->
              </div>

              <table class="notes width-eq">
                <tbody>
                  <tr>
                    <td colspan="4" class="black">Signature</td>
                  </tr>
                  <tr>
                    <th>Staff Name : </th>
                    <td colspan="3">
                      <span>{{this.staff_name}}</span>
                    </td>
                  </tr>
                  <tr>
                    <th>Designation : </th>
                    <td colspan="3">
                      <span>{{ this.designation }}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              </div>
  <p v-if="errorList.length">
                          <ul>
                           <li style="color:red"  v-for='err in errorList' :key='err' >
                              {{ err }}
                             </li>
                        </ul>
                       </p>

              <div class="d-flex" v-if="!pid">
                <div class="ml-auto">
                  <button @click="OnSubmit" class="btn btn-warning btn-text"
                    ><i class="far fa-save"></i> Save</button
                  >
                  <button @click="setData" class="btn btn-success btn-text"
                    ><i class="fad fa-print"></i>Print</button
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
  name: "cps-progress-note",
  data() {
    return {
      stafflist: [],
      rolelist: [],
      teamlist: [],
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
      currentinterventionlist: [],
      compliancetotreatment: [],
      medicationsupervised: [],
      assistancelist: [],
      externallist: [],
      cps_date: "",
      cps_time: "",
      cps_seen_by: "",
      cps_date_discussed: "",
      cps_time_discussed: "",
      cps_discussed_with: "",
      visit_date: "",
      visit_time: "",
      informants_name: "",
      informants_relationship: "",
      informants_contact: "",
      case_manager: "",
      visited_by: "",
      visit_outcome: "",
      current_intervention: "",
      compliance_treatment: "",
      medication_supervised_by: "",
      delusions: "",
      hallucination: "",
      behavior: "",
      blunted_affect: "",
      depression: "",
      anxiety: "",
      disorientation: "",
      uncooperativeness: "",
      poor_impulse_control: "",
      others: "",
      ipsychopathology_remarks: "",
      risk_of_violence: "",
      risk_of_suicide: "",
      risk_of_other_deliberate: "",
      risk_of_severe: "",
      risk_of_harm: "",
      changes_in_teratment: "",
      akathisia: "",
      acute_dystonia: "",
      parkinsonism: "",
      tardive_dyskinesia: "",
      tardive_dystonia: "",
      others_specify: "",
      side_effects_remarks: "",
      social_performance: "",
      psychoeducation: "",
      coping_skills: "",
      adl_training: "",
      supported_employment: "",
      family_intervention: "",
      intervention_others: "",
      remarks: "",
      employment_past_months: "",
      if_employment_yes: "",
      psychiatric_clinic: "",
      im_depot_clinic: "",
      next_community_visit: "",
      comments: "",

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
      staff_name: "",
      designation: "",
      status: 1,
      pid: 0,
      type: "",

      // for print data based on dropdown

      cps_seenByName:"",
      cps_discussedWithName:"",
      case_managerName:"",
      visit_outcomeSectionValue:"",
      current_interventionSectionValue:"",
      compliance_treatmentSectionValue:"",
      medication_supervisedBySectionValue:"",

      location_servicesIdSectionValue:"",
      type_diagnosisIdSectionValue:[],
      services_idSectionValue:"",
      code_idSectionValue:"",
      sub_codeIdSectionValue:"",
      serviceid_sectionValue:"",
      complexity_servicesIdSectionValue:"",
      outcome_idSectionValue:"",
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.designation = this.userdetails.user.role;
    let urlParams = new URLSearchParams(window.location.search);
    this.email = this.userdetails.user.email;
    this.Id = urlParams.get("id");

    if (this.Id) {
      this.staff_name = this.userdetails.user.name;
      this.GetList();
      this.GetstaffList();
      //this.GetteamList();
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
      const response8 = await this.$axios.get(
        "general-setting/list?section=" + "current-interventionl",
        {
          headers,
        }
      );
      if (response8.data.code == 200 || response8.data.code == "200") {
        this.currentinterventionlist = response8.data.list;
      } else {
        this.currentinterventionlist = [];
      }

      const response9 = await this.$axios.get(
        "general-setting/list?section=" + "compliance-to-treatment",

        {
          headers,
        }
      );
      if (response9.data.code == 200 || response9.data.code == "200") {
        this.compliancetotreatment = response9.data.list;
      } else {
        this.compliancetotreatment = [];
      }

      const response10 = await this.$axios.get(
        "general-setting/list?section=" + "medication-supervised-by",

        {
          headers,
        }
      );
      if (response10.data.code == 200 || response10.data.code == "200") {
        this.medicationsupervised = response10.data.list;
      } else {
        this.medicationsupervised = [];
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
    async GetstaffList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const axios = require("axios").default;
      axios
        .get(
          `${this.$axios.defaults.baseURL}` +
            "hospital/getServiceByTeamId",

          { headers, params: {team_id: this.appId, email: this.email}   }
        )
        .then((resp) => {
          // this.list = resp.data.list;
          this.stafflist = resp.data.list;
          this.teamlist = resp.data.stafflist;
          this.rolelist = resp.data.rolelist;
        });
    },

    // async GetteamList(){
    //   const headers = {
    //     Authorization: "Bearer " + this.userdetails.access_token,
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   };
    //   const response = await this.$axios.get("staff-management/getListByBranchId/"+ this.userdetails.branch.branch_id, {
    //     headers,
    //   });
    //   //this.teamlist = response.data.list;

    // },

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
    Openpsptest() {
      let route = this.$router.resolve({
        path: "/modules/Intervention/psp?id=" + this.Id,
      });
      window.open(route.href);
    },
    async OnSubmit() {
      this.validate = false;
      this.errorList = [];
      try {
        if (!this.cps_date || !this.cps_time || !this.cps_seen_by) {
          this.errorList.push("Date & Time Seen By is required");
        }
        if (
          !this.cps_date_discussed ||
          !this.cps_time_discussed ||
          !this.cps_discussed_with
        ) {
          this.errorList.push("Date & Time Discussed with is required");
        }
        if (!this.visit_date || !this.visit_time) {
          this.errorList.push("Visit Date & time is required");
        }
        if (!this.informants_name) {
          this.errorList.push("Informants NAME is required");
        }
        if (!this.informants_relationship) {
          this.errorList.push("Informants RELATIONSHIP is required");
        }
        if (!this.informants_contact) {
          this.errorList.push("Informants CONTACT NO is required");
        }
        if (!this.case_manager) {
          this.errorList.push("Case Manager	 is required");
        }
        if (!this.visited_by) {
          this.errorList.push("Visited By	is required");
        }
        if (!this.visit_outcome) {
          this.errorList.push("Visit Outcome is required");
        }
        if (!this.current_intervention) {
          this.errorList.push("Current Intervention is required");
        }
        if (!this.compliance_treatment) {
          this.errorList.push("Compliance To Treatment is required");
        }
        if (!this.medication_supervised_by) {
          this.errorList.push("Medication Supervised By is required");
        }
        if (!this.delusions) {
          this.errorList.push("Delusions is required");
        }
        if (!this.hallucination) {
          this.errorList.push("Hallucination is required");
        }
        if (!this.behavior) {
          this.errorList.push("Disorganized Speech /Behavior is required");
        }
        if (!this.blunted_affect) {
          this.errorList.push("Blunted Affect	is required");
        }
        if (!this.depression) {
          this.errorList.push("Depression	 is required");
        }
        if (!this.anxiety) {
          this.errorList.push("Anxiety is required");
        }
        if (!this.disorientation) {
          this.errorList.push("Disorientation is required");
        }
        if (!this.uncooperativeness) {
          this.errorList.push("Uncooperativeness is required");
        }
        if (!this.poor_impulse_control) {
          this.errorList.push("Poor Impulse Control is required");
        }
        if (!this.others) {
          this.errorList.push("Others, Please specify is required");
        }
        if (!this.ipsychopathology_remarks) {
          this.errorList.push(
            "PSYCHOPATHOLOGY/MENTAL STATE Remarks is required"
          );
        }
        if (!this.risk_of_violence) {
          this.errorList.push("Risk of violence/harm to others is required");
        }
        if (!this.risk_of_suicide) {
          this.errorList.push("Risk Of Suicide is required");
        }
        if (!this.risk_of_other_deliberate) {
          this.errorList.push("Risk Of Other Deliberate Self Harm is required");
        }
        if (!this.risk_of_severe) {
          this.errorList.push(
            "Risk Of Severe Self-neglect / Serious Accidental Self-harm is required"
          );
        }
        if (!this.risk_of_harm) {
          this.errorList.push(
            "Risk Of Harm From Others / Vulnerability is required"
          );
        }
        if (!this.changes_in_teratment) {
          this.errorList.push(
            "Changes in teratment at Current Visit is required"
          );
        }
        if (!this.akathisia) {
          this.errorList.push("Akathisia is required");
        }
        if (!this.acute_dystonia) {
          this.errorList.push("Acute Dystonia	 is required");
        }
        if (!this.parkinsonism) {
          this.errorList.push("Parkinsonism is required");
        }
        if (!this.tardive_dyskinesia) {
          this.errorList.push("Tardive Dyskinesia is required");
        }
        if (!this.tardive_dystonia) {
          this.errorList.push("Tardive Dystonia	 is required");
        }
        if (!this.others_specify) {
          this.errorList.push("Others, specify	 is required");
        }
        if (!this.side_effects_remarks) {
          this.errorList.push("SIDE EFFECTS Remarks is required");
        }
        if (!this.social_performance) {
          this.errorList.push(
            "PERSONAL AND SOCIAL PERFORMANCE (PSP) SCALE is required"
          );
        }
        if (!this.psychoeducation) {
          this.errorList.push("Psychoeducation/Counseling	 is required");
        }
        if (!this.coping_skills) {
          this.errorList.push("Coping Skills Training	 is required");
        }
        if (!this.adl_training) {
          this.errorList.push("ADL Training is required");
        }
        if (!this.supported_employment) {
          this.errorList.push("Supported Employment is required");
        }
        if (!this.family_intervention) {
          this.errorList.push("Family Intervention is required");
        }
        if (!this.intervention_others) {
          this.errorList.push("Others, specify is required");
        }
        if (!this.remarks) {
          this.errorList.push("INTERVENTION Remarks is required");
        }

        if (!this.employment_past_months) {
          this.errorList.push("Employment the past 6 month is required");
        }
        if (this.employment_past_months == "Yes") {
          if (!this.if_employment_yes) {
            this.errorList.push("If Yes is required");
            this.validate = false;
          }
        }
        if (!this.psychiatric_clinic) {
          this.errorList.push("Psychiatric clinic	 is required");
        }
        if (!this.im_depot_clinic) {
          this.errorList.push("IM depot in clinic is required");
        }
        if (!this.next_community_visit) {
          this.errorList.push("Next community visit	 is required");
        }
        if (!this.comments) {
          this.errorList.push("Comments is required");
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
        if (!this.staff_name) {
          this.errorList.push("Staff Name	 is required");
        }
        if (!this.designation) {
          this.errorList.push("Designation is required");
        }

        // if (
        //   this.cps_date &&
        //   this.cps_time &&
        //   this.cps_seen_by &&
        //   this.cps_date_discussed &&
        //   this.cps_time_discussed &&
        //   this.cps_discussed_with &&
        //   this.visit_date &&
        //   this.visit_time &&
        //   this.informants_name &&
        //   this.informants_relationship &&
        //   this.informants_contact &&
        //   this.case_manager &&
        //   this.visited_by &&
        //   this.visit_outcome &&
        //   this.current_intervention &&
        //   this.compliance_treatment &&
        //   this.medication_supervised_by &&
        //   this.delusions &&
        //   this.hallucination &&
        //   this.behavior &&
        //   this.blunted_affect &&
        //   this.depression &&
        //   this.anxiety &&
        //   this.disorientation &&
        //   this.uncooperativeness &&
        //   this.poor_impulse_control &&
        //   this.others &&
        //   this.ipsychopathology_remarks &&
        //   this.risk_of_violence &&
        //   this.risk_of_suicide &&
        //   this.risk_of_other_deliberate &&
        //   this.risk_of_severe &&
        //   this.risk_of_harm &&
        //   this.changes_in_teratment &&
        //   this.akathisia &&
        //   this.acute_dystonia &&
        //   this.parkinsonism &&
        //   this.tardive_dyskinesia &&
        //   this.others_specify &&
        //   this.side_effects_remarks &&
        //   this.social_performance &&
        //   this.psychoeducation &&
        //   this.coping_skills &&
        //   this.adl_training &&
        //   this.supported_employment &&
        //   this.family_intervention &&
        //   this.intervention_others &&
        //   this.remarks &&
        //   this.employment_past_months &&
        //   this.psychiatric_clinic &&
        //   this.im_depot_clinic &&
        //   this.next_community_visit &&
        //   this.comments &&
        //   this.location_services_id &&
        //   this.type_diagnosis_id &&
        //   this.category_services &&
        //   this.complexity_services_id &&
        //   this.outcome_id &&
        //   //this.medication_des &&
        //   this.validate &&
        //   this.staff_name &&
        //   this.designation
        // )
        //{
          this.loader = true;
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          const response = await this.$axios.post(
            "cps-progress-note/add",
            {
              added_by: this.userdetails.user.id,
              patient_mrn_id: this.Id,
              cps_date: this.cps_date,
              cps_time: this.cps_time,
              cps_seen_by: this.cps_seen_by,
              cps_date_discussed: this.cps_date_discussed,
              cps_time_discussed: this.cps_time_discussed,
              cps_discussed_with: this.cps_discussed_with,
              visit_date: this.visit_date,
              visit_time: this.visit_time,
              informants_name: this.informants_name,
              informants_relationship: this.informants_relationship,
              informants_contact: this.informants_contact,
              case_manager: this.case_manager,
              visited_by: this.visited_by,
              visit_outcome: this.visit_outcome,
              current_intervention: this.current_intervention,
              compliance_treatment: this.compliance_treatment,
              medication_supervised_by: this.medication_supervised_by,
              delusions: this.delusions,
              hallucination: this.hallucination,
              behavior: this.behavior,
              blunted_affect: this.blunted_affect,
              depression: this.depression,
              anxiety: this.anxiety,
              disorientation: this.disorientation,
              uncooperativeness: this.uncooperativeness,
              poor_impulse_control: this.poor_impulse_control,
              others: this.others,
              ipsychopathology_remarks: this.ipsychopathology_remarks,
              risk_of_violence: this.risk_of_violence,
              risk_of_suicide: this.risk_of_suicide,
              risk_of_other_deliberate: this.risk_of_other_deliberate,
              risk_of_severe: this.risk_of_severe,
              risk_of_harm: this.risk_of_harm,
              changes_in_teratment: this.changes_in_teratment,
              akathisia: this.akathisia,
              acute_dystonia: this.acute_dystonia,
              parkinsonism: this.parkinsonism,
              tardive_dyskinesia: this.tardive_dyskinesia,
              tardive_dystonia: this.tardive_dystonia,
              others_specify: this.others_specify,
              side_effects_remarks: this.side_effects_remarks,
              social_performance: this.social_performance,
              psychoeducation: this.psychoeducation,
              coping_skills: this.coping_skills,
              adl_training: this.adl_training,
              supported_employment: this.supported_employment,
              family_intervention: this.family_intervention,
              intervention_others: this.intervention_others,
              remarks: this.remarks,
              employment_past_months: this.employment_past_months,
              if_employment_yes: this.if_employment_yes,
              psychiatric_clinic: this.psychiatric_clinic,
              im_depot_clinic: this.im_depot_clinic,
              next_community_visit: this.next_community_visit,
              comments: this.comments,
              location_service: this.location_services_id,
              diagnosis_type: this.type_diagnosis_id,
              service_category: this.category_services,
              services_id: this.services_id,
              code_id: this.code_id,
              sub_code_id: this.sub_code_id,
              complexity_services: this.complexity_services_id,
              outcome: this.outcome_id,
              medication: this.medication_des,
              staff_name: this.staff_name,
              designation: this.designation,
              status: "1",
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
        //}
      } catch (e) {}
    },
    resetmodel() {
      this.cps_date = "";
      this.cps_time = "";
      this.cps_seen_by = "";
      this.cps_date_discussed = "";
      this.cps_time_discussed = "";
      this.cps_discussed_with = "";
      this.visit_date = "";
      this.visit_time = "";
      this.informants_name = "";
      this.informants_relationship = "";
      this.informants_contact = "";
      this.case_manager = "";
      this.visited_by = "";
      this.visit_outcome = "";
      this.current_intervention = "";
      this.compliance_treatment = "";
      this.medication_supervised_by = "";
      this.delusions = "";
      this.hallucination = "";
      this.behavior = "";
      this.blunted_affect = "";
      this.depression = "";
      this.anxiety = "";
      this.disorientation = "";
      this.uncooperativeness = "";
      this.poor_impulse_control = "";
      this.others = "";
      this.ipsychopathology_remarks = "";
      this.risk_of_violence = "";
      this.risk_of_suicide = "";
      this.risk_of_other_deliberate = "";
      this.risk_of_severe = "";
      this.risk_of_harm = "";
      this.changes_in_teratment = "";
      this.akathisia = "";
      this.acute_dystonia = "";
      this.parkinsonism = "";
      this.tardive_dyskinesia = "";
      this.tardive_dystonia = "";
      this.others_specify = "";
      this.side_effects_remarks = "";
      this.social_performance = "";
      this.psychoeducation = "";
      this.coping_skills = "";
      this.adl_training = "";
      this.supported_employment = "";
      this.family_intervention = "";
      this.intervention_others = "";
      this.remarks = "";
      this.employment_past_months = "";
      this.if_employment_yes = "";
      this.psychiatric_clinic = "";
      this.im_depot_clinic = "";
      this.next_community_visit = "";
      this.comments = "";
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
      this.staff_name = "";
      this.designation = "";
    },
    print() {
      var newstr = document.getElementsByClassName("reslt")[0].innerHTML;
      document.body.innerHTML = newstr;
      window.print();
      // Reload the page to refresh the data
      window.location.reload();
    },
    async setData(){
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get(
        "staff-management/getStaffDetailById?id="+ this.cps_seen_by,
        {
          headers,
        }
      );
      if (response.data.code == 200 || response.data.code == "200") {
        this.cps_seenByName = response.data.list.name;
      } else {
        this.cps_seenByName = "";
      }

      const response2 = await this.$axios.get(
        "staff-management/getStaffDetailById?id="+ this.cps_discussed_with,
        {
          headers,
        }
      );
      if (response2.data.code == 200 || response2.data.code == "200") {
        this.cps_discussedWithName = response2.data.list.name;
      } else {
        this.cps_discussedWithName = "";
      };

      const response3 = await this.$axios.get(
        "staff-management/getStaffDetailById?id="+ this.case_manager,
        {
          headers,
        }
      );
      if (response3.data.code == 200 || response3.data.code == "200") {
        this.case_managerName = response3.data.list.name;
      } else {
        this.case_managerName = "";
      };

      const response4 = await this.$axios.post(
        "general-setting/fetch", {setting_id:this.visit_outcome},
        {
          headers,
        }
      );
      if (response4.data.code == 200 || response4.data.code == "200") {
        this.visit_outcomeSectionValue = response4.data.setting[0].section_value;
      } else {
        this.visit_outcomeSectionValue = "";
      };

      const response5 = await this.$axios.post(
        "general-setting/fetch", {setting_id: this.current_intervention},
        {
          headers,
        }
      );
      if (response5.data.code == 200 || response5.data.code == "200") {
        this.current_interventionSectionValue = response5.data.setting[0].section_value;
      } else {
        this.current_interventionSectionValue = "";
      };

      const response6 = await this.$axios.post(
        "general-setting/fetch",{setting_id: this.compliance_treatment},
        {
          headers,
        }
      );
      if (response6.data.code == 200 || response6.data.code == "200") {
        this.compliance_treatmentSectionValue = response6.data.setting[0].section_value;
      } else {
        this.compliance_treatmentSectionValue = "";
      };

      const response7 = await this.$axios.post(
        "general-setting/fetch",{setting_id: this.medication_supervised_by},
        {
          headers,
        }
      );
      if (response7.data.code == 200 || response7.data.code == "200") {
        this.medication_supervisedBySectionValue = response7.data.setting[0].section_value;
      } else {
        this.medication_supervisedBySectionValue = "";
      };

      const response8 = await this.$axios.post(
        "general-setting/fetch",
        {setting_id: this.location_services_id},
        {
          headers,
        }
      );
      if (response8.data.code == 200 || response8.data.code == "200") {
        this.location_servicesIdSectionValue = response8.data.setting[0].section_value;
      } else {
        this.location_servicesIdSectionValue = "";
      };

      const response9 = await this.$axios.get(
        "diagnosis/getIcd10codeById?id="+ this.type_diagnosis_id,
        {
          headers,
        }
      );
      if (response9.data.code == 200 || response9.data.code == "200") {
        this.type_diagnosisIdSectionValue = response9.data.list[0];
      } else {
        this.type_diagnosisIdSectionValue = [];
      };

      const response10 = await this.$axios.post(
        "general-setting/fetch",
        {setting_id:this.services_id},
        {
          headers,
        }
      );
      if (response10.data.code == 200 || response10.data.code == "200") {
        this.services_idSectionValue = response10.data.setting[0].setting_value;
      } else {
        this.services_idSectionValue = "";
      };

      const response11 = await this.$axios.get(
        "diagnosis/getIcd9codeById?id="+ this.code_id,
        {
          headers,
        }
      );
      if (response11.data.code == 200 || response11.data.code == "200") {
        this.code_idSectionValue = response11.data.list[0];
      } else {
        this.code_idSectionValue = "";
      };

      const response12 = await this.$axios.get(
        "diagnosis/getIcd9subcodeById?id="+ this.sub_code_id,
        {
          headers,
        }
      );
      if (response12.data.code == 200 || response12.data.code == "200") {
        this.sub_codeIdSectionValue = response12.data.list.name;
      } else {
        this.sub_codeIdSectionValue = "";
      };

      const response13 = await this.$axios.post(
        "general-setting/fetch", {setting_id: this.serviceid},
        {
          headers,
        }
      );
      if (response13.data.code == 200 || response13.data.code == "200") {
        this.serviceid_sectionValue = response13.data.setting[0].setting_value;
      } else {
        this.serviceid_sectionValue = "";
      };

      const response14 = await this.$axios.post(
        "general-setting/fetch",{setting_id: this.complexity_services_id},
        {
          headers,
        }
      );
      if (response14.data.code == 200 || response14.data.code == "200") {
        this.complexity_servicesIdSectionValue = response14.data.setting[0].setting_value;
      } else {
        this.complexity_servicesIdSectionValue = "";
      };

      const response15 = await this.$axios.post(
        "general-setting/fetch", {setting_id: this.outcome_id},
        {
          headers,
        }
      );
      if (response15.data.code == 200 || response15.data.code == "200") {
        this.outcome_idSectionValue = response15.data.setting[0].setting_value;
      } else {
        this.outcome_idSectionValue = "";
      };
      this.print();
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
          type: "CPSProgressNote",
        },
        { headers }
      );
      if (response.data.code == 200) {
        // window.alert(response.data.Data[0].patient_mrn_id);

        this.Id = response.data.Data[0].patient_mrn_id;
        this.cps_date = response.data.Data[0].cps_date;
        this.cps_time = response.data.Data[0].cps_time;
        this.cps_seen_by = response.data.Data[0].cps_seen_by;
        this.cps_date_discussed = response.data.Data[0].cps_date_discussed;
        this.cps_time_discussed = response.data.Data[0].cps_time_discussed;
        this.cps_discussed_with = response.data.Data[0].cps_discussed_with;
        this.visit_date = response.data.Data[0].visit_date;
        this.visit_time = response.data.Data[0].visit_time;
        this.informants_name = response.data.Data[0].informants_name;
        this.informants_relationship =
          response.data.Data[0].informants_relationship;
        this.informants_contact = response.data.Data[0].informants_contact;
        this.case_manager = response.data.Data[0].case_manager;
        this.visited_by = response.data.Data[0].visited_by;
        this.visit_outcome = response.data.Data[0].visit_outcome;
        this.current_intervention = response.data.Data[0].current_intervention;
        this.compliance_treatment = response.data.Data[0].compliance_treatment;
        this.medication_supervised_by =
          response.data.Data[0].medication_supervised_by;
        this.delusions = response.data.Data[0].delusions;
        this.hallucination = response.data.Data[0].hallucination;
        this.behavior = response.data.Data[0].behavior;
        this.blunted_affect = response.data.Data[0].blunted_affect;
        this.depression = response.data.Data[0].depression;
        this.anxiety = response.data.Data[0].anxiety;
        this.disorientation = response.data.Data[0].disorientation;
        this.uncooperativeness = response.data.Data[0].uncooperativeness;
        this.poor_impulse_control = response.data.Data[0].poor_impulse_control;
        this.others = response.data.Data[0].others;
        this.ipsychopathology_remarks =
          response.data.Data[0].ipsychopathology_remarks;
        this.risk_of_violence = response.data.Data[0].risk_of_violence;
        this.risk_of_suicide = response.data.Data[0].risk_of_suicide;
        this.risk_of_other_deliberate =
          response.data.Data[0].risk_of_other_deliberate;
        this.risk_of_severe = response.data.Data[0].risk_of_severe;
        this.risk_of_harm = response.data.Data[0].risk_of_harm;
        this.changes_in_teratment = response.data.Data[0].changes_in_teratment;
        this.akathisia = response.data.Data[0].akathisia;
        this.acute_dystonia = response.data.Data[0].acute_dystonia;
        this.parkinsonism = response.data.Data[0].parkinsonism;
        this.tardive_dyskinesia = response.data.Data[0].tardive_dyskinesia;
        this.tardive_dystonia = response.data.Data[0].tardive_dystonia;
        this.others_specify = response.data.Data[0].others_specify;
        this.side_effects_remarks = response.data.Data[0].side_effects_remarks;
        this.social_performance = response.data.Data[0].social_performance;
        this.psychoeducation = response.data.Data[0].psychoeducation;
        this.coping_skills = response.data.Data[0].coping_skills;
        this.adl_training = response.data.Data[0].adl_training;
        this.supported_employment = response.data.Data[0].supported_employment;
        this.family_intervention = response.data.Data[0].family_intervention;
        this.intervention_others = response.data.Data[0].intervention_others;
        this.remarks = response.data.Data[0].remarks;
        this.employment_past_months =
          response.data.Data[0].employment_past_months;
        this.if_employment_yes = response.data.Data[0].if_employment_yes;
        this.psychiatric_clinic = response.data.Data[0].psychiatric_clinic;
        this.im_depot_clinic = response.data.Data[0].im_depot_clinic;
        this.next_community_visit = response.data.Data[0].next_community_visit;
        this.comments = response.data.Data[0].comments;
        this.location_services_id = response.data.Data[0].location_service;
        this.type_diagnosis_id = response.data.Data[0].diagnosis_type;
        this.category_services = response.data.Data[0].service_category;
        // window.alert(response.data.Data[0].service_category);
        this.services_id = response.data.Data[0].services_id;
        this.code_id = response.data.Data[0].code_id;
        this.sub_code_id = response.data.Data[0].sub_code_id;
        this.complexity_services_id = response.data.Data[0].complexity_services;
        this.outcome_id = response.data.Data[0].outcome;
        this.medication = response.data.Data[0].medication;
        this.staff_name = response.data.Data[0].staff_name;
        this.designation = response.data.Data[0].designation;
        this.GetList();
        this.GetstaffList();
        //this.GetteamList();

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
