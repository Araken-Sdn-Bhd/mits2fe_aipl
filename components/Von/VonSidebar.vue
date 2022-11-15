<template>
  <div id="layoutSidenav">
    <div id="layoutSidenav_nav">
      <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
        <div class="sb-sidenav-menu scrool">
          <div class="nav">
            <ul>
              <li ref="tab1" @click="changesidebar('tab1')">
                <a class="nav-link" href="#">
                  <i class="far fa-home-alt"></i>
                  <span>Dashboard</span>
                </a>
              </li>
              <li ref="tab2" @click="changesidebar('tab2')">
                <a class="nav-link" href="/app/modules/Von/von-management">
                  <i class="fal fa-user-injured"></i>
                  <span>VON Manag...</span>
                </a>
              </li>
              <li ref="tab3" @click="changesidebar('tab3')">
                <a class="nav-link" href="/app/modules/Von/list-of-application">
                  <i class="fal fa-user-injured"></i>
                  <span>VON Application</span>
                </a>
              </li>

              <li ref="tab4" @click="changesidebar('tab4')">
                <a class="nav-link" href="/app/modules/Von/von-list-of-appointment">
                  <i class="fal fa-user-injured"></i>
                  <span>Appointment</span>
                </a>
              </li>

              <li ref="tab5" @click="changesidebar('tab5')">
                <a class="nav-link" href="/app/modules/Von/collaboration-record">
                  <i class="fal fa-user-injured"></i>
                  <span>Collaboration Record</span>
                </a>
              </li>
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
  name: "VonSidebar",
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
    };
  },
  mounted() {
    document.body.classList.add("sb-nav-fixed");
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    if (this.userdetails) {
      if (this.userdetails.user.role == "Von") {
      } else {
        this.$router.push("/");
      }
    } else {
      this.$router.push("/");
    }
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
    }
  },
  methods: {
    changesidebar: function (val) {
      this.$refs.tab1.classList.remove("active");
      this.$refs.tab2.classList.remove("active");
      this.$refs.tab3.classList.remove("active");
      this.$refs.tab4.classList.remove("active");
      this.$refs.tab5.classList.remove("active");
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
      }
    },
  },
};
</script>
