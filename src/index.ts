/*
 * Authored under the Authentic Open License (AOL) v1.0
 * You are free to use, modify, and redistribute this file.
 * Attribution is only required if the file is largely unmodified.
 * See LICENSE file in repository root for full license text.
*/


// ==UserScript==
// @name         Dark Mode Theme
// @namespace    idk
// @version      1.0
// @description  Injects external dark mode theme with auto cache-busting (TypeScript version)
// @author
// @match        *://*/*
// @grant        none
// ==/UserScript==

(() => {
    const baseCSS = "no idea yet";

    // Add cache-buster so updates always load fresh
    const cssURL = `${baseCSS}?v=${Date.now()}`;

    const link: HTMLLinkElement = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = cssURL;

    document.head.appendChild(link);
})();
