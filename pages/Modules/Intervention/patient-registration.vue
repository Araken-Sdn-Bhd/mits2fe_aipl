<template>
  <div id="layoutSidenav">
    <CommonSidebar  />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
          <Loader v-if="loader" />
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>Patient Registration</h1>
          </div>

          <div class="card mb-4 overflow-hidden">
            <div class="card-body patient-registration">
              <ul
                class="nav nav-pills icon-tab disabled"
                id="pills-tab"
                role="tablist"
              >
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link active demographic-active"
                    id="pills-demographic-tab1"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-demographic1"
                    role="tab"
                    aria-controls="pills-demographic1"
                    aria-selected="true"
                    ref="tab1"
                  >
                    <i class="fad fa-user"></i>
                    <span>1: Demographic</span>
                  </a>
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    id="pills-socio-demographic-tab1"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-socio-demographic1"
                    role="tab"
                    aria-controls="pills-socio-demographic1"
                    aria-selected="false"
                    ref="tab2"
                  >
                    <i class="fad fa-id-card"></i>
                    <span>2: Socio Demographic</span>
                  </a>
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    id="pills-next-of-kin-tab1"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-next-of-kin1"
                    role="tab"
                    aria-controls="pills-next-of-kin1"
                    aria-selected="false"
                    ref="tab3"
                  >
                    <i class="fad fa-users"></i>
                    <span>3: Next of Kin</span>
                  </a>
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link allergy-active"
                    id="pills-allergy-tab1"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-allergy1"
                    role="tab"
                    aria-controls="pills-allergy1"
                    aria-selected="false"
                    ref="tab4"
                  >
                    <i class="fad fa-info"></i>
                    <span>4: Allergy</span>
                  </a>
                </li>
              </ul>

              <div class="tab-content" id="pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="pills-demographic"
                  role="tabpanel"
                  aria-labelledby="pills-demographic-tab"
                  ref="navdiv1"
                >
                  <div class="content-subtab border-0">
                    <form>
                      <div class="row">
                        <div class="col-sm-4">
                          <div class="mb-3">
                            <label class="form-label">Salutation</label>
                            <select
                              v-model="salutation_id"
                              class="form-select"
                              aria-label="Default select example"
                            >
                            <option value="0">Select Salutation</option>
                              <option
                                v-for="slt in salutationlist"
                                v-bind:key="slt.id"
                                v-bind:value="slt.id"
                              >
                                {{ slt.section_value }}
                              </option>
                            </select>
                          </div>
                        </div>
                        <div class="col-sm-7">
                          <div class="mb-3">
                            <label class="form-label"
                              >Name (As In NRIC)<small>*</small></label
                            >
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Enter Name (As In NRIC)"
                              name=""
                              v-model="name_asin_nric"
                            />
                          </div>
                        </div>
                      </div>
                      <!-- close-row -->

                      <div class="row mt-3 align-items-center">
                        <div class="col-sm-2">
                          <label class="form-label"
                            >Citizenship<small>*</small></label
                          >
                        </div>
                        <div class="col-sm-9">
                          <div class="radio radio-show">
                            <div
                              class="form-check form-check-inline col-sm-3"
                              v-for="(ct, i) in citizenshiplist"
                              :key="i"
                            >
                              <input
                                class="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                v-bind:id="'ct' + i"
                                 v-bind:value="ct.id"
                                v-model="citizenship"
                                @change="OnchangeCitizenship(ct.section_value,ct.id)"
                              />
                              <label
                                class="form-check-label"
                                v-bind:for="'ct' + i"
                                >{{ ct.section_value }}</label
                              >
                            </div>
                          </div>
                        </div>

                        <!-- DIV-SHOW -->
                        <div
                          class="malaysian box mb-0"
                          v-if="citizentype == 'Malaysian'"
                        >
                          <div class="row">
                            <div class="col-sm-6">
                              <label class="form-label">NRIC Type<small>*</small></label>
                              <select
                                v-model="nric_type"
                                class="form-select"
                                aria-label="Default select example"
                                v-on:change="resetModelValue"
                              >
                              <!--v-on:change="resetModelValue"-->
                              <option value="">Please Select</option>
                                <option
                                v-for="mar in nrictypelist"
                                v-bind:key="mar.id"
                                v-bind:value="mar.id"
                              >
                                {{ mar.section_value}}
                              </option>
                              </select>
                            </div>

                            <div class="col-sm-6" v-if="nric_type_code == 'Old IC'">
                              <label class="form-label">Old NRIC No<small>*</small></label>
                              <input
                                type="tel"
                                class="form-control toCapitalFirst"
                                placeholder="xxxxxxxx" @keyup="OnnricNo4"
                                v-model="nric_no"
                              />
                              <Error :message="error" v-if="error" />
                            </div>
                            <div class="col-sm-6" v-if="nric_type_code == 'New IC'">
                              <label class="form-label toCapitalFirst">New NRIC No<small>*</small></label>
                              <input
                                type="tel"
                                class="form-control"
                                placeholder="xxxxxx-xx-xxxx" @keyup="OnnricNo"
                                v-model="nric_no" @change="validateIC" v-on:keypress="NumbersOnly"
                              />
                              <Error :message="error" v-if="error" />
                            </div>
                            <div class="col-sm-6" v-if="nric_type_code == 'Police'">
                              <label class="form-label">Police ID<small>*</small></label>
                              <input
                                type="tel"
                                class="form-control toCapitalFirst"
                                placeholder="xxxxxxxxx" @keyup="OnnricNo3"
                                v-model="nric_no"
                              />
                              <Error :message="error" v-if="error" />
                            </div>
                            <div class="col-sm-6" v-if="nric_type_code == 'Army'">
                              <label class="form-label">Army ID<small>*</small></label>
                              <input
                                type="tel"
                                class="form-control toCapitalFirst"
                                placeholder="xxxxxxxx"
                                v-model="nric_no"
                              />
                              <Error :message="error" v-if="error" />
                            </div>
                          </div>
                        </div>

                        <div
                          class="permanent-resident box mb-0"
                          v-if="citizentype == 'Permanent Resident'"
                        >
                          <div class="row">
                            <div class="col-sm-6">
                              <label class="form-label">NRIC No<small>*</small></label>
                              <input
                                type="number"
                                class="form-control"
                                placeholder="xxxxxx-xx-xxxx" @keyup="OnnricNo1"
                                v-model="nric_no1" @change="validateIC" v-on:keypress="NumbersOnly"
                              />
                               <Error :message="error" v-if="error" />
                            </div>
                          </div>
                        </div>

                        <div
                          class="foreigner box mb-0"
                          v-if="citizentype == 'Foreigner'"
                        >
                          <div class="row">
                            <div class="col-sm-4">
                              <label class="form-label">Passport No<small>*</small></label>
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Enter Passport No"
                                v-model="passport_no"
                              />
                            </div>
                            <div class="col-sm-4">
                              <label class="form-label">Expiry Date<small>*</small></label>
                              <input type="date" class="form-control"  v-model="expiry_date" />
                            </div>
                            <div class="col-sm-4">
                              <label class="form-label">Issuing Country<small>*</small></label>
                             <select
                              v-model="country_id"
                              class="form-select"
                              aria-label="Default select example"
                            >
                             <option value="0">Select</option>
                              <option
                                v-for="cnt in countrylist"
                                v-bind:key="cnt.id"
                                v-bind:value="cnt.id"
                              >
                                {{ cnt.country_name }}
                              </option>
                            </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- close-row -->

                      <div class="row mt-4">
                        <div class="col-sm-2 mb-3">
                          <label class="form-label">Sex<small>*</small></label>
                        </div>
                        <div class="col-sm-9 mb-3">
                          <div class="radio">
                            <div
                              class="form-check form-check-inline col-sm-2"
                              v-for="(gn, i) in genderlist"
                              :key="i"
                            >
                              <input
                                class="form-check-input"
                                type="radio"
                                name="Sex"
                                v-bind:id="'gn' + i"
                                v-bind:value="gn.id"
                                v-model="sex"
                              />
                              <label
                                class="form-check-label"
                                v-bind:for="'gn' + i"
                                >{{ gn.section_value }}</label
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- close-row -->

                      <div class="row">
                        <div class="col-sm-4">
                          <div class="mb-3">
                            <label class="form-label">Date of Birth</label>
                            <input type="date" @change="OnAgeCalculation" class="form-control" name="" v-model="birth_date" />
                          </div>
                        </div>
                        <div class="col-sm-4">
                          <div class="mb-3">
                            <label class="form-label">Age</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Age"
                              name="" v-model="age"
                            />
                          </div>
                        </div>
                      </div>
                      <!-- close-row -->

                      <div class="row">
                        <div class="col-sm-4">
                          <div class="mb-3">
                            <label class="form-label"
                              >Mobile Phone No.<small>*</small></label
                            >
                            <input
                              type="tel"
                              class="form-control"
                              name=""
                              v-mask="'###-########'"
                              placeholder="xxx-xxxxxxxx" v-model="mobile_no"
                            />
                          </div>
                        </div>
                        <div class="col-sm-4">
                          <div class="mb-3">
                            <label class="form-label">House Phone No.</label>
                            <input
                              type="tel"
                              class="form-control"
                              v-mask="'##-########'"
                              placeholder="xx-xxxxxxxx"
                              name="" v-model="house_no"
                            />
                          </div>
                        </div>
                      </div>
                      <!-- close-row -->

                      <div class="row">
                        <div class="col-sm-4">
                          <div class="mb-3">
                            <label class="form-label">Hospital's MRN No.</label>
                            <input
                              type="text"
                              class="form-control"
                              name=""
                              placeholder="Enter Hospital's MRN No." v-model="hospital_mrn_no"
                            />
                          </div>
                        </div>
                        <div class="col-sm-4">
                          <div class="mb-3">
                            <label class="form-label">Mentari's MRN No.</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Mentari's MRN No."
                              name="" v-model="mintari_mrn_no"
                            />
                          </div>
                        </div>
                      </div>
                      <!-- close-row -->

                      <div class="row">
                        <div class="col-sm-4">
                          <div class="mb-3">
                            <label class="form-label">Type of Services<small>*</small></label>
                            <select
                              v-model="services_type"
                              class="form-select"
                              aria-label="Default select example" @change="onservicechange($event)"
                            >
                              <option value="0">Select</option>
                              <option
                                v-for="src in servicelist"
                                v-bind:key="src.id"
                                v-bind:value="{id: src.id, text: src.service_name}"
                              >
                                {{ src.service_name }}
                              </option>
                            </select>
                          </div>

                          <!-- hide-div -->
                          <div class="mb-3 rehabilitation selected-box" v-if="uploaddoc">
                            <label class="form-label"
                              >Upload Referral Letter</label
                            >
                            <input
                              class="form-control"
                              type="file"
                              id="formFile" @change="selectFile"
                            />
                          </div>
                          <!-- hide-div -->
                        </div>
                        <!-- col-sm-4 -->

                        <div class="col-sm-4">
                          <div class="mb-3">
                            <label class="form-label">Type of Referral<small>*</small></label>
                            <select
                              v-model="referral_type"
                              class="form-select"
                              aria-label="Default select example"
                            >
                              <option value="0">Select</option>
                              <option
                                v-for="rfl in referallist"
                                v-bind:key="rfl.id"
                                v-bind:value="rfl.id"
                              >
                                {{ rfl.section_value }}
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <!-- close-row -->

                      <div class="row">
                        <div class="col-sm-12">
                          <div class="mb-3">
                            <label class="form-label">Address</label>
                            <input
                              type="text"
                              class="form-control mb-2"
                              placeholder="Enter Street Address"
                              name="" v-model="address1"
                            />
                            <input
                              type="text"
                              class="form-control mb-2"
                              placeholder="Enter Street Address"
                              name="" v-model="address2"
                            />
                            <input
                              type="text"
                              class="form-control mb-2"
                              placeholder="Enter Street Address"
                              name="" v-model="address3"
                            />
                          </div>
                        </div>
                      </div>
                      <!-- close-row -->

                      <div class="row">
                        <div class="col-sm-4">
                          <div class="mb-3">
                            <label class="form-label">State</label>
                            <select
                              v-model="state_id"
                              class="form-select"
                              aria-label="Default select example"
                              @change="onSelectedState($event)"
                            >
                              <option value="0">Select</option>
                              <option
                                v-for="st in statelist"
                                v-bind:key="st.id"
                                v-bind:value="st.id"
                              >
                                {{ st.state_name }}
                              </option>
                            </select>
                          </div>
                        </div>
                        <div class="col-sm-4">
                          <div class="mb-3">
                            <label class="form-label">City</label>
                            <select
                              v-model="city_id"
                              @change="getPostcodeList($event)"
                              class="form-select"
                              aria-label="Default select example"
                            >
                              <option value="0">Select</option>
                              <option
                                v-for="ct in citylist"
                                v-bind:key="ct.city_name"
                                v-bind:value="ct.city_name"
                              >
                                {{ ct.city_name }}
                              </option>
                            </select>
                          </div>
                        </div>

                        <div class="col-sm-4">
                          <div class="mb-3">
                            <label class="form-label">Postcode</label>
                            <select
                              v-model="postcode"
                              class="form-select"
                              aria-label="Default Select example"
                            >
                              <option value="0">Select</option>
                              <option
                                v-for="ct in postcodelist"
                                v-bind:key="ct.id"
                                v-bind:value="ct.id"
                              >
                                {{ ct.postcode }}
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <!-- close-row -->
 <p v-if="errorList.length">
