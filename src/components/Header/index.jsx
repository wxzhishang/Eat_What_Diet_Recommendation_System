import React, { useState } from "react";
import { Menu, Button } from "antd";
import { useNavigate } from "react-router-dom"
import "./index.css"

const items = [
    {
        label: "首页",
        key: "home",
    },
    {
        label: "营养查询",
        key: "query",
    },
    {
        label: "世界频道",
        key: "share",
    },
    {
        label: "联系我们",
        key: "about",
    },
    {
        label: "个人中心",
        key: 'center',
    }
]

function Header() {
    const [current, setCurrent] = useState('home');
    const navigate = useNavigate();
    const onClick = (e) => {
        setCurrent(e.key);
        navigate('/' + e.key)
    }
    return (
        <div style={{ display: 'flex', backgroundColor: '#fff' }}>
            <div style={{ width: '40%', textAlign: 'center', height: '50px' }}>
                <img src="http://sfs87naca.hn-bkt.clouddn.com/logo/logo-white.png" style={{ width: '80px', height: '50px' }} />
            </div>
            <Menu style={{ border: 'none', width: '30%', color: '#8ec63f' }} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        </div>
    )
}

export default Header;