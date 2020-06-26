import React from "react";
import Image from "material-ui-image";

const BigImage = ({ message, src }) => {
  return (
    <div>
      <p>{message}</p>
      <Image src={src} />
    </div>
  );
};
export default BigImage;
