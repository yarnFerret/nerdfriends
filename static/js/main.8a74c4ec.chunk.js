(this.webpackJsonpnerdfriends=this.webpackJsonpnerdfriends||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),i=(n(12),n(1)),l=n(2),s=n(4),u=n(3),h=(n(13),function(e){var t=e.id,n=e.name,c=e.ksywa;return r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:"https://api.adorable.io/avatars/168/".concat(t,".png"),alt:""}),r.a.createElement(a.Fragment,null,r.a.createElement("h4",null,n),r.a.createElement("p",null,c)))}),m=(n(14),function(e){var t=e.cats;return r.a.createElement("div",{className:"lista"},t.map((function(e,n){return r.a.createElement(h,{key:n,id:t[n].id,name:t[n].name,ksywa:t[n].username})})))}),d=(n(15),function(e){var t=e.searchChange;return r.a.createElement("div",{className:"search"},r.a.createElement("input",{type:"search",placeholder:"podaj imie",onChange:t}))}),f=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",height:"400px"}},e.children)},p=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(l.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null," spierdolilas cos kochana"):this.props.children}}]),n}(a.Component),v=(n(16),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={cats:[],searchfield:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({cats:t})}))}},{key:"render",value:function(){var e=this.state,t=e.cats,n=e.searchfield,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t?r.a.createElement(a.Fragment,null,r.a.createElement("h1",{className:"title"},"Nerd friends from school"),r.a.createElement(d,{searchChange:this.onSearchChange}),r.a.createElement(f,null,r.a.createElement(p,null,r.a.createElement(m,{cats:c})))):r.a.createElement("h1",null,"Loading...")}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.8a74c4ec.chunk.js.map