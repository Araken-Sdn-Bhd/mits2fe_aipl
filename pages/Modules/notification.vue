<template>
  <div>
    <div id="layoutSidenav">
      <CommonSidebar />
      <div id="layoutSidenav_content">
        <CommonHeader />
        <main>
          <div class="container-fluid px-4">
            <div class="page-title"><h1>Notification</h1></div>
            
            <div class="notification-box">
                <div class="notification-inner" v-for="(notifi,index) in notificationlist" :key="index">
                    <div class="icon"><i class="far fa-bell"></i></div>
                    <div class="text">
                        <h1>{{notifi.message}}</h1>
                        <span><i class="fal fa-clock"></i> {{notifi.time}}</span>
                    </div>
                </div>

                <!-- <div class="notification-inner">
                    <div class="icon"><i class="far fa-bell"></i></div>
                    <div class="text">
                        <h1>upcoming review for Patient Care Plan</h1>
                        <span><i class="fal fa-clock"></i> 0 days 2 hours 50 minutes</span>
                    </div>
                </div> -->

            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>
<script>
import CommonHeader from "../../components/CommonHeader.vue";
import CommonSidebar from "../../components/CommonSidebar.vue";
export default {
  components: { CommonSidebar, CommonHeader },

  name: "Notification",

  data() {
    return {
      userdetails: null,
      fromDate: "",
      toDate: "",
      error: null,
      list: [],
      notificationlist:[],
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    if(this.userdetails){
      this.name=this.userdetails.user.name;
      this.id=this.userdetails.user.id;
    }
    this.GetNotificationList();
  },
  methods: {
     async GetNotificationList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post("Notification/get",
      {added_by:this.id},
       { headers });
      if (response.data.code == 200 || response.data.code == "200") {
        this.notificationlist = response.data.list;
        this.notification_count = response.data.notification_count;
         console.log('my notification',this.notification_count);

      } else {
        this.notificationlist = [];
      }
    },

  },
};
</script>
<style scoped>
.tdrow {
  padding: 5px 10px;
  border: 1px solid #000;
  font-size: 13px;
  font-weight: 600;
}
.thhead {
  background: #ddd;
  padding: 5px 10px;
  border: 1px solid #000;
  text-transform: uppercase;
  font-size: 13px;
}
.table {
  border: 1px solid rgb(0, 0, 0);
  width: 100%;
  margin-top: 50px;
}
.tabhead {
  background: #ddd;
  padding: 5px 10px;
  border: 1px solid #000;
  text-transform: uppercase;
  font-size: 13px;
}
.tabtd {
  padding: 5px 10px;
  border: 1px solid #000;
  font-size: 13px;
  font-weight: 600;
}
.hide {
  background: #fff;
  display: none;
}
div#result {
  padding: 35px;
}
</style>