(this.webpackJsonpsuperchat=this.webpackJsonpsuperchat||[]).push([[0],{44:function(e,t,n){},46:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var c=n(13),r=n.n(c),i=n(37),a=n.n(i),s=(n(44),n(0)),u=n.n(s),o=n(2),d=n(14),j=(n(46),n(28)),p=(n(52),n(48),n(38)),l=n(39),b=n(15);j.a.initializeApp({apiKey:"AIzaSyCelcu76wPtd7HEGs4RFxldEWZcBLdpzCU",authDomain:"chat-super-9094f.firebaseapp.com",projectId:"chat-super-9094f",storageBucket:"chat-super-9094f.appspot.com",messagingSenderId:"1012913840836",appId:"1:1012913840836:web:431f0c74b523c7343c5f91"});var h=j.a.auth(),f=j.a.firestore();function O(){return Object(b.jsx)("button",{onClick:function(){var e=new j.a.auth.GoogleAuthProvider;h.signInWithPopup(e)},children:"Sign in with Google"})}function m(){return h.currentUser&&Object(b.jsx)("button",{onClick:function(){return h.signOut()},children:"Sign Out"})}function x(){var e=f.collection("messages"),t=e.orderBy("createdAt").limitToLast(1024),n=Object(l.a)(t,{idField:"id"}),r=Object(d.a)(n,1)[0],i=Object(c.useState)(""),a=Object(d.a)(i,2),s=a[0],p=a[1],O=function(){var t=Object(o.a)(u.a.mark((function t(n){var c,r,i,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),c=h.currentUser,r=c.uid,i=c.photoURL,a=c.displayName,t.next=4,e.add({text:a+" : "+s,createdAt:j.a.firestore.FieldValue.serverTimestamp(),uid:r,photoURL:i,displayName:a});case 4:p("");case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("main",{children:r&&r.map((function(e){return Object(b.jsx)(g,{message:e},e.id)}))}),Object(b.jsxs)("form",{onSubmit:O,children:[Object(b.jsx)("input",{value:s,onChange:function(e){return p(e.target.value)},placeholder:"say something nice"}),Object(b.jsx)("button",{type:"submit",disabled:!s,children:"\ud83d\udd4a\ufe0f"})]})]})}function g(e){var t=e.message,n=t.text,c=t.uid,r=t.photoURL,i=c===h.currentUser.uid?"sent":"received";return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"message ".concat(i),children:[Object(b.jsx)("img",{src:r}),Object(b.jsx)("p",{children:n})]})})}var v=function(){var e=Object(p.a)(h),t=Object(d.a)(e,1)[0];return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("header",{children:[Object(b.jsx)("h1",{children:"\u269b\ufe0f\ud83d\udd25\ud83d\udcac"}),Object(b.jsx)(m,{})]}),Object(b.jsx)("section",{children:t?Object(b.jsx)(x,{}):Object(b.jsx)(O,{})})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))};a.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root")),y()}},[[51,1,2]]]);
//# sourceMappingURL=main.7f913756.chunk.js.map