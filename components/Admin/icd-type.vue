<template>
  <div class="content-subtab">
    <form class="g-3 mt-3" method="post" @submit.prevent="onAddicdtype">
      <div class="row">
        <div class="col-md-3 mb-4">
          <label for="" class="form-label">ICD Type Code</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter ICD Type Code"
            v-model="icdtypecode"
          />
        </div>

        <div class="col-md-3 mb-4">
          <label for="" class="form-label">ICD Type Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter ICD Name"
            v-model="icdtypename"
          />
        </div>

        <div class="col-md-5 mb-4">
          <label for="" class="form-label">ICD Type Description</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter ICD Type Description"
            v-model="icdtypedescription"
          />
        </div>

        <div class="col-md-1 mb-4">
          <label class="form-label">Index</label>
          <input
            type="text"
            class="form-control"
            placeholder="0"
            v-model="index"
          />
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
        <button type="submit" class="btn btn-warning btn-text ml-auto" v-if="typeId">
        <i class="far fa-save"></i> Save
        </button>
         <button type="submit" class="btn btn-warning btn-text" v-if="!typeId">
          <i class="far fa-plus"></i> Add Parameter
        </button>
      </div>
    </form>

    <div class="table-title">
      <h3>List of ICD Type</h3>
    </div>
    <table class="table table-striped data-table" style="width: 100%">
      <thead>
        <tr>
          <th>No</th>
          <th>ICD Type Code</th>
          <th width="200px">ICD Type Name</th>
          <th>ICD Type Description</th>
          <th>Index</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr  v-for="(icdtype, index) in icdtypelist" :key="index">
          <td>{{ index+1 }}</td>
          <td>{{ icdtype.icd_type_code }}</td>
          <td>{{ icdtype.icd_type_name }}</td>
          <td>{{ icdtype.icd_type_description }}</td>
          <td>{{ icdtype.icd_type_order }}</td>
          <td>
            <a class="edit" @click="edittype(icdtype)"><i class="far fa-edit"></i></a>
            <a @click="deletetype(icdtype)" class="action-icon icon-danger"
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
  name: "icd-type",
  data() {
    return {
      icdtypecode: "",
      icdtypename: "",
      icdtypedescription: "",
      index: 0,
      icdtypelist: [],
      errors: [],
      userdetails: null,
      typeId: 0,
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
          "icd-setting/icdtype/getIcdTypeCodeList",
        { headers }
      )
      .then((resp) => {
        this.icdtypelist = resp.data.list;
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
  },
  methods: {
    async GeticdList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get(
        "icd-setting/icdtype/getIcdTypeCodeList",
        { headers }
      );
      if (response.data.code == 200 || response.data.code == "200") {
        this.icdtypelist = response.data.list;
      } else {
        this.icdtypelist = [];
      }
    },
    async onAddicdtype() {
      this.errors = [];
      try {
        if (!this.icdtypecode) {
          this.errors.push("ICD Type Code is required.");
        }
        if (!this.icdtypename) {
          this.errors.push("ICD Type Name is required.");
        }
        if (!this.icdtypedescription) {
          this.errors.push("ICD Type Description is required.");
        }
        if (this.index <= 0) {
          this.errors.push("Index is required.");
        } else {
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          if (this.typeId <= 0) {
            const response = await this.$axios.post(
              "icd-setting/icdtype/add",
              {
                added_by: this.userdetails.user.id,
                icd_type_code: this.icdtypecode,
                icd_type_name: this.icdtypename,
                icd_type_description: this.icdtypedescription,
                icd_type_order: this.index,
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
              "icd-setting/" + this.typeId + "/updateIcd_type",
              {
                added_by: this.userdetails.user.id,
                id: this.typeId,
                icd_type_code: this.icdtypecode,
                icd_type_name: this.icdtypename,
                icd_type_description: this.icdtypedescription,
                icd_type_order: this.index,
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

    async edittype(data) {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "icd-setting/" + data.id + "/editIcdType",
        { headers }
      );
      if (response.data.code == 200) {
        this.icdtypecode = response.data.list[0].icd_type_code;
        this.icdtypename = response.data.list[0].icd_type_name;
        this.icdtypedescription = response.data.list[0].icd_type_description;
        this.index = response.data.list[0].icd_type_order;
        this.typeId = data.id;
      } else {
        window.alert("Something went wrong");
      }
    },
    async deletetype(data) {
      try {
        const headers = {
          Authorization: "Bearer " + this.userdetails.access_token,
          Accept: "application/json",
          "Content-Type": "application/json",
        };
        const response = await this.$axios.post(
          "icd-setting/" + data.id + "/removeIcdType",
          { added_by: this.userdetails.user.id, id: data.id },
          { headers }
        );
        if (response.data.code == 200) {
          this.$nextTick(() => {
            $("#deletepopup").modal("show");
          });
          this.GeticdList();
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
      this.typeId = 0;
      this.icdtypecode = "";
      this.icdtypename = "";
      this.icdtypedescription = "";
      this.index = 0;
      this.errors = [];
      this.GeticdList();
    },
  },
};
</script>