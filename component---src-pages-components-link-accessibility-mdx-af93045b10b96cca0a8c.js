"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[57180],{28399:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(67294),i=a(88650),s=a.n(i),o=a(1597),l=a(80304),c=a(94656),r=a(75900),d=a.n(r);var m=e=>{let{title:t,theme:a,tabs:i=[]}=e;return n.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":i.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var p=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:i}}}=(0,o.useStaticQuery)("1364590287"),{baseUrl:s,subDirectory:l,branch:c}=a||i,r=`${s}/edit/${c}${l}/src/pages${t}`;return s?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:r},"Edit this page on GitHub"))):null},g=a(56328),b=a(51721);let u=function(e){function t(){return e.apply(this,arguments)||this}return(0,b.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,i=a.split("/").filter(Boolean).slice(-1)[0],l=t.map((e=>{const t=s()(e,{lower:!0,strict:!0}),l=t===i,c=new RegExp(`${i}/?(#.*)?$`),r=a.replace(c,t);return n.createElement("li",{key:e,className:d()({"PageTabs-module--selected-item--aBB0K":l},"PageTabs-module--list-item--024o6")},n.createElement(o.Link,{className:"PageTabs-module--link--Kz-7R",to:`${r}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},t}(n.Component);var k=u,A=a(17680),h=a(75387),y=a(50041);var f=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(y.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var w=e=>{let{pageContext:t,children:a,location:i,Title:r}=e;const{frontmatter:d={},relativePagePath:b,titleType:u}=t,{tabs:y,title:w,theme:x,description:v,keywords:C,date:E}=d,{interiorTheme:N}=(0,h.Z)(),{site:{pathPrefix:P}}=(0,o.useStaticQuery)("2456312558"),L=P?i.pathname.replace(P,""):i.pathname,T=y?L.split("/").filter(Boolean).slice(-1)[0]||s()(y[0],{lower:!0}):"",S=x||N;return n.createElement(c.Z,{tabs:y,homepage:!1,theme:S,pageTitle:w,pageDescription:v,pageKeywords:C,titleType:u},n.createElement(m,{title:r?n.createElement(r,null):w,label:"label",tabs:y,theme:S}),y&&n.createElement(k,{title:w,slug:L,tabs:y,currentTab:T}),n.createElement(A.Z,{padded:!0},a,n.createElement(p,{relativePagePath:b}),n.createElement(f,{date:E})),n.createElement(g.Z,{pageContext:t,location:i,slug:L,tabs:y,currentTab:T}),n.createElement(l.Z,null))}},11277:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return A}});var n=a(45987),i=(a(67294),a(64983)),s=a(28399);a(74164);const o=["components"],l={},c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},r=c("PageDescription"),d=c("AnchorLinks"),m=c("AnchorLink"),p=c("Row"),g=c("Column"),b=c("Caption"),u={_frontmatter:l},k=s.Z;function A(e){let{components:t}=e,a=(0,n.Z)(e,o);return(0,i.kt)(k,Object.assign({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r,{mdxType:"PageDescription"},(0,i.kt)("p",null,"Design annotations are needed for specific instances shown below, but for the\nstandard link component, Carbon already incorporates accessibility.")),(0,i.kt)(d,{mdxType:"AnchorLinks"},(0,i.kt)(m,{mdxType:"AnchorLink"},"What Carbon provides"),(0,i.kt)(m,{mdxType:"AnchorLink"},"Design recommendations"),(0,i.kt)(m,{mdxType:"AnchorLink"},"Development considerations")),(0,i.kt)("h2",null,"What Carbon provides"),(0,i.kt)("p",null,"Carbon bakes keyboard operation into its components, improving the experience of\nblind users and others who operate via the keyboard. Carbon incorporates many\nother accessibility considerations, some of which are described below."),(0,i.kt)("h3",null,"Keyboard interactions"),(0,i.kt)("p",null,"No annotations for keyboard interactions are needed. All links are in the tab\norder, and activated with standard keys. Where Carbon links are not persistently\nunderlined, they receive an underline on focus."),(0,i.kt)(p,{mdxType:"Row"},(0,i.kt)(g,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAA7ElEQVQoz2NgwAM8ZbsZPGS6wDQIe8v3wdkkAZimYM2JDG5SnQzOYu0M7tJdDP///2cI051MvoF+yn1gA13EOzjcpbs4GRhYGcJ0JpFmIMwwEA5Un8CU5TafIVxvcqOPYu80BgZHRl2GSuINRDYMipk9ZbrYPRX7xD3leiT9bVcyuHBUkGaglxzCQDfFiaz+Yg38etb7ZFXdLnDLBjxkUPG4TLYL2T1lu9k8ZbsYvCVbmb2kO5m8pdpAbLIMZPSU7eaA8b2kOxg8QckHismJEFYoRkmLHlBMVgx7ynZzokcSyQDNABaooYykGAgADhFl6us3qFUAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"example of link keyboard interaction",title:"example of link keyboard interaction",src:"/static/a91d625d344db307f4c5e9bb9e6e98b9/3cbba/link-accessibility-1.png",srcSet:["/static/a91d625d344db307f4c5e9bb9e6e98b9/7fc1e/link-accessibility-1.png 288w","/static/a91d625d344db307f4c5e9bb9e6e98b9/a5df1/link-accessibility-1.png 576w","/static/a91d625d344db307f4c5e9bb9e6e98b9/3cbba/link-accessibility-1.png 1152w","/static/a91d625d344db307f4c5e9bb9e6e98b9/92c65/link-accessibility-1.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(b,{mdxType:"Caption"},"Links are reached by Tab key and activated by Space and Enter keys."))),(0,i.kt)("h3",null,"Contrast"),(0,i.kt)("p",null,"Carbon’s link text color meets the minimum contrast requirement of 4.5:1 with\nits background. Carbon also uses a link color that contrast 3:1 against body\ntext, so that link text is distinguishable even without an underline."),(0,i.kt)(p,{mdxType:"Row"},(0,i.kt)(g,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAAAqElEQVQoz2P4jxv8/fP3759/cPT/H7oChv8UAGyawTb8+P570/xzi7oPL+0/tmzCsXltB9+9+gKS/PcPn2aI7Kf331fPODW/49CiniMLOg8d3Hj95/ffcFkCzv747tuGuWcWgmw+Oq/t4NP779Csxa75y5fPz5+/vv3w2/uPH7/9+PTtx5fPXz78/v2bOD+D3fb3z98/v//++QNF//79J1YzBaE9BDQDAAxRgRVNL6J7AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"a blue link contrasts 4.5:1 against the white background and 3:1 against the black body text ",title:"a blue link contrasts 4.5:1 against the white background and 3:1 against the black body text ",src:"/static/a86af9ad7960c85851fb1691176076da/3cbba/link-accessibility-2.png",srcSet:["/static/a86af9ad7960c85851fb1691176076da/7fc1e/link-accessibility-2.png 288w","/static/a86af9ad7960c85851fb1691176076da/a5df1/link-accessibility-2.png 576w","/static/a86af9ad7960c85851fb1691176076da/3cbba/link-accessibility-2.png 1152w","/static/a86af9ad7960c85851fb1691176076da/92c65/link-accessibility-2.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(b,{mdxType:"Caption"},"Link text has sufficient contrast with both its background and surrounding body text."))),(0,i.kt)("h2",null,"Design recommendations"),(0,i.kt)("h3",null,"Ensure link context"),(0,i.kt)("p",null,"If your design uses generic link names such as “read more,” consider making them\nunique. Otherwise, annotate a connection with other text in the design that\nprovides context. This will allow developers to implement in a way that\nincreases accessibility. See the Equal Access Toolkit\n",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/able/toolkit/design/content/#link-text"},"link text topic"),"."),(0,i.kt)(p,{mdxType:"Row"},(0,i.kt)(g,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAAAsUlEQVQoz72RUQqCQBCGPVx0segUXSOil65Q9JRBrqumsbvmZLWtLeNsIL0lKhQN8zTwzcf847kvymsfk3NEQ2EiIqwJ6yFMlxmOIt4HKs4c1n1wozJ+CosNzNc2OZcF8AOLGZdCSCmVUgCAiC0wNevlbOWPp7vRpFxub9aEIYviiIUsCALOuda682ZjEe540a6ypYSIZwlPxanP/Bn0ozCQ22te4ROHBUb07h/8+Q/wC1dohEp4A9nRAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:'an annotation, connecting an IBM Cloud heading with a Learn more link, reads "associate link with heading"',title:'an annotation, connecting an IBM Cloud heading with a Learn more link, reads "associate link with heading"',src:"/static/9a6f489b2ec7ce52436678128367af08/3cbba/link-accessibility-3.png",srcSet:["/static/9a6f489b2ec7ce52436678128367af08/7fc1e/link-accessibility-3.png 288w","/static/9a6f489b2ec7ce52436678128367af08/a5df1/link-accessibility-3.png 576w","/static/9a6f489b2ec7ce52436678128367af08/3cbba/link-accessibility-3.png 1152w","/static/9a6f489b2ec7ce52436678128367af08/92c65/link-accessibility-3.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(b,{mdxType:"Caption"},"Annotate the connection between generic links and text that gives context."))),(0,i.kt)("h2",null,"Development considerations"),(0,i.kt)("p",null,"Keep these considerations in mind if you are modifying Carbon or creating a\ncustom component."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Associate generic links such as “read more” with other contextual text, using\neither ",(0,i.kt)("inlineCode",{parentName:"li"},"aria-describedby")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"aria-labelledby")," (to concatenate multiple text\nstrings). See the\n",(0,i.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/toolkit/develop/text-and-non-text/#aria-labelling"},"Equal Access Toolkit guidance"),"\nfor more details."),(0,i.kt)("li",{parentName:"ul"},"See the ",(0,i.kt)("a",{parentName:"li",href:"https://w3c.github.io/aria-practices/#link"},"ARIA authoring practices"),"\nfor more considerations.")))}A.isMDXComponent=!0}}]);