import { lazy, Suspense } from "react"
import { Spin } from "antd";

const Home = lazy(() => import('../pages/Home/index'));
const Login = lazy(() => import('../pages/Login/index'));

const Routes = [
    {
        path: '/',
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
    }
]

export default Routes;