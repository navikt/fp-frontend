import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./index-mMUbb89k.js";import"./withPanelData-CPDnEARm.js";const s={errors:[]},u=r.createContext(s),E=r.createContext(void 0),T=({children:e,initialState:t})=>{const[a,n]=r.useReducer((p,i)=>{switch(i.type){case"add":return{errors:p.errors.concat(i.data)};case"remove":return s;default:throw new Error}},t||s);return o.jsx(u.Provider,{value:a,children:o.jsx(E.Provider,{value:n,children:e})})},m=()=>{const e=r.useContext(E),t=r.useCallback(n=>{e&&e({type:"add",data:n})},[]),a=r.useCallback(()=>{e&&e({type:"remove"})},[]);return{addErrorMessage:t,removeErrorMessages:a}},_=()=>r.useContext(u).errors;T.__docgenInfo={description:"Tilbyr kontekst for lagring av feilmeldinger.",methods:[],displayName:"RestApiErrorProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},initialState:{required:!1,tsType:{name:"signature",type:"object",raw:"{ errors: FpError[] }",signature:{properties:[{key:"errors",value:{name:"Array",elements:[{name:"union",raw:`| GeneralError
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
}`,signature:{properties:[{key:"type",value:{name:"ErrorType.POLLING_HALTED_OR_DELAYED",required:!0}},{key:"status",value:{name:"ApiPollingStatus.DELAYED",required:!0}},{key:"message",value:{name:"string",required:!0}},{key:"eta",value:{name:"string",required:!0}}]}}]}],raw:"FpError[]",required:!0}}]}},description:""}}};var l=(e=>(e.GENERAL_ERROR="GENERAL_ERROR",e.POLLING_TIMEOUT="POLLING_TIMEOUT",e.POLLING_HALTED_OR_DELAYED="POLLING_HALTED_OR_DELAYED",e.REQUEST_GATEWAY_TIMEOUT_OR_NOT_FOUND="REQUEST_GATEWAY_TIMEOUT_OR_NOT_FOUND",e.REQUEST_FORBIDDEN="REQUEST_FORBIDDEN",e.REQUEST_UNAUTHORIZED="REQUEST_UNAUTHORIZED",e))(l||{});export{l as E,T as R,_ as a,m as u};
