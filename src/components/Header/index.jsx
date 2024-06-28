import React, { useState } from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom"

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
        label: "关于我们",
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
        <div style={{ display: 'flex', backgroundColor: 'transparent' }}>
            <div style={{ width: '60%', textAlign: 'center' }}>
                <img src="D:/Diet-recommendation/diet-recommendation/src/assets/logo.png" />
            </div>
            <Menu style={{ border: 'none', width: '40%' }} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        </div>
    )
}

export default Header;