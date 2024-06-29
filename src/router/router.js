import { lazy, Suspense } from "react"
import { Spin } from "antd";

const Home = lazy(() => import('../pages/Home/index'));
const Login = lazy(() => import('../pages/Login/index'));
const Register = lazy(()=>import('../pages/Register/index'))

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
        path: '/login',
        meta: {
            title: '登录',
            name: 'login'
        },
        element: <Suspense fallback={<Spin tip="Loading" size="large"></Spin>}><Login /></Suspense>
    },
    {
        path:'/register',
        meta:{
            title:'注册',
            name:'register'
        },
        element: <Suspense fallback={<Spin tip="Loading" size='large'></Spin>}><Register></Register></Suspense>
    }
]

export default Routes;