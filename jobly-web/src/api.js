import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";
/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;
  static user;

  static async request(endpoint, data = {}, method = "get") {
    //ADDED FOR DEV
    console.log("request to server data: ", data, "method: ", method);
    // end DEV
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }
  // Individual API routes

  //-------------------------------------------------------------Authentication

  static async register(data) {
    try {
      let res = await this.request("auth/register", data, "post");
      console.log("at register in api:", res);
      this.token = res.token;
      return this.token;
    } catch (error) {
      console.error(error);
    }
  }

  static async login(data) {
    let res = await this.request("auth/token", data, "post");
    console.log("attemting to log in: ", res);
    this.token = res.token;
    return this.token;
  }
  //NOTE: was an object prior (token)

  //------------------------------------------------------------------Companies

  /** Get list of companies
   * @param {Object} data --- pass in title to filter query by title.
   * */

  static async getCompanyList(data) {
    data = data ? data : {};
    let res = await this.request(`companies`, data);
    return res.companies;
  }

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    try {
      let res = await this.request(`companies/${handle}`);
      return res.company;
    } catch (error) {
      return null;
    }
  }

  // Companies End

  //-----------------------------------------------------------------------Jobs

  /** get details on a job by handle. */

  static async getJob(handle) {
    let res = await this.request(`jobs/${handle}`);
    return res.job;
  }

  static async getJobList(data) {
    data = data ? data : {};
    let res = await this.request(`jobs`, data);
    return res.jobs;
  }
  // Jobs End

  //----------------------------------------------------------------------Users

  static async getUser(username) {
    console.log("getUser in api data :", username);
    let res = await this.request(`users/${username}`, { username: username });
    this.user = res.user;
    return res.user;
  }
}

// for now, put token ("testuser" / "password" on class)
//JoblyApi.token =
//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
//"SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
//"FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

export default JoblyApi;
