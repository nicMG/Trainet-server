(this["webpackJsonpPlaceholderName-client"]=this["webpackJsonpPlaceholderName-client"]||[]).push([[0],{126:function(e,t,n){},154:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(36),i=n.n(c),s=(n(126),n(15)),o=n(17),l=n.n(o),j=n(23),u=n(8),d=n(14),p=n(1);var m=function(){return Object(p.jsx)("div",{children:"Fuck you"})},b=n(214),x=n(204),h=n(211),O=n(215),f=n(219),v=n(220),g=n(218),w=n(106),y=n(217),S=n(18),k=Object(w.a)();var C=function(e){var t=e.onSignIn;return e.myError,Object(p.jsx)(y.a,{theme:k,children:Object(p.jsxs)(g.a,{component:"main",maxWidth:"xs",children:[Object(p.jsx)(x.a,{}),Object(p.jsxs)(f.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(p.jsx)(v.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(p.jsxs)(f.a,{component:"form",onSubmit:t,noValidate:!0,sx:{mt:1},children:[Object(p.jsx)(h.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),Object(p.jsx)(h.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",helperText:e.myError?e.myError:"",error:!!e.myError}),Object(p.jsx)(b.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign In"}),Object(p.jsx)(O.a,{container:!0,children:Object(p.jsx)(O.a,{item:!0,children:Object(p.jsx)(S.b,{to:"/signup",children:"Don't have an account? Sign Up"})})}),Object(p.jsx)(O.a,{container:!0,children:Object(p.jsx)(O.a,{item:!0,children:Object(p.jsx)(S.b,{to:"/signin/coach",children:"Sign In as a coach"})})})]})]})]})})},E=n(19),W=n.n(E),I="https://trainet.herokuapp.com/api",D=Object(w.a)();var A=function(e){var t=Object(d.f)(),n=function(){var e=Object(j.a)(l.a.mark((function e(n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a={username:n.target.username.value,email:n.target.email.value,password:n.target.password.value},e.next=4,W.a.post("".concat(I,"/signup"),a,{withCredentials:!0});case 4:t("/signin");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)(y.a,{theme:D,children:Object(p.jsxs)(g.a,{component:"main",maxWidth:"xs",children:[Object(p.jsx)(x.a,{}),Object(p.jsxs)(f.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(p.jsx)(v.a,{component:"h1",variant:"h5",children:"Sign Up"}),Object(p.jsxs)(f.a,{component:"form",onSubmit:n,noValidate:!0,sx:{mt:1},children:[Object(p.jsx)(h.a,{margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoFocus:!0}),Object(p.jsx)(h.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"}),Object(p.jsx)(h.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),Object(p.jsx)(b.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign Up"}),Object(p.jsx)(O.a,{container:!0,children:Object(p.jsx)(O.a,{item:!0,children:Object(p.jsx)(S.b,{to:"/signin",children:"Already have an account? Sign In instead"})})}),Object(p.jsx)(O.a,{container:!0,children:Object(p.jsx)(O.a,{item:!0,children:Object(p.jsx)(S.b,{to:"/signup/coach",children:"Are you a Coach?"})})})]})]})]})})},U=n(221),q=n(222),T=n(223),P=n(105),V=n(104),F=n.n(V),G=n(216),L=n(210),z=n(213),M=["Home","Store"],B=function(e){var t=e.btnLogOut,n=a.useState(null),r=Object(u.a)(n,2),c=r[0],i=r[1],s=a.useState(null),o=Object(u.a)(s,2),l=o[0],j=o[1],d=function(){i(null)};return Object(p.jsx)(U.a,{position:"static",children:Object(p.jsx)(g.a,{maxWidth:"xl",children:Object(p.jsxs)(q.a,{disableGutters:!0,children:[Object(p.jsx)(v.a,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:{xs:"none",md:"flex"}},children:"LOGO"}),Object(p.jsxs)(f.a,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:[Object(p.jsx)(T.a,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){i(e.currentTarget)},color:"inherit",children:Object(p.jsx)(F.a,{})}),Object(p.jsx)(P.a,{id:"menu-appbar",anchorEl:c,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(c),onClose:d,sx:{display:{xs:"block",md:"none"}},children:M.map((function(e){return Object(p.jsx)(z.a,{onClick:d,children:Object(p.jsx)(v.a,{textAlign:"center",children:e})},e)}))})]}),Object(p.jsx)(v.a,{variant:"h6",noWrap:!0,component:"div",sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:"LOGO"}),Object(p.jsx)(f.a,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:M.map((function(e){return Object(p.jsx)(b.a,{onClick:d,sx:{my:2,color:"white",display:"block"},children:e},e)}))}),Object(p.jsxs)(f.a,{sx:{flexGrow:0},children:[Object(p.jsx)(L.a,{title:"Open settings",children:Object(p.jsx)(T.a,{onClick:function(e){j(e.currentTarget)},sx:{p:0},children:Object(p.jsx)(G.a,{alt:"Remy Sharp",src:"/static/images/avatar/2.jpg"})})}),Object(p.jsxs)(P.a,{sx:{mt:"45px"},id:"menu-appbar",anchorEl:l,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(l),onClose:function(){j(null)},children:[Object(p.jsx)(z.a,{onClick:d,children:Object(p.jsx)(S.b,{to:"/profile",children:Object(p.jsx)(v.a,{textAlign:"center",children:"Profile"})})}),Object(p.jsx)(z.a,{onClick:t,children:Object(p.jsx)(v.a,{textAlign:"center",children:"Logout"})})]})]})]})})})},N=Object(a.createContext)();function _(e){var t=Object(a.useState)(null),n=Object(u.a)(t,2),r=n[0],c=n[1];return Object(p.jsx)(N.Provider,{value:{user:r,setUser:c},children:e.children})}var H=function(){var e=Object(a.useContext)(N).user;return console.log(e),e?Object(p.jsxs)("div",{children:["Hello this is ",e.name]}):Object(p.jsx)("p",{children:"Loading bitch"})};var J=function(){return Object(p.jsx)("div",{children:"Main page"})},R=n(209);var K=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.a.get("".concat(I,"/workouts"),{withCredentials:!0});case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),console.log(n)}),[]),n.length?Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"This is the store"}),n.map((function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:e.name}),Object(p.jsx)(S.b,{to:"/store/".concat(e._id),children:e._id})]})}))]}):Object(p.jsx)(R.a,{animation:"grow",variant:"dark"})};var Q=function(){var e=Object(d.g)().id,t=Object(a.useState)(null),n=Object(u.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){var t=function(){var t=Object(j.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,W.a.get("".concat(I,"/workouts/").concat(e),{withCredentials:!0});case 2:n=t.sent,c(n.data),console.log(n.data);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]),r?Object(p.jsxs)("div",{children:[Object(p.jsx)("img",{src:r.image}),"Item n\xba ",e]}):Object(p.jsx)(R.a,{animation:"grow",variant:"dark"})},X=Object(w.a)();var Y=function(e){var t=e.onSignIn;return e.myError,Object(p.jsx)(y.a,{theme:X,children:Object(p.jsxs)(g.a,{component:"main",maxWidth:"xs",children:[Object(p.jsx)(x.a,{}),Object(p.jsxs)(f.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(p.jsx)(v.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(p.jsxs)(f.a,{component:"form",onSubmit:t,noValidate:!0,sx:{mt:1},children:[Object(p.jsx)(h.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),Object(p.jsx)(h.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",helperText:e.myError?e.myError:"",error:!!e.myError}),Object(p.jsx)(b.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign In"}),Object(p.jsx)(O.a,{container:!0,children:Object(p.jsx)(O.a,{item:!0,children:Object(p.jsx)(S.b,{to:"/signup",children:"Don't have an account? Sign Up"})})})]})]})]})})},Z=Object(w.a)();var $=function(e){var t=Object(d.f)(),n=function(){var e=Object(j.a)(l.a.mark((function e(n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a={username:n.target.username.value,email:n.target.email.value,password:n.target.password.value},e.next=4,W.a.post("".concat(I,"/signup/coach"),a,{withCredentials:!0});case 4:t("/signin/coach");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)(y.a,{theme:Z,children:Object(p.jsxs)(g.a,{component:"main",maxWidth:"xs",children:[Object(p.jsx)(x.a,{}),Object(p.jsxs)(f.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(p.jsx)(v.a,{component:"h1",variant:"h5",children:"Sign Up"}),Object(p.jsxs)(f.a,{component:"form",onSubmit:n,noValidate:!0,sx:{mt:1},children:[Object(p.jsx)(h.a,{margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoFocus:!0}),Object(p.jsx)(h.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"}),Object(p.jsx)(h.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),Object(p.jsx)(b.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign Up"}),Object(p.jsx)(O.a,{container:!0,children:Object(p.jsx)(O.a,{item:!0,children:Object(p.jsx)(S.b,{to:"/signin",children:"Already have an account? Sign In instead"})})})]})]})]})})},ee=n(224);var te=function(e){var t=e.btnSubmit;return Object(p.jsxs)("form",{onSubmit:t,children:[Object(p.jsx)("input",{name:"name",type:"text",placeholder:"Enter name"}),Object(p.jsx)("input",{name:"description",type:"text",placeholder:"Enter desc"}),Object(p.jsx)("input",{type:"file",name:"myImage",accept:"image/png, image/jpg"}),Object(p.jsx)(ee.a,{type:"submit",children:"Submit"})]})};var ne=function(){var e=Object(d.g)().id;return Object(p.jsxs)("div",{children:[Object(p.jsxs)("h3",{children:["Edit Component ",e]}),Object(p.jsxs)("form",{onSubmit:!0,children:[Object(p.jsx)("input",{defaultValue:"name",name:"name",type:"text",placeholder:"Enter name"}),Object(p.jsx)("input",{defaultValue:"description",name:"description",type:"text",placeholder:"Enter desc"}),Object(p.jsx)("button",{type:"submit",children:"Edit"})]})]})};var ae=function(e){var t=Object(a.useContext)(N).user,n=e.btnEdit;return console.log(t),t?Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:"Edit Component"}),Object(p.jsxs)("form",{onSubmit:function(e){n(e,t._id)},children:[Object(p.jsx)("input",{defaultValue:t.name,name:"name",type:"text",placeholder:"Enter name"}),Object(p.jsx)("input",{defaultValue:t.description,name:"description",type:"text",placeholder:"Enter desc"}),Object(p.jsx)("button",{type:"submit",children:"Edit"})]})]}):Object(p.jsx)(R.a,{animation:"grow",variant:"dark"})};var re=function(){var e=Object(a.useContext)(N),t=e.user,n=e.setUser,r=Object(a.useState)(null),c=Object(u.a)(r,2),i=c[0],o=c[1],b=Object(a.useState)([]),x=Object(u.a)(b,2),h=x[0],O=x[1],f=Object(a.useState)(!0),v=Object(u.a)(f,2),g=v[0],w=v[1],y=Object(d.f)();Object(a.useEffect)((function(){var e=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W.a.get("".concat(I,"/user"),{withCredentials:!0});case 3:t=e.sent,w(!1),n(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),w(!1);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var S=function(){var e=Object(j.a)(l.a.mark((function e(a){var r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,r={email:a.target.email.value,password:a.target.password.value},e.next=5,W.a.post("".concat(I,"/signin"),r,{withCredentials:!0});case 5:c=e.sent,console.log(c.data),n(r),console.log(t),y("/"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),o(e.t0.response.data.error);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(j.a)(l.a.mark((function e(t){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,a={email:t.target.email.value,password:t.target.password.value},e.next=5,W.a.post("".concat(I,"/signin/coach"),a,{withCredentials:!0});case 5:r=e.sent,console.log(r.data),n(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),o(e.t0.response.data.error);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.a.post("".concat(I,"/logout"),{},{withCredentials:!0});case 2:n(null);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,a,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(n=new FormData).append("imageUrl",t.target.myImage.files[0]),e.next=5,W.a.post("".concat(I,"/upload"),n);case 5:return a=e.sent,r={name:t.target.name.value,description:t.target.description.value,image:a.data.image},e.next=9,W.a.post("".concat(I,"/workouts/create"),r,{withCredentials:!0});case 9:c=e.sent,O([c.data].concat(Object(s.a)(h)));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(j.a)(l.a.mark((function e(a,r){var c,i,s,o,j;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),c={name:a.target.name.value,description:a.target.description.value},!t.isCoach){e.next=14;break}return e.next=5,W.a.patch("".concat(I,"/profile/coach/").concat(r),c,{withCredentials:!0});case 5:i=e.sent,console.log(i.data),(s=t).name=i.data.name,s.description=i.data.description,n(s),console.log("coach"),e.next=22;break;case 14:return e.next=16,W.a.patch("".concat(I,"/profile/").concat(r),c,{withCredentials:!0});case 16:o=e.sent,(j=t).name=o.data.name,j.description=o.data.description,n(j),console.log("user",o.data);case 22:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return g?Object(p.jsx)("p",{children:"Fetching"}):Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(B,{btnLogOut:E}),Object(p.jsxs)(d.c,{children:[Object(p.jsx)(d.a,{path:"/",element:Object(p.jsx)(J,{})}),Object(p.jsx)(d.a,{path:"/signin",element:Object(p.jsx)(C,{onSignIn:S,myError:i})}),Object(p.jsx)(d.a,{path:"/signin/coach",element:Object(p.jsx)(Y,{onSignIn:k,myError:i})}),Object(p.jsx)(d.a,{path:"/signup",element:Object(p.jsx)(A,{})}),Object(p.jsx)(d.a,{path:"/signup/coach",element:Object(p.jsx)($,{})}),Object(p.jsx)(d.a,{path:"/*",element:Object(p.jsx)(m,{})}),Object(p.jsx)(d.a,{path:"/store",element:Object(p.jsx)(K,{})}),Object(p.jsx)(d.a,{path:"/store/:id",element:Object(p.jsx)(Q,{})}),Object(p.jsx)(d.a,{path:"/profile",element:Object(p.jsx)(H,{fetching:g})}),Object(p.jsx)(d.a,{path:"/profile/edit",element:Object(p.jsx)(ae,{btnEdit:U})}),Object(p.jsx)(d.a,{path:"/workouts/create",element:Object(p.jsx)(te,{btnSubmit:D})}),Object(p.jsx)(d.a,{path:"/workouts/:id/edit",element:Object(p.jsx)(ne,{})})]})]})};i.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(S.a,{children:Object(p.jsx)(_,{children:Object(p.jsx)(re,{})})})}),document.getElementById("root"))}},[[154,1,2]]]);
//# sourceMappingURL=main.9c6e655f.chunk.js.map