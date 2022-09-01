<template>
  <div id="layoutSidenav">
   <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="card mb-4 mt-5">
            <div class="card-header">
              <h4>Volunteer, Outreach, And Networking Application Form</h4>
              <a href="#" class="visibility-h"
                ><i class="far fa-user-edit"></i
              ></a>
            </div>
            <div class="card-body mt-3">
              <p>
                Mentari Encourages The Participation Of Any Individual, Group,
                Or Organization (Government Or Private) To Enhance Service
                Delivery Related To Mental Health. The Information Provided
                Through This Form Will Be Kept Confidential And Will Help Us
                Determine The Most Satisfying Volunteer Or Networking
                Opportunity For You.
              </p>

              <div class="row">
                <div class="col-sm-4">
                  <div class="mb-2">
                    <h5>Individual</h5>
                  </div>
                </div>
              </div>

              <div class="individual notshow-box">
                <div class="row">
                  <div class="col-sm-12">
                    <h4 class="title-h4">Background</h4>
                  </div>
                </div>

                <!-- <form class="form-padding"> -->
                <div class="row mb-3">
                  <label for="" class="col-sm-4 col-form-label"
                    >Name<span>*</span></label
                  >
                  <div class="col-sm-8">
                    <input
                      type="txet"
                      class="form-control"
                      id=""
                      v-model="name"
                    />
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="" class="col-sm-4 col-form-label"
                    >Date Of Birth<span>*</span></label
                  >
                  <div class="col-sm-8">
                    <input
                      type="date"
                      class="form-control"
                      id=""
                      v-model="dob"
                    />
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="" class="col-sm-4 col-form-label"
                    >Email<span>*</span></label
                  >
                  <div class="col-sm-8">
                    <input
                      type="email"
                      class="form-control"
                      id=""
                      v-model="email"
                    />
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="" class="col-sm-4 col-form-label"
                    >Phone Number<span>*</span></label
                  >
                  <div class="col-sm-8">
                    <input
                      type="txet"
                      class="form-control"
                      id=""
                      v-model="phone_number"
                    />
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="" class="col-sm-4 col-form-label">Address</label>
                  <div class="col-sm-8">
                    <input
                      type="txet"
                      class="form-control"
                      id=""
                      v-model="address"
                    />
                    <input
                      type="txet"
                      class="form-control mt-2"
                      id=""
                      v-model="address1"
                    />
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-4 mb-3">
                    <label class="form-label">State<span>*</span></label>
                    <select
                      class="form-select"
                      @change="onCitybind($event)"
                      v-model="state_id"
                    >
                      <option value="0">Please Select</option>
                      <option
                        v-for="state in StateList"
                        v-bind:key="state.id"
                        v-bind:value="state.id"
                      >
                        {{ state.state_name }}
                      </option>
                    </select>
                  </div>
                  <div class="col-md-4 mb-3">
                    <label class="form-label">City<span>*</span></label>
                    <select class="form-select" v-model="city_id">
                      <option value="0">Please Select</option>
                      <option
                        v-for="ctl in CityList"
                        v-bind:key="ctl.postcode_id"
                        v-bind:value="ctl.postcode_id"
                      >
                        {{ ctl.city_name }}
                      </option>
                    </select>
                  </div>
                  <div class="col-md-4 mb-3">
                    <label class="form-label">Postcode<span>*</span></label>
                    <select class="form-select" v-model="postcode_id">
                      <option value="0">Please Select</option>
                      <option
                        v-for="pst in PostCodeList"
                        v-bind:key="pst.postcode_id"
                        v-bind:value="pst.postcode_id"
                      >
                        {{ pst.postcode }}
                      </option>
                    </select>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label class="form-label"
                      >Highest Education<span>*</span></label
                    >
                    <select class="form-select" v-model="education_id">
                      <option value="0">Please Select</option>
                      <option
                        v-for="ed in EducationList"
                        v-bind:key="ed.id"
                        v-bind:value="ed.id"
                      >
                        {{ ed.section_value }}
                      </option>
                    </select>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label class="form-label"
                      >Current Occupation Sector<span>*</span></label
                    >
                    <select class="form-select" v-model="occupation_sector_id">
                      <option value="0">Please Select</option>
                      <option
                        v-for="os in OccupationList"
                        v-bind:key="os.id"
                        v-bind:value="os.id"
                      >
                        {{ os.section_value }}
                      </option>
                    </select>
                  </div>
                </div>

                <div class="row mb-3 mt-2">
                  <label for="" class="col-sm-4 col-form-label">Mentari</label>
                  <div class="col-sm-8">
                    <select class="form-select" v-model="branch_id">
                      <option value="0">Please Select</option>
                      <option
                        v-for="brn in BranchList"
                        v-bind:key="brn.id"
                        v-bind:value="brn.id"
                      >
                        {{ brn.hospital_branch_name }}
                      </option>
                    </select>
                  </div>
                </div>

                <div class="row mb-3 mt-2">
                  <label for="" class="col-sm-4 col-form-label"
                    >Areas of Involvement<span>*</span></label
                  >
                  <div class="col-sm-8">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="involvement"
                        id="volunteerism"
                        v-model="area_of_involvement"
                        value="Volunteerism"
                        @change="OnAreas('individual')"
                      />
                      <label class="form-check-label" for="volunteerism">
                        Volunteerism
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="involvement"
                        id="outreach-project"
                        v-model="area_of_involvement"
                        value="Outreach Project Collaboration"
                        @change="OnAreas('group')"
                      />
                      <label class="form-check-label" for="outreach-project">
                        Outreach Project Collaboration
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="involvement"
                        id="networking"
                        v-model="area_of_involvement"
                        value="Networking Make a Contribution"
                        @change="OnAreas('org')"
                      />
                      <label class="form-check-label" for="networking">
                        Networking Make a Contribution
                      </label>
                    </div>
                  </div>
                </div>

                <div
                  class="areas-involvement"
                  id="volunteerismshow"
                  v-if="area_of_involvement == 'Volunteerism'"
                >
                  <h4 class="title-h4">Volunteerism</h4>

                  <div class="row mb-3 mt-2">
                    <label for="" class="col-sm-4 col-form-label">
                      Does your group have any volunteering experience?<span>*</span></label
                    >
                    <div class="col-sm-8 radio-box">
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="experience"
                          id="experience-yes"
                          value="experience-yes"
                          v-model="is_voluneering_exp"
                          @change="Onvolexp('y')"
                        />
                        <label class="form-check-label" for="experience-yes"
                          >Yes</label
                        >
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="experience"
                          id="experience-no"
                          value="0"
                          v-model="is_voluneering_exp"
                          @change="Onvolexp('n')"
                        />
                        <label class="form-check-label" for="experience-no"
                          >No</label
                        >
                      </div>

                      <!-- hide-div -->
                      <div
                        class="experience-yes experi-box"
                        v-if="volexp == 'y'"
                      >
                        <!-- <div class="mt-3">
                          <textarea
                            class="form-control textarea"
                            rows="3"
                            placeholder="Please describe"
                            v-model="exp_details"
                          ></textarea>
                        </div> -->
                           <table class="note" style="width: 100%" id="volexp1">
              <thead>
                <tr>
                  <th width="100px">YEAR</th>
                  <th>Location</th>
                  <th>Brief Description of Activities</th>
                  <th></th>
                </tr>
              </thead>
              <tbody class="optionBox">
                     <tr class="block" v-for="(exp,index) in expList" :key="index">
                  <td>
                    <input type="text" class="form-control year" v-model="exp.year" name="" />
                  </td>
                  <td>
                    <input type="text" class="form-control location" v-model="exp.location" name=""  />
                  </td>
                  <td>
                    <input type="text" class="form-control activity" v-model="exp.activity" name="" />
                  </td>
                  <td>
                    <a class="add-td"><i class="far fa-plus"></i></a>
                  </td>
                </tr>
              </tbody>
            </table>
                      </div>
                    </div>
                  </div>

                  <div class="row mb-3 mt-2">
                    <label for="" class="col-sm-4 col-form-label">
                     Does your group are mental health professionals?<span>*</span></label
                    >
                    <div class="col-sm-8 professional-box">
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="professional"
                          id="professional-yes"
                          value="professional-yes"
                          v-model="is_mental_health_professional"
                          @change="Onmentalhealth('y')"
                        />
                        <label class="form-check-label" for="professional-yes"
                          >Yes</label
                        >
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="professional"
                          id="professional-no"
                          value="professional-no"
                          v-model="is_mental_health_professional"
                          @change="Onmentalhealth('n')"
                        />
                        <label class="form-check-label" for="professional-no"
                          >No</label
                        >
                      </div>

                      <!-- hide-div -->
                      <div
                        class="professional-yes profess-box"
                        v-if="menhelth == 'y'"
                      >
                        <div class="mt-3">
                          <label for="formFile" class="form-label"
                            >Please Attach Your Latest Resume<span
                              >*</span
                            ></label
                          >
                          <input
                            class="form-control"
                            type="file"
                            id="formFile"
                            @change="selectFile"
                          />
                        </div>

                        <div class="mt-3">
                          <label for="formFile" class="form-label"
                            >Relevant Mentari Service That You Want To Be
                            Involved<span>*</span></label
                          >
                           <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="Consultation/Counselling"
                    id="Consultation/Counselling2" v-model="Consultation"
                   
                  />
                  <label class="form-check-label" for="Consultation/Counselling2">
                    Consultation/Counselling
                  </label>
                </div>
                 
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value="Work-based Rehabilitation"
                              id="Rehabilitation"
                              v-model="work"
                            />
                            <label
                              class="form-check-label"
                              for="Rehabilitation"
                            >
                              Work-based Rehabilitation
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value="Awareness Or Psychoeducation"
                              v-model="awareness"
                              id="Psychoeducation"
                            />
                            <label
                              class="form-check-label"
                              for="Psychoeducation"
                            >
                              Awareness Or Psychoeducation
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value="Recreational Therapy"
                              v-model="recreational"
                              id="Therapy"
                            />
                            <label class="form-check-label" for="Therapy">
                              Recreational Therapy
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value="Others"
                              v-model="other"
                              id="Others"
                            />
                            <label class="form-check-label" for="Others">
                              Others:<input
                                type="text"
                                name=""
                                v-model="Others"
                              />
                            </label>
                          </div>
                        </div>
                      </div>

                      <div
                        class="professional-no profess-box"
                        v-if="menhelth == 'n'"
                      >
                        <div class="mt-3">
                          <label for="formFile" class="form-label"
                            >Relevant Mentari Service That You Want To Be
                            Involved<span>*</span></label
                          >
                          <!-- <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="Consultation/Counselling"
                    id="Consultation/Counselling2" v-model="Consultation"
                   
                  />
                  <label class="form-check-label" for="Consultation/Counselling2">
                    Consultation/Counselling
                  </label>
                </div> -->
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value="Work-based Rehabilitation"
                              id="Rehabilitation1"
                              v-model="work"
                            />
                            <label
                              class="form-check-label"
                              for="Rehabilitation1"
                            >
                              Work-based Rehabilitation
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value="Awareness Or Psychoeducation"
                              id="Psychoeducation1"
                              v-model="awareness"
                            />
                            <label
                              class="form-check-label"
                              for="Psychoeducation1"
                            >
                              Awareness Or Psychoeducation
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value="Recreational Therapy"
                              id="Therapy1"
                              v-model="recreational"
                            />
                            <label class="form-check-label" for="Therapy1">
                              Recreational Therapy
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value="Others"
                              id="Others1"
                              v-model="other"
                            />
                            <label class="form-check-label" for="Others1">
                              Others: <input type="text" name="" v-model="Others" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row mb-3 mt-2">
                    <label for="" class="col-sm-4 col-form-label"
                      >Available Day & Time<span>*</span></label
                    >
                    <div class="col-sm-8">
                      <div class="row">
                        <div class="col-sm-6">
                          <select class="form-select" v-model="available_date">
                            <option value="">Select Day</option>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                          </select>
                        </div>
                        <div class="col-sm-6">
                          <select class="form-select" v-model="available_time">
                            <option value="">Select Time</option>
                            <option value="8:00 AM">8:00 AM</option>
                            <option value="9:00 AM">9:00 AM</option>
                            <option value="10:00 AM">10:00 AM</option>
                            <option value="11:00 AM">11:00 AM</option>
                            <option value="02:00 AM">02:00 PM</option>
                            <option value="03:00 AM">03:00 PM</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- volunteerismshow -->

                <div
                  class="areas-involvement"
                  id="outreach-projectshow"
                  v-if="area_of_involvement == 'Outreach Project Collaboration'"
                >
                  <h4 class="title-h4">Outreach-Project Collaboration</h4>
                  <p>Please Provide a breief project description</p>

                  <div class="row mb-3 mt-2">
                    <label for="" class="col-sm-4 col-form-label"
                      >Project Name</label
                    >
                    <div class="col-sm-8">
                      <input type="text" class="form-control" name="" v-model="project_name" />
                    </div>
                  </div>
                  <!-- row-close -->

                  <div class="row mb-3 mt-2">
                    <label for="" class="col-sm-4 col-form-label"
                      >Project Background</label
                    >
                    <div class="col-sm-8">
                      <textarea
                        class="form-control textarea" v-model="project_background"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                  <!-- row-close -->

                  <div class="row mb-3 mt-2">
                    <label for="" class="col-sm-4 col-form-label"
                      >Project Objectives</label
                    >
                    <div class="col-sm-8">
                      <textarea
                        class="form-control textarea" v-model="project_objectives"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                  <!-- row-close -->

                  <div class="row mb-3 mt-2">
                    <label for="" class="col-sm-4 col-form-label"
                      >Target Audience</label
                    >
                    <div class="col-sm-8">
                      <input type="text" class="form-control" name="" v-model="target_audience" />
                    </div>
                  </div>
                  <!-- row-close -->

                  <div class="row mb-3 mt-2">
                    <label for="" class="col-sm-4 col-form-label"
                      >Number of Participants</label
                    >
                    <div class="col-sm-8">
                      <input type="text" class="form-control" name="" v-model="no_of_paricipants" />
                    </div>
                  </div>
                  <!-- row-close -->

                  <div class="row mb-3 mt-2">
                    <label for="" class="col-sm-4 col-form-label"
                      >Time Frame</label
                    >
                    <div class="col-sm-8">
                      <input type="text" class="form-control" name="" v-model="time_frame" />
                    </div>
                  </div>
                  <!-- row-close -->

                  <div class="row mb-3 mt-2">
                    <label for="" class="col-sm-4 col-form-label"
                      >Estimated Budget (if any)
                    </label>
                    <div class="col-sm-8">
                      <input type="text" class="form-control" name="" v-model="estimated_budget" />
                    </div>
                  </div>
                  <!-- row-close -->

                  <div class="row mb-3 mt-2">
                    <label for="" class="col-sm-4 col-form-label"
                      >Project Scopes</label
                    >
                    <div class="col-sm-8">
                      <textarea
                        class="form-control textarea"
                        rows="3" v-model="project_scopes"
                      ></textarea>
                    </div>
                  </div>
                  <!-- row-close -->

                  <div class="row mb-3 mt-3">
                    <label for="" class="col-sm-4 col-form-label"
                      >Project Location</label
                    >
                    <div class="col-sm-8 project-location-box">
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="project-location"
                          id="project-location-mentari"
                          value="mentari" v-model="project_loaction" @change="Onchangelocation('mentari')"
                        />
                        <label
                          class="form-check-label"
                          for="project-location-mentari"
                          >Mentari</label
                        >
                      </div>

                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="project-location"
                          id="project-location-others"
                          value="project-location-others" v-model="project_loaction" @change="Onchangelocation('project-location-others')"
                        />
                        <label
                          class="form-check-label"
                          for="project-location-others"
                          >Others</label
                        >
                      </div>

                      <!-- hide-div -->
                      <div class="mentari profess-box" v-if="projectlocation=='mentari'">
                        <div class="mt-3">
                          <select class="form-select" v-model="project_branch">
                  <option value="">Please Select</option>
            <option
              v-for="brn in BranchList"
              v-bind:key="brn.hospital_branch_name"
              v-bind:value="brn.hospital_branch_name"
            >
              {{ brn.hospital_branch_name }}
            </option>
                </select>
                        </div>
                      </div>

                      <div class="project-location-others profess-box" v-if="projectlocation!='mentari'">
                        <div class="mt-3">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Please Specify" v-model="other_loaction"
                            name=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- row-close -->

                  <div class="row mb-3 mt-2">
                    <label for="" class="col-sm-4 col-form-label"
                      >How do you want to measure the target outcome?
                    </label>
                    <div class="col-sm-8">
                      <textarea
                        class="form-control textarea" v-model="target_outcome"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                  <!-- row-close -->

                  <div class="row mb-3 mt-2">
                    <label for="" class="col-sm-4 col-form-label"
                      >Any planned follow up projects?</label
                    >
                    <div class="col-sm-8">
                      <textarea
                        class="form-control textarea" v-model="followup_projects"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                   <div class="row mb-3 mt-2">
          <label for="" class="col-sm-4 col-form-label"
            >Relevant Mentari Service That You Want To Be Involved<span
              >*</span
            ></label
          >
          <div class="col-sm-8">
            <!-- <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="Consultation/Counselling"
                    id="Consultation/Counselling2" v-model="Consultation"
                   
                  />
                  <label class="form-check-label" for="Consultation/Counselling2">
                    Consultation/Counselling
                  </label>
                </div> -->
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="Work-based Rehabilitation" 
                id="Rehabilitation2" v-model="work"
              />
              <label class="form-check-label" for="Rehabilitation2">
                Work-based Rehabilitation
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="Awareness Or Psychoeducation" v-model="awareness"
                id="Psychoeducation2" 
              />
              <label class="form-check-label" for="Psychoeducation2">
                Awareness Or Psychoeducation
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="Recreational Therapy"  v-model="recreational"
                id="Therapy2" 
              />
              <label class="form-check-label" for="Therapy2">
                Recreational Therapy
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="Others" 
                id="Others2"  v-model="other"
              />
              <label class="form-check-label" for="Others2">
                Others: <input type="text" name=""  v-model="Others"/>
              </label>
            </div>
          </div>
        </div>
                  <!-- row-close -->
                </div>

                <!-- outreach-projectshow -->

                <div
                  class="areas-involvement"
                  id="networkingshow"
                  v-if="area_of_involvement == 'Networking Make a Contribution'"
                >
                  <h4 class="title-h4">Networking-Make a Contribution</h4>
                  <p>
                    We encourage any participation from the community members in
                    line with MENTARI activities. For example, craft materials,
                    cooking materials, equipment for rehabilitation activities,
                    coupons for patients or even funding (via our Tax Exempted
                    Trust Account)
                  </p>

                  <div class="row mb-3 mt-2">
                    <label for="" class="col-sm-4 col-form-label"
                      >How would you like contribute?</label
                    >
                    <div class="col-sm-8">
                      <textarea
                        class="form-control textarea" v-model="contribution"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                  <!-- row-close -->

                  <div class="row mb-3 mt-2">
                    <label for="" class="col-sm-4 col-form-label"
                      >Estimated Budget
                    </label>
                    <div class="col-sm-8">
                      <input type="text" class="form-control" name="" v-model="budget"/>
                    </div>
                  </div>
                  <!-- row-close -->

                  <div class="row mb-3 mt-3">
                    <label for="" class="col-sm-4 col-form-label"
                      >Project Location</label
                    >
                    <div class="col-sm-8 project-location-box">
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="project-location"
                          id="project-location-mentari1"
                          value="project-location-mentari" v-model="netwotkproject_loaction" @change="Onnetworkchange('project-location-mentari')"
                        />
                        <label
                          class="form-check-label"
                          for="project-location-mentari1"
                          >Mentari</label
                        >
                      </div>

                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="project-location"
                          id="project-location-others1"
                          value="project-location-others" v-model="netwotkproject_loaction" @change="Onnetworkchange('project-location-others')"
                        />
                        <label
                          class="form-check-label"
                          for="project-location-others1"
                          >Others</label
                        >
                      </div>

                      <!-- hide-div -->
                      <div class="project-location-mentari profess-box " v-if="networkbranch1=='project-location-mentari'">
                        <div class="mt-3">
                           <select class="form-select" v-model="networkbranch">
                  <option value="">Please Select</option>
            <option
              v-for="brn in BranchList"
              v-bind:key="brn.hospital_branch_name"
              v-bind:value="brn.hospital_branch_name"
            >
              {{ brn.hospital_branch_name }}
            </option>
                </select>
                        </div>
                      </div>

                      <div class="project-location-others profess-box" v-if="networkbranch1!='project-location-mentari'">
                        <div class="mt-3">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Please Specify"
                            name="" v-model="networkother"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- row-close -->

                  <div class="row mb-3 mt-2">
                    <label for="" class="col-sm-4 col-form-label"
                      >Number of Participants</label
                    >
                    <div class="col-sm-8">
                      <input type="text" class="form-control" name="" v-model="networkno_of_paricipants"/>
                    </div>
                  </div>
                   <div class="row mb-3 mt-2">
          <label for="" class="col-sm-4 col-form-label"
            >Relevant Mentari Service That You Want To Be Involved<span
              >*</span
            ></label
          >
          <div class="col-sm-8">
            <!-- <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="Consultation/Counselling"
                    id="Consultation/Counselling2" v-model="Consultation"
                   
                  />
                  <label class="form-check-label" for="Consultation/Counselling2">
                    Consultation/Counselling
                  </label>
                </div> -->
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="Work-based Rehabilitation"
                id="Rehabilitation2" v-model="work"
              />
              <label class="form-check-label" for="Rehabilitation2">
                Work-based Rehabilitation
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="Awareness Or Psychoeducation"
                id="Psychoeducation2" v-model="awareness"
              />
              <label class="form-check-label" for="Psychoeducation2">
                Awareness Or Psychoeducation
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="Recreational Therapy"
                id="Therapy2"  v-model="recreational"
              />
              <label class="form-check-label" for="Therapy2">
                Recreational Therapy
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="Others"
                id="Others2"  v-model="other"
              />
              <label class="form-check-label" for="Others2">
                Others: <input type="text" name="" v-model="Others"/>
              </label>
            </div>
          </div>
        </div>
                  <!-- row-close -->
                </div>
                <!-- networking -->

