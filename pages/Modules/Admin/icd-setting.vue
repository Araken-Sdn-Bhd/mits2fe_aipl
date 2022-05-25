<template>
  <div id="layoutSidenav">
    <Adminsidebar />
    <div id="layoutSidenav_content">
      <AdminHeader />
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
                  <IcdType />
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                <Icdcategory/>
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-contact"
                  role="tabpanel"
                  aria-labelledby="nav-contact-tab"
                >
                <Icdcode/>
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
import Adminsidebar from "../../../components/Admin/Adminsidebar.vue";
import AdminHeader from "../../../components/Admin/Admin_ToHeader.vue";
import IcdType from "../../../components/Admin/icd-type.vue";
import Icdcode from '../../../components/Admin/icdcode.vue';
import Icdcategory from '../../../components/Admin/icd_category.vue';
export default {
  components: { Adminsidebar, AdminHeader, IcdType, Icdcategory, Icdcode },
  name: "icd-setting",
  setup() {},
};
</script>