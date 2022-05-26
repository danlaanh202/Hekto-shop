import React, { useState } from "react";
import BannerTitle from "../components/banner-title/BannerTitle";
import FilterCat from "../components/filter/FilterCat";
import GridView from "../components/modules/shop/gridView/GridView";
import ListView from "../components/modules/shop/listView/ListView";

const ShopPage = () => {
  const [view, setView] = useState(0); // 0 is grid, 1 is list view
  const [data, setData] = useState([]);
  console.log(view);
  return (
    <>
      <BannerTitle title="Shop Page Default" />
      <FilterCat setView={setView} view={view} />
      {view === 0 ? <GridView data={data} /> : <ListView data={data} />}
    </>
  );
};

export default ShopPage;
