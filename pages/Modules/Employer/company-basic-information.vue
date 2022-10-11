<template>
  <div id="layoutSidenav">
    <CommonSidebarEmployer/>
    <div id="layoutSidenav_content">
      <CommonHeaderEmployer />
      <main>
           <Loader v-if="loader" />
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>Company Basic Information</h1>
          </div>

          <div class="card mb-4">
            <div class="card-body">
              <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                  <a
                    class="nav-link active"
                    id="nav-cb-tab"
                    data-bs-toggle="tab"
                    href="#nav-cb"
                    type="button"
                    role="tab"
                    aria-controls="nav-cb"
                    aria-selected="true"
                    >Company Background</a
                  >
                  <a
                    class="nav-link"
                    id="nav-cp-tab"
                    data-bs-toggle="tab"
                    href="#nav-cp"
                    type="button"
                    role="tab"
                    aria-controls="nav-cp"
                    aria-selected="false"
                    >Contact Person</a
                  >
                </div>
              </nav>
              <div class="tab-content" id="nav-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="nav-cb"
                  role="tabpanel"
                  aria-labelledby="nav-cb-tab"
                >
                  <form class="new-tabform" method="post" @submit.prevent="OnCompanyAdd">
                    <div class="row mb-3">
                      <label class="col-sm-4 col-form-label"
                        >Company Name</label
                      >
                      <div class="col-sm-8">
                        <input
                          type="text"
                          class="form-control"
                          v-model="company_name"
                        />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label class="col-sm-4 col-form-label"
                        >Company Registration Number</label
                      >
                      <div class="col-sm-8">
                        <input
                          type="text"
                          class="form-control"
                          v-model="company_registration_number"
                        />
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label class="col-sm-4 col-form-label"
                        >Company Registered Addres</label
                      >
                      <div class="col-sm-8">
                        <input
                          type="text"
                          class="form-control"
                          v-model="company_address_1"
                        />
                        <input
                          type="text"
                          class="form-control"
                          v-model="company_address_2"
                        />
                        <input
                          type="text"
                          class="form-control"
                          v-model="company_address_3"
                        />
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-4 mb-3">
                        <label class="form-label">State</label>
                        <select
                          v-model="state_id"
                          class="form-select"
                          aria-label="Default select example"
                          @change="onCitybind($event)"
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
                        <label class="form-label">City</label>
                        <select
                          v-model="city_id"
                          class="form-select"
                          aria-label="Default select example"
                        >
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
                        <label class="form-label">Postcode</label>
                        <input
                          type="text"
                          class="form-control"
                          v-model="postcode"
                        />
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label class="col-sm-4 col-form-label"
                        >Employment Sector</label
                      >
                      <div class="col-sm-8">
                        <div class="row">
                          <div class="col-sm-6">
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value="Manufacturing"
                                v-model="manufacturing"
                                id="es-1"
                              />
                              <label class="form-check-label" for="es-1">
                                Manufacturing
                              </label>
                            </div>

                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value="Oil and Gas"
                                v-model="oil"
                                id="es-2"
                              />
                              <label class="form-check-label" for="es-2">
                                Oil and Gas
                              </label>
                            </div>

                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value="Education"
                                v-model="education"
                                id="es-3"
                              />
                              <label class="form-check-label" for="es-3">
                                Education
                              </label>
                            </div>

                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value="Business"
                                v-model="business"
                                id="es-5"
                              />
                              <label class="form-check-label" for="es-5">
                                Business
                              </label>
                            </div>

                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value="Information Technology"
                                v-model="information"
                                id="es-1"
                              />
                              <label class="form-check-label" for="es-1">
                                Information Technology
                              </label>
                            </div>

                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value="Telecommunication"
                                v-model="telecommunication"
                                id="es-6"
                              />
                              <label class="form-check-label" for="es-6">
                                Telecommunication
                              </label>
                            </div>
                          </div>

                          <div class="col-sm-6 es-box">
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value="Building Contruction"
                                v-model="building"
                                id="es-8"
                              />
                              <label class="form-check-label" for="es-8">
                                Building Contruction
                              </label>
                            </div>

                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value="Transportation"
                                v-model="transportation"
                                id="es-9"
                              />
                              <label class="form-check-label" for="es-9">
                                Transportation
                              </label>
                            </div>

                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value="Service"
                                v-model="service"
                                id="es-10"
                              />
                              <label class="form-check-label" for="es-10">
                                Service
                              </label>
                            </div>

                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value="others-es"
                                id="es-7"
                              />
                              <label class="form-check-label" for="es-7">
                                Others
                              </label>
                            </div>

                            <div class="others-es hide">
                              <input
                                type="text"
                                placeholder="Please specify"
                                class="form-control"
                                v-model="other"
                                name=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label class="col-sm-4 col-form-label"
                        >Corporate Body Sector</label
                      >
                      <div class="col-sm-8 cbs-box">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value="Government Sector"
                            v-model="government"
                            id="cbs-1"
                          />
                          <label class="form-check-label" for="cbs-1">
                            Government Sector
                          </label>
                        </div>

                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value="Private Sector"
                            v-model="privatesector"
                            id="cbs-2"
                          />
                          <label class="form-check-label" for="cbs-2">
                            Private Sector
                          </label>
                        </div>

                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value="Small and Medium Enterprises (SME)"
                            v-model="small"
                            id="cbs-3"
                          />
                          <label class="form-check-label" for="cbs-3">
                            Small and Medium Enterprises (SME)
                          </label>
                        </div>

                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value="others-cbs"
                            id="cbs-5"
                          />
                          <label class="form-check-label" for="cbs-5">
                            Others
                          </label>
                        </div>

                        <div class="others-cbs hide">
                          <input
                            type="text"
                            placeholder="Please specify"
                            class="form-control"
                            v-model="othersector"
                            name=""
                          />
                        </div>
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label class="col-sm-4 col-form-label"
                        >Does your company have an existing training program in
                        place?</label
                      >
                      <div class="col-sm-8">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            value="1"
                            v-model="is_existing_training_program"
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault1"
                          >
                            Yes
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            value="0"
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            v-model="is_existing_training_program"
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault2"
                          >
                            No
                          </label>
                        </div>
                      </div>
                    </div>
 <p v-if="errorList.length">
                          <ul>
                           <li style="color:red"  v-for='err in errorList' :key='err' >
                           {{ err }}
                             </li>
                        </ul>
                       </p>
                    <div class="d-flex">
                      <button
                        type="submit"
                        class="next-1 btn btn-warning btn-text ml-auto"
                      >
                        <i class="far fa-save"></i> Save
                      </button>
                    </div>
                  </form>
                </div>
                <!--  -->

                <div
                  class="tab-pane fade"
                  id="nav-cp"
                  role="tabpanel"
                  aria-labelledby="nav-cp-tab"
                >
                  <form class="new-tabform" method="post" @submit.prevent="OnAddContactPerson">
                    <div class="row mb-3">
                      <label class="col-sm-4 col-form-label">Name</label>
                      <div class="col-sm-8">
                        <input type="text" class="form-control" v-model="contact_name" />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label class="col-sm-4 col-form-label"
                        >Contact Number</label
                      >
                      <div class="col-sm-8">
                        <input type="text" class="form-control" v-model="contact_number" />
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label class="col-sm-4 col-form-label">Email</label>
                      <div class="col-sm-8">
                        <input type="text" class="form-control" v-model="contact_email" />
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label class="col-sm-4 col-form-label"
                        >Position in Company</label
                      >
                      <div class="col-sm-8">
                        <input type="text" class="form-control" v-model="contact_position" />
                      </div>
                    </div>
