<template>
<div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
        <CommonHeader />
        <main>
            <loader v-if="loader" />
            <div class="container-fluid px-4">
                <div class="page-title">
                    <h1>CLUB SETTING</h1>
                </div>
                <div class="card mb-4">
                    <div class="card-body">
                        <div class="row">
                            <div class="card mb-4">
                                <div class="card-body">
                                    <div class="content-subtab border-top-left">
                                        <form class="g-3 mt-3" method="post" @submit.prevent="onAddclubDivition">
                                            <div class="row">
                                                <div class="col-md-6 mb-4">
                                                    <label for="" class="form-label">Club Name</label>
                                                    <select v-model="club_id" class="form-select" aria-label="Default select example">
                                                        <option value="0">Please Select</option>
                                                        <option v-for="et in clublist" v-bind:key="et.id" v-bind:value="et.id">
                                                            {{ et.club_name }}
                                                        </option>
                                                    </select>
                                                </div>

                                                <div class="col-lg-1 col-sm-2 mb-4">
                                                    <label class="form-label">Index</label>
                                                    <input type="text" class="form-control" placeholder="0" v-model="division_order" />
                                                </div>
                                                <div class="col-sm-3 mb-4">
                                                    <label for="" class="form-label">Status</label>
                                                    <select class="form-select" v-model="status">
                                                        <option value="1">Enable</option>
                                                        <option value="0">Disable</option>
                                                    </select>
                                                </div>

                                            </div>
                                            <!-- close-row -->
                                            <p v-if="errors.length">
                                                <ul>
                                                    <li style="color:red" v-for='err in errors' :key='err'>{{ err }}</li>
                                                </ul>
                                            </p>
                                            <div class="d-flex justify-content-center" id="hidebutton" ref="hidebutton">
                                                <button type="submit" class="btn btn-warning btn-text ml-auto" v-if="Id">
                                                    <i class="fa fa-save"></i> Save
                                                </button>
                                                <button type="submit" class="btn btn-warning btn-text" v-if="!Id">
                                                    <i class="fa fa-plus"></i> Add Parameter
                                                </button>
                                            </div>
                                        </form>
                                        <div class="table-title">
                                            <h3>List of ETP</h3>
                                        </div>
                                        <table class="table table-striped data-table1 display nowrap" style="width: 100%">
                                            <thead>
                                                <tr>
                                                    <th style="width:3%">No</th>

                                                    <th>Club Name</th>
                                                    <th>Index</th>
                                                    <th>Status</th>
                                                    <th style="width:3%">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(etp, index) in list" :key="index">
                                                    <td>{{index+1}}</td>
                                                    <td>{{etp.club.club_name}}</td>
                                                    <td>{{etp.division_order}}</td>
                                                    <td>
                                                        <p v-if="etp.status == 0" style="color:red">Disabled</p>
                                                        <p v-if="etp.status == 1">Enabled</p>
                                                    </td>
                                                    <td id="hidebutton" ref="hidebutton">
                                                        <a class="edit" @click="editdiv(etp)"><i class="fa fa-edit"></i></a>

                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <p v-show="!list.length" style=" padding: 0px;
                margin: 10px;
                color: red;
                display: flex;
                justify-content: center;">
                                            No Record Found
                                        </p>
                                        <br>
                                        <br>
                                        <div class="d-flex">
                                            <button @click="back" type="button" class="btn btn-primary btn-fill btn-md">
                                                <i class="fa fa-step-backward" /> &nbsp; Back
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            </div>
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
        CommonHeader,
        CommonSidebar,
    },
    name: "services-division-admin",
    setup() {},

    data() {
        return {
            Id: 0,
            club_id: 0,
            hospital_id: 0,
            branch_id: 0,
            division_order: 0,
            list: [],
            clublist: [],
            hospitallist: [],
            branchlist: [],
            errors: [],
            userdetails: null,
            SidebarAccess: null,
            status: 1,
            errors: [],
            loader: false,
        };
    },
    mounted() {
        this.GetList();
    },
    beforeMount() {
        this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
        this.SidebarAccess = JSON.parse(localStorage.getItem("SidebarAccess"));
        this.GetclubList();
    },
    methods: {
        back() {
            this.$router.go(-1);
        },
        async GetclubList() {
            const headers = {
                Authorization: "Bearer " + this.userdetails.access_token,
                Accept: "application/json",
                "Content-Type": "application/json",
            };
            const response = await this.$axios.get("club/activelist", {
                headers,
            });
            console.log("ress", response.data);
            if (response.data.code == 200 || response.data.code == "200") {
                this.clublist = response.data.list;
            } else {
                this.clublist = [];
            }
        },
        async GetList() {
            this.loader = true;
            const headers = {
                Authorization: "Bearer " + this.userdetails.access_token,
                Accept: "application/json",
                "Content-Type": "application/json",
            };
            const response = await this.$axios.post("club/division-list-branch", {
                branch_id: this.userdetails.branch.branch_id
            }, {
                headers,
            });
            if (response.data.code == 200 || response.data.code == "200") {
                this.loader = false;
                this.list = response.data.list;
            } else {
                this.loader = false;
                this.list = [];
            }
        },

        async editdiv(data) {
            this.loader = true;
            const headers = {
                Authorization: "Bearer " + this.userdetails.access_token,
                Accept: "application/json",
                "Content-Type": "application/json",
            };
            const response = await this.$axios.post(
                "club/get-division", {
                    division_id: data.id
                }, {
                    headers
                }
            );
            if (response.data.code == 200) {
                this.loader = false;
                this.club_id = response.data.list[0].club_id;
                this.division_order = response.data.list[0].division_order;
                this.status = response.data.list[0].status;
                this.Id = data.id;

            } else {
                this.loader = false;
                this.$swal.fire({
                    icon: 'error',
                    title: 'Oops... Something Went Wrong!',
                    text: 'the error is: ' + this.error,
                    footer: ''
                })
            }
        },

        async onAddclubDivition() {
            this.loader = true;
            this.errors = [];
            try {
                if (this.club_id <= 0) {
                    this.errors.push("Club Name is required.");
                }

                if (this.division_order <= 0) {
                    this.errors.push("Index is required.");
                } else {
                    const headers = {
                        Authorization: "Bearer " + this.userdetails.access_token,
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    };
                    if (this.Id <= 0) {
                        const response = await this.$axios.post(
                            "club/insertOrupdate-division", {
                                added_by: this.userdetails.user.id,
                                club_id: this.club_id,
                                hospital_id: this.userdetails.branch.hospital_id,
                                branch_id: this.userdetails.branch.branch_id,
                                division_order: this.division_order,
                            }, {
                                headers
                            }
                        );
                        if (response.data.code == 200 || response.data.code == "200") {
                            this.loader = false;
                            this.$swal.fire(
                                'Successfully Insert',
                            )
                            this.resetmodel();
                        } else {
                            this.loader = false;
                            this.$swal.fire({
                                icon: 'error',
                                title: 'Oops... Something Went Wrong!',
                                text: 'the error is: ' + this.error,
                                footer: ''
                            })
                        }
                    } else {
                        const response = await this.$axios.post(
                            "club/update-division", {
                                added_by: this.userdetails.user.id,
                                club_id: this.club_id,
                                hospital_id: this.userdetails.branch.hospital_id,
                                branch_id: this.userdetails.branch.branch_id,
                                division_order: this.division_order,
                                division_id: this.Id,
                                status: this.status,
                            }, {
                                headers
                            }
                        );
                        if (response.data.code == 200 || response.data.code == "200") {
                            this.loader = false;
                            this.$swal.fire(
                                'Successfully Update',
                            )
                            this.resetmodel();
                        } else {
                            this.loader = false;
                            this.$swal.fire({
                                icon: 'error',
                                title: 'Oops... Something Went Wrong!',
                                text: 'the error is: ' + this.error,
                                footer: ''
                            })
                        }
                    }
                }
            } catch (e) {
                this.errors.push = e;
                this.$swal.fire({
                    icon: 'error',
                    title: 'Oops... Something Went Wrong!',
                    text: 'the error is: ' + e,
                    footer: ''
                });
            }
        },
        async resetmodel() {
            this.Id = 0;
            this.club_id = 0;
            this.hospital_id = 0;
            this.branch_id = 0;
            this.division_order = 0;
            this.errors = [];
            this.GetList();
        },
    },
};
</script>
