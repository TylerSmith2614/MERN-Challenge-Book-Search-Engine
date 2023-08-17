(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{121:function(e,t,n){},128:function(e,t,n){"use strict";n.r(t);var a,r,o,c,s,i=n(0),l=n.n(i),d=n(45),j=n.n(d),u=(n(120),n(121),n(30)),b=n(71),h=n(9),O=n(24),m=n(12),g=n(21),p=n(11),x=n(137),v=n(138),k=n(148),f=n(110),w=n(139),S=n(140),I=n(156),y=n(19),B=n(20),C=n(100),F=n.n(C),L=new(function(){function e(){Object(y.a)(this,e)}return Object(B.a)(e,[{key:"getProfile",value:function(){return F()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return F()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),T=function(e){var t=localStorage.getItem("saved_books")?JSON.parse(localStorage.getItem("saved_books")):null;if(!t)return!1;var n=null===t||void 0===t?void 0:t.filter((function(t){return t!==e}));return localStorage.setItem("saved_books",JSON.stringify(n)),!0},_=n(136),N=n(61),$=n(150),q=Object($.a)(a||(a=Object(N.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n      }\n    }\n  }\n"]))),D=Object($.a)(r||(r=Object(N.a)(["\n  mutation addUser($username: String!, $email: String!, $password: String!) {\n    addUser(username: $username, email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n        email\n        bookCount\n        savedBooks {\n          authors\n          bookId\n          image\n          link\n          title\n          description\n        }\n      }\n    }\n  }\n"]))),E=Object($.a)(o||(o=Object(N.a)(["\n  mutation saveBook($newBook: InputBook!) {\n    saveBook(newBook: $newBook) {\n      _id\n      username\n      email\n      savedBooks {\n        bookId\n        authors\n        description\n        title\n        image\n        link\n      }\n    }\n  }\n"]))),P=Object($.a)(c||(c=Object(N.a)(["\n  mutation removeBook($bookId: ID!) {\n    removeBook(bookId: $bookId) {\n      _id\n      username\n      email\n      savedBooks {\n        bookId\n        authors\n        description\n        title\n        image\n        link\n      }\n    }\n  }\n"]))),U=n(2),G=function(){var e=Object(i.useState)([]),t=Object(p.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)(""),o=Object(p.a)(r,2),c=o[0],s=o[1],l=Object(i.useState)(localStorage.getItem("saved_books")?JSON.parse(localStorage.getItem("saved_books")):[]),d=Object(p.a)(l,2),j=d[0],b=d[1],h=Object(_.a)(E),y=Object(p.a)(h,1)[0];Object(i.useEffect)((function(){return function(){var e;(e=j).length?localStorage.setItem("saved_books",JSON.stringify(e)):localStorage.removeItem("saved_books")}}));var B=function(){var e=Object(g.a)(Object(m.a)().mark((function e(t){var n,r,o,i;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),c){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(c));case 6:if((n=e.sent).ok){e.next=9;break}throw new Error("something went wrong!");case 9:return e.next=11,n.json();case 11:r=e.sent,o=r.items,console.log(o),i=o.map((function(e){var t;return{bookId:e.id,authors:e.volumeInfo.authors||["No author to display"],title:e.volumeInfo.title,description:e.volumeInfo.description,image:(null===(t=e.volumeInfo.imageLinks)||void 0===t?void 0:t.thumbnail)||"",link:e.volumeInfo.infoLink}})),console.log(i),a(i),s(""),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(3),console.error(e.t0);case 23:case"end":return e.stop()}}),e,null,[[3,20]])})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(g.a)(Object(m.a)().mark((function e(t){var a;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.find((function(e){return e.bookId===t})),L.loggedIn()?L.getToken():null){e.next=4;break}return e.abrupt("return",!1);case 4:return e.prev=4,e.next=7,y({variables:{newBook:Object(u.a)({},a)}});case 7:b([].concat(Object(O.a)(j),[a.bookId])),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(x.a,{fluid:!0,className:"text-light bg-dark",children:Object(U.jsxs)(v.a,{children:[Object(U.jsx)("h1",{children:"Search for Books!"}),Object(U.jsx)(k.a,{onSubmit:B,children:Object(U.jsxs)(k.a.Row,{children:[Object(U.jsx)(f.a,{xs:12,md:8,children:Object(U.jsx)(k.a.Control,{name:"searchInput",value:c,onChange:function(e){return s(e.target.value)},type:"text",size:"lg",placeholder:"Search for a book"})}),Object(U.jsx)(f.a,{xs:12,md:4,children:Object(U.jsx)(w.a,{type:"submit",variant:"success",size:"lg",children:"Submit Search"})})]})})]})}),Object(U.jsxs)(v.a,{children:[Object(U.jsx)("h2",{children:n.length?"Viewing ".concat(n.length," results:"):"Search for a book to begin"}),Object(U.jsx)(S.a,{children:n.map((function(e){var t=null===j||void 0===j?void 0:j.some((function(t){return t===e.bookId})),n="";return n=t?"You have saved this book!":"Save this Book!",Object(U.jsxs)(I.a,{border:"dark",children:[e.image?Object(U.jsx)(I.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,Object(U.jsxs)(I.a.Body,{children:[Object(U.jsx)(I.a.Title,{children:e.title}),Object(U.jsxs)("p",{className:"small",children:["Authors: ",e.authors]}),Object(U.jsxs)(I.a.Text,{children:[e.description,e.link&&Object(U.jsx)("p",{children:Object(U.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:"View on Google Books"})})]}),L.loggedIn()&&Object(U.jsx)(w.a,{disabled:t,className:"btn-block btn-info",onClick:function(){return C(e.bookId)},children:n})]})]},e.bookId)}))})]})]})},V=n(157),Y=Object($.a)(s||(s=Object(N.a)(["\n  {\n    theUser {\n      _id\n      username\n      email\n      bookCount\n      savedBooks {\n        bookId\n        authors\n        description\n        title\n        image\n        link\n      }\n    }\n  }\n"]))),J=function(){var e=Object(V.a)(Y),t=e.loading,n=e.data,a=Object(_.a)(P),r=Object(p.a)(a,2),o=r[0],c=r[1].error,s=(null===n||void 0===n?void 0:n.theUser)||{},i=function(){var e=Object(g.a)(Object(m.a)().mark((function e(t){var n;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(L.loggedIn()?L.getToken():null){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,o({variables:{bookId:t}});case 6:n=e.sent,console.log("Deleted record: ",n),c&&console.log(c),T(t),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}();return t?Object(U.jsx)("h2",{children:"LOADING..."}):Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(x.a,{fluid:!0,className:"text-light bg-dark",children:Object(U.jsx)(v.a,{children:Object(U.jsx)("h1",{children:"Viewing saved books!"})})}),Object(U.jsxs)(v.a,{children:[Object(U.jsx)("h2",{children:s.savedBooks.length?"Viewing ".concat(s.savedBooks.length," saved ").concat(1===s.savedBooks.length?"book":"books",":"):"You have no saved books!"}),Object(U.jsx)(S.a,{children:s.savedBooks.map((function(e){return Object(U.jsxs)(I.a,{border:"dark",children:[e.image?Object(U.jsx)(I.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,Object(U.jsxs)(I.a.Body,{children:[Object(U.jsx)(I.a.Title,{children:e.title}),Object(U.jsxs)("p",{className:"small",children:["Authors: ",e.authors]}),Object(U.jsx)(I.a.Text,{children:e.description}),Object(U.jsx)(w.a,{className:"btn-block btn-danger",onClick:function(){return i(e.bookId)},children:"Delete this Book!"})]})]},e.bookId)}))})]})]})},K=n(153),z=n(151),A=n(147),M=n(154),H=n(18),R=n(142),W=function(){var e=Object(i.useState)({username:"",email:"",password:""}),t=Object(p.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)(!1),o=Object(p.a)(r,1)[0],c=Object(i.useState)(!1),s=Object(p.a)(c,2),l=s[0],d=s[1],j=Object(_.a)(D),b=Object(p.a)(j,1)[0],h=function(e){var t=e.target,r=t.name,o=t.value;a(Object(u.a)(Object(u.a)({},n),{},Object(H.a)({},r,o)))},O=function(){var e=Object(g.a)(Object(m.a)().mark((function e(t){var r,o,c,s,i;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),!1===t.currentTarget.checkValidity()&&(t.preventDefault(),t.stopPropagation()),e.prev=3,e.next=6,b({variables:Object(u.a)({},n)});case 6:r=e.sent,o=r.data,c=o.addUser,s=c.token,i=c.user,console.log(i),L.login(s),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(3),console.error(e.t0),d(!0);case 17:a({username:"",email:"",password:""});case 18:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(U.jsx)(U.Fragment,{children:Object(U.jsxs)(k.a,{noValidate:!0,validated:o,onSubmit:O,children:[Object(U.jsx)(R.a,{dismissible:!0,onClose:function(){return d(!1)},show:l,variant:"danger",children:"Something went wrong with your signup!"}),Object(U.jsxs)(k.a.Group,{children:[Object(U.jsx)(k.a.Label,{htmlFor:"username",children:"Username"}),Object(U.jsx)(k.a.Control,{type:"text",placeholder:"Your username",name:"username",onChange:h,value:n.username,required:!0}),Object(U.jsx)(k.a.Control.Feedback,{type:"invalid",children:"Username is required!"})]}),Object(U.jsxs)(k.a.Group,{children:[Object(U.jsx)(k.a.Label,{htmlFor:"email",children:"Email"}),Object(U.jsx)(k.a.Control,{type:"email",placeholder:"Your email address",name:"email",onChange:h,value:n.email,required:!0}),Object(U.jsx)(k.a.Control.Feedback,{type:"invalid",children:"Email is required!"})]}),Object(U.jsxs)(k.a.Group,{children:[Object(U.jsx)(k.a.Label,{htmlFor:"password",children:"Password"}),Object(U.jsx)(k.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:h,value:n.password,required:!0}),Object(U.jsx)(k.a.Control.Feedback,{type:"invalid",children:"Password is required!"})]}),Object(U.jsx)(w.a,{disabled:!(n.username&&n.email&&n.password),type:"submit",variant:"success",children:"Submit"})]})})},Q=function(){var e=Object(i.useState)({email:"",password:""}),t=Object(p.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)(!1),o=Object(p.a)(r,1)[0],c=Object(i.useState)(!1),s=Object(p.a)(c,2),l=s[0],d=s[1],j=Object(_.a)(q),b=Object(p.a)(j,2),h=b[0],O=b[1].error;Object(i.useEffect)((function(){d(!!O)}),[O]);var x=function(e){var t=e.target,r=t.name,o=t.value;a(Object(u.a)(Object(u.a)({},n),{},Object(H.a)({},r,o)))},v=function(){var e=Object(g.a)(Object(m.a)().mark((function e(t){var r,o,c,s,i;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),!1===t.currentTarget.checkValidity()&&(t.preventDefault(),t.stopPropagation()),e.prev=3,e.next=6,h({variables:Object(u.a)({},n)});case 6:return r=e.sent,o=r.data,e.next=10,o.login;case 10:c=e.sent,s=c.token,i=c.user,console.log(i),L.login(s),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(3),console.error(e.t0),d(!0);case 21:a({username:"",email:"",password:""});case 22:case"end":return e.stop()}}),e,null,[[3,17]])})));return function(t){return e.apply(this,arguments)}}();return Object(U.jsx)(U.Fragment,{children:Object(U.jsxs)(k.a,{noValidate:!0,validated:o,onSubmit:v,children:[Object(U.jsx)(R.a,{dismissible:!0,onClose:function(){return d(!1)},show:l,variant:"danger",children:"Something went wrong with your login credentials!"}),Object(U.jsxs)(k.a.Group,{children:[Object(U.jsx)(k.a.Label,{htmlFor:"email",children:"Email"}),Object(U.jsx)(k.a.Control,{type:"text",placeholder:"Your email",name:"email",onChange:x,value:n.email,required:!0}),Object(U.jsx)(k.a.Control.Feedback,{type:"invalid",children:"Email is required!"})]}),Object(U.jsxs)(k.a.Group,{children:[Object(U.jsx)(k.a.Label,{htmlFor:"password",children:"Password"}),Object(U.jsx)(k.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:x,value:n.password,required:!0}),Object(U.jsx)(k.a.Control.Feedback,{type:"invalid",children:"Password is required!"})]}),Object(U.jsx)(w.a,{disabled:!(n.email&&n.password),type:"submit",variant:"success",children:"Submit"})]})})},X=function(){var e=Object(i.useState)(!1),t=Object(p.a)(e,2),n=t[0],a=t[1];return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(K.a,{bg:"dark",variant:"dark",expand:"lg",children:Object(U.jsxs)(v.a,{fluid:!0,children:[Object(U.jsx)(K.a.Brand,{as:b.b,to:"/",children:"Google Books Search"}),Object(U.jsx)(K.a.Toggle,{"aria-controls":"navbar"}),Object(U.jsx)(K.a.Collapse,{id:"navbar",children:Object(U.jsxs)(z.a,{className:"ml-auto",children:[Object(U.jsx)(z.a.Link,{as:b.b,to:"/",children:"Search For Books"}),L.loggedIn()?Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(z.a.Link,{as:b.b,to:"/saved",children:"See Your Books"}),Object(U.jsx)(z.a.Link,{onClick:L.logout,children:"Logout"})]}):Object(U.jsx)(z.a.Link,{onClick:function(){return a(!0)},children:"Login/Sign Up"})]})})]})}),Object(U.jsx)(A.a,{size:"lg",show:n,onHide:function(){return a(!1)},"aria-labelledby":"signup-modal",children:Object(U.jsxs)(M.a.Container,{defaultActiveKey:"login",children:[Object(U.jsx)(A.a.Header,{closeButton:!0,children:Object(U.jsx)(A.a.Title,{id:"signup-modal",children:Object(U.jsxs)(z.a,{variant:"pills",children:[Object(U.jsx)(z.a.Item,{children:Object(U.jsx)(z.a.Link,{eventKey:"login",children:"Login"})}),Object(U.jsx)(z.a.Item,{children:Object(U.jsx)(z.a.Link,{eventKey:"signup",children:"Sign Up"})})]})})}),Object(U.jsx)(A.a.Body,{children:Object(U.jsxs)(M.a.Content,{children:[Object(U.jsx)(M.a.Pane,{eventKey:"login",children:Object(U.jsx)(Q,{handleModalClose:function(){return a(!1)}})}),Object(U.jsx)(M.a.Pane,{eventKey:"signup",children:Object(U.jsx)(W,{handleModalClose:function(){return a(!1)}})})]})})]})})]})},Z=n(113),ee=n(149),te=n(152),ne=n(146),ae=n(112),re=Object(Z.a)({uri:"/graphql"}),oe=Object(ae.a)((function(e,t){var n=t.headers,a=localStorage.getItem("id_token");return{headers:Object(u.a)(Object(u.a)({},n),{},{authorization:a?"Bearer ".concat(a):""})}})),ce=new ee.a({link:oe.concat(re),cache:new te.a});var se=function(){return Object(U.jsx)(ne.a,{client:ce,children:Object(U.jsx)(b.a,{children:Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(X,{}),Object(U.jsxs)(h.c,{children:[Object(U.jsx)(h.a,{path:"/",element:Object(U.jsx)(G,{})}),Object(U.jsx)(h.a,{path:"/saved",element:Object(U.jsx)(J,{})}),Object(U.jsx)(h.a,{path:"*",element:Object(U.jsx)("h1",{className:"display-2",children:"Wrong page!"})})]})]})})})};j.a.render(Object(U.jsx)(l.a.StrictMode,{children:Object(U.jsx)(se,{})}),document.getElementById("root"))}},[[128,1,2]]]);
//# sourceMappingURL=main.6b91a6b5.chunk.js.map