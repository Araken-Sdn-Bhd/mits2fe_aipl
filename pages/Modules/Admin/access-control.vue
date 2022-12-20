<template>
<div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
        <CommonHeader />
        <main>
            <div class="container-fluid px-4">
                <div class="page-title">
                    <h1>System Setting</h1>
                </div>
                <div class="row">
                    <div class="card mb-4">
                        <div class="card-header icon-title">
                            <a href="#"><i class="fa fa-shield-alt"></i></a>
                            <h4>Screen Management & Access Control</h4>
                        </div>
                        <div class="card-body">
                            <nav>
                                <ul class="nav nav-tab" id="nav-tab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" data-bs-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true"><i class="fa fa-hospital-user"></i>Hospital, Branch &
                                            Team</a></li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false"><i class="fa fa-laptop-code"></i> Screen Management</a></li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false"><i class="fa fa-user"></i> Roles & Matrix</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade no-border show active" id="nav-home" role="tabpanel">
                            <!-- 01-tab -->
                            <Hospitalbranchteam />
                        </div>

                        <div class="tab-pane fade no-border" id="nav-profile" role="tabpanel">
                            <!-- 02-tab -->
                            <Screenmanagement />
                        </div>

                        <div class="tab-pane fade no-border" id="nav-contact" role="tabpanel">
                            <!-- 03-tab -->
                            <Rolesmatrix />
                        </div>
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
import Hospitalbranchteam from "../../../components/Admin/hospitalbranchteam.vue";
import Rolesmatrix from "../../../components/Admin/rolesmatrix.vue";
import Screenmanagement from "../../../components/Admin/screenmanagement.vue";
export default {
    components: {
        CommonHeader,
        CommonSidebar,
        Rolesmatrix,
        Hospitalbranchteam,
        Screenmanagement,
    },
    name: "access-control",
};
</script>
