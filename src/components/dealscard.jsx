import React, { useState } from "react";
import DealersCard from "./dealers";

function DealsCard({ data, type, setShowNewDeal }) {
  const [show, setShow] = useState(false);
  return (
    <>
      {show ? (
        <DealersCard type="onGoing" />
      ) : (
        <div>
          <div className="tae pb2">
            <span
              className="cursor new-deal-btn bdr-radius-10 txt-clr-bg white-clr ptb1 plr1-5"
              onClick={() => setShowNewDeal(true)}
            >
              Create new deal
            </span>
          </div>
          {data.map((val, idx) => (
            <div
              className="deals-container bdr-radius-10 bg-white p20 flx gap-30 mt2"
              onClick={() => type === "onGoing" && setShow(true)}
            >
              <img src={val.img} alt={val.product} height="130" />
              <div style={{ width: "100%" }}>
                <div className="flx justify-between align-center pl1 pb0-5 deal-bdr-btm">
                  <div className="font15 fntBold amount-val-clr">
                    {val.product}
                  </div>
                  <div className="font13 txt-clr">{val.published}</div>
                </div>
                <div className="ptb2 pl0-7 flx gap-100">
                  <table className="font14">
                    <tbody>
                      <tr>
                        <td className="fntBold txt-clr pb0-5">Product</td>
                        <td className="pl3 txt-clr pb0-5">{val.product}</td>
                      </tr>
                      <tr>
                        <td className="fntBold txt-clr">Quantity</td>
                        <td className="pl3 txt-clr">{val.quantity}</td>
                      </tr>
                      <tr>
                        <td className="fntBold txt-clr">Quoted Amount</td>
                        <td className="pl3 txt-clr">{val.amount}</td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="font14">
                    <tbody>
                      <tr>
                        <td className="fntBold txt-clr pb0-5">Packaging</td>
                        <td className="pl3 txt-clr pb0-5">{val.packing}</td>
                      </tr>
                      <tr>
                        <td className="fntBold txt-clr">Delivery Date</td>
                        <td className="pl3 txt-clr">{val.date}</td>
                      </tr>
                      <tr>
                        <td className="fntBold txt-clr">
                          {type === "onGoing" ? "Status" : "Dealers"}
                        </td>
                        <td
                          className={`pl3 fntBold ${
                            type === "onGoing" ? "green-clr" : "red-clr"
                          }`}
                        >
                          {type === "onGoing" ? val.status : val.dealers}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default DealsCard;
