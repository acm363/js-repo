(this.$WP=this.$WP||[]).push(["HZtvHO",(e,t)=>{"use strict";var a,r,i,n,o,l,s,c,d,u,p,v,m,T,E,S,C,b,g,I,f,k,_,y,h,O,A,M,j,P,R,L,x,N;function w(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}var V=(e,t)=>{var a,r,i;if(!t)return e;var n=(null==(a=e.paginatedTrips)?void 0:a.trips)||[],o=(null==(r=t.paginatedTrips)?void 0:r.trips)||[];return{paginatedTrips:e.paginatedTrips?{trips:[...n,...o],hasMore:!!(null==(i=t.paginatedTrips)?void 0:i.hasMore),__typename:e.paginatedTrips.__typename}:t.paginatedTrips,savedTrips:e.savedTrips}},D=e=>{var t;return{__typename:e.__typename,id:e.id||0,title:e.title||void 0,status:e.status||void 0,photoId:e.photoId||void 0,photo:e.photo||{},route:{url:e.route&&e.route.url||void 0},actionPermissions:{canAddItem:!!(null==(t=e.actionPermissions)?void 0:t.canAddItem)}}},F="_1ZX8j9so",U="_2VvuVGxR",G=e=>{var t,{saveObject:i,overlayState:n,validateTripName:o,lastSavedItem:c,trackingContext:d,trackingSource:p}=e,v=w(e,["saveObject","overlayState","validateTripName","lastSavedItem","trackingContext","trackingSource"]),[m,T]=a.useState(!0),{fetching:S,error:C,data:b,hasMore:k,loadMore:_}=(e=>{var t,r,i,n,o,s,c,d=(t,a)=>{if(!t||!a)return"invalidateAndRefetch";var{originalObject:r}=e;return r&&a===r.type&&t===String(r.id)||a===e.type&&t===String(e.id)?"invalidateAndRefetch":"validate"},{userId:p}=a.useContext(u),v={offset:0,limit:10,userId:p||"",reference:l(e),loadSavedTrips:!0},[m,T]=O({query:M,variables:v,combineData:V,showFetchingAfterFirstQuery:!0,invalidationPredicates:{createTrip:()=>"invalidateAndRefetch",cloneTrip:()=>"invalidateAndRefetch",tripsDelete:()=>"invalidateAndRefetch",addItemToTrip:({variables:{referenceId:e,referenceType:t}})=>d(e,t),moveTripItem:({variables:{reference:e}})=>d(null==e?void 0:e.id,null==e?void 0:e.type),tripsRemoveItem:({variables:{reference:e}})=>d(null==e?void 0:e.id,null==e?void 0:e.type),tripsRemoveReference:({variables:{reference:e}})=>d(null==e?void 0:e.id,null==e?void 0:e.type)}}),S=E("trips_skip_check_whitelist_public_trips"),[C]=P({query:j,variables:{},pause:S}),b=(null==(t=m.data)||null==(r=t.paginatedTrips)?void 0:r.trips)||[],g=b.slice().filter(Boolean).map(D),I=!!(null==(i=m.data)||null==(n=i.paginatedTrips)?void 0:n.hasMore),f=(null==(o=m.data)?void 0:o.savedTrips)||[],k=new Set(f.map((e=>null==e?void 0:e.id)).filter(Boolean)),_=I?()=>T({offset:(null==b?void 0:b.length)||0,loadSavedTrips:!1}):()=>Promise.resolve(),y=S||(null==(s=C.data)||null==(c=s.authzInfo)?void 0:c.canMakePublicTrip);return{fetching:m.fetching||C.fetching,error:!!m.error,data:{tripList:g,saveSet:k,canMakePublicTrip:y},hasMore:I,loadMore:_}})(i);S?t=a.createElement(f,{size:"large"}):C&&(t=a.createElement(h,{refetch:_})),a.useEffect((()=>{S||T(!1)}),[]);var[A]=r({source:p||"trips",trackingContext:d,pageAsContext:!0,withSaveSession:!0}),G=()=>{v.onClose(),T(!0)},q=R[n](i.type),W=a.createElement(I,{iconName:E("trips_heart_icon")?"heart":"suitcase",displayType:"LEFT_ALIGN_GRAY"},q);return a.createElement(y,{element:"bundleSave"===i.type?"copyTripModal":"saveTripModal"},a.createElement(g,{header:W,closeIconColor:"BLACK",bodyProps:{isFullBleed:!0},onClose:G},t&&m?a.createElement("div",{className:F},t):(()=>{var e=c?s(c):void 0,r=()=>a.createElement("div",{className:U},a.createElement(L,{gate:()=>Promise.resolve(),object:i,onMount:()=>{S||C||A({elementClick:{element:"createTrip"}})},onAddedToCreatedTrip:e=>{v.statCallback("ADD","NEW",e,!0,!0),G()},onError:v.onError,canMakePublicTrip:b.canMakePublicTrip,validateTripName:o,trackingContext:d,trackingSource:p}));switch(n){case"DEFAULT":return 0===b.tripList.length?r():a.createElement(N,{tripList:b.tripList,savedSet:b.saveSet,tripListBottom:t,onPaginate:_,hasMore:k,saveObject:i,onMount:()=>{v.preventInteractionInMountedComponents||A({elementClick:{element:"stat"}})},onCreateTrip:()=>{v.onCreateTripClicked&&v.onCreateTripClicked()},tripAction:"SAVE",onRemovedFromTrip:(e,t,a)=>{v.statCallback("REMOVE","EXISTING",e,t,a),G()},onSavedToTrip:(e,t,a)=>{v.statCallback("ADD","EXISTING",e,t,a),G()},onError:v.onError,trackingContext:d,trackingSource:p});case"CREATE":return r();case"SELECT":return e?a.createElement(N,{tripList:b.tripList,savedSet:b.saveSet,tripListBottom:t,onPaginate:_,hasMore:k,saveObject:e,onMount:()=>{A({elementClick:{element:"stat"}})},onCreateTrip:()=>{v.onSelectCreateTripClicked&&v.onSelectCreateTripClicked()},tripAction:"MOVE",onMovedToTrip:(e,t,a)=>{v.statCallback("MOVE","EXISTING",e,t,a),G()},onRemovedFromTrip:(e,t,a)=>{v.statCallback("REMOVE","EXISTING",e,t,a),G()},onError:v.onError,trackingContext:d,trackingSource:p}):"";case"SELECT_CREATE":return c?a.createElement("div",{className:U},a.createElement(x,{gate:()=>Promise.resolve(),item:c,onMovedToCreatedTrip:e=>{v.statCallback("MOVE","NEW",e,!0,!0),G()},canMakePublicTrip:b.canMakePublicTrip})):r();default:return""}})()))},q=(e,t)=>{switch(t.type){case"setOverlayState":return Object.assign({},e,{overlayState:t.state});case"afterSave":return Object.assign({},e,{overlayState:"DEFAULT",preventInteractionInMountedComponents:!0});default:throw new Error}},W=e=>{var t,{logInteraction:r,object:i,active:o,preventInteractionPropagation:l,trackingContext:s,trackingSource:c,resaveTrip:p,saveObject:v,saveStatus:m,updateLastTripId:T,initialOverlayState:E}=e,b=w(e,["allowPopStatModal","logInteraction","puid","object","active","preventInteractionPropagation","trackingContext","trackingSource","resaveTrip","saveObject","saveStatus","updateLastTripId","onClose","initialOverlayState"]),{userId:g}=a.useContext(u),{launchViewTripToast:I,launchRemoveFromTripToast:f,launchErrorTripToast:k}=d(),{getTripErrorMessage:_}=S(),y=C("SAVE_TO_TRIP_INTENT"),h=C("SAVE_TO_TRIP"),O=C({type:"CREATE_TRIP",payload:{user_id:g||""}}),A=a.useContext(n),[M,j]=a.useReducer(q,{overlayState:E||"DEFAULT",preventInteractionInMountedComponents:!1}),P=a.useRef(!0);a.useEffect((()=>()=>{P.current=!1}),[]);var{onComplete:R}=b,L=a.useCallback((e=>{R&&R(e),A.resetSession()}),[R,A]),x=a.useCallback(((e,t)=>{e&&!t?(I(e,"SAVED",(()=>{r({elementClick:{element:"saved_viewTrip"}})})),L(!0)):t&&(k(t),L(!1)),P.current&&j({type:"setOverlayState",state:"DEFAULT"}),r({elementClick:{element:"unsave_undo"}})}),[I,L,k,r]),N=a.useCallback((e=>{f(e,v,x)}),[f,x,v]),V=a.useCallback((e=>{k(e)}),[k]),[D,F]=a.useState(!1),U=a.useCallback((()=>{F(!0),A.resetSession()}),[A]),W=a.useCallback(((e,t)=>{"CREATED"===t&&(h(),O()),P.current&&j({type:"afterSave"}),I(e,t,(()=>{r({elementClick:{element:"saved_viewTrip"}})})),T(e.id),L(!0)}),[h,I,L,T,O,r]);return!D&&a.createElement("div",{className:"stat_wrapper",onClick:e=>{e.stopPropagation(),e.preventDefault(),!l&&g&&r({elementClick:{element:"item_save",tripId:null==p?void 0:p.id}}),o||y()}},a.createElement(G,{saveObject:v,overlayState:M.overlayState,lastSavedItem:null==(t=m.result)?void 0:t.tripItem,trackingContext:s,trackingSource:c,onCreateTripClicked:()=>{P.current&&j({type:"setOverlayState",state:"CREATE"})},onSelectCreateTripClicked:()=>{P.current&&j({type:"setOverlayState",state:"SELECT_CREATE"})},onClose:U,onError:V,preventInteractionInMountedComponents:M.preventInteractionInMountedComponents,statCallback:(e,t,a,r,i)=>{"REMOVE"===e?(N(a),L(i)):"NEW"===t?W(a,"CREATED"):r&&W(a,"SAVED")},validateTripName:e=>{if("bundleSave"===v.type&&e.trim().toLowerCase()===i.title.trim().toLowerCase())return _("COPY_TRIP",{type:"INVALID_VALUE",field:"TITLE"})}}))},Q=e=>E("trips_bookmark")?a.createElement(i,null,a.createElement(b,null,a.createElement(W,e))):null,B=["Profile","HomeFeed","Trips","Home"],X=e=>{var{children:t}=e,l=w(e,["children"]),c=a.useMemo((()=>l.saveObject||s(l.object,!0)),[l.saveObject,l.object]),u=(e=>{var t=a.useMemo((()=>e.saveObject||s(e.object,!0)),[e.saveObject,e.object]),{resaveTrip:i,onComplete:l,allowPopStatModal:c}=e,{isNativeWebview:u,tripId:S}=e,C=w(e,["isNativeWebview","tripId"]),{launchAutoSavedToTripToast:b,launchErrorTripToast:g}=d(),[I]=a.useContext(p),{page:f}=I,k=a.useMemo((()=>({source:e.trackingSource||"trips",saveObject:t,trackingContext:e.trackingContext,withSaveSession:!0,pageAsContext:!0})),[e.trackingContext,e.trackingSource,t]),[_,y]=r(k),h=a.useContext(n),[O,A,M]=v(S,t,e.active),j=null==t?void 0:t.id,P=null==t?void 0:t.type,R=a.useCallback((e=>{g(e)}),[g]),L=a.useCallback((()=>{_({elementClick:{element:"ITEM_SAVE_LOGIN",context:f&&o(f)||void 0,puid:y,saveType:P,detailId:j?`${j}`:"",tripId:null==i?void 0:i.id,sessionType:"SAVE",sessionUuid:h.sessionUuid,sessionOrder:h.sessionOrder}})}),[_,f,y,i,j,P,h.sessionOrder,h.sessionUuid]),x=a.useCallback((()=>{_({modalSuccess:{element:"ITEM_SAVE_LOGIN",context:f&&o(f)||void 0,puid:y,saveType:P,detailId:j?`${j}`:"",tripId:null==i?void 0:i.id,sessionType:"SAVE",sessionUuid:h.sessionUuid,sessionOrder:h.sessionOrder}})}),[_,f,y,i,j,P,h.sessionOrder,h.sessionUuid]),N=a.useMemo((()=>({pid:f&&B.includes(I.page)?40439:39766,flow:u?"NATIVE_LOGIN":"SAVES_COMBINED",onLogin:L,onSuccess:x,isFullWidthMobile:!0})),[L,x,f,I.page,u]),V=m(N),D=a.useRef(!1),{open:F}=T((()=>t?a.createElement(Q,Object.assign({},C,{logInteraction:_,puid:y,saveObject:t,saveStatus:O,updateLastTripId:M})):null)),{open:U}=T((()=>t?a.createElement(Q,Object.assign({},C,{initialOverlayState:"SELECT",logInteraction:_,puid:y,saveObject:t,saveStatus:O,updateLastTripId:M})):null)),G=a.useMemo((()=>I.params.popStat||!1),[I.params]),q=a.useCallback((()=>!!c&&G&&E("trips_pop_stat_modal")),[c,G]);return a.useEffect((()=>{q()&&!D.current&&(D.current=!0,_({elementClick:{element:"autoPopStat"}}),V().then(F))}),[_,V,F,q]),a.useCallback((()=>{V().then((()=>A())).then((([e,t])=>{null!==e||null!==t?t?R({query:"ADD_ITEM_TO_TRIP",tripsError:t}):e&&(b(e,(()=>{U(),_({elementClick:{element:"quickSave_change"}})})),_({modalSuccess:{element:"quickSave",tripId:null==i?void 0:i.id,context:f&&o(f)||void 0,saveType:P,detailId:j?`${j}`:""}}),l&&l(!0)):F()}))}),[F,U,b,_,V,l,R,A,f,i,j,P])})(l);return c?a.createElement(i,null,t(u)):null},H=e=>{var t,r,i,n,o,l,s,c,d,{queryObject:p,children:v}=e,m=w(e,["queryObject","children"]),[T,E]=a.useState((null==(t=m.object)||null==(r=t.object)?void 0:r.socialStatistics)?!!(null==(i=m.object)||null==(n=i.object)||null==(o=n.socialStatistics)?void 0:o.isSaved):!!(null==(l=m.object)||null==(s=l.socialStatistics)?void 0:s.isSaved)),S=(e,t)=>{if(!e||!t)return"invalidateAndRefetch";var{originalObject:a}=p;return a&&t===a.type&&e===String(a.id)||t===p.type&&e===String(p.id)?"invalidateAndRefetch":"validate"},{userId:C}=a.useContext(u);d=C?(null==(c=m.object)?void 0:c.socialStatistics)?"afterInvalidation":"immediately":"never";var[{fetching:b,data:g,error:I}]=A({query:p.query,variables:p.variables,executeWhen:d},{addItemToTrip:({variables:{referenceId:e,referenceType:t}})=>S(e,t),tripsRemoveItem:({variables:{reference:e}})=>S(null==e?void 0:e.id,null==e?void 0:e.type),tripsRemoveReference:({variables:{reference:e}})=>S(e.id,null==e?void 0:e.type)});return a.useEffect((()=>{if(!b&&!I){var e=g&&g.savesObjects&&g.savesObjects[0];if(e){var{id:t,socialStatistics:a={}}=e,r=(t===p.id||String(t)===p.id)&&!!a.isSaved;r!==T&&E(r)}}}),[b,g,I]),a.createElement(X,Object.assign({active:T},m),(e=>v(e,T,b)))},z=e=>{if(!E("trips_bookmark"))return null;var t=e.saveObject||s(e.object,!0);if(!t)return console.error("An invalid saves object was passed to QueriedTripFlowSelector"),null;var r=c(t);return r?a.createElement(H,Object.assign({},e,{queryObject:r})):(console.error("Unsupported saves object was passed to QueriedTripFlowSelector"),null)};return[()=>{R=Object.freeze({DEFAULT:e=>"bundleSave"!==e?a.createElement(k,{id:"stat_modal_save_to_trip_v2"}):a.createElement(k,{id:"save_all_items_modal_header"}),CREATE:()=>a.createElement(k,{id:"stat_modal_create_a_trip_v2"}),SELECT:()=>a.createElement(k,{id:"select_trip_header"}),SELECT_CREATE:()=>a.createElement(k,{id:"stat_modal_create_a_trip_v2"})}),L=_.component.onUsage((()=>t("neHaXV")),"CreateTripWithAddItemModal",a.createElement("div",{className:F},a.createElement(f,{size:"large"}))),x=_.component.onUsage((()=>t("neHaXV")),"CreateTripWithMoveItemModal",a.createElement("div",{className:F},a.createElement(f,{size:"large"}))),N=_.component.onUsage((()=>t("pBQaod")),"SaveToTripContent",a.createElement("div",{className:F},a.createElement(f,{size:"large"}))),W.defaultProps={preventInteractionPropagation:!1,onComplete:void 0,trackingContext:void 0,allowPopStatModal:!1},z.defaultProps={object:null,trackingContext:void 0,allowPopStatModal:!1},e({QueriedTripFlowSelector:z,TripFlowSelector:X})},[e=>a=e,e=>(r=e.useTripInteraction,i=e.SaveSessionProvider,n=e.SaveSessionTrackingContext,o=e.getInteractionsContext),e=>(l=e.toReference,s=e.toSavesObject,c=e.objectStatisticQuery),e=>d=e.default,e=>(u=e.Visitor,p=e.Route),e=>v=e.useAutosave,e=>m=e.useSocialLoginGate,e=>T=e.useVDOMPortal,e=>E=e.featureIsEnabled,e=>S=e.useLocalizeTripError,e=>C=e.usePixelCallback,e=>b=e.ToastProvider,e=>g=e.default,e=>I=e.TitleBar,e=>f=e.LoadingSpinner,e=>k=e.default,e=>_=e,e=>y=e.TripsImpression,e=>h=e.default,e=>(O=e.usePaginatedQuery,A=e.useInvalidatableQuery),e=>(M=e.TripDetailStatQuery,j=e.GetUserAuthZInfo),e=>P=e.useQuery]]},["cDcdfi","U-DhDC","eFKnUp","PiTJFd","2R4xv2","fTyhRT","JFHNGL","vq6MSq","-i3PJS","9I0t-6","jb_4W2","Q7TAd7","O8LbtK","6nM-E7","V08PS7","0DsHEV","pLbCP4","c_rvp5","LFeTN6","OnmvvE","RXx5aI","5X2em-"]]);
