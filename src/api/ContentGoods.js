import axios from "axios";
export function getContentBook() {
    return axios.get("static/mock/content_book.json").then(res => {
      return Promise.resolve(res.data)
    });
  }