(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],{36:function(e,s,t){},37:function(e,s,t){},41:function(e,s,t){},46:function(e,s,t){},47:function(e,s,t){},48:function(e,s,t){},49:function(e,s,t){"use strict";t.r(s);var c=t(2),a=t(4),n=t.n(a),i=t(28),r=t.n(i),l=(t(36),t(6)),o=(t(37),t(16)),j=t(10),d=t(30).a.initializeApp({apiKey:"AIzaSyAltR2gyRBkILBgMEQVa3QT6LI9bUjxUCU",authDomain:"react-social-network-4762c.firebaseapp.com",databaseURL:"https://react-social-network-4762c-default-rtdb.firebaseio.com",projectId:"react-social-network-4762c",storageBucket:"react-social-network-4762c.appspot.com",messagingSenderId:"604842802759",appId:"1:604842802759:web:de11221667256e472bbb62"}),u=t(21),b=t(3),m=(t(41),t.p+"static/media/Logo.db1942f3.png");u.a.registerPlugin(b.c);var O=function(e){var s=Object(a.useState)("container"),t=Object(l.a)(s,2),n=t[0],i=t[1];return Object(a.useEffect)((function(){u.a.to(".container",.7,{ease:"easeInOut",css:{opacity:1,translateY:"0"}})})),e.loggedUser?Object(c.jsx)(j.a,{to:"/Home"}):Object(c.jsx)("div",{className:"reg-log",children:Object(c.jsxs)("div",{className:n,children:[Object(c.jsxs)("div",{className:"form-container sign-up-container",children:[Object(c.jsx)("div",{className:"form-header",children:Object(c.jsx)("h2",{children:"Create New Account"})}),Object(c.jsxs)("div",{className:"form-section",children:[Object(c.jsxs)("div",{className:"form-inputs",children:[Object(c.jsxs)("div",{className:"form-input",children:[Object(c.jsx)("label",{htmlFor:"name-input",children:"Full Name"}),Object(c.jsx)("input",{onChange:function(s){return e.setName(s.target.value)},type:"text",id:"name-input",value:e.name,required:!0})]}),Object(c.jsxs)("div",{className:"form-input",children:[Object(c.jsx)("label",{htmlFor:"email-input",children:"E-Mail"}),Object(c.jsx)("input",{onChange:function(s){return e.setEmail(s.target.value)},type:"email",id:"email-input",value:e.email,required:!0}),Object(c.jsx)("p",{className:"error",children:e.emailError})]}),Object(c.jsxs)("div",{className:"form-input",children:[Object(c.jsx)("label",{htmlFor:"password-input",children:"Password"}),Object(c.jsx)("input",{onChange:function(s){return e.setPassword(s.target.value)},type:"password",id:"password-input",required:!0,value:e.password}),Object(c.jsx)("p",{className:"error",children:e.passwordError})]})]}),Object(c.jsxs)("div",{className:"form-btn",children:[Object(c.jsx)("button",{className:"submit",onClick:function(s){s.preventDefault(),e.handleSignUp()},children:"Sign Up"}),Object(c.jsxs)("div",{className:"instead",children:[Object(c.jsx)("p",{children:"Already have an Account ?"}),Object(c.jsx)("a",{onClick:function(){e.clearErrors(),e.clearInput(),i("container")},children:"Sign in"})]})]})]})]}),Object(c.jsxs)("div",{className:"form-container sign-in-container",children:[Object(c.jsx)("div",{className:"form-header",children:Object(c.jsx)("h2",{children:"Sign In"})}),Object(c.jsxs)("div",{className:"form-section",children:[Object(c.jsxs)("div",{className:"form-inputs",children:[Object(c.jsxs)("div",{className:"form-input",children:[Object(c.jsx)("label",{htmlFor:"email-sign-in",children:"E-Mail"}),Object(c.jsx)("input",{onChange:function(s){return e.setEmail(s.target.value)},type:"email",id:"email-sign-in",value:e.email,required:!0}),Object(c.jsx)("p",{className:"error",children:e.emailError})]}),Object(c.jsxs)("div",{className:"form-input",children:[Object(c.jsx)("label",{htmlFor:"password-sign-in",children:"Password"}),Object(c.jsx)("input",{onChange:function(s){return e.setPassword(s.target.value)},type:"password",id:"password-sign-in",required:!0,value:e.password}),Object(c.jsx)("p",{className:"error",children:e.passwordError})]})]}),Object(c.jsxs)("div",{className:"form-btn",children:[Object(c.jsx)("button",{className:"submit",onClick:function(s){s.preventDefault(),e.handleLogin()},children:"Sign In"}),Object(c.jsxs)("div",{className:"instead",children:[Object(c.jsx)("p",{children:"Don't have Account ?"}),Object(c.jsx)("a",{onClick:function(){e.clearErrors(),e.clearInput(),i("container right-panel-active")},children:"Sign Up"})]})]})]})]}),Object(c.jsx)("div",{className:"overlay-container",children:Object(c.jsxs)("div",{className:"overlay",children:[Object(c.jsxs)("div",{className:"overlay-panel overlay-left",children:[Object(c.jsx)("img",{src:m,alt:"Logo"}),Object(c.jsx)("h3",{children:"Fakeboss"})]}),Object(c.jsxs)("div",{className:"overlay-panel overlay-right",children:[Object(c.jsx)("img",{src:m,alt:"Logo"}),Object(c.jsx)("h3",{children:"Fakeboss"})]})]})})]})})},h=(t(46),function(e){var s=Object(a.useState)([]),t=Object(l.a)(s,2),n=t[0],i=t[1],r=Object(a.useState)(""),o=Object(l.a)(r,2),j=o[0],d=o[1],u=Object(a.useState)(!1),m=Object(l.a)(u,2),O=m[0],h=m[1],f=Object(a.useState)(!0),x=Object(l.a)(f,2),p=x[0],g=x[1];return Object(a.useEffect)((function(){if(e.posts){for(var s=[],t=0,c=Object.entries(e.posts);t<c.length;t++){var a=Object(l.a)(c[t],2),n=a[0],r=a[1],o={id:n,body:r.body,date:r.date};s.push(o)}s.reverse(),i(s)}else i([])}),[e.posts]),Object(a.useEffect)((function(){if(0!==n.length&&p)b.c.fromTo(".post-container",{css:{opacity:0,x:100}},{css:{opacity:1,x:0},duration:1,yoyo:!0,stagger:.2}),g(!1);else if(0!==n.length&&!p){var e=document.querySelectorAll(".post-container")[0];b.c.fromTo(e,{css:{opacity:0,x:100}},{css:{opacity:1,x:0},duration:1,yoyo:!0,stagger:.2})}}),[n]),Object(a.useEffect)((function(){O&&b.c.from(".modal",.3,{scale:0})}),[O]),Object(c.jsx)("div",{className:"posts",children:n?n.map((function(s){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:O?"modal-container open":"modal-container",onClick:function(e){e.target.classList.contains("modal-container")&&h(!1)},children:Object(c.jsxs)("div",{className:"modal",children:[Object(c.jsx)("div",{className:"text",children:Object(c.jsx)("textarea",{onChange:function(e){return d(e.target.value)},cols:"30",rows:"10",defaultValue:s.body})}),Object(c.jsx)("div",{className:"btns",children:Object(c.jsx)("button",{onClick:function(){e.editPost(s.id,j),h(!1),d("")},children:"Done"})})]})}),Object(c.jsxs)("div",{className:"post-container",children:[Object(c.jsx)("div",{className:"post-image",children:Object(c.jsx)("div",{className:"image",children:Object(c.jsx)("img",{src:e.image,alt:"Picture"})})}),Object(c.jsxs)("div",{className:"post",children:[Object(c.jsx)("div",{className:"post-body",children:Object(c.jsx)("p",{children:s.body})}),Object(c.jsxs)("div",{className:"post-footer",children:[Object(c.jsxs)("div",{className:"post-time",children:[" ",Object(c.jsxs)("p",{children:[" ",s.date]})]}),e.viewIcons?Object(c.jsxs)("div",{className:"post-btns",children:[Object(c.jsx)("button",{className:"Edit",onClick:function(){h(!0)},children:Object(c.jsx)("i",{className:"far fa-edit"})}),Object(c.jsx)("button",{className:"delete",onClick:function(){e.deletePost(s.id)},children:Object(c.jsx)("i",{className:"far fa-trash-alt"})})]}):""]})]})]},s.id)]})})):Object(c.jsx)(c.Fragment,{children:" "})})}),f=(t(47),function(e){var s=Object(a.useState)(!1),t=Object(l.a)(s,2),n=t[0],i=t[1];return Object(a.useEffect)((function(){document.querySelector(".users")&&document.querySelector(".main")&&window.addEventListener("scroll",(function(){document.querySelector(".users-container").offsetHeight+document.querySelector(".users-container").offsetTop+document.querySelector(".main").offsetTop<=window.scrollY+window.outerHeight?document.querySelector(".users").className="users fixed":document.querySelector(".users").className="users"}))}),[e.users]),Object(a.useEffect)((function(){if(e.isFirstLogin&&(e.database.child("users").push(e.initUser),e.setFirstLogin(!1)),!n&&!e.isFirstLogin){!function(){if(e.users)for(var s=0,t=Object.entries(e.users);s<t.length;s++){var c=Object(l.a)(t[s],2),a=c[0],n=c[1];n.email===e.loggedUser.email&&(e.setCurrentUser(n),e.setUserKey(a),i(!0))}}()}}),[e]),e.loggedUser?Object(c.jsx)("div",{className:"home",children:e.currentUser?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"header",children:[Object(c.jsx)("div",{className:"image-container",children:Object(c.jsx)("div",{className:"image",children:Object(c.jsx)("img",{src:e.currentUser.profilePic,alt:"PP"})})}),Object(c.jsx)("div",{className:"name",children:Object(c.jsx)("h1",{children:e.currentUser.name})})]}),Object(c.jsxs)("div",{className:"main",children:[Object(c.jsx)("div",{className:"tabs",children:Object(c.jsxs)("ul",{className:"tab-links",children:[Object(c.jsx)("li",{className:"link active-link",children:Object(c.jsxs)(o.b,{to:"/Home",children:[Object(c.jsx)("i",{className:"fas fa-home"})," Home"]})}),Object(c.jsx)("li",{className:"link",children:Object(c.jsxs)(o.b,{to:"/Profile",children:[Object(c.jsx)("i",{className:"fas fa-user"})," Profile"]})}),Object(c.jsx)("li",{className:"link",children:Object(c.jsxs)(o.b,{to:"/Notifications",children:[Object(c.jsx)("i",{className:"fas fa-bell"})," Notifications"]})}),Object(c.jsx)("li",{className:"link",children:Object(c.jsxs)(o.b,{to:"/Messages",children:[Object(c.jsx)("i",{className:"fas fa-envelope"})," Messages"]})}),Object(c.jsx)("li",{className:"link",children:Object(c.jsxs)(o.b,{to:"/Settings",children:[Object(c.jsx)("i",{className:"fas fa-cogs"})," Settings"]})}),Object(c.jsx)("li",{className:"link",children:Object(c.jsxs)("button",{onClick:function(){e.handleLogout()},children:[Object(c.jsx)("i",{className:"fas fa-sign-out-alt"})," Sign Out"]})})]})}),Object(c.jsx)("div",{className:"timeline"}),Object(c.jsxs)("div",{className:"users",children:[Object(c.jsx)("div",{className:"headline",children:Object(c.jsx)("h3",{children:"People you may know"})}),Object(c.jsx)("div",{className:"users-container",children:e.users?Object.entries(e.users).filter((function(s){return s[1].email!==e.currentUser.email})).map((function(s){return Object(c.jsxs)("div",{className:"user",children:[Object(c.jsx)("div",{className:"image",children:Object(c.jsx)("img",{src:s[1].profilePic,alt:"PP"})}),Object(c.jsx)("div",{className:"userName",children:Object(c.jsx)(o.b,{to:{pathname:"/users/".concat(s[0]),state:{users:e.users,mainUser:e.currentUser}},children:s[1].name},s[0])})]})})):""})]})]})]}):""}):Object(c.jsx)(j.a,{to:"/Social-Network/"})}),x=(t(48),function(e){var s=Object(a.useState)(null),t=Object(l.a)(s,2),n=t[0],i=t[1],r=Object(a.useState)(null),o=Object(l.a)(r,2),d=(o[0],o[1]),u=Object(a.useState)(!1),b=Object(l.a)(u,2),m=b[0],O=b[1];return Object(a.useEffect)((function(){d(e.location.state.users),Object.entries(e.location.state.users).map((function(s){s[0]===e.match.params.id&&i(s[1])}))})),n?Object(c.jsxs)("div",{className:"user",children:[Object(c.jsxs)("div",{className:"header",children:[Object(c.jsx)("div",{className:"image-container",children:Object(c.jsx)("div",{className:"image",children:Object(c.jsx)("img",{src:n.profilePic,alt:"PP"})})}),Object(c.jsx)("div",{className:"name",children:Object(c.jsx)("h1",{children:n.name})}),Object(c.jsx)("div",{className:"btn",children:Object(c.jsxs)("button",{onClick:function(){O(!0),i(null)},children:["Home ",Object(c.jsx)("i",{className:"fas fa-home"})]})})]}),Object(c.jsx)("div",{className:"main",children:Object(c.jsx)("div",{className:"timeline",children:Object(c.jsx)("div",{className:"posts-container",children:Object(c.jsx)(h,{posts:n.posts,image:n.profilePic,viewIcons:!1})})})})]}):m?Object(c.jsx)(j.a,{to:"/Home"}):Object(c.jsx)(c.Fragment,{})});var p=function(){var e=d.database().ref(),s=d.storage(),t=Object(a.useState)(null),n=Object(l.a)(t,2),i=n[0],r=n[1],u=Object(a.useState)({}),b=Object(l.a)(u,2),m=b[0],h=b[1],p=Object(a.useState)({}),g=Object(l.a)(p,2),v=g[0],N=g[1],w=Object(a.useState)(""),y=Object(l.a)(w,2),S=y[0],k=y[1],E=Object(a.useState)([]),P=Object(l.a)(E,2),U=P[0],C=P[1],L=Object(a.useState)(""),F=Object(l.a)(L,2),I=F[0],q=F[1],A=Object(a.useState)(!1),D=Object(l.a)(A,2),T=D[0],H=D[1],M=Object(a.useState)(""),B=Object(l.a)(M,2),K=B[0],R=B[1],_=Object(a.useState)(""),z=Object(l.a)(_,2),J=z[0],Q=z[1],V=Object(a.useState)(""),W=Object(l.a)(V,2),Y=W[0],G=W[1],X=Object(a.useState)(""),Z=Object(l.a)(X,2),$=Z[0],ee=Z[1],se=Object(a.useState)(""),te=Object(l.a)(se,2),ce=te[0],ae=te[1],ne=Object(a.useState)(""),ie=Object(l.a)(ne,2),re=ie[0],le=ie[1],oe=function(){d.auth().signOut(),k("")},je=function(){R(""),Q(""),G("")},de=function(){ee(""),ae("")};return window.addEventListener("beforeunload",(function(e){e.preventDefault(),oe()})),Object(a.useEffect)((function(){e.child("users").on("value",(function(e){null!==e.val()&&C(e.val())})),d.auth().onAuthStateChanged((function(e){e?(je(),k(e)):k("")}))}),[]),Object(a.useEffect)((function(){if(null!==i){s.ref("images/".concat(S.email)).put(i).on("state_changed",(function(e){}),(function(e){return console.log(e)}),(function(){s.ref("images").child(S.email).getDownloadURL().then((function(s){e.child("users/".concat(I,"/profilePic")).set(s)}))}))}}),[i]),Object(a.useEffect)((function(){S?e.child("users/".concat(I)).on("value",(function(e){h(e.val())})):(h(""),q(""))}),[S]),Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(o.a,{children:Object(c.jsxs)(j.d,{children:[Object(c.jsx)(j.b,{exact:!0,path:"/Home",children:Object(c.jsx)(f,{initUser:v,setFirstLogin:H,database:e,isFirstLogin:T,handleLogout:oe,users:U,loggedUser:S,setUserKey:q,userKey:I,currentUser:m,setCurrentUser:h,addPost:function(){if(""!==re.trim()){var s=new Date;e.child("users/".concat(I,"/posts")).push({body:re,date:s.toLocaleString("en-US",{hour:"numeric",minute:"numeric",weekday:"short",day:"numeric",month:"short",year:"numeric"})}),le("")}},postText:re,setPostText:le,setImage:r})}),Object(c.jsx)(j.b,{exact:!0,path:"/Social-Network/",children:Object(c.jsx)(O,{name:K,setName:R,email:J,setEmail:Q,loggedUser:S,password:Y,setPassword:G,handleLogin:function(){de(),H(!1),d.auth().signInWithEmailAndPassword(J,Y).catch((function(e){switch(e.code){case"auth/invalid-email":case"auth/user-disabled":case"auth/user-not-found":ee(e.message);break;case"auth/wrong-password":ae(e.message)}}))},handleSignUp:function(){de(),H(!0),N({name:K,email:J,profilePic:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",posts:{}}),d.auth().createUserWithEmailAndPassword(J,Y).catch((function(e){switch(e.code){case"auth/invalid-email":case"auth/email-already-in-use":ee(e.message);break;case"auth/weak-password":ae(e.message)}}))},emailError:$,passwordError:ce,clearErrors:de,clearInput:je})}),Object(c.jsx)(j.b,{exact:!0,path:"/users/:id",component:x,users:U})]})})})},g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,50)).then((function(s){var t=s.getCLS,c=s.getFID,a=s.getFCP,n=s.getLCP,i=s.getTTFB;t(e),c(e),a(e),n(e),i(e)}))};r.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),g()}},[[49,1,2]]]);
//# sourceMappingURL=main.79cb8db0.chunk.js.map