import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index'
import Home from "../views/Home";
import About from "../views/About";
import Saying from "../views/Saying";
import Info from "../views/Info";
import Share from "../views/Share";
import List from "../views/List";
import LoginAndRegister from "../views/LoginAndRegister";

Vue.use(Router);

export default new Router({
    mode:'history',
    scrollBehavior(to,from,saveTop){
      if (saveTop){
          return saveTop;
      } else{
          return {x: 0,y: 0}
      }
    },
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index,
            children: [
                {
                    path: '/',
                    component: Home
                },
                {
                    path: '/about',
                    component: About
                },
                {
                    path: '/saying',
                    component: Saying
                },
                {
                    path: '/info',
                    component: Info
                },
                {
                    path: '/share',
                    component: Share
                },
                {
                    path: '/list',
                    component: List
                },
                {
                    path: '/login',
                    component: LoginAndRegister
                }
            ]
        },
    ]
})

