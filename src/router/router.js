import { lazy, Suspense } from "react"
import { Spin } from "antd";

const Home = lazy(() => import('../pages/Home/index'));
const Login = lazy(() => import('../pages/Login/index'));
const Register = lazy(() => import('../pages/Register/index'));
const Query = lazy(() => import('../pages/Query/index'));
const Share = lazy(() => import('../pages/Share/index'));
const Center = lazy(() => import('../pages/Center/index'));

const Routes = [
    {
        path: '/home',
        meta: {
            title: '首页',
            name: 'home'
        },
        element: <Suspense fallback={<Spin tip="Loading" size="large"></Spin>}><Home /></Suspense>
    },
    {
        path: '/',
        meta: {
            title: '登录',
            name: 'login'
        },
        element: <Suspense fallback={<Spin tip="Loading" size="large"></Spin>}><Login /></Suspense>
    },
    {
        path: '/register',
        meta: {
            title: '注册',
            name: 'register'
        },
        element: <Suspense fallback={<Spin tip="Loading" size='large'></Spin>}><Register></Register></Suspense>
    },
    {
        path: '/query',
        meta: {
            title: '营养查询',
            name: 'query'
        },
        element: <Suspense fallback={<Spin tip="Loading" size='large'></Spin>}><Query /></Suspense>
    },
    {
        path: '/share',
        meta: {
            title: '世界频道',
            name: 'share'
        },
        element: <Suspense fallback={<Spin tip="Loading" size='large'></Spin>}><Share></Share></Suspense>
    },
    {
        path: '/center',
        meta: {
            title: '个人中心',
            name: 'center'
        },
        element: <Suspense fallback={<Spin tip="Loading" size='large'></Spin>}><Center /></Suspense>

    }
]

export default Routes;