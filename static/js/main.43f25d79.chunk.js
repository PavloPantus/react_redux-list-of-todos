(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,r){e.exports=r(28)},26:function(e,t,r){},28:function(e,t,r){"use strict";r.r(t);var n=r(0),s=r.n(n),o=r(6),a=r.n(o),d=r(5),u=(r(26),r(14)),c=r(3),i=r.n(c),l=r(2),f=r(15),m=r(7),A=function(e){return{type:"setTodos",value:e}},p=function(e){return e.arrayOfTodosAndUsers},y=function(e){return e.isLoadingArrayOfTodosAndUsers},v=function(e){return e.isLoadedArrayOfTodosAndUsers},O=function(e){return e.activeSortField},T=function(e){return e.reverseStatus},b=Object(m.b)(function(e,t){switch(t.type){case"setTodos":return Object(l.a)({},e,{arrayOfTodosAndUsers:t.value});case"setIsLoadingTodos":return Object(l.a)({},e,{isLoadingArrayOfTodosAndUsers:t.value});case"setIsLoadedTodos":return Object(l.a)({},e,{isLoadedArrayOfTodosAndUsers:t.value});case"setActiveSortField":return Object(l.a)({},e,{activeSortField:t.value});case"setReverseStatus":return Object(l.a)({},e,{reverseStatus:t.value});default:return e}},{arrayOfTodosAndUsers:[],isLoadingArrayOfTodosAndUsers:!1,isLoadedArrayOfTodosAndUsers:!1,activeSortField:"",reverseStatus:!1}),U=function(e){var t,r;return i.a.async(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.a.awrap(fetch(e));case 2:return t=n.sent,n.next=5,i.a.awrap(t.json());case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}})},E=r(13),L=r.n(E),S=function(e){return e.user.name},w=Object(d.b)(function(e){return{arrayOfTodosAndUsers:p(e)}},function(e){return{setArrayOfTodosAndUsers:function(t){return e(A(t))}}})(function(e){var t=e.todo,r=e.setArrayOfTodosAndUsers,n=e.arrayOfTodosAndUsers;return s.a.createElement("tr",{className:"list-of-todos__row"},s.a.createElement("td",{className:"list-of-todos__cell"},t.title),s.a.createElement("td",{className:"list-of-todos__cell"},s.a.createElement(S,{user:t.user})),s.a.createElement("td",{className:L()("list-of-todos__cell",{completed:t.completed,"not-completed":!t.completed})},t.completed?"completed":"not completed"),s.a.createElement("td",{className:"list-of-todos__cell"},s.a.createElement("button",{type:"button",onClick:function(){r(n.filter(function(e){return e.id!==t.id}))},className:"button button_remove"},"delete")))}),g=function(e){var t=e.arrayOfTodosAndUsers,r=e.setArrayOfTodosAndUsers,n=e.isLoadingArrayOfTodosAndUsers,o=e.setIsLoadingArrayOfTodosAndUsers,a=e.isLoadedArrayOfTodosAndUsers,d=e.setIsLoadedArrayOfTodosAndUsers,c=e.activeSortField,m=e.setActiveSortField,A=e.reverseStatus,p=e.setReverseStatus,y=Object(u.a)(t).sort(function(e){if(0===t.length)return function(){return 1};if(""===c)return function(){return 1};var r=typeof t[0][e];return"string"===r?function(t,r){return t[e].localeCompare(r[e])}:"boolean"===r||"number"===r?function(t,r){return t[e]-r[e]}:function(){return 1}}(c));return A&&(y=y.reverse()),s.a.createElement(s.a.Fragment,null,a?"":s.a.createElement("button",{type:"button",disabled:n,onClick:function(){var e,t,n,s;return i.a.async(function(a){for(;;)switch(a.prev=a.next){case 0:return o(!0),a.next=3,i.a.awrap(Promise.all([U("https://jsonplaceholder.typicode.com/todos"),U("https://jsonplaceholder.typicode.com/users")]));case 3:e=a.sent,t=Object(f.a)(e,2),n=t[0],s=t[1],r(n.map(function(e){return Object(l.a)({},e,{user:s.find(function(t){return t.id===e.userId})})})),o(!1),d(!0);case 10:case"end":return a.stop()}})}},n?"loading...":"download list"),a?s.a.createElement("table",{className:"list-of-todos"},s.a.createElement("thead",null,s.a.createElement("tr",null,["Title","User","Completed","Remove item"].map(function(e){return s.a.createElement("th",{key:e,onClick:function(){m("user"===e.toLowerCase()?"user.name":e.toLowerCase()),p(c===e.toLowerCase()||"user.name"===c?!A:A)},className:"list-of-todos__heading list-of-todos__cell"},e)}))),s.a.createElement("tbody",null,y.map(function(e){return s.a.createElement(w,{key:e.id,todo:e})}))):"")};g.defaultProps={arrayOfTodosAndUsers:[]};var _=Object(d.b)(function(e){return{arrayOfTodosAndUsers:p(e),isLoadingArrayOfTodosAndUsers:y(e),isLoadedArrayOfTodosAndUsers:v(e),activeSortField:O(e),reverseStatus:T(e)}},function(e){return{setArrayOfTodosAndUsers:function(t){return e(A(t))},setIsLoadingArrayOfTodosAndUsers:function(t){return e(function(e){return{type:"setIsLoadingTodos",value:e}}(t))},setIsLoadedArrayOfTodosAndUsers:function(t){return e(function(e){return{type:"setIsLoadedTodos",value:e}}(t))},setActiveSortField:function(t){return e(function(e){return{type:"setActiveSortField",value:e}}(t))},setReverseStatus:function(t){return e(function(e){return{type:"setReverseStatus",value:e}}(t))}}})(g);var h=function(){return s.a.createElement("div",{className:"App"},s.a.createElement("h1",null,"Todo list app"),s.a.createElement(_,null))};a.a.render(s.a.createElement(d.a,{store:b},s.a.createElement(h,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.43f25d79.chunk.js.map