import React, { useState } from "react";

const ImageUpload = () => {
  const [imageArr, setImagesArr] = useState([]);

  const uploadHandler = (e) => {
    let imageURL = URL.createObjectURL(e.target.files[0]);
    setImagesArr((prev) => [...prev, imageURL]);
  };

  return (
    <div className="w-100 bg-warning vh-100 ps-5 pt-5 ">
      <input type="file" onChange={(e) => uploadHandler(e)} />
      <div className="d-flex flex-wrap">
        {imageArr &&
          imageArr.length > 0 &&
          imageArr.map((item, index) => {
            return (
              <img
                width={400}
                height={400}
                style={{ objectFit: "contain" }}
                key={index}
                src={item}
                alt="upload"
              />
            );
          })}
      </div>
    </div>
  );
};

export default ImageUpload;
