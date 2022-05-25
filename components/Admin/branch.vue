<template>
  <div class="content-subtab border-top-left">
     <Loader v-if="loader" />
    <form class="g-3 mt-3" method="post" @submit.prevent="onAddbranch">
      <div class="row mb-4 align-items-center">
        <div class="col-md-3">
          <label for="" class="form-label">Hospital Code</label>
          <select
                v-model="HospitalCode"
                class="form-select"
                aria-label="Default select example"
              >
                <option value="0">Please Select</option>
                <option
                  v-for="hst in hospitallist"
                  v-bind:key="hst.id"
                  v-bind:value="{id: hst.id, text: hst.hospital_code} "
                >
                  {{ hst.hospital_code }}
                </option>
              </select>
        </div>

        <div class="col-md-6">
          <label class="form-label">Branch Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Branch Name"
            v-model="BranchName"
          />
        </div>

        <div class="col-md-3">
          <div class="form-check mt-4">
            <input
              class="form-check-input"
              type="checkbox"
              id="set-as-headquarters"
              v-model="IsHeadquator"
            />
            <label class="form-check-label" for="set-as-headquarters">
              Set as headquarters
            </label>
          </div>
        </div>
      </div>
      <!-- close-row -->

      <div class="row mb-4">
        <div class="col-md-6">
          <label for="" class="form-label">Branch Adrress</label>
          <input
            type="text"
            class="form-control mb-3"
            placeholder="Enter Street Adrress"
            v-model="BranchAddress1"
          />

          <input
            type="text"
            class="form-control mb-3"
            placeholder="Enter Street Adrress"
            v-model="BranchAddress2"
          />

          <input
            type="text"
            class="form-control"
            placeholder="Enter Street Adrress"
            v-model="BranchAddress3"
          />
        </div>

        <div class="col-md-6">
          <label for="" class="form-label">State</label>
          <select
            v-model="State"
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

          <div class="row mt-4">
            <div class="col-md-6">
              <label for="" class="form-label">Post Code</label>
              <select
                v-model="PostCode"
                class="form-select"
                aria-label="Default select example"
              >
                 <option value="0">Please Select</option>
                <option
                  v-for="pst in PostCodeList"
                  v-bind:key="pst.postcode_id"
                  v-bind:value="pst.postcode_id"
                >
                  {{ pst.postcode }}
                </option>
              </select>
            </div>

            <div class="col-md-6">
              <label for="" class="form-label">City</label>
              <select
                v-model="City"
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
          </div>
        </div>
      </div>
      <!-- close-row -->

      <div class="row mb-4">
        <div class="col-md-6">
          <div class="mb-3">
            <label for="" class="form-label">Contact No. (Office)</label>
            <div class="add-box">
              <input
                type="text"
                class="form-control"
                placeholder="Enter Contact No."
                v-model="ContactNoOffice"
              />
              <a href="#"><i class="far fa-plus"></i></a>
            </div>
          </div>

          <div class="mb-3">
            <label for="" class="form-label">Contact No. (Mobile)</label>
            <div class="add-box">
              <input
                type="text"
                class="form-control"
                placeholder="Enter Contact No."
                v-model="MobileOffice"
              />
              <a href="#"><i class="far fa-plus"></i></a>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="mb-3">
            <label for="" class="form-label">FAX NO.</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter FAX NO."
              v-model="FaxNo"
            />
          </div>

          <div class="mb-3">
            <label for="" class="form-label">Email</label>
            <div class="add-box">
              <input
                type="text"
                class="form-control"
                placeholder="Enter Email"
                v-model="Email"
                 @blur="validateEmail"
              />
              <a href="#"><i class="far fa-plus"></i></a>
            </div>
             <Error :message="emailerror" v-if="emailerror" />
          </div>
        </div>
      </div>
      <!-- close-row -->
       <p v-if="errors.length">
