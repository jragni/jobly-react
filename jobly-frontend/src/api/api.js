import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be an frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */
  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }


  /** Get list of all companies */
  static async getCompanies(name) {
    let res = await this.request('companies/',{name})
    return res.companies;
  }

  /** Get list of all jobs */
  static async getJobs(title) {
    let res = await this.request('jobs/', {title});
    return res.jobs;
  }

  /** Log in given data: {username, password} */
  static async login(data){
    let res = await this.request('auth/token', data, 'post');
    return res.token;
  }

  /** Function to sign user up given data: {username, email, password, } */
  static async register(data) {
    let res = await this.request('auth/register', data, 'post');
    return res.token;
  }

  /** Function that updates user information */
  static async updateUserInfo(username, data) {
    console.log('JoblyApi, data:', data);
    let res = await this.request(`users/${username}`, data, 'patch');
    return res.user;
  }

  /** Function that queries user information given the username */
  static async getUserInfo(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }
  
  static async apply(username, jobId) {
    let res = await this.request(`users/${username}/jobs/${jobId}`, {}, 'post');
    return res;
  }

}

export default JoblyApi