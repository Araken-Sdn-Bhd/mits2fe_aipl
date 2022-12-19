<template>
<div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
        <CommonHeader />
        <main>
            <div class="container-fluid px-4">
                <div class="page-title">
                    <h1>User Block</h1>
                </div>
                <div class="row">
                    <div class="card mb-4">
                        <br />
                        <div class="card-header icon-title">
                            <a href="#"><i class="fa fa-shield-alt"></i></a>
                            <h4>User Block List</h4>
                        </div>
                        <br />
                        <div class="card-body">

                            <table class="table table-striped data-table display nowrap" style="width: 100%">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Mentari</th>
                                        <th>Start Block</th>
                                        <th>Block Until</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(setting, index) in settinglist" :key="index">
                                        <td>{{index+1}}</td>
                                        <td>{{setting.section_value}}</td>
                                        <td>{{setting.section_order}}</td>
                                        <td>{{setting.section_value}}</td>
                                        <td>{{setting.section_order}}</td>
                                        <td>{{setting.section_value}}</td>
                                        <td class="td" :class="SidebarAccess!=1?'hide':''">
                                            <a class="edit" @click="editsetting(setting)"><em class="fa fa-lock"></em></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
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
export default {
    components: {
        CommonSidebar,
        CommonHeader
    },
    name: 'admin-userblock',
    method: {

    }

}
</script>
