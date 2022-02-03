(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[506],{453:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[locale]/showcase",function(){return r(9145)}])},5839:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(5893),i=r(3272),a=r(5712),o=r(5517),s=r(9683),l=r(1163),c=function(){var e=(0,s.Z)().isDesktop,t=(0,l.useRouter)();return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(i.Z,{fixed:"top",size:"large",style:{background:"#22B7F8",margin:"0px"},children:(0,n.jsx)(a.Z,{fluid:!0,children:(0,n.jsx)(i.Z.Item,{style:{margin:"".concat(e?"0rem 2rem":"0rem"),border:"0px",cursor:"pointer"},children:(0,n.jsx)(o.Z,{src:"https://i.imgur.com/4CAWd5p.png",size:"small",wrapped:!0,onClick:function(){return t.push("/".concat(t.query.locale))}})})})})})},d=r(4623),u=r(8005),h=r(3623),m=r(7027),p=r(345),g=function(){var e=(0,s.Z)().isDesktop;return(0,n.jsx)(d.Z,{inverted:!0,vertical:!0,style:{margin:"5em 0em 0em",padding:"5em 0em",background:"#DDE3EA"},children:(0,n.jsxs)(a.Z,{fluid:!0,textAlign:"center",children:[(0,n.jsxs)(u.Z,{divided:!0,inverted:!0,stackable:!0,children:[(0,n.jsx)(u.Z.Column,{width:6,children:(0,n.jsx)(o.Z,{centered:!0,size:"medium",src:"https://i.imgur.com/WjH95wR.png"})}),(0,n.jsxs)(u.Z.Column,{width:6,children:[(0,n.jsx)(h.Z,{inverted:!0,as:"h4",content:""}),(0,n.jsxs)(m.Z,{horizontal:!0,link:!0,size:"large",children:[(0,n.jsx)(m.Z.Item,{as:"a",href:"#",children:"Privacy Policy"}),(0,n.jsx)(m.Z.Item,{as:"a",href:"#",children:"IP Policy"}),(0,n.jsx)(m.Z.Item,{as:"a",href:"#",children:"Cookie Policy"}),(0,n.jsx)(m.Z.Item,{as:"a",href:"#",children:"Term of Use"}),(0,n.jsx)(m.Z.Item,{as:"a",href:"#",children:"Jobs"}),(0,n.jsx)(m.Z.Item,{as:"a",href:"#",children:"Contact"})]})]})]}),(0,n.jsx)(p.Z,{inverted:!0,section:!0,style:{margin:"0px 18rem"}}),(0,n.jsxs)("div",{fluid:!0,style:{textAlign:"left",margin:"".concat(e?"1rem 18rem":"0.25rem 1rem "),fontSize:"1.2em",color:"black"},children:[(0,n.jsxs)("p",{children:[(0,n.jsx)("b",{children:"Source code"})," available under the MIT license."]}),(0,n.jsxs)("p",{children:["Content on this site, made by ",(0,n.jsx)("b",{children:"Open Knowledge Foundation"}),", is licensed under a ",(0,n.jsx)("b",{children:"Creative Commons Attribution 4.0 International License."})]}),(0,n.jsxs)("p",{children:["Refer to our ",(0,n.jsx)("b",{children:"attribution page"})," for attributions of other work on the site."]})]})]})})};function f(e){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c,{}),(0,n.jsx)("div",{style:{marginTop:"5rem"},children:e.children}),(0,n.jsx)(g,{})]})}},9683:function(e,t,r){"use strict";var n=r(7294);t.Z=function(){var e=(0,n.useState)(!1),t=e[0],r=e[1];return(0,n.useEffect)((function(){var e=window.matchMedia("(min-width: 960px)"),t=function(){return r(e.matches)};return t(),window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[t]),{isDesktop:t}}},9145:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return k}});var n=r(5893),i=r(5839),a=r(1163),o=r(7294),s=r(1897),l=JSON.parse('[{"title":"Tropical Cyclone Risk Assessment Model","header_image":"","country":"Philippines","language":"en","authors":"Miguel Adrian Garcia, Gerson Hubert Aquino","project_summary":"The project is a Risk Assessment Model which follows the Risk Formula, Risk = Hazard X Vulnerability X Exposure, to compute the risk score and corresponding activation level for a Tropical Cyclone. The model utilizes population data, poverty indices, and tropical cyclone intensity as its variables for Exposure, Vulnerability, and Hazard, respectively. Using these set of variables, the model will compute the risk scores of specific provinces/boundaries which determines the activation level for a Tropical Cyclone affecting the country.","tools":"qgis, datawrapper","themes_keywords":"risk assessment, tropical cyclone, hazard, vulnerability, exposure","readmore":"https://docs.google.com/document/d/1jYX9XAi9_j1fbFtsYoKnhrOC6uNFQbkdoyt0PR7feas/edit?usp=sharing","algorithms":"buffer, extract by location, field calculator,graphical modeler","datasets":"administrative boundary: https://github.com/benhur07b/phl-admin-psgc\\n\\npopulation layer: Philippine Statistics Authority\\n\\npoverty indices: Philippine Statistics Authority (https://psa.gov.ph/poverty-press-releases/nid/162559)\\n\\npopulation density: High Resolution Settlement Layer (https://data.humdata.org/dataset/philippines-high-resolution-population-density-maps-demographic-estimates)\\n\\ntropical cyclone tracks (GONI): NIII JP (http://agora.ex.nii.ac.jp/digital-typhoon/year/wnp/2020.html.en)"},{"title":"Bataan Barangays Most Exposed to Flood","header_image":"","country":"Philippines","language":"en","authors":"Patricia Anne Delmendo, Jericho Mendoza","project_summary":"In the Philippines, the University of the Philippines Resilience Institute (UPRI) combined Meta\u2019s High Resolution Settlement Layer (HRSL) with recent census data (2020) of the province of Bataan in order to generate an updated settlement area and population density map layer of the province. Using this updated population layer, UPRI was able to calculate and present the flood-hazard exposed population in the different barangays of the province.","tools":"qgis, datawrapper, blender, global mapper, arcgis","themes_keywords":"flood, flood hazard, affected population","readmore":"https://docs.google.com/document/d/1spWZfPW6k6SrgWigEYOpKQeIaMDv6zDtnjzA0_BdQto/edit?usp=sharing","algorithms":"vectorize, intersection, field calculator","datasets":"digital elevation model: IfSAR\\nadministrative boundary: PhilGIS\\npopulation density: HRSL\\nflood hazard: UP NOAH Center"},{"title":"Family farming","header_image":"","country":"Brazil","language":"en","authors":"Agmerson Bruno, Marcus Boente","project_summary":"The project explores the relevance of family farming for Brazil using official data.","tools":"qgis, google sheets, ms excel","themes_keywords":"family farming, agriculture","readmore":"https://docs.google.com/document/d/1Jvy4WDte3G5nsPbho4jJgWxSrlrEVtLv67nQyHIksSo/edit?usp=sharing","algorithms":"","datasets":"agricultural census,\\nDeclaration of Aptitude to PRONAF,\\nadministrative boundary"},{"title":"Rural Credit","header_image":"","country":"Brazil","language":"en","authors":"Eduardo Marcusso","project_summary":"The project uses several sources of spatial data to study the State of Cear\xe1 based on data from Human Development Index, official licenses, and rural credit. We have merged them and created analysis, knowledge, and territorial intelligence to support MAPA\'s public policy.","tools":"qgis, google sheets, ms excel","themes_keywords":"agriculture, financial credit","readmore":"https://docs.google.com/document/d/1wq_KF-buF8qfIYoy7mLwSkgwtDTgjA7XDl0vz8DFmrg/edit?usp=sharing","algorithms":"","datasets":"Shapefiles of Brazilian states,\\nCities boundaries in Cear\xe1,\\nMunicipal Human Development Index for Brazilian Cities,\\nRural credit,\\nDeclaration of Aptitude to PRONAF  (National Program for Strengthening Family Agriculture)"},{"title":"Precipitation in Stung Treng province, Cambodia","header_image":"","country":"Cambodia","language":"en","authors":"Cambodia National Mekong Committee","project_summary":"Strung Treng province is one of the important provinces in the Mekong basin of Cambodia, since RAMSAR site is located in the province. As climate change is very sensitive, the pilot project may tell us some change of precipitation during the period of time from 2015 to 2019, and could see the trend of rainfall in the future","tools":"qgis","themes_keywords":"precipitation, rainfall, mekong","readmore":"https://docs.google.com/document/d/1snrt83CQrb1tR1lYhUC0jt7-MEwizL0C/edit?usp=sharing&ouid=106197508188487009998&rtpof=true&sd=true","algorithms":"intersection, clip raster, raster calculator","datasets":"GADM"},{"title":"Flood Risk Assessment Map of NamNgum Basin, Laos","header_image":"","country":"Lao PDR","language":"en","authors":"Malabou Baylatry, Soukphaphone Soodtharavong, Soutvilay Douangphachan, Oudomsak Bounmanivanh","project_summary":"Our project was about generating the flood extend map in lower Namngum basin and calculating the risk area of land use in mentioned basin.","tools":"qgis, ms excel","themes_keywords":"flood risk assessment","readmore":"https://docs.google.com/document/d/1kFsaMtbocNPAamBBciDiFS2ptOgUFOe7/edit?usp=sharing&ouid=106197508188487009998&rtpof=true&sd=true","algorithms":"intersection, raster calculator","datasets":"DEM,\\nflood hazard,\\nadministrative boundary,\\nland use"},{"title":"Sirindhorn Dam Storage Capacity","header_image":"","country":"Thailand","language":"en","authors":"Peraya Tantianuparp, Suluk Chaikhan","project_summary":"This project aims to monitor capacity and show monthly water extent of Sirindhorn reservoir in 2020 using map visualization and analytical data. The project can be applied with other reservoirs and related projects in the future.","tools":"qgis","themes_keywords":"reservoir storage capacity, water level warning","readmore":"https://docs.google.com/document/d/1odipdouDcvNHAd9GgVav9lgy3xgjXkbu/edit?usp=sharing&ouid=106197508188487009998&rtpof=true&sd=true","algorithms":"intersection, clip raster, raster calculator, clip vector, buffer","datasets":"SRTM DEM,\\nSentinel-1,\\nSentinel-2,\\nwater volume,\\nreservoir boundary"}]'),c=r(9683),d=r(987),u=r(8005),h=r(5712),m=r(6846),p=r(5517),g=r(967),f=function(e){var t=e.filters,r=e.showcaseData,i=e.filteredRows,a=e.getOptions,o=e.filterSelectHandler,l=e.getLangname,c=(0,s.$G)("countrylevel").t;return(0,n.jsx)(u.Z,{children:(0,n.jsxs)(u.Z.Row,{style:{height:"100%",paddingTop:"2rem"},children:[(0,n.jsx)(u.Z.Column,{width:4,style:{backgroundColor:"#65ABEA"},children:Object.keys(t).map((function(e){return(0,n.jsx)(u.Z.Row,{style:{margin:"0px",padding:"0px"},children:(0,n.jsx)(u.Z.Column,{style:{color:"black",padding:"1rem 0rem 1rem 1.5rem"},children:(0,n.jsxs)(h.Z,{children:[(0,n.jsx)("h4",{style:{padding:"0.25rem"},children:c(e)}),(0,n.jsx)(m.Z,{placeholder:"Change "+e,fluid:!0,multiple:!0,selection:!0,clearable:!0,options:a(e),onChange:o(e),style:{margin:"0.2rem"}}),(0,n.jsx)("br",{})]})})})}))}),(0,n.jsx)(u.Z.Column,{width:12,children:r.filter((function(e,t){return i.includes(t)})).map((function(e){return console.log("row",e),(0,n.jsxs)(u.Z,{style:{margin:"0.25rem 1rem 0.25rem 1rem",padding:"0.25rem",border:"solid #65ABEA 1px",borderRadius:"0.25rem",width:"95%"},children:[(0,n.jsxs)(u.Z.Row,{children:[(0,n.jsxs)(u.Z.Column,{width:4,children:[(0,n.jsx)(p.Z,{src:e.image,alt:e.title}),(0,n.jsxs)("h4",{children:["Country: ",(0,n.jsx)("span",{children:e.country})]}),(0,n.jsxs)("h4",{children:["Language: ",(0,n.jsx)("span",{children:l[e.language]})]}),(0,n.jsxs)("h4",{children:["Authors: ",(0,n.jsx)("span",{children:e.authors})]})]}),(0,n.jsxs)(u.Z.Column,{width:10,children:[(0,n.jsx)("h3",{children:e.title}),(0,n.jsx)("h4",{children:"Project Summary"}),(0,n.jsx)("p",{children:e.project_summary}),(0,n.jsx)("h4",{children:"Tools"}),(0,n.jsx)("div",{style:{display:"flex",direction:"row"},children:e.tools.split(",").map((function(e){return(0,n.jsx)("span",{style:{backgroundColor:"#EEEEEE",padding:"0.25rem",marginLeft:"0.25rem",borderRadius:"0.15rem",cursor:"pointer"},children:e})}))}),(0,n.jsx)("h4",{children:"Themes and Keywords"}),e.themes_keywords.split(",").map((function(e){return(0,n.jsx)("span",{style:{backgroundColor:"#EEEEEE",padding:"0.25rem",marginLeft:"0.25rem",borderRadius:"0.15rem",cursor:"pointer"},children:e})})),(0,n.jsx)("h4",{children:"Algorithms"}),e.algorithms.split(",").map((function(e){return(0,n.jsx)("span",{style:{backgroundColor:"#EEEEEE",padding:"0.25rem",marginLeft:"0.25rem",borderRadius:"0.15rem",cursor:"pointer"},children:e})})),(0,n.jsx)("h4",{children:"Datasets"}),(0,n.jsx)("p",{children:e.datasets})]})]}),(0,n.jsxs)(u.Z.Row,{children:[(0,n.jsx)(u.Z.Column,{width:12}),(0,n.jsx)(u.Z.Column,{width:4,children:(0,n.jsx)("a",{href:e.readmore,target:"_blank",children:(0,n.jsx)(g.Z,{primary:!0,children:"Read full report"})})})]})]})}))})]})})},y=r(1651),j=r(4623),x=r(3272),v=(r(1664),function(e){var t=e.filters,r=e.showcaseData,i=e.filteredRows,l=e.getOptions,c=e.filterSelectHandler,d=e.getLangname,f=(0,s.$G)("countrylevel").t,v=((0,a.useRouter)(),(0,o.useState)(!1)),b=v[0],w=v[1];return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(y.Z.Pushable,{as:j.Z,children:[(0,n.jsxs)(y.Z,{as:x.Z,animation:"overlay",icon:"labeled",onHide:function(){return w(!1)},vertical:!0,visible:b,width:"wide",style:{border:"0px",maxWidth:"80vw",height:"100vh"},children:[(0,n.jsx)(x.Z.Item,{children:"\xa0"}),Object.keys(t).map((function(e,t){return(0,n.jsxs)(x.Z.Item,{style:{textAlign:"left"},children:[(0,n.jsx)("h4",{style:{padding:"0.25rem"},children:f(e)}),(0,n.jsx)(m.Z,{placeholder:"Change "+e,fluid:!0,multiple:!0,selection:!0,clearable:!0,options:l(e),onChange:c(e),style:{margin:"0.2rem"}}),(0,n.jsx)("br",{})]},t)}))]}),(0,n.jsx)(y.Z.Pusher,{dimmed:b,children:(0,n.jsxs)(j.Z,{basic:!0,children:[(0,n.jsxs)("div",{style:{margin:"0rem",padding:"0.2rem"},children:[(0,n.jsx)(g.Z,{onClick:function(){return w(!b)},children:f("content_menu")}),r.filter((function(e,t){return i.includes(t)})).map((function(e){return console.log("row",e),(0,n.jsxs)(u.Z,{style:{margin:"0.2rem",padding:"0.25rem",border:"solid #65ABEA 1px",borderRadius:"0.25rem"},children:[(0,n.jsx)(u.Z.Row,{children:(0,n.jsxs)(u.Z.Column,{width:16,children:[(0,n.jsx)(p.Z,{src:e.image,alt:e.title}),(0,n.jsxs)("h4",{children:["Country: ",(0,n.jsx)("span",{children:e.country})]}),(0,n.jsxs)("h4",{children:["Language: ",(0,n.jsx)("span",{children:d[e.language]})]}),(0,n.jsxs)("h4",{children:["Authors: ",(0,n.jsx)("span",{children:e.authors})]}),(0,n.jsx)("h3",{children:e.title}),(0,n.jsx)("h4",{children:"Project Summary"}),(0,n.jsx)("p",{children:e.project_summary}),(0,n.jsx)("h4",{children:"Tools"}),(0,n.jsx)("div",{style:{display:"flex",direction:"row"},children:e.tools.split(",").map((function(e){return(0,n.jsx)("span",{style:{backgroundColor:"#EEEEEE",padding:"0.25rem",marginLeft:"0.25rem",borderRadius:"0.15rem",cursor:"pointer"},children:e})}))}),(0,n.jsx)("h4",{children:"Themes and Keywords"}),e.themes_keywords.split(",").map((function(e){return(0,n.jsx)("span",{style:{backgroundColor:"#EEEEEE",padding:"0.25rem",marginLeft:"0.25rem",borderRadius:"0.15rem",cursor:"pointer"},children:e})})),(0,n.jsx)("h4",{children:"Algorithms"}),e.algorithms.split(",").map((function(e){return(0,n.jsx)("span",{style:{backgroundColor:"#EEEEEE",padding:"0.25rem",marginLeft:"0.25rem",borderRadius:"0.15rem",cursor:"pointer"},children:e})})),(0,n.jsx)("h4",{children:"Datasets"}),(0,n.jsx)("p",{children:e.datasets})]})}),(0,n.jsx)(u.Z.Row,{children:(0,n.jsx)(u.Z.Column,{width:12,children:(0,n.jsx)("a",{href:e.readmore,target:"_blank",children:(0,n.jsx)(g.Z,{primary:!0,children:"Read full report"})})})})]})}))]}),(0,n.jsx)(h.Z,{textAlign:"justified",style:{padding:"1rem"}})]})})]})})});function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function w(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var k=function(){var e=(0,c.Z)().isDesktop,t=function(e){for(var t=function(t){var i=e[t];n.forEach((function(e){for(var n=i[e].split(",").map((function(e){return e.trim()})).filter((function(e){return""!==e})),a=0;a<n.length;a++)n[a]in r[e]?r[e][n[a]].push(t):r[e][n[a]]=[t]}))},r={country:{},language:{},themes_keywords:{},algorithms:{},tools:{}},n=Object.keys(r),i=e.length,a=0;a<i;a++)t(a);return r}(l),r=w(Array(l.length).keys()),u=(0,o.useState)(r),h=u[0],m=u[1],p=(0,o.useState)({}),g=p[0],y=p[1],j=((0,s.$G)("countrylevel").t,(0,a.useRouter)()),x=(0,o.useState)(j.query.locale?j.query.locale:"en"),k=(x[0],x[1],function(e){return Object.keys(t[e]).map((function(e){return{key:e,value:e,text:e}}))}),Z=function(e){return function(n,i){for(var a=i.value,o=w(r),s=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){b(e,t,r[t])}))}return e}({},g,b({},e,a)),l=Object.keys(s),c=0;c<l.length;c++){var d=l[c],u=s[l[c]],h=[];if(u.length>0)for(var p=0;p<u.length;p++)for(var f=t[d][u[p]],j=0;j<f.length;j++)h.includes(f[j])||h.push(f[j]);else h=w(r);o=o.filter((function(e){return-1!==h.indexOf(e)}))}y(s),m(o)}};return(0,n.jsx)(i.Z,{children:e?(0,n.jsx)(f,{filters:t,showcaseData:l,filteredRows:h,getOptions:k,filterSelectHandler:Z,getLangname:d}):(0,n.jsx)(v,{filters:t,showcaseData:l,filteredRows:h,getOptions:k,filterSelectHandler:Z,getLangname:d})})}},1651:function(e,t,r){"use strict";r.d(t,{Z:function(){return k}});var n=r(7462),i=r(4578),a=r(8232),o={current:"undefined"===typeof document?null:document},s=("undefined"===typeof window||window,r(7294)),l=function(e,t){return!!e&&!!e[t]},c=function(){function e(e){return function(e){var t=e.capture,r=e.listener,n=e.type,i=e.target,a=e.targetRef,o=s.useRef(r);o.current=r;var c=s.useCallback((function(e){return o.current(e)}),[]);s.useEffect((function(){var e="undefined"===typeof a?i:a.current,r=window.event,o=function(e){e!==r?c(e):r=void 0};return l(e,"addEventListener")&&e.addEventListener(n,o,t),function(){l(e,"removeEventListener")&&e.removeEventListener(n,o,t)}}),[t,c,i,a,n])}(e),null}return e.defaultProps={capture:!1},e}(),d=r(4714),u=r(1085),h=r(6010),m=(r(5697),r(6663)),p=r(8459),g=r(8935),f=r(2519),y=r(2248);function j(e){var t=e.className,r=e.children,i=e.content,a=(0,h.Z)("pushable",t),o=(0,g.Z)(j,e),l=(0,f.Z)(j,e);return s.createElement(l,(0,n.Z)({},o,{className:a}),y.kK(r)?i:r)}j.handledProps=["as","children","className","content"],j.propTypes={};var x=j;function v(e){var t=e.className,r=e.dimmed,i=e.children,a=e.content,o=(0,h.Z)("pusher",(0,p.lG)(r,"dimmed"),t),l=(0,g.Z)(v,e),c=(0,f.Z)(v,e);return s.createElement(c,(0,n.Z)({},l,{className:o}),y.kK(i)?a:i)}v.handledProps=["as","children","className","content","dimmed"],v.propTypes={};var b=v,w=function(e){function t(r){var i;return(i=e.call(this,r)||this).ref=(0,s.createRef)(),i.handleAnimationStart=function(){var e=i.props.visible?"onVisible":"onHide";clearTimeout(i.animationTimer),i.animationTimer=setTimeout(i.handleAnimationEnd,t.animationDuration),i.skipNextCallback?i.skipNextCallback=!1:(0,a.Z)(i.props,e,null,i.props)},i.handleAnimationEnd=function(){var e=i.props.visible?"onShow":"onHidden";i.setState({animationTick:0}),(0,a.Z)(i.props,e,null,i.props)},i.handleDocumentClick=function(e){(0,m.Z)(i.ref.current,e)||(i.skipNextCallback=!0,(0,a.Z)(i.props,"onHide",e,(0,n.Z)({},i.props,{visible:!1})))},i.state={animationTick:0,visible:r.visible},i}(0,i.Z)(t,e),t.getDerivedStateFromProps=function(e,t){var r=!!e.visible===!!t.visible?0:1;return{animationTick:t.animationTick+r,visible:e.visible}};var r=t.prototype;return r.componentDidUpdate=function(e,t){this.state.animationTick>t.animationTick&&this.handleAnimationStart()},r.componentWillUnmount=function(){clearTimeout(this.animationTimer)},r.render=function(){var e=this.props,r=e.animation,i=e.className,a=e.children,o=e.content,l=e.direction,m=e.target,j=e.visible,x=e.width,v=this.state.animationTick,b=(0,h.Z)("ui",r,l,x,(0,p.lG)(v>0,"animating"),(0,p.lG)(j,"visible"),"sidebar",i),w=(0,g.Z)(t,this.props),k=(0,f.Z)(t,this.props),Z=(0,d.I)(m)?{targetRef:m}:{target:m};return s.createElement(s.Fragment,null,s.createElement(u.R,{innerRef:this.ref},s.createElement(k,(0,n.Z)({},w,{className:b}),y.kK(a)?o:a)),j&&s.createElement(c,(0,n.Z)({listener:this.handleDocumentClick,type:"click"},Z)))},t}(s.Component);w.handledProps=["animation","as","children","className","content","direction","onHidden","onHide","onShow","onVisible","target","visible","width"],w.propTypes={},w.defaultProps={direction:"left",target:o,visible:!1},w.animationDuration=500,w.autoControlledProps=["visible"],w.Pushable=x,w.Pusher=b;var k=w},987:function(e){"use strict";e.exports=JSON.parse('{"en":"English","es":"Spanish","de":"German"}')}},function(e){e.O(0,[217,774,888,179],(function(){return t=453,e(e.s=t);var t}));var t=e.O();_N_E=t}]);