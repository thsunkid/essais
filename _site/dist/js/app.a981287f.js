(function(t){function e(e){for(var n,i,o=e[0],u=e[1],s=e[2],d=0,p=[];d<o.length;d++)i=o[d],l[i]&&p.push(l[i][0]),l[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);c&&c(e);while(p.length)p.shift()();return r.push.apply(r,s||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var u=a[o];0!==l[u]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},l={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var s=0;s<o.length;s++)e(o[s]);var c=u;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"003d":function(t,e,a){},"01cc":function(t,e,a){},"034f":function(t,e,a){"use strict";a("85ec")},1618:function(t,e,a){"use strict";a("527f")},"1c36":function(t,e,a){"use strict";a("aafe")},"3f08":function(t,e,a){"use strict";a("01cc")},"527f":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app","data-cy":"application-wrapper"}},[a("Translator",{attrs:{apikey:"AIzaSyDgtCLQ8h8UYMSQWhPg08PBJA9WBKBlhCg"}})],1)},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"bv-example-row"},[a("div",[a("SwitcherTheme"),a("language-selector",{on:{onLangSelect:t.updateNativeLang}}),a("MetaData"),a("b-row",[a("b-col",{staticClass:" mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[a("b-form-textarea",{staticClass:"textarea w-100",staticStyle:{"font-family":"monospace","font-size":"15px","min-height":"255px"},attrs:{"data-cy":"source-text-translation-form",type:"text",rows:"9",placeholder:t.placeholder,maxlength:"400","arial-label":"Original text to be correct"},on:{keyup:t.translate},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}}),a("div",{directives:[{name:"show",rawName:"v-show",value:this.inputValue,expression:"this.inputValue"}]},[a("DeleteButton",{attrs:{"data-cy":"delete-text-btn"},on:{deleteText:t.deleteTextValue}})],1),a("b-button",{staticClass:"textarea__buttons textarea__buttons__disabled source-text-btn bg-white p-2",attrs:{id:"copyBtn","data-cy":"source-form-copy-btn",disabled:!this.inputValue,"data-clipboard-text":this.inputValue},on:{click:function(e){t.showTooltipSourceText=!0}}},[a("i",{staticClass:"fas fa-copy"})]),a("b-tooltip",{attrs:{"data-cy":"source-form-copy-btn-tooltip",triggers:"click",show:t.showTooltipSourceText,target:"copyBtn",placement:"left"},on:{"update:show":function(e){t.showTooltipSourceText=e},shown:t.hideTooltipLater}},[a("strong",[t._v("Text Copied")])])],1),a("b-col",{staticClass:"translated-container mb-3",staticStyle:{"padding-bottom":"40px","min-height":"255px"},attrs:{lg:"6",md:"6",sm:"12"}},[a("div",{staticStyle:{height:"100%"}},[this.inputValue?a("div",{staticStyle:{"font-family":"monospace","font-size":"15px","text-align":"left",border:"1px solid #ced4da","border-radius":"0.25rem",padding:"0.375rem 0.75rem",height:"100%"},domProps:{innerHTML:t._s(this.htmlTranslated)}}):a("div",{staticStyle:{"font-family":"monospace","font-size":"15px","text-align":"left",border:"1px solid #ced4da","border-radius":"0.25rem",padding:"0.375rem 0.75rem",height:"100%"},domProps:{innerHTML:t._s(this.tmp)}})]),a("b-button",{staticClass:"textarea__buttons textarea__buttons__disabled p-2 bg-white",attrs:{id:"copyBtn2","data-cy":"target-form-copy-btn",disabled:!this.wordTranslated,"data-clipboard-text":this.wordTranslated},on:{click:function(e){t.showTooltipTranslatedText=!0}}},[a("i",{staticClass:"fas fa-copy"})]),a("b-tooltip",{attrs:{"data-cy":"target-form-copy-btn-tooltip",triggers:"click",show:t.showTooltipTranslatedText,target:"copyBtn2",placement:"left"},on:{"update:show":function(e){t.showTooltipTranslatedText=e},shown:t.hideTooltipLater}},[a("strong",[t._v("Text Copied")])])],1)],1)],1)])},o=[],u=(a("ac6a"),a("96cf"),a("3b8d")),s=a("bc3a"),c=a.n(s),d=a("b311"),p=a.n(d),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"button"},[a("button",{staticClass:"button__clear",on:{click:t.deleteValue}})])},v=[],x={name:"DeleteButton",methods:{deleteValue:function(){this.$emit("deleteText")}}},f=x,m=(a("e595"),a("2877")),g=Object(m["a"])(f,h,v,!1,null,"94ecfe86",null),b=g.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language",attrs:{"data-cy":"language-selector"}},[a("b-row",{staticClass:"justify-content-center"},[a("span",{staticClass:"mr-2 ml-4 my-4"}),a("b-col",{staticClass:"p-0 my-3",attrs:{col:"",lg:"3",md:"3",sm:"10",cols:"9"}},[a("b",{staticStyle:{margin:"0px 30px 0px 0px"}},[t._v("Pick Your Native Language")]),a("b-form-select",{staticClass:"language__selectors",staticStyle:{margin:"0px 30px 0px 0px",width:"70%"},attrs:{"aria-label":"Output text translated"},on:{input:t.onOptionToSelect},model:{value:t.optionTo,callback:function(e){t.optionTo=e},expression:"optionTo"}},[a("option",{attrs:{value:"vi"}},[t._v("Vietnamese (default)")]),t._v("; "),t._l(t.languageOptions,(function(e,n){return a("option",{key:n,domProps:{value:e}},[t._v(t._s(e.text))])}))],2)],1)],1)],1)},T=[],w=a("9a5e"),_={name:"LanguageSelector",data:function(){return{languageOptions:w,optionTo:"vi",btnRotated:!1}},methods:{onOptionToSelect:function(){this.$emit("onLangSelect",this.optionTo)}}},k=_,C=(a("1c36"),Object(m["a"])(k,y,T,!1,null,"0768deec",null)),S=C.exports,j=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"link",attrs:{"data-cy":"meta-data"}},[a("p",{staticClass:"text-secondary"},[a("a",{staticClass:"link__vue font-weight-bold text-decoration-none",attrs:{target:"_blank",rel:"noopener"}},[t._v(" Debug your thoughts.")])])])}],L={name:"MetaData"},M=L,P=(a("b232"),Object(m["a"])(M,j,O,!1,null,"afab89dc",null)),E=P.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"switcher"},[a("h1",{staticClass:"switcher__title",attrs:{"data-cy":"header-title"}},[t._v(t._s(t.title))])])},V=[],N={name:"SwitcherTheme",props:{title:{type:String,required:!1,default:"Essais"}},data:function(){return{checked:!0}},methods:{changeThemeColor:function(){var t=document.getElementById("app-wrapper"),e=t.className;t.className="dark-mode"==e?"light-mode":"dark-mode"}}},z=N,A=(a("3f08"),Object(m["a"])(z,B,V,!1,null,null,null)),D=A.exports,H=a("bf68"),$=(a("7e6e"),{name:"Translator",props:{apikey:{type:String,required:!0}},components:{DeleteButton:b,LanguageSelector:S,MetaData:E,SwitcherTheme:D},data:function(){return{placeholder:"ฅ^•ﻌ•^ฅ Write down what you think ...\n.\n.\n.\n.(Currently limited to 400 characters)",wordTranslated:"",tmp:'<span style="color: rgb(109, 117, 125);">Here is a (maybe) better version of it. </span>',inputValue:"",languageFrom:null,nativeLang:"vi",languageTitle:null,loading:!0,showTooltipSourceText:!1,showTooltipTranslatedText:!1}},mounted:function(){new p.a(".btn"),this.preloaderSpinner()},computed:{languageTitleChange:function(){return this.languageTitle}},methods:{preloaderSpinner:function(){var t=this;setTimeout((function(){t.loading=!1}),1500)},hideTooltipLater:function(){var t=this;setTimeout((function(){t.showTooltipSourceText=!1,t.showTooltipTranslatedText=!1}),1e3)},callAPI:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(e,a,n){var l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.a.post("https://translation.googleapis.com/language/translate/v2?key="+this.apikey,{q:n,target:e,source:a,format:"text"});case 2:return l=t.sent,t.abrupt("return",l.data.data.translations[0].translatedText);case 4:case"end":return t.stop()}}),t,this)})));function e(e,a,n){return t.apply(this,arguments)}return e}(),translate:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(e){var a,n,l,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("Enter"!=e.key){t.next=17;break}return t.next=3,this.callAPI(this.nativeLang,"en",this.inputValue);case 3:return this.tmp=t.sent,t.next=6,this.callAPI("en",this.nativeLang,this.tmp);case 6:this.wordTranslated=t.sent,a=H["diffWords"](this.inputValue,this.wordTranslated,!1),n=document.createElement("span"),l=document.createElement("span"),r=function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(e){var a,r,i,o,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=e.added?"#bfeaa6":e.removed?"#f9efef":"#ffffff00",r=e.added?"":e.removed?"line-through":"",i=document.createElement("span"),i.style.background=a,i.style.textDecoration=r," "==e.value.slice(-1)&&(e.added||e.removed)?(i.appendChild(document.createTextNode(e.value.slice(0,-1))),o=i.cloneNode(!0),e.added||(n.appendChild(i),n.appendChild(document.createTextNode(" "))),e.removed||(l.appendChild(o),l.appendChild(document.createTextNode(" ")))):(i.appendChild(document.createTextNode(e.value)),u=i.cloneNode(!0),e.added||n.appendChild(i),e.removed||l.appendChild(u));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),a.forEach(r),n.appendChild(document.createElement("br")),n.appendChild(document.createElement("br")),n.append(l),this.htmlTranslated=n.innerHTML,this.tmp='<span style="color: rgb(109, 117, 125);">Here is a (maybe) better version of it. </span>';case 17:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),updateNativeLang:function(t){this.languageTitle=t.text+" Female",this.nativeLang=t.value},deleteTextValue:function(){this.inputValue="",this.wordTranslated="",this.htmlTranslated=""}}}),I=$,R=(a("1618"),Object(m["a"])(I,i,o,!1,null,null,null)),K=R.exports,U={name:"app",components:{Translator:K}},q=U,G=(a("034f"),Object(m["a"])(q,l,r,!1,null,null,null)),J=G.exports,W=a("5f5b");a("f9e3"),a("2dd8");n["default"].config.productionTip=!1,n["default"].use(W["a"]),new n["default"]({render:function(t){return t(J)}}).$mount("#app")},"7b3d":function(t,e,a){},"85ec":function(t,e,a){},"9a5e":function(t){t.exports=[{text:"Afrikaans",value:"af"},{text:"Albanian",value:"sq"},{text:"Amharic",value:"am"},{text:"Arabic",value:"ar"},{text:"Armenian",value:"hy"},{text:"Azerbaijan",value:"az"},{text:"Bashkir",value:"ba"},{text:"Basque",value:"eu"},{text:"Belarusian",value:"be"},{text:"Bengali",value:"bn"},{text:"Bosnian",value:"bs"},{text:"Bulgarian",value:"bg"},{text:"Burmese",value:"my"},{text:"Catalan ",value:"ca"},{text:"Cebuano ",value:"ceb"},{text:"Chinese ",value:"zh"},{text:"Croatian ",value:"hr"},{text:"Czech ",value:"cs"},{text:"Danish ",value:"da"},{text:"Dutch",value:"nl"},{text:"US English",value:"en"},{text:"Esperanto ",value:"eo"},{text:"Estonian ",value:"et"},{text:"Finnish ",value:"fi"},{text:"French ",value:"fr"},{text:"Galician",value:"gl"},{text:"Georgian ",value:"ka"},{text:"German ",value:"de"},{text:"Greek ",value:"el"},{text:"Gujarati ",value:"gu"},{text:"Haitian (Creole)",value:"ht"},{text:"Hebrew ",value:"he"},{text:"Hill Mari ",value:"mrj"},{text:"Hindi ",value:"hi"},{text:"Hungarian",value:"hu"},{text:"Icelandic ",value:"is"},{text:"Indonesian ",value:"id"},{text:"Irish ",value:"ga"},{text:"Italian ",value:"it"},{text:"Japanese ",value:"ja"},{text:"Javanese ",value:"jv"},{text:"Kannada ",value:"kn"},{text:"Kazakh ",value:"kk"},{text:"Khmer ",value:"km"},{text:"Korean ",value:"ko"},{text:"Kyrgyz ",value:"ky"},{text:"Laotian ",value:"lo"},{text:"Latin ",value:"la"},{text:"Latvian ",value:"lv"},{text:"Lithuanian ",value:"lt"},{text:"Luxembourgish ",value:"lb"},{text:"Macedonian ",value:"mk"},{text:"Malagasy ",value:"mg"},{text:"Malay ",value:"ms"},{text:"Malayalam ",value:"ml"},{text:"Maltese ",value:"mt"},{text:"Maori ",value:"mi"},{text:"Marathi ",value:"mr"},{text:"Mari ",value:"mhr"},{text:"Mongolian ",value:"mn"},{text:"Nepali ",value:"ne"},{text:"Norwegian ",value:"no"},{text:"Papiamento ",value:"pap"},{text:"Persian ",value:"fa"},{text:"Polish ",value:"pl"},{text:"Portuguese ",value:"pt"},{text:"Punjabi ",value:"pa"},{text:"Romanian ",value:"ro"},{text:"Russian ",value:"ru"},{text:"Scottish ",value:"gd"},{text:"Serbian ",value:"sr"},{text:"Sinhala ",value:"si"},{text:"Slovakian ",value:"sk"},{text:"Slovenian ",value:"sl"},{text:"Spanish ",value:"es"},{text:"Sundanese ",value:"su"},{text:"Swahili ",value:"sw"},{text:"Swedish ",value:"sv"},{text:"Tagalog ",value:"tl"},{text:"Tajik ",value:"tg"},{text:"Tamil ",value:"ta"},{text:"Tatar ",value:"tt"},{text:"Telugu ",value:"te"},{text:"Thai ",value:"th"},{text:"Turkish ",value:"tr"},{text:"Udmurt ",value:"udm"},{text:"Ukrainian ",value:"uk"},{text:"Urdu ",value:"ur"},{text:"Uzbek ",value:"uz"},{text:"Vietnamese",value:"vi"},{text:"Welsh",value:"cy"},{text:"Xhosa ",value:"xh"},{text:"Yiddish ",value:"yi"}]},aafe:function(t,e,a){},b232:function(t,e,a){"use strict";a("003d")},e595:function(t,e,a){"use strict";a("7b3d")}});
//# sourceMappingURL=app.a981287f.js.map