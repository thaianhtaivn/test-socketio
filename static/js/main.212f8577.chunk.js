(this["webpackJsonptest-socketio"]=this["webpackJsonptest-socketio"]||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var a,o=n(0),c=n.n(o),r=n(14),s=n.n(r),i=(n(63),n(22)),l=n.n(i),u=n(41),p=n(42),h=n(43),d=n(10),m=n(56),f=n(57),v=n(44),g=n.n(v),E=(n(65),n(45)),k=n.n(E),b=(n(40),n(105)),w=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(e){var o;return Object(p.a)(this,n),(o=t.call(this,e)).callApi=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/hello");case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,200===t.status){e.next=8;break}throw Error(n.message);case 8:return e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)}))),o.state={endpoint:"localhost:5000",counter:[1,2,3,4,5,6,7,8,9,10,11],activecounter:1,greeting:"HELLO",status:"fail",response:""},o.SelectCounter=o.SelectCounter.bind(Object(d.a)(o)),o.handle_Button=o.handle_Button.bind(Object(d.a)(o)),a=k()(o.state.endpoint),o}return Object(h.a)(n,[{key:"componentWillMount",value:function(){var e=this;a.on("connect",(function(){a.on("Server-greeting",(function(e){console.log(e)})),a.emit("Client-counter",e.state.activecounter)}))}},{key:"componentDidMount",value:function(){var e=this;this.callApi().then((function(t){return e.setState({response:t.express})})).catch((function(e){return console.log(e)})),a.on("Update",(function(e){console.log("Sever said: "+e)}))}},{key:"handle_Button",value:function(){a.emit("Client-send-data","Client: "+this.state.activecounter+" Rate"),console.log("React: "+this.state.activecounter)}},{key:"SelectCounter",value:function(e){this.setState({activecounter:e}),a.emit("Client-send-data","New: "+this.state.activecounter)}},{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement(b.a,{onSelect:this.SelectCounter},c.a.createElement(b.a.Toggle,{variant:"success",id:"dropdown-basic"},"Choose Counter: ",this.state.activecounter),c.a.createElement(b.a.Menu,null,this.state.counter.map((function(e){return c.a.createElement(b.a.Item,{eventKey:e},e)})))),c.a.createElement("p",null),c.a.createElement("img",{src:g.a,onClick:this.handle_Button,className:"App-logo",alt:"logo"}),c.a.createElement("p",null,"Edit ",c.a.createElement("code",null,"src/App.js")," and save to reload."),c.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")),c.a.createElement("p",{className:"App-intro"},this.state.response))}}]),n}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},44:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},58:function(e,t,n){e.exports=n(100)},63:function(e,t,n){},65:function(e,t,n){},94:function(e,t){}},[[58,1,2]]]);
//# sourceMappingURL=main.212f8577.chunk.js.map