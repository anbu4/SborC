// ==UserScript==
// @name         test-dat loader
// @namespace    anbu4-test-dat
// @description  Load script from GitHub RAW (bypass CSP)
// @match        https://global-oss-sg.uhgzgnb.com/v2/front_end/*
// @grant        GM_xmlhttpRequest
// @connect      raw.githubusercontent.com
// ==/UserScript==

GM_xmlhttpRequest({
    method: "GET",
    url: "https://raw.githubusercontent.com/anbu4/test-dat/main/main.js",
    onload: function (response) {
      try {
        eval(response.responseText);
      } catch (e) {
        console.error("Eror import", e);
      }
    },
    onerror: function () {
      console.error("Eror");
    }
  });
  