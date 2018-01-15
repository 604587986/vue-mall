import axios from "axios";
export function getstargoods() {
  return axios.get("static/mock/stargoods.json").then(res => {
    return Promise.resolve(res.data)
  });
}