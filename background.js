// Create a context menu item when extension is installed
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "closeLeft",
    title: "Close Tabs to the Left",
    contexts: ["all"]  // shows up on any page right-click
  });
});

// Handle context menu clicks
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "closeLeft") {
    closeTabsToTheLeft(tab);
  }
});

// Handle toolbar icon clicks
chrome.action.onClicked.addListener((tab) => {
  closeTabsToTheLeft(tab);
});

// Function to close all tabs to the left of current
function closeTabsToTheLeft(currentTab) {
  chrome.tabs.query({ windowId: currentTab.windowId }, (tabs) => {
    const leftTabs = tabs.filter((t) => t.index < currentTab.index);
    const ids = leftTabs.map((t) => t.id);
    if (ids.length > 0) {
      chrome.tabs.remove(ids);
    }
  });
}
