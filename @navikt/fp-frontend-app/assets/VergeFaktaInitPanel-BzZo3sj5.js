import{j as y}from"./jsx-runtime-CLpGMVip.js";import{P as ht,k as rk,j as Ha,V as Xa,L as $u,B as $a,E as Ya,a9 as Eu,h as Yu}from"./withQueryClient-DTem1OUy.js";import{n as Un,g as tk,M as Pe,Y as za,L as ak,q as Fu,r as ik,b as sk,y as uk,s as lk,h as kt,a as Nu,o as mt,S as ok}from"./index.es-MxAMIJPu.js";import{r as Me}from"./index-B5OHeJSP.js";import{a as dk,e as Tn,N as gk,b as fk,l as mk,E as pk,Z as vk,Q as kk,H as Va,q as ck,M as yk,X as Iu,O as Lu,u as hk,r as bk}from"./index.es-jVWbk6xM.js";import{c as pt}from"./_commonjsHelpers-Cpj98o6Y.js";import{B as ct}from"./Box-CkfZpuRW.js";import{c as _k}from"./bind-oYjWB_aQ.js";import{b as qk,z as Ua}from"./index.es-wzSzT7V5.js";import"./aktivitetStatus-02fOJoqz.js";import{K as yt}from"./alleKodeverk-Ck9zwXaq.js";import{K as Ou}from"./Kjonnkode-C-fkzSiP.js";import{T as Oe}from"./Table-RfktipKk.js";import{A as Ja,h as Ak}from"./aksjonspunktCodes-BuBbCIxs.js";import{F as Tk}from"./skjermlenkeCodes-1SvLTuBb.js";import{a as wk,B as Rk}from"./behandlingContextApi-dQIrUR8M.js";import{a as zu}from"./useRestApiRunner-PSWluHZJ.js";import{i as Mu}from"./RisikoklassifiseringIndex-DAHosNOY.js";import{e as xk,g as jk}from"./ProsessDefaultInitPanel-DO5l7dPw.js";import{S as Pk}from"./FagsakIndex-DtX9vkTD.js";var Za=(m=>(m.BARN="BARN",m.FBARN="FBARN",m.VOKSEN="VOKSEN",m.ADVOKAT="ADVOKAT",m.ANNEN_F="ANNEN_F",m))(Za||{});const yr={"AdresseVisning.Adresse":"Adresse","ForelderPanel.Soker":"Søker","ForelderPanel.AnnenForelder":"Annen forelder","AlleBarnPanel.Barn":"Barn","AlleBarnPanel.BarnNr":"Barn {nummer}","AlleBarnPanel.Fodt":"Født","AlleBarnPanel.Dod":"Død","PersonPanel.RolleOgNavn":"{rolle, select, BRUKER {Søker, } ANNEN_PART {Den andre forelderen, } BARN {Barnet, } other {} }{navn}","PersonPanel.Beskrivelse.Bruker":"Adresser for søker registrert i folkeregisteret gyldige for de siste 12 månedene","PersonPanel.Beskrivelse.Barn":"Adresser for barnet registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Beskrivelse.Annenpart":"Adresser for den andre forelderen registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Fodt":"Født {dato}","PersonPanel.Dod":"Død {dato}","AdresseTabell.IngenAdresse":"Ingen adresser funnet for {erAnnenpart, select, true {den andre forelderen} other {søker} }.","AdresseTabell.SammeAdresse":"Den andre forelderen har samme adresse som søker på skjæringstidspunktet","AdresseTabell.PeriodeLabel":"Periode","AdresseTabell.AdresseLabel":"Adresse","AdresseTabell.TypeLabel":"Type","MerkePanel.Dod":"DØD","MerkePanel.DodTittel":"Personen er død","MerkePanel.DodFodt":"DØDFØDT","MerkePanel.Diskresjon6":"Kode 6","MerkePanel.Diskresjon7":"Kode 7","MerkePanel.EgenAnsatt":"Nav","MerkePanel.Verge":"Verge","MerkePanel.Diskresjon6Tittel":"Personen har diskresjonsmerking kode 6","MerkePanel.Diskresjon7Tittel":"Personen har diskresjonsmerking kode 7","MerkePanel.EgenAnsattTittel":"Personen er ansatt i Nav","MerkePanel.VergeTittel":"Personen har verge","SubmitButton.ConfirmInformation":"Bekreft og fortsett","FaktaBegrunnelseTextField.BegrunnEndringene":"Begrunn endringene","FaktaBegrunnelseTextField.Vurdering":"Vurdering","FaktaBegrunnelseTextField.Begrunnelse":"Begrunnelse","TrueFalseInput.True":"Ja","TrueFalseInput.False":"Nei","FaktaKilde.Soknad":"FRA SØKNADEN","FaktaKilde.FREG":"FRA FOLKEREGISTERET","FaktaKilde.MEDL":"FRA MEDLEMSKAPSREGISTERET"},Wa=Un(yr),Bk=fk(3),Sk=mk(1500),Wn=({isReadOnly:m,isSubmittable:h,hasBegrunnelse:u,label:w,hasReadOnlyLabel:A=!1,hasVurderingText:P=!1,name:j="begrunnelse"})=>{const $=P?"FaktaBegrunnelseTextField.Vurdering":"FaktaBegrunnelseTextField.BegrunnEndringene",D=()=>m?A?Wa.formatMessage({id:"FaktaBegrunnelseTextField.Begrunnelse"}):"":w??Wa.formatMessage({id:$});return y.jsx(ht,{value:Wa,children:(h||u)&&y.jsx(dk,{name:j,label:D(),validate:[Tn,Bk,Sk,gk],maxLength:1500,readOnly:m})})},Ek=m=>m&&Array.isArray(m)?m.length>0?m[0].begrunnelse:"":m&&!Array.isArray(m)?m.begrunnelse:"";Wn.initialValues=(m,h="begrunnelse")=>({[h]:tk(Ek(m))});Wn.transformValues=(m,h="begrunnelse")=>({begrunnelse:m[h]});Wn.__docgenInfo={description:"FaktaBegrunnelseTextField",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[{name:"aksjonspunkt",optional:!0,type:{name:"union",raw:"Aksjonspunkt[] | Aksjonspunkt",elements:[{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!0}}]}}}}],displayName:"FaktaBegrunnelseTextField",props:{isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},hasBegrunnelse:{required:!0,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:""},hasReadOnlyLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hasVurderingText:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'begrunnelse'",computed:!1}}}};const Fk=Un(yr),Nk=(m,h,u)=>!u||h?!0:!m,Zu=({isReadOnly:m,isSubmittable:h,buttonText:u,onClick:w,isSubmitting:A,isDirty:P})=>y.jsx(ht,{value:Fk,children:!m&&y.jsxs(rk,{size:"small",variant:"primary",loading:A,disabled:Nk(P,A,h),onClick:w||pk,type:w?"button":"submit",children:[!!u&&u,!u&&y.jsx(Pe,{id:"SubmitButton.ConfirmInformation"})]})});Zu.__docgenInfo={description:"FaktaSubmitButton",methods:[],displayName:"FaktaSubmitButton",props:{buttonText:{required:!1,tsType:{name:"string"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!0,tsType:{name:"boolean"},description:""}}};const Cu=Un(yr),Ik=({name:m,label:h,readOnly:u,trueLabel:w,trueContent:A,falseLabel:P,falseContent:j})=>y.jsx(vk,{name:m,label:h,validate:[Tn],isReadOnly:u,isTrueOrFalseSelection:!0,radios:[{label:w??Cu.formatMessage({id:"TrueFalseInput.True"}),value:"true",element:A},{label:P??Cu.formatMessage({id:"TrueFalseInput.False"}),value:"false",element:j}]});Ik.__docgenInfo={description:"",methods:[],displayName:"TrueFalseInput",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},trueLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},trueContent:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},falseLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},falseContent:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""}}};const Xu=(m,h)=>{const u=new Date(m.tom??za),w=new Date(h.tom??za);if(u>w)return-1;if(u<w)return 1;if(m.fom&&!h.fom)return-1;if(!m.fom&&h.fom)return 1;if(m.fom&&h.fom){const A=new Date(m.fom),P=new Date(h.fom);if(A>P)return-1;if(A<P)return 1}return 0};var cr={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var Lk=cr.exports,Ku;function Ok(){return Ku||(Ku=1,function(m,h){(function(){var u,w="4.17.21",A=200,P="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",j="Expected a function",$="Invalid `variable` option passed into `_.template`",D="__lodash_hash_undefined__",Q=500,M="__lodash_placeholder__",Z=1,Be=2,Ce=4,Ke=1,De=2,pe=1,wn=2,Qa=4,He=8,Hn=16,$e=32,$n=64,Ye=128,Yn=256,bt=512,il=30,sl="...",ul=800,ll=16,ei=1,ol=2,dl=3,hr=1/0,Rn=9007199254740991,gl=17976931348623157e292,br=NaN,Ve=4294967295,fl=Ve-1,ml=Ve>>>1,pl=[["ary",Ye],["bind",pe],["bindKey",wn],["curry",He],["curryRight",Hn],["flip",bt],["partial",$e],["partialRight",$n],["rearg",Yn]],xn="[object Arguments]",_r="[object Array]",vl="[object AsyncFunction]",zn="[object Boolean]",Zn="[object Date]",kl="[object DOMException]",qr="[object Error]",Ar="[object Function]",ni="[object GeneratorFunction]",Se="[object Map]",Xn="[object Number]",cl="[object Null]",ze="[object Object]",ri="[object Promise]",yl="[object Proxy]",Jn="[object RegExp]",Ee="[object Set]",Qn="[object String]",Tr="[object Symbol]",hl="[object Undefined]",er="[object WeakMap]",bl="[object WeakSet]",nr="[object ArrayBuffer]",jn="[object DataView]",_t="[object Float32Array]",qt="[object Float64Array]",At="[object Int8Array]",Tt="[object Int16Array]",wt="[object Int32Array]",Rt="[object Uint8Array]",xt="[object Uint8ClampedArray]",jt="[object Uint16Array]",Pt="[object Uint32Array]",_l=/\b__p \+= '';/g,ql=/\b(__p \+=) '' \+/g,Al=/(__e\(.*?\)|\b__t\)) \+\n'';/g,ti=/&(?:amp|lt|gt|quot|#39);/g,ai=/[&<>"']/g,Tl=RegExp(ti.source),wl=RegExp(ai.source),Rl=/<%-([\s\S]+?)%>/g,xl=/<%([\s\S]+?)%>/g,ii=/<%=([\s\S]+?)%>/g,jl=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Pl=/^\w*$/,Bl=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Bt=/[\\^$.*+?()[\]{}|]/g,Sl=RegExp(Bt.source),St=/^\s+/,El=/\s/,Fl=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Nl=/\{\n\/\* \[wrapped with (.+)\] \*/,Il=/,? & /,Ll=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Ol=/[()=,{}\[\]\/\s]/,Ml=/\\(\\)?/g,Cl=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,si=/\w*$/,Kl=/^[-+]0x[0-9a-f]+$/i,Dl=/^0b[01]+$/i,Vl=/^\[object .+?Constructor\]$/,Ul=/^0o[0-7]+$/i,Wl=/^(?:0|[1-9]\d*)$/,Gl=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,wr=/($^)/,Hl=/['\n\r\u2028\u2029\\]/g,Rr="\\ud800-\\udfff",$l="\\u0300-\\u036f",Yl="\\ufe20-\\ufe2f",zl="\\u20d0-\\u20ff",ui=$l+Yl+zl,li="\\u2700-\\u27bf",oi="a-z\\xdf-\\xf6\\xf8-\\xff",Zl="\\xac\\xb1\\xd7\\xf7",Xl="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Jl="\\u2000-\\u206f",Ql=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",di="A-Z\\xc0-\\xd6\\xd8-\\xde",gi="\\ufe0e\\ufe0f",fi=Zl+Xl+Jl+Ql,Et="['’]",eo="["+Rr+"]",mi="["+fi+"]",xr="["+ui+"]",pi="\\d+",no="["+li+"]",vi="["+oi+"]",ki="[^"+Rr+fi+pi+li+oi+di+"]",Ft="\\ud83c[\\udffb-\\udfff]",ro="(?:"+xr+"|"+Ft+")",ci="[^"+Rr+"]",Nt="(?:\\ud83c[\\udde6-\\uddff]){2}",It="[\\ud800-\\udbff][\\udc00-\\udfff]",Pn="["+di+"]",yi="\\u200d",hi="(?:"+vi+"|"+ki+")",to="(?:"+Pn+"|"+ki+")",bi="(?:"+Et+"(?:d|ll|m|re|s|t|ve))?",_i="(?:"+Et+"(?:D|LL|M|RE|S|T|VE))?",qi=ro+"?",Ai="["+gi+"]?",ao="(?:"+yi+"(?:"+[ci,Nt,It].join("|")+")"+Ai+qi+")*",io="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",so="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Ti=Ai+qi+ao,uo="(?:"+[no,Nt,It].join("|")+")"+Ti,lo="(?:"+[ci+xr+"?",xr,Nt,It,eo].join("|")+")",oo=RegExp(Et,"g"),go=RegExp(xr,"g"),Lt=RegExp(Ft+"(?="+Ft+")|"+lo+Ti,"g"),fo=RegExp([Pn+"?"+vi+"+"+bi+"(?="+[mi,Pn,"$"].join("|")+")",to+"+"+_i+"(?="+[mi,Pn+hi,"$"].join("|")+")",Pn+"?"+hi+"+"+bi,Pn+"+"+_i,so,io,pi,uo].join("|"),"g"),mo=RegExp("["+yi+Rr+ui+gi+"]"),po=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,vo=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],ko=-1,G={};G[_t]=G[qt]=G[At]=G[Tt]=G[wt]=G[Rt]=G[xt]=G[jt]=G[Pt]=!0,G[xn]=G[_r]=G[nr]=G[zn]=G[jn]=G[Zn]=G[qr]=G[Ar]=G[Se]=G[Xn]=G[ze]=G[Jn]=G[Ee]=G[Qn]=G[er]=!1;var W={};W[xn]=W[_r]=W[nr]=W[jn]=W[zn]=W[Zn]=W[_t]=W[qt]=W[At]=W[Tt]=W[wt]=W[Se]=W[Xn]=W[ze]=W[Jn]=W[Ee]=W[Qn]=W[Tr]=W[Rt]=W[xt]=W[jt]=W[Pt]=!0,W[qr]=W[Ar]=W[er]=!1;var co={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},yo={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ho={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},bo={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},_o=parseFloat,qo=parseInt,wi=typeof pt=="object"&&pt&&pt.Object===Object&&pt,Ao=typeof self=="object"&&self&&self.Object===Object&&self,te=wi||Ao||Function("return this")(),Ot=h&&!h.nodeType&&h,vn=Ot&&!0&&m&&!m.nodeType&&m,Ri=vn&&vn.exports===Ot,Mt=Ri&&wi.process,_e=function(){try{var d=vn&&vn.require&&vn.require("util").types;return d||Mt&&Mt.binding&&Mt.binding("util")}catch{}}(),xi=_e&&_e.isArrayBuffer,ji=_e&&_e.isDate,Pi=_e&&_e.isMap,Bi=_e&&_e.isRegExp,Si=_e&&_e.isSet,Ei=_e&&_e.isTypedArray;function ve(d,p,f){switch(f.length){case 0:return d.call(p);case 1:return d.call(p,f[0]);case 2:return d.call(p,f[0],f[1]);case 3:return d.call(p,f[0],f[1],f[2])}return d.apply(p,f)}function To(d,p,f,_){for(var B=-1,C=d==null?0:d.length;++B<C;){var ee=d[B];p(_,ee,f(ee),d)}return _}function qe(d,p){for(var f=-1,_=d==null?0:d.length;++f<_&&p(d[f],f,d)!==!1;);return d}function wo(d,p){for(var f=d==null?0:d.length;f--&&p(d[f],f,d)!==!1;);return d}function Fi(d,p){for(var f=-1,_=d==null?0:d.length;++f<_;)if(!p(d[f],f,d))return!1;return!0}function sn(d,p){for(var f=-1,_=d==null?0:d.length,B=0,C=[];++f<_;){var ee=d[f];p(ee,f,d)&&(C[B++]=ee)}return C}function jr(d,p){var f=d==null?0:d.length;return!!f&&Bn(d,p,0)>-1}function Ct(d,p,f){for(var _=-1,B=d==null?0:d.length;++_<B;)if(f(p,d[_]))return!0;return!1}function H(d,p){for(var f=-1,_=d==null?0:d.length,B=Array(_);++f<_;)B[f]=p(d[f],f,d);return B}function un(d,p){for(var f=-1,_=p.length,B=d.length;++f<_;)d[B+f]=p[f];return d}function Kt(d,p,f,_){var B=-1,C=d==null?0:d.length;for(_&&C&&(f=d[++B]);++B<C;)f=p(f,d[B],B,d);return f}function Ro(d,p,f,_){var B=d==null?0:d.length;for(_&&B&&(f=d[--B]);B--;)f=p(f,d[B],B,d);return f}function Dt(d,p){for(var f=-1,_=d==null?0:d.length;++f<_;)if(p(d[f],f,d))return!0;return!1}var xo=Vt("length");function jo(d){return d.split("")}function Po(d){return d.match(Ll)||[]}function Ni(d,p,f){var _;return f(d,function(B,C,ee){if(p(B,C,ee))return _=C,!1}),_}function Pr(d,p,f,_){for(var B=d.length,C=f+(_?1:-1);_?C--:++C<B;)if(p(d[C],C,d))return C;return-1}function Bn(d,p,f){return p===p?Do(d,p,f):Pr(d,Ii,f)}function Bo(d,p,f,_){for(var B=f-1,C=d.length;++B<C;)if(_(d[B],p))return B;return-1}function Ii(d){return d!==d}function Li(d,p){var f=d==null?0:d.length;return f?Wt(d,p)/f:br}function Vt(d){return function(p){return p==null?u:p[d]}}function Ut(d){return function(p){return d==null?u:d[p]}}function Oi(d,p,f,_,B){return B(d,function(C,ee,U){f=_?(_=!1,C):p(f,C,ee,U)}),f}function So(d,p){var f=d.length;for(d.sort(p);f--;)d[f]=d[f].value;return d}function Wt(d,p){for(var f,_=-1,B=d.length;++_<B;){var C=p(d[_]);C!==u&&(f=f===u?C:f+C)}return f}function Gt(d,p){for(var f=-1,_=Array(d);++f<d;)_[f]=p(f);return _}function Eo(d,p){return H(p,function(f){return[f,d[f]]})}function Mi(d){return d&&d.slice(0,Vi(d)+1).replace(St,"")}function ke(d){return function(p){return d(p)}}function Ht(d,p){return H(p,function(f){return d[f]})}function rr(d,p){return d.has(p)}function Ci(d,p){for(var f=-1,_=d.length;++f<_&&Bn(p,d[f],0)>-1;);return f}function Ki(d,p){for(var f=d.length;f--&&Bn(p,d[f],0)>-1;);return f}function Fo(d,p){for(var f=d.length,_=0;f--;)d[f]===p&&++_;return _}var No=Ut(co),Io=Ut(yo);function Lo(d){return"\\"+bo[d]}function Oo(d,p){return d==null?u:d[p]}function Sn(d){return mo.test(d)}function Mo(d){return po.test(d)}function Co(d){for(var p,f=[];!(p=d.next()).done;)f.push(p.value);return f}function $t(d){var p=-1,f=Array(d.size);return d.forEach(function(_,B){f[++p]=[B,_]}),f}function Di(d,p){return function(f){return d(p(f))}}function ln(d,p){for(var f=-1,_=d.length,B=0,C=[];++f<_;){var ee=d[f];(ee===p||ee===M)&&(d[f]=M,C[B++]=f)}return C}function Br(d){var p=-1,f=Array(d.size);return d.forEach(function(_){f[++p]=_}),f}function Ko(d){var p=-1,f=Array(d.size);return d.forEach(function(_){f[++p]=[_,_]}),f}function Do(d,p,f){for(var _=f-1,B=d.length;++_<B;)if(d[_]===p)return _;return-1}function Vo(d,p,f){for(var _=f+1;_--;)if(d[_]===p)return _;return _}function En(d){return Sn(d)?Wo(d):xo(d)}function Fe(d){return Sn(d)?Go(d):jo(d)}function Vi(d){for(var p=d.length;p--&&El.test(d.charAt(p)););return p}var Uo=Ut(ho);function Wo(d){for(var p=Lt.lastIndex=0;Lt.test(d);)++p;return p}function Go(d){return d.match(Lt)||[]}function Ho(d){return d.match(fo)||[]}var $o=function d(p){p=p==null?te:Fn.defaults(te.Object(),p,Fn.pick(te,vo));var f=p.Array,_=p.Date,B=p.Error,C=p.Function,ee=p.Math,U=p.Object,Yt=p.RegExp,Yo=p.String,Ae=p.TypeError,Sr=f.prototype,zo=C.prototype,Nn=U.prototype,Er=p["__core-js_shared__"],Fr=zo.toString,V=Nn.hasOwnProperty,Zo=0,Ui=function(){var e=/[^.]+$/.exec(Er&&Er.keys&&Er.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Nr=Nn.toString,Xo=Fr.call(U),Jo=te._,Qo=Yt("^"+Fr.call(V).replace(Bt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ir=Ri?p.Buffer:u,on=p.Symbol,Lr=p.Uint8Array,Wi=Ir?Ir.allocUnsafe:u,Or=Di(U.getPrototypeOf,U),Gi=U.create,Hi=Nn.propertyIsEnumerable,Mr=Sr.splice,$i=on?on.isConcatSpreadable:u,tr=on?on.iterator:u,kn=on?on.toStringTag:u,Cr=function(){try{var e=_n(U,"defineProperty");return e({},"",{}),e}catch{}}(),ed=p.clearTimeout!==te.clearTimeout&&p.clearTimeout,nd=_&&_.now!==te.Date.now&&_.now,rd=p.setTimeout!==te.setTimeout&&p.setTimeout,Kr=ee.ceil,Dr=ee.floor,zt=U.getOwnPropertySymbols,td=Ir?Ir.isBuffer:u,Yi=p.isFinite,ad=Sr.join,id=Di(U.keys,U),ne=ee.max,ie=ee.min,sd=_.now,ud=p.parseInt,zi=ee.random,ld=Sr.reverse,Zt=_n(p,"DataView"),ar=_n(p,"Map"),Xt=_n(p,"Promise"),In=_n(p,"Set"),ir=_n(p,"WeakMap"),sr=_n(U,"create"),Vr=ir&&new ir,Ln={},od=qn(Zt),dd=qn(ar),gd=qn(Xt),fd=qn(In),md=qn(ir),Ur=on?on.prototype:u,ur=Ur?Ur.valueOf:u,Zi=Ur?Ur.toString:u;function i(e){if(z(e)&&!S(e)&&!(e instanceof L)){if(e instanceof Te)return e;if(V.call(e,"__wrapped__"))return Xs(e)}return new Te(e)}var On=function(){function e(){}return function(n){if(!Y(n))return{};if(Gi)return Gi(n);e.prototype=n;var r=new e;return e.prototype=u,r}}();function Wr(){}function Te(e,n){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!n,this.__index__=0,this.__values__=u}i.templateSettings={escape:Rl,evaluate:xl,interpolate:ii,variable:"",imports:{_:i}},i.prototype=Wr.prototype,i.prototype.constructor=i,Te.prototype=On(Wr.prototype),Te.prototype.constructor=Te;function L(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Ve,this.__views__=[]}function pd(){var e=new L(this.__wrapped__);return e.__actions__=de(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=de(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=de(this.__views__),e}function vd(){if(this.__filtered__){var e=new L(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function kd(){var e=this.__wrapped__.value(),n=this.__dir__,r=S(e),t=n<0,a=r?e.length:0,s=jg(0,a,this.__views__),l=s.start,o=s.end,g=o-l,v=t?o:l-1,k=this.__iteratees__,c=k.length,b=0,q=ie(g,this.__takeCount__);if(!r||!t&&a==g&&q==g)return bs(e,this.__actions__);var R=[];e:for(;g--&&b<q;){v+=n;for(var F=-1,x=e[v];++F<c;){var I=k[F],O=I.iteratee,he=I.type,oe=O(x);if(he==ol)x=oe;else if(!oe){if(he==ei)continue e;break e}}R[b++]=x}return R}L.prototype=On(Wr.prototype),L.prototype.constructor=L;function cn(e){var n=-1,r=e==null?0:e.length;for(this.clear();++n<r;){var t=e[n];this.set(t[0],t[1])}}function cd(){this.__data__=sr?sr(null):{},this.size=0}function yd(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n}function hd(e){var n=this.__data__;if(sr){var r=n[e];return r===D?u:r}return V.call(n,e)?n[e]:u}function bd(e){var n=this.__data__;return sr?n[e]!==u:V.call(n,e)}function _d(e,n){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=sr&&n===u?D:n,this}cn.prototype.clear=cd,cn.prototype.delete=yd,cn.prototype.get=hd,cn.prototype.has=bd,cn.prototype.set=_d;function Ze(e){var n=-1,r=e==null?0:e.length;for(this.clear();++n<r;){var t=e[n];this.set(t[0],t[1])}}function qd(){this.__data__=[],this.size=0}function Ad(e){var n=this.__data__,r=Gr(n,e);if(r<0)return!1;var t=n.length-1;return r==t?n.pop():Mr.call(n,r,1),--this.size,!0}function Td(e){var n=this.__data__,r=Gr(n,e);return r<0?u:n[r][1]}function wd(e){return Gr(this.__data__,e)>-1}function Rd(e,n){var r=this.__data__,t=Gr(r,e);return t<0?(++this.size,r.push([e,n])):r[t][1]=n,this}Ze.prototype.clear=qd,Ze.prototype.delete=Ad,Ze.prototype.get=Td,Ze.prototype.has=wd,Ze.prototype.set=Rd;function Xe(e){var n=-1,r=e==null?0:e.length;for(this.clear();++n<r;){var t=e[n];this.set(t[0],t[1])}}function xd(){this.size=0,this.__data__={hash:new cn,map:new(ar||Ze),string:new cn}}function jd(e){var n=tt(this,e).delete(e);return this.size-=n?1:0,n}function Pd(e){return tt(this,e).get(e)}function Bd(e){return tt(this,e).has(e)}function Sd(e,n){var r=tt(this,e),t=r.size;return r.set(e,n),this.size+=r.size==t?0:1,this}Xe.prototype.clear=xd,Xe.prototype.delete=jd,Xe.prototype.get=Pd,Xe.prototype.has=Bd,Xe.prototype.set=Sd;function yn(e){var n=-1,r=e==null?0:e.length;for(this.__data__=new Xe;++n<r;)this.add(e[n])}function Ed(e){return this.__data__.set(e,D),this}function Fd(e){return this.__data__.has(e)}yn.prototype.add=yn.prototype.push=Ed,yn.prototype.has=Fd;function Ne(e){var n=this.__data__=new Ze(e);this.size=n.size}function Nd(){this.__data__=new Ze,this.size=0}function Id(e){var n=this.__data__,r=n.delete(e);return this.size=n.size,r}function Ld(e){return this.__data__.get(e)}function Od(e){return this.__data__.has(e)}function Md(e,n){var r=this.__data__;if(r instanceof Ze){var t=r.__data__;if(!ar||t.length<A-1)return t.push([e,n]),this.size=++r.size,this;r=this.__data__=new Xe(t)}return r.set(e,n),this.size=r.size,this}Ne.prototype.clear=Nd,Ne.prototype.delete=Id,Ne.prototype.get=Ld,Ne.prototype.has=Od,Ne.prototype.set=Md;function Xi(e,n){var r=S(e),t=!r&&An(e),a=!r&&!t&&pn(e),s=!r&&!t&&!a&&Dn(e),l=r||t||a||s,o=l?Gt(e.length,Yo):[],g=o.length;for(var v in e)(n||V.call(e,v))&&!(l&&(v=="length"||a&&(v=="offset"||v=="parent")||s&&(v=="buffer"||v=="byteLength"||v=="byteOffset")||nn(v,g)))&&o.push(v);return o}function Ji(e){var n=e.length;return n?e[la(0,n-1)]:u}function Cd(e,n){return at(de(e),hn(n,0,e.length))}function Kd(e){return at(de(e))}function Jt(e,n,r){(r!==u&&!Ie(e[n],r)||r===u&&!(n in e))&&Je(e,n,r)}function lr(e,n,r){var t=e[n];(!(V.call(e,n)&&Ie(t,r))||r===u&&!(n in e))&&Je(e,n,r)}function Gr(e,n){for(var r=e.length;r--;)if(Ie(e[r][0],n))return r;return-1}function Dd(e,n,r,t){return dn(e,function(a,s,l){n(t,a,r(a),l)}),t}function Qi(e,n){return e&&We(n,re(n),e)}function Vd(e,n){return e&&We(n,fe(n),e)}function Je(e,n,r){n=="__proto__"&&Cr?Cr(e,n,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[n]=r}function Qt(e,n){for(var r=-1,t=n.length,a=f(t),s=e==null;++r<t;)a[r]=s?u:Fa(e,n[r]);return a}function hn(e,n,r){return e===e&&(r!==u&&(e=e<=r?e:r),n!==u&&(e=e>=n?e:n)),e}function we(e,n,r,t,a,s){var l,o=n&Z,g=n&Be,v=n&Ce;if(r&&(l=a?r(e,t,a,s):r(e)),l!==u)return l;if(!Y(e))return e;var k=S(e);if(k){if(l=Bg(e),!o)return de(e,l)}else{var c=se(e),b=c==Ar||c==ni;if(pn(e))return As(e,o);if(c==ze||c==xn||b&&!a){if(l=g||b?{}:Vs(e),!o)return g?hg(e,Vd(l,e)):yg(e,Qi(l,e))}else{if(!W[c])return a?e:{};l=Sg(e,c,o)}}s||(s=new Ne);var q=s.get(e);if(q)return q;s.set(e,l),cu(e)?e.forEach(function(x){l.add(we(x,n,r,x,e,s))}):vu(e)&&e.forEach(function(x,I){l.set(I,we(x,n,r,I,e,s))});var R=v?g?ha:ya:g?fe:re,F=k?u:R(e);return qe(F||e,function(x,I){F&&(I=x,x=e[I]),lr(l,I,we(x,n,r,I,e,s))}),l}function Ud(e){var n=re(e);return function(r){return es(r,e,n)}}function es(e,n,r){var t=r.length;if(e==null)return!t;for(e=U(e);t--;){var a=r[t],s=n[a],l=e[a];if(l===u&&!(a in e)||!s(l))return!1}return!0}function ns(e,n,r){if(typeof e!="function")throw new Ae(j);return vr(function(){e.apply(u,r)},n)}function or(e,n,r,t){var a=-1,s=jr,l=!0,o=e.length,g=[],v=n.length;if(!o)return g;r&&(n=H(n,ke(r))),t?(s=Ct,l=!1):n.length>=A&&(s=rr,l=!1,n=new yn(n));e:for(;++a<o;){var k=e[a],c=r==null?k:r(k);if(k=t||k!==0?k:0,l&&c===c){for(var b=v;b--;)if(n[b]===c)continue e;g.push(k)}else s(n,c,t)||g.push(k)}return g}var dn=js(Ue),rs=js(na,!0);function Wd(e,n){var r=!0;return dn(e,function(t,a,s){return r=!!n(t,a,s),r}),r}function Hr(e,n,r){for(var t=-1,a=e.length;++t<a;){var s=e[t],l=n(s);if(l!=null&&(o===u?l===l&&!ye(l):r(l,o)))var o=l,g=s}return g}function Gd(e,n,r,t){var a=e.length;for(r=E(r),r<0&&(r=-r>a?0:a+r),t=t===u||t>a?a:E(t),t<0&&(t+=a),t=r>t?0:hu(t);r<t;)e[r++]=n;return e}function ts(e,n){var r=[];return dn(e,function(t,a,s){n(t,a,s)&&r.push(t)}),r}function ae(e,n,r,t,a){var s=-1,l=e.length;for(r||(r=Fg),a||(a=[]);++s<l;){var o=e[s];n>0&&r(o)?n>1?ae(o,n-1,r,t,a):un(a,o):t||(a[a.length]=o)}return a}var ea=Ps(),as=Ps(!0);function Ue(e,n){return e&&ea(e,n,re)}function na(e,n){return e&&as(e,n,re)}function $r(e,n){return sn(n,function(r){return rn(e[r])})}function bn(e,n){n=fn(n,e);for(var r=0,t=n.length;e!=null&&r<t;)e=e[Ge(n[r++])];return r&&r==t?e:u}function is(e,n,r){var t=n(e);return S(e)?t:un(t,r(e))}function ue(e){return e==null?e===u?hl:cl:kn&&kn in U(e)?xg(e):Kg(e)}function ra(e,n){return e>n}function Hd(e,n){return e!=null&&V.call(e,n)}function $d(e,n){return e!=null&&n in U(e)}function Yd(e,n,r){return e>=ie(n,r)&&e<ne(n,r)}function ta(e,n,r){for(var t=r?Ct:jr,a=e[0].length,s=e.length,l=s,o=f(s),g=1/0,v=[];l--;){var k=e[l];l&&n&&(k=H(k,ke(n))),g=ie(k.length,g),o[l]=!r&&(n||a>=120&&k.length>=120)?new yn(l&&k):u}k=e[0];var c=-1,b=o[0];e:for(;++c<a&&v.length<g;){var q=k[c],R=n?n(q):q;if(q=r||q!==0?q:0,!(b?rr(b,R):t(v,R,r))){for(l=s;--l;){var F=o[l];if(!(F?rr(F,R):t(e[l],R,r)))continue e}b&&b.push(R),v.push(q)}}return v}function zd(e,n,r,t){return Ue(e,function(a,s,l){n(t,r(a),s,l)}),t}function dr(e,n,r){n=fn(n,e),e=Hs(e,n);var t=e==null?e:e[Ge(xe(n))];return t==null?u:ve(t,e,r)}function ss(e){return z(e)&&ue(e)==xn}function Zd(e){return z(e)&&ue(e)==nr}function Xd(e){return z(e)&&ue(e)==Zn}function gr(e,n,r,t,a){return e===n?!0:e==null||n==null||!z(e)&&!z(n)?e!==e&&n!==n:Jd(e,n,r,t,gr,a)}function Jd(e,n,r,t,a,s){var l=S(e),o=S(n),g=l?_r:se(e),v=o?_r:se(n);g=g==xn?ze:g,v=v==xn?ze:v;var k=g==ze,c=v==ze,b=g==v;if(b&&pn(e)){if(!pn(n))return!1;l=!0,k=!1}if(b&&!k)return s||(s=new Ne),l||Dn(e)?Cs(e,n,r,t,a,s):wg(e,n,g,r,t,a,s);if(!(r&Ke)){var q=k&&V.call(e,"__wrapped__"),R=c&&V.call(n,"__wrapped__");if(q||R){var F=q?e.value():e,x=R?n.value():n;return s||(s=new Ne),a(F,x,r,t,s)}}return b?(s||(s=new Ne),Rg(e,n,r,t,a,s)):!1}function Qd(e){return z(e)&&se(e)==Se}function aa(e,n,r,t){var a=r.length,s=a,l=!t;if(e==null)return!s;for(e=U(e);a--;){var o=r[a];if(l&&o[2]?o[1]!==e[o[0]]:!(o[0]in e))return!1}for(;++a<s;){o=r[a];var g=o[0],v=e[g],k=o[1];if(l&&o[2]){if(v===u&&!(g in e))return!1}else{var c=new Ne;if(t)var b=t(v,k,g,e,n,c);if(!(b===u?gr(k,v,Ke|De,t,c):b))return!1}}return!0}function us(e){if(!Y(e)||Ig(e))return!1;var n=rn(e)?Qo:Vl;return n.test(qn(e))}function eg(e){return z(e)&&ue(e)==Jn}function ng(e){return z(e)&&se(e)==Ee}function rg(e){return z(e)&&dt(e.length)&&!!G[ue(e)]}function ls(e){return typeof e=="function"?e:e==null?me:typeof e=="object"?S(e)?gs(e[0],e[1]):ds(e):Bu(e)}function ia(e){if(!pr(e))return id(e);var n=[];for(var r in U(e))V.call(e,r)&&r!="constructor"&&n.push(r);return n}function tg(e){if(!Y(e))return Cg(e);var n=pr(e),r=[];for(var t in e)t=="constructor"&&(n||!V.call(e,t))||r.push(t);return r}function sa(e,n){return e<n}function os(e,n){var r=-1,t=ge(e)?f(e.length):[];return dn(e,function(a,s,l){t[++r]=n(a,s,l)}),t}function ds(e){var n=_a(e);return n.length==1&&n[0][2]?Ws(n[0][0],n[0][1]):function(r){return r===e||aa(r,e,n)}}function gs(e,n){return Aa(e)&&Us(n)?Ws(Ge(e),n):function(r){var t=Fa(r,e);return t===u&&t===n?Na(r,e):gr(n,t,Ke|De)}}function Yr(e,n,r,t,a){e!==n&&ea(n,function(s,l){if(a||(a=new Ne),Y(s))ag(e,n,l,r,Yr,t,a);else{var o=t?t(wa(e,l),s,l+"",e,n,a):u;o===u&&(o=s),Jt(e,l,o)}},fe)}function ag(e,n,r,t,a,s,l){var o=wa(e,r),g=wa(n,r),v=l.get(g);if(v){Jt(e,r,v);return}var k=s?s(o,g,r+"",e,n,l):u,c=k===u;if(c){var b=S(g),q=!b&&pn(g),R=!b&&!q&&Dn(g);k=g,b||q||R?S(o)?k=o:X(o)?k=de(o):q?(c=!1,k=As(g,!0)):R?(c=!1,k=Ts(g,!0)):k=[]:kr(g)||An(g)?(k=o,An(o)?k=bu(o):(!Y(o)||rn(o))&&(k=Vs(g))):c=!1}c&&(l.set(g,k),a(k,g,t,s,l),l.delete(g)),Jt(e,r,k)}function fs(e,n){var r=e.length;if(r)return n+=n<0?r:0,nn(n,r)?e[n]:u}function ms(e,n,r){n.length?n=H(n,function(s){return S(s)?function(l){return bn(l,s.length===1?s[0]:s)}:s}):n=[me];var t=-1;n=H(n,ke(T()));var a=os(e,function(s,l,o){var g=H(n,function(v){return v(s)});return{criteria:g,index:++t,value:s}});return So(a,function(s,l){return cg(s,l,r)})}function ig(e,n){return ps(e,n,function(r,t){return Na(e,t)})}function ps(e,n,r){for(var t=-1,a=n.length,s={};++t<a;){var l=n[t],o=bn(e,l);r(o,l)&&fr(s,fn(l,e),o)}return s}function sg(e){return function(n){return bn(n,e)}}function ua(e,n,r,t){var a=t?Bo:Bn,s=-1,l=n.length,o=e;for(e===n&&(n=de(n)),r&&(o=H(e,ke(r)));++s<l;)for(var g=0,v=n[s],k=r?r(v):v;(g=a(o,k,g,t))>-1;)o!==e&&Mr.call(o,g,1),Mr.call(e,g,1);return e}function vs(e,n){for(var r=e?n.length:0,t=r-1;r--;){var a=n[r];if(r==t||a!==s){var s=a;nn(a)?Mr.call(e,a,1):ga(e,a)}}return e}function la(e,n){return e+Dr(zi()*(n-e+1))}function ug(e,n,r,t){for(var a=-1,s=ne(Kr((n-e)/(r||1)),0),l=f(s);s--;)l[t?s:++a]=e,e+=r;return l}function oa(e,n){var r="";if(!e||n<1||n>Rn)return r;do n%2&&(r+=e),n=Dr(n/2),n&&(e+=e);while(n);return r}function N(e,n){return Ra(Gs(e,n,me),e+"")}function lg(e){return Ji(Vn(e))}function og(e,n){var r=Vn(e);return at(r,hn(n,0,r.length))}function fr(e,n,r,t){if(!Y(e))return e;n=fn(n,e);for(var a=-1,s=n.length,l=s-1,o=e;o!=null&&++a<s;){var g=Ge(n[a]),v=r;if(g==="__proto__"||g==="constructor"||g==="prototype")return e;if(a!=l){var k=o[g];v=t?t(k,g,o):u,v===u&&(v=Y(k)?k:nn(n[a+1])?[]:{})}lr(o,g,v),o=o[g]}return e}var ks=Vr?function(e,n){return Vr.set(e,n),e}:me,dg=Cr?function(e,n){return Cr(e,"toString",{configurable:!0,enumerable:!1,value:La(n),writable:!0})}:me;function gg(e){return at(Vn(e))}function Re(e,n,r){var t=-1,a=e.length;n<0&&(n=-n>a?0:a+n),r=r>a?a:r,r<0&&(r+=a),a=n>r?0:r-n>>>0,n>>>=0;for(var s=f(a);++t<a;)s[t]=e[t+n];return s}function fg(e,n){var r;return dn(e,function(t,a,s){return r=n(t,a,s),!r}),!!r}function zr(e,n,r){var t=0,a=e==null?t:e.length;if(typeof n=="number"&&n===n&&a<=ml){for(;t<a;){var s=t+a>>>1,l=e[s];l!==null&&!ye(l)&&(r?l<=n:l<n)?t=s+1:a=s}return a}return da(e,n,me,r)}function da(e,n,r,t){var a=0,s=e==null?0:e.length;if(s===0)return 0;n=r(n);for(var l=n!==n,o=n===null,g=ye(n),v=n===u;a<s;){var k=Dr((a+s)/2),c=r(e[k]),b=c!==u,q=c===null,R=c===c,F=ye(c);if(l)var x=t||R;else v?x=R&&(t||b):o?x=R&&b&&(t||!q):g?x=R&&b&&!q&&(t||!F):q||F?x=!1:x=t?c<=n:c<n;x?a=k+1:s=k}return ie(s,fl)}function cs(e,n){for(var r=-1,t=e.length,a=0,s=[];++r<t;){var l=e[r],o=n?n(l):l;if(!r||!Ie(o,g)){var g=o;s[a++]=l===0?0:l}}return s}function ys(e){return typeof e=="number"?e:ye(e)?br:+e}function ce(e){if(typeof e=="string")return e;if(S(e))return H(e,ce)+"";if(ye(e))return Zi?Zi.call(e):"";var n=e+"";return n=="0"&&1/e==-1/0?"-0":n}function gn(e,n,r){var t=-1,a=jr,s=e.length,l=!0,o=[],g=o;if(r)l=!1,a=Ct;else if(s>=A){var v=n?null:Ag(e);if(v)return Br(v);l=!1,a=rr,g=new yn}else g=n?[]:o;e:for(;++t<s;){var k=e[t],c=n?n(k):k;if(k=r||k!==0?k:0,l&&c===c){for(var b=g.length;b--;)if(g[b]===c)continue e;n&&g.push(c),o.push(k)}else a(g,c,r)||(g!==o&&g.push(c),o.push(k))}return o}function ga(e,n){return n=fn(n,e),e=Hs(e,n),e==null||delete e[Ge(xe(n))]}function hs(e,n,r,t){return fr(e,n,r(bn(e,n)),t)}function Zr(e,n,r,t){for(var a=e.length,s=t?a:-1;(t?s--:++s<a)&&n(e[s],s,e););return r?Re(e,t?0:s,t?s+1:a):Re(e,t?s+1:0,t?a:s)}function bs(e,n){var r=e;return r instanceof L&&(r=r.value()),Kt(n,function(t,a){return a.func.apply(a.thisArg,un([t],a.args))},r)}function fa(e,n,r){var t=e.length;if(t<2)return t?gn(e[0]):[];for(var a=-1,s=f(t);++a<t;)for(var l=e[a],o=-1;++o<t;)o!=a&&(s[a]=or(s[a]||l,e[o],n,r));return gn(ae(s,1),n,r)}function _s(e,n,r){for(var t=-1,a=e.length,s=n.length,l={};++t<a;){var o=t<s?n[t]:u;r(l,e[t],o)}return l}function ma(e){return X(e)?e:[]}function pa(e){return typeof e=="function"?e:me}function fn(e,n){return S(e)?e:Aa(e,n)?[e]:Zs(K(e))}var mg=N;function mn(e,n,r){var t=e.length;return r=r===u?t:r,!n&&r>=t?e:Re(e,n,r)}var qs=ed||function(e){return te.clearTimeout(e)};function As(e,n){if(n)return e.slice();var r=e.length,t=Wi?Wi(r):new e.constructor(r);return e.copy(t),t}function va(e){var n=new e.constructor(e.byteLength);return new Lr(n).set(new Lr(e)),n}function pg(e,n){var r=n?va(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}function vg(e){var n=new e.constructor(e.source,si.exec(e));return n.lastIndex=e.lastIndex,n}function kg(e){return ur?U(ur.call(e)):{}}function Ts(e,n){var r=n?va(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function ws(e,n){if(e!==n){var r=e!==u,t=e===null,a=e===e,s=ye(e),l=n!==u,o=n===null,g=n===n,v=ye(n);if(!o&&!v&&!s&&e>n||s&&l&&g&&!o&&!v||t&&l&&g||!r&&g||!a)return 1;if(!t&&!s&&!v&&e<n||v&&r&&a&&!t&&!s||o&&r&&a||!l&&a||!g)return-1}return 0}function cg(e,n,r){for(var t=-1,a=e.criteria,s=n.criteria,l=a.length,o=r.length;++t<l;){var g=ws(a[t],s[t]);if(g){if(t>=o)return g;var v=r[t];return g*(v=="desc"?-1:1)}}return e.index-n.index}function Rs(e,n,r,t){for(var a=-1,s=e.length,l=r.length,o=-1,g=n.length,v=ne(s-l,0),k=f(g+v),c=!t;++o<g;)k[o]=n[o];for(;++a<l;)(c||a<s)&&(k[r[a]]=e[a]);for(;v--;)k[o++]=e[a++];return k}function xs(e,n,r,t){for(var a=-1,s=e.length,l=-1,o=r.length,g=-1,v=n.length,k=ne(s-o,0),c=f(k+v),b=!t;++a<k;)c[a]=e[a];for(var q=a;++g<v;)c[q+g]=n[g];for(;++l<o;)(b||a<s)&&(c[q+r[l]]=e[a++]);return c}function de(e,n){var r=-1,t=e.length;for(n||(n=f(t));++r<t;)n[r]=e[r];return n}function We(e,n,r,t){var a=!r;r||(r={});for(var s=-1,l=n.length;++s<l;){var o=n[s],g=t?t(r[o],e[o],o,r,e):u;g===u&&(g=e[o]),a?Je(r,o,g):lr(r,o,g)}return r}function yg(e,n){return We(e,qa(e),n)}function hg(e,n){return We(e,Ks(e),n)}function Xr(e,n){return function(r,t){var a=S(r)?To:Dd,s=n?n():{};return a(r,e,T(t,2),s)}}function Mn(e){return N(function(n,r){var t=-1,a=r.length,s=a>1?r[a-1]:u,l=a>2?r[2]:u;for(s=e.length>3&&typeof s=="function"?(a--,s):u,l&&le(r[0],r[1],l)&&(s=a<3?u:s,a=1),n=U(n);++t<a;){var o=r[t];o&&e(n,o,t,s)}return n})}function js(e,n){return function(r,t){if(r==null)return r;if(!ge(r))return e(r,t);for(var a=r.length,s=n?a:-1,l=U(r);(n?s--:++s<a)&&t(l[s],s,l)!==!1;);return r}}function Ps(e){return function(n,r,t){for(var a=-1,s=U(n),l=t(n),o=l.length;o--;){var g=l[e?o:++a];if(r(s[g],g,s)===!1)break}return n}}function bg(e,n,r){var t=n&pe,a=mr(e);function s(){var l=this&&this!==te&&this instanceof s?a:e;return l.apply(t?r:this,arguments)}return s}function Bs(e){return function(n){n=K(n);var r=Sn(n)?Fe(n):u,t=r?r[0]:n.charAt(0),a=r?mn(r,1).join(""):n.slice(1);return t[e]()+a}}function Cn(e){return function(n){return Kt(ju(xu(n).replace(oo,"")),e,"")}}function mr(e){return function(){var n=arguments;switch(n.length){case 0:return new e;case 1:return new e(n[0]);case 2:return new e(n[0],n[1]);case 3:return new e(n[0],n[1],n[2]);case 4:return new e(n[0],n[1],n[2],n[3]);case 5:return new e(n[0],n[1],n[2],n[3],n[4]);case 6:return new e(n[0],n[1],n[2],n[3],n[4],n[5]);case 7:return new e(n[0],n[1],n[2],n[3],n[4],n[5],n[6])}var r=On(e.prototype),t=e.apply(r,n);return Y(t)?t:r}}function _g(e,n,r){var t=mr(e);function a(){for(var s=arguments.length,l=f(s),o=s,g=Kn(a);o--;)l[o]=arguments[o];var v=s<3&&l[0]!==g&&l[s-1]!==g?[]:ln(l,g);if(s-=v.length,s<r)return Is(e,n,Jr,a.placeholder,u,l,v,u,u,r-s);var k=this&&this!==te&&this instanceof a?t:e;return ve(k,this,l)}return a}function Ss(e){return function(n,r,t){var a=U(n);if(!ge(n)){var s=T(r,3);n=re(n),r=function(o){return s(a[o],o,a)}}var l=e(n,r,t);return l>-1?a[s?n[l]:l]:u}}function Es(e){return en(function(n){var r=n.length,t=r,a=Te.prototype.thru;for(e&&n.reverse();t--;){var s=n[t];if(typeof s!="function")throw new Ae(j);if(a&&!l&&rt(s)=="wrapper")var l=new Te([],!0)}for(t=l?t:r;++t<r;){s=n[t];var o=rt(s),g=o=="wrapper"?ba(s):u;g&&Ta(g[0])&&g[1]==(Ye|He|$e|Yn)&&!g[4].length&&g[9]==1?l=l[rt(g[0])].apply(l,g[3]):l=s.length==1&&Ta(s)?l[o]():l.thru(s)}return function(){var v=arguments,k=v[0];if(l&&v.length==1&&S(k))return l.plant(k).value();for(var c=0,b=r?n[c].apply(this,v):k;++c<r;)b=n[c].call(this,b);return b}})}function Jr(e,n,r,t,a,s,l,o,g,v){var k=n&Ye,c=n&pe,b=n&wn,q=n&(He|Hn),R=n&bt,F=b?u:mr(e);function x(){for(var I=arguments.length,O=f(I),he=I;he--;)O[he]=arguments[he];if(q)var oe=Kn(x),be=Fo(O,oe);if(t&&(O=Rs(O,t,a,q)),s&&(O=xs(O,s,l,q)),I-=be,q&&I<v){var J=ln(O,oe);return Is(e,n,Jr,x.placeholder,r,O,J,o,g,v-I)}var Le=c?r:this,an=b?Le[e]:e;return I=O.length,o?O=Dg(O,o):R&&I>1&&O.reverse(),k&&g<I&&(O.length=g),this&&this!==te&&this instanceof x&&(an=F||mr(an)),an.apply(Le,O)}return x}function Fs(e,n){return function(r,t){return zd(r,e,n(t),{})}}function Qr(e,n){return function(r,t){var a;if(r===u&&t===u)return n;if(r!==u&&(a=r),t!==u){if(a===u)return t;typeof r=="string"||typeof t=="string"?(r=ce(r),t=ce(t)):(r=ys(r),t=ys(t)),a=e(r,t)}return a}}function ka(e){return en(function(n){return n=H(n,ke(T())),N(function(r){var t=this;return e(n,function(a){return ve(a,t,r)})})})}function et(e,n){n=n===u?" ":ce(n);var r=n.length;if(r<2)return r?oa(n,e):n;var t=oa(n,Kr(e/En(n)));return Sn(n)?mn(Fe(t),0,e).join(""):t.slice(0,e)}function qg(e,n,r,t){var a=n&pe,s=mr(e);function l(){for(var o=-1,g=arguments.length,v=-1,k=t.length,c=f(k+g),b=this&&this!==te&&this instanceof l?s:e;++v<k;)c[v]=t[v];for(;g--;)c[v++]=arguments[++o];return ve(b,a?r:this,c)}return l}function Ns(e){return function(n,r,t){return t&&typeof t!="number"&&le(n,r,t)&&(r=t=u),n=tn(n),r===u?(r=n,n=0):r=tn(r),t=t===u?n<r?1:-1:tn(t),ug(n,r,t,e)}}function nt(e){return function(n,r){return typeof n=="string"&&typeof r=="string"||(n=je(n),r=je(r)),e(n,r)}}function Is(e,n,r,t,a,s,l,o,g,v){var k=n&He,c=k?l:u,b=k?u:l,q=k?s:u,R=k?u:s;n|=k?$e:$n,n&=~(k?$n:$e),n&Qa||(n&=-4);var F=[e,n,a,q,c,R,b,o,g,v],x=r.apply(u,F);return Ta(e)&&$s(x,F),x.placeholder=t,Ys(x,e,n)}function ca(e){var n=ee[e];return function(r,t){if(r=je(r),t=t==null?0:ie(E(t),292),t&&Yi(r)){var a=(K(r)+"e").split("e"),s=n(a[0]+"e"+(+a[1]+t));return a=(K(s)+"e").split("e"),+(a[0]+"e"+(+a[1]-t))}return n(r)}}var Ag=In&&1/Br(new In([,-0]))[1]==hr?function(e){return new In(e)}:Ca;function Ls(e){return function(n){var r=se(n);return r==Se?$t(n):r==Ee?Ko(n):Eo(n,e(n))}}function Qe(e,n,r,t,a,s,l,o){var g=n&wn;if(!g&&typeof e!="function")throw new Ae(j);var v=t?t.length:0;if(v||(n&=-97,t=a=u),l=l===u?l:ne(E(l),0),o=o===u?o:E(o),v-=a?a.length:0,n&$n){var k=t,c=a;t=a=u}var b=g?u:ba(e),q=[e,n,r,t,a,k,c,s,l,o];if(b&&Mg(q,b),e=q[0],n=q[1],r=q[2],t=q[3],a=q[4],o=q[9]=q[9]===u?g?0:e.length:ne(q[9]-v,0),!o&&n&(He|Hn)&&(n&=-25),!n||n==pe)var R=bg(e,n,r);else n==He||n==Hn?R=_g(e,n,o):(n==$e||n==(pe|$e))&&!a.length?R=qg(e,n,r,t):R=Jr.apply(u,q);var F=b?ks:$s;return Ys(F(R,q),e,n)}function Os(e,n,r,t){return e===u||Ie(e,Nn[r])&&!V.call(t,r)?n:e}function Ms(e,n,r,t,a,s){return Y(e)&&Y(n)&&(s.set(n,e),Yr(e,n,u,Ms,s),s.delete(n)),e}function Tg(e){return kr(e)?u:e}function Cs(e,n,r,t,a,s){var l=r&Ke,o=e.length,g=n.length;if(o!=g&&!(l&&g>o))return!1;var v=s.get(e),k=s.get(n);if(v&&k)return v==n&&k==e;var c=-1,b=!0,q=r&De?new yn:u;for(s.set(e,n),s.set(n,e);++c<o;){var R=e[c],F=n[c];if(t)var x=l?t(F,R,c,n,e,s):t(R,F,c,e,n,s);if(x!==u){if(x)continue;b=!1;break}if(q){if(!Dt(n,function(I,O){if(!rr(q,O)&&(R===I||a(R,I,r,t,s)))return q.push(O)})){b=!1;break}}else if(!(R===F||a(R,F,r,t,s))){b=!1;break}}return s.delete(e),s.delete(n),b}function wg(e,n,r,t,a,s,l){switch(r){case jn:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case nr:return!(e.byteLength!=n.byteLength||!s(new Lr(e),new Lr(n)));case zn:case Zn:case Xn:return Ie(+e,+n);case qr:return e.name==n.name&&e.message==n.message;case Jn:case Qn:return e==n+"";case Se:var o=$t;case Ee:var g=t&Ke;if(o||(o=Br),e.size!=n.size&&!g)return!1;var v=l.get(e);if(v)return v==n;t|=De,l.set(e,n);var k=Cs(o(e),o(n),t,a,s,l);return l.delete(e),k;case Tr:if(ur)return ur.call(e)==ur.call(n)}return!1}function Rg(e,n,r,t,a,s){var l=r&Ke,o=ya(e),g=o.length,v=ya(n),k=v.length;if(g!=k&&!l)return!1;for(var c=g;c--;){var b=o[c];if(!(l?b in n:V.call(n,b)))return!1}var q=s.get(e),R=s.get(n);if(q&&R)return q==n&&R==e;var F=!0;s.set(e,n),s.set(n,e);for(var x=l;++c<g;){b=o[c];var I=e[b],O=n[b];if(t)var he=l?t(O,I,b,n,e,s):t(I,O,b,e,n,s);if(!(he===u?I===O||a(I,O,r,t,s):he)){F=!1;break}x||(x=b=="constructor")}if(F&&!x){var oe=e.constructor,be=n.constructor;oe!=be&&"constructor"in e&&"constructor"in n&&!(typeof oe=="function"&&oe instanceof oe&&typeof be=="function"&&be instanceof be)&&(F=!1)}return s.delete(e),s.delete(n),F}function en(e){return Ra(Gs(e,u,eu),e+"")}function ya(e){return is(e,re,qa)}function ha(e){return is(e,fe,Ks)}var ba=Vr?function(e){return Vr.get(e)}:Ca;function rt(e){for(var n=e.name+"",r=Ln[n],t=V.call(Ln,n)?r.length:0;t--;){var a=r[t],s=a.func;if(s==null||s==e)return a.name}return n}function Kn(e){var n=V.call(i,"placeholder")?i:e;return n.placeholder}function T(){var e=i.iteratee||Oa;return e=e===Oa?ls:e,arguments.length?e(arguments[0],arguments[1]):e}function tt(e,n){var r=e.__data__;return Ng(n)?r[typeof n=="string"?"string":"hash"]:r.map}function _a(e){for(var n=re(e),r=n.length;r--;){var t=n[r],a=e[t];n[r]=[t,a,Us(a)]}return n}function _n(e,n){var r=Oo(e,n);return us(r)?r:u}function xg(e){var n=V.call(e,kn),r=e[kn];try{e[kn]=u;var t=!0}catch{}var a=Nr.call(e);return t&&(n?e[kn]=r:delete e[kn]),a}var qa=zt?function(e){return e==null?[]:(e=U(e),sn(zt(e),function(n){return Hi.call(e,n)}))}:Ka,Ks=zt?function(e){for(var n=[];e;)un(n,qa(e)),e=Or(e);return n}:Ka,se=ue;(Zt&&se(new Zt(new ArrayBuffer(1)))!=jn||ar&&se(new ar)!=Se||Xt&&se(Xt.resolve())!=ri||In&&se(new In)!=Ee||ir&&se(new ir)!=er)&&(se=function(e){var n=ue(e),r=n==ze?e.constructor:u,t=r?qn(r):"";if(t)switch(t){case od:return jn;case dd:return Se;case gd:return ri;case fd:return Ee;case md:return er}return n});function jg(e,n,r){for(var t=-1,a=r.length;++t<a;){var s=r[t],l=s.size;switch(s.type){case"drop":e+=l;break;case"dropRight":n-=l;break;case"take":n=ie(n,e+l);break;case"takeRight":e=ne(e,n-l);break}}return{start:e,end:n}}function Pg(e){var n=e.match(Nl);return n?n[1].split(Il):[]}function Ds(e,n,r){n=fn(n,e);for(var t=-1,a=n.length,s=!1;++t<a;){var l=Ge(n[t]);if(!(s=e!=null&&r(e,l)))break;e=e[l]}return s||++t!=a?s:(a=e==null?0:e.length,!!a&&dt(a)&&nn(l,a)&&(S(e)||An(e)))}function Bg(e){var n=e.length,r=new e.constructor(n);return n&&typeof e[0]=="string"&&V.call(e,"index")&&(r.index=e.index,r.input=e.input),r}function Vs(e){return typeof e.constructor=="function"&&!pr(e)?On(Or(e)):{}}function Sg(e,n,r){var t=e.constructor;switch(n){case nr:return va(e);case zn:case Zn:return new t(+e);case jn:return pg(e,r);case _t:case qt:case At:case Tt:case wt:case Rt:case xt:case jt:case Pt:return Ts(e,r);case Se:return new t;case Xn:case Qn:return new t(e);case Jn:return vg(e);case Ee:return new t;case Tr:return kg(e)}}function Eg(e,n){var r=n.length;if(!r)return e;var t=r-1;return n[t]=(r>1?"& ":"")+n[t],n=n.join(r>2?", ":" "),e.replace(Fl,`{
/* [wrapped with `+n+`] */
`)}function Fg(e){return S(e)||An(e)||!!($i&&e&&e[$i])}function nn(e,n){var r=typeof e;return n=n??Rn,!!n&&(r=="number"||r!="symbol"&&Wl.test(e))&&e>-1&&e%1==0&&e<n}function le(e,n,r){if(!Y(r))return!1;var t=typeof n;return(t=="number"?ge(r)&&nn(n,r.length):t=="string"&&n in r)?Ie(r[n],e):!1}function Aa(e,n){if(S(e))return!1;var r=typeof e;return r=="number"||r=="symbol"||r=="boolean"||e==null||ye(e)?!0:Pl.test(e)||!jl.test(e)||n!=null&&e in U(n)}function Ng(e){var n=typeof e;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?e!=="__proto__":e===null}function Ta(e){var n=rt(e),r=i[n];if(typeof r!="function"||!(n in L.prototype))return!1;if(e===r)return!0;var t=ba(r);return!!t&&e===t[0]}function Ig(e){return!!Ui&&Ui in e}var Lg=Er?rn:Da;function pr(e){var n=e&&e.constructor,r=typeof n=="function"&&n.prototype||Nn;return e===r}function Us(e){return e===e&&!Y(e)}function Ws(e,n){return function(r){return r==null?!1:r[e]===n&&(n!==u||e in U(r))}}function Og(e){var n=lt(e,function(t){return r.size===Q&&r.clear(),t}),r=n.cache;return n}function Mg(e,n){var r=e[1],t=n[1],a=r|t,s=a<(pe|wn|Ye),l=t==Ye&&r==He||t==Ye&&r==Yn&&e[7].length<=n[8]||t==(Ye|Yn)&&n[7].length<=n[8]&&r==He;if(!(s||l))return e;t&pe&&(e[2]=n[2],a|=r&pe?0:Qa);var o=n[3];if(o){var g=e[3];e[3]=g?Rs(g,o,n[4]):o,e[4]=g?ln(e[3],M):n[4]}return o=n[5],o&&(g=e[5],e[5]=g?xs(g,o,n[6]):o,e[6]=g?ln(e[5],M):n[6]),o=n[7],o&&(e[7]=o),t&Ye&&(e[8]=e[8]==null?n[8]:ie(e[8],n[8])),e[9]==null&&(e[9]=n[9]),e[0]=n[0],e[1]=a,e}function Cg(e){var n=[];if(e!=null)for(var r in U(e))n.push(r);return n}function Kg(e){return Nr.call(e)}function Gs(e,n,r){return n=ne(n===u?e.length-1:n,0),function(){for(var t=arguments,a=-1,s=ne(t.length-n,0),l=f(s);++a<s;)l[a]=t[n+a];a=-1;for(var o=f(n+1);++a<n;)o[a]=t[a];return o[n]=r(l),ve(e,this,o)}}function Hs(e,n){return n.length<2?e:bn(e,Re(n,0,-1))}function Dg(e,n){for(var r=e.length,t=ie(n.length,r),a=de(e);t--;){var s=n[t];e[t]=nn(s,r)?a[s]:u}return e}function wa(e,n){if(!(n==="constructor"&&typeof e[n]=="function")&&n!="__proto__")return e[n]}var $s=zs(ks),vr=rd||function(e,n){return te.setTimeout(e,n)},Ra=zs(dg);function Ys(e,n,r){var t=n+"";return Ra(e,Eg(t,Vg(Pg(t),r)))}function zs(e){var n=0,r=0;return function(){var t=sd(),a=ll-(t-r);if(r=t,a>0){if(++n>=ul)return arguments[0]}else n=0;return e.apply(u,arguments)}}function at(e,n){var r=-1,t=e.length,a=t-1;for(n=n===u?t:n;++r<n;){var s=la(r,a),l=e[s];e[s]=e[r],e[r]=l}return e.length=n,e}var Zs=Og(function(e){var n=[];return e.charCodeAt(0)===46&&n.push(""),e.replace(Bl,function(r,t,a,s){n.push(a?s.replace(Ml,"$1"):t||r)}),n});function Ge(e){if(typeof e=="string"||ye(e))return e;var n=e+"";return n=="0"&&1/e==-1/0?"-0":n}function qn(e){if(e!=null){try{return Fr.call(e)}catch{}try{return e+""}catch{}}return""}function Vg(e,n){return qe(pl,function(r){var t="_."+r[0];n&r[1]&&!jr(e,t)&&e.push(t)}),e.sort()}function Xs(e){if(e instanceof L)return e.clone();var n=new Te(e.__wrapped__,e.__chain__);return n.__actions__=de(e.__actions__),n.__index__=e.__index__,n.__values__=e.__values__,n}function Ug(e,n,r){(r?le(e,n,r):n===u)?n=1:n=ne(E(n),0);var t=e==null?0:e.length;if(!t||n<1)return[];for(var a=0,s=0,l=f(Kr(t/n));a<t;)l[s++]=Re(e,a,a+=n);return l}function Wg(e){for(var n=-1,r=e==null?0:e.length,t=0,a=[];++n<r;){var s=e[n];s&&(a[t++]=s)}return a}function Gg(){var e=arguments.length;if(!e)return[];for(var n=f(e-1),r=arguments[0],t=e;t--;)n[t-1]=arguments[t];return un(S(r)?de(r):[r],ae(n,1))}var Hg=N(function(e,n){return X(e)?or(e,ae(n,1,X,!0)):[]}),$g=N(function(e,n){var r=xe(n);return X(r)&&(r=u),X(e)?or(e,ae(n,1,X,!0),T(r,2)):[]}),Yg=N(function(e,n){var r=xe(n);return X(r)&&(r=u),X(e)?or(e,ae(n,1,X,!0),u,r):[]});function zg(e,n,r){var t=e==null?0:e.length;return t?(n=r||n===u?1:E(n),Re(e,n<0?0:n,t)):[]}function Zg(e,n,r){var t=e==null?0:e.length;return t?(n=r||n===u?1:E(n),n=t-n,Re(e,0,n<0?0:n)):[]}function Xg(e,n){return e&&e.length?Zr(e,T(n,3),!0,!0):[]}function Jg(e,n){return e&&e.length?Zr(e,T(n,3),!0):[]}function Qg(e,n,r,t){var a=e==null?0:e.length;return a?(r&&typeof r!="number"&&le(e,n,r)&&(r=0,t=a),Gd(e,n,r,t)):[]}function Js(e,n,r){var t=e==null?0:e.length;if(!t)return-1;var a=r==null?0:E(r);return a<0&&(a=ne(t+a,0)),Pr(e,T(n,3),a)}function Qs(e,n,r){var t=e==null?0:e.length;if(!t)return-1;var a=t-1;return r!==u&&(a=E(r),a=r<0?ne(t+a,0):ie(a,t-1)),Pr(e,T(n,3),a,!0)}function eu(e){var n=e==null?0:e.length;return n?ae(e,1):[]}function ef(e){var n=e==null?0:e.length;return n?ae(e,hr):[]}function nf(e,n){var r=e==null?0:e.length;return r?(n=n===u?1:E(n),ae(e,n)):[]}function rf(e){for(var n=-1,r=e==null?0:e.length,t={};++n<r;){var a=e[n];t[a[0]]=a[1]}return t}function nu(e){return e&&e.length?e[0]:u}function tf(e,n,r){var t=e==null?0:e.length;if(!t)return-1;var a=r==null?0:E(r);return a<0&&(a=ne(t+a,0)),Bn(e,n,a)}function af(e){var n=e==null?0:e.length;return n?Re(e,0,-1):[]}var sf=N(function(e){var n=H(e,ma);return n.length&&n[0]===e[0]?ta(n):[]}),uf=N(function(e){var n=xe(e),r=H(e,ma);return n===xe(r)?n=u:r.pop(),r.length&&r[0]===e[0]?ta(r,T(n,2)):[]}),lf=N(function(e){var n=xe(e),r=H(e,ma);return n=typeof n=="function"?n:u,n&&r.pop(),r.length&&r[0]===e[0]?ta(r,u,n):[]});function of(e,n){return e==null?"":ad.call(e,n)}function xe(e){var n=e==null?0:e.length;return n?e[n-1]:u}function df(e,n,r){var t=e==null?0:e.length;if(!t)return-1;var a=t;return r!==u&&(a=E(r),a=a<0?ne(t+a,0):ie(a,t-1)),n===n?Vo(e,n,a):Pr(e,Ii,a,!0)}function gf(e,n){return e&&e.length?fs(e,E(n)):u}var ff=N(ru);function ru(e,n){return e&&e.length&&n&&n.length?ua(e,n):e}function mf(e,n,r){return e&&e.length&&n&&n.length?ua(e,n,T(r,2)):e}function pf(e,n,r){return e&&e.length&&n&&n.length?ua(e,n,u,r):e}var vf=en(function(e,n){var r=e==null?0:e.length,t=Qt(e,n);return vs(e,H(n,function(a){return nn(a,r)?+a:a}).sort(ws)),t});function kf(e,n){var r=[];if(!(e&&e.length))return r;var t=-1,a=[],s=e.length;for(n=T(n,3);++t<s;){var l=e[t];n(l,t,e)&&(r.push(l),a.push(t))}return vs(e,a),r}function xa(e){return e==null?e:ld.call(e)}function cf(e,n,r){var t=e==null?0:e.length;return t?(r&&typeof r!="number"&&le(e,n,r)?(n=0,r=t):(n=n==null?0:E(n),r=r===u?t:E(r)),Re(e,n,r)):[]}function yf(e,n){return zr(e,n)}function hf(e,n,r){return da(e,n,T(r,2))}function bf(e,n){var r=e==null?0:e.length;if(r){var t=zr(e,n);if(t<r&&Ie(e[t],n))return t}return-1}function _f(e,n){return zr(e,n,!0)}function qf(e,n,r){return da(e,n,T(r,2),!0)}function Af(e,n){var r=e==null?0:e.length;if(r){var t=zr(e,n,!0)-1;if(Ie(e[t],n))return t}return-1}function Tf(e){return e&&e.length?cs(e):[]}function wf(e,n){return e&&e.length?cs(e,T(n,2)):[]}function Rf(e){var n=e==null?0:e.length;return n?Re(e,1,n):[]}function xf(e,n,r){return e&&e.length?(n=r||n===u?1:E(n),Re(e,0,n<0?0:n)):[]}function jf(e,n,r){var t=e==null?0:e.length;return t?(n=r||n===u?1:E(n),n=t-n,Re(e,n<0?0:n,t)):[]}function Pf(e,n){return e&&e.length?Zr(e,T(n,3),!1,!0):[]}function Bf(e,n){return e&&e.length?Zr(e,T(n,3)):[]}var Sf=N(function(e){return gn(ae(e,1,X,!0))}),Ef=N(function(e){var n=xe(e);return X(n)&&(n=u),gn(ae(e,1,X,!0),T(n,2))}),Ff=N(function(e){var n=xe(e);return n=typeof n=="function"?n:u,gn(ae(e,1,X,!0),u,n)});function Nf(e){return e&&e.length?gn(e):[]}function If(e,n){return e&&e.length?gn(e,T(n,2)):[]}function Lf(e,n){return n=typeof n=="function"?n:u,e&&e.length?gn(e,u,n):[]}function ja(e){if(!(e&&e.length))return[];var n=0;return e=sn(e,function(r){if(X(r))return n=ne(r.length,n),!0}),Gt(n,function(r){return H(e,Vt(r))})}function tu(e,n){if(!(e&&e.length))return[];var r=ja(e);return n==null?r:H(r,function(t){return ve(n,u,t)})}var Of=N(function(e,n){return X(e)?or(e,n):[]}),Mf=N(function(e){return fa(sn(e,X))}),Cf=N(function(e){var n=xe(e);return X(n)&&(n=u),fa(sn(e,X),T(n,2))}),Kf=N(function(e){var n=xe(e);return n=typeof n=="function"?n:u,fa(sn(e,X),u,n)}),Df=N(ja);function Vf(e,n){return _s(e||[],n||[],lr)}function Uf(e,n){return _s(e||[],n||[],fr)}var Wf=N(function(e){var n=e.length,r=n>1?e[n-1]:u;return r=typeof r=="function"?(e.pop(),r):u,tu(e,r)});function au(e){var n=i(e);return n.__chain__=!0,n}function Gf(e,n){return n(e),e}function it(e,n){return n(e)}var Hf=en(function(e){var n=e.length,r=n?e[0]:0,t=this.__wrapped__,a=function(s){return Qt(s,e)};return n>1||this.__actions__.length||!(t instanceof L)||!nn(r)?this.thru(a):(t=t.slice(r,+r+(n?1:0)),t.__actions__.push({func:it,args:[a],thisArg:u}),new Te(t,this.__chain__).thru(function(s){return n&&!s.length&&s.push(u),s}))});function $f(){return au(this)}function Yf(){return new Te(this.value(),this.__chain__)}function zf(){this.__values__===u&&(this.__values__=yu(this.value()));var e=this.__index__>=this.__values__.length,n=e?u:this.__values__[this.__index__++];return{done:e,value:n}}function Zf(){return this}function Xf(e){for(var n,r=this;r instanceof Wr;){var t=Xs(r);t.__index__=0,t.__values__=u,n?a.__wrapped__=t:n=t;var a=t;r=r.__wrapped__}return a.__wrapped__=e,n}function Jf(){var e=this.__wrapped__;if(e instanceof L){var n=e;return this.__actions__.length&&(n=new L(this)),n=n.reverse(),n.__actions__.push({func:it,args:[xa],thisArg:u}),new Te(n,this.__chain__)}return this.thru(xa)}function Qf(){return bs(this.__wrapped__,this.__actions__)}var em=Xr(function(e,n,r){V.call(e,r)?++e[r]:Je(e,r,1)});function nm(e,n,r){var t=S(e)?Fi:Wd;return r&&le(e,n,r)&&(n=u),t(e,T(n,3))}function rm(e,n){var r=S(e)?sn:ts;return r(e,T(n,3))}var tm=Ss(Js),am=Ss(Qs);function im(e,n){return ae(st(e,n),1)}function sm(e,n){return ae(st(e,n),hr)}function um(e,n,r){return r=r===u?1:E(r),ae(st(e,n),r)}function iu(e,n){var r=S(e)?qe:dn;return r(e,T(n,3))}function su(e,n){var r=S(e)?wo:rs;return r(e,T(n,3))}var lm=Xr(function(e,n,r){V.call(e,r)?e[r].push(n):Je(e,r,[n])});function om(e,n,r,t){e=ge(e)?e:Vn(e),r=r&&!t?E(r):0;var a=e.length;return r<0&&(r=ne(a+r,0)),gt(e)?r<=a&&e.indexOf(n,r)>-1:!!a&&Bn(e,n,r)>-1}var dm=N(function(e,n,r){var t=-1,a=typeof n=="function",s=ge(e)?f(e.length):[];return dn(e,function(l){s[++t]=a?ve(n,l,r):dr(l,n,r)}),s}),gm=Xr(function(e,n,r){Je(e,r,n)});function st(e,n){var r=S(e)?H:os;return r(e,T(n,3))}function fm(e,n,r,t){return e==null?[]:(S(n)||(n=n==null?[]:[n]),r=t?u:r,S(r)||(r=r==null?[]:[r]),ms(e,n,r))}var mm=Xr(function(e,n,r){e[r?0:1].push(n)},function(){return[[],[]]});function pm(e,n,r){var t=S(e)?Kt:Oi,a=arguments.length<3;return t(e,T(n,4),r,a,dn)}function vm(e,n,r){var t=S(e)?Ro:Oi,a=arguments.length<3;return t(e,T(n,4),r,a,rs)}function km(e,n){var r=S(e)?sn:ts;return r(e,ot(T(n,3)))}function cm(e){var n=S(e)?Ji:lg;return n(e)}function ym(e,n,r){(r?le(e,n,r):n===u)?n=1:n=E(n);var t=S(e)?Cd:og;return t(e,n)}function hm(e){var n=S(e)?Kd:gg;return n(e)}function bm(e){if(e==null)return 0;if(ge(e))return gt(e)?En(e):e.length;var n=se(e);return n==Se||n==Ee?e.size:ia(e).length}function _m(e,n,r){var t=S(e)?Dt:fg;return r&&le(e,n,r)&&(n=u),t(e,T(n,3))}var qm=N(function(e,n){if(e==null)return[];var r=n.length;return r>1&&le(e,n[0],n[1])?n=[]:r>2&&le(n[0],n[1],n[2])&&(n=[n[0]]),ms(e,ae(n,1),[])}),ut=nd||function(){return te.Date.now()};function Am(e,n){if(typeof n!="function")throw new Ae(j);return e=E(e),function(){if(--e<1)return n.apply(this,arguments)}}function uu(e,n,r){return n=r?u:n,n=e&&n==null?e.length:n,Qe(e,Ye,u,u,u,u,n)}function lu(e,n){var r;if(typeof n!="function")throw new Ae(j);return e=E(e),function(){return--e>0&&(r=n.apply(this,arguments)),e<=1&&(n=u),r}}var Pa=N(function(e,n,r){var t=pe;if(r.length){var a=ln(r,Kn(Pa));t|=$e}return Qe(e,t,n,r,a)}),ou=N(function(e,n,r){var t=pe|wn;if(r.length){var a=ln(r,Kn(ou));t|=$e}return Qe(n,t,e,r,a)});function du(e,n,r){n=r?u:n;var t=Qe(e,He,u,u,u,u,u,n);return t.placeholder=du.placeholder,t}function gu(e,n,r){n=r?u:n;var t=Qe(e,Hn,u,u,u,u,u,n);return t.placeholder=gu.placeholder,t}function fu(e,n,r){var t,a,s,l,o,g,v=0,k=!1,c=!1,b=!0;if(typeof e!="function")throw new Ae(j);n=je(n)||0,Y(r)&&(k=!!r.leading,c="maxWait"in r,s=c?ne(je(r.maxWait)||0,n):s,b="trailing"in r?!!r.trailing:b);function q(J){var Le=t,an=a;return t=a=u,v=J,l=e.apply(an,Le),l}function R(J){return v=J,o=vr(I,n),k?q(J):l}function F(J){var Le=J-g,an=J-v,Su=n-Le;return c?ie(Su,s-an):Su}function x(J){var Le=J-g,an=J-v;return g===u||Le>=n||Le<0||c&&an>=s}function I(){var J=ut();if(x(J))return O(J);o=vr(I,F(J))}function O(J){return o=u,b&&t?q(J):(t=a=u,l)}function he(){o!==u&&qs(o),v=0,t=g=a=o=u}function oe(){return o===u?l:O(ut())}function be(){var J=ut(),Le=x(J);if(t=arguments,a=this,g=J,Le){if(o===u)return R(g);if(c)return qs(o),o=vr(I,n),q(g)}return o===u&&(o=vr(I,n)),l}return be.cancel=he,be.flush=oe,be}var Tm=N(function(e,n){return ns(e,1,n)}),wm=N(function(e,n,r){return ns(e,je(n)||0,r)});function Rm(e){return Qe(e,bt)}function lt(e,n){if(typeof e!="function"||n!=null&&typeof n!="function")throw new Ae(j);var r=function(){var t=arguments,a=n?n.apply(this,t):t[0],s=r.cache;if(s.has(a))return s.get(a);var l=e.apply(this,t);return r.cache=s.set(a,l)||s,l};return r.cache=new(lt.Cache||Xe),r}lt.Cache=Xe;function ot(e){if(typeof e!="function")throw new Ae(j);return function(){var n=arguments;switch(n.length){case 0:return!e.call(this);case 1:return!e.call(this,n[0]);case 2:return!e.call(this,n[0],n[1]);case 3:return!e.call(this,n[0],n[1],n[2])}return!e.apply(this,n)}}function xm(e){return lu(2,e)}var jm=mg(function(e,n){n=n.length==1&&S(n[0])?H(n[0],ke(T())):H(ae(n,1),ke(T()));var r=n.length;return N(function(t){for(var a=-1,s=ie(t.length,r);++a<s;)t[a]=n[a].call(this,t[a]);return ve(e,this,t)})}),Ba=N(function(e,n){var r=ln(n,Kn(Ba));return Qe(e,$e,u,n,r)}),mu=N(function(e,n){var r=ln(n,Kn(mu));return Qe(e,$n,u,n,r)}),Pm=en(function(e,n){return Qe(e,Yn,u,u,u,n)});function Bm(e,n){if(typeof e!="function")throw new Ae(j);return n=n===u?n:E(n),N(e,n)}function Sm(e,n){if(typeof e!="function")throw new Ae(j);return n=n==null?0:ne(E(n),0),N(function(r){var t=r[n],a=mn(r,0,n);return t&&un(a,t),ve(e,this,a)})}function Em(e,n,r){var t=!0,a=!0;if(typeof e!="function")throw new Ae(j);return Y(r)&&(t="leading"in r?!!r.leading:t,a="trailing"in r?!!r.trailing:a),fu(e,n,{leading:t,maxWait:n,trailing:a})}function Fm(e){return uu(e,1)}function Nm(e,n){return Ba(pa(n),e)}function Im(){if(!arguments.length)return[];var e=arguments[0];return S(e)?e:[e]}function Lm(e){return we(e,Ce)}function Om(e,n){return n=typeof n=="function"?n:u,we(e,Ce,n)}function Mm(e){return we(e,Z|Ce)}function Cm(e,n){return n=typeof n=="function"?n:u,we(e,Z|Ce,n)}function Km(e,n){return n==null||es(e,n,re(n))}function Ie(e,n){return e===n||e!==e&&n!==n}var Dm=nt(ra),Vm=nt(function(e,n){return e>=n}),An=ss(function(){return arguments}())?ss:function(e){return z(e)&&V.call(e,"callee")&&!Hi.call(e,"callee")},S=f.isArray,Um=xi?ke(xi):Zd;function ge(e){return e!=null&&dt(e.length)&&!rn(e)}function X(e){return z(e)&&ge(e)}function Wm(e){return e===!0||e===!1||z(e)&&ue(e)==zn}var pn=td||Da,Gm=ji?ke(ji):Xd;function Hm(e){return z(e)&&e.nodeType===1&&!kr(e)}function $m(e){if(e==null)return!0;if(ge(e)&&(S(e)||typeof e=="string"||typeof e.splice=="function"||pn(e)||Dn(e)||An(e)))return!e.length;var n=se(e);if(n==Se||n==Ee)return!e.size;if(pr(e))return!ia(e).length;for(var r in e)if(V.call(e,r))return!1;return!0}function Ym(e,n){return gr(e,n)}function zm(e,n,r){r=typeof r=="function"?r:u;var t=r?r(e,n):u;return t===u?gr(e,n,u,r):!!t}function Sa(e){if(!z(e))return!1;var n=ue(e);return n==qr||n==kl||typeof e.message=="string"&&typeof e.name=="string"&&!kr(e)}function Zm(e){return typeof e=="number"&&Yi(e)}function rn(e){if(!Y(e))return!1;var n=ue(e);return n==Ar||n==ni||n==vl||n==yl}function pu(e){return typeof e=="number"&&e==E(e)}function dt(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Rn}function Y(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}function z(e){return e!=null&&typeof e=="object"}var vu=Pi?ke(Pi):Qd;function Xm(e,n){return e===n||aa(e,n,_a(n))}function Jm(e,n,r){return r=typeof r=="function"?r:u,aa(e,n,_a(n),r)}function Qm(e){return ku(e)&&e!=+e}function ep(e){if(Lg(e))throw new B(P);return us(e)}function np(e){return e===null}function rp(e){return e==null}function ku(e){return typeof e=="number"||z(e)&&ue(e)==Xn}function kr(e){if(!z(e)||ue(e)!=ze)return!1;var n=Or(e);if(n===null)return!0;var r=V.call(n,"constructor")&&n.constructor;return typeof r=="function"&&r instanceof r&&Fr.call(r)==Xo}var Ea=Bi?ke(Bi):eg;function tp(e){return pu(e)&&e>=-9007199254740991&&e<=Rn}var cu=Si?ke(Si):ng;function gt(e){return typeof e=="string"||!S(e)&&z(e)&&ue(e)==Qn}function ye(e){return typeof e=="symbol"||z(e)&&ue(e)==Tr}var Dn=Ei?ke(Ei):rg;function ap(e){return e===u}function ip(e){return z(e)&&se(e)==er}function sp(e){return z(e)&&ue(e)==bl}var up=nt(sa),lp=nt(function(e,n){return e<=n});function yu(e){if(!e)return[];if(ge(e))return gt(e)?Fe(e):de(e);if(tr&&e[tr])return Co(e[tr]());var n=se(e),r=n==Se?$t:n==Ee?Br:Vn;return r(e)}function tn(e){if(!e)return e===0?e:0;if(e=je(e),e===hr||e===-1/0){var n=e<0?-1:1;return n*gl}return e===e?e:0}function E(e){var n=tn(e),r=n%1;return n===n?r?n-r:n:0}function hu(e){return e?hn(E(e),0,Ve):0}function je(e){if(typeof e=="number")return e;if(ye(e))return br;if(Y(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=Y(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=Mi(e);var r=Dl.test(e);return r||Ul.test(e)?qo(e.slice(2),r?2:8):Kl.test(e)?br:+e}function bu(e){return We(e,fe(e))}function op(e){return e?hn(E(e),-9007199254740991,Rn):e===0?e:0}function K(e){return e==null?"":ce(e)}var dp=Mn(function(e,n){if(pr(n)||ge(n)){We(n,re(n),e);return}for(var r in n)V.call(n,r)&&lr(e,r,n[r])}),_u=Mn(function(e,n){We(n,fe(n),e)}),ft=Mn(function(e,n,r,t){We(n,fe(n),e,t)}),gp=Mn(function(e,n,r,t){We(n,re(n),e,t)}),fp=en(Qt);function mp(e,n){var r=On(e);return n==null?r:Qi(r,n)}var pp=N(function(e,n){e=U(e);var r=-1,t=n.length,a=t>2?n[2]:u;for(a&&le(n[0],n[1],a)&&(t=1);++r<t;)for(var s=n[r],l=fe(s),o=-1,g=l.length;++o<g;){var v=l[o],k=e[v];(k===u||Ie(k,Nn[v])&&!V.call(e,v))&&(e[v]=s[v])}return e}),vp=N(function(e){return e.push(u,Ms),ve(qu,u,e)});function kp(e,n){return Ni(e,T(n,3),Ue)}function cp(e,n){return Ni(e,T(n,3),na)}function yp(e,n){return e==null?e:ea(e,T(n,3),fe)}function hp(e,n){return e==null?e:as(e,T(n,3),fe)}function bp(e,n){return e&&Ue(e,T(n,3))}function _p(e,n){return e&&na(e,T(n,3))}function qp(e){return e==null?[]:$r(e,re(e))}function Ap(e){return e==null?[]:$r(e,fe(e))}function Fa(e,n,r){var t=e==null?u:bn(e,n);return t===u?r:t}function Tp(e,n){return e!=null&&Ds(e,n,Hd)}function Na(e,n){return e!=null&&Ds(e,n,$d)}var wp=Fs(function(e,n,r){n!=null&&typeof n.toString!="function"&&(n=Nr.call(n)),e[n]=r},La(me)),Rp=Fs(function(e,n,r){n!=null&&typeof n.toString!="function"&&(n=Nr.call(n)),V.call(e,n)?e[n].push(r):e[n]=[r]},T),xp=N(dr);function re(e){return ge(e)?Xi(e):ia(e)}function fe(e){return ge(e)?Xi(e,!0):tg(e)}function jp(e,n){var r={};return n=T(n,3),Ue(e,function(t,a,s){Je(r,n(t,a,s),t)}),r}function Pp(e,n){var r={};return n=T(n,3),Ue(e,function(t,a,s){Je(r,a,n(t,a,s))}),r}var Bp=Mn(function(e,n,r){Yr(e,n,r)}),qu=Mn(function(e,n,r,t){Yr(e,n,r,t)}),Sp=en(function(e,n){var r={};if(e==null)return r;var t=!1;n=H(n,function(s){return s=fn(s,e),t||(t=s.length>1),s}),We(e,ha(e),r),t&&(r=we(r,Z|Be|Ce,Tg));for(var a=n.length;a--;)ga(r,n[a]);return r});function Ep(e,n){return Au(e,ot(T(n)))}var Fp=en(function(e,n){return e==null?{}:ig(e,n)});function Au(e,n){if(e==null)return{};var r=H(ha(e),function(t){return[t]});return n=T(n),ps(e,r,function(t,a){return n(t,a[0])})}function Np(e,n,r){n=fn(n,e);var t=-1,a=n.length;for(a||(a=1,e=u);++t<a;){var s=e==null?u:e[Ge(n[t])];s===u&&(t=a,s=r),e=rn(s)?s.call(e):s}return e}function Ip(e,n,r){return e==null?e:fr(e,n,r)}function Lp(e,n,r,t){return t=typeof t=="function"?t:u,e==null?e:fr(e,n,r,t)}var Tu=Ls(re),wu=Ls(fe);function Op(e,n,r){var t=S(e),a=t||pn(e)||Dn(e);if(n=T(n,4),r==null){var s=e&&e.constructor;a?r=t?new s:[]:Y(e)?r=rn(s)?On(Or(e)):{}:r={}}return(a?qe:Ue)(e,function(l,o,g){return n(r,l,o,g)}),r}function Mp(e,n){return e==null?!0:ga(e,n)}function Cp(e,n,r){return e==null?e:hs(e,n,pa(r))}function Kp(e,n,r,t){return t=typeof t=="function"?t:u,e==null?e:hs(e,n,pa(r),t)}function Vn(e){return e==null?[]:Ht(e,re(e))}function Dp(e){return e==null?[]:Ht(e,fe(e))}function Vp(e,n,r){return r===u&&(r=n,n=u),r!==u&&(r=je(r),r=r===r?r:0),n!==u&&(n=je(n),n=n===n?n:0),hn(je(e),n,r)}function Up(e,n,r){return n=tn(n),r===u?(r=n,n=0):r=tn(r),e=je(e),Yd(e,n,r)}function Wp(e,n,r){if(r&&typeof r!="boolean"&&le(e,n,r)&&(n=r=u),r===u&&(typeof n=="boolean"?(r=n,n=u):typeof e=="boolean"&&(r=e,e=u)),e===u&&n===u?(e=0,n=1):(e=tn(e),n===u?(n=e,e=0):n=tn(n)),e>n){var t=e;e=n,n=t}if(r||e%1||n%1){var a=zi();return ie(e+a*(n-e+_o("1e-"+((a+"").length-1))),n)}return la(e,n)}var Gp=Cn(function(e,n,r){return n=n.toLowerCase(),e+(r?Ru(n):n)});function Ru(e){return Ia(K(e).toLowerCase())}function xu(e){return e=K(e),e&&e.replace(Gl,No).replace(go,"")}function Hp(e,n,r){e=K(e),n=ce(n);var t=e.length;r=r===u?t:hn(E(r),0,t);var a=r;return r-=n.length,r>=0&&e.slice(r,a)==n}function $p(e){return e=K(e),e&&wl.test(e)?e.replace(ai,Io):e}function Yp(e){return e=K(e),e&&Sl.test(e)?e.replace(Bt,"\\$&"):e}var zp=Cn(function(e,n,r){return e+(r?"-":"")+n.toLowerCase()}),Zp=Cn(function(e,n,r){return e+(r?" ":"")+n.toLowerCase()}),Xp=Bs("toLowerCase");function Jp(e,n,r){e=K(e),n=E(n);var t=n?En(e):0;if(!n||t>=n)return e;var a=(n-t)/2;return et(Dr(a),r)+e+et(Kr(a),r)}function Qp(e,n,r){e=K(e),n=E(n);var t=n?En(e):0;return n&&t<n?e+et(n-t,r):e}function ev(e,n,r){e=K(e),n=E(n);var t=n?En(e):0;return n&&t<n?et(n-t,r)+e:e}function nv(e,n,r){return r||n==null?n=0:n&&(n=+n),ud(K(e).replace(St,""),n||0)}function rv(e,n,r){return(r?le(e,n,r):n===u)?n=1:n=E(n),oa(K(e),n)}function tv(){var e=arguments,n=K(e[0]);return e.length<3?n:n.replace(e[1],e[2])}var av=Cn(function(e,n,r){return e+(r?"_":"")+n.toLowerCase()});function iv(e,n,r){return r&&typeof r!="number"&&le(e,n,r)&&(n=r=u),r=r===u?Ve:r>>>0,r?(e=K(e),e&&(typeof n=="string"||n!=null&&!Ea(n))&&(n=ce(n),!n&&Sn(e))?mn(Fe(e),0,r):e.split(n,r)):[]}var sv=Cn(function(e,n,r){return e+(r?" ":"")+Ia(n)});function uv(e,n,r){return e=K(e),r=r==null?0:hn(E(r),0,e.length),n=ce(n),e.slice(r,r+n.length)==n}function lv(e,n,r){var t=i.templateSettings;r&&le(e,n,r)&&(n=u),e=K(e),n=ft({},n,t,Os);var a=ft({},n.imports,t.imports,Os),s=re(a),l=Ht(a,s),o,g,v=0,k=n.interpolate||wr,c="__p += '",b=Yt((n.escape||wr).source+"|"+k.source+"|"+(k===ii?Cl:wr).source+"|"+(n.evaluate||wr).source+"|$","g"),q="//# sourceURL="+(V.call(n,"sourceURL")?(n.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++ko+"]")+`
`;e.replace(b,function(x,I,O,he,oe,be){return O||(O=he),c+=e.slice(v,be).replace(Hl,Lo),I&&(o=!0,c+=`' +
__e(`+I+`) +
'`),oe&&(g=!0,c+=`';
`+oe+`;
__p += '`),O&&(c+=`' +
((__t = (`+O+`)) == null ? '' : __t) +
'`),v=be+x.length,x}),c+=`';
`;var R=V.call(n,"variable")&&n.variable;if(!R)c=`with (obj) {
`+c+`
}
`;else if(Ol.test(R))throw new B($);c=(g?c.replace(_l,""):c).replace(ql,"$1").replace(Al,"$1;"),c="function("+(R||"obj")+`) {
`+(R?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(o?", __e = _.escape":"")+(g?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+c+`return __p
}`;var F=Pu(function(){return C(s,q+"return "+c).apply(u,l)});if(F.source=c,Sa(F))throw F;return F}function ov(e){return K(e).toLowerCase()}function dv(e){return K(e).toUpperCase()}function gv(e,n,r){if(e=K(e),e&&(r||n===u))return Mi(e);if(!e||!(n=ce(n)))return e;var t=Fe(e),a=Fe(n),s=Ci(t,a),l=Ki(t,a)+1;return mn(t,s,l).join("")}function fv(e,n,r){if(e=K(e),e&&(r||n===u))return e.slice(0,Vi(e)+1);if(!e||!(n=ce(n)))return e;var t=Fe(e),a=Ki(t,Fe(n))+1;return mn(t,0,a).join("")}function mv(e,n,r){if(e=K(e),e&&(r||n===u))return e.replace(St,"");if(!e||!(n=ce(n)))return e;var t=Fe(e),a=Ci(t,Fe(n));return mn(t,a).join("")}function pv(e,n){var r=il,t=sl;if(Y(n)){var a="separator"in n?n.separator:a;r="length"in n?E(n.length):r,t="omission"in n?ce(n.omission):t}e=K(e);var s=e.length;if(Sn(e)){var l=Fe(e);s=l.length}if(r>=s)return e;var o=r-En(t);if(o<1)return t;var g=l?mn(l,0,o).join(""):e.slice(0,o);if(a===u)return g+t;if(l&&(o+=g.length-o),Ea(a)){if(e.slice(o).search(a)){var v,k=g;for(a.global||(a=Yt(a.source,K(si.exec(a))+"g")),a.lastIndex=0;v=a.exec(k);)var c=v.index;g=g.slice(0,c===u?o:c)}}else if(e.indexOf(ce(a),o)!=o){var b=g.lastIndexOf(a);b>-1&&(g=g.slice(0,b))}return g+t}function vv(e){return e=K(e),e&&Tl.test(e)?e.replace(ti,Uo):e}var kv=Cn(function(e,n,r){return e+(r?" ":"")+n.toUpperCase()}),Ia=Bs("toUpperCase");function ju(e,n,r){return e=K(e),n=r?u:n,n===u?Mo(e)?Ho(e):Po(e):e.match(n)||[]}var Pu=N(function(e,n){try{return ve(e,u,n)}catch(r){return Sa(r)?r:new B(r)}}),cv=en(function(e,n){return qe(n,function(r){r=Ge(r),Je(e,r,Pa(e[r],e))}),e});function yv(e){var n=e==null?0:e.length,r=T();return e=n?H(e,function(t){if(typeof t[1]!="function")throw new Ae(j);return[r(t[0]),t[1]]}):[],N(function(t){for(var a=-1;++a<n;){var s=e[a];if(ve(s[0],this,t))return ve(s[1],this,t)}})}function hv(e){return Ud(we(e,Z))}function La(e){return function(){return e}}function bv(e,n){return e==null||e!==e?n:e}var _v=Es(),qv=Es(!0);function me(e){return e}function Oa(e){return ls(typeof e=="function"?e:we(e,Z))}function Av(e){return ds(we(e,Z))}function Tv(e,n){return gs(e,we(n,Z))}var wv=N(function(e,n){return function(r){return dr(r,e,n)}}),Rv=N(function(e,n){return function(r){return dr(e,r,n)}});function Ma(e,n,r){var t=re(n),a=$r(n,t);r==null&&!(Y(n)&&(a.length||!t.length))&&(r=n,n=e,e=this,a=$r(n,re(n)));var s=!(Y(r)&&"chain"in r)||!!r.chain,l=rn(e);return qe(a,function(o){var g=n[o];e[o]=g,l&&(e.prototype[o]=function(){var v=this.__chain__;if(s||v){var k=e(this.__wrapped__),c=k.__actions__=de(this.__actions__);return c.push({func:g,args:arguments,thisArg:e}),k.__chain__=v,k}return g.apply(e,un([this.value()],arguments))})}),e}function xv(){return te._===this&&(te._=Jo),this}function Ca(){}function jv(e){return e=E(e),N(function(n){return fs(n,e)})}var Pv=ka(H),Bv=ka(Fi),Sv=ka(Dt);function Bu(e){return Aa(e)?Vt(Ge(e)):sg(e)}function Ev(e){return function(n){return e==null?u:bn(e,n)}}var Fv=Ns(),Nv=Ns(!0);function Ka(){return[]}function Da(){return!1}function Iv(){return{}}function Lv(){return""}function Ov(){return!0}function Mv(e,n){if(e=E(e),e<1||e>Rn)return[];var r=Ve,t=ie(e,Ve);n=T(n),e-=Ve;for(var a=Gt(t,n);++r<e;)n(r);return a}function Cv(e){return S(e)?H(e,Ge):ye(e)?[e]:de(Zs(K(e)))}function Kv(e){var n=++Zo;return K(e)+n}var Dv=Qr(function(e,n){return e+n},0),Vv=ca("ceil"),Uv=Qr(function(e,n){return e/n},1),Wv=ca("floor");function Gv(e){return e&&e.length?Hr(e,me,ra):u}function Hv(e,n){return e&&e.length?Hr(e,T(n,2),ra):u}function $v(e){return Li(e,me)}function Yv(e,n){return Li(e,T(n,2))}function zv(e){return e&&e.length?Hr(e,me,sa):u}function Zv(e,n){return e&&e.length?Hr(e,T(n,2),sa):u}var Xv=Qr(function(e,n){return e*n},1),Jv=ca("round"),Qv=Qr(function(e,n){return e-n},0);function ek(e){return e&&e.length?Wt(e,me):0}function nk(e,n){return e&&e.length?Wt(e,T(n,2)):0}return i.after=Am,i.ary=uu,i.assign=dp,i.assignIn=_u,i.assignInWith=ft,i.assignWith=gp,i.at=fp,i.before=lu,i.bind=Pa,i.bindAll=cv,i.bindKey=ou,i.castArray=Im,i.chain=au,i.chunk=Ug,i.compact=Wg,i.concat=Gg,i.cond=yv,i.conforms=hv,i.constant=La,i.countBy=em,i.create=mp,i.curry=du,i.curryRight=gu,i.debounce=fu,i.defaults=pp,i.defaultsDeep=vp,i.defer=Tm,i.delay=wm,i.difference=Hg,i.differenceBy=$g,i.differenceWith=Yg,i.drop=zg,i.dropRight=Zg,i.dropRightWhile=Xg,i.dropWhile=Jg,i.fill=Qg,i.filter=rm,i.flatMap=im,i.flatMapDeep=sm,i.flatMapDepth=um,i.flatten=eu,i.flattenDeep=ef,i.flattenDepth=nf,i.flip=Rm,i.flow=_v,i.flowRight=qv,i.fromPairs=rf,i.functions=qp,i.functionsIn=Ap,i.groupBy=lm,i.initial=af,i.intersection=sf,i.intersectionBy=uf,i.intersectionWith=lf,i.invert=wp,i.invertBy=Rp,i.invokeMap=dm,i.iteratee=Oa,i.keyBy=gm,i.keys=re,i.keysIn=fe,i.map=st,i.mapKeys=jp,i.mapValues=Pp,i.matches=Av,i.matchesProperty=Tv,i.memoize=lt,i.merge=Bp,i.mergeWith=qu,i.method=wv,i.methodOf=Rv,i.mixin=Ma,i.negate=ot,i.nthArg=jv,i.omit=Sp,i.omitBy=Ep,i.once=xm,i.orderBy=fm,i.over=Pv,i.overArgs=jm,i.overEvery=Bv,i.overSome=Sv,i.partial=Ba,i.partialRight=mu,i.partition=mm,i.pick=Fp,i.pickBy=Au,i.property=Bu,i.propertyOf=Ev,i.pull=ff,i.pullAll=ru,i.pullAllBy=mf,i.pullAllWith=pf,i.pullAt=vf,i.range=Fv,i.rangeRight=Nv,i.rearg=Pm,i.reject=km,i.remove=kf,i.rest=Bm,i.reverse=xa,i.sampleSize=ym,i.set=Ip,i.setWith=Lp,i.shuffle=hm,i.slice=cf,i.sortBy=qm,i.sortedUniq=Tf,i.sortedUniqBy=wf,i.split=iv,i.spread=Sm,i.tail=Rf,i.take=xf,i.takeRight=jf,i.takeRightWhile=Pf,i.takeWhile=Bf,i.tap=Gf,i.throttle=Em,i.thru=it,i.toArray=yu,i.toPairs=Tu,i.toPairsIn=wu,i.toPath=Cv,i.toPlainObject=bu,i.transform=Op,i.unary=Fm,i.union=Sf,i.unionBy=Ef,i.unionWith=Ff,i.uniq=Nf,i.uniqBy=If,i.uniqWith=Lf,i.unset=Mp,i.unzip=ja,i.unzipWith=tu,i.update=Cp,i.updateWith=Kp,i.values=Vn,i.valuesIn=Dp,i.without=Of,i.words=ju,i.wrap=Nm,i.xor=Mf,i.xorBy=Cf,i.xorWith=Kf,i.zip=Df,i.zipObject=Vf,i.zipObjectDeep=Uf,i.zipWith=Wf,i.entries=Tu,i.entriesIn=wu,i.extend=_u,i.extendWith=ft,Ma(i,i),i.add=Dv,i.attempt=Pu,i.camelCase=Gp,i.capitalize=Ru,i.ceil=Vv,i.clamp=Vp,i.clone=Lm,i.cloneDeep=Mm,i.cloneDeepWith=Cm,i.cloneWith=Om,i.conformsTo=Km,i.deburr=xu,i.defaultTo=bv,i.divide=Uv,i.endsWith=Hp,i.eq=Ie,i.escape=$p,i.escapeRegExp=Yp,i.every=nm,i.find=tm,i.findIndex=Js,i.findKey=kp,i.findLast=am,i.findLastIndex=Qs,i.findLastKey=cp,i.floor=Wv,i.forEach=iu,i.forEachRight=su,i.forIn=yp,i.forInRight=hp,i.forOwn=bp,i.forOwnRight=_p,i.get=Fa,i.gt=Dm,i.gte=Vm,i.has=Tp,i.hasIn=Na,i.head=nu,i.identity=me,i.includes=om,i.indexOf=tf,i.inRange=Up,i.invoke=xp,i.isArguments=An,i.isArray=S,i.isArrayBuffer=Um,i.isArrayLike=ge,i.isArrayLikeObject=X,i.isBoolean=Wm,i.isBuffer=pn,i.isDate=Gm,i.isElement=Hm,i.isEmpty=$m,i.isEqual=Ym,i.isEqualWith=zm,i.isError=Sa,i.isFinite=Zm,i.isFunction=rn,i.isInteger=pu,i.isLength=dt,i.isMap=vu,i.isMatch=Xm,i.isMatchWith=Jm,i.isNaN=Qm,i.isNative=ep,i.isNil=rp,i.isNull=np,i.isNumber=ku,i.isObject=Y,i.isObjectLike=z,i.isPlainObject=kr,i.isRegExp=Ea,i.isSafeInteger=tp,i.isSet=cu,i.isString=gt,i.isSymbol=ye,i.isTypedArray=Dn,i.isUndefined=ap,i.isWeakMap=ip,i.isWeakSet=sp,i.join=of,i.kebabCase=zp,i.last=xe,i.lastIndexOf=df,i.lowerCase=Zp,i.lowerFirst=Xp,i.lt=up,i.lte=lp,i.max=Gv,i.maxBy=Hv,i.mean=$v,i.meanBy=Yv,i.min=zv,i.minBy=Zv,i.stubArray=Ka,i.stubFalse=Da,i.stubObject=Iv,i.stubString=Lv,i.stubTrue=Ov,i.multiply=Xv,i.nth=gf,i.noConflict=xv,i.noop=Ca,i.now=ut,i.pad=Jp,i.padEnd=Qp,i.padStart=ev,i.parseInt=nv,i.random=Wp,i.reduce=pm,i.reduceRight=vm,i.repeat=rv,i.replace=tv,i.result=Np,i.round=Jv,i.runInContext=d,i.sample=cm,i.size=bm,i.snakeCase=av,i.some=_m,i.sortedIndex=yf,i.sortedIndexBy=hf,i.sortedIndexOf=bf,i.sortedLastIndex=_f,i.sortedLastIndexBy=qf,i.sortedLastIndexOf=Af,i.startCase=sv,i.startsWith=uv,i.subtract=Qv,i.sum=ek,i.sumBy=nk,i.template=lv,i.times=Mv,i.toFinite=tn,i.toInteger=E,i.toLength=hu,i.toLower=ov,i.toNumber=je,i.toSafeInteger=op,i.toString=K,i.toUpper=dv,i.trim=gv,i.trimEnd=fv,i.trimStart=mv,i.truncate=pv,i.unescape=vv,i.uniqueId=Kv,i.upperCase=kv,i.upperFirst=Ia,i.each=iu,i.eachRight=su,i.first=nu,Ma(i,function(){var e={};return Ue(i,function(n,r){V.call(i.prototype,r)||(e[r]=n)}),e}(),{chain:!1}),i.VERSION=w,qe(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){i[e].placeholder=i}),qe(["drop","take"],function(e,n){L.prototype[e]=function(r){r=r===u?1:ne(E(r),0);var t=this.__filtered__&&!n?new L(this):this.clone();return t.__filtered__?t.__takeCount__=ie(r,t.__takeCount__):t.__views__.push({size:ie(r,Ve),type:e+(t.__dir__<0?"Right":"")}),t},L.prototype[e+"Right"]=function(r){return this.reverse()[e](r).reverse()}}),qe(["filter","map","takeWhile"],function(e,n){var r=n+1,t=r==ei||r==dl;L.prototype[e]=function(a){var s=this.clone();return s.__iteratees__.push({iteratee:T(a,3),type:r}),s.__filtered__=s.__filtered__||t,s}}),qe(["head","last"],function(e,n){var r="take"+(n?"Right":"");L.prototype[e]=function(){return this[r](1).value()[0]}}),qe(["initial","tail"],function(e,n){var r="drop"+(n?"":"Right");L.prototype[e]=function(){return this.__filtered__?new L(this):this[r](1)}}),L.prototype.compact=function(){return this.filter(me)},L.prototype.find=function(e){return this.filter(e).head()},L.prototype.findLast=function(e){return this.reverse().find(e)},L.prototype.invokeMap=N(function(e,n){return typeof e=="function"?new L(this):this.map(function(r){return dr(r,e,n)})}),L.prototype.reject=function(e){return this.filter(ot(T(e)))},L.prototype.slice=function(e,n){e=E(e);var r=this;return r.__filtered__&&(e>0||n<0)?new L(r):(e<0?r=r.takeRight(-e):e&&(r=r.drop(e)),n!==u&&(n=E(n),r=n<0?r.dropRight(-n):r.take(n-e)),r)},L.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},L.prototype.toArray=function(){return this.take(Ve)},Ue(L.prototype,function(e,n){var r=/^(?:filter|find|map|reject)|While$/.test(n),t=/^(?:head|last)$/.test(n),a=i[t?"take"+(n=="last"?"Right":""):n],s=t||/^find/.test(n);a&&(i.prototype[n]=function(){var l=this.__wrapped__,o=t?[1]:arguments,g=l instanceof L,v=o[0],k=g||S(l),c=function(I){var O=a.apply(i,un([I],o));return t&&b?O[0]:O};k&&r&&typeof v=="function"&&v.length!=1&&(g=k=!1);var b=this.__chain__,q=!!this.__actions__.length,R=s&&!b,F=g&&!q;if(!s&&k){l=F?l:new L(this);var x=e.apply(l,o);return x.__actions__.push({func:it,args:[c],thisArg:u}),new Te(x,b)}return R&&F?e.apply(this,o):(x=this.thru(c),R?t?x.value()[0]:x.value():x)})}),qe(["pop","push","shift","sort","splice","unshift"],function(e){var n=Sr[e],r=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",t=/^(?:pop|shift)$/.test(e);i.prototype[e]=function(){var a=arguments;if(t&&!this.__chain__){var s=this.value();return n.apply(S(s)?s:[],a)}return this[r](function(l){return n.apply(S(l)?l:[],a)})}}),Ue(L.prototype,function(e,n){var r=i[n];if(r){var t=r.name+"";V.call(Ln,t)||(Ln[t]=[]),Ln[t].push({name:n,func:r})}}),Ln[Jr(u,wn).name]=[{name:"wrapper",func:u}],L.prototype.clone=pd,L.prototype.reverse=vd,L.prototype.value=kd,i.prototype.at=Hf,i.prototype.chain=$f,i.prototype.commit=Yf,i.prototype.next=zf,i.prototype.plant=Xf,i.prototype.reverse=Jf,i.prototype.toJSON=i.prototype.valueOf=i.prototype.value=Qf,i.prototype.first=i.prototype.head,tr&&(i.prototype[tr]=Zf),i},Fn=$o();vn?((vn.exports=Fn)._=Fn,Ot._=Fn):te._=Fn}).call(Lk)}(cr,cr.exports)),cr.exports}var Du=Ok();const Mk="NORGE",Vu=m=>m??"",Ck=m=>{const{adresselinje1:h,adresselinje2:u,adresselinje3:w,postNummer:A,poststed:P,land:j}=m,$=[h,u,w].filter(M=>!!M).join(", "),D=`${Vu(A)} ${Vu(P)}`,Q=(j==null?void 0:j.toUpperCase())!==Mk?j:void 0;return[$,D,Q].map(M=>M==null?void 0:M.trim()).filter(M=>!!M).join(", ").trim()},Bc=(m,h)=>[...m].sort(Xu).find(u=>u.adresseType===h),Sc=(m,h)=>m.length!==h.length?!1:m.every(u=>h.some(w=>Du.isEqual(u,w)))&&h.every(u=>m.some(w=>Du.isEqual(w,u)));function Kk(m){throw new Error("Uventet enum verdi: alle tilfeller skal må håndteres:",m)}const Ga=Un(yr);var Dk=(m=>(m[m.SOKNAD=0]="SOKNAD",m[m.FREG=1]="FREG",m[m.MEDL=2]="MEDL",m))(Dk||{});const Vk=m=>{switch(m){case 0:return Ga.formatMessage({id:"FaktaKilde.Soknad"});case 1:return Ga.formatMessage({id:"FaktaKilde.FREG"});case 2:return Ga.formatMessage({id:"FaktaKilde.MEDL"});default:return Kk(m)}},Ju=Me.forwardRef((m,h)=>y.jsx(Ha,{gap:"2",style:{display:"flex"},...m,ref:h}));Ju.displayName="FaktaGruppe";const Uk=({label:m,value:h,kilde:u})=>y.jsx(ct,{background:"bg-subtle",flexGrow:"1",paddingBlock:"2",paddingInline:"4",borderRadius:"medium",children:y.jsxs(Xa,{gap:"6",children:[y.jsxs("div",{children:[y.jsx($u,{size:"small",children:m}),y.jsx($a,{size:"large",children:h})]}),y.jsx(Ya,{uppercase:!0,children:Vk(u)})]})});Ju.__docgenInfo={description:"",methods:[],displayName:"FaktaGruppe"};Uk.__docgenInfo={description:"",methods:[],displayName:"FaktaBox",props:{label:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},value:{required:!0,tsType:{name:"string"},description:""},kilde:{required:!0,tsType:{name:"FaktaKilde"},description:""}}};const Wk="_boks_c3bfh_1",Gk="_harBorderLeft_c3bfh_8",Hk="_harBorderTop_c3bfh_12",Qu={boks:Wk,harBorderLeft:Gk,harBorderTop:Hk},$k=_k.bind(Qu),Yk=({harBorderTop:m=!1,harBorderLeft:h=!0,children:u})=>y.jsx("div",{className:$k(Qu.boks,{harBorderLeft:h,harBorderTop:m}),children:u});Yk.__docgenInfo={description:"",methods:[],displayName:"Boks",props:{harBorderTop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},harBorderLeft:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const el=({adresser:m,erAnnenpart:h=!1,harSammeAdresser:u=!1,adresseKodeverk:w})=>{if(u)return y.jsx(ct,{padding:"4",children:y.jsx(Eu,{textColor:"subtle",children:y.jsx(Pe,{id:"AdresseTabell.SammeAdresse"})})});const A=P=>P+1===m.length?{border:"0px"}:{};return y.jsxs(y.Fragment,{children:[m.length===0&&y.jsx(ct,{padding:"4",children:y.jsx(Eu,{textColor:"subtle",children:y.jsx(Pe,{id:"AdresseTabell.IngenAdresse",values:{erAnnenpart:h}})})}),m.length>0&&y.jsxs(Oe,{style:{tableLayout:"fixed"},children:[y.jsx(Oe.Header,{children:y.jsxs(Oe.Row,{children:[y.jsx(Oe.HeaderCell,{children:y.jsx(Pe,{id:"AdresseTabell.PeriodeLabel"})}),y.jsx(Oe.HeaderCell,{children:y.jsx(Pe,{id:"AdresseTabell.AdresseLabel"})}),y.jsx(Oe.HeaderCell,{children:y.jsx(Pe,{id:"AdresseTabell.TypeLabel"})})]})}),y.jsx(Oe.Body,{children:m.sort(Xu).map((P,j)=>{var $;return y.jsxs(Oe.Row,{children:[y.jsx(Oe.DataCell,{style:A(j),children:y.jsx(ak,{dateStringFom:P.fom,dateStringTom:P.tom===za?void 0:P.tom})}),y.jsx(Oe.DataCell,{style:A(j),children:Ck(P)}),y.jsx(Oe.DataCell,{style:A(j),children:($=w.find(D=>D.kode===P.adresseType))==null?void 0:$.navn})]},P.adresseType+P.fom+P.tom)})})]})]})};el.__docgenInfo={description:"",methods:[],displayName:"AdresseTabell",props:{adresser:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"},description:""}}};const zk=Un(yr),Zk=m=>{switch(m){case Ou.KVINNE:return Ua.female;case Ou.MANN:return Ua.male;default:return Ua.unknown}},vt=({rolle:m="BRUKER",alleKodeverk:h,harSammeAdresser:u,navn:w,kjønn:A,sivilstand:P,fødselsdato:j,dødsdato:$,adresser:D,showIcon:Q=!0})=>{var Z;const M=m==="BARN";return y.jsx(ht,{value:zk,children:y.jsx(ct,{background:"bg-subtle",padding:"4",borderRadius:"large","aria-label":w,children:y.jsxs(Xa,{gap:"1",children:[y.jsxs(Ha,{gap:"5",children:[Q&&y.jsx("div",{children:y.jsx(qk,{gender:Zk(A),isChild:M})}),y.jsxs("div",{children:[y.jsxs(Ha,{gap:"4",children:[y.jsx($u,{children:y.jsx(Pe,{id:"PersonPanel.RolleOgNavn",values:{rolle:m,navn:w}})}),M&&j&&!$&&y.jsx($a,{children:y.jsx(Pe,{id:"PersonPanel.Fodt",values:{dato:Fu(j)}})}),$&&y.jsx($a,{children:y.jsx(Pe,{id:"PersonPanel.Dod",values:{dato:Fu($)}})})]}),!M&&P&&y.jsx(Ya,{"aria-label":"Sivilstand",children:(Z=h[yt.SIVILSTAND_TYPE].find(Be=>Be.kode===P))==null?void 0:Z.navn})]})]}),y.jsxs(Ya,{children:[m==="BARN"&&y.jsx(Pe,{id:"PersonPanel.Beskrivelse.Barn",values:{rolle:m}}),m==="BRUKER"&&y.jsx(Pe,{id:"PersonPanel.Beskrivelse.Bruker",values:{rolle:m}}),m==="ANNEN_PART"&&y.jsx(Pe,{id:"PersonPanel.Beskrivelse.Annenpart",values:{rolle:m}})]}),y.jsx(el,{harSammeAdresser:u,adresser:D,adresseKodeverk:h[yt.ADRESSE_TYPE]})]})})})};vt.__docgenInfo={description:"",methods:[],displayName:"Personopplysninger",props:{rolle:{required:!1,tsType:{name:"union",raw:"'BARN' | 'BRUKER' | 'ANNEN_PART'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'BRUKER'"},{name:"literal",value:"'ANNEN_PART'"}]},description:"",defaultValue:{value:"'BRUKER'",computed:!1}},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Personadresse[]"},description:""},kjønn:{required:!1,tsType:{name:"string"},description:""},showIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const Xk=({personoversikt:{barn:m,bruker:h,annenPart:u},alleKodeverk:w})=>y.jsxs(Xa,{gap:"2",children:[m.map(A=>y.jsx(vt,{...A,alleKodeverk:w,rolle:"BARN"},A.aktoerId)),y.jsx(vt,{rolle:"BRUKER",alleKodeverk:w,...h}),u&&y.jsx(vt,{...u,rolle:"ANNEN_PART",alleKodeverk:w})]});Xk.__docgenInfo={description:"",methods:[],displayName:"PersonopplysningerForFamilie",props:{alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const nl=({erPanelValgt:m,dataState:h,children:u})=>m?h!==zu.SUCCESS?y.jsx(ik,{}):u:null;nl.__docgenInfo={description:"",methods:[],displayName:"FaktaPanelWrapper",props:{erPanelValgt:{required:!0,tsType:{name:"boolean"},description:""},dataState:{required:!0,tsType:{name:"RestApiState"},description:""},children:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const Jk="default",Qk=(m,h,u,w,A,P)=>{const[j,$]=Me.useState(!1);Me.useEffect(()=>{m({id:h})},[]);const D=w&&(P===h||A&&P===Jk),Q=sk(w);return Me.useEffect(()=>{w?m({id:h,tekst:u,erAktiv:D,harApneAksjonspunkter:A}):!w&&Q&&m({id:h}),$(D)},[Q,w,D,A]),w&&j},Uu="default",Wu="default",ec=(m,h,u,w,A,P)=>j=>{const D=(Array.isArray(j)?j:[j]).map(M=>({"@type":M.kode,...M})),Q={saksnummer:m.saksnummer,behandlingUuid:h.uuid,behandlingVersjon:h.versjon};if(D&&A&&P){if(D.length===0)throw Error("Det har oppstått en teknisk feil ved lagring av aksjonspunkter. Meld feilen i Porten.");if(P.includes(D[0].kode))return A({...Q,overstyrteAksjonspunktDtoer:D},!0).then(()=>u(Wu,Uu))}return w({...Q,bekreftedeAksjonspunktDtoer:D},!0).then(()=>u(Wu,Uu))},nc=(m,h=[])=>{const[u,w]=Me.useState(),A=Me.useContext(Pk);Me.useEffect(()=>{u&&w(void 0)},[A.behandling.versjon]);const{aksjonspunkt:P}=A.behandling,j=Me.useMemo(()=>P&&m?P.filter(M=>m.includes(M.definisjon)):[],[P,m]),$=xk(A.behandling,[],A.rettigheter,A.hasFetchError),D=Me.useMemo(()=>jk(A.behandling,j),[A.behandling.versjon,j]),Q=Me.useMemo(()=>ec(A.fagsak,A.behandling,A.oppdaterProsessStegOgFaktaPanelIUrl,A.lagreAksjonspunkter,A.lagreOverstyrteAksjonspunkter,h),[A.behandling.versjon,h]);return{behandling:A.behandling,submittable:!j.some(M=>Mu(M.status))||j.some(M=>M.kanLoses),harApneAksjonspunkter:j.some(M=>Mu(M.status)&&M.kanLoses),alleKodeverk:A.alleKodeverk,aksjonspunkter:j,readOnly:$,alleMerknaderFraBeslutter:D,submitCallback:Q,formData:u,setFormData:w}},rl=({valgtFaktaSteg:m,behandling:h,registrerFaktaPanel:u,panelEndepunkter:w=[],aksjonspunktKoder:A,overstyringApKoder:P,skalPanelVisesIMeny:j,renderPanel:$,faktaPanelKode:D,faktaPanelMenyTekst:Q})=>{const M=nc(A,P),Z=Qk(u,D,Q,j(),M.harApneAksjonspunkter,m),Be=w.map(De=>({key:De})),{data:Ce,state:Ke}=wk.useMultipleRestApi(Be,{updateTriggers:[Z,h==null?void 0:h.versjon],suspendRequest:!Z||Be.length===0,isCachingOn:!0});return y.jsx(nl,{erPanelValgt:Z,dataState:Be.length>0?Ke:zu.SUCCESS,children:$({...Ce,...M})})};rl.__docgenInfo={description:"",methods:[],displayName:"FaktaDefaultInitPanel",props:{panelEndepunkter:{required:!1,tsType:{name:"Array",elements:[{name:"RestKey",elements:[{name:"any"},{name:"any"}],raw:"RestKey<any, any>"}],raw:"RestKey<any, any>[]"},description:"",defaultValue:{value:"[]",computed:!1}},aksjonspunktKoder:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},overstyringApKoder:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},skalPanelVisesIMeny:{required:!0,tsType:{name:"signature",type:"function",raw:"() => boolean",signature:{arguments:[],return:{name:"boolean"}}},description:""},renderPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: PANEL_DATA & StandardFaktaPanelProps) => ReactElement",signature:{arguments:[{type:{name:"intersection",raw:"PANEL_DATA & StandardFaktaPanelProps",elements:[{name:"PANEL_DATA"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApneAksjonspunkter",value:{name:"boolean",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const rc="_selectWidth_1ur6m_1",tc="_leftCol_1ur6m_5",Gu={selectWidth:rc,leftCol:tc},Gn=({intl:m,readOnly:h,vergetyper:u=[],alleMerknaderFraBeslutter:w,valgtVergeType:A})=>y.jsxs(uk,{merknaderFraBeslutter:w[Ja.AVKLAR_VERGE],children:[y.jsx(kk,{name:"vergeType",className:Gu.selectWidth,label:m.formatMessage({id:"Verge.TypeVerge"}),validate:[Tn],selectValues:u.map(P=>y.jsx("option",{value:P.kode,children:P.navn},P.kode)),readOnly:h}),y.jsx(lk,{children:A&&y.jsxs(y.Fragment,{children:[y.jsx(kt,{sixteenPx:!0}),y.jsxs(Nu,{children:[y.jsx(mt,{className:Gu.leftCol,children:y.jsx(Va,{name:"navn",label:m.formatMessage({id:"Verge.Navn"}),validate:[Tn,ck],readOnly:h})}),y.jsxs(mt,{children:[A!==Za.ADVOKAT&&y.jsx(Va,{name:"fnr",label:m.formatMessage({id:"Verge.FodselsNummer"}),validate:[Tn,yk],readOnly:h}),A===Za.ADVOKAT&&y.jsx(Va,{name:"organisasjonsnummer",label:m.formatMessage({id:"Verge.Organisasjonsnummer"}),validate:[Tn],readOnly:h})]})]}),y.jsx(kt,{sixteenPx:!0}),y.jsxs(Nu,{children:[y.jsx(mt,{children:y.jsx(Iu,{name:"gyldigFom",label:m.formatMessage({id:"Verge.PeriodeFOM"}),validate:[Tn,Lu],isReadOnly:h})}),y.jsx(mt,{children:y.jsx(Iu,{name:"gyldigTom",label:m.formatMessage({id:"Verge.PeriodeTOM"}),validate:[Lu],isReadOnly:h})})]})]})})]});Gn.buildInitialValues=m=>({navn:m.navn,gyldigFom:m.gyldigFom,gyldigTom:m.gyldigTom,fnr:m.fnr,organisasjonsnummer:m.organisasjonsnummer,vergeType:m.vergeType||void 0});Gn.transformValues=m=>({vergeType:m.vergeType,navn:m.navn,fnr:m.fnr,organisasjonsnummer:m.organisasjonsnummer,gyldigFom:m.gyldigFom,gyldigTom:m.gyldigTom,kode:Ja.AVKLAR_VERGE});Gn.__docgenInfo={description:`RegistrereVergeFaktaForm

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
}`,signature:{properties:[{key:"vergeType",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fnr",value:{name:"string",required:!0}},{key:"organisasjonsnummer",value:{name:"string",required:!0}},{key:"gyldigFom",value:{name:"string",required:!0}},{key:"gyldigTom",value:{name:"string",required:!1}},{key:"kode",value:{name:"AksjonspunktKode.AVKLAR_VERGE",required:!0}}]}}}}],displayName:"RegistrereVergeFaktaForm",props:{vergetyper:{defaultValue:{value:"[]",computed:!1},required:!1}}};const ac=(m,h)=>({...Wn.initialValues(h),...Gn.buildInitialValues(m||{})}),ic=m=>({...Gn.transformValues(m),...Wn.transformValues(m)}),tl=({hasOpenAksjonspunkter:m,submittable:h,readOnly:u,alleMerknaderFraBeslutter:w,aksjonspunkter:A,verge:P,alleKodeverk:j,submitCallback:$,formData:D,setFormData:Q})=>{const M=Yu(),Z=hk({defaultValues:D||ac(P,A),shouldUnregister:!0}),Be=Z.watch("vergeType"),Ce=Z.watch("begrunnelse"),Ke=Me.useMemo(()=>j[yt.VERGE_TYPE].sort((De,pe)=>De.navn.localeCompare(pe.navn)),[j[yt.VERGE_TYPE]]);return A.length===0?null:y.jsxs(y.Fragment,{children:[m&&y.jsx(ok,{children:M.formatMessage({id:"RegistrereVergeInfoPanel.CheckInformation"})}),y.jsxs(bk,{formMethods:Z,onSubmit:De=>$(ic(De)),setDataOnUnmount:Q,children:[y.jsx(Gn,{readOnly:u,intl:M,vergetyper:Ke,valgtVergeType:Be,alleMerknaderFraBeslutter:w}),y.jsx(kt,{twentyPx:!0}),y.jsx(Wn,{isSubmittable:h,isReadOnly:u,hasBegrunnelse:!!Ce}),y.jsx(kt,{twentyPx:!0}),y.jsx(Zu,{isSubmittable:h&&!!Be,isReadOnly:u,isSubmitting:Z.formState.isSubmitting,isDirty:Z.formState.isDirty})]})]})};tl.__docgenInfo={description:`RegistrereVergeInfoPanel

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
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!1}},{key:"fnr",value:{name:"string",required:!1}},{key:"gyldigFom",value:{name:"string",required:!1}},{key:"gyldigTom",value:{name:"string",required:!1}},{key:"vergeType",value:{name:"string",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}}]}},description:""},hasOpenAksjonspunkter:{required:!0,tsType:{name:"boolean"},description:""},submittable:{required:!0,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleMerknaderFraBeslutter:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""},formData:{required:!1,tsType:{name:"any"},description:""},setFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: any) => void",signature:{arguments:[{type:{name:"any"},name:"data"}],return:{name:"void"}}},description:""}}};const sc={"RegistrereVergeInfoPanel.CheckInformation":"Fyll ut og kontroller vergeopplysninger","Verge.KontaktPerson":"Kontaktperson","Verge.Navn":"Navn","Verge.Mandat":"Mandat","Verge.FodselsNummer":"Fødselsnummer","Verge.PeriodeFOM":"Periode f.o.m.","Verge.PeriodeTOM":"Periode t.o.m.","Verge.TypeVerge":"Type verge","Verge.VergeFullmektig":"Verge/fullmektig","Verge.Soker":"Søker","Verge.BrukerErUnderTvungenForvaltning":"Søker er under tvungen forvaltning","Verge.Organisasjonsnummer":"Organisasjonsnummer"},uc=Un(sc),al=({verge:m={},aksjonspunkter:h,alleMerknaderFraBeslutter:u,alleKodeverk:w,submitCallback:A,readOnly:P,harApneAksjonspunkter:j,submittable:$,formData:D,setFormData:Q})=>y.jsx(ht,{value:uc,children:y.jsx(tl,{verge:m,aksjonspunkter:h,alleMerknaderFraBeslutter:u,hasOpenAksjonspunkter:j,alleKodeverk:w,submitCallback:A,readOnly:P,submittable:$,formData:D,setFormData:Q})});al.__docgenInfo={description:"",methods:[],displayName:"VergeFaktaIndex",props:{verge:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<TilbakekrevingKodeverkType, KodeverkMedNavn[]>"}]},description:""}}};const Hu=[Ja.AVKLAR_VERGE],lc=[Rk.VERGE],oc=({valgtFaktaSteg:m,behandling:h,registrerFaktaPanel:u})=>y.jsx(rl,{valgtFaktaSteg:m,behandling:h,registrerFaktaPanel:u,panelEndepunkter:lc,aksjonspunktKoder:Hu,faktaPanelKode:Tk.VERGE,faktaPanelMenyTekst:Yu().formatMessage({id:"FaktaInitPanel.Title.Verge"}),skalPanelVisesIMeny:()=>Hu.some(w=>Ak(w,h.aksjonspunkt)),renderPanel:w=>y.jsx(al,{...w})});oc.__docgenInfo={description:"",methods:[],displayName:"VergeFaktaInitPanel",props:{valgtFaktaSteg:{required:!1,tsType:{name:"string"},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApneAksjonspunkter",value:{name:"boolean",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};export{Yk as B,rl as F,Xk as P,Ik as T,oc as V,Zu as a,Wn as b,Kk as c,Vk as d,Dk as e,Ck as f,Bc as g,vt as h,Sc as i,Ju as j,Uk as k,Xu as s};
