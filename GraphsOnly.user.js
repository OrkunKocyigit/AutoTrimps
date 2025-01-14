// ==UserScript==
// @name         AT-Orkun-GraphsOnly
// @namespace    https://github.com/OrkunKocyigit/AutoTrimps
// @version      2.6.1-Orkun
// @updateURL    https://github.com/OrkunKocyigit/AutoTrimps/GraphsOnly.user.js
// @description  Graphs Module (only) from AutoTrimps
// @author       zininzinin, spindrjr, belaith, ishakaru, genBTC, Zek, OrkunKocyigit
// @include      *trimps.github.io*
// @include      *kongregate.com/games/GreenSatellite/trimps
// @grant        none
// ==/UserScript==
var script = document.createElement('script');
script.id = 'AutoTrimps-Graphs';
script.src = 'https://orkunkocyigit.github.io/AutoTrimps/GraphsOnly.js';
script.setAttribute('crossorigin',"anonymous");
document.head.appendChild(script);
