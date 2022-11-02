"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[47856],{28399:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(67294),r=a(88650),s=a.n(r),i=a(1597),l=a(80304),o=a(94656),c=a(75900),u=a.n(c);var d=e=>{let{title:t,theme:a,tabs:r=[]}=e;return n.createElement("div",{className:u()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":r.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var m=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:r}}}=(0,i.useStaticQuery)("1364590287"),{baseUrl:s,subDirectory:l,branch:o}=a||r,c=`${s}/edit/${o}${l}/src/pages${t}`;return s?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},p=a(56328),h=a(51721);let b=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,r=a.split("/").filter(Boolean).slice(-1)[0],l=t.map((e=>{const t=s()(e,{lower:!0,strict:!0}),l=t===r,o=new RegExp(`${r}/?(#.*)?$`),c=a.replace(o,t);return n.createElement("li",{key:e,className:u()({"PageTabs-module--selected-item--aBB0K":l},"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:`${c}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},t}(n.Component);var k=b,g=a(17680),y=a(75387),w=a(50041);var f=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(w.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(w.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var v=e=>{let{pageContext:t,children:a,location:r,Title:c}=e;const{frontmatter:u={},relativePagePath:h,titleType:b}=t,{tabs:w,title:v,theme:C,description:A,keywords:E,date:N}=u,{interiorTheme:T}=(0,y.Z)(),{site:{pathPrefix:L}}=(0,i.useStaticQuery)("2456312558"),x=L?r.pathname.replace(L,""):r.pathname,S=w?x.split("/").filter(Boolean).slice(-1)[0]||s()(w[0],{lower:!0}):"",P=C||T;return n.createElement(o.Z,{tabs:w,homepage:!1,theme:P,pageTitle:v,pageDescription:A,pageKeywords:E,titleType:b},n.createElement(d,{title:c?n.createElement(c,null):v,label:"label",tabs:w,theme:P}),w&&n.createElement(k,{title:v,slug:x,tabs:w,currentTab:S}),n.createElement(g.Z,{padded:!0},a,n.createElement(m,{relativePagePath:h}),n.createElement(f,{date:N})),n.createElement(p.Z,{pageContext:t,location:r,slug:x,tabs:w,currentTab:S}),n.createElement(l.Z,null))}},92307:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return g}});var n=a(45987),r=(a(67294),a(64983)),s=a(28399),i=a(74164);const l=["components"],o={},c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},u=c("PageDescription"),d=c("AnchorLinks"),m=c("AnchorLink"),p=c("Row"),h=c("Column"),b={_frontmatter:o},k=s.Z;function g(e){let{components:t}=e,a=(0,n.Z)(e,l);return(0,r.kt)(k,Object.assign({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(u,{mdxType:"PageDescription"},(0,r.kt)("p",null,"The tabs React Carbon component has been tested against the latest\n",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/WCAG21/"},"W3C Web Content Accessibility Guidelines (WCAG) 2.1 Level A and AA success criteria"),".")),(0,r.kt)(d,{mdxType:"AnchorLinks"},(0,r.kt)(m,{mdxType:"AnchorLink"},"Accessibility considerations"),(0,r.kt)(m,{mdxType:"AnchorLink"},"Resources"),(0,r.kt)(m,{mdxType:"AnchorLink"},"Accessibility testing")),(0,r.kt)("h2",null,"Accessibility considerations"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Each tab must have a unique title that clearly describes tab panel content.\nThis is particularly helpful for users of assistive technologies so they have\nthe necessary information to efficiently navigate the content."),(0,r.kt)("li",{parentName:"ol"},"Carbon components should be used to create the content that displays within\neach tab panel."),(0,r.kt)("li",{parentName:"ol"},"Content authors need to ensure the content that is added to the tab panel is\naccessible. For example, if you add an image to the panel you need to include\nalternative text to pass accessibility testing.")),(0,r.kt)("h2",null,"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/wai-aria-practices-1.1/#tabpanel"},"W3C WAI-ARIA Tab Design Pattern"),"\ncovers the usage of ARIA names, state and roles, as well as the expected\nkeyboard interactions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/"},"IBM Accessibility Requirements"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/#1_3_1"},"1.3.1 Info and Relationships"),"\n(WCAG Success Criteria\n",(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships"},"1.3.1"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/#1_3_2"},"1.3.2 Meaningful Sequence"),"\n(WCAG Success Criteria\n",(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence"},"1.3.2"),")")))),(0,r.kt)("h2",null,"Accessibility testing"),(0,r.kt)("p",null,"Automated, manual and screen reader accessibility verification test has been\nperformed on the structure list React Carbon Component.\n",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/WCAG21/"},"WCAG 2.1 Level A and AA success criteria")," issues\nhave been identified and the list of open accessibility violations is available\nin the Carbon Component GitHub repository."),(0,r.kt)("h3",null,"Automated test"),(0,r.kt)(p,{mdxType:"Row"},(0,r.kt)(h,{noGutterSm:!0,mdxType:"Column"},(0,r.kt)(i.StructuredListWrapper,{mdxType:"StructuredListWrapper"},(0,r.kt)(i.StructuredListHead,{mdxType:"StructuredListHead"},(0,r.kt)(i.StructuredListRow,{head:!0,mdxType:"StructuredListRow"},(0,r.kt)(i.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Automated test environment"),(0,r.kt)(i.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Results"))),(0,r.kt)(i.StructuredListBody,{mdxType:"StructuredListBody"},(0,r.kt)(i.StructuredListRow,{mdxType:"StructuredListRow"},(0,r.kt)(i.StructuredListCell,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.6 with VoiceOver",(0,r.kt)("br",null),"- Chrome version 77.0.3865.90",(0,r.kt)("br",null),"- Dynamic Assessment Plugin (DAP) version 1.8.0.0 - IBM Accessibility WCAG 2.1 Sept. 2019 Ruleset",(0,r.kt)("br",null),"- Carbon React version 7.7.1"),(0,r.kt)(i.StructuredListCell,{mdxType:"StructuredListCell"},(0,r.kt)("strong",null,"DAP test:"),(0,r.kt)("br",null),"- No violations")))))))}g.isMDXComponent=!0}}]);