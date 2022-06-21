import React from "react";
import styled from "styled-components";
import { Dropdown } from "../../dropdown";
import { useDropdown } from "../../dropdown/dropdown-context";

const CategoryDropdownStyles = styled.div``;
const CategoryDropdown = ({
  setValue,
  categories,
  setSelectCategories,
  selectCategories,
}) => {
  const handleClickOption = (item) => {
    setSelectCategories(item);
    setValue("category", item._id);
  };

  return (
    <CategoryDropdownStyles>
      <label htmlFor="categories">Categories</label>
      <Dropdown>
        <Dropdown.Select
          placeholder={selectCategories?.category || "Please select category"}
        ></Dropdown.Select>
        <Dropdown.List>
          {categories?.length > 0 &&
            categories.map((category) => (
              <Dropdown.Option
                onClick={() => handleClickOption(category)}
                key={category._id}
              >
                {category.category}
              </Dropdown.Option>
            ))}
        </Dropdown.List>
      </Dropdown>
    </CategoryDropdownStyles>
  );
};

export default CategoryDropdown;
