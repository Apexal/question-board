(this.webpackJsonpjeopardy=this.webpackJsonpjeopardy||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(1),i=n.n(o),s=n(6),a=n.n(s),r=(n(12),n(13),n(7)),c=n(4),u=(n(14),n(0));var l=function(e){var t=e.questionPosition,n=e.question,o=e.isRevealed,i=e.handleSelect,s=t.questionIndex+1,a=n.questionText.length<=50?n.questionText:n.questionText.substring(0,50).trim()+"...";return Object(u.jsxs)("td",{className:"question-board-cell level-".concat(s," ").concat(o?"is-revealed":""),onClick:function(){return i(t)},children:[!o&&Object(u.jsxs)("div",{children:["Level ",s]}),o&&Object(u.jsx)("div",{children:a})]})};n(16);var d=function(e){var t=e.title,n=e.categories,i=n.reduce((function(e,t){return Math.max(e,t.questions.length)}),0),s=Object(o.useState)({categoryIndex:-1,questionIndex:-1}),a=Object(c.a)(s,2),d=a[0],h=a[1],b=-1!==d.categoryIndex&&-1!==d.questionIndex,x=b?n[d.categoryIndex].questions[d.questionIndex]:null,p=Object(o.useState)([]),j=Object(c.a)(p,2),f=j[0],m=j[1],y=function(e){var t=e.categoryIndex,n=e.questionIndex;return void 0!==f.find((function(e){return e.categoryIndex===t&&e.questionIndex===n}))},q=Array.from(Array(i).keys());function g(e){y(e)||m([].concat(Object(r.a)(f),[e])),h(e)}var w=Object(o.useState)(!1),v=Object(c.a)(w,2),O=v[0],T=v[1],I=b?"".concat(n[d.categoryIndex].title," Level ").concat(d.questionIndex+1):t;return Object(u.jsxs)("div",{className:"question-board",children:[Object(u.jsx)("h1",{className:"question-board-title",children:I}),b&&Object(u.jsxs)("div",{className:"question-card ".concat(O?"flipped":""),children:[Object(u.jsxs)("div",{className:"question-card-inner",children:[Object(u.jsxs)("div",{className:"question-card-front",children:[Object(u.jsx)("h6",{children:"Question"}),Object(u.jsx)("p",{className:"question-card-content",children:null===x||void 0===x?void 0:x.questionText}),Object(u.jsx)("button",{onClick:function(){h({questionIndex:-1,categoryIndex:-1}),T(!1)},children:"Back"})]}),Object(u.jsxs)("div",{className:"question-card-back",children:[Object(u.jsx)("h6",{children:"Answer"}),Object(u.jsx)("p",{className:"question-card-content",children:null===x||void 0===x?void 0:x.answerText})]})]}),Object(u.jsx)("div",{})]}),!b&&Object(u.jsxs)("table",{children:[Object(u.jsx)("thead",{children:Object(u.jsx)("tr",{children:n.map((function(e,t){return Object(u.jsx)("th",{children:e.title},t)}))})}),Object(u.jsx)("tbody",{children:q.map((function(e){return Object(u.jsx)("tr",{children:n.map((function(t,n){return Object(u.jsx)(l,{questionPosition:{categoryIndex:n,questionIndex:e},question:t.questions[e],isRevealed:y({categoryIndex:n,questionIndex:e}),handleSelect:g},n)}))},e)}))})]})]})},h=[{title:"Biomolecules",questions:[{questionText:"Some people believe that cutting out certain food groups will help with their fitness goals. However, that usually means cutting out biomolecules too. Craft an argument that describes why cutting out certain biomolecules from your diet is bad for you (with as many details as possible!)."},{questionText:"Come up with a product that is supposed to let you eat all of your biomolecules at once. The product can be as silly as you want, but it must be appropriate enough to air on TV."},{questionText:"Saturated fats get a bad rap on TV and online. Describe the difference between unsaturated and saturated fats. Explain why we need both."},{questionText:"Describe the monomer of each biomolecule. In other words, what is each biomolecule made of?"}]},{title:"Hydrophobic Interactions",questions:[{questionText:"Explain the difference between hydrophobic and hydrophilic."},{questionText:"Imagine that there is some molecule called blobberglobin. This molecule has two different parts. One is hydrophilic, and one is hydrophobic. Explain what would happen if you through a bunch of bloggerglobins in water."},{questionText:"Design an experiment to figure out whether molecules are hydrophobic or hydrophilic. What materials would you use? What would you try to observe? How would you view your results?"},{questionText:"Discuss how our biomolecules relate with water. Are carbohydrates hydrophilic or hydrophobic? What about proteins, lipids, and nucleic acids?"}]},{title:"DNA",questions:[{questionText:"Explain why DNA is important. What is it used for? What is its purpose?"},{questionText:"Identify the basic structure of DNA. What are its different parts? How is it shaped?"},{questionText:'Describe base pair rules. What does that mean? If I had a DNA strand that read: "ATTAGCG," what would the matching strand be?'},{questionText:"What does DNA stand for? How does its name relate to its structure?"}]},{title:"Protein Synthesis",questions:[{questionText:"A ribosome is a part of your cell that makes proteins. Write a dramatic backstory for one of your ribosomes. You can name it whatever you want."},{questionText:"What is protein synthesis? Describe what the main goals are."},{questionText:"Describe the process of protein folding. How many steps are there? What do proteins look like?"},{questionText:"Explain the main parts of protein synthesis leading up to the building of the protein with amino acids. Which parts of your cells get involved?"}]}];var b=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)("main",{children:Object(u.jsx)(d,{title:"Middle School Science",categories:h})})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,o=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),o(e),i(e),s(e),a(e)}))};a.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root")),x()}],[[17,1,2]]]);
//# sourceMappingURL=main.0c250e9a.chunk.js.map