<template>
  <div id="layoutSidenav" >
    <div id="layoutSidenav_nav">
      <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
        <div class="sb-sidenav-menu scrool">
          <div class="nav" >
            <ul>
              <li>
                <a class="nav-link" href="#">
                  <i class="far fa-home-alt"></i>
                  <span>Dashboard</span>
                </a>
              </li>
              <li class="active">
                <a class="nav-link" href="/Modules/Patient/patient-list">
                  <i class="fal fa-user-injured"></i>
                  <span>Patients</span>
                </a>
              </li>

              <li class="sub-menu">
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

              <li>
                <a class="nav-link" href="/Modules/Patient/attendance-record">
                  <i class="far fa-calendar-alt"></i>
                  <span>Appointment</span>
                </a>
              </li>

              <li>
                <a class="nav-link" href="/Modules/Patient/calendar-view">
                  <i class="far fa-calendar-star"></i>
                  <span>Calendar</span>
                </a>
              </li>

              <li>
                <a class="nav-link" href="/Modules/Patient/list-of-screening-patient">
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
  name: "Adminsidebar",
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
    ],
  },
  data() {
    return {
      userdetails: null,
    };
  },
  mounted() {
    document.body.classList.add("sb-nav-fixed");
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
  },
  methods: {
    changesidebar: function (event) {
      event.target.className += " active";
      // console.log(liid,index);
      alert(event.target.className);
    },
  },
};
</script>
