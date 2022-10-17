<template>
  <div class="row">
    <div class="card mb-4">
      <div class="card-body">
        <div class="content-subtab">
          <form class="g-3 mt-3" method="post" @submit.prevent="onAddclubRegistration">
            <div class="row">
              <div class="col-md-3 mb-4">
                <label for="" class="form-label">Club Code</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Club Code"
                  v-model="club_code"
                />
              </div>

              <div class="col-md-3 mb-4">
                <label for="" class="form-label">Club Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Club Name"
                  v-model="club_name"
                />
              </div>

              <div class="col-md-5 mb-4">
                <label for="" class="form-label">Club Description</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Club Description"
                  v-model="club_description"
                />
              </div>

              <div class="col-md-1 mb-4">
                <label class="form-label">Index</label>
                <input type="text" class="form-control" placeholder="0" v-model="club_order"/>
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
      <div class="d-flex justify-content-center" v-if="SidebarAccess==1">
        <button type="submit" class="btn btn-warning btn-text ml-auto" v-if="Id">
        <i class="far fa-save"></i> Save
        </button>
         <button type="submit" class="btn btn-warning btn-text" v-if="!Id">
          <i class="far fa-plus"></i> Add Parameter
        </button>
      </div>
          </form>
          <div class="table-title">
            <h3>List of Club</h3>
          </div>
          <table class="table table-striped data-table" style="width: 100%">
            <thead>
              <tr>
                <th>No</th>
                <th>Club Code</th>
                <th>Club Name</th>
                <th>Club Description</th>
                <th>Index</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            <tr v-for="(etp, index) in list" :key="index">
                   <td>{{index+1}}</td>
                <td>{{ etp.club_code }}</td>
                <td>{{ etp.club_name }}</td>
                <td>{{ etp.club_description }}</td>
                <td>{{ etp.club_order }}</td>
                <td>
                  <a class="edit" @click="editreg(etp)" v-if="SidebarAccess==1"
                    ><i class="far fa-edit"></i
                  ></a>
                  <a @click="deletereg(etp)" class="action-icon icon-danger" v-if="SidebarAccess==1"
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
  name: "clubregistration",
  data() {
    return {
      Id: 0,
      club_code: "",
      club_name: "",
      club_description: "",
      club_order: 0,
      list: [],
      errors: [],
      userdetails: null,
      SidebarAccess:null,
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
      .get(
        `${this.$axios.defaults.baseURL}` +
          "club/list",
        { headers }
      )
      .then((resp) => {
        this.list = resp.data.list;
        $(document).ready(function () {
          $(".data-table").DataTable({
            searching: false,
            bLengthChange: false,
            bInfo: false,
            autoWidth: false,
            responsive: true,
            language: {
              paginate: {
                next: '<i class="fad fa-arrow-to-right"></i>', // or '→'
                previous: '<i class="fad fa-arrow-to-left"></i>', // or '←'
              },
            },
          });
        });
      })
      .catch((err) => {
        console.error(err);
      });
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.SidebarAccess = JSON.parse(localStorage.getItem("SidebarAccess"));
  },
  methods: {
    async GetList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get("club/list", {
        headers,
      });
      if (response.data.code == 200 || response.data.code == "200") {
        this.list = response.data.list;
      } else {
        this.list = [];
      }
    },
    async editreg(data) {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "club/" + data.id + "/getClubListByID",
        { id: data.id },
        { headers }
      );
      if (response.data.code == 200) {
        this.club_code = response.data.list[0].club_code;
        this.club_name = response.data.list[0].club_name;
        this.club_description = response.data.list[0].club_description;
        this.club_order = response.data.list[0].club_order;
        this.Id = data.id;
      } else {
        window.alert("Something went wrong");
      }
    },
    async deletereg(data) {
      try {
        const headers = {
          Authorization: "Bearer " + this.userdetails.access_token,
          Accept: "application/json",
          "Content-Type": "application/json",
        };
        const response = await this.$axios.post(
          "club/remove",
          { added_by: this.userdetails.user.id, club_id: data.id },
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
    async onAddclubRegistration() {
      this.errors = [];
      try {
        if (!this.club_code) {
          this.errors.push("Club Code is required.");
        }
        if (!this.club_name) {
          this.errors.push("Club Name is required.");
        }
        if (!this.club_description) {
          this.errors.push("Club Description is required.");
        }
        if (this.club_order <= 0) {
          this.errors.push("Index is required.");
        } else {
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          if (this.Id <= 0) {
            const response = await this.$axios.post(
              "club/register",
              {
                added_by: this.userdetails.user.id,
                club_code: this.club_code,
                club_name: this.club_name,
                club_description: this.club_description,
                club_order: this.club_order,
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
              "club/update",
              {
                added_by: this.userdetails.user.id,
                club_id:this.Id,
                club_code: this.club_code,
                club_name: this.club_name,
                club_description: this.club_description,
                club_order:this.club_order,
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
      this.club_code = "";
      this.club_name = "";
      this.club_description = "";
      this.club_order = 0;
      this.errors = [];
      this.GetList();
      this.Id = 0;
    },
  },
};
</script>