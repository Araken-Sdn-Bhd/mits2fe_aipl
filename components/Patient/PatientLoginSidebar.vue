<template>
  <div id="layoutSidenav">
    <div id="layoutSidenav_nav">
      <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
        <div class="sb-sidenav-menu scrool">
          <div class="nav">
            <ul>
              <li ref="dashboard" class="" @click="changesidebar('dashboard')">
                <a class="nav-link" href="#">
                  <i class="far fa-home-alt"></i>
                  <span>Dashboard</span>
                </a>
              </li>
              <li ref="patient" class="" @click="changesidebar('patient')">
                <a class="nav-link" href="/Modules/Patient/patient-list">
                  <i class="fal fa-user-injured"></i>
                  <span>Patients</span>
                </a>
              </li>

              <li class="sub-menu" ref="test" @click="changesidebar('test')">
                <a
                  class="nav-link collapsed"
                  href="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#system-setting"
                  aria-expanded="true"
                  aria-controls="system-setting"
                >
                  <i class="far fa-file-alt"></i>
                  <span>Online Self Test</span>
                </a>
                <ul
                  class="collapse"
                  id="system-setting"
                  aria-labelledby="headingOne"
                  data-bs-parent="#sidenavAccordion"
                >
                  <li>
                    <a class="nav-link" href="/Modules/Patient/cbi">
                      <i class="far fa-file-contract"></i>
                      <span>CBI</span>
                    </a>
                  </li>
                  <li>
                    <a class="nav-link" href="/Modules/Patient/dass">
                      <i class="far fa-file-contract"></i>
                      <span>DASS</span>
                    </a>
                  </li>
                  <li>
                    <a class="nav-link" href="/Modules/Patient/phq-9">
                      <i class="far fa-file-contract"></i>
                      <span>PHQ 9</span>
                    </a>
                  </li>
                  <li>
                    <a class="nav-link" href="/Modules/Patient/whodas">
                      <i class="far fa-file-contract"></i>
                      <span>WHODAS</span>
                    </a>
                  </li>

                  <li>
                    <a
                      class="nav-link"
                      href="/Modules/Patient/list-of-appointment"
                    >
                      <i class="far fa-calendar-alt"></i>
                      <span>Appointment</span>
                    </a>
                  </li>
                </ul>
              </li>
              <!-- sub-menuc -->

              <li
                ref="appointment"
                class=""
                @click="changesidebar('appointment')"
              >
                <a class="nav-link" href="/Modules/Patient/attendance-record">
                  <i class="far fa-calendar-alt"></i>
                  <span>Appointment</span>
                </a>
              </li>

              <li ref="calender" class="" @click="changesidebar('calender')">
                <a class="nav-link" href="/Modules/Patient/calendar-view">
                  <i class="far fa-calendar-star"></i>
                  <span>Calendar</span>
                </a>
              </li>

              <li ref="screen" class="" @click="changesidebar('screen')">
                <a
                  class="nav-link"
                  href="/Modules/Patient/list-of-screening-patient"
                >
                  <i class="far fa-file-search"></i>
                  <span>Screening</span>
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

  <!-- </html> -->
</template>
<script>
export default {
  name: "Patientsidebar",
  head: {
    script: [
      {
        src: "/js/bootstrap.bundle.min.js",
        body: true,
        crossorigin: "anonymous",
      },
      {
        src: "/js/jquery-3.5.1.js",
        body: true,
        crossorigin: "anonymous",
      },
      {
        src: "/js/scripts.js",
        body: true,
        crossorigin: "anonymous",
      },
      {
        src: "/js/jquery.dataTables.min.js",
        body: true,
        crossorigin: "anonymous",
      },
      {
        src: "/js/dataTables.bootstrap5.min.js",
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
      if (this.userdetails.user.role == "Patient") {
      } else {
        this.$router.push("/");
      }
    } else {
      this.$router.push("/");
    }
    this.nav = localStorage.getItem("nav");
    if (this.nav == "patient") {
      this.$refs.patient.classList.add("active");
    } else if (this.nav == "dashboard") {
      this.$refs.dashboard.classList.add("active");
    } else if (this.nav == "appointment") {
      this.$refs.appointment.classList.add("active");
    } else if (this.nav == "calender") {
      this.$refs.calender.classList.add("active");
    } else if (this.nav == "screen") {
      this.$refs.screen.classList.add("active");
    }
     else if (this.nav == "test") {
        this.$refs.test.classList.add("active");
      }
  },
  methods: {
    changesidebar: function (val) {
      this.$refs.dashboard.classList.remove("active");
      this.$refs.patient.classList.remove("active");
      this.$refs.appointment.classList.remove("active");
      this.$refs.calender.classList.remove("active");
      this.$refs.screen.classList.remove("active");
      this.$refs.test.classList.remove("active");
      localStorage.setItem("nav", val);
      if (val == "patient") {
        this.$refs.patient.classList.add("active");
      } else if (val == "dashboard") {
        this.$refs.dashboard.classList.add("active");
      } else if (val == "appointment") {
        this.$refs.appointment.classList.add("active");
      } else if (val == "calender") {
        this.$refs.calender.classList.add("active");
      } else if (val == "screen") {
        this.$refs.screen.classList.add("active");
      }
      else if (val == "test") {
        this.$refs.test.classList.add("active");
      }
    },
  },
};
</script>
