import{j as k}from"./jsx-runtime-CLpGMVip.js";import{r as pn}from"./index-B8jnc8p3.js";import{P as yt,n as ev,H as Hi,V as Xi,L as Yu,h as $i,J as Yi,ao as Iu,Y as nv,Z as rv,k as Ji,ap as tv,am as iv}from"./withPanelData-4wt_n4Hm.js";import{n as Un,c as av,M as Be,U as zi,V as sv,y as uv,s as Nu,J as lv,W as ov,F as fv,d as vt,D as Lu,I as ct,N as dv,$ as gv}from"./index.es-Rn5szVsq.js";import{u as cv}from"./initFetch-Da712kaG.js";import{b as pv,e as Tn,N as mv,c as vv,l as hv,E as kv,Z as yv,Q as _v,H as Vi,v as bv,M as wv,X as Ou,O as Mu,a as Av,r as Tv}from"./index.es-DlLizdOt.js";import{c as pt}from"./_commonjsHelpers-Cpj98o6Y.js";import{K as ht}from"./alleKodeverk-BFmIlMu4.js";import{B as kt}from"./Box-DPl7G7tk.js";import{c as Rv}from"./bind-oYjWB_aQ.js";import{C as qv,W as Ui}from"./index.es-CYykurF-.js";import{K as Cu}from"./Kjonnkode-C-fkzSiP.js";import{T as Oe}from"./Table-6KbP-5uU.js";import{A as Qi}from"./aksjonspunktCodes-BuBbCIxs.js";import{F as xv}from"./skjermlenkeCodes-1SvLTuBb.js";import{h as Ev,u as Pv}from"./behandlingApi-0_QqVZCu.js";import{B as ea}from"./behandlingDataContext-BdfTXpp6.js";import{i as Du}from"./aksjonspunktStatus-xM4O_ZUY.js";import{e as Bv,g as Sv}from"./useStandardProsessPanelProps-pnMUBH63.js";var Zi=(c=>(c.BARN="BARN",c.FBARN="FBARN",c.VOKSEN="VOKSEN",c.ADVOKAT="ADVOKAT",c.ANNEN_F="ANNEN_F",c))(Zi||{});const kr={"AdresseVisning.Adresse":"Adresse","ForelderPanel.Soker":"Søker","ForelderPanel.AnnenForelder":"Annen forelder","AlleBarnPanel.Barn":"Barn","AlleBarnPanel.BarnNr":"Barn {nummer}","AlleBarnPanel.Fodt":"Født","AlleBarnPanel.Dod":"Død","PersonPanel.RolleOgNavn":"{rolle, select, BRUKER {Søker, } ANNEN_PART {Den andre forelderen, } BARN {Barnet, } other {} }{navn}","PersonPanel.Beskrivelse.Bruker":"Adresser for søker registrert i folkeregisteret gyldige for de siste 12 månedene","PersonPanel.Beskrivelse.Barn":"Adresser for barnet registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Beskrivelse.Annenpart":"Adresser for den andre forelderen registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Fodt":"Født {dato}","PersonPanel.Dod":"Død {dato}","AdresseTabell.IngenAdresse":"Ingen adresser funnet for {erAnnenpart, select, true {den andre forelderen} other {søker} }.","AdresseTabell.SammeAdresse":"Den andre forelderen har samme adresse som søker på skjæringstidspunktet","AdresseTabell.PeriodeLabel":"Periode","AdresseTabell.AdresseLabel":"Adresse","AdresseTabell.TypeLabel":"Type","MerkePanel.Dod":"DØD","MerkePanel.DodTittel":"Personen er død","MerkePanel.DodFodt":"DØDFØDT","MerkePanel.Diskresjon6":"Kode 6","MerkePanel.Diskresjon7":"Kode 7","MerkePanel.EgenAnsatt":"Nav","MerkePanel.Verge":"Verge","MerkePanel.Diskresjon6Tittel":"Personen har diskresjonsmerking kode 6","MerkePanel.Diskresjon7Tittel":"Personen har diskresjonsmerking kode 7","MerkePanel.EgenAnsattTittel":"Personen er ansatt i Nav","MerkePanel.VergeTittel":"Personen har verge","SubmitButton.ConfirmInformation":"Bekreft og fortsett","FaktaBegrunnelseTextField.BegrunnEndringene":"Begrunn endringene","FaktaBegrunnelseTextField.Vurdering":"Vurdering","FaktaBegrunnelseTextField.Begrunnelse":"Begrunnelse","TrueFalseInput.True":"Ja","TrueFalseInput.False":"Nei","FaktaKilde.Soknad":"FRA SØKNADEN","FaktaKilde.FREG":"FRA FOLKEREGISTERET","FaktaKilde.MEDL":"FRA MEDLEMSKAPSREGISTERET"},Wi=Un(kr),Fv=vv(3),jv=hv(1500),Wn=({isReadOnly:c,isSubmittable:b,hasBegrunnelse:u,label:x,hasReadOnlyLabel:T=!1,hasVurderingText:E=!1,name:B="begrunnelse"})=>{const H=E?"FaktaBegrunnelseTextField.Vurdering":"FaktaBegrunnelseTextField.BegrunnEndringene",M=()=>c?T?Wi.formatMessage({id:"FaktaBegrunnelseTextField.Begrunnelse"}):"":x??Wi.formatMessage({id:H});return k.jsx(yt,{value:Wi,children:(b||u)&&k.jsx(pv,{name:B,label:M(),validate:[Tn,Fv,jv,mv],maxLength:1500,readOnly:c})})},Iv=c=>c&&Array.isArray(c)?c.length>0?c[0].begrunnelse:"":c&&!Array.isArray(c)?c.begrunnelse:"";Wn.initialValues=(c,b="begrunnelse")=>({[b]:av(Iv(c))});Wn.transformValues=(c,b="begrunnelse")=>({begrunnelse:c[b]});Wn.__docgenInfo={description:"FaktaBegrunnelseTextField",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[{name:"aksjonspunkt",optional:!0,type:{name:"union",raw:"Aksjonspunkt[] | Aksjonspunkt",elements:[{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!0}}]}}}}],displayName:"FaktaBegrunnelseTextField",props:{isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},hasBegrunnelse:{required:!0,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:""},hasReadOnlyLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hasVurderingText:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'begrunnelse'",computed:!1}}}};const Nv=Un(kr),Lv=(c,b,u)=>!u||b?!0:!c,zu=({isReadOnly:c,isSubmittable:b,buttonText:u,onClick:x,isSubmitting:T,isDirty:E})=>k.jsx(yt,{value:Nv,children:!c&&k.jsxs(ev,{size:"small",variant:"primary",loading:T,disabled:Lv(E,T,b),onClick:x||kv,type:x?"button":"submit",children:[!!u&&u,!u&&k.jsx(Be,{id:"SubmitButton.ConfirmInformation"})]})});zu.__docgenInfo={description:"FaktaSubmitButton",methods:[],displayName:"FaktaSubmitButton",props:{buttonText:{required:!1,tsType:{name:"string"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!0,tsType:{name:"boolean"},description:""}}};const Ku=Un(kr),Ov=({name:c,label:b,readOnly:u,trueLabel:x,trueContent:T,falseLabel:E,falseContent:B})=>k.jsx(yv,{name:c,label:b,validate:[Tn],isReadOnly:u,isTrueOrFalseSelection:!0,radios:[{label:x??Ku.formatMessage({id:"TrueFalseInput.True"}),value:"true",element:T},{label:E??Ku.formatMessage({id:"TrueFalseInput.False"}),value:"false",element:B}]});Ov.__docgenInfo={description:"",methods:[],displayName:"TrueFalseInput",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},trueLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},trueContent:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},falseLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},falseContent:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""}}};const Zu=(c,b)=>{const u=new Date(c.tom??zi),x=new Date(b.tom??zi);if(u>x)return-1;if(u<x)return 1;if(c.fom&&!b.fom)return-1;if(!c.fom&&b.fom)return 1;if(c.fom&&b.fom){const T=new Date(c.fom),E=new Date(b.fom);if(T>E)return-1;if(T<E)return 1}return 0};var hr={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var Mv=hr.exports,Vu;function Cv(){return Vu||(Vu=1,function(c,b){(function(){var u,x="4.17.21",T=200,E="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",B="Expected a function",H="Invalid `variable` option passed into `_.template`",M="__lodash_hash_undefined__",ne=500,K="__lodash_placeholder__",J=1,Ue=2,Me=4,te=1,tn=2,me=1,Rn=2,na=4,We=8,Hn=16,Ge=32,$n=64,He=128,Yn=256,_t=512,tl=30,il="...",al=800,sl=16,ra=1,ul=2,ll=3,yr=1/0,qn=9007199254740991,ol=17976931348623157e292,_r=NaN,Ce=4294967295,fl=Ce-1,dl=Ce>>>1,gl=[["ary",He],["bind",me],["bindKey",Rn],["curry",We],["curryRight",Hn],["flip",_t],["partial",Ge],["partialRight",$n],["rearg",Yn]],xn="[object Arguments]",br="[object Array]",cl="[object AsyncFunction]",zn="[object Boolean]",Zn="[object Date]",pl="[object DOMException]",wr="[object Error]",Ar="[object Function]",ta="[object GeneratorFunction]",Se="[object Map]",Xn="[object Number]",ml="[object Null]",$e="[object Object]",ia="[object Promise]",vl="[object Proxy]",Jn="[object RegExp]",Fe="[object Set]",Qn="[object String]",Tr="[object Symbol]",hl="[object Undefined]",er="[object WeakMap]",kl="[object WeakSet]",nr="[object ArrayBuffer]",En="[object DataView]",bt="[object Float32Array]",wt="[object Float64Array]",At="[object Int8Array]",Tt="[object Int16Array]",Rt="[object Int32Array]",qt="[object Uint8Array]",xt="[object Uint8ClampedArray]",Et="[object Uint16Array]",Pt="[object Uint32Array]",yl=/\b__p \+= '';/g,_l=/\b(__p \+=) '' \+/g,bl=/(__e\(.*?\)|\b__t\)) \+\n'';/g,aa=/&(?:amp|lt|gt|quot|#39);/g,sa=/[&<>"']/g,wl=RegExp(aa.source),Al=RegExp(sa.source),Tl=/<%-([\s\S]+?)%>/g,Rl=/<%([\s\S]+?)%>/g,ua=/<%=([\s\S]+?)%>/g,ql=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,xl=/^\w*$/,El=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Bt=/[\\^$.*+?()[\]{}|]/g,Pl=RegExp(Bt.source),St=/^\s+/,Bl=/\s/,Sl=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Fl=/\{\n\/\* \[wrapped with (.+)\] \*/,jl=/,? & /,Il=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Nl=/[()=,{}\[\]\/\s]/,Ll=/\\(\\)?/g,Ol=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,la=/\w*$/,Ml=/^[-+]0x[0-9a-f]+$/i,Cl=/^0b[01]+$/i,Dl=/^\[object .+?Constructor\]$/,Kl=/^0o[0-7]+$/i,Vl=/^(?:0|[1-9]\d*)$/,Ul=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Rr=/($^)/,Wl=/['\n\r\u2028\u2029\\]/g,qr="\\ud800-\\udfff",Gl="\\u0300-\\u036f",Hl="\\ufe20-\\ufe2f",$l="\\u20d0-\\u20ff",oa=Gl+Hl+$l,fa="\\u2700-\\u27bf",da="a-z\\xdf-\\xf6\\xf8-\\xff",Yl="\\xac\\xb1\\xd7\\xf7",zl="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Zl="\\u2000-\\u206f",Xl=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ga="A-Z\\xc0-\\xd6\\xd8-\\xde",ca="\\ufe0e\\ufe0f",pa=Yl+zl+Zl+Xl,Ft="['’]",Jl="["+qr+"]",ma="["+pa+"]",xr="["+oa+"]",va="\\d+",Ql="["+fa+"]",ha="["+da+"]",ka="[^"+qr+pa+va+fa+da+ga+"]",jt="\\ud83c[\\udffb-\\udfff]",eo="(?:"+xr+"|"+jt+")",ya="[^"+qr+"]",It="(?:\\ud83c[\\udde6-\\uddff]){2}",Nt="[\\ud800-\\udbff][\\udc00-\\udfff]",Pn="["+ga+"]",_a="\\u200d",ba="(?:"+ha+"|"+ka+")",no="(?:"+Pn+"|"+ka+")",wa="(?:"+Ft+"(?:d|ll|m|re|s|t|ve))?",Aa="(?:"+Ft+"(?:D|LL|M|RE|S|T|VE))?",Ta=eo+"?",Ra="["+ca+"]?",ro="(?:"+_a+"(?:"+[ya,It,Nt].join("|")+")"+Ra+Ta+")*",to="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",io="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",qa=Ra+Ta+ro,ao="(?:"+[Ql,It,Nt].join("|")+")"+qa,so="(?:"+[ya+xr+"?",xr,It,Nt,Jl].join("|")+")",uo=RegExp(Ft,"g"),lo=RegExp(xr,"g"),Lt=RegExp(jt+"(?="+jt+")|"+so+qa,"g"),oo=RegExp([Pn+"?"+ha+"+"+wa+"(?="+[ma,Pn,"$"].join("|")+")",no+"+"+Aa+"(?="+[ma,Pn+ba,"$"].join("|")+")",Pn+"?"+ba+"+"+wa,Pn+"+"+Aa,io,to,va,ao].join("|"),"g"),fo=RegExp("["+_a+qr+oa+ca+"]"),go=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,co=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],po=-1,G={};G[bt]=G[wt]=G[At]=G[Tt]=G[Rt]=G[qt]=G[xt]=G[Et]=G[Pt]=!0,G[xn]=G[br]=G[nr]=G[zn]=G[En]=G[Zn]=G[wr]=G[Ar]=G[Se]=G[Xn]=G[$e]=G[Jn]=G[Fe]=G[Qn]=G[er]=!1;var W={};W[xn]=W[br]=W[nr]=W[En]=W[zn]=W[Zn]=W[bt]=W[wt]=W[At]=W[Tt]=W[Rt]=W[Se]=W[Xn]=W[$e]=W[Jn]=W[Fe]=W[Qn]=W[Tr]=W[qt]=W[xt]=W[Et]=W[Pt]=!0,W[wr]=W[Ar]=W[er]=!1;var mo={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},vo={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ho={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},ko={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},yo=parseFloat,_o=parseInt,xa=typeof pt=="object"&&pt&&pt.Object===Object&&pt,bo=typeof self=="object"&&self&&self.Object===Object&&self,ie=xa||bo||Function("return this")(),Ot=b&&!b.nodeType&&b,mn=Ot&&!0&&c&&!c.nodeType&&c,Ea=mn&&mn.exports===Ot,Mt=Ea&&xa.process,we=function(){try{var f=mn&&mn.require&&mn.require("util").types;return f||Mt&&Mt.binding&&Mt.binding("util")}catch{}}(),Pa=we&&we.isArrayBuffer,Ba=we&&we.isDate,Sa=we&&we.isMap,Fa=we&&we.isRegExp,ja=we&&we.isSet,Ia=we&&we.isTypedArray;function ve(f,p,g){switch(g.length){case 0:return f.call(p);case 1:return f.call(p,g[0]);case 2:return f.call(p,g[0],g[1]);case 3:return f.call(p,g[0],g[1],g[2])}return f.apply(p,g)}function wo(f,p,g,_){for(var P=-1,C=f==null?0:f.length;++P<C;){var Q=f[P];p(_,Q,g(Q),f)}return _}function Ae(f,p){for(var g=-1,_=f==null?0:f.length;++g<_&&p(f[g],g,f)!==!1;);return f}function Ao(f,p){for(var g=f==null?0:f.length;g--&&p(f[g],g,f)!==!1;);return f}function Na(f,p){for(var g=-1,_=f==null?0:f.length;++g<_;)if(!p(f[g],g,f))return!1;return!0}function an(f,p){for(var g=-1,_=f==null?0:f.length,P=0,C=[];++g<_;){var Q=f[g];p(Q,g,f)&&(C[P++]=Q)}return C}function Er(f,p){var g=f==null?0:f.length;return!!g&&Bn(f,p,0)>-1}function Ct(f,p,g){for(var _=-1,P=f==null?0:f.length;++_<P;)if(g(p,f[_]))return!0;return!1}function $(f,p){for(var g=-1,_=f==null?0:f.length,P=Array(_);++g<_;)P[g]=p(f[g],g,f);return P}function sn(f,p){for(var g=-1,_=p.length,P=f.length;++g<_;)f[P+g]=p[g];return f}function Dt(f,p,g,_){var P=-1,C=f==null?0:f.length;for(_&&C&&(g=f[++P]);++P<C;)g=p(g,f[P],P,f);return g}function To(f,p,g,_){var P=f==null?0:f.length;for(_&&P&&(g=f[--P]);P--;)g=p(g,f[P],P,f);return g}function Kt(f,p){for(var g=-1,_=f==null?0:f.length;++g<_;)if(p(f[g],g,f))return!0;return!1}var Ro=Vt("length");function qo(f){return f.split("")}function xo(f){return f.match(Il)||[]}function La(f,p,g){var _;return g(f,function(P,C,Q){if(p(P,C,Q))return _=C,!1}),_}function Pr(f,p,g,_){for(var P=f.length,C=g+(_?1:-1);_?C--:++C<P;)if(p(f[C],C,f))return C;return-1}function Bn(f,p,g){return p===p?Co(f,p,g):Pr(f,Oa,g)}function Eo(f,p,g,_){for(var P=g-1,C=f.length;++P<C;)if(_(f[P],p))return P;return-1}function Oa(f){return f!==f}function Ma(f,p){var g=f==null?0:f.length;return g?Wt(f,p)/g:_r}function Vt(f){return function(p){return p==null?u:p[f]}}function Ut(f){return function(p){return f==null?u:f[p]}}function Ca(f,p,g,_,P){return P(f,function(C,Q,U){g=_?(_=!1,C):p(g,C,Q,U)}),g}function Po(f,p){var g=f.length;for(f.sort(p);g--;)f[g]=f[g].value;return f}function Wt(f,p){for(var g,_=-1,P=f.length;++_<P;){var C=p(f[_]);C!==u&&(g=g===u?C:g+C)}return g}function Gt(f,p){for(var g=-1,_=Array(f);++g<f;)_[g]=p(g);return _}function Bo(f,p){return $(p,function(g){return[g,f[g]]})}function Da(f){return f&&f.slice(0,Wa(f)+1).replace(St,"")}function he(f){return function(p){return f(p)}}function Ht(f,p){return $(p,function(g){return f[g]})}function rr(f,p){return f.has(p)}function Ka(f,p){for(var g=-1,_=f.length;++g<_&&Bn(p,f[g],0)>-1;);return g}function Va(f,p){for(var g=f.length;g--&&Bn(p,f[g],0)>-1;);return g}function So(f,p){for(var g=f.length,_=0;g--;)f[g]===p&&++_;return _}var Fo=Ut(mo),jo=Ut(vo);function Io(f){return"\\"+ko[f]}function No(f,p){return f==null?u:f[p]}function Sn(f){return fo.test(f)}function Lo(f){return go.test(f)}function Oo(f){for(var p,g=[];!(p=f.next()).done;)g.push(p.value);return g}function $t(f){var p=-1,g=Array(f.size);return f.forEach(function(_,P){g[++p]=[P,_]}),g}function Ua(f,p){return function(g){return f(p(g))}}function un(f,p){for(var g=-1,_=f.length,P=0,C=[];++g<_;){var Q=f[g];(Q===p||Q===K)&&(f[g]=K,C[P++]=g)}return C}function Br(f){var p=-1,g=Array(f.size);return f.forEach(function(_){g[++p]=_}),g}function Mo(f){var p=-1,g=Array(f.size);return f.forEach(function(_){g[++p]=[_,_]}),g}function Co(f,p,g){for(var _=g-1,P=f.length;++_<P;)if(f[_]===p)return _;return-1}function Do(f,p,g){for(var _=g+1;_--;)if(f[_]===p)return _;return _}function Fn(f){return Sn(f)?Vo(f):Ro(f)}function je(f){return Sn(f)?Uo(f):qo(f)}function Wa(f){for(var p=f.length;p--&&Bl.test(f.charAt(p)););return p}var Ko=Ut(ho);function Vo(f){for(var p=Lt.lastIndex=0;Lt.test(f);)++p;return p}function Uo(f){return f.match(Lt)||[]}function Wo(f){return f.match(oo)||[]}var Go=function f(p){p=p==null?ie:jn.defaults(ie.Object(),p,jn.pick(ie,co));var g=p.Array,_=p.Date,P=p.Error,C=p.Function,Q=p.Math,U=p.Object,Yt=p.RegExp,Ho=p.String,Te=p.TypeError,Sr=g.prototype,$o=C.prototype,In=U.prototype,Fr=p["__core-js_shared__"],jr=$o.toString,V=In.hasOwnProperty,Yo=0,Ga=function(){var e=/[^.]+$/.exec(Fr&&Fr.keys&&Fr.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Ir=In.toString,zo=jr.call(U),Zo=ie._,Xo=Yt("^"+jr.call(V).replace(Bt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Nr=Ea?p.Buffer:u,ln=p.Symbol,Lr=p.Uint8Array,Ha=Nr?Nr.allocUnsafe:u,Or=Ua(U.getPrototypeOf,U),$a=U.create,Ya=In.propertyIsEnumerable,Mr=Sr.splice,za=ln?ln.isConcatSpreadable:u,tr=ln?ln.iterator:u,vn=ln?ln.toStringTag:u,Cr=function(){try{var e=bn(U,"defineProperty");return e({},"",{}),e}catch{}}(),Jo=p.clearTimeout!==ie.clearTimeout&&p.clearTimeout,Qo=_&&_.now!==ie.Date.now&&_.now,ef=p.setTimeout!==ie.setTimeout&&p.setTimeout,Dr=Q.ceil,Kr=Q.floor,zt=U.getOwnPropertySymbols,nf=Nr?Nr.isBuffer:u,Za=p.isFinite,rf=Sr.join,tf=Ua(U.keys,U),ee=Q.max,se=Q.min,af=_.now,sf=p.parseInt,Xa=Q.random,uf=Sr.reverse,Zt=bn(p,"DataView"),ir=bn(p,"Map"),Xt=bn(p,"Promise"),Nn=bn(p,"Set"),ar=bn(p,"WeakMap"),sr=bn(U,"create"),Vr=ar&&new ar,Ln={},lf=wn(Zt),of=wn(ir),ff=wn(Xt),df=wn(Nn),gf=wn(ar),Ur=ln?ln.prototype:u,ur=Ur?Ur.valueOf:u,Ja=Ur?Ur.toString:u;function a(e){if(z(e)&&!S(e)&&!(e instanceof L)){if(e instanceof Re)return e;if(V.call(e,"__wrapped__"))return Qs(e)}return new Re(e)}var On=function(){function e(){}return function(n){if(!Y(n))return{};if($a)return $a(n);e.prototype=n;var r=new e;return e.prototype=u,r}}();function Wr(){}function Re(e,n){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!n,this.__index__=0,this.__values__=u}a.templateSettings={escape:Tl,evaluate:Rl,interpolate:ua,variable:"",imports:{_:a}},a.prototype=Wr.prototype,a.prototype.constructor=a,Re.prototype=On(Wr.prototype),Re.prototype.constructor=Re;function L(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Ce,this.__views__=[]}function cf(){var e=new L(this.__wrapped__);return e.__actions__=de(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=de(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=de(this.__views__),e}function pf(){if(this.__filtered__){var e=new L(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function mf(){var e=this.__wrapped__.value(),n=this.__dir__,r=S(e),t=n<0,i=r?e.length:0,s=xd(0,i,this.__views__),l=s.start,o=s.end,d=o-l,m=t?o:l-1,v=this.__iteratees__,h=v.length,y=0,w=se(d,this.__takeCount__);if(!r||!t&&i==d&&w==d)return ws(e,this.__actions__);var R=[];e:for(;d--&&y<w;){m+=n;for(var j=-1,q=e[m];++j<h;){var N=v[j],O=N.iteratee,_e=N.type,fe=O(q);if(_e==ul)q=fe;else if(!fe){if(_e==ra)continue e;break e}}R[y++]=q}return R}L.prototype=On(Wr.prototype),L.prototype.constructor=L;function hn(e){var n=-1,r=e==null?0:e.length;for(this.clear();++n<r;){var t=e[n];this.set(t[0],t[1])}}function vf(){this.__data__=sr?sr(null):{},this.size=0}function hf(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n}function kf(e){var n=this.__data__;if(sr){var r=n[e];return r===M?u:r}return V.call(n,e)?n[e]:u}function yf(e){var n=this.__data__;return sr?n[e]!==u:V.call(n,e)}function _f(e,n){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=sr&&n===u?M:n,this}hn.prototype.clear=vf,hn.prototype.delete=hf,hn.prototype.get=kf,hn.prototype.has=yf,hn.prototype.set=_f;function Ye(e){var n=-1,r=e==null?0:e.length;for(this.clear();++n<r;){var t=e[n];this.set(t[0],t[1])}}function bf(){this.__data__=[],this.size=0}function wf(e){var n=this.__data__,r=Gr(n,e);if(r<0)return!1;var t=n.length-1;return r==t?n.pop():Mr.call(n,r,1),--this.size,!0}function Af(e){var n=this.__data__,r=Gr(n,e);return r<0?u:n[r][1]}function Tf(e){return Gr(this.__data__,e)>-1}function Rf(e,n){var r=this.__data__,t=Gr(r,e);return t<0?(++this.size,r.push([e,n])):r[t][1]=n,this}Ye.prototype.clear=bf,Ye.prototype.delete=wf,Ye.prototype.get=Af,Ye.prototype.has=Tf,Ye.prototype.set=Rf;function ze(e){var n=-1,r=e==null?0:e.length;for(this.clear();++n<r;){var t=e[n];this.set(t[0],t[1])}}function qf(){this.size=0,this.__data__={hash:new hn,map:new(ir||Ye),string:new hn}}function xf(e){var n=tt(this,e).delete(e);return this.size-=n?1:0,n}function Ef(e){return tt(this,e).get(e)}function Pf(e){return tt(this,e).has(e)}function Bf(e,n){var r=tt(this,e),t=r.size;return r.set(e,n),this.size+=r.size==t?0:1,this}ze.prototype.clear=qf,ze.prototype.delete=xf,ze.prototype.get=Ef,ze.prototype.has=Pf,ze.prototype.set=Bf;function kn(e){var n=-1,r=e==null?0:e.length;for(this.__data__=new ze;++n<r;)this.add(e[n])}function Sf(e){return this.__data__.set(e,M),this}function Ff(e){return this.__data__.has(e)}kn.prototype.add=kn.prototype.push=Sf,kn.prototype.has=Ff;function Ie(e){var n=this.__data__=new Ye(e);this.size=n.size}function jf(){this.__data__=new Ye,this.size=0}function If(e){var n=this.__data__,r=n.delete(e);return this.size=n.size,r}function Nf(e){return this.__data__.get(e)}function Lf(e){return this.__data__.has(e)}function Of(e,n){var r=this.__data__;if(r instanceof Ye){var t=r.__data__;if(!ir||t.length<T-1)return t.push([e,n]),this.size=++r.size,this;r=this.__data__=new ze(t)}return r.set(e,n),this.size=r.size,this}Ie.prototype.clear=jf,Ie.prototype.delete=If,Ie.prototype.get=Nf,Ie.prototype.has=Lf,Ie.prototype.set=Of;function Qa(e,n){var r=S(e),t=!r&&An(e),i=!r&&!t&&cn(e),s=!r&&!t&&!i&&Kn(e),l=r||t||i||s,o=l?Gt(e.length,Ho):[],d=o.length;for(var m in e)(n||V.call(e,m))&&!(l&&(m=="length"||i&&(m=="offset"||m=="parent")||s&&(m=="buffer"||m=="byteLength"||m=="byteOffset")||Qe(m,d)))&&o.push(m);return o}function es(e){var n=e.length;return n?e[li(0,n-1)]:u}function Mf(e,n){return it(de(e),yn(n,0,e.length))}function Cf(e){return it(de(e))}function Jt(e,n,r){(r!==u&&!Ne(e[n],r)||r===u&&!(n in e))&&Ze(e,n,r)}function lr(e,n,r){var t=e[n];(!(V.call(e,n)&&Ne(t,r))||r===u&&!(n in e))&&Ze(e,n,r)}function Gr(e,n){for(var r=e.length;r--;)if(Ne(e[r][0],n))return r;return-1}function Df(e,n,r,t){return on(e,function(i,s,l){n(t,i,r(i),l)}),t}function ns(e,n){return e&&Ke(n,re(n),e)}function Kf(e,n){return e&&Ke(n,ce(n),e)}function Ze(e,n,r){n=="__proto__"&&Cr?Cr(e,n,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[n]=r}function Qt(e,n){for(var r=-1,t=n.length,i=g(t),s=e==null;++r<t;)i[r]=s?u:ji(e,n[r]);return i}function yn(e,n,r){return e===e&&(r!==u&&(e=e<=r?e:r),n!==u&&(e=e>=n?e:n)),e}function qe(e,n,r,t,i,s){var l,o=n&J,d=n&Ue,m=n&Me;if(r&&(l=i?r(e,t,i,s):r(e)),l!==u)return l;if(!Y(e))return e;var v=S(e);if(v){if(l=Pd(e),!o)return de(e,l)}else{var h=ue(e),y=h==Ar||h==ta;if(cn(e))return Rs(e,o);if(h==$e||h==xn||y&&!i){if(l=d||y?{}:Ws(e),!o)return d?kd(e,Kf(l,e)):hd(e,ns(l,e))}else{if(!W[h])return i?e:{};l=Bd(e,h,o)}}s||(s=new Ie);var w=s.get(e);if(w)return w;s.set(e,l),yu(e)?e.forEach(function(q){l.add(qe(q,n,r,q,e,s))}):hu(e)&&e.forEach(function(q,N){l.set(N,qe(q,n,r,N,e,s))});var R=m?d?yi:ki:d?ce:re,j=v?u:R(e);return Ae(j||e,function(q,N){j&&(N=q,q=e[N]),lr(l,N,qe(q,n,r,N,e,s))}),l}function Vf(e){var n=re(e);return function(r){return rs(r,e,n)}}function rs(e,n,r){var t=r.length;if(e==null)return!t;for(e=U(e);t--;){var i=r[t],s=n[i],l=e[i];if(l===u&&!(i in e)||!s(l))return!1}return!0}function ts(e,n,r){if(typeof e!="function")throw new Te(B);return mr(function(){e.apply(u,r)},n)}function or(e,n,r,t){var i=-1,s=Er,l=!0,o=e.length,d=[],m=n.length;if(!o)return d;r&&(n=$(n,he(r))),t?(s=Ct,l=!1):n.length>=T&&(s=rr,l=!1,n=new kn(n));e:for(;++i<o;){var v=e[i],h=r==null?v:r(v);if(v=t||v!==0?v:0,l&&h===h){for(var y=m;y--;)if(n[y]===h)continue e;d.push(v)}else s(n,h,t)||d.push(v)}return d}var on=Bs(De),is=Bs(ni,!0);function Uf(e,n){var r=!0;return on(e,function(t,i,s){return r=!!n(t,i,s),r}),r}function Hr(e,n,r){for(var t=-1,i=e.length;++t<i;){var s=e[t],l=n(s);if(l!=null&&(o===u?l===l&&!ye(l):r(l,o)))var o=l,d=s}return d}function Wf(e,n,r,t){var i=e.length;for(r=F(r),r<0&&(r=-r>i?0:i+r),t=t===u||t>i?i:F(t),t<0&&(t+=i),t=r>t?0:bu(t);r<t;)e[r++]=n;return e}function as(e,n){var r=[];return on(e,function(t,i,s){n(t,i,s)&&r.push(t)}),r}function ae(e,n,r,t,i){var s=-1,l=e.length;for(r||(r=Fd),i||(i=[]);++s<l;){var o=e[s];n>0&&r(o)?n>1?ae(o,n-1,r,t,i):sn(i,o):t||(i[i.length]=o)}return i}var ei=Ss(),ss=Ss(!0);function De(e,n){return e&&ei(e,n,re)}function ni(e,n){return e&&ss(e,n,re)}function $r(e,n){return an(n,function(r){return en(e[r])})}function _n(e,n){n=dn(n,e);for(var r=0,t=n.length;e!=null&&r<t;)e=e[Ve(n[r++])];return r&&r==t?e:u}function us(e,n,r){var t=n(e);return S(e)?t:sn(t,r(e))}function le(e){return e==null?e===u?hl:ml:vn&&vn in U(e)?qd(e):Cd(e)}function ri(e,n){return e>n}function Gf(e,n){return e!=null&&V.call(e,n)}function Hf(e,n){return e!=null&&n in U(e)}function $f(e,n,r){return e>=se(n,r)&&e<ee(n,r)}function ti(e,n,r){for(var t=r?Ct:Er,i=e[0].length,s=e.length,l=s,o=g(s),d=1/0,m=[];l--;){var v=e[l];l&&n&&(v=$(v,he(n))),d=se(v.length,d),o[l]=!r&&(n||i>=120&&v.length>=120)?new kn(l&&v):u}v=e[0];var h=-1,y=o[0];e:for(;++h<i&&m.length<d;){var w=v[h],R=n?n(w):w;if(w=r||w!==0?w:0,!(y?rr(y,R):t(m,R,r))){for(l=s;--l;){var j=o[l];if(!(j?rr(j,R):t(e[l],R,r)))continue e}y&&y.push(R),m.push(w)}}return m}function Yf(e,n,r,t){return De(e,function(i,s,l){n(t,r(i),s,l)}),t}function fr(e,n,r){n=dn(n,e),e=Ys(e,n);var t=e==null?e:e[Ve(Ee(n))];return t==null?u:ve(t,e,r)}function ls(e){return z(e)&&le(e)==xn}function zf(e){return z(e)&&le(e)==nr}function Zf(e){return z(e)&&le(e)==Zn}function dr(e,n,r,t,i){return e===n?!0:e==null||n==null||!z(e)&&!z(n)?e!==e&&n!==n:Xf(e,n,r,t,dr,i)}function Xf(e,n,r,t,i,s){var l=S(e),o=S(n),d=l?br:ue(e),m=o?br:ue(n);d=d==xn?$e:d,m=m==xn?$e:m;var v=d==$e,h=m==$e,y=d==m;if(y&&cn(e)){if(!cn(n))return!1;l=!0,v=!1}if(y&&!v)return s||(s=new Ie),l||Kn(e)?Ks(e,n,r,t,i,s):Td(e,n,d,r,t,i,s);if(!(r&te)){var w=v&&V.call(e,"__wrapped__"),R=h&&V.call(n,"__wrapped__");if(w||R){var j=w?e.value():e,q=R?n.value():n;return s||(s=new Ie),i(j,q,r,t,s)}}return y?(s||(s=new Ie),Rd(e,n,r,t,i,s)):!1}function Jf(e){return z(e)&&ue(e)==Se}function ii(e,n,r,t){var i=r.length,s=i,l=!t;if(e==null)return!s;for(e=U(e);i--;){var o=r[i];if(l&&o[2]?o[1]!==e[o[0]]:!(o[0]in e))return!1}for(;++i<s;){o=r[i];var d=o[0],m=e[d],v=o[1];if(l&&o[2]){if(m===u&&!(d in e))return!1}else{var h=new Ie;if(t)var y=t(m,v,d,e,n,h);if(!(y===u?dr(v,m,te|tn,t,h):y))return!1}}return!0}function os(e){if(!Y(e)||Id(e))return!1;var n=en(e)?Xo:Dl;return n.test(wn(e))}function Qf(e){return z(e)&&le(e)==Jn}function ed(e){return z(e)&&ue(e)==Fe}function nd(e){return z(e)&&ft(e.length)&&!!G[le(e)]}function fs(e){return typeof e=="function"?e:e==null?pe:typeof e=="object"?S(e)?cs(e[0],e[1]):gs(e):Fu(e)}function ai(e){if(!pr(e))return tf(e);var n=[];for(var r in U(e))V.call(e,r)&&r!="constructor"&&n.push(r);return n}function rd(e){if(!Y(e))return Md(e);var n=pr(e),r=[];for(var t in e)t=="constructor"&&(n||!V.call(e,t))||r.push(t);return r}function si(e,n){return e<n}function ds(e,n){var r=-1,t=ge(e)?g(e.length):[];return on(e,function(i,s,l){t[++r]=n(i,s,l)}),t}function gs(e){var n=bi(e);return n.length==1&&n[0][2]?Hs(n[0][0],n[0][1]):function(r){return r===e||ii(r,e,n)}}function cs(e,n){return Ai(e)&&Gs(n)?Hs(Ve(e),n):function(r){var t=ji(r,e);return t===u&&t===n?Ii(r,e):dr(n,t,te|tn)}}function Yr(e,n,r,t,i){e!==n&&ei(n,function(s,l){if(i||(i=new Ie),Y(s))td(e,n,l,r,Yr,t,i);else{var o=t?t(Ri(e,l),s,l+"",e,n,i):u;o===u&&(o=s),Jt(e,l,o)}},ce)}function td(e,n,r,t,i,s,l){var o=Ri(e,r),d=Ri(n,r),m=l.get(d);if(m){Jt(e,r,m);return}var v=s?s(o,d,r+"",e,n,l):u,h=v===u;if(h){var y=S(d),w=!y&&cn(d),R=!y&&!w&&Kn(d);v=d,y||w||R?S(o)?v=o:Z(o)?v=de(o):w?(h=!1,v=Rs(d,!0)):R?(h=!1,v=qs(d,!0)):v=[]:vr(d)||An(d)?(v=o,An(o)?v=wu(o):(!Y(o)||en(o))&&(v=Ws(d))):h=!1}h&&(l.set(d,v),i(v,d,t,s,l),l.delete(d)),Jt(e,r,v)}function ps(e,n){var r=e.length;if(r)return n+=n<0?r:0,Qe(n,r)?e[n]:u}function ms(e,n,r){n.length?n=$(n,function(s){return S(s)?function(l){return _n(l,s.length===1?s[0]:s)}:s}):n=[pe];var t=-1;n=$(n,he(A()));var i=ds(e,function(s,l,o){var d=$(n,function(m){return m(s)});return{criteria:d,index:++t,value:s}});return Po(i,function(s,l){return vd(s,l,r)})}function id(e,n){return vs(e,n,function(r,t){return Ii(e,t)})}function vs(e,n,r){for(var t=-1,i=n.length,s={};++t<i;){var l=n[t],o=_n(e,l);r(o,l)&&gr(s,dn(l,e),o)}return s}function ad(e){return function(n){return _n(n,e)}}function ui(e,n,r,t){var i=t?Eo:Bn,s=-1,l=n.length,o=e;for(e===n&&(n=de(n)),r&&(o=$(e,he(r)));++s<l;)for(var d=0,m=n[s],v=r?r(m):m;(d=i(o,v,d,t))>-1;)o!==e&&Mr.call(o,d,1),Mr.call(e,d,1);return e}function hs(e,n){for(var r=e?n.length:0,t=r-1;r--;){var i=n[r];if(r==t||i!==s){var s=i;Qe(i)?Mr.call(e,i,1):di(e,i)}}return e}function li(e,n){return e+Kr(Xa()*(n-e+1))}function sd(e,n,r,t){for(var i=-1,s=ee(Dr((n-e)/(r||1)),0),l=g(s);s--;)l[t?s:++i]=e,e+=r;return l}function oi(e,n){var r="";if(!e||n<1||n>qn)return r;do n%2&&(r+=e),n=Kr(n/2),n&&(e+=e);while(n);return r}function I(e,n){return qi($s(e,n,pe),e+"")}function ud(e){return es(Vn(e))}function ld(e,n){var r=Vn(e);return it(r,yn(n,0,r.length))}function gr(e,n,r,t){if(!Y(e))return e;n=dn(n,e);for(var i=-1,s=n.length,l=s-1,o=e;o!=null&&++i<s;){var d=Ve(n[i]),m=r;if(d==="__proto__"||d==="constructor"||d==="prototype")return e;if(i!=l){var v=o[d];m=t?t(v,d,o):u,m===u&&(m=Y(v)?v:Qe(n[i+1])?[]:{})}lr(o,d,m),o=o[d]}return e}var ks=Vr?function(e,n){return Vr.set(e,n),e}:pe,od=Cr?function(e,n){return Cr(e,"toString",{configurable:!0,enumerable:!1,value:Li(n),writable:!0})}:pe;function fd(e){return it(Vn(e))}function xe(e,n,r){var t=-1,i=e.length;n<0&&(n=-n>i?0:i+n),r=r>i?i:r,r<0&&(r+=i),i=n>r?0:r-n>>>0,n>>>=0;for(var s=g(i);++t<i;)s[t]=e[t+n];return s}function dd(e,n){var r;return on(e,function(t,i,s){return r=n(t,i,s),!r}),!!r}function zr(e,n,r){var t=0,i=e==null?t:e.length;if(typeof n=="number"&&n===n&&i<=dl){for(;t<i;){var s=t+i>>>1,l=e[s];l!==null&&!ye(l)&&(r?l<=n:l<n)?t=s+1:i=s}return i}return fi(e,n,pe,r)}function fi(e,n,r,t){var i=0,s=e==null?0:e.length;if(s===0)return 0;n=r(n);for(var l=n!==n,o=n===null,d=ye(n),m=n===u;i<s;){var v=Kr((i+s)/2),h=r(e[v]),y=h!==u,w=h===null,R=h===h,j=ye(h);if(l)var q=t||R;else m?q=R&&(t||y):o?q=R&&y&&(t||!w):d?q=R&&y&&!w&&(t||!j):w||j?q=!1:q=t?h<=n:h<n;q?i=v+1:s=v}return se(s,fl)}function ys(e,n){for(var r=-1,t=e.length,i=0,s=[];++r<t;){var l=e[r],o=n?n(l):l;if(!r||!Ne(o,d)){var d=o;s[i++]=l===0?0:l}}return s}function _s(e){return typeof e=="number"?e:ye(e)?_r:+e}function ke(e){if(typeof e=="string")return e;if(S(e))return $(e,ke)+"";if(ye(e))return Ja?Ja.call(e):"";var n=e+"";return n=="0"&&1/e==-1/0?"-0":n}function fn(e,n,r){var t=-1,i=Er,s=e.length,l=!0,o=[],d=o;if(r)l=!1,i=Ct;else if(s>=T){var m=n?null:wd(e);if(m)return Br(m);l=!1,i=rr,d=new kn}else d=n?[]:o;e:for(;++t<s;){var v=e[t],h=n?n(v):v;if(v=r||v!==0?v:0,l&&h===h){for(var y=d.length;y--;)if(d[y]===h)continue e;n&&d.push(h),o.push(v)}else i(d,h,r)||(d!==o&&d.push(h),o.push(v))}return o}function di(e,n){return n=dn(n,e),e=Ys(e,n),e==null||delete e[Ve(Ee(n))]}function bs(e,n,r,t){return gr(e,n,r(_n(e,n)),t)}function Zr(e,n,r,t){for(var i=e.length,s=t?i:-1;(t?s--:++s<i)&&n(e[s],s,e););return r?xe(e,t?0:s,t?s+1:i):xe(e,t?s+1:0,t?i:s)}function ws(e,n){var r=e;return r instanceof L&&(r=r.value()),Dt(n,function(t,i){return i.func.apply(i.thisArg,sn([t],i.args))},r)}function gi(e,n,r){var t=e.length;if(t<2)return t?fn(e[0]):[];for(var i=-1,s=g(t);++i<t;)for(var l=e[i],o=-1;++o<t;)o!=i&&(s[i]=or(s[i]||l,e[o],n,r));return fn(ae(s,1),n,r)}function As(e,n,r){for(var t=-1,i=e.length,s=n.length,l={};++t<i;){var o=t<s?n[t]:u;r(l,e[t],o)}return l}function ci(e){return Z(e)?e:[]}function pi(e){return typeof e=="function"?e:pe}function dn(e,n){return S(e)?e:Ai(e,n)?[e]:Js(D(e))}var gd=I;function gn(e,n,r){var t=e.length;return r=r===u?t:r,!n&&r>=t?e:xe(e,n,r)}var Ts=Jo||function(e){return ie.clearTimeout(e)};function Rs(e,n){if(n)return e.slice();var r=e.length,t=Ha?Ha(r):new e.constructor(r);return e.copy(t),t}function mi(e){var n=new e.constructor(e.byteLength);return new Lr(n).set(new Lr(e)),n}function cd(e,n){var r=n?mi(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}function pd(e){var n=new e.constructor(e.source,la.exec(e));return n.lastIndex=e.lastIndex,n}function md(e){return ur?U(ur.call(e)):{}}function qs(e,n){var r=n?mi(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function xs(e,n){if(e!==n){var r=e!==u,t=e===null,i=e===e,s=ye(e),l=n!==u,o=n===null,d=n===n,m=ye(n);if(!o&&!m&&!s&&e>n||s&&l&&d&&!o&&!m||t&&l&&d||!r&&d||!i)return 1;if(!t&&!s&&!m&&e<n||m&&r&&i&&!t&&!s||o&&r&&i||!l&&i||!d)return-1}return 0}function vd(e,n,r){for(var t=-1,i=e.criteria,s=n.criteria,l=i.length,o=r.length;++t<l;){var d=xs(i[t],s[t]);if(d){if(t>=o)return d;var m=r[t];return d*(m=="desc"?-1:1)}}return e.index-n.index}function Es(e,n,r,t){for(var i=-1,s=e.length,l=r.length,o=-1,d=n.length,m=ee(s-l,0),v=g(d+m),h=!t;++o<d;)v[o]=n[o];for(;++i<l;)(h||i<s)&&(v[r[i]]=e[i]);for(;m--;)v[o++]=e[i++];return v}function Ps(e,n,r,t){for(var i=-1,s=e.length,l=-1,o=r.length,d=-1,m=n.length,v=ee(s-o,0),h=g(v+m),y=!t;++i<v;)h[i]=e[i];for(var w=i;++d<m;)h[w+d]=n[d];for(;++l<o;)(y||i<s)&&(h[w+r[l]]=e[i++]);return h}function de(e,n){var r=-1,t=e.length;for(n||(n=g(t));++r<t;)n[r]=e[r];return n}function Ke(e,n,r,t){var i=!r;r||(r={});for(var s=-1,l=n.length;++s<l;){var o=n[s],d=t?t(r[o],e[o],o,r,e):u;d===u&&(d=e[o]),i?Ze(r,o,d):lr(r,o,d)}return r}function hd(e,n){return Ke(e,wi(e),n)}function kd(e,n){return Ke(e,Vs(e),n)}function Xr(e,n){return function(r,t){var i=S(r)?wo:Df,s=n?n():{};return i(r,e,A(t,2),s)}}function Mn(e){return I(function(n,r){var t=-1,i=r.length,s=i>1?r[i-1]:u,l=i>2?r[2]:u;for(s=e.length>3&&typeof s=="function"?(i--,s):u,l&&oe(r[0],r[1],l)&&(s=i<3?u:s,i=1),n=U(n);++t<i;){var o=r[t];o&&e(n,o,t,s)}return n})}function Bs(e,n){return function(r,t){if(r==null)return r;if(!ge(r))return e(r,t);for(var i=r.length,s=n?i:-1,l=U(r);(n?s--:++s<i)&&t(l[s],s,l)!==!1;);return r}}function Ss(e){return function(n,r,t){for(var i=-1,s=U(n),l=t(n),o=l.length;o--;){var d=l[e?o:++i];if(r(s[d],d,s)===!1)break}return n}}function yd(e,n,r){var t=n&me,i=cr(e);function s(){var l=this&&this!==ie&&this instanceof s?i:e;return l.apply(t?r:this,arguments)}return s}function Fs(e){return function(n){n=D(n);var r=Sn(n)?je(n):u,t=r?r[0]:n.charAt(0),i=r?gn(r,1).join(""):n.slice(1);return t[e]()+i}}function Cn(e){return function(n){return Dt(Bu(Pu(n).replace(uo,"")),e,"")}}function cr(e){return function(){var n=arguments;switch(n.length){case 0:return new e;case 1:return new e(n[0]);case 2:return new e(n[0],n[1]);case 3:return new e(n[0],n[1],n[2]);case 4:return new e(n[0],n[1],n[2],n[3]);case 5:return new e(n[0],n[1],n[2],n[3],n[4]);case 6:return new e(n[0],n[1],n[2],n[3],n[4],n[5]);case 7:return new e(n[0],n[1],n[2],n[3],n[4],n[5],n[6])}var r=On(e.prototype),t=e.apply(r,n);return Y(t)?t:r}}function _d(e,n,r){var t=cr(e);function i(){for(var s=arguments.length,l=g(s),o=s,d=Dn(i);o--;)l[o]=arguments[o];var m=s<3&&l[0]!==d&&l[s-1]!==d?[]:un(l,d);if(s-=m.length,s<r)return Os(e,n,Jr,i.placeholder,u,l,m,u,u,r-s);var v=this&&this!==ie&&this instanceof i?t:e;return ve(v,this,l)}return i}function js(e){return function(n,r,t){var i=U(n);if(!ge(n)){var s=A(r,3);n=re(n),r=function(o){return s(i[o],o,i)}}var l=e(n,r,t);return l>-1?i[s?n[l]:l]:u}}function Is(e){return Je(function(n){var r=n.length,t=r,i=Re.prototype.thru;for(e&&n.reverse();t--;){var s=n[t];if(typeof s!="function")throw new Te(B);if(i&&!l&&rt(s)=="wrapper")var l=new Re([],!0)}for(t=l?t:r;++t<r;){s=n[t];var o=rt(s),d=o=="wrapper"?_i(s):u;d&&Ti(d[0])&&d[1]==(He|We|Ge|Yn)&&!d[4].length&&d[9]==1?l=l[rt(d[0])].apply(l,d[3]):l=s.length==1&&Ti(s)?l[o]():l.thru(s)}return function(){var m=arguments,v=m[0];if(l&&m.length==1&&S(v))return l.plant(v).value();for(var h=0,y=r?n[h].apply(this,m):v;++h<r;)y=n[h].call(this,y);return y}})}function Jr(e,n,r,t,i,s,l,o,d,m){var v=n&He,h=n&me,y=n&Rn,w=n&(We|Hn),R=n&_t,j=y?u:cr(e);function q(){for(var N=arguments.length,O=g(N),_e=N;_e--;)O[_e]=arguments[_e];if(w)var fe=Dn(q),be=So(O,fe);if(t&&(O=Es(O,t,i,w)),s&&(O=Ps(O,s,l,w)),N-=be,w&&N<m){var X=un(O,fe);return Os(e,n,Jr,q.placeholder,r,O,X,o,d,m-N)}var Le=h?r:this,rn=y?Le[e]:e;return N=O.length,o?O=Dd(O,o):R&&N>1&&O.reverse(),v&&d<N&&(O.length=d),this&&this!==ie&&this instanceof q&&(rn=j||cr(rn)),rn.apply(Le,O)}return q}function Ns(e,n){return function(r,t){return Yf(r,e,n(t),{})}}function Qr(e,n){return function(r,t){var i;if(r===u&&t===u)return n;if(r!==u&&(i=r),t!==u){if(i===u)return t;typeof r=="string"||typeof t=="string"?(r=ke(r),t=ke(t)):(r=_s(r),t=_s(t)),i=e(r,t)}return i}}function vi(e){return Je(function(n){return n=$(n,he(A())),I(function(r){var t=this;return e(n,function(i){return ve(i,t,r)})})})}function et(e,n){n=n===u?" ":ke(n);var r=n.length;if(r<2)return r?oi(n,e):n;var t=oi(n,Dr(e/Fn(n)));return Sn(n)?gn(je(t),0,e).join(""):t.slice(0,e)}function bd(e,n,r,t){var i=n&me,s=cr(e);function l(){for(var o=-1,d=arguments.length,m=-1,v=t.length,h=g(v+d),y=this&&this!==ie&&this instanceof l?s:e;++m<v;)h[m]=t[m];for(;d--;)h[m++]=arguments[++o];return ve(y,i?r:this,h)}return l}function Ls(e){return function(n,r,t){return t&&typeof t!="number"&&oe(n,r,t)&&(r=t=u),n=nn(n),r===u?(r=n,n=0):r=nn(r),t=t===u?n<r?1:-1:nn(t),sd(n,r,t,e)}}function nt(e){return function(n,r){return typeof n=="string"&&typeof r=="string"||(n=Pe(n),r=Pe(r)),e(n,r)}}function Os(e,n,r,t,i,s,l,o,d,m){var v=n&We,h=v?l:u,y=v?u:l,w=v?s:u,R=v?u:s;n|=v?Ge:$n,n&=~(v?$n:Ge),n&na||(n&=-4);var j=[e,n,i,w,h,R,y,o,d,m],q=r.apply(u,j);return Ti(e)&&zs(q,j),q.placeholder=t,Zs(q,e,n)}function hi(e){var n=Q[e];return function(r,t){if(r=Pe(r),t=t==null?0:se(F(t),292),t&&Za(r)){var i=(D(r)+"e").split("e"),s=n(i[0]+"e"+(+i[1]+t));return i=(D(s)+"e").split("e"),+(i[0]+"e"+(+i[1]-t))}return n(r)}}var wd=Nn&&1/Br(new Nn([,-0]))[1]==yr?function(e){return new Nn(e)}:Ci;function Ms(e){return function(n){var r=ue(n);return r==Se?$t(n):r==Fe?Mo(n):Bo(n,e(n))}}function Xe(e,n,r,t,i,s,l,o){var d=n&Rn;if(!d&&typeof e!="function")throw new Te(B);var m=t?t.length:0;if(m||(n&=-97,t=i=u),l=l===u?l:ee(F(l),0),o=o===u?o:F(o),m-=i?i.length:0,n&$n){var v=t,h=i;t=i=u}var y=d?u:_i(e),w=[e,n,r,t,i,v,h,s,l,o];if(y&&Od(w,y),e=w[0],n=w[1],r=w[2],t=w[3],i=w[4],o=w[9]=w[9]===u?d?0:e.length:ee(w[9]-m,0),!o&&n&(We|Hn)&&(n&=-25),!n||n==me)var R=yd(e,n,r);else n==We||n==Hn?R=_d(e,n,o):(n==Ge||n==(me|Ge))&&!i.length?R=bd(e,n,r,t):R=Jr.apply(u,w);var j=y?ks:zs;return Zs(j(R,w),e,n)}function Cs(e,n,r,t){return e===u||Ne(e,In[r])&&!V.call(t,r)?n:e}function Ds(e,n,r,t,i,s){return Y(e)&&Y(n)&&(s.set(n,e),Yr(e,n,u,Ds,s),s.delete(n)),e}function Ad(e){return vr(e)?u:e}function Ks(e,n,r,t,i,s){var l=r&te,o=e.length,d=n.length;if(o!=d&&!(l&&d>o))return!1;var m=s.get(e),v=s.get(n);if(m&&v)return m==n&&v==e;var h=-1,y=!0,w=r&tn?new kn:u;for(s.set(e,n),s.set(n,e);++h<o;){var R=e[h],j=n[h];if(t)var q=l?t(j,R,h,n,e,s):t(R,j,h,e,n,s);if(q!==u){if(q)continue;y=!1;break}if(w){if(!Kt(n,function(N,O){if(!rr(w,O)&&(R===N||i(R,N,r,t,s)))return w.push(O)})){y=!1;break}}else if(!(R===j||i(R,j,r,t,s))){y=!1;break}}return s.delete(e),s.delete(n),y}function Td(e,n,r,t,i,s,l){switch(r){case En:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case nr:return!(e.byteLength!=n.byteLength||!s(new Lr(e),new Lr(n)));case zn:case Zn:case Xn:return Ne(+e,+n);case wr:return e.name==n.name&&e.message==n.message;case Jn:case Qn:return e==n+"";case Se:var o=$t;case Fe:var d=t&te;if(o||(o=Br),e.size!=n.size&&!d)return!1;var m=l.get(e);if(m)return m==n;t|=tn,l.set(e,n);var v=Ks(o(e),o(n),t,i,s,l);return l.delete(e),v;case Tr:if(ur)return ur.call(e)==ur.call(n)}return!1}function Rd(e,n,r,t,i,s){var l=r&te,o=ki(e),d=o.length,m=ki(n),v=m.length;if(d!=v&&!l)return!1;for(var h=d;h--;){var y=o[h];if(!(l?y in n:V.call(n,y)))return!1}var w=s.get(e),R=s.get(n);if(w&&R)return w==n&&R==e;var j=!0;s.set(e,n),s.set(n,e);for(var q=l;++h<d;){y=o[h];var N=e[y],O=n[y];if(t)var _e=l?t(O,N,y,n,e,s):t(N,O,y,e,n,s);if(!(_e===u?N===O||i(N,O,r,t,s):_e)){j=!1;break}q||(q=y=="constructor")}if(j&&!q){var fe=e.constructor,be=n.constructor;fe!=be&&"constructor"in e&&"constructor"in n&&!(typeof fe=="function"&&fe instanceof fe&&typeof be=="function"&&be instanceof be)&&(j=!1)}return s.delete(e),s.delete(n),j}function Je(e){return qi($s(e,u,ru),e+"")}function ki(e){return us(e,re,wi)}function yi(e){return us(e,ce,Vs)}var _i=Vr?function(e){return Vr.get(e)}:Ci;function rt(e){for(var n=e.name+"",r=Ln[n],t=V.call(Ln,n)?r.length:0;t--;){var i=r[t],s=i.func;if(s==null||s==e)return i.name}return n}function Dn(e){var n=V.call(a,"placeholder")?a:e;return n.placeholder}function A(){var e=a.iteratee||Oi;return e=e===Oi?fs:e,arguments.length?e(arguments[0],arguments[1]):e}function tt(e,n){var r=e.__data__;return jd(n)?r[typeof n=="string"?"string":"hash"]:r.map}function bi(e){for(var n=re(e),r=n.length;r--;){var t=n[r],i=e[t];n[r]=[t,i,Gs(i)]}return n}function bn(e,n){var r=No(e,n);return os(r)?r:u}function qd(e){var n=V.call(e,vn),r=e[vn];try{e[vn]=u;var t=!0}catch{}var i=Ir.call(e);return t&&(n?e[vn]=r:delete e[vn]),i}var wi=zt?function(e){return e==null?[]:(e=U(e),an(zt(e),function(n){return Ya.call(e,n)}))}:Di,Vs=zt?function(e){for(var n=[];e;)sn(n,wi(e)),e=Or(e);return n}:Di,ue=le;(Zt&&ue(new Zt(new ArrayBuffer(1)))!=En||ir&&ue(new ir)!=Se||Xt&&ue(Xt.resolve())!=ia||Nn&&ue(new Nn)!=Fe||ar&&ue(new ar)!=er)&&(ue=function(e){var n=le(e),r=n==$e?e.constructor:u,t=r?wn(r):"";if(t)switch(t){case lf:return En;case of:return Se;case ff:return ia;case df:return Fe;case gf:return er}return n});function xd(e,n,r){for(var t=-1,i=r.length;++t<i;){var s=r[t],l=s.size;switch(s.type){case"drop":e+=l;break;case"dropRight":n-=l;break;case"take":n=se(n,e+l);break;case"takeRight":e=ee(e,n-l);break}}return{start:e,end:n}}function Ed(e){var n=e.match(Fl);return n?n[1].split(jl):[]}function Us(e,n,r){n=dn(n,e);for(var t=-1,i=n.length,s=!1;++t<i;){var l=Ve(n[t]);if(!(s=e!=null&&r(e,l)))break;e=e[l]}return s||++t!=i?s:(i=e==null?0:e.length,!!i&&ft(i)&&Qe(l,i)&&(S(e)||An(e)))}function Pd(e){var n=e.length,r=new e.constructor(n);return n&&typeof e[0]=="string"&&V.call(e,"index")&&(r.index=e.index,r.input=e.input),r}function Ws(e){return typeof e.constructor=="function"&&!pr(e)?On(Or(e)):{}}function Bd(e,n,r){var t=e.constructor;switch(n){case nr:return mi(e);case zn:case Zn:return new t(+e);case En:return cd(e,r);case bt:case wt:case At:case Tt:case Rt:case qt:case xt:case Et:case Pt:return qs(e,r);case Se:return new t;case Xn:case Qn:return new t(e);case Jn:return pd(e);case Fe:return new t;case Tr:return md(e)}}function Sd(e,n){var r=n.length;if(!r)return e;var t=r-1;return n[t]=(r>1?"& ":"")+n[t],n=n.join(r>2?", ":" "),e.replace(Sl,`{
/* [wrapped with `+n+`] */
`)}function Fd(e){return S(e)||An(e)||!!(za&&e&&e[za])}function Qe(e,n){var r=typeof e;return n=n??qn,!!n&&(r=="number"||r!="symbol"&&Vl.test(e))&&e>-1&&e%1==0&&e<n}function oe(e,n,r){if(!Y(r))return!1;var t=typeof n;return(t=="number"?ge(r)&&Qe(n,r.length):t=="string"&&n in r)?Ne(r[n],e):!1}function Ai(e,n){if(S(e))return!1;var r=typeof e;return r=="number"||r=="symbol"||r=="boolean"||e==null||ye(e)?!0:xl.test(e)||!ql.test(e)||n!=null&&e in U(n)}function jd(e){var n=typeof e;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?e!=="__proto__":e===null}function Ti(e){var n=rt(e),r=a[n];if(typeof r!="function"||!(n in L.prototype))return!1;if(e===r)return!0;var t=_i(r);return!!t&&e===t[0]}function Id(e){return!!Ga&&Ga in e}var Nd=Fr?en:Ki;function pr(e){var n=e&&e.constructor,r=typeof n=="function"&&n.prototype||In;return e===r}function Gs(e){return e===e&&!Y(e)}function Hs(e,n){return function(r){return r==null?!1:r[e]===n&&(n!==u||e in U(r))}}function Ld(e){var n=lt(e,function(t){return r.size===ne&&r.clear(),t}),r=n.cache;return n}function Od(e,n){var r=e[1],t=n[1],i=r|t,s=i<(me|Rn|He),l=t==He&&r==We||t==He&&r==Yn&&e[7].length<=n[8]||t==(He|Yn)&&n[7].length<=n[8]&&r==We;if(!(s||l))return e;t&me&&(e[2]=n[2],i|=r&me?0:na);var o=n[3];if(o){var d=e[3];e[3]=d?Es(d,o,n[4]):o,e[4]=d?un(e[3],K):n[4]}return o=n[5],o&&(d=e[5],e[5]=d?Ps(d,o,n[6]):o,e[6]=d?un(e[5],K):n[6]),o=n[7],o&&(e[7]=o),t&He&&(e[8]=e[8]==null?n[8]:se(e[8],n[8])),e[9]==null&&(e[9]=n[9]),e[0]=n[0],e[1]=i,e}function Md(e){var n=[];if(e!=null)for(var r in U(e))n.push(r);return n}function Cd(e){return Ir.call(e)}function $s(e,n,r){return n=ee(n===u?e.length-1:n,0),function(){for(var t=arguments,i=-1,s=ee(t.length-n,0),l=g(s);++i<s;)l[i]=t[n+i];i=-1;for(var o=g(n+1);++i<n;)o[i]=t[i];return o[n]=r(l),ve(e,this,o)}}function Ys(e,n){return n.length<2?e:_n(e,xe(n,0,-1))}function Dd(e,n){for(var r=e.length,t=se(n.length,r),i=de(e);t--;){var s=n[t];e[t]=Qe(s,r)?i[s]:u}return e}function Ri(e,n){if(!(n==="constructor"&&typeof e[n]=="function")&&n!="__proto__")return e[n]}var zs=Xs(ks),mr=ef||function(e,n){return ie.setTimeout(e,n)},qi=Xs(od);function Zs(e,n,r){var t=n+"";return qi(e,Sd(t,Kd(Ed(t),r)))}function Xs(e){var n=0,r=0;return function(){var t=af(),i=sl-(t-r);if(r=t,i>0){if(++n>=al)return arguments[0]}else n=0;return e.apply(u,arguments)}}function it(e,n){var r=-1,t=e.length,i=t-1;for(n=n===u?t:n;++r<n;){var s=li(r,i),l=e[s];e[s]=e[r],e[r]=l}return e.length=n,e}var Js=Ld(function(e){var n=[];return e.charCodeAt(0)===46&&n.push(""),e.replace(El,function(r,t,i,s){n.push(i?s.replace(Ll,"$1"):t||r)}),n});function Ve(e){if(typeof e=="string"||ye(e))return e;var n=e+"";return n=="0"&&1/e==-1/0?"-0":n}function wn(e){if(e!=null){try{return jr.call(e)}catch{}try{return e+""}catch{}}return""}function Kd(e,n){return Ae(gl,function(r){var t="_."+r[0];n&r[1]&&!Er(e,t)&&e.push(t)}),e.sort()}function Qs(e){if(e instanceof L)return e.clone();var n=new Re(e.__wrapped__,e.__chain__);return n.__actions__=de(e.__actions__),n.__index__=e.__index__,n.__values__=e.__values__,n}function Vd(e,n,r){(r?oe(e,n,r):n===u)?n=1:n=ee(F(n),0);var t=e==null?0:e.length;if(!t||n<1)return[];for(var i=0,s=0,l=g(Dr(t/n));i<t;)l[s++]=xe(e,i,i+=n);return l}function Ud(e){for(var n=-1,r=e==null?0:e.length,t=0,i=[];++n<r;){var s=e[n];s&&(i[t++]=s)}return i}function Wd(){var e=arguments.length;if(!e)return[];for(var n=g(e-1),r=arguments[0],t=e;t--;)n[t-1]=arguments[t];return sn(S(r)?de(r):[r],ae(n,1))}var Gd=I(function(e,n){return Z(e)?or(e,ae(n,1,Z,!0)):[]}),Hd=I(function(e,n){var r=Ee(n);return Z(r)&&(r=u),Z(e)?or(e,ae(n,1,Z,!0),A(r,2)):[]}),$d=I(function(e,n){var r=Ee(n);return Z(r)&&(r=u),Z(e)?or(e,ae(n,1,Z,!0),u,r):[]});function Yd(e,n,r){var t=e==null?0:e.length;return t?(n=r||n===u?1:F(n),xe(e,n<0?0:n,t)):[]}function zd(e,n,r){var t=e==null?0:e.length;return t?(n=r||n===u?1:F(n),n=t-n,xe(e,0,n<0?0:n)):[]}function Zd(e,n){return e&&e.length?Zr(e,A(n,3),!0,!0):[]}function Xd(e,n){return e&&e.length?Zr(e,A(n,3),!0):[]}function Jd(e,n,r,t){var i=e==null?0:e.length;return i?(r&&typeof r!="number"&&oe(e,n,r)&&(r=0,t=i),Wf(e,n,r,t)):[]}function eu(e,n,r){var t=e==null?0:e.length;if(!t)return-1;var i=r==null?0:F(r);return i<0&&(i=ee(t+i,0)),Pr(e,A(n,3),i)}function nu(e,n,r){var t=e==null?0:e.length;if(!t)return-1;var i=t-1;return r!==u&&(i=F(r),i=r<0?ee(t+i,0):se(i,t-1)),Pr(e,A(n,3),i,!0)}function ru(e){var n=e==null?0:e.length;return n?ae(e,1):[]}function Qd(e){var n=e==null?0:e.length;return n?ae(e,yr):[]}function eg(e,n){var r=e==null?0:e.length;return r?(n=n===u?1:F(n),ae(e,n)):[]}function ng(e){for(var n=-1,r=e==null?0:e.length,t={};++n<r;){var i=e[n];t[i[0]]=i[1]}return t}function tu(e){return e&&e.length?e[0]:u}function rg(e,n,r){var t=e==null?0:e.length;if(!t)return-1;var i=r==null?0:F(r);return i<0&&(i=ee(t+i,0)),Bn(e,n,i)}function tg(e){var n=e==null?0:e.length;return n?xe(e,0,-1):[]}var ig=I(function(e){var n=$(e,ci);return n.length&&n[0]===e[0]?ti(n):[]}),ag=I(function(e){var n=Ee(e),r=$(e,ci);return n===Ee(r)?n=u:r.pop(),r.length&&r[0]===e[0]?ti(r,A(n,2)):[]}),sg=I(function(e){var n=Ee(e),r=$(e,ci);return n=typeof n=="function"?n:u,n&&r.pop(),r.length&&r[0]===e[0]?ti(r,u,n):[]});function ug(e,n){return e==null?"":rf.call(e,n)}function Ee(e){var n=e==null?0:e.length;return n?e[n-1]:u}function lg(e,n,r){var t=e==null?0:e.length;if(!t)return-1;var i=t;return r!==u&&(i=F(r),i=i<0?ee(t+i,0):se(i,t-1)),n===n?Do(e,n,i):Pr(e,Oa,i,!0)}function og(e,n){return e&&e.length?ps(e,F(n)):u}var fg=I(iu);function iu(e,n){return e&&e.length&&n&&n.length?ui(e,n):e}function dg(e,n,r){return e&&e.length&&n&&n.length?ui(e,n,A(r,2)):e}function gg(e,n,r){return e&&e.length&&n&&n.length?ui(e,n,u,r):e}var cg=Je(function(e,n){var r=e==null?0:e.length,t=Qt(e,n);return hs(e,$(n,function(i){return Qe(i,r)?+i:i}).sort(xs)),t});function pg(e,n){var r=[];if(!(e&&e.length))return r;var t=-1,i=[],s=e.length;for(n=A(n,3);++t<s;){var l=e[t];n(l,t,e)&&(r.push(l),i.push(t))}return hs(e,i),r}function xi(e){return e==null?e:uf.call(e)}function mg(e,n,r){var t=e==null?0:e.length;return t?(r&&typeof r!="number"&&oe(e,n,r)?(n=0,r=t):(n=n==null?0:F(n),r=r===u?t:F(r)),xe(e,n,r)):[]}function vg(e,n){return zr(e,n)}function hg(e,n,r){return fi(e,n,A(r,2))}function kg(e,n){var r=e==null?0:e.length;if(r){var t=zr(e,n);if(t<r&&Ne(e[t],n))return t}return-1}function yg(e,n){return zr(e,n,!0)}function _g(e,n,r){return fi(e,n,A(r,2),!0)}function bg(e,n){var r=e==null?0:e.length;if(r){var t=zr(e,n,!0)-1;if(Ne(e[t],n))return t}return-1}function wg(e){return e&&e.length?ys(e):[]}function Ag(e,n){return e&&e.length?ys(e,A(n,2)):[]}function Tg(e){var n=e==null?0:e.length;return n?xe(e,1,n):[]}function Rg(e,n,r){return e&&e.length?(n=r||n===u?1:F(n),xe(e,0,n<0?0:n)):[]}function qg(e,n,r){var t=e==null?0:e.length;return t?(n=r||n===u?1:F(n),n=t-n,xe(e,n<0?0:n,t)):[]}function xg(e,n){return e&&e.length?Zr(e,A(n,3),!1,!0):[]}function Eg(e,n){return e&&e.length?Zr(e,A(n,3)):[]}var Pg=I(function(e){return fn(ae(e,1,Z,!0))}),Bg=I(function(e){var n=Ee(e);return Z(n)&&(n=u),fn(ae(e,1,Z,!0),A(n,2))}),Sg=I(function(e){var n=Ee(e);return n=typeof n=="function"?n:u,fn(ae(e,1,Z,!0),u,n)});function Fg(e){return e&&e.length?fn(e):[]}function jg(e,n){return e&&e.length?fn(e,A(n,2)):[]}function Ig(e,n){return n=typeof n=="function"?n:u,e&&e.length?fn(e,u,n):[]}function Ei(e){if(!(e&&e.length))return[];var n=0;return e=an(e,function(r){if(Z(r))return n=ee(r.length,n),!0}),Gt(n,function(r){return $(e,Vt(r))})}function au(e,n){if(!(e&&e.length))return[];var r=Ei(e);return n==null?r:$(r,function(t){return ve(n,u,t)})}var Ng=I(function(e,n){return Z(e)?or(e,n):[]}),Lg=I(function(e){return gi(an(e,Z))}),Og=I(function(e){var n=Ee(e);return Z(n)&&(n=u),gi(an(e,Z),A(n,2))}),Mg=I(function(e){var n=Ee(e);return n=typeof n=="function"?n:u,gi(an(e,Z),u,n)}),Cg=I(Ei);function Dg(e,n){return As(e||[],n||[],lr)}function Kg(e,n){return As(e||[],n||[],gr)}var Vg=I(function(e){var n=e.length,r=n>1?e[n-1]:u;return r=typeof r=="function"?(e.pop(),r):u,au(e,r)});function su(e){var n=a(e);return n.__chain__=!0,n}function Ug(e,n){return n(e),e}function at(e,n){return n(e)}var Wg=Je(function(e){var n=e.length,r=n?e[0]:0,t=this.__wrapped__,i=function(s){return Qt(s,e)};return n>1||this.__actions__.length||!(t instanceof L)||!Qe(r)?this.thru(i):(t=t.slice(r,+r+(n?1:0)),t.__actions__.push({func:at,args:[i],thisArg:u}),new Re(t,this.__chain__).thru(function(s){return n&&!s.length&&s.push(u),s}))});function Gg(){return su(this)}function Hg(){return new Re(this.value(),this.__chain__)}function $g(){this.__values__===u&&(this.__values__=_u(this.value()));var e=this.__index__>=this.__values__.length,n=e?u:this.__values__[this.__index__++];return{done:e,value:n}}function Yg(){return this}function zg(e){for(var n,r=this;r instanceof Wr;){var t=Qs(r);t.__index__=0,t.__values__=u,n?i.__wrapped__=t:n=t;var i=t;r=r.__wrapped__}return i.__wrapped__=e,n}function Zg(){var e=this.__wrapped__;if(e instanceof L){var n=e;return this.__actions__.length&&(n=new L(this)),n=n.reverse(),n.__actions__.push({func:at,args:[xi],thisArg:u}),new Re(n,this.__chain__)}return this.thru(xi)}function Xg(){return ws(this.__wrapped__,this.__actions__)}var Jg=Xr(function(e,n,r){V.call(e,r)?++e[r]:Ze(e,r,1)});function Qg(e,n,r){var t=S(e)?Na:Uf;return r&&oe(e,n,r)&&(n=u),t(e,A(n,3))}function ec(e,n){var r=S(e)?an:as;return r(e,A(n,3))}var nc=js(eu),rc=js(nu);function tc(e,n){return ae(st(e,n),1)}function ic(e,n){return ae(st(e,n),yr)}function ac(e,n,r){return r=r===u?1:F(r),ae(st(e,n),r)}function uu(e,n){var r=S(e)?Ae:on;return r(e,A(n,3))}function lu(e,n){var r=S(e)?Ao:is;return r(e,A(n,3))}var sc=Xr(function(e,n,r){V.call(e,r)?e[r].push(n):Ze(e,r,[n])});function uc(e,n,r,t){e=ge(e)?e:Vn(e),r=r&&!t?F(r):0;var i=e.length;return r<0&&(r=ee(i+r,0)),dt(e)?r<=i&&e.indexOf(n,r)>-1:!!i&&Bn(e,n,r)>-1}var lc=I(function(e,n,r){var t=-1,i=typeof n=="function",s=ge(e)?g(e.length):[];return on(e,function(l){s[++t]=i?ve(n,l,r):fr(l,n,r)}),s}),oc=Xr(function(e,n,r){Ze(e,r,n)});function st(e,n){var r=S(e)?$:ds;return r(e,A(n,3))}function fc(e,n,r,t){return e==null?[]:(S(n)||(n=n==null?[]:[n]),r=t?u:r,S(r)||(r=r==null?[]:[r]),ms(e,n,r))}var dc=Xr(function(e,n,r){e[r?0:1].push(n)},function(){return[[],[]]});function gc(e,n,r){var t=S(e)?Dt:Ca,i=arguments.length<3;return t(e,A(n,4),r,i,on)}function cc(e,n,r){var t=S(e)?To:Ca,i=arguments.length<3;return t(e,A(n,4),r,i,is)}function pc(e,n){var r=S(e)?an:as;return r(e,ot(A(n,3)))}function mc(e){var n=S(e)?es:ud;return n(e)}function vc(e,n,r){(r?oe(e,n,r):n===u)?n=1:n=F(n);var t=S(e)?Mf:ld;return t(e,n)}function hc(e){var n=S(e)?Cf:fd;return n(e)}function kc(e){if(e==null)return 0;if(ge(e))return dt(e)?Fn(e):e.length;var n=ue(e);return n==Se||n==Fe?e.size:ai(e).length}function yc(e,n,r){var t=S(e)?Kt:dd;return r&&oe(e,n,r)&&(n=u),t(e,A(n,3))}var _c=I(function(e,n){if(e==null)return[];var r=n.length;return r>1&&oe(e,n[0],n[1])?n=[]:r>2&&oe(n[0],n[1],n[2])&&(n=[n[0]]),ms(e,ae(n,1),[])}),ut=Qo||function(){return ie.Date.now()};function bc(e,n){if(typeof n!="function")throw new Te(B);return e=F(e),function(){if(--e<1)return n.apply(this,arguments)}}function ou(e,n,r){return n=r?u:n,n=e&&n==null?e.length:n,Xe(e,He,u,u,u,u,n)}function fu(e,n){var r;if(typeof n!="function")throw new Te(B);return e=F(e),function(){return--e>0&&(r=n.apply(this,arguments)),e<=1&&(n=u),r}}var Pi=I(function(e,n,r){var t=me;if(r.length){var i=un(r,Dn(Pi));t|=Ge}return Xe(e,t,n,r,i)}),du=I(function(e,n,r){var t=me|Rn;if(r.length){var i=un(r,Dn(du));t|=Ge}return Xe(n,t,e,r,i)});function gu(e,n,r){n=r?u:n;var t=Xe(e,We,u,u,u,u,u,n);return t.placeholder=gu.placeholder,t}function cu(e,n,r){n=r?u:n;var t=Xe(e,Hn,u,u,u,u,u,n);return t.placeholder=cu.placeholder,t}function pu(e,n,r){var t,i,s,l,o,d,m=0,v=!1,h=!1,y=!0;if(typeof e!="function")throw new Te(B);n=Pe(n)||0,Y(r)&&(v=!!r.leading,h="maxWait"in r,s=h?ee(Pe(r.maxWait)||0,n):s,y="trailing"in r?!!r.trailing:y);function w(X){var Le=t,rn=i;return t=i=u,m=X,l=e.apply(rn,Le),l}function R(X){return m=X,o=mr(N,n),v?w(X):l}function j(X){var Le=X-d,rn=X-m,ju=n-Le;return h?se(ju,s-rn):ju}function q(X){var Le=X-d,rn=X-m;return d===u||Le>=n||Le<0||h&&rn>=s}function N(){var X=ut();if(q(X))return O(X);o=mr(N,j(X))}function O(X){return o=u,y&&t?w(X):(t=i=u,l)}function _e(){o!==u&&Ts(o),m=0,t=d=i=o=u}function fe(){return o===u?l:O(ut())}function be(){var X=ut(),Le=q(X);if(t=arguments,i=this,d=X,Le){if(o===u)return R(d);if(h)return Ts(o),o=mr(N,n),w(d)}return o===u&&(o=mr(N,n)),l}return be.cancel=_e,be.flush=fe,be}var wc=I(function(e,n){return ts(e,1,n)}),Ac=I(function(e,n,r){return ts(e,Pe(n)||0,r)});function Tc(e){return Xe(e,_t)}function lt(e,n){if(typeof e!="function"||n!=null&&typeof n!="function")throw new Te(B);var r=function(){var t=arguments,i=n?n.apply(this,t):t[0],s=r.cache;if(s.has(i))return s.get(i);var l=e.apply(this,t);return r.cache=s.set(i,l)||s,l};return r.cache=new(lt.Cache||ze),r}lt.Cache=ze;function ot(e){if(typeof e!="function")throw new Te(B);return function(){var n=arguments;switch(n.length){case 0:return!e.call(this);case 1:return!e.call(this,n[0]);case 2:return!e.call(this,n[0],n[1]);case 3:return!e.call(this,n[0],n[1],n[2])}return!e.apply(this,n)}}function Rc(e){return fu(2,e)}var qc=gd(function(e,n){n=n.length==1&&S(n[0])?$(n[0],he(A())):$(ae(n,1),he(A()));var r=n.length;return I(function(t){for(var i=-1,s=se(t.length,r);++i<s;)t[i]=n[i].call(this,t[i]);return ve(e,this,t)})}),Bi=I(function(e,n){var r=un(n,Dn(Bi));return Xe(e,Ge,u,n,r)}),mu=I(function(e,n){var r=un(n,Dn(mu));return Xe(e,$n,u,n,r)}),xc=Je(function(e,n){return Xe(e,Yn,u,u,u,n)});function Ec(e,n){if(typeof e!="function")throw new Te(B);return n=n===u?n:F(n),I(e,n)}function Pc(e,n){if(typeof e!="function")throw new Te(B);return n=n==null?0:ee(F(n),0),I(function(r){var t=r[n],i=gn(r,0,n);return t&&sn(i,t),ve(e,this,i)})}function Bc(e,n,r){var t=!0,i=!0;if(typeof e!="function")throw new Te(B);return Y(r)&&(t="leading"in r?!!r.leading:t,i="trailing"in r?!!r.trailing:i),pu(e,n,{leading:t,maxWait:n,trailing:i})}function Sc(e){return ou(e,1)}function Fc(e,n){return Bi(pi(n),e)}function jc(){if(!arguments.length)return[];var e=arguments[0];return S(e)?e:[e]}function Ic(e){return qe(e,Me)}function Nc(e,n){return n=typeof n=="function"?n:u,qe(e,Me,n)}function Lc(e){return qe(e,J|Me)}function Oc(e,n){return n=typeof n=="function"?n:u,qe(e,J|Me,n)}function Mc(e,n){return n==null||rs(e,n,re(n))}function Ne(e,n){return e===n||e!==e&&n!==n}var Cc=nt(ri),Dc=nt(function(e,n){return e>=n}),An=ls(function(){return arguments}())?ls:function(e){return z(e)&&V.call(e,"callee")&&!Ya.call(e,"callee")},S=g.isArray,Kc=Pa?he(Pa):zf;function ge(e){return e!=null&&ft(e.length)&&!en(e)}function Z(e){return z(e)&&ge(e)}function Vc(e){return e===!0||e===!1||z(e)&&le(e)==zn}var cn=nf||Ki,Uc=Ba?he(Ba):Zf;function Wc(e){return z(e)&&e.nodeType===1&&!vr(e)}function Gc(e){if(e==null)return!0;if(ge(e)&&(S(e)||typeof e=="string"||typeof e.splice=="function"||cn(e)||Kn(e)||An(e)))return!e.length;var n=ue(e);if(n==Se||n==Fe)return!e.size;if(pr(e))return!ai(e).length;for(var r in e)if(V.call(e,r))return!1;return!0}function Hc(e,n){return dr(e,n)}function $c(e,n,r){r=typeof r=="function"?r:u;var t=r?r(e,n):u;return t===u?dr(e,n,u,r):!!t}function Si(e){if(!z(e))return!1;var n=le(e);return n==wr||n==pl||typeof e.message=="string"&&typeof e.name=="string"&&!vr(e)}function Yc(e){return typeof e=="number"&&Za(e)}function en(e){if(!Y(e))return!1;var n=le(e);return n==Ar||n==ta||n==cl||n==vl}function vu(e){return typeof e=="number"&&e==F(e)}function ft(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=qn}function Y(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}function z(e){return e!=null&&typeof e=="object"}var hu=Sa?he(Sa):Jf;function zc(e,n){return e===n||ii(e,n,bi(n))}function Zc(e,n,r){return r=typeof r=="function"?r:u,ii(e,n,bi(n),r)}function Xc(e){return ku(e)&&e!=+e}function Jc(e){if(Nd(e))throw new P(E);return os(e)}function Qc(e){return e===null}function ep(e){return e==null}function ku(e){return typeof e=="number"||z(e)&&le(e)==Xn}function vr(e){if(!z(e)||le(e)!=$e)return!1;var n=Or(e);if(n===null)return!0;var r=V.call(n,"constructor")&&n.constructor;return typeof r=="function"&&r instanceof r&&jr.call(r)==zo}var Fi=Fa?he(Fa):Qf;function np(e){return vu(e)&&e>=-9007199254740991&&e<=qn}var yu=ja?he(ja):ed;function dt(e){return typeof e=="string"||!S(e)&&z(e)&&le(e)==Qn}function ye(e){return typeof e=="symbol"||z(e)&&le(e)==Tr}var Kn=Ia?he(Ia):nd;function rp(e){return e===u}function tp(e){return z(e)&&ue(e)==er}function ip(e){return z(e)&&le(e)==kl}var ap=nt(si),sp=nt(function(e,n){return e<=n});function _u(e){if(!e)return[];if(ge(e))return dt(e)?je(e):de(e);if(tr&&e[tr])return Oo(e[tr]());var n=ue(e),r=n==Se?$t:n==Fe?Br:Vn;return r(e)}function nn(e){if(!e)return e===0?e:0;if(e=Pe(e),e===yr||e===-1/0){var n=e<0?-1:1;return n*ol}return e===e?e:0}function F(e){var n=nn(e),r=n%1;return n===n?r?n-r:n:0}function bu(e){return e?yn(F(e),0,Ce):0}function Pe(e){if(typeof e=="number")return e;if(ye(e))return _r;if(Y(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=Y(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=Da(e);var r=Cl.test(e);return r||Kl.test(e)?_o(e.slice(2),r?2:8):Ml.test(e)?_r:+e}function wu(e){return Ke(e,ce(e))}function up(e){return e?yn(F(e),-9007199254740991,qn):e===0?e:0}function D(e){return e==null?"":ke(e)}var lp=Mn(function(e,n){if(pr(n)||ge(n)){Ke(n,re(n),e);return}for(var r in n)V.call(n,r)&&lr(e,r,n[r])}),Au=Mn(function(e,n){Ke(n,ce(n),e)}),gt=Mn(function(e,n,r,t){Ke(n,ce(n),e,t)}),op=Mn(function(e,n,r,t){Ke(n,re(n),e,t)}),fp=Je(Qt);function dp(e,n){var r=On(e);return n==null?r:ns(r,n)}var gp=I(function(e,n){e=U(e);var r=-1,t=n.length,i=t>2?n[2]:u;for(i&&oe(n[0],n[1],i)&&(t=1);++r<t;)for(var s=n[r],l=ce(s),o=-1,d=l.length;++o<d;){var m=l[o],v=e[m];(v===u||Ne(v,In[m])&&!V.call(e,m))&&(e[m]=s[m])}return e}),cp=I(function(e){return e.push(u,Ds),ve(Tu,u,e)});function pp(e,n){return La(e,A(n,3),De)}function mp(e,n){return La(e,A(n,3),ni)}function vp(e,n){return e==null?e:ei(e,A(n,3),ce)}function hp(e,n){return e==null?e:ss(e,A(n,3),ce)}function kp(e,n){return e&&De(e,A(n,3))}function yp(e,n){return e&&ni(e,A(n,3))}function _p(e){return e==null?[]:$r(e,re(e))}function bp(e){return e==null?[]:$r(e,ce(e))}function ji(e,n,r){var t=e==null?u:_n(e,n);return t===u?r:t}function wp(e,n){return e!=null&&Us(e,n,Gf)}function Ii(e,n){return e!=null&&Us(e,n,Hf)}var Ap=Ns(function(e,n,r){n!=null&&typeof n.toString!="function"&&(n=Ir.call(n)),e[n]=r},Li(pe)),Tp=Ns(function(e,n,r){n!=null&&typeof n.toString!="function"&&(n=Ir.call(n)),V.call(e,n)?e[n].push(r):e[n]=[r]},A),Rp=I(fr);function re(e){return ge(e)?Qa(e):ai(e)}function ce(e){return ge(e)?Qa(e,!0):rd(e)}function qp(e,n){var r={};return n=A(n,3),De(e,function(t,i,s){Ze(r,n(t,i,s),t)}),r}function xp(e,n){var r={};return n=A(n,3),De(e,function(t,i,s){Ze(r,i,n(t,i,s))}),r}var Ep=Mn(function(e,n,r){Yr(e,n,r)}),Tu=Mn(function(e,n,r,t){Yr(e,n,r,t)}),Pp=Je(function(e,n){var r={};if(e==null)return r;var t=!1;n=$(n,function(s){return s=dn(s,e),t||(t=s.length>1),s}),Ke(e,yi(e),r),t&&(r=qe(r,J|Ue|Me,Ad));for(var i=n.length;i--;)di(r,n[i]);return r});function Bp(e,n){return Ru(e,ot(A(n)))}var Sp=Je(function(e,n){return e==null?{}:id(e,n)});function Ru(e,n){if(e==null)return{};var r=$(yi(e),function(t){return[t]});return n=A(n),vs(e,r,function(t,i){return n(t,i[0])})}function Fp(e,n,r){n=dn(n,e);var t=-1,i=n.length;for(i||(i=1,e=u);++t<i;){var s=e==null?u:e[Ve(n[t])];s===u&&(t=i,s=r),e=en(s)?s.call(e):s}return e}function jp(e,n,r){return e==null?e:gr(e,n,r)}function Ip(e,n,r,t){return t=typeof t=="function"?t:u,e==null?e:gr(e,n,r,t)}var qu=Ms(re),xu=Ms(ce);function Np(e,n,r){var t=S(e),i=t||cn(e)||Kn(e);if(n=A(n,4),r==null){var s=e&&e.constructor;i?r=t?new s:[]:Y(e)?r=en(s)?On(Or(e)):{}:r={}}return(i?Ae:De)(e,function(l,o,d){return n(r,l,o,d)}),r}function Lp(e,n){return e==null?!0:di(e,n)}function Op(e,n,r){return e==null?e:bs(e,n,pi(r))}function Mp(e,n,r,t){return t=typeof t=="function"?t:u,e==null?e:bs(e,n,pi(r),t)}function Vn(e){return e==null?[]:Ht(e,re(e))}function Cp(e){return e==null?[]:Ht(e,ce(e))}function Dp(e,n,r){return r===u&&(r=n,n=u),r!==u&&(r=Pe(r),r=r===r?r:0),n!==u&&(n=Pe(n),n=n===n?n:0),yn(Pe(e),n,r)}function Kp(e,n,r){return n=nn(n),r===u?(r=n,n=0):r=nn(r),e=Pe(e),$f(e,n,r)}function Vp(e,n,r){if(r&&typeof r!="boolean"&&oe(e,n,r)&&(n=r=u),r===u&&(typeof n=="boolean"?(r=n,n=u):typeof e=="boolean"&&(r=e,e=u)),e===u&&n===u?(e=0,n=1):(e=nn(e),n===u?(n=e,e=0):n=nn(n)),e>n){var t=e;e=n,n=t}if(r||e%1||n%1){var i=Xa();return se(e+i*(n-e+yo("1e-"+((i+"").length-1))),n)}return li(e,n)}var Up=Cn(function(e,n,r){return n=n.toLowerCase(),e+(r?Eu(n):n)});function Eu(e){return Ni(D(e).toLowerCase())}function Pu(e){return e=D(e),e&&e.replace(Ul,Fo).replace(lo,"")}function Wp(e,n,r){e=D(e),n=ke(n);var t=e.length;r=r===u?t:yn(F(r),0,t);var i=r;return r-=n.length,r>=0&&e.slice(r,i)==n}function Gp(e){return e=D(e),e&&Al.test(e)?e.replace(sa,jo):e}function Hp(e){return e=D(e),e&&Pl.test(e)?e.replace(Bt,"\\$&"):e}var $p=Cn(function(e,n,r){return e+(r?"-":"")+n.toLowerCase()}),Yp=Cn(function(e,n,r){return e+(r?" ":"")+n.toLowerCase()}),zp=Fs("toLowerCase");function Zp(e,n,r){e=D(e),n=F(n);var t=n?Fn(e):0;if(!n||t>=n)return e;var i=(n-t)/2;return et(Kr(i),r)+e+et(Dr(i),r)}function Xp(e,n,r){e=D(e),n=F(n);var t=n?Fn(e):0;return n&&t<n?e+et(n-t,r):e}function Jp(e,n,r){e=D(e),n=F(n);var t=n?Fn(e):0;return n&&t<n?et(n-t,r)+e:e}function Qp(e,n,r){return r||n==null?n=0:n&&(n=+n),sf(D(e).replace(St,""),n||0)}function em(e,n,r){return(r?oe(e,n,r):n===u)?n=1:n=F(n),oi(D(e),n)}function nm(){var e=arguments,n=D(e[0]);return e.length<3?n:n.replace(e[1],e[2])}var rm=Cn(function(e,n,r){return e+(r?"_":"")+n.toLowerCase()});function tm(e,n,r){return r&&typeof r!="number"&&oe(e,n,r)&&(n=r=u),r=r===u?Ce:r>>>0,r?(e=D(e),e&&(typeof n=="string"||n!=null&&!Fi(n))&&(n=ke(n),!n&&Sn(e))?gn(je(e),0,r):e.split(n,r)):[]}var im=Cn(function(e,n,r){return e+(r?" ":"")+Ni(n)});function am(e,n,r){return e=D(e),r=r==null?0:yn(F(r),0,e.length),n=ke(n),e.slice(r,r+n.length)==n}function sm(e,n,r){var t=a.templateSettings;r&&oe(e,n,r)&&(n=u),e=D(e),n=gt({},n,t,Cs);var i=gt({},n.imports,t.imports,Cs),s=re(i),l=Ht(i,s),o,d,m=0,v=n.interpolate||Rr,h="__p += '",y=Yt((n.escape||Rr).source+"|"+v.source+"|"+(v===ua?Ol:Rr).source+"|"+(n.evaluate||Rr).source+"|$","g"),w="//# sourceURL="+(V.call(n,"sourceURL")?(n.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++po+"]")+`
`;e.replace(y,function(q,N,O,_e,fe,be){return O||(O=_e),h+=e.slice(m,be).replace(Wl,Io),N&&(o=!0,h+=`' +
__e(`+N+`) +
'`),fe&&(d=!0,h+=`';
`+fe+`;
__p += '`),O&&(h+=`' +
((__t = (`+O+`)) == null ? '' : __t) +
'`),m=be+q.length,q}),h+=`';
`;var R=V.call(n,"variable")&&n.variable;if(!R)h=`with (obj) {
`+h+`
}
`;else if(Nl.test(R))throw new P(H);h=(d?h.replace(yl,""):h).replace(_l,"$1").replace(bl,"$1;"),h="function("+(R||"obj")+`) {
`+(R?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(o?", __e = _.escape":"")+(d?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+h+`return __p
}`;var j=Su(function(){return C(s,w+"return "+h).apply(u,l)});if(j.source=h,Si(j))throw j;return j}function um(e){return D(e).toLowerCase()}function lm(e){return D(e).toUpperCase()}function om(e,n,r){if(e=D(e),e&&(r||n===u))return Da(e);if(!e||!(n=ke(n)))return e;var t=je(e),i=je(n),s=Ka(t,i),l=Va(t,i)+1;return gn(t,s,l).join("")}function fm(e,n,r){if(e=D(e),e&&(r||n===u))return e.slice(0,Wa(e)+1);if(!e||!(n=ke(n)))return e;var t=je(e),i=Va(t,je(n))+1;return gn(t,0,i).join("")}function dm(e,n,r){if(e=D(e),e&&(r||n===u))return e.replace(St,"");if(!e||!(n=ke(n)))return e;var t=je(e),i=Ka(t,je(n));return gn(t,i).join("")}function gm(e,n){var r=tl,t=il;if(Y(n)){var i="separator"in n?n.separator:i;r="length"in n?F(n.length):r,t="omission"in n?ke(n.omission):t}e=D(e);var s=e.length;if(Sn(e)){var l=je(e);s=l.length}if(r>=s)return e;var o=r-Fn(t);if(o<1)return t;var d=l?gn(l,0,o).join(""):e.slice(0,o);if(i===u)return d+t;if(l&&(o+=d.length-o),Fi(i)){if(e.slice(o).search(i)){var m,v=d;for(i.global||(i=Yt(i.source,D(la.exec(i))+"g")),i.lastIndex=0;m=i.exec(v);)var h=m.index;d=d.slice(0,h===u?o:h)}}else if(e.indexOf(ke(i),o)!=o){var y=d.lastIndexOf(i);y>-1&&(d=d.slice(0,y))}return d+t}function cm(e){return e=D(e),e&&wl.test(e)?e.replace(aa,Ko):e}var pm=Cn(function(e,n,r){return e+(r?" ":"")+n.toUpperCase()}),Ni=Fs("toUpperCase");function Bu(e,n,r){return e=D(e),n=r?u:n,n===u?Lo(e)?Wo(e):xo(e):e.match(n)||[]}var Su=I(function(e,n){try{return ve(e,u,n)}catch(r){return Si(r)?r:new P(r)}}),mm=Je(function(e,n){return Ae(n,function(r){r=Ve(r),Ze(e,r,Pi(e[r],e))}),e});function vm(e){var n=e==null?0:e.length,r=A();return e=n?$(e,function(t){if(typeof t[1]!="function")throw new Te(B);return[r(t[0]),t[1]]}):[],I(function(t){for(var i=-1;++i<n;){var s=e[i];if(ve(s[0],this,t))return ve(s[1],this,t)}})}function hm(e){return Vf(qe(e,J))}function Li(e){return function(){return e}}function km(e,n){return e==null||e!==e?n:e}var ym=Is(),_m=Is(!0);function pe(e){return e}function Oi(e){return fs(typeof e=="function"?e:qe(e,J))}function bm(e){return gs(qe(e,J))}function wm(e,n){return cs(e,qe(n,J))}var Am=I(function(e,n){return function(r){return fr(r,e,n)}}),Tm=I(function(e,n){return function(r){return fr(e,r,n)}});function Mi(e,n,r){var t=re(n),i=$r(n,t);r==null&&!(Y(n)&&(i.length||!t.length))&&(r=n,n=e,e=this,i=$r(n,re(n)));var s=!(Y(r)&&"chain"in r)||!!r.chain,l=en(e);return Ae(i,function(o){var d=n[o];e[o]=d,l&&(e.prototype[o]=function(){var m=this.__chain__;if(s||m){var v=e(this.__wrapped__),h=v.__actions__=de(this.__actions__);return h.push({func:d,args:arguments,thisArg:e}),v.__chain__=m,v}return d.apply(e,sn([this.value()],arguments))})}),e}function Rm(){return ie._===this&&(ie._=Zo),this}function Ci(){}function qm(e){return e=F(e),I(function(n){return ps(n,e)})}var xm=vi($),Em=vi(Na),Pm=vi(Kt);function Fu(e){return Ai(e)?Vt(Ve(e)):ad(e)}function Bm(e){return function(n){return e==null?u:_n(e,n)}}var Sm=Ls(),Fm=Ls(!0);function Di(){return[]}function Ki(){return!1}function jm(){return{}}function Im(){return""}function Nm(){return!0}function Lm(e,n){if(e=F(e),e<1||e>qn)return[];var r=Ce,t=se(e,Ce);n=A(n),e-=Ce;for(var i=Gt(t,n);++r<e;)n(r);return i}function Om(e){return S(e)?$(e,Ve):ye(e)?[e]:de(Js(D(e)))}function Mm(e){var n=++Yo;return D(e)+n}var Cm=Qr(function(e,n){return e+n},0),Dm=hi("ceil"),Km=Qr(function(e,n){return e/n},1),Vm=hi("floor");function Um(e){return e&&e.length?Hr(e,pe,ri):u}function Wm(e,n){return e&&e.length?Hr(e,A(n,2),ri):u}function Gm(e){return Ma(e,pe)}function Hm(e,n){return Ma(e,A(n,2))}function $m(e){return e&&e.length?Hr(e,pe,si):u}function Ym(e,n){return e&&e.length?Hr(e,A(n,2),si):u}var zm=Qr(function(e,n){return e*n},1),Zm=hi("round"),Xm=Qr(function(e,n){return e-n},0);function Jm(e){return e&&e.length?Wt(e,pe):0}function Qm(e,n){return e&&e.length?Wt(e,A(n,2)):0}return a.after=bc,a.ary=ou,a.assign=lp,a.assignIn=Au,a.assignInWith=gt,a.assignWith=op,a.at=fp,a.before=fu,a.bind=Pi,a.bindAll=mm,a.bindKey=du,a.castArray=jc,a.chain=su,a.chunk=Vd,a.compact=Ud,a.concat=Wd,a.cond=vm,a.conforms=hm,a.constant=Li,a.countBy=Jg,a.create=dp,a.curry=gu,a.curryRight=cu,a.debounce=pu,a.defaults=gp,a.defaultsDeep=cp,a.defer=wc,a.delay=Ac,a.difference=Gd,a.differenceBy=Hd,a.differenceWith=$d,a.drop=Yd,a.dropRight=zd,a.dropRightWhile=Zd,a.dropWhile=Xd,a.fill=Jd,a.filter=ec,a.flatMap=tc,a.flatMapDeep=ic,a.flatMapDepth=ac,a.flatten=ru,a.flattenDeep=Qd,a.flattenDepth=eg,a.flip=Tc,a.flow=ym,a.flowRight=_m,a.fromPairs=ng,a.functions=_p,a.functionsIn=bp,a.groupBy=sc,a.initial=tg,a.intersection=ig,a.intersectionBy=ag,a.intersectionWith=sg,a.invert=Ap,a.invertBy=Tp,a.invokeMap=lc,a.iteratee=Oi,a.keyBy=oc,a.keys=re,a.keysIn=ce,a.map=st,a.mapKeys=qp,a.mapValues=xp,a.matches=bm,a.matchesProperty=wm,a.memoize=lt,a.merge=Ep,a.mergeWith=Tu,a.method=Am,a.methodOf=Tm,a.mixin=Mi,a.negate=ot,a.nthArg=qm,a.omit=Pp,a.omitBy=Bp,a.once=Rc,a.orderBy=fc,a.over=xm,a.overArgs=qc,a.overEvery=Em,a.overSome=Pm,a.partial=Bi,a.partialRight=mu,a.partition=dc,a.pick=Sp,a.pickBy=Ru,a.property=Fu,a.propertyOf=Bm,a.pull=fg,a.pullAll=iu,a.pullAllBy=dg,a.pullAllWith=gg,a.pullAt=cg,a.range=Sm,a.rangeRight=Fm,a.rearg=xc,a.reject=pc,a.remove=pg,a.rest=Ec,a.reverse=xi,a.sampleSize=vc,a.set=jp,a.setWith=Ip,a.shuffle=hc,a.slice=mg,a.sortBy=_c,a.sortedUniq=wg,a.sortedUniqBy=Ag,a.split=tm,a.spread=Pc,a.tail=Tg,a.take=Rg,a.takeRight=qg,a.takeRightWhile=xg,a.takeWhile=Eg,a.tap=Ug,a.throttle=Bc,a.thru=at,a.toArray=_u,a.toPairs=qu,a.toPairsIn=xu,a.toPath=Om,a.toPlainObject=wu,a.transform=Np,a.unary=Sc,a.union=Pg,a.unionBy=Bg,a.unionWith=Sg,a.uniq=Fg,a.uniqBy=jg,a.uniqWith=Ig,a.unset=Lp,a.unzip=Ei,a.unzipWith=au,a.update=Op,a.updateWith=Mp,a.values=Vn,a.valuesIn=Cp,a.without=Ng,a.words=Bu,a.wrap=Fc,a.xor=Lg,a.xorBy=Og,a.xorWith=Mg,a.zip=Cg,a.zipObject=Dg,a.zipObjectDeep=Kg,a.zipWith=Vg,a.entries=qu,a.entriesIn=xu,a.extend=Au,a.extendWith=gt,Mi(a,a),a.add=Cm,a.attempt=Su,a.camelCase=Up,a.capitalize=Eu,a.ceil=Dm,a.clamp=Dp,a.clone=Ic,a.cloneDeep=Lc,a.cloneDeepWith=Oc,a.cloneWith=Nc,a.conformsTo=Mc,a.deburr=Pu,a.defaultTo=km,a.divide=Km,a.endsWith=Wp,a.eq=Ne,a.escape=Gp,a.escapeRegExp=Hp,a.every=Qg,a.find=nc,a.findIndex=eu,a.findKey=pp,a.findLast=rc,a.findLastIndex=nu,a.findLastKey=mp,a.floor=Vm,a.forEach=uu,a.forEachRight=lu,a.forIn=vp,a.forInRight=hp,a.forOwn=kp,a.forOwnRight=yp,a.get=ji,a.gt=Cc,a.gte=Dc,a.has=wp,a.hasIn=Ii,a.head=tu,a.identity=pe,a.includes=uc,a.indexOf=rg,a.inRange=Kp,a.invoke=Rp,a.isArguments=An,a.isArray=S,a.isArrayBuffer=Kc,a.isArrayLike=ge,a.isArrayLikeObject=Z,a.isBoolean=Vc,a.isBuffer=cn,a.isDate=Uc,a.isElement=Wc,a.isEmpty=Gc,a.isEqual=Hc,a.isEqualWith=$c,a.isError=Si,a.isFinite=Yc,a.isFunction=en,a.isInteger=vu,a.isLength=ft,a.isMap=hu,a.isMatch=zc,a.isMatchWith=Zc,a.isNaN=Xc,a.isNative=Jc,a.isNil=ep,a.isNull=Qc,a.isNumber=ku,a.isObject=Y,a.isObjectLike=z,a.isPlainObject=vr,a.isRegExp=Fi,a.isSafeInteger=np,a.isSet=yu,a.isString=dt,a.isSymbol=ye,a.isTypedArray=Kn,a.isUndefined=rp,a.isWeakMap=tp,a.isWeakSet=ip,a.join=ug,a.kebabCase=$p,a.last=Ee,a.lastIndexOf=lg,a.lowerCase=Yp,a.lowerFirst=zp,a.lt=ap,a.lte=sp,a.max=Um,a.maxBy=Wm,a.mean=Gm,a.meanBy=Hm,a.min=$m,a.minBy=Ym,a.stubArray=Di,a.stubFalse=Ki,a.stubObject=jm,a.stubString=Im,a.stubTrue=Nm,a.multiply=zm,a.nth=og,a.noConflict=Rm,a.noop=Ci,a.now=ut,a.pad=Zp,a.padEnd=Xp,a.padStart=Jp,a.parseInt=Qp,a.random=Vp,a.reduce=gc,a.reduceRight=cc,a.repeat=em,a.replace=nm,a.result=Fp,a.round=Zm,a.runInContext=f,a.sample=mc,a.size=kc,a.snakeCase=rm,a.some=yc,a.sortedIndex=vg,a.sortedIndexBy=hg,a.sortedIndexOf=kg,a.sortedLastIndex=yg,a.sortedLastIndexBy=_g,a.sortedLastIndexOf=bg,a.startCase=im,a.startsWith=am,a.subtract=Xm,a.sum=Jm,a.sumBy=Qm,a.template=sm,a.times=Lm,a.toFinite=nn,a.toInteger=F,a.toLength=bu,a.toLower=um,a.toNumber=Pe,a.toSafeInteger=up,a.toString=D,a.toUpper=lm,a.trim=om,a.trimEnd=fm,a.trimStart=dm,a.truncate=gm,a.unescape=cm,a.uniqueId=Mm,a.upperCase=pm,a.upperFirst=Ni,a.each=uu,a.eachRight=lu,a.first=tu,Mi(a,function(){var e={};return De(a,function(n,r){V.call(a.prototype,r)||(e[r]=n)}),e}(),{chain:!1}),a.VERSION=x,Ae(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){a[e].placeholder=a}),Ae(["drop","take"],function(e,n){L.prototype[e]=function(r){r=r===u?1:ee(F(r),0);var t=this.__filtered__&&!n?new L(this):this.clone();return t.__filtered__?t.__takeCount__=se(r,t.__takeCount__):t.__views__.push({size:se(r,Ce),type:e+(t.__dir__<0?"Right":"")}),t},L.prototype[e+"Right"]=function(r){return this.reverse()[e](r).reverse()}}),Ae(["filter","map","takeWhile"],function(e,n){var r=n+1,t=r==ra||r==ll;L.prototype[e]=function(i){var s=this.clone();return s.__iteratees__.push({iteratee:A(i,3),type:r}),s.__filtered__=s.__filtered__||t,s}}),Ae(["head","last"],function(e,n){var r="take"+(n?"Right":"");L.prototype[e]=function(){return this[r](1).value()[0]}}),Ae(["initial","tail"],function(e,n){var r="drop"+(n?"":"Right");L.prototype[e]=function(){return this.__filtered__?new L(this):this[r](1)}}),L.prototype.compact=function(){return this.filter(pe)},L.prototype.find=function(e){return this.filter(e).head()},L.prototype.findLast=function(e){return this.reverse().find(e)},L.prototype.invokeMap=I(function(e,n){return typeof e=="function"?new L(this):this.map(function(r){return fr(r,e,n)})}),L.prototype.reject=function(e){return this.filter(ot(A(e)))},L.prototype.slice=function(e,n){e=F(e);var r=this;return r.__filtered__&&(e>0||n<0)?new L(r):(e<0?r=r.takeRight(-e):e&&(r=r.drop(e)),n!==u&&(n=F(n),r=n<0?r.dropRight(-n):r.take(n-e)),r)},L.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},L.prototype.toArray=function(){return this.take(Ce)},De(L.prototype,function(e,n){var r=/^(?:filter|find|map|reject)|While$/.test(n),t=/^(?:head|last)$/.test(n),i=a[t?"take"+(n=="last"?"Right":""):n],s=t||/^find/.test(n);i&&(a.prototype[n]=function(){var l=this.__wrapped__,o=t?[1]:arguments,d=l instanceof L,m=o[0],v=d||S(l),h=function(N){var O=i.apply(a,sn([N],o));return t&&y?O[0]:O};v&&r&&typeof m=="function"&&m.length!=1&&(d=v=!1);var y=this.__chain__,w=!!this.__actions__.length,R=s&&!y,j=d&&!w;if(!s&&v){l=j?l:new L(this);var q=e.apply(l,o);return q.__actions__.push({func:at,args:[h],thisArg:u}),new Re(q,y)}return R&&j?e.apply(this,o):(q=this.thru(h),R?t?q.value()[0]:q.value():q)})}),Ae(["pop","push","shift","sort","splice","unshift"],function(e){var n=Sr[e],r=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",t=/^(?:pop|shift)$/.test(e);a.prototype[e]=function(){var i=arguments;if(t&&!this.__chain__){var s=this.value();return n.apply(S(s)?s:[],i)}return this[r](function(l){return n.apply(S(l)?l:[],i)})}}),De(L.prototype,function(e,n){var r=a[n];if(r){var t=r.name+"";V.call(Ln,t)||(Ln[t]=[]),Ln[t].push({name:n,func:r})}}),Ln[Jr(u,Rn).name]=[{name:"wrapper",func:u}],L.prototype.clone=cf,L.prototype.reverse=pf,L.prototype.value=mf,a.prototype.at=Wg,a.prototype.chain=Gg,a.prototype.commit=Hg,a.prototype.next=$g,a.prototype.plant=zg,a.prototype.reverse=Zg,a.prototype.toJSON=a.prototype.valueOf=a.prototype.value=Xg,a.prototype.first=a.prototype.head,tr&&(a.prototype[tr]=Yg),a},jn=Go();mn?((mn.exports=jn)._=jn,Ot._=jn):ie._=jn}).call(Mv)}(hr,hr.exports)),hr.exports}var Uu=Cv();const Dv="NORGE",Wu=c=>c??"",Kv=c=>{const{adresselinje1:b,adresselinje2:u,adresselinje3:x,postNummer:T,poststed:E,land:B}=c,H=[b,u,x].filter(K=>!!K).join(", "),M=`${Wu(T)} ${Wu(E)}`,ne=(B==null?void 0:B.toUpperCase())!==Dv?B:void 0;return[H,M,ne].map(K=>K==null?void 0:K.trim()).filter(K=>!!K).join(", ").trim()},Bh=(c,b)=>[...c].sort(Zu).find(u=>u.adresseType===b),Sh=(c,b)=>c.length!==b.length?!1:c.every(u=>b.some(x=>Uu.isEqual(u,x)))&&b.every(u=>c.some(x=>Uu.isEqual(x,u))),Gi=Un(kr);var Vv=(c=>(c[c.SOKNAD=0]="SOKNAD",c[c.FREG=1]="FREG",c[c.MEDL=2]="MEDL",c))(Vv||{});const Uv=c=>{switch(c){case 0:return Gi.formatMessage({id:"FaktaKilde.Soknad"});case 1:return Gi.formatMessage({id:"FaktaKilde.FREG"});case 2:return Gi.formatMessage({id:"FaktaKilde.MEDL"});default:return sv(c)}},Xu=pn.forwardRef((c,b)=>k.jsx(Hi,{gap:"2",style:{display:"flex"},...c,ref:b}));Xu.displayName="FaktaGruppe";const Wv=({label:c,value:b,kilde:u})=>k.jsx(kt,{background:"bg-subtle",flexGrow:"1",paddingBlock:"2",paddingInline:"4",borderRadius:"medium",children:k.jsxs(Xi,{gap:"6",children:[k.jsxs("div",{children:[k.jsx(Yu,{size:"small",children:c}),k.jsx($i,{size:"large",children:b})]}),k.jsx(Yi,{uppercase:!0,children:Uv(u)})]})});Xu.__docgenInfo={description:"",methods:[],displayName:"FaktaGruppe"};Wv.__docgenInfo={description:"",methods:[],displayName:"FaktaBox",props:{label:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},value:{required:!0,tsType:{name:"string"},description:""},kilde:{required:!0,tsType:{name:"FaktaKilde"},description:""}}};const Gv="_boks_c3bfh_1",Hv="_harBorderLeft_c3bfh_8",$v="_harBorderTop_c3bfh_12",Ju={boks:Gv,harBorderLeft:Hv,harBorderTop:$v},Yv=Rv.bind(Ju),zv=({harBorderTop:c=!1,harBorderLeft:b=!0,children:u})=>k.jsx("div",{className:Yv(Ju.boks,{harBorderLeft:b,harBorderTop:c}),children:u});zv.__docgenInfo={description:"",methods:[],displayName:"Boks",props:{harBorderTop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},harBorderLeft:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Qu=({adresser:c,erAnnenpart:b=!1,harSammeAdresser:u=!1,adresseKodeverk:x})=>{if(u)return k.jsx(kt,{padding:"4",children:k.jsx(Iu,{textColor:"subtle",children:k.jsx(Be,{id:"AdresseTabell.SammeAdresse"})})});const T=E=>E+1===c.length?{border:"0px"}:{};return k.jsxs(k.Fragment,{children:[c.length===0&&k.jsx(kt,{padding:"4",children:k.jsx(Iu,{textColor:"subtle",children:k.jsx(Be,{id:"AdresseTabell.IngenAdresse",values:{erAnnenpart:b}})})}),c.length>0&&k.jsxs(Oe,{style:{tableLayout:"fixed"},children:[k.jsx(Oe.Header,{children:k.jsxs(Oe.Row,{children:[k.jsx(Oe.HeaderCell,{children:k.jsx(Be,{id:"AdresseTabell.PeriodeLabel"})}),k.jsx(Oe.HeaderCell,{children:k.jsx(Be,{id:"AdresseTabell.AdresseLabel"})}),k.jsx(Oe.HeaderCell,{children:k.jsx(Be,{id:"AdresseTabell.TypeLabel"})})]})}),k.jsx(Oe.Body,{children:c.toSorted(Zu).map((E,B)=>{var H;return k.jsxs(Oe.Row,{children:[k.jsx(Oe.DataCell,{style:T(B),children:k.jsx(uv,{dateStringFom:E.fom,dateStringTom:E.tom===zi?void 0:E.tom})}),k.jsx(Oe.DataCell,{style:T(B),children:Kv(E)}),k.jsx(Oe.DataCell,{style:T(B),children:(H=x.find(M=>M.kode===E.adresseType))==null?void 0:H.navn})]},E.adresseType+E.fom+E.tom)})})]})]})};Qu.__docgenInfo={description:"",methods:[],displayName:"AdresseTabell",props:{adresser:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"},description:""}}};const Zv=Un(kr),Xv=c=>{switch(c){case Cu.KVINNE:return Ui.female;case Cu.MANN:return Ui.male;default:return Ui.unknown}},mt=({rolle:c="BRUKER",alleKodeverk:b,harSammeAdresser:u,navn:x,kjønn:T,sivilstand:E,fødselsdato:B,dødsdato:H,adresser:M,showIcon:ne=!0})=>{var J;const K=c==="BARN";return k.jsx(yt,{value:Zv,children:k.jsx(kt,{background:"bg-subtle",padding:"4",borderRadius:"large","aria-label":x,children:k.jsxs(Xi,{gap:"1",children:[k.jsxs(Hi,{gap:"5",children:[ne&&k.jsx("div",{children:k.jsx(qv,{gender:Xv(T),isChild:K})}),k.jsxs("div",{children:[k.jsxs(Hi,{gap:"4",children:[k.jsx(Yu,{children:k.jsx(Be,{id:"PersonPanel.RolleOgNavn",values:{rolle:c,navn:x}})}),K&&B&&!H&&k.jsx($i,{children:k.jsx(Be,{id:"PersonPanel.Fodt",values:{dato:Nu(B)}})}),H&&k.jsx($i,{children:k.jsx(Be,{id:"PersonPanel.Dod",values:{dato:Nu(H)}})})]}),!K&&E&&k.jsx(Yi,{"aria-label":"Sivilstand",children:(J=b[ht.SIVILSTAND_TYPE].find(Ue=>Ue.kode===E))==null?void 0:J.navn})]})]}),k.jsxs(Yi,{children:[c==="BARN"&&k.jsx(Be,{id:"PersonPanel.Beskrivelse.Barn",values:{rolle:c}}),c==="BRUKER"&&k.jsx(Be,{id:"PersonPanel.Beskrivelse.Bruker",values:{rolle:c}}),c==="ANNEN_PART"&&k.jsx(Be,{id:"PersonPanel.Beskrivelse.Annenpart",values:{rolle:c}})]}),k.jsx(Qu,{harSammeAdresser:u,adresser:M,adresseKodeverk:b[ht.ADRESSE_TYPE]})]})})})};mt.__docgenInfo={description:"",methods:[],displayName:"Personopplysninger",props:{rolle:{required:!1,tsType:{name:"union",raw:"'BARN' | 'BRUKER' | 'ANNEN_PART'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'BRUKER'"},{name:"literal",value:"'ANNEN_PART'"}]},description:"",defaultValue:{value:"'BRUKER'",computed:!1}},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Personadresse[]"},description:""},kjønn:{required:!1,tsType:{name:"string"},description:""},showIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const Jv=({personoversikt:{barn:c,bruker:b,annenPart:u},alleKodeverk:x})=>k.jsxs(Xi,{gap:"2",children:[c.map(T=>k.jsx(mt,{...T,alleKodeverk:x,rolle:"BARN"},T.aktoerId)),k.jsx(mt,{rolle:"BRUKER",alleKodeverk:x,...b}),u&&k.jsx(mt,{...u,rolle:"ANNEN_PART",alleKodeverk:x})]});Jv.__docgenInfo={description:"",methods:[],displayName:"PersonopplysningerForFamilie",props:{alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Qv="default",eh=(c,b,u,x,T,E)=>{const[B,H]=pn.useState(!1);pn.useEffect(()=>{c({id:b})},[]);const M=x&&(E===b||T&&E===Qv),ne=lv(x);return pn.useEffect(()=>{x?c({id:b,tekst:u,erAktiv:M,harApneAksjonspunkter:T}):!x&&ne&&c({id:b}),H(M)},[ne,x,M,T]),x&&B},el=({standardPanelProps:c,valgtFaktaSteg:b,registrerFaktaPanel:u,skalPanelVisesIMeny:x,faktaPanelKode:T,faktaPanelMenyTekst:E,children:B})=>{const{behandling:H,fagsak:M,alleKodeverk:ne}=pn.use(ea),K=eh(u,T,E,x,c.harApneAksjonspunkter,b);return k.jsx(nv,{behandling:H,children:K?k.jsx(rv,{behandling:H,fagsak:M,alleKodeverk:ne,aksjonspunkterForPanel:c.aksjonspunkter,harÅpneAksjonspunkter:c.harApneAksjonspunkter,submitCallback:c.submitCallback,isReadOnly:c.readOnly,alleMerknaderFraBeslutter:c.alleMerknaderFraBeslutter,children:B}):null})};el.__docgenInfo={description:"",methods:[],displayName:"FaktaDefaultInitPanel",props:{standardPanelProps:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApneAksjonspunkter",value:{name:"boolean",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const Gu="default",Hu="default",nh=(c,b,u,x,T,E)=>B=>{const M=(Array.isArray(B)?B:[B]).map(K=>({"@type":K.kode,...K})),ne={saksnummer:c.saksnummer,behandlingUuid:b.uuid,behandlingVersjon:b.versjon};if(M&&T&&E){if(M.length===0)throw Error("Det har oppstått en teknisk feil ved lagring av aksjonspunkter. Meld feilen i Porten.");if(E.includes(M[0].kode))return T({...ne,overstyrteAksjonspunktDtoer:M}).then(()=>u(Hu,Gu))}return x({...ne,bekreftedeAksjonspunktDtoer:M}).then(()=>u(Hu,Gu))},rh=(c,b=[])=>{const{behandling:u,rettigheter:x,fagsak:T,lagreAksjonspunkter:E,lagreOverstyrteAksjonspunkter:B,oppdaterProsessStegOgFaktaPanelIUrl:H,alleKodeverk:M}=pn.use(ea),{aksjonspunkt:ne}=u,K=ne&&c?ne.filter(te=>c.includes(te.definisjon)):[],J=Bv(u,[],x,!1),Ue=Sv(u,K),Me=nh(T,u,H,E,B,b);return{behandling:u,submittable:!K.some(te=>Du(te.status))||K.some(te=>te.kanLoses),harApneAksjonspunkter:K.some(te=>Du(te.status)&&te.kanLoses),alleKodeverk:M,aksjonspunkter:K,readOnly:J,alleMerknaderFraBeslutter:Ue,submitCallback:Me}},th="_selectWidth_1ur6m_1",ih="_leftCol_1ur6m_5",$u={selectWidth:th,leftCol:ih},Gn=({readOnly:c,vergetyper:b=[],alleMerknaderFraBeslutter:u,valgtVergeType:x})=>{const T=Ji();return k.jsxs(ov,{merknaderFraBeslutter:u[Qi.AVKLAR_VERGE],children:[k.jsx(_v,{name:"vergeType",className:$u.selectWidth,label:T.formatMessage({id:"Verge.TypeVerge"}),validate:[Tn],selectValues:b.map(E=>k.jsx("option",{value:E.kode,children:E.navn},E.kode)),readOnly:c}),k.jsx(fv,{children:x&&k.jsxs(k.Fragment,{children:[k.jsx(vt,{sixteenPx:!0}),k.jsxs(Lu,{children:[k.jsx(ct,{className:$u.leftCol,children:k.jsx(Vi,{name:"navn",label:T.formatMessage({id:"Verge.Navn"}),validate:[Tn,bv],readOnly:c})}),k.jsxs(ct,{children:[x!==Zi.ADVOKAT&&k.jsx(Vi,{name:"fnr",label:T.formatMessage({id:"Verge.FodselsNummer"}),validate:[Tn,wv],readOnly:c}),x===Zi.ADVOKAT&&k.jsx(Vi,{name:"organisasjonsnummer",label:T.formatMessage({id:"Verge.Organisasjonsnummer"}),validate:[Tn],readOnly:c})]})]}),k.jsx(vt,{sixteenPx:!0}),k.jsxs(Lu,{children:[k.jsx(ct,{children:k.jsx(Ou,{name:"gyldigFom",label:T.formatMessage({id:"Verge.PeriodeFOM"}),validate:[Tn,Mu],isReadOnly:c})}),k.jsx(ct,{children:k.jsx(Ou,{name:"gyldigTom",label:T.formatMessage({id:"Verge.PeriodeTOM"}),validate:[Mu],isReadOnly:c})})]})]})})]})};Gn.buildInitialValues=c=>({navn:c.navn,gyldigFom:c.gyldigFom,gyldigTom:c.gyldigTom,fnr:c.fnr,organisasjonsnummer:c.organisasjonsnummer,vergeType:c.vergeType||void 0});Gn.transformValues=c=>({vergeType:c.vergeType,navn:c.navn,fnr:c.fnr,organisasjonsnummer:c.organisasjonsnummer,gyldigFom:c.gyldigFom,gyldigTom:c.gyldigTom,kode:Qi.AVKLAR_VERGE});Gn.__docgenInfo={description:`RegistrereVergeFaktaForm

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
}`,signature:{properties:[{key:"vergeType",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fnr",value:{name:"string",required:!0}},{key:"organisasjonsnummer",value:{name:"string",required:!0}},{key:"gyldigFom",value:{name:"string",required:!0}},{key:"gyldigTom",value:{name:"string",required:!1}},{key:"kode",value:{name:"AksjonspunktKode.AVKLAR_VERGE",required:!0}}]}}}}],displayName:"RegistrereVergeFaktaForm",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},vergetyper:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:"",defaultValue:{value:"[]",computed:!1}},alleMerknaderFraBeslutter:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""},valgtVergeType:{required:!1,tsType:{name:"string"},description:""}}};const ah=(c,b)=>({...Wn.initialValues(b),...Gn.buildInitialValues(c||{})}),sh=c=>({...Gn.transformValues(c),...Wn.transformValues(c)}),nl=({submittable:c,verge:b,alleKodeverk:u})=>{const x=Ji(),{aksjonspunkterForPanel:T,submitCallback:E,alleMerknaderFraBeslutter:B,harÅpneAksjonspunkter:H,isReadOnly:M}=tv(),{formData:ne,setFormData:K}=iv(),J=Av({defaultValues:ne||ah(b,T),shouldUnregister:!0}),Ue=J.watch("vergeType"),Me=J.watch("begrunnelse"),te=pn.useMemo(()=>u[ht.VERGE_TYPE].sort((tn,me)=>tn.navn.localeCompare(me.navn)),[u[ht.VERGE_TYPE]]);return k.jsxs(k.Fragment,{children:[H&&k.jsx(dv,{children:x.formatMessage({id:"RegistrereVergeInfoPanel.CheckInformation"})}),k.jsxs(Tv,{formMethods:J,onSubmit:tn=>E(sh(tn)),setDataOnUnmount:K,children:[k.jsx(Gn,{readOnly:M||T.length===0,vergetyper:te,valgtVergeType:Ue,alleMerknaderFraBeslutter:B}),T.length!==0&&k.jsxs(k.Fragment,{children:[k.jsx(vt,{twentyPx:!0}),k.jsx(Wn,{isSubmittable:c,isReadOnly:M,hasBegrunnelse:!!Me}),k.jsx(vt,{twentyPx:!0}),k.jsx(zu,{isSubmittable:c&&!!Ue,isReadOnly:M,isSubmitting:J.formState.isSubmitting,isDirty:J.formState.isDirty})]})]})]})};nl.__docgenInfo={description:`RegistrereVergeInfoPanel

