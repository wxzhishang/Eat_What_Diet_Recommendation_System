import React from "react";
import Header from "../../components/Header";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import "./index.css"

function Home() {
    const navigate = useNavigate();
    const toQuery = () => {
        navigate("/query")
    }
    return (
        <>
            <Header></Header>
            <div className="backGround">
                <Button theme="solid" type="primary" className="btn" onClick={toQuery}>营养查询→</Button>
            </div>
            <div>

            </div>
        </>
    )
}

export default Home;