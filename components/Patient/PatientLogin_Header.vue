<template>
  <nav class="sb-topnav navbar navbar-expand navbar-dark px-4" >
    <!-- Sidebar Toggle-->
    <button
      class="btn btn-link btn-sm order-1 order-lg-0 me-4 mobile-menu"
      id="sidebarToggle"
      href="#!"
    >
      <i class="fal fa-bars"></i>
    </button>

    <!-- Navbar Brand-->
    <a class="navbar-brand" href="#">
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
            <span class="dot"></span>
            <i class="fas fa-bell"></i>
          </a>
          <div
            class="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdown"
          >
            <div class="notification-header">
              <h4>All Notifications</h4>
              <span>4</span>
            </div>
            <div class="notification-body scrool">
              <div class="notification-text">
                <a href="#">Update Patient Demographic</a>
                <span><i class="fal fa-clock"></i> 14 mins ago</span>
              </div>

              <div class="notification-text">
                <a href="#">Update Patient Demographic</a>
                <span><i class="fal fa-clock"></i> 14 mins ago</span>
              </div>

              <div class="notification-text">
                <a href="#">Update Patient Demographic</a>
                <span><i class="fal fa-clock"></i> 14 mins ago</span>
              </div>

              <div class="notification-text">
                <a href="#">Update Patient Demographic</a>
                <span><i class="fal fa-clock"></i> 14 mins ago</span>
              </div>

              <div class="notification-text">
                <a href="#">Update Patient Demographic</a>
                <span><i class="fal fa-clock"></i> 14 mins ago</span>
              </div>
            </div>
            <div class="notification-footer">
              <a href="#">View All Notifications</a>
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
              
            </span>
          </a>
          <ul
            class="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdown"
          >
            <!-- <li><a class="dropdown-item" href="#!">Settings</a></li>
            <li><a class="dropdown-item" href="#!">Activity Log</a></li> -->
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" @click="Logout()">Logout</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name: "PatientLogin_Header",
  data() {
    return {
      userdetails: null,
      name:""
    };
  },
   beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    if(this.userdetails){
      this.name=this.userdetails.user.name;
    }
  },
   methods: {
    async Logout() {
       localStorage.removeItem('userdetails');
        this.$router.push("/");
    },
  },
};
</script>
