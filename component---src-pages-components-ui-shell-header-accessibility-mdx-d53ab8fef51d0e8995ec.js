"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[67009],{28399:function(e,a,t){t.d(a,{Z:function(){return w}});var n=t(67294),i=t(88650),s=t.n(i),o=t(1597),c=t(80304),r=t(94656),l=t(75900),d=t.n(l);var p=e=>{let{title:a,theme:t,tabs:i=[]}=e;return n.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":i.length,"PageHeader-module--dark-mode--WCeH8":"dark"===t})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))};var m=e=>{let{relativePagePath:a,repository:t}=e;const{site:{siteMetadata:{repository:i}}}=(0,o.useStaticQuery)("1364590287"),{baseUrl:s,subDirectory:c,branch:r}=t||i,l=`${s}/edit/${r}${c}/src/pages${a}`;return s?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:l},"Edit this page on GitHub"))):null},g=t(56328),b=t(51721);let h=function(e){function a(){return e.apply(this,arguments)||this}return(0,b.Z)(a,e),a.prototype.render=function(){const{title:e,tabs:a,slug:t}=this.props,i=t.split("/").filter(Boolean).slice(-1)[0],c=a.map((e=>{const a=s()(e,{lower:!0,strict:!0}),c=a===i,r=new RegExp(`${i}/?(#.*)?$`),l=t.replace(r,a);return n.createElement("li",{key:e,className:d()({"PageTabs-module--selected-item--aBB0K":c},"PageTabs-module--list-item--024o6")},n.createElement(o.Link,{className:"PageTabs-module--link--Kz-7R",to:`${l}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},c))))))},a}(n.Component);var A=h,f=t(17680),u=t(75387),y=t(50041);var k=e=>{let{date:a}=e;const t=new Date(a);return a?n.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(y.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",t.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var w=e=>{let{pageContext:a,children:t,location:i,Title:l}=e;const{frontmatter:d={},relativePagePath:b,titleType:h}=a,{tabs:y,title:w,theme:E,description:v,keywords:x,date:C}=d,{interiorTheme:N}=(0,u.Z)(),{site:{pathPrefix:L}}=(0,o.useStaticQuery)("2456312558"),S=L?i.pathname.replace(L,""):i.pathname,I=y?S.split("/").filter(Boolean).slice(-1)[0]||s()(y[0],{lower:!0}):"",T=E||N;return n.createElement(r.Z,{tabs:y,homepage:!1,theme:T,pageTitle:w,pageDescription:v,pageKeywords:x,titleType:h},n.createElement(p,{title:l?n.createElement(l,null):w,label:"label",tabs:y,theme:T}),y&&n.createElement(A,{title:w,slug:S,tabs:y,currentTab:I}),n.createElement(f.Z,{padded:!0},t,n.createElement(m,{relativePagePath:b}),n.createElement(k,{date:C})),n.createElement(g.Z,{pageContext:a,location:i,slug:S,tabs:y,currentTab:I}),n.createElement(c.Z,null))}},36989:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return c},default:function(){return f}});var n=t(45987),i=(t(67294),t(64983)),s=t(28399);t(74164);const o=["components"],c={},r=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",a)},l=r("PageDescription"),d=r("AnchorLinks"),p=r("AnchorLink"),m=r("Row"),g=r("Column"),b=r("Caption"),h={_frontmatter:c},A=s.Z;function f(e){let{components:a}=e,t=(0,n.Z)(e,o);return(0,i.kt)(A,Object.assign({},h,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)(l,{mdxType:"PageDescription"},(0,i.kt)("p",null,"Design annotations are needed for specific instances shown below, but for the\nstandard UI shell header component, Carbon already incorporates accessibility.")),(0,i.kt)(d,{mdxType:"AnchorLinks"},(0,i.kt)(p,{mdxType:"AnchorLink"},"What Carbon provides"),(0,i.kt)(p,{mdxType:"AnchorLink"},"Design recommendations"),(0,i.kt)(p,{mdxType:"AnchorLink"},"Development considerations")),(0,i.kt)("h2",null,"What Carbon provides"),(0,i.kt)("p",null,"The Carbon header bakes in keyboard interaction, including a\nskip-to-main-content mechanism. Carbon also supports assistive technologies such\nas screen readers by setting labeling and page structure."),(0,i.kt)("h3",null,"Keyboard interaction"),(0,i.kt)("p",null,"Each element in the header can be reached by the ",(0,i.kt)("inlineCode",{parentName:"p"},"Tab")," key. A “Skip to main\ncontent” link appears when a keyboard user first tabs into the page. Links and\nicons are activated by ",(0,i.kt)("inlineCode",{parentName:"p"},"Enter"),". Icons can also be activated by ",(0,i.kt)("inlineCode",{parentName:"p"},"Space"),"."),(0,i.kt)(m,{mdxType:"Row"},(0,i.kt)(g,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAACmUlEQVQoz1VQ3UtTYRx+O0oY/gd5EURXGYLNhl0FurMZ21x+TNPZnWB1K1R2WXcJgR8QuHS4PkzNMj9mX2puEoWMbW6OeTa3uXnW1Ok8Z+fohrznF++ZGF08PM/z+708PL8XNV7pOVNT0l3YUPq8qONmf/F9Q1/Rr9A41dX+4mw73Vt8V997zjpipj7ND1FTixbKYjVTP3xWyvxyoGDeNUxZ35qp8ZlBasZuoQaHBgpQY2kv0pzvRgCA2D0GAWBZEwQiTgQQQgBx5Ana0Z/cCvq+8AUBrKHZGRs6Bi+y//yGvGE7Sh6vIJttDqGGyz1KTcmzjv6nExe9a+66xYWlxok3X+84HI765WVH/eLSQt3oq+nWD6OzLZPvbS3vhqdMs9Ofm0csU6bpybnbY69PduP5HWqt6FfXXuh73HnvSXNbmwmampqh/pYRjEYjmEwm0Ov1UF1Fg5rWAK2igVZpgFYTrgGaPvEqNahU5E0NoNZLY6j26kP04FHnDbVaAzqd7lin02KtVosNBgNWKpW4okKBFQoFLi8vx0rlNVxWVoYrr1fKTPb/dkqMPg7+LiT/tZfaq85kMiCKIhYEURLFPARBkDiOk3ie/w8cx8vz/f19KZ1Oy5plExLieZ46PDxEmUym6uDgAKLRKGZZVtra2oJkMgnb29uws7NzyvF4XNaJRALS6TQpAIIgwNHREaRSKUAcx1HZbFYOJAO32409Ho/kcrnA4/EQD16vV2a/3w8+nw9WV1fB6XTKOpfLyYHZbBZ2d3fzgaIoEpYbRiIRHIvFJNKEtIzFYmR2qgmIJohGozLIbHNzE1iWzQeSk3meryIn+P1+zDCMFAwGYX19HRiGkREIBGS/sbEBoVAIwuEwkDfEEyaeBP8FXJAqAq7+lEoAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"example of header keyboard interaction",title:"example of header keyboard interaction",src:"/static/5e7f1d428332688b81a790ac2d363ac0/3cbba/header-accessibility-1.png",srcSet:["/static/5e7f1d428332688b81a790ac2d363ac0/7fc1e/header-accessibility-1.png 288w","/static/5e7f1d428332688b81a790ac2d363ac0/a5df1/header-accessibility-1.png 576w","/static/5e7f1d428332688b81a790ac2d363ac0/3cbba/header-accessibility-1.png 1152w","/static/5e7f1d428332688b81a790ac2d363ac0/92c65/header-accessibility-1.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(b,{mdxType:"Caption"},"Pressing the Tab key reveals a 'Skip to main' link and then moves between other header elements."))),(0,i.kt)("h3",null,"Regions"),(0,i.kt)(m,{mdxType:"Row"},(0,i.kt)(g,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABxklEQVQoz62Jy04TYRiGn1LkRwRk084/88/hL6WdHkwLNFIZFopt1KCghWjAIES3nhpXHqKAEOPOIorBnXfgJZBZeg9mdsYbcI1hegeEN3nyfu/3wGmnJJvMqldctd/gGWVUOoudHjsxtPxOYrHQSTbkNhzB4b8X/DnaoNIGemBgHrxHgAEz7wAF1oPunzq4D4EsBG8BF1gq7XL3wh5Na4fROVh/Nkf7/T2KwXkYAqeSJDc1SJ8Bkw0Z9/G2yglSecjXBxlQXddvAq3Cp/JScfdpw9xyPGf0u58r/irkS4eOrUMjZYbKckNbeaFMW6HrZOI+3sp0Qkva8W0aKnQdHUpDhaxMfKmt1Q+2rzk7Oc/1fvp+4W+lUv2tPR2lU+nIdb1Iax1JaUbZ7FgkDRlldCaybSdG60xkml1nSjNiefwrqxe/cd3+QP3s636YFeCLMm2xWvkhamdeihLPxYLeExbropXdF3kei2BwQ8wMbQqfJ+Km04ndvPdZcH9yP7F26aD3hvMRf/gWPWhgGCUCgtwK+txlrL5pJuw7jFCl5i1iJKfIjTRjZG+dqlqI3bh9G2pqmaa9SdPeomhdIW9N41vBiTn1/Adt+XKXldopLAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"example of header keyboard interaction",title:"example of header keyboard interaction",src:"/static/cc141c28981cf4371f574135a8c12265/3cbba/header-accessibility-2.png",srcSet:["/static/cc141c28981cf4371f574135a8c12265/7fc1e/header-accessibility-2.png 288w","/static/cc141c28981cf4371f574135a8c12265/a5df1/header-accessibility-2.png 576w","/static/cc141c28981cf4371f574135a8c12265/3cbba/header-accessibility-2.png 1152w","/static/cc141c28981cf4371f574135a8c12265/92c65/header-accessibility-2.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(b,{mdxType:"Caption"},"Carbon applies a header region around the whole UI shell header."))),(0,i.kt)("h3",null,"Labeling"),(0,i.kt)("p",null,"Carbon provides default names for each icon-only button in the header, and these\nnames are revealed on hover or focus. Interactions for some header components\nare covered under other component topics such as\n",(0,i.kt)("a",{parentName:"p",href:"/components/search/usage"},"search"),",\n",(0,i.kt)("a",{parentName:"p",href:"/components/notifications/usage"},"notifications"),", and the\n",(0,i.kt)("a",{parentName:"p",href:"components/UI-shell-right-panel/usage/#switcher"},"UI shell right panel switcher"),"."),(0,i.kt)(m,{mdxType:"Row"},(0,i.kt)(g,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAAB2UlEQVQoz2NgwAP8lPsY/FX6GPxV+xn8VPqY/FX7mczZ6xmCNCYwBWlMYPZR7GWEqYEDUVFRvBgEXFSLGEM0pzCAsAPDWoYwnalgHKQ6jcFNuZLRW62FQUxMDGIgiIEPWyjEMMVoL2UIUOvzC1DvD7Pir2IP1poQEaw1MddXuUcrUHkGQ4DyJEYnJyeIgSIiIngxEy8Dg4VyBEOc8bzEGMO5OQwM/xkSzObnxJvO7YnRWarnrpfDEGzawGRsYgT38m68WEx0l4iI6B4xKcE1opL8qxQVFXeLSvKvFJPiXyYlLXFQRlq+RE5ehkFKRpzJDxSW4uLidwlhUVHRu7Kycg/kZOUfyipInpeTk7srryB7RVJW5KawFGeRppIJg7qCEUug+gQGosH///8Z9i95zuCv2pfuKd8p5qPUbRqo3l8TqD6hyE+5T8BXCRrbKioqeLGysjKDmp4k2NAAxzSGWNOZGbFGc8XjzWdbxlvMaowxmV4erDVRKFhrIkO43hRGBklJSYJYTEKIQUhImMHG2JMh1mQWQ6LRSoZ403kMcWazGaKNZjAEafaDcZjuZOK86ynbDfby5MpdDDGm05kjDKYwxJnPYIy3mMkSYzKdJUR7EgMIh+tPYQAAFAaUHZI2DiEAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"annotation showing search, help, notification and app switcher icons",title:"annotation showing search, help, notification and app switcher icons",src:"/static/2dda9953a68f183fc66b7fc0f697a4c3/3cbba/header-accessibility-3.png",srcSet:["/static/2dda9953a68f183fc66b7fc0f697a4c3/7fc1e/header-accessibility-3.png 288w","/static/2dda9953a68f183fc66b7fc0f697a4c3/a5df1/header-accessibility-3.png 576w","/static/2dda9953a68f183fc66b7fc0f697a4c3/3cbba/header-accessibility-3.png 1152w","/static/2dda9953a68f183fc66b7fc0f697a4c3/92c65/header-accessibility-3.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(b,{mdxType:"Caption"},"Carbon provides default names for its icon-only components and reveals them on hover or focus."))),(0,i.kt)("h2",null,"Design recommendations"),(0,i.kt)("p",null,"For every product, there should be a one-time design exercise to annotate the UI\nshell keyboard interaction. This is an important step to carry out, since header\nfunctionality and component names vary significantly between products, even\nthough they appear similar until interacted with. Annotating expected behavior\nincreases consistent implementation. Where the product does not deviate from the\nstandard Carbon implementation, it can merely be annotated that the behaviour\nmatches what is in the ‘How Carbon works’ section."),(0,i.kt)(m,{mdxType:"Row"},(0,i.kt)(g,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAACTElEQVQoz62OW0gUcRTGvxX1D0qJ4e5cdmZ3Lo7jrs2u6ybDtlm6gll5KaUsDaSyNMhEwmpF1guoCIIR9Br0FPUkW6YUmU0P1ZNlq0aSk4t0QYLosZcJNx+C6CX64Mc53+F8nAP8RfNKF85u9csHR7G8fwRva8ewFBnCK7UbC/7LtoXg1T+DrVwI9+XTmJbboNMFKKIEaLSITr4cwYn21M5i+WB7Yt/A6GJkKJYIx8bmC7uPrRT3Ir7zXJpGifgdWOENWOcfwro4CzwCdvy4gTzrDmrDlTZYv44m9vYnE2X91mLFoPUm1Ge99vU8fuePYjLQkY4mAGkAjgMIb31p3bVgTVpAmQO+zgaEY6cA3QEQAEEKH7VY2Xpw4MgHX9/h9dLBhq/6SElzcQTgAJQyQA4AnQXULCDCFGE4fQ9GbOEMLy/f9CqFLzXVMydxbsNppw2B5Q0HSz/Ylpcbp5zM1GalGWZGZPlnLsb5VHS6DM7BGJLTZQgsZ2A3W4godqEXwQzFLU2pqvrJ7/O/F9yC6bA7TLfLZcqCuMYxbLJAVpJOmknKorTGc/wqz/GmJIomTVGmJErmpseStwffqq7he/V125Ock2QcKulCNpnJbCRf9GEyt72FTGc2khXvFXIblWRV6yX30urJc/sZ8oJqI3FbHUkGYmQSh1Iz3FJa8LlqHBvVE7iQG0IF7PDDhpZsH6KeGrTmlKA5S0O3WIl6SLgkV6GJeNGWp6doIh70KNU4mqGmPGLCAczmt2MuvwMneB01XAB1XMk/89/1E4AOsl260UNTAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Annotated header region stating 'Header functionality, roles and names match Carbon defaults'",title:"Annotated header region stating 'Header functionality, roles and names match Carbon defaults'",src:"/static/79ea42f873521f1fed460ece8042c869/3cbba/header-accessibility-4.png",srcSet:["/static/79ea42f873521f1fed460ece8042c869/7fc1e/header-accessibility-4.png 288w","/static/79ea42f873521f1fed460ece8042c869/a5df1/header-accessibility-4.png 576w","/static/79ea42f873521f1fed460ece8042c869/3cbba/header-accessibility-4.png 1152w","/static/79ea42f873521f1fed460ece8042c869/92c65/header-accessibility-4.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(b,{mdxType:"Caption"},"Annotate the header, even if your design matches the default Carbon UI shell header behavior."))),(0,i.kt)("p",null,"Once a product-specific header annotation exists, individual product pages only\nneed to annotate the header if something differs."),(0,i.kt)("p",null,"Where the header deviates from the default Carbon behavior or labeling, it\nshould be annotated. Such annotations could call out different labels for icons\nor indicate interaction changes such as keyboard navigation."),(0,i.kt)(m,{mdxType:"Row"},(0,i.kt)(g,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAACEklEQVQoz62RS2sTYRSG36oQkIK5zCWTZiZOZ+abyUySMaaxYxqbiMhYJCp4Q0UpVFSiBKuNRltaRHTZjf9Bd25chLaLYtyIFK2mXqDUkLhQXPgLhJFMYjELwYUPPPByOOeFjw/4B+pDd1C3plHfc7eTh6fxLlXBCnsJr/ovYCVwEavkemeZpukeGYbpyQGKQmJAwjXDhpOr4nWyvGN1qMK8McvMS3rC68DBOTGDLK/DTwXgHv3Gtm2USiXMz8+72ev3IcwEARp4Yk9uaeUeYi07W32//56zNjrnvE1VFn5OPMbk8fG+w1Ye+b1ZgKKozcJ0Oo1CoYBisQjLsuDz+cBSDMBuBw5SOJLK4VtibrhpzpxsJWdPfE/dtyJJHQgD/btF7IonOk/u0sfz/CNJkl5omrbA8/wSTdNLFE0tSiFhOWnEawnNqMkqqQry4LO2oixVY0SrxRStFt0pL3Oh0CJYlt0sFAThqSzLX03TXBdFcYNhGNfBAaERM4yGoeuf47rRjCpqK0rUlkbUJiGkoSqkoYlyI8yHN3p+03GcHttIAH6kH2x97j3vqXX9pE55Pio3XT8oNzzr+m1PFce2OV8cQJblnoI/ScTiCEkRjCujuMrtw+VgBleCGdwiYygrh1ynFBsz0QKOeo3OEcdxfzXEcaCCDPJCHGdIFqeUEZxuS7oqI+7sLMniQMSEP0jjv/MLoOyhBFksL7EAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"an annotation stating the search bar is persistently expanded",title:"an annotation stating the search bar is persistently expanded",src:"/static/b8fb3655880b8e8f6ef72ca6cc7befdd/3cbba/header-accessibility-5.png",srcSet:["/static/b8fb3655880b8e8f6ef72ca6cc7befdd/7fc1e/header-accessibility-5.png 288w","/static/b8fb3655880b8e8f6ef72ca6cc7befdd/a5df1/header-accessibility-5.png 576w","/static/b8fb3655880b8e8f6ef72ca6cc7befdd/3cbba/header-accessibility-5.png 1152w","/static/b8fb3655880b8e8f6ef72ca6cc7befdd/92c65/header-accessibility-5.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(b,{mdxType:"Caption"},"Annotate if the design modifies the default keyboard or component interaction."))),(0,i.kt)("h2",null,"Development considerations"),(0,i.kt)("p",null,"Keep these considerations in mind if you are modifying Carbon or creating a\ncustom component."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Carbon uses the HTML 5 ",(0,i.kt)("inlineCode",{parentName:"li"},"header")," component instead of an ARIA landmark to set\nthe region."),(0,i.kt)("li",{parentName:"ul"},"Carbon includes the “Skip to main content” link as the first item on the page\nwith a ",(0,i.kt)("inlineCode",{parentName:"li"},'tabindex="0"'),", but hides it through CSS until it receives focus.")))}f.isMDXComponent=!0}}]);