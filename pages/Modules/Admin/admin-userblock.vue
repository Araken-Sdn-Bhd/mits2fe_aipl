<template>
<div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
        <CommonHeader />
        <main>
            <Loader v-if="loader" />
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
                                    <tr v-for="(list, index) in userBlockList" :key="index">
                                        <td>{{index+1}}</td>
                                        <td>{{list.name}}</td>
                                        <td>{{list.email}}</td>
                                        <td>{{list.hospital_branch_name}}</td>
                                        <td>{{list.created_at}}</td>
                                        <td>{{list.block_untill}}</td>
                                        <td class="td">
                                            <a class="edit" title="Unblock User" @click="UnblockUser(list)"><i class="fa fa-lock"></i></a>
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
    data() {
        return {
            errorList: [],
            userBlockList: [],
            userdetails: null,
            loader: false,
            SidebarAccess: null,
        };
    },
    beforeMount() {
        this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
        this.SidebarAccess = JSON.parse(localStorage.getItem("SidebarAccess"));
    },
    mounted() {
        this.loader = true;
        this.getUserBlockList();
    },
    methods: {
        async getUserBlockList() {
            const headers = {
                Authorization: "Bearer " + this.userdetails.access_token,
                Accept: "application/json",
                "Content-Type": "application/json",
            };
            const axios = require("axios").default;
            axios
                .get(
                    `${this.$axios.defaults.baseURL}` +
                    "userBlock/get", {
                        headers
                    }
                )
                .then((resp) => {
                    this.userBlockList = resp.data.list;

                    $(document).ready(function () {
                        $(".data-table").DataTable({
                            searching: false,
                            bLengthChange: false,
                            bInfo: false,
                            // autoWidth: false,
                            // responsive: true,
                            scrollX: true,
                            language: {
                                paginate: {
                                    next: '<i class="fad fa-arrow-to-right"></i>', // or '→'
                                    previous: '<i class="fad fa-arrow-to-left"></i>', // or '←'
                                },
                            },
                        });
                    });

                    this.loader = false;
                })
                .catch ((err) => {
        this.loader = false;
        this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + err,
                  footer: ''
                });
                });
        },
        async UnblockUser(data) {
            this.$swal.fire({
                title: 'Do you want to unblock this user?',
                showCancelButton: true,
                confirmButtonText: 'Yes',
            }).then(async (result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    try {
                        this.loader = true;
                        const headers = {
                            Authorization: "Bearer " + this.userdetails.access_token,
                            Accept: "application/json",
                            "Content-Type": "application/json",
                        };
                        const response = await this.$axios.post(
                            "userBlock/update", {
                                id: data.id
                            }, {
                                headers
                            }
                        );
                        if (response.data.code == 200) {
                            this.loader = false;
                            this.$swal.fire('Succesfully unblock user', '', 'success')
                            this.getUserBlockList();
                        } else {
                            this.loader = false;
                            this.$swal.fire({
                                icon: 'error',
                                title: 'Oops... Something Went Wrong!',
                                text: 'the error is: ' + JSON.stringify(response.data.message),
                            })
                        }
                    } catch (e) {
                        this.$swal.fire({
                            icon: 'error',
                            title: 'Oops... Something Went Wrong!',
                            text: 'the error is: ' + e,
                        })
                    }
                } else if (result.isDismissed) {
                    this.$swal.fire('Changes are not saved', '', 'info')
                }
            })
        }
    }

}
</script>
