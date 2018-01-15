import axios from "axios";
export function gethouseholdAppliance() {
    return axios.get("static/mock/household_appliance.json").then(res => {
      return Promise.resolve(res.data)
    });
  }