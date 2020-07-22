import axios from  "axios"

export function request(config) {
  //创建axios实例
  const instance = axios.create({
    baseURL:"http://152.136.185.210:8000/api/n3",
    timeout:4000
  })

  //axios请求拦截器的配置
  instance.interceptors.request.use(config => {
    return config
  },err =>{
    console.log(err)
  })

  //axios响应拦截器的配置
  instance.interceptors.response.use(res => {
    return res.data
  },err => {
    console.log(err)
  })

  //发送真正的网络请求
  return instance(config)
}
