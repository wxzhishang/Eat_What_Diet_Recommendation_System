import React from "react";
import Header from "../../components/Header";
import { Button, Image, Divider, Empty } from "antd";
import "./index.css"

function Center() {
    return (
        <>
            <Header />
            <div className="personalInfo">
                <div style={{ display: 'flex' }} className="personalInfo-text">
                    <Image src="https://picsum.photos/200?random=101.jpg" style={{ borderRadius: '50%', position: 'relative', right: '40px' }} preview={false} width={200} height={200}></Image>
                    <div >
                        <h1>Saber</h1>
                        <p>ID:</p>
                        <p>还没有简介</p>
                        <p>3关注 0粉丝 0获赞</p>
                    </div>
                </div>
                <div style={{ position: 'relative', marginTop: '80px', left: '5%' }} className="personalInfo-text">
                    <Button shape="round" style={{ margin: '10px', border: 'none', backgroundColor: '#f7f7f7' }}>笔记</Button>
                    <Button shape="round" style={{ margin: '10px', border: 'none', backgroundColor: '#f7f7f7' }}>收藏</Button>
                    <Button shape="round" style={{ margin: '10px', border: 'none', backgroundColor: '#f7f7f7' }}>点赞</Button>
                </div>
            </div>
            <Divider />
            <div>
                <Empty description="你还没有发布任何内容哦~" />
            </div>
        </>
    )
}

export default Center;