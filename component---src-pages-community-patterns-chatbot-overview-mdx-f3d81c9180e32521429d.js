"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[90421],{28399:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(67294),r=a(88650),l=a.n(r),o=a(1597),i=a(80304),s=a(94656),m=a(75900),d=a.n(m);var p=e=>{let{title:t,theme:a,tabs:r=[]}=e;return n.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":r.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var c=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:r}}}=(0,o.useStaticQuery)("1364590287"),{baseUrl:l,subDirectory:i,branch:s}=a||r,m=`${l}/edit/${s}${i}/src/pages${t}`;return l?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:m},"Edit this page on GitHub"))):null},u=a(56328),g=a(51721);let k=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,r=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((e=>{const t=l()(e,{lower:!0,strict:!0}),i=t===r,s=new RegExp(`${r}/?(#.*)?$`),m=a.replace(s,t);return n.createElement("li",{key:e,className:d()({"PageTabs-module--selected-item--aBB0K":i},"PageTabs-module--list-item--024o6")},n.createElement(o.Link,{className:"PageTabs-module--link--Kz-7R",to:`${m}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},i))))))},t}(n.Component);var y=k,h=a(17680),b=a(75387),T=a(50041);var N=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(T.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(T.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var f=e=>{let{pageContext:t,children:a,location:r,Title:m}=e;const{frontmatter:d={},relativePagePath:g,titleType:k}=t,{tabs:T,title:f,theme:x,description:v,keywords:w,date:A}=d,{interiorTheme:C}=(0,b.Z)(),{site:{pathPrefix:E}}=(0,o.useStaticQuery)("2456312558"),D=E?r.pathname.replace(E,""):r.pathname,L=T?D.split("/").filter(Boolean).slice(-1)[0]||l()(T[0],{lower:!0}):"",S=x||C;return n.createElement(s.Z,{tabs:T,homepage:!1,theme:S,pageTitle:f,pageDescription:v,pageKeywords:w,titleType:k},n.createElement(p,{title:m?n.createElement(m,null):f,label:"label",tabs:T,theme:S}),T&&n.createElement(y,{title:f,slug:D,tabs:T,currentTab:L}),n.createElement(h.Z,{padded:!0},a,n.createElement(c,{relativePagePath:g}),n.createElement(N,{date:A})),n.createElement(u.Z,{pageContext:t,location:r,slug:D,tabs:T,currentTab:L}),n.createElement(i.Z,null))}},99171:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return T}});var n=a(45987),r=(a(67294),a(64983)),l=a(28399),o=a(74164);const i=["components"],s={},m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=m("PageDescription"),p=m("AnchorLinks"),c=m("AnchorLink"),u=m("Caption"),g=m("Column"),k=m("ResourceCard"),y=m("MdxIcon"),h={_frontmatter:s},b=l.Z;function T(e){let{components:t}=e,a=(0,n.Z)(e,i);return(0,r.kt)(b,Object.assign({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",null,"Maintainers:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://w3.ibm.com/bluepages/profile.html?uid=5G1630897"},"Sarah Liu")),(0,r.kt)("h4",null,"Maintainers:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://w3.ibm.com/bluepages/profile.html?uid=5G1630897"},"Sarah Liu")),(0,r.kt)(d,{mdxType:"PageDescription"},(0,r.kt)("p",null,"Use a chatbot when a user would benefit from requesting information on-demand\nwith natural language. They should receive a useful and trustworthy response\nrelated to their question or task.")),(0,r.kt)(p,{mdxType:"AnchorLinks"},(0,r.kt)(c,{mdxType:"AnchorLink"},"Common use cases"),(0,r.kt)(c,{mdxType:"AnchorLink"},"User needs"),(0,r.kt)(c,{mdxType:"AnchorLink"},"Why a chatbot?"),(0,r.kt)(c,{mdxType:"AnchorLink"},"Supported components"),(0,r.kt)(c,{mdxType:"AnchorLink"},"Chatbot add-on library"),(0,r.kt)(c,{mdxType:"AnchorLink"},"More information")),(0,r.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,r.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.79166666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAAArElEQVQoz6WRTQqDMBCFvb7rnCHnyCpbzcadKDVmEagtjX9Ioq8kUKGtFGpmM8M85mPeTIKD2LZtz9Y6WGdDva7rm3YUyS+gB9zuD3TdFeM4oO+H0DsNdM5BKYW2VdBaY5qm88DXQFVVIIQgTVNQSr/0vy03lwa5yFEUBaSUcZb9cF3XwbYxJpwgGuhhWZaBc46yLOO+7Dea5zmAGGMQQsTd0OdlWXabn9oR8Am2ZcBxAtTXaAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,r.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"chatbot 0",title:"chatbot 0",src:"/static/e49a0c279674c4251b2215fca6ef9cf1/3cbba/chatbot-0.png",srcSet:["/static/e49a0c279674c4251b2215fca6ef9cf1/7fc1e/chatbot-0.png 288w","/static/e49a0c279674c4251b2215fca6ef9cf1/a5df1/chatbot-0.png 576w","/static/e49a0c279674c4251b2215fca6ef9cf1/3cbba/chatbot-0.png 1152w","/static/e49a0c279674c4251b2215fca6ef9cf1/0b124/chatbot-0.png 1728w","/static/e49a0c279674c4251b2215fca6ef9cf1/99571/chatbot-0.png 2240w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,r.kt)(u,{mdxType:"Caption"},"Shown in Gray 10 Theme"),(0,r.kt)("h2",null,"Common use cases"),(0,r.kt)("p",null,"Bots have become an increasingly popular way to solve common business problems\nacross domains, including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Providing in-context help and guidance")," (e.g., scaling a company’s FAQ or\nhelping a user get started)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Triaging or setting priority of cases")," by soliciting information from the\nuser to decrease workload on humans (support tickets, patient symptom\nseverity)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Performing common tasks or procedures")," (e.g., pay a bill, transfer money,\nor assist with electing health benefits)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Using natural language to search for information")," (e.g., find specific\ninformation like current balance, or dosing instructions for a medication)")),(0,r.kt)("h2",null,"Why a chatbot?"),(0,r.kt)("p",null,"Before building a bot, make sure that you have justified it as an appropriate\nsolution by asking yourself these questions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"What are the users’ goals?"),(0,r.kt)("li",{parentName:"ul"},"How in-depth is the assistance the user will need?"),(0,r.kt)("li",{parentName:"ul"},"Is your domain better served by human assistance?"),(0,r.kt)("li",{parentName:"ul"},"How is a bot superior to online documentation, contextual support, wizards,\netc.?"),(0,r.kt)("li",{parentName:"ul"},"What kind of data sources or abilities can this bot leverage for your business\nand your users?")),(0,r.kt)("h2",null,"User needs"),(0,r.kt)("h4",null,"A user may need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Access to help at any time"),(0,r.kt)("li",{parentName:"ul"},"An on-demand, relevant answer to a question"),(0,r.kt)("li",{parentName:"ul"},"High quality, consistent information about a product or service")),(0,r.kt)("h4",null,"Within a conversation, a user may need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To provide the bot with more context via structured responses"),(0,r.kt)("li",{parentName:"ul"},"To know what the bot understands, through reflection and confirming questions"),(0,r.kt)("li",{parentName:"ul"},"To identify the most recent and relevant message to improve understanding")),(0,r.kt)("h4",null,"Don’t use a chatbot when:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A task could be accomplished more efficiently using a traditional user\ninterface"),(0,r.kt)("li",{parentName:"ul"},"A process is very complex or could take a long time"),(0,r.kt)("li",{parentName:"ul"},"A real human is needed for sensitive or emotional topics")),(0,r.kt)("p",null,"See\n",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/design/ai/conversation"},"IBM Design for Conversational AI"),"\nfor more information."),(0,r.kt)("h2",null,"Supported components"),(0,r.kt)("p",null,"While conversational interfaces may contain many different kinds of components,\nCarbon currently offers these components out of the box to help get you up and\nrunning quickly. See the Usage tab for information on how to use these\ncomponents together."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Component"),(0,r.kt)("th",{parentName:"tr",align:null},"Design status"),(0,r.kt)("th",{parentName:"tr",align:null},"Development status"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Chatbot window"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(o.Tag,{type:"green",mdxType:"Tag"},"Design available")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(o.Tag,{type:"cool-gray",mdxType:"Tag"}," Contribution needed"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Chatbot header"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(o.Tag,{type:"green",mdxType:"Tag"},"Design available")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(o.Tag,{type:"cool-gray",mdxType:"Tag"}," Contribution needed"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System message"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(o.Tag,{type:"green",mdxType:"Tag"},"Design available")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(o.Tag,{type:"cool-gray",mdxType:"Tag"}," Contribution needed"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"User message"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(o.Tag,{type:"green",mdxType:"Tag"},"Design available")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(o.Tag,{type:"cool-gray",mdxType:"Tag"}," Contribution needed"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Structured response"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(o.Tag,{type:"green",mdxType:"Tag"},"Design available")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(o.Tag,{type:"cool-gray",mdxType:"Tag"}," Contribution needed"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Chatbot cards"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(o.Tag,{type:"green",mdxType:"Tag"},"Design available")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(o.Tag,{type:"cool-gray",mdxType:"Tag"}," Contribution needed"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Chatbot text input"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(o.Tag,{type:"green",mdxType:"Tag"},"Design available")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(o.Tag,{type:"cool-gray",mdxType:"Tag"}," Contribution needed"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Launch button"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(o.Tag,{type:"green",mdxType:"Tag"},"Design available")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(o.Tag,{type:"cool-gray",mdxType:"Tag"}," Contribution needed"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Welcome screen"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(o.Tag,{type:"teal",mdxType:"Tag"}," Experimental ")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(o.Tag,{type:"cool-gray",mdxType:"Tag"}," Contribution needed"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Expandable card"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(o.Tag,{type:"teal",mdxType:"Tag"}," Experimental ")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(o.Tag,{type:"cool-gray",mdxType:"Tag"}," Contribution needed"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Human message"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(o.Tag,{type:"teal",mdxType:"Tag"}," Experimental ")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(o.Tag,{type:"cool-gray",mdxType:"Tag"}," Contribution needed"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"List"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(o.Tag,{type:"purple",mdxType:"Tag"}," Coming soon ")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(o.Tag,{type:"cool-gray",mdxType:"Tag"}," Contribution needed"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Launch button chips"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(o.Tag,{type:"purple",mdxType:"Tag"}," Coming soon ")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(o.Tag,{type:"cool-gray",mdxType:"Tag"}," Contribution needed"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Multiple threads menu"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(o.Tag,{type:"purple",mdxType:"Tag"}," Coming soon ")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(o.Tag,{type:"cool-gray",mdxType:"Tag"}," Contribution needed"))))),(0,r.kt)("h2",null,"Chatbot add-on library"),(0,r.kt)("p",null,"To ",(0,r.kt)("strong",{parentName:"p"},"add this library to Sketch with Sketch Cloud"),", access the link below and\nclick “Add Library to Sketch.” You will receive updates to chatbot symbols\nautomatically."),(0,r.kt)("p",null,"For ",(0,r.kt)("strong",{parentName:"p"},"common chatbot sub-patterns, features or experimental components"),", click\n“Download Document,” open the document, and browse the relevant pages for\nguidance related to your use case."),(0,r.kt)(g,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},(0,r.kt)(k,{subTitle:"Sketch library",title:"Chatbot Design Kit",aspectRatio:"2:1",actionIcon:"launch",href:"https://www.sketch.com/s/d6986eb8-bf0d-4695-abe8-9e79909d4518",mdxType:"ResourceCard"},(0,r.kt)(y,{name:"sketch",mdxType:"MdxIcon"}))),(0,r.kt)("h2",null,"More information"),(0,r.kt)("p",null,"This collection of components is a living resource and the outcome of\npartnerships with IBM product teams building and testing chatbot interactions.\nTeams building with chatbots can use these components their work and contribute\nvalidated interactions back to the chatbot pattern."))}T.isMDXComponent=!0}}]);