<ul>
        <li style="color:red"  v-for='err in errorList' :key='err' >
          {{ err }}
        </li>
</ul>
        </p>
                      <div class="d-flex align-items-center">
                        <a
                          @click="NextFirst"
                          class="btn btn-success next-btn ml-auto"
                          >Next <i class="fad fa-arrow-to-right"></i
                        ></a>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-socio-demographic"
                  role="tabpanel"
                  aria-labelledby="pills-socio-demographic-tab"
                  ref="navdiv2"
                >
                  <div class="content-subtab border-0">
                    <form>
                      <div class="row">
                        <div class="col-sm-6">
                          <div class="mb-3">
                            <label class="form-label">Race</label>
                              <select
                              v-model="race_id"
                              class="form-select"
                              aria-label="Default select example"
                              @change="OnchangeRace($event)"
                            >
                              <option value="0">Select</option>
                              <option
                                v-for="rce in racelist"
                                v-bind:key="rce.id"
                                v-bind:value="rce.id"

                              >
                                {{ rce.section_value }}
                              </option>
                            </select>
                          </div>
                        </div>
                        <div class="col-sm-6" v-if="otherRace || this.race_id == 79">
                        <div class="mb-3">
                          <label class="form-label">Please Specify</label>
                          <input
                            type="text"
                            class="form-control"
                            v-model="other_race"
                            placeholder="please specify other race"

                          />
                        </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="mb-3">
                            <label class="form-label">Religion</label>
                            <select
                              v-model="religion_id"
                              class="form-select"
                              aria-label="Default select example"
                              @change="OnchangeReligion($event)"
                            >
                              <option value="0">Select</option>
                              <option
                                v-for="rel in religionlist"
                                v-bind:key="rel.id"
                                v-bind:value="rel.id"
                              >
                                {{ rel.section_value }}
                              </option>
                            </select>
                          </div>
                        </div>
                        <div class="col-sm-6" v-if="otherReligion || this.religion_id == 90">
                        <div class="mb-3">
                          <label class="form-label">Please Specify</label>
                          <input
                            type="text"
                            class="form-control"
                            v-model="other_religion"
                            placeholder="please specify other religion"
                          />
                        </div>
                        </div>
                      </div>
                      <!-- close-row -->

                      <div class="row">
                        <div class="col-sm-6">
                          <div class="mb-3">
                            <label class="form-label">Marital Status</label>
                             <select
                              v-model="marital_id"
                              class="form-select"
                              aria-label="Default select example"
                              @change="OnchangeMarital($event)"
                            >
                              <option value="0">Select</option>
                              <option
                                v-for="mar in meritallist"
                                v-bind:key="mar.id"
                                v-bind:value="mar.id"
                              >
                                {{ mar.section_value }}
                              </option>
                            </select>
                          </div>
                        </div>
                        <div class="col-sm-6" v-if="otherMarital || this.marital_id == 112">
                        <div class="mb-3">
                          <label class="form-label">Please Specify</label>
                          <input
                            type="text"
                            class="form-control"
                            v-model="other_maritalList"
                            placeholder="please specify other marital status"
                          />
                        </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="mb-3">
                            <label class="form-label">Accommodation</label>
                             <select
                              v-model="accomodation_id"
                              class="form-select"
                              aria-label="Default select example"
                              @change="OnchangeAccommodation($event)"
                            >
                              <option value="0">Select</option>
                              <option
                                v-for="acco in accommodationlist"
                                v-bind:key="acco.id"
                                v-bind:value="acco.id"
                              >
                                {{ acco.section_value }}
                              </option>
                            </select>
                          </div>
                        </div>
                        <div class="col-sm-6" v-if="otherAccommodation || this.accomodation_id == 118">
                        <div class="mb-3">
                          <label class="form-label">Please Specify</label>
                          <input
                            type="text"
                            class="form-control"
                            v-model="other_accommodation"
                            placeholder="please specify other accommodation"
                          />
                        </div>
                        </div>
                      </div>
                      <!-- close-row -->

                      <div class="row">
                        <div class="col-sm-6">
                          <div class="mb-3">
                            <label class="form-label"
                              >Fee Exemption Status</label
                            >
                             <select
                              v-model="fee_exemption_status"
                              class="form-select"
                              aria-label="Default select example"
                              @change="OnchangeFee($event)"
                            >
                              <option value="0">Select</option>
                              <option
                                v-for="fee in feeexemptionlist"
                                v-bind:key="fee.id"
                                v-bind:value="fee.id"
                              >
                                {{ fee.section_value }}
                              </option>
                            </select>
                          </div>
                        </div>
                        <div class="col-sm-6" v-if="otherFeeExemStatus || this.fee_exemption_status == 106">
                        <div class="mb-3">
                          <label class="form-label">Please Specify</label>
                          <input
                            type="text"
                            class="form-control"
                            v-model="other_feeExemptionStatus"
                            placeholder="please specify other fee exemption status"
                          />
                        </div>
                        </div>

                        <div class="col-sm-6">
                          <div class="mb-3">
                            <label class="form-label">Occupation Status</label>
                            <select
                              v-model="occupation_status"
                              class="form-select"
                              aria-label="Default select example"
                              @change="OnchangeOccStatus($event)"
                            >
                              <option value="0">Select</option>
                              <option
                                v-for="ocu in occupationlist"
                                v-bind:key="ocu.id"
                                v-bind:value="ocu.id"
                              >
                                {{ ocu.section_value }}
                              </option>
                            </select>
                          </div>
                        </div>
                        <div class="col-sm-6" v-if="otherOccStatus  || this.occupation_status == 239">
                        <div class="mb-3">
                          <label class="form-label">Please Specify</label>
                          <input
                            type="text"
                            class="form-control"
                            v-model="other_occupationStatus"
                            placeholder="please specify other occupation status"
                          />
                        </div>
                        </div>
                      </div>
                      <!-- close-row -->

                      <div class="row">
                        <div class="col-sm-6">
                          <div class="mb-3">
                            <label class="form-label">Education Level</label>
                            <select
                              v-model="education_level"
                              class="form-select"
                              aria-label="Default select example"
                            >
                              <option value="0">Select</option>
                              <option
                                v-for="edu in educationlist"
                                v-bind:key="edu.id"
                                v-bind:value="edu.id"
                              >
                                {{ edu.section_value }}
                              </option>
                            </select>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="mb-3">
                            <label class="form-label">Occupation Sector</label>
                              <select
                              v-model="occupation_sector"
                              class="form-select"
                              aria-label="Default select example"
                            >
                              <option value="0">Select</option>
                              <option
                                v-for="sec in occupationsectorlist"
                                v-bind:key="sec.id"
                                v-bind:value="sec.id"
                              >
                                {{ sec.section_value }}
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <!-- close-row -->

                      <div class="d-flex align-items-center">
                        <a
                          @click="PreviousFirst"
                          class="btn btn-primary btn-text"
                          ><i class="fad fa-arrow-to-left"></i> Previous</a
                        >

                        <a
                          @click="NextSecond"
                          class="btn btn-success next-btn ml-auto"
                          >Next <i class="fad fa-arrow-to-right"></i
                        ></a>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-next-of-kin"
                  role="tabpanel"
                  aria-labelledby="pills-next-of-kin-tab"
                  ref="navdiv3"
                >
                  <div class="content-subtab border-0">
                    <form>
                      <div class="row">
                        <div class="col-sm-7">
                          <div class="mb-3">
                            <label class="form-label"
                              >Name (As In NRIC)<small></small></label
                            >
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Enter Name (As In NRIC)"
                              name=""
                              v-model="kin_name_asin_nric"
                            />
                          </div>
                        </div>
                        <div class="col-sm-4">
                          <div class="mb-3">
                            <label class="form-label"
                              >Relationship<small></small></label
                            >
                           <select
                              v-model="kin_relationship_id"
                              class="form-select"
                              aria-label="Default select example"
                            >
                              <option value="0">Select</option>
                              <option
                                v-for="relation in relationshiplist"
                                v-bind:key="relation.id"
                                v-bind:value="relation.id"
                              >
                                {{ relation.section_value }}
                              </option>
                            </select>
                          </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                              <label class="form-label">NRIC ID<small>*</small></label>
                              <input
                                type="tel"
                                class="form-control toCapitalFirst"
                                v-model.number="kin_nric_no"

                              />
                                <Error :message="error" v-if="error" />
                            </div>

                          </div>
                      </div>
                      <!-- close-row -->

                      <div class="row">
                        <div class="col-sm-4">
                          <div class="mb-3">
                            <label class="form-label"
                              >Mobile Phone No.<small></small></label
                            >
                            <input
                              type="tel"
                              class="form-control"
                              name=""
                              v-mask="'###-########'"
                              placeholder="xxx-xxxxxxxx"
                              v-model="kin_mobile_no"
                            />
                          </div>
                        </div>
                        <div class="col-sm-4">
                          <div class="mb-3">
                            <label class="form-label">House Phone No.</label>
                            <input
                              type="tel"
                              class="form-control"
                              v-mask="'##-########'"
                              placeholder="xx-xxxxxxxx"
                              name=""
                                v-model="kin_house_no"
                            />
                          </div>
                        </div>
                      </div>
                      <!-- close-row -->

                      <div class="row">
                        <div class="col-sm-12">
                          <div class="mb-3">
                            <label class="form-label">Address</label>
                            <input
                              type="text"
                              class="form-control mb-2"
                              placeholder="Enter Street Address"
                              name="" v-model="kin_address1"
                            />
                            <input
                              type="text"
                              class="form-control mb-2"
                              placeholder="Enter Street Address"
                              name="" v-model="kin_address2"
                            />
                            <input
                              type="text"
                              class="form-control mb-2"
                              placeholder="Enter Street Address"
                              name="" v-model="kin_address3"
                            />
                          </div>
                        </div>
                      </div>
                      <!-- close-row -->

                      <div class="row">
                        <div class="col-sm-4">
                          <div class="mb-3">
                            <label class="form-label">State</label>
                             <select
                              v-model="kin_state_id"
                              class="form-select"
                              aria-label="Default select example"
                              @change="onSelectedStateKin($event)"
                            >
                              <option value="0">Select</option>
                              <option
                                v-for="st in kinstatelist"
                                v-bind:key="st.id"
                                v-bind:value="st.id"
                              >
                                {{ st.state_name }}
                              </option>
                            </select>
                          </div>
                        </div>
                        <div class="col-sm-4">
                          <div class="mb-3">
                            <label class="form-label">City</label>
                            <select
                              v-model="kin_city_id"
                              class="form-select"
                              aria-label="Default select example"
                              @change="getkinPostcodeList($event)"
                            >
                              <option value="0">Select</option>
                              <option
                                v-for="ct in kincitylist"
                                v-bind:key="ct.city_name"
                                v-bind:value="ct.city_name"
                              >
                                {{ ct.city_name }}
                              </option>
                            </select>
                          </div>
                        </div>

                        <div class="col-sm-4">
                          <div class="mb-3">
                            <label class="form-label">Postcode</label>
                            <select
                              v-model="kin_postcode"
                              class="form-select"
                              aria-label="Default select example"
                            >
                              <option value="0">Select</option>
                              <option
                                v-for="ct in kinpostcodelist"
                                v-bind:key="ct.id"
                                v-bind:value="ct.id"
                              >
                                {{ ct.postcode }}
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <!-- close-row -->
<p v-if="errorList.length">
<ul>
        <li style="color:red"  v-for='err in errorList'
    :key='err' >
          {{ err }}
        </li>
      </ul>
        </p>
                      <div class="d-flex align-items-center">
                        <a
                          @click="PreviousSecnd"
                          class="btn btn-primary btn-text"
                          ><i class="fad fa-arrow-to-left"></i> Previous</a
                        >

                        <a
                          @click="NextThird"
                          class="btn btn-success next-btn ml-auto"
                          >Next <i class="fad fa-arrow-to-right"></i
                        ></a>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-allergy"
                  role="tabpanel"
                  aria-labelledby="pills-allergy-tab"
                  ref="navdiv4"
                >
                  <div class="content-subtab border-0">
                    <form>
                      <div class="row align-items-center mb-3">
                        <div class="col-sm-5">
                          <label class="form-label mb-0">Drug Allergy</label>
                        </div>
                        <div class="col-sm-2">
                          <div class="form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="drug-allergy"
                              id="da-yes"
                              value="0"
                              v-model="drug_allergy"
                            />
                            <label class="form-check-label" for="da-yes"
                              >Yes</label
                            >
                          </div>
                          <div class="form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="drug-allergy"
                              id="da-no"
                              value="1"  v-model="drug_allergy"
                            />
                            <label class="form-check-label" for="da-no"
                              >No</label
                            >
                          </div>
                        </div>

                        <!-- div-hide -->
                        <div class="col-sm-5 da-yes visibility-h">
                          <input
                            type="email"
                            class="form-control"
                            id=""
                            placeholder="To Specify"
                              v-model="drug_allergy_description"
                          />
                        </div>
                      </div>
                      <!-- close-row -->

                      <div class="row align-items-center mb-3">
                        <div class="col-sm-5">
                          <label class="form-label mb-0"
                            >Traditional Medication/Supplement Allergy</label
                          >
                        </div>
                        <div class="col-sm-2">
                          <div class="form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="tm-sa"
                              id="TM-SA-yes"
                              value="0"
                              v-model="traditional_medication"
                            />
                            <label class="form-check-label" for="TM-SA-yes"
                              >Yes</label
                            >
                          </div>
                          <div class="form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="tm-sa"
                              id="TM-SA-no"
                              value="1"  v-model="traditional_medication"
                            />
                            <label class="form-check-label" for="TM-SA-no"
                              >No</label
                            >
                          </div>
                        </div>

                        <!-- div-hide -->
                        <div class="col-sm-5 tm-sa-yes visibility-h">
                          <input
                            type="email"
                            class="form-control"
                            id=""
                            placeholder="To Specify" v-model="traditional_description"
                          />
                        </div>
                      </div>
                      <!-- close-row -->

                      <div class="row align-items-center mb-3">
                        <div class="col-sm-5">
                          <label class="form-label mb-0">Others Allergy</label>
                        </div>
                        <div class="col-sm-2">
                          <div class="form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="others-allergy"
                              id="oa-yes"
                              value="0" v-model="other_allergy"
                            />
                            <label class="form-check-label" for="oa-yes"
                              >Yes</label
                            >
                          </div>
                          <div class="form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="others-allergy"
                              id="oa-no"
                              value="1"  v-model="other_allergy"
                            />
                            <label class="form-check-label" for="oa-no"
                              >No</label
                            >
                          </div>
                        </div>

                        <!-- div-hide -->
                        <div class="col-sm-5 oa-yes visibility-h">
                          <input
                            type="email"
                            class="form-control"
                            id=""
                            placeholder="To Specify"  v-model="other_description"
                          />
                        </div>
                      </div>
                      <div class="row align-items-center mb-3" v-if="!Id">
                        <div class="col-sm-5">
                          <label class="form-label mb-0">DOES THIS PATIENT NEED TRIAGE/SCREENING</label>
                        </div>
                        <div class="col-sm-2">
                          <div class="form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="patient-triage-yes"
                              id="screen-yes"
                              value="1" v-model="patient_need_triage_screening"
                            />
                            <label class="form-check-label" for="screen-yes"
                              >Yes</label
                            >
                          </div>
                          <div class="form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="patient-triage-yes"
                              id="screen-no"
                              value="0"  v-model="patient_need_triage_screening"
                            />
                            <label class="form-check-label" for="screen-no"
                              >No</label
                            >
                          </div>
                        </div>
                      </div>
                      <!-- close-row -->
