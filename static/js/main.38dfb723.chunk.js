(this.webpackJsonphashlips_nft_minting_dapp=this.webpackJsonphashlips_nft_minting_dapp||[]).push([[0],{252:function(e,t){},261:function(e,t){},279:function(e,t){},281:function(e,t){},300:function(e,t){},301:function(e,t){},364:function(e,t){},366:function(e,t){},38:function(e,t,c){},399:function(e,t){},401:function(e,t){},402:function(e,t){},407:function(e,t){},409:function(e,t){},415:function(e,t){},417:function(e,t){},430:function(e,t){},442:function(e,t){},445:function(e,t){},450:function(e,t){},458:function(e,t){},467:function(e,t){},469:function(e,t){},539:function(e,t,c){},540:function(e,t,c){"use strict";c.r(t);var n,i,s,a,o,r,l,d,j,b,m=c(1),u=c(90),x=c.n(u),h=c(14),O=c.n(h),p=c(47),v=c(21),g=c(15),f=c(63),N=c(74),w=c.n(N),C=c(227),T=c.n(C),y=c(75),A=c(228),E=c(20),S={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(E.a)(Object(E.a)({},S),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(E.a)(Object(E.a)({},S),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(E.a)(Object(E.a)({},e),{},{account:t.payload.account});default:return e}},I={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(E.a)(Object(E.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{loading:!1,totalSupply:t.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(E.a)(Object(E.a)({},I),{},{loading:!1,error:!0,errorMsg:t.payload});default:return e}},q=Object(y.b)({blockchain:k,data:L}),_=[A.a],M=Object(y.c)(y.a.apply(void 0,_)),R=Object(y.d)(q,M),U=function(e){return{type:"CHECK_DATA_FAILED",payload:e}},D=function(){return function(){var e=Object(p.a)(O.a.mark((function e(t){var c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),e.prev=1,e.next=4,R.getState().blockchain.smartContract.methods.totalSupply().call();case 4:c=e.sent,t({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:c}}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),t(U("Could not load data from contract."));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},B=function(e){return{type:"CONNECTION_FAILED",payload:e}},F=function(){return function(){var e=Object(p.a)(O.a.mark((function e(t){var c,n,i,s,a,o,r,l,d;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CONNECTION_REQUEST"}),e.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return c=e.sent,e.next=6,c.json();case 6:return n=e.sent,e.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return i=e.sent,e.next=12,i.json();case 12:if(s=e.sent,a=window,o=a.ethereum,!(o&&o.isMetaMask)){e.next=33;break}return w.a.setProvider(o),r=new T.a(o),e.prev=18,e.next=21,o.request({method:"eth_requestAccounts"});case 21:return l=e.sent,e.next=24,o.request({method:"net_version"});case 24:e.sent==s.NETWORK.ID?(d=new w.a(n,s.CONTRACT_ADDRESS),t({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:d,web3:r}}),o.on("accountsChanged",(function(e){t(P(e[0]))})),o.on("chainChanged",(function(){window.location.reload()}))):t(B("Change network to ".concat(s.NETWORK.NAME,"."))),e.next=31;break;case 28:e.prev=28,e.t0=e.catch(18),t(B("Something went wrong."));case 31:e.next=34;break;case 33:t(B("Install Metamask."));case 34:case"end":return e.stop()}}),e,null,[[18,28]])})));return function(t){return e.apply(this,arguments)}}()},P=function(e){return function(){var t=Object(p.a)(O.a.mark((function t(c){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c({type:"UPDATE_ACCOUNT",payload:{account:e}}),c(D());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},K=c(16),H=(K.a.div(n||(n=Object(g.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),K.a.div(i||(i=Object(g.a)(["\n  height: .45vw;\n  width: .45vw;\n"])))),W=K.a.div(s||(s=Object(g.a)(["\n  height: .9vw;\n  width: .9vw\n"]))),Y=K.a.div(a||(a=Object(g.a)(["\n  height: 1.35vw;\n  width: 1.35vw;\n"]))),z=K.a.div(o||(o=Object(g.a)(["\n  height: 1.8vw;\n  width: 1.8vw;\n"]))),G=K.a.div(r||(r=Object(g.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  height:40vw;\n"])),(function(e){var t=e.flex;return t||0}),(function(e){var t=e.fd;return t||"column"}),(function(e){var t=e.jc;return t||"flex-start"}),(function(e){var t=e.ai;return t||"flex-start"}),(function(e){return e.test?"pink":"none"}),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),Q=K.a.p(l||(l=Object(g.a)(["\n  color: var(--primary-text);\n  font-size: 1.23vw;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),X=(K.a.p(d||(d=Object(g.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),K.a.p(j||(j=Object(g.a)(["\n  color: var(--primary-text);\n  font-size: .9vw;\n  line-height: 1.6;\n"])))),J=(K.a.div(b||(b=Object(g.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),c(38),c(60),c(0));function V(){return Object(J.jsxs)("div",{id:"team",className:"timeline",children:[Object(J.jsx)("span",{className:"timelineText",children:"MEET THE TEAM"}),Object(J.jsxs)("div",{className:"teamGrid",children:[Object(J.jsx)("div",{}),Object(J.jsx)("div",{}),Object(J.jsx)("div",{}),Object(J.jsx)("div",{}),Object(J.jsx)("div",{}),Object(J.jsx)("div",{}),Object(J.jsx)("div",{children:"Thing 1"}),Object(J.jsx)("div",{children:"Thing 2"}),Object(J.jsx)("div",{children:"Thing 3"}),Object(J.jsx)("div",{children:"Thing 4"}),Object(J.jsx)("div",{children:"Thing 5"}),Object(J.jsx)("div",{children:"Thing 6"}),Object(J.jsx)("div",{children:"Role"}),Object(J.jsx)("div",{children:"Role"}),Object(J.jsx)("div",{children:"Role"}),Object(J.jsx)("div",{children:"Role"}),Object(J.jsx)("div",{children:"Role"}),Object(J.jsx)("div",{children:"Role"})]})]})}function Z(){return Object(J.jsx)("div",{className:"social",children:Object(J.jsxs)("ul",{children:[Object(J.jsx)("li",{children:Object(J.jsxs)("a",{href:"",children:[Object(J.jsx)("div",{class:"facebook"}),Object(J.jsx)("span",{children:"Instagram"})]})}),Object(J.jsx)("li",{children:Object(J.jsxs)("a",{href:"",children:[Object(J.jsx)("div",{class:"twitter"}),Object(J.jsx)("span",{children:"Twitter"})]})}),Object(J.jsx)("li",{children:Object(J.jsxs)("a",{href:"",children:[Object(J.jsx)("div",{class:"telegram"}),Object(J.jsx)("span",{children:"Telegram"})]})}),Object(J.jsx)("li",{children:Object(J.jsxs)("a",{href:"",children:[Object(J.jsx)("div",{class:"discord"}),Object(J.jsx)("span",{children:"Discord"})]})})]})})}function $(){return Object(J.jsxs)("div",{id:"about",children:[Object(J.jsx)("div",{className:"about",children:Object(J.jsx)("span",{children:"ABOUT"})}),Object(J.jsxs)("div",{className:"aboutGrid",children:[Object(J.jsxs)("div",{className:"A1",children:[Object(J.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),Object(J.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}),Object(J.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}),Object(J.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),Object(J.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),Object(J.jsx)("div",{className:"A2",children:Object(J.jsx)("img",{className:"portraits",alt:"about1",src:"/config/images/45RT.gif"})})]})]})}function ee(){return Object(J.jsxs)("div",{id:"icons",children:[Object(J.jsx)("div",{className:"icons",children:Object(J.jsx)("span",{children:"ICONS"})}),Object(J.jsxs)("div",{className:"iconGrid",children:[Object(J.jsxs)("div",{className:"icon",children:[Object(J.jsx)("img",{className:"portraits1",alt:"nft1",src:"/config/images/Avocado.png"}),Object(J.jsx)("div",{className:"iconNFT",children:Object(J.jsxs)("div",{className:"labelBox",children:[Object(J.jsx)("div",{className:"top",children:Object(J.jsx)("p",{children:"Sample Times"})}),Object(J.jsx)("p",{className:"bottom",children:"Collection"})]})})]}),Object(J.jsxs)("div",{className:"icon",children:[Object(J.jsx)("img",{className:"portraits1",alt:"nft1",src:"/config/images/Plum.png"}),Object(J.jsx)("div",{className:"iconNFT",children:Object(J.jsxs)("div",{className:"labelBox",children:[Object(J.jsx)("div",{className:"top",children:Object(J.jsx)("p",{children:"Sample Times"})}),Object(J.jsx)("p",{className:"bottom",children:"Collection"})]})})]}),Object(J.jsxs)("div",{className:"icon",children:[Object(J.jsx)("img",{className:"portraits1",alt:"nft1",src:"/config/images/Teal.png"}),Object(J.jsx)("div",{className:"iconNFT",children:Object(J.jsxs)("div",{className:"labelBox",children:[Object(J.jsx)("div",{className:"top",children:Object(J.jsx)("p",{children:"Sample Times"})}),Object(J.jsx)("p",{className:"bottom",children:"Collection"})]})})]}),Object(J.jsxs)("div",{className:"icon",children:[Object(J.jsx)("img",{className:"portraits1",alt:"nft1",src:"/config/images/Bluey.png"}),Object(J.jsx)("div",{className:"iconNFT",children:Object(J.jsxs)("div",{className:"labelBox",children:[Object(J.jsx)("div",{className:"top",children:Object(J.jsx)("p",{children:"Sample Times"})}),Object(J.jsx)("p",{className:"bottom",children:"Collection"})]})})]}),Object(J.jsxs)("div",{className:"profile",children:[Object(J.jsx)("p",{children:"Icon #1"}),Object(J.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "})]}),Object(J.jsxs)("div",{className:"profile",children:[Object(J.jsx)("p",{children:"Icon #2"}),Object(J.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "})]}),Object(J.jsxs)("div",{className:"profile",children:[Object(J.jsx)("p",{children:"Icon #3"}),Object(J.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "})]}),Object(J.jsxs)("div",{className:"profile",children:[Object(J.jsx)("p",{children:"Icon #4"}),Object(J.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "})]}),Object(J.jsxs)("div",{className:"icon",children:[Object(J.jsx)("img",{className:"portraits1",alt:"nft1",src:"/config/images/Canvas.png"}),Object(J.jsx)("div",{className:"iconNFT",children:Object(J.jsxs)("div",{className:"labelBox",children:[Object(J.jsx)("div",{className:"top",children:Object(J.jsx)("p",{children:"Sample Times"})}),Object(J.jsx)("p",{className:"bottom",children:"Collection"})]})})]}),Object(J.jsxs)("div",{className:"icon",children:[Object(J.jsx)("img",{className:"portraits1",alt:"nft1",src:"/config/images/Indigo.png"}),Object(J.jsx)("div",{className:"iconNFT",children:Object(J.jsxs)("div",{className:"labelBox",children:[Object(J.jsx)("div",{className:"top",children:Object(J.jsx)("p",{children:"Sample Times"})}),Object(J.jsx)("p",{className:"bottom",children:"Collection"})]})})]}),Object(J.jsxs)("div",{className:"icon",children:[Object(J.jsx)("img",{className:"portraits1",alt:"nft1",src:"/config/images/Peach.png"}),Object(J.jsx)("div",{className:"iconNFT",children:Object(J.jsxs)("div",{className:"labelBox",children:[Object(J.jsx)("div",{className:"top",children:Object(J.jsx)("p",{children:"Sample Times"})}),Object(J.jsx)("p",{className:"bottom",children:"Collection"})]})})]}),Object(J.jsxs)("div",{className:"icon",children:[Object(J.jsx)("img",{className:"portraits1",alt:"nft1",src:"/config/images/Magenta.png"}),Object(J.jsx)("div",{className:"iconNFT",children:Object(J.jsxs)("div",{className:"labelBox",children:[Object(J.jsx)("div",{className:"top",children:Object(J.jsx)("p",{children:"Sample Times"})}),Object(J.jsx)("p",{className:"bottom",children:"Collection"})]})})]}),Object(J.jsxs)("div",{className:"profile",children:[Object(J.jsx)("p",{children:"Icon #5"}),Object(J.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "})]}),Object(J.jsxs)("div",{className:"profile",children:[" ",Object(J.jsx)("p",{children:"Icon #6"}),Object(J.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  "})]}),Object(J.jsxs)("div",{className:"profile",children:[Object(J.jsx)("p",{children:"Icon #7"}),Object(J.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "})]}),Object(J.jsxs)("div",{className:"profile",children:[Object(J.jsx)("p",{children:"Icon #8"}),Object(J.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "})]})]})]})}function te(){return Object(J.jsxs)("div",{id:"roadmap",className:"roadCont",children:[Object(J.jsx)("span",{className:"roadmapText",children:"ROADMAP"}),Object(J.jsxs)("div",{className:"roadGrid",children:[Object(J.jsx)("div",{className:"R1",children:Object(J.jsx)("img",{src:"/config/images/copy_phase_1.png"})}),Object(J.jsx)("div",{className:"R2",children:Object(J.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "})}),Object(J.jsx)("div",{className:"R2",children:Object(J.jsx)("p",{className:"phase2",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "})}),Object(J.jsx)("div",{className:"R1",children:Object(J.jsx)("img",{src:"/config/images/copy_phase_2.png"})}),Object(J.jsx)("div",{className:"R1",children:Object(J.jsx)("img",{src:"/config/images/copy_phase_3.png"})}),Object(J.jsxs)("div",{className:"R2",children:[" ",Object(J.jsx)("p",{className:"phase2",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),Object(J.jsxs)("div",{className:"R2",children:[" ",Object(J.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),Object(J.jsx)("div",{className:"R1",children:Object(J.jsx)("img",{src:"/config/images/copy_phase_4.png"})})]})]})}function ce(){return Object(J.jsxs)("div",{id:"house",children:[Object(J.jsx)("div",{className:"house",children:Object(J.jsx)("span",{children:"House of Holders"})}),Object(J.jsxs)("div",{className:"houseBox",children:[Object(J.jsxs)("p",{children:["Lorens are functional: ",Object(J.jsx)("br",{}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "]}),Object(J.jsxs)("p",{children:["What makes it EQUAL and ENGAGING?: ",Object(J.jsx)("br",{}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "]}),Object(J.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})]})}function ne(){return Object(J.jsx)("div",{children:Object(J.jsxs)("div",{id:"home",className:"mainGraphic",children:[Object(J.jsx)("div",{className:"mainImage"}),Object(J.jsx)("div",{className:"logo2"}),Object(J.jsx)("div",{className:"titleText",children:Object(J.jsx)("p",{children:"Untitled"})}),Object(J.jsx)("div",{className:"titleMemo",children:Object(J.jsx)("p",{children:"This webpage was formerly used in a recent NFT project that I contributed to.  I modified the repository based on HashLips with his permission.  Although I didn't create the blockchain-based function from scratch, I coded the front-end cosmetics with React from scratch based on our web designer.  I also was able figure out how to convert the text of connect wallet status."})}),Object(J.jsxs)("div",{className:"goofyNames",children:[Object(J.jsx)("p",{children:"Icon #1"}),Object(J.jsx)("p",{children:"Icon #2"}),Object(J.jsx)("p",{children:"Icon #3"}),Object(J.jsx)("p",{children:"Icon #4"}),Object(J.jsx)("p",{children:"Icon #5"}),Object(J.jsx)("p",{children:"Icon #6"}),Object(J.jsx)("p",{children:"Icon #7"})]}),Object(J.jsx)("div",{className:"two"})]})})}function ie(){return Object(J.jsxs)("div",{className:"end",children:[Object(J.jsx)("img",{className:"endImage",src:"/config/images/Canvas.png"}),Object(J.jsx)("p",{children:"\xa9 Copyrights 2022 Sample Times"})]})}var se,ae,oe,re,le,de=c(64),je=c(22),be=K.a.button(se||(se=Object(g.a)(["\n  padding: .59vw;\n  margin-top:-.54vw;\n  font-size:.8vw;\n  border: none;\n  border-radius:.16vw;\n  background-color: var(--secondary);\n  padding: .54vw;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 10.8vw;\n  cursor: pointer;\n  box-shadow: 0px .324vw 0px -.108px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px .324vw 0px -.108px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px .324vw 0px -.108px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),me=K.a.button(ae||(ae=Object(g.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),ue=(K.a.img(oe||(oe=Object(g.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),K.a.img(re||(re=Object(g.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 4px dashed var(--secondary);\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),K.a.a(le||(le=Object(g.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"]))));var xe=function(){var e=Object(f.b)(),t=Object(f.c)((function(e){return e.blockchain})),c=Object(f.c)((function(e){return e.data})),n=Object(m.useState)(!1),i=Object(v.a)(n,2),s=i[0],a=(i[1],Object(m.useState)("Click buy to mint your NFT.")),o=Object(v.a)(a,2),r=o[0],l=(o[1],Object(m.useState)(1)),d=Object(v.a)(l,2),j=d[0],b=d[1],u=Object(m.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),x=Object(v.a)(u,2),h=x[0],g=x[1],N=function(){""!==t.account&&null!==t.smartContract&&e(D(t.account))},w=function(){var e=Object(p.a)(O.a.mark((function e(){var t,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,g(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(m.useEffect)((function(){w()}),[]),Object(m.useEffect)((function(){N()}),[t.account]);var C=Object(m.useState)(!1),T=Object(v.a)(C,2),y=T[0],A=T[1];window.addEventListener("scroll",(function(){window.scrollY>=10?A(!0):A(!1)}));var E,S,k=Object(m.useState)(!1),I=Object(v.a)(k,2),L=I[0],q=I[1],_=function(){console.log(L),q(!L)},M=Object(m.useState)(!1),R=Object(v.a)(M,2),U=R[0],B=R[1];return Object(J.jsx)(de.a,{children:Object(J.jsxs)("div",{className:"main",children:[Object(J.jsxs)("div",{className:"secondNav",children:[Object(J.jsx)("div",{className:L?"mobileButton1":"mobileButton",onClick:_,children:Object(J.jsxs)("ul",{children:[Object(J.jsx)("li",{}),Object(J.jsx)("li",{}),Object(J.jsx)("li",{})]})}),Object(J.jsxs)("div",{className:L?"navbarMobile":"navbarMobile1",children:[Object(J.jsxs)("div",{className:"topMobileNav",children:[Object(J.jsx)(je.a,{to:"#home",children:Object(J.jsx)("img",{style:{width:"65vw",height:"32vw",marginLeft:"13vw",marginTop:"-3vw"},src:"config/images/Canvas.png"})}),Object(J.jsx)("div",{className:L?"mobileButton1":"mobileButton",onClick:_,children:Object(J.jsxs)("ul",{children:[Object(J.jsx)("li",{}),Object(J.jsx)("li",{}),Object(J.jsx)("li",{})]})})]}),Object(J.jsxs)("ul",{children:[Object(J.jsx)(je.a,{className:"link2",to:"#about",children:"ABOUT"}),Object(J.jsx)(je.a,{className:"link2",to:"#icons",children:"ICONS"}),Object(J.jsx)(je.a,{className:"link2",to:"#house",children:"HOUSE OF HOLDERS"}),Object(J.jsx)(je.a,{className:"link2",to:"#roadmap",children:"ROADMAP"}),Object(J.jsx)(je.a,{className:"link2",to:"#team",children:"TEAM"}),Object(J.jsx)("li",{className:"link3",children:Object(J.jsx)("button",{className:"metamaskMobile",onClick:function(t){t.preventDefault(),e(F()),N()},children:t.account?"CONNECTED":"CONNECT WALLET"})})]})]})]}),Object(J.jsxs)("div",{className:y?"nav active":"nav",children:[Object(J.jsx)(je.a,{className:y?"title2 active":"title2",to:"#home",children:Object(J.jsxs)("div",{children:[" ",Object(J.jsx)("h1",{children:"Untitled"})]})}),Object(J.jsx)("div",{className:"navList",children:Object(J.jsxs)("ul",{children:[Object(J.jsx)("li",{children:Object(J.jsx)(je.a,{className:y?"link active":"link",to:"#about",children:"ABOUT"})}),Object(J.jsx)("li",{children:Object(J.jsx)(je.a,{className:y?"link active":"link",to:"#icons",children:"ICONS"})}),Object(J.jsx)("li",{children:Object(J.jsx)(je.a,{className:y?"link active":"link",to:"#house",children:"HOUSE OF HOLDERS"})}),Object(J.jsx)("li",{children:Object(J.jsx)(je.a,{className:y?"link active":"link",to:"#roadmap",children:"ROADMAP"})}),Object(J.jsx)("li",{children:Object(J.jsx)(je.a,{className:y?"link active":"link",to:"#team",children:"TEAM"})}),Object(J.jsx)("li",{children:Object(J.jsx)(je.a,{className:y?"link active":"link",onClick:function(){B(!U),console.log(U)},to:"#buyContainer",children:"BUY NOW"})}),Object(J.jsxs)("li",{children:[Object(J.jsx)("button",{className:y?"metamask active":"metamask",onClick:function(t){t.preventDefault(),e(F()),N()},children:t.account?"CONNECTED":"CONNECT WALLET"}),""!==t.errorMsg?Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(W,{}),Object(J.jsx)("p",{className:y?"walletInfo active":"walletInfo",children:t.errorMsg})]}):null]})]})}),Object(J.jsx)("span",{className:y?"walletInfo active":"walletInfo",children:t.account})]}),Object(J.jsx)(Z,{}),Object(J.jsx)(ne,{}),Object(J.jsx)($,{}),Object(J.jsx)(ee,{}),Object(J.jsx)(ce,{}),Object(J.jsx)(te,{}),Object(J.jsx)(V,{}),Object(J.jsx)(ie,{}),Object(J.jsxs)("div",{id:"mint",className:U?"mintTab":"noMint",children:[Object(J.jsxs)(G,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:"2vw",borderRadius:24,border:".3vw solid var(--primary)",boxShadow:"0px .4vw .6vw .1vw rgba(0,0,0,0.7)"},children:[Object(J.jsxs)(Q,{style:{textAlign:"center",fontSize:"3.5vw",fontWeight:"bold",color:"var(--accent-text)"},children:[c.totalSupply," / ",h.MAX_SUPPLY]}),Object(J.jsx)(X,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(J.jsx)(ue,{target:"_blank",href:h.SCAN_LINK,children:(E=h.CONTRACT_ADDRESS,S=15,E.length>S?"".concat(E.substring(0,S),"..."):E)})}),Object(J.jsx)(W,{}),Number(c.totalSupply)>=h.MAX_SUPPLY?Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(Q,{style:{textAlign:"center",color:"var(--accent-text)"},children:"The sale has ended."}),Object(J.jsxs)(X,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still find ",h.NFT_NAME," on"]}),Object(J.jsx)(W,{}),Object(J.jsx)(ue,{target:"_blank",href:h.MARKETPLACE_LINK,children:h.MARKETPLACE})]}):Object(J.jsxs)(J.Fragment,{children:[Object(J.jsxs)(Q,{style:{textAlign:"center",color:"var(--accent-text)"},children:["1 ",h.SYMBOL," costs ",h.DISPLAY_COST," ",h.NETWORK.SYMBOL,"."]}),Object(J.jsx)(H,{}),Object(J.jsx)(X,{style:{textAlign:"center",color:"var(--accent-text)"},children:"Excluding gas fees."}),Object(J.jsx)(W,{}),""===t.account||null===t.smartContract?Object(J.jsx)(G,{ai:"center",jc:"center"}):Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(X,{style:{textAlign:"center",color:"var(--accent-text)"},children:r}),Object(J.jsx)(Y,{}),Object(J.jsxs)(G,{ai:"center",jc:"center",fd:"row",children:[Object(J.jsx)(me,{style:{lineHeight:.4},disabled:s?1:0,onClick:function(e){e.preventDefault(),function(){var e=j-1;e<1&&(e=1),b(e)}()},children:"-"}),Object(J.jsx)(Y,{}),Object(J.jsx)(X,{style:{textAlign:"center",color:"var(--accent-text)"},children:j}),Object(J.jsx)(Y,{}),Object(J.jsx)(me,{disabled:s?1:0,onClick:function(e){e.preventDefault(),function(){var e=j+1;e>20&&(e=20),b(e)}()},children:"+"})]}),Object(J.jsx)(W,{}),Object(J.jsx)(G,{ai:"center",jc:"center",fd:"row",children:Object(J.jsx)(be,{disabled:s?1:0,children:s?"BUSY":"BUY"})})]})]}),Object(J.jsx)(z,{}),Object(J.jsxs)(X,{style:{textAlign:"center",color:"var(--primary-text)"},children:["Please make sure you are connected to the right network (",h.NETWORK.NAME," Mainnet) and the correct address. Please note: Once you make the purchase, you cannot undo this action."]}),Object(J.jsx)(W,{}),Object(J.jsxs)(X,{style:{textAlign:"center",color:"var(--primary-text)"},children:["We have set the gas limit to ",h.GAS_LIMIT," for the contract to successfully mint your NFT. We recommend that you don't lower the gas limit."]})]}),Object(J.jsx)(z,{})]}),Object(J.jsx)(z,{})]})})},he=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,544)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),s(e),a(e)}))};c(539);x.a.render(Object(J.jsx)(f.a,{store:R,children:Object(J.jsx)(xe,{})}),document.getElementById("root")),he()},60:function(e,t,c){}},[[540,1,2]]]);
//# sourceMappingURL=main.38dfb723.chunk.js.map