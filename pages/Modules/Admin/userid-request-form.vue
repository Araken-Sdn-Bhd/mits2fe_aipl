<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>USER ID REQUEST FORM</h1>
            <!-- <a href="#"><i class="fal fa-plus"></i> Add</a> -->
          </div>
          <div class="card mb-4">
            <div class="card-body" style="padding: 25px">
              <div class="row align-items-center form-header-box">
                <div class="col-sm-2">
                  <img src="~/assets/images/1.png" />
                </div>
                <div class="col-sm-8">
                  <h1>MINISTRY OF HEALTH <br />MENTARI IT SYSTEM (MITS2)</h1>
                </div>
                <div class="col-sm-2">
                  <img src="~/assets/images/2.png" />
                </div>
              </div>

              <h5 class="h5-title">USER ID REQUEST FORM</h5>

              <form class="mt-3">
                <div class="form-group-box">
                  <h4 class="form-sub-title">A. USER INFORMATION</h4>
                  <div class="form-group row">
                    <label for="staticEmail" class="col-sm-4 col-form-label"
                      >NAME</label
                    >
                    <div class="col-sm-8">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <!-- row -->
                  <div class="form-group row">
                    <label for="staticEmail" class="col-sm-4 col-form-label"
                      >NRIC NO
                    </label>
                    <div class="col-sm-8">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <!-- row -->
                  <div class="form-group row">
                    <label for="staticEmail" class="col-sm-4 col-form-label"
                      >DESIGNATION
                    </label>
                    <div class="col-sm-8">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <!-- row -->
                  <div class="form-group row">
                    <label for="staticEmail" class="col-sm-4 col-form-label"
                      >CONTACT NO.
                    </label>
                    <div class="col-sm-8">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <!-- row -->
                  <div class="form-group row">
                    <label for="staticEmail" class="col-sm-4 col-form-label"
                      >EMAIL ADDRESS
                    </label>
                    <div class="col-sm-8">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <!-- row -->
                  <div class="form-group row">
                    <label for="staticEmail" class="col-sm-4 col-form-label"
                      >MENTARI LOCATION
                    </label>
                    <div class="col-sm-8">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>
                <div class="form-group-box">
                  <h4 class="form-sub-title">B. HEAD OF DEPARTMENT</h4>
                  <div class="form-group row">
                    <label for="staticEmail" class="col-sm-4 col-form-label"
                      >NAME</label
                    >
                    <div class="col-sm-8">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <!-- row -->
                  <div class="form-group row">
                    <label for="staticEmail" class="col-sm-4 col-form-label"
                      >DESIGNATION/STAMP
                    </label>
                    <div class="col-sm-8">
                      <textarea class="form-control form-textarea"></textarea>
                    </div>
                  </div>
                  <!-- row -->
                  <div class="form-group row">
                    <label for="staticEmail" class="col-sm-4 col-form-label"
                      >DATE
                    </label>
                    <div class="col-sm-8">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <!-- row -->
                </div>
                <div class="form-group-box">
                  <h4 class="form-sub-title">C. USER ACKNOWLEDGEMENT</h4>
                  <p>
                    I HEREBY UNDERSTAND AND AGREE TO THE TERM SET FORTH IN
                    MENTARI IT SYSTEM (MITS2) GUIDELINE AND I SHALL NOT SHARE MY
                    USER ID. IF I WERE FOUND TO MISUSE THE USER ID, DISCIPLINARY
                    ACTION SHALL BE TAKEN ON ME.
                  </p>
                  <div class="form-group row">
                    <label for="staticEmail" class="col-sm-4 col-form-label"
                      >NAME:
                    </label>
                    <div class="col-sm-8">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <!-- row -->
                  <div class="form-group row">
                    <label for="staticEmail" class="col-sm-4 col-form-label"
                      >DESIGNATION/STAMP
                    </label>
                    <div class="col-sm-8">
                      <textarea class="form-control form-textarea"></textarea>
                    </div>
                  </div>
                  <!-- row -->
                  <div class="form-group row">
                    <label for="staticEmail" class="col-sm-4 col-form-label"
                      >DATE
                    </label>
                    <div class="col-sm-8">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <!-- row -->
                </div>
              
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import CommonHeader from '../../../components/CommonHeader.vue';
import CommonSidebar from '../../../components/CommonSidebar.vue';
export default {
  components: { CommonSidebar, CommonHeader },
  name: "userid-request-form",
  methods: {
    OnPrint() {
      var newstr = document.getElementsByClassName("reslt")[0].innerHTML;
      document.body.innerHTML = newstr;
      window.print();
      window.location.reload();
    },
  },
};
</script>
<style scoped>
h4.form-sub-title {
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 600;
  color: #000;
}

.form-group-box {
  margin-bottom: 40px;
}
.form-group-box .form-group{
    margin-bottom: 0px;
}
.form-group-box .form-control {
  border-radius: 0px;
  border-color: #000;
  margin-bottom: -1px;
}
.form-group-box .form-textarea {
  resize: none;
  min-height: 110px;
}

.form-group-box p {
  text-transform: none;
  font-size: 13px;
  font-weight: 500;
  margin: 20px 0;
}
.form-header-box {
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
}
.form-header-box h1 {
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.5px;
}
.form-header-box img {
  width: 100%;
}
.h5-title {
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  margin: 20px 0 40px;
  letter-spacing: 1px;
}
</style>