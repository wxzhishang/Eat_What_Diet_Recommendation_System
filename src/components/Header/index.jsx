import React, { useState, useEffect } from "react";
import { Menu, Button } from "antd";
import { useNavigate, useLocation } from "react-router-dom"
import "./index.css"

const items = [
    {
        label: "首页",
        key: "/home",
    },
    {
        label: "营养查询",
        key: "/query",
    },
    {
        label: "世界频道",
        key: "/share",
    },
    {
        label: "联系我们",
        key: "/about",
    },
    {
        label: "个人中心",
        key: '/center',
    }
]

function Header() {
    const navigate = useNavigate();
    const [key, setKey] = useState('1');
    let { pathname } = useLocation();

    useEffect(() => {
        setKey([pathname])
    }, [pathname])
    return (
        <div style={{ display: 'flex', backgroundColor: '#fff' }}>
            <div style={{ width: '40%', textAlign: 'center', height: '50px' }}>
                <img src="http://sfs87naca.hn-bkt.clouddn.com/logo/logo-white.png" style={{ width: '80px', height: '50px' }} />
            </div>
            <Menu
                style={{ border: 'none', width: '30%', color: '#8ec63f' }}
                onSelect={(e) => {
                    navigate(e.key);
                }}
                selectedKeys={key}
                mode="horizontal"
                items={items}
            />
        </div>
    )
}

export default Header;