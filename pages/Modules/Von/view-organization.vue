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
             <div class="organization notshow-box">
    <div class="row">
      <div class="col-sm-12">
        <h4 class="title-h4">Organization Background</h4>
      </div>
    </div>

    <!-- <form class="form-padding"> -->
      <div class="row mb-3">
        <label for="" class="col-sm-4 col-form-label"
          >Name of organization or company<span>*</span></label
        >
        <div class="col-sm-8">
          <span class="form-control">{{ this.org_name }}</span>
        </div>
      </div>

      <div class="row mb-3">
        <label for="" class="col-sm-4 col-form-label"
          >Registration Number<span>*</span></label
        >
        <div class="col-sm-8">
          <span class="form-control">{{ this.org_reg_number }}</span>
        </div>
      </div>

      <div class="row mb-3">
        <label for="" class="col-sm-4 col-form-label"
          >Brief description of the company/organization background<span
            >*</span
          ></label
        >
        <div class="col-sm-8">
          <span class="form-control">{{ this.org_desc }}</span>
        </div>
      </div>

      <div class="row mb-3">
        <label for="" class="col-sm-4 col-form-label"
          >Company/Organization Contact Details</label
        >
        <div class="col-sm-8">
          <div class="row">
            <div class="col-sm-6">
              <div class="mb-3">
                <label for="" class="form-label">Email<span>*</span></label>
                <span class="form-control">{{ this.org_email }}</span>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="mb-3">
                <label for="" class="form-label"
                  >Phone Number<span>*</span></label
                >
                <span class="form-control">{{ this.org_phone }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h4 class="title-h4">Representative Background</h4>

      <div class="row mb-3">
        <label for="" class="col-sm-4 col-form-label">Name<span>*</span></label>
        <div class="col-sm-8">
          <span class="form-control">{{ this.Oname }}</span>
        </div>
      </div>

      <div class="row mb-3">
        <label for="" class="col-sm-4 col-form-label"
          >Position in Organization/Company<span>*</span></label
        >
        <div class="col-sm-8">
          <span class="form-control">{{ this.Oposition_in_org }}</span>
        </div>
      </div>

      <div class="row mb-3">
        <label for="" class="col-sm-4 col-form-label"
          >Email<span>*</span></label
        >
        <div class="col-sm-8">
          <span class="form-control">{{ this.Oemail }}</span>
        </div>
      </div>

      <div class="row mb-3">
        <label for="" class="col-sm-4 col-form-label"
          >Phone Number<span>*</span></label
        >
        <div class="col-sm-8">
          <span class="form-control">{{ this.Ophone_number }}</span>
        </div>
      </div>

      <div class="row mb-3">
        <label for="" class="col-sm-4 col-form-label">Address</label>
        <div class="col-sm-8">
          <span class="form-control">{{ this.Oaddress }}</span>
          <br/>
          <span class="form-control">{{ this.Oaddress1 }}</span>
        </div>
      </div>

     <div class="row">
        <div class="col-md-4 mb-3">
          <label class="form-label">State<span>*</span></label>
          <span class="form-control">{{ this.Ostate_id }}</span>
        </div>
        <div class="col-md-4 mb-3">
          <label class="form-label">City<span>*</span></label>
          <span class="form-control">{{ this.Ocity_id }}</span>
        </div>
        <div class="col-md-4 mb-3">
          <label class="form-label">Postcode<span>*</span></label>
          <span class="form-control">{{ this.Opostcode_id }}</span>
        </div>
      </div>

    <div class="row">
        <div class="col-md-6 mb-3">
          <label class="form-label">Highest Education<span>*</span></label>
          <select disabled class="form-select" v-model="Oeducation_id">
            <option value="0">Please Select</option>
            <option
              v-for="ed in OEducationList"
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
          <select disabled class="form-select" v-model="Ooccupation_sector_id">
            <option disabled value="0">Please Select</option>
            <option
              v-for="os in OOccupationList"
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
          <select disabled class="form-select" v-model="Obranch_id">
            <option value="0">Please Select</option>
            <option
              v-for="brn in OBranchList"
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
              id="volunteerism"
              value="Volunteerism"
              v-model="area_of_involvement"
              @change="OnAreas('individual')"
            />
            <label class="form-check-label" for="volunteerism">
              Volunteerism
            </label>
          </div>
          <div class="form-check">
            <input
            disabled
              class="form-check-input"
              type="radio"
              name="involvement"
              id="outreach-project2"
              value="Outreach Project Collaboration"
              v-model="area_of_involvement"
              @change="OnAreas('group')"
            />
            <label class="form-check-label" for="outreach-project2">
              Outreach Project Collaboration
            </label>
          </div>
          <div class="form-check">
            <input
            disabled
              class="form-check-input"
              type="radio"
              name="involvement"
              id="networking2"
              value="Networking Make a Contribution"
              v-model="area_of_involvement"
              @change="OnAreas('org')"
            />
            <label class="form-check-label" for="networking2">
              Networking Make a Contribution
            </label>
          </div>
        </div>
      </div>

      <div class="areas-involvement" id="volunteerismshow" v-if="area_of_involvement == 'Volunteerism'">
        <h4 class="title-h4">Volunteerism</h4>

        <div class="row mb-3 mt-2">
          <label for="" class="col-sm-4 col-form-label">
            Does your organization have any volunteering experience?</label
          >
          <div class="col-sm-8 radio-box">
            <div class="form-check form-check-inline">
              <input
              disabled
                class="form-check-input"
                type="radio"
                name="experience"
                id="experience-yes"
                value="experience-yes"  v-model="Ois_voluneering_exp"
                @change="Onvolexp('y')"

              />
              <label class="form-check-label" for="experience2-yes">Yes</label>
            </div>
            <div class="form-check form-check-inline">
              <input
              disabled
                class="form-check-input"
                type="radio"
                name="experience"
                id="experience-no"
                value="0"  v-model="Ois_voluneering_exp"
                @change="Onvolexp('n')"
              />
              <label class="form-check-label" for="experience2-no">No</label>
            </div>
          </div>
        </div>

        <!-- hide-div -->
        <div class="experience2-yes experi-box" v-if="volexp == 'y'">
           <div class="mt-3">
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

        <div class="row mb-3 mt-2">
          <label for="" class="col-sm-4 col-form-label">
            Does your organization consist of mental health professional?<span
              >*</span
            ></label
          >
          <div class="col-sm-8 professional-box">
            <div class="form-check form-check-inline">
              <input
              disabled
                class="form-check-input"
                type="radio"
                name="professional"
                id="professional-yes"
                value="professional-yes" v-model="Ois_mental_health_professional"
                @change="Onmentalhealth('y')"
              />
              <label class="form-check-label" for="professional-yes"
                >Yes</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
              disabled
                class="form-check-input"
                type="radio"
                name="professional"
                id="professional-no"
                value="professional-no" v-model="Ois_mental_health_professional"
                @change="Onmentalhealth('n')"
              />
              <label class="form-check-label" for="professional-no">No</label>
            </div>

            <!-- hide-div -->
            <div
                        class="professional-yes profess-box"
                        v-if="menhelth == 'y'"
                      >
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
                    value=""
                    id="Rehabilitation" v-model="work"
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
                    id="Psychoeducation" v-model="awareness"
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
                    id="Therapy" v-model="recreational"
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
                    id="Others" v-model="other"
                  />
                  <label class="form-check-label" for="Others">
                    Others: <span class="">{{ this.Others }}</span>
                  </label>
                </div>
              </div>
            </div>

            <div class="professional2-no profess-box hide">
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
                    value=""
                    id="Rehabilitation"
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
                  />
                  <label class="form-check-label" for="Others">
                    Others:<input disabled type="text" name="" />
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
             <div class="col-md-4 mb-3">
              <label class="form-label">Day</label>
                <span class="form-control">{{ this.Oavailable_date }}</span>
              </div>
              <div class="col-md-4 mb-3">
                <label class="form-label">Time</label>
                <span class="form-control">{{ this.Oavailable_time }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- volunteerismshow -->

      <div class="areas-involvement" id="outreach-project2show" v-if="area_of_involvement == 'Outreach Project Collaboration'">
        <h4 class="title-h4">Outreach-Project Collaboration</h4>
        <p>Please Provide a brief project description</p>

         <div class="row mb-3 mt-2">
          <label for="" class="col-sm-4 col-form-label"
            >Project Name<span>*</span></label
          >
          <div class="col-sm-8">
            <input disabled type="text" class="form-control" name="" v-model="Oproject_name" />
          </div>
        </div>
        <!-- row-close -->

        <div class="row mb-3 mt-2">
          <label for="" class="col-sm-4 col-form-label"
            >Project Background<span>*</span></label
          >
          <div class="col-sm-8">
            <textarea disabled class="form-control textarea" rows="3" v-model="Oproject_background"></textarea>
          </div>
        </div>
        <!-- row-close -->

        <div class="row mb-3 mt-2">
          <label for="" class="col-sm-4 col-form-label"
            >Project Objectives<span>*</span></label
          >
          <div class="col-sm-8">
            <textarea disabled class="form-control textarea" rows="3" v-model="Oproject_objectives"></textarea>
          </div>
        </div>
        <!-- row-close -->

        <div class="row mb-3 mt-2">
          <label for="" class="col-sm-4 col-form-label"
            >Target Audience<span>*</span></label
          >
          <div class="col-sm-8">
            <input disabled type="text" class="form-control" name="" v-model="Otarget_audience"/>
          </div>
        </div>
        <!-- row-close -->

        <div class="row mb-3 mt-2">
          <label for="" class="col-sm-4 col-form-label"
            >Number of Participants<span>*</span></label
          >
          <div class="col-sm-8">
            <input disabled type="number" class="form-control" name="" v-model="Ono_of_paricipants"/>
          </div>
        </div>
        <!-- row-close -->

        <div class="row mb-3 mt-2">
          <label for="" class="col-sm-4 col-form-label"
            >Time Frame<span>*</span></label
          >
          <div class="col-sm-8">
            <input disabled type="text" class="form-control" name="" v-model="Otime_frame"/>
          </div>
        </div>
        <!-- row-close -->

        <div class="row mb-3 mt-2">
          <label for="" class="col-sm-4 col-form-label"
            >Estimated Budget<span>*</span></label
          >
          <div class="col-sm-8">
            <input disabled type="number" class="form-control" name="" v-model="Oestimated_budget"/>
          </div>
        </div>
        <!-- row-close -->

        <div class="row mb-3 mt-2">
          <label for="" class="col-sm-4 col-form-label"
            >Project Scopes<span>*</span></label
          >
          <div class="col-sm-8">
            <textarea disabled class="form-control textarea" rows="3" v-model="Oproject_scopes"></textarea>
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
                id="location-mentari"
                value="location-mentari" v-model="Oproject_loaction"
              />
              <label class="form-check-label" for="location-mentari"
                >Mentari</label
              >
            </div>

            <div class="form-check form-check-inline">
              <input
              disabled
                class="form-check-input"
                type="radio"
                name="project-location"
                id="location-others1"
                value="location-others" v-model="Oproject_loaction"
              />
              <label class="form-check-label" for="location-others1"
                >Others</label
              >
            </div>

            <!-- hide-div -->
            <div class="location-mentari profess-box hide" v-if="Oproject_loaction=='location-mentari'">
              <div class="mt-3">
              <select disabled class="form-select" v-model="Oproject_branch">
                  <option value="">Please Select</option>
            <option
              v-for="brn in OBranchList"
              v-bind:key="brn.hospital_branch_name"
              v-bind:value="brn.hospital_branch_name"
            >
              {{ brn.hospital_branch_name }}
            </option>
                </select>
              </div>
            </div>

            <div class="location-others profess-box" v-if="Oproject_loaction!=='location-mentari'">
              <div class="mt-3">
                <span class="form-control">{{ this.Oother_loaction }}</span>
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
            <textarea disabled class="form-control textarea" rows="3" v-model="Otarget_outcome"></textarea>
          </div>
        </div>
        <!-- row-close -->

        <div class="row mb-3 mt-2">
          <label for="" class="col-sm-4 col-form-label"
            >Any planned follow up projects?<span>*</span></label
          >
          <div class="col-sm-8">
            <textarea disabled class="form-control textarea" rows="3" v-model="Ofollowup_projects"></textarea>
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
                id="Psychoeducation2" v-model="awareness"
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
                id="Therapy2" v-model="recreational"
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
                id="Others2" v-model="Others"
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

      <div class="areas-involvement" id="networking2show"
      v-if="area_of_involvement == 'Networking Make a Contribution'">
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
            <textarea disabled class="form-control textarea" rows="3" v-model="Ocontribution"></textarea>
          </div>
        </div>
        <!-- row-close -->

        <div class="row mb-3 mt-2">
          <label for="" class="col-sm-4 col-form-label"
            >Estimated Budget<span>*</span></label
          >
          <div class="col-sm-8">
            <input disabled type="number" class="form-control" name="" v-model="Obudget" />
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
                id="project-location-mentari1"
                value="project-location-mentari" v-model="Onetwotkproject_loaction"
              />
              <label class="form-check-label" for="project-location-mentari1"
                >Mentari</label
              >
            </div>

            <div class="form-check form-check-inline" >
              <input
              disabled
                class="form-check-input"
                type="radio"
                name="project-location"
                id="project-location-others1"
                value="project-location-others" v-model="Onetwotkproject_loaction"
              />
              <label class="form-check-label" for="project-location-others1"
                >Others</label
              >
            </div>

            <!-- hide-div -->
            <div class="project-location-mentari profess-box hide" v-if="Onetwotkproject_loaction=='project-location-mentari'">
              <div class="mt-3">
                <select disabled class="form-select" v-model="Onetworkbranch">
                  <option value="">Please Select</option>
            <option
              v-for="brn in OBranchList"
              v-bind:key="brn.hospital_branch_name"
              v-bind:value="brn.hospital_branch_name"
            >
              {{ brn.hospital_branch_name }}
            </option>
                </select>
              </div>
            </div>

            <div class="project-location-others profess-box"  v-if="Onetwotkproject_loaction!='project-location-mentari'">
              <div class="mt-3">
                <span class="form-control">{{ this.Onetworkother }}</span>
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
            <input disabled type="number" class="form-control" name="" v-model="Onetworkno_of_paricipants" />
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
                value=""
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
                value=""
                id="Psychoeducation2" v-model="awareness"
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
                value=""
                id="Therapy2" v-model="recreational"
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
                value=""
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
<p v-if="errors.length">
<ul>
        <li style="color:red"  v-for='err in errors'
    :key='err' >
          {{ err }}
        </li>
      </ul>
        </p>

      <div class="d-flex align-items-center mt-4">

                  <!-- <div class="row col-sm-9">
                    <label for="" class="col-sm-4 col-form-label"
                      >Screening Done</label
                    >
                    <div class="col-sm-8">
                      <div class="form-check form-check-inline">
                        <input
                        disabled
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
                        disabled
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
                  </div> -->
                </div>
    <!-- </form> -->
  </div>
  <div class="d-flex mt-4 btn-mb">
            <button @click="back" type="button" class="btn btn-primary btn-text">
                <i class="fa fa-step-backward"></i> Back
            </button>
          </div>
          </div>
        </div>
      </main>
      <von-footer></von-footer>
    </div>
  </div>
</template>
<script>
export default {
  name: "edit-organization",
  data() {
    return {
      userdetails: null,
      errors: [],
      loader: false,
      sections: "",
      OStateList: [],
      OCityList: [],
      OPostCodeList: [],
      OEducationList: [],
      OOccupationList: [],
      OBranchList: [],
      Ois_agree: 0,
      org_name: "",
      org_reg_number: "",
      org_desc: "",
      org_email: "",
      org_phone: "",
      Oname: "",
      Oposition_in_org: "",
      Odob: "",
      Oemail: "",
      Ophone_number: "",
      Oaddress: "",
      Oaddress1: "",
      Opostcode_id: 0,
      Ocity_id: 0,
      Ostate_id: 0,
      Oeducation_id: 0,
      Ooccupation_sector_id: 0,
      Obranch_id: 0,
      area_of_involvement: "",
      Ois_voluneering_exp: 0,
      Oexp_details: "",
      Ois_mental_health_professional: 0,
      Omentari_services: "",
      Oavailable_date: "",
      Oavailable_time: "",
      Ofile: null,
      OIsvalid: false,
      // OVolOthers: "",
      OYear: "",
      OLocation: "",
      ODescription: "",
      Oproject_name: "",
      Oproject_background: "",
      Oproject_objectives: "",
      Omentari_services: "",
      Otarget_audience: "",
      Ono_of_paricipants: 0,
      Otime_frame: "",
      Oestimated_budget: 0,
      Oproject_scopes: "",
      Oproject_loaction: "",
      Oproject_loaction_value: "",
      Otarget_outcome: "",
      Ofollowup_projects: 0,
      Oother_loaction: "",
      Oproject_branch: "",
      // Ooutreachother: "",
      Ooutreachmentari_services: "",
      Onetworkmentari_services: "",
      Ocontribution: "",
      Obudget: "",
      Onetworkno_of_paricipants: 0,
      Onetwotkproject_loaction: "",
      Onetwotkproject_loaction_value: "",
      Onetworkbranch: "",
      Onetworkother: "",
      // Onetworkserviceother: "",
      work: "",
      awareness: "",
      recreational: "",
      Others: "",
      Id: 0,
      Type:'',
      screening_mode: 0,
      work: "",
      awareness: "",
      recreational: "",
      other: "",
      resume: "",
      expList: [],
      volexp: "",
      menhelth: "",
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    let urlParams = new URLSearchParams(window.location.search);
    this.Id = urlParams.get("id");
    this.Type = urlParams.get("type");
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
    Onvolexp(val) {
      this.volexp = val;
    },
    Onmentalhealth(val) {
      this.menhelth = val;
    },
    OselectFile(event) {
      this.Ofile = event.target.files[0];
    },
    OOnreliventmentari(val) {
      if (this.Omentari_services) {
        this.Omentari_services = this.Omentari_services + "," + val;
      } else {
        this.Omentari_services = val;
      }
    },
    OOnrelevatedmentari(val) {
      if (this.Ooutreachmentari_services) {
        this.Ooutreachmentari_services =
          this.Ooutreachmentari_services + "," + val;
      } else {
        this.Ooutreachmentari_services = val;
      }
    },
    OOnnetworkrelevatedmentari(val) {
      if (this.Onetworkmentari_services) {
        this.Onetworkmentari_services =
          this.Onetworkmentari_services + "," + val;
      } else {
        this.Onetworkmentari_services = val;
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
        this.OCityList = response.data.list;
        this.OPostCodeList = response.data.list;
      } else {
        this.OCityList = [];
        this.OPostCodeList = [];
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
        this.OStateList = response.data.list;
      } else {
        this.OStateList = [];
      }
      const response1 = await this.$axios.get(
        "general-setting/list?section=" + "education-level",
        { headers }
      );
      if (response1.data.code == 200 || response1.data.code == "200") {
        this.OEducationList = response1.data.list;
      } else {
        this.OEducationList = [];
      }
      const response2 = await this.$axios.get(
        "general-setting/list?section=" + "occupation-sector",
        { headers }
      );
      if (response2.data.code == 200 || response2.data.code == "200") {
        this.OOccupationList = response2.data.list;
      } else {
        this.OOccupationList = [];
      }
      const response3 = await this.$axios.get("hospital/branch-list", {
        headers,
      });
      if (response3.data.code == 200 || response3.data.code == "200") {
        this.OBranchList = response3.data.list;
      } else {
        this.OBranchList = [];
      }
      if (this.Ostate_id) {
        const response = await this.$axios.post(
          "address/" + this.Ostate_id + "/stateWisePostcodeList",
          { headers }
        );
        if (response.data.code == 200 || response.data.code == "200") {
          this.OCityList = response.data.list;
          this.OPostCodeList = response.data.list;
        } else {
          this.OCityList = [];
          this.OPostCodeList = [];
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
          type: this.Type

        },
        { headers }
      );
      console.log("get detail", response.data);
      if (response.data.code == 200) {
        this.org_name = response.data.list.org_name,
        this.org_reg_number = response.data.list.org_reg_number,
        this.org_desc = response.data.list.org_desc,
        this.org_email = response.data.list.org_email,
        this.org_phone = response.data.list.org_phone,
        this.Oname = response.data.list.name;
        this.Odob = response.data.list.dob;
        this.Oemail = response.data.list.email;
        this.Ophone_number = response.data.list.phone_number;
        this.Oaddress = response.data.list.address;
        if (this.Oaddress) {
          var add = this.Oaddress.split("\n");
          add.forEach((val, index) => {
            if (index == 0) {
              this.Oaddress = val;
            } else {
              this.Oaddress1 = val;
            }
          });
        }
        this.Opostcode_id = response.data.list.postcode;
        this.Ocity_id = response.data.list.city;
        this.Ostate_id = response.data.list.state;
        this.Oeducation_id = response.data.list.education;
        this.Ooccupation_sector_id = response.data.list.occupation_sector;
        this.Obranch_id = response.data.list.branch_id;
        this.area_of_involvement = response.data.list.area_of_involvement;
        this.Ois_agree = 1;
        this.Omentari_services = response.data.list.mentari_services;
        this.Oposition_in_org = response.data.list.position_in_org;
       this.Oexp_details = response.data.list.exp_details;
      if (this.Oexp_details) {
            this.expList = JSON.parse(this.Oexp_details);
            console.log("my array", this.expList);
          }
        if (this.Omentari_services) {
          var service = this.Omentari_services.split(",");
          service.forEach((val) => {
            if (val == "Work-based Rehabilitation") {
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
          this.Oavailable_date = response.data.list.available_date;
          this.Oavailable_time = response.data.list.available_time;
          this.Ois_voluneering_exp = response.data.list.is_voluneering_exp;
          this.Ois_mental_health_professional =
            response.data.list.is_mental_health_professional;
          if (this.Ois_mental_health_professional) {
            this.Ois_mental_health_professional = "professional-yes";
            this.menhelth = "y";
            this.resume = response.data.list.resume;
          } else {
            this.Ois_mental_health_professional = "professional-no";
            this.menhelth = "n";
          }
          if (this.Ois_voluneering_exp) {
            this.Ois_voluneering_exp = "experience-yes";
            this.volexp = "y";
          }
          this.section = response.data.list.section;
        } else if (
          response.data.list.area_of_involvement ==
          "Outreach Project Collaboration"
        ) {
          this.Oproject_name = response.data.list.project_name;
          this.Oproject_background = response.data.list.project_background;
          this.Oproject_objectives = response.data.list.project_objectives;
          this.Otarget_audience = response.data.list.target_audience;
          this.Ono_of_paricipants = response.data.list.no_of_paricipants;
          this.Otime_frame = response.data.list.time_frame;
          this.Oestimated_budget = response.data.list.estimated_budget;
          this.Oproject_scopes = response.data.list.project_scopes;
          this.Oproject_loaction = response.data.list.project_loaction;
          this.Oproject_loaction_value = response.data.list.project_loaction_value;
          this.Otarget_outcome = response.data.list.target_outcome;
          this.Ofollowup_projects = response.data.list.followup_projects;
          this.Oother_loaction = response.data.list.project_loaction_value;
          this.Oproject_branch = response.data.list.project_loaction_value;
        } else if (
          response.data.list.area_of_involvement ==
          "Networking Make a Contribution"
        ) {
          this.Ocontribution = response.data.list.contribution;
          this.Obudget = response.data.list.budget;
          this.Onetworkno_of_paricipants = response.data.list.no_of_paricipants;
          this.Onetwotkproject_loaction = response.data.list.project_loaction;
          this.Onetwotkproject_loaction_value =
            response.data.list.project_loaction_value;
          this.Onetworkbranch = response.data.list.project_loaction_value;
          // this.Onetworkbranch1 = response.data.list.project_loaction;
          this.Onetworkother = response.data.list.project_loaction_value;
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
    OnAreas(val) {
      this.section = val;
    },
    Onnetworkchange(val) {
      this.networkbranch1 = val;
    },
    back() {
            this.$router.go(-1);
        },
  },
};
</script>
<style scoped>
.hide {
  display: none;
}
</style>
