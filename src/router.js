import Vue from 'vue'
import Router from 'vue-router'
import Landing from './views/Landing.vue'
import { longStackSupport } from 'q';

Vue.use(Router)

const route = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Landing
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/landing',
      name: 'landing',
      component: () => import('./views/Landing.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('./views/Dashboard.vue')
    },
    {
      path: '/createprofile',
      name: 'createprofile',
      component: () => import('./views/CreateProfile.vue')
    },
    {
      path: '/edit-profile',
      name: 'edit-profile',
      component: () => import('./views/EditProfile.vue')
    },
    {
      path: '/add-experience',
      name: 'add-experience',
      component: () => import('./views/AddExperience.vue')
    },
    {
      path: '/add-education',
      name: 'add-education',
      component: () => import('./views/AddEducation.vue')
    },
    {
      path: '/profiles',
      name: 'profiles',
      component: () => import('./views/Profiles.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('./views/Profile.vue')
    },
    {
      path: '/feed',
      name: 'feed',
      component: () => import('./views/Posts.vue')
    },
    {
      path: '*',
      redirect: '/',
    }
  ]
})

//全局路由守卫
route.beforeEach((to, from, next) => {
  //判断用户是否已登录
  const isLogin = localStorage.jwtToken ? true : false
  //执行
  if (to.path === "/login" || to.path === "/register" || to.path === "/") {
    next()
  } else {
    isLogin ? next() : next("/login")
  }


})

export default route
