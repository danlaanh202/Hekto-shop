import axios from "axios";
import React, { useEffect, useState } from "react";
import BannerTitle from "../components/banner-title/BannerTitle";
import FilterCat from "../components/filter/FilterCat";
import GridView from "../components/modules/shop/gridView/GridView";
import ListView from "../components/modules/shop/listView/ListView";

const ShopPage = ({ title = "" }) => {
  const [view, setView] = useState(0); // 0 is grid, 1 is list view
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("use effect");
    const getData = async () => {
      try {
        await axios
          .get(`${process.env.REACT_APP_API_URL}/product/get-product`)
          .then((response) => {
            setData(response.data);
          });
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);
  return (
    <>
      <BannerTitle title={title} />
      <FilterCat setView={setView} view={view} />
      {view === 0 ? <GridView data={data} /> : <ListView data={data} />}
    </>
  );
};

export default ShopPage;
