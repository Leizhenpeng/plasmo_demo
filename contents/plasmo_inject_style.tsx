import cssText from "data-text:~/contents/overlay.css";
import type { PlasmoContentScript } from "plasmo";

export const config: PlasmoContentScript = {
  matches: ["https://*.douban.com/*"],
  css: ["font.css"]
};

// Idea for an UI API, for popup, notification badge, or mounting UI
// Idea for static mount
// Idea for styling injection support (inline or with custom emotion cache)

export const getStyle = () => {
  const style = document.createElement("style");
  style.textContent = cssText;
  return style;
};

const PlasmoOverlay = () => {
  return (
    <span
      className="hw-top"
      style={ {
        padding: 2
      } }>
      ssss
    </span>
  );
};

export default PlasmoOverlay;