<p v-if="errors.length">
<ul>
        <li style="color:red"  v-for='err in errors'
    :key='err' >
          {{ err }}
        </li>
      </ul>
        </p>
                <div class="d-flex align-items-center mt-4">
                  <div class="row col-sm-9">
                    <label for="" class="col-sm-4 col-form-label"
                      >Screening Done</label
                    >
                    <div class="col-sm-8">
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="screening-yes"
                          value="1"
                          v-model="screening_mode"
                        />
                        <label class="form-check-label" for="screening-yes"
                          >Yes</label
                        >
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="screening-no"
                          value="0"
                          v-model="screening_mode"
                        />
                        <label class="form-check-label" for="screening-no"
                          >No</label
                        >
                      </div>
                    </div>
                  </div>
                </div>

                <!-- row-close -->
                <!-- </form> -->
              </div>
              <!-- individual -->
            </div>
          </div>
        </div>
      </main>
      <von-footer></von-footer>
    </div>
  </div>
</template>
<script>
import VonFooter from "../../../components/Von/VonFooter.vue";
import CommonHeader from "../../../components/CommonHeader.vue";
import CommonSidebar from "../../../components/CommonSidebar.vue";
export default {
  components: { CommonHeader, CommonSidebar, VonFooter },
  name: "view-individual",
  data() {
    return {
      userdetails: null,
      errors: [],
      loader: false,
      StateList: [],
      CityList: [],
      PostCodeList: [],
      EducationList: [],
      OccupationList: [],
      BranchList: [],
      expList: [],
      name: "",
      dob: "",
      email: "",
      phone_number: "",
      address: "",
      address1: "",
      postcode_id: 0,
      city_id: 0,
      state_id: 0,
      education_id: 0,
      occupation_sector_id: 0,
      branch_id: 0,
      area_of_involvement: "",
      is_agree: 0,
      is_voluneering_exp: 0,
      exp_details: "",
      is_mental_health_professional: 0,
      mentari_services: "",
      available_date: "",
      available_time: "",
      file: null,
      Isvalid: false,
      VolOthers: "",
      Id: 0,
      section: "",
      volexp: "",
      menhelth: "",
      Consultation:"",
      work: "",
      awareness: "",
      recreational: "",
      other: "",
      screening_mode: 0,
      //OUTREACH
      project_name: "",
      project_background: "",
      project_objectives: "",
      target_audience: "",
      no_of_paricipants: 0,
      time_frame: "",
      estimated_budget: 0,
      project_scopes: "",
      project_loaction: "",
      project_loaction_value: "",
      projectlocation: "",
      target_outcome: "",
      followup_projects: 0,
      other_loaction: "",
      project_branch: "",
      outreachother: "",
      outreachmentari_services: "",
      //NETWORK
      contribution: "",
      budget: "",
      networkno_of_paricipants: 0,
      netwotkproject_loaction: "",
      netwotkproject_loaction_value: "",
      networkbranch: "",
      networkother: "",
      networkserviceother: "",
      networkbranch1: "",
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    let urlParams = new URLSearchParams(window.location.search);
    this.Id = urlParams.get("id");
    this.GetList();
    $(document).ready(function () {
      $(".data-table").DataTable({
        searching: false,
        bLengthChange: false,
      });

      $(":radio[name=involvement]").change(function () {
        if ($(this).is(":checked")) {
          var name = $(this).attr("id");
          $(".areas-involvement").hide();
          $(".areas-involvement#" + name + "show").show();
        }
      });
      $('.radio-box input[type="radio"]').click(function () {
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $(".experi-box").not(targetBox).hide();
        $(targetBox).show();
      });
      $('.project-location-box input[type="radio"]').click(function () {
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $(".profess-box").not(targetBox).hide();
        $(targetBox).show();
      });
      $('.professional-box input[type="radio"]').click(function () {
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $(".profess-box").not(targetBox).hide();
        $(targetBox).show();
      });
      $(".select-others")
        .change(function () {
          $(this)
            .find("option:selected")
            .each(function () {
              var optionValue = $(this).attr("value");
              if (optionValue) {
                $(".notshow-box")
                  .not("." + optionValue)
                  .hide();
                $("." + optionValue).show();
              } else {
                $(".notshow-box").hide();
              }
            });
        })
        .change();
      $('.organization-box input[type="radio"]').click(function () {
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $(".organiz-box").not(targetBox).hide();
        $(targetBox).show();
      });

      $('.representative-box input[type="radio"]').click(function () {
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $(".represen-box").not(targetBox).hide();
        $(targetBox).show();
      });

      $("#change").click(function () {
        $(".select-others").val("organization").trigger("change");
      });
    });
    if (this.Id) {
      this.editrecord();
    }
  },
  methods: {
    Onvolexp(val) {
      this.volexp = val;
    },
    Onmentalhealth(val) {
      this.menhelth = val;
    },
    async editrecord() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "von/get-record",
        {
          id: this.Id,
        },
        { headers }
      );
      console.log("get detail", response.data);
      if (response.data.code == 200) {
        this.name = response.data.list.name;
        this.dob = response.data.list.dob;
        this.email = response.data.list.email;
        this.phone_number = response.data.list.phone_number;
        this.address = response.data.list.address;
        if (this.address) {
          var add = this.address.split("\n");
          add.forEach((val, index) => {
            if (index == 0) {
              this.address = val;
            } else {
              this.address1 = val;
            }
          });
        }
        this.postcode_id = response.data.list.postcode;
        this.city_id = response.data.list.city;
        this.state_id = response.data.list.state;
        this.education_id = response.data.list.education;
        this.occupation_sector_id = response.data.list.occupation_sector;
        this.branch_id = response.data.list.branch_id;
        this.area_of_involvement = response.data.list.area_of_involvement;
        this.is_agree = 1;
        this.mentari_services = response.data.list.mentari_services;
        if (this.mentari_services) {
          var service = this.mentari_services.split(",");
          service.forEach((val) => {
            if (val == "Consultation/Counselling") {
              this.Consultation = "Consultation/Counselling";
            } else if (val == "Work-based Rehabilitation") {
              this.work = val;
            } else if (val == "Awareness Or Psychoeducation") {
              this.awareness = val;
            } else if (val == "Recreational Therapy") {
              this.recreational = val;
            } else if (val == "Others") {
              this.other = val;
            } else if (val != ",") {
              this.Others = val;
            }
          });
        }
        if (response.data.list.area_of_involvement == "Volunteerism") {
          this.is_voluneering_exp = response.data.list.is_voluneering_exp;
          if (this.is_voluneering_exp) {
            this.is_voluneering_exp = "experience-yes";
            this.volexp = "y";
          }
          this.exp_details = response.data.list.exp_details;
          if (this.exp_details) {
            this.expList = JSON.parse(this.exp_details);
          }
          this.is_mental_health_professional =
            response.data.list.is_mental_health_professional;
          if (this.is_mental_health_professional==1) {
            this.is_mental_health_professional = "professional-yes";
            this.menhelth = "y";
          } else {
            this.is_mental_health_professional = "professional-no";
            this.menhelth = "n";
          }
          this.available_date = response.data.list.available_date;
          this.available_time = response.data.list.available_time;
          this.section = response.data.list.section;
        } else if (
          response.data.list.area_of_involvement ==
          "Outreach Project Collaboration"
        ) {
          this.project_name = response.data.list.project_name;
          this.project_background = response.data.list.project_background;
          this.project_objectives = response.data.list.project_objectives;
          this.target_audience = response.data.list.target_audience;
          this.no_of_paricipants = response.data.list.no_of_paricipants;
          this.time_frame = response.data.list.time_frame;
          this.estimated_budget = response.data.list.estimated_budget;
          this.project_scopes = response.data.list.project_scopes;
          this.project_loaction = response.data.list.project_loaction;
          this.projectlocation = response.data.list.project_loaction;
          this.target_outcome = response.data.list.target_outcome;
          this.followup_projects = response.data.list.followup_projects;
          this.other_loaction = response.data.list.project_loaction_value;
          this.project_branch = response.data.list.project_loaction_value;
        } else if (
          response.data.list.area_of_involvement ==
          "Networking Make a Contribution"
        ) {
          this.contribution = response.data.list.contribution;
          this.budget = response.data.list.budget;
          this.networkno_of_paricipants = response.data.list.no_of_paricipants;
          this.netwotkproject_loaction = response.data.list.project_loaction;
          this.netwotkproject_loaction_value =
            response.data.list.project_loaction_value;
          this.networkbranch = response.data.list.project_loaction_value;
          this.networkbranch1 = response.data.list.project_loaction;
          this.networkother = response.data.list.project_loaction_value;
        }
      } else {
        window.alert("Something went wrong");
      }
    },
    Onchangelocation(val) {
      this.projectlocation = val;
    },
    selectFile(event) {
      this.file = event.target.files[0];
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
        this.CityList = response.data.list;
        this.PostCodeList = response.data.list;
      } else {
        this.CityList = [];
        this.PostCodeList = [];
      }
    },
    async GetList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get("address/list", {
        headers,
      });
      if (response.data.code == 200 || response.data.code == "200") {
        this.StateList = response.data.list;
      } else {
        this.StateList = [];
      }
      const response1 = await this.$axios.get(
        "general-setting/list?section=" + "education-level",
        { headers }
      );
      if (response1.data.code == 200 || response1.data.code == "200") {
        this.EducationList = response1.data.list;
      } else {
        this.EducationList = [];
      }
      const response2 = await this.$axios.get(
        "general-setting/list?section=" + "occupation-sector",
        { headers }
      );
      if (response2.data.code == 200 || response2.data.code == "200") {
        this.OccupationList = response2.data.list;
      } else {
        this.OccupationList = [];
      }
      const response3 = await this.$axios.get("hospital/branch-list", {
        headers,
      });
      if (response3.data.code == 200 || response3.data.code == "200") {
        this.BranchList = response3.data.list;
      } else {
        this.BranchList = [];
      }
      if (this.state_id) {
        const response = await this.$axios.post(
          "address/" + this.state_id + "/stateWisePostcodeList",
          { headers }
        );
        if (response.data.code == 200 || response.data.code == "200") {
          this.CityList = response.data.list;
          this.PostCodeList = response.data.list;
        } else {
          this.CityList = [];
          this.PostCodeList = [];
        }
      }
    },
    Onreliventmentari(val) {
      if (this.mentari_services) {
        this.mentari_services = this.mentari_services + "," + val;
      } else {
        this.mentari_services = val;
      }
    },
    Onrelevatedmentari(val) {
      if (this.outreachmentari_services) {
        this.outreachmentari_services =
          this.outreachmentari_services + "," + val;
      } else {
        this.outreachmentari_services = val;
      }
    },
    Onnetworkrelevatedmentari(val) {
      if (this.networkmentari_services) {
        this.networkmentari_services = this.networkmentari_services + "," + val;
      } else {
        this.networkmentari_services = val;
      }
    },
    OnAreas(val) {
      this.section = val;
    },
    Onnetworkchange(val) {
      this.networkbranch1 = val;
    },
  },
};
</script>

<style scoped>
.hide {
  display: none;
}
</style>