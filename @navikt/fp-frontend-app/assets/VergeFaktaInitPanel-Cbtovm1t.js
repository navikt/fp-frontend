import{j as y}from"./jsx-runtime-BDPtolqC.js";import{P as yt,l as nk,k as $a,V as Ja,L as Hu,B as Ya,F as za,aa as Eu,i as $u}from"./alleKodeverk-B3AibkSl.js";import{n as kr,c as rk,M as Pe,_ as Za,U as tk,s as Fu,H as ak,e as ik,J as sk,V as uk,g as pt,Y as Nu,z as ft,o as lk}from"./index.es-dGlS6Fbw.js";import{r as Me}from"./index-B54hSm9S.js";import{L as ok,e as Un,N as dk,a as gk,l as fk,E as mk,$ as vk,M as Ua,n as pk,q as kk,k as Iu,O as Lu,u as ck,W as yk}from"./index.es-DT3aXwL0.js";import{c as mt}from"./index-D1iumpf7.js";import{B as kt}from"./Box-BYpVF8tv.js";import{U as hk,a as Wa}from"./index.es-B_dFCv1U.js";import"./aktivitetStatus-02fOJoqz.js";import{K as ct}from"./kodeverkTyper-CavWL6Ds.js";import{K as Ou}from"./Kjonnkode-C-fkzSiP.js";import{T as Oe}from"./Table-CDBqd99h.js";import{c as bk}from"./bind-Di5x0AXu.js";import{A as ht,h as _k}from"./aksjonspunktCodes-BuBbCIxs.js";import{F as qk}from"./skjermlenkeCodes-1SvLTuBb.js";import{a as Ak,B as wk}from"./behandlingContextApi-Dp0SG7zF.js";import{a as Yu}from"./useRestApiRunner-DgEJAvhj.js";import{i as Mu}from"./RisikoklassifiseringIndex-CapKkKJQ.js";import{e as Tk,g as Rk}from"./ProsessDefaultInitPanel-CC5O2ZIm.js";import{S as xk}from"./FagsakIndex-BhrmR1_1.js";var Xa=(m=>(m.BARN="BARN",m.FBARN="FBARN",m.VOKSEN="VOKSEN",m.ADVOKAT="ADVOKAT",m.ANNEN_F="ANNEN_F",m))(Xa||{});const bt={"AdresseVisning.Adresse":"Adresse","ForelderPanel.Soker":"Søker","ForelderPanel.AnnenForelder":"Annen forelder","AlleBarnPanel.Barn":"Barn","AlleBarnPanel.BarnNr":"Barn {nummer}","AlleBarnPanel.Fodt":"Født","AlleBarnPanel.Dod":"Død","PersonPanel.RolleOgNavn":"{rolle, select, BRUKER {Søker, } ANNEN_PART {Den andre forelderen, } BARN {Barnet, } other {} }{navn}","PersonPanel.Beskrivelse.Bruker":"Adresser for søker registrert i folkeregisteret gyldige for de siste 12 månedene","PersonPanel.Beskrivelse.Barn":"Adresser for barnet registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Beskrivelse.Annenpart":"Adresser for den andre forelderen registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Fodt":"Født {dato}","PersonPanel.Dod":"Død {dato}","AdresseTabell.IngenAdresse":"Ingen adresser funnet for {erAnnenpart, select, true {den andre forelderen} other {søker} }.","AdresseTabell.SammeAdresse":"Den andre forelderen har samme adresse som søker på skjæringstidspunktet","AdresseTabell.PeriodeLabel":"Periode","AdresseTabell.AdresseLabel":"Adresse","AdresseTabell.TypeLabel":"Type","MerkePanel.Dod":"DØD","MerkePanel.DodTittel":"Personen er død","MerkePanel.DodFodt":"DØDFØDT","MerkePanel.Diskresjon6":"Kode 6","MerkePanel.Diskresjon7":"Kode 7","MerkePanel.EgenAnsatt":"Nav","MerkePanel.Verge":"Verge","MerkePanel.Diskresjon6Tittel":"Personen har diskresjonsmerking kode 6","MerkePanel.Diskresjon7Tittel":"Personen har diskresjonsmerking kode 7","MerkePanel.EgenAnsattTittel":"Personen er ansatt i Nav","MerkePanel.VergeTittel":"Personen har verge","SubmitButton.ConfirmInformation":"Bekreft og fortsett","FaktaBegrunnelseTextField.BegrunnEndringene":"Begrunn endringene","FaktaBegrunnelseTextField.Vurdering":"Vurdering","FaktaBegrunnelseTextField.Begrunnelse":"Begrunnelse","FaktaKilde.Soknad":"FRA SØKNADEN","FaktaKilde.FREG":"FRA FOLKEREGISTERET","FaktaKilde.MEDL":"FRA MEDLEMSKAPSREGISTERET"},Ga=kr(bt),jk=gk(3),Pk=fk(1500),cr=({isReadOnly:m,isSubmittable:b,hasBegrunnelse:u,label:x,hasReadOnlyLabel:A=!1,hasVurderingText:P=!1,name:j="begrunnelse"})=>{const $=P?"FaktaBegrunnelseTextField.Vurdering":"FaktaBegrunnelseTextField.BegrunnEndringene",D=()=>m?A?Ga.formatMessage({id:"FaktaBegrunnelseTextField.Begrunnelse"}):"":x||Ga.formatMessage({id:$});return y.jsx(yt,{value:Ga,children:(b||u)&&y.jsx(ok,{name:j,label:D(),validate:[Un,jk,Pk,dk],maxLength:1500,readOnly:m})})},Bk=m=>m&&Array.isArray(m)?m.length>0?m[0].begrunnelse:"":m&&!Array.isArray(m)?m.begrunnelse:"";cr.buildInitialValues=(m,b="begrunnelse")=>({[b]:rk(Bk(m))});cr.transformValues=(m,b="begrunnelse")=>({begrunnelse:m[b]});cr.__docgenInfo={description:"FaktaBegrunnelseTextField",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"aksjonspunkt",optional:!0,type:{name:"union",raw:"Aksjonspunkt[] | Aksjonspunkt",elements:[{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!0}}]}}}}],displayName:"FaktaBegrunnelseTextField",props:{hasReadOnlyLabel:{defaultValue:{value:"false",computed:!1},required:!1},hasVurderingText:{defaultValue:{value:"false",computed:!1},required:!1},name:{defaultValue:{value:"'begrunnelse'",computed:!1},required:!1}}};const Sk=kr(bt),Ek=(m,b,u)=>!u||b?!0:!m,zu=({isReadOnly:m,isSubmittable:b,buttonText:u,onClick:x,isSubmitting:A,isDirty:P})=>y.jsx(yt,{value:Sk,children:!m&&y.jsxs(nk,{size:"small",variant:"primary",loading:A,disabled:Ek(P,A,b),onClick:x||mk,type:x?"button":"submit",children:[!!u&&u,!u&&y.jsx(Pe,{id:"SubmitButton.ConfirmInformation"})]})});zu.__docgenInfo={description:"FaktaSubmitButton",methods:[],displayName:"FaktaSubmitButton",props:{buttonText:{required:!1,tsType:{name:"string"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!0,tsType:{name:"boolean"},description:""}}};const Zu=(m,b)=>{const u=new Date(m.tom??Za),x=new Date(b.tom??Za);if(u>x)return-1;if(u<x)return 1;if(m.fom&&!b.fom)return-1;if(!m.fom&&b.fom)return 1;if(m.fom&&b.fom){const A=new Date(m.fom),P=new Date(b.fom);if(A>P)return-1;if(A<P)return 1}return 0};var pr={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var Fk=pr.exports,Ku;function Nk(){return Ku||(Ku=1,function(m,b){(function(){var u,x="4.17.21",A=200,P="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",j="Expected a function",$="Invalid `variable` option passed into `_.template`",D="__lodash_hash_undefined__",Q=500,M="__lodash_placeholder__",Z=1,Be=2,Ke=4,Ce=1,De=2,ve=1,Tn=2,Qa=4,He=8,Wn=16,$e=32,Gn=64,Ye=128,Hn=256,_t=512,al=30,il="...",sl=800,ul=16,ei=1,ll=2,ol=3,yr=1/0,Rn=9007199254740991,dl=17976931348623157e292,hr=NaN,Ve=4294967295,gl=Ve-1,fl=Ve>>>1,ml=[["ary",Ye],["bind",ve],["bindKey",Tn],["curry",He],["curryRight",Wn],["flip",_t],["partial",$e],["partialRight",Gn],["rearg",Hn]],xn="[object Arguments]",br="[object Array]",vl="[object AsyncFunction]",$n="[object Boolean]",Yn="[object Date]",pl="[object DOMException]",_r="[object Error]",qr="[object Function]",ni="[object GeneratorFunction]",Se="[object Map]",zn="[object Number]",kl="[object Null]",ze="[object Object]",ri="[object Promise]",cl="[object Proxy]",Zn="[object RegExp]",Ee="[object Set]",Xn="[object String]",Ar="[object Symbol]",yl="[object Undefined]",Jn="[object WeakMap]",hl="[object WeakSet]",Qn="[object ArrayBuffer]",jn="[object DataView]",qt="[object Float32Array]",At="[object Float64Array]",wt="[object Int8Array]",Tt="[object Int16Array]",Rt="[object Int32Array]",xt="[object Uint8Array]",jt="[object Uint8ClampedArray]",Pt="[object Uint16Array]",Bt="[object Uint32Array]",bl=/\b__p \+= '';/g,_l=/\b(__p \+=) '' \+/g,ql=/(__e\(.*?\)|\b__t\)) \+\n'';/g,ti=/&(?:amp|lt|gt|quot|#39);/g,ai=/[&<>"']/g,Al=RegExp(ti.source),wl=RegExp(ai.source),Tl=/<%-([\s\S]+?)%>/g,Rl=/<%([\s\S]+?)%>/g,ii=/<%=([\s\S]+?)%>/g,xl=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,jl=/^\w*$/,Pl=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,St=/[\\^$.*+?()[\]{}|]/g,Bl=RegExp(St.source),Et=/^\s+/,Sl=/\s/,El=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Fl=/\{\n\/\* \[wrapped with (.+)\] \*/,Nl=/,? & /,Il=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Ll=/[()=,{}\[\]\/\s]/,Ol=/\\(\\)?/g,Ml=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,si=/\w*$/,Kl=/^[-+]0x[0-9a-f]+$/i,Cl=/^0b[01]+$/i,Dl=/^\[object .+?Constructor\]$/,Vl=/^0o[0-7]+$/i,Ul=/^(?:0|[1-9]\d*)$/,Wl=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,wr=/($^)/,Gl=/['\n\r\u2028\u2029\\]/g,Tr="\\ud800-\\udfff",Hl="\\u0300-\\u036f",$l="\\ufe20-\\ufe2f",Yl="\\u20d0-\\u20ff",ui=Hl+$l+Yl,li="\\u2700-\\u27bf",oi="a-z\\xdf-\\xf6\\xf8-\\xff",zl="\\xac\\xb1\\xd7\\xf7",Zl="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Xl="\\u2000-\\u206f",Jl=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",di="A-Z\\xc0-\\xd6\\xd8-\\xde",gi="\\ufe0e\\ufe0f",fi=zl+Zl+Xl+Jl,Ft="['’]",Ql="["+Tr+"]",mi="["+fi+"]",Rr="["+ui+"]",vi="\\d+",eo="["+li+"]",pi="["+oi+"]",ki="[^"+Tr+fi+vi+li+oi+di+"]",Nt="\\ud83c[\\udffb-\\udfff]",no="(?:"+Rr+"|"+Nt+")",ci="[^"+Tr+"]",It="(?:\\ud83c[\\udde6-\\uddff]){2}",Lt="[\\ud800-\\udbff][\\udc00-\\udfff]",Pn="["+di+"]",yi="\\u200d",hi="(?:"+pi+"|"+ki+")",ro="(?:"+Pn+"|"+ki+")",bi="(?:"+Ft+"(?:d|ll|m|re|s|t|ve))?",_i="(?:"+Ft+"(?:D|LL|M|RE|S|T|VE))?",qi=no+"?",Ai="["+gi+"]?",to="(?:"+yi+"(?:"+[ci,It,Lt].join("|")+")"+Ai+qi+")*",ao="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",io="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",wi=Ai+qi+to,so="(?:"+[eo,It,Lt].join("|")+")"+wi,uo="(?:"+[ci+Rr+"?",Rr,It,Lt,Ql].join("|")+")",lo=RegExp(Ft,"g"),oo=RegExp(Rr,"g"),Ot=RegExp(Nt+"(?="+Nt+")|"+uo+wi,"g"),go=RegExp([Pn+"?"+pi+"+"+bi+"(?="+[mi,Pn,"$"].join("|")+")",ro+"+"+_i+"(?="+[mi,Pn+hi,"$"].join("|")+")",Pn+"?"+hi+"+"+bi,Pn+"+"+_i,io,ao,vi,so].join("|"),"g"),fo=RegExp("["+yi+Tr+ui+gi+"]"),mo=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,vo=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],po=-1,G={};G[qt]=G[At]=G[wt]=G[Tt]=G[Rt]=G[xt]=G[jt]=G[Pt]=G[Bt]=!0,G[xn]=G[br]=G[Qn]=G[$n]=G[jn]=G[Yn]=G[_r]=G[qr]=G[Se]=G[zn]=G[ze]=G[Zn]=G[Ee]=G[Xn]=G[Jn]=!1;var W={};W[xn]=W[br]=W[Qn]=W[jn]=W[$n]=W[Yn]=W[qt]=W[At]=W[wt]=W[Tt]=W[Rt]=W[Se]=W[zn]=W[ze]=W[Zn]=W[Ee]=W[Xn]=W[Ar]=W[xt]=W[jt]=W[Pt]=W[Bt]=!0,W[_r]=W[qr]=W[Jn]=!1;var ko={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},co={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},yo={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},ho={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},bo=parseFloat,_o=parseInt,Ti=typeof mt=="object"&&mt&&mt.Object===Object&&mt,qo=typeof self=="object"&&self&&self.Object===Object&&self,te=Ti||qo||Function("return this")(),Mt=b&&!b.nodeType&&b,pn=Mt&&!0&&m&&!m.nodeType&&m,Ri=pn&&pn.exports===Mt,Kt=Ri&&Ti.process,_e=function(){try{var d=pn&&pn.require&&pn.require("util").types;return d||Kt&&Kt.binding&&Kt.binding("util")}catch{}}(),xi=_e&&_e.isArrayBuffer,ji=_e&&_e.isDate,Pi=_e&&_e.isMap,Bi=_e&&_e.isRegExp,Si=_e&&_e.isSet,Ei=_e&&_e.isTypedArray;function pe(d,v,f){switch(f.length){case 0:return d.call(v);case 1:return d.call(v,f[0]);case 2:return d.call(v,f[0],f[1]);case 3:return d.call(v,f[0],f[1],f[2])}return d.apply(v,f)}function Ao(d,v,f,_){for(var B=-1,K=d==null?0:d.length;++B<K;){var ee=d[B];v(_,ee,f(ee),d)}return _}function qe(d,v){for(var f=-1,_=d==null?0:d.length;++f<_&&v(d[f],f,d)!==!1;);return d}function wo(d,v){for(var f=d==null?0:d.length;f--&&v(d[f],f,d)!==!1;);return d}function Fi(d,v){for(var f=-1,_=d==null?0:d.length;++f<_;)if(!v(d[f],f,d))return!1;return!0}function sn(d,v){for(var f=-1,_=d==null?0:d.length,B=0,K=[];++f<_;){var ee=d[f];v(ee,f,d)&&(K[B++]=ee)}return K}function xr(d,v){var f=d==null?0:d.length;return!!f&&Bn(d,v,0)>-1}function Ct(d,v,f){for(var _=-1,B=d==null?0:d.length;++_<B;)if(f(v,d[_]))return!0;return!1}function H(d,v){for(var f=-1,_=d==null?0:d.length,B=Array(_);++f<_;)B[f]=v(d[f],f,d);return B}function un(d,v){for(var f=-1,_=v.length,B=d.length;++f<_;)d[B+f]=v[f];return d}function Dt(d,v,f,_){var B=-1,K=d==null?0:d.length;for(_&&K&&(f=d[++B]);++B<K;)f=v(f,d[B],B,d);return f}function To(d,v,f,_){var B=d==null?0:d.length;for(_&&B&&(f=d[--B]);B--;)f=v(f,d[B],B,d);return f}function Vt(d,v){for(var f=-1,_=d==null?0:d.length;++f<_;)if(v(d[f],f,d))return!0;return!1}var Ro=Ut("length");function xo(d){return d.split("")}function jo(d){return d.match(Il)||[]}function Ni(d,v,f){var _;return f(d,function(B,K,ee){if(v(B,K,ee))return _=K,!1}),_}function jr(d,v,f,_){for(var B=d.length,K=f+(_?1:-1);_?K--:++K<B;)if(v(d[K],K,d))return K;return-1}function Bn(d,v,f){return v===v?Co(d,v,f):jr(d,Ii,f)}function Po(d,v,f,_){for(var B=f-1,K=d.length;++B<K;)if(_(d[B],v))return B;return-1}function Ii(d){return d!==d}function Li(d,v){var f=d==null?0:d.length;return f?Gt(d,v)/f:hr}function Ut(d){return function(v){return v==null?u:v[d]}}function Wt(d){return function(v){return d==null?u:d[v]}}function Oi(d,v,f,_,B){return B(d,function(K,ee,U){f=_?(_=!1,K):v(f,K,ee,U)}),f}function Bo(d,v){var f=d.length;for(d.sort(v);f--;)d[f]=d[f].value;return d}function Gt(d,v){for(var f,_=-1,B=d.length;++_<B;){var K=v(d[_]);K!==u&&(f=f===u?K:f+K)}return f}function Ht(d,v){for(var f=-1,_=Array(d);++f<d;)_[f]=v(f);return _}function So(d,v){return H(v,function(f){return[f,d[f]]})}function Mi(d){return d&&d.slice(0,Vi(d)+1).replace(Et,"")}function ke(d){return function(v){return d(v)}}function $t(d,v){return H(v,function(f){return d[f]})}function er(d,v){return d.has(v)}function Ki(d,v){for(var f=-1,_=d.length;++f<_&&Bn(v,d[f],0)>-1;);return f}function Ci(d,v){for(var f=d.length;f--&&Bn(v,d[f],0)>-1;);return f}function Eo(d,v){for(var f=d.length,_=0;f--;)d[f]===v&&++_;return _}var Fo=Wt(ko),No=Wt(co);function Io(d){return"\\"+ho[d]}function Lo(d,v){return d==null?u:d[v]}function Sn(d){return fo.test(d)}function Oo(d){return mo.test(d)}function Mo(d){for(var v,f=[];!(v=d.next()).done;)f.push(v.value);return f}function Yt(d){var v=-1,f=Array(d.size);return d.forEach(function(_,B){f[++v]=[B,_]}),f}function Di(d,v){return function(f){return d(v(f))}}function ln(d,v){for(var f=-1,_=d.length,B=0,K=[];++f<_;){var ee=d[f];(ee===v||ee===M)&&(d[f]=M,K[B++]=f)}return K}function Pr(d){var v=-1,f=Array(d.size);return d.forEach(function(_){f[++v]=_}),f}function Ko(d){var v=-1,f=Array(d.size);return d.forEach(function(_){f[++v]=[_,_]}),f}function Co(d,v,f){for(var _=f-1,B=d.length;++_<B;)if(d[_]===v)return _;return-1}function Do(d,v,f){for(var _=f+1;_--;)if(d[_]===v)return _;return _}function En(d){return Sn(d)?Uo(d):Ro(d)}function Fe(d){return Sn(d)?Wo(d):xo(d)}function Vi(d){for(var v=d.length;v--&&Sl.test(d.charAt(v)););return v}var Vo=Wt(yo);function Uo(d){for(var v=Ot.lastIndex=0;Ot.test(d);)++v;return v}function Wo(d){return d.match(Ot)||[]}function Go(d){return d.match(go)||[]}var Ho=function d(v){v=v==null?te:Fn.defaults(te.Object(),v,Fn.pick(te,vo));var f=v.Array,_=v.Date,B=v.Error,K=v.Function,ee=v.Math,U=v.Object,zt=v.RegExp,$o=v.String,Ae=v.TypeError,Br=f.prototype,Yo=K.prototype,Nn=U.prototype,Sr=v["__core-js_shared__"],Er=Yo.toString,V=Nn.hasOwnProperty,zo=0,Ui=function(){var e=/[^.]+$/.exec(Sr&&Sr.keys&&Sr.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Fr=Nn.toString,Zo=Er.call(U),Xo=te._,Jo=zt("^"+Er.call(V).replace(St,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Nr=Ri?v.Buffer:u,on=v.Symbol,Ir=v.Uint8Array,Wi=Nr?Nr.allocUnsafe:u,Lr=Di(U.getPrototypeOf,U),Gi=U.create,Hi=Nn.propertyIsEnumerable,Or=Br.splice,$i=on?on.isConcatSpreadable:u,nr=on?on.iterator:u,kn=on?on.toStringTag:u,Mr=function(){try{var e=_n(U,"defineProperty");return e({},"",{}),e}catch{}}(),Qo=v.clearTimeout!==te.clearTimeout&&v.clearTimeout,ed=_&&_.now!==te.Date.now&&_.now,nd=v.setTimeout!==te.setTimeout&&v.setTimeout,Kr=ee.ceil,Cr=ee.floor,Zt=U.getOwnPropertySymbols,rd=Nr?Nr.isBuffer:u,Yi=v.isFinite,td=Br.join,ad=Di(U.keys,U),ne=ee.max,ie=ee.min,id=_.now,sd=v.parseInt,zi=ee.random,ud=Br.reverse,Xt=_n(v,"DataView"),rr=_n(v,"Map"),Jt=_n(v,"Promise"),In=_n(v,"Set"),tr=_n(v,"WeakMap"),ar=_n(U,"create"),Dr=tr&&new tr,Ln={},ld=qn(Xt),od=qn(rr),dd=qn(Jt),gd=qn(In),fd=qn(tr),Vr=on?on.prototype:u,ir=Vr?Vr.valueOf:u,Zi=Vr?Vr.toString:u;function i(e){if(z(e)&&!S(e)&&!(e instanceof L)){if(e instanceof we)return e;if(V.call(e,"__wrapped__"))return Xs(e)}return new we(e)}var On=function(){function e(){}return function(n){if(!Y(n))return{};if(Gi)return Gi(n);e.prototype=n;var r=new e;return e.prototype=u,r}}();function Ur(){}function we(e,n){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!n,this.__index__=0,this.__values__=u}i.templateSettings={escape:Tl,evaluate:Rl,interpolate:ii,variable:"",imports:{_:i}},i.prototype=Ur.prototype,i.prototype.constructor=i,we.prototype=On(Ur.prototype),we.prototype.constructor=we;function L(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Ve,this.__views__=[]}function md(){var e=new L(this.__wrapped__);return e.__actions__=de(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=de(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=de(this.__views__),e}function vd(){if(this.__filtered__){var e=new L(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function pd(){var e=this.__wrapped__.value(),n=this.__dir__,r=S(e),t=n<0,a=r?e.length:0,s=xg(0,a,this.__views__),l=s.start,o=s.end,g=o-l,p=t?o:l-1,k=this.__iteratees__,c=k.length,h=0,q=ie(g,this.__takeCount__);if(!r||!t&&a==g&&q==g)return bs(e,this.__actions__);var T=[];e:for(;g--&&h<q;){p+=n;for(var F=-1,R=e[p];++F<c;){var I=k[F],O=I.iteratee,he=I.type,oe=O(R);if(he==ll)R=oe;else if(!oe){if(he==ei)continue e;break e}}T[h++]=R}return T}L.prototype=On(Ur.prototype),L.prototype.constructor=L;function cn(e){var n=-1,r=e==null?0:e.length;for(this.clear();++n<r;){var t=e[n];this.set(t[0],t[1])}}function kd(){this.__data__=ar?ar(null):{},this.size=0}function cd(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n}function yd(e){var n=this.__data__;if(ar){var r=n[e];return r===D?u:r}return V.call(n,e)?n[e]:u}function hd(e){var n=this.__data__;return ar?n[e]!==u:V.call(n,e)}function bd(e,n){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=ar&&n===u?D:n,this}cn.prototype.clear=kd,cn.prototype.delete=cd,cn.prototype.get=yd,cn.prototype.has=hd,cn.prototype.set=bd;function Ze(e){var n=-1,r=e==null?0:e.length;for(this.clear();++n<r;){var t=e[n];this.set(t[0],t[1])}}function _d(){this.__data__=[],this.size=0}function qd(e){var n=this.__data__,r=Wr(n,e);if(r<0)return!1;var t=n.length-1;return r==t?n.pop():Or.call(n,r,1),--this.size,!0}function Ad(e){var n=this.__data__,r=Wr(n,e);return r<0?u:n[r][1]}function wd(e){return Wr(this.__data__,e)>-1}function Td(e,n){var r=this.__data__,t=Wr(r,e);return t<0?(++this.size,r.push([e,n])):r[t][1]=n,this}Ze.prototype.clear=_d,Ze.prototype.delete=qd,Ze.prototype.get=Ad,Ze.prototype.has=wd,Ze.prototype.set=Td;function Xe(e){var n=-1,r=e==null?0:e.length;for(this.clear();++n<r;){var t=e[n];this.set(t[0],t[1])}}function Rd(){this.size=0,this.__data__={hash:new cn,map:new(rr||Ze),string:new cn}}function xd(e){var n=rt(this,e).delete(e);return this.size-=n?1:0,n}function jd(e){return rt(this,e).get(e)}function Pd(e){return rt(this,e).has(e)}function Bd(e,n){var r=rt(this,e),t=r.size;return r.set(e,n),this.size+=r.size==t?0:1,this}Xe.prototype.clear=Rd,Xe.prototype.delete=xd,Xe.prototype.get=jd,Xe.prototype.has=Pd,Xe.prototype.set=Bd;function yn(e){var n=-1,r=e==null?0:e.length;for(this.__data__=new Xe;++n<r;)this.add(e[n])}function Sd(e){return this.__data__.set(e,D),this}function Ed(e){return this.__data__.has(e)}yn.prototype.add=yn.prototype.push=Sd,yn.prototype.has=Ed;function Ne(e){var n=this.__data__=new Ze(e);this.size=n.size}function Fd(){this.__data__=new Ze,this.size=0}function Nd(e){var n=this.__data__,r=n.delete(e);return this.size=n.size,r}function Id(e){return this.__data__.get(e)}function Ld(e){return this.__data__.has(e)}function Od(e,n){var r=this.__data__;if(r instanceof Ze){var t=r.__data__;if(!rr||t.length<A-1)return t.push([e,n]),this.size=++r.size,this;r=this.__data__=new Xe(t)}return r.set(e,n),this.size=r.size,this}Ne.prototype.clear=Fd,Ne.prototype.delete=Nd,Ne.prototype.get=Id,Ne.prototype.has=Ld,Ne.prototype.set=Od;function Xi(e,n){var r=S(e),t=!r&&An(e),a=!r&&!t&&vn(e),s=!r&&!t&&!a&&Dn(e),l=r||t||a||s,o=l?Ht(e.length,$o):[],g=o.length;for(var p in e)(n||V.call(e,p))&&!(l&&(p=="length"||a&&(p=="offset"||p=="parent")||s&&(p=="buffer"||p=="byteLength"||p=="byteOffset")||nn(p,g)))&&o.push(p);return o}function Ji(e){var n=e.length;return n?e[oa(0,n-1)]:u}function Md(e,n){return tt(de(e),hn(n,0,e.length))}function Kd(e){return tt(de(e))}function Qt(e,n,r){(r!==u&&!Ie(e[n],r)||r===u&&!(n in e))&&Je(e,n,r)}function sr(e,n,r){var t=e[n];(!(V.call(e,n)&&Ie(t,r))||r===u&&!(n in e))&&Je(e,n,r)}function Wr(e,n){for(var r=e.length;r--;)if(Ie(e[r][0],n))return r;return-1}function Cd(e,n,r,t){return dn(e,function(a,s,l){n(t,a,r(a),l)}),t}function Qi(e,n){return e&&We(n,re(n),e)}function Dd(e,n){return e&&We(n,fe(n),e)}function Je(e,n,r){n=="__proto__"&&Mr?Mr(e,n,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[n]=r}function ea(e,n){for(var r=-1,t=n.length,a=f(t),s=e==null;++r<t;)a[r]=s?u:Na(e,n[r]);return a}function hn(e,n,r){return e===e&&(r!==u&&(e=e<=r?e:r),n!==u&&(e=e>=n?e:n)),e}function Te(e,n,r,t,a,s){var l,o=n&Z,g=n&Be,p=n&Ke;if(r&&(l=a?r(e,t,a,s):r(e)),l!==u)return l;if(!Y(e))return e;var k=S(e);if(k){if(l=Pg(e),!o)return de(e,l)}else{var c=se(e),h=c==qr||c==ni;if(vn(e))return As(e,o);if(c==ze||c==xn||h&&!a){if(l=g||h?{}:Vs(e),!o)return g?yg(e,Dd(l,e)):cg(e,Qi(l,e))}else{if(!W[c])return a?e:{};l=Bg(e,c,o)}}s||(s=new Ne);var q=s.get(e);if(q)return q;s.set(e,l),cu(e)?e.forEach(function(R){l.add(Te(R,n,r,R,e,s))}):pu(e)&&e.forEach(function(R,I){l.set(I,Te(R,n,r,I,e,s))});var T=p?g?ba:ha:g?fe:re,F=k?u:T(e);return qe(F||e,function(R,I){F&&(I=R,R=e[I]),sr(l,I,Te(R,n,r,I,e,s))}),l}function Vd(e){var n=re(e);return function(r){return es(r,e,n)}}function es(e,n,r){var t=r.length;if(e==null)return!t;for(e=U(e);t--;){var a=r[t],s=n[a],l=e[a];if(l===u&&!(a in e)||!s(l))return!1}return!0}function ns(e,n,r){if(typeof e!="function")throw new Ae(j);return mr(function(){e.apply(u,r)},n)}function ur(e,n,r,t){var a=-1,s=xr,l=!0,o=e.length,g=[],p=n.length;if(!o)return g;r&&(n=H(n,ke(r))),t?(s=Ct,l=!1):n.length>=A&&(s=er,l=!1,n=new yn(n));e:for(;++a<o;){var k=e[a],c=r==null?k:r(k);if(k=t||k!==0?k:0,l&&c===c){for(var h=p;h--;)if(n[h]===c)continue e;g.push(k)}else s(n,c,t)||g.push(k)}return g}var dn=js(Ue),rs=js(ra,!0);function Ud(e,n){var r=!0;return dn(e,function(t,a,s){return r=!!n(t,a,s),r}),r}function Gr(e,n,r){for(var t=-1,a=e.length;++t<a;){var s=e[t],l=n(s);if(l!=null&&(o===u?l===l&&!ye(l):r(l,o)))var o=l,g=s}return g}function Wd(e,n,r,t){var a=e.length;for(r=E(r),r<0&&(r=-r>a?0:a+r),t=t===u||t>a?a:E(t),t<0&&(t+=a),t=r>t?0:hu(t);r<t;)e[r++]=n;return e}function ts(e,n){var r=[];return dn(e,function(t,a,s){n(t,a,s)&&r.push(t)}),r}function ae(e,n,r,t,a){var s=-1,l=e.length;for(r||(r=Eg),a||(a=[]);++s<l;){var o=e[s];n>0&&r(o)?n>1?ae(o,n-1,r,t,a):un(a,o):t||(a[a.length]=o)}return a}var na=Ps(),as=Ps(!0);function Ue(e,n){return e&&na(e,n,re)}function ra(e,n){return e&&as(e,n,re)}function Hr(e,n){return sn(n,function(r){return rn(e[r])})}function bn(e,n){n=fn(n,e);for(var r=0,t=n.length;e!=null&&r<t;)e=e[Ge(n[r++])];return r&&r==t?e:u}function is(e,n,r){var t=n(e);return S(e)?t:un(t,r(e))}function ue(e){return e==null?e===u?yl:kl:kn&&kn in U(e)?Rg(e):Kg(e)}function ta(e,n){return e>n}function Gd(e,n){return e!=null&&V.call(e,n)}function Hd(e,n){return e!=null&&n in U(e)}function $d(e,n,r){return e>=ie(n,r)&&e<ne(n,r)}function aa(e,n,r){for(var t=r?Ct:xr,a=e[0].length,s=e.length,l=s,o=f(s),g=1/0,p=[];l--;){var k=e[l];l&&n&&(k=H(k,ke(n))),g=ie(k.length,g),o[l]=!r&&(n||a>=120&&k.length>=120)?new yn(l&&k):u}k=e[0];var c=-1,h=o[0];e:for(;++c<a&&p.length<g;){var q=k[c],T=n?n(q):q;if(q=r||q!==0?q:0,!(h?er(h,T):t(p,T,r))){for(l=s;--l;){var F=o[l];if(!(F?er(F,T):t(e[l],T,r)))continue e}h&&h.push(T),p.push(q)}}return p}function Yd(e,n,r,t){return Ue(e,function(a,s,l){n(t,r(a),s,l)}),t}function lr(e,n,r){n=fn(n,e),e=Hs(e,n);var t=e==null?e:e[Ge(xe(n))];return t==null?u:pe(t,e,r)}function ss(e){return z(e)&&ue(e)==xn}function zd(e){return z(e)&&ue(e)==Qn}function Zd(e){return z(e)&&ue(e)==Yn}function or(e,n,r,t,a){return e===n?!0:e==null||n==null||!z(e)&&!z(n)?e!==e&&n!==n:Xd(e,n,r,t,or,a)}function Xd(e,n,r,t,a,s){var l=S(e),o=S(n),g=l?br:se(e),p=o?br:se(n);g=g==xn?ze:g,p=p==xn?ze:p;var k=g==ze,c=p==ze,h=g==p;if(h&&vn(e)){if(!vn(n))return!1;l=!0,k=!1}if(h&&!k)return s||(s=new Ne),l||Dn(e)?Ks(e,n,r,t,a,s):wg(e,n,g,r,t,a,s);if(!(r&Ce)){var q=k&&V.call(e,"__wrapped__"),T=c&&V.call(n,"__wrapped__");if(q||T){var F=q?e.value():e,R=T?n.value():n;return s||(s=new Ne),a(F,R,r,t,s)}}return h?(s||(s=new Ne),Tg(e,n,r,t,a,s)):!1}function Jd(e){return z(e)&&se(e)==Se}function ia(e,n,r,t){var a=r.length,s=a,l=!t;if(e==null)return!s;for(e=U(e);a--;){var o=r[a];if(l&&o[2]?o[1]!==e[o[0]]:!(o[0]in e))return!1}for(;++a<s;){o=r[a];var g=o[0],p=e[g],k=o[1];if(l&&o[2]){if(p===u&&!(g in e))return!1}else{var c=new Ne;if(t)var h=t(p,k,g,e,n,c);if(!(h===u?or(k,p,Ce|De,t,c):h))return!1}}return!0}function us(e){if(!Y(e)||Ng(e))return!1;var n=rn(e)?Jo:Dl;return n.test(qn(e))}function Qd(e){return z(e)&&ue(e)==Zn}function eg(e){return z(e)&&se(e)==Ee}function ng(e){return z(e)&&ot(e.length)&&!!G[ue(e)]}function ls(e){return typeof e=="function"?e:e==null?me:typeof e=="object"?S(e)?gs(e[0],e[1]):ds(e):Bu(e)}function sa(e){if(!fr(e))return ad(e);var n=[];for(var r in U(e))V.call(e,r)&&r!="constructor"&&n.push(r);return n}function rg(e){if(!Y(e))return Mg(e);var n=fr(e),r=[];for(var t in e)t=="constructor"&&(n||!V.call(e,t))||r.push(t);return r}function ua(e,n){return e<n}function os(e,n){var r=-1,t=ge(e)?f(e.length):[];return dn(e,function(a,s,l){t[++r]=n(a,s,l)}),t}function ds(e){var n=qa(e);return n.length==1&&n[0][2]?Ws(n[0][0],n[0][1]):function(r){return r===e||ia(r,e,n)}}function gs(e,n){return wa(e)&&Us(n)?Ws(Ge(e),n):function(r){var t=Na(r,e);return t===u&&t===n?Ia(r,e):or(n,t,Ce|De)}}function $r(e,n,r,t,a){e!==n&&na(n,function(s,l){if(a||(a=new Ne),Y(s))tg(e,n,l,r,$r,t,a);else{var o=t?t(Ra(e,l),s,l+"",e,n,a):u;o===u&&(o=s),Qt(e,l,o)}},fe)}function tg(e,n,r,t,a,s,l){var o=Ra(e,r),g=Ra(n,r),p=l.get(g);if(p){Qt(e,r,p);return}var k=s?s(o,g,r+"",e,n,l):u,c=k===u;if(c){var h=S(g),q=!h&&vn(g),T=!h&&!q&&Dn(g);k=g,h||q||T?S(o)?k=o:X(o)?k=de(o):q?(c=!1,k=As(g,!0)):T?(c=!1,k=ws(g,!0)):k=[]:vr(g)||An(g)?(k=o,An(o)?k=bu(o):(!Y(o)||rn(o))&&(k=Vs(g))):c=!1}c&&(l.set(g,k),a(k,g,t,s,l),l.delete(g)),Qt(e,r,k)}function fs(e,n){var r=e.length;if(r)return n+=n<0?r:0,nn(n,r)?e[n]:u}function ms(e,n,r){n.length?n=H(n,function(s){return S(s)?function(l){return bn(l,s.length===1?s[0]:s)}:s}):n=[me];var t=-1;n=H(n,ke(w()));var a=os(e,function(s,l,o){var g=H(n,function(p){return p(s)});return{criteria:g,index:++t,value:s}});return Bo(a,function(s,l){return kg(s,l,r)})}function ag(e,n){return vs(e,n,function(r,t){return Ia(e,t)})}function vs(e,n,r){for(var t=-1,a=n.length,s={};++t<a;){var l=n[t],o=bn(e,l);r(o,l)&&dr(s,fn(l,e),o)}return s}function ig(e){return function(n){return bn(n,e)}}function la(e,n,r,t){var a=t?Po:Bn,s=-1,l=n.length,o=e;for(e===n&&(n=de(n)),r&&(o=H(e,ke(r)));++s<l;)for(var g=0,p=n[s],k=r?r(p):p;(g=a(o,k,g,t))>-1;)o!==e&&Or.call(o,g,1),Or.call(e,g,1);return e}function ps(e,n){for(var r=e?n.length:0,t=r-1;r--;){var a=n[r];if(r==t||a!==s){var s=a;nn(a)?Or.call(e,a,1):fa(e,a)}}return e}function oa(e,n){return e+Cr(zi()*(n-e+1))}function sg(e,n,r,t){for(var a=-1,s=ne(Kr((n-e)/(r||1)),0),l=f(s);s--;)l[t?s:++a]=e,e+=r;return l}function da(e,n){var r="";if(!e||n<1||n>Rn)return r;do n%2&&(r+=e),n=Cr(n/2),n&&(e+=e);while(n);return r}function N(e,n){return xa(Gs(e,n,me),e+"")}function ug(e){return Ji(Vn(e))}function lg(e,n){var r=Vn(e);return tt(r,hn(n,0,r.length))}function dr(e,n,r,t){if(!Y(e))return e;n=fn(n,e);for(var a=-1,s=n.length,l=s-1,o=e;o!=null&&++a<s;){var g=Ge(n[a]),p=r;if(g==="__proto__"||g==="constructor"||g==="prototype")return e;if(a!=l){var k=o[g];p=t?t(k,g,o):u,p===u&&(p=Y(k)?k:nn(n[a+1])?[]:{})}sr(o,g,p),o=o[g]}return e}var ks=Dr?function(e,n){return Dr.set(e,n),e}:me,og=Mr?function(e,n){return Mr(e,"toString",{configurable:!0,enumerable:!1,value:Oa(n),writable:!0})}:me;function dg(e){return tt(Vn(e))}function Re(e,n,r){var t=-1,a=e.length;n<0&&(n=-n>a?0:a+n),r=r>a?a:r,r<0&&(r+=a),a=n>r?0:r-n>>>0,n>>>=0;for(var s=f(a);++t<a;)s[t]=e[t+n];return s}function gg(e,n){var r;return dn(e,function(t,a,s){return r=n(t,a,s),!r}),!!r}function Yr(e,n,r){var t=0,a=e==null?t:e.length;if(typeof n=="number"&&n===n&&a<=fl){for(;t<a;){var s=t+a>>>1,l=e[s];l!==null&&!ye(l)&&(r?l<=n:l<n)?t=s+1:a=s}return a}return ga(e,n,me,r)}function ga(e,n,r,t){var a=0,s=e==null?0:e.length;if(s===0)return 0;n=r(n);for(var l=n!==n,o=n===null,g=ye(n),p=n===u;a<s;){var k=Cr((a+s)/2),c=r(e[k]),h=c!==u,q=c===null,T=c===c,F=ye(c);if(l)var R=t||T;else p?R=T&&(t||h):o?R=T&&h&&(t||!q):g?R=T&&h&&!q&&(t||!F):q||F?R=!1:R=t?c<=n:c<n;R?a=k+1:s=k}return ie(s,gl)}function cs(e,n){for(var r=-1,t=e.length,a=0,s=[];++r<t;){var l=e[r],o=n?n(l):l;if(!r||!Ie(o,g)){var g=o;s[a++]=l===0?0:l}}return s}function ys(e){return typeof e=="number"?e:ye(e)?hr:+e}function ce(e){if(typeof e=="string")return e;if(S(e))return H(e,ce)+"";if(ye(e))return Zi?Zi.call(e):"";var n=e+"";return n=="0"&&1/e==-1/0?"-0":n}function gn(e,n,r){var t=-1,a=xr,s=e.length,l=!0,o=[],g=o;if(r)l=!1,a=Ct;else if(s>=A){var p=n?null:qg(e);if(p)return Pr(p);l=!1,a=er,g=new yn}else g=n?[]:o;e:for(;++t<s;){var k=e[t],c=n?n(k):k;if(k=r||k!==0?k:0,l&&c===c){for(var h=g.length;h--;)if(g[h]===c)continue e;n&&g.push(c),o.push(k)}else a(g,c,r)||(g!==o&&g.push(c),o.push(k))}return o}function fa(e,n){return n=fn(n,e),e=Hs(e,n),e==null||delete e[Ge(xe(n))]}function hs(e,n,r,t){return dr(e,n,r(bn(e,n)),t)}function zr(e,n,r,t){for(var a=e.length,s=t?a:-1;(t?s--:++s<a)&&n(e[s],s,e););return r?Re(e,t?0:s,t?s+1:a):Re(e,t?s+1:0,t?a:s)}function bs(e,n){var r=e;return r instanceof L&&(r=r.value()),Dt(n,function(t,a){return a.func.apply(a.thisArg,un([t],a.args))},r)}function ma(e,n,r){var t=e.length;if(t<2)return t?gn(e[0]):[];for(var a=-1,s=f(t);++a<t;)for(var l=e[a],o=-1;++o<t;)o!=a&&(s[a]=ur(s[a]||l,e[o],n,r));return gn(ae(s,1),n,r)}function _s(e,n,r){for(var t=-1,a=e.length,s=n.length,l={};++t<a;){var o=t<s?n[t]:u;r(l,e[t],o)}return l}function va(e){return X(e)?e:[]}function pa(e){return typeof e=="function"?e:me}function fn(e,n){return S(e)?e:wa(e,n)?[e]:Zs(C(e))}var fg=N;function mn(e,n,r){var t=e.length;return r=r===u?t:r,!n&&r>=t?e:Re(e,n,r)}var qs=Qo||function(e){return te.clearTimeout(e)};function As(e,n){if(n)return e.slice();var r=e.length,t=Wi?Wi(r):new e.constructor(r);return e.copy(t),t}function ka(e){var n=new e.constructor(e.byteLength);return new Ir(n).set(new Ir(e)),n}function mg(e,n){var r=n?ka(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}function vg(e){var n=new e.constructor(e.source,si.exec(e));return n.lastIndex=e.lastIndex,n}function pg(e){return ir?U(ir.call(e)):{}}function ws(e,n){var r=n?ka(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function Ts(e,n){if(e!==n){var r=e!==u,t=e===null,a=e===e,s=ye(e),l=n!==u,o=n===null,g=n===n,p=ye(n);if(!o&&!p&&!s&&e>n||s&&l&&g&&!o&&!p||t&&l&&g||!r&&g||!a)return 1;if(!t&&!s&&!p&&e<n||p&&r&&a&&!t&&!s||o&&r&&a||!l&&a||!g)return-1}return 0}function kg(e,n,r){for(var t=-1,a=e.criteria,s=n.criteria,l=a.length,o=r.length;++t<l;){var g=Ts(a[t],s[t]);if(g){if(t>=o)return g;var p=r[t];return g*(p=="desc"?-1:1)}}return e.index-n.index}function Rs(e,n,r,t){for(var a=-1,s=e.length,l=r.length,o=-1,g=n.length,p=ne(s-l,0),k=f(g+p),c=!t;++o<g;)k[o]=n[o];for(;++a<l;)(c||a<s)&&(k[r[a]]=e[a]);for(;p--;)k[o++]=e[a++];return k}function xs(e,n,r,t){for(var a=-1,s=e.length,l=-1,o=r.length,g=-1,p=n.length,k=ne(s-o,0),c=f(k+p),h=!t;++a<k;)c[a]=e[a];for(var q=a;++g<p;)c[q+g]=n[g];for(;++l<o;)(h||a<s)&&(c[q+r[l]]=e[a++]);return c}function de(e,n){var r=-1,t=e.length;for(n||(n=f(t));++r<t;)n[r]=e[r];return n}function We(e,n,r,t){var a=!r;r||(r={});for(var s=-1,l=n.length;++s<l;){var o=n[s],g=t?t(r[o],e[o],o,r,e):u;g===u&&(g=e[o]),a?Je(r,o,g):sr(r,o,g)}return r}function cg(e,n){return We(e,Aa(e),n)}function yg(e,n){return We(e,Cs(e),n)}function Zr(e,n){return function(r,t){var a=S(r)?Ao:Cd,s=n?n():{};return a(r,e,w(t,2),s)}}function Mn(e){return N(function(n,r){var t=-1,a=r.length,s=a>1?r[a-1]:u,l=a>2?r[2]:u;for(s=e.length>3&&typeof s=="function"?(a--,s):u,l&&le(r[0],r[1],l)&&(s=a<3?u:s,a=1),n=U(n);++t<a;){var o=r[t];o&&e(n,o,t,s)}return n})}function js(e,n){return function(r,t){if(r==null)return r;if(!ge(r))return e(r,t);for(var a=r.length,s=n?a:-1,l=U(r);(n?s--:++s<a)&&t(l[s],s,l)!==!1;);return r}}function Ps(e){return function(n,r,t){for(var a=-1,s=U(n),l=t(n),o=l.length;o--;){var g=l[e?o:++a];if(r(s[g],g,s)===!1)break}return n}}function hg(e,n,r){var t=n&ve,a=gr(e);function s(){var l=this&&this!==te&&this instanceof s?a:e;return l.apply(t?r:this,arguments)}return s}function Bs(e){return function(n){n=C(n);var r=Sn(n)?Fe(n):u,t=r?r[0]:n.charAt(0),a=r?mn(r,1).join(""):n.slice(1);return t[e]()+a}}function Kn(e){return function(n){return Dt(ju(xu(n).replace(lo,"")),e,"")}}function gr(e){return function(){var n=arguments;switch(n.length){case 0:return new e;case 1:return new e(n[0]);case 2:return new e(n[0],n[1]);case 3:return new e(n[0],n[1],n[2]);case 4:return new e(n[0],n[1],n[2],n[3]);case 5:return new e(n[0],n[1],n[2],n[3],n[4]);case 6:return new e(n[0],n[1],n[2],n[3],n[4],n[5]);case 7:return new e(n[0],n[1],n[2],n[3],n[4],n[5],n[6])}var r=On(e.prototype),t=e.apply(r,n);return Y(t)?t:r}}function bg(e,n,r){var t=gr(e);function a(){for(var s=arguments.length,l=f(s),o=s,g=Cn(a);o--;)l[o]=arguments[o];var p=s<3&&l[0]!==g&&l[s-1]!==g?[]:ln(l,g);if(s-=p.length,s<r)return Is(e,n,Xr,a.placeholder,u,l,p,u,u,r-s);var k=this&&this!==te&&this instanceof a?t:e;return pe(k,this,l)}return a}function Ss(e){return function(n,r,t){var a=U(n);if(!ge(n)){var s=w(r,3);n=re(n),r=function(o){return s(a[o],o,a)}}var l=e(n,r,t);return l>-1?a[s?n[l]:l]:u}}function Es(e){return en(function(n){var r=n.length,t=r,a=we.prototype.thru;for(e&&n.reverse();t--;){var s=n[t];if(typeof s!="function")throw new Ae(j);if(a&&!l&&nt(s)=="wrapper")var l=new we([],!0)}for(t=l?t:r;++t<r;){s=n[t];var o=nt(s),g=o=="wrapper"?_a(s):u;g&&Ta(g[0])&&g[1]==(Ye|He|$e|Hn)&&!g[4].length&&g[9]==1?l=l[nt(g[0])].apply(l,g[3]):l=s.length==1&&Ta(s)?l[o]():l.thru(s)}return function(){var p=arguments,k=p[0];if(l&&p.length==1&&S(k))return l.plant(k).value();for(var c=0,h=r?n[c].apply(this,p):k;++c<r;)h=n[c].call(this,h);return h}})}function Xr(e,n,r,t,a,s,l,o,g,p){var k=n&Ye,c=n&ve,h=n&Tn,q=n&(He|Wn),T=n&_t,F=h?u:gr(e);function R(){for(var I=arguments.length,O=f(I),he=I;he--;)O[he]=arguments[he];if(q)var oe=Cn(R),be=Eo(O,oe);if(t&&(O=Rs(O,t,a,q)),s&&(O=xs(O,s,l,q)),I-=be,q&&I<p){var J=ln(O,oe);return Is(e,n,Xr,R.placeholder,r,O,J,o,g,p-I)}var Le=c?r:this,an=h?Le[e]:e;return I=O.length,o?O=Cg(O,o):T&&I>1&&O.reverse(),k&&g<I&&(O.length=g),this&&this!==te&&this instanceof R&&(an=F||gr(an)),an.apply(Le,O)}return R}function Fs(e,n){return function(r,t){return Yd(r,e,n(t),{})}}function Jr(e,n){return function(r,t){var a;if(r===u&&t===u)return n;if(r!==u&&(a=r),t!==u){if(a===u)return t;typeof r=="string"||typeof t=="string"?(r=ce(r),t=ce(t)):(r=ys(r),t=ys(t)),a=e(r,t)}return a}}function ca(e){return en(function(n){return n=H(n,ke(w())),N(function(r){var t=this;return e(n,function(a){return pe(a,t,r)})})})}function Qr(e,n){n=n===u?" ":ce(n);var r=n.length;if(r<2)return r?da(n,e):n;var t=da(n,Kr(e/En(n)));return Sn(n)?mn(Fe(t),0,e).join(""):t.slice(0,e)}function _g(e,n,r,t){var a=n&ve,s=gr(e);function l(){for(var o=-1,g=arguments.length,p=-1,k=t.length,c=f(k+g),h=this&&this!==te&&this instanceof l?s:e;++p<k;)c[p]=t[p];for(;g--;)c[p++]=arguments[++o];return pe(h,a?r:this,c)}return l}function Ns(e){return function(n,r,t){return t&&typeof t!="number"&&le(n,r,t)&&(r=t=u),n=tn(n),r===u?(r=n,n=0):r=tn(r),t=t===u?n<r?1:-1:tn(t),sg(n,r,t,e)}}function et(e){return function(n,r){return typeof n=="string"&&typeof r=="string"||(n=je(n),r=je(r)),e(n,r)}}function Is(e,n,r,t,a,s,l,o,g,p){var k=n&He,c=k?l:u,h=k?u:l,q=k?s:u,T=k?u:s;n|=k?$e:Gn,n&=~(k?Gn:$e),n&Qa||(n&=-4);var F=[e,n,a,q,c,T,h,o,g,p],R=r.apply(u,F);return Ta(e)&&$s(R,F),R.placeholder=t,Ys(R,e,n)}function ya(e){var n=ee[e];return function(r,t){if(r=je(r),t=t==null?0:ie(E(t),292),t&&Yi(r)){var a=(C(r)+"e").split("e"),s=n(a[0]+"e"+(+a[1]+t));return a=(C(s)+"e").split("e"),+(a[0]+"e"+(+a[1]-t))}return n(r)}}var qg=In&&1/Pr(new In([,-0]))[1]==yr?function(e){return new In(e)}:Ca;function Ls(e){return function(n){var r=se(n);return r==Se?Yt(n):r==Ee?Ko(n):So(n,e(n))}}function Qe(e,n,r,t,a,s,l,o){var g=n&Tn;if(!g&&typeof e!="function")throw new Ae(j);var p=t?t.length:0;if(p||(n&=-97,t=a=u),l=l===u?l:ne(E(l),0),o=o===u?o:E(o),p-=a?a.length:0,n&Gn){var k=t,c=a;t=a=u}var h=g?u:_a(e),q=[e,n,r,t,a,k,c,s,l,o];if(h&&Og(q,h),e=q[0],n=q[1],r=q[2],t=q[3],a=q[4],o=q[9]=q[9]===u?g?0:e.length:ne(q[9]-p,0),!o&&n&(He|Wn)&&(n&=-25),!n||n==ve)var T=hg(e,n,r);else n==He||n==Wn?T=bg(e,n,o):(n==$e||n==(ve|$e))&&!a.length?T=_g(e,n,r,t):T=Xr.apply(u,q);var F=h?ks:$s;return Ys(F(T,q),e,n)}function Os(e,n,r,t){return e===u||Ie(e,Nn[r])&&!V.call(t,r)?n:e}function Ms(e,n,r,t,a,s){return Y(e)&&Y(n)&&(s.set(n,e),$r(e,n,u,Ms,s),s.delete(n)),e}function Ag(e){return vr(e)?u:e}function Ks(e,n,r,t,a,s){var l=r&Ce,o=e.length,g=n.length;if(o!=g&&!(l&&g>o))return!1;var p=s.get(e),k=s.get(n);if(p&&k)return p==n&&k==e;var c=-1,h=!0,q=r&De?new yn:u;for(s.set(e,n),s.set(n,e);++c<o;){var T=e[c],F=n[c];if(t)var R=l?t(F,T,c,n,e,s):t(T,F,c,e,n,s);if(R!==u){if(R)continue;h=!1;break}if(q){if(!Vt(n,function(I,O){if(!er(q,O)&&(T===I||a(T,I,r,t,s)))return q.push(O)})){h=!1;break}}else if(!(T===F||a(T,F,r,t,s))){h=!1;break}}return s.delete(e),s.delete(n),h}function wg(e,n,r,t,a,s,l){switch(r){case jn:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case Qn:return!(e.byteLength!=n.byteLength||!s(new Ir(e),new Ir(n)));case $n:case Yn:case zn:return Ie(+e,+n);case _r:return e.name==n.name&&e.message==n.message;case Zn:case Xn:return e==n+"";case Se:var o=Yt;case Ee:var g=t&Ce;if(o||(o=Pr),e.size!=n.size&&!g)return!1;var p=l.get(e);if(p)return p==n;t|=De,l.set(e,n);var k=Ks(o(e),o(n),t,a,s,l);return l.delete(e),k;case Ar:if(ir)return ir.call(e)==ir.call(n)}return!1}function Tg(e,n,r,t,a,s){var l=r&Ce,o=ha(e),g=o.length,p=ha(n),k=p.length;if(g!=k&&!l)return!1;for(var c=g;c--;){var h=o[c];if(!(l?h in n:V.call(n,h)))return!1}var q=s.get(e),T=s.get(n);if(q&&T)return q==n&&T==e;var F=!0;s.set(e,n),s.set(n,e);for(var R=l;++c<g;){h=o[c];var I=e[h],O=n[h];if(t)var he=l?t(O,I,h,n,e,s):t(I,O,h,e,n,s);if(!(he===u?I===O||a(I,O,r,t,s):he)){F=!1;break}R||(R=h=="constructor")}if(F&&!R){var oe=e.constructor,be=n.constructor;oe!=be&&"constructor"in e&&"constructor"in n&&!(typeof oe=="function"&&oe instanceof oe&&typeof be=="function"&&be instanceof be)&&(F=!1)}return s.delete(e),s.delete(n),F}function en(e){return xa(Gs(e,u,eu),e+"")}function ha(e){return is(e,re,Aa)}function ba(e){return is(e,fe,Cs)}var _a=Dr?function(e){return Dr.get(e)}:Ca;function nt(e){for(var n=e.name+"",r=Ln[n],t=V.call(Ln,n)?r.length:0;t--;){var a=r[t],s=a.func;if(s==null||s==e)return a.name}return n}function Cn(e){var n=V.call(i,"placeholder")?i:e;return n.placeholder}function w(){var e=i.iteratee||Ma;return e=e===Ma?ls:e,arguments.length?e(arguments[0],arguments[1]):e}function rt(e,n){var r=e.__data__;return Fg(n)?r[typeof n=="string"?"string":"hash"]:r.map}function qa(e){for(var n=re(e),r=n.length;r--;){var t=n[r],a=e[t];n[r]=[t,a,Us(a)]}return n}function _n(e,n){var r=Lo(e,n);return us(r)?r:u}function Rg(e){var n=V.call(e,kn),r=e[kn];try{e[kn]=u;var t=!0}catch{}var a=Fr.call(e);return t&&(n?e[kn]=r:delete e[kn]),a}var Aa=Zt?function(e){return e==null?[]:(e=U(e),sn(Zt(e),function(n){return Hi.call(e,n)}))}:Da,Cs=Zt?function(e){for(var n=[];e;)un(n,Aa(e)),e=Lr(e);return n}:Da,se=ue;(Xt&&se(new Xt(new ArrayBuffer(1)))!=jn||rr&&se(new rr)!=Se||Jt&&se(Jt.resolve())!=ri||In&&se(new In)!=Ee||tr&&se(new tr)!=Jn)&&(se=function(e){var n=ue(e),r=n==ze?e.constructor:u,t=r?qn(r):"";if(t)switch(t){case ld:return jn;case od:return Se;case dd:return ri;case gd:return Ee;case fd:return Jn}return n});function xg(e,n,r){for(var t=-1,a=r.length;++t<a;){var s=r[t],l=s.size;switch(s.type){case"drop":e+=l;break;case"dropRight":n-=l;break;case"take":n=ie(n,e+l);break;case"takeRight":e=ne(e,n-l);break}}return{start:e,end:n}}function jg(e){var n=e.match(Fl);return n?n[1].split(Nl):[]}function Ds(e,n,r){n=fn(n,e);for(var t=-1,a=n.length,s=!1;++t<a;){var l=Ge(n[t]);if(!(s=e!=null&&r(e,l)))break;e=e[l]}return s||++t!=a?s:(a=e==null?0:e.length,!!a&&ot(a)&&nn(l,a)&&(S(e)||An(e)))}function Pg(e){var n=e.length,r=new e.constructor(n);return n&&typeof e[0]=="string"&&V.call(e,"index")&&(r.index=e.index,r.input=e.input),r}function Vs(e){return typeof e.constructor=="function"&&!fr(e)?On(Lr(e)):{}}function Bg(e,n,r){var t=e.constructor;switch(n){case Qn:return ka(e);case $n:case Yn:return new t(+e);case jn:return mg(e,r);case qt:case At:case wt:case Tt:case Rt:case xt:case jt:case Pt:case Bt:return ws(e,r);case Se:return new t;case zn:case Xn:return new t(e);case Zn:return vg(e);case Ee:return new t;case Ar:return pg(e)}}function Sg(e,n){var r=n.length;if(!r)return e;var t=r-1;return n[t]=(r>1?"& ":"")+n[t],n=n.join(r>2?", ":" "),e.replace(El,`{
/* [wrapped with `+n+`] */
`)}function Eg(e){return S(e)||An(e)||!!($i&&e&&e[$i])}function nn(e,n){var r=typeof e;return n=n??Rn,!!n&&(r=="number"||r!="symbol"&&Ul.test(e))&&e>-1&&e%1==0&&e<n}function le(e,n,r){if(!Y(r))return!1;var t=typeof n;return(t=="number"?ge(r)&&nn(n,r.length):t=="string"&&n in r)?Ie(r[n],e):!1}function wa(e,n){if(S(e))return!1;var r=typeof e;return r=="number"||r=="symbol"||r=="boolean"||e==null||ye(e)?!0:jl.test(e)||!xl.test(e)||n!=null&&e in U(n)}function Fg(e){var n=typeof e;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?e!=="__proto__":e===null}function Ta(e){var n=nt(e),r=i[n];if(typeof r!="function"||!(n in L.prototype))return!1;if(e===r)return!0;var t=_a(r);return!!t&&e===t[0]}function Ng(e){return!!Ui&&Ui in e}var Ig=Sr?rn:Va;function fr(e){var n=e&&e.constructor,r=typeof n=="function"&&n.prototype||Nn;return e===r}function Us(e){return e===e&&!Y(e)}function Ws(e,n){return function(r){return r==null?!1:r[e]===n&&(n!==u||e in U(r))}}function Lg(e){var n=ut(e,function(t){return r.size===Q&&r.clear(),t}),r=n.cache;return n}function Og(e,n){var r=e[1],t=n[1],a=r|t,s=a<(ve|Tn|Ye),l=t==Ye&&r==He||t==Ye&&r==Hn&&e[7].length<=n[8]||t==(Ye|Hn)&&n[7].length<=n[8]&&r==He;if(!(s||l))return e;t&ve&&(e[2]=n[2],a|=r&ve?0:Qa);var o=n[3];if(o){var g=e[3];e[3]=g?Rs(g,o,n[4]):o,e[4]=g?ln(e[3],M):n[4]}return o=n[5],o&&(g=e[5],e[5]=g?xs(g,o,n[6]):o,e[6]=g?ln(e[5],M):n[6]),o=n[7],o&&(e[7]=o),t&Ye&&(e[8]=e[8]==null?n[8]:ie(e[8],n[8])),e[9]==null&&(e[9]=n[9]),e[0]=n[0],e[1]=a,e}function Mg(e){var n=[];if(e!=null)for(var r in U(e))n.push(r);return n}function Kg(e){return Fr.call(e)}function Gs(e,n,r){return n=ne(n===u?e.length-1:n,0),function(){for(var t=arguments,a=-1,s=ne(t.length-n,0),l=f(s);++a<s;)l[a]=t[n+a];a=-1;for(var o=f(n+1);++a<n;)o[a]=t[a];return o[n]=r(l),pe(e,this,o)}}function Hs(e,n){return n.length<2?e:bn(e,Re(n,0,-1))}function Cg(e,n){for(var r=e.length,t=ie(n.length,r),a=de(e);t--;){var s=n[t];e[t]=nn(s,r)?a[s]:u}return e}function Ra(e,n){if(!(n==="constructor"&&typeof e[n]=="function")&&n!="__proto__")return e[n]}var $s=zs(ks),mr=nd||function(e,n){return te.setTimeout(e,n)},xa=zs(og);function Ys(e,n,r){var t=n+"";return xa(e,Sg(t,Dg(jg(t),r)))}function zs(e){var n=0,r=0;return function(){var t=id(),a=ul-(t-r);if(r=t,a>0){if(++n>=sl)return arguments[0]}else n=0;return e.apply(u,arguments)}}function tt(e,n){var r=-1,t=e.length,a=t-1;for(n=n===u?t:n;++r<n;){var s=oa(r,a),l=e[s];e[s]=e[r],e[r]=l}return e.length=n,e}var Zs=Lg(function(e){var n=[];return e.charCodeAt(0)===46&&n.push(""),e.replace(Pl,function(r,t,a,s){n.push(a?s.replace(Ol,"$1"):t||r)}),n});function Ge(e){if(typeof e=="string"||ye(e))return e;var n=e+"";return n=="0"&&1/e==-1/0?"-0":n}function qn(e){if(e!=null){try{return Er.call(e)}catch{}try{return e+""}catch{}}return""}function Dg(e,n){return qe(ml,function(r){var t="_."+r[0];n&r[1]&&!xr(e,t)&&e.push(t)}),e.sort()}function Xs(e){if(e instanceof L)return e.clone();var n=new we(e.__wrapped__,e.__chain__);return n.__actions__=de(e.__actions__),n.__index__=e.__index__,n.__values__=e.__values__,n}function Vg(e,n,r){(r?le(e,n,r):n===u)?n=1:n=ne(E(n),0);var t=e==null?0:e.length;if(!t||n<1)return[];for(var a=0,s=0,l=f(Kr(t/n));a<t;)l[s++]=Re(e,a,a+=n);return l}function Ug(e){for(var n=-1,r=e==null?0:e.length,t=0,a=[];++n<r;){var s=e[n];s&&(a[t++]=s)}return a}function Wg(){var e=arguments.length;if(!e)return[];for(var n=f(e-1),r=arguments[0],t=e;t--;)n[t-1]=arguments[t];return un(S(r)?de(r):[r],ae(n,1))}var Gg=N(function(e,n){return X(e)?ur(e,ae(n,1,X,!0)):[]}),Hg=N(function(e,n){var r=xe(n);return X(r)&&(r=u),X(e)?ur(e,ae(n,1,X,!0),w(r,2)):[]}),$g=N(function(e,n){var r=xe(n);return X(r)&&(r=u),X(e)?ur(e,ae(n,1,X,!0),u,r):[]});function Yg(e,n,r){var t=e==null?0:e.length;return t?(n=r||n===u?1:E(n),Re(e,n<0?0:n,t)):[]}function zg(e,n,r){var t=e==null?0:e.length;return t?(n=r||n===u?1:E(n),n=t-n,Re(e,0,n<0?0:n)):[]}function Zg(e,n){return e&&e.length?zr(e,w(n,3),!0,!0):[]}function Xg(e,n){return e&&e.length?zr(e,w(n,3),!0):[]}function Jg(e,n,r,t){var a=e==null?0:e.length;return a?(r&&typeof r!="number"&&le(e,n,r)&&(r=0,t=a),Wd(e,n,r,t)):[]}function Js(e,n,r){var t=e==null?0:e.length;if(!t)return-1;var a=r==null?0:E(r);return a<0&&(a=ne(t+a,0)),jr(e,w(n,3),a)}function Qs(e,n,r){var t=e==null?0:e.length;if(!t)return-1;var a=t-1;return r!==u&&(a=E(r),a=r<0?ne(t+a,0):ie(a,t-1)),jr(e,w(n,3),a,!0)}function eu(e){var n=e==null?0:e.length;return n?ae(e,1):[]}function Qg(e){var n=e==null?0:e.length;return n?ae(e,yr):[]}function ef(e,n){var r=e==null?0:e.length;return r?(n=n===u?1:E(n),ae(e,n)):[]}function nf(e){for(var n=-1,r=e==null?0:e.length,t={};++n<r;){var a=e[n];t[a[0]]=a[1]}return t}function nu(e){return e&&e.length?e[0]:u}function rf(e,n,r){var t=e==null?0:e.length;if(!t)return-1;var a=r==null?0:E(r);return a<0&&(a=ne(t+a,0)),Bn(e,n,a)}function tf(e){var n=e==null?0:e.length;return n?Re(e,0,-1):[]}var af=N(function(e){var n=H(e,va);return n.length&&n[0]===e[0]?aa(n):[]}),sf=N(function(e){var n=xe(e),r=H(e,va);return n===xe(r)?n=u:r.pop(),r.length&&r[0]===e[0]?aa(r,w(n,2)):[]}),uf=N(function(e){var n=xe(e),r=H(e,va);return n=typeof n=="function"?n:u,n&&r.pop(),r.length&&r[0]===e[0]?aa(r,u,n):[]});function lf(e,n){return e==null?"":td.call(e,n)}function xe(e){var n=e==null?0:e.length;return n?e[n-1]:u}function of(e,n,r){var t=e==null?0:e.length;if(!t)return-1;var a=t;return r!==u&&(a=E(r),a=a<0?ne(t+a,0):ie(a,t-1)),n===n?Do(e,n,a):jr(e,Ii,a,!0)}function df(e,n){return e&&e.length?fs(e,E(n)):u}var gf=N(ru);function ru(e,n){return e&&e.length&&n&&n.length?la(e,n):e}function ff(e,n,r){return e&&e.length&&n&&n.length?la(e,n,w(r,2)):e}function mf(e,n,r){return e&&e.length&&n&&n.length?la(e,n,u,r):e}var vf=en(function(e,n){var r=e==null?0:e.length,t=ea(e,n);return ps(e,H(n,function(a){return nn(a,r)?+a:a}).sort(Ts)),t});function pf(e,n){var r=[];if(!(e&&e.length))return r;var t=-1,a=[],s=e.length;for(n=w(n,3);++t<s;){var l=e[t];n(l,t,e)&&(r.push(l),a.push(t))}return ps(e,a),r}function ja(e){return e==null?e:ud.call(e)}function kf(e,n,r){var t=e==null?0:e.length;return t?(r&&typeof r!="number"&&le(e,n,r)?(n=0,r=t):(n=n==null?0:E(n),r=r===u?t:E(r)),Re(e,n,r)):[]}function cf(e,n){return Yr(e,n)}function yf(e,n,r){return ga(e,n,w(r,2))}function hf(e,n){var r=e==null?0:e.length;if(r){var t=Yr(e,n);if(t<r&&Ie(e[t],n))return t}return-1}function bf(e,n){return Yr(e,n,!0)}function _f(e,n,r){return ga(e,n,w(r,2),!0)}function qf(e,n){var r=e==null?0:e.length;if(r){var t=Yr(e,n,!0)-1;if(Ie(e[t],n))return t}return-1}function Af(e){return e&&e.length?cs(e):[]}function wf(e,n){return e&&e.length?cs(e,w(n,2)):[]}function Tf(e){var n=e==null?0:e.length;return n?Re(e,1,n):[]}function Rf(e,n,r){return e&&e.length?(n=r||n===u?1:E(n),Re(e,0,n<0?0:n)):[]}function xf(e,n,r){var t=e==null?0:e.length;return t?(n=r||n===u?1:E(n),n=t-n,Re(e,n<0?0:n,t)):[]}function jf(e,n){return e&&e.length?zr(e,w(n,3),!1,!0):[]}function Pf(e,n){return e&&e.length?zr(e,w(n,3)):[]}var Bf=N(function(e){return gn(ae(e,1,X,!0))}),Sf=N(function(e){var n=xe(e);return X(n)&&(n=u),gn(ae(e,1,X,!0),w(n,2))}),Ef=N(function(e){var n=xe(e);return n=typeof n=="function"?n:u,gn(ae(e,1,X,!0),u,n)});function Ff(e){return e&&e.length?gn(e):[]}function Nf(e,n){return e&&e.length?gn(e,w(n,2)):[]}function If(e,n){return n=typeof n=="function"?n:u,e&&e.length?gn(e,u,n):[]}function Pa(e){if(!(e&&e.length))return[];var n=0;return e=sn(e,function(r){if(X(r))return n=ne(r.length,n),!0}),Ht(n,function(r){return H(e,Ut(r))})}function tu(e,n){if(!(e&&e.length))return[];var r=Pa(e);return n==null?r:H(r,function(t){return pe(n,u,t)})}var Lf=N(function(e,n){return X(e)?ur(e,n):[]}),Of=N(function(e){return ma(sn(e,X))}),Mf=N(function(e){var n=xe(e);return X(n)&&(n=u),ma(sn(e,X),w(n,2))}),Kf=N(function(e){var n=xe(e);return n=typeof n=="function"?n:u,ma(sn(e,X),u,n)}),Cf=N(Pa);function Df(e,n){return _s(e||[],n||[],sr)}function Vf(e,n){return _s(e||[],n||[],dr)}var Uf=N(function(e){var n=e.length,r=n>1?e[n-1]:u;return r=typeof r=="function"?(e.pop(),r):u,tu(e,r)});function au(e){var n=i(e);return n.__chain__=!0,n}function Wf(e,n){return n(e),e}function at(e,n){return n(e)}var Gf=en(function(e){var n=e.length,r=n?e[0]:0,t=this.__wrapped__,a=function(s){return ea(s,e)};return n>1||this.__actions__.length||!(t instanceof L)||!nn(r)?this.thru(a):(t=t.slice(r,+r+(n?1:0)),t.__actions__.push({func:at,args:[a],thisArg:u}),new we(t,this.__chain__).thru(function(s){return n&&!s.length&&s.push(u),s}))});function Hf(){return au(this)}function $f(){return new we(this.value(),this.__chain__)}function Yf(){this.__values__===u&&(this.__values__=yu(this.value()));var e=this.__index__>=this.__values__.length,n=e?u:this.__values__[this.__index__++];return{done:e,value:n}}function zf(){return this}function Zf(e){for(var n,r=this;r instanceof Ur;){var t=Xs(r);t.__index__=0,t.__values__=u,n?a.__wrapped__=t:n=t;var a=t;r=r.__wrapped__}return a.__wrapped__=e,n}function Xf(){var e=this.__wrapped__;if(e instanceof L){var n=e;return this.__actions__.length&&(n=new L(this)),n=n.reverse(),n.__actions__.push({func:at,args:[ja],thisArg:u}),new we(n,this.__chain__)}return this.thru(ja)}function Jf(){return bs(this.__wrapped__,this.__actions__)}var Qf=Zr(function(e,n,r){V.call(e,r)?++e[r]:Je(e,r,1)});function em(e,n,r){var t=S(e)?Fi:Ud;return r&&le(e,n,r)&&(n=u),t(e,w(n,3))}function nm(e,n){var r=S(e)?sn:ts;return r(e,w(n,3))}var rm=Ss(Js),tm=Ss(Qs);function am(e,n){return ae(it(e,n),1)}function im(e,n){return ae(it(e,n),yr)}function sm(e,n,r){return r=r===u?1:E(r),ae(it(e,n),r)}function iu(e,n){var r=S(e)?qe:dn;return r(e,w(n,3))}function su(e,n){var r=S(e)?wo:rs;return r(e,w(n,3))}var um=Zr(function(e,n,r){V.call(e,r)?e[r].push(n):Je(e,r,[n])});function lm(e,n,r,t){e=ge(e)?e:Vn(e),r=r&&!t?E(r):0;var a=e.length;return r<0&&(r=ne(a+r,0)),dt(e)?r<=a&&e.indexOf(n,r)>-1:!!a&&Bn(e,n,r)>-1}var om=N(function(e,n,r){var t=-1,a=typeof n=="function",s=ge(e)?f(e.length):[];return dn(e,function(l){s[++t]=a?pe(n,l,r):lr(l,n,r)}),s}),dm=Zr(function(e,n,r){Je(e,r,n)});function it(e,n){var r=S(e)?H:os;return r(e,w(n,3))}function gm(e,n,r,t){return e==null?[]:(S(n)||(n=n==null?[]:[n]),r=t?u:r,S(r)||(r=r==null?[]:[r]),ms(e,n,r))}var fm=Zr(function(e,n,r){e[r?0:1].push(n)},function(){return[[],[]]});function mm(e,n,r){var t=S(e)?Dt:Oi,a=arguments.length<3;return t(e,w(n,4),r,a,dn)}function vm(e,n,r){var t=S(e)?To:Oi,a=arguments.length<3;return t(e,w(n,4),r,a,rs)}function pm(e,n){var r=S(e)?sn:ts;return r(e,lt(w(n,3)))}function km(e){var n=S(e)?Ji:ug;return n(e)}function cm(e,n,r){(r?le(e,n,r):n===u)?n=1:n=E(n);var t=S(e)?Md:lg;return t(e,n)}function ym(e){var n=S(e)?Kd:dg;return n(e)}function hm(e){if(e==null)return 0;if(ge(e))return dt(e)?En(e):e.length;var n=se(e);return n==Se||n==Ee?e.size:sa(e).length}function bm(e,n,r){var t=S(e)?Vt:gg;return r&&le(e,n,r)&&(n=u),t(e,w(n,3))}var _m=N(function(e,n){if(e==null)return[];var r=n.length;return r>1&&le(e,n[0],n[1])?n=[]:r>2&&le(n[0],n[1],n[2])&&(n=[n[0]]),ms(e,ae(n,1),[])}),st=ed||function(){return te.Date.now()};function qm(e,n){if(typeof n!="function")throw new Ae(j);return e=E(e),function(){if(--e<1)return n.apply(this,arguments)}}function uu(e,n,r){return n=r?u:n,n=e&&n==null?e.length:n,Qe(e,Ye,u,u,u,u,n)}function lu(e,n){var r;if(typeof n!="function")throw new Ae(j);return e=E(e),function(){return--e>0&&(r=n.apply(this,arguments)),e<=1&&(n=u),r}}var Ba=N(function(e,n,r){var t=ve;if(r.length){var a=ln(r,Cn(Ba));t|=$e}return Qe(e,t,n,r,a)}),ou=N(function(e,n,r){var t=ve|Tn;if(r.length){var a=ln(r,Cn(ou));t|=$e}return Qe(n,t,e,r,a)});function du(e,n,r){n=r?u:n;var t=Qe(e,He,u,u,u,u,u,n);return t.placeholder=du.placeholder,t}function gu(e,n,r){n=r?u:n;var t=Qe(e,Wn,u,u,u,u,u,n);return t.placeholder=gu.placeholder,t}function fu(e,n,r){var t,a,s,l,o,g,p=0,k=!1,c=!1,h=!0;if(typeof e!="function")throw new Ae(j);n=je(n)||0,Y(r)&&(k=!!r.leading,c="maxWait"in r,s=c?ne(je(r.maxWait)||0,n):s,h="trailing"in r?!!r.trailing:h);function q(J){var Le=t,an=a;return t=a=u,p=J,l=e.apply(an,Le),l}function T(J){return p=J,o=mr(I,n),k?q(J):l}function F(J){var Le=J-g,an=J-p,Su=n-Le;return c?ie(Su,s-an):Su}function R(J){var Le=J-g,an=J-p;return g===u||Le>=n||Le<0||c&&an>=s}function I(){var J=st();if(R(J))return O(J);o=mr(I,F(J))}function O(J){return o=u,h&&t?q(J):(t=a=u,l)}function he(){o!==u&&qs(o),p=0,t=g=a=o=u}function oe(){return o===u?l:O(st())}function be(){var J=st(),Le=R(J);if(t=arguments,a=this,g=J,Le){if(o===u)return T(g);if(c)return qs(o),o=mr(I,n),q(g)}return o===u&&(o=mr(I,n)),l}return be.cancel=he,be.flush=oe,be}var Am=N(function(e,n){return ns(e,1,n)}),wm=N(function(e,n,r){return ns(e,je(n)||0,r)});function Tm(e){return Qe(e,_t)}function ut(e,n){if(typeof e!="function"||n!=null&&typeof n!="function")throw new Ae(j);var r=function(){var t=arguments,a=n?n.apply(this,t):t[0],s=r.cache;if(s.has(a))return s.get(a);var l=e.apply(this,t);return r.cache=s.set(a,l)||s,l};return r.cache=new(ut.Cache||Xe),r}ut.Cache=Xe;function lt(e){if(typeof e!="function")throw new Ae(j);return function(){var n=arguments;switch(n.length){case 0:return!e.call(this);case 1:return!e.call(this,n[0]);case 2:return!e.call(this,n[0],n[1]);case 3:return!e.call(this,n[0],n[1],n[2])}return!e.apply(this,n)}}function Rm(e){return lu(2,e)}var xm=fg(function(e,n){n=n.length==1&&S(n[0])?H(n[0],ke(w())):H(ae(n,1),ke(w()));var r=n.length;return N(function(t){for(var a=-1,s=ie(t.length,r);++a<s;)t[a]=n[a].call(this,t[a]);return pe(e,this,t)})}),Sa=N(function(e,n){var r=ln(n,Cn(Sa));return Qe(e,$e,u,n,r)}),mu=N(function(e,n){var r=ln(n,Cn(mu));return Qe(e,Gn,u,n,r)}),jm=en(function(e,n){return Qe(e,Hn,u,u,u,n)});function Pm(e,n){if(typeof e!="function")throw new Ae(j);return n=n===u?n:E(n),N(e,n)}function Bm(e,n){if(typeof e!="function")throw new Ae(j);return n=n==null?0:ne(E(n),0),N(function(r){var t=r[n],a=mn(r,0,n);return t&&un(a,t),pe(e,this,a)})}function Sm(e,n,r){var t=!0,a=!0;if(typeof e!="function")throw new Ae(j);return Y(r)&&(t="leading"in r?!!r.leading:t,a="trailing"in r?!!r.trailing:a),fu(e,n,{leading:t,maxWait:n,trailing:a})}function Em(e){return uu(e,1)}function Fm(e,n){return Sa(pa(n),e)}function Nm(){if(!arguments.length)return[];var e=arguments[0];return S(e)?e:[e]}function Im(e){return Te(e,Ke)}function Lm(e,n){return n=typeof n=="function"?n:u,Te(e,Ke,n)}function Om(e){return Te(e,Z|Ke)}function Mm(e,n){return n=typeof n=="function"?n:u,Te(e,Z|Ke,n)}function Km(e,n){return n==null||es(e,n,re(n))}function Ie(e,n){return e===n||e!==e&&n!==n}var Cm=et(ta),Dm=et(function(e,n){return e>=n}),An=ss(function(){return arguments}())?ss:function(e){return z(e)&&V.call(e,"callee")&&!Hi.call(e,"callee")},S=f.isArray,Vm=xi?ke(xi):zd;function ge(e){return e!=null&&ot(e.length)&&!rn(e)}function X(e){return z(e)&&ge(e)}function Um(e){return e===!0||e===!1||z(e)&&ue(e)==$n}var vn=rd||Va,Wm=ji?ke(ji):Zd;function Gm(e){return z(e)&&e.nodeType===1&&!vr(e)}function Hm(e){if(e==null)return!0;if(ge(e)&&(S(e)||typeof e=="string"||typeof e.splice=="function"||vn(e)||Dn(e)||An(e)))return!e.length;var n=se(e);if(n==Se||n==Ee)return!e.size;if(fr(e))return!sa(e).length;for(var r in e)if(V.call(e,r))return!1;return!0}function $m(e,n){return or(e,n)}function Ym(e,n,r){r=typeof r=="function"?r:u;var t=r?r(e,n):u;return t===u?or(e,n,u,r):!!t}function Ea(e){if(!z(e))return!1;var n=ue(e);return n==_r||n==pl||typeof e.message=="string"&&typeof e.name=="string"&&!vr(e)}function zm(e){return typeof e=="number"&&Yi(e)}function rn(e){if(!Y(e))return!1;var n=ue(e);return n==qr||n==ni||n==vl||n==cl}function vu(e){return typeof e=="number"&&e==E(e)}function ot(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Rn}function Y(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}function z(e){return e!=null&&typeof e=="object"}var pu=Pi?ke(Pi):Jd;function Zm(e,n){return e===n||ia(e,n,qa(n))}function Xm(e,n,r){return r=typeof r=="function"?r:u,ia(e,n,qa(n),r)}function Jm(e){return ku(e)&&e!=+e}function Qm(e){if(Ig(e))throw new B(P);return us(e)}function ev(e){return e===null}function nv(e){return e==null}function ku(e){return typeof e=="number"||z(e)&&ue(e)==zn}function vr(e){if(!z(e)||ue(e)!=ze)return!1;var n=Lr(e);if(n===null)return!0;var r=V.call(n,"constructor")&&n.constructor;return typeof r=="function"&&r instanceof r&&Er.call(r)==Zo}var Fa=Bi?ke(Bi):Qd;function rv(e){return vu(e)&&e>=-9007199254740991&&e<=Rn}var cu=Si?ke(Si):eg;function dt(e){return typeof e=="string"||!S(e)&&z(e)&&ue(e)==Xn}function ye(e){return typeof e=="symbol"||z(e)&&ue(e)==Ar}var Dn=Ei?ke(Ei):ng;function tv(e){return e===u}function av(e){return z(e)&&se(e)==Jn}function iv(e){return z(e)&&ue(e)==hl}var sv=et(ua),uv=et(function(e,n){return e<=n});function yu(e){if(!e)return[];if(ge(e))return dt(e)?Fe(e):de(e);if(nr&&e[nr])return Mo(e[nr]());var n=se(e),r=n==Se?Yt:n==Ee?Pr:Vn;return r(e)}function tn(e){if(!e)return e===0?e:0;if(e=je(e),e===yr||e===-1/0){var n=e<0?-1:1;return n*dl}return e===e?e:0}function E(e){var n=tn(e),r=n%1;return n===n?r?n-r:n:0}function hu(e){return e?hn(E(e),0,Ve):0}function je(e){if(typeof e=="number")return e;if(ye(e))return hr;if(Y(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=Y(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=Mi(e);var r=Cl.test(e);return r||Vl.test(e)?_o(e.slice(2),r?2:8):Kl.test(e)?hr:+e}function bu(e){return We(e,fe(e))}function lv(e){return e?hn(E(e),-9007199254740991,Rn):e===0?e:0}function C(e){return e==null?"":ce(e)}var ov=Mn(function(e,n){if(fr(n)||ge(n)){We(n,re(n),e);return}for(var r in n)V.call(n,r)&&sr(e,r,n[r])}),_u=Mn(function(e,n){We(n,fe(n),e)}),gt=Mn(function(e,n,r,t){We(n,fe(n),e,t)}),dv=Mn(function(e,n,r,t){We(n,re(n),e,t)}),gv=en(ea);function fv(e,n){var r=On(e);return n==null?r:Qi(r,n)}var mv=N(function(e,n){e=U(e);var r=-1,t=n.length,a=t>2?n[2]:u;for(a&&le(n[0],n[1],a)&&(t=1);++r<t;)for(var s=n[r],l=fe(s),o=-1,g=l.length;++o<g;){var p=l[o],k=e[p];(k===u||Ie(k,Nn[p])&&!V.call(e,p))&&(e[p]=s[p])}return e}),vv=N(function(e){return e.push(u,Ms),pe(qu,u,e)});function pv(e,n){return Ni(e,w(n,3),Ue)}function kv(e,n){return Ni(e,w(n,3),ra)}function cv(e,n){return e==null?e:na(e,w(n,3),fe)}function yv(e,n){return e==null?e:as(e,w(n,3),fe)}function hv(e,n){return e&&Ue(e,w(n,3))}function bv(e,n){return e&&ra(e,w(n,3))}function _v(e){return e==null?[]:Hr(e,re(e))}function qv(e){return e==null?[]:Hr(e,fe(e))}function Na(e,n,r){var t=e==null?u:bn(e,n);return t===u?r:t}function Av(e,n){return e!=null&&Ds(e,n,Gd)}function Ia(e,n){return e!=null&&Ds(e,n,Hd)}var wv=Fs(function(e,n,r){n!=null&&typeof n.toString!="function"&&(n=Fr.call(n)),e[n]=r},Oa(me)),Tv=Fs(function(e,n,r){n!=null&&typeof n.toString!="function"&&(n=Fr.call(n)),V.call(e,n)?e[n].push(r):e[n]=[r]},w),Rv=N(lr);function re(e){return ge(e)?Xi(e):sa(e)}function fe(e){return ge(e)?Xi(e,!0):rg(e)}function xv(e,n){var r={};return n=w(n,3),Ue(e,function(t,a,s){Je(r,n(t,a,s),t)}),r}function jv(e,n){var r={};return n=w(n,3),Ue(e,function(t,a,s){Je(r,a,n(t,a,s))}),r}var Pv=Mn(function(e,n,r){$r(e,n,r)}),qu=Mn(function(e,n,r,t){$r(e,n,r,t)}),Bv=en(function(e,n){var r={};if(e==null)return r;var t=!1;n=H(n,function(s){return s=fn(s,e),t||(t=s.length>1),s}),We(e,ba(e),r),t&&(r=Te(r,Z|Be|Ke,Ag));for(var a=n.length;a--;)fa(r,n[a]);return r});function Sv(e,n){return Au(e,lt(w(n)))}var Ev=en(function(e,n){return e==null?{}:ag(e,n)});function Au(e,n){if(e==null)return{};var r=H(ba(e),function(t){return[t]});return n=w(n),vs(e,r,function(t,a){return n(t,a[0])})}function Fv(e,n,r){n=fn(n,e);var t=-1,a=n.length;for(a||(a=1,e=u);++t<a;){var s=e==null?u:e[Ge(n[t])];s===u&&(t=a,s=r),e=rn(s)?s.call(e):s}return e}function Nv(e,n,r){return e==null?e:dr(e,n,r)}function Iv(e,n,r,t){return t=typeof t=="function"?t:u,e==null?e:dr(e,n,r,t)}var wu=Ls(re),Tu=Ls(fe);function Lv(e,n,r){var t=S(e),a=t||vn(e)||Dn(e);if(n=w(n,4),r==null){var s=e&&e.constructor;a?r=t?new s:[]:Y(e)?r=rn(s)?On(Lr(e)):{}:r={}}return(a?qe:Ue)(e,function(l,o,g){return n(r,l,o,g)}),r}function Ov(e,n){return e==null?!0:fa(e,n)}function Mv(e,n,r){return e==null?e:hs(e,n,pa(r))}function Kv(e,n,r,t){return t=typeof t=="function"?t:u,e==null?e:hs(e,n,pa(r),t)}function Vn(e){return e==null?[]:$t(e,re(e))}function Cv(e){return e==null?[]:$t(e,fe(e))}function Dv(e,n,r){return r===u&&(r=n,n=u),r!==u&&(r=je(r),r=r===r?r:0),n!==u&&(n=je(n),n=n===n?n:0),hn(je(e),n,r)}function Vv(e,n,r){return n=tn(n),r===u?(r=n,n=0):r=tn(r),e=je(e),$d(e,n,r)}function Uv(e,n,r){if(r&&typeof r!="boolean"&&le(e,n,r)&&(n=r=u),r===u&&(typeof n=="boolean"?(r=n,n=u):typeof e=="boolean"&&(r=e,e=u)),e===u&&n===u?(e=0,n=1):(e=tn(e),n===u?(n=e,e=0):n=tn(n)),e>n){var t=e;e=n,n=t}if(r||e%1||n%1){var a=zi();return ie(e+a*(n-e+bo("1e-"+((a+"").length-1))),n)}return oa(e,n)}var Wv=Kn(function(e,n,r){return n=n.toLowerCase(),e+(r?Ru(n):n)});function Ru(e){return La(C(e).toLowerCase())}function xu(e){return e=C(e),e&&e.replace(Wl,Fo).replace(oo,"")}function Gv(e,n,r){e=C(e),n=ce(n);var t=e.length;r=r===u?t:hn(E(r),0,t);var a=r;return r-=n.length,r>=0&&e.slice(r,a)==n}function Hv(e){return e=C(e),e&&wl.test(e)?e.replace(ai,No):e}function $v(e){return e=C(e),e&&Bl.test(e)?e.replace(St,"\\$&"):e}var Yv=Kn(function(e,n,r){return e+(r?"-":"")+n.toLowerCase()}),zv=Kn(function(e,n,r){return e+(r?" ":"")+n.toLowerCase()}),Zv=Bs("toLowerCase");function Xv(e,n,r){e=C(e),n=E(n);var t=n?En(e):0;if(!n||t>=n)return e;var a=(n-t)/2;return Qr(Cr(a),r)+e+Qr(Kr(a),r)}function Jv(e,n,r){e=C(e),n=E(n);var t=n?En(e):0;return n&&t<n?e+Qr(n-t,r):e}function Qv(e,n,r){e=C(e),n=E(n);var t=n?En(e):0;return n&&t<n?Qr(n-t,r)+e:e}function ep(e,n,r){return r||n==null?n=0:n&&(n=+n),sd(C(e).replace(Et,""),n||0)}function np(e,n,r){return(r?le(e,n,r):n===u)?n=1:n=E(n),da(C(e),n)}function rp(){var e=arguments,n=C(e[0]);return e.length<3?n:n.replace(e[1],e[2])}var tp=Kn(function(e,n,r){return e+(r?"_":"")+n.toLowerCase()});function ap(e,n,r){return r&&typeof r!="number"&&le(e,n,r)&&(n=r=u),r=r===u?Ve:r>>>0,r?(e=C(e),e&&(typeof n=="string"||n!=null&&!Fa(n))&&(n=ce(n),!n&&Sn(e))?mn(Fe(e),0,r):e.split(n,r)):[]}var ip=Kn(function(e,n,r){return e+(r?" ":"")+La(n)});function sp(e,n,r){return e=C(e),r=r==null?0:hn(E(r),0,e.length),n=ce(n),e.slice(r,r+n.length)==n}function up(e,n,r){var t=i.templateSettings;r&&le(e,n,r)&&(n=u),e=C(e),n=gt({},n,t,Os);var a=gt({},n.imports,t.imports,Os),s=re(a),l=$t(a,s),o,g,p=0,k=n.interpolate||wr,c="__p += '",h=zt((n.escape||wr).source+"|"+k.source+"|"+(k===ii?Ml:wr).source+"|"+(n.evaluate||wr).source+"|$","g"),q="//# sourceURL="+(V.call(n,"sourceURL")?(n.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++po+"]")+`
`;e.replace(h,function(R,I,O,he,oe,be){return O||(O=he),c+=e.slice(p,be).replace(Gl,Io),I&&(o=!0,c+=`' +
__e(`+I+`) +
'`),oe&&(g=!0,c+=`';
`+oe+`;
__p += '`),O&&(c+=`' +
((__t = (`+O+`)) == null ? '' : __t) +
'`),p=be+R.length,R}),c+=`';
`;var T=V.call(n,"variable")&&n.variable;if(!T)c=`with (obj) {
`+c+`
}
`;else if(Ll.test(T))throw new B($);c=(g?c.replace(bl,""):c).replace(_l,"$1").replace(ql,"$1;"),c="function("+(T||"obj")+`) {
`+(T?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(o?", __e = _.escape":"")+(g?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+c+`return __p
}`;var F=Pu(function(){return K(s,q+"return "+c).apply(u,l)});if(F.source=c,Ea(F))throw F;return F}function lp(e){return C(e).toLowerCase()}function op(e){return C(e).toUpperCase()}function dp(e,n,r){if(e=C(e),e&&(r||n===u))return Mi(e);if(!e||!(n=ce(n)))return e;var t=Fe(e),a=Fe(n),s=Ki(t,a),l=Ci(t,a)+1;return mn(t,s,l).join("")}function gp(e,n,r){if(e=C(e),e&&(r||n===u))return e.slice(0,Vi(e)+1);if(!e||!(n=ce(n)))return e;var t=Fe(e),a=Ci(t,Fe(n))+1;return mn(t,0,a).join("")}function fp(e,n,r){if(e=C(e),e&&(r||n===u))return e.replace(Et,"");if(!e||!(n=ce(n)))return e;var t=Fe(e),a=Ki(t,Fe(n));return mn(t,a).join("")}function mp(e,n){var r=al,t=il;if(Y(n)){var a="separator"in n?n.separator:a;r="length"in n?E(n.length):r,t="omission"in n?ce(n.omission):t}e=C(e);var s=e.length;if(Sn(e)){var l=Fe(e);s=l.length}if(r>=s)return e;var o=r-En(t);if(o<1)return t;var g=l?mn(l,0,o).join(""):e.slice(0,o);if(a===u)return g+t;if(l&&(o+=g.length-o),Fa(a)){if(e.slice(o).search(a)){var p,k=g;for(a.global||(a=zt(a.source,C(si.exec(a))+"g")),a.lastIndex=0;p=a.exec(k);)var c=p.index;g=g.slice(0,c===u?o:c)}}else if(e.indexOf(ce(a),o)!=o){var h=g.lastIndexOf(a);h>-1&&(g=g.slice(0,h))}return g+t}function vp(e){return e=C(e),e&&Al.test(e)?e.replace(ti,Vo):e}var pp=Kn(function(e,n,r){return e+(r?" ":"")+n.toUpperCase()}),La=Bs("toUpperCase");function ju(e,n,r){return e=C(e),n=r?u:n,n===u?Oo(e)?Go(e):jo(e):e.match(n)||[]}var Pu=N(function(e,n){try{return pe(e,u,n)}catch(r){return Ea(r)?r:new B(r)}}),kp=en(function(e,n){return qe(n,function(r){r=Ge(r),Je(e,r,Ba(e[r],e))}),e});function cp(e){var n=e==null?0:e.length,r=w();return e=n?H(e,function(t){if(typeof t[1]!="function")throw new Ae(j);return[r(t[0]),t[1]]}):[],N(function(t){for(var a=-1;++a<n;){var s=e[a];if(pe(s[0],this,t))return pe(s[1],this,t)}})}function yp(e){return Vd(Te(e,Z))}function Oa(e){return function(){return e}}function hp(e,n){return e==null||e!==e?n:e}var bp=Es(),_p=Es(!0);function me(e){return e}function Ma(e){return ls(typeof e=="function"?e:Te(e,Z))}function qp(e){return ds(Te(e,Z))}function Ap(e,n){return gs(e,Te(n,Z))}var wp=N(function(e,n){return function(r){return lr(r,e,n)}}),Tp=N(function(e,n){return function(r){return lr(e,r,n)}});function Ka(e,n,r){var t=re(n),a=Hr(n,t);r==null&&!(Y(n)&&(a.length||!t.length))&&(r=n,n=e,e=this,a=Hr(n,re(n)));var s=!(Y(r)&&"chain"in r)||!!r.chain,l=rn(e);return qe(a,function(o){var g=n[o];e[o]=g,l&&(e.prototype[o]=function(){var p=this.__chain__;if(s||p){var k=e(this.__wrapped__),c=k.__actions__=de(this.__actions__);return c.push({func:g,args:arguments,thisArg:e}),k.__chain__=p,k}return g.apply(e,un([this.value()],arguments))})}),e}function Rp(){return te._===this&&(te._=Xo),this}function Ca(){}function xp(e){return e=E(e),N(function(n){return fs(n,e)})}var jp=ca(H),Pp=ca(Fi),Bp=ca(Vt);function Bu(e){return wa(e)?Ut(Ge(e)):ig(e)}function Sp(e){return function(n){return e==null?u:bn(e,n)}}var Ep=Ns(),Fp=Ns(!0);function Da(){return[]}function Va(){return!1}function Np(){return{}}function Ip(){return""}function Lp(){return!0}function Op(e,n){if(e=E(e),e<1||e>Rn)return[];var r=Ve,t=ie(e,Ve);n=w(n),e-=Ve;for(var a=Ht(t,n);++r<e;)n(r);return a}function Mp(e){return S(e)?H(e,Ge):ye(e)?[e]:de(Zs(C(e)))}function Kp(e){var n=++zo;return C(e)+n}var Cp=Jr(function(e,n){return e+n},0),Dp=ya("ceil"),Vp=Jr(function(e,n){return e/n},1),Up=ya("floor");function Wp(e){return e&&e.length?Gr(e,me,ta):u}function Gp(e,n){return e&&e.length?Gr(e,w(n,2),ta):u}function Hp(e){return Li(e,me)}function $p(e,n){return Li(e,w(n,2))}function Yp(e){return e&&e.length?Gr(e,me,ua):u}function zp(e,n){return e&&e.length?Gr(e,w(n,2),ua):u}var Zp=Jr(function(e,n){return e*n},1),Xp=ya("round"),Jp=Jr(function(e,n){return e-n},0);function Qp(e){return e&&e.length?Gt(e,me):0}function ek(e,n){return e&&e.length?Gt(e,w(n,2)):0}return i.after=qm,i.ary=uu,i.assign=ov,i.assignIn=_u,i.assignInWith=gt,i.assignWith=dv,i.at=gv,i.before=lu,i.bind=Ba,i.bindAll=kp,i.bindKey=ou,i.castArray=Nm,i.chain=au,i.chunk=Vg,i.compact=Ug,i.concat=Wg,i.cond=cp,i.conforms=yp,i.constant=Oa,i.countBy=Qf,i.create=fv,i.curry=du,i.curryRight=gu,i.debounce=fu,i.defaults=mv,i.defaultsDeep=vv,i.defer=Am,i.delay=wm,i.difference=Gg,i.differenceBy=Hg,i.differenceWith=$g,i.drop=Yg,i.dropRight=zg,i.dropRightWhile=Zg,i.dropWhile=Xg,i.fill=Jg,i.filter=nm,i.flatMap=am,i.flatMapDeep=im,i.flatMapDepth=sm,i.flatten=eu,i.flattenDeep=Qg,i.flattenDepth=ef,i.flip=Tm,i.flow=bp,i.flowRight=_p,i.fromPairs=nf,i.functions=_v,i.functionsIn=qv,i.groupBy=um,i.initial=tf,i.intersection=af,i.intersectionBy=sf,i.intersectionWith=uf,i.invert=wv,i.invertBy=Tv,i.invokeMap=om,i.iteratee=Ma,i.keyBy=dm,i.keys=re,i.keysIn=fe,i.map=it,i.mapKeys=xv,i.mapValues=jv,i.matches=qp,i.matchesProperty=Ap,i.memoize=ut,i.merge=Pv,i.mergeWith=qu,i.method=wp,i.methodOf=Tp,i.mixin=Ka,i.negate=lt,i.nthArg=xp,i.omit=Bv,i.omitBy=Sv,i.once=Rm,i.orderBy=gm,i.over=jp,i.overArgs=xm,i.overEvery=Pp,i.overSome=Bp,i.partial=Sa,i.partialRight=mu,i.partition=fm,i.pick=Ev,i.pickBy=Au,i.property=Bu,i.propertyOf=Sp,i.pull=gf,i.pullAll=ru,i.pullAllBy=ff,i.pullAllWith=mf,i.pullAt=vf,i.range=Ep,i.rangeRight=Fp,i.rearg=jm,i.reject=pm,i.remove=pf,i.rest=Pm,i.reverse=ja,i.sampleSize=cm,i.set=Nv,i.setWith=Iv,i.shuffle=ym,i.slice=kf,i.sortBy=_m,i.sortedUniq=Af,i.sortedUniqBy=wf,i.split=ap,i.spread=Bm,i.tail=Tf,i.take=Rf,i.takeRight=xf,i.takeRightWhile=jf,i.takeWhile=Pf,i.tap=Wf,i.throttle=Sm,i.thru=at,i.toArray=yu,i.toPairs=wu,i.toPairsIn=Tu,i.toPath=Mp,i.toPlainObject=bu,i.transform=Lv,i.unary=Em,i.union=Bf,i.unionBy=Sf,i.unionWith=Ef,i.uniq=Ff,i.uniqBy=Nf,i.uniqWith=If,i.unset=Ov,i.unzip=Pa,i.unzipWith=tu,i.update=Mv,i.updateWith=Kv,i.values=Vn,i.valuesIn=Cv,i.without=Lf,i.words=ju,i.wrap=Fm,i.xor=Of,i.xorBy=Mf,i.xorWith=Kf,i.zip=Cf,i.zipObject=Df,i.zipObjectDeep=Vf,i.zipWith=Uf,i.entries=wu,i.entriesIn=Tu,i.extend=_u,i.extendWith=gt,Ka(i,i),i.add=Cp,i.attempt=Pu,i.camelCase=Wv,i.capitalize=Ru,i.ceil=Dp,i.clamp=Dv,i.clone=Im,i.cloneDeep=Om,i.cloneDeepWith=Mm,i.cloneWith=Lm,i.conformsTo=Km,i.deburr=xu,i.defaultTo=hp,i.divide=Vp,i.endsWith=Gv,i.eq=Ie,i.escape=Hv,i.escapeRegExp=$v,i.every=em,i.find=rm,i.findIndex=Js,i.findKey=pv,i.findLast=tm,i.findLastIndex=Qs,i.findLastKey=kv,i.floor=Up,i.forEach=iu,i.forEachRight=su,i.forIn=cv,i.forInRight=yv,i.forOwn=hv,i.forOwnRight=bv,i.get=Na,i.gt=Cm,i.gte=Dm,i.has=Av,i.hasIn=Ia,i.head=nu,i.identity=me,i.includes=lm,i.indexOf=rf,i.inRange=Vv,i.invoke=Rv,i.isArguments=An,i.isArray=S,i.isArrayBuffer=Vm,i.isArrayLike=ge,i.isArrayLikeObject=X,i.isBoolean=Um,i.isBuffer=vn,i.isDate=Wm,i.isElement=Gm,i.isEmpty=Hm,i.isEqual=$m,i.isEqualWith=Ym,i.isError=Ea,i.isFinite=zm,i.isFunction=rn,i.isInteger=vu,i.isLength=ot,i.isMap=pu,i.isMatch=Zm,i.isMatchWith=Xm,i.isNaN=Jm,i.isNative=Qm,i.isNil=nv,i.isNull=ev,i.isNumber=ku,i.isObject=Y,i.isObjectLike=z,i.isPlainObject=vr,i.isRegExp=Fa,i.isSafeInteger=rv,i.isSet=cu,i.isString=dt,i.isSymbol=ye,i.isTypedArray=Dn,i.isUndefined=tv,i.isWeakMap=av,i.isWeakSet=iv,i.join=lf,i.kebabCase=Yv,i.last=xe,i.lastIndexOf=of,i.lowerCase=zv,i.lowerFirst=Zv,i.lt=sv,i.lte=uv,i.max=Wp,i.maxBy=Gp,i.mean=Hp,i.meanBy=$p,i.min=Yp,i.minBy=zp,i.stubArray=Da,i.stubFalse=Va,i.stubObject=Np,i.stubString=Ip,i.stubTrue=Lp,i.multiply=Zp,i.nth=df,i.noConflict=Rp,i.noop=Ca,i.now=st,i.pad=Xv,i.padEnd=Jv,i.padStart=Qv,i.parseInt=ep,i.random=Uv,i.reduce=mm,i.reduceRight=vm,i.repeat=np,i.replace=rp,i.result=Fv,i.round=Xp,i.runInContext=d,i.sample=km,i.size=hm,i.snakeCase=tp,i.some=bm,i.sortedIndex=cf,i.sortedIndexBy=yf,i.sortedIndexOf=hf,i.sortedLastIndex=bf,i.sortedLastIndexBy=_f,i.sortedLastIndexOf=qf,i.startCase=ip,i.startsWith=sp,i.subtract=Jp,i.sum=Qp,i.sumBy=ek,i.template=up,i.times=Op,i.toFinite=tn,i.toInteger=E,i.toLength=hu,i.toLower=lp,i.toNumber=je,i.toSafeInteger=lv,i.toString=C,i.toUpper=op,i.trim=dp,i.trimEnd=gp,i.trimStart=fp,i.truncate=mp,i.unescape=vp,i.uniqueId=Kp,i.upperCase=pp,i.upperFirst=La,i.each=iu,i.eachRight=su,i.first=nu,Ka(i,function(){var e={};return Ue(i,function(n,r){V.call(i.prototype,r)||(e[r]=n)}),e}(),{chain:!1}),i.VERSION=x,qe(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){i[e].placeholder=i}),qe(["drop","take"],function(e,n){L.prototype[e]=function(r){r=r===u?1:ne(E(r),0);var t=this.__filtered__&&!n?new L(this):this.clone();return t.__filtered__?t.__takeCount__=ie(r,t.__takeCount__):t.__views__.push({size:ie(r,Ve),type:e+(t.__dir__<0?"Right":"")}),t},L.prototype[e+"Right"]=function(r){return this.reverse()[e](r).reverse()}}),qe(["filter","map","takeWhile"],function(e,n){var r=n+1,t=r==ei||r==ol;L.prototype[e]=function(a){var s=this.clone();return s.__iteratees__.push({iteratee:w(a,3),type:r}),s.__filtered__=s.__filtered__||t,s}}),qe(["head","last"],function(e,n){var r="take"+(n?"Right":"");L.prototype[e]=function(){return this[r](1).value()[0]}}),qe(["initial","tail"],function(e,n){var r="drop"+(n?"":"Right");L.prototype[e]=function(){return this.__filtered__?new L(this):this[r](1)}}),L.prototype.compact=function(){return this.filter(me)},L.prototype.find=function(e){return this.filter(e).head()},L.prototype.findLast=function(e){return this.reverse().find(e)},L.prototype.invokeMap=N(function(e,n){return typeof e=="function"?new L(this):this.map(function(r){return lr(r,e,n)})}),L.prototype.reject=function(e){return this.filter(lt(w(e)))},L.prototype.slice=function(e,n){e=E(e);var r=this;return r.__filtered__&&(e>0||n<0)?new L(r):(e<0?r=r.takeRight(-e):e&&(r=r.drop(e)),n!==u&&(n=E(n),r=n<0?r.dropRight(-n):r.take(n-e)),r)},L.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},L.prototype.toArray=function(){return this.take(Ve)},Ue(L.prototype,function(e,n){var r=/^(?:filter|find|map|reject)|While$/.test(n),t=/^(?:head|last)$/.test(n),a=i[t?"take"+(n=="last"?"Right":""):n],s=t||/^find/.test(n);a&&(i.prototype[n]=function(){var l=this.__wrapped__,o=t?[1]:arguments,g=l instanceof L,p=o[0],k=g||S(l),c=function(I){var O=a.apply(i,un([I],o));return t&&h?O[0]:O};k&&r&&typeof p=="function"&&p.length!=1&&(g=k=!1);var h=this.__chain__,q=!!this.__actions__.length,T=s&&!h,F=g&&!q;if(!s&&k){l=F?l:new L(this);var R=e.apply(l,o);return R.__actions__.push({func:at,args:[c],thisArg:u}),new we(R,h)}return T&&F?e.apply(this,o):(R=this.thru(c),T?t?R.value()[0]:R.value():R)})}),qe(["pop","push","shift","sort","splice","unshift"],function(e){var n=Br[e],r=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",t=/^(?:pop|shift)$/.test(e);i.prototype[e]=function(){var a=arguments;if(t&&!this.__chain__){var s=this.value();return n.apply(S(s)?s:[],a)}return this[r](function(l){return n.apply(S(l)?l:[],a)})}}),Ue(L.prototype,function(e,n){var r=i[n];if(r){var t=r.name+"";V.call(Ln,t)||(Ln[t]=[]),Ln[t].push({name:n,func:r})}}),Ln[Xr(u,Tn).name]=[{name:"wrapper",func:u}],L.prototype.clone=md,L.prototype.reverse=vd,L.prototype.value=pd,i.prototype.at=Gf,i.prototype.chain=Hf,i.prototype.commit=$f,i.prototype.next=Yf,i.prototype.plant=Zf,i.prototype.reverse=Xf,i.prototype.toJSON=i.prototype.valueOf=i.prototype.value=Jf,i.prototype.first=i.prototype.head,nr&&(i.prototype[nr]=zf),i},Fn=Ho();pn?((pn.exports=Fn)._=Fn,Mt._=Fn):te._=Fn}).call(Fk)}(pr,pr.exports)),pr.exports}var Cu=Nk();const Ik="NORGE",Du=m=>m??"",Lk=m=>{const{adresselinje1:b,adresselinje2:u,adresselinje3:x,postNummer:A,poststed:P,land:j}=m,$=[b,u,x].filter(M=>!!M).join(", "),D=`${Du(A)} ${Du(P)}`,Q=(j==null?void 0:j.toUpperCase())!==Ik?j:void 0;return[$,D,Q].map(M=>M==null?void 0:M.trim()).filter(M=>!!M).join(", ").trim()},xc=(m,b)=>[...m].sort(Zu).find(u=>u.adresseType===b),jc=(m,b)=>m.length!==b.length?!1:m.every(u=>b.some(x=>Cu.isEqual(u,x)))&&b.every(u=>m.some(x=>Cu.isEqual(x,u)));function Ok(m){throw new Error("Uventet enum verdi: alle tilfeller skal må håndteres:",m)}const Ha=kr(bt);var Mk=(m=>(m[m.SOKNAD=0]="SOKNAD",m[m.FREG=1]="FREG",m[m.MEDL=2]="MEDL",m))(Mk||{});const Kk=m=>{switch(m){case 0:return Ha.formatMessage({id:"FaktaKilde.Soknad"});case 1:return Ha.formatMessage({id:"FaktaKilde.FREG"});case 2:return Ha.formatMessage({id:"FaktaKilde.MEDL"});default:return Ok(m)}},Xu=Me.forwardRef((m,b)=>y.jsx($a,{gap:"2",style:{display:"flex"},...m,ref:b}));Xu.displayName="FaktaGruppe";const Ck=({label:m,value:b,kilde:u})=>y.jsx(kt,{background:"bg-subtle",flexGrow:"1",paddingBlock:"2",paddingInline:"4",borderRadius:"medium",children:y.jsxs(Ja,{gap:"6",children:[y.jsxs("div",{children:[y.jsx(Hu,{size:"small",children:m}),y.jsx(Ya,{size:"large",children:b})]}),y.jsx(za,{uppercase:!0,children:Kk(u)})]})});Xu.__docgenInfo={description:"",methods:[],displayName:"FaktaGruppe"};Ck.__docgenInfo={description:"",methods:[],displayName:"FaktaBox",props:{label:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},value:{required:!0,tsType:{name:"string"},description:""},kilde:{required:!0,tsType:{name:"FaktaKilde"},description:""}}};const Ju=({adresser:m,erAnnenpart:b=!1,harSammeAdresser:u=!1,adresseKodeverk:x})=>{if(u)return y.jsx(kt,{padding:"4",children:y.jsx(Eu,{textColor:"subtle",children:y.jsx(Pe,{id:"AdresseTabell.SammeAdresse"})})});const A=P=>P+1===m.length?{border:"0px"}:{};return y.jsxs(y.Fragment,{children:[m.length===0&&y.jsx(kt,{padding:"4",children:y.jsx(Eu,{textColor:"subtle",children:y.jsx(Pe,{id:"AdresseTabell.IngenAdresse",values:{erAnnenpart:b}})})}),m.length>0&&y.jsxs(Oe,{style:{tableLayout:"fixed"},children:[y.jsx(Oe.Header,{children:y.jsxs(Oe.Row,{children:[y.jsx(Oe.HeaderCell,{children:y.jsx(Pe,{id:"AdresseTabell.PeriodeLabel"})}),y.jsx(Oe.HeaderCell,{children:y.jsx(Pe,{id:"AdresseTabell.AdresseLabel"})}),y.jsx(Oe.HeaderCell,{children:y.jsx(Pe,{id:"AdresseTabell.TypeLabel"})})]})}),y.jsx(Oe.Body,{children:m.sort(Zu).map((P,j)=>{var $;return y.jsxs(Oe.Row,{children:[y.jsx(Oe.DataCell,{style:A(j),children:y.jsx(tk,{dateStringFom:P.fom,dateStringTom:P.tom===Za?void 0:P.tom})}),y.jsx(Oe.DataCell,{style:A(j),children:Lk(P)}),y.jsx(Oe.DataCell,{style:A(j),children:($=x.find(D=>D.kode===P.adresseType))==null?void 0:$.navn})]},P.adresseType+P.fom+P.tom)})})]})]})};Ju.__docgenInfo={description:"",methods:[],displayName:"AdresseTabell",props:{adresser:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"},description:""}}};const Dk=kr(bt),Vk=m=>{switch(m){case Ou.KVINNE:return Wa.female;case Ou.MANN:return Wa.male;default:return Wa.unknown}},vt=({rolle:m="BRUKER",alleKodeverk:b,harSammeAdresser:u,navn:x,kjønn:A,sivilstand:P,fødselsdato:j,dødsdato:$,adresser:D,showIcon:Q=!0})=>{var Z;const M=m==="BARN";return y.jsx(yt,{value:Dk,children:y.jsx(kt,{background:"bg-subtle",padding:"4",borderRadius:"large","aria-label":x,children:y.jsxs(Ja,{gap:"1",children:[y.jsxs($a,{gap:"5",children:[Q&&y.jsx("div",{children:y.jsx(hk,{gender:Vk(A),isChild:M})}),y.jsxs("div",{children:[y.jsxs($a,{gap:"4",children:[y.jsx(Hu,{children:y.jsx(Pe,{id:"PersonPanel.RolleOgNavn",values:{rolle:m,navn:x}})}),M&&j&&!$&&y.jsx(Ya,{children:y.jsx(Pe,{id:"PersonPanel.Fodt",values:{dato:Fu(j)}})}),$&&y.jsx(Ya,{children:y.jsx(Pe,{id:"PersonPanel.Dod",values:{dato:Fu($)}})})]}),!M&&P&&y.jsx(za,{"aria-label":"Sivilstand",children:(Z=b[ct.SIVILSTAND_TYPE].find(Be=>Be.kode===P))==null?void 0:Z.navn})]})]}),y.jsxs(za,{children:[m==="BARN"&&y.jsx(Pe,{id:"PersonPanel.Beskrivelse.Barn",values:{rolle:m}}),m==="BRUKER"&&y.jsx(Pe,{id:"PersonPanel.Beskrivelse.Bruker",values:{rolle:m}}),m==="ANNEN_PART"&&y.jsx(Pe,{id:"PersonPanel.Beskrivelse.Annenpart",values:{rolle:m}})]}),y.jsx(Ju,{harSammeAdresser:u,adresser:D,adresseKodeverk:b[ct.ADRESSE_TYPE]})]})})})};vt.__docgenInfo={description:"",methods:[],displayName:"Personopplysninger",props:{rolle:{required:!1,tsType:{name:"union",raw:"'BARN' | 'BRUKER' | 'ANNEN_PART'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'BRUKER'"},{name:"literal",value:"'ANNEN_PART'"}]},description:"",defaultValue:{value:"'BRUKER'",computed:!1}},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Personadresse[]"},description:""},kjønn:{required:!1,tsType:{name:"string"},description:""},showIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const Uk=({personoversikt:{barn:m,bruker:b,annenPart:u},alleKodeverk:x})=>y.jsxs(Ja,{gap:"2",children:[m.map(A=>y.jsx(vt,{...A,alleKodeverk:x,rolle:"BARN"},A.aktoerId)),y.jsx(vt,{rolle:"BRUKER",alleKodeverk:x,...b}),u&&y.jsx(vt,{...u,rolle:"ANNEN_PART",alleKodeverk:x})]});Uk.__docgenInfo={description:"",methods:[],displayName:"PersonopplysningerForFamilie",props:{alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Wk="_boks_c3bfh_1",Gk="_harBorderLeft_c3bfh_8",Hk="_harBorderTop_c3bfh_12",Qu={boks:Wk,harBorderLeft:Gk,harBorderTop:Hk},$k=bk.bind(Qu),Yk=({harBorderTop:m=!1,harBorderLeft:b=!0,children:u})=>y.jsx("div",{className:$k(Qu.boks,{harBorderLeft:b,harBorderTop:m}),children:u});Yk.__docgenInfo={description:"",methods:[],displayName:"Boks",props:{harBorderTop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},harBorderLeft:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const el=({erPanelValgt:m,dataState:b,children:u})=>m?b!==Yu.SUCCESS?y.jsx(ak,{}):u:null;el.__docgenInfo={description:"",methods:[],displayName:"FaktaPanelWrapper",props:{erPanelValgt:{required:!0,tsType:{name:"boolean"},description:""},dataState:{required:!0,tsType:{name:"RestApiState"},description:""},children:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const zk="default",Zk=(m,b,u,x,A,P)=>{const[j,$]=Me.useState(!1);Me.useEffect(()=>{m({id:b})},[]);const D=x&&(P===b||A&&P===zk),Q=ik(x);return Me.useEffect(()=>{x?m({id:b,tekst:u,erAktiv:D,harApneAksjonspunkter:A}):!x&&Q&&m({id:b}),$(D)},[Q,x,D,A]),x&&j},Vu="default",Uu="default",Xk=(m,b,u,x,A,P)=>j=>{const D=(Array.isArray(j)?j:[j]).map(M=>({"@type":M.kode,...M})),Q={saksnummer:m.saksnummer,behandlingUuid:b.uuid,behandlingVersjon:b.versjon};if(D&&A&&P){if(D.length===0)throw Error("Det har oppstått en teknisk feil ved lagring av aksjonspunkter. Meld feilen i Porten.");if(P.includes(D[0].kode))return A({...Q,overstyrteAksjonspunktDtoer:D},!0).then(()=>u(Uu,Vu))}return x({...Q,bekreftedeAksjonspunktDtoer:D},!0).then(()=>u(Uu,Vu))},Jk=(m,b=[])=>{const[u,x]=Me.useState(),A=Me.useContext(xk);Me.useEffect(()=>{u&&x(void 0)},[A.behandling.versjon]);const{aksjonspunkt:P}=A.behandling,j=Me.useMemo(()=>P&&m?P.filter(M=>m.includes(M.definisjon)):[],[P,m]),$=Tk(A.behandling,[],A.rettigheter,A.hasFetchError),D=Me.useMemo(()=>Rk(A.behandling,j),[A.behandling.versjon,j]),Q=Me.useMemo(()=>Xk(A.fagsak,A.behandling,A.oppdaterProsessStegOgFaktaPanelIUrl,A.lagreAksjonspunkter,A.lagreOverstyrteAksjonspunkter,b),[A.behandling.versjon,b]);return{behandling:A.behandling,submittable:!j.some(M=>Mu(M.status))||j.some(M=>M.kanLoses),harApneAksjonspunkter:j.some(M=>Mu(M.status)&&M.kanLoses),alleKodeverk:A.alleKodeverk,aksjonspunkter:j,readOnly:$,alleMerknaderFraBeslutter:D,submitCallback:Q,formData:u,setFormData:x}},nl=({valgtFaktaSteg:m,behandling:b,registrerFaktaPanel:u,panelEndepunkter:x=[],aksjonspunktKoder:A,overstyringApKoder:P,skalPanelVisesIMeny:j,renderPanel:$,faktaPanelKode:D,faktaPanelMenyTekst:Q})=>{const M=Jk(A,P),Z=Zk(u,D,Q,j(),M.harApneAksjonspunkter,m),Be=x.map(De=>({key:De})),{data:Ke,state:Ce}=Ak.useMultipleRestApi(Be,{updateTriggers:[Z,b==null?void 0:b.versjon],suspendRequest:!Z||Be.length===0,isCachingOn:!0});return y.jsx(el,{erPanelValgt:Z,dataState:Be.length>0?Ce:Yu.SUCCESS,children:$({...Ke,...M})})};nl.__docgenInfo={description:"",methods:[],displayName:"FaktaDefaultInitPanel",props:{panelEndepunkter:{required:!1,tsType:{name:"Array",elements:[{name:"RestKey",elements:[{name:"any"},{name:"any"}],raw:"RestKey<any, any>"}],raw:"RestKey<any, any>[]"},description:"",defaultValue:{value:"[]",computed:!1}},aksjonspunktKoder:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},overstyringApKoder:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},skalPanelVisesIMeny:{required:!0,tsType:{name:"signature",type:"function",raw:"() => boolean",signature:{arguments:[],return:{name:"boolean"}}},description:""},renderPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: PANEL_DATA & StandardFaktaPanelProps) => ReactElement",signature:{arguments:[{type:{name:"intersection",raw:"PANEL_DATA & StandardFaktaPanelProps",elements:[{name:"PANEL_DATA"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApneAksjonspunkter",value:{name:"boolean",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const Qk="_selectWidth_1ur6m_1",ec="_leftCol_1ur6m_5",Wu={selectWidth:Qk,leftCol:ec},wn=({intl:m,readOnly:b,vergetyper:u=[],alleMerknaderFraBeslutter:x,valgtVergeType:A})=>y.jsxs(sk,{merknaderFraBeslutter:x[ht.AVKLAR_VERGE],children:[y.jsx(vk,{name:"vergeType",className:Wu.selectWidth,label:m.formatMessage({id:"Verge.TypeVerge"}),validate:[Un],selectValues:u.map(P=>y.jsx("option",{value:P.kode,children:P.navn},P.kode)),readOnly:b}),y.jsx(uk,{children:A&&y.jsxs(y.Fragment,{children:[y.jsx(pt,{sixteenPx:!0}),y.jsxs(Nu,{children:[y.jsx(ft,{className:Wu.leftCol,children:y.jsx(Ua,{name:"navn",label:m.formatMessage({id:"Verge.Navn"}),validate:[Un,pk],readOnly:b})}),y.jsxs(ft,{children:[A!==Xa.ADVOKAT&&y.jsx(Ua,{name:"fnr",label:m.formatMessage({id:"Verge.FodselsNummer"}),validate:[Un,kk],readOnly:b}),A===Xa.ADVOKAT&&y.jsx(Ua,{name:"organisasjonsnummer",label:m.formatMessage({id:"Verge.Organisasjonsnummer"}),validate:[Un],readOnly:b})]})]}),y.jsx(pt,{sixteenPx:!0}),y.jsxs(Nu,{children:[y.jsx(ft,{children:y.jsx(Iu,{name:"gyldigFom",label:m.formatMessage({id:"Verge.PeriodeFOM"}),validate:[Un,Lu],isReadOnly:b})}),y.jsx(ft,{children:y.jsx(Iu,{name:"gyldigTom",label:m.formatMessage({id:"Verge.PeriodeTOM"}),validate:[Lu],isReadOnly:b})})]})]})})]});wn.defaultProps={vergetyper:[]};wn.buildInitialValues=m=>({navn:m.navn,gyldigFom:m.gyldigFom,gyldigTom:m.gyldigTom,fnr:m.fnr,organisasjonsnummer:m.organisasjonsnummer,vergeType:m.vergeType||void 0});wn.transformValues=m=>({vergeType:m.vergeType,navn:m.navn,fnr:m.fnr,organisasjonsnummer:m.organisasjonsnummer,gyldigFom:m.gyldigFom,gyldigTom:m.gyldigTom,kode:ht.AVKLAR_VERGE});wn.__docgenInfo={description:`RegistrereVergeFaktaForm

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
}`,signature:{properties:[{key:"vergeType",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fnr",value:{name:"string",required:!0}},{key:"organisasjonsnummer",value:{name:"string",required:!0}},{key:"gyldigFom",value:{name:"string",required:!0}},{key:"gyldigTom",value:{name:"string",required:!1}},{key:"kode",value:{name:"AksjonspunktKode.AVKLAR_VERGE",required:!0}}]}}}}],displayName:"RegistrereVergeFaktaForm",props:{vergetyper:{defaultValue:{value:"[]",computed:!1},required:!1}}};const nc=(m,b)=>({begrunnelse:cr.buildInitialValues(b.filter(u=>u.definisjon===ht.AVKLAR_VERGE)[0]).begrunnelse,...wn.buildInitialValues(m||{})}),rc=m=>({...wn.transformValues(m),begrunnelse:m.begrunnelse}),rl=({hasOpenAksjonspunkter:m,submittable:b,readOnly:u,alleMerknaderFraBeslutter:x,aksjonspunkter:A,verge:P,alleKodeverk:j,submitCallback:$,formData:D,setFormData:Q})=>{const M=$u(),Z=ck({defaultValues:D||nc(P,A),shouldUnregister:!0}),Be=Z.watch("vergeType"),Ke=Z.watch("begrunnelse"),Ce=Me.useMemo(()=>j[ct.VERGE_TYPE].sort((De,ve)=>De.navn.localeCompare(ve.navn)),[j[ct.VERGE_TYPE]]);return A.length===0?null:y.jsxs(y.Fragment,{children:[y.jsx(lk,{isAksjonspunktOpen:m,children:[M.formatMessage({id:"RegistrereVergeInfoPanel.CheckInformation"})]}),y.jsxs(yk,{formMethods:Z,onSubmit:De=>$(rc(De)),setDataOnUnmount:Q,children:[y.jsx(wn,{readOnly:u,intl:M,vergetyper:Ce,valgtVergeType:Be,alleMerknaderFraBeslutter:x}),y.jsx(pt,{twentyPx:!0}),y.jsx(cr,{isSubmittable:b,isReadOnly:u,hasBegrunnelse:!!Ke}),y.jsx(pt,{twentyPx:!0}),y.jsx(zu,{isSubmittable:b&&!!Be,isReadOnly:u,isSubmitting:Z.formState.isSubmitting,isDirty:Z.formState.isDirty})]})]})};rl.__docgenInfo={description:`RegistrereVergeInfoPanel

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
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!1}},{key:"fnr",value:{name:"string",required:!1}},{key:"gyldigFom",value:{name:"string",required:!1}},{key:"gyldigTom",value:{name:"string",required:!1}},{key:"vergeType",value:{name:"string",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}}]}},description:""},hasOpenAksjonspunkter:{required:!0,tsType:{name:"boolean"},description:""},submittable:{required:!0,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleMerknaderFraBeslutter:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""},formData:{required:!1,tsType:{name:"any"},description:""},setFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: any) => void",signature:{arguments:[{type:{name:"any"},name:"data"}],return:{name:"void"}}},description:""}}};const tc={"RegistrereVergeInfoPanel.CheckInformation":"Fyll ut og kontroller vergeopplysninger","Verge.KontaktPerson":"Kontaktperson","Verge.Navn":"Navn","Verge.Mandat":"Mandat","Verge.FodselsNummer":"Fødselsnummer","Verge.PeriodeFOM":"Periode f.o.m.","Verge.PeriodeTOM":"Periode t.o.m.","Verge.TypeVerge":"Type verge","Verge.VergeFullmektig":"Verge/fullmektig","Verge.Soker":"Søker","Verge.BrukerErUnderTvungenForvaltning":"Søker er under tvungen forvaltning","Verge.Organisasjonsnummer":"Organisasjonsnummer"},ac=kr(tc),tl=({verge:m={},aksjonspunkter:b,alleMerknaderFraBeslutter:u,alleKodeverk:x,submitCallback:A,readOnly:P,harApneAksjonspunkter:j,submittable:$,formData:D,setFormData:Q})=>y.jsx(yt,{value:ac,children:y.jsx(rl,{verge:m,aksjonspunkter:b,alleMerknaderFraBeslutter:u,hasOpenAksjonspunkter:j,alleKodeverk:x,submitCallback:A,readOnly:P,submittable:$,formData:D,setFormData:Q})});tl.__docgenInfo={description:"",methods:[],displayName:"VergeFaktaIndex",props:{verge:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<TilbakekrevingKodeverkType, KodeverkMedNavn[]>"}]},description:""}}};const Gu=[ht.AVKLAR_VERGE],ic=[wk.VERGE],sc=({valgtFaktaSteg:m,behandling:b,registrerFaktaPanel:u})=>y.jsx(nl,{valgtFaktaSteg:m,behandling:b,registrerFaktaPanel:u,panelEndepunkter:ic,aksjonspunktKoder:Gu,faktaPanelKode:qk.VERGE,faktaPanelMenyTekst:$u().formatMessage({id:"FaktaInitPanel.Title.Verge"}),skalPanelVisesIMeny:()=>Gu.some(x=>_k(x,b.aksjonspunkt)),renderPanel:x=>y.jsx(tl,{...x})});sc.__docgenInfo={description:"",methods:[],displayName:"VergeFaktaInitPanel",props:{valgtFaktaSteg:{required:!1,tsType:{name:"string"},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApneAksjonspunkter",value:{name:"boolean",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};export{Yk as B,nl as F,Uk as P,sc as V,zu as a,cr as b,Ok as c,Kk as d,Mk as e,Lk as f,xc as g,vt as h,jc as i,Xu as j,Ck as k,Zu as s};
