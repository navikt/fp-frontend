import{j as r}from"./jsx-runtime-5926aa06.js";import{f as J,d as fe,b as Re,J as H,Y as Ve,a as Y,E as oe,o as le,A as T,T as W,V as he,l as pe,C as ke,N as Ne,w as Ye}from"./nb_NO-34c6c3ba.js";import{Y as z}from"./index.es-657e045f.js";import{u as we}from"./useLosKodeverk-46a11add.js";import{b as Z,a as U}from"./fplosRestApi-56e2d09a.js";import{c as $,g as _e,r as xe}from"./index-ebeaab24.js";import{P as X,b as De}from"./index.es-7d65aa9f.js";import{D as I}from"./Detail-86c2a14d.js";var ve={exports:{}};(function(e,t){(function(u,h){e.exports=h()})($,function(){var u={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},h=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,c=/\d\d/,a=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,l={},g=function(n){return(n=+n)+(n>68?1900:2e3)},s=function(n){return function(i){this[n]=+i}},p=[/[+-]\d\d:?(\d\d)?|Z/,function(n){(this.zone||(this.zone={})).offset=function(i){if(!i||i==="Z")return 0;var m=i.match(/([+-]|\d\d)/g),f=60*m[1]+(+m[2]||0);return f===0?0:m[0]==="+"?-f:f}(n)}],D=function(n){var i=l[n];return i&&(i.indexOf?i:i.s.concat(i.f))},S=function(n,i){var m,f=l.meridiem;if(f){for(var j=1;j<=24;j+=1)if(n.indexOf(f(j,0,i))>-1){m=j>12;break}}else m=n===(i?"pm":"PM");return m},w={A:[o,function(n){this.afternoon=S(n,!1)}],a:[o,function(n){this.afternoon=S(n,!0)}],S:[/\d/,function(n){this.milliseconds=100*+n}],SS:[c,function(n){this.milliseconds=10*+n}],SSS:[/\d{3}/,function(n){this.milliseconds=+n}],s:[a,s("seconds")],ss:[a,s("seconds")],m:[a,s("minutes")],mm:[a,s("minutes")],H:[a,s("hours")],h:[a,s("hours")],HH:[a,s("hours")],hh:[a,s("hours")],D:[a,s("day")],DD:[c,s("day")],Do:[o,function(n){var i=l.ordinal,m=n.match(/\d+/);if(this.day=m[0],i)for(var f=1;f<=31;f+=1)i(f).replace(/\[|\]/g,"")===n&&(this.day=f)}],M:[a,s("month")],MM:[c,s("month")],MMM:[o,function(n){var i=D("months"),m=(D("monthsShort")||i.map(function(f){return f.slice(0,3)})).indexOf(n)+1;if(m<1)throw new Error;this.month=m%12||m}],MMMM:[o,function(n){var i=D("months").indexOf(n)+1;if(i<1)throw new Error;this.month=i%12||i}],Y:[/[+-]?\d+/,s("year")],YY:[c,function(n){this.year=g(n)}],YYYY:[/\d{4}/,s("year")],Z:p,ZZ:p};function C(n){var i,m;i=n,m=l&&l.formats;for(var f=(n=i.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(M,R,L){var _=L&&L.toUpperCase();return R||m[L]||u[L]||m[_].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(k,N,P){return N||P.slice(1)})})).match(h),j=f.length,b=0;b<j;b+=1){var V=f[b],d=w[V],x=d&&d[0],y=d&&d[1];f[b]=y?{regex:x,parser:y}:V.replace(/^\[|\]$/g,"")}return function(M){for(var R={},L=0,_=0;L<j;L+=1){var k=f[L];if(typeof k=="string")_+=k.length;else{var N=k.regex,P=k.parser,A=M.slice(_),q=N.exec(A)[0];P.call(R,q),M=M.replace(q,"")}}return function(F){var v=F.afternoon;if(v!==void 0){var B=F.hours;v?B<12&&(F.hours+=12):B===12&&(F.hours=0),delete F.afternoon}}(R),R}}return function(n,i,m){m.p.customParseFormat=!0,n&&n.parseTwoDigitYear&&(g=n.parseTwoDigitYear);var f=i.prototype,j=f.parse;f.parse=function(b){var V=b.date,d=b.utc,x=b.args;this.$u=d;var y=x[1];if(typeof y=="string"){var M=x[2]===!0,R=x[3]===!0,L=M||R,_=x[2];R&&(_=x[2]),l=this.$locale(),!M&&_&&(l=m.Ls[_]),this.$d=function(A,q,F){try{if(["x","X"].indexOf(q)>-1)return new Date((q==="X"?1e3:1)*A);var v=C(q)(A),B=v.year,K=v.month,Te=v.day,Ee=v.hours,Me=v.minutes,Le=v.seconds,Ie=v.milliseconds,ge=v.zone,Q=new Date,ee=Te||(B||K?1:Q.getDate()),re=B||Q.getFullYear(),G=0;B&&!K||(G=K>0?K-1:Q.getMonth());var te=Ee||0,ne=Me||0,ae=Le||0,ie=Ie||0;return ge?new Date(Date.UTC(re,G,ee,te,ne,ae,ie+60*ge.offset*1e3)):F?new Date(Date.UTC(re,G,ee,te,ne,ae,ie)):new Date(re,G,ee,te,ne,ae,ie)}catch{return new Date("")}}(V,y,d),this.init(),_&&_!==!0&&(this.$L=this.locale(_).$L),L&&V!=this.format(y)&&(this.$d=new Date("")),l={}}else if(y instanceof Array)for(var k=y.length,N=1;N<=k;N+=1){x[1]=y[N-1];var P=m.apply(this,x);if(P.isValid()){this.$d=P.$d,this.$L=P.$L,this.init();break}N===k&&(this.$d=new Date(""))}else j.call(this,b)}}})})(ve);var Pe=ve.exports;const Fe=_e(Pe);var qe="Expected a function",ye=0/0,Be="[object Symbol]",Oe=/^\s+|\s+$/g,Ce=/^[-+]0x[0-9a-f]+$/i,$e=/^0b[01]+$/i,Ae=/^0o[0-7]+$/i,Ke=parseInt,Ge=typeof $=="object"&&$&&$.Object===Object&&$,ze=typeof self=="object"&&self&&self.Object===Object&&self,He=Ge||ze||Function("return this")(),We=Object.prototype,Ze=We.toString,Ue=Math.max,Xe=Math.min,se=function(){return He.Date.now()};function Je(e,t,u){var h,c,a,o,l,g,s=0,p=!1,D=!1,S=!0;if(typeof e!="function")throw new TypeError(qe);t=je(t)||0,de(u)&&(p=!!u.leading,D="maxWait"in u,a=D?Ue(je(u.maxWait)||0,t):a,S="trailing"in u?!!u.trailing:S);function w(d){var x=h,y=c;return h=c=void 0,s=d,o=e.apply(y,x),o}function C(d){return s=d,l=setTimeout(m,t),p?w(d):o}function n(d){var x=d-g,y=d-s,M=t-x;return D?Xe(M,a-y):M}function i(d){var x=d-g,y=d-s;return g===void 0||x>=t||x<0||D&&y>=a}function m(){var d=se();if(i(d))return f(d);l=setTimeout(m,n(d))}function f(d){return l=void 0,S&&h?w(d):(h=c=void 0,o)}function j(){l!==void 0&&clearTimeout(l),s=0,h=g=c=l=void 0}function b(){return l===void 0?o:f(se())}function V(){var d=se(),x=i(d);if(h=arguments,c=this,g=d,x){if(l===void 0)return C(g);if(D)return l=setTimeout(m,t),w(g)}return l===void 0&&(l=setTimeout(m,t)),o}return V.cancel=j,V.flush=b,V}function de(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function Qe(e){return!!e&&typeof e=="object"}function er(e){return typeof e=="symbol"||Qe(e)&&Ze.call(e)==Be}function je(e){if(typeof e=="number")return e;if(er(e))return ye;if(de(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=de(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(Oe,"");var u=$e.test(e);return u||Ae.test(e)?Ke(e.slice(2),u?2:8):Ce.test(e)?ye:+e}var rr=Je;const tr=_e(rr),nr=()=>1e3,O=(e,t,u)=>{const h=J(),c=u||h.trigger,a=xe.useCallback(tr(o=>{c(e).then(l=>l&&t(o))},nr()),[t]);return xe.useEffect(()=>()=>a.cancel(),[]),a},ar="_dager_17wvv_1",ir="_dagerMedBindestrek_17wvv_5",sr="_beløp_17wvv_10",or="_tomDato_17wvv_15",lr="_dato_17wvv_19",dr="_arrowBoxWidth_17wvv_24",E={dager:ar,dagerMedBindestrek:ir,beløp:"_beløp_17wvv_10",belop:sr,tomDato:or,dato:lr,arrowBoxWidth:dr};fe.extend(Fe);const be=e=>fe().add(e,"d").format(),Se=(e,t,u,h,c,a,o)=>l=>{let g;if(l&&(g=fe(l)),!g||g.isValid()){const s=g&&g.format(Ne);return e(a?{sakslisteId:h,avdelingEnhet:c,fomDato:s,tomDato:o}:{sakslisteId:h,avdelingEnhet:c,fomDato:o,tomDato:s}).then(()=>{t(h,c),u({avdelingEnhet:c})})}},ce=({valgtSakslisteId:e,valgtAvdelingEnhet:t,erDynamiskPeriode:u,lagreSakslisteSorteringTidsintervallDager:h,hentAvdelingensSakslister:c,hentAntallOppgaver:a})=>{const o=Re(),{startRequest:l}=Z.useRestApiRunner(U.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE),{startRequest:g}=Z.useRestApiRunner(U.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO),{watch:s}=J(),p=s("fra"),D=s("til"),S=s("fomDato"),w=s("tomDato"),C=d=>h({sakslisteId:e,fra:d,til:D,avdelingEnhet:t}).then(()=>{a(e,t),c({avdelingEnhet:t})}),n=d=>h({sakslisteId:e,fra:p,til:d,avdelingEnhet:t}).then(()=>{a(e,t),c({avdelingEnhet:t})}),i=Se(g,a,c,e,t,!0,w),m=Se(g,a,c,e,t,!1,S),f=O("fra",C),j=O("til",n),b=O("fomDato",i),V=O("tomDato",m);return r.jsxs(r.Fragment,{children:[r.jsx(H,{eightPx:!0}),r.jsx("div",{className:E.arrowBoxWidth,children:r.jsxs(Ve,{children:[r.jsx(I,{size:"small",children:r.jsx(Y,{id:"SorteringVelger.FiltrerPaTidsintervall"})}),u&&r.jsx(oe,{children:r.jsxs(le,{children:[r.jsxs(T,{children:[r.jsx(W,{name:"fra",className:E.dato,label:o.formatMessage({id:"SorteringVelger.Fom"}),validate:[X],onChange:f}),(p||p===0)&&r.jsx(I,{size:"small",children:r.jsx(he,{dateString:be(p)})})]}),r.jsx(T,{children:r.jsx(I,{size:"small",className:E.dager,children:r.jsx(Y,{id:"SorteringVelger.DagerMedBindestrek"})})}),r.jsxs(T,{children:[r.jsx(W,{name:"til",className:E.dato,label:o.formatMessage({id:"SorteringVelger.Tom"}),validate:[X],onChange:j}),(D||D===0)&&r.jsx(I,{size:"small",children:r.jsx(he,{dateString:be(D)})})]}),r.jsx(T,{children:r.jsx(I,{size:"small",className:E.dagerMedBindestrek,children:r.jsx(Y,{id:"SorteringVelger.Dager"})})})]})}),!u&&r.jsx(oe,{children:r.jsxs(le,{children:[r.jsx(T,{children:r.jsx(pe,{name:"fomDato",label:o.formatMessage({id:"SorteringVelger.Fom"}),validate:[De],onChange:b})}),r.jsx(T,{children:r.jsx(I,{size:"small",className:E.dager,children:r.jsx(Y,{id:"SorteringVelger.Bindestrek"})})}),r.jsx(T,{className:E.tomDato,children:r.jsx(pe,{name:"tomDato",label:o.formatMessage({id:"SorteringVelger.Tom"}),validate:[De],onChange:V})})]})}),r.jsx(H,{eightPx:!0}),r.jsx(ke,{name:"erDynamiskPeriode",label:o.formatMessage({id:"SorteringVelger.DynamiskPeriode"}),onChange:()=>l({sakslisteId:e,avdelingEnhet:t}).then(()=>{a(e,t),c({avdelingEnhet:t})})}),r.jsx(H,{eightPx:!0})]})})]})};try{ce.displayName="DatoSorteringValg",ce.__docgenInfo={description:"",displayName:"DatoSorteringValg",props:{valgtSakslisteId:{defaultValue:null,description:"",name:"valgtSakslisteId",required:!0,type:{name:"number"}},lagreSakslisteSorteringTidsintervallDager:{defaultValue:null,description:"",name:"lagreSakslisteSorteringTidsintervallDager",required:!0,type:{name:"(params: { sakslisteId: number; fra: number; til: number; avdelingEnhet: string; }) => Promise<any>"}},valgtAvdelingEnhet:{defaultValue:null,description:"",name:"valgtAvdelingEnhet",required:!0,type:{name:"string"}},erDynamiskPeriode:{defaultValue:null,description:"",name:"erDynamiskPeriode",required:!0,type:{name:"boolean"}},hentAvdelingensSakslister:{defaultValue:null,description:"",name:"hentAvdelingensSakslister",required:!0,type:{name:"(params: { avdelingEnhet: string; }) => void"}},hentAntallOppgaver:{defaultValue:null,description:"",name:"hentAntallOppgaver",required:!0,type:{name:"(sakslisteId: number, avdelingEnhet: string) => void"}}}}}catch{}const ue=({valgtSakslisteId:e,valgtAvdelingEnhet:t,lagreSakslisteSorteringNumerisk:u,hentAvdelingensSakslister:h,hentAntallOppgaver:c})=>{const{watch:a}=J(),o=a("fra"),l=a("til"),g=S=>u({sakslisteId:e,fra:S,til:l,avdelingEnhet:t}).then(()=>{c(e,t),h({avdelingEnhet:t})}),s=S=>u({sakslisteId:e,fra:o,til:S,avdelingEnhet:t}).then(()=>{c(e,t),h({avdelingEnhet:t})}),p=O("fra",g),D=O("til",s);return r.jsxs(Ve,{children:[r.jsx(I,{size:"small",children:r.jsx(Y,{id:"SorteringVelger.FiltrerPaHeltall"})}),r.jsx(oe,{children:r.jsxs(le,{children:[r.jsx(T,{children:r.jsx(W,{name:"fra",className:E.dato,validate:[X],onChange:p})}),r.jsx(T,{children:r.jsx(I,{size:"small",className:E.beløp,children:r.jsx(Y,{id:"SorteringVelger.Valuta"})})}),r.jsx(T,{children:r.jsx(W,{name:"til",className:E.dato,validate:[X],onChange:D})}),r.jsx(T,{children:r.jsx(I,{size:"small",className:E.beløp,children:r.jsx(Y,{id:"SorteringVelger.Valuta"})})})]})}),r.jsx(H,{eightPx:!0})]})};try{ue.displayName="BelopSorteringValg",ue.__docgenInfo={description:"",displayName:"BelopSorteringValg",props:{valgtSakslisteId:{defaultValue:null,description:"",name:"valgtSakslisteId",required:!0,type:{name:"number"}},lagreSakslisteSorteringNumerisk:{defaultValue:null,description:"",name:"lagreSakslisteSorteringNumerisk",required:!0,type:{name:"(params: { sakslisteId: number; fra: number; til: number; avdelingEnhet: string; }) => Promise<any>"}},valgtAvdelingEnhet:{defaultValue:null,description:"",name:"valgtAvdelingEnhet",required:!0,type:{name:"string"}},hentAvdelingensSakslister:{defaultValue:null,description:"",name:"hentAvdelingensSakslister",required:!0,type:{name:"(params: { avdelingEnhet: string; }) => void"}},hentAntallOppgaver:{defaultValue:null,description:"",name:"hentAntallOppgaver",required:!0,type:{name:"(sakslisteId: number, avdelingEnhet: string) => void"}}}}}catch{}const cr=e=>e&&e.some(t=>t===z.TILBAKEKREVING||t===z.TILBAKEKREVING_REVURDERING)&&!e.some(t=>t!==z.TILBAKEKREVING&&t!==z.TILBAKEKREVING_REVURDERING),me=({valgtSakslisteId:e,valgteBehandlingtyper:t,valgtAvdelingEnhet:u,erDynamiskPeriode:h,hentAvdelingensSakslister:c,hentAntallOppgaver:a})=>{const{resetField:o}=J(),{startRequest:l}=Z.useRestApiRunner(U.LAGRE_SAKSLISTE_SORTERING),{startRequest:g}=Z.useRestApiRunner(U.LAGRE_SAKSLISTE_SORTERING_INTERVALL),s=we("KøSortering");return r.jsx(Ye,{name:"sortering",label:r.jsx(Y,{id:"SorteringVelger.Sortering"}),onChange:p=>(o("fra",{defaultValue:""}),o("til",{defaultValue:""}),o("fomDato",{defaultValue:""}),o("tomDato",{defaultValue:""}),o("erDynamiskPeriode",{defaultValue:""}),l({sakslisteId:e,sakslisteSorteringValg:p,avdelingEnhet:u}).then(()=>{a(e,u),c({avdelingEnhet:u})})),radios:s.filter(p=>p.feltkategori!=="TILBAKEKREVING"||cr(t)).map(p=>({value:p.kode,label:p.navn,element:r.jsxs(r.Fragment,{children:[p.felttype==="DATO"&&r.jsx(ce,{valgtSakslisteId:e,lagreSakslisteSorteringTidsintervallDager:g,valgtAvdelingEnhet:u,erDynamiskPeriode:h,hentAvdelingensSakslister:c,hentAntallOppgaver:a}),p.felttype==="HELTALL"&&r.jsx(ue,{valgtSakslisteId:e,lagreSakslisteSorteringNumerisk:g,valgtAvdelingEnhet:u,hentAvdelingensSakslister:c,hentAntallOppgaver:a})]})}))})},jr=me;try{me.displayName="SorteringVelger",me.__docgenInfo={description:"SorteringVelger",displayName:"SorteringVelger",props:{valgtSakslisteId:{defaultValue:null,description:"",name:"valgtSakslisteId",required:!0,type:{name:"number"}},valgteBehandlingtyper:{defaultValue:null,description:"",name:"valgteBehandlingtyper",required:!1,type:{name:"string[]"}},valgtAvdelingEnhet:{defaultValue:null,description:"",name:"valgtAvdelingEnhet",required:!0,type:{name:"string"}},erDynamiskPeriode:{defaultValue:null,description:"",name:"erDynamiskPeriode",required:!0,type:{name:"boolean"}},hentAvdelingensSakslister:{defaultValue:null,description:"",name:"hentAvdelingensSakslister",required:!0,type:{name:"(params: { avdelingEnhet: string; }) => void"}},hentAntallOppgaver:{defaultValue:null,description:"",name:"hentAntallOppgaver",required:!0,type:{name:"(sakslisteId: number, avdelingEnhet: string) => void"}}}}}catch{}export{jr as S,O as u};
//# sourceMappingURL=SorteringVelger-10690037.js.map
