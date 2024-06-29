import React from "react";
import "./index.css";
import Header from "../../components/Header";
import { Input } from "antd";
import { Nav } from "@douyinfe/semi-ui";
const { Search } = Input;

function Share() {
  return (
    <>
      <Header />
      <div class="head">
        <Search
          placeholder="搜索"
          size="large"
          style={{ width: "600px", textAlign: "center" }}
        />
      </div>
      <div class="nav">
        <Nav
          mode={"horizontal"}
          items={[
            { itemKey: "tuijian", text: "推荐" },
            { itemKey: "gaokao", text: "高考" },
            { itemKey: "chuanda", text: "穿搭" },
            { itemKey: "food", text: "美食" },
            { itemKey: "caizhuang", text: "彩妆" },
            { itemKey: "yingshi", text: "影视" },
            { itemKey: "zhichang", text: "职场" },
            { itemKey: "jiajv", text: "家具" },
            { itemKey: "youxi", text: "游戏" },
            { itemKey: "lvxing", text: "旅行" },
            { itemKey: "jianshen", text: "健身" },
            { itemKey: "shijie", text: "世界" },
          ]}
          onSelect={(key) => console.log(key)}
        />
      </div>
      <div class="container" id="con">
        <div class="item">
          <img
            src="https://tse2-mm.cn.bing.net/th/id/OIP-C.mH9YLFEL5YdVxJM82mjVJQAAAA?rs=1&pid=ImgDetMain"
            alt=""
          />
          <div class="footer">
            <div class="title">天空风景</div>
            <div class="author">孙悟空</div>
          </div>
        </div>
        <div class="item">
          <img
            src="https://ts1.cn.mm.bing.net/th/id/R-C.6b9074faed6dae2a0457e690c2aa3a03?rik=6V%2fv2rXhPCf7Pg&riu=http%3a%2f%2fn.sinaimg.cn%2fsinacn20115%2f534%2fw1280h854%2f20190221%2f9461-htknpmf9890147.jpg&ehk=RyGDdQrMiIWbz7Uxa%2fLSPOz2iXvM8JpbkBIZgttQkWc%3d&risl=&pid=ImgRaw&r=0"
            alt=""
          />
          <div class="footer">
            <div class="title">雪山</div>
            <div class="author">燃灯古佛</div>
          </div>
        </div>
        <div class="item">
          <img
            src="https://ts1.cn.mm.bing.net/th/id/R-C.8d52fd88fbacb0bc34afa0d3e3d3fbf0?rik=YLBGQ2YxYJczDg&riu=http%3a%2f%2fwww.08lr.cn%2fuploads%2fallimg%2f220330%2f1-2300134436.jpg&ehk=h6QkPS87X6L6Vb7h5F10YmPZlLWLGKOMcKNcY9zMLRA%3d&risl=&pid=ImgRaw&r=0"
            alt=""
          />
          <div class="footer">
            <div class="title">雪景</div>
            <div class="author">齐天大圣</div>
          </div>
        </div>
        <div class="item">
          <img
            src="https://ts1.cn.mm.bing.net/th/id/R-C.3745122e5760fe2283195293d76bc1e0?rik=YBMOcCcn7CX6Ig&riu=http%3a%2f%2fup.deskcity.org%2fpic%2f20%2fe4%2f4d%2f20e44dce0fe116832ba890edaf2ede32.jpg&ehk=vldj1pqTKyKgirU8ck%2f%2bJWEhtPm22Owe5VEmGNMeLpA%3d&risl=&pid=ImgRaw&r=0"
            alt=""
          />
          <div class="footer">
            <div class="title">山水</div>
            <div class="author">猪八戒</div>
          </div>
        </div>
        <div class="item">
          <img
            src="https://img95.699pic.com/photo/60012/9280.jpg_wh860.jpg"
            alt=""
          />
          <div class="footer">
            <div class="title">绿草</div>
            <div class="author">天蓬元帅</div>
          </div>
        </div>
        <div class="item">
          <img
            src="https://img.zcool.cn/community/01e4315542ab990000019ae99f4ef0.jpg@1280w_1l_2o_100sh.jpg"
            alt=""
          />
          <div class="footer">
            <div class="title">溪流</div>
            <div class="author">沙僧</div>
          </div>
        </div>
        <div class="item">
          <img
            src="https://tse3-mm.cn.bing.net/th/id/OIP-C.jdP04yEoxG10mcywseQj7gAAAA?rs=1&pid=ImgDetMain"
            alt=""
          />
          <div class="footer">
            <div class="title">球体</div>
            <div class="author">唐僧</div>
          </div>
        </div>
        <div class="item">
          <img
            src="https://img.shetu66.com/2023/04/25/1682405982916194.png"
            alt=""
          />
          <div class="footer">
            <div class="title">熊猫</div>
            <div class="author">卷帘大将</div>
          </div>
        </div>
        <div class="item">
          <img
            src="https://ts1.cn.mm.bing.net/th/id/R-C.2dfdaed9d3e59f8e20462202ec847723?rik=J06C3PjIKrv2gg&riu=http%3a%2f%2fup.deskcity.org%2fpic%2f202010%2fdt%2fqcyrevgybb31914.jpg&ehk=YrflT4NTtOIFDL7cWfvPYExD3esBhvVDT4en8CPqbx4%3d&risl=&pid=ImgRaw&r=0"
            alt=""
          />
          <div class="footer">
            <div class="title">夕阳</div>
            <div class="author">太上老君</div>
          </div>
        </div>
        <div class="item">
          <img
            src="https://ts1.cn.mm.bing.net/th/id/R-C.9e45a633e95179a37c907fa2797999ad?rik=aMuPS4TunAh5ZA&riu=http%3a%2f%2fwww.quazero.com%2fuploads%2fallimg%2f140303%2f1-140303214Q2.jpg&ehk=P%2firfYpARc1fHht%2bWpapYR4W15p6SLABE8CBexoeon4%3d&risl=&pid=ImgRaw&r=0"
            alt=""
          />
          <div class="footer">
            <div class="title">湖</div>
            <div class="author">元始天尊</div>
          </div>
        </div>
        <div class="item">
          <img
            src="https://pic4.zhimg.com/v2-14098590ffdbf8a4a3e0db52c07fdded_r.jpg?source=1940ef5c"
            alt=""
          />
          <div class="footer">
            <div class="title">傍晚</div>
            <div class="author">玉皇大帝</div>
          </div>
        </div>
        <div class="item">
          <img
            src="https://img95.699pic.com/photo/40250/3647.jpg_wh300.jpg"
            alt=""
          />
          <div class="footer">
            <div class="title">爱心</div>
            <div class="author">如来佛祖</div>
          </div>
        </div>
        <div class="item">
          <img
            src="https://tse4-mm.cn.bing.net/th/id/OIP-C.cGjCuP5ghtV5SuGhFWIqUAHaHa?rs=1&pid=ImgDetMain"
            alt=""
          />
          <div class="footer">
            <div class="title">山水湖</div>
            <div class="author">太白金星</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Share;
