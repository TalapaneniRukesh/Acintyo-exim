import React from "react";
import DealsCard from "./dealscard";
import OngoingDeals from "./jsonfiles/ongoingdeals.json";
import OtherDeals from "./jsonfiles/deals.json";
import Dealers from "./dealers";

function DealsContent({ activeTab, setShowNewDeal }) {
  return (
    <div>
      {activeTab === "myDeals" && <Dealers />}
      {activeTab === "onGoing" && (
        <DealsCard
          setShowNewDeal={setShowNewDeal}
          type={activeTab}
          data={OngoingDeals}
        />
      )}
      {["pending", "reports", "history"].includes(activeTab) && (
        <DealsCard
          setShowNewDeal={setShowNewDeal}
          type={activeTab}
          data={OtherDeals}
        />
      )}
    </div>
  );
}

export default DealsContent;
