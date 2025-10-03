# 📄 README: Close Tabs to the Left (Chromium/Chrome/Brave)

## Overview

**Close Tabs to the Left** is a lightweight Chrome/Chromium/Brave extension that adds functionality to quickly close all tabs to the left of the currently active tab.

It provides two ways to trigger the action:

1. Click the **extension toolbar icon**.
2. Right-click anywhere on a page and select **“Close Tabs to the Left”** from the context menu.

---

## Features

* Close all tabs to the left of the active tab in the **current window**.
* Works in Chrome, Chromium, Brave, Edge.
* Minimal permissions (`tabs` and `contextMenus`).
* Supports toolbar click or page right-click.
* Lightweight — no unnecessary UI or icons required.

---

## Installation (Developer / Testing)

1. Download or clone the extension folder.
2. Open your browser: `chrome://extensions/`
3. Enable **Developer mode** (top-right).
4. Click **Load unpacked** → select the extension folder.
5. The extension icon will appear in the toolbar.

> **Note:** After making code changes, click **Reload** in `chrome://extensions/` to apply updates. No need to remove and reload unpacked.

---

## How to Use

### 1. Toolbar icon

* Click the extension icon in the top-right toolbar.
* All tabs to the left of the currently active tab in the same window will be closed.

### 2. Page Context Menu

* Right-click anywhere on a webpage.
* Select **“Close Tabs to the Left”** from the context menu.
* Works on all pages in the current window.

---

## Incognito Mode

By default, extensions **do not run in Incognito**. To enable:

1. Go to `chrome://extensions/`.
2. Find **Close Tabs to the Left**.
3. Click **Details** → Enable **Allow in incognito**.
4. You can now use the extension in private windows.

> ⚠️ Use with caution — closing tabs in Incognito cannot be undone.

---

## Key Notes

* Only tabs in the **current window** are affected.
* Pinned tabs or tabs in other windows remain untouched.
* Clicking the icon or context menu multiple times is safe — it only affects tabs left of the **current active tab**.

---

## File Structure

```
close-tabs-left-extension/
│── manifest.json         # Extension metadata and permissions
│── background.js         # Background service worker; main logic
```

---

## Permissions

* `tabs` → needed to query and close tabs.
* `contextMenus` → needed to add right-click menu items.

---

## 📜 License

This repository is licensed under the [BSD 3-Clause License](./LICENSE).
