(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{40:function(e,t,a){e.exports=a(67)},45:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),c=a.n(l),s=(a(45),a(12)),i=a(14),o=a(17),m=a.n(o),u=a(21),d=a(6),p=a(31),h=a.n(p),f=function(e){var t,a={width:200,float:"left",margin:10};t=e.movies.length>0?e.movies.map((function(t){return r.a.createElement("div",{key:t.id,className:"card mb-3",style:a},r.a.createElement(s.b,{to:"movie"===e?"/movie/".concat(t.id):"/serie/".concat(t.id)},r.a.createElement("h5",{className:"card-header"},t.title.length<16?t.title:t.title.slice(0,13).concat("..."))),r.a.createElement(s.b,{to:"/movie/".concat(t.id)},r.a.createElement("img",{style:{width:"100%",margin:"auto",maxWidth:250,height:288,display:"block",padding:10},src:"http://image.tmdb.org/t/p/w300//".concat(t.poster_path),alt:"poster"})))})):r.a.createElement("h2",null,"Did not find any movies :(");var n={dots:!0,infinite:!1,speed:500,slidesToShow:5,slidesToScroll:5,initialSlide:0,responsive:[{breakpoint:1180,settings:{slidesToShow:4,slidesToScroll:4,infinite:!0,dots:!0}},{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]};return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-3"},e.title),r.a.createElement("hr",{className:"my-3"}),r.a.createElement(h.a,n,t))},v=a(34),E=function e(t,a,n,r,l){Object(v.a)(this,e),this.title=t,this.poster_path=a,this.id=n,this.genres=r,this.overview=l},b="8da605a5d9396912aa1f7532d10a9839",g=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)([]),s=Object(d.a)(c,2),i=s[0],o=s[1];Object(n.useEffect)((function(){h()}),[]);var p=function(e){var t=[];return e.results[0].name?(e.results.forEach((function(e){var a=new E(e.name,e.poster_path,e.id,["TV Serie"],e.overview);t.push(a)})),t):e.results[0].title?(e.results.forEach((function(e){var a=new E(e.title,e.poster_path,e.id,e.genres,e.overview);t.push(a)})),t):e.results},h=function(){var e=Object(u.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://api.themoviedb.org/3/movie/popular?api_key=".concat(b,"&language=en-US&page=1")).then((function(e){return e.json()})).then((function(e){return l(p(e))})),fetch("https://api.themoviedb.org/3/tv/popular?api_key=".concat(b,"&language=en-US&page=1")).then((function(e){return e.json()})).then((function(e){return o(p(e))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){console.log(a),console.log(i)}},"Click me"),r.a.createElement(f,{type:"Movies",title:"Popular Movies",movies:a}),r.a.createElement("hr",{className:"my-3"}),r.a.createElement(f,{type:"Series",title:"Popular Series",movies:i}))},y=function(e){var t=e.match,a=Object(n.useState)("Results:"),l=Object(d.a)(a,2),c=l[0],s=l[1],i=Object(n.useState)([]),o=Object(d.a)(i,2),m=o[0],u=o[1];return Object(n.useEffect)((function(){fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat("8da605a5d9396912aa1f7532d10a9839","&query=").concat(t.params.input,"&language=en-US&page=1")).then((function(e){return e.json()})).then((function(e){return u(e.results)})).then((function(){return s("Search results for ".concat(t.params.input,":"))}))}),[t.params.input]),r.a.createElement("div",null,r.a.createElement(f,{title:c,movies:m}))},w=function(e){var t=r.a.createElement("ul",null);return e.genres&&e.genres.length>0&&(t=e.genres.map((function(e){return r.a.createElement("li",{key:e.id},e.name)}))),r.a.createElement("div",null,t)},j=a(70),S=a(71),O=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{show:e.show,onHide:e.handleClose},r.a.createElement(j.a.Header,{closeButton:!0},r.a.createElement(j.a.Title,null,e.title)),r.a.createElement(j.a.Body,null,r.a.createElement("div",{class:"embed-responsive embed-responsive-16by9"},r.a.createElement("iframe",{title:e.title,class:"embed-responsive-item",src:e.src,allowfullscreen:!0}))),r.a.createElement(j.a.Footer,null,r.a.createElement(S.a,{variant:"secondary",onClick:e.handleClose},"Back"))))},k=function(e){var t=e.match,a=Object(n.useState)(null),l=Object(d.a)(a,2),c=l[0],s=l[1],i=Object(n.useState)([]),o=Object(d.a)(i,2),p=o[0],h=o[1],f=Object(n.useState)(""),v=Object(d.a)(f,2),E=v[0],b=v[1],g=Object(n.useState)(""),y=Object(d.a)(g,2),j=y[0],S=y[1],k=Object(n.useState)(!1),N=Object(d.a)(k,2),_=N[0],T=N[1];Object(n.useEffect)((function(){C(t.params.id)}),[t.params.id]);var x=function(e){if(e.status_code)return console.error(e.status_message),void S(e.status_message);s(e),h(e.genres),b(e.release_date),S(e.title)},C=function(){var e=Object(u.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat("8da605a5d9396912aa1f7532d10a9839","&language=en-US&page=1")).then((function(e){return e.json()})).then((function(e){return x(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=r.a.createElement("div",null);return c&&!c.status_code&&(B=r.a.createElement("div",null,r.a.createElement("h2",null,"(",E.split("-")[0],")"),r.a.createElement("div",{style:{display:"block"}},r.a.createElement("div",null,r.a.createElement("img",{style:{width:300,display:"block",padding:10},src:"http://image.tmdb.org/t/p/w300//".concat(c.poster_path),alt:"movie card"})),r.a.createElement("div",{style:{marginLeft:"5%"}},r.a.createElement("hr",{className:"my-3"}),r.a.createElement("h3",null,"Genres"),r.a.createElement(w,{genres:p}),r.a.createElement("hr",{className:"my-3"}),r.a.createElement("h3",null,"Overview"),r.a.createElement("p",{class:"lead"},c.overview),r.a.createElement("hr",{className:"my-3"}),r.a.createElement(O,{title:j,show:_,handleClose:function(){return T(!1)},src:"https://www.youtube.com/embed/zpOULjyy-n8?rel=0"}),r.a.createElement("button",{className:"btn btn-secondary my-2 my-sm-0",type:"submit",onClick:function(){return T(!0)}}," Play Trailer "))))),r.a.createElement("div",{style:{width:"100%",float:"left",margin:10}},r.a.createElement("h1",null,j),B)},N=function(e){return r.a.createElement("div",{className:"jumbotron",style:{float:"left",width:"100%",paddingLeft:"15%",paddingRight:"15%"}},e.children)},_=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),a=t[0],l=t[1];return r.a.createElement("form",{className:"form-inline my-2 my-lg-0"},r.a.createElement("input",{className:"form-control mr-sm-2",style:{height:42},type:"text",placeholder:"Search",value:a,onChange:function(e){l(e.target.value)}}),r.a.createElement(s.b,{to:"/search/".concat(a)},r.a.createElement("button",{className:"btn btn-secondary my-2 my-sm-0",type:"submit"},"Search")))},T=function(){return r.a.createElement("header",{className:"App-header"},r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary",style:{paddingLeft:"15%",paddingRight:"15%"}},r.a.createElement(s.b,{to:"/",className:"navbar-brand"},"Movies Database"),r.a.createElement("div",{className:"navbar-collapse"},r.a.createElement("ul",{className:"navbar-nav mr-auto"}),r.a.createElement(_,null))))},x=function(){return r.a.createElement("footer",{className:"page-footer font-small unique-color-dark pt-4"},r.a.createElement("div",{className:"container"},r.a.createElement("ul",{className:"list-unstyled list-inline text-center py-2"},r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("h5",{className:"mb-1"},"React Assignment App"),r.a.createElement("p",null,"Created by",r.a.createElement("br",null),r.a.createElement("i",null,"jkvapil6@gmail.com"))))))},C=(a(66),function(){return r.a.createElement(s.a,{basename:"/"},r.a.createElement("div",{className:"App"},r.a.createElement(T,null),r.a.createElement(N,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:g}),r.a.createElement(i.a,{exact:!0,path:"/search/:input",component:y}),r.a.createElement(i.a,{exact:!0,path:"/search/",component:g}),r.a.createElement(i.a,{exact:!0,path:"/serie/:id",component:k}),r.a.createElement(i.a,{exact:!0,path:"/movie/:id",component:k}))),r.a.createElement(x,null)))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.48b00c3c.chunk.js.map