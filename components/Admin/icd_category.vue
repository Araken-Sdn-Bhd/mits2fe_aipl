<template>
  <div class="content-subtab border-top-left">
    <form class="g-3 mt-3" method="post" @submit.prevent="onAddicdCategory">
      <div class="row">
        <div class="col-md-3 mb-4">
          <label for="" class="form-label">ICD Type Code</label>
           <select
            v-model="icdtype"
            class="form-select"
            aria-label="Default select example"
          >
          <option value="0">Please Select</option>
            <option v-for="type in icdtypelist" v-bind:key="type.id" v-bind:value="type.id">
              {{ type.icd_type_code }}
            </option>
          </select>
        </div>
      </div>
      <!-- close-row -->

      <div class="row">
        <div class="col-md-3 mb-4">
          <label for="" class="form-label">ICD Category Code</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter ICD Category Code"
              v-model="icdcatcode"
          />
        </div>

        <div class="col-md-3 mb-4">
          <label for="" class="form-label">ICD Category Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter ICD Category Name"
                v-model="icdcatname"
          />
        </div>

        <div class="col-md-5 mb-4">
          <label for="" class="form-label">ICD Category Description</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter ICD Category Description"
             v-model="icdcatdescription"
          />
        </div>

        <div class="col-lg-1 col-sm-2 mb-4">
          <label class="form-label">Index</label>
          <input type="text" class="form-control" placeholder="0" v-model="icdcatindex"/>
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
        <button type="submit" class="btn btn-warning btn-text ml-auto" v-if="icdcatId">
        <i class="fa fa-save"></i> Save
        </button>
         <button type="submit" class="btn btn-warning btn-text" v-if="!icdcatId">
          <i class="fa fa-plus"></i> Add Parameter
        </button>
      </div>
    </form>
    <div class="table-title">
      <h3>List of ICD Category</h3>
    </div>
    <table class="table table-striped data-table1 display nowrap" style="width: 100%">
      <thead>
        <tr>
          <th>No</th>
          <th>ICD Type Code</th>
          <th>ICD C-Code</th>
          <th>ICD C-Name</th>
          <th>ICD C-Description</th>
          <th>Index</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
    <tr  v-for="(cat, index) in icdcatlist" :key="index">
            <td>{{index+1}}</td>
         <td>{{cat.icd_type_code}}</td>
         <td>{{cat.icd_category_code}}</td>
       <td>{{cat.icd_category_name}}</td>
          <td>{{cat.icd_category_description}}</td>
      <td>{{cat.icd_category_order}}</td>
           <td>
            <a class="edit" @click="editcat(cat)"><i class="fa fa-edit"></i></a>
            <a @click="deletecat(cat)" class="action-icon icon-danger"
              ><i class="fa fa-trash-alt"></i
            ></a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "icd_category",
  data() {
    return {
      icdtype: 0,
      icdcatcode: "",
      icdcatname: "",
      icdcatdescription: "",
      icdcatindex: 0,
      icdtypelist: [],
      icdcatlist: [],
      errors: [],
      userdetails: null,
      icdcatId: 0,
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
          "icd-setting/getIcdCategoryList",
        { headers }
      )
      .then((resp) => {
        this.icdcatlist = resp.data.list;
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
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.GeticdList();
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
    async GeticdcatList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get("icd-setting/getIcdCategoryList", {
        headers,
      });
      if (response.data.code == 200 || response.data.code == "200") {
        this.icdcatlist = response.data.list;
      } else {
        this.icdcatlist = [];
      }
    },
    async onAddicdCategory() {
      this.errors = [];
      try {
        if (this.icdtype <= 0) {
          this.errors.push("ICD Type Code is required.");
        }
        if (!this.icdcatcode) {
          this.errors.push("ICD Category Code is required.");
        }
        if (!this.icdcatname) {
          this.errors.push("ICD Category Name is required.");
        }
        if (!this.icdcatdescription) {
          this.errors.push("ICD Category  Description is required.");
        }
        if (this.icdcatindex <= 0) {
          this.errors.push("Index is required.");
        } else {
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          if (this.icdcatId <= 0) {
            const response = await this.$axios.post(
              "icd-setting/icdcategory/addIcdCategory",
              {
                added_by: this.userdetails.user.id,
                icd_type_id: this.icdtype,
                icd_category_code: this.icdcatcode,
                icd_category_name: this.icdcatname,
                icd_category_description: this.icdcatdescription,
                icd_category_order: this.icdcatindex,
              },
              { headers }
            );
            if (response.data.code == 200 || response.data.code == "200") {
              this.$swal.fire('Successfully Update', '', 'success');
              this.resetmodel();
            } else {
              this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + this.error,
                  footer: ''
                });
            }
          } else {
            const response = await this.$axios.post(
              "icd-setting/" + this.icdcatId + "/updateIcd_category",
              {
                added_by: this.userdetails.user.id,
                id: this.icdcatId,
                icd_type_id: this.icdtype,
                icd_category_code: this.icdcatcode,
                icd_category_name: this.icdcatname,
                icd_category_description: this.icdcatdescription,
                icd_category_order: this.icdcatindex,
              },
              { headers }
            );
            if (response.data.code == 200 || response.data.code == "200") {
              this.$swal.fire(
                  'Successfully Update',
                );
              this.resetmodel();
            } else {
              this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + this.error,
                  footer: ''
                });
            }
          }
        }
      } catch (e) {
        this.errors.push = e;
      }
    },

    async editcat(data) {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "icd-setting/" + data.id + "/editIcdCategory",
        { headers }
      );
      if (response.data.code == 200) {
        this.icdtype = response.data.list[0].icd_type_id;
        this.icdcatcode = response.data.list[0].icd_category_code;
        this.icdcatname = response.data.list[0].icd_category_name;
        this.icdcatdescription = response.data.list[0].icd_category_description;
        this.icdcatindex = response.data.list[0].icd_category_order;
        this.icdcatId = data.id;
      } else {
        this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + this.error,
                  footer: ''
                });
      }
    },
    async deletecat(data) {
      try {
        const headers = {
          Authorization: "Bearer " + this.userdetails.access_token,
          Accept: "application/json",
          "Content-Type": "application/json",
        };
        const response = await this.$axios.post(
          "icd-setting/" + data.id + "/removeIcdCategory",
          { added_by: this.userdetails.user.id, id: data.id },
          { headers }
        );
        if (response.data.code == 200) {
          this.$swal.fire('Deleted Successfully', '', 'success');
          this.GeticdcatList();
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
    async resetmodel() {
      this.icdtype = 0;
      this.icdcatcode = "";
      this.icdcatname = "";
      this.icdcatdescription = "";
      this.icdcatindex = 0;
      this.errors = [];
      this.GeticdcatList();
      this.icdcatId = 0;
    },
  },
};
</script>
