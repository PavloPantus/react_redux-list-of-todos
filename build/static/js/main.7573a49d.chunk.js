(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,r){e.exports=r(28)},25:function(e,t,r){},28:function(e,t,r){"use strict";r.r(t);var n=r(0),s=r.n(n),o=r(6),a=r.n(o),d=r(5),u=(r(25),r(13)),c=r(3),i=r.n(c),l=r(2),f=r(14),A=r(7),m=function(e){return{type:"setArrayOfTodosAndUsers",value:e}},y=function(e){return e.arrayOfTodosAndUsers},p=function(e){return e.isLoadingArrayOfTodosAndUsers},v=function(e){return e.isLoadedArrayOfTodosAndUsers},O=function(e){return e.activeSortField},T=function(e){return e.reverseStatus},U=Object(A.b)(function(e,t){switch(t.type){case"setArrayOfTodosAndUsers":return Object(l.a)({},e,{arrayOfTodosAndUsers:t.value});case"setIsLoadingArrayOfTodosAndUsers":return Object(l.a)({},e,{isLoadingArrayOfTodosAndUsers:t.value});case"setIsLoadedArrayOfTodosAndUsers":return Object(l.a)({},e,{isLoadedArrayOfTodosAndUsers:t.value});case"setActiveSortField":return Object(l.a)({},e,{activeSortField:t.value});case"setReverseStatus":return Object(l.a)({},e,{reverseStatus:t.value});default:return e}},{arrayOfTodosAndUsers:[],isLoadingArrayOfTodosAndUsers:!1,isLoadedArrayOfTodosAndUsers:!1,activeSortField:"",reverseStatus:!1}),b=function(e){var t,r;return i.a.async(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.a.awrap(fetch(e));case 2:return t=n.sent,n.next=5,i.a.awrap(t.json());case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}})},E=function(e){return e.user.name},L=r(27),S=Object(d.b)(function(e){return{arrayOfTodosAndUsers:y(e)}},function(e){return{setArrayOfTodosAndUsers:function(t){return e(m(t))}}})(function(e){var t=e.todo,r=e.setArrayOfTodosAndUsers,n=e.arrayOfTodosAndUsers;return s.a.createElement("tr",{className:"list-of-todos__row"},s.a.createElement("td",{className:"list-of-todos__cell"},t.title),s.a.createElement("td",{className:"list-of-todos__cell"},s.a.createElement(E,{user:t.user})),s.a.createElement("td",{className:L("list-of-todos__cell",{completed:t.completed,"not-completed":!t.completed})},t.completed?"completed":"not completed"),s.a.createElement("td",{className:"list-of-todos__cell"},s.a.createElement("button",{type:"button",onClick:function(){r(n.filter(function(e){return e.id!==t.id}))},className:"button button_remove"},"delete")))}),w=function(e){var t=e.arrayOfTodosAndUsers,r=e.setArrayOfTodosAndUsers,n=e.isLoadingArrayOfTodosAndUsers,o=e.setIsLoadingArrayOfTodosAndUsers,a=e.isLoadedArrayOfTodosAndUsers,d=e.setIsLoadedArrayOfTodosAndUsers,c=e.activeSortField,A=e.setActiveSortField,m=e.reverseStatus,y=e.setReverseStatus,p=function(e){if(0===t.length)return function(){return 1};if(""===c)return function(){return 1};var r=typeof t[0][e];return"string"===r?function(t,r){return t[e].localeCompare(r[e])}:"boolean"===r||"number"===r?function(t,r){return t[e]-r[e]}:function(){return 1}};console.log(p());var v=Object(u.a)(t).sort(p(c));return m&&(v=v.reverse()),s.a.createElement(s.a.Fragment,null,a?"":s.a.createElement("button",{type:"button",disabled:n,onClick:function(){var e,t,n,s;return i.a.async(function(a){for(;;)switch(a.prev=a.next){case 0:return o(!0),a.next=3,i.a.awrap(Promise.all([b("https://jsonplaceholder.typicode.com/todos"),b("https://jsonplaceholder.typicode.com/users")]));case 3:e=a.sent,t=Object(f.a)(e,2),n=t[0],s=t[1],r(n.map(function(e){return Object(l.a)({},e,{user:s.find(function(t){return t.id===e.userId})})})),o(!1),d(!0);case 10:case"end":return a.stop()}})}},n?"loading...":"download list"),a?s.a.createElement("table",{className:"list-of-todos"},s.a.createElement("thead",null,s.a.createElement("tr",null,["Title","User","Completed","Remove item"].map(function(e){return s.a.createElement("th",{key:e,onClick:function(){A("user"===e.toLowerCase()?"user.name":e.toLowerCase()),y(c===e.toLowerCase()||"user.name"===c?!m:m)},className:"list-of-todos__heading list-of-todos__cell"},e)}))),s.a.createElement("tbody",null,v.map(function(e){return s.a.createElement(S,{key:e.id,todo:e})}))):"")};w.defaultProps={arrayOfTodosAndUsers:[]};var g=Object(d.b)(function(e){return{arrayOfTodosAndUsers:y(e),isLoadingArrayOfTodosAndUsers:p(e),isLoadedArrayOfTodosAndUsers:v(e),activeSortField:O(e),reverseStatus:T(e)}},function(e){return{setArrayOfTodosAndUsers:function(t){return e(m(t))},setIsLoadingArrayOfTodosAndUsers:function(t){return e(function(e){return{type:"setIsLoadingArrayOfTodosAndUsers",value:e}}(t))},setIsLoadedArrayOfTodosAndUsers:function(t){return e(function(e){return{type:"setIsLoadedArrayOfTodosAndUsers",value:e}}(t))},setActiveSortField:function(t){return e(function(e){return{type:"setActiveSortField",value:e}}(t))},setReverseStatus:function(t){return e(function(e){return{type:"setReverseStatus",value:e}}(t))}}})(w);var _=function(){return s.a.createElement("div",{className:"App"},s.a.createElement("h1",null,"Todo list app"),s.a.createElement(g,null))};a.a.render(s.a.createElement(d.a,{store:U},s.a.createElement(_,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.7573a49d.chunk.js.map