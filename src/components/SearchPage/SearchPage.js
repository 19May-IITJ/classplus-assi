import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGrid from "../ImageGrid/ImageGrid";
import useStoredOptions from "../../hooks/useStoredOptions";
import useFlickrAPI from "../../hooks/useFlickrAPI";
import "./SearchPage.css";
import { Space } from "antd";
import { Typography } from "antd";
const { Title } = Typography;

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const { itemList: options, addItem } = useStoredOptions("OPTIONS");
  const [imageListDefault, setImageListDefault] = useState([]);
  const [imageList, setImageList] = useState([]);
  const { fetchRecentData, fetchQueryData } = useFlickrAPI();

  const onChange = (val) => {
    if (val.length === 0)
      fetchRecentData().then((res) => setImageList(res.photo));
    else {
      setQuery(val);
      addItem(val);
      fetchQueryData(val).then((res) => setImageList(res.photo));
    }
  };

  const updateInput = async (input) => {
    const filtered = imageListDefault.filter((country) => {
      return country.name.toLowerCase().includes(input.toLowerCase());
    });
    // setInput(input);
    setImageList(filtered);
  };

  useEffect(() => {
    fetchRecentData().then((res) => setImageList(res.photo));
  }, []);

  return (
    <>
      <Space className="imagegrid-container">
        <Title className="heading">Search Photos</Title>
        <SearchBar value={query} onChange={onChange} options={options} />
        <ImageGrid imageList={imageList} className="imagegrid" />
      </Space>
    </>
  );
};

export default SearchPage;
