(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],{36:function(e,t,s){},37:function(e,t,s){},41:function(e,t,s){},46:function(e,t,s){},47:function(e,t,s){},48:function(e,t,s){},49:function(e,t,s){"use strict";s.r(t);var c=s(2),a=s(4),n=s.n(a),i=s(28),r=s.n(i),l=(s(36),s(6)),o=(s(37),s(18)),j=s(10),d=s(30).a.initializeApp({apiKey:"AIzaSyAltR2gyRBkILBgMEQVa3QT6LI9bUjxUCU",authDomain:"react-social-network-4762c.firebaseapp.com",databaseURL:"https://react-social-network-4762c-default-rtdb.firebaseio.com",projectId:"react-social-network-4762c",storageBucket:"react-social-network-4762c.appspot.com",messagingSenderId:"604842802759",appId:"1:604842802759:web:de11221667256e472bbb62"}),u=s(21),b=s(3),m=(s(41),s.p+"static/media/Logo.db1942f3.png");u.a.registerPlugin(b.c);var h=function(e){var t=Object(a.useState)("container"),s=Object(l.a)(t,2),n=s[0],i=s[1];return Object(a.useEffect)((function(){u.a.to(".container",.7,{ease:"easeInOut",css:{opacity:1,translateY:"0"}})})),e.loggedUser?Object(c.jsx)(j.a,{to:"/Home"}):Object(c.jsx)("div",{className:"reg-log",children:Object(c.jsxs)("div",{className:n,children:[Object(c.jsxs)("div",{className:"form-container sign-up-container",children:[Object(c.jsx)("div",{className:"form-header",children:Object(c.jsx)("h2",{children:"Create New Account"})}),Object(c.jsxs)("div",{className:"form-section",children:[Object(c.jsxs)("div",{className:"form-inputs",children:[Object(c.jsxs)("div",{className:"form-input",children:[Object(c.jsx)("label",{htmlFor:"name-input",children:"Full Name"}),Object(c.jsx)("input",{onChange:function(t){return e.setName(t.target.value)},type:"text",id:"name-input",value:e.name,required:!0})]}),Object(c.jsxs)("div",{className:"form-input",children:[Object(c.jsx)("label",{htmlFor:"email-input",children:"E-Mail"}),Object(c.jsx)("input",{onChange:function(t){return e.setEmail(t.target.value)},type:"email",id:"email-input",value:e.email,required:!0}),Object(c.jsx)("p",{className:"error",children:e.emailError})]}),Object(c.jsxs)("div",{className:"form-input",children:[Object(c.jsx)("label",{htmlFor:"password-input",children:"Password"}),Object(c.jsx)("input",{onChange:function(t){return e.setPassword(t.target.value)},type:"password",id:"password-input",required:!0,value:e.password}),Object(c.jsx)("p",{className:"error",children:e.passwordError})]})]}),Object(c.jsxs)("div",{className:"form-btn",children:[Object(c.jsx)("button",{className:"submit",onClick:function(t){t.preventDefault(),e.handleSignUp()},children:"Sign Up"}),Object(c.jsxs)("div",{className:"instead",children:[Object(c.jsx)("p",{children:"Already have an Account ?"}),Object(c.jsx)("a",{onClick:function(){e.clearErrors(),e.clearInput(),i("container")},children:"Sign in"})]})]})]})]}),Object(c.jsxs)("div",{className:"form-container sign-in-container",children:[Object(c.jsx)("div",{className:"form-header",children:Object(c.jsx)("h2",{children:"Sign In"})}),Object(c.jsxs)("div",{className:"form-section",children:[Object(c.jsxs)("div",{className:"form-inputs",children:[Object(c.jsxs)("div",{className:"form-input",children:[Object(c.jsx)("label",{htmlFor:"email-input",children:"E-Mail"}),Object(c.jsx)("input",{onChange:function(t){return e.setEmail(t.target.value)},type:"email",id:"email-input",value:e.email,required:!0}),Object(c.jsx)("p",{className:"error",children:e.emailError})]}),Object(c.jsxs)("div",{className:"form-input",children:[Object(c.jsx)("label",{htmlFor:"password-input",children:"Password"}),Object(c.jsx)("input",{onChange:function(t){return e.setPassword(t.target.value)},type:"password",id:"password-input",required:!0,value:e.password}),Object(c.jsx)("p",{className:"error",children:e.passwordError})]})]}),Object(c.jsxs)("div",{className:"form-btn",children:[Object(c.jsx)("button",{className:"submit",onClick:function(t){t.preventDefault(),e.handleLogin()},children:"Sign In"}),Object(c.jsxs)("div",{className:"instead",children:[Object(c.jsx)("p",{children:"Don't have Account ?"}),Object(c.jsx)("a",{onClick:function(){e.clearErrors(),e.clearInput(),i("container right-panel-active")},children:"Sign Up"})]})]})]})]}),Object(c.jsx)("div",{className:"overlay-container",children:Object(c.jsxs)("div",{className:"overlay",children:[Object(c.jsxs)("div",{className:"overlay-panel overlay-left",children:[Object(c.jsx)("img",{src:m,alt:"Logo"}),Object(c.jsx)("h3",{children:"Fakeboss"})]}),Object(c.jsxs)("div",{className:"overlay-panel overlay-right",children:[Object(c.jsx)("img",{src:m,alt:"Logo"}),Object(c.jsx)("h3",{children:"Fakeboss"})]})]})})]})})},O=(s(46),function(e){var t=Object(a.useState)([]),s=Object(l.a)(t,2),n=s[0],i=s[1],r=Object(a.useState)(""),o=Object(l.a)(r,2),j=o[0],d=o[1],u=Object(a.useState)(!1),m=Object(l.a)(u,2),h=m[0],O=m[1],f=Object(a.useState)(!0),p=Object(l.a)(f,2),x=p[0],g=p[1];return Object(a.useEffect)((function(){if(e.posts){for(var t=[],s=0,c=Object.entries(e.posts);s<c.length;s++){var a=Object(l.a)(c[s],2),n=a[0],r=a[1],o={id:n,body:r.body,date:r.date};t.push(o)}t.reverse(),i(t)}else i([])}),[e.posts]),Object(a.useEffect)((function(){if(0!==n.length&&x)b.c.fromTo(".post-container",{css:{opacity:0,x:100}},{css:{opacity:1,x:0},duration:1,yoyo:!0,stagger:.2}),g(!1);else if(0!==n.length&&!x){var e=document.querySelectorAll(".post-container")[0];b.c.fromTo(e,{css:{opacity:0,x:100}},{css:{opacity:1,x:0},duration:1,yoyo:!0,stagger:.2})}}),[n]),Object(a.useEffect)((function(){h&&b.c.from(".modal",.3,{scale:0})}),[h]),Object(c.jsx)("div",{className:"posts",children:n?n.map((function(t){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:h?"modal-container open":"modal-container",onClick:function(e){e.target.classList.contains("modal-container")&&O(!1)},children:Object(c.jsxs)("div",{className:"modal",children:[Object(c.jsx)("div",{className:"text",children:Object(c.jsx)("textarea",{onChange:function(e){return d(e.target.value)},cols:"30",rows:"10",defaultValue:t.body})}),Object(c.jsx)("div",{className:"btns",children:Object(c.jsx)("button",{onClick:function(){e.editPost(t.id,j),O(!1),d("")},children:"Done"})})]})}),Object(c.jsxs)("div",{className:"post-container",children:[Object(c.jsx)("div",{className:"post-image",children:Object(c.jsx)("div",{className:"image",children:Object(c.jsx)("img",{src:e.image,alt:"Picture"})})}),Object(c.jsxs)("div",{className:"post",children:[Object(c.jsx)("div",{className:"post-body",children:Object(c.jsx)("p",{children:t.body})}),Object(c.jsxs)("div",{className:"post-footer",children:[Object(c.jsxs)("div",{className:"post-time",children:[" ",Object(c.jsxs)("p",{children:[" ",t.date]})]}),e.viewIcons?Object(c.jsxs)("div",{className:"post-btns",children:[Object(c.jsx)("button",{className:"Edit",onClick:function(){O(!0)},children:Object(c.jsx)("i",{className:"far fa-edit"})}),Object(c.jsx)("button",{className:"delete",onClick:function(){e.deletePost(t.id)},children:Object(c.jsx)("i",{className:"far fa-trash-alt"})})]}):""]})]})]},t.id)]})})):Object(c.jsx)(c.Fragment,{children:" "})})}),f=s.p+"static/media/bg.0baf09be.jpg",p=(s(47),function(e){var t=Object(a.useState)(!1),s=Object(l.a)(t,2),n=s[0],i=s[1];return Object(a.useEffect)((function(){if(e.isFirstLogin&&(e.database.child("users").push(e.initUser),e.setFirstLogin(!1)),!n&&!e.isFirstLogin){!function(){if(e.users)for(var t=0,s=Object.entries(e.users);t<s.length;t++){var c=Object(l.a)(s[t],2),a=c[0],n=c[1];n.email===e.loggedUser.email&&(e.setCurrentUser(n),e.setUserKey(a),i(!0))}}()}}),[e]),e.loggedUser?Object(c.jsxs)("div",{className:"home",children:[Object(c.jsx)("img",{src:f,alt:"bg",className:"bg"}),e.currentUser?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"header",children:[Object(c.jsx)("div",{className:"image-container",children:Object(c.jsx)("div",{className:"image",children:Object(c.jsx)("img",{src:e.currentUser.profilePic,alt:"PP"})})}),Object(c.jsxs)("div",{className:"name",children:[Object(c.jsx)("h1",{children:e.currentUser.name}),Object(c.jsxs)("div",{className:"file-input",children:[Object(c.jsx)("input",{type:"file",id:"myfile",accept:"image/*",className:"myfile",onChange:function(t){t.target.files[0]&&e.setImage(t.target.files[0])}}),Object(c.jsxs)("label",{htmlFor:"myfile",children:[" ",Object(c.jsx)("i",{className:"fas fa-image"})," Change Profile Picture"]})]})]}),Object(c.jsx)("div",{className:"btn",children:Object(c.jsxs)("button",{onClick:e.handleLogout,className:"logout",children:["Sign-Out ",Object(c.jsx)("i",{className:"fas fa-sign-out-alt"})]})})]}),Object(c.jsxs)("div",{className:"main",children:[Object(c.jsxs)("div",{className:"timeline",children:[Object(c.jsxs)("div",{className:"post-input",children:[Object(c.jsx)("div",{className:"post-text",children:Object(c.jsx)("textarea",{placeholder:"Post something Useful",cols:"50",rows:"6",name:"newPost",value:e.postText,onChange:function(t){return e.setPostText(t.target.value)}})}),Object(c.jsx)("button",{className:"add",onClick:function(){e.addPost()},children:"Post"})]}),Object(c.jsx)("div",{className:"posts-container",children:Object(c.jsx)(O,{posts:e.currentUser.posts,deletePost:function(t){window.confirm("Are you sure you want to delete this post ?")&&e.database.child("users/".concat(e.userKey,"/posts/").concat(t)).remove((function(e){e&&console.log(e)}))},editPost:function(t,s){s.trim()?e.database.child("users/".concat(e.userKey,"/posts/").concat(t)).update({body:s}):alert("Please, either edit the Post, or delete it .")},image:e.currentUser.profilePic,viewIcons:!0})})]}),Object(c.jsxs)("div",{className:"users",children:[Object(c.jsx)("h3",{children:"People you may know"}),e.users?Object.entries(e.users).filter((function(t){return t[1].email!==e.currentUser.email})).map((function(t){return Object(c.jsxs)("div",{className:"user",children:[Object(c.jsx)("div",{className:"image",children:Object(c.jsx)("img",{src:t[1].profilePic,alt:"PP"})}),Object(c.jsx)("div",{className:"userName",children:Object(c.jsx)(o.b,{to:{pathname:"/users/".concat(t[0]),state:{users:e.users,mainUser:e.currentUser}},children:t[1].name},t[0])})]})})):""]})]})]}):""]}):Object(c.jsx)(j.a,{to:"/Social-Network/"})}),x=(s(48),function(e){var t=Object(a.useState)(null),s=Object(l.a)(t,2),n=s[0],i=s[1],r=Object(a.useState)(null),o=Object(l.a)(r,2),d=(o[0],o[1]),u=Object(a.useState)(!1),b=Object(l.a)(u,2),m=b[0],h=b[1];return Object(a.useEffect)((function(){d(e.location.state.users),Object.entries(e.location.state.users).map((function(t){t[0]===e.match.params.id&&i(t[1])}))})),n?Object(c.jsxs)("div",{className:"user",children:[Object(c.jsxs)("div",{className:"header",children:[Object(c.jsx)("div",{className:"image-container",children:Object(c.jsx)("div",{className:"image",children:Object(c.jsx)("img",{src:n.profilePic,alt:"PP"})})}),Object(c.jsx)("div",{className:"name",children:Object(c.jsx)("h1",{children:n.name})}),Object(c.jsx)("div",{className:"btn",children:Object(c.jsxs)("button",{onClick:function(){h(!0),i(null)},children:["Home ",Object(c.jsx)("i",{className:"fas fa-home"})]})})]}),Object(c.jsx)("div",{className:"main",children:Object(c.jsx)("div",{className:"timeline",children:Object(c.jsx)("div",{className:"posts-container",children:Object(c.jsx)(O,{posts:n.posts,image:n.profilePic,viewIcons:!1})})})})]}):m?Object(c.jsx)(j.a,{to:"/Home"}):Object(c.jsx)(c.Fragment,{})});var g=function(){var e=d.database().ref(),t=d.storage(),s=Object(a.useState)(null),n=Object(l.a)(s,2),i=n[0],r=n[1],u=Object(a.useState)({}),b=Object(l.a)(u,2),m=b[0],O=b[1],f=Object(a.useState)({}),g=Object(l.a)(f,2),v=g[0],N=g[1],w=Object(a.useState)(""),y=Object(l.a)(w,2),P=y[0],S=y[1],U=Object(a.useState)([]),k=Object(l.a)(U,2),E=k[0],C=k[1],F=Object(a.useState)(""),L=Object(l.a)(F,2),I=L[0],A=L[1],D=Object(a.useState)(!1),T=Object(l.a)(D,2),q=T[0],K=T[1],B=Object(a.useState)(""),H=Object(l.a)(B,2),M=H[0],R=H[1],_=Object(a.useState)(""),z=Object(l.a)(_,2),J=z[0],Q=z[1],V=Object(a.useState)(""),W=Object(l.a)(V,2),Y=W[0],G=W[1],X=Object(a.useState)(""),Z=Object(l.a)(X,2),$=Z[0],ee=Z[1],te=Object(a.useState)(""),se=Object(l.a)(te,2),ce=se[0],ae=se[1],ne=Object(a.useState)(""),ie=Object(l.a)(ne,2),re=ie[0],le=ie[1],oe=function(){d.auth().signOut(),S("")},je=function(){R(""),Q(""),G("")},de=function(){ee(""),ae("")};return window.addEventListener("beforeunload",(function(e){e.preventDefault(),oe()})),Object(a.useEffect)((function(){e.child("users").on("value",(function(e){null!==e.val()&&C(e.val())})),d.auth().onAuthStateChanged((function(e){e?(je(),S(e)):S("")}))}),[]),Object(a.useEffect)((function(){if(null!==i){t.ref("images/".concat(P.email)).put(i).on("state_changed",(function(e){}),(function(e){return console.log(e)}),(function(){t.ref("images").child(P.email).getDownloadURL().then((function(t){e.child("users/".concat(I,"/profilePic")).set(t)}))}))}}),[i]),Object(a.useEffect)((function(){I&&e.child("users/".concat(I)).on("value",(function(e){O(e.val()),console.log(e.val())}))}),[I]),Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(o.a,{children:Object(c.jsxs)(j.d,{children:[Object(c.jsx)(j.b,{exact:!0,path:"/Home",children:Object(c.jsx)(p,{initUser:v,setFirstLogin:K,database:e,isFirstLogin:q,handleLogout:oe,users:E,loggedUser:P,setUserKey:A,userKey:I,currentUser:m,setCurrentUser:O,addPost:function(){if(""!==re.trim()){var t=new Date;e.child("users/".concat(I,"/posts")).push({body:re,date:t.toLocaleString("en-US",{hour:"numeric",minute:"numeric",weekday:"short",day:"numeric",month:"short",year:"numeric"})}),le("")}},postText:re,setPostText:le,setImage:r})}),Object(c.jsx)(j.b,{exact:!0,path:"/Social-Network/",children:Object(c.jsx)(h,{name:M,setName:R,email:J,setEmail:Q,loggedUser:P,password:Y,setPassword:G,handleLogin:function(){de(),K(!1),d.auth().signInWithEmailAndPassword(J,Y).catch((function(e){switch(e.code){case"auth/invalid-email":case"auth/user-disabled":case"auth/user-not-found":ee(e.message);break;case"auth/wrong-password":ae(e.message)}}))},handleSignUp:function(){de(),K(!0),N({name:M,email:J,profilePic:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",posts:{}}),d.auth().createUserWithEmailAndPassword(J,Y).catch((function(e){switch(e.code){case"auth/invalid-email":case"auth/email-already-in-use":ee(e.message);break;case"auth/weak-password":ae(e.message)}}))},emailError:$,passwordError:ce,clearErrors:de,clearInput:je})}),Object(c.jsx)(j.b,{exact:!0,path:"/users/:id",component:x,users:E})]})})})},v=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,50)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),n(e),i(e)}))};r.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root")),v()}},[[49,1,2]]]);
//# sourceMappingURL=main.c125be70.chunk.js.map