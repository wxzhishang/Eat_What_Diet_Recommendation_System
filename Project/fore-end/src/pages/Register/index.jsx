import React from "react";
import "./index.css"
import { Input } from '@douyinfe/semi-ui';
import { useNavigate } from 'react-router-dom';
function Home() {
    const navigate = useNavigate();
    const toLogin = ()=>{
        navigate("/")
    };
    return (
        <>
            <div class='register-container'>
                <div class='register-main'>
                    <div class="register-head">
                        账户注册
                    </div>
                    <div class="element">
                        <span class="register-span">
                            手机号&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                        <Input showClear placeholder='请输入手机号' size='large' style={{width: '200px'}}></Input>
                        <button class="register1-btn">发送验证码</button>
                    </div>
                    <div class="element">
                        <span class="register-span">
                            验证码&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                        <Input showClear placeholder='请输入验证码' size='large' style={{width: '300px'}}></Input>
                    </div>
                    <div class="element">
                        <span class="register-span">
                            密码&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                        <Input showClear placeholder='请输入密码' mode="password" size='large' style={{width: '300px'}}></Input>
                    </div>
                    <div class="element">
                        <span class="register-span">
                            确认密码&nbsp;
                        </span>
                        <Input showClear placeholder='请确认密码' mode="password" size='large' style={{width: '300px'}}></Input>
                    </div>
                    <button class="register-btn" onClick={toLogin}>注册</button>
                </div>
            </div>
        </>
    )
}

export default Home;