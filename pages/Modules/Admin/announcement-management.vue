<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>Announcement Management</h1>
            <div class="btn-group-a">
              <!-- <a href="#" class="add-btn"><i class="far fa-cog"></i></a>
              <a href="#" class="add-btn"><i class="far fa-search"></i></a> -->
              <a href="/Modules/Admin/create-event" class="add-btn"
                ><i class="far fa-plus"></i
              ></a>
            </div>
          </div>

          <div class="card mb-4">
            <div class="card-body">
              <div class="search-table">
                <div class="row mt-2 mb-3">
                  <div class="col-sm-4">
                    <div class="input-group">
                      <span class="input-group-text bg-transparent br-0"
                        ><i class="far fa-search"></i
                      ></span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search" v-model="search" @keyup="OnSearch"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <!-- search-table -->
              <table class="table table-striped data-table" style="width: 100%">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Date Of Creation</th>
                    <th>Title</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(ann,index) in list" :key="index">
                    <td>{{ index+1 }}</td>
                    <td>{{ ann.created }}</td>
                    <td>{{ ann.title }}</td>
                    <td>{{ ann.start_date }}</td>
                    <td>{{ann.end_date }}</td>
                    <td v-if="SidebarAccess==1">
                      <p v-if="ann.status == 0" style="margin: 1px">
                        Save as draft
                      </p>
                      <p v-if="ann.status == 1" style="margin: 1px">Publish</p>
                    </td>
                    <td>
                      <a
                        @click="deleteannounce(ann)" v-if="SidebarAccess==1"
                        class="action-icon icon-danger"
                        ><i class="far fa-trash-alt"></i
                      ></a>
                      <a class="edit" @click="editannounce(ann)" v-if="SidebarAccess==1 && ann.status == 0"
                        ><i class="far fa-edit"></i
                      ></a>
                      <a @click="viewannounce(ann)" class="view" v-if="ann.status == 1"
                        ><i class="far fa-eye"></i
                      ></a>
                    </td>
                  </tr>
                </tbody>
              </table>
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
import moment from 'moment'
export default {
  components: { CommonSidebar, CommonHeader },
  name: "announcement-management",
  setup() {},
  data() {
    return {
      userdetails: null,
      list: [],
      alllist:[],
      search:"",
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
      .post(
        `${this.$axios.defaults.baseURL}` +
          "announcement/list",
        { headers }
      )
      .then((resp) => {
        this.list = resp.data.list;
        this.alllist=resp.data.list;
        console.log('my aa',this.alllist);
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
      const response = await this.$axios.post("announcement/list", { headers });
      if (response.data.code == 200 || response.data.code == "200") {
        this.list = response.data.list;
      } else {
        this.list = [];
      }
    },
    async editannounce(data) {
      this.$router.push({
        path: "/Modules/Admin/update-event",
        query: { id: data.id },
      });
    },
    async viewannounce(data) {
      this.$router.push({
        path: "/Modules/Admin/view-event",
        query: { id: data.id },
      });
    },
    async deleteannounce(data) {
      try {
        const headers = {
          Authorization: "Bearer " + this.userdetails.access_token,
          Accept: "application/json",
          "Content-Type": "application/json",
        };
        const response = await this.$axios.post(
          "announcement/remove",
          { added_by: this.userdetails.user.id, id: data.id },
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
   async format_date(value) {
      if (value) {
        return moment(String(value)).format("YYYYMMDD");
      }
    },
      OnSearch() {
      if (this.search) {
        this.list = this.alllist.filter((notChunk) => {
          return (
            notChunk.created
              .toLowerCase()
              .indexOf(this.search.toLowerCase()) > -1 ||
            notChunk.title
              .toLowerCase()
              .indexOf(this.search.toLowerCase()) > -1 ||
            notChunk.start_date
              .toLowerCase()
              .indexOf(this.search.toLowerCase()) > -1 ||
            notChunk.end_date
              .toLowerCase()
              .indexOf(this.search.toLowerCase()) > -1
          );
        });
      } else {
        this.list = this.alllist;
      }
    },
  },
};
</script>