Presentasjonskomponent. Har ansvar for å sette opp formen for att registrere verge.`,methods:[],displayName:"RegistrereVergeInfoPanel",props:{alleKodeverk:{required:!0,tsType:{name:"union",raw:"AlleKodeverk | AlleKodeverkTilbakekreving",elements:[{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!1}},{key:"fnr",value:{name:"string",required:!1}},{key:"gyldigFom",value:{name:"string",required:!1}},{key:"gyldigTom",value:{name:"string",required:!1}},{key:"vergeType",value:{name:"string",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}}]}},description:""},submittable:{required:!0,tsType:{name:"boolean"},description:""}}};const uh={"RegistrereVergeInfoPanel.CheckInformation":"Fyll ut og kontroller vergeopplysninger","Verge.KontaktPerson":"Kontaktperson","Verge.Navn":"Navn","Verge.Mandat":"Mandat","Verge.FodselsNummer":"Fødselsnummer","Verge.PeriodeFOM":"Periode f.o.m.","Verge.PeriodeTOM":"Periode t.o.m.","Verge.TypeVerge":"Type verge","Verge.VergeFullmektig":"Verge/fullmektig","Verge.Soker":"Søker","Verge.BrukerErUnderTvungenForvaltning":"Søker er under tvungen forvaltning","Verge.Organisasjonsnummer":"Organisasjonsnummer"},lh=Un(uh),rl=({verge:c={},alleKodeverk:b,submittable:u})=>k.jsx(yt,{value:lh,children:k.jsx(nl,{verge:c,alleKodeverk:b,submittable:u})});rl.__docgenInfo={description:"",methods:[],displayName:"VergeFaktaIndex",props:{verge:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<TilbakekrevingKodeverkType, KodeverkMedNavn[]>"}]},description:""},submittable:{required:!0,tsType:{name:"boolean"},description:""}}};const oh=[Qi.AVKLAR_VERGE],fh=({valgtFaktaSteg:c,registrerFaktaPanel:b})=>{const u=Ji(),x=rh(oh),{behandling:T}=pn.use(ea),E=Pv(T),B=Ev(T,"VERGE"),{data:H,isFetching:M}=cv(E.vergeOptions(T,B));return k.jsx(el,{standardPanelProps:x,valgtFaktaSteg:c,registrerFaktaPanel:b,faktaPanelKode:xv.VERGE,faktaPanelMenyTekst:u.formatMessage({id:"FaktaInitPanel.Title.Verge"}),skalPanelVisesIMeny:B,children:M?k.jsx(gv,{}):k.jsx(rl,{verge:H,alleKodeverk:x.alleKodeverk,submittable:x.submittable})})};fh.__docgenInfo={description:"",methods:[],displayName:"VergeFaktaInitPanel",props:{valgtFaktaSteg:{required:!1,tsType:{name:"string"},description:""},registrerFaktaPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: FaktaPanelMenyData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApneAksjonspunkter?: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApneAksjonspunkter",value:{name:"boolean",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};export{zv as B,el as F,Jv as P,Ov as T,fh as V,zu as a,Wn as b,Uv as c,Vv as d,mt as e,Kv as f,Bh as g,Sh as h,Xu as i,Wv as j,Zu as s,rh as u};
