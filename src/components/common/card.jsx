import React, { useState } from "react";
import { Card, Carousel, Col, Row } from "antd";
import Constants from "../../constants/constants";
import Details from "../jsonfiles/productdetails.json";

const { Meta } = Card;

function CardComponent({ Products, exporters, setSelectedTab }) {
  const [show, setShow] = useState(false);
  let images = [
    "/assets/images/products/slide1.png",
    "/assets/images/products/slide2.png",
    "/assets/images/products/slide3.png",
  ];
  return (
    <>
      {show ? (
        <div>
          <div className="p30 flx pt5 gap-50">
            <div>
              <div className="product-image">
                <Carousel autoplay pauseOnHover={false} pauseOnFocus={false}>
                  {images.map((img, idx) => (
                    <div>
                      <img key={idx} src={img} height="400" width="350" />
                    </div>
                  ))}
                </Carousel>
              </div>
              <div className="flx justify-between pt5">
                <div className="seller-btn-container fntBold tac ptb0-8">
                  {Constants.SELLER_DETAILS_TEXT}
                </div>
                <div className="deal-btn-container fntBold active-flag tac ptb0-8">
                  {Constants.CREATE_DEAL_TEXT}
                </div>
              </div>
            </div>
            <div className="font18 width-550 poppins-family flx flx-col gap-20">
              <div className="font20 login-txt-clr fntBold">
                {Details.title}
              </div>
              <div>
                <div className="fntBold light-gray-clr">
                  {Constants.PRODUCT_DESC_TEXT}
                </div>
                <div className="font17 pt1 login-txt-clr">
                  {Details.description}
                </div>
              </div>
              <div>
                <div className="fntBold light-gray-clr">
                  {Constants.PRODUCT_TITLE3_TEXT}
                </div>
                <div className="font17 pt1 login-txt-clr">{Details["ORIGIN"]}</div>
              </div>
              <div>
                <div className="fntBold light-gray-clr">
                  {Constants.PRODUCT_TITLE8_TEXT}
                </div>
                <div className="font17 pt1 login-txt-clr">
                  {Details["STORAGE CONDITIONS"]}
                </div>
              </div>
              <div>
                <div className="fntBold light-gray-clr">
                  {Constants.PRODUCT_TITLE5_TEXT}
                </div>
                <div className="font17 pt1 login-txt-clr">
                  {Details["MAJOR PRODUCING STATES/DISTRICTS IN INDIA"]}
                </div>
              </div>
              <div>
                <div className="fntBold light-gray-clr">
                  {Constants.PRODUCT_TITLE4_TEXT}
                </div>
                <div className="font17 pt1 login-txt-clr">
                  {Details["MAJOR COMMERCIAL VARIETIES"]}
                </div>
              </div>
              <div>
                <div className="fntBold light-gray-clr">
                  {Constants.PRODUCT_TITLE7_TEXT}
                </div>
                <div className="font17 pt1 login-txt-clr">
                  {Details["TOTAL PRODUCTION IN INDIA"]}
                </div>
              </div>
              <div>
                <div className="fntBold light-gray-clr">
                  {Constants.PRODUCT_TITLE2_TEXT}
                </div>
                <div className="font17 pt1 login-txt-clr">{Details["FAMILY"]}</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Row className="p40 gap-50 justify-center">
          {Products.map((product, idx) => (
            <Col
              onClick={() => {
                exporters ? setSelectedTab(4) : setShow(true);
              }}
            >
              <Card
                style={{
                  width: 250,
                }}
                cover={
                  <>
                    <img alt={product.name} src={product.img} />
                    <div className="product-hover-bg">
                      <div className="product-name">{product.name}</div>
                    </div>
                  </>
                }
                className="card-shadow"
              >
                <Meta title={product.name} description={product.description} />
                <div className="learn-more-text mt0-5">
                  {Constants.LEARN_MORE_TEXT}
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </>
  );
}

export default CardComponent;
