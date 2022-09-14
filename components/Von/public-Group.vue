<template>
  <div class="group notshow-box hide">
    <div class="row">
      <div class="col-sm-12">
        <h4 class="title-h4">Background</h4>
      </div>
    </div>

    <!-- <form class="form-padding"> -->
    <div class="row mb-3">
      <label for="" class="col-sm-4 col-form-label"
        >Does your group represent an organization?</label
      >
      <div class="col-sm-8 organization-box">
        <div class="form-check form-check-inline" id="change">
          <input
            class="form-check-input"
            type="radio"
            name="organization"
            id="organization-yes"
            value="option1"
            v-model="is_represent_org"
          />
          <label class="form-check-label" for="organization-yes">Yes</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="organization"
            id="organization-no"
            value="organization-no"
            v-model="is_represent_org"
          />
          <label class="form-check-label" for="organization-no">No</label>
        </div>

        <!-- hide-organization -->

        <div class="organization-no organiz-box hide">
          <div class="mt-3 mb-3">
            <label class="form-label"
              >How many group members do you have?</label
            >
            <input
              type="number"
              class="form-control"
              placeholder="Please Specify"
              name=""
              v-model="members_count"
            />
          </div>

          <div class="mb-3">
            <label class="form-label"
              >What is the background of your group member?</label
            >
            <textarea
              class="form-control textarea"
              v-model="member_background"
            ></textarea>
          </div>
        </div>
      </div>
    </div>

    <div class="row mb-3">
      <label for="" class="col-sm-4 col-form-label"
        >Are you the representative of your group?</label
      >
      <div class="col-sm-8 representative-box">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="representative"
            id="representative-yes"
            value="representative-yes"
            v-model="is_you_represenative"
          />
          <label class="form-check-label" for="representative-yes">Yes</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="representative"
            id="representative-no"
            value="representative-no"
            v-model="is_you_represenative"
          />
          <label class="form-check-label" for="representative-no">No</label>
        </div>
      </div>
    </div>

    <!-- hide-representative -->

    <div class="representative-no represen-box hide">
      <p>Please appoint a group representative to complete this form</p>
    </div>
    <div class="representative-yes represen-box hide">
      <div>
        <label for="" class="col-sm-4 font-italic"
        >Please provide personal details below.</label
        >
      </div>
       <div class="row mb-3">
        <label for="" class="col-sm-4 col-form-label">Name<span>*</span></label>
        <div class="col-sm-8">
          <input type="txet" class="form-control" id="" v-model="Gname" />
        </div>
      </div>

      <div class="row mb-3">
        <label for="" class="col-sm-4 col-form-label"
          >Date Of Birth<span>*</span></label
        >
        <div class="col-sm-8">
          <input type="date" class="form-control" id="" v-model="Gdob" />
        </div>
      </div>

      <div class="row mb-3">
        <label for="" class="col-sm-4 col-form-label"
          >Email<span>*</span></label
        >
        <div class="col-sm-8">
          <input type="email" class="form-control" id="" v-model="Gemail" />
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
            v-model="Gphone_number"
          />
        </div>
      </div>

      <div class="row mb-3">
        <label for="" class="col-sm-4 col-form-label">Address</label>
        <div class="col-sm-8">
          <input type="txet" class="form-control" id="" v-model="Gaddress" />
          <input
            type="txet"
            class="form-control mt-2"
            id=""
            v-model="Gaddress1"
          />
        </div>
      </div>

      <div class="row">
        <div class="col-md-4 mb-3">
          <label class="form-label">State<span>*</span></label>
          <select
            class="form-select"
            @change="onCitybind($event)"
            v-model="Gstate_id"
          >
            <option value="0">Please Select</option>
            <option
              v-for="state in GStateList"
              v-bind:key="state.id"
              v-bind:value="state.id"
            >
              {{ state.state_name }}
            </option>
          </select>
        </div>
        <div class="col-md-4 mb-3">
          <label class="form-label">City<span>*</span></label>
          <select class="form-select" v-model="Gcity_id">
            <option value="0">Please Select</option>
            <option
              v-for="ctl in GCityList"
              v-bind:key="ctl.postcode_id"
              v-bind:value="ctl.postcode_id"
            >
              {{ ctl.city_name }}
            </option>
          </select>
        </div>
        <div class="col-md-4 mb-3">
          <label class="form-label">Postcode<span>*</span></label>
          <select class="form-select" v-model="Gpostcode_id">
            <option value="0">Please Select</option>
            <option
              v-for="pst in GPostCodeList"
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
          <label class="form-label">Highest Education<span>*</span></label>
          <select class="form-select" v-model="Geducation_id">
            <option value="0">Please Select</option>
            <option
              v-for="ed in GEducationList"
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
          <select class="form-select" v-model="Goccupation_sector_id">
            <option value="0">Please Select</option>
            <option
              v-for="os in GOccupationList"
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
          <select class="form-select" v-model="Gbranch_id">
            <option value="0">Please Select</option>
            <option
              v-for="brn in GBranchList"
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
              id="volunteerism1"
              v-model="Garea_of_involvement"
              value="Volunteerism"
            />
            <label class="form-check-label" for="volunteerism1">
              Volunteerism
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="involvement"
              id="outreach-project1"
              v-model="Garea_of_involvement"
              value="Outreach Project Collaboration"
            />
            <label class="form-check-label" for="outreach-project1">
              Outreach Project Collaboration
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="involvement"
              id="networking1"
              v-model="Garea_of_involvement"
              value="Networking Make a Contribution"
            />
            <label class="form-check-label" for="networking1">
              Networking Make a Contribution
            </label>
          </div>
        </div>
      </div>

      <div class="areas-involvement hide" id="volunteerism1show">
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
                id="experience-yes1"
                value="experience-yes"
                v-model="Gis_voluneering_exp"
              />
              <label class="form-check-label" for="experience-yes1">Yes</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="experience"
                id="experience-no1"
                value="0"
                v-model="Gis_voluneering_exp"
              />
              <label class="form-check-label" for="experience-no1">No</label>
            </div>

            <!-- hide-div -->
            <div class="experience-yes experi-box hide">
              <!-- <div class="mt-3">
                <textarea
                  class="form-control textarea"
                  rows="3"
                  placeholder="Please describe"
                  v-model="Gexp_details"
                ></textarea>
              </div> -->
              <div class="mt-3">
            <table class="note" style="width: 100%" id="groupvolexp">
              <thead>
                <tr>
                  <th width="100px">YEAR</th>
                  <th>Location</th>
                  <th>Brief Description of Activities</th>
                  <th></th>
                </tr>
              </thead>
              <tbody class="groupoptionBox">
                     <tr class="groupblock">
                  <td>
                    <input type="text" class="form-control groupyear" name="" />
                  </td>
                  <td>
                    <input type="text" class="form-control grouplocation" name=""  />
                  </td>
                  <td>
                    <input type="text" class="form-control groupactivity" name="" />
                  </td>
                  <td>
                    <a class="groupadd-td"><i class="far fa-plus"></i></a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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
                id="professional-yesG"
                value="professional-yesG"
                v-model="Gis_mental_health_professional"
              />
              <label class="form-check-label" for="professional-yesG">Yes</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="professional"
                id="professional-noG"
                value="professional-noG"
                v-model="Gis_mental_health_professional"
              />
              <label class="form-check-label" for="professional-noG">No</label>
            </div>

            <!-- hide-div -->
            <div class="professional-yesG profess-box hide">
              <div class="mt-3">
                <label for="formFile" class="form-label"
                  >Please Attach Your Latest Resume<span>*</span></label
                >
                <input
                  class="form-control"
                  type="file"
                  id="formFile"
                  @change="GselectFile"
                />
              </div>

              <div class="mt-3">
                <label for="formFile" class="form-label"
                  >Relevant Mentari Service That You Want To Be Involved<span
                    >*</span
                  ></label
                >

                  <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="Rehabilitation"
                    @click="GOnreliventmentari('Consultation/Counselling')"
                  />
                  <label class="form-check-label" for="Rehabilitation">
                    Consultation/Counselling
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="Rehabilitation"
                    @click="GOnreliventmentari('Work-based Rehabilitation')"
                  />
                  <label class="form-check-label" for="Rehabilitation">
                    Work-based Rehabilitation
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="Psychoeducation"
                    @click="GOnreliventmentari('Awareness Or Psychoeducation')"
                  />
                  <label class="form-check-label" for="Psychoeducation">
                    Awareness Or Psychoeducation
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="Therapy"
                    @click="GOnreliventmentari('Recreational Therapy')"
                  />
                  <label class="form-check-label" for="Therapy">
                    Recreational Therapy
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="Others"
                    @click="GOnreliventmentari('Others')"
                  />
                  <label class="form-check-label" for="Others">
                    Others:<input type="text" name="" v-model="GVolOthers" />
                  </label>
                </div>
              </div>
            </div>

            <div class="professional-noG profess-box hide">
              <div class="mt-3">
                <label for="formFile" class="form-label"
                  >Relevant Mentari Service That You Want To Be Involved<span
                    >*</span
                  ></label
                >
                <!-- <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="Rehabilitation"
                    @click="GOnreliventmentari('Consultation/Counselling')"
                  />
                  <label class="form-check-label" for="Rehabilitation">
                    Consultation/Counselling
                  </label>
                </div> -->
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="Rehabilitation"
                    @click="GOnreliventmentari('Work-based Rehabilitation')"
                  />
                  <label class="form-check-label" for="Rehabilitation">
                    Work-based Rehabilitation
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="Psychoeducation"
                    @click="GOnreliventmentari('Awareness Or Psychoeducation')"
                  />
                  <label class="form-check-label" for="Psychoeducation">
                    Awareness Or Psychoeducation
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="Therapy"
                    @click="GOnreliventmentari('Recreational Therapy')"
                  />
                  <label class="form-check-label" for="Therapy">
                    Recreational Therapy
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="Others"
                    @click="GOnreliventmentari('Others')"
                  />
                  <label class="form-check-label" for="Others">
                    Others:<input type="text" name="" v-model="GVolOthers" />
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
                <select class="form-select" v-model="Gavailable_date">
                  <option value="">Select Day</option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                </select>
              </div>
              <div class="col-sm-6">
                <select class="form-select" v-model="Gavailable_time">
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

    <div class="areas-involvement hide" id="outreach-project1show">
        <h4 class="title-h4">Outreach-Project Collaboration</h4>
        <p>Please Provide a breief project description</p>

        <div class="row mb-3 mt-2">
          <label for="" class="col-sm-4 col-form-label"
            >Project Name<span>*</span></label
          >
          <div class="col-sm-8">
            <input type="text" class="form-control" name="" v-model="Gproject_name" />
          </div>
        </div>
        <!-- row-close -->

        <div class="row mb-3 mt-2">
          <label for="" class="col-sm-4 col-form-label"
            >Project Background<span>*</span></label
          >
          <div class="col-sm-8">
            <textarea class="form-control textarea" rows="3" v-model="Gproject_background"></textarea>
          </div>
        </div>
        <!-- row-close -->

        <div class="row mb-3 mt-2">
          <label for="" class="col-sm-4 col-form-label"
            >Project Objectives<span>*</span></label
          >
          <div class="col-sm-8">
            <textarea class="form-control textarea" rows="3" v-model="Gproject_objectives"></textarea>
          </div>
        </div>
        <!-- row-close -->

        <div class="row mb-3 mt-2">
          <label for="" class="col-sm-4 col-form-label"
            >Target Audience<span>*</span></label
          >
          <div class="col-sm-8">
            <input type="text" class="form-control" name="" v-model="Gtarget_audience"/>
          </div>
        </div>
        <!-- row-close -->

        <div class="row mb-3 mt-2">
          <label for="" class="col-sm-4 col-form-label"
            >Number of Participants<span>*</span></label
          >
          <div class="col-sm-8">
            <input type="number" class="form-control" name="" v-model="Gno_of_paricipants"/>
          </div>
        </div>
        <!-- row-close -->

        <div class="row mb-3 mt-2">
          <label for="" class="col-sm-4 col-form-label"
            >Time Frame<span>*</span></label
          >
          <div class="col-sm-8">
            <input type="text" class="form-control" name="" v-model="Gtime_frame"/>
          </div>
        </div>
        <!-- row-close -->

        <div class="row mb-3 mt-2">
          <label for="" class="col-sm-4 col-form-label"
            >Estimated Budget<span>*</span></label
          >
          <div class="col-sm-8">
            <input type="number" class="form-control" name="" v-model="Gestimated_budget"/>
          </div>
        </div>
        <!-- row-close -->

        <div class="row mb-3 mt-2">
          <label for="" class="col-sm-4 col-form-label"
            >Project Scopes<span>*</span></label
          >
          <div class="col-sm-8">
            <textarea class="form-control textarea" rows="3" v-model="Gproject_scopes"></textarea>
          </div>
        </div>
        <!-- row-close -->

        <div class="row mb-3 mt-3">
          <label for="" class="col-sm-4 col-form-label"
            >Project Location<span>*</span></label
          >
          <div class="col-sm-8 project-location-box">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="project-location"
                id="project-location-mentariG"
                value="mentari" v-model="Gproject_loaction"
              />
              <label class="form-check-label" for="project-location-mentariG"
                >Mentari</label
              >
            </div>

            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="project-location"
                id="project-location-othersG"
                value="project-location-others" v-model="Gproject_loaction"
              />
              <label class="form-check-label" for="project-location-othersG"
                >Others</label
              >
            </div>

            <!-- hide-div -->
            <div class="mentari profess-box hide">
              <div class="mt-3">
                <select class="form-select" v-model="Gproject_branch">
                  <option value="">Please Select</option>
            <option
              v-for="brn in GBranchList"
              v-bind:key="brn.hospital_branch_name"
              v-bind:value="brn.hospital_branch_name"
            >
              {{ brn.hospital_branch_name }}
            </option>
                </select>
              </div>
            </div>

            <div class="project-location-others profess-box hide">
              <div class="mt-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Please Specify"
                  name="" v-model="Gother_loaction"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- row-close -->

        <div class="row mb-3 mt-2">
          <label for="" class="col-sm-4 col-form-label"
            >How do you want to measure the target outcome?<span>*</span></label
          >
          <div class="col-sm-8">
            <textarea class="form-control textarea" rows="3" v-model="Gtarget_outcome"></textarea>
          </div>
        </div>
        <!-- row-close -->

        <div class="row mb-3 mt-2">
          <label for="" class="col-sm-4 col-form-label"
            >Any planned follow up projects?<span>*</span></label
          >
          <div class="col-sm-8">
            <textarea class="form-control textarea" rows="3" v-model="Gfollowup_projects"></textarea>
          </div>
        </div>
        <!-- row-close -->

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
                    value=""
                    id="Rehabilitation"
                    @click="GOnrelevatedmentari('Consultation/Counselling')"
                  />
                  <label class="form-check-label" for="Rehabilitation">
                    Consultation/Counselling
                  </label>
                </div> -->
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="Work-based Rehabilitation"
                id="Rehabilitation2" @change="GOnrelevatedmentari('Work-based Rehabilitation')"
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
                id="Psychoeducation2" @change="GOnrelevatedmentari('Awareness Or Psychoeducation')"
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
                id="Therapy2" @change="GOnrelevatedmentari('Recreational Therapy')"
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
                id="Others2" @change="GOnrelevatedmentari('Others')"
              />
              <label class="form-check-label" for="Others2">
                Others: <input type="text" name=""  v-model="Goutreachother"/>
              </label>
            </div>
          </div>
        </div>
        <!-- row-close -->
      </div>

      <!-- outreach-projectshow -->

      <div class="areas-involvement hide" id="networking1show">
        <h4 class="title-h4">Networking-Make a Contribution</h4>
        <p>
          We encourage any participation from the community members in line with
          MENTARI activities. For example, craft materials, cooking materials,
          equipment for rehabilitation activities, coupons for patients or even
          funding (via our Tax Exempted Trust Account)
        </p>

        <div class="row mb-3 mt-2">
          <label for="" class="col-sm-4 col-form-label"
            >How would you like contribute?</label
          >
          <div class="col-sm-8">
            <textarea class="form-control textarea" rows="3" v-model="Gcontribution"></textarea>
          </div>
        </div>
        <!-- row-close -->

        <div class="row mb-3 mt-2">
          <label for="" class="col-sm-4 col-form-label"
            >Estimated Budget<span>*</span></label
          >
          <div class="col-sm-8">
            <input type="number" class="form-control" name="" v-model="Gbudget"/>
          </div>
        </div>
        <!-- row-close -->

        <div class="row mb-3 mt-3">
          <label for="" class="col-sm-4 col-form-label"
            >Project Location<span>*</span></label
          >
          <div class="col-sm-8 project-location-box">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="project-location"
                id="project-location-mentariG1"
                value="project-location-mentari" v-model="Gnetwotkproject_loaction"
              />
              <label class="form-check-label" for="project-location-mentariG1"
                >Mentari</label
              >
            </div>

            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="project-location"
                id="project-location-othersG1"
                value="project-location-others" v-model="Gnetwotkproject_loaction"
              />
              <label class="form-check-label" for="project-location-othersG1"
                >Others</label
              >
            </div>

            <!-- hide-div -->
            <div class="project-location-mentari profess-box hide">
              <div class="mt-3">
                <select class="form-select" v-model="Gnetworkbranch">
                  <option value="">Please Select</option>
            <option
              v-for="brn in GBranchList"
              v-bind:key="brn.hospital_branch_name"
              v-bind:value="brn.hospital_branch_name"
            >
              {{ brn.hospital_branch_name }}
            </option>
                </select>
              </div>
            </div>

            <div class="project-location-others profess-box hide">
              <div class="mt-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Please Specify"
                  name="" v-model="Gnetworkother"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- row-close -->

        <div class="row mb-3 mt-2">
          <label for="" class="col-sm-4 col-form-label"
            >Number of Participants<span>*</span></label
          >
          <div class="col-sm-8">
            <input type="number" class="form-control" name="" v-model="Gnetworkno_of_paricipants" />
          </div>
        </div>
        <!-- row-close -->

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
                    value=""
                    id="Rehabilitation"
                    @click="GOnnetworkrelevatedmentari('Consultation/Counselling')"
                  />
                  <label class="form-check-label" for="Rehabilitation">
                    Consultation/Counselling
                  </label>
                </div> -->
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="Rehabilitation2" @click="GOnnetworkrelevatedmentari('Work-based Rehabilitation')"
              />
              <label class="form-check-label" for="Rehabilitation2">
                Work-based Rehabilitation
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="Psychoeducation2" @click="GOnnetworkrelevatedmentari('Awareness Or Psychoeducation')"
              />
              <label class="form-check-label" for="Psychoeducation2">
                Awareness Or Psychoeducation
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="Therapy2" @click="GOnnetworkrelevatedmentari('Recreational Therapy')"
              />
              <label class="form-check-label" for="Therapy2">
                Recreational Therapy
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="Others2" @click="GOnnetworkrelevatedmentari('Other')"
              />
              <label class="form-check-label" for="Others2">
                Others: <input type="text" name="" v-model="Gnetworkserviceother"/>
              </label>
            </div>
          </div>
        </div>
        <!-- row-close -->
      </div>
      <!-- networking -->
    </div>
    <!--  -->
