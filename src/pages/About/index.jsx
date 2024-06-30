import React from "react";
import Header from "../../components/Header";
import "./index.css";
import { Card } from "antd";
const { Meta } = Card;
function About() {
  return (
    <>
      <div>
        <Header />
        <div className="about-contain">
          <div className="about-title">
            <p style={{ textAlign: "center", fontSize: "44px" }}>联系我们</p>
          </div>
          <div className="contact-phone">
            <p className="phone-num-line">
              <span className="line-ch">电话：12345678901</span>
              <span className="line-ch">邮箱：123456789000@qq.com</span>
            </p>
          </div>
          <div className="about-main">
            <div className="about-item">
              <div className="about-map-title">
                <img
                  src="https://ts1.cn.mm.bing.net/th/id/R-C.242862f00e7c49c88415d050fc3cc40e?rik=q5ZpQszC4FgJHA&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fKTj%2fkL8%2fKTjkL8ETq.jpeg&ehk=IIN0IaeLxWugan1GOn7sPCj6zA6HFGLYetaHv36gwrA%3d&risl=&pid=ImgRaw&r=0"
                  alt=""
                  className="about-img"
                />
                <span className="about-span">北京</span>
              </div>
              <hr />
              <div className="about-map-box">
                <div className="about-box-left">
                  <Card
                    hoverable
                    style={{
                      width: 500,
                    }}
                    cover={
                      <img
                        alt="example"
                        src="https://pic35.photophoto.cn/20150511/0034034892281415_b.jpg"
                      />
                    }
                  >
                    <Meta
                      title="Europe Street beat"
                      description="www.instagram.com"
                    />
                  </Card>
                </div>
                <div className="about-box-right">
                  <Card
                    style={{
                      width: 500,
                      height:400,
                    }}
                  >
                    <h1 style={{textAlign:'center',color:'blue'}}>地点1</h1>
                    <p className="about-box-p">北京市海淀区上地十街10号百度大厦</p>
                    <p className="about-box-p">Baidu Campus, No. 10 Shangdi 10th Street, Haidian District, Beijing, China</p>
                    <p className="about-box-p">邮 编：100085</p>
                    <p className="about-box-p">Post Code：100085</p>
                  </Card>
                </div>
              </div>
            </div>
            <div className="about-item">
              <div className="about-map-title">
                <img
                  src="https://ts1.cn.mm.bing.net/th/id/R-C.242862f00e7c49c88415d050fc3cc40e?rik=q5ZpQszC4FgJHA&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fKTj%2fkL8%2fKTjkL8ETq.jpeg&ehk=IIN0IaeLxWugan1GOn7sPCj6zA6HFGLYetaHv36gwrA%3d&risl=&pid=ImgRaw&r=0"
                  alt=""
                  className="about-img"
                />
                <span className="about-span">北京</span>
              </div>
              <hr />
              <div className="about-map-box">
                <div className="about-box-left">
                  <Card
                    hoverable
                    style={{
                      width: 500,
                    }}
                    cover={
                      <img
                        alt="example"
                        src="https://pic35.photophoto.cn/20150511/0034034892281415_b.jpg"
                      />
                    }
                  >
                    <Meta
                      title="Europe Street beat"
                      description="www.instagram.com"
                    />
                  </Card>
                </div>
                <div className="about-box-right">
                  <Card
                    style={{
                      width: 500,
                      height:400,
                    }}
                  >
                    <h1 style={{textAlign:'center',color:'blue'}}>地点1</h1>
                    <p className="about-box-p">北京市海淀区上地十街10号百度大厦</p>
                    <p className="about-box-p">Baidu Campus, No. 10 Shangdi 10th Street, Haidian District, Beijing, China</p>
                    <p className="about-box-p">邮 编：100085</p>
                    <p className="about-box-p">Post Code：100085</p>
                  </Card>
                </div>
              </div>
            </div>
            <div className="about-item">
              <div className="about-map-title">
                <img
                  src="https://ts1.cn.mm.bing.net/th/id/R-C.242862f00e7c49c88415d050fc3cc40e?rik=q5ZpQszC4FgJHA&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fKTj%2fkL8%2fKTjkL8ETq.jpeg&ehk=IIN0IaeLxWugan1GOn7sPCj6zA6HFGLYetaHv36gwrA%3d&risl=&pid=ImgRaw&r=0"
                  alt=""
                  className="about-img"
                />
                <span className="about-span">北京</span>
              </div>
              <hr />
              <div className="about-map-box">
                <div className="about-box-left">
                  <Card
                    hoverable
                    style={{
                      width: 500,
                    }}
                    cover={
                      <img
                        alt="example"
                        src="https://pic35.photophoto.cn/20150511/0034034892281415_b.jpg"
                      />
                    }
                  >
                    <Meta
                      title="Europe Street beat"
                      description="www.instagram.com"
                    />
                  </Card>
                </div>
                <div className="about-box-right">
                  <Card
                    style={{
                      width: 500,
                      height:400,
                    }}
                  >
                    <h1 style={{textAlign:'center',color:'blue'}}>地点1</h1>
                    <p className="about-box-p">北京市海淀区上地十街10号百度大厦</p>
                    <p className="about-box-p">Baidu Campus, No. 10 Shangdi 10th Street, Haidian District, Beijing, China</p>
                    <p className="about-box-p">邮 编：100085</p>
                    <p className="about-box-p">Post Code：100085</p>
                  </Card>
                </div>
              </div>
            </div>
            <div className="about-item">
              <div className="about-map-title">
                <img
                  src="https://ts1.cn.mm.bing.net/th/id/R-C.242862f00e7c49c88415d050fc3cc40e?rik=q5ZpQszC4FgJHA&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fKTj%2fkL8%2fKTjkL8ETq.jpeg&ehk=IIN0IaeLxWugan1GOn7sPCj6zA6HFGLYetaHv36gwrA%3d&risl=&pid=ImgRaw&r=0"
                  alt=""
                  className="about-img"
                />
                <span className="about-span">北京</span>
              </div>
              <hr />
              <div className="about-map-box">
                <div className="about-box-left">
                  <Card
                    hoverable
                    style={{
                      width: 500,
                    }}
                    cover={
                      <img
                        alt="example"
                        src="https://pic35.photophoto.cn/20150511/0034034892281415_b.jpg"
                      />
                    }
                  >
                    <Meta
                      title="Europe Street beat"
                      description="www.instagram.com"
                    />
                  </Card>
                </div>
                <div className="about-box-right">
                  <Card
                    style={{
                      width: 500,
                      height:400,
                    }}
                  >
                    <h1 style={{textAlign:'center',color:'blue'}}>地点1</h1>
                    <p className="about-box-p">北京市海淀区上地十街10号百度大厦</p>
                    <p className="about-box-p">Baidu Campus, No. 10 Shangdi 10th Street, Haidian District, Beijing, China</p>
                    <p className="about-box-p">邮 编：100085</p>
                    <p className="about-box-p">Post Code：100085</p>
                  </Card>
                </div>
              </div>
            </div>
            <div className="about-item">
              <div className="about-map-title">
                <img
                  src="https://ts1.cn.mm.bing.net/th/id/R-C.242862f00e7c49c88415d050fc3cc40e?rik=q5ZpQszC4FgJHA&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fKTj%2fkL8%2fKTjkL8ETq.jpeg&ehk=IIN0IaeLxWugan1GOn7sPCj6zA6HFGLYetaHv36gwrA%3d&risl=&pid=ImgRaw&r=0"
                  alt=""
                  className="about-img"
                />
                <span className="about-span">北京</span>
              </div>
              <hr />
              <div className="about-map-box">
                <div className="about-box-left">
                  <Card
                    hoverable
                    style={{
                      width: 500,
                    }}
                    cover={
                      <img
                        alt="example"
                        src="https://pic35.photophoto.cn/20150511/0034034892281415_b.jpg"
                      />
                    }
                  >
                    <Meta
                      title="Europe Street beat"
                      description="www.instagram.com"
                    />
                  </Card>
                </div>
                <div className="about-box-right">
                  <Card
                    style={{
                      width: 500,
                      height:400,
                    }}
                  >
                    <h1 style={{textAlign:'center',color:'blue'}}>地点1</h1>
                    <p className="about-box-p">北京市海淀区上地十街10号百度大厦</p>
                    <p className="about-box-p">Baidu Campus, No. 10 Shangdi 10th Street, Haidian District, Beijing, China</p>
                    <p className="about-box-p">邮 编：100085</p>
                    <p className="about-box-p">Post Code：100085</p>
                  </Card>
                </div>
              </div>
            </div>
            <div className="about-item">
              <div className="about-map-title">
                <img
                  src="https://ts1.cn.mm.bing.net/th/id/R-C.242862f00e7c49c88415d050fc3cc40e?rik=q5ZpQszC4FgJHA&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fKTj%2fkL8%2fKTjkL8ETq.jpeg&ehk=IIN0IaeLxWugan1GOn7sPCj6zA6HFGLYetaHv36gwrA%3d&risl=&pid=ImgRaw&r=0"
                  alt=""
                  className="about-img"
                />
                <span className="about-span">北京</span>
              </div>
              <hr />
              <div className="about-map-box">
                <div className="about-box-left">
                  <Card
                    hoverable
                    style={{
                      width: 500,
                    }}
                    cover={
                      <img
                        alt="example"
                        src="https://pic35.photophoto.cn/20150511/0034034892281415_b.jpg"
                      />
                    }
                  >
                    <Meta
                      title="Europe Street beat"
                      description="www.instagram.com"
                    />
                  </Card>
                </div>
                <div className="about-box-right">
                  <Card
                    style={{
                      width: 500,
                      height:400,
                    }}
                  >
                    <h1 style={{textAlign:'center',color:'blue'}}>地点1</h1>
                    <p className="about-box-p">北京市海淀区上地十街10号百度大厦</p>
                    <p className="about-box-p">Baidu Campus, No. 10 Shangdi 10th Street, Haidian District, Beijing, China</p>
                    <p className="about-box-p">邮 编：100085</p>
                    <p className="about-box-p">Post Code：100085</p>
                  </Card>
                </div>
              </div>
            </div>
            <div className="about-item">
              <div className="about-map-title">
                <img
                  src="https://ts1.cn.mm.bing.net/th/id/R-C.242862f00e7c49c88415d050fc3cc40e?rik=q5ZpQszC4FgJHA&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fKTj%2fkL8%2fKTjkL8ETq.jpeg&ehk=IIN0IaeLxWugan1GOn7sPCj6zA6HFGLYetaHv36gwrA%3d&risl=&pid=ImgRaw&r=0"
                  alt=""
                  className="about-img"
                />
                <span className="about-span">北京</span>
              </div>
              <hr />
              <div className="about-map-box">
                <div className="about-box-left">
                  <Card
                    hoverable
                    style={{
                      width: 500,
                    }}
                    cover={
                      <img
                        alt="example"
                        src="https://pic35.photophoto.cn/20150511/0034034892281415_b.jpg"
                      />
                    }
                  >
                    <Meta
                      title="Europe Street beat"
                      description="www.instagram.com"
                    />
                  </Card>
                </div>
                <div className="about-box-right">
                  <Card
                    style={{
                      width: 500,
                      height:400,
                    }}
                  >
                    <h1 style={{textAlign:'center',color:'blue'}}>地点1</h1>
                    <p className="about-box-p">北京市海淀区上地十街10号百度大厦</p>
                    <p className="about-box-p">Baidu Campus, No. 10 Shangdi 10th Street, Haidian District, Beijing, China</p>
                    <p className="about-box-p">邮 编：100085</p>
                    <p className="about-box-p">Post Code：100085</p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
