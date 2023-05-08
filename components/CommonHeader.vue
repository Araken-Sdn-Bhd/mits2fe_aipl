<template>
  <nav class="sb-topnav navbar navbar-expand navbar-dark px-4">
    <!-- Sidebar Toggle-->
    <button
      class="btn btn-link btn-sm order-1 order-lg-0 me-4 mobile-menu"
      id="sidebarToggle"
      href="#!"
    >
      <i class="fal fa-bars"></i>
    </button>

    <!-- Navbar Brand-->
    <a class="navbar-brand" v-bind:href="route_alt">
      <img src="~/assets/images/logo.png" />
    </a>
    <!-- Navbar Brand-->

    <div class="d-flex ms-auto" >
      <ul class="navbar-nav notification">
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle user-icon psychiatrist"
            id="navbarDropdown"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span v-if="notification_count>0" class="dot"></span>
            <i class="fas fa-bell"></i>
          </a>
          <div
            class="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdown"
          >
            <div class="notification-header">
              <h4>All Notifications</h4>
              <span>{{notification_count}}</span>
            </div>
            <div class="notification-body scrool">
              <div class="notification-text" v-for="(notifi,index) in notificationlist" :key="index">
                <!-- <a v-on:click="RemoveNotification(notifi)" v-bind:href="'/'+ notifi.url_route">{{ notifi.message }} ({{ getFormattedDate(notifi.created_at) }})</a> -->
                <div type="button" @click="RemoveNotification(notifi)">
                  <p>{{ notifi.message }}({{ getFormattedDate(notifi.created_at) }})
                  <span><i class="fal fa-clock"></i> {{notifi.time}} ago</span>
                  </p>
                </div>
                <!-- <a @click="RemoveNotification(notifi)" href="">{{ notifi.message }}({{ getFormattedDate(notifi.created_at) }})</a>
                <span><i class="fal fa-clock"></i> {{notifi.time}}</span> -->
              </div>
            </div>
            <div class="notification-footer">
              <!-- <a href="/app/modules/notification">View All Notifications</a> -->
            </div>
          </div>
        </li>
      </ul>

      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle user-icon psychiatrist"
            id="navbarDropdown"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fad fa-user"></i>
            <span>
              {{name}}
              <!-- <small>Psychiatrist</small> -->
            </span>
          </a>
          <ul
            class="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdown"
          >
            <!-- <li><a class="dropdown-item" href="#!">Settings</a></li>
            <li><a class="dropdown-item" href="#!">Activity Log</a></li> -->
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" style="cursor:pointer;" @click="Logout()">Logout</a></li>
            <li><a href="/app/modules/change-password" class="dropdown-item">Change Password</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import moment from 'moment';
export default {
  name: "CommonHeader",
  data() {
    return {
      userdetails: null,
      name:"",
      id:"",
      notificationlist:[],
      message:"",
      notification_count:"",
      notifi_id:"",
      try:[],
      route_alt: "",
    };
  },
   beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    if(this.userdetails){
      this.name=this.userdetails.user.name;
      this.id=this.userdetails.user.id;
      this.email=this.userdetails.user.email;
      this.role=this.userdetails.user.role;
      this.branch_id=this.userdetails.branch.branch_id;
      this.route_alt=this.userdetails.route;
    }

  },
  mounted() {
    this.GetNotificationList();
    },
   methods: {
    async Logout() {
       localStorage.removeItem('userdetails');
        this.$router.push("/staff-login");
    },
    async GetNotificationList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post("Notification/get",
      {added_by:this.id,role:this.role,branch_id:this.branch_id,email:this.email,user_id:this.id},
       { headers });
      if (response.data.code == 200 || response.data.code == "200") {
        this.notificationlist = response.data.list.sort((a,b)=>b.time<a.time?1:-1);
        this.notification_count = response.data.notification_count;
        this.notifi_id= response.data.id;
         console.log('my notification',this.notification_count);

      } else {
        this.notificationlist = [];
      }
    },

    async RemoveNotification(notifi) {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      console.log('my notification',notifi.url_route);
      const response = await this.$axios.post("Notification/delete",
      {notifi_id:notifi.id},
       { headers });
      if (response.data.code == 200 || response.data.code == "200") {
          this.$router.push(notifi.url_route);
      } else {
        this.notificationlist = [];
      }
    },


    getFormattedDate(date) {
            return moment(date).format("DD-MM-YYYY")
        },
  },
};
</script>
