import React from "react";
import useClickOutSide from "../hook/useClickOutSide";

const Dropdown = () => {
  const { nodeRef: dropdownRef1, show, setShow } = useClickOutSide();
  return (
    <div className="relative w-full max-w-[400px]" ref={dropdownRef1}>
      <div
        className="p-5 border rounded-lg w-full cursor-pointer border-gray-200"
        onClick={() => setShow(!show)}
      >
        Select
      </div>
      {show && (
        <div className="border border-gray-200 rounded-lg absolute left-0 w-full bg-white top-full">
          <div className="p-5 cursor-pointer">Javascript</div>
          <div className="p-5 cursor-pointer">ReactJS</div>
          <div className="p-5 cursor-pointer">VueJS</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
