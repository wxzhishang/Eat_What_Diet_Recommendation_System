import React from "react";
import Header from "../../../components/Header";
import { Input, Button, Divider } from 'antd';
import './index.css';
import { useState } from "react";

function Search() {
    const { Search } = Input;
    const [search_value, setsearch_value] = useState();
    const dataList = [
        {
            id: '1',
            name: '清炖茄子',
            compose: '菜品食材: 茄子500克,大葱5克,姜5克···',
            suit: '适宜人群: 糖尿···',
            way: '烹饪方式: 清···',
            content: '大数据贴士: 该制作方式下，本菜品内碳水化合物占18.03%，蛋白质···',
        },
        {
            id: '2',
            name: '羊肉炒饼',
            compose: '菜品食材: 油饼200克,羊肉(瘦)75克···',
            suit: '适宜人群: 糖尿···',
            way: '烹饪方式: 炒···',
            content: '大数据贴士: 该制作方式下，本菜品内碳水化合物占16.81%，蛋白质···',
        },
        {
            id: '3',
            name: '大枣粥',
            compose: '菜品食材: 粳米100克,枣(干)50克,枣(···',
            suit: '适宜人群: 糖尿···',
            way: '烹饪方式: 煮···',
            content: '大数据贴士: 该制作方式下，本菜品内碳水化合物占88.49%，蛋白质···',
        },
        {
            id: '4',
            name: '红薯糯米饼',
            compose: '菜品食材: 甘薯200克,糯米粉200克···',
            suit: '适宜人群: 糖尿···',
            way: '烹饪方式: 煎···',
            content: '大数据贴士: 该制作方式下，本菜品内碳水化合物占85.75%，蛋白质···',
        },
        {
            id: '5',
            name: '桃仁鸡丁',
            compose: '菜品食材: 鸡胸脯肉300克,核桃100···',
            suit: '适宜人群: 糖尿···',
            way: '烹饪方式:  炒···',
            content: '大数据贴士: 该制作方式下，本菜品内碳水化合物占15.88%，蛋白质···',
        },
        {
            id: '6',
            name: '八宝粥',
            compose: '菜品食材: 粳米150克,芡实米6克,薏···',
            suit: '适宜人群: 糖尿···',
            way: '烹饪方式: 煮···',
            content: '大数据贴士: 该制作方式下，本菜品内碳水化合物占87.42%，蛋白质···',
        },
        {
            id: '7',
            name: '银耳粥',
            compose: '菜品食材: 粳米50克,银耳(干)5克,冰···',
            suit: '适宜人群: 糖尿···',
            way: '烹饪方式: 煮···',
            content: '大数据贴士: 该制作方式下，本菜品内碳水化合物占90.12%，蛋白质···',
        },
        {
            id: '8',
            name: '可乐鸡块',
            compose: '菜品食材: 鸡翅600克,可乐350克,酱···',
            suit: '适宜人群: 糖尿···',
            way: '烹饪方式: 炸···',
            content: '大数据贴士: 该制作方式下，本菜品内碳水化合物占22.14%，蛋白质···',
        },
        {
            id: '9',
            name: '大肠鸡红煲',
            compose: '菜品食材: 酸白菜200克,猪大肠640···',
            suit: '适宜人群: 糖尿···',
            way: '烹饪方式: 煮···',
            content: '大数据贴士: 该制作方式下，本菜品内碳水化合物占6.02%，蛋白质···',
        },
    ]
    const onSearch = (value, _e, info) => {
        console.log(info?.source, value);
    }
    const addlabel = (name, e) => {
        console.log(name);
        setsearch_value(name);
    }
    return (
        <>
            <Header></Header>
            <div className="title">
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
                <div className="buttons">
                    <div className="left">
                        <div>人群查询:</div>
                        <Button size="small" onClick={(e) => addlabel('高血压', e)}>高血压</Button>
                        <Button size="small" onClick={(e) => addlabel('糖尿病', e)}>糖尿病</Button>
                        <Button size="small" onClick={(e) => addlabel('孕妇', e)}>孕妇</Button>
                    </div>
                    <div className="right">
                        <div>营养查询:</div>
                        <Button size="small" onClick={(e) => addlabel('低脂肪', e)}>低脂肪</Button>
                        <Button size="small" onClick={(e) => addlabel('低胆固醇', e)}>低胆固醇</Button>
                        <Button size="small" onClick={(e) => addlabel('低钠', e)}>低钠</Button>
                    </div>
                </div>
            </div>
            <div className="main">
                <div style={{ margin: '50px 0px 20px 0px' }}>搜索到以下结果</div>
                <div className="dataList">
                    {
                        dataList.length > 0 && dataList.map((item) => {
                            return (
                                <div className="databox">
                                    <div style={{ fontSize: 'large', margin: '20px' }}>{item.name}</div>
                                    <div>
                                        <span>{item.compose}</span>
                                        <span>{item.suit}</span>
                                        <span>{item.way}</span>
                                        <span>{item.content}</span>
                                    </div>
                                    <Divider />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Search;