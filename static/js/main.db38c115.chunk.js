(this.webpackJsonpshopfront=this.webpackJsonpshopfront||[]).push([[0],{21:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),a=c(23),r=c.n(a),i=(c(32),c(21),c(33),c(8)),o=c(24),j=c(26),l=c(27),d=c(11),u=c.n(d),b=c(16),h=c(9),O=c(1),m=s.a.createContext();function x(e){var t=e.children,c=Object(n.useState)([]),s=Object(h.a)(c,2),a=s[0],r=s[1],i=function(){var e=Object(b.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fortnite-api.com/v2/cosmetics/br/new",{mode:"cors"});case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,r(c.data.items);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){i()}),[]);var o=Object(n.useState)([]),j=Object(h.a)(o,2),d=j[0],x=j[1];return Object(O.jsx)(m.Provider,{value:{cartItems:d,addToCart:function(e){x((function(t){return[].concat(Object(l.a)(t),[e])}))},items:a,emptyCart:function(){x([])}},children:t})}var p=function(){var e=Object(n.useContext)(m).cartItems;return Object(O.jsxs)("nav",{className:"menu",children:[Object(O.jsx)("h3",{children:"Logo"}),Object(O.jsxs)("ul",{className:"menu-links",children:[Object(O.jsx)(i.b,{className:"menuStyle",to:"/",children:Object(O.jsx)("li",{children:"Home"})}),Object(O.jsx)(i.b,{className:"menuStyle",to:"/shop",children:Object(O.jsx)("li",{children:"Shop"})}),Object(O.jsxs)(i.b,{exact:!0,to:"/cart",id:"basket-link",style:{textDecoration:"none"},className:"navbar-item",children:[Object(O.jsx)(o.a,{color:"white",icon:j.a,size:"lg"}),Object(O.jsx)("span",{color:"white",id:"cart-item-count",children:e.length>=1?e.length:null})]})]})]})},f=(c(43),function(){var e=Object(n.useContext)(m).items;return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{className:"shop-menu",children:"Shop"}),Object(O.jsx)("div",{className:"cards-container",children:e.map((function(e){return Object(O.jsxs)("div",{className:"card-container",children:[Object(O.jsx)(i.b,{to:"/shop/".concat(e.id),children:Object(O.jsx)("img",{alt:e.name,className:"item-image",src:e.images.icon})}),Object(O.jsx)(i.b,{style:{textDecoration:"none"},to:"/shop/".concat(e.id),children:Object(O.jsx)("p",{className:"item-name",children:e.name})})]},e.id)}))})]})}),v=c(3),g=function(){return Object(O.jsx)("div",{children:Object(O.jsx)("h1",{style:{color:"white"},children:"Home"})})},N=(c(44),function(e){var t=e.match;Object(n.useEffect)((function(){o()}));var c=Object(n.useState)({images:{}}),s=Object(h.a)(c,2),a=s[0],r=s[1],i=Object(n.useContext)(m).addToCart,o=function(){var e=Object(b.a)(u.a.mark((function e(){var c,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fortnite-api.com/v2/cosmetics/br/".concat(t.params.id),{mode:"cors"});case 2:return c=e.sent,e.next=5,c.json();case 5:n=e.sent,r(n.data);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsx)("div",{className:"itemdetail-container",children:Object(O.jsxs)("div",{className:"item-detail",children:[Object(O.jsx)("h1",{children:a.name}),Object(O.jsx)("h3",{children:a.description}),Object(O.jsx)("img",{className:"item-detail-image",alt:"",src:a.images.icon}),Object(O.jsx)("button",{id:"add-to-cart-button",onClick:function(){return i(a)},children:"Add to Cart"})]})})}),C=(c(45),function(){var e=Object(n.useContext)(m).cartItems,t=Object(n.useState)("Place Order"),c=Object(h.a)(t,2),s=c[0],a=c[1],r=Object(n.useContext)(m).emptyCart,i=Object(n.useState)("Check Out"),o=Object(h.a)(i,2),j=o[0],l=o[1],d=(5.99*e.length).toFixed(2),u=e.map((function(e){return Object(O.jsxs)("div",{className:"item-container",children:[Object(O.jsx)("h3",{children:e.name}),Object(O.jsx)("img",{alt:"",src:e.images.icon,width:"130px"}),Object(O.jsx)("p",{children:"$5.99"})]},e.id)}));return Object(O.jsxs)("div",{className:"cart-page",children:[Object(O.jsx)("h1",{children:j}),u,d>0?Object(O.jsxs)("h3",{children:["Total : \xa3",d]}):null,Object(O.jsx)("div",{className:"order-button",children:Object(O.jsx)("button",{onClick:function(){a("Ordering"),l("Ordering"),setTimeout((function(){l("Thank you, your order has been placed"),r(),a("Place Order")}),3e3)},children:s})})]})});var y=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)(i.a,{children:[Object(O.jsx)(p,{}),Object(O.jsxs)(v.c,{children:[Object(O.jsx)(v.a,{exact:!0,path:"/",component:g}),Object(O.jsx)(v.a,{exact:!0,path:"/shop",children:Object(O.jsx)(f,{})}),Object(O.jsx)(v.a,{path:"/shop/:id",component:N}),Object(O.jsx)(v.a,{path:"/cart",component:C})]})]})})};r.a.render(Object(O.jsx)(x,{children:Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(y,{})})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.db38c115.chunk.js.map