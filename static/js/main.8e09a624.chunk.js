(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,r){e.exports=r(28)},26:function(e,t,r){},28:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(6),s=r.n(a),u=r(5),c=(r(26),r(14)),d=r(3),i=r.n(d),l=r(2),f=r(15),m=r(7),T=function(e){return{type:"SET_TODOS",value:e}},p=function(e){return e.arrayOfTodosAndUsers},O=function(e){return e.isLoading},A=function(e){return e.isLoadedTodos},E=function(e){return e.activeSortField},S=function(e){return e.reverseStatus},v=Object(m.b)(function(e,t){switch(t.type){case"SET_TODOS":return Object(l.a)({},e,{arrayOfTodosAndUsers:t.value});case"SET_IS_LOADING":return Object(l.a)({},e,{isLoading:t.value});case"SET_IS_LOADED_TODOS":return Object(l.a)({},e,{isLoadedTodos:t.value});case"SET_ACTIVE_SORT_FIELD":return Object(l.a)({},e,{activeSortField:t.value});case"SET_REVERSE_STATUS":return Object(l.a)({},e,{reverseStatus:t.value});default:return e}},{arrayOfTodosAndUsers:[],isLoading:!1,isLoadedTodos:!1,activeSortField:"",reverseStatus:!1}),y=function(e){var t,r;return i.a.async(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.a.awrap(fetch(e));case 2:return t=n.sent,n.next=5,i.a.awrap(t.json());case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}})},_=r(13),b=r.n(_),L=function(e){return e.user.name},U=Object(u.b)(function(e){return{arrayOfTodosAndUsers:p(e)}},function(e){return{setArrayOfTodosAndUsers:function(t){return e(T(t))}}})(function(e){var t=e.todo,r=e.setArrayOfTodosAndUsers,n=e.arrayOfTodosAndUsers;return o.a.createElement("tr",{className:"list-of-todos__row"},o.a.createElement("td",{className:"list-of-todos__cell"},t.title),o.a.createElement("td",{className:"list-of-todos__cell"},o.a.createElement(L,{user:t.user})),o.a.createElement("td",{className:b()("list-of-todos__cell",{completed:t.completed,"not-completed":!t.completed})},t.completed?"completed":"not completed"),o.a.createElement("td",{className:"list-of-todos__cell"},o.a.createElement("button",{type:"button",onClick:function(){r(n.filter(function(e){return e.id!==t.id}))},className:"button button_remove"},"delete")))}),w=function(e){var t=e.arrayOfTodosAndUsers,r=e.setArrayOfTodosAndUsers,n=e.isLoadingArrayOfTodosAndUsers,a=e.setIsLoadingArrayOfTodosAndUsers,s=e.isLoadedArrayOfTodosAndUsers,u=e.setIsLoadedArrayOfTodosAndUsers,d=e.activeSortField,m=e.setActiveSortField,T=e.reverseStatus,p=e.setReverseStatus,O=Object(c.a)(t).sort(function(e){if(0===t.length)return function(){return 1};if(""===d)return function(){return 1};var r=typeof t[0][e];return"string"===r?function(t,r){return t[e].localeCompare(r[e])}:"boolean"===r||"number"===r?function(t,r){return t[e]-r[e]}:function(){return 1}}(d));return T&&(O=O.reverse()),o.a.createElement(o.a.Fragment,null,s?"":o.a.createElement("button",{type:"button",disabled:n,onClick:function(){var e,t,n,o;return i.a.async(function(s){for(;;)switch(s.prev=s.next){case 0:return a(!0),s.next=3,i.a.awrap(Promise.all([y("https://jsonplaceholder.typicode.com/todos"),y("https://jsonplaceholder.typicode.com/users")]));case 3:e=s.sent,t=Object(f.a)(e,2),n=t[0],o=t[1],r(n.map(function(e){return Object(l.a)({},e,{user:o.find(function(t){return t.id===e.userId})})})),a(!1),u(!0);case 10:case"end":return s.stop()}})}},n?"loading...":"download list"),s?o.a.createElement("table",{className:"list-of-todos"},o.a.createElement("thead",null,o.a.createElement("tr",null,["Title","User","Completed","Remove item"].map(function(e){return o.a.createElement("th",{key:e,onClick:function(){m("user"===e.toLowerCase()?"user.name":e.toLowerCase()),p(d===e.toLowerCase()||"user.name"===d?!T:T)},className:"list-of-todos__heading list-of-todos__cell"},e)}))),o.a.createElement("tbody",null,O.map(function(e){return o.a.createElement(U,{key:e.id,todo:e})}))):"")};w.defaultProps={arrayOfTodosAndUsers:[]};var I=Object(u.b)(function(e){return{arrayOfTodosAndUsers:p(e),isLoadingArrayOfTodosAndUsers:O(e),isLoadedArrayOfTodosAndUsers:A(e),activeSortField:E(e),reverseStatus:S(e)}},function(e){return{setArrayOfTodosAndUsers:function(t){return e(T(t))},setIsLoadingArrayOfTodosAndUsers:function(t){return e(function(e){return{type:"SET_IS_LOADING",value:e}}(t))},setIsLoadedArrayOfTodosAndUsers:function(t){return e(function(e){return{type:"SET_IS_LOADED_TODOS",value:e}}(t))},setActiveSortField:function(t){return e(function(e){return{type:"SET_ACTIVE_SORT_FIELD",value:e}}(t))},setReverseStatus:function(t){return e(function(e){return{type:"SET_REVERSE_STATUS",value:e}}(t))}}})(w);var h=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Todo list app"),o.a.createElement(I,null))};s.a.render(o.a.createElement(u.a,{store:v},o.a.createElement(h,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.8e09a624.chunk.js.map