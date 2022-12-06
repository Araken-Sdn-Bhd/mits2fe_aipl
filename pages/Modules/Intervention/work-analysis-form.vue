<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>Work Analysis Form</h1>
            <!-- <a href="#"><i class="fal fa-plus"></i> Add</a> -->
          </div>

          <div class="card mb-4">
            <div class="card-body new-form">
              <div class="form-title">
                <h5>A. JOB INFORMATION</h5>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">Company Name</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="company_name"
                    />
                  </div>
                </div>
              </div>
              <!-- row -->

              <div class="row">
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">Company Address</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="company_address1"
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control"
                      v-model="company_address2"
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control"
                      v-model="company_address3"
                    />
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">State</label>
                     <select
            class="form-select"
            @change="getCityList($event)"
            v-model="state_id"
          >
            <option value="">Please Select</option>
            <option
              v-for="state in GStateList"
              v-bind:key="state.id"
              v-bind:value="state.id"
            >
              {{ state.state_name }}
            </option>
          </select>
                  </div>

                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <label class="form-label">City</label>
                     <select
                     class="form-select"
                     v-model="city_id"
                     @change="getPostcodeList($event)"
                     >
            <option value="">Please Select</option>
            <option
              v-for="ctl in GCityList"
              v-bind:key="ctl.city_name"
              v-bind:value="ctl.city_name"
            >
              {{ ctl.city_name }}
            </option>
          </select>
                    </div>
                    <div class="col-md-6 mb-3">
                      <label class="form-label">Postcode</label>
                     <select class="form-select" v-model="postcode_id">
            <option value="">Please Select</option>
            <option
              v-for="pst in GPostCodeList"
              v-bind:key="pst.id"
              v-bind:value="pst.id"
            >
              {{ pst.postcode }}
            </option>
          </select>
                    </div>
                  </div>
                </div>
              </div>
              <!-- row -->

              <div class="row">
                <div class="col-md-4">
                  <div class="mb-3">
                    <label class="form-label">Supervisor Name</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="supervisor_name"
                    />
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input type="text" class="form-control" v-model="email" />
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="mb-3">
                    <label class="form-label">Position</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="position"
                    />
                  </div>
                </div>
              </div>
              <!-- row -->

              <div class="row">
                <div class="col-md-8">
                  <div class="mb-3">
                    <label class="form-label">Client Name</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="client_name"
                    />
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="mb-3">
                    <label class="form-label">Job Position</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="job_position"
                    />
                  </div>
                </div>
              </div>
              <!-- row -->

              <div class="row">
                <label class="form-label">Current Wage</label>
                <div class="col-md-4">
                  <div class="mb-3">
                    <select class="form-select" v-model="current_wage">
                      <option value="">Please Select</option>
                      <option value="Per Hour">Per Hour</option>
                      <option value="Per Day">Per Day</option>
                      <option value="Per Month">Per Month</option>
                    </select>
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="mb-3">
                    <input
                      type="text"
                      name=""
                      placeholder="Please specify wage"
                      class="form-control"
                      v-model="wage_specify"
                    />
                  </div>
                </div>
              </div>
              <!-- row -->

              <div class="mb-3">
                <label class="form-label"
                  >Did a wage change occur for the last 3-6 months?</label
                >
                <div class="col-sm-8">
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="wage"
                      id="wage1"
                      value="yes"
                      data-rel="wage"
                      v-model="wage_change_occur"
                    />
                    <label class="form-check-label" for="wage1">Yes</label>
                  </div>

                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="wage"
                      id="wage2"
                      value="no"
                      data-rel="wage"
                      v-model="wage_change_occur"
                    />
                    <label class="form-check-label" for="wage2">No</label>
                  </div>
                </div>
              </div>
              <!-- row -->

              <div class="wage hide">
                <div class="row">
                  <div class="col-sm-3">
                    <div class="mb-3">
                      <label class="form-label">Changes In Rate</label>
                      <select class="form-select" v-model="change_in_rate">
                        <option value="">Please Select</option>
                        <option value="Per Hour">Per Hour</option>
                        <option value="Per Day">Per Day</option>
                        <option value="Per Month">Per Month</option>
                      </select>
                    </div>
                  </div>

                  <div class="col-sm-3">
                    <div class="mb-3">
                      <label class="form-label">From</label>
                      <input
                        type="text"
                        name=""
                        class="form-control"
                        v-model="from"
                      />
                    </div>
                  </div>

                  <div class="col-sm-3">
                    <div class="mb-3">
                      <label class="form-label">To</label>
                      <input
                        type="text"
                        name=""
                        class="form-control"
                        v-model="to"
                      />
                    </div>
                  </div>

                  <div class="col-sm-3">
                    <div class="mb-3">
                      <label class="form-label">On Date</label>
                      <input
                        type="date"
                        name=""
                        class="form-control"
                        v-model="on_date"
                      />
                    </div>
                  </div>
                </div>
                <!-- row -->

                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Work Hours In A Week</label>
                      <input
                        type="text"
                        name=""
                        class="form-control"
                        v-model="works_hour_week"
                      />
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Work Schedule</label>
                      <input
                        type="text"
                        name=""
                        class="form-control"
                        v-model="work_schedule"
                      />
                    </div>
                  </div>
                </div>
                <!-- row -->

                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label"
                        >No Of Current Employee In Company</label
                      >
                      <input
                        type="text"
                        name=""
                        class="form-control"
                        v-model="no_of_current_employee"
                      />
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label"
                        >No Of Other Employees In This Position</label
                      >
                      <input
                        type="text"
                        name=""
                        class="form-control"
                        v-model="no_of_other_employee"
                      />
                    </div>
                  </div>
                </div>
                <!-- row -->

                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">During Same Shift</label>
                      <input
                        type="text"
                        name=""
                        class="form-control"
                        v-model="during_same_shift"
                      />
                    </div>
                  </div>
                </div>
                <!-- row -->
              </div>

              <div class="row mb-3">
                <label class="col-sm-4 col-form-label">Education:</label>
                <div class="col-sm-8">
                  <div class="row">
                    <div class="col-sm-4">
                      <label class="form-label">Education Level</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="education_level"
                      />
                    </div>

                    <div class="col-sm-4">
                      <label class="form-label">Grade</label>
                      <input type="text" class="form-control" v-model="grade" />
                    </div>
                  </div>
                </div>
              </div>
              <!-- row -->

              <div class="row mb-3">
                <label class="col-sm-4 col-form-label">
                  Job Experience:<br />
                  <small>Minimum duration of work</small>
                </label>
                <div class="col-sm-8">
                  <div class="row">
                    <div class="col-sm-4">
                      <label class="form-label">Year</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="job_experience_year"
                      />
                    </div>

                    <div class="col-sm-4">
                      <label class="form-label">Months</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="job_experience_months"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <!-- row -->

              <div class="row">
                <div class="col-md-12">
                  <div class="mb-3">
                    <label class="form-label">Others</label>
                    <textarea
                      class="form-control textarea"
                      v-model="others"
                    ></textarea>
                  </div>
                </div>
              </div>
              <!-- row -->

              <div class="form-title">
                <h5>B. JOB DESCRIPTION</h5>
              </div>

              <table class="notes th-width table-padding" v-if="!pid">
                <tbody>
                  <tr>
                    <td colspan="2" class="td-padding">
                      <table
                        class="th-auto th-bg input-width"
                        id="JOBDESCRIPTION"
                      >
                        <thead>
                          <tr>
                            <th>Task Description (What?)</th>
                            <th>Objectives(Why?)</th>
                            <th>Procedure</th>
                            <th colspan="2">% Time (Rate Of Time)</th>
                          </tr>
                        </thead>
                        <tbody class="optionBox">
                          <tr class="block">
                            <td>
                              <input
                                type="text"
                                class="form-control task"
                                name=""
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                class="form-control object"
                                name=""
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                class="form-control width-fixed procedure"
                                name=""
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                class="form-control width-fixed time"
                                name=""
                              />
                            </td>
                            <td>
                              <a class="add-td"><i class="fa fa-plus"></i></a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
               <table class="notes th-width table-padding" v-if="pid">
                <tbody>
                  <tr>
                    <td colspan="2" class="td-padding">
                      <table
                        class="th-auto th-bg input-width"
                        id="JOBDESCRIPTION1"
                      >
                        <thead>
                          <tr>
                            <th>Task Description (What?)</th>
                            <th>Objectives(Why?)</th>
                            <th>Procedure</th>
                            <th colspan="2">% Time (Rate Of Time)</th>
                          </tr>
                        </thead>
                        <tbody class="optionBox1">
                          <tr class="block1" v-for="(job1, index) in jobSDESCRIPTION" :key="index">
                            <td>
                              <input
                                type="text"
                                class="form-control task"
                                name="" v-model="job1.task_description"
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                class="form-control object"
                                name="" v-model="job1.objectives"
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                class="form-control width-fixed procedure"
                                name="" v-model="job1.procedure"
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                class="form-control width-fixed time"
                                name="" v-model="job1.rate_of_time"
                              />
                            </td>
                            <td>
                              <a class="add-td"><i class="fa fa-plus"></i></a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div class="form-title mt-3">
                <h5>C. JOB SPECIFICATION</h5>
              </div>

              <table
                class="notes th-width table-padding vertical-align-middle"
                id="jobspecification"
              >
                <tbody>
                  <tr>
                    <td class="option-td">
                      <div class="title-div">
                        <label id="question">1. WORK SCHEDULE</label>
                      </div>
                      <span>A. Need to work on weekend</span>
                      <span>B. Night shift only?</span>
                      <span>C. Part-time? </span>
                      <span>D. Full time?</span>
                    </td>
                    <td class="input-checkbox">
                      <div class="title-div"></div>
                      <div class="form-check">
                        <input
                          class="form-check-input one_0"
                          type="checkbox"
                          value="A. Need to work on weekend"
                          id="weekend"
                        />
                        <label class="form-check-label" for="weekend">
                          Yes
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input two_0"
                          type="checkbox"
                          value="B. Night shift only?"
                          id="shift"
                        />
                        <label class="form-check-label" for="shift">
                          Yes
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input three_0"
                          type="checkbox"
                          value="C. Part-time?"
                          id="Parttime"
                        />
                        <label class="form-check-label" for="Parttime">
                          Yes
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input four_0"
                          type="checkbox"
                          value="D. Full time?"
                          id="Fulltime"
                        />
                        <label class="form-check-label" for="Fulltime">
                          Yes
                        </label>
                      </div>
                    </td>
                    <td>
                      <div class="mb-3">
                        <label class="form-label">Comments</label>
                        <textarea
                          class="form-control textarea comment"
                        ></textarea>
                      </div>
                    </td>
                  </tr>

                  <!-- <tr>
                    <td colspan="3" class="title-td">
                      2. TRANSPORT TO WORKPLACE
                    </td>
                  </tr> -->
                  <tr>
                    <td class="option-td">
                      <div class="title-div">
                        <label id="question">2. TRANSPORT TO WORKPLACE</label>
                      </div>
                      <span>A. Public transport</span>
                      <span>B. Own transport, if yes mention type?</span>
                      <span>C. Company Transport</span>
                    </td>
                    <td class="input-checkbox">
                      <div class="title-div"></div>
                      <div class="form-check">
                        <input
                          class="form-check-input one_1"
                          type="checkbox"
                          value="A. Public transport"
                          id="transport"
                        />
                        <label class="form-check-label" for="transport">
                          Yes
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input two_1"
                          type="checkbox"
                          value="B. Own transport, if yes mention type?"
                          id="own-transport"
                        />
                        <label class="form-check-label" for="own-transport">
                          Yes
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input three_1"
                          type="checkbox"
                          value="C. Company Transport"
                          id="Company-Transport"
                        />
                        <label class="form-check-label" for="Company-Transport">
                          Yes
                        </label>
                      </div>
                    </td>
                    <td>
                      <div class="mb-3">
                        <label class="form-label">Comments</label>
                        <textarea
                          class="form-control textarea comment"
                        ></textarea>
                      </div>
                    </td>
                  </tr>

                  <!-- <tr>
                    <td colspan="3" class="title-td">
                      3. PHYSICAL AND GRADE WEIGHT ABILITIES
                    </td>
                  </tr> -->
                  <tr>
                    <td class="option-td">
                      <div class="title-div">
                        <label id="question"
                          >3. PHYSICAL AND GRADE WEIGHT ABILITIES</label
                        >
                      </div>
                      <span>A. Limited (5kg)</span>
                      <span>B. Light (5-10kg)</span>
                      <span>C. Moderate (10-20kg)</span>
                      <span>D. Heavy (>20kg)</span>
                    </td>
                    <td class="input-checkbox">
                      <div class="title-div"></div>
                      <div class="form-check">
                        <input
                          class="form-check-input one_2"
                          type="checkbox"
                          value="A. Limited (5kg)"
                          id="Limited"
                        />
                        <label class="form-check-label" for="Limited">
                          Yes
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input two_2"
                          type="checkbox"
                          value="B. Light (5-10kg)"
                          id="Light"
                        />
                        <label class="form-check-label" for="Light">
                          Yes
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input three_2"
                          type="checkbox"
                          value="C. Moderate (10-20kg)"
                          id="Moderate"
                        />
                        <label class="form-check-label" for="Moderate">
                          Yes
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input four_2"
                          type="checkbox"
                          value="D. Heavy (>20kg)"
                          id="Heavy"
                        />
                        <label class="form-check-label" for="Heavy">
                          Yes
                        </label>
                      </div>
                    </td>
                    <td>
                      <div class="mb-3">
                        <label class="form-label">Comments</label>
                        <textarea
                          class="form-control textarea comment"
                        ></textarea>
                      </div>
                    </td>
                  </tr>
                  <!--  -->

                  <!-- <tr>
                    <td colspan="3" class="title-td">4. WORK TOLERANCE</td>
                  </tr> -->
                  <tr>
                    <td class="option-td">
                      <div class="title-div">
                        <label id="question">4. WORK TOLERANCE</label>
                      </div>
                      <span>A. Less than 2 hours </span>
                      <span>B. 2-3 hours </span>
                      <span>C. 3-4 hours </span>
                      <span>D. More than 4 hours </span>
                    </td>
                    <td class="input-checkbox">
                      <div class="title-div"></div>
                      <div class="form-check">
                        <input
                          class="form-check-input one_3"
                          type="checkbox"
                          value="A. Less than 2 hours"
                          id="hours1"
                        />
                        <label class="form-check-label" for="hours1">
                          Yes
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input two_3"
                          type="checkbox"
                          value="B. 2-3 hours"
                          id="hours2"
                        />
                        <label class="form-check-label" for="hours2">
                          Yes
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input three_3"
                          type="checkbox"
                          value="C. 3-4 hours"
                          id="hours3"
                        />
                        <label class="form-check-label" for="hours3">
                          Yes
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input four_3"
                          type="checkbox"
                          value="D. More than 4 hours"
                          id="hours4"
                        />
                        <label class="form-check-label" for="hours4">
                          Yes
                        </label>
                      </div>
                    </td>
                    <td>
                      <div class="mb-3">
                        <label class="form-label">Comments</label>
                        <textarea
                          class="form-control textarea comment"
                        ></textarea>
                      </div>
                    </td>
                  </tr>
                  <!--  -->

                  <!-- <tr>
                    <td colspan="3" class="title-td">5.WORK AREA</td>
                  </tr> -->
                  <tr>
                    <td class="option-td">
                      <div class="title-div">
                        <label id="question">5. WORK AREA</label>
                      </div>
                      <span>A. Small place</span>
                      <span>B. One room</span>
                      <span>C. Few rooms</span>
                      <span>D. Big building</span>
                      <span>E. Building and ground floor</span>
                    </td>
                    <td class="input-checkbox">
                      <div class="title-div"></div>
                      <div class="form-check">
                        <input
                          class="form-check-input one_4"
                          type="checkbox"
                          value="A. Small place"
                          id="work-area1"
                        />
                        <label class="form-check-label" for="work-area1">
                          Yes
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input two_4"
                          type="checkbox"
                          value="B. One room"
                          id="work-area2"
                        />
                        <label class="form-check-label" for="work-area2">
                          Yes
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input three_4"
                          type="checkbox"
                          value="C. Few rooms"
                          id="work-area3"
                        />
                        <label class="form-check-label" for="work-area3">
                          Yes
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input four_4"
                          type="checkbox"
                          value="D. Big building"
                          id="work-area4"
                        />
                        <label class="form-check-label" for="work-area4">
                          Yes
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input fifth_4"
                          type="checkbox"
                          value="E. Building and ground floor"
                          id="work-area5"
                        />
                        <label class="form-check-label" for="work-area5">
                          Yes
                        </label>
                      </div>
                    </td>
                    <td>
                      <div class="mb-3">
                        <label class="form-label">Comments</label>
                        <textarea
                          class="form-control textarea comment"
                        ></textarea>
                      </div>
                    </td>
                  </tr>
                  <!--  -->

                  <!-- <tr>
                    <td colspan="3" class="title-td">6. WORK SPEED</td>
                  </tr> -->
                  <tr>
                    <td class="option-td">
                      <div class="title-div">
                        <label id="question">6. WORK SPEED</label>
                      </div>
                      <span>A. Slow</span>
                      <span>B. Mild</span>
                      <span>C. Moderate</span>
                      <span>D. Fast</span>
                    </td>
                    <td class="input-checkbox">
                      <div class="title-div"></div>
                      <div class="form-check">
                        <input
                          class="form-check-input one_5"
                          type="checkbox"
                          value="A. Slow"
                          id="work-speed1"
                        />
                        <label class="form-check-label" for="work-speed1">
                          Yes
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input two_5"
                          type="checkbox"
                          value="B. Mild"
                          id="work-speed2"
                        />
                        <label class="form-check-label" for="work-speed2">
                          Yes
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input three_5"
                          type="checkbox"
                          value="C. Moderate"
                          id="work-speed3"
                        />
                        <label class="form-check-label" for="work-speed3">
                          Yes
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input fourth_5"
                          type="checkbox"
                          value="D. Fast"
                          id="work-speed4"
                        />
                        <label class="form-check-label" for="work-speed4">
                          Yes
                        </label>
                      </div>
                    </td>
                    <td>
                      <div class="mb-3">
                        <label class="form-label">Comments</label>
                        <textarea
                          class="form-control textarea comment"
                        ></textarea>
                      </div>
                    </td>
                  </tr>
                  <!--  -->

                  <!-- <tr>
                    <td colspan="3" class="title-td">7. Appearance</td>
                  </tr> -->
                  <tr>
                    <td class="option-td">
                      <div class="title-div">
                        <label id="question">7. Appearance</label>
                      </div>
                      <span>A. Casual</span>
                      <span>B. Clean</span>
                      <span>C. Clean and well kempt</span>
                      <span>D. Well kempt</span>
                    </td>
                    <td class="input-checkbox">
                      <div class="title-div"></div>
                      <div class="form-check">
                        <input
                          class="form-check-input one_6"
                          type="checkbox"
                          value="A. Casual"
                          id="appearance1"
                        />
                        <label class="form-check-label" for="appearance1">
                          Yes
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input two_6"
                          type="checkbox"
                          value="B. Clean"
                          id="appearance2"
                        />
                        <label class="form-check-label" for="appearance2">
                          Yes
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input three_6"
                          type="checkbox"
                          value="C. Clean and well kempt"
                          id="appearance3"
                        />
                        <label class="form-check-label" for="appearance3">
                          Yes
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input fourth_6"
                          type="checkbox"
                          value="D. Well kempt"
                          id="appearance4"
                        />
                        <label class="form-check-label" for="appearance4">
                          Yes
                        </label>
                      </div>
                    </td>
                    <td>
                      <div class="mb-3">
                        <label class="form-label">Comments</label>
                        <textarea
                          class="form-control textarea comment"
                        ></textarea>
                      </div>
                    </td>
                  </tr>
                  <!--  -->

                  <!-- <tr>
                    <td colspan="3" class="title-td">8. Communication skill</td>
                  </tr> -->
                  <tr>
                    <td class="option-td">
                      <div class="title-div">
                        <label id="question">8. Communication skill</label>
                      </div>
                      <span>A. Not required/minimal</span>
                      <span>B. When needed</span>
                      <span>C. Average</span>
                      <span>D. Good </span>
                    </td>
                    <td class="input-checkbox">
                      <div class="title-div"></div>
                      <div class="form-check">
                        <input
                          class="form-check-input one_7"
                          type="checkbox"
                          value="A. Not required/minimal"
                          id="communication-skill1"
                        />
                        <label
                          class="form-check-label"
                          for="communication-skill1"
                        >
                          Yes
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input two_7"
                          type="checkbox"
                          value="B. When needed"
                          id="communication-skill2"
                        />
                        <label
                          class="form-check-label"
                          for="communication-skill2"
                        >
                          Yes
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input three_7"
                          type="checkbox"
                          value="C. Average"
                          id="communication-skill3"
                        />
                        <label
                          class="form-check-label"
                          for="communication-skill3"
                        >
                          Yes
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input fourth_7"
                          type="checkbox"
                          value="D. Good"
                          id="communication-skill4"
                        />
                        <label
                          class="form-check-label"
                          for="communication-skill4"
                        >
                          Yes
                        </label>
                      </div>
                    </td>
                    <td>
                      <div class="mb-3">
                        <label class="form-label">Comments</label>
                        <textarea
                          class="form-control textarea comment"
                        ></textarea>
                      </div>
                    </td>
                  </tr>
                  <!--  -->

                  <!-- <tr>
                    <td colspan="3" class="title-td">9.Social interaction</td>
                  </tr> -->
                  <tr>
                    <td class="option-td">
                      <div class="title-div">
                        <label id="question">9.Social interaction</label>
                      </div>
                      <span>A. Not required/minimal</span>
                      <span>B. When needed</span>
                      <span>C. Average</span>
                      <span>D. Good </span>
                    </td>
                    <td class="input-checkbox">
                      <div class="title-div"></div>
                      <div class="form-check">
                        <input
                          class="form-check-input one_8"
                          type="checkbox"
                          value="A. Not required/minimal"
                          id="social-interaction1"
                        />
                        <label
                          class="form-check-label"
                          for="social-interaction1"
                        >
                          Yes
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input two_8"
                          type="checkbox"
                          value="B. When needed"
                          id="social-interaction2"
                        />
                        <label
                          class="form-check-label"
                          for="social-interaction2"
                        >
                          Yes
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input three_8"
                          type="checkbox"
                          value="C. Average"
                          id="social-interaction3"
                        />
                        <label
                          class="form-check-label"
                          for="social-interaction3"
                        >
                          Yes
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input fourth_8"
                          type="checkbox"
                          value="D. Good"
                          id="social-interaction4"
                        />
                        <label
                          class="form-check-label"
                          for="social-interaction4"
                        >
                          Yes
                        </label>
                      </div>
                    </td>
                    <td>
                      <div class="mb-3">
                        <label class="form-label">Comments</label>
                        <textarea
                          class="form-control textarea comment"
                        ></textarea>
                      </div>
                    </td>
                  </tr>
                  <!--  -->

                  <!-- <tr>
                    <td colspan="3" class="title-td">10.Concentration</td>
                  </tr> -->
                  <tr>
                    <td class="option-td">
                      <div class="title-div">
                        <label id="question">10.Concentration</label>
                      </div>
                      <span>A. Minimal</span>
                      <span>B. Fair</span>
                      <span>C. Average</span>
                      <span>D. Good </span>
                    </td>
                    <td class="input-checkbox">
                      <div class="title-div"></div>
                      <div class="form-check">
                        <input
                          class="form-check-input one_9"
                          type="checkbox"
                          value="A. Minimal"
                          id="concentration1"
                        />
                        <label class="form-check-label" for="concentration1">
                          Yes
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input two_9"
                          type="checkbox"
                          value="B. Fair"
                          id="concentration2"
                        />
                        <label class="form-check-label" for="concentration2">
                          Yes
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input three_9"
                          type="checkbox"
                          value="C. Average"
                          id="concentration3"
                        />
                        <label class="form-check-label" for="concentration3">
                          Yes
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input four_9"
                          type="checkbox"
                          value="D. Good"
                          id="concentration4"
                        />
                        <label class="form-check-label" for="concentration4">
                          Yes
                        </label>
                      </div>
                    </td>
                    <td>
                      <div class="mb-3">
                        <label class="form-label">Comments</label>
                        <textarea
                          class="form-control textarea comment"
                        ></textarea>
                      </div>
                    </td>
                  </tr>
                  <!--  -->

                  <!-- <tr>
                    <td colspan="3" class="title-td">11. Work demand</td>
                  </tr> -->
                  <tr>
                    <td class="option-td">
                      <div class="title-div">
                        <label id="question">11. Work demand</label>
                      </div>
                      <span>A. One task at a time</span>
                      <span>B. Few task (2-3)</span>
                      <span>C. Average (4-6)</span>
                      <span>D. Many task (>7 )</span>
                    </td>
                    <td class="input-checkbox">
                      <div class="title-div"></div>
                      <div class="form-check">
                        <input
                          class="form-check-input one_10"
                          type="checkbox"
                          value="A. One task at a time"
                          id="work-demand1"
                        />
                        <label class="form-check-label" for="work-demand1">
                          Yes
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input two_10"
                          type="checkbox"
                          value="B. Few task (2-3)"
                          id="work-demand2"
                        />
                        <label class="form-check-label" for="work-demand2">
                          Yes
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input three_10"
                          type="checkbox"
                          value="C. Average (4-6)"
                          id="work-demand3"
                        />
                        <label class="form-check-label" for="work-demand3">
                          Yes
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input four_10"
                          type="checkbox"
                          value="D. Many task (>7 )"
                          id="work-demand4"
                        />
                        <label class="form-check-label" for="work-demand4">
                          Yes
                        </label>
                      </div>
                    </td>
                    <td>
                      <div class="mb-3">
                        <label class="form-label">Comments</label>
                        <textarea
                          class="form-control textarea comment"
                        ></textarea>
                      </div>
                    </td>
                  </tr>
                  <!--  -->

                  <!-- <tr>
                    <td colspan="3" class="title-td">12. Motivation</td>
                  </tr> -->
                  <tr>
                    <td class="option-td">
                      <div class="title-div">
                        <label id="question">12. Motivation</label>
                      </div>
                      <span>A. Need encouragement</span>
                      <span>B. Proactive</span>
                      <span>C. Good support</span>
                    </td>
                    <td class="input-checkbox">
                      <div class="title-div"></div>
                      <div class="form-check">
                        <input
                          class="form-check-input one_11"
                          type="checkbox"
                          value="A. Need encouragement"
                          id="motivation1"
                        />
                        <label class="form-check-label" for="motivation1">
                          Yes
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input two_11"
                          type="checkbox"
                          value="B. Proactive"
                          id="motivation2"
                        />
                        <label class="form-check-label" for="motivation2">
                          Yes
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input three_11"
                          type="checkbox"
                          value="C. Good support"
                          id="motivation3"
                        />
                        <label class="form-check-label" for="motivation3">
                          Yes
                        </label>
                      </div>
                    </td>
                    <td>
                      <div class="mb-3">
                        <label class="form-label">Comments</label>
                        <textarea
                          class="form-control textarea comment"
                        ></textarea>
                      </div>
                    </td>
                  </tr>
                  <!--  -->

                  <!-- <tr>
                    <td colspan="3" class="title-td">
                      13. Flexibility in routine
                    </td>
                  </tr> -->
                  <tr>
                    <td class="option-td">
                      <div class="title-div">
                        <label id="question">13. Flexibility in routine</label>
                      </div>
                      <span>A. Frequent (>7)</span>
                      <span>B. Average (4-6)</span>
                      <span>C. Minimal (2-3) </span>
                    </td>
                    <td class="input-checkbox">
                      <div class="title-div"></div>
                      <div class="form-check">
                        <input
                          class="form-check-input one_12"
                          type="checkbox"
                          value="A. Frequent (>7)"
                          id="fir1"
                        />
                        <label class="form-check-label" for="fir1"> Yes </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input two_12"
                          type="checkbox"
                          value="B. Average (4-6)"
                          id="fir2"
                        />
                        <label class="form-check-label" for="fir2"> Yes </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input three_12"
                          type="checkbox"
                          value="C. Minimal (2-3)"
                          id="fir3"
                        />
                        <label class="form-check-label" for="fir3"> Yes </label>
                      </div>
                    </td>
                    <td>
                      <div class="mb-3">
                        <label class="form-label">Comments</label>
                        <textarea
                          class="form-control textarea comment"
                        ></textarea>
                      </div>
                    </td>
                  </tr>
                  <!--  -->

                  <!-- <tr>
                    <td colspan="3" class="title-td">14. Ability to read</td>
                  </tr> -->
                  <tr>
                    <td class="option-td">
                      <div class="title-div">
                        <label id="question">14. Ability to read</label>
                      </div>
                      <span>A. Not required</span>
                      <span>B. Recognize symbol</span>
                      <span>C. Simple word</span>
                      <span>D. Read fluently</span>
                    </td>
                    <td class="input-checkbox">
                      <div class="title-div"></div>
                      <div class="form-check">
                        <input
                          class="form-check-input one_13"
                          type="checkbox"
                          value="A. Not required"
                          id="atr1"
                        />
                        <label class="form-check-label" for="atr1"> Yes </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input two_13"
                          type="checkbox"
                          value="B. Recognize symbol"
                          id="atr2"
                        />
                        <label class="form-check-label" for="atr2"> Yes </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input three_13"
                          type="checkbox"
                          value="C. Simple word"
                          id="atr3"
                        />
                        <label class="form-check-label" for="atr3"> Yes </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input four_13"
                          type="checkbox"
                          value="D. Read fluently"
                          id="atr4"
                        />
                        <label class="form-check-label" for="atr4"> Yes </label>
                      </div>
                    </td>
                    <td>
                      <div class="mb-3">
                        <label class="form-label">Comments</label>
                        <textarea
                          class="form-control textarea comment"
                        ></textarea>
                      </div>
                    </td>
                  </tr>
                  <!--  -->

                  <!-- <tr>
                    <td colspan="3" class="title-td">
                      15. ABILITY TO CALCULATE
                    </td>
                  </tr> -->
                  <tr>
                    <td class="option-td">
                      <div class="title-div">
                        <label id="question">15. ABILITY TO CALCULATE</label>
                      </div>
                      <span>A. Not required</span>
                      <span>B. Use calculator</span>
                      <span>C. Simple maths without calculator</span>
                      <span>D. Difficult maths</span>
                    </td>
                    <td class="input-checkbox">
                      <div class="title-div"></div>
                      <div class="form-check">
                        <input
                          class="form-check-input one_14"
                          type="checkbox"
                          value="A. Not required"
                          id="atc1"
                        />
                        <label class="form-check-label" for="atc1"> Yes </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input two_14"
                          type="checkbox"
                          value="B. Use calculator"
                          id="atc2"
                        />
                        <label class="form-check-label" for="atc2"> Yes </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input three_14"
                          type="checkbox"
                          value="C. Simple maths without calculator"
                          id="atc3"
                        />
                        <label class="form-check-label" for="atc3"> Yes </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input fourth_14"
                          type="checkbox"
                          value="D. Difficult maths"
                          id="atc4"
                        />
                        <label class="form-check-label" for="atc4"> Yes </label>
                      </div>
                    </td>
                    <td>
                      <div class="mb-3">
                        <label class="form-label">Comments</label>
                        <textarea
                          class="form-control textarea comment"
                        ></textarea>
                      </div>
                    </td>
                  </tr>
                  <!--  -->

                  <!-- <tr>
                    <td colspan="3" class="title-td">16. BENEFITS</td>
                  </tr> -->
                  <tr>
                    <td class="option-td">
                      <div class="title-div">
                        <label id="question">16. BENEFITS</label>
                      </div>
                      <span>0 = Nil</span>
                      <span>1 = Mc</span>
                      <span>2 = Medical Benefit</span>
                      <span>3 = Annual Leave</span>
                      <span>4 = Dental Benefits</span>
                      <span>5 = Discount For Employee</span>
                      <span>6 = Free Food</span>
                      <span>7 = Others (To Specify)</span>
                    </td>
                    <td class="input-checkbox">
                      <div class="form-check">
                        <input
                          class="form-check-input one_15"
                          type="checkbox"
                          value="0 = Nil"
                          id="benefits1"
                        />
                        <label class="form-check-label" for="benefits1">
                          Yes
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input two_15"
                          type="checkbox"
                          value="1 = Mc"
                          id="benefits2"
                        />
                        <label class="form-check-label" for="benefits2">
                          Yes
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input three_15"
                          type="checkbox"
                          value="2 = Medical Benefit"
                          id="benefits3"
                        />
                        <label class="form-check-label" for="benefits3">
                          Yes
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input fourth_15"
                          type="checkbox"
                          value="3 = Annual Leave"
                          id="benefits4"
                        />
                        <label class="form-check-label" for="benefits4">
                          Yes
                        </label>
                      </div>

                      <div class="form-check">
                        <input
                          class="form-check-input fifth_15"
                          type="checkbox"
                          value="4 = Dental Benefits"
                          id="benefits5"
                        />
                        <label class="form-check-label" for="benefits5">
                          Yes
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input six_15"
                          type="checkbox"
                          value="5 = Discount For Employee"
                          id="benefits6"
                        />
                        <label class="form-check-label" for="benefits6">
                          Yes
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input seven_15"
                          type="checkbox"
                          value="6 = Free Food"
                          id="benefits7"
                        />
                        <label class="form-check-label" for="benefits7">
                          Yes
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input eight_15"
                          type="checkbox"
                          value="7 = Others (To Specify)"
                          id="benefits8"
                        />
                        <label class="form-check-label" for="benefits8">
                          Yes
                        </label>
                      </div>
                    </td>
                    <td>
                      <div class="mb-3 input-boxs">
                        <input type="text" class="form-control onecomment" />
                        <input type="text" class="form-control twocomment" />
                        <input type="text" class="form-control threecomment" />
                        <input type="text" class="form-control fourcomment" />
                        <input type="text" class="form-control fivecomment" />
                        <input type="text" class="form-control sixcomment" />
                        <input type="text" class="form-control sevencomment" />
                        <input type="text" class="form-control eightcomment" />
                      </div>
                    </td>
                  </tr>
                  <!--  -->
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
 <p v-if="errorList.length">
                          <ul>
                           <li style="color:red"  v-for='err in errorList' :key='err' >
                           {{ err }}
                             </li>
                        </ul>
                       </p>
                       <br>
                      <br>
                <div class="d-flex" v-if="!pid">
                    <button
                      @click="GoBack"
                      class="btn btn-primary btn-text" title="Back"
                      ><i class="fa fa-arrow-alt-to-left"></i> Back
                    </button>
                    <div  class="btn-right" :class="SidebarAccess!=1?'hide':''">
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
      </main>
    </div>
  </div>
