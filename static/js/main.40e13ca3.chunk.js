(this["webpackJsonpcontact-manager"]=this["webpackJsonpcontact-manager"]||[]).push([[0],{23:function(e,t,a){e.exports=a(35)},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),o=a.n(c),l=(a(28),a(29),a(10));function i(e){var t=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-secondary navbar-nav py-0 mb-5"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},t),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fa fa-home"}),"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fa fa-plus"}),"Add Contact")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fa fa-question"}),"About"))))))}var s=a(6),m=a(7),u=a(9),h=a(8),p=a(22),d=a(12),f=r.a.createContext(),E=function(e,t){switch(t.type){case"DELETE_CONTACT":return Object(d.a)(Object(d.a)({},e),{},{contacts:e.contacts.filter((function(e){return e.id!==t.payload}))});case"ADD_CONTACT":return Object(d.a)(Object(d.a)({},e),{},{contacts:[t.payload].concat(Object(p.a)(e.contacts))});case"UPDATE_CONTACT":return Object(d.a)(Object(d.a)({},e),{},{contacts:e.contacts.map((function(e){return e.id===t.payload.id?t.payload:e}))});default:return{state:e}}},v=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],dispatch:function(t){return e.setState((function(e){return E(e,t)}))}},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({contacts:t})}))}},{key:"render",value:function(){return r.a.createElement(f.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),b=f.Consumer,y=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={showContactInfo:!1},e.onDeleteClick=function(e,t){fetch("https://jsonplaceholder.typicode.com/users/".concat(t),{method:"DELETE"}).then((function(e){return e.json()})).then((function(a){e({type:"DELETE_CONTACT",payload:t})}))},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.props.contact,a=t.name,n=t.email,c=t.phone,o=t.id,i=this.state.showContactInfo;return r.a.createElement(b,null,(function(t){var s=t.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h2",null,a,r.a.createElement("i",{className:"fa fa-sort-down",style:{cursor:"pointer"},onClick:function(){return e.setState({showContactInfo:!i})}}),r.a.createElement("i",{className:"fa fa-times",style:{cursor:"pointer",float:"right",color:"red"},onClick:e.onDeleteClick.bind(e,s,o)}),r.a.createElement(l.b,{to:"/contact/edit/".concat(o)},r.a.createElement("i",{className:"fa fa-pencil",style:{cursor:"pointer",color:"black",float:"right",marginRight:"10px"}}))),i?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email:",n),r.a.createElement("li",{className:"list-group-item"},"Phone:",c)):null)}))}}]),a}(n.Component),g=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(b,null,(function(e){return e.contacts.map((function(e){return r.a.createElement(y,{key:e.id,contact:e})}))}))}}]),a}(n.Component),C=a(13);function N(e){var t=e.placeholder,a=e.label,n=e.name,c=e.value,o=e.onChange,l=e.type,i=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:n},a),r.a.createElement("input",{type:l,placeholder:t,className:"form-control",name:n,value:c,onChange:o,error:i}))}N.defaultProps={type:"text"};var j=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",phone:"",errors:{}},e.onChange=function(t){e.setState(Object(C.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){var a=e.state,n=a.name,r=a.email,c=a.phone;if(""!==n)if(""!==r)if(""!==c){var o={name:n,email:r,phone:c};fetch("https://jsonplaceholder.typicode.com/users",{method:"POST",headers:{"Content-type":"Application/json"},body:JSON.stringify(o)}).then((function(e){return e.json()})).then((function(e){console.log(e),t({type:"ADD_CONTACT",payload:e})})),e.props.history.push("/")}else e.setState({errors:{phone:"Phone is required"}});else e.setState({errors:{email:"Email is required"}});else e.setState({errors:{name:"Name is required"}})},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(b,null,(function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(N,{placeholder:"Enter name",label:"Name",value:a,name:"name",onChange:e.onChange,error:o.name}),r.a.createElement(N,{placeholder:"Enter email",label:"Email",value:n,name:"email",onChange:e.onChange,error:o.email}),r.a.createElement(N,{placeholder:"Enter phone",label:"Phone",value:c,name:"phone",onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn bg-light btn-block"}))))}))}}]),a}(n.Component),O=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",phone:"",errors:{}},e.onChange=function(t){e.setState(Object(C.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){var a=e.state,n=a.name,r=a.email,c=a.phone;if(""!==n)if(""!==r)if(""!==c){var o={name:n,email:r,phone:c},l=e.props.match.params.id;fetch("https://jsonplaceholder.typicode.com/users/".concat(l),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(o)}).then((function(e){return e.json()})).then((function(e){console.log(e),t({type:"UPDATE_CONTACT",payload:e})})),e.props.history.push("/")}else e.setState({errors:{phone:"Phone is required"}});else e.setState({errors:{email:"Email is required"}});else e.setState({errors:{name:"Name is required"}})},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;fetch("https://jsonplaceholder.typicode.com/users/".concat(t)).then((function(e){return e.json()})).then((function(t){e.setState({name:t.name,email:t.email,phone:t.phone})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(b,null,(function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(N,{placeholder:"Enter name",label:"Name",value:a,name:"name",onChange:e.onChange,error:o.name}),r.a.createElement(N,{placeholder:"Enter email",label:"Email",value:n,name:"email",onChange:e.onChange,error:o.email}),r.a.createElement(N,{placeholder:"Enter phone",label:"Phone",value:c,name:"phone",onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Edit Contact",className:"btn bg-light btn-block"}))))}))}}]),a}(n.Component),S=a(1);function k(){return r.a.createElement("div",null,r.a.createElement("h2",null,"About"),r.a.createElement("p",null,"Simple application for contact managment"),r.a.createElement("p",null,"version 0.0.1"))}function A(){return r.a.createElement("div",null,r.a.createElement("h2",null,r.a.createElement("span",{className:"text-danger"},"404"),"Not Found"),r.a.createElement("p",null,"Sorry, that page doesnot exist"))}var T=function(){return r.a.createElement(v,null,r.a.createElement(l.a,null,r.a.createElement("div",null,r.a.createElement(i,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(S.c,null,r.a.createElement(S.a,{exact:!0,path:"/",component:g}),r.a.createElement(S.a,{exact:!0,path:"/contact/add",component:j}),r.a.createElement(S.a,{exact:!0,path:"/contact/edit/:id",component:O}),r.a.createElement(S.a,{exact:!0,path:"/about",component:k}),r.a.createElement(S.a,{component:A}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.40e13ca3.chunk.js.map