/**
 * @name: plasmo.ts
 * @author: river
 * @date: 2022/6/25 11:33 上午
 * @contact: laolei@forkway.cn
 * @description：
 */


import type { PlasmoContentScript } from "plasmo"

export const config: PlasmoContentScript = {
  matches: ["https://*.plasmo.com/*"]
}

window.addEventListener("load", () => {
  console.log("content script loaded")

  document.body.style.background = "#f4f5f1"
})
