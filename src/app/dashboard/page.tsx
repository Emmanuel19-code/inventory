import React from "react";
import CardPopularProduct from "./CardPopularProduct";
import CardPurchaseSummary from "./CardPurchaseSummary";
import CardSalesSummary from "./CardSalesSummary";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
      <CardPopularProduct/>
      <CardSalesSummary/>
      <CardPurchaseSummary/>
      <div className="row-span-3 bg-gray-500"></div>
      <div className="md:row-span-3 xl:row-span-2 bg-gray-500">

      </div>
      <div className="md:row-span-1 xl:row-span-2 bg-gray-500">

      </div>
      <div className="md:row-span-1 xl:row-span-2 bg-gray-500">

      </div>
    </div>
  );
};

export default Dashboard;
