import{j as k}from"./jsx-runtime-CLpGMVip.js";import{r as cn}from"./index-B5OHeJSP.js";import{P as yt,k as ev,H as Hi,V as Xi,L as $u,B as $i,E as zi,ai as Fu,O as nv,h as zu,ag as rv}from"./FormDataContext-B1rdxO_J.js";import{n as Un,e as tv,M as Ee,V as Yi,E as iv,s as Iu,b as av,G as sv,W as uv,f as vt,z as Nu,Y as pt,B as lv,H as ov}from"./index.es-BEBRLXnK.js";import{u as dv}from"./initFetch-DBNggVZZ.js";import{b as fv,e as Tn,N as gv,c as pv,l as cv,E as mv,Z as vv,Q as hv,H as Vi,v as kv,M as yv,X as Lu,O as Ou,a as _v,r as bv}from"./index.es-DQGuYANz.js";import{c as ct}from"./_commonjsHelpers-Cpj98o6Y.js";import{B as ht}from"./Box-CnevsSVs.js";import{c as Av}from"./bind-oYjWB_aQ.js";import{C as wv,W as Ui}from"./index.es-TIZ8fSLE.js";import"./aktivitetStatus-02fOJoqz.js";import{K as kt}from"./alleKodeverk-Ck9zwXaq.js";import{K as Mu}from"./Kjonnkode-C-fkzSiP.js";import{T as Oe}from"./Table-Cj7eJeNt.js";import{A as Ji}from"./aksjonspunktCodes-BuBbCIxs.js";import{F as Tv}from"./skjermlenkeCodes-1SvLTuBb.js";import{h as qv,u as Rv}from"./behandlingApi-v-44y4EH.js";import{B as Qi}from"./behandlingDataContext-BMbp9e-c.js";import{i as Cu}from"./aksjonspunktStatus-xM4O_ZUY.js";import{e as xv,g as Pv}from"./useStandardProsessPanelProps--LzSCehy.js";var Zi=(p=>(p.BARN="BARN",p.FBARN="FBARN",p.VOKSEN="VOKSEN",p.ADVOKAT="ADVOKAT",p.ANNEN_F="ANNEN_F",p))(Zi||{});const kr={"AdresseVisning.Adresse":"Adresse","ForelderPanel.Soker":"Søker","ForelderPanel.AnnenForelder":"Annen forelder","AlleBarnPanel.Barn":"Barn","AlleBarnPanel.BarnNr":"Barn {nummer}","AlleBarnPanel.Fodt":"Født","AlleBarnPanel.Dod":"Død","PersonPanel.RolleOgNavn":"{rolle, select, BRUKER {Søker, } ANNEN_PART {Den andre forelderen, } BARN {Barnet, } other {} }{navn}","PersonPanel.Beskrivelse.Bruker":"Adresser for søker registrert i folkeregisteret gyldige for de siste 12 månedene","PersonPanel.Beskrivelse.Barn":"Adresser for barnet registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Beskrivelse.Annenpart":"Adresser for den andre forelderen registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Fodt":"Født {dato}","PersonPanel.Dod":"Død {dato}","AdresseTabell.IngenAdresse":"Ingen adresser funnet for {erAnnenpart, select, true {den andre forelderen} other {søker} }.","AdresseTabell.SammeAdresse":"Den andre forelderen har samme adresse som søker på skjæringstidspunktet","AdresseTabell.PeriodeLabel":"Periode","AdresseTabell.AdresseLabel":"Adresse","AdresseTabell.TypeLabel":"Type","MerkePanel.Dod":"DØD","MerkePanel.DodTittel":"Personen er død","MerkePanel.DodFodt":"DØDFØDT","MerkePanel.Diskresjon6":"Kode 6","MerkePanel.Diskresjon7":"Kode 7","MerkePanel.EgenAnsatt":"Nav","MerkePanel.Verge":"Verge","MerkePanel.Diskresjon6Tittel":"Personen har diskresjonsmerking kode 6","MerkePanel.Diskresjon7Tittel":"Personen har diskresjonsmerking kode 7","MerkePanel.EgenAnsattTittel":"Personen er ansatt i Nav","MerkePanel.VergeTittel":"Personen har verge","SubmitButton.ConfirmInformation":"Bekreft og fortsett","FaktaBegrunnelseTextField.BegrunnEndringene":"Begrunn endringene","FaktaBegrunnelseTextField.Vurdering":"Vurdering","FaktaBegrunnelseTextField.Begrunnelse":"Begrunnelse","TrueFalseInput.True":"Ja","TrueFalseInput.False":"Nei","FaktaKilde.Soknad":"FRA SØKNADEN","FaktaKilde.FREG":"FRA FOLKEREGISTERET","FaktaKilde.MEDL":"FRA MEDLEMSKAPSREGISTERET"},Wi=Un(kr),Bv=pv(3),Ev=cv(1500),Wn=({isReadOnly:p,isSubmittable:_,hasBegrunnelse:u,label:x,hasReadOnlyLabel:R=!1,hasVurderingText:P=!1,name:B="begrunnelse"})=>{const G=P?"FaktaBegrunnelseTextField.Vurdering":"FaktaBegrunnelseTextField.BegrunnEndringene",C=()=>p?R?Wi.formatMessage({id:"FaktaBegrunnelseTextField.Begrunnelse"}):"":x??Wi.formatMessage({id:G});return k.jsx(yt,{value:Wi,children:(_||u)&&k.jsx(fv,{name:B,label:C(),validate:[Tn,Bv,Ev,gv],maxLength:1500,readOnly:p})})},jv=p=>p&&Array.isArray(p)?p.length>0?p[0].begrunnelse:"":p&&!Array.isArray(p)?p.begrunnelse:"";Wn.initialValues=(p,_="begrunnelse")=>({[_]:tv(jv(p))});Wn.transformValues=(p,_="begrunnelse")=>({begrunnelse:p[_]});Wn.__docgenInfo={description:"FaktaBegrunnelseTextField",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[{name:"aksjonspunkt",optional:!0,type:{name:"union",raw:"Aksjonspunkt[] | Aksjonspunkt",elements:[{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`}],raw:"Aksjonspunkt[]"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`}]}},{name:"begrunnelseFieldName",optional:!0,type:null}],returns:{type:{name:"signature",type:"object",raw:`{
  [key: string]: any;
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
  [key: string]: any;
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}}]},alias:"FormValues"}},{name:"name",optional:!0,type:null}],returns:{type:{name:"signature",type:"object",raw:`{
  begrunnelse: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!0}}]}}}}],displayName:"FaktaBegrunnelseTextField",props:{isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},hasBegrunnelse:{required:!0,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:""},hasReadOnlyLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hasVurderingText:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'begrunnelse'",computed:!1}}}};const Sv=Un(kr),Fv=(p,_,u)=>!u||_?!0:!p,Yu=({isReadOnly:p,isSubmittable:_,buttonText:u,onClick:x,isSubmitting:R,isDirty:P})=>k.jsx(yt,{value:Sv,children:!p&&k.jsxs(ev,{size:"small",variant:"primary",loading:R,disabled:Fv(P,R,_),onClick:x||mv,type:x?"button":"submit",children:[!!u&&u,!u&&k.jsx(Ee,{id:"SubmitButton.ConfirmInformation"})]})});Yu.__docgenInfo={description:"FaktaSubmitButton",methods:[],displayName:"FaktaSubmitButton",props:{buttonText:{required:!1,tsType:{name:"string"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!0,tsType:{name:"boolean"},description:""}}};const Du=Un(kr),Iv=({name:p,label:_,readOnly:u,trueLabel:x,trueContent:R,falseLabel:P,falseContent:B})=>k.jsx(vv,{name:p,label:_,validate:[Tn],isReadOnly:u,isTrueOrFalseSelection:!0,radios:[{label:x??Du.formatMessage({id:"TrueFalseInput.True"}),value:"true",element:R},{label:P??Du.formatMessage({id:"TrueFalseInput.False"}),value:"false",element:B}]});Iv.__docgenInfo={description:"",methods:[],displayName:"TrueFalseInput",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},trueLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},trueContent:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},falseLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},falseContent:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""}}};const Zu=(p,_)=>{const u=new Date(p.tom??Yi),x=new Date(_.tom??Yi);if(u>x)return-1;if(u<x)return 1;if(p.fom&&!_.fom)return-1;if(!p.fom&&_.fom)return 1;if(p.fom&&_.fom){const R=new Date(p.fom),P=new Date(_.fom);if(R>P)return-1;if(R<P)return 1}return 0};var hr={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var Nv=hr.exports,Ku;function Lv(){return Ku||(Ku=1,function(p,_){(function(){var u,x="4.17.21",R=200,P="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",B="Expected a function",G="Invalid `variable` option passed into `_.template`",C="__lodash_hash_undefined__",ae=500,V="__lodash_placeholder__",J=1,Ue=2,Me=4,re=1,tn=2,me=1,qn=2,ea=4,We=8,Hn=16,Ge=32,$n=64,He=128,zn=256,_t=512,tl=30,il="...",al=800,sl=16,na=1,ul=2,ll=3,yr=1/0,Rn=9007199254740991,ol=17976931348623157e292,_r=NaN,Ce=4294967295,dl=Ce-1,fl=Ce>>>1,gl=[["ary",He],["bind",me],["bindKey",qn],["curry",We],["curryRight",Hn],["flip",_t],["partial",Ge],["partialRight",$n],["rearg",zn]],xn="[object Arguments]",br="[object Array]",pl="[object AsyncFunction]",Yn="[object Boolean]",Zn="[object Date]",cl="[object DOMException]",Ar="[object Error]",wr="[object Function]",ra="[object GeneratorFunction]",je="[object Map]",Xn="[object Number]",ml="[object Null]",$e="[object Object]",ta="[object Promise]",vl="[object Proxy]",Jn="[object RegExp]",Se="[object Set]",Qn="[object String]",Tr="[object Symbol]",hl="[object Undefined]",er="[object WeakMap]",kl="[object WeakSet]",nr="[object ArrayBuffer]",Pn="[object DataView]",bt="[object Float32Array]",At="[object Float64Array]",wt="[object Int8Array]",Tt="[object Int16Array]",qt="[object Int32Array]",Rt="[object Uint8Array]",xt="[object Uint8ClampedArray]",Pt="[object Uint16Array]",Bt="[object Uint32Array]",yl=/\b__p \+= '';/g,_l=/\b(__p \+=) '' \+/g,bl=/(__e\(.*?\)|\b__t\)) \+\n'';/g,ia=/&(?:amp|lt|gt|quot|#39);/g,aa=/[&<>"']/g,Al=RegExp(ia.source),wl=RegExp(aa.source),Tl=/<%-([\s\S]+?)%>/g,ql=/<%([\s\S]+?)%>/g,sa=/<%=([\s\S]+?)%>/g,Rl=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,xl=/^\w*$/,Pl=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Et=/[\\^$.*+?()[\]{}|]/g,Bl=RegExp(Et.source),jt=/^\s+/,El=/\s/,jl=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Sl=/\{\n\/\* \[wrapped with (.+)\] \*/,Fl=/,? & /,Il=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Nl=/[()=,{}\[\]\/\s]/,Ll=/\\(\\)?/g,Ol=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ua=/\w*$/,Ml=/^[-+]0x[0-9a-f]+$/i,Cl=/^0b[01]+$/i,Dl=/^\[object .+?Constructor\]$/,Kl=/^0o[0-7]+$/i,Vl=/^(?:0|[1-9]\d*)$/,Ul=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,qr=/($^)/,Wl=/['\n\r\u2028\u2029\\]/g,Rr="\\ud800-\\udfff",Gl="\\u0300-\\u036f",Hl="\\ufe20-\\ufe2f",$l="\\u20d0-\\u20ff",la=Gl+Hl+$l,oa="\\u2700-\\u27bf",da="a-z\\xdf-\\xf6\\xf8-\\xff",zl="\\xac\\xb1\\xd7\\xf7",Yl="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Zl="\\u2000-\\u206f",Xl=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",fa="A-Z\\xc0-\\xd6\\xd8-\\xde",ga="\\ufe0e\\ufe0f",pa=zl+Yl+Zl+Xl,St="['’]",Jl="["+Rr+"]",ca="["+pa+"]",xr="["+la+"]",ma="\\d+",Ql="["+oa+"]",va="["+da+"]",ha="[^"+Rr+pa+ma+oa+da+fa+"]",Ft="\\ud83c[\\udffb-\\udfff]",eo="(?:"+xr+"|"+Ft+")",ka="[^"+Rr+"]",It="(?:\\ud83c[\\udde6-\\uddff]){2}",Nt="[\\ud800-\\udbff][\\udc00-\\udfff]",Bn="["+fa+"]",ya="\\u200d",_a="(?:"+va+"|"+ha+")",no="(?:"+Bn+"|"+ha+")",ba="(?:"+St+"(?:d|ll|m|re|s|t|ve))?",Aa="(?:"+St+"(?:D|LL|M|RE|S|T|VE))?",wa=eo+"?",Ta="["+ga+"]?",ro="(?:"+ya+"(?:"+[ka,It,Nt].join("|")+")"+Ta+wa+")*",to="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",io="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",qa=Ta+wa+ro,ao="(?:"+[Ql,It,Nt].join("|")+")"+qa,so="(?:"+[ka+xr+"?",xr,It,Nt,Jl].join("|")+")",uo=RegExp(St,"g"),lo=RegExp(xr,"g"),Lt=RegExp(Ft+"(?="+Ft+")|"+so+qa,"g"),oo=RegExp([Bn+"?"+va+"+"+ba+"(?="+[ca,Bn,"$"].join("|")+")",no+"+"+Aa+"(?="+[ca,Bn+_a,"$"].join("|")+")",Bn+"?"+_a+"+"+ba,Bn+"+"+Aa,io,to,ma,ao].join("|"),"g"),fo=RegExp("["+ya+Rr+la+ga+"]"),go=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,po=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],co=-1,H={};H[bt]=H[At]=H[wt]=H[Tt]=H[qt]=H[Rt]=H[xt]=H[Pt]=H[Bt]=!0,H[xn]=H[br]=H[nr]=H[Yn]=H[Pn]=H[Zn]=H[Ar]=H[wr]=H[je]=H[Xn]=H[$e]=H[Jn]=H[Se]=H[Qn]=H[er]=!1;var W={};W[xn]=W[br]=W[nr]=W[Pn]=W[Yn]=W[Zn]=W[bt]=W[At]=W[wt]=W[Tt]=W[qt]=W[je]=W[Xn]=W[$e]=W[Jn]=W[Se]=W[Qn]=W[Tr]=W[Rt]=W[xt]=W[Pt]=W[Bt]=!0,W[Ar]=W[wr]=W[er]=!1;var mo={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},vo={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ho={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},ko={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},yo=parseFloat,_o=parseInt,Ra=typeof ct=="object"&&ct&&ct.Object===Object&&ct,bo=typeof self=="object"&&self&&self.Object===Object&&self,te=Ra||bo||Function("return this")(),Ot=_&&!_.nodeType&&_,mn=Ot&&!0&&p&&!p.nodeType&&p,xa=mn&&mn.exports===Ot,Mt=xa&&Ra.process,Ae=function(){try{var d=mn&&mn.require&&mn.require("util").types;return d||Mt&&Mt.binding&&Mt.binding("util")}catch{}}(),Pa=Ae&&Ae.isArrayBuffer,Ba=Ae&&Ae.isDate,Ea=Ae&&Ae.isMap,ja=Ae&&Ae.isRegExp,Sa=Ae&&Ae.isSet,Fa=Ae&&Ae.isTypedArray;function ve(d,c,g){switch(g.length){case 0:return d.call(c);case 1:return d.call(c,g[0]);case 2:return d.call(c,g[0],g[1]);case 3:return d.call(c,g[0],g[1],g[2])}return d.apply(c,g)}function Ao(d,c,g,b){for(var E=-1,M=d==null?0:d.length;++E<M;){var Q=d[E];c(b,Q,g(Q),d)}return b}function we(d,c){for(var g=-1,b=d==null?0:d.length;++g<b&&c(d[g],g,d)!==!1;);return d}function wo(d,c){for(var g=d==null?0:d.length;g--&&c(d[g],g,d)!==!1;);return d}function Ia(d,c){for(var g=-1,b=d==null?0:d.length;++g<b;)if(!c(d[g],g,d))return!1;return!0}function an(d,c){for(var g=-1,b=d==null?0:d.length,E=0,M=[];++g<b;){var Q=d[g];c(Q,g,d)&&(M[E++]=Q)}return M}function Pr(d,c){var g=d==null?0:d.length;return!!g&&En(d,c,0)>-1}function Ct(d,c,g){for(var b=-1,E=d==null?0:d.length;++b<E;)if(g(c,d[b]))return!0;return!1}function $(d,c){for(var g=-1,b=d==null?0:d.length,E=Array(b);++g<b;)E[g]=c(d[g],g,d);return E}function sn(d,c){for(var g=-1,b=c.length,E=d.length;++g<b;)d[E+g]=c[g];return d}function Dt(d,c,g,b){var E=-1,M=d==null?0:d.length;for(b&&M&&(g=d[++E]);++E<M;)g=c(g,d[E],E,d);return g}function To(d,c,g,b){var E=d==null?0:d.length;for(b&&E&&(g=d[--E]);E--;)g=c(g,d[E],E,d);return g}function Kt(d,c){for(var g=-1,b=d==null?0:d.length;++g<b;)if(c(d[g],g,d))return!0;return!1}var qo=Vt("length");function Ro(d){return d.split("")}function xo(d){return d.match(Il)||[]}function Na(d,c,g){var b;return g(d,function(E,M,Q){if(c(E,M,Q))return b=M,!1}),b}function Br(d,c,g,b){for(var E=d.length,M=g+(b?1:-1);b?M--:++M<E;)if(c(d[M],M,d))return M;return-1}function En(d,c,g){return c===c?Co(d,c,g):Br(d,La,g)}function Po(d,c,g,b){for(var E=g-1,M=d.length;++E<M;)if(b(d[E],c))return E;return-1}function La(d){return d!==d}function Oa(d,c){var g=d==null?0:d.length;return g?Wt(d,c)/g:_r}function Vt(d){return function(c){return c==null?u:c[d]}}function Ut(d){return function(c){return d==null?u:d[c]}}function Ma(d,c,g,b,E){return E(d,function(M,Q,U){g=b?(b=!1,M):c(g,M,Q,U)}),g}function Bo(d,c){var g=d.length;for(d.sort(c);g--;)d[g]=d[g].value;return d}function Wt(d,c){for(var g,b=-1,E=d.length;++b<E;){var M=c(d[b]);M!==u&&(g=g===u?M:g+M)}return g}function Gt(d,c){for(var g=-1,b=Array(d);++g<d;)b[g]=c(g);return b}function Eo(d,c){return $(c,function(g){return[g,d[g]]})}function Ca(d){return d&&d.slice(0,Ua(d)+1).replace(jt,"")}function he(d){return function(c){return d(c)}}function Ht(d,c){return $(c,function(g){return d[g]})}function rr(d,c){return d.has(c)}function Da(d,c){for(var g=-1,b=d.length;++g<b&&En(c,d[g],0)>-1;);return g}function Ka(d,c){for(var g=d.length;g--&&En(c,d[g],0)>-1;);return g}function jo(d,c){for(var g=d.length,b=0;g--;)d[g]===c&&++b;return b}var So=Ut(mo),Fo=Ut(vo);function Io(d){return"\\"+ko[d]}function No(d,c){return d==null?u:d[c]}function jn(d){return fo.test(d)}function Lo(d){return go.test(d)}function Oo(d){for(var c,g=[];!(c=d.next()).done;)g.push(c.value);return g}function $t(d){var c=-1,g=Array(d.size);return d.forEach(function(b,E){g[++c]=[E,b]}),g}function Va(d,c){return function(g){return d(c(g))}}function un(d,c){for(var g=-1,b=d.length,E=0,M=[];++g<b;){var Q=d[g];(Q===c||Q===V)&&(d[g]=V,M[E++]=g)}return M}function Er(d){var c=-1,g=Array(d.size);return d.forEach(function(b){g[++c]=b}),g}function Mo(d){var c=-1,g=Array(d.size);return d.forEach(function(b){g[++c]=[b,b]}),g}function Co(d,c,g){for(var b=g-1,E=d.length;++b<E;)if(d[b]===c)return b;return-1}function Do(d,c,g){for(var b=g+1;b--;)if(d[b]===c)return b;return b}function Sn(d){return jn(d)?Vo(d):qo(d)}function Fe(d){return jn(d)?Uo(d):Ro(d)}function Ua(d){for(var c=d.length;c--&&El.test(d.charAt(c)););return c}var Ko=Ut(ho);function Vo(d){for(var c=Lt.lastIndex=0;Lt.test(d);)++c;return c}function Uo(d){return d.match(Lt)||[]}function Wo(d){return d.match(oo)||[]}var Go=function d(c){c=c==null?te:Fn.defaults(te.Object(),c,Fn.pick(te,po));var g=c.Array,b=c.Date,E=c.Error,M=c.Function,Q=c.Math,U=c.Object,zt=c.RegExp,Ho=c.String,Te=c.TypeError,jr=g.prototype,$o=M.prototype,In=U.prototype,Sr=c["__core-js_shared__"],Fr=$o.toString,K=In.hasOwnProperty,zo=0,Wa=function(){var e=/[^.]+$/.exec(Sr&&Sr.keys&&Sr.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Ir=In.toString,Yo=Fr.call(U),Zo=te._,Xo=zt("^"+Fr.call(K).replace(Et,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Nr=xa?c.Buffer:u,ln=c.Symbol,Lr=c.Uint8Array,Ga=Nr?Nr.allocUnsafe:u,Or=Va(U.getPrototypeOf,U),Ha=U.create,$a=In.propertyIsEnumerable,Mr=jr.splice,za=ln?ln.isConcatSpreadable:u,tr=ln?ln.iterator:u,vn=ln?ln.toStringTag:u,Cr=function(){try{var e=bn(U,"defineProperty");return e({},"",{}),e}catch{}}(),Jo=c.clearTimeout!==te.clearTimeout&&c.clearTimeout,Qo=b&&b.now!==te.Date.now&&b.now,ed=c.setTimeout!==te.setTimeout&&c.setTimeout,Dr=Q.ceil,Kr=Q.floor,Yt=U.getOwnPropertySymbols,nd=Nr?Nr.isBuffer:u,Ya=c.isFinite,rd=jr.join,td=Va(U.keys,U),ee=Q.max,se=Q.min,id=b.now,ad=c.parseInt,Za=Q.random,sd=jr.reverse,Zt=bn(c,"DataView"),ir=bn(c,"Map"),Xt=bn(c,"Promise"),Nn=bn(c,"Set"),ar=bn(c,"WeakMap"),sr=bn(U,"create"),Vr=ar&&new ar,Ln={},ud=An(Zt),ld=An(ir),od=An(Xt),dd=An(Nn),fd=An(ar),Ur=ln?ln.prototype:u,ur=Ur?Ur.valueOf:u,Xa=Ur?Ur.toString:u;function a(e){if(Y(e)&&!j(e)&&!(e instanceof L)){if(e instanceof qe)return e;if(K.call(e,"__wrapped__"))return Js(e)}return new qe(e)}var On=function(){function e(){}return function(n){if(!z(n))return{};if(Ha)return Ha(n);e.prototype=n;var r=new e;return e.prototype=u,r}}();function Wr(){}function qe(e,n){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!n,this.__index__=0,this.__values__=u}a.templateSettings={escape:Tl,evaluate:ql,interpolate:sa,variable:"",imports:{_:a}},a.prototype=Wr.prototype,a.prototype.constructor=a,qe.prototype=On(Wr.prototype),qe.prototype.constructor=qe;function L(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Ce,this.__views__=[]}function gd(){var e=new L(this.__wrapped__);return e.__actions__=fe(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=fe(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=fe(this.__views__),e}function pd(){if(this.__filtered__){var e=new L(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function cd(){var e=this.__wrapped__.value(),n=this.__dir__,r=j(e),t=n<0,i=r?e.length:0,s=xf(0,i,this.__views__),l=s.start,o=s.end,f=o-l,m=t?o:l-1,v=this.__iteratees__,h=v.length,y=0,A=se(f,this.__takeCount__);if(!r||!t&&i==f&&A==f)return bs(e,this.__actions__);var T=[];e:for(;f--&&y<A;){m+=n;for(var F=-1,q=e[m];++F<h;){var N=v[F],O=N.iteratee,_e=N.type,de=O(q);if(_e==ul)q=de;else if(!de){if(_e==na)continue e;break e}}T[y++]=q}return T}L.prototype=On(Wr.prototype),L.prototype.constructor=L;function hn(e){var n=-1,r=e==null?0:e.length;for(this.clear();++n<r;){var t=e[n];this.set(t[0],t[1])}}function md(){this.__data__=sr?sr(null):{},this.size=0}function vd(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n}function hd(e){var n=this.__data__;if(sr){var r=n[e];return r===C?u:r}return K.call(n,e)?n[e]:u}function kd(e){var n=this.__data__;return sr?n[e]!==u:K.call(n,e)}function yd(e,n){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=sr&&n===u?C:n,this}hn.prototype.clear=md,hn.prototype.delete=vd,hn.prototype.get=hd,hn.prototype.has=kd,hn.prototype.set=yd;function ze(e){var n=-1,r=e==null?0:e.length;for(this.clear();++n<r;){var t=e[n];this.set(t[0],t[1])}}function _d(){this.__data__=[],this.size=0}function bd(e){var n=this.__data__,r=Gr(n,e);if(r<0)return!1;var t=n.length-1;return r==t?n.pop():Mr.call(n,r,1),--this.size,!0}function Ad(e){var n=this.__data__,r=Gr(n,e);return r<0?u:n[r][1]}function wd(e){return Gr(this.__data__,e)>-1}function Td(e,n){var r=this.__data__,t=Gr(r,e);return t<0?(++this.size,r.push([e,n])):r[t][1]=n,this}ze.prototype.clear=_d,ze.prototype.delete=bd,ze.prototype.get=Ad,ze.prototype.has=wd,ze.prototype.set=Td;function Ye(e){var n=-1,r=e==null?0:e.length;for(this.clear();++n<r;){var t=e[n];this.set(t[0],t[1])}}function qd(){this.size=0,this.__data__={hash:new hn,map:new(ir||ze),string:new hn}}function Rd(e){var n=tt(this,e).delete(e);return this.size-=n?1:0,n}function xd(e){return tt(this,e).get(e)}function Pd(e){return tt(this,e).has(e)}function Bd(e,n){var r=tt(this,e),t=r.size;return r.set(e,n),this.size+=r.size==t?0:1,this}Ye.prototype.clear=qd,Ye.prototype.delete=Rd,Ye.prototype.get=xd,Ye.prototype.has=Pd,Ye.prototype.set=Bd;function kn(e){var n=-1,r=e==null?0:e.length;for(this.__data__=new Ye;++n<r;)this.add(e[n])}function Ed(e){return this.__data__.set(e,C),this}function jd(e){return this.__data__.has(e)}kn.prototype.add=kn.prototype.push=Ed,kn.prototype.has=jd;function Ie(e){var n=this.__data__=new ze(e);this.size=n.size}function Sd(){this.__data__=new ze,this.size=0}function Fd(e){var n=this.__data__,r=n.delete(e);return this.size=n.size,r}function Id(e){return this.__data__.get(e)}function Nd(e){return this.__data__.has(e)}function Ld(e,n){var r=this.__data__;if(r instanceof ze){var t=r.__data__;if(!ir||t.length<R-1)return t.push([e,n]),this.size=++r.size,this;r=this.__data__=new Ye(t)}return r.set(e,n),this.size=r.size,this}Ie.prototype.clear=Sd,Ie.prototype.delete=Fd,Ie.prototype.get=Id,Ie.prototype.has=Nd,Ie.prototype.set=Ld;function Ja(e,n){var r=j(e),t=!r&&wn(e),i=!r&&!t&&pn(e),s=!r&&!t&&!i&&Kn(e),l=r||t||i||s,o=l?Gt(e.length,Ho):[],f=o.length;for(var m in e)(n||K.call(e,m))&&!(l&&(m=="length"||i&&(m=="offset"||m=="parent")||s&&(m=="buffer"||m=="byteLength"||m=="byteOffset")||Qe(m,f)))&&o.push(m);return o}function Qa(e){var n=e.length;return n?e[li(0,n-1)]:u}function Od(e,n){return it(fe(e),yn(n,0,e.length))}function Md(e){return it(fe(e))}function Jt(e,n,r){(r!==u&&!Ne(e[n],r)||r===u&&!(n in e))&&Ze(e,n,r)}function lr(e,n,r){var t=e[n];(!(K.call(e,n)&&Ne(t,r))||r===u&&!(n in e))&&Ze(e,n,r)}function Gr(e,n){for(var r=e.length;r--;)if(Ne(e[r][0],n))return r;return-1}function Cd(e,n,r,t){return on(e,function(i,s,l){n(t,i,r(i),l)}),t}function es(e,n){return e&&Ke(n,ne(n),e)}function Dd(e,n){return e&&Ke(n,pe(n),e)}function Ze(e,n,r){n=="__proto__"&&Cr?Cr(e,n,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[n]=r}function Qt(e,n){for(var r=-1,t=n.length,i=g(t),s=e==null;++r<t;)i[r]=s?u:Fi(e,n[r]);return i}function yn(e,n,r){return e===e&&(r!==u&&(e=e<=r?e:r),n!==u&&(e=e>=n?e:n)),e}function Re(e,n,r,t,i,s){var l,o=n&J,f=n&Ue,m=n&Me;if(r&&(l=i?r(e,t,i,s):r(e)),l!==u)return l;if(!z(e))return e;var v=j(e);if(v){if(l=Bf(e),!o)return fe(e,l)}else{var h=ue(e),y=h==wr||h==ra;if(pn(e))return Ts(e,o);if(h==$e||h==xn||y&&!i){if(l=f||y?{}:Us(e),!o)return f?kf(e,Dd(l,e)):hf(e,es(l,e))}else{if(!W[h])return i?e:{};l=Ef(e,h,o)}}s||(s=new Ie);var A=s.get(e);if(A)return A;s.set(e,l),ku(e)?e.forEach(function(q){l.add(Re(q,n,r,q,e,s))}):vu(e)&&e.forEach(function(q,N){l.set(N,Re(q,n,r,N,e,s))});var T=m?f?yi:ki:f?pe:ne,F=v?u:T(e);return we(F||e,function(q,N){F&&(N=q,q=e[N]),lr(l,N,Re(q,n,r,N,e,s))}),l}function Kd(e){var n=ne(e);return function(r){return ns(r,e,n)}}function ns(e,n,r){var t=r.length;if(e==null)return!t;for(e=U(e);t--;){var i=r[t],s=n[i],l=e[i];if(l===u&&!(i in e)||!s(l))return!1}return!0}function rs(e,n,r){if(typeof e!="function")throw new Te(B);return mr(function(){e.apply(u,r)},n)}function or(e,n,r,t){var i=-1,s=Pr,l=!0,o=e.length,f=[],m=n.length;if(!o)return f;r&&(n=$(n,he(r))),t?(s=Ct,l=!1):n.length>=R&&(s=rr,l=!1,n=new kn(n));e:for(;++i<o;){var v=e[i],h=r==null?v:r(v);if(v=t||v!==0?v:0,l&&h===h){for(var y=m;y--;)if(n[y]===h)continue e;f.push(v)}else s(n,h,t)||f.push(v)}return f}var on=Bs(De),ts=Bs(ni,!0);function Vd(e,n){var r=!0;return on(e,function(t,i,s){return r=!!n(t,i,s),r}),r}function Hr(e,n,r){for(var t=-1,i=e.length;++t<i;){var s=e[t],l=n(s);if(l!=null&&(o===u?l===l&&!ye(l):r(l,o)))var o=l,f=s}return f}function Ud(e,n,r,t){var i=e.length;for(r=S(r),r<0&&(r=-r>i?0:i+r),t=t===u||t>i?i:S(t),t<0&&(t+=i),t=r>t?0:_u(t);r<t;)e[r++]=n;return e}function is(e,n){var r=[];return on(e,function(t,i,s){n(t,i,s)&&r.push(t)}),r}function ie(e,n,r,t,i){var s=-1,l=e.length;for(r||(r=Sf),i||(i=[]);++s<l;){var o=e[s];n>0&&r(o)?n>1?ie(o,n-1,r,t,i):sn(i,o):t||(i[i.length]=o)}return i}var ei=Es(),as=Es(!0);function De(e,n){return e&&ei(e,n,ne)}function ni(e,n){return e&&as(e,n,ne)}function $r(e,n){return an(n,function(r){return en(e[r])})}function _n(e,n){n=fn(n,e);for(var r=0,t=n.length;e!=null&&r<t;)e=e[Ve(n[r++])];return r&&r==t?e:u}function ss(e,n,r){var t=n(e);return j(e)?t:sn(t,r(e))}function le(e){return e==null?e===u?hl:ml:vn&&vn in U(e)?Rf(e):Cf(e)}function ri(e,n){return e>n}function Wd(e,n){return e!=null&&K.call(e,n)}function Gd(e,n){return e!=null&&n in U(e)}function Hd(e,n,r){return e>=se(n,r)&&e<ee(n,r)}function ti(e,n,r){for(var t=r?Ct:Pr,i=e[0].length,s=e.length,l=s,o=g(s),f=1/0,m=[];l--;){var v=e[l];l&&n&&(v=$(v,he(n))),f=se(v.length,f),o[l]=!r&&(n||i>=120&&v.length>=120)?new kn(l&&v):u}v=e[0];var h=-1,y=o[0];e:for(;++h<i&&m.length<f;){var A=v[h],T=n?n(A):A;if(A=r||A!==0?A:0,!(y?rr(y,T):t(m,T,r))){for(l=s;--l;){var F=o[l];if(!(F?rr(F,T):t(e[l],T,r)))continue e}y&&y.push(T),m.push(A)}}return m}function $d(e,n,r,t){return De(e,function(i,s,l){n(t,r(i),s,l)}),t}function dr(e,n,r){n=fn(n,e),e=$s(e,n);var t=e==null?e:e[Ve(Pe(n))];return t==null?u:ve(t,e,r)}function us(e){return Y(e)&&le(e)==xn}function zd(e){return Y(e)&&le(e)==nr}function Yd(e){return Y(e)&&le(e)==Zn}function fr(e,n,r,t,i){return e===n?!0:e==null||n==null||!Y(e)&&!Y(n)?e!==e&&n!==n:Zd(e,n,r,t,fr,i)}function Zd(e,n,r,t,i,s){var l=j(e),o=j(n),f=l?br:ue(e),m=o?br:ue(n);f=f==xn?$e:f,m=m==xn?$e:m;var v=f==$e,h=m==$e,y=f==m;if(y&&pn(e)){if(!pn(n))return!1;l=!0,v=!1}if(y&&!v)return s||(s=new Ie),l||Kn(e)?Ds(e,n,r,t,i,s):Tf(e,n,f,r,t,i,s);if(!(r&re)){var A=v&&K.call(e,"__wrapped__"),T=h&&K.call(n,"__wrapped__");if(A||T){var F=A?e.value():e,q=T?n.value():n;return s||(s=new Ie),i(F,q,r,t,s)}}return y?(s||(s=new Ie),qf(e,n,r,t,i,s)):!1}function Xd(e){return Y(e)&&ue(e)==je}function ii(e,n,r,t){var i=r.length,s=i,l=!t;if(e==null)return!s;for(e=U(e);i--;){var o=r[i];if(l&&o[2]?o[1]!==e[o[0]]:!(o[0]in e))return!1}for(;++i<s;){o=r[i];var f=o[0],m=e[f],v=o[1];if(l&&o[2]){if(m===u&&!(f in e))return!1}else{var h=new Ie;if(t)var y=t(m,v,f,e,n,h);if(!(y===u?fr(v,m,re|tn,t,h):y))return!1}}return!0}function ls(e){if(!z(e)||If(e))return!1;var n=en(e)?Xo:Dl;return n.test(An(e))}function Jd(e){return Y(e)&&le(e)==Jn}function Qd(e){return Y(e)&&ue(e)==Se}function ef(e){return Y(e)&&dt(e.length)&&!!H[le(e)]}function os(e){return typeof e=="function"?e:e==null?ce:typeof e=="object"?j(e)?gs(e[0],e[1]):fs(e):ju(e)}function ai(e){if(!cr(e))return td(e);var n=[];for(var r in U(e))K.call(e,r)&&r!="constructor"&&n.push(r);return n}function nf(e){if(!z(e))return Mf(e);var n=cr(e),r=[];for(var t in e)t=="constructor"&&(n||!K.call(e,t))||r.push(t);return r}function si(e,n){return e<n}function ds(e,n){var r=-1,t=ge(e)?g(e.length):[];return on(e,function(i,s,l){t[++r]=n(i,s,l)}),t}function fs(e){var n=bi(e);return n.length==1&&n[0][2]?Gs(n[0][0],n[0][1]):function(r){return r===e||ii(r,e,n)}}function gs(e,n){return wi(e)&&Ws(n)?Gs(Ve(e),n):function(r){var t=Fi(r,e);return t===u&&t===n?Ii(r,e):fr(n,t,re|tn)}}function zr(e,n,r,t,i){e!==n&&ei(n,function(s,l){if(i||(i=new Ie),z(s))rf(e,n,l,r,zr,t,i);else{var o=t?t(qi(e,l),s,l+"",e,n,i):u;o===u&&(o=s),Jt(e,l,o)}},pe)}function rf(e,n,r,t,i,s,l){var o=qi(e,r),f=qi(n,r),m=l.get(f);if(m){Jt(e,r,m);return}var v=s?s(o,f,r+"",e,n,l):u,h=v===u;if(h){var y=j(f),A=!y&&pn(f),T=!y&&!A&&Kn(f);v=f,y||A||T?j(o)?v=o:Z(o)?v=fe(o):A?(h=!1,v=Ts(f,!0)):T?(h=!1,v=qs(f,!0)):v=[]:vr(f)||wn(f)?(v=o,wn(o)?v=bu(o):(!z(o)||en(o))&&(v=Us(f))):h=!1}h&&(l.set(f,v),i(v,f,t,s,l),l.delete(f)),Jt(e,r,v)}function ps(e,n){var r=e.length;if(r)return n+=n<0?r:0,Qe(n,r)?e[n]:u}function cs(e,n,r){n.length?n=$(n,function(s){return j(s)?function(l){return _n(l,s.length===1?s[0]:s)}:s}):n=[ce];var t=-1;n=$(n,he(w()));var i=ds(e,function(s,l,o){var f=$(n,function(m){return m(s)});return{criteria:f,index:++t,value:s}});return Bo(i,function(s,l){return vf(s,l,r)})}function tf(e,n){return ms(e,n,function(r,t){return Ii(e,t)})}function ms(e,n,r){for(var t=-1,i=n.length,s={};++t<i;){var l=n[t],o=_n(e,l);r(o,l)&&gr(s,fn(l,e),o)}return s}function af(e){return function(n){return _n(n,e)}}function ui(e,n,r,t){var i=t?Po:En,s=-1,l=n.length,o=e;for(e===n&&(n=fe(n)),r&&(o=$(e,he(r)));++s<l;)for(var f=0,m=n[s],v=r?r(m):m;(f=i(o,v,f,t))>-1;)o!==e&&Mr.call(o,f,1),Mr.call(e,f,1);return e}function vs(e,n){for(var r=e?n.length:0,t=r-1;r--;){var i=n[r];if(r==t||i!==s){var s=i;Qe(i)?Mr.call(e,i,1):fi(e,i)}}return e}function li(e,n){return e+Kr(Za()*(n-e+1))}function sf(e,n,r,t){for(var i=-1,s=ee(Dr((n-e)/(r||1)),0),l=g(s);s--;)l[t?s:++i]=e,e+=r;return l}function oi(e,n){var r="";if(!e||n<1||n>Rn)return r;do n%2&&(r+=e),n=Kr(n/2),n&&(e+=e);while(n);return r}function I(e,n){return Ri(Hs(e,n,ce),e+"")}function uf(e){return Qa(Vn(e))}function lf(e,n){var r=Vn(e);return it(r,yn(n,0,r.length))}function gr(e,n,r,t){if(!z(e))return e;n=fn(n,e);for(var i=-1,s=n.length,l=s-1,o=e;o!=null&&++i<s;){var f=Ve(n[i]),m=r;if(f==="__proto__"||f==="constructor"||f==="prototype")return e;if(i!=l){var v=o[f];m=t?t(v,f,o):u,m===u&&(m=z(v)?v:Qe(n[i+1])?[]:{})}lr(o,f,m),o=o[f]}return e}var hs=Vr?function(e,n){return Vr.set(e,n),e}:ce,of=Cr?function(e,n){return Cr(e,"toString",{configurable:!0,enumerable:!1,value:Li(n),writable:!0})}:ce;function df(e){return it(Vn(e))}function xe(e,n,r){var t=-1,i=e.length;n<0&&(n=-n>i?0:i+n),r=r>i?i:r,r<0&&(r+=i),i=n>r?0:r-n>>>0,n>>>=0;for(var s=g(i);++t<i;)s[t]=e[t+n];return s}function ff(e,n){var r;return on(e,function(t,i,s){return r=n(t,i,s),!r}),!!r}function Yr(e,n,r){var t=0,i=e==null?t:e.length;if(typeof n=="number"&&n===n&&i<=fl){for(;t<i;){var s=t+i>>>1,l=e[s];l!==null&&!ye(l)&&(r?l<=n:l<n)?t=s+1:i=s}return i}return di(e,n,ce,r)}function di(e,n,r,t){var i=0,s=e==null?0:e.length;if(s===0)return 0;n=r(n);for(var l=n!==n,o=n===null,f=ye(n),m=n===u;i<s;){var v=Kr((i+s)/2),h=r(e[v]),y=h!==u,A=h===null,T=h===h,F=ye(h);if(l)var q=t||T;else m?q=T&&(t||y):o?q=T&&y&&(t||!A):f?q=T&&y&&!A&&(t||!F):A||F?q=!1:q=t?h<=n:h<n;q?i=v+1:s=v}return se(s,dl)}function ks(e,n){for(var r=-1,t=e.length,i=0,s=[];++r<t;){var l=e[r],o=n?n(l):l;if(!r||!Ne(o,f)){var f=o;s[i++]=l===0?0:l}}return s}function ys(e){return typeof e=="number"?e:ye(e)?_r:+e}function ke(e){if(typeof e=="string")return e;if(j(e))return $(e,ke)+"";if(ye(e))return Xa?Xa.call(e):"";var n=e+"";return n=="0"&&1/e==-1/0?"-0":n}function dn(e,n,r){var t=-1,i=Pr,s=e.length,l=!0,o=[],f=o;if(r)l=!1,i=Ct;else if(s>=R){var m=n?null:Af(e);if(m)return Er(m);l=!1,i=rr,f=new kn}else f=n?[]:o;e:for(;++t<s;){var v=e[t],h=n?n(v):v;if(v=r||v!==0?v:0,l&&h===h){for(var y=f.length;y--;)if(f[y]===h)continue e;n&&f.push(h),o.push(v)}else i(f,h,r)||(f!==o&&f.push(h),o.push(v))}return o}function fi(e,n){return n=fn(n,e),e=$s(e,n),e==null||delete e[Ve(Pe(n))]}function _s(e,n,r,t){return gr(e,n,r(_n(e,n)),t)}function Zr(e,n,r,t){for(var i=e.length,s=t?i:-1;(t?s--:++s<i)&&n(e[s],s,e););return r?xe(e,t?0:s,t?s+1:i):xe(e,t?s+1:0,t?i:s)}function bs(e,n){var r=e;return r instanceof L&&(r=r.value()),Dt(n,function(t,i){return i.func.apply(i.thisArg,sn([t],i.args))},r)}function gi(e,n,r){var t=e.length;if(t<2)return t?dn(e[0]):[];for(var i=-1,s=g(t);++i<t;)for(var l=e[i],o=-1;++o<t;)o!=i&&(s[i]=or(s[i]||l,e[o],n,r));return dn(ie(s,1),n,r)}function As(e,n,r){for(var t=-1,i=e.length,s=n.length,l={};++t<i;){var o=t<s?n[t]:u;r(l,e[t],o)}return l}function pi(e){return Z(e)?e:[]}function ci(e){return typeof e=="function"?e:ce}function fn(e,n){return j(e)?e:wi(e,n)?[e]:Xs(D(e))}var gf=I;function gn(e,n,r){var t=e.length;return r=r===u?t:r,!n&&r>=t?e:xe(e,n,r)}var ws=Jo||function(e){return te.clearTimeout(e)};function Ts(e,n){if(n)return e.slice();var r=e.length,t=Ga?Ga(r):new e.constructor(r);return e.copy(t),t}function mi(e){var n=new e.constructor(e.byteLength);return new Lr(n).set(new Lr(e)),n}function pf(e,n){var r=n?mi(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}function cf(e){var n=new e.constructor(e.source,ua.exec(e));return n.lastIndex=e.lastIndex,n}function mf(e){return ur?U(ur.call(e)):{}}function qs(e,n){var r=n?mi(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function Rs(e,n){if(e!==n){var r=e!==u,t=e===null,i=e===e,s=ye(e),l=n!==u,o=n===null,f=n===n,m=ye(n);if(!o&&!m&&!s&&e>n||s&&l&&f&&!o&&!m||t&&l&&f||!r&&f||!i)return 1;if(!t&&!s&&!m&&e<n||m&&r&&i&&!t&&!s||o&&r&&i||!l&&i||!f)return-1}return 0}function vf(e,n,r){for(var t=-1,i=e.criteria,s=n.criteria,l=i.length,o=r.length;++t<l;){var f=Rs(i[t],s[t]);if(f){if(t>=o)return f;var m=r[t];return f*(m=="desc"?-1:1)}}return e.index-n.index}function xs(e,n,r,t){for(var i=-1,s=e.length,l=r.length,o=-1,f=n.length,m=ee(s-l,0),v=g(f+m),h=!t;++o<f;)v[o]=n[o];for(;++i<l;)(h||i<s)&&(v[r[i]]=e[i]);for(;m--;)v[o++]=e[i++];return v}function Ps(e,n,r,t){for(var i=-1,s=e.length,l=-1,o=r.length,f=-1,m=n.length,v=ee(s-o,0),h=g(v+m),y=!t;++i<v;)h[i]=e[i];for(var A=i;++f<m;)h[A+f]=n[f];for(;++l<o;)(y||i<s)&&(h[A+r[l]]=e[i++]);return h}function fe(e,n){var r=-1,t=e.length;for(n||(n=g(t));++r<t;)n[r]=e[r];return n}function Ke(e,n,r,t){var i=!r;r||(r={});for(var s=-1,l=n.length;++s<l;){var o=n[s],f=t?t(r[o],e[o],o,r,e):u;f===u&&(f=e[o]),i?Ze(r,o,f):lr(r,o,f)}return r}function hf(e,n){return Ke(e,Ai(e),n)}function kf(e,n){return Ke(e,Ks(e),n)}function Xr(e,n){return function(r,t){var i=j(r)?Ao:Cd,s=n?n():{};return i(r,e,w(t,2),s)}}function Mn(e){return I(function(n,r){var t=-1,i=r.length,s=i>1?r[i-1]:u,l=i>2?r[2]:u;for(s=e.length>3&&typeof s=="function"?(i--,s):u,l&&oe(r[0],r[1],l)&&(s=i<3?u:s,i=1),n=U(n);++t<i;){var o=r[t];o&&e(n,o,t,s)}return n})}function Bs(e,n){return function(r,t){if(r==null)return r;if(!ge(r))return e(r,t);for(var i=r.length,s=n?i:-1,l=U(r);(n?s--:++s<i)&&t(l[s],s,l)!==!1;);return r}}function Es(e){return function(n,r,t){for(var i=-1,s=U(n),l=t(n),o=l.length;o--;){var f=l[e?o:++i];if(r(s[f],f,s)===!1)break}return n}}function yf(e,n,r){var t=n&me,i=pr(e);function s(){var l=this&&this!==te&&this instanceof s?i:e;return l.apply(t?r:this,arguments)}return s}function js(e){return function(n){n=D(n);var r=jn(n)?Fe(n):u,t=r?r[0]:n.charAt(0),i=r?gn(r,1).join(""):n.slice(1);return t[e]()+i}}function Cn(e){return function(n){return Dt(Bu(Pu(n).replace(uo,"")),e,"")}}function pr(e){return function(){var n=arguments;switch(n.length){case 0:return new e;case 1:return new e(n[0]);case 2:return new e(n[0],n[1]);case 3:return new e(n[0],n[1],n[2]);case 4:return new e(n[0],n[1],n[2],n[3]);case 5:return new e(n[0],n[1],n[2],n[3],n[4]);case 6:return new e(n[0],n[1],n[2],n[3],n[4],n[5]);case 7:return new e(n[0],n[1],n[2],n[3],n[4],n[5],n[6])}var r=On(e.prototype),t=e.apply(r,n);return z(t)?t:r}}function _f(e,n,r){var t=pr(e);function i(){for(var s=arguments.length,l=g(s),o=s,f=Dn(i);o--;)l[o]=arguments[o];var m=s<3&&l[0]!==f&&l[s-1]!==f?[]:un(l,f);if(s-=m.length,s<r)return Ls(e,n,Jr,i.placeholder,u,l,m,u,u,r-s);var v=this&&this!==te&&this instanceof i?t:e;return ve(v,this,l)}return i}function Ss(e){return function(n,r,t){var i=U(n);if(!ge(n)){var s=w(r,3);n=ne(n),r=function(o){return s(i[o],o,i)}}var l=e(n,r,t);return l>-1?i[s?n[l]:l]:u}}function Fs(e){return Je(function(n){var r=n.length,t=r,i=qe.prototype.thru;for(e&&n.reverse();t--;){var s=n[t];if(typeof s!="function")throw new Te(B);if(i&&!l&&rt(s)=="wrapper")var l=new qe([],!0)}for(t=l?t:r;++t<r;){s=n[t];var o=rt(s),f=o=="wrapper"?_i(s):u;f&&Ti(f[0])&&f[1]==(He|We|Ge|zn)&&!f[4].length&&f[9]==1?l=l[rt(f[0])].apply(l,f[3]):l=s.length==1&&Ti(s)?l[o]():l.thru(s)}return function(){var m=arguments,v=m[0];if(l&&m.length==1&&j(v))return l.plant(v).value();for(var h=0,y=r?n[h].apply(this,m):v;++h<r;)y=n[h].call(this,y);return y}})}function Jr(e,n,r,t,i,s,l,o,f,m){var v=n&He,h=n&me,y=n&qn,A=n&(We|Hn),T=n&_t,F=y?u:pr(e);function q(){for(var N=arguments.length,O=g(N),_e=N;_e--;)O[_e]=arguments[_e];if(A)var de=Dn(q),be=jo(O,de);if(t&&(O=xs(O,t,i,A)),s&&(O=Ps(O,s,l,A)),N-=be,A&&N<m){var X=un(O,de);return Ls(e,n,Jr,q.placeholder,r,O,X,o,f,m-N)}var Le=h?r:this,rn=y?Le[e]:e;return N=O.length,o?O=Df(O,o):T&&N>1&&O.reverse(),v&&f<N&&(O.length=f),this&&this!==te&&this instanceof q&&(rn=F||pr(rn)),rn.apply(Le,O)}return q}function Is(e,n){return function(r,t){return $d(r,e,n(t),{})}}function Qr(e,n){return function(r,t){var i;if(r===u&&t===u)return n;if(r!==u&&(i=r),t!==u){if(i===u)return t;typeof r=="string"||typeof t=="string"?(r=ke(r),t=ke(t)):(r=ys(r),t=ys(t)),i=e(r,t)}return i}}function vi(e){return Je(function(n){return n=$(n,he(w())),I(function(r){var t=this;return e(n,function(i){return ve(i,t,r)})})})}function et(e,n){n=n===u?" ":ke(n);var r=n.length;if(r<2)return r?oi(n,e):n;var t=oi(n,Dr(e/Sn(n)));return jn(n)?gn(Fe(t),0,e).join(""):t.slice(0,e)}function bf(e,n,r,t){var i=n&me,s=pr(e);function l(){for(var o=-1,f=arguments.length,m=-1,v=t.length,h=g(v+f),y=this&&this!==te&&this instanceof l?s:e;++m<v;)h[m]=t[m];for(;f--;)h[m++]=arguments[++o];return ve(y,i?r:this,h)}return l}function Ns(e){return function(n,r,t){return t&&typeof t!="number"&&oe(n,r,t)&&(r=t=u),n=nn(n),r===u?(r=n,n=0):r=nn(r),t=t===u?n<r?1:-1:nn(t),sf(n,r,t,e)}}function nt(e){return function(n,r){return typeof n=="string"&&typeof r=="string"||(n=Be(n),r=Be(r)),e(n,r)}}function Ls(e,n,r,t,i,s,l,o,f,m){var v=n&We,h=v?l:u,y=v?u:l,A=v?s:u,T=v?u:s;n|=v?Ge:$n,n&=~(v?$n:Ge),n&ea||(n&=-4);var F=[e,n,i,A,h,T,y,o,f,m],q=r.apply(u,F);return Ti(e)&&zs(q,F),q.placeholder=t,Ys(q,e,n)}function hi(e){var n=Q[e];return function(r,t){if(r=Be(r),t=t==null?0:se(S(t),292),t&&Ya(r)){var i=(D(r)+"e").split("e"),s=n(i[0]+"e"+(+i[1]+t));return i=(D(s)+"e").split("e"),+(i[0]+"e"+(+i[1]-t))}return n(r)}}var Af=Nn&&1/Er(new Nn([,-0]))[1]==yr?function(e){return new Nn(e)}:Ci;function Os(e){return function(n){var r=ue(n);return r==je?$t(n):r==Se?Mo(n):Eo(n,e(n))}}function Xe(e,n,r,t,i,s,l,o){var f=n&qn;if(!f&&typeof e!="function")throw new Te(B);var m=t?t.length:0;if(m||(n&=-97,t=i=u),l=l===u?l:ee(S(l),0),o=o===u?o:S(o),m-=i?i.length:0,n&$n){var v=t,h=i;t=i=u}var y=f?u:_i(e),A=[e,n,r,t,i,v,h,s,l,o];if(y&&Of(A,y),e=A[0],n=A[1],r=A[2],t=A[3],i=A[4],o=A[9]=A[9]===u?f?0:e.length:ee(A[9]-m,0),!o&&n&(We|Hn)&&(n&=-25),!n||n==me)var T=yf(e,n,r);else n==We||n==Hn?T=_f(e,n,o):(n==Ge||n==(me|Ge))&&!i.length?T=bf(e,n,r,t):T=Jr.apply(u,A);var F=y?hs:zs;return Ys(F(T,A),e,n)}function Ms(e,n,r,t){return e===u||Ne(e,In[r])&&!K.call(t,r)?n:e}function Cs(e,n,r,t,i,s){return z(e)&&z(n)&&(s.set(n,e),zr(e,n,u,Cs,s),s.delete(n)),e}function wf(e){return vr(e)?u:e}function Ds(e,n,r,t,i,s){var l=r&re,o=e.length,f=n.length;if(o!=f&&!(l&&f>o))return!1;var m=s.get(e),v=s.get(n);if(m&&v)return m==n&&v==e;var h=-1,y=!0,A=r&tn?new kn:u;for(s.set(e,n),s.set(n,e);++h<o;){var T=e[h],F=n[h];if(t)var q=l?t(F,T,h,n,e,s):t(T,F,h,e,n,s);if(q!==u){if(q)continue;y=!1;break}if(A){if(!Kt(n,function(N,O){if(!rr(A,O)&&(T===N||i(T,N,r,t,s)))return A.push(O)})){y=!1;break}}else if(!(T===F||i(T,F,r,t,s))){y=!1;break}}return s.delete(e),s.delete(n),y}function Tf(e,n,r,t,i,s,l){switch(r){case Pn:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case nr:return!(e.byteLength!=n.byteLength||!s(new Lr(e),new Lr(n)));case Yn:case Zn:case Xn:return Ne(+e,+n);case Ar:return e.name==n.name&&e.message==n.message;case Jn:case Qn:return e==n+"";case je:var o=$t;case Se:var f=t&re;if(o||(o=Er),e.size!=n.size&&!f)return!1;var m=l.get(e);if(m)return m==n;t|=tn,l.set(e,n);var v=Ds(o(e),o(n),t,i,s,l);return l.delete(e),v;case Tr:if(ur)return ur.call(e)==ur.call(n)}return!1}function qf(e,n,r,t,i,s){var l=r&re,o=ki(e),f=o.length,m=ki(n),v=m.length;if(f!=v&&!l)return!1;for(var h=f;h--;){var y=o[h];if(!(l?y in n:K.call(n,y)))return!1}var A=s.get(e),T=s.get(n);if(A&&T)return A==n&&T==e;var F=!0;s.set(e,n),s.set(n,e);for(var q=l;++h<f;){y=o[h];var N=e[y],O=n[y];if(t)var _e=l?t(O,N,y,n,e,s):t(N,O,y,e,n,s);if(!(_e===u?N===O||i(N,O,r,t,s):_e)){F=!1;break}q||(q=y=="constructor")}if(F&&!q){var de=e.constructor,be=n.constructor;de!=be&&"constructor"in e&&"constructor"in n&&!(typeof de=="function"&&de instanceof de&&typeof be=="function"&&be instanceof be)&&(F=!1)}return s.delete(e),s.delete(n),F}function Je(e){return Ri(Hs(e,u,nu),e+"")}function ki(e){return ss(e,ne,Ai)}function yi(e){return ss(e,pe,Ks)}var _i=Vr?function(e){return Vr.get(e)}:Ci;function rt(e){for(var n=e.name+"",r=Ln[n],t=K.call(Ln,n)?r.length:0;t--;){var i=r[t],s=i.func;if(s==null||s==e)return i.name}return n}function Dn(e){var n=K.call(a,"placeholder")?a:e;return n.placeholder}function w(){var e=a.iteratee||Oi;return e=e===Oi?os:e,arguments.length?e(arguments[0],arguments[1]):e}function tt(e,n){var r=e.__data__;return Ff(n)?r[typeof n=="string"?"string":"hash"]:r.map}function bi(e){for(var n=ne(e),r=n.length;r--;){var t=n[r],i=e[t];n[r]=[t,i,Ws(i)]}return n}function bn(e,n){var r=No(e,n);return ls(r)?r:u}function Rf(e){var n=K.call(e,vn),r=e[vn];try{e[vn]=u;var t=!0}catch{}var i=Ir.call(e);return t&&(n?e[vn]=r:delete e[vn]),i}var Ai=Yt?function(e){return e==null?[]:(e=U(e),an(Yt(e),function(n){return $a.call(e,n)}))}:Di,Ks=Yt?function(e){for(var n=[];e;)sn(n,Ai(e)),e=Or(e);return n}:Di,ue=le;(Zt&&ue(new Zt(new ArrayBuffer(1)))!=Pn||ir&&ue(new ir)!=je||Xt&&ue(Xt.resolve())!=ta||Nn&&ue(new Nn)!=Se||ar&&ue(new ar)!=er)&&(ue=function(e){var n=le(e),r=n==$e?e.constructor:u,t=r?An(r):"";if(t)switch(t){case ud:return Pn;case ld:return je;case od:return ta;case dd:return Se;case fd:return er}return n});function xf(e,n,r){for(var t=-1,i=r.length;++t<i;){var s=r[t],l=s.size;switch(s.type){case"drop":e+=l;break;case"dropRight":n-=l;break;case"take":n=se(n,e+l);break;case"takeRight":e=ee(e,n-l);break}}return{start:e,end:n}}function Pf(e){var n=e.match(Sl);return n?n[1].split(Fl):[]}function Vs(e,n,r){n=fn(n,e);for(var t=-1,i=n.length,s=!1;++t<i;){var l=Ve(n[t]);if(!(s=e!=null&&r(e,l)))break;e=e[l]}return s||++t!=i?s:(i=e==null?0:e.length,!!i&&dt(i)&&Qe(l,i)&&(j(e)||wn(e)))}function Bf(e){var n=e.length,r=new e.constructor(n);return n&&typeof e[0]=="string"&&K.call(e,"index")&&(r.index=e.index,r.input=e.input),r}function Us(e){return typeof e.constructor=="function"&&!cr(e)?On(Or(e)):{}}function Ef(e,n,r){var t=e.constructor;switch(n){case nr:return mi(e);case Yn:case Zn:return new t(+e);case Pn:return pf(e,r);case bt:case At:case wt:case Tt:case qt:case Rt:case xt:case Pt:case Bt:return qs(e,r);case je:return new t;case Xn:case Qn:return new t(e);case Jn:return cf(e);case Se:return new t;case Tr:return mf(e)}}function jf(e,n){var r=n.length;if(!r)return e;var t=r-1;return n[t]=(r>1?"& ":"")+n[t],n=n.join(r>2?", ":" "),e.replace(jl,`{
/* [wrapped with `+n+`] */
`)}function Sf(e){return j(e)||wn(e)||!!(za&&e&&e[za])}function Qe(e,n){var r=typeof e;return n=n??Rn,!!n&&(r=="number"||r!="symbol"&&Vl.test(e))&&e>-1&&e%1==0&&e<n}function oe(e,n,r){if(!z(r))return!1;var t=typeof n;return(t=="number"?ge(r)&&Qe(n,r.length):t=="string"&&n in r)?Ne(r[n],e):!1}function wi(e,n){if(j(e))return!1;var r=typeof e;return r=="number"||r=="symbol"||r=="boolean"||e==null||ye(e)?!0:xl.test(e)||!Rl.test(e)||n!=null&&e in U(n)}function Ff(e){var n=typeof e;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?e!=="__proto__":e===null}function Ti(e){var n=rt(e),r=a[n];if(typeof r!="function"||!(n in L.prototype))return!1;if(e===r)return!0;var t=_i(r);return!!t&&e===t[0]}function If(e){return!!Wa&&Wa in e}var Nf=Sr?en:Ki;function cr(e){var n=e&&e.constructor,r=typeof n=="function"&&n.prototype||In;return e===r}function Ws(e){return e===e&&!z(e)}function Gs(e,n){return function(r){return r==null?!1:r[e]===n&&(n!==u||e in U(r))}}function Lf(e){var n=lt(e,function(t){return r.size===ae&&r.clear(),t}),r=n.cache;return n}function Of(e,n){var r=e[1],t=n[1],i=r|t,s=i<(me|qn|He),l=t==He&&r==We||t==He&&r==zn&&e[7].length<=n[8]||t==(He|zn)&&n[7].length<=n[8]&&r==We;if(!(s||l))return e;t&me&&(e[2]=n[2],i|=r&me?0:ea);var o=n[3];if(o){var f=e[3];e[3]=f?xs(f,o,n[4]):o,e[4]=f?un(e[3],V):n[4]}return o=n[5],o&&(f=e[5],e[5]=f?Ps(f,o,n[6]):o,e[6]=f?un(e[5],V):n[6]),o=n[7],o&&(e[7]=o),t&He&&(e[8]=e[8]==null?n[8]:se(e[8],n[8])),e[9]==null&&(e[9]=n[9]),e[0]=n[0],e[1]=i,e}function Mf(e){var n=[];if(e!=null)for(var r in U(e))n.push(r);return n}function Cf(e){return Ir.call(e)}function Hs(e,n,r){return n=ee(n===u?e.length-1:n,0),function(){for(var t=arguments,i=-1,s=ee(t.length-n,0),l=g(s);++i<s;)l[i]=t[n+i];i=-1;for(var o=g(n+1);++i<n;)o[i]=t[i];return o[n]=r(l),ve(e,this,o)}}function $s(e,n){return n.length<2?e:_n(e,xe(n,0,-1))}function Df(e,n){for(var r=e.length,t=se(n.length,r),i=fe(e);t--;){var s=n[t];e[t]=Qe(s,r)?i[s]:u}return e}function qi(e,n){if(!(n==="constructor"&&typeof e[n]=="function")&&n!="__proto__")return e[n]}var zs=Zs(hs),mr=ed||function(e,n){return te.setTimeout(e,n)},Ri=Zs(of);function Ys(e,n,r){var t=n+"";return Ri(e,jf(t,Kf(Pf(t),r)))}function Zs(e){var n=0,r=0;return function(){var t=id(),i=sl-(t-r);if(r=t,i>0){if(++n>=al)return arguments[0]}else n=0;return e.apply(u,arguments)}}function it(e,n){var r=-1,t=e.length,i=t-1;for(n=n===u?t:n;++r<n;){var s=li(r,i),l=e[s];e[s]=e[r],e[r]=l}return e.length=n,e}var Xs=Lf(function(e){var n=[];return e.charCodeAt(0)===46&&n.push(""),e.replace(Pl,function(r,t,i,s){n.push(i?s.replace(Ll,"$1"):t||r)}),n});function Ve(e){if(typeof e=="string"||ye(e))return e;var n=e+"";return n=="0"&&1/e==-1/0?"-0":n}function An(e){if(e!=null){try{return Fr.call(e)}catch{}try{return e+""}catch{}}return""}function Kf(e,n){return we(gl,function(r){var t="_."+r[0];n&r[1]&&!Pr(e,t)&&e.push(t)}),e.sort()}function Js(e){if(e instanceof L)return e.clone();var n=new qe(e.__wrapped__,e.__chain__);return n.__actions__=fe(e.__actions__),n.__index__=e.__index__,n.__values__=e.__values__,n}function Vf(e,n,r){(r?oe(e,n,r):n===u)?n=1:n=ee(S(n),0);var t=e==null?0:e.length;if(!t||n<1)return[];for(var i=0,s=0,l=g(Dr(t/n));i<t;)l[s++]=xe(e,i,i+=n);return l}function Uf(e){for(var n=-1,r=e==null?0:e.length,t=0,i=[];++n<r;){var s=e[n];s&&(i[t++]=s)}return i}function Wf(){var e=arguments.length;if(!e)return[];for(var n=g(e-1),r=arguments[0],t=e;t--;)n[t-1]=arguments[t];return sn(j(r)?fe(r):[r],ie(n,1))}var Gf=I(function(e,n){return Z(e)?or(e,ie(n,1,Z,!0)):[]}),Hf=I(function(e,n){var r=Pe(n);return Z(r)&&(r=u),Z(e)?or(e,ie(n,1,Z,!0),w(r,2)):[]}),$f=I(function(e,n){var r=Pe(n);return Z(r)&&(r=u),Z(e)?or(e,ie(n,1,Z,!0),u,r):[]});function zf(e,n,r){var t=e==null?0:e.length;return t?(n=r||n===u?1:S(n),xe(e,n<0?0:n,t)):[]}function Yf(e,n,r){var t=e==null?0:e.length;return t?(n=r||n===u?1:S(n),n=t-n,xe(e,0,n<0?0:n)):[]}function Zf(e,n){return e&&e.length?Zr(e,w(n,3),!0,!0):[]}function Xf(e,n){return e&&e.length?Zr(e,w(n,3),!0):[]}function Jf(e,n,r,t){var i=e==null?0:e.length;return i?(r&&typeof r!="number"&&oe(e,n,r)&&(r=0,t=i),Ud(e,n,r,t)):[]}function Qs(e,n,r){var t=e==null?0:e.length;if(!t)return-1;var i=r==null?0:S(r);return i<0&&(i=ee(t+i,0)),Br(e,w(n,3),i)}function eu(e,n,r){var t=e==null?0:e.length;if(!t)return-1;var i=t-1;return r!==u&&(i=S(r),i=r<0?ee(t+i,0):se(i,t-1)),Br(e,w(n,3),i,!0)}function nu(e){var n=e==null?0:e.length;return n?ie(e,1):[]}function Qf(e){var n=e==null?0:e.length;return n?ie(e,yr):[]}function eg(e,n){var r=e==null?0:e.length;return r?(n=n===u?1:S(n),ie(e,n)):[]}function ng(e){for(var n=-1,r=e==null?0:e.length,t={};++n<r;){var i=e[n];t[i[0]]=i[1]}return t}function ru(e){return e&&e.length?e[0]:u}function rg(e,n,r){var t=e==null?0:e.length;if(!t)return-1;var i=r==null?0:S(r);return i<0&&(i=ee(t+i,0)),En(e,n,i)}function tg(e){var n=e==null?0:e.length;return n?xe(e,0,-1):[]}var ig=I(function(e){var n=$(e,pi);return n.length&&n[0]===e[0]?ti(n):[]}),ag=I(function(e){var n=Pe(e),r=$(e,pi);return n===Pe(r)?n=u:r.pop(),r.length&&r[0]===e[0]?ti(r,w(n,2)):[]}),sg=I(function(e){var n=Pe(e),r=$(e,pi);return n=typeof n=="function"?n:u,n&&r.pop(),r.length&&r[0]===e[0]?ti(r,u,n):[]});function ug(e,n){return e==null?"":rd.call(e,n)}function Pe(e){var n=e==null?0:e.length;return n?e[n-1]:u}function lg(e,n,r){var t=e==null?0:e.length;if(!t)return-1;var i=t;return r!==u&&(i=S(r),i=i<0?ee(t+i,0):se(i,t-1)),n===n?Do(e,n,i):Br(e,La,i,!0)}function og(e,n){return e&&e.length?ps(e,S(n)):u}var dg=I(tu);function tu(e,n){return e&&e.length&&n&&n.length?ui(e,n):e}function fg(e,n,r){return e&&e.length&&n&&n.length?ui(e,n,w(r,2)):e}function gg(e,n,r){return e&&e.length&&n&&n.length?ui(e,n,u,r):e}var pg=Je(function(e,n){var r=e==null?0:e.length,t=Qt(e,n);return vs(e,$(n,function(i){return Qe(i,r)?+i:i}).sort(Rs)),t});function cg(e,n){var r=[];if(!(e&&e.length))return r;var t=-1,i=[],s=e.length;for(n=w(n,3);++t<s;){var l=e[t];n(l,t,e)&&(r.push(l),i.push(t))}return vs(e,i),r}function xi(e){return e==null?e:sd.call(e)}function mg(e,n,r){var t=e==null?0:e.length;return t?(r&&typeof r!="number"&&oe(e,n,r)?(n=0,r=t):(n=n==null?0:S(n),r=r===u?t:S(r)),xe(e,n,r)):[]}function vg(e,n){return Yr(e,n)}function hg(e,n,r){return di(e,n,w(r,2))}function kg(e,n){var r=e==null?0:e.length;if(r){var t=Yr(e,n);if(t<r&&Ne(e[t],n))return t}return-1}function yg(e,n){return Yr(e,n,!0)}function _g(e,n,r){return di(e,n,w(r,2),!0)}function bg(e,n){var r=e==null?0:e.length;if(r){var t=Yr(e,n,!0)-1;if(Ne(e[t],n))return t}return-1}function Ag(e){return e&&e.length?ks(e):[]}function wg(e,n){return e&&e.length?ks(e,w(n,2)):[]}function Tg(e){var n=e==null?0:e.length;return n?xe(e,1,n):[]}function qg(e,n,r){return e&&e.length?(n=r||n===u?1:S(n),xe(e,0,n<0?0:n)):[]}function Rg(e,n,r){var t=e==null?0:e.length;return t?(n=r||n===u?1:S(n),n=t-n,xe(e,n<0?0:n,t)):[]}function xg(e,n){return e&&e.length?Zr(e,w(n,3),!1,!0):[]}function Pg(e,n){return e&&e.length?Zr(e,w(n,3)):[]}var Bg=I(function(e){return dn(ie(e,1,Z,!0))}),Eg=I(function(e){var n=Pe(e);return Z(n)&&(n=u),dn(ie(e,1,Z,!0),w(n,2))}),jg=I(function(e){var n=Pe(e);return n=typeof n=="function"?n:u,dn(ie(e,1,Z,!0),u,n)});function Sg(e){return e&&e.length?dn(e):[]}function Fg(e,n){return e&&e.length?dn(e,w(n,2)):[]}function Ig(e,n){return n=typeof n=="function"?n:u,e&&e.length?dn(e,u,n):[]}function Pi(e){if(!(e&&e.length))return[];var n=0;return e=an(e,function(r){if(Z(r))return n=ee(r.length,n),!0}),Gt(n,function(r){return $(e,Vt(r))})}function iu(e,n){if(!(e&&e.length))return[];var r=Pi(e);return n==null?r:$(r,function(t){return ve(n,u,t)})}var Ng=I(function(e,n){return Z(e)?or(e,n):[]}),Lg=I(function(e){return gi(an(e,Z))}),Og=I(function(e){var n=Pe(e);return Z(n)&&(n=u),gi(an(e,Z),w(n,2))}),Mg=I(function(e){var n=Pe(e);return n=typeof n=="function"?n:u,gi(an(e,Z),u,n)}),Cg=I(Pi);function Dg(e,n){return As(e||[],n||[],lr)}function Kg(e,n){return As(e||[],n||[],gr)}var Vg=I(function(e){var n=e.length,r=n>1?e[n-1]:u;return r=typeof r=="function"?(e.pop(),r):u,iu(e,r)});function au(e){var n=a(e);return n.__chain__=!0,n}function Ug(e,n){return n(e),e}function at(e,n){return n(e)}var Wg=Je(function(e){var n=e.length,r=n?e[0]:0,t=this.__wrapped__,i=function(s){return Qt(s,e)};return n>1||this.__actions__.length||!(t instanceof L)||!Qe(r)?this.thru(i):(t=t.slice(r,+r+(n?1:0)),t.__actions__.push({func:at,args:[i],thisArg:u}),new qe(t,this.__chain__).thru(function(s){return n&&!s.length&&s.push(u),s}))});function Gg(){return au(this)}function Hg(){return new qe(this.value(),this.__chain__)}function $g(){this.__values__===u&&(this.__values__=yu(this.value()));var e=this.__index__>=this.__values__.length,n=e?u:this.__values__[this.__index__++];return{done:e,value:n}}function zg(){return this}function Yg(e){for(var n,r=this;r instanceof Wr;){var t=Js(r);t.__index__=0,t.__values__=u,n?i.__wrapped__=t:n=t;var i=t;r=r.__wrapped__}return i.__wrapped__=e,n}function Zg(){var e=this.__wrapped__;if(e instanceof L){var n=e;return this.__actions__.length&&(n=new L(this)),n=n.reverse(),n.__actions__.push({func:at,args:[xi],thisArg:u}),new qe(n,this.__chain__)}return this.thru(xi)}function Xg(){return bs(this.__wrapped__,this.__actions__)}var Jg=Xr(function(e,n,r){K.call(e,r)?++e[r]:Ze(e,r,1)});function Qg(e,n,r){var t=j(e)?Ia:Vd;return r&&oe(e,n,r)&&(n=u),t(e,w(n,3))}function ep(e,n){var r=j(e)?an:is;return r(e,w(n,3))}var np=Ss(Qs),rp=Ss(eu);function tp(e,n){return ie(st(e,n),1)}function ip(e,n){return ie(st(e,n),yr)}function ap(e,n,r){return r=r===u?1:S(r),ie(st(e,n),r)}function su(e,n){var r=j(e)?we:on;return r(e,w(n,3))}function uu(e,n){var r=j(e)?wo:ts;return r(e,w(n,3))}var sp=Xr(function(e,n,r){K.call(e,r)?e[r].push(n):Ze(e,r,[n])});function up(e,n,r,t){e=ge(e)?e:Vn(e),r=r&&!t?S(r):0;var i=e.length;return r<0&&(r=ee(i+r,0)),ft(e)?r<=i&&e.indexOf(n,r)>-1:!!i&&En(e,n,r)>-1}var lp=I(function(e,n,r){var t=-1,i=typeof n=="function",s=ge(e)?g(e.length):[];return on(e,function(l){s[++t]=i?ve(n,l,r):dr(l,n,r)}),s}),op=Xr(function(e,n,r){Ze(e,r,n)});function st(e,n){var r=j(e)?$:ds;return r(e,w(n,3))}function dp(e,n,r,t){return e==null?[]:(j(n)||(n=n==null?[]:[n]),r=t?u:r,j(r)||(r=r==null?[]:[r]),cs(e,n,r))}var fp=Xr(function(e,n,r){e[r?0:1].push(n)},function(){return[[],[]]});function gp(e,n,r){var t=j(e)?Dt:Ma,i=arguments.length<3;return t(e,w(n,4),r,i,on)}function pp(e,n,r){var t=j(e)?To:Ma,i=arguments.length<3;return t(e,w(n,4),r,i,ts)}function cp(e,n){var r=j(e)?an:is;return r(e,ot(w(n,3)))}function mp(e){var n=j(e)?Qa:uf;return n(e)}function vp(e,n,r){(r?oe(e,n,r):n===u)?n=1:n=S(n);var t=j(e)?Od:lf;return t(e,n)}function hp(e){var n=j(e)?Md:df;return n(e)}function kp(e){if(e==null)return 0;if(ge(e))return ft(e)?Sn(e):e.length;var n=ue(e);return n==je||n==Se?e.size:ai(e).length}function yp(e,n,r){var t=j(e)?Kt:ff;return r&&oe(e,n,r)&&(n=u),t(e,w(n,3))}var _p=I(function(e,n){if(e==null)return[];var r=n.length;return r>1&&oe(e,n[0],n[1])?n=[]:r>2&&oe(n[0],n[1],n[2])&&(n=[n[0]]),cs(e,ie(n,1),[])}),ut=Qo||function(){return te.Date.now()};function bp(e,n){if(typeof n!="function")throw new Te(B);return e=S(e),function(){if(--e<1)return n.apply(this,arguments)}}function lu(e,n,r){return n=r?u:n,n=e&&n==null?e.length:n,Xe(e,He,u,u,u,u,n)}function ou(e,n){var r;if(typeof n!="function")throw new Te(B);return e=S(e),function(){return--e>0&&(r=n.apply(this,arguments)),e<=1&&(n=u),r}}var Bi=I(function(e,n,r){var t=me;if(r.length){var i=un(r,Dn(Bi));t|=Ge}return Xe(e,t,n,r,i)}),du=I(function(e,n,r){var t=me|qn;if(r.length){var i=un(r,Dn(du));t|=Ge}return Xe(n,t,e,r,i)});function fu(e,n,r){n=r?u:n;var t=Xe(e,We,u,u,u,u,u,n);return t.placeholder=fu.placeholder,t}function gu(e,n,r){n=r?u:n;var t=Xe(e,Hn,u,u,u,u,u,n);return t.placeholder=gu.placeholder,t}function pu(e,n,r){var t,i,s,l,o,f,m=0,v=!1,h=!1,y=!0;if(typeof e!="function")throw new Te(B);n=Be(n)||0,z(r)&&(v=!!r.leading,h="maxWait"in r,s=h?ee(Be(r.maxWait)||0,n):s,y="trailing"in r?!!r.trailing:y);function A(X){var Le=t,rn=i;return t=i=u,m=X,l=e.apply(rn,Le),l}function T(X){return m=X,o=mr(N,n),v?A(X):l}function F(X){var Le=X-f,rn=X-m,Su=n-Le;return h?se(Su,s-rn):Su}function q(X){var Le=X-f,rn=X-m;return f===u||Le>=n||Le<0||h&&rn>=s}function N(){var X=ut();if(q(X))return O(X);o=mr(N,F(X))}function O(X){return o=u,y&&t?A(X):(t=i=u,l)}function _e(){o!==u&&ws(o),m=0,t=f=i=o=u}function de(){return o===u?l:O(ut())}function be(){var X=ut(),Le=q(X);if(t=arguments,i=this,f=X,Le){if(o===u)return T(f);if(h)return ws(o),o=mr(N,n),A(f)}return o===u&&(o=mr(N,n)),l}return be.cancel=_e,be.flush=de,be}var Ap=I(function(e,n){return rs(e,1,n)}),wp=I(function(e,n,r){return rs(e,Be(n)||0,r)});function Tp(e){return Xe(e,_t)}function lt(e,n){if(typeof e!="function"||n!=null&&typeof n!="function")throw new Te(B);var r=function(){var t=arguments,i=n?n.apply(this,t):t[0],s=r.cache;if(s.has(i))return s.get(i);var l=e.apply(this,t);return r.cache=s.set(i,l)||s,l};return r.cache=new(lt.Cache||Ye),r}lt.Cache=Ye;function ot(e){if(typeof e!="function")throw new Te(B);return function(){var n=arguments;switch(n.length){case 0:return!e.call(this);case 1:return!e.call(this,n[0]);case 2:return!e.call(this,n[0],n[1]);case 3:return!e.call(this,n[0],n[1],n[2])}return!e.apply(this,n)}}function qp(e){return ou(2,e)}var Rp=gf(function(e,n){n=n.length==1&&j(n[0])?$(n[0],he(w())):$(ie(n,1),he(w()));var r=n.length;return I(function(t){for(var i=-1,s=se(t.length,r);++i<s;)t[i]=n[i].call(this,t[i]);return ve(e,this,t)})}),Ei=I(function(e,n){var r=un(n,Dn(Ei));return Xe(e,Ge,u,n,r)}),cu=I(function(e,n){var r=un(n,Dn(cu));return Xe(e,$n,u,n,r)}),xp=Je(function(e,n){return Xe(e,zn,u,u,u,n)});function Pp(e,n){if(typeof e!="function")throw new Te(B);return n=n===u?n:S(n),I(e,n)}function Bp(e,n){if(typeof e!="function")throw new Te(B);return n=n==null?0:ee(S(n),0),I(function(r){var t=r[n],i=gn(r,0,n);return t&&sn(i,t),ve(e,this,i)})}function Ep(e,n,r){var t=!0,i=!0;if(typeof e!="function")throw new Te(B);return z(r)&&(t="leading"in r?!!r.leading:t,i="trailing"in r?!!r.trailing:i),pu(e,n,{leading:t,maxWait:n,trailing:i})}function jp(e){return lu(e,1)}function Sp(e,n){return Ei(ci(n),e)}function Fp(){if(!arguments.length)return[];var e=arguments[0];return j(e)?e:[e]}function Ip(e){return Re(e,Me)}function Np(e,n){return n=typeof n=="function"?n:u,Re(e,Me,n)}function Lp(e){return Re(e,J|Me)}function Op(e,n){return n=typeof n=="function"?n:u,Re(e,J|Me,n)}function Mp(e,n){return n==null||ns(e,n,ne(n))}function Ne(e,n){return e===n||e!==e&&n!==n}var Cp=nt(ri),Dp=nt(function(e,n){return e>=n}),wn=us(function(){return arguments}())?us:function(e){return Y(e)&&K.call(e,"callee")&&!$a.call(e,"callee")},j=g.isArray,Kp=Pa?he(Pa):zd;function ge(e){return e!=null&&dt(e.length)&&!en(e)}function Z(e){return Y(e)&&ge(e)}function Vp(e){return e===!0||e===!1||Y(e)&&le(e)==Yn}var pn=nd||Ki,Up=Ba?he(Ba):Yd;function Wp(e){return Y(e)&&e.nodeType===1&&!vr(e)}function Gp(e){if(e==null)return!0;if(ge(e)&&(j(e)||typeof e=="string"||typeof e.splice=="function"||pn(e)||Kn(e)||wn(e)))return!e.length;var n=ue(e);if(n==je||n==Se)return!e.size;if(cr(e))return!ai(e).length;for(var r in e)if(K.call(e,r))return!1;return!0}function Hp(e,n){return fr(e,n)}function $p(e,n,r){r=typeof r=="function"?r:u;var t=r?r(e,n):u;return t===u?fr(e,n,u,r):!!t}function ji(e){if(!Y(e))return!1;var n=le(e);return n==Ar||n==cl||typeof e.message=="string"&&typeof e.name=="string"&&!vr(e)}function zp(e){return typeof e=="number"&&Ya(e)}function en(e){if(!z(e))return!1;var n=le(e);return n==wr||n==ra||n==pl||n==vl}function mu(e){return typeof e=="number"&&e==S(e)}function dt(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Rn}function z(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}function Y(e){return e!=null&&typeof e=="object"}var vu=Ea?he(Ea):Xd;function Yp(e,n){return e===n||ii(e,n,bi(n))}function Zp(e,n,r){return r=typeof r=="function"?r:u,ii(e,n,bi(n),r)}function Xp(e){return hu(e)&&e!=+e}function Jp(e){if(Nf(e))throw new E(P);return ls(e)}function Qp(e){return e===null}function ec(e){return e==null}function hu(e){return typeof e=="number"||Y(e)&&le(e)==Xn}function vr(e){if(!Y(e)||le(e)!=$e)return!1;var n=Or(e);if(n===null)return!0;var r=K.call(n,"constructor")&&n.constructor;return typeof r=="function"&&r instanceof r&&Fr.call(r)==Yo}var Si=ja?he(ja):Jd;function nc(e){return mu(e)&&e>=-9007199254740991&&e<=Rn}var ku=Sa?he(Sa):Qd;function ft(e){return typeof e=="string"||!j(e)&&Y(e)&&le(e)==Qn}function ye(e){return typeof e=="symbol"||Y(e)&&le(e)==Tr}var Kn=Fa?he(Fa):ef;function rc(e){return e===u}function tc(e){return Y(e)&&ue(e)==er}function ic(e){return Y(e)&&le(e)==kl}var ac=nt(si),sc=nt(function(e,n){return e<=n});function yu(e){if(!e)return[];if(ge(e))return ft(e)?Fe(e):fe(e);if(tr&&e[tr])return Oo(e[tr]());var n=ue(e),r=n==je?$t:n==Se?Er:Vn;return r(e)}function nn(e){if(!e)return e===0?e:0;if(e=Be(e),e===yr||e===-1/0){var n=e<0?-1:1;return n*ol}return e===e?e:0}function S(e){var n=nn(e),r=n%1;return n===n?r?n-r:n:0}function _u(e){return e?yn(S(e),0,Ce):0}function Be(e){if(typeof e=="number")return e;if(ye(e))return _r;if(z(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=z(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=Ca(e);var r=Cl.test(e);return r||Kl.test(e)?_o(e.slice(2),r?2:8):Ml.test(e)?_r:+e}function bu(e){return Ke(e,pe(e))}function uc(e){return e?yn(S(e),-9007199254740991,Rn):e===0?e:0}function D(e){return e==null?"":ke(e)}var lc=Mn(function(e,n){if(cr(n)||ge(n)){Ke(n,ne(n),e);return}for(var r in n)K.call(n,r)&&lr(e,r,n[r])}),Au=Mn(function(e,n){Ke(n,pe(n),e)}),gt=Mn(function(e,n,r,t){Ke(n,pe(n),e,t)}),oc=Mn(function(e,n,r,t){Ke(n,ne(n),e,t)}),dc=Je(Qt);function fc(e,n){var r=On(e);return n==null?r:es(r,n)}var gc=I(function(e,n){e=U(e);var r=-1,t=n.length,i=t>2?n[2]:u;for(i&&oe(n[0],n[1],i)&&(t=1);++r<t;)for(var s=n[r],l=pe(s),o=-1,f=l.length;++o<f;){var m=l[o],v=e[m];(v===u||Ne(v,In[m])&&!K.call(e,m))&&(e[m]=s[m])}return e}),pc=I(function(e){return e.push(u,Cs),ve(wu,u,e)});function cc(e,n){return Na(e,w(n,3),De)}function mc(e,n){return Na(e,w(n,3),ni)}function vc(e,n){return e==null?e:ei(e,w(n,3),pe)}function hc(e,n){return e==null?e:as(e,w(n,3),pe)}function kc(e,n){return e&&De(e,w(n,3))}function yc(e,n){return e&&ni(e,w(n,3))}function _c(e){return e==null?[]:$r(e,ne(e))}function bc(e){return e==null?[]:$r(e,pe(e))}function Fi(e,n,r){var t=e==null?u:_n(e,n);return t===u?r:t}function Ac(e,n){return e!=null&&Vs(e,n,Wd)}function Ii(e,n){return e!=null&&Vs(e,n,Gd)}var wc=Is(function(e,n,r){n!=null&&typeof n.toString!="function"&&(n=Ir.call(n)),e[n]=r},Li(ce)),Tc=Is(function(e,n,r){n!=null&&typeof n.toString!="function"&&(n=Ir.call(n)),K.call(e,n)?e[n].push(r):e[n]=[r]},w),qc=I(dr);function ne(e){return ge(e)?Ja(e):ai(e)}function pe(e){return ge(e)?Ja(e,!0):nf(e)}function Rc(e,n){var r={};return n=w(n,3),De(e,function(t,i,s){Ze(r,n(t,i,s),t)}),r}function xc(e,n){var r={};return n=w(n,3),De(e,function(t,i,s){Ze(r,i,n(t,i,s))}),r}var Pc=Mn(function(e,n,r){zr(e,n,r)}),wu=Mn(function(e,n,r,t){zr(e,n,r,t)}),Bc=Je(function(e,n){var r={};if(e==null)return r;var t=!1;n=$(n,function(s){return s=fn(s,e),t||(t=s.length>1),s}),Ke(e,yi(e),r),t&&(r=Re(r,J|Ue|Me,wf));for(var i=n.length;i--;)fi(r,n[i]);return r});function Ec(e,n){return Tu(e,ot(w(n)))}var jc=Je(function(e,n){return e==null?{}:tf(e,n)});function Tu(e,n){if(e==null)return{};var r=$(yi(e),function(t){return[t]});return n=w(n),ms(e,r,function(t,i){return n(t,i[0])})}function Sc(e,n,r){n=fn(n,e);var t=-1,i=n.length;for(i||(i=1,e=u);++t<i;){var s=e==null?u:e[Ve(n[t])];s===u&&(t=i,s=r),e=en(s)?s.call(e):s}return e}function Fc(e,n,r){return e==null?e:gr(e,n,r)}function Ic(e,n,r,t){return t=typeof t=="function"?t:u,e==null?e:gr(e,n,r,t)}var qu=Os(ne),Ru=Os(pe);function Nc(e,n,r){var t=j(e),i=t||pn(e)||Kn(e);if(n=w(n,4),r==null){var s=e&&e.constructor;i?r=t?new s:[]:z(e)?r=en(s)?On(Or(e)):{}:r={}}return(i?we:De)(e,function(l,o,f){return n(r,l,o,f)}),r}function Lc(e,n){return e==null?!0:fi(e,n)}function Oc(e,n,r){return e==null?e:_s(e,n,ci(r))}function Mc(e,n,r,t){return t=typeof t=="function"?t:u,e==null?e:_s(e,n,ci(r),t)}function Vn(e){return e==null?[]:Ht(e,ne(e))}function Cc(e){return e==null?[]:Ht(e,pe(e))}function Dc(e,n,r){return r===u&&(r=n,n=u),r!==u&&(r=Be(r),r=r===r?r:0),n!==u&&(n=Be(n),n=n===n?n:0),yn(Be(e),n,r)}function Kc(e,n,r){return n=nn(n),r===u?(r=n,n=0):r=nn(r),e=Be(e),Hd(e,n,r)}function Vc(e,n,r){if(r&&typeof r!="boolean"&&oe(e,n,r)&&(n=r=u),r===u&&(typeof n=="boolean"?(r=n,n=u):typeof e=="boolean"&&(r=e,e=u)),e===u&&n===u?(e=0,n=1):(e=nn(e),n===u?(n=e,e=0):n=nn(n)),e>n){var t=e;e=n,n=t}if(r||e%1||n%1){var i=Za();return se(e+i*(n-e+yo("1e-"+((i+"").length-1))),n)}return li(e,n)}var Uc=Cn(function(e,n,r){return n=n.toLowerCase(),e+(r?xu(n):n)});function xu(e){return Ni(D(e).toLowerCase())}function Pu(e){return e=D(e),e&&e.replace(Ul,So).replace(lo,"")}function Wc(e,n,r){e=D(e),n=ke(n);var t=e.length;r=r===u?t:yn(S(r),0,t);var i=r;return r-=n.length,r>=0&&e.slice(r,i)==n}function Gc(e){return e=D(e),e&&wl.test(e)?e.replace(aa,Fo):e}function Hc(e){return e=D(e),e&&Bl.test(e)?e.replace(Et,"\\$&"):e}var $c=Cn(function(e,n,r){return e+(r?"-":"")+n.toLowerCase()}),zc=Cn(function(e,n,r){return e+(r?" ":"")+n.toLowerCase()}),Yc=js("toLowerCase");function Zc(e,n,r){e=D(e),n=S(n);var t=n?Sn(e):0;if(!n||t>=n)return e;var i=(n-t)/2;return et(Kr(i),r)+e+et(Dr(i),r)}function Xc(e,n,r){e=D(e),n=S(n);var t=n?Sn(e):0;return n&&t<n?e+et(n-t,r):e}function Jc(e,n,r){e=D(e),n=S(n);var t=n?Sn(e):0;return n&&t<n?et(n-t,r)+e:e}function Qc(e,n,r){return r||n==null?n=0:n&&(n=+n),ad(D(e).replace(jt,""),n||0)}function em(e,n,r){return(r?oe(e,n,r):n===u)?n=1:n=S(n),oi(D(e),n)}function nm(){var e=arguments,n=D(e[0]);return e.length<3?n:n.replace(e[1],e[2])}var rm=Cn(function(e,n,r){return e+(r?"_":"")+n.toLowerCase()});function tm(e,n,r){return r&&typeof r!="number"&&oe(e,n,r)&&(n=r=u),r=r===u?Ce:r>>>0,r?(e=D(e),e&&(typeof n=="string"||n!=null&&!Si(n))&&(n=ke(n),!n&&jn(e))?gn(Fe(e),0,r):e.split(n,r)):[]}var im=Cn(function(e,n,r){return e+(r?" ":"")+Ni(n)});function am(e,n,r){return e=D(e),r=r==null?0:yn(S(r),0,e.length),n=ke(n),e.slice(r,r+n.length)==n}function sm(e,n,r){var t=a.templateSettings;r&&oe(e,n,r)&&(n=u),e=D(e),n=gt({},n,t,Ms);var i=gt({},n.imports,t.imports,Ms),s=ne(i),l=Ht(i,s),o,f,m=0,v=n.interpolate||qr,h="__p += '",y=zt((n.escape||qr).source+"|"+v.source+"|"+(v===sa?Ol:qr).source+"|"+(n.evaluate||qr).source+"|$","g"),A="//# sourceURL="+(K.call(n,"sourceURL")?(n.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++co+"]")+`
`;e.replace(y,function(q,N,O,_e,de,be){return O||(O=_e),h+=e.slice(m,be).replace(Wl,Io),N&&(o=!0,h+=`' +
__e(`+N+`) +
'`),de&&(f=!0,h+=`';
`+de+`;
__p += '`),O&&(h+=`' +
((__t = (`+O+`)) == null ? '' : __t) +
'`),m=be+q.length,q}),h+=`';
`;var T=K.call(n,"variable")&&n.variable;if(!T)h=`with (obj) {
`+h+`
}
`;else if(Nl.test(T))throw new E(G);h=(f?h.replace(yl,""):h).replace(_l,"$1").replace(bl,"$1;"),h="function("+(T||"obj")+`) {
`+(T?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(o?", __e = _.escape":"")+(f?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+h+`return __p
}`;var F=Eu(function(){return M(s,A+"return "+h).apply(u,l)});if(F.source=h,ji(F))throw F;return F}function um(e){return D(e).toLowerCase()}function lm(e){return D(e).toUpperCase()}function om(e,n,r){if(e=D(e),e&&(r||n===u))return Ca(e);if(!e||!(n=ke(n)))return e;var t=Fe(e),i=Fe(n),s=Da(t,i),l=Ka(t,i)+1;return gn(t,s,l).join("")}function dm(e,n,r){if(e=D(e),e&&(r||n===u))return e.slice(0,Ua(e)+1);if(!e||!(n=ke(n)))return e;var t=Fe(e),i=Ka(t,Fe(n))+1;return gn(t,0,i).join("")}function fm(e,n,r){if(e=D(e),e&&(r||n===u))return e.replace(jt,"");if(!e||!(n=ke(n)))return e;var t=Fe(e),i=Da(t,Fe(n));return gn(t,i).join("")}function gm(e,n){var r=tl,t=il;if(z(n)){var i="separator"in n?n.separator:i;r="length"in n?S(n.length):r,t="omission"in n?ke(n.omission):t}e=D(e);var s=e.length;if(jn(e)){var l=Fe(e);s=l.length}if(r>=s)return e;var o=r-Sn(t);if(o<1)return t;var f=l?gn(l,0,o).join(""):e.slice(0,o);if(i===u)return f+t;if(l&&(o+=f.length-o),Si(i)){if(e.slice(o).search(i)){var m,v=f;for(i.global||(i=zt(i.source,D(ua.exec(i))+"g")),i.lastIndex=0;m=i.exec(v);)var h=m.index;f=f.slice(0,h===u?o:h)}}else if(e.indexOf(ke(i),o)!=o){var y=f.lastIndexOf(i);y>-1&&(f=f.slice(0,y))}return f+t}function pm(e){return e=D(e),e&&Al.test(e)?e.replace(ia,Ko):e}var cm=Cn(function(e,n,r){return e+(r?" ":"")+n.toUpperCase()}),Ni=js("toUpperCase");function Bu(e,n,r){return e=D(e),n=r?u:n,n===u?Lo(e)?Wo(e):xo(e):e.match(n)||[]}var Eu=I(function(e,n){try{return ve(e,u,n)}catch(r){return ji(r)?r:new E(r)}}),mm=Je(function(e,n){return we(n,function(r){r=Ve(r),Ze(e,r,Bi(e[r],e))}),e});function vm(e){var n=e==null?0:e.length,r=w();return e=n?$(e,function(t){if(typeof t[1]!="function")throw new Te(B);return[r(t[0]),t[1]]}):[],I(function(t){for(var i=-1;++i<n;){var s=e[i];if(ve(s[0],this,t))return ve(s[1],this,t)}})}function hm(e){return Kd(Re(e,J))}function Li(e){return function(){return e}}function km(e,n){return e==null||e!==e?n:e}var ym=Fs(),_m=Fs(!0);function ce(e){return e}function Oi(e){return os(typeof e=="function"?e:Re(e,J))}function bm(e){return fs(Re(e,J))}function Am(e,n){return gs(e,Re(n,J))}var wm=I(function(e,n){return function(r){return dr(r,e,n)}}),Tm=I(function(e,n){return function(r){return dr(e,r,n)}});function Mi(e,n,r){var t=ne(n),i=$r(n,t);r==null&&!(z(n)&&(i.length||!t.length))&&(r=n,n=e,e=this,i=$r(n,ne(n)));var s=!(z(r)&&"chain"in r)||!!r.chain,l=en(e);return we(i,function(o){var f=n[o];e[o]=f,l&&(e.prototype[o]=function(){var m=this.__chain__;if(s||m){var v=e(this.__wrapped__),h=v.__actions__=fe(this.__actions__);return h.push({func:f,args:arguments,thisArg:e}),v.__chain__=m,v}return f.apply(e,sn([this.value()],arguments))})}),e}function qm(){return te._===this&&(te._=Zo),this}function Ci(){}function Rm(e){return e=S(e),I(function(n){return ps(n,e)})}var xm=vi($),Pm=vi(Ia),Bm=vi(Kt);function ju(e){return wi(e)?Vt(Ve(e)):af(e)}function Em(e){return function(n){return e==null?u:_n(e,n)}}var jm=Ns(),Sm=Ns(!0);function Di(){return[]}function Ki(){return!1}function Fm(){return{}}function Im(){return""}function Nm(){return!0}function Lm(e,n){if(e=S(e),e<1||e>Rn)return[];var r=Ce,t=se(e,Ce);n=w(n),e-=Ce;for(var i=Gt(t,n);++r<e;)n(r);return i}function Om(e){return j(e)?$(e,Ve):ye(e)?[e]:fe(Xs(D(e)))}function Mm(e){var n=++zo;return D(e)+n}var Cm=Qr(function(e,n){return e+n},0),Dm=hi("ceil"),Km=Qr(function(e,n){return e/n},1),Vm=hi("floor");function Um(e){return e&&e.length?Hr(e,ce,ri):u}function Wm(e,n){return e&&e.length?Hr(e,w(n,2),ri):u}function Gm(e){return Oa(e,ce)}function Hm(e,n){return Oa(e,w(n,2))}function $m(e){return e&&e.length?Hr(e,ce,si):u}function zm(e,n){return e&&e.length?Hr(e,w(n,2),si):u}var Ym=Qr(function(e,n){return e*n},1),Zm=hi("round"),Xm=Qr(function(e,n){return e-n},0);function Jm(e){return e&&e.length?Wt(e,ce):0}function Qm(e,n){return e&&e.length?Wt(e,w(n,2)):0}return a.after=bp,a.ary=lu,a.assign=lc,a.assignIn=Au,a.assignInWith=gt,a.assignWith=oc,a.at=dc,a.before=ou,a.bind=Bi,a.bindAll=mm,a.bindKey=du,a.castArray=Fp,a.chain=au,a.chunk=Vf,a.compact=Uf,a.concat=Wf,a.cond=vm,a.conforms=hm,a.constant=Li,a.countBy=Jg,a.create=fc,a.curry=fu,a.curryRight=gu,a.debounce=pu,a.defaults=gc,a.defaultsDeep=pc,a.defer=Ap,a.delay=wp,a.difference=Gf,a.differenceBy=Hf,a.differenceWith=$f,a.drop=zf,a.dropRight=Yf,a.dropRightWhile=Zf,a.dropWhile=Xf,a.fill=Jf,a.filter=ep,a.flatMap=tp,a.flatMapDeep=ip,a.flatMapDepth=ap,a.flatten=nu,a.flattenDeep=Qf,a.flattenDepth=eg,a.flip=Tp,a.flow=ym,a.flowRight=_m,a.fromPairs=ng,a.functions=_c,a.functionsIn=bc,a.groupBy=sp,a.initial=tg,a.intersection=ig,a.intersectionBy=ag,a.intersectionWith=sg,a.invert=wc,a.invertBy=Tc,a.invokeMap=lp,a.iteratee=Oi,a.keyBy=op,a.keys=ne,a.keysIn=pe,a.map=st,a.mapKeys=Rc,a.mapValues=xc,a.matches=bm,a.matchesProperty=Am,a.memoize=lt,a.merge=Pc,a.mergeWith=wu,a.method=wm,a.methodOf=Tm,a.mixin=Mi,a.negate=ot,a.nthArg=Rm,a.omit=Bc,a.omitBy=Ec,a.once=qp,a.orderBy=dp,a.over=xm,a.overArgs=Rp,a.overEvery=Pm,a.overSome=Bm,a.partial=Ei,a.partialRight=cu,a.partition=fp,a.pick=jc,a.pickBy=Tu,a.property=ju,a.propertyOf=Em,a.pull=dg,a.pullAll=tu,a.pullAllBy=fg,a.pullAllWith=gg,a.pullAt=pg,a.range=jm,a.rangeRight=Sm,a.rearg=xp,a.reject=cp,a.remove=cg,a.rest=Pp,a.reverse=xi,a.sampleSize=vp,a.set=Fc,a.setWith=Ic,a.shuffle=hp,a.slice=mg,a.sortBy=_p,a.sortedUniq=Ag,a.sortedUniqBy=wg,a.split=tm,a.spread=Bp,a.tail=Tg,a.take=qg,a.takeRight=Rg,a.takeRightWhile=xg,a.takeWhile=Pg,a.tap=Ug,a.throttle=Ep,a.thru=at,a.toArray=yu,a.toPairs=qu,a.toPairsIn=Ru,a.toPath=Om,a.toPlainObject=bu,a.transform=Nc,a.unary=jp,a.union=Bg,a.unionBy=Eg,a.unionWith=jg,a.uniq=Sg,a.uniqBy=Fg,a.uniqWith=Ig,a.unset=Lc,a.unzip=Pi,a.unzipWith=iu,a.update=Oc,a.updateWith=Mc,a.values=Vn,a.valuesIn=Cc,a.without=Ng,a.words=Bu,a.wrap=Sp,a.xor=Lg,a.xorBy=Og,a.xorWith=Mg,a.zip=Cg,a.zipObject=Dg,a.zipObjectDeep=Kg,a.zipWith=Vg,a.entries=qu,a.entriesIn=Ru,a.extend=Au,a.extendWith=gt,Mi(a,a),a.add=Cm,a.attempt=Eu,a.camelCase=Uc,a.capitalize=xu,a.ceil=Dm,a.clamp=Dc,a.clone=Ip,a.cloneDeep=Lp,a.cloneDeepWith=Op,a.cloneWith=Np,a.conformsTo=Mp,a.deburr=Pu,a.defaultTo=km,a.divide=Km,a.endsWith=Wc,a.eq=Ne,a.escape=Gc,a.escapeRegExp=Hc,a.every=Qg,a.find=np,a.findIndex=Qs,a.findKey=cc,a.findLast=rp,a.findLastIndex=eu,a.findLastKey=mc,a.floor=Vm,a.forEach=su,a.forEachRight=uu,a.forIn=vc,a.forInRight=hc,a.forOwn=kc,a.forOwnRight=yc,a.get=Fi,a.gt=Cp,a.gte=Dp,a.has=Ac,a.hasIn=Ii,a.head=ru,a.identity=ce,a.includes=up,a.indexOf=rg,a.inRange=Kc,a.invoke=qc,a.isArguments=wn,a.isArray=j,a.isArrayBuffer=Kp,a.isArrayLike=ge,a.isArrayLikeObject=Z,a.isBoolean=Vp,a.isBuffer=pn,a.isDate=Up,a.isElement=Wp,a.isEmpty=Gp,a.isEqual=Hp,a.isEqualWith=$p,a.isError=ji,a.isFinite=zp,a.isFunction=en,a.isInteger=mu,a.isLength=dt,a.isMap=vu,a.isMatch=Yp,a.isMatchWith=Zp,a.isNaN=Xp,a.isNative=Jp,a.isNil=ec,a.isNull=Qp,a.isNumber=hu,a.isObject=z,a.isObjectLike=Y,a.isPlainObject=vr,a.isRegExp=Si,a.isSafeInteger=nc,a.isSet=ku,a.isString=ft,a.isSymbol=ye,a.isTypedArray=Kn,a.isUndefined=rc,a.isWeakMap=tc,a.isWeakSet=ic,a.join=ug,a.kebabCase=$c,a.last=Pe,a.lastIndexOf=lg,a.lowerCase=zc,a.lowerFirst=Yc,a.lt=ac,a.lte=sc,a.max=Um,a.maxBy=Wm,a.mean=Gm,a.meanBy=Hm,a.min=$m,a.minBy=zm,a.stubArray=Di,a.stubFalse=Ki,a.stubObject=Fm,a.stubString=Im,a.stubTrue=Nm,a.multiply=Ym,a.nth=og,a.noConflict=qm,a.noop=Ci,a.now=ut,a.pad=Zc,a.padEnd=Xc,a.padStart=Jc,a.parseInt=Qc,a.random=Vc,a.reduce=gp,a.reduceRight=pp,a.repeat=em,a.replace=nm,a.result=Sc,a.round=Zm,a.runInContext=d,a.sample=mp,a.size=kp,a.snakeCase=rm,a.some=yp,a.sortedIndex=vg,a.sortedIndexBy=hg,a.sortedIndexOf=kg,a.sortedLastIndex=yg,a.sortedLastIndexBy=_g,a.sortedLastIndexOf=bg,a.startCase=im,a.startsWith=am,a.subtract=Xm,a.sum=Jm,a.sumBy=Qm,a.template=sm,a.times=Lm,a.toFinite=nn,a.toInteger=S,a.toLength=_u,a.toLower=um,a.toNumber=Be,a.toSafeInteger=uc,a.toString=D,a.toUpper=lm,a.trim=om,a.trimEnd=dm,a.trimStart=fm,a.truncate=gm,a.unescape=pm,a.uniqueId=Mm,a.upperCase=cm,a.upperFirst=Ni,a.each=su,a.eachRight=uu,a.first=ru,Mi(a,function(){var e={};return De(a,function(n,r){K.call(a.prototype,r)||(e[r]=n)}),e}(),{chain:!1}),a.VERSION=x,we(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){a[e].placeholder=a}),we(["drop","take"],function(e,n){L.prototype[e]=function(r){r=r===u?1:ee(S(r),0);var t=this.__filtered__&&!n?new L(this):this.clone();return t.__filtered__?t.__takeCount__=se(r,t.__takeCount__):t.__views__.push({size:se(r,Ce),type:e+(t.__dir__<0?"Right":"")}),t},L.prototype[e+"Right"]=function(r){return this.reverse()[e](r).reverse()}}),we(["filter","map","takeWhile"],function(e,n){var r=n+1,t=r==na||r==ll;L.prototype[e]=function(i){var s=this.clone();return s.__iteratees__.push({iteratee:w(i,3),type:r}),s.__filtered__=s.__filtered__||t,s}}),we(["head","last"],function(e,n){var r="take"+(n?"Right":"");L.prototype[e]=function(){return this[r](1).value()[0]}}),we(["initial","tail"],function(e,n){var r="drop"+(n?"":"Right");L.prototype[e]=function(){return this.__filtered__?new L(this):this[r](1)}}),L.prototype.compact=function(){return this.filter(ce)},L.prototype.find=function(e){return this.filter(e).head()},L.prototype.findLast=function(e){return this.reverse().find(e)},L.prototype.invokeMap=I(function(e,n){return typeof e=="function"?new L(this):this.map(function(r){return dr(r,e,n)})}),L.prototype.reject=function(e){return this.filter(ot(w(e)))},L.prototype.slice=function(e,n){e=S(e);var r=this;return r.__filtered__&&(e>0||n<0)?new L(r):(e<0?r=r.takeRight(-e):e&&(r=r.drop(e)),n!==u&&(n=S(n),r=n<0?r.dropRight(-n):r.take(n-e)),r)},L.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},L.prototype.toArray=function(){return this.take(Ce)},De(L.prototype,function(e,n){var r=/^(?:filter|find|map|reject)|While$/.test(n),t=/^(?:head|last)$/.test(n),i=a[t?"take"+(n=="last"?"Right":""):n],s=t||/^find/.test(n);i&&(a.prototype[n]=function(){var l=this.__wrapped__,o=t?[1]:arguments,f=l instanceof L,m=o[0],v=f||j(l),h=function(N){var O=i.apply(a,sn([N],o));return t&&y?O[0]:O};v&&r&&typeof m=="function"&&m.length!=1&&(f=v=!1);var y=this.__chain__,A=!!this.__actions__.length,T=s&&!y,F=f&&!A;if(!s&&v){l=F?l:new L(this);var q=e.apply(l,o);return q.__actions__.push({func:at,args:[h],thisArg:u}),new qe(q,y)}return T&&F?e.apply(this,o):(q=this.thru(h),T?t?q.value()[0]:q.value():q)})}),we(["pop","push","shift","sort","splice","unshift"],function(e){var n=jr[e],r=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",t=/^(?:pop|shift)$/.test(e);a.prototype[e]=function(){var i=arguments;if(t&&!this.__chain__){var s=this.value();return n.apply(j(s)?s:[],i)}return this[r](function(l){return n.apply(j(l)?l:[],i)})}}),De(L.prototype,function(e,n){var r=a[n];if(r){var t=r.name+"";K.call(Ln,t)||(Ln[t]=[]),Ln[t].push({name:n,func:r})}}),Ln[Jr(u,qn).name]=[{name:"wrapper",func:u}],L.prototype.clone=gd,L.prototype.reverse=pd,L.prototype.value=cd,a.prototype.at=Wg,a.prototype.chain=Gg,a.prototype.commit=Hg,a.prototype.next=$g,a.prototype.plant=Yg,a.prototype.reverse=Zg,a.prototype.toJSON=a.prototype.valueOf=a.prototype.value=Xg,a.prototype.first=a.prototype.head,tr&&(a.prototype[tr]=zg),a},Fn=Go();mn?((mn.exports=Fn)._=Fn,Ot._=Fn):te._=Fn}).call(Nv)}(hr,hr.exports)),hr.exports}var Vu=Lv();const Ov="NORGE",Uu=p=>p??"",Mv=p=>{const{adresselinje1:_,adresselinje2:u,adresselinje3:x,postNummer:R,poststed:P,land:B}=p,G=[_,u,x].filter(V=>!!V).join(", "),C=`${Uu(R)} ${Uu(P)}`,ae=(B==null?void 0:B.toUpperCase())!==Ov?B:void 0;return[G,C,ae].map(V=>V==null?void 0:V.trim()).filter(V=>!!V).join(", ").trim()},Bh=(p,_)=>[...p].sort(Zu).find(u=>u.adresseType===_),Eh=(p,_)=>p.length!==_.length?!1:p.every(u=>_.some(x=>Vu.isEqual(u,x)))&&_.every(u=>p.some(x=>Vu.isEqual(x,u)));function Cv(p){throw new Error("Uventet enum verdi: alle tilfeller skal må håndteres:",p)}const Gi=Un(kr);var Dv=(p=>(p[p.SOKNAD=0]="SOKNAD",p[p.FREG=1]="FREG",p[p.MEDL=2]="MEDL",p))(Dv||{});const Kv=p=>{switch(p){case 0:return Gi.formatMessage({id:"FaktaKilde.Soknad"});case 1:return Gi.formatMessage({id:"FaktaKilde.FREG"});case 2:return Gi.formatMessage({id:"FaktaKilde.MEDL"});default:return Cv(p)}},Xu=cn.forwardRef((p,_)=>k.jsx(Hi,{gap:"2",style:{display:"flex"},...p,ref:_}));Xu.displayName="FaktaGruppe";const Vv=({label:p,value:_,kilde:u})=>k.jsx(ht,{background:"bg-subtle",flexGrow:"1",paddingBlock:"2",paddingInline:"4",borderRadius:"medium",children:k.jsxs(Xi,{gap:"6",children:[k.jsxs("div",{children:[k.jsx($u,{size:"small",children:p}),k.jsx($i,{size:"large",children:_})]}),k.jsx(zi,{uppercase:!0,children:Kv(u)})]})});Xu.__docgenInfo={description:"",methods:[],displayName:"FaktaGruppe"};Vv.__docgenInfo={description:"",methods:[],displayName:"FaktaBox",props:{label:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},value:{required:!0,tsType:{name:"string"},description:""},kilde:{required:!0,tsType:{name:"FaktaKilde"},description:""}}};const Uv="_boks_c3bfh_1",Wv="_harBorderLeft_c3bfh_8",Gv="_harBorderTop_c3bfh_12",Ju={boks:Uv,harBorderLeft:Wv,harBorderTop:Gv},Hv=Av.bind(Ju),$v=({harBorderTop:p=!1,harBorderLeft:_=!0,children:u})=>k.jsx("div",{className:Hv(Ju.boks,{harBorderLeft:_,harBorderTop:p}),children:u});$v.__docgenInfo={description:"",methods:[],displayName:"Boks",props:{harBorderTop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},harBorderLeft:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Qu=({adresser:p,erAnnenpart:_=!1,harSammeAdresser:u=!1,adresseKodeverk:x})=>{if(u)return k.jsx(ht,{padding:"4",children:k.jsx(Fu,{textColor:"subtle",children:k.jsx(Ee,{id:"AdresseTabell.SammeAdresse"})})});const R=P=>P+1===p.length?{border:"0px"}:{};return k.jsxs(k.Fragment,{children:[p.length===0&&k.jsx(ht,{padding:"4",children:k.jsx(Fu,{textColor:"subtle",children:k.jsx(Ee,{id:"AdresseTabell.IngenAdresse",values:{erAnnenpart:_}})})}),p.length>0&&k.jsxs(Oe,{style:{tableLayout:"fixed"},children:[k.jsx(Oe.Header,{children:k.jsxs(Oe.Row,{children:[k.jsx(Oe.HeaderCell,{children:k.jsx(Ee,{id:"AdresseTabell.PeriodeLabel"})}),k.jsx(Oe.HeaderCell,{children:k.jsx(Ee,{id:"AdresseTabell.AdresseLabel"})}),k.jsx(Oe.HeaderCell,{children:k.jsx(Ee,{id:"AdresseTabell.TypeLabel"})})]})}),k.jsx(Oe.Body,{children:p.sort(Zu).map((P,B)=>{var G;return k.jsxs(Oe.Row,{children:[k.jsx(Oe.DataCell,{style:R(B),children:k.jsx(iv,{dateStringFom:P.fom,dateStringTom:P.tom===Yi?void 0:P.tom})}),k.jsx(Oe.DataCell,{style:R(B),children:Mv(P)}),k.jsx(Oe.DataCell,{style:R(B),children:(G=x.find(C=>C.kode===P.adresseType))==null?void 0:G.navn})]},P.adresseType+P.fom+P.tom)})})]})]})};Qu.__docgenInfo={description:"",methods:[],displayName:"AdresseTabell",props:{adresser:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""}}};const zv=Un(kr),Yv=p=>{switch(p){case Mu.KVINNE:return Ui.female;case Mu.MANN:return Ui.male;default:return Ui.unknown}},mt=({rolle:p="BRUKER",alleKodeverk:_,harSammeAdresser:u,navn:x,kjønn:R,sivilstand:P,fødselsdato:B,dødsdato:G,adresser:C,showIcon:ae=!0})=>{var J;const V=p==="BARN";return k.jsx(yt,{value:zv,children:k.jsx(ht,{background:"bg-subtle",padding:"4",borderRadius:"large","aria-label":x,children:k.jsxs(Xi,{gap:"1",children:[k.jsxs(Hi,{gap:"5",children:[ae&&k.jsx("div",{children:k.jsx(wv,{gender:Yv(R),isChild:V})}),k.jsxs("div",{children:[k.jsxs(Hi,{gap:"4",children:[k.jsx($u,{children:k.jsx(Ee,{id:"PersonPanel.RolleOgNavn",values:{rolle:p,navn:x}})}),V&&B&&!G&&k.jsx($i,{children:k.jsx(Ee,{id:"PersonPanel.Fodt",values:{dato:Iu(B)}})}),G&&k.jsx($i,{children:k.jsx(Ee,{id:"PersonPanel.Dod",values:{dato:Iu(G)}})})]}),!V&&P&&k.jsx(zi,{"aria-label":"Sivilstand",children:(J=_[kt.SIVILSTAND_TYPE].find(Ue=>Ue.kode===P))==null?void 0:J.navn})]})]}),k.jsxs(zi,{children:[p==="BARN"&&k.jsx(Ee,{id:"PersonPanel.Beskrivelse.Barn",values:{rolle:p}}),p==="BRUKER"&&k.jsx(Ee,{id:"PersonPanel.Beskrivelse.Bruker",values:{rolle:p}}),p==="ANNEN_PART"&&k.jsx(Ee,{id:"PersonPanel.Beskrivelse.Annenpart",values:{rolle:p}})]}),k.jsx(Qu,{harSammeAdresser:u,adresser:C,adresseKodeverk:_[kt.ADRESSE_TYPE]})]})})})};mt.__docgenInfo={description:"",methods:[],displayName:"Personopplysninger",props:{rolle:{required:!1,tsType:{name:"union",raw:"'BARN' | 'BRUKER' | 'ANNEN_PART'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'BRUKER'"},{name:"literal",value:"'ANNEN_PART'"}]},description:"",defaultValue:{value:"'BRUKER'",computed:!1}},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},harSammeAdresser:{required:!1,tsType:{name:"boolean"},description:""},navn:{required:!1,tsType:{name:"string"},description:""},sivilstand:{required:!1,tsType:{name:"string"},description:""},dødsdato:{required:!1,tsType:{name:"string"},description:""},fødselsdato:{required:!1,tsType:{name:"string"},description:""},adresser:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Personadresse[]"},description:""},kjønn:{required:!1,tsType:{name:"string"},description:""},showIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const Zv=({personoversikt:{barn:p,bruker:_,annenPart:u},alleKodeverk:x})=>k.jsxs(Xi,{gap:"2",children:[p.map(R=>k.jsx(mt,{...R,alleKodeverk:x,rolle:"BARN"},R.aktoerId)),k.jsx(mt,{rolle:"BRUKER",alleKodeverk:x,..._}),u&&k.jsx(mt,{...u,rolle:"ANNEN_PART",alleKodeverk:x})]});Zv.__docgenInfo={description:"",methods:[],displayName:"PersonopplysningerForFamilie",props:{alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},personoversikt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  bruker: PersonopplysningerBasis;
  annenPart?: PersonopplysningerBasis;
  barn: PersonopplysningerBasis[];
}`,signature:{properties:[{key:"bruker",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"annenPart",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"barn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}],raw:"PersonopplysningerBasis[]",required:!0}}]}}],raw:`Readonly<{
  bruker: PersonopplysningerBasis;
  annenPart?: PersonopplysningerBasis;
  barn: PersonopplysningerBasis[];
}>`},description:""}}};const Xv="default",Jv=(p,_,u,x,R,P)=>{const[B,G]=cn.useState(!1);cn.useEffect(()=>{p({id:_})},[]);const C=x&&(P===_||R&&P===Xv),ae=av(x);return cn.useEffect(()=>{x?p({id:_,tekst:u,erAktiv:C,harApneAksjonspunkter:R}):!x&&ae&&p({id:_}),G(C)},[ae,x,C,R]),x&&B},el=({standardPanelProps:p,valgtFaktaSteg:_,registrerFaktaPanel:u,skalPanelVisesIMeny:x,faktaPanelKode:R,faktaPanelMenyTekst:P,children:B})=>{const{behandling:G}=cn.use(Qi),C=Jv(u,R,P,x,p.harApneAksjonspunkter,_);return k.jsx(nv,{behandling:G,children:C?B:null})};el.__docgenInfo={description:"",methods:[],displayName:"FaktaDefaultInitPanel",props:{standardPanelProps:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandling: Behandling;
  aksjonspunkter: Aksjonspunkt[];
  readOnly: boolean;
  submittable: boolean;
  harApneAksjonspunkter: boolean;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  submitCallback: (aksjonspunktData: any) => Promise<void>;
  alleKodeverk: AlleKodeverk;
}`,signature:{properties:[{key:"behandling",value:{name:"intersection",raw:`BehandlingFellesData &
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"any",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}[]`,required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]},required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"string",required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}],required:!0}},{key:"aksjonspunkter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"submittable",value:{name:"boolean",required:!0}},{key:"harApneAksjonspunkter",value:{name:"boolean",required:!0}},{key:"alleMerknaderFraBeslutter",value:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]},required:!0}},{key:"submitCallback",value:{name:"signature",type:"function",raw:"(aksjonspunktData: any) => Promise<void>",signature:{arguments:[{type:{name:"any"},name:"aksjonspunktData"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}},required:!0}},{key:"alleKodeverk",value:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],required:!0}}]}}],raw:`Readonly<{
  behandling: Behandling;
  aksjonspunkter: Aksjonspunkt[];
  readOnly: boolean;
  submittable: boolean;
  harApneAksjonspunkter: boolean;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  submitCallback: (aksjonspunktData: any) => Promise<void>;
  alleKodeverk: AlleKodeverk;
}>`},description:""},skalPanelVisesIMeny:{required:!0,tsType:{name:"boolean"},description:""},faktaPanelKode:{required:!0,tsType:{name:"FaktaPanelCode"},description:""},faktaPanelMenyTekst:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactElement"},description:""},valgtFaktaSteg:{required:!1,tsType:{name:"string"},description:""},registrerFaktaPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: FaktaPanelMenyData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApneAksjonspunkter?: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApneAksjonspunkter",value:{name:"boolean",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const Wu="default",Gu="default",Qv=(p,_,u,x,R,P)=>B=>{const C=(Array.isArray(B)?B:[B]).map(V=>({"@type":V.kode,...V})),ae={saksnummer:p.saksnummer,behandlingUuid:_.uuid,behandlingVersjon:_.versjon};if(C&&R&&P){if(C.length===0)throw Error("Det har oppstått en teknisk feil ved lagring av aksjonspunkter. Meld feilen i Porten.");if(P.includes(C[0].kode))return R({...ae,overstyrteAksjonspunktDtoer:C}).then(()=>u(Gu,Wu))}return x({...ae,bekreftedeAksjonspunktDtoer:C}).then(()=>u(Gu,Wu))},eh=(p,_=[])=>{const{behandling:u,rettigheter:x,fagsak:R,lagreAksjonspunkter:P,lagreOverstyrteAksjonspunkter:B,oppdaterProsessStegOgFaktaPanelIUrl:G,alleKodeverk:C}=cn.use(Qi),{aksjonspunkt:ae}=u,V=ae&&p?ae.filter(re=>p.includes(re.definisjon)):[],J=xv(u,[],x,!1),Ue=Pv(u,V),Me=Qv(R,u,G,P,B,_);return{behandling:u,submittable:!V.some(re=>Cu(re.status))||V.some(re=>re.kanLoses),harApneAksjonspunkter:V.some(re=>Cu(re.status)&&re.kanLoses),alleKodeverk:C,aksjonspunkter:V,readOnly:J,alleMerknaderFraBeslutter:Ue,submitCallback:Me}},nh="_selectWidth_1ur6m_1",rh="_leftCol_1ur6m_5",Hu={selectWidth:nh,leftCol:rh},Gn=({intl:p,readOnly:_,vergetyper:u=[],alleMerknaderFraBeslutter:x,valgtVergeType:R})=>k.jsxs(sv,{merknaderFraBeslutter:x[Ji.AVKLAR_VERGE],children:[k.jsx(hv,{name:"vergeType",className:Hu.selectWidth,label:p.formatMessage({id:"Verge.TypeVerge"}),validate:[Tn],selectValues:u.map(P=>k.jsx("option",{value:P.kode,children:P.navn},P.kode)),readOnly:_}),k.jsx(uv,{children:R&&k.jsxs(k.Fragment,{children:[k.jsx(vt,{sixteenPx:!0}),k.jsxs(Nu,{children:[k.jsx(pt,{className:Hu.leftCol,children:k.jsx(Vi,{name:"navn",label:p.formatMessage({id:"Verge.Navn"}),validate:[Tn,kv],readOnly:_})}),k.jsxs(pt,{children:[R!==Zi.ADVOKAT&&k.jsx(Vi,{name:"fnr",label:p.formatMessage({id:"Verge.FodselsNummer"}),validate:[Tn,yv],readOnly:_}),R===Zi.ADVOKAT&&k.jsx(Vi,{name:"organisasjonsnummer",label:p.formatMessage({id:"Verge.Organisasjonsnummer"}),validate:[Tn],readOnly:_})]})]}),k.jsx(vt,{sixteenPx:!0}),k.jsxs(Nu,{children:[k.jsx(pt,{children:k.jsx(Lu,{name:"gyldigFom",label:p.formatMessage({id:"Verge.PeriodeFOM"}),validate:[Tn,Ou],isReadOnly:_})}),k.jsx(pt,{children:k.jsx(Lu,{name:"gyldigTom",label:p.formatMessage({id:"Verge.PeriodeTOM"}),validate:[Ou],isReadOnly:_})})]})]})})]});Gn.buildInitialValues=p=>({navn:p.navn,gyldigFom:p.gyldigFom,gyldigTom:p.gyldigTom,fnr:p.fnr,organisasjonsnummer:p.organisasjonsnummer,vergeType:p.vergeType||void 0});Gn.transformValues=p=>({vergeType:p.vergeType,navn:p.navn,fnr:p.fnr,organisasjonsnummer:p.organisasjonsnummer,gyldigFom:p.gyldigFom,gyldigTom:p.gyldigTom,kode:Ji.AVKLAR_VERGE});Gn.__docgenInfo={description:`RegistrereVergeFaktaForm

Formkomponent. Registrering og oppdatering av verge.`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"verge",optional:!1,type:{name:"signature",type:"object",raw:`{
  navn?: string;
  fnr?: string;
  gyldigFom?: string;
  gyldigTom?: string;
  vergeType?: string;
  organisasjonsnummer?: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!1}},{key:"fnr",value:{name:"string",required:!1}},{key:"gyldigFom",value:{name:"string",required:!1}},{key:"gyldigTom",value:{name:"string",required:!1}},{key:"vergeType",value:{name:"string",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}}]},alias:"Verge"}}],returns:{type:{name:"signature",type:"object",raw:`{
  navn?: string;
  gyldigFom?: string;
  gyldigTom?: string;
  fnr?: string;
  organisasjonsnummer?: string;
  vergeType?: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!1}},{key:"gyldigFom",value:{name:"string",required:!1}},{key:"gyldigTom",value:{name:"string",required:!1}},{key:"fnr",value:{name:"string",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}},{key:"vergeType",value:{name:"string",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
  navn?: string;
  gyldigFom?: string;
  gyldigTom?: string;
  fnr?: string;
  organisasjonsnummer?: string;
  vergeType?: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!1}},{key:"gyldigFom",value:{name:"string",required:!1}},{key:"gyldigTom",value:{name:"string",required:!1}},{key:"fnr",value:{name:"string",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}},{key:"vergeType",value:{name:"string",required:!1}}]},alias:"FormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  vergeType: string;
  navn: string;
  fnr: string;
  organisasjonsnummer: string;
  gyldigFom: string;
  gyldigTom?: string;
  kode: AksjonspunktKode.AVKLAR_VERGE;
}`,signature:{properties:[{key:"vergeType",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fnr",value:{name:"string",required:!0}},{key:"organisasjonsnummer",value:{name:"string",required:!0}},{key:"gyldigFom",value:{name:"string",required:!0}},{key:"gyldigTom",value:{name:"string",required:!1}},{key:"kode",value:{name:"AksjonspunktKode.AVKLAR_VERGE",required:!0}}]}}}}],displayName:"RegistrereVergeFaktaForm",props:{vergetyper:{defaultValue:{value:"[]",computed:!1},required:!1}}};const th=(p,_)=>({...Wn.initialValues(_),...Gn.buildInitialValues(p||{})}),ih=p=>({...Gn.transformValues(p),...Wn.transformValues(p)}),nl=({hasOpenAksjonspunkter:p,submittable:_,readOnly:u,alleMerknaderFraBeslutter:x,aksjonspunkter:R,verge:P,alleKodeverk:B,submitCallback:G})=>{const C=zu(),{formData:ae,setFormData:V}=rv(),J=_v({defaultValues:ae||th(P,R),shouldUnregister:!0}),Ue=J.watch("vergeType"),Me=J.watch("begrunnelse"),re=cn.useMemo(()=>B[kt.VERGE_TYPE].sort((tn,me)=>tn.navn.localeCompare(me.navn)),[B[kt.VERGE_TYPE]]);return k.jsxs(k.Fragment,{children:[p&&k.jsx(lv,{children:C.formatMessage({id:"RegistrereVergeInfoPanel.CheckInformation"})}),k.jsxs(bv,{formMethods:J,onSubmit:tn=>G(ih(tn)),setDataOnUnmount:V,children:[k.jsx(Gn,{readOnly:u||R.length===0,intl:C,vergetyper:re,valgtVergeType:Ue,alleMerknaderFraBeslutter:x}),R.length!==0&&k.jsxs(k.Fragment,{children:[k.jsx(vt,{twentyPx:!0}),k.jsx(Wn,{isSubmittable:_,isReadOnly:u,hasBegrunnelse:!!Me}),k.jsx(vt,{twentyPx:!0}),k.jsx(Yu,{isSubmittable:_&&!!Ue,isReadOnly:u,isSubmitting:J.formState.isSubmitting,isDirty:J.formState.isDirty})]})]})]})};nl.__docgenInfo={description:`RegistrereVergeInfoPanel

Presentasjonskomponent. Har ansvar for å sette opp formen for att registrere verge.`,methods:[],displayName:"RegistrereVergeInfoPanel",props:{submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(aksjonspunktData: AvklarVergeAp) => Promise<void>",signature:{arguments:[{type:{name:"intersection",raw:`{
  navn: string;
  fnr: string;
  gyldigFom: string;
  gyldigTom?: string;
  vergeType: string;
  organisasjonsnummer: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_VERGE>`,elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  fnr: string;
  gyldigFom: string;
  gyldigTom?: string;
  vergeType: string;
  organisasjonsnummer: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fnr",value:{name:"string",required:!0}},{key:"gyldigFom",value:{name:"string",required:!0}},{key:"gyldigTom",value:{name:"string",required:!1}},{key:"vergeType",value:{name:"string",required:!0}},{key:"organisasjonsnummer",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},name:"aksjonspunktData"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},aksjonspunkter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`}],raw:"Aksjonspunkt[]"},description:""},alleKodeverk:{required:!0,tsType:{name:"union",raw:"AlleKodeverk | AlleKodeverkTilbakekreving",elements:[{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},{name:"Record",elements:[{name:"TilbakekrevingKodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<TilbakekrevingKodeverkType, KodeverkMedNavn[]>"}]},description:""},verge:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  navn?: string;
  fnr?: string;
  gyldigFom?: string;
  gyldigTom?: string;
  vergeType?: string;
  organisasjonsnummer?: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!1}},{key:"fnr",value:{name:"string",required:!1}},{key:"gyldigFom",value:{name:"string",required:!1}},{key:"gyldigTom",value:{name:"string",required:!1}},{key:"vergeType",value:{name:"string",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}}]}},description:""},hasOpenAksjonspunkter:{required:!0,tsType:{name:"boolean"},description:""},submittable:{required:!0,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleMerknaderFraBeslutter:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""}}};const ah={"RegistrereVergeInfoPanel.CheckInformation":"Fyll ut og kontroller vergeopplysninger","Verge.KontaktPerson":"Kontaktperson","Verge.Navn":"Navn","Verge.Mandat":"Mandat","Verge.FodselsNummer":"Fødselsnummer","Verge.PeriodeFOM":"Periode f.o.m.","Verge.PeriodeTOM":"Periode t.o.m.","Verge.TypeVerge":"Type verge","Verge.VergeFullmektig":"Verge/fullmektig","Verge.Soker":"Søker","Verge.BrukerErUnderTvungenForvaltning":"Søker er under tvungen forvaltning","Verge.Organisasjonsnummer":"Organisasjonsnummer"},sh=Un(ah),rl=({verge:p={},aksjonspunkter:_,alleMerknaderFraBeslutter:u,alleKodeverk:x,submitCallback:R,readOnly:P,harApneAksjonspunkter:B,submittable:G})=>k.jsx(yt,{value:sh,children:k.jsx(nl,{verge:p,aksjonspunkter:_,alleMerknaderFraBeslutter:u,hasOpenAksjonspunkter:B,alleKodeverk:x,submitCallback:R,readOnly:P,submittable:G})});rl.__docgenInfo={description:"",methods:[],displayName:"VergeFaktaIndex",props:{verge:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  navn?: string;
  fnr?: string;
  gyldigFom?: string;
  gyldigTom?: string;
  vergeType?: string;
  organisasjonsnummer?: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!1}},{key:"fnr",value:{name:"string",required:!1}},{key:"gyldigFom",value:{name:"string",required:!1}},{key:"gyldigTom",value:{name:"string",required:!1}},{key:"vergeType",value:{name:"string",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}}]}},description:"",defaultValue:{value:"{}",computed:!1}},alleKodeverk:{required:!0,tsType:{name:"union",raw:"AlleKodeverk | AlleKodeverkTilbakekreving",elements:[{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},{name:"Record",elements:[{name:"TilbakekrevingKodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<TilbakekrevingKodeverkType, KodeverkMedNavn[]>"}]},description:""}}};const uh=[Ji.AVKLAR_VERGE],lh=({valgtFaktaSteg:p,registrerFaktaPanel:_})=>{const u=zu(),x=eh(uh),{behandling:R}=cn.use(Qi),P=Rv(R),B=qv(R,"VERGE"),{data:G,isFetching:C}=dv(P.vergeOptions(R,B));return k.jsx(el,{standardPanelProps:x,valgtFaktaSteg:p,registrerFaktaPanel:_,faktaPanelKode:Tv.VERGE,faktaPanelMenyTekst:u.formatMessage({id:"FaktaInitPanel.Title.Verge"}),skalPanelVisesIMeny:B,children:C?k.jsx(ov,{}):k.jsx(rl,{verge:G,...x})})};lh.__docgenInfo={description:"",methods:[],displayName:"VergeFaktaInitPanel",props:{valgtFaktaSteg:{required:!1,tsType:{name:"string"},description:""},registrerFaktaPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: FaktaPanelMenyData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApneAksjonspunkter?: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApneAksjonspunkter",value:{name:"boolean",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};export{$v as B,el as F,Zv as P,Iv as T,lh as V,Yu as a,Wn as b,Cv as c,Kv as d,Dv as e,Mv as f,Bh as g,mt as h,Eh as i,Xu as j,Vv as k,Zu as s,eh as u};
