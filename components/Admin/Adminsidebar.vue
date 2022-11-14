<template>
  <div id="layoutSidenav">
    <div id="layoutSidenav_nav">
      <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
        <div class="sb-sidenav-menu scrool">
          <div class="nav">
            <!-- <a class="navbar-brand" href="#">
              <img src="~/assets/images/mentari.png" />
            </a> -->
            <ul>
              <li class="sub-menu">
                <a
                  class="nav-link"
                  href="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#dashboard"
                  aria-expanded="true"
                  aria-controls="dashboard"
                >
                  <i class="far fa-home-alt"></i>
                  Dashboard
                </a>
                <ul
                  class="collapse"
                  id="dashboard"
                  aria-labelledby="headingOne"
                  data-bs-parent="#sidenavAccordion"
                >
                  <li>
                    <a
                      class="nav-link"
                      href="/app/modules/Admin/admin-dashboard"
                      id="Mentari Staff"
                    >
                      <i class="far fa-users"></i>
                      Mentari Staff
                    </a>
                  </li>
                  <li>
                    <a class="nav-link" href="/app/modules/Admin/admin-dashboard">
                      <i class="far fa-user-friends"></i>
                      Admin & Specialist in Charge
                    </a>
                  </li>
                  <li>
                    <a class="nav-link" href="/app/modules/Admin/admin-dashboard">
                      <i class="far fa-users-crown"></i>
                      All High-Level Management
                    </a>
                  </li>
                </ul>
              </li>
              <!-- sub-menuc -->

              <li class="sub-menu">
                <a
                  class="nav-link collapsed"
                  href="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#system-setting"
                  aria-expanded="true"
                  aria-controls="system-setting"
                >
                  <i class="far fa-cog"></i>
                  System Setting
                </a>
                <ul
                  class="collapse"
                  id="system-setting"
                  aria-labelledby="headingOne"
                  data-bs-parent="#sidenavAccordion"
                >
                  <li>
                    <a class="nav-link" href="/app/modules/Admin/login-security">
                      <i class="far fa-shield-alt"></i>
                      Login & Security
                    </a>
                  </li>
                  <li>
                    <a class="nav-link" href="/app/modules/Admin/password">
                      <i class="far fa-key"></i>
                      Password
                    </a>
                  </li>
                  <li>
                    <a class="nav-link" href="/app/modules/Admin/access-control">
                      <i class="far fa-laptop"></i>
                      Access Control
                    </a>
                  </li>
                  <li>
                    <a class="nav-link" href="/app/modules/Admin/email-setting">
                      <i class="far fa-envelope-open-text"></i>
                      Email Setting
                    </a>
                  </li>
                  <li>
                    <a
                      class="nav-link"
                      href="/app/modules/Admin/address-management"
                    >
                      <i class="far fa-map-marker-alt"></i>
                      Address Management
                    </a>
                  </li>
                  <li>
                    <a
                      class="nav-link"
                      href="/app/modules/Admin/calendar-management"
                    >
                      <i class="far fa-calendar-alt"></i>
                      Calendar Management
                    </a>
                  </li>

                  <li>
                    <a
                      class="nav-link"
                      href="/app/modules/Admin/announcement-management"
                    >
                      <i class="far fa-bullhorn"></i>
                      Announcement Management
                    </a>
                  </li>
                  <li>
                    <a
                      class="nav-link"
                      href="/app/modules/Admin/list-of-user-matrix"
                    >
                      <i class="far fa-sliders-h"></i>
                      List of user matrix
                    </a>
                  </li>
                </ul>
              </li>
              <!-- sub-menuc -->

              <li class="sub-menu">
                <a
                  class="nav-link collapsed"
                  href="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#general-setting"
                  aria-expanded="true"
                  aria-controls="general-setting"
                >
                  <i class="far fa-cog"></i>
                  General Setting Master
                </a>
                <ul
                  class="collapse"
                  id="general-setting"
                  aria-labelledby="headingOne"
                  data-bs-parent="#sidenavAccordion"
                >
                  <li>
                    <a class="nav-link" href="/app/modules/Admin/salutation">
                      <i class="far fa-adjust"></i>
                      Salutation
                    </a>
                  </li>
                  <li>
                    <a class="nav-link" href="/app/modules/Admin/gender">
                      <i class="fas fa-venus-mars"></i>
                      Gender
                    </a>
                  </li>
                  <li>
                    <a class="nav-link" href="/app/modules/Admin/race">
                      <i class="far fa-adjust"></i>
                      Race
                    </a>
                  </li>

                  <li>
                    <a class="nav-link" href="/app/modules/Admin/religion">
                      <i class="far fa-praying-hands"></i>
                      Religion
                    </a>
                  </li>

                  <li>
                    <a class="nav-link" href="/app/modules/Admin/occupation-status">
                      <i class="far fa-user-tie"></i>
                      Occupation Status
                    </a>
                  </li>
                  <li>
                    <a
                      class="nav-link"
                      href="/app/modules/Admin/fee-exemption-status"
                    >
                      <i class="far fa-sack-dollar"></i>
                      Fee Exemption Status
                    </a>
                  </li>

                  <li>
                    <a class="nav-link" href="/app/modules/Admin/marital-status">
                      <i class="far fa-rings-wedding"></i>
                      Marital Status
                    </a>
                  </li>

                  <li>
                    <a class="nav-link" href="/app/modules/Admin/accommodation">
                      <i class="far fa-bed"></i>
                      Accommodation
                    </a>
                  </li>
                  <li>
                    <a class="nav-link" href="/app/modules/Admin/education-level">
                      <i class="far fa-user-graduate"></i>
                      Education Level
                    </a>
                  </li>
                  <li>
                    <a class="nav-link" href="/app/modules/Admin/relationship">
                      <i class="far fa-heart"></i>
                      Relationship
                    </a>
                  </li>

                  <li>
                    <a
                      class="nav-link"
                      href="/app/modules/Admin/category-of-service"
                    >
                      <i class="far fa-layer-group"></i>
                      Category Of Service
                    </a>
                  </li>

                  <li>
                    <a
                      class="nav-link"
                      href="/app/modules/Admin/complexity-of-service"
                    >
                      <i class="far fa-layer-group"></i>
                      Complexity of Service
                    </a>
                  </li>
                  <li>
                    <a class="nav-link" href="/app/modules/Admin/outcome">
                      <i class="far fa-layer-group"></i>
                      Outcome
                    </a>
                  </li>

                  <li>
                    <a class="nav-link" href="/app/modules/Admin/patient-category">
                      <i class="far fa-user-injured"></i>
                      Patient Category
                    </a>
                  </li>

                  <li>
                    <a class="nav-link" href="/app/modules/Admin/type-of-visit">
                      <i class="far fa-layer-group"></i>
                      Type of Visit
                    </a>
                  </li>

                  <li>
                    <a class="nav-link" href="/app/modules/Admin/range-of-age">
                      <i class="far fa-male"></i>
                      Range of Age
                    </a>
                  </li>

                  <li>
                    <a
                      class="nav-link"
                      href="/app/modules/Admin/household-income-status"
                    >
                      <i class="far fa-badge-dollar"></i>
                      Household Income Status
                    </a>
                  </li>

                  <li>
                    <a class="nav-link" href="/app/modules/Admin/type-of-substance">
                      <i class="far fa-layer-group"></i>
                      Type of Substance
                    </a>
                  </li>

                  <li>
                    <a
                      class="nav-link"
                      href="/app/modules/Admin/stressful-life-events"
                    >
                      <i class="far fa-calendar-day"></i>
                      Stressful Life Events
                    </a>
                  </li>

                  <li>
                    <a
                      class="nav-link"
                      href="/app/modules/Admin/place-of-occurrence"
                    >
                      <i class="far fa-location"></i>
                      Place of Occurrence
                    </a>
                  </li>

                  <li>
                    <a
                      class="nav-link"
                      href="/app/modules/Admin/overdose-poisoning"
                    >
                      <i class="far fa-capsules"></i>
                      Overdose / Poisoning
                    </a>
                  </li>

                  <li>
                    <a
                      class="nav-link"
                      href="/app/modules/Admin/referral-or-contact-point"
                    >
                      <i class="far fa-bullseye-pointer"></i>
                      Referral or Contact Point
                    </a>
                  </li>

                  <li>
                    <a class="nav-link" href="/app/modules/Admin/mode-of-arrival">
                      <i class="far fa-dot-circle"></i>
                      Mode of Arrival
                    </a>
                  </li>
                  <li>
                    <a class="nav-link" href="/app/modules/Admin/designation">
                      <i class="far fa-dot-circle"></i>
                      Designation
                    </a>
                  </li>
                  <li>
                    <a class="nav-link" href="/app/modules/Admin/citizenship">
                      <i class="far fa-dot-circle"></i>
                      Citizenship
                    </a>
                  </li>
                  <li>
                    <a class="nav-link" href="/app/modules/Admin/type-of-nric">
                      <i class="far fa-dot-circle"></i>
                      Type-Of-NRIC
                    </a>
                  </li>
                  <li>
                    <a class="nav-link" href="/app/modules/Admin/type-of-referral">
                      <i class="far fa-dot-circle"></i>
                      Type of Referral
                    </a>
                  </li>
                  <li>
                    <a class="nav-link" href="/app/modules/Admin/occupation-sector">
                      <i class="far fa-dot-circle"></i>
                      Occupation-Sector
                    </a>
                  </li>
                  <li>
                    <a
                      class="nav-link"
                      href="/app/modules/Admin/location-of-services"
                    >
                      <i class="far fa-dot-circle"></i>
                      Location of Services
                    </a>
                  </li>
                  <li>
                    <a
                      class="nav-link"
                      href="/app/modules/Admin/assistance-or-supervision"
                    >
                      <i class="far fa-dot-circle"></i>
                      Assistance or Supervision
                    </a>
                  </li>
                  <li>
                    <a class="nav-link" href="/app/modules/Admin/external">
                      <i class="far fa-dot-circle"></i>
                      External
                    </a>
                  </li>
                  <li>
                    <a
                      class="nav-link"
                      href="/app/modules/Admin/current-interventionl"
                    >
                      <i class="far fa-dot-circle"></i>
                      Current Intervention
                    </a>
                  </li>
                  <li>
                    <a
                      class="nav-link"
                      href="/app/modules/Admin/compliance-to-treatment"
                    >
                      <i class="far fa-dot-circle"></i>
                      Compliance To Treatment
                    </a>
                  </li>
                  <li>
                    <a
                      class="nav-link"
                      href="/app/modules/Admin/medication-supervised-by"
                    >
                      <i class="far fa-dot-circle"></i>
                      Medication Supervised By
                    </a>
                  </li>
                  <li>
                    <a class="nav-link" href="/app/modules/Admin/employment-status">
                      <i class="far fa-dot-circle"></i>
                      Employment Status
                    </a>
                  </li>
                  <li>
                    <a
                      class="nav-link"
                      href="/app/modules/Admin/type-of-activities"
                    >
                      <i class="far fa-dot-circle"></i>
                      Type of Activities
                    </a>
                  </li>
                </ul>
              </li>
              <!-- sub-menuc -->

              <li>
                <a href="/app/modules/Admin/icd-setting" class="nav-link">
                  <i class="far fa-cog"></i>
                  ICD Setting
                </a>
              </li>

              <li>
                <a href="/app/modules/Admin/services-setting" class="nav-link">
                  <i class="far fa-cog"></i>
                  Services Setting
                </a>
              </li>

              <li>
                <a href="/app/modules/Admin/etp-setting" class="nav-link">
                  <i class="far fa-sliders-h"></i>
                  ETP Setting
                </a>
              </li>

              <li>
                <a href="/app/modules/Admin/club-setting" class="nav-link">
                  <i class="far fa-cog"></i>
                  Club Setting
                </a>
              </li>

              <li>
                <a href="/app/modules/Admin/staff-management" class="nav-link">
                  <i class="far fa-users"></i>
                  Staff Manag...
                </a>
              </li>

              <li class="">
                <a href="/app/modules/Admin/occasion-of-service" class="nav-link">
                  <i class="far fa-gift"></i>
                  Occasion Of...
                </a>
              </li>

              <li class="divider">Imported Link</li>
              <div v-show="userdetails">
                <li>
                  <a href="/app/modules/Patient/patient-list" class="nav-link">
                    <i class="far fa-home-alt"></i>
                    Patient Manag...
                  </a>
                </li>
                <li>
                  <a href="/app/modules/Intervention/patient-list" class="nav-link">
                    <i class="far fa-home-alt"></i>
                    Intervention Manag...
                  </a>
                </li>
                <li>
                  <a href="/app/modules/Report/sharp" class="nav-link">
                    <i class="far fa-home-alt"></i>
                    Report Manag...
                  </a>
                </li>
                <li>
                  <a href="/app/modules/Shharp/patients-list" class="nav-link">
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
