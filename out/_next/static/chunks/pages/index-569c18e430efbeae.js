(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{48312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(88376)}])},90743:function(e,t,n){"use strict";var s=n(37917),a=n(19936),r=n(68764);e.exports={contractAddresses:s,contractABI:a,networkExtraData:r}},88376:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var s=n(47568),a=n(34051),r=n.n(a),i=n(85893),c=n(9008),l=n.n(c),o=n(83078),u=n(67294);n(25675);var d=n(41942),p=n(90743),m=n(97005),x=n(11507);var f=function(){var e=(0,o.Nr)(),t=e.chainId,n=e.isWeb3Enabled,a=parseInt(t),c=a in p.contractAddresses?p.contractAddresses[a][0]:null,l=(0,u.useState)("0"),m=l[0],f=l[1],y=(0,u.useState)("0"),h=(y[0],y[1]),b=(0,u.useState)("0"),j=(b[0],b[1]),N=(0,u.useState)([]),v=(N[0],N[1]),g=(0,d.aa)(),w=(0,o.JX)({abi:p.contractABI,contractAddress:c,functionName:"enterLottery",params:{},msgValue:m}),A=w.runContractFunction,S=w.isLoading,E=w.isFetching,k=(0,o.JX)({abi:p.contractABI,contractAddress:c,functionName:"getParticipationFee",params:{}}).runContractFunction,L=(0,o.JX)({abi:p.contractABI,contractAddress:c,functionName:"getParticipants",params:{}}).runContractFunction,C=(0,o.JX)({abi:p.contractABI,contractAddress:c,functionName:"getNumberOfParticipants",params:{}}).runContractFunction,F=(0,o.JX)({abi:p.contractABI,contractAddress:c,functionName:"getRecentRandomWinner",params:{}}).runContractFunction;function P(){return I.apply(this,arguments)}function I(){return(I=(0,s.Z)(r().mark((function e(){var t,n,s,a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:return t=e.sent.toString(),e.next=5,C();case 5:return n=e.sent.toString(),e.next=8,F();case 8:return s=e.sent.toString(),e.next=11,L();case 11:a=e.sent.toString(),f(t),h(n),j(s),v(a);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(0,u.useEffect)((function(){n&&P()}),[n]);var R=function(){var e=(0,s.Z)(r().mark((function e(t){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.wait(1);case 2:W(t),P();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){g({type:"success",message:"Successfully entered the Lottery",title:"Enter Lottery",position:"topR",icon:"bell"})};return(0,i.jsxs)("header",{className:"grid grid-cols-2 md:grid-cols-5 justify-between items-center p-5",children:[(0,i.jsx)("div",{className:"flex items-center space-x-3",children:(0,i.jsxs)("div",{className:"flex flex-col",children:[(0,i.jsx)("h1",{className:"text-yellow-500 text-lg font-bold text-center",children:"DECENTRALIZED RAPHL"}),(0,i.jsx)("span",{className:"text-stone-300 text-sm text-center",children:"Fair - Transparent - Secure"})]})}),(0,i.jsx)("div",{className:"hidden items-center justify-center md:col-span-3 md:flex",children:(0,i.jsx)("div",{className:"bg-[text-yellow-50] p-4 space-x-2",children:(0,i.jsx)("button",{className:"disabled mt-5 w-full bg-gradient-to-br from-yellow-300 to-stone-800 px-10 py-5 font-semibold rounded-md text-xl selection: text-white shadow-xl disabled:from-gray-500 disabled:to-gray-100 disabled:text-gray-100 disabled:cursor-not-allowed md:hidden",onClick:(0,s.Z)(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A({onSuccess:R,onError:function(e){return console.log(e)}});case 2:case"end":return e.stop()}}),e)}))),disabled:S||E,children:S||E?(0,i.jsx)("div",{className:"mb-6",children:(0,i.jsx)(x.Z,{size:"30",color:"#ca8a04"})}):(0,i.jsx)("div",{children:"Enter Lot"})})})}),(0,i.jsxs)("div",{className:"flex flex-col ml-auto text-right",children:[(0,i.jsx)("div",{className:"ml-auto px-2",children:(0,i.jsx)(d.cg,{moralisAuth:!1})}),(0,i.jsx)("span",{className:""})]})]})};var y=function(){var e=(0,o.Nr)(),t=e.enableWeb3;return e.account,e.isWeb3Enabled,e.isWeb3EnableLoading,function(){var e=(0,s.Z)(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:window.localStorage.setItem("connected","injected");case 3:case"end":return e.stop()}}),e)})))}(),(0,i.jsx)("div",{className:"flex flex-col min-h-screen justify-center items-center text-center",children:(0,i.jsxs)("div",{className:"items-center mb-10",children:[(0,i.jsx)("h1",{className:"text-yellow-500 text-3xl font-bold",children:"DECENTRALIZED RAPHL"}),(0,i.jsx)("h2",{className:"text-white mb-5",children:"Please, Link a wallet account to participate"}),(0,i.jsx)("div",{className:"justify-center items-center w-full flex",children:(0,i.jsx)(d.cg,{moralisAuth:!1})})]})})},h=n(61646),b=n(96207),j=n(96350);var N=function(){return function(){var e=(0,s.Z)(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case 1:case"end":return e.stop()}}),e)})))}(),(0,i.jsxs)("div",{className:"text-white text-center px-5 py-3 rounded-md border-stone-300/10 border flex-1",children:[(0,i.jsx)("h2",{className:"font-bold text-left",children:"Admin"}),(0,i.jsxs)("p",{className:"ml-4 mb-4 text-left text-sm italic",children:["Lottery Operator: ",(0,i.jsx)("span",{className:"text-stone-500",children:"0x00000"})]}),(0,i.jsxs)("div",{className:"flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2",children:[(0,i.jsxs)("button",{className:"admin-button",children:[(0,i.jsx)(h.Z,{className:"h-6 mx-auto mb-2"}),"Pick A Random Winner"]}),(0,i.jsxs)("button",{className:"admin-button",children:[(0,i.jsx)(b.Z,{className:"h-6 mx-auto mb-2"}),"Restart Lottery"]}),(0,i.jsxs)("button",{className:"admin-button",children:[(0,i.jsx)(j.Z,{className:"h-6 mx-auto mb-2"}),"Refund All Participants"]})]})]})},v=n(62542);var g=function(){var e=(0,u.useState)("0"),t=e[0],n=e[1],a=(0,o.Nr)(),c=a.chainId,l=a.isWeb3Enabled,f=parseInt(c),y=f in p.contractAddresses?p.contractAddresses[f][0]:null,h=f in p.networkExtraData?p.networkExtraData[f][0]:null,b=(0,u.useState)("0"),j=b[0],N=b[1],g=(0,u.useState)("0"),w=g[0],A=g[1],S=(0,u.useState)("0"),E=S[0],k=S[1],L=(0,u.useState)([]),C=L[0],F=L[1],P=(0,d.aa)(),I=(0,o.JX)({abi:p.contractABI,contractAddress:y,functionName:"enterLottery",params:{},msgValue:j}),R=I.runContractFunction,W=I.isLoading,_=I.isFetching,Z=(0,o.JX)({abi:p.contractABI,contractAddress:y,functionName:"getParticipationFee",params:{}}).runContractFunction,M=(0,o.JX)({abi:p.contractABI,contractAddress:y,functionName:"getParticipants",params:{}}).runContractFunction,B=(0,o.JX)({abi:p.contractABI,contractAddress:y,functionName:"getNumberOfParticipants",params:{}}).runContractFunction,J=(0,o.JX)({abi:p.contractABI,contractAddress:y,functionName:"getRecentRandomWinner",params:{}}).runContractFunction;function T(){return O.apply(this,arguments)}function O(){return(O=(0,s.Z)(r().mark((function e(){var t,n,s,a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z();case 2:return t=e.sent.toString(),e.next=5,B();case 5:return n=e.sent.toString(),e.next=8,J();case 8:return s=e.sent.toString(),e.next=11,M();case 11:a=e.sent.toString(),N(t),A(n),k(s),F(a);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(0,u.useEffect)((function(){l&&T()}),[l]);var X=function(){var e=(0,s.Z)(r().mark((function e(t){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.wait(1);case 2:D(t),T();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){P({type:"success",message:"Successfully entered the Lottery",title:"Enter Lottery",position:"bottomL"})};return(0,i.jsxs)("div",{className:"raffleStats-wrapper flex flex-col",children:[(0,i.jsxs)("h2",{className:"text-white text-left text-sm italic",children:["Current Network: ",(0,i.jsx)("span",{className:"text-amber-200 text-sm",children:h})]}),(0,i.jsx)("div",{className:"raffleStats-wrapper space-y-2 ",children:(0,i.jsxs)("div",{className:"raffleStats-wrapper",children:[(0,i.jsxs)("div",{className:"flex justify-between items-center text-white pb-2",children:[(0,i.jsx)("h2",{className:"text-center",children:"Participation"}),(0,i.jsx)("p",{className:""})]}),(0,i.jsxs)("div",{className:"flex text-white items-center space-x-2 bg-[#22220f] border-[#2d3533] border p-3",children:[(0,i.jsx)("p",{children:"Entries"}),(0,i.jsx)("input",{type:"number",className:"flex w-full bg-transparent text-right outline-none",min:1,max:2,value:t,onChange:function(e){return n(Number(e.target.value))}})]}),(0,i.jsxs)("div",{className:"space-y-2 mt-2",children:[(0,i.jsxs)("div",{className:"flex items-center justify-between text-gray-400 text-sm italic font-extrabold",children:[(0,i.jsx)("p",{children:"Total participation Price"}),(0,i.jsxs)("p",{children:[v.bM(j)," ETH"]})]}),y?(0,i.jsxs)("div",{className:"flex items-center justify-between text-gray-400 text-xs italic",children:[(0,i.jsx)("p",{className:"ml-3",children:"Service fees"}),(0,i.jsxs)("p",{children:[v.bM(j)," ETH"]})]}):(0,i.jsx)("div",{children:(0,i.jsx)(m.Z,{className:"bg-[#292919]",gradient:!1,speed:40,children:(0,i.jsx)("p",{className:"ml-3 text-amber-700 text-sm italic text-center font-bold",children:"No Lottery Address detected - network not supported"})})}),(0,i.jsxs)("div",{className:"flex items-center justify-between text-gray-400 text-xs italic",children:[(0,i.jsxs)("p",{className:"ml-3",children:["+ Network("," ",(0,i.jsx)("span",{className:"text-amber-200 text-sm",children:h})," ) - Gas Fees"]}),(0,i.jsx)("p",{children:" ETH"})]}),(0,i.jsxs)("div",{className:"flex items-center justify-between text-gray-400 text-xs italic",children:[(0,i.jsx)("p",{className:"ml-3",children:"+ Miscellaneous"}),(0,i.jsx)("p",{children:" ETH"})]})]}),(0,i.jsx)("button",{className:"disabled mt-5 w-full bg-gradient-to-br from-yellow-300 to-stone-800 px-10 py-4 font-semibold rounded-md text-xl selection: text-white shadow-xl disabled:from-gray-500 disabled:to-gray-100 disabled:text-gray-100 disabled:cursor-not-allowed ",onClick:(0,s.Z)(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R({onSuccess:X,onError:function(e){return console.log(e)}});case 2:case"end":return e.stop()}}),e)}))),disabled:W||_,children:W||_?(0,i.jsx)("div",{className:"mb-6",children:(0,i.jsx)(x.Z,{size:"30",color:"#ca8a04"})}):(0,i.jsx)("div",{children:"Enter Lottery"})})]})}),(0,i.jsxs)("div",{className:"raffleStats-wrapper border mt-5",children:[(0,i.jsxs)("div",{className:"flex justify-between p-2 space-x-2",children:[(0,i.jsxs)("div",{className:"raffleStats",children:[(0,i.jsx)("h2",{className:"text-sm",children:"Currently Paricipating"}),(0,i.jsx)("p",{className:"text-xl",children:w})]}),(0,i.jsx)("div",{className:"raffleStats",children:(0,i.jsx)("h2",{className:"text-sm",children:"Remaining "})})]}),(0,i.jsx)("div",{className:"flex justify-between p-2 space-x-2",children:(0,i.jsxs)("div",{className:"raffleStats",children:[(0,i.jsx)("h2",{className:"text-sm",children:"Particpants Accounts"}),(0,i.jsx)("p",{className:"text-sm",children:C})]})}),(0,i.jsx)("h1",{className:"text-3xl text-yellow-200 font-semibold text-center",children:"Next Pick"}),(0,i.jsx)("div",{className:"flex justify-between p-2 space-x-2",children:(0,i.jsxs)("div",{className:"raffleStats",children:[(0,i.jsx)("h2",{className:"text-sm",children:"Recent Winner"}),(0,i.jsx)("div",{className:"text-sm",children:E})]})})]})]})},w=function(){var e=(0,o.Nr)(),t=(e.enableWeb3,e.account),n=(e.isWeb3Enabled,e.isWeb3EnableLoading,(0,u.useState)(1));n[0],n[1],function(){var e=(0,s.Z)(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:.01,e.next=3;break;case 3:case 4:case"end":return e.stop()}}),e)})))}();return(0,i.jsxs)("div",{className:"bg-[#1a1a0c] min-h-screen flex flex-col",children:[(0,i.jsx)(l(),{children:(0,i.jsx)("title",{children:"Decentralized Raphl"})}),(0,i.jsx)("div",{className:"flex-1",children:t?(0,i.jsxs)("div",{children:[(0,i.jsx)(f,{}),(0,i.jsx)("div",{className:"flex justify-center mt-5 mb-5 ml-20 mr-20",children:(0,i.jsx)(N,{})}),(0,i.jsx)("div",{className:"space-y-5 md:space-y-0 m-5 md:flex md:flex-row items-start justify-center md:space-x-5 md:ml-20 md:mr-20",children:(0,i.jsx)(g,{})})]}):(0,i.jsx)(y,{})})]})}},19936:function(e){"use strict";e.exports=JSON.parse('[{"type":"constructor","payable":false,"inputs":[{"type":"address","name":"vrfCoordinatorV2"},{"type":"uint256","name":"participationFee"},{"type":"bytes32","name":"gasLane"},{"type":"uint64","name":"subscriptionId"},{"type":"uint32","name":"callbackGasLimit"},{"type":"uint256","name":"interval"}]},{"type":"error","name":"Lottery__CheckUpkeepFailed","inputs":[{"type":"uint256","name":"currentLotteryState"},{"type":"uint256","name":"numberParticipants"},{"type":"uint256","name":"currentBalance"}]},{"type":"error","name":"Lottery__InsufficientParticipationFees","inputs":[]},{"type":"error","name":"Lottery__LotteryNotOpen","inputs":[]},{"type":"error","name":"Lottery__TrasnferFundsToWinnerFailed","inputs":[]},{"type":"error","name":"OnlyCoordinatorCanFulfill","inputs":[{"type":"address","name":"have"},{"type":"address","name":"want"}]},{"type":"event","anonymous":false,"name":"LotteryEnter","inputs":[{"type":"address","name":"player","indexed":true}]},{"type":"event","anonymous":false,"name":"RandomWinnerPicked","inputs":[{"type":"address","name":"winnerPicked","indexed":true}]},{"type":"event","anonymous":false,"name":"RequestedLotteryWinner","inputs":[{"type":"uint256","name":"requestId","indexed":true}]},{"type":"function","name":"checkUpkeep","constant":false,"payable":false,"gas":29000000,"inputs":[{"type":"bytes"}],"outputs":[{"type":"bool","name":"upkeepNeeded"},{"type":"bytes"}]},{"type":"function","name":"enterLottery","constant":false,"stateMutability":"payable","payable":true,"gas":29000000,"inputs":[],"outputs":[]},{"type":"function","name":"getInterval","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getLatestTimeStamp","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getLotteryState","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"uint8"}]},{"type":"function","name":"getNumberOfParticipants","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getNumberOfWords","constant":true,"stateMutability":"pure","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getParticipant","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[{"type":"uint256","name":"index"}],"outputs":[{"type":"address"}]},{"type":"function","name":"getParticipants","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"address[]"}]},{"type":"function","name":"getParticipationFee","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getRecentRandomWinner","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"address"}]},{"type":"function","name":"getRequestConfirmations","constant":true,"stateMutability":"pure","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"performUpkeep","constant":false,"payable":false,"gas":29000000,"inputs":[{"type":"bytes"}],"outputs":[]},{"type":"function","name":"rawFulfillRandomWords","constant":false,"payable":false,"gas":29000000,"inputs":[{"type":"uint256","name":"requestId"},{"type":"uint256[]","name":"randomWords"}],"outputs":[]},{"type":"function","name":"requestRandomWinner","constant":false,"payable":false,"gas":29000000,"inputs":[],"outputs":[]}]')},37917:function(e){"use strict";e.exports=JSON.parse('{"31337":["0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"]}')},68764:function(e){"use strict";e.exports=JSON.parse('{"31337":["hardhat"]}')}},function(e){e.O(0,[480,774,888,179],(function(){return t=48312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);