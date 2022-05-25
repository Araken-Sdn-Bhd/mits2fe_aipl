import axios from "axios";
var userdetail=JSON.parse(localStorage.getItem("userdetails"));
const TOKEN = userdetail.access_token;
console.log('My Token',TOKEN);
const clientAPI = () =>
console.log('My Token',TOKEN);
  axios.create({
    baseURL: "http://192.168.1.11:8080/api/",
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      'Authorization': 'Bearer '+TOKEN
    },
  });
  // clientAPI.interceptors.request.use(config => {
  //   NProgress.start()
  //   return config
  // })
  
  // // before a response is returned stop nprogress
  // clientAPI.interceptors.response.use(response => {
  //   NProgress.done()
  //   return response
  // })
export default clientAPI;
