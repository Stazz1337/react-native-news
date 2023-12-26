(()=>{var e={1642:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>I});var n=r(5004),o=r(5543),i=r(8935),l=r(885),a=r(1667),u=r(9385),s=r(3624),f=r(7772),d=r(1054),c=r(229),p=r(2629),x=function(){return(0,p.jsxs)(u.default,{style:{flex:1,justifyContent:"center",alignItems:"center"},children:[(0,p.jsx)(c.default,{size:"large"}),(0,p.jsx)(d.default,{style:{marginTop:15},children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})]})},h=f.default.Image`
  border-radius: 10px;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
`,g=f.default.Text`
  font-size: 18px;
  line-height: 24px;
`,j=function(e){var t=e.route,r=e.navigation,o=n.useState(!0),i=(0,l.default)(o,2),f=i[0],d=i[1],c=n.useState(),j=(0,l.default)(c,2),v=j[0],b=j[1],m=t.params,y=m.id,O=m.title;return n.useEffect((function(){r.setOptions({title:O}),a.default.get(`https://e94c61e55e3c332b.mokky.dev/posts/${y}`).then((function(e){var t=e.data;b(t)})).catch((function(e){console.log(e),s.default.alert("\u041e\u0448\u0438\u0431\u043a\u0430","\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u044c\u044e")})).finally((function(){d(!1)}))}),[y]),f?(0,p.jsx)(u.default,{style:{flex:1,justifyContent:"center",alignItems:"center"},children:(0,p.jsx)(x,{})}):(0,p.jsxs)(u.default,{style:{padding:20},children:[(0,p.jsx)(h,{source:{uri:null==v?void 0:v.imageUrl}}),(0,p.jsx)(g,{children:null==v?void 0:v.text})]})},v=r(3645),b=r(8670),m=r(5288),y=f.default.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`,O=f.default.Image`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  margin-right: 12px;
`,w=f.default.Text`
  font-size: 17px;
  font-weight: 700;
`,S=f.default.View`
  flex: 1;
  justify-content: center;
`,P=f.default.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
`,_=function(e){var t,r=e.title,n=e.imageUrl,o=e.createdAt;return(0,p.jsxs)(y,{children:[(0,p.jsx)(O,{source:{uri:n}}),(0,p.jsxs)(S,{children:[(0,p.jsx)(w,{children:(t=r,t.length>=50?t.substring(0,50)+"...":t)}),(0,p.jsx)(P,{children:new Date(o).toLocaleDateString()})]})]})},k=function(e){var t=e.navigation,r=n.useState(!0),o=(0,l.default)(r,2),i=o[0],f=o[1],x=n.useState(),h=(0,l.default)(x,2),g=h[0],j=h[1],y=function(){f(!0),a.default.get("https://e94c61e55e3c332b.mokky.dev/posts").then((function(e){var t=e.data;j(t)})).catch((function(e){console.log(e),s.default.alert("\u041e\u0448\u0438\u0431\u043a\u0430","\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u044c\u0438")})).finally((function(){f(!1)}))};return n.useEffect(y,[]),i?(0,p.jsxs)(u.default,{style:{flex:1,justifyContent:"center",alignItems:"center"},children:[(0,p.jsx)(c.default,{size:"large"}),(0,p.jsx)(d.default,{style:{marginTop:15},children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})]}):(0,p.jsx)(u.default,{children:(0,p.jsx)(v.default,{refreshControl:(0,p.jsx)(b.default,{refreshing:i,onRefresh:y}),data:g,renderItem:function(e){var r=e.item;return(0,p.jsx)(m.default,{onPress:function(){return t.navigate("FullPost",{id:r.id,title:r.title})},children:(0,p.jsx)(_,{title:r.title,imageUrl:r.imageUrl,createdAt:r.createdAt})})}})})},T=(0,o.default)(),C=function(){return(0,p.jsx)(i.default,{children:(0,p.jsxs)(T.Navigator,{children:[(0,p.jsx)(T.Screen,{name:"Home",component:k,options:{title:"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"}}),(0,p.jsx)(T.Screen,{name:"FullPost",component:j,options:{title:"\u0421\u0442\u0430\u0442\u044c\u044f"}})]})})};function I(){return(0,p.jsx)(C,{})}},6231:()=>{},1123:()=>{},3798:()=>{},1777:()=>{},4779:()=>{}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,r),i.exports}r.m=e,(()=>{var e=[];r.O=(t,n,o,i)=>{if(!n){var l=1/0;for(f=0;f<e.length;f++){for(var[n,o,i]=e[f],a=!0,u=0;u<n.length;u++)(!1&i||l>=i)&&Object.keys(r.O).every((e=>r.O[e](n[u])))?n.splice(u--,1):(a=!1,i<l&&(l=i));if(a){e.splice(f--,1);var s=o();void 0!==s&&(t=s)}}return t}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[n,o,i]}})(),r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"===typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"===typeof n.then)return n}var i=Object.create(null);r.r(i);var l={};e=e||[null,t({}),t([]),t(t)];for(var a=2&o&&n;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((e=>l[e]=()=>n[e]));return l.default=()=>n,r.d(i,l),i}})(),r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/react-native-news/",(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,i,[l,a,u]=n,s=0;if(l.some((t=>0!==e[t]))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(u)var f=u(r)}for(t&&t(n);s<l.length;s++)i=l[s],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(f)},n=self.webpackChunkweb=self.webpackChunkweb||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),r.nc=void 0;var n=r.O(void 0,[482],(()=>r(5530)));n=r.O(n)})();
//# sourceMappingURL=main.a978a50a.js.map