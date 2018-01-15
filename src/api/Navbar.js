import axios from "axios";
export function getxiaomi() {
  return axios.get("static/mock/xiaomi.json").then(res => {
    return Promise.resolve(res.data)
  });
}
export function getredmi() {
  return axios.get("static/mock/redmi.json").then(res => {
    return Promise.resolve(res.data)
  });
}
export function getcomputer() {
  return axios.get("static/mock/computer.json").then(res => {
    return Promise.resolve(res.data)
  });
}
export function gettv() {
  return axios.get("static/mock/tv.json").then(res => {
    return Promise.resolve(res.data)
  });
}
export function getbox() {
  return axios.get("static/mock/box.json").then(res => {
    return Promise.resolve(res.data)
  });
}
export function getrouter() {
  return axios.get("static/mock/router.json").then(res => {
    return Promise.resolve(res.data)
  });
}
export function gethardware() {
  return axios.get("static/mock/hardware.json").then(res => {
    return Promise.resolve(res.data)
  });
}