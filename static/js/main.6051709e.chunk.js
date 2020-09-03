(this["webpackJsonpbookstore-app"]=this["webpackJsonpbookstore-app"]||[]).push([[0],{28:function(e,t,a){e.exports=a(48)},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t),a.d(t,"bookstoreServiceContext",(function(){return x}));var n=a(0),r=a.n(n),c=a(15),o=a.n(c),i=(a(33),a(34),a(35),a(36),a(9)),l=a(7),u=Object(l.b)((function(e){return{cartItems:e.cartItems}}))((function(e){var t=e.cartItems;return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header__content container"},r.a.createElement(i.b,{to:"/"},r.a.createElement("div",{className:"header__logo"},"Bookstore")),r.a.createElement(i.b,{to:"/cart"},r.a.createElement("div",{className:"header__cart-link"},r.a.createElement("span",{className:"cart-total"},t.length?t.map((function(e){return e.price})).reduce((function(e,t){return e+t})):0," ",r.a.createElement("i",{className:"fas fa-ruble-sign"})),r.a.createElement("i",{className:"fas fa-shopping-basket cart-icon"})))))})),s=a(23),m=(a(42),function(e){return{type:"BOOK_ADDED_TO_CART",payload:e}}),d=(a(43),function(e){var t=e.name,a=e.label,n=e.idx,c=e.onFilterChange,o=e.activeItem;return r.a.createElement("li",{onClick:function(){return c(n,t)},key:t,className:"navbar__price-item ".concat(o===n?"price-item-active":"")},a)}),f={filteredBooksPrice:function(e){return{type:"FILTERED_BOOKS_PRICE",payload:e}}},b=Object(l.b)((function(e){return{books:e.books}}),f)((function(e){var t=e.filteredBooksPrice,a=Object(n.useState)(!1),c=Object(s.a)(a,2),o=c[0],i=c[1],l=Object(n.useState)(0),u=Object(s.a)(l,2),m=u[0],f=u[1],b=Object(n.useRef)(),E=function(e){e.path.includes(b.current)||i(!1)},p=function(e,a){f(e),t(a)},_=[{name:"default",label:"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e"},{name:"ascending",label:"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u0434\u0435\u0448\u0435\u0432\u044b\u0435"},{name:"descending",label:"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u0434\u043e\u0440\u043e\u0433\u0438\u0435"}];return Object(n.useEffect)((function(){document.body.addEventListener("click",E)}),[]),r.a.createElement("div",{className:"navbar"},r.a.createElement("div",{className:"navbar__price-filter"},r.a.createElement("div",null,r.a.createElement("div",{ref:b,className:"navbar__price-input-group"},r.a.createElement("span",{onClick:function(){i((function(e){return!e}))},className:"navbar__price-btn"},"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c ",r.a.createElement("i",{className:"fas fa-chevron-down popup-arrow",style:function(){if(o)return{transform:"rotate(180deg)"}}()})),o?r.a.createElement("ul",{className:"navbar__price-items"},_.map((function(e,t){return r.a.createElement(d,Object.assign({},e,{idx:t,key:e.name+t,activeItem:m,onFilterChange:p}))}))):null))))})),E=(a(44),{bookAddedToCart:m,bookDeletedFromCart:function(e){return{type:"BOOK_DELETED_FROM_CART",payload:e}},booksDeletedFromCart:function(e){return{type:"BOOKS_DELETED_FROM_CART",payload:e}}}),p=Object(l.b)((function(e){return{cartItems:e.cartItems}}),E)((function(e){var t=e.cartItems,a=e.bookAddedToCart,n=e.bookDeletedFromCart,c=e.booksDeletedFromCart;return r.a.createElement(r.a.Fragment,null,r.a.createElement("table",{className:"cart"},r.a.createElement("caption",null,r.a.createElement("div",{className:"cart__caption-title"},"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u0442\u043e\u0432\u0430\u0440\u043e\u0432")),r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u0422\u043e\u0432\u0430\u0440"),r.a.createElement("th",null,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"),r.a.createElement("th",null,"\u0421\u0443\u043c\u043c\u0430"),r.a.createElement("th",null,"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f"))),r.a.createElement("tbody",null,t.map((function(e){var t=e.title,o=e.count,i=e.price,l=e.id;return r.a.createElement("tr",{key:l},r.a.createElement("td",{className:"title"},t),r.a.createElement("td",{className:"count-label"},o),r.a.createElement("td",{className:"price-label"},i," ",r.a.createElement("i",{className:"fas fa-ruble-sign"})),r.a.createElement("td",null,r.a.createElement("span",{className:"cart-btns-wrap"},r.a.createElement("i",{onClick:function(){return a(l)},className:"fas fa-plus-square inc-item-btn cart__btn"}),r.a.createElement("i",{onClick:function(){return function(e,t){return 1===t?c(e):n(e)}(l,o)},className:"fas fa-minus-square dec-item-btn cart__btn"}),r.a.createElement("i",{onClick:function(){return c(l)},className:"fas del-item-btn fa-trash cart__btn"}))))})))),t.length?null:r.a.createElement("div",{className:"cart-empty"},r.a.createElement("i",{className:"fas fa-shopping-basket cart-empty-icon"}),r.a.createElement("p",{className:"cart-empty-text"},"\u0412\u0430\u0448\u0430 \u043a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430")))})),_=(a(45),a(46),{bookAddedToCart:m}),v=Object(l.b)((function(e){return{cartItems:e.cartItems}}),_)((function(e){var t=e.book,a=t.id,n=t.coverImage,c=t.title,o=t.author,l=t.price;return r.a.createElement("div",{className:"books-page__item"},r.a.createElement("img",{className:"book-img",src:n,alt:"..."}),r.a.createElement("div",{className:"book-labels"},r.a.createElement("div",{className:"book-label-top"},r.a.createElement("div",{className:"book-label-top__title"},c),r.a.createElement("div",{className:"book-label-top__author"},o)),r.a.createElement("div",{className:"book-label-bottom"},r.a.createElement("div",{className:"book-label-bottom__price"},l," \u0440\u0443\u0431."),r.a.createElement("button",{onClick:function(){e.bookAddedToCart(a)},className:"book-label-bottom__btn"},e.cartItems.findIndex((function(e){return e.id===a}))>-1?r.a.createElement(i.b,{to:"/cart"},r.a.createElement("div",null,"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0435")):"\u041a\u0443\u043f\u0438\u0442\u044c"))))})),O=(a(47),function(){return r.a.createElement("div",{className:"loading-wrap loading-indicator"},r.a.createElement("div",{className:"loadingio-spinner-rolling-heovkmi4sm"},r.a.createElement("div",{className:"ldio-w37gpl449z"},r.a.createElement("div",null))))}),g=function(e){var t=e.isLoading,a=e.wasError,n=e.children;return t?r.a.createElement(O,null):a?r.a.createElement("h1",null,"Error"):n},k=function(e){var t=e.books,a=e.isLoading,n=e.error,c=e.filterPriceType;return r.a.createElement("div",{className:"books-page"},r.a.createElement(g,{isLoading:a,hasError:n},r.a.createElement("div",{className:"books-page__items"},function(e,t){var a=t.slice().sort((function(e,t){return e.price-t.price}));switch(e){case"default":return t;case"ascending":return a;case"descending":return a.reverse();default:return t}}(c,t).map((function(e){return r.a.createElement(v,{key:e.id,book:e,inCart:e.inCart})})))))},h={fetchBooksRequest:function(){return{type:"FETCH_BOOKS_REQUEST"}},fetchBooksSuccess:function(e){return{type:"FETCH_BOOKS_SUCCESS",payload:e}},fetchBooksFailure:function(e){return{type:"FETCH_BOOKS_FAILURE",payload:e}}},y=Object(l.b)((function(e){return{isLoading:e.isLoading,error:e.error,books:e.books,filterPriceType:e.filterPriceType}}),h)((function(e){var t=Object(n.useContext)(x),a=e.fetchBooksRequest,c=e.fetchBooksSuccess,o=e.fetchBooksFailure;return Object(n.useEffect)((function(){a(),t.getBooks().then((function(e){return c(e)})).catch((function(e){return o(e)}))}),[]),r.a.createElement(k,e)})),j=a(2),N=r.a.createElement(j.a,{path:"/cart",render:function(){return r.a.createElement(p,null)}}),C=r.a.createElement(j.a,{path:"/",exact:!0,render:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null),r.a.createElement(y,null))}});var I=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(u,null),r.a.createElement("div",{className:"container flex"},C,N))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=a(26),B=a(13),F=a(11),S=a(3),R={books:[],isLoading:!1,error:null,cartItems:[],filterPriceType:"default"},D=function(e,t,a){return e?Object(S.a)(Object(S.a)({},e),{},{price:a>0?e.price+t.price:e.price-t.price,count:e.count+a}):{id:t.id,title:t.title,author:t.author,price:t.price,country:t.country,coverImage:t.coverImage,count:t.count}},w=function(e,t,a){var n=e.books,r=e.cartItems,c=n.find((function(e){return e.id===t})),o=r.findIndex((function(e){return e.id===t})),i=r[o];return o<0?Object(S.a)(Object(S.a)({},e),{},{cartItems:[].concat(Object(F.a)(r),[D(i,c,a)])}):Object(S.a)(Object(S.a)({},e),{},{cartItems:[].concat(Object(F.a)(r.slice(0,o)),[D(i,c,a)],Object(F.a)(r.slice(o+1)))})},L=a(27),A=a.n(L),K=Object(B.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0,a=e.cartItems;switch(t.type){case"FETCH_BOOKS_REQUEST":return Object(S.a)(Object(S.a)({},e),{},{isLoading:!0});case"FETCH_BOOKS_SUCCESS":return Object(S.a)(Object(S.a)({},e),{},{isLoading:!1,error:null,books:t.payload});case"FETCH_BOOKS_FAILURE":return Object(S.a)(Object(S.a)({},e),{},{isLoading:!1,error:t.payload});case"BOOK_ADDED_TO_CART":return w(e,t.payload,1);case"BOOK_DELETED_FROM_CART":return w(e,t.payload,-1);case"BOOKS_DELETED_FROM_CART":var n=t.payload,r=a.findIndex((function(e){return e.id===n}));return Object(S.a)(Object(S.a)({},e),{},{cartItems:[].concat(Object(F.a)(a.slice(0,r)),Object(F.a)(a.slice(r+1)))});case"FILTERED_BOOKS_PRICE":return Object(S.a)(Object(S.a)({},e),{},{filterPriceType:t.payload});default:return e}}),Object(B.a)(A.a)),x=r.a.createContext(),P=new function e(){var t=this;Object(T.a)(this,e),this.data=[{id:57,title:"\u0425\u043e\u0431\u0431\u0438\u0442, \u0438\u043b\u0438 \u0442\u0443\u0434\u0430 \u0438 \u043e\u0431\u0440\u0430\u0442\u043d\u043e",author:"\u0422\u043e\u043b\u043a\u0438\u043d \u0414\u0436.",price:153,country:"foreign literature",coverImage:"2412538_detail.jpg",count:1},{id:54,title:"\u0423\u0431\u0438\u0442\u044c \u043f\u0435\u0440\u0435\u0441\u043c\u0435\u0448\u043d\u0438\u043a\u0430",author:"\u0425\u0430\u0440\u043f\u0435\u0440 \u041b\u0438",price:237,country:"foreign literature",coverImage:"2622192_detail.jpg",count:1},{id:36,title:"\u041e \u043c\u044b\u0448\u0430\u0445 \u0438 \u043b\u044e\u0434\u044f\u0445",author:"\u0414\u0436\u043e\u043d \u0421\u0442\u0435\u0439\u043d\u0431\u0435\u043a",price:127,country:"foreign literature",coverImage:"2612850_detail.jpg",count:1},{id:39,title:"\u0417\u0430\u0432\u043e\u0434\u043d\u043e\u0439 \u0430\u043f\u0435\u043b\u044c\u0441\u0438\u043d",author:"\u042d\u043d\u0442\u043e\u043d\u0438 \u0411\u0451\u0440\u0434\u0436\u0435\u0441\u0441",price:178,country:"foreign literature",coverImage:"2596266_detail.jpg",count:1},{id:47,title:"\u041c\u044b",author:"\u0417\u0430\u043c\u044f\u0442\u0438\u043d \u0415.\u0418.",price:133,country:"russian literature",coverImage:"2667182_detail.jpg",count:1},{id:55,title:"\u0410\u043b\u0445\u0438\u043c\u0438\u043a",author:"\u041f\u0430\u0443\u043b\u043e \u041a\u043e\u044d\u043b\u044c\u043e",price:129,country:"foreign literature",coverImage:"2450235_detail.jpg",count:1},{id:64,title:"\u0410\u0432\u0442\u043e\u0441\u0442\u043e\u043f\u043e\u043c \u043f\u043e \u0433\u0430\u043b\u0430\u043a\u0442\u0438\u043a\u0435",author:"\u0414\u0443\u0433\u043b\u0430\u0441 \u0410\u0434\u0430\u043c\u0441",price:192,country:"foreign literature",coverImage:"2421138_detail.jpg",count:1}],this.getBooks=function(){return new Promise((function(e){setTimeout((function(){return e(t.data)}),800)}))}};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,{store:K},r.a.createElement(x.Provider,{value:P},r.a.createElement(i.a,null,r.a.createElement(I,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.6051709e.chunk.js.map