<ul>
        <li style="color:red"  v-for='err in errors'
    :key='err' >
          {{ err }}
        </li>
      </ul>
        </p>
      <div class="d-flex justify-content-center" >
        <button type="submit" class="btn btn-warning btn-text ml-auto" v-if="Id">
        <i class="far fa-save"></i> Save
        </button>
         <button type="submit" class="btn btn-warning btn-text" v-if="!Id">
          <i class="far fa-plus"></i> Add Parameter
        </button>
      </div>
    </form>

    <div class="table-title">
      <h3>List of Branch</h3>
      <div class="input-group">
        <span class="input-group-text"><i class="far fa-search"></i></span>
        <input type="text" class="form-control" placeholder="Search" />
      </div>
    </div>
    <table class="table table-striped data-table font-13" style="width: 100%">
      <thead>
        <tr>
          <th>No</th>
          <th>Hospital Code</th>
          <th>Branch Name</th>
          <th width="250px">Address</th>
          <th>Phone No.</th>
          <th>Fax No.</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
            <tr v-for="(brnc, index) in branchlist" :key="index">
          <td>{{index+1}}</td>
          <td>{{brnc.hospital_code}}</td>
          <td>{{brnc.hospital_branch_name}}</td>
          <td>
           {{brnc.branch_adrress_1}}
          </td>
          <td>{{brnc.branch_contact_number_office}}</td>
        <td>{{brnc.branch_fax_no}}</td>
          <td>
            <a class="edit" @click="editbranch(brnc)"
              ><i class="far fa-edit"></i
            ></a>
            <a @click="deletebranch(brnc)" class="action-icon icon-danger"
              ><i class="far fa-trash-alt"></i
            ></a>
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
      StateList: [],
      CityList: [],
      PostCodeList: [],
      errors: [],
      userdetails: null,
      branchlist: [],
      hospitallist: [],
      loader: false,
      emailerror: null,
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.GetStateList();
    this.GetBranchList();
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
        "address/" + event.target.value + "/stateWisePostcodeList",
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
      try {
        if (!this.HospitalCode) {
          this.errors.push("Hospital Code is required.");
        }
        if (!this.BranchName) {
          this.errors.push("Branch Name is required.");
        }
        if (this.IsHeadquator) {
          this.IsHeadquator = 1;
        }
        if (!this.BranchAddress1) {
          this.errors.push("Branch Adrress 1 is required.");
        }
        if (!this.BranchAddress2) {
          this.errors.push("Branch Adrress 2 is required.");
        }
        if (!this.BranchAddress3) {
          this.errors.push("Branch Adrress 3 is required.");
        }
        if (this.State <= 0) {
          this.errors.push("State is required.");
        }
        if (this.PostCode <= 0) {
          this.errors.push("PostCode is required.");
        }
        if (this.City <= 0) {
          this.errors.push("City is required.");
        }
        if (!this.ContactNoOffice) {
          this.errors.push("Contact No. (Office) is required.");
        }
        if (!this.MobileOffice) {
          this.errors.push("Contact No. (Mobile) is required.");
        }
        if (!this.FaxNo) {
          this.errors.push("Fax No is required.");
        }
        if (!this.Email) {
          this.errors.push("Email is required.");
        }
        if (
          this.HospitalCode &&
          this.BranchName &&
          this.BranchAddress1 &&
          this.BranchAddress2 &&
          this.BranchAddress3 &&
          this.State &&
          this.PostCode &&
          this.City &&
          this.ContactNoOffice &&
          this.MobileOffice &&
          this.FaxNo &&
          this.Email
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
                branch_contact_number_office: this.ContactNoOffice,
                branch_contact_number_mobile: this.MobileOffice,
                branch_email: this.Email,
                branch_fax_no: this.FaxNo,
                branch_status: 1,
              },
              { headers }
            );
            if (response.data.code == 200 || response.data.code == "200") {
              this.loader = false;
              this.$nextTick(() => {
                $("#insertpopup").modal("show");
              });
              this.ResetModel();
              this.GetBranchList();
            } else {
              this.loader = false;
              this.$nextTick(() => {
                $("#errorpopup").modal("show");
              });
            }
          } else {
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
                branch_contact_number_office: this.ContactNoOffice,
                branch_contact_number_mobile: this.MobileOffice,
                branch_email: this.Email,
                branch_fax_no: this.FaxNo,
                branch_status: 1,
              },
              { headers }
            );
            if (response.data.code == 200 || response.data.code == "200") {
              this.loader = false;
              this.$nextTick(() => {
                $("#updatepopup").modal("show");
              });
              this.ResetModel();
              this.GetBranchList();
            } else {
              this.loader = false;
              this.$nextTick(() => {
                $("#errorpopup").modal("show");
              });
            }
          }
        }
      } catch (e) {
        this.loader = false;
        console.log("my error", e);
        // this.$nextTick(() => {
        //   $("#errorpopup").modal("show");
        // });
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
      this.ContactNoOffice = "";
      this.MobileOffice = "";
      this.FaxNo = "";
      this.Email = "";
      this.Id = 0;
    },
    async GetBranchList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get("hospital/branch-list", {
        headers,
      });
      if (response.data.code == 200 || response.data.code == "200") {
        this.branchlist = response.data.list;
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
        this.HospitalCode = response.data.list.hospital_id;
        this.BranchName = response.data.list.hospital_branch_name;
        this.IsHeadquator = response.data.list.isHeadquator;
        this.BranchAddress1 = response.data.list.address1;
        this.BranchAddress2 = response.data.list.address2;
        this.BranchAddress3 = response.data.list.address3;
        this.State = response.data.list.branch_state;
        this.City = response.data.list.branch_city;
        this.PostCode = response.data.list.branch_postcode;
        this.Email = response.data.list.branch_email;
        this.ContactNoOffice = response.data.list.branch_contact_number_office;
        this.MobileOffice = response.data.list.branch_contact_number_mobile;
        this.FaxNo = response.data.list.branch_fax_no;
        this.Id = data.id;
        const response1 = await this.$axios.post(
          "address/" + this.State + "/stateWisePostcodeList",
          { headers }
        );
        if (response1.data.code == 200 || response1.data.code == "200") {
          this.CityList = response1.data.list;
          this.PostCodeList = response1.data.list;
        } else {
          this.CityList = [];
          this.PostCodeList = [];
        }
      } else {
        window.alert("Something went wrong");
      }
    },
    async deletebranch(data) {
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
          this.$nextTick(() => {
            $("#deletepopup").modal("show");
          });
          this.GetBranchList();
        } else {
          this.$nextTick(() => {
            $("#errorpopup").modal("show");
          });
        }
      } catch (e) {
        this.$nextTick(() => {
          $("#errorpopup").modal("show");
        });
      }
    },
    validateEmail() {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.Email)) {
        this.emailerror = null;
      } else {
        this.emailerror = "Please Enter Valid Email";
        this.Email = "";
      }
    },
  },
};
</script>