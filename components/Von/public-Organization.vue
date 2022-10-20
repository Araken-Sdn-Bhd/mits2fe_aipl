<template>
  <div class="organization notshow-box hide">
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
          <input type="txet" class="form-control" id="" v-model="org_name"/>
        </div>
      </div>

      <div class="row mb-3">
        <label for="" class="col-sm-4 col-form-label"
          >Registration Number<span>*</span></label
        >
        <div class="col-sm-8">
          <input type="txet" class="form-control" id="" v-model="org_reg_number"/>
        </div>
      </div>

      <div class="row mb-3">
        <label for="" class="col-sm-4 col-form-label"
          >Brief description of the company/organization background<span
            >*</span
          ></label
        >
        <div class="col-sm-8">
          <textarea class="form-control textarea" rows="3" v-model="org_desc"></textarea>
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
                <input type="email" class="form-control" v-model="org_email"/>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="mb-3">
                <label for="" class="form-label"
                  >Phone Number<span>*</span></label
                >
                <input type="text" class="form-control" v-model="org_phone"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h4 class="title-h4">Representative Background</h4>

      <div class="row mb-3">
        <label for="" class="col-sm-4 col-form-label">Name<span>*</span></label>
        <div class="col-sm-8">
          <input type="txet" class="form-control" id="" v-model="Oname" />
        </div>
      </div>

      <div class="row mb-3">
        <label for="" class="col-sm-4 col-form-label"
          >Position in Organization/Company<span>*</span></label
        >
        <div class="col-sm-8">
          <input type="text" class="form-control" id="" v-model="Oposition_in_org" />
        </div>
      </div>

      <div class="row mb-3">
        <label for="" class="col-sm-4 col-form-label"
          >Email<span>*</span></label
        >
        <div class="col-sm-8">
          <input type="email" class="form-control" id="" v-model="Oemail"/>
        </div>
      </div>

      <div class="row mb-3">
        <label for="" class="col-sm-4 col-form-label"
          >Phone Number<span>*</span></label
        >
        <div class="col-sm-8">
          <input type="txet" class="form-control" id="" v-model="Ophone_number"/>
        </div>
      </div>

      <div class="row mb-3">
        <label for="" class="col-sm-4 col-form-label">Address</label>
        <div class="col-sm-8">
          <input type="txet" class="form-control" id="" v-model="Oaddress"/>
          <input type="txet" class="form-control mt-2" id="" v-model="Oaddress1"/>
        </div>
      </div>

     <div class="row">
        <div class="col-md-4 mb-3">
          <label class="form-label">State<span>*</span></label>
          <select
            class="form-select"
            @change="getCityList($event)"
            v-model="Ostate_id"
          >
            <option value="0">Please Select</option>
            <option
              v-for="state in OStateList"
              v-bind:key="state.id"
              v-bind:value="state.id"
            >
              {{ state.state_name }}
            </option>
          </select>
        </div>
        <div class="col-md-4 mb-3">
          <label class="form-label">City<span>*</span></label>
          <select class="form-select" v-model="Ocity_id" @change="getPostcodeList($event)">
            <option value="0">Please Select</option>
            <option
              v-for="ctl in OCityList"
              v-bind:key="ctl.city_name"
              v-bind:value="ctl.city_name"
            >
              {{ ctl.city_name }}
            </option>
          </select>
        </div>
        <div class="col-md-4 mb-3">
          <label class="form-label">Postcode<span>*</span></label>
          <select class="form-select" v-model="Opostcode_id">
            <option value="0">Please Select</option>
            <option
              v-for="pst in OPostCodeList"
              v-bind:key="pst.id"
              v-bind:value="pst.id"
            >
              {{ pst.postcode }}
            </option>
          </select>
        </div>
      </div>

    <div class="row">
        <div class="col-md-6 mb-3">
          <label class="form-label">Highest Education<span>*</span></label>
          <select class="form-select" v-model="Oeducation_id">
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
          <select class="form-select" v-model="Ooccupation_sector_id">
            <option value="0">Please Select</option>
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
          <select class="form-select" v-model="Obranch_id">
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
              class="form-check-input"
              type="radio"
              name="involvement"
              id="volunteerism2"  value="Volunteerism" v-model="Oarea_of_involvement"
            />
            <label class="form-check-label" for="volunteerism2">
              Volunteerism
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="involvement"
              id="outreach-project2" value="Outreach Project Collaboration" v-model="Oarea_of_involvement"
            />
            <label class="form-check-label" for="outreach-project2">
              Outreach Project Collaboration
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="involvement"
              id="networking2" value="Networking Make a Contribution" v-model="Oarea_of_involvement"
            />
            <label class="form-check-label" for="networking2">
              Networking Make a Contribution
            </label>
          </div>
        </div>
      </div>

      <div class="areas-involvement hide" id="volunteerism2show">
        <h4 class="title-h4">Volunteerism</h4>

        <div class="row mb-3 mt-2">
          <label for="" class="col-sm-4 col-form-label">
            Does your organization have any volunteering experience?</label
          >
          <div class="col-sm-8 radio-box">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="experience2"
                id="experience2-yes"
                value="experience2-yes"  v-model="Ois_voluneering_exp"
              />
              <label class="form-check-label" for="experience2-yes">Yes</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="experience2"
                id="experience2-no"
                value="option2"  v-model="Ois_voluneering_exp"
              />
              <label class="form-check-label" for="experience2-no">No</label>
            </div>
          </div>
        </div>

        <!-- hide-div -->
        <div class="experience2-yes experi-box hide">
          <div class="mt-3">
            <table class="note" style="width: 100%" id="orgvolexp">
              <thead>
                <tr>
                  <th width="100px">YEAR</th>
                  <th>Location</th>
                  <th>Brief Description of Activities</th>
                  <th></th>
                </tr>
              </thead>
               <tbody class="orgoptionBox">
                     <tr class="orgblock">
                  <td>
                    <input type="text" class="form-control orgyear" name=""  />
                  </td>
                  <td>
                    <input type="text" class="form-control orglocation" name=""  />
                  </td>
                  <td>
                    <input type="text" class="form-control orgactivity" name="" />
                  </td>
                  <td>
                    <a class="orgadd-td"><i class="far fa-plus"></i></a>
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
                class="form-check-input"
                type="radio"
                name="professional2"
                id="professional2-yes"
                value="professional2-yes" v-model="Ois_mental_health_professional"
              />
              <label class="form-check-label" for="professional2-yes"
                >Yes</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="professional2"
                id="professional2-no"
                value="professional2-no" v-model="Ois_mental_health_professional"
              />
              <label class="form-check-label" for="professional2-no">No</label>
            </div>

            <!-- hide-div -->
            <div class="professional2-yes profess-box hide">
              <div class="mt-3">
                <label for="formFile" class="form-label"
                  >Please Attach Your Latest Resume<span>*</span></label
                >
                <input class="form-control" type="file" id="formFile" @change="OselectFile" />
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
                    @click="OOnreliventmentari('Consultation/Counselling')"
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
                    id="Rehabilitation" @click="OOnreliventmentari('Work-based Rehabilitation')"
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
                    id="Psychoeducation" @click="OOnreliventmentari('Awareness Or Psychoeducation')"
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
                    id="Therapy" @click="OOnreliventmentari('Recreational Therapy')"
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
                    id="Others" @click="OOnreliventmentari('Others')"
                  />
                  <label class="form-check-label" for="Others">
                    Others:<input type="text" name="" v-model="OVolOthers"/>
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
                <!-- <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="Rehabilitation"
                    @click="OOnreliventmentari('Consultation/Counselling')"
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
                    id="Rehabilitation" @click="OOnreliventmentari('Work-based Rehabilitation')"
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
                    id="Psychoeducation" @click="OOnreliventmentari('Awareness Or Psychoeducation')"
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
                    id="Therapy" @click="OOnreliventmentari('Recreational Therapy')"
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
                    id="Others" @click="OOnreliventmentari('Others')"
                  />
                  <label class="form-check-label" for="Others">
                    Others:<input type="text" name="" v-model="OVolOthers"/>
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
                <select class="form-select" v-model="Oavailable_date">
                  <option value="">Select Day</option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                </select>
              </div>
              <div class="col-sm-6">
                 <select class="form-select" v-model="Oavailable_time">
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

      <div class="areas-involvement hide" id="outreach-project2show">
        <h4 class="title-h4">Outreach-Project Collaboration</h4>
        <p>Please Provide a breief project description</p>

         <div class="row mb-3 mt-2">
          <label for="" class="col-sm-4 col-form-label"
            >Project Name<span>*</span></label
          >
          <div class="col-sm-8">
            <input type="text" class="form-control" name="" v-model="Oproject_name" />
          </div>
        </div>
        <!-- row-close -->

        <div class="row mb-3 mt-2">
          <label for="" class="col-sm-4 col-form-label"
            >Project Background<span>*</span></label
          >
          <div class="col-sm-8">
            <textarea class="form-control textarea" rows="3" v-model="Oproject_background"></textarea>
          </div>
        </div>
        <!-- row-close -->

        <div class="row mb-3 mt-2">
          <label for="" class="col-sm-4 col-form-label"
            >Project Objectives<span>*</span></label
          >
          <div class="col-sm-8">
            <textarea class="form-control textarea" rows="3" v-model="Oproject_objectives"></textarea>
          </div>
        </div>
        <!-- row-close -->

        <div class="row mb-3 mt-2">
          <label for="" class="col-sm-4 col-form-label"
            >Target Audience<span>*</span></label
          >
          <div class="col-sm-8">
            <input type="text" class="form-control" name="" v-model="Otarget_audience"/>
          </div>
        </div>
        <!-- row-close -->

        <div class="row mb-3 mt-2">
          <label for="" class="col-sm-4 col-form-label"
            >Number of Participants<span>*</span></label
          >
          <div class="col-sm-8">
            <input type="number" class="form-control" name="" v-model="Ono_of_paricipants"/>
          </div>
        </div>
        <!-- row-close -->

        <div class="row mb-3 mt-2">
          <label for="" class="col-sm-4 col-form-label"
            >Time Frame<span>*</span></label
          >
          <div class="col-sm-8">
            <input type="text" class="form-control" name="" v-model="Otime_frame"/>
          </div>
        </div>
        <!-- row-close -->

        <div class="row mb-3 mt-2">
          <label for="" class="col-sm-4 col-form-label"
            >Estimated Budget<span>*</span></label
          >
          <div class="col-sm-8">
            <input type="number" class="form-control" name="" v-model="Oestimated_budget"/>
          </div>
        </div>
        <!-- row-close -->

        <div class="row mb-3 mt-2">
          <label for="" class="col-sm-4 col-form-label"
            >Project Scopes<span>*</span></label
          >
          <div class="col-sm-8">
            <textarea class="form-control textarea" rows="3" v-model="Oproject_scopes"></textarea>
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
                id="location-mentari"
                value="location-mentari" v-model="Oproject_loaction"
              />
              <label class="form-check-label" for="location-mentari"
                >Mentari</label
              >
            </div>

            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="project-location"
                id="location-others"
                value="location-others" v-model="Oproject_loaction"
              />
              <label class="form-check-label" for="location-others"
                >Others</label
              >
            </div>

            <!-- hide-div -->
            <div class="location-mentari profess-box hide">
              <div class="mt-3">
              <select class="form-select" v-model="Oproject_branch">
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

            <div class="location-others profess-box hide">
              <div class="mt-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Please Specify" v-model="Oother_loaction"
                  name=""
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
            <textarea class="form-control textarea" rows="3" v-model="Otarget_outcome"></textarea>
          </div>
        </div>
        <!-- row-close -->

        <div class="row mb-3 mt-2">
          <label for="" class="col-sm-4 col-form-label"
            >Any planned follow up projects?<span>*</span></label
          >
          <div class="col-sm-8">
            <textarea class="form-control textarea" rows="3" v-model="Ofollowup_projects"></textarea>
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
                    @click="OOnrelevatedmentari('Consultation/Counselling')"
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
                id="Rehabilitation2" @change="OOnrelevatedmentari('Work-based Rehabilitation')"
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
                id="Psychoeducation2" @change="OOnrelevatedmentari('Awareness Or Psychoeducation')"
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
                id="Therapy2" @change="OOnrelevatedmentari('Recreational Therapy')"
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
                id="Others2" @change="OOnrelevatedmentari('Others')"
              />
              <label class="form-check-label" for="Others2">
                Others: <input type="text" name=""  v-model="Ooutreachother"/>
              </label>
            </div>
          </div>
        </div>
        <!-- row-close -->
      </div>

      <!-- outreach-projectshow -->

      <div class="areas-involvement hide" id="networking2show">
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
            <textarea class="form-control textarea" rows="3" v-model="Ocontribution"></textarea>
          </div>
        </div>
        <!-- row-close -->

        <div class="row mb-3 mt-2">
          <label for="" class="col-sm-4 col-form-label"
            >Estimated Budget<span>*</span></label
          >
          <div class="col-sm-8">
            <input type="number" class="form-control" name="" v-model="Obudget" />
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
                id="project-location-mentari1"
                value="project-location-mentari" v-model="Onetwotkproject_loaction"
              />
              <label class="form-check-label" for="project-location-mentari1"
                >Mentari</label
              >
            </div>

            <div class="form-check form-check-inline">
              <input
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
            <div class="project-location-mentari profess-box hide">
              <div class="mt-3">
                <select class="form-select" v-model="Onetworkbranch">
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

            <div class="project-location-others profess-box hide">
              <div class="mt-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Please Specify"
                  name="" v-model="Onetworkother"
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
            <input type="number" class="form-control" name="" v-model="Onetworkno_of_paricipants" />
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
                    @click="OOnnetworkrelevatedmentari('Consultation/Counselling')"
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
                id="Rehabilitation2" @click="OOnnetworkrelevatedmentari('Work-based Rehabilitation')"
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
                id="Psychoeducation2" @click="OOnnetworkrelevatedmentari('Awareness Or Psychoeducation')"
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
                id="Therapy2" @click="OOnnetworkrelevatedmentari('Recreational Therapy')"
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
                id="Others2" @click="OOnnetworkrelevatedmentari('Other')"
              />
              <label class="form-check-label" for="Others2">
                Others: <input type="text" name="" v-model="Onetworkserviceother"/>
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
      <div class="d-flex align-items-center">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck12"  v-model="Ois_agree" />
          <label class="form-check-label" for="gridCheck12">
            I agree to the terms and condition<span>*</span>
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
  name: "Organization",
  data() {
    return {
      // userdetails: null,
      errors: [],
      loader: false,
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
      //VOLUNTEEM
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
      Oarea_of_involvement: "",
      Ois_voluneering_exp: 0,
      Oexp_details: "",
      Ois_mental_health_professional: 0,
      Omentari_services: "",
      Oavailable_date: "",
      Oavailable_time: "",
      Ofile: null,
      OIsvalid: false,
      OVolOthers: "",
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
      Ooutreachother: "",
      Ooutreachmentari_services: "",
      Onetworkmentari_services: "",
      Ocontribution: "",
      Obudget: "",
      Onetworkno_of_paricipants: 0,
      Onetwotkproject_loaction: "",
      Onetwotkproject_loaction_value: "",
      Onetworkbranch: "",
      Onetworkother: "",
      Onetworkserviceother: "",
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
    });
    $(".orgadd-td").click(function (i) {
      $(".orgblock:last").after(
        '<tr class="orgblock"> <td> <input type="text" class="form-control orgyear" name="" /></td><td><input type="text" class="form-control orglocation" name=""  /></td><td><input type="text" class="form-control orgactivity" name="" /></td> <td> <span class="remove"><i class="fal fa-times"></i></span></td></tr>'
      );
    });
    $(".orgoptionBox").on("click", ".remove", function () {
      $(this).closest(".orgblock").remove();
    });
    this.GetList();
    this.GetUserIpAddress();
  },
  methods: {
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

    async getCityList(event) {
      const headers = {
        // Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "address/" + event.target.value + "/getCityList",
        { headers }
      );
      if (response.data.code == 200 || response.data.code == "200") {
        this.OCityList = response.data.list;
        this.OPostCodeList = [];
      } else {
        this.OCityList = [];
        this.OPostCodeList = [];
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
        this.OPostCodeList = response.data.list;
      } else {
        this.OPostCodeList = [];
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
        this.OCityList = response.data.list;
        this.OPostCodeList = response.data.list;
      } else {
        this.OCityList = [];
        this.OPostCodeList = [];
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

      if (response.data.code == 200 || response.data.code == "200") {
        this.OStateList = response.data.list;
        console.log('my stat33org',this.OStateList);
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
    },
    OnSubmit() {
      this.errors = [];
      if (this.Ois_agree) {
        if (this.Oarea_of_involvement == "Volunteerism") {
          this.OnOrganizationVolunteerism();
        } else if (
          this.Oarea_of_involvement == "Outreach Project Collaboration"
        ) {
          this.OnOrganizationOutreachProjectCollaboration();
        } else if (
          this.Oarea_of_involvement == "Networking Make a Contribution"
        ) {
          this.OnOrganizationNetworkingMakeaContribution();
        } else {
          this.errors.push("Please select Areas of Involvement");
        }
      } else {
        this.errors.push("Please agree to the terms and condition");
      }
    },
    async OnOrganizationVolunteerism() {
      try {
        var explist = [];
        $("table#orgvolexp > tbody > tr").each(function (i) {
          var obj = {};
          obj.year = $('td input[type="text"].orgyear', this).val();
          obj.location = $('td input[type="text"].orglocation', this).val();
          obj.activity = $('td input[type="text"].orgactivity', this).val();
          explist.push(obj);
        });
        this.OIsvalid = true;
        if (!this.org_name) {
          this.errors.push("Name of organization or company is required.");
        }
        if (!this.org_reg_number) {
          this.errors.push("Registration Number is required.");
        }
        if (!this.org_desc) {
          this.errors.push("company/organization background is required.");
        }
        if (!this.org_email) {
          this.errors.push("Company Email is required.");
        }
        if (!this.org_phone) {
          this.errors.push("Company Phone Number is required.");
        }
        if (!this.Oname) {
          this.errors.push("Name is required.");
        }
        // if (!this.Odob) {
        //   this.errors.push("Date Of Birth is required.");
        // }
        if (!this.Oposition_in_org) {
          this.errors.push("Position in Organization/Company is required.");
        }
        if (!this.Oemail) {
          this.errors.push("Email is required.");
        }
        if (!this.Ophone_number) {
          this.errors.push("Phone Number is required.");
        }
        if (!this.Oaddress) {
          this.errors.push("Address  is required.");
        }
        if (!this.Ostate_id) {
          this.errors.push("State is required.");
        }
        if (!this.Ocity_id) {
          this.errors.push("City is required.");
        }
        if (!this.Opostcode_id) {
          this.errors.push("Postcode is required.");
        }
        if (!this.Oeducation_id) {
          this.errors.push("Highest Education is required.");
        }
        if (!this.Ooccupation_sector_id) {
          this.errors.push("Current Occupation Sector is required.");
        }
        if (!this.Obranch_id) {
          this.errors.push("Mentari Branch is required.");
        }
        if (!this.Oarea_of_involvement) {
          this.errors.push("Areas of Involvement is required.");
        }
        if (!this.Ois_voluneering_exp) {
          this.errors.push(
            "Does your organization have any volunteering experience is required."
          );
        }
        if (!this.Ois_mental_health_professional) {
          this.errors.push(
            "Does your organization consist of mental health professional is required."
          );
        }
        // if (this.Ois_voluneering_exp == "experience2-yes") {
        //   if (!this.OYear) {
        //     this.errors.push("Organization year is required.");
        //     this.OIsvalid = false;
        //   }
        //   if (!this.OLocation) {
        //     this.errors.push("Organization Location is required.");
        //     this.OIsvalid = false;
        //   }
        //   if (!this.ODescription) {
        //     this.errors.push("Organization Description is required.");
        //     this.OIsvalid = false;
        //   }
        // }
        if (this.Ois_mental_health_professional == "professional2-yes") {
          if (!this.Ofile) {
            this.errors.push("Latest Resume is required.");
            this.OIsvalid = false;
          }
          // if (!this.Omentari_services) {
          //   this.errors.push("Relevant Mentari Service is required.");
          //   this.OIsvalid = false;
          // }
        } else {
          // if (!this.Omentari_services) {
          //   this.errors.push("Relevant Mentari Service is required.");
          //   this.OIsvalid = false;
          // }
        }
        if (!this.Oavailable_date) {
          this.errors.push("Available Day is required.");
        }
        if (!this.Oavailable_time) {
          this.errors.push("Available Time is required.");
        }
        if (
          this.org_reg_number &&
          this.org_desc &&
          this.org_email &&
          this.org_phone &&
          this.Oposition_in_org &&
          this.OIsvalid &&
          this.Oname &&
          //    this.Odob &&
          this.Oemail &&
          this.Ophone_number &&
          this.Oaddress &&
          this.Ostate_id &&
          this.Ocity_id &&
          this.Opostcode_id &&
          this.Oeducation_id &&
          this.Ooccupation_sector_id &&
          this.Obranch_id &&
          this.Oarea_of_involvement &&
          this.Oavailable_date &&
          this.Oavailable_time &&
          this.org_name &&
          this.org_reg_number &&
          this.org_desc &&
          this.org_email &&
          this.org_phone &&
          this.Oposition_in_org
        ) {
          if (this.Omentari_services) {
            this.Omentari_services =
              this.Omentari_services + "," + this.OVolOthers;
          }
          if (this.Oaddress1) {
            this.Oaddress = this.Oaddress + "\n" + this.Oaddress1;
          }
          if (this.Ois_mental_health_professional == "professional2-yes") {
            this.Ois_mental_health_professional = "1";
          } else {
            this.Ois_mental_health_professional = "0";
          }
          if (this.Ois_voluneering_exp == "experience2-yes") {
            this.Ois_voluneering_exp = "1";
          } else {
            this.Ois_voluneering_exp = "0";
          }
          const headers = {
            // Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          let body = new FormData();
          body.append("added_by", this.Ipaddress);
          body.append("section", "org");
          body.append("org_name", this.org_name);
          body.append("org_reg_number", this.org_reg_number);
          body.append("org_desc", this.org_desc);
          body.append("org_email", this.org_email);
          body.append("org_phone", this.org_phone);
          body.append("position_in_org", this.Oposition_in_org);
          body.append("is_agree", "1");
          body.append("name", this.Oname);
          body.append("dob", "");
          body.append("email", this.Oemail);
          body.append("phone_number", this.Ophone_number);
          body.append("address", this.Oaddress);
          body.append("postcode_id", this.Opostcode_id);
          body.append("city_id", this.Opostcode_id);
          body.append("state_id", this.Ostate_id);
          body.append("education_id", this.Oeducation_id);
          body.append("occupation_sector_id", this.Ooccupation_sector_id);
          body.append("branch_id", this.Obranch_id);
          body.append("area_of_involvement", this.Oarea_of_involvement);
          body.append("is_voluneering_exp", this.Ois_voluneering_exp);
          body.append(
            "exp_details",
            JSON.stringify(explist)
          );
          body.append(
            "is_mental_health_professional",
            this.Ois_mental_health_professional
          );
          body.append("mentari_services", this.Omentari_services);
          body.append("available_date", this.Oavailable_date);
          body.append("available_time", this.Oavailable_time);
          body.append("health_professional_resume", this.Ofile);
          const response = await this.$axios.post("von/add", body, {
            headers,
          });
          console.log("my console response", response.data);
          if (response.data.code == 200 || response.data.code == "200") {
            this.$nextTick(() => {
              $("#insertpopup").modal("show");
            });
            this.Reload();
            console.log("my resut", response.data);
          } else {
            this.$nextTick(() => {
              $("#errorpopup").modal("show");
            });
          }
        }
      } catch (e) {
        console.log("my log", e);
        this.$nextTick(() => {
          $("#errorpopup").modal("show");
        });
      }
    },
    async OnOrganizationOutreachProjectCollaboration() {
      try {
        this.OIsvalid = true;
        if (!this.org_name) {
          this.errors.push("Name of organization or company is required.");
        }
        if (!this.org_reg_number) {
          this.errors.push("Registration Number is required.");
        }
        if (!this.org_desc) {
          this.errors.push("company/organization background is required.");
        }
        if (!this.org_email) {
          this.errors.push("Company Email is required.");
        }
        if (!this.org_phone) {
          this.errors.push("Company Phone Number is required.");
        }
        if (!this.Oname) {
          this.errors.push("Name is required.");
        }
        // if (!this.Odob) {
        //   this.errors.push("Date Of Birth is required.");
        // }
        if (!this.Oposition_in_org) {
          this.errors.push("Position in Organization/Company is required.");
        }
        if (!this.Oemail) {
          this.errors.push("Email is required.");
        }
        if (!this.Ophone_number) {
          this.errors.push("Phone Number is required.");
        }
        if (!this.Oaddress) {
          this.errors.push("Address  is required.");
        }
        if (!this.Ostate_id) {
          this.errors.push("State is required.");
        }
        if (!this.Ocity_id) {
          this.errors.push("City is required.");
        }
        if (!this.Opostcode_id) {
          this.errors.push("Postcode is required.");
        }
        if (!this.Oeducation_id) {
          this.errors.push("Highest Education is required.");
        }
        if (!this.Ooccupation_sector_id) {
          this.errors.push("Current Occupation Sector is required.");
        }
        if (!this.Obranch_id) {
          this.errors.push("Mentari Branch is required.");
        }
        if (!this.Oproject_name) {
          this.errors.push("Project Name is required.");
        }
        if (!this.Oproject_background) {
          this.errors.push("Project Background is required.");
        }
        if (!this.Oproject_objectives) {
          this.errors.push("Project Objectives is required.");
        }
        if (!this.Otarget_audience) {
          this.errors.push("Target Audience is required.");
        }
        if (!this.Ono_of_paricipants) {
          this.errors.push("Number of Participants is required.");
        }
        if (!this.Otime_frame) {
          this.errors.push("Time Frame is required.");
        }
        if (!this.Oestimated_budget) {
          this.errors.push("Estimated Budget is required.");
        }
        if (!this.Oproject_scopes) {
          this.errors.push("Project Scopes is required.");
        }
        if (!this.Oproject_loaction) {
          this.errors.push("Project Location is required.");
        } else {
          if (this.Oproject_loaction == "project-location-others") {
            if (!this.Oother_loaction) {
              this.errors.push("Please Enter Other Location");
              this.OIsvalid = false;
            } else {
              this.Oproject_loaction_value = this.Oproject_other;
            }
          } else {
            if (!this.Oproject_branch) {
              this.errors.push("Please select Mentari Branch.");
              this.OIsvalid = false;
            } else {
              this.Oproject_loaction_value = this.Oproject_branch;
            }
          }
        }
        if (!this.Otarget_outcome) {
          this.errors.push("target outcome is required.");
        }
        if (!this.Ofollowup_projects) {
          this.errors.push("Any planned follow up projects is required.");
        }
        if (!this.Ooutreachmentari_services) {
          this.errors.push("Relevant Mentari Service is required.");
        }
        if (
          this.OIsvalid &&
          this.Oname &&
          //  this.Odob &&
          this.Oemail &&
          this.Ophone_number &&
          this.Oaddress &&
          this.Ostate_id &&
          this.Ocity_id &&
          this.Opostcode_id &&
          this.Oeducation_id &&
          this.Ooccupation_sector_id &&
          this.Obranch_id &&
          this.Oarea_of_involvement &&
          this.Oproject_name &&
          this.Oproject_background &&
          this.Oproject_objectives &&
          this.Otarget_audience &&
          this.Ono_of_paricipants &&
          this.Otime_frame &&
          this.Oestimated_budget &&
          this.Oproject_scopes &&
          this.Oproject_loaction &&
          this.Oproject_loaction_value &&
          this.Otarget_outcome &&
          this.Ofollowup_projects &&
          this.Ooutreachmentari_services &&
          this.org_name &&
          this.org_reg_number &&
          this.org_desc &&
          this.org_email &&
          this.org_phone &&
          this.Oposition_in_org
        ) {
          if (this.Ooutreachmentari_services) {
            this.Ooutreachmentari_services =
              this.Ooutreachmentari_services + "," + this.Ooutreachother;
          }
          if (this.Oaddress1) {
            this.Oaddress = this.address + "\n" + this.Oaddress1;
          }
          const headers = {
            // Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          let body = new FormData();
          body.append("added_by", this.Ipaddress);
          body.append("section", "org");
          body.append("org_name", this.org_name);
          body.append("org_reg_number", this.org_reg_number);
          body.append("org_desc", this.org_desc);
          body.append("org_email", this.org_email);
          body.append("org_phone", this.org_phone);
          body.append("position_in_org", this.Oposition_in_org);
          body.append("is_agree", "1");
          body.append("name", this.Oname);
          body.append("dob", "");
          body.append("email", this.Oemail);
          body.append("phone_number", this.Ophone_number);
          body.append("address", this.Oaddress);
          body.append("postcode_id", this.Opostcode_id);
          body.append("city_id", this.Ocity_id);
          body.append("state_id", this.Ostate_id);
          body.append("education_id", this.Oeducation_id);
          body.append("occupation_sector_id", this.Ooccupation_sector_id);
          body.append("branch_id", this.Obranch_id);
          body.append("area_of_involvement", this.Oarea_of_involvement);
          body.append("project_name", this.Oproject_name);
          body.append("project_background", this.Oproject_background);
          body.append("project_objectives", this.Oproject_objectives);
          body.append("mentari_services", this.Ooutreachmentari_services);
          body.append("target_audience", this.Otarget_audience);
          body.append("no_of_paricipants", this.Ono_of_paricipants);
          body.append("time_frame", this.Otime_frame);
          body.append("estimated_budget", this.Oestimated_budget);
          body.append("project_scopes", this.Oproject_scopes);
          body.append("project_loaction", this.Gproject_loaction);
          body.append("project_loaction_value", this.Oproject_loaction_value);
          body.append("target_outcome", this.Otarget_outcome);
          body.append("followup_projects", this.Ofollowup_projects);
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
    async OnOrganizationNetworkingMakeaContribution() {
      try {
        this.OIsvalid = true;
        if (!this.org_name) {
          this.errors.push("Name of organization or company is required.");
        }
        if (!this.org_reg_number) {
          this.errors.push("Registration Number is required.");
        }
        if (!this.org_desc) {
          this.errors.push("company/organization background is required.");
        }
        if (!this.org_email) {
          this.errors.push("Company Email is required.");
        }
        if (!this.org_phone) {
          this.errors.push("Company Phone Number is required.");
        }
        if (!this.Oname) {
          this.errors.push("Name is required.");
        }
        // if (!this.Odob) {
        //   this.errors.push("Date Of Birth is required.");
        // }
        if (!this.Oposition_in_org) {
          this.errors.push("Position in Organization/Company is required.");
        }
        if (!this.Oemail) {
          this.errors.push("Email is required.");
        }
        if (!this.Ophone_number) {
          this.errors.push("Phone Number is required.");
        }
        if (!this.Oaddress) {
          this.errors.push("Address  is required.");
        }
        if (!this.Ostate_id) {
          this.errors.push("State is required.");
        }
        if (!this.Ocity_id) {
          this.errors.push("City is required.");
        }
        if (!this.Opostcode_id) {
          this.errors.push("Postcode is required.");
        }
        if (!this.Oeducation_id) {
          this.errors.push("Highest Education is required.");
        }
        if (!this.Ooccupation_sector_id) {
          this.errors.push("Current Occupation Sector is required.");
        }
        if (!this.Obranch_id) {
          this.errors.push("Mentari Branch is required.");
        }
        if (!this.Ocontribution) {
          this.errors.push("How would you like contribute is required.");
        }
        if (!this.Obudget) {
          this.errors.push("Estimated Budget is required.");
        }
        if (!this.Onetworkno_of_paricipants) {
          this.errors.push("Number of Participants is required.");
        }
        if (!this.Onetwotkproject_loaction) {
          this.errors.push("Project Location is required.");
        } else {
          if (this.Onetwotkproject_loaction == "project-location-others") {
            if (!this.networkother) {
              this.errors.push("Please Enter Other Location");
              this.OIsvalid = false;
            } else {
              this.Onetwotkproject_loaction_value = this.Onetworkother;
            }
          } else {
            if (!this.Onetworkbranch) {
              this.errors.push("Please select Mentari Branch.");
              this.OIsvalid = false;
            } else {
              this.Onetwotkproject_loaction_value = this.Onetworkbranch;
            }
          }
        }
        if (!this.Onetworkmentari_services) {
          this.errors.push(
            "Relevant Mentari Service That You Want To Be Involved is required."
          );
        }
        if (
          this.OIsvalid &&
          this.Oname &&
          // this.Odob &&
          this.Oemail &&
          this.Ophone_number &&
          this.Oaddress &&
          this.Ostate_id &&
          this.Ocity_id &&
          this.Opostcode_id &&
          this.Oeducation_id &&
          this.Ooccupation_sector_id &&
          this.Obranch_id &&
          this.Oarea_of_involvement &&
          this.Ocontribution &&
          this.Obudget &&
          this.Onetworkno_of_paricipants &&
          this.Onetwotkproject_loaction &&
          this.Onetworkmentari_services &&
          this.org_name &&
          this.org_reg_number &&
          this.org_desc &&
          this.org_email &&
          this.org_phone &&
          this.Oposition_in_org
        ) {
          if (this.Onetworkmentari_services) {
            this.Onetworkmentari_services =
              this.Onetworkmentari_services + "," + this.Onetworkserviceother;
          }
          if (this.Oaddress1) {
            this.Oaddress = this.Oaddress + "\n" + this.Oaddress1;
          }
          const headers = {
            // Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          let body = new FormData();
          body.append("added_by", this.Ipaddress);
          body.append("section", "org");
          body.append("org_name", this.org_name);
          body.append("org_reg_number", this.org_reg_number);
          body.append("org_desc", this.org_desc);
          body.append("org_email", this.org_email);
          body.append("org_phone", this.org_phone);
          body.append("position_in_org", this.Oposition_in_org);
          body.append("is_agree", "1");
          body.append("name", this.Oname);
          body.append("dob", "");
          body.append("email", this.Oemail);
          body.append("phone_number", this.Ophone_number);
          body.append("address", this.Oaddress);
          body.append("postcode_id", this.Opostcode_id);
          body.append("city_id", this.Ocity_id);
          body.append("state_id", this.Ostate_id);
          body.append("education_id", this.Oeducation_id);
          body.append("occupation_sector_id", this.Ooccupation_sector_id);
          body.append("branch_id", this.Obranch_id);
          body.append("area_of_involvement", this.Oarea_of_involvement);
          body.append("contribution", this.Ocontribution);
          body.append("budget", this.Obudget);
          body.append("mentari_services", this.Onetworkmentari_services);
          body.append("no_of_paricipants", this.Onetworkno_of_paricipants);
          body.append("project_loaction", this.Onetwotkproject_loaction);
          body.append(
            "project_loaction_value",
            this.Onetwotkproject_loaction_value
          );
          const response = await this.$axios.post("von/add", body, {
            headers,
          });
          console.log("my console response", response.data);
          if (response.data.code == 200 || response.data.code == "200") {
            this.$nextTick(() => {
              $("#insertpopup").modal("show");
            });
            console.log("my resut", response.data);
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
