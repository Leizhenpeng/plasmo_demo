import windowChanger from "./inject-test";

//
const inject = async (tabId) => {
  chrome.scripting.executeScript(
    {
      target: {
        tabId
      },
      world: "MAIN", // MAIN in order to access the window object
      func: windowChanger
    },
    () => {
      console.log("Background script got callback after injection");
    }
  );
};

// Simple example showing how to inject.
// You can inject however you'd like to, doesn't have
// to be with chrome.tabs.onActivated
chrome.tabs.onActivated.addListener((e) => {
  inject(e.tabId).then(r => {
    console.log(r);
  });
});
