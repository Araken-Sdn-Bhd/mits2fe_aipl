<template>
  <div class="card mb-4">
    <div class="card-header bg-transparent">
      <h4>Screen and Module Management</h4>
      <!-- <a href="#"><i class="far fa-edit"></i></a> -->
    </div>
    <div class="card-body">
      <nav>
        <div class="nav sub-tab" id="nav-tab" role="tablist">
          <a
            class="nav-link active"
            data-bs-toggle="tab"
            href="#nav-Module"
            role="tab"
            aria-controls="nav-Module"
            aria-selected="true"
            ><i class="far fa-user-lock"></i> Setting 1: Module</a
          >
          <a
            class="nav-link"
            id="nav-profile-tab3"
            data-bs-toggle="tab"
            href="#nav-Sub-Module"
            role="tab"
            aria-controls="nav-Sub-Module"
            aria-selected="false"
            ><i class="far fa-ban"></i> Setting 2: Sub Module</a
          >
          <a
            class="nav-link"
            id="nav-contact-tab3"
            data-bs-toggle="tab"
            href="#nav-Screen-Page"
            role="tab"
            aria-controls="nav-Screen-Page"
            aria-selected="false"
            ><i class="far fa-clock"></i> Setting 3: Screen Page</a
          >
        </div>
      </nav>

      <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-Module" role="tabpanel">
          <Module1 />
        </div>

        <div class="tab-pane fade" id="nav-Sub-Module" role="tabpanel">
          <Module2 />
        </div>

        <div class="tab-pane fade" id="nav-Screen-Page" role="tabpanel">
          <Screenpage />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Module1 from "./Module1.vue";
import Module2 from "./Module2.vue";
import Screenpage from "./screenpage.vue";
export default {
  components: { Module1, Module2, Screenpage },
  name: "screenmanagement",
  setup() {},
  
};
</script>