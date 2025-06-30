import{b as ge,j as p,P as Ce,m as rT,a0 as Pu,a1 as rt,a2 as aT,r as j,o as Du,l as br,a3 as tT,a4 as sT,U as lT,B as J,F as ut,i as I,s as Qr,v as el,n as po,V as Lu,u as iT,G as uT}from"./iframe-CieR7k8J.js";import{u as Ue,e as oT,n as un,B as ne,d as nl,a as pt,c as Zr,s as dT,v as gT,x as kT,y as mT,V as Ws}from"./fagsakApi-ByEq8Mzo.js";import{B as ot,Q as pT,K as vT,r as yT,Z as vo}from"./index.es-BO-o7llL.js";import{D as dt,t as Ie,a as fT,o as rl,b as gt,E as TT,M as hT,Y as Xr,A as Ls,f as bT,m as ET,k as cT,P as xu,O as Uu,u as Er,N as cr,C as AT,y as RT,e as mn}from"./index.es-L27AQpVk.js";import{b as He,H as Pn,V as Nn,L as vt,B as kt,D as zs,t as Hu,M as de,a as ea,w as _T,x as qT,y as NT}from"./VStack-CaagOIyh.js";import{M as te}from"./message-C7ei2db-.js";import{A as yo}from"./index-W4DJkiAI.js";import{c as VT}from"./bind-BWmQj8B0.js";import{R as ST,y as xs}from"./index.es-CqEAtkun.js";import{K as Cu}from"./Kjonnkode-C-fkzSiP.js";import{T as ln}from"./Table-DqIJh-jq.js";import{S as BT}from"./CheckmarkCircleFill-DPiv6D22.js";import{B as ye}from"./behandlingResultatType-CVAxOrek.js";import{D as wT}from"./dokumentMalType-B-Xou3xH.js";import{L as KT}from"./Link-hqv2Q1Oz.js";import{S as jT}from"./SettPaVentModalIndex-_hZd2nFZ.js";import{u as fo,a as IT,b as OT,d as FT}from"./useBehandlingPollingOperasjoner-9QC05SQz.js";import{u as na,a as Yu}from"./behandlingApi-BDoL6U2E.js";import{u as GT,a as MT}from"./useKodeverk-Dx2RqYq5.js";import{r as PT,c as DT}from"./paths-Crn_Q2sD.js";import{D as $r}from"./Dropdown-B5PotPUe.js";import{S as LT}from"./ChevronDown-Dc5Qt_rU.js";var st=(a=>(a.INGEN_TILBAKEBETALING="INGEN_TILBAKEBETALING",a.DELVIS_TILBAKEBETALING="DELVIS_TILBAKEBETALING",a.FULL_TILBAKEBETALING="FULL_TILBAKEBETALING",a.HENLAGT_FEILOPPRETTET="HENLAGT_FEILOPPRETTET",a.HENLAGT_FEILOPPRETTET_MED_BREV="HENLAGT_FEILOPPRETTET_MED_BREV",a.HENLAGT_FEILOPPRETTET_UTEN_BREV="HENLAGT_FEILOPPRETTET_UTEN_BREV",a))(st||{}),al=(a=>(a.BARN="BARN",a.FBARN="FBARN",a.VOKSEN="VOKSEN",a.ADVOKAT="ADVOKAT",a.ANNEN_F="ANNEN_F",a))(al||{}),mt=(a=>(a.FPSAK="FPSAK",a.FPTILBAKE="FPTILBAKE",a))(mt||{});const xT=()=>{const a=[mt.FPSAK],{status:u}=Ue(oT());return u!=="error"&&a.push(mt.FPTILBAKE),a},yt={"MenySakIndex.Behandlingsmeny":"Behandlingsmeny","MenyVergeIndex.OpprettVerge":"Opprett verge/fullmektig","MenyVergeIndex.FjernVerge":"Fjern verge/fullmektig","MenyVergeIndex.OpprettVergeSporsmal":"Opprett verge/fullmektig?","MenyVergeIndex.FjernVergeSporsmal":"Fjern verge/fullmektig?","MenyVergeIndex.Opprett":"Opprett","MenyVergeIndex.Fjern":"Fjern","MenyVergeIndex.Avbryt":"Avbryt","MenyTaAvVentIndex.ResumeBehandling":"Fortsett behandlingen","MenyTaAvVentIndex.TaAvVent":"Ta behandlingen av vent?","MenyEndreBehandlendeEnhetIndex.ByttBehandlendeEnhet":"Endre behandlende enhet","EndreBehandlendeEnhetModal.ModalDescription":"Endre behandlende enhet","EndreBehandlendeEnhetModal.Endre":"Endre enhet","EndreBehandlendeEnhetModal.EndreEnhet":"Endre behandlende enhet for valgt behandling","EndreBehandlendeEnhetModal.NyEnhetField":"Ny enhet","EndreBehandlendeEnhetModal.BegrunnelseField":"Begrunnelse","EndreBehandlendeEnhetModal.Ok":"OK","EndreBehandlendeEnhetModal.Avbryt":"Avbryt"};ge(yt);const ra={"AdresseVisning.Adresse":"Adresse","ForelderPanel.Soker":"Søker","ForelderPanel.AnnenForelder":"Annen forelder","AlleBarnPanel.Barn":"Barn","AlleBarnPanel.BarnNr":"Barn {nummer}","AlleBarnPanel.Fodt":"Født","AlleBarnPanel.Dod":"Død","PersonPanel.RolleOgNavn":"{rolle, select, BRUKER {Søker, } ANNEN_PART {Den andre forelderen, } BARN {Barnet, } other {} }{navn}","PersonPanel.Beskrivelse.Bruker":"Adresser for søker registrert i folkeregisteret gyldige for de siste 12 månedene","PersonPanel.Beskrivelse.Barn":"Adresser for barnet registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Beskrivelse.Annenpart":"Adresser for den andre forelderen registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Fodt":"Født {dato}","PersonPanel.Dod":"Død {dato}","AdresseTabell.IngenAdresse":"Ingen adresser funnet for {erAnnenpart, select, true {den andre forelderen} other {søker} }.","AdresseTabell.SammeAdresse":"Den andre forelderen har samme adresse som søker på skjæringstidspunktet","AdresseTabell.PeriodeLabel":"Periode","AdresseTabell.AdresseLabel":"Adresse","AdresseTabell.TypeLabel":"Type","MerkePanel.Dod":"DØD","MerkePanel.DodTittel":"Personen er død","MerkePanel.DodFodt":"DØDFØDT","MerkePanel.Diskresjon6":"Kode 6","MerkePanel.Diskresjon7":"Kode 7","MerkePanel.EgenAnsatt":"Nav","MerkePanel.Verge":"Verge","MerkePanel.Diskresjon6Tittel":"Personen har diskresjonsmerking kode 6","MerkePanel.Diskresjon7Tittel":"Personen har diskresjonsmerking kode 7","MerkePanel.EgenAnsattTittel":"Personen er ansatt i Nav","MerkePanel.VergeTittel":"Personen har verge","SubmitButton.ConfirmInformation":"Bekreft og fortsett","FaktaBegrunnelseTextField.BegrunnEndringene":"Begrunn endringene","FaktaBegrunnelseTextField.Vurdering":"Vurdering","FaktaBegrunnelseTextField.Begrunnelse":"Begrunnelse","TrueFalseInput.True":"Ja","TrueFalseInput.False":"Nei","FaktaKilde.Soknad":"FRA SØKNADEN","FaktaKilde.FREG":"FRA FOLKEREGISTERET","FaktaKilde.MEDL":"FRA MEDLEMSKAPSREGISTERET"},Us=ge(ra),UT=fT(3),HT=rl(1500),Ar=({isReadOnly:a,isSubmittable:u,hasBegrunnelse:t,label:l,hasReadOnlyLabel:o=!1,hasVurderingText:m=!1,name:T="begrunnelse"})=>{const h=m?"FaktaBegrunnelseTextField.Vurdering":"FaktaBegrunnelseTextField.BegrunnEndringene",c=()=>a?o?Us.formatMessage({id:"FaktaBegrunnelseTextField.Begrunnelse"}):"":l??Us.formatMessage({id:h});return p.jsx(Ce,{value:Us,children:(u||t)&&p.jsx(dt,{name:T,label:c(),validate:[Ie,UT,HT,gt],maxLength:1500,readOnly:a})})},CT=a=>{var u;return a&&Array.isArray(a)?((u=a[0])==null?void 0:u.begrunnelse)??"":a&&!Array.isArray(a)&&a.begrunnelse?a.begrunnelse:""};Ar.initialValues=a=>({begrunnelse:rT(CT(a)??void 0)});Ar.transformValues=a=>({begrunnelse:un(a.begrunnelse)});Ar.__docgenInfo={description:"FaktaBegrunnelseTextField",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[{name:"aksjonspunkt",optional:!0,type:{name:"union",raw:"Aksjonspunkt[] | Aksjonspunkt",elements:[{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"AksjonspunktKode",required:!0}},{key:"status",value:{name:"AksjonspunktStatus",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"VilkarType",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"VurderÅrsak[] | null",elements:[{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"AksjonspunktType",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`}],raw:"Aksjonspunkt[]"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"AksjonspunktKode",required:!0}},{key:"status",value:{name:"AksjonspunktStatus",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"VilkarType",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"VurderÅrsak[] | null",elements:[{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"AksjonspunktType",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`}]}}],returns:{type:{name:"signature",type:"object",raw:`{
  begrunnelse: string | undefined;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
  begrunnelse: string | undefined;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}}]},alias:"FormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  begrunnelse: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!0}}]}}}}],displayName:"FaktaBegrunnelseTextField",props:{isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},hasBegrunnelse:{required:!0,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:""},hasReadOnlyLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hasVurderingText:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'begrunnelse'",computed:!1}}}};const YT=ge(ra),$T=(a,u,t)=>!t||u?!0:!a,To=({isReadOnly:a,isSubmittable:u,buttonText:t,onClick:l,isSubmitting:o,isDirty:m})=>p.jsx(Ce,{value:YT,children:!a&&p.jsx("div",{children:p.jsxs(He,{size:"small",variant:"primary",loading:o,disabled:$T(m,o,u),onClick:l||TT,type:l?"button":"submit",children:[!!t&&t,!t&&p.jsx(te,{id:"SubmitButton.ConfirmInformation"})]})})});To.__docgenInfo={description:"FaktaSubmitButton",methods:[],displayName:"FaktaSubmitButton",props:{buttonText:{required:!1,tsType:{name:"string"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!0,tsType:{name:"boolean"},description:""}}};const $u=ge(ra),WT=({name:a,label:u,readOnly:t,trueLabel:l,trueContent:o,falseLabel:m,falseContent:T})=>p.jsx(hT,{name:a,label:u,validate:[Ie],isReadOnly:t,isTrueOrFalseSelection:!0,radios:[{label:l??$u.formatMessage({id:"TrueFalseInput.True"}),value:"true",element:o},{label:m??$u.formatMessage({id:"TrueFalseInput.False"}),value:"false",element:T}]});WT.__docgenInfo={description:"",methods:[],displayName:"TrueFalseInput",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},trueLabel:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},trueContent:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},falseLabel:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},falseContent:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""}}};const ho=(a,u)=>{const t=new Date(a.tom??Pu),l=new Date(u.tom??Pu);if(t>l)return-1;if(t<l)return 1;if(a.fom&&!u.fom)return-1;if(!a.fom&&u.fom)return 1;if(a.fom&&u.fom){const o=new Date(a.fom),m=new Date(u.fom);if(o>m)return-1;if(o<m)return 1}return 0};var zr={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var zT=zr.exports,Wu;function JT(){return Wu||(Wu=1,function(a,u){(function(){var t,l="4.17.21",o=200,m="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",T="Expected a function",h="Invalid `variable` option passed into `_.template`",c="__lodash_hash_undefined__",q=500,N="__lodash_placeholder__",S=1,K=2,D=4,U=1,re=2,C=1,Re=2,pn=4,fe=8,Oe=16,Y=32,vn=64,Se=128,yn=256,Te=512,Dn=30,sa="...",la=800,ft=16,ia=1,ua=2,Tt=3,Ln=1/0,Vn=9007199254740991,ht=17976931348623157e292,Zn=NaN,Fe=4294967295,Sn=Fe-1,oa=Fe>>>1,vd=[["ary",Se],["bind",C],["bindKey",Re],["curry",fe],["curryRight",Oe],["flip",Te],["partial",Y],["partialRight",vn],["rearg",yn]],Xn="[object Arguments]",da="[object Array]",yd="[object AsyncFunction]",_r="[object Boolean]",qr="[object Date]",fd="[object DOMException]",ga="[object Error]",ka="[object Function]",ul="[object GeneratorFunction]",en="[object Map]",Nr="[object Number]",Td="[object Null]",fn="[object Object]",ol="[object Promise]",hd="[object Proxy]",Vr="[object RegExp]",nn="[object Set]",Sr="[object String]",ma="[object Symbol]",bd="[object Undefined]",Br="[object WeakMap]",Ed="[object WeakSet]",wr="[object ArrayBuffer]",Qn="[object DataView]",bt="[object Float32Array]",Et="[object Float64Array]",ct="[object Int8Array]",At="[object Int16Array]",Rt="[object Int32Array]",_t="[object Uint8Array]",qt="[object Uint8ClampedArray]",Nt="[object Uint16Array]",Vt="[object Uint32Array]",cd=/\b__p \+= '';/g,Ad=/\b(__p \+=) '' \+/g,Rd=/(__e\(.*?\)|\b__t\)) \+\n'';/g,dl=/&(?:amp|lt|gt|quot|#39);/g,gl=/[&<>"']/g,_d=RegExp(dl.source),qd=RegExp(gl.source),Nd=/<%-([\s\S]+?)%>/g,Vd=/<%([\s\S]+?)%>/g,kl=/<%=([\s\S]+?)%>/g,Sd=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Bd=/^\w*$/,wd=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,St=/[\\^$.*+?()[\]{}|]/g,Kd=RegExp(St.source),Bt=/^\s+/,jd=/\s/,Id=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Od=/\{\n\/\* \[wrapped with (.+)\] \*/,Fd=/,? & /,Gd=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Md=/[()=,{}\[\]\/\s]/,Pd=/\\(\\)?/g,Dd=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ml=/\w*$/,Ld=/^[-+]0x[0-9a-f]+$/i,xd=/^0b[01]+$/i,Ud=/^\[object .+?Constructor\]$/,Hd=/^0o[0-7]+$/i,Cd=/^(?:0|[1-9]\d*)$/,Yd=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,pa=/($^)/,$d=/['\n\r\u2028\u2029\\]/g,va="\\ud800-\\udfff",Wd="\\u0300-\\u036f",zd="\\ufe20-\\ufe2f",Jd="\\u20d0-\\u20ff",pl=Wd+zd+Jd,vl="\\u2700-\\u27bf",yl="a-z\\xdf-\\xf6\\xf8-\\xff",Zd="\\xac\\xb1\\xd7\\xf7",Xd="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Qd="\\u2000-\\u206f",eg=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",fl="A-Z\\xc0-\\xd6\\xd8-\\xde",Tl="\\ufe0e\\ufe0f",hl=Zd+Xd+Qd+eg,wt="['’]",ng="["+va+"]",bl="["+hl+"]",ya="["+pl+"]",El="\\d+",rg="["+vl+"]",cl="["+yl+"]",Al="[^"+va+hl+El+vl+yl+fl+"]",Kt="\\ud83c[\\udffb-\\udfff]",ag="(?:"+ya+"|"+Kt+")",Rl="[^"+va+"]",jt="(?:\\ud83c[\\udde6-\\uddff]){2}",It="[\\ud800-\\udbff][\\udc00-\\udfff]",er="["+fl+"]",_l="\\u200d",ql="(?:"+cl+"|"+Al+")",tg="(?:"+er+"|"+Al+")",Nl="(?:"+wt+"(?:d|ll|m|re|s|t|ve))?",Vl="(?:"+wt+"(?:D|LL|M|RE|S|T|VE))?",Sl=ag+"?",Bl="["+Tl+"]?",sg="(?:"+_l+"(?:"+[Rl,jt,It].join("|")+")"+Bl+Sl+")*",lg="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",ig="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",wl=Bl+Sl+sg,ug="(?:"+[rg,jt,It].join("|")+")"+wl,og="(?:"+[Rl+ya+"?",ya,jt,It,ng].join("|")+")",dg=RegExp(wt,"g"),gg=RegExp(ya,"g"),Ot=RegExp(Kt+"(?="+Kt+")|"+og+wl,"g"),kg=RegExp([er+"?"+cl+"+"+Nl+"(?="+[bl,er,"$"].join("|")+")",tg+"+"+Vl+"(?="+[bl,er+ql,"$"].join("|")+")",er+"?"+ql+"+"+Nl,er+"+"+Vl,ig,lg,El,ug].join("|"),"g"),mg=RegExp("["+_l+va+pl+Tl+"]"),pg=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,vg=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],yg=-1,le={};le[bt]=le[Et]=le[ct]=le[At]=le[Rt]=le[_t]=le[qt]=le[Nt]=le[Vt]=!0,le[Xn]=le[da]=le[wr]=le[_r]=le[Qn]=le[qr]=le[ga]=le[ka]=le[en]=le[Nr]=le[fn]=le[Vr]=le[nn]=le[Sr]=le[Br]=!1;var se={};se[Xn]=se[da]=se[wr]=se[Qn]=se[_r]=se[qr]=se[bt]=se[Et]=se[ct]=se[At]=se[Rt]=se[en]=se[Nr]=se[fn]=se[Vr]=se[nn]=se[Sr]=se[ma]=se[_t]=se[qt]=se[Nt]=se[Vt]=!0,se[ga]=se[ka]=se[Br]=!1;var fg={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Tg={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},hg={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},bg={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Eg=parseFloat,cg=parseInt,Kl=typeof rt=="object"&&rt&&rt.Object===Object&&rt,Ag=typeof self=="object"&&self&&self.Object===Object&&self,be=Kl||Ag||Function("return this")(),Ft=u&&!u.nodeType&&u,xn=Ft&&!0&&a&&!a.nodeType&&a,jl=xn&&xn.exports===Ft,Gt=jl&&Kl.process,Ye=function(){try{var y=xn&&xn.require&&xn.require("util").types;return y||Gt&&Gt.binding&&Gt.binding("util")}catch{}}(),Il=Ye&&Ye.isArrayBuffer,Ol=Ye&&Ye.isDate,Fl=Ye&&Ye.isMap,Gl=Ye&&Ye.isRegExp,Ml=Ye&&Ye.isSet,Pl=Ye&&Ye.isTypedArray;function Ge(y,E,b){switch(b.length){case 0:return y.call(E);case 1:return y.call(E,b[0]);case 2:return y.call(E,b[0],b[1]);case 3:return y.call(E,b[0],b[1],b[2])}return y.apply(E,b)}function Rg(y,E,b,B){for(var M=-1,X=y==null?0:y.length;++M<X;){var pe=y[M];E(B,pe,b(pe),y)}return B}function $e(y,E){for(var b=-1,B=y==null?0:y.length;++b<B&&E(y[b],b,y)!==!1;);return y}function _g(y,E){for(var b=y==null?0:y.length;b--&&E(y[b],b,y)!==!1;);return y}function Dl(y,E){for(var b=-1,B=y==null?0:y.length;++b<B;)if(!E(y[b],b,y))return!1;return!0}function Bn(y,E){for(var b=-1,B=y==null?0:y.length,M=0,X=[];++b<B;){var pe=y[b];E(pe,b,y)&&(X[M++]=pe)}return X}function fa(y,E){var b=y==null?0:y.length;return!!b&&nr(y,E,0)>-1}function Mt(y,E,b){for(var B=-1,M=y==null?0:y.length;++B<M;)if(b(E,y[B]))return!0;return!1}function ie(y,E){for(var b=-1,B=y==null?0:y.length,M=Array(B);++b<B;)M[b]=E(y[b],b,y);return M}function wn(y,E){for(var b=-1,B=E.length,M=y.length;++b<B;)y[M+b]=E[b];return y}function Pt(y,E,b,B){var M=-1,X=y==null?0:y.length;for(B&&X&&(b=y[++M]);++M<X;)b=E(b,y[M],M,y);return b}function qg(y,E,b,B){var M=y==null?0:y.length;for(B&&M&&(b=y[--M]);M--;)b=E(b,y[M],M,y);return b}function Dt(y,E){for(var b=-1,B=y==null?0:y.length;++b<B;)if(E(y[b],b,y))return!0;return!1}var Ng=Lt("length");function Vg(y){return y.split("")}function Sg(y){return y.match(Gd)||[]}function Ll(y,E,b){var B;return b(y,function(M,X,pe){if(E(M,X,pe))return B=X,!1}),B}function Ta(y,E,b,B){for(var M=y.length,X=b+(B?1:-1);B?X--:++X<M;)if(E(y[X],X,y))return X;return-1}function nr(y,E,b){return E===E?Lg(y,E,b):Ta(y,xl,b)}function Bg(y,E,b,B){for(var M=b-1,X=y.length;++M<X;)if(B(y[M],E))return M;return-1}function xl(y){return y!==y}function Ul(y,E){var b=y==null?0:y.length;return b?Ut(y,E)/b:Zn}function Lt(y){return function(E){return E==null?t:E[y]}}function xt(y){return function(E){return y==null?t:y[E]}}function Hl(y,E,b,B,M){return M(y,function(X,pe,ae){b=B?(B=!1,X):E(b,X,pe,ae)}),b}function wg(y,E){var b=y.length;for(y.sort(E);b--;)y[b]=y[b].value;return y}function Ut(y,E){for(var b,B=-1,M=y.length;++B<M;){var X=E(y[B]);X!==t&&(b=b===t?X:b+X)}return b}function Ht(y,E){for(var b=-1,B=Array(y);++b<y;)B[b]=E(b);return B}function Kg(y,E){return ie(E,function(b){return[b,y[b]]})}function Cl(y){return y&&y.slice(0,zl(y)+1).replace(Bt,"")}function Me(y){return function(E){return y(E)}}function Ct(y,E){return ie(E,function(b){return y[b]})}function Kr(y,E){return y.has(E)}function Yl(y,E){for(var b=-1,B=y.length;++b<B&&nr(E,y[b],0)>-1;);return b}function $l(y,E){for(var b=y.length;b--&&nr(E,y[b],0)>-1;);return b}function jg(y,E){for(var b=y.length,B=0;b--;)y[b]===E&&++B;return B}var Ig=xt(fg),Og=xt(Tg);function Fg(y){return"\\"+bg[y]}function Gg(y,E){return y==null?t:y[E]}function rr(y){return mg.test(y)}function Mg(y){return pg.test(y)}function Pg(y){for(var E,b=[];!(E=y.next()).done;)b.push(E.value);return b}function Yt(y){var E=-1,b=Array(y.size);return y.forEach(function(B,M){b[++E]=[M,B]}),b}function Wl(y,E){return function(b){return y(E(b))}}function Kn(y,E){for(var b=-1,B=y.length,M=0,X=[];++b<B;){var pe=y[b];(pe===E||pe===N)&&(y[b]=N,X[M++]=b)}return X}function ha(y){var E=-1,b=Array(y.size);return y.forEach(function(B){b[++E]=B}),b}function Dg(y){var E=-1,b=Array(y.size);return y.forEach(function(B){b[++E]=[B,B]}),b}function Lg(y,E,b){for(var B=b-1,M=y.length;++B<M;)if(y[B]===E)return B;return-1}function xg(y,E,b){for(var B=b+1;B--;)if(y[B]===E)return B;return B}function ar(y){return rr(y)?Hg(y):Ng(y)}function rn(y){return rr(y)?Cg(y):Vg(y)}function zl(y){for(var E=y.length;E--&&jd.test(y.charAt(E)););return E}var Ug=xt(hg);function Hg(y){for(var E=Ot.lastIndex=0;Ot.test(y);)++E;return E}function Cg(y){return y.match(Ot)||[]}function Yg(y){return y.match(kg)||[]}var $g=function y(E){E=E==null?be:tr.defaults(be.Object(),E,tr.pick(be,vg));var b=E.Array,B=E.Date,M=E.Error,X=E.Function,pe=E.Math,ae=E.Object,$t=E.RegExp,Wg=E.String,We=E.TypeError,ba=b.prototype,zg=X.prototype,sr=ae.prototype,Ea=E["__core-js_shared__"],ca=zg.toString,ee=sr.hasOwnProperty,Jg=0,Jl=function(){var e=/[^.]+$/.exec(Ea&&Ea.keys&&Ea.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Aa=sr.toString,Zg=ca.call(ae),Xg=be._,Qg=$t("^"+ca.call(ee).replace(St,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ra=jl?E.Buffer:t,jn=E.Symbol,_a=E.Uint8Array,Zl=Ra?Ra.allocUnsafe:t,qa=Wl(ae.getPrototypeOf,ae),Xl=ae.create,Ql=sr.propertyIsEnumerable,Na=ba.splice,ei=jn?jn.isConcatSpreadable:t,jr=jn?jn.iterator:t,Un=jn?jn.toStringTag:t,Va=function(){try{var e=Wn(ae,"defineProperty");return e({},"",{}),e}catch{}}(),ek=E.clearTimeout!==be.clearTimeout&&E.clearTimeout,nk=B&&B.now!==be.Date.now&&B.now,rk=E.setTimeout!==be.setTimeout&&E.setTimeout,Sa=pe.ceil,Ba=pe.floor,Wt=ae.getOwnPropertySymbols,ak=Ra?Ra.isBuffer:t,ni=E.isFinite,tk=ba.join,sk=Wl(ae.keys,ae),ve=pe.max,ce=pe.min,lk=B.now,ik=E.parseInt,ri=pe.random,uk=ba.reverse,zt=Wn(E,"DataView"),Ir=Wn(E,"Map"),Jt=Wn(E,"Promise"),lr=Wn(E,"Set"),Or=Wn(E,"WeakMap"),Fr=Wn(ae,"create"),wa=Or&&new Or,ir={},ok=zn(zt),dk=zn(Ir),gk=zn(Jt),kk=zn(lr),mk=zn(Or),Ka=jn?jn.prototype:t,Gr=Ka?Ka.valueOf:t,ai=Ka?Ka.toString:t;function d(e){if(oe(e)&&!P(e)&&!(e instanceof W)){if(e instanceof ze)return e;if(ee.call(e,"__wrapped__"))return tu(e)}return new ze(e)}var ur=function(){function e(){}return function(n){if(!ue(n))return{};if(Xl)return Xl(n);e.prototype=n;var r=new e;return e.prototype=t,r}}();function ja(){}function ze(e,n){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!n,this.__index__=0,this.__values__=t}d.templateSettings={escape:Nd,evaluate:Vd,interpolate:kl,variable:"",imports:{_:d}},d.prototype=ja.prototype,d.prototype.constructor=d,ze.prototype=ur(ja.prototype),ze.prototype.constructor=ze;function W(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Fe,this.__views__=[]}function pk(){var e=new W(this.__wrapped__);return e.__actions__=Be(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Be(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Be(this.__views__),e}function vk(){if(this.__filtered__){var e=new W(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function yk(){var e=this.__wrapped__.value(),n=this.__dir__,r=P(e),s=n<0,i=r?e.length:0,g=Vm(0,i,this.__views__),k=g.start,v=g.end,f=v-k,A=s?v:k-1,R=this.__iteratees__,_=R.length,V=0,w=ce(f,this.__takeCount__);if(!r||!s&&i==f&&w==f)return Ni(e,this.__actions__);var F=[];e:for(;f--&&V<w;){A+=n;for(var x=-1,G=e[A];++x<_;){var $=R[x],z=$.iteratee,Le=$.type,Ne=z(G);if(Le==ua)G=Ne;else if(!Ne){if(Le==ia)continue e;break e}}F[V++]=G}return F}W.prototype=ur(ja.prototype),W.prototype.constructor=W;function Hn(e){var n=-1,r=e==null?0:e.length;for(this.clear();++n<r;){var s=e[n];this.set(s[0],s[1])}}function fk(){this.__data__=Fr?Fr(null):{},this.size=0}function Tk(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n}function hk(e){var n=this.__data__;if(Fr){var r=n[e];return r===c?t:r}return ee.call(n,e)?n[e]:t}function bk(e){var n=this.__data__;return Fr?n[e]!==t:ee.call(n,e)}function Ek(e,n){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Fr&&n===t?c:n,this}Hn.prototype.clear=fk,Hn.prototype.delete=Tk,Hn.prototype.get=hk,Hn.prototype.has=bk,Hn.prototype.set=Ek;function Tn(e){var n=-1,r=e==null?0:e.length;for(this.clear();++n<r;){var s=e[n];this.set(s[0],s[1])}}function ck(){this.__data__=[],this.size=0}function Ak(e){var n=this.__data__,r=Ia(n,e);if(r<0)return!1;var s=n.length-1;return r==s?n.pop():Na.call(n,r,1),--this.size,!0}function Rk(e){var n=this.__data__,r=Ia(n,e);return r<0?t:n[r][1]}function _k(e){return Ia(this.__data__,e)>-1}function qk(e,n){var r=this.__data__,s=Ia(r,e);return s<0?(++this.size,r.push([e,n])):r[s][1]=n,this}Tn.prototype.clear=ck,Tn.prototype.delete=Ak,Tn.prototype.get=Rk,Tn.prototype.has=_k,Tn.prototype.set=qk;function hn(e){var n=-1,r=e==null?0:e.length;for(this.clear();++n<r;){var s=e[n];this.set(s[0],s[1])}}function Nk(){this.size=0,this.__data__={hash:new Hn,map:new(Ir||Tn),string:new Hn}}function Vk(e){var n=Ya(this,e).delete(e);return this.size-=n?1:0,n}function Sk(e){return Ya(this,e).get(e)}function Bk(e){return Ya(this,e).has(e)}function wk(e,n){var r=Ya(this,e),s=r.size;return r.set(e,n),this.size+=r.size==s?0:1,this}hn.prototype.clear=Nk,hn.prototype.delete=Vk,hn.prototype.get=Sk,hn.prototype.has=Bk,hn.prototype.set=wk;function Cn(e){var n=-1,r=e==null?0:e.length;for(this.__data__=new hn;++n<r;)this.add(e[n])}function Kk(e){return this.__data__.set(e,c),this}function jk(e){return this.__data__.has(e)}Cn.prototype.add=Cn.prototype.push=Kk,Cn.prototype.has=jk;function an(e){var n=this.__data__=new Tn(e);this.size=n.size}function Ik(){this.__data__=new Tn,this.size=0}function Ok(e){var n=this.__data__,r=n.delete(e);return this.size=n.size,r}function Fk(e){return this.__data__.get(e)}function Gk(e){return this.__data__.has(e)}function Mk(e,n){var r=this.__data__;if(r instanceof Tn){var s=r.__data__;if(!Ir||s.length<o-1)return s.push([e,n]),this.size=++r.size,this;r=this.__data__=new hn(s)}return r.set(e,n),this.size=r.size,this}an.prototype.clear=Ik,an.prototype.delete=Ok,an.prototype.get=Fk,an.prototype.has=Gk,an.prototype.set=Mk;function ti(e,n){var r=P(e),s=!r&&Jn(e),i=!r&&!s&&Mn(e),g=!r&&!s&&!i&&kr(e),k=r||s||i||g,v=k?Ht(e.length,Wg):[],f=v.length;for(var A in e)(n||ee.call(e,A))&&!(k&&(A=="length"||i&&(A=="offset"||A=="parent")||g&&(A=="buffer"||A=="byteLength"||A=="byteOffset")||An(A,f)))&&v.push(A);return v}function si(e){var n=e.length;return n?e[is(0,n-1)]:t}function Pk(e,n){return $a(Be(e),Yn(n,0,e.length))}function Dk(e){return $a(Be(e))}function Zt(e,n,r){(r!==t&&!tn(e[n],r)||r===t&&!(n in e))&&bn(e,n,r)}function Mr(e,n,r){var s=e[n];(!(ee.call(e,n)&&tn(s,r))||r===t&&!(n in e))&&bn(e,n,r)}function Ia(e,n){for(var r=e.length;r--;)if(tn(e[r][0],n))return r;return-1}function Lk(e,n,r,s){return In(e,function(i,g,k){n(s,i,r(i),k)}),s}function li(e,n){return e&&dn(n,he(n),e)}function xk(e,n){return e&&dn(n,Ke(n),e)}function bn(e,n,r){n=="__proto__"&&Va?Va(e,n,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[n]=r}function Xt(e,n){for(var r=-1,s=n.length,i=b(s),g=e==null;++r<s;)i[r]=g?t:Ks(e,n[r]);return i}function Yn(e,n,r){return e===e&&(r!==t&&(e=e<=r?e:r),n!==t&&(e=e>=n?e:n)),e}function Je(e,n,r,s,i,g){var k,v=n&S,f=n&K,A=n&D;if(r&&(k=i?r(e,s,i,g):r(e)),k!==t)return k;if(!ue(e))return e;var R=P(e);if(R){if(k=Bm(e),!v)return Be(e,k)}else{var _=Ae(e),V=_==ka||_==ul;if(Mn(e))return Bi(e,v);if(_==fn||_==Xn||V&&!i){if(k=f||V?{}:zi(e),!v)return f?hm(e,xk(k,e)):Tm(e,li(k,e))}else{if(!se[_])return i?e:{};k=wm(e,_,v)}}g||(g=new an);var w=g.get(e);if(w)return w;g.set(e,k),Ru(e)?e.forEach(function(G){k.add(Je(G,n,r,G,e,g))}):cu(e)&&e.forEach(function(G,$){k.set($,Je(G,n,r,$,e,g))});var F=A?f?Ts:fs:f?Ke:he,x=R?t:F(e);return $e(x||e,function(G,$){x&&($=G,G=e[$]),Mr(k,$,Je(G,n,r,$,e,g))}),k}function Uk(e){var n=he(e);return function(r){return ii(r,e,n)}}function ii(e,n,r){var s=r.length;if(e==null)return!s;for(e=ae(e);s--;){var i=r[s],g=n[i],k=e[i];if(k===t&&!(i in e)||!g(k))return!1}return!0}function ui(e,n,r){if(typeof e!="function")throw new We(T);return Cr(function(){e.apply(t,r)},n)}function Pr(e,n,r,s){var i=-1,g=fa,k=!0,v=e.length,f=[],A=n.length;if(!v)return f;r&&(n=ie(n,Me(r))),s?(g=Mt,k=!1):n.length>=o&&(g=Kr,k=!1,n=new Cn(n));e:for(;++i<v;){var R=e[i],_=r==null?R:r(R);if(R=s||R!==0?R:0,k&&_===_){for(var V=A;V--;)if(n[V]===_)continue e;f.push(R)}else g(n,_,s)||f.push(R)}return f}var In=Oi(on),oi=Oi(es,!0);function Hk(e,n){var r=!0;return In(e,function(s,i,g){return r=!!n(s,i,g),r}),r}function Oa(e,n,r){for(var s=-1,i=e.length;++s<i;){var g=e[s],k=n(g);if(k!=null&&(v===t?k===k&&!De(k):r(k,v)))var v=k,f=g}return f}function Ck(e,n,r,s){var i=e.length;for(r=L(r),r<0&&(r=-r>i?0:i+r),s=s===t||s>i?i:L(s),s<0&&(s+=i),s=r>s?0:qu(s);r<s;)e[r++]=n;return e}function di(e,n){var r=[];return In(e,function(s,i,g){n(s,i,g)&&r.push(s)}),r}function Ee(e,n,r,s,i){var g=-1,k=e.length;for(r||(r=jm),i||(i=[]);++g<k;){var v=e[g];n>0&&r(v)?n>1?Ee(v,n-1,r,s,i):wn(i,v):s||(i[i.length]=v)}return i}var Qt=Fi(),gi=Fi(!0);function on(e,n){return e&&Qt(e,n,he)}function es(e,n){return e&&gi(e,n,he)}function Fa(e,n){return Bn(n,function(r){return Rn(e[r])})}function $n(e,n){n=Fn(n,e);for(var r=0,s=n.length;e!=null&&r<s;)e=e[gn(n[r++])];return r&&r==s?e:t}function ki(e,n,r){var s=n(e);return P(e)?s:wn(s,r(e))}function _e(e){return e==null?e===t?bd:Td:Un&&Un in ae(e)?Nm(e):Dm(e)}function ns(e,n){return e>n}function Yk(e,n){return e!=null&&ee.call(e,n)}function $k(e,n){return e!=null&&n in ae(e)}function Wk(e,n,r){return e>=ce(n,r)&&e<ve(n,r)}function rs(e,n,r){for(var s=r?Mt:fa,i=e[0].length,g=e.length,k=g,v=b(g),f=1/0,A=[];k--;){var R=e[k];k&&n&&(R=ie(R,Me(n))),f=ce(R.length,f),v[k]=!r&&(n||i>=120&&R.length>=120)?new Cn(k&&R):t}R=e[0];var _=-1,V=v[0];e:for(;++_<i&&A.length<f;){var w=R[_],F=n?n(w):w;if(w=r||w!==0?w:0,!(V?Kr(V,F):s(A,F,r))){for(k=g;--k;){var x=v[k];if(!(x?Kr(x,F):s(e[k],F,r)))continue e}V&&V.push(F),A.push(w)}}return A}function zk(e,n,r,s){return on(e,function(i,g,k){n(s,r(i),g,k)}),s}function Dr(e,n,r){n=Fn(n,e),e=Qi(e,n);var s=e==null?e:e[gn(Xe(n))];return s==null?t:Ge(s,e,r)}function mi(e){return oe(e)&&_e(e)==Xn}function Jk(e){return oe(e)&&_e(e)==wr}function Zk(e){return oe(e)&&_e(e)==qr}function Lr(e,n,r,s,i){return e===n?!0:e==null||n==null||!oe(e)&&!oe(n)?e!==e&&n!==n:Xk(e,n,r,s,Lr,i)}function Xk(e,n,r,s,i,g){var k=P(e),v=P(n),f=k?da:Ae(e),A=v?da:Ae(n);f=f==Xn?fn:f,A=A==Xn?fn:A;var R=f==fn,_=A==fn,V=f==A;if(V&&Mn(e)){if(!Mn(n))return!1;k=!0,R=!1}if(V&&!R)return g||(g=new an),k||kr(e)?Yi(e,n,r,s,i,g):_m(e,n,f,r,s,i,g);if(!(r&U)){var w=R&&ee.call(e,"__wrapped__"),F=_&&ee.call(n,"__wrapped__");if(w||F){var x=w?e.value():e,G=F?n.value():n;return g||(g=new an),i(x,G,r,s,g)}}return V?(g||(g=new an),qm(e,n,r,s,i,g)):!1}function Qk(e){return oe(e)&&Ae(e)==en}function as(e,n,r,s){var i=r.length,g=i,k=!s;if(e==null)return!g;for(e=ae(e);i--;){var v=r[i];if(k&&v[2]?v[1]!==e[v[0]]:!(v[0]in e))return!1}for(;++i<g;){v=r[i];var f=v[0],A=e[f],R=v[1];if(k&&v[2]){if(A===t&&!(f in e))return!1}else{var _=new an;if(s)var V=s(A,R,f,e,n,_);if(!(V===t?Lr(R,A,U|re,s,_):V))return!1}}return!0}function pi(e){if(!ue(e)||Om(e))return!1;var n=Rn(e)?Qg:Ud;return n.test(zn(e))}function em(e){return oe(e)&&_e(e)==Vr}function nm(e){return oe(e)&&Ae(e)==nn}function rm(e){return oe(e)&&Qa(e.length)&&!!le[_e(e)]}function vi(e){return typeof e=="function"?e:e==null?je:typeof e=="object"?P(e)?Ti(e[0],e[1]):fi(e):Gu(e)}function ts(e){if(!Hr(e))return sk(e);var n=[];for(var r in ae(e))ee.call(e,r)&&r!="constructor"&&n.push(r);return n}function am(e){if(!ue(e))return Pm(e);var n=Hr(e),r=[];for(var s in e)s=="constructor"&&(n||!ee.call(e,s))||r.push(s);return r}function ss(e,n){return e<n}function yi(e,n){var r=-1,s=we(e)?b(e.length):[];return In(e,function(i,g,k){s[++r]=n(i,g,k)}),s}function fi(e){var n=bs(e);return n.length==1&&n[0][2]?Zi(n[0][0],n[0][1]):function(r){return r===e||as(r,e,n)}}function Ti(e,n){return cs(e)&&Ji(n)?Zi(gn(e),n):function(r){var s=Ks(r,e);return s===t&&s===n?js(r,e):Lr(n,s,U|re)}}function Ga(e,n,r,s,i){e!==n&&Qt(n,function(g,k){if(i||(i=new an),ue(g))tm(e,n,k,r,Ga,s,i);else{var v=s?s(Rs(e,k),g,k+"",e,n,i):t;v===t&&(v=g),Zt(e,k,v)}},Ke)}function tm(e,n,r,s,i,g,k){var v=Rs(e,r),f=Rs(n,r),A=k.get(f);if(A){Zt(e,r,A);return}var R=g?g(v,f,r+"",e,n,k):t,_=R===t;if(_){var V=P(f),w=!V&&Mn(f),F=!V&&!w&&kr(f);R=f,V||w||F?P(v)?R=v:ke(v)?R=Be(v):w?(_=!1,R=Bi(f,!0)):F?(_=!1,R=wi(f,!0)):R=[]:Yr(f)||Jn(f)?(R=v,Jn(v)?R=Nu(v):(!ue(v)||Rn(v))&&(R=zi(f))):_=!1}_&&(k.set(f,R),i(R,f,s,g,k),k.delete(f)),Zt(e,r,R)}function hi(e,n){var r=e.length;if(r)return n+=n<0?r:0,An(n,r)?e[n]:t}function bi(e,n,r){n.length?n=ie(n,function(g){return P(g)?function(k){return $n(k,g.length===1?g[0]:g)}:g}):n=[je];var s=-1;n=ie(n,Me(O()));var i=yi(e,function(g,k,v){var f=ie(n,function(A){return A(g)});return{criteria:f,index:++s,value:g}});return wg(i,function(g,k){return fm(g,k,r)})}function sm(e,n){return Ei(e,n,function(r,s){return js(e,s)})}function Ei(e,n,r){for(var s=-1,i=n.length,g={};++s<i;){var k=n[s],v=$n(e,k);r(v,k)&&xr(g,Fn(k,e),v)}return g}function lm(e){return function(n){return $n(n,e)}}function ls(e,n,r,s){var i=s?Bg:nr,g=-1,k=n.length,v=e;for(e===n&&(n=Be(n)),r&&(v=ie(e,Me(r)));++g<k;)for(var f=0,A=n[g],R=r?r(A):A;(f=i(v,R,f,s))>-1;)v!==e&&Na.call(v,f,1),Na.call(e,f,1);return e}function ci(e,n){for(var r=e?n.length:0,s=r-1;r--;){var i=n[r];if(r==s||i!==g){var g=i;An(i)?Na.call(e,i,1):ds(e,i)}}return e}function is(e,n){return e+Ba(ri()*(n-e+1))}function im(e,n,r,s){for(var i=-1,g=ve(Sa((n-e)/(r||1)),0),k=b(g);g--;)k[s?g:++i]=e,e+=r;return k}function us(e,n){var r="";if(!e||n<1||n>Vn)return r;do n%2&&(r+=e),n=Ba(n/2),n&&(e+=e);while(n);return r}function H(e,n){return _s(Xi(e,n,je),e+"")}function um(e){return si(mr(e))}function om(e,n){var r=mr(e);return $a(r,Yn(n,0,r.length))}function xr(e,n,r,s){if(!ue(e))return e;n=Fn(n,e);for(var i=-1,g=n.length,k=g-1,v=e;v!=null&&++i<g;){var f=gn(n[i]),A=r;if(f==="__proto__"||f==="constructor"||f==="prototype")return e;if(i!=k){var R=v[f];A=s?s(R,f,v):t,A===t&&(A=ue(R)?R:An(n[i+1])?[]:{})}Mr(v,f,A),v=v[f]}return e}var Ai=wa?function(e,n){return wa.set(e,n),e}:je,dm=Va?function(e,n){return Va(e,"toString",{configurable:!0,enumerable:!1,value:Os(n),writable:!0})}:je;function gm(e){return $a(mr(e))}function Ze(e,n,r){var s=-1,i=e.length;n<0&&(n=-n>i?0:i+n),r=r>i?i:r,r<0&&(r+=i),i=n>r?0:r-n>>>0,n>>>=0;for(var g=b(i);++s<i;)g[s]=e[s+n];return g}function km(e,n){var r;return In(e,function(s,i,g){return r=n(s,i,g),!r}),!!r}function Ma(e,n,r){var s=0,i=e==null?s:e.length;if(typeof n=="number"&&n===n&&i<=oa){for(;s<i;){var g=s+i>>>1,k=e[g];k!==null&&!De(k)&&(r?k<=n:k<n)?s=g+1:i=g}return i}return os(e,n,je,r)}function os(e,n,r,s){var i=0,g=e==null?0:e.length;if(g===0)return 0;n=r(n);for(var k=n!==n,v=n===null,f=De(n),A=n===t;i<g;){var R=Ba((i+g)/2),_=r(e[R]),V=_!==t,w=_===null,F=_===_,x=De(_);if(k)var G=s||F;else A?G=F&&(s||V):v?G=F&&V&&(s||!w):f?G=F&&V&&!w&&(s||!x):w||x?G=!1:G=s?_<=n:_<n;G?i=R+1:g=R}return ce(g,Sn)}function Ri(e,n){for(var r=-1,s=e.length,i=0,g=[];++r<s;){var k=e[r],v=n?n(k):k;if(!r||!tn(v,f)){var f=v;g[i++]=k===0?0:k}}return g}function _i(e){return typeof e=="number"?e:De(e)?Zn:+e}function Pe(e){if(typeof e=="string")return e;if(P(e))return ie(e,Pe)+"";if(De(e))return ai?ai.call(e):"";var n=e+"";return n=="0"&&1/e==-1/0?"-0":n}function On(e,n,r){var s=-1,i=fa,g=e.length,k=!0,v=[],f=v;if(r)k=!1,i=Mt;else if(g>=o){var A=n?null:Am(e);if(A)return ha(A);k=!1,i=Kr,f=new Cn}else f=n?[]:v;e:for(;++s<g;){var R=e[s],_=n?n(R):R;if(R=r||R!==0?R:0,k&&_===_){for(var V=f.length;V--;)if(f[V]===_)continue e;n&&f.push(_),v.push(R)}else i(f,_,r)||(f!==v&&f.push(_),v.push(R))}return v}function ds(e,n){return n=Fn(n,e),e=Qi(e,n),e==null||delete e[gn(Xe(n))]}function qi(e,n,r,s){return xr(e,n,r($n(e,n)),s)}function Pa(e,n,r,s){for(var i=e.length,g=s?i:-1;(s?g--:++g<i)&&n(e[g],g,e););return r?Ze(e,s?0:g,s?g+1:i):Ze(e,s?g+1:0,s?i:g)}function Ni(e,n){var r=e;return r instanceof W&&(r=r.value()),Pt(n,function(s,i){return i.func.apply(i.thisArg,wn([s],i.args))},r)}function gs(e,n,r){var s=e.length;if(s<2)return s?On(e[0]):[];for(var i=-1,g=b(s);++i<s;)for(var k=e[i],v=-1;++v<s;)v!=i&&(g[i]=Pr(g[i]||k,e[v],n,r));return On(Ee(g,1),n,r)}function Vi(e,n,r){for(var s=-1,i=e.length,g=n.length,k={};++s<i;){var v=s<g?n[s]:t;r(k,e[s],v)}return k}function ks(e){return ke(e)?e:[]}function ms(e){return typeof e=="function"?e:je}function Fn(e,n){return P(e)?e:cs(e,n)?[e]:au(Q(e))}var mm=H;function Gn(e,n,r){var s=e.length;return r=r===t?s:r,!n&&r>=s?e:Ze(e,n,r)}var Si=ek||function(e){return be.clearTimeout(e)};function Bi(e,n){if(n)return e.slice();var r=e.length,s=Zl?Zl(r):new e.constructor(r);return e.copy(s),s}function ps(e){var n=new e.constructor(e.byteLength);return new _a(n).set(new _a(e)),n}function pm(e,n){var r=n?ps(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}function vm(e){var n=new e.constructor(e.source,ml.exec(e));return n.lastIndex=e.lastIndex,n}function ym(e){return Gr?ae(Gr.call(e)):{}}function wi(e,n){var r=n?ps(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function Ki(e,n){if(e!==n){var r=e!==t,s=e===null,i=e===e,g=De(e),k=n!==t,v=n===null,f=n===n,A=De(n);if(!v&&!A&&!g&&e>n||g&&k&&f&&!v&&!A||s&&k&&f||!r&&f||!i)return 1;if(!s&&!g&&!A&&e<n||A&&r&&i&&!s&&!g||v&&r&&i||!k&&i||!f)return-1}return 0}function fm(e,n,r){for(var s=-1,i=e.criteria,g=n.criteria,k=i.length,v=r.length;++s<k;){var f=Ki(i[s],g[s]);if(f){if(s>=v)return f;var A=r[s];return f*(A=="desc"?-1:1)}}return e.index-n.index}function ji(e,n,r,s){for(var i=-1,g=e.length,k=r.length,v=-1,f=n.length,A=ve(g-k,0),R=b(f+A),_=!s;++v<f;)R[v]=n[v];for(;++i<k;)(_||i<g)&&(R[r[i]]=e[i]);for(;A--;)R[v++]=e[i++];return R}function Ii(e,n,r,s){for(var i=-1,g=e.length,k=-1,v=r.length,f=-1,A=n.length,R=ve(g-v,0),_=b(R+A),V=!s;++i<R;)_[i]=e[i];for(var w=i;++f<A;)_[w+f]=n[f];for(;++k<v;)(V||i<g)&&(_[w+r[k]]=e[i++]);return _}function Be(e,n){var r=-1,s=e.length;for(n||(n=b(s));++r<s;)n[r]=e[r];return n}function dn(e,n,r,s){var i=!r;r||(r={});for(var g=-1,k=n.length;++g<k;){var v=n[g],f=s?s(r[v],e[v],v,r,e):t;f===t&&(f=e[v]),i?bn(r,v,f):Mr(r,v,f)}return r}function Tm(e,n){return dn(e,Es(e),n)}function hm(e,n){return dn(e,$i(e),n)}function Da(e,n){return function(r,s){var i=P(r)?Rg:Lk,g=n?n():{};return i(r,e,O(s,2),g)}}function or(e){return H(function(n,r){var s=-1,i=r.length,g=i>1?r[i-1]:t,k=i>2?r[2]:t;for(g=e.length>3&&typeof g=="function"?(i--,g):t,k&&qe(r[0],r[1],k)&&(g=i<3?t:g,i=1),n=ae(n);++s<i;){var v=r[s];v&&e(n,v,s,g)}return n})}function Oi(e,n){return function(r,s){if(r==null)return r;if(!we(r))return e(r,s);for(var i=r.length,g=n?i:-1,k=ae(r);(n?g--:++g<i)&&s(k[g],g,k)!==!1;);return r}}function Fi(e){return function(n,r,s){for(var i=-1,g=ae(n),k=s(n),v=k.length;v--;){var f=k[e?v:++i];if(r(g[f],f,g)===!1)break}return n}}function bm(e,n,r){var s=n&C,i=Ur(e);function g(){var k=this&&this!==be&&this instanceof g?i:e;return k.apply(s?r:this,arguments)}return g}function Gi(e){return function(n){n=Q(n);var r=rr(n)?rn(n):t,s=r?r[0]:n.charAt(0),i=r?Gn(r,1).join(""):n.slice(1);return s[e]()+i}}function dr(e){return function(n){return Pt(Ou(Iu(n).replace(dg,"")),e,"")}}function Ur(e){return function(){var n=arguments;switch(n.length){case 0:return new e;case 1:return new e(n[0]);case 2:return new e(n[0],n[1]);case 3:return new e(n[0],n[1],n[2]);case 4:return new e(n[0],n[1],n[2],n[3]);case 5:return new e(n[0],n[1],n[2],n[3],n[4]);case 6:return new e(n[0],n[1],n[2],n[3],n[4],n[5]);case 7:return new e(n[0],n[1],n[2],n[3],n[4],n[5],n[6])}var r=ur(e.prototype),s=e.apply(r,n);return ue(s)?s:r}}function Em(e,n,r){var s=Ur(e);function i(){for(var g=arguments.length,k=b(g),v=g,f=gr(i);v--;)k[v]=arguments[v];var A=g<3&&k[0]!==f&&k[g-1]!==f?[]:Kn(k,f);if(g-=A.length,g<r)return xi(e,n,La,i.placeholder,t,k,A,t,t,r-g);var R=this&&this!==be&&this instanceof i?s:e;return Ge(R,this,k)}return i}function Mi(e){return function(n,r,s){var i=ae(n);if(!we(n)){var g=O(r,3);n=he(n),r=function(v){return g(i[v],v,i)}}var k=e(n,r,s);return k>-1?i[g?n[k]:k]:t}}function Pi(e){return cn(function(n){var r=n.length,s=r,i=ze.prototype.thru;for(e&&n.reverse();s--;){var g=n[s];if(typeof g!="function")throw new We(T);if(i&&!k&&Ca(g)=="wrapper")var k=new ze([],!0)}for(s=k?s:r;++s<r;){g=n[s];var v=Ca(g),f=v=="wrapper"?hs(g):t;f&&As(f[0])&&f[1]==(Se|fe|Y|yn)&&!f[4].length&&f[9]==1?k=k[Ca(f[0])].apply(k,f[3]):k=g.length==1&&As(g)?k[v]():k.thru(g)}return function(){var A=arguments,R=A[0];if(k&&A.length==1&&P(R))return k.plant(R).value();for(var _=0,V=r?n[_].apply(this,A):R;++_<r;)V=n[_].call(this,V);return V}})}function La(e,n,r,s,i,g,k,v,f,A){var R=n&Se,_=n&C,V=n&Re,w=n&(fe|Oe),F=n&Te,x=V?t:Ur(e);function G(){for(var $=arguments.length,z=b($),Le=$;Le--;)z[Le]=arguments[Le];if(w)var Ne=gr(G),xe=jg(z,Ne);if(s&&(z=ji(z,s,i,w)),g&&(z=Ii(z,g,k,w)),$-=xe,w&&$<A){var me=Kn(z,Ne);return xi(e,n,La,G.placeholder,r,z,me,v,f,A-$)}var sn=_?r:this,qn=V?sn[e]:e;return $=z.length,v?z=Lm(z,v):F&&$>1&&z.reverse(),R&&f<$&&(z.length=f),this&&this!==be&&this instanceof G&&(qn=x||Ur(qn)),qn.apply(sn,z)}return G}function Di(e,n){return function(r,s){return zk(r,e,n(s),{})}}function xa(e,n){return function(r,s){var i;if(r===t&&s===t)return n;if(r!==t&&(i=r),s!==t){if(i===t)return s;typeof r=="string"||typeof s=="string"?(r=Pe(r),s=Pe(s)):(r=_i(r),s=_i(s)),i=e(r,s)}return i}}function vs(e){return cn(function(n){return n=ie(n,Me(O())),H(function(r){var s=this;return e(n,function(i){return Ge(i,s,r)})})})}function Ua(e,n){n=n===t?" ":Pe(n);var r=n.length;if(r<2)return r?us(n,e):n;var s=us(n,Sa(e/ar(n)));return rr(n)?Gn(rn(s),0,e).join(""):s.slice(0,e)}function cm(e,n,r,s){var i=n&C,g=Ur(e);function k(){for(var v=-1,f=arguments.length,A=-1,R=s.length,_=b(R+f),V=this&&this!==be&&this instanceof k?g:e;++A<R;)_[A]=s[A];for(;f--;)_[A++]=arguments[++v];return Ge(V,i?r:this,_)}return k}function Li(e){return function(n,r,s){return s&&typeof s!="number"&&qe(n,r,s)&&(r=s=t),n=_n(n),r===t?(r=n,n=0):r=_n(r),s=s===t?n<r?1:-1:_n(s),im(n,r,s,e)}}function Ha(e){return function(n,r){return typeof n=="string"&&typeof r=="string"||(n=Qe(n),r=Qe(r)),e(n,r)}}function xi(e,n,r,s,i,g,k,v,f,A){var R=n&fe,_=R?k:t,V=R?t:k,w=R?g:t,F=R?t:g;n|=R?Y:vn,n&=~(R?vn:Y),n&pn||(n&=-4);var x=[e,n,i,w,_,F,V,v,f,A],G=r.apply(t,x);return As(e)&&eu(G,x),G.placeholder=s,nu(G,e,n)}function ys(e){var n=pe[e];return function(r,s){if(r=Qe(r),s=s==null?0:ce(L(s),292),s&&ni(r)){var i=(Q(r)+"e").split("e"),g=n(i[0]+"e"+(+i[1]+s));return i=(Q(g)+"e").split("e"),+(i[0]+"e"+(+i[1]-s))}return n(r)}}var Am=lr&&1/ha(new lr([,-0]))[1]==Ln?function(e){return new lr(e)}:Ms;function Ui(e){return function(n){var r=Ae(n);return r==en?Yt(n):r==nn?Dg(n):Kg(n,e(n))}}function En(e,n,r,s,i,g,k,v){var f=n&Re;if(!f&&typeof e!="function")throw new We(T);var A=s?s.length:0;if(A||(n&=-97,s=i=t),k=k===t?k:ve(L(k),0),v=v===t?v:L(v),A-=i?i.length:0,n&vn){var R=s,_=i;s=i=t}var V=f?t:hs(e),w=[e,n,r,s,i,R,_,g,k,v];if(V&&Mm(w,V),e=w[0],n=w[1],r=w[2],s=w[3],i=w[4],v=w[9]=w[9]===t?f?0:e.length:ve(w[9]-A,0),!v&&n&(fe|Oe)&&(n&=-25),!n||n==C)var F=bm(e,n,r);else n==fe||n==Oe?F=Em(e,n,v):(n==Y||n==(C|Y))&&!i.length?F=cm(e,n,r,s):F=La.apply(t,w);var x=V?Ai:eu;return nu(x(F,w),e,n)}function Hi(e,n,r,s){return e===t||tn(e,sr[r])&&!ee.call(s,r)?n:e}function Ci(e,n,r,s,i,g){return ue(e)&&ue(n)&&(g.set(n,e),Ga(e,n,t,Ci,g),g.delete(n)),e}function Rm(e){return Yr(e)?t:e}function Yi(e,n,r,s,i,g){var k=r&U,v=e.length,f=n.length;if(v!=f&&!(k&&f>v))return!1;var A=g.get(e),R=g.get(n);if(A&&R)return A==n&&R==e;var _=-1,V=!0,w=r&re?new Cn:t;for(g.set(e,n),g.set(n,e);++_<v;){var F=e[_],x=n[_];if(s)var G=k?s(x,F,_,n,e,g):s(F,x,_,e,n,g);if(G!==t){if(G)continue;V=!1;break}if(w){if(!Dt(n,function($,z){if(!Kr(w,z)&&(F===$||i(F,$,r,s,g)))return w.push(z)})){V=!1;break}}else if(!(F===x||i(F,x,r,s,g))){V=!1;break}}return g.delete(e),g.delete(n),V}function _m(e,n,r,s,i,g,k){switch(r){case Qn:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case wr:return!(e.byteLength!=n.byteLength||!g(new _a(e),new _a(n)));case _r:case qr:case Nr:return tn(+e,+n);case ga:return e.name==n.name&&e.message==n.message;case Vr:case Sr:return e==n+"";case en:var v=Yt;case nn:var f=s&U;if(v||(v=ha),e.size!=n.size&&!f)return!1;var A=k.get(e);if(A)return A==n;s|=re,k.set(e,n);var R=Yi(v(e),v(n),s,i,g,k);return k.delete(e),R;case ma:if(Gr)return Gr.call(e)==Gr.call(n)}return!1}function qm(e,n,r,s,i,g){var k=r&U,v=fs(e),f=v.length,A=fs(n),R=A.length;if(f!=R&&!k)return!1;for(var _=f;_--;){var V=v[_];if(!(k?V in n:ee.call(n,V)))return!1}var w=g.get(e),F=g.get(n);if(w&&F)return w==n&&F==e;var x=!0;g.set(e,n),g.set(n,e);for(var G=k;++_<f;){V=v[_];var $=e[V],z=n[V];if(s)var Le=k?s(z,$,V,n,e,g):s($,z,V,e,n,g);if(!(Le===t?$===z||i($,z,r,s,g):Le)){x=!1;break}G||(G=V=="constructor")}if(x&&!G){var Ne=e.constructor,xe=n.constructor;Ne!=xe&&"constructor"in e&&"constructor"in n&&!(typeof Ne=="function"&&Ne instanceof Ne&&typeof xe=="function"&&xe instanceof xe)&&(x=!1)}return g.delete(e),g.delete(n),x}function cn(e){return _s(Xi(e,t,iu),e+"")}function fs(e){return ki(e,he,Es)}function Ts(e){return ki(e,Ke,$i)}var hs=wa?function(e){return wa.get(e)}:Ms;function Ca(e){for(var n=e.name+"",r=ir[n],s=ee.call(ir,n)?r.length:0;s--;){var i=r[s],g=i.func;if(g==null||g==e)return i.name}return n}function gr(e){var n=ee.call(d,"placeholder")?d:e;return n.placeholder}function O(){var e=d.iteratee||Fs;return e=e===Fs?vi:e,arguments.length?e(arguments[0],arguments[1]):e}function Ya(e,n){var r=e.__data__;return Im(n)?r[typeof n=="string"?"string":"hash"]:r.map}function bs(e){for(var n=he(e),r=n.length;r--;){var s=n[r],i=e[s];n[r]=[s,i,Ji(i)]}return n}function Wn(e,n){var r=Gg(e,n);return pi(r)?r:t}function Nm(e){var n=ee.call(e,Un),r=e[Un];try{e[Un]=t;var s=!0}catch{}var i=Aa.call(e);return s&&(n?e[Un]=r:delete e[Un]),i}var Es=Wt?function(e){return e==null?[]:(e=ae(e),Bn(Wt(e),function(n){return Ql.call(e,n)}))}:Ps,$i=Wt?function(e){for(var n=[];e;)wn(n,Es(e)),e=qa(e);return n}:Ps,Ae=_e;(zt&&Ae(new zt(new ArrayBuffer(1)))!=Qn||Ir&&Ae(new Ir)!=en||Jt&&Ae(Jt.resolve())!=ol||lr&&Ae(new lr)!=nn||Or&&Ae(new Or)!=Br)&&(Ae=function(e){var n=_e(e),r=n==fn?e.constructor:t,s=r?zn(r):"";if(s)switch(s){case ok:return Qn;case dk:return en;case gk:return ol;case kk:return nn;case mk:return Br}return n});function Vm(e,n,r){for(var s=-1,i=r.length;++s<i;){var g=r[s],k=g.size;switch(g.type){case"drop":e+=k;break;case"dropRight":n-=k;break;case"take":n=ce(n,e+k);break;case"takeRight":e=ve(e,n-k);break}}return{start:e,end:n}}function Sm(e){var n=e.match(Od);return n?n[1].split(Fd):[]}function Wi(e,n,r){n=Fn(n,e);for(var s=-1,i=n.length,g=!1;++s<i;){var k=gn(n[s]);if(!(g=e!=null&&r(e,k)))break;e=e[k]}return g||++s!=i?g:(i=e==null?0:e.length,!!i&&Qa(i)&&An(k,i)&&(P(e)||Jn(e)))}function Bm(e){var n=e.length,r=new e.constructor(n);return n&&typeof e[0]=="string"&&ee.call(e,"index")&&(r.index=e.index,r.input=e.input),r}function zi(e){return typeof e.constructor=="function"&&!Hr(e)?ur(qa(e)):{}}function wm(e,n,r){var s=e.constructor;switch(n){case wr:return ps(e);case _r:case qr:return new s(+e);case Qn:return pm(e,r);case bt:case Et:case ct:case At:case Rt:case _t:case qt:case Nt:case Vt:return wi(e,r);case en:return new s;case Nr:case Sr:return new s(e);case Vr:return vm(e);case nn:return new s;case ma:return ym(e)}}function Km(e,n){var r=n.length;if(!r)return e;var s=r-1;return n[s]=(r>1?"& ":"")+n[s],n=n.join(r>2?", ":" "),e.replace(Id,`{
/* [wrapped with `+n+`] */
`)}function jm(e){return P(e)||Jn(e)||!!(ei&&e&&e[ei])}function An(e,n){var r=typeof e;return n=n??Vn,!!n&&(r=="number"||r!="symbol"&&Cd.test(e))&&e>-1&&e%1==0&&e<n}function qe(e,n,r){if(!ue(r))return!1;var s=typeof n;return(s=="number"?we(r)&&An(n,r.length):s=="string"&&n in r)?tn(r[n],e):!1}function cs(e,n){if(P(e))return!1;var r=typeof e;return r=="number"||r=="symbol"||r=="boolean"||e==null||De(e)?!0:Bd.test(e)||!Sd.test(e)||n!=null&&e in ae(n)}function Im(e){var n=typeof e;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?e!=="__proto__":e===null}function As(e){var n=Ca(e),r=d[n];if(typeof r!="function"||!(n in W.prototype))return!1;if(e===r)return!0;var s=hs(r);return!!s&&e===s[0]}function Om(e){return!!Jl&&Jl in e}var Fm=Ea?Rn:Ds;function Hr(e){var n=e&&e.constructor,r=typeof n=="function"&&n.prototype||sr;return e===r}function Ji(e){return e===e&&!ue(e)}function Zi(e,n){return function(r){return r==null?!1:r[e]===n&&(n!==t||e in ae(r))}}function Gm(e){var n=Za(e,function(s){return r.size===q&&r.clear(),s}),r=n.cache;return n}function Mm(e,n){var r=e[1],s=n[1],i=r|s,g=i<(C|Re|Se),k=s==Se&&r==fe||s==Se&&r==yn&&e[7].length<=n[8]||s==(Se|yn)&&n[7].length<=n[8]&&r==fe;if(!(g||k))return e;s&C&&(e[2]=n[2],i|=r&C?0:pn);var v=n[3];if(v){var f=e[3];e[3]=f?ji(f,v,n[4]):v,e[4]=f?Kn(e[3],N):n[4]}return v=n[5],v&&(f=e[5],e[5]=f?Ii(f,v,n[6]):v,e[6]=f?Kn(e[5],N):n[6]),v=n[7],v&&(e[7]=v),s&Se&&(e[8]=e[8]==null?n[8]:ce(e[8],n[8])),e[9]==null&&(e[9]=n[9]),e[0]=n[0],e[1]=i,e}function Pm(e){var n=[];if(e!=null)for(var r in ae(e))n.push(r);return n}function Dm(e){return Aa.call(e)}function Xi(e,n,r){return n=ve(n===t?e.length-1:n,0),function(){for(var s=arguments,i=-1,g=ve(s.length-n,0),k=b(g);++i<g;)k[i]=s[n+i];i=-1;for(var v=b(n+1);++i<n;)v[i]=s[i];return v[n]=r(k),Ge(e,this,v)}}function Qi(e,n){return n.length<2?e:$n(e,Ze(n,0,-1))}function Lm(e,n){for(var r=e.length,s=ce(n.length,r),i=Be(e);s--;){var g=n[s];e[s]=An(g,r)?i[g]:t}return e}function Rs(e,n){if(!(n==="constructor"&&typeof e[n]=="function")&&n!="__proto__")return e[n]}var eu=ru(Ai),Cr=rk||function(e,n){return be.setTimeout(e,n)},_s=ru(dm);function nu(e,n,r){var s=n+"";return _s(e,Km(s,xm(Sm(s),r)))}function ru(e){var n=0,r=0;return function(){var s=lk(),i=ft-(s-r);if(r=s,i>0){if(++n>=la)return arguments[0]}else n=0;return e.apply(t,arguments)}}function $a(e,n){var r=-1,s=e.length,i=s-1;for(n=n===t?s:n;++r<n;){var g=is(r,i),k=e[g];e[g]=e[r],e[r]=k}return e.length=n,e}var au=Gm(function(e){var n=[];return e.charCodeAt(0)===46&&n.push(""),e.replace(wd,function(r,s,i,g){n.push(i?g.replace(Pd,"$1"):s||r)}),n});function gn(e){if(typeof e=="string"||De(e))return e;var n=e+"";return n=="0"&&1/e==-1/0?"-0":n}function zn(e){if(e!=null){try{return ca.call(e)}catch{}try{return e+""}catch{}}return""}function xm(e,n){return $e(vd,function(r){var s="_."+r[0];n&r[1]&&!fa(e,s)&&e.push(s)}),e.sort()}function tu(e){if(e instanceof W)return e.clone();var n=new ze(e.__wrapped__,e.__chain__);return n.__actions__=Be(e.__actions__),n.__index__=e.__index__,n.__values__=e.__values__,n}function Um(e,n,r){(r?qe(e,n,r):n===t)?n=1:n=ve(L(n),0);var s=e==null?0:e.length;if(!s||n<1)return[];for(var i=0,g=0,k=b(Sa(s/n));i<s;)k[g++]=Ze(e,i,i+=n);return k}function Hm(e){for(var n=-1,r=e==null?0:e.length,s=0,i=[];++n<r;){var g=e[n];g&&(i[s++]=g)}return i}function Cm(){var e=arguments.length;if(!e)return[];for(var n=b(e-1),r=arguments[0],s=e;s--;)n[s-1]=arguments[s];return wn(P(r)?Be(r):[r],Ee(n,1))}var Ym=H(function(e,n){return ke(e)?Pr(e,Ee(n,1,ke,!0)):[]}),$m=H(function(e,n){var r=Xe(n);return ke(r)&&(r=t),ke(e)?Pr(e,Ee(n,1,ke,!0),O(r,2)):[]}),Wm=H(function(e,n){var r=Xe(n);return ke(r)&&(r=t),ke(e)?Pr(e,Ee(n,1,ke,!0),t,r):[]});function zm(e,n,r){var s=e==null?0:e.length;return s?(n=r||n===t?1:L(n),Ze(e,n<0?0:n,s)):[]}function Jm(e,n,r){var s=e==null?0:e.length;return s?(n=r||n===t?1:L(n),n=s-n,Ze(e,0,n<0?0:n)):[]}function Zm(e,n){return e&&e.length?Pa(e,O(n,3),!0,!0):[]}function Xm(e,n){return e&&e.length?Pa(e,O(n,3),!0):[]}function Qm(e,n,r,s){var i=e==null?0:e.length;return i?(r&&typeof r!="number"&&qe(e,n,r)&&(r=0,s=i),Ck(e,n,r,s)):[]}function su(e,n,r){var s=e==null?0:e.length;if(!s)return-1;var i=r==null?0:L(r);return i<0&&(i=ve(s+i,0)),Ta(e,O(n,3),i)}function lu(e,n,r){var s=e==null?0:e.length;if(!s)return-1;var i=s-1;return r!==t&&(i=L(r),i=r<0?ve(s+i,0):ce(i,s-1)),Ta(e,O(n,3),i,!0)}function iu(e){var n=e==null?0:e.length;return n?Ee(e,1):[]}function ep(e){var n=e==null?0:e.length;return n?Ee(e,Ln):[]}function np(e,n){var r=e==null?0:e.length;return r?(n=n===t?1:L(n),Ee(e,n)):[]}function rp(e){for(var n=-1,r=e==null?0:e.length,s={};++n<r;){var i=e[n];s[i[0]]=i[1]}return s}function uu(e){return e&&e.length?e[0]:t}function ap(e,n,r){var s=e==null?0:e.length;if(!s)return-1;var i=r==null?0:L(r);return i<0&&(i=ve(s+i,0)),nr(e,n,i)}function tp(e){var n=e==null?0:e.length;return n?Ze(e,0,-1):[]}var sp=H(function(e){var n=ie(e,ks);return n.length&&n[0]===e[0]?rs(n):[]}),lp=H(function(e){var n=Xe(e),r=ie(e,ks);return n===Xe(r)?n=t:r.pop(),r.length&&r[0]===e[0]?rs(r,O(n,2)):[]}),ip=H(function(e){var n=Xe(e),r=ie(e,ks);return n=typeof n=="function"?n:t,n&&r.pop(),r.length&&r[0]===e[0]?rs(r,t,n):[]});function up(e,n){return e==null?"":tk.call(e,n)}function Xe(e){var n=e==null?0:e.length;return n?e[n-1]:t}function op(e,n,r){var s=e==null?0:e.length;if(!s)return-1;var i=s;return r!==t&&(i=L(r),i=i<0?ve(s+i,0):ce(i,s-1)),n===n?xg(e,n,i):Ta(e,xl,i,!0)}function dp(e,n){return e&&e.length?hi(e,L(n)):t}var gp=H(ou);function ou(e,n){return e&&e.length&&n&&n.length?ls(e,n):e}function kp(e,n,r){return e&&e.length&&n&&n.length?ls(e,n,O(r,2)):e}function mp(e,n,r){return e&&e.length&&n&&n.length?ls(e,n,t,r):e}var pp=cn(function(e,n){var r=e==null?0:e.length,s=Xt(e,n);return ci(e,ie(n,function(i){return An(i,r)?+i:i}).sort(Ki)),s});function vp(e,n){var r=[];if(!(e&&e.length))return r;var s=-1,i=[],g=e.length;for(n=O(n,3);++s<g;){var k=e[s];n(k,s,e)&&(r.push(k),i.push(s))}return ci(e,i),r}function qs(e){return e==null?e:uk.call(e)}function yp(e,n,r){var s=e==null?0:e.length;return s?(r&&typeof r!="number"&&qe(e,n,r)?(n=0,r=s):(n=n==null?0:L(n),r=r===t?s:L(r)),Ze(e,n,r)):[]}function fp(e,n){return Ma(e,n)}function Tp(e,n,r){return os(e,n,O(r,2))}function hp(e,n){var r=e==null?0:e.length;if(r){var s=Ma(e,n);if(s<r&&tn(e[s],n))return s}return-1}function bp(e,n){return Ma(e,n,!0)}function Ep(e,n,r){return os(e,n,O(r,2),!0)}function cp(e,n){var r=e==null?0:e.length;if(r){var s=Ma(e,n,!0)-1;if(tn(e[s],n))return s}return-1}function Ap(e){return e&&e.length?Ri(e):[]}function Rp(e,n){return e&&e.length?Ri(e,O(n,2)):[]}function _p(e){var n=e==null?0:e.length;return n?Ze(e,1,n):[]}function qp(e,n,r){return e&&e.length?(n=r||n===t?1:L(n),Ze(e,0,n<0?0:n)):[]}function Np(e,n,r){var s=e==null?0:e.length;return s?(n=r||n===t?1:L(n),n=s-n,Ze(e,n<0?0:n,s)):[]}function Vp(e,n){return e&&e.length?Pa(e,O(n,3),!1,!0):[]}function Sp(e,n){return e&&e.length?Pa(e,O(n,3)):[]}var Bp=H(function(e){return On(Ee(e,1,ke,!0))}),wp=H(function(e){var n=Xe(e);return ke(n)&&(n=t),On(Ee(e,1,ke,!0),O(n,2))}),Kp=H(function(e){var n=Xe(e);return n=typeof n=="function"?n:t,On(Ee(e,1,ke,!0),t,n)});function jp(e){return e&&e.length?On(e):[]}function Ip(e,n){return e&&e.length?On(e,O(n,2)):[]}function Op(e,n){return n=typeof n=="function"?n:t,e&&e.length?On(e,t,n):[]}function Ns(e){if(!(e&&e.length))return[];var n=0;return e=Bn(e,function(r){if(ke(r))return n=ve(r.length,n),!0}),Ht(n,function(r){return ie(e,Lt(r))})}function du(e,n){if(!(e&&e.length))return[];var r=Ns(e);return n==null?r:ie(r,function(s){return Ge(n,t,s)})}var Fp=H(function(e,n){return ke(e)?Pr(e,n):[]}),Gp=H(function(e){return gs(Bn(e,ke))}),Mp=H(function(e){var n=Xe(e);return ke(n)&&(n=t),gs(Bn(e,ke),O(n,2))}),Pp=H(function(e){var n=Xe(e);return n=typeof n=="function"?n:t,gs(Bn(e,ke),t,n)}),Dp=H(Ns);function Lp(e,n){return Vi(e||[],n||[],Mr)}function xp(e,n){return Vi(e||[],n||[],xr)}var Up=H(function(e){var n=e.length,r=n>1?e[n-1]:t;return r=typeof r=="function"?(e.pop(),r):t,du(e,r)});function gu(e){var n=d(e);return n.__chain__=!0,n}function Hp(e,n){return n(e),e}function Wa(e,n){return n(e)}var Cp=cn(function(e){var n=e.length,r=n?e[0]:0,s=this.__wrapped__,i=function(g){return Xt(g,e)};return n>1||this.__actions__.length||!(s instanceof W)||!An(r)?this.thru(i):(s=s.slice(r,+r+(n?1:0)),s.__actions__.push({func:Wa,args:[i],thisArg:t}),new ze(s,this.__chain__).thru(function(g){return n&&!g.length&&g.push(t),g}))});function Yp(){return gu(this)}function $p(){return new ze(this.value(),this.__chain__)}function Wp(){this.__values__===t&&(this.__values__=_u(this.value()));var e=this.__index__>=this.__values__.length,n=e?t:this.__values__[this.__index__++];return{done:e,value:n}}function zp(){return this}function Jp(e){for(var n,r=this;r instanceof ja;){var s=tu(r);s.__index__=0,s.__values__=t,n?i.__wrapped__=s:n=s;var i=s;r=r.__wrapped__}return i.__wrapped__=e,n}function Zp(){var e=this.__wrapped__;if(e instanceof W){var n=e;return this.__actions__.length&&(n=new W(this)),n=n.reverse(),n.__actions__.push({func:Wa,args:[qs],thisArg:t}),new ze(n,this.__chain__)}return this.thru(qs)}function Xp(){return Ni(this.__wrapped__,this.__actions__)}var Qp=Da(function(e,n,r){ee.call(e,r)?++e[r]:bn(e,r,1)});function ev(e,n,r){var s=P(e)?Dl:Hk;return r&&qe(e,n,r)&&(n=t),s(e,O(n,3))}function nv(e,n){var r=P(e)?Bn:di;return r(e,O(n,3))}var rv=Mi(su),av=Mi(lu);function tv(e,n){return Ee(za(e,n),1)}function sv(e,n){return Ee(za(e,n),Ln)}function lv(e,n,r){return r=r===t?1:L(r),Ee(za(e,n),r)}function ku(e,n){var r=P(e)?$e:In;return r(e,O(n,3))}function mu(e,n){var r=P(e)?_g:oi;return r(e,O(n,3))}var iv=Da(function(e,n,r){ee.call(e,r)?e[r].push(n):bn(e,r,[n])});function uv(e,n,r,s){e=we(e)?e:mr(e),r=r&&!s?L(r):0;var i=e.length;return r<0&&(r=ve(i+r,0)),et(e)?r<=i&&e.indexOf(n,r)>-1:!!i&&nr(e,n,r)>-1}var ov=H(function(e,n,r){var s=-1,i=typeof n=="function",g=we(e)?b(e.length):[];return In(e,function(k){g[++s]=i?Ge(n,k,r):Dr(k,n,r)}),g}),dv=Da(function(e,n,r){bn(e,r,n)});function za(e,n){var r=P(e)?ie:yi;return r(e,O(n,3))}function gv(e,n,r,s){return e==null?[]:(P(n)||(n=n==null?[]:[n]),r=s?t:r,P(r)||(r=r==null?[]:[r]),bi(e,n,r))}var kv=Da(function(e,n,r){e[r?0:1].push(n)},function(){return[[],[]]});function mv(e,n,r){var s=P(e)?Pt:Hl,i=arguments.length<3;return s(e,O(n,4),r,i,In)}function pv(e,n,r){var s=P(e)?qg:Hl,i=arguments.length<3;return s(e,O(n,4),r,i,oi)}function vv(e,n){var r=P(e)?Bn:di;return r(e,Xa(O(n,3)))}function yv(e){var n=P(e)?si:um;return n(e)}function fv(e,n,r){(r?qe(e,n,r):n===t)?n=1:n=L(n);var s=P(e)?Pk:om;return s(e,n)}function Tv(e){var n=P(e)?Dk:gm;return n(e)}function hv(e){if(e==null)return 0;if(we(e))return et(e)?ar(e):e.length;var n=Ae(e);return n==en||n==nn?e.size:ts(e).length}function bv(e,n,r){var s=P(e)?Dt:km;return r&&qe(e,n,r)&&(n=t),s(e,O(n,3))}var Ev=H(function(e,n){if(e==null)return[];var r=n.length;return r>1&&qe(e,n[0],n[1])?n=[]:r>2&&qe(n[0],n[1],n[2])&&(n=[n[0]]),bi(e,Ee(n,1),[])}),Ja=nk||function(){return be.Date.now()};function cv(e,n){if(typeof n!="function")throw new We(T);return e=L(e),function(){if(--e<1)return n.apply(this,arguments)}}function pu(e,n,r){return n=r?t:n,n=e&&n==null?e.length:n,En(e,Se,t,t,t,t,n)}function vu(e,n){var r;if(typeof n!="function")throw new We(T);return e=L(e),function(){return--e>0&&(r=n.apply(this,arguments)),e<=1&&(n=t),r}}var Vs=H(function(e,n,r){var s=C;if(r.length){var i=Kn(r,gr(Vs));s|=Y}return En(e,s,n,r,i)}),yu=H(function(e,n,r){var s=C|Re;if(r.length){var i=Kn(r,gr(yu));s|=Y}return En(n,s,e,r,i)});function fu(e,n,r){n=r?t:n;var s=En(e,fe,t,t,t,t,t,n);return s.placeholder=fu.placeholder,s}function Tu(e,n,r){n=r?t:n;var s=En(e,Oe,t,t,t,t,t,n);return s.placeholder=Tu.placeholder,s}function hu(e,n,r){var s,i,g,k,v,f,A=0,R=!1,_=!1,V=!0;if(typeof e!="function")throw new We(T);n=Qe(n)||0,ue(r)&&(R=!!r.leading,_="maxWait"in r,g=_?ve(Qe(r.maxWait)||0,n):g,V="trailing"in r?!!r.trailing:V);function w(me){var sn=s,qn=i;return s=i=t,A=me,k=e.apply(qn,sn),k}function F(me){return A=me,v=Cr($,n),R?w(me):k}function x(me){var sn=me-f,qn=me-A,Mu=n-sn;return _?ce(Mu,g-qn):Mu}function G(me){var sn=me-f,qn=me-A;return f===t||sn>=n||sn<0||_&&qn>=g}function $(){var me=Ja();if(G(me))return z(me);v=Cr($,x(me))}function z(me){return v=t,V&&s?w(me):(s=i=t,k)}function Le(){v!==t&&Si(v),A=0,s=f=i=v=t}function Ne(){return v===t?k:z(Ja())}function xe(){var me=Ja(),sn=G(me);if(s=arguments,i=this,f=me,sn){if(v===t)return F(f);if(_)return Si(v),v=Cr($,n),w(f)}return v===t&&(v=Cr($,n)),k}return xe.cancel=Le,xe.flush=Ne,xe}var Av=H(function(e,n){return ui(e,1,n)}),Rv=H(function(e,n,r){return ui(e,Qe(n)||0,r)});function _v(e){return En(e,Te)}function Za(e,n){if(typeof e!="function"||n!=null&&typeof n!="function")throw new We(T);var r=function(){var s=arguments,i=n?n.apply(this,s):s[0],g=r.cache;if(g.has(i))return g.get(i);var k=e.apply(this,s);return r.cache=g.set(i,k)||g,k};return r.cache=new(Za.Cache||hn),r}Za.Cache=hn;function Xa(e){if(typeof e!="function")throw new We(T);return function(){var n=arguments;switch(n.length){case 0:return!e.call(this);case 1:return!e.call(this,n[0]);case 2:return!e.call(this,n[0],n[1]);case 3:return!e.call(this,n[0],n[1],n[2])}return!e.apply(this,n)}}function qv(e){return vu(2,e)}var Nv=mm(function(e,n){n=n.length==1&&P(n[0])?ie(n[0],Me(O())):ie(Ee(n,1),Me(O()));var r=n.length;return H(function(s){for(var i=-1,g=ce(s.length,r);++i<g;)s[i]=n[i].call(this,s[i]);return Ge(e,this,s)})}),Ss=H(function(e,n){var r=Kn(n,gr(Ss));return En(e,Y,t,n,r)}),bu=H(function(e,n){var r=Kn(n,gr(bu));return En(e,vn,t,n,r)}),Vv=cn(function(e,n){return En(e,yn,t,t,t,n)});function Sv(e,n){if(typeof e!="function")throw new We(T);return n=n===t?n:L(n),H(e,n)}function Bv(e,n){if(typeof e!="function")throw new We(T);return n=n==null?0:ve(L(n),0),H(function(r){var s=r[n],i=Gn(r,0,n);return s&&wn(i,s),Ge(e,this,i)})}function wv(e,n,r){var s=!0,i=!0;if(typeof e!="function")throw new We(T);return ue(r)&&(s="leading"in r?!!r.leading:s,i="trailing"in r?!!r.trailing:i),hu(e,n,{leading:s,maxWait:n,trailing:i})}function Kv(e){return pu(e,1)}function jv(e,n){return Ss(ms(n),e)}function Iv(){if(!arguments.length)return[];var e=arguments[0];return P(e)?e:[e]}function Ov(e){return Je(e,D)}function Fv(e,n){return n=typeof n=="function"?n:t,Je(e,D,n)}function Gv(e){return Je(e,S|D)}function Mv(e,n){return n=typeof n=="function"?n:t,Je(e,S|D,n)}function Pv(e,n){return n==null||ii(e,n,he(n))}function tn(e,n){return e===n||e!==e&&n!==n}var Dv=Ha(ns),Lv=Ha(function(e,n){return e>=n}),Jn=mi(function(){return arguments}())?mi:function(e){return oe(e)&&ee.call(e,"callee")&&!Ql.call(e,"callee")},P=b.isArray,xv=Il?Me(Il):Jk;function we(e){return e!=null&&Qa(e.length)&&!Rn(e)}function ke(e){return oe(e)&&we(e)}function Uv(e){return e===!0||e===!1||oe(e)&&_e(e)==_r}var Mn=ak||Ds,Hv=Ol?Me(Ol):Zk;function Cv(e){return oe(e)&&e.nodeType===1&&!Yr(e)}function Yv(e){if(e==null)return!0;if(we(e)&&(P(e)||typeof e=="string"||typeof e.splice=="function"||Mn(e)||kr(e)||Jn(e)))return!e.length;var n=Ae(e);if(n==en||n==nn)return!e.size;if(Hr(e))return!ts(e).length;for(var r in e)if(ee.call(e,r))return!1;return!0}function $v(e,n){return Lr(e,n)}function Wv(e,n,r){r=typeof r=="function"?r:t;var s=r?r(e,n):t;return s===t?Lr(e,n,t,r):!!s}function Bs(e){if(!oe(e))return!1;var n=_e(e);return n==ga||n==fd||typeof e.message=="string"&&typeof e.name=="string"&&!Yr(e)}function zv(e){return typeof e=="number"&&ni(e)}function Rn(e){if(!ue(e))return!1;var n=_e(e);return n==ka||n==ul||n==yd||n==hd}function Eu(e){return typeof e=="number"&&e==L(e)}function Qa(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Vn}function ue(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}function oe(e){return e!=null&&typeof e=="object"}var cu=Fl?Me(Fl):Qk;function Jv(e,n){return e===n||as(e,n,bs(n))}function Zv(e,n,r){return r=typeof r=="function"?r:t,as(e,n,bs(n),r)}function Xv(e){return Au(e)&&e!=+e}function Qv(e){if(Fm(e))throw new M(m);return pi(e)}function ey(e){return e===null}function ny(e){return e==null}function Au(e){return typeof e=="number"||oe(e)&&_e(e)==Nr}function Yr(e){if(!oe(e)||_e(e)!=fn)return!1;var n=qa(e);if(n===null)return!0;var r=ee.call(n,"constructor")&&n.constructor;return typeof r=="function"&&r instanceof r&&ca.call(r)==Zg}var ws=Gl?Me(Gl):em;function ry(e){return Eu(e)&&e>=-9007199254740991&&e<=Vn}var Ru=Ml?Me(Ml):nm;function et(e){return typeof e=="string"||!P(e)&&oe(e)&&_e(e)==Sr}function De(e){return typeof e=="symbol"||oe(e)&&_e(e)==ma}var kr=Pl?Me(Pl):rm;function ay(e){return e===t}function ty(e){return oe(e)&&Ae(e)==Br}function sy(e){return oe(e)&&_e(e)==Ed}var ly=Ha(ss),iy=Ha(function(e,n){return e<=n});function _u(e){if(!e)return[];if(we(e))return et(e)?rn(e):Be(e);if(jr&&e[jr])return Pg(e[jr]());var n=Ae(e),r=n==en?Yt:n==nn?ha:mr;return r(e)}function _n(e){if(!e)return e===0?e:0;if(e=Qe(e),e===Ln||e===-1/0){var n=e<0?-1:1;return n*ht}return e===e?e:0}function L(e){var n=_n(e),r=n%1;return n===n?r?n-r:n:0}function qu(e){return e?Yn(L(e),0,Fe):0}function Qe(e){if(typeof e=="number")return e;if(De(e))return Zn;if(ue(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=ue(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=Cl(e);var r=xd.test(e);return r||Hd.test(e)?cg(e.slice(2),r?2:8):Ld.test(e)?Zn:+e}function Nu(e){return dn(e,Ke(e))}function uy(e){return e?Yn(L(e),-9007199254740991,Vn):e===0?e:0}function Q(e){return e==null?"":Pe(e)}var oy=or(function(e,n){if(Hr(n)||we(n)){dn(n,he(n),e);return}for(var r in n)ee.call(n,r)&&Mr(e,r,n[r])}),Vu=or(function(e,n){dn(n,Ke(n),e)}),nt=or(function(e,n,r,s){dn(n,Ke(n),e,s)}),dy=or(function(e,n,r,s){dn(n,he(n),e,s)}),gy=cn(Xt);function ky(e,n){var r=ur(e);return n==null?r:li(r,n)}var my=H(function(e,n){e=ae(e);var r=-1,s=n.length,i=s>2?n[2]:t;for(i&&qe(n[0],n[1],i)&&(s=1);++r<s;)for(var g=n[r],k=Ke(g),v=-1,f=k.length;++v<f;){var A=k[v],R=e[A];(R===t||tn(R,sr[A])&&!ee.call(e,A))&&(e[A]=g[A])}return e}),py=H(function(e){return e.push(t,Ci),Ge(Su,t,e)});function vy(e,n){return Ll(e,O(n,3),on)}function yy(e,n){return Ll(e,O(n,3),es)}function fy(e,n){return e==null?e:Qt(e,O(n,3),Ke)}function Ty(e,n){return e==null?e:gi(e,O(n,3),Ke)}function hy(e,n){return e&&on(e,O(n,3))}function by(e,n){return e&&es(e,O(n,3))}function Ey(e){return e==null?[]:Fa(e,he(e))}function cy(e){return e==null?[]:Fa(e,Ke(e))}function Ks(e,n,r){var s=e==null?t:$n(e,n);return s===t?r:s}function Ay(e,n){return e!=null&&Wi(e,n,Yk)}function js(e,n){return e!=null&&Wi(e,n,$k)}var Ry=Di(function(e,n,r){n!=null&&typeof n.toString!="function"&&(n=Aa.call(n)),e[n]=r},Os(je)),_y=Di(function(e,n,r){n!=null&&typeof n.toString!="function"&&(n=Aa.call(n)),ee.call(e,n)?e[n].push(r):e[n]=[r]},O),qy=H(Dr);function he(e){return we(e)?ti(e):ts(e)}function Ke(e){return we(e)?ti(e,!0):am(e)}function Ny(e,n){var r={};return n=O(n,3),on(e,function(s,i,g){bn(r,n(s,i,g),s)}),r}function Vy(e,n){var r={};return n=O(n,3),on(e,function(s,i,g){bn(r,i,n(s,i,g))}),r}var Sy=or(function(e,n,r){Ga(e,n,r)}),Su=or(function(e,n,r,s){Ga(e,n,r,s)}),By=cn(function(e,n){var r={};if(e==null)return r;var s=!1;n=ie(n,function(g){return g=Fn(g,e),s||(s=g.length>1),g}),dn(e,Ts(e),r),s&&(r=Je(r,S|K|D,Rm));for(var i=n.length;i--;)ds(r,n[i]);return r});function wy(e,n){return Bu(e,Xa(O(n)))}var Ky=cn(function(e,n){return e==null?{}:sm(e,n)});function Bu(e,n){if(e==null)return{};var r=ie(Ts(e),function(s){return[s]});return n=O(n),Ei(e,r,function(s,i){return n(s,i[0])})}function jy(e,n,r){n=Fn(n,e);var s=-1,i=n.length;for(i||(i=1,e=t);++s<i;){var g=e==null?t:e[gn(n[s])];g===t&&(s=i,g=r),e=Rn(g)?g.call(e):g}return e}function Iy(e,n,r){return e==null?e:xr(e,n,r)}function Oy(e,n,r,s){return s=typeof s=="function"?s:t,e==null?e:xr(e,n,r,s)}var wu=Ui(he),Ku=Ui(Ke);function Fy(e,n,r){var s=P(e),i=s||Mn(e)||kr(e);if(n=O(n,4),r==null){var g=e&&e.constructor;i?r=s?new g:[]:ue(e)?r=Rn(g)?ur(qa(e)):{}:r={}}return(i?$e:on)(e,function(k,v,f){return n(r,k,v,f)}),r}function Gy(e,n){return e==null?!0:ds(e,n)}function My(e,n,r){return e==null?e:qi(e,n,ms(r))}function Py(e,n,r,s){return s=typeof s=="function"?s:t,e==null?e:qi(e,n,ms(r),s)}function mr(e){return e==null?[]:Ct(e,he(e))}function Dy(e){return e==null?[]:Ct(e,Ke(e))}function Ly(e,n,r){return r===t&&(r=n,n=t),r!==t&&(r=Qe(r),r=r===r?r:0),n!==t&&(n=Qe(n),n=n===n?n:0),Yn(Qe(e),n,r)}function xy(e,n,r){return n=_n(n),r===t?(r=n,n=0):r=_n(r),e=Qe(e),Wk(e,n,r)}function Uy(e,n,r){if(r&&typeof r!="boolean"&&qe(e,n,r)&&(n=r=t),r===t&&(typeof n=="boolean"?(r=n,n=t):typeof e=="boolean"&&(r=e,e=t)),e===t&&n===t?(e=0,n=1):(e=_n(e),n===t?(n=e,e=0):n=_n(n)),e>n){var s=e;e=n,n=s}if(r||e%1||n%1){var i=ri();return ce(e+i*(n-e+Eg("1e-"+((i+"").length-1))),n)}return is(e,n)}var Hy=dr(function(e,n,r){return n=n.toLowerCase(),e+(r?ju(n):n)});function ju(e){return Is(Q(e).toLowerCase())}function Iu(e){return e=Q(e),e&&e.replace(Yd,Ig).replace(gg,"")}function Cy(e,n,r){e=Q(e),n=Pe(n);var s=e.length;r=r===t?s:Yn(L(r),0,s);var i=r;return r-=n.length,r>=0&&e.slice(r,i)==n}function Yy(e){return e=Q(e),e&&qd.test(e)?e.replace(gl,Og):e}function $y(e){return e=Q(e),e&&Kd.test(e)?e.replace(St,"\\$&"):e}var Wy=dr(function(e,n,r){return e+(r?"-":"")+n.toLowerCase()}),zy=dr(function(e,n,r){return e+(r?" ":"")+n.toLowerCase()}),Jy=Gi("toLowerCase");function Zy(e,n,r){e=Q(e),n=L(n);var s=n?ar(e):0;if(!n||s>=n)return e;var i=(n-s)/2;return Ua(Ba(i),r)+e+Ua(Sa(i),r)}function Xy(e,n,r){e=Q(e),n=L(n);var s=n?ar(e):0;return n&&s<n?e+Ua(n-s,r):e}function Qy(e,n,r){e=Q(e),n=L(n);var s=n?ar(e):0;return n&&s<n?Ua(n-s,r)+e:e}function ef(e,n,r){return r||n==null?n=0:n&&(n=+n),ik(Q(e).replace(Bt,""),n||0)}function nf(e,n,r){return(r?qe(e,n,r):n===t)?n=1:n=L(n),us(Q(e),n)}function rf(){var e=arguments,n=Q(e[0]);return e.length<3?n:n.replace(e[1],e[2])}var af=dr(function(e,n,r){return e+(r?"_":"")+n.toLowerCase()});function tf(e,n,r){return r&&typeof r!="number"&&qe(e,n,r)&&(n=r=t),r=r===t?Fe:r>>>0,r?(e=Q(e),e&&(typeof n=="string"||n!=null&&!ws(n))&&(n=Pe(n),!n&&rr(e))?Gn(rn(e),0,r):e.split(n,r)):[]}var sf=dr(function(e,n,r){return e+(r?" ":"")+Is(n)});function lf(e,n,r){return e=Q(e),r=r==null?0:Yn(L(r),0,e.length),n=Pe(n),e.slice(r,r+n.length)==n}function uf(e,n,r){var s=d.templateSettings;r&&qe(e,n,r)&&(n=t),e=Q(e),n=nt({},n,s,Hi);var i=nt({},n.imports,s.imports,Hi),g=he(i),k=Ct(i,g),v,f,A=0,R=n.interpolate||pa,_="__p += '",V=$t((n.escape||pa).source+"|"+R.source+"|"+(R===kl?Dd:pa).source+"|"+(n.evaluate||pa).source+"|$","g"),w="//# sourceURL="+(ee.call(n,"sourceURL")?(n.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++yg+"]")+`
`;e.replace(V,function(G,$,z,Le,Ne,xe){return z||(z=Le),_+=e.slice(A,xe).replace($d,Fg),$&&(v=!0,_+=`' +
__e(`+$+`) +
'`),Ne&&(f=!0,_+=`';
`+Ne+`;
__p += '`),z&&(_+=`' +
((__t = (`+z+`)) == null ? '' : __t) +
'`),A=xe+G.length,G}),_+=`';
`;var F=ee.call(n,"variable")&&n.variable;if(!F)_=`with (obj) {
`+_+`
}
`;else if(Md.test(F))throw new M(h);_=(f?_.replace(cd,""):_).replace(Ad,"$1").replace(Rd,"$1;"),_="function("+(F||"obj")+`) {
`+(F?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(v?", __e = _.escape":"")+(f?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+_+`return __p
}`;var x=Fu(function(){return X(g,w+"return "+_).apply(t,k)});if(x.source=_,Bs(x))throw x;return x}function of(e){return Q(e).toLowerCase()}function df(e){return Q(e).toUpperCase()}function gf(e,n,r){if(e=Q(e),e&&(r||n===t))return Cl(e);if(!e||!(n=Pe(n)))return e;var s=rn(e),i=rn(n),g=Yl(s,i),k=$l(s,i)+1;return Gn(s,g,k).join("")}function kf(e,n,r){if(e=Q(e),e&&(r||n===t))return e.slice(0,zl(e)+1);if(!e||!(n=Pe(n)))return e;var s=rn(e),i=$l(s,rn(n))+1;return Gn(s,0,i).join("")}function mf(e,n,r){if(e=Q(e),e&&(r||n===t))return e.replace(Bt,"");if(!e||!(n=Pe(n)))return e;var s=rn(e),i=Yl(s,rn(n));return Gn(s,i).join("")}function pf(e,n){var r=Dn,s=sa;if(ue(n)){var i="separator"in n?n.separator:i;r="length"in n?L(n.length):r,s="omission"in n?Pe(n.omission):s}e=Q(e);var g=e.length;if(rr(e)){var k=rn(e);g=k.length}if(r>=g)return e;var v=r-ar(s);if(v<1)return s;var f=k?Gn(k,0,v).join(""):e.slice(0,v);if(i===t)return f+s;if(k&&(v+=f.length-v),ws(i)){if(e.slice(v).search(i)){var A,R=f;for(i.global||(i=$t(i.source,Q(ml.exec(i))+"g")),i.lastIndex=0;A=i.exec(R);)var _=A.index;f=f.slice(0,_===t?v:_)}}else if(e.indexOf(Pe(i),v)!=v){var V=f.lastIndexOf(i);V>-1&&(f=f.slice(0,V))}return f+s}function vf(e){return e=Q(e),e&&_d.test(e)?e.replace(dl,Ug):e}var yf=dr(function(e,n,r){return e+(r?" ":"")+n.toUpperCase()}),Is=Gi("toUpperCase");function Ou(e,n,r){return e=Q(e),n=r?t:n,n===t?Mg(e)?Yg(e):Sg(e):e.match(n)||[]}var Fu=H(function(e,n){try{return Ge(e,t,n)}catch(r){return Bs(r)?r:new M(r)}}),ff=cn(function(e,n){return $e(n,function(r){r=gn(r),bn(e,r,Vs(e[r],e))}),e});function Tf(e){var n=e==null?0:e.length,r=O();return e=n?ie(e,function(s){if(typeof s[1]!="function")throw new We(T);return[r(s[0]),s[1]]}):[],H(function(s){for(var i=-1;++i<n;){var g=e[i];if(Ge(g[0],this,s))return Ge(g[1],this,s)}})}function hf(e){return Uk(Je(e,S))}function Os(e){return function(){return e}}function bf(e,n){return e==null||e!==e?n:e}var Ef=Pi(),cf=Pi(!0);function je(e){return e}function Fs(e){return vi(typeof e=="function"?e:Je(e,S))}function Af(e){return fi(Je(e,S))}function Rf(e,n){return Ti(e,Je(n,S))}var _f=H(function(e,n){return function(r){return Dr(r,e,n)}}),qf=H(function(e,n){return function(r){return Dr(e,r,n)}});function Gs(e,n,r){var s=he(n),i=Fa(n,s);r==null&&!(ue(n)&&(i.length||!s.length))&&(r=n,n=e,e=this,i=Fa(n,he(n)));var g=!(ue(r)&&"chain"in r)||!!r.chain,k=Rn(e);return $e(i,function(v){var f=n[v];e[v]=f,k&&(e.prototype[v]=function(){var A=this.__chain__;if(g||A){var R=e(this.__wrapped__),_=R.__actions__=Be(this.__actions__);return _.push({func:f,args:arguments,thisArg:e}),R.__chain__=A,R}return f.apply(e,wn([this.value()],arguments))})}),e}function Nf(){return be._===this&&(be._=Xg),this}function Ms(){}function Vf(e){return e=L(e),H(function(n){return hi(n,e)})}var Sf=vs(ie),Bf=vs(Dl),wf=vs(Dt);function Gu(e){return cs(e)?Lt(gn(e)):lm(e)}function Kf(e){return function(n){return e==null?t:$n(e,n)}}var jf=Li(),If=Li(!0);function Ps(){return[]}function Ds(){return!1}function Of(){return{}}function Ff(){return""}function Gf(){return!0}function Mf(e,n){if(e=L(e),e<1||e>Vn)return[];var r=Fe,s=ce(e,Fe);n=O(n),e-=Fe;for(var i=Ht(s,n);++r<e;)n(r);return i}function Pf(e){return P(e)?ie(e,gn):De(e)?[e]:Be(au(Q(e)))}function Df(e){var n=++Jg;return Q(e)+n}var Lf=xa(function(e,n){return e+n},0),xf=ys("ceil"),Uf=xa(function(e,n){return e/n},1),Hf=ys("floor");function Cf(e){return e&&e.length?Oa(e,je,ns):t}function Yf(e,n){return e&&e.length?Oa(e,O(n,2),ns):t}function $f(e){return Ul(e,je)}function Wf(e,n){return Ul(e,O(n,2))}function zf(e){return e&&e.length?Oa(e,je,ss):t}function Jf(e,n){return e&&e.length?Oa(e,O(n,2),ss):t}var Zf=xa(function(e,n){return e*n},1),Xf=ys("round"),Qf=xa(function(e,n){return e-n},0);function eT(e){return e&&e.length?Ut(e,je):0}function nT(e,n){return e&&e.length?Ut(e,O(n,2)):0}return d.after=cv,d.ary=pu,d.assign=oy,d.assignIn=Vu,d.assignInWith=nt,d.assignWith=dy,d.at=gy,d.before=vu,d.bind=Vs,d.bindAll=ff,d.bindKey=yu,d.castArray=Iv,d.chain=gu,d.chunk=Um,d.compact=Hm,d.concat=Cm,d.cond=Tf,d.conforms=hf,d.constant=Os,d.countBy=Qp,d.create=ky,d.curry=fu,d.curryRight=Tu,d.debounce=hu,d.defaults=my,d.defaultsDeep=py,d.defer=Av,d.delay=Rv,d.difference=Ym,d.differenceBy=$m,d.differenceWith=Wm,d.drop=zm,d.dropRight=Jm,d.dropRightWhile=Zm,d.dropWhile=Xm,d.fill=Qm,d.filter=nv,d.flatMap=tv,d.flatMapDeep=sv,d.flatMapDepth=lv,d.flatten=iu,d.flattenDeep=ep,d.flattenDepth=np,d.flip=_v,d.flow=Ef,d.flowRight=cf,d.fromPairs=rp,d.functions=Ey,d.functionsIn=cy,d.groupBy=iv,d.initial=tp,d.intersection=sp,d.intersectionBy=lp,d.intersectionWith=ip,d.invert=Ry,d.invertBy=_y,d.invokeMap=ov,d.iteratee=Fs,d.keyBy=dv,d.keys=he,d.keysIn=Ke,d.map=za,d.mapKeys=Ny,d.mapValues=Vy,d.matches=Af,d.matchesProperty=Rf,d.memoize=Za,d.merge=Sy,d.mergeWith=Su,d.method=_f,d.methodOf=qf,d.mixin=Gs,d.negate=Xa,d.nthArg=Vf,d.omit=By,d.omitBy=wy,d.once=qv,d.orderBy=gv,d.over=Sf,d.overArgs=Nv,d.overEvery=Bf,d.overSome=wf,d.partial=Ss,d.partialRight=bu,d.partition=kv,d.pick=Ky,d.pickBy=Bu,d.property=Gu,d.propertyOf=Kf,d.pull=gp,d.pullAll=ou,d.pullAllBy=kp,d.pullAllWith=mp,d.pullAt=pp,d.range=jf,d.rangeRight=If,d.rearg=Vv,d.reject=vv,d.remove=vp,d.rest=Sv,d.reverse=qs,d.sampleSize=fv,d.set=Iy,d.setWith=Oy,d.shuffle=Tv,d.slice=yp,d.sortBy=Ev,d.sortedUniq=Ap,d.sortedUniqBy=Rp,d.split=tf,d.spread=Bv,d.tail=_p,d.take=qp,d.takeRight=Np,d.takeRightWhile=Vp,d.takeWhile=Sp,d.tap=Hp,d.throttle=wv,d.thru=Wa,d.toArray=_u,d.toPairs=wu,d.toPairsIn=Ku,d.toPath=Pf,d.toPlainObject=Nu,d.transform=Fy,d.unary=Kv,d.union=Bp,d.unionBy=wp,d.unionWith=Kp,d.uniq=jp,d.uniqBy=Ip,d.uniqWith=Op,d.unset=Gy,d.unzip=Ns,d.unzipWith=du,d.update=My,d.updateWith=Py,d.values=mr,d.valuesIn=Dy,d.without=Fp,d.words=Ou,d.wrap=jv,d.xor=Gp,d.xorBy=Mp,d.xorWith=Pp,d.zip=Dp,d.zipObject=Lp,d.zipObjectDeep=xp,d.zipWith=Up,d.entries=wu,d.entriesIn=Ku,d.extend=Vu,d.extendWith=nt,Gs(d,d),d.add=Lf,d.attempt=Fu,d.camelCase=Hy,d.capitalize=ju,d.ceil=xf,d.clamp=Ly,d.clone=Ov,d.cloneDeep=Gv,d.cloneDeepWith=Mv,d.cloneWith=Fv,d.conformsTo=Pv,d.deburr=Iu,d.defaultTo=bf,d.divide=Uf,d.endsWith=Cy,d.eq=tn,d.escape=Yy,d.escapeRegExp=$y,d.every=ev,d.find=rv,d.findIndex=su,d.findKey=vy,d.findLast=av,d.findLastIndex=lu,d.findLastKey=yy,d.floor=Hf,d.forEach=ku,d.forEachRight=mu,d.forIn=fy,d.forInRight=Ty,d.forOwn=hy,d.forOwnRight=by,d.get=Ks,d.gt=Dv,d.gte=Lv,d.has=Ay,d.hasIn=js,d.head=uu,d.identity=je,d.includes=uv,d.indexOf=ap,d.inRange=xy,d.invoke=qy,d.isArguments=Jn,d.isArray=P,d.isArrayBuffer=xv,d.isArrayLike=we,d.isArrayLikeObject=ke,d.isBoolean=Uv,d.isBuffer=Mn,d.isDate=Hv,d.isElement=Cv,d.isEmpty=Yv,d.isEqual=$v,d.isEqualWith=Wv,d.isError=Bs,d.isFinite=zv,d.isFunction=Rn,d.isInteger=Eu,d.isLength=Qa,d.isMap=cu,d.isMatch=Jv,d.isMatchWith=Zv,d.isNaN=Xv,d.isNative=Qv,d.isNil=ny,d.isNull=ey,d.isNumber=Au,d.isObject=ue,d.isObjectLike=oe,d.isPlainObject=Yr,d.isRegExp=ws,d.isSafeInteger=ry,d.isSet=Ru,d.isString=et,d.isSymbol=De,d.isTypedArray=kr,d.isUndefined=ay,d.isWeakMap=ty,d.isWeakSet=sy,d.join=up,d.kebabCase=Wy,d.last=Xe,d.lastIndexOf=op,d.lowerCase=zy,d.lowerFirst=Jy,d.lt=ly,d.lte=iy,d.max=Cf,d.maxBy=Yf,d.mean=$f,d.meanBy=Wf,d.min=zf,d.minBy=Jf,d.stubArray=Ps,d.stubFalse=Ds,d.stubObject=Of,d.stubString=Ff,d.stubTrue=Gf,d.multiply=Zf,d.nth=dp,d.noConflict=Nf,d.noop=Ms,d.now=Ja,d.pad=Zy,d.padEnd=Xy,d.padStart=Qy,d.parseInt=ef,d.random=Uy,d.reduce=mv,d.reduceRight=pv,d.repeat=nf,d.replace=rf,d.result=jy,d.round=Xf,d.runInContext=y,d.sample=yv,d.size=hv,d.snakeCase=af,d.some=bv,d.sortedIndex=fp,d.sortedIndexBy=Tp,d.sortedIndexOf=hp,d.sortedLastIndex=bp,d.sortedLastIndexBy=Ep,d.sortedLastIndexOf=cp,d.startCase=sf,d.startsWith=lf,d.subtract=Qf,d.sum=eT,d.sumBy=nT,d.template=uf,d.times=Mf,d.toFinite=_n,d.toInteger=L,d.toLength=qu,d.toLower=of,d.toNumber=Qe,d.toSafeInteger=uy,d.toString=Q,d.toUpper=df,d.trim=gf,d.trimEnd=kf,d.trimStart=mf,d.truncate=pf,d.unescape=vf,d.uniqueId=Df,d.upperCase=yf,d.upperFirst=Is,d.each=ku,d.eachRight=mu,d.first=uu,Gs(d,function(){var e={};return on(d,function(n,r){ee.call(d.prototype,r)||(e[r]=n)}),e}(),{chain:!1}),d.VERSION=l,$e(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){d[e].placeholder=d}),$e(["drop","take"],function(e,n){W.prototype[e]=function(r){r=r===t?1:ve(L(r),0);var s=this.__filtered__&&!n?new W(this):this.clone();return s.__filtered__?s.__takeCount__=ce(r,s.__takeCount__):s.__views__.push({size:ce(r,Fe),type:e+(s.__dir__<0?"Right":"")}),s},W.prototype[e+"Right"]=function(r){return this.reverse()[e](r).reverse()}}),$e(["filter","map","takeWhile"],function(e,n){var r=n+1,s=r==ia||r==Tt;W.prototype[e]=function(i){var g=this.clone();return g.__iteratees__.push({iteratee:O(i,3),type:r}),g.__filtered__=g.__filtered__||s,g}}),$e(["head","last"],function(e,n){var r="take"+(n?"Right":"");W.prototype[e]=function(){return this[r](1).value()[0]}}),$e(["initial","tail"],function(e,n){var r="drop"+(n?"":"Right");W.prototype[e]=function(){return this.__filtered__?new W(this):this[r](1)}}),W.prototype.compact=function(){return this.filter(je)},W.prototype.find=function(e){return this.filter(e).head()},W.prototype.findLast=function(e){return this.reverse().find(e)},W.prototype.invokeMap=H(function(e,n){return typeof e=="function"?new W(this):this.map(function(r){return Dr(r,e,n)})}),W.prototype.reject=function(e){return this.filter(Xa(O(e)))},W.prototype.slice=function(e,n){e=L(e);var r=this;return r.__filtered__&&(e>0||n<0)?new W(r):(e<0?r=r.takeRight(-e):e&&(r=r.drop(e)),n!==t&&(n=L(n),r=n<0?r.dropRight(-n):r.take(n-e)),r)},W.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},W.prototype.toArray=function(){return this.take(Fe)},on(W.prototype,function(e,n){var r=/^(?:filter|find|map|reject)|While$/.test(n),s=/^(?:head|last)$/.test(n),i=d[s?"take"+(n=="last"?"Right":""):n],g=s||/^find/.test(n);i&&(d.prototype[n]=function(){var k=this.__wrapped__,v=s?[1]:arguments,f=k instanceof W,A=v[0],R=f||P(k),_=function($){var z=i.apply(d,wn([$],v));return s&&V?z[0]:z};R&&r&&typeof A=="function"&&A.length!=1&&(f=R=!1);var V=this.__chain__,w=!!this.__actions__.length,F=g&&!V,x=f&&!w;if(!g&&R){k=x?k:new W(this);var G=e.apply(k,v);return G.__actions__.push({func:Wa,args:[_],thisArg:t}),new ze(G,V)}return F&&x?e.apply(this,v):(G=this.thru(_),F?s?G.value()[0]:G.value():G)})}),$e(["pop","push","shift","sort","splice","unshift"],function(e){var n=ba[e],r=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",s=/^(?:pop|shift)$/.test(e);d.prototype[e]=function(){var i=arguments;if(s&&!this.__chain__){var g=this.value();return n.apply(P(g)?g:[],i)}return this[r](function(k){return n.apply(P(k)?k:[],i)})}}),on(W.prototype,function(e,n){var r=d[n];if(r){var s=r.name+"";ee.call(ir,s)||(ir[s]=[]),ir[s].push({name:n,func:r})}}),ir[La(t,Re).name]=[{name:"wrapper",func:t}],W.prototype.clone=pk,W.prototype.reverse=vk,W.prototype.value=yk,d.prototype.at=Cp,d.prototype.chain=Yp,d.prototype.commit=$p,d.prototype.next=Wp,d.prototype.plant=Jp,d.prototype.reverse=Zp,d.prototype.toJSON=d.prototype.valueOf=d.prototype.value=Xp,d.prototype.first=d.prototype.head,jr&&(d.prototype[jr]=zp),d},tr=$g();xn?((xn.exports=tr)._=tr,Ft._=tr):be._=tr}).call(zT)}(zr,zr.exports)),zr.exports}var zu=JT();const ZT="NORGE",Ju=a=>a??"",XT=a=>{const{adresselinje1:u,adresselinje2:t,adresselinje3:l,postNummer:o,poststed:m,land:T}=a,h=[u,t,l].filter(N=>!!N).join(", "),c=`${Ju(o)} ${Ju(m)}`,q=(T==null?void 0:T.toUpperCase())!==ZT?T:void 0;return[h,c,q].map(N=>N==null?void 0:N.trim()).filter(N=>!!N).join(", ").trim()},nc=(a,u)=>[...a].sort(ho).find(t=>t.adresseType===u),rc=(a,u)=>a.length!==u.length?!1:a.every(t=>u.some(l=>zu.isEqual(t,l)))&&u.every(t=>a.some(l=>zu.isEqual(l,t))),Hs=ge(ra),QT=a=>{switch(a){case"SØKNAD":return Hs.formatMessage({id:"FaktaKilde.Soknad"});case"FOLKEREGISTER":return Hs.formatMessage({id:"FaktaKilde.FREG"});case"MEDL":return Hs.formatMessage({id:"FaktaKilde.MEDL"});default:return aT(a)}},bo=j.forwardRef((a,u)=>p.jsx(Pn,{gap:"2",style:{display:"flex"},...a,ref:u}));bo.displayName="FaktaGruppe";const eh=({label:a,value:u,kilde:t})=>p.jsx(ot,{background:"bg-subtle",flexBasis:"0%",flexGrow:"1",borderRadius:"medium",paddingBlock:"2",paddingInline:"4","aria-label":typeof a=="string"?a:void 0,children:p.jsxs(Nn,{gap:"6",flexGrow:"1",height:"100%",justify:"space-between",children:[p.jsxs("div",{children:[p.jsx(vt,{size:"small",children:a}),p.jsx(kt,{size:"large",children:u})]}),p.jsx(zs,{uppercase:!0,children:QT(t)})]})});bo.__docgenInfo={description:"",methods:[],displayName:"FaktaGruppe"};eh.__docgenInfo={description:"",methods:[],displayName:"FaktaBox",props:{label:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},value:{required:!0,tsType:{name:"string"},description:""},kilde:{required:!0,tsType:{name:"union",raw:"'SØKNAD' | 'FOLKEREGISTER' | 'MEDL'",elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'FOLKEREGISTER'"},{name:"literal",value:"'MEDL'"}]},description:""}}};const nh="_boks_c3bfh_1",rh="_harBorderLeft_c3bfh_8",ah="_harBorderTop_c3bfh_12",Eo={boks:nh,harBorderLeft:rh,harBorderTop:ah},th=VT.bind(Eo),sh=({harBorderTop:a=!1,harBorderLeft:u=!0,children:t})=>p.jsx("div",{className:th(Eo.boks,{harBorderLeft:u,harBorderTop:a}),children:t});sh.__docgenInfo={description:"",methods:[],displayName:"Boks",props:{harBorderTop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},harBorderLeft:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const co=({adresser:a,erAnnenpart:u=!1,harSammeAdresser:t=!1,adresseKodeverk:l})=>{if(t)return p.jsx(ot,{padding:"4",children:p.jsx(Hu,{textColor:"subtle",children:p.jsx(te,{id:"AdresseTabell.SammeAdresse"})})});const o=m=>m+1===a.length?{border:"0px"}:{};return p.jsxs(p.Fragment,{children:[a.length===0&&p.jsx(ot,{padding:"4",children:p.jsx(Hu,{textColor:"subtle",children:p.jsx(te,{id:"AdresseTabell.IngenAdresse",values:{erAnnenpart:u}})})}),a.length>0&&p.jsxs(ln,{style:{tableLayout:"fixed"},children:[p.jsx(ln.Header,{children:p.jsxs(ln.Row,{children:[p.jsx(ln.HeaderCell,{children:p.jsx(te,{id:"AdresseTabell.PeriodeLabel"})}),p.jsx(ln.HeaderCell,{children:p.jsx(te,{id:"AdresseTabell.AdresseLabel"})}),p.jsx(ln.HeaderCell,{children:p.jsx(te,{id:"AdresseTabell.TypeLabel"})})]})}),p.jsx(ln.Body,{children:a.toSorted(ho).map((m,T)=>{var h;return p.jsxs(ln.Row,{children:[p.jsx(ln.DataCell,{style:o(T),children:p.jsx(pT,{dateStringFom:m.fom,dateStringTom:m.tom})}),p.jsx(ln.DataCell,{style:o(T),children:XT(m)}),p.jsx(ln.DataCell,{style:o(T),children:(h=l.find(c=>c.kode===m.adresseType))==null?void 0:h.navn})]},m.adresseType+m.fom+m.tom)})})]})]})};co.__docgenInfo={description:"",methods:[],displayName:"AdresseTabell",props:{adresser:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]"},description:""},erAnnenpart:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},harSammeAdresser:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},adresseKodeverk:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'AdresseType'>[]"},description:""}}};const lh=ge(ra),ih=a=>{switch(a){case Cu.KVINNE:return xs.female;case Cu.MANN:return xs.male;default:return xs.unknown}},lt=({rolle:a="BRUKER",alleKodeverk:u,harSammeAdresser:t,navn:l,kjønn:o,sivilstand:m,fødselsdato:T,dødsdato:h,adresser:c,showIcon:q=!0})=>{var S;const N=a==="BARN";return p.jsx(Ce,{value:lh,children:p.jsx(ot,{background:"bg-subtle",padding:"4",borderRadius:"large","aria-label":l,children:p.jsxs(Nn,{gap:"1",children:[p.jsxs(Pn,{gap:"5",children:[q&&p.jsx("div",{children:p.jsx(ST,{gender:ih(o),isChild:N})}),p.jsxs("div",{children:[p.jsxs(Pn,{gap:"4",children:[p.jsx(vt,{children:p.jsx(te,{id:"PersonPanel.RolleOgNavn",values:{rolle:a,navn:l}})}),N&&T&&!h&&p.jsx(kt,{children:p.jsx(te,{id:"PersonPanel.Fodt",values:{dato:Du(T)}})}),h&&p.jsx(kt,{children:p.jsx(te,{id:"PersonPanel.Dod",values:{dato:Du(h)}})})]}),!N&&m&&p.jsx(zs,{"aria-label":"Sivilstand",children:(S=u.SivilstandType.find(K=>K.kode===m))==null?void 0:S.navn})]})]}),p.jsxs(zs,{children:[a==="BARN"&&p.jsx(te,{id:"PersonPanel.Beskrivelse.Barn",values:{rolle:a}}),a==="BRUKER"&&p.jsx(te,{id:"PersonPanel.Beskrivelse.Bruker",values:{rolle:a}}),a==="ANNEN_PART"&&p.jsx(te,{id:"PersonPanel.Beskrivelse.Annenpart",values:{rolle:a}})]}),p.jsx(co,{harSammeAdresser:t,adresser:c,adresseKodeverk:u.AdresseType,erAnnenpart:a==="ANNEN_PART"})]})})})};lt.__docgenInfo={description:"",methods:[],displayName:"Personopplysninger",props:{rolle:{required:!1,tsType:{name:"union",raw:"'BARN' | 'BRUKER' | 'ANNEN_PART'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'BRUKER'"},{name:"literal",value:"'ANNEN_PART'"}]},description:"",defaultValue:{value:"'BRUKER'",computed:!1}},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>]: KodeverkMedNavn<
    K extends KodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"VergeType",required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavn<
  K extends KodeverkType ? K : unknown
>[]`}}]}},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType, KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
  lovHjemmel: string;
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}}]}}]}],raw:"GraderingAvslagÅrsakKodeverk[]",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'PeriodeResultatÅrsak'> & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},harSammeAdresser:{required:!1,tsType:{name:"boolean"},description:""},navn:{required:!1,tsType:{name:"string"},description:""},sivilstand:{required:!1,tsType:{name:"SivilstandType"},description:""},dødsdato:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},fødselsdato:{required:!1,tsType:{name:"string"},description:""},adresser:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]"},description:""},kjønn:{required:!1,tsType:{name:"string"},description:""},showIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const uh=({personoversikt:{barn:a,bruker:u,annenPart:t},alleKodeverk:l})=>p.jsxs(Nn,{gap:"2",children:[a.map(o=>p.jsx(lt,{...o,alleKodeverk:l,rolle:"BARN"},o.aktoerId)),p.jsx(lt,{rolle:"BRUKER",alleKodeverk:l,...u}),t&&p.jsx(lt,{...t,rolle:"ANNEN_PART",alleKodeverk:l})]});uh.__docgenInfo={description:"",methods:[],displayName:"PersonopplysningerForFamilie",props:{alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>]: KodeverkMedNavn<
    K extends KodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"VergeType",required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavn<
  K extends KodeverkType ? K : unknown
