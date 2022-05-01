"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[503],{694:function(e,t,s){s.d(t,{d:function(){return c},Z:function(){return r}});s(791);var i=s(871),a=s(184),n=function(e){return(0,a.jsx)("div",{className:"skeleton ".concat(e.className),style:{width:e.width||"100%",height:e.height,borderRadius:e.radius||"5px",marginBottom:e.mb||""}})},c=function(){return(0,a.jsxs)("div",{className:"flex flex-col p-3 rounded-lg bg-slate-800 movie-card",children:[(0,a.jsx)(n,{width:"100%",height:"250px",radius:"8px",className:"mb-5"}),(0,a.jsxs)("div",{className:"flex flex-col flex-1",children:[(0,a.jsx)("h3",{className:"mb-3 text-sm font-medium text-white",children:(0,a.jsx)(n,{width:"100%",height:"20px",radius:"0px"})}),(0,a.jsxs)("div",{className:"flex items-center justify-between mb-10 opacity-50",children:[(0,a.jsx)("span",{children:(0,a.jsx)(n,{width:"50px",height:"10px",radius:"0px"})}),(0,a.jsx)("span",{children:(0,a.jsx)(n,{width:"30px",height:"10px",radius:"0px"})})]}),(0,a.jsx)(n,{width:"100%",height:"40px",radius:"6px"})]})]})},r=function(e){var t=e.item,s=e.img_path,n=(0,i.s0)();return(0,a.jsxs)("div",{className:"flex flex-col p-3 rounded-lg bg-slate-800 movie-card",children:[(0,a.jsx)("img",{src:"".concat(s+t.poster_path||t.backdrop_path),alt:"",className:"object-cover w-full mb-3 rounded-lg movie-card-img"}),(0,a.jsxs)("div",{className:"flex flex-col flex-1",children:[(0,a.jsx)("h3",{className:"mb-3 text-sm font-medium text-white",children:t.original_title||t.original_name}),(0,a.jsxs)("div",{className:"flex items-center justify-between mb-5",children:[(0,a.jsx)("span",{className:"text-xs text-[#999]",children:new Date(t.release_date||t.first_air_date).getFullYear()}),(0,a.jsxs)("span",{className:"text-xs text-[#999] flex items-center gap-x-2",children:[t.vote_average.toFixed(1)," \u2728"]})]}),(0,a.jsxs)("button",{className:"flex items-center justify-center w-full py-2 mt-auto font-medium text-white rounded-lg px-7 bg-primary gap-x-2",onClick:function(){return n("/movies/".concat(t.id))},style:{fontSize:"min(1em, 3vw)"},children:["Watch now",(0,a.jsx)("i",{className:"text-2xl bx bx-play-circle"})]})]})]})}},197:function(e,t,s){s.d(t,{_:function(){return i}});var i=function(){return fetch.apply(void 0,arguments).then((function(e){return e.json()}))}},503:function(e,t,s){s.r(t),s.d(t,{default:function(){return o}});var i=s(791),a=s(207),n=s(694),c=s(419),r=s(197),l=s(184),d=function(e){var t=e.category,s=void 0===t?"movie":t,i=e.type,d=void 0===i?"popular":i,o=e.time,x=void 0===o?"day":o,m=(0,c.ZP)("trending"!==d?"https://api.themoviedb.org/3/".concat(s,"/").concat(d,"?api_key=c0f1c0571c03dffda8ff23bc896915b8"):"https://api.themoviedb.org/3/".concat(d,"/all/").concat(x,"?api_key=c0f1c0571c03dffda8ff23bc896915b8"),r._),h=m.data,p=m.error,u=!h&&!p,f=(null===h||void 0===h?void 0:h.results)||[];return(0,l.jsxs)("div",{className:"movie-list",children:[u&&(0,l.jsxs)(a.tq,{grabCursor:"true",spaceBetween:40,slidesPerView:"auto",children:[(0,l.jsx)(a.o5,{children:(0,l.jsx)(n.d,{})}),(0,l.jsx)(a.o5,{children:(0,l.jsx)(n.d,{})}),(0,l.jsx)(a.o5,{children:(0,l.jsx)(n.d,{})}),(0,l.jsx)(a.o5,{children:(0,l.jsx)(n.d,{})}),(0,l.jsx)(a.o5,{children:(0,l.jsx)(n.d,{})})]}),(0,l.jsx)(a.tq,{grabCursor:"true",spaceBetween:40,slidesPerView:"auto",children:!u&&f&&f.map((function(e){return(0,l.jsx)(a.o5,{children:(0,l.jsx)(n.Z,{item:e,img_path:"https://image.tmdb.org/t/p/original"})},e.id)}))})]})},o=function(){return(0,l.jsxs)(i.Fragment,{children:[(0,l.jsxs)("section",{className:"pb-10 mb-5movies-layout page-container",children:[(0,l.jsx)("div",{className:"flex items-center mb-10 text-white gap-x-4",children:(0,l.jsx)("h2",{className:"font-bold capitalize ",style:{fontSize:"min(1.3em, 5vw)"},children:"What's Popular"})}),(0,l.jsx)(d,{type:"popular"})]}),(0,l.jsxs)("section",{className:"p-8 pb-10 mb-5 rounded-xl movies-layout page-container bg-slate-600",children:[(0,l.jsx)("div",{className:"flex items-center mb-10 text-white gap-x-4",children:(0,l.jsx)("h2",{className:"font-bold capitalize",style:{fontSize:"min(1.3em, 5vw)"},children:"Top rated"})}),(0,l.jsx)(d,{type:"top_rated"})]}),(0,l.jsxs)("section",{className:"pb-10 mt-10 movies-layout page-container",children:[(0,l.jsx)("h2",{className:"mb-10 font-bold text-white capitalize",style:{fontSize:"min(1.3em, 5vw)"},children:"Trending"}),(0,l.jsx)(d,{category:"tv",type:"trending",time:"day"})]})]})}}}]);
//# sourceMappingURL=503.fd9abbdb.chunk.js.map