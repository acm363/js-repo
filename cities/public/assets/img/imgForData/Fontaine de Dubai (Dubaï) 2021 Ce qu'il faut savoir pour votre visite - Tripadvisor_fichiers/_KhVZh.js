(this.$WP=this.$WP||[]).push(["_KhVZh",(n,e)=>{"use strict";var a,t,i,s,o,r=(n,e)=>{var a;if((n.width||0)<1||(n.height||0)<1)return console.error(`StaticMapSnapshot - Width (${n.width}) and height (${n.height}) params must be positive values`),null;if(n.zoom&&(n.zoom<1||n.zoom>19))return console.error(`StaticMapSnapshot - Zoom (${n.zoom}) must be between 1 and 19.`),null;var t,i,s={center:[n.center.lat,n.center.lng].join(","),width:n.width,height:n.height,zoom:n.zoom,geoId:n.geoId,servletName:n.servlet,scale:n.scale,forceMapProvider:n.forceMapProvider,mapId:n.mapId},o=(t=s,i=[],Object.keys(t).forEach((n=>{var e=t[n];if(null!=e){var a=e.toString();i.push([encodeURIComponent(n),encodeURIComponent(a)].join("="))}})),i.join("&"));return(null==(a=n.markers)?void 0:a.length)&&(o+=`&${(n=>{var e={},a={};return n&&n.length?(n.forEach((n=>{if(n){var t=n.iconUrl,{scale:i}=n,s=[n.position.lat,n.position.lng];e[t]?e[t].push(s):e[t]=[s],a[t]=i?`scale:${i}|`:""}})),Object.keys(e).map((n=>`markers=${n}|${a[n]}${e[n].join("|")}`)).join("&")):""})(n.markers)}`),n.useImageTag&&(o+=`&redirectKey=${e}`),`/data/1.0/maps/staticmap?${o}`},m=n=>{var[e,m]=a.useState(null),{locale:{code:p}}=a.useContext(i),{securityToken:c}=a.useContext(s),l=t(),_=r(n,c),[g,u]=a.useState(_),h=a.useCallback(o((n=>u(r(n,c))),100),[c]),v=a.useRef(null);return a.useEffect((()=>{n.useImageTag&&h(n)}),[n,h]),a.useEffect((()=>{if(!n.useImageTag&&_){var e=setTimeout((()=>{var n=fetch(_,{credentials:"same-origin"});v.current=n,n.then((n=>n.json())).then((e=>{n===v.current&&(m(e.url),l({module:"staticmap",action:"load",context:e.mapProvider}))})).catch((e=>{n===v.current&&(m(null),l({module:"staticmap",action:"failed",context:_}),console.error("Error loading snapshot",e))}))}),100);return()=>{clearTimeout(e)}}}),[n.useImageTag,_,l]),a.useEffect((()=>{n.useImageTag&&g&&l({module:"staticmap",action:"load",context:"zh-Hans"===p?"STATIC_MAP_AUTONAVI":"STATIC_MAP_GOOGLE"})}),[n.useImageTag,g,p,l]),n.useImageTag&&g?a.createElement("img",{"data-test-target":"staticMapSnapshot",alt:n.alt,className:n.imgClassName,src:g}):a.createElement("span",{"data-test-target":"staticMapSnapshot"},e&&a.createElement("img",{alt:n.alt,className:n.imgClassName,src:e}))},p={attractionPin:"img2/maps/icons/component_map_pins_v1/A_Pin_Small.png",miniAttractionPin:"img2/maps/icons/component_map_pins_v1/A_Pin_xs.png",anchorAttractionPin:"img2/maps/icons/responsive_map_pins_v2/AR_Anchor_pin.png",hotelPin:"img2/maps/icons/component_map_pins_v1/H_Pin_Small.png",miniHotelPin:"img2/maps/icons/component_map_pins_v1/H_Pin_xs.png",anchorHotelPin:"img2/maps/icons/responsive_map_pins_v2/H_Anchor_pin.png",restaurantPin:"img2/maps/icons/component_map_pins_v1/R_Pin_Small.png",miniRestaurantPin:"img2/maps/icons/component_map_pins_v1/R_Pin_xs.png",anchorRestaurantPin:"img2/maps/icons/responsive_map_pins_v2/R_Anchor_pin.png",rentalPin:"img2/maps/icons/responsive_map_pins_v1/VR_green_pin.png",anchorRentalPin:"img2/maps/icons/responsive_map_pins_v2/VR_Anchor_pin.png",carPin:"img2/maps/icons/component_map_pins_v1/C_Pin_Small.png",miniCarPin:"img2/maps/icons/component_map_pins_v1/C_Pin_xs.png",anchorCarPin:"img2/maps/icons/responsive_map_pins_v2/C_Anchor_pin.png"};return[()=>{m.defaultProps={imgClassName:null,alt:"",scale:1,zoom:13,forceMapProvider:null,markers:[]},n("default",m),n("SnapshotAssetCatalogue",p)},[n=>a=n,n=>t=n.useGARecorder,n=>(i=n.Environment,s=n.Device),n=>o=n.default]]},["cDcdfi","fsml46","2R4xv2","gsKhh7"]]);
