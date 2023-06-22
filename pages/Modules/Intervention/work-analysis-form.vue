<template>
  <div id="layoutSidenav">
      <CommonSidebar />
      <div id="layoutSidenav_content">
          <CommonHeader />
          <main>
            <Loader v-if="loader" />
              <div class="container-fluid px-4">
                  <div class="page-title">
                      <h1>Work Analysis Form</h1>
                  </div>

                  <div class="card mb-4">
                      <div class="card-body new-form">
                          <div class="form-title">
                              <h5>A. JOB INFORMATION</h5>
                          </div>

                          <div class="row">
                              <div class="col-md-6">
                                  <div class="mb-3">
                                      <label class="form-label">Company Name<small style="color:red">*</small> </label>
                                      <input  type="text" class="form-control" v-model="company_name" />
                                  </div>
                              </div>
                          </div>
                          <!-- row -->

                          <div class="row">
                              <div class="col-md-6">
                                  <div class="mb-3">
                                      <label class="form-label">Company Address<small style="color:red">*</small> </label>
                                      <input  type="text" class="form-control" v-model="company_address1" />
                                  </div>
                                  <div class="mb-3">
                                      <input  type="text" class="form-control" v-model="company_address2" />
                                  </div>
                                  <div class="mb-3">
                                      <input  type="text" class="form-control" v-model="company_address3" />
                                  </div>
                              </div>

                              <div class="col-md-6">
                                  <div class="mb-3">
                                      <label class="form-label">State<small style="color:red">*</small> </label>
                                      <select  class="form-select" @change="getCityList($event)" v-model="state_id">
                                          <option value="0">Please Select</option>
                                          <option v-for="state in GStateList" v-bind:key="state.id" v-bind:value="state.id">
                                              {{ state.state_name }}
                                          </option>
                                      </select>
                                  </div>

                                  <div class="row">
                                      <div class="col-md-6 mb-3">
                                          <label for="" class="form-label">City<small style="color:red">*</small> </label>
                                          <select  class="form-select" v-model="city_id" @change="getPostcodeList($event)">
                                              <option value="0">Please Select</option>
                                              <option v-for="ctl in GCityList" v-bind:key="ctl.city_name" v-bind:value="ctl.city_name">
                                                  {{ ctl.city_name }}
                                              </option>
                                          </select>
                                      </div>
                                      <div class="col-md-6 mb-3">
                                          <label for="" class="form-label">Postcode<small style="color:red">*</small> </label>
                                          <select  class="form-select" v-model="postcode_id">
                                              <option value="0">Please Select</option>
                                              <option v-for="pst in GPostCodeList" v-bind:key="pst.id" v-bind:value="pst.id">
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
                                      <label class="form-label">Supervisor Name<small style="color:red">*</small> </label>
                                      <input  type="text" class="form-control" v-model="supervisor_name" />
                                  </div>
                              </div>

                              <div class="col-md-4">
                                  <div class="mb-3">
                                      <label class="form-label">Email<small style="color:red">*</small> </label>
                                      <input  type="text" class="form-control" v-model="email" />
                                  </div>
                              </div>

                              <div class="col-md-4">
                                  <div class="mb-3">
                                      <label class="form-label">Position<small style="color:red">*</small> </label>
                                      <input  type="text" class="form-control" v-model="position" />
                                  </div>
                              </div>
                          </div>
                          <!-- row -->

                          <div class="row">
                              <div class="col-md-8">
                                  <div class="mb-3">
                                      <label class="form-label">Client Name<small style="color:red">*</small> </label>
                                      <input  type="text" class="form-control" v-model="client_name" />
                                  </div>
                              </div>

                              <div class="col-md-4">
                                  <div class="mb-3">
                                      <label class="form-label">Job Position<small style="color:red">*</small> </label>
                                      <input  type="text" class="form-control" v-model="job_position" />
                                  </div>
                              </div>
                          </div>
                          <!-- row -->

                          <div class="row">
                              <label class="form-label">Current Wage<small style="color:red">*</small> </label>
                              <div class="col-md-4">
                                  <div class="mb-3">
                                      <select  class="form-select" v-model="current_wage">
                                          <option value="">Please Select</option>
                                          <option value="Per Hour">Per Hour</option>
                                          <option value="Per Day">Per Day</option>
                                          <option value="Per Month">Per Month</option>
                                      </select>
                                  </div>
                              </div>

                              <div class="col-md-4">
                                  <div class="mb-3">
                                      <input  type="text" name="" placeholder="Please specify wage" class="form-control" v-model="wage_specify" />
                                  </div>
                              </div>
                          </div>
                          <!-- row -->

                          <div class="mb-3">
                              <label class="form-label">Did a wage change occur for the last 3-6 months?</label>
                              <div class="col-sm-8">
                                  <div class="form-check form-check-inline">
                                      <input  class="form-check-input" type="radio" name="wage" id="wage1" value="yes" data-rel="wage" v-model="wage_change_occur" />
                                      <label class="form-check-label" for="wage1">Yes</label>
                                  </div>

                                  <div class="form-check form-check-inline">
                                      <input  class="form-check-input" type="radio" name="wage" id="wage2" value="no" data-rel="wage" v-model="wage_change_occur" />
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
                                          <select  class="form-select" v-model="change_in_rate">
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
                                          <input  type="text" name="" class="form-control" v-model="from" />
                                      </div>
                                  </div>

                                  <div class="col-sm-3">
                                      <div class="mb-3">
                                          <label class="form-label">To</label>
                                          <input  type="text" name="" class="form-control" v-model="to" />
                                      </div>
                                  </div>

                                  <div class="col-sm-3">
                                      <div class="mb-3">
                                          <label class="form-label">On Date</label>
                                          <input  type="date" name="" class="form-control" v-model="on_date" />
                                      </div>
                                  </div>
                              </div>
                              <!-- row -->

                              <div class="row">
                                  <div class="col-sm-6">
                                      <div class="mb-3">
                                          <label class="form-label">Work Hours In A Week</label>
                                          <input  type="text" name="" class="form-control" v-model="works_hour_week" />
                                      </div>
                                  </div>

                                  <div class="col-sm-6">
                                      <div class="mb-3">
                                          <label class="form-label">Work Schedule</label>
                                          <input  type="text" name="" class="form-control" v-model="work_schedule" />
                                      </div>
                                  </div>
                              </div>
                              <!-- row -->

                              <div class="row">
                                  <div class="col-sm-6">
                                      <div class="mb-3">
                                          <label class="form-label">No Of Current Employee In Company</label>
                                          <input  type="text" name="" class="form-control" v-model="no_of_current_employee" />
                                      </div>
                                  </div>

                                  <div class="col-sm-6">
                                      <div class="mb-3">
                                          <label class="form-label">No Of Other Employees In This Position</label>
                                          <input  type="text" name="" class="form-control" v-model="no_of_other_employee" />
                                      </div>
                                  </div>
                              </div>
                              <!-- row -->

                              <div class="row">
                                  <div class="col-sm-6">
                                      <div class="mb-3">
                                          <label class="form-label">During Same Shift</label>
                                          <input  type="text" name="" class="form-control" v-model="during_same_shift" />
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
                                          <label class="form-label">Education Level<small style="color:red">*</small> </label>
                                          <input  type="text" class="form-control" v-model="education_level" />
                                      </div>

                                      <div class="col-sm-4">
                                          <label class="form-label">Grade<small style="color:red">*</small> </label>
                                          <input  type="text" class="form-control" v-model="grade" />
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
                                          <label class="form-label">Year<small style="color:red">*</small> </label>
                                          <input  type="text" class="form-control" v-model="job_experience_year" />
                                      </div>

                                      <div class="col-sm-4">
                                          <label class="form-label">Months<small style="color:red">*</small> </label>
                                          <input  type="text" class="form-control" v-model="job_experience_months" />
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <!-- row -->

                          <div class="row">
                              <div class="col-md-12">
                                  <div class="mb-3">
                                      <label class="form-label">Others<small style="color:red">*</small> </label>
                                      <textarea  class="form-control textarea" v-model="others"></textarea>
                                  </div>
                              </div>
                          </div>
                          <!-- row -->

                          <div class="form-title">
                              <h5>B. JOB DESCRIPTION</h5>
                          </div>
                          <div class="table-responsive">
                              <table class="notes th-width table-padding" v-if="!pid">
                                  <tbody>
                                      <tr>
                                          <td colspan="2" class="td-padding">
                                              <table class="th-auto th-bg input-width" id="JOBDESCRIPTION">
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
                                                              <input type="text" class="form-control task" name="" />
                                                          </td>
                                                          <td>
                                                              <input type="text" class="form-control object" name="" />
                                                          </td>
                                                          <td>
                                                              <input type="text" class="form-control width-fixed procedure" name="" />
                                                          </td>
                                                          <td>
                                                              <input type="text" class="form-control width-fixed time" name="" />
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
                          </div>
                          <div class="table-responsive">
                              <table class="notes th-width table-padding" v-if="pid">
                                  <tbody>
                                      <tr>
                                          <td colspan="2" class="td-padding">
                                              <table class="th-auto th-bg input-width" id="JOBDESCRIPTION1">
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
                                                              <input type="text" class="form-control task" name="" v-model="job1.task_description" />
                                                          </td>
                                                          <td>
                                                              <input type="text" class="form-control object" name="" v-model="job1.objectives" />
                                                          </td>
                                                          <td>
                                                              <input type="text" class="form-control width-fixed procedure" name="" v-model="job1.procedure" />
                                                          </td>
                                                          <td>
                                                              <input type="text" class="form-control width-fixed time" name="" v-model="job1.rate_of_time" />
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
                          </div>
                          <div class="form-title mt-3">
                              <h5>C. JOB SPECIFICATION</h5>
                          </div>

                          <table class="notes th-width table-padding vertical-align-middle worksch-table" id="jobspecification">
                              <tbody>
                                  <!--1. WORK SCHEDULE-->
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
                                              <input  class="form-check-input one_0" type="checkbox" value="A. Need to work on weekend" id="weekend" v-model="work_schedule_A" />
                                              <label class="form-check-label" for="weekend">
                                                  Yes
                                              </label>
                                          </div>
                                          <div class="form-check">
                                              <input  class="form-check-input two_0" type="checkbox" value="B. Night shift only?" id="shift" v-model="work_schedule_B" />
                                              <label class="form-check-label" for="shift">
                                                  Yes
                                              </label>
                                          </div>
                                          <div class="form-check">
                                              <input  class="form-check-input three_0" type="checkbox" value="C. Part-time?" id="Parttime" v-model="work_schedule_C" />
                                              <label class="form-check-label" for="Parttime">
                                                  Yes
                                              </label>
                                          </div>
                                          <div class="form-check">
                                              <input  class="form-check-input four_0" type="checkbox" value="D. Full time?" id="Fulltime" v-model="work_schedule_D" />
                                              <label class="form-check-label" for="Fulltime">
                                                  Yes
                                              </label>
                                          </div>
                                      </td>
                                      <td>
                                          <div class="mb-3">
                                              <label class="form-label">Comments</label>
                                              <textarea  class="form-control textarea comment" v-model="work_schedule_comment"></textarea>
                                          </div>
                                      </td>
                                  </tr>
                                  <!--2. TRANSPORT TO WORKPLACE-->
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
                                              <input  class="form-check-input one_1" type="checkbox" value="A. Public transport" id="transport" v-model="transport_to_workplace_A" />
                                              <label class="form-check-label" for="transport">
                                                  Yes
                                              </label>
                                          </div>
                                          <div class="form-check">
                                              <input  class="form-check-input two_1" type="checkbox" value="B. Own transport if yes mention type?" id="own-transport" v-model="transport_to_workplace_B" />
                                              <label class="form-check-label" for="own-transport">
                                                  Yes
                                              </label>
                                          </div>
                                          <div class="form-check">
                                              <input  class="form-check-input three_1" type="checkbox" value="C. Company Transport" id="Company-Transport" v-model="transport_to_workplace_C" />
                                              <label class="form-check-label" for="Company-Transport">
                                                  Yes
                                              </label>
                                          </div>
                                      </td>
                                      <td>
                                          <div class="mb-3">
                                              <label class="form-label">Comments</label>
                                              <textarea  class="form-control textarea comment" v-model="transport_to_workplace_comment"></textarea>
                                          </div>
                                      </td>
                                  </tr>
                                  <!--3. PHYSICAL AND GRADE WEIGHT ABILITIES-->
                                  <tr>
                                      <td class="option-td">
                                          <div class="title-div">
                                              <label id="question">3. PHYSICAL AND GRADE WEIGHT ABILITIES</label>
                                          </div>
                                          <span>A. Limited (5kg)</span>
                                          <span>B. Light (5-10kg)</span>
                                          <span>C. Moderate (10-20kg)</span>
                                          <span>D. Heavy (>20kg)</span>
                                      </td>
                                      <td class="input-checkbox">
                                          <div class="title-div"></div>
                                          <div class="form-check">
                                              <input  class="form-check-input one_2" type="checkbox" value="A. Limited (5kg)" id="Limited" v-model="pgwa_A" />
                                              <label class="form-check-label" for="Limited">
                                                  Yes
                                              </label>
                                          </div>
                                          <div class="form-check">
                                              <input  class="form-check-input two_2" type="checkbox" value="B. Light (5-10kg)" id="Light" v-model="pgwa_B" />
                                              <label class="form-check-label" for="Light">
                                                  Yes
                                              </label>
                                          </div>
                                          <div class="form-check">
                                              <input  class="form-check-input three_2" type="checkbox" value="C. Moderate (10-20kg)" id="Moderate" v-model="pgwa_C" />
                                              <label class="form-check-label" for="Moderate">
                                                  Yes
                                              </label>
                                          </div>
                                          <div class="form-check">
                                              <input  class="form-check-input four_2" type="checkbox" value="D. Heavy (>20kg)" id="Heavy" v-model="pgwa_D" />
                                              <label class="form-check-label" for="Heavy">
                                                  Yes
                                              </label>
                                          </div>
                                      </td>
                                      <td>
                                          <div class="mb-3">
                                              <label class="form-label">Comments</label>
                                              <textarea  class="form-control textarea comment" v-model="pgwa_comment"></textarea>
                                          </div>
                                      </td>
                                  </tr>
                                  <!--4. WORK TOLERANCE-->
                                  <tr>
                                      <td class="option-td">
                                          <div class="title-div">
                                              <label id="question">4.WORK TOLERANCE</label>
                                          </div>
                                          <span>A. Less than 2 hours </span>
                                          <span>B. 2-3 hours </span>
                                          <span>C. 3-4 hours </span>
                                          <span>D. More than 4 hours </span>
                                      </td>
                                      <td class="input-checkbox">
                                          <div class="title-div"></div>
                                          <div class="form-check">
                                              <input  class="form-check-input one_3" type="checkbox" value="A. Less than 2 hours" id="hours1" v-model="work_tolerance_A" />
                                              <label class="form-check-label" for="hours1">
                                                  Yes
                                              </label>
                                          </div>
                                          <div class="form-check">
                                              <input  class="form-check-input two_3" type="checkbox" value="B. 2-3 hours" id="hours2" v-model="work_tolerance_B" />
                                              <label class="form-check-label" for="hours2">
                                                  Yes
                                              </label>
                                          </div>
                                          <div class="form-check">
                                              <input  class="form-check-input three_3" type="checkbox" value="C. 3-4 hours" id="hours3" v-model="work_tolerance_C" />
                                              <label class="form-check-label" for="hours3">
                                                  Yes
                                              </label>
                                          </div>
                                          <div class="form-check">
                                              <input  class="form-check-input four_3" type="checkbox" value="D. More than 4 hours" id="hours4" v-model="work_tolerance_D" />
                                              <label class="form-check-label" for="hours4">
                                                  Yes
                                              </label>
                                          </div>
                                      </td>
                                      <td>
                                          <div class="mb-3">
                                              <label class="form-label">Comments</label>
                                              <textarea  class="form-control textarea comment" v-model="work_tolerance_comment"></textarea>
                                          </div>
                                      </td>
                                  </tr>
                                  <!--5. WORK AREA-->
                                  <tr>
                                      <td class="option-td">
                                          <div class="title-div">
                                              <label id="question">5.WORK AREA</label>
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
                                              <input  class="form-check-input one_4" type="checkbox" value="A. Small place" id="work-area1" v-model="work_area_A" />
                                              <label class="form-check-label" for="work-area1">
                                                  Yes
                                              </label>
                                          </div>
                                          <div class="form-check">
                                              <input  class="form-check-input two_4" type="checkbox" value="B. One room" id="work-area2" v-model="work_area_B" />
                                              <label class="form-check-label" for="work-area2">
                                                  Yes
                                              </label>
                                          </div>
                                          <div class="form-check">
                                              <input   class="form-check-input three_4" type="checkbox" value="C. Few rooms" id="work-area3" v-model="work_area_C" />
                                              <label class="form-check-label" for="work-area3">
                                                  Yes
                                              </label>
                                          </div>
                                          <div class="form-check">
                                              <input  class="form-check-input four_4" type="checkbox" value="D. Big building" id="work-area4" v-model="work_area_D" />
                                              <label class="form-check-label" for="work-area4">
                                                  Yes
                                              </label>
                                          </div>
                                          <div class="form-check">
                                              <input  class="form-check-input five_4" type="checkbox" value="E. Building and ground floor" id="work-area5" v-model="work_area_E" />
                                              <label class="form-check-label" for="work-area5">
                                                  Yes
                                              </label>
                                          </div>
                                      </td>
                                      <td>
                                          <div class="mb-3">
                                              <label class="form-label">Comments</label>
                                              <textarea  class="form-control textarea comment" v-model="work_area_comment"></textarea>
                                          </div>
                                      </td>
                                  </tr>
                                  <!--6.WORK SPEED-->
                                  <tr>
                                      <td class="option-td">
                                          <div class="title-div">
                                              <label id="question">6.WORK SPEED</label>
                                          </div>
                                          <span>A. Slow</span>
                                          <span>B. Mild</span>
                                          <span>C. Moderate</span>
                                          <span>D. Fast</span>
                                      </td>
                                      <td class="input-checkbox">
                                          <div class="title-div"></div>
                                          <div class="form-check">
                                              <input  class="form-check-input one_5" type="checkbox" value="A. Slow" id="work-speed1" v-model="work_speed_A" />
                                              <label class="form-check-label" for="work-speed1">
                                                  Yes
                                              </label>
                                          </div>
                                          <div class="form-check">
                                              <input  class="form-check-input two_5" type="checkbox" value="B. Mild" id="work-speed2" v-model="work_speed_B" />
                                              <label class="form-check-label" for="work-speed2">
                                                  Yes
                                              </label>
                                          </div>
                                          <div class="form-check">
                                              <input  class="form-check-input three_5" type="checkbox" value="C. Moderate" id="work-speed3" v-model="work_speed_C" />
                                              <label class="form-check-label" for="work-speed3">
                                                  Yes
                                              </label>
                                          </div>
                                          <div class="form-check">
                                              <input  class="form-check-input four_5" type="checkbox" value="D. Fast" id="work-speed4" v-model="work_speed_D" />
                                              <label class="form-check-label" for="work-speed4">
                                                  Yes
                                              </label>
                                          </div>
                                      </td>
                                      <td>
                                          <div class="mb-3">
                                              <label class="form-label">Comments</label>
                                              <textarea  class="form-control textarea comment" v-model="work_speed_comment"></textarea>
                                          </div>
                                      </td>
                                  </tr>
                                  <!--7.APPEARANCE-->
                                  <tr>
                                      <td class="option-td">
                                          <div class="title-div">
                                              <label id="question">7.APPEARANCE</label>
                                          </div>
                                          <span>A. Casual</span>
                                          <span>B. Clean</span>
                                          <span>C. Clean and well kempt</span>
                                          <span>D. Well kempt</span>
                                      </td>
                                      <td class="input-checkbox">
                                          <div class="title-div"></div>
                                          <div class="form-check">
                                              <input  class="form-check-input one_6" type="checkbox" value="A. Casual" id="appearance1" v-model="appearance_A" />
                                              <label class="form-check-label" for="appearance1">
                                                  Yes
                                              </label>
                                          </div>
                                          <div class="form-check">
                                              <input  class="form-check-input two_6" type="checkbox" value="B. Clean" id="appearance2" v-model="appearance_B" />
                                              <label class="form-check-label" for="appearance2">
                                                  Yes
                                              </label>
                                          </div>
                                          <div class="form-check">
                                              <input  class="form-check-input three_6" type="checkbox" value="C. Clean and well kempt" id="appearance3" v-model="appearance_C" />
                                              <label class="form-check-label" for="appearance3">
                                                  Yes
                                              </label>
                                          </div>
                                          <div class="form-check">
                                              <input  class="form-check-input four_6" type="checkbox" value="D. Well kempt" id="appearance4" v-model="appearance_D" />
                                              <label class="form-check-label" for="appearance4">
                                                  Yes
                                              </label>
                                          </div>
                                      </td>
                                      <td>
                                          <div class="mb-3">
                                              <label class="form-label">Comments</label>
                                              <textarea  class="form-control textarea comment" v-model="appearance_comment"></textarea>
                                          </div>
                                      </td>
                                  </tr>
                                  <!--8.COMMUNICATION SKILL-->
                                  <tr>
                                      <td class="option-td">
                                          <div class="title-div">
                                              <label id="question">8.COMMUNICATION SKILL</label>
                                          </div>
                                          <span>A. Not required/minimal</span>
                                          <span>B. When needed</span>
                                          <span>C. Average</span>
                                          <span>D. Good </span>
                                      </td>
                                      <td class="input-checkbox">
                                          <div class="title-div"></div>
                                          <div class="form-check">
                                              <input  class="form-check-input one_7" type="checkbox" value="A. Not required/minimal" id="communication-skill1" v-model="communication_skill_A" />
                                              <label class="form-check-label" for="communication-skill1">
                                                  Yes
                                              </label>
                                          </div>
                                          <div class="form-check">
                                              <input  class="form-check-input two_7" type="checkbox" value="B. When needed" id="communication-skill2" v-model="communication_skill_B" />
                                              <label class="form-check-label" for="communication-skill2">
                                                  Yes
                                              </label>
                                          </div>
                                          <div class="form-check">
                                              <input  class="form-check-input three_7" type="checkbox" value="C. Average" id="communication-skill3" v-model="communication_skill_C" />
                                              <label class="form-check-label" for="communication-skill3">
                                                  Yes
                                              </label>
                                          </div>
                                          <div class="form-check">
                                              <input  class="form-check-input four_7" type="checkbox" value="D. Good" id="communication-skill4" v-model="communication_skill_D" />
                                              <label class="form-check-label" for="communication-skill4">
                                                  Yes
                                              </label>
                                          </div>
                                      </td>
                                      <td>
                                          <div class="mb-3">
                                              <label class="form-label">Comments</label>
                                              <textarea  class="form-control textarea comment" v-model="communication_skill_comment"></textarea>
                                          </div>
                                      </td>
                                  </tr>
                                  <!--9.SOCIAL INTERACTION-->
                                  <tr>
                                      <td class="option-td">
                                          <div class="title-div">
                                              <label id="question">9.SOCIAL INTERACTION</label>
                                          </div>
                                          <span>A. Not required/minimal</span>
                                          <span>B. When needed</span>
                                          <span>C. Average</span>
                                          <span>D. Good </span>
                                      </td>
                                      <td class="input-checkbox">
                                          <div class="title-div"></div>
                                          <div class="form-check">
                                              <input  class="form-check-input one_8" type="checkbox" value="A. Not required/minimal" id="social-interaction1" v-model="social_interaction_A" />
                                              <label class="form-check-label" for="social-interaction1">
                                                  Yes
                                              </label>
                                          </div>
                                          <div class="form-check">
                                              <input  class="form-check-input two_8" type="checkbox" value="B. When needed" id="social-interaction2" v-model="social_interaction_B" />
                                              <label class="form-check-label" for="social-interaction2">
                                                  Yes
                                              </label>
                                          </div>
                                          <div class="form-check">
                                              <input  class="form-check-input three_8" type="checkbox" value="C. Average" id="social-interaction3" v-model="social_interaction_C" />
                                              <label class="form-check-label" for="social-interaction3">
                                                  Yes
                                              </label>
                                          </div>
                                          <div class="form-check">
                                              <input  class="form-check-input four_8" type="checkbox" value="D. Good" id="social-interaction4" v-model="social_interaction_D" />
                                              <label class="form-check-label" for="social-interaction4">
                                                  Yes
                                              </label>
                                          </div>
                                      </td>
                                      <td>
                                          <div class="mb-3">
                                              <label class="form-label">Comments</label>
                                              <textarea  class="form-control textarea comment" v-model="social_interaction_comment"></textarea>
                                          </div>
                                      </td>
                                  </tr>
                                  <!--10.CONCENTRATION-->
                                  <tr>
                                      <td class="option-td">
                                          <div class="title-div">
                                              <label id="question">10.CONCENTRATION</label>
                                          </div>
                                          <span>A. Minimal</span>
                                          <span>B. Fair</span>
                                          <span>C. Average</span>
                                          <span>D. Good </span>
                                      </td>
                                      <td class="input-checkbox">
                                          <div class="title-div"></div>
                                          <div class="form-check">
                                              <input  class="form-check-input one_9" type="checkbox" value="A. Minimal" id="concentration1" v-model="concentration_A" />
                                              <label class="form-check-label" for="concentration1">
                                                  Yes
                                              </label>
                                          </div>
                                          <div class="form-check">
                                              <input  class="form-check-input two_9" type="checkbox" value="B. Fair" id="concentration2" v-model="concentration_B" />
                                              <label class="form-check-label" for="concentration2">
                                                  Yes
                                              </label>
                                          </div>
                                          <div class="form-check">
                                              <input  class="form-check-input three_9" type="checkbox" value="C. Average" id="concentration3" v-model="concentration_C" />
                                              <label class="form-check-label" for="concentration3">
                                                  Yes
                                              </label>
                                          </div>
                                          <div class="form-check">
                                              <input  class="form-check-input four_9" type="checkbox" value="D. Good" id="concentration4" v-model="concentration_D" />
                                              <label class="form-check-label" for="concentration4">
                                                  Yes
                                              </label>
                                          </div>
                                      </td>
                                      <td>
                                          <div class="mb-3">
                                              <label class="form-label">Comments</label>
                                              <textarea  class="form-control textarea comment" v-model="concentration_comment"></textarea>
                                          </div>
                                      </td>
                                  </tr>
                                  <!--11.WORK DEMAND-->
                                  <tr>
                                      <td class="option-td">
                                          <div class="title-div">
                                              <label id="question">11.WORK DEMAND</label>
                                          </div>
                                          <span>A. One task at a time</span>
                                          <span>B. Few task (2-3)</span>
                                          <span>C. Average (4-6)</span>
                                          <span>D. Many task (>7 )</span>
                                      </td>
                                      <td class="input-checkbox">
                                          <div class="title-div"></div>
                                          <div class="form-check">
                                              <input  class="form-check-input one_10" type="checkbox" value="A. One task at a time" id="work-demand1" v-model="work_demand_A" />
                                              <label class="form-check-label" for="work-demand1">
                                                  Yes
                                              </label>
                                          </div>
                                          <div class="form-check">
                                              <input  class="form-check-input two_10" type="checkbox" value="B. Few task (2-3)" id="work-demand2" v-model="work_demand_B" />
                                              <label class="form-check-label" for="work-demand2">
                                                  Yes
                                              </label>
                                          </div>
                                          <div class="form-check">
                                              <input  class="form-check-input three_10" type="checkbox" value="C. Average (4-6)" id="work-demand3" v-model="work_demand_C" />
                                              <label class="form-check-label" for="work-demand3">
                                                  Yes
                                              </label>
                                          </div>
                                          <div class="form-check">
                                              <input  class="form-check-input four_10" type="checkbox" value="D. Many task (>7 )" id="work-demand4" v-model="work_demand_D" />
                                              <label class="form-check-label" for="work-demand4">
                                                  Yes
                                              </label>
                                          </div>
                                      </td>
                                      <td>
                                          <div class="mb-3">
                                              <label class="form-label">Comments</label>
                                              <textarea  class="form-control textarea comment" v-model="work_demand_comment"></textarea>
                                          </div>
                                      </td>
                                  </tr>
                                  <!--12.MOTIVATION-->
                                  <tr>
                                      <td class="option-td">
                                          <div class="title-div">
                                              <label id="question">12.MOTIVATION</label>
                                          </div>
                                          <span>A. Need encouragement</span>
                                          <span>B. Proactive</span>
                                          <span>C. Good support</span>
                                      </td>
                                      <td class="input-checkbox">
                                          <div class="title-div"></div>
                                          <div class="form-check">
                                              <input  class="form-check-input one_11" type="checkbox" value="A. Need encouragement" id="motivation1" v-model="motivation_A" />
                                              <label class="form-check-label" for="motivation1">
                                                  Yes
                                              </label>
                                          </div>
                                          <div class="form-check">
                                              <input  class="form-check-input two_11" type="checkbox" value="B. Proactive" id="motivation2" v-model="motivation_B" />
                                              <label class="form-check-label" for="motivation2">
                                                  Yes
                                              </label>
                                          </div>
                                          <div class="form-check">
                                              <input  class="form-check-input three_11" type="checkbox" value="C. Good support" id="motivation3" v-model="motivation_C" />
                                              <label class="form-check-label" for="motivation3">
                                                  Yes
                                              </label>
                                          </div>
                                      </td>
                                      <td>
                                          <div class="mb-3">
                                              <label class="form-label">Comments</label>
                                              <textarea  class="form-control textarea comment" v-model="motivation_comment"></textarea>
                                          </div>
                                      </td>
                                  </tr>
                                  <!--13.FLEXIBILITY IN ROUTINE-->
                                  <tr>
                                      <td class="option-td">
                                          <div class="title-div">
                                              <label id="question">13.FLEXIBILITY IN ROUTINE</label>
                                          </div>
                                          <span>A. Frequent (>7)</span>
                                          <span>B. Average (4-6)</span>
                                          <span>C. Minimal (2-3) </span>
                                      </td>
                                      <td class="input-checkbox">
                                          <div class="title-div"></div>
                                          <div class="form-check">
                                              <input  class="form-check-input one_12" type="checkbox" value="A. Frequent (>7)" id="fir1" v-model="flexibility_A" />
                                              <label class="form-check-label" for="fir1"> Yes </label>
                                          </div>
                                          <div class="form-check">
                                              <input  class="form-check-input two_12" type="checkbox" value="B. Average (4-6)" id="fir2" v-model="flexibility_B" />
                                              <label class="form-check-label" for="fir2"> Yes </label>
                                          </div>
                                          <div class="form-check">
                                              <input  class="form-check-input three_12" type="checkbox" value="C. Minimal (2-3)" id="fir3" v-model="flexibility_C" />
                                              <label class="form-check-label" for="fir3"> Yes </label>
                                          </div>
                                      </td>
                                      <td>
                                          <div class="mb-3">
                                              <label class="form-label">Comments</label>
                                              <textarea  class="form-control textarea comment" v-model="flexibility_comment"></textarea>
                                          </div>
                                      </td>
                                  </tr>
                                  <!--14.ABILITY TO READ-->
                                  <tr>
                                      <td class="option-td">
                                          <div class="title-div">
                                              <label id="question">14.ABILITY TO READ</label>
                                          </div>
                                          <span>A. Not required</span>
                                          <span>B. Recognize symbol</span>
                                          <span>C. Simple word</span>
                                          <span>D. Read fluently</span>
                                      </td>
                                      <td class="input-checkbox">
                                          <div class="title-div"></div>
                                          <div class="form-check">
                                              <input  class="form-check-input one_13" type="checkbox" value="A. Not required" id="atr1" v-model="ability_A" />
                                              <label class="form-check-label" for="atr1"> Yes </label>
                                          </div>
                                          <div class="form-check">
                                              <input  class="form-check-input two_13" type="checkbox" value="B. Recognize symbol" id="atr2" v-model="ability_B" />
                                              <label class="form-check-label" for="atr2"> Yes </label>
                                          </div>
                                          <div class="form-check">
                                              <input  class="form-check-input three_13" type="checkbox" value="C. Simple word" id="atr3" v-model="ability_C" />
                                              <label class="form-check-label" for="atr3"> Yes </label>
                                          </div>
                                          <div class="form-check">
                                              <input  class="form-check-input four_13" type="checkbox" value="D. Read fluently" id="atr4" v-model="ability_D" />
                                              <label class="form-check-label" for="atr4"> Yes </label>
                                          </div>
                                      </td>
                                      <td>
                                          <div class="mb-3">
                                              <label class="form-label">Comments</label>
                                              <textarea  class="form-control textarea comment" v-model="ability_comment"></textarea>
                                          </div>
                                      </td>
                                  </tr>
                                  <!--15.ABILITY TO CALCULATE-->
                                  <tr>
                                      <td class="option-td">
                                          <div class="title-div">
                                              <label id="question">15.ABILITY TO CALCULATE</label>
                                          </div>
                                          <span>A. Not required</span>
                                          <span>B. Use calculator</span>
                                          <span>C. Simple maths without calculator</span>
                                          <span>D. Difficult maths</span>
                                      </td>
                                      <td class="input-checkbox">
                                          <div class="title-div"></div>
                                          <div class="form-check">
                                              <input  class="form-check-input one_14" type="checkbox" value="A. Not required" id="atc1" v-model="calculate_A" />
                                              <label class="form-check-label" for="atc1"> Yes </label>
                                          </div>
                                          <div class="form-check">
                                              <input  class="form-check-input two_14" type="checkbox" value="B. Use calculator" id="atc2" v-model="calculate_B" />
                                              <label class="form-check-label" for="atc2"> Yes </label>
                                          </div>
                                          <div class="form-check">
                                              <input  class="form-check-input three_14" type="checkbox" value="C. Simple maths without calculator" id="atc3" v-model="calculate_C" />
                                              <label class="form-check-label" for="atc3"> Yes </label>
                                          </div>
                                          <div class="form-check">
                                              <input  class="form-check-input four_14" type="checkbox" value="D. Difficult maths" id="atc4" v-model="calculate_D" />
                                              <label class="form-check-label" for="atc4"> Yes </label>
                                          </div>
                                      </td>
                                      <td>
                                          <div class="mb-3">
                                              <label class="form-label">Comments</label>
                                              <textarea  class="form-control textarea comment" v-model="calculate_comment"></textarea>
                                          </div>
                                      </td>
                                  </tr>
                                  <!-- 16.BENEFITS -->
                                  <tr>
                                      <td class="option-td">
                                          <div class="title-div">
                                              <label id="question">16.BENEFITS</label>
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
                                              <input  class="form-check-input one_15" type="checkbox" value="0 = Nil" id="benefits1" v-model="benefits_0" />
                                              <label class="form-check-label" for="benefits1">
                                                  Yes
                                              </label>
                                          </div>
                                          <div class="form-check">
                                              <input  class="form-check-input two_15" type="checkbox" value="1 = Mc" id="benefits2" v-model="benefits_1" />
                                              <label class="form-check-label" for="benefits2">
                                                  Yes
                                              </label>
                                          </div>
                                          <div class="form-check">
                                              <input  class="form-check-input three_15" type="checkbox" value="2 = Medical Benefit" id="benefits3" v-model="benefits_2" />
                                              <label class="form-check-label" for="benefits3">
                                                  Yes
                                              </label>
                                          </div>
                                          <div class="form-check">
                                              <input  class="form-check-input four_15" type="checkbox" value="3 = Annual Leave" id="benefits4" v-model="benefits_3" />
                                              <label class="form-check-label" for="benefits4">
                                                  Yes
                                              </label>
                                          </div>

                                          <div class="form-check">
                                              <input  class="form-check-input five_15" type="checkbox" value="4 = Dental Benefits" id="benefits5" v-model="benefits_4" />
                                              <label class="form-check-label" for="benefits5">
                                                  Yes
                                              </label>
                                          </div>
                                          <div class="form-check">
                                              <input  class="form-check-input six_15" type="checkbox" value="5 = Discount For Employee" id="benefits6" v-model="benefits_5" />
                                              <label class="form-check-label" for="benefits6">
                                                  Yes
                                              </label>
                                          </div>
                                          <div class="form-check">
                                              <input  class="form-check-input seven_15" type="checkbox" value="6 = Free Food" id="benefits7" v-model="benefits_6" />
                                              <label class="form-check-label" for="benefits7">
                                                  Yes
                                              </label>
                                          </div>
                                          <div class="form-check">
                                              <input  class="form-check-input eight_15" type="checkbox" value="7 = Others (To Specify)" id="benefits8" v-model="benefits_7" />
                                              <label class="form-check-label" for="benefits8">
                                                  Yes
                                              </label>
                                          </div>
                                      </td>
                                      <td>
                                          <div class="mb-3 input-boxs">
                                              <input  type="text" class="form-control onecomment" v-model="onecomment" />
                                              <input  type="text" class="form-control twocomment" v-model="twocomment" />
                                              <input  type="text" class="form-control threecomment" v-model="threecomment" />
                                              <input  type="text" class="form-control fourcomment" v-model="fourcomment" />
                                              <input  type="text" class="form-control fivecomment" v-model="fivecomment" />
                                              <input  type="text" class="form-control sixcomment" v-model="sixcomment" />
                                              <input  type="text" class="form-control sevencomment" v-model="sevencomment" />
                                              <input  type="text" class="form-control eightcomment" v-model="eightcomment" />
                                          </div>
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
                                                <select  class="form-select" v-model="location_services_id">
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
                                                <select  class="form-select" v-model="type_diagnosis_id">
                                                    <option value="0">Select Diagnosis</option>
                                                    <option v-for="catcode in diagonisislist" v-bind:key="catcode.id" v-bind:value="catcode.id">
                                                        {{ catcode.icd_code }} {{catcode.icd_name}}
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="row mb-3 align-items-flex-start">
                                          <label class="col-sm-4 col-form-label"
                                              >Additional Diagnosis</label
                                          >
                                          <div class="col-sm-8">
                                              <select
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
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio2" value="clinical-work" v-model="category_services" />
                                                    <label class="form-check-label" for="inlineRadio2">Clinical Work / Procedure
                                                    </label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions3" id="inlineRadio3" value="external" v-model="category_services" />
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
                                                    <select  class="form-select" v-model="services_id">
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
                                                    <select  class="form-select" v-model="code_id" @change="onCategorycodebind($event)">
                                                        <option value="0">Select code</option>
                                                        <option v-for="type in codelist" v-bind:key="type.id" v-bind:value="type.id">
                                                            {{ type.icd_category_code }} {{type.icd_category_name}}
                                                        </option>
                                                    </select>
                                                </div>
                                                <div class="col-md-6 mb-3">
                                                    <label class="form-label">ICD 9 SUB CODE<small style="color:red">*</small> </label>
                                                    <div class="mt-2 align-items-flex-start">
                                                        <select  id="subcodeicd" style="width:100%" class="form-select multiselectadditional" multiple="multiple">
                                                            <option value="0">Select sub code</option>
                                                            <option v-for="catcode in icdcatcodelist" v-bind:key="catcode.id" v-bind:value="catcode.id">
                                                                {{ catcode.icd_code }}
                                                                {{catcode.icd_name}}
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6 mb-">
                                                    <label class="form-label">Additional ICD 9 CODE</label>
                                                    <select class="form-select" v-model="additional_code_id" @change="onCategorycodebindAdditional($event)">
                                                        <option value="0">Select additional code</option>
                                                        <option v-for="type in codelistadditional" v-bind:key="type.id" v-bind:value="type.id">
                                                            {{ type.icd_category_code }} {{type.icd_category_name}}
                                                        </option>
                                                    </select>
                                                </div>
                                                <div class="col-md-6 mb-3">
                                                    <label class="form-label">Additional ICD 9 SUB CODE</label>
                                                    <div class="mt-2 align-items-flex-start">
                                                        <select id="additionalsubcodeicd" style="width:100%" class="form-select multiselectadditionalsubcode" multiple="multiple">
                                                            <option value="0">Select additional sub code</option>
                                                            <option v-for="catcode in icdcatcodelistadditional" v-bind:key="catcode.id" v-bind:value="catcode.id">
                                                                {{ catcode.icd_code }}
                                                                {{catcode.icd_name}}
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- 02 -->
                                        <div id="external" class="external services hide mb-3">
                                            <div class="row">
                                                <div class="col-md-6 mb-3">
                                                    <label class="form-label">Services<small style="color:red">*</small> </label>
                                                    <select class="form-select" v-model="serviceid">
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
                                                <select  class="form-select" v-model="complexity_services_id">
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
                                                <select   class="form-select" v-model="outcome_id">
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
                                            <textarea   class="form-control textarea" placeholder="Please Type Prescription Here" v-model="medication_des"></textarea>
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
                              <button @click="GoBack" class="btn btn-primary btn-text"><i class="fa fa-arrow-alt-to-left"></i> Back
                              </button>
                              <div v-if="!pid" class="ml-auto" :class="SidebarAccess != 1 ? 'hide' : ''">
                                  <button type="submit" @click="onCreateEvent()" class="btn btn-warning btn-text" title="Draft">
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
      name: "work-analysis-form",
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
              icdcatcodelist: [],
              diagonisislist: [],
              locationlist: [],
              titlelist: [],
              GStateList: [],
              GCityList: [],
              GPostCodeList: [],
              Id: 0,
              appId: 0,
              company_name: "",
              company_address1: "",
              company_address2: "",
              company_address3: "",
              state_id: 0,
              city_id: 0,
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
              jobs_des: [],
              weekend: "",
              shift: "",
              jobs: [],
              jobSPECIFICATION: "",
              jobSDESCRIPTION: "",
              work_schedule_A: "",
              work_schedule_B: "",
              work_schedule_C: "",
              work_schedule_D: "",
              work_schedule_comment: "",
              transport_to_workplace_A: "",
              transport_to_workplace_B: "",
              transport_to_workplace_C: "",
              transport_to_workplace_comment: "",
              pgwa_A: "",
              pgwa_B: "",
              pgwa_C: "",
              pgwa_D: "",
              pgwa_comment: "",
              work_tolerance_A: "",
              work_tolerance_B: "",
              work_tolerance_C: "",
              work_tolerance_D: "",
              work_tolerance_comment: "",
              work_area_A: "",
              work_area_B: "",
              work_area_C: "",
              work_area_D: "",
              work_area_E: "",
              work_area_comment: "",
              work_speed_A: "",
              work_speed_B: "",
              work_speed_C: "",
              work_speed_D: "",
              work_speed_comment: "",
              appearance_A: "",
              appearance_B: "",
              appearance_C: "",
              appearance_D: "",
              appearance_comment: "",
              communication_skill_A: "",
              communication_skill_B: "",
              communication_skill_C: "",
              communication_skill_D: "",
              communication_skill_comment: "",
              social_interaction_A: "",
              social_interaction_B: "",
              social_interaction_C: "",
              social_interaction_D: "",
              social_interaction_comment: "",
              concentration_A: "",
              concentration_B: "",
              concentration_C: "",
              concentration_D: "",
              concentration_comment: "",
              work_demand_A: "",
              work_demand_B: "",
              work_demand_C: "",
              work_demand_D: "",
              work_demand_comment: "",
              motivation_A: "",
              motivation_B: "",
              motivation_C: "",
              motivation_comment: "",
              flexibility_A: "",
              flexibility_B: "",
              flexibility_C: "",
              flexibility_comment: "",
              ability_A: "",
              ability_B: "",
              ability_C: "",
              ability_D: "",
              ability_comment: "",
              calculate_A: "",
              calculate_B: "",
              calculate_C: "",
              calculate_D: "",
              calculate_comment: "",
              benefits_0: "",
              benefits_1: "",
              benefits_2: "",
              benefits_3: "",
              benefits_4: "",
              benefits_5: "",
              benefits_6: "",
              benefits_7: "",
              onecomment: "",
              twocomment: "",
              threecomment: "",
              fourcomment: "",
              fivecomment: "",
              sixcomment: "",
              sevencomment: "",
              eightcomment: "",
              SidebarAccess: null,

              icdcatcodelistadditional: [],
              diagonisislistadditional: [],
              additional_code_id: 0,
              additional_sub_code_id: [],
              additional_diagnosis: [],
              codelistadditional: [],
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

              $(".add-td").click(function () {
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
          if (this.Id) {
              this.staff_name = this.userdetails.user.name;
              this.GetList();
          }
          let urlParams1 = new URLSearchParams(window.location.search);
          this.pid = urlParams1.get("pid");
          this.type = urlParams1.get("type");
          if (this.pid) {
              this.getdetails();
          }
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

        async getCity() {
              const headers = {
                  Authorization: "Bearer " + this.userdetails.access_token,
                  Accept: "application/json",
                  "Content-Type": "application/json",
              };
              const response = await this.$axios.post(
                  "address/" + this.state_id + "/getCityList", {
                      headers
                  }
              );
              if (response.data.code == 200 || response.data.code == "200") {
                  this.GCityList = response.data.list;
                  this.GPostCodeList = [];
              } else {
                  this.GCityList = [];
                  this.GPostCodeList = [];
              }
          },

          async getPostcode() {
              const headers = {
                  Accept: "application/json",
                  "Content-Type": "application/json",
              };
              const response = await this.$axios.post(
                  "address/" + this.city_id + "/getPostcodeListById", {
                      headers
                  }
              );
              if (response.data.code == 200 || response.data.code == "200") {
                  this.GPostCodeList= response.data.list;
              } else {
                  this.GPostCodeList = [];
              }

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

          async onCreateEvent() {
            var jobSDESCRIPTION = [];
              this.$swal.fire({
                  title: 'Do you want to save as draft?',
                  showCancelButton: true,
                  confirmButtonText: 'Save',
              }).then(async (result) => {
                  if (result.isConfirmed) {
                      var jobSPECIFICATION = [];
                      var jobSDESCRIPTION = [];
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
                      $("table#jobspecification > tbody > tr").each(function (i) {
                          var obj = {};
                          var answer = "";
                          obj.questions = $("td #question", this).text();
                          //$('#Renewcheck').is(':checked')
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
                          if (i == 4) {
                              if (
                                  $('td input[type="checkbox"].five_' + i).is(":checked") == true
                              ) {
                                  if (answer) {
                                      answer =
                                          answer +
                                          "," +
                                          $('td input[type="checkbox"].five_' + i, this).val();
                                  } else {
                                      answer = $('td input[type="checkbox"].five_' + i, this).val();
                                  }
                              }
                          }
                          if (i == 15) {
                              if (
                                  $('td input[type="checkbox"].five_' + i).is(":checked") == true
                              ) {
                                  if (answer) {
                                      answer =
                                          answer +
                                          "," +
                                          $('td input[type="checkbox"].five_' + i, this).val();
                                  } else {
                                      answer = $('td input[type="checkbox"].five_' + i, this).val();
                                  }
                              }
                              if (
                                  $('td input[type="checkbox"].six_' + i).is(":checked") == true
                              ) {
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
                          }

                          obj.answer = answer;
                          obj.comments = $("td textarea.comment", this).val();
                          if (i == 15) {
                              if (
                                  $('td input[type="checkbox"].five_' + i).is(":checked") == true
                              ) {
                                  if (answer) {
                                      answer =
                                          answer +
                                          "," +
                                          $('td input[type="checkbox"].five_' + i, this).val();
                                  } else {
                                      answer = $('td input[type="checkbox"].five_' + i, this).val();
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
                                  $('td input[type="text"].threecomment', this).val(); +
                              "," + $('td input[type="text"].fourcomment', this).val(); +
                              "," + $('td input[type="text"].fivecomment', this).val(); +
                              "," + $('td input[type="text"].sixcomment', this).val(); +
                              "," + $('td input[type="text"].sevencomment', this).val(); +
                              "," + $('td input[type="text"].eightcomment', this).val();
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
                          this.loader = true;
                          const headers = {
                              Authorization: "Bearer " + this.userdetails.access_token,
                              Accept: "application/json",
                              "Content-Type": "application/json",
                          };
                          const response = await this.$axios.post(
                              "work-analysis/add", {
                                  added_by: this.userdetails.user.id,
                                  patient_id: this.Id,
                                  company_name: this.company_name,
                                  company_address1: this.company_address1,
                                  company_address2: this.company_address2,
                                  company_address3: this.company_address3,
                                  state_id: this.state_id,
                                  city_id: this.postcode_id, //city share the same id with postcode
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
                                  complexity_services: this.complexity_services_id,
                                  outcome: this.outcome_id,
                                  medication_des: this.medication_des,
                                  jobs: jobSDESCRIPTION,
                                  job_specification: jobSPECIFICATION,
                                  appId: this.appId,
                                  status: "0",
                                  id: this.pid,


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
                          this.resetmodel();
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
                      var jobSPECIFICATION = [];
                      var jobSDESCRIPTION = [];
                      $("table#jobspecification > tbody > tr").each(function (i) {
                          var obj = {};
                          var answer = "";
                          obj.questions = $("td #question", this).text();
                          //$('#Renewcheck').is(':checked')
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
                          if (i == 4) {
                              if (
                                  $('td input[type="checkbox"].five_' + i).is(":checked") == true
                              ) {
                                  if (answer) {
                                      answer =
                                          answer +
                                          "," +
                                          $('td input[type="checkbox"].five_' + i, this).val();
                                  } else {
                                      answer = $('td input[type="checkbox"].five_' + i, this).val();
                                  }
                              }
                          }
                          if (i == 15) {
                              if (
                                  $('td input[type="checkbox"].five_' + i).is(":checked") == true
                              ) {
                                  if (answer) {
                                      answer =
                                          answer +
                                          "," +
                                          $('td input[type="checkbox"].five_' + i, this).val();
                                  } else {
                                      answer = $('td input[type="checkbox"].five_' + i, this).val();
                                  }
                              }
                              if (
                                  $('td input[type="checkbox"].six_' + i).is(":checked") == true
                              ) {
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
                          }

                          obj.answer = answer;
                          obj.comments = $("td textarea.comment", this).val();
                          if (i == 15) {
                              if (
                                  $('td input[type="checkbox"].five_' + i).is(":checked") == true
                              ) {
                                  if (answer) {
                                      answer =
                                          answer +
                                          "," +
                                          $('td input[type="checkbox"].five_' + i, this).val();
                                  } else {
                                      answer = $('td input[type="checkbox"].five_' + i, this).val();
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
                                  $('td input[type="text"].threecomment', this).val(); +
                              "," + $('td input[type="text"].fourcomment', this).val(); +
                              "," + $('td input[type="text"].fivecomment', this).val(); +
                              "," + $('td input[type="text"].sixcomment', this).val(); +
                              "," + $('td input[type="text"].sevencomment', this).val(); +
                              "," + $('td input[type="text"].eightcomment', this).val();
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
                      console.log("services", this.category_services);
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
                          // if (!this.medication_des) {
                          //   this.errorList.push("Medication is required");
                          // }
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
                              // this.medication_des &&
                              this.validate
                          ) {
                              this.loader = true;
                              const headers = {
                                  Authorization: "Bearer " + this.userdetails.access_token,
                                  Accept: "application/json",
                                  "Content-Type": "application/json",
                              };
                              const response = await this.$axios.post(
                                  "work-analysis/add", {
                                      added_by: this.userdetails.user.id,
                                      patient_id: this.Id,
                                      company_name: this.company_name,
                                      company_address1: this.company_address1,
                                      company_address2: this.company_address2,
                                      company_address3: this.company_address3,
                                      state_id: this.state_id,
                                      city_id: this.postcode_id, //city share the same id with postcode
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
                                      complexity_services: this.complexity_services_id,
                                      outcome: this.outcome_id,
                                      medication_des: this.medication_des,
                                      jobs: jobSDESCRIPTION,
                                      job_specification: jobSPECIFICATION,
                                      appId: this.appId,
                                      status: "1",
                                      id:this.pid,


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
                  this.codelistadditional = response3.data.list;
              } else {
                  this.codelist = [];
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
              const response7 = await this.$axios.get("address/list", {
                  headers,
              });
              console.log('my stat33',response7.data);
              if (response7.data.code == 200 || response7.data.code == "200") {
                  this.GStateList = response7.data.list;
                  // this.GCityList = [];
                  // this.GPostCodeList = [];
              } else {
                  this.GStateList = [];
                  // this.GCityList = [];
                  // this.GPostCodeList = [];
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

          async getCityList(event) {
              const headers = {
                  Authorization: "Bearer " + this.userdetails.access_token,
                  Accept: "application/json",
                  "Content-Type": "application/json",
              };
              const response = await this.$axios.post(
                  "address/" + event.target.value + "/getCityList", {
                      headers
                  }
              );
              if (response.data.code == 200 || response.data.code == "200") {
                  this.GCityList = response.data.list;
                  this.GPostCodeList = [];
              } else {
                  this.GCityList = [];
                  this.GPostCodeList = [];
              }

          },

          resetmodel() {
              this.location_services_id = 0;
              this.type_diagnosis_id = 0;
              this.category_services = "";
              this.code_id = 0;
              this.sub_code_id = 0;
              this.complexity_services_id = 0;
              this.outcome_id = 0;
              this.medication_des = "";
              this.services_id = 0;
              this.serviceid = 0;
          },

          async getPostcodeList(event) {
              const headers = {
                  Accept: "application/json",
                  "Content-Type": "application/json",
              };
              const response = await this.$axios.post(
                  "address/" + event.target.value + "/getPostcodeListById", {
                      headers
                  }
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
          async getdetails() {
              const headers = {
                  Authorization: "Bearer " + this.userdetails.access_token,
                  Accept: "application/json",
                  "Content-Type": "application/json",
              };
              const response = await this.$axios.post(
                  "/patient-appointment-details/fetchViewHistoryListDetails", {
                      id: this.pid,
                      type: "WorkAnalysisForm",
                  }, {
                      headers
                  }
              );
              if (response.data.code == 200) {
                  //alert(response.data.Data[0].city_name.city_name);

                if(response.data.Data[0].state_id != null){
                  this.state_id = response.data.Data[0].state_id;
                  this.getCity();
                  }

                if (response.data.Data[0].city_id != "" || response.data.Data[0].city_id != null) {
                      this.getCity();
                      this.city_id = response.data.Data[0].city_name.city_name
                      this.getPostcode();

                    }
                if(response.data.Data[0].postcode_id != null){
                      this.postcode_id = response.data.Data[0].postcode_id;
                      this.getPostcode();
                    }

                  this.Id = response.data.Data[0].patient_id;
                  this.company_name = response.data.Data[0].company_name;
                  this.company_address1 = response.data.Data[0].company_address1;
                  this.company_address2 = response.data.Data[0].company_address2;
                  this.company_address3 = response.data.Data[0].company_address3;

                  this.supervisor_name = response.data.Data[0].supervisor_name;
                  this.email = response.data.Data[0].email;
                  this.position = response.data.Data[0].position;
                  this.client_name = response.data.Data[0].client_name;
                  this.job_position = response.data.Data[0].job_position;
                  this.current_wage = response.data.Data[0].current_wage;
                  this.wage_specify = response.data.Data[0].wage_specify;
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
                  this.services_id = response.data.Data[0].services_id;
                  this.code_id = response.data.Data[0].code_id;
                  this.complexity_services_id =
                      response.data.Data[0].complexity_services;
                  this.outcome_id = response.data.Data[0].outcome;
                  this.medication_des = response.data.Data[0].medication_des;
                  this.additional_code_id = response.data.Data[0].additional_code_id;
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

                  if (response.data.Data[0].jobs) {
                      for (let i = 0; i < response.data.Data[0].jobs[0].length; i++) {
                          if (response.data.Data[0].jobs[0][i].answer == "A. Need to work on weekend") {
                              this.work_schedule_A = response.data.Data[0].jobs[0][i].answer;
                          } else if (response.data.Data[0].jobs[0][i].answer == "A. Need to work on weekend") {
                              this.work_schedule_A = response.data.Data[0].jobs[0][i].answer;
                          };

                          if (response.data.Data[0].jobs[0][i].answer == "B. Night shift only?") {
                              this.work_schedule_B = response.data.Data[0].jobs[0][i].answer;
                          }else if (response.data.Data[0].jobs[0][i].answer == "B. Night shift only ?") {
                              this.work_schedule_B = response.data.Data[0].jobs[0][i].answer;
                          };
                          if (response.data.Data[0].jobs[0][i].answer == "C. Part-time?") {
                              this.work_schedule_C = response.data.Data[0].jobs[0][i].answer;
                          } else if (response.data.Data[0].jobs[0][i].answer == "C. Part-time") {
                              this.work_schedule_C = response.data.Data[0].jobs[0][i].answer;
                          };
                          if (response.data.Data[0].jobs[0][i].answer == "D. Full time?") {
                              this.work_schedule_D = response.data.Data[0].jobs[0][i].answer;
                          } else if (response.data.Data[0].jobs[0][i].answer == "D. Full time ?") {
                              this.work_schedule_D = response.data.Data[0].jobs[0][i].answer;
                          };
                      }

                      for (let i = 0; i < response.data.Data[0].jobs[1].length; i++) {
                          if (response.data.Data[0].jobs[1][i].answer == "A. Public transport") {
                              this.transport_to_workplace_A = response.data.Data[0].jobs[1][i].answer;
                          } else if (response.data.Data[0].jobs[1][i].answer == "A. Public transport") {
                              this.transport_to_workplace_A = response.data.Data[0].jobs[1][i].answer;
                          };
                          if (response.data.Data[0].jobs[1][i].answer == "B. Own transport if yes mention type?") {
                              this.transport_to_workplace_B = response.data.Data[0].jobs[1][i].answer;
                          }else
                          if (response.data.Data[0].jobs[1][i].answer == "B. Own transport. if yes mention type ?") {
                              this.transport_to_workplace_B = response.data.Data[0].jobs[1][i].answer;
                          };
                          if (response.data.Data[0].jobs[1][i].answer == "C. Company Transport") {
                              this.transport_to_workplace_C = response.data.Data[0].jobs[1][i].answer;
                          } else if (response.data.Data[0].jobs[1][i].answer == "C. Company transport") {
                              this.transport_to_workplace_C = response.data.Data[0].jobs[1][i].answer;
                          };
                      }

                      for (let i = 0; i < response.data.Data[0].jobs[2].length; i++) {
                          if (response.data.Data[0].jobs[2][i].answer == "A. Limited (5kg)") {
                              this.pgwa_A = response.data.Data[0].jobs[2][i].answer;
                          } else if (response.data.Data[0].jobs[2][i].answer == "A. Limited ( < 5kg )") {
                              this.pgwa_A = response.data.Data[0].jobs[2][i].answer;
                          };
                          if (response.data.Data[0].jobs[2][i].answer == "B. Light (5-10kg)") {
                              this.pgwa_B = response.data.Data[0].jobs[2][i].answer;
                          } else if (response.data.Data[0].jobs[2][i].answer == "B. Light ( 5 - 10kg )") {
                              this.pgwa_B = response.data.Data[0].jobs[2][i].answer;
                          };
                          if (response.data.Data[0].jobs[2][i].answer == "C. Moderate (10-20kg)") {
                              this.pgwa_C = response.data.Data[0].jobs[2][i].answer;
                          }else if (response.data.Data[0].jobs[2][i].answer == "C. Moderate ( 10-20kg )") {
                              this.pgwa_C = response.data.Data[0].jobs[2][i].answer;
                          };
                          if (response.data.Data[0].jobs[2][i].answer == "D. Heavy (>20kg)") {
                              this.pgwa_D = response.data.Data[0].jobs[2][i].answer;
                          } else if (response.data.Data[0].jobs[2][i].answer == "C. Heavy ( >20kg )") {
                              this.pgwa_D = response.data.Data[0].jobs[2][i].answer;
                          };
                      }

                      for (let i = 0; i < response.data.Data[0].jobs[3].length; i++) {
                          if (response.data.Data[0].jobs[3][i].answer == "A. Less than 2 hours") {
                              this.work_tolerance_A = response.data.Data[0].jobs[3][i].answer;
                          } else if (response.data.Data[0].jobs[3][i].answer == "A. Less than 2 hours") {
                              this.work_tolerance_A = response.data.Data[0].jobs[3][i].answer;
                          };
                          if (response.data.Data[0].jobs[3][i].answer == "B. 2-3 hours") {
                              this.work_tolerance_B = response.data.Data[0].jobs[3][i].answer;
                          } else if (response.data.Data[0].jobs[3][i].answer == "B. 2-3 hours") {
                              this.work_tolerance_B = response.data.Data[0].jobs[3][i].answer;
                          };
                          if (response.data.Data[0].jobs[3][i].answer == "C. 3-4 hours") {
                              this.work_tolerance_C = response.data.Data[0].jobs[3][i].answer;
                          } else if (response.data.Data[0].jobs[3][i].answer == "C. 3-4 hours") {
                              this.work_tolerance_C = response.data.Data[0].jobs[3][i].answer;
                          };
                          if (response.data.Data[0].jobs[3][i].answer == "D. More than 4 hours") {
                              this.work_tolerance_D = response.data.Data[0].jobs[3][i].answer;
                          } else if (response.data.Data[0].jobs[3][i].answer == "C. More than 4 hours") {
                              this.work_tolerance_D = response.data.Data[0].jobs[3][i].answer;
                          };
                      }

                      for (let i = 0; i < response.data.Data[0].jobs[4].length; i++) {
                          if (response.data.Data[0].jobs[4][i].answer == "A. Small place") {
                              this.work_area_A = response.data.Data[0].jobs[4][i].answer;
                          } else if (response.data.Data[0].jobs[4][i].answer == "A. Small place") {
                              this.work_area_A = response.data.Data[0].jobs[4][i].answer;
                          };
                          if (response.data.Data[0].jobs[4][i].answer == "B. One room") {
                              this.work_area_B = response.data.Data[0].jobs[4][i].answer;
                          } else if (response.data.Data[0].jobs[4][i].answer == "B. One room") {
                              this.work_area_B = response.data.Data[0].jobs[4][i].answer;
                          };
                          if (response.data.Data[0].jobs[4][i].answer == "C. Few rooms") {
                              this.work_area_C = response.data.Data[0].jobs[4][i].answer;
                          } else if (response.data.Data[0].jobs[4][i].answer == "C. Few rooms") {
                              this.work_area_C = response.data.Data[0].jobs[4][i].answer;
                          };
                          if (response.data.Data[0].jobs[4][i].answer == "D. Big building") {
                              this.work_area_D = response.data.Data[0].jobs[4][i].answer;
                          } else if (response.data.Data[0].jobs[4][i].answer == "D. Big building") {
                              this.work_area_D = response.data.Data[0].jobs[4][i].answer;
                          };
                          if (response.data.Data[0].jobs[4][i].answer == "E. Building and ground floor") {
                              this.work_area_E = response.data.Data[0].jobs[4][i].answer;
                          } else if (response.data.Data[0].jobs[4][i].answer == "E. Building and ground floor") {
                              this.work_area_E = response.data.Data[0].jobs[4][i].answer;
                          };
                      }

                      for (let i = 0; i < response.data.Data[0].jobs[5].length; i++) {
                          if (response.data.Data[0].jobs[5][i].answer == "A. Slow") {
                              this.work_speed_A = response.data.Data[0].jobs[5][i].answer;
                          } else if (response.data.Data[0].jobs[5][i].answer == "A. Slow") {
                              this.work_speed_A = response.data.Data[0].jobs[5][i].answer;
                          };
                          if (response.data.Data[0].jobs[5][i].answer == "B. Mild") {
                              this.work_speed_B = response.data.Data[0].jobs[5][i].answer;
                          } else if (response.data.Data[0].jobs[5][i].answer == "B. Mild") {
                              this.work_speed_B = response.data.Data[0].jobs[5][i].answer;
                          };
                          if (response.data.Data[0].jobs[5][i].answer == "C. Moderate") {
                              this.work_speed_C = response.data.Data[0].jobs[5][i].answer;
                          } else if (response.data.Data[0].jobs[5][i].answer == "C. Moderate") {
                              this.work_speed_C = response.data.Data[0].jobs[5][i].answer;
                          };
                          if (response.data.Data[0].jobs[5][i].answer == "D. Fast") {
                              this.work_speed_D = response.data.Data[0].jobs[5][i].answer;
                          } else if (response.data.Data[0].jobs[5][i].answer == "D. Fast") {
                              this.work_speed_D = response.data.Data[0].jobs[5][i].answer;
                          };
                      }

                      for (let i = 0; i < response.data.Data[0].jobs[6].length; i++) {
                          if (response.data.Data[0].jobs[6][i].answer == "A. Casual") {
                              this.appearance_A = response.data.Data[0].jobs[6][i].answer;
                          } else if (response.data.Data[0].jobs[6][i].answer == "A. Casual") {
                              this.appearance_A = response.data.Data[0].jobs[6][i].answer;
                          };
                          if (response.data.Data[0].jobs[6][i].answer == "B. Clean") {
                              this.appearance_B = response.data.Data[0].jobs[6][i].answer;
                          } else if (response.data.Data[0].jobs[6][i].answer == "B. Clean") {
                              this.appearance_B = response.data.Data[0].jobs[6][i].answer;
                          };
                          if (response.data.Data[0].jobs[6][i].answer == "C. Clean and well kempt") {
                              this.appearance_C = response.data.Data[0].jobs[6][i].answer;
                          } else if (response.data.Data[0].jobs[6][i].answer == "C. Clean and well kempt") {
                              this.appearance_C = response.data.Data[0].jobs[6][i].answer;
                          };
                          if (response.data.Data[0].jobs[6][i].answer == "D. Well kempt") {
                              this.appearance_D = response.data.Data[0].jobs[6][i].answer;
                          } else if (response.data.Data[0].jobs[6][i].answer == "D. Well kempt") {
                              this.appearance_D = response.data.Data[0].jobs[6][i].answer;
                          };
                      }

                      for (let i = 0; i < response.data.Data[0].jobs[7].length; i++) {
                          if (response.data.Data[0].jobs[7][i].answer == "A. Not required/minimal") {
                              this.communication_skill_A = response.data.Data[0].jobs[7][i].answer;
                          } else if (response.data.Data[0].jobs[7][i].answer == "A. Not required/minimal") {
                              this.communication_skill_A = response.data.Data[0].jobs[7][i].answer;
                          };
                          if (response.data.Data[0].jobs[7][i].answer == "B. When needed") {
                              this.communication_skill_B = response.data.Data[0].jobs[7][i].answer;
                          } else if (response.data.Data[0].jobs[7][i].answer == "B. When needed") {
                              this.communication_skill_B = response.data.Data[0].jobs[7][i].answer;
                          };
                          if (response.data.Data[0].jobs[7][i].answer == "C. Average") {
                              this.communication_skill_C = response.data.Data[0].jobs[7][i].answer;
                          } else if (response.data.Data[0].jobs[7][i].answer == "C. Average") {
                              this.communication_skill_C = response.data.Data[0].jobs[7][i].answer;
                          };
                          if (response.data.Data[0].jobs[7][i].answer == "D. Good") {
                              this.communication_skill_D = response.data.Data[0].jobs[7][i].answer;
                          } else if (response.data.Data[0].jobs[7][i].answer == "D. Good") {
                              this.communication_skill_D = response.data.Data[0].jobs[7][i].answer;
                          };

                      }

                      for (let i = 0; i < response.data.Data[0].jobs[8].length; i++) {
                          if (response.data.Data[0].jobs[8][i].answer == "A. Not required/minimal") {
                              this.social_interaction_A = response.data.Data[0].jobs[8][i].answer;
                          }else if (response.data.Data[0].jobs[8][i].answer == "A. Not required / minimal") {
                              this.social_interaction_A = response.data.Data[0].jobs[8][i].answer;
                          };
                          if (response.data.Data[0].jobs[8][i].answer == "B. When needed") {
                              this.social_interaction_B = response.data.Data[0].jobs[8][i].answer;
                          } else if (response.data.Data[0].jobs[8][i].answer == "B. When needed") {
                              this.social_interaction_B = response.data.Data[0].jobs[8][i].answer;
                          };
                          if (response.data.Data[0].jobs[8][i].answer == "C. Average") {
                              this.social_interaction_C = response.data.Data[0].jobs[8][i].answer;
                          } else if (response.data.Data[0].jobs[8][i].answer == "C. Average") {
                              this.social_interaction_C = response.data.Data[0].jobs[8][i].answer;
                          };
                          if (response.data.Data[0].jobs[8][i].answer == "D. Good") {
                              this.social_interaction_D = response.data.Data[0].jobs[8][i].answer;
                          } else if (response.data.Data[0].jobs[8][i].answer == "D. Good") {
                              this.social_interaction_D = response.data.Data[0].jobs[8][i].answer;
                          };
                      }

                      for (let i = 0; i < response.data.Data[0].jobs[9].length; i++) {
                          if (response.data.Data[0].jobs[9][i].answer == "A. Minimal") {
                              this.concentration_A = response.data.Data[0].jobs[9][i].answer;
                          } else if (response.data.Data[0].jobs[9][i].answer == "A. Minimal") {
                              this.concentration_A = response.data.Data[0].jobs[9][i].answer;
                          };
                          if (response.data.Data[0].jobs[9][i].answer == "B. Fair") {
                              this.concentration_B = response.data.Data[0].jobs[9][i].answer;
                          } else if (response.data.Data[0].jobs[9][i].answer == "B. Fair") {
                              this.concentration_B = response.data.Data[0].jobs[9][i].answer;
                          };
                          if (response.data.Data[0].jobs[9][i].answer == "C. Average") {
                              this.concentration_C = response.data.Data[0].jobs[9][i].answer;
                          } else if (response.data.Data[0].jobs[9][i].answer == "C. Average") {
                              this.concentration_C = response.data.Data[0].jobs[9][i].answer;
                          };
                          if (response.data.Data[0].jobs[9][i].answer == "D. Good") {
                              this.concentration_D = response.data.Data[0].jobs[9][i].answer;
                          } else if (response.data.Data[0].jobs[9][i].answer == "D. Good") {
                              this.concentration_D = response.data.Data[0].jobs[9][i].answer;
                          };
                      }

                      for (let i = 0; i < response.data.Data[0].jobs[10].length; i++) {
                          if (response.data.Data[0].jobs[10][i].answer == "A. One task at a time") {
                              this.work_demand_A = response.data.Data[0].jobs[10][i].answer;
                          } else if (response.data.Data[0].jobs[10][i].answer == "A. One task at a time") {
                              this.work_demand_A = response.data.Data[0].jobs[10][i].answer;
                          };
                          if (response.data.Data[0].jobs[10][i].answer == "B. Few task (2-3)") {
                              this.work_demand_B = response.data.Data[0].jobs[10][i].answer;
                          } else if (response.data.Data[0].jobs[10][i].answer == "B. Few task ( 2-3 )") {
                              this.work_demand_B = response.data.Data[0].jobs[10][i].answer;
                          };
                          if (response.data.Data[0].jobs[10][i].answer == "C. Average (4-6)") {
                              this.work_demand_C = response.data.Data[0].jobs[10][i].answer;
                          } else if (response.data.Data[0].jobs[10][i].answer == "C. Average ( 4-6 )") {
                              this.work_demand_C = response.data.Data[0].jobs[10][i].answer;
                          };
                          if (response.data.Data[0].jobs[10][i].answer == "D. Many task (>7 )") {
                              this.work_demand_D = response.data.Data[0].jobs[10][i].answer;
                          } else if (response.data.Data[0].jobs[10][i].answer == "D. Many task ( > 7 )") {
                              this.work_demand_D = response.data.Data[0].jobs[10][i].answer;
                          };
                      }

                      for (let i = 0; i < response.data.Data[0].jobs[11].length; i++) {
                          if (response.data.Data[0].jobs[11][i].answer == "A. Need encouragement") {
                              this.motivation_A = response.data.Data[0].jobs[11][i].answer;
                          } else if (response.data.Data[0].jobs[11][i].answer == "A. Need encouragement") {
                              this.motivation_A = response.data.Data[0].jobs[11][i].answer;
                          };
                          if (response.data.Data[0].jobs[11][i].answer == "B. Proactive") {
                              this.motivation_B = response.data.Data[0].jobs[11][i].answer;
                          } else if (response.data.Data[0].jobs[11][i].answer == "B. Practive") {
                              this.motivation_B = response.data.Data[0].jobs[11][i].answer;
                          };
                          if (response.data.Data[0].jobs[11][i].answer == "C. Good support") {
                              this.motivation_C = response.data.Data[0].jobs[11][i].answer;
                          } else if (response.data.Data[0].jobs[11][i].answer == "C. Good support") {
                              this.motivation_C = response.data.Data[0].jobs[11][i].answer;
                          };
                      }

                      for (let i = 0; i < response.data.Data[0].jobs[12].length; i++) {
                          if (response.data.Data[0].jobs[12][i].answer == "A. Frequent (>7)") {
                              this.flexibility_A = response.data.Data[0].jobs[12][i].answer;
                          } else if (response.data.Data[0].jobs[12][i].answer == "A. Frequant ( > 7 )") {
                              this.flexibility_A = response.data.Data[0].jobs[12][i].answer;
                          };
                          if (response.data.Data[0].jobs[12][i].answer == "B. Average (4-6)") {
                              this.flexibility_B = response.data.Data[0].jobs[12][i].answer;
                          } else if (response.data.Data[0].jobs[12][i].answer == "B. Average ( 4-6 )") {
                              this.flexibility_B = response.data.Data[0].jobs[12][i].answer;
                          };
                          if (response.data.Data[0].jobs[12][i].answer == "C. Minimal (2-3)") {
                              this.flexibility_C = response.data.Data[0].jobs[12][i].answer;
                          } else if (response.data.Data[0].jobs[12][i].answer == "C. Minimal ( 2-3 )") {
                              this.flexibility_C = response.data.Data[0].jobs[12][i].answer;
                          };
                      }

                      for (let i = 0; i < response.data.Data[0].jobs[13].length; i++) {
                          if (response.data.Data[0].jobs[13][i].answer == "A. Not required") {
                              this.ability_A = response.data.Data[0].jobs[13][i].answer;
                          } else if (response.data.Data[0].jobs[13][i].answer == "A. Not required") {
                              this.ability_A = response.data.Data[0].jobs[13][i].answer;
                          };
                          if (response.data.Data[0].jobs[13][i].answer == "B. Recognize symbol") {
                              this.ability_B = response.data.Data[0].jobs[13][i].answer;
                          } else if (response.data.Data[0].jobs[13][i].answer == "B. Recognize symbol") {
                              this.ability_B = response.data.Data[0].jobs[13][i].answer;
                          };
                          if (response.data.Data[0].jobs[13][i].answer == "C. Simple word") {
                              this.ability_C = response.data.Data[0].jobs[13][i].answer;
                          } else if (response.data.Data[0].jobs[13][i].answer == "C. Simple word") {
                              this.ability_C = response.data.Data[0].jobs[13][i].answer;
                          };
                          if (response.data.Data[0].jobs[13][i].answer == "D. Read fluently") {
                              this.ability_D = response.data.Data[0].jobs[13][i].answer;
                          } else if (response.data.Data[0].jobs[13][i].answer == "D. Read fluently") {
                              this.ability_D = response.data.Data[0].jobs[13][i].answer;
                          };
                      }

                      for (let i = 0; i < response.data.Data[0].jobs[14].length; i++) {
                          if (response.data.Data[0].jobs[14][i].answer == "A. Not required") {
                              this.calculate_A = response.data.Data[0].jobs[14][i].answer;
                          } else if (response.data.Data[0].jobs[14][i].answer == "A. Not required") {
                              this.calculate_A = response.data.Data[0].jobs[14][i].answer;
                          };
                          if (response.data.Data[0].jobs[14][i].answer == "B. Use calculator") {
                              this.calculate_B = response.data.Data[0].jobs[14][i].answer;
                          } else if (response.data.Data[0].jobs[14][i].answer == "B. Use calculator") {
                              this.calculate_B = response.data.Data[0].jobs[14][i].answer;
                          };
                          if (response.data.Data[0].jobs[14][i].answer == "C. Simple maths without calculator") {
                              this.calculate_C = response.data.Data[0].jobs[14][i].answer;
                          } else if (response.data.Data[0].jobs[14][i].answer == "C. Simple math without calculator") {
                              this.calculate_C = response.data.Data[0].jobs[14][i].answer;
                          };
                          if (response.data.Data[0].jobs[14][i].answer == "D. Difficult maths") {
                              this.calculate_D = response.data.Data[0].jobs[14][i].answer;
                          } else if (response.data.Data[0].jobs[14][i].answer == "D. Difficult maths") {
                              this.calculate_D = response.data.Data[0].jobs[14][i].answer;
                          };

                      }

                      for (let i = 0; i < response.data.Data[0].jobs[15].length; i++) {
                          if (response.data.Data[0].jobs[15][i].answer == "0 = Nil") {
                              this.benefits_0 = response.data.Data[0].jobs[15][i].answer;
                          } else if (response.data.Data[0].jobs[15][i].answer == "0 = Nil") {
                              this.benefits_0 = response.data.Data[0].jobs[15][i].answer;
                          };
                          if (response.data.Data[0].jobs[15][i].answer == "1 = Mc") {
                              this.benefits_1 = response.data.Data[0].jobs[15][i].answer;
                          } else if (response.data.Data[0].jobs[15][i].answer == "1 = Mc") {
                              this.benefits_1 = response.data.Data[0].jobs[15][i].answer;
                          };
                          if (response.data.Data[0].jobs[15][i].answer == "2 = Medical Benefit") {
                              this.benefits_2 = response.data.Data[0].jobs[15][i].answer;
                          } else if (response.data.Data[0].jobs[15][i].answer == "2 = Medical Benefit") {
                              this.benefits_2 = response.data.Data[0].jobs[15][i].answer;
                          };
                          if (response.data.Data[0].jobs[15][i].answer == "3 = Annual Leave") {
                              this.benefits_3 = response.data.Data[0].jobs[15][i].answer;
                          } else if (response.data.Data[0].jobs[15][i].answer == "3 = Annual Leave") {
                              this.benefits_3 = response.data.Data[0].jobs[15][i].answer;
                          };
                          if (response.data.Data[0].jobs[15][i].answer == "4 = Dental Benefits") {
                              this.benefits_4 = response.data.Data[0].jobs[15][i].answer;
                          } else if (response.data.Data[0].jobs[15][i].answer == "4 = Dental Benefits") {
                              this.benefits_4 = response.data.Data[0].jobs[15][i].answer;
                          };
                          if (response.data.Data[0].jobs[15][i].answer == "5 = Discount For Employee") {
                              this.benefits_5 = response.data.Data[0].jobs[15][i].answer;
                          } else if (response.data.Data[0].jobs[15][i].answer == "5 = Discount For Employee") {
                              this.benefits_5 = response.data.Data[0].jobs[15][i].answer;
                          };
                          if (response.data.Data[0].jobs[15][i].answer == "6 = Free Food") {
                              this.benefits_6 = response.data.Data[0].jobs[15][i].answer;
                          } else if (response.data.Data[0].jobs[15][i].answer == "6 = Free Food") {
                              this.benefits_6 = response.data.Data[0].jobs[15][i].answer;
                          };
                          if (response.data.Data[0].jobs[15][i].answer == "7 = Others (To Specify)") {
                              this.benefits_7 = response.data.Data[0].jobs[15][i].answer;
                          } else if (response.data.Data[0].jobs[15][i].answer == "7 = Others (To Specify)") {
                              this.benefits_7 = response.data.Data[0].jobs[15][i].answer;
                          };
                      }
                  }

                  this.work_schedule_comment = response.data.Data[0].comment[0].comment;
                  this.transport_to_workplace_comment = response.data.Data[0].comment[1].comment;
                  this.pgwa_comment = response.data.Data[0].comment[2].comment;
                  this.work_tolerance_comment = response.data.Data[0].comment[3].comment;
                  this.work_area_comment = response.data.Data[0].comment[4].comment;
                  this.work_speed_comment = response.data.Data[0].comment[5].comment;
                  this.appearance_comment = response.data.Data[0].comment[6].comment;
                  this.communication_skill_comment = response.data.Data[0].comment[7].comment;
                  this.social_interaction_comment = response.data.Data[0].comment[8].comment;
                  this.concentration_comment = response.data.Data[0].comment[9].comment;
                  this.work_demand_comment = response.data.Data[0].comment[10].comment;
                  this.motivation_comment = response.data.Data[0].comment[11].comment;
                  this.flexibility_comment = response.data.Data[0].comment[12].comment;
                  this.ability_comment = response.data.Data[0].comment[13].comment;
                  this.calculate_comment = response.data.Data[0].comment[14].comment;

                  this.onecomment = response.data.Data[0].comment[15].comment;
                  this.twocomment = response.data.Data[0].comment[15].comment;
                  this.threecomment = response.data.Data[0].comment[15].comment;
                  this.fourcomment = response.data.Data[0].comment[15].comment;
                  this.fivecomment = response.data.Data[0].comment[15].comment;
                  this.sixcomment = response.data.Data[0].comment[15].comment;
                  this.sevencomment = response.data.Data[0].comment[15].comment;
                  this.eightcomment = response.data.Data[0].comment[15].comment;
                  this.jobSDESCRIPTION = response.data.Data[0].jobs_des;


                  this.GetList();

                  const response2 = await this.$axios.post(
                      "address/" + this.city_id + "/getPostcodeListById", {
                          headers
                      }
                  );
                  if (response2.data.code == 200 || response2.data.code == "200") {
                      this.GPostCodeList = response2.data.list;
                  } else {
                      this.GPostCodeList = [];
                  }

                  const response3 = await this.$axios.post(
                      "diagnosis/getIcd9subcodeList", {
                          icd_category_code: this.code_id
                      }, {
                          headers
                      }
                  );
                  if (response3.data.code == 200 || response3.data.code == "200") {
                      this.icdcatcodelist = response3.data.list;
                  } else {
                      this.icdcatcodelist = [];
                  }
                  const response23 = await this.$axios.post(
                        "diagnosis/getIcd9subcodeList", {
                            icd_category_code: this.code_id
                        }, {
                            headers
                        }
                    );
                    if (response23.data.code == 200 || response23.data.code == "200") {
                        this.icdcatcodelist = response23.data.list;

                    } else {
                        this.icdcatcodelist = [];
                    }

                    const response32 = await this.$axios.post(
                      "diagnosis/getIcd9subcodeList", {
                          icd_category_code: this.additional_code_id
                        }, {
                            headers
                        }
                    );
                    if (response32.data.code == 200 || response32.data.code == "200") {
                        this.icdcatcodelistadditional = response32.data.list;

                    } else {
                        this.icdcatcodelistadditional = [];
                    }
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
