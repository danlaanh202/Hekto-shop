import React from "react";
import styled from "styled-components";
import { Dropdown } from "../../dropdown";

const categories = [
  { id: 1, name: "giay" },
  { id: 2, name: "dep" },
];

const CategoryDropdownStyles = styled.div``;
const CategoryDropdown = ({ setValue, setSelectCategory, ...props }) => {
  const handleClickOption = (item) => {
    //  setValue("categoryId", item.id);
    //  setSelectCategory(item);
  };
  return (
    <CategoryDropdownStyles>
      <label htmlFor="categories">Categories</label>
      <Dropdown>
        <Dropdown.Select
          placeholder={"Please select category"}
        ></Dropdown.Select>
        <Dropdown.List>
          {categories?.length > 0 &&
            categories.map((category) => (
              <Dropdown.Option
                onClick={() => handleClickOption(category)}
                key={category.id}
              >
                {category.name}
              </Dropdown.Option>
            ))}
        </Dropdown.List>
      </Dropdown>
    </CategoryDropdownStyles>
  );
};

export default CategoryDropdown;
