import React, { useEffect, useState } from "react";
import Constants from "../constants/constants";
import { EyeOutlined } from "@ant-design/icons";
import ExportersData from "./jsonfiles/exporters.json";
import { Pagination } from "antd";

function Listofexporters({ setShow }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(11);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {}, [currentPage]);
  return (
    <div className="plr4 pt3 pb3 exporters-bg">
      <div className="flx justify-between pb2 bdr-btm">
        <div className="pl3">{Constants.EXPORTERS_TEXT}</div>
      </div>
      <div className="flx flex-wrap justify-center gap-50 p30">
        {ExportersData.map((data, idx) => (
          <div
            onClick={() => setShow && setShow(true)}
            className="card-container flx flx-col"
          >
            <div
              className="tac ptb5"
              style={{
                background:
                  data.name === "INDEPENDENT RESOURCES INDIA PVT LTD"
                    ? "#3C4072"
                    : "",
              }}
            >
              <div>
                <img src={data.src} width="200" height="70" />
              </div>
            </div>
            <div className="view-more">
              <EyeOutlined />
              {Constants.VIEW_MORE_TEXT}
            </div>
            <div className="ptb0-5 plr1-5">
              <div className="exporter-name" title={data.name}>
                {data.name}
              </div>
              <div className="exporter-addr" title={data.address}>
                {data.address}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        current={currentPage}
        onChange={onPageChange}
        total={ExportersData.length}
        className="tac"
      />
    </div>
  );
}

export default Listofexporters;
