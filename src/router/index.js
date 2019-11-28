import Vue from 'vue'
import Router from 'vue-router'
// @代表觉得路径 检索到.....src/

// 如果我们Router当做举报模块一定要用Vue.use(Router)
// 以后在组件中可以通过this.$router获取Router实例化对象
Vue.use(Router);
import Home from '@/components/Home/Home'
import Course from '@/components/Course/Course'
import LightCourse from '@/components/LightCourse/LightCourse'
import Micro from '@/components/Micro/Micro'
import CourseDetail from '@/components/Course/CourseDetail'
import Login from '@/components/Login/Login'
import Cart from '@/components/Cart/Cart'

export default new Router({
  // 路径中去掉#,更改为history模式
  mode:'history',
  linkActiveClass:'is-active',
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      name:'Home',
      path:'/home',
      component:Home
    },
    {
      name:'Course',
      path:'/course',
      component: Course
    },
    {
      path:'/light-course',
      name:'LightCourse',
      component:LightCourse
    },
    {
      path:"/micro",
      name:'Micro',
      component:Micro
    },
    // 课程详情
    {
      path:"/course/detail/web/:detailId",
      name:"course.detail",
      component:CourseDetail
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    // 购物车
    {
      path: "/purchase/shopping_cart",
      name: 'purchase.shop',
      component: Cart
    }
  ],})
