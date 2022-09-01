<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <Loader v-if="loader" />
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>System Setting</h1>
          </div>
            <div class="card mb-4">
              <div class="card-header icon-title">
                <a href="#"><i class="far fa-shield-alt"></i></a>
                <h4>Email Notification</h4>
              </div>
              <div class="card-body">
                <form
                  class="mt-3"
                  method="post"
                  @submit.prevent="insertemailsetting"
                >
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="mb-3">
                        <label class="form-label">Send Email From</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="info@mentari.com"
                          v-model="emailfrom"
                        />
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <div class="mb-3">
                        <label class="form-label">Outgoing SMTP Server</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="smtp.office365.com"
                          v-model="outgoingsmtpserver"
                        />
                      </div>
                    </div>
                  </div>
                  <!-- row -->

                  <div class="row">
                    <div class="col-sm-6">
                      <div class="mb-3">
                        <label class="form-label">Login User ID</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="info@mentari.com"
                          v-model="loginuserid"
                        />
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <div class="mb-3">
                        <label class="form-label">Login Password</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Only4mentariuse!"
                          v-model="loginpassword"
                        />
                      </div>
                    </div>
                  </div>
                  <!-- row -->

                  <div class="row">
                    <div class="col-sm-6">
                      <div class="mb-3">
                        <label class="form-label">Verify Password</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Only4mentariuse!"
                          v-model="verifypassword"
                        />
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <div class="mb-3">
                        <label class="form-label">SMTP Port Number</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="587"
                          v-model="smtpportno"
                        />
                      </div>
                    </div>
                  </div>
                  <!-- row -->

                  <div class="row">
                    <div class="col-sm-6">
                      <div class="mb-3">
                        <label class="form-label">Security</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="TCL"
                          v-model="security"
                        />
                      </div>
                    </div>
                  </div>
                  <p v-if="emailerror.length">
<ul>
        <li style="color:red"  v-for='err in emailerror' :key='err' >
          {{ err }}
        </li>
      </ul>
        </p>
                  <!-- row -->
                  <div class="d-flex">
                    <a href="/Modules/Admin/admin-dashboard" class="prev-1 btn btn-success mr-auto"><i class="fad fa-arrow-to-left"></i> Back</a>
                    <div class="ml-auto">
                        <a href="#" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#test-connection"><i class="far fa-exchange"></i> Test Connection</a>

                        <button type="submit" class="btn btn-warning btn-text"><i class="far fa-save"></i> Save</button>
                    </div>
                </div>
                </form>
              </div>
            </div>
          </div>
      </main>
    </div>
    <div
      class="modal fade"
      id="test-connection"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-sm test-connection">
        <div class="modal-content">
          <div class="modal-body">
            
            <p>Successful Connection</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary btn-ok" data-bs-dismiss="modal">Ok</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CommonHeader from "../../../components/CommonHeader.vue";
import CommonSidebar from "../../../components/CommonSidebar.vue";
export default {
  components: { CommonSidebar, CommonHeader },
  name: "email-setting",
  data() {
    return {
      emailfrom: "",
      outgoingsmtpserver: "",
      loginuserid: "",
      loginpassword: "",
      verifypassword: "",
      smtpportno: "",
      security: "",
      userdetail: null,
      emailerror: [],
      loader: false,
    };
  },
  mounted() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
  },
  methods: {
    async insertemailsetting() {
      this.emailerror = [];
      try {
        if (!this.emailfrom) {
          this.emailerror.push("Send Email From is required");
        }
        if (!this.outgoingsmtpserver) {
          this.emailerror.push("Outgoing SMTP Server is required");
        }
        if (!this.loginuserid) {
          this.emailerror.push("Login User ID is required");
        }
        if (!this.loginpassword) {
          this.emailerror.push("Login Password is required");
        }
        if (!this.verifypassword) {
          this.emailerror.push("Verify Password is required");
        }
        if (!this.smtpportno) {
          this.emailerror.push("SMTP Port Number is required");
        }
        if (!this.security) {
          this.emailerror.push("Security is required");
        } else {
          this.loader = true;
          // var variablevale =
          //   this.emailfrom +
          //   "," +
          //   this.outgoingsmtpserver +
          //   "," +
          //   this.loginuserid +
          //   "," +
          //   this.loginpassword +
          //   "," +
          //   this.verifypassword +
          //   "," +
          //   this.smtpportno +
          //   "," +
          //   this.security;
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          const response = await this.$axios.post(
            "/email-setting/add",
            {
              send_email_from: this.emailfrom,
              outgoing_smtp_server: this.outgoingsmtpserver,
              login_user_id: this.loginuserid,
              login_password: this.loginpassword,
              verify_password: this.verifypassword,
              smtp_port_number: this.smtpportno,
              security: this.security,
              // id:"1"
              // section: "email-setting",
              // variable_name: "send-email-from,outgoing-smtp-server,login-user-id,login-password,verify-password,smtp-port-number,security",
              // variable_value: variablevale,
              // status: "1,1,1,1,1,1,1",
            },
            { headers }
          );
          // console.log("my body", variablevale);
          console.log("my resp", response.data);
          if (response.data.code == 200) {
            this.loader = false;
            this.$nextTick(() => {
              $("#insertpopup").modal("show");
            });
          } else {
            this.loader = false;
            this.$nextTick(() => {
              $("#errorpopup").modal("show");
            });
          }
        }
      } catch (e) {
        console.log("my ERR", e);
        this.loader = false;
        this.$nextTick(() => {
          $("#errorpopup").modal("show");
        });
      }
    },
  },
};
</script>