<p v-if="errors.length">
<ul>
        <li style="color:red"  v-for='err in errors'
    :key='err' >
          {{ err }}
        </li>
      </ul>
        </p>
    <div class="d-flex align-items-center">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck1" v-model="Gis_agree" />
        <label class="form-check-label" for="gridCheck1">
          I agree to the terms and condition
        </label>
      </div>

      <button
        type="submit"
        class="btn btn-warning btn-text ml-auto"
        @click="OnSubmit"
      >
        <i class="far fa-save"></i> Save
      </button>
    </div>
    <!-- </form> -->
  </div>
</template>
<script>
export default {
  name: "Group",
  data() {
    return {
      userdetails: null,
      errors: [],
      loader: false,
      GStateList: [],
      GCityList: [],
      GPostCodeList: [],
      GEducationList: [],
      GOccupationList: [],
      GBranchList: [],
      Gis_agree: 0,
      is_represent_org: 0,
      members_count: "",
      member_background: "",
      is_you_represenative: 0,
      //VOLUNTEEM
      Gname: "",
      Gdob: "",
      Gemail: "",
      Gphone_number: "",
      Gaddress: "",
      Gaddress1: "",
      Gpostcode_id: 0,
      Gcity_id: 0,
      Gstate_id: 0,
      Geducation_id: 0,
      Goccupation_sector_id: 0,
      Gbranch_id: 0,
      Garea_of_involvement: "",
      Gis_voluneering_exp: 0,
      Gexp_details: "",
      Gis_mental_health_professional: 0,
      Gmentari_services: "",
      Gavailable_date: "",
      Gavailable_time: "",
      Gfile: null,
      GIsvalid: false,
      GVolOthers: "",
      Gproject_name: "",
      Gproject_background: "",
      Gproject_objectives: "",
      Gmentari_services: "",
      Gtarget_audience: "",
      Gno_of_paricipants: 0,
      Gtime_frame: "",
      Gestimated_budget: 0,
      Gproject_scopes: "",
      Gproject_loaction: "",
      Gproject_loaction_value: "",
      Gtarget_outcome: "",
      Gfollowup_projects: 0,
      Gother_loaction: "",
      Gproject_branch: "",
      Goutreachother: "",
      Goutreachmentari_services: "",
      Gnetworkmentari_services: "",
      Gcontribution: "",
      Gbudget: "",
      Gnetworkno_of_paricipants: 0,
      Gnetwotkproject_loaction: "",
      Gnetwotkproject_loaction_value: "",
      Gnetworkbranch: "",
      Gnetworkother: "",
      Gnetworkserviceother: "",
       Ipaddress:""
    };
  },
  beforeMount() {
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
       $(".groupadd-td").click(function (i) {
        $(".groupblock:last").after(
          '<tr class="groupblock"> <td> <input type="text" class="form-control groupyear" name="" /></td><td><input type="text" class="form-control grouplocation" name=""  /></td><td><input type="text" class="form-control groupactivity" name="" /></td> <td> <span class="remove"><i class="fal fa-times"></i></span></td></tr>'
        );
      });
      $(".groupoptionBox").on("click", ".remove", function () {
        $(this).closest(".groupblock").remove();
      });
    });
    this.GetList();
    this.GetUserIpAddress();
  },
  methods: {
    GselectFile(event) {
      this.Gfile = event.target.files[0];
    },
    GOnreliventmentari(val) {
      if (this.Gmentari_services) {
        this.Gmentari_services = this.Gmentari_services + "," + val;
      } else {
        this.Gmentari_services = val;
      }
    },
    GOnrelevatedmentari(val) {
      if (this.Goutreachmentari_services) {
        this.Goutreachmentari_services =
          this.Goutreachmentari_services + "," + val;
      } else {
        this.Goutreachmentari_services = val;
      }
    },
    GOnnetworkrelevatedmentari(val) {
      if (this.Gnetworkmentari_services) {
        this.Gnetworkmentari_services =
          this.Gnetworkmentari_services + "," + val;
      } else {
        this.Gnetworkmentari_services = val;
      }
    },
    async onCitybind(event) {
      const headers = {
        // Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "address/" + event.target.value + "/stateWisePostcodeList",
        { headers }
      );
      if (response.data.code == 200 || response.data.code == "200") {
        this.GCityList = response.data.list;
        this.GPostCodeList = response.data.list;
      } else {
        this.GCityList = [];
        this.GPostCodeList = [];
      }
    },
    async GetList() {
      const headers = {
        // Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get("address/list", {
        headers,
      });
      console.log('my stat33',response.data);
      if (response.data.code == 200 || response.data.code == "200") {
        this.GStateList = response.data.list;
      } else {
        this.GStateList = [];
      }
      const response1 = await this.$axios.get(
        "general-setting/list?section=" + "education-level",
        { headers }
      );
      if (response1.data.code == 200 || response1.data.code == "200") {
        this.GEducationList = response1.data.list;
      } else {
        this.GEducationList = [];
      }
      const response2 = await this.$axios.get(
        "general-setting/list?section=" + "occupation-sector",
        { headers }
      );
      if (response2.data.code == 200 || response2.data.code == "200") {
        this.GOccupationList = response2.data.list;
      } else {
        this.GOccupationList = [];
      }
      const response3 = await this.$axios.get("hospital/branch-list", {
        headers,
      });
      if (response3.data.code == 200 || response3.data.code == "200") {
        this.GBranchList = response3.data.list;
      } else {
        this.GBranchList = [];
      }
    },
    OnSubmit() {
      this.errors = [];
      if (this.Gis_agree) {
        if (this.is_you_represenative != "representative-no") {
          if (this.Garea_of_involvement == "Volunteerism") {
            this.OnGroupVolunteerism();
          } else if (
            this.Garea_of_involvement == "Outreach Project Collaboration"
          ) {
            this.OnGroupOutreachProjectCollaboration();
          } else if (
            this.Garea_of_involvement == "Networking Make a Contribution"
          ) {
            this.OnGroupNetworkingMakeaContribution();
          } else {
            this.errors.push("Please select Areas of Involvement");
          }
        } else {
          this.OnRepresentNo();
        }
      } else {
        this.errors.push("Please agree to the terms and condition");
      }
    },
    async OnRepresentNo() {
      try {
        if (!this.members_count) {
          this.errors.push("How many group members do you have is required.");
        }
        if (!this.member_background) {
          this.errors.push(
            "What is the background of your group member is required."
          );
        }
        if (this.members_count && this.member_background) {
          const headers = {
            // Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          let body = new FormData();
          body.append("added_by", this.Ipaddress);
          body.append("section", "group");
          body.append("is_represent_org", "0");
          body.append("members_count", this.members_count);
          body.append("member_background", this.member_background);
          body.append("is_you_represenative", "0");
          body.append("is_agree", "1");
          const response = await this.$axios.post("von/add", body, {
            headers,
          });
          console.log("my console response", response.data);
          if (response.data.code == 200 || response.data.code == "200") {
            this.$nextTick(() => {
              $("#insertpopup").modal("show");
            });
            this.Reload();
          } else {
            this.$nextTick(() => {
              $("#errorpopup").modal("show");
            });
          }
        }
      } catch (e) {
        this.$nextTick(() => {
          $("#errorpopup").modal("show");
        });
      }
    },
    async OnGroupVolunteerism() {
      try {
        this.GIsvalid = true;
        var explist = [];
        $("table#groupvolexp > tbody > tr").each(function (i) {
          var obj = {};
          obj.year = $('td input[type="text"].groupyear', this).val();
          obj.location = $('td input[type="text"].grouplocation', this).val();
          obj.activity = $('td input[type="text"].groupactivity', this).val();
          explist.push(obj);
        });
        if (!this.members_count) {
          this.errors.push("How many group members do you have is required.");
        }
        if (!this.member_background) {
          this.errors.push(
            "What is the background of your group member is required."
          );
        }
        if (!this.Gname) {
          this.errors.push("Name is required.");
        }
        if (!this.Gdob) {
          this.errors.push("Date Of Birth is required.");
        }
        if (!this.Gemail) {
          this.errors.push("Email is required.");
        }
        if (!this.Gphone_number) {
          this.errors.push("Phone Number is required.");
        }
        if (!this.Gaddress) {
          this.errors.push("Address  is required.");
        }
        if (!this.Gstate_id) {
          this.errors.push("State is required.");
        }
        if (!this.Gcity_id) {
          this.errors.push("City is required.");
        }
        if (!this.Gpostcode_id) {
          this.errors.push("Postcode is required.");
        }
        if (!this.Geducation_id) {
          this.errors.push("Highest Education is required.");
        }
        if (!this.Goccupation_sector_id) {
          this.errors.push("Current Occupation Sector is required.");
        }
        if (!this.Gbranch_id) {
          this.errors.push("Mentari Branch is required.");
        }
        if (!this.Garea_of_involvement) {
          this.errors.push("Areas of Involvement is required.");
        }
        // if (this.Gis_voluneering_exp == "experience-yes") {
        //   if (!this.Gexp_details) {
        //     this.errors.push(
        //       "volunteering experience description is required."
        //     );
        //     this.GIsvalid = false;
        //   }
        // }
        if (this.Gis_mental_health_professional == "professional-yesG") {
          if (!this.Gfile) {
            this.errors.push("Latest Resume is required.");
            this.GIsvalid = false;
          }
        }
        if (!this.Gmentari_services) {
          this.errors.push("Relevant Mentari Service is required.");
          this.GIsvalid = false;
        }
        if (!this.Gavailable_date) {
          this.errors.push("Available Day is required.");
        }
        if (!this.Gavailable_time) {
          this.errors.push("Available Time is required.");
        }
        if (
          this.GIsvalid &&
          this.Gname &&
          this.Gdob &&
          this.Gemail &&
          this.Gphone_number &&
          this.Gaddress &&
          this.Gstate_id &&
          this.Gcity_id &&
          this.Gpostcode_id &&
          this.Geducation_id &&
          this.Goccupation_sector_id &&
          this.Gbranch_id &&
          this.Garea_of_involvement &&
          this.Gavailable_date &&
          this.Gavailable_time &&
          this.members_count &&
          this.member_background
        ) {
          if (this.Gmentari_services) {
            this.Gmentari_services =
              this.Gmentari_services + "," + this.GVolOthers;
          }
          if (this.Gaddress1) {
            this.Gaddress = this.Gaddress + "\n" + this.Gaddress1;
          }
          if (this.Gis_voluneering_exp == "experience-yes") {
            this.Gis_voluneering_exp = "1";
          } else {
            this.Gis_voluneering_exp = "0";
          }
          if (this.Gis_mental_health_professional == "professional-yesG") {
            this.Gis_mental_health_professional = "1";
          } else {
            this.Gis_mental_health_professional = "0";
          }
          if (this.is_you_represenative == "representative-yes") {
            this.is_you_represenative = "1";
          } else {
            this.is_you_represenative = "0";
          }
          const headers = {
            // Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          let body = new FormData();
          body.append("added_by", this.Ipaddress);
          body.append("section", "group");
          body.append("is_represent_org", "0");
          body.append("members_count", this.members_count);
          body.append("member_background", this.member_background);
          body.append("is_you_represenative", this.is_you_represenative);
          body.append("is_agree", "1");
          body.append("name", this.Gname);
          body.append("dob", this.Gdob);
          body.append("email", this.Gemail);
          body.append("phone_number", this.Gphone_number);
          body.append("address", this.Gaddress);
          body.append("postcode_id", this.Gpostcode_id);
          body.append("city_id", this.Gcity_id);
          body.append("state_id", this.Gstate_id);
          body.append("education_id", this.Geducation_id);
          body.append("occupation_sector_id", this.Goccupation_sector_id);
          body.append("branch_id", this.Gbranch_id);
          body.append("area_of_involvement", this.Garea_of_involvement);
          body.append("is_voluneering_exp", this.Gis_voluneering_exp);
          body.append("exp_details", JSON.stringify(explist));
          body.append(
            "is_mental_health_professional",
            this.Gis_mental_health_professional
          );
          body.append("mentari_services", this.Gmentari_services);
          body.append("available_date", this.Gavailable_date);
          body.append("available_time", this.Gavailable_time);
          body.append("health_professional_resume", this.Gfile);
          const response = await this.$axios.post("von/add", body, {
            headers,
          });
          console.log("my console response", response.data);
          if (response.data.code == 200 || response.data.code == "200") {
            this.$nextTick(() => {
              $("#insertpopup").modal("show");
            });
            this.Reload();
          } else {
            this.$nextTick(() => {
              $("#errorpopup").modal("show");
            });
          }
        }
      } catch (e) {
        this.$nextTick(() => {
          $("#errorpopup").modal("show");
        });
      }
    },
    async OnGroupOutreachProjectCollaboration() {
      try {
        this.GIsvalid = true;
        if (!this.members_count) {
          this.errors.push("How many group members do you have is required.");
        }
        if (!this.member_background) {
          this.errors.push(
            "What is the background of your group member is required."
          );
        }
        if (!this.Gname) {
          this.errors.push("Name is required.");
        }
        if (!this.Gdob) {
          this.errors.push("Date Of Birth is required.");
        }
        if (!this.Gemail) {
          this.errors.push("Email is required.");
        }
        if (!this.Gphone_number) {
          this.errors.push("Phone Number is required.");
        }
        if (!this.Gaddress) {
          this.errors.push("Address  is required.");
        }
        if (!this.Gstate_id) {
          this.errors.push("State is required.");
        }
        if (!this.Gcity_id) {
          this.errors.push("City is required.");
        }
        if (!this.Gpostcode_id) {
          this.errors.push("Postcode is required.");
        }
        if (!this.Geducation_id) {
          this.errors.push("Highest Education is required.");
        }
        if (!this.Goccupation_sector_id) {
          this.errors.push("Current Occupation Sector is required.");
        }
        if (!this.Gbranch_id) {
          this.errors.push("Mentari Branch is required.");
        }
        if (!this.Gproject_name) {
          this.errors.push("Project Name is required.");
        }
        if (!this.Gproject_background) {
          this.errors.push("Project Background is required.");
        }
        if (!this.Gproject_objectives) {
          this.errors.push("Project Objectives is required.");
        }
        if (!this.Gtarget_audience) {
          this.errors.push("Target Audience is required.");
        }
        if (!this.Gno_of_paricipants) {
          this.errors.push("Number of Participants is required.");
        }
        if (!this.Gtime_frame) {
          this.errors.push("Time Frame is required.");
        }
        if (!this.Gestimated_budget) {
          this.errors.push("Estimated Budget is required.");
        }
        if (!this.Gproject_scopes) {
          this.errors.push("Project Scopes is required.");
        }
        if (!this.Gproject_loaction) {
          this.errors.push("Project Location is required.");
        } else {
          if (this.Gproject_loaction == "project-location-others") {
            if (!this.Gother_loaction) {
              this.errors.push("Please Enter Other Location");
              this.GIsvalid = false;
            } else {
              this.Gproject_loaction_value = this.Gproject_other;
            }
          } else {
            if (!this.Gproject_branch) {
              this.errors.push("Please select Mentari Branch.");
              this.GIsvalid = false;
            } else {
              this.Gproject_loaction_value = this.Gproject_branch;
            }
          }
        }
        if (!this.Gtarget_outcome) {
          this.errors.push("target outcome is required.");
        }
        if (!this.Gfollowup_projects) {
          this.errors.push("Any planned follow up projects is required.");
        }
        if (!this.Goutreachmentari_services) {
          this.errors.push("Relevant Mentari Service is required.");
        }
        if (
          this.GIsvalid &&
          this.Gname &&
          this.Gdob &&
          this.Gemail &&
          this.Gphone_number &&
          this.Gaddress &&
          this.Gstate_id &&
          this.Gcity_id &&
          this.Gpostcode_id &&
          this.Geducation_id &&
          this.Goccupation_sector_id &&
          this.Gbranch_id &&
          this.Garea_of_involvement &&
          this.Gproject_name &&
          this.Gproject_background &&
          this.Gproject_objectives &&
          this.Gtarget_audience &&
          this.Gno_of_paricipants &&
          this.Gtime_frame &&
          this.Gestimated_budget &&
          this.Gproject_scopes &&
          this.Gproject_loaction &&
          this.Gproject_loaction_value &&
          this.Gtarget_outcome &&
          this.Gfollowup_projects &&
          this.Goutreachmentari_services &&
          this.members_count &&
          this.member_background
        ) {
          if (this.Goutreachmentari_services) {
            this.Goutreachmentari_services =
              this.Goutreachmentari_services + "," + this.Goutreachother;
          }
          if (this.Gaddress1) {
            this.Gaddress = this.address + "\n" + this.Gaddress1;
          }
          if (this.is_you_represenative == "representative-yes") {
            this.is_you_represenative = "1";
          } else {
            this.is_you_represenative = "0";
          }
          const headers = {
            // Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          let body = new FormData();
          body.append("added_by", this.Ipaddress);
          body.append("section", "group");
          body.append("is_represent_org", "0");
          body.append("members_count", this.members_count);
          body.append("member_background", this.member_background);
          body.append("is_you_represenative", this.is_you_represenative);
          body.append("is_agree", "1");
          body.append("name", this.Gname);
          body.append("dob", this.Gdob);
          body.append("email", this.Gemail);
          body.append("phone_number", this.Gphone_number);
          body.append("address", this.Gaddress);
          body.append("postcode_id", this.Gpostcode_id);
          body.append("city_id", this.Gcity_id);
          body.append("state_id", this.Gstate_id);
          body.append("education_id", this.Geducation_id);
          body.append("occupation_sector_id", this.Goccupation_sector_id);
          body.append("branch_id", this.Gbranch_id);
          body.append("area_of_involvement", this.Garea_of_involvement);
          body.append("project_name", this.Gproject_name);
          body.append("project_background", this.Gproject_background);
          body.append("project_objectives", this.Gproject_objectives);
          body.append("mentari_services", this.Goutreachmentari_services);
          body.append("target_audience", this.Gtarget_audience);
          body.append("no_of_paricipants", this.Gno_of_paricipants);
          body.append("time_frame", this.Gtime_frame);
          body.append("estimated_budget", this.Gestimated_budget);
          body.append("project_scopes", this.Gproject_scopes);
          body.append("project_loaction", this.Gproject_loaction);
          body.append("project_loaction_value", this.Gproject_loaction_value);
          body.append("target_outcome", this.Gtarget_outcome);
          body.append("followup_projects", this.Gfollowup_projects);
          body.append("is_agree", "1");
          const response = await this.$axios.post("von/add", body, {
            headers,
          });
          console.log("my console response", response.data);
          if (response.data.code == 200 || response.data.code == "200") {
            this.$nextTick(() => {
              $("#insertpopup").modal("show");
            });
            this.Reload();
          } else {
            this.$nextTick(() => {
              $("#errorpopup").modal("show");
            });
          }
        }
      } catch (e) {
        this.$nextTick(() => {
          $("#errorpopup").modal("show");
        });
      }
    },
    async OnGroupNetworkingMakeaContribution() {
      try {
        this.GIsvalid = true;
        if (!this.members_count) {
          this.errors.push("How many group members do you have is required.");
        }
        if (!this.member_background) {
          this.errors.push(
            "What is the background of your group member is required."
          );
        }
        if (!this.Gname) {
          this.errors.push("Name is required.");
        }
        if (!this.Gdob) {
          this.errors.push("Date Of Birth is required.");
        }
        if (!this.Gemail) {
          this.errors.push("Email is required.");
        }
        if (!this.Gphone_number) {
          this.errors.push("Phone Number is required.");
        }
        if (!this.Gaddress) {
          this.errors.push("Address  is required.");
        }
        if (!this.Gstate_id) {
          this.errors.push("State is required.");
        }
        if (!this.Gcity_id) {
          this.errors.push("City is required.");
        }
        if (!this.Gpostcode_id) {
          this.errors.push("Postcode is required.");
        }
        if (!this.Geducation_id) {
          this.errors.push("Highest Education is required.");
        }
        if (!this.Goccupation_sector_id) {
          this.errors.push("Current Occupation Sector is required.");
        }
        if (!this.Gbranch_id) {
          this.errors.push("Mentari Branch is required.");
        }
        if (!this.Gcontribution) {
          this.errors.push("How would you like contribute is required.");
        }
        if (!this.Gbudget) {
          this.errors.push("Estimated Budget is required.");
        }
        if (!this.Gnetworkno_of_paricipants) {
          this.errors.push("Number of Participants is required.");
        }
        if (!this.Gnetwotkproject_loaction) {
          this.errors.push("Project Location is required.");
        } else {
          if (this.Gnetwotkproject_loaction == "project-location-others") {
            if (!this.Gnetworkother) {
              this.errors.push("Please Enter Other Location");
              this.GIsvalid = false;
            } else {
              this.Gnetwotkproject_loaction_value = this.Gnetworkother;
            }
          } else {
            if (!this.Gnetworkbranch) {
              this.errors.push("Please select Mentari Branch.");
              this.GIsvalid = false;
            } else {
              this.Gnetwotkproject_loaction_value = this.Gnetworkbranch;
            }
          }
        }
        if (!this.Gnetworkmentari_services) {
          this.errors.push(
            "Relevant Mentari Service That You Want To Be Involved is required."
          );
        }
        if (
          this.GIsvalid &&
          this.Gname &&
          this.Gdob &&
          this.Gemail &&
          this.Gphone_number &&
          this.Gaddress &&
          this.Gstate_id &&
          this.Gcity_id &&
          this.Gpostcode_id &&
          this.Geducation_id &&
          this.Goccupation_sector_id &&
          this.Gbranch_id &&
          this.Garea_of_involvement &&
          this.Gcontribution &&
          this.Gbudget &&
          this.Gnetworkno_of_paricipants &&
          this.Gnetwotkproject_loaction &&
          this.Gnetworkmentari_services
        ) {
          if (this.Gnetworkmentari_services) {
            this.Gnetworkmentari_services =
              this.Gnetworkmentari_services + "," + this.Gnetworkserviceother;
          }
          if (this.Gaddress1) {
            this.Gaddress = this.Gaddress + "\n" + this.Gaddress1;
          }
          if (this.is_you_represenative == "representative-yes") {
            this.is_you_represenative = "1";
          } else {
            this.is_you_represenative = "0";
          }
          const headers = {
            // Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          let body = new FormData();
          body.append("added_by", this.Ipaddress);
          body.append("section", "group");
          body.append("is_represent_org", "0");
          body.append("members_count", this.members_count);
          body.append("member_background", this.member_background);
          body.append("is_you_represenative", this.is_you_represenative);
          body.append("is_agree", "1");
          body.append("name", this.Gname);
          body.append("dob", this.Gdob);
          body.append("email", this.Gemail);
          body.append("phone_number", this.Gphone_number);
          body.append("address", this.Gaddress);
          body.append("postcode_id", this.Gpostcode_id);
          body.append("city_id", this.Gcity_id);
          body.append("state_id", this.Gstate_id);
          body.append("education_id", this.Geducation_id);
          body.append("occupation_sector_id", this.Goccupation_sector_id);
          body.append("branch_id", this.Gbranch_id);
          body.append("area_of_involvement", this.Garea_of_involvement);
          body.append("contribution", this.Gcontribution);
          body.append("budget", this.Gbudget);
          body.append("mentari_services", this.Gnetworkmentari_services);
          body.append("no_of_paricipants", this.Gnetworkno_of_paricipants);
          body.append("project_loaction", this.Gnetwotkproject_loaction);
          body.append(
            "project_loaction_value",
            this.Gnetwotkproject_loaction_value
          );
          const response = await this.$axios.post("von/add", body, {
            headers,
          });
          console.log("my console response", response.data);
          if (response.data.code == 200 || response.data.code == "200") {
            this.$nextTick(() => {
              $("#insertpopup").modal("show");
            });
            this.Reload();
          } else {
            this.$nextTick(() => {
              $("#errorpopup").modal("show");
            });
          }
        }
      } catch (e) {
        this.$nextTick(() => {
          $("#errorpopup").modal("show");
        });
      }
    },
    Reload() {
      this.$router.push("/Modules/Von/list-of-application");
      setTimeout(() => {
        window.location.reload();
      }, 100);
    },
     async GetUserIpAddress() {
      const {
        data: { ip },
      } = await this.$axios.get("https://www.cloudflare.com/cdn-cgi/trace", {
        responseType: "text",
        transformResponse: (data) =>
          Object.fromEntries(
            data
              .trim()
              .split("\n")
              .map((line) => line.split("="))
          ),
      });
      this.Ipaddress = ip;
    },
  },
};
</script>
<style scoped>
.hide {
  display: none;
}
</style>
