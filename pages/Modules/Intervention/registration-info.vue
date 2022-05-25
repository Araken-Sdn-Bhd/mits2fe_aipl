<template>
  <div id="layoutSidenav">
    <InterventionHeader />
    <div id="layoutSidenav_content">
      <InterventionSidebar />
      <main>
        <div class="container-fluid px-4 height-100">
          <div
            class="
              row
              align-items-center
              text-center
              justify-content-center
              height-100
              message-box
            "
          >
            <div class="col-sm-6">
              <div class="card">
                <p>
                  Thank you for your interest in our Employment Partnership
                  Program (EPP) by MENTARI. Please complete the required
                  information below for us to facilitate within your best
                  interest.
                </p>
                <div class="d-flex justify-content-center">
                  <a
                    href="company-basic-information"
                    class="btn btn-success next-btn"
                    >Next
                    <i class="fad fa-arrow-to-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <intervention-footer></intervention-footer>
    </div>
  </div>
</template>
<script>
import InterventionHeader from "../../../components/Intervention/InterventionHeader.vue";
import InterventionSidebar from "../../../components/Intervention/InterventionSidebar.vue";
export default {
  components: { InterventionHeader, InterventionSidebar },
  name: "registration-info",

  data() {
    return {
      userdetails: null,
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
  },
};
</script>
