<template>
<div class="individual notshow-box ">
    <div class="row">
        <div class="col-sm-12">
            <h4 class="title-h4">Background</h4>
        </div>
    </div>

    <div class="row mb-3">
        <label for="" class="col-sm-4 col-form-label">Name<span>*</span></label>
        <div class="col-sm-8">
            <input type="txet" class="form-control" id="" v-model="name" v-on:keypress="isLetter($event)" />
        </div>
    </div>

    <div class="row mb-3">
        <label for="" class="col-sm-4 col-form-label">Date Of Birth<span>*</span></label>
        <div class="col-sm-8">
            <input type="date" class="form-control" id="" v-model="dob" />
        </div>
    </div>

    <div class="row mb-3">
        <label for="" class="col-sm-4 col-form-label">Email<span>*</span></label>
        <div class="col-sm-8">
            <input type="email" class="form-control" id="" v-model="email" />
        </div>
    </div>

    <div class="row mb-3">
        <label for="" class="col-sm-4 col-form-label">Phone Number<span>*</span></label>
        <div class="col-sm-8">
            <input type="tel" v-mask="'###-########'" class="form-control" id="" v-model="phone_number" v-on:keypress="NumbersOnly" />
        </div>
    </div>

    <div class="row mb-3">
        <label for="" class="col-sm-4 col-form-label">Address<span>*</span></label>
        <div class="col-sm-8">
            <input type="txet" class="form-control" id="" v-model="address" />
            <input type="txet" class="form-control mt-2" id="" v-model="address1" />
        </div>
    </div>

    <div class="row">
        <div class="col-md-4 mb-3">
            <label class="form-label">State<span>*</span></label>
            <select class="form-select" @change="getCityList($event)" v-model="state_id">
                <option value="0">Please Select</option>
                <option v-for="state in StateList" v-bind:key="state.id" v-bind:value="state.id">
                    {{ state.state_name }}
                </option>
            </select>
        </div>
        <div class="col-md-4 mb-3">
            <label class="form-label">City<span>*</span></label>
            <select class="form-select" v-model="city_id" @change="getPostcodeList($event)">
                <option value="0">Please Select</option>
                <option v-for="ctl in CityList" v-bind:key="ctl.id" v-bind:value="ctl.id">
                    {{ ctl.city_name }}
                </option>
            </select>
        </div>
        <div class="col-md-4 mb-3">
            <label class="form-label">Postcode<span>*</span></label>
            <select class="form-select" v-model="postcode_id">
                <option value="0">Please Select</option>
                <option v-for="pst in PostCodeList" v-bind:key="pst.id" v-bind:value="pst.id">
                    {{ pst.postcode }}
                </option>
            </select>
        </div>
    </div>

    <div class="row">
        <div class="col-md-6 mb-3">
            <label class="form-label">Highest Education<span>*</span></label>
            <select class="form-select" v-model="education_id">
                <option value="0">Please Select</option>
                <option v-for="ed in EducationList" v-bind:key="ed.id" v-bind:value="ed.id">
                    {{ ed.section_value }}
                </option>
            </select>
        </div>
        <div class="col-md-6 mb-3">
            <label class="form-label">Current Occupation Sector<span>*</span></label>
            <select class="form-select" v-model="occupation_sector_id">
                <option value="0">Please Select</option>
                <option v-for="os in OccupationList" v-bind:key="os.id" v-bind:value="os.id">
                    {{ os.section_value }}
                </option>
            </select>
        </div>
    </div>

    <div class="row mb-3 mt-2">
        <label for="" class="col-sm-4 col-form-label">Mentari<span>*</span></label>
        <div class="col-sm-8">
            <select class="form-select" v-model="branch_id">
                <option value="0">Please Select</option>
                <option v-for="brn in BranchList" v-bind:key="brn.id" v-bind:value="brn.id">
                    {{ brn.hospital_branch_name }}
                </option>
            </select>
        </div>
    </div>

    <div class="row mb-3 mt-2">
        <label for="" class="col-sm-4 col-form-label">Areas of Involvement<span>*</span></label>
        <div class="col-sm-8">
            <div class="form-check">
                <input class="form-check-input" type="radio" name="involvement" id="volunteerism" v-model="area_of_involvement" value="Volunteerism" />
                <label class="form-check-label" for="volunteerism">
                    Volunteerism
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="involvement" id="outreach-project" v-model="area_of_involvement" value="Outreach Project Collaboration" />
                <label class="form-check-label" for="outreach-project">
                    Outreach Project Collaboration
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="involvement" id="networking" v-model="area_of_involvement" value="Networking Make a Contribution" />
                <label class="form-check-label" for="networking">
                    Networking Make a Contribution
                </label>
            </div>
        </div>
    </div>

    <div class="areas-involvement" id="volunteerismshow" v-if="this.area_of_involvement == 'Volunteerism'">
        <h4 class="title-h4">Volunteerism</h4>

        <div class="row mb-3 mt-2">
            <label for="" class="col-sm-4 col-form-label">
                Do you have volunteering experience?<span>*</span></label>
            <div class="col-sm-8 radio-box">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="experience" id="experience-yes" value="experience-yes" v-model="is_voluneering_exp" />
                    <label class="form-check-label" for="experience-yes">Yes</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="experience" id="experience-no" value="experience-no" v-model="is_voluneering_exp" />
                    <label class="form-check-label" for="experience-no">No</label>
                </div>

                <!-- hide-div -->
                <div class="experience-yes experi-box" v-if="this.is_voluneering_exp == 'experience-yes'">
                    <div class="mt-3">
                        <textarea class="form-control textarea" rows="3" placeholder="Please describe" v-model="exp_details"></textarea>
                    </div>
                    <!-- <div class="mt-3">
            <table class="note" style="width: 100%" id="volexp">
              <thead>
                <tr>
                  <th width="100px">YEAR</th>
                  <th>Location</th>
                  <th>Brief Description of Activities</th>
                  <th></th>
                </tr>
              </thead>
              <tbody class="optionBox">
                     <tr class="block">
                  <td>
                    <input type="text" class="form-control year" name="" />
                  </td>
                  <td>
                    <input type="text" class="form-control location" name=""  />
                  </td>
                  <td>
                    <input type="text" class="form-control activity" name="" />
                  </td>
                  <td>
                    <a class="add-td"><i class="fa fa-plus"></i></a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div> -->
                </div>
            </div>
        </div>

        <div class="row mb-3 mt-2">
            <label for="" class="col-sm-4 col-form-label">
                Are you a mental health professional?<span>*</span></label>
            <div class="col-sm-8 professional-box">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="professional" id="professional-yes" value="professional-yes" v-model="is_mental_health_professional" />
                    <label class="form-check-label" for="professional-yes">Yes</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="professional" id="professional-no" value="professional-no" v-model="is_mental_health_professional" />
                    <label class="form-check-label" for="professional-no">No</label>
                </div>

                <!-- hide-div -->
                <div class="professional-yes profess-box" v-if="this.is_mental_health_professional == 'professional-yes'">
                    <div class="mt-3">
                        <label for="formFile" class="form-label">Please Attach Your Latest Resume<span>*</span></label>
                        <input class="form-control" type="file" id="formFile" @change="selectFile" />
                    </div>

                    <div class="mt-3">
                        <label for="formFile" class="form-label">Relevant Mentari Service That You Want To Be Involved<span>*</span></label>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="Rehabilitation" @click="Onreliventmentari('Consultation/Counselling')" />
                            <label class="form-check-label" for="Rehabilitation">
                                Consultation/Counselling
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="Rehabilitation" @click="Onreliventmentari('Work-based Rehabilitation')" />
                            <label class="form-check-label" for="Rehabilitation">
                                Work-based Rehabilitation
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="Psychoeducation" @click="Onreliventmentari('Awareness Or Psychoeducation')" />
                            <label class="form-check-label" for="Psychoeducation">
                                Awareness Or Psychoeducation
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="Therapy" @click="Onreliventmentari('Recreational Therapy')" />
                            <label class="form-check-label" for="Therapy">
                                Recreational Therapy
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="Others" @click="Onreliventmentari('Others')" />
                            <label class="form-check-label" for="Others">
                                Others:<input type="text" name="" v-model="VolOthers" />
                            </label>
                        </div>
                    </div>
                </div>

                <div class="professional-no profess-box" v-if="this.is_mental_health_professional == 'professional-no'">
                    <div class="mt-3">
                        <label for="formFile" class="form-label">Relevant Mentari Service That You Want To Be Involved<span>*</span></label>
                        <!-- <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="Rehabilitation"
                    @click="Onreliventmentari('Consultation/Counselling')"
                  />
                  <label class="form-check-label" for="Rehabilitation">
                    Consultation/Counselling
                  </label>
                </div> -->
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="Rehabilitation" @click="Onreliventmentari('Work-based Rehabilitation')" />
                            <label class="form-check-label" for="Rehabilitation">
                                Work-based Rehabilitation
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="Psychoeducation" @click="Onreliventmentari('Awareness Or Psychoeducation')" />
                            <label class="form-check-label" for="Psychoeducation">
                                Awareness Or Psychoeducation
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="Therapy" @click="Onreliventmentari('Recreational Therapy')" />
                            <label class="form-check-label" for="Therapy">
                                Recreational Therapy
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="Others" @click="Onreliventmentari('Others')" />
                            <label class="form-check-label" for="Others">
                                Others:<input type="text" name="" v-model="VolOthers" />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mb-3 mt-2">
            <label for="" class="col-sm-4 col-form-label">Available Day & Time<span>*</span></label>
            <div class="col-sm-8">
                <div class="row">
                    <div class="col-sm-6">
                        <select class="form-select" v-model="available_date">
                            <option value="">Select Day</option>
                            <option value="Sunday">Sunday</option>
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
                            <option value="12:00 PM">12:00 PM</option>
                            <option value="02:00 PM">02:00 PM</option>
                            <option value="03:00 PM">03:00 PM</option>
                            <option value="04:00 PM">04:00 PM</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- volunteerismshow -->

    <div class="areas-involvement" id="outreach-projectshow" v-if="this.area_of_involvement == 'Outreach Project Collaboration'">
        <h4 class="title-h4">Outreach-Project Collaboration</h4>
        <p>Please Provide a breief project description</p>

        <div class="row mb-3 mt-2">
            <label for="" class="col-sm-4 col-form-label">Project Name<span>*</span></label>
            <div class="col-sm-8">
                <input type="text" class="form-control" name="" v-model="project_name" />
            </div>
        </div>
        <!-- row-close -->

        <div class="row mb-3 mt-2">
            <label for="" class="col-sm-4 col-form-label">Project Background<span>*</span></label>
            <div class="col-sm-8">
                <textarea class="form-control textarea" rows="3" v-model="project_background"></textarea>
            </div>
        </div>
        <!-- row-close -->

        <div class="row mb-3 mt-2">
            <label for="" class="col-sm-4 col-form-label">Project Objectives<span>*</span></label>
            <div class="col-sm-8">
                <textarea class="form-control textarea" rows="3" v-model="project_objectives"></textarea>
            </div>
        </div>
        <!-- row-close -->

        <div class="row mb-3 mt-2">
            <label for="" class="col-sm-4 col-form-label">Target Audience<span>*</span></label>
            <div class="col-sm-8">
                <input type="text" class="form-control" name="" v-model="target_audience" />
            </div>
        </div>
        <!-- row-close -->

        <div class="row mb-3 mt-2">
            <label for="" class="col-sm-4 col-form-label">Number of Participants<span>*</span></label>
            <div class="col-sm-8">
                <input type="number" class="form-control" name="" v-model="no_of_paricipants" />
            </div>
        </div>
        <!-- row-close -->

        <div class="row mb-3 mt-2">
            <label for="" class="col-sm-4 col-form-label">Time Frame<span>*</span></label>
            <div class="col-sm-8">
                <input type="text" class="form-control" name="" v-model="time_frame" />
            </div>
        </div>
        <!-- row-close -->

        <div class="row mb-3 mt-2">
            <label for="" class="col-sm-4 col-form-label">Estimated Budget<span>*</span></label>
            <div class="col-sm-8">
                <input type="number" class="form-control" name="" v-model="estimated_budget" />
            </div>
        </div>
        <!-- row-close -->

        <div class="row mb-3 mt-2">
            <label for="" class="col-sm-4 col-form-label">Project Scopes<span>*</span></label>
            <div class="col-sm-8">
                <textarea class="form-control textarea" rows="3" v-model="project_scopes"></textarea>
            </div>
        </div>
        <!-- row-close -->

        <div class="row mb-3 mt-3">
            <label for="" class="col-sm-4 col-form-label">Project Location<span>*</span></label>
            <div class="col-sm-8 project-location-box">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="project-location" id="project-location-mentari" value="mentari" v-model="project_loaction" />
                    <label class="form-check-label" for="project-location-mentari">Mentari</label>
                </div>

                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="project-location" id="project-location-others" value="project-location-others" v-model="project_loaction" />
                    <label class="form-check-label" for="project-location-others">Others</label>
                </div>

                <!-- hide-div -->
                <div class="mentari profess-box" v-if="this.project_loaction == 'mentari'">
                    <div class="mt-3">
                        <select class="form-select" v-model="project_branch">
                            <option value="">Please Select</option>
                            <option v-for="brn in BranchList" v-bind:key="brn.hospital_branch_name" v-bind:value="brn.hospital_branch_name">
                                {{ brn.hospital_branch_name }}
                            </option>
                        </select>
                    </div>
                </div>

                <div class="project-location-others profess-box" v-if="this.project_loaction == 'project-location-others'">
                    <div class="mt-3">
                        <input type="text" class="form-control" placeholder="Please Specify" name="" v-model="other_loaction" />
                    </div>
                </div>
            </div>
        </div>

        <!-- row-close -->

        <div class="row mb-3 mt-2">
            <label for="" class="col-sm-4 col-form-label">How do you want to measure the target outcome?<span>*</span></label>
            <div class="col-sm-8">
                <textarea class="form-control textarea" rows="3" v-model="target_outcome"></textarea>
            </div>
        </div>
        <!-- row-close -->

        <div class="row mb-3 mt-2">
            <label for="" class="col-sm-4 col-form-label">Any planned follow up projects?<span>*</span></label>
            <div class="col-sm-8">
                <textarea class="form-control textarea" rows="3" v-model="followup_projects"></textarea>
            </div>
        </div>
        <!-- row-close -->

        <div class="row mb-3 mt-2">
            <label for="" class="col-sm-4 col-form-label">Relevant Mentari Service That You Want To Be Involved<span>*</span></label>
            <div class="col-sm-8">
                <!-- <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="Work-based Rehabilitation"
                id="Rehabilitation2" @change="Onrelevatedmentari('Consultation/Counselling')"
              />
              <label class="form-check-label" for="Rehabilitation2">
                Consultation/Counselling
              </label>
            </div> -->
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="Work-based Rehabilitation" id="Rehabilitation2" @change="Onrelevatedmentari('Work-based Rehabilitation')" />
                    <label class="form-check-label" for="Rehabilitation2">
                        Work-based Rehabilitation
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="Awareness Or Psychoeducation" id="Psychoeducation2" @change="Onrelevatedmentari('Awareness Or Psychoeducation')" />
                    <label class="form-check-label" for="Psychoeducation2">
                        Awareness Or Psychoeducation
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="Recreational Therapy" id="Therapy2" @change="Onrelevatedmentari('Recreational Therapy')" />
                    <label class="form-check-label" for="Therapy2">
                        Recreational Therapy
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="Others" id="Others2" @change="Onrelevatedmentari('Others')" />
                    <label class="form-check-label" for="Others2">
                        Others: <input type="text" name="" v-model="outreachother" />
                    </label>
                </div>
            </div>
        </div>
        <!-- row-close -->
    </div>

    <!-- outreach-projectshow -->

    <div class="areas-involvement" id="networkingshow" v-if="this.area_of_involvement == 'Networking Make a Contribution'">
        <h4 class="title-h4">Networking-Make a Contribution</h4>
        <p>
            We encourage any participation from the community members in line with
            MENTARI activities. For example, craft materials, cooking materials,
            equipment for rehabilitation activities, coupons for patients or even
            funding (via our Tax Exempted Trust Account)
        </p>

        <div class="row mb-3 mt-2">
            <label for="" class="col-sm-4 col-form-label">How would you like contribute?</label>
            <div class="col-sm-8">
                <textarea class="form-control textarea" rows="3" v-model="contribution"></textarea>
            </div>
        </div>
        <!-- row-close -->

        <div class="row mb-3 mt-2">
            <label for="" class="col-sm-4 col-form-label">Estimated Budget<span>*</span></label>
            <div class="col-sm-8">
                <input type="number" class="form-control" name="" v-model="budget" />
            </div>
        </div>
        <!-- row-close -->

        <div class="row mb-3 mt-3">
            <label for="" class="col-sm-4 col-form-label">Project Location<span>*</span></label>
            <div class="col-sm-8 project-location-box">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="project-location" id="project-location-mentari1" value="project-location-mentari" v-model="netwotkproject_loaction" />
                    <label class="form-check-label" for="project-location-mentari1">Mentari</label>
                </div>

                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="project-location" id="project-location-others1" value="project-location-others" v-model="netwotkproject_loaction" />
                    <label class="form-check-label" for="project-location-others1">Others</label>
                </div>

                <!-- hide-div -->
                <div class="project-location-mentari profess-box" v-if="this.netwotkproject_loaction == 'project-location-mentari'">
                    <div class="mt-3">
                        <select class="form-select" v-model="networkbranch">
                            <option value="">Please Select</option>
                            <option v-for="brn in BranchList" v-bind:key="brn.hospital_branch_name" v-bind:value="brn.hospital_branch_name">
                                {{ brn.hospital_branch_name }}
                            </option>
                        </select>
                    </div>
                </div>

                <div class="project-location-others profess-box" v-if="this.netwotkproject_loaction == 'project-location-others'">
                    <div class="mt-3">
                        <input type="text" class="form-control" placeholder="Please Specify" name="" v-model="networkother" />
                    </div>
                </div>
            </div>
        </div>
        <!-- row-close -->

        <div class="row mb-3 mt-2">
            <label for="" class="col-sm-4 col-form-label">Number of Participants<span>*</span></label>
            <div class="col-sm-8">
                <input type="number" class="form-control" name="" v-model="networkno_of_paricipants" />
            </div>
        </div>
        <!-- row-close -->

        <div class="row mb-3 mt-2">
            <label for="" class="col-sm-4 col-form-label">Relevant Mentari Service That You Want To Be Involved<span>*</span></label>
            <div class="col-sm-8">
                <!-- <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="Rehabilitation2" @click="Onnetworkrelevatedmentari('Consultation/Counselling')"
              />
              <label class="form-check-label" for="Rehabilitation2">
                Consultation/Counselling
              </label>
            </div> -->
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="Rehabilitation2" @click="Onnetworkrelevatedmentari('Work-based Rehabilitation')" />
                    <label class="form-check-label" for="Rehabilitation2">
                        Work-based Rehabilitation
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="Psychoeducation2" @click="Onnetworkrelevatedmentari('Awareness Or Psychoeducation')" />
                    <label class="form-check-label" for="Psychoeducation2">
                        Awareness Or Psychoeducation
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="Therapy2" @click="Onnetworkrelevatedmentari('Recreational Therapy')" />
                    <label class="form-check-label" for="Therapy2">
                        Recreational Therapy
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="Others2" @click="Onnetworkrelevatedmentari('Other')" />
                    <label class="form-check-label" for="Others2">
                        Others: <input type="text" name="" v-model="networkserviceother" />
                    </label>
                </div>
            </div>
        </div>
        <!-- row-close -->
    </div>
    <!-- networking -->
    <p v-if="errors.length">
        <ul>
            <li style="color:red" v-for='err in errors' :key='err'>
                {{ err }}
            </li>
        </ul>
    </p>
    <div class="d-flex align-items-center">
        <div class="form-check mr-auto">
            <input class="form-check-input" type="checkbox" id="gridCheck" value="1" v-model="is_agree" />
            <label class="form-check-label" for="gridCheck">
                I agree to the terms and condition<span>*</span>
            </label>
        </div>
        <button type="submit" class="btn btn-warning btn-text ml-auto" @click="OnSubmit">
            <i class="fa fa-save"></i> Save
        </button>
    </div>
