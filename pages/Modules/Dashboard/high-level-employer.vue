<template>
  <div id="layoutSidenav">
    <CommonSidebarEmployer />
    <div id="layoutSidenav_content">
      <CommonHeaderEmployer />
      <main>
        <div class="container-fluid px-4 height-90">
          <div
            class="
              row
              align-items-center
              text-center
              justify-content-center
              height-90
              message-box
            "
          >
            <div class="col-sm-8">
              <div class="card">
                <p>
                  Thank you for your interest in offering a job for patients
                  under the care of MENTARI. Through this collaboration, we want
                  to empower the community to be involved in improving the
                  mental health care of the population. Under our Supported
                  Employment Program, we will work closely with you to sustain
                  employment and to manage issues together.
                </p>

                <p>
                  Please complete your company information for us to facilitate within your best interest.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import CommonHeaderEmployer from "../../../components/CommonHeaderEmployer.vue";
import CommonSidebarEmployer from "../../../components/CommonSidebarEmployer.vue";

export default {
  components: { CommonSidebarEmployer, CommonHeaderEmployer },
  name: "high-level-management",
  head: {
    script: [
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js",
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

  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
  },
  mounted() {
  },

  methods: {
 },
};
</script>