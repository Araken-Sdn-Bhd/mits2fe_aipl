<template>
  <div id="layoutSidenav">
    <VonSidebar />
    <div id="layoutSidenav_content">
      <VonHeader />
      <main>
        <Loader v-if="loader" />
        <div class="container-fluid px-4">
          <div class="card mb-4 mt-3">
            <div class="card-header">
              <h4>Volunteer, Outreach, And Networking Application Form</h4>
              <a href="#" class="visibility-h"
                ><i class="far fa-user-edit"></i
              ></a>
            </div>
            <div class="card-body mt-3">
              <p>
                MENTARI encourages the participation of any individual, group,
                or organization (government or private) to enhance service
                delivery related to mental health. the information provided
                through this form will be kept confidential and will help us
                determine the most satisfying volunteer or networking
                opportunity for you.
              </p>

              <div class="row">
                <div class="col-sm-4">
                  <div class="mb-3">
                    <label for="" class="form-label">Application Form</label>
                    <select class="form-select select-others" aria-label="">
                      <option value="0">Select Application Form</option>
                      <option value="individual">Individual</option>
                      <option value="group">Group</option>
                      <option value="organization">Organization</option>
                    </select>
                  </div>
                </div>
              </div>

              <Individual />

              <!-- individual -->

              <Group />
              <!-- group -->

              <Organization />
              <!-- Organization -->
            </div>
          </div>
        </div>
      </main>
      <von-footer></von-footer>
    </div>
  </div>
</template>
<script>
import Group from "../../../components/Von/Group.vue";
import Individual from "../../../components/Von/Individual.vue";
import Organization from "../../../components/Von/Organization.vue";
import VonFooter from "../../../components/Von/VonFooter.vue";
import VonHeader from "../../../components/Von/VonHeader.vue";
import VonSidebar from "../../../components/Von/VonSidebar.vue";
export default {
  components: {
    VonSidebar,
    VonHeader,
    VonFooter,
    Individual,
    Group,
    Organization,
  },
  name: "von-management",
  data() {
    return {
      userdetails: null,
      errors: [],
      loader: false,
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
  },
};
</script>

<style scoped>
.hide {
  display: none;
}
</style>