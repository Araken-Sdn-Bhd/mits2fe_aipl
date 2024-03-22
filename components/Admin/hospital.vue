<template>

  <div class="content-subtab">
    <Loader v-if="loader" />
    <div class="accordion accordion-form" id="accordionExample">
      <form class="g-3 mt-3" method="post" @submit.prevent="onAddhospital">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              HOD Psychiatrist Details
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div class="row mb-4">
                <div class="col-md-3">
                  <label for="" class="form-label">Salutation<small style="color:red">*</small> </label>
                  <select
                    v-model="salutation"
                    class="form-select"
                    aria-label="Default select example"
                  >
                  <option value="0">Please Select</option>
                    <option
                      v-for="slt in salutationlist"
                      v-bind:key="slt.id"
                      v-bind:value="slt.id"
                    >
                      {{ slt.section_value }}
                    </option>
                  </select>
                </div>
                <div class="col-md-9">
                  <label class="form-label">Name<small style="color:red">*</small> </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Person in charge name"
                    v-model="name"
                  />
                </div>
              </div>
              <!-- close-row -->

              <div class="row mb-4">
                <div class="col-md-3">
                  <label for="" class="form-label">Gender<small style="color:red">*</small> </label>
                  <select
                    v-model="gender"
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option value="0">Please Select</option>
                    <option
                      v-for="gndr in genderlist"
                      v-bind:key="gndr.id"
                      v-bind:value="gndr.id"
                    >
                      {{ gndr.section_value }}
                    </option>
                  </select>
                </div>

                <div class="col-md-3">
                  <label for="" class="form-label">Citizenship<small style="color:red">*</small> </label>
                  <select
                    v-model="citizenship"
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option value="0">Please Select</option>
                    <option
                      v-for="ct in citizenshiplist"
                      v-bind:key="ct.id"
                      v-bind:value="ct.id"
                    >
                      {{ ct.section_value }}
                    </option>
                  </select>
                </div>

                <div class="col-md-6">
                  <label class="form-label">NRIC NO. / Passport<small style="color:red">*</small> </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter NRIC NO. / Passport"
                    v-model="passport"
                  />
                </div>
              </div>
              <!-- close-row -->

              <div class="row mb-4">
                <div class="col-md-3">
                  <label for="" class="form-label">Religion<small style="color:red">*</small> </label>
                  <select
                    v-model="religion"
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option value="0">Please Select</option>
                    <option
                      v-for="rl in religionlist"
                      v-bind:key="rl.id"
                      v-bind:value="rl.id"
                    >
                      {{ rl.section_value }}
                    </option>
                  </select>
                </div>

                <div class="col-md-3">
                  <label for="" class="form-label">Designation<small style="color:red">*</small> </label>
                  <select
                    v-model="designation"
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option value="0">Please Select</option>
                    <option
                      v-for="dsnt in designationlist"
                      v-bind:key="dsnt.id"
                      v-bind:value="dsnt.id"
                    >
                      {{ dsnt.section_value }}
                    </option>
                  </select>
                </div>

                <div class="col-md-6">
                  <label class="form-label">Email<small style="color:red">*</small> </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Email"
                    v-model="email"
                      @blur="validateEmail"
                  />
                  <Error :message="emailerror" v-if="emailerror" />
                </div>

              </div>
              <!-- close-row -->

              <div class="row mb-4">
                <div class="col-md-4">
                  <label for="" class="form-label">Contact No. (Mobile)<small style="color:red">*</small> </label>
                  <input
                    type="tel"
                    v-mask="'###-########'"
                    class="form-control"
                    placeholder="Enter Contact No."
                    v-model="mobile"
                  />
                </div>

                <div class="col-md-4">
                  <label for="" class="form-label">Contact No. (Office)<small style="color:red">*</small> </label>
                  <input
                    type="tel"
                    v-mask="'##-########'"
                    class="form-control"
                    placeholder="Enter Contact No."
                    v-model="Contact"
                  />
                </div>
              </div>
              <!-- close-row -->
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Hospital Details
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div class="row mb-4">
                <div class="col-md-3">
                  <label for="" class="form-label">Hospital Code<small style="color:red">*</small> </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Hospital Code"
                    v-model="hospital_Code"
                  />
                </div>

                <div class="col-md-3">
                  <label for="" class="form-label">Hospital Prefix<small style="color:red">*</small> </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Hospital Prefix"
                    v-model="hospital_Prefix"
                  />
                </div>

                <div class="col-md-6">
                  <label class="form-label">Hospital Name<small style="color:red">*</small> </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Hospital Name"
                    v-model="hospital_Name"
                  />
                </div>
              </div>
              <!-- close-row -->

              <div class="row mb-4">
                <div class="col-md-6">
                  <label for="" class="form-label">Hospital Address<small style="color:red">*</small> </label>
                  <input
                    type="text"
                    class="form-control mb-3"
                    placeholder="Enter Street Adrress"
                    v-model="hospital_Adrress1"
                  />

                  <input
                    type="text"
                    class="form-control mb-3"
                    placeholder="Enter Street Adrress"
                    v-model="hospital_Adrress2"
                  />

                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Street Adrress"
                    v-model="hospital_Adrress3"
                  />
                </div>

                <div class="col-md-6">
                  <label for="" class="form-label">State<small style="color:red">*</small> </label>
                  <select
                    v-model="hospital_state"
                    class="form-select"
                    aria-label="Default select example"
                    @change="oncitypostbind($event)"
                  >
                    <option value="0">Please Select</option>
                    <option
                      v-for="stste in statelist"
                      v-bind:key="stste.id"
                      v-bind:value="stste.id"
                    >
                      {{ stste.state_name }}
                    </option>
                  </select>

                  <div class="row mt-4">
                    <div class="col-md-6">
                      <label for="" class="form-label">City<small style="color:red">*</small> </label>
                      <select
                        v-model="hospital_city"
                        class="form-select"
                        aria-label="Default select example"
                        @change="onpostCodebind($event)"
                      >
                        <option value="0">Please Select</option>
                        <option
                          v-for="ctl in citylist"
                          v-bind:key="ctl.id"
                          v-bind:value="ctl.id"
                        >
                          {{ ctl.city_name }}
                        </option>
                      </select>
                    </div>

                    <div class="col-md-6">
                      <label for="" class="form-label">Post Code<small style="color:red">*</small> </label>
                      <select
                        v-model="hospital_postcode"
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option value="0">Please Select</option>
                        <option
                          v-for="pst in postcodelist"
                          v-bind:key="pst.id"
                          v-bind:value="pst.id"
                        >
                          {{ pst.postcode }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <!-- close-row -->

              <div class="row mb-4">
                <div class="col-md-6">
                  <label for="" class="form-label">Contact No. (Office)<small style="color:red">*</small> </label>
                  <div class="add-box">
                    <input
                      type="tel"
                      v-mask="'##-########'"
                      class="form-control"
                      placeholder="Enter Contact No."
                      v-model="hospital_Contact"
                    />
                    <!-- <a href="#"><i class="fa fa-plus"></i></a> -->
                  </div>
                </div>

                <div class="col-md-6">
                  <label for="" class="form-label">Email<small style="color:red">*</small> </label>
                  <div class="add-box">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Email"
                      v-model="hospital_Email"
                      @blur="validateHospitalEmail"
                    />
                    <!-- <a href="#"><i class="fa fa-plus"></i></a> -->

                  </div>
                   <Error :message="hsptlemailerror" v-if="hsptlemailerror" />
                </div>
              </div>
              <!-- close-row -->

              <div class="row mb-4">
                <div class="col-md-4">
                  <label for="" class="form-label">FAX NO.<small style="color:red">*</small> </label>
                  <input
                    type="tel"
                    v-mask="'##-########'"
                    class="form-control"
                    placeholder="Enter FAX NO."
                    v-model="fax_No"
                  />
                </div>
              </div>
              <!-- close-row -->
              <!-- </form> -->
            </div>
          </div>
        </div>
          <p v-if="errors.length">
<ul>
        <li style="color:red"  v-for='err in errors'
    :key='err' >
          {{ err }}
        </li>
      </ul>
        </p>
        <div class="d-flex justify-content-center" :class="SidebarAccess!=1?'hide':''">
         <button type="submit" class="btn btn-success bto-warning" v-if="!Id"
      ><i class="fa fa-plus"></i> Add Parameter</button>
        <button type="submit" class="btn btn-warning btn-text" v-if="Id">
        <i class="fa fa-save"></i> Save
        </button>
        </div>
      </form>
    </div>
    <!-- accordion -->



    <div class="table-title">
      <h3>List of Hospital</h3>
      <div class="input-group">
        <span class="input-group-text"><i class="fa fa-search"></i></span>
        <input type="text" class="form-control" placeholder="Search" v-model="search" @keyup="OnSearch"/>
      </div>
    </div>
    <table class="table table-striped data-table font-13 display nowrap" style="width: 100%">
      <thead>
        <tr>
          <th>No</th>
          <th>Hospital Code</th>
          <th>PFX</th>
          <th>Hospital Name</th>
          <th>HOD Name</th>
          <th>Phone No.</th>
          <th>Fax No.</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
               <tr v-for="(hstl, index) in hospitallist" :key="index" >
            <td>{{index+1}}</td>
          <td>{{hstl.hospital_code}}</td>
          <td>{{hstl.hospital_prefix}}</td>
          <td>{{hstl.hospital_name}}</td>
          <td>{{hstl.hod_psychiatrist_name}}</td>
          <td>{{hstl.hospital_contact_number}}</td>
             <td>{{hstl.hospital_fax_no}}</td>
          <td class="td"  :class="SidebarAccess!=1?'hide':''">
            <a
              @click="profileview(hstl)"
              class="action-icon icon-success"
              ><i class="fa fa-eye"></i
            ></a>
             <a  class="edit" @click="edithospital(hstl)"
                            ><i class="fa fa-edit"></i
                          ></a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "hospital",
  data() {
    return {
      loader: false,
      salutation: 0,
      name: "",
      gender: 0,
      citizenship: 0,
      passport: "",
      religion: 0,
      designation: 0,
      email: "",
      mobile: "",
      Contact: "",
      hospital_Code: "",
      hospital_Prefix: "",
      hospital_Name: "",
      hospital_Adrress1: "",
      hospital_Adrress2: "",
      hospital_Adrress3: "",
      hospital_state: 0,
      hospital_postcode: 0,
      hospital_city: 0,
      hospital_Contact: "",
      hospital_Email: "",
      fax_No: "",
      userdetails: null,
      salutationlist: [],
      genderlist: [],
      religionlist: [],
      designationlist: [],
      citizenshiplist: [],
      statelist: [],
      citylist: [],
      postcodelist: [],
      errors: [],
      hospitallist: [],
      loader: false,
      emailerror: null,
      hsptlemailerror: null,
      search: "",
      Id: 0,
      SidebarAccess: null,
      selectedCityId: null,
    };
  },
  mounted() {
    const headers = {
      Authorization: "Bearer " + this.userdetails.access_token,
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    const axios = require("axios").default;
    axios
      .get(`${this.$axios.defaults.baseURL}` + "hospital/list", { headers })
      .then((resp) => {
        this.hospitallist = resp.data.list;
        this.alllist = resp.data.list;
        $(document).ready(function () {
          $(".data-table").DataTable({
            searching: false,
            bLengthChange: false,
            bInfo: false,
            // autoWidth: false,
            // responsive: true,
            scrollX: true,
            language: {
              paginate: {
                next: '<i class="fad fa-arrow-to-right"></i>', // or '→'
                previous: '<i class="fad fa-arrow-to-left"></i>', // or '←'
              },
            },
          });
        });
      })
      .catch ((err) => {
        this.loader = false;
        this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + err,
                  footer: ''
                });

        console.error(err);
      });
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.SidebarAccess = JSON.parse(localStorage.getItem("SidebarAccess"));
    this.GetList();
  },
  methods: {
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
      const response2 = await this.$axios.get(
        "general-setting/list?section=" + "gender",
        { headers }
      );
      if (response2.data.code == 200 || response2.data.code == "200") {
        this.genderlist = response2.data.list;
      } else {
        this.genderlist = [];
      }
      const response3 = await this.$axios.get(
        "general-setting/list?section=" + "religion",
        { headers }
      );
      if (response3.data.code == 200 || response3.data.code == "200") {
        this.religionlist = response3.data.list;
      } else {
        this.religionlist = [];
      }
      const response4 = await this.$axios.get(
        "general-setting/list?section=" + "citizenship",
        {
          headers,
        }
      );
      if (response4.data.code == 200 || response4.data.code == "200") {
        this.citizenshiplist = response4.data.list;
      } else {
        this.citizenshiplist = [];
      }
      const response5 = await this.$axios.get(
        "general-setting/list?section=" + "designation",
        {
          headers,
        }
      );
      if (response5.data.code == 200 || response5.data.code == "200") {
        this.designationlist = response5.data.list;
      } else {
        this.designationlist = [];
      }
      const response6 = await this.$axios.get("address/list", {
        headers,
      });
      if (response6.data.code == 200 || response6.data.code == "200") {
        this.statelist = response6.data.list;
      } else {
        this.statelist = [];
      }
    },
    async oncitypostbind(event) {
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
        this.citylist = response.data.list;
      } else {
        this.citylist = [];
      }
    },
    async onpostCodebind(event) {
      const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "address/" + event.target.value + "/getPostcodeListById",
        { headers }
      );
      // console.log("selectedCityId: ",event.target.value);
      if (response.data.code == 200 || response.data.code == "200") {
        this.postcodelist = response.data.list;
      } else {
        this.postcodelist = [];
      }
    },
    async onAddhospital() {
      this.errors = [];
      try {
        if (!this.fax_No) {
          this.errors.push("Hospital FAX NO. is required.");
        }
        if (!this.salutation) {
          this.errors.push("Salutation is required.");
        }
        if (!this.name) {
          this.errors.push("Name is required.");
        }
        if (this.gender <= 0) {
          this.errors.push("Gender is required.");
        }
        if (this.citizenship <= 0) {
          this.errors.push("Citizenship is required.");
        }
        if (!this.passport) {
          this.errors.push("Passport is required.");
        }
        if (this.religion <= 0) {
          this.errors.push("Religion is required.");
        }
        if (this.designation <= 0) {
          this.errors.push("Designation is required.");
        }
        if (!this.email) {
          this.errors.push("Email is required.");
        }
        if (!this.mobile) {
          this.errors.push("Contact No. (Mobile) is required.");
        }
        if (!this.Contact) {
          this.errors.push("Contact No. (Office) is required.");
        }
        if (!this.hospital_Code) {
          this.errors.push("Hospital Code is required.");
        }
        if (!this.hospital_Prefix) {
          this.errors.push("Hospital Prefix is required.");
        }
        if (!this.hospital_Name) {
          this.errors.push("Hospital Name is required.");
        }
        if (!this.hospital_Adrress1) {
          this.errors.push("Hospital Adrress 1 is required.");
        }

        if (this.hospital_state <= 0 || !this.hospital_state) {
          this.errors.push("Hospital State is required.");
        }
        if (this.hospital_postcode <= 0 || !this.hospital_postcode) {
          this.errors.push("Hospital Post Code is required.");
        }
        if (this.hospital_city <= 0 || !this.hospital_city) {
          this.errors.push("Hospital City is required.");
        }
        if (!this.hospital_Contact) {
          this.errors.push("Hospital Contact No. (Office) is required.");
        }
        if (!this.hospital_Email) {
          this.errors.push("Hospital Email is required.");
        }
        if (
          this.fax_No &&
          this.salutation &&
          this.name &&
          this.gender &&
          this.citizenship &&
          this.passport &&
          this.religion &&
          this.designation &&
          this.email &&
          this.mobile &&
          this.Contact &&
          this.hospital_Code &&
          this.hospital_Prefix &&
          this.hospital_Name &&
          this.hospital_Adrress1 &&
          this.hospital_state &&
          this.hospital_postcode &&
          this.hospital_city &&
          this.hospital_Contact &&
          this.hospital_Email
        ) {
          this.loader = true;
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          if (this.Id) {
            const response = await this.$axios.post(
              "hospital/updatehospital",
              {
                id: this.Id,
                added_by: this.userdetails.user.id,
                salutation: this.salutation,
                name: this.name,
                gender: this.gender,
                citizenship: this.citizenship,
                passport_nric_no: this.passport,
                religion: this.religion,
                designation: this.designation,
                email: this.email,
                contact_mobile: this.mobile,
                contact_office: this.Contact,
                hospital_code: this.hospital_Code,
                hospital_prefix: this.hospital_Prefix,
                hospital_name: this.hospital_Name,
                hospital_adrress_1: this.hospital_Adrress1,
                hospital_adrress_2: this.hospital_Adrress2,
                hospital_adrress_3: this.hospital_Adrress3,
                hospital_state: this.hospital_state,
                hospital_city: this.hospital_postcode,
                hospital_postcode: this.hospital_postcode,
                hospital_contact_number: this.hospital_Contact,
                hospital_email: this.hospital_Email,
                hospital_fax_no: this.fax_No,
              },
              { headers }
            );
            // console.log("my resp", response.data);
            if (response.data.code == 200 || response.data.code == "200") {
              this.$swal.fire(
              'Successfully Submitted.',
              'Data is inserted.',
              'success',
              )
              this.loader = false;
              this.resetmodel();
              this.GethospitalList();
            } else {
              this.loader = false;
              this.$swal.fire({
              icon: 'error',
              title: 'Oops... Something Went Wrong!',
              text: 'the error is: ' + this.error,
            })
            }
          } else {
            const response = await this.$axios.post(
              "hospital/add",
              {
                added_by: this.userdetails.user.id,
                salutation: this.salutation,
                name: this.name,
                gender: this.gender,
                citizenship: this.citizenship,
                passport_nric_no: this.passport,
                religion: this.religion,
                designation: this.designation,
                email: this.email,
                contact_mobile: this.mobile,
                contact_office: this.Contact,
                hospital_code: this.hospital_Code,
                hospital_prefix: this.hospital_Prefix,
                hospital_name: this.hospital_Name,
                hospital_adrress_1: this.hospital_Adrress1,
                hospital_adrress_2: this.hospital_Adrress2,
                hospital_adrress_3: this.hospital_Adrress3,
                hospital_state: this.hospital_state,
                hospital_city: this.hospital_postcode,
                hospital_postcode: this.hospital_postcode,
                hospital_contact_number: this.hospital_Contact,
                hospital_email: this.hospital_Email,
                hospital_fax_no: this.fax_No,
              },
              { headers }
            );
            // console.log("my resp", response.data);
            if (response.data.code == 200 || response.data.code == "200") {
              this.$swal.fire(
              'Successfully Submitted.',
              'Data is inserted.',
              'success',
              )
              this.loader = false;
              this.resetmodel();
              this.GethospitalList();
            } else {
              this.loader = false;
              this.$swal.fire({
              icon: 'error',
              title: 'Oops... Something Went Wrong!',
              text: 'the error is: ' + this.error,
            })
            }
          }
        }
      } catch (e) {
        this.loader = false;
      }
    },
    async resetmodel() {
      this.Id = 0;
      this.salutation = "";
      this.name = "";
      this.gender = 0;
      this.citizenship = 0;
      this.passport = "";
      this.religion = 0;
      this.designation = 0;
      this.email = "";
      this.mobile = "";
      this.Contact = "";
      this.hospital_Code = "";
      this.hospital_Prefix = "";
      this.hospital_Name = "";
      this.hospital_Adrress1 = "";
      this.hospital_Adrress2 = "";
      this.hospital_Adrress3 = "";
      this.hospital_state = 0;
      this.hospital_postcode = 0;
      this.hospital_city = 0;
      this.hospital_Contact = "";
      this.hospital_Email = "";
      this.fax_No = "";
      this.errors = [];
    },
    async GethospitalList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get("hospital/list", {
        headers,
      });
      if (response.data.code == 200 || response.data.code == "200") {
        this.hospitallist = response.data.list;
      } else {
        this.hospitallist = [];
      }
    },
    async profileview(data) {
      this.$router.push({
        path: "/modules/Admin/Hod-hospital-details",
        query: { id: data.id },
      });
    },
    validateEmail() {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
        this.emailerror = null;
      } else {
        this.emailerror = "Please Enter Valid Email";
        this.email = "";
      }
    },
    validateHospitalEmail() {
      if (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
          this.hospital_Email
        )
      ) {
        this.hsptlemailerror = null;
      } else {
        this.hsptlemailerror = "Please Enter Valid Email";
        this.hospital_Email = "";
      }
    },
    OnSearch() {
      if (this.search) {
        this.hospitallist = this.alllist.filter((notChunk) => {
          return (
            notChunk.hospital_prefix
              .toLowerCase()
              .indexOf(this.search.toLowerCase()) > -1 ||
            notChunk.hospital_name
              .toLowerCase()
              .indexOf(this.search.toLowerCase()) > -1 ||
            notChunk.hod_psychiatrist_name
              .toLowerCase()
              .indexOf(this.search.toLowerCase()) > -1 ||
            notChunk.hospital_contact_number
              .toLowerCase()
              .indexOf(this.search.toLowerCase()) > -1 ||
            notChunk.hospital_fax_no
              .toLowerCase()
              .indexOf(this.search.toLowerCase()) > -1 ||
            notChunk.hospital_code
              ?.toString()
              .toLowerCase()
              .indexOf(this.search.toString().toLowerCase()) > -1
          );
        });
        // console.log("my list", this.alllist);
      } else {
        this.hospitallist = this.alllist;
      }
    },
    async edithospital(data) {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get("/hospital/list/" + data.id, {
        headers,
      });
      // console.log("data", response.data);
      if (response.data.code == 200) {
        this.Id = data.id;
        this.salutation = response.data.list.psychiatrist.salutation_id;
        this.name = response.data.list.psychiatrist.name;
        this.gender = response.data.list.psychiatrist.gender_id;
        this.citizenship = response.data.list.psychiatrist.citizenship;
        this.passport = response.data.list.psychiatrist.nric;
        this.religion = response.data.list.psychiatrist.religion_id;
        this.designation = response.data.list.psychiatrist.designation;
        this.email = response.data.list.psychiatrist.email;
        this.mobile = response.data.list.psychiatrist.contact_mobile;
        this.Contact = response.data.list.psychiatrist.contact_office;

        this.hospital_Code = response.data.list.hospital.code;
        this.hospital_Prefix = response.data.list.hospital.prefix;
        this.hospital_Name = response.data.list.hospital.name;
        this.hospital_Adrress1 = response.data.list.hospital.address1;
        this.hospital_Adrress2 = response.data.list.hospital.address2;
        this.hospital_Adrress3 = response.data.list.hospital.address3;
        this.hospital_state = response.data.list.hospital.state_id;
        this.hospital_postcode = response.data.list.hospital.postcode_id;
        this.hospital_city = response.data.list.hospital.city;
        this.hospital_Contact = response.data.list.hospital.contact;
        this.hospital_Email = response.data.list.hospital.email;
        this.fax_No = response.data.list.hospital.fax;

        const response1 = await this.$axios.post(
          "address/" + this.hospital_state + "/getCityList",
          { headers }
        );
        if (response1.data.code == 200 || response1.data.code == "200") {
          this.citylist = response1.data.list;
        } else {
          this.citylist = [];
        }

        const response2 = await this.$axios.post(
          "address/" + this.hospital_city + "/getPostcodeListById",
          { headers }
        );

        if (response2.data.code == 200 || response2.data.code == "200") {
          this.postcodelist = response2.data.list;
        } else {
          this.postcodelist = [];
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
  },
};
</script>
