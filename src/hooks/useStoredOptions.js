import { useState, useEffect } from "react";

const useStoredOptions = (key) => {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    const localItem = localStorage.getItem(key);
    if (localItem) setItemList(JSON.parse(localItem));
  }, [key]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(itemList));
  }, [itemList, key]);

  const isItemAlreadyPresent = (list, itemValue) => {
    return list.filter((item) => item.value === itemValue).length > 0;
  };

  const addItem = (itemValue) => {
    if (!isItemAlreadyPresent(itemList, itemValue)) {
      setItemList([...itemList, { value: itemValue }]);
    }
  };

  return { itemList, addItem };
};

export default useStoredOptions;
