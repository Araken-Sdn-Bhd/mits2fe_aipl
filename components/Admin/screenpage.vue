<template>
  <div class="content-subtab border-top-left">
    <form class="g-3 mt-3" method="post" @submit.prevent="onAddscreen">
      <div class="row mb-4">
        <div class="col-md-6">
          <label for="" class="form-label">Module</label>
          <select
            v-model="ModuleId"
            class="form-select"
            aria-label="Default select example"
            @change="onsubmodelbind($event)"
          >
            <option value="0">Please Select</option>
            <option
              v-for="mod in modulelist"
              v-bind:key="mod.id"
              v-bind:value="mod.id"
            >
              {{ mod.module_name }}
            </option>
          </select>
        </div>

        <div class="col-md-6">
          <label for="" class="form-label">Sub Module</label>
          <select
            v-model="SubmoduleId"
            class="form-select"
            aria-label="Default select example"
          >
            <option value="0">Please Select</option>
            <option
              v-for="submod in submodulelist"
              v-bind:key="submod.id"
              v-bind:value="submod.id"
            >
              {{ submod.sub_module_name }}
            </option>
          </select>
        </div>
      </div>

      <div class="row mb-4">
        <div class="col-md-6">
          <label for="" class="form-label">Screen Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Screen Name"
            v-model="screenname"
          />
        </div>

        <div class="col-md-6">
          <label for="" class="form-label">Page Route</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Page Route"
            v-model="pageroute"
          />
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-md-6">
          <label for="" class="form-label">Description</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Description"
            v-model="description"
          />
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <button
          type="submit"
          class="btn btn-warning btn-text ml-auto"
          v-if="Id"
        >
          <i class="far fa-save"></i> Save
        </button>
        <button type="submit" class="btn btn-warning btn-text" v-if="!Id">
          <i class="far fa-plus"></i> Add Parameter
        </button>
      </div>
    </form>
    <div class="table-title">
      <h3>List of Modules</h3>
    </div>
    <table class="table table-striped data-table font-13" style="width: 100%">
      <thead>
        <tr>
          <th>No</th>
          <th>Module</th>
          <th>Sub Module</th>
          <th>Screen Name</th>
          <th>Page Route</th>
          <th>Description</th>
          <th width="80px">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="scn in list" :key="scn.id">
          <td>{{ scn.screen_id }}</td>
          <td>{{ scn.module_name }}</td>
          <td>{{ scn.sub_module_name }}</td>
          <td>{{ scn.screen_name }}</td>
          <td>{{ scn.screen_route }}</td>
          <td>{{ scn.screen_description }}</td>
          <td>
            <a class="edit" @click="editsscreen(scn)"
              ><i class="far fa-edit"></i
            ></a>
            <a @click="deletescreen(scn)" class="action-icon icon-danger"
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
  name: "screenpage",
  data() {
    return {
      Id: 0,
      ModuleId: 0,
      SubmoduleId: 0,
      screenname: "",
      pageroute: "",
      description: "",
      errors: [],
      userdetails: null,
      modulelist: [],
      submodulelist: [],
      list: [],
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.GetModuleList();
    this.GetList();
  },
  methods: {
    async onsubmodelbind(event) {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "screen-module/sub-module-list-by-module-id",
        { module_id: event.target.value },
        { headers }
      );
      if (response.data.code == 200 || response.data.code == "200") {
        this.submodulelist = response.data.list;
      } else {
        this.submodulelist = [];
      }
    },
    async onAddscreen() {
      this.errors = [];
      try {
        if (this.ModuleId <= 0) {
          this.errors.push("Module is required.");
        }
        if (this.SubmoduleId <= 0) {
          this.errors.push("Sub Module is required.");
        }
        if (!this.screenname) {
          this.errors.push("Screen Name is required.");
        }
        if (!this.pageroute) {
          this.errors.push("Page Route is required.");
        }
        if (!this.description) {
          this.errors.push("Description is required.");
        } else {
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          if (this.Id <= 0) {
            const response = await this.$axios.post(
              "screen-module/add-screen-page",
              {
                module_id: this.ModuleId,
                sub_module_id: this.SubmoduleId,
                added_by: this.userdetails.user.id,
                screen_name: this.screenname,
                screen_route: this.pageroute,
                screen_description: this.description,
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
              "screen-module/updateScreenModule",
              {
                id: this.Id,
                module_id: this.ModuleId,
                sub_module_id: this.SubmoduleId,
                added_by: this.userdetails.user.id,
                screen_name: this.screenname,
                screen_route: this.pageroute,
                screen_description: this.description,
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
      this.ModuleId = 0;
      this.SubmoduleId = 0;
      this.screenname = "";
      this.pageroute = "";
      this.description = "";
      this.Id = 0;
      this.errors = [];
      this.GetList();
    },
    async GetModuleList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get("screen-module/list", { headers });
      if (response.data.code == 200 || response.data.code == "200") {
        this.modulelist = response.data.list;
      } else {
        this.modulelist = [];
      }
    },
    async GetList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get(
        "screen-module/getScreenPageList",
        {
          headers,
        }
      );
      if (response.data.code == 200 || response.data.code == "200") {
        this.list = response.data.list;
      } else {
        this.list = [];
      }
    },
    async editsscreen(data) {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get(
        "screen-module/getScreenModuleListById?screen_id=" + data.screen_id,
        {
          headers,
        }
      );
      if (response.data.code == 200) {
        this.screenname = response.data.list[0].screen_name;
        this.pageroute = response.data.list[0].screen_route;
        this.description = response.data.list[0].screen_description;
        this.ModuleId = response.data.list[0].module_id;
        this.SubmoduleId = response.data.list[0].sub_module_id;
        this.Id = data.screen_id;
        const response1 = await this.$axios.post(
          "screen-module/sub-module-list-by-module-id",
          { module_id: response.data.list[0].module_id },
          { headers }
        );
        if (response1.data.code == 200 || response1.data.code == "200") {
          this.submodulelist = response1.data.list;
        } else {
          this.submodulelist = [];
        }
      } else {
        window.alert("Something went wrong");
      }
    },
    async deletescreen(data) {
      try {
        const headers = {
          Authorization: "Bearer " + this.userdetails.access_token,
          Accept: "application/json",
          "Content-Type": "application/json",
        };
        const response = await this.$axios.post(
          "screen-module/removeScreenModule",
          { added_by: this.userdetails.user.id, screen_id: data.screen_id },
          { headers }
        );
        console.log("my delete resp", response.data);
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
  },
};
</script>