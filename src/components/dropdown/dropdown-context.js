import { createContext, useContext, useState } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";

const DropdownContext = createContext();
function DropdownProvider(props) {
  const {show,
  setShow,
  nodeRef,} = useClickOutside(false);
  const handleToggleDropdown = () => {
    setShow(!show);
  };
  const values = { show, setShow, nodeRef, handleToggleDropdown, ...props };
  return (
    <DropdownContext.Provider value={values}>
      {props.children}
    </DropdownContext.Provider>
  );
}
function useDropdown() {
  const context = useContext(DropdownContext);
  if (typeof context === "undefined")
    throw new Error("useDropdown must be used within DropdownProvider");
  return context;
}
export { useDropdown, DropdownProvider };
