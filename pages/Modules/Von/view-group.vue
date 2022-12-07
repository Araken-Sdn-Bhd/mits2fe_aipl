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
                ><i class="fa fa-user-edit"></i
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
                    <h5>Group</h5>
                  </div>
                </div>
              </div>

             <div class="group notshow-box">
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
          disabled
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
          disabled
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

        <div class="organization-no organiz-box">
          <div class="mt-3 mb-3">
            <label class="form-label"
              >How many group members do you have?</label
            >
            <span class="form-control">{{ this.members_count }}</span>
          </div>

          <div class="mb-3">
            <label class="form-label"
              >What is the background of your group member?</label
            >
            <span class="form-control">{{ this.member_background }}</span>
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
          disabled
            class="form-check-input"
            type="radio"
            name="representative"
            id="representative-yes"
            value="1"
            v-model="is_you_represenative" @change="OnchangeIsrepresent('1')"
          />
          <label class="form-check-label" for="representative-yes">Yes</label>
        </div>
        <div class="form-check form-check-inline">
          <input
          disabled
            class="form-check-input"
            type="radio"
            name="representative"
            id="representative-no"
            value="0"
            v-model="is_you_represenative" @change="OnchangeIsrepresent('0')"
          />
          <label class="form-check-label" for="representative-no">No</label>
        </div>
      </div>
    </div>

    <!-- hide-representative -->

    <div class="representative-no represen-box hide" v-if="!is_you_represenative">
      <p>Please appoint a group representative to complete this form</p>
    </div>
    <div class="representative-yes represen-box" v-if="is_you_represenative">
      <div>
        <label for="" class="col-sm-4 font-italic"
        >Please provide personal details below.</label
        >
      </div>
       <div class="row mb-3">
        <label for="" class="col-sm-4 col-form-label">Name<span>*</span></label>
        <div class="col-sm-8">
          <span class="form-control">{{ this.Gname }}</span>
        </div>
      </div>

      <div class="row mb-3">
        <label for="" class="col-sm-4 col-form-label"
          >Date Of Birth<span>*</span></label
        >
        <div class="col-sm-8">
          <span class="form-control">{{ this.Gdob }}</span>
        </div>
      </div>

      <div class="row mb-3">
        <label for="" class="col-sm-4 col-form-label"
          >Email<span>*</span></label
        >
        <div class="col-sm-8">
          <span class="form-control">{{ this.Gemail }}</span>
        </div>
      </div>

      <div class="row mb-3">
        <label for="" class="col-sm-4 col-form-label"
          >Phone Number<span>*</span></label
        >
        <div class="col-sm-8">
          <span class="form-control">{{ this.Gphone_number }}</span>
        </div>
      </div>

      <div class="row mb-3">
        <label for="" class="col-sm-4 col-form-label">Address</label>
        <div class="col-sm-8">
          <span class="form-control">{{ this.Gaddress }}</span>
          <br/>
          <span class="form-control">{{ this.Gaddress1 }}</span>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4 mb-3">
          <label class="form-label">State<span>*</span></label>
          <span class="form-control">{{ this.Gstate_id }}</span>
        </div>
        <div class="col-md-4 mb-3">
          <label class="form-label">City<span>*</span></label>
          <span class="form-control">{{ this.Gcity_id }}</span>
        </div>
        <div class="col-md-4 mb-3">
          <label class="form-label">Postcode<span>*</span></label>
          <span class="form-control">{{ this.Gpostcode_id }}</span>
          </select>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <label class="form-label">Highest Education<span>*</span></label>
          <select class="form-select" v-model="Geducation_id" disabled>
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
          <select class="form-select" v-model="Goccupation_sector_id" disabled>
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
          <select class="form-select" v-model="Gbranch_id" disabled>
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
            disabled
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
            disabled
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
            disabled
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

      <div class="areas-involvement" id="volunteerism1show" v-if="Garea_of_involvement=='Volunteerism'">
        <h4 class="title-h4">Volunteerism</h4>

        <div class="row mb-3 mt-2">
          <label for="" class="col-sm-4 col-form-label">
            Do you have volunteering experience?<span>*</span></label
          >
          <div class="col-sm-8 radio-box">
            <div class="form-check form-check-inline">
              <input
              disabled
                class="form-check-input"
                type="radio"
                name="experience"
                id="experience-yes1"
                value="1"
                v-model="Gis_voluneering_exp" @change="OnChangeexperiance('1')"
              />
              <label class="form-check-label" for="experience-yes1">Yes</label>
            </div>
            <div class="form-check form-check-inline">
              <input
              disabled
                class="form-check-input"
                type="radio"
                name="experience"
                id="experience-no1"
                value="0"
                v-model="Gis_voluneering_exp" @change="OnChangeexperiance('0')"
              />
              <label class="form-check-label" for="experience-no1">No</label>
            </div>

            <!-- hide-div -->
            <div class="experience-yes experi-box" v-if="Gis_voluneering_exp=='1'">
              <div class="mt-3">
                  <table class="note" style="width: 100%" id="volexp1">
              <thead>
                <tr>
                  <th width="100px">YEAR</th>
                  <th>Location</th>
                  <th>Brief Description of Activities</th>

                </tr>
              </thead>
              <tbody class="optionBox">
                     <tr class="block" v-for="(exp,index) in expList" :key="index">
                  <td>
                    <input disabled type="text" class="form-control year" v-model="exp.year" name="" />
                  </td>
                  <td>
                    <input disabled type="text" class="form-control location" v-model="exp.location" name=""  />
                  </td>
                  <td>
                    <input disabled type="text" class="form-control activity" v-model="exp.activity" name="" />
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
            Are you a mental health professional?<span>*</span></label
          >
          <div class="col-sm-8 professional-box">
            <div class="form-check form-check-inline">
              <input
              disabled
                class="form-check-input"
                type="radio"
                name="professional"
                id="professional-yesG"
                value="1"
                v-model="Gis_mental_health_professional" @change="Onhealthprofession('1')"
              />
              <label class="form-check-label" for="professional-yesG">Yes</label>
            </div>
            <div class="form-check form-check-inline">
              <input
              disabled
                class="form-check-input"
                type="radio"
                name="professional"
                id="professional-noG"
                value="0"
                v-model="Gis_mental_health_professional" @change="Onhealthprofession('0')"
              />
              <label class="form-check-label" for="professional-noG">No</label>
            </div>

            <!-- hide-div -->
            <div class="professional-yesG profess-box" v-if="Gis_mental_health_professional=='1'">
              <div class="mt-3" v-if="this.resume != null || this.resume != ''">
                          <label for="formFile" class="form-label"
                            >Mental Health Professional Resume</label
                          >
                          <br/>
                          <a target="_blank" @click="onDownloadFile" class="btn btn-warning btn-text btn-green"
                        ><i class="fad fa-download"></i> Download File</a>
                        </div>

              <div class="mt-3">
                <label for="formFile" class="form-label"
                  >Relevant Mentari Service That You Want To Be Involved<span
                    >*</span
                  ></label
                >
                <div class="form-check">
                  <input
                  disabled
                    class="form-check-input"
                    type="checkbox"
                    value="Consultation/Counselling"
                    id="Consultation/Counselling"
                   v-model="Consultation"
                  />
                  <label class="form-check-label" for="Consultation/Counselling">
                    Consultation/Counselling
                  </label>
                </div>
                <div class="form-check">
                  <input
                  disabled
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="Rehabilitation"
                   v-model="work"
                  />
                  <label class="form-check-label" for="Rehabilitation">
                    Work-based Rehabilitation
                  </label>
                </div>
                <div class="form-check">
                  <input
                  disabled
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="Psychoeducation"
                    v-model="awareness"
                  />
                  <label class="form-check-label" for="Psychoeducation">
                    Awareness Or Psychoeducation
                  </label>
                </div>
                <div class="form-check">
                  <input
                  disabled
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="Therapy"
                    v-model="recreational"
                  />
                  <label class="form-check-label" for="Therapy">
                    Recreational Therapy
                  </label>
                </div>
                <div class="form-check">
                  <input
                  disabled
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="Others"
                   v-model="other"
                  />
                  <label class="form-check-label" for="Others">
                    Others: <span class="">{{ this.Others }}</span>
                  </label>
                </div>
              </div>
            </div>

            <div class="professional-noG profess-box hide" >
              <div class="mt-3">
                <label for="formFile" class="form-label"
                  >Relevant Mentari Service That You Want To Be Involved<span
                    >*</span
                  ></label
                >
                <div class="form-check">
                  <input
                  disabled
                    class="form-check-input"
                    type="checkbox"
                    value="Consultation/Counselling"
                    id="Consultation/Counselling"
                   v-model="Consultation"
                  />
                  <label class="form-check-label" for="Consultation/Counselling">
                    Consultation/Counselling
                  </label>
                </div>
                <div class="form-check">
                  <input
                  disabled
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="Rehabilitation1"
                  />
                  <label class="form-check-label" for="Rehabilitation1">
                    Work-based Rehabilitation
                  </label>
                </div>
                <div class="form-check">
                  <input
                  disabled
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="Psychoeducation1"
                  />
                  <label class="form-check-label" for="Psychoeducation1">
                    Awareness Or Psychoeducation
                  </label>
                </div>
                <div class="form-check">
                  <input
                  disabled
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="Therapy1"
                  />
                  <label class="form-check-label" for="Therapy1">
                    Recreational Therapy
                  </label>
                </div>
                <div class="form-check">
                  <input
                  disabled
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="Others1"
                  />
                  <label class="form-check-label" for="Others1">
                    Others: <input type="text" name="" />
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
              <div class="col-sm-8">
                <div class="row">
                    <div class="col-md-4 mb-3">
                      <label class="form-label">Day</label>
                      <span class="form-control">{{ this.Gavailable_date }}</span>
                    </div>
                    <div class="col-md-4 mb-3">
                      <label class="form-label">Time</label>
                      <span class="form-control">{{ this.Gavailable_time }}</span>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      <!-- volunteerismshow -->

    <div class="areas-involvement" id="outreach-project1show" v-if="Garea_of_involvement=='Outreach Project Collaboration'">
        <h4 class="title-h4">Outreach-Project Collaboration</h4>
        <p>Please Provide a breief project description</p>

        <div class="row mb-3 mt-2">
          <label for="" class="col-sm-4 col-form-label"
            >Project Name<span>*</span></label
          >
          <div class="col-sm-8">
            <span class="form-control">{{ this.Gproject_name }}</span>
          </div>
        </div>
        <!-- row-close -->

        <div class="row mb-3 mt-2">
          <label for="" class="col-sm-4 col-form-label"
            >Project Background<span>*</span></label
          >
          <div class="col-sm-8">
            <span class="form-control">{{ this.Gproject_background }}</span>
          </div>
        </div>
        <!-- row-close -->

        <div class="row mb-3 mt-2">
          <label for="" class="col-sm-4 col-form-label"
            >Project Objectives<span>*</span></label
          >
          <div class="col-sm-8">
            <span class="form-control">{{ this.Gproject_objectives }}</span>
          </div>
        </div>
        <!-- row-close -->

        <div class="row mb-3 mt-2">
          <label for="" class="col-sm-4 col-form-label"
            >Target Audience<span>*</span></label
          >
          <div class="col-sm-8">
            <span class="form-control">{{ this.Gtarget_audience }}</span>
          </div>
        </div>
        <!-- row-close -->

        <div class="row mb-3 mt-2">
          <label for="" class="col-sm-4 col-form-label"
            >Number of Participants<span>*</span></label
          >
          <div class="col-sm-8">
            <span class="form-control">{{ this.Gno_of_paricipants }}</span>
          </div>
        </div>
        <!-- row-close -->

        <div class="row mb-3 mt-2">
          <label for="" class="col-sm-4 col-form-label"
            >Time Frame<span>*</span></label
          >
          <div class="col-sm-8">
            <span class="form-control">{{ this.Gtime_frame }}</span>
          </div>
        </div>
        <!-- row-close -->

        <div class="row mb-3 mt-2">
          <label for="" class="col-sm-4 col-form-label"
            >Estimated Budget<span>*</span></label
          >
          <div class="col-sm-8">
            <span class="form-control">{{ this.Gestimated_budget }}</span>
          </div>
        </div>
        <!-- row-close -->

        <div class="row mb-3 mt-2">
          <label for="" class="col-sm-4 col-form-label"
            >Project Scopes<span>*</span></label
          >
          <div class="col-sm-8">
            <span class="form-control">{{ this.Gproject_scopes }}</span>
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
              disabled
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
              disabled
                class="form-check-input"
                type="radio"
                name="project-location"
                id="project-location-othersG"
                value="others" v-model="Gproject_loaction"
              />
              <label class="form-check-label" for="project-location-othersG"
                >Others</label
              >
            </div>

            <!-- hide-div -->
            <div class="mentari profess-box" v-if="Gproject_loaction=='mentari'">
              <div class="mt-3">
                <select disabled class="form-select" v-model="Gproject_branch">
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

            <div class="project-location-others profess-box" v-if="Gproject_loaction!='mentari'">
              <div class="mt-3">
                <span class="form-control">{{ this.Gother_loaction }}</span>
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
            <span class="form-control">{{ this.Gtarget_outcome }}</span>
          </div>
        </div>
        <!-- row-close -->

        <div class="row mb-3 mt-2">
          <label for="" class="col-sm-4 col-form-label"
            >Any planned follow up projects?<span>*</span></label
          >
          <div class="col-sm-8">
            <span class="form-control">{{ this.Gfollowup_projects }}</span>
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
            <div class="form-check">
                  <input
                  disabled
                    class="form-check-input"
                    type="checkbox"
                    value="Consultation/Counselling"
                    id="Consultation/Counselling"
                   v-model="Consultation"
                  />
                  <label class="form-check-label" for="Consultation/Counselling">
                    Consultation/Counselling
                  </label>
                </div>
            <div class="form-check">
              <input
              disabled
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
              disabled
                class="form-check-input"
                type="checkbox"
                value="Awareness Or Psychoeducation"
                id="Psychoeducation2"  v-model="awareness"
              />
              <label class="form-check-label" for="Psychoeducation2">
                Awareness Or Psychoeducation
              </label>
            </div>
            <div class="form-check">
              <input
              disabled
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
              disabled
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

      <div class="areas-involvement" id="networking1show" v-if="Garea_of_involvement=='Networking Make a Contribution'">
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
            <span class="form-control">{{ this.Gcontribution }}</span>
          </div>
        </div>
        <!-- row-close -->

        <div class="row mb-3 mt-2">
          <label for="" class="col-sm-4 col-form-label"
            >Estimated Budget<span>*</span></label
          >
          <div class="col-sm-8">
            <span class="form-control">{{ this.Gbudget }}</span>
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
              disabled
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
              disabled
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
            <div class="project-location-mentari profess-box" v-if="Gnetwotkproject_loaction=='project-location-mentari'">
              <div class="mt-3">
                <select disabled class="form-select" v-model="Gnetworkbranch">
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

            <div class="project-location-others profess-box" v-if="Gnetwotkproject_loaction!='project-location-mentari'">
              <div class="mt-3">
                <span class="form-control">{{ this.Gnetworkother }}</span>
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
            <span class="form-control">{{ this.Gnetworkno_of_paricipants }}</span>
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
            <div class="form-check">
                  <input
                  disabled
                    class="form-check-input"
                    type="checkbox"
                    value="Consultation/Counselling"
                    id="Consultation/Counselling"
                   v-model="Consultation"
                  />
                  <label class="form-check-label" for="Consultation/Counselling">
                    Consultation/Counselling
                  </label>
                </div>
           <div class="form-check">
              <input
              disabled
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
              disabled
                class="form-check-input"
                type="checkbox"
                value="Awareness Or Psychoeducation"
                id="Psychoeducation2"  v-model="awareness"
              />
              <label class="form-check-label" for="Psychoeducation2">
                Awareness Or Psychoeducation
              </label>
            </div>
            <div class="form-check">
              <input
              disabled
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
              disabled
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

    <div class="d-flex align-items-center mt-4">

  

                </div>
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
  name: "edit-group",
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
      expList:[],
      Gis_agree: 0,
      is_represent_org: 0,
      members_count: "",
      member_background: "",
      is_you_represenative: 0,
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
      screening_mode: 0,
      work: "",
      awareness: "",
      recreational: "",
      other: "",
      Others: "",
      Id:0,
      Consultation:"",
      resume: "",
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    let urlParams = new URLSearchParams(window.location.search);
    this.Id = urlParams.get("id");
    if (this.Id) {
      this.editrecord();
    }
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
    this.GetList();
  },
  methods: {
    async onDownloadFile() {
      const link = document.createElement('a');
      window.open(this.resume, "_blank");
    },
    OnchangeIsrepresent(val) {
      this.is_you_represenative = val;
    },
    OnChangeexperiance(val) {
      this.Gis_voluneering_exp = val;
    },
    Onhealthprofession(val) {
      this.Gis_mental_health_professional = val;
    },
    GselectFile(event) {
      this.Gfile = event.target.files[0];
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
        Authorization: "Bearer " + this.userdetails.access_token,
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
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get("address/list", {
        headers,
      });
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
      if (this.Gstate_id) {
        const response = await this.$axios.post(
          "address/" + this.Gstate_id + "/stateWisePostcodeList",
          { headers }
        );
        if (response.data.code == 200 || response.data.code == "200") {
          this.GCityList = response.data.list;
          this.GPostCodeList = response.data.list;
        } else {
          this.GCityList = [];
          this.GPostCodeList = [];
        }
      }
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
        this.Gname = response.data.list.name;
        this.Gdob = response.data.list.dob;
        this.Gemail = response.data.list.email;
        this.Gphone_number = response.data.list.phone_number;
        this.Gaddress = response.data.list.address;
        if (this.Gaddress) {
          var add = this.Gaddress.split("\n");
          add.forEach((val, index) => {
            if (index == 0) {
              this.Gaddress = val;
            } else {
              this.Gaddress1 = val;
            }
          });
        }
        this.Gpostcode_id = response.data.list.postcode;
        this.Gcity_id = response.data.list.city;
        this.Gstate_id = response.data.list.state;
        this.Geducation_id = response.data.list.education;
        this.Goccupation_sector_id = response.data.list.occupation_sector;
        this.Gbranch_id = response.data.list.branch_id;
        this.Garea_of_involvement = response.data.list.area_of_involvement;
        this.Gis_agree = 1;
        this.Gmentari_services = response.data.list.mentari_services;
        this.is_represent_org = "organization-no";
        this.members_count = response.data.list.members_count;
        this.member_background = response.data.list.member_background;
        this.is_you_represenative = response.data.list.is_you_represenative;
        this.screening_mode = response.data.list.screening_mode;
        if (this.Gmentari_services) {
          var service = this.Gmentari_services.split(",");
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
          this.Gis_voluneering_exp = response.data.list.is_voluneering_exp;
          this.Gis_mental_health_professional =
            response.data.list.is_mental_health_professional;
          this.Gavailable_date = response.data.list.available_date;
          this.Gavailable_time = response.data.list.available_time;
          this.Gexp_details = response.data.list.exp_details;
          this.resume = response.data.list.resume;
          if (this.Gexp_details) {
            this.expList = JSON.parse(this.Gexp_details);
          }
        } else if (
          response.data.list.area_of_involvement ==
          "Outreach Project Collaboration"
        ) {
          this.Gproject_name = response.data.list.project_name;
          this.Gproject_background = response.data.list.project_background;
          this.Gproject_objectives = response.data.list.project_objectives;
          this.Gtarget_audience = response.data.list.target_audience;
          this.Gno_of_paricipants = response.data.list.no_of_paricipants;
          this.Gtime_frame = response.data.list.time_frame;
          this.Gestimated_budget = response.data.list.estimated_budget;
          this.Gproject_scopes = response.data.list.project_scopes;
          this.Gproject_loaction = response.data.list.project_loaction;
          this.Gprojectlocation = response.data.list.project_loaction;
          this.Gtarget_outcome = response.data.list.target_outcome;
          this.Gfollowup_projects = response.data.list.followup_projects;
          this.Gother_loaction = response.data.list.project_loaction_value;
          this.Gproject_branch = response.data.list.project_loaction_value;
        } else if (
          response.data.list.area_of_involvement ==
          "Networking Make a Contribution"
        ) {
          this.Gcontribution = response.data.list.contribution;
          this.Gbudget = response.data.list.budget;
          this.Gnetworkno_of_paricipants = response.data.list.no_of_paricipants;
          this.Gnetwotkproject_loaction = response.data.list.project_loaction;
          this.Gnetwotkproject_loaction_value =
            response.data.list.project_loaction_value;
          this.Gnetworkbranch = response.data.list.project_loaction_value;
          this.Gnetworkbranch1 = response.data.list.project_loaction;
          this.Gnetworkother = response.data.list.project_loaction_value;
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
</style>
