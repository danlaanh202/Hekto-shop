import React from "react";
import styled from "styled-components";
import { Dropdown } from "../../dropdown";

const BrandDropDownStyles = styled.div``;
const BrandDropDown = ({ setValue, brands, setSelectBrands, selectBrands }) => {
  const handleClickOption = (item) => {
    setSelectBrands(item);
    setValue("brand", item._id);
  };

  return (
    <BrandDropDownStyles>
      <label htmlFor="brands">Brands</label>
      <Dropdown>
        <Dropdown.Select
          placeholder={selectBrands?.brand || "Please select Brand"}
        ></Dropdown.Select>
        <Dropdown.List length={brands?.length}>
          {brands?.length > 0 &&
            brands.map((brand) => (
              <Dropdown.Option
                onClick={() => handleClickOption(brand)}
                key={brand._id}
              >
                {brand.brand}
              </Dropdown.Option>
            ))}
        </Dropdown.List>
      </Dropdown>
    </BrandDropDownStyles>
  );
};

export default BrandDropDown;
