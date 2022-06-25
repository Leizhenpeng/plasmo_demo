import { useState } from "react";

function IndexPopup() {
  const [data, setData] = useState("");

  // console.log(data);

  return (
    <div
      style={ { display: "flex", flexDirection: "column", padding: 16 } }>
      { data && (data + "-->" + new Date().toLocaleTimeString()) }
      <input onChange={ (e) => setData(e.target.value) } value={ data } />
    </div>
  );
}

export default IndexPopup;
