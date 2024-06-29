import React, { useState } from "react";
import Header from "../../components/Header";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { Carousel, RadioGroup, Radio, Space, Typography } from '@douyinfe/semi-ui';
import "./index.css"

function Home() {
    const navigate = useNavigate();
    const toQuery = () => {
        navigate("/query")
    }
    const { Title, Paragraph } = Typography;
    const [theme, setTheme] = useState('primary');

    const style = {
        width: '60%',
        height: '500px',
        position: 'relative',
        left: '20%',
    };

    const titleStyle = {
        position: 'absolute',
        top: '100px',
        left: '100px'
    };

    const colorStyle = {
        color: '#1C1F23'
    };

    const imgList = [
        'https://lf3-static.bytednsdoc.com/obj/eden-cn/hjeh7pldnulm/SemiDocs/bg-1.png',
        'https://lf3-static.bytednsdoc.com/obj/eden-cn/hjeh7pldnulm/SemiDocs/bg-2.png',
        'https://lf3-static.bytednsdoc.com/obj/eden-cn/hjeh7pldnulm/SemiDocs/bg-3.png',
        'https://lf3-static.bytednsdoc.com/obj/eden-cn/hjeh7pldnulm/SemiDocs/bg-2.png',
    ];

    const textList = [
        ['营养查询 Nutritional inquiry', '营养分析', '提供个体或人群的营养状况查询与分析服务'],
        ['世界频道 World channel', '全国传播', '向所有用户提供健康新闻等多媒体内容'],
        ['联系我们 Found us', '联系渠道', '为用户提供与网站、应用或服务提供商取得联系的渠道'],
        ['个人中心 Personal center', '个性管理', '为用户提供个性化信息管理和服务体验的在线平台']
    ];
    return (
        <>
            <Header></Header>
            <div className="backGround"></div>
            <Button theme="solid" type="primary" className="btn" onClick={toQuery}>营养查询→</Button>
            <div style={{ position: 'relative', top: '100vh' }}>
                <div className="title">
                    <h1 >服务说明</h1>
                    <span >Service</span>
                </div>
                <Carousel style={style} theme={theme} autoPlay={false}>
                    {
                        imgList.map((src, index) => {
                            return (
                                <div key={index} style={{ backgroundSize: 'cover', backgroundImage: `url('${src}')` }}>
                                    <Space vertical align='start' spacing='medium' style={titleStyle}>
                                        <Title heading={2} style={colorStyle}>{textList[index][0]}</Title>
                                        <Space vertical align='start'>
                                            <Paragraph style={colorStyle}>{textList[index][1]}</Paragraph>
                                            <Paragraph style={colorStyle}>{textList[index][2]}</Paragraph>
                                        </Space>
                                    </Space>
                                </div>
                            );
                        })
                    }
                </Carousel>
            </div>
            <div style={{ position: 'relative', top: '100vh' }}>
                <div className="title">
                    <h1 >合作伙伴</h1>
                    <span >Partner</span>
                </div>
            </div>
        </>
    )
}

export default Home;