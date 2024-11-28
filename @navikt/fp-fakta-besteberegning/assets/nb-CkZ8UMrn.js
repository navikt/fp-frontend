import{c as B,g as G}from"./index-DJO9vBfz.js";var E={exports:{}},V;function P(){return V||(V=1,function(I,R){(function(w,M){I.exports=M()})(B,function(){var w=1e3,M=6e4,T=36e5,b="millisecond",l="second",Y="minute",k="hour",p="day",C="week",_="month",J="quarter",y="year",O="date",Z="Invalid Date",K=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,X=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,tt={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(s){var n=["th","st","nd","rd"],t=s%100;return"["+s+(n[(t-20)%10]||n[t]||n[0])+"]"}},N=function(s,n,t){var r=String(s);return!r||r.length>=n?s:""+Array(n+1-r.length).join(t)+s},et={s:N,z:function(s){var n=-s.utcOffset(),t=Math.abs(n),r=Math.floor(t/60),e=t%60;return(n<=0?"+":"-")+N(r,2,"0")+":"+N(e,2,"0")},m:function s(n,t){if(n.date()<t.date())return-s(t,n);var r=12*(t.year()-n.year())+(t.month()-n.month()),e=n.clone().add(r,_),i=t-e<0,a=n.clone().add(r+(i?-1:1),_);return+(-(r+(t-e)/(i?e-a:a-e))||0)},a:function(s){return s<0?Math.ceil(s)||0:Math.floor(s)},p:function(s){return{M:_,y,w:C,d:p,D:O,h:k,m:Y,s:l,ms:b,Q:J}[s]||String(s||"").toLowerCase().replace(/s$/,"")},u:function(s){return s===void 0}},L="en",v={};v[L]=tt;var q="$isDayjsObject",U=function(s){return s instanceof A||!(!s||!s[q])},W=function s(n,t,r){var e;if(!n)return L;if(typeof n=="string"){var i=n.toLowerCase();v[i]&&(e=i),t&&(v[i]=t,e=i);var a=n.split("-");if(!e&&a.length>1)return s(a[0])}else{var o=n.name;v[o]=n,e=o}return!r&&e&&(L=e),e||!r&&L},f=function(s,n){if(U(s))return s.clone();var t=typeof n=="object"?n:{};return t.date=s,t.args=arguments,new A(t)},u=et;u.l=W,u.i=U,u.w=function(s,n){return f(s,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var A=function(){function s(t){this.$L=W(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[q]=!0}var n=s.prototype;return n.parse=function(t){this.$d=function(r){var e=r.date,i=r.utc;if(e===null)return new Date(NaN);if(u.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var a=e.match(K);if(a){var o=a[2]-1||0,c=(a[7]||"0").substring(0,3);return i?new Date(Date.UTC(a[1],o,a[3]||1,a[4]||0,a[5]||0,a[6]||0,c)):new Date(a[1],o,a[3]||1,a[4]||0,a[5]||0,a[6]||0,c)}}return new Date(e)}(t),this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return u},n.isValid=function(){return this.$d.toString()!==Z},n.isSame=function(t,r){var e=f(t);return this.startOf(r)<=e&&e<=this.endOf(r)},n.isAfter=function(t,r){return f(t)<this.startOf(r)},n.isBefore=function(t,r){return this.endOf(r)<f(t)},n.$g=function(t,r,e){return u.u(t)?this[r]:this.set(e,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,r){var e=this,i=!!u.u(r)||r,a=u.p(t),o=function(S,m){var g=u.w(e.$u?Date.UTC(e.$y,m,S):new Date(e.$y,m,S),e);return i?g:g.endOf(p)},c=function(S,m){return u.w(e.toDate()[S].apply(e.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(m)),e)},d=this.$W,h=this.$M,$=this.$D,x="set"+(this.$u?"UTC":"");switch(a){case y:return i?o(1,0):o(31,11);case _:return i?o(1,h):o(0,h+1);case C:var D=this.$locale().weekStart||0,H=(d<D?d+7:d)-D;return o(i?$-H:$+(6-H),h);case p:case O:return c(x+"Hours",0);case k:return c(x+"Minutes",1);case Y:return c(x+"Seconds",2);case l:return c(x+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,r){var e,i=u.p(t),a="set"+(this.$u?"UTC":""),o=(e={},e[p]=a+"Date",e[O]=a+"Date",e[_]=a+"Month",e[y]=a+"FullYear",e[k]=a+"Hours",e[Y]=a+"Minutes",e[l]=a+"Seconds",e[b]=a+"Milliseconds",e)[i],c=i===p?this.$D+(r-this.$W):r;if(i===_||i===y){var d=this.clone().set(O,1);d.$d[o](c),d.init(),this.$d=d.set(O,Math.min(this.$D,d.daysInMonth())).$d}else o&&this.$d[o](c);return this.init(),this},n.set=function(t,r){return this.clone().$set(t,r)},n.get=function(t){return this[u.p(t)]()},n.add=function(t,r){var e,i=this;t=Number(t);var a=u.p(r),o=function(h){var $=f(i);return u.w($.date($.date()+Math.round(h*t)),i)};if(a===_)return this.set(_,this.$M+t);if(a===y)return this.set(y,this.$y+t);if(a===p)return o(1);if(a===C)return o(7);var c=(e={},e[Y]=M,e[k]=T,e[l]=w,e)[a]||1,d=this.$d.getTime()+t*c;return u.w(d,this)},n.subtract=function(t,r){return this.add(-1*t,r)},n.format=function(t){var r=this,e=this.$locale();if(!this.isValid())return e.invalidDate||Z;var i=t||"YYYY-MM-DDTHH:mm:ssZ",a=u.z(this),o=this.$H,c=this.$m,d=this.$M,h=e.weekdays,$=e.months,x=e.meridiem,D=function(m,g,j,F){return m&&(m[g]||m(r,i))||j[g].slice(0,F)},H=function(m){return u.s(o%12||12,m,"0")},S=x||function(m,g,j){var F=m<12?"AM":"PM";return j?F.toLowerCase():F};return i.replace(X,function(m,g){return g||function(j){switch(j){case"YY":return String(r.$y).slice(-2);case"YYYY":return u.s(r.$y,4,"0");case"M":return d+1;case"MM":return u.s(d+1,2,"0");case"MMM":return D(e.monthsShort,d,$,3);case"MMMM":return D($,d);case"D":return r.$D;case"DD":return u.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return D(e.weekdaysMin,r.$W,h,2);case"ddd":return D(e.weekdaysShort,r.$W,h,3);case"dddd":return h[r.$W];case"H":return String(o);case"HH":return u.s(o,2,"0");case"h":return H(1);case"hh":return H(2);case"a":return S(o,c,!0);case"A":return S(o,c,!1);case"m":return String(c);case"mm":return u.s(c,2,"0");case"s":return String(r.$s);case"ss":return u.s(r.$s,2,"0");case"SSS":return u.s(r.$ms,3,"0");case"Z":return a}return null}(m)||a.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,r,e){var i,a=this,o=u.p(r),c=f(t),d=(c.utcOffset()-this.utcOffset())*M,h=this-c,$=function(){return u.m(a,c)};switch(o){case y:i=$()/12;break;case _:i=$();break;case J:i=$()/3;break;case C:i=(h-d)/6048e5;break;case p:i=(h-d)/864e5;break;case k:i=h/T;break;case Y:i=h/M;break;case l:i=h/w;break;default:i=h}return e?i:u.a(i)},n.daysInMonth=function(){return this.endOf(_).$D},n.$locale=function(){return v[this.$L]},n.locale=function(t,r){if(!t)return this.$L;var e=this.clone(),i=W(t,r,!0);return i&&(e.$L=i),e},n.clone=function(){return u.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},s}(),z=A.prototype;return f.prototype=z,[["$ms",b],["$s",l],["$m",Y],["$H",k],["$W",p],["$M",_],["$y",y],["$D",O]].forEach(function(s){z[s[1]]=function(n){return this.$g(n,s[0],s[1])}}),f.extend=function(s,n){return s.$i||(s(n,A,f),s.$i=!0),f},f.locale=W,f.isDayjs=U,f.unix=function(s){return f(1e3*s)},f.en=v[L],f.Ls=v,f.p={},f})}(E)),E.exports}var nt=P();const it=G(nt);var Q={exports:{}};(function(I,R){(function(w,M){I.exports=M(P())})(B,function(w){function M(l){return l&&typeof l=="object"&&"default"in l?l:{default:l}}var T=M(w),b={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(l){return l+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return T.default.locale(b,null,!0),b})})(Q);var rt=Q.exports;const at=G(rt);export{it as d,at as n};
