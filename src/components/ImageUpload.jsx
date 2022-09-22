import React, { useState } from "react";
import { useEffect } from "react";

const ImageUpload = () => {
  const [imageArr, setImagesArr] = useState([]);
  const [images, setImages] = useState();
  const [updateState, setUpdateState] = useState(false);

  const uploadHandler = (e) => {
    const image = URL.createObjectURL(e.target.files[0]);
    setImages(image);
  };
  const saveBtn = () => {
    imageArr.push(images);
    setUpdateState(!updateState);
    console.log("fghjkl;", imageArr);
  };

  useEffect(() => {
    setImagesArr(imageArr);
  }, [updateState]);
  console.log(imageArr, "imageArr");
  return (
    <div className="w-100 bg-warning vh-100 ps-5 pt-5 ">
      <input type="file" onChange={(e) => uploadHandler(e)} />
      <div className="d-flex flex-wrap flex-column">
        <div className="pt-4">
          <button onClick={() => saveBtn()} className="btn btn-success">
            Save
          </button>
        </div>
        <img
          className="mt-5"
          width={200}
          height={200}
          style={{ objectFit: "cover", borderRadius: "20px" }}
          src={images}
          alt="image"
        />
      </div>

      <div>
        {imageArr.map((item, index) => (
          <img width={200} height={200} src={item} alt="item" />
        ))}
      </div>
    </div>
  );
};

export default ImageUpload;