</template>
<script>
import CommonHeader from "../../../components/CommonHeader.vue";
import CommonSidebar from "../../../components/CommonSidebar.vue";
export default {
  components: { CommonSidebar, CommonHeader },
  name: "work-analysis-form",
  data() {
    return {
      userdetails: null,
      patientdetails: null,
      errorList: [],
      servicelist: [],
      outcomelist: [],
      comlexcitylist: [],
      codelist: [],
      icdcatcodelist: [],
      diagonisislist: [],
      locationlist: [],
      titlelist: [],
      GStateList: [],
      GCityList: [],
      GPostCodeList: [],
      Id: 0,
      company_name: "",
      company_address1: "",
      company_address2: "",
      company_address3: "",
      state_id: "",
      city_id: "",
      postcode_id: "",
      supervisor_name: "",
      email: "",
      position: "",
      client_name: "",
      job_position: "",
      current_wage: "",
      wage_specify: "",
      wage_change_occur: "",
      change_in_rate: "",
      from: "",
      to: "",
      on_date: "",
      works_hour_week: "",
      work_schedule: "",
      no_of_other_employee: "",
      no_of_current_employee: "",
      during_same_shift: "",
      education_level: "",
      grade: "",
      job_experience_year: "",
      job_experience_months: "",
      others: "",
      location_services_id: 0,
      type_diagnosis_id: 0,
      category_services: "",
      code_id: 0,
      sub_code_id: 0,
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
      job_des: [],
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

      $(".add-td").click(function (i) {
        $(".block:last").after(
          '<tr class="block"> <td> <input type="text" class="form-control task" name="" /></td><td><input type="text" class="form-control object" name="" /></td><td><input type="text" class="form-control width-fixed procedure" name="" /> </td><td> <input type="text" class="form-control width-fixed time" name=""/></td> <td> <span class="remove"><i class="fal fa-times"></i></span></td></tr>'
        );
      });
      $(".optionBox").on("click", ".remove", function () {
        $(this).closest(".block").remove();
      });
      $(":radio[data-rel]").change(function () {
        var rel = $("." + $(this).data("rel"));
        if ($(this).val() == "yes") {
          rel.show();
        } else {
          rel.hide();
          rel.find(":text,select").val("");
          rel.find(":radio,:checkbox").prop("checked", false);
        }
      });
    });
    let urlParams = new URLSearchParams(window.location.search);
    this.Id = urlParams.get("id");
    this.appId = urlParams.get("appId");
    this.GetList();
    let urlParams1 = new URLSearchParams(window.location.search);
    this.pid = urlParams1.get("pid");
    this.type = urlParams1.get("type");
    if (this.pid) {
      this.getdetails();
    }
  },
  methods: {
    async onCreateEvent() {
      if (confirm("Are you sure you want to save as draft?")) {
        var jobSPECIFICATION = [];
        var jobSDESCRIPTION = [];
        try {
          this.loader = true;
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          const response = await this.$axios.post(
            "work-analysis/add",
            {
              added_by: this.userdetails.user.id,
              patient_id: this.Id,
              company_name: this.company_name,
              company_address1: this.company_address1,
              company_address2: this.company_address2,
              company_address3: this.company_address3,
              state_id: this.state_id,
              city_id: this.city_id,
              postcode_id: this.postcode_id,
              supervisor_name: this.supervisor_name,
              email: this.email,
              position: this.position,
              client_name: this.client_name,
              job_position: this.job_position,
              current_wage: this.current_wage,
              wage_specify: this.wage_specify,
              wage_change_occur: this.wage_change_occur,
              change_in_rate: this.change_in_rate,
              from: this.from,
              to: this.to,
              on_date: this.on_date,
              works_hour_week: this.works_hour_week,
              work_schedule: this.work_schedule,
              no_of_current_employee: this.no_of_current_employee,
              no_of_other_employee: this.no_of_other_employee,
              during_same_shift: this.during_same_shift,
              education_level: this.education_level,
              grade: this.grade,
              job_experience_year: this.job_experience_year,
              job_experience_months: this.job_experience_months,
              others: this.others,
              location_services: this.location_services_id,
              type_diagnosis_id: this.type_diagnosis_id,
              category_services: this.category_services,
              services_id: this.services_id,
              code_id: this.code_id,
              sub_code_id: this.sub_code_id,
              complexity_of_services: this.complexity_services_id,
              outcome: this.outcome_id,
              medication_prescription: this.medication_des,
              jobs: jobSDESCRIPTION,
              job_specification: jobSPECIFICATION,
              id:this.pid,
              appId: this.appId,
              status:"0",
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
        } catch (e) {
        this.loader = false;
        this.$nextTick(() => {
          $("#errorpopup").modal("show");
        });
      }
    }
  },
    async onPublishEvent() {
      if (confirm("Are you sure you want to submit this entry?")) {
      var jobSPECIFICATION = [];
      var jobSDESCRIPTION = [];
      $("table#jobspecification > tbody > tr").each(function (i) {
        var obj = {};
        var answer = "";
        obj.questions = $("td #question", this).text();
        if ($('td input[type="checkbox"].one_' + i).is(":checked") == true) {
          answer = $('td input[type="checkbox"].one_' + i, this).val();
        }
        if ($('td input[type="checkbox"].two_' + i).is(":checked") == true) {
          if (answer) {
            answer =
              answer +
              "," +
              $('td input[type="checkbox"].two_' + i, this).val();
          } else {
            answer = $('td input[type="checkbox"].two_' + i, this).val();
          }
        }
        if ($('td input[type="checkbox"].three_' + i).is(":checked") == true) {
          if (answer) {
            answer =
              answer +
              "," +
              $('td input[type="checkbox"].three_' + i, this).val();
          } else {
            answer = $('td input[type="checkbox"].three_' + i, this).val();
          }
        }
        if ($('td input[type="checkbox"].four_' + i).is(":checked") == true) {
          if (answer) {
            answer =
              answer +
              "," +
              $('td input[type="checkbox"].four_' + i, this).val();
          } else {
            answer = $('td input[type="checkbox"].four_' + i, this).val();
          }
        }
        if (i == 15) {
          if (
            $('td input[type="checkbox"].fifth_' + i).is(":checked") == true
          ) {
            if (answer) {
              answer =
                answer +
                "," +
                $('td input[type="checkbox"].fifth_' + i, this).val();
            } else {
              answer = $('td input[type="checkbox"].fifth_' + i, this).val();
            }
          }
        }

        obj.answer = answer;
        obj.comments = $("td textarea.comment", this).val();
        if (i == 15) {
          if (
            $('td input[type="checkbox"].fifth_' + i).is(":checked") == true
          ) {
            if (answer) {
              answer =
                answer +
                "," +
                $('td input[type="checkbox"].fifth_' + i, this).val();
            } else {
              answer = $('td input[type="checkbox"].fifth_' + i, this).val();
            }
          }
          if ($('td input[type="checkbox"].six_' + i).is(":checked") == true) {
            if (answer) {
              answer =
                answer +
                "," +
                $('td input[type="checkbox"].six_' + i, this).val();
            } else {
              answer = $('td input[type="checkbox"].six_' + i, this).val();
            }
          }
          if (
            $('td input[type="checkbox"].seven_' + i).is(":checked") == true
          ) {
            if (answer) {
              answer =
                answer +
                "," +
                $('td input[type="checkbox"].seven_' + i, this).val();
            } else {
              answer = $('td input[type="checkbox"].seven_' + i, this).val();
            }
          }
          if (
            $('td input[type="checkbox"].eight_' + i).is(":checked") == true
          ) {
            if (answer) {
              answer =
                answer +
                "," +
                $('td input[type="checkbox"].eight_' + i, this).val();
            } else {
              answer = $('td input[type="checkbox"].eight_' + i, this).val();
            }
          }
          obj.comments =
            $('td input[type="text"].onecomment', this).val() +
            "," +
            $('td input[type="text"].twocomment', this).val() +
            "," +
            $('td input[type="text"].threecomment', this).val();
          +"," + $('td input[type="text"].fourcomment', this).val();
          +"," + $('td input[type="text"].fivecomment', this).val();
          +"," + $('td input[type="text"].sixcomment', this).val();
          +"," + $('td input[type="text"].sevencomment', this).val();
          +"," + $('td input[type="text"].eightcomment', this).val();
        }
        jobSPECIFICATION.push(obj);
      });
      $("table#JOBDESCRIPTION > tbody > tr").each(function (i) {
        var obj = {};
        obj.task_description = $('td input[type="text"].task', this).val();
        obj.objectives = $('td input[type="text"].object', this).val();
        obj.procedure = $('td input[type="text"].procedure', this).val();
        obj.rate_of_time = $('td input[type="text"].time', this).val();
        jobSDESCRIPTION.push(obj);
        console.log(i);
      });
      this.validate = true;
      this.errorList = [];
      try {
        if (!this.company_name) {
          this.errorList.push("Company Name is required");
        }
        if (!this.company_address1) {
          this.errorList.push("Company Address is required");
        }
        if (!this.state_id) {
          this.errorList.push("State is required");
        }
        if (!this.city_id) {
          this.errorList.push("City is required");
        }
        if (!this.postcode_id) {
          this.errorList.push("Postcode is required");
        }
        if (!this.supervisor_name) {
          this.errorList.push("Supervisor Name is required");
        }
        if (!this.email) {
          this.errorList.push("Email is required");
        }
        if (!this.position) {
          this.errorList.push("Position is required");
        }
        if (!this.client_name) {
          this.errorList.push("Client Name is required");
        }
        if (!this.job_position) {
          this.errorList.push("Job Position is required");
        }
        if (!this.current_wage) {
          this.errorList.push("Current Wage is required");
        }
        if (!this.wage_specify) {
          this.errorList.push("Wage specify is required");
        }
        if (!this.wage_change_occur) {
          this.errorList.push(
            "Did a wage change occur for the last 3-6 months? is required"
          );
        }
        if (this.wage_change_occur == "yes") {
          if (!this.change_in_rate) {
            this.errorList.push("Changes In Rate is required");
            this.validate = false;
          }
          if (!this.from) {
            this.errorList.push("From is required");
            this.validate = false;
          }
          if (!this.to) {
            this.errorList.push("To is required");
            this.validate = false;
          }
          if (!this.on_date) {
            this.errorList.push("On Date is required");
            this.validate = false;
          }
          if (!this.works_hour_week) {
            this.errorList.push("Work Hours In A Week is required");
            this.validate = false;
          }
          if (!this.work_schedule) {
            this.errorList.push("Work Schedule is required");
            this.validate = false;
          }
          if (!this.no_of_current_employee) {
            this.errorList.push(
              "No Of Current Employee In Company is required"
            );
            this.validate = false;
          }
          if (!this.no_of_other_employee) {
            this.errorList.push(
              "No Of Other Employees In This Position is required"
            );
            this.validate = false;
          }
          if (!this.during_same_shift) {
            this.errorList.push("During Same Shift is required");
            this.validate = false;
          }
        }
        if (!this.education_level) {
          this.errorList.push("Education Level is required");
        }
        if (!this.grade) {
          this.errorList.push("Grade is required");
        }
        if (!this.job_experience_year) {
          this.errorList.push("Job Experience Year is required");
        }
        if (!this.job_experience_months) {
          this.errorList.push("Job Experience Months is required");
        }

        if (!this.others) {
          this.errorList.push("Others is required");
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
        if (
          this.company_name &&
          this.company_address1 &&
          this.state_id &&
          this.city_id &&
          this.postcode_id &&
          this.supervisor_name &&
          this.email &&
          this.position &&
          this.client_name &&
          this.job_position &&
          this.current_wage &&
          this.wage_specify &&
          this.wage_change_occur &&
          this.education_level &&
          this.grade &&
          this.job_experience_year &&
          this.job_experience_months &&
          this.others &&
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
            "work-analysis/add",
            {
              added_by: this.userdetails.user.id,
              patient_id: this.Id,
              company_name: this.company_name,
              company_address1: this.company_address1,
              company_address2: this.company_address2,
              company_address3: this.company_address3,
              state_id: this.state_id,
              city_id: this.city_id,
              postcode_id: this.postcode_id,
              supervisor_name: this.supervisor_name,
              email: this.email,
              position: this.position,
              client_name: this.client_name,
              job_position: this.job_position,
              current_wage: this.current_wage,
              wage_specify: this.wage_specify,
              wage_change_occur: this.wage_change_occur,
              change_in_rate: this.change_in_rate,
              from: this.from,
              to: this.to,
              on_date: this.on_date,
              works_hour_week: this.works_hour_week,
              work_schedule: this.work_schedule,
              no_of_current_employee: this.no_of_current_employee,
              no_of_other_employee: this.no_of_other_employee,
              during_same_shift: this.during_same_shift,
              education_level: this.education_level,
              grade: this.grade,
              job_experience_year: this.job_experience_year,
              job_experience_months: this.job_experience_months,
              others: this.others,
              location_services: this.location_services_id,
              type_diagnosis_id: this.type_diagnosis_id,
              category_services: this.category_services,
              services_id: this.services_id,
              code_id: this.code_id,
              sub_code_id: this.sub_code_id,
              complexity_of_services: this.complexity_services_id,
              outcome: this.outcome_id,
              medication_prescription: this.medication_des,
              jobs: jobSDESCRIPTION,
              job_specification: jobSPECIFICATION,
              id:this.pid,
              appId: this.appId,
              status:"1",
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
      } catch (e) {
        this.loader = false;
        this.$nextTick(() => {
          $("#errorpopup").modal("show");
        });
      }
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
        "intervention/job-start-form-list",
        {
          headers,
        }
      );
      if (response6.data.code == 200 || response6.data.code == "200") {
        this.titlelist = response6.data.list;
      } else {
        this.titlelist = [];
      }
      const response7 = await this.$axios.get("address/list", {
        headers,
      });
      if (response7.data.code == 200 || response7.data.code == "200") {
        this.GStateList = response7.data.list;
      } else {
        this.GStateList = [];
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
    async getCityList(event) {
      const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "address/" + event.target.value + "/getCityList",
        { headers }
      );
      if (response.data.code == 200 || response.data.code == "200") {
        this.GCityList = response.data.list;
        this.GPostCodeList = [];
      } else {
        this.GCityList = [];
        this.GPostCodeList = [];
      }

    },
    async getPostcodeList(event) {
      const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "address/" + event.target.value + "/getPostcodeListById",
        { headers }
      );
      if (response.data.code == 200 || response.data.code == "200") {
        this.GPostCodeList = response.data.list;
      } else {
        this.GPostCodeList = [];
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
    async onCitybind(event) {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "address/" + event.target.value + "/stateWisePostcodeList",
        { headers }
      );
      if (response.data.code == 200 || response.data.code == "200") {
        console.log("my city", response.data.list);
        this.GCityList = response.data.list;
        this.GPostCodeList = response.data.list;
      } else {
        this.GCityList = [];
        this.GPostCodeList = [];
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
          type: "WorkAnalysisForm",
        },
        { headers }
      );
      if (response.data.code == 200) {

        this.Id = response.data.Data[0].patient_id;
        this.company_name = response.data.Data[0].company_name;
        this.company_address1 = response.data.Data[0].company_address1;
        this.company_address2 = response.data.Data[0].company_address2;
        this.company_address3 = response.data.Data[0].company_address3;
        this.state_id = response.data.Data[0].state_id;
        this.city_id = response.data.Data[0].city_id;
        this.postcode_id = response.data.Data[0].postcode_id;
        this.supervisor_name = response.data.Data[0].supervisor_name;
        this.email = response.data.Data[0].email;
        this.position = response.data.Data[0].position;
        this.client_name = response.data.Data[0].client_name;
        this.job_position = response.data.Data[0].job_position;
        this.current_wage = response.data.Data[0].current_wage;
        this.age_specify = response.data.Data[0].wage_specify;
        this.wage_change_occur = response.data.Data[0].wage_change_occur;
        this.change_in_rate = response.data.Data[0].change_in_rate;
        this.from = response.data.Data[0].from;
        this.to = response.data.Data[0].to;
        this.on_date = response.data.Data[0].on_date;
        this.works_hour_week = response.data.Data[0].works_hour_week;
        this.work_schedule = response.data.Data[0].work_schedule;
        this.no_of_current_employee =
          response.data.Data[0].no_of_current_employee;
        this.no_of_other_employee = response.data.Data[0].no_of_other_employee;
        this.during_same_shift = response.data.Data[0].during_same_shift;
        this.education_level = response.data.Data[0].education_level;
        this.grade = response.data.Data[0].grade;
        this.job_experience_year = response.data.Data[0].job_experience_year;
        this.job_experience_months =
          response.data.Data[0].job_experience_months;
        this.others = response.data.Data[0].others;
        this.location_services_id = response.data.Data[0].location_services;
        this.type_diagnosis_id = response.data.Data[0].type_diagnosis_id;
        this.category_services = response.data.Data[0].category_services;
        this.services = response.data.Data[0].services_id;
        this.code_id = response.data.Data[0].code_id;
        this.sub_code_id = response.data.Data[0].sub_code_id;
        this.complexity_of_services =
          response.data.Data[0].complexity_services_id;
        this.outcome_id = response.data.Data[0].outcome;
        this.medication_prescription = response.data.Data[0].medication_des;
        this.jobSPECIFICATION = response.data.Data[0].jobs;
        this.jobSDESCRIPTION = response.data.Data[0].jobs_des;
        console.log("myjobb", this.jobSPECIFICATION);

        this.GetList();
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
.title-div {
  color: #000 !important;
  font-size: 15px;
  height: 25px;
  margin: 7px 0;
  padding: 0px !important;
  display: block !important;
}
.vertical-align-middle td {
  vertical-align: middle;
}
</style>
