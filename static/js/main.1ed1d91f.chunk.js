(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),s=n(3),r=n.n(s),a=(n(12),n(4)),o=n(5),h=n(7),u=n(6),j=(n.p,n(13),n(14),n(15),n(0)),l=function(t){return Object(j.jsxs)("div",{className:"card-container",children:[Object(j.jsx)("img",{alt:"kitten",src:"https://robohash.org/".concat(t.kitten.id,"?set=set4")}),Object(j.jsxs)("h2",{children:[" ",t.kitten.name," "]}),Object(j.jsx)("p",{children:t.kitten.email})]})},d=function(t){return Object(j.jsx)("div",{className:"card-list",children:t.kittens.map((function(t){return Object(j.jsx)(l,{kitten:t},t.id)}))})},f=(n(17),function(t){return Object(j.jsx)("input",{className:"search-box",type:"search",placeholder:"search kittens",onChange:t.onSearchChange})}),p=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(){var t;return Object(a.a)(this,n),(t=e.call(this)).onSearchChange=function(e){t.setState({searchField:e.target.value})},t.state={kittens:[],searchField:""},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(t){return t.json()})).then((function(e){return t.setState({kittens:e})}))}},{key:"render",value:function(){var t=this.state,e=t.kittens,n=t.searchField,c=e.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}));return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Cutie kittens"}),Object(j.jsx)(f,{onSearchChange:this.onSearchChange}),Object(j.jsx)(d,{kittens:c})]})}}]),n}(c.Component),b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),c(t),i(t),s(t),r(t)}))};r.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),b()}],[[18,1,2]]]);
//# sourceMappingURL=main.1ed1d91f.chunk.js.map