(this["webpackJsonpreact-tutorial"]=this["webpackJsonpreact-tutorial"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),c=a.n(r),s=a(7),i=a.n(s),o=a(9),j=a(2),h=a(3),b=a(5),u=a(4),l=c.a.createContext(),d=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={message:""},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsx)(l.Provider,{value:{state:this.state,setMessage:function(t){return e.setState({message:t})}},children:this.props.children})}}]),a}(r.Component),O=function(){return Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Name"}),Object(n.jsx)("th",{children:"Job"})]})})},m=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=this.props.characterData2.map((function(t,a){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:t.name}),Object(n.jsx)("td",{children:t.job}),Object(n.jsx)("td",{children:Object(n.jsx)("button",{onClick:function(){return e.props.removeCharacter(a)},children:"Delete"})}),Object(n.jsx)("td",{children:Object(n.jsx)(l.Consumer,{children:function(e){return Object(n.jsx)("button",{onClick:function(){var a=t.name;return e.setMessage(a)},children:" Copy to form "})}})})]},a)}));return Object(n.jsx)("tbody",{children:t})}}]),a}(r.Component),p=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props,t=e.characterData11,a=e.removeCharacter;return Object(n.jsxs)("table",{children:[Object(n.jsx)(O,{}),Object(n.jsx)(m,{characterData2:t,removeCharacter:a})]})}}]),a}(r.Component),v=a(8),f=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).initialState={name:"",job:""},e.state=e.initialState,e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(v.a)({},n,r))},e.sendData=function(){e.props.parentCallback("Hey Popsie, How\u2019s it going?")},e.submitForm=function(){e.props.handleSubmit(e.state),e.setState(e.initialState),e.sendData()},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.job;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("form",{children:[Object(n.jsx)("label",{htmlFor:"name",children:"Name"}),Object(n.jsx)("input",{type:"text",name:"name",id:"name",value:t,onChange:this.handleChange}),Object(n.jsx)("label",{htmlFor:"job",children:"Job"}),Object(n.jsx)("input",{type:"text",name:"job",id:"job",value:a,onChange:this.handleChange}),Object(n.jsx)("input",{type:"button",value:"Submit",onClick:this.submitForm})]}),Object(n.jsx)("div",{children:Object(n.jsx)(l.Consumer,{children:function(e){return Object(n.jsx)("p",{children:e.state.message})}})})]})}}]),a}(r.Component),x=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={message:" initial message",characters:[{name:"Charlie2",job:"Janitor8"},{name:"Mac",job:"Bouncer"},{name:"Dee",job:"Aspring actress"},{name:"Dennis2",job:"Bartender"}]},e.callbackFunction=function(t){e.setState({message:t})},e.removeCharacter=function(t){var a=e.state.characters;e.setState({characters:a.filter((function(e,a){return a!==t}))})},e.handleSubmit=function(t){e.setState({characters:[].concat(Object(o.a)(e.state.characters),[t])})},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this.state.characters,t=this.state.message;return Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)(d,{children:[Object(n.jsx)("h1",{children:t}),Object(n.jsx)(p,{characterData11:e,removeCharacter:this.removeCharacter}),Object(n.jsx)(f,{handleSubmit:this.handleSubmit,parentCallback:this.callbackFunction})]})})}}]),a}(r.Component);a(15);i.a.render(Object(n.jsx)(x,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.1958e2e8.chunk.js.map