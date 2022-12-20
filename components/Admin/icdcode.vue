<template>
  <div class="content-subtab border-top-left">
    <form class="g-3 mt-3" method="post" @submit.prevent="onAddicdCode">
      <div class="row">
        <div class="col-md-3 mb-4">
          <label for="" class="form-label">ICD Type Code</label>
          <select
            v-model="icdtypecode"
            class="form-select"
            aria-label="Default select example"
            @change="onCategorycodebind($event)"
          >
          <option value="0">Please Select</option>
            <option
              v-for="type in icdtypecodelist"
              v-bind:key="type.id"
              v-bind:value="type.id"
            >
              {{ type.icd_type_code }}
            </option>
          </select>
        </div>

        <div class="col-md-4 mb-4">
          <label for="" class="form-label">ICD Category Code</label>
          <select
            v-model="icdcatcode"
            class="form-select"
            aria-label="Default select example"
          >
             <option value="0">Please Select</option>
            <option
              v-for="catcode in icdcatcodelist"
              v-bind:key="catcode.id"
              v-bind:value="catcode.id"
            >
              {{ catcode.icd_category_code }} {{catcode.icd_category_name}}
            </option>
          </select>
        </div>
      </div>
      <!-- close-row -->

      <div class="row">
        <div class="col-md-3 mb-4">
          <label for="" class="form-label">ICD Code</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter ICD Code"
            v-model="icdcode"
          />
        </div>

        <div class="col-md-3 mb-4">
          <label for="" class="form-label">ICD Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter ICD Name"
            v-model="icdname"
          />
        </div>

        <div class="col-md-5 mb-4">
          <label for="" class="form-label">ICD Description</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter ICD Description"
            v-model="icddescription"
          />
        </div>

        <div class="col-md-1 mb-4">
          <label class="form-label">Index</label>
          <input
            type="text"
            class="form-control"
            placeholder="0"
            v-model="icdindex"
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
        <button type="submit" class="btn btn-warning btn-text ml-auto" v-if="icdcodeId">
        <i class="fa fa-save"></i> Save
        </button>
         <button type="submit" class="btn btn-warning btn-text" v-if="!icdcodeId">
          <i class="fa fa-plus"></i> Add Parameter
        </button>
      </div>
    </form>



    <div class="table-title">
      <h3>List of ICD Code</h3>
    </div>
    <table class="table table-striped data-table2 font-13" style="width: 100%">
      <thead>
        <tr>
          <th>No</th>
          <th>ICD Type Code</th>
          <th>ICD C-Code</th>
          <th>ICD Code</th>
          <th>ICD Name</th>
          <th>ICD Description</th>
          <th>Index</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(cat, index) in codelist" :key="index">
          <td>{{ index+1 }}</td>
          <td>{{ cat.icd_type_code }}</td>
          <td>{{ cat.icd_category_code }}</td>
          <td>{{ cat.icd_code }}</td>
          <td>{{ cat.icd_name }}</td>
          <td>{{ cat.icd_description }}</td>
          <td>{{ cat.icd_order }}</td>
          <td>
            <a class="edit" @click="editcode(cat)"
              ><i class="fa fa-edit"></i
            ></a>
            <a @click="deletecode(cat)" class="action-icon icon-danger"
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
  name: "icdcode",
  data() {
    return {
      icdtypecode: 0,
      icdcatcode: 0,
      icdcode: "",
      icdname: "",
      icddescription: "",
      icdindex: 0,
      icdtypecodelist: [],
      icdcatcodelist: [],
      codelist: [],
      errors: [],
      userdetails: null,
      icdcodeId: 0,
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
          "icd-setting/getIcdcodeList",
        { headers }
      )
      .then((resp) => {
        this.codelist = resp.data.list;
        $(document).ready(function () {
          $(".data-table2").DataTable({
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
    this.GeticdcodeList();
  },
  methods: {
    async Geticdcode() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get("icd-setting/getIcdcodeList", {
        headers,
      });
      if (response.data.code == 200 || response.data.code == "200") {
        this.codelist = response.data.list;
      } else {
        this.codelist = [];
      }
    },
    async GeticdcodeList() {
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
        this.icdtypecodelist = response.data.list;
      } else {
        this.icdtypecodelist = [];
      }
    },
    async onCategorycodebind(event) {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "icd-setting/getIcdTypeWiseCategoryCodeList/" + event.target.value,
        { headers }
      );
      console.log('my catlist',response.data);
      if (response.data.code == 200 || response.data.code == "200") {
        this.icdcatcodelist = response.data.list;
      } else {
        this.icdcatcodelist = [];
      }
    },
    async onAddicdCode() {
      this.errors = [];
      try {
        if (this.icdtypecode <= 0) {
          this.errors.push("ICD Type Code is required.");
        }
        if (this.icdcatcode <= 0) {
          this.errors.push("ICD Category Code is required.");
        }
        if (!this.icdcode) {
          this.errors.push("ICD Code is required.");
        }
        if (!this.icdname) {
          this.errors.push("ICD Name is required.");
        }
        if (!this.icddescription) {
          this.errors.push("ICD Description is required.");
        }
        if (this.icdindex <= 0) {
          this.errors.push("Index is required.");
        } else {
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          if (this.icdcodeId <= 0) {
            const response = await this.$axios.post(
              "icd-setting/addIcdCode",
              {
                added_by: this.userdetails.user.id,
                icd_type_id: this.icdtypecode,
                icd_category_id: this.icdcatcode,
                icd_code: this.icdcode,
                icd_name: this.icdname,
                icd_description: this.icddescription,
                icd_order: this.icdindex,
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
              "icd-setting/" + this.icdcodeId + "/updateIcd_code",
              {
                added_by: this.userdetails.user.id,
                id: this.icdcodeId,
                icd_type_id: this.icdtypecode,
                icd_category_id: this.icdcatcode,
                icd_code: this.icdcode,
                icd_name: this.icdname,
                icd_description: this.icddescription,
                icd_order: this.icdindex,
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

    async editcode(data) {
      console.log('my body',data.id);
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "icd-setting/" + data.id + "/editIcdcode",
        { headers }
      );
      console.log('my response',response.data);
      if (response.data.code == 200) {
        this.icdtypecode = response.data.list[0].icd_type_id;
        this.icdcatcode = response.data.list[0].icd_category_id;
        this.icdcode = response.data.list[0].icd_code;
        this.icdname = response.data.list[0].icd_name;
        this.icddescription = response.data.list[0].icd_description;
        this.icdindex = response.data.list[0].icd_order;
        this.icdcodeId = data.id;
         const response1 = await this.$axios.post(
        "icd-setting/getIcdTypeWiseCategoryCodeList/" + this.icdtypecode,
        { headers }
      );
      if (response1.data.code == 200 || response1.data.code == "200") {
        this.icdcatcodelist = response1.data.list;
      } else {
        this.icdcatcodelist = [];
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
    async deletecode(data) {
      try {
        const headers = {
          Authorization: "Bearer " + this.userdetails.access_token,
          Accept: "application/json",
          "Content-Type": "application/json",
        };
        const response = await this.$axios.post(
          "icd-setting/" + data.id + "/removeIcdCode",
          { added_by: this.userdetails.user.id, id: data.id },
          { headers }
        );
        if (response.data.code == 200) {
          this.$swal.fire('Deleted Successfully', '', 'success');
          this.Geticdcode();
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
      this.icdtypecode = 0;
      this.icdcatcode = 0;
      this.icdcode = "";
      this.icdname = "";
      this.icddescription = "";
      this.icdindex = 0;
      this.errors = [];
      this.Geticdcode();
      this.icdcodeId = 0;
    },
  },
};
</script>
