import axios from 'axios'

axios.defaults.baseURL = 'https://www.luffycity.com/api/v1/';

export const categoryList = () => {
  return axios.get('course_sub/category/list/').then(res => res.data)
};

export const allCategoryList = (categoryId) => {
  return axios.get(`courses/?sub_category=${categoryId}`).then(res => res.data)
};

// 课程详情顶部数据
export const coursedetailtop = (courseid) => {
  return axios.get(`coursedetailtop/?courseid=${courseid}`).then(res => res.data);
};

// 课程概述
export const coursedetail = (courseid) => {
  return axios.get(`coursedetail/?courseid=${courseid}`).then(res => res.data);
};

// geetest接口
export const geetest = () => {
  return axios.get(`captcha_check/`).then(res => res.data);
};

// 登录
export const userLogin = (params) => {
  // 这个参数至少有五个字段 username password  验证的三个字段
  return axios.post('account/login/', params).then(res => res.data);
};

// 加入购物车的接口
export const shopCart = (params) => {
  return axios.post('user/shop_cart/create/', params).then(res => res.data);
};

// 购物车的数据
export const shopCartList = () => {
  return axios.get(`user/shop_cart/list/`).then(res => res.data);
};

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  if (localStorage.getItem('access_token')) {
    // Axios.defaults.headers.common['Authorization'] = localStorage.getItem('access_token');
    // console.log(config.headers);
    config.headers.Authorization = localStorage.getItem('access_token')
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});
