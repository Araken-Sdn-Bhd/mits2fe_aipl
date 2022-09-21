<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>ICD SETTING</h1>
          </div>
          <div class="card mb-4">
            <div class="card-body">
              <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                    class="nav-link active"
                    id="nav-home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-home"
                    type="button"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    ICD Type
                  </button>
                  <button
                    class="nav-link"
                    id="nav-profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-profile"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    ICD Category
                  </button>
                  <button
                    class="nav-link"
                    id="nav-contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-contact"
                    type="button"
                    role="tab"
                    aria-controls="nav-contact"
                    aria-selected="false"
                  >
                    ICD Code
                  </button>
                </div>
              </nav>
              <div class="tab-content" id="nav-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
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
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
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

        <div class="col-md-1 mb-4">
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
        <i class="far fa-save"></i> Save
        </button>
         <button type="submit" class="btn btn-warning btn-text" v-if="!icdcatId">
          <i class="far fa-plus"></i> Add Parameter
        </button>
      </div>
    </form>
    <div class="table-title">
      <h3>List of ICD Category</h3>
    </div>
    <table class="table table-striped data-table1" style="width: 100%">
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
            <a class="edit" @click="editcat(cat)"><i class="far fa-edit"></i></a>
            <a @click="deletecat(cat)" class="action-icon icon-danger"
              ><i class="far fa-trash-alt"></i
            ></a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-contact"
                  role="tabpanel"
                  aria-labelledby="nav-contact-tab"
                >
          <div class="content-subtab border-top-left">
    <form class="g-3 mt-3" method="post" @submit.prevent="onAddicdCode">
      <div class="row">
        <div class="col-md-3 mb-4">
          <label for="" class="form-label">ICD Type Code</label>
          <select
            v-model="icdtypecodeforicdcode"
            class="form-select"
            aria-label="Default select example"
            @change="onCategorycodebind($event)"
          >
          <option value="0">Please Select</option>
            <option
              v-for="type in icdtypelist"
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
            v-model="icdcatcodeforicdcod"
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
        <i class="far fa-save"></i> Save
        </button>
         <button type="submit" class="btn btn-warning btn-text" v-if="!icdcodeId">
          <i class="far fa-plus"></i> Add Parameter
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
              ><i class="far fa-edit"></i
            ></a>
            <a @click="deletecode(cat)" class="action-icon icon-danger"
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
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import CommonHeader from '../../../components/CommonHeader.vue';
import CommonSidebar from '../../../components/CommonSidebar.vue';
import IcdType from "../../../components/Admin/icd-type.vue";
import Icdcode from "../../../components/Admin/icdcode.vue";
import Icdcategory from "../../../components/Admin/icd_category.vue";
export default {
  components: { CommonSidebar, CommonHeader, IcdType, Icdcategory, Icdcode },
  name: "icd-setting",
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
      //category
      icdtype: 0,
      icdcatcode: "",
      icdcatname: "",
      icdcatdescription: "",
      icdcatindex: 0,
      icdcatlist: [],
      icdcatId: 0,
      //icd code
      icdcatcodeforicdcod:0,
      icdtypecodeforicdcode:0,
      icdcode: "",
      icdname: "",
      icddescription: "",
      icdindex: 0,
    //  icdtypecodelist: [],
      icdcatcodelist: [],
      codelist: [],
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
    this.GetICDCategory();
    this.GetICDCODELIST();
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
    //ICD CATEGORY
    GetICDCategory() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const axios = require("axios").default;
      axios
        .get(
          `${this.$axios.defaults.baseURL}` + "icd-setting/getIcdCategoryList",
          { headers }
        )
        .then((resp) => {
          this.icdcatlist = resp.data.list;
          $(document).ready(function () {
            $(".data-table1").DataTable({
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
              this.$nextTick(() => {
                $("#insertpopup").modal("show");
              });
              this.icdcategoryresetmodel();
            } else {
              this.$nextTick(() => {
                $("#errorpopup").modal("show");
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
              this.$nextTick(() => {
                $("#updatepopup").modal("show");
              });
              this.icdcategoryresetmodel();
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
      console.log('my api',response.data);
      if (response.data.code == 200) {
        this.icdtype = response.data.list[0].icd_type_id;
        this.icdcatcode = response.data.list[0].icd_category_code;
        this.icdcatname = response.data.list[0].icd_category_name;
        this.icdcatdescription = response.data.list[0].icd_category_description;
        this.icdcatindex = response.data.list[0].icd_category_order;
        this.icdcatId = data.id;
      } else {
        window.alert("Something went wrong");
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
          this.$nextTick(() => {
            $("#deletepopup").modal("show");
          });
          this.GeticdcatList();
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
    async icdcategoryresetmodel() {
      this.icdtype = 0;
      this.icdcatcode = "";
      this.icdcatname = "";
      this.icdcatdescription = "";
      this.icdcatindex = 0;
      this.errors = [];
      this.GeticdcatList();
      this.icdcatId = 0;
    },
    //ICD CODE
      GetICDCODELIST() {
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
      .catch((err) => {
        console.error(err);
      });
  },
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
    // async GeticdcodeList() {
    //   const headers = {
    //     Authorization: "Bearer " + this.userdetails.access_token,
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   };
    //   const response = await this.$axios.get(
    //     "icd-setting/icdtype/getIcdTypeCodeList",
    //     { headers }
    //   );
    //   if (response.data.code == 200 || response.data.code == "200") {
    //     this.icdtypecodelist = response.data.list;
    //   } else {
    //     this.icdtypecodelist = [];
    //   }
    // },
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
      console.log('my cat list',response.data);
      if (response.data.code == 200 || response.data.code == "200") {
        this.icdcatcodelist = response.data.list;
      } else {
        this.icdcatcodelist = [];
      }
    },
    async onAddicdCode() {
      this.errors = [];
      try {
        if (this.icdtypecodeforicdcode <= 0) {
          this.errors.push("ICD Type Code is required.");
        }
        if (this.icdcatcodeforicdcod <= 0) {
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
                icd_type_id: this.icdtypecodeforicdcode,
                icd_category_id: this.icdcatcodeforicdcod,
                icd_code: this.icdcode,
                icd_name: this.icdname,
                icd_description: this.icddescription,
                icd_order: this.icdindex,
              },
              { headers }
            );
            if (response.data.code == 200 || response.data.code == "200") {
              this.$nextTick(() => {
                $("#insertpopup").modal("show");
              });
              this.icdcoderesetmodel();
            } else {
              this.$nextTick(() => {
                $("#errorpopup").modal("show");
              });
            }
          } else {
            const response = await this.$axios.post(
              "icd-setting/" + this.icdcodeId + "/updateIcd_code",
              {
                added_by: this.userdetails.user.id,
                id: this.icdcodeId,
                icd_type_id: this.icdtypecodeforicdcode,
                icd_category_id: this.icdcatcodeforicdcod,
                icd_code: this.icdcode,
                icd_name: this.icdname,
                icd_description: this.icddescription,
                icd_order: this.icdindex,
              },
              { headers }
            );
            if (response.data.code == 200 || response.data.code == "200") {
              this.$nextTick(() => {
                $("#updatepopup").modal("show");
              });
              this.icdcoderesetmodel();
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
        this.icdtypecodeforicdcode =response.data.list[0].icd_type_id;
        this.icdcatcodeforicdcod =response.data.list[0].icd_category_id;
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
        window.alert("Something went wrong");
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
          this.$nextTick(() => {
            $("#deletepopup").modal("show");
          });
          this.Geticdcode();
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
    async icdcoderesetmodel() {
      this.icdtypecodeforicdcode = 0;
      this.icdcatcodeforicdcod = 0;
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