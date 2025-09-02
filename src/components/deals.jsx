import React from "react";
import { useState } from "react";
import DealsContent from "./dealscontent";
import NewDeal from "./newdeal";

function DealsTab() {
  const [active, setActive] = useState("myDeals");
  const [showNewDeal, setShowNewDeal] = useState(false);
  return (
    <>
      {showNewDeal ? (
        <NewDeal />
      ) : (
        <div className="flx">
          <div className="menu-bdr pt3">
            <div className="flx justify-flexEnd gap-30 pt0-5">
              <div
                className={`cursor ptb0-5 ${
                  active === "myDeals"
                    ? "font16 fntBold active-deal"
                    : "font15 white-clr"
                }`}
                onClick={() => setActive("myDeals")}
              >
                My deals
              </div>
              <div
                className={`${active === "myDeals" ? "active-deal-bdr" : ""}`}
              ></div>
            </div>
            <div className="flx justify-flexEnd gap-30 pt0-5">
              <div
                className={`cursor ptb0-5 ${
                  active === "onGoing"
                    ? "font16 fntBold active-deal"
                    : "font15 white-clr"
                }`}
                onClick={() => setActive("onGoing")}
              >
                Ongoing deals
              </div>
              <div
                className={`${active === "onGoing" ? "active-deal-bdr" : ""}`}
              ></div>
            </div>
            <div className="flx justify-flexEnd gap-30 pt0-5">
              <div
                className={`cursor ptb0-5 ${
                  active === "pending"
                    ? "font16 fntBold active-deal"
                    : "font15 white-clr"
                }`}
                onClick={() => setActive("pending")}
              >
                Pending Deals
              </div>
              <div
                className={`${active === "pending" ? "active-deal-bdr" : ""}`}
              ></div>
            </div>
            <div className="flx justify-flexEnd gap-30 pt0-5">
              <div
                className={`cursor ptb0-5 ${
                  active === "reports"
                    ? "font16 fntBold active-deal"
                    : "font15 white-clr"
                }`}
                onClick={() => setActive("reports")}
              >
                Reports
              </div>
              <div
                className={`${active === "reports" ? "active-deal-bdr" : ""}`}
              ></div>
            </div>
            <div className="flx justify-flexEnd gap-30 pt0-5">
              <div
                className={`cursor ptb0-5 ${
                  active === "history"
                    ? "font16 fntBold active-deal"
                    : "font15 white-clr"
                }`}
                onClick={() => setActive("history")}
              >
                History
              </div>
              <div
                className={`${active === "history" ? "active-deal-bdr" : ""}`}
              ></div>
            </div>
          </div>
          <div className="p30" style={{ width: "calc(100% - 250px)" }}>
            <DealsContent setShowNewDeal={setShowNewDeal} activeTab={active} />
          </div>
        </div>
      )}
    </>
  );
}

export default DealsTab;
