(this.webpackJsonpjeopardy=this.webpackJsonpjeopardy||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),i=n.n(s),o=n(6),r=n.n(o),c=(n(12),n(13),n(7)),a=n(4),u=(n(14),n(0));var l=function(e){var t=e.questionPosition,n=e.question,s=e.isRevealed,i=e.handleSelect,o=t.questionIndex+1;return Object(u.jsxs)("td",{className:"question-board-cell level-".concat(o," ").concat(s?"is-revealed":""),onClick:function(){return i(t)},children:[!s&&Object(u.jsxs)("div",{children:["Level ",o]}),s&&Object(u.jsx)("div",{children:n.questionText})]})};n(16);var d=function(e){var t=e.title,n=e.categories,i=n.reduce((function(e,t){return Math.max(e,t.questions.length)}),0),o=Object(s.useState)({categoryIndex:-1,questionIndex:-1}),r=Object(a.a)(o,2),d=r[0],h=r[1],x=-1!==d.categoryIndex&&-1!==d.questionIndex,j=x?n[d.categoryIndex].questions[d.questionIndex]:null,b=Object(s.useState)([]),v=Object(a.a)(b,2),q=v[0],T=v[1],O=function(e){var t=e.categoryIndex,n=e.questionIndex;return void 0!==q.find((function(e){return e.categoryIndex===t&&e.questionIndex===n}))},f=Array.from(Array(i).keys());function m(e){O(e)||T([].concat(Object(c.a)(q),[e])),h(e)}var I=Object(s.useState)(!1),g=Object(a.a)(I,2),p=g[0],w=g[1];return Object(u.jsxs)("div",{className:"question-board",children:[Object(u.jsx)("h1",{className:"question-board-title",children:t}),x&&Object(u.jsxs)("div",{className:"question-card ".concat(p?"flipped":""),children:[Object(u.jsxs)("div",{className:"question-card-inner",children:[Object(u.jsxs)("div",{className:"question-card-front",children:[Object(u.jsx)("h6",{children:"Question"}),Object(u.jsx)("p",{className:"question-card-content",children:null===j||void 0===j?void 0:j.questionText}),Object(u.jsx)("button",{onClick:function(){return w(!0)},children:"Show Answer"})]}),Object(u.jsxs)("div",{className:"question-card-back",children:[Object(u.jsx)("h6",{children:"Answer"}),Object(u.jsx)("p",{className:"question-card-content",children:null===j||void 0===j?void 0:j.answerText}),Object(u.jsx)("button",{onClick:function(){return w(!1)},children:"Hide Answer"}),Object(u.jsx)("button",{onClick:function(){h({questionIndex:-1,categoryIndex:-1}),w(!1)},children:"Back"})]})]}),Object(u.jsx)("div",{})]}),!x&&Object(u.jsxs)("table",{children:[Object(u.jsx)("thead",{children:Object(u.jsx)("tr",{children:n.map((function(e,t){return Object(u.jsx)("th",{children:e.title},t)}))})}),Object(u.jsx)("tbody",{children:f.map((function(e){return Object(u.jsx)("tr",{children:n.map((function(t,n){return Object(u.jsx)(l,{questionPosition:{categoryIndex:n,questionIndex:e},question:t.questions[e],isRevealed:O({categoryIndex:n,questionIndex:e}),handleSelect:m},n)}))},e)}))})]})]})},h=[{title:"Parts of Atoms",questions:[{questionText:"Where are protons located in an atom?",answerText:"In the nucleus or in the center",isRevealed:!1},{questionText:"What is the charge of an electron?",answerText:"Negative",isRevealed:!1},{questionText:"Where are protons located in an atom?",answerText:"In the nucleus or in the center",isRevealed:!1},{questionText:"Where are protons located in an atom?",answerText:"In the nucleus or in the center",isRevealed:!1}]},{title:"Other Thing",questions:[{questionText:"Where are protons located in an atom?",answerText:"In the nucleus or in the center",isRevealed:!1},{questionText:"What is the charge of an electron?",answerText:"Negative",isRevealed:!1},{questionText:"Where are protons located in an atom?",answerText:"In the nucleus or in the center",isRevealed:!1},{questionText:"Where are protons located in an atom?",answerText:"In the nucleus or in the center",isRevealed:!1}]},{title:"Other Thing",questions:[{questionText:"Where are protons located in an atom?",answerText:"In the nucleus or in the center",isRevealed:!1},{questionText:"What is the charge of an electron?",answerText:"Negative",isRevealed:!1},{questionText:"Where are protons located in an atom?",answerText:"In the nucleus or in the center",isRevealed:!1},{questionText:"Where are protons located in an atom?",answerText:"In the nucleus or in the center",isRevealed:!1}]},{title:"Other Thing",questions:[{questionText:"Where are protons located in an atom?",answerText:"In the nucleus or in the center",isRevealed:!1},{questionText:"What is the charge of an electron?",answerText:"Negative",isRevealed:!1},{questionText:"Where are protons located in an atom?",answerText:"In the nucleus or in the center",isRevealed:!1},{questionText:"Where are protons located in an atom?",answerText:"In the nucleus or in the center",isRevealed:!1}]}];var x=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)("main",{children:Object(u.jsx)(d,{title:"Middle School Science",categories:h})})})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),s(e),i(e),o(e),r(e)}))};r.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root")),j()}],[[17,1,2]]]);
//# sourceMappingURL=main.449045c8.chunk.js.map