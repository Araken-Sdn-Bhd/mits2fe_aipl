<template>
  <div id="layoutSidenav">
    <VonSidebar />
    <div id="layoutSidenav_content">
      <VonHeader />
      <main>
        <Loader v-if="loader" />
        <div class="container-fluid px-4">
          <div class="card mb-4 mt-3">
            <div class="card-header">
              <h4>Volunteer, Outreach, And Networking Application Form</h4>
              <a href="#" class="visibility-h"
                ><i class="far fa-user-edit"></i
              ></a>
            </div>
            <div class="card-body mt-3">
              <p>
                MENTARI encourages the participation of any individual, group,
                or organization (government or private) to enhance service
                delivery related to mental health. the information provided
                through this form will be kept confidential and will help us
                determine the most satisfying volunteer or networking
                opportunity for you.
              </p>

              <div class="row">
                <div class="col-sm-4">
                  <div class="mb-3">
                    <label for="" class="form-label">Application Form</label>
                    <select
                      class="form-select select-others"
                      aria-label=""
                    >
                      <option value="0">Select Application Form</option>
                      <option value="individual">Individual</option>
                      <option value="group">Group</option>
                      <option value="organization">Organization</option>
                    </select>
                  </div>
                </div>
              </div>

              <Individual/>
              <!-- individual -->

              <div class="group notshow-box hide">
                <div class="row">
                  <div class="col-sm-12">
                    <h4 class="title-h4">Background</h4>
                  </div>
                </div>

                <form class="form-padding">
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
                        />
                        <label class="form-check-label" for="organization-yes"
                          >Yes</label
                        >
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="organization"
                          id="organization-no"
                          value="organization-no"
                        />
                        <label class="form-check-label" for="organization-no"
                          >No</label
                        >
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
                          />
                        </div>

                        <div class="mb-3">
                          <label class="form-label"
                            >What is the background of your group member?</label
                          >
                          <textarea class="form-control textarea"></textarea>
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
                        />
                        <label class="form-check-label" for="representative-yes"
                          >Yes</label
                        >
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="representative"
                          id="representative-no"
                          value="representative-no"
                        />
                        <label class="form-check-label" for="representative-no"
                          >No</label
                        >
                      </div>
                    </div>
                  </div>

                  <!-- hide-representative -->

                  <div class="representative-no represen-box hide">
                    <p>
                      Please appoint a group representative to complete this
                      form
                    </p>
                  </div>
                  <div class="representative-yes represen-box hide">
                    <div class="row mb-3">
                      <label for="" class="col-sm-4 col-form-label"
                        >Name<span>*</span></label
                      >
                      <div class="col-sm-8">
                        <input type="txet" class="form-control" id="" />
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="" class="col-sm-4 col-form-label"
                        >Date Of Birth</label
                      >
                      <div class="col-sm-8">
                        <input type="date" class="form-control" id="" />
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="" class="col-sm-4 col-form-label"
                        >Email<span>*</span></label
                      >
                      <div class="col-sm-8">
                        <input type="email" class="form-control" id="" />
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="" class="col-sm-4 col-form-label"
                        >Phone Number<span>*</span></label
                      >
                      <div class="col-sm-8">
                        <input type="txet" class="form-control" id="" />
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="" class="col-sm-4 col-form-label"
                        >Address</label
                      >
                      <div class="col-sm-8">
                        <input type="txet" class="form-control" id="" />
                        <input type="txet" class="form-control mt-2" id="" />
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-4 mb-3">
                        <label class="form-label">Postcode<span>*</span></label>
                        <select class="form-select">
                          <option selected>Select Postcode</option>
                          <option>...</option>
                        </select>
                      </div>
                      <div class="col-md-4 mb-3">
                        <label class="form-label">City<span>*</span></label>
                        <select class="form-select">
                          <option selected>Select City</option>
                          <option>...</option>
                        </select>
                      </div>
                      <div class="col-md-4 mb-3">
                        <label class="form-label">State<span>*</span></label>
                        <select class="form-select">
                          <option selected>Select State</option>
                          <option>...</option>
                        </select>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6 mb-3">
                        <label class="form-label"
                          >Highest Education<span>*</span></label
                        >
                        <select class="form-select">
                          <option>Please Choose One</option>
                          <option>No formal education</option>
                          <option>Primary school</option>
                          <option>Secondary school</option>
                          <option>Tertiary education</option>
                          <option>Post-graduate</option>
                        </select>
                      </div>
                      <div class="col-md-6 mb-3">
                        <label class="form-label"
                          >Current Occupation Sector<span>*</span></label
                        >
                        <select class="form-select">
                          <option>Please Choose One</option>
                          <option>Government</option>
                          <option>Private</option>
                          <option>Statutory Body</option>
                          <option>Homemaker</option>
                          <option>Unemployed</option>
                          <option>Self-Employer</option>
                          <option>Government Pensioner</option>
                          <option>Others</option>
                        </select>
                      </div>
                    </div>

                    <div class="row mb-3 mt-2">
                      <label for="" class="col-sm-4 col-form-label"
                        >Mentari</label
                      >
                      <div class="col-sm-8">
                        <select class="form-select">
                          <option>Please Select</option>
                          <option>...</option>
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
                          />
                          <label
                            class="form-check-label"
                            for="outreach-project1"
                          >
                            Outreach Project Collaboration
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="involvement"
                            id="networking1"
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
                          Does your group have any volunteering
                          experience?</label
                        >
                        <div class="col-sm-8 radio-box">
                          <div class="form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="experience1"
                              id="experience1-yes"
                              value="1"
                            />
                            <label
                              class="form-check-label"
                              for="experience1-yes"
                              >Yes</label
                            >
                          </div>
                          <div class="form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="experience1"
                              id="experience1-no"
                                value="0"
                            />
                            <label class="form-check-label" for="experience1-no"
                              >No</label
                            >
                          </div>
                        </div>
                      </div>

                      <!-- hide-div -->
                      <div class="experience1-yes experi-box hide">
                        <div class="mt-3">
                          <table class="note" style="width: 100%">
                            <thead>
                              <tr>
                                <th>NO</th>
                                <th width="100px">YEAR</th>
                                <th>Location</th>
                                <th>Brief Description of Activities</th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>
                                  <input
                                    type="text"
                                    class="form-control"
                                    name=""
                                  />
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    class="form-control"
                                    name=""
                                  />
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    class="form-control"
                                    name=""
                                  />
                                </td>
                                <td>
                                  <a href="#"><i class="far fa-plus"></i></a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div class="row mb-3 mt-2">
                        <label for="" class="col-sm-4 col-form-label">
                          Does your group are mental health professionals?<span
                            >*</span
                          ></label
                        >
                        <div class="col-sm-8 professional-box">
                          <div class="form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="professional1"
                              id="professional1-yes"
                              value="professional1-yes"
                            />
                            <label
                              class="form-check-label"
                              for="professional1-yes"
                              >Yes</label
                            >
                          </div>
                          <div class="form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="professional1"
                              id="professional1-no"
                              value="professional1-no"
                            />
                            <label
                              class="form-check-label"
                              for="professional1-no"
                              >No</label
                            >
                          </div>

                          <!-- hide-div -->
                          <div class="professional1-yes profess-box hide">
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
                                  value=""
                                  id="Rehabilitation"
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
                                  value=""
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
                                  value=""
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
                                  value=""
                                  id="Others"
                                />
                                <label class="form-check-label" for="Others">
                                  Others:<input type="text" name="" />
                                </label>
                              </div>
                            </div>
                          </div>

                          <div class="professional1-no profess-box hide">
                            <div class="mt-3">
                              <label for="formFile" class="form-label"
                                >Relevant Mentari Service That You Want To Be
                                Involved<span>*</span></label
                              >
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="Rehabilitation"
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
                                  value=""
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
                                  value=""
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
                                  value=""
                                  id="Others"
                                />
                                <label class="form-check-label" for="Others">
                                  Others:<input type="text" name="" />
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
                              <select class="form-select">
                                <option>Select Day</option>
                                <option>Monday</option>
                                <option>Tuesday</option>
                                <option>Wednesday</option>
                                <option>Thursday</option>
                                <option>Friday</option>
                              </select>
                            </div>
                            <div class="col-sm-6">
                              <select class="form-select">
                                <option>Select Time</option>
                                <option>8:00 AM</option>
                                <option>9:00 AM</option>
                                <option>10:00 AM</option>
                                <option>11:00 AM</option>
                                <option>02:00 PM</option>
                                <option>03:00 PM</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- volunteerismshow -->

                    <div
                      class="areas-involvement hide"
                      id="outreach-project1show"
                    >
                      <h4 class="title-h4">Outreach-Project Collaboration</h4>
                      <p>Please Provide a breief project description</p>

                      <div class="row mb-3 mt-2">
                        <label for="" class="col-sm-4 col-form-label"
                          >Project Name<span>*</span></label
                        >
                        <div class="col-sm-8">
                          <input type="text" class="form-control" name="" />
                        </div>
                      </div>
                      <!-- row-close -->

                      <div class="row mb-3 mt-2">
                        <label for="" class="col-sm-4 col-form-label"
                          >Project Background<span>*</span></label
                        >
                        <div class="col-sm-8">
                          <textarea
                            class="form-control textarea"
                            rows="3"
                          ></textarea>
                        </div>
                      </div>
                      <!-- row-close -->

                      <div class="row mb-3 mt-2">
                        <label for="" class="col-sm-4 col-form-label"
                          >Project Objectives<span>*</span></label
                        >
                        <div class="col-sm-8">
                          <textarea
                            class="form-control textarea"
                            rows="3"
                          ></textarea>
                        </div>
                      </div>
                      <!-- row-close -->

                      <div class="row mb-3 mt-2">
                        <label for="" class="col-sm-4 col-form-label"
                          >Target Audience<span>*</span></label
                        >
                        <div class="col-sm-8">
                          <input type="text" class="form-control" name="" />
                        </div>
                      </div>
                      <!-- row-close -->

                      <div class="row mb-3 mt-2">
                        <label for="" class="col-sm-4 col-form-label"
                          >Number of Participants<span>*</span></label
                        >
                        <div class="col-sm-8">
                          <input type="number" class="form-control" name="" />
                        </div>
                      </div>
                      <!-- row-close -->

                      <div class="row mb-3 mt-2">
                        <label for="" class="col-sm-4 col-form-label"
                          >Time Frame<span>*</span></label
                        >
                        <div class="col-sm-8">
                          <input type="text" class="form-control" name="" />
                        </div>
                      </div>
                      <!-- row-close -->

                      <div class="row mb-3 mt-2">
                        <label for="" class="col-sm-4 col-form-label"
                          >Estimated Budget<span>*</span></label
                        >
                        <div class="col-sm-8">
                          <input type="number" class="form-control" name="" />
                        </div>
                      </div>
                      <!-- row-close -->

                      <div class="row mb-3 mt-2">
                        <label for="" class="col-sm-4 col-form-label"
                          >Project Scopes<span>*</span></label
                        >
                        <div class="col-sm-8">
                          <textarea
                            class="form-control textarea"
                            rows="3"
                          ></textarea>
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
                              value="location-mentari"
                            />
                            <label
                              class="form-check-label"
                              for="location-mentari"
                              >Mentari</label
                            >
                          </div>

                          <div class="form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="project-location"
                              id="location-others"
                              value="location-others"
                            />
                            <label
                              class="form-check-label"
                              for="location-others"
                              >Others</label
                            >
                          </div>

                          <!-- hide-div -->
                          <div class="location-mentari profess-box hide">
                            <div class="mt-3">
                              <select class="form-select">
                                <option selected>
                                  Please Select Which Mentari
                                </option>
                                <option>Work-based rehabilitation</option>
                                <option>Awareness or Psychoeducation</option>
                                <option>Recreational therapy</option>
                                <option>Others, please specify</option>
                              </select>
                            </div>
                          </div>

                          <div class="location-others profess-box hide">
                            <div class="mt-3">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Please Specify"
                                name=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- row-close -->

                      <div class="row mb-3 mt-2">
                        <label for="" class="col-sm-4 col-form-label"
                          >How do you want to measure the target outcome?<span
                            >*</span
                          ></label
                        >
                        <div class="col-sm-8">
                          <textarea
                            class="form-control textarea"
                            rows="3"
                          ></textarea>
                        </div>
                      </div>
                      <!-- row-close -->

                      <div class="row mb-3 mt-2">
                        <label for="" class="col-sm-4 col-form-label"
                          >Any planned follow up projects?<span>*</span></label
                        >
                        <div class="col-sm-8">
                          <textarea
                            class="form-control textarea"
                            rows="3"
                          ></textarea>
                        </div>
                      </div>
                      <!-- row-close -->

                      <div class="row mb-3 mt-2">
                        <label for="" class="col-sm-4 col-form-label"
                          >Relevant Mentari Service That You Want To Be
                          Involved<span>*</span></label
                        >
                        <div class="col-sm-8">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="Rehabilitation2"
                            />
                            <label
                              class="form-check-label"
                              for="Rehabilitation2"
                            >
                              Work-based Rehabilitation
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="Psychoeducation2"
                            />
                            <label
                              class="form-check-label"
                              for="Psychoeducation2"
                            >
                              Awareness Or Psychoeducation
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
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
                              value=""
                              id="Others2"
                            />
                            <label class="form-check-label" for="Others2">
                              Others: <input type="text" name="" />
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
                        We encourage any participation from the community
                        members in line with MENTARI activities. For example,
                        craft materials, cooking materials, equipment for
                        rehabilitation activities, coupons for patients or even
                        funding (via our Tax Exempted Trust Account)
                      </p>

                      <div class="row mb-3 mt-2">
                        <label for="" class="col-sm-4 col-form-label"
                          >How would you like contribute?</label
                        >
                        <div class="col-sm-8">
                          <textarea
                            class="form-control textarea"
                            rows="3"
                          ></textarea>
                        </div>
                      </div>
                      <!-- row-close -->

                      <div class="row mb-3 mt-2">
                        <label for="" class="col-sm-4 col-form-label"
                          >Estimated Budget<span>*</span></label
                        >
                        <div class="col-sm-8">
                          <input type="number" class="form-control" name="" />
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
                              value="project-location-mentari"
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
                              value="project-location-others"
                            />
                            <label
                              class="form-check-label"
                              for="project-location-others1"
                              >Others</label
                            >
                          </div>

                          <!-- hide-div -->
                          <div
                            class="project-location-mentari profess-box hide"
                          >
                            <div class="mt-3">
                              <select class="form-select">
                                <option selected>
                                  Please Select Which Mentari
                                </option>
                                <option>Work-based rehabilitation</option>
                                <option>Awareness or Psychoeducation</option>
                                <option>Recreational therapy</option>
                                <option>Others, please specify</option>
                              </select>
                            </div>
                          </div>

                          <div class="project-location-others profess-box hide">
                            <div class="mt-3">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Please Specify"
                                name=""
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
                          <input type="number" class="form-control" name="" />
                        </div>
                      </div>
                      <!-- row-close -->

                      <div class="row mb-3 mt-2">
                        <label for="" class="col-sm-4 col-form-label"
                          >Relevant Mentari Service That You Want To Be
                          Involved<span>*</span></label
                        >
                        <div class="col-sm-8">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="Rehabilitation2"
                            />
                            <label
                              class="form-check-label"
                              for="Rehabilitation2"
                            >
                              Work-based Rehabilitation
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="Psychoeducation2"
                            />
                            <label
                              class="form-check-label"
                              for="Psychoeducation2"
                            >
                              Awareness Or Psychoeducation
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
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
                              value=""
                              id="Others2"
                            />
                            <label class="form-check-label" for="Others2">
                              Others: <input type="text" name="" />
                            </label>
                          </div>
                        </div>
                      </div>
                      <!-- row-close -->
                    </div>
                    <!-- networking -->
                  </div>
                  <!--  -->

                  <div class="d-flex align-items-center">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="gridCheck"
                      />
                      <label class="form-check-label" for="gridCheck">
                        I agree to the terms and condition
                      </label>
                    </div>

                    <a href="#" class="btn btn-warning btn-text ml-auto"
                      ><i class="far fa-save"></i> Save</a
                    >
                  </div>
                </form>
              </div>
              <!-- group -->

              <div class="organization notshow-box hide">
                <div class="row">
                  <div class="col-sm-12">
                    <h4 class="title-h4">Organization Background</h4>
                  </div>
                </div>

                <form class="form-padding">
                  <div class="row mb-3">
                    <label for="" class="col-sm-4 col-form-label"
                      >Name of organization or company<span>*</span></label
                    >
                    <div class="col-sm-8">
                      <input type="txet" class="form-control" id="" />
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label for="" class="col-sm-4 col-form-label"
                      >Registration Number<span>*</span></label
                    >
                    <div class="col-sm-8">
                      <input type="txet" class="form-control" id="" />
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label for="" class="col-sm-4 col-form-label"
                      >Brief description of the company/organization
                      background<span>*</span></label
                    >
                    <div class="col-sm-8">
                      <textarea
                        class="form-control textarea"
                        rows="3"
                      ></textarea>
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
                            <label for="" class="form-label"
                              >Email<span>*</span></label
                            >
                            <input type="email" class="form-control" />
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="mb-3">
                            <label for="" class="form-label"
                              >Phone Number<span>*</span></label
                            >
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h4 class="title-h4">Representative Background</h4>

                  <div class="row mb-3">
                    <label for="" class="col-sm-4 col-form-label"
                      >Name<span>*</span></label
                    >
                    <div class="col-sm-8">
                      <input type="txet" class="form-control" id="" />
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label for="" class="col-sm-4 col-form-label"
                      >Position in Organization/Company<span>*</span></label
                    >
                    <div class="col-sm-8">
                      <input type="text" class="form-control" id="" />
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label for="" class="col-sm-4 col-form-label"
                      >Email<span>*</span></label
                    >
                    <div class="col-sm-8">
                      <input type="email" class="form-control" id="" />
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label for="" class="col-sm-4 col-form-label"
                      >Phone Number<span>*</span></label
                    >
                    <div class="col-sm-8">
                      <input type="txet" class="form-control" id="" />
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label for="" class="col-sm-4 col-form-label"
                      >Address</label
                    >
                    <div class="col-sm-8">
                      <input type="txet" class="form-control" id="" />
                      <input type="txet" class="form-control mt-2" id="" />
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-4 mb-3">
                      <label class="form-label">Postcode<span>*</span></label>
                      <select class="form-select">
                        <option selected>Select Postcode</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div class="col-md-4 mb-3">
                      <label class="form-label">City<span>*</span></label>
                      <select class="form-select">
                        <option selected>Select City</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div class="col-md-4 mb-3">
                      <label class="form-label">State<span>*</span></label>
                      <select class="form-select">
                        <option selected>Select State</option>
                        <option>...</option>
                      </select>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <label class="form-label"
                        >Highest Education<span>*</span></label
                      >
                      <select class="form-select">
                        <option>Please Choose One</option>
                        <option>No formal education</option>
                        <option>Primary school</option>
                        <option>Secondary school</option>
                        <option>Tertiary education</option>
                        <option>Post-graduate</option>
                      </select>
                    </div>
                    <div class="col-md-6 mb-3">
                      <label class="form-label"
                        >Current Occupation Sector<span>*</span></label
                      >
                      <select class="form-select">
                        <option>Please Choose One</option>
                        <option>Government</option>
                        <option>Private</option>
                        <option>Statutory Body</option>
                        <option>Homemaker</option>
                        <option>Unemployed</option>
                        <option>Self-Employer</option>
                        <option>Government Pensioner</option>
                        <option>Others</option>
                      </select>
                    </div>
                  </div>

                  <div class="row mb-3 mt-2">
                    <label for="" class="col-sm-4 col-form-label"
                      >Mentari</label
                    >
                    <div class="col-sm-8">
                      <select class="form-select">
                        <option>Please Select</option>
                        <option>...</option>
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
                          id="volunteerism2"
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
                          id="outreach-project2"
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
                          id="networking2"
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
                        Does your organization have any volunteering
                        experience?</label
                      >
                      <div class="col-sm-8 radio-box">
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="experience2"
                            id="experience2-yes"
                            value="experience2-yes"
                          />
                          <label class="form-check-label" for="experience2-yes"
                            >Yes</label
                          >
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="experience2"
                            id="experience2-no"
                            value="option2"
                          />
                          <label class="form-check-label" for="experience2-no"
                            >No</label
                          >
                        </div>
                      </div>
                    </div>

                    <!-- hide-div -->
                    <div class="experience2-yes experi-box hide">
                      <div class="mt-3">
                        <table class="note" style="width: 100%">
                          <thead>
                            <tr>
                              <th>NO</th>
                              <th width="100px">YEAR</th>
                              <th>Location</th>
                              <th>Brief Description of Activities</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>
                                <input
                                  type="text"
                                  class="form-control"
                                  name=""
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  class="form-control"
                                  name=""
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  class="form-control"
                                  name=""
                                />
                              </td>
                              <td>
                                <a href="#"><i class="far fa-plus"></i></a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div class="row mb-3 mt-2">
                      <label for="" class="col-sm-4 col-form-label">
                        Does your organization consist of mental health
                        professional?<span>*</span></label
                      >
                      <div class="col-sm-8 professional-box">
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="professional2"
                            id="professional2-yes"
                            value="professional2-yes"
                          />
                          <label
                            class="form-check-label"
                            for="professional2-yes"
                            >Yes</label
                          >
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="professional2"
                            id="professional2-no"
                            value="professional2-no"
                          />
                          <label class="form-check-label" for="professional2-no"
                            >No</label
                          >
                        </div>

                        <!-- hide-div -->
                        <div class="professional2-yes profess-box hide">
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
                                value=""
                                id="Rehabilitation"
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
                                value=""
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
                                value=""
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
                                value=""
                                id="Others"
                              />
                              <label class="form-check-label" for="Others">
                                Others:<input type="text" name="" />
                              </label>
                            </div>
                          </div>
                        </div>

                        <div class="professional2-no profess-box hide">
                          <div class="mt-3">
                            <label for="formFile" class="form-label"
                              >Relevant Mentari Service That You Want To Be
                              Involved<span>*</span></label
                            >
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="Rehabilitation"
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
                                value=""
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
                                value=""
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
                                value=""
                                id="Others"
                              />
                              <label class="form-check-label" for="Others">
                                Others:<input type="text" name="" />
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
                            <select class="form-select">
                              <option>Select Day</option>
                              <option>Monday</option>
                              <option>Tuesday</option>
                              <option>Wednesday</option>
                              <option>Thursday</option>
                              <option>Friday</option>
                            </select>
                          </div>
                          <div class="col-sm-6">
                            <select class="form-select">
                              <option>Select Time</option>
                              <option>8:00 AM</option>
                              <option>9:00 AM</option>
                              <option>10:00 AM</option>
                              <option>11:00 AM</option>
                              <option>02:00 PM</option>
                              <option>03:00 PM</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- volunteerismshow -->

                  <div
                    class="areas-involvement hide"
                    id="outreach-project2show"
                  >
                    <h4 class="title-h4">Outreach-Project Collaboration</h4>
                    <p>Please Provide a breief project description</p>

                    <div class="row mb-3 mt-2">
                      <label for="" class="col-sm-4 col-form-label"
                        >Project Name<span>*</span></label
                      >
                      <div class="col-sm-8">
                        <input type="text" class="form-control" name="" />
                      </div>
                    </div>
                    <!-- row-close -->

                    <div class="row mb-3 mt-2">
                      <label for="" class="col-sm-4 col-form-label"
                        >Project Background<span>*</span></label
                      >
                      <div class="col-sm-8">
                        <textarea
                          class="form-control textarea"
                          rows="3"
                        ></textarea>
                      </div>
                    </div>
                    <!-- row-close -->

                    <div class="row mb-3 mt-2">
                      <label for="" class="col-sm-4 col-form-label"
                        >Project Objectives<span>*</span></label
                      >
                      <div class="col-sm-8">
                        <textarea
                          class="form-control textarea"
                          rows="3"
                        ></textarea>
                      </div>
                    </div>
                    <!-- row-close -->

                    <div class="row mb-3 mt-2">
                      <label for="" class="col-sm-4 col-form-label"
                        >Target Audience<span>*</span></label
                      >
                      <div class="col-sm-8">
                        <input type="text" class="form-control" name="" />
                      </div>
                    </div>
                    <!-- row-close -->

                    <div class="row mb-3 mt-2">
                      <label for="" class="col-sm-4 col-form-label"
                        >Number of Participants<span>*</span></label
                      >
                      <div class="col-sm-8">
                        <input type="number" class="form-control" name="" />
                      </div>
                    </div>
                    <!-- row-close -->

                    <div class="row mb-3 mt-2">
                      <label for="" class="col-sm-4 col-form-label"
                        >Time Frame<span>*</span></label
                      >
                      <div class="col-sm-8">
                        <input type="text" class="form-control" name="" />
                      </div>
                    </div>
                    <!-- row-close -->

                    <div class="row mb-3 mt-2">
                      <label for="" class="col-sm-4 col-form-label"
                        >Estimated Budget<span>*</span></label
                      >
                      <div class="col-sm-8">
                        <input type="number" class="form-control" name="" />
                      </div>
                    </div>
                    <!-- row-close -->

                    <div class="row mb-3 mt-2">
                      <label for="" class="col-sm-4 col-form-label"
                        >Project Scopes<span>*</span></label
                      >
                      <div class="col-sm-8">
                        <textarea
                          class="form-control textarea"
                          rows="3"
                        ></textarea>
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
                            value="location-mentari"
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
                            value="location-others"
                          />
                          <label class="form-check-label" for="location-others"
                            >Others</label
                          >
                        </div>

                        <!-- hide-div -->
                        <div class="location-mentari profess-box hide">
                          <div class="mt-3">
                            <select class="form-select">
                              <option selected>
                                Please Select Which Mentari
                              </option>
                              <option>Work-based rehabilitation</option>
                              <option>Awareness or Psychoeducation</option>
                              <option>Recreational therapy</option>
                              <option>Others, please specify</option>
                            </select>
                          </div>
                        </div>

                        <div class="location-others profess-box hide">
                          <div class="mt-3">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Please Specify"
                              name=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- row-close -->

                    <div class="row mb-3 mt-2">
                      <label for="" class="col-sm-4 col-form-label"
                        >How do you want to measure the target outcome?<span
                          >*</span
                        ></label
                      >
                      <div class="col-sm-8">
                        <textarea
                          class="form-control textarea"
                          rows="3"
                        ></textarea>
                      </div>
                    </div>
                    <!-- row-close -->

                    <div class="row mb-3 mt-2">
                      <label for="" class="col-sm-4 col-form-label"
                        >Any planned follow up projects?<span>*</span></label
                      >
                      <div class="col-sm-8">
                        <textarea
                          class="form-control textarea"
                          rows="3"
                        ></textarea>
                      </div>
                    </div>
                    <!-- row-close -->

                    <div class="row mb-3 mt-2">
                      <label for="" class="col-sm-4 col-form-label"
                        >Relevant Mentari Service That You Want To Be
                        Involved<span>*</span></label
                      >
                      <div class="col-sm-8">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="Rehabilitation2"
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
                            id="Psychoeducation2"
                          />
                          <label
                            class="form-check-label"
                            for="Psychoeducation2"
                          >
                            Awareness Or Psychoeducation
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
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
                            value=""
                            id="Others2"
                          />
                          <label class="form-check-label" for="Others2">
                            Others: <input type="text" name="" />
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
                      We encourage any participation from the community members
                      in line with MENTARI activities. For example, craft
                      materials, cooking materials, equipment for rehabilitation
                      activities, coupons for patients or even funding (via our
                      Tax Exempted Trust Account)
                    </p>

                    <div class="row mb-3 mt-2">
                      <label for="" class="col-sm-4 col-form-label"
                        >How would you like contribute?</label
                      >
                      <div class="col-sm-8">
                        <textarea
                          class="form-control textarea"
                          rows="3"
                        ></textarea>
                      </div>
                    </div>
                    <!-- row-close -->

                    <div class="row mb-3 mt-2">
                      <label for="" class="col-sm-4 col-form-label"
                        >Estimated Budget<span>*</span></label
                      >
                      <div class="col-sm-8">
                        <input type="number" class="form-control" name="" />
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
                            value="project-location-mentari"
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
                            value="project-location-others"
                          />
                          <label
                            class="form-check-label"
                            for="project-location-others1"
                            >Others</label
                          >
                        </div>

                        <!-- hide-div -->
                        <div class="project-location-mentari profess-box hide">
                          <div class="mt-3">
                            <select class="form-select">
                              <option selected>
                                Please Select Which Mentari
                              </option>
                              <option>Work-based rehabilitation</option>
                              <option>Awareness or Psychoeducation</option>
                              <option>Recreational therapy</option>
                              <option>Others, please specify</option>
                            </select>
                          </div>
                        </div>

                        <div class="project-location-others profess-box hide">
                          <div class="mt-3">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Please Specify"
                              name=""
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
                        <input type="number" class="form-control" name="" />
                      </div>
                    </div>
                    <!-- row-close -->

                    <div class="row mb-3 mt-2">
                      <label for="" class="col-sm-4 col-form-label"
                        >Relevant Mentari Service That You Want To Be
                        Involved<span>*</span></label
                      >
                      <div class="col-sm-8">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="Rehabilitation2"
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
                            id="Psychoeducation2"
                          />
                          <label
                            class="form-check-label"
                            for="Psychoeducation2"
                          >
                            Awareness Or Psychoeducation
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
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
                            value=""
                            id="Others2"
                          />
                          <label class="form-check-label" for="Others2">
                            Others: <input type="text" name="" />
                          </label>
                        </div>
                      </div>
                    </div>
                    <!-- row-close -->
                  </div>
                  <!-- networking -->

                  <div class="d-flex align-items-center">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="gridCheck12"
                      />
                      <label class="form-check-label" for="gridCheck12">
                        I agree to the terms and condition<span>*</span>
                      </label>
                    </div>

                    <a href="#" class="btn btn-warning btn-text ml-auto"
                      ><i class="far fa-save"></i> Save</a
                    >
                  </div>
                </form>
              </div>
              <!-- Organization -->
            </div>
          </div>
        </div>
      </main>
      <von-footer></von-footer>
    </div>
  </div>
</template>
<script>
import Individual from '../../../components/Von/Individual.vue';
import VonFooter from "../../../components/Von/VonFooter.vue";
import VonHeader from "../../../components/Von/VonHeader.vue";
import VonSidebar from "../../../components/Von/VonSidebar.vue";
export default {
  components: { VonSidebar, VonHeader, VonFooter, Individual },
  name: "von-management",
  data() {
    return {
      userdetails: null,
      errors: [],
      loader: false,
    };
  },
};
</script>

<style scoped>
.hide {
  display: none;
}
</style>