//从 request.js中 引入request函数
import {request} from "./request";
export function getHomeMutidata() {
  return  request({
    url:"/home/multidata"
  })
}

