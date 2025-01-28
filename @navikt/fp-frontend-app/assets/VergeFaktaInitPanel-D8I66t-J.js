import{j as y}from"./jsx-runtime-CLpGMVip.js";import{P as kt,k as Qm,j as Hi,V as Xi,L as $u,B as $i,E as zi,ah as Fu,h as zu}from"./withQueryClient-BVC_MkYB.js";import{n as Un,e as ev,M as Pe,Z as Yi,F as nv,s as Iu,b as rv,G as tv,W as iv,f as vt,z as ju,Y as ct,B as av,H as sv}from"./index.es-CR4HM-Gt.js";import{u as uv}from"./initFetch-8XkzvNiI.js";import{r as cn}from"./index-B5OHeJSP.js";import{b as lv,e as Tn,N as ov,c as fv,l as gv,E as dv,Z as cv,Q as pv,H as Vi,v as mv,M as vv,X as Nu,O as Lu,a as hv,r as yv}from"./index.es-Cy98doCm.js";import{c as pt}from"./_commonjsHelpers-Cpj98o6Y.js";import{B as ht}from"./Box-BcWQXjCo.js";import{c as kv}from"./bind-oYjWB_aQ.js";import{C as _v,W as Ui}from"./index.es-Dkwb-R9l.js";import"./aktivitetStatus-02fOJoqz.js";import{K as yt}from"./alleKodeverk-Ck9zwXaq.js";import{K as Ou}from"./Kjonnkode-C-fkzSiP.js";import{T as Le}from"./Table-ncjdBJVO.js";import{A as Ji,h as wv}from"./aksjonspunktCodes-BuBbCIxs.js";import{F as bv}from"./skjermlenkeCodes-1SvLTuBb.js";import{u as Av}from"./behandlingApi-BSCwwgfH.js";import{i as Mu}from"./aksjonspunktStatus-xM4O_ZUY.js";import{e as Tv,g as Rv}from"./useStandardProsessPanelProps-Cr1cd3H5.js";import{S as qv}from"./FagsakIndex-G2IZVPT0.js";var Zi=(c=>(c.BARN="BARN",c.FBARN="FBARN",c.VOKSEN="VOKSEN",c.ADVOKAT="ADVOKAT",c.ANNEN_F="ANNEN_F",c))(Zi||{});const yr={"AdresseVisning.Adresse":"Adresse","ForelderPanel.Soker":"Søker","ForelderPanel.AnnenForelder":"Annen forelder","AlleBarnPanel.Barn":"Barn","AlleBarnPanel.BarnNr":"Barn {nummer}","AlleBarnPanel.Fodt":"Født","AlleBarnPanel.Dod":"Død","PersonPanel.RolleOgNavn":"{rolle, select, BRUKER {Søker, } ANNEN_PART {Den andre forelderen, } BARN {Barnet, } other {} }{navn}","PersonPanel.Beskrivelse.Bruker":"Adresser for søker registrert i folkeregisteret gyldige for de siste 12 månedene","PersonPanel.Beskrivelse.Barn":"Adresser for barnet registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Beskrivelse.Annenpart":"Adresser for den andre forelderen registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Fodt":"Født {dato}","PersonPanel.Dod":"Død {dato}","AdresseTabell.IngenAdresse":"Ingen adresser funnet for {erAnnenpart, select, true {den andre forelderen} other {søker} }.","AdresseTabell.SammeAdresse":"Den andre forelderen har samme adresse som søker på skjæringstidspunktet","AdresseTabell.PeriodeLabel":"Periode","AdresseTabell.AdresseLabel":"Adresse","AdresseTabell.TypeLabel":"Type","MerkePanel.Dod":"DØD","MerkePanel.DodTittel":"Personen er død","MerkePanel.DodFodt":"DØDFØDT","MerkePanel.Diskresjon6":"Kode 6","MerkePanel.Diskresjon7":"Kode 7","MerkePanel.EgenAnsatt":"Nav","MerkePanel.Verge":"Verge","MerkePanel.Diskresjon6Tittel":"Personen har diskresjonsmerking kode 6","MerkePanel.Diskresjon7Tittel":"Personen har diskresjonsmerking kode 7","MerkePanel.EgenAnsattTittel":"Personen er ansatt i Nav","MerkePanel.VergeTittel":"Personen har verge","SubmitButton.ConfirmInformation":"Bekreft og fortsett","FaktaBegrunnelseTextField.BegrunnEndringene":"Begrunn endringene","FaktaBegrunnelseTextField.Vurdering":"Vurdering","FaktaBegrunnelseTextField.Begrunnelse":"Begrunnelse","TrueFalseInput.True":"Ja","TrueFalseInput.False":"Nei","FaktaKilde.Soknad":"FRA SØKNADEN","FaktaKilde.FREG":"FRA FOLKEREGISTERET","FaktaKilde.MEDL":"FRA MEDLEMSKAPSREGISTERET"},Wi=Un(yr),xv=fv(3),Ev=gv(1500),Wn=({isReadOnly:c,isSubmittable:_,hasBegrunnelse:u,label:E,hasReadOnlyLabel:b=!1,hasVurderingText:P=!1,name:R="begrunnelse"})=>{const H=P?"FaktaBegrunnelseTextField.Vurdering":"FaktaBegrunnelseTextField.BegrunnEndringene",K=()=>c?b?Wi.formatMessage({id:"FaktaBegrunnelseTextField.Begrunnelse"}):"":E??Wi.formatMessage({id:H});return y.jsx(kt,{value:Wi,children:(_||u)&&y.jsx(lv,{name:R,label:K(),validate:[Tn,xv,Ev,ov],maxLength:1500,readOnly:c})})},Pv=c=>c&&Array.isArray(c)?c.length>0?c[0].begrunnelse:"":c&&!Array.isArray(c)?c.begrunnelse:"";Wn.initialValues=(c,_="begrunnelse")=>({[_]:ev(Pv(c))});Wn.transformValues=(c,_="begrunnelse")=>({begrunnelse:c[_]});Wn.__docgenInfo={description:"FaktaBegrunnelseTextField",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[{name:"aksjonspunkt",optional:!0,type:{name:"union",raw:"Aksjonspunkt[] | Aksjonspunkt",elements:[{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!0}}]}}}}],displayName:"FaktaBegrunnelseTextField",props:{isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},hasBegrunnelse:{required:!0,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:""},hasReadOnlyLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hasVurderingText:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'begrunnelse'",computed:!1}}}};const Bv=Un(yr),Sv=(c,_,u)=>!u||_?!0:!c,Yu=({isReadOnly:c,isSubmittable:_,buttonText:u,onClick:E,isSubmitting:b,isDirty:P})=>y.jsx(kt,{value:Bv,children:!c&&y.jsxs(Qm,{size:"small",variant:"primary",loading:b,disabled:Sv(P,b,_),onClick:E||dv,type:E?"button":"submit",children:[!!u&&u,!u&&y.jsx(Pe,{id:"SubmitButton.ConfirmInformation"})]})});Yu.__docgenInfo={description:"FaktaSubmitButton",methods:[],displayName:"FaktaSubmitButton",props:{buttonText:{required:!1,tsType:{name:"string"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!0,tsType:{name:"boolean"},description:""}}};const Cu=Un(yr),Fv=({name:c,label:_,readOnly:u,trueLabel:E,trueContent:b,falseLabel:P,falseContent:R})=>y.jsx(cv,{name:c,label:_,validate:[Tn],isReadOnly:u,isTrueOrFalseSelection:!0,radios:[{label:E??Cu.formatMessage({id:"TrueFalseInput.True"}),value:"true",element:b},{label:P??Cu.formatMessage({id:"TrueFalseInput.False"}),value:"false",element:R}]});Fv.__docgenInfo={description:"",methods:[],displayName:"TrueFalseInput",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},trueLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},trueContent:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},falseLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},falseContent:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""}}};const Zu=(c,_)=>{const u=new Date(c.tom??Yi),E=new Date(_.tom??Yi);if(u>E)return-1;if(u<E)return 1;if(c.fom&&!_.fom)return-1;if(!c.fom&&_.fom)return 1;if(c.fom&&_.fom){const b=new Date(c.fom),P=new Date(_.fom);if(b>P)return-1;if(b<P)return 1}return 0};var hr={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var Iv=hr.exports,Du;function jv(){return Du||(Du=1,function(c,_){(function(){var u,E="4.17.21",b=200,P="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",R="Expected a function",H="Invalid `variable` option passed into `_.template`",K="__lodash_hash_undefined__",J=500,M="__lodash_placeholder__",re=1,pn=2,en=4,nn=1,rn=2,pe=1,Rn=2,Qi=4,Ke=8,Hn=16,Ve=32,$n=64,Ue=128,zn=256,_t=512,rl=30,tl="...",il=800,al=16,ea=1,sl=2,ul=3,kr=1/0,qn=9007199254740991,ll=17976931348623157e292,_r=NaN,Oe=4294967295,ol=Oe-1,fl=Oe>>>1,gl=[["ary",Ue],["bind",pe],["bindKey",Rn],["curry",Ke],["curryRight",Hn],["flip",_t],["partial",Ve],["partialRight",$n],["rearg",zn]],xn="[object Arguments]",wr="[object Array]",dl="[object AsyncFunction]",Yn="[object Boolean]",Zn="[object Date]",cl="[object DOMException]",br="[object Error]",Ar="[object Function]",na="[object GeneratorFunction]",Be="[object Map]",Xn="[object Number]",pl="[object Null]",We="[object Object]",ra="[object Promise]",ml="[object Proxy]",Jn="[object RegExp]",Se="[object Set]",Qn="[object String]",Tr="[object Symbol]",vl="[object Undefined]",er="[object WeakMap]",hl="[object WeakSet]",nr="[object ArrayBuffer]",En="[object DataView]",wt="[object Float32Array]",bt="[object Float64Array]",At="[object Int8Array]",Tt="[object Int16Array]",Rt="[object Int32Array]",qt="[object Uint8Array]",xt="[object Uint8ClampedArray]",Et="[object Uint16Array]",Pt="[object Uint32Array]",yl=/\b__p \+= '';/g,kl=/\b(__p \+=) '' \+/g,_l=/(__e\(.*?\)|\b__t\)) \+\n'';/g,ta=/&(?:amp|lt|gt|quot|#39);/g,ia=/[&<>"']/g,wl=RegExp(ta.source),bl=RegExp(ia.source),Al=/<%-([\s\S]+?)%>/g,Tl=/<%([\s\S]+?)%>/g,aa=/<%=([\s\S]+?)%>/g,Rl=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ql=/^\w*$/,xl=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Bt=/[\\^$.*+?()[\]{}|]/g,El=RegExp(Bt.source),St=/^\s+/,Pl=/\s/,Bl=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Sl=/\{\n\/\* \[wrapped with (.+)\] \*/,Fl=/,? & /,Il=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,jl=/[()=,{}\[\]\/\s]/,Nl=/\\(\\)?/g,Ll=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,sa=/\w*$/,Ol=/^[-+]0x[0-9a-f]+$/i,Ml=/^0b[01]+$/i,Cl=/^\[object .+?Constructor\]$/,Dl=/^0o[0-7]+$/i,Kl=/^(?:0|[1-9]\d*)$/,Vl=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Rr=/($^)/,Ul=/['\n\r\u2028\u2029\\]/g,qr="\\ud800-\\udfff",Wl="\\u0300-\\u036f",Gl="\\ufe20-\\ufe2f",Hl="\\u20d0-\\u20ff",ua=Wl+Gl+Hl,la="\\u2700-\\u27bf",oa="a-z\\xdf-\\xf6\\xf8-\\xff",$l="\\xac\\xb1\\xd7\\xf7",zl="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Yl="\\u2000-\\u206f",Zl=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",fa="A-Z\\xc0-\\xd6\\xd8-\\xde",ga="\\ufe0e\\ufe0f",da=$l+zl+Yl+Zl,Ft="['’]",Xl="["+qr+"]",ca="["+da+"]",xr="["+ua+"]",pa="\\d+",Jl="["+la+"]",ma="["+oa+"]",va="[^"+qr+da+pa+la+oa+fa+"]",It="\\ud83c[\\udffb-\\udfff]",Ql="(?:"+xr+"|"+It+")",ha="[^"+qr+"]",jt="(?:\\ud83c[\\udde6-\\uddff]){2}",Nt="[\\ud800-\\udbff][\\udc00-\\udfff]",Pn="["+fa+"]",ya="\\u200d",ka="(?:"+ma+"|"+va+")",eo="(?:"+Pn+"|"+va+")",_a="(?:"+Ft+"(?:d|ll|m|re|s|t|ve))?",wa="(?:"+Ft+"(?:D|LL|M|RE|S|T|VE))?",ba=Ql+"?",Aa="["+ga+"]?",no="(?:"+ya+"(?:"+[ha,jt,Nt].join("|")+")"+Aa+ba+")*",ro="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",to="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Ta=Aa+ba+no,io="(?:"+[Jl,jt,Nt].join("|")+")"+Ta,ao="(?:"+[ha+xr+"?",xr,jt,Nt,Xl].join("|")+")",so=RegExp(Ft,"g"),uo=RegExp(xr,"g"),Lt=RegExp(It+"(?="+It+")|"+ao+Ta,"g"),lo=RegExp([Pn+"?"+ma+"+"+_a+"(?="+[ca,Pn,"$"].join("|")+")",eo+"+"+wa+"(?="+[ca,Pn+ka,"$"].join("|")+")",Pn+"?"+ka+"+"+_a,Pn+"+"+wa,to,ro,pa,io].join("|"),"g"),oo=RegExp("["+ya+qr+ua+ga+"]"),fo=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,go=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],co=-1,G={};G[wt]=G[bt]=G[At]=G[Tt]=G[Rt]=G[qt]=G[xt]=G[Et]=G[Pt]=!0,G[xn]=G[wr]=G[nr]=G[Yn]=G[En]=G[Zn]=G[br]=G[Ar]=G[Be]=G[Xn]=G[We]=G[Jn]=G[Se]=G[Qn]=G[er]=!1;var W={};W[xn]=W[wr]=W[nr]=W[En]=W[Yn]=W[Zn]=W[wt]=W[bt]=W[At]=W[Tt]=W[Rt]=W[Be]=W[Xn]=W[We]=W[Jn]=W[Se]=W[Qn]=W[Tr]=W[qt]=W[xt]=W[Et]=W[Pt]=!0,W[br]=W[Ar]=W[er]=!1;var po={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},mo={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},vo={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},ho={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},yo=parseFloat,ko=parseInt,Ra=typeof pt=="object"&&pt&&pt.Object===Object&&pt,_o=typeof self=="object"&&self&&self.Object===Object&&self,te=Ra||_o||Function("return this")(),Ot=_&&!_.nodeType&&_,mn=Ot&&!0&&c&&!c.nodeType&&c,qa=mn&&mn.exports===Ot,Mt=qa&&Ra.process,we=function(){try{var f=mn&&mn.require&&mn.require("util").types;return f||Mt&&Mt.binding&&Mt.binding("util")}catch{}}(),xa=we&&we.isArrayBuffer,Ea=we&&we.isDate,Pa=we&&we.isMap,Ba=we&&we.isRegExp,Sa=we&&we.isSet,Fa=we&&we.isTypedArray;function me(f,p,d){switch(d.length){case 0:return f.call(p);case 1:return f.call(p,d[0]);case 2:return f.call(p,d[0],d[1]);case 3:return f.call(p,d[0],d[1],d[2])}return f.apply(p,d)}function wo(f,p,d,w){for(var B=-1,C=f==null?0:f.length;++B<C;){var Q=f[B];p(w,Q,d(Q),f)}return w}function be(f,p){for(var d=-1,w=f==null?0:f.length;++d<w&&p(f[d],d,f)!==!1;);return f}function bo(f,p){for(var d=f==null?0:f.length;d--&&p(f[d],d,f)!==!1;);return f}function Ia(f,p){for(var d=-1,w=f==null?0:f.length;++d<w;)if(!p(f[d],d,f))return!1;return!0}function tn(f,p){for(var d=-1,w=f==null?0:f.length,B=0,C=[];++d<w;){var Q=f[d];p(Q,d,f)&&(C[B++]=Q)}return C}function Er(f,p){var d=f==null?0:f.length;return!!d&&Bn(f,p,0)>-1}function Ct(f,p,d){for(var w=-1,B=f==null?0:f.length;++w<B;)if(d(p,f[w]))return!0;return!1}function $(f,p){for(var d=-1,w=f==null?0:f.length,B=Array(w);++d<w;)B[d]=p(f[d],d,f);return B}function an(f,p){for(var d=-1,w=p.length,B=f.length;++d<w;)f[B+d]=p[d];return f}function Dt(f,p,d,w){var B=-1,C=f==null?0:f.length;for(w&&C&&(d=f[++B]);++B<C;)d=p(d,f[B],B,f);return d}function Ao(f,p,d,w){var B=f==null?0:f.length;for(w&&B&&(d=f[--B]);B--;)d=p(d,f[B],B,f);return d}function Kt(f,p){for(var d=-1,w=f==null?0:f.length;++d<w;)if(p(f[d],d,f))return!0;return!1}var To=Vt("length");function Ro(f){return f.split("")}function qo(f){return f.match(Il)||[]}function ja(f,p,d){var w;return d(f,function(B,C,Q){if(p(B,C,Q))return w=C,!1}),w}function Pr(f,p,d,w){for(var B=f.length,C=d+(w?1:-1);w?C--:++C<B;)if(p(f[C],C,f))return C;return-1}function Bn(f,p,d){return p===p?Mo(f,p,d):Pr(f,Na,d)}function xo(f,p,d,w){for(var B=d-1,C=f.length;++B<C;)if(w(f[B],p))return B;return-1}function Na(f){return f!==f}function La(f,p){var d=f==null?0:f.length;return d?Wt(f,p)/d:_r}function Vt(f){return function(p){return p==null?u:p[f]}}function Ut(f){return function(p){return f==null?u:f[p]}}function Oa(f,p,d,w,B){return B(f,function(C,Q,U){d=w?(w=!1,C):p(d,C,Q,U)}),d}function Eo(f,p){var d=f.length;for(f.sort(p);d--;)f[d]=f[d].value;return f}function Wt(f,p){for(var d,w=-1,B=f.length;++w<B;){var C=p(f[w]);C!==u&&(d=d===u?C:d+C)}return d}function Gt(f,p){for(var d=-1,w=Array(f);++d<f;)w[d]=p(d);return w}function Po(f,p){return $(p,function(d){return[d,f[d]]})}function Ma(f){return f&&f.slice(0,Va(f)+1).replace(St,"")}function ve(f){return function(p){return f(p)}}function Ht(f,p){return $(p,function(d){return f[d]})}function rr(f,p){return f.has(p)}function Ca(f,p){for(var d=-1,w=f.length;++d<w&&Bn(p,f[d],0)>-1;);return d}function Da(f,p){for(var d=f.length;d--&&Bn(p,f[d],0)>-1;);return d}function Bo(f,p){for(var d=f.length,w=0;d--;)f[d]===p&&++w;return w}var So=Ut(po),Fo=Ut(mo);function Io(f){return"\\"+ho[f]}function jo(f,p){return f==null?u:f[p]}function Sn(f){return oo.test(f)}function No(f){return fo.test(f)}function Lo(f){for(var p,d=[];!(p=f.next()).done;)d.push(p.value);return d}function $t(f){var p=-1,d=Array(f.size);return f.forEach(function(w,B){d[++p]=[B,w]}),d}function Ka(f,p){return function(d){return f(p(d))}}function sn(f,p){for(var d=-1,w=f.length,B=0,C=[];++d<w;){var Q=f[d];(Q===p||Q===M)&&(f[d]=M,C[B++]=d)}return C}function Br(f){var p=-1,d=Array(f.size);return f.forEach(function(w){d[++p]=w}),d}function Oo(f){var p=-1,d=Array(f.size);return f.forEach(function(w){d[++p]=[w,w]}),d}function Mo(f,p,d){for(var w=d-1,B=f.length;++w<B;)if(f[w]===p)return w;return-1}function Co(f,p,d){for(var w=d+1;w--;)if(f[w]===p)return w;return w}function Fn(f){return Sn(f)?Ko(f):To(f)}function Fe(f){return Sn(f)?Vo(f):Ro(f)}function Va(f){for(var p=f.length;p--&&Pl.test(f.charAt(p)););return p}var Do=Ut(vo);function Ko(f){for(var p=Lt.lastIndex=0;Lt.test(f);)++p;return p}function Vo(f){return f.match(Lt)||[]}function Uo(f){return f.match(lo)||[]}var Wo=function f(p){p=p==null?te:In.defaults(te.Object(),p,In.pick(te,go));var d=p.Array,w=p.Date,B=p.Error,C=p.Function,Q=p.Math,U=p.Object,zt=p.RegExp,Go=p.String,Ae=p.TypeError,Sr=d.prototype,Ho=C.prototype,jn=U.prototype,Fr=p["__core-js_shared__"],Ir=Ho.toString,V=jn.hasOwnProperty,$o=0,Ua=function(){var e=/[^.]+$/.exec(Fr&&Fr.keys&&Fr.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),jr=jn.toString,zo=Ir.call(U),Yo=te._,Zo=zt("^"+Ir.call(V).replace(Bt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Nr=qa?p.Buffer:u,un=p.Symbol,Lr=p.Uint8Array,Wa=Nr?Nr.allocUnsafe:u,Or=Ka(U.getPrototypeOf,U),Ga=U.create,Ha=jn.propertyIsEnumerable,Mr=Sr.splice,$a=un?un.isConcatSpreadable:u,tr=un?un.iterator:u,vn=un?un.toStringTag:u,Cr=function(){try{var e=wn(U,"defineProperty");return e({},"",{}),e}catch{}}(),Xo=p.clearTimeout!==te.clearTimeout&&p.clearTimeout,Jo=w&&w.now!==te.Date.now&&w.now,Qo=p.setTimeout!==te.setTimeout&&p.setTimeout,Dr=Q.ceil,Kr=Q.floor,Yt=U.getOwnPropertySymbols,ef=Nr?Nr.isBuffer:u,za=p.isFinite,nf=Sr.join,rf=Ka(U.keys,U),ee=Q.max,ae=Q.min,tf=w.now,af=p.parseInt,Ya=Q.random,sf=Sr.reverse,Zt=wn(p,"DataView"),ir=wn(p,"Map"),Xt=wn(p,"Promise"),Nn=wn(p,"Set"),ar=wn(p,"WeakMap"),sr=wn(U,"create"),Vr=ar&&new ar,Ln={},uf=bn(Zt),lf=bn(ir),of=bn(Xt),ff=bn(Nn),gf=bn(ar),Ur=un?un.prototype:u,ur=Ur?Ur.valueOf:u,Za=Ur?Ur.toString:u;function a(e){if(Y(e)&&!S(e)&&!(e instanceof L)){if(e instanceof Te)return e;if(V.call(e,"__wrapped__"))return Xs(e)}return new Te(e)}var On=function(){function e(){}return function(n){if(!z(n))return{};if(Ga)return Ga(n);e.prototype=n;var r=new e;return e.prototype=u,r}}();function Wr(){}function Te(e,n){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!n,this.__index__=0,this.__values__=u}a.templateSettings={escape:Al,evaluate:Tl,interpolate:aa,variable:"",imports:{_:a}},a.prototype=Wr.prototype,a.prototype.constructor=a,Te.prototype=On(Wr.prototype),Te.prototype.constructor=Te;function L(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Oe,this.__views__=[]}function df(){var e=new L(this.__wrapped__);return e.__actions__=fe(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=fe(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=fe(this.__views__),e}function cf(){if(this.__filtered__){var e=new L(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function pf(){var e=this.__wrapped__.value(),n=this.__dir__,r=S(e),t=n<0,i=r?e.length:0,s=qg(0,i,this.__views__),l=s.start,o=s.end,g=o-l,m=t?o:l-1,v=this.__iteratees__,h=v.length,k=0,A=ae(g,this.__takeCount__);if(!r||!t&&i==g&&A==g)return _s(e,this.__actions__);var q=[];e:for(;g--&&k<A;){m+=n;for(var I=-1,x=e[m];++I<h;){var N=v[I],O=N.iteratee,ke=N.type,oe=O(x);if(ke==sl)x=oe;else if(!oe){if(ke==ea)continue e;break e}}q[k++]=x}return q}L.prototype=On(Wr.prototype),L.prototype.constructor=L;function hn(e){var n=-1,r=e==null?0:e.length;for(this.clear();++n<r;){var t=e[n];this.set(t[0],t[1])}}function mf(){this.__data__=sr?sr(null):{},this.size=0}function vf(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n}function hf(e){var n=this.__data__;if(sr){var r=n[e];return r===K?u:r}return V.call(n,e)?n[e]:u}function yf(e){var n=this.__data__;return sr?n[e]!==u:V.call(n,e)}function kf(e,n){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=sr&&n===u?K:n,this}hn.prototype.clear=mf,hn.prototype.delete=vf,hn.prototype.get=hf,hn.prototype.has=yf,hn.prototype.set=kf;function Ge(e){var n=-1,r=e==null?0:e.length;for(this.clear();++n<r;){var t=e[n];this.set(t[0],t[1])}}function _f(){this.__data__=[],this.size=0}function wf(e){var n=this.__data__,r=Gr(n,e);if(r<0)return!1;var t=n.length-1;return r==t?n.pop():Mr.call(n,r,1),--this.size,!0}function bf(e){var n=this.__data__,r=Gr(n,e);return r<0?u:n[r][1]}function Af(e){return Gr(this.__data__,e)>-1}function Tf(e,n){var r=this.__data__,t=Gr(r,e);return t<0?(++this.size,r.push([e,n])):r[t][1]=n,this}Ge.prototype.clear=_f,Ge.prototype.delete=wf,Ge.prototype.get=bf,Ge.prototype.has=Af,Ge.prototype.set=Tf;function He(e){var n=-1,r=e==null?0:e.length;for(this.clear();++n<r;){var t=e[n];this.set(t[0],t[1])}}function Rf(){this.size=0,this.__data__={hash:new hn,map:new(ir||Ge),string:new hn}}function qf(e){var n=tt(this,e).delete(e);return this.size-=n?1:0,n}function xf(e){return tt(this,e).get(e)}function Ef(e){return tt(this,e).has(e)}function Pf(e,n){var r=tt(this,e),t=r.size;return r.set(e,n),this.size+=r.size==t?0:1,this}He.prototype.clear=Rf,He.prototype.delete=qf,He.prototype.get=xf,He.prototype.has=Ef,He.prototype.set=Pf;function yn(e){var n=-1,r=e==null?0:e.length;for(this.__data__=new He;++n<r;)this.add(e[n])}function Bf(e){return this.__data__.set(e,K),this}function Sf(e){return this.__data__.has(e)}yn.prototype.add=yn.prototype.push=Bf,yn.prototype.has=Sf;function Ie(e){var n=this.__data__=new Ge(e);this.size=n.size}function Ff(){this.__data__=new Ge,this.size=0}function If(e){var n=this.__data__,r=n.delete(e);return this.size=n.size,r}function jf(e){return this.__data__.get(e)}function Nf(e){return this.__data__.has(e)}function Lf(e,n){var r=this.__data__;if(r instanceof Ge){var t=r.__data__;if(!ir||t.length<b-1)return t.push([e,n]),this.size=++r.size,this;r=this.__data__=new He(t)}return r.set(e,n),this.size=r.size,this}Ie.prototype.clear=Ff,Ie.prototype.delete=If,Ie.prototype.get=jf,Ie.prototype.has=Nf,Ie.prototype.set=Lf;function Xa(e,n){var r=S(e),t=!r&&An(e),i=!r&&!t&&dn(e),s=!r&&!t&&!i&&Kn(e),l=r||t||i||s,o=l?Gt(e.length,Go):[],g=o.length;for(var m in e)(n||V.call(e,m))&&!(l&&(m=="length"||i&&(m=="offset"||m=="parent")||s&&(m=="buffer"||m=="byteLength"||m=="byteOffset")||Ze(m,g)))&&o.push(m);return o}function Ja(e){var n=e.length;return n?e[li(0,n-1)]:u}function Of(e,n){return it(fe(e),kn(n,0,e.length))}function Mf(e){return it(fe(e))}function Jt(e,n,r){(r!==u&&!je(e[n],r)||r===u&&!(n in e))&&$e(e,n,r)}function lr(e,n,r){var t=e[n];(!(V.call(e,n)&&je(t,r))||r===u&&!(n in e))&&$e(e,n,r)}function Gr(e,n){for(var r=e.length;r--;)if(je(e[r][0],n))return r;return-1}function Cf(e,n,r,t){return ln(e,function(i,s,l){n(t,i,r(i),l)}),t}function Qa(e,n){return e&&Ce(n,ne(n),e)}function Df(e,n){return e&&Ce(n,de(n),e)}function $e(e,n,r){n=="__proto__"&&Cr?Cr(e,n,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[n]=r}function Qt(e,n){for(var r=-1,t=n.length,i=d(t),s=e==null;++r<t;)i[r]=s?u:Ii(e,n[r]);return i}function kn(e,n,r){return e===e&&(r!==u&&(e=e<=r?e:r),n!==u&&(e=e>=n?e:n)),e}function Re(e,n,r,t,i,s){var l,o=n&re,g=n&pn,m=n&en;if(r&&(l=i?r(e,t,i,s):r(e)),l!==u)return l;if(!z(e))return e;var v=S(e);if(v){if(l=Eg(e),!o)return fe(e,l)}else{var h=se(e),k=h==Ar||h==na;if(dn(e))return As(e,o);if(h==We||h==xn||k&&!i){if(l=g||k?{}:Vs(e),!o)return g?hg(e,Df(l,e)):vg(e,Qa(l,e))}else{if(!W[h])return i?e:{};l=Pg(e,h,o)}}s||(s=new Ie);var A=s.get(e);if(A)return A;s.set(e,l),hu(e)?e.forEach(function(x){l.add(Re(x,n,r,x,e,s))}):mu(e)&&e.forEach(function(x,N){l.set(N,Re(x,n,r,N,e,s))});var q=m?g?ki:yi:g?de:ne,I=v?u:q(e);return be(I||e,function(x,N){I&&(N=x,x=e[N]),lr(l,N,Re(x,n,r,N,e,s))}),l}function Kf(e){var n=ne(e);return function(r){return es(r,e,n)}}function es(e,n,r){var t=r.length;if(e==null)return!t;for(e=U(e);t--;){var i=r[t],s=n[i],l=e[i];if(l===u&&!(i in e)||!s(l))return!1}return!0}function ns(e,n,r){if(typeof e!="function")throw new Ae(R);return mr(function(){e.apply(u,r)},n)}function or(e,n,r,t){var i=-1,s=Er,l=!0,o=e.length,g=[],m=n.length;if(!o)return g;r&&(n=$(n,ve(r))),t?(s=Ct,l=!1):n.length>=b&&(s=rr,l=!1,n=new yn(n));e:for(;++i<o;){var v=e[i],h=r==null?v:r(v);if(v=t||v!==0?v:0,l&&h===h){for(var k=m;k--;)if(n[k]===h)continue e;g.push(v)}else s(n,h,t)||g.push(v)}return g}var ln=Es(Me),rs=Es(ni,!0);function Vf(e,n){var r=!0;return ln(e,function(t,i,s){return r=!!n(t,i,s),r}),r}function Hr(e,n,r){for(var t=-1,i=e.length;++t<i;){var s=e[t],l=n(s);if(l!=null&&(o===u?l===l&&!ye(l):r(l,o)))var o=l,g=s}return g}function Uf(e,n,r,t){var i=e.length;for(r=F(r),r<0&&(r=-r>i?0:i+r),t=t===u||t>i?i:F(t),t<0&&(t+=i),t=r>t?0:ku(t);r<t;)e[r++]=n;return e}function ts(e,n){var r=[];return ln(e,function(t,i,s){n(t,i,s)&&r.push(t)}),r}function ie(e,n,r,t,i){var s=-1,l=e.length;for(r||(r=Sg),i||(i=[]);++s<l;){var o=e[s];n>0&&r(o)?n>1?ie(o,n-1,r,t,i):an(i,o):t||(i[i.length]=o)}return i}var ei=Ps(),is=Ps(!0);function Me(e,n){return e&&ei(e,n,ne)}function ni(e,n){return e&&is(e,n,ne)}function $r(e,n){return tn(n,function(r){return Xe(e[r])})}function _n(e,n){n=fn(n,e);for(var r=0,t=n.length;e!=null&&r<t;)e=e[De(n[r++])];return r&&r==t?e:u}function as(e,n,r){var t=n(e);return S(e)?t:an(t,r(e))}function ue(e){return e==null?e===u?vl:pl:vn&&vn in U(e)?Rg(e):Mg(e)}function ri(e,n){return e>n}function Wf(e,n){return e!=null&&V.call(e,n)}function Gf(e,n){return e!=null&&n in U(e)}function Hf(e,n,r){return e>=ae(n,r)&&e<ee(n,r)}function ti(e,n,r){for(var t=r?Ct:Er,i=e[0].length,s=e.length,l=s,o=d(s),g=1/0,m=[];l--;){var v=e[l];l&&n&&(v=$(v,ve(n))),g=ae(v.length,g),o[l]=!r&&(n||i>=120&&v.length>=120)?new yn(l&&v):u}v=e[0];var h=-1,k=o[0];e:for(;++h<i&&m.length<g;){var A=v[h],q=n?n(A):A;if(A=r||A!==0?A:0,!(k?rr(k,q):t(m,q,r))){for(l=s;--l;){var I=o[l];if(!(I?rr(I,q):t(e[l],q,r)))continue e}k&&k.push(q),m.push(A)}}return m}function $f(e,n,r,t){return Me(e,function(i,s,l){n(t,r(i),s,l)}),t}function fr(e,n,r){n=fn(n,e),e=Hs(e,n);var t=e==null?e:e[De(xe(n))];return t==null?u:me(t,e,r)}function ss(e){return Y(e)&&ue(e)==xn}function zf(e){return Y(e)&&ue(e)==nr}function Yf(e){return Y(e)&&ue(e)==Zn}function gr(e,n,r,t,i){return e===n?!0:e==null||n==null||!Y(e)&&!Y(n)?e!==e&&n!==n:Zf(e,n,r,t,gr,i)}function Zf(e,n,r,t,i,s){var l=S(e),o=S(n),g=l?wr:se(e),m=o?wr:se(n);g=g==xn?We:g,m=m==xn?We:m;var v=g==We,h=m==We,k=g==m;if(k&&dn(e)){if(!dn(n))return!1;l=!0,v=!1}if(k&&!v)return s||(s=new Ie),l||Kn(e)?Cs(e,n,r,t,i,s):Ag(e,n,g,r,t,i,s);if(!(r&nn)){var A=v&&V.call(e,"__wrapped__"),q=h&&V.call(n,"__wrapped__");if(A||q){var I=A?e.value():e,x=q?n.value():n;return s||(s=new Ie),i(I,x,r,t,s)}}return k?(s||(s=new Ie),Tg(e,n,r,t,i,s)):!1}function Xf(e){return Y(e)&&se(e)==Be}function ii(e,n,r,t){var i=r.length,s=i,l=!t;if(e==null)return!s;for(e=U(e);i--;){var o=r[i];if(l&&o[2]?o[1]!==e[o[0]]:!(o[0]in e))return!1}for(;++i<s;){o=r[i];var g=o[0],m=e[g],v=o[1];if(l&&o[2]){if(m===u&&!(g in e))return!1}else{var h=new Ie;if(t)var k=t(m,v,g,e,n,h);if(!(k===u?gr(v,m,nn|rn,t,h):k))return!1}}return!0}function us(e){if(!z(e)||Ig(e))return!1;var n=Xe(e)?Zo:Cl;return n.test(bn(e))}function Jf(e){return Y(e)&&ue(e)==Jn}function Qf(e){return Y(e)&&se(e)==Se}function eg(e){return Y(e)&&ft(e.length)&&!!G[ue(e)]}function ls(e){return typeof e=="function"?e:e==null?ce:typeof e=="object"?S(e)?gs(e[0],e[1]):fs(e):Bu(e)}function ai(e){if(!pr(e))return rf(e);var n=[];for(var r in U(e))V.call(e,r)&&r!="constructor"&&n.push(r);return n}function ng(e){if(!z(e))return Og(e);var n=pr(e),r=[];for(var t in e)t=="constructor"&&(n||!V.call(e,t))||r.push(t);return r}function si(e,n){return e<n}function os(e,n){var r=-1,t=ge(e)?d(e.length):[];return ln(e,function(i,s,l){t[++r]=n(i,s,l)}),t}function fs(e){var n=wi(e);return n.length==1&&n[0][2]?Ws(n[0][0],n[0][1]):function(r){return r===e||ii(r,e,n)}}function gs(e,n){return Ai(e)&&Us(n)?Ws(De(e),n):function(r){var t=Ii(r,e);return t===u&&t===n?ji(r,e):gr(n,t,nn|rn)}}function zr(e,n,r,t,i){e!==n&&ei(n,function(s,l){if(i||(i=new Ie),z(s))rg(e,n,l,r,zr,t,i);else{var o=t?t(Ri(e,l),s,l+"",e,n,i):u;o===u&&(o=s),Jt(e,l,o)}},de)}function rg(e,n,r,t,i,s,l){var o=Ri(e,r),g=Ri(n,r),m=l.get(g);if(m){Jt(e,r,m);return}var v=s?s(o,g,r+"",e,n,l):u,h=v===u;if(h){var k=S(g),A=!k&&dn(g),q=!k&&!A&&Kn(g);v=g,k||A||q?S(o)?v=o:Z(o)?v=fe(o):A?(h=!1,v=As(g,!0)):q?(h=!1,v=Ts(g,!0)):v=[]:vr(g)||An(g)?(v=o,An(o)?v=_u(o):(!z(o)||Xe(o))&&(v=Vs(g))):h=!1}h&&(l.set(g,v),i(v,g,t,s,l),l.delete(g)),Jt(e,r,v)}function ds(e,n){var r=e.length;if(r)return n+=n<0?r:0,Ze(n,r)?e[n]:u}function cs(e,n,r){n.length?n=$(n,function(s){return S(s)?function(l){return _n(l,s.length===1?s[0]:s)}:s}):n=[ce];var t=-1;n=$(n,ve(T()));var i=os(e,function(s,l,o){var g=$(n,function(m){return m(s)});return{criteria:g,index:++t,value:s}});return Eo(i,function(s,l){return mg(s,l,r)})}function tg(e,n){return ps(e,n,function(r,t){return ji(e,t)})}function ps(e,n,r){for(var t=-1,i=n.length,s={};++t<i;){var l=n[t],o=_n(e,l);r(o,l)&&dr(s,fn(l,e),o)}return s}function ig(e){return function(n){return _n(n,e)}}function ui(e,n,r,t){var i=t?xo:Bn,s=-1,l=n.length,o=e;for(e===n&&(n=fe(n)),r&&(o=$(e,ve(r)));++s<l;)for(var g=0,m=n[s],v=r?r(m):m;(g=i(o,v,g,t))>-1;)o!==e&&Mr.call(o,g,1),Mr.call(e,g,1);return e}function ms(e,n){for(var r=e?n.length:0,t=r-1;r--;){var i=n[r];if(r==t||i!==s){var s=i;Ze(i)?Mr.call(e,i,1):gi(e,i)}}return e}function li(e,n){return e+Kr(Ya()*(n-e+1))}function ag(e,n,r,t){for(var i=-1,s=ee(Dr((n-e)/(r||1)),0),l=d(s);s--;)l[t?s:++i]=e,e+=r;return l}function oi(e,n){var r="";if(!e||n<1||n>qn)return r;do n%2&&(r+=e),n=Kr(n/2),n&&(e+=e);while(n);return r}function j(e,n){return qi(Gs(e,n,ce),e+"")}function sg(e){return Ja(Vn(e))}function ug(e,n){var r=Vn(e);return it(r,kn(n,0,r.length))}function dr(e,n,r,t){if(!z(e))return e;n=fn(n,e);for(var i=-1,s=n.length,l=s-1,o=e;o!=null&&++i<s;){var g=De(n[i]),m=r;if(g==="__proto__"||g==="constructor"||g==="prototype")return e;if(i!=l){var v=o[g];m=t?t(v,g,o):u,m===u&&(m=z(v)?v:Ze(n[i+1])?[]:{})}lr(o,g,m),o=o[g]}return e}var vs=Vr?function(e,n){return Vr.set(e,n),e}:ce,lg=Cr?function(e,n){return Cr(e,"toString",{configurable:!0,enumerable:!1,value:Li(n),writable:!0})}:ce;function og(e){return it(Vn(e))}function qe(e,n,r){var t=-1,i=e.length;n<0&&(n=-n>i?0:i+n),r=r>i?i:r,r<0&&(r+=i),i=n>r?0:r-n>>>0,n>>>=0;for(var s=d(i);++t<i;)s[t]=e[t+n];return s}function fg(e,n){var r;return ln(e,function(t,i,s){return r=n(t,i,s),!r}),!!r}function Yr(e,n,r){var t=0,i=e==null?t:e.length;if(typeof n=="number"&&n===n&&i<=fl){for(;t<i;){var s=t+i>>>1,l=e[s];l!==null&&!ye(l)&&(r?l<=n:l<n)?t=s+1:i=s}return i}return fi(e,n,ce,r)}function fi(e,n,r,t){var i=0,s=e==null?0:e.length;if(s===0)return 0;n=r(n);for(var l=n!==n,o=n===null,g=ye(n),m=n===u;i<s;){var v=Kr((i+s)/2),h=r(e[v]),k=h!==u,A=h===null,q=h===h,I=ye(h);if(l)var x=t||q;else m?x=q&&(t||k):o?x=q&&k&&(t||!A):g?x=q&&k&&!A&&(t||!I):A||I?x=!1:x=t?h<=n:h<n;x?i=v+1:s=v}return ae(s,ol)}function hs(e,n){for(var r=-1,t=e.length,i=0,s=[];++r<t;){var l=e[r],o=n?n(l):l;if(!r||!je(o,g)){var g=o;s[i++]=l===0?0:l}}return s}function ys(e){return typeof e=="number"?e:ye(e)?_r:+e}function he(e){if(typeof e=="string")return e;if(S(e))return $(e,he)+"";if(ye(e))return Za?Za.call(e):"";var n=e+"";return n=="0"&&1/e==-1/0?"-0":n}function on(e,n,r){var t=-1,i=Er,s=e.length,l=!0,o=[],g=o;if(r)l=!1,i=Ct;else if(s>=b){var m=n?null:wg(e);if(m)return Br(m);l=!1,i=rr,g=new yn}else g=n?[]:o;e:for(;++t<s;){var v=e[t],h=n?n(v):v;if(v=r||v!==0?v:0,l&&h===h){for(var k=g.length;k--;)if(g[k]===h)continue e;n&&g.push(h),o.push(v)}else i(g,h,r)||(g!==o&&g.push(h),o.push(v))}return o}function gi(e,n){return n=fn(n,e),e=Hs(e,n),e==null||delete e[De(xe(n))]}function ks(e,n,r,t){return dr(e,n,r(_n(e,n)),t)}function Zr(e,n,r,t){for(var i=e.length,s=t?i:-1;(t?s--:++s<i)&&n(e[s],s,e););return r?qe(e,t?0:s,t?s+1:i):qe(e,t?s+1:0,t?i:s)}function _s(e,n){var r=e;return r instanceof L&&(r=r.value()),Dt(n,function(t,i){return i.func.apply(i.thisArg,an([t],i.args))},r)}function di(e,n,r){var t=e.length;if(t<2)return t?on(e[0]):[];for(var i=-1,s=d(t);++i<t;)for(var l=e[i],o=-1;++o<t;)o!=i&&(s[i]=or(s[i]||l,e[o],n,r));return on(ie(s,1),n,r)}function ws(e,n,r){for(var t=-1,i=e.length,s=n.length,l={};++t<i;){var o=t<s?n[t]:u;r(l,e[t],o)}return l}function ci(e){return Z(e)?e:[]}function pi(e){return typeof e=="function"?e:ce}function fn(e,n){return S(e)?e:Ai(e,n)?[e]:Zs(D(e))}var gg=j;function gn(e,n,r){var t=e.length;return r=r===u?t:r,!n&&r>=t?e:qe(e,n,r)}var bs=Xo||function(e){return te.clearTimeout(e)};function As(e,n){if(n)return e.slice();var r=e.length,t=Wa?Wa(r):new e.constructor(r);return e.copy(t),t}function mi(e){var n=new e.constructor(e.byteLength);return new Lr(n).set(new Lr(e)),n}function dg(e,n){var r=n?mi(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}function cg(e){var n=new e.constructor(e.source,sa.exec(e));return n.lastIndex=e.lastIndex,n}function pg(e){return ur?U(ur.call(e)):{}}function Ts(e,n){var r=n?mi(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function Rs(e,n){if(e!==n){var r=e!==u,t=e===null,i=e===e,s=ye(e),l=n!==u,o=n===null,g=n===n,m=ye(n);if(!o&&!m&&!s&&e>n||s&&l&&g&&!o&&!m||t&&l&&g||!r&&g||!i)return 1;if(!t&&!s&&!m&&e<n||m&&r&&i&&!t&&!s||o&&r&&i||!l&&i||!g)return-1}return 0}function mg(e,n,r){for(var t=-1,i=e.criteria,s=n.criteria,l=i.length,o=r.length;++t<l;){var g=Rs(i[t],s[t]);if(g){if(t>=o)return g;var m=r[t];return g*(m=="desc"?-1:1)}}return e.index-n.index}function qs(e,n,r,t){for(var i=-1,s=e.length,l=r.length,o=-1,g=n.length,m=ee(s-l,0),v=d(g+m),h=!t;++o<g;)v[o]=n[o];for(;++i<l;)(h||i<s)&&(v[r[i]]=e[i]);for(;m--;)v[o++]=e[i++];return v}function xs(e,n,r,t){for(var i=-1,s=e.length,l=-1,o=r.length,g=-1,m=n.length,v=ee(s-o,0),h=d(v+m),k=!t;++i<v;)h[i]=e[i];for(var A=i;++g<m;)h[A+g]=n[g];for(;++l<o;)(k||i<s)&&(h[A+r[l]]=e[i++]);return h}function fe(e,n){var r=-1,t=e.length;for(n||(n=d(t));++r<t;)n[r]=e[r];return n}function Ce(e,n,r,t){var i=!r;r||(r={});for(var s=-1,l=n.length;++s<l;){var o=n[s],g=t?t(r[o],e[o],o,r,e):u;g===u&&(g=e[o]),i?$e(r,o,g):lr(r,o,g)}return r}function vg(e,n){return Ce(e,bi(e),n)}function hg(e,n){return Ce(e,Ds(e),n)}function Xr(e,n){return function(r,t){var i=S(r)?wo:Cf,s=n?n():{};return i(r,e,T(t,2),s)}}function Mn(e){return j(function(n,r){var t=-1,i=r.length,s=i>1?r[i-1]:u,l=i>2?r[2]:u;for(s=e.length>3&&typeof s=="function"?(i--,s):u,l&&le(r[0],r[1],l)&&(s=i<3?u:s,i=1),n=U(n);++t<i;){var o=r[t];o&&e(n,o,t,s)}return n})}function Es(e,n){return function(r,t){if(r==null)return r;if(!ge(r))return e(r,t);for(var i=r.length,s=n?i:-1,l=U(r);(n?s--:++s<i)&&t(l[s],s,l)!==!1;);return r}}function Ps(e){return function(n,r,t){for(var i=-1,s=U(n),l=t(n),o=l.length;o--;){var g=l[e?o:++i];if(r(s[g],g,s)===!1)break}return n}}function yg(e,n,r){var t=n&pe,i=cr(e);function s(){var l=this&&this!==te&&this instanceof s?i:e;return l.apply(t?r:this,arguments)}return s}function Bs(e){return function(n){n=D(n);var r=Sn(n)?Fe(n):u,t=r?r[0]:n.charAt(0),i=r?gn(r,1).join(""):n.slice(1);return t[e]()+i}}function Cn(e){return function(n){return Dt(Eu(xu(n).replace(so,"")),e,"")}}function cr(e){return function(){var n=arguments;switch(n.length){case 0:return new e;case 1:return new e(n[0]);case 2:return new e(n[0],n[1]);case 3:return new e(n[0],n[1],n[2]);case 4:return new e(n[0],n[1],n[2],n[3]);case 5:return new e(n[0],n[1],n[2],n[3],n[4]);case 6:return new e(n[0],n[1],n[2],n[3],n[4],n[5]);case 7:return new e(n[0],n[1],n[2],n[3],n[4],n[5],n[6])}var r=On(e.prototype),t=e.apply(r,n);return z(t)?t:r}}function kg(e,n,r){var t=cr(e);function i(){for(var s=arguments.length,l=d(s),o=s,g=Dn(i);o--;)l[o]=arguments[o];var m=s<3&&l[0]!==g&&l[s-1]!==g?[]:sn(l,g);if(s-=m.length,s<r)return Ns(e,n,Jr,i.placeholder,u,l,m,u,u,r-s);var v=this&&this!==te&&this instanceof i?t:e;return me(v,this,l)}return i}function Ss(e){return function(n,r,t){var i=U(n);if(!ge(n)){var s=T(r,3);n=ne(n),r=function(o){return s(i[o],o,i)}}var l=e(n,r,t);return l>-1?i[s?n[l]:l]:u}}function Fs(e){return Ye(function(n){var r=n.length,t=r,i=Te.prototype.thru;for(e&&n.reverse();t--;){var s=n[t];if(typeof s!="function")throw new Ae(R);if(i&&!l&&rt(s)=="wrapper")var l=new Te([],!0)}for(t=l?t:r;++t<r;){s=n[t];var o=rt(s),g=o=="wrapper"?_i(s):u;g&&Ti(g[0])&&g[1]==(Ue|Ke|Ve|zn)&&!g[4].length&&g[9]==1?l=l[rt(g[0])].apply(l,g[3]):l=s.length==1&&Ti(s)?l[o]():l.thru(s)}return function(){var m=arguments,v=m[0];if(l&&m.length==1&&S(v))return l.plant(v).value();for(var h=0,k=r?n[h].apply(this,m):v;++h<r;)k=n[h].call(this,k);return k}})}function Jr(e,n,r,t,i,s,l,o,g,m){var v=n&Ue,h=n&pe,k=n&Rn,A=n&(Ke|Hn),q=n&_t,I=k?u:cr(e);function x(){for(var N=arguments.length,O=d(N),ke=N;ke--;)O[ke]=arguments[ke];if(A)var oe=Dn(x),_e=Bo(O,oe);if(t&&(O=qs(O,t,i,A)),s&&(O=xs(O,s,l,A)),N-=_e,A&&N<m){var X=sn(O,oe);return Ns(e,n,Jr,x.placeholder,r,O,X,o,g,m-N)}var Ne=h?r:this,Qe=k?Ne[e]:e;return N=O.length,o?O=Cg(O,o):q&&N>1&&O.reverse(),v&&g<N&&(O.length=g),this&&this!==te&&this instanceof x&&(Qe=I||cr(Qe)),Qe.apply(Ne,O)}return x}function Is(e,n){return function(r,t){return $f(r,e,n(t),{})}}function Qr(e,n){return function(r,t){var i;if(r===u&&t===u)return n;if(r!==u&&(i=r),t!==u){if(i===u)return t;typeof r=="string"||typeof t=="string"?(r=he(r),t=he(t)):(r=ys(r),t=ys(t)),i=e(r,t)}return i}}function vi(e){return Ye(function(n){return n=$(n,ve(T())),j(function(r){var t=this;return e(n,function(i){return me(i,t,r)})})})}function et(e,n){n=n===u?" ":he(n);var r=n.length;if(r<2)return r?oi(n,e):n;var t=oi(n,Dr(e/Fn(n)));return Sn(n)?gn(Fe(t),0,e).join(""):t.slice(0,e)}function _g(e,n,r,t){var i=n&pe,s=cr(e);function l(){for(var o=-1,g=arguments.length,m=-1,v=t.length,h=d(v+g),k=this&&this!==te&&this instanceof l?s:e;++m<v;)h[m]=t[m];for(;g--;)h[m++]=arguments[++o];return me(k,i?r:this,h)}return l}function js(e){return function(n,r,t){return t&&typeof t!="number"&&le(n,r,t)&&(r=t=u),n=Je(n),r===u?(r=n,n=0):r=Je(r),t=t===u?n<r?1:-1:Je(t),ag(n,r,t,e)}}function nt(e){return function(n,r){return typeof n=="string"&&typeof r=="string"||(n=Ee(n),r=Ee(r)),e(n,r)}}function Ns(e,n,r,t,i,s,l,o,g,m){var v=n&Ke,h=v?l:u,k=v?u:l,A=v?s:u,q=v?u:s;n|=v?Ve:$n,n&=~(v?$n:Ve),n&Qi||(n&=-4);var I=[e,n,i,A,h,q,k,o,g,m],x=r.apply(u,I);return Ti(e)&&$s(x,I),x.placeholder=t,zs(x,e,n)}function hi(e){var n=Q[e];return function(r,t){if(r=Ee(r),t=t==null?0:ae(F(t),292),t&&za(r)){var i=(D(r)+"e").split("e"),s=n(i[0]+"e"+(+i[1]+t));return i=(D(s)+"e").split("e"),+(i[0]+"e"+(+i[1]-t))}return n(r)}}var wg=Nn&&1/Br(new Nn([,-0]))[1]==kr?function(e){return new Nn(e)}:Ci;function Ls(e){return function(n){var r=se(n);return r==Be?$t(n):r==Se?Oo(n):Po(n,e(n))}}function ze(e,n,r,t,i,s,l,o){var g=n&Rn;if(!g&&typeof e!="function")throw new Ae(R);var m=t?t.length:0;if(m||(n&=-97,t=i=u),l=l===u?l:ee(F(l),0),o=o===u?o:F(o),m-=i?i.length:0,n&$n){var v=t,h=i;t=i=u}var k=g?u:_i(e),A=[e,n,r,t,i,v,h,s,l,o];if(k&&Lg(A,k),e=A[0],n=A[1],r=A[2],t=A[3],i=A[4],o=A[9]=A[9]===u?g?0:e.length:ee(A[9]-m,0),!o&&n&(Ke|Hn)&&(n&=-25),!n||n==pe)var q=yg(e,n,r);else n==Ke||n==Hn?q=kg(e,n,o):(n==Ve||n==(pe|Ve))&&!i.length?q=_g(e,n,r,t):q=Jr.apply(u,A);var I=k?vs:$s;return zs(I(q,A),e,n)}function Os(e,n,r,t){return e===u||je(e,jn[r])&&!V.call(t,r)?n:e}function Ms(e,n,r,t,i,s){return z(e)&&z(n)&&(s.set(n,e),zr(e,n,u,Ms,s),s.delete(n)),e}function bg(e){return vr(e)?u:e}function Cs(e,n,r,t,i,s){var l=r&nn,o=e.length,g=n.length;if(o!=g&&!(l&&g>o))return!1;var m=s.get(e),v=s.get(n);if(m&&v)return m==n&&v==e;var h=-1,k=!0,A=r&rn?new yn:u;for(s.set(e,n),s.set(n,e);++h<o;){var q=e[h],I=n[h];if(t)var x=l?t(I,q,h,n,e,s):t(q,I,h,e,n,s);if(x!==u){if(x)continue;k=!1;break}if(A){if(!Kt(n,function(N,O){if(!rr(A,O)&&(q===N||i(q,N,r,t,s)))return A.push(O)})){k=!1;break}}else if(!(q===I||i(q,I,r,t,s))){k=!1;break}}return s.delete(e),s.delete(n),k}function Ag(e,n,r,t,i,s,l){switch(r){case En:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case nr:return!(e.byteLength!=n.byteLength||!s(new Lr(e),new Lr(n)));case Yn:case Zn:case Xn:return je(+e,+n);case br:return e.name==n.name&&e.message==n.message;case Jn:case Qn:return e==n+"";case Be:var o=$t;case Se:var g=t&nn;if(o||(o=Br),e.size!=n.size&&!g)return!1;var m=l.get(e);if(m)return m==n;t|=rn,l.set(e,n);var v=Cs(o(e),o(n),t,i,s,l);return l.delete(e),v;case Tr:if(ur)return ur.call(e)==ur.call(n)}return!1}function Tg(e,n,r,t,i,s){var l=r&nn,o=yi(e),g=o.length,m=yi(n),v=m.length;if(g!=v&&!l)return!1;for(var h=g;h--;){var k=o[h];if(!(l?k in n:V.call(n,k)))return!1}var A=s.get(e),q=s.get(n);if(A&&q)return A==n&&q==e;var I=!0;s.set(e,n),s.set(n,e);for(var x=l;++h<g;){k=o[h];var N=e[k],O=n[k];if(t)var ke=l?t(O,N,k,n,e,s):t(N,O,k,e,n,s);if(!(ke===u?N===O||i(N,O,r,t,s):ke)){I=!1;break}x||(x=k=="constructor")}if(I&&!x){var oe=e.constructor,_e=n.constructor;oe!=_e&&"constructor"in e&&"constructor"in n&&!(typeof oe=="function"&&oe instanceof oe&&typeof _e=="function"&&_e instanceof _e)&&(I=!1)}return s.delete(e),s.delete(n),I}function Ye(e){return qi(Gs(e,u,eu),e+"")}function yi(e){return as(e,ne,bi)}function ki(e){return as(e,de,Ds)}var _i=Vr?function(e){return Vr.get(e)}:Ci;function rt(e){for(var n=e.name+"",r=Ln[n],t=V.call(Ln,n)?r.length:0;t--;){var i=r[t],s=i.func;if(s==null||s==e)return i.name}return n}function Dn(e){var n=V.call(a,"placeholder")?a:e;return n.placeholder}function T(){var e=a.iteratee||Oi;return e=e===Oi?ls:e,arguments.length?e(arguments[0],arguments[1]):e}function tt(e,n){var r=e.__data__;return Fg(n)?r[typeof n=="string"?"string":"hash"]:r.map}function wi(e){for(var n=ne(e),r=n.length;r--;){var t=n[r],i=e[t];n[r]=[t,i,Us(i)]}return n}function wn(e,n){var r=jo(e,n);return us(r)?r:u}function Rg(e){var n=V.call(e,vn),r=e[vn];try{e[vn]=u;var t=!0}catch{}var i=jr.call(e);return t&&(n?e[vn]=r:delete e[vn]),i}var bi=Yt?function(e){return e==null?[]:(e=U(e),tn(Yt(e),function(n){return Ha.call(e,n)}))}:Di,Ds=Yt?function(e){for(var n=[];e;)an(n,bi(e)),e=Or(e);return n}:Di,se=ue;(Zt&&se(new Zt(new ArrayBuffer(1)))!=En||ir&&se(new ir)!=Be||Xt&&se(Xt.resolve())!=ra||Nn&&se(new Nn)!=Se||ar&&se(new ar)!=er)&&(se=function(e){var n=ue(e),r=n==We?e.constructor:u,t=r?bn(r):"";if(t)switch(t){case uf:return En;case lf:return Be;case of:return ra;case ff:return Se;case gf:return er}return n});function qg(e,n,r){for(var t=-1,i=r.length;++t<i;){var s=r[t],l=s.size;switch(s.type){case"drop":e+=l;break;case"dropRight":n-=l;break;case"take":n=ae(n,e+l);break;case"takeRight":e=ee(e,n-l);break}}return{start:e,end:n}}function xg(e){var n=e.match(Sl);return n?n[1].split(Fl):[]}function Ks(e,n,r){n=fn(n,e);for(var t=-1,i=n.length,s=!1;++t<i;){var l=De(n[t]);if(!(s=e!=null&&r(e,l)))break;e=e[l]}return s||++t!=i?s:(i=e==null?0:e.length,!!i&&ft(i)&&Ze(l,i)&&(S(e)||An(e)))}function Eg(e){var n=e.length,r=new e.constructor(n);return n&&typeof e[0]=="string"&&V.call(e,"index")&&(r.index=e.index,r.input=e.input),r}function Vs(e){return typeof e.constructor=="function"&&!pr(e)?On(Or(e)):{}}function Pg(e,n,r){var t=e.constructor;switch(n){case nr:return mi(e);case Yn:case Zn:return new t(+e);case En:return dg(e,r);case wt:case bt:case At:case Tt:case Rt:case qt:case xt:case Et:case Pt:return Ts(e,r);case Be:return new t;case Xn:case Qn:return new t(e);case Jn:return cg(e);case Se:return new t;case Tr:return pg(e)}}function Bg(e,n){var r=n.length;if(!r)return e;var t=r-1;return n[t]=(r>1?"& ":"")+n[t],n=n.join(r>2?", ":" "),e.replace(Bl,`{
/* [wrapped with `+n+`] */
`)}function Sg(e){return S(e)||An(e)||!!($a&&e&&e[$a])}function Ze(e,n){var r=typeof e;return n=n??qn,!!n&&(r=="number"||r!="symbol"&&Kl.test(e))&&e>-1&&e%1==0&&e<n}function le(e,n,r){if(!z(r))return!1;var t=typeof n;return(t=="number"?ge(r)&&Ze(n,r.length):t=="string"&&n in r)?je(r[n],e):!1}function Ai(e,n){if(S(e))return!1;var r=typeof e;return r=="number"||r=="symbol"||r=="boolean"||e==null||ye(e)?!0:ql.test(e)||!Rl.test(e)||n!=null&&e in U(n)}function Fg(e){var n=typeof e;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?e!=="__proto__":e===null}function Ti(e){var n=rt(e),r=a[n];if(typeof r!="function"||!(n in L.prototype))return!1;if(e===r)return!0;var t=_i(r);return!!t&&e===t[0]}function Ig(e){return!!Ua&&Ua in e}var jg=Fr?Xe:Ki;function pr(e){var n=e&&e.constructor,r=typeof n=="function"&&n.prototype||jn;return e===r}function Us(e){return e===e&&!z(e)}function Ws(e,n){return function(r){return r==null?!1:r[e]===n&&(n!==u||e in U(r))}}function Ng(e){var n=lt(e,function(t){return r.size===J&&r.clear(),t}),r=n.cache;return n}function Lg(e,n){var r=e[1],t=n[1],i=r|t,s=i<(pe|Rn|Ue),l=t==Ue&&r==Ke||t==Ue&&r==zn&&e[7].length<=n[8]||t==(Ue|zn)&&n[7].length<=n[8]&&r==Ke;if(!(s||l))return e;t&pe&&(e[2]=n[2],i|=r&pe?0:Qi);var o=n[3];if(o){var g=e[3];e[3]=g?qs(g,o,n[4]):o,e[4]=g?sn(e[3],M):n[4]}return o=n[5],o&&(g=e[5],e[5]=g?xs(g,o,n[6]):o,e[6]=g?sn(e[5],M):n[6]),o=n[7],o&&(e[7]=o),t&Ue&&(e[8]=e[8]==null?n[8]:ae(e[8],n[8])),e[9]==null&&(e[9]=n[9]),e[0]=n[0],e[1]=i,e}function Og(e){var n=[];if(e!=null)for(var r in U(e))n.push(r);return n}function Mg(e){return jr.call(e)}function Gs(e,n,r){return n=ee(n===u?e.length-1:n,0),function(){for(var t=arguments,i=-1,s=ee(t.length-n,0),l=d(s);++i<s;)l[i]=t[n+i];i=-1;for(var o=d(n+1);++i<n;)o[i]=t[i];return o[n]=r(l),me(e,this,o)}}function Hs(e,n){return n.length<2?e:_n(e,qe(n,0,-1))}function Cg(e,n){for(var r=e.length,t=ae(n.length,r),i=fe(e);t--;){var s=n[t];e[t]=Ze(s,r)?i[s]:u}return e}function Ri(e,n){if(!(n==="constructor"&&typeof e[n]=="function")&&n!="__proto__")return e[n]}var $s=Ys(vs),mr=Qo||function(e,n){return te.setTimeout(e,n)},qi=Ys(lg);function zs(e,n,r){var t=n+"";return qi(e,Bg(t,Dg(xg(t),r)))}function Ys(e){var n=0,r=0;return function(){var t=tf(),i=al-(t-r);if(r=t,i>0){if(++n>=il)return arguments[0]}else n=0;return e.apply(u,arguments)}}function it(e,n){var r=-1,t=e.length,i=t-1;for(n=n===u?t:n;++r<n;){var s=li(r,i),l=e[s];e[s]=e[r],e[r]=l}return e.length=n,e}var Zs=Ng(function(e){var n=[];return e.charCodeAt(0)===46&&n.push(""),e.replace(xl,function(r,t,i,s){n.push(i?s.replace(Nl,"$1"):t||r)}),n});function De(e){if(typeof e=="string"||ye(e))return e;var n=e+"";return n=="0"&&1/e==-1/0?"-0":n}function bn(e){if(e!=null){try{return Ir.call(e)}catch{}try{return e+""}catch{}}return""}function Dg(e,n){return be(gl,function(r){var t="_."+r[0];n&r[1]&&!Er(e,t)&&e.push(t)}),e.sort()}function Xs(e){if(e instanceof L)return e.clone();var n=new Te(e.__wrapped__,e.__chain__);return n.__actions__=fe(e.__actions__),n.__index__=e.__index__,n.__values__=e.__values__,n}function Kg(e,n,r){(r?le(e,n,r):n===u)?n=1:n=ee(F(n),0);var t=e==null?0:e.length;if(!t||n<1)return[];for(var i=0,s=0,l=d(Dr(t/n));i<t;)l[s++]=qe(e,i,i+=n);return l}function Vg(e){for(var n=-1,r=e==null?0:e.length,t=0,i=[];++n<r;){var s=e[n];s&&(i[t++]=s)}return i}function Ug(){var e=arguments.length;if(!e)return[];for(var n=d(e-1),r=arguments[0],t=e;t--;)n[t-1]=arguments[t];return an(S(r)?fe(r):[r],ie(n,1))}var Wg=j(function(e,n){return Z(e)?or(e,ie(n,1,Z,!0)):[]}),Gg=j(function(e,n){var r=xe(n);return Z(r)&&(r=u),Z(e)?or(e,ie(n,1,Z,!0),T(r,2)):[]}),Hg=j(function(e,n){var r=xe(n);return Z(r)&&(r=u),Z(e)?or(e,ie(n,1,Z,!0),u,r):[]});function $g(e,n,r){var t=e==null?0:e.length;return t?(n=r||n===u?1:F(n),qe(e,n<0?0:n,t)):[]}function zg(e,n,r){var t=e==null?0:e.length;return t?(n=r||n===u?1:F(n),n=t-n,qe(e,0,n<0?0:n)):[]}function Yg(e,n){return e&&e.length?Zr(e,T(n,3),!0,!0):[]}function Zg(e,n){return e&&e.length?Zr(e,T(n,3),!0):[]}function Xg(e,n,r,t){var i=e==null?0:e.length;return i?(r&&typeof r!="number"&&le(e,n,r)&&(r=0,t=i),Uf(e,n,r,t)):[]}function Js(e,n,r){var t=e==null?0:e.length;if(!t)return-1;var i=r==null?0:F(r);return i<0&&(i=ee(t+i,0)),Pr(e,T(n,3),i)}function Qs(e,n,r){var t=e==null?0:e.length;if(!t)return-1;var i=t-1;return r!==u&&(i=F(r),i=r<0?ee(t+i,0):ae(i,t-1)),Pr(e,T(n,3),i,!0)}function eu(e){var n=e==null?0:e.length;return n?ie(e,1):[]}function Jg(e){var n=e==null?0:e.length;return n?ie(e,kr):[]}function Qg(e,n){var r=e==null?0:e.length;return r?(n=n===u?1:F(n),ie(e,n)):[]}function ed(e){for(var n=-1,r=e==null?0:e.length,t={};++n<r;){var i=e[n];t[i[0]]=i[1]}return t}function nu(e){return e&&e.length?e[0]:u}function nd(e,n,r){var t=e==null?0:e.length;if(!t)return-1;var i=r==null?0:F(r);return i<0&&(i=ee(t+i,0)),Bn(e,n,i)}function rd(e){var n=e==null?0:e.length;return n?qe(e,0,-1):[]}var td=j(function(e){var n=$(e,ci);return n.length&&n[0]===e[0]?ti(n):[]}),id=j(function(e){var n=xe(e),r=$(e,ci);return n===xe(r)?n=u:r.pop(),r.length&&r[0]===e[0]?ti(r,T(n,2)):[]}),ad=j(function(e){var n=xe(e),r=$(e,ci);return n=typeof n=="function"?n:u,n&&r.pop(),r.length&&r[0]===e[0]?ti(r,u,n):[]});function sd(e,n){return e==null?"":nf.call(e,n)}function xe(e){var n=e==null?0:e.length;return n?e[n-1]:u}function ud(e,n,r){var t=e==null?0:e.length;if(!t)return-1;var i=t;return r!==u&&(i=F(r),i=i<0?ee(t+i,0):ae(i,t-1)),n===n?Co(e,n,i):Pr(e,Na,i,!0)}function ld(e,n){return e&&e.length?ds(e,F(n)):u}var od=j(ru);function ru(e,n){return e&&e.length&&n&&n.length?ui(e,n):e}function fd(e,n,r){return e&&e.length&&n&&n.length?ui(e,n,T(r,2)):e}function gd(e,n,r){return e&&e.length&&n&&n.length?ui(e,n,u,r):e}var dd=Ye(function(e,n){var r=e==null?0:e.length,t=Qt(e,n);return ms(e,$(n,function(i){return Ze(i,r)?+i:i}).sort(Rs)),t});function cd(e,n){var r=[];if(!(e&&e.length))return r;var t=-1,i=[],s=e.length;for(n=T(n,3);++t<s;){var l=e[t];n(l,t,e)&&(r.push(l),i.push(t))}return ms(e,i),r}function xi(e){return e==null?e:sf.call(e)}function pd(e,n,r){var t=e==null?0:e.length;return t?(r&&typeof r!="number"&&le(e,n,r)?(n=0,r=t):(n=n==null?0:F(n),r=r===u?t:F(r)),qe(e,n,r)):[]}function md(e,n){return Yr(e,n)}function vd(e,n,r){return fi(e,n,T(r,2))}function hd(e,n){var r=e==null?0:e.length;if(r){var t=Yr(e,n);if(t<r&&je(e[t],n))return t}return-1}function yd(e,n){return Yr(e,n,!0)}function kd(e,n,r){return fi(e,n,T(r,2),!0)}function _d(e,n){var r=e==null?0:e.length;if(r){var t=Yr(e,n,!0)-1;if(je(e[t],n))return t}return-1}function wd(e){return e&&e.length?hs(e):[]}function bd(e,n){return e&&e.length?hs(e,T(n,2)):[]}function Ad(e){var n=e==null?0:e.length;return n?qe(e,1,n):[]}function Td(e,n,r){return e&&e.length?(n=r||n===u?1:F(n),qe(e,0,n<0?0:n)):[]}function Rd(e,n,r){var t=e==null?0:e.length;return t?(n=r||n===u?1:F(n),n=t-n,qe(e,n<0?0:n,t)):[]}function qd(e,n){return e&&e.length?Zr(e,T(n,3),!1,!0):[]}function xd(e,n){return e&&e.length?Zr(e,T(n,3)):[]}var Ed=j(function(e){return on(ie(e,1,Z,!0))}),Pd=j(function(e){var n=xe(e);return Z(n)&&(n=u),on(ie(e,1,Z,!0),T(n,2))}),Bd=j(function(e){var n=xe(e);return n=typeof n=="function"?n:u,on(ie(e,1,Z,!0),u,n)});function Sd(e){return e&&e.length?on(e):[]}function Fd(e,n){return e&&e.length?on(e,T(n,2)):[]}function Id(e,n){return n=typeof n=="function"?n:u,e&&e.length?on(e,u,n):[]}function Ei(e){if(!(e&&e.length))return[];var n=0;return e=tn(e,function(r){if(Z(r))return n=ee(r.length,n),!0}),Gt(n,function(r){return $(e,Vt(r))})}function tu(e,n){if(!(e&&e.length))return[];var r=Ei(e);return n==null?r:$(r,function(t){return me(n,u,t)})}var jd=j(function(e,n){return Z(e)?or(e,n):[]}),Nd=j(function(e){return di(tn(e,Z))}),Ld=j(function(e){var n=xe(e);return Z(n)&&(n=u),di(tn(e,Z),T(n,2))}),Od=j(function(e){var n=xe(e);return n=typeof n=="function"?n:u,di(tn(e,Z),u,n)}),Md=j(Ei);function Cd(e,n){return ws(e||[],n||[],lr)}function Dd(e,n){return ws(e||[],n||[],dr)}var Kd=j(function(e){var n=e.length,r=n>1?e[n-1]:u;return r=typeof r=="function"?(e.pop(),r):u,tu(e,r)});function iu(e){var n=a(e);return n.__chain__=!0,n}function Vd(e,n){return n(e),e}function at(e,n){return n(e)}var Ud=Ye(function(e){var n=e.length,r=n?e[0]:0,t=this.__wrapped__,i=function(s){return Qt(s,e)};return n>1||this.__actions__.length||!(t instanceof L)||!Ze(r)?this.thru(i):(t=t.slice(r,+r+(n?1:0)),t.__actions__.push({func:at,args:[i],thisArg:u}),new Te(t,this.__chain__).thru(function(s){return n&&!s.length&&s.push(u),s}))});function Wd(){return iu(this)}function Gd(){return new Te(this.value(),this.__chain__)}function Hd(){this.__values__===u&&(this.__values__=yu(this.value()));var e=this.__index__>=this.__values__.length,n=e?u:this.__values__[this.__index__++];return{done:e,value:n}}function $d(){return this}function zd(e){for(var n,r=this;r instanceof Wr;){var t=Xs(r);t.__index__=0,t.__values__=u,n?i.__wrapped__=t:n=t;var i=t;r=r.__wrapped__}return i.__wrapped__=e,n}function Yd(){var e=this.__wrapped__;if(e instanceof L){var n=e;return this.__actions__.length&&(n=new L(this)),n=n.reverse(),n.__actions__.push({func:at,args:[xi],thisArg:u}),new Te(n,this.__chain__)}return this.thru(xi)}function Zd(){return _s(this.__wrapped__,this.__actions__)}var Xd=Xr(function(e,n,r){V.call(e,r)?++e[r]:$e(e,r,1)});function Jd(e,n,r){var t=S(e)?Ia:Vf;return r&&le(e,n,r)&&(n=u),t(e,T(n,3))}function Qd(e,n){var r=S(e)?tn:ts;return r(e,T(n,3))}var ec=Ss(Js),nc=Ss(Qs);function rc(e,n){return ie(st(e,n),1)}function tc(e,n){return ie(st(e,n),kr)}function ic(e,n,r){return r=r===u?1:F(r),ie(st(e,n),r)}function au(e,n){var r=S(e)?be:ln;return r(e,T(n,3))}function su(e,n){var r=S(e)?bo:rs;return r(e,T(n,3))}var ac=Xr(function(e,n,r){V.call(e,r)?e[r].push(n):$e(e,r,[n])});function sc(e,n,r,t){e=ge(e)?e:Vn(e),r=r&&!t?F(r):0;var i=e.length;return r<0&&(r=ee(i+r,0)),gt(e)?r<=i&&e.indexOf(n,r)>-1:!!i&&Bn(e,n,r)>-1}var uc=j(function(e,n,r){var t=-1,i=typeof n=="function",s=ge(e)?d(e.length):[];return ln(e,function(l){s[++t]=i?me(n,l,r):fr(l,n,r)}),s}),lc=Xr(function(e,n,r){$e(e,r,n)});function st(e,n){var r=S(e)?$:os;return r(e,T(n,3))}function oc(e,n,r,t){return e==null?[]:(S(n)||(n=n==null?[]:[n]),r=t?u:r,S(r)||(r=r==null?[]:[r]),cs(e,n,r))}var fc=Xr(function(e,n,r){e[r?0:1].push(n)},function(){return[[],[]]});function gc(e,n,r){var t=S(e)?Dt:Oa,i=arguments.length<3;return t(e,T(n,4),r,i,ln)}function dc(e,n,r){var t=S(e)?Ao:Oa,i=arguments.length<3;return t(e,T(n,4),r,i,rs)}function cc(e,n){var r=S(e)?tn:ts;return r(e,ot(T(n,3)))}function pc(e){var n=S(e)?Ja:sg;return n(e)}function mc(e,n,r){(r?le(e,n,r):n===u)?n=1:n=F(n);var t=S(e)?Of:ug;return t(e,n)}function vc(e){var n=S(e)?Mf:og;return n(e)}function hc(e){if(e==null)return 0;if(ge(e))return gt(e)?Fn(e):e.length;var n=se(e);return n==Be||n==Se?e.size:ai(e).length}function yc(e,n,r){var t=S(e)?Kt:fg;return r&&le(e,n,r)&&(n=u),t(e,T(n,3))}var kc=j(function(e,n){if(e==null)return[];var r=n.length;return r>1&&le(e,n[0],n[1])?n=[]:r>2&&le(n[0],n[1],n[2])&&(n=[n[0]]),cs(e,ie(n,1),[])}),ut=Jo||function(){return te.Date.now()};function _c(e,n){if(typeof n!="function")throw new Ae(R);return e=F(e),function(){if(--e<1)return n.apply(this,arguments)}}function uu(e,n,r){return n=r?u:n,n=e&&n==null?e.length:n,ze(e,Ue,u,u,u,u,n)}function lu(e,n){var r;if(typeof n!="function")throw new Ae(R);return e=F(e),function(){return--e>0&&(r=n.apply(this,arguments)),e<=1&&(n=u),r}}var Pi=j(function(e,n,r){var t=pe;if(r.length){var i=sn(r,Dn(Pi));t|=Ve}return ze(e,t,n,r,i)}),ou=j(function(e,n,r){var t=pe|Rn;if(r.length){var i=sn(r,Dn(ou));t|=Ve}return ze(n,t,e,r,i)});function fu(e,n,r){n=r?u:n;var t=ze(e,Ke,u,u,u,u,u,n);return t.placeholder=fu.placeholder,t}function gu(e,n,r){n=r?u:n;var t=ze(e,Hn,u,u,u,u,u,n);return t.placeholder=gu.placeholder,t}function du(e,n,r){var t,i,s,l,o,g,m=0,v=!1,h=!1,k=!0;if(typeof e!="function")throw new Ae(R);n=Ee(n)||0,z(r)&&(v=!!r.leading,h="maxWait"in r,s=h?ee(Ee(r.maxWait)||0,n):s,k="trailing"in r?!!r.trailing:k);function A(X){var Ne=t,Qe=i;return t=i=u,m=X,l=e.apply(Qe,Ne),l}function q(X){return m=X,o=mr(N,n),v?A(X):l}function I(X){var Ne=X-g,Qe=X-m,Su=n-Ne;return h?ae(Su,s-Qe):Su}function x(X){var Ne=X-g,Qe=X-m;return g===u||Ne>=n||Ne<0||h&&Qe>=s}function N(){var X=ut();if(x(X))return O(X);o=mr(N,I(X))}function O(X){return o=u,k&&t?A(X):(t=i=u,l)}function ke(){o!==u&&bs(o),m=0,t=g=i=o=u}function oe(){return o===u?l:O(ut())}function _e(){var X=ut(),Ne=x(X);if(t=arguments,i=this,g=X,Ne){if(o===u)return q(g);if(h)return bs(o),o=mr(N,n),A(g)}return o===u&&(o=mr(N,n)),l}return _e.cancel=ke,_e.flush=oe,_e}var wc=j(function(e,n){return ns(e,1,n)}),bc=j(function(e,n,r){return ns(e,Ee(n)||0,r)});function Ac(e){return ze(e,_t)}function lt(e,n){if(typeof e!="function"||n!=null&&typeof n!="function")throw new Ae(R);var r=function(){var t=arguments,i=n?n.apply(this,t):t[0],s=r.cache;if(s.has(i))return s.get(i);var l=e.apply(this,t);return r.cache=s.set(i,l)||s,l};return r.cache=new(lt.Cache||He),r}lt.Cache=He;function ot(e){if(typeof e!="function")throw new Ae(R);return function(){var n=arguments;switch(n.length){case 0:return!e.call(this);case 1:return!e.call(this,n[0]);case 2:return!e.call(this,n[0],n[1]);case 3:return!e.call(this,n[0],n[1],n[2])}return!e.apply(this,n)}}function Tc(e){return lu(2,e)}var Rc=gg(function(e,n){n=n.length==1&&S(n[0])?$(n[0],ve(T())):$(ie(n,1),ve(T()));var r=n.length;return j(function(t){for(var i=-1,s=ae(t.length,r);++i<s;)t[i]=n[i].call(this,t[i]);return me(e,this,t)})}),Bi=j(function(e,n){var r=sn(n,Dn(Bi));return ze(e,Ve,u,n,r)}),cu=j(function(e,n){var r=sn(n,Dn(cu));return ze(e,$n,u,n,r)}),qc=Ye(function(e,n){return ze(e,zn,u,u,u,n)});function xc(e,n){if(typeof e!="function")throw new Ae(R);return n=n===u?n:F(n),j(e,n)}function Ec(e,n){if(typeof e!="function")throw new Ae(R);return n=n==null?0:ee(F(n),0),j(function(r){var t=r[n],i=gn(r,0,n);return t&&an(i,t),me(e,this,i)})}function Pc(e,n,r){var t=!0,i=!0;if(typeof e!="function")throw new Ae(R);return z(r)&&(t="leading"in r?!!r.leading:t,i="trailing"in r?!!r.trailing:i),du(e,n,{leading:t,maxWait:n,trailing:i})}function Bc(e){return uu(e,1)}function Sc(e,n){return Bi(pi(n),e)}function Fc(){if(!arguments.length)return[];var e=arguments[0];return S(e)?e:[e]}function Ic(e){return Re(e,en)}function jc(e,n){return n=typeof n=="function"?n:u,Re(e,en,n)}function Nc(e){return Re(e,re|en)}function Lc(e,n){return n=typeof n=="function"?n:u,Re(e,re|en,n)}function Oc(e,n){return n==null||es(e,n,ne(n))}function je(e,n){return e===n||e!==e&&n!==n}var Mc=nt(ri),Cc=nt(function(e,n){return e>=n}),An=ss(function(){return arguments}())?ss:function(e){return Y(e)&&V.call(e,"callee")&&!Ha.call(e,"callee")},S=d.isArray,Dc=xa?ve(xa):zf;function ge(e){return e!=null&&ft(e.length)&&!Xe(e)}function Z(e){return Y(e)&&ge(e)}function Kc(e){return e===!0||e===!1||Y(e)&&ue(e)==Yn}var dn=ef||Ki,Vc=Ea?ve(Ea):Yf;function Uc(e){return Y(e)&&e.nodeType===1&&!vr(e)}function Wc(e){if(e==null)return!0;if(ge(e)&&(S(e)||typeof e=="string"||typeof e.splice=="function"||dn(e)||Kn(e)||An(e)))return!e.length;var n=se(e);if(n==Be||n==Se)return!e.size;if(pr(e))return!ai(e).length;for(var r in e)if(V.call(e,r))return!1;return!0}function Gc(e,n){return gr(e,n)}function Hc(e,n,r){r=typeof r=="function"?r:u;var t=r?r(e,n):u;return t===u?gr(e,n,u,r):!!t}function Si(e){if(!Y(e))return!1;var n=ue(e);return n==br||n==cl||typeof e.message=="string"&&typeof e.name=="string"&&!vr(e)}function $c(e){return typeof e=="number"&&za(e)}function Xe(e){if(!z(e))return!1;var n=ue(e);return n==Ar||n==na||n==dl||n==ml}function pu(e){return typeof e=="number"&&e==F(e)}function ft(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=qn}function z(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}function Y(e){return e!=null&&typeof e=="object"}var mu=Pa?ve(Pa):Xf;function zc(e,n){return e===n||ii(e,n,wi(n))}function Yc(e,n,r){return r=typeof r=="function"?r:u,ii(e,n,wi(n),r)}function Zc(e){return vu(e)&&e!=+e}function Xc(e){if(jg(e))throw new B(P);return us(e)}function Jc(e){return e===null}function Qc(e){return e==null}function vu(e){return typeof e=="number"||Y(e)&&ue(e)==Xn}function vr(e){if(!Y(e)||ue(e)!=We)return!1;var n=Or(e);if(n===null)return!0;var r=V.call(n,"constructor")&&n.constructor;return typeof r=="function"&&r instanceof r&&Ir.call(r)==zo}var Fi=Ba?ve(Ba):Jf;function ep(e){return pu(e)&&e>=-9007199254740991&&e<=qn}var hu=Sa?ve(Sa):Qf;function gt(e){return typeof e=="string"||!S(e)&&Y(e)&&ue(e)==Qn}function ye(e){return typeof e=="symbol"||Y(e)&&ue(e)==Tr}var Kn=Fa?ve(Fa):eg;function np(e){return e===u}function rp(e){return Y(e)&&se(e)==er}function tp(e){return Y(e)&&ue(e)==hl}var ip=nt(si),ap=nt(function(e,n){return e<=n});function yu(e){if(!e)return[];if(ge(e))return gt(e)?Fe(e):fe(e);if(tr&&e[tr])return Lo(e[tr]());var n=se(e),r=n==Be?$t:n==Se?Br:Vn;return r(e)}function Je(e){if(!e)return e===0?e:0;if(e=Ee(e),e===kr||e===-1/0){var n=e<0?-1:1;return n*ll}return e===e?e:0}function F(e){var n=Je(e),r=n%1;return n===n?r?n-r:n:0}function ku(e){return e?kn(F(e),0,Oe):0}function Ee(e){if(typeof e=="number")return e;if(ye(e))return _r;if(z(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=z(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=Ma(e);var r=Ml.test(e);return r||Dl.test(e)?ko(e.slice(2),r?2:8):Ol.test(e)?_r:+e}function _u(e){return Ce(e,de(e))}function sp(e){return e?kn(F(e),-9007199254740991,qn):e===0?e:0}function D(e){return e==null?"":he(e)}var up=Mn(function(e,n){if(pr(n)||ge(n)){Ce(n,ne(n),e);return}for(var r in n)V.call(n,r)&&lr(e,r,n[r])}),wu=Mn(function(e,n){Ce(n,de(n),e)}),dt=Mn(function(e,n,r,t){Ce(n,de(n),e,t)}),lp=Mn(function(e,n,r,t){Ce(n,ne(n),e,t)}),op=Ye(Qt);function fp(e,n){var r=On(e);return n==null?r:Qa(r,n)}var gp=j(function(e,n){e=U(e);var r=-1,t=n.length,i=t>2?n[2]:u;for(i&&le(n[0],n[1],i)&&(t=1);++r<t;)for(var s=n[r],l=de(s),o=-1,g=l.length;++o<g;){var m=l[o],v=e[m];(v===u||je(v,jn[m])&&!V.call(e,m))&&(e[m]=s[m])}return e}),dp=j(function(e){return e.push(u,Ms),me(bu,u,e)});function cp(e,n){return ja(e,T(n,3),Me)}function pp(e,n){return ja(e,T(n,3),ni)}function mp(e,n){return e==null?e:ei(e,T(n,3),de)}function vp(e,n){return e==null?e:is(e,T(n,3),de)}function hp(e,n){return e&&Me(e,T(n,3))}function yp(e,n){return e&&ni(e,T(n,3))}function kp(e){return e==null?[]:$r(e,ne(e))}function _p(e){return e==null?[]:$r(e,de(e))}function Ii(e,n,r){var t=e==null?u:_n(e,n);return t===u?r:t}function wp(e,n){return e!=null&&Ks(e,n,Wf)}function ji(e,n){return e!=null&&Ks(e,n,Gf)}var bp=Is(function(e,n,r){n!=null&&typeof n.toString!="function"&&(n=jr.call(n)),e[n]=r},Li(ce)),Ap=Is(function(e,n,r){n!=null&&typeof n.toString!="function"&&(n=jr.call(n)),V.call(e,n)?e[n].push(r):e[n]=[r]},T),Tp=j(fr);function ne(e){return ge(e)?Xa(e):ai(e)}function de(e){return ge(e)?Xa(e,!0):ng(e)}function Rp(e,n){var r={};return n=T(n,3),Me(e,function(t,i,s){$e(r,n(t,i,s),t)}),r}function qp(e,n){var r={};return n=T(n,3),Me(e,function(t,i,s){$e(r,i,n(t,i,s))}),r}var xp=Mn(function(e,n,r){zr(e,n,r)}),bu=Mn(function(e,n,r,t){zr(e,n,r,t)}),Ep=Ye(function(e,n){var r={};if(e==null)return r;var t=!1;n=$(n,function(s){return s=fn(s,e),t||(t=s.length>1),s}),Ce(e,ki(e),r),t&&(r=Re(r,re|pn|en,bg));for(var i=n.length;i--;)gi(r,n[i]);return r});function Pp(e,n){return Au(e,ot(T(n)))}var Bp=Ye(function(e,n){return e==null?{}:tg(e,n)});function Au(e,n){if(e==null)return{};var r=$(ki(e),function(t){return[t]});return n=T(n),ps(e,r,function(t,i){return n(t,i[0])})}function Sp(e,n,r){n=fn(n,e);var t=-1,i=n.length;for(i||(i=1,e=u);++t<i;){var s=e==null?u:e[De(n[t])];s===u&&(t=i,s=r),e=Xe(s)?s.call(e):s}return e}function Fp(e,n,r){return e==null?e:dr(e,n,r)}function Ip(e,n,r,t){return t=typeof t=="function"?t:u,e==null?e:dr(e,n,r,t)}var Tu=Ls(ne),Ru=Ls(de);function jp(e,n,r){var t=S(e),i=t||dn(e)||Kn(e);if(n=T(n,4),r==null){var s=e&&e.constructor;i?r=t?new s:[]:z(e)?r=Xe(s)?On(Or(e)):{}:r={}}return(i?be:Me)(e,function(l,o,g){return n(r,l,o,g)}),r}function Np(e,n){return e==null?!0:gi(e,n)}function Lp(e,n,r){return e==null?e:ks(e,n,pi(r))}function Op(e,n,r,t){return t=typeof t=="function"?t:u,e==null?e:ks(e,n,pi(r),t)}function Vn(e){return e==null?[]:Ht(e,ne(e))}function Mp(e){return e==null?[]:Ht(e,de(e))}function Cp(e,n,r){return r===u&&(r=n,n=u),r!==u&&(r=Ee(r),r=r===r?r:0),n!==u&&(n=Ee(n),n=n===n?n:0),kn(Ee(e),n,r)}function Dp(e,n,r){return n=Je(n),r===u?(r=n,n=0):r=Je(r),e=Ee(e),Hf(e,n,r)}function Kp(e,n,r){if(r&&typeof r!="boolean"&&le(e,n,r)&&(n=r=u),r===u&&(typeof n=="boolean"?(r=n,n=u):typeof e=="boolean"&&(r=e,e=u)),e===u&&n===u?(e=0,n=1):(e=Je(e),n===u?(n=e,e=0):n=Je(n)),e>n){var t=e;e=n,n=t}if(r||e%1||n%1){var i=Ya();return ae(e+i*(n-e+yo("1e-"+((i+"").length-1))),n)}return li(e,n)}var Vp=Cn(function(e,n,r){return n=n.toLowerCase(),e+(r?qu(n):n)});function qu(e){return Ni(D(e).toLowerCase())}function xu(e){return e=D(e),e&&e.replace(Vl,So).replace(uo,"")}function Up(e,n,r){e=D(e),n=he(n);var t=e.length;r=r===u?t:kn(F(r),0,t);var i=r;return r-=n.length,r>=0&&e.slice(r,i)==n}function Wp(e){return e=D(e),e&&bl.test(e)?e.replace(ia,Fo):e}function Gp(e){return e=D(e),e&&El.test(e)?e.replace(Bt,"\\$&"):e}var Hp=Cn(function(e,n,r){return e+(r?"-":"")+n.toLowerCase()}),$p=Cn(function(e,n,r){return e+(r?" ":"")+n.toLowerCase()}),zp=Bs("toLowerCase");function Yp(e,n,r){e=D(e),n=F(n);var t=n?Fn(e):0;if(!n||t>=n)return e;var i=(n-t)/2;return et(Kr(i),r)+e+et(Dr(i),r)}function Zp(e,n,r){e=D(e),n=F(n);var t=n?Fn(e):0;return n&&t<n?e+et(n-t,r):e}function Xp(e,n,r){e=D(e),n=F(n);var t=n?Fn(e):0;return n&&t<n?et(n-t,r)+e:e}function Jp(e,n,r){return r||n==null?n=0:n&&(n=+n),af(D(e).replace(St,""),n||0)}function Qp(e,n,r){return(r?le(e,n,r):n===u)?n=1:n=F(n),oi(D(e),n)}function em(){var e=arguments,n=D(e[0]);return e.length<3?n:n.replace(e[1],e[2])}var nm=Cn(function(e,n,r){return e+(r?"_":"")+n.toLowerCase()});function rm(e,n,r){return r&&typeof r!="number"&&le(e,n,r)&&(n=r=u),r=r===u?Oe:r>>>0,r?(e=D(e),e&&(typeof n=="string"||n!=null&&!Fi(n))&&(n=he(n),!n&&Sn(e))?gn(Fe(e),0,r):e.split(n,r)):[]}var tm=Cn(function(e,n,r){return e+(r?" ":"")+Ni(n)});function im(e,n,r){return e=D(e),r=r==null?0:kn(F(r),0,e.length),n=he(n),e.slice(r,r+n.length)==n}function am(e,n,r){var t=a.templateSettings;r&&le(e,n,r)&&(n=u),e=D(e),n=dt({},n,t,Os);var i=dt({},n.imports,t.imports,Os),s=ne(i),l=Ht(i,s),o,g,m=0,v=n.interpolate||Rr,h="__p += '",k=zt((n.escape||Rr).source+"|"+v.source+"|"+(v===aa?Ll:Rr).source+"|"+(n.evaluate||Rr).source+"|$","g"),A="//# sourceURL="+(V.call(n,"sourceURL")?(n.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++co+"]")+`
`;e.replace(k,function(x,N,O,ke,oe,_e){return O||(O=ke),h+=e.slice(m,_e).replace(Ul,Io),N&&(o=!0,h+=`' +
__e(`+N+`) +
'`),oe&&(g=!0,h+=`';
`+oe+`;
__p += '`),O&&(h+=`' +
((__t = (`+O+`)) == null ? '' : __t) +
'`),m=_e+x.length,x}),h+=`';
`;var q=V.call(n,"variable")&&n.variable;if(!q)h=`with (obj) {
`+h+`
}
`;else if(jl.test(q))throw new B(H);h=(g?h.replace(yl,""):h).replace(kl,"$1").replace(_l,"$1;"),h="function("+(q||"obj")+`) {
`+(q?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(o?", __e = _.escape":"")+(g?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+h+`return __p
}`;var I=Pu(function(){return C(s,A+"return "+h).apply(u,l)});if(I.source=h,Si(I))throw I;return I}function sm(e){return D(e).toLowerCase()}function um(e){return D(e).toUpperCase()}function lm(e,n,r){if(e=D(e),e&&(r||n===u))return Ma(e);if(!e||!(n=he(n)))return e;var t=Fe(e),i=Fe(n),s=Ca(t,i),l=Da(t,i)+1;return gn(t,s,l).join("")}function om(e,n,r){if(e=D(e),e&&(r||n===u))return e.slice(0,Va(e)+1);if(!e||!(n=he(n)))return e;var t=Fe(e),i=Da(t,Fe(n))+1;return gn(t,0,i).join("")}function fm(e,n,r){if(e=D(e),e&&(r||n===u))return e.replace(St,"");if(!e||!(n=he(n)))return e;var t=Fe(e),i=Ca(t,Fe(n));return gn(t,i).join("")}function gm(e,n){var r=rl,t=tl;if(z(n)){var i="separator"in n?n.separator:i;r="length"in n?F(n.length):r,t="omission"in n?he(n.omission):t}e=D(e);var s=e.length;if(Sn(e)){var l=Fe(e);s=l.length}if(r>=s)return e;var o=r-Fn(t);if(o<1)return t;var g=l?gn(l,0,o).join(""):e.slice(0,o);if(i===u)return g+t;if(l&&(o+=g.length-o),Fi(i)){if(e.slice(o).search(i)){var m,v=g;for(i.global||(i=zt(i.source,D(sa.exec(i))+"g")),i.lastIndex=0;m=i.exec(v);)var h=m.index;g=g.slice(0,h===u?o:h)}}else if(e.indexOf(he(i),o)!=o){var k=g.lastIndexOf(i);k>-1&&(g=g.slice(0,k))}return g+t}function dm(e){return e=D(e),e&&wl.test(e)?e.replace(ta,Do):e}var cm=Cn(function(e,n,r){return e+(r?" ":"")+n.toUpperCase()}),Ni=Bs("toUpperCase");function Eu(e,n,r){return e=D(e),n=r?u:n,n===u?No(e)?Uo(e):qo(e):e.match(n)||[]}var Pu=j(function(e,n){try{return me(e,u,n)}catch(r){return Si(r)?r:new B(r)}}),pm=Ye(function(e,n){return be(n,function(r){r=De(r),$e(e,r,Pi(e[r],e))}),e});function mm(e){var n=e==null?0:e.length,r=T();return e=n?$(e,function(t){if(typeof t[1]!="function")throw new Ae(R);return[r(t[0]),t[1]]}):[],j(function(t){for(var i=-1;++i<n;){var s=e[i];if(me(s[0],this,t))return me(s[1],this,t)}})}function vm(e){return Kf(Re(e,re))}function Li(e){return function(){return e}}function hm(e,n){return e==null||e!==e?n:e}var ym=Fs(),km=Fs(!0);function ce(e){return e}function Oi(e){return ls(typeof e=="function"?e:Re(e,re))}function _m(e){return fs(Re(e,re))}function wm(e,n){return gs(e,Re(n,re))}var bm=j(function(e,n){return function(r){return fr(r,e,n)}}),Am=j(function(e,n){return function(r){return fr(e,r,n)}});function Mi(e,n,r){var t=ne(n),i=$r(n,t);r==null&&!(z(n)&&(i.length||!t.length))&&(r=n,n=e,e=this,i=$r(n,ne(n)));var s=!(z(r)&&"chain"in r)||!!r.chain,l=Xe(e);return be(i,function(o){var g=n[o];e[o]=g,l&&(e.prototype[o]=function(){var m=this.__chain__;if(s||m){var v=e(this.__wrapped__),h=v.__actions__=fe(this.__actions__);return h.push({func:g,args:arguments,thisArg:e}),v.__chain__=m,v}return g.apply(e,an([this.value()],arguments))})}),e}function Tm(){return te._===this&&(te._=Yo),this}function Ci(){}function Rm(e){return e=F(e),j(function(n){return ds(n,e)})}var qm=vi($),xm=vi(Ia),Em=vi(Kt);function Bu(e){return Ai(e)?Vt(De(e)):ig(e)}function Pm(e){return function(n){return e==null?u:_n(e,n)}}var Bm=js(),Sm=js(!0);function Di(){return[]}function Ki(){return!1}function Fm(){return{}}function Im(){return""}function jm(){return!0}function Nm(e,n){if(e=F(e),e<1||e>qn)return[];var r=Oe,t=ae(e,Oe);n=T(n),e-=Oe;for(var i=Gt(t,n);++r<e;)n(r);return i}function Lm(e){return S(e)?$(e,De):ye(e)?[e]:fe(Zs(D(e)))}function Om(e){var n=++$o;return D(e)+n}var Mm=Qr(function(e,n){return e+n},0),Cm=hi("ceil"),Dm=Qr(function(e,n){return e/n},1),Km=hi("floor");function Vm(e){return e&&e.length?Hr(e,ce,ri):u}function Um(e,n){return e&&e.length?Hr(e,T(n,2),ri):u}function Wm(e){return La(e,ce)}function Gm(e,n){return La(e,T(n,2))}function Hm(e){return e&&e.length?Hr(e,ce,si):u}function $m(e,n){return e&&e.length?Hr(e,T(n,2),si):u}var zm=Qr(function(e,n){return e*n},1),Ym=hi("round"),Zm=Qr(function(e,n){return e-n},0);function Xm(e){return e&&e.length?Wt(e,ce):0}function Jm(e,n){return e&&e.length?Wt(e,T(n,2)):0}return a.after=_c,a.ary=uu,a.assign=up,a.assignIn=wu,a.assignInWith=dt,a.assignWith=lp,a.at=op,a.before=lu,a.bind=Pi,a.bindAll=pm,a.bindKey=ou,a.castArray=Fc,a.chain=iu,a.chunk=Kg,a.compact=Vg,a.concat=Ug,a.cond=mm,a.conforms=vm,a.constant=Li,a.countBy=Xd,a.create=fp,a.curry=fu,a.curryRight=gu,a.debounce=du,a.defaults=gp,a.defaultsDeep=dp,a.defer=wc,a.delay=bc,a.difference=Wg,a.differenceBy=Gg,a.differenceWith=Hg,a.drop=$g,a.dropRight=zg,a.dropRightWhile=Yg,a.dropWhile=Zg,a.fill=Xg,a.filter=Qd,a.flatMap=rc,a.flatMapDeep=tc,a.flatMapDepth=ic,a.flatten=eu,a.flattenDeep=Jg,a.flattenDepth=Qg,a.flip=Ac,a.flow=ym,a.flowRight=km,a.fromPairs=ed,a.functions=kp,a.functionsIn=_p,a.groupBy=ac,a.initial=rd,a.intersection=td,a.intersectionBy=id,a.intersectionWith=ad,a.invert=bp,a.invertBy=Ap,a.invokeMap=uc,a.iteratee=Oi,a.keyBy=lc,a.keys=ne,a.keysIn=de,a.map=st,a.mapKeys=Rp,a.mapValues=qp,a.matches=_m,a.matchesProperty=wm,a.memoize=lt,a.merge=xp,a.mergeWith=bu,a.method=bm,a.methodOf=Am,a.mixin=Mi,a.negate=ot,a.nthArg=Rm,a.omit=Ep,a.omitBy=Pp,a.once=Tc,a.orderBy=oc,a.over=qm,a.overArgs=Rc,a.overEvery=xm,a.overSome=Em,a.partial=Bi,a.partialRight=cu,a.partition=fc,a.pick=Bp,a.pickBy=Au,a.property=Bu,a.propertyOf=Pm,a.pull=od,a.pullAll=ru,a.pullAllBy=fd,a.pullAllWith=gd,a.pullAt=dd,a.range=Bm,a.rangeRight=Sm,a.rearg=qc,a.reject=cc,a.remove=cd,a.rest=xc,a.reverse=xi,a.sampleSize=mc,a.set=Fp,a.setWith=Ip,a.shuffle=vc,a.slice=pd,a.sortBy=kc,a.sortedUniq=wd,a.sortedUniqBy=bd,a.split=rm,a.spread=Ec,a.tail=Ad,a.take=Td,a.takeRight=Rd,a.takeRightWhile=qd,a.takeWhile=xd,a.tap=Vd,a.throttle=Pc,a.thru=at,a.toArray=yu,a.toPairs=Tu,a.toPairsIn=Ru,a.toPath=Lm,a.toPlainObject=_u,a.transform=jp,a.unary=Bc,a.union=Ed,a.unionBy=Pd,a.unionWith=Bd,a.uniq=Sd,a.uniqBy=Fd,a.uniqWith=Id,a.unset=Np,a.unzip=Ei,a.unzipWith=tu,a.update=Lp,a.updateWith=Op,a.values=Vn,a.valuesIn=Mp,a.without=jd,a.words=Eu,a.wrap=Sc,a.xor=Nd,a.xorBy=Ld,a.xorWith=Od,a.zip=Md,a.zipObject=Cd,a.zipObjectDeep=Dd,a.zipWith=Kd,a.entries=Tu,a.entriesIn=Ru,a.extend=wu,a.extendWith=dt,Mi(a,a),a.add=Mm,a.attempt=Pu,a.camelCase=Vp,a.capitalize=qu,a.ceil=Cm,a.clamp=Cp,a.clone=Ic,a.cloneDeep=Nc,a.cloneDeepWith=Lc,a.cloneWith=jc,a.conformsTo=Oc,a.deburr=xu,a.defaultTo=hm,a.divide=Dm,a.endsWith=Up,a.eq=je,a.escape=Wp,a.escapeRegExp=Gp,a.every=Jd,a.find=ec,a.findIndex=Js,a.findKey=cp,a.findLast=nc,a.findLastIndex=Qs,a.findLastKey=pp,a.floor=Km,a.forEach=au,a.forEachRight=su,a.forIn=mp,a.forInRight=vp,a.forOwn=hp,a.forOwnRight=yp,a.get=Ii,a.gt=Mc,a.gte=Cc,a.has=wp,a.hasIn=ji,a.head=nu,a.identity=ce,a.includes=sc,a.indexOf=nd,a.inRange=Dp,a.invoke=Tp,a.isArguments=An,a.isArray=S,a.isArrayBuffer=Dc,a.isArrayLike=ge,a.isArrayLikeObject=Z,a.isBoolean=Kc,a.isBuffer=dn,a.isDate=Vc,a.isElement=Uc,a.isEmpty=Wc,a.isEqual=Gc,a.isEqualWith=Hc,a.isError=Si,a.isFinite=$c,a.isFunction=Xe,a.isInteger=pu,a.isLength=ft,a.isMap=mu,a.isMatch=zc,a.isMatchWith=Yc,a.isNaN=Zc,a.isNative=Xc,a.isNil=Qc,a.isNull=Jc,a.isNumber=vu,a.isObject=z,a.isObjectLike=Y,a.isPlainObject=vr,a.isRegExp=Fi,a.isSafeInteger=ep,a.isSet=hu,a.isString=gt,a.isSymbol=ye,a.isTypedArray=Kn,a.isUndefined=np,a.isWeakMap=rp,a.isWeakSet=tp,a.join=sd,a.kebabCase=Hp,a.last=xe,a.lastIndexOf=ud,a.lowerCase=$p,a.lowerFirst=zp,a.lt=ip,a.lte=ap,a.max=Vm,a.maxBy=Um,a.mean=Wm,a.meanBy=Gm,a.min=Hm,a.minBy=$m,a.stubArray=Di,a.stubFalse=Ki,a.stubObject=Fm,a.stubString=Im,a.stubTrue=jm,a.multiply=zm,a.nth=ld,a.noConflict=Tm,a.noop=Ci,a.now=ut,a.pad=Yp,a.padEnd=Zp,a.padStart=Xp,a.parseInt=Jp,a.random=Kp,a.reduce=gc,a.reduceRight=dc,a.repeat=Qp,a.replace=em,a.result=Sp,a.round=Ym,a.runInContext=f,a.sample=pc,a.size=hc,a.snakeCase=nm,a.some=yc,a.sortedIndex=md,a.sortedIndexBy=vd,a.sortedIndexOf=hd,a.sortedLastIndex=yd,a.sortedLastIndexBy=kd,a.sortedLastIndexOf=_d,a.startCase=tm,a.startsWith=im,a.subtract=Zm,a.sum=Xm,a.sumBy=Jm,a.template=am,a.times=Nm,a.toFinite=Je,a.toInteger=F,a.toLength=ku,a.toLower=sm,a.toNumber=Ee,a.toSafeInteger=sp,a.toString=D,a.toUpper=um,a.trim=lm,a.trimEnd=om,a.trimStart=fm,a.truncate=gm,a.unescape=dm,a.uniqueId=Om,a.upperCase=cm,a.upperFirst=Ni,a.each=au,a.eachRight=su,a.first=nu,Mi(a,function(){var e={};return Me(a,function(n,r){V.call(a.prototype,r)||(e[r]=n)}),e}(),{chain:!1}),a.VERSION=E,be(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){a[e].placeholder=a}),be(["drop","take"],function(e,n){L.prototype[e]=function(r){r=r===u?1:ee(F(r),0);var t=this.__filtered__&&!n?new L(this):this.clone();return t.__filtered__?t.__takeCount__=ae(r,t.__takeCount__):t.__views__.push({size:ae(r,Oe),type:e+(t.__dir__<0?"Right":"")}),t},L.prototype[e+"Right"]=function(r){return this.reverse()[e](r).reverse()}}),be(["filter","map","takeWhile"],function(e,n){var r=n+1,t=r==ea||r==ul;L.prototype[e]=function(i){var s=this.clone();return s.__iteratees__.push({iteratee:T(i,3),type:r}),s.__filtered__=s.__filtered__||t,s}}),be(["head","last"],function(e,n){var r="take"+(n?"Right":"");L.prototype[e]=function(){return this[r](1).value()[0]}}),be(["initial","tail"],function(e,n){var r="drop"+(n?"":"Right");L.prototype[e]=function(){return this.__filtered__?new L(this):this[r](1)}}),L.prototype.compact=function(){return this.filter(ce)},L.prototype.find=function(e){return this.filter(e).head()},L.prototype.findLast=function(e){return this.reverse().find(e)},L.prototype.invokeMap=j(function(e,n){return typeof e=="function"?new L(this):this.map(function(r){return fr(r,e,n)})}),L.prototype.reject=function(e){return this.filter(ot(T(e)))},L.prototype.slice=function(e,n){e=F(e);var r=this;return r.__filtered__&&(e>0||n<0)?new L(r):(e<0?r=r.takeRight(-e):e&&(r=r.drop(e)),n!==u&&(n=F(n),r=n<0?r.dropRight(-n):r.take(n-e)),r)},L.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},L.prototype.toArray=function(){return this.take(Oe)},Me(L.prototype,function(e,n){var r=/^(?:filter|find|map|reject)|While$/.test(n),t=/^(?:head|last)$/.test(n),i=a[t?"take"+(n=="last"?"Right":""):n],s=t||/^find/.test(n);i&&(a.prototype[n]=function(){var l=this.__wrapped__,o=t?[1]:arguments,g=l instanceof L,m=o[0],v=g||S(l),h=function(N){var O=i.apply(a,an([N],o));return t&&k?O[0]:O};v&&r&&typeof m=="function"&&m.length!=1&&(g=v=!1);var k=this.__chain__,A=!!this.__actions__.length,q=s&&!k,I=g&&!A;if(!s&&v){l=I?l:new L(this);var x=e.apply(l,o);return x.__actions__.push({func:at,args:[h],thisArg:u}),new Te(x,k)}return q&&I?e.apply(this,o):(x=this.thru(h),q?t?x.value()[0]:x.value():x)})}),be(["pop","push","shift","sort","splice","unshift"],function(e){var n=Sr[e],r=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",t=/^(?:pop|shift)$/.test(e);a.prototype[e]=function(){var i=arguments;if(t&&!this.__chain__){var s=this.value();return n.apply(S(s)?s:[],i)}return this[r](function(l){return n.apply(S(l)?l:[],i)})}}),Me(L.prototype,function(e,n){var r=a[n];if(r){var t=r.name+"";V.call(Ln,t)||(Ln[t]=[]),Ln[t].push({name:n,func:r})}}),Ln[Jr(u,Rn).name]=[{name:"wrapper",func:u}],L.prototype.clone=df,L.prototype.reverse=cf,L.prototype.value=pf,a.prototype.at=Ud,a.prototype.chain=Wd,a.prototype.commit=Gd,a.prototype.next=Hd,a.prototype.plant=zd,a.prototype.reverse=Yd,a.prototype.toJSON=a.prototype.valueOf=a.prototype.value=Zd,a.prototype.first=a.prototype.head,tr&&(a.prototype[tr]=$d),a},In=Wo();mn?((mn.exports=In)._=In,Ot._=In):te._=In}).call(Iv)}(hr,hr.exports)),hr.exports}var Ku=jv();const Nv="NORGE",Vu=c=>c??"",Lv=c=>{const{adresselinje1:_,adresselinje2:u,adresselinje3:E,postNummer:b,poststed:P,land:R}=c,H=[_,u,E].filter(M=>!!M).join(", "),K=`${Vu(b)} ${Vu(P)}`,J=(R==null?void 0:R.toUpperCase())!==Nv?R:void 0;return[H,K,J].map(M=>M==null?void 0:M.trim()).filter(M=>!!M).join(", ").trim()},xh=(c,_)=>[...c].sort(Zu).find(u=>u.adresseType===_),Eh=(c,_)=>c.length!==_.length?!1:c.every(u=>_.some(E=>Ku.isEqual(u,E)))&&_.every(u=>c.some(E=>Ku.isEqual(E,u)));function Ov(c){throw new Error("Uventet enum verdi: alle tilfeller skal må håndteres:",c)}const Gi=Un(yr);var Mv=(c=>(c[c.SOKNAD=0]="SOKNAD",c[c.FREG=1]="FREG",c[c.MEDL=2]="MEDL",c))(Mv||{});const Cv=c=>{switch(c){case 0:return Gi.formatMessage({id:"FaktaKilde.Soknad"});case 1:return Gi.formatMessage({id:"FaktaKilde.FREG"});case 2:return Gi.formatMessage({id:"FaktaKilde.MEDL"});default:return Ov(c)}},Xu=cn.forwardRef((c,_)=>y.jsx(Hi,{gap:"2",style:{display:"flex"},...c,ref:_}));Xu.displayName="FaktaGruppe";const Dv=({label:c,value:_,kilde:u})=>y.jsx(ht,{background:"bg-subtle",flexGrow:"1",paddingBlock:"2",paddingInline:"4",borderRadius:"medium",children:y.jsxs(Xi,{gap:"6",children:[y.jsxs("div",{children:[y.jsx($u,{size:"small",children:c}),y.jsx($i,{size:"large",children:_})]}),y.jsx(zi,{uppercase:!0,children:Cv(u)})]})});Xu.__docgenInfo={description:"",methods:[],displayName:"FaktaGruppe"};Dv.__docgenInfo={description:"",methods:[],displayName:"FaktaBox",props:{label:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},value:{required:!0,tsType:{name:"string"},description:""},kilde:{required:!0,tsType:{name:"FaktaKilde"},description:""}}};const Kv="_boks_c3bfh_1",Vv="_harBorderLeft_c3bfh_8",Uv="_harBorderTop_c3bfh_12",Ju={boks:Kv,harBorderLeft:Vv,harBorderTop:Uv},Wv=kv.bind(Ju),Gv=({harBorderTop:c=!1,harBorderLeft:_=!0,children:u})=>y.jsx("div",{className:Wv(Ju.boks,{harBorderLeft:_,harBorderTop:c}),children:u});Gv.__docgenInfo={description:"",methods:[],displayName:"Boks",props:{harBorderTop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},harBorderLeft:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Qu=({adresser:c,erAnnenpart:_=!1,harSammeAdresser:u=!1,adresseKodeverk:E})=>{if(u)return y.jsx(ht,{padding:"4",children:y.jsx(Fu,{textColor:"subtle",children:y.jsx(Pe,{id:"AdresseTabell.SammeAdresse"})})});const b=P=>P+1===c.length?{border:"0px"}:{};return y.jsxs(y.Fragment,{children:[c.length===0&&y.jsx(ht,{padding:"4",children:y.jsx(Fu,{textColor:"subtle",children:y.jsx(Pe,{id:"AdresseTabell.IngenAdresse",values:{erAnnenpart:_}})})}),c.length>0&&y.jsxs(Le,{style:{tableLayout:"fixed"},children:[y.jsx(Le.Header,{children:y.jsxs(Le.Row,{children:[y.jsx(Le.HeaderCell,{children:y.jsx(Pe,{id:"AdresseTabell.PeriodeLabel"})}),y.jsx(Le.HeaderCell,{children:y.jsx(Pe,{id:"AdresseTabell.AdresseLabel"})}),y.jsx(Le.HeaderCell,{children:y.jsx(Pe,{id:"AdresseTabell.TypeLabel"})})]})}),y.jsx(Le.Body,{children:c.sort(Zu).map((P,R)=>{var H;return y.jsxs(Le.Row,{children:[y.jsx(Le.DataCell,{style:b(R),children:y.jsx(nv,{dateStringFom:P.fom,dateStringTom:P.tom===Yi?void 0:P.tom})}),y.jsx(Le.DataCell,{style:b(R),children:Lv(P)}),y.jsx(Le.DataCell,{style:b(R),children:(H=E.find(K=>K.kode===P.adresseType))==null?void 0:H.navn})]},P.adresseType+P.fom+P.tom)})})]})]})};Qu.__docgenInfo={description:"",methods:[],displayName:"AdresseTabell",props:{adresser:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"},description:""}}};const Hv=Un(yr),$v=c=>{switch(c){case Ou.KVINNE:return Ui.female;case Ou.MANN:return Ui.male;default:return Ui.unknown}},mt=({rolle:c="BRUKER",alleKodeverk:_,harSammeAdresser:u,navn:E,kjønn:b,sivilstand:P,fødselsdato:R,dødsdato:H,adresser:K,showIcon:J=!0})=>{var re;const M=c==="BARN";return y.jsx(kt,{value:Hv,children:y.jsx(ht,{background:"bg-subtle",padding:"4",borderRadius:"large","aria-label":E,children:y.jsxs(Xi,{gap:"1",children:[y.jsxs(Hi,{gap:"5",children:[J&&y.jsx("div",{children:y.jsx(_v,{gender:$v(b),isChild:M})}),y.jsxs("div",{children:[y.jsxs(Hi,{gap:"4",children:[y.jsx($u,{children:y.jsx(Pe,{id:"PersonPanel.RolleOgNavn",values:{rolle:c,navn:E}})}),M&&R&&!H&&y.jsx($i,{children:y.jsx(Pe,{id:"PersonPanel.Fodt",values:{dato:Iu(R)}})}),H&&y.jsx($i,{children:y.jsx(Pe,{id:"PersonPanel.Dod",values:{dato:Iu(H)}})})]}),!M&&P&&y.jsx(zi,{"aria-label":"Sivilstand",children:(re=_[yt.SIVILSTAND_TYPE].find(pn=>pn.kode===P))==null?void 0:re.navn})]})]}),y.jsxs(zi,{children:[c==="BARN"&&y.jsx(Pe,{id:"PersonPanel.Beskrivelse.Barn",values:{rolle:c}}),c==="BRUKER"&&y.jsx(Pe,{id:"PersonPanel.Beskrivelse.Bruker",values:{rolle:c}}),c==="ANNEN_PART"&&y.jsx(Pe,{id:"PersonPanel.Beskrivelse.Annenpart",values:{rolle:c}})]}),y.jsx(Qu,{harSammeAdresser:u,adresser:K,adresseKodeverk:_[yt.ADRESSE_TYPE]})]})})})};mt.__docgenInfo={description:"",methods:[],displayName:"Personopplysninger",props:{rolle:{required:!1,tsType:{name:"union",raw:"'BARN' | 'BRUKER' | 'ANNEN_PART'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'BRUKER'"},{name:"literal",value:"'ANNEN_PART'"}]},description:"",defaultValue:{value:"'BRUKER'",computed:!1}},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Personadresse[]"},description:""},kjønn:{required:!1,tsType:{name:"string"},description:""},showIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const zv=({personoversikt:{barn:c,bruker:_,annenPart:u},alleKodeverk:E})=>y.jsxs(Xi,{gap:"2",children:[c.map(b=>y.jsx(mt,{...b,alleKodeverk:E,rolle:"BARN"},b.aktoerId)),y.jsx(mt,{rolle:"BRUKER",alleKodeverk:E,..._}),u&&y.jsx(mt,{...u,rolle:"ANNEN_PART",alleKodeverk:E})]});zv.__docgenInfo={description:"",methods:[],displayName:"PersonopplysningerForFamilie",props:{alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Yv="default",Zv=(c,_,u,E,b,P)=>{const[R,H]=cn.useState(!1);cn.useEffect(()=>{c({id:_})},[]);const K=E&&(P===_||b&&P===Yv),J=rv(E);return cn.useEffect(()=>{E?c({id:_,tekst:u,erAktiv:K,harApneAksjonspunkter:b}):!E&&J&&c({id:_}),H(K)},[J,E,K,b]),E&&R},Xv=({standardPanelProps:c,valgtFaktaSteg:_,registrerFaktaPanel:u,skalPanelVisesIMeny:E,faktaPanelKode:b,faktaPanelMenyTekst:P,children:R})=>Zv(u,b,P,E,c.harApneAksjonspunkter,_)?R:null,Uu="default",Wu="default",Jv=(c,_,u,E,b,P)=>R=>{const K=(Array.isArray(R)?R:[R]).map(M=>({"@type":M.kode,...M})),J={saksnummer:c.saksnummer,behandlingUuid:_.uuid,behandlingVersjon:_.versjon};if(K&&b&&P){if(K.length===0)throw Error("Det har oppstått en teknisk feil ved lagring av aksjonspunkter. Meld feilen i Porten.");if(P.includes(K[0].kode))return b({...J,overstyrteAksjonspunktDtoer:K}).then(()=>u(Wu,Uu))}return E({...J,bekreftedeAksjonspunktDtoer:K}).then(()=>u(Wu,Uu))},Qv=(c,_=[])=>{const[u,E]=cn.useState(),b=cn.useContext(qv);cn.useEffect(()=>{u&&E(void 0)},[b.behandling.versjon]);const{aksjonspunkt:P}=b.behandling,R=P&&c?P.filter(M=>c.includes(M.definisjon)):[],H=Tv(b.behandling,[],b.rettigheter,b.hasFetchError),K=Rv(b.behandling,R),J=Jv(b.fagsak,b.behandling,b.oppdaterProsessStegOgFaktaPanelIUrl,b.lagreAksjonspunkter,b.lagreOverstyrteAksjonspunkter,_);return{behandling:b.behandling,submittable:!R.some(M=>Mu(M.status))||R.some(M=>M.kanLoses),harApneAksjonspunkter:R.some(M=>Mu(M.status)&&M.kanLoses),alleKodeverk:b.alleKodeverk,aksjonspunkter:R,readOnly:H,alleMerknaderFraBeslutter:K,submitCallback:J,formData:u,setFormData:E}},eh="_selectWidth_1ur6m_1",nh="_leftCol_1ur6m_5",Gu={selectWidth:eh,leftCol:nh},Gn=({intl:c,readOnly:_,vergetyper:u=[],alleMerknaderFraBeslutter:E,valgtVergeType:b})=>y.jsxs(tv,{merknaderFraBeslutter:E[Ji.AVKLAR_VERGE],children:[y.jsx(pv,{name:"vergeType",className:Gu.selectWidth,label:c.formatMessage({id:"Verge.TypeVerge"}),validate:[Tn],selectValues:u.map(P=>y.jsx("option",{value:P.kode,children:P.navn},P.kode)),readOnly:_}),y.jsx(iv,{children:b&&y.jsxs(y.Fragment,{children:[y.jsx(vt,{sixteenPx:!0}),y.jsxs(ju,{children:[y.jsx(ct,{className:Gu.leftCol,children:y.jsx(Vi,{name:"navn",label:c.formatMessage({id:"Verge.Navn"}),validate:[Tn,mv],readOnly:_})}),y.jsxs(ct,{children:[b!==Zi.ADVOKAT&&y.jsx(Vi,{name:"fnr",label:c.formatMessage({id:"Verge.FodselsNummer"}),validate:[Tn,vv],readOnly:_}),b===Zi.ADVOKAT&&y.jsx(Vi,{name:"organisasjonsnummer",label:c.formatMessage({id:"Verge.Organisasjonsnummer"}),validate:[Tn],readOnly:_})]})]}),y.jsx(vt,{sixteenPx:!0}),y.jsxs(ju,{children:[y.jsx(ct,{children:y.jsx(Nu,{name:"gyldigFom",label:c.formatMessage({id:"Verge.PeriodeFOM"}),validate:[Tn,Lu],isReadOnly:_})}),y.jsx(ct,{children:y.jsx(Nu,{name:"gyldigTom",label:c.formatMessage({id:"Verge.PeriodeTOM"}),validate:[Lu],isReadOnly:_})})]})]})})]});Gn.buildInitialValues=c=>({navn:c.navn,gyldigFom:c.gyldigFom,gyldigTom:c.gyldigTom,fnr:c.fnr,organisasjonsnummer:c.organisasjonsnummer,vergeType:c.vergeType||void 0});Gn.transformValues=c=>({vergeType:c.vergeType,navn:c.navn,fnr:c.fnr,organisasjonsnummer:c.organisasjonsnummer,gyldigFom:c.gyldigFom,gyldigTom:c.gyldigTom,kode:Ji.AVKLAR_VERGE});Gn.__docgenInfo={description:`RegistrereVergeFaktaForm

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
}`,signature:{properties:[{key:"vergeType",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fnr",value:{name:"string",required:!0}},{key:"organisasjonsnummer",value:{name:"string",required:!0}},{key:"gyldigFom",value:{name:"string",required:!0}},{key:"gyldigTom",value:{name:"string",required:!1}},{key:"kode",value:{name:"AksjonspunktKode.AVKLAR_VERGE",required:!0}}]}}}}],displayName:"RegistrereVergeFaktaForm",props:{vergetyper:{defaultValue:{value:"[]",computed:!1},required:!1}}};const rh=(c,_)=>({...Wn.initialValues(_),...Gn.buildInitialValues(c||{})}),th=c=>({...Gn.transformValues(c),...Wn.transformValues(c)}),el=({hasOpenAksjonspunkter:c,submittable:_,readOnly:u,alleMerknaderFraBeslutter:E,aksjonspunkter:b,verge:P,alleKodeverk:R,submitCallback:H,formData:K,setFormData:J})=>{const M=zu(),re=hv({defaultValues:K||rh(P,b),shouldUnregister:!0}),pn=re.watch("vergeType"),en=re.watch("begrunnelse"),nn=cn.useMemo(()=>R[yt.VERGE_TYPE].sort((rn,pe)=>rn.navn.localeCompare(pe.navn)),[R[yt.VERGE_TYPE]]);return b.length===0?null:y.jsxs(y.Fragment,{children:[c&&y.jsx(av,{children:M.formatMessage({id:"RegistrereVergeInfoPanel.CheckInformation"})}),y.jsxs(yv,{formMethods:re,onSubmit:rn=>H(th(rn)),setDataOnUnmount:J,children:[y.jsx(Gn,{readOnly:u,intl:M,vergetyper:nn,valgtVergeType:pn,alleMerknaderFraBeslutter:E}),y.jsx(vt,{twentyPx:!0}),y.jsx(Wn,{isSubmittable:_,isReadOnly:u,hasBegrunnelse:!!en}),y.jsx(vt,{twentyPx:!0}),y.jsx(Yu,{isSubmittable:_&&!!pn,isReadOnly:u,isSubmitting:re.formState.isSubmitting,isDirty:re.formState.isDirty})]})]})};el.__docgenInfo={description:`RegistrereVergeInfoPanel

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
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!1}},{key:"fnr",value:{name:"string",required:!1}},{key:"gyldigFom",value:{name:"string",required:!1}},{key:"gyldigTom",value:{name:"string",required:!1}},{key:"vergeType",value:{name:"string",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}}]}},description:""},hasOpenAksjonspunkter:{required:!0,tsType:{name:"boolean"},description:""},submittable:{required:!0,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleMerknaderFraBeslutter:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""},formData:{required:!1,tsType:{name:"any"},description:""},setFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: any) => void",signature:{arguments:[{type:{name:"any"},name:"data"}],return:{name:"void"}}},description:""}}};const ih={"RegistrereVergeInfoPanel.CheckInformation":"Fyll ut og kontroller vergeopplysninger","Verge.KontaktPerson":"Kontaktperson","Verge.Navn":"Navn","Verge.Mandat":"Mandat","Verge.FodselsNummer":"Fødselsnummer","Verge.PeriodeFOM":"Periode f.o.m.","Verge.PeriodeTOM":"Periode t.o.m.","Verge.TypeVerge":"Type verge","Verge.VergeFullmektig":"Verge/fullmektig","Verge.Soker":"Søker","Verge.BrukerErUnderTvungenForvaltning":"Søker er under tvungen forvaltning","Verge.Organisasjonsnummer":"Organisasjonsnummer"},ah=Un(ih),nl=({verge:c={},aksjonspunkter:_,alleMerknaderFraBeslutter:u,alleKodeverk:E,submitCallback:b,readOnly:P,harApneAksjonspunkter:R,submittable:H,formData:K,setFormData:J})=>y.jsx(kt,{value:ah,children:y.jsx(el,{verge:c,aksjonspunkter:_,alleMerknaderFraBeslutter:u,hasOpenAksjonspunkter:R,alleKodeverk:E,submitCallback:b,readOnly:P,submittable:H,formData:K,setFormData:J})});nl.__docgenInfo={description:"",methods:[],displayName:"VergeFaktaIndex",props:{verge:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<TilbakekrevingKodeverkType, KodeverkMedNavn[]>"}]},description:""}}};const Hu=[Ji.AVKLAR_VERGE],sh=({valgtFaktaSteg:c,behandling:_,registrerFaktaPanel:u})=>{const E=zu(),b=Qv(Hu),P=Av(b.behandling),R=Hu.some(J=>wv(J,_.aksjonspunkt)),{data:H,isFetching:K}=uv(P.vergeOptions(b.behandling,R));return y.jsx(Xv,{standardPanelProps:b,valgtFaktaSteg:c,behandling:_,registrerFaktaPanel:u,faktaPanelKode:bv.VERGE,faktaPanelMenyTekst:E.formatMessage({id:"FaktaInitPanel.Title.Verge"}),skalPanelVisesIMeny:R,children:K?y.jsx(sv,{}):y.jsx(nl,{verge:H,...b})})};sh.__docgenInfo={description:"",methods:[],displayName:"VergeFaktaInitPanel",props:{valgtFaktaSteg:{required:!1,tsType:{name:"string"},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}>`}]},description:""},registrerFaktaPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: FaktaPanelMenyData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApneAksjonspunkter?: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApneAksjonspunkter",value:{name:"boolean",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};export{Gv as B,Xv as F,zv as P,Fv as T,sh as V,Yu as a,Wn as b,Ov as c,Cv as d,Mv as e,Lv as f,xh as g,mt as h,Eh as i,Xu as j,Dv as k,Zu as s,Qv as u};
