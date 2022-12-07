<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
       <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>System Setting</h1>
            <!-- <a href="#"><i class="fal fa-plus"></i> Add</a> -->
          </div>
            <div class="card mb-4">
              <div class="card-header icon-title">
                <a href="#"><i class="fa fa-key"></i></a>
                <h4>PASSWORD SETUP</h4>
              </div>
              <div class="card-body">
                <nav>
                  <ul class="nav nav-tab" id="nav-tab" role="tablist">
                    <li class="nav-item">
                    <a
                      class="nav-link active"
                      data-bs-toggle="tab"
                      href="#nav-home"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                      ><i class="fa fa-font-case"></i>Password Characteristic</a
                    >
                    </li>
                    <li class="nav-item">
                    <a
                      class="nav-link"
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      href="#nav-profile"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                      ><i class="fa fa-lock"></i>Default Password</a
                    >
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div class="tab-content border-0 password-tab" id="nav-tabContent">
              <div
                class="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
              >
               <!-- 01-tab -->
           <Passwordcharectersticks/>
              </div>

              <div class="tab-pane fade" id="nav-profile" role="tabpanel">
                <!-- 02-tab -->
                    <Defaultpassword/>
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
import Defaultpassword from '../../../components/Admin/defaultpassword.vue';
import Passwordcharectersticks from '../../../components/Admin/passwordcharectersticks.vue';
export default {
  components: { CommonSidebar, CommonHeader, Passwordcharectersticks, Defaultpassword },
  name: "password",

};
</script>
