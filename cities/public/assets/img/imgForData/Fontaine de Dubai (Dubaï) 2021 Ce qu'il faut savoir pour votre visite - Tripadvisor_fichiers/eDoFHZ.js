(this.$WP=this.$WP||[]).push(["eDoFHZ",(e,t)=>{"use strict";var r,n,u,i,o,s,p=(e,t)=>{if("TO"===t.type)return{previous:[...e.previous,e.current],current:t.to,next:[]};if("REPLACE"===t.type)return{previous:[...e.previous],current:t.to,next:[]};if("CLEAR"===t.type)return{previous:[],current:e.previous.length>0?e.previous[0]:e.current,next:[]};if("TO_INDEX"===t.type){if(t.to<0)return p(e,Object.assign({},t,{to:0}));if(t.to>e.previous.length+e.next.length)return p(e,Object.assign({},t,{to:e.previous.length+e.next.length}));if(t.to<e.previous.length)return{previous:e.previous.slice(0,t.to),current:e.previous[t.to],next:[...e.previous.slice(t.to+1),e.current,...e.next]};if(t.to>e.previous.length){var r=t.to-(e.previous.length+1);return{previous:[...e.previous,e.current,...e.next.slice(0,r)],current:e.next[r],next:e.next.slice(r+1)}}if(t.type)return e}return e},v=e=>{var[t,v]=r(p,{previous:[],current:e,next:[]}),c=n(null),[{fragment:l},{navigateToFragment:g}]=u(s);i((()=>{var e=parseInt(l,10)||0;if(c.current){var r=c.current;return c.current=null,void v(r)}e!==t.previous.length&&(e>=0&&e<=t.previous.length+t.next.length?v({type:"TO_INDEX",to:e}):(g("","IN_PLACE"),v({type:"CLEAR"})))}),[l,g,t,v,c]);var a=o((e=>{c.current={to:e,type:"TO"},g(String(t.previous.length+1))}),[t,g]),f=o((e=>{v({to:e,type:"REPLACE"})}),[v]);return[t,a,f]};return[()=>{e("default",v)},[e=>(r=e.useReducer,n=e.useRef,u=e.useContext,i=e.useEffect,o=e.useCallback),e=>s=e.Route]]},["cDcdfi","2R4xv2"]]);
