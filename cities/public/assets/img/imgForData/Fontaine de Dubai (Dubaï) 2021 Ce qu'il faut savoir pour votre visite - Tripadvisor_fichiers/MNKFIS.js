(this.$WP=this.$WP||[]).push(["MNKFIS",(e,n)=>{"use strict";var l,a,t,r,s,u,c,i,m,o,d,f,v,b,k,E,h,p,g=({link:e,isOpen:n,onOpen:l,hideSublinks:t})=>{var{viewportCategory:r}=a.useContext(o),s=null!=e.sublinks&&e.sublinks.length>0&&!t,c="TABLET"===r,i=a.useCallback((e=>{c&&s&&(l(),e.preventDefault())}),[c,s,l]);return a.createElement(a.Fragment,null,a.createElement("a",{href:e.url,className:d("_23w81Z2U",{_3pC9rmLE:s,a_oEqcTI:n}),onClick:i,onMouseOver:c?void 0:l,onFocus:c?void 0:l},e.preLocalizedAnchorText||e.localizedAnchorText,s&&a.createElement("div",{className:"_1JiqVHZx"},a.createElement(u,{name:"single-chevron-right"}))),s&&a.createElement(_,{links:e.sublinks,submenu:!0,visible:n}))},_=({links:e,submenu:n,visible:l})=>{var t,r,[s,u]=a.useState(null),c=!l&&null!=s;a.useEffect((()=>{c&&u(null)}),[c]);var i=f();return a.createElement("div",{className:d("_18gwkhRx",{_2MeIwbJu:n,_34wORIUX:l}),"data-test-target":"global-nav"},null==e||null==(t=e.filter(Boolean))||null==(r=t.filter((e=>null!=e.preLocalizedAnchorText||null!=e.localizedAnchorText)))?void 0:r.map(((e,n)=>a.createElement(g,{key:n,link:e,isOpen:n===s,onOpen:()=>u(n),hideSublinks:i&&"TOURISM"===e.linkId}))))},C="_3u_hgBMF",N=({breadcrumb:e,navLinks:n,hasChevron:l,unlinkedLastItem:t})=>{var[r,d]=a.useState(!1),f=a.useRef(null),v=a.useCallback((e=>{d(!r),e.preventDefault()}),[r]),b=a.useCallback((e=>{null!=f.current&&e.target instanceof Node&&f.current.contains(e.target)||(e.preventDefault(),d(!1))}),[]),k=a.useCallback((e=>{e instanceof KeyboardEvent&&27===e.keyCode&&(e.preventDefault(),d(!1))}),[]);m("keydown",null!=n&&r?k:void 0,void 0,!0),m("click",null!=n&&r?b:void 0,void 0,!0),m("touchstart",null!=n&&r?b:void 0,void 0,!0);var{viewportCategory:E}=a.useContext(o),h="TABLET"===E,p=s(e.obfuscated?e.href:null)||e.href,g=a.createElement("span",{className:"_3Zgdj6Ta"},a.createElement(i,{variant:"supporting-02",display:"inline",elementType:"span"},e.name));return a.createElement("div",{className:"KUpSEj5s",ref:f},t?g:a.createElement(c,{theme:"standalone",display:"inline-block",href:p,onClick:null!=n?v:void 0},g,null!=n&&a.createElement("span",{className:C},a.createElement(u,{name:"caret-down"}))),l?a.createElement("span",{className:C},a.createElement(u,{name:"single-chevron-right"})):null,null!=n&&(h?a.createElement("div",{className:"_1xFVuKPO"},a.createElement(_,{links:n,visible:r})):a.createElement(_,{links:n,visible:r})))},L=({breadcrumbs:e,navLinks:n,fontSize:l=13})=>{var r=a.useMemo((()=>e.filter((e=>!e.obfuscated)).map((e=>({name:e.name,href:e.href})))),[e]);return 0===e.length?null:a.createElement(a.Fragment,null,e.map(((t,r)=>a.createElement(N,{breadcrumb:t,navLinks:r===e.length-1?n:void 0,key:t.href,fontSize:l,hasChevron:r+1<e.length,unlinkedLastItem:r+1===e.length&&!n}))),a.createElement(t,{breadcrumbList:r}))},y="_1pIb7_s8",x=({link:e})=>{var n=null!=e.sublinks&&e.sublinks.length>0,[l,t]=a.useState(!1),r=e.linkId||"more",s="HelpDesk"===r?"/help":e.url||"",{open:c}=k((({close:e})=>a.createElement(p,{onClose:e}))),i=a.useCallback((e=>{(n||"more"===r)&&(t(!l),e.preventDefault()),"HelpDesk"===r&&(c(),e.preventDefault())}),[n,l,r,c]),m=e.preLocalizedAnchorText||e.localizedAnchorText,o=a.useMemo((()=>`stacked-nav-sublinks-${Math.random()}`),[]);return a.createElement(a.Fragment,null,n?a.createElement("button",{"aria-controls":o,"aria-expanded":l,className:d(y,{_3I8LB47k:l}),onClick:i},m||a.createElement(E,{id:"common_more_capital_ffffe27f"}),a.createElement("span",{className:"_3exm1ngX"},a.createElement(u,{name:"single-chevron-down"}))):a.createElement("a",{href:s,className:y,onClick:i},m||a.createElement(E,{id:"common_more_capital_ffffe27f"})),n&&a.createElement(M,{id:o,links:e.sublinks,submenu:!0,visible:l}))},M=({links:e,submenu:n,visible:l,id:t})=>{var r,[s,u]=a.useState(null),c=null!=s;return a.useEffect((()=>{c&&u(null)}),[c]),a.createElement("div",{id:t,className:d({_2h8JWO_C:n,_2RKK29dL:l})},null==e||null==(r=e.filter(Boolean))?void 0:r.map(((e,n)=>a.createElement(x,{key:n,link:e,isOpen:n===s,onOpen:()=>u(n)}))))},S="_2jsrBtMW",D=({breadcrumb:e})=>l.createElement("span",{key:e.href,className:"_2zvMAkwy"},e.obfuscated?l.createElement(r,{useSpan:!0,encodedUrl:e.href},l.createElement("span",{className:S},e.name)):l.createElement("a",{className:S,href:e.href},e.name)),O=({breadcrumbs:e,navLinks:n})=>{var a=l.useMemo((()=>e.filter((e=>e.href)).map((e=>l.createElement(D,{breadcrumb:e,key:e.href})))),[e]),r=l.useMemo((()=>e.filter((e=>!e.obfuscated)).map((e=>({name:e.name,href:e.href})))),[e]);return 0===e.length?null:l.createElement(v,null,l.createElement(b.Consumer,null,(e=>l.createElement(l.Fragment,null,l.createElement("div",{"data-automation":"breadcrumbs",className:d("_1NfEHVx9",{K11rlKnA:e.brandRefresh})},a,l.createElement(t,{breadcrumbList:r})),e&&null!=n&&l.createElement("div",{className:"y54A-I3X"},l.createElement(M,{links:n}))))))};return[()=>{p=h.component.onUsage((()=>n("m7h4d5")),"default"),e({FooterBreadcrumbs:O,InlineBreadcrumbs:L,StackedNavLinks:M})},[e=>(l=e,a=e.default),e=>t=e.BreadcrumbsJsonLd,e=>(r=e.default,s=e.useObfuscatedUrl),e=>u=e.default,e=>c=e.default,e=>i=e.default,e=>m=e.useWindow,e=>o=e.Device,e=>d=e.default,e=>f=e.default,e=>(v=e.FeatureProvider,b=e.FeatureContext),e=>k=e.useVDOMPortal,e=>E=e.default,e=>h=e]]},["cDcdfi","nPqO2d","oiya90","pyY-iJ","5KqyYa","VP50Wc","Dg5_-9","2R4xv2","jSLlaY","zXGKDf","a4q8MG","vq6MSq","0DsHEV","pLbCP4"]]);
