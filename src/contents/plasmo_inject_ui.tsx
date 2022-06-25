/**
 * @name: plasmo.ts
 * @author: river
 * @date: 2022/6/25 11:33 上午
 * @contact: laolei@forkway.cn
 * @description：
 */


import type { PlasmoContentScript } from "plasmo";
import { useState } from "react";

export const config: PlasmoContentScript = {
  matches: ["https://*.douban.com/*"]
};

export const getMountPoint = async () => document.querySelector("#info > br:last-of-type");

const PlasmoPricingExtra = () => {
  const[data,setData] = useState('c22')
  return (
    <span
      style={ {
        background: "transparent",
        padding: 12
      } }>
      {/*{data}*/}
    </span>
  );
};

export default PlasmoPricingExtra;
