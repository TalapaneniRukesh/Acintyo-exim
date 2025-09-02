import React from "react";
import { Table } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import Constants from "../constants/constants";
import PricingData from "./jsonfiles/pricing.json";
import InvoiceData from "./jsonfiles/invoicedetails.json";

function Subscriptionstab({ tab }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  const columns = [
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Invoice Type",
      dataIndex: "type",
    },
    {
      title: "Invoice Total",
      dataIndex: "total",
      render: (text) => <>₹{text}</>,
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Invoice",
      dataIndex: "invoice",
      render: (text) => <div className="view-invoice-txt cursor">{text}</div>,
    },
  ];
  return (
    <div className={`p30 ${tab === 6 ? "exporters-bg" : "pricing-bg"}`}>
      {tab != 6 && (
        <div className="tac pricing-text">{Constants.PRICING_TEXT}</div>
      )}
      <div className="p40 flx justify-center gap-80">
        {PricingData.map((data, idx) => (
          <div className="pricing-card">
            <div className="p20">
              <div className="flx justify-between align-center fntBold pricing-title-bdr">
                <div className="pricing-title">
                  {Constants.STARTER_PLAN_TEXT}
                </div>
                <div className="price">
                  ₹{data.Starter_price}
                  <span className="month-size">/month</span>
                </div>
              </div>
              <div className="font14 ptb2">{Constants.PRICING_DESCRIPTION}</div>
              {data.specs.map((specs) => (
                <div className="flx align-center gap-10 pb1 font14">
                  {specs.bool ? <CheckOutlined /> : <CloseOutlined />}
                  <div>{specs.spec_text}</div>
                </div>
              ))}
              <div className="p20">
                <div className="buy-btn tac p1">{Constants.BUY_TEXT}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {tab === 6 && isAuthenticated && (
        <Table
          columns={columns}
          dataSource={InvoiceData}
          bordered
          pagination={{ pageSize: 5 }}
          title={() => "Invoices"}
        />
      )}
    </div>
  );
}

export default Subscriptionstab;
