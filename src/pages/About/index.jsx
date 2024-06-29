import React from "react";
import Header from "../../components/Header";
import "./index.css"
function About(){
    return(
        <>
        <div>
            <Header />
            <div className="about-contain">
                <div className="about-title">
                    <p style={{textAlign:'center',fontSize:'44px'}}>
                        联系我们
                    </p>
                </div>
                <div className="contact-phone">
                    <p className="phone-num-line">
                        <span className="line-ch">
                            电话：12345678901
                        </span>
                        <span className="line-ch">
                            邮箱：123456789000@qq.com
                        </span>
                    </p>
                </div>
                <div className="about-main">

                </div>
            </div>
        </div>
        </>
    )
}

export default About;