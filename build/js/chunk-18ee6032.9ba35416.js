(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18ee6032"],{"0493":function(e,t,r){var n=r("21f6"),s=r("ed2d"),i=Math.floor,o=n("".charAt),a=n("".replace),u=n("".slice),c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,h=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,r,n,g,l){var f=r+e.length,p=n.length,d=h;return void 0!==g&&(g=s(g),d=c),a(l,d,(function(s,a){var c;switch(o(a,0)){case"$":return"$";case"&":return e;case"`":return u(t,0,r);case"'":return u(t,f);case"<":c=g[u(a,1,-1)];break;default:var h=+a;if(0===h)return s;if(h>p){var l=i(h/10);return 0===l?s:l<=p?void 0===n[l-1]?o(a,1):n[l-1]+o(a,1):s}c=n[h-1]}return void 0===c?"":c}))}},"5ec8":function(e,t,r){"use strict";r.r(t);var n=r("9853"),s=function(e){return Object(n["v"])("data-v-31b14934"),e=e(),Object(n["t"])(),e},i=s((function(){return Object(n["g"])("h1",null,"Register",-1)})),o={class:"field"},a=s((function(){return Object(n["g"])("label",{for:"username"},"Username",-1)})),u={class:"error"},c={class:"field"},h=s((function(){return Object(n["g"])("label",{for:"password"},"Password",-1)})),g={class:"error"},l={class:"field"},f=s((function(){return Object(n["g"])("button",{type:"submit"},"Register!",-1)})),p={class:"error"};function d(e,t,r,s,d,v){return Object(n["s"])(),Object(n["f"])("form",{onSubmit:t[2]||(t[2]=Object(n["K"])((function(){return e.submit&&e.submit.apply(e,arguments)}),["prevent"])),class:"border form"},[i,Object(n["g"])("div",o,[a,Object(n["J"])(Object(n["g"])("input",{id:"username",type:"text","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.username=t})},null,512),[[n["F"],e.username]]),Object(n["g"])("span",u,Object(n["C"])(e.unError),1)]),Object(n["g"])("div",c,[h,Object(n["J"])(Object(n["g"])("input",{id:"password",type:"password","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.password=t})},null,512),[[n["F"],e.password]]),Object(n["g"])("span",g,Object(n["C"])(e.pwError),1),e.pwError?Object(n["e"])("",!0):(Object(n["s"])(),Object(n["f"])("span",{key:0,class:Object(n["o"])([e.pwWarning,"warning"])},Object(n["C"])(e.formatStrength(e.pwWarning)),3))]),Object(n["g"])("div",l,[f,Object(n["g"])("span",p,Object(n["C"])(e.error),1)])],32)}r("5f55"),r("9d92"),r("7121"),r("91ce"),r("8d2d"),r("d41c");var v=r("78f6"),m=r("ed08"),L=r("1dba"),b=r.n(L),y=Object(n["j"])({setup:function(){},data:function(){return{username:"",password:"",usernameDirty:!1,passwordDirty:!1,error:""}},methods:{submit:function(){var e=this;this.unError||this.pwError||b.a.post(Object(m["getApi"])("register"),{username:this.username,password:this.password}).then((function(t){var r=t.data;if(r.error)return e.error=r.error;localStorage.setItem("token",r),window.location="/"}))},formatStrength:function(e){var t=e.replace(/([a-z])([A-Z])/g,"$1 $2").split(" ");return e=t[0].charAt(0).toUpperCase()+t[0].slice(1),e+=" "+t.splice(1).join(" "),e}},computed:{unError:function(){return this.usernameDirty&&this.username.length<3?"Username must be atleast 3 symbols!":""},pwError:function(){return this.passwordDirty&&this.password.length<6?"Password must be atleast 6 symbols!":""},pwWarning:function(){if(!this.passwordDirty)return"";var e=(new v["PasswordMeter"]).getResult(this.password);return e.status}},watch:{username:function(){this.usernameDirty=!0},password:function(){this.passwordDirty=!0}}}),w=(r("b068"),r("85dd")),S=r.n(w);const O=S()(y,[["render",d],["__scopeId","data-v-31b14934"]]);t["default"]=O},7121:function(e,t,r){"use strict";var n=r("7bdd"),s=r("49d9"),i=r("21f6"),o=r("9614"),a=r("9d66"),u=r("1478"),c=r("769d"),h=r("64ea"),g=r("925e"),l=r("420c"),f=r("218d"),p=r("4777"),d=r("903d"),v=r("0493"),m=r("b653"),L=r("600a"),b=L("replace"),y=Math.max,w=Math.min,S=i([].concat),O=i([].push),M=i("".indexOf),j=i("".slice),x=function(e){return void 0===e?e:String(e)},k=function(){return"$0"==="a".replace(/./,"$0")}(),q=function(){return!!/./[b]&&""===/./[b]("a","$0")}(),I=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));o("replace",(function(e,t,r){var i=q?"$":"$0";return[function(e,r){var n=f(this),i=void 0==e?void 0:d(e,b);return i?s(i,e,n,r):s(t,l(n),e,r)},function(e,s){var o=u(this),a=l(e);if("string"==typeof s&&-1===M(s,i)&&-1===M(s,"$<")){var f=r(t,o,a,s);if(f.done)return f.value}var d=c(s);d||(s=l(s));var L=o.global;if(L){var b=o.unicode;o.lastIndex=0}var k=[];while(1){var q=m(o,a);if(null===q)break;if(O(k,q),!L)break;var I=l(q[0]);""===I&&(o.lastIndex=p(a,g(o.lastIndex),b))}for(var C="",W=0,E=0;E<k.length;E++){q=k[E];for(var R=l(q[0]),N=y(w(h(q.index),a.length),0),$=[],A=1;A<q.length;A++)O($,x(q[A]));var U=q.groups;if(d){var B=S([R],$,N,a);void 0!==U&&O(B,U);var T=l(n(s,void 0,B))}else T=v(R,a,N,$,U,s);N>=W&&(C+=j(a,W,N)+T,W=N+R.length)}return C+j(a,W)}]}),!I||!k||q)},"78f6":function(e,t,r){(function(e,r){r(t)})(0,(function(e){"use strict";var t=function(){function e(e,t){this.requirements=e,this.scoreRange=t,this.uppercaseLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZ",this.lowercaseLetters="abcdefghijklmnopqrstuvwxyz",this.numbers="1234567890"}return e.prototype.startsWith=function(e,t){return 0===e.lastIndexOf(t,0)},e.prototype.endsWith=function(e,t){return-1!==e.indexOf(t,e.length-t.length)},e.prototype.chunkString=function(e,t){for(var r=Math.ceil(e.length/t),n=new Array(r),s=0,i=0;i<r;i++)s=i*t,n[i]=e.substring(s,s+t);return n},e.prototype.getLength=function(e){return e?e.length:0},e.prototype.doesNotContains=function(e,t){if(e){if(t){var r=t.every((function(t){return-1==e.indexOf(t)}));return r}return!0}return!0},e.prototype.contains=function(e,t){if(e){if(t){var r=t.every((function(t){return e.indexOf(t)>=0}));return r}return!1}return!1},e.prototype.containsOne=function(e,t){if(e){if(t){var r=t.some((function(t){return e.indexOf(t)>=0}));return r}return!1}return!1},e.prototype.isInBlackList=function(e,t){if(e){if(t){for(var r=0;r<t.length;r++)if(e===t[r])return!0;return!1}return!1}return!1},e.prototype.between=function(e,t,r){return e>=t&&e<r},e.prototype.isIMessage=function(e){var t=void 0!==e.message;return t},e.prototype.isNumber=function(e){if(e){var t=/^\d+$/;return t.test(e)}return!1},e.prototype.isLetter=function(e){if(e){var t=/^[a-zA-Z]+$/;return t.test(e)}return!1},e.prototype.isUppercaseLetter=function(e){if(e){var t=/^[A-Z]+$/;return t.test(e)}return!1},e.prototype.isLowercaseLetter=function(e){if(e){var t=/^[a-z]+$/;return t.test(e)}return!1},e.prototype.isSymbol=function(e){return!!e&&(!this.isNumber(e)&&!this.isLetter(e))},e.prototype.getSymbols=function(e){var t="";if(e)for(var r=0;r<e.length;r++)this.isSymbol(e[r])&&(t+=e[r]);if(0!==t.length)return t},e.prototype.getLengthScore=function(e){if(e){var t=9;return this.getLength(e)*t}return 0},e.prototype.getUppercaseLettersScore=function(e){var t=this;if(e){var r=2,n=0;return e.split("").forEach((function(e){t.isUppercaseLetter(e)&&n++})),0==n?0:(this.getLength(e)-n)*r}return 0},e.prototype.getLowercaseLettersScore=function(e){var t=this;if(e){var r=2,n=0;return e.split("").forEach((function(e){t.isLowercaseLetter(e)&&n++})),0==n?0:(this.getLength(e)-n)*r}return 0},e.prototype.getNumbersScore=function(e){var t=this;if(e){var r=4,n=0;return e.split("").forEach((function(e){t.isNumber(e)&&n++})),0==n?0:(this.getLength(e)-n)*r}return 0},e.prototype.getSymbolsScore=function(e){var t=this;if(e){var r=6,n=0;return e.split("").forEach((function(e){t.isSymbol(e)&&n++})),0==n?0:(this.getLength(e)-n)*r}return 0},e.prototype.getLettersOnlyScore=function(e){if(e){var t=-1;if(this.isLetter(e))return this.getLength(e)*t}return 0},e.prototype.getNumbersOnlyScore=function(e){if(e){var t=-1;if(this.isNumber(e))return this.getLength(e)*t}return 0},e.prototype.getConsecutiveUppercaseLettersScore=function(e){var t=this;if(e){var r=/[A-Z]+/g,n=e.match(r);if(!n)return 0;var s=0,i=-2;return n.forEach((function(e){t.getLength(e)>1&&(s+=(t.getLength(e)-1)*i)})),s}return 0},e.prototype.getConsecutiveLowercaseLettersScore=function(e){var t=this;if(e){var r=/[a-z]+/g,n=e.match(r);if(!n)return 0;var s=0,i=-2;return n.forEach((function(e){t.getLength(e)>1&&(s+=(t.getLength(e)-1)*i)})),s}return 0},e.prototype.getConsecutiveNumbersScore=function(e){var t=this;if(e){var r=/[0-9]+/g,n=e.match(r);if(!n)return 0;var s=0,i=-2;return n.forEach((function(e){t.getLength(e)>1&&(s+=(t.getLength(e)-1)*i)})),s}return 0},e.prototype.reverseString=function(e){return e.split("").reverse().join("")},e.prototype.sequentialBuilder=function(e,t){if(e){for(var r=[],n=e.split("").length-t,s=0;s<n;s++)for(var i=0;i<n;i++)for(var o=e.substring(i,e.length),a=this.chunkString(o,s+t),u=0;u<a.length;u++)r.push(a[u]),r.push(this.reverseString(a[u]));var c=this.distinctArray(this.sortByLength(r,t));return c}return[]},e.prototype.distinctArray=function(e){for(var t=[],r=0,n=e.length;r<n;r++)-1===t.indexOf(e[r])&&""!==e[r]&&t.push(e[r]);return t},e.prototype.sortByLength=function(e,t){e.sort((function(e,t){return t.length-e.length}));for(var r=[],n=0;n<e.length;n++)t?e[n].length>=t&&r.push(e[n]):r.push(e[n]);return r},e.prototype.getSequentialLettersScore=function(e){var t=3;if(e){var r=this.sequentialBuilder(this.uppercaseLetters,t),n=this.sequentialBuilder(this.lowercaseLetters,t),s=0,i=e,o=e;r.forEach((function(e){-1!=i.indexOf(e)&&(s+=e.length-(t-1),i=i.replace(e,""))})),n.forEach((function(e){-1!=o.indexOf(e)&&(s+=e.length-(t-1),o=o.replace(e,""))}));var a=-3;return s*a}return 0},e.prototype.getSequentialNumbersScore=function(e){var t=3;if(e){var r=this.sequentialBuilder(this.numbers,t),n=0,s=e;r.forEach((function(e){-1!=s.indexOf(e)&&(n+=e.length-(t-1),s=s.replace(e,""))}));var i=-3;return n*i}return 0},e.prototype.getSequentialSymbolsScore=function(e){var t=3,r=this.getSymbols(e);if(e&&r){var n=this.sequentialBuilder(r,t),s=0,i=e;n.forEach((function(e){-1!=i.indexOf(e)&&(s+=e.length-(t-1),i=i.replace(e,""))}));var o=-3;return s*o}return 0},e.prototype.getRepeatCharactersScore=function(e){var t=/(.+)(?=.*?\1)/g;if(e){var r=e.match(t);if(!r)return 0;var n=this.sortByLength(r)[0].length,s=0;n>=1&&n<=5&&(s=-8),n>=6&&n<=10&&(s=-5),n>=11&&(s=-2);var i=s*n+(e.length-2*n);return i}return 0},e.prototype.getRequirementsScore=function(e,t){var r=this.requirements,n=[];if(r){var s="The minimum password length is "+r.minLength+".",i="The maximum password length is "+r.maxLength+".",o="You must use at least "+r.uppercaseLettersMinLength+" uppercase letter(s).",a="You must use at least "+r.lowercaseLettersMinLength+" lowercase letter(s).",u="You must use at least "+r.numbersMinLength+" number(s).",c="You must use at least "+r.symbolsMinLength+" symbol(s).",h="The Password must include all the items specified.",g="The Password must exclude all the items specified.",l="The password must start with "+r.startsWith+".",f="The password must end with "+r.endsWith+".",p="Your password is in the blacklist.",d="The Password must include at least one item specified ["+r.includeOne+"] .",v="You must use at least "+r.uniqueLettersMinLength+" unique letter(s).",m=(e.match(/[A-Z]/g)||[]).length,L=(e.match(/[a-z]/g)||[]).length,b=(e.match(/[0-9]/g)||[]).length,y=e.length-(m+L+b);if(r.minLength){var w=void 0,S=s;this.isIMessage(r.minLength)?(w=r.minLength.value,S=r.minLength.message):w=r.minLength,r.minLength&&e.length<w&&n.push(S)}if(r.maxLength){w=void 0,S=i;this.isIMessage(r.maxLength)?(w=r.maxLength.value,S=r.maxLength.message):w=r.maxLength,r.maxLength&&e.length>w&&n.push(S)}if(r.startsWith){w=void 0,S=l;this.isIMessage(r.startsWith)?(w=r.startsWith.value,S=r.startsWith.message):w=r.startsWith,this.startsWith(e,w)||n.push(S)}if(r.endsWith){w=void 0,S=f;this.isIMessage(r.endsWith)?(w=r.endsWith.value,S=r.endsWith.message):w=r.endsWith,this.endsWith(e,w)||n.push(S)}if(r.uppercaseLettersMinLength){w=void 0,S=o;this.isIMessage(r.uppercaseLettersMinLength)?(w=r.uppercaseLettersMinLength.value,S=r.uppercaseLettersMinLength.message):w=r.uppercaseLettersMinLength,w>m&&n.push(S)}if(r.lowercaseLettersMinLength){w=void 0,S=a;this.isIMessage(r.lowercaseLettersMinLength)?(w=r.lowercaseLettersMinLength.value,S=r.lowercaseLettersMinLength.message):w=r.lowercaseLettersMinLength,w>L&&n.push(S)}if(r.numbersMinLength){w=void 0,S=u;this.isIMessage(r.numbersMinLength)?(w=r.numbersMinLength.value,S=r.numbersMinLength.message):w=r.numbersMinLength,w>b&&n.push(S)}if(r.symbolsMinLength){w=void 0,S=c;this.isIMessage(r.symbolsMinLength)?(w=r.symbolsMinLength.value,S=r.symbolsMinLength.message):w=r.symbolsMinLength,w>y&&n.push(S)}if(r.uniqueLettersMinLength){w=void 0,S=v;this.isIMessage(r.uniqueLettersMinLength)?(w=r.uniqueLettersMinLength.value,S=r.uniqueLettersMinLength.message):w=r.uniqueLettersMinLength;var O=Array.from(new Set(e.split(""))).length>=w;r.uniqueLettersMinLength&&!O&&n.push(S)}if(r.include){w=void 0,S=h;this.isIMessage(r.include)?(w=r.include.value,S=r.include.message):w=r.include,this.contains(e,w)||n.push(S)}if(r.exclude){var M=e;w=void 0,S=g;this.isIMessage(r.exclude)?(w=r.exclude.value,S=r.exclude.message):w=r.exclude,t&&(M=e.toLowerCase(),w=w.map((function(e){return e.toLowerCase()}))),this.doesNotContains(M,w)||n.push(S)}if(r.blackList){M=e,w=void 0,S=p;this.isIMessage(r.blackList)?(w=r.blackList.value,S=r.blackList.message):w=r.blackList,t&&(M=e.toLowerCase(),w=w.map((function(e){return e.toLowerCase()}))),this.isInBlackList(M,w)&&n.push(S)}if(r.includeOne){M=e,w=void 0,S=d;this.isIMessage(r.includeOne)?(w=r.includeOne.value,S=r.includeOne.message):w=r.includeOne,t&&(M=e.toLowerCase(),w=w.map((function(e){return e.toLowerCase()}))),this.containsOne(M,w)||n.push(S)}return n}return[]},e.prototype.getResults=function(e,t,r){void 0===t&&(t=!1),void 0===r&&(r=!1);var n=[];if(e&&e.length>0){for(var s=0;s<e.length;s++)n.push(this.getResult(e[s],t,r));return n}return[]},e.prototype.getResult=function(e,t,r){if(void 0===t&&(t=!1),void 0===r&&(r=!1),e){var n=this.getRequirementsScore(e,t);if(!r&&n.length)return{score:-1,status:"needs requirement(s)",errors:n,percent:0};var s=this.getLengthScore(e),i=this.getUppercaseLettersScore(e),o=this.getLowercaseLettersScore(e),a=this.getNumbersScore(e),u=this.getSymbolsScore(e),c=this.getLettersOnlyScore(e),h=this.getNumbersOnlyScore(e),g=this.getRepeatCharactersScore(e),l=this.getConsecutiveUppercaseLettersScore(e),f=this.getConsecutiveLowercaseLettersScore(e),p=this.getConsecutiveNumbersScore(e),d=this.getSequentialLettersScore(e),v=this.getSequentialNumbersScore(e),m=this.getSequentialSymbolsScore(e),L=s+i+o+a+u+c+h+g+l+f+p+d+v+m,b={40:"veryWeak",80:"weak",120:"medium",180:"strong",200:"veryStrong",_:"perfect"},y="";this.scoreRange||(this.scoreRange=b);var w=Object.keys(this.scoreRange).sort((function(e,t){return isNaN(e)||isNaN(t)?e>t?1:-1:e-t}));if(w.length<2)return{score:-2,status:"error",errors:'"scoreRange" must have at least two members.',percent:0};for(var S=0;S<w.length;S++){var O=w[S];if(void 0!=O){if(0==S&&this.between(L,1,parseFloat(w[S]))){y=this.scoreRange[w[0]];break}if(S===w.length-1){if("_"!=w[S])return{score:-2,status:"error",errors:'The last member of the "scoreRange" must be "_".',percent:0};if(this.between(L,parseFloat(w[S-1]),1e18)){y=this.scoreRange[w[w.length-1]];break}}if(this.between(L,parseFloat(w[S-1]),parseFloat(w[S]))){y=this.scoreRange[w[S]];break}}}var M=100*L/parseFloat(w[w.length-2]),j={score:L,status:y,percent:M>=100?100:M};return r&&(j=Object.assign(j,{errors:n})),j}return{score:0,status:"Empty",percent:0}},e}();e.PasswordMeter=t}))},b068:function(e,t,r){"use strict";r("c1ac")},c1ac:function(e,t,r){}}]);