<p v-if="errorList.length">
                          <ul>
                           <li style="color:red"  v-for='err in errorList' :key='err' >
                           {{ err }}
                             </li>
                        </ul>
                       </p>
                    <div class="d-flex">
                      <button
                        type="button"
                        class="pre-1 btn btn-primary btn-text"
                      >
                        <i class="far fa-arrow-alt-to-left"></i> Back
                      </button>
                      <button
                        type="submit"
                        class="btn btn-warning btn-text ml-auto"
                      >
                        <i class="far fa-save"></i> Save
                      </button>
                    </div>
                  </form>
                </div>
                <!--  -->
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
import CommonHeaderEmployer from '../../../components/CommonHeaderEmployer.vue';
import CommonSidebarEmployer from '../../../components/CommonSidebarEmployer.vue';
export default {
  components: { CommonHeaderEmployer, CommonSidebarEmployer },
  name: "company-basic-information",
  data() {
    return {
      userdetails: null,
      CityList: [],
      StateList: [],
      errorList: [],
      company_name: "",
      company_registration_number: "",
      company_address_1: "",
      company_address_2: "",
      company_address_3: "",
      state_id: 0,
      city_id: 0,
      postcode: "",
      is_existing_training_program: 0,
      manufacturing: "",
      oil: "",
      education: "",
      business: "",
      information: "",
      telecommunication: "",
      building: "",
      transportation: "",
      service: "",
      other: "",
      government: "",
      privatesector: "",
      small: "",
      othersector: "",
      is_existing_training_program: 0,
      Id: 0,
      loader: false,
      contact_name:"",
      contact_number:"",
      contact_email:"",
      contact_position:""
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.GetStateList();
    $(document).ready(function () {
      $(".next-1").click(function (e) {
        if (this.Id) {
          e.preventDefault();
          $('#nav-tab a[href="#nav-cp"]').tab("show");
        } else {
        }
      });
      $(".pre-1").click(function (e) {
        e.preventDefault();
        $('#nav-tab a[href="#nav-cb"]').tab("show");
      });
      $('.es-box input[type="checkbox"]').click(function () {
        var inputValue = $(this).attr("value");
        $("." + inputValue).toggle();
      });
      $('.cbs-box input[type="checkbox"]').click(function () {
        var inputValue = $(this).attr("value");
        $("." + inputValue).toggle();
      });
    });
  },
  methods: {
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
      } else {
        this.CityList = [];
      }
    },
    async GetStateList() {
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
    },
    async OnCompanyAdd() {
      this.errorList = [];
      try {
        if (!this.company_name) {
          this.errorList.push("Company Name is required");
        }
        if (!this.company_registration_number) {
          this.errorList.push("Company Registration Number is required");
        }
        if (!this.company_address_1) {
          this.errorList.push("Company Registered Addres is required");
        }
        if (!this.state_id) {
          this.errorList.push("State is required");
        }
        if (!this.city_id) {
          this.errorList.push("City is required");
        }
        if (!this.postcode) {
          this.errorList.push("Postcode is required");
        }
        if (
          this.company_name &&
          this.company_registration_number &&
          this.company_address_1 &&
          this.state_id &&
          this.city_id &&
          this.postcode
        ) {
          this.loader = true;
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          const response = await this.$axios.post(
            "intervention-company/add",
            {
              type: "add",
              added_by: this.userdetails.user.id,
              company_name: this.company_name,
              company_registration_number: this.company_registration_number,
              company_address_1: this.company_address_1,
              company_address_2: this.company_address_2,
              company_address_3: this.company_address_3,
              state_id: this.state_id,
              city_id: this.city_id,
              postcode: this.postcode,
              corporate_body_sector: JSON.stringify([
                {
                  "Government Sector": this.government,
                  "Private Sector": this.privatesector,
                  "Small and Medium Enterprises (SME)": this.small,
                  "Others": this.othersector,
                },
              ]),
              is_existing_training_program: this.is_existing_training_program,
              employment_sector: JSON.stringify([
                {
                  "Manufacturing": this.manufacturing,
                  "Oil and Gas": this.oil,
                  "Education": this.education,
                  "Business": this.business,
                  "Information Technology": this.information,
                  "Telecommunication": this.telecommunication,
                  "Building Contruction": this.building,
                  "Transportation": this.transportation,
                  "Service": this.service,
                  "Others": this.other,
                },
              ]),
            },
            { headers }
          );
          console.log('my result',response.data);
          if (response.data.code == 200) {
            this.Id=response.data.id;
            this.loader = false;
            $('#nav-tab a[href="#nav-cp"]').tab("show");
            this.$nextTick(() => {
              $("#insertpopup").modal("show");
            });
          } else {
            this.loader = false;
            this.$nextTick(() => {
              $("#errorpopup").modal("show");
            });
          }
        }
      } catch (e) { 
        this.$nextTick(() => {
              $("#errorpopup").modal("show");
            });}
    },
    async OnAddContactPerson() {
      this.errorList = [];
      try {
        if (!this.contact_name) {
          this.errorList.push("Name is required");
        }
        if (!this.contact_number) {
          this.errorList.push("Contact Number is required");
        }
        if (!this.contact_email) {
          this.errorList.push("Email is required");
        }
        if (!this.contact_position) {
          this.errorList.push("Position in Company is required");
        }
        if (
          this.contact_name &&
          this.contact_number &&
          this.contact_email &&
          this.contact_position 
        ) {
          this.loader = true;
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          const response = await this.$axios.post(
            "intervention-company/add-person",
            {
              company_id: this.Id,
              contact_name: this.contact_name,
              contact_number: this.contact_number,
              contact_email: this.contact_email,
              contact_position: this.contact_position,
            },
            { headers }
          );
          console.log('my result',response.data);
          if (response.data.code == 200) {
            this.loader = false;
            this.$nextTick(() => {
              $("#insertpopup").modal("show");
            });
          } else {
            this.loader = false;
            this.$nextTick(() => {
              $("#errorpopup").modal("show");
            });
          }
        }
      } catch (e) { 
        this.$nextTick(() => {
              $("#errorpopup").modal("show");
            });}
    },
  },
};
</script>
<style scoped>
.hide {
  display: none;
}
#nav-tab  a {
  pointer-events: none;
}
</style>