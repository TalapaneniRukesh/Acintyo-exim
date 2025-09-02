import React from "react";
import Constants from "../constants/constants";
import Dealers from "./jsonfiles/dealers.json";

function DealersCard({ type }) {
  return (
    <>
      <div className="deals-container bdr-radius-10 bg-white posRel white-clr">
        <div className="deal-header ptb1-5">
          <span className="pl-200 font15 fntBold">Basmati Rice (Kasturi)</span>
          <span className="font13 posAbs right0 pr2">
            Published On 28/04/2022 12:30pm
          </span>
        </div>
        <img
          src="/assets/images/deals/rice.png"
          height="130"
          className="posAbs left20 top20"
        />
        <div className="pl-200 ptb2 flx gap-100">
          <table className="font14">
            <tbody>
              <tr>
                <td className="fntBold txt-clr pb0-5">Product</td>
                <td className="pl3 txt-clr pb0-5">Basmati Rice (Kasturi)</td>
              </tr>
              <tr>
                <td className="fntBold txt-clr">Quantity</td>
                <td className="pl3 txt-clr">2000 kg</td>
              </tr>
              <tr>
                <td className="fntBold txt-clr">Quoted Amount</td>
                <td className="pl3 txt-clr">6000 AED ( د.إ )</td>
              </tr>
            </tbody>
          </table>
          <table className="font14">
            <tbody>
              <tr>
                <td className="fntBold txt-clr pb0-5">Packaging</td>
                <td className="pl3 txt-clr pb0-5">25 kg bags</td>
              </tr>
              <tr>
                <td className="fntBold txt-clr">Delivery Date</td>
                <td className="pl3 txt-clr">30 NOV 2022</td>
              </tr>
              <tr>
                <td className="fntBold txt-clr">Dealers</td>
                <td className="pl3" style={{ color: "#009E07" }}>
                  3
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {Dealers.map((dealer, idx) => (
        <div className="pt2">
          <div className="deals-container bdr-radius-10 bg-white ptb2 plr3 flx justify-between">
            <div className="flx">
              <div className="dealer-img tac">
                <img
                  src={dealer.img}
                  alt="dealer"
                  height="70"
                  width={idx === 1 ? "" : "170"}
                />
              </div>
              <div className="divider mlr2"></div>
              <div>
                <div className="txt-clr fntBold">{dealer.name}</div>
                <div className="font12 addr-txt-clr dealer-addr">
                  {dealer.address}
                </div>
              </div>
            </div>
            <div>
              <div className="amount-txt-clr">Quoted Amount</div>
              <div className="amount-val-clr font22 fntBold">
                ${dealer.amount}
              </div>
            </div>
            {type && type === "onGoing" ? (
              <div>
                <div className="amount-txt-clr">Status</div>
                <div
                  className="amount-val-clr fntBold"
                  style={{ color: "#4EB664" }}
                >
                  <span className="circle mr0-5"></span>
                  <span>Accepted</span>
                </div>
              </div>
            ) : (
              <div>
                <div className="review-btn-bdr bdr-radius-5 mb1 tac txt-clr ptb0-5 plr3">
                  {Constants.REVIEW_TEXT}
                </div>
                <div className="bdr-radius-5 white-clr tac txt-clr-bg ptb0-5 plr3">
                  {Constants.ACCEPT_TEXT}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
}

export default DealersCard;
