import{j as y}from"./jsx-runtime-DR9Q75dM.js";import{t as cr,P as yt,G as ek,c as nk,v as $a,b as Ya,V as Ja,L as Gu,B as za,D as Za,m as Eu,w as Fu,a as Hu}from"./index.es-CSofu56D.js";import{A as rk,V as Hn,Q as tk,a as ak,P as ik,l as sk,Z as mt,a0 as Oe,K as pt,a1 as Nu,S as uk,r as lk,I as ht,M as ok,D as Ua,a2 as dk,a3 as gk,d as Iu,w as Lu,c as fk,$ as vk,F as mk,B as pk}from"./AppIndex.stories-B6cdLLLQ.js";import{c as kr,r as Me}from"./index-DRjF_FHU.js";import{M as Pe,z as kk,X as ck,F as yk,U as hk,W as bk,y as kt,H as Ou,L as ft,c as _k}from"./index.es-CeuPQu35.js";import{A as qk,q as Wa}from"./index.es-DYyFgGWG.js";import{c as Ak}from"./bind-BilxuNmH.js";import{R as $u}from"./useRestApiRunner-BKOIDkPf.js";import{E as Mu}from"./index.es-zhgnUGpN.js";import{e as wk,g as Tk}from"./ProsessDefaultInitPanel-CpQ4lnzo.js";var Xa=(v=>(v.BARN="BARN",v.FBARN="FBARN",v.VOKSEN="VOKSEN",v.ADVOKAT="ADVOKAT",v.ANNEN_F="ANNEN_F",v))(Xa||{});const bt={"AdresseVisning.Adresse":"Adresse","ForelderPanel.Soker":"Søker","ForelderPanel.AnnenForelder":"Annen forelder","AlleBarnPanel.Barn":"Barn","AlleBarnPanel.BarnNr":"Barn {nummer}","AlleBarnPanel.Fodt":"Født","AlleBarnPanel.Dod":"Død","PersonPanel.RolleOgNavn":"{rolle, select, BRUKER {Søker, } ANNEN_PART {Den andre forelderen, } BARN {Barnet, } other {} }{navn}","PersonPanel.Beskrivelse.Bruker":"Adresser for søker registrert i folkeregisteret gyldige for de siste 12 månedene","PersonPanel.Beskrivelse.Barn":"Adresser for barnet registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Beskrivelse.Annenpart":"Adresser for den andre forelderen registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Fodt":"Født {dato}","PersonPanel.Dod":"Død {dato}","AdresseTabell.IngenAdresse":"Ingen adresser funnet for {erAnnenpart, select, true {den andre forelderen} other {søker} }.","AdresseTabell.SammeAdresse":"Den andre forelderen har samme adresse som søker på skjæringstidspunktet","AdresseTabell.PeriodeLabel":"Periode","AdresseTabell.AdresseLabel":"Adresse","AdresseTabell.TypeLabel":"Type","MerkePanel.Dod":"DØD","MerkePanel.DodTittel":"Personen er død","MerkePanel.DodFodt":"DØDFØDT","MerkePanel.Diskresjon6":"Kode 6","MerkePanel.Diskresjon7":"Kode 7","MerkePanel.EgenAnsatt":"Nav","MerkePanel.Verge":"Verge","MerkePanel.Diskresjon6Tittel":"Personen har diskresjonsmerking kode 6","MerkePanel.Diskresjon7Tittel":"Personen har diskresjonsmerking kode 7","MerkePanel.EgenAnsattTittel":"Personen er ansatt i Nav","MerkePanel.VergeTittel":"Personen har verge","SubmitButton.ConfirmInformation":"Bekreft og fortsett","FaktaBegrunnelseTextField.BegrunnEndringene":"Begrunn endringene","FaktaBegrunnelseTextField.Vurdering":"Vurdering","FaktaBegrunnelseTextField.Begrunnelse":"Begrunnelse","FaktaKilde.Soknad":"FRA SØKNADEN","FaktaKilde.FREG":"FRA FOLKEREGISTERET","FaktaKilde.MEDL":"FRA MEDLEMSKAPSREGISTERET"},Ga=cr(bt),Rk=ak(3),xk=ik(1500),yr=({isReadOnly:v,isSubmittable:b,hasBegrunnelse:u,label:x,hasReadOnlyLabel:A=!1,hasVurderingText:S=!1,name:j="begrunnelse"})=>{const $=S?"FaktaBegrunnelseTextField.Vurdering":"FaktaBegrunnelseTextField.BegrunnEndringene",D=()=>v?A?Ga.formatMessage({id:"FaktaBegrunnelseTextField.Begrunnelse"}):"":x||Ga.formatMessage({id:$});return y.jsx(yt,{value:Ga,children:(b||u)&&y.jsx(rk,{name:j,label:D(),validate:[Hn,Rk,xk,tk],maxLength:1500,readOnly:v})})},jk=v=>v&&Array.isArray(v)?v.length>0?v[0].begrunnelse:"":v&&!Array.isArray(v)?v.begrunnelse:"";yr.buildInitialValues=(v,b="begrunnelse")=>({[b]:ek(jk(v))});yr.transformValues=(v,b="begrunnelse")=>({begrunnelse:v[b]});yr.__docgenInfo={description:"FaktaBegrunnelseTextField",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"aksjonspunkt",optional:!0,type:{name:"union",raw:"Aksjonspunkt[] | Aksjonspunkt",elements:[{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!0}}]}}}}],displayName:"FaktaBegrunnelseTextField",props:{hasReadOnlyLabel:{defaultValue:{value:"false",computed:!1},required:!1},hasVurderingText:{defaultValue:{value:"false",computed:!1},required:!1},name:{defaultValue:{value:"'begrunnelse'",computed:!1},required:!1}}};const Pk=cr(bt),Bk=(v,b,u)=>!u||b?!0:!v,Yu=({isReadOnly:v,isSubmittable:b,buttonText:u,onClick:x,isSubmitting:A,isDirty:S})=>y.jsx(yt,{value:Pk,children:!v&&y.jsxs(nk,{size:"small",variant:"primary",loading:A,disabled:Bk(S,A,b),onClick:x||sk,type:x?"button":"submit",children:[!!u&&u,!u&&y.jsx(Pe,{id:"SubmitButton.ConfirmInformation"})]})});Yu.__docgenInfo={description:"FaktaSubmitButton",methods:[],displayName:"FaktaSubmitButton",props:{buttonText:{required:!1,tsType:{name:"string"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!0,tsType:{name:"boolean"},description:""}}};const zu=(v,b)=>{const u=new Date(v.tom??$a),x=new Date(b.tom??$a);if(u>x)return-1;if(u<x)return 1;if(v.fom&&!b.fom)return-1;if(!v.fom&&b.fom)return 1;if(v.fom&&b.fom){const A=new Date(v.fom),S=new Date(b.fom);if(A>S)return-1;if(A<S)return 1}return 0};var ct={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ct.exports;(function(v,b){(function(){var u,x="4.17.21",A=200,S="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",j="Expected a function",$="Invalid `variable` option passed into `_.template`",D="__lodash_hash_undefined__",Q=500,M="__lodash_placeholder__",Z=1,Be=2,Ce=4,Ke=1,De=2,de=1,kn=2,Qa=4,Ve=8,jn=16,Ue=32,Pn=64,Ye=128,$n=256,_t=512,tl=30,al="...",il=800,sl=16,ei=1,ul=2,ll=3,cn=1/0,sn=9007199254740991,ol=17976931348623157e292,hr=NaN,We=4294967295,dl=We-1,gl=We>>>1,fl=[["ary",Ye],["bind",de],["bindKey",kn],["curry",Ve],["curryRight",jn],["flip",_t],["partial",Ue],["partialRight",Pn],["rearg",$n]],Bn="[object Arguments]",br="[object Array]",vl="[object AsyncFunction]",Yn="[object Boolean]",zn="[object Date]",ml="[object DOMException]",_r="[object Error]",qr="[object Function]",ni="[object GeneratorFunction]",Se="[object Map]",Zn="[object Number]",pl="[object Null]",ze="[object Object]",ri="[object Promise]",kl="[object Proxy]",Xn="[object RegExp]",Ee="[object Set]",Jn="[object String]",Ar="[object Symbol]",cl="[object Undefined]",Qn="[object WeakMap]",yl="[object WeakSet]",er="[object ArrayBuffer]",Sn="[object DataView]",qt="[object Float32Array]",At="[object Float64Array]",wt="[object Int8Array]",Tt="[object Int16Array]",Rt="[object Int32Array]",xt="[object Uint8Array]",jt="[object Uint8ClampedArray]",Pt="[object Uint16Array]",Bt="[object Uint32Array]",hl=/\b__p \+= '';/g,bl=/\b(__p \+=) '' \+/g,_l=/(__e\(.*?\)|\b__t\)) \+\n'';/g,ti=/&(?:amp|lt|gt|quot|#39);/g,ai=/[&<>"']/g,ql=RegExp(ti.source),Al=RegExp(ai.source),wl=/<%-([\s\S]+?)%>/g,Tl=/<%([\s\S]+?)%>/g,ii=/<%=([\s\S]+?)%>/g,Rl=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,xl=/^\w*$/,jl=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,St=/[\\^$.*+?()[\]{}|]/g,Pl=RegExp(St.source),Et=/^\s+/,Bl=/\s/,Sl=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,El=/\{\n\/\* \[wrapped with (.+)\] \*/,Fl=/,? & /,Nl=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Il=/[()=,{}\[\]\/\s]/,Ll=/\\(\\)?/g,Ol=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,si=/\w*$/,Ml=/^[-+]0x[0-9a-f]+$/i,Cl=/^0b[01]+$/i,Kl=/^\[object .+?Constructor\]$/,Dl=/^0o[0-7]+$/i,Vl=/^(?:0|[1-9]\d*)$/,Ul=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,wr=/($^)/,Wl=/['\n\r\u2028\u2029\\]/g,Tr="\\ud800-\\udfff",Gl="\\u0300-\\u036f",Hl="\\ufe20-\\ufe2f",$l="\\u20d0-\\u20ff",ui=Gl+Hl+$l,li="\\u2700-\\u27bf",oi="a-z\\xdf-\\xf6\\xf8-\\xff",Yl="\\xac\\xb1\\xd7\\xf7",zl="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Zl="\\u2000-\\u206f",Xl=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",di="A-Z\\xc0-\\xd6\\xd8-\\xde",gi="\\ufe0e\\ufe0f",fi=Yl+zl+Zl+Xl,Ft="['’]",Jl="["+Tr+"]",vi="["+fi+"]",Rr="["+ui+"]",mi="\\d+",Ql="["+li+"]",pi="["+oi+"]",ki="[^"+Tr+fi+mi+li+oi+di+"]",Nt="\\ud83c[\\udffb-\\udfff]",eo="(?:"+Rr+"|"+Nt+")",ci="[^"+Tr+"]",It="(?:\\ud83c[\\udde6-\\uddff]){2}",Lt="[\\ud800-\\udbff][\\udc00-\\udfff]",En="["+di+"]",yi="\\u200d",hi="(?:"+pi+"|"+ki+")",no="(?:"+En+"|"+ki+")",bi="(?:"+Ft+"(?:d|ll|m|re|s|t|ve))?",_i="(?:"+Ft+"(?:D|LL|M|RE|S|T|VE))?",qi=eo+"?",Ai="["+gi+"]?",ro="(?:"+yi+"(?:"+[ci,It,Lt].join("|")+")"+Ai+qi+")*",to="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",ao="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",wi=Ai+qi+ro,io="(?:"+[Ql,It,Lt].join("|")+")"+wi,so="(?:"+[ci+Rr+"?",Rr,It,Lt,Jl].join("|")+")",uo=RegExp(Ft,"g"),lo=RegExp(Rr,"g"),Ot=RegExp(Nt+"(?="+Nt+")|"+so+wi,"g"),oo=RegExp([En+"?"+pi+"+"+bi+"(?="+[vi,En,"$"].join("|")+")",no+"+"+_i+"(?="+[vi,En+hi,"$"].join("|")+")",En+"?"+hi+"+"+bi,En+"+"+_i,ao,to,mi,io].join("|"),"g"),go=RegExp("["+yi+Tr+ui+gi+"]"),fo=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,vo=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],mo=-1,G={};G[qt]=G[At]=G[wt]=G[Tt]=G[Rt]=G[xt]=G[jt]=G[Pt]=G[Bt]=!0,G[Bn]=G[br]=G[er]=G[Yn]=G[Sn]=G[zn]=G[_r]=G[qr]=G[Se]=G[Zn]=G[ze]=G[Xn]=G[Ee]=G[Jn]=G[Qn]=!1;var W={};W[Bn]=W[br]=W[er]=W[Sn]=W[Yn]=W[zn]=W[qt]=W[At]=W[wt]=W[Tt]=W[Rt]=W[Se]=W[Zn]=W[ze]=W[Xn]=W[Ee]=W[Jn]=W[Ar]=W[xt]=W[jt]=W[Pt]=W[Bt]=!0,W[_r]=W[qr]=W[Qn]=!1;var po={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},ko={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},co={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},yo={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},ho=parseFloat,bo=parseInt,Ti=typeof kr=="object"&&kr&&kr.Object===Object&&kr,_o=typeof self=="object"&&self&&self.Object===Object&&self,te=Ti||_o||Function("return this")(),Mt=b&&!b.nodeType&&b,yn=Mt&&!0&&v&&!v.nodeType&&v,Ri=yn&&yn.exports===Mt,Ct=Ri&&Ti.process,_e=function(){try{var d=yn&&yn.require&&yn.require("util").types;return d||Ct&&Ct.binding&&Ct.binding("util")}catch{}}(),xi=_e&&_e.isArrayBuffer,ji=_e&&_e.isDate,Pi=_e&&_e.isMap,Bi=_e&&_e.isRegExp,Si=_e&&_e.isSet,Ei=_e&&_e.isTypedArray;function pe(d,m,f){switch(f.length){case 0:return d.call(m);case 1:return d.call(m,f[0]);case 2:return d.call(m,f[0],f[1]);case 3:return d.call(m,f[0],f[1],f[2])}return d.apply(m,f)}function qo(d,m,f,_){for(var P=-1,C=d==null?0:d.length;++P<C;){var ee=d[P];m(_,ee,f(ee),d)}return _}function qe(d,m){for(var f=-1,_=d==null?0:d.length;++f<_&&m(d[f],f,d)!==!1;);return d}function Ao(d,m){for(var f=d==null?0:d.length;f--&&m(d[f],f,d)!==!1;);return d}function Fi(d,m){for(var f=-1,_=d==null?0:d.length;++f<_;)if(!m(d[f],f,d))return!1;return!0}function un(d,m){for(var f=-1,_=d==null?0:d.length,P=0,C=[];++f<_;){var ee=d[f];m(ee,f,d)&&(C[P++]=ee)}return C}function xr(d,m){var f=d==null?0:d.length;return!!f&&Fn(d,m,0)>-1}function Kt(d,m,f){for(var _=-1,P=d==null?0:d.length;++_<P;)if(f(m,d[_]))return!0;return!1}function H(d,m){for(var f=-1,_=d==null?0:d.length,P=Array(_);++f<_;)P[f]=m(d[f],f,d);return P}function ln(d,m){for(var f=-1,_=m.length,P=d.length;++f<_;)d[P+f]=m[f];return d}function Dt(d,m,f,_){var P=-1,C=d==null?0:d.length;for(_&&C&&(f=d[++P]);++P<C;)f=m(f,d[P],P,d);return f}function wo(d,m,f,_){var P=d==null?0:d.length;for(_&&P&&(f=d[--P]);P--;)f=m(f,d[P],P,d);return f}function Vt(d,m){for(var f=-1,_=d==null?0:d.length;++f<_;)if(m(d[f],f,d))return!0;return!1}var To=Ut("length");function Ro(d){return d.split("")}function xo(d){return d.match(Nl)||[]}function Ni(d,m,f){var _;return f(d,function(P,C,ee){if(m(P,C,ee))return _=C,!1}),_}function jr(d,m,f,_){for(var P=d.length,C=f+(_?1:-1);_?C--:++C<P;)if(m(d[C],C,d))return C;return-1}function Fn(d,m,f){return m===m?Co(d,m,f):jr(d,Ii,f)}function jo(d,m,f,_){for(var P=f-1,C=d.length;++P<C;)if(_(d[P],m))return P;return-1}function Ii(d){return d!==d}function Li(d,m){var f=d==null?0:d.length;return f?Gt(d,m)/f:hr}function Ut(d){return function(m){return m==null?u:m[d]}}function Wt(d){return function(m){return d==null?u:d[m]}}function Oi(d,m,f,_,P){return P(d,function(C,ee,U){f=_?(_=!1,C):m(f,C,ee,U)}),f}function Po(d,m){var f=d.length;for(d.sort(m);f--;)d[f]=d[f].value;return d}function Gt(d,m){for(var f,_=-1,P=d.length;++_<P;){var C=m(d[_]);C!==u&&(f=f===u?C:f+C)}return f}function Ht(d,m){for(var f=-1,_=Array(d);++f<d;)_[f]=m(f);return _}function Bo(d,m){return H(m,function(f){return[f,d[f]]})}function Mi(d){return d&&d.slice(0,Vi(d)+1).replace(Et,"")}function ke(d){return function(m){return d(m)}}function $t(d,m){return H(m,function(f){return d[f]})}function nr(d,m){return d.has(m)}function Ci(d,m){for(var f=-1,_=d.length;++f<_&&Fn(m,d[f],0)>-1;);return f}function Ki(d,m){for(var f=d.length;f--&&Fn(m,d[f],0)>-1;);return f}function So(d,m){for(var f=d.length,_=0;f--;)d[f]===m&&++_;return _}var Eo=Wt(po),Fo=Wt(ko);function No(d){return"\\"+yo[d]}function Io(d,m){return d==null?u:d[m]}function Nn(d){return go.test(d)}function Lo(d){return fo.test(d)}function Oo(d){for(var m,f=[];!(m=d.next()).done;)f.push(m.value);return f}function Yt(d){var m=-1,f=Array(d.size);return d.forEach(function(_,P){f[++m]=[P,_]}),f}function Di(d,m){return function(f){return d(m(f))}}function on(d,m){for(var f=-1,_=d.length,P=0,C=[];++f<_;){var ee=d[f];(ee===m||ee===M)&&(d[f]=M,C[P++]=f)}return C}function Pr(d){var m=-1,f=Array(d.size);return d.forEach(function(_){f[++m]=_}),f}function Mo(d){var m=-1,f=Array(d.size);return d.forEach(function(_){f[++m]=[_,_]}),f}function Co(d,m,f){for(var _=f-1,P=d.length;++_<P;)if(d[_]===m)return _;return-1}function Ko(d,m,f){for(var _=f+1;_--;)if(d[_]===m)return _;return _}function In(d){return Nn(d)?Vo(d):To(d)}function Fe(d){return Nn(d)?Uo(d):Ro(d)}function Vi(d){for(var m=d.length;m--&&Bl.test(d.charAt(m)););return m}var Do=Wt(co);function Vo(d){for(var m=Ot.lastIndex=0;Ot.test(d);)++m;return m}function Uo(d){return d.match(Ot)||[]}function Wo(d){return d.match(oo)||[]}var Go=function d(m){m=m==null?te:Ln.defaults(te.Object(),m,Ln.pick(te,vo));var f=m.Array,_=m.Date,P=m.Error,C=m.Function,ee=m.Math,U=m.Object,zt=m.RegExp,Ho=m.String,Ae=m.TypeError,Br=f.prototype,$o=C.prototype,On=U.prototype,Sr=m["__core-js_shared__"],Er=$o.toString,V=On.hasOwnProperty,Yo=0,Ui=function(){var e=/[^.]+$/.exec(Sr&&Sr.keys&&Sr.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Fr=On.toString,zo=Er.call(U),Zo=te._,Xo=zt("^"+Er.call(V).replace(St,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Nr=Ri?m.Buffer:u,dn=m.Symbol,Ir=m.Uint8Array,Wi=Nr?Nr.allocUnsafe:u,Lr=Di(U.getPrototypeOf,U),Gi=U.create,Hi=On.propertyIsEnumerable,Or=Br.splice,$i=dn?dn.isConcatSpreadable:u,rr=dn?dn.iterator:u,hn=dn?dn.toStringTag:u,Mr=function(){try{var e=wn(U,"defineProperty");return e({},"",{}),e}catch{}}(),Jo=m.clearTimeout!==te.clearTimeout&&m.clearTimeout,Qo=_&&_.now!==te.Date.now&&_.now,ed=m.setTimeout!==te.setTimeout&&m.setTimeout,Cr=ee.ceil,Kr=ee.floor,Zt=U.getOwnPropertySymbols,nd=Nr?Nr.isBuffer:u,Yi=m.isFinite,rd=Br.join,td=Di(U.keys,U),ne=ee.max,ie=ee.min,ad=_.now,id=m.parseInt,zi=ee.random,sd=Br.reverse,Xt=wn(m,"DataView"),tr=wn(m,"Map"),Jt=wn(m,"Promise"),Mn=wn(m,"Set"),ar=wn(m,"WeakMap"),ir=wn(U,"create"),Dr=ar&&new ar,Cn={},ud=Tn(Xt),ld=Tn(tr),od=Tn(Jt),dd=Tn(Mn),gd=Tn(ar),Vr=dn?dn.prototype:u,sr=Vr?Vr.valueOf:u,Zi=Vr?Vr.toString:u;function i(e){if(z(e)&&!B(e)&&!(e instanceof L)){if(e instanceof we)return e;if(V.call(e,"__wrapped__"))return Xs(e)}return new we(e)}var Kn=function(){function e(){}return function(n){if(!Y(n))return{};if(Gi)return Gi(n);e.prototype=n;var r=new e;return e.prototype=u,r}}();function Ur(){}function we(e,n){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!n,this.__index__=0,this.__values__=u}i.templateSettings={escape:wl,evaluate:Tl,interpolate:ii,variable:"",imports:{_:i}},i.prototype=Ur.prototype,i.prototype.constructor=i,we.prototype=Kn(Ur.prototype),we.prototype.constructor=we;function L(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=We,this.__views__=[]}function fd(){var e=new L(this.__wrapped__);return e.__actions__=ge(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=ge(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=ge(this.__views__),e}function vd(){if(this.__filtered__){var e=new L(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function md(){var e=this.__wrapped__.value(),n=this.__dir__,r=B(e),t=n<0,a=r?e.length:0,s=Rg(0,a,this.__views__),l=s.start,o=s.end,g=o-l,p=t?o:l-1,k=this.__iteratees__,c=k.length,h=0,q=ie(g,this.__takeCount__);if(!r||!t&&a==g&&q==g)return bs(e,this.__actions__);var T=[];e:for(;g--&&h<q;){p+=n;for(var F=-1,R=e[p];++F<c;){var I=k[F],O=I.iteratee,he=I.type,oe=O(R);if(he==ul)R=oe;else if(!oe){if(he==ei)continue e;break e}}T[h++]=R}return T}L.prototype=Kn(Ur.prototype),L.prototype.constructor=L;function bn(e){var n=-1,r=e==null?0:e.length;for(this.clear();++n<r;){var t=e[n];this.set(t[0],t[1])}}function pd(){this.__data__=ir?ir(null):{},this.size=0}function kd(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n}function cd(e){var n=this.__data__;if(ir){var r=n[e];return r===D?u:r}return V.call(n,e)?n[e]:u}function yd(e){var n=this.__data__;return ir?n[e]!==u:V.call(n,e)}function hd(e,n){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=ir&&n===u?D:n,this}bn.prototype.clear=pd,bn.prototype.delete=kd,bn.prototype.get=cd,bn.prototype.has=yd,bn.prototype.set=hd;function Ze(e){var n=-1,r=e==null?0:e.length;for(this.clear();++n<r;){var t=e[n];this.set(t[0],t[1])}}function bd(){this.__data__=[],this.size=0}function _d(e){var n=this.__data__,r=Wr(n,e);if(r<0)return!1;var t=n.length-1;return r==t?n.pop():Or.call(n,r,1),--this.size,!0}function qd(e){var n=this.__data__,r=Wr(n,e);return r<0?u:n[r][1]}function Ad(e){return Wr(this.__data__,e)>-1}function wd(e,n){var r=this.__data__,t=Wr(r,e);return t<0?(++this.size,r.push([e,n])):r[t][1]=n,this}Ze.prototype.clear=bd,Ze.prototype.delete=_d,Ze.prototype.get=qd,Ze.prototype.has=Ad,Ze.prototype.set=wd;function Xe(e){var n=-1,r=e==null?0:e.length;for(this.clear();++n<r;){var t=e[n];this.set(t[0],t[1])}}function Td(){this.size=0,this.__data__={hash:new bn,map:new(tr||Ze),string:new bn}}function Rd(e){var n=rt(this,e).delete(e);return this.size-=n?1:0,n}function xd(e){return rt(this,e).get(e)}function jd(e){return rt(this,e).has(e)}function Pd(e,n){var r=rt(this,e),t=r.size;return r.set(e,n),this.size+=r.size==t?0:1,this}Xe.prototype.clear=Td,Xe.prototype.delete=Rd,Xe.prototype.get=xd,Xe.prototype.has=jd,Xe.prototype.set=Pd;function _n(e){var n=-1,r=e==null?0:e.length;for(this.__data__=new Xe;++n<r;)this.add(e[n])}function Bd(e){return this.__data__.set(e,D),this}function Sd(e){return this.__data__.has(e)}_n.prototype.add=_n.prototype.push=Bd,_n.prototype.has=Sd;function Ne(e){var n=this.__data__=new Ze(e);this.size=n.size}function Ed(){this.__data__=new Ze,this.size=0}function Fd(e){var n=this.__data__,r=n.delete(e);return this.size=n.size,r}function Nd(e){return this.__data__.get(e)}function Id(e){return this.__data__.has(e)}function Ld(e,n){var r=this.__data__;if(r instanceof Ze){var t=r.__data__;if(!tr||t.length<A-1)return t.push([e,n]),this.size=++r.size,this;r=this.__data__=new Xe(t)}return r.set(e,n),this.size=r.size,this}Ne.prototype.clear=Ed,Ne.prototype.delete=Fd,Ne.prototype.get=Nd,Ne.prototype.has=Id,Ne.prototype.set=Ld;function Xi(e,n){var r=B(e),t=!r&&Rn(e),a=!r&&!t&&pn(e),s=!r&&!t&&!a&&Wn(e),l=r||t||a||s,o=l?Ht(e.length,Ho):[],g=o.length;for(var p in e)(n||V.call(e,p))&&!(l&&(p=="length"||a&&(p=="offset"||p=="parent")||s&&(p=="buffer"||p=="byteLength"||p=="byteOffset")||nn(p,g)))&&o.push(p);return o}function Ji(e){var n=e.length;return n?e[oa(0,n-1)]:u}function Od(e,n){return tt(ge(e),qn(n,0,e.length))}function Md(e){return tt(ge(e))}function Qt(e,n,r){(r!==u&&!Ie(e[n],r)||r===u&&!(n in e))&&Je(e,n,r)}function ur(e,n,r){var t=e[n];(!(V.call(e,n)&&Ie(t,r))||r===u&&!(n in e))&&Je(e,n,r)}function Wr(e,n){for(var r=e.length;r--;)if(Ie(e[r][0],n))return r;return-1}function Cd(e,n,r,t){return gn(e,function(a,s,l){n(t,a,r(a),l)}),t}function Qi(e,n){return e&&He(n,re(n),e)}function Kd(e,n){return e&&He(n,ve(n),e)}function Je(e,n,r){n=="__proto__"&&Mr?Mr(e,n,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[n]=r}function ea(e,n){for(var r=-1,t=n.length,a=f(t),s=e==null;++r<t;)a[r]=s?u:Na(e,n[r]);return a}function qn(e,n,r){return e===e&&(r!==u&&(e=e<=r?e:r),n!==u&&(e=e>=n?e:n)),e}function Te(e,n,r,t,a,s){var l,o=n&Z,g=n&Be,p=n&Ce;if(r&&(l=a?r(e,t,a,s):r(e)),l!==u)return l;if(!Y(e))return e;var k=B(e);if(k){if(l=jg(e),!o)return ge(e,l)}else{var c=se(e),h=c==qr||c==ni;if(pn(e))return As(e,o);if(c==ze||c==Bn||h&&!a){if(l=g||h?{}:Vs(e),!o)return g?cg(e,Kd(l,e)):kg(e,Qi(l,e))}else{if(!W[c])return a?e:{};l=Pg(e,c,o)}}s||(s=new Ne);var q=s.get(e);if(q)return q;s.set(e,l),cu(e)?e.forEach(function(R){l.add(Te(R,n,r,R,e,s))}):pu(e)&&e.forEach(function(R,I){l.set(I,Te(R,n,r,I,e,s))});var T=p?g?ba:ha:g?ve:re,F=k?u:T(e);return qe(F||e,function(R,I){F&&(I=R,R=e[I]),ur(l,I,Te(R,n,r,I,e,s))}),l}function Dd(e){var n=re(e);return function(r){return es(r,e,n)}}function es(e,n,r){var t=r.length;if(e==null)return!t;for(e=U(e);t--;){var a=r[t],s=n[a],l=e[a];if(l===u&&!(a in e)||!s(l))return!1}return!0}function ns(e,n,r){if(typeof e!="function")throw new Ae(j);return mr(function(){e.apply(u,r)},n)}function lr(e,n,r,t){var a=-1,s=xr,l=!0,o=e.length,g=[],p=n.length;if(!o)return g;r&&(n=H(n,ke(r))),t?(s=Kt,l=!1):n.length>=A&&(s=nr,l=!1,n=new _n(n));e:for(;++a<o;){var k=e[a],c=r==null?k:r(k);if(k=t||k!==0?k:0,l&&c===c){for(var h=p;h--;)if(n[h]===c)continue e;g.push(k)}else s(n,c,t)||g.push(k)}return g}var gn=js(Ge),rs=js(ra,!0);function Vd(e,n){var r=!0;return gn(e,function(t,a,s){return r=!!n(t,a,s),r}),r}function Gr(e,n,r){for(var t=-1,a=e.length;++t<a;){var s=e[t],l=n(s);if(l!=null&&(o===u?l===l&&!ye(l):r(l,o)))var o=l,g=s}return g}function Ud(e,n,r,t){var a=e.length;for(r=E(r),r<0&&(r=-r>a?0:a+r),t=t===u||t>a?a:E(t),t<0&&(t+=a),t=r>t?0:hu(t);r<t;)e[r++]=n;return e}function ts(e,n){var r=[];return gn(e,function(t,a,s){n(t,a,s)&&r.push(t)}),r}function ae(e,n,r,t,a){var s=-1,l=e.length;for(r||(r=Sg),a||(a=[]);++s<l;){var o=e[s];n>0&&r(o)?n>1?ae(o,n-1,r,t,a):ln(a,o):t||(a[a.length]=o)}return a}var na=Ps(),as=Ps(!0);function Ge(e,n){return e&&na(e,n,re)}function ra(e,n){return e&&as(e,n,re)}function Hr(e,n){return un(n,function(r){return rn(e[r])})}function An(e,n){n=vn(n,e);for(var r=0,t=n.length;e!=null&&r<t;)e=e[$e(n[r++])];return r&&r==t?e:u}function is(e,n,r){var t=n(e);return B(e)?t:ln(t,r(e))}function ue(e){return e==null?e===u?cl:pl:hn&&hn in U(e)?Tg(e):Mg(e)}function ta(e,n){return e>n}function Wd(e,n){return e!=null&&V.call(e,n)}function Gd(e,n){return e!=null&&n in U(e)}function Hd(e,n,r){return e>=ie(n,r)&&e<ne(n,r)}function aa(e,n,r){for(var t=r?Kt:xr,a=e[0].length,s=e.length,l=s,o=f(s),g=1/0,p=[];l--;){var k=e[l];l&&n&&(k=H(k,ke(n))),g=ie(k.length,g),o[l]=!r&&(n||a>=120&&k.length>=120)?new _n(l&&k):u}k=e[0];var c=-1,h=o[0];e:for(;++c<a&&p.length<g;){var q=k[c],T=n?n(q):q;if(q=r||q!==0?q:0,!(h?nr(h,T):t(p,T,r))){for(l=s;--l;){var F=o[l];if(!(F?nr(F,T):t(e[l],T,r)))continue e}h&&h.push(T),p.push(q)}}return p}function $d(e,n,r,t){return Ge(e,function(a,s,l){n(t,r(a),s,l)}),t}function or(e,n,r){n=vn(n,e),e=Hs(e,n);var t=e==null?e:e[$e(xe(n))];return t==null?u:pe(t,e,r)}function ss(e){return z(e)&&ue(e)==Bn}function Yd(e){return z(e)&&ue(e)==er}function zd(e){return z(e)&&ue(e)==zn}function dr(e,n,r,t,a){return e===n?!0:e==null||n==null||!z(e)&&!z(n)?e!==e&&n!==n:Zd(e,n,r,t,dr,a)}function Zd(e,n,r,t,a,s){var l=B(e),o=B(n),g=l?br:se(e),p=o?br:se(n);g=g==Bn?ze:g,p=p==Bn?ze:p;var k=g==ze,c=p==ze,h=g==p;if(h&&pn(e)){if(!pn(n))return!1;l=!0,k=!1}if(h&&!k)return s||(s=new Ne),l||Wn(e)?Cs(e,n,r,t,a,s):Ag(e,n,g,r,t,a,s);if(!(r&Ke)){var q=k&&V.call(e,"__wrapped__"),T=c&&V.call(n,"__wrapped__");if(q||T){var F=q?e.value():e,R=T?n.value():n;return s||(s=new Ne),a(F,R,r,t,s)}}return h?(s||(s=new Ne),wg(e,n,r,t,a,s)):!1}function Xd(e){return z(e)&&se(e)==Se}function ia(e,n,r,t){var a=r.length,s=a,l=!t;if(e==null)return!s;for(e=U(e);a--;){var o=r[a];if(l&&o[2]?o[1]!==e[o[0]]:!(o[0]in e))return!1}for(;++a<s;){o=r[a];var g=o[0],p=e[g],k=o[1];if(l&&o[2]){if(p===u&&!(g in e))return!1}else{var c=new Ne;if(t)var h=t(p,k,g,e,n,c);if(!(h===u?dr(k,p,Ke|De,t,c):h))return!1}}return!0}function us(e){if(!Y(e)||Fg(e))return!1;var n=rn(e)?Xo:Kl;return n.test(Tn(e))}function Jd(e){return z(e)&&ue(e)==Xn}function Qd(e){return z(e)&&se(e)==Ee}function eg(e){return z(e)&&ot(e.length)&&!!G[ue(e)]}function ls(e){return typeof e=="function"?e:e==null?me:typeof e=="object"?B(e)?gs(e[0],e[1]):ds(e):Bu(e)}function sa(e){if(!vr(e))return td(e);var n=[];for(var r in U(e))V.call(e,r)&&r!="constructor"&&n.push(r);return n}function ng(e){if(!Y(e))return Og(e);var n=vr(e),r=[];for(var t in e)t=="constructor"&&(n||!V.call(e,t))||r.push(t);return r}function ua(e,n){return e<n}function os(e,n){var r=-1,t=fe(e)?f(e.length):[];return gn(e,function(a,s,l){t[++r]=n(a,s,l)}),t}function ds(e){var n=qa(e);return n.length==1&&n[0][2]?Ws(n[0][0],n[0][1]):function(r){return r===e||ia(r,e,n)}}function gs(e,n){return wa(e)&&Us(n)?Ws($e(e),n):function(r){var t=Na(r,e);return t===u&&t===n?Ia(r,e):dr(n,t,Ke|De)}}function $r(e,n,r,t,a){e!==n&&na(n,function(s,l){if(a||(a=new Ne),Y(s))rg(e,n,l,r,$r,t,a);else{var o=t?t(Ra(e,l),s,l+"",e,n,a):u;o===u&&(o=s),Qt(e,l,o)}},ve)}function rg(e,n,r,t,a,s,l){var o=Ra(e,r),g=Ra(n,r),p=l.get(g);if(p){Qt(e,r,p);return}var k=s?s(o,g,r+"",e,n,l):u,c=k===u;if(c){var h=B(g),q=!h&&pn(g),T=!h&&!q&&Wn(g);k=g,h||q||T?B(o)?k=o:X(o)?k=ge(o):q?(c=!1,k=As(g,!0)):T?(c=!1,k=ws(g,!0)):k=[]:pr(g)||Rn(g)?(k=o,Rn(o)?k=bu(o):(!Y(o)||rn(o))&&(k=Vs(g))):c=!1}c&&(l.set(g,k),a(k,g,t,s,l),l.delete(g)),Qt(e,r,k)}function fs(e,n){var r=e.length;if(r)return n+=n<0?r:0,nn(n,r)?e[n]:u}function vs(e,n,r){n.length?n=H(n,function(s){return B(s)?function(l){return An(l,s.length===1?s[0]:s)}:s}):n=[me];var t=-1;n=H(n,ke(w()));var a=os(e,function(s,l,o){var g=H(n,function(p){return p(s)});return{criteria:g,index:++t,value:s}});return Po(a,function(s,l){return pg(s,l,r)})}function tg(e,n){return ms(e,n,function(r,t){return Ia(e,t)})}function ms(e,n,r){for(var t=-1,a=n.length,s={};++t<a;){var l=n[t],o=An(e,l);r(o,l)&&gr(s,vn(l,e),o)}return s}function ag(e){return function(n){return An(n,e)}}function la(e,n,r,t){var a=t?jo:Fn,s=-1,l=n.length,o=e;for(e===n&&(n=ge(n)),r&&(o=H(e,ke(r)));++s<l;)for(var g=0,p=n[s],k=r?r(p):p;(g=a(o,k,g,t))>-1;)o!==e&&Or.call(o,g,1),Or.call(e,g,1);return e}function ps(e,n){for(var r=e?n.length:0,t=r-1;r--;){var a=n[r];if(r==t||a!==s){var s=a;nn(a)?Or.call(e,a,1):fa(e,a)}}return e}function oa(e,n){return e+Kr(zi()*(n-e+1))}function ig(e,n,r,t){for(var a=-1,s=ne(Cr((n-e)/(r||1)),0),l=f(s);s--;)l[t?s:++a]=e,e+=r;return l}function da(e,n){var r="";if(!e||n<1||n>sn)return r;do n%2&&(r+=e),n=Kr(n/2),n&&(e+=e);while(n);return r}function N(e,n){return xa(Gs(e,n,me),e+"")}function sg(e){return Ji(Gn(e))}function ug(e,n){var r=Gn(e);return tt(r,qn(n,0,r.length))}function gr(e,n,r,t){if(!Y(e))return e;n=vn(n,e);for(var a=-1,s=n.length,l=s-1,o=e;o!=null&&++a<s;){var g=$e(n[a]),p=r;if(g==="__proto__"||g==="constructor"||g==="prototype")return e;if(a!=l){var k=o[g];p=t?t(k,g,o):u,p===u&&(p=Y(k)?k:nn(n[a+1])?[]:{})}ur(o,g,p),o=o[g]}return e}var ks=Dr?function(e,n){return Dr.set(e,n),e}:me,lg=Mr?function(e,n){return Mr(e,"toString",{configurable:!0,enumerable:!1,value:Oa(n),writable:!0})}:me;function og(e){return tt(Gn(e))}function Re(e,n,r){var t=-1,a=e.length;n<0&&(n=-n>a?0:a+n),r=r>a?a:r,r<0&&(r+=a),a=n>r?0:r-n>>>0,n>>>=0;for(var s=f(a);++t<a;)s[t]=e[t+n];return s}function dg(e,n){var r;return gn(e,function(t,a,s){return r=n(t,a,s),!r}),!!r}function Yr(e,n,r){var t=0,a=e==null?t:e.length;if(typeof n=="number"&&n===n&&a<=gl){for(;t<a;){var s=t+a>>>1,l=e[s];l!==null&&!ye(l)&&(r?l<=n:l<n)?t=s+1:a=s}return a}return ga(e,n,me,r)}function ga(e,n,r,t){var a=0,s=e==null?0:e.length;if(s===0)return 0;n=r(n);for(var l=n!==n,o=n===null,g=ye(n),p=n===u;a<s;){var k=Kr((a+s)/2),c=r(e[k]),h=c!==u,q=c===null,T=c===c,F=ye(c);if(l)var R=t||T;else p?R=T&&(t||h):o?R=T&&h&&(t||!q):g?R=T&&h&&!q&&(t||!F):q||F?R=!1:R=t?c<=n:c<n;R?a=k+1:s=k}return ie(s,dl)}function cs(e,n){for(var r=-1,t=e.length,a=0,s=[];++r<t;){var l=e[r],o=n?n(l):l;if(!r||!Ie(o,g)){var g=o;s[a++]=l===0?0:l}}return s}function ys(e){return typeof e=="number"?e:ye(e)?hr:+e}function ce(e){if(typeof e=="string")return e;if(B(e))return H(e,ce)+"";if(ye(e))return Zi?Zi.call(e):"";var n=e+"";return n=="0"&&1/e==-cn?"-0":n}function fn(e,n,r){var t=-1,a=xr,s=e.length,l=!0,o=[],g=o;if(r)l=!1,a=Kt;else if(s>=A){var p=n?null:_g(e);if(p)return Pr(p);l=!1,a=nr,g=new _n}else g=n?[]:o;e:for(;++t<s;){var k=e[t],c=n?n(k):k;if(k=r||k!==0?k:0,l&&c===c){for(var h=g.length;h--;)if(g[h]===c)continue e;n&&g.push(c),o.push(k)}else a(g,c,r)||(g!==o&&g.push(c),o.push(k))}return o}function fa(e,n){return n=vn(n,e),e=Hs(e,n),e==null||delete e[$e(xe(n))]}function hs(e,n,r,t){return gr(e,n,r(An(e,n)),t)}function zr(e,n,r,t){for(var a=e.length,s=t?a:-1;(t?s--:++s<a)&&n(e[s],s,e););return r?Re(e,t?0:s,t?s+1:a):Re(e,t?s+1:0,t?a:s)}function bs(e,n){var r=e;return r instanceof L&&(r=r.value()),Dt(n,function(t,a){return a.func.apply(a.thisArg,ln([t],a.args))},r)}function va(e,n,r){var t=e.length;if(t<2)return t?fn(e[0]):[];for(var a=-1,s=f(t);++a<t;)for(var l=e[a],o=-1;++o<t;)o!=a&&(s[a]=lr(s[a]||l,e[o],n,r));return fn(ae(s,1),n,r)}function _s(e,n,r){for(var t=-1,a=e.length,s=n.length,l={};++t<a;){var o=t<s?n[t]:u;r(l,e[t],o)}return l}function ma(e){return X(e)?e:[]}function pa(e){return typeof e=="function"?e:me}function vn(e,n){return B(e)?e:wa(e,n)?[e]:Zs(K(e))}var gg=N;function mn(e,n,r){var t=e.length;return r=r===u?t:r,!n&&r>=t?e:Re(e,n,r)}var qs=Jo||function(e){return te.clearTimeout(e)};function As(e,n){if(n)return e.slice();var r=e.length,t=Wi?Wi(r):new e.constructor(r);return e.copy(t),t}function ka(e){var n=new e.constructor(e.byteLength);return new Ir(n).set(new Ir(e)),n}function fg(e,n){var r=n?ka(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}function vg(e){var n=new e.constructor(e.source,si.exec(e));return n.lastIndex=e.lastIndex,n}function mg(e){return sr?U(sr.call(e)):{}}function ws(e,n){var r=n?ka(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function Ts(e,n){if(e!==n){var r=e!==u,t=e===null,a=e===e,s=ye(e),l=n!==u,o=n===null,g=n===n,p=ye(n);if(!o&&!p&&!s&&e>n||s&&l&&g&&!o&&!p||t&&l&&g||!r&&g||!a)return 1;if(!t&&!s&&!p&&e<n||p&&r&&a&&!t&&!s||o&&r&&a||!l&&a||!g)return-1}return 0}function pg(e,n,r){for(var t=-1,a=e.criteria,s=n.criteria,l=a.length,o=r.length;++t<l;){var g=Ts(a[t],s[t]);if(g){if(t>=o)return g;var p=r[t];return g*(p=="desc"?-1:1)}}return e.index-n.index}function Rs(e,n,r,t){for(var a=-1,s=e.length,l=r.length,o=-1,g=n.length,p=ne(s-l,0),k=f(g+p),c=!t;++o<g;)k[o]=n[o];for(;++a<l;)(c||a<s)&&(k[r[a]]=e[a]);for(;p--;)k[o++]=e[a++];return k}function xs(e,n,r,t){for(var a=-1,s=e.length,l=-1,o=r.length,g=-1,p=n.length,k=ne(s-o,0),c=f(k+p),h=!t;++a<k;)c[a]=e[a];for(var q=a;++g<p;)c[q+g]=n[g];for(;++l<o;)(h||a<s)&&(c[q+r[l]]=e[a++]);return c}function ge(e,n){var r=-1,t=e.length;for(n||(n=f(t));++r<t;)n[r]=e[r];return n}function He(e,n,r,t){var a=!r;r||(r={});for(var s=-1,l=n.length;++s<l;){var o=n[s],g=t?t(r[o],e[o],o,r,e):u;g===u&&(g=e[o]),a?Je(r,o,g):ur(r,o,g)}return r}function kg(e,n){return He(e,Aa(e),n)}function cg(e,n){return He(e,Ks(e),n)}function Zr(e,n){return function(r,t){var a=B(r)?qo:Cd,s=n?n():{};return a(r,e,w(t,2),s)}}function Dn(e){return N(function(n,r){var t=-1,a=r.length,s=a>1?r[a-1]:u,l=a>2?r[2]:u;for(s=e.length>3&&typeof s=="function"?(a--,s):u,l&&le(r[0],r[1],l)&&(s=a<3?u:s,a=1),n=U(n);++t<a;){var o=r[t];o&&e(n,o,t,s)}return n})}function js(e,n){return function(r,t){if(r==null)return r;if(!fe(r))return e(r,t);for(var a=r.length,s=n?a:-1,l=U(r);(n?s--:++s<a)&&t(l[s],s,l)!==!1;);return r}}function Ps(e){return function(n,r,t){for(var a=-1,s=U(n),l=t(n),o=l.length;o--;){var g=l[e?o:++a];if(r(s[g],g,s)===!1)break}return n}}function yg(e,n,r){var t=n&de,a=fr(e);function s(){var l=this&&this!==te&&this instanceof s?a:e;return l.apply(t?r:this,arguments)}return s}function Bs(e){return function(n){n=K(n);var r=Nn(n)?Fe(n):u,t=r?r[0]:n.charAt(0),a=r?mn(r,1).join(""):n.slice(1);return t[e]()+a}}function Vn(e){return function(n){return Dt(ju(xu(n).replace(uo,"")),e,"")}}function fr(e){return function(){var n=arguments;switch(n.length){case 0:return new e;case 1:return new e(n[0]);case 2:return new e(n[0],n[1]);case 3:return new e(n[0],n[1],n[2]);case 4:return new e(n[0],n[1],n[2],n[3]);case 5:return new e(n[0],n[1],n[2],n[3],n[4]);case 6:return new e(n[0],n[1],n[2],n[3],n[4],n[5]);case 7:return new e(n[0],n[1],n[2],n[3],n[4],n[5],n[6])}var r=Kn(e.prototype),t=e.apply(r,n);return Y(t)?t:r}}function hg(e,n,r){var t=fr(e);function a(){for(var s=arguments.length,l=f(s),o=s,g=Un(a);o--;)l[o]=arguments[o];var p=s<3&&l[0]!==g&&l[s-1]!==g?[]:on(l,g);if(s-=p.length,s<r)return Is(e,n,Xr,a.placeholder,u,l,p,u,u,r-s);var k=this&&this!==te&&this instanceof a?t:e;return pe(k,this,l)}return a}function Ss(e){return function(n,r,t){var a=U(n);if(!fe(n)){var s=w(r,3);n=re(n),r=function(o){return s(a[o],o,a)}}var l=e(n,r,t);return l>-1?a[s?n[l]:l]:u}}function Es(e){return en(function(n){var r=n.length,t=r,a=we.prototype.thru;for(e&&n.reverse();t--;){var s=n[t];if(typeof s!="function")throw new Ae(j);if(a&&!l&&nt(s)=="wrapper")var l=new we([],!0)}for(t=l?t:r;++t<r;){s=n[t];var o=nt(s),g=o=="wrapper"?_a(s):u;g&&Ta(g[0])&&g[1]==(Ye|Ve|Ue|$n)&&!g[4].length&&g[9]==1?l=l[nt(g[0])].apply(l,g[3]):l=s.length==1&&Ta(s)?l[o]():l.thru(s)}return function(){var p=arguments,k=p[0];if(l&&p.length==1&&B(k))return l.plant(k).value();for(var c=0,h=r?n[c].apply(this,p):k;++c<r;)h=n[c].call(this,h);return h}})}function Xr(e,n,r,t,a,s,l,o,g,p){var k=n&Ye,c=n&de,h=n&kn,q=n&(Ve|jn),T=n&_t,F=h?u:fr(e);function R(){for(var I=arguments.length,O=f(I),he=I;he--;)O[he]=arguments[he];if(q)var oe=Un(R),be=So(O,oe);if(t&&(O=Rs(O,t,a,q)),s&&(O=xs(O,s,l,q)),I-=be,q&&I<p){var J=on(O,oe);return Is(e,n,Xr,R.placeholder,r,O,J,o,g,p-I)}var Le=c?r:this,an=h?Le[e]:e;return I=O.length,o?O=Cg(O,o):T&&I>1&&O.reverse(),k&&g<I&&(O.length=g),this&&this!==te&&this instanceof R&&(an=F||fr(an)),an.apply(Le,O)}return R}function Fs(e,n){return function(r,t){return $d(r,e,n(t),{})}}function Jr(e,n){return function(r,t){var a;if(r===u&&t===u)return n;if(r!==u&&(a=r),t!==u){if(a===u)return t;typeof r=="string"||typeof t=="string"?(r=ce(r),t=ce(t)):(r=ys(r),t=ys(t)),a=e(r,t)}return a}}function ca(e){return en(function(n){return n=H(n,ke(w())),N(function(r){var t=this;return e(n,function(a){return pe(a,t,r)})})})}function Qr(e,n){n=n===u?" ":ce(n);var r=n.length;if(r<2)return r?da(n,e):n;var t=da(n,Cr(e/In(n)));return Nn(n)?mn(Fe(t),0,e).join(""):t.slice(0,e)}function bg(e,n,r,t){var a=n&de,s=fr(e);function l(){for(var o=-1,g=arguments.length,p=-1,k=t.length,c=f(k+g),h=this&&this!==te&&this instanceof l?s:e;++p<k;)c[p]=t[p];for(;g--;)c[p++]=arguments[++o];return pe(h,a?r:this,c)}return l}function Ns(e){return function(n,r,t){return t&&typeof t!="number"&&le(n,r,t)&&(r=t=u),n=tn(n),r===u?(r=n,n=0):r=tn(r),t=t===u?n<r?1:-1:tn(t),ig(n,r,t,e)}}function et(e){return function(n,r){return typeof n=="string"&&typeof r=="string"||(n=je(n),r=je(r)),e(n,r)}}function Is(e,n,r,t,a,s,l,o,g,p){var k=n&Ve,c=k?l:u,h=k?u:l,q=k?s:u,T=k?u:s;n|=k?Ue:Pn,n&=~(k?Pn:Ue),n&Qa||(n&=~(de|kn));var F=[e,n,a,q,c,T,h,o,g,p],R=r.apply(u,F);return Ta(e)&&$s(R,F),R.placeholder=t,Ys(R,e,n)}function ya(e){var n=ee[e];return function(r,t){if(r=je(r),t=t==null?0:ie(E(t),292),t&&Yi(r)){var a=(K(r)+"e").split("e"),s=n(a[0]+"e"+(+a[1]+t));return a=(K(s)+"e").split("e"),+(a[0]+"e"+(+a[1]-t))}return n(r)}}var _g=Mn&&1/Pr(new Mn([,-0]))[1]==cn?function(e){return new Mn(e)}:Ka;function Ls(e){return function(n){var r=se(n);return r==Se?Yt(n):r==Ee?Mo(n):Bo(n,e(n))}}function Qe(e,n,r,t,a,s,l,o){var g=n&kn;if(!g&&typeof e!="function")throw new Ae(j);var p=t?t.length:0;if(p||(n&=~(Ue|Pn),t=a=u),l=l===u?l:ne(E(l),0),o=o===u?o:E(o),p-=a?a.length:0,n&Pn){var k=t,c=a;t=a=u}var h=g?u:_a(e),q=[e,n,r,t,a,k,c,s,l,o];if(h&&Lg(q,h),e=q[0],n=q[1],r=q[2],t=q[3],a=q[4],o=q[9]=q[9]===u?g?0:e.length:ne(q[9]-p,0),!o&&n&(Ve|jn)&&(n&=~(Ve|jn)),!n||n==de)var T=yg(e,n,r);else n==Ve||n==jn?T=hg(e,n,o):(n==Ue||n==(de|Ue))&&!a.length?T=bg(e,n,r,t):T=Xr.apply(u,q);var F=h?ks:$s;return Ys(F(T,q),e,n)}function Os(e,n,r,t){return e===u||Ie(e,On[r])&&!V.call(t,r)?n:e}function Ms(e,n,r,t,a,s){return Y(e)&&Y(n)&&(s.set(n,e),$r(e,n,u,Ms,s),s.delete(n)),e}function qg(e){return pr(e)?u:e}function Cs(e,n,r,t,a,s){var l=r&Ke,o=e.length,g=n.length;if(o!=g&&!(l&&g>o))return!1;var p=s.get(e),k=s.get(n);if(p&&k)return p==n&&k==e;var c=-1,h=!0,q=r&De?new _n:u;for(s.set(e,n),s.set(n,e);++c<o;){var T=e[c],F=n[c];if(t)var R=l?t(F,T,c,n,e,s):t(T,F,c,e,n,s);if(R!==u){if(R)continue;h=!1;break}if(q){if(!Vt(n,function(I,O){if(!nr(q,O)&&(T===I||a(T,I,r,t,s)))return q.push(O)})){h=!1;break}}else if(!(T===F||a(T,F,r,t,s))){h=!1;break}}return s.delete(e),s.delete(n),h}function Ag(e,n,r,t,a,s,l){switch(r){case Sn:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case er:return!(e.byteLength!=n.byteLength||!s(new Ir(e),new Ir(n)));case Yn:case zn:case Zn:return Ie(+e,+n);case _r:return e.name==n.name&&e.message==n.message;case Xn:case Jn:return e==n+"";case Se:var o=Yt;case Ee:var g=t&Ke;if(o||(o=Pr),e.size!=n.size&&!g)return!1;var p=l.get(e);if(p)return p==n;t|=De,l.set(e,n);var k=Cs(o(e),o(n),t,a,s,l);return l.delete(e),k;case Ar:if(sr)return sr.call(e)==sr.call(n)}return!1}function wg(e,n,r,t,a,s){var l=r&Ke,o=ha(e),g=o.length,p=ha(n),k=p.length;if(g!=k&&!l)return!1;for(var c=g;c--;){var h=o[c];if(!(l?h in n:V.call(n,h)))return!1}var q=s.get(e),T=s.get(n);if(q&&T)return q==n&&T==e;var F=!0;s.set(e,n),s.set(n,e);for(var R=l;++c<g;){h=o[c];var I=e[h],O=n[h];if(t)var he=l?t(O,I,h,n,e,s):t(I,O,h,e,n,s);if(!(he===u?I===O||a(I,O,r,t,s):he)){F=!1;break}R||(R=h=="constructor")}if(F&&!R){var oe=e.constructor,be=n.constructor;oe!=be&&"constructor"in e&&"constructor"in n&&!(typeof oe=="function"&&oe instanceof oe&&typeof be=="function"&&be instanceof be)&&(F=!1)}return s.delete(e),s.delete(n),F}function en(e){return xa(Gs(e,u,eu),e+"")}function ha(e){return is(e,re,Aa)}function ba(e){return is(e,ve,Ks)}var _a=Dr?function(e){return Dr.get(e)}:Ka;function nt(e){for(var n=e.name+"",r=Cn[n],t=V.call(Cn,n)?r.length:0;t--;){var a=r[t],s=a.func;if(s==null||s==e)return a.name}return n}function Un(e){var n=V.call(i,"placeholder")?i:e;return n.placeholder}function w(){var e=i.iteratee||Ma;return e=e===Ma?ls:e,arguments.length?e(arguments[0],arguments[1]):e}function rt(e,n){var r=e.__data__;return Eg(n)?r[typeof n=="string"?"string":"hash"]:r.map}function qa(e){for(var n=re(e),r=n.length;r--;){var t=n[r],a=e[t];n[r]=[t,a,Us(a)]}return n}function wn(e,n){var r=Io(e,n);return us(r)?r:u}function Tg(e){var n=V.call(e,hn),r=e[hn];try{e[hn]=u;var t=!0}catch{}var a=Fr.call(e);return t&&(n?e[hn]=r:delete e[hn]),a}var Aa=Zt?function(e){return e==null?[]:(e=U(e),un(Zt(e),function(n){return Hi.call(e,n)}))}:Da,Ks=Zt?function(e){for(var n=[];e;)ln(n,Aa(e)),e=Lr(e);return n}:Da,se=ue;(Xt&&se(new Xt(new ArrayBuffer(1)))!=Sn||tr&&se(new tr)!=Se||Jt&&se(Jt.resolve())!=ri||Mn&&se(new Mn)!=Ee||ar&&se(new ar)!=Qn)&&(se=function(e){var n=ue(e),r=n==ze?e.constructor:u,t=r?Tn(r):"";if(t)switch(t){case ud:return Sn;case ld:return Se;case od:return ri;case dd:return Ee;case gd:return Qn}return n});function Rg(e,n,r){for(var t=-1,a=r.length;++t<a;){var s=r[t],l=s.size;switch(s.type){case"drop":e+=l;break;case"dropRight":n-=l;break;case"take":n=ie(n,e+l);break;case"takeRight":e=ne(e,n-l);break}}return{start:e,end:n}}function xg(e){var n=e.match(El);return n?n[1].split(Fl):[]}function Ds(e,n,r){n=vn(n,e);for(var t=-1,a=n.length,s=!1;++t<a;){var l=$e(n[t]);if(!(s=e!=null&&r(e,l)))break;e=e[l]}return s||++t!=a?s:(a=e==null?0:e.length,!!a&&ot(a)&&nn(l,a)&&(B(e)||Rn(e)))}function jg(e){var n=e.length,r=new e.constructor(n);return n&&typeof e[0]=="string"&&V.call(e,"index")&&(r.index=e.index,r.input=e.input),r}function Vs(e){return typeof e.constructor=="function"&&!vr(e)?Kn(Lr(e)):{}}function Pg(e,n,r){var t=e.constructor;switch(n){case er:return ka(e);case Yn:case zn:return new t(+e);case Sn:return fg(e,r);case qt:case At:case wt:case Tt:case Rt:case xt:case jt:case Pt:case Bt:return ws(e,r);case Se:return new t;case Zn:case Jn:return new t(e);case Xn:return vg(e);case Ee:return new t;case Ar:return mg(e)}}function Bg(e,n){var r=n.length;if(!r)return e;var t=r-1;return n[t]=(r>1?"& ":"")+n[t],n=n.join(r>2?", ":" "),e.replace(Sl,`{
/* [wrapped with `+n+`] */
`)}function Sg(e){return B(e)||Rn(e)||!!($i&&e&&e[$i])}function nn(e,n){var r=typeof e;return n=n??sn,!!n&&(r=="number"||r!="symbol"&&Vl.test(e))&&e>-1&&e%1==0&&e<n}function le(e,n,r){if(!Y(r))return!1;var t=typeof n;return(t=="number"?fe(r)&&nn(n,r.length):t=="string"&&n in r)?Ie(r[n],e):!1}function wa(e,n){if(B(e))return!1;var r=typeof e;return r=="number"||r=="symbol"||r=="boolean"||e==null||ye(e)?!0:xl.test(e)||!Rl.test(e)||n!=null&&e in U(n)}function Eg(e){var n=typeof e;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?e!=="__proto__":e===null}function Ta(e){var n=nt(e),r=i[n];if(typeof r!="function"||!(n in L.prototype))return!1;if(e===r)return!0;var t=_a(r);return!!t&&e===t[0]}function Fg(e){return!!Ui&&Ui in e}var Ng=Sr?rn:Va;function vr(e){var n=e&&e.constructor,r=typeof n=="function"&&n.prototype||On;return e===r}function Us(e){return e===e&&!Y(e)}function Ws(e,n){return function(r){return r==null?!1:r[e]===n&&(n!==u||e in U(r))}}function Ig(e){var n=ut(e,function(t){return r.size===Q&&r.clear(),t}),r=n.cache;return n}function Lg(e,n){var r=e[1],t=n[1],a=r|t,s=a<(de|kn|Ye),l=t==Ye&&r==Ve||t==Ye&&r==$n&&e[7].length<=n[8]||t==(Ye|$n)&&n[7].length<=n[8]&&r==Ve;if(!(s||l))return e;t&de&&(e[2]=n[2],a|=r&de?0:Qa);var o=n[3];if(o){var g=e[3];e[3]=g?Rs(g,o,n[4]):o,e[4]=g?on(e[3],M):n[4]}return o=n[5],o&&(g=e[5],e[5]=g?xs(g,o,n[6]):o,e[6]=g?on(e[5],M):n[6]),o=n[7],o&&(e[7]=o),t&Ye&&(e[8]=e[8]==null?n[8]:ie(e[8],n[8])),e[9]==null&&(e[9]=n[9]),e[0]=n[0],e[1]=a,e}function Og(e){var n=[];if(e!=null)for(var r in U(e))n.push(r);return n}function Mg(e){return Fr.call(e)}function Gs(e,n,r){return n=ne(n===u?e.length-1:n,0),function(){for(var t=arguments,a=-1,s=ne(t.length-n,0),l=f(s);++a<s;)l[a]=t[n+a];a=-1;for(var o=f(n+1);++a<n;)o[a]=t[a];return o[n]=r(l),pe(e,this,o)}}function Hs(e,n){return n.length<2?e:An(e,Re(n,0,-1))}function Cg(e,n){for(var r=e.length,t=ie(n.length,r),a=ge(e);t--;){var s=n[t];e[t]=nn(s,r)?a[s]:u}return e}function Ra(e,n){if(!(n==="constructor"&&typeof e[n]=="function")&&n!="__proto__")return e[n]}var $s=zs(ks),mr=ed||function(e,n){return te.setTimeout(e,n)},xa=zs(lg);function Ys(e,n,r){var t=n+"";return xa(e,Bg(t,Kg(xg(t),r)))}function zs(e){var n=0,r=0;return function(){var t=ad(),a=sl-(t-r);if(r=t,a>0){if(++n>=il)return arguments[0]}else n=0;return e.apply(u,arguments)}}function tt(e,n){var r=-1,t=e.length,a=t-1;for(n=n===u?t:n;++r<n;){var s=oa(r,a),l=e[s];e[s]=e[r],e[r]=l}return e.length=n,e}var Zs=Ig(function(e){var n=[];return e.charCodeAt(0)===46&&n.push(""),e.replace(jl,function(r,t,a,s){n.push(a?s.replace(Ll,"$1"):t||r)}),n});function $e(e){if(typeof e=="string"||ye(e))return e;var n=e+"";return n=="0"&&1/e==-cn?"-0":n}function Tn(e){if(e!=null){try{return Er.call(e)}catch{}try{return e+""}catch{}}return""}function Kg(e,n){return qe(fl,function(r){var t="_."+r[0];n&r[1]&&!xr(e,t)&&e.push(t)}),e.sort()}function Xs(e){if(e instanceof L)return e.clone();var n=new we(e.__wrapped__,e.__chain__);return n.__actions__=ge(e.__actions__),n.__index__=e.__index__,n.__values__=e.__values__,n}function Dg(e,n,r){(r?le(e,n,r):n===u)?n=1:n=ne(E(n),0);var t=e==null?0:e.length;if(!t||n<1)return[];for(var a=0,s=0,l=f(Cr(t/n));a<t;)l[s++]=Re(e,a,a+=n);return l}function Vg(e){for(var n=-1,r=e==null?0:e.length,t=0,a=[];++n<r;){var s=e[n];s&&(a[t++]=s)}return a}function Ug(){var e=arguments.length;if(!e)return[];for(var n=f(e-1),r=arguments[0],t=e;t--;)n[t-1]=arguments[t];return ln(B(r)?ge(r):[r],ae(n,1))}var Wg=N(function(e,n){return X(e)?lr(e,ae(n,1,X,!0)):[]}),Gg=N(function(e,n){var r=xe(n);return X(r)&&(r=u),X(e)?lr(e,ae(n,1,X,!0),w(r,2)):[]}),Hg=N(function(e,n){var r=xe(n);return X(r)&&(r=u),X(e)?lr(e,ae(n,1,X,!0),u,r):[]});function $g(e,n,r){var t=e==null?0:e.length;return t?(n=r||n===u?1:E(n),Re(e,n<0?0:n,t)):[]}function Yg(e,n,r){var t=e==null?0:e.length;return t?(n=r||n===u?1:E(n),n=t-n,Re(e,0,n<0?0:n)):[]}function zg(e,n){return e&&e.length?zr(e,w(n,3),!0,!0):[]}function Zg(e,n){return e&&e.length?zr(e,w(n,3),!0):[]}function Xg(e,n,r,t){var a=e==null?0:e.length;return a?(r&&typeof r!="number"&&le(e,n,r)&&(r=0,t=a),Ud(e,n,r,t)):[]}function Js(e,n,r){var t=e==null?0:e.length;if(!t)return-1;var a=r==null?0:E(r);return a<0&&(a=ne(t+a,0)),jr(e,w(n,3),a)}function Qs(e,n,r){var t=e==null?0:e.length;if(!t)return-1;var a=t-1;return r!==u&&(a=E(r),a=r<0?ne(t+a,0):ie(a,t-1)),jr(e,w(n,3),a,!0)}function eu(e){var n=e==null?0:e.length;return n?ae(e,1):[]}function Jg(e){var n=e==null?0:e.length;return n?ae(e,cn):[]}function Qg(e,n){var r=e==null?0:e.length;return r?(n=n===u?1:E(n),ae(e,n)):[]}function ef(e){for(var n=-1,r=e==null?0:e.length,t={};++n<r;){var a=e[n];t[a[0]]=a[1]}return t}function nu(e){return e&&e.length?e[0]:u}function nf(e,n,r){var t=e==null?0:e.length;if(!t)return-1;var a=r==null?0:E(r);return a<0&&(a=ne(t+a,0)),Fn(e,n,a)}function rf(e){var n=e==null?0:e.length;return n?Re(e,0,-1):[]}var tf=N(function(e){var n=H(e,ma);return n.length&&n[0]===e[0]?aa(n):[]}),af=N(function(e){var n=xe(e),r=H(e,ma);return n===xe(r)?n=u:r.pop(),r.length&&r[0]===e[0]?aa(r,w(n,2)):[]}),sf=N(function(e){var n=xe(e),r=H(e,ma);return n=typeof n=="function"?n:u,n&&r.pop(),r.length&&r[0]===e[0]?aa(r,u,n):[]});function uf(e,n){return e==null?"":rd.call(e,n)}function xe(e){var n=e==null?0:e.length;return n?e[n-1]:u}function lf(e,n,r){var t=e==null?0:e.length;if(!t)return-1;var a=t;return r!==u&&(a=E(r),a=a<0?ne(t+a,0):ie(a,t-1)),n===n?Ko(e,n,a):jr(e,Ii,a,!0)}function of(e,n){return e&&e.length?fs(e,E(n)):u}var df=N(ru);function ru(e,n){return e&&e.length&&n&&n.length?la(e,n):e}function gf(e,n,r){return e&&e.length&&n&&n.length?la(e,n,w(r,2)):e}function ff(e,n,r){return e&&e.length&&n&&n.length?la(e,n,u,r):e}var vf=en(function(e,n){var r=e==null?0:e.length,t=ea(e,n);return ps(e,H(n,function(a){return nn(a,r)?+a:a}).sort(Ts)),t});function mf(e,n){var r=[];if(!(e&&e.length))return r;var t=-1,a=[],s=e.length;for(n=w(n,3);++t<s;){var l=e[t];n(l,t,e)&&(r.push(l),a.push(t))}return ps(e,a),r}function ja(e){return e==null?e:sd.call(e)}function pf(e,n,r){var t=e==null?0:e.length;return t?(r&&typeof r!="number"&&le(e,n,r)?(n=0,r=t):(n=n==null?0:E(n),r=r===u?t:E(r)),Re(e,n,r)):[]}function kf(e,n){return Yr(e,n)}function cf(e,n,r){return ga(e,n,w(r,2))}function yf(e,n){var r=e==null?0:e.length;if(r){var t=Yr(e,n);if(t<r&&Ie(e[t],n))return t}return-1}function hf(e,n){return Yr(e,n,!0)}function bf(e,n,r){return ga(e,n,w(r,2),!0)}function _f(e,n){var r=e==null?0:e.length;if(r){var t=Yr(e,n,!0)-1;if(Ie(e[t],n))return t}return-1}function qf(e){return e&&e.length?cs(e):[]}function Af(e,n){return e&&e.length?cs(e,w(n,2)):[]}function wf(e){var n=e==null?0:e.length;return n?Re(e,1,n):[]}function Tf(e,n,r){return e&&e.length?(n=r||n===u?1:E(n),Re(e,0,n<0?0:n)):[]}function Rf(e,n,r){var t=e==null?0:e.length;return t?(n=r||n===u?1:E(n),n=t-n,Re(e,n<0?0:n,t)):[]}function xf(e,n){return e&&e.length?zr(e,w(n,3),!1,!0):[]}function jf(e,n){return e&&e.length?zr(e,w(n,3)):[]}var Pf=N(function(e){return fn(ae(e,1,X,!0))}),Bf=N(function(e){var n=xe(e);return X(n)&&(n=u),fn(ae(e,1,X,!0),w(n,2))}),Sf=N(function(e){var n=xe(e);return n=typeof n=="function"?n:u,fn(ae(e,1,X,!0),u,n)});function Ef(e){return e&&e.length?fn(e):[]}function Ff(e,n){return e&&e.length?fn(e,w(n,2)):[]}function Nf(e,n){return n=typeof n=="function"?n:u,e&&e.length?fn(e,u,n):[]}function Pa(e){if(!(e&&e.length))return[];var n=0;return e=un(e,function(r){if(X(r))return n=ne(r.length,n),!0}),Ht(n,function(r){return H(e,Ut(r))})}function tu(e,n){if(!(e&&e.length))return[];var r=Pa(e);return n==null?r:H(r,function(t){return pe(n,u,t)})}var If=N(function(e,n){return X(e)?lr(e,n):[]}),Lf=N(function(e){return va(un(e,X))}),Of=N(function(e){var n=xe(e);return X(n)&&(n=u),va(un(e,X),w(n,2))}),Mf=N(function(e){var n=xe(e);return n=typeof n=="function"?n:u,va(un(e,X),u,n)}),Cf=N(Pa);function Kf(e,n){return _s(e||[],n||[],ur)}function Df(e,n){return _s(e||[],n||[],gr)}var Vf=N(function(e){var n=e.length,r=n>1?e[n-1]:u;return r=typeof r=="function"?(e.pop(),r):u,tu(e,r)});function au(e){var n=i(e);return n.__chain__=!0,n}function Uf(e,n){return n(e),e}function at(e,n){return n(e)}var Wf=en(function(e){var n=e.length,r=n?e[0]:0,t=this.__wrapped__,a=function(s){return ea(s,e)};return n>1||this.__actions__.length||!(t instanceof L)||!nn(r)?this.thru(a):(t=t.slice(r,+r+(n?1:0)),t.__actions__.push({func:at,args:[a],thisArg:u}),new we(t,this.__chain__).thru(function(s){return n&&!s.length&&s.push(u),s}))});function Gf(){return au(this)}function Hf(){return new we(this.value(),this.__chain__)}function $f(){this.__values__===u&&(this.__values__=yu(this.value()));var e=this.__index__>=this.__values__.length,n=e?u:this.__values__[this.__index__++];return{done:e,value:n}}function Yf(){return this}function zf(e){for(var n,r=this;r instanceof Ur;){var t=Xs(r);t.__index__=0,t.__values__=u,n?a.__wrapped__=t:n=t;var a=t;r=r.__wrapped__}return a.__wrapped__=e,n}function Zf(){var e=this.__wrapped__;if(e instanceof L){var n=e;return this.__actions__.length&&(n=new L(this)),n=n.reverse(),n.__actions__.push({func:at,args:[ja],thisArg:u}),new we(n,this.__chain__)}return this.thru(ja)}function Xf(){return bs(this.__wrapped__,this.__actions__)}var Jf=Zr(function(e,n,r){V.call(e,r)?++e[r]:Je(e,r,1)});function Qf(e,n,r){var t=B(e)?Fi:Vd;return r&&le(e,n,r)&&(n=u),t(e,w(n,3))}function ev(e,n){var r=B(e)?un:ts;return r(e,w(n,3))}var nv=Ss(Js),rv=Ss(Qs);function tv(e,n){return ae(it(e,n),1)}function av(e,n){return ae(it(e,n),cn)}function iv(e,n,r){return r=r===u?1:E(r),ae(it(e,n),r)}function iu(e,n){var r=B(e)?qe:gn;return r(e,w(n,3))}function su(e,n){var r=B(e)?Ao:rs;return r(e,w(n,3))}var sv=Zr(function(e,n,r){V.call(e,r)?e[r].push(n):Je(e,r,[n])});function uv(e,n,r,t){e=fe(e)?e:Gn(e),r=r&&!t?E(r):0;var a=e.length;return r<0&&(r=ne(a+r,0)),dt(e)?r<=a&&e.indexOf(n,r)>-1:!!a&&Fn(e,n,r)>-1}var lv=N(function(e,n,r){var t=-1,a=typeof n=="function",s=fe(e)?f(e.length):[];return gn(e,function(l){s[++t]=a?pe(n,l,r):or(l,n,r)}),s}),ov=Zr(function(e,n,r){Je(e,r,n)});function it(e,n){var r=B(e)?H:os;return r(e,w(n,3))}function dv(e,n,r,t){return e==null?[]:(B(n)||(n=n==null?[]:[n]),r=t?u:r,B(r)||(r=r==null?[]:[r]),vs(e,n,r))}var gv=Zr(function(e,n,r){e[r?0:1].push(n)},function(){return[[],[]]});function fv(e,n,r){var t=B(e)?Dt:Oi,a=arguments.length<3;return t(e,w(n,4),r,a,gn)}function vv(e,n,r){var t=B(e)?wo:Oi,a=arguments.length<3;return t(e,w(n,4),r,a,rs)}function mv(e,n){var r=B(e)?un:ts;return r(e,lt(w(n,3)))}function pv(e){var n=B(e)?Ji:sg;return n(e)}function kv(e,n,r){(r?le(e,n,r):n===u)?n=1:n=E(n);var t=B(e)?Od:ug;return t(e,n)}function cv(e){var n=B(e)?Md:og;return n(e)}function yv(e){if(e==null)return 0;if(fe(e))return dt(e)?In(e):e.length;var n=se(e);return n==Se||n==Ee?e.size:sa(e).length}function hv(e,n,r){var t=B(e)?Vt:dg;return r&&le(e,n,r)&&(n=u),t(e,w(n,3))}var bv=N(function(e,n){if(e==null)return[];var r=n.length;return r>1&&le(e,n[0],n[1])?n=[]:r>2&&le(n[0],n[1],n[2])&&(n=[n[0]]),vs(e,ae(n,1),[])}),st=Qo||function(){return te.Date.now()};function _v(e,n){if(typeof n!="function")throw new Ae(j);return e=E(e),function(){if(--e<1)return n.apply(this,arguments)}}function uu(e,n,r){return n=r?u:n,n=e&&n==null?e.length:n,Qe(e,Ye,u,u,u,u,n)}function lu(e,n){var r;if(typeof n!="function")throw new Ae(j);return e=E(e),function(){return--e>0&&(r=n.apply(this,arguments)),e<=1&&(n=u),r}}var Ba=N(function(e,n,r){var t=de;if(r.length){var a=on(r,Un(Ba));t|=Ue}return Qe(e,t,n,r,a)}),ou=N(function(e,n,r){var t=de|kn;if(r.length){var a=on(r,Un(ou));t|=Ue}return Qe(n,t,e,r,a)});function du(e,n,r){n=r?u:n;var t=Qe(e,Ve,u,u,u,u,u,n);return t.placeholder=du.placeholder,t}function gu(e,n,r){n=r?u:n;var t=Qe(e,jn,u,u,u,u,u,n);return t.placeholder=gu.placeholder,t}function fu(e,n,r){var t,a,s,l,o,g,p=0,k=!1,c=!1,h=!0;if(typeof e!="function")throw new Ae(j);n=je(n)||0,Y(r)&&(k=!!r.leading,c="maxWait"in r,s=c?ne(je(r.maxWait)||0,n):s,h="trailing"in r?!!r.trailing:h);function q(J){var Le=t,an=a;return t=a=u,p=J,l=e.apply(an,Le),l}function T(J){return p=J,o=mr(I,n),k?q(J):l}function F(J){var Le=J-g,an=J-p,Su=n-Le;return c?ie(Su,s-an):Su}function R(J){var Le=J-g,an=J-p;return g===u||Le>=n||Le<0||c&&an>=s}function I(){var J=st();if(R(J))return O(J);o=mr(I,F(J))}function O(J){return o=u,h&&t?q(J):(t=a=u,l)}function he(){o!==u&&qs(o),p=0,t=g=a=o=u}function oe(){return o===u?l:O(st())}function be(){var J=st(),Le=R(J);if(t=arguments,a=this,g=J,Le){if(o===u)return T(g);if(c)return qs(o),o=mr(I,n),q(g)}return o===u&&(o=mr(I,n)),l}return be.cancel=he,be.flush=oe,be}var qv=N(function(e,n){return ns(e,1,n)}),Av=N(function(e,n,r){return ns(e,je(n)||0,r)});function wv(e){return Qe(e,_t)}function ut(e,n){if(typeof e!="function"||n!=null&&typeof n!="function")throw new Ae(j);var r=function(){var t=arguments,a=n?n.apply(this,t):t[0],s=r.cache;if(s.has(a))return s.get(a);var l=e.apply(this,t);return r.cache=s.set(a,l)||s,l};return r.cache=new(ut.Cache||Xe),r}ut.Cache=Xe;function lt(e){if(typeof e!="function")throw new Ae(j);return function(){var n=arguments;switch(n.length){case 0:return!e.call(this);case 1:return!e.call(this,n[0]);case 2:return!e.call(this,n[0],n[1]);case 3:return!e.call(this,n[0],n[1],n[2])}return!e.apply(this,n)}}function Tv(e){return lu(2,e)}var Rv=gg(function(e,n){n=n.length==1&&B(n[0])?H(n[0],ke(w())):H(ae(n,1),ke(w()));var r=n.length;return N(function(t){for(var a=-1,s=ie(t.length,r);++a<s;)t[a]=n[a].call(this,t[a]);return pe(e,this,t)})}),Sa=N(function(e,n){var r=on(n,Un(Sa));return Qe(e,Ue,u,n,r)}),vu=N(function(e,n){var r=on(n,Un(vu));return Qe(e,Pn,u,n,r)}),xv=en(function(e,n){return Qe(e,$n,u,u,u,n)});function jv(e,n){if(typeof e!="function")throw new Ae(j);return n=n===u?n:E(n),N(e,n)}function Pv(e,n){if(typeof e!="function")throw new Ae(j);return n=n==null?0:ne(E(n),0),N(function(r){var t=r[n],a=mn(r,0,n);return t&&ln(a,t),pe(e,this,a)})}function Bv(e,n,r){var t=!0,a=!0;if(typeof e!="function")throw new Ae(j);return Y(r)&&(t="leading"in r?!!r.leading:t,a="trailing"in r?!!r.trailing:a),fu(e,n,{leading:t,maxWait:n,trailing:a})}function Sv(e){return uu(e,1)}function Ev(e,n){return Sa(pa(n),e)}function Fv(){if(!arguments.length)return[];var e=arguments[0];return B(e)?e:[e]}function Nv(e){return Te(e,Ce)}function Iv(e,n){return n=typeof n=="function"?n:u,Te(e,Ce,n)}function Lv(e){return Te(e,Z|Ce)}function Ov(e,n){return n=typeof n=="function"?n:u,Te(e,Z|Ce,n)}function Mv(e,n){return n==null||es(e,n,re(n))}function Ie(e,n){return e===n||e!==e&&n!==n}var Cv=et(ta),Kv=et(function(e,n){return e>=n}),Rn=ss(function(){return arguments}())?ss:function(e){return z(e)&&V.call(e,"callee")&&!Hi.call(e,"callee")},B=f.isArray,Dv=xi?ke(xi):Yd;function fe(e){return e!=null&&ot(e.length)&&!rn(e)}function X(e){return z(e)&&fe(e)}function Vv(e){return e===!0||e===!1||z(e)&&ue(e)==Yn}var pn=nd||Va,Uv=ji?ke(ji):zd;function Wv(e){return z(e)&&e.nodeType===1&&!pr(e)}function Gv(e){if(e==null)return!0;if(fe(e)&&(B(e)||typeof e=="string"||typeof e.splice=="function"||pn(e)||Wn(e)||Rn(e)))return!e.length;var n=se(e);if(n==Se||n==Ee)return!e.size;if(vr(e))return!sa(e).length;for(var r in e)if(V.call(e,r))return!1;return!0}function Hv(e,n){return dr(e,n)}function $v(e,n,r){r=typeof r=="function"?r:u;var t=r?r(e,n):u;return t===u?dr(e,n,u,r):!!t}function Ea(e){if(!z(e))return!1;var n=ue(e);return n==_r||n==ml||typeof e.message=="string"&&typeof e.name=="string"&&!pr(e)}function Yv(e){return typeof e=="number"&&Yi(e)}function rn(e){if(!Y(e))return!1;var n=ue(e);return n==qr||n==ni||n==vl||n==kl}function mu(e){return typeof e=="number"&&e==E(e)}function ot(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=sn}function Y(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}function z(e){return e!=null&&typeof e=="object"}var pu=Pi?ke(Pi):Xd;function zv(e,n){return e===n||ia(e,n,qa(n))}function Zv(e,n,r){return r=typeof r=="function"?r:u,ia(e,n,qa(n),r)}function Xv(e){return ku(e)&&e!=+e}function Jv(e){if(Ng(e))throw new P(S);return us(e)}function Qv(e){return e===null}function em(e){return e==null}function ku(e){return typeof e=="number"||z(e)&&ue(e)==Zn}function pr(e){if(!z(e)||ue(e)!=ze)return!1;var n=Lr(e);if(n===null)return!0;var r=V.call(n,"constructor")&&n.constructor;return typeof r=="function"&&r instanceof r&&Er.call(r)==zo}var Fa=Bi?ke(Bi):Jd;function nm(e){return mu(e)&&e>=-sn&&e<=sn}var cu=Si?ke(Si):Qd;function dt(e){return typeof e=="string"||!B(e)&&z(e)&&ue(e)==Jn}function ye(e){return typeof e=="symbol"||z(e)&&ue(e)==Ar}var Wn=Ei?ke(Ei):eg;function rm(e){return e===u}function tm(e){return z(e)&&se(e)==Qn}function am(e){return z(e)&&ue(e)==yl}var im=et(ua),sm=et(function(e,n){return e<=n});function yu(e){if(!e)return[];if(fe(e))return dt(e)?Fe(e):ge(e);if(rr&&e[rr])return Oo(e[rr]());var n=se(e),r=n==Se?Yt:n==Ee?Pr:Gn;return r(e)}function tn(e){if(!e)return e===0?e:0;if(e=je(e),e===cn||e===-cn){var n=e<0?-1:1;return n*ol}return e===e?e:0}function E(e){var n=tn(e),r=n%1;return n===n?r?n-r:n:0}function hu(e){return e?qn(E(e),0,We):0}function je(e){if(typeof e=="number")return e;if(ye(e))return hr;if(Y(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=Y(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=Mi(e);var r=Cl.test(e);return r||Dl.test(e)?bo(e.slice(2),r?2:8):Ml.test(e)?hr:+e}function bu(e){return He(e,ve(e))}function um(e){return e?qn(E(e),-sn,sn):e===0?e:0}function K(e){return e==null?"":ce(e)}var lm=Dn(function(e,n){if(vr(n)||fe(n)){He(n,re(n),e);return}for(var r in n)V.call(n,r)&&ur(e,r,n[r])}),_u=Dn(function(e,n){He(n,ve(n),e)}),gt=Dn(function(e,n,r,t){He(n,ve(n),e,t)}),om=Dn(function(e,n,r,t){He(n,re(n),e,t)}),dm=en(ea);function gm(e,n){var r=Kn(e);return n==null?r:Qi(r,n)}var fm=N(function(e,n){e=U(e);var r=-1,t=n.length,a=t>2?n[2]:u;for(a&&le(n[0],n[1],a)&&(t=1);++r<t;)for(var s=n[r],l=ve(s),o=-1,g=l.length;++o<g;){var p=l[o],k=e[p];(k===u||Ie(k,On[p])&&!V.call(e,p))&&(e[p]=s[p])}return e}),vm=N(function(e){return e.push(u,Ms),pe(qu,u,e)});function mm(e,n){return Ni(e,w(n,3),Ge)}function pm(e,n){return Ni(e,w(n,3),ra)}function km(e,n){return e==null?e:na(e,w(n,3),ve)}function cm(e,n){return e==null?e:as(e,w(n,3),ve)}function ym(e,n){return e&&Ge(e,w(n,3))}function hm(e,n){return e&&ra(e,w(n,3))}function bm(e){return e==null?[]:Hr(e,re(e))}function _m(e){return e==null?[]:Hr(e,ve(e))}function Na(e,n,r){var t=e==null?u:An(e,n);return t===u?r:t}function qm(e,n){return e!=null&&Ds(e,n,Wd)}function Ia(e,n){return e!=null&&Ds(e,n,Gd)}var Am=Fs(function(e,n,r){n!=null&&typeof n.toString!="function"&&(n=Fr.call(n)),e[n]=r},Oa(me)),wm=Fs(function(e,n,r){n!=null&&typeof n.toString!="function"&&(n=Fr.call(n)),V.call(e,n)?e[n].push(r):e[n]=[r]},w),Tm=N(or);function re(e){return fe(e)?Xi(e):sa(e)}function ve(e){return fe(e)?Xi(e,!0):ng(e)}function Rm(e,n){var r={};return n=w(n,3),Ge(e,function(t,a,s){Je(r,n(t,a,s),t)}),r}function xm(e,n){var r={};return n=w(n,3),Ge(e,function(t,a,s){Je(r,a,n(t,a,s))}),r}var jm=Dn(function(e,n,r){$r(e,n,r)}),qu=Dn(function(e,n,r,t){$r(e,n,r,t)}),Pm=en(function(e,n){var r={};if(e==null)return r;var t=!1;n=H(n,function(s){return s=vn(s,e),t||(t=s.length>1),s}),He(e,ba(e),r),t&&(r=Te(r,Z|Be|Ce,qg));for(var a=n.length;a--;)fa(r,n[a]);return r});function Bm(e,n){return Au(e,lt(w(n)))}var Sm=en(function(e,n){return e==null?{}:tg(e,n)});function Au(e,n){if(e==null)return{};var r=H(ba(e),function(t){return[t]});return n=w(n),ms(e,r,function(t,a){return n(t,a[0])})}function Em(e,n,r){n=vn(n,e);var t=-1,a=n.length;for(a||(a=1,e=u);++t<a;){var s=e==null?u:e[$e(n[t])];s===u&&(t=a,s=r),e=rn(s)?s.call(e):s}return e}function Fm(e,n,r){return e==null?e:gr(e,n,r)}function Nm(e,n,r,t){return t=typeof t=="function"?t:u,e==null?e:gr(e,n,r,t)}var wu=Ls(re),Tu=Ls(ve);function Im(e,n,r){var t=B(e),a=t||pn(e)||Wn(e);if(n=w(n,4),r==null){var s=e&&e.constructor;a?r=t?new s:[]:Y(e)?r=rn(s)?Kn(Lr(e)):{}:r={}}return(a?qe:Ge)(e,function(l,o,g){return n(r,l,o,g)}),r}function Lm(e,n){return e==null?!0:fa(e,n)}function Om(e,n,r){return e==null?e:hs(e,n,pa(r))}function Mm(e,n,r,t){return t=typeof t=="function"?t:u,e==null?e:hs(e,n,pa(r),t)}function Gn(e){return e==null?[]:$t(e,re(e))}function Cm(e){return e==null?[]:$t(e,ve(e))}function Km(e,n,r){return r===u&&(r=n,n=u),r!==u&&(r=je(r),r=r===r?r:0),n!==u&&(n=je(n),n=n===n?n:0),qn(je(e),n,r)}function Dm(e,n,r){return n=tn(n),r===u?(r=n,n=0):r=tn(r),e=je(e),Hd(e,n,r)}function Vm(e,n,r){if(r&&typeof r!="boolean"&&le(e,n,r)&&(n=r=u),r===u&&(typeof n=="boolean"?(r=n,n=u):typeof e=="boolean"&&(r=e,e=u)),e===u&&n===u?(e=0,n=1):(e=tn(e),n===u?(n=e,e=0):n=tn(n)),e>n){var t=e;e=n,n=t}if(r||e%1||n%1){var a=zi();return ie(e+a*(n-e+ho("1e-"+((a+"").length-1))),n)}return oa(e,n)}var Um=Vn(function(e,n,r){return n=n.toLowerCase(),e+(r?Ru(n):n)});function Ru(e){return La(K(e).toLowerCase())}function xu(e){return e=K(e),e&&e.replace(Ul,Eo).replace(lo,"")}function Wm(e,n,r){e=K(e),n=ce(n);var t=e.length;r=r===u?t:qn(E(r),0,t);var a=r;return r-=n.length,r>=0&&e.slice(r,a)==n}function Gm(e){return e=K(e),e&&Al.test(e)?e.replace(ai,Fo):e}function Hm(e){return e=K(e),e&&Pl.test(e)?e.replace(St,"\\$&"):e}var $m=Vn(function(e,n,r){return e+(r?"-":"")+n.toLowerCase()}),Ym=Vn(function(e,n,r){return e+(r?" ":"")+n.toLowerCase()}),zm=Bs("toLowerCase");function Zm(e,n,r){e=K(e),n=E(n);var t=n?In(e):0;if(!n||t>=n)return e;var a=(n-t)/2;return Qr(Kr(a),r)+e+Qr(Cr(a),r)}function Xm(e,n,r){e=K(e),n=E(n);var t=n?In(e):0;return n&&t<n?e+Qr(n-t,r):e}function Jm(e,n,r){e=K(e),n=E(n);var t=n?In(e):0;return n&&t<n?Qr(n-t,r)+e:e}function Qm(e,n,r){return r||n==null?n=0:n&&(n=+n),id(K(e).replace(Et,""),n||0)}function ep(e,n,r){return(r?le(e,n,r):n===u)?n=1:n=E(n),da(K(e),n)}function np(){var e=arguments,n=K(e[0]);return e.length<3?n:n.replace(e[1],e[2])}var rp=Vn(function(e,n,r){return e+(r?"_":"")+n.toLowerCase()});function tp(e,n,r){return r&&typeof r!="number"&&le(e,n,r)&&(n=r=u),r=r===u?We:r>>>0,r?(e=K(e),e&&(typeof n=="string"||n!=null&&!Fa(n))&&(n=ce(n),!n&&Nn(e))?mn(Fe(e),0,r):e.split(n,r)):[]}var ap=Vn(function(e,n,r){return e+(r?" ":"")+La(n)});function ip(e,n,r){return e=K(e),r=r==null?0:qn(E(r),0,e.length),n=ce(n),e.slice(r,r+n.length)==n}function sp(e,n,r){var t=i.templateSettings;r&&le(e,n,r)&&(n=u),e=K(e),n=gt({},n,t,Os);var a=gt({},n.imports,t.imports,Os),s=re(a),l=$t(a,s),o,g,p=0,k=n.interpolate||wr,c="__p += '",h=zt((n.escape||wr).source+"|"+k.source+"|"+(k===ii?Ol:wr).source+"|"+(n.evaluate||wr).source+"|$","g"),q="//# sourceURL="+(V.call(n,"sourceURL")?(n.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++mo+"]")+`
`;e.replace(h,function(R,I,O,he,oe,be){return O||(O=he),c+=e.slice(p,be).replace(Wl,No),I&&(o=!0,c+=`' +
__e(`+I+`) +
'`),oe&&(g=!0,c+=`';
`+oe+`;
__p += '`),O&&(c+=`' +
((__t = (`+O+`)) == null ? '' : __t) +
'`),p=be+R.length,R}),c+=`';
`;var T=V.call(n,"variable")&&n.variable;if(!T)c=`with (obj) {
`+c+`
}
`;else if(Il.test(T))throw new P($);c=(g?c.replace(hl,""):c).replace(bl,"$1").replace(_l,"$1;"),c="function("+(T||"obj")+`) {
`+(T?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(o?", __e = _.escape":"")+(g?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+c+`return __p
}`;var F=Pu(function(){return C(s,q+"return "+c).apply(u,l)});if(F.source=c,Ea(F))throw F;return F}function up(e){return K(e).toLowerCase()}function lp(e){return K(e).toUpperCase()}function op(e,n,r){if(e=K(e),e&&(r||n===u))return Mi(e);if(!e||!(n=ce(n)))return e;var t=Fe(e),a=Fe(n),s=Ci(t,a),l=Ki(t,a)+1;return mn(t,s,l).join("")}function dp(e,n,r){if(e=K(e),e&&(r||n===u))return e.slice(0,Vi(e)+1);if(!e||!(n=ce(n)))return e;var t=Fe(e),a=Ki(t,Fe(n))+1;return mn(t,0,a).join("")}function gp(e,n,r){if(e=K(e),e&&(r||n===u))return e.replace(Et,"");if(!e||!(n=ce(n)))return e;var t=Fe(e),a=Ci(t,Fe(n));return mn(t,a).join("")}function fp(e,n){var r=tl,t=al;if(Y(n)){var a="separator"in n?n.separator:a;r="length"in n?E(n.length):r,t="omission"in n?ce(n.omission):t}e=K(e);var s=e.length;if(Nn(e)){var l=Fe(e);s=l.length}if(r>=s)return e;var o=r-In(t);if(o<1)return t;var g=l?mn(l,0,o).join(""):e.slice(0,o);if(a===u)return g+t;if(l&&(o+=g.length-o),Fa(a)){if(e.slice(o).search(a)){var p,k=g;for(a.global||(a=zt(a.source,K(si.exec(a))+"g")),a.lastIndex=0;p=a.exec(k);)var c=p.index;g=g.slice(0,c===u?o:c)}}else if(e.indexOf(ce(a),o)!=o){var h=g.lastIndexOf(a);h>-1&&(g=g.slice(0,h))}return g+t}function vp(e){return e=K(e),e&&ql.test(e)?e.replace(ti,Do):e}var mp=Vn(function(e,n,r){return e+(r?" ":"")+n.toUpperCase()}),La=Bs("toUpperCase");function ju(e,n,r){return e=K(e),n=r?u:n,n===u?Lo(e)?Wo(e):xo(e):e.match(n)||[]}var Pu=N(function(e,n){try{return pe(e,u,n)}catch(r){return Ea(r)?r:new P(r)}}),pp=en(function(e,n){return qe(n,function(r){r=$e(r),Je(e,r,Ba(e[r],e))}),e});function kp(e){var n=e==null?0:e.length,r=w();return e=n?H(e,function(t){if(typeof t[1]!="function")throw new Ae(j);return[r(t[0]),t[1]]}):[],N(function(t){for(var a=-1;++a<n;){var s=e[a];if(pe(s[0],this,t))return pe(s[1],this,t)}})}function cp(e){return Dd(Te(e,Z))}function Oa(e){return function(){return e}}function yp(e,n){return e==null||e!==e?n:e}var hp=Es(),bp=Es(!0);function me(e){return e}function Ma(e){return ls(typeof e=="function"?e:Te(e,Z))}function _p(e){return ds(Te(e,Z))}function qp(e,n){return gs(e,Te(n,Z))}var Ap=N(function(e,n){return function(r){return or(r,e,n)}}),wp=N(function(e,n){return function(r){return or(e,r,n)}});function Ca(e,n,r){var t=re(n),a=Hr(n,t);r==null&&!(Y(n)&&(a.length||!t.length))&&(r=n,n=e,e=this,a=Hr(n,re(n)));var s=!(Y(r)&&"chain"in r)||!!r.chain,l=rn(e);return qe(a,function(o){var g=n[o];e[o]=g,l&&(e.prototype[o]=function(){var p=this.__chain__;if(s||p){var k=e(this.__wrapped__),c=k.__actions__=ge(this.__actions__);return c.push({func:g,args:arguments,thisArg:e}),k.__chain__=p,k}return g.apply(e,ln([this.value()],arguments))})}),e}function Tp(){return te._===this&&(te._=Zo),this}function Ka(){}function Rp(e){return e=E(e),N(function(n){return fs(n,e)})}var xp=ca(H),jp=ca(Fi),Pp=ca(Vt);function Bu(e){return wa(e)?Ut($e(e)):ag(e)}function Bp(e){return function(n){return e==null?u:An(e,n)}}var Sp=Ns(),Ep=Ns(!0);function Da(){return[]}function Va(){return!1}function Fp(){return{}}function Np(){return""}function Ip(){return!0}function Lp(e,n){if(e=E(e),e<1||e>sn)return[];var r=We,t=ie(e,We);n=w(n),e-=We;for(var a=Ht(t,n);++r<e;)n(r);return a}function Op(e){return B(e)?H(e,$e):ye(e)?[e]:ge(Zs(K(e)))}function Mp(e){var n=++Yo;return K(e)+n}var Cp=Jr(function(e,n){return e+n},0),Kp=ya("ceil"),Dp=Jr(function(e,n){return e/n},1),Vp=ya("floor");function Up(e){return e&&e.length?Gr(e,me,ta):u}function Wp(e,n){return e&&e.length?Gr(e,w(n,2),ta):u}function Gp(e){return Li(e,me)}function Hp(e,n){return Li(e,w(n,2))}function $p(e){return e&&e.length?Gr(e,me,ua):u}function Yp(e,n){return e&&e.length?Gr(e,w(n,2),ua):u}var zp=Jr(function(e,n){return e*n},1),Zp=ya("round"),Xp=Jr(function(e,n){return e-n},0);function Jp(e){return e&&e.length?Gt(e,me):0}function Qp(e,n){return e&&e.length?Gt(e,w(n,2)):0}return i.after=_v,i.ary=uu,i.assign=lm,i.assignIn=_u,i.assignInWith=gt,i.assignWith=om,i.at=dm,i.before=lu,i.bind=Ba,i.bindAll=pp,i.bindKey=ou,i.castArray=Fv,i.chain=au,i.chunk=Dg,i.compact=Vg,i.concat=Ug,i.cond=kp,i.conforms=cp,i.constant=Oa,i.countBy=Jf,i.create=gm,i.curry=du,i.curryRight=gu,i.debounce=fu,i.defaults=fm,i.defaultsDeep=vm,i.defer=qv,i.delay=Av,i.difference=Wg,i.differenceBy=Gg,i.differenceWith=Hg,i.drop=$g,i.dropRight=Yg,i.dropRightWhile=zg,i.dropWhile=Zg,i.fill=Xg,i.filter=ev,i.flatMap=tv,i.flatMapDeep=av,i.flatMapDepth=iv,i.flatten=eu,i.flattenDeep=Jg,i.flattenDepth=Qg,i.flip=wv,i.flow=hp,i.flowRight=bp,i.fromPairs=ef,i.functions=bm,i.functionsIn=_m,i.groupBy=sv,i.initial=rf,i.intersection=tf,i.intersectionBy=af,i.intersectionWith=sf,i.invert=Am,i.invertBy=wm,i.invokeMap=lv,i.iteratee=Ma,i.keyBy=ov,i.keys=re,i.keysIn=ve,i.map=it,i.mapKeys=Rm,i.mapValues=xm,i.matches=_p,i.matchesProperty=qp,i.memoize=ut,i.merge=jm,i.mergeWith=qu,i.method=Ap,i.methodOf=wp,i.mixin=Ca,i.negate=lt,i.nthArg=Rp,i.omit=Pm,i.omitBy=Bm,i.once=Tv,i.orderBy=dv,i.over=xp,i.overArgs=Rv,i.overEvery=jp,i.overSome=Pp,i.partial=Sa,i.partialRight=vu,i.partition=gv,i.pick=Sm,i.pickBy=Au,i.property=Bu,i.propertyOf=Bp,i.pull=df,i.pullAll=ru,i.pullAllBy=gf,i.pullAllWith=ff,i.pullAt=vf,i.range=Sp,i.rangeRight=Ep,i.rearg=xv,i.reject=mv,i.remove=mf,i.rest=jv,i.reverse=ja,i.sampleSize=kv,i.set=Fm,i.setWith=Nm,i.shuffle=cv,i.slice=pf,i.sortBy=bv,i.sortedUniq=qf,i.sortedUniqBy=Af,i.split=tp,i.spread=Pv,i.tail=wf,i.take=Tf,i.takeRight=Rf,i.takeRightWhile=xf,i.takeWhile=jf,i.tap=Uf,i.throttle=Bv,i.thru=at,i.toArray=yu,i.toPairs=wu,i.toPairsIn=Tu,i.toPath=Op,i.toPlainObject=bu,i.transform=Im,i.unary=Sv,i.union=Pf,i.unionBy=Bf,i.unionWith=Sf,i.uniq=Ef,i.uniqBy=Ff,i.uniqWith=Nf,i.unset=Lm,i.unzip=Pa,i.unzipWith=tu,i.update=Om,i.updateWith=Mm,i.values=Gn,i.valuesIn=Cm,i.without=If,i.words=ju,i.wrap=Ev,i.xor=Lf,i.xorBy=Of,i.xorWith=Mf,i.zip=Cf,i.zipObject=Kf,i.zipObjectDeep=Df,i.zipWith=Vf,i.entries=wu,i.entriesIn=Tu,i.extend=_u,i.extendWith=gt,Ca(i,i),i.add=Cp,i.attempt=Pu,i.camelCase=Um,i.capitalize=Ru,i.ceil=Kp,i.clamp=Km,i.clone=Nv,i.cloneDeep=Lv,i.cloneDeepWith=Ov,i.cloneWith=Iv,i.conformsTo=Mv,i.deburr=xu,i.defaultTo=yp,i.divide=Dp,i.endsWith=Wm,i.eq=Ie,i.escape=Gm,i.escapeRegExp=Hm,i.every=Qf,i.find=nv,i.findIndex=Js,i.findKey=mm,i.findLast=rv,i.findLastIndex=Qs,i.findLastKey=pm,i.floor=Vp,i.forEach=iu,i.forEachRight=su,i.forIn=km,i.forInRight=cm,i.forOwn=ym,i.forOwnRight=hm,i.get=Na,i.gt=Cv,i.gte=Kv,i.has=qm,i.hasIn=Ia,i.head=nu,i.identity=me,i.includes=uv,i.indexOf=nf,i.inRange=Dm,i.invoke=Tm,i.isArguments=Rn,i.isArray=B,i.isArrayBuffer=Dv,i.isArrayLike=fe,i.isArrayLikeObject=X,i.isBoolean=Vv,i.isBuffer=pn,i.isDate=Uv,i.isElement=Wv,i.isEmpty=Gv,i.isEqual=Hv,i.isEqualWith=$v,i.isError=Ea,i.isFinite=Yv,i.isFunction=rn,i.isInteger=mu,i.isLength=ot,i.isMap=pu,i.isMatch=zv,i.isMatchWith=Zv,i.isNaN=Xv,i.isNative=Jv,i.isNil=em,i.isNull=Qv,i.isNumber=ku,i.isObject=Y,i.isObjectLike=z,i.isPlainObject=pr,i.isRegExp=Fa,i.isSafeInteger=nm,i.isSet=cu,i.isString=dt,i.isSymbol=ye,i.isTypedArray=Wn,i.isUndefined=rm,i.isWeakMap=tm,i.isWeakSet=am,i.join=uf,i.kebabCase=$m,i.last=xe,i.lastIndexOf=lf,i.lowerCase=Ym,i.lowerFirst=zm,i.lt=im,i.lte=sm,i.max=Up,i.maxBy=Wp,i.mean=Gp,i.meanBy=Hp,i.min=$p,i.minBy=Yp,i.stubArray=Da,i.stubFalse=Va,i.stubObject=Fp,i.stubString=Np,i.stubTrue=Ip,i.multiply=zp,i.nth=of,i.noConflict=Tp,i.noop=Ka,i.now=st,i.pad=Zm,i.padEnd=Xm,i.padStart=Jm,i.parseInt=Qm,i.random=Vm,i.reduce=fv,i.reduceRight=vv,i.repeat=ep,i.replace=np,i.result=Em,i.round=Zp,i.runInContext=d,i.sample=pv,i.size=yv,i.snakeCase=rp,i.some=hv,i.sortedIndex=kf,i.sortedIndexBy=cf,i.sortedIndexOf=yf,i.sortedLastIndex=hf,i.sortedLastIndexBy=bf,i.sortedLastIndexOf=_f,i.startCase=ap,i.startsWith=ip,i.subtract=Xp,i.sum=Jp,i.sumBy=Qp,i.template=sp,i.times=Lp,i.toFinite=tn,i.toInteger=E,i.toLength=hu,i.toLower=up,i.toNumber=je,i.toSafeInteger=um,i.toString=K,i.toUpper=lp,i.trim=op,i.trimEnd=dp,i.trimStart=gp,i.truncate=fp,i.unescape=vp,i.uniqueId=Mp,i.upperCase=mp,i.upperFirst=La,i.each=iu,i.eachRight=su,i.first=nu,Ca(i,function(){var e={};return Ge(i,function(n,r){V.call(i.prototype,r)||(e[r]=n)}),e}(),{chain:!1}),i.VERSION=x,qe(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){i[e].placeholder=i}),qe(["drop","take"],function(e,n){L.prototype[e]=function(r){r=r===u?1:ne(E(r),0);var t=this.__filtered__&&!n?new L(this):this.clone();return t.__filtered__?t.__takeCount__=ie(r,t.__takeCount__):t.__views__.push({size:ie(r,We),type:e+(t.__dir__<0?"Right":"")}),t},L.prototype[e+"Right"]=function(r){return this.reverse()[e](r).reverse()}}),qe(["filter","map","takeWhile"],function(e,n){var r=n+1,t=r==ei||r==ll;L.prototype[e]=function(a){var s=this.clone();return s.__iteratees__.push({iteratee:w(a,3),type:r}),s.__filtered__=s.__filtered__||t,s}}),qe(["head","last"],function(e,n){var r="take"+(n?"Right":"");L.prototype[e]=function(){return this[r](1).value()[0]}}),qe(["initial","tail"],function(e,n){var r="drop"+(n?"":"Right");L.prototype[e]=function(){return this.__filtered__?new L(this):this[r](1)}}),L.prototype.compact=function(){return this.filter(me)},L.prototype.find=function(e){return this.filter(e).head()},L.prototype.findLast=function(e){return this.reverse().find(e)},L.prototype.invokeMap=N(function(e,n){return typeof e=="function"?new L(this):this.map(function(r){return or(r,e,n)})}),L.prototype.reject=function(e){return this.filter(lt(w(e)))},L.prototype.slice=function(e,n){e=E(e);var r=this;return r.__filtered__&&(e>0||n<0)?new L(r):(e<0?r=r.takeRight(-e):e&&(r=r.drop(e)),n!==u&&(n=E(n),r=n<0?r.dropRight(-n):r.take(n-e)),r)},L.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},L.prototype.toArray=function(){return this.take(We)},Ge(L.prototype,function(e,n){var r=/^(?:filter|find|map|reject)|While$/.test(n),t=/^(?:head|last)$/.test(n),a=i[t?"take"+(n=="last"?"Right":""):n],s=t||/^find/.test(n);a&&(i.prototype[n]=function(){var l=this.__wrapped__,o=t?[1]:arguments,g=l instanceof L,p=o[0],k=g||B(l),c=function(I){var O=a.apply(i,ln([I],o));return t&&h?O[0]:O};k&&r&&typeof p=="function"&&p.length!=1&&(g=k=!1);var h=this.__chain__,q=!!this.__actions__.length,T=s&&!h,F=g&&!q;if(!s&&k){l=F?l:new L(this);var R=e.apply(l,o);return R.__actions__.push({func:at,args:[c],thisArg:u}),new we(R,h)}return T&&F?e.apply(this,o):(R=this.thru(c),T?t?R.value()[0]:R.value():R)})}),qe(["pop","push","shift","sort","splice","unshift"],function(e){var n=Br[e],r=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",t=/^(?:pop|shift)$/.test(e);i.prototype[e]=function(){var a=arguments;if(t&&!this.__chain__){var s=this.value();return n.apply(B(s)?s:[],a)}return this[r](function(l){return n.apply(B(l)?l:[],a)})}}),Ge(L.prototype,function(e,n){var r=i[n];if(r){var t=r.name+"";V.call(Cn,t)||(Cn[t]=[]),Cn[t].push({name:n,func:r})}}),Cn[Xr(u,kn).name]=[{name:"wrapper",func:u}],L.prototype.clone=fd,L.prototype.reverse=vd,L.prototype.value=md,i.prototype.at=Wf,i.prototype.chain=Gf,i.prototype.commit=Hf,i.prototype.next=$f,i.prototype.plant=zf,i.prototype.reverse=Zf,i.prototype.toJSON=i.prototype.valueOf=i.prototype.value=Xf,i.prototype.first=i.prototype.head,rr&&(i.prototype[rr]=Yf),i},Ln=Go();yn?((yn.exports=Ln)._=Ln,Mt._=Ln):te._=Ln}).call(kr)})(ct,ct.exports);var Cu=ct.exports;const Sk="NORGE",Ku=v=>v??"",Ek=v=>{const{adresselinje1:b,adresselinje2:u,adresselinje3:x,postNummer:A,poststed:S,land:j}=v,$=[b,u,x].filter(M=>!!M).join(", "),D=`${Ku(A)} ${Ku(S)}`,Q=(j==null?void 0:j.toUpperCase())!==Sk?j:void 0;return[$,D,Q].map(M=>M==null?void 0:M.trim()).filter(M=>!!M).join(", ").trim()},vc=(v,b)=>[...v].sort(zu).find(u=>u.adresseType===b),mc=(v,b)=>v.length!==b.length?!1:v.every(u=>b.some(x=>Cu.isEqual(u,x)))&&b.every(u=>v.some(x=>Cu.isEqual(x,u)));function Fk(v){throw new Error("Uventet enum verdi: alle tilfeller skal må håndteres:",v)}const Ha=cr(bt);var Nk=(v=>(v[v.SOKNAD=0]="SOKNAD",v[v.FREG=1]="FREG",v[v.MEDL=2]="MEDL",v))(Nk||{});const Ik=v=>{switch(v){case 0:return Ha.formatMessage({id:"FaktaKilde.Soknad"});case 1:return Ha.formatMessage({id:"FaktaKilde.FREG"});case 2:return Ha.formatMessage({id:"FaktaKilde.MEDL"});default:return Fk(v)}},Zu=Me.forwardRef((v,b)=>y.jsx(Ya,{gap:"2",style:{display:"flex"},...v,ref:b}));Zu.displayName="FaktaGruppe";const Lk=({label:v,value:b,kilde:u})=>y.jsx(mt,{background:"bg-subtle",flexGrow:"1",paddingBlock:"2",paddingInline:"4",borderRadius:"medium",children:y.jsxs(Ja,{gap:"6",children:[y.jsxs("div",{children:[y.jsx(Gu,{size:"small",children:v}),y.jsx(za,{size:"large",children:b})]}),y.jsx(Za,{uppercase:!0,children:Ik(u)})]})});Zu.__docgenInfo={description:"",methods:[],displayName:"FaktaGruppe"};Lk.__docgenInfo={description:"",methods:[],displayName:"FaktaBox",props:{label:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},value:{required:!0,tsType:{name:"string"},description:""},kilde:{required:!0,tsType:{name:"FaktaKilde"},description:""}}};const Xu=({adresser:v,erAnnenpart:b=!1,harSammeAdresser:u=!1,adresseKodeverk:x})=>{if(u)return y.jsx(mt,{padding:"4",children:y.jsx(Eu,{textColor:"subtle",children:y.jsx(Pe,{id:"AdresseTabell.SammeAdresse"})})});const A=S=>S+1===v.length?{border:"0px"}:{};return y.jsxs(y.Fragment,{children:[v.length===0&&y.jsx(mt,{padding:"4",children:y.jsx(Eu,{textColor:"subtle",children:y.jsx(Pe,{id:"AdresseTabell.IngenAdresse",values:{erAnnenpart:b}})})}),v.length>0&&y.jsxs(Oe,{style:{tableLayout:"fixed"},children:[y.jsx(Oe.Header,{children:y.jsxs(Oe.Row,{children:[y.jsx(Oe.HeaderCell,{children:y.jsx(Pe,{id:"AdresseTabell.PeriodeLabel"})}),y.jsx(Oe.HeaderCell,{children:y.jsx(Pe,{id:"AdresseTabell.AdresseLabel"})}),y.jsx(Oe.HeaderCell,{children:y.jsx(Pe,{id:"AdresseTabell.TypeLabel"})})]})}),y.jsx(Oe.Body,{children:v.sort(zu).map((S,j)=>{var $;return y.jsxs(Oe.Row,{children:[y.jsx(Oe.DataCell,{style:A(j),children:y.jsx(kk,{dateStringFom:S.fom,dateStringTom:S.tom===$a?void 0:S.tom})}),y.jsx(Oe.DataCell,{style:A(j),children:Ek(S)}),y.jsx(Oe.DataCell,{style:A(j),children:($=x.find(D=>D.kode===S.adresseType))==null?void 0:$.navn})]},j)})})]})]})};Xu.__docgenInfo={description:"",methods:[],displayName:"AdresseTabell",props:{adresser:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"},description:""}}};const Ok=cr(bt),Mk=v=>{switch(v){case Nu.KVINNE:return Wa.female;case Nu.MANN:return Wa.male;default:return Wa.unknown}},vt=({rolle:v="BRUKER",alleKodeverk:b,harSammeAdresser:u,navn:x,kjønn:A,sivilstand:S,fødselsdato:j,dødsdato:$,adresser:D,showIcon:Q=!0})=>{var Z;const M=v==="BARN";return y.jsx(yt,{value:Ok,children:y.jsx(mt,{background:"bg-subtle",padding:"4",borderRadius:"large","aria-label":x,children:y.jsxs(Ja,{gap:"1",children:[y.jsxs(Ya,{gap:"5",children:[Q&&y.jsx("div",{children:y.jsx(qk,{gender:Mk(A),isChild:M})}),y.jsxs("div",{children:[y.jsxs(Ya,{gap:"4",children:[y.jsx(Gu,{children:y.jsx(Pe,{id:"PersonPanel.RolleOgNavn",values:{rolle:v,navn:x}})}),M&&j&&!$&&y.jsx(za,{children:y.jsx(Pe,{id:"PersonPanel.Fodt",values:{dato:Fu(j)}})}),$&&y.jsx(za,{children:y.jsx(Pe,{id:"PersonPanel.Dod",values:{dato:Fu($)}})})]}),!M&&S&&y.jsx(Za,{"aria-label":"Sivilstand",children:(Z=b[pt.SIVILSTAND_TYPE].find(Be=>Be.kode===S))==null?void 0:Z.navn})]})]}),y.jsxs(Za,{children:[v==="BARN"&&y.jsx(Pe,{id:"PersonPanel.Beskrivelse.Barn",values:{rolle:v}}),v==="BRUKER"&&y.jsx(Pe,{id:"PersonPanel.Beskrivelse.Bruker",values:{rolle:v}}),v==="ANNEN_PART"&&y.jsx(Pe,{id:"PersonPanel.Beskrivelse.Annenpart",values:{rolle:v}})]}),y.jsx(Xu,{harSammeAdresser:u,adresser:D,adresseKodeverk:b[pt.ADRESSE_TYPE]})]})})})};vt.__docgenInfo={description:"",methods:[],displayName:"Personopplysninger",props:{rolle:{required:!1,tsType:{name:"union",raw:"'BARN' | 'BRUKER' | 'ANNEN_PART'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'BRUKER'"},{name:"literal",value:"'ANNEN_PART'"}]},description:"",defaultValue:{value:"'BRUKER'",computed:!1}},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Personadresse[]"},description:""},kjønn:{required:!1,tsType:{name:"string"},description:""},showIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const Ck=({personoversikt:{barn:v,bruker:b,annenPart:u},alleKodeverk:x})=>y.jsxs(Ja,{gap:"2",children:[v.map(A=>y.jsx(vt,{...A,alleKodeverk:x,rolle:"BARN"},A.aktoerId)),y.jsx(vt,{rolle:"BRUKER",alleKodeverk:x,...b}),u&&y.jsx(vt,{...u,rolle:"ANNEN_PART",alleKodeverk:x})]});Ck.__docgenInfo={description:"",methods:[],displayName:"PersonopplysningerForFamilie",props:{alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Kk="_boks_c3bfh_1",Dk="_harBorderLeft_c3bfh_8",Vk="_harBorderTop_c3bfh_12",Ju={boks:Kk,harBorderLeft:Dk,harBorderTop:Vk},Uk=Ak.bind(Ju),Wk=({harBorderTop:v=!1,harBorderLeft:b=!0,children:u})=>y.jsx("div",{className:Uk(Ju.boks,{harBorderLeft:b,harBorderTop:v}),children:u});Wk.__docgenInfo={description:"",methods:[],displayName:"Boks",props:{harBorderTop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},harBorderLeft:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Du="default",Vu="default",Gk=(v,b,u,x,A,S)=>j=>{const D=(Array.isArray(j)?j:[j]).map(M=>({"@type":M.kode,...M})),Q={saksnummer:v.saksnummer,behandlingUuid:b.uuid,behandlingVersjon:b.versjon};if(D&&A&&S){if(D.length===0)throw Error("Det har oppstått en teknisk feil ved lagring av aksjonspunkter. Meld feilen i Porten.");if(S.includes(D[0].kode))return A({...Q,overstyrteAksjonspunktDtoer:D},!0).then(()=>u(Vu,Du))}return x({...Q,bekreftedeAksjonspunktDtoer:D},!0).then(()=>u(Vu,Du))},Hk=(v,b=[])=>{const[u,x]=Me.useState(),A=Me.useContext(uk);Me.useEffect(()=>{u&&x(void 0)},[A.behandling.versjon]);const{aksjonspunkt:S}=A.behandling,j=Me.useMemo(()=>S&&v?S.filter(M=>v.includes(M.definisjon)):[],[S,v]),$=wk(A.behandling,[],A.rettigheter,A.hasFetchError),D=Me.useMemo(()=>Tk(A.behandling,j),[A.behandling.versjon,j]),Q=Me.useMemo(()=>Gk(A.fagsak,A.behandling,A.oppdaterProsessStegOgFaktaPanelIUrl,A.lagreAksjonspunkter,A.lagreOverstyrteAksjonspunkter,b),[A.behandling.versjon,b]);return{behandling:A.behandling,submittable:!j.some(M=>Mu(M.status))||j.some(M=>M.kanLoses),harApneAksjonspunkter:j.some(M=>Mu(M.status)&&M.kanLoses),alleKodeverk:A.alleKodeverk,aksjonspunkter:j,readOnly:$,alleMerknaderFraBeslutter:D,submitCallback:Q,formData:u,setFormData:x}},$k="default",Yk=(v,b,u,x,A,S)=>{const[j,$]=Me.useState(!1);Me.useEffect(()=>{v({id:b})},[]);const D=x&&(S===b||A&&S===$k),Q=ck(x);return Me.useEffect(()=>{x?v({id:b,tekst:u,erAktiv:D,harApneAksjonspunkter:A}):!x&&Q&&v({id:b}),$(D)},[Q,x,D,A]),x&&j},Qu=({erPanelValgt:v,dataState:b,children:u})=>v?b!==$u.SUCCESS?y.jsx(yk,{}):u:null;Qu.__docgenInfo={description:"",methods:[],displayName:"FaktaPanelWrapper",props:{erPanelValgt:{required:!0,tsType:{name:"boolean"},description:""},dataState:{required:!0,tsType:{name:"RestApiState"},description:""},children:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const el=({valgtFaktaSteg:v,behandling:b,registrerFaktaPanel:u,panelEndepunkter:x=[],aksjonspunktKoder:A,overstyringApKoder:S,skalPanelVisesIMeny:j,renderPanel:$,faktaPanelKode:D,faktaPanelMenyTekst:Q})=>{const M=Hk(A,S),Z=Yk(u,D,Q,j(),M.harApneAksjonspunkter,v),Be=x.map(De=>({key:De})),{data:Ce,state:Ke}=lk.useMultipleRestApi(Be,{updateTriggers:[Z,b==null?void 0:b.versjon],suspendRequest:!Z||Be.length===0,isCachingOn:!0});return y.jsx(Qu,{erPanelValgt:Z,dataState:Be.length>0?Ke:$u.SUCCESS,children:$({...Ce,...M})})};el.__docgenInfo={description:"",methods:[],displayName:"FaktaDefaultInitPanel",props:{panelEndepunkter:{required:!1,tsType:{name:"Array",elements:[{name:"RestKey",elements:[{name:"any"},{name:"any"}],raw:"RestKey<any, any>"}],raw:"RestKey<any, any>[]"},description:"",defaultValue:{value:"[]",computed:!1}},aksjonspunktKoder:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},overstyringApKoder:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},skalPanelVisesIMeny:{required:!0,tsType:{name:"signature",type:"function",raw:"() => boolean",signature:{arguments:[],return:{name:"boolean"}}},description:""},renderPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: PANEL_DATA & StandardFaktaPanelProps) => ReactElement",signature:{arguments:[{type:{name:"intersection",raw:"PANEL_DATA & StandardFaktaPanelProps",elements:[{name:"PANEL_DATA"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandling: Behandling;
  aksjonspunkter: Aksjonspunkt[];
  readOnly: boolean;
  submittable: boolean;
  harApneAksjonspunkter: boolean;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  submitCallback: (aksjonspunktData: any) => Promise<void>;
  alleKodeverk: AlleKodeverk;
  formData?: any;
  setFormData: (data: any) => void;
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
  harVerge?: boolean;
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
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"harVerge",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
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
  harVerge?: boolean;
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
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}}]},required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],required:!0}},{key:"formData",value:{name:"any",required:!1}},{key:"setFormData",value:{name:"signature",type:"function",raw:"(data: any) => void",signature:{arguments:[{type:{name:"any"},name:"data"}],return:{name:"void"}},required:!0}}]}}],raw:`Readonly<{
  behandling: Behandling;
  aksjonspunkter: Aksjonspunkt[];
  readOnly: boolean;
  submittable: boolean;
  harApneAksjonspunkter: boolean;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  submitCallback: (aksjonspunktData: any) => Promise<void>;
  alleKodeverk: AlleKodeverk;
  formData?: any;
  setFormData: (data: any) => void;
}>`}]},name:"data"}],return:{name:"ReactElement"}}},description:""},faktaPanelKode:{required:!0,tsType:{name:"FaktaPanelCode"},description:""},faktaPanelMenyTekst:{required:!0,tsType:{name:"string"},description:""},valgtFaktaSteg:{required:!1,tsType:{name:"string"},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
  harVerge?: boolean;
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
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"harVerge",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
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
  harVerge?: boolean;
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
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}}]},required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},registrerFaktaPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: FaktaPanelMenyData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApneAksjonspunkter?: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApneAksjonspunkter",value:{name:"boolean",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const zk="_selectWidth_1ur6m_1",Zk="_leftCol_1ur6m_5",Uu={selectWidth:zk,leftCol:Zk},xn=({intl:v,readOnly:b,vergetyper:u=[],alleMerknaderFraBeslutter:x,valgtVergeType:A})=>y.jsxs(hk,{merknaderFraBeslutter:x[ht.AVKLAR_VERGE],children:[y.jsx(ok,{name:"vergeType",className:Uu.selectWidth,label:v.formatMessage({id:"Verge.TypeVerge"}),validate:[Hn],selectValues:u.map(S=>y.jsx("option",{value:S.kode,children:S.navn},S.kode)),readOnly:b}),y.jsx(bk,{children:A&&y.jsxs(y.Fragment,{children:[y.jsx(kt,{sixteenPx:!0}),y.jsxs(Ou,{children:[y.jsx(ft,{className:Uu.leftCol,children:y.jsx(Ua,{name:"navn",label:v.formatMessage({id:"Verge.Navn"}),validate:[Hn,dk],readOnly:b})}),y.jsxs(ft,{children:[A!==Xa.ADVOKAT&&y.jsx(Ua,{name:"fnr",label:v.formatMessage({id:"Verge.FodselsNummer"}),validate:[Hn,gk],readOnly:b}),A===Xa.ADVOKAT&&y.jsx(Ua,{name:"organisasjonsnummer",label:v.formatMessage({id:"Verge.Organisasjonsnummer"}),validate:[Hn],readOnly:b})]})]}),y.jsx(kt,{sixteenPx:!0}),y.jsxs(Ou,{children:[y.jsx(ft,{children:y.jsx(Iu,{name:"gyldigFom",label:v.formatMessage({id:"Verge.PeriodeFOM"}),validate:[Hn,Lu],isReadOnly:b})}),y.jsx(ft,{children:y.jsx(Iu,{name:"gyldigTom",label:v.formatMessage({id:"Verge.PeriodeTOM"}),validate:[Lu],isReadOnly:b})})]})]})})]});xn.defaultProps={vergetyper:[]};xn.buildInitialValues=v=>({navn:v.navn,gyldigFom:v.gyldigFom,gyldigTom:v.gyldigTom,fnr:v.fnr,organisasjonsnummer:v.organisasjonsnummer,vergeType:v.vergeType||void 0});xn.transformValues=v=>({vergeType:v.vergeType,navn:v.navn,fnr:v.fnr,organisasjonsnummer:v.organisasjonsnummer,gyldigFom:v.gyldigFom,gyldigTom:v.gyldigTom,kode:ht.AVKLAR_VERGE});xn.__docgenInfo={description:`RegistrereVergeFaktaForm

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
  kode: AksjonspunktCode.AVKLAR_VERGE;
}`,signature:{properties:[{key:"vergeType",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fnr",value:{name:"string",required:!0}},{key:"organisasjonsnummer",value:{name:"string",required:!0}},{key:"gyldigFom",value:{name:"string",required:!0}},{key:"gyldigTom",value:{name:"string",required:!1}},{key:"kode",value:{name:"AksjonspunktCode.AVKLAR_VERGE",required:!0}}]}}}}],displayName:"RegistrereVergeFaktaForm",props:{vergetyper:{defaultValue:{value:"[]",computed:!1},required:!1}}};const Xk=(v,b)=>({begrunnelse:yr.buildInitialValues(b.filter(u=>u.definisjon===ht.AVKLAR_VERGE)[0]).begrunnelse,...xn.buildInitialValues(v||{})}),Jk=v=>({...xn.transformValues(v),begrunnelse:v.begrunnelse}),nl=({hasOpenAksjonspunkter:v,submittable:b,readOnly:u,alleMerknaderFraBeslutter:x,aksjonspunkter:A,verge:S,alleKodeverk:j,submitCallback:$,formData:D,setFormData:Q})=>{const M=Hu(),Z=fk({defaultValues:D||Xk(S,A),shouldUnregister:!0}),Be=Z.watch("vergeType"),Ce=Z.watch("begrunnelse"),Ke=Me.useMemo(()=>j[pt.VERGE_TYPE].sort((De,de)=>De.navn.localeCompare(de.navn)),[j[pt.VERGE_TYPE]]);return A.length===0?null:y.jsxs(y.Fragment,{children:[y.jsx(_k,{isAksjonspunktOpen:v,children:[M.formatMessage({id:"RegistrereVergeInfoPanel.CheckInformation"})]}),y.jsxs(vk,{formMethods:Z,onSubmit:De=>$(Jk(De)),setDataOnUnmount:Q,children:[y.jsx(xn,{readOnly:u,intl:M,vergetyper:Ke,valgtVergeType:Be,alleMerknaderFraBeslutter:x}),y.jsx(kt,{twentyPx:!0}),y.jsx(yr,{isSubmittable:b,isReadOnly:u,hasBegrunnelse:!!Ce}),y.jsx(kt,{twentyPx:!0}),y.jsx(Yu,{isSubmittable:b&&!!Be,isReadOnly:u,isSubmitting:Z.formState.isSubmitting,isDirty:Z.formState.isDirty})]})]})};nl.__docgenInfo={description:`RegistrereVergeInfoPanel

Presentasjonskomponent. Har ansvar for å sette opp formen for att registrere verge.`,methods:[],displayName:"RegistrereVergeInfoPanel",props:{submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(aksjonspunktData: AvklarVergeAp) => Promise<void>",signature:{arguments:[{type:{name:"intersection",raw:`{
  navn: string;
  fnr: string;
  gyldigFom: string;
  gyldigTom?: string;
  vergeType: string;
  organisasjonsnummer: string;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.AVKLAR_VERGE>`,elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},{name:"Record",elements:[{name:"tilbakekrevingKodeverkTyper"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<tilbakekrevingKodeverkTyper, KodeverkMedNavn[]>"}]},description:""},verge:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  navn?: string;
  fnr?: string;
  gyldigFom?: string;
  gyldigTom?: string;
  vergeType?: string;
  organisasjonsnummer?: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!1}},{key:"fnr",value:{name:"string",required:!1}},{key:"gyldigFom",value:{name:"string",required:!1}},{key:"gyldigTom",value:{name:"string",required:!1}},{key:"vergeType",value:{name:"string",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}}]}},description:""},hasOpenAksjonspunkter:{required:!0,tsType:{name:"boolean"},description:""},submittable:{required:!0,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleMerknaderFraBeslutter:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""},formData:{required:!1,tsType:{name:"any"},description:""},setFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: any) => void",signature:{arguments:[{type:{name:"any"},name:"data"}],return:{name:"void"}}},description:""}}};const Qk={"RegistrereVergeInfoPanel.CheckInformation":"Fyll ut og kontroller vergeopplysninger","Verge.KontaktPerson":"Kontaktperson","Verge.Navn":"Navn","Verge.Mandat":"Mandat","Verge.FodselsNummer":"Fødselsnummer","Verge.PeriodeFOM":"Periode f.o.m.","Verge.PeriodeTOM":"Periode t.o.m.","Verge.TypeVerge":"Type verge","Verge.VergeFullmektig":"Verge/fullmektig","Verge.Soker":"Søker","Verge.BrukerErUnderTvungenForvaltning":"Søker er under tvungen forvaltning","Verge.Organisasjonsnummer":"Organisasjonsnummer"},ec=cr(Qk),rl=({verge:v={},aksjonspunkter:b,alleMerknaderFraBeslutter:u,alleKodeverk:x,submitCallback:A,readOnly:S,harApneAksjonspunkter:j,submittable:$,formData:D,setFormData:Q})=>y.jsx(yt,{value:ec,children:y.jsx(nl,{verge:v,aksjonspunkter:b,alleMerknaderFraBeslutter:u,hasOpenAksjonspunkter:j,alleKodeverk:x,submitCallback:A,readOnly:S,submittable:$,formData:D,setFormData:Q})});rl.__docgenInfo={description:"",methods:[],displayName:"VergeFaktaIndex",props:{verge:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},{name:"Record",elements:[{name:"tilbakekrevingKodeverkTyper"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<tilbakekrevingKodeverkTyper, KodeverkMedNavn[]>"}]},description:""}}};const Wu=[ht.AVKLAR_VERGE],nc=[pk.VERGE],rc=({valgtFaktaSteg:v,behandling:b,registrerFaktaPanel:u})=>y.jsx(el,{valgtFaktaSteg:v,behandling:b,registrerFaktaPanel:u,panelEndepunkter:nc,aksjonspunktKoder:Wu,faktaPanelKode:mk.VERGE,faktaPanelMenyTekst:Hu().formatMessage({id:"RegistrereVergeInfoPanel.Info"}),skalPanelVisesIMeny:()=>{var x;return!!((x=b.aksjonspunkt)!=null&&x.some(A=>A.definisjon===Wu[0]))},renderPanel:x=>y.jsx(rl,{...x})});rc.__docgenInfo={description:"VergeFaktaInitPanel",methods:[],displayName:"VergeFaktaInitPanel",props:{valgtFaktaSteg:{required:!1,tsType:{name:"string"},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
  harVerge?: boolean;
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
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"harVerge",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
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
  harVerge?: boolean;
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
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}}]},required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},registrerFaktaPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: FaktaPanelMenyData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApneAksjonspunkter?: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApneAksjonspunkter",value:{name:"boolean",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};export{Wk as B,el as F,Ck as P,rc as V,Yu as a,yr as b,Fk as c,Zu as d,Lk as e,Ek as f,vc as g,Nk as h,Ik as i,vt as j,mc as k,zu as s};
