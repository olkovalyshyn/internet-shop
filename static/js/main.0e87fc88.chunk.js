(this["webpackJsonpinternet-shop"]=this["webpackJsonpinternet-shop"]||[]).push([[0],{14:function(e,t,i){},16:function(e,t,i){"use strict";i.r(t);var c=i(1),n=i.n(c),s=i(7),r=i.n(s),a=(i(14),i(9)),l=i(2),o=i(8),u=i(3),d=i(0);function m(e){return Object(d.jsxs)("div",{className:"item",children:[Object(d.jsx)("img",{src:"./img/"+e.item.img}),Object(d.jsx)("h2",{children:e.item.title}),Object(d.jsxs)("p",{className:"price",children:[e.item.price," \u0433\u0440\u043d."]}),Object(d.jsx)(u.b,{className:"del-icon",onClick:function(){return e.onDelete(e.item.id)}})]})}function j(e){var t=Object(c.useState)(!1),i=Object(l.a)(t,2),n=i[0],s=i[1];return Object(d.jsx)("header",{children:Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{className:"logo",children:"Oil"}),Object(d.jsxs)("ul",{className:"nav",children:[Object(d.jsx)("li",{children:"\u041f\u0440\u043e \u043d\u0430\u0441"}),Object(d.jsx)("li",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438"})]}),Object(d.jsx)(u.a,{onClick:function(){return s(!n)},className:"shop-basket-button ".concat(n&&"active")}),n&&Object(d.jsx)("div",{className:"shop-basket",children:e.orders.length>0?function(e){var t=0;return e.orders.forEach((function(e){return t+=Number.parseFloat(e.price)})),Object(d.jsxs)("div",{children:[e.orders.map((function(t){return Object(d.jsx)(m,{item:t,onDelete:e.onDelete},t.id)})),Object(d.jsxs)("p",{className:"summOrder",children:["\u0420\u0430\u0437\u043e\u043c: ",t.toFixed(2)," \u0433\u0440\u043d."]})]})}(e):Object(d.jsx)("h2",{className:"empty",children:"\u0422\u043e\u0432\u0430\u0440\u0438 \u0432\u0456\u0434\u0441\u0443\u0442\u043d\u0456"})}),Object(d.jsx)("div",{className:"hero"})]})})}function b(e){var t=Object(c.useState)([{key:"all",name:"\u0423\u0441\u0456"},{key:"oil",name:"\u0410\u0432\u0442\u043e\u043c\u0430\u0441\u0442\u0438\u043b\u0430"},{key:"antifrize",name:"\u0410\u043d\u0442\u0438\u0444\u0440\u0438\u0437"},{key:"aksesuar",name:"\u0410\u043a\u0441\u0435\u0441\u0443\u0430\u0440\u0438"},{key:"filter",name:"\u0424\u0456\u043b\u044c\u0442\u0440\u0438"}]),i=Object(l.a)(t,2),n=i[0];i[1];return Object(d.jsx)("div",{className:"categories",children:n.map((function(t){return Object(d.jsx)("div",{onClick:function(){return e.chooseCategory(t.key)},children:t.name},t.key)}))})}function h(e){return Object(d.jsxs)("div",{className:"item",children:[Object(d.jsx)("img",{src:"./img/"+e.item.img,onClick:function(){return e.onChangeShowFullItem(e.item)}}),Object(d.jsx)("h2",{children:e.item.title}),Object(d.jsx)("p",{children:e.item.desc}),Object(d.jsxs)("p",{className:"price",children:[e.item.price," \u0433\u0440\u043d."]}),Object(d.jsx)("div",{className:"add-to-cart",onClick:function(){e.onAddOrder(e.item)},children:"+"})]})}function p(e){return Object(d.jsx)("main",{children:e.items.map((function(t){return Object(d.jsx)(h,{item:t,onAddOrder:e.onAddOrder,onChangeShowFullItem:e.onChangeShowFullItem},t.id)}))})}function O(){return Object(d.jsx)("footer",{children:"\u0412\u0441\u0456 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0445\u0438\u0449\u0435\u043d\u0456 \xa9"})}function f(e){return Object(d.jsx)("div",{className:"full-item",children:Object(d.jsxs)("div",{children:[Object(d.jsx)(u.c,{className:"close-modal",onClick:function(){return e.onChangeShowFullItem()}}),Object(d.jsx)("img",{src:"./img/"+e.item.img,onClick:function(){return e.onChangeShowFullItem(e.item)}}),Object(d.jsx)("h2",{children:e.item.title}),Object(d.jsx)("p",{children:e.item.desc}),Object(d.jsxs)("p",{className:"price",children:[e.item.price," \u0433\u0440\u043d."]}),Object(d.jsx)("div",{className:"add-to-cart",onClick:function(){e.onAddOrder(e.item)},children:"+"})]})})}var g=function(){var e=Object(c.useState)(o),t=Object(l.a)(e,2),i=t[0],n=(t[1],Object(c.useState)(i)),s=Object(l.a)(n,2),r=s[0],u=s[1],m=Object(c.useState)([]),h=Object(l.a)(m,2),g=h[0],x=h[1],v=Object(c.useState)(!1),k=Object(l.a)(v,2),N=k[0],y=k[1],S=Object(c.useState)({}),q=Object(l.a)(S,2),C=q[0],w=q[1],F=function(e){var t=!1;g.forEach((function(i){i.id===e.id&&(t=!0)})),!1===t&&x([].concat(Object(a.a)(g),[e]))},I=function(e){w(e),y(!N)};return Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)(j,{orders:g,onDelete:function(e){x(g.filter((function(t){return t.id!==e})))}}),Object(d.jsx)(b,{chooseCategory:function(e){u("all"!==e?i.filter((function(t){return t.category===e})):i)}}),Object(d.jsx)(p,{onAddOrder:F,items:r,onChangeShowFullItem:I}),N&&Object(d.jsx)(f,{item:C,onAddOrder:F,onChangeShowFullItem:I}),Object(d.jsx)(O,{})]})};r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('[{"id":1,"title":"\u0410\u0432\u0442\u043e\u043c\u0430\u0441\u0442\u0438\u043b\u043e Elf","img":"oil_Elf.jpg","desc":"Lorem ipsum dolor sit amet consectetur adipiscing elit venenatis litora tristique, tempor vehicula orci ligula natoque pellentesque fermentum","category":"oil","price":"899"},{"id":2,"title":"\u0410\u0432\u0442\u043e\u043c\u0430\u0441\u0442\u0438\u043b\u043e Mobil","img":"oil_Mobil.jpg","desc":"Ex aliquet nostra class varius tristique elit nam euismod venenatis sit, adipiscing pretium dui lectus a laoreet lobortis. Natoque ad vulputate pulvina","category":"oil","price":"1199"},{"id":3,"title":"\u0410\u0432\u0442\u043e\u043c\u0430\u0441\u0442\u0438\u043b\u043e Shell","img":"oil_Shell.jpg","desc":"Neque malesuada habitasse facilisi primis adipiscing per a purus, diam ornare posuere proin nunc suscipit aliquam, taciti metus vivamus pulvinar vel lorem sit. ","category":"oil","price":"1500"},{"id":4,"title":"\u0410\u043d\u0442\u0438\u0444\u0440\u0438\u0437","img":"antifrize.jpg","desc":"Ante risus per neque egestas est adipiscing, inceptos sapien curae enim condimentum mus lacinia conubia, augue hendrerit sociosqu massa efficitur lobortis. ","category":"antifrize","price":"200"},{"id":5,"title":"\u0417\u0430\u0440\u044f\u0434\u043a\u0430","img":"aksesuar_Zaradka.jpg","desc":"Vitae bibendum habitasse hac, aenean porta neque eu erat ac felis ex. Potenti scelerisque ornare fusce cubilia venenatis integer natoque, mollis aliquam duis molestie vel sit donec, taciti placerat per hendrerit ultricies etiam.","category":"aksesuar","price":"499"},{"id":6,"title":"\u0424\u0456\u043b\u044c\u0442\u0440","img":"filter.jpg","desc":"Vitae bibendum habitasse hac ac felis ex. Potenti scelerisque ornare fusce cubilia venenatis integer natoque, mollis aliquam duis molestie vel sit donec, taciti placerat per hendrerit ultricies etiam.","category":"filter","price":"199"}]')}},[[16,1,2]]]);
//# sourceMappingURL=main.0e87fc88.chunk.js.map