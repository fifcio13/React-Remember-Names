(this.webpackJsonpremember_names=this.webpackJsonpremember_names||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),c=a.n(o),l=(a(14),a(8)),i=a(1),m=a(2),u=a(4),s=a(3),p=function(e){var t=e.people.map((function(e){return r.a.createElement("div",{className:"human",key:e.id},e.name)}));return r.a.createElement("div",{className:"people-list"},t)},h=a(7),d=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={name:null},e.handleChange=function(t){e.setState(Object(h.a)({},t.target.id,t.target.value))},e.state={count:0},e.handleSubmit=function(t){t.preventDefault(),t.target.reset(),e.setState((function(e){return{count:e.count+1}})),e.props.addHuman(e.state)},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"type-area-outer"},r.a.createElement("div",{className:"type-area"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:"name"},"Insert name and surname:"),r.a.createElement("input",{pattern:"^[a-zA-Z\\s]+",required:!0,type:"text",minLength:"5",id:"name",onChange:this.handleChange}),r.a.createElement("button",null,"Submit"))),r.a.createElement("p",{className:"counter"},"Names counter: ",this.state.count))}}]),a}(n.Component),f=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={people:[{name:null,count:null,id:null}]},e.addHuman=function(t){t.id=Math.random(),console.log(t.count),e.state.people.find((function(e){return e.name===t.name}))&&(t.count=t.count-1,console.log("Duplicate"));var a=[].concat(Object(l.a)(e.state.people),[t]);e.setState({people:a})},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-inner"},r.a.createElement("aside",null,r.a.createElement("p",null,"According to Mona Chalabi's research -\xa0an\xa0average person can remember up to 150 people."),r.a.createElement("a",{title:"FiveThirtyEight site",href:"https://fivethirtyeight.com/features/how-many-people-can-you-remember/"},"How many people can you remember? - article")),r.a.createElement("header",null,r.a.createElement("h1",null,"How many names and surnames ",r.a.createElement("span",null,"can YOU remember?"))),r.a.createElement(d,{addHuman:this.addHuman}),r.a.createElement(p,{people:this.state.people})),r.a.createElement("footer",null,r.a.createElement("p",null,"We do NOT store any of the written data. Made by\xa0",r.a.createElement("a",{href:"https://fifcio13.github.io/"},"Filip\xa0Krawczyk")," \xa9 2020 using React")))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.190cc549.chunk.js.map