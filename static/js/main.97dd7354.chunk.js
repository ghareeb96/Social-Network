(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],{36:function(e,s,t){},37:function(e,s,t){},41:function(e,s,t){},46:function(e,s,t){},47:function(e,s,t){},48:function(e,s,t){},49:function(e,s,t){},50:function(e,s,t){"use strict";t.r(s);var c=t(2),a=t(4),i=t.n(a),n=t(28),r=t.n(n),l=(t(36),t(6)),o=(t(37),t(9)),j=t(11),d=t(30).a.initializeApp({apiKey:"AIzaSyAltR2gyRBkILBgMEQVa3QT6LI9bUjxUCU",authDomain:"react-social-network-4762c.firebaseapp.com",databaseURL:"https://react-social-network-4762c-default-rtdb.firebaseio.com",projectId:"react-social-network-4762c",storageBucket:"react-social-network-4762c.appspot.com",messagingSenderId:"604842802759",appId:"1:604842802759:web:de11221667256e472bbb62"}),b=t(21),u=t(3),m=(t(41),t.p+"static/media/Logo.db1942f3.png");b.a.registerPlugin(u.c);var h=function(e){var s=Object(a.useState)("container"),t=Object(l.a)(s,2),i=t[0],n=t[1];return Object(a.useEffect)((function(){b.a.to(".container",.7,{ease:"easeInOut",css:{opacity:1,translateY:"0"}})})),e.loggedUser?Object(c.jsx)(j.a,{to:"/Home"}):Object(c.jsx)("div",{className:"reg-log",children:Object(c.jsxs)("div",{className:i,children:[Object(c.jsxs)("div",{className:"form-container sign-up-container",children:[Object(c.jsx)("div",{className:"form-header",children:Object(c.jsx)("h2",{children:"Create New Account"})}),Object(c.jsxs)("div",{className:"form-section",children:[Object(c.jsxs)("div",{className:"form-inputs",children:[Object(c.jsxs)("div",{className:"form-input",children:[Object(c.jsx)("label",{htmlFor:"name-input",children:"Full Name"}),Object(c.jsx)("input",{onChange:function(s){return e.setName(s.target.value)},type:"text",id:"name-input",value:e.name,required:!0})]}),Object(c.jsxs)("div",{className:"form-input",children:[Object(c.jsx)("label",{htmlFor:"email-input",children:"E-Mail"}),Object(c.jsx)("input",{onChange:function(s){return e.setEmail(s.target.value)},type:"email",id:"email-input",value:e.email,required:!0}),Object(c.jsx)("p",{className:"error",children:e.emailError})]}),Object(c.jsxs)("div",{className:"form-input",children:[Object(c.jsx)("label",{htmlFor:"password-input",children:"Password"}),Object(c.jsx)("input",{onChange:function(s){return e.setPassword(s.target.value)},type:"password",id:"password-input",required:!0,value:e.password}),Object(c.jsx)("p",{className:"error",children:e.passwordError})]})]}),Object(c.jsxs)("div",{className:"form-btn",children:[Object(c.jsx)("button",{className:"submit",onClick:function(s){s.preventDefault(),e.handleSignUp()},children:"Sign Up"}),Object(c.jsxs)("div",{className:"instead",children:[Object(c.jsx)("p",{children:"Already have an Account ?"}),Object(c.jsx)("a",{onClick:function(){e.clearErrors(),e.clearInput(),n("container")},children:"Sign in"})]})]})]})]}),Object(c.jsxs)("div",{className:"form-container sign-in-container",children:[Object(c.jsx)("div",{className:"form-header",children:Object(c.jsx)("h2",{children:"Sign In"})}),Object(c.jsxs)("div",{className:"form-section",children:[Object(c.jsxs)("div",{className:"form-inputs",children:[Object(c.jsxs)("div",{className:"form-input",children:[Object(c.jsx)("label",{htmlFor:"email-sign-in",children:"E-Mail"}),Object(c.jsx)("input",{onChange:function(s){return e.setEmail(s.target.value)},type:"email",id:"email-sign-in",value:e.email,required:!0}),Object(c.jsx)("p",{className:"error",children:e.emailError})]}),Object(c.jsxs)("div",{className:"form-input",children:[Object(c.jsx)("label",{htmlFor:"password-sign-in",children:"Password"}),Object(c.jsx)("input",{onChange:function(s){return e.setPassword(s.target.value)},type:"password",id:"password-sign-in",required:!0,value:e.password}),Object(c.jsx)("p",{className:"error",children:e.passwordError})]})]}),Object(c.jsxs)("div",{className:"form-btn",children:[Object(c.jsx)("button",{className:"submit",onClick:function(s){s.preventDefault(),e.handleLogin()},children:"Sign In"}),Object(c.jsxs)("div",{className:"instead",children:[Object(c.jsx)("p",{children:"Don't have Account ?"}),Object(c.jsx)("a",{onClick:function(){e.clearErrors(),e.clearInput(),n("container right-panel-active")},children:"Sign Up"})]})]})]})]}),Object(c.jsx)("div",{className:"overlay-container",children:Object(c.jsxs)("div",{className:"overlay",children:[Object(c.jsxs)("div",{className:"overlay-panel overlay-left",children:[Object(c.jsx)("img",{src:m,alt:"Logo"}),Object(c.jsx)("h3",{children:"Fakeboss"})]}),Object(c.jsxs)("div",{className:"overlay-panel overlay-right",children:[Object(c.jsx)("img",{src:m,alt:"Logo"}),Object(c.jsx)("h3",{children:"Fakeboss"})]})]})})]})})},O=(t(46),function(e){var s=Object(a.useState)([]),t=Object(l.a)(s,2),i=t[0],n=t[1],r=Object(a.useState)(""),o=Object(l.a)(r,2),j=o[0],d=o[1],b=Object(a.useState)(!1),u=Object(l.a)(b,2),m=u[0],h=u[1],O=Object(a.useState)(!0),x=Object(l.a)(O,2);x[0],x[1];return Object(a.useEffect)((function(){if(e.currentUser.posts){for(var s=[],t=0,c=Object.entries(e.currentUser.posts);t<c.length;t++){var a=Object(l.a)(c[t],2),i=a[0],r=a[1],o={id:i,body:r.body,date:r.date};s.push(o)}s.reverse(),n(s)}else n([])}),[e.currentUser]),Object(c.jsx)("div",{className:"posts",children:i?i.map((function(s){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:m?"modal-container open":"modal-container",onClick:function(e){e.target.classList.contains("modal-container")&&h(!1)},children:Object(c.jsxs)("div",{className:"modal",children:[Object(c.jsx)("div",{className:"text",children:Object(c.jsx)("textarea",{onChange:function(e){return d(e.target.value)},cols:"30",rows:"10",defaultValue:s.body})}),Object(c.jsx)("div",{className:"btns",children:Object(c.jsx)("button",{onClick:function(){e.editPost(s.id,j),h(!1),d("")},children:"Done"})})]})}),Object(c.jsx)("div",{className:"post-container",children:Object(c.jsxs)("div",{className:"post",children:[Object(c.jsxs)("div",{className:"post-header",children:[Object(c.jsx)("div",{className:"post-image",children:Object(c.jsx)("div",{className:"image",children:Object(c.jsx)("img",{src:e.currentUser.profilePic,alt:"Picture"})})}),Object(c.jsx)("div",{className:"name",children:Object(c.jsx)("h4",{children:e.currentUser.name})}),e.viewIcons?Object(c.jsxs)("div",{className:"op-btns",children:[Object(c.jsx)("button",{className:"edit",onClick:function(){h(!0)},children:Object(c.jsx)("i",{className:"far fa-edit"})}),Object(c.jsx)("button",{className:"delete",onClick:function(){e.deletePost(s.id)},children:Object(c.jsx)("i",{className:"far fa-trash-alt"})})]}):""]}),Object(c.jsx)("div",{className:"post-content",children:Object(c.jsx)("p",{children:s.body})}),Object(c.jsxs)("div",{className:"post-footer",children:[Object(c.jsxs)("div",{className:"post-time",children:[" ",Object(c.jsxs)("p",{children:[" ",s.date]})]}),Object(c.jsxs)("div",{className:"react-btns",children:[Object(c.jsxs)("div",{className:"comment",children:[Object(c.jsx)("button",{className:"comment-btn",children:Object(c.jsx)("i",{className:"far fa-comment"})}),Object(c.jsx)("span",{className:"reacts-number",children:"15"})]}),Object(c.jsxs)("div",{className:"likes",children:[Object(c.jsx)("button",{className:"like-btn",children:Object(c.jsx)("i",{className:"far fa-heart"})}),Object(c.jsx)("span",{className:"reacts-number",children:"15"})]})]})]})]})},s.id)]})})):Object(c.jsx)(c.Fragment,{children:" "})})}),x=(t(47),function(e){var s=Object(a.useState)(!1),t=Object(l.a)(s,2),i=t[0],n=t[1];return Object(a.useEffect)((function(){document.querySelector(".users")&&document.querySelector(".main")&&window.addEventListener("scroll",(function(){document.querySelector(".users-container").offsetHeight+document.querySelector(".users-container").offsetTop+document.querySelector(".main").offsetTop<=window.scrollY+window.innerHeight?document.querySelector(".users").className="users fixed":document.querySelector(".users").className="users"}))}),[e.users]),Object(a.useEffect)((function(){if(e.isFirstLogin&&(e.database.child("users").push(e.initUser),e.setFirstLogin(!1)),!i&&!e.isFirstLogin){!function(){if(e.users)for(var s=0,t=Object.entries(e.users);s<t.length;s++){var c=Object(l.a)(t[s],2),a=c[0],i=c[1];i.email===e.loggedUser.email&&(e.setCurrentUser(i),e.setUserKey(a),n(!0))}}()}}),[e]),e.loggedUser?Object(c.jsx)("div",{className:"home",children:e.currentUser?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"header",children:[Object(c.jsx)("div",{className:"image-container",children:Object(c.jsx)("div",{className:"image",children:Object(c.jsx)("img",{src:e.currentUser.profilePic,alt:"PP"})})}),Object(c.jsx)("div",{className:"name",children:Object(c.jsx)("h1",{children:e.currentUser.name})})]}),Object(c.jsxs)("div",{className:"main",children:[Object(c.jsx)("div",{className:"tabs",children:Object(c.jsxs)("ul",{className:"tab-links",children:[Object(c.jsx)("li",{className:"link active-link",children:Object(c.jsxs)(o.b,{to:"/Home",children:[Object(c.jsx)("i",{className:"fas fa-home"})," Home"]})}),Object(c.jsx)("li",{className:"link",children:Object(c.jsxs)(o.b,{to:"/Profile",children:[Object(c.jsx)("i",{className:"fas fa-user"})," Profile"]})}),Object(c.jsxs)("li",{className:"link disabled",children:[Object(c.jsxs)(o.b,{to:"/Notifications",children:[Object(c.jsx)("i",{className:"fas fa-bell"})," Notifications"]}),Object(c.jsx)("span",{children:"Soon"})]}),Object(c.jsxs)("li",{className:"link disabled",children:[Object(c.jsxs)(o.b,{to:"/Messages",children:[Object(c.jsx)("i",{className:"fas fa-envelope"})," Messages"]}),Object(c.jsx)("span",{children:"Soon"})]}),Object(c.jsxs)("li",{className:"link disabled",children:[Object(c.jsxs)(o.b,{to:"/Settings",children:[Object(c.jsx)("i",{className:"fas fa-cogs"})," Settings"]}),Object(c.jsx)("span",{children:"Soon"})]}),Object(c.jsx)("li",{className:"link",children:Object(c.jsxs)("button",{onClick:function(){e.handleLogout()},children:[Object(c.jsx)("i",{className:"fas fa-sign-out-alt"})," Sign Out"]})})]})}),Object(c.jsxs)("div",{className:"timeline",children:[Object(c.jsx)("div",{className:"addPost-section",children:Object(c.jsxs)("div",{className:"addPost",children:[Object(c.jsx)("div",{className:"post-text",children:Object(c.jsx)("textarea",{placeholder:"Post something Useful",cols:"50",rows:"6",name:"newPost",value:e.postText,onChange:function(s){return e.setPostText(s.target.value)}})}),Object(c.jsx)("div",{className:"add-post-footer",children:Object(c.jsx)("button",{className:"add",onClick:function(){e.addPost()},children:"Post"})})]})}),Object(c.jsx)("div",{className:"posts-section",children:Object(c.jsx)(O,{currentUser:e.currentUser,deletePost:function(s){window.confirm("Are you sure you want to delete this post ?")&&e.database.child("users/".concat(e.userKey,"/posts/").concat(s)).remove((function(e){e&&console.log(e)}))},editPost:function(s,t){t.trim()?e.database.child("users/".concat(e.userKey,"/posts/").concat(s)).update({body:t}):alert("Please, either edit the Post, or delete it .")},image:e.currentUser.profilePic,viewIcons:!0})})]}),Object(c.jsx)("div",{className:"users-section",children:Object(c.jsxs)("div",{className:"users",children:[Object(c.jsx)("div",{className:"headline",children:Object(c.jsx)("h3",{children:"People you may know"})}),Object(c.jsx)("div",{className:"users-container",children:e.users?Object.entries(e.users).filter((function(s,t){return s[1].email!==e.currentUser.email&&t<=7})).map((function(s){return Object(c.jsxs)("div",{className:"user",children:[Object(c.jsx)("div",{className:"image",children:Object(c.jsx)("img",{src:s[1].profilePic,alt:"PP"})}),Object(c.jsx)("div",{className:"userName",children:Object(c.jsx)(o.b,{to:{pathname:"/users/".concat(s[0]),state:{users:e.users,mainUser:e.currentUser}},children:s[1].name},s[0])})]})})):""})]})})]})]}):""}):Object(c.jsx)(j.a,{to:"/Social-Network/"})}),f=(t(48),function(e){var s=Object(a.useState)(!1),t=Object(l.a)(s,2),i=t[0],n=t[1];return Object(a.useEffect)((function(){document.querySelector(".users")&&document.querySelector(".main")&&window.addEventListener("scroll",(function(){document.querySelector(".users-container").offsetHeight+document.querySelector(".users-container").offsetTop+document.querySelector(".main").offsetTop<=window.scrollY+window.innerHeight?document.querySelector(".users").className="users fixed":document.querySelector(".users").className="users"}))}),[e.users]),Object(a.useEffect)((function(){if(!i){!function(){if(e.users)for(var s=0,t=Object.entries(e.users);s<t.length;s++){var c=Object(l.a)(t[s],2),a=c[0],i=c[1];i.email===e.loggedUser.email&&(e.setCurrentUser(i),e.setUserKey(a),n(!0),console.log("got it"))}}()}}),[e.currentUser]),e.loggedUser?Object(c.jsx)("div",{className:"profile",children:e.currentUser?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"header",children:[Object(c.jsx)("div",{className:"image-container",children:Object(c.jsx)("div",{className:"image",children:Object(c.jsx)("img",{src:e.currentUser.profilePic,alt:"PP"})})}),Object(c.jsxs)("div",{className:"header-middle",children:[Object(c.jsx)("div",{className:"profile-pic-btn",children:Object(c.jsxs)("div",{className:"file-input",children:[Object(c.jsx)("input",{type:"file",id:"myfile",accept:"image/*",className:"myfile",onChange:function(s){s.target.files[0]&&(e.setImage(s.target.files[0]),n(!1))}}),Object(c.jsxs)("label",{htmlFor:"myfile",children:[" ",Object(c.jsx)("i",{className:"fas fa-image"})," Change Profile Picture"]})]})}),Object(c.jsx)("div",{className:"name",children:Object(c.jsx)("h1",{children:e.currentUser.name})})]}),Object(c.jsxs)("div",{className:"header-right",children:[Object(c.jsxs)("div",{className:"followings",children:[Object(c.jsx)("h4",{children:"Followings"}),Object(c.jsx)("span",{children:"10"})]}),Object(c.jsxs)("div",{className:"followers",children:[Object(c.jsx)("h4",{children:"Followers"}),Object(c.jsx)("span",{children:"10"})]})]})]}),Object(c.jsxs)("div",{className:"main",children:[Object(c.jsx)("div",{className:"tabs",children:Object(c.jsxs)("ul",{className:"tab-links",children:[Object(c.jsx)("li",{className:"link",children:Object(c.jsxs)(o.b,{to:"/Home",children:[Object(c.jsx)("i",{className:"fas fa-home"})," Home"]})}),Object(c.jsx)("li",{className:"link active-link",children:Object(c.jsxs)(o.b,{to:"/Profile",children:[Object(c.jsx)("i",{className:"fas fa-user"})," Profile"]})}),Object(c.jsxs)("li",{className:"link disabled",children:[Object(c.jsxs)(o.b,{to:"/Notifications",children:[Object(c.jsx)("i",{className:"fas fa-bell"})," Notifications"]}),Object(c.jsx)("span",{children:"Soon"})]}),Object(c.jsxs)("li",{className:"link disabled",children:[Object(c.jsxs)(o.b,{to:"/Messages",children:[Object(c.jsx)("i",{className:"fas fa-envelope"})," Messages"]}),Object(c.jsx)("span",{children:"Soon"})]}),Object(c.jsxs)("li",{className:"link disabled",children:[Object(c.jsxs)(o.b,{to:"/Settings",children:[Object(c.jsx)("i",{className:"fas fa-cogs"})," Settings"]}),Object(c.jsx)("span",{children:"Soon"})]}),Object(c.jsx)("li",{className:"link",children:Object(c.jsxs)("button",{onClick:function(){e.handleLogout()},children:[Object(c.jsx)("i",{className:"fas fa-sign-out-alt"})," Sign Out"]})})]})}),Object(c.jsxs)("div",{className:"timeline",children:[Object(c.jsx)("div",{className:"addPost-section",children:Object(c.jsxs)("div",{className:"addPost",children:[Object(c.jsx)("div",{className:"post-text",children:Object(c.jsx)("textarea",{placeholder:"Post something Useful",cols:"50",rows:"6",name:"newPost",value:e.postText,onChange:function(s){return e.setPostText(s.target.value)}})}),Object(c.jsx)("div",{className:"add-post-footer",children:Object(c.jsx)("button",{className:"add",onClick:function(){e.addPost()},children:"Post"})})]})}),Object(c.jsx)("div",{className:"posts-section",children:Object(c.jsx)(O,{currentUser:e.currentUser,deletePost:function(s){window.confirm("Are you sure you want to delete this post ?")&&e.database.child("users/".concat(e.userKey,"/posts/").concat(s)).remove((function(e){e&&console.log(e)}))},editPost:function(s,t){t.trim()?e.database.child("users/".concat(e.userKey,"/posts/").concat(s)).update({body:t}):alert("Please, either edit the Post, or delete it .")},image:e.currentUser.profilePic,viewIcons:!0})})]}),Object(c.jsx)("div",{className:"users-section",children:Object(c.jsxs)("div",{className:"users",children:[Object(c.jsx)("div",{className:"headline",children:Object(c.jsx)("h3",{children:"People you may know"})}),Object(c.jsx)("div",{className:"users-container",children:e.users?Object.entries(e.users).filter((function(s,t){return s[1].email!==e.currentUser.email&&t<=7})).map((function(s){return Object(c.jsxs)("div",{className:"user",children:[Object(c.jsx)("div",{className:"image",children:Object(c.jsx)("img",{src:s[1].profilePic,alt:"PP"})}),Object(c.jsx)("div",{className:"userName",children:Object(c.jsx)(o.b,{to:{pathname:"/users/".concat(s[0]),state:{users:e.users,mainUser:e.currentUser}},children:s[1].name},s[0])})]})})):""})]})})]})]}):""}):Object(c.jsx)(j.a,{to:"/Social-Network/"})}),N=(t(49),function(e){var s=Object(a.useState)(null),t=Object(l.a)(s,2),i=t[0],n=t[1],r=Object(a.useState)(null),j=Object(l.a)(r,2),d=j[0],b=j[1];return Object(a.useEffect)((function(){b(e.location.state.users),Object.entries(e.location.state.users).map((function(s){s[0]===e.match.params.id&&n(s[1])}))})),i?Object(c.jsxs)("div",{className:"user-profile",children:[Object(c.jsxs)("div",{className:"header",children:[Object(c.jsx)("div",{className:"image-container",children:Object(c.jsx)("div",{className:"image",children:Object(c.jsx)("img",{src:i.profilePic,alt:"PP"})})}),Object(c.jsxs)("div",{className:"header-middle",children:[Object(c.jsx)("div",{className:"follow-btn",children:Object(c.jsxs)("button",{className:"follow",children:[Object(c.jsx)("i",{className:"fas fa-plus"})," Follow                             ",Object(c.jsx)("span",{children:"Soon"})]})}),Object(c.jsx)("div",{className:"name",children:Object(c.jsx)("h1",{children:i.name})})]}),Object(c.jsxs)("div",{className:"header-right",children:[Object(c.jsxs)("div",{className:"followings",children:[Object(c.jsx)("h4",{children:"Followings"}),Object(c.jsx)("span",{children:"10"})]}),Object(c.jsxs)("div",{className:"followers",children:[Object(c.jsx)("h4",{children:"Followers"}),Object(c.jsx)("span",{children:"10"})]})]})]}),Object(c.jsxs)("div",{className:"main",children:[Object(c.jsx)("div",{className:"tabs",children:Object(c.jsxs)("ul",{className:"tab-links",children:[Object(c.jsx)("li",{className:"link",children:Object(c.jsxs)(o.b,{to:"/Home",children:[Object(c.jsx)("i",{className:"fas fa-home"})," Home"]})}),Object(c.jsx)("li",{className:"link",children:Object(c.jsxs)(o.b,{to:"/Profile",children:[Object(c.jsx)("i",{className:"fas fa-user"})," Profile"]})}),Object(c.jsxs)("li",{className:"link disabled",children:[Object(c.jsxs)(o.b,{to:"/Notifications",children:[Object(c.jsx)("i",{className:"fas fa-bell"})," Notifications"]}),Object(c.jsx)("span",{children:"Soon"})]}),Object(c.jsxs)("li",{className:"link disabled",children:[Object(c.jsxs)(o.b,{to:"/Messages",children:[Object(c.jsx)("i",{className:"fas fa-envelope"})," Messages"]}),Object(c.jsx)("span",{children:"Soon"})]}),Object(c.jsxs)("li",{className:"link disabled",children:[Object(c.jsxs)(o.b,{to:"/Settings",children:[Object(c.jsx)("i",{className:"fas fa-cogs"})," Settings"]}),Object(c.jsx)("span",{children:"Soon"})]}),Object(c.jsx)("li",{className:"link",children:Object(c.jsxs)("button",{onClick:function(){e.handleLogout()},children:[Object(c.jsx)("i",{className:"fas fa-sign-out-alt"})," Sign Out"]})})]})}),Object(c.jsx)("div",{className:"timeline",children:Object(c.jsx)("div",{className:"posts-section",children:Object(c.jsx)(O,{currentUser:i,image:i.profilePic,viewIcons:!1})})}),Object(c.jsx)("div",{className:"users-section",children:Object(c.jsxs)("div",{className:"users",children:[Object(c.jsx)("div",{className:"headline",children:Object(c.jsx)("h3",{children:"People you may know"})}),Object(c.jsx)("div",{className:"users-container",children:d?Object.entries(d).filter((function(s,t){return s[1].email!==i.email&&s[1].email!==e.location.state.mainUser.email&&t<=7})).map((function(s){return Object(c.jsxs)("div",{className:"user",children:[Object(c.jsx)("div",{className:"image",children:Object(c.jsx)("img",{src:s[1].profilePic,alt:"PP"})}),Object(c.jsx)("div",{className:"userName",children:Object(c.jsx)(o.b,{to:{pathname:"/users/".concat(s[0]),state:{users:d,mainUser:e.location.state.mainUser}},children:s[1].name},s[0])})]})})):""})]})})]})]}):Object(c.jsx)(c.Fragment,{})});var p=function(){var e=d.database().ref(),s=d.storage(),t=Object(a.useState)(null),i=Object(l.a)(t,2),n=i[0],r=i[1],b=Object(a.useState)({}),u=Object(l.a)(b,2),m=u[0],O=u[1],p=Object(a.useState)({}),v=Object(l.a)(p,2),g=v[0],w=v[1],P=Object(a.useState)(""),S=Object(l.a)(P,2),y=S[0],k=S[1],U=Object(a.useState)([]),C=Object(l.a)(U,2),E=C[0],F=C[1],L=Object(a.useState)(""),I=Object(l.a)(L,2),q=I[0],T=I[1],A=Object(a.useState)(!1),H=Object(l.a)(A,2),K=H[0],M=H[1],D=Object(a.useState)(""),B=Object(l.a)(D,2),R=B[0],Y=B[1],_=Object(a.useState)(""),z=Object(l.a)(_,2),J=z[0],Q=z[1],V=Object(a.useState)(""),W=Object(l.a)(V,2),G=W[0],X=W[1],Z=Object(a.useState)(""),$=Object(l.a)(Z,2),ee=$[0],se=$[1],te=Object(a.useState)(""),ce=Object(l.a)(te,2),ae=ce[0],ie=ce[1],ne=Object(a.useState)(""),re=Object(l.a)(ne,2),le=re[0],oe=re[1],je=function(){if(""!==le.trim()){var s=new Date;e.child("users/".concat(q,"/posts")).push({body:le,date:s.toLocaleString("en-US",{hour:"numeric",minute:"numeric",weekday:"short",day:"numeric",month:"short",year:"numeric"})}),oe("")}},de=function(){d.auth().signOut(),k("")},be=function(){Y(""),Q(""),X("")},ue=function(){se(""),ie("")};return window.addEventListener("beforeunload",(function(e){e.preventDefault(),de()})),Object(a.useEffect)((function(){e.child("users").on("value",(function(e){null!==e.val()&&F(e.val())})),d.auth().onAuthStateChanged((function(e){e?(be(),k(e)):k("")}))}),[]),Object(a.useEffect)((function(){if(null!==n){s.ref("images/".concat(y.email)).put(n).on("state_changed",(function(e){}),(function(e){return console.log(e)}),(function(){s.ref("images").child(y.email).getDownloadURL().then((function(s){e.child("users/".concat(q,"/profilePic")).set(s)})).then((function(){return r(null)}))}))}}),[n]),Object(a.useEffect)((function(){E&&e.child("users/".concat(q)).on("value",(function(e){O(e.val())}))}),[E]),Object(a.useEffect)((function(){y||(O(""),T(""))}),[y]),Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(o.a,{children:Object(c.jsxs)(j.d,{children:[Object(c.jsx)(j.b,{exact:!0,path:"/Home",children:Object(c.jsx)(x,{initUser:g,setFirstLogin:M,database:e,isFirstLogin:K,handleLogout:de,users:E,loggedUser:y,setUserKey:T,userKey:q,currentUser:m,setCurrentUser:O,addPost:je,postText:le,setPostText:oe,setImage:r})}),Object(c.jsx)(j.b,{exact:!0,path:"/Profile",children:Object(c.jsx)(f,{database:e,handleLogout:de,users:E,loggedUser:y,setUserKey:T,userKey:q,currentUser:m,setCurrentUser:O,addPost:je,postText:le,setPostText:oe,setImage:r})}),Object(c.jsx)(j.b,{exact:!0,path:"/Social-Network/",children:Object(c.jsx)(h,{name:R,setName:Y,email:J,setEmail:Q,loggedUser:y,password:G,setPassword:X,handleLogin:function(){ue(),M(!1),d.auth().signInWithEmailAndPassword(J,G).catch((function(e){switch(e.code){case"auth/invalid-email":case"auth/user-disabled":case"auth/user-not-found":se(e.message);break;case"auth/wrong-password":ie(e.message)}}))},handleSignUp:function(){ue(),M(!0),w({name:R,email:J,profilePic:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",posts:{}}),d.auth().createUserWithEmailAndPassword(J,G).catch((function(e){switch(e.code){case"auth/invalid-email":case"auth/email-already-in-use":se(e.message);break;case"auth/weak-password":ie(e.message)}}))},emailError:ee,passwordError:ae,clearErrors:ue,clearInput:be})}),Object(c.jsx)(j.b,{exact:!0,path:"/users/:id",component:N,users:E})]})})})},v=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,51)).then((function(s){var t=s.getCLS,c=s.getFID,a=s.getFCP,i=s.getLCP,n=s.getTTFB;t(e),c(e),a(e),i(e),n(e)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),v()}},[[50,1,2]]]);
//# sourceMappingURL=main.97dd7354.chunk.js.map