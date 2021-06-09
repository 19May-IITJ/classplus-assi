import React, { useState, useEffect } from "react";
import "./SearchPage.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { Typography } from "antd";
import Loader from "../Loader/Loader";
import SearchBar from "../SearchBar/SearchBar";
import ImageGrid from "../ImageGrid/ImageGrid";
import useStoredOptions from "../../hooks/useStoredOptions";
import useFlickrAPI from "../../hooks/useFlickrAPI";
const { Title } = Typography;

const initPhotoState = { page: 1, pages: 10, list: [] };

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const { itemList: options, addItem } = useStoredOptions("OPTIONS");
  const [photos, setPhotos] = useState(initPhotoState);
  const { fetchRecentData, fetchQueryData } = useFlickrAPI();
  const [loading, setLoading] = useState(false);

  const onChange = (val) => {
    if (val && val.length > 0) addItem(val);
    setPhotos(initPhotoState);
    setLoading(true);
    setQuery(val);
    fetchAndUpdateData(val);
  };

  const fetchData = (val, pageNo = 1, perPage = 20) => {
    if (!val || val.length === 0) return fetchRecentData(pageNo, perPage);
    else return fetchQueryData(val, pageNo, perPage);
  };

  const fetchAndUpdateData = (val, pageNo = 1, perPage = 20) => {
    setLoading(true);
    return new Promise((resolve, reject) =>
      fetchData(val, pageNo, perPage)
        .then((res) => {
          setLoading(false);
          setPhotos((photos) => ({
            page: res.page,
            pages: res.pages,
            list: [...photos.list, ...res.photo],
          }));
          resolve(res);
        })
        .catch((e) => {
          console.error(e);
          reject(e);
        })
    );
  };

  useEffect(() => {
    fetchAndUpdateData(query);
  }, []);

  return (
    <>
      <div className="imagegrid-container">
        {/* <Title className="heading">Search Photos</Title> */}
        <div className="search-bar">
          <SearchBar
            value={query}
            onChange={onChange}
            options={options}
            loading={loading}
          />
        </div>
        <div className="imagegrid">
          <InfiniteScroll
            dataLength={photos.list}
            next={() => {
              fetchAndUpdateData(query, photos.page + 1);
            }}
            hasMore={!loading && photos.page !== photos.pages}
            loader={<Loader />}
          >
            {!photos.list.length ? (
              <Loader />
            ) : (
              <ImageGrid imageList={photos.list} loading={loading} />
            )}
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
