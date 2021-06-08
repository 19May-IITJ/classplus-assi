import React from "react";
import { Image } from "antd";
import Loader from "../Loader/Loader";
import "./ImageGrid.css";

const ImageGrid = ({ imageList, loading, className }) => {
  return (
    <>
      <div className="image-grid" style={{ marginTop: "30px" }}>
        {imageList.map((image, index) => (
          <Image
            key={`${image.farm}_${image.server}_${image.id}_${image.secret}_${index}`}
            // width={200}
            src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
            placeholder
          />
        ))}
      </div>
      {loading && <Loader />}
    </>
  );
};

export default ImageGrid;
