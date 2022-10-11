<template>
  <div id="layoutSidenav">
    <CommonSidebarEmployer/>
    <div id="layoutSidenav_content">
      <CommonHeaderEmployer />
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
                  Thank you for your interest in offering a job for patients
                  under the care of MENTARI. Through this collaboration, we want
                  to empower the community to be involved in improving the
                  mental health care of the population. Under our Supported
                  Employment Program, we will work closely with you to sustain
                  employment and to manage issues together.
                </p>
                <div class="d-flex justify-content-center">
                  <a
                    href="/Modules/Employer/list-of-job-offer"
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
import CommonSidebarEmployer from '../../../components/CommonSidebarEmployer.vue';
import CommonHeaderEmployer from '../../../components/CommonHeaderEmployer.vue';
export default {
  components: { CommonSidebarEmployer, CommonHeaderEmployer },
  name: "job-offer",

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