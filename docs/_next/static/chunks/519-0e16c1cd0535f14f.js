"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[519],{8222:function(e,n,r){var t=r(5893),l=r(7294),i=r(711),s=r(5712),a=r(8005),c=r(6846),o=r(967),u=r(5150),d=r(8093),h=r(1163),x=r(1664),m=r(1897),g=r(3815),f=r(2154),p=r(987),j=r(873);function y(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function v(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){y(e,n,r[n])}))}return e}n.Z=function(e){var n=e.source,r=e.frontMatter,y=r.mods,Z=r.outlines,b=r.prev,k=r.next,w=(0,m.$G)("countrylevel"),C=w.t,F=(w.i18n,(0,h.useRouter)()),S=(0,l.useState)(!1),E=S[0],q=S[1],O=((0,l.useRef)(),(0,l.useState)(!1)),A=(O[0],O[1],(0,l.useState)(F.query.locale?F.query.locale:"en")),P=A[0],H=A[1],_=(0,l.useState)("en"),R=_[0],z=_[1],D=(0,l.useState)([]),I=D[0],L=D[1],G=(0,l.useState)([{key:"bangladesh",value:"bangladesh",flag:"bd",text:"Bangladesh"},{key:"germany",value:"germany",flag:"de",text:"Germany"}]),N=G[0],B=G[1],M=(0,l.useState)([{key:"en",value:"en",text:"English"}]);M[0],M[1];(0,l.useEffect)((function(){B(g[P].map((function(e){return{key:e,value:e,text:(0,j.f)(e)}})))}),[P]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.Z,{onClose:function(){return q(!1)},onOpen:function(){return q(!0)},open:E,dimmer:"inverted",children:[(0,t.jsxs)(i.Z.Header,{children:["Modules available in ",p[R]]}),(0,t.jsx)(i.Z.Content,{children:(0,t.jsx)(s.Z,{style:{padding:"1.5rem",textAlign:"center"},children:I.map((function(e,n){return(0,t.jsx)("div",{style:{border:"0.25px solid #D3D3D3",padding:"0.5rem",margin:"1rem 3rem"},children:(0,t.jsx)(x.default,{href:"/".concat(R,"/").concat(e),passHref:!0,children:(0,t.jsx)("h5",{style:{cursor:"pointer"},children:(0,j.f)(e)})})},n)}))})})]}),(0,t.jsx)(a.Z,{children:(0,t.jsxs)(a.Z.Row,{style:{margin:"0px",padding:"0px"},children:[(0,t.jsx)(a.Z.Column,{width:3,style:{background:"#E8EFF2",color:"black",padding:"2.5rem"},children:(0,t.jsxs)(s.Z,{children:[(0,t.jsx)("h4",{style:{padding:"0.25rem"},children:C("language")}),(0,t.jsx)(c.Z,{placeholder:"Change Locale",fluid:!0,selection:!0,defaultValue:P,options:[{key:"en",value:"en",text:"English"},{key:"es",value:"es",text:"Spanish"},{key:"de",value:"de",text:"German"}],onChange:function(e,n){if(f[F.query.country].includes(n.value)){var r=F.asPath.replace("/".concat(F.query.locale),"/".concat(n.value));H(n.value),F.push(r)}f[F.query.country].includes(n.value)||(z(n.value),L(g[n.value]),q(!0))},style:{margin:"0.2rem"}}),(0,t.jsx)("br",{}),(0,t.jsx)("p",{style:{padding:"0.35rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),(0,t.jsx)("h4",{style:{padding:"0.25rem"},children:C("region")}),(0,t.jsx)(c.Z,{placeholder:"Change Locale",fluid:!0,selection:!0,defaultValue:F.query.country,options:N,onChange:function(e,n){var r=F.asPath.replace("/".concat(F.query.country),"/".concat(n.value));F.push(r)},style:{margin:"0.2rem"}}),(0,t.jsx)("br",{}),(0,t.jsx)("hr",{}),(0,t.jsx)("br",{}),(0,t.jsx)("h3",{style:{padding:"0.25rem",cursor:"pointer"},onClick:function(){return F.push("/".concat(F.query.locale,"/").concat(F.query.country))},children:(0,t.jsx)("a",{children:C("content_page")})}),y&&y.map((function(e,n){return(0,t.jsx)("p",{style:{padding:"0rem 0.35rem"},children:(0,t.jsx)(x.default,{href:e.match(/\[(.*?)\]/)[1],passHref:!0,children:(0,t.jsxs)("a",{style:{cursor:"pointer"},children:["Module\xa0",n,":\xa0",e.replace(/\s*(?:\[[^\]]*\]|\([^)]*\))\s*/g,"")]})},n)},n)}))]})}),(0,t.jsxs)(a.Z.Column,{width:10,style:{margin:0,padding:0},children:[(0,t.jsxs)(s.Z,{textAlign:"justified",style:{padding:"2rem 1rem 0rem 1rem"},children:[(0,t.jsx)(d.R,v({},n)),(0,t.jsx)(a.Z,{style:{marginTop:"1rem"},children:(0,t.jsxs)(a.Z.Row,{children:[(0,t.jsx)(a.Z.Column,{width:2,children:""!==b?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(x.default,{href:b,passHref:!0,children:(0,t.jsxs)(o.Z,{icon:!0,labelPosition:"left",size:"large",style:{color:"#2A71FF",background:"#EBF1FF"},children:[C("back"),(0,t.jsx)(u.Z,{name:"angle left"})]})})}):null}),(0,t.jsx)(a.Z.Column,{width:10,children:"\xa0"}),(0,t.jsx)(a.Z.Column,{width:2,style:{textAlign:"right"},children:k?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(x.default,{href:k,passHref:!0,children:(0,t.jsxs)(o.Z,{icon:!0,labelPosition:"right",size:"large",style:{color:"#2A71FF",background:"#EBF1FF"},children:[C("next"),(0,t.jsx)(u.Z,{name:"angle right"})]})})}):null})]})})]}),(0,t.jsx)(s.Z,{textAlign:"justified",style:{padding:"1rem"}})]}),(0,t.jsx)(a.Z.Column,{width:3,style:{borderLeft:"0.15px solid #EFEFEF",height:"80vh",margin:"1rem 0rem"},children:(0,t.jsx)(s.Z,{textAlign:"justified",style:{padding:"2rem 1rem"},children:Z?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h1",{children:C("outlines")}),Z.map((function(e,n){return(0,t.jsx)("h4",{children:(0,t.jsx)("a",{href:"#".concat(e.toLowerCase().replace(/ /g,"-").replace(/[^\w\xc4\xe4\xd6\xf6\xdc\xfc-]+/g,"")),children:e})},n)}))]}):null})})]})})]})}},5839:function(e,n,r){r.d(n,{Z:function(){return g}});var t=r(5893),l=r(7294),i=r(3272),s=r(5517),a=r(1163),c=function(){var e=(0,l.useState)(!1),n=e[0],r=e[1];(0,l.useEffect)((function(){var e=window.matchMedia("(min-width: 960px)"),n=function(){return r(e.matches)};return n(),window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}}),[n]);var c=(0,a.useRouter)();return(0,t.jsxs)(i.Z,{fixed:"top",style:{background:"#00B1F6",margin:"0px"},children:[(0,t.jsx)(i.Z.Item,{style:{border:"0px",cursor:"pointer"},children:(0,t.jsx)(s.Z,{src:"https://i.imgur.com/lXrEJZj.png",size:"small",wrapped:!0,onClick:function(){return c.push("/".concat(c.query.locale))}})}),(0,t.jsx)(i.Z.Item,{style:{border:"0px",color:"white",cursor:"pointer"},children:(0,t.jsx)("h2",{onClick:function(){return c.push("/".concat(c.query.locale))},style:{fontSize:"".concat(n?"2em":"0.9em")},children:" Open GIS Curriculum"})})]})},o=r(4623),u=r(5712),d=r(8005),h=r(5150),x=r(7027),m=function(){return(0,t.jsx)(o.Z,{inverted:!0,style:{margin:"2.5em 0em 0em 0em",padding:"1.5em 0em",backgroundColor:"#333333"},children:(0,t.jsx)(u.Z,{textAlign:"center",children:(0,t.jsxs)(d.Z,{inverted:!0,children:[(0,t.jsxs)(d.Z.Column,{width:4,style:{textAlign:"left"},children:[(0,t.jsx)("h4",{children:" Follow us"}),(0,t.jsxs)(d.Z.Column,{children:[(0,t.jsx)("a",{href:"",target:"_blank",className:"socialicon",children:(0,t.jsx)(h.Z,{name:"facebook"})}),(0,t.jsx)("a",{href:"",target:"_blank",className:"socialicon",children:(0,t.jsx)(h.Z,{name:"twitter"})}),(0,t.jsx)("a",{href:"",target:"_blank",className:"socialicon",children:(0,t.jsx)(h.Z,{name:"linkedin"})})]})]}),(0,t.jsx)(d.Z.Column,{width:8,style:{textAlign:"left"},children:(0,t.jsxs)(x.Z,{link:!0,inverted:!0,children:[(0,t.jsx)(x.Z.Item,{children:(0,t.jsx)(s.Z,{centered:!0,size:"small",src:"https://i.imgur.com/lXrEJZj.png"})}),(0,t.jsx)(x.Z.Item,{children:(0,t.jsx)("a",{href:"https://schoolofdata.org/",target:"_blank",children:"School of data"})})]})})]})})})};function g(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c,{}),(0,t.jsx)("div",{style:{margin:"0.2rem",marginTop:"4rem",padding:"0.2rem"},children:e.children}),(0,t.jsx)(m,{})]})}},6970:function(e,n,r){var t=r(5893),l=r(7294),i=r(711),s=r(5712),a=r(1651),c=r(4623),o=r(3272),u=r(6846),d=r(967),h=r(8005),x=r(5150),m=r(8093),g=r(1163),f=r(1664),p=r(1897),j=r(3815),y=r(2154),v=r(987),Z=r(873);function b(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function k(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){b(e,n,r[n])}))}return e}n.Z=function(e){var n=e.source,r=e.frontMatter,b=r.mods,w=(r.outlines,r.prev),C=r.next,F=(0,p.$G)("countrylevel"),S=F.t,E=(F.i18n,(0,g.useRouter)()),q=(0,l.useState)(!1),O=q[0],A=q[1],P=((0,l.useRef)(),(0,l.useState)(!1)),H=P[0],_=P[1],R=(0,l.useState)(E.query.locale?E.query.locale:"en"),z=R[0],D=R[1],I=(0,l.useState)("en"),L=I[0],G=I[1],N=(0,l.useState)([]),B=N[0],M=N[1],J=(0,l.useState)([{key:"bangladesh",value:"bangladesh",flag:"bd",text:"Bangladesh"},{key:"germany",value:"germany",flag:"de",text:"Germany"}]),V=J[0],T=J[1],U=(0,l.useState)([{key:"en",value:"en",text:"English"}]);U[0],U[1];(0,l.useEffect)((function(){T(j[z].map((function(e){return{key:e,value:e,text:(0,Z.f)(e)}})))}),[z]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.Z,{onClose:function(){return A(!1)},onOpen:function(){return A(!0)},open:O,dimmer:"inverted",children:[(0,t.jsxs)(i.Z.Header,{children:["Modules available in ",v[L]]}),(0,t.jsx)(i.Z.Content,{children:(0,t.jsx)(s.Z,{style:{padding:"1.5rem",textAlign:"center"},children:B.map((function(e,n){return(0,t.jsx)("div",{style:{border:"0.25px solid #D3D3D3",padding:"0.5rem",margin:"1rem 3rem"},children:(0,t.jsx)(f.default,{href:"/".concat(L,"/").concat(e),passHref:!0,children:(0,t.jsx)("h5",{style:{cursor:"pointer"},children:(0,Z.f)(e)})})},n)}))})})]}),(0,t.jsxs)(a.Z.Pushable,{as:c.Z,children:[(0,t.jsxs)(a.Z,{as:o.Z,animation:"overlay",icon:"labeled",onHide:function(){return _(!1)},vertical:!0,visible:H,width:"wide",style:{border:"0px",maxWidth:"80vw"},children:[(0,t.jsx)(o.Z.Item,{children:"\xa0"}),(0,t.jsxs)(o.Z.Item,{style:{textAlign:"left"},children:[(0,t.jsx)("h4",{children:S("language")}),(0,t.jsx)(u.Z,{placeholder:"Change Locale",fluid:!0,selection:!0,defaultValue:z,options:[{key:"en",value:"en",text:"English"},{key:"es",value:"es",text:"Spanish"},{key:"de",value:"de",text:"German"}],onChange:function(e,n){if(y[E.query.country].includes(n.value)){var r=E.asPath.replace("/".concat(E.query.locale),"/".concat(n.value));D(n.value),E.push(r)}y[E.query.country].includes(n.value)||(G(n.value),M(j[n.value]),A(!0))}}),(0,t.jsx)("br",{})]}),(0,t.jsxs)(o.Z.Item,{style:{textAlign:"left"},children:[(0,t.jsx)("h4",{children:S("region")}),(0,t.jsx)(u.Z,{placeholder:"Change Locale",fluid:!0,selection:!0,defaultValue:E.query.country,options:V,onChange:function(e,n){var r=E.asPath.replace("/".concat(E.query.country),"/".concat(n.value));E.push(r)}}),(0,t.jsx)("br",{})]}),(0,t.jsxs)(o.Z.Item,{style:{textAlign:"left"},children:[(0,t.jsx)("h4",{style:{padding:"0.25rem",cursor:"pointer"},onClick:function(){return E.push("/".concat(E.query.locale,"/").concat(E.query.country))},children:(0,t.jsx)("a",{children:S("content_page")})}),b&&b.map((function(e,n){return(0,t.jsx)("p",{style:{padding:"0rem 0.12rem"},children:(0,t.jsx)(f.default,{href:e.match(/\[(.*?)\]/)[1],passHref:!0,children:(0,t.jsxs)("a",{style:{cursor:"pointer"},children:["Module\xa0",n,":\xa0",e.replace(/\s*(?:\[[^\]]*\]|\([^)]*\))\s*/g,"")]})},n)},n)}))]})]}),(0,t.jsx)(a.Z.Pusher,{dimmed:H,children:(0,t.jsxs)(c.Z,{basic:!0,children:[(0,t.jsxs)("div",{style:{margin:"0rem",padding:"0.15rem"},children:[(0,t.jsx)(d.Z,{onClick:function(){return _(!H)},children:S("content_menu")}),(0,t.jsx)(m.R,k({},n)),(0,t.jsx)(h.Z,{style:{marginTop:"1rem"},children:(0,t.jsxs)(h.Z.Row,{children:[(0,t.jsx)(h.Z.Column,{width:2,children:""!==w?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(f.default,{href:w,passHref:!0,children:(0,t.jsxs)(d.Z,{icon:!0,labelPosition:"left",size:"large",style:{color:"#2A71FF",background:"#EBF1FF"},children:[S("back"),(0,t.jsx)(x.Z,{name:"angle left"})]})})}):null}),(0,t.jsx)(h.Z.Column,{width:7,children:"\xa0"}),(0,t.jsx)(h.Z.Column,{width:2,style:{textAlign:"center"},children:C?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(f.default,{href:C,passHref:!0,children:(0,t.jsxs)(d.Z,{icon:!0,labelPosition:"right",size:"large",style:{color:"#2A71FF",background:"#EBF1FF"},children:[S("next"),(0,t.jsx)(x.Z,{name:"angle right"})]})})}):null}),(0,t.jsx)(h.Z.Column,{width:1,children:" \xa0"})]})})]}),(0,t.jsx)(s.Z,{textAlign:"justified",style:{padding:"1rem"}})]})})]})]})}},873:function(e,n,r){r.d(n,{f:function(){return t}});var t=function(e){var n=e.charAt(0).toUpperCase(),r=e.slice(1);return"".concat(n).concat(r)}},2154:function(e){e.exports=JSON.parse('{"bangladesh":["en"],"ghana":["en"],"nigeria":["en"],"argentina":["es"],"mexico":["es"],"germany":["de"]}')},3815:function(e){e.exports=JSON.parse('{"en":["bangladesh","ghana","nigeria"],"es":["argentina","mexico"],"de":["germany"]}')},987:function(e){e.exports=JSON.parse('{"en":"English","es":"Spanish","de":"German"}')}}]);