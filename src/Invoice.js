import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Invoice() {
  const [image, setImage] = useState("");
  useEffect(() => {
      
    axios.get("http://localhost:3001")
      .then((r) => {
        console.log("response",r);
        return r;
      })
      .then((r1) => setImage(`data:image/jpeg;base64,${r1.data}`));
  }, []);
  useEffect(()=>{
    console.log("image",image)
  },[image])
  return (
    <div>
      Invoice
      <img src={image} />
    </div>
  );
}
