(function(e){function t(t){for(var a,c,s=t[0],r=t[1],u=t[2],p=0,d=[];p<s.length;p++)c=s[p],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);l&&l(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,s=1;s<n.length;s++){var r=n[s];0!==o[r]&&(a=!1)}a&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},o={app:0},i=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vote/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=r;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0ca1":function(e,t,n){e.exports=n.p+"img/1.12634301.png"},1105:function(e,t,n){e.exports=n.p+"img/4.edc4be43.png"},1771:function(e,t,n){var a={"./1.png":"0ca1","./2.png":"b9af","./3.png":"c2e4","./4.png":"1105","./5.png":"9310","./ghibli/kurosuke.png":"a50f","./ghibli/totoro.png":"692b","./logo.png":"cf053","./logo.svg":"9b19","./lol/lol.jpg":"a718","./pixar.jpg":"a58e"};function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=i,e.exports=o,o.id="1771"},"1edc":function(e,t,n){},"45c6":function(e,t,n){"use strict";n("7fdf")},"51f2":function(e,t,n){"use strict";n("e146")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),o=(n("5363"),n("98c5"),n("afc9")),i=n("81c6"),c=n("0047"),s=Object(o["a"])({components:i,directives:c}),r=n("6aae");function u(e,t,n,o,i,c){var s=Object(a["C"])("router-view"),r=Object(a["C"])("v-main"),u=Object(a["C"])("v-app");return Object(a["x"])(),Object(a["h"])(u,null,{default:Object(a["L"])((function(){return[Object(a["j"])(r,null,{default:Object(a["L"])((function(){return[Object(a["j"])(s)]})),_:1})]})),_:1})}var l={name:"App",components:{},data:function(){return{}}};l.render=u;var p=l,d=n("6c02");function b(e,t,n,o,i,c){var s=Object(a["C"])("question");return Object(a["x"])(),Object(a["h"])(s,{msg:e.question[e.question_index].msg,image:e.question[e.question_index].image,ans1:e.question[e.question_index].ans1,ans2:e.question[e.question_index].ans2,onNext:c.next},null,8,["msg","image","ans1","ans2","onNext"])}function f(e){switch(e){case"/1/1/1/1":case"/1/1/1/2":case"/1/1/1/3":case"/1/1/1/4":return 1;default:return e}}var m={name:"HelloWorld",methods:{next:function(e){if(this.question_index==this.question.length){var t=f(this.answer);alert(t)}else this.question_index++,this.answer+="/"+e}},data:function(){return{answer:"",question_index:0,question:[{msg:"msg 1",image:"1.png",ans1:"yes",ans2:"no"},{msg:"msg 2",image:"2.png",ans1:"yes",ans2:"no"},{msg:"msg 3",image:"3.png",ans1:"yes",ans2:"no"},{msg:"msg 4",image:"4.png",ans1:"yes",ans2:"no"}]}}};m.render=b;var g=m;function j(e,t,n,o,i,c){var s=Object(a["C"])("questionOnlyAns");return Object(a["x"])(),Object(a["h"])(s,{image:e.question[e.question_index].image,ans1:e.question[e.question_index].ans1,ans2:e.question[e.question_index].ans2,total:e.totalCnt,onNext:c.next},null,8,["image","ans1","ans2","total","onNext"])}function O(e){switch(e){case"/1/2/1/2/1/2":case"/1/2/1/2/2/2":return"1";case"/1/1/1/1":case"/1/1/1/2":return 1;default:return 1}}var h={name:"Query",methods:{next:function(e){if(this.question_index==this.question.length-1){this.answer+="/"+e;var t=O(this.answer);alert(t)}else this.question_index++,this.answer+="/"+e}},data:function(){return{totalCnt:6,answer:"",question_index:0,question:[{ans1:"답변1",ans2:"답변2"},{ans1:"답변1",ans2:"답변2"},{ans1:"답변1",ans2:"답변2"},{ans1:"답변1",ans2:"답변2"},{ans1:"답변1",ans2:"답변2"},{ans1:"답변1",ans2:"답변2"}]}}};h.render=j;var v=h;n("b0c0");function k(e,t,o,i,c,s){return Object(a["x"])(),Object(a["h"])("div",null,[Object(a["j"])("p",null,Object(a["E"])(i.name),1),Object(a["j"])("img",{src:n("1771")("./".concat(i.image)),alt:"test image"},null,8,["src"]),Object(a["j"])("p",null,Object(a["E"])(i.bigDesc),1),Object(a["j"])("p",null,Object(a["E"])(i.smallDesc),1)])}var x={name:"Answer",props:{id:String},setup:function(e){var t="",n="logo.png",a="",o="";return"1"==e.id&&(t="test",n="1.png",a="test",o="ttest"),{name:t,image:n,bigDesc:a,smallDesc:o}}};n("b7d8");x.render=k;var w=x;function y(e,t,n,o,i,c){var s=Object(a["C"])("question");return Object(a["x"])(),Object(a["h"])(s,{msg:e.question[e.question_index].msg,image:e.question[e.question_index].image,ans1:e.question[e.question_index].ans1,ans2:e.question[e.question_index].ans2,total:e.totalCnt,onNext:c.next},null,8,["msg","image","ans1","ans2","total","onNext"])}function q(e){switch(e){case"/1/1/1/1":case"/1/1/1/2":case"/1/1/1/3":case"/1/1/1/4":return 1;default:return e}}var C={name:"Query",methods:{next:function(e){if(this.question_index==this.question.length){var t=q(this.answer);alert(t)}else this.question_index++,this.answer+="/"+e}},data:function(){return{totalCnt:4,answer:"",question_index:0,question:[{msg:"msg 1",ans1:"yes",ans2:"no"},{msg:"msg 2",ans1:"yes",ans2:"no"},{msg:"msg 3",ans1:"yes",ans2:"no"},{msg:"msg 4",ans1:"yes",ans2:"no"}]}}};C.render=y;var A=C;function _(e,t,o,i,c,s){return Object(a["x"])(),Object(a["h"])("div",null,[Object(a["j"])("p",null,Object(a["E"])(i.name),1),Object(a["j"])("img",{src:n("1771")("./".concat(i.image)),alt:"test image"},null,8,["src"]),Object(a["j"])("p",null,Object(a["E"])(i.bigDesc),1),Object(a["j"])("p",null,Object(a["E"])(i.smallDesc),1)])}var D={name:"Answer",props:{id:String},setup:function(e){var t="",n="logo.png",a="",o="";return"aaa"==e.id&&(t="녹턴",n="1.png",a="불끄는걸 좋아함",o="허허허허"),{name:t,image:n,bigDesc:a,smallDesc:o}}};n("51f2");D.render=_;var B=D,L=Object(a["i"])(" mdi-checkbox-marked-circle "),E=Object(a["j"])("p",null," vs ",-1),N=Object(a["i"])(" mdi-cancel "),M=Object(a["j"])("div",{class:"ldBar no-label",id:"mybar",style:{width:"80%"},"data-aspect-ratio":"none","data-value":"0"},null,-1);function U(e,t,n,o,i,c){var s=Object(a["C"])("v-icon"),r=Object(a["C"])("v-btn");return Object(a["x"])(),Object(a["h"])("div",null,[Object(a["j"])("div",null,[Object(a["j"])(r,{class:"questionOnlyAnsBtn",onClick:t[1]||(t[1]=function(e){return c.select(1)}),color:"primary",dark:""},{default:Object(a["L"])((function(){return[Object(a["i"])(Object(a["E"])(n.ans1)+" ",1),Object(a["j"])(s,{dark:"",right:""},{default:Object(a["L"])((function(){return[L]})),_:1})]})),_:1})]),E,Object(a["j"])("div",null,[Object(a["j"])(r,{class:"questionOnlyAnsBtn",onClick:t[2]||(t[2]=function(e){return c.select(2)}),color:"red",dark:""},{default:Object(a["L"])((function(){return[Object(a["i"])(Object(a["E"])(n.ans2)+" ",1),Object(a["j"])(s,{dark:"",right:""},{default:Object(a["L"])((function(){return[N]})),_:1})]})),_:1})]),M])}n("a9e3");var P={name:"QuestionOnlyAns",props:{ans1:String,ans2:String,total:Number},data:function(){return{current:0}},methods:{select:function(e){this.$emit("next",e),this.current=this.current+1;var t=new window.ldBar("#mybar");t.set(100*this.current/this.total)}}};n("45c6");P.render=U;var z=P,H={class:"questionMsg"},Q=Object(a["i"])(" mdi-checkbox-marked-circle "),S=Object(a["i"])(" mdi-cancel "),T=Object(a["j"])("div",{class:"ldBar no-label",id:"mybar",style:{width:"80%"},"data-aspect-ratio":"none","data-value":"0"},null,-1);function G(e,t,n,o,i,c){var s=Object(a["C"])("v-icon"),r=Object(a["C"])("v-btn");return Object(a["x"])(),Object(a["h"])("div",null,[Object(a["j"])("p",H,Object(a["E"])(n.msg),1),Object(a["j"])("div",null,[Object(a["j"])(r,{class:"questionBtn",onClick:t[1]||(t[1]=function(e){return c.select(1)}),color:"primary",dark:""},{default:Object(a["L"])((function(){return[Object(a["i"])(Object(a["E"])(n.ans1)+" ",1),Object(a["j"])(s,{dark:"",right:""},{default:Object(a["L"])((function(){return[Q]})),_:1})]})),_:1})]),Object(a["j"])("div",null,[Object(a["j"])(r,{class:"questionBtn",onClick:t[2]||(t[2]=function(e){return c.select(2)}),color:"red",dark:""},{default:Object(a["L"])((function(){return[Object(a["i"])(Object(a["E"])(n.ans2)+" ",1),Object(a["j"])(s,{dark:"",right:""},{default:Object(a["L"])((function(){return[S]})),_:1})]})),_:1})]),T])}var J={name:"Question",props:{msg:String,ans1:String,ans2:String,total:Number},data:function(){return{current:0}},methods:{select:function(e){this.$emit("next",e),this.current=this.current+1;var t=new window.ldBar("#mybar");t.set(100*this.current/this.total)}}};n("b30b");J.render=G;var W=J,I=(n("9911"),{class:"item-wrapper"}),K={id:"foreground"},R={class:"th-wrapper"},F={class:"th-image"},Z={class:"th-name"},V=Object(a["j"])("img",{src:"https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"},null,-1);function X(e,t,o,i,c,s){var r=Object(a["C"])("Particles"),u=Object(a["C"])("v-btn");return Object(a["x"])(),Object(a["h"])("div",I,[Object(a["j"])(r,{id:"tsparticles",particlesInit:e.particlesInit,particlesLoaded:e.particlesLoaded,options:{background:{color:{value:"#ffffff"}},fpsLimit:60,interactivity:{detectsOn:"canvas",events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!0,mode:"repulse"},resize:!0},modes:{bubble:{distance:400,duration:2,opacity:.8,size:40},push:{quantity:4},repulse:{distance:200,duration:.4}}},particles:{color:{value:"#ffffff"},links:{color:"#ffffff",distance:150,enable:!0,opacity:0,width:1},collisions:{enable:!0},move:{direction:"none",enable:!0,outMode:"bounce",random:!1,speed:6,straight:!1},number:{density:{enable:!0,value_area:800},value:80},opacity:{value:1},shape:{type:"image",options:{image:[{src:"https://raw.githubusercontent.com/meansoup/vote/main/img/kurosuke.png"}]}},size:{random:!0,value:20}},detectRetina:!0}},null,8,["particlesInit","particlesLoaded","options"]),Object(a["j"])("div",K,[Object(a["j"])("div",R,[Object(a["j"])("div",F,[Object(a["j"])("img",{src:n("1771")("./".concat(i.image)),onClick:t[1]||(t[1]=function(t){return e.$router.push({path:"".concat(i.link)})}),alt:"test image"},null,8,["src"])]),Object(a["j"])("div",Z,[Object(a["j"])("p",null,Object(a["E"])(i.title),1)]),Object(a["j"])("div",null,[Object(a["j"])("p",null,Object(a["E"])(i.count),1)])]),Object(a["j"])("div",{id:"kakao-link-btn",onClick:t[2]||(t[2]=function(){return s.kakaoLink&&s.kakaoLink.apply(s,arguments)})},[V]),Object(a["j"])(u,{onClick:s.copyLink,class:"ma-2",color:"red",dark:""},null,8,["onClick"])])])}var Y=n("ec30"),$=n.n(Y),ee={name:"Theme",props:{theme:String},setup:function(e){var t="logo.png",n="",o="",i=Object(a["B"])(0);return"movie"==e.theme&&(t="pixar.jpg",n="나에게 맞는 영화는?",o="/q/movie"),$.a.hit("meansoup.github.io","test").then((function(e){console.log(e.value),i.value=e.value})),{image:t,title:n,link:o,count:i}},methods:{copyLink:function(){var e=document.createElement("textarea");document.body.appendChild(e),e.value=window.location.href,e.select(),document.execCommand("copy"),document.body.removeChild(e),alert("복사 되었습니다.")},kakaoLink:function(){window.Kakao.Link.sendDefault({objectType:"feed",content:{title:"딸기 치즈 케익",description:"#케익 #딸기 #삼평동 #카페 #분위기 #소개팅",imageUrl:"http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",link:{mobileWebUrl:"https://developers.kakao.com",webUrl:"https://developers.kakao.com"}},social:{likeCount:286,commentCount:45,sharedCount:845},buttons:[{title:"웹으로 보기",link:{mobileWebUrl:"https://developers.kakao.com",webUrl:"https://developers.kakao.com"}},{title:"앱으로 보기",link:{mobileWebUrl:"https://developers.kakao.com",webUrl:"https://developers.kakao.com"}}]})}}};n("a898");ee.render=X;var te=ee,ne=[{path:"/hello",component:g},{path:"/q/movie",component:v},{path:"/lol",component:A},{path:"/movie/:id",component:w,props:!0},{path:"/lol/:id",component:B,props:!0},{path:"/:theme",component:te,props:!0}],ae=Object(d["a"])({history:Object(d["b"])(),routes:ne}),oe=Object(a["g"])(p);oe.use(ae),oe.use(s),oe.use(r["a"]),oe.component("Question",W),oe.component("QuestionOnlyAns",z),oe.mount("#app")},"692b":function(e,t,n){e.exports=n.p+"img/totoro.d6f361c5.png"},"7ea1":function(e,t,n){},"7fdf":function(e,t,n){},9310:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI4AAACOCAQAAABN9PiDAAACDklEQVR42u3cUXKDIBQFUJfWpWVnLC1NO21aqyBgk8jz8P4iY4YThKuZcbpOKlcI4MCBAwcOHDhw4Cg4cODAgQMHDhw4cBQcOHDgwIEDBw4cBQcOHDhw4MCBAwfOf53s1q6X6yvaZTo+zotoPnmOj/PKdvA15w3OM3Eu02YbBOchl1WCs4Pn3DgbPGfHKfLAKfDAgeOyug/3Vhbk/HAreU62ld+HW8FzshA4G+4GzyZNLJzFcAs8GZqP9SoiTsoMto1mfmkGwclnldRI86tHDJzyhpwaaX72vAA427tOaqT56jk+TsWus1xN6lam0XGqaJb7UMOWPyxONU31ihQGJ7XOkY4LalCc1LO61M2axZHBcKqzSiVNmuP8OToUTkNWqaOZn3/RYyCcpqxSR7OGM2LOacwqdTQxcNqzysa9+gJiWJy+GFd8yhMFpzf8F58PxsBpnDWri25a6xcAZ3dWyfwnERanKavkbpti4jRmlcIMC4fTnFWKMywUTsev3zDDhsbpyioNM2xgnM6ssuezUXC6s0p8nB1ZJTpOPg2fHqechk+Ns52Gz4yzN6ucAic9GGJknIdDwIEDBw4cOHDgwIEz2r3V8xuckXG8riGP40UfRZzpm+hpdf/OY+NEKwRw4MCBAwcOHDhwFBw4cODAgQMHDhw4Cg4cOHDgwIEDB46CAwcOHDhw4MCBA0et1jsAhGvidYJTgQAAAABJRU5ErkJggg=="},"9b19":function(e,t,n){e.exports=n.p+"img/logo.07d1e22e.svg"},"9e89":function(e,t,n){},a50f:function(e,t,n){e.exports=n.p+"img/kurosuke.a2fbfd3f.png"},a58e:function(e,t,n){e.exports=n.p+"img/pixar.e01d8ace.jpg"},a718:function(e,t,n){e.exports=n.p+"img/lol.9ff7f12c.jpg"},a898:function(e,t,n){"use strict";n("9e89")},b30b:function(e,t,n){"use strict";n("1edc")},b7d8:function(e,t,n){"use strict";n("7ea1")},b9af:function(e,t,n){e.exports=n.p+"img/2.08e727ac.png"},c2e4:function(e,t,n){e.exports=n.p+"img/3.f0a6104c.png"},cf053:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},e146:function(e,t,n){}});
//# sourceMappingURL=app.5910b247.js.map