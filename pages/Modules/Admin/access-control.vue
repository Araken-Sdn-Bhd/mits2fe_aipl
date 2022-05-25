<template>
  <div id="layoutSidenav">
    <Adminsidebar />
    <div id="layoutSidenav_content">
      <AdminHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>System Setting</h1>
            <!-- <a href="#"><i class="fal fa-plus"></i> Add</a> -->
          </div>
          <div class="row">
            <div class="card mb-4">
              <div class="card-header icon-title">
                <a href="#"><i class="far fa-shield-alt"></i></a>
                <h4>Screen Management & Access Control</h4>
              </div>
              <div class="card-body">
                <nav>
                  <div class="nav nav-tab" id="nav-tab" role="tablist">
                    <a
                      class="nav-link active"
                      data-bs-toggle="tab"
                      href="#nav-home"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                      ><i class="far fa-hospital-user"></i>Hospital, Branch &
                      Team</a
                    >
                    <a
                      class="nav-link"
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      href="#nav-profile"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                      ><i class="far fa-laptop-code"></i> Screen Management</a
                    >
                    <a
                      class="nav-link"
                      id="nav-contact-tab"
                      data-bs-toggle="tab"
                      href="#nav-contact"
                      role="tab"
                      aria-controls="nav-contact"
                      aria-selected="false"
                      ><i class="far fa-user"></i> Roles & Matrix</a
                    >
                  </div>
                </nav>
              </div>
            </div>

            <div class="tab-content" id="nav-tabContent">
              <div
                class="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
              >
                <!-- 01-tab -->
                <Hospitalbranchteam />
              </div>

              <div class="tab-pane fade" id="nav-profile" role="tabpanel">
                <!-- 02-tab -->
                <Screenmanagement />
              </div>

              <div class="tab-pane fade" id="nav-contact" role="tabpanel">
                <!-- 03-tab -->
                <Rolesmatrix />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import Adminsidebar from "../../../components/Admin/Adminsidebar.vue";
import AdminHeader from "../../../components/Admin/Admin_ToHeader.vue";
import Hospitalbranchteam from "../../../components/Admin/hospitalbranchteam.vue";
import Rolesmatrix from "../../../components/Admin/rolesmatrix.vue";
import Screenmanagement from "../../../components/Admin/screenmanagement.vue";
export default {
  components: {
    Adminsidebar,
    AdminHeader,
    Rolesmatrix,
    Hospitalbranchteam,
    Screenmanagement,
  },
  name: "access-control",
};
</script>