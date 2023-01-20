<template>
<div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
        <CommonHeader />
        <main>
            <main>
                <div class="container-fluid px-4">
                    <div class="page-title">
                        <h1>Staff Management</h1>
                    </div>
                    <div class="card mb-4">
                        <div class="card-header">
                            <h4>Transfer Mentari Staff</h4>
                            <div class="icon-set">
                                <a @click="gotoedit"><i class="fa fa-edit"></i></a>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6 mb-4">
                                    <label for="formFile" class="form-label">Document (If Any)</label>
                                    <input class="form-control" type="file" id="formFile" style="line-height: 32px" @change="selectFile" />
                                </div>
                            </div>
                            <!-- close-row -->

                            <div class="row">
                                <div class="col-md-6 mb-4">
                                    <label for="" class="form-label">New Mentari Branch<small style="color:red">*</small></label>
                                    <select v-model="branchId" class="form-select" aria-label="Default select example">
                                        <option v-for="brnch in list" v-bind:key="brnch.id" v-bind:value="brnch.id">
                                            {{ brnch.hospital_branch_name }}
                                        </option>
                                    </select>
                                </div>

                                <div class="col-md-3 mb-4">
                                    <label for="" class="form-label">Start Date<small style="color:red">*</small></label>
                                    <input type="date" class="form-control" v-model="startdate" />
                                </div>

                                <div class="col-md-3 mb-4">
                                    <label for="" class="form-label">End Date</label>
                                    <input type="date" class="form-control" v-model="enddate" />
                                </div>
                            </div>
                            <!-- close-row -->

                            <div class="form-foter mt-3">
                                <a href="/app/modules/Admin/staff-management" class="btn btn-primary btn-text"><i class="fa fa-arrow-alt-to-left"></i> Back</a>
                                <div class="btn-right">
                                    <button type="submit" @click="OnAddstaffTransfer()" class="btn btn-warning btn-green btn-text">
                                        <i class="fad fa-check"></i> Approve
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
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
    name: "mentari-staff-transfer",
    data() {
        return {
            Id: 0,
            branchId: 0,
            startdate: "",
            enddate: "",
            file: null,
            userdetails: null,
            list: [],
            errors: [],
        };
    },
    beforeMount() {
        this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
        let urlParams = new URLSearchParams(window.location.search);
        this.Id = urlParams.get("id");
        this.GetbranchList();
    },
    methods: {
        async GetbranchList() {
            const headers = {
                Authorization: "Bearer " + this.userdetails.access_token,
                Accept: "application/json",
                "Content-Type": "application/json",
            };
            const response = await this.$axios.get("hospital/branch-list", {
                headers,
            });
            if (response.data.code == 200 || response.data.code == "200") {
                this.list = response.data.list;
            } else {
                this.list = [];
            }
        },
        selectFile(event) {
            this.file = event.target.files[0];
        },
        async OnAddstaffTransfer(status) {
            this.$swal.fire({
                title: 'Are you sure you want to transfer this staff?',
                showCancelButton: true,
                confirmButtonText: 'Save',
            }).then(async (result) => {
                if (result.isConfirmed) {
            this.errors = [];
            try {
                if (!this.startdate) {
                    this.errors.push("Start Date is required.");
                }
                // if (!this.enddate) {
                //     this.errors.push("End Date is required.");
                // }
                if (this.branchId <= 0) {
                    this.errors.push("Branch  is required.");
                }
                if (this.startdate && this.branchId) {
                    const headers = {
                        Authorization: "Bearer " + this.userdetails.access_token,
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    };
                    let body = new FormData();
                    body.append("added_by", this.userdetails.user.id);
                    body.append("old_branch_id", "0");
                    body.append("new_branch_id", this.branchId);
                    body.append("start_date", this.startdate);
                    body.append("end_date", this.enddate);
                    body.append("document", this.file);
                    body.append("staff_id", this.Id);
                    const response = await this.$axios.post(
                        "staff-management/transferstaff",
                        body, {
                            headers,
                        }
                    );
                    if (response.data.code == 200 || response.data.code == "200") {
                        this.$router.push("/modules/Admin/staff-management");
                        this.$swal.fire(
                                    'Staff successfully transfered!',
                                );
                    } else {
                        this.$swal.fire({
                            icon: 'error',
                            title: 'Oops... Something Went Wrong!',
                            text: 'the error is: ' + JSON.stringify(response.data.message),
                            footer: ''
                        });
                    }
                }
            } catch (e) {
                this.loader = false;
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
      },
        async gotoedit() {
            this.$router.push({
                path: "/modules/Admin/edit-staff",
                query: {
                    id: this.Id
                },
            });
        },
    },
};
</script>
