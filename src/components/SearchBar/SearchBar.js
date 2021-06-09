import React from "react";
import { AutoComplete, Input } from "antd";

const SearchBar = ({ value, onChange, options, loading }) => {
  const limitOptions = () => {
    return options
      .filter((option) => option.value.startsWith(value))
      .slice(0, 5);
  };

  return (
    <AutoComplete options={limitOptions()} onChange={onChange} autoFocus>
      <Input.Search
        value={value}
        allowClear
        size="large"
        // bordered={false}
        placeholder="Search photos..."
        // suffix={<SearchOutlined/>}
        enterButton
        loading={loading}
      />
    </AutoComplete>
  );
};

export default SearchBar;
