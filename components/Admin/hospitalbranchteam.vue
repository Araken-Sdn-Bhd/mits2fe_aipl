<template>
  <div class="card mb-4">
    <div class="card-header bg-transparent">
      <h4>Hospital, Branch & Team</h4>
      <!-- <a href="#"><i class="fa fa-edit"></i></a> -->
    </div>
    <div class="card-body">
      <nav>
        <ul class="nav sub-tab" id="nav-tab" role="tablist">
          <li class="nav-item">
            <a
              class="nav-link active"
              data-bs-toggle="tab"
              href="#nav-home1"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
              ><i class="fa fa-user-lock"></i> Setting 1: Hospital</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="nav-profile-tab3"
              data-bs-toggle="tab"
              href="#nav-profile2"
              role="tab"
              aria-controls="nav-profile2"
              aria-selected="false"
              ><i class="fa fa-ban"></i> Setting 2: Branch</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="nav-contact-tab3"
              data-bs-toggle="tab"
              href="#nav-contact3"
              role="tab"
              aria-controls="nav-contact3"
              aria-selected="false"
              ><i class="fa fa-clock"></i> Setting 3: Team</a
            >
          </li>
        </ul>
      </nav>

      <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-home1" role="tabpanel">
          <Hospital />
        </div>

        <div class="tab-pane fade" id="nav-profile2" role="tabpanel">
          <Branch />
        </div>

        <div class="tab-pane fade" id="nav-contact3" role="tabpanel">
          <Team />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Branch from "./branch.vue";
import Hospital from "./hospital.vue";
import Team from "./team.vue";
export default {
  components: { Hospital, Branch, Team },
  name: "hospitalbranchteam",
  setup() {},
};
</script>
