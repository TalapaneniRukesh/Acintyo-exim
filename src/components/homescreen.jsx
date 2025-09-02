import React, { useState } from "react";
import Footer from "./footer";
import Header from "./header";
import TabSection from "./tabsection";

function HomeScreen() {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div>
      <Header selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <TabSection setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
      <Footer />
    </div>
  );
}

export default HomeScreen;
