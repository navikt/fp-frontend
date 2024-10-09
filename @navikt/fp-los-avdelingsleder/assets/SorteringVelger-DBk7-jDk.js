import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{d as we,h as ie,y as _,O as fe,n as T,M as R,H as he,D as O,l as de,q as le,w as Se,A as ke,k as Me}from"./nb_NO-DMoS2wUy.js";import{Y as H}from"./index.es-Cl_yxThX.js";import{u as Ve}from"./useLosKodeverk-Bf_J3o3R.js";import{b as A,a as Z}from"./fplosRestApi-1yojVYCb.js";import{d as oe}from"./dayjs.min-BsYQKNhR.js";import{c as _e,g as Re}from"./index-uubelm5h.js";import{P as z,b as ce}from"./index.es-Cwy2rzNu.js";import{u as U}from"./useDebounce--il48Cku.js";var ye={exports:{}};(function(i,a){(function(c,g){i.exports=g()})(_e,function(){var c={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},g=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,d=/\d/,l=/\d\d/,s=/\d\d?/,p=/\d*[^-_:/,()\s\d]+/,u={},f=function(r){return(r=+r)+(r>68?1900:2e3)},t=function(r){return function(n){this[r]=+n}},b=[/[+-]\d\d:?(\d\d)?|Z/,function(r){(this.zone||(this.zone={})).offset=function(n){if(!n||n==="Z")return 0;var o=n.match(/([+-]|\d\d)/g),m=60*o[1]+(+o[2]||0);return m===0?0:o[0]==="+"?-m:m}(r)}],L=function(r){var n=u[r];return n&&(n.indexOf?n:n.s.concat(n.f))},S=function(r,n){var o,m=u.meridiem;if(m){for(var h=1;h<=24;h+=1)if(r.indexOf(m(h,0,n))>-1){o=h>12;break}}else o=r===(n?"pm":"PM");return o},W={A:[p,function(r){this.afternoon=S(r,!1)}],a:[p,function(r){this.afternoon=S(r,!0)}],Q:[d,function(r){this.month=3*(r-1)+1}],S:[d,function(r){this.milliseconds=100*+r}],SS:[l,function(r){this.milliseconds=10*+r}],SSS:[/\d{3}/,function(r){this.milliseconds=+r}],s:[s,t("seconds")],ss:[s,t("seconds")],m:[s,t("minutes")],mm:[s,t("minutes")],H:[s,t("hours")],h:[s,t("hours")],HH:[s,t("hours")],hh:[s,t("hours")],D:[s,t("day")],DD:[l,t("day")],Do:[p,function(r){var n=u.ordinal,o=r.match(/\d+/);if(this.day=o[0],n)for(var m=1;m<=31;m+=1)n(m).replace(/\[|\]/g,"")===r&&(this.day=m)}],w:[s,t("week")],ww:[l,t("week")],M:[s,t("month")],MM:[l,t("month")],MMM:[p,function(r){var n=L("months"),o=(L("monthsShort")||n.map(function(m){return m.slice(0,3)})).indexOf(r)+1;if(o<1)throw new Error;this.month=o%12||o}],MMMM:[p,function(r){var n=L("months").indexOf(r)+1;if(n<1)throw new Error;this.month=n%12||n}],Y:[/[+-]?\d+/,t("year")],YY:[l,function(r){this.year=f(r)}],YYYY:[/\d{4}/,t("year")],Z:b,ZZ:b};function Q(r){var n,o;n=r,o=u&&u.formats;for(var m=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(q,k,D){var x=D&&D.toUpperCase();return k||o[D]||c[D]||o[x].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(M,V,Y){return V||Y.slice(1)})})).match(g),h=m.length,j=0;j<h;j+=1){var F=m[j],I=W[F],v=I&&I[0],E=I&&I[1];m[j]=E?{regex:v,parser:E}:F.replace(/^\[|\]$/g,"")}return function(q){for(var k={},D=0,x=0;D<h;D+=1){var M=m[D];if(typeof M=="string")x+=M.length;else{var V=M.regex,Y=M.parser,B=q.slice(x),N=V.exec(B)[0];Y.call(k,N),q=q.replace(N,"")}}return function(P){var K=P.afternoon;if(K!==void 0){var y=P.hours;K?y<12&&(P.hours+=12):y===12&&(P.hours=0),delete P.afternoon}}(k),k}}return function(r,n,o){o.p.customParseFormat=!0,r&&r.parseTwoDigitYear&&(f=r.parseTwoDigitYear);var m=n.prototype,h=m.parse;m.parse=function(j){var F=j.date,I=j.utc,v=j.args;this.$u=I;var E=v[1];if(typeof E=="string"){var q=v[2]===!0,k=v[3]===!0,D=q||k,x=v[2];k&&(x=v[2]),u=this.$locale(),!q&&x&&(u=o.Ls[x]),this.$d=function(B,N,P,K){try{if(["x","X"].indexOf(N)>-1)return new Date((N==="X"?1e3:1)*B);var y=Q(N)(B),X=y.year,G=y.month,be=y.day,je=y.hours,ve=y.minutes,Ee=y.seconds,Te=y.milliseconds,ue=y.zone,me=y.week,J=new Date,ee=be||(X||G?1:J.getDate()),re=X||J.getFullYear(),$=0;X&&!G||($=G>0?G-1:J.getMonth());var C,te=je||0,ne=ve||0,ae=Ee||0,se=Te||0;return ue?new Date(Date.UTC(re,$,ee,te,ne,ae,se+60*ue.offset*1e3)):P?new Date(Date.UTC(re,$,ee,te,ne,ae,se)):(C=new Date(re,$,ee,te,ne,ae,se),me&&(C=K(C).week(me).toDate()),C)}catch{return new Date("")}}(F,E,I,o),this.init(),x&&x!==!0&&(this.$L=this.locale(x).$L),D&&F!=this.format(E)&&(this.$d=new Date("")),u={}}else if(E instanceof Array)for(var M=E.length,V=1;V<=M;V+=1){v[1]=E[V-1];var Y=o.apply(this,v);if(Y.isValid()){this.$d=Y.$d,this.$L=Y.$L,this.init();break}V===M&&(this.$d=new Date(""))}else h.call(this,j)}}})})(ye);var Le=ye.exports;const Ie=Re(Le),qe="_dager_17wvv_1",Ye="_dagerMedBindestrek_17wvv_5",Pe="_tomDato_17wvv_15",Ne="_dato_17wvv_19",Fe="_arrowBoxWidth_17wvv_24",w={dager:qe,dagerMedBindestrek:Ye,beløp:"_beløp_17wvv_10",tomDato:Pe,dato:Ne,arrowBoxWidth:Fe};oe.extend(Ie);const ge=i=>oe().add(i,"d").format(),pe=(i,a,c,g,d,l,s)=>p=>{let u;if(p&&(u=oe(p)),!u||u.isValid()){const f=u&&u.format(ke);return i(l?{sakslisteId:g,avdelingEnhet:d,fomDato:f,tomDato:s}:{sakslisteId:g,avdelingEnhet:d,fomDato:s,tomDato:f}).then(()=>{a(g,d),c({avdelingEnhet:d})})}},xe=({valgtSakslisteId:i,valgtAvdelingEnhet:a,erDynamiskPeriode:c,lagreSakslisteSorteringTidsintervallDager:g,hentAvdelingensSakslister:d,hentAntallOppgaver:l})=>{const s=we(),{startRequest:p}=A.useRestApiRunner(Z.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE),{startRequest:u}=A.useRestApiRunner(Z.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO),{watch:f}=ie(),t=f("fra"),b=f("til"),L=f("fomDato"),S=f("tomDato"),W=h=>g({sakslisteId:i,fra:h,til:b,avdelingEnhet:a}).then(()=>{l(i,a),d({avdelingEnhet:a})}),Q=h=>g({sakslisteId:i,fra:t,til:h,avdelingEnhet:a}).then(()=>{l(i,a),d({avdelingEnhet:a})}),r=pe(u,l,d,i,a,!0,S),n=pe(u,l,d,i,a,!1,L),o=U("fomDato",r),m=U("tomDato",n);return e.jsxs(e.Fragment,{children:[e.jsx(_,{eightPx:!0}),e.jsx("div",{className:w.arrowBoxWidth,children:e.jsxs(fe,{children:[e.jsx(T,{children:e.jsx(R,{id:"SorteringVelger.FiltrerPaTidsintervall"})}),c&&e.jsxs(he,{gap:"4",children:[e.jsxs("div",{children:[e.jsx(O,{name:"fra",className:w.dato,label:s.formatMessage({id:"SorteringVelger.Fom"}),validate:[z],onBlur:W}),(t||t===0)&&e.jsx(T,{children:e.jsx(de,{dateString:ge(t)})})]}),e.jsx(T,{className:w.dager,children:e.jsx(R,{id:"SorteringVelger.DagerMedBindestrek"})}),e.jsxs("div",{children:[e.jsx(O,{name:"til",className:w.dato,label:s.formatMessage({id:"SorteringVelger.Tom"}),validate:[z],onBlur:Q}),(b||b===0)&&e.jsx(T,{children:e.jsx(de,{dateString:ge(b)})})]}),e.jsx(T,{className:w.dagerMedBindestrek,children:e.jsx(R,{id:"SorteringVelger.Dager"})})]}),!c&&e.jsxs(e.Fragment,{children:[e.jsx(_,{sixteenPx:!0}),e.jsx(le,{name:"fomDato",label:s.formatMessage({id:"SorteringVelger.Fom"}),validate:[ce],onChange:o}),e.jsx(_,{fourPx:!0}),e.jsx(T,{children:e.jsx(R,{id:"SorteringVelger.Bindestrek"})}),e.jsx(_,{fourPx:!0}),e.jsx(le,{name:"tomDato",label:s.formatMessage({id:"SorteringVelger.Tom"}),validate:[ce],onChange:m}),e.jsx(_,{eightPx:!0})]}),e.jsx(_,{eightPx:!0}),e.jsx(Se,{name:"erDynamiskPeriode",label:s.formatMessage({id:"SorteringVelger.DynamiskPeriode"}),onChange:()=>p({sakslisteId:i,avdelingEnhet:a}).then(()=>{l(i,a),d({avdelingEnhet:a})})}),e.jsx(_,{eightPx:!0})]})})]})};xe.__docgenInfo={description:"",methods:[],displayName:"DatoSorteringValg",props:{valgtSakslisteId:{required:!0,tsType:{name:"number"},description:""},lagreSakslisteSorteringTidsintervallDager:{required:!0,tsType:{name:"signature",type:"function",raw:`(params: {
  sakslisteId: number;
  fra: number;
  til: number;
  avdelingEnhet: string;
}) => Promise<any>`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  sakslisteId: number;
  fra: number;
  til: number;
  avdelingEnhet: string;
}`,signature:{properties:[{key:"sakslisteId",value:{name:"number",required:!0}},{key:"fra",value:{name:"number",required:!0}},{key:"til",value:{name:"number",required:!0}},{key:"avdelingEnhet",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""},erDynamiskPeriode:{required:!0,tsType:{name:"boolean"},description:""},hentAvdelingensSakslister:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { avdelingEnhet: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ avdelingEnhet: string }",signature:{properties:[{key:"avdelingEnhet",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},hentAntallOppgaver:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId: number, avdelingEnhet: string) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"},{type:{name:"string"},name:"avdelingEnhet"}],return:{name:"void"}}},description:""}}};const De=({valgtSakslisteId:i,valgtAvdelingEnhet:a,lagreSakslisteSorteringNumerisk:c,hentAvdelingensSakslister:g,hentAntallOppgaver:d})=>{const{watch:l,trigger:s}=ie(),p=l("fra"),u=l("til"),f=S=>c({sakslisteId:i,fra:S,til:u,avdelingEnhet:a}).then(()=>{d(i,a),g({avdelingEnhet:a})}),t=S=>c({sakslisteId:i,fra:p,til:S,avdelingEnhet:a}).then(()=>{d(i,a),g({avdelingEnhet:a})}),b=U("fra",f,s),L=U("til",t,s);return e.jsxs(fe,{children:[e.jsx(T,{children:e.jsx(R,{id:"SorteringVelger.FiltrerPaHeltall"})}),e.jsxs(he,{gap:"4",children:[e.jsx(O,{name:"fra",className:w.dato,validate:[z],onChange:b}),e.jsx(T,{className:w.beløp,children:e.jsx(R,{id:"SorteringVelger.Valuta"})}),e.jsx(O,{name:"til",className:w.dato,validate:[z],onChange:L}),e.jsx(T,{className:w.beløp,children:e.jsx(R,{id:"SorteringVelger.Valuta"})})]}),e.jsx(_,{eightPx:!0})]})};De.__docgenInfo={description:"",methods:[],displayName:"BelopSorteringValg",props:{valgtSakslisteId:{required:!0,tsType:{name:"number"},description:""},lagreSakslisteSorteringNumerisk:{required:!0,tsType:{name:"signature",type:"function",raw:`(params: {
  sakslisteId: number;
  fra: number;
  til: number;
  avdelingEnhet: string;
}) => Promise<any>`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  sakslisteId: number;
  fra: number;
  til: number;
  avdelingEnhet: string;
}`,signature:{properties:[{key:"sakslisteId",value:{name:"number",required:!0}},{key:"fra",value:{name:"number",required:!0}},{key:"til",value:{name:"number",required:!0}},{key:"avdelingEnhet",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""},hentAvdelingensSakslister:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { avdelingEnhet: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ avdelingEnhet: string }",signature:{properties:[{key:"avdelingEnhet",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},hentAntallOppgaver:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId: number, avdelingEnhet: string) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"},{type:{name:"string"},name:"avdelingEnhet"}],return:{name:"void"}}},description:""}}};const Be=i=>i&&i.some(a=>a===H.TILBAKEKREVING||a===H.TILBAKEKREVING_REVURDERING)&&!i.some(a=>a!==H.TILBAKEKREVING&&a!==H.TILBAKEKREVING_REVURDERING),Ke=({valgtSakslisteId:i,valgteBehandlingtyper:a,valgtAvdelingEnhet:c,erDynamiskPeriode:g,hentAvdelingensSakslister:d,hentAntallOppgaver:l})=>{const{resetField:s}=ie(),{startRequest:p}=A.useRestApiRunner(Z.LAGRE_SAKSLISTE_SORTERING),{startRequest:u}=A.useRestApiRunner(Z.LAGRE_SAKSLISTE_SORTERING_INTERVALL),f=Ve("KøSortering");return e.jsx(Me,{name:"sortering",label:e.jsx(R,{id:"SorteringVelger.Sortering"}),onChange:t=>(s("fra",{defaultValue:""}),s("til",{defaultValue:""}),s("fomDato",{defaultValue:""}),s("tomDato",{defaultValue:""}),s("erDynamiskPeriode",{defaultValue:""}),p({sakslisteId:i,sakslisteSorteringValg:t,avdelingEnhet:c}).then(()=>{l(i,c),d({avdelingEnhet:c})})),radios:f.filter(t=>t.feltkategori!=="TILBAKEKREVING"||Be(a)).map(t=>({value:t.kode,label:t.navn,element:e.jsxs(e.Fragment,{children:[t.felttype==="DATO"&&e.jsx(xe,{valgtSakslisteId:i,lagreSakslisteSorteringTidsintervallDager:u,valgtAvdelingEnhet:c,erDynamiskPeriode:g,hentAvdelingensSakslister:d,hentAntallOppgaver:l}),t.felttype==="HELTALL"&&e.jsx(De,{valgtSakslisteId:i,lagreSakslisteSorteringNumerisk:u,valgtAvdelingEnhet:c,hentAvdelingensSakslister:d,hentAntallOppgaver:l})]})}))})};Ke.__docgenInfo={description:"SorteringVelger",methods:[],displayName:"SorteringVelger",props:{valgtSakslisteId:{required:!0,tsType:{name:"number"},description:""},valgteBehandlingtyper:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""},erDynamiskPeriode:{required:!0,tsType:{name:"boolean"},description:""},hentAvdelingensSakslister:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { avdelingEnhet: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ avdelingEnhet: string }",signature:{properties:[{key:"avdelingEnhet",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},hentAntallOppgaver:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId: number, avdelingEnhet: string) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"},{type:{name:"string"},name:"avdelingEnhet"}],return:{name:"void"}}},description:""}}};export{Ke as S};
