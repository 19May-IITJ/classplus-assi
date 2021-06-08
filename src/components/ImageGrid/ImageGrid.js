import React from "react";
import { Image, List } from "antd";

const ImageGrid = ({ imageList, className = "" }) => {
  return (
    <List
      className={className}
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4,
        xl: 6,
        xxl: 3,
      }}
      dataSource={imageList}
      renderItem={(image) => (
        <List.Item>
          <Image
            // width={200}
            src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
            //   placeholder
          />
        </List.Item>
      )}
    />
  );
};

export default ImageGrid;