>[]`}}]}},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType, KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
  lovHjemmel: string;
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}}]}}]}],raw:"GraderingAvslagÅrsakKodeverk[]",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'PeriodeResultatÅrsak'> & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},personoversikt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  bruker: PersonopplysningerBasis;
  annenPart?: PersonopplysningerBasis;
  barn: PersonopplysningerBasis[];
}`,signature:{properties:[{key:"bruker",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: SivilstandType;
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"SivilstandType",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: SivilstandType;
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"annenPart",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: SivilstandType;
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"SivilstandType",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: SivilstandType;
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"barn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: SivilstandType;
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"SivilstandType",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: SivilstandType;
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}],raw:"PersonopplysningerBasis[]",required:!0}}]}}],raw:`Readonly<{
  bruker: PersonopplysningerBasis;
  annenPart?: PersonopplysningerBasis;
  barn: PersonopplysningerBasis[];
}>`},description:""}}};const Ao={"RegistrereVergeInfoPanel.CheckInformation":"Fyll ut og kontroller vergeopplysninger","Verge.KontaktPerson":"Kontaktperson","Verge.Navn":"Navn","Verge.Mandat":"Mandat","Verge.FodselsNummer":"Fødselsnummer","Verge.PeriodeFOM":"Periode f.o.m.","Verge.PeriodeTOM":"Periode t.o.m.","Verge.TypeVerge":"Type verge","Verge.VergeFullmektig":"Verge/fullmektig","Verge.Soker":"Søker","Verge.BrukerErUnderTvungenForvaltning":"Søker er under tvungen forvaltning","Verge.Organisasjonsnummer":"Organisasjonsnummer"},pr=ge(Ao),kn=({readOnly:a,vergetyper:u=[],valgtVergeType:t})=>p.jsxs(Nn,{gap:"4",children:[p.jsx(Xr,{name:"vergeType",label:pr.formatMessage({id:"Verge.TypeVerge"}),validate:[Ie],selectValues:u.map(l=>p.jsx("option",{value:l.kode,children:l.navn},l.kode)),readOnly:a}),t&&p.jsxs(p.Fragment,{children:[p.jsxs(Pn,{gap:"4",children:[p.jsx(Ls,{name:"navn",label:pr.formatMessage({id:"Verge.Navn"}),validate:[Ie,bT],readOnly:a}),t===al.ADVOKAT?p.jsx(Ls,{name:"organisasjonsnummer",label:pr.formatMessage({id:"Verge.Organisasjonsnummer"}),validate:[Ie,ET],readOnly:a}):p.jsx(Ls,{name:"fnr",label:pr.formatMessage({id:"Verge.FodselsNummer"}),validate:[Ie,cT],readOnly:a})]}),p.jsxs(Pn,{gap:"4",children:[p.jsx(xu,{name:"gyldigFom",label:pr.formatMessage({id:"Verge.PeriodeFOM"}),validate:[Ie,Uu],isReadOnly:a}),p.jsx(xu,{name:"gyldigTom",label:pr.formatMessage({id:"Verge.PeriodeTOM"}),validate:[Uu],isReadOnly:a})]})]})]});kn.buildInitialValues=a=>({...a,gyldigTom:(a==null?void 0:a.gyldigTom)??void 0});kn.transformValues=a=>({vergeType:a.vergeType,navn:a.navn,gyldigFom:a.gyldigFom,gyldigTom:a.gyldigTom,...a.vergeType===al.ADVOKAT?{organisasjonsnummer:un(a.organisasjonsnummer)}:{fnr:un(a.fnr)}});kn.__docgenInfo={description:`RegistrereVergeFaktaForm

Formkomponent. Registrering og oppdatering av verge.`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"verge",optional:!1,type:{name:"intersection",raw:`{
  navn: string;
  gyldigFom: string;
  gyldigTom: string | null;
  vergeType: VergeType;
} & OneOf<{ fnr: string }, { organisasjonsnummer: string }>`,elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  gyldigFom: string;
  gyldigTom: string | null;
  vergeType: VergeType;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"gyldigFom",value:{name:"string",required:!0}},{key:"gyldigTom",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vergeType",value:{name:"VergeType",required:!0}}]}},{name:"union",raw:"(T & { [K in keyof U]?: never }) | (U & { [K in keyof T]?: never })",elements:[{name:"unknown"},{name:"unknown"}]}],alias:"Verge"}}],returns:{type:{name:"signature",type:"object",raw:`{
  navn: string;
  gyldigFom: string;
  gyldigTom?: string;
  fnr?: string;
  organisasjonsnummer?: string;
  vergeType: VergeType;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"gyldigFom",value:{name:"string",required:!0}},{key:"gyldigTom",value:{name:"string",required:!1}},{key:"fnr",value:{name:"string",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}},{key:"vergeType",value:{name:"VergeType",required:!0}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
  navn: string;
  gyldigFom: string;
  gyldigTom?: string;
  fnr?: string;
  organisasjonsnummer?: string;
  vergeType: VergeType;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"gyldigFom",value:{name:"string",required:!0}},{key:"gyldigTom",value:{name:"string",required:!1}},{key:"fnr",value:{name:"string",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}},{key:"vergeType",value:{name:"VergeType",required:!0}}]},alias:"VergeFormValues"}}],returns:{type:{name:"intersection",raw:`{
  navn: string;
  gyldigFom: string;
  gyldigTom?: string;
  vergeType: VergeType;
} & OneOf<{ fnr: string }, { organisasjonsnummer: string }>`,elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  gyldigFom: string;
  gyldigTom?: string;
  vergeType: VergeType;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"gyldigFom",value:{name:"string",required:!0}},{key:"gyldigTom",value:{name:"string",required:!1}},{key:"vergeType",value:{name:"VergeType",required:!0}}]}},{name:"union",raw:"(T & { [K in keyof U]?: never }) | (U & { [K in keyof T]?: never })",elements:[{name:"unknown"},{name:"unknown"}]}]}}}],displayName:"RegistrereVergeForm",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},vergetyper:{required:!1,tsType:{name:"union",raw:"KodeverkMedNavn<'VergeType'>[] | KodeverkMedNavnTilbakekreving<'VergeType'>[]",elements:[{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'VergeType'>[]"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<'VergeType'>[]"}]},description:"",defaultValue:{value:"[]",computed:!1}},valgtVergeType:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""}}};const oh=(a,u)=>a?{...Ar.initialValues(u),...kn.buildInitialValues(a)}:void 0,dh=a=>({kode:yo.AVKLAR_VERGE,...kn.transformValues(a),...Ar.transformValues(a)}),Ro=({submittable:a,verge:u,alleKodeverk:t})=>{const l=br(),{aksjonspunkterForPanel:o,submitCallback:m,alleMerknaderFraBeslutter:T,harÅpneAksjonspunkter:h,isReadOnly:c}=tT(),{mellomlagretFormData:q,setMellomlagretFormData:N}=sT(),S=Er({defaultValues:q??oh(u,o),shouldUnregister:!0}),K=S.watch("vergeType"),D=S.watch("begrunnelse"),U=t.VergeType.sort((re,C)=>re.navn.localeCompare(C.navn));return p.jsxs(p.Fragment,{children:[h&&p.jsx(vT,{children:l.formatMessage({id:"RegistrereVergeInfoPanel.CheckInformation"})}),p.jsx(cr,{formMethods:S,onSubmit:re=>m(dh(re)),setDataOnUnmount:N,children:p.jsxs(Nn,{gap:"6",children:[p.jsx(yT,{merknaderFraBeslutter:T[yo.AVKLAR_VERGE],children:p.jsx(kn,{readOnly:c||o.length===0,vergetyper:U,valgtVergeType:K})}),o.length!==0&&p.jsxs(p.Fragment,{children:[p.jsx(Ar,{isSubmittable:a,isReadOnly:c,hasBegrunnelse:!!D}),p.jsx(To,{isSubmittable:a&&!!K,isReadOnly:c,isSubmitting:S.formState.isSubmitting,isDirty:S.formState.isDirty})]})]})})]})};Ro.__docgenInfo={description:`RegistrereVergeInfoPanel

Presentasjonskomponent. Har ansvar for å sette opp formen for att registrere verge.`,methods:[],displayName:"RegistrereVergeInfoPanel",props:{alleKodeverk:{required:!0,tsType:{name:"union",raw:"AlleKodeverk | AlleKodeverkTilbakekreving",elements:[{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>]: KodeverkMedNavn<
    K extends KodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"VergeType",required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]},required:!0},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavn<
  K extends KodeverkType ? K : unknown
>[]`}}]}},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType, KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
  lovHjemmel: string;
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}}]}}]}],raw:"GraderingAvslagÅrsakKodeverk[]",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'PeriodeResultatÅrsak'> & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},{name:"signature",type:"object",raw:`{
  [K in TilbakekrevingKodeverkType]: KodeverkMedNavnTilbakekreving<
    K extends TilbakekrevingKodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"VergeType",required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]},required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavnTilbakekreving<
  K extends TilbakekrevingKodeverkType ? K : unknown
>[]`}}]}}]},description:""},verge:{required:!0,tsType:{name:"union",raw:"Verge | undefined",elements:[{name:"intersection",raw:`{
  navn: string;
  gyldigFom: string;
  gyldigTom: string | null;
  vergeType: VergeType;
} & OneOf<{ fnr: string }, { organisasjonsnummer: string }>`,elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  gyldigFom: string;
  gyldigTom: string | null;
  vergeType: VergeType;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"gyldigFom",value:{name:"string",required:!0}},{key:"gyldigTom",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vergeType",value:{name:"VergeType",required:!0}}]}},{name:"union",raw:"(T & { [K in keyof U]?: never }) | (U & { [K in keyof T]?: never })",elements:[{name:"unknown"},{name:"unknown"}]}]},{name:"undefined"}]},description:""},submittable:{required:!0,tsType:{name:"boolean"},description:""}}};const gh=ge(Ao),kh=({verge:a,alleKodeverk:u,submittable:t})=>p.jsx(Ce,{value:gh,children:p.jsx(Ro,{verge:a,alleKodeverk:u,submittable:t})});kh.__docgenInfo={description:"",methods:[],displayName:"VergeFaktaIndex",props:{verge:{required:!0,tsType:{name:"union",raw:"Verge | undefined",elements:[{name:"intersection",raw:`{
  navn: string;
  gyldigFom: string;
  gyldigTom: string | null;
  vergeType: VergeType;
} & OneOf<{ fnr: string }, { organisasjonsnummer: string }>`,elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  gyldigFom: string;
  gyldigTom: string | null;
  vergeType: VergeType;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"gyldigFom",value:{name:"string",required:!0}},{key:"gyldigTom",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vergeType",value:{name:"VergeType",required:!0}}]}},{name:"union",raw:"(T & { [K in keyof U]?: never }) | (U & { [K in keyof T]?: never })",elements:[{name:"unknown"},{name:"unknown"}]}]},{name:"undefined"}]},description:""},alleKodeverk:{required:!0,tsType:{name:"union",raw:"AlleKodeverk | AlleKodeverkTilbakekreving",elements:[{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>]: KodeverkMedNavn<
    K extends KodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"VergeType",required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]},required:!0},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavn<
  K extends KodeverkType ? K : unknown
>[]`}}]}},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType, KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
  lovHjemmel: string;
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}}]}}]}],raw:"GraderingAvslagÅrsakKodeverk[]",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'PeriodeResultatÅrsak'> & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},{name:"signature",type:"object",raw:`{
  [K in TilbakekrevingKodeverkType]: KodeverkMedNavnTilbakekreving<
    K extends TilbakekrevingKodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"VergeType",required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]},required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavnTilbakekreving<
  K extends TilbakekrevingKodeverkType ? K : unknown
>[]`}}]}}]},description:""},submittable:{required:!0,tsType:{name:"boolean"},description:""}}};const fr=ge(yt),mh=a=>fr.formatMessage({id:a?"MenyVergeIndex.OpprettVerge":"MenyVergeIndex.FjernVerge"}),_o=({verge:a,type:u,fjernVerge:t,opprettVerge:l,lukkModal:o,alleKodeverk:m})=>{const T=u==="FJERN",h=Er({defaultValues:kn.buildInitialValues(a)}),c=N=>{T?t():l(kn.transformValues(N)),o()},q=h.watch("vergeType");return j.useEffect(()=>{a&&h.reset(kn.buildInitialValues(a))},[a]),p.jsx(Ce,{value:fr,children:p.jsx(cr,{formMethods:h,onSubmit:c,children:p.jsxs(de,{open:!0,width:"small",onClose:o,"aria-label":fr.formatMessage({id:T?"MenyVergeIndex.FjernVergeSporsmal":"MenyVergeIndex.OpprettVergeSporsmal"}),children:[p.jsx(de.Header,{closeButton:!0,children:p.jsx(ea,{size:"medium",children:fr.formatMessage({id:T?"MenyVergeIndex.FjernVergeSporsmal":"MenyVergeIndex.OpprettVergeSporsmal"})})}),p.jsx(de.Body,{children:p.jsx(kn,{readOnly:T,vergetyper:m.VergeType,valgtVergeType:q})}),p.jsxs(de.Footer,{children:[p.jsx(He,{variant:"primary",size:"small",autoFocus:!0,type:"submit",children:fr.formatMessage({id:T?"MenyVergeIndex.Fjern":"MenyVergeIndex.Opprett"})}),p.jsx(He,{variant:"secondary",size:"small",onClick:o,type:"button",children:fr.formatMessage({id:"MenyVergeIndex.Avbryt"})})]})]})})})};_o.__docgenInfo={description:"",methods:[],displayName:"MenyVergeIndex",props:{verge:{required:!0,tsType:{name:"union",raw:"Verge | undefined",elements:[{name:"intersection",raw:`{
  navn: string;
  gyldigFom: string;
  gyldigTom: string | null;
  vergeType: VergeType;
} & OneOf<{ fnr: string }, { organisasjonsnummer: string }>`,elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  gyldigFom: string;
  gyldigTom: string | null;
  vergeType: VergeType;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"gyldigFom",value:{name:"string",required:!0}},{key:"gyldigTom",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vergeType",value:{name:"VergeType",required:!0}}]}},{name:"union",raw:"(T & { [K in keyof U]?: never }) | (U & { [K in keyof T]?: never })",elements:[{name:"unknown"},{name:"unknown"}]}]},{name:"undefined"}]},description:""},alleKodeverk:{required:!0,tsType:{name:"union",raw:"AlleKodeverk | AlleKodeverkTilbakekreving",elements:[{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>]: KodeverkMedNavn<
    K extends KodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"VergeType",required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]},required:!0},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavn<
  K extends KodeverkType ? K : unknown
>[]`}}]}},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType, KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
  lovHjemmel: string;
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}}]}}]}],raw:"GraderingAvslagÅrsakKodeverk[]",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'PeriodeResultatÅrsak'> & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},{name:"signature",type:"object",raw:`{
  [K in TilbakekrevingKodeverkType]: KodeverkMedNavnTilbakekreving<
    K extends TilbakekrevingKodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"VergeType",required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]},required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavnTilbakekreving<
  K extends TilbakekrevingKodeverkType ? K : unknown
>[]`}}]}}]},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},type:{required:!0,tsType:{name:"union",raw:"'OPPRETT' | 'FJERN'",elements:[{name:"literal",value:"'OPPRETT'"},{name:"literal",value:"'FJERN'"}]},description:""},fjernVerge:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},opprettVerge:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: OpprettVergeParams) => void",signature:{arguments:[{type:{name:"intersection",raw:`{
  navn: string;
  gyldigFom: string;
  gyldigTom?: string;
  vergeType: VergeType;
} & OneOf<{ fnr: string }, { organisasjonsnummer: string }>`,elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  gyldigFom: string;
  gyldigTom?: string;
  vergeType: VergeType;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"gyldigFom",value:{name:"string",required:!0}},{key:"gyldigTom",value:{name:"string",required:!1}},{key:"vergeType",value:{name:"VergeType",required:!0}}]}},{name:"union",raw:"(T & { [K in keyof U]?: never }) | (U & { [K in keyof T]?: never })",elements:[{name:"unknown"},{name:"unknown"}]}]},name:"values"}],return:{name:"void"}}},description:""}}};const Js=ge(yt),ph=()=>Js.formatMessage({id:"MenyTaAvVentIndex.ResumeBehandling"}),qo=({taBehandlingAvVent:a,lukkModal:u})=>p.jsx(Ce,{value:Js,children:p.jsx(vo,{text:Js.formatMessage({id:"MenyTaAvVentIndex.TaAvVent"}),showModal:!0,submit:()=>{a(),u()},cancel:u})});qo.__docgenInfo={description:"",methods:[],displayName:"MenyTaAvVentIndex",props:{taBehandlingAvVent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const vh="_modal_tyvxs_1",yh="_selectWidth_tyvxs_6",Cs={modal:vh,selectWidth:yh},fh=rl(400),No=({handleSubmit:a,lukkModal:u,behandlendeEnheter:t,gjeldendeBehandlendeEnhetId:l,gjeldendeBehandlendeEnhetNavn:o})=>{const m=t.map((S,K)=>p.jsx("option",{value:`${K}`,children:`${S.enhetId} ${S.enhetNavn}`},S.enhetId)),T=[p.jsx("option",{disabled:!0,children:`${l} ${o}`},l)].concat(m),h=br(),c=Er(),q=c.watch("nyEnhet"),N=c.watch("begrunnelse");return p.jsx(cr,{formMethods:c,onSubmit:a,children:p.jsxs(de,{className:Cs.modal,open:!0,"aria-label":h.formatMessage({id:"EndreBehandlendeEnhetModal.ModalDescription"}),onClose:u,children:[p.jsx(de.Header,{children:p.jsx(ea,{size:"small",children:p.jsx(te,{id:"EndreBehandlendeEnhetModal.EndreEnhet"})})}),p.jsx(de.Body,{children:p.jsxs(Nn,{gap:"4",children:[p.jsx(Xr,{name:"nyEnhet",control:c.control,label:h.formatMessage({id:"EndreBehandlendeEnhetModal.NyEnhetField"}),validate:[Ie],selectValues:T,className:Cs.selectWidth}),p.jsx(dt,{name:"begrunnelse",control:c.control,label:h.formatMessage({id:"EndreBehandlendeEnhetModal.BegrunnelseField"}),validate:[Ie,fh,gt],maxLength:400})]})}),p.jsxs(de.Footer,{children:[p.jsx(He,{size:"small",variant:"primary",className:Cs.button,disabled:!(q&&N),children:h.formatMessage({id:"EndreBehandlendeEnhetModal.Ok"})}),p.jsx(He,{size:"small",variant:"secondary",onClick:u,type:"button",children:h.formatMessage({id:"EndreBehandlendeEnhetModal.Avbryt"})})]})]})})};No.__docgenInfo={description:`EndreBehandlendeEnhetModal

Denne modalen vises når saksbehandler valger 'Bytt behandlende enhet'.
Ved å angi ny enhet og begrunnelse og trykke på 'OK' blir behandlende enhet endret.`,methods:[],displayName:"EndreBehandlendeEnhetModal",props:{lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},behandlendeEnheter:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  enhetId: string;
  enhetNavn: string;
}`,signature:{properties:[{key:"enhetId",value:{name:"string",required:!0}},{key:"enhetNavn",value:{name:"string",required:!0}}]}}],raw:`{
  enhetId: string;
  enhetNavn: string;
}[]`},description:""},gjeldendeBehandlendeEnhetId:{required:!0,tsType:{name:"string"},description:""},gjeldendeBehandlendeEnhetNavn:{required:!0,tsType:{name:"string"},description:""},handleSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(formValues: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  nyEnhet: string;
  begrunnelse: string;
}`,signature:{properties:[{key:"nyEnhet",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}}]}},name:"formValues"}],return:{name:"void"}}},description:""}}};const Vo=ge(yt),Th=()=>Vo.formatMessage({id:"MenyEndreBehandlendeEnhetIndex.ByttBehandlendeEnhet"}),So=({behandlendeEnhetId:a,behandlendeEnhetNavn:u,nyBehandlendeEnhet:t,behandlendeEnheter:l,lukkModal:o})=>{const m=l.filter(h=>h.enhetId!==a),T=h=>{const c=m[parseInt(h.nyEnhet,10)],q={enhetNavn:c.enhetNavn,enhetId:c.enhetId,begrunnelse:h.begrunnelse};t(q),o()};return p.jsx(Ce,{value:Vo,children:p.jsx(No,{lukkModal:o,behandlendeEnheter:m,gjeldendeBehandlendeEnhetId:a,gjeldendeBehandlendeEnhetNavn:u,handleSubmit:T})})};So.__docgenInfo={description:"",methods:[],displayName:"MenyEndreBehandlendeEnhetIndex",props:{behandlendeEnhetId:{required:!0,tsType:{name:"string"},description:""},behandlendeEnhetNavn:{required:!0,tsType:{name:"string"},description:""},nyBehandlendeEnhet:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { enhetNavn: string; enhetId: string; begrunnelse: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ enhetNavn: string; enhetId: string; begrunnelse: string }",signature:{properties:[{key:"enhetNavn",value:{name:"string",required:!0}},{key:"enhetId",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},behandlendeEnheter:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  enhetId: string;
  enhetNavn: string;
}`,signature:{properties:[{key:"enhetId",value:{name:"string",required:!0}},{key:"enhetNavn",value:{name:"string",required:!0}}]}}],raw:`{
  enhetId: string;
  enhetNavn: string;
}[]`},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const hh={"MenyApneForEndringerIndex.ReopenBehandling":"Åpne behandling for endringer","MenyApneForEndringerIndex.OpenBehandling":"Åpne behandling for endringer?"},Zs=ge(hh),bh=()=>Zs.formatMessage({id:"MenyApneForEndringerIndex.ReopenBehandling"}),Bo=({apneBehandlingForEndringer:a,lukkModal:u})=>{const t=()=>{a(),u()};return p.jsx(Ce,{value:Zs,children:p.jsx(vo,{text:Zs.formatMessage({id:"MenyApneForEndringerIndex.OpenBehandling"}),showModal:!0,submit:t,cancel:u})})};Bo.__docgenInfo={description:"",methods:[],displayName:"MenyApneForEndringerIndex",props:{apneBehandlingForEndringer:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Eh="_modal_mgzc2_1",ch={modal:Eh},wo=({submitCallback:a,cancelEvent:u,saksnummer:t,fagsakMarkeringer:l,fagsakMarkeringerKodeverk:o})=>{const m=br(),T=Er({defaultValues:{saksnummer:t,fagsakMarkeringer:l?l.map(h=>h.fagsakMarkering):[]}});return p.jsx(cr,{formMethods:T,onSubmit:a,children:p.jsxs(de,{className:ch.modal,open:!0,"aria-label":m.formatMessage({id:"MenyEndreUtlandIndex.UtlandTittel"}),onClose:u,children:[p.jsx(de.Header,{children:p.jsx(ea,{size:"small",children:p.jsx(te,{id:"MenyEndreUtlandIndex.UtlandTittel"})})}),p.jsx(de.Body,{children:p.jsx(AT,{name:"fagsakMarkeringer",hideLegend:!0,checkboxes:o.map(h=>({label:h.navn,value:h.kode}))})}),p.jsxs(de.Footer,{children:[p.jsx(He,{size:"small",variant:"primary",children:p.jsx(te,{id:"MenyEndreUtlandIndex.Ok"})}),p.jsx(He,{size:"small",variant:"secondary",onClick:u,type:"button",children:p.jsx(te,{id:"MenyEndreUtlandIndex.Avbryt"})})]})]})})};wo.__docgenInfo={description:`EndreUtlandModal

Denne modalen vises etter at en saksbehandler har valgt opprett ny 1.gangsbehandling i behandlingsmenyen.
Ved å trykke på ok skal ny behandling(1.gangsbehandling) av sak opprettes.`,methods:[],displayName:"EndreUtlandModal",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},fagsakMarkeringer:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fagsakMarkering: FagsakMarkeringKode;
  kortNavn?: string;
}`,signature:{properties:[{key:"fagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"kortNavn",value:{name:"string",required:!1}}]}}],raw:"Saksmarkering[]"},description:""},cancelEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(formData: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  saksnummer: string;
  fagsakMarkeringer: string[];
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"fagsakMarkeringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},name:"formData"}],return:{name:"void"}}},description:""},fagsakMarkeringerKodeverk:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'FagsakMarkering'>[]"},description:""}}};const Ah={"MenyEndreUtlandIndex.MenyTittel":"Endre saksmerking","MenyEndreUtlandIndex.UtlandTittel":"Saksmarkering","MenyEndreUtlandIndex.Ok":"OK","MenyEndreUtlandIndex.Avbryt":"Avbryt"},Ko=ge(Ah),Rh=()=>Ko.formatMessage({id:"MenyEndreUtlandIndex.MenyTittel"}),jo=({endreFagsakMarkering:a,lukkModal:u,...t})=>{const l=o=>{a(o),u()};return p.jsx(Ce,{value:Ko,children:p.jsx(wo,{cancelEvent:u,submitCallback:l,...t})})};jo.__docgenInfo={description:"",methods:[],displayName:"MenyEndreUtlandIndex",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},fagsakMarkeringer:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fagsakMarkering: FagsakMarkeringKode;
  kortNavn?: string;
}`,signature:{properties:[{key:"fagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"kortNavn",value:{name:"string",required:!1}}]}}],raw:"Saksmarkering[]"},description:""},endreFagsakMarkering:{required:!0,tsType:{name:"signature",type:"function",raw:"(formData: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  saksnummer: string;
  fagsakMarkeringer: string[];
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"fagsakMarkeringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},name:"formData"}],return:{name:"void"}}},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},fagsakMarkeringerKodeverk:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'FagsakMarkering'>[]"},description:""}}};const _h="_image_yu5bn_1",qh="_modal_yu5bn_8",Zu={image:_h,modal:qh},Io=({showModal:a,closeEvent:u})=>{const t=br();return p.jsx(de,{className:Zu.modal,open:a,"aria-label":t.formatMessage({id:"HenlagtBehandlingModal.ModalDescription"}),onClose:u,children:p.jsx(de.Body,{children:p.jsxs(Pn,{justify:"space-between",children:[p.jsxs(Pn,{gap:"3",children:[p.jsx(BT,{className:Zu.image,title:t.formatMessage({id:"HenlagtBehandlingModal.Henlagt"})}),p.jsxs(Nn,{gap:"1",children:[p.jsx(vt,{size:"small",children:p.jsx(te,{id:"HenlagtBehandlingModal.BehandlingenErHenlagt"})}),p.jsx(kt,{size:"small",children:p.jsx(te,{id:"HenlagtBehandlingModal.RutetTilForsiden"})})]})]}),p.jsx(He,{variant:"primary",size:"small",onClick:u,autoFocus:!0,type:"button",children:p.jsx(te,{id:"HenlagtBehandlingModal.Ok"})})]})})})};Io.__docgenInfo={description:`HenlagtBehandlingModal

Denne modalen vises etter en vilkarsvurdering der behandlingsstatusen
er satt til Iverksetter vedtak. Ved å trykke på knapp blir saksbehandler tatt tilbake til sokesiden.`,methods:[],displayName:"HenlagtBehandlingModal",props:{showModal:{required:!0,tsType:{name:"boolean"},description:""},closeEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Nh="_modal_osiwa_1",Vh="_button_osiwa_5",Sh="_selectWidth_osiwa_9",at={modal:Nh,button:Vh,selectWidth:Sh},Bh=rl(1500),Xu=(a,u,t)=>l=>{a({behandlingUuid:u,dokumentMal:wT.INFO_OM_HENLEGGELSE,fritekst:t}),l.preventDefault()},Oo=(a,u)=>J.TILBAKEKREVING_REVURDERING===a&&ye.HENLAGT_FEILOPPRETTET_MED_BREV===u,wh=(a,u,t,l)=>Oo(a,u)?!(u&&t&&l):!(u&&t),Kh=(a,u,t)=>a===J.TILBAKEKREVING?ye.HENLAGT_FEILOPPRETTET===u:a===J.TILBAKEKREVING_REVURDERING?ye.HENLAGT_FEILOPPRETTET_MED_BREV===u&&!!t:[ye.HENLAGT_SOKNAD_TRUKKET,ye.HENLAGT_KLAGE_TRUKKET,ye.HENLAGT_INNSYN_TRUKKET].some(l=>l===u),jh={[J.KLAGE]:[ye.HENLAGT_KLAGE_TRUKKET,ye.HENLAGT_FEILOPPRETTET],[J.ANKE]:[ye.HENLAGT_ANKE_TRUKKET,ye.HENLAGT_FEILOPPRETTET],[J.DOKUMENTINNSYN]:[ye.HENLAGT_INNSYN_TRUKKET,ye.HENLAGT_FEILOPPRETTET],[J.TILBAKEKREVING]:[st.HENLAGT_FEILOPPRETTET],[J.TILBAKEKREVING_REVURDERING]:[st.HENLAGT_FEILOPPRETTET_MED_BREV,st.HENLAGT_FEILOPPRETTET_UTEN_BREV],[J.REVURDERING]:[ye.HENLAGT_SOKNAD_TRUKKET,ye.HENLAGT_FEILOPPRETTET,ye.HENLAGT_SOKNAD_MANGLER],[J.FORSTEGANGSSOKNAD]:[ye.HENLAGT_SOKNAD_TRUKKET,ye.HENLAGT_FEILOPPRETTET,ye.HENLAGT_SOKNAD_MANGLER]},Ih=(a,u,t)=>jh[u].filter(o=>t!==ut.ENGANGSSTONAD||t===ut.ENGANGSSTONAD&&o!==ye.HENLAGT_SOKNAD_MANGLER).flatMap(o=>{const m=a.find(T=>T.kode===o);return m?[m]:[]}),Fo=({handleSubmit:a,cancelEvent:u,forhandsvisHenleggBehandling:t,behandlingUuid:l,ytelseType:o,behandlingType:m,behandlingResultatTyper:T})=>{const h=br(),c=Er(),q=c.watch("årsakKode"),N=c.watch("begrunnelse"),S=c.watch("fritekst"),K=Kh(m,q,S),D=Ih(T,m,o);return p.jsx(cr,{formMethods:c,onSubmit:a,children:p.jsxs(de,{className:at.modal,open:!0,"aria-label":h.formatMessage({id:"HenleggBehandlingModal.ModalDescription"}),onClose:u,children:[p.jsx(de.Header,{children:p.jsx(ea,{size:"small",children:p.jsx(te,{id:"HenleggBehandlingModal.HenleggBehandling"})})}),p.jsx(de.Body,{children:p.jsxs(Nn,{gap:"4",children:[p.jsx(Xr,{name:"årsakKode",control:c.control,className:at.selectWidth,label:h.formatMessage({id:"HenleggBehandlingModal.ArsakField"}),validate:[Ie],selectValues:D.map(U=>p.jsx("option",{value:U.kode,children:h.formatMessage({id:U.kode})},U.kode))}),p.jsx(dt,{name:"begrunnelse",control:c.control,label:h.formatMessage({id:"HenleggBehandlingModal.BegrunnelseField"}),validate:[Ie,Bh,gt],maxLength:1500}),Oo(m,q)&&p.jsx("div",{className:at.fritekstTilBrevTextArea,children:p.jsx(dt,{name:"fritekst",control:c.control,label:h.formatMessage({id:"HenleggBehandlingModal.Fritekst"}),validate:[Ie,gt],maxLength:2e3,parse:lT})}),K&&p.jsxs(Pn,{justify:"space-between",children:[p.jsx(vt,{size:"small",children:h.formatMessage({id:"HenleggBehandlingModal.SokerInformeres"})}),p.jsx(KT,{href:"#",onClick:Xu(t,l,S),onKeyDown:Xu(t,l,S),children:p.jsx(te,{id:"HenleggBehandlingModal.ForhandsvisBrev"})})]})]})}),p.jsxs(de.Footer,{children:[p.jsx(He,{variant:"primary",size:"small",className:at.button,disabled:wh(m,q,N,S),children:p.jsx(te,{id:"HenleggBehandlingModal.HenleggBehandlingSubmit"})}),p.jsx(He,{variant:"secondary",size:"small",onClick:u,type:"button",children:p.jsx(te,{id:"HenleggBehandlingModal.Avbryt"})})]})]})})};Fo.__docgenInfo={description:`HenleggBehandlingModal

Presentasjonskomponent. Denne modalen vises når saksbehandler valger 'Henlegg behandling og avslutt'.
Ved å angi årsak og begrunnelse og trykke på 'Henlegg behandling' blir behandlingen henlagt og avsluttet.`,methods:[],displayName:"HenleggBehandlingModal",props:{handleSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  årsakKode?: string;
  begrunnelse?: string;
  fritekst?: string;
}`,signature:{properties:[{key:"årsakKode",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"fritekst",value:{name:"string",required:!1}}]}},name:"values"}],return:{name:"void"}}},description:""},cancelEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},forhandsvisHenleggBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ForhåndsvisHenleggParams) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  dokumentMal: string;
  fritekst?: string;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"dokumentMal",value:{name:"string",required:!0}},{key:"fritekst",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""},behandlingUuid:{required:!0,tsType:{name:"string"},description:""},ytelseType:{required:!0,tsType:{name:"FagsakYtelseType"},description:""},behandlingResultatTyper:{required:!0,tsType:{name:"union",raw:`| KodeverkMedNavn<'BehandlingResultatType'>[]
| KodeverkMedNavnTilbakekreving<'BehandlingResultatType'>[]`,elements:[{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'BehandlingResultatType'>[]"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<'BehandlingResultatType'>[]"}]},description:""},behandlingType:{required:!0,tsType:{name:"BehandlingType"},description:""}}};const Oh="Behandlingen er feilaktig opprettet",Fh="Feilaktig opprettet - med henleggelsesbrev",Gh="Feilaktig opprettet - uten henleggelsesbrev",Mh="Klagen er trukket",Ph="Innsynskrav er trukket",Dh={"MenyHenleggIndex.HenleggBehandling":"Henlegg behandlingen og avslutt","HenleggBehandlingModal.ModalDescription":"Behandlingen henlegges","HenleggBehandlingModal.HenleggBehandling":"Henlegg behandling","HenleggBehandlingModal.ArsakField":"Velg årsak","HenleggBehandlingModal.BegrunnelseField":"Begrunnelse","HenleggBehandlingModal.Fritekst":"Fritekst til brev","HenleggBehandlingModal.HenleggBehandlingSubmit":"Henlegg behandling","HenleggBehandlingModal.Avbryt":"Avbryt","HenleggBehandlingModal.SokerInformeres":"Informer søker","HenleggBehandlingModal.ForhandsvisBrev":"Forhåndsvis brev","HenlagtBehandlingModal.ModalDescription":"Behandlingen er henlagt","HenlagtBehandlingModal.Henlagt":"Henlagt","HenlagtBehandlingModal.BehandlingenErHenlagt":"Behandlingen er henlagt","HenlagtBehandlingModal.RutetTilForsiden":"Du kommer nå til forsiden","HenlagtBehandlingModal.Ok":"OK",HENLAGT_SØKNAD_TRUKKET:"Søknaden er trukket",HENLAGT_FEILOPPRETTET:Oh,HENLAGT_FEILOPPRETTET_MED_BREV:Fh,HENLAGT_FEILOPPRETTET_UTEN_BREV:Gh,HENLAGT_KLAGE_TRUKKET:Mh,HENLAGT_INNSYN_TRUKKET:Ph,HENLAGT_SØKNAD_MANGLER:"Søknad mangler"},Go=ge(Dh),Lh=()=>Go.formatMessage({id:"MenyHenleggIndex.HenleggBehandling"}),Mo=({valgtBehandling:a,henleggBehandling:u,forhandsvisHenleggBehandling:t,ytelseType:l,behandlingResultatTyper:o,gaaTilSokeside:m,lukkModal:T})=>{const[h,c]=j.useState(!1),q=N=>{const S={årsakKode:N.årsakKode??"",begrunnelse:N.begrunnelse??"",fritekst:N.fritekst};u(S).then(()=>{c(!0)})};return p.jsxs(Ce,{value:Go,children:[!h&&p.jsx(Fo,{handleSubmit:q,cancelEvent:T,forhandsvisHenleggBehandling:t,ytelseType:l,behandlingType:a.type,behandlingUuid:a.uuid,behandlingResultatTyper:o}),h&&p.jsx(Io,{showModal:!0,closeEvent:m})]})};Mo.__docgenInfo={description:"",methods:[],displayName:"MenyHenleggIndex",props:{valgtBehandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"BehandlingStatus",required:!0}},{key:"type",value:{name:"BehandlingType",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:"BehandlingResultatType | BehandlingResultatTypeTilbakekreving",elements:[{name:"BehandlingResultatType"},{name:"BehandlingResultatTypeTilbakekreving"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"Avslagsarsak | null",elements:[{name:"Avslagsarsak"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"KonsekvensForYtelsen"}],raw:"KonsekvensForYtelsen[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"AksjonspunktKode",required:!0}},{key:"status",value:{name:"AksjonspunktStatus",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"VilkarType",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"VurderÅrsak[] | null",elements:[{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"AksjonspunktType",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"union",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]}},{name:"null"}],required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"VilkarType",required:!0}},{key:"vilkarStatus",value:{name:"VilkarUtfallType",required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},henleggBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { årsakKode: string; begrunnelse: string; fritekst?: string }) => Promise<void>",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ årsakKode: string; begrunnelse: string; fritekst?: string }",signature:{properties:[{key:"årsakKode",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"fritekst",value:{name:"string",required:!1}}]}},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},forhandsvisHenleggBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ForhåndsvisHenleggParams) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  dokumentMal: string;
  fritekst?: string;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"dokumentMal",value:{name:"string",required:!0}},{key:"fritekst",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""},ytelseType:{required:!0,tsType:{name:"FagsakYtelseType"},description:""},behandlingResultatTyper:{required:!0,tsType:{name:"union",raw:`| KodeverkMedNavn<'BehandlingResultatType'>[]
| KodeverkMedNavnTilbakekreving<'BehandlingResultatType'>[]`,elements:[{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'BehandlingResultatType'>[]"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<'BehandlingResultatType'>[]"}]},description:""},gaaTilSokeside:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};function Po(a){return u=>{a.forEach(t=>{typeof t=="function"?t(u):t!=null&&(t.current=u)})}}function xh(...a){return I.useCallback(Po(a),a)}function Uh(a,u){const t=Object.assign({},u);for(const l in u){const o=a[l],m=u[l];/^on[A-Z]/.test(l)?o&&m?t[l]=(...h)=>{m(...h),o(...h)}:o&&(t[l]=o):l==="style"?t[l]=Object.assign(Object.assign({},o),m):l==="className"&&(t[l]=[o,m].filter(Boolean).join(" "))}return Object.assign(Object.assign({},a),t)}var Hh=function(a,u){var t={};for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&u.indexOf(l)<0&&(t[l]=a[l]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,l=Object.getOwnPropertySymbols(a);o<l.length;o++)u.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(a,l[o])&&(t[l[o]]=a[l[o]]);return t};const Do=j.forwardRef((a,u)=>{var t;const{children:l}=a,o=Hh(a,["children"]);if(j.isValidElement(l)){const m=Object.prototype.propertyIsEnumerable.call(l.props,"ref")?l.props.ref:l.ref;return j.cloneElement(l,Object.assign(Object.assign({},Uh(o,l.props)),{ref:u?Po([u,m]):m}))}if(j.Children.count(l)>1){const m=new Error("Aksel: Components using 'asChild' expects to recieve a single React element child.");throw m.name="SlotError",(t=Error.captureStackTrace)===null||t===void 0||t.call(Error,m,Do),m}return null});var Ch=function(a,u){var t={};for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&u.indexOf(l)<0&&(t[l]=a[l]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,l=Object.getOwnPropertySymbols(a);o<l.length;o++)u.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(a,l[o])&&(t[l[o]]=a[l[o]]);return t};function Yh(a,u){return`${a} returned \`undefined\`. Seems you forgot to wrap component within ${u}`}function aa(a={}){const{name:u,hookName:t="useContext",providerName:l="Provider",errorMessage:o,defaultValue:m}=a,T=j.createContext(m),h=j.forwardRef((q,N)=>{var{children:S}=q,K=Ch(q,["children"]);const D=I.useMemo(()=>K,Object.values(K));return I.createElement(T.Provider,{value:N?Object.assign(Object.assign({},D),{ref:N}):D},S)});function c(q=!0){var N;const S=j.useContext(T);if(!S&&q){const K=new Error(o??Yh(t,l));throw K.name="ContextError",(N=Error.captureStackTrace)===null||N===void 0||N.call(Error,K,c),K}return S}return T.displayName=u,[h,c]}const[$h,Ve]=aa({hookName:"useRenameCSS",name:"RenameCSS",providerName:"RenameCSSProvider",defaultValue:{cn:Qr}}),Wh=(...a)=>Qr(a).replace(/^navds-/g,"aksel-").replace(/\snavds-/g," aksel-").trim(),zh=({children:a})=>I.createElement($h,{cn:Wh},a),[Jh,Zh]=aa({hookName:"useTheme",name:"ThemeProvider",providerName:"ThemeProvider"});j.forwardRef((a,u)=>{const t=Zh(!1),{children:l,className:o,asChild:m=!1,theme:T=t==null?void 0:t.theme,hasBackground:h=!0}=a,q=h??(t===void 0&&a.theme!==void 0),N=m?Do:"div";return I.createElement(Jh,{theme:T},I.createElement(zh,null,I.createElement(N,{ref:u,className:Qr("aksel-theme",o,T),"data-background":q},l)))});const Rr=a=>Qr({"navds-typo--spacing":a.spacing,"navds-typo--truncate":a.truncate,"navds-typo--semibold":a.weight==="semibold",[`navds-typo--align-${a.align}`]:a.align,[`navds-typo--color-${a.textColor}`]:a.textColor,"navds-typo--visually-hidden":a.visuallyHidden,"navds-typo--uppercase":a.uppercase});var Xh=function(a,u){var t={};for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&u.indexOf(l)<0&&(t[l]=a[l]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,l=Object.getOwnPropertySymbols(a);o<l.length;o++)u.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(a,l[o])&&(t[l[o]]=a[l[o]]);return t};j.forwardRef((a,u)=>{var{className:t,size:l="medium",as:o="p",spacing:m,truncate:T,weight:h="regular",align:c,visuallyHidden:q,textColor:N}=a,S=Xh(a,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:K}=Ve();return I.createElement(o,Object.assign({},S,{ref:u,className:K(t,"navds-body-long",`navds-body-long--${l}`,Rr({spacing:m,truncate:T,weight:h,align:c,visuallyHidden:q,textColor:N}))}))});var Qh=function(a,u){var t={};for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&u.indexOf(l)<0&&(t[l]=a[l]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,l=Object.getOwnPropertySymbols(a);o<l.length;o++)u.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(a,l[o])&&(t[l[o]]=a[l[o]]);return t};const eb=j.forwardRef((a,u)=>{var{className:t,size:l="medium",as:o="p",spacing:m,truncate:T,weight:h="regular",align:c,visuallyHidden:q,textColor:N}=a,S=Qh(a,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:K}=Ve();return I.createElement(o,Object.assign({},S,{ref:u,className:K(t,"navds-body-short",`navds-body-short--${l}`,Rr({spacing:m,truncate:T,weight:h,align:c,visuallyHidden:q,textColor:N}))}))});var nb=function(a,u){var t={};for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&u.indexOf(l)<0&&(t[l]=a[l]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,l=Object.getOwnPropertySymbols(a);o<l.length;o++)u.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(a,l[o])&&(t[l[o]]=a[l[o]]);return t};const rb=j.forwardRef((a,u)=>{var{className:t,size:l="medium",spacing:o,uppercase:m,as:T="p",truncate:h,weight:c="regular",align:q,visuallyHidden:N,textColor:S}=a,K=nb(a,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:D}=Ve();return I.createElement(T,Object.assign({},K,{ref:u,className:D(t,"navds-detail",Rr({spacing:o,truncate:h,weight:c,align:q,visuallyHidden:N,textColor:S,uppercase:m}),{"navds-detail--small":l==="small"})}))});var ab=function(a,u){var t={};for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&u.indexOf(l)<0&&(t[l]=a[l]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,l=Object.getOwnPropertySymbols(a);o<l.length;o++)u.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(a,l[o])&&(t[l[o]]=a[l[o]]);return t};const tb=j.forwardRef((a,u)=>{var{children:t,className:l,size:o,spacing:m,as:T="p",showIcon:h=!1}=a,c=ab(a,["children","className","size","spacing","as","showIcon"]);const{cn:q}=Ve();return I.createElement(T,Object.assign({},c,{ref:u,className:q("navds-error-message","navds-label",l,Rr({spacing:m}),{"navds-label--small":o==="small","navds-error-message--show-icon":h})}),h&&I.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},I.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),t)});var sb=function(a,u){var t={};for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&u.indexOf(l)<0&&(t[l]=a[l]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,l=Object.getOwnPropertySymbols(a);o<l.length;o++)u.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(a,l[o])&&(t[l[o]]=a[l[o]]);return t};const Lo=j.forwardRef((a,u)=>{var{level:t="1",size:l,className:o,as:m,spacing:T,align:h,visuallyHidden:c,textColor:q}=a,N=sb(a,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:S}=Ve(),K=m??`h${t}`;return I.createElement(K,Object.assign({},N,{ref:u,className:S(o,"navds-heading",`navds-heading--${l}`,Rr({spacing:T,align:h,visuallyHidden:c,textColor:q}))}))});var lb=function(a,u){var t={};for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&u.indexOf(l)<0&&(t[l]=a[l]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,l=Object.getOwnPropertySymbols(a);o<l.length;o++)u.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(a,l[o])&&(t[l[o]]=a[l[o]]);return t};j.forwardRef((a,u)=>{var{className:t,spacing:l,as:o="p"}=a,m=lb(a,["className","spacing","as"]);const{cn:T}=Ve();return I.createElement(o,Object.assign({},m,{ref:u,className:T(t,"navds-ingress",{"navds-typo--spacing":!!l})}))});var ib=function(a,u){var t={};for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&u.indexOf(l)<0&&(t[l]=a[l]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,l=Object.getOwnPropertySymbols(a);o<l.length;o++)u.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(a,l[o])&&(t[l[o]]=a[l[o]]);return t};const xo=j.forwardRef((a,u)=>{var{className:t,size:l="medium",as:o="label",spacing:m,visuallyHidden:T,textColor:h}=a,c=ib(a,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:q}=Ve();return I.createElement(o,Object.assign({},c,{ref:u,className:q(t,"navds-label",Rr({spacing:m,visuallyHidden:T,textColor:h}),{"navds-label--small":l==="small"})}))});function tl(a,u){const t=Object.entries(a).filter(([l])=>!u.includes(l));return Object.fromEntries(t)}let Qu=0;function ub(a){const[u,t]=j.useState(a),l=a||u;return j.useEffect(()=>{u==null&&(Qu+=1,t(`aksel-id-${Qu}`))},[u]),l}const eo=I.useId;function sl(a){var u;return eo!==void 0?eo().replace(/(:)/g,""):(u=ub(a))!==null&&u!==void 0?u:""}let no=0;function ob(a){const[u,t]=j.useState(a),l=a||u;return j.useEffect(()=>{u==null&&(no+=1,t(`aksel-icon-${no}`))},[u]),l}const ro=I.useId;function ll(a){var u;return ro!==void 0?ro().replace(/(:)/g,""):(u=ob(a))!==null&&u!==void 0?u:""}var db=function(a,u){var t={};for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&u.indexOf(l)<0&&(t[l]=a[l]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,l=Object.getOwnPropertySymbols(a);o<l.length;o++)u.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(a,l[o])&&(t[l[o]]=a[l[o]]);return t};const gb=j.forwardRef((a,u)=>{var{title:t,titleId:l}=a,o=db(a,["title","titleId"]);let m=ll();return m=t?l||"title-"+m:void 0,j.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:u,"aria-labelledby":m},o),t?j.createElement("title",{id:m},t):null,j.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9 2.25a.75.75 0 0 1 .75.75v1.25h4.5V3a.75.75 0 0 1 1.5 0v1.25h3.75c.69 0 1.25.56 1.25 1.25v13c0 .69-.56 1.25-1.25 1.25h-15c-.69 0-1.25-.56-1.25-1.25v-13c0-.69.56-1.25 1.25-1.25h3.75V3A.75.75 0 0 1 9 2.25M15.75 7a.75.75 0 0 1-1.5 0V5.75h-4.5V7a.75.75 0 0 1-1.5 0V5.75h-3.5v3.5h14.5v-3.5h-3.5zm-11 11.25v-7.5h14.5v7.5zm2-5.25a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM10.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM6.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var kb=function(a,u){var t={};for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&u.indexOf(l)<0&&(t[l]=a[l]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,l=Object.getOwnPropertySymbols(a);o<l.length;o++)u.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(a,l[o])&&(t[l[o]]=a[l[o]]);return t};const mb=j.forwardRef((a,u)=>{var{title:t,titleId:l}=a,o=kb(a,["title","titleId"]);let m=ll();return m=t?l||"title-"+m:void 0,j.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:u,"aria-labelledby":m},o),t?j.createElement("title",{id:m},t):null,j.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var pb=function(a,u){var t={};for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&u.indexOf(l)<0&&(t[l]=a[l]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,l=Object.getOwnPropertySymbols(a);o<l.length;o++)u.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(a,l[o])&&(t[l[o]]=a[l[o]]);return t};const vb=j.forwardRef((a,u)=>{var{title:t,titleId:l}=a,o=pb(a,["title","titleId"]);let m=ll();return m=t?l||"title-"+m:void 0,j.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:u,"aria-labelledby":m},o),t?j.createElement("title",{id:m},t):null,j.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});function it(a,u,{checkForDefaultPrevented:t=!0}={}){return function(o){if(a==null||a(o),t===!1||!o.defaultPrevented)return u==null?void 0:u(o)}}const[yb,Uo]=aa({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"}),fb={global:{dateLocale:_T,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},Tb=j.createContext({locale:fb}),Ho=()=>j.useContext(Tb),ao=/(\w+)/g;function hb(a,u){const t=Array.isArray(a)?a:bb(a);for(const l of u){if(!l)continue;let o=l;for(let m=0;m<t.length;m++){const T=o[t[m]];T!==void 0&&(o=T)}if(typeof o=="string")return o}throw new Error(`Error translating key. Keypath '${a}' does not resolve to a string.`)}function bb(a){const u=[];let t=ao.exec(a);for(;t;){const[,l,o]=t;u.push(l||o),t=ao.exec(a)}return u}const Eb=/{[^}]*}/g;function Co(a,...u){const t=Ho(),l=t.translations||[],o=[...u,...Array.isArray(l)?l.map(T=>T[a]):[l[a]],t.locale[a]];return(T,h)=>{const c=hb(T,o);return h?c.replace(Eb,q=>{const N=q.substring(1,q.length-1);if(h[N]===void 0){const S=JSON.stringify(h);throw new Error(`Error translating key '${T}'. No replacement syntax ({}) found for key '${N}'. The following replacements were passed: '${S}'`)}return h[N]}):c}}var cb=function(a,u){var t={};for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&u.indexOf(l)<0&&(t[l]=a[l]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,l=Object.getOwnPropertySymbols(a);o<l.length;o++)u.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(a,l[o])&&(t[l[o]]=a[l[o]]);return t};const Ab=j.forwardRef((a,u)=>{var{className:t,size:l="medium",title:o,transparent:m=!1,variant:T="neutral",id:h}=a,c=cb(a,["className","size","title","transparent","variant","id"]);const{cn:q}=Ve(),N=sl(),S=Co("Loader");return I.createElement("svg",Object.assign({"aria-labelledby":h??`loader-${N}`,ref:u,className:q("navds-loader",t,`navds-loader--${l}`,`navds-loader--${T}`,{"navds-loader--transparent":m}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid"},tl(c,["children"])),I.createElement("title",{id:h??`loader-${N}`},o||S("title")),I.createElement("circle",{className:q("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),I.createElement("circle",{className:q("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});var Rb=function(a,u){var t={};for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&u.indexOf(l)<0&&(t[l]=a[l]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,l=Object.getOwnPropertySymbols(a);o<l.length;o++)u.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(a,l[o])&&(t[l[o]]=a[l[o]]);return t};const Xs=j.forwardRef((a,u)=>{var{as:t="button",variant:l="primary",className:o,children:m,size:T="medium",loading:h=!1,disabled:c,icon:q,iconPosition:N="left",onKeyUp:S}=a,K=Rb(a,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp"]);const{cn:D}=Ve(),U=c||h?tl(K,["href"]):K,re=C=>{C.key===" "&&!c&&!h&&C.currentTarget.click()};return I.createElement(t,Object.assign({},t!=="button"?{role:"button"}:{},U,{ref:u,onKeyUp:it(S,re),className:D(o,"navds-button",`navds-button--${l}`,`navds-button--${T}`,{"navds-button--loading":h,"navds-button--icon-only":!!q&&!m,"navds-button--disabled":c??h}),disabled:c??h?!0:void 0}),q&&N==="left"&&I.createElement("span",{className:D("navds-button__icon")},q),h&&I.createElement(Ab,{size:T}),m&&I.createElement(xo,{as:"span",size:T==="medium"?"medium":"small"},m),q&&N==="right"&&I.createElement("span",{className:D("navds-button__icon")},q))}),_b=()=>{const{cn:a}=Ve();return I.createElement(mb,{"aria-hidden":!0,className:a("navds-form-field__readonly-icon")})},qb=j.createContext(null),Nb=(a,u)=>{var t,l,o;const{size:m,error:T,errorId:h}=a,c=j.useContext(qb),q=sl(),N=(t=a.id)!==null&&t!==void 0?t:`${u}-${q}`,S=h??`${u}-error-${q}`,K=`${u}-description-${q}`,D=(c==null?void 0:c.disabled)||a.disabled,U=((c==null?void 0:c.readOnly)||a.readOnly)&&!D||void 0,re=!D&&!U&&!!(T||c!=null&&c.error),C=!D&&!U&&!!T&&typeof T!="boolean",Re=Object.assign({},re?{"aria-invalid":!0}:{});return a!=null&&a.required,{showErrorMsg:C,hasError:re,errorId:S,inputDescriptionId:K,size:(l=m??(c==null?void 0:c.size))!==null&&l!==void 0?l:"medium",readOnly:U,inputProps:Object.assign(Object.assign({id:N},Re),{"aria-describedby":Qr(a["aria-describedby"],{[K]:!!(a!=null&&a.description)&&typeof(a==null?void 0:a.description)=="string",[S]:C,[(o=c==null?void 0:c.errorId)!==null&&o!==void 0?o:""]:re&&!!(c!=null&&c.error)})||void 0,disabled:D})}},[ac,Vb]=aa();var Sb=function(a,u){var t={};for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&u.indexOf(l)<0&&(t[l]=a[l]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,l=Object.getOwnPropertySymbols(a);o<l.length;o++)u.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(a,l[o])&&(t[l[o]]=a[l[o]]);return t};const[tc,Yo]=aa({errorMessage:"useDateInputContext must be used with DateInputContext"}),$o=j.forwardRef((a,u)=>{const{className:t,hideLabel:l=!1,label:o,description:m,variant:T="datepicker",setAnchorRef:h}=a,c=Sb(a,["className","hideLabel","label","description","variant","setAnchorRef"]),q=j.useRef(null),N=Vb().translate,{cn:S}=Ve(),K=T==="datepicker",D={prefix:K?"datepicker-input":"monthpicker-input",iconTitle:{open:K?"openDatePicker":"openMonthPicker",close:K?"closeDatePicker":"closeMonthPicker"}},U=Yo(),{inputProps:re,size:C="medium",inputDescriptionId:Re,errorId:pn,showErrorMsg:fe,hasError:Oe,readOnly:Y}=Nb(a,D.prefix);return I.createElement("div",{className:S(t,"navds-form-field",`navds-form-field--${C}`,"navds-date__field",{"navds-text-field--error":Oe,"navds-date__field--error":Oe,"navds-form-field--disabled":!!re.disabled,"navds-text-field--disabled":!!re.disabled,"navds-form-field--readonly":Y,"navds-text-field--readonly":Y,"navds-date__field--readonly":Y})},I.createElement(xo,{htmlFor:re.id,size:C,className:S("navds-form-field__label",{"navds-sr-only":l})},Y&&I.createElement(_b,null),o),!!m&&I.createElement(eb,{as:"div",className:S("navds-form-field__description",{"navds-sr-only":l}),id:Re,size:C},m),I.createElement("div",{className:S("navds-date__field-wrapper")},I.createElement("input",Object.assign({ref:u},tl(c,["error","errorId","size"]),re,{autoComplete:"off","aria-controls":U!=null&&U.open?U.ariaId:void 0,readOnly:Y,className:S("navds-date__field-input","navds-text-field__input","navds-body-short",`navds-body-short--${C}`),size:K?11:14})),I.createElement("button",{disabled:re.disabled||Y,tabIndex:Y||U!=null&&U.open?-1:0,onClick:()=>{U==null||U.onOpen(),h==null||h(q.current)},type:"button",className:S("navds-date__field-button"),ref:q},I.createElement(gb,{title:N(D.iconTitle[U!=null&&U.open?"close":"open"])}))),I.createElement("div",{className:S("navds-form-field__error"),id:pn,"aria-relevant":"additions removals","aria-live":"polite"},fe&&I.createElement(tb,{size:C,showIcon:!0},a.error)))});j.forwardRef((a,u)=>I.createElement($o,Object.assign({},a,{ref:u})));j.forwardRef((a,u)=>I.createElement($o,Object.assign({},a,{variant:"monthpicker",ref:u})));var Bb=function(a,u){var t={};for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&u.indexOf(l)<0&&(t[l]=a[l]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,l=Object.getOwnPropertySymbols(a);o<l.length;o++)u.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(a,l[o])&&(t[l[o]]=a[l[o]]);return t};const wb=j.forwardRef((a,u)=>{var{className:t}=a,l=Bb(a,["className"]);const{cn:o}=Ve();return I.createElement("div",Object.assign({},l,{ref:u,className:o("navds-modal__body",t)}))});var Kb=function(a,u){var t={};for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&u.indexOf(l)<0&&(t[l]=a[l]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,l=Object.getOwnPropertySymbols(a);o<l.length;o++)u.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(a,l[o])&&(t[l[o]]=a[l[o]]);return t};const jb=j.forwardRef((a,u)=>{var{className:t}=a,l=Kb(a,["className"]);const{cn:o}=Ve();return I.createElement("div",Object.assign({},l,{ref:u,className:o("navds-modal__footer",t)}))});var Ib=function(a,u){var t={};for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&u.indexOf(l)<0&&(t[l]=a[l]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,l=Object.getOwnPropertySymbols(a);o<l.length;o++)u.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(a,l[o])&&(t[l[o]]=a[l[o]]);return t};const Wo=j.forwardRef((a,u)=>{var{children:t,className:l,closeButton:o=!0}=a,m=Ib(a,["children","className","closeButton"]);const{cn:T}=Ve(),h=Uo(),c=Co("global");return I.createElement("div",Object.assign({},m,{ref:u,className:T("navds-modal__header",l)}),h.closeHandler&&o&&I.createElement(Xs,{type:"button",className:T("navds-modal__button"),size:"small",variant:"tertiary-neutral",onKeyDown:q=>{["Enter"," "].includes(q.key)&&q.repeat&&q.preventDefault()},onClick:h.closeHandler,icon:I.createElement(vb,{title:c("close")})}),t)}),to=({clientX:a,clientY:u},{left:t,top:l,right:o,bottom:m})=>!(a<t||u<l||a>o||u>m);function Ob(a,u,t){if(!(u&&u.closeButton===!1))return t?()=>{var l;return t()!==!1&&((l=a.current)===null||l===void 0?void 0:l.close())}:()=>{var l;return(l=a.current)===null||l===void 0?void 0:l.close()}}const tt="navds-modal__document-body";function Fb(a,u,t){I.useEffect(()=>{if(t||!a.current||!u)return;a.current.open&&document.body.classList.add(tt);const l=new MutationObserver(()=>{var o;!((o=a.current)===null||o===void 0)&&o.open?document.body.classList.add(tt):document.body.classList.remove(tt)});return l.observe(a.current,{attributes:!0,attributeFilter:["open"]}),()=>{l.disconnect(),document.body.classList.remove(tt)}},[a,u,t])}const Tr=typeof window<"u"&&(window.HTMLDialogElement===void 0||navigator.userAgent.includes("jsdom"));function zo(a,u){var t="on"+u.type.toLowerCase();return typeof a[t]=="function"&&a[t](u),a.dispatchEvent(u)}function Jr(a){for(;a;){if(a.localName==="dialog")return a;a.parentElement?a=a.parentElement:a.parentNode?a=a.parentNode.host:a=null}return null}function Jo(a){for(;a&&a.shadowRoot&&a.shadowRoot.activeElement;)a=a.shadowRoot.activeElement;a&&a.blur&&a!==document.body&&a.blur()}function Gb(a,u){for(var t=0;t<a.length;++t)if(a[t]===u)return!0;return!1}function Ys(a){return!a||!a.hasAttribute("method")?!1:a.getAttribute("method").toLowerCase()==="dialog"}function Zo(a){var u=["button","input","keygen","select","textarea"],t=u.map(function(T){return T+":not([disabled])"});t.push('[tabindex]:not([disabled]):not([tabindex=""])');var l=a.querySelector(t.join(", "));if(!l&&"attachShadow"in Element.prototype)for(var o=a.querySelectorAll("*"),m=0;m<o.length&&!(o[m].tagName&&o[m].shadowRoot&&(l=Zo(o[m].shadowRoot),l));m++);return l}function so(a){return a.isConnected||document.body.contains(a)}function Xo(a){if(a.submitter)return a.submitter;var u=a.target;if(!(u instanceof HTMLFormElement))return null;var t=Z.formSubmitter;if(!t){var l=a.target,o="getRootNode"in l&&l.getRootNode()||document;t=o.activeElement}return!t||t.form!==u?null:t}function Mb(a){if(!a.defaultPrevented){var u=a.target,t=Z.imagemapUseValue,l=Xo(a);t===null&&l&&(t=l.value);var o=Jr(u);if(o){var m=l&&l.getAttribute("formmethod")||u.getAttribute("method");m==="dialog"&&(a.preventDefault(),t!=null?o.close(t):o.close())}}}function Qo(a){if(this.dialog_=a,this.replacedStyleTop_=!1,this.openAsModal_=!1,a.hasAttribute("role")||a.setAttribute("role","dialog"),a.show=this.show.bind(this),a.showModal=this.showModal.bind(this),a.close=this.close.bind(this),a.addEventListener("submit",Mb,!1),"returnValue"in a||(a.returnValue=""),"MutationObserver"in window){var u=new MutationObserver(this.maybeHideModal.bind(this));u.observe(a,{attributes:!0,attributeFilter:["open"]})}else{var t=!1,l=(function(){t?this.downgradeModal():this.maybeHideModal(),t=!1}).bind(this),o,m=function(T){if(T.target===a){var h="DOMNodeRemoved";t|=T.type.substr(0,h.length)===h,window.clearTimeout(o),o=window.setTimeout(l,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(T){a.addEventListener(T,m)})}Object.defineProperty(a,"open",{set:this.setOpen.bind(this),get:a.hasAttribute.bind(a,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}Qo.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&so(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),Z.dm.removeDialog(this))},setOpen:function(a){a?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(a){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var u=document.createElement("div");this.dialog_.insertBefore(u,this.dialog_.firstChild),u.tabIndex=-1,u.focus(),this.dialog_.removeChild(u)}var t=document.createEvent("MouseEvents");t.initMouseEvent(a.type,a.bubbles,a.cancelable,window,a.detail,a.screenX,a.screenY,a.clientX,a.clientY,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,a.button,a.relatedTarget),this.dialog_.dispatchEvent(t),a.stopPropagation()},focus_:function(){var a=this.dialog_.querySelector("[autofocus]:not([disabled])");!a&&this.dialog_.tabIndex>=0&&(a=this.dialog_),a||(a=Zo(this.dialog_)),Jo(document.activeElement),a&&a.focus()},updateZIndex:function(a,u){if(a<u)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=a,this.backdrop_.style.zIndex=u},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!so(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!Z.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");this.setOpen(!0),this.openAsModal_=!0,Z.needsCentering(this.dialog_)?(Z.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(a){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),a!==void 0&&(this.dialog_.returnValue=a);var u=new window.CustomEvent("close",{bubbles:!1,cancelable:!1});zo(this.dialog_,u)}};var Z={};Z.reposition=function(a){var u=document.body.scrollTop||document.documentElement.scrollTop,t=u+(window.innerHeight-a.offsetHeight)/2;a.style.top=Math.max(u,t)+"px"};Z.isInlinePositionSetByStylesheet=function(a){for(var u=0;u<document.styleSheets.length;++u){var t=document.styleSheets[u],l=null;try{l=t.cssRules}catch{}if(l)for(var o=0;o<l.length;++o){var m=l[o],T=null;try{T=document.querySelectorAll(m.selectorText)}catch{}if(!(!T||!Gb(T,a))){var h=m.style.getPropertyValue("top"),c=m.style.getPropertyValue("bottom");if(h&&h!=="auto"||c&&c!=="auto")return!0}}}return!1};Z.needsCentering=function(a){var u=window.getComputedStyle(a);return u.position!=="absolute"||a.style.top!=="auto"&&a.style.top!==""||a.style.bottom!=="auto"&&a.style.bottom!==""?!1:!Z.isInlinePositionSetByStylesheet(a)};Z.forceRegisterDialog=function(a){if(a.showModal&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",a),a.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new Qo(a)};Z.registerDialog=function(a){a.showModal||Z.forceRegisterDialog(a)};Z.DialogManager=function(){this.pendingDialogStack=[];var a=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",(function(u){this.forwardTab_=void 0,u.stopPropagation(),a([])}).bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(u){var t=[];u.forEach(function(l){for(var o=0,m;m=l.removedNodes[o];++o)m instanceof Element&&(m.localName==="dialog"&&t.push(m),t=t.concat(m.querySelectorAll("dialog")))}),t.length&&a(t)}))};Z.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})};Z.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()};Z.DialogManager.prototype.updateStacking=function(){for(var a=this.zIndexHigh_,u=0,t;t=this.pendingDialogStack[u];++u)t.updateZIndex(--a,--a),u===0&&(this.overlay.style.zIndex=--a);var l=this.pendingDialogStack[0];if(l){var o=l.dialog.parentNode||document.body;o.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)};Z.DialogManager.prototype.containedByTopDialog_=function(a){for(;a=Jr(a);){for(var u=0,t;t=this.pendingDialogStack[u];++u)if(t.dialog===a)return u===0;a=a.parentElement}return!1};Z.DialogManager.prototype.handleFocus_=function(a){var u=a.composedPath?a.composedPath()[0]:a.target;if(!this.containedByTopDialog_(u)&&document.activeElement!==document.documentElement&&(a.preventDefault(),a.stopPropagation(),Jo(u),this.forwardTab_!==void 0)){var t=this.pendingDialogStack[0],l=t.dialog,o=l.compareDocumentPosition(u);return o&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?t.focus_():u!==document.documentElement&&document.documentElement.focus()),!1}};Z.DialogManager.prototype.handleKey_=function(a){if(this.forwardTab_=void 0,a.keyCode===27){a.preventDefault(),a.stopPropagation();var u=new window.CustomEvent("cancel",{bubbles:!1,cancelable:!0}),t=this.pendingDialogStack[0];t&&zo(t.dialog,u)&&t.dialog.close()}else a.keyCode===9&&(this.forwardTab_=!a.shiftKey)};Z.DialogManager.prototype.checkDOM_=function(a){var u=this.pendingDialogStack.slice();u.forEach(function(t){a.indexOf(t.dialog)!==-1?t.downgradeModal():t.maybeHideModal()})};Z.DialogManager.prototype.pushDialog=function(a){var u=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=u?!1:(this.pendingDialogStack.unshift(a)===1&&this.blockDocument(),this.updateStacking(),!0)};Z.DialogManager.prototype.removeDialog=function(a){var u=this.pendingDialogStack.indexOf(a);u!==-1&&(this.pendingDialogStack.splice(u,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())};Tr&&(Z.dm=new Z.DialogManager,Z.formSubmitter=null,Z.imagemapUseValue=null);if(Tr){var lo=document.createElement("form");if(lo.setAttribute("method","dialog"),lo.method!=="dialog"){var vr=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(vr){var Pb=vr.get;vr.get=function(){return Ys(this)?"dialog":Pb.call(this)};var Db=vr.set;vr.set=function(a){return typeof a=="string"&&a.toLowerCase()==="dialog"?this.setAttribute("method",a):Db.call(this,a)},Object.defineProperty(HTMLFormElement.prototype,"method",vr)}}document.addEventListener("click",function(a){if(Z.formSubmitter=null,Z.imagemapUseValue=null,!a.defaultPrevented){var u=a.target;if("composedPath"in a){var t=a.composedPath();u=t.shift()||u}if(!(!u||!Ys(u.form))){var l=u.type==="submit"&&["button","input"].indexOf(u.localName)>-1;if(!l){if(!(u.localName==="input"&&u.type==="image"))return;Z.imagemapUseValue=a.offsetX+","+a.offsetY}var o=Jr(u);o&&(Z.formSubmitter=u)}}},!1),document.addEventListener("submit",function(a){var u=a.target,t=Jr(u);if(!t){var l=Xo(a),o=l&&l.getAttribute("formmethod")||u.getAttribute("method");o==="dialog"&&a.preventDefault()}});var Lb=HTMLFormElement.prototype.submit,xb=function(){if(!Ys(this))return Lb.call(this);var a=Jr(this);a&&a.close()};HTMLFormElement.prototype.submit=xb}var Ub=function(a,u){var t={};for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&u.indexOf(l)<0&&(t[l]=a[l]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,l=Object.getOwnPropertySymbols(a);o<l.length;o++)u.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(a,l[o])&&(t[l[o]]=a[l[o]]);return t};const hr=j.forwardRef((a,u)=>{var t,l,{header:o,children:m,open:T,onBeforeClose:h,onCancel:c,closeOnBackdropClick:q,width:N,placement:S,portal:K,className:D,"aria-labelledby":U,style:re,onClick:C,onMouseDown:Re}=a,pn=Ub(a,["header","children","open","onBeforeClose","onCancel","closeOnBackdropClick","width","placement","portal","className","aria-labelledby","style","onClick","onMouseDown"]);const{cn:fe}=Ve(),Oe=j.useRef(fe("navds-modal--polyfilled")),Y=j.useRef(null),vn=xh(Y,u),Se=sl(),yn=(t=Ho())===null||t===void 0?void 0:t.rootElement,Te=qT({root:yn}),Dn=Yo(!1),sa=Uo(!1)!==void 0;sa&&!Dn&&console.error("Modals should not be nested"),j.useEffect(()=>{Tr&&Y.current&&Te&&(Z.registerDialog(Y.current),Y.current.classList.add(Oe.current)),Y.current&&Te&&(Y.current.autofocus=!0)},[Te]),j.useEffect(()=>{Y.current&&Te&&T!==void 0&&(T&&!Y.current.open?Y.current.showModal():!T&&Y.current.open&&Y.current.close())},[Te,T]),Fb(Y,Te,sa);const la=typeof N=="string"&&["small","medium"].includes(N),ft=fe("navds-modal",D,{[Oe.current]:Tr,"navds-modal--autowidth":!N,[`navds-modal--${N}`]:la,"navds-modal--top":S==="top"&&!Tr}),ia=Object.assign(Object.assign({},re),la?{}:{width:N}),ua=j.useRef({clientX:0,clientY:0}),Tt=Sn=>{ua.current=Sn},Ln=q&&!Tr,Vn=Sn=>{if(Sn.target!==Y.current)return;const oa=Y.current.getBoundingClientRect();to(ua.current,oa)||to(Sn,oa)||h!==void 0&&h()===!1||Y.current.close()},ht=Sn=>{h&&h()===!1&&Sn.preventDefault()},Zn=!U&&!pn["aria-label"]&&o?Se:U,Fe=I.createElement("dialog",Object.assign({},pn,{ref:vn,className:ft,style:ia,onCancel:it(c,ht),onClick:Ln?it(C,Vn):C,onMouseDown:Ln?it(Re,Tt):Re,"aria-labelledby":Zn}),I.createElement(yb,{closeHandler:Ob(Y,o,h),ref:Y},o&&I.createElement(Wo,null,o.label&&I.createElement(rb,{className:fe("navds-modal__label")},o.label),I.createElement(Lo,{size:(l=o.size)!==null&&l!==void 0?l:"medium",level:"1",id:Se},o.icon&&I.createElement("span",{className:fe("navds-modal__header-icon")},o.icon),o.heading)),m));return K?Te?NT.createPortal(Fe,Te):null:Fe});hr.Header=Wo;hr.Body=wb;hr.Footer=jb;function Hb(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var io={exports:{}},Wr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uo;function Cb(){if(uo)return Wr;uo=1;var a=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function t(l,o,m){var T=null;if(m!==void 0&&(T=""+m),o.key!==void 0&&(T=""+o.key),"key"in o){m={};for(var h in o)h!=="key"&&(m[h]=o[h])}else m=o;return o=m.ref,{$$typeof:a,type:l,key:T,ref:o!==void 0?o:null,props:m}}return Wr.Fragment=u,Wr.jsx=t,Wr.jsxs=t,Wr}var oo;function Yb(){return oo||(oo=1,io.exports=Cb()),io.exports}var yr=Yb();const ta={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"};ge(ta);var go={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var ko;function $b(){return ko||(ko=1,function(a){(function(){var u={}.hasOwnProperty;function t(){for(var m="",T=0;T<arguments.length;T++){var h=arguments[T];h&&(m=o(m,l.call(this,h)))}return m}function l(m){if(typeof m=="string"||typeof m=="number")return this&&this[m]||m;if(typeof m!="object")return"";if(Array.isArray(m))return t.apply(this,m);if(m.toString!==Object.prototype.toString&&!m.toString.toString().includes("[native code]"))return m.toString();var T="";for(var h in m)u.call(m,h)&&m[h]&&(T=o(T,this&&this[h]||h));return T}function o(m,T){return T?m?m+" "+T:m+T:m}a.exports?(t.default=t,a.exports=t):window.classNames=t})()}(go)),go.exports}var Wb=$b();const il=Hb(Wb),zb="_borderbox_1vkvn_1",Jb="_error_1vkvn_5",Zb="_warning_1vkvn_8",Xb={borderbox:zb,error:Jb,warning:Zb};il.bind(Xb);const Qb="_aksjonspunkt_kn1hn_1",eE="_erAksjonspunktApent_kn1hn_4",nE="_erIkkeGodkjentAvBeslutter_kn1hn_8",rE={aksjonspunkt:Qb,erAksjonspunktApent:eE,erIkkeGodkjentAvBeslutter:nE};il.bind(rE);const mo=ge(ta),aE=({text:a,okButtonText:u,showModal:t,cancel:l,submit:o})=>yr.jsxs(hr,{width:"small",open:t,"aria-label":a,onClose:l,children:[yr.jsx(hr.Body,{children:yr.jsx(Lo,{size:"small",children:a})}),yr.jsxs(hr.Footer,{children:[yr.jsx(Xs,{variant:"primary",size:"small",onClick:o,autoFocus:!0,type:"button",children:u||mo.formatMessage({id:"OkAvbrytModal.Ok"})}),yr.jsx(Xs,{variant:"secondary",size:"small",onClick:l,type:"button",children:mo.formatMessage({id:"OkAvbrytModal.Avbryt"})})]})]});ge(ta);const tE="_divider_1t980_1",sE="_dividerParagraf_1t980_8",lE="_leftPanel_1t980_11",iE="_rightPanel_1t980_14",uE={divider:tE,dividerParagraf:sE,leftPanel:lE,rightPanel:iE};il.bind(uE);ge(ta);ge(ta);const oE={"MenyMerkSomHasterIndex.MerkSomHaster":"Merk som haster","MenyMerkSomHasterIndex.MerkSomHasterSpørsmål":"Merk som haster?"},Qs=ge(oE),dE=()=>Qs.formatMessage({id:"MenyMerkSomHasterIndex.MerkSomHaster"}),ed=({merkSomHaster:a,lukkModal:u})=>{const t=()=>{a(),u()};return p.jsx(Ce,{value:Qs,children:p.jsx(aE,{text:Qs.formatMessage({id:"MenyMerkSomHasterIndex.MerkSomHasterSpørsmål"}),showModal:!0,submit:t,cancel:u})})};ed.__docgenInfo={description:"",methods:[],displayName:"MenyMerkSomHasterIndex",props:{merkSomHaster:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const gE="_modal_1awdg_11",kE="_typeBredde_1awdg_29",mE="_arsakBredde_1awdg_33",$s={modal:gE,typeBredde:kE,arsakBredde:mE},pE=(a,u)=>{const t=u.some(l=>l.kode===a.kode);return p.jsx("option",{value:a.kode,disabled:!t,children:` ${a.navn} `},a.kode)},vE=[ne.ANNET,ne.FEIL_I_LOVANDVENDELSE,ne.FEIL_ELLER_ENDRET_FAKTA,ne.FEIL_REGELVERKSFORSTAELSE,ne.FEIL_PROSESSUELL],yE=[ne.BEREEGNINGSGRUNNLAG,ne.MEDLEMSKAP,ne.OPPTJENING,ne.FORDELING,ne.INNTEKT,ne.DØD,ne.SØKERS_RELASJON,ne.SØKNADSFRIST,ne.KLAGE_U_INNTK,ne.KLAGE_M_INNTK],fE=[ne.KLAGE_U_INNTK,ne.KLAGE_M_INNTK,ne.RE_ENDRET_INNTEKTSMELDING,ne.RE_ENDRING_FRA_BRUKER,ne.FØDSEL,ne.DØD,ne.ANNET,ne.INNTEKT],TE=[ne.RE_FORELDELSE,ne.RE_VILKÅR,ne.RE_KLAGE_KA,ne.RE_KLAGE_NFP,ne.RE_FEILUTBETALT_BELØP_REDUSERT],hE=(a,u,t,l)=>{if(l&&u===J.TILBAKEKREVING_REVURDERING)return TE.flatMap(o=>{const m=l.find(T=>T.kode===o);return m?[m]:[]});if(t&&u===J.REVURDERING){const o=a===ut.FORELDREPENGER,m=a===ut.SVANGERSKAPSPENGER;let T=o?yE:vE;return m&&(T=fE),t.filter(h=>T.some(c=>c===h.kode)).sort((h,c)=>h.navn.localeCompare(c.navn))}return[]},bE=a=>[...a].sort((u,t)=>u.navn.localeCompare(t.navn)),EE=(a,u,t={kanBehandlingOpprettes:!1,kanRevurderingOpprettes:!1})=>a.filter(l=>l.kode===J.TILBAKEKREVING?t.kanBehandlingOpprettes:l.kode===J.TILBAKEKREVING_REVURDERING?t.kanRevurderingOpprettes:u.some(o=>o.behandlingType===l.kode&&o.kanOppretteBehandling)),nd=({submitCallback:a,cancelEvent:u,behandlingstyper:t,uuidForSistLukkede:l,ytelseType:o,behandlingOppretting:m,kanTilbakekrevingOpprettes:T,revurderingArsaker:h,tilbakekrevingRevurderingArsaker:c})=>{const q=br(),N=Er(),S=C=>a({...C,eksternUuid:l,fagsakYtelseType:o}),K=N.watch("behandlingType"),D=bE(t),U=EE(D,m,T),re=hE(o,K,h,c);return p.jsx(cr,{formMethods:N,onSubmit:S,children:p.jsxs(de,{className:$s.modal,open:!0,"aria-label":q.formatMessage({id:"MenyNyBehandlingIndex.ModalDescription"}),onClose:u,children:[p.jsx(de.Header,{children:p.jsx(ea,{size:"small",children:p.jsx(te,{id:"MenyNyBehandlingIndex.OpprettNyForstegangsbehandling"})})}),p.jsx(de.Body,{children:p.jsxs(Nn,{gap:"4",children:[p.jsx(Xr,{name:"behandlingType",control:N.control,label:"",validate:[Ie],selectValues:D.map(C=>pE(C,U)),className:$s.typeBredde}),K===J.FORSTEGANGSSOKNAD&&p.jsx(RT,{name:"nyBehandlingEtterKlage",control:N.control,label:q.formatMessage({id:"MenyNyBehandlingIndex.NyBehandlingEtterKlage"})}),re.length>0&&p.jsx(Xr,{name:"behandlingArsakType",control:N.control,label:"",hideLabel:!0,validate:[Ie],className:$s.arsakBredde,selectValues:re.map(C=>p.jsx("option",{value:C.kode,children:C.navn},C.kode))})]})}),p.jsxs(de.Footer,{children:[p.jsx(He,{size:"small",variant:"primary",children:p.jsx(te,{id:"MenyNyBehandlingIndex.Ok"})}),p.jsx(He,{size:"small",variant:"secondary",onClick:u,type:"button",children:p.jsx(te,{id:"MenyNyBehandlingIndex.Avbryt"})})]})]})})};nd.__docgenInfo={description:`NyBehandlingModal

Denne modalen vises etter at en saksbehandler har valgt opprett ny 1.gangsbehandling i behandlingsmenyen.
Ved å trykke på ok skal ny behandling(1.gangsbehandling) av sak opprettes.`,methods:[],displayName:"NyBehandlingModal",props:{ytelseType:{required:!0,tsType:{name:"string"},description:""},cancelEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:`(
  data: {
    eksternUuid?: string;
    fagsakYtelseType: string;
  } & FormValues,
) => void`,signature:{arguments:[{type:{name:"intersection",raw:`{
  eksternUuid?: string;
  fagsakYtelseType: string;
} & FormValues`,elements:[{name:"signature",type:"object",raw:`{
  eksternUuid?: string;
  fagsakYtelseType: string;
}`,signature:{properties:[{key:"eksternUuid",value:{name:"string",required:!1}},{key:"fagsakYtelseType",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  behandlingType?: string;
  nyBehandlingEtterKlage?: string;
  behandlingArsakType?: string;
}`,signature:{properties:[{key:"behandlingType",value:{name:"string",required:!1}},{key:"nyBehandlingEtterKlage",value:{name:"string",required:!1}},{key:"behandlingArsakType",value:{name:"string",required:!1}}]}}]},name:"data"}],return:{name:"void"}}},description:""},behandlingOppretting:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: string;
  kanOppretteBehandling: boolean;
}`,signature:{properties:[{key:"behandlingType",value:{name:"string",required:!0}},{key:"kanOppretteBehandling",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingType: string;
  kanOppretteBehandling: boolean;
}>`}],raw:"BehandlingOppretting[]"},description:""},behandlingstyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'BehandlingType'>[]"},description:""},tilbakekrevingRevurderingArsaker:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<'BehandlingÅrsakType'>[]"},description:""},revurderingArsaker:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'BehandlingÅrsakType'>[]"},description:""},kanTilbakekrevingOpprettes:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  kanBehandlingOpprettes: boolean;
  kanRevurderingOpprettes: boolean;
}`,signature:{properties:[{key:"kanBehandlingOpprettes",value:{name:"boolean",required:!0}},{key:"kanRevurderingOpprettes",value:{name:"boolean",required:!0}}]}},description:""},uuidForSistLukkede:{required:!1,tsType:{name:"string"},description:""}}};const cE={"MenyNyBehandlingIndex.NyForstegangsbehandling":"Opprett ny behandling","MenyNyBehandlingIndex.ModalDescription":"Ny behandling","MenyNyBehandlingIndex.OpprettNyForstegangsbehandling":"Opprett ny behandling","MenyNyBehandlingIndex.NyBehandlingEtterKlage":"Behandlingen opprettes som et resultat av klagebehandling","MenyNyBehandlingIndex.Ok":"OK","MenyNyBehandlingIndex.Avbryt":"Avbryt"},AE=[J.TILBAKEKREVING,J.TILBAKEKREVING_REVURDERING],rd=ge(cE),RE=()=>rd.formatMessage({id:"MenyNyBehandlingIndex.NyForstegangsbehandling"}),ad=({saksnummer:a,behandlingUuid:u,lagNyBehandling:t,lukkModal:l,...o})=>{const m=T=>{const h=!!T.behandlingType&&AE.some(N=>N===T.behandlingType),q={saksnummer:a,...u&&h?{behandlingUuid:u}:{},...T};t({isTilbakekreving:h,params:q}),l()};return p.jsx(Ce,{value:rd,children:p.jsx(nd,{cancelEvent:l,submitCallback:m,...o})})};ad.__docgenInfo={description:"",methods:[],displayName:"MenyNyBehandlingIndex",props:{ytelseType:{required:!0,tsType:{name:"string"},description:""},saksnummer:{required:!0,tsType:{name:"string"},description:""},behandlingUuid:{required:!1,tsType:{name:"string"},description:""},lagNyBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:`(values: {
  isTilbakekreving: boolean;
  params: {
    saksnummer: string;
    behandlingUuid?: string;
  } & FormValues;
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  isTilbakekreving: boolean;
  params: {
    saksnummer: string;
    behandlingUuid?: string;
  } & FormValues;
}`,signature:{properties:[{key:"isTilbakekreving",value:{name:"boolean",required:!0}},{key:"params",value:{name:"intersection",raw:`{
  saksnummer: string;
  behandlingUuid?: string;
} & FormValues`,elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  behandlingUuid?: string;
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  behandlingType?: string;
  nyBehandlingEtterKlage?: string;
  behandlingArsakType?: string;
}`,signature:{properties:[{key:"behandlingType",value:{name:"string",required:!1}},{key:"nyBehandlingEtterKlage",value:{name:"string",required:!1}},{key:"behandlingArsakType",value:{name:"string",required:!1}}]}}],required:!0}}]}},name:"values"}],return:{name:"void"}}},description:""},behandlingstyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'BehandlingType'>[]"},description:""},tilbakekrevingRevurderingArsaker:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<'BehandlingÅrsakType'>[]"},description:""},revurderingArsaker:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'BehandlingÅrsakType'>[]"},description:""},behandlingOppretting:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: string;
  kanOppretteBehandling: boolean;
}`,signature:{properties:[{key:"behandlingType",value:{name:"string",required:!0}},{key:"kanOppretteBehandling",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingType: string;
  kanOppretteBehandling: boolean;
}>`}],raw:"BehandlingOppretting[]"},description:""},kanTilbakekrevingOpprettes:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  kanBehandlingOpprettes: boolean;
  kanRevurderingOpprettes: boolean;
}`,signature:{properties:[{key:"kanBehandlingOpprettes",value:{name:"boolean",required:!0}},{key:"kanRevurderingOpprettes",value:{name:"boolean",required:!0}}]}},description:""},uuidForSistLukkede:{required:!1,tsType:{name:"string"},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const _E={"MenySettPaVentIndex.BehandlingOnHold":"Sett behandlingen på vent"},td=ge(_E),qE=()=>td.formatMessage({id:"MenySettPaVentIndex.BehandlingOnHold"}),sd=({settBehandlingPaVent:a,ventearsaker:u,lukkModal:t,erTilbakekreving:l})=>{const o=m=>{if(m.frist===void 0||m.ventearsak===void 0)throw new Error("Frist eller venteårsak skal være satt");const T={frist:m.frist,ventearsak:m.ventearsak};a(T),t()};return p.jsx(Ce,{value:td,children:p.jsx(jT,{showModal:!0,submitCallback:o,cancelEvent:t,ventearsaker:u,erTilbakekreving:l,hasManualPaVent:!0,frist:null,ventearsak:null})})};sd.__docgenInfo={description:"",methods:[],displayName:"MenySettPaVentIndex",props:{settBehandlingPaVent:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { frist: string; ventearsak: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ frist: string; ventearsak: string }",signature:{properties:[{key:"frist",value:{name:"string",required:!0}},{key:"ventearsak",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},ventearsaker:{required:!0,tsType:{name:"union",raw:"KodeverkMedNavn<'Venteårsak'>[] | KodeverkMedNavnTilbakekreving<'Venteårsak'>[]",elements:[{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Venteårsak'>[]"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<'Venteårsak'>[]"}]},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},erTilbakekreving:{required:!0,tsType:{name:"boolean"},description:""}}};const ld=({behandling:a,setBehandling:u,lukkModal:t})=>{const l=fo(a,u);return p.jsx(Bo,{apneBehandlingForEndringer:l.åpneForEndringer,lukkModal:t})};ld.__docgenInfo={description:"",methods:[],displayName:"ApneForEndringerMenyModal",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"BehandlingStatus",required:!0}},{key:"type",value:{name:"BehandlingType",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:"BehandlingResultatType | BehandlingResultatTypeTilbakekreving",elements:[{name:"BehandlingResultatType"},{name:"BehandlingResultatTypeTilbakekreving"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"Avslagsarsak | null",elements:[{name:"Avslagsarsak"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"KonsekvensForYtelsen"}],raw:"KonsekvensForYtelsen[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"AksjonspunktKode",required:!0}},{key:"status",value:{name:"AksjonspunktStatus",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"VilkarType",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"VurderÅrsak[] | null",elements:[{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"AksjonspunktType",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"union",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]}},{name:"null"}],required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"VilkarType",required:!0}},{key:"vilkarStatus",value:{name:"VilkarUtfallType",required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},setBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:"(behandling?: Behandling) => void",signature:{arguments:[{type:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"BehandlingStatus",required:!0}},{key:"type",value:{name:"BehandlingType",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:"BehandlingResultatType | BehandlingResultatTypeTilbakekreving",elements:[{name:"BehandlingResultatType"},{name:"BehandlingResultatTypeTilbakekreving"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"Avslagsarsak | null",elements:[{name:"Avslagsarsak"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"KonsekvensForYtelsen"}],raw:"KonsekvensForYtelsen[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"AksjonspunktKode",required:!0}},{key:"status",value:{name:"AksjonspunktStatus",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"VilkarType",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"VurderÅrsak[] | null",elements:[{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"AksjonspunktType",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"union",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]}},{name:"null"}],required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"VilkarType",required:!0}},{key:"vilkarStatus",value:{name:"VilkarUtfallType",required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},name:"behandling"}],return:{name:"void"}}},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const id=({behandling:a,hentOgSettBehandling:u,lukkModal:t})=>{const l=Ue(nl()),o=na(a),{mutate:m}=mn({mutationFn:T=>o.endreBehandlendeEnhet({...T,behandlingUuid:a.uuid,behandlingVersjon:a.versjon}),onSuccess:()=>u()});return p.jsx(So,{behandlendeEnhetId:a.behandlendeEnhetId,behandlendeEnhetNavn:a.behandlendeEnhetNavn,nyBehandlendeEnhet:m,behandlendeEnheter:un(l.data).behandlendeEnheter,lukkModal:t})};id.__docgenInfo={description:"",methods:[],displayName:"EndreBehandlendeEnhetMenyModal",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"BehandlingStatus",required:!0}},{key:"type",value:{name:"BehandlingType",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:"BehandlingResultatType | BehandlingResultatTypeTilbakekreving",elements:[{name:"BehandlingResultatType"},{name:"BehandlingResultatTypeTilbakekreving"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"Avslagsarsak | null",elements:[{name:"Avslagsarsak"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"KonsekvensForYtelsen"}],raw:"KonsekvensForYtelsen[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"AksjonspunktKode",required:!0}},{key:"status",value:{name:"AksjonspunktStatus",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"VilkarType",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"VurderÅrsak[] | null",elements:[{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"AksjonspunktType",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"union",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]}},{name:"null"}],required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"VilkarType",required:!0}},{key:"vilkarStatus",value:{name:"VilkarUtfallType",required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},hentOgSettBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const ud=({saksnummer:a,fagsakMarkeringer:u,hentOgSettBehandling:t,lukkModal:l})=>{const o=el(),m=pt(),T=GT("FagsakMarkering").toSorted((c,q)=>c.navn.localeCompare(q.navn)),{mutate:h}=mn({mutationFn:c=>m.endreSakMarkering(c),onSuccess:()=>{t(),o.invalidateQueries({queryKey:[Zr.FETCH_FAGSAK]})}});return p.jsx(jo,{saksnummer:a,fagsakMarkeringer:u,endreFagsakMarkering:h,lukkModal:l,fagsakMarkeringerKodeverk:T})};ud.__docgenInfo={description:"",methods:[],displayName:"EndreFagsakMarkeringMenyModal",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},fagsakMarkeringer:{required:!0,tsType:{name:"union",raw:"Saksmarkering[] | undefined",elements:[{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fagsakMarkering: FagsakMarkeringKode;
  kortNavn?: string;
}`,signature:{properties:[{key:"fagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"kortNavn",value:{name:"string",required:!1}}]}}],raw:"Saksmarkering[]"},{name:"undefined"}]},description:""},hentOgSettBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const od=({behandling:a,behandlingAppKontekst:u,fagsakYtelseType:t,lukkModal:l})=>{const o=pt(),m=na(a),{data:T}=Ue(o.kodeverkOptions()),{data:h}=Ue(o.fptilbake.kodeverkOptions()),{mutateAsync:c}=mn({mutationFn:D=>m.henleggBehandling({...D,behandlingUuid:a.uuid,behandlingVersjon:a.versjon})}),q=a.type===J.TILBAKEKREVING||a.type===J.TILBAKEKREVING_REVURDERING?un(h).BehandlingResultatType:un(T).BehandlingResultatType,N=po(),S=()=>N("/"),K=NE(u);return p.jsx(Mo,{valgtBehandling:a,forhandsvisHenleggBehandling:K,henleggBehandling:c,ytelseType:t,behandlingResultatTyper:q,lukkModal:l,gaaTilSokeside:S})},NE=a=>{const u=dT(a),{mutate:t}=mn({mutationFn:m=>u.forhåndsvisMelding(m),onSuccess:m=>{Lu(m)}}),{mutate:l}=mn({mutationFn:m=>gT(m.behandlingUuid,m.fritekst??""),onSuccess:m=>{Lu(m)}}),o=J.TILBAKEKREVING===a.type||J.TILBAKEKREVING_REVURDERING===a.type;return m=>{o?l(m):t(m)}};od.__docgenInfo={description:"",methods:[],displayName:"HenleggMenyModal",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"BehandlingStatus",required:!0}},{key:"type",value:{name:"BehandlingType",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:"BehandlingResultatType | BehandlingResultatTypeTilbakekreving",elements:[{name:"BehandlingResultatType"},{name:"BehandlingResultatTypeTilbakekreving"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"Avslagsarsak | null",elements:[{name:"Avslagsarsak"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"KonsekvensForYtelsen"}],raw:"KonsekvensForYtelsen[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"AksjonspunktKode",required:!0}},{key:"status",value:{name:"AksjonspunktStatus",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"VilkarType",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"VurderÅrsak[] | null",elements:[{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"AksjonspunktType",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"union",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]}},{name:"null"}],required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"VilkarType",required:!0}},{key:"vilkarStatus",value:{name:"VilkarUtfallType",required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},behandlingAppKontekst:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"BehandlingStatus",required:!0}},{key:"type",value:{name:"BehandlingType",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:"BehandlingResultatType | BehandlingResultatTypeTilbakekreving",elements:[{name:"BehandlingResultatType"},{name:"BehandlingResultatTypeTilbakekreving"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"Avslagsarsak | null",elements:[{name:"Avslagsarsak"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"KonsekvensForYtelsen"}],raw:"KonsekvensForYtelsen[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}`,signature:{properties:[{key:"behandlingTillatteOperasjoner",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  behandlingKanMerkesHaster: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}`,signature:{properties:[{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"behandlingKanMerkesHaster",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"VergeBehandlingmenyValg",required:!0}}]}}],raw:`Readonly<{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  behandlingKanMerkesHaster: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}>`,required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"boolean",required:!0}}]}}],raw:"Brevmal[]",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: SkjermlenkeType;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: VurderÅrsak[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"opptjeningAktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"erEndring",value:{name:"boolean",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"orgnr",value:{name:"string",required:!1}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"privatpersonFødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}>`}],raw:"OpptjeningAktiviteter[]",required:!1}},{key:"beregningDto",value:{name:"signature",type:"object",raw:`{
  fastsattVarigEndringNaering: boolean;
  faktaOmBeregningTilfeller: string[];
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]",required:!1}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"typeEndring",value:{name:"TypeEndring",required:!0}},{key:"erSlettet",value:{name:"boolean",required:!0}},{key:"erAvklart",value:{name:"boolean",required:!0}},{key:"erLagtTil",value:{name:"boolean",required:!0}},{key:"erEndret",value:{name:"boolean",required:!0}}]}}],raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}[]`,required:!1}}]}}],raw:`Readonly<{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: VurderÅrsak[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}>`}],raw:"TotrinnskontrollAksjonspunkt[]",required:!0}}]}}],raw:`Readonly<{
  skjermlenkeType: SkjermlenkeType;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"union",raw:"Aksjonspunkt | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"AksjonspunktKode",required:!0}},{key:"status",value:{name:"AksjonspunktStatus",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"VilkarType",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"VurderÅrsak[] | null",elements:[{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"AksjonspunktType",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`},{name:"null"}],required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"iayFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}},{key:"medlFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}>`}]},description:""},fagsakYtelseType:{required:!0,tsType:{name:"FagsakYtelseType"},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const dd=({behandling:a,hentOgSettBehandling:u,lukkModal:t})=>{const l=na(a),o=el(),{mutate:m}=mn({mutationFn:()=>l.merkSomHaster(a.uuid,a.versjon),onSuccess:()=>{u(),o.invalidateQueries({queryKey:[Zr.FETCH_FAGSAK]}),o.invalidateQueries({queryKey:[Zr.FETCH_FAGSAKDATA_FPTILBAKE]})}});return p.jsx(ed,{merkSomHaster:m,lukkModal:t})};dd.__docgenInfo={description:"",methods:[],displayName:"MerkSomHasterMenyModal",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"BehandlingStatus",required:!0}},{key:"type",value:{name:"BehandlingType",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:"BehandlingResultatType | BehandlingResultatTypeTilbakekreving",elements:[{name:"BehandlingResultatType"},{name:"BehandlingResultatTypeTilbakekreving"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"Avslagsarsak | null",elements:[{name:"Avslagsarsak"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"KonsekvensForYtelsen"}],raw:"KonsekvensForYtelsen[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"AksjonspunktKode",required:!0}},{key:"status",value:{name:"AksjonspunktStatus",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"VilkarType",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"VurderÅrsak[] | null",elements:[{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"AksjonspunktType",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"union",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]}},{name:"null"}],required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"VilkarType",required:!0}},{key:"vilkarStatus",value:{name:"VilkarUtfallType",required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},hentOgSettBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const VE=a=>{const{setIsRequestPending:u}=IT(),{onBehandlingSuccess:t}=OT(a),{mutate:l}=mn({mutationFn:async o=>{const m=o.isTilbakekreving?await kT(o.params):await mT(o.params);return FT(m,u)},onSuccess:t});return{lagNyBehandling:l}},SE=[J.FORSTEGANGSSOKNAD,J.KLAGE,J.REVURDERING,J.DOKUMENTINNSYN,J.TILBAKEKREVING,J.TILBAKEKREVING_REVURDERING],BE=(a=[])=>{const u=a.find(t=>t.gjeldendeVedtak&&t.status===uT.AVSLUTTET&&(t.type===J.FORSTEGANGSSOKNAD||t.type===J.REVURDERING));return u?u.uuid:void 0},gd=({fagsakData:a,behandlingUuid:u,lukkModal:t})=>{const l=a.getFagsak(),o=a.getAlleBehandlinger(),m=a.getBehandling(u),T=BE(o),h=xT().includes(mt.FPTILBAKE),c=pt(),{data:q}=Ue(c.kodeverkOptions()),{data:N}=Ue(c.fptilbake.kodeverkOptions()),S=Ue(nl()),{innloggetBruker:K}=un(S.data),D=h&&!K.kanVeilede&&T!==void 0,{data:U=!1}=Ue(c.fptilbake.kanTilbakekrevingOpprettesOptions(D,l.saksnummer,T)),re=(m==null?void 0:m.type)===J.TILBAKEKREVING||(m==null?void 0:m.type)===J.TILBAKEKREVING_REVURDERING,C=h&&!K.kanVeilede&&re&&!!u,{data:Re=!1}=Ue(c.fptilbake.kanTilbakekrevingRevurderingOpprettesOptions(C,u)),pn=N?N.BehandlingÅrsakType:void 0,fe=q?q.BehandlingÅrsakType:void 0,Oe=un(q).BehandlingType.filter(Te=>SE.some(Dn=>Dn===Te.kode)),Y=po(),vn=iT(),Se=Te=>{const Dn=PT(l.saksnummer,Te==null?void 0:Te.uuid);Y(DT({...vn,pathname:Dn}))},{lagNyBehandling:yn}=VE(Se);return p.jsx(ad,{saksnummer:l.saksnummer,behandlingUuid:m==null?void 0:m.uuid,uuidForSistLukkede:T,behandlingOppretting:a.getBehandlingOppretting(),kanTilbakekrevingOpprettes:{kanBehandlingOpprettes:U,kanRevurderingOpprettes:Re},behandlingstyper:Oe,tilbakekrevingRevurderingArsaker:pn,revurderingArsaker:fe,ytelseType:l.fagsakYtelseType,lagNyBehandling:yn,lukkModal:t})};gd.__docgenInfo={description:"",methods:[],displayName:"NyBehandlingMenyModal",props:{fagsakData:{required:!0,tsType:{name:"FagsakData"},description:""},behandlingUuid:{required:!1,tsType:{name:"string"},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const kd=({behandling:a,hentOgSettBehandling:u,lukkModal:t})=>{const l=pt(),o=na(a),{data:m}=Ue(l.kodeverkOptions()),{data:T}=Ue(l.fptilbake.kodeverkOptions()),{mutate:h}=mn({mutationFn:q=>o.settBehandlingPåVent({frist:q.frist,ventearsak:q.ventearsak,behandlingUuid:a.uuid,behandlingVersjon:a.versjon}),onSuccess:()=>u()}),c=a.type===J.TILBAKEKREVING||a.type===J.TILBAKEKREVING_REVURDERING?un(T).Venteårsak:un(m).Venteårsak;return p.jsx(sd,{settBehandlingPaVent:h,ventearsaker:c,lukkModal:t,erTilbakekreving:a.type===J.TILBAKEKREVING||a.type===J.TILBAKEKREVING_REVURDERING})};kd.__docgenInfo={description:"",methods:[],displayName:"SettPaVentMenyModal",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"BehandlingStatus",required:!0}},{key:"type",value:{name:"BehandlingType",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:"BehandlingResultatType | BehandlingResultatTypeTilbakekreving",elements:[{name:"BehandlingResultatType"},{name:"BehandlingResultatTypeTilbakekreving"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"Avslagsarsak | null",elements:[{name:"Avslagsarsak"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"KonsekvensForYtelsen"}],raw:"KonsekvensForYtelsen[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"AksjonspunktKode",required:!0}},{key:"status",value:{name:"AksjonspunktStatus",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"VilkarType",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"VurderÅrsak[] | null",elements:[{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"AksjonspunktType",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"union",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]}},{name:"null"}],required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"VilkarType",required:!0}},{key:"vilkarStatus",value:{name:"VilkarUtfallType",required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},hentOgSettBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const md=({behandling:a,setBehandling:u,lukkModal:t})=>{const l=fo(a,u);return p.jsx(qo,{taBehandlingAvVent:l.gjenopptaBehandling,lukkModal:t})};md.__docgenInfo={description:"",methods:[],displayName:"TaAvVentMenyModal",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"BehandlingStatus",required:!0}},{key:"type",value:{name:"BehandlingType",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:"BehandlingResultatType | BehandlingResultatTypeTilbakekreving",elements:[{name:"BehandlingResultatType"},{name:"BehandlingResultatTypeTilbakekreving"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"Avslagsarsak | null",elements:[{name:"Avslagsarsak"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"KonsekvensForYtelsen"}],raw:"KonsekvensForYtelsen[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"AksjonspunktKode",required:!0}},{key:"status",value:{name:"AksjonspunktStatus",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"VilkarType",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"VurderÅrsak[] | null",elements:[{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"AksjonspunktType",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"union",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]}},{name:"null"}],required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"VilkarType",required:!0}},{key:"vilkarStatus",value:{name:"VilkarUtfallType",required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},setBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:"(behandling: Behandling | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"Behandling | undefined",elements:[{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"BehandlingStatus",required:!0}},{key:"type",value:{name:"BehandlingType",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:"BehandlingResultatType | BehandlingResultatTypeTilbakekreving",elements:[{name:"BehandlingResultatType"},{name:"BehandlingResultatTypeTilbakekreving"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"Avslagsarsak | null",elements:[{name:"Avslagsarsak"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"KonsekvensForYtelsen"}],raw:"KonsekvensForYtelsen[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"AksjonspunktKode",required:!0}},{key:"status",value:{name:"AksjonspunktStatus",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"VilkarType",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"VurderÅrsak[] | null",elements:[{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"AksjonspunktType",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"union",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]}},{name:"null"}],required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"VilkarType",required:!0}},{key:"vilkarStatus",value:{name:"VilkarUtfallType",required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},{name:"undefined"}]},name:"behandling"}],return:{name:"void"}}},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const pd=({behandlingAppKontekst:a,behandling:u,hentOgSettBehandling:t,lukkModal:l})=>{var K;const o=(K=a.behandlingTillatteOperasjoner)==null?void 0:K.vergeBehandlingsmeny,m=MT(u.type),T=el(),h=()=>{t(),T.invalidateQueries({queryKey:[Zr.FETCH_FAGSAK]}),T.invalidateQueries({queryKey:[Zr.FETCH_FAGSAKDATA_FPTILBAKE]}),T.invalidateQueries({queryKey:[Yu.VERGE]}),T.invalidateQueries({queryKey:[Yu.VERGE_HENT]})},c=na(u),{mutate:q}=mn({mutationFn:c.verge.opprettVergeV2,onSuccess:h}),{mutate:N}=mn({mutationFn:c.verge.fjernVergeV2,onSuccess:h}),{data:S}=Ue(c.verge.hent(u));return p.jsx(_o,{type:Ws.OPPRETT===o?"OPPRETT":"FJERN",verge:S,opprettVerge:q,fjernVerge:N,lukkModal:l,alleKodeverk:m})};pd.__docgenInfo={description:"",methods:[],displayName:"VergeMenyModal",props:{behandlingAppKontekst:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"BehandlingStatus",required:!0}},{key:"type",value:{name:"BehandlingType",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:"BehandlingResultatType | BehandlingResultatTypeTilbakekreving",elements:[{name:"BehandlingResultatType"},{name:"BehandlingResultatTypeTilbakekreving"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"Avslagsarsak | null",elements:[{name:"Avslagsarsak"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"KonsekvensForYtelsen"}],raw:"KonsekvensForYtelsen[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}`,signature:{properties:[{key:"behandlingTillatteOperasjoner",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  behandlingKanMerkesHaster: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}`,signature:{properties:[{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"behandlingKanMerkesHaster",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"VergeBehandlingmenyValg",required:!0}}]}}],raw:`Readonly<{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  behandlingKanMerkesHaster: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}>`,required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"boolean",required:!0}}]}}],raw:"Brevmal[]",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: SkjermlenkeType;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: VurderÅrsak[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"opptjeningAktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"erEndring",value:{name:"boolean",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"orgnr",value:{name:"string",required:!1}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"privatpersonFødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}>`}],raw:"OpptjeningAktiviteter[]",required:!1}},{key:"beregningDto",value:{name:"signature",type:"object",raw:`{
  fastsattVarigEndringNaering: boolean;
  faktaOmBeregningTilfeller: string[];
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]",required:!1}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"typeEndring",value:{name:"TypeEndring",required:!0}},{key:"erSlettet",value:{name:"boolean",required:!0}},{key:"erAvklart",value:{name:"boolean",required:!0}},{key:"erLagtTil",value:{name:"boolean",required:!0}},{key:"erEndret",value:{name:"boolean",required:!0}}]}}],raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}[]`,required:!1}}]}}],raw:`Readonly<{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: VurderÅrsak[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}>`}],raw:"TotrinnskontrollAksjonspunkt[]",required:!0}}]}}],raw:`Readonly<{
  skjermlenkeType: SkjermlenkeType;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"union",raw:"Aksjonspunkt | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"AksjonspunktKode",required:!0}},{key:"status",value:{name:"AksjonspunktStatus",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"VilkarType",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"VurderÅrsak[] | null",elements:[{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"AksjonspunktType",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`},{name:"null"}],required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"iayFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}},{key:"medlFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}>`}]},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"BehandlingStatus",required:!0}},{key:"type",value:{name:"BehandlingType",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:"BehandlingResultatType | BehandlingResultatTypeTilbakekreving",elements:[{name:"BehandlingResultatType"},{name:"BehandlingResultatTypeTilbakekreving"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"Avslagsarsak | null",elements:[{name:"Avslagsarsak"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"KonsekvensForYtelsen"}],raw:"KonsekvensForYtelsen[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"AksjonspunktKode",required:!0}},{key:"status",value:{name:"AksjonspunktStatus",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"VilkarType",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"VurderÅrsak[] | null",elements:[{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"AksjonspunktType",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"union",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]}},{name:"null"}],required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"VilkarType",required:!0}},{key:"vilkarStatus",value:{name:"VilkarUtfallType",required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},hentOgSettBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const wE=({fagsakData:a,behandlingUuid:u,behandling:t,setBehandling:l,hentOgSettBehandling:o})=>{const m=Ue(nl()),{innloggetBruker:T}=un(m.data),[h,c]=j.useState(),q=()=>c(void 0),N=a.getFagsak(),S=a.getBehandling(u),K=KE(S,N);return T.kanVeilede?null:p.jsxs(p.Fragment,{children:[p.jsxs($r,{children:[p.jsx(He,{size:"small",as:$r.Toggle,iconPosition:"right",variant:"secondary",icon:p.jsx(LT,{"aria-hidden":!0}),children:p.jsx(te,{id:"BehandlingMenuIndex.Behandlingsmeny"})}),p.jsx($r.Menu,{children:p.jsx($r.Menu.List,{children:Object.keys(K).filter(D=>!K[D].disabled).map(D=>p.jsx($r.Menu.List.Item,{onClick:()=>{c(D)},children:K[D].text},D))})})]}),h==="NY_BEHANDLING"&&p.jsx(gd,{fagsakData:a,behandlingUuid:u,lukkModal:q}),h==="ENDRE_FAGSAK_MARKERING"&&p.jsx(ud,{saksnummer:N.saksnummer,fagsakMarkeringer:N.fagsakMarkeringer,hentOgSettBehandling:o,lukkModal:q}),h==="VERGE"&&S&&t&&p.jsx(pd,{behandlingAppKontekst:S,behandling:t,lukkModal:q,hentOgSettBehandling:o}),h==="ÅPNE_FOR_ENDRINGER"&&t&&p.jsx(ld,{behandling:t,setBehandling:l,lukkModal:q}),h==="ENDRE_BEHANDLENDE_ENHET"&&t&&p.jsx(id,{behandling:t,hentOgSettBehandling:o,lukkModal:q}),h==="HENLEGG"&&S&&t&&p.jsx(od,{behandlingAppKontekst:S,behandling:t,fagsakYtelseType:N.fagsakYtelseType,lukkModal:q}),h==="SETT_PÅ_VENT"&&t&&p.jsx(kd,{behandling:t,hentOgSettBehandling:o,lukkModal:q}),h==="TA_AV_VENT"&&t&&p.jsx(md,{behandling:t,setBehandling:l,lukkModal:q}),h==="MERK_SOM_HASTER"&&t&&p.jsx(dd,{behandling:t,hentOgSettBehandling:o,lukkModal:q})]})},KE=(a,u)=>{const t=a?a.behandlingPåVent:!1,l=a==null?void 0:a.behandlingTillatteOperasjoner,o=l==null?void 0:l.vergeBehandlingsmeny,m=o===Ws.FJERN&&!!(a!=null&&a.uuid)&&!!(a!=null&&a.versjon),T=o===Ws.OPPRETT&&!!(a!=null&&a.uuid)&&!!(a!=null&&a.versjon);return{TA_AV_VENT:{disabled:!(l!=null&&l.behandlingKanGjenopptas),text:ph()},SETT_PÅ_VENT:{disabled:!(l!=null&&l.behandlingKanSettesPaVent),text:qE()},HENLEGG:{disabled:!(l!=null&&l.behandlingKanHenlegges),text:Lh()},ENDRE_BEHANDLENDE_ENHET:{disabled:!(l!=null&&l.behandlingKanBytteEnhet),text:Th()},ÅPNE_FOR_ENDRINGER:{disabled:!(l!=null&&l.behandlingKanOpnesForEndringer),text:bh()},NY_BEHANDLING:{disabled:u.sakSkalTilInfotrygd,text:RE()},ENDRE_FAGSAK_MARKERING:{disabled:u.sakSkalTilInfotrygd,text:Rh()},VERGE:{disabled:!(!t&&(T||m)),text:mh(T)},MERK_SOM_HASTER:{disabled:!(l!=null&&l.behandlingKanMerkesHaster),text:dE()}}};wE.__docgenInfo={description:"",methods:[],displayName:"BehandlingMenuIndex",props:{fagsakData:{required:!0,tsType:{name:"FagsakData"},description:""},behandlingUuid:{required:!1,tsType:{name:"string"},description:""},behandling:{required:!1,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"BehandlingStatus",required:!0}},{key:"type",value:{name:"BehandlingType",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:"BehandlingResultatType | BehandlingResultatTypeTilbakekreving",elements:[{name:"BehandlingResultatType"},{name:"BehandlingResultatTypeTilbakekreving"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"Avslagsarsak | null",elements:[{name:"Avslagsarsak"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"KonsekvensForYtelsen"}],raw:"KonsekvensForYtelsen[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"AksjonspunktKode",required:!0}},{key:"status",value:{name:"AksjonspunktStatus",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"VilkarType",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"VurderÅrsak[] | null",elements:[{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"AksjonspunktType",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"union",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]}},{name:"null"}],required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"VilkarType",required:!0}},{key:"vilkarStatus",value:{name:"VilkarUtfallType",required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},setBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:"(behandling: Behandling | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"Behandling | undefined",elements:[{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"BehandlingStatus",required:!0}},{key:"type",value:{name:"BehandlingType",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:"BehandlingResultatType | BehandlingResultatTypeTilbakekreving",elements:[{name:"BehandlingResultatType"},{name:"BehandlingResultatTypeTilbakekreving"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"Avslagsarsak | null",elements:[{name:"Avslagsarsak"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"KonsekvensForYtelsen"}],raw:"KonsekvensForYtelsen[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"AksjonspunktKode",required:!0}},{key:"status",value:{name:"AksjonspunktStatus",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"VilkarType",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"VurderÅrsak[] | null",elements:[{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"AksjonspunktType",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"union",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]}},{name:"null"}],required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"VilkarType",required:!0}},{key:"vilkarStatus",value:{name:"VilkarUtfallType",required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},{name:"undefined"}]},name:"behandling"}],return:{name:"void"}}},description:""},hentOgSettBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{mt as A,wE as B,Ar as F,uh as P,WT as T,kh as V,To as a,lt as b,sh as c,nc as d,rc as e,XT as f,QT as g,bo as h,eh as i,st as j,ho as s,xT as u};
