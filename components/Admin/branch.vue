<template>
  <div class="content-subtab border-top-left">
    <Loader v-if="loader" />
    <form class="g-3 mt-3" method="post" @submit.prevent="onAddbranch">
      <div class="row mb-4 align-items-center">
        <div class="col-md-3">
          <label for="" class="form-label">Hospital Code</label>
          <select v-model="HospitalCode" class="form-select" aria-label="Default select example">
            <option value="0">Please Select</option>
            <option v-for="hst in hospitallist" v-bind:key="hst.id"
              v-bind:value="{ id: hst.id, text: hst.hospital_code }">
              {{ hst.hospital_code }}
            </option>
          </select>
        </div>

        <div class="col-md-6">
          <label class="form-label">Branch Name</label>
          <input type="text" class="form-control" placeholder="Enter Branch Name" v-model="BranchName" />
        </div>

        <div class="col-md-3">
          <div class="form-check mt-4">
            <input class="form-check-input" type="checkbox" id="set-as-headquarters" v-model="IsHeadquator" />
            <label class="form-check-label" for="set-as-headquarters">
              Set as headquarters
            </label>
          </div>
        </div>
      </div>
      <!-- close-row -->

      <div class="row mb-4">
        <div class="col-md-6">
          <label for="" class="form-label">Branch Address</label>
          <input type="text" class="form-control mb-3" placeholder="Enter Street Adrress" v-model="BranchAddress1" />

          <input type="text" class="form-control mb-3" placeholder="Enter Street Adrress" v-model="BranchAddress2" />

          <input type="text" class="form-control" placeholder="Enter Street Adrress" v-model="BranchAddress3" />
        </div>

        <div class="col-md-6">
          <label for="" class="form-label">State</label>
          <select v-model="State" class="form-select" aria-label="Default select example" @change="onCitybind($event)">
            <option value="0">Please Select</option>
            <option v-for="state in StateList" v-bind:key="state.id" v-bind:value="state.id">
              {{ state.state_name }}
            </option>
          </select>

          <div class="row mt-4">
            <div class="col-md-6">
              <label for="" class="form-label">City</label>
              <select v-model="City" class="form-select" aria-label="Default select example"
                @change="onPostbind($event)">
                <option value="0">Please Select</option>
                <option v-for="ctl in CityList" v-bind:key="ctl.city_name" v-bind:value="ctl.city_name">
                  {{ ctl.city_name }}
                </option>
              </select>
            </div>

            <div class="col-md-6">
              <label for="" class="form-label">Post Code</label>
              <select v-model="PostCode" class="form-select" aria-label="Default select example">
                <option value="0">Please Select</option>
                <option v-for="pst in PostCodeList" v-bind:key="pst.id" v-bind:value="pst.id">
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
          <div class="mb-3">
            <label for="" class="form-label">Contact No. (Office)</label>
            <table class="add-boxs" id="ContactNoOfficerow">
              <tbody v-if="Contactlist.length">
                <tr class="block-ui block-contact" v-for="(office, index) in Contactlist" :key="index">
                  <td><input type="tel" v-mask="'##-########'" class="form-control contactoffice" v-model="office.ContactNoOffice"
                      placeholder="Enter Contact No." /></td>
                  <td><span class="add-conatct-no add-ui"><i class="fa fa-plus"></i></span></td>
                </tr>
              </tbody>
              <tbody v-if="!Contactlist.length">
                <tr class="block-ui block-contact">
                  <td><input type="tel" v-mask="'##-########'" class="form-control contactoffice" placeholder="Enter Contact No." /></td>
                  <td><span class="add-conatct-no add-ui"><i class="fa fa-plus"></i></span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="mb-3">
            <label for="" class="form-label">Contact No. (Mobile)</label>
            <table class="add-boxs" id="ContactNoMobilerow">
              <tbody v-if="Conntactmobilelist.length">
                <tr class="block-mobile block-ui" v-for="(mobile, index) in Conntactmobilelist" :key="index">
                  <td><input type="tel" v-mask="'###-########'" class="form-control conntactmobile" v-model="mobile.MobileOffice"
                      placeholder="Enter Contact No." /></td>
                  <td><span class="add-mobile-no add-ui"><i class="fa fa-plus"></i></span></td>
                </tr>
              </tbody>
              <tbody v-if="!Conntactmobilelist.length">
                <tr class="block-mobile block-ui">
                  <td><input type="tel" v-mask="'###-########'" class="form-control conntactmobile" placeholder="Enter Contact No." /></td>
                  <td><span class="add-mobile-no add-ui"><i class="fa fa-plus"></i></span></td>
                </tr>
              </tbody>
            </table>
            <div class="mb-3">
              <label for="" class="form-label">Status</label>
                        <select class="form-select" v-model="branchstatus">
                                <option value="1">Enable</option>
                                <option value="0">Disable</option>
                        </select>
          </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="mb-3">
            <label for="" class="form-label">FAX NO.</label>
            <input type="tel" v-mask="'##-########'" class="form-control" placeholder="Enter FAX NO." v-model="FaxNo" />
          </div>

          <div class="mb-3">
            <label for="" class="form-label">Email</label>
            <table class="add-boxs" id="Emailrow">
              <tbody v-if="Emaillist.length">
                <tr class="block-ui block-email">
                  <!-- @blur="validateEmail" -->
                  <td><input type="text" v-for="(email, index) in Emaillist" :key="index" class="form-control email"
                      v-model="email.Email" placeholder="Enter Email" /></td>
                  <td><span class="add-email add-ui"><i class="fa fa-plus"></i></span></td>
                </tr>
              </tbody>
              <tbody v-if="!Emaillist.length">
                <tr class="block-ui block-email">
                  <!-- @blur="validateEmail" -->
                  <td><input type="text" class="form-control email" placeholder="Enter Email" /></td>
                  <td><span class="add-email add-ui"><i class="fa fa-plus"></i></span></td>
                </tr>
              </tbody>
            </table>
            <Error :message="emailerror" v-if="emailerror" />
          </div>

        </div>
      </div>
      <!-- close-row -->
      <p v-if="errors.length">
      <ul>
        <li style="color:red" v-for='err in errors' :key='err'>
          {{ err }}
        </li>
      </ul>
      </p>
      <div class="d-flex justify-content-center" :class="SidebarAccess != 1 ? 'hide' : ''">
        <button type="submit" class="btn btn-warning btn-text ml-auto" v-if="Id">
          <i class="fa fa-save"></i> Save
        </button>
        <button type="submit" class="btn btn-warning btn-text" v-if="!Id">
          <i class="fa fa-plus"></i> Add Parameter
        </button>
      </div>
    </form>

    <div class="table-title">
      <h3>List of Branch</h3>
      <div class="input-group">
        <span class="input-group-text"><i class="fa fa-search"></i></span>
        <input type="text" class="form-control" placeholder="Search" v-model="search" @keyup="OnSearch" />
      </div>
    </div>
    <table class="table table-striped data-table1 font-13  display nowrap" style="width: 100%">
      <thead>
        <tr>
          <th>No</th>
          <th>Hospital Code</th>
          <th>Branch Name</th>
          <th width="250px">Address</th>
          <th>Phone No.</th>
          <th>Fax No.</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(brnc, index) in branchlist" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ brnc.hospital_code }}</td>
          <td>{{ brnc.hospital_branch_name }}</td>
          <td>
            {{ brnc.branch_adrress_1 }} {{ brnc.branch_adrress_2 }} {{ brnc.branch_adrress_3 }}
          </td>
          <td>
            <p v-for="mobile in brnc.branch_contact_number_office" :key="mobile.id">{{ mobile.ContactNoOffice }}</p>
          </td>
          <td>{{ brnc.branch_fax_no }}</td>
          <td v-if="brnc.branch_status==1">Enabled</td>
          <td v-if="brnc.branch_status==0" style="color:red">Disabled</td>
          <td class="td" :class="SidebarAccess != 1 ? 'hide' : ''">
            <a class="edit" @click="editbranch(brnc)" data-toggle="tooltip" data-placement="top" title="Edit"><i class="fa fa-edit"></i></a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "branch",
  setup() {},
  data() {
    return {
      Id: 0,
      HospitalCode: 0,
      BranchName: "",
      IsHeadquator: 0,
      BranchAddress1: "",
      BranchAddress2: "",
      BranchAddress3: "",
      State: 0,
      PostCode: 0,
      City: 0,
      ContactNoOffice: "",
      MobileOffice: "",
      FaxNo: "",
      Email: "",
      branchstatus: 0,
      StateList: [],
      CityList: [],
      PostCodeList: [],
      errors: [],
      userdetails: null,
      branchlist: [],
      hospitallist: [],
      loader: false,
      emailerror: null,
      search: "",
      Contactlist: [],
      Conntactmobilelist: [],
      Emaillist: [],
      SidebarAccess: null,
      alllist: [],
      branchlist: [],
      branch_contact_number_office: [],
    };
  },
  mounted() {
    this.loader = true;
    const headers = {
      Authorization: "Bearer " + this.userdetails.access_token,
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    const axios = require("axios").default;
    axios
      .get(`${this.$axios.defaults.baseURL}` + "hospital/branch-list-regardless-status", {
        headers,
      })
      .then((resp) => {
        this.branchlist = resp.data.list;
        this.branchlist.forEach((element) => {
          element.branch_contact_number_office = JSON.parse(
            element.branch_contact_number_office
          );
          console.log("my data", element);
        });
        this.alllist = resp.data.list;
        this.loader=false;
        $(document).ready(function () {
          $(".data-table1").DataTable({
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
          $('a[data-bs-toggle="tab"]').on("shown.bs.tab", function (e) {
            $($.fn.dataTable.tables(true))
              .DataTable()
              .columns.adjust()
              .responsive.recalc();
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

    $(".add-conatct-no").click(function (i) {
      $(".block-contact:last").after(
        '<tr class="block-contact"> <td><input type="text" class="form-control contactoffice" placeholder="Enter Contact No." v-model=" ContactNoOffice"/></td> <td><span class="remove remove-ui"><i class="fal fa-times"></i></span></td> </tr>'
      );

      $(".remove").click(function () {
        $(this).closest(".block-contact").remove();
      });
    });

    $(".add-mobile-no").click(function (i) {
      $(".block-mobile:last").after(
        '<tr class="block-mobile"> <td><input type="text" class="form-control conntactmobile" placeholder="Enter Contact No." v-model=" ContactNoOffice"/></td> <td><span class="remove remove-ui"><i class="fal fa-times"></i></span></td> </tr>'
      );

      $(".remove").click(function () {
        $(this).closest(".block-mobile").remove();
      });
    });

    $(".add-email").click(function (i) {
      $(".block-email:last").after(
        '<tr class="block-email"> <td><input type="text" class="form-control email" placeholder="Enter Contact No." v-model=" ContactNoOffice"/></td> <td><span class="remove remove-ui"><i class="fal fa-times"></i></span></td> </tr>'
      );

      $(".remove").click(function () {
        $(this).closest(".block-email").remove();
      });
    });
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.SidebarAccess = JSON.parse(localStorage.getItem("SidebarAccess"));
    this.GetStateList();
    this.GethospitalList();
  },
  methods: {
    async onCitybind(event) {
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
        this.CityList = response.data.list;
        this.PostCodeList = response.data.list;
      } else {
        this.CityList = [];
        this.PostCodeList = [];
      }
    },
    async onPostbind(event) {
      const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "address/" + event.target.value + "/getPostcodeListById",
        { headers }
      );
      if (response.data.code == 200 || response.data.code == "200") {
        this.PostCodeList = response.data.list;
      } else {
        this.PostCodeList = [];
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
    async onAddbranch() {
      this.errors = [];
      var Contactlist = [];
      var Conntactmobilelist = [];
      var Emaillist = [];
      console.log(
        "Contactlist,Conntactmobilelist,Emaillist",
        this.Contactlist,
        this.Conntactmobilelist,
        this.Emaillist
      );
      $("table#ContactNoOfficerow > tbody > tr").each(function (i) {
        var obj = {};
        obj.ContactNoOffice = $(
          'td input[type="tel"].contactoffice',
          this
        ).val();
        if (obj.ContactNoOffice) {
          Contactlist.push(obj);
        }
      });
      $("table#ContactNoMobilerow > tbody > tr").each(function (i) {
        var obj = {};
        obj.MobileOffice = $(
          'td input[type="tel"].conntactmobile',
          this
        ).val();
        if (obj.MobileOffice) {
          Conntactmobilelist.push(obj);
        }
      });
      $("table#Emailrow > tbody > tr").each(function (i) {
        var obj = {};
        obj.Email = $('td input[type="text"].email', this).val();
        if (obj.Email) {
          Emaillist.push(obj);
        }
      });
      try {
        if (!this.HospitalCode) {
          this.errors.push("Hospital Code is required.");
        }
        if (!this.BranchName) {
          this.errors.push("Branch Name is required.");
        }

        if (!this.IsHeadquator) {
          this.IsHeadquator = 0;
        } else {
          this.IsHeadquator = 1;
        }
        if (!this.BranchAddress1) {
          this.errors.push("Branch Adrress 1 is required.");
        }
        // if (!this.BranchAddress2) {
        //   this.errors.push("Branch Adrress 2 is required.");
        // }
        // if (!this.BranchAddress3) {
        //   this.errors.push("Branch Adrress 3 is required.");
        // }
        if (this.State <= 0) {
          this.errors.push("State is required.");
        }
        if (this.PostCode <= 0) {
          this.errors.push("PostCode is required.");
        }
        if (this.City <= 0) {
          this.errors.push("City is required.");
        }
        if (!Contactlist.length) {
          this.errors.push("Contact No. (Office) is required.");
        }
        if (!Conntactmobilelist.length) {
          this.errors.push("Contact No. (Mobile) is required.");
        }
        if (!this.FaxNo) {
          this.errors.push("Fax No is required.");
        }
        if (!Emaillist.length) {
          this.errors.push("Email is required.");
        }
        if (
          this.HospitalCode &&
          this.BranchName &&
          this.BranchAddress1 &&
          // this.BranchAddress2 &&
          // this.BranchAddress3 &&
          this.State &&
          this.PostCode &&
          this.City &&
          Contactlist.length &&
          Conntactmobilelist.length &&
          this.FaxNo &&
          Emaillist.length
        ) {
          this.loader = true;
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          if (this.Id <= 0) {
            const response = await this.$axios.post(
              "hospital/add-branch",
              {
                added_by: this.userdetails.user.id,
                hospital_id: this.HospitalCode.id,
                hospital_code: this.HospitalCode.text,
                hospital_branch_name: this.BranchName,
                isHeadquator: this.IsHeadquator,
                branch_adrress_1: this.BranchAddress1,
                branch_adrress_2: this.BranchAddress2,
                branch_adrress_3: this.BranchAddress3,
                branch_state: this.State,
                branch_city: this.City,
                branch_postcode: this.PostCode,
                branch_contact_number_office: JSON.stringify(Contactlist),
                branch_contact_number_mobile:
                  JSON.stringify(Conntactmobilelist),
                branch_email: JSON.stringify(Emaillist),
                branch_fax_no: this.FaxNo,
                branch_status: this.branchstatus,
              },
              { headers }
            );
            if (response.data.code == 200 || response.data.code == "200") {
              this.loader = false;
              this.$swal.fire(
              'Successfully Submitted.',
              'Data is inserted.',
              'success',
              )
              this.ResetModel();
              this.GetBranchList();
            } else {
              this.loader = false;
              this.$swal.fire({
              icon: 'error',
              title: 'Oops... Something Went Wrong!',
              text: 'the error is: ' + this.error,
            })
            }
          } else {
            if (!this.IsHeadquator) {
              this.IsHeadquator = 0;
            } else {
              this.IsHeadquator = 1;
            }

            const response = await this.$axios.post(
              "hospital/updateHospitalBranch",
              {
                id: this.Id,
                added_by: this.userdetails.user.id,
                hospital_id: this.HospitalCode.id,
                hospital_code: this.HospitalCode.text,
                hospital_branch_name: this.BranchName,
                isHeadquator: this.IsHeadquator,
                branch_adrress_1: this.BranchAddress1,
                branch_adrress_2: this.BranchAddress2,
                branch_adrress_3: this.BranchAddress3,
                branch_state: this.State,
                branch_city: this.City,
                branch_postcode: this.PostCode,
                branch_contact_number_office: JSON.stringify(Contactlist),
                branch_contact_number_mobile:
                  JSON.stringify(Conntactmobilelist),
                branch_email: JSON.stringify(Emaillist),
                branch_fax_no: this.FaxNo,
                branch_status: this.branchstatus,
              },
              { headers }
            );
            if (response.data.code == 200 || response.data.code == "200") {
              this.loader = false;
              this.$swal.fire(
              'Successfully Submitted.',
              'Data is inserted.',
              'success',
              )
              this.ResetModel();
              this.GetBranchList();
            } else {
              this.loader = false;
              this.$swal.fire({
              icon: 'error',
              title: JSON.stringify(response.data.message),
              text:'',
            })
            }
          }
        }
      } catch (e) {
        this.loader = false;
        this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + e,
                  footer: ''
                });
      }
    },
    async ResetModel() {
      this.HospitalCode = "";
      this.BranchName = "";
      this.IsHeadquator = 0;
      this.BranchAddress1 = "";
      this.BranchAddress2 = "";
      this.BranchAddress3 = "";
      this.State = 0;
      this.PostCode = 0;
      this.City = 0;
      this.FaxNo = "";
      this.Id = 0;
      this.branchstatus = "";
      this.Contactlist = "";
      this.Conntactmobilelist ="";
      this.Emaillist = "";
    },
    async GetBranchList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get("hospital/branch-list-regardless-status", {
        headers,
      });
      if (response.data.code == 200 || response.data.code == "200") {
        this.branchlist = response.data.list;
        this.branchlist.forEach((element) => {
          element.branch_contact_number_office = JSON.parse(
            element.branch_contact_number_office
          );
        });
      } else {
        this.branchlist = [];
      }
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
    async editbranch(data) {
      this.loader = true;
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get("hospital/branchlist/" + data.id, {
        headers,
      });
      if (response.data.code == 200) {
        console.log("my edit", response.data);

        this.HospitalCode = {
          id: response.data.list.hospital_id,
          text: response.data.list.hospital_code,
        };
        this.BranchName = response.data.list.hospital_branch_name;
        this.IsHeadquator = response.data.list.isHeadquator;
        this.BranchAddress1 = response.data.list.address1;
        this.BranchAddress2 = response.data.list.address2;
        this.BranchAddress3 = response.data.list.address3;
        this.State = response.data.list.branch_state;
        this.City = response.data.list.branch_city;
        this.PostCode = response.data.list.branch_postcode;
        this.branchstatus = response.data.list.branch_status;
        this.Emaillist = JSON.parse(response.data.list.branch_email);
        this.Contactlist = JSON.parse(
          response.data.list.branch_contact_number_office
        );
        this.Conntactmobilelist = JSON.parse(
          response.data.list.branch_contact_number_mobile
        );
        this.FaxNo = response.data.list.branch_fax_no;
        this.Id = data.id;
        const response1 = await this.$axios.post(
          "address/" + this.State + "/stateWisePostcodeList",
          { headers }
        );
        if (response1.data.code == 200 || response1.data.code == "200") {
          this.CityList = response1.data.list;
          this.PostCodeList = response1.data.list;
          this.loader = false;
        } else {
          this.CityList = [];
          this.PostCodeList = [];
        }
      } else {
        this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + this.error,
                  footer: ''
                })
      }
    },
    async deletebranch(data) {
      this.loader = true;
      try {
        const headers = {
          Authorization: "Bearer " + this.userdetails.access_token,
          Accept: "application/json",
          "Content-Type": "application/json",
        };
        const response = await this.$axios.post(
          "hospital/removeBranch",
          { added_by: this.userdetails.user.id, id: data.id },
          { headers }
        );
        if (response.data.code == 200) {
          this.$swal.fire('Deleted Successfully', '', 'success');
          this.GetBranchList();
          this.loader = false;
        } else {
          this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + JSON.stringify(response.data.message),
                  footer: ''
                });
        }
      } catch (e) {
        this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + e,
                  footer: ''
                });
      }
    },

    OnSearch() {
      if (this.search) {
        this.branchlist = this.alllist.filter((notChunk) => {
          return (
           (notChunk.hospital_code||'')
              .toLowerCase()
              .indexOf(this.search.toLowerCase()) > -1 ||
            (notChunk.hospital_branch_name||'')
              .toLowerCase()
              .indexOf(this.search.toLowerCase()) > -1 ||
            (notChunk.branch_adrress_1||'')
              .toLowerCase()
              .indexOf(this.search.toLowerCase()) > -1 ||
            (notChunk.branch_adrress_2||'')
              .toLowerCase()
              .indexOf(this.search.toLowerCase()) > -1 ||
            (JSON.stringify(notChunk.branch_contact_number_office)||'').indexOf(this.search) > -1 ||
            (notChunk.branch_fax_no||'').indexOf(this.search) > -1
          );
        });
      } else {
        this.branchlist = this.alllist;
      }
    },
  },
};
</script>
