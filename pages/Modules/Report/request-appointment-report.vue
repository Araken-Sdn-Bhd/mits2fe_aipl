<template>
<div>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>Workload Report</h1>
          </div>

          <div class="card mb-4">
            <div class="card-header icon-title">
              <a href="#"><i class="fad fa-file-chart-line"></i></a>
              <h4>Request Appointment Report</h4>
            </div>
            <div class="card-body">
              <form>
                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Period Of Services:</label>
                      <input
                        type="date"
                        class="form-control"
                        v-model="fromDate"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">To:</label>
                      <input
                        type="date"
                        class="form-control"
                        v-model="toDate"
                      />
                    </div>
                  </div>
                </div>
                <Error :message="error" v-if="error" />
                <div class="d-flex">
                  <div class="ml-auto">
                    <a @click="Ongeneratepdf" class="btn btn-danger btn-text"
                      ><i class="far fa-file-pdf"></i> Generate PDF</a
                    >
                    <a @click="Ongenerateexel" class="btn btn-success btn-text"
                      ><i class="far fa-file-excel"></i> Generate Excel</a
                    >
                  </div>
                </div>
              </form>
            
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
    <div
                id="result"
                class="hide"
                ref="result"
                style="background: #fff"
              >
              <div class="topnav"> <div>PERIOD OF SERVICES:  {{ fromDate }}</div> <p class='to'>TO</p> <div>{{ toDate }}</div> </div>
              
                <div>TOTAL REQUEST:  {{ total }}</div>

                <table class="table" id="datatable">
                  <thead>
                    <tr>
                      <th class="thhead">No</th>
                      <th class="thhead">Name</th>
                      <th class="thhead">NRIC/Passport</th>
                      <th class="thhead">Address</th>
                      <th class="thhead">Phone Number</th>
                      <th class="thhead">Email</th>
                      <th class="thhead">Request Date</th>
                    </tr>
                   </thead>
                  <tbody>
                    <tr v-for="(rp, index) in list" :key="index">
                      <td class="tdrow">{{ index + 1 }}</td>
                      <td class="tdrow">{{ rp.name }}</td>
                      <td class="tdrow">{{ rp.nric_or_passportno  }}</td>
                      <td class="tdrow">{{ rp.address }}</td>
                      <td class="tdrow">{{ rp.contact_no }}</td>
                      <td class="tdrow">{{ rp.email  }}</td>
                      <td class="tdrow">{{ getFormattedDate(rp.created_at) }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
</div>
</template>
<script>
import moment from 'moment';

import CommonHeader from '../../../components/CommonHeader.vue';
import CommonSidebar from '../../../components/CommonSidebar.vue';
export default {
 
  components: { CommonSidebar, CommonHeader },

  name: "sharp",
   head: {
    script: [
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
      fromDate: "",
      toDate: "",
      error: null,
      list: [],
      total:'',

        
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    if(this.userdetails){
      this.id=this.userdetails.user.id; 
      this.email=this.userdetails.user.email;
    }
  },
  methods: {
    async Ongeneratepdf() {
      this.error = null;
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "request-appointment-report/get",
        {
          fromDate: this.fromDate,
          toDate: this.toDate,
        },
        { headers, params: {email: this.email}  }
      );
      console.log("my report", response.data);
      if (response.data.code == 200) {
        this.list = response.data.result;
        this.total = this.list.length;
        console.log("my report", response.data);
        if (response.data.filepath) {
          setTimeout(() => {
            this.$refs.result.classList.remove("hide");
            var pdf = new jsPDF("p", "pt", "a4");
            pdf.addHTML($("#result")[0], function () {
              pdf.save("Report.pdf");
            });
          }, 100);
          setTimeout(() => {
            this.$refs.result.classList.add("hide");
          }, 100);
        } else {
          this.error = "No Record Found";
        }
      } else {
        this.error = "No Record Found";
      }
    },
    async Ongenerateexel() {
      this.error = null;
      try {
        const headers = {
          Authorization: "Bearer " + this.userdetails.access_token,
          Accept: "application/json",
          "Content-Type": "application/json",
        };
        const response = await this.$axios.post(
          "request-appointment-report/get",
          {
            fromDate: this.fromDate,
            toDate: this.toDate,
          },
          { headers }
        );
        console.log("my report", response.data);
        if (response.data.code == 200) {
          if (response.data.filepath) {
            window.open(response.data.filepath, "_blank");
          } else {
            this.error = "No Record Found";
          }
        }
      } catch (e) {}
    },
    getFormattedDate(date) {
            return moment(date).format("YYYY-MM-DD hh:mm:ss A")
        },

    formatDate(dateString) {
            const date = dayjs(dateString);
                // Then specify how you want your dates to be formatted
            return date.format('dddd MMMM D, YYYY');
        }



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
.topnav .to{
  padding-right: 10px;
  padding-left:  10px;
}

.topnav{
  display:flex;
}

div#result {
  padding: 35px;
}
</style>