</div>
</template>

<script>
export default {
    name: "public-Individual",
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
            section: 0,
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
            project_name: "",
            project_background: "",
            project_objectives: "",
            mentari_services: "",
            target_audience: "",
            no_of_paricipants: 0,
            time_frame: "",
            estimated_budget: 0,
            project_scopes: "",
            project_loaction: "",
            project_loaction_value: "",
            target_outcome: "",
            followup_projects: 0,
            other_loaction: "",
            project_branch: "",
            outreachother: "",
            outreachmentari_services: "",
            networkmentari_services: "",
            contribution: "",
            budget: "",
            networkno_of_paricipants: 0,
            netwotkproject_loaction: "",
            netwotkproject_loaction_value: "",
            networkbranch: "",
            networkother: "",
            networkserviceother: "",
            Ipaddress: ""
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
            $(".add-td").click(function (i) {
                $(".block:last").after(
                    '<tr class="block"> <td> <input type="text" class="form-control year" name="" /></td><td><input type="text" class="form-control location" name=""  /></td><td><input type="text" class="form-control activity" name="" /></td> <td> <span class="remove"><i class="fal fa-times"></i></span></td></tr>'
                );
            });
            $(".optionBox").on("click", ".remove", function () {
                $(this).closest(".block").remove();
            });
        });
        this.GetList();
        this.GetUserIpAddress();
    },
    methods: {
        selectFile(event) {
            this.file = event.target.files[0];
        },
        NumbersOnly(evt) {
            evt = (evt) ? evt : window.event;
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                evt.preventDefault();;
            } else {
                return true;
            }
        },
        async isLetter(e) {
            let char = String.fromCharCode(e.keyCode);
            if (/^[A-Za-z\'@ ]+$/.test(char)) return true;
            else e.preventDefault();
        },
        async getCityList(event) {
            const headers = {
                Accept: "application/json",
                "Content-Type": "application/json",
            };
            const response = await this.$axios.post(
                "address/" + event.target.value + "/getCityList", {
                    headers
                }
            );
            if (response.data.code == 200 || response.data.code == "200") {
                this.CityList = response.data.list;
                this.PostCodeList = [];
            } else {
                this.CityList = [];
                this.PostCodeList = [];
            }

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
                this.PostCodeList = response.data.list;
            } else {
                this.PostCodeList = [];
            }

        },
        async GetList() {
            const headers = {
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
                "general-setting/list?section=" + "education-level", {
                    headers
                }
            );
            if (response1.data.code == 200 || response1.data.code == "200") {
                this.EducationList = response1.data.list;
            } else {
                this.EducationList = [];
            }
            const response2 = await this.$axios.get(
                "general-setting/list?section=" + "occupation-sector", {
                    headers
                }
            );
            if (response2.data.code == 200 || response2.data.code == "200") {
                this.OccupationList = response2.data.list;
            } else {
                this.OccupationList = [];
            }
            const response3 = await this.$axios.get("hospital/branch-excluded-hospital-list", {
                headers,
            });
            if (response3.data.code == 200 || response3.data.code == "200") {
                this.BranchList = response3.data.list;
            } else {
                this.BranchList = [];
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

        OnSubmit() {
            this.errors = [];
            if (this.is_agree) {
                if (this.area_of_involvement == "Volunteerism") {
                    this.loader = true;
                    this.OnIndividualVolunteerism();
                } else if (
                    this.area_of_involvement == "Outreach Project Collaboration"
                ) {
                    this.loader = true;
                    this.OnIndividualOutreachProjectCollaboration();
                } else if (
                    this.area_of_involvement == "Networking Make a Contribution"
                ) {
                    this.loader = true;
                    this.OnIndividualNetworkingMakeaContribution();
                } else {
                    this.errors.push("Please select Areas of Involvement");
                }
            } else {
                this.errors.push("Please agree to the terms and condition");
            }
        },
        async OnIndividualVolunteerism() {
            try {
                var explist = [];
                this.Isvalid = true;
                if (!this.name) {
                    this.errors.push("Name is required.");
                }
                if (!this.dob) {
                    this.errors.push("Date Of Birth is required.");
                }
                if (!this.email) {
                    this.errors.push("Email is required.");
                }
                if (!this.phone_number) {
                    this.errors.push("Phone Number is required.");
                }
                if (!this.address) {
                    this.errors.push("Address  is required.");
                }
                if (!this.state_id) {
                    this.errors.push("State is required.");
                }
                if (!this.city_id) {
                    this.errors.push("City is required.");
                }
                if (!this.postcode_id) {
                    this.errors.push("Postcode is required.");
                }
                if (!this.education_id) {
                    this.errors.push("Highest Education is required.");
                }
                if (!this.occupation_sector_id) {
                    this.errors.push("Current Occupation Sector is required.");
                }
                if (!this.branch_id) {
                    this.errors.push("Mentari Branch is required.");
                }
                if (!this.area_of_involvement) {
                    this.errors.push("Areas of Involvement is required.");
                }
                if (this.is_voluneering_exp == "experience-yes") {
                    if (!this.exp_details) {
                        this.errors.push(
                            "volunteering experience details is required."
                        );
                        this.Isvalid = false;
                    }
                }
                if (this.is_mental_health_professional == "professional-yes") {
                    if (!this.file) {
                        this.errors.push("Latest Resume is required.");
                        this.Isvalid = false;
                    }
                }
                if (!this.mentari_services) {
                    this.errors.push("Relevant Mentari Service is required.");
                    this.Isvalid = false;
                }
                if (!this.available_date) {
                    this.errors.push("Available Day is required.");
                }
                if (!this.available_time) {
                    this.errors.push("Available Time is required.");
                }
                if (
                    this.Isvalid &&
                    this.name &&
                    this.dob &&
                    this.email &&
                    this.phone_number &&
                    this.address &&
                    this.state_id &&
                    this.city_id &&
                    this.postcode_id &&
                    this.education_id &&
                    this.occupation_sector_id &&
                    this.branch_id &&
                    this.area_of_involvement &&
                    this.available_date &&
                    this.available_time
                ) {
                    if (this.mentari_services) {
                        this.mentari_services =
                            this.mentari_services + "," + this.VolOthers;
                    }
                    if (this.address1) {
                        this.address = this.address + "\n" + this.address1;
                    }
                    if (this.is_voluneering_exp == "experience-yes") {
                        this.is_voluneering_exp = "1";
                    } else {
                        this.is_voluneering_exp = "0";
                    }
                    if (this.is_mental_health_professional == "professional-yes") {
                        this.is_mental_health_professional = "1";
                    } else {
                        this.is_mental_health_professional = "0";
                    }
                    const headers = {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    };
                    let body = new FormData();
                    body.append("added_by", this.Ipaddress);
                    body.append("section", "individual");
                    body.append("name", this.name);
                    body.append("dob", this.dob);
                    body.append("email", this.email);
                    body.append("phone_number", this.phone_number);
                    body.append("address", this.address);
                    body.append("postcode_id", this.postcode_id);
                    body.append("city_id", this.postcode_id);
                    body.append("state_id", this.state_id);
                    body.append("education_id", this.education_id);
                    body.append("occupation_sector_id", this.occupation_sector_id);
                    body.append("branch_id", this.branch_id);
                    body.append("area_of_involvement", this.area_of_involvement);
                    body.append("is_agree", "1");
                    body.append("is_voluneering_exp", this.is_voluneering_exp);
                    body.append("exp_details", this.exp_details);
                    body.append(
                        "is_mental_health_professional",
                        this.is_mental_health_professional
                    );
                    body.append("mentari_services", this.mentari_services);
                    body.append("available_date", this.available_date);
                    body.append("available_time", this.available_time);
                    body.append("health_professional_resume", this.file);
                    const response = await this.$axios.post("von/add", body, {
                        headers,
                    });
                    console.log("my console response", response.data);
                    if (response.data.code == 200 || response.data.code == "200") {
                        this.loader = false;
                        this.$swal.fire(
                            'Your Form Is Submitted!',
                        );
                        this.Reload();
                    } else {
                        this.loader = false;
                        this.$swal.fire({
                            icon: 'error',
                            title: 'Oops... Something Went Wrong!',
                            text: 'the error is: ' + this.error,
                            footer: ''
                        });
                    }
                }
            } catch (e) {
                this.$swal.fire({
                    icon: 'error',
                    title: 'Oops... Something Went Wrong!',
                    text: 'the error is: ' + JSON.stringify(response.data.message),
                    footer: ''
                });
            }
        },
        async OnIndividualOutreachProjectCollaboration() {
            try {
                this.Isvalid = true;
                if (!this.name) {
                    this.errors.push("Name is required.");
                }
                if (!this.dob) {
                    this.errors.push("Date Of Birth is required.");
                }
                if (!this.email) {
                    this.errors.push("Email is required.");
                }
                if (!this.phone_number) {
                    this.errors.push("Phone Number is required.");
                }
                if (!this.address) {
                    this.errors.push("Address  is required.");
                }
                if (!this.state_id) {
                    this.errors.push("State is required.");
                }
                if (!this.city_id) {
                    this.errors.push("City is required.");
                }
                if (!this.postcode_id) {
                    this.errors.push("Postcode is required.");
                }
                if (!this.education_id) {
                    this.errors.push("Highest Education is required.");
                }
                if (!this.occupation_sector_id) {
                    this.errors.push("Current Occupation Sector is required.");
                }
                if (!this.branch_id) {
                    this.errors.push("Mentari Branch is required.");
                }
                if (!this.project_name) {
                    this.errors.push("Project Name is required.");
                }
                if (!this.project_background) {
                    this.errors.push("Project Background is required.");
                }
                if (!this.project_objectives) {
                    this.errors.push("Project Objectives is required.");
                }
                if (!this.target_audience) {
                    this.errors.push("Target Audience is required.");
                }
                if (!this.no_of_paricipants) {
                    this.errors.push("Number of Participants is required.");
                }
                if (!this.time_frame) {
                    this.errors.push("Time Frame is required.");
                }
                if (!this.estimated_budget) {
                    this.errors.push("Estimated Budget is required.");
                }
                if (!this.project_scopes) {
                    this.errors.push("Project Scopes is required.");
                }
                if (!this.project_loaction) {
                    this.errors.push("Project Location is required.");
                } else {
                    if (this.project_loaction == "project-location-others") {
                        if (!this.other_loaction) {
                            this.errors.push("Please Enter Other Location");
                            this.Isvalid = false;
                        } else {
                            this.project_loaction_value = this.project_other;
                        }
                    } else {
                        if (!this.project_branch) {
                            this.errors.push("Please select Mentari Branch.");
                            this.Isvalid = false;
                        } else {
                            this.project_loaction_value = this.project_branch;
                        }
                    }
                }
                if (!this.target_outcome) {
                    this.errors.push("target outcome is required.");
                }
                if (!this.followup_projects) {
                    this.errors.push("Any planned follow up projects is required.");
                }
                // if (!this.outreachmentari_services) {
                //     this.errors.push("Relevant Mentari Service is required.");
                // }
                if (
                    this.Isvalid &&
                    this.name &&
                    this.dob &&
                    this.email &&
                    this.phone_number &&
                    this.address &&
                    this.state_id &&
                    this.city_id &&
                    this.postcode_id &&
                    this.education_id
                    // &&
                    // this.occupation_sector_id &&
                    // this.branch_id &&
                    // this.area_of_involvement &&
                    // this.project_name &&
                    // this.project_background &&
                    // this.project_objectives &&
                    // this.target_audience &&
                    // this.no_of_paricipants &&
                    // this.time_frame &&
                    // this.estimated_budget &&
                    // this.project_scopes &&
                    // this.project_loaction &&
                    // this.project_loaction_value &&
                    // this.target_outcome &&
                    // this.followup_projects &&
                    // this.outreachmentari_services
                ) {
                    if (this.outreachmentari_services) {
                        this.outreachmentari_services =
                            this.outreachmentari_services + "," + this.outreachother;
                    }
                    if (this.address1) {
                        this.address = this.address + "\n" + this.address1;
                    }
                    const headers = {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    };
                    let body = new FormData();
                    body.append("added_by", this.Ipaddress);
                    body.append("section", "individual");
                    body.append("name", this.name);
                    body.append("dob", this.dob);
                    body.append("email", this.email);
                    body.append("phone_number", this.phone_number);
                    body.append("address", this.address);
                    body.append("postcode_id", this.postcode_id);
                    body.append("city_id", this.city_id);
                    body.append("state_id", this.state_id);
                    body.append("education_id", this.education_id);
                    body.append("occupation_sector_id", this.occupation_sector_id);
                    body.append("branch_id", this.branch_id);
                    body.append("area_of_involvement", this.area_of_involvement);
                    body.append("project_name", this.project_name);
                    body.append("project_background", this.project_background);
                    body.append("project_objectives", this.project_objectives);
                    body.append("mentari_services", this.outreachmentari_services);
                    body.append("target_audience", this.target_audience);
                    body.append("no_of_paricipants", this.no_of_paricipants);
                    body.append("time_frame", this.time_frame);
                    body.append("estimated_budget", this.estimated_budget);
                    body.append("project_scopes", this.project_scopes);
                    body.append("project_loaction", this.project_loaction);
                    body.append("project_loaction_value", this.project_loaction_value);
                    body.append("target_outcome", this.target_outcome);
                    body.append("followup_projects", this.followup_projects);
                    body.append("is_agree", "1");
                    const response = await this.$axios.post("von/add", body, {
                        headers,
                    });
                    console.log("my console response", response.data);
                    if (response.data.code == 200 || response.data.code == "200") {
                        this.loader = false;
                        window.alert("Your form is submitted");
                        this.Reload();
                    } else {
                        this.loader = false;
                        this.$swal.fire({
                            icon: 'error',
                            title: 'Oops... Something Went Wrong!',
                            text: 'the error is: ' + this.error,
                            footer: ''
                        });
                    }
                }
            } catch (e) {
                this.$swal.fire({
                    icon: 'error',
                    title: 'Oops... Something Went Wrong!',
                    text: 'the error is: ' + JSON.stringify(response.data.message),
                    footer: ''
                });
            }
        },
        async OnIndividualNetworkingMakeaContribution() {
            try {
                this.Isvalid = true;
                if (!this.name) {
                    this.errors.push("Name is required.");
                }
                if (!this.dob) {
                    this.errors.push("Date Of Birth is required.");
                }
                if (!this.email) {
                    this.errors.push("Email is required.");
                }
                if (!this.phone_number) {
                    this.errors.push("Phone Number is required.");
                }
                if (!this.address) {
                    this.errors.push("Address  is required.");
                }
                if (!this.state_id) {
                    this.errors.push("State is required.");
                }
                if (!this.city_id) {
                    this.errors.push("City is required.");
                }
                if (!this.postcode_id) {
                    this.errors.push("Postcode is required.");
                }
                if (!this.education_id) {
                    this.errors.push("Highest Education is required.");
                }
                if (!this.occupation_sector_id) {
                    this.errors.push("Current Occupation Sector is required.");
                }
                if (!this.branch_id) {
                    this.errors.push("Mentari Branch is required.");
                }
                if (!this.contribution) {
                    this.errors.push("How would you like contribute is required.");
                }
                if (!this.budget) {
                    this.errors.push("Estimated Budget is required.");
                }
                if (!this.networkno_of_paricipants) {
                    this.errors.push("Number of Participants is required.");
                }
                if (!this.netwotkproject_loaction) {
                    this.errors.push("Project Location is required.");
                } else {
                    if (this.netwotkproject_loaction == "project-location-others") {
                        if (!this.networkother) {
                            this.errors.push("Please Enter Other Location");
                            this.Isvalid = false;
                        } else {
                            this.netwotkproject_loaction_value = this.networkother;
                        }
                    } else {
                        if (!this.networkbranch) {
                            this.errors.push("Please select Mentari Branch.");
                            this.Isvalid = false;
                        } else {
                            this.netwotkproject_loaction_value = this.networkbranch;
                        }
                    }
                }
                if (!this.networkmentari_services) {
                    this.errors.push(
                        "Relevant Mentari Service That You Want To Be Involved is required."
                    );
                }
                if (
                    this.Isvalid &&
                    this.name &&
                    this.dob &&
                    this.email &&
                    this.phone_number &&
                    this.address &&
                    this.state_id &&
                    this.city_id &&
                    this.postcode_id &&
                    this.education_id &&
                    this.occupation_sector_id &&
                    this.branch_id &&
                    this.area_of_involvement &&
                    this.contribution &&
                    this.budget &&
                    this.networkno_of_paricipants &&
                    this.netwotkproject_loaction &&
                    this.networkmentari_services
                ) {
                    if (this.networkmentari_services) {
                        this.networkmentari_services =
                            this.networkmentari_services + "," + this.networkserviceother;
                    }
                    if (this.address1) {
                        this.address = this.address + "\n" + this.address1;
                    }
                    const headers = {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    };
                    let body = new FormData();
                    body.append("added_by", this.Ipaddress);
                    body.append("section", "individual");
                    body.append("name", this.name);
                    body.append("dob", this.dob);
                    body.append("email", this.email);
                    body.append("phone_number", this.phone_number);
                    body.append("address", this.address);
                    body.append("postcode_id", this.postcode_id);
                    body.append("city_id", this.city_id);
                    body.append("state_id", this.state_id);
                    body.append("education_id", this.education_id);
                    body.append("occupation_sector_id", this.occupation_sector_id);
                    body.append("branch_id", this.branch_id);
                    body.append("area_of_involvement", this.area_of_involvement);
                    body.append("contribution", this.contribution);
                    body.append("budget", this.budget);
                    body.append("mentari_services", this.networkmentari_services);
                    body.append("no_of_paricipants", this.networkno_of_paricipants);
                    body.append("project_loaction", this.netwotkproject_loaction);
                    body.append(
                        "project_loaction_value",
                        this.netwotkproject_loaction_value
                    );
                    body.append("is_agree", "1");
                    const response = await this.$axios.post("von/add", body, {
                        headers,
                    });
                    console.log("my console response", response.data);
                    if (response.data.code == 200 || response.data.code == "200") {
                        this.loader = false;
                        window.alert("Your form is submitted");
                        this.Reload();
                    } else {
                        this.loader = false;
                        this.$swal.fire({
                            icon: 'error',
                            title: 'Oops... Something Went Wrong!',
                            text: 'the error is: ' + this.error,
                            footer: ''
                        });
                    }
                }
            } catch (e) {
                this.$swal.fire({
                    icon: 'error',
                    title: 'Oops... Something Went Wrong!',
                    text: 'the error is: ' + JSON.stringify(response.data.message),
                    footer: ''
                });
            }
        },
        Reload() {
            setTimeout(() => {
                window.location.href = 'https://mentari.moh.gov.my/';
            }, 100);
        },
        async GetUserIpAddress() {
            const {
                data: {
                    ip
                },
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