<p v-if="errorList.length">
<ul>
        <li style="color:red"  v-for='err in errorList'
    :key='err' >
          {{ err }}
        </li>
      </ul>
        </p>
                      <div class="d-flex align-items-center">
                        <a
                          @click="PreviousThird"
                          class="btn btn-primary btn-text"
                          ><i class="fad fa-arrow-to-left"></i> Previous</a
                        >
                        <div id="hidebutton" ref="hidebutton">
                        <a v-if="!Id"
                          @click="submitRegistration"
                          class="btn btn-success next-btn ml-auto"
                          ><i class="far fa-paper-plane"></i> Submit</a
                        >
                        <a v-if="Id"
                          @click="updateRegistration"
                          class="btn btn-success btn-text ml-auto"
                          ><i class="far fa-paper-plane"></i> Update</a
                        >
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <intervention-footer></intervention-footer>
    </div>
  </div>
</template>
<script>
import CommonHeader from "../../../components/CommonHeader.vue";
import CommonSidebar from "../../../components/CommonSidebar.vue";
export default {
  components: { CommonSidebar, CommonHeader },
  name: "patient-registration",
  data() {
    return {
      salutationlist: [],
      citizenshiplist: [],
      genderlist: [],
      servicelist: [],
      referallist: [],
      statelist: [],
      citylist: [],
      postcodelist: [],
      kinstatelist: [],
      kincitylist: [],
      kinpostcodelist: [],
      countrylist: [],
      racelist: [],
      religionlist: [],
      meritallist: [],
      accommodationlist: [],
      educationlist: [],
      occupationlist: [],
      feeexemptionlist: [],
      occupationsectorlist: [],
      relationshiplist: [],
      nrictypelist: [],
      kinstatelist: [],
      kincitylist:[],
      kinpostcodelist:[],
      citizenship: "",
      salutation_id: 0,
      name_asin_nric: "",
      sex: "",
      birth_date: "",
      age: "",
      mobile_no: "",
      house_no: "",
      hospital_mrn_no: "",
      mintari_mrn_no: "",
      services_type: 0,
      referral_type: 0,
      referral_letter: "",
      address1: "",
      address2: "",
      address3: "",
      state_id: 0,
      city_id: 0,
      postcode: 0,
      race_id: 0,
      religion_id: 0,
      marital_id: 0,
      accomodation_id: 0,
      education_level: 0,
      occupation_status: 0,
      fee_exemption_status: 0,
      occupation_sector: 0,
      kin_name_asin_nric: "",
      kin_relationship_id: 0,
      kin_mobile_no: "",
      kin_house_no: "",
      kin_address1: "",
      kin_address2: "",
      kin_address3: "",
      kin_state_id: 0,
      kin_city_id: 0,
      kin_postcode: 0,
      drug_allergy: "",
      drug_allergy_description: "",
      traditional_medication: "",
      traditional_description: "",
      other_allergy: "",
      other_description: "",
      nric_type: "",
      nric_no: "",
      referral_letter: "",
      passport_no: "",
      expiry_date: "",
      country_id: 0,
      errorList: [],
      userdetails: null,
      citizentype: "",
      uploaddoc: false,
      NextFirstval: false,
      nric_no1: "",
      Id: 0,
      loader: false,
      kin_nric_no: "",
      error: null,
      patient_need_triage_screening: "",
      id:0,
      text:"",
      branch_id:0,
      otherRace:false,
      otherReligion:false,
      otherAccommodation:false,
      otherMarital:false,
      otherFeeExemStatus:false,
      otherOccStatus:false,
      other_race:"",
      other_religion:"",
      other_accommodation:"",
      other_maritalList:"",
      other_feeExemptionStatus:"",
      other_occupationStatus:"",
      race_type:"",
      nric_type_code:"",
      SidebarAccess:null,
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.SidebarAccess = JSON.parse(localStorage.getItem("SidebarAccess"));
    console.log(this.SidebarAccess,'Sidebaraccess');
    this.GetList();
    let urlParams = new URLSearchParams(window.location.search);
    this.Id = urlParams.get("id");
    if (this.Id > 0) {
      this.GetPatientdetails();
    }
    $(document).ready(function () {
      $('input[name="drug-allergy"]:radio').change(function () {
        var radio_value = $('input:radio[name="drug-allergy"]:checked').val();
        if (radio_value == "0") {
          $(".da-yes").css("visibility", "visible");
        } else if (radio_value == "1") {
          $(".da-yes").css("visibility", "hidden");
        }
      });

      $('input[name="tm-sa"]:radio').change(function () {
        var radio_value = $('input:radio[name="tm-sa"]:checked').val();
        if (radio_value == "0") {
          $(".tm-sa-yes").css("visibility", "visible");
        } else if (radio_value == "1") {
          $(".tm-sa-yes").css("visibility", "hidden");
        }
      });

      $('input[name="others-allergy"]:radio').change(function () {
        var radio_value = $('input:radio[name="others-allergy"]:checked').val();
        if (radio_value == "0") {
          $(".oa-yes").css("visibility", "visible");
        } else if (radio_value == "1") {
          $(".oa-yes").css("visibility", "hidden");
        }
      });
    });
    this.GetStaffBranchId();
  },
  mounted(){
    if(this.SidebarAccess!=1){
         console.log('this.$refs.hidebutton',this.$refs.hidebutton);
          this.$refs.hidebutton.classList.add("hide");
    }
  },

  methods: {
    NumbersOnly(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();;
      } else {
        return true;
      }
    },
    async resetModelValue()
    {
      this.nric_no = "";
      this.error = null;

      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "/general-setting/fetch",
        {
          setting_id: this.nric_type,
        },
        { headers }
      );
      if (response.data.code == 200) {
        this.nric_type_code = response.data.setting[0].section_value;
        console.log('manish',this.nric_type_code);
      } else {
        window.alert("Something went wrong");
      }


    },
    NextFirst() {
      this.errorList = [];
      this.NextFirstval = true;
      if (!this.mobile_no) {
        this.errorList.push("Mobile Phone No is required.");
      }
      if (!this.name_asin_nric) {
        this.errorList.push("Name (As In NRIC) is required.");
      }
      if (!this.citizenship) {
        this.errorList.push("Citizenship is required.");
      }
      if (!this.sex) {
        this.errorList.push("Gender is required.");
      }
      if (!this.services_type) {
        this.errorList.push("Type of Services is required.");
      }
      if (!this.referral_type) {
        this.errorList.push("Type of Referral is required.");
      }
      if (this.citizenship) {
        if (this.citizentype == "Malaysian") {
          if (!this.nric_type) {
            this.errorList.push("NRIC Type is required.");
            this.NextFirstval = false;
          }
          if (!this.nric_no) {
            this.errorList.push("NRIC No is required.");
            this.NextFirstval = false;
          }
          //} else {
          //  if (this.nric_no.length != 12) {
          //    this.errorList.push("Please Enter 12 Digit NRIC No.");
          //    this.NextFirstval = false;
          //  }
          //}
        } else if (this.citizentype == "Permanent Resident") {
          if (!this.nric_no1) {
            this.errorList.push("NRIC No is required.");
            this.NextFirstval = false;
          }
          //else {
          //  this.nric_no = this.nric_no1;
          //  if (this.nric_no.length != 12) {
          //    this.errorList.push("Please Enter 12 Digit NRIC No.");
          //    this.NextFirstval = false;
          //  }
          //}
        } else {
          if (!this.passport_no) {
            this.errorList.push("Passport No is required.");
            this.NextFirstval = false;
          }
          if (!this.expiry_date) {
            this.errorList.push("Expiry Date is required.");
            this.NextFirstval = false;
          }
          if (!this.country_id) {
            this.errorList.push("Issuing Country is required.");
            this.NextFirstval = false;
          }
        }
      }
      if (
        this.mobile_no &&
        this.citizenship &&
        this.NextFirstval &&
        this.name_asin_nric &&
        this.sex &&
        this.services_type &&
        this.referral_type
      ) {
        this.$refs.tab2.classList.add("active");
        this.$refs.navdiv1.classList.remove("active");
        this.$refs.navdiv1.classList.remove("show");
        this.$refs.navdiv2.classList.add("active");
        this.$refs.navdiv2.classList.add("show");
        this.GetTab2List();
      }
    },
    NextSecond() {
      this.$refs.tab3.classList.add("active");
      this.$refs.navdiv2.classList.remove("active");
      this.$refs.navdiv2.classList.remove("show");
      this.$refs.navdiv3.classList.add("active");
      this.$refs.navdiv3.classList.add("show");
    },
    NextThird() {
      // this.errorList = [];
      // if (!this.kin_name_asin_nric) {
      //   this.errorList.push("Name (As In NRIC) No is required.");
      // }
      // if (!this.kin_relationship_id) {
      //   this.errorList.push("Relationship is required.");
      // }
      // if (!this.kin_mobile_no) {
      //   this.errorList.push("Mobile Phone No is required.");
      // }
      // if (
      //   this.kin_name_asin_nric &&
      //   this.kin_mobile_no &&
      //   this.kin_relationship_id
      // ) {
      this.$refs.tab4.classList.add("active");
      this.$refs.navdiv3.classList.remove("active");
      this.$refs.navdiv3.classList.remove("show");
      this.$refs.navdiv4.classList.add("active");
      this.$refs.navdiv4.classList.add("show");
      // }
    },
    PreviousFirst() {
      this.$refs.tab1.classList.add("active");
      this.$refs.tab2.classList.remove("active");
      this.$refs.navdiv2.classList.remove("active");
      this.$refs.navdiv2.classList.remove("show");
      this.$refs.navdiv1.classList.add("active");
      this.$refs.navdiv1.classList.add("show");
    },
    PreviousSecnd() {
      this.$refs.tab2.classList.add("active");
      this.$refs.tab3.classList.remove("active");
      this.$refs.navdiv3.classList.remove("active");
      this.$refs.navdiv3.classList.remove("show");
      this.$refs.navdiv2.classList.add("active");
      this.$refs.navdiv2.classList.add("show");
    },
    PreviousThird() {
      this.$refs.tab3.classList.add("active");
      this.$refs.tab4.classList.remove("active");
      this.$refs.navdiv4.classList.remove("active");
      this.$refs.navdiv4.classList.remove("show");
      this.$refs.navdiv3.classList.add("active");
      this.$refs.navdiv3.classList.add("show");
    },
    //List
    async GetList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get(
        "general-setting/list?section=" + "salutation",
        { headers }
      );
      if (response.data.code == 200 || response.data.code == "200") {
        this.salutationlist = response.data.list;
      } else {
        this.salutationlist = [];
      }
      const response1 = await this.$axios.get(
        "general-setting/list?section=" + "citizenship",
        { headers }
      );
      if (response1.data.code == 200 || response1.data.code == "200") {
        this.citizenshiplist = response1.data.list;
      } else {
        this.citizenshiplist = [];
      }
      const response2 = await this.$axios.get(
        "general-setting/list?section=" + "gender",
        { headers }
      );
      if (response2.data.code == 200 || response2.data.code == "200") {
        this.genderlist = response2.data.list;
      } else {
        this.genderlist = [];
      }

      const response3 = await this.$axios.get("service/list", { headers });
      if (response3.data.code == 200 || response3.data.code == "200") {
        this.servicelist = response3.data.list;
      } else {
        this.servicelist = [];
      }
      const response4 = await this.$axios.get(
        "general-setting/list?section=" + "type-of-referral",
        {
          headers,
        }
      );
      if (response4.data.code == 200 || response4.data.code == "200") {
        this.referallist = response4.data.list;
      } else {
        this.referallist = [];
      }

      const response5 = await this.$axios.get("address/list", { headers });
      if (response5.data.code == 200 || response5.data.code == "200") {
        this.statelist = response5.data.list;
        this.citylist =[];
        this.postcodelist = [];
      } else {
        this.statelist = [];
        this.citylist =[];
        this.postcodelist = [];
      }
      const response7 = await this.$axios.get("address/country/list", {
        headers,
      });
      if (response7.data.code == 200 || response7.data.code == "200") {
        this.countrylist = response7.data.list;
      } else {
        this.countrylist = [];
      }
      const response8 = await this.$axios.get(
        "general-setting/list?section=" + "type-of-nric",
        { headers }
      );
      if (response8.data.code == 200 || response8.data.code == "200") {

        this.nrictypelist = response8.data.list;
      } else {
        this.nrictypelist = [];
      }

      const response9 = await this.$axios.get("address/list", { headers });
      if (response9.data.code == 200 || response9.data.code == "200") {
        this.kinstatelist = response9.data.list;
        this.kincitylist =[];
        this.kinpostcodelist = [];
      } else {
        this.kinstatelist = [];
        this.kincitylist =[];
        this.kinpostcodelist = [];
      }
    },
    async GetStaffBranchId() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "staffDesignatioDetail/staffInchargeDetail",
        {
          added_by: this.userdetails.user.id, //this.userdetails.user.id
        },
        { headers }
      );
      if (response.data.code == 200) {
        if(response.data.branch[0].branch_id){
          this.branch_id = response.data.branch[0].branch_id;
        }else{
          this.branch_id =response.data.branch;
          console.log('my branchid333',this.branch_id);
        }

      } else {
        window.alert("Something went wrong");
      }
    },
    async onSelectedState(event){
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
        this.citylist = response.data.list;
        this.postcodelist = [];
      } else {
        this.citylist = [];
        this.postcodelist = [];
      }
    },
    async getPostcodeList(event) {
     
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "address/" + event.target.value + "/getPostcodeListById",
        { headers }
      );
      if (response.data.code == 200 || response.data.code == "200") {
        this.postcodelist = response.data.list;
      } else {
        this.postcodelist = [];
      }
    
    },
    async onSelectedStateKin(event){
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "address/" + event.target.value + "/getCityList",
        { headers }
      );
      if (response.data.code == 200 || response.data.code == "200") {
        this.kincitylist = response.data.list;
        this.kinpostcodelist = [];
      } else {
        this.kincitylist = [];
        this.kinpostcodelist = [];
      }
    },
    async getkinPostcodeList(event) {
     
     const headers = {
       Authorization: "Bearer " + this.userdetails.access_token,
       Accept: "application/json",
       "Content-Type": "application/json",
     };
     const response = await this.$axios.post(
       "address/" + event.target.value + "/getPostcodeListById",
       { headers }
     );
     if (response.data.code == 200 || response.data.code == "200") {
       this.kinpostcodelist = response.data.list;
     } else {
       this.kinpostcodelist = [];
     }
   
   },
    async GetTab2List() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get(
        "general-setting/list?section=" + "race",
        { headers }
      );
      if (response.data.code == 200 || response.data.code == "200") {
        this.racelist = response.data.list;
      } else {
        this.racelist = [];
      }
      const response1 = await this.$axios.get(
        "general-setting/list?section=" + "religion",
        { headers }
      );
      if (response1.data.code == 200 || response1.data.code == "200") {
        this.religionlist = response1.data.list;
      } else {
        this.religionlist = [];
      }
      const response2 = await this.$axios.get(
        "general-setting/list?section=" + "marital-status",
        { headers }
      );
      if (response2.data.code == 200 || response2.data.code == "200") {
        this.meritallist = response2.data.list;
      } else {
        this.meritallist = [];
      }
      const response4 = await this.$axios.get(
        "general-setting/list?section=" + "accommodation",
        { headers }
      );
      if (response4.data.code == 200 || response4.data.code == "200") {
        this.accommodationlist = response4.data.list;
      } else {
        this.accommodationlist = [];
      }
      const response5 = await this.$axios.get(
        "general-setting/list?section=" + "education-level",
        { headers }
      );
      if (response5.data.code == 200 || response5.data.code == "200") {
        this.educationlist = response5.data.list;
      } else {
        this.educationlist = [];
      }
      const response6 = await this.$axios.get(
        "general-setting/list?section=" + "occupation-status",
        { headers }
      );
      if (response6.data.code == 200 || response6.data.code == "200") {
        this.occupationlist = response6.data.list;
      } else {
        this.occupationlist = [];
      }
      const response7 = await this.$axios.get(
        "general-setting/list?section=" + "fee-exemption-status",
        { headers }
      );
      if (response7.data.code == 200 || response7.data.code == "200") {
        this.feeexemptionlist = response7.data.list;
      } else {
        this.feeexemptionlist = [];
      }
      const response8 = await this.$axios.get(
        "general-setting/list?section=" + "occupation-sector",
        { headers }
      );
      if (response8.data.code == 200 || response8.data.code == "200") {
        this.occupationsectorlist = response8.data.list;
      } else {
        this.occupationsectorlist = [];
      }
      const response9 = await this.$axios.get(
        "general-setting/list?section=" + "relationship",
        { headers }
      );
      if (response9.data.code == 200 || response9.data.code == "200") {
        this.relationshiplist = response9.data.list;
      } else {
        this.relationshiplist = [];
      }
    },
    OnchangeCitizenship(value, id) {
      this.citizenship = id;
      this.citizentype = value;
    },

    OnchangeRace(event) {
      if (event.target.options[event.target.options.selectedIndex].text == "OTHERS"){
        this.otherRace = true;
      }else{
        this.otherRace = false;
      }
    },
    OnchangeReligion(event) {
      if (event.target.options[event.target.options.selectedIndex].text == "OTHERS"){
        this.otherReligion = true;
      }else{
        this.otherReligion = false;
      }
    },
    OnchangeAccommodation(event) {
      if (event.target.options[event.target.options.selectedIndex].text == "OTHERS"){
        this.otherAccommodation = true;
      }else{
        this.otherAccommodation = false;
      }
    },
    OnchangeMarital(event) {
      if (event.target.options[event.target.options.selectedIndex].text == "OTHERS"){
        this.otherMarital = true;
      }else{
        this.otherMarital = false;
      }
    },
    OnchangeFee(event) {
      if (event.target.options[event.target.options.selectedIndex].text == "OTHERS"){
        this.otherFeeExemStatus = true;
      }else{
        this.otherFeeExemStatus = false;
      }
    },
    OnchangeOccStatus(event) {
      if (event.target.options[event.target.options.selectedIndex].text == "OTHERS"){
        this.otherOccStatus = true;
      }else{
        this.otherOccStatus = false;
      }
    },

    selectFile(event) {
      this.file = event.target.files[0];
    },
    async onservicechange(event) {
      if (
        event.target.options[event.target.options.selectedIndex].text ==
          "Community Psychiatric Service (CPS)" ||
        event.target.options[event.target.options.selectedIndex].text ==
          "Rehabilitation"
      ) {
        this.uploaddoc = true;
      } else {
        this.uploaddoc = false;
      }
    },
    async submitRegistration() {

      this.errorList = [];
      if (!this.patient_need_triage_screening) {
        this.errorList.push("Patient Need Triage Screening is required.");
      } else {
        try {
          this.loader = true;
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          let body = new FormData();
          body.append("added_by", this.userdetails.user.id);
          body.append("citizenship", this.citizenship);
          body.append("citizentype", this.citizentype);
          body.append("salutation_id", this.salutation_id);
          body.append("name_asin_nric", this.name_asin_nric);
          body.append("sex", this.sex);
          body.append("birth_date", this.birth_date);
          body.append("age", this.age);
          body.append("mobile_no", this.mobile_no);
          body.append("house_no", this.house_no);
          body.append("hospital_mrn_no", this.hospital_mrn_no);
          body.append("mintari_mrn_no", this.mintari_mrn_no);
          body.append("services_type", this.services_type.id);
          body.append("referral_type", this.referral_type);
          body.append("referral_letter", this.referral_letter);
          body.append("address1", this.address1);
          body.append("address2", this.address2);
          body.append("address3", this.address3);
          body.append("state_id", this.state_id);
          body.append("city_id", this.postcode);
          body.append("postcode", this.postcode);
          body.append("race_id", this.race_id);
          body.append("religion_id", this.religion_id);
          body.append("marital_id", this.marital_id);
          body.append("accomodation_id", this.accomodation_id);
          body.append("education_level", this.education_level);
          body.append("occupation_status", this.occupation_status);
          body.append("fee_exemption_status", this.fee_exemption_status);
          body.append("occupation_sector", this.occupation_sector);
          body.append("kin_name_asin_nric", this.kin_name_asin_nric);
          body.append("kin_relationship_id", this.kin_relationship_id);
          body.append("kin_nric_no", this.kin_nric_no);
          body.append("kin_mobile_no", this.kin_mobile_no);
          body.append("kin_house_no", this.kin_house_no);
          body.append("kin_address1", this.kin_address1);
          body.append("kin_address2", this.kin_address2);
          body.append("kin_address3", this.kin_address3);
          body.append("kin_state_id", this.kin_state_id);
          body.append("kin_city_id", this.kin_postcode);
          body.append("kin_postcode", this.kin_postcode);
          body.append("drug_allergy", this.drug_allergy);
          body.append("drug_allergy_description",this.drug_allergy_description);
          body.append("traditional_medication", this.traditional_medication);
          body.append("traditional_description", this.traditional_description);
          body.append("other_allergy", this.other_allergy);
          body.append("other_description", this.other_description);
          body.append("nric_type", this.nric_type);
          body.append("nric_no", this.nric_no);
          body.append("nric_no1", this.nric_no1);
          body.append("referral_letter", this.file);
          body.append("passport_no", this.passport_no);
          body.append("expiry_date", this.expiry_date);
          body.append("country_id", this.country_id);
          body.append("id", this.Id);
          body.append("branch_id", this.branch_id);
          body.append("patient_need_triage_screening",this.patient_need_triage_screening);
          body.append("other_race", this.other_race);
          body.append("other_religion", this.other_religion);
          body.append("other_accommodation", this.other_accommodation);
          body.append("other_maritalList", this.other_maritalList);
          body.append("other_feeExemptionStatus", this.other_feeExemptionStatus);
          body.append("other_occupationStatus", this.other_occupationStatus);


          if (this.Id > 0) {
            const response = await this.$axios.post(
              "patient-registration/update",
              body,
              {
                headers,
              }
            );
            if (response.data.code == 200 || response.data.code == "200") {
              this.$router.push("/Modules/Intervention/patient-list");
            } else {
              this.loader = false;
              this.$nextTick(() => {
                $("#errorpopup").modal("show");
              });
            }
          } else {
            const response = await this.$axios.post(
              "patient-registration/add",
              body,
              {
                headers,
              }
            );
            console.log("my data resuklt", response.data);
            if (response.data.code == 200 || response.data.code == "200") {
              this.$nextTick(() => {
                $("#insertpopup").modal("show");
              });
              this.$router.push("/Modules/Intervention/patient-list");
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
     async updateRegistration() {
      this.errorList = [];
        try {
          this.loader = true;
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          let body = new FormData();
          body.append("added_by", this.userdetails.user.id);
          body.append("citizenship", this.citizenship);
          body.append("citizentype", this.citizentype);
          body.append("salutation_id", this.salutation_id);
          body.append("name_asin_nric", this.name_asin_nric);
          body.append("sex", this.sex);
          body.append("birth_date", this.birth_date);
          body.append("age", this.age);
          body.append("mobile_no", this.mobile_no);
          body.append("house_no", this.house_no);
          body.append("hospital_mrn_no", this.hospital_mrn_no);
          body.append("mintari_mrn_no", this.mintari_mrn_no);
          body.append("services_type", this.services_type.id);
          body.append("referral_type", this.referral_type);
          body.append("referral_letter", this.referral_letter);
          body.append("address1", this.address1);
          body.append("address2", this.address2);
          body.append("address3", this.address3);
          body.append("state_id", this.state_id);
          body.append("city_id", this.postcode);
          body.append("postcode", this.postcode);
          body.append("race_id", this.race_id);
          body.append("religion_id", this.religion_id);
          body.append("marital_id", this.marital_id);
          body.append("accomodation_id", this.accomodation_id);
          body.append("education_level", this.education_level);
          body.append("occupation_status", this.occupation_status);
          body.append("fee_exemption_status", this.fee_exemption_status);
          body.append("occupation_sector", this.occupation_sector);
          body.append("kin_name_asin_nric", this.kin_name_asin_nric);
          body.append("kin_relationship_id", this.kin_relationship_id);
          body.append("kin_nric_no", this.kin_nric_no);
          body.append("kin_mobile_no", this.kin_mobile_no);
          body.append("kin_house_no", this.kin_house_no);
          body.append("kin_address1", this.kin_address1);
          body.append("kin_address2", this.kin_address2);
          body.append("kin_address3", this.kin_address3);
          body.append("kin_state_id", this.kin_state_id);
          body.append("kin_city_id", this.kin_postcode);
          body.append("kin_postcode", this.kin_postcode);
          body.append("drug_allergy", this.drug_allergy);
          body.append(
            "drug_allergy_description",
            this.drug_allergy_description
          );
          body.append("traditional_medication", this.traditional_medication);
          body.append("traditional_description", this.traditional_description);
          body.append("other_allergy", this.other_allergy);
          body.append("other_description", this.other_description);
          body.append("nric_type", this.nric_type);
          body.append("nric_no", this.nric_no);
          body.append("nric_no1", this.nric_no1);
          body.append("referral_letter", this.file);
          body.append("passport_no", this.passport_no);
          body.append("expiry_date", this.expiry_date);
          body.append("country_id", this.country_id);
          body.append("id", this.Id);
          body.append(
            "patient_need_triage_screening",
            this.patient_need_triage_screening
          );
          body.append("other_race", this.other_race);
          body.append("other_religion", this.other_religion);
          body.append("other_accommodation", this.other_accommodation);
          body.append("other_marital", this.other_maritalList);
          body.append("other_feeExemStatus", this.other_feeExemptionStatus);
          body.append("other_occupationStatus", this.other_occupationStatus);
          if (this.Id > 0) {
            const response = await this.$axios.post(
              "patient-registration/update",
              body,
              {
                headers,
              }
            );
            if (response.data.code == 200 || response.data.code == "200") {
              this.$router.push("/Modules/Intervention/patient-list");
            } else {
              this.loader = false;
              this.$nextTick(() => {
                $("#errorpopup").modal("show");
              });
            }
          } else {
            const response = await this.$axios.post(
              "patient-registration/add",
              body,
              {
                headers,
              }
            );
            console.log("my data resuklt", response.data);
            if (response.data.code == 200 || response.data.code == "200") {
              this.$router.push("/Modules/Intervention/patient-list");
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
    },
    async GetPatientdetails() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "patient-registration/getPatientRegistrationById",
        {
          id: this.Id,
        },
        { headers }
      );
      console.log("my pt details", response.data);
      if (response.data.code == 200) {
        this.accomodation_id = response.data.list[0].accomodation_id;
        this.address1 = response.data.list[0].address1;
        this.address2 = response.data.list[0].address2;
        this.address3 = response.data.list[0].address3;
        this.age = response.data.list[0].age;
        this.birth_date = response.data.list[0].birth_date;
        this.citizenship = response.data.list[0].citizenship;
        this.city_id = response.data.list[0].city_id;
        this.country_id = response.data.list[0].country_id;
        this.drug_allergy = response.data.list[0].drug_allergy;
        this.drug_allergy_description = response.data.list[0].drug_allergy_description;
        this.education_level = response.data.list[0].education_level;
        this.expiry_date = response.data.list[0].expiry_date;
        this.fee_exemption_status = response.data.list[0].fee_exemption_status;
        this.hospital_mrn_no = response.data.list[0].hospital_mrn_no;
        this.house_no = response.data.list[0].house_no;
        this.Id = response.data.list[0].id;
        this.kin_address1 = response.data.list[0].kin_address1;
        this.kin_address2 = response.data.list[0].kin_address2;
        this.kin_address3 = response.data.list[0].kin_address3;
        this.kin_city_id = response.data.list[0].kin_city_id;
        this.kin_house_no = response.data.list[0].kin_house_no;
        this.kin_mobile_no = response.data.list[0].kin_mobile_no;
        this.kin_name_asin_nric = response.data.list[0].kin_name_asin_nric;
        this.kin_postcode = response.data.list[0].kin_postcode;
        this.kin_relationship_id = response.data.list[0].kin_relationship_id;
        this.kin_state_id = response.data.list[0].kin_state_id;
        this.marital_id = response.data.list[0].marital_id;
        this.mintari_mrn_no = response.data.list[0].mintari_mrn_no;
        this.mobile_no = response.data.list[0].mobile_no;
        this.name_asin_nric = response.data.list[0].name_asin_nric;
        var str = response.data.list[0].nric_no;
        this.nric_no = str.replace(/[^a-z0-9\s]/gi, '');
        console.log('nric',this.nric_no);
        this.nric_type = response.data.list[0].nric_type;
        this.occupation_sector = response.data.list[0].occupation_sector;
        this.occupation_status = response.data.list[0].occupation_status;
        this.other_allergy = response.data.list[0].other_allergy;
        this.other_description = response.data.list[0].other_description;
        this.passport_no = response.data.list[0].passport_no;
        this.patient_mrn = response.data.list[0].patient_mrn;
        this.postcode = response.data.list[0].postcode;
        this.race_id = response.data.list[0].race_id;
        this.referral_letter = response.data.list[0].referral_letter;
        this.referral_type = response.data.list[0].referral_type;
        this.religion_id = response.data.list[0].religion_id;
        this.salutation_id = response.data.list[0].salutation_id;
        this.services_type = {id: response.data.list[0].services_type, text: response.data.list[0].service['service_name']};

        this.sex = response.data.list[0].sex;
        this.state_id = response.data.list[0].state_id;
        this.status = response.data.list[0].status;
        this.traditional_description = response.data.list[0].traditional_description;
        this.traditional_medication = response.data.list[0].traditional_medication;


        this.citizentype = response.data.list[0].citizenships[0].section_value;

        this.race


        this.other_race = response.data.list[0].other_race;
        this.other_religion= response.data.list[0].other_religion;
        this.other_accommodation = response.data.list[0].other_accommodation;
        this.other_maritalList = response.data.list[0].other_maritalList;
        this.other_feeExemptionStatus = response.data.list[0].other_feeExemptionStatus;
        this.other_occupationStatus = response.data.list[0].other_occupationStatus;

        const response6 = await this.$axios.get("address/postcodelistfiltered?state="+this.state_id, {
        headers,
      });
      if (response6.data.code == 200 || response6.data.code == "200") {
        this.citylist = response6.data.list;
      } else {
        this.citylist = [];
      }
      } else {
        window.alert("Something went wrong");
      }
    },
    kinOnnricNo1() {
      if (this.kin_nric_no.length == 12) {
        this.error = null;
      } else {
        this.error = "Please Enter 12 Digit NRIC No";
      }
    },
    OnnricNo() {
      if (this.nric_no.length == 12) {
        this.firstDob = String(this.nric_no).slice(0, 4);
        this.secondDob = String(this.nric_no).slice(4, 6);
        this.thirdDob = String(this.nric_no).slice(6, 8);
        // this.birth_date = this.firstDob+"-"+this.secondDob+"-"+this.thirdDob;
        // this.birth_date = this.getDate(this.nric_no);
        this.birth_date = this.getDate(this.nric_no);
        this.error = null;

      var today = new Date();
      var birthDate = new Date(this.birth_date);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      this.age = age;
      } else {
        this.error = "Please Enter 12 Digit NRIC No";
      }
    },
    getDate(d) {
      return (
        (parseInt(d[0] + d[1]) < 30 ? "20" : "19") +
        d[0] +
        d[1] +
        "-" +
        d[2] +
        d[3] +
        "-" +
        d[4] +
        d[5]
      );
    },
    OnnricNo1() {
      if (this.nric_no1.length == 12) {
        this.birth_date = this.getDate(this.nric_no1);
        this.error = null;
      } else {
        this.error = "Please Enter 12 Digit NRIC No";
      }
    },
    OnnricNo3(){
      if (this.nric_no.length == 9 || this.nric_no.length == 8) {
        this.error = null;
      } else {
        this.error = "Please Enter a Valid Police ID";
      }
    },
    OnnricNo4(){
      if (this.nric_no.length < 8 ) {
        this.error = null;
      } else {
        this.error = "Please Enter a Valid Old NRIC No";
      }
    },
     OnAgeCalculation() {
      var today = new Date();
      var birthDate = new Date(this.birth_date);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      this.age = age;
      //window.alert(age);
    },
    async validateIC(data){
      try {
        var no = this.nric_no1.slice(0, 6);
        var no1 = this.nric_no1.slice(6, 8);
        var no2 = this.nric_no1.slice(8, 12);
        var validate = no + "-" + no1 + "-" + no2;
        const headers = {
          Authorization: "Bearer " + this.userdetails.access_token,
          Accept: "application/json",
          "Content-Type": "application/json",
        };
        const response = await this.$axios.get(
        "patient-registration/validatePatientNric?ic=" + validate,
        { headers }
        );
        if (response.data.code == 200) {
          this.OnAgeCalculation();
        } else {
          this.error = "Patient with this NRIC is already registered.";
        }
      } catch (e) {}
    },
  },
};
</script>
<style scoped>
#pills-tab .nav-item a {
  pointer-events: none;
}

.toCapitalFirst {
  text-transform: uppercase;
}
.hide{
  display: none !important;
}
</style>
