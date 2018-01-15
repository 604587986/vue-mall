import axios from "axios";
export function getslider() {
  return axios.get("static/mock/slider.json").then(res => {
    return Promise.resolve(res.data)
  });
}