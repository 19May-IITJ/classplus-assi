import { useState } from "react";
require("dotenv").config();

export const useFlickrAPI = () => {
  const baseURL =
    "https://www.flickr.com/services/rest/?format=json&nojsoncallback=1";
  const api_key = process.env.REACT_APP_FLICKR_KEY;
  const [activePromises, setActivePromises] = useState([]);

  const fetchData = async (api) => {
    const controller = new AbortController();
    const signal = controller.signal;
    if (activePromises.length > 0) {
      activePromises.map((promise) => promise.cancel());
      setActivePromises([]);
    }
    const promise = new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(api, {
          signal,
        });
        const data = await response.json();
        if (data.stat === "ok") {
          resolve(data.photos);
        } else {
          reject("API failed");
        }
      } catch (e) {
        console.log(e);
      }
    });
    promise.cancel = () => controller.abort();
    setActivePromises([...activePromises, promise]);
    return promise;
  };

  const fetchRecentData = (pageNo = 1, perPage = 20) => {
    const api = `${baseURL}&method=flickr.photos.getRecent&per_page=${perPage}&page=${pageNo}&api_key=${api_key}`;
    return fetchData(api);
  };

  const fetchQueryData = (query, pageNo = 1, perPage = 20) => {
    const api = `${baseURL}&method=flickr.photos.search&text=${query}&per_page=${perPage}&page=${pageNo}&api_key=${api_key}`;
    return fetchData(api);
  };

  return { fetchRecentData, fetchQueryData };
};

export default useFlickrAPI;
