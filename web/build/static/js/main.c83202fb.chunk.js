(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(e,t,a){e.exports=a(270)},125:function(e,t,a){},126:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},127:function(e,t,a){},270:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(22),l=a.n(i),c=(a(125),a(47)),o=a(48),s=a(53),u=a(49),m=a(54),p=a(27),h=a(106),g=(a(126),a(127),a(52)),d=a(45),f=a.n(d),v=a(115),b=a.n(v),E=a(117),y=a.n(E),k=a(21),C=a.n(k),O=a(116),w=a.n(O),L=a(70),j=a.n(L),x=a(24),N=a(55),S=a.n(N),A=a(56),W=a.n(A),P=a(108),D=a.n(P),T=Object(x.createMuiTheme)({palette:{primary:{light:S.a[300],main:S.a[500],dark:S.a[700]},secondary:{light:W.a[300],main:W.a[500],dark:W.a[700]}},typography:{useNextVariants:!0}});var J=function(e){return function(t){return r.a.createElement(x.MuiThemeProvider,{theme:T},r.a.createElement(D.a,null),r.a.createElement(e,t))}},M=(a(10),a(46)),B=a.n(M),G=a(110),q=a.n(G),F=a(112),H=a.n(F),I=a(109),R=a.n(I),z=a(111),U=a.n(z),V={PaperProps:{style:{maxHeight:224,width:250}}};function $(e,t){return{fontWeight:-1===t.state.name.indexOf(e)?t.props.theme.typography.fontWeightRegular:t.props.theme.typography.fontWeightMedium}}var K=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={name:["ALL"]},a.handleChange=function(e){console.log(e.target.value);var t=e.target.value;"ALL"===t[t.length-1]?(t=["ALL"],a.setState({name:t})):("ALL"===t[0]&&(t=t.slice(1)),a.setState({name:t})),console.log(a.props.callback),a.props.callback(t)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes,a=this.props,n=a.items,i=a.label;return r.a.createElement("div",{className:t.root},r.a.createElement(R.a,{className:t.formControl},r.a.createElement(q.a,{htmlFor:"select-multiple"},i),r.a.createElement(U.a,{multiple:!0,value:this.state.name,onChange:this.handleChange,input:r.a.createElement(B.a,{id:"select-multiple"}),MenuProps:V},n.map(function(t){return r.a.createElement(H.a,{key:t,value:t,style:$(t,e)},t)}))))}}]),t}(r.a.Component),Q=Object(x.withStyles)(function(e){return{root:{display:"flex",flexWrap:"wrap"},formControl:{margin:e.spacing.unit,minWidth:120,maxWidth:300},chips:{display:"flex",flexWrap:"wrap"},chip:{margin:e.spacing.unit/4},noLabel:{marginTop:3*e.spacing.unit}}},{withTheme:!0})(K);function X(){var e=Object(h.a)(["\n    {testers(countries: ",", devices: ",") {\n      uid\n      country\n      firstName\n      lastName\n      experience\n      devices{\n        description\n        deviceid\n      }\n    }}\n    "]);return X=function(){return e},e}var Y=["ALL","iPhone 4","iPhone 4S","iPhone 5","Galaxy S3","Galaxy S4","Nexus 4","Droid Razor","Droid DNA","HTC One","iPhone 3"],Z=["ALL","US","GB","JP"],_=function(e){return r.a.createElement(g.b,{query:f()(X(),JSON.stringify(e.args.countries),JSON.stringify(e.args.devices))},function(t){var a=t.loading,n=t.error,i=t.data,l=e.props.classes;return a?r.a.createElement("p",null,"Loading..."):n?r.a.createElement("p",null,"Error :("):(console.log("args",e.args),r.a.createElement(b.a,{className:l.table},r.a.createElement(w.a,null,r.a.createElement(j.a,null,r.a.createElement(C.a,null,"ID"),r.a.createElement(C.a,{align:"right"},"Last Name"),r.a.createElement(C.a,{align:"right"},"First Name"),r.a.createElement(C.a,{align:"right"},"Country"),r.a.createElement(C.a,{align:"right"},"Experience"),r.a.createElement(C.a,{align:"center"},"Devices"))),r.a.createElement(y.a,null,i.testers.map(function(e){var t=e.uid,a=e.firstName,n=e.lastName,i=e.experience,l=e.devices,c=e.country;return r.a.createElement(j.a,{key:t},r.a.createElement(C.a,{component:"th",scope:"row"},t),r.a.createElement(C.a,{align:"right"},a),r.a.createElement(C.a,{align:"right"},n),r.a.createElement(C.a,{align:"right"},c),r.a.createElement(C.a,{align:"right"},i),r.a.createElement(C.a,{align:"left"},r.a.createElement("ul",null,l.map(function(e){return r.a.createElement("li",null,e.description)}))))}))))})},ee=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={countries:["ALL"],devices:["ALL"]},a.deviceCallback=a.deviceCallback.bind(Object(p.a)(Object(p.a)(a))),a.CountryCallback=a.CountryCallback.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"deviceCallback",value:function(e){console.log("triggered"),this.setState({devices:e})}},{key:"CountryCallback",value:function(e){this.setState({countries:e})}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(Q,{items:Y,label:"Devices",callback:this.deviceCallback}),r.a.createElement(Q,{items:Z,label:"Countries",callback:this.CountryCallback}),r.a.createElement(_,{props:this.props,args:this.state}))}}]),t}(n.Component),te=J(Object(x.withStyles)(function(e){return{root:{textAlign:"center",paddingTop:20*e.spacing.unit},table:{minWidth:700}}})(ee));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ae=new(a(118).a)({uri:"http://45.77.216.107:5000/graphql"});l.a.render(r.a.createElement(g.a,{client:ae},r.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[120,1,2]]]);
//# sourceMappingURL=main.c83202fb.chunk.js.map