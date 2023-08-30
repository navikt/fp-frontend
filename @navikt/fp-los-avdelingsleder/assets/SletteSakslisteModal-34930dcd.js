import{j as e}from"./jsx-runtime-9c4ae004.js";import{f as d,a as u,g as l}from"./nb_NO-7fc4d3fe.js";import{N as n}from"./Provider-862e7645.js";import{H as m}from"./Heading-87cc8cdf.js";const c="_submitButton_cko9v_1",p="_cancelButton_cko9v_6",r={submitButton:c,cancelButton:p},a=({valgtSaksliste:t,cancel:i,submit:o})=>{const s=d();return e.jsxs(n,{width:"small",open:!0,"aria-label":s.formatMessage({id:"SletteSakslisteModal.SletteModal"}),onClose:i,children:[e.jsx(n.Header,{children:e.jsx(m,{size:"small",children:e.jsx(u,{id:"SletteSakslisteModal.SletteSaksliste",values:{sakslisteNavn:t.navn}})})}),e.jsxs(n.Footer,{children:[e.jsx(l,{className:r.submitButton,size:"small",variant:"primary",onClick:()=>o(t),autoFocus:!0,type:"button",children:s.formatMessage({id:"SletteSakslisteModal.Ja"})}),e.jsx(l,{className:r.cancelButton,size:"small",variant:"secondary",onClick:i,type:"button",children:s.formatMessage({id:"SletteSakslisteModal.Nei"})})]})]})},S=a;try{a.displayName="SletteSakslisteModal",a.__docgenInfo={description:`SletteSakslisteModal

Modal som lar en avdelingsleder fjerne sakslister.`,displayName:"SletteSakslisteModal",props:{valgtSaksliste:{defaultValue:null,description:"",name:"valgtSaksliste",required:!0,type:{name:"Readonly<{ sakslisteId: number; navn?: string | undefined; behandlingTyper?: string[] | undefined; fagsakYtelseTyper?: string[] | undefined; sistEndret: string; sortering?: { sorteringType: string; ... 4 more ...; erDynamiskPeriode: boolean; } | undefined; andreKriterier?: Readonly<...>[] | undefined; saksbehandlerI..."}},cancel:{defaultValue:null,description:"",name:"cancel",required:!0,type:{name:"() => void"}},submit:{defaultValue:null,description:"",name:"submit",required:!0,type:{name:"(saksliste: Readonly<{ sakslisteId: number; navn?: string | undefined; behandlingTyper?: string[] | undefined; fagsakYtelseTyper?: string[] | undefined; sistEndret: string; sortering?: { sorteringType: string; ... 4 more ...; erDynamiskPeriode: boolean; } | undefined; andreKriterier?: Readonly<...>[] | undefined; sa..."}}}}}catch{}export{S};
//# sourceMappingURL=SletteSakslisteModal-34930dcd.js.map
