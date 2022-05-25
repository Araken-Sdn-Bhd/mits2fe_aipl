<template>
  <div id="layoutSidenav">
    <VonSidebar />
    <div id="layoutSidenav_content">
      <VonHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>Book Appointment</h1>
          </div>
          <div class="row">
            <div class="card mb-4">
              <div class="card-body">
                <form class="mt-3">
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="mb-3">
                        <label class="form-label">Name.</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter Name"
                        />
                      </div>
                    </div>
                  </div>
                  <!-- row -->

                  <div class="row">
                    <div class="col-sm-4">
                      <div class="mb-3">
                        <label class="form-label">Date</label>
                        <input type="date" class="form-control" value="" />
                      </div>
                    </div>

                    <div class="col-sm-4">
                      <div class="mb-3">
                        <label class="form-label">Time</label>
                        <input type="time" class="form-control" value="" />
                      </div>
                    </div>

                    <div class="col-sm-4">
                      <div class="mb-3">
                        <label class="form-label">Duration</label>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Select Duration</option>
                          <option value="">...</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <!-- row -->

                  <div class="row">
                    <div class="col-sm-6">
                      <div class="mb-3">
                        <label class="form-label">Appointment Type</label>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Select Appointment Type</option>
                          <option value="">Supported Employment</option>
                          <option value="">ETP</option>
                          <option value="">Job Club</option>
                          <option value="">Rehabilitation</option>
                          <option value="">Consultation</option>
                        </select>
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <div class="mb-3">
                        <label class="form-label">Assigned Interviewer</label>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Select Assigned Interviewer</option>
                          <option value="">New</option>
                          <option value="">Follow Up</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <!-- row -->

                  <div class="row">
                    <div class="col-sm-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >Areas Of On Involvement</label
                        >
                        <select
                          class="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>
                            Select Areas Of On Involvement
                          </option>
                          <option value="">Daycare</option>
                          <option value="">Outpatient</option>
                        </select>
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <div class="mb-3">
                        <label class="form-label">Type of Servies</label>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Select Type of Servies</option>
                          <option value="">...</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <!-- row -->

                  <div class="d-flex">
                    <div class="ml-auto">
                      <a href="#" class="btn btn-danger btn-text"
                        ><i class="fad fa-times"></i> Cancel</a
                      >
                      <a href="#" class="btn btn-success btn-text"
                        ><i class="fad fa-paper-plane"></i> Submit</a
                      >
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <von-footer></von-footer>
    </div>
  </div>
</template>
<script>
import VonFooter from "../../../components/Von/VonFooter.vue";
import VonHeader from "../../../components/Von/VonHeader.vue";
import VonSidebar from "../../../components/Von/VonSidebar.vue";
export default {
  components: { VonSidebar, VonHeader, VonFooter },
  name: "book-appointment",
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
  methods: {},
};
</script>

<style scoped>
.hide {
  display: none;
}
</style>