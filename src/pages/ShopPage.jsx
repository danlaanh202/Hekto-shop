import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BannerTitle from "../components/banner-title/BannerTitle";
import FilterCat from "../components/filter/FilterCat";
import GridView from "../components/modules/shop/gridView/GridView";
import ListView from "../components/modules/shop/listView/ListView";

const ShopPage = ({ title = "" }) => {
  const [view, setView] = useState(0); // 0 is grid, 1 is list view
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("")

  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const getData = async () => {
      
      try {
        await axios
          .get(searchInput !== "" ? `${process.env.REACT_APP_API_URL}/search/get-search-products?search=${searchInput}` : `${process.env.REACT_APP_API_URL}/product/get-product`)
          .then((response) => {
            setData(response.data);
          });
      } catch (err) {
        console.log(err);
      }
      finally{
        setLoading(false)
      }
    };
    getData();
  }, [searchInput]);
  return (
    <>
      <BannerTitle title={title} />
      <FilterCat setView={setView} view={view} setLoading={setLoading} searchInput={searchInput} setSearchInput={setSearchInput} />
    
      { view === 0 ? <GridView data={data} loading={loading} /> : <ListView data={data} loading={loading} />}
    </>
  );
};

export default ShopPage;
