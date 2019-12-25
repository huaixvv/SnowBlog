import axios from 'axios';


//music
export function request(config) {
  
  //创建axios实例
  const instance = axios.create({
    baseURL: "http://121.36.41.153:3000",
    timeout: 5000
  })

  //axios拦截器
  //1.请求拦截器
  instance.interceptors.request.use(config => {
    return config
  }, err => { 
      console.log(err);
  })

  //2.响应拦截器
  instance.interceptors.response.use(res => {
    return res
  }, err => {
      console.log(err);
  })

  //返回instance 实际返回的是 promise
  return instance(config)
}



//blog 
export function blogrequest(config) {
  
  //创建axios实例
  const instance = axios.create({
    baseURL: "http://127.0.0.1:8081",
    timeout: 5000
  })

  //axios拦截器
  //1.请求拦截器
  instance.interceptors.request.use(config => {
    return config
  }, err => { 
      console.log(err);
  })

  //2.响应拦截器
  instance.interceptors.response.use(res => {
    return res
  }, err => {
      console.log(err);
  })

  //返回instance 实际返回的是 promise
  return instance(config)
}