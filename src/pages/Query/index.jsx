import React from "react";
import Header from "../../components/Header";
import { Input, Button } from 'antd';
import './index.css'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


function Query() {
    const navigate = useNavigate();
    const [search_value, setsearch_value] = useState();
    const { Search } = Input;
    const onSearch = (value, _e, info) => {
        console.log(info?.source, value);
        navigate('/query/search')
    }
    const addlabel = (name, e) => {
        console.log(name);
        setsearch_value(name);
    }
    return (
        <>
            <Header></Header>
            <div className="query-top">
                <div className="query-title">Nutrition Knowledge Graph</div>
                <div className="words">
                    为积极响应国家“健康中国2030”号召，清华大学（智能产业研究院）-北京智源人工智能研究院-“健康计算联合研究中心”联合美团、国家卫生健康委科学技术研究所、北京大学第一医院妇产科等多家权威机构和单位，推出中国饮食营养健康知识图谱——NutritionKG（Nutrition Knowledge Graph）。 用户可以通过搜索菜名或标签筛选等方式对菜品健康知识进行了解。NutritionKG 可服务于精准营养、健康管理应用，推动被动式健康管理走向更智能、更个性化、更主动的健康管理新范式。
                </div>
            </div>
            <div className="query-main">
                <div className="main-title">营养健康图谱查询</div>
                <div className="words">菜品食材/烹饪方式/营养标签/功效贴士</div>
                <Search
                    id="search"
                    className="search"
                    value={search_value}
                    placeholder="请输入·······"
                    allowClear
                    enterButton="搜索"
                    size="large"
                    onSearch={onSearch}
                />
                <div className="query-buttons">
                    <div>
                        <span>人群查询:</span>
                        <Button size="large" onClick={(e) => addlabel('高血压', e)}>高血压</Button>
                        <Button size="large" onClick={(e) => addlabel('糖尿病', e)}>糖尿病</Button>
                        <Button size="large" onClick={(e) => addlabel('孕妇', e)}>孕妇</Button>
                    </div>
                    <div>
                        <span>营养查询:</span>
                        <Button size="large" onClick={(e) => addlabel('低脂肪', e)}>低脂肪</Button>
                        <Button size="large" onClick={(e) => addlabel('低胆固醇', e)}>低胆固醇</Button>
                        <Button size="large" onClick={(e) => addlabel('低钠', e)}>低钠</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Query;