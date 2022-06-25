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

export const getRootContainer = async () => document.querySelector("#info");

const PlasmoPricingExtra2 = () => {
  const[data,setData] = useState('22222222222222')
  return (
    <span
      style={ {
        background: "transparent",
        padding: 12
      } }>
      {data}
    </span>
  );
};

export default PlasmoPricingExtra2;
