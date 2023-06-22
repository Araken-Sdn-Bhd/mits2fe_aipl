<template>
  <div id="layoutSidenav">
      <CommonSidebar />
      <div id="layoutSidenav_content">
          <CommonHeader />
          <main>
              <Loader v-if="loader" />
              <div class="container-fluid px-4">
                  <div class="page-title">
                      <h1>Job Interest Checklist</h1>
                  </div>

                  <div class="card mb-4">
                      <div class="card-body new-form">
                          <div class="form-title">
                              <h5>SECTION A PATIENT DETAILS</h5>
                          </div>

                          <table class="notes table-padding" v-if="patientdetails">
                              <tbody>
                                  <tr>
                                      <td>
                                          <table>
                                              <tbody>
                                                  <tr>
                                                      <th>Name:</th>
                                                      <td>{{ patientdetails.name_asin_nric }}</td>
                                                  </tr>
                                                  <tr>
                                                      <th>NRIC:</th>
                                                      <td>{{ patientdetails.nric_no }}</td>
                                                  </tr>
                                                  <tr>
                                                      <th>Date Of Birth:</th>
                                                      <td>{{ patientdetails.birth_date }}</td>
                                                  </tr>
                                                  <tr>
                                                      <th>Age On Review:</th>
                                                      <td>{{ patientdetails.age }}</td>
                                                  </tr>
                                                  <tr>
                                                      <th>Gender:</th>
                                                      <td>
                                                          {{ patientdetails.gender[0].section_value }}
                                                      </td>
                                                  </tr>
                                                  <tr>
                                                      <th>Nationality:</th>
                                                      <td>Malaysia</td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>

                                      <td>
                                          <table>
                                              <tbody>
                                                  <tr>
                                                      <th>Address:</th>
                                                      <td>
                                                          {{ patientdetails.address1 }}<br />{{
                                    patientdetails.address2
                                }}<br />{{ patientdetails.address3 }}
                                                          <br />
                                                          {{ patientdetails.postcode }}
                                                          <br />
                                                          {{ patientdetails.city.city_name }}
                                                          <!-- <br>
                                {{ patientdetails. }} -->
                                                      </td>
                                                  </tr>

                                                  <tr>
                                                      <th>Contact No.:</th>
                                                      <td>{{ patientdetails.mobile_no }}</td>
                                                  </tr>

                                                  <tr>
                                                      <th>Highest Education:</th>
                                                      <td>Diploma</td>
                                                  </tr>

                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>

                          <div class="form-title">
                              <h5>SECTION B INTEREST AND EMPLOYMENT HISTORY</h5>
                              <p>Arahan: Tandakan (/) di kotak yang disediakan</p>
                          </div>

                          <table class="notes th-width table-padding">
                              <tbody>
                                  <tr>
                                      <th style="width: 80%">1. Do you have interest to work?<small style="color:red">*</small> </th>
                                      <td>
                                          <div class="form-check">
                                              <input :disabled="disabled == 1" class="form-check-input" type="checkbox" value="1" id="1.1" v-model="interest_to_work" />
                                              <label class="form-check-label" for="1.1"> YES </label>
                                          </div>
                                      </td>
                                  </tr>

                                  <tr>
                                      <th style="width: 80%">
                                          2. Do you agree if MENTARI find a job for you?<small style="color:red">*</small>
                                      </th>
                                      <td>
                                          <div class="form-check">
                                              <input :disabled="disabled == 1" class="form-check-input" type="checkbox" value="1" id="1.2" v-model="agree_if_mentari_find_job_for_you" />
                                              <label class="form-check-label" for="1.2"> YES </label>
                                          </div>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                          <p class="title-th">3. Client job preferences?<small style="color:red">*</small> </p>
                          <div class="notes table-responsive preferences-table">
                              <table class="th-auto th-bg">
                                  <thead>
                                      <tr>
                                          <th>No.</th>
                                          <th>TYPE OF JOB</th>
                                          <th>INTERESTED?</th>
                                          <th>NOTES</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr>
                                          <td>1</td>
                                          <td>Clerk/ Office</td>
                                          <td>
                                              <input :disabled="disabled == 1" type="checkbox" name="" value="Clerk Job" v-model="clerk_job_interester" />Yes
                                          </td>
                                          <td>
                                              <input :disabled="disabled == 1" type="text" class="form-control" name="" v-model="clerk_job_notes" />
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>2</td>
                                          <td>Factory worker</td>
                                          <td>
                                              <input :disabled="disabled == 1" type="checkbox" name="" value="Factory Worker" v-model="factory_worker_job_interested" />Yes
                                          </td>
                                          <td>
                                              <input :disabled="disabled == 1" type="text" class="form-control" name="" v-model="factory_worker_notes" />
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>3</td>
                                          <td>Cleaner</td>
                                          <td>
                                              <input :disabled="disabled == 1" type="checkbox" name="" value="Cleaner" v-model="cleaner_job_interested" />Yes
                                          </td>
                                          <td>
                                              <input :disabled="disabled == 1" type="text" class="form-control" name="" v-model="cleaner_job_notes" />
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>4</td>
                                          <td>Security guard</td>
                                          <td>
                                              <input :disabled="disabled == 1" type="checkbox" name="" value="Security Guard" v-model="security_guard_job_interested" />Yes
                                          </td>
                                          <td>
                                              <input :disabled="disabled == 1" type="text" class="form-control" name="" v-model="security_guard_notes" />
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>5</td>
                                          <td>Laundry worker</td>
                                          <td>
                                              <input :disabled="disabled == 1" type="checkbox" name="" value="Laundry Worker" v-model="laundry_worker_job_interested" />Yes
                                          </td>
                                          <td>
                                              <input :disabled="disabled == 1" type="text" class="form-control" name="" v-model="laundry_worker_notes" />
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>6</td>
                                          <td>Car wash worker</td>
                                          <td>
                                              <input :disabled="disabled == 1" type="checkbox" name="" value="Car Wash" v-model="car_wash_worker_job" />Yes
                                          </td>
                                          <td>
                                              <input :disabled="disabled == 1" type="text" class="form-control" name="" v-model="car_wash_worker_notes" />
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>7</td>
                                          <td>Kitchen helper</td>
                                          <td>
                                              <input :disabled="disabled == 1" type="checkbox" name="" value="Kitchen Helper" v-model="kitchen_helper_job" />Yes
                                          </td>
                                          <td>
                                              <input :disabled="disabled == 1" type="text" class="form-control" name="" v-model="kitchen_helper_notes" />
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>8</td>
                                          <td>Waiter</td>
                                          <td>
                                              <input :disabled="disabled == 1" type="checkbox" name="" value="Waiter" v-model="waiter_job_interested" />Yes
                                          </td>
                                          <td>
                                              <input :disabled="disabled == 1" type="text" class="form-control" name="" v-model="waiter_job_notes" />
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>9</td>
                                          <td>Chef</td>
                                          <td>
                                              <input :disabled="disabled == 1" type="checkbox" name="" value="Chef" v-model="chef_job_interested" />Yes
                                          </td>
                                          <td>
                                              <input :disabled="disabled == 1" type="text" class="form-control" name="" v-model="chef_job_notes" />
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>10</td>
                                          <td>Others, please specify</td>
                                          <td>
                                              <input :disabled="disabled == 1" type="checkbox" name="" value="Others" v-model="others_job_specify" />Yes
                                          </td>
                                          <td>
                                              <input :disabled="disabled == 1" type="text" class="form-control" name="" v-model="others_job_notes" />
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                          </div>
                          <p class="title-th">4. Previous job?<small style="color:red">*</small> </p>
                          <div class="notes table-responsive">

                              <table class="th-auto th-bg input-width" id="job" v-if="!pid">
                                  <thead>
                                      <tr>
                                          <th>No.</th>
                                          <th>TYPE OF JOB</th>
                                          <th>DURATION</th>
                                          <th colspan="2">REASON FOR TERMINATION/RESIGN</th>
                                      </tr>
                                  </thead>
                                  <tbody class="optionBox">
                                      <tr class="block">
                                          <td>1</td>
                                          <td>
                                              <input :disabled="disabled == 1" type="text" class="form-control job" name="" />
                                          </td>
                                          <td>
                                              <input :disabled="disabled == 1" type="text" class="form-control duration" name="" />
                                          </td>
                                          <td>
                                              <input :disabled="disabled == 1" type="text" class="form-control reason" name="" />
                                          </td>
                                          <td>
                                              <span :disabled="disabled == 1" class="add-td"><i class="fa fa-plus"></i></span>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                          </div>
                          <div class="notes table-responsive">
                              <table class="th-auto th-bg input-width" id="job1" v-if="pid">
                                  <thead>
                                      <tr>
                                          <th>No.</th>
                                          <th>TYPE OF JOB</th>
                                          <th>DURATION</th>
                                          <th colspan="2">REASON FOR TERMINATION/RESIGN</th>
                                      </tr>
                                  </thead>
                                  <tbody class="optionBox1">
                                      <tr class="block1" v-for="(job1, index) in jobs" :key="index">
                                          <td>1</td>
                                          <td>
                                              <input :disabled="disabled == 1" type="text" class="form-control job" name="" v-model="job1.type_of_job" />

                                          </td>
                                          <td>
                                              <input :disabled="disabled == 1" type="text" class="form-control duration" name="" v-model="job1.duration" />
                                          </td>
                                          <td>
                                              <input :disabled="disabled == 1" type="text" class="form-control reason" name="" v-model="job1.termination_reason" />
                                          </td>
                                          <td>
                                              <span :disabled="disabled == 1" class="add-td"><i class="fa fa-plus"></i></span>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                          </div>

                          <table class="notes table-padding mobile-table">
                              <tbody>
                                  <tr>
                                      <th>Note<small style="color:red">*</small> :</th>
                                      <td>
                                          <textarea :disabled="disabled == 1" class="form-control mt-3" rows="15" placeholder="Enter Description" v-model="note"></textarea>
                                      </td>
                                  </tr>

                                  <tr>
                                      <th>Planning<small style="color:red">*</small> :</th>
                                      <td>
                                          <textarea :disabled="disabled == 1" class="form-control mt-3" rows="15" placeholder="Enter Description" v-model="planning"></textarea>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>

                          <div class="form-title mt-3">
                              <h5>SECTION C PATIENT CONSENT</h5>
                              <div class="form-check">
                                  <input :disabled="disabled == 1" class="form-check-input" type="checkbox" value="1" id="set-as-headquarters" v-model="patient_consent_interested" />
                                  <label class="form-check-label" for="set-as-headquarters">
                                      I am interested to join this supported employment program<small style="color:red">*</small>
                                  </label>
                              </div>
                          </div>

                          <table class="notes table-padding mt-3 mb-2 pconsent-table">
                              <tbody>
                                  <tr>
                                      <td>
                                          <table>
                                              <tbody>
                                                  <tr>
                                                      <th>Patient Name:</th>
                                                      <td v-if="patientdetails">
                                                          {{ patientdetails.name_asin_nric }}
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                      <td>
                                          <table>
                                              <tbody>
                                                  <tr>
                                                      <th>Staff Name:</th>
                                                      <td v-if="userdetails">
                                                          {{ userdetails.user.name }}
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>

                                  <tr>
                                      <td>
                                          <table>
                                              <tbody>
                                                  <tr>
                                                      <th>Date:</th>
                                                      <td>{{ currentdate }}</td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                      <td>
                                          <table>
                                              <tbody>
                                                  <tr>
                                                      <th>Date:</th>
                                                      <td>{{ currentdate }}</td>
                                                  </tr>
                                              </tbody>
                                          </table>
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
                                            <label class="col-sm-4 col-form-label">Location Of Services<small style="color:red">*</small> </label>
                                            <div class="col-sm-8">
                                                <select :disabled="disabled == 1" class="form-select" v-model="location_services_id">
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
                                            <label class="col-sm-4 col-form-label">Type Of Diagnosis<small style="color:red">*</small> </label>
                                            <div class="col-sm-8">
                                                <select :disabled="disabled == 1" class="form-select" v-model="type_diagnosis_id">
                                                    <option value="0">Select Diagnosis</option>
                                                    <option v-for="catcode in diagonisislist" v-bind:key="catcode.id" v-bind:value="catcode.id">
                                                        {{ catcode.icd_code }} {{catcode.icd_name}}
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <!-- <div class="row mb-3 align-items-flex-start">
                                            <label class="col-sm-4 col-form-label">Additional Diagnosis</label>
                                            <div class="col-sm-8">
                                                <select :disabled="disabled == 1" id="additionalboxdiagnosis" v-model="additional_diagnosis" class="form-select multiselectadditionalsubcode" multiple="multiple">
                                                    <option value="0">Please Select</option>
                                                    <option v-for="catcode in diagonisislistadditional" v-bind:key="catcode.id" v-bind:value="catcode.id">
                                                        {{ catcode.icd_code }} {{catcode.icd_name}}
                                                    </option>
                                                </select>
                                            </div>
                                        </div> -->
                                        <div class="row mb-3 align-items-flex-start">
                                            <label class="col-sm-4 col-form-label"
                                                >Additional Diagnosis</label
                                            >
                                            <div class="col-sm-8">
                                                <select
                                                    :disabled="disabled == 1"
                                                    id="additionalboxdiagnosis"
                                                    class="form-select multiselect" multiple="multiple"
                                                    >
                                                    <option value="0">Please Select</option>
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
                                            <label class="col-sm-4 col-form-label">Category Of Services<small style="color:red">*</small>
                                            </label>
                                            <div class="col-sm-8">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="assisstance" v-model="category_services" />
                                                    <label class="form-check-label" for="inlineRadio1">Assisstance / Supervision</label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="clinical-work" v-model="category_services" />
                                                    <label class="form-check-label" for="inlineRadio2">Clinical Work / Procedure
                                                    </label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="external" v-model="category_services" />
                                                    <label class="form-check-label" for="inlineRadio3">External</label>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- close-row -->
                                        <!-- hide-div -->
                                        <div id="assisstance" class="assisstance services hide mb-3">
                                            <div class="row">
                                                <div class="col-md-6 mb-3">
                                                    <label class="form-label">Services<small style="color:red">*</small> </label>
                                                    <select :disabled="disabled == 1" class="form-select" v-model="services_id">
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
                                                    <select :disabled="disabled == 1" class="form-select" v-model="code_id" @change="onCategorycodebind($event)">
                                                        <option value="0">Select code</option>
                                                        <option v-for="type in codelist" v-bind:key="type.id" v-bind:value="type.id">
                                                            {{ type.icd_category_code }} {{type.icd_category_name}}
                                                        </option>
                                                    </select>
                                                </div>
                                                <!-- <div class="col-md-6 mb-3">
                                                    <label class="form-label">ICD 9 SUB CODE<small style="color:red">*</small> </label>
                                                    <div class="mt-2 align-items-flex-start">
                                                        <select :disabled="disabled == 1" id="subcodeicd" v-model="sub_code_id" style="width:100%" class="form-select multiselectadditional" multiple="multiple">
                                                            <option value="0">Select sub code</option>
                                                            <option v-for="catcode in icdcatcodelist" v-bind:key="catcode.id" v-bind:value="catcode.id">
                                                                {{ catcode.icd_code }}
                                                                {{catcode.icd_name}}
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div> -->
                                                <div class="col-md-6 mb-3">
                                                  <label class="form-label">ICD 9 SUB CODE<small style="color:red">*</small> </label>
                                                  <div class="mt-2 align-items-flex-start">
                                                      <select :disabled="disabled == 1" id="subcodeicd" style="width:100%" class="form-select multiselectadditional" multiple="multiple">
                                                          <option value="0">Select sub code</option>
                                                          <option v-for="catcode in icdcatcodelist" v-bind:key="catcode.id" v-bind:value="catcode.id">
                                                              {{ catcode.icd_code }}
                                                              {{catcode.icd_name}}
                                                          </option>
                                                      </select>
                                                  </div>
                                              </div>
                                            </div>
                                            <!-- <div class="row">
                                                <div class="col-md-6 mb-">
                                                    <label class="form-label">Additional ICD 9 CODE</label>
                                                    <select :disabled="disabled == 1" class="form-select" v-model="additional_code_id" @change="onCategorycodebindAdditional($event)">
                                                        <option value="0">Select additional code</option>
                                                        <option v-for="type in codelistadditional" v-bind:key="type.id" v-bind:value="type.id">
                                                            {{ type.icd_category_code }} {{type.icd_category_name}}
                                                        </option>
                                                    </select>
                                                </div>
                                                <div class="col-md-6 mb-3">
                                                    <label class="form-label">Additional ICD 9 SUB CODE</label>
                                                    <div class="mt-2 align-items-flex-start">
                                                        <select :disabled="disabled == 1" id="additionalsubcodeicd" v-model="additional_sub_code_id" style="width:100%" class="form-select multiselectadditionalsubcode" multiple="multiple">
                                                            <option value="0">Select additional sub code</option>
                                                            <option v-for="catcode in icdcatcodelistadditional" v-bind:key="catcode.id" v-bind:value="catcode.id">
                                                                {{ catcode.icd_code }}
                                                                {{catcode.icd_name}}
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> -->
                                        <div class="row">
                                          <div class="col-md-6 mb-">
                                              <label class="form-label">Additional ICD 9 CODE</label>
                                              <select :disabled="disabled == 1" class="form-select" v-model="additional_code_id"  @change="onCategorycodebindAdditional($event)">
                                                  <option value="0">Select additional code</option>
                                                  <option v-for="type in codelist" v-bind:key="type.id" v-bind:value="type.id">
                                                      {{ type.icd_category_code }} {{type.icd_category_name}}
                                                  </option>
                                              </select>
                                          </div>
                                          <div class="col-md-6 mb-3">
                                                  <label  class="form-label">Additional ICD 9 SUB CODE</label>
                                                  <div class="mt-2 align-items-flex-start">
                                                  <select :disabled="disabled == 1" id="additionalsubcodeicd" style="width:100%" class="form-select multiselectadditionalsubcode"  multiple="multiple">
                                                      <option value="0">Select additional sub code</option>
                                                      <option v-for="catcode in icdcatcodelistadditional" v-bind:key="catcode.id" v-bind:value="catcode.id">
                                                          {{ catcode.icd_code }}
                                                          {{catcode.icd_name}}
                                                      </option>
                                                  </select>
                                                  </div>
                                          </div>
                                      </div>
                                        <!-- 02 -->
                                        <div id="external" class="external services hide mb-3">
                                            <div class="row">
                                                <div class="col-md-6 mb-3">
                                                    <label class="form-label">Services<small style="color:red">*</small> </label>
                                                    <select :disabled="disabled == 1" class="form-select" v-model="serviceid">
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
                                                <label class="form-label">Complexity Of Service<small style="color:red">*</small> </label>
                                                <select :disabled="disabled == 1" class="form-select" v-model="complexity_services_id">
                                                    <option value="0">
                                                        Select Complexity Of Service
                                                    </option>
                                                    <option v-for="cm in comlexcitylist" v-bind:key="cm.id" v-bind:value="cm.id">
                                                        {{ cm.section_value }}
                                                    </option>
                                                </select>
                                            </div>
                                            <div class="col-md-6 mb-3">
                                                <label class="form-label">Outcome<small style="color:red">*</small> </label>
                                                <select :disabled="disabled == 1" class="form-select" v-model="outcome_id">
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
                                            <textarea :disabled="disabled == 1" class="form-control textarea" placeholder="Please Type Prescription Here" v-model="medication_des"></textarea>
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
                          <br>
                          <br>

                          <div class="d-flex three-btn">
                              <button @click="GoBack" class="btn btn-primary btn-text" title="Back"><i class="fa fa-arrow-alt-to-left"></i> Back
                              </button>
                              <div class="ml-auto" :class="SidebarAccess != 1 ? 'hide' : ''" v-if="!pid">
                                  <button type="submit" @click="onCreateEvent()" class="btn btn-warning btn-text" title="Draft">
                                      <i class="fa fa-save"></i> Save as draft
                                  </button>
                                  <button type="submit" @click="onPublishEvent()" class="btn btn-success btn-text" title="Publish">
                                      <i class="fa fa-paper-plane"></i> Submit
                                  </button>
                              </div>
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
  import moment from 'moment';
  export default {
      components: {
          CommonSidebar,
          CommonHeader
      },
      name: "job-intrest-checklist",
      data() {
          return {
              disabled: 0,
              userdetails: null,
              patientdetails: null,
              errorList: [],
              servicelist: [],
              outcomelist: [],
              comlexcitylist: [],
              codelist: [],
              codelistadditional: [],
              icdcatcodelistadditional: [],
              icdcatcodelist: [],
              diagonisislist: [],
              diagonisislistadditional: [],
              locationlist: [],
              titlelist: [],
              currentdate: "",
              Id: 0,
              interest_to_work: "",
              agree_if_mentari_find_job_for_you: "",
              clerk_job_interester: "",
              clerk_job_notes: "",
              factory_worker_job_interested: "",
              factory_worker_notes: "",
              cleaner_job_interested: "",
              cleaner_job_notes: "",
              security_guard_job_interested: "",
              security_guard_notes: "",
              laundry_worker_job_interested: "",
              laundry_worker_notes: "",
              car_wash_worker_job: "",
              car_wash_worker_notes: "",
              kitchen_helper_job: "",
              kitchen_helper_notes: "",
              waiter_job_interested: "",
              waiter_job_notes: "",
              chef_job_interested: "",
              chef_job_notes: "",
              others_job_specify: "",
              others_job_notes: "",
              note: "",
              planning: "",
              patient_consent_interested: "",
              location_services_id: 0,
              type_diagnosis_id: 0,
              category_services: "",
              code_id: 0,
              sub_code_id: [],
              complexity_services_id: 0,
              outcome_id: 0,
              medication_des: "",
              services_id: 0,
              serviceid: 0,
              validate: true,
              loader: false,
              assistancelist: [],
              externallist: [],
              pid: 0,
              type: "",
              SidebarAccess: null,
              appId: 0,
              additional_code_id: 0,
              additional_sub_code_id: [],
              additional_diagnosis: [],
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
              var num = 1;
              $(".add-td").click(function (i) {
                  num = num + 1;
                  console.log(num);
                  $(".block:last").after(
                      '<tr class="block"> <td>' +
                      parseInt(num) +
                      '</td> <td> <input type="text" class="form-control job" name=""> </td> <td> <input type="text" class="form-control duration" name=""> </td> <td> <input type="text" class="form-control reason" name="" /> </td> <td> <span class="remove"><i class="fal fa-times"></i></span></td></tr>'
                  );
              });
              $(".optionBox").on("click", ".remove", function () {
                  $(this).closest(".block").remove();
              });
          });
          let urlParams = new URLSearchParams(window.location.search);
          this.Id = urlParams.get("id");
          this.appId = urlParams.get("appId");
          this.GetList();
          this.GetPatientdetails();
          let urlParams1 = new URLSearchParams(window.location.search);
          this.pid = urlParams1.get("pid");
          this.type = urlParams1.get("type");
          if (this.pid) {
              this.getdetails();
          }
          const current = new Date();
          this.currentdate =
              current.getDate() +
              "/" +
              (current.getMonth() + 1) +
              "/" +
              current.getFullYear();

          if (this.type == 'view'){
            this.disabled = 1;
          }
      },
      mounted() {
          $(document).ready(function () {
              $(".multiselect").select2({
                  placeholder: "Select Additional Diagnosis",
              });
          });

          $(document).ready(function () {
              $(".multiselectadditional").select2({
                  placeholder: "Select Sub Code",
              });
          });
          $(document).ready(function () {
              $(".multiselectadditionalsubcode").select2({
                  placeholder: "Select Additional Sub Code",
              });
          });
      },

      methods: {
          async onCreateEvent() {
            var jobSDESCRIPTION = [];
              this.$swal.fire({
                  title: 'Do you want to save as draft?',
                  showCancelButton: true,
                  confirmButtonText: 'Save',
              }).then(async (result) => {
                  /* Read more about isConfirmed, isDenied below */
                  if (result.isConfirmed) {
                      var jobs = [];
                      var Boxvalue1 = [];
                      var Boxvalue2 = [];
                      var Boxvalue3 = [];
                      var additionalboxdiagnosis = 0;
                      var subcodeicd = 0;
                      var additionalsubcodeicd = 0;
                      $("#additionalboxdiagnosis :selected").each(function () {
                          if (additionalboxdiagnosis) {
                              additionalboxdiagnosis = additionalboxdiagnosis + "," + this.value;
                          } else {
                              additionalboxdiagnosis = this.value;
                          }
                      });
                      Boxvalue1.push({
                          additionalboxdiagnosis
                      });

                      $("#subcodeicd :selected").each(function () {
                          if (subcodeicd) {
                              subcodeicd = subcodeicd + "," + this.value;
                          } else {
                              subcodeicd = this.value;
                          }
                      });
                      Boxvalue2.push({
                          subcodeicd
                      });

                      $("#additionalsubcodeicd :selected").each(function () {
                          if (additionalsubcodeicd) {
                              additionalsubcodeicd = additionalsubcodeicd + "," + this.value;
                          } else {
                              additionalsubcodeicd = this.value;
                          }
                      });
                      Boxvalue3.push({
                          additionalsubcodeicd
                      });
                      $("table#job > tbody > tr").each(function () {
                          var obj = {};
                          obj.job = $('td input[type="text"].job', this).val();
                          obj.duration = $('td input[type="text"].duration', this).val();
                          obj.reason = $('td input[type="text"].reason', this).val();
                          jobs.push(obj);
                      });
                      try {
                          this.loader = true;
                          const headers = {
                              Authorization: "Bearer " + this.userdetails.access_token,
                              Accept: "application/json",
                              "Content-Type": "application/json",
                          };
                          const response = await this.$axios.post(
                              "job-interest-checklist/add", {
                                  added_by: this.userdetails.user.id,
                                  patient_id: this.Id,
                                  interest_to_work: this.interest_to_work,
                                  agree_if_mentari_find_job_for_you: this.agree_if_mentari_find_job_for_you,
                                  clerk_job_interester: this.clerk_job_interester,
                                  clerk_job_notes: this.clerk_job_notes.toString(),
                                  factory_worker_job_interested: this.factory_worker_job_interested,
                                  factory_worker_notes: this.factory_worker_notes,
                                  cleaner_job_interested: this.cleaner_job_interested,
                                  cleaner_job_notes: this.cleaner_job_notes,
                                  security_guard_job_interested: this.security_guard_job_interested,
                                  security_guard_notes: this.security_guard_notes,
                                  laundry_worker_job_interested: this.laundry_worker_job_interested,
                                  laundry_worker_notes: this.laundry_worker_notes,
                                  car_wash_worker_job: this.car_wash_worker_job,
                                  car_wash_worker_notes: this.car_wash_worker_notes,
                                  kitchen_helper_job: this.kitchen_helper_job,
                                  kitchen_helper_notes: this.kitchen_helper_notes,
                                  waiter_job_interested: this.waiter_job_interested,
                                  waiter_job_notes: this.waiter_job_notes,
                                  chef_job_interested: this.chef_job_interested,
                                  chef_job_notes: this.chef_job_notes,
                                  others_job_specify: this.others_job_specify,
                                  others_job_notes: this.others_job_notes,
                                  note: this.note,
                                  planning: this.planning,
                                  patient_consent_interested: this.patient_consent_interested,
                                  location_services: this.location_services_id,
                                  type_diagnosis_id: this.type_diagnosis_id,
                                  category_services: this.category_services,
                                  services_id: this.services_id,
                                  code_id: this.code_id,
                                  complexity_of_services: this.complexity_services_id,
                                  outcome: this.outcome_id,
                                  medication_prescription: this.medication_des,
                                  jobs: jobs,
                                  status: "0",
                                  id: this.pid,
                                  appId: this.appId,
                                  sub_code_id: JSON.stringify(subcodeicd),
                                  additional_diagnosis: JSON.stringify(additionalboxdiagnosis),
                                  additional_code_id: this.additional_code_id,
                                  additional_sub_code_id: JSON.stringify(additionalsubcodeicd),
                              }, {
                                  headers
                              }
                          );
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
                                  title: 'Oops... Something Went Wrong! dalam function api',
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
              var jobSDESCRIPTION = [];
              this.$swal.fire({
                  title: 'Do you want to save the changes?',
                  showCancelButton: true,
                  confirmButtonText: 'Save',
              }).then(async (result) => {
                  if (result.isConfirmed) {
                      var jobs = [];
                      var Boxvalue1 = [];
                      var Boxvalue2 = [];
                      var Boxvalue3 = [];
                      var additionalboxdiagnosis = 0;
                      var subcodeicd = 0;
                      var additionalsubcodeicd = 0;
                      $("#additionalboxdiagnosis :selected").each(function () {
                          if (additionalboxdiagnosis) {
                              additionalboxdiagnosis = additionalboxdiagnosis + "," + this.value;
                          } else {
                              additionalboxdiagnosis = this.value;
                          }
                      });
                      Boxvalue1.push({
                          additionalboxdiagnosis
                      });

                      $("#subcodeicd :selected").each(function () {
                          if (subcodeicd) {
                              subcodeicd = subcodeicd + "," + this.value;
                          } else {
                              subcodeicd = this.value;
                          }
                      });
                      Boxvalue2.push({
                          subcodeicd
                      });

                      $("#additionalsubcodeicd :selected").each(function () {
                          if (additionalsubcodeicd) {
                              additionalsubcodeicd = additionalsubcodeicd + "," + this.value;
                          } else {
                              additionalsubcodeicd = this.value;
                          }
                      });
                      Boxvalue3.push({
                          additionalsubcodeicd
                      });
                      $("table#job > tbody > tr").each(function () {
                          var obj = {};
                          obj.job = $('td input[type="text"].job', this).val();
                          obj.duration = $('td input[type="text"].duration', this).val();
                          obj.reason = $('td input[type="text"].reason', this).val();
                          jobs.push(obj);
                      });
                      this.validate = true;
                      this.errorList = [];
                      try {
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
                                  if (!JSON.stringify(subcodeicd)) {
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
                          if (
                              this.location_services_id &&
                              this.type_diagnosis_id &&
                              this.category_services &&
                              this.complexity_services_id &&
                              this.outcome_id &&
                              this.validate
                          ) {
                              this.loader = true;
                              const headers = {
                                  Authorization: "Bearer " + this.userdetails.access_token,
                                  Accept: "application/json",
                                  "Content-Type": "application/json",
                              };
                              const response = await this.$axios.post(
                                  "job-interest-checklist/add", {
                                      added_by: this.userdetails.user.id,
                                      patient_id: this.Id,
                                      interest_to_work: this.interest_to_work,
                                      agree_if_mentari_find_job_for_you: this.agree_if_mentari_find_job_for_you,
                                      clerk_job_interester: this.clerk_job_interester,
                                      clerk_job_notes: this.clerk_job_notes.toString(),
                                      factory_worker_job_interested: this.factory_worker_job_interested,
                                      factory_worker_notes: this.factory_worker_notes,
                                      cleaner_job_interested: this.cleaner_job_interested,
                                      cleaner_job_notes: this.cleaner_job_notes,
                                      security_guard_job_interested: this.security_guard_job_interested,
                                      security_guard_notes: this.security_guard_notes,
                                      laundry_worker_job_interested: this.laundry_worker_job_interested,
                                      laundry_worker_notes: this.laundry_worker_notes,
                                      car_wash_worker_job: this.car_wash_worker_job,
                                      car_wash_worker_notes: this.car_wash_worker_notes,
                                      kitchen_helper_job: this.kitchen_helper_job,
                                      kitchen_helper_notes: this.kitchen_helper_notes,
                                      waiter_job_interested: this.waiter_job_interested,
                                      waiter_job_notes: this.waiter_job_notes,
                                      chef_job_interested: this.chef_job_interested,
                                      chef_job_notes: this.chef_job_notes,
                                      others_job_specify: this.others_job_specify,
                                      others_job_notes: this.others_job_notes,
                                      note: this.note,
                                      planning: this.planning,
                                      patient_consent_interested: this.patient_consent_interested,
                                      location_services: this.location_services_id,
                                      type_diagnosis_id: this.type_diagnosis_id,
                                      category_services: this.category_services,
                                      services_id: this.services_id,
                                      code_id: this.code_id,
                                      complexity_of_services: this.complexity_services_id,
                                      outcome: this.outcome_id,
                                      medication_prescription: this.medication_des,
                                      jobs: jobs,
                                      status: "1",
                                      id: this.pid,
                                      appId: this.appId,
                                      sub_code_id: JSON.stringify(subcodeicd),
                                      additional_diagnosis: JSON.stringify(additionalboxdiagnosis),
                                      additional_code_id: this.additional_code_id,
                                      additional_sub_code_id: JSON.stringify(additionalsubcodeicd),
                                  }, {
                                      headers
                                  }
                              );
                              console.log("response", response.data);
                              if (response.data.code == 200) {
                                  this.loader = false;
                                  this.resetmodel();
                                  this.$swal.fire(
                                      'Successfully Submitted.',
                                      'Data is inserted.',
                                      'success',
                                  );
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
                          this.loader = false;
                          this.resetmodel();
                          this.$swal.fire({
                              icon: 'error',
                              title: 'Oops... Something Went Wrong!',
                              text: 'the error is: ' + e,
                          })
                          this.GoBack();
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
              if (response3.data.code == 200 || response3.data.code == "200") {
                  this.codelistadditional = response3.data.list;
              } else {
                  this.codelistadditional = [];
              }
              const response4 = await this.$axios.get("diagnosis/getIcd10codeList", {
                  headers,
              });
              if (response4.data.code == 200 || response4.data.code == "200") {
                  this.diagonisislist = response4.data.list;
                  this.diagonisislistadditional = response4.data.list;
              } else {
                  this.diagonisislist = [];
                  this.diagonisislistadditional = [];
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
              const response6 = await this.$axios.get(
                  "intervention/job-start-form-list", {
                      headers,
                  }
              );
              if (response6.data.code == 200 || response6.data.code == "200") {
                  this.titlelist = response6.data.list;
              } else {
                  this.titlelist = [];
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
          },
          async GetPatientdetails() {
              const headers = {
                  Authorization: "Bearer " + this.userdetails.access_token,
                  Accept: "application/json",
                  "Content-Type": "application/json",
              };
              const response = await this.$axios.post(
                  "patient-registration/getPatientRegistrationById", {
                      id: this.Id,
                  }, {
                      headers
                  }
              );
              if (response.data.code == 200) {
                  this.patientdetails = response.data.list[0];
                  console.log("my details", this.patientdetails);
              } else {
                  this.$swal.fire({
                      icon: 'error',
                      title: 'Oops... Something Went Wrong!',
                      text: 'the error is: ' + this.error,
                      footer: ''
                  });
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
          async onCategorycodebindAdditional(event) {
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
                  this.icdcatcodelistadditional = response.data.list;
              } else {
                  this.icdcatcodelistadditional = [];
              }
          },
          resetmodel() {
              this.added_by = "";
              this.patient_id = "";
              this.client = "";
              this.employment_specialist = "";
              this.case_manager = "";
              this.first_date_of_work = "";
              this.job_title = "";
              this.duties_field = "";
              this.rate_of_pay = "";
              this.benefits_field = "";
              this.work_schedule = "";
              this.disclosure = "";
              this.name_of_employer = "";
              this.name_of_superviser = "";
              this.address = "";
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
          async getdetails() {
              const headers = {
                  Authorization: "Bearer " + this.userdetails.access_token,
                  Accept: "application/json",
                  "Content-Type": "application/json",
              };
              const response = await this.$axios.post(
                  "/patient-appointment-details/fetchViewHistoryListDetails", {
                      id: this.pid,
                      type: "JobInterestCheckList",
                  }, {
                      headers
                  }
              );
              if (response.data.code == 200) {

                  this.Id = response.data.Data[0].patient_id;
                  if (response.data.Data[0].interest_to_work == 1) {
                      this.interest_to_work = response.data.Data[0].interest_to_work;
                  } else {
                      this.interest_to_work = 0;
                  }

                  if (response.data.Data[0].agree_if_mentari_find_job_for_you == 1) {
                      this.agree_if_mentari_find_job_for_you = response.data.Data[0].agree_if_mentari_find_job_for_you;
                  } else {
                      this.agree_if_mentari_find_job_for_you = 0;
                  }

                  if (response.data.Data[0].clerk_job_interester == 1) {
                      this.clerk_job_interester = response.data.Data[0].clerk_job_interester;
                  } else {
                      this.clerk_job_interester = 0;
                  }
                  this.clerk_job_notes = response.data.Data[0].clerk_job_notes;

                  if (response.data.Data[0].factory_worker_job_interested == 1) {
                      this.factory_worker_job_interested = response.data.Data[0].factory_worker_job_interested;
                  } else {
                      this.factory_worker_job_interested = 0;
                  }
                  this.factory_worker_notes = response.data.Data[0].factory_worker_notes;

                  if (response.data.Data[0].cleaner_job_interested == 1) {
                      this.cleaner_job_interested = response.data.Data[0].cleaner_job_interested;
                  } else {
                      this.cleaner_job_interested = 0;
                  }
                  this.cleaner_job_notes = response.data.Data[0].cleaner_job_notes;

                  if (response.data.Data[0].security_guard_job_interested == 1) {
                      this.security_guard_job_interested = response.data.Data[0].security_guard_job_interested;
                  } else {
                      this.security_guard_job_interested = 0;
                  }
                  this.security_guard_notes = response.data.Data[0].security_guard_notes;

                  if (response.data.Data[0].laundry_worker_job_interested == 1) {
                      this.laundry_worker_job_interested = response.data.Data[0].laundry_worker_job_interested;
                  } else {
                      this.laundry_worker_job_interested = 0;
                  }
                  this.laundry_worker_notes = response.data.Data[0].laundry_worker_notes;

                  if (response.data.Data[0].car_wash_worker_job == 1) {
                      this.car_wash_worker_job = response.data.Data[0].car_wash_worker_job;
                  } else {
                      this.car_wash_worker_job = 0;
                  }
                  this.car_wash_worker_notes = response.data.Data[0].car_wash_worker_notes;

                  if (response.data.Data[0].kitchen_helper_job == 1) {
                      this.kitchen_helper_job = response.data.Data[0].kitchen_helper_job;
                  } else {
                      this.kitchen_helper_job = 0;
                  }
                  this.kitchen_helper_notes = response.data.Data[0].kitchen_helper_notes;

                  if (response.data.Data[0].waiter_job_interested == 1) {
                      this.waiter_job_interested = response.data.Data[0].waiter_job_interested;
                  } else {
                      this.waiter_job_interested = 0;
                  }
                  this.waiter_job_notes = response.data.Data[0].waiter_job_notes;

                  if (response.data.Data[0].chef_job_interested == 1) {
                      this.chef_job_interested = response.data.Data[0].chef_job_interested;
                  } else {
                      this.chef_job_interested = 0;
                  }
                  this.chef_job_notes = response.data.Data[0].chef_job_notes;

                  if (response.data.Data[0].others_job_specify == 1) {
                      this.others_job_specify = response.data.Data[0].others_job_specify;
                  } else {
                      this.others_job_specify = 0;
                  }
                  this.others_job_notes = response.data.Data[0].others_job_notes;

                  this.note = response.data.Data[0].note;
                  this.planning = response.data.Data[0].planning;
                  this.patient_consent_interested =
                      response.data.Data[0].patient_consent_interested;
                  this.location_services_id = response.data.Data[0].location_services;
                  this.type_diagnosis_id = response.data.Data[0].type_diagnosis_id;
                  this.category_services = response.data.Data[0].category_services;
                  this.services_id = response.data.Data[0].services_id;
                  this.code_id = response.data.Data[0].code_id;
                  this.additional_code_id = response.data.Data[0].additional_code_id;
                  this.complexity_services_id =
                      response.data.Data[0].complexity_services;
                  this.outcome_id = response.data.Data[0].outcome;
                  this.medication_des = response.data.Data[0].medication_des;

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
                      this.icdcatcodelistadditional = response3.data.list;

                  } else {
                      this.icdcatcodelistadditional = [];
                  }

                  this.jobs = response.data.Data[0].jobs;
                  console.log('my data00', this.jobs);
                  this.GetList();
                  this.GetPatientdetails();

                  this.sub_code_id = response.data.Data[0].sub_code_id.split(",");
                              $("#subcodeicd")
                              .val(this.sub_code_id)
                              .trigger("change");
                  this.additional_diagnosis = response.data.Data[0].additional_diagnosis.split(",");
                              $("#additionalboxdiagnosis")
                              .val(this.additional_diagnosis)
                              .trigger("change");

                  this.additional_sub_code_id = response.data.Data[0].additional_sub_code_id.split(",");
                              $("#additionalsubcodeicd")
                              .val(this.additional_sub_code_id)
                              .trigger("change");
                  if(this.category_services=='clinical-work'){
                    $(document).ready(function () {
                        $('input[name="inlineRadioOptions1"]').trigger('click');
                    });
                }else if(this.category_services=='external'){
                    $(document).ready(function () {
                        $('input[name="inlineRadioOptions2"]').trigger('click');
                    });
                }else{
                    $(document).ready(function () {
                        $('input[name="inlineRadioOptions"]').trigger('click');
                    });
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
