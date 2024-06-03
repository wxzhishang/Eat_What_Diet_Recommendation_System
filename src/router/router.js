import { lazy, Suspense } from "react"
import { Spin } from "antd";

const Home = lazy(() => import('../pages/Home/index'));

const Routes = [
    {
        path: '/',
        meta: {
            title: '首页',
            name: 'home'
        },
        element: <Suspense fallback={<Spin tip="Loading" size="large"></Spin>}><Home /></Suspense>
    }
]

export default Routes;