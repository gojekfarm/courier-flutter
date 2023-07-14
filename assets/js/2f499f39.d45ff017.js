"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[745],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=o,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={},a=void 0,l={unversionedId:"Configuring Client",id:"Configuring Client",title:"Configuring Client",description:"Create CourierClient",source:"@site/docs/Configuring Client.md",sourceDirName:".",slug:"/Configuring Client",permalink:"/courier-flutter/docs/Configuring Client",draft:!1,editUrl:"https://github.com/gojek/courier-flutter/edit/main/docs/docs/Configuring Client.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Setup Connection",permalink:"/courier-flutter/docs/Setup Connection"},next:{title:"Connection Lifeycle",permalink:"/courier-flutter/docs/Connection Lifeycle"}},p={},s=[{value:"Create CourierClient",id:"create-courierclient",level:2},{value:"Create CourierClient",id:"create-courierclient-1",level:3},{value:"AuthProvider",id:"authprovider",level:2},{value:"Required Configs",id:"required-configs",level:2},{value:"Setup CourierClient with DioAuthProvider",id:"setup-courierclient-with-dioauthprovider",level:2},{value:"Providing Token API URL with JSON Credential Response",id:"providing-token-api-url-with-json-credential-response",level:3},{value:"Map JSON to CourierConnectOptions",id:"map-json-to-courierconnectoptions",level:3},{value:"Setup CourierClient with your own AuthProvider",id:"setup-courierclient-with-your-own-authprovider",level:2},{value:"Optional Configs",id:"optional-configs",level:2}],u={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"create-courierclient"},"Create CourierClient"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CourierClient")," is the class that we use for any MQTT tasks such as connection, subscription, send and receive message. To initialize an instance of CourierClient we can use the static method like so."),(0,o.kt)("h3",{id:"create-courierclient-1"},"Create CourierClient"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CourierClient")," is the class that we use for any MQTT tasks such as connection, subscription, send and receive message. To initialize an instance of CourierClient we can use the static method like so."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"final CourierClient courierClient = CourierClient.create(\n    authProvider: DioAuthProvider(\n          dio: Dio(),\n          tokenApi: apiUrl,\n          authResponseMapper: CourierResponseMapper()),\n      config: CourierConfiguration(\n          authRetryPolicy: DefaultAuthRetryPolicy(),\n          readTimeoutSeconds: 60,\n      ),\n      messageAdapters: const <MessageAdapter>[\n          JSONMessageAdapter(),\n          BytesMessageAdapter(),\n          StringMessageAdapter()\n      ])\n  ;\n")),(0,o.kt)("h2",{id:"authprovider"},"AuthProvider"),(0,o.kt)("p",null,"This is an interface containing method to fetchConnectOptions used by the Client to connect to broker"),(0,o.kt)("h2",{id:"required-configs"},"Required Configs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"authRetryPolicy"),": Retry policy used to handle retry when tokenAPI URL fails"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"messageAdapters"),": List MessageAdapter used to encode model to bytes and decode bytes to object. Prioritization will be based on the order of the adapter in the list.")),(0,o.kt)("h2",{id:"setup-courierclient-with-dioauthprovider"},"Setup CourierClient with DioAuthProvider"),(0,o.kt)("p",null,"To fetch ConnectionCredential (host, port, etc) from HTTP endpoint, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"DioAuthProvider")," passing these params."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Dio")," : We use ",(0,o.kt)("a",{parentName:"p",href:"https://pub.dev/packages/dio"},"dio")," package for making HTTP request. This will provide you flexibility to use your own Dio instance in case you have various custom headers need to be sent to the server (e.g Authentication, etc). ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"tokenApi"),": An endpoint URL that returns JSON containing credential for mapping to ",(0,o.kt)("inlineCode",{parentName:"p"},"CourierConnectOptions"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"authResponseMapper"),": Instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"AuthResponseMapper")," for mapping JSON returned by ",(0,o.kt)("inlineCode",{parentName:"p"},"tokenAPI")," URL to ",(0,o.kt)("inlineCode",{parentName:"p"},"CourierConnectOptions"),"."))),(0,o.kt)("h3",{id:"providing-token-api-url-with-json-credential-response"},"Providing Token API URL with JSON Credential Response"),(0,o.kt)("p",null,"To connect to MQTT broker you need to provide an endpoint URL that returns JSON containing these payload. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "clientId": "randomcourier1234567",\n    "username": "randomcourier1234567",\n    "password": "randomcourier4321",\n    "host": "broker.mqttdashboard.com",\n    "port": 1883,\n    "cleanSession": true,\n    "keepAlive": 45\n}\n')),(0,o.kt)("h3",{id:"map-json-to-courierconnectoptions"},"Map JSON to CourierConnectOptions"),(0,o.kt)("p",null,"You need to create and implement ",(0,o.kt)("inlineCode",{parentName:"p"},"AuthResponseMapper")," to map the JSON to the ",(0,o.kt)("inlineCode",{parentName:"p"},"CourierConnectOptions")," instance."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},'class CourierResponseMapper implements AuthResponseMapper {\n  @override\n  CourierConnectOptions map(Map<String, dynamic> response) => CourierConnectOptions(\n      clientId: response["clientId"],\n      username: response["username"],\n      host: response["host"],\n      port: response["port"],\n      cleanSession: response["cleanSession"],\n      keepAliveSeconds: response["keepAlive"],\n      password: response[\'password\']\n  );\n}\n')),(0,o.kt)("h2",{id:"setup-courierclient-with-your-own-authprovider"},"Setup CourierClient with your own AuthProvider"),(0,o.kt)("p",null,"In case you want to fetch the connect options using your own implementation, you can implement AuthProvider interface like so."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},'// Example of fetching connectOptions locally without making remote HTTP API Call.\nclass LocalAuthProvider implements AuthProvider {\n  final CourierConnectOptions connectOptions;\n\n  LocalAuthProvider({required this.connectOptions});\n\n  @override\n  Future<CourierConnectOptions> fetchConnectOptions() {\n    return Future<CourierConnectOptions>.value(connectOptions);\n  }\n}\n\nfinal CourierClient courierClient = CourierClient.create(\n    authProvider: LocalAuthProvider(\n          connectOptions: CourierConnectOptions(\n              clientId: const Uuid().v4(),\n              username: "randomcourier1234567",\n              host: "broker.mqttdashboard.com",\n              port: 1883,\n              cleanSession: true,\n              keepAliveSeconds: 45,\n              password: "1234")),\n      config: CourierConfiguration(\n          authRetryPolicy: DefaultAuthRetryPolicy(),\n          readTimeoutSeconds: 60,\n      ),\n      //...\n  );\n')),(0,o.kt)("h2",{id:"optional-configs"},"Optional Configs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"timerPingSenderEnabled"),": Whether Courier should use timerPingSender internally (Android only). It defines the logic of sending ping requests over the MQTT connection. Default to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"activityCheckIntervalSeconds"),": Interval at which channel activity is checked for unacknowledged MQTT packets.. Default to ",(0,o.kt)("inlineCode",{parentName:"p"},"12"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"inactivityTimeoutSeconds"),": When acknowledgement for an MQTT packet is not received within this interval, the connection is reestablished. Default to ",(0,o.kt)("inlineCode",{parentName:"p"},"10"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"readTimeoutSeconds"),": The read timeout of the connection. Default to ",(0,o.kt)("inlineCode",{parentName:"p"},"40"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"connectRetryPolicyConfig"),": A config to determine the retry policy. Default ",(0,o.kt)("inlineCode",{parentName:"p"},"baseRetryTimeSeconds")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"maxRetryTimeSeconds")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"30"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"connectTimeoutConfig"),": A config to determine the connect timeout. Default ",(0,o.kt)("inlineCode",{parentName:"p"},"socketTimeout")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"10")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"handshakeTimeout")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"10"),"."))))}d.isMDXComponent=!0}}]);