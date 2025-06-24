import{r,j as o}from"./iframe-FnIO03g-.js";const a={errors:[]},E=r.createContext(a),u=r.createContext(void 0),T=({children:e,initialState:s})=>{const[n,t]=r.useReducer((p,i)=>{switch(i.type){case"add":return{errors:p.errors.concat(i.data)};case"remove":return a;default:throw new Error}},s||a);return o.jsx(E.Provider,{value:n,children:o.jsx(u.Provider,{value:t,children:e})})},R=()=>{const e=r.useContext(u);return{addErrorMessage:t=>{e&&e({type:"add",data:t})},removeErrorMessages:()=>{e&&e({type:"remove"})}}},d=()=>r.useContext(E).errors;T.__docgenInfo={description:"Tilbyr kontekst for lagring av feilmeldinger.",methods:[],displayName:"RestApiErrorProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},initialState:{required:!1,tsType:{name:"signature",type:"object",raw:"{ errors: FpError[] }",signature:{properties:[{key:"errors",value:{name:"Array",elements:[{name:"union",raw:`| GeneralError
| PollingTimeoutError
| RequestForbiddenError
| RequestUnauthorizedError
| RequestGatewayTimeoutOrNotFoundError
| PollingHaltedError
| PollingDelayedError`,elements:[{name:"signature",type:"object",raw:`{
  type: ErrorType.GENERAL_ERROR;
  message: string;
}`,signature:{properties:[{key:"type",value:{name:"ErrorType.GENERAL_ERROR",required:!0}},{key:"message",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  type: ErrorType.POLLING_TIMEOUT;
  message: string;
  location: string;
}`,signature:{properties:[{key:"type",value:{name:"ErrorType.POLLING_TIMEOUT",required:!0}},{key:"message",value:{name:"string",required:!0}},{key:"location",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  type: ErrorType.REQUEST_FORBIDDEN;
  message: string;
}`,signature:{properties:[{key:"type",value:{name:"ErrorType.REQUEST_FORBIDDEN",required:!0}},{key:"message",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  type: ErrorType.REQUEST_UNAUTHORIZED;
  message: string;
}`,signature:{properties:[{key:"type",value:{name:"ErrorType.REQUEST_UNAUTHORIZED",required:!0}},{key:"message",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  type: ErrorType.REQUEST_GATEWAY_TIMEOUT_OR_NOT_FOUND;
  location: string;
}`,signature:{properties:[{key:"type",value:{name:"ErrorType.REQUEST_GATEWAY_TIMEOUT_OR_NOT_FOUND",required:!0}},{key:"location",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  type: ErrorType.POLLING_HALTED_OR_DELAYED;
  status: ApiPollingStatus.HALTED;
  message: string;
}`,signature:{properties:[{key:"type",value:{name:"ErrorType.POLLING_HALTED_OR_DELAYED",required:!0}},{key:"status",value:{name:"ApiPollingStatus.HALTED",required:!0}},{key:"message",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  type: ErrorType.POLLING_HALTED_OR_DELAYED;
  status: ApiPollingStatus.DELAYED;
  message: string;
  eta: string;
}`,signature:{properties:[{key:"type",value:{name:"ErrorType.POLLING_HALTED_OR_DELAYED",required:!0}},{key:"status",value:{name:"ApiPollingStatus.DELAYED",required:!0}},{key:"message",value:{name:"string",required:!0}},{key:"eta",value:{name:"string",required:!0}}]}}]}],raw:"FpError[]",required:!0}}]}},description:""}}};var g=(e=>(e.GENERAL_ERROR="GENERAL_ERROR",e.POLLING_TIMEOUT="POLLING_TIMEOUT",e.POLLING_HALTED_OR_DELAYED="POLLING_HALTED_OR_DELAYED",e.REQUEST_GATEWAY_TIMEOUT_OR_NOT_FOUND="REQUEST_GATEWAY_TIMEOUT_OR_NOT_FOUND",e.REQUEST_FORBIDDEN="REQUEST_FORBIDDEN",e.REQUEST_UNAUTHORIZED="REQUEST_UNAUTHORIZED",e))(g||{});export{g as E,T as R,d as a,R as u};
