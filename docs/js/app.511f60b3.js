(function(e){function t(t){for(var i,c,s=t[0],r=t[1],u=t[2],d=0,p=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,s=1;s<n.length;s++){var r=n[s];0!==o[r]&&(i=!1)}i&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var i={},o={app:0},a=[];function c(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=i,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)c.d(n,i,function(t){return e[t]}.bind(null,i));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vote/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=r;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"01a5":function(e,t,n){"use strict";n("636d")},"0e85":function(e,t,n){"use strict";n("67e1")},1771:function(e,t,n){var i={"./ghibli/kiki.jpg":"a37d","./ghibli/kurosuke.png":"a50f","./ghibli/mei.jpg":"7ac3","./ghibli/ponyo.png":"ad71","./ghibli/shizuku.jpg":"dd05","./ghibli/tombo.jpg":"f5b4","./ghibli/totoro.jpg":"2f74","./ghibli/totoro.png":"692b","./ghibli/totoro2.png":"235b","./ghibli/totoro3.png":"cfad"};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}o.keys=function(){return Object.keys(i)},o.resolve=a,e.exports=o,o.id="1771"},"1b27":function(e,t,n){},"1edc":function(e,t,n){},"235b":function(e,t,n){e.exports=n.p+"img/totoro2.138fc938.png"},"2f74":function(e,t,n){e.exports=n.p+"img/totoro.9b8cd921.jpg"},"51f2":function(e,t,n){"use strict";n("e146")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23"),o=(n("5363"),n("98c5"),n("afc9")),a=n("81c6"),c=n("0047"),s=Object(o["a"])({components:a,directives:c}),r=n("6aae");function u(e,t,n,o,a,c){var s=Object(i["D"])("router-view"),r=Object(i["D"])("v-main"),u=Object(i["D"])("v-app");return Object(i["y"])(),Object(i["h"])(u,null,{default:Object(i["M"])((function(){return[Object(i["k"])(r,null,{default:Object(i["M"])((function(){return[Object(i["k"])(s)]})),_:1})]})),_:1})}var l={name:"App",components:{},data:function(){return{}}};n("6bb4");l.render=u;var d=l,p=n("6c02");function b(e,t,n,o,a,c){var s=Object(i["D"])("question");return Object(i["y"])(),Object(i["h"])(s,{msg:e.question[e.question_index].msg,image:e.question[e.question_index].image,ans1:e.question[e.question_index].ans1,ans2:e.question[e.question_index].ans2,onNext:c.next},null,8,["msg","image","ans1","ans2","onNext"])}function m(e){switch(e){case"/1/1/1/1":case"/1/1/1/2":case"/1/1/1/3":case"/1/1/1/4":return 1;default:return e}}var g={name:"HelloWorld",methods:{next:function(e){if(this.question_index==this.question.length){var t=m(this.answer);alert(t)}else this.question_index++,this.answer+="/"+e}},data:function(){return{answer:"",question_index:0,question:[{msg:"msg 1",image:"1.png",ans1:"yes",ans2:"no"},{msg:"msg 2",image:"2.png",ans1:"yes",ans2:"no"},{msg:"msg 3",image:"3.png",ans1:"yes",ans2:"no"},{msg:"msg 4",image:"4.png",ans1:"yes",ans2:"no"}]}}};g.render=b;var f=g,h={class:"common-wrapper-outer"},j={class:"common-wrapper-inner ghibli-queryset"};function O(e,t,n,o,a,c){var s=Object(i["D"])("GhibliQuery");return Object(i["y"])(),Object(i["h"])("div",h,[Object(i["k"])("div",j,[Object(i["k"])(s,{image:o.image,ask:e.question[e.question_index].ask,ans1:e.question[e.question_index].ans1,ans2:e.question[e.question_index].ans2,total:e.totalCnt,onNext:c.next},null,8,["image","ask","ans1","ans2","total","onNext"])])])}function k(e){switch(e){case"/1/2/1/2/1/2":case"/1/2/1/2/2/2":return"1";case"/1/1/1/1":case"/1/1/1/2":return 1;default:return 1}}var v={name:"QuerySet",setup:function(){var e="https://img.icons8.com/color/480/000000/totoro.png";return{image:e}},methods:{next:function(e){if(this.question_index==this.question.length-1){this.answer+="/"+e;var t=k(this.answer);console.log(t),this.$router.push({path:"/ghibli/shizuku"})}else this.question_index++,this.answer+="/"+e}},data:function(){return{totalCnt:6,answer:"",question_index:0,question:[{ask:"질문입니당",ans1:"답변1",ans2:"답변2"},{ask:"질문입니당",ans1:"답변1",ans2:"답변2"},{ask:"질문입니당",ans1:"답변1",ans2:"답변2"},{ask:"질문입니당",ans1:"답변1",ans2:"답변2"},{ask:"질문입니당",ans1:"답변1",ans2:"답변2"},{ask:"질문입니당",ans1:"답변1",ans2:"답변2"}]}}};n("72d2");v.render=O;var y=v,w={id:"question-ask"},x=Object(i["k"])("span",{id:"question-ask-big"},"{",-1),q=Object(i["k"])("span",{id:"question-ask-big"},"}",-1);function _(e,t,n,o,a,c){var s=Object(i["D"])("query-button");return Object(i["y"])(),Object(i["h"])(i["a"],null,[Object(i["k"])("div",{class:"ldBar no-label",id:"mybar",style:{width:"30vh",height:"30vh"},"data-aspect-ratio":"none","data-type":"fill","data-img":n.image,"data-value":"0"},null,8,["data-img"]),Object(i["k"])("p",w,[x,Object(i["j"])("      "+Object(i["F"])(n.ask)+"      ",1),q]),Object(i["k"])(s,{class:"questionOnlyAnsBtn",onClick:t[1]||(t[1]=function(e){return c.select(1)}),content:n.ans1},null,8,["content"]),Object(i["k"])(s,{class:"questionOnlyAnsBtn",onClick:t[2]||(t[2]=function(e){return c.select(2)}),content:n.ans2},null,8,["content"])],64)}n("a9e3");function S(e,t,n,o,a,c){return Object(i["y"])(),Object(i["h"])("button",{class:"query-button",onMouseover:t[1]||(t[1]=function(){return e.mouseover&&e.mouseover.apply(e,arguments)}),onMouseleave:t[2]||(t[2]=function(){return e.mouseleave&&e.mouseleave.apply(e,arguments)})},Object(i["F"])(n.content),33)}var D={name:"QueryButton",props:{content:String}};n("d32a");D.render=S;var C=D,M={components:{QueryButton:C},name:"Query",props:{ask:String,ans1:String,ans2:String,image:String,total:Number},data:function(){return{current:0}},methods:{select:function(e){this.$emit("next",e),this.current=this.current+1;var t=new window.ldBar("#mybar");t.set(100*this.current/this.total)}}};n("0e85");M.render=_;var N=M,F=(n("b0c0"),{class:"common-wrapper-outer common-overflow"}),B={id:"ghibli-answer-image"},L={id:"speak"},P=Object(i["i"])('<p id="ghibli-answer-desc"><img width="20" src="https://cdn.icon-icons.com/icons2/1465/PNG/512/536bread_100562.png"> 테스트 작성입니다 </p><p id="ghibli-answer-desc"><img width="20" src="https://cdn.icon-icons.com/icons2/1465/PNG/512/536bread_100562.png"> 테스트 작성입니다 </p><p id="ghibli-answer-desc"><img width="20" src="https://cdn.icon-icons.com/icons2/1465/PNG/512/536bread_100562.png"> 테스트 작성입니다 </p><p id="ghibli-answer-desc"><img width="20" src="https://cdn.icon-icons.com/icons2/1465/PNG/512/536bread_100562.png"> 테스트 작성입니다 </p>',4);function Q(e,t,o,a,c,s){var r=Object(i["D"])("social-button");return Object(i["y"])(),Object(i["h"])("div",F,[Object(i["k"])("div",{class:"common-wrapper-inner common-overflow-inner",style:{backgroundColor:a.color}},[Object(i["k"])("p",null,Object(i["F"])(a.name),1),Object(i["k"])("div",B,[Object(i["k"])("img",{src:n("1771")("./".concat(a.image)),alt:"test image"},null,8,["src"])]),Object(i["k"])("q",null,[Object(i["k"])("p",L,"      "+Object(i["F"])(a.bigDesc)+"      ",1)]),Object(i["k"])("p",null,Object(i["F"])(a.smallDesc),1),P,Object(i["k"])(r,{title:e.title},null,8,["title"])],4)])}var z={name:"Answer",data:function(){return{title:"나랑 비슷한 지브리 캐릭터는?"}},props:{id:String},setup:function(e){var t="",n="",i="",o="",a="#ffffff";return"shizuku"==e.id?(t="test",n="ghibli/shizuku.jpg",i="그래 나도 하면 되는거야",o="ttest",a="#d29693"):"mei"==e.id?(n="ghibli/mei.jpg",a="#e2d39c"):"totoro"==e.id?(n="ghibli/totoro.jpg",a="#ced9cb"):"kiki"==e.id?(n="ghibli/kiki.jpg",a="#aebdc2"):"tombo"==e.id&&(n="ghibli/tombo.jpg",a="#aea09d"),{name:t,image:n,bigDesc:i,smallDesc:o,color:a}}};n("91eb0");z.render=Q;var A=z;function G(e,t,n,o,a,c){var s=Object(i["D"])("question");return Object(i["y"])(),Object(i["h"])(s,{msg:e.question[e.question_index].msg,image:e.question[e.question_index].image,ans1:e.question[e.question_index].ans1,ans2:e.question[e.question_index].ans2,total:e.totalCnt,onNext:c.next},null,8,["msg","image","ans1","ans2","total","onNext"])}function T(e){switch(e){case"/1/1/1/1":case"/1/1/1/2":case"/1/1/1/3":case"/1/1/1/4":return 1;default:return e}}var U={name:"Query",methods:{next:function(e){if(this.question_index==this.question.length){var t=T(this.answer);alert(t)}else this.question_index++,this.answer+="/"+e}},data:function(){return{totalCnt:4,answer:"",question_index:0,question:[{msg:"msg 1",ans1:"yes",ans2:"no"},{msg:"msg 2",ans1:"yes",ans2:"no"},{msg:"msg 3",ans1:"yes",ans2:"no"},{msg:"msg 4",ans1:"yes",ans2:"no"}]}}};U.render=G;var V=U;function $(e,t,o,a,c,s){return Object(i["y"])(),Object(i["h"])("div",null,[Object(i["k"])("p",null,Object(i["F"])(a.name),1),Object(i["k"])("img",{src:n("1771")("./".concat(a.image)),alt:"test image"},null,8,["src"]),Object(i["k"])("p",null,Object(i["F"])(a.bigDesc),1),Object(i["k"])("p",null,Object(i["F"])(a.smallDesc),1)])}var E={name:"Answer",props:{id:String},setup:function(e){var t="",n="logo.png",i="",o="";return"aaa"==e.id&&(t="녹턴",n="1.png",i="불끄는걸 좋아함",o="허허허허"),{name:t,image:n,bigDesc:i,smallDesc:o}}};n("51f2");E.render=$;var I=E,H={class:"questionMsg"},J=Object(i["j"])(" mdi-checkbox-marked-circle "),K=Object(i["j"])(" mdi-cancel "),W=Object(i["k"])("div",{class:"ldBar no-label",id:"mybar",style:{width:"80%"},"data-aspect-ratio":"none","data-value":"0"},null,-1);function R(e,t,n,o,a,c){var s=Object(i["D"])("v-icon"),r=Object(i["D"])("v-btn");return Object(i["y"])(),Object(i["h"])("div",null,[Object(i["k"])("p",H,Object(i["F"])(n.msg),1),Object(i["k"])("div",null,[Object(i["k"])(r,{class:"questionBtn",onClick:t[1]||(t[1]=function(e){return c.select(1)}),color:"primary",dark:""},{default:Object(i["M"])((function(){return[Object(i["j"])(Object(i["F"])(n.ans1)+" ",1),Object(i["k"])(s,{dark:"",right:""},{default:Object(i["M"])((function(){return[J]})),_:1})]})),_:1})]),Object(i["k"])("div",null,[Object(i["k"])(r,{class:"questionBtn",onClick:t[2]||(t[2]=function(e){return c.select(2)}),color:"red",dark:""},{default:Object(i["M"])((function(){return[Object(i["j"])(Object(i["F"])(n.ans2)+" ",1),Object(i["k"])(s,{dark:"",right:""},{default:Object(i["M"])((function(){return[K]})),_:1})]})),_:1})]),W])}var X={name:"Question",props:{msg:String,ans1:String,ans2:String,total:Number},data:function(){return{current:0}},methods:{select:function(e){this.$emit("next",e),this.current=this.current+1;var t=new window.ldBar("#mybar");t.set(100*this.current/this.total)}}};n("b30b");X.render=R;var Y=X,Z=(n("9911"),{class:"common-wrapper-outer"}),ee={class:"common-wrapper-inner"},te={id:"foreground"},ne={class:"th-wrapper"},ie={class:"th-image"},oe={class:"th-name"},ae=Object(i["k"])("p",{id:"countText"}," 참여한 사람 ",-1),ce={id:"count"};function se(e,t,o,a,c,s){var r=Object(i["D"])("Particles"),u=Object(i["D"])("social-button");return Object(i["y"])(),Object(i["h"])("div",Z,[Object(i["k"])("div",ee,[Object(i["k"])(r,{id:"tsparticles",particlesInit:e.particlesInit,particlesLoaded:e.particlesLoaded,options:{background:{color:{value:"#bfcdcc"}},fpsLimit:60,interactivity:{detectsOn:"canvas",events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!0,mode:"repulse"},resize:!0},modes:{bubble:{distance:400,duration:2,opacity:.8,size:40},push:{quantity:4},repulse:{distance:80,duration:.4}}},particles:{color:{value:"#ffffff"},rotate:{value:0,random:!0,direction:"clockwise",animation:{enable:!0,speed:5,sync:!1}},links:{color:"#ffffff",distance:150,enable:!0,opacity:0,width:0},collisions:{enable:!0},move:{direction:"none",enable:!0,outMode:"bounce",random:!1,speed:3,straight:!1},number:{density:{enable:!0,value_area:800},value:80},opacity:{random:{minimumValue:.1,enable:!0},value:1,animation:{count:0,enable:!0,speed:1,sync:!1,destroy:e.none,minimumValue:.1,startValue:e.random}},shape:{type:"image",options:{image:[{src:"https://www.iconeasy.com/icon/png/System/Anna%20Sui%20inspired%20iconset%20PLUS/Makkuro%20Kurosuke.png"},{}]}},size:{random:{minimumValue:5,enable:!0},value:20}},detectRetina:!0}},null,8,["particlesInit","particlesLoaded","options"]),Object(i["k"])("div",te,[Object(i["k"])("div",ne,[Object(i["k"])("div",ie,[Object(i["k"])("img",{src:n("1771")("./".concat(a.image)),alt:"test image"},null,8,["src"])]),Object(i["k"])("div",oe,[Object(i["k"])("p",null,Object(i["F"])(a.title),1)])]),Object(i["k"])("a",{className:"bn3",onClick:t[1]||(t[1]=function(t){return e.$router.push({path:"".concat(a.link)})})},"시작하기"),ae,Object(i["k"])("p",ce,Object(i["F"])(a.count),1),Object(i["k"])(u,{title:a.title},null,8,["title"])])])])}var re=n("ec30"),ue=n.n(re),le={class:"footer-social-icons"},de={class:"social-icons"},pe=Object(i["k"])("i",{class:"fa-kakao"},"kakaotalk",-1),be=Object(i["k"])("i",{class:"fa-copy"},"copylink",-1);function me(e,t,n,o,a,c){return Object(i["y"])(),Object(i["h"])("div",le,[Object(i["k"])("ul",de,[Object(i["k"])("li",{onClick:t[1]||(t[1]=function(){return c.kakaoLink&&c.kakaoLink.apply(c,arguments)}),class:"social-icon"},[pe]),Object(i["k"])("li",{onClick:t[2]||(t[2]=function(){return c.copyLink&&c.copyLink.apply(c,arguments)}),class:"social-icon"},[be])])])}var ge={name:"SocialButton",props:{title:String},methods:{copyLink:function(){var e=document.createElement("textarea");document.body.appendChild(e),e.value=window.location.href,e.select(),document.execCommand("copy"),document.body.removeChild(e),alert("복사 되었습니다.")},kakaoLink:function(){window.Kakao.Link.sendDefault({objectType:"feed",content:{title:this.title,description:"",imageUrl:"https://www.ghibli.jp/gallery/mimi001.jpg",link:{mobileWebUrl:window.location.href,webUrl:window.location.href}}})}}};n("66c1");ge.render=me;var fe=ge,he={components:{SocialButton:fe},name:"Theme",props:{theme:String},setup:function(e){var t="logo.png",n="",o="",a=Object(i["C"])(0);return"ghibli"==e.theme&&(t="ghibli/totoro3.png",n="나랑 비슷한 지브리 캐릭터는?",o="/q/ghibli"),ue.a.hit("meansoup.github.io","test").then((function(e){console.log(e.value),a.value=e.value})),{image:t,title:n,link:o,count:a}},methods:{}};n("01a5");he.render=se;var je=he,Oe=[{path:"/hello",component:f},{path:"/q/ghibli",component:y},{path:"/lol",component:V},{path:"/ghibli/:id",component:A,props:!0},{path:"/lol/:id",component:I,props:!0},{path:"/:theme",component:je,props:!0}],ke=Object(p["a"])({history:Object(p["b"])(),routes:Oe}),ve=Object(i["g"])(d);ve.use(ke),ve.use(s),ve.use(r["a"]),ve.component("Question",Y),ve.component("GhibliQuery",N),ve.component("SocialButton",fe),ve.mount("#app")},"636d":function(e,t,n){},"66c1":function(e,t,n){"use strict";n("66d5")},"66d5":function(e,t,n){},"67e1":function(e,t,n){},"692b":function(e,t,n){e.exports=n.p+"img/totoro.d6f361c5.png"},"6b39":function(e,t,n){},"6bb4":function(e,t,n){"use strict";n("6b39")},"72d2":function(e,t,n){"use strict";n("738e")},"738e":function(e,t,n){},"7ac3":function(e,t,n){e.exports=n.p+"img/mei.15ba7e99.jpg"},"8c18":function(e,t,n){},"91eb0":function(e,t,n){"use strict";n("1b27")},a37d:function(e,t,n){e.exports=n.p+"img/kiki.fd520556.jpg"},a50f:function(e,t,n){e.exports=n.p+"img/kurosuke.46fe793e.png"},ad71:function(e,t,n){e.exports=n.p+"img/ponyo.2d22dd93.png"},b30b:function(e,t,n){"use strict";n("1edc")},cfad:function(e,t,n){e.exports=n.p+"img/totoro3.810aa810.png"},d32a:function(e,t,n){"use strict";n("8c18")},dd05:function(e,t,n){e.exports=n.p+"img/shizuku.f000f963.jpg"},e146:function(e,t,n){},f5b4:function(e,t,n){e.exports=n.p+"img/tombo.d43efdec.jpg"}});
//# sourceMappingURL=app.511f60b3.js.map