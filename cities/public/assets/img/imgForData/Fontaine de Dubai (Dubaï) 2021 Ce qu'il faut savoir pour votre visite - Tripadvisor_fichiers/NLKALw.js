(this.$WP=this.$WP||[]).push(["NLKALw",(e,t)=>{"use strict";var n,r,l,a,s,o,c,i,u,f,m=(e,t)=>{if(null!=t)return t},g=({variant:e,locationId:t})=>{var r=i(),u=null;switch(e){case"offline-no-content":u=n.createElement(l,{variant:"sync-error"});break;case"network-no-content":case"no-content":case"unsuccessful":u=n.createElement(a,null);break;case"network-incomplete":case"incomplete":u=n.createElement(s,null)}return n.createElement(c,null,n.createElement(o,{trackingKey:JSON.stringify({lid:t,sn:r},m),trackingTitle:"ClientError",context:{clientContext:JSON.stringify({errorType:e})}},u))},E=e=>{var t=(({fetching:e,hasContent:t,status:n,error:r})=>{var l,a=!!(null==r?void 0:r.networkError)||!1,s="Failed to fetch"===(null==r||null==(l=r.networkError)?void 0:l.message),o=null!=n&&!n.success;if(!e){if(!t)return s?"offline-no-content":a?"network-no-content":"no-content";if(o)return"unsuccessful";if(a)return"network-incomplete";if(t&&null!=r)return"incomplete"}return null})(e);return null!=t?n.createElement(g,{variant:t,locationId:e.locationId}):null};function S({model:e}){var{success:t,message:n,partial:l}=e;return function(e,t=!0){var n=[],r={apsError:!1,apsPartial:!1,toString:()=>n.length>0?n.join("\n"):null};e&&(e.success||(n.push(`[APS Error] ${String(e.message)}`),r=Object.assign({},r,{apsError:!0})),e.partial&&(n.push("[APS Partial Result]"),r=Object.assign({},r,{apsPartial:!0}))),t&&n.length>0&&(r.apsError&&u("APS_SSR_ERROR",1),r.apsPartial&&u("APS_SSR_PARTIAL",1))}(e),t?!0===l?r.createElement(f,{level:"INFO",message:"APS partial result"}):null:r.createElement(f,{level:"INFO",message:`APS failure: ${String(n)}`})}var d=({fetching:e,hasContent:t,status:r,error:l,locationId:a})=>n.createElement(n.Fragment,null,n.createElement(E,{fetching:e,hasContent:t,status:r,error:l,locationId:a}),null!=r&&n.createElement(S,{model:r}));return[()=>{e("default",d)},[e=>(n=e,r=e.default),e=>l=e.default,e=>(a=e.default,s=e.InlineErrorState),e=>o=e.FusionTracking,e=>c=e.MountedClientOnly,e=>(i=e.useScreenName,u=e.logFusionSsrMetric,f=e.APSUnexpected)]]},["cDcdfi","jhfxP-","glH5KG","BfEQXK","4Z07E2","PEYes_"]]);
