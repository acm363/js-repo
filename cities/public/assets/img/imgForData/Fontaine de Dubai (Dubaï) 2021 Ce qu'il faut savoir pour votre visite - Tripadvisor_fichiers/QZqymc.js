(this.$WP=this.$WP||[]).push(["QZqymc",(e,a)=>{"use strict";var i,n,t,r,d,l,u=["TITLE","META_DESCRIPTION","MASTHEAD_H1","MAIN_H1","IS_INDEXABLE","RELCANONICAL"],s=(e=!1)=>{var a,[{page:s,params:m}]=i.useContext(t),{locale:k}=i.useContext(r),v=i.useMemo((()=>Object.entries(m).map((([e,a])=>({key:e,value:String(a)})))),[m]),o=i.useMemo((()=>({page:s,params:m})),[s,m]),[{fetching:c,data:p,error:N}]=(e?d:n)({query:l,variables:{page:s,pos:k.code,parameters:v,factors:u,route:o}}),f=null==p||null==(a=p.Opf_getOnPageFactorsForLocale)?void 0:a[0];if(f&&f.factors&&!f.errMessage){var y={};return f.factors.forEach((e=>{e&&e.key&&e.value&&(y[e.key]=e.value)})),{fetching:c,opfs:y,error:N}}return{fetching:c,opfs:null,error:N}},m=(e=!1)=>{var{opfs:a}=s(e);return a};return[()=>{(l=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"OpfQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pos"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"parameters"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Opf_ParameterInput"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"factors"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Opf_FactorType"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"route"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Routing_BasicRouteInput"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Opf_getOnPageFactorsForLocale"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"requests"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"pos"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pos"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"servlet"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"parameters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"parameters"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"factors"},"value":{"kind":"Variable","name":{"kind":"Name","value":"factors"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"route"},"value":{"kind":"Variable","name":{"kind":"Name","value":"route"}}}]}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errMessage"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"factors"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":379}}')).__key=7431796240072,e("default",m),e("useOnPageFactorsWithStatus",s)},[e=>i=e,e=>n=e.useQuery,e=>(t=e.Route,r=e.Environment),e=>d=e.useQueryRequiredSsr]]},["cDcdfi","5X2em-","2R4xv2","OnmvvE"]]);
