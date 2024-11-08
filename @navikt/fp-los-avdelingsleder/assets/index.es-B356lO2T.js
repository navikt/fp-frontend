import{d as l}from"./dayjs.min-BsYQKNhR.js";import{t as p,R as d}from"./nb_NO-C3qr7Zu2.js";const v={"ValidationMessage.NotEmpty":"Feltet må fylles ut","ValidationMessage.MinLength":"Du må skrive minst {length} tegn","ValidationMessage.MaxLength":"Du kan skrive maksimalt {length} tegn","ValidationMessage.MinValue":"Feltet må være større eller lik {length}","ValidationMessage.MaxValue":"Feltet må være mindre eller lik {length}","ValidationMessage.InvalidDate":"Dato må skrives slik : dd.mm.åååå","ValidationMessage.DateNotBeforeOrEqual":"Dato må være før eller lik {limit}","ValidationMessage.DateNotAfterOrEqual":"Dato må være etter eller lik {limit}","ValidationMessage.DateRangesOverlapping":"Perioder kan ikke overlappe i tid","ValidationMessage.DateRangesOverlappingPeriodTypes":"Perioder kan ikke overlappe i tid (uttak, utsettelse, gradering, overforing, opphold)","ValidationMessage.DatesNotEqual":"Dato må være lik {value}","ValidationMessage.InvalidInteger":"Tallet kan ikke ha desimaler","ValidationMessage.InvalidDecimal":"Tallet kan ikke inneholde mer enn to desimaler","ValidationMessage.InvalidDatesInPeriod":"Periode må skrives slik : dd.mm.åååå - dd.mm.åååå","ValidationMessage.InvalidPeriod":"Startdato må være før eller lik sluttdato","ValidationMessage.InvalidPeriodRange":"Periode er utenfor opptjeningsperioden","ValidationMessage.InvalidNumber":"Feltet kan kun inneholde tall","ValidationMessage.maxLengthOrFodselsnr":"Du kan skrive maksimalt {length} tegn eller et fødselsnummer (11 siffer)","ValidationMessage.Registrering.TerminEllerFoedselMessage":"Fyll ut informasjon om termindato eller fødselsdato","ValidationMessage.InvalidFodselsnummerFormat":"Feltet må være et fødselsnummer (11 siffer)","ValidationMessage.InvalidFodselsnummer":"Ugyldig fødselsnummer","ValidationMessage.SammeFodselsnummerSomSoker":"Fødselsnummer til den andre forelderen kan ikke være det samme som søker.","ValidationMessage.InvalidText":"Feltet inneholder ugyldige tegn: {text}","ValidationMessage.InvalidValue":"Feltet inneholder en ugyldig verdi: {value}","ValidationMessage.ArrayMinLength":"Listen må ha lengde større enn: {length}","ValidationMessage.InvalidSaksnummerOrFodselsnummerFormat":"Ugyldig saksnummer eller fødselsnummer","ValidationMessage.InvalidOrganisasjonsnummer":"Ugyldig organisasjonsnummer.","ValidationMessage.InvalidOrganisasjonsnummerOrFodselsnr":"Ugyldig organisasjonsnummer eller fødselsnummer.","ValidationMessage.NoWhiteSpace":"Feltet kan ikke inneholde mellomrom."},s=p(v),V=()=>s.formatMessage({id:"ValidationMessage.NotEmpty"}),k=e=>s.formatMessage({id:"ValidationMessage.MinLength"},{length:e}),h=e=>s.formatMessage({id:"ValidationMessage.MaxLength"},{length:e}),c=()=>s.formatMessage({id:"ValidationMessage.InvalidDate"}),y=e=>s.formatMessage({id:"ValidationMessage.InvalidInteger"},{text:e}),I=e=>s.formatMessage({id:"ValidationMessage.DateNotBeforeOrEqual"},{limit:e}),O=e=>s.formatMessage({id:"ValidationMessage.DateNotAfterOrEqual"},{limit:e}),g=e=>s.formatMessage({id:"ValidationMessage.InvalidText"},{text:e}),x=e=>s.formatMessage({id:"ValidationMessage.InvalidNumber"},{text:e}),F=/(19|20)\d{2}-(0?[1-9]|1[0-2])-(0?[1-9]|1\d|2\d|3[01])$/,D=/^-?\d+([,.]\d+)?$/,S=/^\s*-?\d+\s*$/,N=/^[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*$/u,L=/[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*/gu,P=/^[0-9\p{L}\p{Z}.'-]*$/u,T=/[0-9\p{L}\p{Z}.'-]*/gu,i=e=>e==null||e.toString().trim().length===0,b=()=>l().startOf("day");var m=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function u(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var f={exports:{}};(function(e,a){(function(t,n){e.exports=n()})(m,function(){return function(t,n){n.prototype.isSameOrAfter=function(r,o){return this.isSame(r,o)||this.isAfter(r,o)}}})})(f);var E=f.exports;const j=u(E);var M={exports:{}};(function(e,a){(function(t,n){e.exports=n()})(m,function(){return function(t,n){n.prototype.isSameOrBefore=function(r,o){return this.isSame(r,o)||this.isBefore(r,o)}}})})(M);var A=M.exports;const $=u(A);l.extend(j);l.extend($);const U=e=>i(e)?V():void 0,Z=e=>a=>i(a)||a.toString().trim().length>=e?null:k(e),H=e=>a=>i(a)||a.toString().trim().length<=e?null:h(e),w=e=>i(e)||D.test(e)?null:x(e),B=e=>i(e)||S.test(e)?null:y(e),Q=e=>w(e)||B(e),X=e=>i(e)||F.test(e)?null:c(),W=e=>a=>{const t=l(e).endOf("day");return i(a)||l(a).isSameOrBefore(t)?null:I(t.format(d))},q=e=>a=>{const t=l(e).startOf("day");return i(a)||l(a).isSameOrAfter(t)?null:O(t.format(d))},z=e=>q(b())(e),C=e=>{if(!N.test(e)){const a=e.replace(L,"");return g(a.replace(/[\t]/g,"Tabulatortegn"))}return null},G=e=>{if(!P.test(e)){const a=e.replace(T,"");return g(a.replace(/[\t]/g,"Tabulatortegn"))}return null};export{Q as $,Z as A,z as H,H as P,C as Q,W as T,U as V,G as X,X as w};
