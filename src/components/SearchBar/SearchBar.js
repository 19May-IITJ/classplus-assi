import React from "react";
import { AutoComplete } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const SearchBar = ({ value, onChange, options }) => {
  const limitOptions = () => {
    return options
      .filter((option) => option.value.startsWith(value))
      .slice(0, 5);
  };

  return (
    <AutoComplete
      value={value}
      options={limitOptions()}
      style={{ width: 200 }}
      //   onSearch={onSearch}
      onChange={onChange}
      // allowClear
      suffixIcon={<SearchOutlined />}
      // showSearch
      autoFocus
      // clearIcon
      placeholder="Search photos..."
    />
  );
};

export default SearchBar;
