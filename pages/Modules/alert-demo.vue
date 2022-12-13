<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main id="reslt" ref="reslt">
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>INTERNAL REFERRAL</h1>
            <!-- <a href="#"><i class="fal fa-plus"></i> Add</a> -->
          </div>
          <!-- INFO: Button sendiri define nak yang mana , jgn copy ni -->
          <div class="card mb-4">
            <div class="card-body">
              <div class="ml-auto btn-boxs">
                <button type="submit" class="btn btn-success btn-text" @click="onError">
                  <i class=""></i> Error
                </button>
                <button type="submit" class="btn btn-success btn-text" @click="onSaveAsDraft">
                  <i class=""></i> Save As Draft
                </button>
                <button type="submit" class="btn btn-green btn-text" @click="onSave">
                  <i class=""></i> Save
                </button>
                <button type="submit" class="btn btn-success btn-text" @click="onSubmit">
                  <i class="fa fa-paper-plane"></i> Submit
                </button>
              </div>
              <div>
                <a href="https://sweetalert2.github.io/">Link To Documentation</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import CommonHeader from "../../components/CommonHeader.vue";
import CommonSidebar from "../../components/CommonSidebar.vue";
export default {
  components: { CommonSidebar, CommonHeader },
  name: "alert-demo",
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));

  },
  data() {
    return {
      userdetails: null,
      patientdetails: null,
      errorList: [],
      servicelist: [],
      outcomelist: [],
      comlexcitylist: [],
      codelist: [],
      icdcatcodelist: [],
      diagonisislist: [],
      locationlist: [],
      Id: 0,
      diagnosis: "",
      reason_for_referral: "",
      summary: "",
      management: "",
      medication: "",
      name: "",
      designation: "",
      hospital: "",
      location_services: 0,
      type_diagnosis_id: 0,
      category_services: "",
      code_id: 0,
      sub_code_id: 0,
      complexity_services: 0,
      outcome: 0,
      medication_des: "",
      patient_mrn_id: "",
      services_id: 0,
      serviceid: 0,
      validate: true,
      assistancelist: [],
      externallist: [],
      pid: 0,
      type: "",
      error: "Data is not complete"
    };
  },
  methods: {
    async onSaveAsDraft() {
      this.$swal.fire({
        title: 'Do you want to save as draft?',
        showCancelButton: true,
        confirmButtonText: 'Save',
      }).then(async(result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.$swal.fire('Succesfully save as draft!', '', 'success')
        } else if (result.isDismissed) {
          this.$swal.fire('Changes are not saved', '', 'info')
        }
      })
    },
    // submit with custom class modal
    async onSubmit() {
      const swalWithBootstrapButtons = this.$swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      this.$swal.fire({
        title: 'Are you sure to submit this?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, submit it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }
      ).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Submitted!',
            'Your for has been submitted.',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your data is not submitted :)',
            'error'
          )
        }
      })
    },
    // error example with what type of error modal
    async onError() {
      this.$swal.fire({
        icon: 'error',
        title: 'Oops... Something Went Wrong!',
        text: 'the error is: ' + this.error,
      })
    },
    // basic save modal
    async onSave() {
      this.$swal.fire(
        'Successfully Submitted.',
        'Data is inserted.',
        'success',
      )
    },
    // simple modal with two condition
    async download() {
      this.$swal.fire({
        title: 'Do you want to save the changes?',
        showCancelButton: true,
        confirmButtonText: 'Save',
      }).then(async(result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.$swal.fire('Saved!', '', 'success')
        } else if (result.isDismissed) {
          this.$swal.fire('Changes are not saved', '', 'info')
        }
      })
    },
    GoBack() {
      this.$router.push({
        path: "/modules/Intervention/patient-summary",
        query: { id: this.Id },
      });
    },
  },
};
</script>
<style scoped>
.hide {
  display: none;
}
</style>
