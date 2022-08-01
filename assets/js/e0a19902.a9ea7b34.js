"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[394],{3905:(M,L,N)=>{N.d(L,{Zo:()=>T,kt:()=>z});var j=N(7294);function w(M,L,N){return L in M?Object.defineProperty(M,L,{value:N,enumerable:!0,configurable:!0,writable:!0}):M[L]=N,M}function D(M,L){var N=Object.keys(M);if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(M);L&&(j=j.filter((function(L){return Object.getOwnPropertyDescriptor(M,L).enumerable}))),N.push.apply(N,j)}return N}function s(M){for(var L=1;L<arguments.length;L++){var N=null!=arguments[L]?arguments[L]:{};L%2?D(Object(N),!0).forEach((function(L){w(M,L,N[L])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(N)):D(Object(N)).forEach((function(L){Object.defineProperty(M,L,Object.getOwnPropertyDescriptor(N,L))}))}return M}function i(M,L){if(null==M)return{};var N,j,w=function(M,L){if(null==M)return{};var N,j,w={},D=Object.keys(M);for(j=0;j<D.length;j++)N=D[j],L.indexOf(N)>=0||(w[N]=M[N]);return w}(M,L);if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(M);for(j=0;j<D.length;j++)N=D[j],L.indexOf(N)>=0||Object.prototype.propertyIsEnumerable.call(M,N)&&(w[N]=M[N])}return w}var u=j.createContext({}),e=function(M){var L=j.useContext(u),N=L;return M&&(N="function"==typeof M?M(L):s(s({},L),M)),N},T=function(M){var L=e(M.components);return j.createElement(u.Provider,{value:L},M.children)},t={inlineCode:"code",wrapper:function(M){var L=M.children;return j.createElement(j.Fragment,{},L)}},y=j.forwardRef((function(M,L){var N=M.components,w=M.mdxType,D=M.originalType,u=M.parentName,T=i(M,["components","mdxType","originalType","parentName"]),y=e(N),z=w,I=y["".concat(u,".").concat(z)]||y[z]||t[z]||D;return N?j.createElement(I,s(s({ref:L},T),{},{components:N})):j.createElement(I,s({ref:L},T))}));function z(M,L){var N=arguments,w=L&&L.mdxType;if("string"==typeof M||w){var D=N.length,s=new Array(D);s[0]=y;var i={};for(var u in L)hasOwnProperty.call(L,u)&&(i[u]=L[u]);i.originalType=M,i.mdxType="string"==typeof M?M:w,s[1]=i;for(var e=2;e<D;e++)s[e]=N[e];return j.createElement.apply(null,s)}return j.createElement.apply(null,N)}y.displayName="MDXCreateElement"},7170:(M,L,N)=>{N.r(L),N.d(L,{assets:()=>u,contentTitle:()=>s,default:()=>t,frontMatter:()=>D,metadata:()=>i,toc:()=>e});var j=N(7462),w=(N(7294),N(3905));const D={},s=void 0,i={unversionedId:"Introduction",id:"Introduction",title:"Introduction",description:"image banner",source:"@site/docs/Introduction.md",sourceDirName:".",slug:"/Introduction",permalink:"/courier-flutter/docs/Introduction",draft:!1,editUrl:"https://github.com/gojek/courier-flutter/edit/main/docs/docs/Introduction.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",next:{title:"Installation",permalink:"/courier-flutter/docs/Installation"}},u={},e=[{value:"Features",id:"features",level:2},{value:"Contribution Guidelines",id:"contribution-guidelines",level:2},{value:"License",id:"license",level:2}],T={toc:e};function t(M){let{components:L,...D}=M;return(0,w.kt)("wrapper",(0,j.Z)({},T,D,{components:L,mdxType:"MDXLayout"}),(0,w.kt)("p",null,(0,w.kt)("img",{alt:"image banner",src:N(9519).Z+"#gh-light-mode-only",width:"1959",height:"526"}),"\n",(0,w.kt)("img",{alt:"image banner",src:N(5702).Z+"#gh-dark-mode-only",width:"1959",height:"526"})),(0,w.kt)("p",null,"Courier is a library for creating long running connections using ",(0,w.kt)("a",{parentName:"p",href:"https://mqtt.org"},"MQTT")," which is the industry standard for IoT Messaging. Long running connection is a persistent connection established between client & server for bi-directional communication. A long running connection is maintained for as long as possible with the help of keepalive packets for instant updates. This also saves battery and data on mobile devices."),(0,w.kt)("h2",{id:"features"},"Features"),(0,w.kt)("ul",null,(0,w.kt)("li",{parentName:"ul"},(0,w.kt)("p",{parentName:"li"},"Quality of Service"),(0,w.kt)("ul",{parentName:"li"},(0,w.kt)("li",{parentName:"ul"},"Supports three QoS delivery levels: 0 (atmost once), 1 (atleast once) and 2 (exactly once)"))),(0,w.kt)("li",{parentName:"ul"},(0,w.kt)("p",{parentName:"li"},"Clean API"),(0,w.kt)("ul",{parentName:"li"},(0,w.kt)("li",{parentName:"ul"},"Provides clean API for connect / disconnect, subscribe / unsubscribe and publish / receive functionalities"))),(0,w.kt)("li",{parentName:"ul"},(0,w.kt)("p",{parentName:"li"},"Automatic Reconnect"),(0,w.kt)("ul",{parentName:"li"},(0,w.kt)("li",{parentName:"ul"},"Automatically reconnects in case of network or other unexpected failures"))),(0,w.kt)("li",{parentName:"ul"},(0,w.kt)("p",{parentName:"li"},"Observability"),(0,w.kt)("ul",{parentName:"li"},(0,w.kt)("li",{parentName:"ul"},"Provides events for tracking end-to-end delivery"))),(0,w.kt)("li",{parentName:"ul"},(0,w.kt)("p",{parentName:"li"},"Flexible Encoder/Decoder support"),(0,w.kt)("ul",{parentName:"li"},(0,w.kt)("li",{parentName:"ul"},"Converts message payload to and from any custom message type"))),(0,w.kt)("li",{parentName:"ul"},(0,w.kt)("p",{parentName:"li"},"Open Source"),(0,w.kt)("ul",{parentName:"li"},(0,w.kt)("li",{parentName:"ul"},"Open-source client libraries for GoLang, Android, iOS, & Flutter")))),(0,w.kt)("h2",{id:"contribution-guidelines"},"Contribution Guidelines"),(0,w.kt)("p",null,"Read our ",(0,w.kt)("a",{parentName:"p",href:"/courier-flutter/docs/CONTRIBUTION"},"contribution guide")," to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to Courier Flutter library."),(0,w.kt)("h2",{id:"license"},"License"))}t.isMDXComponent=!0},9519:(M,L,N)=>{N.d(L,{Z:()=>j});const j="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTU4LjkyIDUyNiI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMwMGFhMTM7fS5jbHMtMntmaWxsOiNmZmY7fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTU1OS4xNywzMjQuNjRBOTYuNCw5Ni40LDAsMSwxLDQ4MS42MiwxNzFhOTUuNyw5NS43LDAsMCwxLDc2Ljg1LDM4LjIsMTkuMzEsMTkuMzEsMCwwLDEtMTUuNDIsMzEsMTMuNzgsMTMuNzgsMCwwLDEtMTEuNTYtNiw1OS45MSw1OS45MSwwLDAsMC0xMDkuNjUsMjkuMzhBNTkuNCw1OS40LDAsMCwwLDQzOCwzMDguMzdhNTkuOTEsNTkuOTEsMCwwLDAsOTEuODktNS40NSwxNy4yLDE3LjIsMCwwLDEsMTMuOTItNi42Mkg1NDVBMTcuMzEsMTcuMzEsMCwwLDEsNTYwLjc4LDMwNiwxNy41NiwxNy41NiwwLDAsMSw1NTkuMTcsMzI0LjY0WiIvPjxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iMjI5LjY3IiB5PSIxMTMuMjYiIHdpZHRoPSI1MS42IiBoZWlnaHQ9IjI4LjAyIiByeD0iMTQuMDEiLz48cmVjdCBjbGFzcz0iY2xzLTEiIHg9IjE0NS41OSIgeT0iMTY5LjMiIHdpZHRoPSI1MS42IiBoZWlnaHQ9IjI4LjAyIiByeD0iMTQuMDEiLz48cmVjdCBjbGFzcz0iY2xzLTEiIHg9IjExNS43NCIgeT0iMzM3LjQyIiB3aWR0aD0iNTEuNiIgaGVpZ2h0PSIyOC4wMiIgcng9IjE0LjAxIi8+PHJlY3QgY2xhc3M9ImNscy0xIiB4PSIyMTcuNjUiIHk9IjM5My40NiIgd2lkdGg9IjUxLjYiIGhlaWdodD0iMjguMDIiIHJ4PSIxNC4wMSIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTU1OS4xNywzMjQuNjRBOTYuNCw5Ni40LDAsMSwxLDQ4MS42MiwxNzFhOTUuNyw5NS43LDAsMCwxLDc2Ljg1LDM4LjIsMTkuMzEsMTkuMzEsMCwwLDEtMTUuNDIsMzEsMTMuNzgsMTMuNzgsMCwwLDEtMTEuNTYtNiw1OS45MSw1OS45MSwwLDAsMC0xMDkuNjUsMjkuMzhBNTkuNCw1OS40LDAsMCwwLDQzOCwzMDguMzdhNTkuOTEsNTkuOTEsMCwwLDAsOTEuODktNS40NSwxNy4yLDE3LjIsMCwwLDEsMTMuOTItNi42Mkg1NDVBMTcuMzEsMTcuMzEsMCwwLDEsNTYwLjc4LDMwNiwxNy41NiwxNy41NiwwLDAsMSw1NTkuMTcsMzI0LjY0WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTQ4Mi43NiwxMTMuMjZjLS43MywwLTUuMjksMC02LDBhMi41MywyLjUzLDAsMCwwLS4zLDBIMzE1LjZhMTQsMTQsMCwwLDAtMTQsMTVjLjUsNy40NCw3LDEzLjA1LDE0LjQ4LDEzLjA1SDM1NGExMy44NSwxMy44NSwwLDAsMSwxMC4yNiwyMy4xM2wtLjI4LjMxYTEzLjc4LDEzLjc4LDAsMCwxLTEwLjI2LDQuNTdoLTEyMmExNCwxNCwwLDAsMC0xNCwxNS4xMWMuNTYsNy4zOSw3LjEsMTIuOTEsMTQuNTEsMTIuOTFoODguMzFhMTMuODgsMTMuODgsMCwwLDEsMTMsMTguNTljMCwuMS0uMDcuMTktLjEuMjlhMTMuODIsMTMuODIsMCwwLDEtMTMsOS4xNUgyNjUuNzRhMTQsMTQsMCwwLDAtMTQsMTUuMTFjLjU3LDcuMzksNy4xLDEyLjkxLDE0LjUxLDEyLjkxaDQ0Ljg5YTEzLjYsMTMuNiwwLDAsMSwxMy41NSwxMy43MXYuNTZhMTMuNjMsMTMuNjMsMCwwLDEtMTMuNTUsMTMuNzZIMTU1LjU0YTE0LDE0LDAsMSwwLDAsMjhIMzIwLjMyYTEzLjgsMTMuOCwwLDAsMSwxMyw5LjE4bC4xLjI4YTEzLjg4LDEzLjg4LDAsMCwxLTEzLDE4LjU3aC0xMTlhMTQsMTQsMCwxLDAsMCwyOGgxNTJhMTMuNzgsMTMuNzgsMCwwLDEsMTAuMyw0LjYxbC4yNy4zMWExMy44NSwxMy44NSwwLDAsMS0xMC4yOSwyMy4xMUgzMDAuMjdhMTQsMTQsMCwxLDAsMCwyOEg0NzAuMDhjMi45NC4xOSw5LjcuMjYsMTIuNjguMjZhMTU0LjI0LDE1NC4yNCwwLDAsMCwwLTMwOC40OFptNzYuNDEsMjExLjM4QTk2LjQsOTYuNCwwLDEsMSw0ODEuNjIsMTcxYTk1LjcsOTUuNywwLDAsMSw3Ni44NSwzOC4yLDE5LjMxLDE5LjMxLDAsMCwxLTE1LjQyLDMxLDEzLjc4LDEzLjc4LDAsMCwxLTExLjU2LTYsNTkuOTEsNTkuOTEsMCwwLDAtMTA5LjY1LDI5LjM4QTU5LjQsNTkuNCwwLDAsMCw0MzgsMzA4LjM3YTU5LjkxLDU5LjkxLDAsMCwwLDkxLjg5LTUuNDUsMTcuMiwxNy4yLDAsMCwxLDEzLjkyLTYuNjJINTQ1QTE3LjMxLDE3LjMxLDAsMCwxLDU2MC43OCwzMDYsMTcuNTYsMTcuNTYsMCwwLDEsNTU5LjE3LDMyNC42NFoiLz48cGF0aCBkPSJNNjk1Ljc3LDI3MC4zMWMwLTYzLjg1LDQ2LjE2LTEwOS40LDExMC4zLTEwOS40LDUwLjY1LDAsODksMjcuODcsOTkuMjEsNzIuODNsLTQzLjE2LDEwLjc5Yy03LjUtMjcuNTctMjcuODgtNDMuNDYtNTYtNDMuNDYtMzguMzcsMC02NC40NCwyOC4xNy02NC40NCw2OS4yNHMyNi4wNyw2OS4yMyw2NC40NCw2OS4yM2MyOS4zNywwLDUwLjk1LTE3LjA4LDU2LjY1LTQ3LjM1bDQzLjQ2LDEwLjE5Yy04LjY5LDQ4LjI1LTQ4LDc3LjMzLTEwMC4xMSw3Ny4zM0M3NDEuOTMsMzc5LjcxLDY5NS43NywzMzQuMTUsNjk1Ljc3LDI3MC4zMVoiLz48cGF0aCBkPSJNOTIyLjA2LDI5NS43OGMwLTQ3LjM1LDM3LjQ2LTgzLjkyLDg5LjYxLTgzLjkyLDUyLjQ2LDAsODkuNjIsMzYuNTcsODkuNjIsODMuOTJzLTM3LjE2LDgzLjkzLTg5LjYyLDgzLjkzQzk1OS41MiwzNzkuNzEsOTIyLjA2LDM0My4xNCw5MjIuMDYsMjk1Ljc4Wm0xMzQuODcsMGMwLTI1Ljc3LTE3LjY4LTQ1LTQ1LjI2LTQ1cy00NS4yNSwxOS4xOS00NS4yNSw0NSwxNy42OCw0NSw0NS4yNSw0NVMxMDU2LjkzLDMyMS41NiwxMDU2LjkzLDI5NS43OFoiLz48cGF0aCBkPSJNMTEyMy40NywzMDcuMTdWMjE2LjM2aDQ0LjM2djg0LjIyYzAsMjQuODgsMTMuNDksMzksMzkuMjYsMzksMjQuNTgsMCw0MS4zNy0xNi4xOCw0MS4zNy0zOVYyMTYuMzZoNDQuMzZWMzc1LjIxSDEyNTB2LTE1aC0uNmMtMTMuMTksMTIuNTgtMzEuNDgsMTkuNDgtNTMuNjUsMTkuNDhDMTE1MC40NSwzNzkuNzEsMTEyMy40NywzNTMsMTEyMy40NywzMDcuMTdaIi8+PHBhdGggZD0iTTEzMjIuNzksMzc1LjIxVjIxNi4zNmg0MS42NnYxNS4yOGguNmMxMS42OS0xMiwyNy41Ny0xOC4yOCw0Ni43NS0xOC4yOGE4OS41Niw4OS41NiwwLDAsMSwyNi4wOCw0LjE5bC05LjI5LDM5Ljg3YTc2LjcsNzYuNywwLDAsMC0yMy4wOC0zLjNjLTIzLjY4LDAtMzguMzYsMTUuNTktMzguMzYsNDguNTZ2NzIuNTNaIi8+PHBhdGggZD0iTTE0NTMuMTYsMTkwLjI4VjE0NS45MkgxNDk5djQ0LjM2Wm0uOSwxODQuOTNWMjE2LjM2aDQ0LjM2VjM3NS4yMVoiLz48cGF0aCBkPSJNMTUyMS44LDI5Ni4wOGMwLTQ4Ljg1LDM2LTg0LjIyLDg2LjMyLTg0LjIyLDUzLjM1LDAsODYuMzIsMzcuNzcsODYuMzIsODUuNDJ2MTIuNTlIMTU2NS41NmMxLjUsMjAuNjgsMTguMjgsMzMuODcsNDUsMzMuODcsMTkuNzgsMCwzMy41Ny03Ljc5LDQ4Ljg1LTIzLjY4TDE2ODcsMzQ3LjY0Yy0xOC4yOSwyMC4wOC00MiwzMi4wNy03Ni4xMywzMi4wN0MxNTU1LjA3LDM3OS43MSwxNTIxLjgsMzQ2LjQ0LDE1MjEuOCwyOTYuMDhabTEyOS40OC0xNy4zOGMtMi4xLTE4LjU4LTE4LjU4LTMwLjg3LTQyLjI2LTMwLjg3LTI0LDAtNDAuNDcsMTIuMjktNDIuODYsMzAuODdaIi8+PHBhdGggZD0iTTE3MTguMTEsMzc1LjIxVjIxNi4zNmg0MS42NnYxNS4yOGguNmMxMS42OS0xMiwyNy41OC0xOC4yOCw0Ni43Ni0xOC4yOGE4OS42Miw4OS42MiwwLDAsMSwyNi4wOCw0LjE5bC05LjI5LDM5Ljg3YTc2Ljc1LDc2Ljc1LDAsMCwwLTIzLjA4LTMuM2MtMjMuNjgsMC0zOC4zNywxNS41OS0zOC4zNyw0OC41NnY3Mi41M1oiLz48L3N2Zz4="},5702:(M,L,N)=>{N.d(L,{Z:()=>j});const j="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB2aWV3Qm94PSIwIDAgMTk1OC45MiA1MjYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnM+CiAgICA8c3R5bGU+LmNscy0xe2ZpbGw6IzAwYWExMzt9LmNscy0ye2ZpbGw6I2ZmZjt9PC9zdHlsZT4KICA8L2RlZnM+CiAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNTU5LjE3LDMyNC42NEE5Ni40LDk2LjQsMCwxLDEsNDgxLjYyLDE3MWE5NS43LDk1LjcsMCwwLDEsNzYuODUsMzguMiwxOS4zMSwxOS4zMSwwLDAsMS0xNS40MiwzMSwxMy43OCwxMy43OCwwLDAsMS0xMS41Ni02LDU5LjkxLDU5LjkxLDAsMCwwLTEwOS42NSwyOS4zOEE1OS40LDU5LjQsMCwwLDAsNDM4LDMwOC4zN2E1OS45MSw1OS45MSwwLDAsMCw5MS44OS01LjQ1LDE3LjIsMTcuMiwwLDAsMSwxMy45Mi02LjYySDU0NUExNy4zMSwxNy4zMSwwLDAsMSw1NjAuNzgsMzA2LDE3LjU2LDE3LjU2LDAsMCwxLDU1OS4xNywzMjQuNjRaIi8+CiAgPHJlY3QgY2xhc3M9ImNscy0xIiB4PSIyMjkuNjciIHk9IjExMy4yNiIgd2lkdGg9IjUxLjYiIGhlaWdodD0iMjguMDIiIHJ4PSIxNC4wMSIvPgogIDxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iMTQ1LjU5IiB5PSIxNjkuMyIgd2lkdGg9IjUxLjYiIGhlaWdodD0iMjguMDIiIHJ4PSIxNC4wMSIvPgogIDxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iMTE1Ljc0IiB5PSIzMzcuNDIiIHdpZHRoPSI1MS42IiBoZWlnaHQ9IjI4LjAyIiByeD0iMTQuMDEiLz4KICA8cmVjdCBjbGFzcz0iY2xzLTEiIHg9IjIxNy42NSIgeT0iMzkzLjQ2IiB3aWR0aD0iNTEuNiIgaGVpZ2h0PSIyOC4wMiIgcng9IjE0LjAxIi8+CiAgPHBhdGggY2xhc3M9ImNscy0yIiBkPSJNNTU5LjE3LDMyNC42NEE5Ni40LDk2LjQsMCwxLDEsNDgxLjYyLDE3MWE5NS43LDk1LjcsMCwwLDEsNzYuODUsMzguMiwxOS4zMSwxOS4zMSwwLDAsMS0xNS40MiwzMSwxMy43OCwxMy43OCwwLDAsMS0xMS41Ni02LDU5LjkxLDU5LjkxLDAsMCwwLTEwOS42NSwyOS4zOEE1OS40LDU5LjQsMCwwLDAsNDM4LDMwOC4zN2E1OS45MSw1OS45MSwwLDAsMCw5MS44OS01LjQ1LDE3LjIsMTcuMiwwLDAsMSwxMy45Mi02LjYySDU0NUExNy4zMSwxNy4zMSwwLDAsMSw1NjAuNzgsMzA2LDE3LjU2LDE3LjU2LDAsMCwxLDU1OS4xNywzMjQuNjRaIi8+CiAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNDgyLjc2LDExMy4yNmMtLjczLDAtNS4yOSwwLTYsMGEyLjUzLDIuNTMsMCwwLDAtLjMsMEgzMTUuNmExNCwxNCwwLDAsMC0xNCwxNWMuNSw3LjQ0LDcsMTMuMDUsMTQuNDgsMTMuMDVIMzU0YTEzLjg1LDEzLjg1LDAsMCwxLDEwLjI2LDIzLjEzbC0uMjguMzFhMTMuNzgsMTMuNzgsMCwwLDEtMTAuMjYsNC41N2gtMTIyYTE0LDE0LDAsMCwwLTE0LDE1LjExYy41Niw3LjM5LDcuMSwxMi45MSwxNC41MSwxMi45MWg4OC4zMWExMy44OCwxMy44OCwwLDAsMSwxMywxOC41OWMwLC4xLS4wNy4xOS0uMS4yOWExMy44MiwxMy44MiwwLDAsMS0xMyw5LjE1SDI2NS43NGExNCwxNCwwLDAsMC0xNCwxNS4xMWMuNTcsNy4zOSw3LjEsMTIuOTEsMTQuNTEsMTIuOTFoNDQuODlhMTMuNiwxMy42LDAsMCwxLDEzLjU1LDEzLjcxdi41NmExMy42MywxMy42MywwLDAsMS0xMy41NSwxMy43NkgxNTUuNTRhMTQsMTQsMCwxLDAsMCwyOEgzMjAuMzJhMTMuOCwxMy44LDAsMCwxLDEzLDkuMThsLjEuMjhhMTMuODgsMTMuODgsMCwwLDEtMTMsMTguNTdoLTExOWExNCwxNCwwLDEsMCwwLDI4aDE1MmExMy43OCwxMy43OCwwLDAsMSwxMC4zLDQuNjFsLjI3LjMxYTEzLjg1LDEzLjg1LDAsMCwxLTEwLjI5LDIzLjExSDMwMC4yN2ExNCwxNCwwLDEsMCwwLDI4SDQ3MC4wOGMyLjk0LjE5LDkuNy4yNiwxMi42OC4yNmExNTQuMjQsMTU0LjI0LDAsMCwwLDAtMzA4LjQ4Wm03Ni40MSwyMTEuMzhBOTYuNCw5Ni40LDAsMSwxLDQ4MS42MiwxNzFhOTUuNyw5NS43LDAsMCwxLDc2Ljg1LDM4LjIsMTkuMzEsMTkuMzEsMCwwLDEtMTUuNDIsMzEsMTMuNzgsMTMuNzgsMCwwLDEtMTEuNTYtNiw1OS45MSw1OS45MSwwLDAsMC0xMDkuNjUsMjkuMzhBNTkuNCw1OS40LDAsMCwwLDQzOCwzMDguMzdhNTkuOTEsNTkuOTEsMCwwLDAsOTEuODktNS40NSwxNy4yLDE3LjIsMCwwLDEsMTMuOTItNi42Mkg1NDVBMTcuMzEsMTcuMzEsMCwwLDEsNTYwLjc4LDMwNiwxNy41NiwxNy41NiwwLDAsMSw1NTkuMTcsMzI0LjY0WiIvPgogIDxwYXRoIGQ9Ik02OTUuNzcsMjcwLjMxYzAtNjMuODUsNDYuMTYtMTA5LjQsMTEwLjMtMTA5LjQsNTAuNjUsMCw4OSwyNy44Nyw5OS4yMSw3Mi44M2wtNDMuMTYsMTAuNzljLTcuNS0yNy41Ny0yNy44OC00My40Ni01Ni00My40Ni0zOC4zNywwLTY0LjQ0LDI4LjE3LTY0LjQ0LDY5LjI0czI2LjA3LDY5LjIzLDY0LjQ0LDY5LjIzYzI5LjM3LDAsNTAuOTUtMTcuMDgsNTYuNjUtNDcuMzVsNDMuNDYsMTAuMTljLTguNjksNDguMjUtNDgsNzcuMzMtMTAwLjExLDc3LjMzQzc0MS45MywzNzkuNzEsNjk1Ljc3LDMzNC4xNSw2OTUuNzcsMjcwLjMxWiIgc3R5bGU9ImZpbGw6IHJnYigyNTUsIDI1NSwgMjU1KTsiLz4KICA8cGF0aCBkPSJNOTIyLjA2LDI5NS43OGMwLTQ3LjM1LDM3LjQ2LTgzLjkyLDg5LjYxLTgzLjkyLDUyLjQ2LDAsODkuNjIsMzYuNTcsODkuNjIsODMuOTJzLTM3LjE2LDgzLjkzLTg5LjYyLDgzLjkzQzk1OS41MiwzNzkuNzEsOTIyLjA2LDM0My4xNCw5MjIuMDYsMjk1Ljc4Wm0xMzQuODcsMGMwLTI1Ljc3LTE3LjY4LTQ1LTQ1LjI2LTQ1cy00NS4yNSwxOS4xOS00NS4yNSw0NSwxNy42OCw0NSw0NS4yNSw0NVMxMDU2LjkzLDMyMS41NiwxMDU2LjkzLDI5NS43OFoiIHN0eWxlPSJmaWxsOiByZ2IoMjU1LCAyNTUsIDI1NSk7Ii8+CiAgPHBhdGggZD0iTTExMjMuNDcsMzA3LjE3VjIxNi4zNmg0NC4zNnY4NC4yMmMwLDI0Ljg4LDEzLjQ5LDM5LDM5LjI2LDM5LDI0LjU4LDAsNDEuMzctMTYuMTgsNDEuMzctMzlWMjE2LjM2aDQ0LjM2VjM3NS4yMUgxMjUwdi0xNWgtLjZjLTEzLjE5LDEyLjU4LTMxLjQ4LDE5LjQ4LTUzLjY1LDE5LjQ4QzExNTAuNDUsMzc5LjcxLDExMjMuNDcsMzUzLDExMjMuNDcsMzA3LjE3WiIgc3R5bGU9ImZpbGw6IHJnYigyNTUsIDI1NSwgMjU1KTsiLz4KICA8cGF0aCBkPSJNMTMyMi43OSwzNzUuMjFWMjE2LjM2aDQxLjY2djE1LjI4aC42YzExLjY5LTEyLDI3LjU3LTE4LjI4LDQ2Ljc1LTE4LjI4YTg5LjU2LDg5LjU2LDAsMCwxLDI2LjA4LDQuMTlsLTkuMjksMzkuODdhNzYuNyw3Ni43LDAsMCwwLTIzLjA4LTMuM2MtMjMuNjgsMC0zOC4zNiwxNS41OS0zOC4zNiw0OC41NnY3Mi41M1oiIHN0eWxlPSJmaWxsOiByZ2IoMjU1LCAyNTUsIDI1NSk7Ii8+CiAgPHBhdGggZD0iTTE0NTMuMTYsMTkwLjI4VjE0NS45MkgxNDk5djQ0LjM2Wm0uOSwxODQuOTNWMjE2LjM2aDQ0LjM2VjM3NS4yMVoiIHN0eWxlPSJmaWxsOiByZ2IoMjU1LCAyNTUsIDI1NSk7Ii8+CiAgPHBhdGggZD0iTTE1MjEuOCwyOTYuMDhjMC00OC44NSwzNi04NC4yMiw4Ni4zMi04NC4yMiw1My4zNSwwLDg2LjMyLDM3Ljc3LDg2LjMyLDg1LjQydjEyLjU5SDE1NjUuNTZjMS41LDIwLjY4LDE4LjI4LDMzLjg3LDQ1LDMzLjg3LDE5Ljc4LDAsMzMuNTctNy43OSw0OC44NS0yMy42OEwxNjg3LDM0Ny42NGMtMTguMjksMjAuMDgtNDIsMzIuMDctNzYuMTMsMzIuMDdDMTU1NS4wNywzNzkuNzEsMTUyMS44LDM0Ni40NCwxNTIxLjgsMjk2LjA4Wm0xMjkuNDgtMTcuMzhjLTIuMS0xOC41OC0xOC41OC0zMC44Ny00Mi4yNi0zMC44Ny0yNCwwLTQwLjQ3LDEyLjI5LTQyLjg2LDMwLjg3WiIgc3R5bGU9ImZpbGw6IHJnYigyNTUsIDI1NSwgMjU1KTsiLz4KICA8cGF0aCBkPSJNMTcxOC4xMSwzNzUuMjFWMjE2LjM2aDQxLjY2djE1LjI4aC42YzExLjY5LTEyLDI3LjU4LTE4LjI4LDQ2Ljc2LTE4LjI4YTg5LjYyLDg5LjYyLDAsMCwxLDI2LjA4LDQuMTlsLTkuMjksMzkuODdhNzYuNzUsNzYuNzUsMCwwLDAtMjMuMDgtMy4zYy0yMy42OCwwLTM4LjM3LDE1LjU5LTM4LjM3LDQ4LjU2djcyLjUzWiIgc3R5bGU9ImZpbGw6IHJnYigyNTUsIDI1NSwgMjU1KTsiLz4KPC9zdmc+"}}]);