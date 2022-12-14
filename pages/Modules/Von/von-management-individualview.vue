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

                <form class="form-padding">
                  <div class="row mb-3">
                    <label for="" class="col-sm-4 col-form-label">Name</label>
                    <div class="col-sm-8">
                      <input
                        type="txet"
                        class="form-control"
                        id=""
                        value=" Lee San Wei"
                      />
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
                    <label for="" class="col-sm-4 col-form-label">Email</label>
                    <div class="col-sm-8">
                      <input type="email" class="form-control" id="" />
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label for="" class="col-sm-4 col-form-label"
                      >Phone Number</label
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
                      <label class="form-label">Postcode</label>
                      <input type="txet" class="form-control" id="" />
                    </div>
                    <div class="col-md-4 mb-3">
                      <label class="form-label">City</label>
                      <input type="txet" class="form-control" id="" />
                    </div>
                    <div class="col-md-4 mb-3">
                      <label class="form-label">State</label>
                      <input type="txet" class="form-control" id="" />
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <label class="form-label">Highest Education</label>
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
                        >Current Occupation Sector</label
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
                      >Areas of Involvement</label
                    >
                    <div class="col-sm-8">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="involvement"
                          id="volunteerism"
                          checked
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
                        />
                        <label class="form-check-label" for="networking">
                          Networking Make a Contribution
                        </label>
                      </div>
                    </div>
                  </div>

                  <div class="areas-involvement" id="volunteerismshow">
                    <h4 class="title-h4">Volunteerism</h4>

                    <div class="row mb-3 mt-2">
                      <label for="" class="col-sm-4 col-form-label">
                        Do you have volunteering experience?</label
                      >
                      <div class="col-sm-8 radio-box">
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="experience"
                            id="experience-yes"
                            value="experience-yes"
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
                            value="option2"
                            checked
                          />
                          <label class="form-check-label" for="experience-no"
                            >No</label
                          >
                        </div>

                        <!-- hide-div -->
                        <div class="experience-yes experi-box hide">
                          <div class="mt-3">
                            <textarea
                              class="form-control textarea"
                              rows="3"
                              placeholder="Please describe"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row mb-3 mt-2">
                      <label for="" class="col-sm-4 col-form-label">
                        Are you a mental health professional?</label
                      >
                      <div class="col-sm-8 professional-box">
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="professional"
                            id="professional-yes"
                            value="professional-yes"
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
                            checked
                          />
                          <label class="form-check-label" for="professional-no"
                            >No</label
                          >
                        </div>

                        <!-- hide-div -->
                        <div class="professional-yes profess-box hide">
                          <div class="mt-3">
                            <label for="formFile" class="form-label"
                              >Please Attach Your Latest Resume</label
                            >
                            <input
                              class="form-control"
                              type="file"
                              id="formFile"
                            />
                          </div>
                        </div>

                        <div class="professional-no profess-box">
                          <div class="mt-3">
                            <label for="formFile" class="form-label"
                              >Relevant Mentari Service That You Want To Be
                              Involved</label
                            >
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="Rehabilitation"
                                checked
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
                                checked
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
                        >Available Day & Time</label
                      >
                      <div class="col-sm-8">
                        <div class="row">
                          <div class="col-sm-6">
                            <select class="form-select">
                              <option>Select Day</option>
                              <option selected>Monday</option>
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
                              <option selected>9:00 AM</option>
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

                  <div class="areas-involvement hide" id="outreach-projectshow">
                    <h4 class="title-h4">Outreach-Project Collaboration</h4>
                    <p>Please Provide a breief project description</p>

                    <div class="row mb-3 mt-2">
                      <label for="" class="col-sm-4 col-form-label"
                        >Project Name</label
                      >
                      <div class="col-sm-8">
                        <input type="text" class="form-control" name="" />
                      </div>
                    </div>
                    <!-- row-close -->

                    <div class="row mb-3 mt-2">
                      <label for="" class="col-sm-4 col-form-label"
                        >Project Background</label
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
                        >Project Objectives</label
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
                        >Target Audience</label
                      >
                      <div class="col-sm-8">
                        <input type="text" class="form-control" name="" />
                      </div>
                    </div>
                    <!-- row-close -->

                    <div class="row mb-3 mt-2">
                      <label for="" class="col-sm-4 col-form-label"
                        >Number of Participants</label
                      >
                      <div class="col-sm-8">
                        <input type="text" class="form-control" name="" />
                      </div>
                    </div>
                    <!-- row-close -->

                    <div class="row mb-3 mt-2">
                      <label for="" class="col-sm-4 col-form-label"
                        >Time Frame</label
                      >
                      <div class="col-sm-8">
                        <input type="text" class="form-control" name="" />
                      </div>
                    </div>
                    <!-- row-close -->

                    <div class="row mb-3 mt-2">
                      <label for="" class="col-sm-4 col-form-label"
                        >Estimated Budget (if any)
                      </label>
                      <div class="col-sm-8">
                        <input type="text" class="form-control" name="" />
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
                          rows="3"
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
                            value="project-location-mentari"
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
                            value="project-location-others"
                          />
                          <label
                            class="form-check-label"
                            for="project-location-others"
                            >Others</label
                          >
                        </div>

                        <!-- hide-div -->
                        <div class="project-location-mentari profess-box hide">
                          <div class="mt-3">
                            <select class="form-select">
                              <option selected>Please Select</option>
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
                        >How do you want to measure the target outcome?
                      </label>
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
                        >Any planned follow up projects?</label
                      >
                      <div class="col-sm-8">
                        <textarea
                          class="form-control textarea"
                          rows="3"
                        ></textarea>
                      </div>
                    </div>
                    <!-- row-close -->
                  </div>

                  <!-- outreach-projectshow -->

                  <div class="areas-involvement hide" id="networkingshow">
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
                        >Estimated Budget
                      </label>
                      <div class="col-sm-8">
                        <input type="text" class="form-control" name="" />
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
                              <option selected>Please Select</option>
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
                        >Number of Participants</label
                      >
                      <div class="col-sm-8">
                        <input type="text" class="form-control" name="" />
                      </div>
                    </div>
                    <!-- row-close -->
                  </div>
                  <!-- networking -->

                  <div class="col-sm-12">
                    <div class="form-check mt-5">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="gridCheck"
                      />
                      <label class="form-check-label" for="gridCheck">
                        I agree to the terms and condition<span>*</span>
                      </label>
                    </div>
                  </div>

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
                            value="option1"
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
                            value="option2"
                          />
                          <label class="form-check-label" for="screening-no"
                            >No</label
                          >
                        </div>
                      </div>
                    </div>

                    <a href="#" class="btn btn-warning btn-text ml-auto"
                      ><i class="fa fa-save"></i> Save</a
                    >
                  </div>

                  <!-- row-close -->
                </form>
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
   components: { VonFooter, CommonHeader, CommonSidebar },
  name: "von-management-individualview",
  data() {
    return {
      userdetails: null,
      errors: [],
      loader: false,
      Id: 0,
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    let urlParams = new URLSearchParams(window.location.search);
    this.Id = urlParams.get("id");
    if (this.Id) {
      this.editrecord();
    }
  },
  methods: {
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
