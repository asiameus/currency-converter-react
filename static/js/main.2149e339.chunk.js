(this["webpackJsonpcurrency-converter-react"]=this["webpackJsonpcurrency-converter-react"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(13)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(3),o=a.n(c),l=(a(9),a(1)),u=(a(10),[{short:"USD",name:"Dolar ameryka\u0144ski",rate:4.4278},{short:"EUR",name:"Euro",rate:4.9384},{short:"GBP",name:"Funt brytyjski",rate:3.9058}]),s=(a(11),function(e){var t=e.result;return n.a.createElement("p",{className:"result"},void 0!==t&&n.a.createElement(n.a.Fragment,null,t.sourceAmount.toFixed(2),"\xa0PLN\xa0="," ",t.targetAmount.toFixed(2),"\xa0",t.currency))}),m=(a(12),function(e){var t=e.calculateResult,a=e.result,c=Object(r.useState)(u[0].short),o=Object(l.a)(c,2),m=o[0],i=o[1],f=Object(r.useState)(""),p=Object(l.a)(f,2),E=p[0],h=p[1];return n.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault(),t(m,E)}},n.a.createElement("h1",{className:"form__header"},"Konwerter walut"),n.a.createElement("p",{className:"form__section"},n.a.createElement("label",{className:"form__label",for:"amount"},"Wpisz kwot\u0119 w PLN"),n.a.createElement("input",{value:E,onChange:function(e){var t=e.target;return h(t.value)},className:"form__field",name:"amount",type:"number",min:"0.01",step:"0.01",required:!0})),n.a.createElement("p",{className:"form__section"},n.a.createElement("label",{className:"form__label",for:"currency"},"Wybierz docelow\u0105 walut\u0119"),n.a.createElement("select",{value:m,onChange:function(e){var t=e.target;return i(t.value)},className:"form__field",name:"currency",required:!0},u.map((function(e){return n.a.createElement("option",{key:e.short,value:e.short},e.name)})))),n.a.createElement("p",null,n.a.createElement("button",{className:"form__button"},"Przelicz")),n.a.createElement(s,{result:a}),n.a.createElement("p",{className:"form__info"},"Wg \u015brednich kurs\xf3w z dnia 19.06.2020, za: npb.pl"),n.a.createElement("p",{className:"form__footer"},"\xa9 Asia Meu\u015b 2020"))});var i=function(){var e=Object(r.useState)(),t=Object(l.a)(e,2),a=t[0],c=t[1];return n.a.createElement("div",{className:"app"},n.a.createElement(m,{result:a,calculateResult:function(e,t){var a=u.find((function(t){return t.short===e})).rate;c({sourceAmount:+t,targetAmount:t/a,currency:e})}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(i,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.2149e339.chunk.js.map