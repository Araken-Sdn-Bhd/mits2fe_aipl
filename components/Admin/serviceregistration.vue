<template>
  <div class="content-subtab">
    <form class="g-3 mt-3" method="post" @submit.prevent="onAddserviceregistration">
      <div class="row">
        <div class="col-md-3 mb-4">
          <label for="" class="form-label">Service Code</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Service Code"
            v-model="servicecode"
          />
        </div>

        <div class="col-md-3 mb-4">
          <label for="" class="form-label">Service Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Service Name"
            v-model="servicename"
          />
        </div>

        <div class="col-md-5 mb-4">
          <label for="" class="form-label">Service Description</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Service Description"
            v-model="servicedescription"
          />
        </div>

        <div class="col-md-1 mb-4">
          <label class="form-label">Index</label>
          <input type="text" class="form-control" placeholder="0" v-model="serviceindex" />
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
      <h3>List of Service</h3>
    </div>
    <table class="table table-striped data-table" style="width: 100%">
      <thead>
        <tr>
          <th>No</th>
          <th>Service Code</th>
          <th>Service Name</th>
          <th>Service Description</th>
          <th>Index</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(rg, index) in list" :key="index">
          <td>{{index+1}}</td>
          <td>{{rg.service_code}}</td>
          <td>{{rg.service_name}}</td>
          <td>{{rg.service_description}}</td>
          <td>{{rg.service_order}}</td>
          <td>
            <a class="edit" @click="editreg(rg)"><i class="far fa-edit"></i></a>
            <a @click="deletereg(rg)" class="action-icon icon-danger"
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
  name: "serviceregistration",
  data() {
    return {
      servicecode: "",
      servicename: "",
      servicedescription: "",
      serviceindex: 0,
      list: [],
      errors: [],
      userdetails: null,
      Id: 0,
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.GetList();
  },
  methods: {
    async GetList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get("service/list", { headers });
      if (response.data.code == 200 || response.data.code == "200") {
        this.list = response.data.list;
      } else {
        this.list = [];
      }
    },
    async onAddserviceregistration() {
      this.errors = [];
      try {
        if (!this.servicecode) {
          this.errors.push("Service Code is required.");
        }
        if (!this.servicename) {
          this.errors.push("Service Name is required.");
        }
        if (!this.servicedescription) {
          this.errors.push("Service Description is required.");
        }
        if (this.serviceindex <= 0) {
          this.errors.push("Index is required.");
        } else {
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          if (this.Id <= 0) {
            const response = await this.$axios.post(
              "service/register",
              {
                added_by: this.userdetails.user.id,
                service_code: this.servicecode,
                service_name: this.servicename,
                //   hospital_code: this.,
                service_description: this.servicedescription,
                service_order: this.serviceindex,
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
              "service/update",
              {
                added_by: this.userdetails.user.id,
                service_id: this.Id,
                service_code: this.servicecode,
                service_name: this.servicename,
                //hospital_code: "AIIMS",
                service_description: this.servicedescription,
                service_order: this.serviceindex,
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
    async editreg(data) {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "service/getServiceListById",
        {
          id: data.id,
        },
        { headers }
      );
      if (response.data.code == 200) {
        this.servicecode = response.data.list[0].service_code;
        this.servicename = response.data.list[0].service_name;
        this.servicedescription = response.data.list[0].service_description;
        this.serviceindex = response.data.list[0].service_order;
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
          "service/remove",
          { added_by: this.userdetails.user.id, service_id: data.id },
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
    async resetmodel() {
      this.servicecode = "";
      this.servicename = "";
      this.servicedescription = "";
      this.serviceindex = 0;
      this.errors = [];
      this.GetList();
      this.Id = 0;
    },
  },
};
</script>