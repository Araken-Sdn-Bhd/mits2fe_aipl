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
                <a href="#"><i class="fa fa-shield-alt"></i></a>
                <h4>Login & Security</h4>
              </div>
              <div class="card-body">
                <nav>
                  <ul class="nav nav-tab" id="nav-tab" role="tablist">
                    <li class="nav-item"><a
                      class="nav-link active"
                      data-bs-toggle="tab"
                      href="#nav-home"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                      ><i class="fa fa-user-lock"></i> Login Attempt</a
                    ></li>
                    <li class="nav-item"><a
                      class="nav-link"
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      href="#nav-profile"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                      ><i class="fa fa-ban"></i> System Block Duration</a
                    ></li>
                    <li class="nav-item"><a
                      class="nav-link"
                      id="nav-contact-tab"
                      data-bs-toggle="tab"
                      href="#nav-contact"
                      role="tab"
                      aria-controls="nav-contact"
                      aria-selected="false"
                      ><i class="fa fa-clock"></i> Idle Session Timeout</a
                    ></li>
                  </ul>
                </nav>
              </div>
            </div>

            <div class="tab-content border-0" id="nav-tabContent">
              <div
                class="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
              >
               <!-- 01-tab -->
               <Loginattempt/>
              </div>

              <div class="tab-pane fade" id="nav-profile" role="tabpanel">
                <!-- 02-tab -->
                   <Systemblockduration/>
              </div>


              <div class="tab-pane fade" id="nav-contact" role="tabpanel">
                 <!-- 03-tab -->
                     <Idletimeoutsession/>
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
import Idletimeoutsession from '../../../components/Admin/Idletimeoutsession.vue';
import Loginattempt from '../../../components/Admin/loginattempt.vue';
import Systemblockduration from '../../../components/Admin/systemblockduration.vue';
export default {
  components: { CommonHeader, CommonSidebar, Loginattempt, Systemblockduration, Idletimeoutsession },
  name: "login-security",
};
</script>
