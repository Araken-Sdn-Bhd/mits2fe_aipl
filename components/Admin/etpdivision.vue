<template>
  <div class="row">
    <div class="card mb-4">
      <div class="card-body">
        <div class="content-subtab border-top-left">
          <form class="g-3 mt-3" method="post" @submit.prevent="onAddetpDivition">
            <div class="row">
              <div class="col-md-4 mb-4">
                <label for="" class="form-label">ETP Name</label>
                 <select
            v-model="etp_id"
            class="form-select"
            aria-label="Default select example"
          >
            <option
              v-for="et in etplist"
              v-bind:key="et.id"
              v-bind:value="et.id"
            >
              {{ et.etp_name }}
            </option>
          </select>
              </div>

              <div class="col-md-4 mb-4">
                <label for="" class="form-label">Hospital</label>
                 <select
            v-model="hospital_id"
            class="form-select"
            aria-label="Default select example"
            @change="onHospitalCodechange($event)"
          >
            <option
              v-for="hst in hospitallist"
              v-bind:key="hst.id"
              v-bind:value="hst.id"
            >
              {{ hst.hospital_name }}
            </option>
          </select>
              </div>

              <div class="col-md-3 mb-4">
                <label for="" class="form-label">Branch</label>
                <select
            v-model="branch_id"
            class="form-select"
            aria-label="Default select example"
          >
            <option
              v-for="bnch in branchlist"
              v-bind:key="bnch.id"
              v-bind:value="bnch.id"
            >
              {{ bnch.hospital_branch_name }}
            </option>
          </select>
              </div>

              <div class="col-md-1 mb-4">
                <label class="form-label">Index</label>
                <input type="text" class="form-control" placeholder="0" v-model="division_order" />
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
            <h3>List of ETP</h3>
          </div>
          <table class="table table-striped data-table" style="width: 100%">
            <thead>
              <tr>
                <th>No</th>
                <th>Hospital</th>
                <th>Branch</th>
                <th>ETP Name</th>
                <th>Index</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
             <tr v-for="(etp, index) in list" :key="index">
              <td>{{index+1}}</td>
                <td>{{etp.hospitals.hospital_name}}</td>
                <td>{{etp.branchs.hospital_branch_name}}</td>
                <td>{{etp.etp.etp_name}}</td>
                <td>{{etp.division_order}}</td>
                <td>
                  <a class="edit" @click="editdiv(etp)"
                    ><i class="far fa-edit"></i
                  ></a>
                  <a @click="deletediv(etp)" class="action-icon icon-danger"
                    ><i class="far fa-trash-alt"></i
                  ></a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "etpdivision",
  data() {
    return {
      Id: 0,
      etp_id: 0,
      hospital_id: 0,
      branch_id: 0,
      division_order: 0,
      list: [],
      etplist: [],
      hospitallist: [],
      branchlist: [],
      errors: [],
      userdetails: null,
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.GetETPList();
    this.GetList();
    this.GethospitalList();
  },
  methods: {
    async GetETPList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get("etp/list", {
        headers,
      });
      if (response.data.code == 200 || response.data.code == "200") {
        this.etplist = response.data.list;
      } else {
        this.etplist = [];
      }
    },
    async GetList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get("etp/division-list", {
        headers,
      });
      console.log('myd',response.data);
      if (response.data.code == 200 || response.data.code == "200") {
        this.list = response.data.list;
      } else {
        this.list = [];
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
    async onHospitalCodechange(event) {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "hospital/get-branch-by-hospital-code",
        {
          hospital_code: event.target.value,
        },
        { headers }
      );
      if (response.data.code == 200 || response.data.code == "200") {
        this.branchlist = response.data.branches;
      } else {
        this.branchlist = [];
      }
    },
    async editdiv(data) {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "etp/get-division",
        { division_id: data.id },
        { headers }
      );
      
      if (response.data.code == 200) {
        this.etp_id = response.data.list[0].etp_id;
        this.hospital_id = response.data.list[0].hospital_id;
        this.branch_id = response.data.list[0].branch_id;
        this.division_order = response.data.list[0].division_order;
        this.Id = data.id;
         const response1 = await this.$axios.post(
          "hospital/get-branch-by-hospital-code",
          {
            hospital_code: response.data.list[0].hospital_id.toString(),
          },
          { headers }
        );
        if (response1.data.code == 200 || response1.data.code == "200") {
          this.branchlist = response1.data.branches;
        } else {
          this.branchlist = [];
        }
      } else {
        window.alert("Something went wrong");
      }
    },
    async deletediv(data) {
      try {
        const headers = {
          Authorization: "Bearer " + this.userdetails.access_token,
          Accept: "application/json",
          "Content-Type": "application/json",
        };
        const response = await this.$axios.post(
          "etp/remove-division",
          { added_by: this.userdetails.user.id, division_id: data.id },
          { headers }
        );
        if (response.data.code == 200) {
          this.$nextTick(() => {
            $("#deletepopup").modal("show");
          });
          this.GetList();
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
    async onAddetpDivition() {
      this.errors = [];
      try {
        if (this.etp_id <= 0) {
          this.errors.push("ETP Name is required.");
        }
        if (this.hospital_id <= 0) {
          this.errors.push("Hospital is required.");
        }
        if (this.branch_id <= 0) {
          this.errors.push("Branch is required.");
        }
        if (this.division_order <= 0) {
          this.errors.push("Index is required.");
        } else {
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          if (this.Id <= 0) {
            const response = await this.$axios.post(
              "etp/insertOrupdate-division",
              {
                added_by: this.userdetails.user.id,
                etp_id: this.etp_id,
                hospital_id: this.hospital_id,
                branch_id: this.branch_id,
                division_order: this.division_order,
              },
              { headers }
            );
            if (response.data.code == 200 || response.data.code == "200") {
              this.$nextTick(() => {
                $("#insertpopup").modal("show");
              });
              this.resetmodel();
            } else {
              this.$nextTick(() => {
                $("#errorpopup").modal("show");
              });
            }
          } else {
            const response = await this.$axios.post(
              "etp/update-division",
              {
                added_by: this.userdetails.user.id,
                etp_id: this.etp_id,
                hospital_id: this.hospital_id,
                branch_id: this.branch_id,
                division_order: this.division_order,
                division_id: this.Id,
              },
              { headers }
            );
            if (response.data.code == 200 || response.data.code == "200") {
              this.$nextTick(() => {
                $("#updatepopup").modal("show");
              });
              this.resetmodel();
            } else {
              this.$nextTick(() => {
                $("#errorpopup").modal("show");
              });
            }
          }
        }
      } catch (e) {
        this.errors.push = e;
      }
    },
    async resetmodel() {
      this.Id = 0;
      this.etp_id = 0;
      this.hospital_id = 0;
      this.branch_id = 0;
      this.division_order = 0;
      this.errors = [];
      this.GetList();
    },
  },
};
</script>