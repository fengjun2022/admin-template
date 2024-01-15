
import {config} from "@/class/RouterConfig.ts"

const LAYOUT =  () => import('@/layouts/index.vue')
export default [
    {
        path: '/',
        name: 'Home',
        component: LAYOUT,
        redirect:config.HOME_URL ,
        meta: {
            title: '首页',
            icon: 'HomeFilled',
        },
        children: [
            {
                path: '/index',
                name: 'Index',
                component: () => import('@/views/home/index.vue'),
                meta: {
                    title: '首页',
                    icon: 'HomeFilled',
                    affix: true,
                    activeMenu:"/index"
                },
            },
        ],

    },




    {
        name: 'Acl',
        path: '/acl',
        component: LAYOUT,
        redirect: '/acl/user',
        meta: {
            title: '权限管理',
            icon: 'Lock',
        },
        children: [
            {
                name: 'User',
                path: '/acl/user',
                component: () => import('@/views/authority/authority.vue'),
                meta: {
                    title: '用户管理',
                    icon: 'UserFilled',
                },
            },


        ],
    },



];


