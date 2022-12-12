<template>
  <div id="layoutSidenav">
    <div id="layoutSidenav_nav">
      <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
        <div class="sb-sidenav-menu scrool">
          <div class="nav">
            <ul>
              <div v-for="(menu, index) in navlist" :key="index">
                <li class="sub-menu" v-if="menu.sub_module_id.length">
                  <a class="nav-link" data-bs-toggle="collapse" v-bind:data-bs-target="'#demo' + index"
                    aria-expanded="true">
                    <i v-bind:class="[menu.icon]"></i>
                    {{ menu.screen_name }}
                  </a>
                  <ul class="collapse" v-bind:id="['demo' + index]" aria-labelledby="headingOne"
                    data-bs-parent="#sidenavAccordion">
                    <li v-for="(submenu, ind) in menu.sub_module_id" :key="ind">
                      <a class="nav-link" v-bind:href="submenu.screen_route" @click="SidebarAccess(submenu)">
                        <i v-bind:class="[submenu.icon]"></i>
                        {{ submenu.screen_name }}
                      </a>
                    </li>
                  </ul>
                </li>
                <li v-if="!menu.sub_module_id.length">
                  <a v-bind:href="menu.screen_route" class="nav-link" @click="SidebarAccess(menu)">
                    <i v-bind:class="[menu.icon]"></i>
                    {{ menu.screen_name }}
                  </a>
                </li>
              </div>
              <!--Report Module-->
              <div v-for="menu in reportnavlist">
                <div v-if="menu.module_id == hasreportmodule">
                  <li class="sub-menu">
                    <a class="nav-link" data-bs-toggle="collapse" v-bind:data-bs-target="'#demo'" aria-expanded="true">
                      <i class="fa fa-file-chart-pie"></i>
                      {{ "Report" }}
                    </a>
                    <ul class="collapse" v-bind:id="['demo']" aria-labelledby="headingOne"
                      data-bs-parent="#sidenavAccordion">
                      <div v-for="(menu, index) in reportnavlist" :key="index">
                        <li class="sub-menu" v-if="menu.sub_module_id.length">
                          <a class="nav-link" data-bs-toggle="collapse" v-bind:data-bs-target="'#demo1' + index"
                            aria-expanded="true">
                            <i v-bind:class="[menu.icon]"></i>
                            {{ menu.screen_name }}
                          </a>
                          <ul class="collapse" v-bind:id="['demo1' + index]" aria-labelledby="headingOne">
                            <li v-for="(submenu, ind) in menu.sub_module_id" :key="ind">
                              <a class="nav-link" v-bind:href="submenu.screen_route" @click="SidebarAccess(submenu)">
                                <i v-bind:class="[submenu.icon]"></i>
                                {{ submenu.screen_name }}
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li v-if="!menu.sub_module_id.length">
                          <a v-bind:href="menu.screen_route" class="nav-link" @click="SidebarAccess(menu)">
                            <i v-bind:class="[menu.icon]"></i>
                            {{ menu.screen_name }}
                          </a>
                        </li>
                      </div>
                    </ul>
                  </li>
                </div>
              </div>
              <!--Report Module-->
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <div class="modal fade" id="insertpopup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-sm test-connection">
        <div class="modal-content">
          <div class="modal-body">
            <p>Successfully Created</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary btn-ok" data-bs-dismiss="modal">
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="updatepopup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-sm test-connection">
        <div class="modal-content">
          <div class="modal-body">
            <p>Successfully Updated</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary btn-ok" data-bs-dismiss="modal">
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="errorpopup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-sm test-connection">
        <div class="modal-content">
          <div class="modal-body">
            <p>Something went wrong!</p>
            <a>
              {{ message }}
            </a>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary btn-ok" data-bs-dismiss="modal">
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="deletepopup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-sm test-connection">
        <div class="modal-content">
          <div class="modal-body">
            <p>Succesfully Deleted</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary btn-ok" data-bs-dismiss="modal">
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- </html> -->
</template>
<script>
export default {
  name: "CommonSidebar",
  head: {
    script: [
      {
        src: "/app/js/bootstrap.bundle.min.js",
        body: true,
        crossorigin: "anonymous",
      },
      {
        src: "/app/js/scripts.js",
        body: true,
        crossorigin: "anonymous",
      },
      {
        src: "/app/js/jquery-3.5.1.js",
        body: true,
        crossorigin: "anonymous",
      },
      {
        src: "/app/js/jquery.dataTables.min.js",
        body: true,
        crossorigin: "anonymous",
      },
      {
        src: "/app/js/dataTables.bootstrap5.min.js",
        body: true,
        crossorigin: "anonymous",
      },
      {
        src: "https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js",
        body: true,
        crossorigin: "anonymous",
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.min.js",
        async: true,
        crossorigin: "anonymous",
      },
    ],
  },

  data() {
    return {
      userdetails: null,
      userdetailsforReport: null,
      navlist: [],
      reportnavlist: [],
      hasreportmodule: 0,
      message: null,

      setTimer: 1,

      events: ['click','mousemove','mousedown','scroll','keypress','load'],

      warningTimer: null,
      logoutTimer: null,
      warningZone: false,
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    if (!this.userdetails) {
      this.$router.push("/");
    } else {
      this.role = this.userdetails.user.role;
    }
    this.GetList();

    this.userdetailsforReport = JSON.parse(localStorage.getItem("userdetails"));
    if (!this.userdetailsforReport) {
      this.$router.push("/");
    } else {
      this.role = this.userdetailsforReport.user.role;
    }
    this.GetListForReport();
    this.getSessionSettings();
  },
  mounted() {
    document.body.classList.add("sb-nav-fixed");
    setTimeout(function () {
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        })
    }, 1000);

    this.events.forEach(function (event) {
      return window.addEventListener(event, this.resetTimer);
    },this);

    this.setTimers();
  },
  destroyed() {
    this.events.forEach(function(event){
      this.window.removeEventListener(event, this.resetTimer);
    }, this);

    this.setTimers();
  },
  methods: {
    changesidebar: function (event) {
      event.target.className += " active";
      alert(event.target.className);
    },
    SidebarAccess(val) {
      localStorage.setItem("SidebarAccess", val.read_writes);
    },
    async GetList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response1 = await this.$axios.post(
        "access/sidebar",
        {
          staff_id: this.userdetails.user.id,
          type: this.userdetails.user.role,
        },
        { headers }
      );

      if (response1.data.code == 200) {
        this.navlist = response1.data.list;
      } else {
        window.alert("Something went wrong");
      }
    },

    async GetListForReport() {
      const headers = {
        Authorization: "Bearer " + this.userdetailsforReport.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };

      const response2 = await this.$axios.post(
        "access/sidebarReport",
        {
          staff_id: this.userdetailsforReport.user.id,
          type: this.userdetailsforReport.user.role,
        },
        { headers }
      );

      if (response2.data.code == 200) {
        this.reportnavlist = response2.data.list;
        this.reportnavlist.forEach((hasreport) => {
          if (
            hasreport.module_id == 26 ||
            hasreport.module_id == 27 ||
            hasreport.module_id == 28 ||
            hasreport.module_id == 29
          ) {
            this.hasreportmodule = hasreport.module_id;
          }
        });
      }
    },

    // INFO:: handling session auto logout.
    setTimers: function () {
      this.warningTimer = setTimeout(this.warningMessage, 3*60*1000);

    },

    async getSessionSettings() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get(
        "system-settings/get-setting/idle-session-timeout",
        { headers }
      );

      if (response.data.code == 200) {
        this.setTimer = response.data.setting[0].variable_value;;
      } else {
        window.alert("Something went wrong");
      }
    },

    warningMessage: function () {
      let timerInterval
      this.$swal.fire({
        title: 'Are You There ?',
        html: 'You will be log out if there is no activity in '+this.setTimer+' minutes. Please click to dismiss this message.',
        timer: this.setTimer*60*1000,
        timerProgressBar: true,
        didOpen: () => {
          this.$swal.showLoading()
          const b = this.$swal.getHtmlContainer().querySelector('b')
          timerInterval = setInterval(() => {
            b.textContent = this.$swal.getTimerLeft()
          }, 1000)
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        if (result.dismiss === this.$swal.DismissReason.timer) {
          console.log('I was closed by the timer')
          this.logoutUser;
        }
      })
    },

    logoutUser: function () {
      localStorage.removeItem('userdetails');
      this.$router.push("/staff-login");
    },

    resetTimer: function() {
      clearTimeout(this.warningTimer);
      this.setTimers();
    }
  },
};
</script>
