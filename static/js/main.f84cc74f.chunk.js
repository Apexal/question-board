(this.webpackJsonpjeopardy=this.webpackJsonpjeopardy||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),o=n.n(s),r=n(6),i=n.n(r),a=(n(12),n(13),n(7)),c=n(4),u=(n(14),n(0));var l=function(e){var t=e.questionPosition,n=e.question,s=e.isRevealed,o=e.handleSelect,r=t.questionIndex+1;return Object(u.jsxs)("td",{className:"question-board-cell level-".concat(r," ").concat(s?"is-revealed":""),onClick:function(){return o(t)},children:[!s&&Object(u.jsxs)("div",{children:["Level ",r]}),s&&Object(u.jsx)("div",{children:n.questionText})]})};n(16);var d=function(e){var t=e.title,n=e.categories,o=n.reduce((function(e,t){return Math.max(e,t.questions.length)}),0),r=Object(s.useState)({categoryIndex:-1,questionIndex:-1}),i=Object(c.a)(r,2),d=i[0],h=i[1],x=-1!==d.categoryIndex&&-1!==d.questionIndex,j=x?n[d.categoryIndex].questions[d.questionIndex]:null,v=Object(s.useState)([]),q=Object(c.a)(v,2),b=q[0],T=q[1],O=function(e){var t=e.categoryIndex,n=e.questionIndex;return void 0!==b.find((function(e){return e.categoryIndex===t&&e.questionIndex===n}))},m=Array.from(Array(o).keys());function I(e){O(e)||T([].concat(Object(a.a)(b),[e])),h(e)}var p=Object(s.useState)(!1),f=Object(c.a)(p,2),g=f[0],w=f[1];return Object(u.jsxs)("div",{className:"question-board",children:[Object(u.jsx)("h1",{className:"question-board-title",children:t}),x&&Object(u.jsxs)("div",{className:"question-card ".concat(g?"flipped":""),children:[Object(u.jsxs)("div",{className:"question-card-inner",children:[Object(u.jsxs)("div",{className:"question-card-front",children:[Object(u.jsx)("h6",{children:"Question"}),Object(u.jsx)("p",{className:"question-card-content",children:null===j||void 0===j?void 0:j.questionText}),Object(u.jsx)("button",{onClick:function(){return w(!0)},children:"Show Answer"})]}),Object(u.jsxs)("div",{className:"question-card-back",children:[Object(u.jsx)("h6",{children:"Answer"}),Object(u.jsx)("p",{className:"question-card-content",children:null===j||void 0===j?void 0:j.answerText}),Object(u.jsx)("button",{onClick:function(){return w(!1)},children:"Hide Answer"}),Object(u.jsx)("button",{onClick:function(){h({questionIndex:-1,categoryIndex:-1}),w(!1)},children:"Back"})]})]}),Object(u.jsx)("div",{})]}),!x&&Object(u.jsxs)("table",{children:[Object(u.jsx)("thead",{children:Object(u.jsx)("tr",{children:n.map((function(e,t){return Object(u.jsx)("th",{children:e.title},t)}))})}),Object(u.jsx)("tbody",{children:m.map((function(e){return Object(u.jsx)("tr",{children:n.map((function(t,n){return Object(u.jsx)(l,{questionPosition:{categoryIndex:n,questionIndex:e},question:t.questions[e],isRevealed:O({categoryIndex:n,questionIndex:e}),handleSelect:I},n)}))},e)}))})]})]})},h=[{title:"Parts of Atoms",questions:[{questionText:"Where are protons located in an atom?",answerText:"In the nucleus or in the center",isRevealed:!1},{questionText:"What is the charge of an electron?",answerText:"Negative",isRevealed:!1},{questionText:"Where are protons located in an atom?",answerText:"In the nucleus or in the center",isRevealed:!1},{questionText:"Where are protons located in an atom?",answerText:"In the nucleus or in the center",isRevealed:!1},{questionText:"Where are protons located in an atom?",answerText:"In the nucleus or in the center",isRevealed:!1}]},{title:"Other Thing",questions:[{questionText:"Where are protons located in an atom?",answerText:"In the nucleus or in the center",isRevealed:!1},{questionText:"What is the charge of an electron?",answerText:"Negative",isRevealed:!1},{questionText:"Where are protons located in an atom?",answerText:"In the nucleus or in the center",isRevealed:!1},{questionText:"Where are protons located in an atom?",answerText:"In the nucleus or in the center",isRevealed:!1},{questionText:"Where are protons located in an atom?",answerText:"In the nucleus or in the center",isRevealed:!1}]},{title:"Other Thing",questions:[{questionText:"Where are protons located in an atom?",answerText:"In the nucleus or in the center",isRevealed:!1},{questionText:"What is the charge of an electron?",answerText:"Negative",isRevealed:!1},{questionText:"Where are protons located in an atom?",answerText:"In the nucleus or in the center",isRevealed:!1},{questionText:"Where are protons located in an atom?",answerText:"In the nucleus or in the center",isRevealed:!1},{questionText:"Where are protons located in an atom?",answerText:"In the nucleus or in the center",isRevealed:!1}]},{title:"Other Thing",questions:[{questionText:"Where are protons located in an atom?",answerText:"In the nucleus or in the center",isRevealed:!1},{questionText:"What is the charge of an electron?",answerText:"Negative",isRevealed:!1},{questionText:"Where are protons located in an atom?",answerText:"In the nucleus or in the center",isRevealed:!1},{questionText:"Where are protons located in an atom?",answerText:"In the nucleus or in the center",isRevealed:!1},{questionText:"Where are protons located in an atom?",answerText:"In the nucleus or in the center",isRevealed:!1}]}];var x=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)("main",{children:Object(u.jsx)(d,{title:"Middle School Science",categories:h})})})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,s=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),s(e),o(e),r(e),i(e)}))};i.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root")),j()}],[[17,1,2]]]);
//# sourceMappingURL=main.f84cc74f.chunk.js.map