import Cache from "./cache";
import * as config from "./data";
import UtilService from "./utils";

module.exports = {
  async fetchData(url, request, cb) {
    try {
      let response = await fetch(url, request);
      let responseJson = await response.json()
      if (response.status == 200) {
        cb(null, responseJson);
      } else {
        cb(responseJson);
      }
    } catch (error) {
      console.log('----', url)
      cb(error);
    }
  },
  async middleware(url, request, cb) {  
      this.fetchData(url, request, cb)
  },
  baseApi(sub_url, method, json_data, cb) {
   
    let request = {
      method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        AUTHORIZATION: Cache.token
          ? "Bearer " + Cache.token
          : null,
      }
    };
    if (method == "POST" || method == "PUT") {
      request["body"] = JSON.stringify(json_data);
    }else{
      // sub_url += '&t='+(new Date()).getTime()
    }


    this.middleware(config.SERVICE_API_URL + sub_url, request, cb);
  },

  async init(cb) {
    //check if current user exists or not
    let user = await UtilService.getLocalStringData("currentUser");
    Cache.clientID = await UtilService.getLocalStringData("client");
    if (user == null) {
      cb("err");
    } else {
      Cache.currentUser = JSON.parse(user);

      let locationHeader = await UtilService.getLocalStringData('locationHeader')
      let locations = await UtilService.getLocalStringData('locations')

      Cache.locationHeader = JSON.parse(locationHeader)
      Cache.locations = JSON.parse(locations)
      cb(null);
    }
  },

  logout() {
    UtilService.removeLocalObjectData("currentUser");
  },

  login(device_uuid, password, cb) {
    Cache.device_uuid = device_uuid;
    Cache.password = password;
    this.baseApi("device-login", "POST", { device_uuid, password }, cb);
  },
  
  getAppProfile (profileId, userName, cb){ 
    this.baseApi('app-profile/' + profileId + '/' + userName, 'GET', {}, cb) 
  },
  
};
