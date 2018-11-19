(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{156:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(28),l=a.n(o),s=a(10),i=(a(86),a(37)),c=a(65),u=a.n(c),m=a(25),p=a(69),g=a(70);i.a.use(u.a).use(m.a).init({fallbackLng:"en",interpolation:{escapeValue:!1},resources:{en:{translation:p},de:{translation:g}}});i.a;var E=a(17),d=a(18),h=a(20),f=a(19),b=a(21),v=a(71),O=a(159),k=a(158),w=a(39),y=a(27),j=a(22),P=a.n(j),I=(a(147),a(149),function(e,t){return{type:"SET_TOKEN",payload:{token:e,expires:t}}}),_=function(){return{type:"SET_LOGGED_IN",payload:{loggedIn:!0}}},S=function(){return{type:"SET_LOGGED_OUT",payload:{loggedIn:!1}}},x=function(e){return{type:"SET_PROFILE",payload:{profile:e}}},T="top",L=a(23),N=a.n(L),C=a(30),A=a(6),R=a(160),B=a(161),D=a(7),M=function(e){localStorage.removeItem("token"),localStorage.removeItem("token_expires"),e.props.setToken&&e.props.setToken(null,0),e.props.setLoggedOut&&e.props.setLoggedOut(),e.props.setProfile&&e.props.setProfile(null),e.props.history&&e.props.history.push("/")},G=function(e){var t=e.props.keys.token?e.props.keys.token:localStorage.getItem("token"),a=e.props.keys.token_expires?e.props.keys.token_expires:localStorage.getItem("token_expires");t&&W(e,t,a)},W=function(e,t,a){localStorage.setItem("token",t),localStorage.setItem("token_expires",a),e.props.setToken(t,a),Math.floor(Date.now()/1e3)<a&&(P.a.defaults.headers.common.Authorization="Bearer ".concat(t),e.props.setLoggedIn(),q(e))},q=function(){var e=Object(C.a)(N.a.mark(function e(t){var a;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.get("/api/users/profile");case 3:a=e.sent,t.props.setProfile(a.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(t){return e.apply(this,arguments)}}(),z=a(3),F=function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={},a.componentDidMount=function(){G(Object(A.a)(Object(A.a)(a)))},a.submitLogin=function(e){var t=a.props.t;e.preventDefault(),a.setState({loginInProgress:!0,loginEmailError:!1,loginPasswordError:!1,loginConfirmPasswordError:!1},Object(C.a)(N.a.mark(function e(){var n;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.post("/api/users/login",{email:a.state.loginEmail,password:a.state.loginPassword});case 3:n=e.sent,a.setState({loginInProgress:!1}),W(Object(A.a)(Object(A.a)(a)),n.data.token,n.data.exp),a.props.setProfile(n.data.user),y.toast.success(t("Welcome back!")),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0.response),a.setState({loginInProgress:!1,loginError:e.t0.response.data.message});case 14:case"end":return e.stop()}},e,this,[[0,10]])})))},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props.t;return r.a.createElement("div",{style:{maxWidth:500,margin:"auto"}},this.props.user.loggedIn&&r.a.createElement(R.a,{to:"/"}),r.a.createElement(z.k,{onSubmit:this.submitLogin},r.a.createElement(z.c,null,r.a.createElement(z.f,null,r.a.createElement("h3",null,r.a.createElement(D.a,{icon:"sign-in-alt"}),r.a.createElement("span",{className:"ml-2"},t("Login")))),r.a.createElement(z.d,null,r.a.createElement(z.l,null,r.a.createElement(z.o,{for:"loginEmail"},t("Email Address")),r.a.createElement(z.n,{id:"loginEmail",type:"email",autoFocus:!0,required:!0,onChange:function(t){return e.setState({loginEmail:t.target.value})}})),r.a.createElement(z.l,null,r.a.createElement(z.o,{for:"loginPassword"},t("Password")),r.a.createElement(z.n,{id:"loginPassword",type:"password",required:!0,onChange:function(t){return e.setState({loginPassword:t.target.value})}})),this.state.loginError&&r.a.createElement(z.a,{color:"danger"},r.a.createElement(D.a,{icon:"exclamation-triangle"}),r.a.createElement("span",{className:"ml-2"},this.state.loginError))),r.a.createElement(z.e,{className:"text-right"},r.a.createElement(z.b,{block:!0,color:"primary",size:"lg",disabled:this.state.loginInProgress},this.state.loginInProgress?r.a.createElement(D.a,{spin:!0,icon:"spinner"}):t("Login"))))))}}]),t}(n.Component),H=Object(B.a)(Object(s.b)(function(e){return e},{setToken:I,setLoggedIn:_,setLoggedOut:S,setProfile:x})(Object(m.b)()(F))),U=a(34),X=function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={},a.componentDidMount=function(){G(Object(A.a)(Object(A.a)(a)))},a.submitSignup=function(e){var t=a.props.t;e.preventDefault(),a.setState({signupInProgress:!0,signupEmailError:!1,signupPasswordError:!1,signupConfirmPasswordError:!1},Object(C.a)(N.a.mark(function e(){var n;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.post("/api/users/signup",{email:a.state.signupEmail,password:a.state.signupPassword,confirm:a.state.signupConfirmPassword});case 3:n=e.sent,W(Object(A.a)(Object(A.a)(a)),n.data.token,n.data.exp),a.setState({signupInProgress:!1,signupComplete:!0}),a.props.setProfile(n.data.user),y.toast.success(t("Thanks for joining us!")),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),console.error(e.t0.response),a.setState(Object(U.a)({signupInProgress:!1},e.t0.response.data.errors));case 15:case"end":return e.stop()}},e,this,[[0,10]])})))},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props.t;return r.a.createElement("div",{style:{maxWidth:500,margin:"auto"}},this.state.signupComplete&&r.a.createElement(R.a,{to:"/"}),r.a.createElement(z.k,{onSubmit:this.submitSignup},r.a.createElement(z.c,null,r.a.createElement(z.f,null,r.a.createElement("h3",null,r.a.createElement(D.a,{icon:"user-plus"}),r.a.createElement("span",{className:"ml-2"},t("Signup")))),r.a.createElement(z.d,null,r.a.createElement(z.l,null,r.a.createElement(z.o,{for:"loginEmail"},t("Email Address")),r.a.createElement(z.n,{id:"loginEmail",type:"email",autoFocus:!0,required:!0,invalid:Boolean(this.state.signupEmailError),onChange:function(t){return e.setState({signupEmail:t.target.value})}}),r.a.createElement(z.m,{color:"danger"},this.state.signupEmailError)),r.a.createElement(z.l,null,r.a.createElement(z.o,{for:"loginPassword"},t("Password")),r.a.createElement(z.n,{id:"loginPassword",type:"password",required:!0,invalid:Boolean(this.state.signupPasswordError),onChange:function(t){return e.setState({signupPassword:t.target.value})}}),r.a.createElement(z.m,{color:"danger"},this.state.signupPasswordError)),r.a.createElement(z.l,null,r.a.createElement(z.o,{for:"loginConfirmPassword"},t("Confirm Password")),r.a.createElement(z.n,{id:"loginConfirmPassword",type:"password",required:!0,invalid:Boolean(this.state.signupConfirmPasswordError),onChange:function(t){return e.setState({signupConfirmPassword:t.target.value})}}),r.a.createElement(z.m,{color:"danger"},this.state.signupConfirmPasswordError))),r.a.createElement(z.e,{className:"text-right"},r.a.createElement(z.b,{block:!0,color:"primary",size:"lg",disabled:this.state.signupInProgress},this.state.signupInProgress?r.a.createElement(D.a,{spin:!0,icon:"spinner"}):t("Signup"))))))}}]),t}(n.Component),J=Object(B.a)(Object(s.b)(function(e){return e},{setToken:I,setLoggedIn:_,setLoggedOut:S,setProfile:x})(Object(m.b)()(X))),V=a(157),K=function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={},a.componentWillMount=function(){G(Object(A.a)(Object(A.a)(a)))},a.logout=function(){M(Object(A.a)(Object(A.a)(a)))},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props.t;return r.a.createElement("div",null,r.a.createElement(z.s,{id:"main-nav",color:"dark",dark:!0,expand:"md",fixed:T||!1},r.a.createElement(z.t,{href:"#",className:"animated infinite pulse"},"Reactify Boilerplate"),r.a.createElement(z.u,{onClick:function(){return e.setState({menuOpen:!e.state.menuOpen})}}),r.a.createElement(z.g,{isOpen:this.state.menuOpen,navbar:!0},r.a.createElement(z.p,{navbar:!0},r.a.createElement(z.q,{active:"/"===this.props.location.pathname},r.a.createElement(V.a,{to:"/",className:"nav-link"},r.a.createElement(D.a,{icon:"home",className:"mr-1"}),r.a.createElement("span",null,t("Home")))),r.a.createElement(z.q,null,r.a.createElement(z.r,{href:"https://github.com/mathiscode/reactify-boilerplate",target:"_blank"},r.a.createElement(D.a,{icon:["fab","github"],className:"mr-1"}),r.a.createElement("span",null,"GitHub")))),r.a.createElement(z.p,{className:"ml-auto",navbar:!0},r.a.createElement(z.v,{nav:!0,inNavbar:!0},r.a.createElement(z.j,{nav:!0,caret:!0},r.a.createElement(D.a,{icon:"flag"})),r.a.createElement(z.i,{className:"main-nav-dropdown",right:!0},r.a.createElement(z.r,{href:"/?lng=en"},r.a.createElement(z.h,null,t("English"))),r.a.createElement(z.r,{href:"/?lng=de"},r.a.createElement(z.h,null,t("Deutsch"))))),!this.props.user.loggedIn&&r.a.createElement(r.a.Fragment,null,r.a.createElement(z.q,{active:"/login"===this.props.location.pathname},r.a.createElement(V.a,{to:"/login",className:"nav-link"},r.a.createElement(D.a,{icon:"sign-in-alt",className:"mr-1"}),r.a.createElement("span",null,t("Login")))),r.a.createElement(z.q,{active:"/signup"===this.props.location.pathname},r.a.createElement(V.a,{to:"/signup",className:"nav-link"},r.a.createElement(D.a,{icon:"user-plus",className:"mr-1"}),r.a.createElement("span",null,t("Signup"))))),this.props.user.loggedIn&&r.a.createElement("div",null,r.a.createElement(z.v,{nav:!0,inNavbar:!0},r.a.createElement(z.j,{nav:!0,caret:!0},r.a.createElement(D.a,{icon:"user-circle",size:"lg",className:"mr-1"}),this.props.user.profile&&r.a.createElement("span",null,this.props.user.profile.email)),r.a.createElement(z.i,{className:"main-nav-dropdown",right:!0},r.a.createElement(V.a,{to:"/profile"},r.a.createElement(z.h,{active:"/profile"===this.props.location.pathname},t("My Profile"))),r.a.createElement(z.h,{divider:!0}),r.a.createElement(z.h,{onClick:this.logout},r.a.createElement(D.a,{icon:"sign-out-alt",className:"mr-1"}),t("Logout")))))))))}}]),t}(n.Component),Z=Object(B.a)(Object(s.b)(function(e){return e},{setToken:I,setLoggedIn:_,setLoggedOut:S,setProfile:x})(Object(m.b)()(K))),$=function(e){function t(){return Object(E.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(z.c,null,r.a.createElement(z.f,null,r.a.createElement("h3",null,"What is Reactify Boilerplate?")),r.a.createElement(z.d,null,r.a.createElement("h4",null,"Frontend: React"),r.a.createElement("p",null,"Reactify Boilerplate uses ",r.a.createElement("a",{href:"https://reactjs.org",target:"_blank"},"React")," ","(via ",r.a.createElement("a",{href:"https://github.com/facebook/create-react-app",target:"_blank"},"Create React App"),") as a frontend framework."),r.a.createElement("p",null,"Includes:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://reacttraining.com/react-router",target:"_blank"},"React Router")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://redux.js.org/",target:"_blank"},"Redux")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/fkhadra/react-toastify",target:"_blank"},"React-Toastify")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://getbootstrap.com",target:"_blank"},"Bootstrap 4")," (via ",r.a.createElement("a",{href:"https://reactstrap.github.io/",target:"_blank"},"reactstrap"),")"),r.a.createElement("li",null,r.a.createElement("a",{href:"https://bootswatch.com",target:"_blank"},"Bootswatch Themes")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://fontawesome.com",target:"_blank"},"FontAwesome")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://daneden.github.io/animate.css",target:"_blank"},"Animate.css")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://react.i18next.com",target:"_blank"},"Internationalization (via react-i18next)"))),r.a.createElement("hr",null),r.a.createElement("h4",null,"Backend: Restify"),r.a.createElement("p",null,"Reactify Boilerplate uses ",r.a.createElement("a",{href:"http://restify.com"},"Restify")," as a backend server."),r.a.createElement("p",null,"Includes:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://mongoosejs.com",target:"_blank"},"Mongoose")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/mashpie/i18n-node",target:"_blank"},"Internationalization (via i18n)")),r.a.createElement("li",null,"User login/signup is already implemented for you")))))}}]),t}(n.Component),Q=Object(s.b)(function(e){return e})($);function Y(e){var t=e.icon||"spinner",a=e.size||"10x";return r.a.createElement(D.a,Object.assign({spin:!0,icon:t,size:a},e))}var ee=function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0},a.componentDidMount=Object(C.a)(N.a.mark(function e(){var t,n;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.props.t,a.props.user.loggedIn){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,P.a.get("/api/users/profile");case 6:n=e.sent,a.setState({loading:!1,profile:n.data}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(3),console.error(e.t0),y.toast.error(t("There was an error getting your profile"));case 14:case"end":return e.stop()}},e,this,[[3,10]])})),a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return this.props.user.loggedIn?r.a.createElement("div",{style:{padding:50}},this.state.loading?r.a.createElement(Y,{className:"supercenter"}):r.a.createElement("pre",null,JSON.stringify(this.state.profile,null,2))):r.a.createElement(R.a,{to:"/"})}}]),t}(n.Component),te=Object(s.b)(function(e){return e})(Object(m.b)()(ee)),ae=a(26),ne=a(74);w.b.add(ae.g,ae.d,ae.a,ae.e,ae.f,ae.i,ae.b,ae.h,ne.a,ae.c);var re=function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).componentWillMount=function(){P.a.defaults.headers.common["Accept-Language"]=i.a.language||"en",P.a.defaults.params={lng:i.a.language||"en"}},a.componentDidMount=function(){switch(T){case"top":try{document.getElementById("content").style.paddingTop="90px"}catch(e){}}},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v.Helmet,null,r.a.createElement("title",null,"Reactify Boilerplate"),!1),r.a.createElement(O.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,null),r.a.createElement("div",{id:"content"},r.a.createElement(k.a,{path:"/",exact:!0,component:Q}),r.a.createElement(k.a,{path:"/profile",component:te}),r.a.createElement(k.a,{path:"/login",component:H}),r.a.createElement(k.a,{path:"/signup",component:J})))),r.a.createElement(y.ToastContainer,{position:y.toast.POSITION.BOTTOM_RIGHT}))}}]),t}(n.Component),oe=Object(s.b)(function(e){return e},{setProfile:x})(re),le=a(36),se={token:null},ie={loggedIn:!1},ce=Object(le.b)({keys:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TOKEN":var a=t.payload,n=a.token,r=a.expires;return Object(U.a)({},e,{token:n,expires:r});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOGGED_IN":case"SET_LOGGED_OUT":var a=t.payload.loggedIn;return Object(U.a)({},e,{loggedIn:a});case"SET_PROFILE":var n=t.payload.profile;return Object(U.a)({},e,{profile:n});default:return e}}}),ue=Object(le.c)(ce,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(154);l.a.render(r.a.createElement(s.a,{store:ue},r.a.createElement(oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},69:function(e){e.exports={Login:"Login",Logout:"Logout",Signup:"Signup","Email Address":"Email Address",Password:"Password","Confirm Password":"Confirm Password",Home:"Home","My Profile":"My Profile","There was an error getting your profile":"There was an error getting your profile"}},70:function(e){e.exports={English:"Englisch",Login:"Anmeldung",Logout:"Ausloggen",Signup:"Anmelden","Email Address":"Email Adresse",Password:"Passwort","Confirm Password":"Passwort best\xe4tigen",Home:"Zuhause","My Profile":"Mein Profil","There was an error getting your profile":"Beim Abrufen Ihres Profils ist ein Fehler aufgetreten","Welcome back!":"Willkommen zur\xfcck!"}},75:function(e,t,a){e.exports=a(156)},86:function(e,t,a){}},[[75,2,1]]]);
//# sourceMappingURL=main.83cad283.chunk.js.map