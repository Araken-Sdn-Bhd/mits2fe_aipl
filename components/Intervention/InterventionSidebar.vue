<template>
  <div id="layoutSidenav">
    <div id="layoutSidenav_nav">
      <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
        <div class="sb-sidenav-menu scrool">
          <div class="nav">
            <ul>
              <li ref="tab1" class="" @click="changesidebar('tab1')">
                <a class="nav-link" href="#">
                  <i class="far fa-home-alt"></i>
                  <span>Dashboard</span>
                </a>
              </li>
              <li ref="tab2" class="" @click="changesidebar('tab2')">
                <a class="nav-link" href="/Modules/Intervention/patient-list">
                  <i class="fal fa-user-injured"></i>
                  <span>Patients</span>
                </a>
              </li>

              <li ref="tab3" class="" @click="changesidebar('tab3')">
                <a class="nav-link" href="/Modules/Intervention/job-offer">
                  <i class="fal fa-user-injured"></i>
                  <span>Job Offer</span>
                </a>
              </li>

              <li ref="tab4" class="" @click="changesidebar('tab4')">
                <a
                  class="nav-link"
                  href="/Modules/Intervention/job-approval-request"
                >
                  <i class="fal fa-user-injured"></i>
                  <span>Job Approval Request</span>
                </a>
              </li>

              <li ref="tab5" class="" @click="changesidebar('tab5')">
                <a class="nav-link" href="/Modules/Intervention/job-record">
                  <i class="fal fa-user-injured"></i>
                  <span>Job Record</span>
                </a>
              </li>
              <li ref="tab6" class="" @click="changesidebar('tab6')">
                <a
                  class="nav-link"
                  href="/Modules/Intervention/registration-info"
                >
                  <i class="fal fa-user-injured"></i>
                  <span>Company Basic Information</span>
                </a>
              </li>
              <li class="divider">Imported Link</li>
              <div v-show="userdetails">
                <li>
                  <a href="/Modules/Patient/patient-list" class="nav-link">
                    <i class="far fa-home-alt"></i>
                    Patient Manag...
                  </a>
                </li>

                <li>
                  <a href="/Modules/Admin/admin-dashboard" class="nav-link">
                    <i class="far fa-home-alt"></i>
                    Admin Manag...
                  </a>
                </li>

                <li >
                  <a href="/Modules/Report/sharp" class="nav-link">
                    <i class="far fa-home-alt"></i>
                    Report Manag...
                  </a>
                </li>
                <li>
                  <a href="/Modules/Shharp/patients-list" class="nav-link">
                    <i class="far fa-home-alt"></i>
                    Shharp Manag...
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <div
      class="modal fade"
      id="insertpopup"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-sm test-connection">
        <div class="modal-content">
          <div class="modal-body">
            <p>Successfully Created</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary btn-ok"
              data-bs-dismiss="modal"
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="updatepopup"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-sm test-connection">
        <div class="modal-content">
          <div class="modal-body">
            <p>Successfully Updated</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary btn-ok"
              data-bs-dismiss="modal"
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="errorpopup"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-sm test-connection">
        <div class="modal-content">
          <div class="modal-body">
            <p>Something went wrong!</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary btn-ok"
              data-bs-dismiss="modal"
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="deletepopup"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-sm test-connection">
        <div class="modal-content">
          <div class="modal-body">
            <p>Succesfully Deleted</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary btn-ok"
              data-bs-dismiss="modal"
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "InterventionSidebar",
  head: {
    script: [
      {
        src: "/app/js/bootstrap.bundle.min.js",
        body: true,
        crossorigin: "anonymous",
      },
      {
        src: "/app/js/jquery-3.5.1.js",
        body: true,
        crossorigin: "anonymous",
      },
      {
        src: "/app/js/scripts.js",
        body: true,
        crossorigin: "anonymous",
      },
      {
        src: "/app/js/jquery.dataTables.min.js",
        body: true,
        crossorigin: "anonymous",
      },
      {
        src: "/app/js/dataTables.bootstrap5.min.js",
        body: true,
        crossorigin: "anonymous",
      },
      {
        src: "https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js",
        body: true,
        crossorigin: "anonymous",
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.min.js",
        async: true,
        crossorigin: "anonymous",
      },
    ],
  },
  data() {
    return {
      userdetails: null,
      nav: "",
      role: "",
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    if (!this.userdetails) {
      this.$router.push("/");
    } else {
      this.role = this.userdetails.user.role;
    }
  },
  mounted() {
    document.body.classList.add("sb-nav-fixed");
    this.nav = localStorage.getItem("nav");
    if (this.nav == "tab1") {
      this.$refs.tab1.classList.add("active");
    } else if (this.nav == "tab2") {
      this.$refs.tab2.classList.add("active");
    } else if (this.nav == "tab3") {
      this.$refs.tab3.classList.add("active");
    } else if (this.nav == "tab4") {
      this.$refs.tab4.classList.add("active");
    } else if (this.nav == "tab5") {
      this.$refs.tab5.classList.add("active");
    } else if (this.nav == "tab6") {
      this.$refs.tab6.classList.add("active");
    }
  },
  methods: {
    changesidebar: function (val) {
      this.$refs.tab1.classList.remove("active");
      this.$refs.tab2.classList.remove("active");
      this.$refs.tab3.classList.remove("active");
      this.$refs.tab4.classList.remove("active");
      this.$refs.tab5.classList.remove("active");
      this.$refs.tab6.classList.remove("active");
      localStorage.setItem("nav", val);
      if (val == "tab1") {
        this.$refs.tab1.classList.add("active");
      } else if (val == "tab2") {
        this.$refs.tab2.classList.add("active");
      } else if (val == "tab3") {
        this.$refs.tab3.classList.add("active");
      } else if (val == "tab4") {
        this.$refs.tab4.classList.add("active");
      } else if (val == "tab5") {
        this.$refs.tab5.classList.add("active");
      } else if (val == "tab6") {
        this.$refs.tab6.classList.add("active");
      }
    },
  },
};
</script>
