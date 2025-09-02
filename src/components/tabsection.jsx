import React from "react";
import BuyerSeller from "./buyerseller";
import Complaints from "./complaints";
import Listofexporters from "./listofexporters";
import NotificationsTab from "./notifications";
import ProfileTab from "./profile";
import DealsTab from "./deals";
import Subscriptionstab from "./subscriptionstab";
import Agentstab from "./tabs/agentstab";
import Hometab from "./tabs/hometab";

function TabSection({ selectedTab, setSelectedTab }) {
  const renderContent = () => {
    switch (selectedTab) {
      case 0:
        return <Hometab setSelectedTab={setSelectedTab} />;
      case 1:
        return "About Coming soon...";
      case 2:
        return (
          <>
            <BuyerSeller tab={2} />
            <Listofexporters />
          </>
        );
      case 3:
        return <Agentstab />;
      case 4:
        return <BuyerSeller tab="product" />;
      case 5:
        return "Contact Coming soon...";
      case 6:
        return <Subscriptionstab tab={6} />;
      case 7:
        return <Complaints />;
      case 9:
        return <NotificationsTab />;
      case 10:
        return <DealsTab />;
      case 11:
        return <ProfileTab />;
      default:
        break;
    }
  };

  return (
    <div className={`exporters-bg ${selectedTab != 0 && "pt6"}`}>
      {renderContent()}
    </div>
  );
}

export default TabSection;
