import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index'
import Home from "../views/Home";
import About from "../views/About";
import Saying from "../views/Saying";
import Info from "../views/Info";
import Share from "../views/Share";
import List from "../views/List";

Vue.use(Router);

export default new Router({
    mode:'history',
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
                }

            ]
        }
    ]
})

