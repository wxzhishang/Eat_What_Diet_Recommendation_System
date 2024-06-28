import { lazy, Suspense } from "react"
import { Spin } from "antd";

const Home = lazy(() => import('../pages/Home/index'));
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
        path:'/',
        meta:{
            title:'注册',
            name:'register'
        },
        element: <Suspense fallback={<Spin tip="Loading" size='large'></Spin>}><Register></Register></Suspense>
    }
]

export default Routes;